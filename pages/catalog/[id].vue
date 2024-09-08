<script setup>
definePageMeta({
    layout: "landing",
});
const route = useRoute();
const { data } = useAsyncData(
    'products',
    () => $fetch('/api/products/:id', {
        params: {
            id: route.params.id,
        }
    })
);
</script>

<template>
    <LandingContainer>
        <div
            class="h-full flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-6 px-7 rounded-md gap-4">
            <div class="text-center">
                <h4 class="text-xl text-black">
                    {{ data }}
                </h4>
            </div>
        </div>
    </LandingContainer>
</template>
