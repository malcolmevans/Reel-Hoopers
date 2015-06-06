/*Meteor.startup(function() {
  ServiceConfiguration.configurations.remove({service: 'meteor-developer'});
  ServiceConfiguration.configurations.insert({
    service: 'meteor-developer',
    clientId: Meteor.settings.meteorDeveloper.clientId,
    secret: Meteor.settings.meteorDeveloper.secret
  });
});
*/


ServiceConfiguration.configurations.remove({
    service: "instagram"
  });
  ServiceConfiguration.configurations.insert({
    service: "instagram",
    clientId: Meteor.settings.IgClientId,
    scope:'basic',
    secret: Meteor.settings.IgSecret
  });

 Meteor.startup(function () {
        // bootstrap the admin user if they exist -- You'll be replacing the id later
        if (Meteor.users.findOne(Meteor.settings.adminUser))
            Roles.addUsersToRoles(Meteor.settings.adminUser, ['admin']);

        /*create a couple of roles if they don't already exist (THESE ARE NOT NEEDED -- just for the demo)
        if(!Meteor.roles.findOne({name: "secret"}))
            Roles.createRole("secret");

        if(!Meteor.roles.findOne({name: "double-secret"}))
            Roles.createRole("double-secret");*/
    });
