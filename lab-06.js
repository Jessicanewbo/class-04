"use strict";

console.log('hello!!');

let allergicResponse = function () {

    let allergic = prompt('Are you allergic to flowers?');


    if (allergic === 'yes') {
        alert('stay away from us');
        confirm('you are allergic to flowers?');

    } else if (allergic === 'no') {
        alert('good for you');
    } else {
        alert('FIGURE IT OUT')
    }
    return document.write('have a nice day');
} //closes function 


function TaylorSwiftfavoritenumber() {
    let answer;
    while (answer != 13) {
        answer = prompt('Whats Taylor Swift Lucky Number?');
        if (answer != 13) {
            alert('try again');
        } else {
            alert('you are the best fan!');
        }

    }
}
TaylorSwiftfavoritenumber();


function displayrating() {
    let output = '';
    let Midnight = prompt('scale of 1 to 3 would you rate Midnight');
    for (let i = 0; i < Midnight; i++) {
        console.log(i);
        output += '<img src="https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png" height="250px" width="250px"  />';
    } 

    return document.write(output);
}




displayrating();






