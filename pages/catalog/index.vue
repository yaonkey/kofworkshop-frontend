<script setup>
definePageMeta({
    layout: "landing",
});
const { data, status } = useAsyncData(
    'products',
    () => $fetch('/api/products')
);
</script>

<template>
    <LandingContainer>
        <LandingSectionhead>
            <template v-slot:title>Игрушки</template>
            <template v-slot:desc>Здесь можно заказать любую игрушку Вам по душе.</template>
        </LandingSectionhead>
        <div class="grid grid-cols-2 md:grid-cols-3 sm:gap-10 gap-2 mx-auto max-w-screen-lg mt-12 justify-center">
            <LandingProduct v-if="status == 'success'" v-for="product of data.rows" :product="product" />
        </div>
    </LandingContainer>
</template>
