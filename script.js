// ==================== BASE DE DONNÉES ÉTENDUE DES VILLES MAROCAINES ====================
const cities = [
    // Grandes villes
    { 
        id: 1,
        name: 'Casablanca', 
        lat: 33.5731, 
        lng: -7.5898, 
        region: 'Casablanca-Settat', 
        population: '3.7M',
        icon: '🏙️',
        area: '386 km²',
        network: '1,284 km',
        consumption: '124M m³',
        efficiency: '78.5%',
        sensors: 187,
        risk: 'Modéré',
        boundary: [
            [33.6500, -7.7000], [33.6000, -7.6500], [33.5500, -7.6000],
            [33.5000, -7.5800], [33.4800, -7.6000], [33.4500, -7.6200],
            [33.4300, -7.6500], [33.4500, -7.6800], [33.5000, -7.7000],
            [33.5500, -7.7200], [33.6000, -7.7100], [33.6500, -7.7000]
        ]
    },
    { 
        id: 2,
        name: 'Rabat', 
        lat: 34.0209, 
        lng: -6.8326, 
        region: 'Rabat-Salé-Kénitra', 
        population: '1.8M',
        icon: '🏛️',
        area: '117 km²',
        network: '856 km',
        consumption: '89M m³',
        efficiency: '82.3%',
        sensors: 124,
        risk: 'Faible',
        boundary: [
            [34.0800, -6.9000], [34.0400, -6.8600], [34.0000, -6.8400],
            [33.9600, -6.8200], [33.9400, -6.8000], [33.9300, -6.7800],
            [33.9500, -6.7600], [33.9800, -6.7400], [34.0200, -6.7300],
            [34.0600, -6.7500], [34.0900, -6.7800], [34.1000, -6.8200],
            [34.0800, -6.8600], [34.0800, -6.9000]
        ]
    },
    { 
        id: 3,
        name: 'Marrakech', 
        lat: 31.6295, 
        lng: -7.9815, 
        region: 'Marrakech-Safi', 
        population: '1M',
        icon: '🕌',
        area: '230 km²',
        network: '723 km',
        consumption: '67M m³',
        efficiency: '75.8%',
        sensors: 98,
        risk: 'Élevé',
        boundary: [
            [31.7000, -8.0500], [31.6600, -8.0100], [31.6200, -7.9700],
            [31.5800, -7.9400], [31.5400, -7.9200], [31.5000, -7.9300],
            [31.4800, -7.9600], [31.4700, -7.9900], [31.4900, -8.0200],
            [31.5200, -8.0400], [31.5600, -8.0600], [31.6000, -8.0700],
            [31.6400, -8.0500], [31.6800, -8.0400], [31.7000, -8.0500]
        ]
    },
    { 
        id: 4,
        name: 'Fès', 
        lat: 34.0331, 
        lng: -5.0084, 
        region: 'Fès-Meknès', 
        population: '1.2M',
        icon: '🏰',
        area: '320 km²',
        network: '945 km',
        consumption: '78M m³',
        efficiency: '76.2%',
        sensors: 112,
        risk: 'Modéré',
        boundary: [
            [34.1000, -5.0800], [34.0600, -5.0400], [34.0200, -5.0000],
            [33.9800, -4.9700], [33.9400, -4.9500], [33.9000, -4.9600],
            [33.8700, -4.9900], [33.8600, -5.0200], [33.8800, -5.0500],
            [33.9200, -5.0800], [33.9600, -5.1000], [34.0000, -5.0900],
            [34.0400, -5.0700], [34.0800, -5.0700], [34.1000, -5.0800]
        ]
    },
    { 
        id: 5,
        name: 'Tanger', 
        lat: 35.7670, 
        lng: -5.8328, 
        region: 'Tanger-Tétouan', 
        population: '1M',
        icon: '🌊',
        area: '250 km²',
        network: '612 km',
        consumption: '56M m³',
        efficiency: '80.1%',
        sensors: 87,
        risk: 'Faible',
        boundary: [
            [35.8200, -5.9000], [35.7800, -5.8600], [35.7400, -5.8200],
            [35.7000, -5.7900], [35.6600, -5.7700], [35.6200, -5.7800],
            [35.5900, -5.8000], [35.5800, -5.8300], [35.6000, -5.8600],
            [35.6400, -5.8900], [35.6800, -5.9100], [35.7200, -5.9200],
            [35.7600, -5.9000], [35.8000, -5.8900], [35.8200, -5.9000]
        ]
    },
    { 
        id: 6,
        name: 'Agadir', 
        lat: 30.4278, 
        lng: -9.5981, 
        region: 'Souss-Massa', 
        population: '924K',
        icon: '🏖️',
        area: '195 km²',
        network: '534 km',
        consumption: '45M m³',
        efficiency: '73.4%',
        sensors: 76,
        risk: 'Modéré',
        boundary: [
            [30.4800, -9.6600], [30.4400, -9.6200], [30.4000, -9.5800],
            [30.3600, -9.5600], [30.3200, -9.5600], [30.3000, -9.5800],
            [30.2800, -9.6100], [30.2900, -9.6400], [30.3200, -9.6600],
            [30.3600, -9.6800], [30.4000, -9.6700], [30.4400, -9.6500],
            [30.4800, -9.6600]
        ]
    },
    { 
        id: 7,
        name: 'Meknès', 
        lat: 33.8950, 
        lng: -5.5473, 
        region: 'Fès-Meknès', 
        population: '632K',
        icon: '🏛️',
        area: '178 km²',
        network: '423 km',
        consumption: '38M m³',
        efficiency: '77.9%',
        sensors: 65,
        risk: 'Faible',
        boundary: [
            [33.9500, -5.6100], [33.9100, -5.5700], [33.8700, -5.5300],
            [33.8300, -5.5100], [33.7900, -5.5100], [33.7600, -5.5300],
            [33.7500, -5.5600], [33.7700, -5.6000], [33.8100, -5.6200],
            [33.8500, -5.6300], [33.8900, -5.6100], [33.9300, -5.6000],
            [33.9500, -5.6100]
        ]
    },
    { 
        id: 8,
        name: 'Oujda', 
        lat: 34.6814, 
        lng: -1.9076, 
        region: 'Oriental', 
        population: '558K',
        icon: '🏙️',
        area: '145 km²',
        network: '367 km',
        consumption: '32M m³',
        efficiency: '74.2%',
        sensors: 54,
        risk: 'Élevé',
        boundary: [
            [34.7400, -1.9700], [34.7000, -1.9300], [34.6600, -1.8900],
            [34.6200, -1.8700], [34.5800, -1.8700], [34.5500, -1.8900],
            [34.5400, -1.9200], [34.5600, -1.9600], [34.6000, -1.9800],
            [34.6400, -1.9900], [34.6800, -1.9700], [34.7200, -1.9600],
            [34.7400, -1.9700]
        ]
    },
    { 
        id: 9,
        name: 'Kénitra', 
        lat: 34.2650, 
        lng: -6.5858, 
        region: 'Rabat-Salé-Kénitra', 
        population: '572K',
        icon: '🏭',
        area: '112 km²',
        network: '312 km',
        consumption: '28M m³',
        efficiency: '79.5%',
        sensors: 48,
        risk: 'Faible',
        boundary: [
            [34.3200, -6.6500], [34.2800, -6.6100], [34.2400, -6.5700],
            [34.2000, -6.5500], [34.1600, -6.5500], [34.1300, -6.5700],
            [34.1200, -6.6000], [34.1400, -6.6400], [34.1800, -6.6600],
            [34.2200, -6.6700], [34.2600, -6.6500], [34.3000, -6.6400],
            [34.3200, -6.6500]
        ]
    },
    { 
        id: 10,
        name: 'Tétouan', 
        lat: 35.5785, 
        lng: -5.3802, 
        region: 'Tanger-Tétouan', 
        population: '463K',
        icon: '⛰️',
        area: '98 km²',
        network: '278 km',
        consumption: '24M m³',
        efficiency: '76.8%',
        sensors: 42,
        risk: 'Modéré',
        boundary: [
            [35.6300, -5.4400], [35.5900, -5.4000], [35.5500, -5.3600],
            [35.5100, -5.3400], [35.4700, -5.3400], [35.4400, -5.3600],
            [35.4300, -5.3900], [35.4500, -5.4300], [35.4900, -5.4500],
            [35.5300, -5.4600], [35.5700, -5.4400], [35.6100, -5.4300],
            [35.6300, -5.4400]
        ]
    },
    { 
        id: 11,
        name: 'Safi', 
        lat: 32.2994, 
        lng: -9.2372, 
        region: 'Marrakech-Safi', 
        population: '415K',
        icon: '🏭',
        area: '86 km²',
        network: '234 km',
        consumption: '21M m³',
        efficiency: '72.1%',
        sensors: 38,
        risk: 'Élevé',
        boundary: [
            [32.3500, -9.2900], [32.3200, -9.2600], [32.2900, -9.2400],
            [32.2600, -9.2300], [32.2300, -9.2400], [32.2100, -9.2600],
            [32.2000, -9.2900], [32.2200, -9.3200], [32.2500, -9.3300],
            [32.2800, -9.3200], [32.3100, -9.3000], [32.3400, -9.2900],
            [32.3500, -9.2900]
        ]
    },
    { 
        id: 12,
        name: 'El Jadida', 
        lat: 33.2546, 
        lng: -8.5084, 
        region: 'Casablanca-Settat', 
        population: '396K',
        icon: '🏖️',
        area: '79 km²',
        network: '198 km',
        consumption: '18M m³',
        efficiency: '81.2%',
        sensors: 35,
        risk: 'Faible',
        boundary: [
            [33.3000, -8.5600], [33.2800, -8.5400], [33.2500, -8.5200],
            [33.2200, -8.5100], [33.1900, -8.5200], [33.1700, -8.5400],
            [33.1800, -8.5700], [33.2000, -8.5900], [33.2300, -8.6000],
            [33.2600, -8.5800], [33.2900, -8.5700], [33.3000, -8.5600]
        ]
    },
    { 
        id: 13,
        name: 'Beni Mellal', 
        lat: 32.3372, 
        lng: -6.3498, 
        region: 'Béni Mellal-Khénifra', 
        population: '375K',
        icon: '⛰️',
        area: '68 km²',
        network: '167 km',
        consumption: '15M m³',
        efficiency: '74.5%',
        sensors: 32,
        risk: 'Modéré',
        boundary: [
            [32.3800, -6.4000], [32.3600, -6.3800], [32.3300, -6.3600],
            [32.3000, -6.3500], [32.2700, -6.3600], [32.2500, -6.3800],
            [32.2600, -6.4100], [32.2800, -6.4300], [32.3100, -6.4400],
            [32.3400, -6.4200], [32.3700, -6.4100], [32.3800, -6.4000]
        ]
    },
    { 
        id: 14,
        name: 'Nador', 
        lat: 35.1747, 
        lng: -2.9325, 
        region: 'Oriental', 
        population: '348K',
        icon: '🌊',
        area: '62 km²',
        network: '145 km',
        consumption: '13M m³',
        efficiency: '77.3%',
        sensors: 29,
        risk: 'Élevé',
        boundary: [
            [35.2200, -2.9800], [35.2000, -2.9600], [35.1700, -2.9400],
            [35.1400, -2.9300], [35.1100, -2.9400], [35.0900, -2.9600],
            [35.1000, -2.9900], [35.1200, -3.0100], [35.1500, -3.0200],
            [35.1800, -3.0000], [35.2100, -2.9900], [35.2200, -2.9800]
        ]
    },
    { 
        id: 15,
        name: 'Khouribga', 
        lat: 32.8860, 
        lng: -6.9063, 
        region: 'Béni Mellal-Khénifra', 
        population: '326K',
        icon: '⛏️',
        area: '55 km²',
        network: '134 km',
        consumption: '12M m³',
        efficiency: '71.8%',
        sensors: 26,
        risk: 'Modéré',
        boundary: [
            [32.9300, -6.9500], [32.9100, -6.9300], [32.8800, -6.9100],
            [32.8500, -6.9000], [32.8200, -6.9100], [32.8000, -6.9300],
            [32.8100, -6.9600], [32.8300, -6.9800], [32.8600, -6.9900],
            [32.8900, -6.9700], [32.9200, -6.9600], [32.9300, -6.9500]
        ]
    },
    { 
        id: 16,
        name: 'Settat', 
        lat: 33.0010, 
        lng: -7.6166, 
        region: 'Casablanca-Settat', 
        population: '312K',
        icon: '🏙️',
        area: '48 km²',
        network: '123 km',
        consumption: '11M m³',
        efficiency: '76.4%',
        sensors: 24,
        risk: 'Faible',
        boundary: [
            [33.0500, -7.6600], [33.0300, -7.6400], [33.0000, -7.6200],
            [32.9700, -7.6100], [32.9400, -7.6200], [32.9200, -7.6400],
            [32.9300, -7.6700], [32.9500, -7.6900], [32.9800, -7.7000],
            [33.0100, -7.6800], [33.0400, -7.6700], [33.0500, -7.6600]
        ]
    }
];

