import { editGames, getGamesById } from '../api/data.js';
import { html } from '../lib.js' 

//add @submit=${onSubmit}
//add .value to all fields that are in the for,
const editTemplate = (game, onSubmit) => html`
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" .value=${game.title}>

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" .value=${game.category}>

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${game.maxLevel}>

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" .value=${game.imageUrl}>

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" .value=${game.summary}></textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>`;

//pass the fields all the fields that are required, redirect to the right page
export async function editPage(ctx){
    const game = await getGamesById(ctx.params.id)

    ctx.render(editTemplate(game, onSubmit));
    
    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        const title = formData.get('title').trim()
        const category = formData.get('category').trim()
        const maxLevel = formData.get('maxLevel').trim()
        const imageUrl = formData.get('imageUrl').trim()
        const summary = formData.get('summary').trim()


        if(title == '' || category == '' || maxLevel == '' || imageUrl == '' || summary == ''){
            return alert('All fields are required!');
        }


        await editGames(ctx.params.id, {
            title,
            category,
            maxLevel,
            imageUrl,
            summary
        })

        ctx.page.redirect(`/details/` + ctx.params.id)
    }
}