<template>
  <AdminContainer>
    <AdminNavbar></AdminNavbar>
    <slot></slot>
    <AdminFooter></AdminFooter>
  </AdminContainer>
</template>


<script lang="ts" setup>
useHead({
  title: "Админка | Kofworkshop",
})
</script>

<style></style>