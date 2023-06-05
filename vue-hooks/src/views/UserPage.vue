<script setup>
import UserCard from "@/components/UserCard.vue";
import { defineProps } from "vue";
import { useUserStore } from "@/stores/UserStore";

defineProps({
    title: {
        type: String,
        default: "Users",

    }
});

defineEmits(["update-user-list"]);
 
const userStore = useUserStore();
// const state = reactive({
//     userList: [],
// });


userStore.fetchUsers();

// const fetchUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     state.userList = users;
// };


</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <hr />
    <ul>
    
        <UserCard 
            v-for="user in userStore.userList"
            :user="user" 
            :key="`user-${user.id}`"
        />
    </ul>
  </main>
</template>

<style>
/* main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
}

main h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
}

input[type="email"] {
  padding: 0.5rem;
  margin-bottom: 30px;
}

button {
  border: 1px solid green;
  padding: 10px;
  color: green;
  background-color: rgb(213, 255, 213);
  cursor: pointer;
} */
</style>