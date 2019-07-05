<template>
    <div class="events">
        <button type="button" name="button" v-on:click="counter += 1">test</button>
        <button type="button" name="button" @click="msg('s',$event)">test1</button>
        <div class="parent" @click="parent">
            <p>parent</p>
            <p>parent</p>
            <div class="child" @click.stop="child">child</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            counter:0
        }
    },
    methods:{
        msg:function(param,event){
            window.console.log(Math.random(),param,event);
        },
        parent: function(){
            window.console.log('parent');
        },
        child: function(){
            window.console.log('child');
        }
    }
}
</script>
<style lang="css">

</style>




