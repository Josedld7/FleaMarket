function validate(InputUsers) {
    let errors = {};
    let RegExInputUsersressionUrl= /^httInputUserss?:\/\/(?:www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%+.~#?&/=]*)$/
    let RegExInputUsersressionText = /^[a-zA-Z\s]*$/;
    let RegExInputUsersressionNum= /^[0-9,$]*$/;

    if(!RegExInputUsersressionText.test(InputUsers.name)){
        errors.name = 'No se permiten números ni caracteres epeciales'
    }
    if(!RegExInputUsersressionText.test(InputUsers.lastname)){
        errors.name = 'No se permiten números ni caracteres epeciales'
    }
  
    if(!RegExInputUsersressionUrl.test(InputUsers.email)){
        errors.image = 'Agregue correctamente el Email'
    }
    //*-----------------------------------
    if(!InputUsers.name){
        errors.name = 'Se requiere un Nombre';
    }
    if( InputUsers.name.length < 6 ){
        errors.name = 'El nombre debe tener mas de Cinco caracteres'
    }    
    if(InputUsers.name.length > 20 ){
        errors.name = 'El nombre debe tener menos de Veinte caracteres'
    }
     //*-----------------------------------
     if(!InputUsers.lastname){
        errors.lastname = 'Se requiere un Apellido';
    }
    if( InputUsers.lastname.length < 6 ){
        errors.lastname = 'El apellido debe tener mas de Cinco caracteres'
    }    
    if(InputUsers.lastname.length > 20 ){
        errors.lastname = 'El apellido debe tener menos de Veinte caracteres'
    }
   

    return errors;
} 

module.exports ={
    validate
}