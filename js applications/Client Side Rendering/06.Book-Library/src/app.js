import { render } from "../node_modules/lit-html/lit-html.js";
import { showTable } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showEdit } from "./views/edit.js";
import { getAllBooks } from "./api/data.js";

const body = document.querySelector('body')
export const ctx = {
    render:(template) => render(template, body)
}

const viewsArr = [
                    await showTable(ctx),
                    await showCreate(ctx),
                    await showEdit(ctx)
                ];


ctx.render(viewsArr);



//loadAllBooks functionality
document.getElementById('loadBooks').addEventListener("click", onLoad);


async function onLoad(e){
    e.preventDefault();
    ctx.render( [
        await showTable(ctx),
        await showCreate(ctx),
        await showEdit(ctx)
    ])
}
