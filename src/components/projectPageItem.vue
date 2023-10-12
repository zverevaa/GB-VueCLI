<template>
    <div class="project">
        <img class="project-img" v-bind:src="project.img" alt="" />
        <div class="project-info">
            <div class="project-text">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-category">{{ project.category }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "projectPageItem",
    props: {
        project: {
            img: "",
            title: "",
            category: "",
        },
    },

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss"></style>
