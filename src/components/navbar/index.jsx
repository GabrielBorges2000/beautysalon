import './styles.css'

const nav = [
  {
    title: 'Início',
    href: 'inicio'
  },
  {
    title: 'Sobre',
    href: 'sobre'
  },
  {
    title: 'Serviços',
    href: 'servico'
  },
  {
    title: 'Depoimentos',
    href: 'depoimento'
  },
  {
    title: 'Contato',
    href: 'contato'
  }
];

export function Navbar() {
  
  return (
    <header className='container'>
      <h1>beauty<span>salon</span>.</h1>

      <nav>
        {nav.map((nav) => <a key={nav.title} href={nav.href} >{nav.title}</a>)}
      </nav>
    </header>
  )
}