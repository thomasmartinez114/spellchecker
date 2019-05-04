/*global fetch */

function handleClick(){
    const word = document.getElementById('wordInput');
    console.log(word);
    fetch 
    fetch(`/dictionary?word=${word}`)
        .then(response => response.text())
        .then(function(response){
            console.log(response);
            document.getElementById('results').innerHTML = response;
        });
}