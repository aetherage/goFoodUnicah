//Index Behavior'

console.log("Javascript Loaded");


// $("#pag1").on("pagecreate",function(e){
//     var librosList = $("#librosList");
//     $.ajax("api/v0/obtenerlibros",
//             {
//                 "method":"GET",
//                 "data":{},
//                 "dataType":"json",
//                 "success":function(jsonDoc,status,jqXHR){
//                     console.log(jsonDoc);
//                     var htmlstr = "";
//                     for(var i = 0 ; i < jsonDoc.libros.length; i++){
//                         htmlstr += '<li><a href>'+jsonDoc.libros[i].titulo+'</a><li>'
//                     }
//                     librosList.html(htmlstr).listview("refresh");
//
//                 },
//                 "error":function(jqXHR,status, errorMsg){
//                     console.log(errorMsg);
//                 }
//             }
//         );
// });

function todoLleno(){
// $("#btnGuardar").click(function(){

    $.ajax("api/v0/agregarUsuario",
            {
                "method":"PUT",
                "data":{idUsuario: $("#txtId").val(), nombreUsuario: $("#txtUsuario").val(), contraseña: $("#PWD2").val(), correoElectronico: $("#txtCorreo").val()},
                // $( "#hd" ).val( ui.item.emp_id );
                "dataType":"json",
                "success":function(jsonDoc,status,jqXHR){
                    console.log(jsonDoc);
                    // pagina2.html
                    // librosList.html(htmlstr).listview("refresh");

                },
                "error":function(jqXHR,status, errorMsg){
                    console.log(errorMsg);
                }

            }
        );
// });
}

// url: "/api/endpoint",
//           headers: {"CONTENT_LENGTH",JSON.stringify({"sort":"date"}).length},
//           type: "GET",
//           data: {"sort":"date"},
//           contentType: "application/json",
//           dataType: "json",
//           ...


// $("#pag1").on("pagecreate",function(e){
// $("#btnEntrar").click(function(){
  function todoCamposLlenos(){
    var usuariosList = $("#usuariosList");
    // var u = $("#txtuser").val()
     var inpu = $("#txtuser").val();
    $.ajax("api/v0/obtenerUsuario/"+ $("#txtuser").val(),
            {

                "method":"GET",
                "data":{},
                "dataType":"json",
                "success":function(jsonDoc,status,jqXHR){
                    console.log(jsonDoc);
                    var htmlstr = "";
                    // htmlstr = '<p>'+jsonDoc.usuario.nombreUsuario+'</p> <p>'+jsonDoc.usuario.contraseña+'</p> <p">'+jsonDoc.usuario.tipoUsuario+'</p>'
                    usuariosList.html(htmlstr).listview("refresh");

                    if ($("#txtcontrasena").val() == jsonDoc.usuario.contraseña && $("#txtuser").val() == jsonDoc.usuario.nombreUsuario && jsonDoc.usuario.tipoUsuario == 1)
                    {
                    alert("Bienvenido" +" 1 "+ $("#txtuser").val());
                    vinculoHome()
                    sessionStorage.setItem("nombre", usuario.nombreUsuario);

                    }else if($("#txtcontrasena").val() == jsonDoc.usuario.contraseña && $("#txtuser").val() == jsonDoc.usuario.nombreUsuario && jsonDoc.usuario.tipoUsuario == 2){
                      alert("Bienvenido" +" 2 "+ $("#txtuser").val());

                    }else if($("#txtuser").val() !== jsonDoc.usuario.nombreUsuario){
                      alert("Usuario invalido");

                  }
                    else{
                      alert("Usuario o contraseña incorrecta");

                    }

                },
                "error":function(jqXHR,status, errorMsg){
                    console.log(errorMsg);
                }
            }
        );
}





$("#pag1").on("pagecreate",function(e){
    var promosList = $("#promosList");
    $.ajax("api/v0/obtenerPromos",
            {
                "method":"GET",
                "data":{},
                "dataType":"json",
                "success":function(jsonDoc,status,jqXHR){
                    console.log(jsonDoc);
                    var htmlstr = "";
                    for(var i = 0 ; i < jsonDoc.promociones.length; i++){
                        htmlstr += '<li><a href>'+jsonDoc.promociones[i].nombreUsuario+'<br>'+jsonDoc.promociones[i].contraseña+'<br>'+jsonDoc.promociones[i].nombrePromocion+'</a<li>'

                    }
                    promosList.html(htmlstr).listview("refresh");

                },
                "error":function(jqXHR,status, errorMsg){
                    console.log(errorMsg);
                }
            }
        );
});

// $("#leo").click(function(){
// valor = $("#division").data("midato");
// $("#division1").html('En este elemento (id="division") leo un dato llamado "midato" con el valor "' + $("#txtuser").val() + '"');
// hola;
// alert("Usuario o contraseña incorrecta");
// });
