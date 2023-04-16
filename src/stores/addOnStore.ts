import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useAddOnsStore = defineStore('addOns', () => {
  const addOns = ref({
    choice: [
      {
        title: 'Online service',
        subtitle: 'Access to multiplayer games',
        price: 1,
        isChecked: false
      },
      {
        title: 'Larger storage',
        subtitle: 'Extra 1TB of cloud save',
        price: 2,
        isChecked: false
      },
      {
        title: 'Customizable profile',
        subtitle: 'Custom theme on your profile',
        price: 2,
        isChecked: false
      }
    ],
    list: <string[]>[]
  })

  if (localStorage.getItem('addOns')) {
    addOns.value = JSON.parse(localStorage.getItem('addOns') as string)
  }

  watch(
    addOns,
    (val) => {
      localStorage.setItem('addOns', JSON.stringify(val))
    },
    { deep: true }
  )

  return { addOns }
})
