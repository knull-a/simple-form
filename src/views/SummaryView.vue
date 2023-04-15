<template>
    {{ infoStore.userInfo }}
</template>
<script setup lang="ts">
import { useInfoStore } from '@/stores/infoStore.js';
const infoStore = useInfoStore()
</script>