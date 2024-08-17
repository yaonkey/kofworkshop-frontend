<template>
    <main class="flex lg:flex-cols-2 place-items-center pt-16 pb-8 md:pt-8">
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
                class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight"
            >
                Творческая <span class="underline">мастерская</span> вязаных
                игрушек
            </h1>
            <p class="text-lg mt-4 text-slate-600 max-w-xl">
                Творческая мастерская, которой заведует одна девушка.<wbr />
                Игрушки различной сложности и совершенно разных расцветок
            </p>
            <div
                class="mt-6 flex flex-col sm:flex-row gap-5 text-center font-semibold"
            >
                <LandingLink href="/catalog" rel="noopener"
                    >Каталог</LandingLink
                >
                <LandingLink
                    size="lg"
                    styleName="outline"
                    rel="noopener"
                    href="https://vk.com/kofworkshop"
                    target="_blank"
                    >ВКонтакте</LandingLink
                >
                <LandingLink
                    size="lg"
                    styleName="outline"
                    rel="noopener"
                    href="https://t.me/kofworkshop"
                    target="_blank"
                    >Telegram</LandingLink
                >
                <LandingLink
                    size="lg"
                    styleName="outline"
                    rel="noopener"
                    href="https://reddit.com/r/kofworkshop"
                    target="_blank"
                    >Reddit</LandingLink
                >
                <LandingLink
                    size="lg"
                    styleName="outline"
                    rel="noopener"
                    href="https://pikabu.ru/@megawhat"
                    target="_blank"
                    >Пикабу</LandingLink
                >
            </div>
        </div>
    </main>
</template>
