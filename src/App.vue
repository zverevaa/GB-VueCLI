<template>
    <div id="app">
        <mainWrapper />
    </div>
</template>

<script>
import mainWrapper from "./components/mainWrapperComponent.vue";

export default {
    name: "App",
    components: {
        mainWrapper,
    },
};
</script>

<style lang="scss">
#app {
}
</style>
