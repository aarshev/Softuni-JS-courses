import { getAllCars } from '../api/data.js';
import { html } from '../lib.js' 

//get the correct imports
//THIS CAN BE HOME OR CATALOG IF YOU HAVE TO MAKE A CATALOG AND HOME LOOK AT EXAM PREP 1

//change section
const catalogTemplate = (cars) => html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">
        ${cars.length == 0
            ? html `<p class="no-cars">No cars in database.</p>`
            : html `${cars.map(carCard)}`}      
    </div>
</section>`;

//this is for a single car view, then mapped to the array for all of them
//DETAILS HREF /details/${car._id}
const carCard = (car) => html`
<div class="listing">
    <div class="preview">
        <img src=${car.imageUrl}>
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${car.year}</h3>
            <h3>Price: ${car.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/details/${car._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>`


export async function catalogPage(ctx){
    const cars = await getAllCars()
    ctx.render(catalogTemplate(cars))
}

//IF YOU NEED A REDIRECT FOR AN USER, CHECK EXAM PREP 1