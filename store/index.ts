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
        login: false,
    }),
    actions: {
      loginChange(lan:any) {
        this.login = !this.login
      },
    },
  })