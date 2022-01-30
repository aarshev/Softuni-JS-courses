import { editCar, getCarById } from '../api/data.js';
import { html } from '../lib.js' 

//add @submit=${onSubmit}
//add .value to all fields that are in the for,
const editTemplate = (car, onSubmit) => html`
<section id="edit-listing">
    <div class="container">

        <form @submit=${onSubmit} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" .value=${car.brand}>

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" .value=${car.model}>

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" .value=${car.description}>

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" .value=${car.year}>

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${car.imageUrl}>

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" .value=${car.price}>

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>`;

//pass the fields all the fields that are required, redirect to the right page
export async function editPage(ctx){
    const car = await getCarById(ctx.params.id)

    ctx.render(editTemplate(car, onSubmit));
    
    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        const brand = formData.get('brand').trim()
        const model = formData.get('model').trim()
        const description = formData.get('description').trim()
        const year = Number(formData.get('year').trim())
        const imageUrl = formData.get('imageUrl').trim()
        const price = Number(formData.get('price').trim())

        if(brand == ' '|| model == '' || description == '' || year == '' || imageUrl == '' || price == ''){
            return alert('All fields are required!');
        }

        if(year < 0 || isNaN(year)){
            return alert('Year should be positive');
        }
        if(price < 0 || isNaN(price)){
            return alert('Price should be positive');
        }

        await editCar(ctx.params.id, {
            brand,
            model,
            description,
            year,
            imageUrl,
            price
        })

        ctx.page.redirect(`/details/` + ctx.params.id)
    }
}