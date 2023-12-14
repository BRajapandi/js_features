const button = document.getElementById("trigger1");

button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notifi = new Notification("notification trigged", {
        body: "This is more text",
      });
      notifi.addEventListener("close", (e) => {
        console.log(e);
      });
    }
  });
});

// to trigger a notification if user change the tap

let notification;
let interval;
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    const leaveDate = new Date();
    notification = new Notification("Come back please", {
      body: `you have been gone for ${
        Math.round(new Date() - leaveDate) / 1000
      } seconds`,
      tag: "Come Back",
    });
  } else {
    clearInterval(interval);
    notification.close();
  }
});
