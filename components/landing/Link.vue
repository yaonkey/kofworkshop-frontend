<script setup lang="ts">
interface Props {
    href?: string;
    to?: string;
    size?: "md" | "lg";
    block?: boolean;
    styleName?: "outline" | "primary" | "inverted" | "muted" | "default";
    className?: string;
    [x: string]: any;
}

withDefaults(defineProps<Props>(), {
    size: "lg",
    styleName: "primary",
});

const sizes = {
    lg: "px-4 py-2 lg:px-5 lg:py-2.5",
    md: "px-3 py-1.5 lg:px-4 lg:py-2",
    sm: "px-2 py-1 lg:px-3 lg:py-1.5"
};

const styles = {
    outline: "transition duration-700 ease-in-out bg-transparent hover:bg-neutral-100 border-2 border-neutral-800 hover:border-lime-800 text-neutral-800",
    primary:
        "transition duration-700 ease-in-out bg-neutral-800 hover:bg-neutral-900 text-neutral-100 hover:text-lime-600 border-2 border-transparent rounded-md",
    inverted: "transition duration-700 ease-in-out bg-neutral-100 text-lime-800 border-2 border-transparent",
    text: "transition duration-700 ease-in-out bg-transparent text-neutral-800 border-2 border-transparent",
    muted: "transition duration-700 ease-in-out bg-neutral-800 hover:bg-neutral-900 border-2 border-transparent",
    default: "",
};
</script>

<template>
    <NuxtLink :to="to" :href="href" :class="[
        'rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200',
        block && 'w-full',
        sizes[size],
        styles[styleName],
    ]">
        <slot />
    </NuxtLink>
</template>
