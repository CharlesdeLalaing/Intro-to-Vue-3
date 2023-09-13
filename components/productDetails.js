app.component('product-details', {
    props: {
        details: {
            type: [],
            required: true
        }
    },
    template:
    /*html*/
    `
    <li v-for="detail in details">
    
    </li>    
    `
})