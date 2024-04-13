<template>
    <div id="earthDayPage">
        <div class="container">
            <section class="banner"><div class="height"></div></section>
            <section class="Transparency">
                <div class="wrap">
                    <div class="title"><span>#Teamwork</span></div>
                    <div class="des">
                        <span>
                            VIVOTEK文化力求「團隊合作」，本次特別邀請好食好事基金會攜手合作舉辦「晶睿地球日」，不僅有引人入勝的永續講堂，邀請重量級來賓 好食好事基金會執行長 陳茂嘉 和 VIVOTEK 全球行銷處處長 謝邦彥，一同分享綠色行動，更有六大永續品牌提供驚喜獨家優惠！
                        </span>
                    </div>
                    <div class="detail">
                        <div class="date detailContent">
                            <div class="label"><span>活動期間</span></div>
                            <div class="cont"><span>2024/4/22 (一)</span></div>
                        </div>
                        <div class="members detailContent">
                            <div class="label"><span>參與人員</span></div>
                            <div class="cont"><span>TW VIVOTEKers</span></div>
                        </div>
                        <div class="idea detailContent">
                            <div class="label"><span>活動理念</span></div>
                            <div class="cont"><span>響應世界地球日，從從能源、以各項執行方式</span><span class="tag">倡議永續</span><span>，展現實現永續的不同方式，強調日常生活即可為地球及地方貢獻一己之力</span></div>
                        </div>
                        <div class="feature detailContent">
                            <div class="label"><span>活動特色</span></div>
                            <div class="cont">
                                <div class="img"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="height"></div>
            </section>
            <section class="haoshi">
                <div class="title">
                    <span>合作基金會介紹</span>
                </div>
                <div class="detail">
                    <div class="wrap">
                        <div class="logo">
                            <img src="/earth/haoshiLogo.png" alt="">
                        </div>
                        <div class="intro">
                            <div class="brandTitle">好食好事基金會</div>
                            <div class="subTitle">台灣食農產業的創新推手</div>
                            <div class="des">
                                財團法人好食好事基金會於2017年成立，旨在推動台灣食品農業創新。<br />
                                面對全球挑戰，以國際化和創新思維為導向，支持食農新創解決問題。透過青年人才培育和食品研發，創造更透明、健康、永續的飲食環境，最終實現「處處有好食」。<br /><br />
                                和 VIVOTEK 同樣奉行「團隊合作」的核心文化，好食好事基金會從董事會到加速器業師陣容，再到創業者社群，都聚集在食農產業耕耘已久的各方名家，從第一線的技術研發，到國際市場趨勢分析，皆能引領尚未穩定的創業團隊走向健康的發展方向。<br/>
                                透過支持食農新創，將「好食」融入生活各個層面。
                            </div>
                        </div>
                    </div>
                </div>
                <div class="height"></div>
            </section>
            <section class="market">
                <div class="title">
                    <span>綠色市集 倡議永續</span>
                </div>
                <div class="info">
                    <div class="wrap">
                        <div class="date infoContent">
                            <div class="label">活動時間</div>
                            <div class="cont">11:00-16:00</div>
                        </div>
                        <div class="local infoContent">
                            <div class="label">活動地點</div>
                            <div class="cont">VIVOTEK 中和辦公室</div>
                        </div>
                        <div class="members infoContent">
                            <div class="label">邀約對象</div>
                            <div class="cont">
                                <div class="des">
                                    <span class="des1">6 家</span>
                                    <!-- <span class="des2">好食好事基金會輔導品牌</span> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="membersList">
                    <div class="wrap">
                        <div class="membersListTitle">
                            <span>邀約對象</span>
                        </div>
                        <div class="brand">
                            <div :class="`brand__${index + 1} brandItem`" v-for="(item, index) in brandData" :key="'brand' + index"  data-anime>
                                <a :href="item.url">
                                    <div :class="`brand__${index + 1}-anime brandAnime`">
                                        <div :class="`brand__${index + 1}-anime-img brandImg`">
                                            <div class="imageBox">
                                                <img :src="item.img" alt="">
                                            </div>
                                        </div>
                                        <div :class="`brand__${index + 1}-anime-info brandInfo`">
                                            <div class="bg"></div>
                                            <div class="brandtitle"><span class="name">{{ item.title }}</span></div>
                                            <div class="des"><p>{{ item.des }}</p></div>
                                            <div class="btn"><span>了解更多</span></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rule">
                    <div class="wrap">
                        <div class="ruleTitle">
                            <span>執行方式</span>
                        </div>
                        <div class="des">
                            <ul>
                                <li>邀約好食好事輔導之品牌，讓員工能夠有較優惠的價格，享用純淨天然的食品</li>
                                <li>活動當日上午發送 eDM，於 eDM 中設立活動網站連結，現場則輸出連結 QR Code，鼓勵員工點入一起支持地球日活動</li>
                                <li>當日販售之商品不提供任何一次性包裝，鼓勵員工自備購物袋、餐盒等</li>
                                <li>當日前 100 名至市集消費的同仁，不限金額，經現場工作人員確認，可獲得 7-11 一百元電子禮券乙張</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="height"></div>
            </section>
            <section class="lecture">
                <div class="title"><span>永續講堂</span></div>
                <div class="info">
                    <div class="wrap">
                        <div class="local infoContent">
                            <div class="label">活動地點</div>
                            <div class="cont">優派大樓 B2會議室</div>
                        </div>
                        <div class="members infoContent">
                            <div class="label">建議人數</div>
                            <div class="cont">
                                <div class="des">
                                    <span class="des1">55人</span>
                                    <!-- <span class="des2">桌椅為教室型擺放</span> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="schedule">
                    <div class="wrap">
                        <div class="ruleTitle">
                            <span>活動地點</span>
                        </div>
                        <div class="des">
                            <div class="desContent des1">
                                <div class="label">13:30-14:00</div>
                                <div class="cont">報到</div>
                            </div>
                            <div class="desContent des2">
                                <div class="label">14:00-14:30</div>
                                <div class="cont"><div class="contBox"><span>好食好事基金會 執行長陳茂嘉</span>從淨零永續看食農創新</div></div>
                            </div>
                            <div class="desContent des3">
                                <div class="label">14:30-15:00</div>
                                <div class="cont">
                                    <div class="contBox"><span>VIVOTEK 發言人暨全球行銷處長 謝邦彥</span>踏上永續之路：走出獨特轉型 塑造品牌新風貌</div>
                                </div>
                            </div>
                            <div class="desContent des4">
                                <div class="label">14:30-15:00</div>
                                <div class="cont">會後交流、散會</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="people">
                    <div :class="`people__${index + 1} people`" v-for="(item, index) in 2" :key="'people' + index" data-anime>
                        <div :class="`people__${index + 1}-anime peopleAnime`">
                            <div :class="`people__${index + 1}-anime-obj `">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="height"></div>
            </section>
        </div>
    </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import useGlobalStore from "../store/index";
