import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import alogin from '@/components/alogin'
import ahome from '@/components/ahome'
import amids from '@/components/amids'
import ausers from '@/components/ausers'
import apids from '@/components/apids'

import mlogin from '@/components/mlogin'
import mhome from '@/components/mhome'
import mpids from '@/components/mpids'
import mvids from '@/components/mvids'

import ulogin from '@/components/ulogin'
import uhome from '@/components/uhome'

import vlogin from '@/components/vlogin'
import vhome from '@/components/vhome'
import vpids from '@/components/vpids'
import vuids from '@/components/vuids'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/alogin',
      name: 'alogin',
      component: alogin
    },
    {
      path: '/mlogin',
      name: 'mlogin',
      component: mlogin
    },
    {
      path: '/ahome',
      name: 'ahome',
      component: ahome,
      children: [
        {
          path: 'apids',
          name: 'apids',
          component: apids
        },
        {
          path: 'amids',
          name: 'amids',
          component: amids
        },
        {
          path: 'ausers',
          name: 'ausers',
          component: ausers
        }
      ]
    },
    {
      path: '/mhome',
      name: 'mhome',
      component: mhome,
      children: [
        {
          path: 'mpids',
          name: 'mpids',
          component: mpids
        },
        {
          path: 'mvids',
          name: 'mvids',
          component: mvids
        }
      ]
    },
    {
      path: '/vlogin',
      name: 'vlogin',
      component: vlogin
    },
    {
      path: '/vhome',
      name: 'vhome',
      component: vhome,
      children: [
        {
          path: 'vpids',
          name: 'vpids',
          component: vpids
        },
        {
          path: 'vuids',
          name: 'vuids',
          component: vuids
        }
      ]
    },
    {
      path: '/ulogin',
      name: 'ulogin',
      component: ulogin
    },
    {
      path: '/uhome',
      name: 'uhome',
      component: uhome
    },
  ]
})
