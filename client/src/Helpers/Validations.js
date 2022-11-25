export const validate = (data) => {
  let errors = {};
  let RegExInputUsersressionUrl =
    /^httInputUserss?:\/\/(?:www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%+.~#?&/=]*)$/;
  let RegExInputUsersressionText = /^[a-zA-Z\s]*$/;
  let RegExInputUsersressionNum = /^[0-9,$]*$/;
  let RegExInputUsersressionEmail =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //*FIRST NAME 
  if (!RegExInputUsersressionText.test(data.firstname)) errors.firstname = "Numbers and special characters are not allowed";
  if (RegExInputUsersressionNum.test(data.firstname))   errors.firstname = "Numbers are not allowed";
  if (!data.firstname) errors.firstname = "First name is required";
  if (data.firstname.length < 1) errors.firstname = "The first name must have more than one character";
  if (data.firstname.length > 10) errors.firstname = "The first name must have less than ten characters";
  

  //*LAST NAME 
  if (!RegExInputUsersressionText.test(data.lastname)) errors.lastname = "Numbers and special characters are not allowed"; 
  if (RegExInputUsersressionNum.test(data.lastname)) errors.lastname = "Numbers are not allowed";
  if (!data.lastname) errors.lastname = "Last name is required";
  if (data.lastname.length < 1) errors.lastname = "The last name must have more than one character";
  if (data.lastname.length > 10) errors.lastname = "The last name must have less than ten characters";

  //*USER NAME 
  if (!RegExInputUsersressionText.test(data.username)) errors.username = "Numbers and special characters are not allowed";
  if (RegExInputUsersressionNum.test(data.username)) errors.username = "Numbers are not allowed";
  if (!data.username) errors.username = "First name is required";
  if (data.username.length < 1) errors.username = "The first name must have more than one character";
  if (data.username.length > 10) errors.username = "The first name must have less than ten characters";

  //*EMAIL 
  if (!RegExInputUsersressionEmail.test(data.email)) errors.email = "Correctly add Email must include @ and .com...";
  if (!data.email) errors.email = "Email is required";

  //*ADDRES 
  if (!data.addres) errors.addres = "Addres  is required";

  //*COUNTRY 
  if (!RegExInputUsersressionText.test(data.country)) errors.country = "Numbers and special characters are not allowed";
  if (RegExInputUsersressionNum.test(data.country)) errors.country = "Numbers are not allowed"
  if (!data.country) errors.country = "country is required";
  if (data.country.length < 1) errors.country = "The country must have more than one character";  
  if (data.country.length > 10) errors.country = "The country must have less than ten characters";
  
  //*CITY 
  if (!RegExInputUsersressionText.test(data.city)) errors.city = "Numbers and special characters are not allowed";
  if (RegExInputUsersressionNum.test(data.city)) errors.city = "Numbers are not allowed";
  if (!data.city) errors.city = "City is required";
  if (data.city.length < 1) errors.city = "The City must have more than one character";
  if (data.city.length > 10) errors.city = "The City must have less than ten characters";

  //*TELEPHONE 
  if (!RegExInputUsersressionNum.test(data.telephone)) errors.telephone = "Only numbers are allowed";
  if (!data.telephone) errors.telephone = "Telephone is required";
  
  //*PASSWORD 
  if (!data.password) errors.password = "Password is required";
  if (data.password.length < 5) errors.password = "The pasword must have more than five character";

  return errors;
}

export const Validation = (input) =>{
  let error = {};
  let RegExInputUsersressionUrl =
    /^httInputUserss?:\/\/(?:www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%+.~#?&/=]*)$/;
  let RegExInputUsersressionText = /^[a-zA-Z\s]*$/;
  let RegExInputUsersressionNum = /^[0-9,$]*$/;
  let RegExInputUsersressionEmail =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //*FIRST NAME 
  if (!RegExInputUsersressionText.test(input.firstName)) error.firstName = "Numbers and special characters are not allowed";
  if (RegExInputUsersressionNum.test(input.firstName))   error.firstName = "Numbers are not allowed";
  if (!input.firstName) error.firstName = "First name is required";
  if (input.firstName.length < 1) error.firstName = "The first name must have more than one character";
  if (input.firstName.length > 10) error.firstName = "The first name must have less than ten characters";
  

  //*LAST NAME 
  if (!RegExInputUsersressionText.test(input.lastName)) error.lastName = "Numbers and special characters are not allowed"; 
  if (RegExInputUsersressionNum.test(input.lastName)) error.lastName = "Numbers are not allowed";
  if (!input.lastName) error.lastName = "Last name is required";
  if (input.lastName.length < 1) error.lastName = "The last name must have more than one character";
  if (input.lastName.length > 10) error.lastName = "The last name must have less than ten characters";

   //*EMAIL 
  if (!RegExInputUsersressionEmail.test(input.email)) error.email = "Correctly add Email must include @ and .com...";
  if (!input.email) error.email = "Email is required";
  return error;
}; 

export const validateLogin = (data) =>{
  let errors = {};
  let RegExInputUsersressionUrl =
    /^httInputUserss?:\/\/(?:www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%+.~#?&/=]*)$/;
  let RegExInputUsersressionText = /^[a-zA-Z\s]*$/;
  let RegExInputUsersressionNum = /^[0-9,$]*$/;
  let RegExInputUsersressionEmail =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 

   //*EMAIL 
  if (!RegExInputUsersressionEmail.test(data.email)) errors.email = "Correctly add Email must include @ and .com...";
  if (!data.email) errors.email = "Email is required";
 

    //*PASSWORD 
    if (!data.password) errors.password = "Password is required";
    if (data.password.length < 5) errors.password = "The pasword must have more than five character"; 
    
    return errors;
}; 
