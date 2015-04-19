Meteor.methods({
  'Products.vote': function (_id) {
    if (!Meteor.user()) {
      return;
    }

    if (_(Meteor.user().profile.votedProductIds).include(_id)) {
      return;
    }

    Products.update({_id: _id}, {$inc: {numberOfVotes: 1}, $addToSet: {voterIds: this.userId}});
    Meteor.users.update({_id: this.userId}, {$addToSet: {'profile.votedProductIds': _id}});
  },
  deleteTask: function (_id) {
    var task = Products.findOne(_id);
    Products.remove(_id);
  }
  //,sAlert.warning('Your message', configOverwrite);
});
