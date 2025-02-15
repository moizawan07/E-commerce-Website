var addtocardArr = JSON.parse(window.localStorage.getItem("addtoCardArr")) || [];
var dataArr = JSON.parse(window.localStorage.getItem("dataarr")) || [
  // agr  dataarr ma abhi tk user nhi aaya to sb se phla admin aajai ga
  {
    namee: "Admin",
    Email: "admin@gmail.com",
    phoneNum: "0547896242",
    password: "admin123",
  },
];

// <------ dataArr push in localstorage abhi sirf admin ka data ha ais ma ------>

window.localStorage.setItem("dataarr", JSON.stringify(dataArr));

// SignUp form code Start here -->

function signUp() {
  var userObj = {
    // users Value Stored
    namee: document.getElementById("Name").value,
    Email: document.getElementById("Email").value,
    phoneNum: document.getElementById("phonenumber").value,
    password: document.getElementById("Password").value,
  };

  if (userObj.namee && userObj.Email && userObj.phoneNum && userObj.password) {
    // Check Uservalue Not be an EMPTY

    if (dataArr.length > 0) {
      // agr user ha to ais kii and new user ki email same na hu
      var chekemailans = true; // flag variable

      for (var i = 0; i < dataArr.length; i++) {
        //  console.log(dataArr[i].Email,userObj.Email);

        if (dataArr[i].Email == userObj.Email) {
          // Check user email
          chekemailans = false; // agr same  ha to false ho ka return hojai ga
          break;
        } else {
          chekemailans = true;
        }
      }
      if (chekemailans == false) {
        // chekemalians agr false ha to mtlb uski email match horhi kisi dosre user see
        Swal.fire({
          // Sweet Alert
          icon: "error",
          title: "Error..",
          text: "This Email is Reserved",
        });
      } else {
        // agr match nhi horhi to user signup hoskta
        Swal.fire({
          title: "Congrats!",
          text: "Sign Up Sucessfully done",
          icon: "success",
        }).then(() => {
          // then ka keyword ais liye use kiya ky condition true hoa he ya alert se phla he redirect kr rha tha dosre page pa
          dataArr.push(userObj);
          var stringyformat = JSON.stringify(dataArr);
          window.localStorage.setItem("dataarr", stringyformat);
          window.location.href = "login page/login.html";
        });
      }
    }
    //     else{
    //       console.log("abhu user nhi ha", dataArr[0].Email);

    //        if(userObj.Email != dataArr[0].Email){
    //         // alert('Sign Up Sucessful ✔')
    //         Swal.fire({
    //           title: "Congrats!",
    //           text: "Sign Up Sucessfully done",
    //           icon: "success"
    //         }).then( () => {                                       // then ka keyword ais liye use kiya ky condition true hoa he ya alert se phla he redirect kr rha tha dosre page pa
    //           dataArr.push(userObj)
    //           var stringyformat = JSON.stringify(dataArr)
    //           window.localStorage.setItem('dataarr', stringyformat)
    //           window.location.href = './login page/login.html'
    //       })
    //         // dataArr.push(userObj)
    //         // var stringyformat = JSON.stringify(dataArr)
    //         // window.localStorage.setItem('dataarr', stringyformat)
    //         //  window.location.href = 'login page/login.html'
    //     }
    //     else{
    //       // alert('you cant login by this email')
    //       Swal.fire({                                          /// Sweet Alert
    //         icon: "error",
    //         title: "Error..",
    //         text: "This Email is Reserved",
    //       });
    //     }

    // }
  } else {
    // Agr user ne form nhi brha to .....
    Swal.fire({
      /// Sweet Alert
      icon: "error",
      title: "Error..",
      text: "Fill Out the form",
    });
  }
}

// Login Form code Start here -->

