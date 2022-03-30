
//API//
const URL = "https://uselessfacts.jsph.pl//random.json?language=en";

//haal de lijst 'ul' op uit de html
const list = document.querySelector('ul.api');
//haal de button op uit de html
const buttonToverstok = document.querySelector('button.toverstok');


/********************************/
/* Nummer opgeslagen favorieten */
/********************************/
function calcFavNum (){
	const favAr = document.getElementsByClassName("favItem");
		// console.log('favAr length' + favAr.length);
		var numberFav = document.querySelector(".numberFav"); 
		numberFav.innerHTML = favAr.length; //
	
}

/***********************/
/* Verwijder van lijst */
/***********************/
function removeMe(elem){
	document.getElementById("myList1").removeChild(elem.parentNode);
	calcFavNum(); //function van de teller opnieuw uitvoeren
}


/****************/
/* VUL DE LIJST */
/****************/
function getFacts() {

	getData(URL).then(
		data => {
			console.log(data.text);
					
					const factsHTML =
						`
						<li>
							<p class="textApi">${data.text}</p>
						</li>
						`;
					
					list.innerHTML= "";		
			
					list.insertAdjacentHTML("beforeEnd", factsHTML);
				}
		);	
}

/****************/
/* FETCH DATA   */
/* RETURNS JSON */
/****************/
async function getData(URL) {
	return (
		fetch(URL)
		.then ( response => response.json() )
		.then ( jsonData => jsonData )
	);
}

/*********/
/* START */
/*********/
buttonToverstok.addEventListener("click", getFacts);


/******************/
/* Hamburger menu */
/******************/
var buttonStar = document.querySelector("button.star");

function menuOpenDicht(){
	var favorietenLijst = document.querySelector("section.favorieten");
	favorietenLijst.classList.toggle("toonMenu");
}

buttonStar.addEventListener("click", menuOpenDicht);


/******************/
/* Clone API */
/******************/
var addToFavesBtn = document.querySelector(".addToFaves");
addToFavesBtn.addEventListener("click", () => { //anonieme functie

	const myNode = document.querySelector(".textApi"); //tekst van de api ophalen
	const liElement = document.createElement("li"); //maakt een li aan
		liElement.classList.add("favItem")

	liElement.innerHTML = myNode.textContent + '<button class="removeBtn" onclick="removeMe(this)"> Remove </button>'; //veranderd html 

	document.getElementById("myList1").appendChild(liElement); //zet li element in favorieten lijst
 		calcFavNum ();

});

/******************/
/* Drag & drop */
/******************/
var options = {
	// de tijd van swappen in ms
	animation: 1000
  }
  
  /* het daadwerkelijk initialiseren van het draggen-en-droppen */
  // list - de ID van de ul
  // options - hierboven gedefinieerd
  var deLijst = document.getElementById('myList1');
  var sortable = Sortable.create(deLijst, options);