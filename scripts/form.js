const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        "avg-rating": 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        "avg-rating": 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        "avg-rating": 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        "avg-rating": 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        "avg-rating": 5.0
    }
];

// Function to populate the select options
function populateProducts() {
    const select = document.getElementById("productName");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.text = product.name;
        select.appendChild(option);
    });
}

// Check if localStorage has a counter, if not, initialize it to 0
if (!localStorage.getItem("reviewCounter")) {
    localStorage.setItem("reviewCounter", 0);
}

// Increment the review counter upon successful form submission
document.querySelector("form").addEventListener("submit", function () {
    localStorage.setItem("reviewCounter", parseInt(localStorage.getItem("reviewCounter")) + 1);
});

// Call the function to populate products when the page loads
populateProducts();



//Footer
// JavaScript to populate current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last modified: ' + new Date(document.lastModified).toLocaleString();
    