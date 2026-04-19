function initReveal() {
    // 1. Prepare Phone strings
    const tel = ["41", "79", "525", "12", "96"];
    const phoneText = "+" + tel.join(" ");
    const phoneHref = "tel:" + phoneText;

    // 2. Prepare Email strings
    const user = ["contact"];
    const domain = ["focus4pattes", "com"]; // Note: change to "ch" if your domain is .ch
    const emailText = user.join(".") + "@" + domain.join(".");
    const emailHref = "mailto:" + emailText;

    // 3. Loop and inject into all matching elements
    document.querySelectorAll('.reveal-phone').forEach(el => {
        el.innerHTML = phoneText;
    });

    document.querySelectorAll('.reveal-phone-link').forEach(el => {
        el.setAttribute("href", phoneHref);
    });

    document.querySelectorAll('.reveal-email').forEach(el => {
        el.innerHTML = emailText;
    });

    document.querySelectorAll('.reveal-email-link').forEach(el => {
        el.setAttribute("href", emailHref);
    });
}