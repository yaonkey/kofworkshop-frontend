<script setup>
definePageMeta({
    layout: "landing",
});

const products = [
    {
        title: "Аксолотль",
        image: "/assets/img/hero.png",
        price: "350",
        description: "Да-да",
        link: "/",
        type: "toy",
    },
];
</script>

<template>
    <LandingContainer>
        <LandingSectionhead>
            <template v-slot:title>Игрушки</template>
            <template v-slot:desc
                >Здесь можно заказать игрушку Вам по душе.</template
            >
        </LandingSectionhead>

        <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
            <LandingProduct v-for="product of products" :product="product" />
        </div>
    </LandingContainer>
</template>
