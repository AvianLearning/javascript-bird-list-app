document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-bird-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const birdListItem = createBirdListItem(event.target);
    const birdList = document.querySelector('#bird-list');
    birdList.appendChild(birdListItem);

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

    return birdListItem;
}