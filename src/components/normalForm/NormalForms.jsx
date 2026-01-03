import React, {useState, useEffect} from 'react'
import './NormalForms.css'
export default function NormalForms() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [user, setUser] = useState({});
    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleEmailChange(event){
        setEmail(event.target.value);
    }

    function handleAgeChange(event){
        setAge(event.target.value);
    }

    function handleGenderChange(event){
        setGender(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        let userData = {
            "userName" : name,
            "email" : email,
            "age" : age,
            "gender" : gender,
            "password" : password
        }
        setIsSubmitting(true);
        setUser(userData);
    }
    useEffect(() => {
        setTimeout(() =>{
            console.log("user Data Sent successfully..", user);
            setIsSubmitting(false);
        }, 3000);

    }, [user, isSubmitting]);

  return (
    <div className='normalForm-container'>
      <h1>Normal Form Demo</h1>
      <hr />
      <form  onSubmit={handleSubmit}>

        <label htmlFor="">UserName</label>
        <input type="text" name="userName" id="userName" placeholder='Enter your user Name' onChange={handleNameChange}/>

        <label htmlFor="">Email</label>
        <input type="email" name="email" id="email" placeholder='Enter your E-Mail ID' onChange={handleEmailChange}/>

        <label htmlFor="">Age</label>
        <input type="number" name="age" id="age" placeholder='Enter your Age' onChange={handleAgeChange}/>

        <label htmlFor="">Gender</label>
        <input type="radio" name="gender" id="gender-male" value="Male" onChange={handleGenderChange}/> MALE
        <input type="radio" name="gender" id="gender-female" value="Female" onChange={handleGenderChange}/> FEMALE

        <label htmlFor="">Password</label>
        <input type="password" name="password" id="password" placeholder='Enter your password' onChange={handlePasswordChange}/>
        <label htmlFor="">Confirm Password</label>
        <input type="password" name="confirm-password" id="confirm-password" placeholder='Re-enter your password' />

        <button type='submit' disabled={isSubmitting}>{isSubmitting ? "submitting..." : "Submit"}</button>
      </form>
    </div>
  )
}
