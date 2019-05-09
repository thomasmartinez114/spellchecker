/*global fetch */

function handleClick() {
    const word = document.getElementById('inputWord').value;
    const url = `/api?word=${word}`
    console.log(word);
    fetch(url)
        .then(response => response.text())
        .then(function(response){
            console.log(response);
            
            // document.getElementById('results').innerHTML = response;
        });
}

// handleClick();