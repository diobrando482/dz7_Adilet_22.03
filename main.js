async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return posts;
}

async function createCards() {
    const posts = await getPosts();
    const cardsContainer = document.getElementById('cards-container');

    for (let post of posts) {
        const card = document.createElement('div');
        card.className = 'card';

        const image = document.createElement('img');
        image.src = 'images/rectangle.svg';

        const title = document.createElement('h2');
        title.textContent = post.title;

        const body = document.createElement('p');
        body.textContent = post.body;

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(body);
        cardsContainer.appendChild(card);
    }
}

createCards();