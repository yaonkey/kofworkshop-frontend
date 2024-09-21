<script setup>
const features = [
    {
        title: "Написание схем игрушек",
        description: "Большинство схем мастерской принадлежат нам.",
        icon: "bx:bxs-file",
    },
    {
        title: "Создание уникальных игрушек",
        description: "Каждая игрушка создается по запросам заказчика.",
        icon: "bx:bxs-invader",
    },
    {
        title: "Создание новых игрушек",
        description:
            "Если не нужно подготавливаться к ярмарке, то мы создаем новые игрушки.",
        icon: "bx:bxs-cat",
    },
    {
        title: "Соцсети",
        description:
            "Ведем блоги в социальных сетях, таких как ВКонтакте, Reddit, Пикабу, Telegram и пр.",
        icon: "bx:bxs-user",
    },
    {
        title: "Схемы",
        description:
            "Мастерская предлагает также приобрести схемы для вязания какой-либо игрушки из каталога.",
        icon: "bx:bxs-file-find",
    },
    {
        title: "У нас не только игрушки",
        description:
            "В мастерской продаются не только игрушки, а также схемы, некоторая одежда и пр.",
        icon: "bx:bxs-cart",
    },
];
</script>

<template>
    <div class="mt-4 md:mt-0">
        <h2 class="text-neutral-800 text-4xl lg:text-5xl font-bold lg:tracking-tight mt-16">
            Давайте придумаем игрушку
        </h2>
        <p class="text-lg mt-4 text-neutral-600">
            Мы создаем уникальные игрушки по запросу заказчика.
        </p>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
            <div v-for="item of features" class="flex gap-4 items-start">
                <div class="mt-1 bg-neutral-800 rounded-full p-2 w-8 h-8 shrink-0 flex">
                    <Icon class="icon text-neutral-100 bg-neutral-100 text-xs" :name="item.icon" />
                </div>
                <div>
                    <h3 class="font-semibold text-neutral-800 text-lg">{{ item.title }}</h3>
                    <p class="text-neutral-600 mt-2 leading-relaxed">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.icon {
    font-size: 18px !important;
}
</style>
