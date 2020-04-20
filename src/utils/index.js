export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
export function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
export function getTimeOffset() {
    let user_timezone = (new Date()).getTimezoneOffset();
    let sign = user_timezone <= 0 ? '+' : '-';
    user_timezone = Math.abs(user_timezone);
    let modulus = user_timezone % 60;
    let absolute_number = parseInt(user_timezone / 60);
    return sign + pad(absolute_number, 2) + (modulus ? ':' + pad(modulus, 2) : ':00');
}

export function pad(value, size) {
    var s = value.toString();
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
}