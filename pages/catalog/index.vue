<script setup>
definePageMeta({
    layout: "landing",
});

const products = [
    {
        title: "Домокун",
        image: "/img/domokun.jpg",
        old_price: 2000,
        price: 1750,
        description: ["Высота: 25 см", "Ширина: 18 см"],
        link: "1",
        type: "schema",
    },
    {
        title: "Аксолотль",
        image: "/img/hero.png",
        old_price: 700,
        price: 550,
        description: ["Высота: 25 см", "Ширина: 18 см"],
        link: "2",
        type: "toy",
    },
    {
        title: "Аксолотль",
        image: "/img/hero.png",
        price: 1200,
        description: ["Высота: 25 см", "Ширина: 18 см", "Глубина: 19 см"],
        link: "3",
        type: "toy",
    },
    {
        title: "Аксолотль",
        image: "/img/hero.png",
        old_price: 700,
        price: 550,
        description: ["Высота: 25 см", "Ширина: 18 см"],
        link: "4",
        type: "toy",
    },
    {
        title: "Аксолотль",
        image: "/img/hero.png",
        price: 1200,
        description: "Высота: 25 см",
        link: "5",
        type: "toy",
    },
    {
        title: "Аксолотль",
        image: "/img/hero.png",
        old_price: 1000,
        price: 100,
        description: [
            "Высота: 25 см",
            "Ширина: 18 см",
            "Ширина: 18 см",
            "Ширина: 18 см",
        ],
        link: "6",
        type: "toy",
    },
    {
        title: "Аксолотль",
        image: "/img/hero.png",
        price: 1200,
        description: ["Высота: 25 см", "Ширина: 18 см", "Глубина: 19 см"],
        link: "7",
        type: "toy",
    },
];
</script>

<template>
    <LandingContainer>
        <LandingSectionhead>
            <template v-slot:title>Игрушки</template>
            <template v-slot:desc>Здесь можно заказать любую игрушку Вам по душе.</template>
        </LandingSectionhead>

        <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
            <LandingProduct v-for="product of products" :product="product" />
        </div>
    </LandingContainer>
</template>
