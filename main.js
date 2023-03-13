const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const containerCardsDom = document.getElementById("container");
const inputDom = document.getElementById("yourIcon");
let type = [];

icons.forEach((oggetto) => {
    cardGenerator(containerCardsDom,oggetto);
   if (!type.includes(oggetto.type)){
      type.push(oggetto.type);
   }
   
});

for (i = 0; i <= type.length; i++) {
    let option;
    if (i === 0) {
      option = '<option value="all">All</option>';
    } else {
      option = `<option value="${type[i-1]}">${type[i-1]}</option>`;
    }
    inputDom.innerHTML += option;
};
  

inputDom.addEventListener("change", () => {
    containerCardsDom.innerHTML="";
    icons.map((card) => {
       if (inputDom.value === card.type || inputDom.value === "all") {
          return cardGenerator(containerCardsDom, card);
       }
    });
});


function cardGenerator(position, iconCard) {

    let card = `  <div class="cardContainer">
                      <div class="card">
                         <h2 class="card-title"><i class="fa-solid ${iconCard.prefix}${iconCard.name}" style="color: ${iconCard.color};"></i></h2>
                         <p class="card-text">${iconCard.name}</p>
                      </div>
                   </div>` 
 
    position.innerHTML += card;
};
 