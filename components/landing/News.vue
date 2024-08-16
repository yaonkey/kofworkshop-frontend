<template>
    <div class="mt-16 md:mt-0 text-center pb-3">
        <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
            Новинки
        </h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
            <div
                v-for="item of news"
                :key="item.id"
                class="cursor-pointer flex gap-4 items-start"
                @click="goToProduct(item.id)"
            >
                <div
                    class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md"
                >
                    <img
                        class="rounded-full transition-transform transform hover:scale-125"
                        src="~/assets/img/hero.png"
                        alt="Kofworkshop icon"
                        loading="eager"
                        format="avif"
                        width="512"
                        height="512"
                    />
                    <div class="text-center">
                        <h3 class="font-semibold text-lg hover:underline">
                            {{ item.title }}
                        </h3>
                    </div>
                    <div class="text-center">
                        <h4 class="text-lg font-medium text-gray-400">
                            {{ item.price }} руб.
                        </h4>
                    </div>
                    <div class="text-center gap-4 mt-8">
                        <LandingLink
                            size="lg"
                            styleName="outline"
                            rel="noopener"
                            to="{{"
                            item.url
                            }}
                            >Перейти</LandingLink
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const news = [
    {
        id: 1,
        title: "Панда",
        price: 2200,
        image: "",
        url: "",
    },
    {
        id: 2,
        title: "ПесПес",
        price: 1200,
        image: "",
        url: "",
    },
    {
        id: 3,
        title: "Клубника",
        price: 500,
        image: "",
        url: "",
    },
];

const router = useRouter();

const goToProduct = (productNumber: number) => {
    router.push(`/product/${productNumber}`);
};
</script>

<style></style>
