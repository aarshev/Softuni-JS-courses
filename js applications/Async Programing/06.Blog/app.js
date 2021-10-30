function attachEvents() {
    const posts = document.getElementById('posts');
    
    document.getElementById('btnLoadPosts').addEventListener('click', async () => {
        const url = `http://localhost:3030/jsonstore/blog/posts`;

        const res = await fetch(url);
        const data = await res.json();
        posts.innerHTML = ''

        Object.values(data).forEach(el => {
            const option = document.createElement('option');
            option.textContent = el.title
            option.setAttribute('value', el.id)
            posts.appendChild(option);
        })
    });

    document.getElementById('btnViewPost').addEventListener('click', async () => {
        const id = posts.value;

        const post = await getPostInfo(id);

        document.getElementById('post-title').textContent = post.title;
        document.getElementById('post-body').textContent = post.body;

        const url = `http://localhost:3030/jsonstore/blog/comments`;

        const response = await fetch(url);
        const data = await response.json();

        const comments = Object.values(data).filter(x => x.postId == id);

        const postComments = document.getElementById('post-comments');

        postComments.innerHTML = '';
        comments.forEach(el =>{
            const li = document.createElement('li')
            li.textContent = el.text
            li.setAttribute('value', el.id)
            postComments.appendChild(li);
        })
    });


    async function getPostInfo(id) {
        const url = `http://localhost:3030/jsonstore/blog/posts/${id}`;

        const response = await fetch(url);
        const data = await response.json();

        return data;
    }
}

attachEvents();