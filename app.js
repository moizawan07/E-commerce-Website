var dataArr = JSON.parse(window.localStorage.getItem('dataarr')) || []; 
// SignUp form code Start here -->


function signUp(){
    var userObj = {
       namee    : document.getElementById('Name').value,
       Email    : document.getElementById('Email').value,
       phoneNum : document.getElementById('phonenumber').value,
       password : document.getElementById('Password').value,
    }
   
    if(userObj.namee && userObj.Email && userObj.phoneNum && userObj.password){
      //  if(userObj.Email == 'Moizadmin@gmail.com'){
      //   alert('You cant Login by this Email')
      //  }
    if(dataArr.length > 0){
      var chekemailans = true; 
       for(var i = 0; i < dataArr.length; i++){
          if(dataArr[i].Email == userObj.Email){
             chekemailans = false;
             break;
             }
        }
          if(chekemailans == false || userObj.Email == 'Moizadmin@gmail.com'){
            alert('you cant login by this email')
          }
          else{
            alert('Sign Up Sucessful ✔')
            dataArr.push(userObj)
            var stringyformat = JSON.stringify(dataArr) 
            window.localStorage.setItem('dataarr', stringyformat)
            window.location.href = 'login page/login.html'
          }
        
    }
    else{
       if(userObj.Email != 'Moizadmin@gmail.com'){
        alert('Sign Up Sucessful ✔')
        dataArr.push(userObj)
        var stringyformat = JSON.stringify(dataArr) 
        window.localStorage.setItem('dataarr', stringyformat)
         window.location.href = 'login page/login.html'
    }
    else{
      alert('you cant login by this email')
    }
    
}
}
else{
    alert('fill out the form info')
}
}

// Login Form code Start here -->

function logIn(){
    var email2 = document.getElementById('email2').value;
    var password2 = document.getElementById('password2').value;
    var getdatals = JSON.parse(window.localStorage.getItem('dataarr'))
    console.log(getdatals);

    var desh = 'No'       
    if(email2 == 'Moizadmin@gmail.com' && password2 == 'moiz45'){          // Admin Condition
        desh = 'Yes'
         window.location.href = '../Dashboard/dashboard.html'
      }
    if(!getdatals){                  //  Check User  Signup or Not
        alert('go and signUp first')
        window.location.href = '../index.html'
    }
    var decion = false;
    for(var i = 0; i<getdatals.length; i++){              
      if(getdatals[i].Email == email2 && getdatals[i].password == password2){           // Check User Enter a Coorect data
        alert('welcome to the home page')
        window.localStorage.setItem("currentUserObj", JSON.stringify(getdatals[i])); 
        window.location.href = '../Home pages/home.html'
       decion = true
       break;
     }
     else{
       decion = false  
      }
      }
      if(desh == 'Yes'){
        decion = true;
       } 
  if(decion == false){       // User Incoorecrt Data Condition
    alert('Insert a Correct data')
  }
}

// Crousel Code Start

// Crousel Code End

