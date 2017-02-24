function displayUser (){
  $.ajax({
    url:"https:chatroom-a6597.firebaseio.com/Name.json",
    success: function(data){
      $.each(data, function(key,value){
        var user_list = "";
        user_list += "<option id=" + key + ">" + value.Nickname + "</option>";
        $("#user").append(user_list);
      });
    }
  });
}

function sendMessage() {
  $.ajax({
    url:"https:chatroom-a6597.firebaseio.com/Name/" + $("#user").val(),
    type: "POST",
    success: function(data){
      myMessage = {messages: $("#message").val()}
    }
  })
}












$(document).ready(function(){
  displayUser()
});
