window.onload = ()=>{
    let myForm = document.getElementById('myForm');
    myForm.addEventListener('submit',function(e){
        e.preventDefault();
     let email = document.getElementById('email');
     if(email.value ==''){
        let invalid = document.getElementById('invalid');
        invalid.innerHTML = 'Le champ email ne peut pas etre vide'; 
        invalid.style.color = 'red';
     }
     else{
        document.getElementById('popupbox').style.display = 'block';
     }
    })
}