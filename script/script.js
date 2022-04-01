const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const endDiv = document.querySelector('.end-step');


function go(currentStep, nextStep)
{
    let dNone, dBlock;
    if(currentStep == 1)
    {
        dNone = firstDiv;
    }
    else if (currentStep == 2)
    { 
        dNone = secondDiv;
    }
    else
    {
        dNone = endDiv;
    }
    
    dNone.style.display = 'none';
   
    if(nextStep == 1)
    {
        dBlock = firstDiv;
    }
    else if (nextStep == 2)
    { 
        dBlock = secondDiv;
    }
    else
    {
        dBlock = endDiv;
    }
    dBlock.style.display = 'block';
    
}

function validate(){
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    peso.style.border = 'none';
    altura.style.border = 'none';

    if(!peso.value || !altura.value )
    {
        if(!peso.value && !altura.value)
        {
            peso.style.border = '1px solid red';
            altura.style.border = '1px solid red';
        }
        else if(!peso.value)
        {
            peso.style.border = '1px solid red';
        }
        else
        {
            altura.style.border = '1px solid red';
        }
    }
    else
    {
        let imc = peso.value / (altura.value * altura.value);
        const result = document.getElementById('resultado');
        
        if(imc < 18.5)
        {
            console.log('magreza | obesidade 0');
            result.innerHTML = 'magreza | obesidade 0';
        }
        else if(imc >= 18.5 && imc < 25)
        {
            console.log('normal | obesidade 0');
            result.innerHTML = 'normal | obesidade 0';
        }
        else if(imc >= 25 && imc < 30)
        {
            console.log('sobrepeso | obesidade 1');
            result.innerHTML = 'sobrepeso | obesidade 1';
        }
        else if(imc >= 30 && imc < 40)
        {
            console.log('obeso | obesidade 2');
            result.innerHTML = 'obeso | obesidade 2';
        }
        else
        {
            console.log('obeso gravissimo | obesidade 3');
            result.innerHTML = 'obeso gravissimo | obesidade 3';
        }
        go(2,3);
    }
}





