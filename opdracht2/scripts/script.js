// JavaScript Document
console.log("howdy");

const URL = "https://uselessfacts.jsph.pl//random.json?language=en";

//haal de lijst 'ul' op uit de html
const list = document.querySelector('ul.api');
//haal de button op uit de html
const buttonToverstok = document.querySelector('button.toverstok');

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
							<p>${data.text}</p>
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
// getAmiibo();

buttonToverstok.addEventListener("click", getFacts);




// hamburger menu
var buttonSter = document.querySelector("button.favorieten");

function menuOpenDicht(){
	var favorietenLijst = document.querySelector("ul.favorieten");
	favorietenLijst.classList.toggle("toonMenu");
}

buttonSter.addEventListener("click", menuOpenDicht);
