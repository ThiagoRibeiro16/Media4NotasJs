alert("Simulador de notas");

let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let n3 = parseFloat(prompt("Digite a terceira nota:"));
let n4 = parseFloat(prompt("Digite a quarta nota:"));

let media = (n1 + n2 + n3 + n4) / 4;


if (n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0 || n1 > 10 || n2 > 10 || n3 > 10 || n4 > 10) 
{
    alert("Digite somente notas entre 0 e 10");
}

else if (media < 5)

{
    alert(`Você ficou com média ${media}. Resultado: reprovado`);

}

else if (media >= 5 && media <= 6) 

{
    alert(`Você ficou com média ${media}. Resultado: recuperação`);
}

else

{
    alert(`Você ficou com média ${media}. Resultado: aprovado`);
}