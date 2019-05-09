/*global fetch */

function handleClick() {
    const word = document.getElementById('inputWord').value;
    console.log(word);
    fetch(`/api?word=${word}`)
        .then(response => response.text())
        .then(function(response){
            console.log(response);
            document.getElementById('results').innerHTML = response;
        });
}