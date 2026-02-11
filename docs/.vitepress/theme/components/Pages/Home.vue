<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { features } from '@/modules/features'
import { VPFeatures } from 'vitepress/theme'
import StarPopup from '@/components/StarPopup.vue'
import PopupSlideTransition from '@/components/Transitions/PopupSlideTransition.vue'

const isVisible = ref<boolean>(false)

onMounted(checkPopup)

function checkPopup(): void {
    if (localStorage.getItem('starPopup') === null) {
        isVisible.value = true
    }
}

const closePopup = (): void => {
    isVisible.value = false
    localStorage.setItem('starPopup', '1')
}
</script>

<template>
    <div class="home-page">
        <VPFeatures :features />

        <PopupSlideTransition>
            <StarPopup v-if="isVisible" @close="closePopup" />
        </PopupSlideTransition>
    </div>
</template>

<style>
.home-page {
    margin-top: 50px;
}
</style>