function ProducrtsSea(e){
  var categoryName = e.childNodes[3].innerHTML;
  console.log(categoryName )
  
    if(categoryName == 'Fruits'){
      document.getElementById('Fruitsmaincon').style.display = 'flex'
      document.getElementById('Vegetablesmaincon').style.display = 'none'
      document.getElementById('Drinksmaincon').style.display = 'none'
      document.getElementById('Dryfruitsmaincon').style.display = 'none'
      document.getElementById('Noodlesmaincon').style.display = 'none'
      document.getElementById('Snakesmaincon').style.display = 'none'
    }
    else if(categoryName == 'Vegetables'){
      document.getElementById('Vegetablesmaincon').style.display = 'flex' 
      document.getElementById('Fruitsmaincon').style.display = 'none'
      document.getElementById('Drinksmaincon').style.display = 'none'
      document.getElementById('Dryfruitsmaincon').style.display = 'none'
      document.getElementById('Noodlesmaincon').style.display = 'none'
      document.getElementById('Snakesmaincon').style.display = 'none'
    }
    else if(categoryName == 'Drinks'){
      document.getElementById('Drinksmaincon').style.display = 'flex'
      document.getElementById('Fruitsmaincon').style.display = 'none'
      document.getElementById('Vegetablesmaincon').style.display = 'none' 
      document.getElementById('Dryfruitsmaincon').style.display = 'none'
      document.getElementById('Noodlesmaincon').style.display = 'none'
      document.getElementById('Snakesmaincon').style.display = 'none'
    }
    else if(categoryName == 'Dry Fruits'){
      document.getElementById('Dryfruitsmaincon').style.display = 'flex'
      document.getElementById('Drinksmaincon').style.display = 'none'
      document.getElementById('Fruitsmaincon').style.display = 'none'
      document.getElementById('Vegetablesmaincon').style.display = 'none' 
      document.getElementById('Noodlesmaincon').style.display = 'none'
      document.getElementById('Snakesmaincon').style.display = 'none'
    }
    else if(categoryName == 'Noodles'){
       document.getElementById('Noodlesmaincon').style.display = 'flex'
       document.getElementById('Dryfruitsmaincon').style.display = 'none'
       document.getElementById('Drinksmaincon').style.display = 'none'
       document.getElementById('Fruitsmaincon').style.display = 'none'
       document.getElementById('Vegetablesmaincon').style.display = 'none' 
       document.getElementById('Snakesmaincon').style.display = 'none'
    }
    else if(categoryName == 'Snakes'){
       document.getElementById('Snakesmaincon').style.display = 'flex'
       document.getElementById('Noodlesmaincon').style.display = 'none'
       document.getElementById('Dryfruitsmaincon').style.display = 'none'
       document.getElementById('Drinksmaincon').style.display = 'none'
       document.getElementById('Fruitsmaincon').style.display = 'none'
       document.getElementById('Vegetablesmaincon').style.display = 'none' 
    }
   
}

// responsive navbar function Start

function navOn(){
  var navbar = document.getElementById('responsivenavbarmain');
  navbar.style.display = 'block'
}
function navOf(){
  document.getElementById('responsivenavbarmain').style.display = 'none'

}


// Product Select Function

