<template>
    <div>
        <div id="main">首頁</div>
    </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
const router = useRouter();
//import  useGlobalStore  from '../store/index';
const { locale, setLocale } = useI18n();
// const storeData = useGlobalStore()
// storeData.lan = ''
//const  news  = await useAsyncData(() => $fetch('https://www.travel.taipei/open-api/en/Events/News?begin=1992-05-05&end=2023-08-05&page=1',{method: 'GET',headers: headers,}))
//檢查是否登入成功
const { $checkLogin } = useNuxtApp()
const checkLogin = await $checkLogin()
//檢查是否登入成功-end
</script>
<style lang="scss">
body {
    padding: 0;
    margin: 0;
}
h2 {
    font-size: 30px;
    text-align: center;
}
.checkToZh {
    display: flex;
    justify-content: center;
    text-decoration: none;
    span {
        color: #000000;
        cursor: pointer;
        padding: 5px 20px;
        font-size: 20px;
        border: 1px solid #000000;
        border-radius: 20px;
        font-weight: bold;
        transition: 0.2s ease;
        &:hover {
            background-color: #000000;
            color: #0873ae;
        }
    }
}
.newsList {
    width: 90%;
    margin: 0 auto;
    a {
        text-decoration: none;
        .newsCard {
            font-size: 14px;
            line-height: 1.6;
            color: #000000;
            transition: 0.2s ease;
            &:hover {
                color: #0873ae;
            }
        }
    }
}
</style>
