import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  // Здесь должна быть ваша логика проверки логина и пароля
  if (username === 'admin' && password === 'password') {
    // Успешная авторизация
    // Например, можно установить cookie или сессию
    return { success: true };
  } else {
    // Неверные учетные данные
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
  }
});
