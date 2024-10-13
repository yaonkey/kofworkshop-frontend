<template>
  <div>
    <LandingSectionhead>
      <template v-slot:title>Управление описаниями</template>
    </LandingSectionhead>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "admin",
  middleware: 'auth',
});
</script>

<style>

</style>