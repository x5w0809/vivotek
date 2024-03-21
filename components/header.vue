<template>
    <div id="header">
        <nuxt-link class="headerBtn" :to="'/' + locale">Home Page</nuxt-link>
        <div>
            <span class="headerBtn" v-if="locale === 'en'" @click="locale = 'zh'"
                >中文</span
            >
            <span class="headerBtn" v-if="locale === 'zh'" @click="locale = 'en'"
                >EＮ</span
            >
        </div>
        <nuxt-link class="headerBtn" :to="'/' + locale + '/profile'">Profile</nuxt-link>
    </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import useGlobalStore from "../store/index";
const { locale } = useI18n();
const storeData = useGlobalStore();
let { lan } = storeToRefs(storeData);
</script>
<style lang="scss">
#header {
    width: 100%;
    background-color: #000000;
    height: 50px;
    display: flex;
    align-items: center;
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
