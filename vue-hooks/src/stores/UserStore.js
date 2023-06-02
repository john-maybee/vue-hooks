import { defineStore } from "pinia";

export const useUserStore = defineStore('UserStore', {
    // Data
    state: () => ({
        userList: [],
    }),
    // Computed
    getters: {
        shortUserList: (state) => {
            return state.userList.splice(0, 5);
        }
    },
    // Methods
    actions: {
        async fetchUsers() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
        
            this.userList = response;
        }
    }
})