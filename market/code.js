function hesapla(){
    let ürün1=document.getElementById("ürünbir").value
    let ürün2=document.getElementById("ürüniki").value
    let ürün3=document.getElementById("ürünüç").value
    let sonuc=document.getElementById("sonuc")
    
    const para=100
    let hesap = (Number(ürün1) + Number (ürün2) + Number (ürün3) - Number(para))

    sonuc.innerHTML="Kalan paranız :"+hesap
    if(hesap>=50){
        sonuc.innerHTML="Pacayı sıyırmadın: "+hesap
        document.body.style.backgroundColor="red"
    }
    else{
        sonuc.innerHTML="hadi gine iyisin :"+hesap
        document.body.style.backgroundColor="green"
    }

}