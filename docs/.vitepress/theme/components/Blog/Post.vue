<script setup lang="ts">
import type { BlogPost } from '@/types'

defineProps<{ post: BlogPost }>()
</script>

<template>
    <a :href="post.url" class="tw-post">
        <h2>{{ post.title }}</h2>
        <p v-html="post.intro"></p>
    </a>
</template>

<style>
.tw-post {
    text-decoration: none !important;
}

.tw-post p {
    color: var(--vp-c-text-1);
}
</style>
