// ! DEBOUNCING :-

// function debounceSearch(fn, delay = 500) {
//   let timer;

//   return (...args) => {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// }

// function searchQuery(query) {
//   console.log(query);
// }

// let debouncedSearch = debounceSearch(searchQuery, 5000);

// debouncedSearch("H");
// debouncedSearch("He");
// debouncedSearch("Hel");
// debouncedSearch("Hell");
// debouncedSearch("Hello");

// ! THROTTLING :-
function throttledMsg(fn, delay = 2000) {
  let flag = true;
  return function (...args) {
    if(flag){
      fn(...args);
      flag = false
    }

    setTimeout(()=>{
      flag = true
      console.log("Send Another Message");
      
  },delay);

  };
}

function sendMsg(message) {
  console.log(`Sending ...`, message);
}

const msgWithSlowMode = throttledMsg(sendMsg, 5000);

msgWithSlowMode("Hii");
msgWithSlowMode("Big Fan");
// msgWithSlowMode(" Hello World");
// msgWithSlowMode(" Learn React");
// msgWithSlowMode(" React is easy 🔝");
// msgWithSlowMode(" Mera Bacha hai Tu");
