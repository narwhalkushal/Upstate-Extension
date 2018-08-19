// allData = {};
// currentData = {some: "data", goes: "here"};
//
// // to initialize the all data using the storage
// chrome.storage.sync.get('allData', function(data) {
//   // check if data exists.
//   if (data) {
//       allData = data;
//   } else {
//       allData[Object.keys(allData).length] = currentData;
//   }
// });
//
// // Save it using the Chrome extension storage API.
// chrome.storage.sync.set({'allData': allData}, function() {
//   // Notify that we saved.
//   console.log('Settings saved');
// });
//
// chrome.storage.sync.get(['date'], function(result) {
//           console.log('Value currently is ' + result.key);
//         });
