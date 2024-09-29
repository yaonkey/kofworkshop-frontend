<script setup>
defineProps({
  align: {
    default: "center",
  },
});
</script>

<template>
  <div :class="['mt-16', align === 'center' && 'text-center']">
    <h1 class="text-4xl lg:text-5xl text-neutral-800 font-bold lg:tracking-tight">
      <slot name="title"></slot>
    </h1>
    <p class="text-lg mt-4 text-neutral-700">
      <slot name="desc"></slot>
    </p>
  </div>
</template>