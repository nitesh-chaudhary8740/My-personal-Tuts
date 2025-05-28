"use strict";
var AdminNameSpace;
(function (AdminNameSpace) {
    class UserAuth37 {
        login() {
            console.log('user login function');
        }
    }
    AdminNameSpace.UserAuth37 = UserAuth37;
    function getList() {
        console.log('list of users');
    }
    AdminNameSpace.getList = getList;
})(AdminNameSpace || (AdminNameSpace = {}));
const user37 = new AdminNameSpace.UserAuth37();
user37.login();
