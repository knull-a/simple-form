<template>
    <Form autocomplete="on" action="/select-plan" class="flex flex-col gap-5" :validation-schema="schema">
        <div>
            <div class="flex justify-between">
                <label for="name">Name</label>
                <ErrorMessage name="name" class="text-red-600"  />
            </div>
            <Field v-model="infoStore.userInfo.name" class="border-2 focus:outline-none focus:border-secondary w-full p-3 rounded-lg" name="name" />
        </div>
        <div>
            <div class="flex justify-between">
                <label for="Email">Email</label>
                <ErrorMessage name="email" class="text-red-600" />
            </div>
            <Field v-model="infoStore.userInfo.email" class="border-2 focus:outline-none focus:border-secondary w-full p-3 rounded-lg" name="email" />
        </div>
        <div>
            <div class="flex justify-between">
                <label for="phone">Phone</label>
                <ErrorMessage name="phone" class="text-red-600" />
            </div>
            <Field v-model="infoStore.userInfo.phone" class="border-2 focus:outline-none focus:border-secondary w-full p-3 rounded-lg" name="phone" />
        </div>
        <MainFooter isFirstStep />
    </Form>
</template>
<script setup lang="ts">
import * as yup from 'yup'
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { Form, Field, ErrorMessage } from 'vee-validate'
import { useInfoStore } from '@/stores/infoStore.js';
import MainFooter from '@/components/Main/MainFooter.vue';
const route = useRoute()
const infoStore = useInfoStore()

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object({
    email: yup.string().required().email().label('Email'),
    name: yup.string().required().label('Name'),
    phone: yup.string().required().matches(phoneRegExp, 'Phone number is not valid').label('Phone')
})


</script>