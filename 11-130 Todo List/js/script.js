var todos = ["Buy New Turtle"];

window.setTimeout(function() {
  input = "";

  while(input !== "quit") {
    input = prompt("What would you like to do?");

    if(input === "list") {
      listTodos();
    } else if(input === "new") {
      addTodo();
    } else if(input === "delete") {
      deleteTodo();
    }
  }

  console.log("OK, YOU QUIT THE APP");

  function listTodos() {
    console.log("**********");
    todos.forEach(function(todo, i) {
      console.log(i + ": " + todo);
    });
    console.log("**********");
  }

  function addTodo() {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
  }

  function deleteTodo() {
    var index = prompt("Enter the index of the todo to delete");
    todos.splice(index, 1);
  }
}, 500);
