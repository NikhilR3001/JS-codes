//Example one

const searchInput = document.getElementById('searchInput');

function throttle(func,limit){
    let lastCall = 0;

    return ((...args)=>{
        let now = Date.now();
        if(now - lastCall >= limit){
            lastCall = now;
            func.apply(this,args);
        }
    })
}

function serachQuery(query){
    console.log('searched for:',query)
}

const throttleSearch = throttle(serachQuery,900);

searchInput.addEventListener('input',function(event){
    throttleSearch(event.target.value);
})


//Example two

const button = document.getElementById('increment_btn');
const buttonPress = document.getElementById('increment_pressed');
const throttleTriggered = document.getElementById('increment_count');

let btnPressed = 0;
let triggered = 0;

const throttleCount = _.throttle(()=>{
    throttleTriggered.innerHTML = ++triggered;
},800);

button.addEventListener('click',()=>{
    buttonPress.innerHTML = ++btnPressed;
    throttleCount();
});