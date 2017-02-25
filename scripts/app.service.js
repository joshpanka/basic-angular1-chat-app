(function() {
    'use strict';

    angular
        .module("app")
        .factory("chatService", chatService);

    chatService.$inject = ["$http"];

    function chatService($http) {

        var service = {
            getMessages: getMessages,
            postMessage: postMessage
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

        function postMessage(message, callbackFunc) {
            console.log("Message: ", message);
            return $http({
                method: 'POST',
                url: '/message',
                data: {'text': message},
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
