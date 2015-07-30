//Index Behavior'

console.log("Javascript Loaded");


$("#pag1").on("pagecreate",function(e){
    var librosList = $("#librosList");
    $.ajax("api/v0/obtenerlibros",
            {
                "method":"GET",
                "data":{},
                "dataType":"json",
                "success":function(jsonDoc,status,jqXHR){
                    console.log(jsonDoc);
                    var htmlstr = "";
                    for(var i = 0 ; i < jsonDoc.libros.length; i++){
                        htmlstr += '<li><a href>'+jsonDoc.libros[i].titulo+'</a><li>'
                    }
                    librosList.html(htmlstr).listview("refresh");

                },
                "error":function(jqXHR,status, errorMsg){
                    console.log(errorMsg);
                }

            }
        );
});

$("#btnGuardar").click(function(){
// $("#pag2").on("pagecreate",function(e){

    $.ajax("api/v0/agregarLibro",
            {
                "method":"PUT",
                "data":{isbn: $("#txtId").val(), titulo: $("#txtTitulo").val()},
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
});


//-------------------------------------------------------arriba bueno
//  $("#pag1").on("pagecreate",function(e){
//
//     $.ajax("api/v0/agregarLibro",
//             {
//                 "method":"PUT",
//                 "data":{ isbn: 6,titulo: asd },
//                 "dataType":"json",
//                 "success":function(jsonDoc,status,jqXHR){
//                     console.log(jsonDoc);
//
//                 },
//                 "error":function(jqXHR,status, errorMsg){
//                     console.log(errorMsg);
//                 }
//
//             }
//         );
// });


// $("#pag1").on("pagecreate",function(e){
//   $.ajax({
//   url: 'api/v0/agregarLibro',
//   data: { isbn: 6,titulo: asd },
//   success: function(data) {
//   // put result of action into element with class "result"
//   $("#pag1").html(data);
//
//   },
//   error: function(){
//   // alert('Error');
//   }
//   });
// });

//-------------------------------------------------------------------



// $.ajax({
//          type: "PUT",
//          url: url,
//          data: jr,
//          contentType: "application/json; charset=utf-8",
//          success: function (result) {
//              $('#DisplayInfoLoader').html('<span style="color: green;">Display created....</span>');
//              $('#DisplayInfoLoader').fadeOut(3000);
//          },
//          error: function (xhr, ajaxOptions, thrownError) {
//              alert(xhr.responseText);
//              //$('#DisplayInfoLoader').html('<span style="color: red;">An Error occured....</span>');
//              $('#fuckingerror').html(xhr.responseText);
//              $('#DisplayInfoLoader').fadeOut(3000);
//          }
//      });
//
//

// $.ajax({
//         type: "POST",
//         contentType: "api/v0/agregarLibro",
//         dataType: "json",
//         data: JSON.stringify({
//             isbn: $("#namec").val(),
//             titulo: $("#surnamec").val()
//                     }),
//         success: function(response) {
//             console.log(response);
//         },
//         error: function(response) {
//             console.log(response);
//         }
// });
