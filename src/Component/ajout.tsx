
import '../App.css';
import {Form,Button} from "react-bootstrap"
import React,{ useContext, useState} from 'react';

import {TodoContext} from '../Context/TodoProvider';
function Ajout()  {
  
    const {AddData} = useContext(TodoContext);

    const [v,setv] = useState('');
    const [u,setu] = useState(false);

//Ajouter les donner dans local

 const InsertData =() => {
    
    AddData(v,u);
     setv('');  
     setu(false)
 
 } 
 
const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
           setv(e.currentTarget.value);
          
}
 

const checkValue =(e: React.FormEvent<HTMLInputElement>) => {
      setu(e.currentTarget.checked);
}



  




 return(
   <div className='Ajout'>
    
    <Form>
        <div className='Aj_All'>
        <input type="text" value={v}  className='titre' onChange={handleChange} />
        <Button className='b_Ajouter' onClick={()=>InsertData()} > Ajouter</Button>
        </div>
        
        <div className='urgence'>
            <Form.Check  
              type="checkbox"
              label="Urgent"
              checked={u}
              onChange={checkValue}
            />
            
        </div>
    </Form>

  </div>

 )


}
export default Ajout