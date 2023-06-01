import { Contato } from "./components/contato";
import { Depoimentos } from "./components/depoimentos";
import { Footer } from "./components/footer";
import { Inicio } from "./components/inicio";
import { Navbar } from "./components/navbar";
import { Servicos } from "./components/servicos";
import { Sobre } from "./components/sobre";

import AOS from 'aos';

export default function App() {
  AOS.init({
    delay: 500,
    duration: 500
  })
  return (
    <div>
      <Navbar />
      <main>
        <Inicio />
        <Sobre />
        <Servicos />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}