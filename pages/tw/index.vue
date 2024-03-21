<template>
    <div>
        <div id="main">
            <div class="welcome">
                <h2>{{ $t('login') }}</h2>
                <nuxt-link to="/" class="checkToZh"><span>前往英文版</span> </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script setup>
    import {  storeToRefs } from 'pinia';
    import  useGlobalStore  from '../store/index';

    const storeData = useGlobalStore()
    storeData.lan = 'tw'
</script>
<style lang="scss">
    h2{
        font-size: 30px;
        text-align: center;
    }
    .checkToZh{
        display:flex;
        justify-content: center;
        text-decoration:none;
        span{         
            color:#000000;
            cursor: pointer;   
            padding: 5px 20px;
            font-size: 20px;
            border: 1px solid #000000;
            border-radius: 20px;
            font-weight: bold;
            transition:0.2s ease;
            &:hover{
                background-color: #000000;
                color:#0873ae;
            }
        } 
    }
</style>