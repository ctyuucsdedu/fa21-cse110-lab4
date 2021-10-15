function update() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let interval = setInterval(update, 1000);
setTimeout(() => {clearInterval(interval)}, 4000);