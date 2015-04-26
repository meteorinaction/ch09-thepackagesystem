Notification = {
  setError: function (text) {
    Session.set('notify', {
      type: 'error',
      text: text,
      buttonText: 'Oh, no.'
    });
  },
  setWarning: function (text) {
    Session.set('notify', {
      type: 'warning',
      text: text,
      buttonText: 'Good to know...'
    });
  },
  setSuccess: function (text) {
    Session.set('notify', {
      type: 'success',
      text: text,
      buttonText: 'Cool!'
    });
  },
  clear: function () {
    Session.set('notify', '');
  }
};

Template.notificationArea.helpers({
  notification: function () {
    return Session.get('notify');
  }
});

Template.notificationArea.events({
  'click button': function () {
    Session.set('notify', '');
  }
});