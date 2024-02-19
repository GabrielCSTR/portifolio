<script setup lang="ts">
import { defineProps } from 'vue';
import { ISkill } from '@/types/index';

const { skill } = defineProps<{ skill: ISkill }>();
const getImageUrl = (name:string) => {
    return new URL(`../assets/icons/${name}`, import.meta.url).href
}
</script>

<template>
    <div v-motion="{ from: 'right' }" class="flex flex-col items-center gap-2">
        <a target="_blank" :href="skill.url">
            <img :alt="skill.skill_text" loading="lazy" width="64" height="64" decoding="async" data-nimg="1"
                class="transition-transform duration-300 md:hover:scale-110"
                :src="getImageUrl(skill.img_src)" style="color: transparent;">
        </a>
        <p class="text-normal text-base md:text-lg">{{ skill.skill_text }}</p>
    </div>
</template>

<style scoped></style>
