Router.route('/', {
  name: 'trending'
});

Router.route('/recent', {
  name: 'recent'
});

Router.route('/products/:_id', {
  name: 'products.show'
});

Router.route('/users/:_id', {
  name: 'users.show'
});

Router.route('/notifications', {
  name: 'notifications'
});

Router.route('/profile', {
  name: 'profile'
});

Router.route('pushForm', {
  onBeforeAction: function () {
    if (!Meteor.user(Meteor.settings.adminUser)) {
      // render the login template but keep the url in the browser the same
      Router.go('trending');
    } else {
	  this.next();
	}
  }
});