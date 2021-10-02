import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index';

const routes = [{
    path: '/',
    component: Index,
    meta: { title: 'Древесный Уголь', description: 'Товары для пикника и загородного отдыха. Купить Древесный Уголь оптом и в розницу, отсев древесного угля'}
  },{
    path: '/cityes',
    component: () => import ('../views/Cuidades'),
    meta: { title: 'Древесный Уголь города', description: 'Купить Древесный Уголь города'}
  },{
     path: '/detail/:ugol',
     component: () => import ('../views/UgolDetail'),
     meta: { title: 'Купить Древесный Уголь', description: 'Купить Древесный'}
  },{
    path: '/buy/:city',
    component: () => import ('../views/WorkPage'),
  },{
    path: '/user-agreement',
    component: () => import ('../views/UserAgreement'),
    meta: { title: 'Пользовательское соглашение', description: 'Пользовательское соглашение, контакты и реквизиты'}
  },{
    path: '/news/:id',
    component: () => import ('../views/CurrentNews'),
  },{ 
    path: '/404',
    component: () => import ('../views/404'),  
    meta: { title: '404', description: '404 page'}
  },{
    path: '/:catchAll(.*)', redirect: '/404' 
  }
];

const router = createRouter({history: createWebHistory(process.env.BASE_URL), routes});

router.beforeEach((to) => {
  if(to.meta.title) { 
     document.title = to.meta.title;
     document.getElementsByTagName('meta').namedItem('description').setAttribute('content', to.meta.description)
  } 
  if (to.params.city){
     let pageTitle = to.params.city.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ');
     document.title = 'Купить Древесный Уголь ' + pageTitle;
     document.getElementsByTagName('meta').namedItem('description').setAttribute('content', 'Купить Древесный Уголь ' + pageTitle)
  }
});

export default router;
