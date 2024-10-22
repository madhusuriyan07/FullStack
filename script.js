document.getElementById('showFormBtn').addEventListener('click', function() {
    document.getElementById('adForm').classList.remove('hidden');
});

document.getElementById('hideFormBtn').addEventListener('click', function() {
    document.getElementById('adForm').classList.add('hidden');
});

document.getElementById('submitAdBtn').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;

    if (title && description && price) {
        const adList = document.getElementById('adsList');

        const adItem = document.createElement('div');
        adItem.classList.add('ad');
        adItem.innerHTML = `<h3>${title}</h3><p>${description}</p><p>Price: $${price}</p>`;
        
        adList.appendChild(adItem);
        
        // Clear form fields
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('price').value = '';

        // Hide the form
        document.getElementById('adForm').classList.add('hidden');
    } else {
        alert("Please fill in all fields.");
    }
});
