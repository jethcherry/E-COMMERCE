var Authentication = /** @class */ (function () {
    function Authentication() {
        this.users = this.fetchUsers();
    }
    Authentication.prototype.fetchUsers = function () {
        var userJsonFormat = localStorage.getItem('users');
        return userJsonFormat ? JSON.parse(userJsonFormat) : [];
    };
    Authentication.prototype.login = function (username, password) {
        var user = this.users.find(function (user) { return user.username === username && user.password === password; });
        return !!user;
    };
    return Authentication;
}());
document.addEventListener("DOMContentLoaded", function () {
    var loginInput = document.getElementById('login-form');
    var validationMessage = document.getElementById('validation-message');
    var authentication = new Authentication();
    loginInput.addEventListener('submit', function (event) {
        event.preventDefault();
        var username = document.getElementById('login-username').value;
        var password = document.getElementById('login-password').value;
        if (authentication.login(username, password)) {
            window.location.href = 'index.html';
        }
        else {
            validationMessage.textContent = 'Invalid username or password.';
            validationMessage.style.color = 'red';
        }
    });
});
