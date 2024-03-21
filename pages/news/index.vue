<template>
    <div>
    <h2>News List</h2>
    <ul>
        <li class="newsList" v-for="(item,index) in newsList">
            <a :href="`/news/${item.id}`">
                <div class="newsCard">
                    {{ item.title }}
                </div>
            </a>
        </li>
    </ul>
    </div>
</template>
<script setup lang="ts">
import  useGlobalStore  from '../store/index';

    const storeData = useGlobalStore()
    storeData.lan = ''
    const newsData = ref();
    const newsList = ref();
    const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
    }
    const  news  = await useAsyncData(() => $fetch('https://www.travel.taipei/open-api/en/Events/News?begin=1992-05-05&end=2023-08-05&page=1',{method: 'GET',headers: headers,}))
    newsData.value = news
    newsList.value = newsData.value.data.data
</script>
