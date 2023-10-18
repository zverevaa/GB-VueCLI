<template>
    <div>
        <div class="article" v-for="article in articles" :key="article.id">
            <p class="small-number">{{ getNumber(article) }}</p>
            <p class="text">{{ article.text }}{{ article.tags }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "sortArticlesComponent",

    data() {
        return {
            articles: [
                {
                    text: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    tags: ["Bedroom", "Architecture"],
                },
                {
                    text: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    tags: ["Kitchen", "Kitchen Planning", "Building"],
                },
                {
                    text: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    tags: ["Building", "Architecture"],
                },
            ],
        };
    },

    mounted() {},

    methods: {
        getNumber(article) {
            return this.articles.indexOf(article) + 1;
        },
        sortArticles(tag) {
            this.articles.forEach((el, idx) => {
                if (el.tags.includes(tag)) {
                    this.articles.unshift(this.articles.splice(idx, 1)[0]);
                }
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>
