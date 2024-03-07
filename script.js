let hii = document.querySelector("h3");
hii.addEventListener('mouseover' ,  ()=>{
    let store = hii.innerHTML
    console.log(store);
    if(store == "New World"){
        hii.innerHTML = "Old World"
    }else{
        hii.innerHTML = "New World"
    }
})
