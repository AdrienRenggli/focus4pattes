/** Partially hide the phone number and email address to bots
  * They are never fully shown on the code.
  */
function initReveal() {
    var tel = ["41", "79", "525", "12", "96"];
    document.getElementById("phone").innerHTML = "+" + tel.join(" ");
    document.getElementById("phoneLink").setAttribute("href", "tel:+" + tel.join(""));

    var user = ["contact"];
    var domain = ["focus4pattes", "com"];
    var email = user.join(".") + "@" + domain.join(".");
    document.getElementById("email").innerHTML = email;
    document.getElementById("emailLink").setAttribute("href", "mailto:" + email);
}