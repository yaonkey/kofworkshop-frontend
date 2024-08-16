<template>
    <footer
        class="flex flex-col lg:flex-row justify-between items-center rounded-lg m-4 bg-white"
    >
        <div
            class="w-full lg:w-auto mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-content"
        >
            <span
                class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
                >© {{ new Date().getFullYear() }}
                <a href="/" class="hover:underline">Kofworkshop</a>. Все права
                защищены. Made by
                <a
                    href="https://github.com/yaonkey"
                    p
                    target="_blank"
                    rel="noopener"
                    class="hover:underline"
                >
                    <span class="text-teal-600"> Yaonkey</span>
                </a>
            </span>
        </div>
    </footer>
</template>

<script lang="ts" setup></script>

<style></style>
