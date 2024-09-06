<script setup>
defineProps(["product"]);
let img = useImage();
</script>

<template>
    <div class="">
        <div
            v-if="product.is_available"
            class="h-full flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-6 px-7 rounded-2xl gap-4"
        >
            <div class="text-center">
                <h4 class="text-xl text-black">
                    <span class="font-bold">{{
                        product.title ?? "Без названия"
                    }}</span>
                    <span
                        class="text-[#ff5712] font-semibold"
                        v-if="
                            product.old_price &&
                            typeof product.old_price != 'undefined' &&
                            !isNaN(product.old_price)
                        "
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
                    <img
                        class="rounded-xl"
                        :src="
                            img(
                                `${product.image ? '/img/' + product.image : '/loading.svg'}`,
                            )
                        "
                    />
                </div>
                <p
                    class="mt-2 text-lg font-medium text-gray-600 flex justify-end gap-2 flex-wrap items-end text-end"
                >
                    <span
                        v-if="
                            product.old_price &&
                            typeof product.old_price != 'undefined' &&
                            !isNaN(product.old_price)
                        "
                        class="line-through text-[#ff5712]"
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
            <div class="flex gap-4">
                <div class="flex mt-2 w-full">
                    <LandingLink
                        :to="product.id ? '/catalog/' + product.id : '#'"
                        block
                        >Заказать
                    </LandingLink>
                </div>
                <div
                    v-if="product.file || typeof product.file == 'null'"
                    class="flex mt-2 w-full"
                >
                    <LandingLink block styleName="outline"> Схема </LandingLink>
                </div>
            </div>
        </div>
    </div>
</template>
