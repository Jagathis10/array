var list = []
var inp = document.getElementById("inp")
var todolist = document.getElementById("todolist")
document.getElementById("btn").addEventListener("click",function(){
    list.push(inp.value)
    inp.value=""
    showList()
    
})

function showList() {
    todolist.innerHTML = ""
    list.forEach(function (n, i) {
        todolist.innerHTML += "<li>" + n + "<a onclick='editItem(" + i + ")'>Done</a>"+"<a onclick='deleteItem(" + i + ")'>&times;</a></li>"
    })
}

function deleteItem(i) {
    list.splice(i,1)
    showList()
}


function editItem(i) {
   //need to put LineStrike Event?
}