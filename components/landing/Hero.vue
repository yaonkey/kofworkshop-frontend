<script setup lang="ts">

</script>

<template>
    <main
        class="flex px-2 lg:flex-cols-2 place-items-center pt-16 pb-8 md:pt-8"
    >
        <div class="p-24 md:order-1 hidden md:block">
            <NuxtImg
                class="rounded-full transition-transform transform hover:scale-150 scale-125"
                src="/img/hero.png"
                alt="Kofworkshop icon"
                loading="eager"
                format="avif"
                width="512"
                height="512"
                placeholder="/loading.svg"
            />
        </div>

        <div>
            <h1
                class="text-2xl sm:text-wrap md:text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight"
            >
                Творческая <span class="underline decoration-black text-[#ff5712]">мастерская</span> вязаных
                игрушек
            </h1>
            <p class="text-lg mt-4 text-slate-600 max-w-xl">
                Творческая мастерская, которой заведует одна девушка.<br />
                Игрушки различной сложности и совершенно разных расцветок
            </p>
            <div
                class="mt-6 flex flex-col md:flex-row gap-5 text-center font-semibold"
            >
                <div class="flex flex-col lg:flex-row gap-2 items-center justify-center">
                    <div class="flex flex-row gap-2 items-center justify-center">
                        <LandingLink
                            size="lg"
                            styleName="outline"
                            rel="noopener"
                            href="https://vk.com/kofworkshop"
                            target="_blank"
                            class="rounded-xl"
                            ><NuxtImg
                                src="/icons/vk.svg"
                                alt="VK icon"
                                loading="eager"
                                format="avif"
                                width="50"
                                height="50"
                        /></LandingLink>
                        <LandingLink
                            size="lg"
                            styleName="outline"
                            rel="noopener"
                            href="https://t.me/kofworkshop"
                            target="_blank"
                            class="rounded-xl"
                            ><NuxtImg
                                src="/icons/telegram.svg"
                                alt="Telegram icon"
                                loading="eager"
                                format="avif"
                                width="50"
                                height="50"
                        /></LandingLink>
                        <LandingLink
                            size="lg"
                            styleName="outline"
                            rel="noopener"
                            href="https://reddit.com/r/kofworkshop"
                            target="_blank"
                            class="rounded-xl"
                            ><NuxtImg
                                src="/icons/reddit.svg"
                                alt="Reddit icon"
                                loading="eager"
                                format="avif"
                                width="50"
                                height="50"
                        /></LandingLink>
                    </div>
                    <div class="flex flex-row gap-2 items-center justify-center">
                        <LandingLink
                            size="lg"
                            styleName="outline"
                            rel="noopener"
                            href="https://pikabu.ru/@megawhat"
                            target="_blank"
                            class="rounded-xl"
                            ><NuxtImg
                                src="/icons/pikabu.svg"
                                alt="Pikabu icon"
                                loading="eager"
                                format="avif"
                                width="50"
                                height="50"
                        /></LandingLink>
                        <LandingLink
                            size="lg"
                            styleName="outline"
                            rel="noopener"
                            href="https://www.twitch.tv/bakasempaides"
                            target="_blank"
                            class="rounded-xl"
                            ><NuxtImg
                                src="/icons/twitch.svg"
                                alt="Twitch icon"
                                loading="eager"
                                format="avif"
                                width="50"
                                height="50"
                        /></LandingLink>
                        <LandingLink
                            size="lg"
                            styleName="outline"
                            rel="noopener"
                            href="https://instagram.com/kofworkshop/"
                            target="_blank"
                            class="rounded-xl"
                            ><NuxtImg
                                src="/icons/instagram.svg"
                                alt="Instagram icon"
                                loading="eager"
                                format="avif"
                                width="50"
                                height="50"
                        /></LandingLink>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
