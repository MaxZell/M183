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

//https://developer.mozilla.org/ru/docs/Web/API/IndexedDB_API/Using_IndexedDB
function openDb() {
    return new Promise(function(resolve, reject) {
      var request = indexedDB.open();
      request.onsuccess = () => resolve(request.result);
    });
  }
  
  function saveToDo() {
    openDb().then(function(db) {
       // do stuff with db
    }).catch(console.warn).finally(function(db) {
      if(db) db.close();
    });
  }
  
  function getToDos() {
    openDb().then(function(db) {
       // do more stuff with db
    }).catch(console.warn).finally(function(db) {
      if(db) db.close();
    });
  }