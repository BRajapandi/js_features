function notifyMe() {
if (!("Notification" in window)) {
// Check if the browser supports notifications
alert("This browser does not support desktop notification");
} else if (Notification.permission === "granted") {
// Check whether notification permissions have already been granted;
// if so, create a notification
const notification = new Notification("Hi there!");
// …
} else if (Notification.permission !== "denied") {
// We need to ask the user for permission
Notification.requestPermission().then((permission) => {
// If the user accepts, let's create a notification
if (permission === "granted") {
const notification = new Notification("Hi there!");
// …
}
});
}

// At last, if the user has denied notifications, and you
// want to be respectful there is no need to bother them anymore.
}

---

function notifyMe() {
if (!window.Notification) {
console.log('Browser does not support notifications.');
} else {
// check if permission is already granted
if (Notification.permission === 'granted') {
// show notification here
var notify = new Notification('Hi there!', {
body: 'How are you doing?',
icon: 'https://bit.ly/2DYqRrh',
});
} else {
// request permission from user
Notification.requestPermission().then(function (p) {
if (p === 'granted') {
// show notification here
var notify = new Notification('Hi there!', {
body: 'How are you doing?',
icon: 'https://bit.ly/2DYqRrh',
});
} else {
console.log('User blocked notifications.');
}
}).catch(function (err) {
console.error(err);
});
}
}
}
