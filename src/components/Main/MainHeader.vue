<template>
    <h2 class="text-primary text-4xl font-bold mb-2">{{ router.currentRoute.value.name }}</h2>
    <p class="text-grey mb-12">{{ subtitle }}</p>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import router from '@/router'

const subtitle = computed(() => {
    switch (router.currentRoute.value.name) {
        case 'Personal info':
            return 'Please provide your name, email address, and phone number.'
        case 'Select your plan':
            return 'You have the option of monthly or yearly billing.'
        case 'Pick add-ons':
            return 'Add-ons help enhance your gaming experience.'
        default:
            return 'Double-check everything looks OK before confirming.'
    }
})
</script>
