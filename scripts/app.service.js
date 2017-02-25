(function() {
    'use strict';

    angular
        .module("app")
        .factory("chatService", chatService);

    chatService.$inject = ["$http"];

    function chatService($http) {

        var service = {
            getMessages: getMessages
        };

        return service;

        function getMessages(callbackFunc) {
            return $http({
                method: 'GET',
                url: '/messages',
                headers: {'Content-Type': 'application/json'}
            }).then(messageSuccessCallback,
                messageErrorCallback);

            function messageSuccessCallback(response) {
                return response;
            }

            function messageErrorCallback(error) {
                return error;
            }
        }
    }

})();
