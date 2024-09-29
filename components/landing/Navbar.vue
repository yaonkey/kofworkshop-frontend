<script setup>

const menuitems = [
    {
        title: "Игрушки",
        path: "/catalog/",
    },
    {
        title: "Блог",
        path: "/blog/",
    },
    {
        title: "Доставка",
        path: "/delivery/",
    },
    {
        title: "О нас",
        path: "/about/",
    },
];

const open = ref(false);
</script>

<template>
    <nav
        class="bg-white/75 px-5 lg:px-7 sticky z-50 backdrop-blur top-0 flex flex-col lg:flex-row justify-between items-center pt-3 lg:py-1">
        <div class="mx-auto flex max-w-7xl gap-3 flex-1 items-center justify-between font-light w-full">
            <a href="/" class="text-3xl lg:text-2xl logo-text">
                <span class="text-lime-800 m-px">Kof</span>
                <span class="text-neutral-800">workshop</span>
            </a>
            <div class="block lg:hidden">
                <button @click="open = !open" class="text-gray-800">
                    <svg fill="currentColor" class="w-6 h-6 transition duration-500 ease-in-out" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>Меню</title>
                        <path v-show="open" fill-rule="evenodd" clip-rule="evenodd"
                            d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z">
                        </path>
                        <path v-show="!open" fill-rule="evenodd"
                            d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
        <div class="w-full lg:w-auto mt-2 lg:flex lg:mt-0 justify-between" :class="{ block: open, hidden: !open }">
            <div class="z-10">
                <ul class="flex flex-col lg:flex-row lg:gap-3">
                    <li v-for="item of menuitems">
                        <LandingLink styleName="default" :to="item.path" @click="open = false"
                            class="transition duration-500 ease-in-out flex lg:px-3 py-2 text-neutral-800 hover:text-lime-800">
                            {{ item.title }}
                        </LandingLink>
                    </li>
                    <li>
                        <LandingLink to="/cart/" styleName="default"
                            class="lg:hidden transition duration-500 ease-in-out flex lg:px-3 py-2 text-neutral-800 hover:text-lime-800">
                            Корзина
                        </LandingLink>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div class="hidden lg:flex items-center gap-4">
                <LandingLink size="md" styleName="" to="/cart">
                    <Icon name="social:cart" width="30" height="30" />
                </LandingLink>
            </div>
        </div>
    </nav>
</template>

<style>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.bg-background {}
</style>
