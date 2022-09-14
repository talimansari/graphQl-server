const { v4: uuid } = require('uuid');
exports.Mutation = {
    addProduct: (parent, { input }, { db }) => {
        const {
            id,
            title,
            description,
            price,
            discountPercentage,
            stock,
            brand,
            category,
            thumbnail,
            images,
            saleOn } = input;
        let newProduct = {
            id: uuid(),
            title,
            description,
            price,
            discountPercentage,
            stock,
            brand,
            category,
            thumbnail,
            images,
            saleOn
        }
        db.products.push(newProduct)
        return newProduct
    },
    addReviews: (parent, { input }, { db }) => {
        const {
            id,
            date,
            title,
            comment,
            rating,
            productId,
        } = input;
        let newReview = {
            id: uuid(),
            date,
            title,
            comment,
            rating,
            productId,
        }
        const addReviewProduct = db.products.find(item => item.id === productId)
        addReviewProduct.reviews.push(newReview)
        return newReview
    },
    productDelete: (parent, { id }, { db }) => {
        db.products = db.products.filter(item => item.id !== id)
        return true;
    },
    updateProduct: (parent, { id, input }, { db }) => {
        const index = db.products.findIndex(item => item.id === id);
        db.products[index] = {
            ...db.products[index],
            ...input
        }
        return db.products[index]
    }
}