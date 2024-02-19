<script setup lang="ts">
import { useGithub } from '@/composable/useGithub';
import { defineProps, onMounted } from 'vue';

const { project } = defineProps(["project"]);
const { getProjectLanguages } = useGithub();

onMounted(async () => {
    try {
        const response = await getProjectLanguages(project.name);
        console.log("RESPONSE", response);
        project.tags = Object.keys(response);
        console.log(project.private);
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
<div class="max-w-sm bg-white border border-gray-200 dark:bg-gray-100 dark:shadow-2xl rounded-lg shadow">
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {{ project.name }}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {{ project.description }}</p>
        <div class="flex flex-wrap gap-2">
            <img v-for="tag in project.tags" :key="tag" alt="language" :src="`https://img.shields.io/badge/${getTagValue(tag)}-0D1117?style=for-the-badge&logo=${getTagValue(tag)}`" />
        </div>
    </div>
    <div class="p-5 mt-auto">
            <a :href="project.html_url" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
</div>

</template>
