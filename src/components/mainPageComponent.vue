<template>
    <div>
        <section class="banner container">
            <div class="banner-box">
                <h1 class="banner-title">Let Your Home Be Unique</h1>
                <p class="banner-text">
                    There are many varioations of the passages of lorem Ipsum
                    fromavailable, majority.
                </p>
                <router-link :to="'project-details'">
                    ><button class="banner-btn">
                        Get Started
                        <span
                            ><svg
                                width="19"
                                height="17"
                                viewBox="0 0 19 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                                    stroke="#CDA274"
                                    stroke-width="2"
                                    stroke-linecap="square"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span></button
                ></router-link>
            </div>
        </section>
        <projectsComponent />
        <section class="counters">
            <div class="counter">
                <div class="counter-number">12</div>
                <p class="counter-text">Years Of Experience</p>
            </div>
            <div class="counter">
                <div class="counter-number">85</div>
                <p class="counter-text">Successful Projects</p>
            </div>
            <div class="counter">
                <div class="counter-number">15</div>
                <p class="counter-text">Active Projects</p>
            </div>
            <div class="counter">
                <div class="counter-number">95</div>
                <p class="counter-text">Happy Customers</p>
            </div>
        </section>
        <section class="blog">
            <div class="blog-header">
                <h2 class="blog-header-title">Articles & News</h2>
                <p class="blog-header-text">
                    It is a long established fact that a reader will be
                    distracted by the of readable content of a page when
                    lookings at its layouts the points of using.
                </p>
            </div>
            <articlesComponent />
        </section>
    </div>
</template>

<script>
import projectsComponent from "./projectsComponent.vue";
import articlesComponent from "./articlesComponent.vue";

export default {
    name: "mainPageComponent",
    data() {
        return {};
    },
    mounted() {},
    methods: {},
    components: { projectsComponent, articlesComponent },
};
</script>

<style lang="scss"></style>
