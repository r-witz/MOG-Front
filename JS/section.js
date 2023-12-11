let items = document.querySelectorAll('.item');
let nav = document.getElementById('slide');
document.addEventListener('scroll', (parallax) => {
    if(window.scrollY > 500){
        nav.classList.add('tofixed');
    }else{
        nav.classList.remove('tofixed');
    }
    items.forEach(item =>{
        if(item.offsetTop - window.scrollY < 350){
            item.classList.add('active');
        };
    });
});