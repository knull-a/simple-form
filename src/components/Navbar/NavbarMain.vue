<template>
    <div class="flex flex-col gap-8">
        <RouterLink active-class="active" class="flex items-center" to="/your-info">
            <div class="number font-bold flex items-center justify-center bg-transparent border-2 border-white rounded-full w-7 h-7 mr-3">1
            </div>
            <div class="flex flex-col">
                <p class="text-lightGrey">STEP 1</p>
                <P class="font-bold">YOUR INFO</P>
            </div>
        </RouterLink>
        <RouterLink active-class="active" class="flex items-center" to="/select-plan">
            <div class="number font-bold  flex items-center justify-center bg-transparent border-2 border-white rounded-full w-7 h-7 mr-3">2
            </div>
            <div class="flex flex-col">
                <p class="text-lightGrey">STEP 2</p>
                <P class="font-bold">SELECT PLAN</P>
            </div>

        </RouterLink>
        <RouterLink active-class="active" class="flex items-center" to="/add-ons">
            <div class="number font-bold  flex items-center justify-center bg-transparent border-2 border-white rounded-full w-7 h-7 mr-3">3
            </div>
            <div class="flex flex-col">
                <p class="text-lightGrey">STEP 3</p>
                <P class="font-bold">ADD-ONS</P>
            </div>
        </RouterLink>
        <RouterLink active-class="active" class="flex items-center" to="/summary">
            <div class="number font-bold  flex items-center justify-center bg-transparent border-2 border-white rounded-full w-7 h-7 mr-3">4
            </div>
            <div class="flex flex-col">
                <p class="text-lightGrey">STEP 4</p>
                <P class="font-bold">SUMMARY</P>
            </div>
        </RouterLink>
    </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<style scoped>
.active .number {
    background-color: hsl(206, 94%, 87%);
    color: hsl(213, 96%, 18%);
    border: 0;
}
</style>