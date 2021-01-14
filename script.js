function ekle(){
    var x = document.getElementById("yazi").value;
    if(x == ""){
        alert("Lütfen geçerli bir şey yazınız")
    }
    else{
        var yenioge = document.createElement("article");
        var nitelik = yenioge.setAttribute("class","todo")
        var yenioge2 = document.createElement("p");
        yenioge.appendChild(yenioge2);
        yenioge2.innerHTML = document.getElementById("yazi").value;
        document.getElementById("yazi").value="";
        var target = document.getElementById("wrapper");
        target.insertBefore(yenioge,target.childNodes[2]);

    } 
}








