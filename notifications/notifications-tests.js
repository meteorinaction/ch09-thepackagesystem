Tinytest.add('Msg - Error - setError', function (test) {
  var msgText = 'An error message';
  Notification.setError(msgText);
  test.equal(Session.get('notify').text, msgText);
  test.equal(Session.get('notify').type, 'error');
});

Tinytest.add('Msg - Success - setSuccess', function (test) {
  var msgText = 'A success message';
  Notification.setSuccess(msgText);
  test.equal(Session.get('notify').text, msgText);
  test.equal(Session.get('notify').type, 'success');
});

Tinytest.add('Msg - Warning - setWarning', function (test) {
  var msgText = 'A warning message';
  Notification.setWarning(msgText);
  test.equal(Session.get('notify').text, msgText);
  test.equal(Session.get('notify').type, 'warning');
});

Tinytest.add('Msg - clear', function (test) {
  var msgText = 'A warning message';
  Notification.setWarning(msgText);
  Notification.clear();
  test.equal(Session.get('notify').text, undefined);
  test.equal(Session.get('notify').type, undefined);
});