var crd = null;
var success = function success(pos) { crd = pos.coords; };
var error = function error() { console.log('erro'); };
var options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };

navigator.geolocation.getCurrentPosition(success, error, options);

async function getIP() {
    try {
        const response = await fetch('https://httpbin.org/get');
        const data = await response.json();
        return data.origin;
    } catch (error) {
        return null; 
    }
}

const data = {
        ip: getIP(),
        userAgent: navigator.userAgent,
        latitude: crd.latitude,
        longitude: crd.longitude,
};
