<template>
<div>
    <RouterLink class="flex items-center" to="/your-info">
        <div class="flex items-center justify-center bg-transparent border-2 border-white rounded-full w-7 h-7 mr-3">1</div>
        <div class="flex flex-col">
            <p>STEP 1</p>
            <P>YOUR INFO</P>
        </div>
    </RouterLink>
    <RouterLink to="/select-plan">

    </RouterLink>
    <RouterLink to="/adds-on"></RouterLink>
    <RouterLink to="/summary"></RouterLink>
</div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>