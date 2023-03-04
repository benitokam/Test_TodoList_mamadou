import { useState,useContext } from "react";
import {Form,Button} from "react-bootstrap"
import {TodoContext} from '../Context/TodoProvider';
type Props = {
    titre: string;
    isUrgent: boolean;
  };
  
 
const Item =({titre,isUrgent}:  Props) => {
    const [checked,setChecked] = useState(false);
    const {SupElement} =useContext(TodoContext); //  Permet de supprimer un élément déjà coché grâce à son titre

    
    const checkValue =(e: React.FormEvent<HTMLInputElement>) => {
          if(checked){
           SupElement(titre)
          }
        setChecked(e.currentTarget.checked);
    }  

     return (
      <div>
          {isUrgent?
         <div className="itemUrgent">
         <div  className="titre_P">
         <p>{titre}</p>
         </div>  
          <Form className="check">
         
             <Form.Check  
               type="checkbox"
             
               checked={checked}
               onChange={checkValue}
             />
             
         
     </Form>
         </div>:
          <div className="item">
          <div  className="titre_P">
          <p>{titre}</p>
          </div>  
           <Form className="check">
          
              <Form.Check  
                type="checkbox"
              
                checked={checked}
                onChange={checkValue}
              />
              
          
      </Form>
          </div>  
        
        }

      </div>
       

     )


}
export default Item;