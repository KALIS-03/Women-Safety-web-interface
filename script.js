document.getElementById('alertButton').addEventListener('click', function() {
    alert('Emergency alert sent to your emergency contacts!');
    // Code to send alerts can be implemented here.
});

document.getElementById('findRouteButton').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    if (location) {
        document.getElementById('routeDisplay').innerText = `Safe route found for location: ${location}`;
        // Here you can integrate a map API or route-finding logic.
    } else {
        document.getElementById('routeDisplay').innerText = 'Please enter a valid location.';
    }
});

document.getElementById('shareLocationButton').addEventListener('click', function() {
    alert('Live location shared with your emergency contacts!');
    // Code to share live location can be implemented here.
});
