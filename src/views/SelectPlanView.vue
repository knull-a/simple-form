<template>
    <Form action="/add-ons" :validationSchema="schema">
        <ErrorMessage name="plan" class="text-red-600" />
        <div class="flex gap-4">
            <div>
                <Field type="radio" id="arcade" name="plan" value="0" v-model="picked" hidden></Field>
                <label
                    class="w-[140px] block border border-grey rounded-lg py-5 pl-4 pr-10 cursor-pointer hover:border-primary"
                    :class="{ active: activeIndex === 0 }" @click="setActive(0)" for="arcade">
                    <IconArcade class="mb-6" />
                    <p>{{ planStore.plan[0].title }}</p>
                    <div v-if="isYearly">
                        <p>${{ planStore.plan[0].price * 10 }}/yr</p>
                        <p class="text-xs">2 months free</p>
                    </div>
                    <p v-else>${{ planStore.plan[0].price }}/mo</p>
                </label>
            </div>
            <div>
                <Field type="radio" id="advanced" name="plan" value="1" v-model="picked" hidden></Field>
                <label
                    class="w-[140px] block border border-grey rounded-lg py-5 pl-4 pr-10 cursor-pointer hover:border-primary"
                    :class="{ active: activeIndex === 1 }" @click="setActive(1)" for="advanced">
                    <IconAdvanced class="mb-6" />
                    <p>{{ planStore.plan[1].title }}</p>
                    <div v-if="isYearly">
                        <p>${{ planStore.plan[1].price * 10 }}/yr</p>
                        <p class="text-xs">2 months free</p>
                    </div>
                    <p v-else>${{ planStore.plan[1].price }}/mo</p>
                </label>
            </div>
            <div>
                <Field type="radio" id="pro" name="plan" value="2" v-model="picked" hidden></Field>
                <label
                    class="w-[140px] block border border-grey rounded-lg py-5 pl-4 pr-10 cursor-pointer hover:border-primary"
                    :class="{ active: activeIndex === 2 }" @click="setActive(2)" for="pro">
                    <IconPro class="mb-6" />
                    <p>{{ planStore.plan[2].title }}</p>
                    <div v-if="isYearly">
                        <p>${{ planStore.plan[2].price * 10 }}/yr</p>
                        <p class="text-xs">2 months free</p>
                    </div>
                    <p v-else>${{ planStore.plan[2].price }}/mo</p>
                </label>
            </div>
        </div>

        <div class="flex justify-center mt-8 gap-6 text-grey">
            <span :class="{'text-primary': !isYearly}">Monthly</span>
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="isYearly" class="sr-only peer">
                <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary">
                </div>
            </label>
            <span :class="{'text-primary': isYearly}">Yearly</span>
        </div>

        <MainFooter @go-back="router.push('/your-info')" :isFirstStep="false" />
    </Form>
</template>
<script setup lang="ts">
import * as yup from 'yup'
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate'
import MainFooter from '@/components/Main/MainFooter.vue';
import IconAdvanced from '@/assets/icons/IconAdvanced.vue';
import IconArcade from '@/assets/icons/IconArcade.vue';
import IconPro from '@/assets/icons/IconPro.vue';
import { usePlanStore } from "@/stores/planStore"
import { useRouter } from 'vue-router';

const router = useRouter()

const planStore = usePlanStore()

const isYearly = ref(false)

const activeIndex = ref<number>()

const picked = ref<number>()

const setActive = (index: number) => {
    activeIndex.value = index
}

const schema = {
  plan: (value: boolean) => {
    if (value) {
      return true;
    }
    return 'You must choose a plan';
  },
};

</script>
<style scoped>
.active {
    box-shadow: 0 0 0 3px;
}
</style>