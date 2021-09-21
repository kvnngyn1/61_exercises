// AJAX request
// connect to a json file and loop through them

// Create XHR object and instantiate
var xhr = new XMLHttpRequest();
// What to do if connection is successful
xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
            console.log('It works');
    }
}
// specify how and where to connect
xhr.open('GET', './data.json' );
// Send off the request and wait for the response to excute 
// the contents of onreadystatechange
xhr.send()

// You have to run this in html live browser