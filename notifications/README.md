meteorinaction:notifications
============================

A sample package for the [Meteor in Action](http://meteorinaction.com)
book.

Usage
-----

Include the notificationArea somewhere in your templates:

    {{> notificationArea }}

Use any of the following to display notifications to the user:

-   `Notification.setError()`
-   `Notification.setWarning()`
-   `Notification.setSuccess()`

Users must acknowledge notifications. You can clear a message using

-   `Notification.clear()`
