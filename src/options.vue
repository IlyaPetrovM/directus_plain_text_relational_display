<template>
            <p>Template for Item</p>
            <v-field-template :collection="relations[0].collection" :model-value="value.template" @update:modelValue="handleChange($event)" />
    

            <p>Divider string</p>
            <v-input v-model="value.separator" type=text />
<p></p>
    <v-notice>Resulting display will be like this: <code>Doe, John; Potter, Harry</code></v-notice>
</template>
<script>
    export default {
        emits: ['input'],
        inject: ['system'],
        props: {
            value: Object,
            collection: String,
            relatedCollection: String,
            fieldData:Object,
            relations:Array,
        },
        methods: {
            handleChange(value) {
                this.$emit('input', {
                            template: value, 
                        });
            },
        },
    };

</script>
