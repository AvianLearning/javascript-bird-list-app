document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-bird-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector("#delete-all");
    deleteAllButton.addEventListener('click', handleDeleteAll);

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

    const image = document.createElement('img');
    image.src = decideBirdImage();
    birdListItem.appendChild(image);
 
    return birdListItem;
}

const handleDeleteAll = function (event) {
    const birdList = document.querySelector('#bird-list');
    birdList.innerHTML = '';
}

const decideBirdImage = function (form) {
    const groupResult = form.group.value;
    
    switch(groupResult) {
        case "Passerines":
        imageShown = 'https://tgannon.incolor.com/grfs/birds256_oth/GoldfinchEur256x256.jpg';
        break;
        case "Waterfowl":
        imageShown = 'https://tgannon.incolor.com/grfs/birds256_oth/GoldfinchEur256x256.jpg';
        break;
};
    return imageShown;
}