function SingleProduct(user) {
    console.log(user);
    return {

        type: 'SET_SINGLE_PRODUCT',

        data: user

    }

}

export {
    SingleProduct
}