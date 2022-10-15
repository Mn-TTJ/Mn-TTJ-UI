<template>
    <div class="affix">
        <div class="hh"></div>
    </div>
</template>

<script>
export default {
    name: 'ui-affix'
}
</script>

<style lang="scss" scoped>
.affix {
    position: relative;
    left: 5rem;
    width: 10rem;
    height: 10rem;
    background-color: bisque;
}

.hh {
    position: sticky;
    top: 2rem;
    background-color: aquamarine;
}
</style>