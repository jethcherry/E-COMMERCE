


interface User {
    username: string;
    email: string;
    password: string;
}

class ManageUsers {
    private users: User[];

    constructor() {
        this.users = this.fetchUsers();
    }

    private fetchUsers(): User[] {
        const userJsonFormat = localStorage.getItem('users');
        return userJsonFormat ? JSON.parse(userJsonFormat) : [];
    }

    private saveUsers(): void {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    public addUser(user: User): boolean {
        if (this.users.some(u => u.email === user.email)) {
            return false;
        }
        this.users.push(user);
        this.saveUsers();
        return true;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById('signup-form') as HTMLFormElement;
    const validationMessage = document.getElementById('validation-message') as HTMLElement;
    const userManager = new ManageUsers();

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = (document.getElementById('signup-username') as HTMLInputElement).value;
        const email = (document.getElementById('signup-email') as HTMLInputElement).value;
        const password = (document.getElementById('signup-password') as HTMLInputElement).value;

        const newUser: User = { username, email, password };

        if (userManager.addUser(newUser)) {
            window.location.href = 'login.html';
        } else {
            validationMessage.textContent = 'User with this email already exists.';
            validationMessage.style.color = 'red';
        }
    });
});
