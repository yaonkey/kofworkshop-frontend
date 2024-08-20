<template>
    <LandingContainer>
        <LandingSectionhead>
            <template v-slot:title>Блог</template>
            <template v-slot:desc>Хотите узнать, чем мы занимаемся?</template>
        </LandingSectionhead>

        <div
            class="w-full flex sm:flex-row md:grid-cols-3 mx-auto max-w-screen-lg mt-12"
        >
            <LandingBlogNews v-for="one_news of news" :news="one_news" />
        </div>
    </LandingContainer>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: "landing",
});

const news = [
    {
        title: "title",
        image: "image",
        date: "19.02.2024",
        text: "some text some textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome text",
        link: "ss",
    },
];
</script>

<style></style>
