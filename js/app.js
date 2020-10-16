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
    image.src = 'https://i.pinimg.com/originals/2a/30/4c/2a304c8a193596646dca0c6c213c5852.jpg';
    birdListItem.appendChild(image);
 
    return birdListItem;
}

const handleDeleteAll = function (event) {
    const birdList = document.querySelector('#bird-list');
    birdList.innerHTML = '';
}

// const decideBirdImage = function (form) {
//     const groupResult = form.group.value;
    
//     switch(groupResult) {
//         case "Passerines":
//         return image.src = 'https://tgannon.incolor.com/grfs/birds256_oth/GoldfinchEur256x256.jpg';

//         case "Waterfowl":
//         return image.src = 'https://i.pinimg.com/originals/2a/30/4c/2a304c8a193596646dca0c6c213c5852.jpg';

//         case "Gamebirds and non-passerines":
//         return image.src = 'https://tgannon.incolor.com/grfs/birds256_oth/GoldfinchEur256x256.jpg';
        
//         case "Owls and Birds of Prey":
//         return image = 'https://tgannon.incolor.com/grfs/birds256_oth/GoldfinchEur256x256.jpg';
        
//         case "Waders":
//         return image = 'https://tgannon.incolor.com/grfs/birds256_oth/GoldfinchEur256x256.jpg';
        
//         case "Seabirds":
//         return image = 'https://tgannon.incolor.com/grfs/birds256_oth/GoldfinchEur256x256.jpg';
// };
//         return image;
// }