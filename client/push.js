Push.addListener('token', function(token) {
  if (token) {
    Meteor.call("updatePushToken", token, function(err, res) {});
  }
});
Push.id();