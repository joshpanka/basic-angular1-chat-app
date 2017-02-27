(function(){
    'use strict';

    angular
        .module("app")
        .controller("ChatController", ChatController);

    ChatController.$inject = ["chatService"];

    function ChatController(chatService){

        var vm = this;
        vm.message = "";
        vm.messageList = [];
        vm.sendMessage = sendMessage;
        vm.clearMessage = clearMessage;

        chatService.getMessages().then(function(response){
            var messages = response.data;
            messages.forEach(function(message){
                vm.messageList.push(message);
            });
        });

        function sendMessage(){
            if(vm.message){
                var msgJSON = {'text': vm.message, 'created_at': Date.now()};
                vm.messageList.push(msgJSON);
                chatService.postMessage(msgJSON).then(function(response){
                    console.log("POSTED: ", response);
                });
                vm.message = "";
            }
        }

        function clearMessage(){
            vm.message = "";
        }
    }

})();
