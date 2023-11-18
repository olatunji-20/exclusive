import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProductPage from '../views/ProductPage.vue'
import CartPage from '../views/CartPage.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Checkout from '../views/Checkout.vue'
import WishList from '../views/WishList.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import NotFound from '../views/NotFound.vue'
import AllProducts from '../views/AllProducts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/product-page/:id',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '/cart-page',
      name: 'CartPage',
      component: CartPage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/wishlist',
      name: 'WishList',
      component: WishList
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/:notFound',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/all-products',
      name: 'AllProducts',
      component: AllProducts
    }
  ],
  scrollBehavior(stand, homepage, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return {
      left: 50, top: 0
    }
  }
})

export default router
