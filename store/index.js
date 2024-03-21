import { defineStore } from 'pinia'

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
      lanChange(lan) {
        this.lan = lan
        this.newsUrl =  lan+'/news'
      },
    },
  })