const { selector } = require("recoil");
const { CART } = require("./user.keys");
const { userCartState } = require("./user.atoms");

export const cartState = selector({
    key: CART,
    get: ({ get }) => {
        const usercart = get(userCartState);
        console.log(usercart)
        const ids = [];
        const products = [];
        let totalPrice = 0;
        let totalQuantity = 0;
        // const filteredCart = [...new Map(usercart.map(item=>[item._id,item])).values()]
        usercart.map((item, i, arr) => {
            // if (!ids.includes(item._id)) {
                const count = item.count
                const subTotal = item.price * count;
                totalQuantity = totalQuantity + count;
                totalPrice = totalPrice + (item.price * count)
                products.push({subTotal,...item})
                // ids.push(item._id)
            // }
        })
        // console.log(cart);

        return {totalPrice,totalQuantity,products};
    }
})