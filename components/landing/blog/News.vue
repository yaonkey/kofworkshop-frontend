<script setup>
defineProps(["news"]);
</script>

<template>
    <div>
        <div
            class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md"
        >
            <div class="text-center items-center">
                <h5 class="text-lg font-medium text-black text-bold mb-2">
                    {{ news.title ?? "Без названия" }}
                </h5>
                <div class="flex sm:w-40 items-center">
                    <img
                        class="rounded-full"
                        :src="news.image"
                        loading="eager"
                        format="avif"
                        width="256"
                        height="256"
                    />
                </div>
                <p
                    class="mt-3 text-sm font-medium text-gray-200 items-start flex"
                >
                    {{ news.date }}
                </p>
            </div>
            <div
                class="font-normal text-gray-400 overflow-hidden whitespace-nowrap text-ellipsis w-20 h-16 inline-block relative"
            >
                {{ news.text ?? "Нет текста" }}
            </div>
            <div class="flex mt-8">
                <LandingLink :href="news.link || '#'" block styleName="outline">
                    Читать
                </LandingLink>
            </div>
        </div>
    </div>
</template>
