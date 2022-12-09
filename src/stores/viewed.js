import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';

export const useViewedStore = defineStore("viewed", {
    state: () => ({
        idsejours_array : useStorage('viewed', []),
    }),
    getters: {
        idsejours: (state) => state.idsejours_array,
    },
    actions: {
        async addSejour(idsejour) {
            if(!this.idsejours_array.includes(idsejour))
                this.idsejours_array.push(idsejour);
        },
        async removeSejour(idsejour) {
            this.idsejours_array = this.idsejours_array.filter(item => item.idsejour !== idsejour);
        },
    },
});