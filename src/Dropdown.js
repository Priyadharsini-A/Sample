import { useState } from "react";
//import './App.css';
//import { Multiselect } from "multiselect-react-dropdown";

const Dropdown=(props)=>{
    const[input,setInput]=useState("");
    const[selectedInput,setSelectedInput]=useState("");
    const searchHandler=(searchTerm)=>
        {
setInput(searchTerm);
        }
    //const[lang, setLang] = useState( [{ "title": "React", "id": "react" }, { "title":"Angular", "id": "angular" }, { "title": "Vue", "id": "vue" }, { "title":"Ember", "id": "ember" } ]  );
    return(
        
        <div>
        <h1>Dropdown</h1>
        <h3>colours</h3>
                    <input type="text"
        name="color"
        placeholder="Enter color"
        value={input}
        onChange={(e)=>setInput(e.target.value)}/>  
        
        {props.options.filter((item)=>{
            const searchTerm=input.toLowerCase();
            const colorname=item.toLowerCase();
            return searchTerm&&colorname.startsWith(searchTerm)&&colorname!=searchTerm;
        }).map((item)=>
            <div onClick={()=>searchHandler(item)}>{item}</div>
        )}     
               
                     
        </div>
    );
}
export default Dropdown;