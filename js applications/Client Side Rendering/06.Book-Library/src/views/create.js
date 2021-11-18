import { html} from "../../node_modules/lit-html/lit-html.js";
import { createBook } from "../api/data.js";
import { ctx } from "../app.js";
import { showEdit } from "./edit.js";
import { showTable } from "./catalog.js";

const createTemplate = () => html`
<form @submit=${onSubmit} id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>`

export async function showCreate(ctx){
    return createTemplate();
}

async function onSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);

    const title = formData.get('title').trim()
    const author = formData.get('author').trim();

    await createBook({title, author})
    e.target.reset()

    ctx.render( [
        await showTable(ctx),
        await showCreate(ctx),
        await showEdit(ctx)
    ])
}