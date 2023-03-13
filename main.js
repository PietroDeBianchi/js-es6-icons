// Define an array of objects, where each object represents an icon and has properties like name, prefix, type, family, and color
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

// Get the DOM element with id "container" and "yourIcon" and assign them to variables
const containerCardsDom = document.getElementById("container");
const inputDom = document.getElementById("yourIcon");
let type = [];

// Initialize an empty array called "type" and loop through each icon object
icons.forEach((oggetto) => {
    // Call the cardGenerator function with the "containerCardsDom" and "oggetto" arguments to generate an HTML card element for each icon object
    cardGenerator(containerCardsDom,oggetto);
    // If the "type" array doesn't already include the icon object's "type" property, add it to the array
   if (!type.includes(oggetto.type)){
      type.push(oggetto.type);
   }
});

// Loop through each item in the "type" array
for (i = 0; i <= type.length; i++) {
    let option;
    // If it's the first item, create an "All" option with a value of "all"
    if (i === 0) {
      option = '<option value="all">All</option>';
    } 
    // For all other items, create an option with a value of the item's "type" property
    else {
      option = `<option value="${type[i-1]}">${type[i-1]}</option>`;
    }
    // Add the option to the "inputDom" select element
    inputDom.innerHTML += option;
};

// Listen for changes to the "inputDom" select element
inputDom.addEventListener("change", () => {
    // Clear the contents of the "containerCardsDom" element
    containerCardsDom.innerHTML="";
    // Loop through each icon object in the "icons" array and call the cardGenerator function with the "containerCardsDom" and current icon object as arguments if it matches the selected option in "inputDom" or if "all" is selected
    icons.map((card) => {
       if (inputDom.value === card.type || inputDom.value === "all") {
          return cardGenerator(containerCardsDom, card);
       }
    });
});

// Define the cardGenerator function, which takes a "position" argument representing where to add the generated HTML card and an "iconCard" argument representing the current icon object being processed
function cardGenerator(position, iconCard) {
    // Generate an HTML card element with the icon's name, prefix, color, and other properties
    let card = `  <div class="cardContainer">
                      <div class="card">
                         <h2 class="card-title"><i class="fa-solid ${iconCard.prefix}${iconCard.name}" style="color: ${iconCard.color};"></i></h2>
                         <p class="card-text">${iconCard.name}</p>
                      </div>
                   </div>` 
    // Add the generated HTML card element to the specified "position"
    position.innerHTML += card;
};
 