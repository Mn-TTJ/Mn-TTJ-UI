<template>
    <div class="tree" ref="root">
        <div ref="leafNodes" v-for="n in dataSet.length" :key="n"></div>
    </div>
</template>

<script>
import { treeProps } from './props/index'
import useTree from './hooks/useTree';
import { ref, defineEmits, defineExpose } from 'vue';
export default {
    name: 'ui-tree',
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(treeProps);
const emit = defineEmits(['select', 'clickEvent'])
const leafNodes = ref(null)
const root = ref(null)
const { reload,
    unshiftChild,
    pushChild,
    insertBefore,
    insertAfter,
    remove,
    addFirstChild,
    addLastChild,
    allReload
} = useTree(props, leafNodes, emit, root)
defineExpose({
    reload,
    unshiftChild,
    pushChild,
    insertBefore,
    insertAfter,
    remove,
    addFirstChild,
    addLastChild,
    allReload
})
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';
</style>