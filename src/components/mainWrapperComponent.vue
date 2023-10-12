<template>
    <div class="main-wrapper">
        <headerComponent />
        <!-- <mainPageComponent /> -->
        <!-- <blogComponent /> -->
        <!-- <blogDetailsComponent /> -->
        <projectPageComponent />
        <footerComponent />
    </div>
</template>

<script>
import headerComponent from "./headerComponent.vue";
import footerComponent from "./footerComponent.vue";
// import mainPageComponent from "./mainPageComponent.vue";
// import blogComponent from "./blogComponent.vue";
// import blogDetailsComponent from "./blogDetailsComponent.vue";
import projectPageComponent from "./projectPageComponent.vue";

export default {
    name: "mainWrapper",
    components: {
        headerComponent,
        footerComponent,
        // mainPageComponent,
        // blogComponent,
        // blogDetailsComponent,
        projectPageComponent,
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
