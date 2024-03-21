<template>
    <div>
        <div class="newsContain">
            <div class="newsTitle">
                <h2>{{ newsPageTitle.title }}</h2>
            </div>
            <div class="desContain">
                <p>{{ newsPageTitle.description }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import  useGlobalStore  from '../store/index';

    const storeData = useGlobalStore()
    storeData.lan = 'tw'
    const route = useRoute()
    const { id } = route.params
    const newsData = ref();
    const newsList = ref();
    const newsPageTitle = ref();
    const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
    }
    const  news  = await useAsyncData(() => $fetch('https://www.travel.taipei/open-api/zh-tw/Events/News?begin=1992-05-05&end=2023-08-05&page=1',{method: 'GET',headers: headers,}))
    
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
<style lang='scss'>
.newsContain{
    width:80%;
    margin:0 auto;
    padding:20px;
    .newsTitle{
        h2{
            font-size:25px;
        }
    }
    
    .desContain{
        font-size:16px;
        line-height: 1.6;
        letter-spacing: 5px;
    }
}
</style>