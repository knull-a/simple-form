<template>
    <!-- {{ infoStore.userInfo }}
    {{ planStore.plan }}
    {{ planStore.picked }}
    {{ addOnStore }} -->
    <div>
        <div class="flex items-center justify-between pb-2 mb-2 border-b">
            <div>
                <div class="font-bold">
                    {{ planStore.plan.choice[planStore.picked as number].title }}
                    <span v-if="planStore.plan.isYearly">(Yearly)</span>
                    <span v-else>(Monthly)</span>
                </div>
                <RouterLink class="text-sm underline text-grey" to="/select-plan">Change</RouterLink>
            </div>
            <div class="font-bold">
                ${{ planStore.plan.choice[planStore.picked as number].price }}/{{ period }}
            </div>
        </div>
        <div>
            <div class="flex justify-between mb-2" v-for="(pick, idx) in addOnStore.addOns.choice" :key="idx">
                <p class="text-grey">{{ pick.title }}</p>
                <p>+${{ pick.price }}/{{ period }}</p>
            </div>
            <div class="flex justify-between mt-10">
                <p v-if="planStore.plan.isYearly" class="text-grey">
                    Total (per year)
                </p>
                <p class="text-grey" v-else>
                    Total (per month)
                </p>
                <p class="text-secondary font-bold text-lg">
                    ${{ sumOfPlan }}/{{ period }}
                </p>
            </div>
        </div>
        <MainFooter class="" @go-back="router.push('/add-ons')" :isFirstStep="false">
            Confirm
        </MainFooter>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { usePlanStore } from '@/stores/planStore';
import { useAddOnsStore } from '@/stores/addOnStore';
import { RouterLink, useRouter } from 'vue-router';
import MainFooter from '@/components/Main/MainFooter.vue';

const router = useRouter()

const planStore = usePlanStore()
const addOnStore = useAddOnsStore()

const period = computed(() => planStore.plan.isYearly ? 'yr' : 'mo')
const sumOfPlan = computed(() => planStore.plan.choice[planStore.picked as number].price + addOnStore.addOns.choice.reduce((acc, curr) => acc + curr.price, 0))
</script>