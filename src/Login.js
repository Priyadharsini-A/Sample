import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './App.css';
const Login=()=>{
 const navigate=useNavigate();
const initialValues={email:"",password:""};
  const[formValues,setFormValues]=useState(initialValues);
  const[formErrors,setFormErrors]=useState({}); 
  const[isSubmit,setIsSubmit]=useState(false);
 const handleChange=(e)=>
 {
   
   const{name,value}=e.target;
   setFormValues({...formValues,[name]:value});
 };
 const handleSubmit=(e)=>
 {
   e.preventDefault();
   setFormErrors(validate(formValues));
   console.log(formErrors);
   //console.log(isSubmit);
   console.log(Object.keys(formErrors).length);
   setIsSubmit(true);
    };
useEffect(()=>{
   console.log(formErrors);
 if(Object.keys(formErrors).length===0&&isSubmit){
console.log(formValues);
navigate("/home");
 }
},[formErrors]); 
 const validate=(values)=>
 {
const errors={};
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const numbersonly= /^[-+]?[0-9]+$/;

if(!values.email){
  errors.email="Email is required";
}
else if(!regex.test(values.email)){
  errors.email="This is not a valid email format";
}
if(!values.password){
  errors.password="Password is required";
}

else if(!numbersonly.test(values.password)){
  
  errors.password="Please enter decimal value";
}
else if(numbersonly.test(values.password))
{
  const realDigits=(values.password).split('').map(Number);
  //console.log(realDigits);
  const sum=realDigits.reduce((curr,acc)=>
  curr+acc,0);
  //console.log(sum);
  if(sum!==10)
  errors.password="Please enter the values with sum=10"
}
//console.log(values.password);
console.log(errors);
return errors;

 };
  return (
    
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Login form</h1>
        <div>
          <label>Email</label>
          <input type="text"
            name="email"
            placeholder='Email' 
            value={formValues.email}
            onChange={handleChange}/>
          
        </div>
       <p> {formErrors.email}</p>
        <div>
          <label>Password</label>
          <input type="text"
                  name="password"
                 placeholder='Password' 
                 value={formValues.password}
                 onChange={handleChange}/>
          
        </div>
       <p> {formErrors.password}</p>
        <div>
         
          <button>Submit</button>
          
        </div>
      </form>
    </div>
  );
}
export default Login;

