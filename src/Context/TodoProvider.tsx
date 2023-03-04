import * as React from "react";

type SetValue = (value: any) => void;
type SetSupData = (value:boolean)=> void
type SetSupElem = (value:string)=> void
type SetAddElem = (value:string,urgent:boolean)=> void
type RecheElem = (value:string) => void


export const TodoContext = React.createContext<{
 
    data: any;
    setData: SetValue; 

    recheData : any;
    setRechData: SetValue
    DataSup : SetSupData;
    SupElement: SetSupElem,
    AddData : SetAddElem;
    RechercheElem: RecheElem;

}>({
   
    
    data: null,
    setData: (value:any)=> {},
    recheData: null,
    setRechData: (value:any)=> {},
    DataSup : (value :boolean)=>{},
    SupElement: (value:string) => {},
    AddData : (value:any,urgent:any)=>{},
    RechercheElem: (value:string) => {},

});

interface ownProps {
    children : JSX.Element
}

export const CtxProvider: React.FC<ownProps>= (props: ownProps) => {
    const getData =() => {
        const elem = localStorage.getItem('Test1');
       return elem? JSON.parse(elem): Array.from("[]");
        
    }

  const [data, setData] = React.useState(getData());
  const [recheData, setRechData] = React.useState(JSON.parse('[]'));


 
//Ajouter des elements 

const AddData =(value:string,urgent:boolean) =>{
  if(value.length>0) {
    const data = [
       ...Array.from(JSON.parse(localStorage.getItem("Test1") || "[]" )),
       {
           titre: value, urgent: urgent  
       }
    ]
    localStorage.setItem("Test1",JSON.stringify(data));
   }
  
   setData(getData());
}
React.useEffect(() => {
  setData(getData());
},[]);

//Supprimmer tous les élément
const DataSup =(value:boolean) => {
   if(value) {
    localStorage.setItem("Test1",JSON.stringify([]));
    setData(getData());
    alert("Vous venez de supprimer m'integralité de vos données");
   }
}
//Supprimer un élément de la liste grâce à son titre
const SupElement = (value:string) => {


    localStorage.setItem("Test1",JSON.stringify(Array.from(getData()).filter((elem:any)=>elem.titre!==value)))
    setData(getData());
  
  }
  //Recherher un élément de la liste grâce à son titre
  const  RechercheElem = (titre:string) => {

        setRechData(Array.from(getData()).filter((elem:any)=>elem.titre.toLowerCase()==titre.toLowerCase()));
  }

  return (
    <TodoContext.Provider
      value={{
      
        data,
        setData,
        recheData,
        setRechData,
        DataSup,
        SupElement ,
        AddData,
        RechercheElem 

       
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default CtxProvider;
