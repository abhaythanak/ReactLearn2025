let a = document.querySelector("h1")
let h1 = document.querySelector("h1")
let b = document.querySelector("body")
a.innerHTML = "hello chutiye"
a.style.color = "blue"
b.style.backgroundColor = "red"
a.style.cursor = "pointer"

let isDark = false;

h1.addEventListener("click", () => {
  isDark = !isDark; // toggle the boolean

  if (isDark) {
    a.innerHTML = "bhosadike";
    a.style.color = "white";
    b.style.backgroundColor = "black";
  } else {
    a.innerHTML = "Hello";
    a.style.color = "black";
    b.style.backgroundColor = "white";
  }
});


const getData = () => {
  return new Promise((resolve,rej) => {
    if (resolve) {
        setTimeout(() => resolve("Hello from Promise!"), 1000);
    } else {
        rej("dont work here")
    }
    
    
  });
};
console.log(getData());

const asyncFunction = async () => {
  const result = await getData();
  console.log(result); // Hello from Promise!
};

asyncFunction();
