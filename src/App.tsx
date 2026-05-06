import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/site/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Repair from "./pages/Repair";
import Parts from "./pages/Parts";
import Replacement from "./pages/Replacement";
import Gates from "./pages/Gates";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/bemutatkozas" element={<About />} />
            <Route path="/javitas-karbantartas" element={<Repair />} />
            <Route path="/alkatreszek" element={<Parts />} />
            <Route path="/kazancsere" element={<Replacement />} />
            <Route path="/kapumotorok" element={<Gates />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/kapcsolat" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
