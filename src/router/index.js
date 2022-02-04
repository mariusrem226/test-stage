import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import TablePage from "@/pages/TablePage";
import PiecesPage from "@/pages/PiecesPage";
import AddPage from "@/pages/AddPage";
import NewCarPage from "@/pages/NewCarPage";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      name: 'table',
      component: TablePage
    },
    {
      path: '/pieces',
      name: 'pieces',
      component: PiecesPage
    },
    {
      path: '/ajout',
      name: 'ajout',
      component: AddPage
    },
    {
      path: '/newCar',
      name: 'newCar',
      component: NewCarPage,
      props: (route) => ({
        car: {},
        ...route.params
      })
    }

  ]
})
