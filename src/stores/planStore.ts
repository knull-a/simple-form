import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const usePlanStore = defineStore('plan', () => {
  const plan = ref({
    choice: [
      {
        title: 'Arcade',
        price: 9
      },
      {
        title: 'Advanced',
        price: 12
      },
      {
        title: 'Pro',
        price: 15
      }
    ],
    isYearly: false
  })

  const picked = ref<number>()

  if (localStorage.getItem('picked')) {
    picked.value = JSON.parse(localStorage.getItem('picked') as string)
  }

  watch(
    picked,
    (val) => {
      localStorage.setItem('picked', JSON.stringify(val))
    },
    { deep: true }
  )

  if (localStorage.getItem('plan')) {
    plan.value = JSON.parse(localStorage.getItem('plan') as string)
  }

  watch(
    plan,
    (val) => {
      localStorage.setItem('plan', JSON.stringify(val))
    },
    { deep: true }
  )

  return { plan, picked }
})
