import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app';
import { useAuthStore } from '@/stores/auth';

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();

  // Проверяем состояние авторизации
  if (!authStore.isAuthenticated) {
    return navigateTo('/admin/auth'); // Перенаправляем на страницу входа, если не авторизован
  }
});
