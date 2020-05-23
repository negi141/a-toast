# a-toast

A JavaScript library for toast notification

## Install
``npm install negi141/a-toast``

## Demo
https://negi141.github.io/a-toast/

## Usage
```html
<link rel="stylesheet" media="all" href="a-toast.css" />

<script src="a-toast.js"></script>
```

```js
var toast = new aToast();

// Set options (optional)
toast.setOption(speed, position);

// Show notifications
toast.show(message, style);
toast.success(message);
toast.warn(message);
toast.danger(message);
```