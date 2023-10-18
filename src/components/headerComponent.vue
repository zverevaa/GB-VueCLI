<template>
    <div class="header container">
        <router-link :to="'home'">
            <div class="logo">
                <div class="logo-img">
                    <img src="@/assets/img/logo.png" alt="" />
                </div>
                <p class="logo-text">Interno</p>
            </div>
        </router-link>
        <nav class="menu">
            <ul>
                <li><router-link :to="'home'">Home</router-link></li>
                <li><router-link :to="'project-page'">Project</router-link></li>
                <li><router-link :to="'blog'">Blog</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "headerComponent",
};
</script>

<style lang="sass"></style>