function logIn() {
  var email2 = document.getElementById("email2").value;
  var password2 = document.getElementById("password2").value;
  var getdatals = JSON.parse(window.localStorage.getItem("dataarr"));
  console.log(getdatals);
  var home = true;

  if (!email2 || !password2) {
    /// Check user ne input fields fill kii ya Nhii
    Swal.fire({
      title: "Error!",
      text: "Fill out the field",
      icon: "error",
    });
  }
   else {
    // agr kr liii to continuee
    
    if ((email2 != getdatals[0].Email && password2 != getdatals[0].password) && getdatals.length < 2) {
      //   <------   Check user ne signUp kiya ya NHI ----->
      Swal.fire({
        /// Sweet Alert
        icon: "error",
        title: "Error..",
        text: "Go & SignUp First",
      }).then(() => {
        window.location.href = "../index.html";
      });
    } else {
      //    <---- Agr Kiya wa signup to ---->

      if (
        getdatals[0].Email === email2 &&
        getdatals[0].password === password2
      ) {
        // agr admin singin kr rha to dashboard pa jao
        Swal.fire({
          title: "Congrats!",
          text: "Welcome to the Dashboard",
          icon: "success",
        }).then(() => {
          window.localStorage.setItem('currentUser', JSON.stringify(getdatals[0]))
          window.location.href = '../Dashboard/dashboard.html'
        });
      } else {
        // agr dosre user kr rhe to yh

        for (var i = 1; i < getdatals.length; i++) {
          console.log(email2,password2);
          console.log(getdatals[i].Email, getdatals[i].password);
          
          
          if (
            getdatals[i].Email === email2 &&
            getdatals[i].password === password2
          ) {
            Swal.fire({
              title: "Congrats!",
              text: "Welcome to the Home page",
              icon: "success",
            }).then((result) => {
              console.log(result);
              
              if (result.isConfirmed) {
                console.log(result.isConfirmed);
                
                window.localStorage.setItem("currentUser", JSON.stringify(getdatals[i]));
                window.location.href = "../Home pages/home.html";
              }
            });
            home = true;
            break;
          }
          else{
             home = false
          }
        }

        // if (home) {
        //   // ye condition jb chale gii jb user ki email and pass same hogii other wisee else chale ga
        //   Swal.fire({
        //     title: "Congrats!",
        //     text: "Welcome to the Home page",
        //     icon: "success",
        //   }).then(() => {
        //     window.location.href = "../Home pages/home.html"
        //     window.localStorage.setItem('currentUser', JSON.stringify(getdatals[0])) 
        //     });
        // } 
        if(!home) {
          Swal.fire({
            title: "Error!",
            text: "Insert a Correct data",
            icon: "error",
          });
        }
      }
    }
  }
}

//               <------   OLD LOGIN CODEEE   ------->

// if(email2 == 'admin@gmail.com' && password2 == 'admin123'){          // Admin Condition
//      desh = 'Yes'
//      window.location.href = '../Dashboard/dashboard.html'
//   }
//     else{   // agr user admin na hu to us ka liye baqi sare conditions
//     if(getdatals.length < 1){                  //  Check User  Signup or Not
//         // alert('go and signUp first')
//         Swal.fire({                                          /// Sweet Alert
//           icon: "error",
//           title: "Error..",
//           text: "Go & signUp",
//         }).then( () => {window.location.href = '../index.html'})
//         // window.location.href = '../index.html'
//     }
//     var decion = false;
//     for(var i = 0; i<getdatals.length; i++){
//       if(getdatals[i].Email == email2 && getdatals[i].password == password2){           // Check User Enter a Coorect data
//         // alert('welcome to the home page')
//         Swal.fire({
//           title: "Congrats!",
//           text: "Welcome to the home page",
//           icon: "success",
//         })
//         .then( () => {
//           window.localStorage.setItem("currentUserObj", JSON.stringify(getdatals[i]));
//           window.location.href = '../Home pages/home.html'
//         });
//         decion = true
//         break;
//         // window.localStorage.setItem("currentUserObj", JSON.stringify(getdatals[i]));
//         // window.location.href = '../Home pages/home.html'
//       //  decion = true
//       //  break;
//      }
//      else{
//        decion = false
//       }
//       }
//       if(desh == 'Yes'){
//         decion = true;
//        }
//   if(decion == false){                         // User Incoorecrt Data Condition
//     // alert('Insert a Correct data');
//     Swal.fire({                                          /// Sweet Alert
//       icon: "error",
//       title: "Error..",
//       text: "Insert a Correct data",
//     });
//   }
// }}

// Silderbar Code Start

if (window.location.href.indexOf("shop") != -1) {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const bullets = document.querySelectorAll(".bullet-btn");
  const totalSlides = slides.length;

  function showSlide(index) {
    if (index >= totalSlides) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = index;
    }

    // Move the slider to the correct slide
    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update the active bullet
    bullets.forEach((bullet) => bullet.classList.remove("active"));
    bullets[currentSlide].classList.add("active");
  }

  // Automatic slide change every 3 seconds
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 3000);

  // Bullet navigation
  bullets.forEach((bullet) => {
    bullet.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.slide);
      showSlide(index);
    });
  });

  // Initialize the first slide
  showSlide(currentSlide);
}
// Silderbar Code End

