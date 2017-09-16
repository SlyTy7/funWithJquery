// When the DOM is loaded and ready for use, run function in ready()
$(document).ready(function(){

	//when heading is double clicked change background color
	$("#main-heading").dblclick(function(){
		$(this).toggleClass("salmon-mode");
	})

	//when appear button is clicked the main image will appear
	$("#appear").click(function(){
		$("#main-image").show();
	})

	//when disappear button is clicked the main image will disappear
	$('#disappear').click(function(){
		$("#main-image").hide();
	})

	//when another one button is clicked, add another blank item to bottom of list
	$("#another-one").click(function(){
		$(".list").append("<li class='list-item'>Blank Item</li>");
	})

	//hover div changes color once mouse hovers
	$(".hover-div").hover(function(){
		$(this).toggleClass("hover-color");
	})

	//heading slides up when mouse leaves heading
	$(".slide-heading").mouseleave(function(){
		$(this).slideUp();
	})

	//div fades away on hover
	$(".fade-text").hover(function(){
		$(this).fadeOut();
	})

	//when fade button is pressed faded div returns
	$("#fade-button").click(function(){
		$(".fade-text").fadeIn();
	})

	//when mouse is hovering over footer it changes font size and font family
	$(".footer").hover(function(){
		$(".footer-text").toggleClass("footer-change");
	})

})