<template>
    <div :style="style">
        <slot></slot>
    </div>
</template>

<script>
import useProps from './hooks/useProps'
import useForm from './hooks/useForm';
export default {
    name: 'ui-form'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
const form = useForm(props)

const getSum = form.getSum.bind(form)
const getForm = form.getForm.bind(form)
const checkForm = form.checkForm.bind(form)

defineExpose({
    getSum,
    getForm,
    checkForm
})
</script>