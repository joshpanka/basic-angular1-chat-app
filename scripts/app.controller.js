(function(){
    'use strict';

    angular
        .module("app")
        .controller("ChatController", ChatController);

    ChatController.$inject = ["chatService"];

    function ChatController(chatService){

        var vm = this;
        vm.message = "New Message";
        vm.messageList = [];
        vm.sendMessage = sendMessage;
        vm.clearMessage = clearMessage;

        function sendMessage(){
            if(vm.message){
                vm.messageList.push(vm.message);
                console.log("POST: ", vm.message);
                chatService.postMessage(vm.message).then(function(response){
                    console.log("POST: ", response);
                });
                vm.message = "";
            }


        }

        function clearMessage(){
            vm.message = "";
            var responded = chatService.getMessages().then(function(response){
                var messages = response.data.messages;
                messages.forEach(function(message){
                    vm.messageList.push(message.text);
                });

            });
        }
    }

})();
