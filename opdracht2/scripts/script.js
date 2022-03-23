// JavaScript Document
console.log("howdy");

const URL = "https://uselessfacts.jsph.pl//random.json?language=en";

//haal de lijst 'ul' op uit de html
const list = document.querySelector('ul');
//haal de button op uit de html
const button = document.querySelector('button');





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

button.addEventListener("click", getFacts);