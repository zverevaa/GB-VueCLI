<template>
    <div class="main-wrapper">
        <headerComponent />
        <router-view />
        <footerComponent />
    </div>
</template>

<script>
import headerComponent from "./headerComponent.vue";
import footerComponent from "./footerComponent.vue";

export default {
    name: "mainWrapper",
    components: {
        headerComponent,
        footerComponent,
    },
    props: {},
    data() {
        return {
            title: "HaHA",
        };
    },
};
</script>

<style lang="sass"></style>
