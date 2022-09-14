exports.Query = {
    book: () => "hello Book",
    allProducts: (parent, args, { db }) => {
        return db.products;
        
    },
    singleProduct: (parent, args, { db }) => {
        const { id } = args;
        return db.products.find(item => item.id === id)
    },
    allCategories: (parent, args, { db }) => {
        return db.products.map(item => item.category)
    },
    categoryProducts: (parent, args, { db }) => {
        const { category } = args
        return db.products.filter(item => item.category === category)
    },
    saleOnProducts: (parent, args, { db }) => {
        const saleOn = args.filter.saleOn
        if (saleOn) {
            return db.products.filter(item => item.saleOn === true)
        }
        return db.products
    },
    avgRating: (parent, args, { db }) => {
        const { rating } = args;
        const filterd = db.products.filter((item) => {
            let sumRating = 0;
            let numberOfReviews = 0;
            item.reviews.forEach((review) => {
                sumRating += review.rating
                numberOfReviews++
            })
            let avgRating = sumRating / numberOfReviews
            return avgRating >= rating
        })
        return filterd
    }
}