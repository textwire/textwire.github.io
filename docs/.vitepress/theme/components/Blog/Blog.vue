<script setup lang="ts">
import { blogPosts } from '@/modules/blogPosts'
import Post from '@/components/Blog/Post.vue'
</script>

<template>
    <Post v-for="post in blogPosts" :key="post.title" :post />
</template>
