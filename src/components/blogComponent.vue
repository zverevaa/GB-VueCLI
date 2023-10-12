<template>
    <div>
        <div class="page-banner">
            <img src="@/assets/img/blog-banner.jpg" alt="" />
            <div class="page-banner-text">
                <h2>Articles & News</h2>
                <p>Home / Blog</p>
            </div>
        </div>
        <div class="recent container">
            <h2>Latest Post</h2>
            <div class="recent-box">
                <div class="recent-img">
                    <img src="@/assets/img/latest.png" alt="" />
                </div>
                <div class="recent-text">
                    <h3>Low Cost Latest Invented Interior Designing Ideas</h3>
                    <p class="recent-description">
                        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
                        vitae turpis dignissim maximus.posuere in.Contrary to
                        popular belief.
                        <br />
                        <br />
                        Lorem Ipsum is not simply random text. It has roots in a
                        piece of classica.
                    </p>
                    <div class="recent-info">
                        <p class="recent-date">26 December,2022</p>
                        <div class="recent-arrow">
                            <svg
                                width="52"
                                height="52"
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="blog container">
            <h2>Articles & News</h2>
            <articlesComponent />
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
import articlesComponent from "./articlesComponent.vue";

export default {
    name: "blogComponent",
    components: {
        articlesComponent,
    },
    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped></style>
