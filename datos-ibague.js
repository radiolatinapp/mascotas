// Negocios REALES de Ibagué extraídos de los mapas (verificado 2026-10-24).
// cat: vet=Veterinarias, tienda=Tiendas, farma=Farmacias/Agropecuarias
// horas: [abre, cierra] en hora 24h (referencia lun-sáb); null = sin dato publicado.
const NEGOCIOS_IBAGUE = [
 {n:"CaniVet Clínica Veterinaria", cat:"vet", lat:4.444974, lng:-75.23657, dir:"Cl. 15 #6-55, Ibagué", tel:"+573184651463", horas:[8,19], nota:"Consulta, hospitalización, cirugía, grooming"},
 {n:"Clínica Veterinaria Los Andes", cat:"vet", lat:4.449095, lng:-75.242876, dir:"Cra. 7 #6-71, Ibagué", tel:"+573103097589", horas:[7,19], nota:"Medicina interna y cardiología"},
 {n:"Clínica Veterinaria Animalitos", cat:"vet", lat:4.442569, lng:-75.235561, dir:"Calle 17 #4-63, Ibagué", tel:"+5782617936", horas:[8,19], rating:5.0, nota:"Consulta, belleza, insumos y accesorios"},
 {n:"Clinipets - Clínica Veterinaria", cat:"vet", lat:4.435751, lng:-75.2146, dir:"Calle 40 #4C-34, Macarena Parte Alta, Ibagué", tel:"+573152680906", horas:[8,18]},
 {n:"Clínica Veterinaria Bienestar Animal", cat:"vet", lat:4.432964, lng:-75.21642, dir:"Carrera 4c Bis #39-8, Barrio Las Palmas, Ibagué", tel:"+573156478656", horas:[8,21]},
 {n:"Clínica Veterinaria Agrogan Mascotas", cat:"vet", lat:4.448348, lng:-75.238666, dir:"Cra. 9 #11-57, Ibagué", tel:"+573132069774", horas:null, rating:5.0},
 {n:"Central Veterinaria Mimaos", cat:"vet", lat:4.433116, lng:-75.244892, dir:"Cl. 17 #11a-43 sur, Ibagué", tel:"+573186596787", horas:[8,18.5]},
 {n:"My Vet Clínica Veterinaria", cat:"vet", lat:4.446955, lng:-75.244383, dir:"Cl. 7 #3-78, Ibagué", tel:"+573157847319", horas:[8,16]},
 {n:"Animales La 14", cat:"vet", lat:4.441034, lng:-75.240441, dir:"C. 14, Ibagué", tel:"+573138209778", horas:[8,18]},
 {n:"Mundo de los Animales Ibagué", cat:"vet", lat:4.438075, lng:-75.223732, dir:"Cra. 4c #28a-45, Ibagué", tel:"+573102464072", horas:[8,18], nota:"Todo para tu mascota, buenos precios"},
 {n:"Paraíso Animal Ibagué", cat:"tienda", lat:4.439123, lng:-75.228683, dir:"Cl. 24, Ibagué", tel:"+573245772584", horas:[8.5,18], nota:"Todo para disfrutar con tus peludos"},
 {n:"Lovely Pet Shop", cat:"tienda", lat:4.446711, lng:-75.245295, dir:"Cra 3 #6-57, Ibagué", tel:"+573184316167", horas:[8.5,19.5], nota:"Alimentos, snacks, accesorios y juguetes · catálogo por WhatsApp"},
 {n:"Garritas Felices Pet Shop", cat:"tienda", lat:4.450877, lng:-75.243147, dir:"Cra 10 #545, Ibagué", tel:"+573213173993", horas:null, nota:"Productos naturales y de calidad"},
 {n:"MAUU", cat:"tienda", lat:4.437236, lng:-75.229945, dir:"Calle 24 sur #3-98, Barrio Arado, Ibagué", tel:"+573142815944", horas:null},
 {n:"Amazon Fish and Pets", cat:"tienda", lat:4.444789, lng:-75.237303, dir:"Cra. 6 #14-35, Ibagué", tel:"+573176720650", horas:[8,19]},
 {n:"La Tienda de Terry", cat:"tienda", lat:4.452347, lng:-75.239951, dir:"Carrera 13 #8-20, Ibagué", tel:"+573507820130", horas:[8,20]},
 {n:"KANIGATY", cat:"tienda", lat:4.441334, lng:-75.236586, dir:"Cra 3 #16-51, Ibagué", tel:"+573504822203", horas:null},
 {n:"Concentrados y Mangueras", cat:"tienda", lat:4.441542, lng:-75.240722, dir:"Cra. 1 #29, Ibagué", tel:"+573208245095", horas:[7,18.5]},
 {n:"Agropecuaria de la Hacienda", cat:"farma", lat:4.439315, lng:-75.2246, dir:"Cl. 28 #4c-85, Ibagué", tel:"+573124483181", horas:[8,17], nota:"Alimentos, concentrados y accesorios"},
 {n:"Comercializadora Agropecuaria del Tolima", cat:"farma", lat:4.439282, lng:-75.224559, dir:"Ibagué (verificar dirección exacta)", tel:"+573173763249", horas:[8,18], rating:4.2, nota:"Productos veterinarios, consulta y vacunación"},
 {n:"Agropecuaria Ibagué", cat:"farma", lat:4.439593, lng:-75.232004, dir:"Cra 4 #21-11, Ibagué", tel:"+573125329960", horas:[8,18], nota:"Abre todos los días"},
 {n:"Agroempresarios", cat:"tienda", lat:4.439149, lng:-75.238072, dir:"Cra. 1 #16-83, Ibagué", tel:"+573102817820", horas:[8,17.75], nota:"Mayorista de productos agropecuarios y de mascotas"}
];
