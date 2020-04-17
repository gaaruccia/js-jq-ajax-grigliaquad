$(document).ready(function(){
  $(".quadrati").click(function(){
    var self = $(this)
    $.ajax({
        url : "https://flynn.boolean.careers/exercises/api/random/int",
        method : "GET",
        success : function (data,stato) {
          if(data.response <= 5){
            $(self).addClass("giallo");
          } else {
            $(self).addClass("verde");
          }
          $(self).text(data.response);
        },
        error : function (richiesta,stato,errori) {
          console.log("E' avvenuto un errore. " + errori, "stato " + stato, richiesta);
        }
    });
  });
});
