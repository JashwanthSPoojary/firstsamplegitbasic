let hii = document.querySelector("h3");
hii.addEventListener('mouseover' ,  ()=>{
    let store = hii.innerHTML
    console.log(store);
    if(store == "Hello World"){
        hii.innerHTML = "Welcome World"
    }else{
        hii.innerHTML = "Hello World"
    }
})
