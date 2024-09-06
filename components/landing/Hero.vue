<script setup lang="ts">
import type { LandingSocial } from '#build/components';


</script>

<template>
    <main class="flex px-2 lg:flex-cols-2 place-items-center pt-16 pb-8 md:pt-8">
        <div class="p-24 md:order-1 hidden md:block">
            <NuxtImg class="rounded-full transition-transform transform hover:scale-150 scale-125" src="/img/hero.png"
                alt="Kofworkshop icon" loading="eager" format="avif" width="512" height="512"
                placeholder="/loading.svg" />
        </div>

        <div>
            <h1 class="text-2xl sm:text-wrap md:text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
                Творческая <span class="underline decoration-black text-[#ff5712]">мастерская</span> вязаных
                игрушек
            </h1>
            <p class="text-lg mt-4 text-slate-600 max-w-xl">
                Творческая мастерская, которой заведует одна девушка.<br />
                Игрушки различной сложности и совершенно разных расцветок
            </p>
            <div class="mt-6 flex flex-col md:flex-row gap-5 text-center font-semibold">
                <LandingSocial />
            </div>
        </div>
    </main>
</template>
