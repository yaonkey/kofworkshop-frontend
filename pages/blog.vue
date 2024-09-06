<template>
    <LandingContainer>
        <LandingSectionhead>
            <template v-slot:title>Блог</template>
            <template v-slot:desc>Хотите узнать, чем мы занимаемся?</template>
        </LandingSectionhead>

        <div
            class="flex flex-col gap-3 mx-auto max-w-4xl mt-16"
        >
            <LandingBlogNews v-for="one_news of news" :news="one_news" />
        </div>
    </LandingContainer>
</template>

<script lang="ts" setup>
useHead({
    title: "Блог",
});
definePageMeta({
    layout: "landing",
});

const news = [
    {
        title: "title",
        image: "/loading.svg",
        date: "19.02.2024",
        text: "some text some textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome text",
        link: "/",
    },
];
</script>

<style></style>
