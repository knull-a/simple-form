<template>
    <div class="flex justify-between mt-14">
        <button v-show="!props.isFirstStep" @click.prevent class="text-grey font-bold hover:text-primary">Go back</button>
        <button class="bg-primary text-white px-5 py-2 rounded-lg hover:brightness-125">Next Step</button>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    isFirstStep: boolean
}>()
const emit = defineEmits<{
    
}>()
</script>