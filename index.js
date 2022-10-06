var x = document.querySelectorAll('.btnMoins')
//if(x.nextElementSibling.innerHTML>0){
    //x.nextElementSibling.innerHTML--
//}
for(let i =0;i<x.length;i++){
    x[i].addEventListener('click',function(){
        if(x[i].nextElementSibling.innerHTML>0){
            x[i].nextElementSibling.innerHTML--
            SommeTotale()
        }
      
    })
    
}  

var y = document.querySelectorAll('.btnPlus')
for(let i = 0;i<y.length;i++){
    y[i].addEventListener('click',function(){
        y[i].previousElementSibling.innerHTML++
        SommeTotale()
    })
}
var del = document.querySelectorAll('.delete')
for(let i = 0; i<del.length;i++){
    del[i].addEventListener('click',function(){
        del[i].parentElement.remove()
        SommeTotale()
        
    })
}
var hear = document.querySelectorAll('.fa-heart')
for (let i = 0; i < hear.length; i++) {
    hear[i].addEventListener('click',function(){
        hear[i].classList.toggle('hama')
    })    
}

function SommeTotale(){
    var pri = document.querySelectorAll('.price')
    var qt = document.querySelectorAll('.qte')
    var somme = document.querySelector('#somme')
    var sum = 0

    for(let i = 0;i<pri.length;i++){
        sum = sum + pri[i].innerHTML*qt[i].innerHTML
    }

    somme.innerHTML = sum
}