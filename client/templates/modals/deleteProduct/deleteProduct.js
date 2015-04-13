/*Template.deleteProduct.events({
   'click [data-action=delete-this-Product]': function (_id) {
      Meteor.call("deleteTask", this._id);
    },
   'click [data-action=dont-delete-this-Product]': function (event, template) {
      IonModal.close();
    }
});


Template.deleteProduct.helpers({
  product: function () {
    return Products.findOne({_id: Router.current().params._id});
  },

  comments: function () {
    return Comments.find({productId: Router.current().params._id}, {sort: {createdAt: -1}});
  },
  onError: function () {
    return function (error) { alert("BOO!"); console.log(error); };
  },
  onSuccess: function () {
    return function (result) { 
      alert("YAY!"); 
      console.log(result); 
      Router.go('trending');
    };
  },
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
        this.remove();
    };
  },
  isAdminUser: function() {
    return Roles.userIsInRole(Meteor.user(), ['admin']);
  }  
});*/