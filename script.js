function displayBuses(busArray) {
    const busList = document.getElementById("busList");
    busList.innerHTML = "";
    document.getElementById("busCount").textContent =
    busArray.length + " Buses Available";

    if (busArray.length === 0) {
        busList.innerHTML = "<p>No buses found.</p>";
        return;
    }

    busArray.forEach(bus => {
        busList.innerHTML += `
            <div class="bus-card">
                <h3>Route ${bus.number}</h3>
                <p><strong>Route:</strong> ${bus.route}</p>
                <p><strong>Arrival:</strong> ${bus.arrival}</p>
                <p><strong>Stops:</strong></p>
                <ul>
                    ${bus.stops.map(stop => `<li>${stop}</li>`).join("")}
                </ul>
            </div>
        `;
    });
}

function searchBus() {
    const search = document.getElementById("searchInput").value.toLowerCase();

    const filtered = buses.filter(bus =>
        bus.number.toLowerCase().includes(search) ||
        bus.route.toLowerCase().includes(search) ||
        bus.stops.some(stop => stop.toLowerCase().includes(search))
    );

    displayBuses(filtered);
}

// Show all buses when the page loads
displayBuses(buses);
