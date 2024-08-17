<script setup>
definePageMeta({
    layout: "landing",
});

const TeamImg1 =
    "https://sun1-23.userapi.com/s/v1/ig2/Q_vOMeG5Ei4gbRbdKKLLOM_9S-X28vn2f2pdNw9bTb3PM1fz9epfeoUkIAyo2VqVfnPRTPN6doW9WucliuNJ1m3j.jpg?quality=95&crop=325,6,1905,1905&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440&ava=1&u=0bnIzkqDOZMkLsIUylxg_O24e858oPHp8oC-1ZyO1Wo&cs=200x200";
const TeamImg2 =
    "https://sun1-97.userapi.com/s/v1/ig2/53ua3TAUf7opgn81i15iJbolf3KbZ0CKqvebzVSyVlpDk0jDMGxQVgu7x8Af8Uh5wNqCjHw3A3cZ_5YhtLOyIi40.jpg?quality=95&crop=451,534,1642,1642&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440&ava=1&u=iVWp5JWk0u45GmG0e5ziwVresc-uT9VRlRjalOaCmBw&cs=200x200";
const TeamImg3 =
    "https://sun1-83.userapi.com/s/v1/ig2/BbJz0KP4AA_r-l6wFkNVJHfB-KyD9AjlqjhFqOtG_PukcdCEw9FeMDi0pp40LbDVymHmFyh1omT5xfACAt2Ypyh7.jpg?quality=95&crop=1105,501,640,640&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640&ava=1&u=keT79xbPvFXJFtLMazoXfdeb5sby144oDT1jrjYgKGY&cs=200x200";

const team = [
    {
        name: "Мария Кофонкина",
        title: "Главная вязакля",
        link: "https://t.me/Kofonkina/",
        avatar: {
            src: TeamImg1,
        },
    },
    {
        name: "София Чернова",
        title: "Курьер/продавец",
        link: "https://t.me/Sofafrisk",
        avatar: {
            src: TeamImg2,
        },
    },
    {
        name: "Дмитрий Лисовский",
        title: "Разработчик",
        link: "https://t.me/ya0nkey/",
        avatar: {
            src: TeamImg3,
        },
    },
];
</script>

<template>
    <LandingContainer>
        <LandingSectionhead>
            <template v-slot:title>Кто мы?</template>
            <template v-slot:desc
                >Маленькая мастерская, где создаются игрушки.</template
            >
        </LandingSectionhead>

        <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
            <h2 class="font-bold text-3xl text-gray-800">
                Работа превыше всего.
            </h2>
            <p class="text-lg leading-relaxed text-slate-500">
                Хоть мы все и разные, но все одинакого любим засиживаться за
                работой. Каждый из нас любит свое дело.
            </p>
        </div>
        <div
            class="flex-wrap items-center justify-center gap-10 mx-auto max-w-4xl mt-12 flex"
        >
            <div v-for="item of team" class="group border-b-black border-b-2">
                <div class="w-full aspect-square">
                    <NuxtImg
                        :src="item.avatar.src"
                        placeholder="Загрузка"
                        width="256px"
                        height="256px"
                        format="avif"
                        class="w-full h-full rounded-full border-black border-2 object-cover transition"
                    />
                </div>
                <div class="mt-4 text-center font-semibold">
                    <h2 class="text-lg text-gray-800">{{ item.name }}</h2>
                    <h3 class="text-sm text-slate-500">{{ item.title }}</h3>
                </div>
                <div class="text-center mt-4">
                    <LandingLink
                        size="lg"
                        styleName="outline"
                        rel="noopener"
                        :href="item.link"
                        target="_blank"
                        external
                        >Связаться</LandingLink
                    >
                </div>
            </div>
        </div>
    </LandingContainer>
</template>
