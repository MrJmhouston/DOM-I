const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//cta img src
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

// cta-text
let hOneCta = document.getElementsByTagName('h1')[0];
hOneCta.setAttribute('id', 'ctah1');

document.getElementById('ctah1').innerText = siteContent["cta"]["h1"];

let brCta = document.createElement("BR");
brCta.setAttribute("id", "myBr");


//cta button
let buttCta = document.getElementsByTagName('button')[0];
buttCta.setAttribute('id', 'ctaButt');

document.getElementById('ctaButt').innerText = siteContent['cta']['button'];

// middle img src
let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);


// navigation
let navOne = document.getElementsByTagName("a")[0];
navOne.setAttribute('id','firstNav');
document.getElementById("firstNav").text = siteContent["nav"]["nav-item-1"];
firstNav.style.color = "green";

let navTwo = document.getElementsByTagName("a")[1];
navTwo.setAttribute("id", "secondNav");
document.getElementById("secondNav").text = siteContent["nav"]["nav-item-2"];
secondNav.style.color = "green";

let navThree = document.getElementsByTagName("a")[2];
navThree.setAttribute("id", "thirdNav");
document.getElementById("thirdNav").text = siteContent["nav"]["nav-item-3"];
thirdNav.style.color = "green";

let navFour = document.getElementsByTagName("a")[3];
navFour.setAttribute("id", "fourthNav");
document.getElementById("fourthNav").text = siteContent["nav"]["nav-item-4"];
fourthNav.style.color = "green";

let navFive = document.getElementsByTagName("a")[4];
navFive.setAttribute("id", "fifthNav");
document.getElementById("fifthNav").text = siteContent["nav"]["nav-item-5"];
fifthNav.style.color = "green";

let navSix = document.getElementsByTagName("a")[5];
navSix.setAttribute("id", "sixthNav");
document.getElementById("sixthNav").text = siteContent["nav"]["nav-item-6"];
sixthNav.style.color = "green";


let navId = document.getElementsByTagName("nav")[0];
navId.setAttribute('id', 'navNav');

function addNavA() {
  let addNavOne = document.createElement('A');
  let addNavOneText = document.createTextNode("Balls");
  addNavOne.prepend(addNavOneText);
  document.getElementById('navNav').prepend(addNavOne);
  addNavOne.style.color = "green";
}
addNavA()

function addNavATwo() {
  let addNavOne = document.createElement("A");
  let addNavOneText = document.createTextNode("DOM");
  addNavOne.appendChild(addNavOneText);
  document.getElementById("navNav").appendChild(addNavOne);
  addNavOne.style.color = "green";
}
addNavATwo();


// Main Content
//Features
let topLeft = document.getElementsByTagName('h4')[0];
topLeft.setAttribute('id', 'featHead');

document.getElementById("featHead").innerText = siteContent["main-content"]["features-h4"];

let topLeftP = document.getElementsByTagName("p")[0];
topLeftP.setAttribute("id", "featHeadP");

document.getElementById("featHeadP").innerText =
siteContent["main-content"]["features-content"];

//About
let topRight = document.getElementsByTagName("h4")[1];
topRight.setAttribute("id", "aboutHead");

document.getElementById("aboutHead").innerText =
siteContent["main-content"]["about-h4"];

let topRightP = document.getElementsByTagName("p")[1];
topRightP.setAttribute("id", "aboutHeadP");

document.getElementById("aboutHeadP").innerText =
siteContent["main-content"]["about-content"];


//Services
 let bottLeft = document.getElementsByTagName("h4")[2];
 bottLeft.setAttribute("id", "servHead");

 document.getElementById("servHead").innerText =
 siteContent["main-content"]["services-h4"];

 let bottLeftP = document.getElementsByTagName("p")[2];
 bottLeftP.setAttribute("id", "servHeadP");

 document.getElementById("servHeadP").innerText =
 siteContent["main-content"]["services-content"];

//Product
 let bottMid = document.getElementsByTagName("h4")[3];
 bottMid.setAttribute("id", "prodHead");

 document.getElementById("prodHead").innerText =
 siteContent["main-content"]["product-h4"];

 let bottMidP = document.getElementsByTagName("p")[3];
 bottMidP.setAttribute("id", "prodHeadP");

 document.getElementById("prodHeadP").innerText =
 siteContent["main-content"]["product-content"];


//Vision
 let bottRight = document.getElementsByTagName("h4")[4];
 bottRight.setAttribute("id", "visHead");

 document.getElementById("visHead").innerText =
  siteContent["main-content"]["vision-h4"];

 let bottRightP = document.getElementsByTagName("p")[4];
 bottRightP.setAttribute("id", "visHeadP");

 document.getElementById("visHeadP").innerText =
 siteContent["main-content"]["vision-content"];

 //Contact
let conH = document.getElementsByTagName("h4")[5];
conH.setAttribute("id", "conHead");

document.getElementById("conHead").innerText =
siteContent["contact"]["contact-h4"];

let conAddP = document.getElementsByTagName("p")[5];
conAddP.setAttribute("id", "addP");

document.getElementById("addP").innerText =
siteContent["contact"]["address"];

let conPhoP = document.getElementsByTagName("p")[6];
conPhoP.setAttribute("id", "phoP");

document.getElementById("phoP").innerText = siteContent["contact"]["phone"];

let conEmaP = document.getElementsByTagName("p")[6];
conPhoP.setAttribute("id", "emaP");

document.getElementById("emaP").innerText = siteContent["contact"]["email"];

//footer

let footerP = document.getElementsByTagName("p")[7];
footerP.setAttribute("id", "cpr");

document.getElementById("cpr").innerText = siteContent["footer"]["copyright"];