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
        {{ user.name }}: {{ user.website }}
    </li>
</template>

<style module>
.user-card {
    border: 2px solid rgb(66,184,131);
    padding: 10px;
}
</style>