<template>
  <div>
    <LandingSectionhead>
      <template v-slot:title>Управление товарами</template>
    </LandingSectionhead>
    <UButton variant="outline">Button</UButton>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "admin",
});
</script>

<style></style>