<template>
    <section class="projects">
        <div class="projects-top">
            <h2>Follow Our Projects</h2>
            <p>
                It is a long established fact that a reader will be distracted
                by the of readable content of page lookings at its layouts
                points.
            </p>
        </div>
        <div class="projects-bottom container">
            <projectComponent
                v-for="project in projects"
                :key="project.img"
                :project="project"
            />
        </div>
    </section>
</template>

<script>
import projectComponent from "./projectComponent.vue";

export default {
    name: "projectsComponent",
    components: {
        projectComponent,
    },

    data() {
        return {
            projects: [
                {
                    img: require("@/assets/img/project-1.png"),
                    title: "Modern Kitchan",
                    category: "Decor / Artchitecture",
                },
                {
                    img: require("@/assets/img/project-2.png"),
                    title: "Modern Kitchan",
                    category: "Decor / Artchitecture",
                },
                {
                    img: require("@/assets/img/project-3.png"),
                    title: "Modern Kitchan",
                    category: "Decor / Artchitecture",
                },
                {
                    img: require("@/assets/img/project-4.png"),
                    title: "Modern Kitchan",
                    category: "Decor / Artchitecture",
                },
            ],
        };
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss"></style>
