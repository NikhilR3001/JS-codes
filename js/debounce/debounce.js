//Example one

const searchInput = document.getElementById("searchInput");

function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function serachQuery(query){
    console.log('searched for:',query);
}

const debouncedSearch = debounce(serachQuery,500);

searchInput.addEventListener('input',function(event){
    debouncedSearch(event.target.value);
})


//Example two

const btn = document.getElementById('increment_btn');
const btnPress = document.getElementById('increment_pressed');
const count = document.getElementById('increment_count');

let pressedCount = 0;
let triggeredCount = 0;

const debouncedCount = _.debounce(()=>{
    count.innerHTML = ++triggeredCount;
},500);


btn.addEventListener('click', ()=>{
btnPress.innerHTML = ++pressedCount;
debouncedCount();
})