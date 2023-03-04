 import { useEffect,useContext } from 'react';
import { Button } from 'react-bootstrap';
 import {TodoContext} from '../Context/TodoProvider';
import Item from './item'

/* afficher les elements du todoListe */
const Affichage =  () => {

 
      const {data,setData} =useContext(TodoContext);
      const {DataSup} =useContext(TodoContext);
      
     
   return (
    <div className="affichage" >
     {
        data.map((elem:any)=>(
            
         <Item  titre={elem.titre.substring(0,10)} isUrgent={elem.urgent}/>
 
           
           
        ))
     }
     <Button className='sup' onClick={()=>{DataSup(true)}}>Tous Supprimer</Button>
    </div>
   )
}

export default Affichage; 