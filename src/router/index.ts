import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/your-info",
      name: "Personal info",
      component: () => import("@/views/YourInfoView.vue")
    },
    {
      path: "/select-plan",
      name: "Select your plan",
      component: () => import("@/views/SelectPlanView.vue")
    },
    {
      path: "/add-ons",
      name: "Pick add-ons",
      component: () => import("@/views/AddOnsView.vue")
    },
    {
      path: "/summary",
      name: "Finishing up",
      component: () => import("@/views/SummaryView.vue")
    }
  ]
})

export default router
