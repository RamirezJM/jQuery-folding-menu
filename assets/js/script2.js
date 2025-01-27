(function(){
  "use strict"
  
  
  $("ul li ul").hide();  /*se esconden los submenus con la función hide()*/
  
  $(".menulink").click(function(){
  
  const thisMenu = $(this).next("ul");  /*se obtiene el <ul> dentro de la lista y con next()*/
                                        /*se obtiene el elemento siguiente al click(<li>)*/      
   $("ul li ul").not(thisMenu).hide();
  
  thisMenu.toggle(); /*toogle() alterna mostrar/esconder */
  
  const textContent = $(this).data("texto");  /*se obtiene los datos ingresados en data- */
  const imageUrl = $(this).data("imagen");

  const $title = $("<h2>").text(textContent);
  const $image = $("<img>").attr("src", imageUrl).attr("alt", textContent).attr("width", 640).attr("heigth", 426);
  $("#dinamic-content").empty().append($title).append($image)

  /*se renderizan en la página, vaciando el contenedor cada vez*/


  });
})(); 