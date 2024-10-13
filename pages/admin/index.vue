<template>
  <AdminContainer>
    <AdminDashboard></AdminDashboard>
  </AdminContainer>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "admin",
  middleware: 'auth',
});
</script>

<style></style>