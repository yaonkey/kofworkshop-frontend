<script setup>
defineProps(["product"]);
let img = useImage();
</script>

<template>
    <div>
        <div v-if="product.is_available"
            class="group shadow transition duration-700 ease-in-out h-full flex flex-col justify-between w-full bg-neutral-50 order-first lg:order-none border border-neutral-300 border-opacity-50 rounded-2xl mb-0 sm:mb-2">
            <div class="flex items-center justify-center">
                <img v-if="product.image" class="product-image rounded-t-2xl max-h-52 h-52 max-w-80 object-cover" :src="img(
                    `${'/img/' + product.image}`,
                )
                    " />
                <img v-else class="items-center justify-center product-image" :src="img(
                    `${'/loading.svg'}`,
                )
                    " />
            </div>
            <div class="p-2 sm:p-5">
                <h5 class="mb-1 lg:mb-2 text-md md:text-2xl flex flex-row gap-1 font-bold tracking-tight text-neutral-800">
                    <span>{{
                        product.title ?? "Без названия"
                        }}</span>
                    <span class="text-lime-800 font-semibold text-sm md:text-xl hidden sm:block" v-if="
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
                <p class="mb-1 lg:mb-3 text-md md:text-lg font-medium text-neutral-700 flex gap-1 lg:gap-2 flex-wrap">
                    <span v-if="
                        product.old_price &&
                        typeof product.old_price != 'undefined' &&
                        !isNaN(product.old_price)
                    " class="line-through text-lime-800">
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
                <div class="hidden text-start sm:block truncate md-1 lg:mb-4 w-full font-normal text-neutral-500">
                    <span v-if="typeof product.description == 'string'">{{
                        product.description
                        }}</span>
                    <span v-if="typeof product.description == 'object'" v-for="idx in 2">{{ product.description[idx]
                        }}<br />
                    </span>
                </div>
                <div class="w-full flex gap-1 lg:gap-2 flex-row flex-nowrap">
                    <div class="flex w-full">
                        <LandingLink :to="product.id ? '/catalog/' + product.id : '#'" block>Заказать
                        </LandingLink>
                    </div>
                    <div class="flex w-full" v-if="product.file || typeof product.file == 'null'">
                        <LandingLink block styleName="outline"> [ = ] </LandingLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.product-image {
    height: 200px;
    width: 320px;
    object-fit: cover;

    @media(max-width: 680px) {
        width: 100%;
    }
}
</style>
