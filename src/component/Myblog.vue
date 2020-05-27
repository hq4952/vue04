<template>
<div>
<h2>这是标题{{title}}<Mybutton :title="title"></Mybutton></h2>
</div>
</template>

<script type="text/ecmascript-6">
import Mybutton from "./Mybutton.vue"
export default {
    components:{
        Mybutton
    },
    props:["title"]
}
</script>

<style scoped>


</style>
