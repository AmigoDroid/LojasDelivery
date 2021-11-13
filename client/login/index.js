
const form = document.getElementById('formulario');
form.addEventListener('submit',function(e){
 e.preventDefault();

const user = document.getElementById('usuario').value;
const pass = document.getElementById('senha').value;

if(user.length<=0||user.length<=0){

}else{
    const url='https://api-server-delivery.herokuapp.com/login/loja'

    const body ={
        username:user,
        password:pass
    }
    console.log(body);
   const api = new XMLHttpRequest();
   api.open('POST',url,true);
   api.setRequestHeader('Content-type','application/json');
   api.send(JSON.stringify(body));
   api.onload=function(){
       console.log(this.responseText);
      res(this.responseText);
   }

}

})
function res(dados){

    const db = JSON.parse(dados);
    
    if(db.status==true){
    localStorage.setItem('tokenLoja',db.token);
    location.replace('../home/index.html');
}else{
alert('usuario ou senha incorretos');
}}