function productSelect(e){
  document.querySelector('.main-container').style.opacity = 0.5;
  document.getElementById('adtoCard-container').style.display = 'block';
  var getProductCardId = e.parentNode.getAttribute('id');    // Main Card Get id
  var productImgGet = e.parentNode.childNodes[1];
  var productNameGet = e.parentNode.childNodes[3];
  var productPriceGet = e.parentNode.childNodes[5].childNodes[0].nodeValue;
  var productOnlyPrice = productPriceGet.slice(4);
  var productDetailsHalf = e.parentNode.childNodes[7];
  var productDetailsFull = e.parentNode.childNodes[9];
  console.log(productDetailsFull);
  

  var ProductCardIdSet = document.querySelector('.product-card')   // Main Card Set id
      ProductCardIdSet.setAttribute('id',getProductCardId);
  var ProductImgSet = document.getElementById('product-img');
      ProductImgSet.src = productImgGet.src;    
  var ProductNameSet = document.getElementById('ProductName');
      ProductNameSet.innerHTML = productNameGet.innerHTML;
  var ProductPriceSet = document.getElementById('ProductPrice');
      ProductPriceSet.innerHTML = parseInt(productOnlyPrice);
  var ProductDetailsHalf = document.getElementById('Productdetailshalf');
      ProductDetailsHalf.innerHTML = productDetailsHalf.innerHTML;
      var ProductDetailsFull = document.getElementById('Productdetailsfull');
      ProductDetailsFull.innerHTML = productDetailsFull.innerHTML                   
  console.log(ProductPriceSet);
  

// var imgcheck = document.getElementById('adtoCard-container');
// var check = imgcheck.getElementsByTagName('img');
//   if(check.length == 0){
//   var cardImg = e.parentNode.childNodes[1];
//   // console.log(cardImg);
  
//   var cardName = e.parentNode.childNodes[3].innerHTML;
//   var cardPrice = e.parentNode.childNodes[5].childNodes[0].nodeValue;
//   var cardpricenum = cardPrice.slice(4);
//   var cardpricefinalnum = parseInt(cardpricenum)
//   // console.log(cardPrice);
  
//  var carddescrivm = e.parentNode.childNodes[7] || e.parentNode.childNodes[7] || e.parentNode.childNodes[6] ||  e.parentNode.childNodes[5]
//     // var carddescrivm = e.parentNode.childNodes[9]
//  console.log(carddescrivm);
 
//    carddescrivm.style.display = 'block'
//   var cardfulldesvl = e.parentNode.childNodes[9] ||e.parentNode.childNodes[7] || e.parentNode.childNodes[7] || e.parentNode.childNodes[6] ||  e.parentNode.childNodes[5]
//   console.log(carddescrivm);
  

//   var imgConGet = document.getElementById('img-container');
//      var imgElementCre = document.createElement('img')
//      imgElementCre.src = cardImg.src
//      imgElementCre.setAttribute('id', cardpricefinalnum)
//     imgConGet.appendChild(imgElementCre)
  
//   var atctext1 = document.getElementById('atctext1');
//   var h2 = document.createElement('h2')
//    var h2text = document.createTextNode(cardName)   
//    h2.appendChild(h2text)
//    h2.setAttribute('id','proname')
//    atctext1.appendChild(h2) 

//    var atcPrice = document.getElementById('atcPrice');
//    var p1 = document.createElement('p')
//     var p1text = document.createTextNode(cardPrice)   
//     p1.appendChild(p1text)
//     p1.setAttribute('id','proprice')
//     atcPrice.appendChild(p1) 
   
//     var atcplus_minus_box = document.getElementById('plus-minus');  //Plus btn
//     var plusbtn = document.createElement('button');
//     var plusbtntext = document.createTextNode('+');
//     plusbtn.appendChild(plusbtntext);
//     plusbtn.setAttribute('onClick', `Plus(this,${cardpricefinalnum})`)
//     atcplus_minus_box.appendChild(plusbtn)

//     var minusbtn = document.createElement('button');  // Minus Btn
//     var minusbtntext = document.createTextNode('-');
//     minusbtn.appendChild(minusbtntext);
//     minusbtn.setAttribute('onClick', `Minus(this,${cardpricefinalnum})`)
//     atcplus_minus_box.appendChild(minusbtn)

//     var qnmain = document.getElementById('quantityproductsnum')
//       var qn = document.createElement('p');
//       var qntext = document.createTextNode('1');
//       qn.appendChild(qntext)                                       // Qunatity Numbers 
//       qnmain.appendChild(qn)
     
//     var productdetails = document.getElementById('products-details');
//     var ph3 = document.createElement('h3');
//     var ph3text = document.createTextNode('Product Details:');
//     ph3.appendChild(ph3text);
//     productdetails.appendChild(ph3);
//     productdetails.appendChild(carddescrivm)
//     productdetails.appendChild(cardfulldesvl)
// }
// else{
//   var cardImg = e.parentNode.childNodes[1];
//   var imgget =  document.getElementById('img-container');
//   var img = imgget.getElementsByTagName('img')[0];
//   img.src = cardImg.src

//   var productname = document.getElementById('proname');
//   productname.innerText = e.parentNode.childNodes[3].innerHTML;

//   var productprice = document.getElementById('proprice');
//   productprice.innerText = e.parentNode.childNodes[5].childNodes[0].nodeValue;
  
  
// }
}
function viewMore(e){
  // console.log(e.parentNode);
  document.getElementById('Productdetailsfull').style.display = 'block'
  document.getElementById('Productdetailshalf').style.display = 'none'
  
  // var textpar = e.parentNode;    // remove para 
  // var idgettextpera = textpar.getAttribute('id');

  // var showfullpara = e.parentNode.nextSibling;    // Show para 
  //   var showidget = showfullpara.getAttribute('id')
  
  // var halfparads = document.getElementById(idgettextpera).style.display = 'none'
  // var fullparads = document.getElementById(showidget).style.display = 'block'
};

