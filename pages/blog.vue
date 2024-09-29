<script setup>
useHead({
    title: "Блог",
});
definePageMeta({
    layout: "landing",
});

let news = [
    {
        title: "title",
        image: "/loading.svg",
        date: "19.02.2024",
        text: "some text some textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome text",
        link: "/",
    },
];

fetch("/api/posts/post").then((response) => {
    response.text().then((text) => {
        news.push(text);
    })
});
</script>

<template>
    <LandingContainer>
        <LandingSectionhead>
            <template v-slot:title>Блог</template>
            <template v-slot:desc>Хотите узнать, чем мы занимаемся?</template>
        </LandingSectionhead>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mx-auto max-w-4xl mt-16">
            <BlogNews v-for="one_news of news" :news="one_news" />
        </div>
    </LandingContainer>
</template>

<style></style>
