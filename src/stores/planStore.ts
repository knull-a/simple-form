import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const usePlanStore = defineStore('plan', () => {
  const plan = ref([
    {
      title: 'Arcade',
      price: 9,
    },
    {
      title: 'Advanced',
      price: 12
    },
    {
      title: 'Pro',
      price: 15
    }
  ])

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

  return { plan }
})
