<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
}
</script>

<template>
    <li :class="$style['user-card']">
        <router-link :to="`/user/${user.name}`">{{ user.name }}: {{ user.website }}</router-link>
    </li>
</template>

<style module>
.user-card {
    border: 2px solid rgb(66,184,131);
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    background-color: rgb(213, 255, 213);
    color: green;
    cursor: pointer;
}

</style>