// Variables globales
let map = null;
let selectedRole = null;
let markers = [];
let boundaries = [];
let sensors = [];
let activeCityLayer = null;
let emergencyMode = false;
let routingControl = null;
let activeLeaks = [];
let simulationInterval = null;
let userPosition = [33.5731, -7.5898]; // Position par défaut (Casablanca)

// Éléments DOM
const loadingScreen = document.getElementById('loadingScreen');
const loadingBar = document.getElementById('loadingBar');
const loadingStatus = document.getElementById('loadingStatus');
const roleScreen = document.getElementById('roleScreen');
const app = document.getElementById('app');
const cityPanel = document.getElementById('cityPanel');
const sensorPanel = document.getElementById('sensorPanel');
const alertsPanel = document.getElementById('alertsPanel');
const alertsList = document.getElementById('alertsList');
const alertCount = document.getElementById('alertCount');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const emergencyBtn = document.getElementById('emergencyBtn');

// Initialisation avec barre de progression
window.addEventListener('load', function() {
    let progress = 0;
    const interval = setInterval(function() {
        progress += 5;
        loadingBar.style.width = progress + '%';
        
        if (progress === 20) loadingStatus.textContent = 'Chargement des données des villes...';
        if (progress === 40) loadingStatus.textContent = 'Déploiement des capteurs intelligents...';
        if (progress === 60) loadingStatus.textContent = 'Initialisation du réseau de surveillance...';
        if (progress === 80) loadingStatus.textContent = 'Activation du système d\'alerte...';
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(function() {
                loadingScreen.style.opacity = '0';
                setTimeout(function() {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 500);
        }
    }, 100);
});

// Fonctions de rôle
function selectRole(role) {
    document.querySelectorAll('.role-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    
    selectedRole = role;
    document.getElementById('enterBtn').disabled = false;
    
    const roleNames = {
        'technicien': '👨‍🔧 Technicien',
        'commune': '🏛️ Commune',
        'superviseur': '📊 Superviseur',
        'admin': '👑 Administrateur'
    };
    
    document.getElementById('selectedRoleInfo').innerHTML = `Rôle sélectionné: ${roleNames[role]}`;
    
    // Afficher le mode urgence seulement pour les techniciens
    if (role === 'technicien') {
        document.querySelector('.emergency-btn').style.display = 'flex';
    } else {
        document.querySelector('.emergency-btn').style.display = 'none';
    }
}

function enterPlatform() {
    if (!selectedRole) return;
    
    // Mettre à jour l'interface
    document.getElementById('userRole').textContent = 
        selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1);
    
    roleScreen.style.opacity = '0';
    setTimeout(() => {
        roleScreen.style.display = 'none';
        app.style.display = 'block';
        setTimeout(() => {
            app.style.opacity = '1';
            initMap();
            generateSensors();
            updateStats();
            startLeakSimulation();
        }, 100);
    }, 500);
}

function logout() {
    // Arrêter la simulation
    if (simulationInterval) clearInterval(simulationInterval);
    
    app.style.opacity = '0';
    setTimeout(() => {
        app.style.display = 'none';
        roleScreen.style.display = 'flex';
        setTimeout(() => {
            roleScreen.style.opacity = '1';
        }, 50);
    }, 500);
    
    document.querySelectorAll('.role-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.getElementById('enterBtn').disabled = true;
    document.getElementById('selectedRoleInfo').innerHTML = '';
    selectedRole = null;
}

// Fonctions de carte
function initMap() {
    if (map) return;
    
    try {
        // Créer la carte
        map = L.map('map').setView([31.7917, -7.0926], 6.5);
        
        // Ajouter les tuiles
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: 'OpenStreetMap',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);

        // Ajouter les contrôles
        L.control.zoom({ position: 'bottomright' }).addTo(map);
        
        // Ajouter les éléments
        addCityBoundaries();
        addCityMarkers();
        
        // Forcer le redimensionnement
        setTimeout(() => {
            map.invalidateSize();
        }, 200);
        
        // Mettre à jour les stats
        document.getElementById('totalSensors').textContent = sensors.length;
        
    } catch (error) {
        console.error('Erreur:', error);
    }
}

function addCityBoundaries() {
    cities.forEach(city => {
        const boundary = L.polygon(city.boundary, {
            color: '#3b82f6',
            weight: 2,
            opacity: 0.5,
            fillColor: '#3b82f6',
            fillOpacity: 0.05,
            dashArray: '5, 5'
        }).addTo(map);
        
        boundary.on('click', () => highlightCity(city));
        boundaries.push(boundary);
    });
}

function addCityMarkers() {
    cities.forEach(city => {
        const marker = L.marker([city.lat, city.lng], {
            icon: L.divIcon({
                className: 'custom-marker',
                html: city.icon,
                iconSize: [40, 40],
                iconAnchor: [20, 20]
            })
        }).addTo(map);
        
        marker.on('click', () => highlightCity(city));
        markers.push(marker);
    });
}

function generateSensors() {
    const colors = { normal: '#10b981', warning: '#f59e0b', danger: '#ef4444' };
    
    // Générer 200 capteurs intelligents répartis dans toutes les villes
    for (let i = 0; i < 200; i++) {
        const city = cities[Math.floor(Math.random() * cities.length)];
        const lat = city.lat + (Math.random() - 0.5) * 0.25;
        const lng = city.lng + (Math.random() - 0.5) * 0.25;
        
        // Types de capteurs
        const types = ['flow', 'pressure', 'quality', 'temperature', 'level'];
        const type = types[Math.floor(Math.random() * types.length)];
        
        // Statut avec probabilité
        const rand = Math.random();
        let status, value, unit;
        
        if (rand < 0.85) { // 85% normal
            status = 'normal';
            if (type === 'flow') value = Math.floor(Math.random() * 100 + 80);
            if (type === 'pressure') value = (Math.random() * 2 + 2).toFixed(1);
            if (type === 'quality') value = (Math.random() * 5 + 95).toFixed(1);
            if (type === 'temperature') value = (Math.random() * 5 + 18).toFixed(1);
            if (type === 'level') value = Math.floor(Math.random() * 30 + 70);
        } else if (rand < 0.95) { // 10% warning
            status = 'warning';
            if (type === 'flow') value = Math.floor(Math.random() * 40 + 40);
            if (type === 'pressure') value = (Math.random() * 1 + 1).toFixed(1);
            if (type === 'quality') value = (Math.random() * 10 + 80).toFixed(1);
            if (type === 'temperature') value = (Math.random() * 5 + 23).toFixed(1);
            if (type === 'level') value = Math.floor(Math.random() * 30 + 30);
        } else { // 5% danger (fuite potentielle)
            status = 'danger';
            if (type === 'flow') value = Math.floor(Math.random() * 200 + 150);
            if (type === 'pressure') value = (Math.random() * 3 + 0.5).toFixed(1);
            if (type === 'quality') value = (Math.random() * 20 + 60).toFixed(1);
            if (type === 'temperature') value = (Math.random() * 10 + 25).toFixed(1);
            if (type === 'level') value = Math.floor(Math.random() * 30 + 10);
        }
        
        const sensor = {
            id: `SN-${2421 + i}`,
            type: type,
            lat: lat,
            lng: lng,
            city: city.name,
            status: status,
            value: value,
            battery: Math.floor(Math.random() * 30 + 70),
            lastUpdate: new Date().toLocaleTimeString()
        };
        
        sensors.push(sensor);
        
        const marker = L.marker([lat, lng], {
            icon: L.divIcon({
                className: `sensor-marker marker-${status}`,
                html: `<div style="width:100%;height:100%;background:${colors[status]};border-radius:50%;"></div>`,
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            })
        }).addTo(map);
        
        marker.on('click', () => openSensorPanel(sensor));
        markers.push(marker);
    }
}

function highlightCity(city) {
    // Voler vers la ville
    map.flyTo([city.lat, city.lng], 10, { duration: 2 });
    
    // Supprimer l'ancien contour
    if (activeCityLayer) map.removeLayer(activeCityLayer);
    
    // Ajouter le nouveau contour
    activeCityLayer = L.polygon(city.boundary, {
        color: '#10b981',
        weight: 3,
        opacity: 0.8,
        fillColor: '#10b981',
        fillOpacity: 0.1,
        className: 'city-boundary-highlight'
    }).addTo(map);
    
    // Compter les fuites dans cette ville
    const cityLeaks = activeLeaks.filter(leak => leak.city === city.name).length;
    
    // Mettre à jour le panneau
    document.getElementById('cityIcon').textContent = city.icon;
    document.getElementById('cityName').textContent = city.name;
    document.getElementById('cityRegion').textContent = city.region;
    document.getElementById('cityPopulation').textContent = city.population;
    document.getElementById('citySensors').textContent = city.sensors;
    document.getElementById('cityArea').textContent = city.area;
    document.getElementById('cityNetwork').textContent = city.network;
    document.getElementById('cityConsumption').textContent = city.consumption;
    document.getElementById('cityEfficiency').textContent = city.efficiency;
    document.getElementById('cityLeaks').textContent = cityLeaks;
    
    cityPanel.classList.add('active');
    
    // Cacher les résultats
    searchResults.classList.remove('active');
}

function openSensorPanel(sensor) {
    document.getElementById('sensorId').textContent = `Capteur ${sensor.id}`;
    document.getElementById('sensorLocation').textContent = sensor.city;
    
    let unit = '';
    if (sensor.type === 'flow') unit = 'L/s';
    if (sensor.type === 'pressure') unit = 'bar';
    if (sensor.type === 'quality') unit = '%';
    if (sensor.type === 'temperature') unit = '°C';
    if (sensor.type === 'level') unit = '%';
    
    const metrics = document.getElementById('sensorMetrics');
    metrics.innerHTML = `
                <div class="metric-card">
                    <div class="metric-label">Type</div>
                    <div class="metric-value">${sensor.type}</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">Valeur</div>
                    <div class="metric-value">${sensor.value}<span class="metric-unit">${unit}</span></div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">Batterie</div>
                    <div class="metric-value">${sensor.battery}<span class="metric-unit">%</span></div>
                    <div class="metric-status ${sensor.battery < 20 ? 'status-danger' : sensor.battery < 50 ? 'status-warning' : 'status-good'}">
                        ${sensor.battery < 20 ? 'Faible' : sensor.battery < 50 ? 'Moyenne' : 'Bonne'}
                    </div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">Statut</div>
                    <div class="metric-value" style="color: ${sensor.status === 'normal' ? '#10b981' : sensor.status === 'warning' ? '#f59e0b' : '#ef4444'}">${sensor.status}</div>
                </div>
            `;
    
    sensorPanel.classList.add('active');
}

// ==================== MODE URGENCE AVANCÉ ====================
function toggleEmergencyMode() {
    emergencyMode = !emergencyMode;
    
    if (emergencyMode) {
        emergencyBtn.classList.add('active');
        emergencyBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> MODE URGENCE ACTIF';
        alertsPanel.style.display = 'block';
        
        // Simuler une détection de fuite immédiate
        simulateLeak();
        
        // Démarrer la surveillance en temps réel
        startEmergencyMonitoring();
    } else {
        emergencyBtn.classList.remove('active');
        emergencyBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> MODE URGENCE';
        alertsPanel.style.display = 'none';
        
        // Nettoyer les itinéraires
        if (routingControl) {
            map.removeControl(routingControl);
            routingControl = null;
        }
    }
}

function startLeakSimulation() {
    // Simuler des fuites toutes les 30 secondes
    simulationInterval = setInterval(() => {
        if (Math.random() > 0.7) { // 30% de chance de nouvelle fuite
            simulateLeak();
        }
    }, 30000);
}

function simulateLeak() {
    const city = cities[Math.floor(Math.random() * cities.length)];
    
    // Générer une position autour de la ville
    const lat = city.lat + (Math.random() - 0.5) * 0.2;
    const lng = city.lng + (Math.random() - 0.5) * 0.2;
    
    const leakTypes = ['Fuite majeure', 'Fuite moyenne', 'Micro-fuite'];
    const leakType = leakTypes[Math.floor(Math.random() * leakTypes.length)];
    
    const severities = ['Critique', 'Élevée', 'Moyenne'];
    const severity = severities[Math.floor(Math.random() * severities.length)];
    
    const leak = {
        id: `LEAK-${Math.floor(Math.random() * 9000 + 1000)}`,
        lat: lat,
        lng: lng,
        city: city.name,
        type: leakType,
        severity: severity,
        time: new Date().toLocaleTimeString(),
        flow: Math.floor(Math.random() * 500 + 200) + ' L/min',
        pressure: (Math.random() * 5 + 1).toFixed(1) + ' bar'
    };
    
    activeLeaks.push(leak);
    
    // Ajouter un marqueur de fuite
    const leakMarker = L.marker([lat, lng], {
        icon: L.divIcon({
            className: 'leak-marker',
            html: '<i class="fas fa-exclamation-triangle" style="color:white; font-size:16px; display:flex; align-items:center; justify-content:center; height:100%;"></i>',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        })
    }).addTo(map);
    
    leakMarker.on('click', () => showLeakDetails(leak));
    markers.push(leakMarker);
    
    // Mettre à jour l'interface
    updateAlertsList();
    updateStats();
    
    // Si le mode urgence est actif, calculer l'itinéraire
    if (emergencyMode) {
        calculateRouteToLeak(leak);
    }
}

function simulateLeakFromSensor() {
    // Récupérer la position du capteur actuellement affiché
    const sensorId = document.getElementById('sensorId').textContent;
    const sensorLocation = document.getElementById('sensorLocation').textContent;
    
    const city = cities.find(c => c.name === sensorLocation);
    if (!city) return;
    
    const lat = city.lat + (Math.random() - 0.5) * 0.15;
    const lng = city.lng + (Math.random() - 0.5) * 0.15;
    
    const leak = {
        id: `LEAK-${Math.floor(Math.random() * 9000 + 1000)}`,
        lat: lat,
        lng: lng,
        city: city.name,
        type: 'Fuite détectée',
        severity: 'Critique',
        time: new Date().toLocaleTimeString(),
        flow: Math.floor(Math.random() * 600 + 300) + ' L/min',
        pressure: (Math.random() * 3 + 0.5).toFixed(1) + ' bar'
    };
    
    activeLeaks.push(leak);
    
    // Ajouter un marqueur de fuite
    const leakMarker = L.marker([lat, lng], {
        icon: L.divIcon({
            className: 'leak-marker',
            html: '<i class="fas fa-exclamation-triangle" style="color:white; font-size:16px; display:flex; align-items:center; justify-content:center; height:100%;"></i>',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        })
    }).addTo(map);
    
    leakMarker.on('click', () => showLeakDetails(leak));
    markers.push(leakMarker);
    
    // Activer le mode urgence automatiquement
    if (!emergencyMode) {
        toggleEmergencyMode();
    }
    
    // Calculer l'itinéraire
    calculateRouteToLeak(leak);
    updateAlertsList();
}

function calculateRouteToLeak(leak) {
    // Supprimer l'ancien itinéraire
    if (routingControl) {
        map.removeControl(routingControl);
    }
    
    try {
        // Créer un nouvel itinéraire
        routingControl = L.Routing.control({
            waypoints: [
                L.latLng(userPosition[0], userPosition[1]),
                L.latLng(leak.lat, leak.lng)
            ],
            router: L.Routing.osrmv1({
                serviceUrl: 'https://router.project-osrm.org/route/v1'
            }),
            lineOptions: {
                styles: [{ color: '#ef4444', weight: 6, opacity: 0.8 }]
            },
            show: false,
            addWaypoints: false,
            routeWhileDragging: false,
            fitSelectedRoutes: false
        }).addTo(map);
        
        routingControl.on('routesfound', function(e) {
            const routes = e.routes;
            const summary = routes[0].summary;
            
            // Mettre à jour l'alerte avec les informations de route
            const alertItem = document.querySelector(`[data-leak-id="${leak.id}"]`);
            if (alertItem) {
                const routeDiv = alertItem.querySelector('.alert-route') || document.createElement('div');
                routeDiv.className = 'alert-route';
                routeDiv.innerHTML = `
                            <div class="route-info">
                                <span class="route-distance">${(summary.totalDistance / 1000).toFixed(1)} km</span>
                                <span class="route-time">${Math.round(summary.totalTime / 60)} min</span>
                            </div>
                            <button class="route-btn" onclick="focusOnLeak('${leak.id}')">
                                <i class="fas fa-location-arrow"></i>
                            </button>
                        `;
                alertItem.appendChild(routeDiv);
            }
        });
        
        // Zoomer sur la zone
        map.flyTo([leak.lat, leak.lng], 14, { duration: 1.5 });
        
    } catch (error) {
        console.error('Erreur de routage:', error);
    }
}

function focusOnLeak(leakId) {
    const leak = activeLeaks.find(l => l.id === leakId);
    if (leak) {
        map.flyTo([leak.lat, leak.lng], 16, { duration: 1 });
    }
}

function showLeakDetails(leak) {
    alert(`🔴 FUITE DÉTECTÉE\n\nID: ${leak.id}\nVille: ${leak.city}\nType: ${leak.type}\nSévérité: ${leak.severity}\nDébit: ${leak.flow}\nPression: ${leak.pressure}\nHeure: ${leak.time}`);
}

function updateAlertsList() {
    if (activeLeaks.length === 0) {
        alertsList.innerHTML = '<div style="color: #94a3b8; text-align: center; padding: 20px;">Aucune alerte active</div>';
        alertCount.textContent = '0';
        return;
    }
    
    alertCount.textContent = activeLeaks.length;
    
    alertsList.innerHTML = activeLeaks.map(leak => `
                <div class="alert-item" data-leak-id="${leak.id}" onclick="focusOnLeak('${leak.id}')">
                    <div class="alert-title">
                        <span>${leak.id}</span>
                        <span class="alert-time">${leak.time}</span>
                    </div>
                    <div class="alert-location">${leak.city}</div>
                    <div class="alert-details">
                        <span class="alert-type">${leak.type}</span>
                        <span class="alert-severity">${leak.severity}</span>
                    </div>
                    <div class="alert-route" id="route-${leak.id}">
                        <div class="route-info">
                            <span class="route-distance">Calcul...</span>
                        </div>
                    </div>
                </div>
            `).join('');
}

function startEmergencyMonitoring() {
    // Surveiller les nouveaux capteurs en mode danger
    setInterval(() => {
        const dangerSensors = sensors.filter(s => s.status === 'danger');
        if (dangerSensors.length > 0 && Math.random() > 0.8) {
            const sensor = dangerSensors[Math.floor(Math.random() * dangerSensors.length)];
            simulateLeakFromSensorLocation(sensor);
        }
    }, 15000);
}

function simulateLeakFromSensorLocation(sensor) {
    const leak = {
        id: `LEAK-${Math.floor(Math.random() * 9000 + 1000)}`,
        lat: sensor.lat,
        lng: sensor.lng,
        city: sensor.city,
        type: 'Fuite détectée par capteur',
        severity: 'Élevée',
        time: new Date().toLocaleTimeString(),
        flow: Math.floor(Math.random() * 400 + 200) + ' L/min',
        pressure: (Math.random() * 4 + 0.5).toFixed(1) + ' bar'
    };
    
    activeLeaks.push(leak);
    
    // Ajouter un marqueur de fuite
    const leakMarker = L.marker([sensor.lat, sensor.lng], {
        icon: L.divIcon({
            className: 'leak-marker',
            html: '<i class="fas fa-exclamation-triangle" style="color:white; font-size:16px; display:flex; align-items:center; justify-content:center; height:100%;"></i>',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        })
    }).addTo(map);
    
    markers.push(leakMarker);
    updateAlertsList();
}

function updateStats() {
    document.getElementById('totalSensors').textContent = sensors.length;
    document.getElementById('totalLeaks').textContent = activeLeaks.length;
    
    const sensorTrend = document.getElementById('sensorTrend');
    const leakTrend = document.getElementById('leakTrend');
    
    sensorTrend.innerHTML = '↑ ' + Math.floor(Math.random() * 30 + 10) + ' aujourd\'hui';
    leakTrend.innerHTML = '↓ ' + Math.floor(Math.random() * 10 + 2) + '% vs hier';
}

// Fonctions de recherche
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;
    
    const city = cities.find(c => c.name.toLowerCase() === query);
    if (city) {
        highlightCity(city);
    } else {
        alert('Ville non trouvée');
    }
}

function clearSearch() {
    searchInput.value = '';
    document.getElementById('searchBox').classList.remove('has-text');
    searchResults.classList.remove('active');
}

// Gestionnaires d'événements pour la recherche
searchInput.addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase().trim();
    
    if (query.length > 0) {
        document.getElementById('searchBox').classList.add('has-text');
        
        const results = cities.filter(city => 
            city.name.toLowerCase().includes(query)
        );
        
        if (results.length > 0) {
            searchResults.innerHTML = results.map(city => `
                        <div class="search-result-item" onclick="highlightCity(${JSON.stringify(city).replace(/"/g, '&quot;')})">
                            <i class="fas fa-city"></i>
                            <div class="result-info">
                                <div class="result-name">${city.name}</div>
                                <div class="result-region">${city.region}</div>
                            </div>
                            <span class="result-badge">${city.population}</span>
                        </div>
                    `).join('');
            searchResults.classList.add('active');
        } else {
            searchResults.classList.remove('active');
        }
    } else {
        document.getElementById('searchBox').classList.remove('has-text');
        searchResults.classList.remove('active');
    }
});

