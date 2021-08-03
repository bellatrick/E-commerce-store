
import {API_URL} from './config.js';
export default class abstractView{
   constructor(){
   }
    parentEl ;
   // = document.querySelector('.container')
    err= document.querySelector('.renderError')
    spinner= document.querySelectorAll('.loading-icon')
    mainSection= document.querySelector('.section')
    container1=  document.querySelector('.section__third')
    container2 = document.querySelector('.section__fourth')
    overLay= document.querySelector('.overlay')
    loginView= document.querySelector('.loginView')
    _data
    hideElement(){
      this.container1.classList.add('hide')
      this.container2.classList.add('hide')
  } 
  showElement(){
    this.parentElContainer.classList.remove('hide')
  } 
    clearView(parentEl){
        parentEl.innerHTML = ''
    }
    async getHtml(){
        return '';
    }
    _generateMarkup(){
      return ''
    }
    // overLayEventListener(){
    //   AbstractView.overLay.addEventListener('click', function(){
    //     removeOverlay()
    //     AbstractView.loginView.classList.add('hide')
    //   })
    // }
    addOverlay(){
      this.mainSection.classList.add('overlay')
    }
    removeOverlay(){
      this.mainSection.classList.remove('overlay')
    }
    render(data) {
     // if(!data || (Array.isArray(data)&& data.length===0))  return this.renderError();
        this._data= data; 
        const markup= this._generateMarkup()  
        this.clearView(this.parentEl)
        this.parentEl.insertAdjacentHTML('afterbegin', markup)   
       
    }
   async showViews(data) {
     this._data=data
       this.clearError()
       return this.parentEl.innerHTML =  await this.getHtml()
    }
    setBackground(){
        document.body.style.backgroundImage = 'linear-gradient( 45deg, white, #041E42)'
    }
    resetBackground(){
        document.body.style.backgroundImage = 'linear-gradient(  white, white)'
    }
    renderError(errMessage){
        this.err.classList.remove('hide')
     this.err.innerHTML = errMessage

    }
    clearError(){
     this.err.classList.add('hide')
    }
    calculatePrice(price){
      let newPrice = (+price*410.50)
      var formatter = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'NGN',
  
      });
      
       return `${formatter.format(newPrice)}`
    }
 renderSpinner(){
   [...this.spinner].forEach(el=>el.classList.remove('hide'))
 }



starRating = str => {
 let roundHalf = num => {
    return Math.round(num*2)/2;
  }
  if (str > 5.00) return 'average rating greater than 5.00'

  let actualRating = roundHalf(str)
  const result = []
  const rateMappings = {
    0: ' <i class="fa fa-star-o"></i>',
    0.5: '<i class="fa fa-star-half-o"></i>',
    1: '<i class="fa fa-star"></i>'
  }

  for (let i = 1; i <= 5; i++) {
    const difference = actualRating
    actualRating = actualRating - 1
    
    if (difference > 0.5) {
      result.push(rateMappings[1])
    } else if (difference === 0.5) {
      result.push(rateMappings[0.5])
    } else {
      result.push(rateMappings[0])
    }
  }
  
  return result.join(' ')
}

  
}
export async function getJSON (data, url){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({
              "name": data.name,
              "email": data.email,
              "password": data.password,
              "phonenumber": data.Phone
            });
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            try{
            const res=  await fetch(`${API_URL}${url}`, requestOptions)
             const data= await res.json()
            console.log(data);
            console.log(res);
            if(res.status==400) {
              throw new Error(`${data.message}`);
             }
             if(res.status==500){
               throw new Error('Please input your details')
             }
          }
            catch(err){
              console.log(err);
              this.renderError(err)
            }
   }
const AbstractView = new abstractView()