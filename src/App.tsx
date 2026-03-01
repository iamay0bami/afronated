import { Toaster } from "sonner@2.0.3";
import { Navbar, NavbarSpacer } from "./components/Navbar";
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
      {/* Smooth scroll behavior */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #000;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #EF4444;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #DC2626;
        }
      `}</style>

      <Toaster position="bottom-right" />

      {/* Fixed navbar sits above everything */}
      <Navbar />
      {/* Spacer pushes page content below the 4rem fixed navbar */}
      <NavbarSpacer />

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