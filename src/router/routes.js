import Search from '@/views/Search'
import Home from '@/views/Home/Home'
import User from '@/views/User/User'
const routes = [
    {
      path: '/search',
      component: Search,
      name: 'Search'
    },
    {
      path: '/home',
      component: Home,
      name: 'Home',
    },
    {
      path: '/users/:id',
      component: User,
      children: [
        {
          path: 'profile',
          component: () => import('@/views/User/Profile.vue')
        }
      ]
    },
    {
      path: '/register',
      component: () => import('@/views/Register'),
      name: 'Register'
    },
    {
      path: '*',
      redirect: {
        name: 'Home'
      }
    }
   
  ];

export default routes