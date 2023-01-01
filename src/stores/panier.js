import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';
import config from "../utils/config";

export const usePanierStore = defineStore("panier", {
    state: () => ({
        sejours : useStorage( 'sejours' , [{
            idsejour: null,
            prixsejour: 0,
            nbEnfants: 0,
            nbAdultes: 0,
            nbChambres: 0,
            date: null,
            prixtotal: 0,
        }]),
    }),
    getters: {
        idsejour: (state) => state.sejours.idsejour,
        nbEnfants: (state) => state.sejours.nbEnfants,
        nbAdultes: (state) => state.sejours.nbAdultes,
        nbChambres: (state) => state.sejours.nbChambres,
        date: (state) => state.sejours.date,
        total: (state) => state.sejours.length - 1,
        prixtotal: (state) => state.sejours.prixtotal,
    },
    actions: {
        addSejour(idsejour, prixsejour) {
            for(let i = this.sejours.length - 1 ; i >= 0 ; i--){
                if (this.sejours[i].idsejour === idsejour){
                    break;
                }
                else if (this.sejours[i].idsejour === null) {
                    this.sejours.push({
                        idsejour: idsejour,
                        prixsejour: prixsejour,
                        nbEnfants: 0,
                        nbAdultes: 1,
                        nbChambres: 1,
                        date: null,
                        prixtotal: prixsejour,
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
                    this.updatePrixtotal(idsejour);
                    break;
                }
            }
        },
        addRemAdultes(idsejour, nbAdultes) {
            for(let i = this.sejours.length - 1 ; i >= 0 ; i--){
                if (this.sejours[i].idsejour === idsejour){
                    this.sejours[i].nbAdultes = nbAdultes;
                    this.updatePrixtotal(idsejour);
                    break;
                }
            }
        },
        addRemChambres(idsejour, nbChambres) {
            for(let i = this.sejours.length - 1 ; i >= 0 ; i--){
                if (this.sejours[i].idsejour === idsejour){
                    this.sejours[i].nbChambres = nbChambres;
                    this.updatePrixtotal(idsejour);
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
        updatePrixtotal(idsejour) {
            for(let i = this.sejours.length - 1 ; i >= 0 ; i--){
                if (this.sejours[i].idsejour === idsejour){
                    const total = this.sejours[i].prixsejour;
                    let totalAdultes = 0;
                    let totalChambres = 0;
                  
                    if(this.sejours[i].nbAdultes > 1) {
                      totalAdultes = (this.sejours[i].prixsejour * config.majAdulte) / 100;
                    }
                  
                    if(this.sejours[i].nbChambres > 1) {
                      totalChambres = (this.sejours[i].prixsejour * config.majChambre) / 100;
                    }
                  
                    const totalEnfants = (this.sejours[i].prixsejour * config.majEnfant) / 100;

                    const totalFinal =
                      total +
                      totalEnfants * this.sejours[i].nbEnfants +
                      totalChambres * (this.sejours[i].nbChambres - 1) +
                      totalAdultes * (this.sejours[i].nbAdultes - 1);

                    this.sejours[i].prixtotal = totalFinal;
                    break;
                }
            }
        },
    },
});