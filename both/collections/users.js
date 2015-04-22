Meteor.users.before.insert(function (userId, doc) {
  if( doc.profile ){
    doc.profile.votedProductIds = [];
  }
});

Meteor.users.helpers({
  votedProducts: function () {
    if( this.profile && this.profile.votedProductIds ){
      return Products.find({_id: {$in: this.profile.votedProductIds}});
    }
  }
});