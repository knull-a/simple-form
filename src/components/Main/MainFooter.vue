<template>
    <div class="absolute bottom-10">
        <div class="flex justify-between mt-14">    
            <button v-show="!props.isFirstStep" @click.prevent="$emit('goBack')" class="text-grey font-bold hover:text-primary">Go back</button>
            <button class="bg-primary text-white px-5 py-2 rounded-lg hover:brightness-125">
                <slot>Next Step</slot>
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    isFirstStep: boolean
}>()
defineEmits<{
   (e: 'goBack'): void
}>()
</script>