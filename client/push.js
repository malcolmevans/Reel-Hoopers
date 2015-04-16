Push.debug = true;

Meteor.startup(function(){
  Push.addListener('token', function(token) {
    console.log( token );
    if (token) {
      Meteor.call("raix:push-setuser", token, function(err, res) {});
    }
  });
  Push.addListener('message', function(message) {
    alert( "Message Recieved" );
  });
  Push.id();
}); 