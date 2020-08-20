function jump(event) { //character
	var x = event.keyCode;
	if (x == 38) {
		var character = document.querySelector('#three')
		if (character.src == 'megaman.gif') {return} 
			character.src = 'jump.png';
			setTimeout(function() {character.src = 'megaman.gif'}, 500);
		
	}
}
	function change_pic (event) { // div
	var x = event.keyCode;
	if (x == 38) {
		var character = document.querySelector('#two')
		if (character.classList == 'animate') {return}
			character.classList.add('animate');
			setTimeout(function() {character.classList.remove('animate')}, 500);
	}
}
	function slide(event) { //charater
		var x = event.keyCode
		if(x == 40) {
			var monsta = document.querySelector('#three')
			monsta.src = 'slide.png'
			monsta.style.height = '45px'
			monsta.style.width = '80px'
			setTimeout(function() {monsta.src = 'megaman.gif'; monsta.style.height = '70px'; 
				monsta.style.width = '70px';}, 450);
	}		
}

	function enemy1() { //character
		var y = event.keyCode
		if(y ==32) {
			var z = document.querySelector('#three')
			z.src = 'megaman.gif'
			var x = document.querySelector('#four')
			x.classList.add('animated')
			}
		}
 
function enemy2() { //character
		var y = event.keyCode
		if(y ==32) {
			var w = document.querySelector('#five')
			w.classList.add('anime')
			}
		}


function sliderrr(){ //div that contains character
	var x = event.keyCode
	if (x == 40) {
		var monsta = document.querySelector('#two')
		monsta.style.height = '35px'
		monsta.style.width = '60px'
		monsta.style.top = '235px'
		setTimeout(function() {monsta.style.height = '50px'; monsta.style.width = '50px'; monsta.style.top = '210px'}, 450)
	}
}
 
	

var checkDead = setInterval(function() {
	var two = document.querySelector('#two');
	var four = document.querySelector('#four');
	let character = parseInt(window.getComputedStyle(two).getPropertyValue("top"));
    let enemy = parseInt(window.getComputedStyle(four).getPropertyValue("left"));
    if(enemy<285 && character<235){
    	location.reload()
    	alert("YOU DIED. SCORE: "+Math.floor(counter/100))
    	counter=0;
    }
    else {
    	counter++;
        document.getElementById("score").innerHTML = "TIP: dont get hit lol. SCORE: " + Math.floor(counter/100);
    }
}, 10);

var counter = 0
var glizzy = setInterval(function() {
	var two = document.querySelector('#two');
	var five = document.querySelector('#five');
	let character = parseInt(window.getComputedStyle(two).getPropertyValue("top"));
    let enemy = parseInt(window.getComputedStyle(five).getPropertyValue("left"));
    console.log(character)
    if(enemy<285 && character>=195){
    	location.reload()
    	alert("YOU DIED. SCORE: "+Math.floor(counter/100))
    	counter=0;
    }
    else {
    	counter++;
        document.getElementById("score").innerHTML = "TIP: dont get hit lol. SCORE: " + Math.floor(counter/100);
    }
}, 10);
	