function viewLess(e){
  document.getElementById('Productdetailsfull').style.display = 'none'
  document.getElementById('Productdetailshalf').style.display = 'block'
  // var removetextpare = e.parentNode;    // Remove para get
  // var removeidtextpare = removetextpare.getAttribute('id');
  
  // var showpara = e.parentNode.parentNode.childNodes[1];
  // var showparaid = showpara.getAttribute('id')

  // document.getElementById(removeidtextpare).style.display = 'none'
  // document.getElementById(showparaid).style.display = 'block'

}


function Plus(e){
  // console.log("e" + e);
  // console.log(e.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[1]);  
  
  var numberget = document.getElementById('proqunanumber').innerText;
   ++numberget
  //  console.log(numberget);
   

   if(numberget < 11){   // Not increment  increased after 10 number
     document.getElementById('proqunanumber').innerText = numberget// Print increment number

    var prodPriceget = e.parentNode.previousSibling.previousSibling.childNodes[1];
     var multiply =   prodPriceget.innerText * numberget++
     document.getElementById('updateProductPrice').innerText = multiply;     // Print update Price
     document.getElementById('updateProductPrice').setAttribute('class','top');
    //  prodPriceget.setAttribute('class','opacity')                              // Old Price remove
    document.getElementById('ProductPrice').style.display = 'none'
    // console.log(prodPriceget);
    

  // document.getElementById('ProductPrice').innerText = multplyProdPrice  

     
    //  var newcardpric =  e.parentNode.parentNode.childNodes[9].innerText;
    // //  console.log(newcardpric);
    //  var newfinalcardprice = newcardpric.slice(4)
    //   //  console.log(newfinalcardprice);
       
     
    //    var total =  parseInt(newfinalcardprice) + f
    //     console.log(total);
        
    //    var print =   e.parentNode.parentNode.childNodes[9];
    //    print.innerText = 'Rs. ' + total
        // console.log(print);
        // console.log(e.parentNode.parentNode.childNodes[9]);
        
   }    
  
}
function Minus(e){   
  // console.log("e" + e);
  // console.log(e.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[1]);  
  
  var numberget = document.getElementById('proqunanumber').innerText;
   --numberget
   
  //  console.log(numberget);
   
   if(numberget > 0){   // Not increment  increased after 10 number
     document.getElementById('proqunanumber').innerText = numberget // Print increment number

    var prodPriceget = e.parentNode.previousSibling.previousSibling.childNodes[1];
    var currentTotalprice =  document.getElementById('updateProductPrice')
    
     var Minus = currentTotalprice.innerText -  prodPriceget.innerText 
     currentTotalprice.innerText = Minus;                                      // Print update Price
     currentTotalprice.setAttribute('class','top');
    //  prodPriceget.setAttribute('class','opacity');   
    document.getElementById('ProductPrice').style.display = 'none'                           // Old Price remove
    // console.log();
    }
    
  
  // var numberget = document.getElementById('quantityproductsnum').childNodes[0].innerText;
  // --numberget
  //   if(numberget > 0){     // Not decrement increased after 1 number
  //  document.getElementById('quantityproductsnum').childNodes[0].innerText = numberget   // Print decremnt number
  
  //  var cardPrice =  e.parentNode.parentNode.childNodes[9].innerText;
  // //  console.log(cardPrice);
   
  //  var finalcardPrice = cardPrice.slice(4)
   
  // var total =  parseInt(finalcardPrice) - f
  //  console.log(total);
   
  // var print =   e.parentNode.parentNode.childNodes[9];
  // print.innerText = 'Rs. ' + total
  // //  console.log(print);
  //  }   
}


