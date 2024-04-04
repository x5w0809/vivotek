<template>
    <div id="profilePage">
        <div class="wrap">
            <div class="infoContent">
                <div class="title">
                    <span>{{ $t("profile.title") }}</span>
                </div>
                <div class="form">
                    <div class="formItem">
                        <div class="lable">
                            <span>{{ $t("profile.employeeId") }}</span>
                        </div>
                        <input class="formData employeeId" type="text" placeholder="00123456" :value="userData.id" />
                    </div>
                    <div class="formItem">
                        <div class="lable">
                            <span>{{ $t("profile.email") }}</span>
                        </div>
                        <input class="formData email" type="text" placeholder="test@test.com" :value="userData.email" />
                    </div>
                    <div class="formItem">
                        <div class="lable">
                            <span>{{ $t("profile.zhName") }}</span>
                        </div>
                        <input class="formData zhName" type="text" placeholder="Demo-test（測試小姐）" :value="userData.name" />
                    </div>
                    <div class="formItem">
                        <div class="lable">
                            <span>{{ $t("profile.enName") }}</span>
                        </div>
                        <input class="formData enName" type="text" placeholder="Test" :value="userData.name_en" />
                    </div>
                    <div class="formItem">
                        <div class="lable">
                            <span>{{ $t("profile.phone") }}</span>
                        </div>
                        <input class="formData phone" type="text" placeholder="0912345678" :value="userData.phone" />
                    </div>
                    <div class="formItem">
                        <div class="lable">
                            <span>{{ $t("profile.homeTel") }}</span>
                        </div>
                        <input class="formData homeTel" type="text" placeholder="0223456789" :value="userData.office_tel" />
                    </div>
                </div>
                <div class="submit">
                    <span>{{ $t("profile.submit") }}</span>
                </div>
            </div>
            <v-progress-circular
                style="
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                "
                color="blue-lighten-3"
                indeterminate
                :size="80"
                :width="10"
                v-if="isLoading"
            ></v-progress-circular>
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
