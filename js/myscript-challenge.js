$(document).ready(function() {
   //When a table header is clicked, the corresponding row should highlight. 
  $("th.selector").click(function(){
      $(tr).children.toggleClass("makeWhite");
       $(this).siblings().toggleClass("highlight");
  });

 //When another table header (on the row) is clicked, the corresponding row should highlight, and all others should turn white.
  $("th.selector").click(function(){
    $(this).parent.toggleClass("makeWhite");
  });
});

CODE SOLUTION
//will wait uuntil page ready
 $(document).ready(function(){

    /*when table header is clicked , removes selection class from all other table rows and
      adds the selection class to this table headers row only*/
     $("th").click(function(){
     	$("tr").children().removeClass("selection")
    	$(this).siblings().addClass("selection");

  });
 });