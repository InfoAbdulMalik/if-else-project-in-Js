let btn= document.getElementById('btn');

function checkValue(bgcolor){
    let h1= document.getElementById('heading')
    let body= document.body;
    if(body.style.backgroundColor == bgcolor ){
        body.style.backgroundColor = 'white';
        h1.style.color='black'
    }
    else{
        body.style.backgroundColor = bgcolor;
        h1.style.color='white';
    }
}