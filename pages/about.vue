<script setup>
definePageMeta({
    layout: "landing",
});
useHead({
    title: "Команда",
});

const team = [
    {
        name: "Мария Кофонкина",
        title: "Главная вязакля",
        link: "https://t.me/Kofonkina/",
        avatar: {
            src: "/img/maria.jpg",
        },
    },
    {
        name: "Дмитрий Лисовский",
        title: "Разработчик",
        link: "https://t.me/ya0nkey/",
        avatar: {
            src: "/img/dmitry.jpg",
        },
    },
];
</script>

<template>
    <LandingContainer>
        <LandingSectionhead>
            <template v-slot:title>Кто мы?</template>
            <template v-slot:desc>Маленькая мастерская, где создаются игрушки.</template>
        </LandingSectionhead>

        <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
            <h2 class="font-bold text-3xl text-neutral-800">
                Мы в соцсетях
            </h2>
            <p class="text-lg leading-relaxed text-neutral-700">
                Чтобы всем было проще нас было найти в любимых социальных сетях.
            </p>
        </div>
        <div class="flex-wrap items-center justify-center gap-10 mx-auto max-w-4xl mt-12 flex">
            <LandingSocial />
        </div>

        <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
            <h2 class="font-bold text-3xl text-neutral-800">
                Работа превыше всего
            </h2>
            <p class="text-lg leading-relaxed text-neutral-700">
                Хоть мы все и разные, но все одинакого любим засиживаться за
                работой. Каждый из нас любит свое дело.
            </p>
        </div>
        <div class="flex-wrap items-center justify-center gap-10 mx-auto max-w-4xl mt-12 flex">
            <div v-for="item of team" class="group">
                <div class="w-64 aspect-square h-64">
                    <NuxtImg :src="item.avatar.src" placeholder="/loading.svg" width="256px" height="256px"
                        format="avif"
                        class="w-full h-full rounded-full border-neutral-800 border-2 object-cover transition" />
                </div>
                <div class="mt-4 text-center font-semibold">
                    <h2 class="text-lg text-gray-800">{{ item.name }}</h2>
                    <h3 class="text-sm text-slate-500">{{ item.title }}</h3>
                </div>
                <div class="text-center mt-4">
                    <LandingLink size="lg" styleName="outline" rel="noopener" :href="item.link" target="_blank"
                        external>
                        Связаться</LandingLink>
                </div>
            </div>
        </div>
    </LandingContainer>
</template>
