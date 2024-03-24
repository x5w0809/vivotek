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
                        <span class="localeName" :class="{currentLocale:locale=='zh'}" @click="locale = 'zh'"
                            >中文</span
                        >
                        <div class="hr"></div>
                        <span class="localeName" :class="{currentLocale:locale=='en'}" @click="locale = 'en'"
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
                        <input class="input" type="email">
                    </div>
                    <div class="employeeId">
                        <div class="lable">{{ $t('loginId') }}</div>
                        <input class="input" type="text">
                    </div>
                    <div class="loginPart">
                        <div class="loginBtn">
                            <span>{{ $t('loginBtn') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import useGlobalStore from "../store/index";
const { locale } = useI18n();

</script>
<style lang="scss" scoped>
@import url(./index.scss);
</style>
