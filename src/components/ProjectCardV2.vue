<script setup lang="ts">
import { useGithub } from '@/composable/useGithub';
import { defineProps, onMounted } from 'vue';

const { project } = defineProps(["project"]);
const { getProjectLanguages } = useGithub();

onMounted(async () => {
    try {
        const response = await getProjectLanguages(project.name);
        project.tags = Object.keys(response);
    } catch (error) {
        console.error(error);
    }
});

const getTagValue = (tag: string) => {
    const tagMap: any = {
        'C#': 'c%23',
        'C++': 'C++',
        'Objective-C': 'OBJECTIVE--C',
        'C': 'C'
    };

    return tagMap[tag] || tag;
};

</script>

<template>
    <div class="flex flex-col w-full text-gray-500 dark:text-gray-400">
        <img class="mx-auto mb-4 w-full h-auto rounded-md"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar">
        <span
            class="bg-blue-100 w-1/2 text-gray-50 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2  border border-gray-500 ">
            <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 20">
                <path
                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
            </svg>
            3 days ago
        </span>
        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">{{ project.name }}</a>
        </h3>
        <p>{{ project.description }}</p>
        <ul class="flex  mt-4 space-x-4">
            <li class="flex flex-row">
                <img v-for="tag in project.tags" :key="tag" class="mr-2" alt="language"
                    :src="`https://img.shields.io/badge/${getTagValue(tag)}-0D1117?style=for-the-badge&logo=${getTagValue(tag)}`" />
            </li>
        </ul>
        <div class="flex mt-5">
            <button type="button"
                class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 8 19">
                    <path fill-rule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                        clip-rule="evenodd" />
                </svg>
                Sign in with Facebook
            </button>
            <button type="button"
                class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 8 19">
                    <path fill-rule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                        clip-rule="evenodd" />
                </svg>
                Sign in with Facebook
            </button>
        </div>

    </div>
</template>