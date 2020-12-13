// XSS exaple
//<img src='x' onerror='alert("XSS Example")'>

window.onload = loadToDos();

//show todo add div
function showToDoAdder(){
    let toDoInputVisibility = document.getElementById('toDoInput').style.visibility;
    if(toDoInputVisibility === "hidden"){
        document.getElementById('toDoInput').style.visibility = "visible";
        document.getElementById('todoList').style.visibility = "hidden";
    }else{
        document.getElementById('toDoInput').style.visibility = "hidden";
        document.getElementById('todoList').style.visibility = "visible";
    }
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
    
    //clear add form
    showToDoAdder();
    document.getElementById("title").value = '';
    document.getElementById("desc").value = '';

    //create new ticket div
    var ticket = document.createElement("DIV");
    ticket.innerHTML=`
        <div class="ticket">
            <label>${myTitle}</label></br><hr>
            <label class="switch">
                <input type="checkbox" onclick="ticketIsDone()">
                <span class="slider round"></span>
            </label>
            <div class="desc">
                <span>
                    ${myDesc}
                </span>  
            </div>
        </div>
    `;
    document.getElementById("todoList").appendChild(ticket); 
} 

//omLoad func: load ToDos Tickts from db
function loadToDos(){
    fetch('/loadTickets', {method: 'GET'})
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data = JSON.parse(data);
            for(var i = 0; i < data.length; i++) {
                var ticketData = data[i];
                var ticket = document.createElement("DIV");
                ticket.innerHTML=`
                    <div class="ticket">
                        <label>${ticketData.title}</label></br><hr>
                        <label class="switch">
                            <input type="checkbox" onclick="ticketIsDone()">
                            <span class="slider round"></span>
                        </label>
                        <div class="desc">
                            <span>
                                ${ticketData.description}
                            </span>  
                        </div>
                    </div>
                `;
                document.getElementById("todoList").appendChild(ticket);
            }
        });
}

function ticketIsDone(){
    console.log("done");
}