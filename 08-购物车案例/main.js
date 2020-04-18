const app = new Vue({
    el: "#app",
    data: {
        books: [
            {id:1,name:"ww1",date:"wwww1",price:12.1,count:1},
            {id:2,name:"ww2",date:"wwww2",price:12.2,count:2},
            {id:3,name:"ww3",date:"wwww3",price:12.3,count:3},
            {id:4,name:"ww4",date:"wwww4",price:12.4,count:4},
            {id:5,name:"ww5",date:"wwww5",price:12.5,count:5}
        ]
    },
    methods: {
        increment: function (index) { // 加加
            this.books[index].count++
        },
        oncrement: function (index) {  // 减减
            if (this.books[index].count > 0) {
                this.books[index].count--
            } else {
                this.books[index].count = 0
            }
        },
        btnRemove: function (index) {
            this.books.splice(index,1)
        }
    },
    computed:{
        totalPrice: function () {
            let totalPrice = 0
            for (let i = 0;i < this.books.length;i++){
                totalPrice += this.books[i].count * this.books[i].price
            }
            return totalPrice
        }
    },
    filters: {
        showPrice: function(price) {
            return '¥ ' + price.toFixed(2)
        }
    }
})