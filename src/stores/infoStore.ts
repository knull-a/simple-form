import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useInfoStore = defineStore('info', () => {
  const userInfo = ref({
    email: '',
    name: '',
    phone: ''
  })

  if(localStorage.getItem("info")) {
    userInfo.value = JSON.parse(localStorage.getItem("info") as string)
  }

  watch(
    userInfo,
    (val) => {
      localStorage.setItem('info', JSON.stringify(val))
    },
    { deep: true }
  )

  return { userInfo }
})
