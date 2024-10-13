<template>
  <AdminNavbar></AdminNavbar>
  <AdminContainer>
    <slot></slot>
  </AdminContainer>
</template>


<script lang="ts" setup>
useHead({
  title: "Админка | Kofworkshop",
})
definePageMeta({
  middleware: 'auth',
});
</script>

<style></style>