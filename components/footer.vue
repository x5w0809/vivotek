<template>
    <div id="footer" v-if="currentRoute != '/'+locale+'/login'" >
        <div class="wrap">
            <div class="term">{{ $t('footerTerm') }}</div>
            <div class="shareBox">
                <div class="shareBtn">
                    <img src="/Link1.svg" alt="">
                </div>
                <div class="shareBtn">
                    <img src="/Link2.svg" alt="">
                </div>
                <div class="shareBtn">
                    <img src="/Link3.svg" alt="">
                </div>
            </div>
            <div class="copyright">{{ $t('copyright') }}</div>
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



</script>
<style lang="scss" scoped>
#footer {
    position: relative;
    width: 100%;
    background-color: #FFFFFF;
    bottom: 0;
    left: 0;
    .wrap{
      padding: 80px 0;
      .term{
        padding: 0 10px;
        text-align: center;
        font-size: 20px;
        color: #828282;
      }
      .shareBox{
        position: relative;
        margin-top: 40px;
        display: flex;
        justify-content: center;
        margin-left: -24px;
        .shareBtn{
            width: 64px;
            margin-left: 24px;
            cursor: pointer;
            &:hover{
                transform: translateY(-3px) scale(1.02);
            }
            img{
                width: 100%;
                display: block;
            }
        }
      }
      .copyright{
        margin-top: 40px;
        text-align: center;
        font-size: 16px;
        color: #828282;
      }
    }
}
</style>