// Fermer les résultats en cliquant ailleurs
document.addEventListener('click', function(e) {
    if (!searchResults.contains(e.target) && !searchInput.contains(e.target)) {
        searchResults.classList.remove('active');
    }
});

// Fonctions d'interface
function closeCityPanel() {
    cityPanel.classList.remove('active');
    if (activeCityLayer) {
        map.removeLayer(activeCityLayer);
        activeCityLayer = null;
    }
}

function closeSensorPanel() {
    sensorPanel.classList.remove('active');
}

function toggleSatellite() {
   const btn = event.currentTarget;
    const isActive = btn.classList.contains('active');
    
    if (map) {
        map.eachLayer(layer => {
            if (layer instanceof L.TileLayer) map.removeLayer(layer);
        });
        
        if (!isActive) {
            L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Esri',
                maxZoom: 19
            }).addTo(map);
            btn.classList.add('active');
        } else {
            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: 'OpenStreetMap',
                subdomains: 'abcd'
            }).addTo(map);
            btn.classList.remove('active');
        }
    }
}

function toggleDark() {
    // Déjà en mode dark
    event.currentTarget.classList.add('active');
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// Exposer les fonctions globalement
window.selectRole = selectRole;
window.enterPlatform = enterPlatform;
window.logout = logout;
window.highlightCity = highlightCity;
window.closeCityPanel = closeCityPanel;
window.closeSensorPanel = closeSensorPanel;
window.performSearch = performSearch;
window.clearSearch = clearSearch;
window.toggleSatellite = toggleSatellite;
window.toggleDark = toggleDark;
window.toggleFullscreen = toggleFullscreen;
window.toggleEmergencyMode = toggleEmergencyMode;
window.simulateLeakFromSensor = simulateLeakFromSensor;
window.focusOnLeak = focusOnLeak;

// Reveal team section when scrolled into view
function initTeamObserver() {
    const section = document.getElementById('teamSection');
    if (!section) return;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add('visible');
                observer.unobserve(section); // only once
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.2
    });
    observer.observe(section);
}

window.addEventListener('load', initTeamObserver);