function adtocardclose(e){
  document.querySelector('.main-container').style.opacity = 1;

  document.getElementById('adtoCard-container').style.display = 'none';
  document.getElementById('updateProductPrice').innerText = ''
  document.getElementById('ProductPrice').style.display = 'block'
  document.getElementById('proqunanumber').innerText = 1;
}

var addtocardArr = JSON.parse(window.localStorage.getItem('addtoCardArr')) || [];
function Addtocardclicked(e){
  var getCurrentUserObjINLs = JSON.parse(window.localStorage.getItem('currentUserObj'));
  var getData = window.localStorage.getItem("dataarr");
  var getParseData = JSON.parse(getData);

 var productId =  e.parentNode.parentNode.childNodes[3].getAttribute('id');
 var productImgSrc = e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].src;
 var productName = e.parentNode.parentNode.childNodes[3].childNodes[3].childNodes[1].childNodes[0].nodeValue;
 var productPrice = e.parentNode.parentNode.childNodes[3].childNodes[7].childNodes[1].childNodes[0].nodeValue;
 var productQuanti = e.parentNode.parentNode.childNodes[3].childNodes[11].childNodes[0].nodeValue;
  // console.log(productImgSrc);

   addtocardArr.push({
    id: productId,
    imgLink : productImgSrc,
    ProName : productName,
    ProPrice : productPrice,
    ProQuanti : productQuanti,
 })
 
 window.localStorage.setItem('addtoCardArr',JSON.stringify(addtocardArr))
 // for(var i = 0; i<getParseData.length; i++){
  //   if (getCurrentUserObjINLs.Email == getParseData[i].Email) {
    //     if (!getParseData[i].Order) {
      //       getParseData[i].Order = [];
      //     }
      //     getParseData[i].Order.push(productObj);
      //     window.localStorage.setItem("dataarr", JSON.stringify(getParseData));
      //     alert('Oder Done ✔')
      //   }
      // }
      
      document.getElementById('adtoCard-container').style.display = 'none';
      document.getElementById('updateProductPrice').innerText = ''
      document.getElementById('ProductPrice').style.display = 'block'
      document.querySelector('.main-container').style.opacity = 1;
      document.getElementById('proqunanumber').innerText = 1
      alert('Add to Card Sucessful');

}


if(window.location.href.indexOf('home.html') != -1){
  var getNameLs = JSON.parse(window.localStorage.getItem('currentUserObj'));
     getNameLs = getNameLs.namee
  var profileNameSet = document.querySelectorAll('.proName');
    profileNameSet[0].innerText = getNameLs;
    profileNameSet[1].innerText = getNameLs;
  }
  // if(window.location.href.indexOf('shop.html') != -1){
  //  var getNameLs = JSON.parse(window.localStorage.getItem('currentUserObj'));
  //    getNameLs = getNameLs.namee
  //    var profileNameSet2 = document.querySelectorAll('.SProname');
  //    profileNameSet2[0].innerText = getNameLs;
  //    profileNameSet2[1].innerText = getNameLs;
  //   var img1 = document.getElementById('img1');  
  //   var img2 = document.getElementById('img2');  
  // } 

function ImgSelect(){
  var img = document.getElementById('Image');
  var img1 = document.getElementById('Image1');
  var inputfile = document.getElementById('Input-url');
  img.src = URL.createObjectURL(inputfile.files[0]);
  img1.src = img.src;
}

//  Add To card Data show By Cards File

