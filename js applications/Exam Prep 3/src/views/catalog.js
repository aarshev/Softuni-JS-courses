import { getAllGames } from '../api/data.js';
import { html } from '../lib.js' 

//get the correct imports
//THIS CAN BE HOME OR CATALOG IF YOU HAVE TO MAKE A CATALOG AND HOME LOOK AT EXAM PREP 1

//change section
const catalogTemplate = (games) => html`
<section id="catalog-page">
        <h1>All Games</h1>
        ${games.length == 0
            ? html `<h3 class="no-articles">No articles yet</h3>`
            : html `${games.map(gameCard)}`}      
</section>`;

//this is for a single book view, then mapped to the array for all of them
//DETAILS HREF /details/${book._id}
const gameCard = (game) => html`
<div class="allGames">
    <div class="allGames-info">
        <img src=${game.imageUrl}>
        <h6>${game.category}</h6>
        <h2>${game.title}</h2>
        <a href="/details/${game._id}" class="details-button">Details</a>
    </div>

</div>`


export async function catalogPage(ctx){
    const games = await getAllGames()
    ctx.render(catalogTemplate(games))
}

//IF YOU NEED A REDIRECT FOR AN USER, CHECK EXAM PREP 1

