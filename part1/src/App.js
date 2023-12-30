import './App.css';
//import Mensaje from './Mensaje.js'
import Friends from './Friends.js'


function App() {
  
  return (   
    <div className="App">      
      <strong>Nombre:</strong>{Friends[0].name}
      <br />
      <strong>Edad:</strong>{Friends[0].age}
    </div> 
  );  
}

export default App;
