
async function getIP() {
    try {
        const response = await fetch('https://httpbin.org/get');
        const data = await response.json();
        return data.origin;
    } catch (error) {
        console.error("Erro ao buscar o IP:", error);
    }
}

function getUserData(pos) {
    var ip = getIP();
    var userData = {
        ip: ip,
        userAgent: navigator.userAgent,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
    };

    console.log(userData);
}

navigator.geolocation.getCurrentPosition(getUserData);
