
    let btnEncender = document.getElementById('btn-on');
    let imgEncendido = document.getElementById('img-on');
    let imgApagado = document.getElementById('img-off');
    let btnApagar = document.getElementById('btn-off');
document.addEventListener('DOMContentLoaded',(e)=>{
    imgEncendido.style.display = 'none';

    btnEncender.addEventListener('click',()=>{
        imgApagado.style.display = 'none';
        imgEncendido.style.margin = 'auto'
        imgEncendido.style.display = 'flex';
        imgEncendido.style.width = '10cm';
        imgEncendido.style.height = '10cm';
        
    })
    
    btnApagar.addEventListener('click',()=>{
        imgEncendido.style.display = 'none';
        imgApagado.style.margin = 'auto'
        imgApagado.style.display = 'flex';
        imgApagado.style.width = '9cm';
        imgApagado.style.height = '10cm';
    })
})