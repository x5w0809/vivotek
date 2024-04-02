<template>
    <div id="headerBar" v-if="currentRoute != '/'+locale+'/login'" >
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
                    <nuxt-link class="headerBtn" :to="'/' + locale + '/profile'">{{ $t('profilePage') }}</nuxt-link> 
                </div>
                <div class="headerBtnBox">
                    <div ><span class="headerBtn">{{ $t('logout') }}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import useGlobalStore from "../store/index";
const { locale, setLocale } = useI18n();
console.log(locale.value)
const storeData = useGlobalStore();
const route = useRoute();
let { lan } = storeToRefs(storeData);
let localPath = ref();
localPath = locale._value;
let currentRoute = ref();
currentRoute = route.path

console.log('localPath', localPath)
// isLogin.value = false;
// const checkLogin = () => {
//     if (!isLogin.value) {
//         router.push({ path: `${locale.value}/login` });
//     }
// };


</script>
<style lang="scss" scoped>
.py-2{
    padding-top: 0 !important;
}
#headerBar {
    width: 100%;
    background-color: #465AFF;
    height: 64px;
    display: flex;
    justify-content: center;
    .wrap{
        padding:0 14px;
        width: 100%;
        max-width: 1140px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo{
            width: 126px;
            img{
                width: 100%;
                display: block;
            }
        }
        .navBar{
            display: flex;
            .headerBtnBox{
                position: relative;
                //padding: 0 24px;
                .headerBtn{
                    //position: relative;
                    text-align: center;
                    padding: 2px 24px;
                    margin-right:-1px;
                    color: #fff;
                    border-radius: 8px;
                    font-size: 20px;
                    line-height: 1;
                    &:hover{
                        color: #465AFF;
                        background: #fff;
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
    }
}
</style>
