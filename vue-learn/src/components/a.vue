<template lang="html">
    <div class="a">
        pagea {{ $store.state.money.count1 }}
        <button type="button" name="button" @click="add(2)">增加</button>
        <button type="button" name="button" @click="reduce">删减</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: mapActions('money',['add','reduce'])
}
</script>

<style lang="css">

</style>