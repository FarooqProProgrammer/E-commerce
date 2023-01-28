function CartProduct(user) {
    console.log(user);
    return {

        type: 'SET_CART',

        data: user

    }

}

export {
    CartProduct
}