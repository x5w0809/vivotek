import { storeToRefs } from "pinia";
import useGlobalStore from "../store/index";
import LoginRequestModel from "@/models/api/account/LoginRequestModel";
import { loginToken,getPersonalInfo, putPersonalInfo } from "~/api/auth";

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
                }
            }
        } catch (error) {
            console.log(error);
        }
    })
    //檢查登入狀態
    nuxtApp.provide('putPersonalInfo', async (userData: { name: any; name_en: any; phone: any; office_tel: any; data: { _value: { success: any; user: any; }; }; }) => {
        try {
            const queryToken = await useCookie('access_token')
            if(queryToken.value){
                const headers = {
                    'Authorization':`Bearer ${queryToken.value}`
                }
                const putInfo:any = await putPersonalInfo({
                    name: userData.name,
                    name_en: userData.name_en,
                    phone: userData.phone,
                    office_tel: userData.office_tel
                },
                {headers}
                )
                if(putInfo.data._value.success){
                    alert(putInfo.data._value.msg)
                } else {
                    if(putInfo.data._value.msg){
                        alert(putInfo.data._value.msg)
                    } else {
                        alert('資料更新失敗！')
                    }
                    
                }
            }
        } catch (error) {
            console.log(error);
        }
    })
    
})



