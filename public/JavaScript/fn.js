$(document).ready(function () {
    var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var us =  /^[a-z\d_]{4,15}$/i;
    var contr = /(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d){6,20}.+$)/;

    $(".boton").click(function (){
        $(".error").remove();
        if( $(".usuario").val() == ""){
            $(".usuario").focus().after("<span class='error'>ingresa tu nombre de usuario.</span>");
            return false;

          }else if(!us.test($(".usuario").val())){
                $(".usuario").focus().after("<span class='error'>Únicamente se permiten letras, números, guiones bajos.</span>");
                return false;


        }else if( $(".correo").val() == "" || !emailreg.test($(".correo").val()) ){
            $(".correo").focus().after("<span class='error'>Ingrese un email correcto</span>");
            return false;

        }else if( $(".contrasena").val() == "" ){
            $(".contrasena").focus().after("<span class='error'>Crea tu propia Contraseña</span>");
            return false;

          }else if(!contr.test($(".contrasena").val()) ){
            $(".contrasena").focus().after("<span class='error'>Contraseña incorrecta. (MAY,min,num)</span>");
            return false;


          }else if( $(".contrasena2").val() == "" ){
              $(".contrasena2").focus().after("<span class='error'>Ingresa nuevamente tu contraseña</span>");
              return false;

            }else if(!contr.test($(".contrasena2").val()) ){
              $(".contrasena2").focus().after("<span class='error'>Contraseña incorrecta</span>");
              return false;

            }else if(document.myForm.PWD1.value != document.myForm.PWD2.value){
              $(".contrasena2").focus().after("<span class='error'>La contraseña no coincide</span>");
            }else{
              vinculo()
              todoLleno()
          }
    });
    $(".usuario, .correo, .contrasena").keyup(function(){
        if( $(this).val() != "" ){
            $(".error").fadeOut();
            return false;
        }
    });
    $(".correo").keyup(function(){
        if( $(this).val() != "" && emailreg.test($(this).val())){
            $(".error").fadeOut();
            return false;
        }
    });
});
