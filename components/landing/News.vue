<template>
    <div class="mt-10 md:mt-0 text-center pb-3">
        <h2 class="text-4xl lg:text-5xl text-neutral-800 font-bold lg:tracking-tight">
            Новинки
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 sm:gap-10 gap-1 mx-auto max-w-screen-lg mt-12 justify-center">
            <LandingProduct v-if="status == 'success'" v-for="product of data.rows" :product="product" />
        </div>
        <div class="flex items-center justify-center mt-8">
            <LandingLink styleName="outline" size="lg" class="flex justify-center items-center text-lg rounded-xl"
                href="/catalog" rel="noopener">Хотите увидеть больше?</LandingLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { data, status } = useAsyncData(
    'products',
    () => $fetch('/api/products')
);

const router = useRouter();
</script>

<style></style>
