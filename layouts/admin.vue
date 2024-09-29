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
</script>

<style></style>