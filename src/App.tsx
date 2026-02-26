import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Manifesto } from "./components/Manifesto";
import { Interviews } from "./components/Interviews";
import { YouTubeCTA } from "./components/YouTubeCTA";
import { Submissions } from "./components/Submissions";
import { Team } from "./components/Team";
import { Partnerships } from "./components/Partnerships";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #EF4444; }
        ::-webkit-scrollbar-thumb:hover { background: #DC2626; }
      `}</style>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0A0A0A",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#fff",
          },
        }}
      />

      <Navbar />
      <Hero />
      <Manifesto />
      <Interviews />
      <YouTubeCTA />
      <Submissions />
      <Team />
      <Partnerships />
      <Footer />
    </div>
  );
}
