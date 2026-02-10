<script setup lang="ts">
import { features } from '@/modules/features'
import { VPFeatures } from 'vitepress/theme'
</script>

<template>
    <VPFeatures :features />
</template>

<style>
.VPFeatures .title {
    margin: 0;
    border-top: none;
    padding: 0;
    font-size: 1.2rem;
}

.VPFeatures .details {
    margin: 0;
    padding-top: 8px;
}
</style>

