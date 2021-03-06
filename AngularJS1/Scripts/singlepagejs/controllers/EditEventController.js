'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData) {

        // no need to declare event object, ng-model will create it in the view ng-model="event.myProperty", *for create*
        // for editing use the code below *for edit*
        //$scope.event = eventData.getEvent();

        $scope.saveEvent = function (event, form) {
            if (form.$valid) {
                eventData.save(event);
            }
        };

        $scope.cancelEdit = function () {
            var location = window.location.origin + "/" + "Events/";
            window.location = location;
        };

    }
);