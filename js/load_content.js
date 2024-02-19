function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('test').innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}
