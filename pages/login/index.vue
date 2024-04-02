<template>
    <div id="loginPage">
        <div class="wrap">
            <div class="loginCard">
                <div class="imgPart">
                    <div class="image">
                        <div class="image-anime">
                            <div class="image-anime-obj"></div>
                        </div>
                    </div>
                </div>
                <div class="formPart">
                    <div class="locale">
                        <span class="localeName" :class="{currentLocale:locale=='zh'}" @click="setLocale('zh')"
                            >中文</span
                        >
                        <div class="hr"></div>
                        <span class="localeName" :class="{currentLocale:locale=='en'}" @click="setLocale('en')"
                            >EN</span
                        >
                    </div>
                    <div class="logoBox">
                        <div class="logo">
                            <img src="/login/Logo.png" alt="vivotek">
                        </div>
                    </div>
                    <div class="des">
                        {{ $t('loginDes') }}
                    </div>
                    <div class="emailInput">
                        <div class="lable">{{ $t('loginEmail') }}</div>
                        <input class="input" type="email" v-model="emailData">
                    </div>
                    <div class="employeeId">
                        <div class="lable">{{ $t('loginId') }}</div>
                        <input class="input" type="text" v-model="idData">
                    </div>
                    <div class="loginPart">
                        <div class="loginBtn"  @click="login">
                            <span>{{ $t('loginBtn') }}</span>
                        </div>
                    </div>
                </div>
                <v-progress-circular
                    style="position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%);"
                    color="blue-lighten-3"
                    indeterminate
                    :size="80"
                    :width="10"
                    v-if="isLoading"
                ></v-progress-circular>
            </div>
            
        </div>
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
