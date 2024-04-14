import { storeToRefs } from "pinia";
import useGlobalStore from "../store/index";
import LoginRequestModel from "@/models/api/account/LoginRequestModel";
import { loginToken,getPersonalInfo, putPersonalInfo, getPoint, getActiveData } from "~/api/auth";

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
                const pointData: any = await getPoint({},{headers})
                if(userData.data._value.success && pointData.data._value.success){
                    return [userData.data._value.user, pointData.data._value]
                } else {
                    alert('個人資料取得錯誤')
                }
            }
        } catch (error) {
            console.log(error);
        }
    })
    //更新個資
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
    //獲取活動公布事項
    nuxtApp.provide('getActive', async () => {
        try {
            const queryToken = await useCookie('access_token')
            if(queryToken.value){
                const headers = {
                    'Authorization':`Bearer ${queryToken.value}`
                }
                const activeData: any = await getActiveData({}, {headers})
                if(activeData.data._value.success){
                    return activeData.data._value.collection
                }
            }
        } catch (error) {
            console.log(error);
        }
    })
})



