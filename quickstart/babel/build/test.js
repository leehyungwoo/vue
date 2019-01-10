"use strict";

function addContact(name, mobile) {
    var home = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "없음";
    var address = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "없음";
    var email = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "없음";

    var str = "\nname=" + name + ",\nmobile=" + mobile + ",\nhome=" + home + ",\naddress=" + address + ",\nemail=" + email + ",\n\n";
    console.log(str);
}

addContact('가', 123);
addContact('나', 123, '다', '라');