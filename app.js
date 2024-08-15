document.getElementById('convertBtn').addEventListener('click', function () {
    const temp = document.getElementById('temp').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

    if (temp === "") {
        alert("Por favor, ingresa la temperatura.");
        console.error("Error: No se ingresó una temperatura.");
        return;
    }

    if (from === to) {
        alert("La conversión debe ser entre diferentes escalas de temperatura.");
        console.error("Error: Conversión entre la misma escala de temperatura.");
        return;
    }

    let result;
    const temperature = parseFloat(temp);

    switch (from) {
        case 'celsius':
            result = to === 'fahrenheit' ? (temperature * 9/5) + 32 : temperature + 273.15;
            break;
        case 'fahrenheit':
            result = to === 'celsius' ? (temperature - 32) * 5/9 : (temperature - 32) * 5/9 + 273.15;
            break;
        case 'kelvin':
            result = to === 'celsius' ? temperature - 273.15 : (temperature - 273.15) * 9/5 + 32;
            break;
    }

    document.getElementById('result').innerText = `Resultado: ${result.toFixed(2)}° ${to.charAt(0).toUpperCase() + to.slice(1)}`;
    console.log(`Conversión realizada: ${temperature}° ${from.charAt(0).toUpperCase() + from.slice(1)} a ${result.toFixed(2)}° ${to.charAt(0).toUpperCase() + to.slice(1)}`);
});

document.getElementById('clearBtn').addEventListener('click', function () {
    document.getElementById('conversionForm').reset();
    document.getElementById('result').innerText = "";
    console.clear();
});
