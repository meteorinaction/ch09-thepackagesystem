Package.describe({
  name: 'meteorinaction:notifications',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');
  api.use([
      'templating',
      'ui'
    ],
    'client');
  api.export('Notification', 'client');
  api.addFiles([
      'notifications.html',
      'notifications.js',
      'notifications.css'
    ],
    'client');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('meteorinaction:notifications');
  api.addFiles('notifications-tests.js', 'client');
});