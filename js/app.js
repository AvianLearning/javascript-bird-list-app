document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-bird-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector("#delete-all");
    deleteAllButton.addEventListener('click', handleDeleteAll);

})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
    console.dir(event);
    const birdListItem = createBirdListItem(event.target);
    const birdList = document.querySelector('#bird-list');
    birdList.appendChild(birdListItem);
    console.dir(event);
    event.target.reset();
}

const createBirdListItem = function (form) {
    const birdListItem = document.createElement('li');
    birdListItem.classList.add('bird-list-item');

    const commonName = document.createElement('h2');
    commonName.textContent = form.common.value;
    birdListItem.appendChild(commonName);

    const sciName = document.createElement('h3');
    sciName.textContent = form.sci.value;
    birdListItem.appendChild(sciName);

    const group = document.createElement('p');
    group.textContent = form.group.value;
    birdListItem.appendChild(group);

    const spotted = spottedInGarden(form);
    birdListItem.appendChild(spotted);

    const image = decideBirdImage(form); 
    birdListItem.appendChild(image);
    
 
    return birdListItem;
}

const handleDeleteAll = function (event) {
    const birdList = document.querySelector('#bird-list');
    birdList.innerHTML = '';
}

const decideBirdImage = function (form) {
    const image = document.createElement('img');
    const groupResult = form.group.value;

    if (groupResult === 'Passerines') {
        image.src = "https://mediacdn.nhbs.com/jackets/jackets_resizer_xlarge/12/128714_2.jpg";

    } else if (groupResult === 'Waterfowl') {
        image.src = 'https://i.pinimg.com/originals/2a/30/4c/2a304c8a193596646dca0c6c213c5852.jpg';

    } else if (groupResult === 'Gamebirds and non-passerines') {
        image.src = 'https://i.pinimg.com/originals/49/a1/84/49a1847bd5d678a47f7e7550889402bb.jpg';
    
    } else if (groupResult === 'Owls and Birds of Prey') {
        image.src = 'https://i.pinimg.com/736x/4b/d3/0e/4bd30e4b6d6ffe6c25e6e58f916ebe6f.jpg';
    
    } else if (groupResult === 'Waders') {
        image.src = 'https://ellasplace.co.uk/wp-content/uploads/2016/04/Waders_Poster-1.jpg';

    } else if (groupResult === 'Seabirds') {
        image.src = 'https://www.field-studies-council.org/wp-content/uploads/2019/08/OP161-Summer-coastal-birds-1067x1600.jpg';
    }
    return image;
}
const spottedInGarden = function (form) {
    const spotted = document.createElement('p');
    if (form.yes.checked === true) {
        spotted.textContent = "Spotted in garden!"
    } else if (form.no.checked === true) {
        spotted.textContent = "Not spotted in garden."
    }
    return spotted;
}