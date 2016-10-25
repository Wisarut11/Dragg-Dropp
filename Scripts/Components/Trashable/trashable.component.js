angular.module("mainModule")
    .component("trashable", {
        templateUrl: "Scripts/Components/Trashable/Trashable.html",
        controller: function () {
            var scope = this;
            var component = {};

            setTimeout(function () {
                component = $("#trashable-" + scope.id);
                component.droppable({
                    drop: function (event, ui) {
                        var element = ui.draggable.css('position', '');
                        $(this).append(element);

                        $(ui.draggable).fadeOut(1000);
                    }
                });
            });
        },
        controllerAs: "scope",
        bindings: {
            id: "=",
            trashTitle: "="
        }
    })