<template>
    <div id="earthDayPage">
        <div class="container">
            <section class="banner"><div class="height"></div></section>
            <section class="Transparency">
                <div class="wrap">
                    <div class="title"><span>#Transparency</span></div>
                    <div class="des">
                        <span>
                            我們必須全方位了解身處的環境，並採取具體行動。<br/>
                            透明一直是 VIVOTEK 企業文化的核心，透過綠色市集和永續講堂，能為員工們提供更多對地球永續發展的見解，唯有積極了解，才有機會啟發創新思維，並產生精準作為，邁向一個更永續的明天。
                        </span>
                    </div>
                    <div class="detail">
                        <div class="date">
                            <div class="label"></div>
                            <div class="cont"></div>
                        </div>
                        <div class="members">
                            <div class="label"></div>
                            <div class="cont"></div>
                        </div>
                        <div class="idea">
                            <div class="label"></div>
                            <div class="cont"></div>
                        </div>
                        <div class="feature">
                            <div class="label"></div>
                            <div class="cont"></div>
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

</script>
<style lang="scss" scoped>
@import url(./index.scss);
</style>
