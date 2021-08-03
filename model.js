export const state ={
   products: [],
   singleProduct:[],
   categories:[],
   currentCategory:[],
   category1:[],
   category2:[]
}
export async function getProducts(){
 const res= await fetch(`https://shopappanter.herokuapp.com/api/products`)
const data = await res.json()
state.products = data.products
console.log(state.products)
const cate1=state.products.filter(product=> product.category==state.categories[0])
const cate2=state.products.filter(product=> product.category==state.categories[1])
state.category2=cate2
state.category1=cate1
console.log(data);

}
export async function getCategories(){
   try{
 const categories= await fetch('https://shopappanter.herokuapp.com/api/products/categories')
const categoryData = await categories.json()
console.log(categoryData);
state.categories= categoryData;

   }
   catch(err)
   { console.log(err);
      throw err;
     
   }
}
export async function getSingleProduct(id){
   try{
   const res = await fetch(`https://shopappanter.herokuapp.com/api/products/${id}`)
   const product= await res.json()
   state.singleProduct=product
   console.log(product);
   }
   catch(err){
      console.log(err);
      throw err
   }
}

 export function displayCategories(category){
  const curCategory = state.products.filter(product=> product.category==category)
   state.currentCategory=curCategory
  
}































// {
//     "createdUser": {
//         "seller": {
//             "rating": 0,
//             "numReviews": 0
//         },
//         "isVerified": false,
//         "isAdmin": false,
//         "isSeller": false,
//         "_id": "60b1322f8665d3001506d7d8",
//         "name": "Fortune Sam-Olayemi",
//         "email": "cyb3rcykyc@gmail.com",
//         "password": "$2a$08$6kUDEm97rNm.Ve39LDd20eR9QS6g0lUxLfU7mdcelloodwOQ9wXl2",
//         "phonenumber": 9027373400,
//         "createdAt": "2021-05-28T18:10:55.647Z",
//         "updatedAt": "2021-05-28T18:10:55.647Z",
//         "__v": 0
//     },
//     "message": "Successfully registered"
// }
// export async function getJSON (data){
//   if(!data) return;
//   var raw = JSON.stringify({
//     "name": data.name,
//     "email": data.email,
//     "password": data.password,
//     "phonenumber": data.Phone
//   });
  
//   var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow'
//   };
//   try{
//   const getPost=  await fetch('https://shopappanter.herokuapp.com/api/users/register', requestOptions)
//    const data= await getPost.json()
//   console.log(data);}
//   catch(err){
//     throw err
//   }
// }
