import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    addToCart: (item) => set((state) => {
        const cart = [...state.cart];
        const index = cart.findIndex(cartItem => cartItem.id === item.id);
        if (index === -1) {
            cart.unshift({ id: item.id, eventObject: item, amount: 1 });
        } else {
            cart[index].amount++;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        return { cart };

    }),
    removeFromCart: (item) => set((state) => {
        const cart = [...state.cart];
        const index = cart.findIndex(cartItem => cartItem.id === item.id);
        if (index !== -1) {
            cart[index].amount--;
            if (cart[index].amount === 0) {
                cart.splice(index, 1);
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        return { cart };
    }),
    clearCart: () => set(() => {
        localStorage.removeItem('cart');
        return { cart: [] };
    })


}));

/**
 * Listan kommer vara en array med objekt som ser ut såhär:
 * [{
 *      id: 'Z698xZq2Z17_kGt',
 *      eventObject:{}, //Hela event objektet från ticketmaster
 *      amount: 1
 * },...]
 * 
 */