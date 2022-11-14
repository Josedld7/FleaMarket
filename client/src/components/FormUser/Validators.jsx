function validate(InputUsers) {
    let errors = {};
    let RegExInputUsersressionUrl= /^httInputUserss?:\/\/(?:www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%+.~#?&/=]*)$/
    let RegExInputUsersressionText = /^[a-zA-Z\s]*$/;
    let RegExInputUsersressionNum= /^[0-9,$]*$/;
    let RegExInputUsersressionEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!RegExInputUsersressionText.test(InputUsers.name)){
        errors.name = 'No se permiten números ni caracteres epeciales'
    }
    if(RegExInputUsersressionNum.test(InputUsers.name)){
        errors.name = 'No se permiten números '
    }
    //*-------------------------------------------------------------
    if(!RegExInputUsersressionText.test(InputUsers.lastname)){
        errors.lastname = 'No se permiten números ni caracteres epeciales'
    }
    if(RegExInputUsersressionNum.test(InputUsers.lastname)){
        errors.lastname = 'No se permiten números '
    }
    //*-------------------------------------------------------------  
    if(!RegExInputUsersressionEmail.test(InputUsers.email)){
        errors.email = 'Agregue correctamente el Email'
    }
    if(!RegExInputUsersressionText.test(InputUsers.addres)){
        errors.addres = 'No se permiten números ni caracteres epeciales'
    }
    if(!RegExInputUsersressionNum.test(InputUsers.telephone)){
        errors.telephone = 'Solo se permiten numeros'
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
      //*-----------------------------------
      if(!InputUsers.email){
        errors.email = 'Se requiere un Email';
    }
     
    //*-----------------------------------
    if(!InputUsers.addres){
        errors.addres = 'Se requiere un Diereccion';
    }
    if(InputUsers.addres.length < 6 ){
        errors.addres = 'La direccion debe tener mas de Cinco caracteres'
    }    
    if(InputUsers.addres.length > 20 ){
        errors.addres = 'La direccion debe tener menos de Veinte caracteres'
    }
     //*-----------------------------------
     if(!InputUsers.telephone ){
        errors.telephone = 'Se requiere un Nueto de Cel'
    }
    if( InputUsers.telephone.length>20 ){
        errors.telephone = 'Debe ser menor a 10'
    }  

    return errors;
} 

module.exports ={
    validate
}