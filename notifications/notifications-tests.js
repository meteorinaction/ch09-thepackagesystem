Tinytest.add('setError', function (test) {
  var msgText = 'An error message';
  Notification.setError(msgText);
  test.equal(Session.get('notify').text, msgText);
  test.equal(Session.get('notify').type, 'error');
});