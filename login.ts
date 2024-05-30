


class Authentication {
     users: User[];

    constructor() {
        this.users = this.fetchUsers();
    }

     fetchUsers(): User[] {
        const userJsonFormat = localStorage.getItem('users');
        return userJsonFormat ? JSON.parse(userJsonFormat) : [];
    }

     login(username: string, password: string): boolean {
        const user = this.users.find(user => user.username === username && user.password === password);
        return !!user;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const loginInput = document.getElementById('login-form') as HTMLFormElement;
    const validationMessage = document.getElementById('validation-message') as HTMLElement;
    const authentication = new Authentication();

    loginInput.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = (document.getElementById('login-username') as HTMLInputElement).value;
        const password = (document.getElementById('login-password') as HTMLInputElement).value;

        if (authentication.login(username, password)) {
            window.location.href = 'index.html';
        } else {
            validationMessage.textContent = 'Invalid username or password.';
            validationMessage.style.color = 'red';
        }
    });
});
