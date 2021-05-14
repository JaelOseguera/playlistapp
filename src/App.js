import './App.css';
import Cancion from "./componentes/Cancion";

function App() {

  const o_cancion = {
    Titulo: "Bee Gees - Stayin' Alive",
    Duracion: "4:10",
    Album: "Saturday Night Fever Soundtrack",
    Numero: "1",
    Fechacreacion: "13-12-1977"
  };

  const f_cancion = (props) => {
    alert("Ésta es la canción, #1 "+ props);
  }

  return (
    <div className="App">
      <header className="App-header">
      <Cancion 
            cancioninfo={o_cancion}
            fncancion = {f_cancion}/>
      </header>
      
    </div>
  );
}

export default App;

