import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postFormUser} from "../../actions";
import "./FormUser.scss"
 
   

export function FormUser(){
 

    
 
 
 

    return(
    <div className="TodoForm">
        <div   className='imgF'>
   
        
              
            <form className="form-total"   >
            <h3 className="title-form">Create Recipes</h3>
             
                <label className="labels">Firstname </label>
                <div className="inputsForm" >
                    <input placeholder="Firstname" type="text" name="Firstnamee"  /> <br/>
                  
                </div>
                
                <label className="labels">Lastname </label>
                <div className="inputsForm">
                    <input placeholder="Lastname" type="text" name="Lastname"    /> <br/>
                  
                </div>

                <label className="labels">Password </label>
                <div className="inputsForm">                    
                    <input placeholder="Password" type="text" name="Password"   /> <br/>
                 

                </div>
                
                <label className="labels">Email</label>
                <div className="inputsForm">
                    <input placeholder="Email" type="text" name="Email"  /> <br/> 
              
                </div>   

                <label className="labels">country </label>
                <div className="inputsForm">
                     <input placeholder="Country" type="text" name="Country"  /> <br/>
                
                 </div>

                 <label className="labels">City </label>
                <div className="inputsForm">
                     <input placeholder="City" type="text" name="City"  /> <br/>
                
                 </div>
                 <label className="labels">Addres </label>
                <div className="inputsForm">
                     <input placeholder="Addres" type="text" name="Addres"  /> <br/>
                
                 </div>

                 
                 <label className="labels">Telephone </label>
                <div className="inputsForm">
                     <input placeholder="Telephone" type="text" name="Telephone"  /> <br/>
                
                 </div>

                <label className="labels">Rol</label>
                <div className="inputsForm">
                     <input placeholder="Roles" type="text" name="Roles"  /> <br/>
                
                 </div>
        
            <button className="button-create" type="submit"  >Create</button>   

                

        
  
                   
           </form>
        

         
        
        </div>
    </div>
    )
}

 