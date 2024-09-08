export default defineEventHandler(async (event) => {
  const access_token =
    "219686262196862621968626a82284405b22196219686264263c1277e122d3be3861129";
  const owner_id = 161176754;
  const offset = 20;
  let url = `https://api.vk.com/method/wall.get?v=5.84&access_token=${access_token}&owner_id=${owner_id}&count=20&offset=${offset}&oauth=0`;

  return await $fetch(url);
});
