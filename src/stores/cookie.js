import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';

export const useCookieStore = defineStore("cookie", {
    state: () => ({
        accepteCookie: useStorage('cookie', false),
    }),
    getters: {
        accepte: (state) => state.accepteCookie,
    },
    actions: {
        allowCookie(response) {
            this.accepteCookie = response;
        }
    },
});