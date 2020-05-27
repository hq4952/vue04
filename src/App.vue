<template>
<div>
<Myblog v-for="blog in blogs" :key="blog.id" :title="blog.title"></Myblog>
</div>
</template>

<script type="text/ecmascript-6">
import Myblog from "./component/Myblog.vue"
export default {
    components:{
        Myblog
    },
    data(){
        return{
            blogs:[
                {id:1,title:"blogOne"},
                {id:2,title:"blogTwo"},
                {id:1,title:"blogThree"}
            ]
        }
    }
}
</script>

<style scoped>


</style>
