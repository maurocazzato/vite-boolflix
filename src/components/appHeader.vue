<script>
export default {
    name: "appHeader",
};
</script>

<template>
    <header>
        <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-1024.png" alt="Logo"
            class="logo" />
        <h1 class="title">BOOLFLIX</h1>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixins.scss' as *;

.logo {
    max-width: 50px;
    margin-right: 10px;
    margin-left: 10px;
    float: left;

}

.title {
    font-size: 40px;
    color: rgba(233, 11, 39, 255);
}
</style>
