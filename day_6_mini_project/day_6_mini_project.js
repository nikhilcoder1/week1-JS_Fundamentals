const clock = document.querySelector("#clock")

setInterval(() => {
    const time = new Date().toLocaleTimeString();
    clock.textContent = time;
},1000);