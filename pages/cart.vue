<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Корзина</template>
      <template v-slot:desc>Здесь находятся позиции к покупке</template>
    </LandingSectionhead>
    <h5 class='nothing'>Пока тут пусто</h5>
  </LandingContainer>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "landing",
});
</script>

<style>
h5.nothing {
  color: #262626;
}
</style>