if(window.location.href.indexOf('card') != -1){
  var getAddtoCardProduct = JSON.parse(window.localStorage.getItem("addtoCardArr"));
  if(getAddtoCardProduct.length > 0){
    document.getElementById('msg').style.display = 'none'
  }
  else{
    document.getElementById('msg').style.display = 'block'
  }
  var printData = document.getElementById('sl-Secondline-main')
// console.log(getAddtoCardProduct[2].ProPrice);
  var total = 0;
  for (var i = 0; i < getAddtoCardProduct.length; i++) {
    printData.innerHTML += `
      <div class="allLine-flex">
        <div class="Img-and-description-main">
          <img src="${getAddtoCardProduct[i].imgLink}" alt="${getAddtoCardProduct[i].ProName}">
          <h3> ${getAddtoCardProduct[i].ProName} </h3>
        </div>
        <div class="Quantity-and-Price-main">
          <h2 class="Quantity"> ${getAddtoCardProduct[i].ProQuanti}</h2>
          </div>
          <h2 class="Price"> ${getAddtoCardProduct[i].ProPrice} </h2>
        <div class="remove-btns">
          <button class="heart">❤</button>
          <button class="delete" onclick = 'removeAddToCard(this)'>Remove</button>
        </div>
      </div>
    `;
    total += parseInt(getAddtoCardProduct[i].ProPrice)
}
document.getElementById('Total').innerHTML = total;
var afterDisscount ;
var discountPercen ;
if(total >=9000){
   afterDisscount = total * 0.95;
   discountPercen = '5%'
}
else{
  afterDisscount = total * 0.98
  discountPercen = '2%'
}
document.getElementById('discount').innerHTML = discountPercen
document.getElementById('discountafter').innerHTML = afterDisscount;
// console.log(disscount);

}
function removeAddToCard(e){
  var productName = e.parentNode.parentNode.childNodes[1].childNodes[3].innerText;
  var updateArr = []
    // console.log(productName);
    var addtoCardArr = JSON.parse(window.localStorage.getItem('addtoCardArr'));
    for(var i = 0; i<addtoCardArr.length; i++){ 
      if(addtoCardArr[i].ProName != productName){
         updateArr.push(addtoCardArr[i])
      }
    }
    e.productName = e.parentNode.parentNode.remove()
    window.localStorage.setItem('addtoCardArr', JSON.stringify(updateArr));

  var getAddtoCardProduct = JSON.parse(window.localStorage.getItem("addtoCardArr"));

  var total = 0;
    for(var i = 0; i < getAddtoCardProduct.length; i++){
      total += parseInt(getAddtoCardProduct[i].ProPrice)
    }
  document.getElementById('Total').innerHTML = total;
  var afterDisscount  = '0';
  var discountPercen = '0%';
  if(total >=9000){
     afterDisscount = total * 0.95;
     discountPercen = '5%'
  }
  else{
    if(total > 0){
       afterDisscount = total * 0.98
       discountPercen = '2%'
    }
  }
  document.getElementById('discount').innerHTML = discountPercen
  document.getElementById('discountafter').innerHTML = afterDisscount;
  
  if(getAddtoCardProduct.length > 0){
    document.getElementById('msg').style.display = 'none'
  }
  else{
    document.getElementById('msg').style.display = 'block'
  }
}

function Purchase(){
    alert('Order Done');
    var orders =  JSON.parse(window.localStorage.getItem('Orders')) ||  [];
    var getProductsCistomer = JSON.parse(window.localStorage.getItem('addtoCardArr'))
   
    for(var i = 0; i<getProductsCistomer.length; i++){
         orders.push(getProductsCistomer[i]);
    }
    getProductsCistomer.length = '0'
    window.localStorage.setItem('addtoCardArr',JSON.stringify(getProductsCistomer));
    window.localStorage.setItem('Orders',JSON.stringify(orders));

    document.getElementById('msg').style.display = 'block'
    var st = document.querySelectorAll('.allLine-flex')
    for(var j = 0; j<st.length; j++){
        st[j].remove()
    }
   document.getElementById('discountafter').innerHTML = 0;
   document.getElementById('discount').innerHTML = 0;
   document.getElementById('Total').innerHTML = 0;

    
}
// function CustomerDeleteProduct(e){
//   var productName = e.parentNode.childNodes[3].innerText;
//   console.log(productName);
//   var getCurrentUserObjINLs = JSON.parse(window.localStorage.getItem('currentUserObj'));
//   var getData = window.localStorage.getItem("dataarr");
//   var getParseData = JSON.parse(getData);
  
