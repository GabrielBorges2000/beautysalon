import { Contato } from "./components/contato";
import { Depoimentos } from "./components/depoimentos";
import { Footer } from "./components/footer";
import { Inicio } from "./components/inicio";
import { Navbar } from "./components/navbar";
import { Servicos } from "./components/servicos";
import { Sobre } from "./components/sobre";

export default function App() {
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