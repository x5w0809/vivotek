<template>
    <div id="headerBar" v-if="!storeData.login" >
        <div class="wrap">
            <div class="logo">
                <img src="/headerLogo.svg" alt="vivotek">
            </div>
            <div class="navBar">
                <div class="headerBtnBox">
                    <nuxt-link class="headerBtn" :to="'/' + locale">{{ $t('homePage') }}</nuxt-link>
                </div>
                <div class="headerBtnBox">
                    <div>
                        <span class="headerBtn" v-if="locale === 'en'" @click="setLocale('zh')"
                            >中文</span
                        >
                        <span class="headerBtn" v-if="locale === 'zh'" @click="setLocale('en')"
                            >English</span
                        >
                    </div>
                </div>
                <div class="headerBtnBox">
                    <nuxt-link class="headerBtn" :to="localePath({ name: 'profile' })">{{ $t('profilePage') }}</nuxt-link> 
                </div>
                <div class="headerBtnBox">
                    <div ><span class="headerBtn" @click="logout">{{ $t('logout') }}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import useGlobalStore from "../store/index";
const { locale, setLocale } = useI18n();
const storeData = useGlobalStore();
const route = useRoute();
let { lan } = storeToRefs(storeData);
let localPath = ref();
localPath = locale._value;
let currentRoute = ref();
currentRoute = route.path
const localePath = useLocalePath()

console.log('storeData.login', storeData.login)
const isLogin = ref(false)
if(localePath({ name: 'login' }) == route.path){
    isLogin.value = true
}else {
    isLogin.value=false
}

const logout =  (async()=>{
    const queryToken = await useCookie('access_token')
    queryToken.value = null
    storeData.login = true
    await navigateTo(localePath({ name: 'login' }))
})

</script>
<style lang="scss" scoped>
#headerBar {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background-color: #465AFF;
    height: 64px;
    display: flex;
    justify-content: center;
    @include mob-width {
        height: vw(64,768);
    }
    .wrap{
        padding:0 14px;
        width: 100%;
        max-width: 1140px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include mob-width {
            max-width:unset;
            padding:0 vw(40,768);
        }
        .logo{
            width: 126px;
            @include mob-width {
                width:vw(126,768);
            }
            img{
                width: 100%;
                display: block;
            }
        }
        .navBar{
            display: flex;
            .headerBtnBox{
                position: relative;
                .headerBtn{
                    text-align: center;
                    display: flex;
                    align-items: center;
                    padding: 4px 24px;
                    margin-right:-1px;
                    color: #fff;
                    border-radius: 8px;
                    font-size: 20px;
                    line-height: 1;
                    &:hover{
                        color: #465AFF;
                        background: #fff;
                    }
                    @include mob-width {
                        font-size: vw(20,768);
                        padding: vw(4,768) vw(24,768);
                        border-radius: vw(8,768);
                    }
                }
                &::before{
                    content: '';
                    position: absolute;
                    top: 15%;
                    left: 0;
                    width: 1px;
                    height: 70%;
                    background: #fff;
                    
                }
            }
            .headerBtnBox:last-child{
                    &::after{
                        content: '';
                        position: absolute;
                        top: 15%;
                        right: 0;
                        width: 1px;
                        height: 70%;
                        background: #fff;
                        
                    }
                }
            
        }
    }
    a {
        text-decoration: none;
    }
    .headerBtn {
        padding-left: 30px;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        transition: 0.2s linear;
        cursor: pointer;
        &:hover {
            color: #0873ae;
        }
        @include mob-width {
            padding-left: vw(24,768);
            font-size:vw(20,768);
        }
    }
}
</style>
