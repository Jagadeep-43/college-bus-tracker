const buses = [
    {
        route: "01",
        stop: "KR Thoppur",
        arrival: "8:40 AM"
    },
    {
        route: "02",
        stop: "Bhavani Bus Stand",
        arrival: "8:40 AM"
    }
];

function displayBuses(list) {
    const busList = document.getElementById("busList");
    busList.innerHTML = "";

    list.forEach(bus => {
        busList.innerHTML += `
            <div class="bus-card">
                <h3>Route ${bus.route}</h3>
                <p><strong>Stop:</strong> ${bus.stop}</p>
                <p><strong>Arrival:</strong> ${bus.arrival}</p>
            </div>
        `;
    });
}

function searchBus() {
    const text = document
        .getElementById("searchBox")
        .value
        .toLowerCase();

    const filtered = buses.filter(bus =>
        bus.route.toLowerCase().includes(text) ||
        bus.stop.toLowerCase().includes(text)
    );

    displayBuses(filtered);
}

displayBuses(buses);
