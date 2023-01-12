function AddItem() {
    var listElement = document.getElementById('list');
    var textItem = document.getElementById('newItem').value;
    
    var liElement = document.createElement('li');
    liElement.innerText = textItem;
    liElement.classList.add('new');
    liElement.id = 'new';
    liElement.addEventListener('click', StatusItem);

    listElement.appendChild(liElement);
}

function StatusItem(event) {
    console.log(event.target.classList);
    if (event.target.classList.contains('new')) {
        event.target.classList.remove('new');
        event.target.classList.add('done');
    }
}

// StatusItem();