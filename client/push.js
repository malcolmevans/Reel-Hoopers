Push.debug = true;

Meteor.startup(function(){
  Push.addListener('token', function(token) {
    console.log( token );
    if (token) {
      Meteor.call("raix:push-setuser", token, function(err, res) {});
    }
  });
  // for more info look at  https://github.com/raix/push/blob/master/docs/ADVANCED.md 
  Push.addListener('message', function(m){
    console.log( m.message );
    alert( m.message );
  });
  Push.id();
}); 