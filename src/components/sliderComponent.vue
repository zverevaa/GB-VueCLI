<template>
    <div class="slider container">
        <div class="slider-img">
            <img :src="switchImage()" alt="" />
            <div class="previous-image" @click="counterDecrease"></div>
            <div class="next-image" @click="counterIncrease"></div>
        </div>

        <div class="slider-circles">
            <div
                class="slider-circle"
                v-for="(circle, index) in this.sliderImgs"
                :key="index"
                v-bind:class="[
                    index === counter
                        ? 'slider-circle-chosen'
                        : 'slider-circle',
                ]"
                @click="counter = index"
            ></div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "sliderComponent",

    data() {
        return {
            counter: 0,
        };
    },
    computed: {
        ...mapState(["sliderImgs"]),
    },

    mounted() {},

    methods: {
        switchImage() {
            return this.sliderImgs[this.counter].img;
        },
        counterIncrease() {
            if (this.counter === this.sliderImgs.length - 1) {
                this.counter = 0;
            } else {
                this.counter++;
            }
        },

        counterDecrease() {
            if (this.counter === 0) {
                this.counter = this.sliderImgs.length - 1;
            } else {
                this.counter--;
            }
        },
    },
};
</script>

<style lang="scss">
.slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .slider-img {
        margin-bottom: 30px;
        .previous-image,
        .next-image {
            width: 100px;
            height: 800px;
            position: absolute;
            top: 0;
        }
        .next-image {
            right: 0;
            border-radius: 0 50px 50px 0;
        }
        .previous-image {
            border-radius: 50px 0 0 50px;
        }
        .previous-image:hover,
        .next-image:hover {
            cursor: pointer;
        }
    }
    img {
        border-radius: 50px;
        position: relative;
    }

    .slider-img:hover > .previous-image {
        background-color: rgba(41, 47, 54, 0.2);
    }
    .slider-img:hover > .next-image {
        background-color: rgba(41, 47, 54, 0.2);
    }

    .slider-circles {
        display: flex;
        gap: 10px;
        margin-bottom: 100px;
        .slider-circle {
            width: 20px;
            height: 20px;
            border: 2px solid #292f36;
            border-radius: 50%;
        }
        .slider-circle:hover {
            cursor: pointer;
            background-color: #cda274;
        }

        .slider-circle-chosen {
            background-color: #292f36;
        }
    }
}
</style>
