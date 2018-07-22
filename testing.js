// console.log(browser.cookies.get(''))

// function logCookies(cookies) {
//   for (let cookie of cookies) {
//     console.log(cookie.value);
//   }
// }
//
// var gettingAll = browser.cookies.get({
//   name: "total_impressions",
//   url: 'namel.net'
// });
// gettingAll.then(logCookies);
// console.log('test');

// // function createCookie() {
// //     var i = 1000000000
// //     var utmn = rand(i, 9999999999) //random request number
// //     var d = new Date();
// //     d.setTime(d.getTime() + (24*60*60*365*2));
// //     var expires = "expires="+ d.toUTCString();
// //     document.cookie = 'accessUpstateUser' + utmn;
// //     var test = browser.cookies.get({
// //         name: 'accessUpstateUser'
// //     });
// //     console.log('test');
// //     console.log('validation');
// // }
//
// var ID;
//
//     function getCookies(domain, name)
//     {
//         chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
//             ID = cookie.value;
//             showId();
//         });
//     }
//
//     function showId() {
//         alert(ID);
//     }
//
//     getCookies("http://www.example.com", "id")
//
// //usage:
// getCookies("http://www.example.com", "id", function(id) {
//     alert(id);
// });
//     function rand(min, max) {
//         return min + Math.floor(Math.random() * (max - min));
//     }
// //
// //     var i = 1000000000,
// //         utmn = rand(i, 9999999999), //random request number
// //         cookie = rand(10000000, 99999999), //random cookie number
// //         random = rand(i, 2147483647), //number under 2147483647
// //         today = (new Date()).getTime(),
// //         win = window.location,
// //         img = new Image(),
// //         urchinUrl = 'http://www.google-analytics.com/__utm.gif?utmwv=1.3&utmn='
// //         +utmn+'&utmsr=-&utmsc=-&utmul=-&utmje=0&utmfl=-&utmdt=-&utmhn='
// //         +domain+'&utmr='+win+'&utmp='
// //         +url+'&utmac='
// //         +urchinCode+'&utmcc=__utma%3D'
// //         +cookie+'.'+random+'.'+today+'.'+today+'.'
// //         +today+'.2%3B%2B__utmb%3D'
// //         +cookie+'%3B%2B__utmc%3D'
// //         +cookie+'%3B%2B__utmz%3D'
// //         +cookie+'.'+today
// //         +'.2.2.utmccn%3D(referral)%7Cutmcsr%3D' + win.host + '%7Cutmcct%3D' + win.pathname + '%7Cutmcmd%3Dreferral%3B%2B__utmv%3D'
// //         +cookie+'.-%3B';
// //     // console.log(urchinUrl);
// //     // console.log(window.screen);
// //
// //     // trigger the tracking
// //     img.src = urchinUrl;
// // }
// //
// // window.addEventListener("load", function() {
// //
// //     gaTrack(uaGoogleId, 'accessUpstate', 'test.html');
// //
// // }, false);
