"use strict";
async function apiHandling() {
    const result = await fetch("https://api.github.com/users/nitesh-chaudhary8740");
    const data = await result.json();
    console.log(data);
}
apiHandling();
