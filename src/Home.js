import React, { useState }  from 'react';  
import {Multiselect} from 'multiselect-react-dropdown';
import Dropdown from "./Dropdown";
const Home=()=>{
  const data=[{ title: "React", id: "react" },
               {title:"Angular", id: "angular" },
                { title: "Vue",id: "vue" }, 
               {title:"Ember",id: "ember" } ,];

   
  const[color, setColor] = useState(['red', 'blue', 'green', 'yellow', 'white']);
  const[lang, setLang] = useState(data);
  return(
    <div>
      <div>
        <div><h1>Welcome Home</h1></div>
          <Dropdown options={color} />
          <h3>Language</h3>
         <Multiselect options={lang} displayValue="title"/> 
        </div>
      </div>
    );
};
export default Home;
