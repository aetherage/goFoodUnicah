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
$("#btnEntrar").click(function(){
    var usuariosList = $("#usuariosList");
    // var u = $("#txtuser").val()
    $.ajax("api/v0/obtenerUsuario/$('#txtuser').val()",
            {
                "method":"GET",
                "data":{},
                "dataType":"json",
                "success":function(jsonDoc,status,jqXHR){
                    console.log(jsonDoc);
                    var htmlstr = "";
                    htmlstr = '<p id="Jusuario" name="Jusuario">'+jsonDoc.usuario.nombreUsuario+'</p> <p id="Jpass" name="Jpass">'+jsonDoc.usuario.contraseña+'</p>'
                    $usuario =
                    usuariosList.html(htmlstr).listview("refresh");

                },
                "error":function(jqXHR,status, errorMsg){
                    console.log(errorMsg);
                }
            }
        );
});
