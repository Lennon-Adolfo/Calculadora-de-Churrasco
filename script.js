document.getElementById('calcular').addEventListener('click', function(){
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value || 0);
    const crianças = parseInt(document.getElementById('crianças').value || 0);

    const carneBovina = (homens * 500) + (mulheres * 300) + (crianças * 200);
    const frango = (homens * 200) + (mulheres * 200) + (crianças * 100);
    const linguiça = (homens * 200) + (mulheres * 200) + (crianças * 200);
    const refrigerante = (homens * 300) + (mulheres * 400) + (crianças * 200);
    const creveja = (homens * 800) + (mulheres * 500);

    const resultado =`
    <p>Carne Bovina: ${carneBovina}g</p>
    <p>Frago: ${frango}g</p>
    <p>Linguiça: ${linguiça}g</p>
    <p>Refrigerante: ${refrigerante}ml</p>
    <p>Cerveja: ${creveja}ml</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
});