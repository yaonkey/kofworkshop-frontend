<template>
  <div class="p-6">
    <LandingSectionhead>
      <template v-slot:title>Управление игрушками</template>
    </LandingSectionhead>

    <div class="mt-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded-2xl" @click="openAddToyModal">
        Добавить игрушку
      </button>
    </div>

    <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
      <div v-for="toy in toys" :key="toy.id" class="border rounded-2xl p-4 bg-white shadow">
        <h3 class="text-lg font-bold text-neutral-800">ID: {{ toy.id }}</h3>
        <p class="text-neutral-800">Название: {{ toy.title }}</p>
        <p class="text-neutral-800">Старая цена: {{ toy.old_price }} ₽</p>
        <p class="text-neutral-800">Цена: {{ toy.price }} ₽</p>
        <p class="text-neutral-800">Тип: {{ toy.type }}</p>
        <p class="text-neutral-800">Доступность: {{ toy.is_available ? 'Да' : 'Нет' }}</p>
        <div class="flex flex-col md:flex-row gap-2 mt-4">
          <button class="bg-yellow-500 md:w-1/2  text-white px-2 py-1 rounded-2xl" @click="openEditToyModal(toy)">
            Редактировать
          </button>
          <button class="bg-red-500 md:w-1/2 text-white px-2 py-1 rounded-2xl" @click="deleteToy(toy.id)">
            Удалить
          </button>
        </div>
      </div>
    </div>

    <!-- Модальное окно для добавления/редактирования игрушки -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-2xl shadow-lg">
        <h2 class="text-lg text-neutral-800 font-bold mb-4">{{ isEditing ? 'Редактировать игрушку' : 'Добавить игрушку'
          }}
        </h2>
        <form @submit.prevent="isEditing ? updateToy() : addToy()">
          <div class="mb-4">
            <label class="block mb-1 text-neutral-800">Название</label>
            <input v-model="currentToy.title" type="text" class="border rounded-2xl w-full p-2 bg-white text-neutral-800" required />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-neutral-800">Старая цена</label>
            <input v-model.number="currentToy.old_price" type="number" class="border rounded-2xl w-full p-2 bg-white text-neutral-800" required />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-neutral-800">Цена</label>
            <input v-model.number="currentToy.price" type="number" class="border rounded-2xl w-full p-2 bg-white text-neutral-800" required />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-neutral-800">Описание</label>
            <textarea v-model="currentToy.description" class="border rounded-2xl w-full p-2 bg-white text-neutral-800" required></textarea>
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-neutral-800">Тип</label>
            <input v-model="currentToy.type" type="text" class="border rounded-2xl w-full p-2 bg-white text-neutral-800" required />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-neutral-800">Файл</label>
            <input v-model="currentToy.file" type="text" class="border rounded-2xl w-full p-2 bg-white text-neutral-800" />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-neutral-800">Доступность</label>
            <input v-model="currentToy.is_available" type="checkbox" class="mr-2 bg-white" />
            <span>Доступно</span>
          </div>
          <div class="flex justify-end">
            <button type="button" class="bg-gray-300 text-neutral-800 px-4 py-2 rounded-2xl  mr-2" @click="closeModal">
              Отмена
            </button>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-2xl">
              {{ isEditing ? 'Сохранить изменения' : 'Добавить игрушку' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
definePageMeta({
  layout: "admin",
  middleware: 'auth',
});

export default {
  setup() {
    const toys = ref([
      { id: 1, title: 'Мягкая игрушка', old_price: 600, price: 500, description: 'Мягкая игрушка для детей', type: 'Мягкая', file: '', is_available: true, image: '' },
      { id: 2, title: 'Конструктор', old_price: 1500, price: 1200, description: 'Конструктор для творчества', type: 'Конструктор', file: '', is_available: true, image: '' },
      { id: 3, title: 'Кукла', old_price: 1000, price: 800, description: 'Кукла для игры', type: 'Кукла', file: '', is_available: false, image: '' },
    ]);

    const isModalOpen = ref(false);
    const isEditing = ref(false);
    const currentToy = ref({
      id: null,
      title: '',
      old_price: null,
      price: null,
      description: '',
      type: '',
      file: '',
      is_available: false,
      image: '',
    });

    const openAddToyModal = () => {
      isEditing.value = false;
      currentToy.value = { id: null, title: '', old_price: null, price: null, description: '', type: '', file: '', is_available: false, image: '' };
      isModalOpen.value = true;
    };

    const openEditToyModal = (toy) => {
      isEditing.value = true;
      currentToy.value = { ...toy }; // Копируем данные игрушки для редактирования
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    const addToy = () => {
      const newToy = { ...currentToy.value, id: toys.value.length + 1 }; // Генерируем новый ID
      toys.value.push(newToy);
      closeModal();
    };

    const updateToy = () => {
      const index = toys.value.findIndex(toy => toy.id === currentToy.value.id);
      if (index !== -1) {
        toys.value[index] = { ...currentToy.value }; // Обновляем данные игрушки
      }
      closeModal();
    };

    const deleteToy = (id) => {
      toys.value = toys.value.filter(toy => toy.id !== id);
    };

    return {
      toys,
      isModalOpen,
      isEditing,
      currentToy,
      openAddToyModal,
      openEditToyModal,
      closeModal,
      addToy,
      updateToy,
      deleteToy,
    };
  }
};
</script>

<style scoped>
/* Добавьте дополнительные стили, если необходимо */
</style>