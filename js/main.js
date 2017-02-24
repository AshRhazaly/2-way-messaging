var global_key = "";

function displayUser (){
  $.ajax({
    url:"https:chatroom-a6597.firebaseio.com/Name.json",
    success: function(data){
      $.each(data, function(key,value){
        var user_list = "";
        user_list += "<option value=" + key + ">" + value.Nickname + "</option>";
        $("#user").append(user_list);
      });
      displayMessage();
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
        data: JSON.stringify(myMessage),
        success: function(data){
          $.each(data,function(key,value){
            console.log(key);
          });
        }});
      }
    }
  );
}

function displayMessage(){
  $(".chatbox").html("");
  $.ajax({
    url: "https:chatroom-a6597.firebaseio.com/Name/" + $("#user").val() + ".json",
    success: function(data){
      $.each(data, function(key, value){
        console.log(value.Messages);
         $(".chatbox").append("<div id=sender>" + value.Messages + "</div>");
      })
    }

  })
}












$(document).ready(function(){
  displayUser();
  sendMessage();
});
