import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"

export default function Home() {

  const clientes = [
    new Cliente('Max', 22, '1'),
    new Cliente('João', 32, '2')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente)
  }

  return (
    <div className={`
      flex h-screen 
      justify-center 
      items-center bg-gradient-to-r 
      from-blue-500 to-purple-500 
      text-white`}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>    
  )
}
