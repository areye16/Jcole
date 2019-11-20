var gallery = document.querySelectorAll('.gallery-item');

var controls = document.getElementsByClassName('gallery-controls')[0];
var arrowWrapper = document.getElementsByClassName("arrows");
var moveGallery = document.getElementsByClassName("gallery-container")[0];

var prevBtn = document.getElementsByClassName("prev");
var nextBtn = document.getElementsByClassName("next");
//Index on wher to start the slider
var slideIndex = 1;


//create dots and arrow controls
createControls();

moveSlides(slideIndex);

// Create controls
function createControls(){
	var arrows = document.createElement("div");
	var prevBtn = document.createElement("span");
	var nextBtn = document.createElement("span");

	controls.appendChild(arrows).classList.add('arrows');
	arrows.appendChild(prevBtn).classList.add('prev-btn');
	arrows.appendChild(nextBtn).classList.add('next-btn');


	// create dots for each slide and set data attributes for each dot
	for (var i= 0; i < gallery.length; i++){
		var dot = document.createElement('li');
		dot.setAttribute('slide-index', i + 1);
		gallery[i].setAttribute('slide-index', i + 1);
		controls.appendChild(dot).classList.add('dot');
	}

}

//create a click listerner when user clicks dots or arrows
controls.addEventListener('click', function (e){
	var current = e.target;
	if (e.target.classList.contains('prev-btn')){
		moveSlides(slideIndex = slideIndex - 1);
	}
	if (e.target.classList.contains('next-btn')){
		moveSlides(parseInt(slideIndex) + 1);
	}
	else if (e.target.classList.contains('dot')){
		var active = current.getAttribute('slide-index');
		moveSlides(active);
	}
});


function moveSlides(num) {
	slideIndex = num;
	removeClass();
	//Loops Slide
	if (num < 1){ slideIndex = gallery.length; }
	else if (num > gallery.length) { slideIndex = 1; }
	gallery[slideIndex-1].classList.add('center');

	var dots = document.querySelectorAll('.dot');
	dots[slideIndex-1].classList.add('active');
	gallery[slideIndex-1].classList.add('active');

	findCenter();
}

//create center card, and also the loop funcationality.
function findCenter(){
	if (slideIndex < gallery.length ){
		gallery[slideIndex].classList.add('active');
		gallery[slideIndex].classList.add('trailing');
	}

	if (slideIndex == 1){
		gallery[gallery.length - 1].classList.add('active');
		gallery[gallery.length - 1].classList.add('prev');
	}

	else if (slideIndex == gallery.length){
		gallery[0].classList.add('active');
		gallery[0].classList.add('trailing');
		gallery[slideIndex-2].classList.add('active');
		gallery[slideIndex-2].classList.add('prev');
		console.log("work", slideIndex);
	}
	else{
		console.log('els');
		gallery[slideIndex-2].classList.add('active');
		gallery[slideIndex-2].classList.add('prev');
	}
}

//reset classes
function removeClass(){
	var activeElements = document.querySelectorAll('.active');
	for (var i = 0; i < activeElements.length; i++){
		activeElements[i].classList.remove("active");
		activeElements[i].classList.remove("prev");
		activeElements[i].classList.remove("trailing");
		activeElements[i].classList.remove("center");
	}
}
