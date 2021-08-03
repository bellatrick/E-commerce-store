import abstractView from "./abstractView.js";

class categoryView extends abstractView{ 
  parentEl= document.querySelector('.flex') 
 // document.querySelector('.categories-header').innerHTML =this._data[0] 
 curCategoryViewHandler(handler){
  this.parentEl.addEventListener('click', function(e){
    const btn= e.target.closest('.section__second__categories')
    if(!btn) return
    const categoryName= btn.dataset.category
    //return categoryName
    handler(categoryName)
  })
}
 getHtml(){
    return this._data.map(this.generateMarkupPreview).join('')
    }
    generateMarkupPreview(results){
     return `
     
     <div data-category='${results}' class="section__second__categories >
     <a href="">
     <img
           src="img/mans-clothes.jfif"
           alt="Men Clothes"
           class="categories-img"
         />
         <h3 class="categories-name">${results}</h3>
         </a>
       </div>
       `
        
    }


}

export default new categoryView()