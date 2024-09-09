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
    <LandingContainer>
        <header class="static top-0 flex flex-col lg:flex-row justify-between items-center my-5">
            <div class="flex w-full lg:w-auto items-center justify-between font-light">
                <a href="/" class="text-3xl lg:text-2xl logo-text">
                    <span class="text-lime-800 m-px">Kof</span>
                    <span class="text-neutral-800">workshop</span>
                </a>
                <Transition name="slide-fade">
                    <div class="block lg:hidden">
                        <button @click="open = !open" class="text-gray-800">
                            <svg fill="currentColor" class="w-6 h-6" viewBox="0 0 20 20"
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
                </Transition>
            </div>
            <nav class="w-full lg:w-auto mt-2 lg:flex lg:mt-0" :class="{ block: open, hidden: !open }">
                <ul class="flex flex-col lg:flex-row lg:gap-3">
                    <li v-for="item of menuitems">
                        <LandingLink styleName="default" :to="item.path" @click="open = false"
                            class="transition duration-500 ease-in-out flex lg:px-3 py-2 text-neutral-800 hover:text-lime-800">
                            {{ item.title }}
                        </LandingLink>
                    </li>
                    <li>
                        <div class="lg:hidden flex items-center mt-3 gap-4">
                            <LandingLink href="#" size="md" styleName="outline"
                                class="flex lg:px-3 py-2 text-neutral-800 hover:text-lime-800 flex-row gap-2">
                                <Icon name="social:cart" class="hover:fill-lime-800" /> Корзина
                            </LandingLink>
                        </div>
                    </li>
                </ul>
            </nav>
            <div>
                <div class="hidden lg:flex items-center gap-4">
                    <LandingLink href="#" size="md" styleName="outline" to="/cart">
                        <Icon name="social:cart" width="25" height="25" />
                    </LandingLink>
                </div>
            </div>
        </header>
    </LandingContainer>
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
</style>
