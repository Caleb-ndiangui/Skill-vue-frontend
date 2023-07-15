import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SkillIndex from '../views/skills/SkillIndex.vue'
import SkillEdit from '../views/skills/SkillEdit.vue'
import SkillCreate from '../views/skills/SkillCreate.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/skills',
      name: 'SkillIndex',
      component: SkillIndex
    },
    {
      path: '/skills/edit/:id',
      name: 'skilledit',
      component: SkillEdit,
      props:true
    },
    {
      path: '/skills/create',
      name: 'skillcreate',
      component: SkillCreate
    }
  ]
})

export default router
