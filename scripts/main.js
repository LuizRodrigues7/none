const caixa1 = document.getElementById('box01')
const caixa2 = document.getElementById('box02')
const quest = document.getElementById('question')

function RevealImages(){
    if (caixa1.style.display = "none"){
        caixa1.style.display = "flex";
        caixa2.style.display = "flex";
        quest.style.display = "grid";
    }
}