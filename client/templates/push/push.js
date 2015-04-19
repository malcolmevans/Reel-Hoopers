Template.pushForm.events({
  'submit': function(e){
    e.preventDefault();
    var template = Template.instance();
    var title = template.$('input[name=title]').val();
    var description = template.$('input[name=description]').val();
    Push.send({
      from: 'Reel Hoopers',
      title: title,
      text: description,
      query: {}
    });

    //if (Meteor.users.findOne("EYoTyqRwaqxiG5asdsa84y")){
        //sAlert.warning('Your message', configOverwrite);
    // }
    
    e.target.notificationTitle.value = '';
    e.target.notificationDescription.value = '';

  }
});