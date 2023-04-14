import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/your-info",
      name: "Your Info",
      component: () => import("@/views/YourInfoView.vue")
    },
    {
      path: "/select-plan",
      name: "Select Plan",
      component: () => import("@/views/SelectPlanView.vue")
    },
    {
      path: "/add-ons",
      name: "Add Ons",
      component: () => import("@/views/AddOnsView.vue")
    },
    {
      path: "/summary",
      name: "Summary",
      component: () => import("@/views/SummaryView.vue")
    }
  ]
})

export default router
