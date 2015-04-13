/*Meteor.startup(function() {
  ServiceConfiguration.configurations.remove({service: 'meteor-developer'});
  ServiceConfiguration.configurations.insert({
    service: 'meteor-developer',
    clientId: Meteor.settings.meteorDeveloper.clientId,
    secret: Meteor.settings.meteorDeveloper.secret
  });
});

Accounts.onCreateUser(function(options, user) {
  user.emails = user.services['meteor-developer'].emails;
  user.profile = options.profile;
  return user;
});*/

ServiceConfiguration.configurations.remove({
    service: "instagram"
  });
  ServiceConfiguration.configurations.insert({
    service: "instagram",
    clientId: "a6d5f80392a440b680fd743343fd6723",
    scope:'basic',
    secret: "2b1976f206484071ba42572fa4ca1431"
  });

 Meteor.startup(function () {
        // bootstrap the admin user if they exist -- You'll be replacing the id later
        if (Meteor.users.findOne("fXe3eyuXv55Gso3p4"))
            Roles.addUsersToRoles("fXe3eyuXv55Gso3p4", ['admin']);

        /*create a couple of roles if they don't already exist (THESE ARE NOT NEEDED -- just for the demo)
        if(!Meteor.roles.findOne({name: "secret"}))
            Roles.createRole("secret");

        if(!Meteor.roles.findOne({name: "double-secret"}))
            Roles.createRole("double-secret");*/
    });