const { locale, setLocale } = useI18n();
const router = useRouter();
const isLoading = ref();
isLoading.value = true;
//檢查是否登入成功
const { $checkLogin } = useNuxtApp()
const checkLogin = await $checkLogin()
isLoading.value =  false;
//檢查是否登入成功-end
const userData = reactive({
    id: checkLogin.id,
    email: checkLogin.email,
    name: checkLogin.name,
    name_en: checkLogin.name_en,
    phone: checkLogin.phone,
    office_tel: checkLogin.office_tel
})
const brandData= reactive([
    {
        img:'/earth/Logo1.png',
        url:'/',
        title: '通利水產',
        des: '來自彰化自產自銷品牌，擁有多年蛤蜊養殖經驗，並於民國108年開始培育黑蜆，為目前外銷日本最大的廠商、同時供應台灣生技廠加工製造黑蜆精。在這個活動中，員工們可以在更多不同的地方看見 VIVOTEK ，如同阿凡達電影中主角從「看見」而「感受到」VIVOTEK 對品質的追求，強化品牌認同感。',
    },
    {
        img:'/earth/Logo2.png',
        url:'/',
        title: '雷打石',
        des: '從湖北和湖南之間帶來的媽媽手藝，在台灣搭配最頂級的食材嶄露無遺！\n經大火翻炒大紅辣椒的香辣、頂級鹹鴨蛋的濃醇，圍繞在這樣的香氣已經是種享受，而您，現在可以享用！',
    },
    {
        img:'/earth/Logo3.png',
        url:'/',
        title: '原味千尋',
        des: '乳酪絲源自南義大利的古老工法，每16公升的生乳，只能製成1公斤的乳酪絲，營養濃縮、口感加倍。自家合格工廠不斷推陳出新，讓您的味蕾在綿延不絕的美食旅程中，感受到無盡的美好。',
    },
    {
        img:'/earth/Logo4.png',
        url:'/',
        title: '向天歌創新農業股份有限公司',
        des: '透過科技、低碳實踐和品牌推廣，致力於促進台灣鵝肉產業的發展，旨在實現可持續農業發展，並專注於產業永續、環境永續和鄉村永續。',
    },
    {
        img:'/earth/Logo5.png',
        url:'/',
        title: '寶奇生技',
        des: '以永續農業之理念出發，扶植小農，用好菌、養好雞、提供大家吃好蛋，源自食品安全，創造互利共生，發展永續農業。',
    },
    {
        img:'/earth/Logo4.png',
        url:'/',
        title: '向天歌創新農業股份有限公司',
        des: '透過科技、低碳實踐和品牌推廣，致力於促進台灣鵝肉產業的發展，旨在實現可持續農業發展，並專注於產業永續、環境永續和鄉村永續。',
    },
])

</script>
<style lang="scss" scoped>
@import url(./index.scss);
</style>
