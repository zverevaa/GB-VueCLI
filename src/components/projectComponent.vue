<template>
    <div class="project">
        <img class="project-img" v-bind:src="project.img" alt="" />
        <div class="project-info">
            <div class="project-text">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-category">{{ project.category }}</p>
            </div>
            <div class="project-arrow">
                <a href="#"
                    ><svg
                        width="70"
                        height="70"
                        viewBox="0 0 70 70"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                        <path
                            d="M32 44L40 35L32 26"
                            stroke="#292F36"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "projectComponent",
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

<style lang="scss">
.project {
    break-inside: avoid;
}
</style>
