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
    if(dataArr.length > 0){
      var chekemailans = true  
       for(var i = 0; i < dataArr.length; i++){
          if(dataArr[i].Email == userObj.Email){
             chekemailans = false;
             break
             }
        }
          if(chekemailans == false){
            alert('you cant login by this email')
          }
          else{
            alert('Sign Up Sucessful ✔')
            dataArr.push(userObj)
            var stringyformat = JSON.stringify(dataArr) 
            window.localStorage.setItem('dataarr', stringyformat)
            window.location.href = '../login page/login.html'
          }
        
    }
    else{
        alert('Sign Up Sucessful ✔')
        dataArr.push(userObj)
        var stringyformat = JSON.stringify(dataArr) 
        window.localStorage.setItem('dataarr', stringyformat)
         window.location.href = '../login page/login.html'
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
    // console.log(getdatals);
    if(!getdatals){
        alert('go and signUp first')
        window.location.href = '../index.html'
    }
   if(getdatals[getdatals.length -1].Email == email2 && getdatals[getdatals.length -1].password == password2){
     alert('welcome to the home page')
     window.location.href = '../Home pages/home.html'
     }
     else{
        alert('insert a correct data')
     }
    
}

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
  var imgcheck = document.getElementById('adtoCard-container');
  var check = imgcheck.getElementsByTagName('img');

  document.getElementById('adtoCard-container').style.display = 'block'
  if(check.length == 0){
  var cardImg = e.parentNode.childNodes[1];
  // console.log(cardImg);
  
  var cardName = e.parentNode.childNodes[3].innerHTML;
  var cardPrice = e.parentNode.childNodes[5].childNodes[0].nodeValue;
  var cardpricenum = cardPrice.slice(4);
  var cardpricefinalnum = parseInt(cardpricenum)
  // console.log(cardPrice);
  
 var carddescrivm = e.parentNode.childNodes[7] || e.parentNode.childNodes[7] || e.parentNode.childNodes[6] ||  e.parentNode.childNodes[5]
    // var carddescrivm = e.parentNode.childNodes[9]
 console.log(carddescrivm);
 
   carddescrivm.style.display = 'block'
  var cardfulldesvl = e.parentNode.childNodes[9] ||e.parentNode.childNodes[7] || e.parentNode.childNodes[7] || e.parentNode.childNodes[6] ||  e.parentNode.childNodes[5]
  console.log(carddescrivm);
  

  var imgConGet = document.getElementById('img-container');
     var imgElementCre = document.createElement('img')
     imgElementCre.src = cardImg.src
     imgElementCre.setAttribute('id', cardpricefinalnum)
    imgConGet.appendChild(imgElementCre)
  
  var atctext1 = document.getElementById('atctext1');
  var h2 = document.createElement('h2')
   var h2text = document.createTextNode(cardName)   
   h2.appendChild(h2text)
   h2.setAttribute('id','proname')
   atctext1.appendChild(h2) 

   var atcPrice = document.getElementById('atcPrice');
   var p1 = document.createElement('p')
    var p1text = document.createTextNode(cardPrice)   
    p1.appendChild(p1text)
    p1.setAttribute('id','proprice')
    atcPrice.appendChild(p1) 
   
    var atcplus_minus_box = document.getElementById('plus-minus');  //Plus btn
    var plusbtn = document.createElement('button');
    var plusbtntext = document.createTextNode('+');
    plusbtn.appendChild(plusbtntext);
    plusbtn.setAttribute('onClick', `Plus(this,${cardpricefinalnum})`)
    atcplus_minus_box.appendChild(plusbtn)

    var minusbtn = document.createElement('button');  // Minus Btn
    var minusbtntext = document.createTextNode('-');
    minusbtn.appendChild(minusbtntext);
    minusbtn.setAttribute('onClick', `Minus(this,${cardpricefinalnum})`)
    atcplus_minus_box.appendChild(minusbtn)

    var qnmain = document.getElementById('quantityproductsnum')
      var qn = document.createElement('p');
      var qntext = document.createTextNode('1');
      qn.appendChild(qntext)                                       // Qunatity Numbers 
      qnmain.appendChild(qn)
     
    var productdetails = document.getElementById('products-details');
    var ph3 = document.createElement('h3');
    var ph3text = document.createTextNode('Product Details:');
    ph3.appendChild(ph3text);
    productdetails.appendChild(ph3);
    productdetails.appendChild(carddescrivm)
    productdetails.appendChild(cardfulldesvl)
}
else{
  var cardImg = e.parentNode.childNodes[1];
  var imgget =  document.getElementById('img-container');
  var img = imgget.getElementsByTagName('img')[0];
  img.src = cardImg.src

  var productname = document.getElementById('proname');
  productname.innerText = e.parentNode.childNodes[3].innerHTML;

  var productprice = document.getElementById('proprice');
  productprice.innerText = e.parentNode.childNodes[5].childNodes[0].nodeValue;
  
  
}
}
function viewMore(e){
  var textpar = e.parentNode;    // remove para 
  var idgettextpera = textpar.getAttribute('id');

  var showfullpara = e.parentNode.nextSibling;    // Show para 
    var showidget = showfullpara.getAttribute('id')
  
  var halfparads = document.getElementById(idgettextpera).style.display = 'none'
  var fullparads = document.getElementById(showidget).style.display = 'block'
};

