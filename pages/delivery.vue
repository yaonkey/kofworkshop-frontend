<script setup>
definePageMeta({
    layout: "landing",
});
</script>

<template>
    <LandingContainer>
        <LandingSectionhead>
            <template v-slot:title>Доставка</template>
            <template v-slot:desc>Как получить товар?</template>
        </LandingSectionhead>

        <div class="flex flex-col gap-8 mx-auto max-w-4xl mt-16 h-screen">
            <h2 class="font-bold text-3xl text-gray-800">
                Выбранный вами товар можно получить несколькими способами в
                зависимости от вашего проживания
            </h2>
            <h5 class="font-semibold text-xl text-gray-700">
                Для людей проживающих в Москве
            </h5>
            <ol class="text-lg leading-relaxed text-slate-500 list-disc">
                <li>
                    Бесплатный самовывоз товара по адресу: пос. Рублево, ул.
                    Новорублевская, д. 2
                </li>
                <li>
                    Доставка до станции метро Молодежная/Крылатское (100 руб)
                </li>
                <li>Доставка в пределах кольцевой линии метро (250 руб)</li>
                <li>Доставка на любую станцию метро (350 руб)</li>
            </ol>

            <h5 class="font-semibold text-xl text-gray-700">
                Для людей, проживающих вне Москвы
            </h5>
            <ol class="text-lg leading-relaxed text-slate-500 list-disc">
                <li>Отправка почтой (около 1-3 дней)</li>
                <li>Отправка Яндекс доставкой</li>
            </ol>
            <p class="text-lg leading-relaxed font-bold text-slate-700">
                Отправка Почтой России и Яндекс Доставкой по России при заказе
                от 900 руб. ✨стоит 100 руб✨
            </p>
        </div>
    </LandingContainer>
</template>
