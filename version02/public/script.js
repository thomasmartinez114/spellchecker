/*global fetch */

function handleClick() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    console.log(name);
    fetch('/getemail' + '?' + 'name=' + name + "&" + 'phone=' + phone)
        .then(response => response.text()) //this is returning response.text()
        .then(function(response) {
            console.log(response);
    document.getElementById('results').innerHTML = response;
        });
}
