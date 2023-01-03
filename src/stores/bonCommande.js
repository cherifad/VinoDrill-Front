import { defineStore } from 'pinia';

export const useCouponStore = defineStore("coupon", {
    state: () => ({
        coupon: null,
    }),
    getters: {
        getCoupon: (state) => state.coupon,
    },
    actions: {
        setCoupon(coupon) {
            this.coupon = coupon;
        }
    },
});