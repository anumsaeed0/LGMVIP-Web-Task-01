// Appending the CLOSE button
var mylist = document.getElementsByTagName("li");
var i;
for (i = 0; i < mylist.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    mylist[i].appendChild(span);
}

// Hide the Closed Task From List
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Adding a "checked" class to the tasks that are completed
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        updateEmptyMessage();
    }
}, false);

// Display or not Display the message "Nothing in the list." 
function updateEmptyMessage() {
    const tasks = document.querySelectorAll(".added-task");
    const todoTasks = document.querySelectorAll(".added-task:not(.checked)");

    if (tasks.length === todoTasks.length) {
        document.getElementById("emptyMessage").style.display = "block";
    } else {
        document.getElementById("emptyMessage").style.display = "none";
    }
}

// Adding the new task in the list
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.classList.add("added-task");
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
        document.getElementById("emptyMessage").style.display = "none";
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    // Assign the click event to the new close buttons
    span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        updateEmptyMessage();
    };
}