// User SelectProduct

function ProducrtsSea(e) {
  var categoryName = e.childNodes[3].innerHTML;
  // console.log(categoryName )

  if (categoryName == "Fruits") {
    document.getElementById("Fruitsmaincon").style.display = "flex";
    document.getElementById("Vegetablesmaincon").style.display = "none";
    document.getElementById("Drinksmaincon").style.display = "none";
    document.getElementById("Dryfruitsmaincon").style.display = "none";
    document.getElementById("Noodlesmaincon").style.display = "none";
    document.getElementById("Snakesmaincon").style.display = "none";
  } else if (categoryName == "Vegetables") {
    document.getElementById("Vegetablesmaincon").style.display = "flex";
    document.getElementById("Fruitsmaincon").style.display = "none";
    document.getElementById("Drinksmaincon").style.display = "none";
    document.getElementById("Dryfruitsmaincon").style.display = "none";
    document.getElementById("Noodlesmaincon").style.display = "none";
    document.getElementById("Snakesmaincon").style.display = "none";
  } else if (categoryName == "Drinks") {
    document.getElementById("Drinksmaincon").style.display = "flex";
    document.getElementById("Fruitsmaincon").style.display = "none";
    document.getElementById("Vegetablesmaincon").style.display = "none";
    document.getElementById("Dryfruitsmaincon").style.display = "none";
    document.getElementById("Noodlesmaincon").style.display = "none";
    document.getElementById("Snakesmaincon").style.display = "none";
  } else if (categoryName == "Dry Fruits") {
    document.getElementById("Dryfruitsmaincon").style.display = "flex";
    document.getElementById("Drinksmaincon").style.display = "none";
    document.getElementById("Fruitsmaincon").style.display = "none";
    document.getElementById("Vegetablesmaincon").style.display = "none";
    document.getElementById("Noodlesmaincon").style.display = "none";
    document.getElementById("Snakesmaincon").style.display = "none";
  } else if (categoryName == "Noodles") {
    document.getElementById("Noodlesmaincon").style.display = "flex";
    document.getElementById("Dryfruitsmaincon").style.display = "none";
    document.getElementById("Drinksmaincon").style.display = "none";
    document.getElementById("Fruitsmaincon").style.display = "none";
    document.getElementById("Vegetablesmaincon").style.display = "none";
    document.getElementById("Snakesmaincon").style.display = "none";
  } else if (categoryName == "Snakes") {
    document.getElementById("Snakesmaincon").style.display = "flex";
    document.getElementById("Noodlesmaincon").style.display = "none";
    document.getElementById("Dryfruitsmaincon").style.display = "none";
    document.getElementById("Drinksmaincon").style.display = "none";
    document.getElementById("Fruitsmaincon").style.display = "none";
    document.getElementById("Vegetablesmaincon").style.display = "none";
  }
}

// responsive navbar function Start

function navOn() {
  var navbar = document.getElementById("responsivenavbarmain");
  navbar.style.display = "block";
}
function navOf() {
  document.getElementById("responsivenavbarmain").style.display = "none";
}

// Product Select Function

