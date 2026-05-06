import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import { Upload } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Adja meg a nevét").max(100),
  email: z.string().trim().email("Érvénytelen e-mail cím").max(255),
  phone: z.string().trim().min(6, "Adja meg a telefonszámát").max(30),
  message: z.string().trim().min(5, "Írjon pár szót a problémáról").max(2000),
});

interface Props { topic?: string; }

const ContactForm = ({ topic = "Általános" }: Props) => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message"),
    });
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Köszönjük! Hamarosan jelentkezünk.");
      (e.target as HTMLFormElement).reset();
      setFiles([]);
    }, 600);
  };

  return (
    <form onSubmit={onSubmit} className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-card space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Név *</Label>
          <Input id="name" name="name" required maxLength={100} />
        </div>
        <div>
          <Label htmlFor="phone">Telefon *</Label>
          <Input id="phone" name="phone" type="tel" required maxLength={30} />
        </div>
      </div>
      <div>
        <Label htmlFor="email">E-mail *</Label>
        <Input id="email" name="email" type="email" required maxLength={255} />
      </div>
      <div>
        <Label htmlFor="message">Üzenet *</Label>
        <Textarea id="message" name="message" required rows={5} maxLength={2000} placeholder={`Téma: ${topic}. Írja le röviden a problémát, kazán típust, hibakódot...`} />
      </div>
      <div>
        <Label htmlFor="photos">Fotók csatolása (kazán, kapu, hibakód)</Label>
        <label htmlFor="photos" className="mt-1 flex items-center gap-3 border-2 border-dashed border-border rounded-md px-4 py-3 cursor-pointer hover:border-primary transition-colors">
          <Upload className="h-5 w-5 text-primary" />
          <span className="text-sm text-muted-foreground">
            {files.length > 0 ? `${files.length} fájl kiválasztva` : "Kattintson vagy húzzon ide képeket"}
          </span>
          <input id="photos" type="file" multiple accept="image/*" className="hidden"
            onChange={(e) => setFiles(Array.from(e.target.files ?? []))} />
        </label>
      </div>
      <Button type="submit" variant="cta" size="lg" disabled={loading} className="w-full md:w-auto">
        {loading ? "Küldés..." : "Ajánlatkérés elküldése"}
      </Button>
    </form>
  );
};

export default ContactForm;
