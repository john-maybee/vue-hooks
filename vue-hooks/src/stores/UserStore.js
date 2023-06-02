import { defineStore } from "pinia";

export const useUserStore = defineStore('UserStore', {
    // State
    state: () => ({
        userList: [],
    }),
    // Getter
    getters: {
        shortUserList: (state) => {
            return state.userList.splice(0, 5);
        }
    },
    // Method
    actions: {
        async fetchUsers() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
        
            this.userList = response;
        }
    }
})