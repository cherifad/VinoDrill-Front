import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';

export const usePanierStore = defineStore("panier", {
    state: () => ({
        sejours : useStorage( 'sejours' , [{
            idsejour: null,
            nbEnfants: 0,
            nbAdultes: 0,
            nbChambres: 0,
            date: null,
        }]),
        total : useStorage( 'total' , 0),
    }),
    getters: {
        idsejour: (state) => state.sejours.idsejour,
        nbEnfants: (state) => state.sejours.nbEnfants,
        nbAdultes: (state) => state.sejours.nbAdultes,
        nbChambres: (state) => state.sejours.nbChambres,
        date: (state) => state.sejours.date,
        total: (state) => state.sejours.length - 1,
    },
    actions: {
        addSejour(idsejour) {
            for(let i = this.sejours.length - 1 ; i >= 0 ; i--){
                if (this.sejours[i].idsejour === idsejour){
                    break;
                }
                else if (this.sejours[i].idsejour === null) {
                    this.sejours.push({
                        idsejour: idsejour,
                        nbEnfants: 0,
                        nbAdultes: 1,
                        nbChambres: 1,
                        date: null,
                    });
                }
            }
        },        
        removeSejour(idsejour) {
            this.sejours = this.sejours.filter(item => item.idsejour !== idsejour);
        },
        addRemEnfants(idsejour, nbEnfants) {
            for(let i = this.sejours.length - 1 ; i >= 0 ; i--){
                if (this.sejours[i].idsejour === idsejour){
                    this.sejours[i].nbEnfants = nbEnfants;
                    break;
                }
            }
        },
        addRemAdultes(idsejour, nbAdultes) {
            for(let i = this.sejours.length - 1 ; i >= 0 ; i--){
                if (this.sejours[i].idsejour === idsejour){
                    this.sejours[i].nbAdultes = nbAdultes;
                    break;
                }
            }
        },
        addRemChambres(idsejour, nbChambres) {
            for(let i = this.sejours.length - 1 ; i >= 0 ; i--){
                if (this.sejours[i].idsejour === idsejour){
                    this.sejours[i].nbChambres = nbChambres;
                    break;
                }
            }
        },
        addRemDate(idsejour, date) {
            for(let i = this.sejours.length - 1 ; i >= 0 ; i--){
                if (this.sejours[i].idsejour === idsejour){
                    this.sejours[i].date = date;
                    break;
                }
            }
        },
    },
});