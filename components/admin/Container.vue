<template>
  <div class="admin-container">
    <slot />
  </div>
</template>

<style lang="scss">
html {
  width: 100%;
  height: 100%;
}

.admin-container {
  max-width: 1280px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #5c5c5c;
  height: 100%;
  width: 100%;
}
</style>
