var ManageUsers = /** @class */ (function () {
    function ManageUsers() {
        this.users = this.fetchUsers();
    }
    ManageUsers.prototype.fetchUsers = function () {
        var userJsonFormat = localStorage.getItem('users');
        return userJsonFormat ? JSON.parse(userJsonFormat) : [];
    };
    ManageUsers.prototype.saveUsers = function () {
        localStorage.setItem('users', JSON.stringify(this.users));
    };
    ManageUsers.prototype.addUser = function (user) {
        if (this.users.some(function (u) { return u.email === user.email; })) {
            return false;
        }
        this.users.push(user);
        this.saveUsers();
        return true;
    };
    return ManageUsers;
}());
document.addEventListener("DOMContentLoaded", function () {
    var signupForm = document.getElementById('signup-form');
    var validationMessage = document.getElementById('validation-message');
    var userManager = new ManageUsers();
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var username = document.getElementById('signup-username').value;
        var email = document.getElementById('signup-email').value;
        var password = document.getElementById('signup-password').value;
        var newUser = { username: username, email: email, password: password };
        if (userManager.addUser(newUser)) {
            window.location.href = 'login.html';
        }
        else {
            validationMessage.textContent = 'User with this email already exists.';
            validationMessage.style.color = 'red';
        }
    });
});
