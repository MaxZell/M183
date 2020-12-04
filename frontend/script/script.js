// XSS
//<script>alert("Hello")</script>

//send new ToDo Ticket as json to backend
function sendJSON(){ 
    let myTitle = document.getElementById('title').value;
    let myDesc = document.getElementById('desc').value;
    console.log("title: ", myTitle);
    console.log("desc: ", myDesc);

    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: myTitle, description: myDesc }),
    });
} 

//omLoad func: load ToDos Tickts from db
function loadToDos(){

}