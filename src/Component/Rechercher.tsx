
import '../App.css';
import {Form,Button} from "react-bootstrap"
import React,{ useContext, useState} from 'react';

import Item from "./item"
import {TodoContext} from '../Context/TodoProvider';

const Rechercher = () => {
  
    const {recheData,setRechData} = useContext(TodoContext);
    const { RechercheElem } = useContext(TodoContext);
    const [v,setv] = useState(''); //Récupérer l'intégralité de la valeur saisie par l'utilisateur.



// Pour lancer une recherche et récupérer les valeurs
 const InsertData =() => {
   RechercheElem(v);
    setv('');  
 }
 
const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
            e.preventDefault();
           setv(e.currentTarget.value);
       
}
 

//Savegarder les données dans un LocalStorage

  




 return(
   <div className='Ajout'>
    
    <Form>
        <div>
        <div className='Aj_All'>
        <input type="text" value={v}  className='titre' onChange={handleChange} />
        <Button className='b_Rechercher' onClick={()=>InsertData()} > Rechercher</Button>
        </div>

        {
        recheData.map((elem:any)=>(
            
         <Item  titre={elem.titre} isUrgent={elem.urgent}/>
 
           
           
        ))
     }
        </div>
      
    </Form>

  </div>

 )


}
export default Rechercher