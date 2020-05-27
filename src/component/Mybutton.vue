<template>
<div>
<button @click="count++">你点击了{{title}}{{count}}次</button>
</div>
</template>

<script type="text/ecmascript-6">
export default {
    data(){
        return {
            count:0
        }
    },
    props:["title"]
}
</script>

<style scoped>


</style>
