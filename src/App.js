import React, {useState} from 'react';
import './App.css';
import Modale from './Composants/Modale'

function App() {
  const [toggleModale, setToggleModale] = useState(false)
  
  const toggle = () => {
  }
  
  const closeModale = (e) => {
    setToggleModale(false)
  }
  
  const openModale = () => {
    setToggleModale(true)
  }

  const stopPropa = (e) => {
    e.stopPropagation();
  }
  
  let myModale = "";

  if(toggleModale){
    myModale = <Modale closeFunc={closeModale} stopPropa={stopPropa}/>
  }else{
    myModale = ""
  }


  return (
    <div className="App" onClick={toggle}>
      <button onClick={openModale}>Ouvrir la modale</button>
      {myModale}
    </div>
  );
}

export default App;
