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

//add text to nav bar
const navBar = document.querySelectorAll("nav > a"); //this selects all the a tags
navBar[0].textContent = siteContent.nav["nav-item-1"];
navBar[1].textContent = siteContent.nav["nav-item-2"];
navBar[2].textContent = siteContent.nav["nav-item-3"];
navBar[3].textContent = siteContent.nav["nav-item-4"];
navBar[4].textContent = siteContent.nav["nav-item-5"];
navBar[5].textContent = siteContent.nav["nav-item-6"];

//add new nav links
const blogLink = document.createElement('a'); //creates the a tag somewhere
blogLink.textContent = 'Blog' //changes the text of link
blogLink.href = '#'; //assigns the href
document.querySelector('nav').prepend(blogLink) //takes whatever we are going to pass in and apply it to the back fo the selected area
blogLink.style.color = 'green';

const mysteryLink = document.createElement('a'); //creates the a tag somewhere
mysteryLink.textContent = 'Mystery' //changes the text of link
mysteryLink.href = '#'; //assigns the href
document.querySelector('nav').appendChild(mysteryLink) //takes whatever we are going to pass in and apply it to the back fo the selected area
mysteryLink.style.color = 'green';

//change color of all nav text to green
navBar.forEach(item => item.style.color = 'green');

//add text to header with breaks
const header = document.querySelector(".cta h1");
header.textContent = siteContent["cta"]["h1"];
const str = siteContent["cta"]["h1"].replaceAll(" ", "<br>");
header.innerHTML = str;

//add text to button
const button = document.querySelector(".cta button");
button.textContent = siteContent["cta"]["button"];

//add image to header
const headerImg = document.querySelector("#cta-img");
headerImg.src = siteContent["cta"]["img-src"];


//select the h4's and p's in the top-content
const mainContent = document.querySelector(".main-content");
const topSubtitles = mainContent.querySelectorAll("h4");
const topParagraphs = mainContent.querySelectorAll("p");

//add text to h4s
topSubtitles[0].textContent = siteContent["main-content"]["features-h4"];
topSubtitles[1].textContent = siteContent["main-content"]["about-h4"];
topSubtitles[2].textContent = siteContent["main-content"]["services-h4"];
topSubtitles[3].textContent = siteContent["main-content"]["product-h4"];
topSubtitles[4].textContent = siteContent["main-content"]["vision-h4"];

//add text to ps
topParagraphs[0].textContent = siteContent["main-content"]["features-content"];
topParagraphs[1].textContent = siteContent["main-content"]["about-content"];
topParagraphs[2].textContent = siteContent["main-content"]["services-content"];
topParagraphs[3].textContent = siteContent["main-content"]["product-content"];
topParagraphs[4].textContent = siteContent["main-content"]["vision-content"];

//add img to the main content
const mainImg = document.querySelector("#middle-img");
mainImg.src = siteContent["main-content"]["middle-img-src"];

//select the h4 and all p's in the contact section
const contactHeader = document.querySelector(".contact h4");
const contactParagraphs = document.querySelectorAll(".contact p");

//assign text to h4 and ps
contactHeader.textContent = siteContent["contact"]["contact-h4"];
contactParagraphs[0].textContent = siteContent["contact"]["address"];
//const contactStr = siteContent["contact"]["address"].replaceAll(" ", "<br>");
//contactParagraphs[0].innerHTML = contactStr;
contactParagraphs[1].textContent = siteContent["contact"]["phone"];
contactParagraphs[2].textContent = siteContent["contact"]["email"];

//select footer and assign text to footer

document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];