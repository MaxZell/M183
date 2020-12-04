// XSS exaple
//<img src='x' onerror='alert("XSS Example")'>

window.onload = loadToDos();

//show todo add div
function showToDoAdder(){
    document.getElementById('toDoInput').style.visibility = "visible";
}
//hide todo add div
function hideToDoAdder(){
    document.getElementById('toDoInput').style.visibility = "hidden";
}

//send new ToDo Ticket as json to backend
function sendJSON(){ 
    let myTitle = document.getElementById('title').value;
    let myDesc = document.getElementById('desc').value;
    console.log("title: ", myTitle);
    console.log("desc: ", myDesc);

    fetch('/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: myTitle, description: myDesc }),
    });
    
    document.getElementById('todoList').innerHTML =`
        <div class="ticket">
            <p class="title">${myTitle}</p>
            <p class="description">${myDesc}</p>
            <div class="done">
                <label for="ticketCB"></label>
                <input type="checkbox" name="ticketCB" id="ticketCB">
            </div>
        </div>
    `;
} 

//omLoad func: load ToDos Tickts from db
function loadToDos(){
    fetch('/loadTickets', {method: 'GET'})
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("data");
            console.log(data);
        });
}