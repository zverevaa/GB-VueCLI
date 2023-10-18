<template>
    <div class="blog-post">
        <router-link :to="'blog-details'">
            <div class="blog-post-box">
                <img :src="article.img" alt="" class="blog-post-img" />
                <div class="sticker">
                    <p>{{ article.sticker }}</p>
                </div>
                <h3 class="blog-post-title">
                    {{ article.title }}
                </h3>
            </div>
            <div class="blog-post-info">
                <p class="blog-post-date">{{ article.date }}</p>
                <div class="blog-post-arrow">
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
        </router-link>
    </div>
</template>

<script>
export default {
    name: "articleComponent",
    props: {
        article: {
            img: "",
            title: "",
            sticker: "",
            date: "",
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
