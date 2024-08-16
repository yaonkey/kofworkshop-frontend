<script setup>
defineProps(["product"]);
</script>

<template>
    <div>
        <div
            class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md"
        >
            <div class="text-center">
                <h4 class="text-lg font-medium text-black text-bold">
                    {{ product.title ?? "Без названия" }}
                </h4>
                <div class="flex sm:w-40 items-center">
                    <img
                        class="rounded-full"
                        :src="product.image"
                        :alt="product.title"
                        loading="eager"
                        format="avif"
                        width="256"
                        height="256"
                    />
                </div>
                <p class="mt-3 text-4xl font-medium text-gray-500 md:text-4xl">
                    {{
                        product.price && product.price !== 0
                            ? product.price + " руб."
                            : "Бесплатно"
                    }}
                </p>
            </div>
            <div class="w-full font-normal text-gray-400">
                {{ product.description ?? "Без описания" }}
            </div>
            <div class="flex mt-8">
                <LandingLink :href="product.link || '#'" block>
                    {{ product.type !== "schema" ? "Заказать" : "Приобрести" }}
                </LandingLink>
            </div>
        </div>
    </div>
</template>
