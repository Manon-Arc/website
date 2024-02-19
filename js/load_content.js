function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementByClassName('project-list').innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}
