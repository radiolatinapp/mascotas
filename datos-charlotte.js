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
 {n:"Long Animal Hospital & Emergency Center", cat:"vet", lat:35.202502, lng:-80.864914, dir:"2523 South Blvd, Charlotte, NC", tel:"+17045232996", horas:[7,20], rating:4.6, nota:"Urgencias 24 h, desde 1948"},
 {n:"Animal Medical Hospital", cat:"vet", lat:35.197698, lng:-80.794201, dir:"3832 Monroe Rd, Charlotte, NC", tel:"+17043344684", horas:[7,20], rating:4.6, nota:"Urgencias 24/7, hospitalización"},
 {n:"Hollywood Feed", cat:"tienda", lat:35.198529, lng:-80.85242, dir:"2400 Park Rd, Charlotte, NC", tel:"+19802565884", horas:[9,19.5], nota:"Comida natural, autolavado"},
 {n:"Pet Supplies Plus Elizabeth", cat:"tienda", lat:35.212396, lng:-80.817153, dir:"2001 E 7th St, Charlotte, NC", tel:"+17048178360", horas:[9,21], rating:5.0, nota:"Grooming y autolavado"},
 {n:"Pet Supplies Plus Pineville-Matthews", cat:"tienda", lat:35.086673, lng:-80.847649, dir:"7601 Pineville-Matthews Rd, Charlotte, NC", tel:"+19808196163", horas:[9,21], nota:"Sur de Charlotte"},
 {n:"Four Dogs Pet Supplies", cat:"tienda", lat:35.243352, lng:-80.8107, dir:"2630 N Davidson St, Charlotte, NC", tel:"+19802986046", horas:[10,19], rating:4.9, nota:"NoDa, ultra premium"},
 {n:"Pet Wants Uptown", cat:"tienda", lat:35.226699, lng:-80.843288, dir:"101 S Tryon St #3, Charlotte, NC", tel:"+17047721738", horas:[10,16], nota:"Comida fresca mensual"},
 {n:"Pet Wants Brevard", cat:"tienda", lat:35.233784, lng:-80.827316, dir:"1115 N Brevard St, Charlotte, NC", tel:"+17049413090", horas:[10.5,21], nota:"Comida fresca, entrega gratis +$35"},
 {n:"Pet Wants Camden", cat:"tienda", lat:35.213487, lng:-80.858169, dir:"1700 Camden Rd, Charlotte, NC", tel:"+17044122992", horas:[8,20], rating:5.0, nota:"South End, patio para perros"},
 {n:"Petco Metropolitan", cat:"tienda", lat:35.214758, lng:-80.835087, dir:"900 Metropolitan Ave Ste 1A, Charlotte, NC", tel:"+17049164047", horas:[9,21], nota:"Grooming, adiestramiento, clínica de vacunas"},
 {n:"Monroe Road Animal Hospital", cat:"farma", lat:35.199242, lng:-80.795487, dir:"3736 Monroe Rd, Charlotte, NC 28205", tel:"+17043333336", horas:[7.75,18], rating:4.5, nota:"Farmacia propia y en línea, exóticos"},
 {n:"CARE Charlotte Animal Referral & Emergency", cat:"farma", lat:35.194385, lng:-80.798519, dir:"3726 Latrobe Dr, Charlotte, NC 28211", tel:"+17044572300", horas:null, nota:"Urgencias 24 h, 365 días — hospital de referencia"}
];
