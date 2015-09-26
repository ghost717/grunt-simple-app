var viewModel = new todos.Backlog();
ko.applyBindings(viewModel);

/*Local storage*/
if (window.localStorage){
    var storedViewModel = window.localStorage.getItem("todos");
    if (!storedViewModel) {
        var parsed = JSON.parse(storedViewModel);
        $.each(parsed, function(i,t) { new todos.Task(t.name, t.completed, viewModel); });
    }
    $(window).unload(function () {
        //avoid task circular reference.
        var tasks = $.map(viewModel.tasks(), function(t){return t.toDto();});
        var jsonViewModel = ko.toJSON(tasks);
        window.localStorage.setItem("todos", jsonViewModel);
    });
}