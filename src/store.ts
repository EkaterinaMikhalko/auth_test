import { makeAutoObservable } from "mobx";

interface User {
  email: string;
  password: string;
}

class AuthStore {
  user: User = {
    email: "",
    password: "",
  };

  constructor() {
    makeAutoObservable(this);
    this.loadUser();
  }

  get isAuthenticated(): boolean {
    return this.user.email !== "" && this.user.password !== "";
  }

  setUser(data: User): void {
    this.user.email = data.email;
    this.user.password = data.password;
    this.saveUser();
  }

  saveUser(): void {
    localStorage.setItem("user", JSON.stringify(this.user));
  }

  loadUser(): void {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      this.user = JSON.parse(savedUser);
    }
  }

  clearUser(): void {
    this.user = { email: "", password: "" };
    localStorage.removeItem("user");
  }
}
const authStore = new AuthStore();
export default authStore;
