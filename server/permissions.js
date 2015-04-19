Products.allow({
  'insert': function(userId, doc) {
    return userId;
  },
  'update': function(userId, doc, fields, modifier) {
    return userId === doc.userId;
  },
  'remove': function(userId, doc) {
    if (Meteor.users.findOne(Meteor.settings.adminUser)){
    return true;
  }
  }
});

Comments.allow({
  'insert': function(userId, doc) {
    return userId;
  },
  'update': function(userId, doc, fields, modifier) {
    return userId === doc.userId;
  },
  'remove': function(userId, doc) {
    return false;
  }
});

Push.debug = true;
Push.allow({
    send: function(userId, notification) {
      if (Meteor.users.findOne(Meteor.settings.adminUser)){
        return true; // Allow all users to send
     }
  }
});