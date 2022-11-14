import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers,postFormUser} from "../../actions";
import { validate } from "./Validators";
import './FormUser.scss'
 
   

export function FormUser(){
    const dispatch = useDispatch() 
    const DateUser = useSelector((state)=> state.users)

    const [InputUsers, setInputUsers] = useState({        
        image: "",
        name: "",
        lastname: "",
        password:"",
        email:"", 
        country:[],
        city:[],
        addres:"",
        telephone:"",
        roles:"",       
    })
    const[errors, setErrors] = useState({}); 


    /* useEffect(() => { 
        dispatch(getUsers())
    },[dispatch]) */


    function handleChange(e){
        setInputUsers({
            ...InputUsers,
            [e.target.name]:e.target.value
        })  
        setErrors(validate({
            ...InputUsers,
            [e.target.name]:e.target.value
        }))  
        console.log(InputUsers)
    } 
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!InputUsers.name) {
             alert("Se requiere llenar el Formulario de Creacion")
        }
        else{
            //dispatch(postFormUser(InputUsers))
            setErrors(validate(InputUsers))
            alert("User created")
            setInputUsers({
                image: "",
                name: "",
                lastname: "",
                password:"",
                email:"", 
                country:[],
                city:[],
                addres:"",
                telephone:"",
                roles:"",  
        })
        }
        
    }
    return(
    <div   class="grid  sm:grid-cols     ">
        <div   className='imgF'>
   
        
              
            <form className="form-total"  onSubmit={(e) => handleSubmit(e)}  >
            <h3 className="title-form">Create Users</h3>
             
                <label className="labels">Firstname </label>
                <div className="inputsForm" >
                    <input placeholder=" Firstname" type="text" name="name" value={InputUsers.name} onChange={(e) => handleChange(e)} /> <br/>                 
                    {(errors.name && <p className="error">{errors.name}</p>)}   
                </div>
                
                <div className="labels">Lastname </div>
                <div className="inputsForm">
                    <input placeholder=" Lastname" type="text" name="lastname"  value={InputUsers.lastname} onChange={(e) => handleChange(e)} /> <br/>
                    {(errors.lastname && <p className="error">{errors.lastname}</p>)}   
                  
                </div>

                <label className="labels">Password </label>
                <div className="inputsForm">                    
                    <input placeholder=" Password" type="password" name="password"  value={InputUsers.password} onChange={(e) => handleChange(e)}  /> <br/>
                    {(errors.password && <p className="error">{errors.password}</p>)}   
                 

                </div>
                
                <label className="labels">Email</label>
                <div className="inputsForm">
                    <input placeholder=" Email" type="text" name="email"  value={InputUsers.email} onChange={(e) => handleChange(e)} /> <br/> 
                    {(errors.email && <p className="error">{errors.email}</p>)}   
              
                </div>   

                <label className="labels">country </label>
                <div className="inputsForm">
                     <input placeholder=" Country" type="text" name="country"  /> <br/>
                     {(errors.country && <p className="error">{errors.country}</p>)}   
                
                 </div>

                 <label className="labels">City </label>
                <div className="inputsForm">
                     <input placeholder=" City" type="text" name="city"  /> <br/>
                     {(errors.city && <p className="error">{errors.city}</p>)}   
                
                 </div>
                 <label className="labels">Addres </label>
                <div className="inputsForm">
                     <input placeholder=" Addres" type="addres" name="addres" value={InputUsers.addres} onChange={(e) => handleChange(e)} /> <br/>
                     {(errors.addres && <p className="error">{errors.addres}</p>)}   
                
                 </div>

                 
                 <label className="labels">Telephone </label>
                <div className="inputsForm">
                     <input placeholder=" Telephone" type="text" name="telephone"  value={InputUsers.telephone} onChange={(e) => handleChange(e)}/> <br/>
                     {(errors.telephone && <p className="error">{errors.telephone}</p>)}   
                
                 </div>

                <label className="labels">Rol</label>
                <div className="inputsForm">
                     <input placeholder=" Roles" type="text" name="roles"  /> <br/>
                     {(errors.roles && <p className="error">{errors.roles}</p>)}                   
                 </div>
        
            <button className="button-create" type="submit"  >Create</button>   

                

        
  
                   
           </form>
        

         
        
        </div>
    </div>
    )
}


