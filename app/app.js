if (Meteor.isClient) {
  Session.setDefault('gravatarUrl', false);

  Template.gravatar.helpers({
    gravatarUrl: function () {
      return Session.get('gravatarUrl');
    }
  });

  Template.gravatar.events({
    'click button': function (evt, tpl) {
      var email = tpl.find('input#email').value;
      console.log('I\'d like to see the gravatar image for ' + email);
    }
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    getGravatar: function (email) {
      var gravatar = Meteor.npmRequire('gravatar');
      var url = gravatar.url(email);
      return url;
    }
  });
}