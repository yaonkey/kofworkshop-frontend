<script setup>
defineProps(["product"]);
let img = useImage();
</script>

<template>
    <div>
        <div
            class="h-full flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-6 px-7 rounded-md gap-4"
        >
            <div class="text-center">
                <h4 class="text-xl text-black">
                    <span class="font-bold">{{
                        product.title ?? "Без названия"
                    }}</span>
                    <span
                        class="text-red-400 font-semibold"
                        v-if="product.old_price !== undefined"
                    >
                        (-{{
                            parseInt(
                                100 - product.price / (product.old_price / 100),
                            )
                        }}%)</span
                    >
                </h4>
                <div
                    class="mt-4 flex w-full border-2 rounded-xl border-none items-center justify-center content-center"
                >
                    <NuxtImg
                        class="rounded-md"
                        loading="eager"
                        width="256px"
                        height="256px"
                        :src="product.image"
                        format="avif"
                        :placeholder="img(`/loading.svg`, { q: 10, h: 10 })"
                    />
                </div>
                <p
                    class="mt-2 text-lg font-medium text-gray-600 flex justify-end gap-2 flex-wrap items-end text-end"
                >
                    <span
                        v-if="product.old_price !== undefined"
                        class="line-through text-red-400"
                    >
                        {{ product.old_price }} руб
                    </span>
                    <span>
                        {{
                            product.price && product.price !== 0
                                ? product.price + " руб"
                                : "Бесплатно"
                        }}
                    </span>
                </p>
            </div>
            <div class="h-full w-full font-normal text-gray-400">
                <span v-if="typeof product.description == 'string'">{{
                    product.description
                }}</span>
                <span
                    v-if="typeof product.description == 'object'"
                    v-for="idx in 2"
                    >{{ product.description[idx] }}<br />
                </span>
            </div>
            <div class="flex mt-2 w-max md:w-full">
                <LandingLink :href="product.link || '#'" block>
                    {{ product.type !== "schema" ? "Заказать" : "Приобрести" }}
                </LandingLink>
            </div>
        </div>
    </div>
</template>
