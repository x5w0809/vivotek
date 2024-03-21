<template>
    <div>
        <div id="main">
            <div class="welcome">
                <h2>{{ $t("login") }}</h2>
            </div>
        </div>
    </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import useGlobalStore from "../store/index";
</script>
<style lang="scss">
body {
    padding: 0;
    margin: 0;
}
</style>
