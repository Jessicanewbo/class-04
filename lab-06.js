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