function viewLess(e){
  var removetextpare = e.parentNode;    // Remove para get
  var removeidtextpare = removetextpare.getAttribute('id');
  
  var showpara = e.parentNode.parentNode.childNodes[1];
  var showparaid = showpara.getAttribute('id')

  document.getElementById(removeidtextpare).style.display = 'none'
  document.getElementById(showparaid).style.display = 'block'

}


function Plus(e,f){
  // console.log(f); 
  var numberget = document.getElementById('quantityproductsnum').childNodes[0].innerText;
   ++numberget

   if(numberget < 11){   // Not increment  increased after 10 number
     document.getElementById('quantityproductsnum').childNodes[0].innerText = numberget// Print increment number

     var newcardpric =  e.parentNode.parentNode.childNodes[9].innerText;
    //  console.log(newcardpric);
     var newfinalcardprice = newcardpric.slice(4)
      //  console.log(newfinalcardprice);
       
     
       var total =  parseInt(newfinalcardprice) + f
        console.log(total);
        
       var print =   e.parentNode.parentNode.childNodes[9];
       print.innerText = 'Rs. ' + total
        // console.log(print);
        // console.log(e.parentNode.parentNode.childNodes[9]);
        
   }    
  
}
function Minus(e,f){   

  var numberget = document.getElementById('quantityproductsnum').childNodes[0].innerText;
  --numberget
    if(numberget > 0){     // Not decrement increased after 1 number
   document.getElementById('quantityproductsnum').childNodes[0].innerText = numberget   // Print decremnt number
  
   var cardPrice =  e.parentNode.parentNode.childNodes[9].innerText;
  //  console.log(cardPrice);
   
   var finalcardPrice = cardPrice.slice(4)
   
  var total =  parseInt(finalcardPrice) - f
   console.log(total);
   
  var print =   e.parentNode.parentNode.childNodes[9];
  print.innerText = 'Rs. ' + total
  //  console.log(print);
   }   
}

function adtocardclose(e){
  // var imgcon = e.parentNode.parentNode.childNodes[3];
  // imgcon.innerHTML = ''
  // var picsname = e.parentNode.parentNode.childNodes[5];
  // picsname.innerHTML = ''
  // var cardprice = e.parentNode.parentNode.childNodes[9];
  // cardprice.innerHTML = ''
  // var plusminus = e.parentNode.parentNode.childNodes[11];
  // plusminus.innerHTML = ''
  // var quantityNumber = e.parentNode.parentNode.childNodes[13];
  // quantityNumber.innerHTML = ''
  // var productdetailsheading = e.parentNode.parentNode.childNodes[17].childNodes[1];
  // console.log(productdetailsheading);
  
  // productdetailsheading.innerHTML = ''

  // var productsinfo = e.parentNode.parentNode.childNodes[17].childNodes[2];
  // console.log(productsinfo);
  
  // var productinfoid = productsinfo.getAttribute('id');
  // console.log(productinfoid);
  
  // document.getElementById(productinfoid).style.display = 'none';

  // var producthalfinfd =  e.parentNode.parentNode.childNodes[17].childNodes[1];
  // var prohalfinfoatt = producthalfinfd.getAttribute('id');
  // console.log(prohalfinfoatt);
  
  //  document.getElementById(prohalfinfoatt).innerHTML = ''
  //  console.log(e.parentNode.parentNode.childNodes[17].childNodes[1]);
  
   
  document.getElementById('adtoCard-container').style.display = 'none'

}

var customerarr = [];
function Addtocardclicked(e){
  alert('Add To Card Sucessful')
  var productimg = e.parentNode.parentNode.childNodes[3].childNodes[0];
  // console.log(productimg);
  
  var productimgid = productimg.getAttribute('id')
  var produname = e.parentNode.parentNode.childNodes[5].innerText;
  var produquanti = e.parentNode.parentNode.childNodes[13].innerText;
  // console.log(produQuantity);

   var customerobj = {
    productName : produname,
    productId : productimgid,
    productQunatity : produquanti
    }
    customerarr.push(customerobj)

console.log(customerarr);
}

