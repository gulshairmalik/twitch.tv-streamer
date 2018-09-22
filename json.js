//Channels Name Array
var channels = ["freecodecamp","ESL_SC2","OgamingSC2","cretetion"];
//Channel Status
var status = "";
//function to get custom API
function makeUrl(type,name){
    return 'https://wind-bow.glitch.me/twitch-api/'+type+'/'+name;
}
$(document).ready(function(){
    //Traversing Channel Array with Foreach
     channels.forEach(function(i){
      $.getJSON(makeUrl('streams',i),function(data){
          //When Channel is Streaming
        if(data.stream!==null){
             status=data.stream.channel.status;
            $("#channels").append('<div class="well row"><a href="https://www.twitch.tv/'+data.stream.channel.name+'" target="_blank"><img class="img img-responsive img-circle col-md-1" src="'+data.stream.channel.logo+'"></a><p style="margin-top:10px;" class="col-md-2">'+data.stream.channel.display_name+'</p><p style="margin-top:10px;" class="col-md-8">'+status+'</p></div>');
            }
        //When Channel is not Streaming
        else if(data.stream===null){
            $.getJSON(makeUrl('channels',i),function(data){
                status='Offline'
            $("#channels").append('<div class="well row"><a href="https://www.twitch.tv/'+data.name+'" target="_blank"><img class="img img-responsive img-circle col-md-1" src="'+data.logo+'"></a><p style="margin-top:10px;" class="col-md-2">'+data.display_name+'</p><p style="margin-top:10px;" class="col-md-8">'+status+'</p></div>');
            });
          }
        });
     });
});