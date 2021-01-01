const colors  = document.getElementById('colors');
const colorValue = document.getElementById('colorValue');
const body = document.getElementById('secondary');
setInterval(() => {
 colorValue.innerText = colors.value;
 body.style.background = colors.value;

},);
const time  = document.getElementById('time');
setInterval(()=>{
const date = new Date();
const h = date.getHours()
const m = date.getMinutes()
const s = date.getSeconds()
    time.innerText = `${h} : ${m} : ${s} `
},1000)