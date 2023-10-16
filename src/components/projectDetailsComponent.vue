<template>
    <div class="project-details container">
        <div class="page-banner">
            <img src="@/assets/img/project-details-banner.jpg" alt="" />
        </div>
        <section class="project-details-section">
            <h1 class="project-details-title">Minimal Look Bedrooms</h1>
            <p class="project-details-text">{{ projectDetailsText }}</p>
        </section>
        <sliderComponent />
    </div>
</template>

<script>
import { mapState } from "vuex";

import sliderComponent from "./sliderComponent.vue";

export default {
    name: "projectDetailsComponent",
    components: { sliderComponent },
    data() {
        return {};
    },

    computed: {
        ...mapState(["projectDetailsText"]),
    },
    mounted() {},

    methods: {},
};
</script>

<style lang="scss">
.project-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-section {
        width: 60%;
        display: flex;
        flex-direction: column;
    }

    &-title {
        color: #292f36;
        font-family: "DM Serif Display", serif;
        font-size: 50px;
        font-weight: 400;
        letter-spacing: 1px;
        margin-bottom: 10px;
    }

    &-text {
        color: #4d5053;
        font-family: "Jost", sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        margin-bottom: 100px;
    }
}
</style>
