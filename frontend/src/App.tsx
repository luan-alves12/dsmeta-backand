import Header from "./components/Header"
import SalesCard from "./components/SalesCard"

function App() {

  return (

    <>
      <Header />

      <main>
        <section id="sales">
          <div className="dsmeta-conteiner">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App

/*Abaixo da tag <NotificationButton foi colocado uma tag </> isso porque o react não
permite mais de 1 tag , o nome dessa tag e : fragment*/ 