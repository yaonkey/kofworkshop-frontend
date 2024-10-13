import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    username: '',
  }),
  actions: {
    login(username: string) {
      this.isAuthenticated = true;
      this.username = username;
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('username', username);
    },
    logout() {
      this.isAuthenticated = false;
      this.username = '';
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('username');
    },
    checkAuth() {
      const storedAuth = localStorage.getItem('isAuthenticated');
      const storedUsername = localStorage.getItem('username');
      if (storedAuth === 'true') {
        this.isAuthenticated = true;
        this.username = storedUsername || '';
      }
    },
  },
});
