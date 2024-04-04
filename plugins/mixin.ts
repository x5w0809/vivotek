import { storeToRefs } from "pinia";
import useGlobalStore from "../store/index";
import LoginRequestModel from "@/models/api/account/LoginRequestModel";
import { loginToken,getPersonalInfo } from "~/api/auth";

export default defineNuxtPlugin(nuxtApp => {
    //檢查登入狀態
    nuxtApp.provide('checkLogin', async () => {
        try {
            const queryToken = await useCookie('access_token')
            if(queryToken.value){
                const headers = {
                    'Authorization':`Bearer ${queryToken.value}`
                }
                const userData: any = await getPersonalInfo({}, {headers})
                if(userData.data._value.success){
                    return userData.data._value.user
                } else {
                    alert('個人資料取得錯誤')
                    navigateTo('/login')
                }
            } else {
                navigateTo('/login')
            }
        } catch (error) {
            navigateTo('/login')
            console.log(error);
        }
    })
})



