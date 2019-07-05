<template lang="html">
    <div class="vuex">
        vuexx {{ $store.state.count }}
        <button type="button" name="button" @click="increment">增加</button>
        <button type="button" name="button" @click="decrement">减少</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: mapActions([  //this.$store.dispatch('方法名')
        'increment',
        'decrement'
    ])
}
</script>

<style lang="css">

</style>