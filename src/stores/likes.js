import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';

export const useLikesStore = defineStore("likes", {
    state: () => ({
        sejours : useStorage( 'likes' , [{
            idsejour: null,
        }])
    }),
    getters: {
        idsejour: (state) => state.sejours.idsejour,
    },
    actions: {
        addSejour(idsejour) {
            for(let i = this.sejours.length - 1 ; i >= 0 ; i--){
                if (this.sejours[i].idsejour === idsejour){
                    break;
                }
                else if (this.sejours[i].idsejour === null) {
                    this.sejours.push({
                        idsejour: idsejour
                    });
                }
            }
        },
        removeSejour(idsejour) {
            this.sejours = this.sejours.filter(item => item.idsejour !== idsejour);
        },    
    },
});