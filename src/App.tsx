import React, { useEffect,useContext, useState } from 'react';
import './App.css';
import Ajout from "./Component/ajout";
import Affichage  from './Component/affichage';
import TodoContext from './Context/TodoProvider';
import Rechercher from './Component/Rechercher';
import { Button } from 'react-bootstrap';
function App() {
  const [add,setAdd] = useState(false); //permet juste d'afficher soit le champ pour ajouter un élément, soit la zone de recherche.
  
  return (
 
   

  <TodoContext>


    <div className="App">
       <h2 className='appName'>TodoListe</h2>
       <Button className='add' onClick={()=>{setAdd(!add)}} >{add?  "-" : '+' }</Button>
       <div>
        {add && <Ajout />}
        {!add &&   <Rechercher /> /* La recherche ne s'affiche que si le champ ajouté n'est pas actif. */} 
      
        
        <Affichage />
       
       </div>
        
       

    </div>
    </TodoContext>
  );
}

export default App;
