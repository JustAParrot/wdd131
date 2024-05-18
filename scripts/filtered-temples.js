// JavaScript to populate current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last modified: ' + new Date(document.lastModified).toLocaleString();

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Sapporo Japan",
    location: "Atsubetsu-ku Sapporo, Hokkaido",
    dedicated: "2016, August, 21",
    area: 48480,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-day-1744806.jpg",
  },
  {
    templeName: "Fukuoka Japan",
    location: "Fukuoka-shi, Fukuoka",
    dedicated: "2000, June, 11",
    area: 12437,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg",
  },
  {
    templeName: "Tokyo Japan",
    location: "Minato-ku, Tokyo",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x640/tokyo_japan_temple-main.jpeg",
  },
];

// Function to create temple cards
function createTempleCard(templeData = temples) {
	document.querySelector(".content").innerHTML = ""; // Clear previous temple cards
	templeData.forEach((temple) => {
	  let card = document.createElement("section");
	  let name = document.createElement("h3");
	  let location = document.createElement("p");
	  let dedication = document.createElement("p");
	  let area = document.createElement("p");
	  let img = document.createElement("img");
  
	  name.textContent = temple.templeName;
	  location.innerHTML = `<span class='label'>Location:</span> ${temple.location}`;
	  dedication.innerHTML = `<span class='label'>Dedication:</span> ${temple.dedicated}`;
	  area.innerHTML = `<span class='label'>Size:</span> ${temple.area} sq ft`;
	  img.setAttribute("src", temple.imageUrl);
	  img.setAttribute("alt", `${temple.templeName} Temple`);
	  img.setAttribute("loading", "lazy");
  
	  card.appendChild(name);
	  card.appendChild(location);
	  card.appendChild(dedication);
	  card.appendChild(area);
	  card.appendChild(img);
  
	  document.querySelector(".content").appendChild(card);
	});
  }
  
  // Filter temples based on criteria
  function filterTemples(criteria) {
	let filteredTemples = [];
	switch (criteria) {
	  case "old":
		filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
		break;
	  case "new":
		filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);
		break;
	  case "large":
		filteredTemples = temples.filter(temple => temple.area > 90000);
		break;
	  case "small":
		filteredTemples = temples.filter(temple => temple.area < 10000);
		break;
	  default:
		filteredTemples = temples;
		break;
	}
	createTempleCard(filteredTemples);
  }
  
  // Event listeners for navigation items
  document.getElementById("navHome").addEventListener("click", () => createTempleCard());
  document.getElementById("navOld").addEventListener("click", () => filterTemples("old"));
  document.getElementById("navNew").addEventListener("click", () => filterTemples("new"));
  document.getElementById("navLarge").addEventListener("click", () => filterTemples("large"));
  document.getElementById("navSmall").addEventListener("click", () => filterTemples("small"));
  
  // Initial call to display all temples
  createTempleCard();