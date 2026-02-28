# Project related to DOM

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code 

## project 1

```javascript
console.log("Pranjal")
const button = document.querySelectorAll('.button');
const body = document.querySelector("body");

button.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id == 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  })
})

```

## Project 2 solution 

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
  e.preventDefault();
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');
let bmi;
if(height === ''|| height<0 || isNaN(height)){
  results.innerHTML = `please give a valid height ${height}`;
} else if(weight === ''|| weight<0 || isNaN(weight)){
  results.innerHTML = `please give a valid weight ${weight}`;
} else{
  bmi = (weight / ((height*height)/10000)).toFixed(2);
  results.innerHTML = `<span>${bmi}</span>`
}
if(bmi<18.6){
  results.innerHTML += " - underweight"
} else if(bmi>=18.6 && bmi<=24.9){
  results.innerHTML += " - Normal Range";
} else{
  results.innerHTML += " - Overweight";
}
});
```

## project 3 solution code

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock') both are right

setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000)
```