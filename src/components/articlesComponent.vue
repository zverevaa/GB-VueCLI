<template>
    <div class="container blog-body">
        <articleComponent
            v-for="article in articles"
            :key="article.img"
            :article="article"
        />
    </div>
</template>

<script>
import articleComponent from "./articleComponent.vue";

export default {
    name: "articlesComponent",
    components: {
        articleComponent,
    },

    data() {
        return {
            articles: [
                {
                    img: require("@/assets/img/blog-1.png"),
                    title: "Let’s Get Solution For Building Construction Work",
                    sticker: "Kitchen Design",
                    date: "26 December,2022",
                },
                {
                    img: require("@/assets/img/blog-2.png"),
                    title: "Low Cost Latest Invented Interior Designing Ideas.",
                    sticker: "Living Design",
                    date: "22 December,2022",
                },
                {
                    img: require("@/assets/img/blog-3.png"),
                    title: "Best For Any Office & Business Interior Solution",
                    sticker: "Interior Design",
                    date: "25 December,2022",
                },
                {
                    img: require("@/assets/img/blog-4.png"),
                    title: "Let’s Get Solution For Building Construction Work",
                    sticker: "Kitchen Design",
                    date: "26 December,2022",
                },
                {
                    img: require("@/assets/img/blog-5.png"),
                    title: "Low Cost Latest Invented Interior Designing Ideas.",
                    sticker: "Living Design",
                    date: "22 December,2022",
                },
                {
                    img: require("@/assets/img/blog-6.png"),
                    title: "Best For Any Office & Business Interior Solution",
                    sticker: "Interior Design",
                    date: "25 December,2022",
                },
            ],
        };
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss"></style>