//   for(var i = 0; i<getParseData.length; i++){
//     if(getParseData[i].Email == getCurrentUserObjINLs.Email){
//          for(var j = 0; j < getParseData[i].Order.length;  j++){
//            if(productName == getParseData[i].Order[j].ProName){
//              getParseData[i].Order.splice(j,1);
//              //  console.log(getParseData);
//              window.localStorage.setItem("dataarr", JSON.stringify(getParseData));
//              e.parentNode.style.display = 'none'
//             }
//             // console.log(j);
//           }
//       }
//     } 
   
    
// }


  // Dashboard Start
  if(window.location.href.indexOf('dashboard') != -1){
      var UserData = JSON.parse(window.localStorage.getItem('dataarr'))
      var table = document.getElementById('table');
     for(var i = 0; i<UserData.length; i++){
        table.innerHTML += `
          <tr> 
            <td class = 'sno'> ${i + 1} </td>
            <td class = 'name'> ${UserData[i].namee} </td>
            <td class = 'email'> ${UserData[i].Email} </td>
            <td> <button onclick = 'DeleteUser(this)'> Delete </button> </td>
          </tr>
        `
     }

  var getOrders = JSON.parse(window.localStorage.getItem('Orders'));
  var table = document.getElementById('Order-table');

  for(var i = 0; i<getOrders.length; i++){
    table.innerHTML += `
      <tr> 
        <td> ${getOrders[i].id} </td>
        <td> ${getOrders[i].ProName} </td>
        <td> ${getOrders[i].ProPrice} </td>
        <td> ${getOrders[i].ProQuanti} </td>
      </tr>
    `
    document.getElementById('msg').innerHTML = 'Order List'
    
  }


}
    
  function DeleteUser(e){
      var UserData = JSON.parse(window.localStorage.getItem('dataarr'))
      var deleteuserEmail = e.parentNode.parentNode.childNodes[5].innerText;
    // console.log(deleteuserEmail);
    var table = document.getElementById('table');
    var tr = table.getElementsByTagName('tr');   
    
      for(var i = 0; i < UserData.length; i++){
        if(UserData[i].Email == deleteuserEmail){
           UserData.splice(i,1)
           console.log(UserData);
           window.localStorage.setItem('dataarr',JSON.stringify(UserData));
           tr[i + 1].remove();
        }
      }
      
    }

function dashboardUserData(){
  document.querySelector('.rs2-second-line').style.display = 'block';
  document.querySelector('.right-section3').style.display = 'none';
  document.getElementById('msg').innerHTML = 'Users List'

  // var UserData = JSON.parse(window.localStorage.getItem('dataarr'))
  //     var table = document.getElementById('table');
  //    for(var i = 0; i<UserData.length; i++){
  //       table.innerHTML += `
  //         <tr> 
  //           <td class = 'sno'> ${i + 1} </td>
  //           <td class = 'name'> ${UserData[i].namee} </td>
  //           <td class = 'email'> ${UserData[i].Email} </td>
  //           <td> <button onclick = 'DeleteUser(this)'> Delete </button> </td>
  //         </tr>
  //       `
  //    }

}    
 
function orderDashboard(){
  // var getOrders = JSON.parse(window.localStorage.getItem('Orders'))
  document.querySelector('.rs2-second-line').style.display = 'none';
  document.querySelector('.right-section3').style.display = 'block';

}