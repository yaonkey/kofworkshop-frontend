<script setup>
definePageMeta({
    layout: "landing",
});
const route = useRoute();
console.log(route.params.id);
</script>

<template>
    <LandingContainer>
        <div
            class="h-full flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-6 px-7 rounded-md gap-4">
            <div class="text-center">
                <h4 class="text-xl text-black">
                    <span class="font-bold">{{
                        product.title ?? "Без названия"
                        }}</span>
                </h4>
            </div>
        </div>
    </LandingContainer>
</template>
