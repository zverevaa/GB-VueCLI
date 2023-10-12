<template>
    <div>
        <div class="page-banner">
            <img src="@/assets/img/blog-details-banner.jpg" alt="" />
            <div class="page-banner-text">
                <h2>Our Project</h2>
                <p>Home / Project</p>
            </div>
        </div>
        <div class="sortTags container">
            <div
                v-for="sortTag in sortTags"
                :key="sortTag"
                @click="currentTag = sortTag"
            >
                {{ sortTag }}
            </div>
        </div>
        <section class="projects">
            <div class="projects-bottom container">
                <projectComponent
                    v-for="project in sortByTag(currentTag)"
                    :key="project.img"
                    :project="project"
                />
            </div>
        </section>
        <div class="blog container">
            <div class="pagination">
                <div class="circle">
                    <span>01</span>
                </div>
                <div class="circle">
                    <span>02</span>
                </div>
                <div class="circle">
                    <span>03</span>
                </div>
                <svg
                    width="53"
                    height="52"
                    viewBox="0 0 53 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                    <path
                        d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
                        stroke="#292F36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import projectComponent from "./projectComponent.vue";

export default {
    name: "projectPageComponent",
    components: {
        projectComponent,
    },
    data() {
        return {
            sortTags: ["Bathroom", "Bedroom", "Kitchen", "Living Area"],
            projects: [
                {
                    img: require("@/assets/img/projectpage_01.png"),
                    title: "Minimal Bathroom",
                    category: "Decor / Artchitecture",
                    tag: "Bathroom",
                },
                {
                    img: require("@/assets/img/projectpage_02.png"),
                    title: "Minimal Kitchen",
                    category: "Decor / Artchitecture",
                    tag: "Kitchen",
                },
                {
                    img: require("@/assets/img/projectpage_03.png"),
                    title: "Minimal Living Area",
                    category: "Decor / Artchitecture",
                    tag: "Living Area",
                },
                {
                    img: require("@/assets/img/projectpage_04.png"),
                    title: "Minimal Kitchen",
                    category: "Decor / Artchitecture",
                    tag: "Kitchen",
                },
                {
                    img: require("@/assets/img/projectpage_05.png"),
                    title: "Minimal Bedroom",
                    category: "Decor / Artchitecture",
                    tag: "Bedroom",
                },
                {
                    img: require("@/assets/img/projectpage_06.png"),
                    title: "Minimal Bedroom",
                    category: "Decor / Artchitecture",
                    tag: "Bedroom",
                },
                {
                    img: require("@/assets/img/projectpage_07.png"),
                    title: "Minimal Bathroom",
                    category: "Decor / Artchitecture",
                    tag: "Bathroom",
                },
                {
                    img: require("@/assets/img/projectpage_08.png"),
                    title: "Minimal Living Area",
                    category: "Decor / Artchitecture",
                    tag: "Living Area",
                },
            ],
            currentTag: "",
            sortedProjects: "",
        };
    },

    computed: {},

    onReload() {
        this.currentTag = "";
    },

    created() {
        this.sortedProjects = this.projects;
    },

    methods: {
        sortByTag(currentTag) {
            if (currentTag === "") {
                return this.sortedProjects;
            } else {
                this.sortedProjects = this.projects.filter((el) => {
                    return el.tag === currentTag;
                });
                return this.sortedProjects;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.sortTags {
    display: flex;
    justify-content: center;
    gap: 120px;
    font-family: "Jost", sans-serif;
    border: 1px solid #cda274;
    border-radius: 18px;
    margin-bottom: 60px;
    div {
        padding: 26px 66px;
    }
    div:hover {
        cursor: pointer;
        background-color: #cda274;
        border-radius: 18px;
    }
}

.projects {
    margin-bottom: 60px;
}
.pagination {
    margin-top: 0px;
}
.projects-bottom {
    display: inline-block;
    columns: 2;
}
</style>
