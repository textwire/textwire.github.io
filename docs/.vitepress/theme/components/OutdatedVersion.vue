<script setup lang="ts">
import { useRouter } from 'vitepress'
import { computed } from 'vue'

const router = useRouter()
const show = computed<boolean>(() => /^\/v[1-4](\/|$)/.test(router.route.path))
</script>

<template>
    <div v-if="show" class="custom-block danger outdated-version">
        <p class="custom-block-title">Outdated version</p>
        <p>
            You are viewing the outdated version of Textwire.
            <a href="/">Switch to the latest version</a> to get all the new features and improvements
        </p>
    </div>
</template>

<style scoped>
.outdated-version {
    max-width: 1152px;
    margin: 0 auto 24px auto;
}
</style>
