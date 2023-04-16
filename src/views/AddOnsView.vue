<template>
    <Form action="/summary">
        <label :class="{ active: addOnStore.addOns.choice[0].isChecked }"
            class="cursor-pointer justify-between w-[450px] flex border border-grey rounded-lg items-center px-6 py-4 mb-4 hover:border-secondary"
            for="service">
            <div class="flex">
                <Field checked @click="check(0)" class="mr-4" type="checkbox" name="checkbox" value="Service"
                    v-model="addOnStore.addOns.list" id="service" />
                <div>
                    <p>{{ addOnStore.addOns.choice[0].title }}</p>
                    <p>{{ addOnStore.addOns.choice[0].subtitle }}</p>
                </div>
            </div>
            <p v-if="planStore.plan.isYearly">
                +${{ addOnStore.addOns.choice[0].price = 10 }}/yr
            </p>
            <p v-else>
                +${{ addOnStore.addOns.choice[0].price >= 10 ? addOnStore.addOns.choice[0].price / 10 :
                    addOnStore.addOns.choice[0].price }}/mo
            </p>
        </label>
        <label :class="{ active: addOnStore.addOns.choice[1].isChecked }"
            class="cursor-pointer justify-between w-[450px] flex border border-grey rounded-lg items-center px-6 py-4 mb-4 hover:border-secondary"
            for="storage">
            <div class="flex">
                <Field @click="check(1)" class="mr-4" type="checkbox" name="checkbox" value="Storage"
                    v-model="addOnStore.addOns.list" id="storage" />
                <div>
                    <p>{{ addOnStore.addOns.choice[1].title }}</p>
                    <p>{{ addOnStore.addOns.choice[1].subtitle }}</p>
                </div>
            </div>
            <p v-if="planStore.plan.isYearly">
                +${{ addOnStore.addOns.choice[1].price = 20 }}/yr
            </p>
            <p v-else>
                +${{ addOnStore.addOns.choice[1].price >= 10 ? addOnStore.addOns.choice[1].price / 10 :
                    addOnStore.addOns.choice[1].price }}/mo
            </p>
        </label>
        <label :class="{ active: addOnStore.addOns.choice[2].isChecked }"
            class="cursor-pointer justify-between flex border border-grey rounded-lg items-center px-6 py-4 mb-4 hover:border-secondary"
            for="profile">
            <div class="flex">
                <Field @click="check(2)" class="mr-4" type="checkbox" name="checkbox" value="Profile"
                    v-model="addOnStore.addOns.list" id="profile" />
                <div>
                    <p>{{ addOnStore.addOns.choice[2].title }}</p>
                    <p>{{ addOnStore.addOns.choice[2].subtitle }}</p>
                </div>
            </div>
            <p v-if="planStore.plan.isYearly">
                +${{ addOnStore.addOns.choice[2].price = 20 }}/yr
            </p>
            <p v-else>
                +${{ addOnStore.addOns.choice[2].price >= 10 ? addOnStore.addOns.choice[2].price / 10 :
                    addOnStore.addOns.choice[2].price }}/mo
            </p>
        </label>
        <MainFooter @go-back="router.push('/select-plan')" :isFirstStep="false" />
    </Form>
</template>
<script setup lang="ts">
import { Form, Field } from 'vee-validate'
import { usePlanStore } from '@/stores/planStore';
import { useAddOnsStore } from '@/stores/addOnStore'
import MainFooter from '@/components/Main/MainFooter.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const planStore = usePlanStore()
const addOnStore = useAddOnsStore()

const check = (index: number) => addOnStore.addOns.choice[index].isChecked = !addOnStore.addOns.choice[index].isChecked

</script>
<style scoped>
.active {
    box-shadow: 0 0 0 3px;
}
</style>