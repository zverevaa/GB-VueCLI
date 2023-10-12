<template>
    <div>
        <div class="page-banner">
            <img src="@/assets/img/blog-details-banner.jpg" alt="" />
        </div>
        <div class="blog-details container">
            <div class="blog-details-body">
                <div class="blog-details-current">
                    <h2>Let’s Get Solution for Building Construction Work</h2>
                    <img src="@/assets/img/blog-details-main.png" alt="" />
                    <div class="blog-details-current-meta">
                        <div class="blog-details-current-meta-data">
                            26 December,2022
                        </div>
                        <p class="blog-details-current-meta-crumbles">
                            Interior / Home / Decore
                        </p>
                    </div>
                    <p class="blog-details-current-description">
                        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
                        vitae turpmaximus.posuere in.Contrary to popular
                        belief.There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered
                        alteration in some form, by injecthumour, or randomised
                        words which don't look even slightly believable.
                        <br /><br />Embarrassing hidden in the middle of text.
                        All the Lorem Ipsum generators on the Internet tend to
                        repeat predefined chunks as necessary.
                    </p>
                    <div class="blog-details-current-quote">
                        <p class="quotemark">“</p>
                        <p>
                            The details are not the details. They make the
                            design.
                        </p>
                    </div>
                    <div class="blog-details-other">
                        <h2>Design sprints are great</h2>
                        <p>
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu
                            sem vitae turpmaximus.posuere in.Contrary to popular
                            belief.There are many variations of passages of
                            Lorem Ipsum available, but the majority have
                            suffered.
                        </p>
                        <div class="blog-details-other-articles">
                            <sortArticlesComponent
                                ref="sort"
                            ></sortArticlesComponent>
                        </div>
                        <img
                            src="@/assets/img/blog-details-secondary.png"
                            alt=""
                        />
                        <p>
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu
                            sem vitae turpmaximus.posuere in.Contrary to popular
                            belief.There are many variations of passages of
                            Lorem Ipsum available, but the majority have
                            suffered.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h3>Tags</h3>
                <div class="blog-details-tags">
                    <button
                        v-for="tag in tags"
                        :key="tag"
                        @click="$refs.sort.sortArticles(tag)"
                    >
                        {{ tag }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sortArticlesComponent from "./sortArticlesComponent.vue";

export default {
    name: "blogDetailsComponent",
    components: {
        sortArticlesComponent,
    },
    data() {
        return {
            tags: [
                "Kitchen",
                "Bedroom",
                "Building",
                "Architecture",
                "Kitchen Planning",
            ],
        };
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss"></style>
