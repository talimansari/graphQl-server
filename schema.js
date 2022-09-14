const { gql } = require('apollo-server');

exports.typeDefs = gql`
type Query {
     book:String!
     allProducts: [Product!]!
     singleProduct(id: ID!): Product
     allCategories: [String]
     categoryProducts(category: String!): [Product]
     saleOnProducts(filter: SaleOnFilterInput!): [Product]
     avgRating(rating: Int!):[Product]
   }
   type Mutation{
    addProduct(input: ProductInput!): Product
    addReviews(input: AddReviewsInput):Review
    productDelete(id: ID!): Boolean
    updateProduct(id:ID!,input:UpdateProductInput!): Product
   }
   type Product {
        id: ID!
        title: String!
        description: String!
        price: Int!
        discountPercentage:Float!
        stock: Int!
        brand: String!
        category: String!
        thumbnail: String!
        images: String!
        saleOn: Boolean!
        reviews:[Review]
   }
   type Review{
         id: ID!,
         date: String!
         title: String!
         comment: String!
         rating: Int!
         productId: ID
   }
    
   type Category{
     category: String!
   }
   input SaleOnFilterInput{
     saleOn: Boolean
   }
   input ProductInput{
        id: ID!
        title: String!
        description: String!
        price: Int!
        discountPercentage:Float!
        stock: Int!
        brand: String!
        category: String!
        thumbnail: String!
        images: String!
        saleOn: Boolean!
   }
   input AddReviewsInput {
         id: ID
         date: String!
         title: String!
         comment: String!
         rating: Int!
         productId:ID
   }

   input UpdateProductInput{
        title: String
        description: String
        price: Int
        discountPercentage:Float
        stock: Int
        brand: String
        category: String
        thumbnail: String
        images: String
        saleOn: Boolean
   }
   
`;