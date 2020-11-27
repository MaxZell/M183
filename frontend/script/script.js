function xhrPost() {
    var data = {"name":"John", "time":"2pm"};
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
}