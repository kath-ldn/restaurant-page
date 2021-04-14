(()=>{"use strict";var e={917:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(645),i=n.n(o)()((function(e){return e[1]}));i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const a=i},28:(e,t,n)=>{n.d(t,{Z:()=>x});var o=n(645),i=n.n(o),a=n(667),r=n.n(a),d=n(837),s=n(797),c=n(809),l=n(544),p=n(950),u=i()((function(e){return e[1]})),m=r()(d),h=r()(s),g=r()(c),b=r()(l),f=r()(p);u.push([e.id,"/* Body & header styles */\nbody {\n    font-family: 'Montserrat', sans-serif;\n}\n\nheader{\n    width: 100vw;\n    height: 18vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nh1{\n    font-size: 46px;\n    padding: 20px;\n    letter-spacing: 4px;\n}\n\n#headerLogo:hover{\n    cursor: pointer;\n    transition: ease-in 0.5s;\n    font-weight: 500;\n}\n\nnav{\n    width:60vw;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.hamburgerContainer{\n    display: none;\n}\n\n.headerButton{\n    background: none;\n    border:none;\n    border-radius: none;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 20px;\n    padding: 2px;\n}\n\n.headerButton:hover{\n    font-weight: 500;\n    font-size: 21px;\n    padding: 0;\n    cursor: pointer;\n    transition: ease-in 0.5s;\n}\n/* home styles */\n#home-img{\n    width: 100vw;\n    height: 82vh;\n    overflow: none;\n    background: url("+m+") no-repeat;\n    background-position: 50% 20%;\n    background-size: cover;\n    display: flex;\n    align-items: center;\n}\n\n#homeTagDiv{\n    background: rgba(0, 0, 0, 0.5);\n    width: 300px;\n    margin: 0 0 5% 8%;\n}\n\n#homeTagLine{\n    color: #FFF;\n    opacity: 100%;\n    font-size: 18px;\n    letter-spacing: 4px;\n    line-height: 32px;\n    padding: 10px;\n}\n\n.popUpAd{\n    transition: ease-in 1s;\n    position: fixed;\n    bottom: 0;\n    width: 100vw;\n    opacity: 80%;\n    background-color: rgb(190, 62, 62);\n    border-radius: 2px;\n}\n\n.popUpAdText{\n    color: #FFF;\n    opacity: 100%;\n    font-size: 1em;\n    letter-spacing: 2px;\n    line-height: 26px;\n    padding: 0 15px 15px 15px;\n    text-align: center;\n}\n\n.popUpAdText:hover{\n    opacity: 60%;\n    cursor: pointer;\n}\n\n.popUpAdClose{\n    color: #FFF;\n    margin: 5px 0 0 10px;\n    text-align: center;\n    width: fit-content;\n    font-weight: bold;\n    font-size: 16px;\n}\n\n.popUpAdClose:hover{\n    cursor: pointer;\n    opacity: 50%;\n}\n/* Generic page styles */\n\n.pageContainer{\n    display: flex;\n    width: 100vw;\n    height: 82vh;\n    transition: ease-in 1s;\n}\n\n.pageTextContainer{\n    width: 50%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 5% 5% 7% 5%;\n    box-sizing: border-box;\n}\n\nh3{\n    text-align: center;\n    font-size: 24px;\n    font-weight: 500;\n    margin-bottom: 10%;\n    line-height: 1.5;\n}\n\np{\n    text-align: center;\n    font-size: 18px;\n    padding-bottom: 7%;\n    line-height: 1.5;\n}\n\n.pageImg{\n    width: 50%;\n    height: 100%;\n}\n\n.selectedPageStyle{\n    font-weight: 500;\n    text-decoration: underline;\n    font-size: 21px;\n    padding: 0;\n    cursor: pointer;\n    transition: ease-in 0.5s;\n}\n\n/* About styles */\n#aboutImg{\n    background: url("+h+") no-repeat;\n    background-size: cover;\n    background-position: 100% 67%;\n}\n\n/* Book styles */\n#bookImg{\n    background: url("+g+") no-repeat;\n    background-size: cover;\n    background-position: 100% 50%;\n}\n\nform{\n    width: 60%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nlabel{\n    width: 100%;\n    font-size: 14px;\n    color: #444;\n}\n\ninput{\n    width: 100%;\n    margin: 5px 0 15px 0;\n    height: 20px;\n    font-family: 'Montserrat', sans-serif;\n}\n\n#bookSubHeader{\n    margin-bottom: 5%;\n}\n\n#userReqs{\n    width: 100%;\n    height: 40px;\n    overflow: visible;\n    margin: 5px 0 15px 0;\n    font-family: 'Montserrat', sans-serif;\n}\n\n#thankYou{\n    display: none;\n    width: 90%;\n    text-align: center;\n    font-size: 24px;\n}\n\ninput[type=\"submit\"]{\n    height: 40px;\n    width: 52%;\n    margin: 5px 0 15px 0;\n    font-size: 16px;\n    border: none;\n    background-color: rgb(190, 62, 62, 0.8);\n    color: white;\n\n}\n\n/* Contact styles */\n\n#contactImg{\n    background: url("+b+") no-repeat;\n    background-position: 50% 60%;\n    background-size: cover;\n}\n\nh4{\n    font-weight: 500;\n    padding-bottom: 3px;\n    font-size: 18px;\n}\n\n/* Menu styles */\n\n#menuImg{\n    background: url("+f+") no-repeat;\n    background-position: 0% 73%;\n    background-size: cover;\n}\n\n.menuHeader{\n    margin: 40px 0 4px 0;\n}\n\nul{\n    text-align: center;\n}\n\nli{\n    margin-bottom: 10px;\n    padding-bottom: 3px;\n}\n\n@media(max-width: 500px){\n    header{\n        justify-content: space-between;\n    }\n\n    h1{\n        font-size: 32px;\n        padding: 20px;\n        letter-spacing: 4px;\n    }\n\n    .headerButton{\n        width: 150px;\n        display: none;\n        padding: 20px 0 10px 0;\n        transition: ease-in 1s;\n    }\n\n    nav{\n        width:fit-content;\n        display: flex;\n        flex-direction: column;\n        position: fixed;\n        top: calc(18vh/2);\n        right: 15px;\n        transition: ease-in 1s;\n        background-color: white;\n    }\n\n    .hamburgerContainer{\n        position: fixed;\n        top: calc(18vh/2 - 28px);\n        right: 50px;\n        width: 30px;\n        height: 28px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n        background-color: white;\n        border: 5px white solid;\n    }\n\n    .hamburgerContainer:hover{\n        cursor: pointer;\n        width: 32px;\n        height: 32px;\n        transition: ease-in 0.3s;\n    }\n    \n    .layer{\n        width: 100%;\n        height: 16%;\n        background-color: rgb(51, 51, 51);\n        border-radius: 3px;\n    }\n\n    .pageContainer{\n        flex-direction: column;\n        height: fit-content;\n        overflow: scroll;\n    }\n\n    .pageTextContainer{\n        width: 100%;\n        height: 50%;\n    }\n\n    .pageImg{\n        width: 100vw;\n        height: 100vw;\n    }\n\n\n}",""]);const x=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,t,n)=>{var o,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function r(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},o=[],i=0;i<e.length;i++){var d=e[i],s=t.base?d[0]+t.base:d[0],c=n[s]||0,l="".concat(s," ").concat(c);n[s]=c+1;var p=r(l),u={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(a[p].references++,a[p].updater(u)):a.push({identifier:l,updater:g(u,t),references:1}),o.push(l)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=n.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var r=i(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var c,l=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function p(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var a=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function u(e,t,n){var o=n.css,i=n.media,a=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,h=0;function g(e,t){var n,o,i;if(t.singleton){var a=h++;n=m||(m=s(t)),o=p.bind(null,n,a,!1),i=p.bind(null,n,a,!0)}else n=s(t),o=u.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=r(n[o]);a[i].references--}for(var s=d(e,t),c=0;c<n.length;c++){var l=r(n[c]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=s}}}},544:(e,t,n)=>{e.exports=n.p+"f102a03f3194623970b8.jpg"},809:(e,t,n)=>{e.exports=n.p+"5c5debd76a2b16d695fc.jpg"},950:(e,t,n)=>{e.exports=n.p+"55868d9abc7e2d341970.jpg"},797:(e,t,n)=>{e.exports=n.p+"92fc0d78adfe05c0c4b2.jpg"},837:(e,t,n)=>{e.exports=n.p+"6d0d3a0bcbd5c8ac268f.jpg"}},t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),o=n(917);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var i=n(28);function a(){const e=document.getElementById("bodyContent"),t=document.createElement("div");t.setAttribute("id","home-img"),t.setAttribute("class","cover-img"),e.appendChild(t);const n=document.createElement("div");n.setAttribute("id","homeTagDiv"),t.appendChild(n);const o=document.createElement("div");o.setAttribute("id","homeTagLine"),o.textContent="delicious plant-based sushi. elegant noodle dishes.    decadent japanese platters",n.appendChild(o);const i=document.createElement("div");i.classList.add("popUpAd"),t.appendChild(i);const a=document.createElement("div");a.classList.add("popUpAdClose"),i.appendChild(a),a.textContent="x",a.addEventListener("click",(()=>{i.style.display="none"}));const r=document.createElement("div");r.classList.add("popUpAdText"),r.textContent="Limited Time Offer! Click here to get 20% off all restaurant bookings until the end of April !!",i.appendChild(r)}function r(e,t){let n=document.createElement("ul");for(let t=0;t<e.length;t++){let o=document.createElement("li");o.textContent=e[t],n.appendChild(o)}t.appendChild(n)}function d(){let e=document.getElementById("bodyContent");for(;e.hasChildNodes();)e.removeChild(e.firstChild);let t=[document.getElementById("headerLogo"),document.getElementById("about"),document.getElementById("menu"),document.getElementById("book"),document.getElementById("contact")];for(let e=0;e<t.length;e++)t[e].classList.contains("selectedPageStyle")&&t[e].classList.remove("selectedPageStyle")}t()(i.Z,{insert:"head",singleton:!1}),i.Z.locals,function(){const e=document.getElementById("container"),t=document.createElement("header"),n=document.createElement("h1");n.setAttribute("id","headerLogo"),n.textContent="Vegi 🍱 Sushi",e.appendChild(t),t.appendChild(n);const o=document.createElement("nav");o.setAttribute("id","subHeader"),t.appendChild(o);const i=document.createElement("div");i.classList.add("hamburgerContainer"),o.appendChild(i);for(let e=0;e<3;e++){let e=document.createElement("div");e.classList.add("layer"),i.appendChild(e)}i.addEventListener("click",(()=>{let e=document.querySelectorAll(".headerButton");for(let t=0;t<e.length;t++)"none"===e[t].style.display?e[t].style.display="block":e[t].style.display="none"}));const a=document.createElement("button");a.setAttribute("id","about"),a.setAttribute("class","headerButton"),a.textContent="About",o.appendChild(a);const r=document.createElement("button");r.setAttribute("id","menu"),r.setAttribute("class","headerButton"),r.textContent="Menu",o.appendChild(r);const d=document.createElement("button");d.setAttribute("id","book"),d.setAttribute("class","headerButton"),d.textContent="Book",o.appendChild(d);const s=document.createElement("button");s.setAttribute("id","contact"),s.setAttribute("class","headerButton"),s.textContent="Contact",o.appendChild(s);const c=document.createElement("div");c.setAttribute("id","bodyContent"),e.appendChild(c)}(),a(),function(){let e=document.getElementById("headerLogo"),t=document.getElementById("about"),n=document.getElementById("menu"),o=document.getElementById("book"),i=document.getElementById("contact");e.addEventListener("click",(()=>{d(),a()})),t.addEventListener("click",(()=>{d(),function(){document.getElementById("about").classList.add("selectedPageStyle");const e=document.getElementById("bodyContent"),t=document.createElement("div");t.setAttribute("id","aboutContainer"),t.classList.add("pageContainer"),e.appendChild(t);const n=document.createElement("div");n.setAttribute("id","aboutText"),n.classList.add("pageTextContainer"),t.appendChild(n);const o=document.createElement("h3");o.textContent='"One of the most exciting sushi restaurants to hit London in a long time" - Time London',n.appendChild(o);const i=document.createElement("p");i.classList.add("pageText"),i.textContent="We use only the freshest, locally-sourced vegetarian ingredients to craft beautiful sushi and Japanese-inspired dishes and sides.",n.appendChild(i);const a=document.createElement("p");i.classList.add("pageText"),a.textContent="Pair your food with our carefully selected wines, beers, spirits and home-made herbal soft drinks.",n.appendChild(a);const r=document.createElement("p");i.classList.add("pageText"),r.textContent="Offering takeaway and delivery - book to begin your dining experience today.",n.appendChild(r);const d=document.createElement("div");d.setAttribute("id","aboutImg"),d.classList.add("pageImg"),t.appendChild(d)}()})),n.addEventListener("click",(()=>{d(),function(){document.getElementById("menu").classList.add("selectedPageStyle");const e=document.getElementById("bodyContent"),t=document.createElement("div");t.setAttribute("id","menuContainer"),t.classList.add("pageContainer"),e.appendChild(t);const n=document.createElement("div");n.setAttribute("id","menuImg"),n.classList.add("pageImg"),t.appendChild(n);const o=document.createElement("div");o.setAttribute("id","menuText"),o.classList.add("pageTextContainer"),t.appendChild(o);const i=document.createElement("h4");i.textContent="Appetisers",i.classList.add("menuHeader"),o.appendChild(i),r(["Edamame with Chilli (3.0)","Vegi Dumplings (6.0), Wakame Salad (4.5)","Miso Soup (2.0)"],o);const a=document.createElement("h4");a.textContent="Rolls",a.classList.add("menuHeader"),o.appendChild(a),r(["Avocado & Cucumber Maki (4.0)","Red Pepper Nigiri (4.0)","Spicy Tofu Temaki (6.0)"],o);const d=document.createElement("h4");d.textContent="Mains",d.classList.add("menuHeader"),o.appendChild(d),r(["Fried Garlic Tofu Ramen","Vegi Katsu Curry","Soy-Ginger Tempeh & Sesame Salad"],o)}()})),o.addEventListener("click",(()=>{d(),function(){document.getElementById("book").classList.add("selectedPageStyle");const e=document.getElementById("bodyContent"),t=document.createElement("div");t.setAttribute("id","bookContainer"),t.classList.add("pageContainer"),e.appendChild(t);const n=document.createElement("div");n.setAttribute("id","aboutText"),n.classList.add("pageTextContainer"),t.appendChild(n);const o=document.createElement("h3");o.setAttribute("id","bookSubHeader"),o.textContent="Book with us:",n.appendChild(o);const i=document.createElement("form");i.setAttribute("name","bookingForm"),n.appendChild(i);const a=document.createElement("label");a.setAttribute("for","userName"),a.textContent="Your Name:",i.appendChild(a);const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","userName"),r.setAttribute("placeholder","Name"),i.appendChild(r);const d=document.createElement("label");d.setAttribute("for","userEmail"),d.textContent="Your Email:",i.appendChild(d);const s=document.createElement("input");s.setAttribute("type","email"),s.setAttribute("name","userEmail"),s.setAttribute("placeholder","Email"),i.appendChild(s);const c=document.createElement("label");c.setAttribute("for","userPhone"),c.textContent="Your Phone Number:",i.appendChild(c);const l=document.createElement("input");l.setAttribute("type","tel"),l.setAttribute("name","userPhone"),l.setAttribute("placeholder","Phone"),i.appendChild(l);let p=new Date;const u=document.createElement("label");u.setAttribute("for","userDate"),u.textContent="Booking Date:",i.appendChild(u);const m=document.createElement("input");m.setAttribute("type","date"),m.setAttribute("min",p),m.setAttribute("name","userDate"),i.appendChild(m);const h=document.createElement("label");h.setAttribute("for","userTime"),h.textContent="Booking Time:",i.appendChild(h);const g=document.createElement("input");g.setAttribute("type","time"),g.min="12:00:00:00",g.setAttribute("name","userTime"),i.appendChild(g);const b=document.createElement("label");b.setAttribute("for","userReqs"),b.textContent="Special Requests:",i.appendChild(b);const f=document.createElement("textarea");f.setAttribute("id","userReqs"),f.setAttribute("placeholder","Please enter any special requests, allergies, special occasions etc."),f.setAttribute("name","userReqs"),i.appendChild(f);const x=document.createElement("input");x.setAttribute("type","submit"),x.setAttribute("name","submitBooking"),x.textContent="Submit Booking Request",x.addEventListener("click",(e=>{e.preventDefault(),o.style.display="none",i.style.display="none",y.style.display="block"})),i.appendChild(x);const y=document.createElement("div");y.setAttribute("id","thankYou"),y.textContent="Thank you! One of our team will confirm your booking within 24 hours.",n.appendChild(y);const C=document.createElement("div");C.setAttribute("id","bookImg"),C.classList.add("pageImg"),t.appendChild(C)}()})),i.addEventListener("click",(()=>{d(),function(){document.getElementById("contact").classList.add("selectedPageStyle");const e=document.getElementById("bodyContent"),t=document.createElement("div");t.setAttribute("id","contactContainer"),t.classList.add("pageContainer"),e.appendChild(t);const n=document.createElement("div");n.setAttribute("id","contactImg"),n.classList.add("pageImg"),t.appendChild(n);const o=document.createElement("div");o.setAttribute("id","contactText"),o.classList.add("pageTextContainer"),t.appendChild(o);const i=document.createElement("h4");i.textContent="Address",o.appendChild(i);const a=document.createElement("p");a.classList.add("pageText"),a.innerHTML="44 Hackney Street<br> London<br> E2 7NX",o.appendChild(a);const r=document.createElement("h4");r.textContent="Email",o.appendChild(r);const d=document.createElement("p");a.classList.add("pageText"),d.textContent="hello@vegi-sushi.com",o.appendChild(d);const s=document.createElement("h4");s.textContent="Phone",o.appendChild(s);const c=document.createElement("p");a.classList.add("pageText"),c.textContent="+44 (0) 2034 111723",o.appendChild(c)}()}))}()})()})();