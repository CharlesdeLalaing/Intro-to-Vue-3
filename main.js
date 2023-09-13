const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
            console.log('added')
        },
        reUpdateCart(id) {
            this.cart.pop(id)
            console.log('delete')
        }
    }
})
