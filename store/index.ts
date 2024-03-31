import { defineStore } from 'pinia'
import LoginRequestModel from '~/models/api/account/LoginRequestModel'
// import useAccountStore from '~/store/account'

// const state = () => ({
//     lan: '',
// }),
// const actions: {
//     increment():any {
//       this.count += 1
//     },
//     decrement() {
//       this.count -= 1
//     }
// },
// export default defineStore('globalStore', {
// state,actions
// })

export default defineStore('globalStore', {
    state: () => ({
        lan: '',
        newsUrl: '/news'
    }),
    actions: {
      lanChange(lan:any) {
        this.lan = lan
        this.newsUrl =  lan+'/news'
      },
    },
  })