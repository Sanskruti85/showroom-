
// =========================
// BOOK BUTTON
// =========================
document.addEventListener("DOMContentLoaded",function(){
const buttons = document.querySelectorAll(".book");
const carShowForm = document.getElementById("carShowForm");
const main = document.getElementById("main");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Show form
        carShowForm.style.display = "block";

        // Hide main page
        main.style.display = "none";

        // Get car image
        let image = button.closest(".book").getAttribute("data-image");

        // Show selected car
        document.getElementById("selectedCar").style.backgroundImage =
            `url("${image}")`;

    });

});
});


// =========================
// CAR COLORS
// =========================

const colors = ["Black", "Red"];

const container = document.getElementById("colors");
const carImage = document.getElementById("carImage");

let selectedCar = "";


// CREATE COLOR RADIO BUTTONS
container.innerHTML = colors.map(color => `
    <label style="margin-right:10px; cursor:pointer;">
        <input type="radio" name="carColor" value="${color}">
        ${color}
    </label>
`).join("");


// BOOK NOW BUTTONS
document.querySelectorAll(".book").forEach(function(button) {

    button.addEventListener("click", function() {

        selectedCar = button.dataset.image;

        carImage.src = selectedCar;

        document.getElementById("carShowForm").style.display = "block";

    });

});


// COLOR BUTTONS
container.addEventListener("change", function(e) {

    if (e.target.name === "carColor") {

        const chosenColor = e.target.value;


        // BENTLEY
        if (selectedCar === "pexels-car-1851299_1920.jpg") {

            if (chosenColor === "Black") {
                carImage.src = "alex-ifti-8mBvCiVMBqg-unsplash.jpg";
            }
            else if (chosenColor === "Red") {
                carImage.src = "pexels-maxavans-5059236 (1).jpg";
            }
            

        }


        // ASTON MARTIN
        else if (selectedCar === "piro4d-aston-martin-2118857.jpg") {

            if (chosenColor === "Black") {
                carImage.src = "tim-meyer-suCv48kiXnY-unsplash.jpg";
            }
            else if(chosenColor === "Red") {
                carImage.src = "justin-wolff-gGX9_tUbvaY-unsplash.jpg";
            }
             

        }


        // FERRARI
        else if (selectedCar === "rohwedder-opel-5190050_1920.jpg") {

            if (chosenColor === "Black") {
                carImage.src = "pexels-niko-prodan-421922755-27974938.jpg";
            }
            else if (chosenColor === "Red") {
                carImage.src = "joshua-koblin-eqW1MPinEV4-unsplash.jpg";
            }
            
        }


        // BUICK
        else if (selectedCar === "wildpixar-buick-1400243_1920.jpg") {

            if (chosenColor === "Black") {
                carImage.src = "pexels-bala-1825237103-28887156.jpg";
            }
            else if (chosenColor === "Red") {
                carImage.src = "pexels-yoitscapture-368304705-17785822.jpg";
            }
            
        }

    }

});

    

// =========================
// SEARCH CARS
// =========================

function searchCars() {

    let search = document.getElementById("sb").value.toLowerCase();


    // CAR IMAGES
    let cars = document.querySelectorAll(".cars > div");

    cars.forEach(function(car) {

        let heading = car.querySelector("h3");

        if (heading) {

            let name = heading.innerText.toLowerCase();

            if (name.includes(search)) {
                car.style.display = "block";
            }
            else {
                car.style.display = "none";
            }

        }

    });


    // CAR LIST
    let list = document.querySelectorAll(".nav > li");

    list.forEach(function(item) {

        let heading = item.querySelector("h3");

        if (heading) {

            let name = heading.innerText.toLowerCase();

            if (name.includes(search)) {
                item.style.display = "list-item";
            }
            else {
                item.style.display = "none";
            }

        }

    });

}
document.addEventListener("DOMContentLoaded",function()
{
    const fm=document.getElementById("fm");
    const pn=document.getElementById("pn");
    if (fm){
        fm.addEventListener("submit",function(e){
        e.preventDefault();
        pn.innerText="Form submitted";
        });
    }
});

