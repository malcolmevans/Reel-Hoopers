Template.pushForm.events({
  'submit': function(e){
    e.preventDefault();
    var template = Template.instance();
    var title = template.$('input[name=title]').val();
    var description = template.$('input[name=description]').val();
    Push.send({
      from: 'Reel Hooper Product Hunt',
      title: title,
      text: description,
      query: {}
    });
  }
});