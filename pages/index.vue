<template>
    <div>
        <div id="main">
            <div class="container">
                <section class="banner">
                    <div class="bgImg">
                        <div :class="`bgImg__${index + 1}`" v-for="(item, index) in 5" :key="'bgImg' + index" data-anime>
                            <div :class="`bgImg__${index + 1}-anime bgImgAnime`">
                                <div :class="`bgImg__${index + 1}-anime-obj`"></div>
                            </div>
                        </div>
                    </div>
                    <div class="cIcon">
                        <div :class="`cIcon__${index + 1}`" v-for="(item, index) in 4" :key="'cIcon' + index" data-anime>
                            <div :class="`cIcon__${index + 1}-anime cIconAnime`">
                                <div :class="`cIcon__${index + 1}-anime-obj`"></div>
                            </div>
                        </div>
                    </div>
                    <div class="camera">
                        <div :class="`camera__${index + 1}`" v-for="(item, index) in 5" :key="'camera' + index" data-anime>
                            <div :class="`camera__${index + 1}-anime cameraAnime`">
                                <div :class="`camera__${index + 1}-anime-obj`"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bannerTitle">
                        <div class="bannerTitle-anime">
                            <div class="bannerTitle-anime-obj"></div>
                        </div>
                    </div>
                    <div class="height"></div>
                </section>
                <section class="info">
                    <div class="infoTitle">
                        <span>We Get The Picture – # 速度 、# 透明、 # 品質 、# 團隊合作</span>
                    </div>
                    <div class="infoDes">
                        <span>
                            我們深信企業文化是 VIVOTEK 的成功秘訣，也是營運向上成長的驅動力！<br />
                            今年，我們的品牌活動以速度、透明、品質和團隊合作這四大核心文化為主軸，<br />
                            傳遞獨特文化魅力，讓全球同仁透過活動「 Get the Picture 」！
                        </span>
                    </div>
                    <div class="active"></div>
                    <div class="point">
                        <div class="title">
                            <span>年度積分</span>
                        </div>
                        <div class="data">
                            <div class="des">
                                <span class="lable">姓名：</span><span>Vivotek</span>&nbsp;&nbsp;
                                <span class="lable">團隊：</span><span>數據小組</span>&nbsp;&nbsp;
                                <span class="lable">工作據點：</span><span>Taiwan</span>
                            </div>
                            <div class="detail"></div>
                        </div>
                    </div>
                    <div class="ranking"></div>
                    <div class="height"></div>
                </section>
            </div>
        </div>
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
@import url(../assets/css/index.scss);
</style>
