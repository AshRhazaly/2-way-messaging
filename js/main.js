function displayUser (){
  $.ajax({
    url:"https:chatroom-a6597.firebaseio.com/Name.json",
    success: function(data){
      $.each(data, function(key,value){
        var user_list = "";
        user_list += "<option value=" + key + ">" + value.Nickname + "</option>";
        $("#user").append(user_list);
      });
    }
  });
}

function sendMessage() {
  $("#message").keypress(function(e) {
    if(e.which == 13) {
      myMessage= {Messages : $("#message").val()};
      $.ajax({
        url:"https:chatroom-a6597.firebaseio.com/Name/" + $("#user").val() + ".json",
        type: "POST",
        data: JSON.stringify(myMessage)
      });
      $(".chatbox").children().empty();
      displayMessage();
    }
  });
}

function displayMessage(){
  $.ajax({
    url: "https:chatroom-a6597.firebaseio.com/Name/" + $("#user").val() + ".json",
    success: function(data){
      var messages = "";
      $.each(data, function(key, value){
        messages += "<p id=sender>" + value.Messages + "</p>";
        $(".chatbox").append(messages);
      })
    }

  })
}












$(document).ready(function(){
  displayUser();
  sendMessage();
  displayMessage();
});
