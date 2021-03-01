var p = document.querySelector('p');

//p.textContent = "new text"; changed the text
//p.innerHTML = "<strong>I'm bold</strong>"; changed inner html

var special = document.querySelector("#special");

var specialA = special.querySelector("a");
specialA.getAttribute("href") // grab the attribute
specialA.setAttribute("href","https://amazon.com") // change the attribute 
