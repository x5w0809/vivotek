<template>
    <div id="profilePage">
        <!-- <div class="wrap">
            
                <v-progress-circular
                    style="position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%);"
                    color="blue-lighten-3"
                    indeterminate
                    :size="80"
                    :width="10"
                    v-if="isLoading"
                ></v-progress-circular>            
        </div> -->
    </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import useGlobalStore from "../store/index";
import LoginRequestModel from '@/models/api/account/LoginRequestModel'
import { loginToken } from "~/api/auth";
const { locale, setLocale } = useI18n();
const router = useRouter();
const emailData = ref();
const idData = ref();
const isLoading = ref();
isLoading.value = false
const login = async () => {
  try {
    isLoading.value = true
    const loginInfo = new LoginRequestModel()
    loginInfo.email = emailData.value;
    loginInfo.employee_id = idData.value;
    const res = await loginToken(JSON.stringify(loginInfo));
    if(res.data._value.success) {
        const access_token = useCookie('access_token',{maxAge:3600})
        access_token.value = res.data._value.access_token
        isLoading.value = false
        location.href = `/${locale.value}`
        // router.push({ path: `${locale.value}`});
    }else {
        alert('登入失敗')
        isLoading.value = false
    }
  } catch (error) {
    isLoading.value = false
    alert('登入失敗')
    console.log(error);
  }
};
</script>
<style lang="scss" scoped>
@import url(./index.scss);
</style>
