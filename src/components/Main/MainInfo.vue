<template>
    <MainHeader />
    <RouterView />
</template>
<script setup lang="ts">
import MainHeader from './MainHeader.vue';
import { RouterView } from 'vue-router';
</script>