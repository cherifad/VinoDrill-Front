import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';

export const usePanierStore = defineStore("panier", {
    state: () => ({
        sejours : useStorage( 'sejours' , [{
            idsejour: null,
            quantite: null,
        }])
    }),
    getters: {
        idsejour: (state) => state.sejours.idsejour,
        quantite: (state) => state.sejours.quantite,
    },
    actions: {
        async addSejour(idsejour, quantite) {
            for(let i = this.sejours.length - 1 ; i >= 0 ; i--){
                if (this.sejours[i].idsejour === idsejour){
                    this.sejours[i].quantite++;
                    break;
                }
                else if (this.sejours[i].idsejour === null) {
                    this.sejours.push({
                        idsejour: idsejour,
                        quantite: quantite,
                    });
                }
            }
        },
        async removeSejour(idsejour) {
            this.sejours = this.sejours.filter(item => item.idsejour !== idsejour);
        },
    },
});