function imc_cal(){
    let peso = Number(window.document.getElementById("inPeso").value)
    let altura = Number(window.document.getElementById("inAltura").value)
    let imc =  peso / (altura * altura)
    let res = window.document.getElementById("resposta")
    if (peso === 0 || altura === 0){
        //window.alert("Preencha dos os campos")
        let av = window.document.getElementById("classifica")
        res.style.color = 'black'
        res.textContent = '0.0'
        av.style.color = 'red'
        av.textContent = 'Preencha todos os campos'
    }else{
        res.textContent = imc.toFixed(1)
        classifica(imc, res)
    }
    
}

function classifica(imc, res){
    let lb = window.document.getElementById("classifica")
    if(imc<18.5){
        lb.textContent = "Abaixo do peso"
        colorRed(res,lb)
    }else if(imc<24.9){
        lb.textContent = "Peso normal"
        lb.style.color = 'green'
        res.style.color = 'green'
    }else if(imc<29.9){
        lb.textContent = "Sobrepeso"
        colorRed(res,lb)
    }else if(imc<34.9){
        lb.textContent = "Obesidade grau 1"
        colorRed(res,lb)
    }else if(imc<39.9){
        lb.textContent = "Obesidade grau 2"
        colorRed(res,lb)
    }else{
        lb.textContent = "Obesidade grau 3"
        colorRed(res,lb)
    }
}

function colorRed(res, lb){
    lb.style.color = 'red'
    res.style.color = 'red'
}
//console.log("oi")
//imc_cal()