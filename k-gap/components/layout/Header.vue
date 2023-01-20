<template>
    <header class="w-full">
        <div class="max-w-full w-full mx-auto py-8 flex flex-col items-center">
            <div class="flex gap-8">
                <ul v-for="(data,i) in headerInfo" :key="i">
                    <li class="flex-auto">
                        <span>{{ data.title }}</span>
                        {{ data.value }}
                        <span>{{ data.rate }}</span>
                    </li>
                </ul>
            </div>
            <div class="flex gap-5 pt-3">
                <NuxtLink to="/">
                    홈
                </NuxtLink>
                <NuxtLink to="/statistics">
                    통계/지표
                </NuxtLink>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const headerInfo = [
    {
        title: 'USD/KRW',
        value: 0,
        rate: 0
    },
    {
        title: 'BTC 점유율',
        value: 0,
        rate: 0
    },
    {
        title: '시가총액',
        value: 0,
        rate: 0
    },
    {
        title: '24시간 거래량',
        value: 0,
        rate: 0
    }
]

</script>