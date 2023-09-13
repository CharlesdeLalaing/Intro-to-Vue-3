app.component('product-details', {
    template:
    /*html*/
    `
    <div v-for="detail in details">
    </div>    
    `,
    data() {
        return {
            details: ['50% cotton', '30% wool', '20% polyester'],
        }
    },
    computed: {
        detail() {
            return this.details
        }
    }
})