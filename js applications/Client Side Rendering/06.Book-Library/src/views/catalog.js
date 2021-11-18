import { html} from "../../node_modules/lit-html/lit-html.js";
import { getAllBooks, deleteById, updateBook } from "../api/data.js";
import { ctx } from "../app.js";
import { showCreate } from "./create.js";
import { showEdit } from "./edit.js";

//template
const tableTemplate = (data) => html`
<button id="loadBooks">LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        ${data.map(book => html`
            <tr>
                    <td>${book[1].title}</td>
                    <td>${book[1].author}</td>
                    <td>
                        <button @click="${(e) => editFnc(e)}" data-id="${book[0]}">Edit</button>
                        <button @click="${(e) => deleteFnc(e)}" data-id="${book[0]}">Delete</button>
                    </td>
            </tr>`)
        }
    </tbody>
</table>
`

export async function showTable(ctx){
    let books = await getAllBooks();
    books = Object.entries(books)
    return tableTemplate(books);

}

//delete fnc
async function deleteFnc(e){
    e.preventDefault() 
    let bookId = e.target.dataset.id
    const conf = confirm('Are you sure you want to delete this?')
    if(conf){
        await deleteById(bookId)
        ctx.render( [
            await showTable(ctx),
            await showCreate(ctx),
            await showEdit(ctx)
        ])
    }
}

async function editFnc(e){
    e.preventDefault();
    document.getElementById('add-form').style.display = 'none';
    document.getElementById('edit-form').style.display = 'block';

    let title = Array.from(e.target.parentElement.parentElement.children)[0].textContent;
    let author = Array.from(e.target.parentElement.parentElement.children)[1].textContent;

    const form = document.getElementById('edit-form');
    form.querySelector("input[name='title']").value = title;
    form.querySelector("input[name='author']").value = author;


    form.addEventListener("submit", async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        let title = formData.get('title');
        let author = formData.get('author');
        let data = await updateBook(e.target.dataset.id, {title, author})
        form.reset();
        ctx.render( [
            await showTable(ctx),
            await showCreate(ctx),
            await showEdit(ctx)
        ])
        document.getElementById('add-form').style.display = 'block';
        document.getElementById('edit-form').style.display = 'none';
    })    
}