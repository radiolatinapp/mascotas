// Negocios REALES de Charlotte, NC (EE. UU.) extraídos de los mapas (verificado 2026-10-24).
// cat: vet=Veterinarias, tienda=Tiendas, farma=Farmacias veterinarias y urgencias 24 h
// horas: [abre, cierra] en hora 24h (referencia lun-vie); null = abierto 24 h o sin dato publicado.
// En Charlotte no hay agropecuarias como en Ibagué: la categoría roja reúne farmacias
// veterinarias y hospitales de urgencias 24 h.
const NEGOCIOS_CHARLOTTE = [
 {n:"Hight Veterinary Hospital", cat:"vet", lat:35.316008, lng:-80.739325, dir:"9528 N Tryon St, Charlotte, NC", tel:"+17045959377", horas:[7.5,18], rating:4.7, nota:"Zona universitaria, cerca de su casa; farmacia propia"},
 {n:"VCA Stoney Creek Animal Hospital", cat:"vet", lat:35.328411, lng:-80.737028, dir:"626 W Mallard Creek Church Rd, Charlotte, NC", tel:"+17047170616", horas:[7,18], rating:4.5, nota:"Hospital completo, guardería y daycare"},
 {n:"Mallard Creek Animal Hospital", cat:"vet", lat:35.322463, lng:-80.773976, dir:"2110 Ben Craig Dr STE 100, Charlotte, NC", tel:"+17047177878", horas:[7.5,18], rating:4.9, nota:"Familiar, farmacia en línea"},
 {n:"Banfield Pet Hospital", cat:"vet", lat:35.309889, lng:-80.747911, dir:"8960 J M Keynes Dr Ste 610, Charlotte, NC", tel:"+17045966224", horas:[7,18], nota:"Planes de bienestar Optimum"},
 {n:"Brookdale Animal Hospital", cat:"vet", lat:35.283359, lng:-80.671858, dir:"13528 Plaza Road Ext, Charlotte, NC", tel:"+17045981095", horas:[8,17.5], rating:5.0, nota:"Noreste, cerca de su casa"},
 {n:"Ark Veterinary Services", cat:"vet", lat:35.201728, lng:-80.735192, dir:"6444 Albemarle Rd, Charlotte, NC 28212", tel:"+17046757387", horas:[9,20], nota:"Este de Charlotte, todas las especies, urgencias sin cita"},
 {n:"CLT Vets", cat:"vet", lat:35.21455, lng:-80.854802, dir:"1500 South Blvd Ste 101A, Charlotte, NC", tel:"+17047038363", horas:[8,18], nota:"South End, citas en línea; cierra 12–1 p. m. para almuerzo"},
 {n:"CityVet Charlotte Uptown", cat:"vet", lat:35.2182, lng:-80.843187, dir:"650 E Brooklyn Village Ave, Charlotte, NC", tel:"+19802493113", horas:[8,18], nota:"Uptown, urgencias mismo día, acupuntura"},
 {n:"Queen City Animal Hospital", cat:"vet", lat:35.227784, lng:-80.821399, dir:"920 Belmont Ave, Charlotte, NC", tel:"+17047031414", horas:[8,18], nota:"AAHA, perros, gatos, aves y reptiles"},
 {n:"South End Veterinary Clinic", cat:"vet", lat:35.205843, lng:-80.87017, dir:"415 Remount Rd, Charlotte, NC", tel:"+17046328012", horas:[8,18], rating:5.0, nota:"Cirugía y dental"},
 {n:"Crown Town Animal Hospital", cat:"vet", lat:35.239184, lng:-80.835537, dir:"413 Dalton Ave Ste e, Charlotte, NC", tel:"+17047419997", horas:[8,17.5], nota:"Urgencias mismo día"},
 {n:"Partners Animal Hospital", cat:"vet", lat:35.241998, lng:-80.811347, dir:"2514 N Davidson St, Charlotte, NC", tel:"+17042752109", horas:[8,18], nota:"NoDa, precios claros"},
 {n:"GoodVets Plaza Midwood", cat:"vet", lat:35.220621, lng:-80.809856, dir:"1713 Central Ave, Charlotte, NC", tel:"+17049808355", horas:[8,18], nota:"Plaza Midwood, urgencias"},
 {n:"Livewell Animal Hospital of Elizabeth", cat:"vet", lat:35.213987, lng:-80.827436, dir:"1524 Elizabeth Ave, Charlotte, NC", tel:"+19808804987", horas:[8,18], nota:"Citas mismo día, farmacia en línea"},
 {n:"Long Animal Hospital & Emergency Center", cat:"vet", lat:35.202502, lng:-80.864914, dir:"2523 South Blvd, Charlotte, NC", tel:"+17045232996", horas:[7,20], rating:4.6, h24:true, nota:"Urgencias 24 h, desde 1948"},
 {n:"Animal Medical Hospital", cat:"vet", lat:35.197698, lng:-80.794201, dir:"3832 Monroe Rd, Charlotte, NC", tel:"+17043344684", horas:[7,20], rating:4.6, h24:true, nota:"Urgencias 24/7, hospitalización"},
 {n:"Hollywood Feed", cat:"tienda", lat:35.198529, lng:-80.85242, dir:"2400 Park Rd, Charlotte, NC", tel:"+19802565884", horas:[9,19.5], nota:"Comida natural, autolavado"},
 {n:"Pet Supplies Plus Elizabeth", cat:"tienda", lat:35.212396, lng:-80.817153, dir:"2001 E 7th St, Charlotte, NC", tel:"+17048178360", horas:[9,21], rating:4.5, nota:"Grooming y autolavado"},
 {n:"Pet Supplies Plus Pineville-Matthews", cat:"tienda", lat:35.086673, lng:-80.847649, dir:"7601 Pineville-Matthews Rd, Charlotte, NC", tel:"+19808196163", horas:[9,21], nota:"Sur de Charlotte"},
 {n:"Four Dogs Pet Supplies", cat:"tienda", lat:35.243352, lng:-80.8107, dir:"2630 N Davidson St, Charlotte, NC", tel:"+19802986046", horas:[10,19], rating:4.9, nota:"NoDa, ultra premium"},
 {n:"Pet Wants Uptown", cat:"tienda", lat:35.226699, lng:-80.843288, dir:"101 S Tryon St #3, Charlotte, NC", tel:"+17047721738", horas:[10,16], nota:"Comida fresca mensual"},
 {n:"Pet Wants Brevard", cat:"tienda", lat:35.233784, lng:-80.827316, dir:"1115 N Brevard St, Charlotte, NC", tel:"+17049413090", horas:[10.5,21], nota:"Comida fresca, entrega gratis +$35"},
 {n:"Pet Wants Camden", cat:"tienda", lat:35.213487, lng:-80.858169, dir:"1700 Camden Rd, Charlotte, NC", tel:"+17044122992", horas:[8,20], rating:5.0, nota:"South End, patio para perros"},
 {n:"Petco Metropolitan", cat:"tienda", lat:35.214758, lng:-80.835087, dir:"900 Metropolitan Ave Ste 1A, Charlotte, NC", tel:"+17049164047", horas:[9,21], nota:"Grooming, adiestramiento, clínica de vacunas"},
 {n:"Monroe Road Animal Hospital", cat:"farma", lat:35.199242, lng:-80.795487, dir:"3736 Monroe Rd, Charlotte, NC 28205", tel:"+17043333336", horas:[7.75,18], rating:4.5, nota:"Farmacia propia y en línea, exóticos"},
 {n:"CARE Charlotte Animal Referral & Emergency", cat:"farma", lat:35.194385, lng:-80.798519, dir:"3726 Latrobe Dr, Charlotte, NC 28211", tel:"+17044572300", horas:null, h24:true, nota:"Urgencias 24 h, 365 días — hospital de referencia"},
 // --- Zoológicos y acuarios ---
 {n:"Lazy 5 Ranch", cat:"zoo", lat:35.622964, lng:-80.720769, dir:"15100 Mooresville Rd, Mooresville, NC 28115", tel:"+17046635100", horas:[9,16], rating:4.7, nota:"Safari en carro, +750 animales de 6 continentes; solo efectivo o cheque"},
 {n:"SEA LIFE Charlotte-Concord", cat:"zoo", lat:35.369233, lng:-80.725108, dir:"8111 Concord Mills Blvd, Concord, NC 28027", tel:"+17044561955", horas:[10,18], rating:4.0, nota:"Túnel oceánico 180°, piscina táctil, tiburones y rayas"},
 {n:"Carolina Raptor Center", cat:"zoo", lat:35.3503494, lng:-80.9183712, dir:"6000 Sample Rd, Huntersville, NC 28078", horas:null, nota:"Dato de OpenStreetMap"},
 // --- Parques para perros (OpenStreetMap) ---
 {n:"Lucky Dog Bark and Brew", cat:"parque", lat:35.2338452, lng:-80.8725736, dir:"2220 Thrift Rd, Charlotte, NC 28208", horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Heather Ridge Dog Park", cat:"parque", lat:35.2930975, lng:-80.7341031, horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Agility Park", cat:"parque", lat:35.0288987, lng:-80.9626626, horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Pet Station Dog Park", cat:"parque", lat:35.1434311, lng:-80.864321, horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Canine Commons Dog Park", cat:"parque", lat:35.0761841, lng:-80.892893, dir:"181 Lake Dr, Pineville, NC", horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Weddington Road Bark Park", cat:"parque", lat:35.3723237, lng:-80.7041531, dir:"8955 Weddington Rd, Concord, NC", horas:null, nota:"Dato de OpenStreetMap"},
 {n:"McAlpine Creek Dog Park", cat:"parque", lat:35.1525195, lng:-80.7449955, dir:"8617 Monroe Rd, Charlotte, NC", horas:null, nota:"Dato de OpenStreetMap"},
 {n:"The Vineyards on Lake Wylie Dog Park", cat:"parque", lat:35.2286691, lng:-80.9960801, horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Rosedale Dog park", cat:"parque", lat:35.4099492, lng:-80.8658513, horas:null, nota:"Dato de OpenStreetMap"},
 {n:"9th Street Dog Park", cat:"parque", lat:35.2339839, lng:-80.8413403, dir:"417 W 9th St, Charlotte, NC", horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Skiptown", cat:"parque", lat:35.2092087, lng:-80.8643671, dir:"222 Rampart St, Charlotte, NC", horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Broadstone Ayrsley Dog Park", cat:"parque", lat:35.1322047, lng:-80.9329177, horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Story University North Dog Park", cat:"parque", lat:35.3498027, lng:-80.7009049, dir:"3800 Morehead Rd, Charlotte, NC", horas:null, nota:"Dato de OpenStreetMap"},
 // --- Peluquerías (OpenStreetMap) ---
 {n:"Million Dollar Dog, Inc", cat:"peluqueria", lat:35.2473792, lng:-81.0185364, dir:"7202 Wilkinson Blvd, Belmont, NC", horas:null, nota:"Dato de OpenStreetMap"},
 {n:"QC Canine Design", cat:"peluqueria", lat:35.2350646, lng:-80.8405603, horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Bubbly Paws", cat:"peluqueria", lat:35.199421, lng:-80.8685335, dir:"141 New Bern St, Charlotte, NC", horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Whiskers Dog Spa", cat:"peluqueria", lat:35.1468553, lng:-80.8085411, horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Splash and Dash", cat:"peluqueria", lat:35.1777435, lng:-80.7561693, horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Tiffany's Pet Salon", cat:"peluqueria", lat:35.1728188, lng:-80.6567494, dir:"11300 Lawyers Rd, Mint Hill, NC", horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Grateful Pets", cat:"peluqueria", lat:35.1475769, lng:-80.7457742, horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Zoom Room Huntersville-Lake Norman", cat:"peluqueria", lat:35.4123763, lng:-80.854674, dir:"Statesville Rd, Huntersville, NC", horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Feline Fabulous", cat:"peluqueria", lat:35.2218266, lng:-80.8196102, horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:35.2209162, lng:-80.8136904, dir:"1311 Pecan Ave, Charlotte, NC", horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Four Paws Dog Retreat", cat:"peluqueria", lat:35.1140681, lng:-80.9118884, dir:"10901 Downs Rd, Pineville, NC", horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Grateful Pets Pet Grooming & Boarding", cat:"peluqueria", lat:35.3222069, lng:-80.9539366, dir:"10317 Rozzelles Ferry Rd, Charlotte, NC", horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Zoom Room Dog Training - Fort Mill", cat:"peluqueria", lat:34.9834174, lng:-80.9400518, dir:"5525 Arden Mill Dr, Fort Mill, SC", horas:null, nota:"Dato de OpenStreetMap"},
 // --- Refugios (OpenStreetMap) ---
 {n:"Cabarrus County Animal Shelter", cat:"refugio", lat:35.3724337, lng:-80.5625683, dir:"244 Betsy Carpenter Pl SW, Concord, NC", horas:null, nota:"Dato de OpenStreetMap"},
 {n:"Carolina Waterfowl Rescue", cat:"refugio", lat:35.0900204, lng:-80.594814, dir:"5403 Poplin Rd, Indian Trail, NC", horas:null, nota:"Dato de OpenStreetMap"},
 // --- Granjas para visitar ---
 {n:"Carrigan Farms", cat:"granja", lat:35.600222, lng:-80.768861, dir:"1261 Oakridge Farm Hwy, Mooresville, NC 28115", tel:"+17046641450", horas:null, rating:4.4, nota:"Granja familiar de 300 acres: fresas, manzanas, calabazas; horario por temporada, confirma antes de ir"},
 // --- Refugio / perrera municipal ---
 {n:"CMPD Animal Care & Control", cat:"refugio", lat:35.191225, lng:-80.948284, dir:"8315 Byrum Dr, Charlotte, NC 28217", tel:"+17043367600", horas:[11,19], nota:"Perrera municipal: adopciones y mascotas perdidas o encontradas"},
 // --- Adopciones ---
 {n:"Humane Society of Charlotte", cat:"adopcion", lat:35.220766, lng:-80.879215, dir:"1348 Parker Dr, Charlotte, NC 28208", tel:"+17043770534", horas:[11,17], rating:4.7, nota:"Adopciones, esterilización y banco de alimentos para mascotas"},
 // --- Facultades e institutos de veterinaria ---
 {n:"Central Piedmont CC", cat:"facultad", lat:35.216762, lng:-80.829258, dir:"1201 Elizabeth Ave, Charlotte, NC", tel:"+17043302722", horas:[8,17], rating:4.2, nota:"Tecnología Médica Veterinaria (AVMA) y programa de Asistente Veterinario"},
 // --- Restaurantes y comercios pet-friendly (solo los que SÍ admiten animales) ---
 {n:"The Goodyear House", cat:"resto", lat:35.246089, lng:-80.807165, dir:"3032 N Davidson St, Charlotte, NC 28205", tel:"+17049100132", horas:[11,22.5], rating:4.3, nota:"NoDa, patio dog-friendly, brunch y música en vivo"},
 {n:"NoDa Brewing Company", cat:"resto", lat:35.251711, lng:-80.812735, dir:"2921 N Tryon St, Charlotte, NC 28206", tel:"+17049006851", horas:[11.5,21], rating:4.8, nota:"Patio para perros, música en vivo y food trucks"},
 {n:"Triple C Brewing Company", cat:"resto", lat:35.201254, lng:-80.8695, dir:"2900 Griffith St, Charlotte, NC 28203", tel:"+17043723212", horas:[12,22], rating:4.7, nota:"Patio dog-friendly, jornadas de adopción y música en vivo"},
 {n:"Birdsong Brewing Co.", cat:"resto", lat:35.230819, lng:-80.826593, dir:"1016 N Davidson St, Charlotte, NC", tel:"+17043321810", horas:[11,22], rating:4.7, nota:"Patio dog-friendly en NoDa, food trucks"},
 {n:"Seoul Food Meat Company", cat:"resto", lat:35.219257, lng:-80.857579, dir:"1400 S Church St, Charlotte, NC 28203", tel:"+19802995143", horas:[11.5,24], rating:4.8, nota:"South End, parque para perros y patio trasero, karaoke"},
 {n:"Optimist Hall", cat:"resto", lat:35.234325, lng:-80.827256, dir:"1115 N Brevard St, Charlotte, NC", tel:"+19807010040", horas:[7,22], rating:4.7, nota:"Food hall, perros permitidos en la zona exterior"},
 {n:"The Suffolk Punch", cat:"resto", lat:35.20044, lng:-80.86906, dir:"2911 Griffith St, Charlotte, NC 28203", tel:"+17043198650", horas:[11,24], rating:4.4, nota:"South End, patio dog-friendly, café y cervecería"},
 {n:"Lucky Dog Bark & Brew Steele Creek", cat:"resto", lat:35.10666, lng:-80.95914, dir:"13835 S Lakes Dr, Charlotte, NC 28273", tel:"+19804436097", horas:[6.5,21], nota:"Bar + parque para perros sin correa, eventos y adopciones; membresía $10/año o $10/día"}
];
// Eventos locales de animales en Charlotte (series recurrentes verificadas; confirmar fecha con el organizador).
// fecha: texto libre (sin fecha exacta inventada). Los usuarios pueden publicar sus propios eventos desde la app.
const EVENTOS_CHARLOTTE = [
 {n:"Bark in the Park", cat:"evento", lat:35.22697, lng:-80.84732, dir:"Romare Bearden Park, 300 S Church St, Charlotte, NC", tel:null, horas:null, fecha:"Anual", nota:"Evento anual con concursos (mejor disfraz, cachorro más lindo) y apoyo a refugios — confirma fecha con el organizador"},
 {n:"Bark in the Ballpark", cat:"evento", lat:35.22753, lng:-80.8487, dir:"Truist Field, 324 S Mint St, Charlotte, NC", tel:null, horas:null, fecha:"Temporada de béisbol", nota:"Perros bienvenidos en el estadio con los Charlotte Knights — revisa las fechas de la temporada"},
 {n:"Fido Fest", cat:"evento", lat:35.21245, lng:-80.8354, dir:"Metropolitan, 1111 Metropolitan Ave, Charlotte, NC", tel:null, horas:null, fecha:"Septiembre", nota:"Festival canino con entrada gratis, en septiembre — confirma fecha"},
 {n:"Jornadas de adopción en Triple C", cat:"evento", lat:35.201254, lng:-80.8695, dir:"Triple C Brewing, 2900 Griffith St, Charlotte, NC", tel:"+17043723212", horas:null, fecha:"Recurrente", nota:"El bar organiza jornadas de adopción con refugios locales — pregunta fechas en el local"},
 {n:"Yappy Hour y adopciones en Lucky Dog", cat:"evento", lat:35.10666, lng:-80.95914, dir:"Lucky Dog Bark & Brew Steele Creek, 13835 S Lakes Dr, Charlotte, NC", tel:null, horas:null, fecha:"Semanal", nota:"Yappy Hour, noches de trivia y eventos de adopción durante la semana"}
];
