<template>
    <div>
        <div id="main">
            <div class="container">
                <section class="banner">
                    <div class="bgImg" ref="banner">
                        <div :class="`bgImg__${index + 1}`" v-for="(item, index) in 5" :key="'bgImg' + index" data-anime>
                            <div :ref="`bgImg__${index + 1}_anime`" :class="`bgImg__${index + 1}-anime bgImgAnime`">
                                <div :class="`bgImg__${index + 1}-anime-obj`"></div>
                            </div>
                        </div>
                        <!-- <div class="bgImg__1" >
                            <div ref="bgImg__1_anime" class="bgImg__1-anime bgImgAnime">
                                <div class="bgImg__1-anime-obj"></div>
                            </div>
                        </div>
                        <div class="bgImg__2" >
                            <div ref="bgImg__2_anime" class="bgImg__2-anime bgImgAnime">
                                <div class="bgImg__2-anime-obj"></div>
                            </div>
                        </div>
                        <div class="bgImg__3" >
                            <div ref="bgImg__3_anime" class="bgImg__3-anime bgImgAnime">
                                <div class="bgImg__3-anime-obj"></div>
                            </div>
                        </div>
                        <div class="bgImg__4" >
                            <div ref="bgImg__4_anime" class="bgImg__4-anime bgImgAnime">
                                <div class="bgImg__4-anime-obj"></div>
                            </div>
                        </div>
                        <div class="bgImg__5" >
                            <div ref="bgImg__5_anime" class="bgImg__5-anime bgImgAnime">
                                <div class="bgImg__5-anime-obj"></div>
                            </div>
                        </div> -->
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
                    <div class="infoBg">
                        <div class="infoBg-anime">
                            <img src="/main/infoBg.png" alt="">
                        </div>
                    </div>
                    <div class="wrap">
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
                        <div class="activeNews">
                            <div class="title">
                                <span>活動快訊</span>
                            </div>
                            <div class="data">
                                <div :class="`data__${index + 1} dataContent`" v-for="(item, index) in activeNews" :key="'data' + index" data-anime>
                                    <a :href="item.url">
                                        <div class="boxContent">
                                            <div class="box1">
                                                <span :class="`date__${index + 1}-anime dateAnime`">{{ item.date }}</span>
                                                <span :class="`des__${index + 1}-anime desAnime`">{{ item.name }}</span>
                                            </div>
                                            <div class="box2">
                                                <span class="desIcon"></span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
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
                                <div class="detail">
                                    <div class="rank1 rankcontent">
                                        <div class="rankNum">81</div>
                                        <div class="rankTitle">全球特搜王</div>
                                    </div>
                                    <!-- 暫不開啟 -->
                                    <!-- <div class="rank2 rankcontent">
                                        <div class="rankNum">90</div>
                                        <div class="rankTitle">全球競走賽</div>
                                    </div> -->
                                    <!-- 暫不開啟-end -->
                                    <div class="rank3 rankcontent">
                                        <div class="rankNum">5</div>
                                        <div class="rankTitle">總排名</div>
                                    </div>
                                    <div class="rank4 rankcontent">
                                        <div class="rankNum">90</div>
                                        <div class="rankTitle">年度總積分</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 暫不開啟 -->
                        <!-- <div class="ranking">
                            <div class="title">
                                <span>全球積分榜</span>
                            </div>
                            <div class="data">
                                <div class="label">
                                    <div class="labelItem rank ">排名</div>
                                    <div class="labelItem name">姓名</div>
                                    <div class="labelItem local">工作據點</div>
                                    <div class="labelItem scroe">年度積分</div>
                                    <div class="labelItem change">排名變化</div>
                                </div>
                                <div class="des">
                                    <div :class="`des__${index + 1} desContent`" v-for="(item, index) in rankingData" :key="'des' + index" data-anime>
                                        <span :class="`desItem rank__${index + 1}-anime rankAnime`">{{ item.rank }}</span>
                                        <span :class="`desItem name__${index + 1}-anime nameAnime`">{{ item.name }}</span>
                                        <span :class="`desItem local__${index + 1}-anime localAnime`">{{ item.local }}</span>
                                        <span :class="`desItem score__${index + 1}-anime scoreAnime`">{{ item.score }}</span>
                                        <span :class="`desItem change__${index + 1}-anime changeAnime`">{{ item.change }}</span>
                                    </div>
                                </div>
                                <div class="notice">
                                    <span>*只有前五名有精美禮品，趕緊加快腳步衝榜吧！</span>
                                </div>
                            </div>
                        </div> -->
                        <!-- 暫不開啟-end -->
                    </div>
                </section>
                <section class="review">
                    <div class="wrap">
                        <div class="reviewTitle">
                            <span>2023 活動亮點</span>
                        </div>
                        <div class="reviewDes">
                            <span>
                                我們深信企業文化是 VIVOTEK 的成功秘訣，也是營運向上成長的驅動力！<br />
                                今年，我們的品牌活動以速度、透明、品質和團隊合作這四大核心文化為主軸，<br />
                                傳遞獨特文化魅力，讓全球同仁透過活動「 Get the Picture 」！
                            </span>
                        </div>
                        <div class="reviewDataContent">
                            <div class="title">
                                <span>數據回顧</span>
                            </div>
                            <div class="data">
                                <div class="detail">
                                    <div class="reviewData reviewData1">
                                        <div class="dataTitle">總參與人數</div>
                                        <div class="dataNum">3000</div>
                                    </div>
                                    <div class="reviewData reviewData2">
                                        <div class="dataTitle">總積分</div>
                                        <div class="dataNum">10000</div>
                                    </div>
                                    <div class="reviewData reviewData3">
                                        <div class="dataTitle">節省能源</div>
                                        <div class="dataNum">9999<span>C2O</span></div>
                                    </div>
                                    <div class="reviewData reviewData4">
                                        <div class="dataTitle">平均參與時間</div>
                                        <div class="dataNum">9999<span>min</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="picture">
                            <div class="title">
                                <span>活動花絮</span>
                            </div>
                        </div>
                    </div>
                
                    <Swiper v-bind="swiperConfig"  >
                        <SwiperSlide><img src="/main/Rectangle1.png" alt=""></SwiperSlide>
                        <SwiperSlide><img src="/main/Rectangle1.png" alt=""></SwiperSlide>
                        <SwiperSlide><img src="/main/Rectangle1.png" alt=""></SwiperSlide>
                        <SwiperSlide><img src="/main/Rectangle1.png" alt=""></SwiperSlide>
                        <SwiperSlide><img src="/main/Rectangle1.png" alt=""></SwiperSlide>
                        <SwiperSlide><img src="/main/Rectangle1.png" alt=""></SwiperSlide>
                        <SwiperSlide><img src="/main/Rectangle1.png" alt=""></SwiperSlide>
                    </Swiper>
                </section>
                <section class="active">
                    <div class="wrap">
                        <div class="activeTitle">
                            <span>2024 精彩活動</span>
                        </div>
                        <div class="activeContent">
                            <div :class="`active__${index + 1} activeBox`" v-for="(item, index) in activeData" :key="'activeCard' + index" >
                                <div :class="`activeCard__${index + 1} activeCard`" v-if="localCode === 'TW' || item.title != '晶睿地球日'"  data-anime>
                                    <a :href="item.url">
                                        <div :class="`activeCard__${index + 1}-anime`">
                                            <div :class="`activeCard__${index + 1}-anime-img activeCardImg`">
                                                <img :src="item.img" alt="">
                                            </div>
                                        </div>
                                        <div :class="`activeCard__${index + 1}-anime-info activeCardInfo`">
                                            <div class="title"><span class="name">{{ item.title }}</span><span class="date">{{ item.date }}</span></div>
                                            <div class="des"><p>{{ item.des }}</p></div>
                                            <div class="btn"><span>查看更多</span></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
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
const localCode = ref()
const { $checkLogin, $anime } = useNuxtApp()
const checkLogin = await $checkLogin()
localCode.value = checkLogin.legal_entity_code
//檢查是否登入成功-end
const swiperConfig = {
    modules: [ SwiperAutoplay,SwiperNavigation, SwiperEffectCreative ],
    loop: true,
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    slidesPerView: 3,
    spaceBetween: 16,
    breakpoints:{
        768: {
            slidesPerView: 5,
            // slidesPerGroup: 3,
        },
    }
};
const activeNews = reactive([
    {
        date: "2024/03/31",
        name: "新活動上線！立即參與特搜王活動上傳圖片，獲取高額獎勵！",
        url: "/profile"
    },
    {
        date: "2024/04/31",
        name: "新活動上線！立即參與特搜王活動上傳圖片，獲取高額獎勵！",
        url: "/profile"
    },
    {
        date: "2024/05/31",
        name: "新活動上線！立即參與特搜王活動上傳圖片，獲取高額獎勵！",
        url: "/profile"
    },
])
const rankingData = reactive([
    {
        rank: "1",
        name: "王詩晴",
        local: "Taiwan",
        score: "80",
        change: "0"
    },
    {
        rank: "2",
        name: "王詩晴",
        local: "Taiwan",
        score: "80",
        change: "0"
    },
    {
        rank: "3",
        name: "王詩晴",
        local: "Taiwan",
        score: "80",
        change: "0"
    },
    {
        rank: "3",
        name: "王詩晴",
        local: "Taiwan",
        score: "80",
        change: "0"
    },
    {
        rank: "3",
        name: "王詩晴",
        local: "Taiwan",
        score: "80",
        change: "0"
    },
    {
        rank: "3",
        name: "王詩晴",
        local: "Taiwan",
        score: "80",
        change: "0"
    },
    {
        rank: "3",
        name: "王詩晴",
        local: "Taiwan",
        score: "80",
        change: "0"
    },
    {
        rank: "3",
        name: "王詩晴",
        local: "Taiwan",
        score: "80",
        change: "0"
    },
    {
        rank: "3",
        name: "王詩晴",
        local: "Taiwan",
        score: "80",
        change: "0"
    },
    {
        rank: "3",
        name: "王詩晴",
        local: "Taiwan",
        score: "80",
        change: "0"
    },
    {
        rank: "3",
        name: "王詩晴",
        local: "Taiwan",
        score: "80",
        change: "0"
    },
])
const activeData = reactive([
    {
        img:'/main/active1.png',
        url:'/profile',
        title: '全球特搜王',
        date: '3 - 7月',
        des: '在這個活動中，員工們可以在更多不同的地方看見 VIVOTEK ，如同阿凡達電影中主角從「看見」而「感受到」VIVOTEK 對品質的追求，強化品牌認同感。',
    },
    {
        img:'/main/active2.png',
        url:'/earthDay',
        title: '晶睿地球日',
        date: '3 - 7月',
        des: '我們必須全方位了解身處的環境，並採取具體行動。\n透明一直是 VIVOTEK 企業文化的核心，透過綠色市集和永續講堂，能為員工們提供更多對地球永續發展的見解，唯有積極了解，才有機會啟發創新思維，並產生精準作為，邁向一個更永續的明天。',
    }
])
let tl
onMounted(() => {
    tl = $anime.timeline({})
    tl.add({
        targets: '.bgImg__1-anime',
        translateY: [100,0],
        opacity: [0,1],
        duration:800,
        easing:'easeOutCubic'
    })
    tl.add({
        targets: '.bgImg__2-anime',
        translateY: [100,0],
        opacity: [0,1],
        duration:500,
        easing:'easeOutCubic'
    },'-=300')
    tl.add({
        targets: '.bgImg__5-anime',
        translateY: [100,0],
        opacity: [0,1],
        duration:500,
        easing:'easeOutCubic'
    },'-=300')
    tl.add({
        targets: '.bannerTitle-anime',
        translateY: [100,0],
        opacity: [0,1],
        duration:500,
        easing:'easeOutCubic'
    },'-=300')
    tl.add({
        targets: '.bgImg__3-anime',
        translateY: [100,0],
        opacity: [0,1],
        duration:500,
        easing:'easeOutCubic'
    },'-=400')
    tl.add({
        targets: '.bgImg__4-anime',
        translateY: [100,0],
        opacity: [0,1],
        duration:500,
        easing:'easeOutCubic'
    },'-=400')
})


</script>
<style lang="scss">
@import url(../assets/css/index.scss);
</style>
