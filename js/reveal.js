/** Partially hide the phone number and email address to bots
  * They are never fully shown on the code.
  */
function initReveal() {
    var tel = ["41", "79", "512", "12", "96"];
    document.getElementById("phone").innerHTML = "+" + tel.join(" ");
    document.getElementById("phoneLink").setAttribute("href", "tel:+" + tel.join(""));

    var user = ["love", "photos774"];
    var domain = ["gmail", "com"];
    var email = user.join(".") + "@" + domain.join(".");
    document.getElementById("email").innerHTML = email;
    document.getElementById("emailLink").setAttribute("href", "mailto:" + email);
}