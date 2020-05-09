// Namespaces are just syntax sugar for IIFE's
var TodoApp;
(function (TodoApp) {
    var Model;
    (function (Model) {
        let TodoState;
        (function (TodoState) {
            TodoState[TodoState["New"] = 1] = "New";
            TodoState[TodoState["Active"] = 2] = "Active";
            TodoState[TodoState["Complete"] = 3] = "Complete";
            TodoState[TodoState["Deleted"] = 4] = "Deleted";
        })(TodoState = Model.TodoState || (Model.TodoState = {}));
    })(Model = TodoApp.Model || (TodoApp.Model = {}));
})(TodoApp || (TodoApp = {}));
