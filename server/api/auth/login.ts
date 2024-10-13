import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  const validUsername = process.env.USERNAME;
  const validPassword = process.env.PASSWORD;

  // Здесь должна быть ваша логика проверки логина и пароля
  if (username === validUsername && password === validPassword) {
    // Успешная авторизация
    // Например, можно установить cookie или сессию
    return { success: true };
  } else {
    // Неверные учетные данные
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
  }
});
