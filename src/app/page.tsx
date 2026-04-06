import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicos from "@/components/Servicos";
import ComoFunciona from "@/components/ComoFunciona";
import Numeros from "@/components/Numeros";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Servicos />
        <ComoFunciona />
        <Numeros />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
