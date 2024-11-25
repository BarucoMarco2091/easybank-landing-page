const data = [
    {
        'image': '../assets/icon-online.svg',
        'title': 'Online Banking',
        'text': 'Our modern web and mobile<br>applications allow you to keep<br>track of your finances wherever you<br>are in the world.'
    },
    {
        'image': '../assets/icon-budgeting.svg',
        'title': 'Simple Budgeting',
        'text': 'See exactly where your money<br>goes each month. Receive<br>notifications when you’re close to<br>hitting your limits.'
    },
    {
        'image': '../assets/icon-onboarding.svg',
        'title': 'Fast Onboarding ',
        'text': 'We don’t do branches. Open your<br>account in minutes online and start<br>taking control of your finances<br>right away.'
    },
    {
        'image': '../assets/icon-api.svg',
        'title': 'Open API',
        'text': 'Manage your savings, investments,<br>pension, and much more from one<br>account. Tracking your money has<br>never been easier.'
    },
]

const newGrid = document.querySelector('.card-grid');
data.forEach((item) => {
    const cardGrid = document.createElement('div');
    cardGrid.className = 'card-grid';
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = 
    `
        <img src="${item.image}" alt="">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
    `

    newGrid.appendChild(cardGrid)
    cardGrid.appendChild(card);
});
