<script setup lang="ts">
import { ref } from "vue";
import profileImage from '@/assets/perfil.jpg'
import SkillComponent from '@/components/SkillComponent.vue';
import { ISkill } from '@/types/index';

const skillsInfo = ref<ISkill[]>([
  {
    url: "https://temporal.com",
    img_src: "temporal.png",
    skill_text: "Temporal"
  },
  {
    url: "https://www.docker.com",
    img_src: "docker-svgrepo-com.svg",
    skill_text: "Docker"
  },
  {
    url: "https://cloud.google.com/bigquery",
    img_src: "bigquery-svgrepo-com.svg",
    skill_text: "Big Query"
  },
  {
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img_src: "icon-javascript.svg",
    skill_text: "Javascript"
  },
  {
    url: "https://www.typescriptlang.org/",
    img_src: "icon-typescript.svg",
    skill_text: "Typescript"
  },

  {
    url: "https://vuejs.org/",
    img_src: "vue.svg",
    skill_text: "Vue.js"
  },
  {
    url: "https://go.dev/doc/",
    img_src: "go-fuchsia-svgrepo-com.svg",
    skill_text: "GO"
  },
  {
    url: "https://nestjs.com/",
    img_src: "icon-nest.svg",
    skill_text: "Nest.js"
  },
  {
    url: "https://nodejs.org/en",
    img_src: "icon-nodejs.svg",
    skill_text: "Node.js"
  },
  {
    url: "https://expressjs.com/",
    img_src: "icon-express-light.svg",
    skill_text: "Express.js"
  },

  {
    url: "https://socket.io/",
    img_src: "icon-socket-light.svg",
    skill_text: "Socket.io"
  },
  {
    url: "https://www.postgresql.org/",
    img_src: "icon-postgresql.svg",
    skill_text: "PostgreSQL"
  },
  {
    url: "https://www.mongodb.com/",
    img_src: "icon-mongodb.svg",
    skill_text: "MongoDB"
  },
  {
    url: "https://dev.mysql.com/doc/",
    img_src: "mysql-logo-svgrepo-com.svg",
    skill_text: "Mysql"
  },
  {
    url: "#",
    img_src: "msql-server-svgrepo-com.svg",
    skill_text: "SQL Server"
  },

  {
    url: "https://sass-lang.com/",
    img_src: "icon-sass.svg",
    skill_text: "Sass/Scss"
  },
  {
    url: "https://tailwindcss.com/",
    img_src: "icon-tailwindcss.svg",
    skill_text: "Tailwindcss"
  },
  {
    url: "https://www.figma.com/",
    img_src: "icon-figma.svg",
    skill_text: "Figma"
  },
  {
    url: "https://www.cypress.io/",
    img_src: "icon-cypress-light.svg",
    skill_text: "Cypress"
  },
  {
    url: "https://storybook.js.org/",
    img_src: "icon-storybook.svg",
    skill_text: "Storybook"
  },

  {
    url: "https://git-scm.com/",
    img_src: "icon-git.svg",
    skill_text: "Git"
  },
  {
    url: "https://laravel.com/",
    img_src: "laravel-svgrepo-com.svg",
    skill_text: "Laravel"
  },
  {
    url: "#",
    img_src: "php02-svgrepo-com.svg",
    skill_text: "PHP"
  },
  {
    url: "#",
    img_src: "csharp-svgrepo-com.svg",
    skill_text: "Csharp"
  }
]);

</script>

<template>
    <main class="flex min-h-screen w-full flex-col">

        <section class="w-full bg-gray py-16 md:py-20 2xl:py-24" id="hero">
            <div class="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                <div class="flex flex-col gap-12 md:flex-row">
                    <div class="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
                        <div class="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]"><img alt="Headshot of Sagar"
                                loading="lazy" width="1067" height="1067" decoding="async" data-nimg="1"
                                class="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
                                style="color:transparent;object-fit:cover"
                                :srcset="`${profileImage} 1x, ${profileImage} 2x`" :src="profileImage">
                            <div
                                class="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]">
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
                        <div class="flex flex-col gap-2">
                            <h1
                                class="text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900">
                                Hi, I'm Gabriel<!-- --> <span class="inline-block animate-waving-hand">👋</span></h1>
                            <p class="text-normal text-base">I'm a full stack developer (Vue.js &amp; Node.js) with a
                                focus on creating exceptional digital experiences that are
                                fast, accessible, visually appealing, and responsive. Even though I have been creating web
                                applications for over 5 years, I still love it as if it was something new.</p>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" class="stroke-gray-600">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <p class="text-normal text-base">Fortaleza-CE, Brasil</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="flex h-6 w-6 items-center justify-center"><span
                                        class="relative flex h-3 w-3"><span
                                            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span><span
                                            class="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span></span>
                                </div>
                                <p class="text-normal text-base">Available for new projects</p>
                            </div>
                        </div>
                        <div class="flex gap-1">
                            <button
                                class="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-github">
                                    <path
                                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                                    </path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg></button>
                            <button
                                class="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-twitter">
                                    <path
                                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                                    </path>
                                </svg></button>
                            <button
                                class="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6">
                                <svg class="w-8 " viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#e5e7eb">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                    <g id="SVGRepo_iconCarrier">
                                    <rect width="132" height="132" x="30" y="30" stroke="#e5e7eb" stroke-width="12" rx="16"/>
                                    <path stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M66 86v44"/>
                                    <circle cx="66" cy="64" r="8" fill="#e5e7eb"/>
                                    <path stroke="#e5e7eb" stroke-linecap="round" stroke-width="12" d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"/>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION SKILLS -->
        <section class="w-full bg-gray dark:bg-gray-50 py-16 md:py-20 2xl:py-24">
            <div class="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                <div class="flex flex-col items-center gap-4">
                    <div class="self-center">
                        <div class="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                            <p class="text-normal text-sm font-medium">My Tech Stack</p>
                        </div>
                    </div>
                <p class="text-normal text-lg md:text-xl max-w-xl text-center">The skills, tools and technologies I am
                    really good at:</p>
            </div>

            <div class="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
                <SkillComponent :items="skillsInfo"/>
            </div>
        </div>
        </section>

        <!-- SECTION PROJECTS -->
        <section class="w-full bg-gray py-16 md:py-20 2xl:py-24">
            <h1>PROJECTS</h1>
        </section>

</main>
</template>

<style>
</style>