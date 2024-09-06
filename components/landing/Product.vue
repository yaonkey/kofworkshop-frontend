<script setup>
defineProps(["product"]);
let img = useImage();
</script>

<template>
    <div v-if="product.is_available"
        class="p-2 justify-between relative max-w-full sm:max-w-sm h-full flex flex-col w-full shadow border border-[#D8DEE9] border-opacity-50 rounded-2xl mb-2">
        <div class="flex items-center justify-center">
            <img class="rounded-t-2xl" :src="img(
                `${product.image ? '/img/' + product.image : '/loading.svg'}`,
            )
                " />
        </div>
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
                <span>{{
                    product.title ?? "Без названия"
                }}</span>
                <span class="text-[#ff5712] font-semibold text-xl" v-if="
                    product.old_price &&
                    typeof product.old_price != 'undefined' &&
                    !isNaN(product.old_price)
                ">
                    (-{{
                        parseInt(
                            100 - product.price / (product.old_price / 100),
                        )
                    }}%)</span>
            </h5>
            <p class="mb-3 text-lg font-medium text-gray-700 flex gap-2 flex-wrap">
                <span v-if="
                    product.old_price &&
                    typeof product.old_price != 'undefined' &&
                    !isNaN(product.old_price)
                " class="line-through text-[#ff5712]">
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
            <div class="truncate h-full w-full mb-6 font-normal text-gray-400">
                <span v-if="typeof product.description == 'string'">{{
                    product.description
                }}</span>
                <span v-if="typeof product.description == 'object'" v-for="idx in 2">{{ product.description[idx]
                    }}<br />
                </span>
            </div>
            <div class="w-full gap-4 mb-2 pt-4">
                <div class="absolute bottom-6 left-4">
                    <LandingLink :to="product.id ? '/catalog/' + product.id : '#'" block>Заказать
                    </LandingLink>
                </div>
                <div class="bottom-6 absolute right-4" v-if="product.file || typeof product.file == 'null'">
                    <LandingLink block styleName="outline"> Схема </LandingLink>
                </div>
            </div>
        </div>
    </div>
</template>
