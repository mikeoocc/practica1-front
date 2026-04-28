import './App.css'
import './components/Lesson/index.css'
import { Lesson } from './components/Lesson'

function App() {

  return (
    <div className="background">

      <div className="titulo">
        <img src="/titulo.png"></img>
      </div>


      <div className="contenedorPrincipal">

        <div className="contenedorIzq">
          <img src="/comprarCoche.png"></img>
          <img src="/flechaArcoiris.gif" className="flecha"></img>
          <img src="/vendido.png"></img>
        </div>

        <div className="contenedorCentral">
          <Lesson/>
        </div>

        <div className="contenedorDch">
          <img src="/fam.png"></img>
          <p>* THIS SITE DESIGNED BY THE SOLAR OPPOSITES</p>
        </div>

      </div>

      <div className="error">
        <img src="/sirena.png"></img>
        <img src="/error.png"></img>
        <img src="/pupaCoin.gif"></img>
      </div>

      <div className="contenedorBajo">
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Your California Privacy Rights</p>
        <p>About Ads</p>
      </div>

      <div className="fuego">
        <img src="/fuego.gif"></img>
      </div>

    </div>
  )
}

export default App
