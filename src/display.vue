<template>
    <span v-for="(item, index) in value" :key="item['id']" class="csv_values">
        <span v-if="index > 0">{{separator}}</span><render-template :template="template" :item="item" :collection="collection" />
    </span>
</template>


<script>
    export default {

        props: {
            value: Object,
            collection:String,
            template: String,
            separator: String,
        },

    };
</script>

<style>
    .csv_values .render-template {
        display: inline-block;
        padding:0;
        overflow: visible;
    }
</style>