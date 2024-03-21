<template>
    <div>
        {{ id }}
        <span>{{ newsPageTitle.title }}</span>
        <p>{{ newsPageTitle.description }}</p>
    </div>
</template>
<script setup>
import  useGlobalStore  from '../store/index';

    const storeData = useGlobalStore()
    storeData.lan = ''
    const route = useRoute()
    const { id } = route.params
    const newsData = ref();
    const newsList = ref();
    const newsPageTitle = ref();
    const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
    }
    const  news  = await useAsyncData(() => $fetch('https://www.travel.taipei/open-api/en/Events/News?begin=1992-05-05&end=2023-08-05&page=1',{method: 'GET',headers: headers,}))
    
    newsData.value = news
    newsList.value = newsData.value.data.data
    newsPageTitle.value = newsList.value.find(item=>{
        return item.id == id
    })
    useHead({
        title: newsPageTitle.value.title,
        viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
        charset: 'utf-8',
        meta: [
            { name: 'description', content: newsPageTitle.value.description.substr(0, 49) },
            { property: 'og:title', content: newsPageTitle.value.title },
            { property: 'og:description', content: newsPageTitle.value.description.substr(0, 49) },
        ],
    })
</script>