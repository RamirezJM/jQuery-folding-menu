(function(){

  "use strict"

  $("ul li ul").hide();
		$(".menulink, ul li a").click(function(eve){
      eve.preventDefault()
			const thisMenu = $(this).next("ul");
			$("ul li ul").not(thisMenu).slideUp();
			thisMenu.toggle();

     /*  const imageUrl = $(this).data("imagen"); */
      const textContent = $(this).data("texto");

     /*  const $dinamicImage = $("<img>").attr("src", imageUrl).attr("alt", textContent); */
     /*  $("#dinamic-content").empty(); */
      if ($(this).hasClass("menuLink")){
        const $title = $("<h2>").text("Este es el " + textContent);
        
        $("#dinamic-content").append($title)/* .append($dinamicImage) */
        $("#dinamic-content").empty();
      }
      else{
        const $paragraph = $("<p>").text("Este es el " + textContent)
        $("#dinamic-content").append($paragraph)/* .append($dinamicImage) */
      }
 		});

})();