function productSelect(e) {
  // document.querySelector('.main-container').style.opacity = 0.5;
  document.querySelector(".background-blur").style.display = "block"; // Background blur ON krwa rha

  document.getElementById("adtoCard-container").style.display = "block";
  document.getElementById("adtoCard-container").style.zIndex = "10000";
  var getProductCardId = e.parentNode.getAttribute("id"); // Main Card Get id
  var productImgGet = e.parentNode.childNodes[1];
  var productNameGet = e.parentNode.childNodes[3];
  var productPriceGet = e.parentNode.childNodes[5].childNodes[0].nodeValue;
  var productOnlyPrice = productPriceGet.slice(4);
  var productDetailsHalf = e.parentNode.childNodes[7];
  var productDetailsFull = e.parentNode.childNodes[9];
  // console.log(productDetailsFull);

  var ProductCardIdSet = document.querySelector(".product-card"); // Main Card Set id
  ProductCardIdSet.setAttribute("id", getProductCardId);
  var ProductImgSet = document.getElementById("product-img");
  ProductImgSet.src = productImgGet.src;
  var ProductNameSet = document.getElementById("ProductName");
  ProductNameSet.innerHTML = productNameGet.innerHTML;
  var ProductPriceSet = document.getElementById("ProductPrice");
  ProductPriceSet.innerHTML = parseInt(productOnlyPrice);
  var ProductDetailsHalf = document.getElementById("Productdetailshalf");
  ProductDetailsHalf.innerHTML = productDetailsHalf.innerHTML;
  var ProductDetailsFull = document.getElementById("Productdetailsfull");
  ProductDetailsFull.innerHTML = productDetailsFull.innerHTML;
  // console.log(ProductPriceSet);
  //
  var price = e.parentNode.childNodes[5].childNodes[0].nodeValue;
  var finalP = parseInt(price.slice(3));
  document.getElementById("updateProductPrice").innerText = finalP;
  //  console.log(finalP);

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
function viewMore(e) {
  // console.log(e.parentNode);
  document.getElementById("Productdetailsfull").style.display = "block";
  document.getElementById("Productdetailshalf").style.display = "none";

  // var textpar = e.parentNode;    // remove para
  // var idgettextpera = textpar.getAttribute('id');

  // var showfullpara = e.parentNode.nextSibling;    // Show para
  //   var showidget = showfullpara.getAttribute('id')

  // var halfparads = document.getElementById(idgettextpera).style.display = 'none'
  // var fullparads = document.getElementById(showidget).style.display = 'block'
}

function viewLess(e) {
  document.getElementById("Productdetailsfull").style.display = "none";
  document.getElementById("Productdetailshalf").style.display = "block";
  // var removetextpare = e.parentNode;    // Remove para get
  // var removeidtextpare = removetextpare.getAttribute('id');

  // var showpara = e.parentNode.parentNode.childNodes[1];
  // var showparaid = showpara.getAttribute('id')

  // document.getElementById(removeidtextpare).style.display = 'none'
  // document.getElementById(showparaid).style.display = 'block'
}

function Plus(e) {
  var numberget = document.getElementById("proqunanumber").innerText;
  ++numberget;
  //  console.log(numberget);

  if (numberget < 11) {
    // Not increment  increased after 10 number
    document.getElementById("proqunanumber").innerText = numberget; // Print increment number

    var prodPriceget =
      e.parentNode.previousSibling.previousSibling.childNodes[1];
    var multiply = prodPriceget.innerText * numberget++;
    document.getElementById("updateProductPrice").innerText = multiply; // Print update Price
    document.getElementById("updateProductPrice").setAttribute("class", "top");
    //  prodPriceget.setAttribute('class','opacity')                              // Old Price remove
    document.getElementById("ProductPrice").style.display = "none";
    document.getElementById("updateProductPrice").style.display = "block"; // New Price Show
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
function Minus(e) {
  // console.log("e" + e);
  // console.log(e.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[1]);

  var numberget = document.getElementById("proqunanumber").innerText;
  --numberget;

  //  console.log(numberget);

  if (numberget > 0) {
    // Not increment  increased after 10 number
    document.getElementById("proqunanumber").innerText = numberget; // Print increment number

    var prodPriceget =
      e.parentNode.previousSibling.previousSibling.childNodes[1];
    var currentTotalprice = document.getElementById("updateProductPrice");

    var Minus = currentTotalprice.innerText - prodPriceget.innerText;
    currentTotalprice.innerText = Minus; // Print update Price
    currentTotalprice.setAttribute("class", "top");
    //  prodPriceget.setAttribute('class','opacity');
    document.getElementById("ProductPrice").style.display = "none"; // Old Price remove
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

function adtocardclose(e) {
  document.querySelector(".main-container").style.opacity = 1;

  document.getElementById("adtoCard-container").style.display = "none";
  document.getElementById("updateProductPrice").innerText = "";
  document.getElementById("ProductPrice").style.display = "block";
  document.getElementById("proqunanumber").innerText = 1;

  document.querySelector(".background-blur").style.display = "none"; // Background blur krwa rha
  document.getElementById("updateProductPrice").style.display = "none"; // New Price Show
}

// var addtocardArr = JSON.parse(window.localStorage.getItem("addtoCardArr")) || [];

function Addtocardclicked(e) {
  var getCurrentUserObjINLs = JSON.parse(
    window.localStorage.getItem("currentUserObj")
  );
  var getData = window.localStorage.getItem("dataarr");
  var getParseData = JSON.parse(getData);

  var productId = e.parentNode.parentNode.childNodes[3].getAttribute("id");
  var productImgSrc =
    e.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].src;
  var productName =
    e.parentNode.parentNode.childNodes[3].childNodes[3].childNodes[1]
      .childNodes[0].nodeValue;
  var productPrice =
    e.parentNode.parentNode.childNodes[3].childNodes[7].childNodes[3]
      .childNodes[0].nodeValue;
  var productQuanti =
    e.parentNode.parentNode.childNodes[3].childNodes[11].childNodes[0]
      .nodeValue;
  document.getElementById("updateProductPrice").style.display = "none"; // New Price Show

  // console.log(productPrice);

  addtocardArr.push({
    id: productId,
    imgLink: productImgSrc,
    ProName: productName,
    ProPrice: productPrice,
    ProQuanti: productQuanti,
  });

  window.localStorage.setItem("addtoCardArr", JSON.stringify(addtocardArr));
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

  document.getElementById("adtoCard-container").style.display = "none";
  document.getElementById("updateProductPrice").innerText = "";
  document.getElementById("ProductPrice").style.display = "block";
  document.getElementById("proqunanumber").innerText = 1;
  // document.querySelector('.main-container').style.opacity = 1;
  document.querySelector(".background-blur").style.display = "none"; // Background blur OFF krwa rha

  //    User Item Counter On Top Icon

  let itemCount = document.querySelector(".itemCounter p");
  itemCount.classList.add("show");
  let num = Number(itemCount.innerText);
  itemCount.innerText = ++num;

  // itemCount.innerText = parseInt(itemCount) + 1
  // console.log(itemCount);

  // alert('Add to Card Sucessful');
  Swal.fire({
    title: "Yahoo..!",
    text: "Add to Card Sucessfully done",
    icon: "success",
  });
}

function userCardItems() {
  let itemCount = document.querySelector(".itemCounter p");
  itemCount.classList.remove("show");
  itemCount.innerText = "";
  // console.log(itemCount);
  window.location.href = "./card.html";
}

// if(window.location.href.indexOf('home') != -1){
//   console.log(window.location.href);

//   var getNameLs = JSON.parse(window.localStorage.getItem('currentUserObj'));
//      getNameLs = getNameLs.namee
//   var profileNameSet = document.querySelectorAll('.proName');
//     profileNameSet[0].innerText = getNameLs;
//     profileNameSet[1].innerText = getNameLs;
// }

function ImgSelect() {
  var img = document.getElementById("Image");
  var img1 = document.getElementById("Image1");
  var inputfile = document.getElementById("Input-url");
  img.src = URL.createObjectURL(inputfile.files[0]);
  img1.src = img.src;
}

//  Add To card Data show By Cards File

if (window.location.href.indexOf("card") != -1) {
  var getAddtoCardProduct = JSON.parse(
    window.localStorage.getItem("addtoCardArr")
  );
  if (getAddtoCardProduct.length > 0) {
    document.getElementById("msg").style.display = "none";
  } else {
    document.getElementById("msg").style.display = "block";
  }
  var printData = document.getElementById("sl-Secondline-main");
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
    total += parseInt(getAddtoCardProduct[i].ProPrice);
  }
  document.getElementById("Total").innerHTML = total;
  var afterDisscount;
  var discountPercen;
  if (total >= 9000) {
    afterDisscount = total * 0.95;
    discountPercen = "5%";
  } else {
    afterDisscount = total * 0.98;
    discountPercen = "2%";
  }
  document.getElementById("discount").innerHTML = discountPercen;
  document.getElementById("discountafter").innerHTML = afterDisscount;
  // console.log(disscount);
}
function removeAddToCard(e) {
  var productName =
    e.parentNode.parentNode.childNodes[1].childNodes[3].innerText;
  var updateArr = [];
  // console.log(productName);
  var addtoCardArr = JSON.parse(window.localStorage.getItem("addtoCardArr"));
  for (var i = 0; i < addtoCardArr.length; i++) {
    if (addtoCardArr[i].ProName != productName) {
      updateArr.push(addtoCardArr[i]);
    }
  }
  Swal.fire({
    /// Sweet Alert
    icon: "error",
    title: "Alert..",
    text: "Remove from your card",
  }).then(() => {
    e.productName = e.parentNode.parentNode.remove();
  });
  window.localStorage.setItem("addtoCardArr", JSON.stringify(updateArr));

  var getAddtoCardProduct = JSON.parse(
    window.localStorage.getItem("addtoCardArr")
  );

  var total = 0;
  for (var i = 0; i < getAddtoCardProduct.length; i++) {
    total += parseInt(getAddtoCardProduct[i].ProPrice);
  }
  document.getElementById("Total").innerHTML = total;
  var afterDisscount = "0";
  var discountPercen = "0%";
  if (total >= 9000) {
    afterDisscount = total * 0.95;
    discountPercen = "5%";
  } else {
    if (total > 0) {
      afterDisscount = total * 0.98;
      discountPercen = "2%";
    }
  }
  document.getElementById("discount").innerHTML = discountPercen;
  document.getElementById("discountafter").innerHTML = afterDisscount;

  if (getAddtoCardProduct.length > 0) {
    document.getElementById("msg").style.display = "none";
  } else {
    document.getElementById("msg").style.display = "block";
  }
}

function Purchase() {
  // alert('Order Done');
  var orders = JSON.parse(window.localStorage.getItem("Orders")) || [];
  var getProductsCistomer = JSON.parse(
    window.localStorage.getItem("addtoCardArr")
  );

  for (var i = 0; i < getProductsCistomer.length; i++) {
    orders.push(getProductsCistomer[i]);
  }
  getProductsCistomer.length = "0";
  window.localStorage.setItem(
    "addtoCardArr",
    JSON.stringify(getProductsCistomer)
  );
  window.localStorage.setItem("Orders", JSON.stringify(orders));

  var st = document.querySelectorAll(".allLine-flex");
  Swal.fire({
    /// Sweet Alert
    icon: "success",
    title: "Yahooo..",
    text: "Order Sucessfully Done",
  }).then(() => {
    document.getElementById("msg").style.display = "block";
    for (var j = 0; j < st.length; j++) {
      st[j].remove();
    }
    document.getElementById("discountafter").innerHTML = 0;
    document.getElementById("discount").innerHTML = 0;
    document.getElementById("Total").innerHTML = 0;
  });
  //   document.getElementById('msg').style.display = 'block'
  //   for(var j = 0; j<st.length; j++){
  //       st[j].remove()
  //   }
  //  document.getElementById('discountafter').innerHTML = 0;
  //  document.getElementById('discount').innerHTML = 0;
  //  document.getElementById('Total').innerHTML = 0;
}

// Dashboard Start
if (window.location.href.indexOf("dashboard") != -1) {
  var UserData =  JSON.parse(window.localStorage.getItem("dataarr"));
  var table = document.getElementById("table");
  for (var i = 0; i < UserData.length; i++) {
    table.innerHTML += `
          <tr> 
            <td class = 'sno'> ${i + 1} </td>
            <td class = 'name'> ${UserData[i].namee} </td>
            <td class = 'email'> ${UserData[i].Email} </td>
            <td class='delete'><i  onclick = 'DeleteUser(this)' class="fa-solid fa-trash-can"></i> </td>
            <td class='edit'> <i onclick='editUser(this)' class="fa-solid fa-pencil"></i> </td>
          </tr>
        `;
  }

  var getOrders = JSON.parse(window.localStorage.getItem("Orders")) || '';  // agr user na abhi tk kuch purchase nhi kiya too
  var table = document.getElementById("Order-table");

  for (var i = 0; i < getOrders.length; i++) {
    table.innerHTML += `
      <tr> 
        <td> <img src=${getOrders[i].imgLink} alt="Cardpic"> </td>
        <td> ${getOrders[i].id} </td>
        <td> ${getOrders[i].ProName} </td>
        <td> ${getOrders[i].ProPrice} </td>
        <td> ${getOrders[i].ProQuanti} </td>
        <td onClick ='orderRemove(this)'> <i class="fa-solid fa-trash orderRemove"></i></td>
      </tr>
    `;
    document.getElementById("msg").innerHTML = "Order List";
  }
}

function DeleteUser(e) {
  var UserData = JSON.parse(window.localStorage.getItem("dataarr"));
  var deleteuserEmail = e.parentNode.parentNode.childNodes[5].innerText;
  // console.log(deleteuserEmail);
  var table = document.getElementById("table");
  var tr = table.getElementsByTagName("tr");

  for (var i = 0; i < UserData.length; i++) {
    if (UserData[i].Email == deleteuserEmail) {
      UserData.splice(i, 1);
      console.log(UserData);
      window.localStorage.setItem("dataarr", JSON.stringify(UserData));
      tr[i + 1].remove();
    }
  }
}

function editUser(e){
  let usersArr = JSON.parse(window.localStorage.getItem('dataarr'))
 let nameHtml = document.querySelectorAll('.name');
 let emailHtml = document.querySelectorAll('.email');

  let userOldInfo = {
    name : e.parentNode.parentNode.childNodes[3].innerText,
    email : e.parentNode.parentNode.childNodes[5].innerText,
  }

  let newUserInfo = {
    name : prompt('Update a name..?',userOldInfo.name),
    email : prompt('Update a email..?',userOldInfo.email)
  }

  if(newUserInfo.name && newUserInfo.email){

  usersArr.forEach((item) => {            /// This loop Changed The update the object of an array
    if(item.namee === userOldInfo.name){
       item.namee = newUserInfo.name
       item.Email = newUserInfo.email
    }
  })

   nameHtml.forEach((namee) => {         /// This loop Changed also user name value in html
      if(namee.innerText === userOldInfo.name){
       namee.innerText = newUserInfo.name
      }
   })
   emailHtml.forEach((email) => {           /// This loop Changed also user email value in html
      if(email.innerText === userOldInfo.email){
       email.innerText = newUserInfo.email
      }
   })

}else{
  alert(' Emptyyy Value cant Edit \n Enter a Value....')
}
 
window.localStorage.setItem('dataarr', JSON.stringify(usersArr)) 

}

function orderRemove(e) {
  let table = document.getElementById("Order-table");
  let tr = table.getElementsByTagName("tr");

  let ordersArr = JSON.parse(window.localStorage.getItem("Orders"));
  let removeId = e.parentNode.childNodes[3].innerText;
  
  let afterRemoveItemArr = [];
  for (let i = 0; i < ordersArr.length; i++) {
    if (ordersArr[i].id != removeId) {
      afterRemoveItemArr.push(ordersArr[i]);
    } else {
      tr[i + 1].remove();
    }
  }

  window.localStorage.setItem("Orders", JSON.stringify(afterRemoveItemArr));
}

function dashboardUserData() {
  document.querySelector(".rs2-second-line").style.display = "block";
  document.querySelector(".right-section3").style.display = "none";
}

function orderDashboard() {
  document.querySelector(".rs2-second-line").style.display = "none";
  document.querySelector(".right-section3").style.display = "block";
}
function dashboardSidebar() {
  var con = document.querySelector(".left-main-con");
  var con2 = document.querySelector(".right-main-con");
  var final = window.getComputedStyle(con);
  if (final.display == "block") {
    con.style.display = "none";
    con2.style.width = "100%";
  } else {
    con.style.display = "block";
    con2.style.width = "90%";
  }
}

//  Filter user and Orders List by 

function filterUserOrders() {

  var inputValue = document.getElementById("Serching").value.replace(/\s/g, "");
  var table1 = document.querySelector(".rs2-second-line");
  var table2 = document.querySelector(".right-section3");
  var tableSearchingUl;

    //   yh condition se pta lga rha ma ka ka abhi userlist table dekh rha ya ma order table ma
 
  if(window.getComputedStyle(table1).display === 'block'){
    tableSearchingUl = document.getElementById('table')
  }
  else{
    tableSearchingUl = document.getElementById('Order-table')
  }

  let trs = tableSearchingUl.getElementsByTagName("tr")
 
    for(var i = 1; i<trs.length ; i++){
     
      let td = trs[i].getElementsByTagName('td')[1].innerText.toLowerCase()
     
      console.log(td.indexOf(inputValue.toLowerCase()));
      

      if(td.indexOf(inputValue.toLowerCase()) != -1){
        trs[i].style.display = ''
      }
      else{
        trs[i].style.display = 'none'
      }
      
      
    }
  
  
 
  
 
}


function themeChanged(){
 let themeIcon = document.querySelector('#theme_icon');
 themeIcon.className = 'fa-solid fa-moon'
 let header = document.querySelector('#dash_header')
     header.style.backgroundColor = 'White'
}


