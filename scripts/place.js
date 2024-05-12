function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

window.onload = function() {
    var temperature = 17; 
    var windSpeed = 10; 

    if (temperature <= 10 && windSpeed > 4.8) {
        var windChill = calculateWindChill(temperature, windSpeed);

        document.getElementById("windChill").textContent = windChill.toFixed(2) + " °C";
    } else {
        document.getElementById("windChill").textContent = "N/A";
    }
};