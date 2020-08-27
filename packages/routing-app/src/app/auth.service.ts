export class AuthService {
  loggedIn = false;

  isAuthenticated(): Promise<boolean> {
    const promise: Promise<boolean> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });

    return promise;
  }

  login(): void {
    this.loggedIn = true;
    console.log('Login Success!');
  }

  logout(): void {
    this.loggedIn = false;
  }
}
