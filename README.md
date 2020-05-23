# a-toast

A JavaScript library for toast notification
- Simple look like android notification.
- Does not depend on jQuery.

## Install
``npm install negi141/a-toast``

## Demo
https://negi141.github.io/a-toast/

## Usage
```html
<link rel="stylesheet" href="a-toast.css" />

<script src="a-toast.js"></script>
```

```js
var toast = new aToast();

// Set options (optional)
//   speed : millisecond. default=4000.
//   position : Display position. 'top' or 'bottom'. default='top'.
toast.setOption(speed, position);

// Show notifications
//   message : The text to display
//   style : Notification color. '' or 'success' or 'warn' or 'danger'. default=''. 
toast.show(message, style);
toast.success(message);
toast.warn(message);
toast.danger(message);
``` 