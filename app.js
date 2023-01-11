const btns =document.querySelectorAll(".tab-btn");
const articles =document.querySelectorAll(".content");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const id = e.target.dataset.id;
        
        articles.forEach(function(e){
            e.classList.remove("active");
            btns.forEach(function(){
                
            })
            if(id===e.getAttribute("id")){
                e.classList.add("active")
                btn.classList.toggle("active")
            }
        })
    })
    
})