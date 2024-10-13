<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="border rounded-2xl p-6 shadow-lg">
      <h1 class="text-lg text-neutral-800 font-bold mb-4 text-center">Авторизация</h1>
      <form @submit.prevent="login">
        <div class="text-lg text-neutral-800 font-bold mb-4 gap-2 flex flex-col">
          <label for="username">Логин</label>
          <input type="text" class="bg-white text-neutral-800 border rounded p-2" v-model="username" id="username" required />
        </div>
        <div class="text-lg text-neutral-800 font-bold mb-4 flex flex-col gap-2">
          <label for="password">Пароль</label>
          <input type="password" class="bg-white text-neutral-800 border rounded p-2" v-model="password" id="password" required />
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-2xl w-full">Войти</button>
      </form>
      <div v-if="error" class="error text-red-500 text-center mt-4">{{ error }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const username = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

onMounted(() => {
  authStore.checkAuth(); // Проверяем состояние авторизации при монтировании
});

const login = async () => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username.value, password: password.value }),
    });

    if (!response.ok) {
      throw new Error('Неверный логин или пароль');
    }

    authStore.login(username.value); // Устанавливаем состояние авторизации
    await router.push('/admin');
  } catch (err) {
    error.value = err.message;
  }
};
</script>

<style>
.error {
  color: red;
}
</style>
