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
      Meteor.call('getGravatar', email, function (err, res) {
        if (err) {
          console.log(err);
        } else {
          Session.set('gravatarUrl', res);
          Notification.setSuccess("I found a gravatar image!");
        }
      });
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