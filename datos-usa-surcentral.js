// Lugares de animales en SUR CENTRAL de EE. UU. (Arkansas, Louisiana, Oklahoma, Texas)
// extraidos de OpenStreetMap (verificado 2026-10-25).
// cat: vet=Veterinarias, tienda=Tiendas de mascotas, refugio=Refugios y guarderias,
// zoo=Zoologicos, peluqueria=Peluquerias, parque=Parques para perros, farma=Farmacias veterinarias,
// resto=Restaurantes/cafes dog-friendly (dog=yes en OSM).
// horas: null = sin dato publicado; [a,b] = abre/cierra en hora decimal (24/7 -> [0,24]).
// Todo proviene de OpenStreetMap (ODbL) via Overpass; sin nombre o sin coordenadas el lugar se descarta.
// Pueblos cargados: 644 (2595 lugares).
const CIUDADES_USA_SURCENTRAL = {
 "abernathy": {nombre:"Abernathy", centro:[33.832381, -101.843015], tz:"America/Chicago", lugares:[
  {n:"Hill Veterinary Services", cat:"vet", lat:33.839481, lng:-101.839989, dir:"102 East 16th Street, Abernathy", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "abilene-texas": {nombre:"Abilene", centro:[32.453618, -99.731133], tz:"America/Chicago", lugares:[
  {n:"Camp Barkeley Dog Park", cat:"parque", lat:32.437619, lng:-99.689876, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Icon", cat:"peluqueria", lat:32.418402, lng:-99.763439, dir:"3266 South 27th Street, Abilene", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Flamingos", cat:"refugio", lat:32.439436, lng:-99.691212, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Giraffe shelter", cat:"refugio", lat:32.441227, lng:-99.69241, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.404245, lng:-99.763384, dir:"3950 South Clack Street, Abilene", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.409281, lng:-99.775685, dir:"3501 Catclaw Drive, Abilene", tel:"+1 325-692-9411", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.407449, lng:-99.771965, dir:"3542 South Clack Street, Abilene", tel:"+1 325-271-6949", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Abilene Animal Hospital", cat:"vet", lat:32.459024, lng:-99.706368, dir:"950 North Judge Ely Boulevard, Abilene", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Radford Hills Animal Clinic", cat:"vet", lat:32.459403, lng:-99.703523, dir:"1165 East North 10th Street, Abilene", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southwest Animal Clinic", cat:"vet", lat:32.416962, lng:-99.750983, dir:"2301 South 27th Street, Abilene", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Windmill Animal Hospital", cat:"vet", lat:32.379737, lng:-99.743335, dir:"2 Windmill Circle, Abilene", tel:"+1-325-698-8387", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Abilene Zoo", cat:"zoo", lat:32.440208, lng:-99.691613, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "abita-springs": {nombre:"Abita Springs", centro:[30.478526, -90.037576], tz:"America/Chicago", lugares:[
  {n:"Little Creek Veterinary Hospital", cat:"vet", lat:30.418765, lng:-90.039522, dir:"22053 E Koop Dr, Abita Springs", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ada-oklahoma": {nombre:"Ada", centro:[34.774338, -96.678365], tz:"America/Chicago", lugares:[
  {n:"Wintersmith Dog Park", cat:"parque", lat:34.764066, lng:-96.65078, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "addison-texas": {nombre:"Addison", centro:[32.96179, -96.829168], tz:"America/Chicago", lugares:[
  {n:"Parkhill Dog Park", cat:"parque", lat:32.971984, lng:-96.788886, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spruill Dog Park", cat:"parque", lat:32.963907, lng:-96.827466, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wagging Tail Dog Park", cat:"parque", lat:32.970486, lng:-96.808136, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Poochville", cat:"peluqueria", lat:32.952982, lng:-96.831775, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Club Pet Salon", cat:"peluqueria", lat:32.94045, lng:-96.855323, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woofgang Bakery & Grooming", cat:"peluqueria", lat:32.998575, lng:-96.79405, tel:"+1-972-985-9663", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Classy Canine Daycare", cat:"refugio", lat:32.988648, lng:-96.80091, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Operation Kindness", cat:"refugio", lat:32.967243, lng:-96.847412, dir:"3201 Earhart Drive, Addison", tel:"+1 972 418 7297", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pappy's Pet Lodge", cat:"refugio", lat:32.960822, lng:-96.82578, dir:"15530 Quorum Drive, Addison", tel:"+1 972 290 0485", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yard Dog", cat:"refugio", lat:32.951892, lng:-96.830325, dir:"15003 Inwood Road, Addison", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dallas North Aquarium", cat:"tienda", lat:32.986523, lng:-96.850752, dir:"2910 E Trinity Mills Road, Addison", tel:"+1-972-492-6165", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Fish Gallery", cat:"tienda", lat:32.951711, lng:-96.830275, dir:"15003 Inwood Road, Addison", tel:"+1-214-373-3474", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Man's Best Friend", cat:"tienda", lat:32.985066, lng:-96.839321, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.952562, lng:-96.803284, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.950585, lng:-96.851787, dir:"3800 Belt Line Road, Addison", tel:"+1 972-919-4740", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.913047, lng:-96.816893, dir:"12100 Inwood Road, Addison", tel:"+1 972-239-3554", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.95689, lng:-96.816081, dir:"5301 Belt Line Road, Addison", tel:"+1 972-788-0460", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Urban Aristocats", cat:"tienda", lat:32.983839, lng:-96.800772, dir:"17194 Preston Road, Addison", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Your Pet Fish", cat:"tienda", lat:32.953738, lng:-96.856929, dir:"2741 Belt Line Road, Addison", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:32.912909, lng:-96.817124, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blink Veterinary Eye Specialists", cat:"vet", lat:32.9349, lng:-96.824195, dir:"13617 Inwood Road, Addison", tel:"+1 214-817-0637", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"CityVet", cat:"vet", lat:32.953655, lng:-96.815584, dir:"5320 Belt Line Road, Addison", tel:"+12142392346", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cornerstone Animal Clinic", cat:"vet", lat:32.911338, lng:-96.806125, horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Dallas Animal Urgent Care", cat:"vet", lat:32.924008, lng:-96.806133, dir:"12835 Preston Road, Addison", tel:"+1 972-910-2890", horas:[8.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Emergency Animal Hospital of Collin County", cat:"vet", lat:32.995728, lng:-96.828527, dir:"18020 Dallas Parkway, Addison", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Isla Veterinary", cat:"vet", lat:32.939587, lng:-96.853665, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Modern Animal - Addison", cat:"vet", lat:32.95279, lng:-96.816761, dir:"5290 Belt Line Road, Addison", tel:"+1 469-373-9338", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pappy's Pet Lodge", cat:"vet", lat:33.006417, lng:-96.779592, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Vet", cat:"vet", lat:32.937917, lng:-96.839519, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petfolk Veterinary & Urgent Care - North Dallas", cat:"vet", lat:32.982543, lng:-96.80326, dir:"17062 Preston Road, Addison", tel:"+1 469-205-3500", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Prestonwood Pet Clinic", cat:"vet", lat:32.963337, lng:-96.788414, dir:"6959 Arapaho Road, Addison", tel:"+1-972-233-7343", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Summertree Animal & Bird Clinic", cat:"vet", lat:32.916183, lng:-96.818012, dir:"12300 Inwood Road, Addison", horas:[7.75, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Trail Pet Hospital", cat:"vet", lat:32.983999, lng:-96.800895, dir:"17194 Preston Road, Addison", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:33.00549, lng:-96.79494, dir:"18770 Preston Road, Addison", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VetSavers Pet Hospital", cat:"vet", lat:33.006015, lng:-96.795989, dir:"19009 Preston Road, Addison", tel:"+1 972-695-5335", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "adrian-texas": {nombre:"Adrian", centro:[35.274777, -102.665211], tz:"America/Chicago", lugares:[
  {n:"Four L Feed", cat:"tienda", lat:35.274248, lng:-102.667403, dir:"601 Elm Avenue, Adrian", tel:"+18063402819", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alamo-heights": {nombre:"Alamo Heights", centro:[29.483226, -98.468455], tz:"America/Chicago", lugares:[
  {n:"Alamo Heights Dog Park", cat:"parque", lat:29.483057, lng:-98.476498, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fifi & Fidos Pet Boutique", cat:"tienda", lat:29.473903, lng:-98.462273, dir:"5120 Broadway, Alamo Heights", tel:"+1-210-822-2525", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Wants San Antonio", cat:"tienda", lat:29.472518, lng:-98.463183, dir:"5005 Broadway, Alamo Heights", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Thrive Pet Healthcare Specialists", cat:"vet", lat:29.518169, lng:-98.455705, dir:"2426 Ceegee Lane, Alamo Heights", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "albany-louisiana": {nombre:"Albany", centro:[30.504358, -90.582314], tz:"America/Chicago", lugares:[
  {n:"Lu Lu's Pet Spa", cat:"peluqueria", lat:30.504123, lng:-90.570822, dir:"19450 Florida Boulevard, Albany", tel:"+1-225-209-6222", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"}
 ]},
 "albany-texas": {nombre:"Albany", centro:[32.728072, -99.294602], tz:"America/Chicago", lugares:[
  {n:"Fambro Veterinary Clinic", cat:"vet", lat:32.729385, lng:-99.293398, tel:"+1-325-762-2923", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Salt Creek Veterinary Hospital", cat:"vet", lat:32.719376, lng:-99.298741, tel:"+1-325-762-6090", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alden-bridge": {nombre:"Alden Bridge", centro:[30.213204, -95.517991], tz:"America/Chicago", lugares:[
  {n:"Allure Pet Grooming", cat:"peluqueria", lat:30.223945, lng:-95.548548, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming Conroe", cat:"peluqueria", lat:30.225613, lng:-95.542382, dir:"525 Woodlands Square Blvd, Alden Bridge", tel:"+1-936-506-9663", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"EarthWise Pet", cat:"tienda", lat:30.228779, lng:-95.518347, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinics Of The Woodlands - Alden Bridge", cat:"vet", lat:30.209818, lng:-95.526827, dir:"8000 Research Forest Drive, Alden Bridge", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kainer Veterinary Hospital", cat:"vet", lat:30.227721, lng:-95.52397, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "aldine": {nombre:"Aldine", centro:[29.93205, -95.379051], tz:"America/Chicago", lugares:[
  {n:"Aldine Westfield Stables", cat:"refugio", lat:30.004152, lng:-95.374107, dir:"19907 Aldine Westfield Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Harris County Pets", cat:"refugio", lat:29.873664, lng:-95.373797, dir:"612 Canino Road, Aldine", tel:"+1-281-999-3191", horas:[13.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Pet Pros", cat:"tienda", lat:29.846621, lng:-95.383854, dir:"5520 Airline Drive, Aldine", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.911635, lng:-95.415902, dir:"10245 North Freeway, Aldine", tel:"+1 281-506-1923", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"S & S Exotic Animals", cat:"tienda", lat:29.909861, lng:-95.359152, dir:"1711 Connorvale Road, Aldine", tel:"+1-281-590-0426", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Stallion's Feed and Supply", cat:"tienda", lat:29.855456, lng:-95.382704, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aldine Mail Route Animal Hospital", cat:"vet", lat:29.902859, lng:-95.339506, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Houston Veterinary Hospital", cat:"vet", lat:29.860425, lng:-95.384317, dir:"6730 Airline Drive, Aldine", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northline Low Cost Pet Clinic", cat:"vet", lat:29.845884, lng:-95.379486, dir:"51 Tidwell Road, Aldine", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"veterinary Clinic", cat:"vet", lat:29.872346, lng:-95.412044, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "aledo-texas": {nombre:"Aledo", centro:[32.695964, -97.602247], tz:"America/Chicago", lugares:[
  {n:"Dog Park", cat:"parque", lat:32.733657, lng:-97.566211, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Saving Hope Ranch", cat:"refugio", lat:32.675666, lng:-97.570317, dir:"Aledo Iona Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clear Fork Veterinary Clinic", cat:"vet", lat:32.725474, lng:-97.585781, dir:"8400 East Interstate 20, Aledo", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alexandria-louisiana": {nombre:"Alexandria", centro:[31.311946, -92.445356], tz:"America/Chicago", lugares:[
  {n:"Alexandria Zoological Park", cat:"zoo", lat:31.287999, lng:-92.458869, dir:"3016 Masonic Drive, Alexandria", tel:"+1 318-441-6810", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "allen-texas": {nombre:"Allen", centro:[33.103174, -96.67055], tz:"America/Chicago", lugares:[
  {n:"Alma Dog Park", cat:"parque", lat:33.136113, lng:-96.708663, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arise Dog Park", cat:"parque", lat:33.130662, lng:-96.73049, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Yard", cat:"parque", lat:33.094112, lng:-96.662374, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cyan Dog Park", cat:"parque", lat:33.135246, lng:-96.730419, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K9 Corral at Craig Ranch Dog Park", cat:"parque", lat:33.140064, lng:-96.714558, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Luxia Dog Park", cat:"parque", lat:33.138575, lng:-96.717907, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Mutt Puddle", cat:"peluqueria", lat:33.127043, lng:-96.659032, dir:"190 East Stacy Road, Allen", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Allen Animal Shelter", cat:"refugio", lat:33.085977, lng:-96.646585, dir:"770 South Allen Heights Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:33.152518, lng:-96.723734, dir:"8416 Stacy Road, Allen", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.129344, lng:-96.728089, dir:"8676 State Highway 121, Allen", tel:"+1 214-383-0253", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.124653, lng:-96.65969, dir:"170 East Stacy Road, Allen", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.13399, lng:-96.732321, dir:"7001 South Custer Road, Allen", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.124708, lng:-96.659842, dir:"170 East Stacy Road, Allen", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Custer McDermott Animal Hospital", cat:"vet", lat:33.103078, lng:-96.73409, dir:"9109 North Custer Road, Allen", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Legacy Village Veterinary Clinic", cat:"vet", lat:33.075149, lng:-96.749196, dir:"7224 Independence Parkway, Allen", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Plano Animal Hospital", cat:"vet", lat:33.07238, lng:-96.751661, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petfolk Veterinary & Urgent Care - Allen", cat:"vet", lat:33.089909, lng:-96.68307, dir:"931 West Bethany Drive, Allen", tel:"+1 469-289-2921", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"ReadiVet Collin County, Mobile Vet Services", cat:"vet", lat:33.152913, lng:-96.722708, dir:"8404 Stacy Road, Allen", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Thrive Pet Healthcare", cat:"vet", lat:33.154994, lng:-96.732497, dir:"4701 South Custer Road, Allen", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Timber Ridge Animal Medical Center", cat:"vet", lat:33.127658, lng:-96.704403, dir:"1961 North Alma Drive, Allen", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VEG", cat:"vet", lat:33.127694, lng:-96.663064, horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "altus-oklahoma": {nombre:"Altus", centro:[34.638126, -99.333975], tz:"America/Chicago", lugares:[
  {n:"Altus Dog Park", cat:"parque", lat:34.651758, lng:-99.330029, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Juju's Grooming", cat:"peluqueria", lat:34.650131, lng:-99.330966, dir:"320 Falcon Road, Altus", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ruff Grooming and Boarding", cat:"peluqueria", lat:34.651767, lng:-99.305474, dir:"2112 Falcon Road, Altus", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Control Department", cat:"refugio", lat:34.636099, lng:-99.304824, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Farley's K9 Korral", cat:"refugio", lat:34.646048, lng:-99.333646, dir:"814 North Main Street, Altus", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Pets Medical Center", cat:"vet", lat:34.666356, lng:-99.315961, dir:"1300 East Tamarack Road, Altus", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Western Prarie Veterinary Hospital", cat:"vet", lat:34.667383, lng:-99.330532, dir:"311 East Tamarack Road, Altus", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alva": {nombre:"Alva", centro:[36.80305, -98.666028], tz:"America/Chicago", lugares:[
  {n:"Alva Veterinary Clinic", cat:"vet", lat:36.798058, lng:-98.685454, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ridgeview Veterinary Hospital", cat:"vet", lat:36.796837, lng:-98.700845, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alvarado-texas": {nombre:"Alvarado", centro:[32.406575, -97.211915], tz:"America/Chicago", lugares:[
  {n:"Alvarado Animal Services", cat:"refugio", lat:32.398577, lng:-97.215661, dir:"602 South Parkway Drive, Alvarado", tel:"+1-817-790-0910", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alvarado Veterinary Clinic", cat:"vet", lat:32.415397, lng:-97.232013, dir:"6800 East US Highway 67, Alvarado", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alvin-texas": {nombre:"Alvin", centro:[29.423847, -95.244101], tz:"America/Chicago", lugares:[
  {n:"The Fetching Lab Brewery", cat:"parque", lat:29.443435, lng:-95.245516, dir:"2213 North Gordon Street, Alvin", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alvin Animal Adoption Center", cat:"refugio", lat:29.429773, lng:-95.248358, dir:"550 West SH 6, Alvin", tel:"+1-281-388-4331", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "amarillo": {nombre:"Amarillo", centro:[35.20729, -101.837119], tz:"America/Chicago", lugares:[
  {n:"Diamond in the Ruff", cat:"peluqueria", lat:35.192538, lng:-101.864414, dir:"2617 Wolflin Avenue, Amarillo", tel:"+1-806-418-6750", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Patch USA", cat:"peluqueria", lat:35.202282, lng:-101.875547, dir:"3403 Plains Boulevard, Amarillo", tel:"+18063532548", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Paw Spa", cat:"peluqueria", lat:35.213112, lng:-101.865907, dir:"404 South McMasters Street, Amarillo", tel:"+18066741935", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Amarillo Animal Management and Welfare", cat:"refugio", lat:35.174998, lng:-101.812573, dir:"3501 South Osage Street, Amarillo", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Good Dog Pet Ranch", cat:"refugio", lat:35.199416, lng:-101.707688, dir:"160 South Pullman Road, Amarillo", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Lion Shelter", cat:"refugio", lat:35.239551, lng:-101.833911, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Monkey Shelter", cat:"refugio", lat:35.239782, lng:-101.835309, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Willow Creek Kennels", cat:"refugio", lat:35.265821, lng:-101.787254, dir:"4339 East Saint Francis Avenue, Amarillo", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fish Pro's Aquarium Center", cat:"tienda", lat:35.19263, lng:-101.872489, dir:"3201 Wolflin Avenue, Amarillo", tel:"+1-806-457-9500", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.189208, lng:-101.881915, dir:"2203 South Western Street, Amarillo", tel:"+1 806-353-3304", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"High Plains Veterinary Clinic", cat:"vet", lat:35.237311, lng:-101.816403, dir:"2406 Thorne Drive, Amarillo", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Johnson's Animal Hospital", cat:"vet", lat:35.189147, lng:-101.875454, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"P.E.T.S. Clinic of Amarillo", cat:"vet", lat:35.211729, lng:-101.864859, dir:"2500 Southwest 6th Avenue, Amarillo", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ross Osage Animal Clinic", cat:"vet", lat:35.184317, lng:-101.813675, dir:"2710 South Osage Street, Amarillo", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Amarillo Zoo", cat:"zoo", lat:35.239948, lng:-101.835655, dir:"700 Comanchero Trail, Amarillo", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "angleton": {nombre:"Angleton", centro:[29.16941, -95.431885], tz:"America/Chicago", lugares:[
  {n:"Officer Cash Memorial Dog Park", cat:"parque", lat:29.159502, lng:-95.424528, dir:"535 S. Anderson Street, Angleton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Angleton Veterinary Clinic", cat:"vet", lat:29.176557, lng:-95.414194, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "anna-texas": {nombre:"Anna", centro:[33.349666, -96.554704], tz:"America/Chicago", lugares:[
  {n:"Paw Park", cat:"parque", lat:33.342571, lng:-96.564729, dir:"1201 West White Street, Anna", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "arcadia-texas": {nombre:"Arcadia", centro:[29.383291, -95.120208], tz:"America/Chicago", lugares:[
  {n:"Bayou Safari Wildlife Park", cat:"zoo", lat:29.43079, lng:-95.169371, dir:"5050 FM 517, Arcadia", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ardmore-oklahoma": {nombre:"Ardmore", centro:[34.172927, -97.130912], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:34.189195, lng:-97.158234, dir:"2401 12th Avenue Northwest, Ardmore", tel:"+1 580-224-9524", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "argyle-texas": {nombre:"Argyle", centro:[33.121232, -97.183347], tz:"America/Chicago", lugares:[
  {n:"Argyle Veterinary Clinic", cat:"vet", lat:33.100797, lng:-97.183868, dir:"410 East FM 407, Argyle", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "arkadelphia": {nombre:"Arkadelphia", centro:[34.120929, -93.053784], tz:"America/Chicago", lugares:[
  {n:"Arkadelphia Dog Park", cat:"parque", lat:34.131447, lng:-93.066349, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bow Wow Pampered Pooches", cat:"peluqueria", lat:34.120767, lng:-93.057432, dir:"860 Clinton Street, Arkadelphia", tel:"+15018446387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mary's Manicured Mutts", cat:"peluqueria", lat:34.120878, lng:-93.059011, tel:"+18704034723", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Arkansas Veterinary Hospital", cat:"vet", lat:34.119615, lng:-93.086594, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "arkoma": {nombre:"Arkoma", centro:[35.354484, -94.43639], tz:"America/Chicago", lugares:[
  {n:"The Paw Spa", cat:"peluqueria", lat:35.339262, lng:-94.418044, dir:"1519 Phoenix Avenue, Arkoma", tel:"+1 479-434-6475", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jenn's Animal Rehab", cat:"refugio", lat:35.353828, lng:-94.412912, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.340612, lng:-94.390514, dir:"3835 Phoenix Avenue, Arkoma", tel:"+1 479-646-1252", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Fianna Hills Pet Hospital", cat:"vet", lat:35.299352, lng:-94.412164, dir:"2210 Fianna Oaks Dr, Arkoma", tel:"+1 479-646-2300", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Kitties And Kanines", cat:"vet", lat:35.337619, lng:-94.385881, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "arlington-texas": {nombre:"Arlington", centro:[32.735582, -97.107119], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:32.757612, lng:-97.100142, dir:"150 Lincoln Square, Arlington", tel:"+1 817-274-2842", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.645706, lng:-97.059594, dir:"5236 South State Highway 360, Arlington", tel:"+1 972-522-2202", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"The Pet Stop", cat:"tienda", lat:32.679009, lng:-97.054934, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Green Oaks North Pet Hospital", cat:"vet", lat:32.775597, lng:-97.079776, dir:"1890 Northeast Green Oaks Boulevard, Arlington", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "atascocita": {nombre:"Atascocita", centro:[29.999007, -95.162014], tz:"America/Chicago", lugares:[
  {n:"Mean Dog", cat:"parque", lat:30.007568, lng:-95.110051, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Trail of the Lakes MUD Dog Park", cat:"parque", lat:29.963931, lng:-95.206478, dir:"4114 Great Forest Court, Atascocita", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grooming", cat:"peluqueria", lat:29.99722, lng:-95.16812, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"POMCHI PAWS Grooming", cat:"peluqueria", lat:29.997996, lng:-95.184992, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pierre’s Pet Grooming", cat:"peluqueria", lat:29.997139, lng:-95.160311, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog's Day Inn Pet Resort", cat:"refugio", lat:29.986945, lng:-95.198571, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:29.996719, lng:-95.169614, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fetch Pet Resort", cat:"refugio", lat:29.999154, lng:-95.190108, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fish & Pets", cat:"tienda", lat:29.997603, lng:-95.196004, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Ranch", cat:"tienda", lat:30.051389, lng:-95.186366, dir:"4411 Kingwood Drive, Atascocita", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.927043, lng:-95.204955, dir:"14281 East Sam Houston Parkway North, Atascocita", tel:"+1 281-670-2088", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.000454, lng:-95.169583, dir:"7067 FM 1960, Atascocita", tel:"+1-281-812-0290", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital", cat:"vet", lat:29.985654, lng:-95.162851, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Atascazoo Animal Hospital", cat:"vet", lat:29.997799, lng:-95.183665, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Atascocita Animal Hospital", cat:"vet", lat:30.001528, lng:-95.157131, dir:"7819 FM 1960, Atascocita", tel:"+1-281-602-4092", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"}
 ]},
 "athens-texas": {nombre:"Athens", centro:[32.204442, -95.854914], tz:"America/Chicago", lugares:[
  {n:"Athens Animal Clinic", cat:"vet", lat:32.170663, lng:-95.830566, dir:"1520 Southeast Loop 7, Athens", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Syler Veterinary Clinic", cat:"vet", lat:32.170057, lng:-95.8423, dir:"2007 South Palestine Street, Athens", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "atkins": {nombre:"Atkins", centro:[35.245022, -92.937615], tz:"America/Chicago", lugares:[
  {n:"Atkins Animal Clinic", cat:"vet", lat:35.255109, lng:-92.940366, dir:"304 Northwest 12th Street, Atkins", tel:"+1-479-641-2244", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "atlanta-texas": {nombre:"Atlanta", centro:[33.116213, -94.166349], tz:"America/Chicago", lugares:[
  {n:"Cass County Veterinary Clinic", cat:"vet", lat:33.105091, lng:-94.17522, dir:"102 East Pinecrest Drive, Atlanta", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "austin": {nombre:"Austin", centro:[34.998421, -91.983755], tz:"America/Chicago", lugares:[
  {n:"Austin Animal Shelter", cat:"refugio", lat:35.013849, lng:-91.967322, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "austin-texas": {nombre:"Austin", centro:[30.264926, -97.747409], tz:"America/Chicago", lugares:[
  {n:"BARk House Social", cat:"parque", lat:30.251725, lng:-97.698874, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banger’s Sausage House & Beer Garden", cat:"parque", lat:30.258976, lng:-97.738494, dir:"79 Rainey Street, Austin", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Midtown Bark Park", cat:"parque", lat:30.34174, lng:-97.718729, horas:[6.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Norwood Estate Dog Park", cat:"parque", lat:30.249173, lng:-97.736599, dir:"1009 Edgecliff Terrace, Austin", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rally's ReTREAT", cat:"parque", lat:30.359409, lng:-97.731407, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tree Apartments Dog Park", cat:"parque", lat:30.228276, lng:-97.766531, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yard Bar", cat:"parque", lat:30.343034, lng:-97.739199, dir:"6700 Burnet Road, Austin", tel:"+1-512-900-3773", horas:[12.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Barkin' Creek Dog Kitchen & Bath", cat:"peluqueria", lat:30.260993, lng:-97.738802, dir:"91 Red River Street, Austin", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dirty Dog", cat:"peluqueria", lat:30.297675, lng:-97.74155, dir:"3016 Guadalupe Street, Austin", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:30.277291, lng:-97.751394, dir:"1204 North Lamar Boulevard, Austin", tel:"+15123919663", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:30.298964, lng:-97.704319, dir:"1911 Aldrich Street, Austin", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Austin Animal Center", cat:"refugio", lat:30.251466, lng:-97.68968, dir:"7201 Levander Loop, Austin", tel:"+1-512-974-2000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Austin Dogtown Boarding & Daycare", cat:"refugio", lat:30.226164, lng:-97.753652, dir:"537 Woodward Street, Austin", tel:"+1-512-535-4244", horas:[7.0, 10.0], nota:"Dato de OpenStreetMap"},
  {n:"Austin Humane Society", cat:"refugio", lat:30.344704, lng:-97.705244, dir:"124 West Anderson Lane, Austin", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Austin Pets Alive! Town Lake Animal Adoption Cetner", cat:"refugio", lat:30.269861, lng:-97.759685, dir:"1156 West Cesar Chavez Street, Austin", tel:"+1 512 961 6519", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Austin Pets Alive! Town Lake Animal Center", cat:"refugio", lat:30.269672, lng:-97.759772, dir:"1156 West Cesar Chavez Street, Austin", horas:[11.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Austin Wildlife Rescue", cat:"refugio", lat:30.285906, lng:-97.673705, dir:"5401 East Martin Luther King Jr Boulevard, Austin", tel:"+1-512-472-9453", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Barking Hound Village", cat:"refugio", lat:30.261736, lng:-97.75913, dir:"412 Josephine Street, Austin", tel:"+1-512-477-3647", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggie Howser Pet Social Club", cat:"refugio", lat:30.257092, lng:-97.71308, dir:"2611 East 5th Street, Austin", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Healthy Pet", cat:"tienda", lat:30.267464, lng:-97.752496, dir:"211 Walter Seaholm Drive, Austin", tel:"+1-512-350-2277", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Highlands Pet Clinic", cat:"tienda", lat:30.27823, lng:-97.751743, dir:"1220 Parkway, Austin", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"LiveWell Animal Hospital", cat:"tienda", lat:30.272651, lng:-97.760325, dir:"507 Pressler Street, Austin", tel:"+15124748888", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"P & F Pet Provisions", cat:"tienda", lat:30.355318, lng:-97.732039, dir:"7816 Burnet Road, Austin", tel:"+1-512-956-9000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws on Chicon", cat:"tienda", lat:30.275033, lng:-97.720036, dir:"1301 Chicon Street, Austin", tel:"+1-512-273-7297", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.304312, lng:-97.709295, dir:"1201 Barbara Jordan Boulevard, Austin", tel:"+1 512-469-0501", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.3007, lng:-97.720616, dir:"1000 East 43rd Street, Austin", tel:"+1 512-419-0311", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Rivers & Reefs Pet Center", cat:"tienda", lat:30.245043, lng:-97.757565, dir:"2008 S 1st St, Austin", tel:"+1-512-445-5101", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tomlinson's", cat:"tienda", lat:30.33318, lng:-97.740547, dir:"5716 Burnet Road, Austin", tel:"+1-512-531-9311", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Tomlinson's Feed", cat:"tienda", lat:30.277016, lng:-97.750933, dir:"916B West 12th Street, Austin", tel:"+15125141881", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Zookeeper", cat:"tienda", lat:30.370847, lng:-97.724994, dir:"9012 Research Boulevard, Austin", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Austin Urban Veterinary Center", cat:"vet", lat:30.269432, lng:-97.750282, dir:"701 West 5th Street, Austin", tel:"+1-512-476-2882", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Austin Vet Hospital", cat:"vet", lat:30.304995, lng:-97.712561, dir:"4701 North Interstate Highway 35 Service Road, Austin", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.263135, lng:-97.730307, dir:"1211 East 5th Street, Austin", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.304462, lng:-97.709184, dir:"1201 Barbara Jordan Boulevard, Austin", tel:"+1-512-469-0103", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Burnet Road Animal Hospital", cat:"vet", lat:30.36683, lng:-97.727639, dir:"8511 Burnet Road, Austin", tel:"+1-512-342-1710", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Emancipet East", cat:"vet", lat:30.253193, lng:-97.688792, dir:"7201 Levander Loop, Austin", tel:"+1 512-587-7729", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Emancipet East Clinic", cat:"vet", lat:30.25308, lng:-97.688813, dir:"7201 Levander Loop, Austin", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Emancipet North Austin", cat:"vet", lat:30.340542, lng:-97.692601, dir:"1030 Suite 316 Norwood Park Boulevard, Austin", tel:"+1-512-587-7729", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Honnas Veterinary", cat:"vet", lat:30.250853, lng:-97.765083, dir:"1615 South Lamar Boulevard, Austin", tel:"+1 512-518-5674", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Hyde Park Animal Clinic", cat:"vet", lat:30.314623, lng:-97.720163, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Modern Animal Veterinary Care", cat:"vet", lat:30.254994, lng:-97.76239, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PAZ Veterinary East", cat:"vet", lat:30.257933, lng:-97.704122, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rosedale Veterinary Clinic", cat:"vet", lat:30.319211, lng:-97.739458, dir:"4800 Burnet Road, Austin", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Thrive Pet Healthcare", cat:"vet", lat:30.259563, lng:-97.709922, dir:"2795 East 7th Street, Austin", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bacliff": {nombre:"Bacliff", centro:[29.506321, -94.987748], tz:"America/Chicago", lugares:[
  {n:"Baylor Animal Clinic", cat:"vet", lat:29.50338, lng:-94.988929, dir:"826 Grand Avenue, Bacliff", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "baker-louisiana": {nombre:"Baker", centro:[30.588243, -91.168163], tz:"America/Chicago", lugares:[
  {n:"Raising Cane's Dog Park", cat:"parque", lat:30.565144, lng:-91.169988, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Baton Rouge Zoo", cat:"zoo", lat:30.563497, lng:-91.161668, dir:"3601 Thomas Road, Baker", horas:[9.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "balch-springs": {nombre:"Balch Springs", centro:[32.728741, -96.622771], tz:"America/Chicago", lugares:[
  {n:"Dallas County Veterinary Hospital", cat:"vet", lat:32.721162, lng:-96.595099, dir:"3475 South Belt Line Road, Balch Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spay Neuter Network", cat:"vet", lat:32.751716, lng:-96.68351, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "balcones-heights": {nombre:"Balcones Heights", centro:[29.489573, -98.550177], tz:"America/Chicago", lugares:[
  {n:"San Antonio Animal Care Services", cat:"refugio", lat:29.414773, lng:-98.591145, dir:"4710 State Highway 151, Balcones Heights", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"San Antonio Humane Society", cat:"refugio", lat:29.497241, lng:-98.554293, dir:"4804 Fredericksburg Road, Balcones Heights", tel:"+1-210-226-7461", horas:[12.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Fintique Tropical Fish Pet Store", cat:"tienda", lat:29.469014, lng:-98.526276, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.514073, lng:-98.551255, dir:"8109 Callaghan Road, Balcones Heights", tel:"+12103663442", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Low Cost Pet Vet", cat:"vet", lat:29.486936, lng:-98.526812, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oak Hills Animal Hospital", cat:"vet", lat:29.490453, lng:-98.567471, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:29.489785, lng:-98.544698, dir:"6515 Interstate 10 West, Balcones Heights", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ball": {nombre:"Ball", centro:[31.415445, -92.41154], tz:"America/Chicago", lugares:[
  {n:"Gone Wild Safari", cat:"zoo", lat:31.429838, lng:-92.461664, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bandera": {nombre:"Bandera", centro:[29.727007, -99.072459], tz:"America/Chicago", lugares:[
  {n:"Bandera Hill Country Vet Hospital", cat:"vet", lat:29.707747, lng:-99.057858, dir:"1413 State Highway 173 South, Bandera", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bandera Veterinary Clinic", cat:"vet", lat:29.730798, lng:-99.091783, dir:"1989 State Highway 16 North, Bandera", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "barling": {nombre:"Barling", centro:[35.330162, -94.305951], tz:"America/Chicago", lugares:[
  {n:"Chaffee Crossing Dog Park", cat:"parque", lat:35.304095, lng:-94.332278, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lady Boss Grooming & World of Pets", cat:"peluqueria", lat:35.331163, lng:-94.307834, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Whole Pet", cat:"tienda", lat:35.354259, lng:-94.357627, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ultimutt Doggie Day Care", cat:"tienda", lat:35.327663, lng:-94.352103, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Animal Health Care", cat:"vet", lat:35.346076, lng:-94.333503, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chaffee Veterinary Clinic", cat:"vet", lat:35.322396, lng:-94.343069, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eastside Animal Health Clinic", cat:"vet", lat:35.343073, lng:-94.326492, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"River Valley Animal Hospital", cat:"vet", lat:35.320627, lng:-94.299969, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bartlesville": {nombre:"Bartlesville", centro:[36.750927, -95.977178], tz:"America/Chicago", lugares:[
  {n:"Manley Animal Hospital", cat:"vet", lat:36.745304, lng:-95.932404, dir:"3812 Southeast Adams Road, Bartlesville", tel:"+1-918-333-7286", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bastrop-texas": {nombre:"Bastrop", centro:[30.110495, -97.31527], tz:"America/Chicago", lugares:[
  {n:"Bastrop Dog Park", cat:"parque", lat:30.107496, lng:-97.329507, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hair of the Dog", cat:"peluqueria", lat:30.109543, lng:-97.339837, dir:"515 State Highway 71 West, Bastrop", tel:"+1-512-412-6139", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.114614, lng:-97.352702, dir:"739 State Highway 71 West, Bastrop", tel:"+1-512-321-5800", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Whole Pets Market", cat:"tienda", lat:30.107954, lng:-97.332437, dir:"475 State Highway 71 West, Bastrop", tel:"+1-512-332-0105", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crossroads Animal Hospital", cat:"vet", lat:30.112197, lng:-97.347803, dir:"651 State Highway 71 West, Bastrop", tel:"+1-512-321-0506", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "baton-rouge": {nombre:"Baton Rouge", centro:[30.449416, -91.186966], tz:"America/Chicago", lugares:[
  {n:"Raising Cane's Dog Park", cat:"parque", lat:30.434676, lng:-91.169275, dir:"1442 City Park Avenue, Baton Rouge", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Gates at Citiplace Dog Park", cat:"parque", lat:30.422016, lng:-91.124437, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petz Plaza", cat:"refugio", lat:30.415554, lng:-91.140003, dir:"4765 Perkins Road, Baton Rouge", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.422933, lng:-91.15394, dir:"3535 Perkins Road, Baton Rouge", tel:"+1 225-332-5515", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Health Clinic of Baton Rouge", cat:"vet", lat:30.415236, lng:-91.139499, dir:"4803 Perkins Road, Baton Rouge", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bocage Animal Hospital", cat:"vet", lat:30.434713, lng:-91.112316, dir:"7353 Jefferson Highway, Baton Rouge", tel:"+1-225-928-7550", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Helouin Veterinary Hospital", cat:"vet", lat:30.469712, lng:-91.107027, dir:"7821 Airline Highway, Baton Rouge", tel:"+1-225-924-2471", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Perkins Road Veterinary Hospital", cat:"vet", lat:30.413402, lng:-91.135003, dir:"Moss Side Lane, Baton Rouge", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bay-city-texas": {nombre:"Bay City", centro:[28.982757, -95.969402], tz:"America/Chicago", lugares:[
  {n:"Barkway Dog Park", cat:"parque", lat:28.98698, lng:-95.967296, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bad to the Bone", cat:"peluqueria", lat:28.984994, lng:-95.953584, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw City", cat:"peluqueria", lat:28.961748, lng:-95.969112, dir:"4101 Avenue F, Bay City", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bayou-vista": {nombre:"Bayou Vista", centro:[29.689257, -91.26728], tz:"America/Chicago", lugares:[
  {n:"Steve's Pet Shop", cat:"tienda", lat:29.681957, lng:-91.272617, dir:"841 US-90, Bayou Vista", tel:"+1 985-395-2473", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "baytown": {nombre:"Baytown", centro:[29.735505, -94.977427], tz:"America/Chicago", lugares:[
  {n:"Kendras Pet Sitting", cat:"refugio", lat:29.759276, lng:-94.974259, dir:"522 Hillhurst Drive, Baytown", horas:[0.0, 24.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.793723, lng:-94.983087, dir:"6345 Garth Road, Baytown", tel:"+1 346-216-3983", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.775099, lng:-94.979804, dir:"4665 Garth Road, Baytown", tel:"+1 281-427-4374", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Baytown Animal Hospital", cat:"vet", lat:29.770949, lng:-95.015317, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bear-creek-texas": {nombre:"Bear Creek", centro:[30.182125, -97.939195], tz:"America/Chicago", lugares:[
  {n:"Beerburg Brewing", cat:"parque", lat:30.234802, lng:-98.004524, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pups And Pals", cat:"refugio", lat:30.230104, lng:-97.892358, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tomlinson's Feed", cat:"tienda", lat:30.203239, lng:-97.982535, dir:"164 Belterra Village Way, Bear Creek", tel:"+1-737-484-0107", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Tomlinson's Pet Food & More", cat:"tienda", lat:30.201355, lng:-97.879287, dir:"5900 C West Slaughter Lane, Bear Creek", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Circle C Animal Hospital", cat:"vet", lat:30.203984, lng:-97.87935, dir:"9600 H Escarpment Boulevard, Bear Creek", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beaumont-texas": {nombre:"Beaumont", centro:[30.082934, -94.098428], tz:"America/Chicago", lugares:[
  {n:"Petco Grooming Salon", cat:"peluqueria", lat:30.123027, lng:-94.164856, dir:"4175 Dowlen Road, Beaumont", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Beaumont Animal Care", cat:"refugio", lat:30.098482, lng:-94.100853, dir:"1884 Pine Street, Beaumont", tel:"+1-409-838-3304", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.119323, lng:-94.170705, dir:"4045 Dowlen Road, Beaumont", tel:"+1 409-924-0247", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.123134, lng:-94.165008, dir:"4175 Dowlen Road, Beaumont", tel:"+1 409-895-0440", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Puppy Love", cat:"tienda", lat:30.078863, lng:-94.170599, dir:"6460 Phelan Boulevard, Beaumont", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Beaumont West Animal Care", cat:"vet", lat:30.093641, lng:-94.190527, dir:"1725 North Major Drive, Beaumont", tel:"+1 409-866-9900", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dowlen Road Veterinary Center", cat:"vet", lat:30.099644, lng:-94.168566, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West End Animal Clinic", cat:"vet", lat:30.077631, lng:-94.168158, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bedford-texas": {nombre:"Bedford", centro:[32.844017, -97.143067], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:32.852483, lng:-97.132653, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic", cat:"vet", lat:32.845497, lng:-97.132815, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bedford Oaks Family Vet", cat:"vet", lat:32.844178, lng:-97.14248, dir:"1600 Bedford Road", tel:"+1 817-354-0655", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:32.85244, lng:-97.130543, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bee-cave": {nombre:"Bee Cave", centro:[30.308537, -97.94501], tz:"America/Chicago", lugares:[
  {n:"Bee Cave Dog Park", cat:"parque", lat:30.310735, lng:-97.951717, dir:"13676 Bee Cave Parkway", tel:"+1-512-767-6617", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.306344, lng:-97.941549, dir:"12812 Shops Parkway, Bee Cave", tel:"+1 512-263-5790", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.306413, lng:-97.941467, dir:"12812 Shops Parkway, Bee Cave", tel:"+1-512-263-6077", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Southwest Vet", cat:"vet", lat:30.250608, lng:-97.89667, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Austin Zoo", cat:"zoo", lat:30.26175, lng:-97.937193, dir:"10808 Rawhide Trail, Bee Cave", tel:"+1-512-288-1490", horas:[9.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "beeville": {nombre:"Beeville", centro:[28.400832, -97.748331], tz:"America/Chicago", lugares:[
  {n:"Credence Veterinary Clinic", cat:"vet", lat:28.419649, lng:-97.71959, dir:"2389 US-59, Beeville", tel:"+1 361-358-1711", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bella-vista": {nombre:"Bella Vista", centro:[36.467804, -94.266973], tz:"America/Chicago", lugares:[
  {n:"Bella Vista K9 Corral Dog Park", cat:"parque", lat:36.472702, lng:-94.315905, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovely Pets Grooming", cat:"peluqueria", lat:36.455733, lng:-94.290477, dir:"640 West Lancashire Boulevard, Bella Vista", tel:"+1 479 553 7280", horas:[8.25, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Viva La Pooch Salon", cat:"peluqueria", lat:36.466028, lng:-94.300275, dir:"1721 Forest Hills Boulevard, Bella Vista", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bella Vista Animal Shelter", cat:"refugio", lat:36.497473, lng:-94.270097, dir:"32 Bella Vista Way", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Village Pet Hospital", cat:"vet", lat:36.439079, lng:-94.232598, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bellaire-texas": {nombre:"Bellaire", centro:[29.705786, -95.45883], tz:"America/Chicago", lugares:[
  {n:"Bark Park", cat:"parque", lat:29.730326, lng:-95.464805, dir:"5151 Richmond Avenue, Bellaire", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Officer Lucy Dog Park", cat:"parque", lat:29.690978, lng:-95.447663, dir:"4337 Lafayette, Bellaire", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dog House Pet Salon - Galleria", cat:"peluqueria", lat:29.731137, lng:-95.483283, dir:"5917 Richmond Avenue, Bellaire", tel:"+1-713-820-6140", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"You Lucky Dog Pet Resort", cat:"refugio", lat:29.657581, lng:-95.476182, dir:"11403 Chimney Rock Road, Bellaire", tel:"+1-713-668-7297", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:29.685724, lng:-95.461819, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.724028, lng:-95.459101, dir:"5415 West Loop South, Bellaire", tel:"+1 713-661-5585", horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield", cat:"vet", lat:29.671965, lng:-95.460564, dir:"10275 South Post Oak Road Frontage Road, Bellaire", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Meyerland Animal Clinic", cat:"vet", lat:29.668351, lng:-95.465417, dir:"4995 West Bellfort Street, Bellaire", tel:"+1-713-723-8612", horas:[7.25, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet", cat:"vet", lat:29.689577, lng:-95.464781, dir:"4946 Beechnut Street, Bellaire", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westbury Animal Hospital & Pet Hotel", cat:"vet", lat:29.657621, lng:-95.465077, dir:"4917 South Willow Drive, Bellaire", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bellmead": {nombre:"Bellmead", centro:[31.594054, -97.10889], tz:"America/Chicago", lugares:[
  {n:"La Vega Veterinary Clinic", cat:"vet", lat:31.592557, lng:-97.08448, dir:"555 East Loop 340, Bellmead", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bellville-texas": {nombre:"Bellville", centro:[29.950225, -96.257186], tz:"America/Chicago", lugares:[
  {n:"Simply Furtastic Pet Grooming", cat:"peluqueria", lat:29.930514, lng:-96.249111, dir:"1404 South Front Street, Bellville", tel:"+1-979-227-2731", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "belton-texas": {nombre:"Belton", centro:[31.056013, -97.464453], tz:"America/Chicago", lugares:[
  {n:"Bell County Veterinary Hospital", cat:"vet", lat:31.05846, lng:-97.450909, dir:"1005 East 6th Avenue, Belton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Belton Small Animal Clinic", cat:"vet", lat:31.081788, lng:-97.457, dir:"2607 North Main Street, Belton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Belton Veterinary Clinic", cat:"vet", lat:31.032314, lng:-97.48369, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "benbrook": {nombre:"Benbrook", centro:[32.673188, -97.460576], tz:"America/Chicago", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:32.681597, lng:-97.415508, dir:"4608 Bryant Irvin Road, Benbrook", tel:"+1 817-886-4333", horas:[6.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSuites", cat:"refugio", lat:32.62852, lng:-97.41115, dir:"5501 Columbus Trail, Benbrook", tel:"+1 682 310 7822", horas:[6.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.685639, lng:-97.412876, dir:"4465 Bryant Irvin Road, Benbrook", tel:"+1 817-377-1889", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.676449, lng:-97.412308, dir:"5600 Overton Ridge Boulevard, Benbrook", tel:"+1 817-423-1919", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Cityview Animal Hospital", cat:"vet", lat:32.678285, lng:-97.417681, dir:"6120 Overton Ridge Boulevard, Benbrook", tel:"+1-817-294-7733", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fort Worth Veterinary Specialty and Emergency Hospital", cat:"vet", lat:32.681325, lng:-97.411578, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Mercedes Place Animal Hospital", cat:"vet", lat:32.675028, lng:-97.468724, dir:"9006 Benbrook Boulevard", tel:"+1-817-249-1986", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "benton-louisiana": {nombre:"Benton", centro:[32.697804, -93.739926], tz:"America/Chicago", lugares:[
  {n:"Bayou Grooming", cat:"peluqueria", lat:32.682142, lng:-93.745345, dir:"6368 LA Highway 3, Benton", tel:"+1 318 272 1561", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bentonville": {nombre:"Bentonville", centro:[36.372861, -94.208787], tz:"America/Chicago", lugares:[
  {n:"Orchards Park Large Dog Park", cat:"parque", lat:36.377641, lng:-94.194454, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Orchards Park Small Dog Park", cat:"parque", lat:36.377388, lng:-94.194283, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Animal Sanctuary", cat:"refugio", lat:36.36327, lng:-94.227115, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.336447, lng:-94.175906, dir:"4013 West Walnut Street, Bentonville", tel:"+1-479-636-4214", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bergheim": {nombre:"Bergheim", centro:[29.827441, -98.5753], tz:"America/Chicago", lugares:[
  {n:"Bergheim Pet Hospital & Clinic", cat:"vet", lat:29.820392, lng:-98.578165, dir:"25B FM 3351 South, Bergheim", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bertram-texas": {nombre:"Bertram", centro:[30.743765, -98.055435], tz:"America/Chicago", lugares:[
  {n:"Living Grace Canine Ranch", cat:"refugio", lat:30.77849, lng:-97.995236, dir:"160 Elaina Lane, Bertram", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bethany-oklahoma": {nombre:"Bethany", centro:[35.518673, -97.632265], tz:"America/Chicago", lugares:[
  {n:"Rover’s Makeover Dog Grooming", cat:"peluqueria", lat:35.563413, lng:-97.656699, dir:"9201 North Council Road, Bethany", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.555722, lng:-97.641526, dir:"8357 North Rockwell Avenue, Bethany", tel:"+1 405-720-0104", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.463112, lng:-97.625823, dir:"6327 Southwest 3rd Street, Bethany", tel:"+1 405-440-0041", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Wiggles & Wags", cat:"tienda", lat:35.462005, lng:-97.647401, dir:"7624 West Reno Avenue, Bethany", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.555406, lng:-97.641537, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beverly-hills-texas": {nombre:"Beverly Hills", centro:[31.522606, -97.15563], tz:"America/Chicago", lugares:[
  {n:"The Urban Rescue Ranch", cat:"refugio", lat:31.510001, lng:-97.126935, dir:"3108 Robinson Drive, Beverly Hills", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:31.520663, lng:-97.170428, dir:"4600 Franklin Avenue, Beverly Hills", tel:"+1 254-741-6847", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:31.499538, lng:-97.15889, dir:"2404 West Loop 340, Beverly Hills", tel:"+1 254-662-4535", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Family Pet Care Clinic", cat:"vet", lat:31.529551, lng:-97.181065, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake Air Animal Hospital", cat:"vet", lat:31.519875, lng:-97.181703, dir:"5601B West Waco Drive, Beverly Hills", tel:"+1-254-772-3520", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Waco Animal Emergency Clinic", cat:"vet", lat:31.51152, lng:-97.141952, dir:"3901 South Jack Kultgen Expressway, Beverly Hills", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "big-lake-texas": {nombre:"Big Lake", centro:[31.195474, -101.459275], tz:"America/Chicago", lugares:[
  {n:"Big Lake Animal Shelter", cat:"refugio", lat:31.188921, lng:-101.446659, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "big-spring": {nombre:"Big Spring", centro:[32.250398, -101.478736], tz:"America/Chicago", lugares:[
  {n:"Highland Animal Hospital", cat:"vet", lat:32.214717, lng:-101.473785, dir:"3600 South US Highway 87, Big Spring", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bishop-hills": {nombre:"Bishop Hills", centro:[35.259774, -101.950467], tz:"America/Chicago", lugares:[
  {n:"Bushland Small Animal Veterinary Clinic", cat:"vet", lat:35.192126, lng:-102.058201, dir:"18600 West Interstate 40, Bishop Hills", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bixby": {nombre:"Bixby", centro:[35.942043, -95.883324], tz:"America/Chicago", lugares:[
  {n:"Wags and Wiggles Pet Grooming", cat:"peluqueria", lat:35.974706, lng:-95.797801, dir:"8206 South Elm Place, Bixby", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"River Trail Animal Hospital", cat:"vet", lat:35.97992, lng:-95.887673, dir:"12630 South Memorial Drive East, Bixby", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southside Veteranary Clinic", cat:"vet", lat:35.917502, lng:-95.88563, dir:"16917 South Memorial Drive East, Bixby", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "blanchard": {nombre:"Blanchard", centro:[32.581918, -93.892588], tz:"America/Chicago", lugares:[
  {n:"Brookings Animal Hospital", cat:"vet", lat:32.587551, lng:-93.815294, dir:"4919 North Market Street, Blanchard", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Jubilee Zoo", cat:"zoo", lat:32.615497, lng:-93.866992, dir:"6402 Highway 1, Blanchard", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "blanchard-oklahoma": {nombre:"Blanchard", centro:[35.138001, -97.658368], tz:"America/Chicago", lugares:[
  {n:"Blanchard Animal Hospital", cat:"vet", lat:35.128574, lng:-97.652629, dir:"500 Roosevelt Street, Blanchard", tel:"+1-405-485-3992", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "blanco-texas": {nombre:"Blanco", centro:[30.100704, -98.42206], tz:"America/Chicago", lugares:[
  {n:"Blanco Veterinary Clinic", cat:"vet", lat:30.081713, lng:-98.41167, dir:"1494 Loop 163, Blanco", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "blue-mound-texas": {nombre:"Blue Mound", centro:[32.856517, -97.338906], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:32.913574, lng:-97.313657, dir:"3001 Texas Sage Trail, Blue Mound", tel:"+1 817-741-7923", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.900348, lng:-97.3266, dir:"2241 Porter Creek Drive, Blue Mound", tel:"+1 682-703-4393", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Chewy Vetcare", cat:"vet", lat:32.916137, lng:-97.309141, dir:"3251 Tracewood Way, Blue Mound", tel:"+1 817-380-3077", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"City Vet", cat:"vet", lat:32.915672, lng:-97.318532, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "blytheville": {nombre:"Blytheville", centro:[35.928325, -89.904561], tz:"America/Chicago", lugares:[
  {n:"Dawgy D-Tails", cat:"peluqueria", lat:35.935711, lng:-89.879283, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Faithful Friends Animal Clinic", cat:"vet", lat:35.935671, lng:-89.8787, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boerne": {nombre:"Boerne", centro:[29.794664, -98.73197], tz:"America/Chicago", lugares:[
  {n:"Pet's Barn", cat:"tienda", lat:29.781012, lng:-98.732275, dir:"214 West Bandera Road, Boerne", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Boerne Veterinary Clinic", cat:"vet", lat:29.803343, lng:-98.736283, dir:"921 North Main Street, Boerne", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cibolo Creek Veterinary Hospital", cat:"vet", lat:29.786232, lng:-98.698237, dir:"150 Herff Ranch Boulevard, Boerne", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Highview Veterinary Hospital", cat:"vet", lat:29.776936, lng:-98.739903, dir:"5 Coughran Road, Boerne", tel:"+1 830 470 8414", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Kendall County Veterinary Center", cat:"vet", lat:29.787914, lng:-98.685255, dir:"141 State Highway 46 East, Boerne", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boise-city": {nombre:"Boise City", centro:[36.729789, -102.513132], tz:"America/Chicago", lugares:[
  {n:"Boise City Animal Hospital", cat:"vet", lat:36.729765, lng:-102.494487, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "borger": {nombre:"Borger", centro:[35.668977, -101.391948], tz:"America/Chicago", lugares:[
  {n:"High Plains Animal Hospital", cat:"vet", lat:35.652945, lng:-101.395226, dir:"1335 South Main Street, Borger", tel:"+1 806-274-6231", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Frank J Smith Bird Sanctuary", cat:"zoo", lat:35.65198, lng:-101.398051, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bossier-city": {nombre:"Bossier City", centro:[32.515887, -93.733654], tz:"America/Chicago", lugares:[
  {n:"Shreveport Dog Park", cat:"parque", lat:32.500121, lng:-93.711406, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Angel's Lil Puffs", cat:"peluqueria", lat:32.531303, lng:-93.680601, dir:"4105 East Texas Street, Bossier City", tel:"+1 318-747-7280", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:32.47932, lng:-93.718711, dir:"701 East Kings Highway, Bossier City", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.558697, lng:-93.709605, dir:"2631 Beene Boulevard, Bossier City", tel:"+1 318-742-7025", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.446295, lng:-93.72183, dir:"6596 Youree Drive, Bossier City", tel:"+1 318-524-0540", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Airline Animal Health and Surgery Center", cat:"vet", lat:32.555749, lng:-93.708754, dir:"2633 Viking Drive, Bossier City", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boswell-oklahoma": {nombre:"Boswell", centro:[34.027321, -95.869142], tz:"America/Chicago", lugares:[
  {n:"Boswell Animal Kare", cat:"vet", lat:34.044921, lng:-95.921298, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bowie-texas": {nombre:"Bowie", centro:[33.558993, -97.848472], tz:"America/Chicago", lugares:[
  {n:"Bowie Pet Clinic", cat:"vet", lat:33.558915, lng:-97.850616, dir:"100 North Smythe Street, Bowie", tel:"+19408723400", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boyd-texas": {nombre:"Boyd", centro:[33.078887, -97.565442], tz:"America/Chicago", lugares:[
  {n:"Boyd Animal Hospital", cat:"vet", lat:33.078444, lng:-97.546774, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brackettville": {nombre:"Brackettville", centro:[29.313535, -100.415757], tz:"America/Chicago", lugares:[
  {n:"Mascot Dog Park", cat:"parque", lat:29.300403, lng:-100.419271, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brenham": {nombre:"Brenham", centro:[30.166883, -96.397744], tz:"America/Chicago", lugares:[
  {n:"Brenham Animal Shelter", cat:"refugio", lat:30.147783, lng:-96.414668, dir:"1804 Longwood Drive, Brenham", tel:"+1-979-337-7351", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.140249, lng:-96.382208, dir:"954 US Highway 290 East, Brenham", tel:"+1 979-353-3035", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Creekside Veterinary Hospital", cat:"vet", lat:30.182458, lng:-96.380955, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Washington Animal Clinic", cat:"vet", lat:30.186055, lng:-96.413194, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "briarcliff-texas": {nombre:"Briarcliff", centro:[30.407421, -98.044459], tz:"America/Chicago", lugares:[
  {n:"Spicewood Vet Clinic", cat:"vet", lat:30.368534, lng:-98.069801, dir:"22012 O'Dell Fairway Trail, Briarcliff", tel:"+1-512-731-3093", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bridge-city": {nombre:"Bridge City", centro:[30.029436, -93.839908], tz:"America/Chicago", lugares:[
  {n:"Bridge City Animal Hospital", cat:"vet", lat:30.041762, lng:-93.823879, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bridge-creek": {nombre:"Bridge Creek", centro:[35.235064, -97.736708], tz:"America/Chicago", lugares:[
  {n:"GetFixedOK", cat:"vet", lat:35.291389, lng:-97.692152, dir:"100 Ridgecrest Drive, Bridge Creek", tel:"+1-405-505-2545", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "britton-texas": {nombre:"Britton", centro:[32.547509, -97.068125], tz:"America/Chicago", lugares:[
  {n:"Heritage Towne Dog Park", cat:"parque", lat:32.518856, lng:-97.072565, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "broken-arrow": {nombre:"Broken Arrow", centro:[36.052599, -95.790819], tz:"America/Chicago", lugares:[
  {n:"Barking Ridge", cat:"parque", lat:36.022058, lng:-95.853713, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rose West Dog Park", cat:"parque", lat:36.016113, lng:-95.847208, dir:"4751 West New Orleans Street South, Broken Arrow", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clean Paws Grooming and Dogwash", cat:"peluqueria", lat:35.989867, lng:-95.796913, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Flippin' Tails", cat:"peluqueria", lat:36.018346, lng:-95.795547, dir:"3333 South Elm Place, Broken Arrow", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Jo-San's Kennels", cat:"peluqueria", lat:36.095693, lng:-95.739802, dir:"21281 East 47th Street South, Broken Arrow", tel:"+1-918-355-5513", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Klipz Pet Grooming and Salon", cat:"peluqueria", lat:36.060691, lng:-95.799517, dir:"817 West Kenosha Street North, Broken Arrow", tel:"+1-918-251-2547", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Phancy Phydeaux Pet Grooming", cat:"peluqueria", lat:36.061205, lng:-95.732497, dir:"21910 East 71st Street South, Broken Arrow", tel:"+1 918 254 7666", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Polished Paws", cat:"peluqueria", lat:36.047585, lng:-95.787595, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sloppy Dog Wash", cat:"peluqueria", lat:36.018423, lng:-95.800839, dir:"732 West New Orleans Street, Broken Arrow", tel:"+1 918 364 9274", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Aurora Kennel", cat:"refugio", lat:36.075661, lng:-95.866993, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bouse Fur House", cat:"refugio", lat:36.055092, lng:-95.809624, dir:"1900 West Detroit Street, Broken Arrow", tel:"+19188935695", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Broken Arrow Animal Shelter", cat:"refugio", lat:36.089342, lng:-95.738361, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Charlie's Paw Spa and Doggie Hotel", cat:"refugio", lat:35.973498, lng:-95.757891, dir:"19640 East 131st Street South, Broken Arrow", tel:"+1 918 946 0044", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggie D'Tails", cat:"refugio", lat:36.055676, lng:-95.814807, tel:"+1-918-251-1313", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggy Day Spa and Resort", cat:"refugio", lat:35.973993, lng:-95.77018, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSuites", cat:"refugio", lat:36.073899, lng:-95.887131, dir:"6136 South Memorial Drive East, Broken Arrow", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Top Dog Ranch", cat:"tienda", guarderia:true, lat:35.988994, lng:-95.778867, dir:"1050 E Tucson Street, Broken Arrow", tel:"+1-918-379-4909", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Aquarium Customs", cat:"tienda", lat:36.054699, lng:-95.814863, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fins For Grins", cat:"tienda", lat:36.068046, lng:-95.797905, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake Dog", cat:"tienda", lat:36.038559, lng:-95.790235, dir:"1605 South Main Street, Broken Arrow", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:36.07631, lng:-95.885806, dir:"8221 East 61st Street South, Broken Arrow", tel:"+1 918 806 2316", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.067222, lng:-95.774492, dir:"1410 East Hillside Drive, Broken Arrow", tel:"+1 918-355-6424", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:36.060444, lng:-95.854445, dir:"10908 East 71st Street South, Broken Arrow", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southern Agriculture", cat:"tienda", lat:36.034346, lng:-95.799216, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ultimate Reefs and Aquariums", cat:"tienda", lat:36.076366, lng:-95.887368, dir:"South Memorial Drive East, Broken Arrow", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Emergency Center", cat:"vet", lat:36.105399, lng:-95.863262, dir:"4055 South 102nd Avenue East, Broken Arrow", tel:"+1 918 665 0508", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical and Surgical Hospital East", cat:"vet", lat:36.061228, lng:-95.732354, dir:"21910 East 71st Street South, Broken Arrow", tel:"+1 918 355 5662", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Applebaum Animal Clinic", cat:"vet", lat:36.0745, lng:-95.883739, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Avalon Animal Hospital", cat:"vet", lat:36.045304, lng:-95.780093, dir:"710 South 9th Street, Broken Arrow", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bent Arrow Veterinary", cat:"vet", lat:36.031238, lng:-95.849467, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"CARE Animal Hospital", cat:"vet", lat:36.028649, lng:-95.866982, dir:"9717 East 93rd Street South, Broken Arrow", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oneta Animal Care", cat:"vet", lat:36.019961, lng:-95.710326, dir:"9819 South 239th East Avenue, Broken Arrow", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Premier Animal Wellness and Surgery", cat:"vet", lat:35.989597, lng:-95.796908, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southern Agriculture", cat:"vet", lat:36.063697, lng:-95.778455, dir:"1034 East Lansing Street, Broken Arrow", tel:"+1-918-251-0267", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Tulsa Animal Urgent Care", cat:"vet", lat:36.074717, lng:-95.868091, dir:"6119 South Mingo Road East, Broken Arrow", tel:"+1 918 417 8887", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tulsa Veterinary Specialists", cat:"vet", lat:36.105664, lng:-95.86298, dir:"4005 South 102nd Avenue East, Broken Arrow", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:36.075667, lng:-95.870126, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "broken-bow-oklahoma": {nombre:"Broken Bow", centro:[34.029863, -94.738966], tz:"America/Chicago", lugares:[
  {n:"The Pink Poodle", cat:"peluqueria", lat:34.027595, lng:-94.736908, dir:"104 North Main Street, Broken Bow", tel:"+1-580-306-7435", horas:[9.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Top Dog", cat:"peluqueria", lat:34.028131, lng:-94.73847, tel:"+1-580-306-3647", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brookside-village": {nombre:"Brookside Village", centro:[29.5869, -95.325215], tz:"America/Chicago", lugares:[
  {n:"Southdown Dog Park", cat:"parque", lat:29.571275, lng:-95.384824, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tom Bass Dog Park", cat:"parque", lat:29.588514, lng:-95.371717, dir:"3452 Fellows Rd, Brookside Village", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vet", cat:"vet", lat:29.570968, lng:-95.38334, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "broussard": {nombre:"Broussard", centro:[30.147151, -91.961241], tz:"America/Chicago", lugares:[
  {n:"Zoosiana", cat:"zoo", lat:30.117899, lng:-91.938206, dir:"5601 US 90 E, Broussard", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brownfield-texas": {nombre:"Brownfield", centro:[33.181166, -102.274237], tz:"America/Chicago", lugares:[
  {n:"Brownfield Animal Shelter", cat:"refugio", lat:33.172896, lng:-102.274524, dir:"701 East Park Lane, Brownfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Terry County Veterinary Hospital", cat:"vet", lat:33.249859, lng:-102.247992, dir:"1028 US Highway 82, Brownfield", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brownsville-texas": {nombre:"Brownsville", centro:[25.902429, -97.49817], tz:"America/Chicago", lugares:[
  {n:"Gladys Porter Zoo", cat:"zoo", lat:25.912448, lng:-97.496185, dir:"500 Ringgold Street, Brownsville", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brownwood-texas": {nombre:"Brownwood", centro:[31.720851, -98.98187], tz:"America/Chicago", lugares:[
  {n:"Corinne T. Smith Animal Center", cat:"refugio", lat:31.665832, lng:-98.982623, dir:"3016 Milam Drive, Brownwood", tel:"+1-325-646-0617", horas:[13.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Small Animal Medical Center", cat:"vet", lat:31.727273, lng:-98.979195, dir:"1001-A North Fisk Avenue, Brownwood", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "buffalo-gap-texas": {nombre:"Buffalo Gap", centro:[32.279297, -99.830089], tz:"America/Chicago", lugares:[
  {n:"Suite Life Pet Resort & Spa", cat:"refugio", lat:32.350124, lng:-99.770125, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bulverde": {nombre:"Bulverde", centro:[29.743833, -98.453073], tz:"America/Chicago", lugares:[
  {n:"Bark Park", cat:"parque", lat:29.679911, lng:-98.461909, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Smithson Valley", cat:"vet", lat:29.79947, lng:-98.420828, dir:"286 Singing Oaks, Bulverde", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Country Hills Veterinary Clinic", cat:"vet", lat:29.750528, lng:-98.433494, dir:"30695 US Highway 281 North, Bulverde", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fur & Feather Family Vet", cat:"vet", lat:29.805223, lng:-98.37884, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bunker-hill-village": {nombre:"Bunker Hill Village", centro:[29.767451, -95.529943], tz:"America/Chicago", lugares:[
  {n:"Large Dogs", cat:"parque", lat:29.742433, lng:-95.586567, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dogs", cat:"parque", lat:29.742382, lng:-95.586207, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.735108, lng:-95.570066, dir:"10911 Westheimer Road, Bunker Hill Village", tel:"+1 713-972-1244", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Houston Cat Hospital", cat:"vet", lat:29.735979, lng:-95.572952, dir:"11169 Westheimer Road, Bunker Hill Village", tel:"+1-713-597-6829", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kirkwood Memorial Animal Clinic", cat:"vet", lat:29.770194, lng:-95.590131, dir:"14015 Memorial Drive, Bunker Hill Village", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Memorial Town & Country Animal Clinic", cat:"vet", lat:29.766292, lng:-95.55804, dir:"12661 Memorial Drive, Bunker Hill Village", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"West Houston Veterinary Medical Associates", cat:"vet", lat:29.756285, lng:-95.628701, dir:"13560 Briar Forest Drive, Bunker Hill Village", tel:"+1-281-493-4712", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "burleson": {nombre:"Burleson", centro:[32.542082, -97.320849], tz:"America/Chicago", lugares:[
  {n:"Burleson Bark Park", cat:"parque", lat:32.537563, lng:-97.306353, dir:"616 Memorial Plaza, Burleson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.569459, lng:-97.32279, dir:"12930 South Freeway, Burleson", tel:"+1 817-426-4110", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.524334, lng:-97.349954, dir:"250 Northwest John Jones Drive, Burleson", tel:"+1 817-447-7288", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:32.523257, lng:-97.347945, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:32.569581, lng:-97.322555, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Burleson Equine Hospital", cat:"vet", lat:32.558265, lng:-97.319859, dir:"755 North Burleson Boulevard", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "burnet": {nombre:"Burnet", centro:[30.760855, -98.223995], tz:"America/Chicago", lugares:[
  {n:"Burnet Veterimary Clinic", cat:"vet", lat:30.73837, lng:-98.236914, dir:"2500 South Water Street, Burnet", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cabot": {nombre:"Cabot", centro:[34.974532, -92.016534], tz:"America/Chicago", lugares:[
  {n:"Pond Dog Park", cat:"parque", lat:34.954942, lng:-92.01919, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cabot Animal Shelter", cat:"refugio", lat:34.950076, lng:-92.041244, dir:"2951 South 1st Street, Cabot", horas:[12.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:34.977955, lng:-92.038731, dir:"290 South Rockwood Road, Cabot", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Safari Pets", cat:"tienda", lat:34.976391, lng:-92.023261, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cabot Animal Clinic", cat:"vet", lat:34.961576, lng:-92.035529, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Little Woods Animal Hospital", cat:"vet", lat:34.9488, lng:-92.061075, dir:"102 Rainbow Drive, Cabot", tel:"+1-501-422-6155", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "caddo-valley": {nombre:"Caddo Valley", centro:[34.182039, -93.071007], tz:"America/Chicago", lugares:[
  {n:"Providence Veterinary Care", cat:"vet", lat:34.188576, lng:-93.07249, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cameron-park-texas": {nombre:"Cameron Park", centro:[25.966571, -97.475515], tz:"America/Chicago", lugares:[
  {n:"Pet Smart Dog Park", cat:"parque", lat:25.966807, lng:-97.507756, dir:"585 Morrison Road, Cameron Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:25.967023, lng:-97.507583, dir:"585 East Morrison Road, Cameron Park", tel:"+1 956-350-0608", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Boca Chica Animal Hospital", cat:"vet", lat:25.939674, lng:-97.502086, dir:"1245 North Expressway, Cameron Park", tel:"+1-956-541-5249", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cammack-village": {nombre:"Cammack Village", centro:[34.779598, -92.344745], tz:"America/Chicago", lugares:[
  {n:"Northshore Dog Park", cat:"parque", lat:34.797311, lng:-92.34116, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws Park at Murray", cat:"parque", lat:34.784408, lng:-92.334187, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Little Rock Animal Shelter", cat:"refugio", lat:34.793931, lng:-92.303477, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.748282, lng:-92.401114, dir:"11400 Financial Centre Parkway, Cammack Village", tel:"+1 501-225-8863", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:34.753716, lng:-92.416525, dir:"12801 Chenal Parkway, Cammack Village", tel:"+1 501-219-9907", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:34.768774, lng:-92.33633, dir:"1818 North Taylor Street, Cammack Village", tel:"+15016664210", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"hollywood feed", cat:"tienda", lat:34.777276, lng:-92.366626, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:34.748072, lng:-92.400929, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chenal Valley Animal Hospital", cat:"vet", lat:34.767896, lng:-92.455691, dir:"16 Rahling Circle, Cammack Village", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hillcrest Animal Hospital", cat:"vet", lat:34.758538, lng:-92.325566, dir:"2900 Kavanaugh Boulevard, Cammack Village", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "campbell-station": {nombre:"Campbell Station", centro:[35.668379, -91.251082], tz:"America/Chicago", lugares:[
  {n:"Jackson County Humane Society", cat:"refugio", lat:35.643532, lng:-91.183387, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "canadian-texas": {nombre:"Canadian", centro:[35.912011, -100.383902], tz:"America/Chicago", lugares:[
  {n:"Canadian Veterinary Clinic", cat:"vet", lat:35.905678, lng:-100.390174, dir:"917 South 2nd Street, Canadian", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "canutillo": {nombre:"Canutillo", centro:[31.912468, -106.598098], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:31.926213, lng:-106.439928, dir:"10771 Gateway South Boulevard, Canutillo", tel:"+1 915-821-0945", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Crossroads Animal Hospital", cat:"vet", lat:31.838915, lng:-106.577522, dir:"4910 Crossroads Drive, Canutillo", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "canyon-texas": {nombre:"Canyon", centro:[34.978985, -101.928191], tz:"America/Chicago", lugares:[
  {n:"Southeast Park Dog Park", cat:"parque", lat:34.968298, lng:-101.902942, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"WTAMU Horse Center", cat:"refugio", lat:35.002758, lng:-101.917663, dir:"2310 North 23rd Street, Canyon", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Salt Bros Coral & Fish", cat:"tienda", lat:34.984451, lng:-101.922115, dir:"2005 North 2nd Avenue, Canyon", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carencro": {nombre:"Carencro", centro:[30.317144, -92.04901], tz:"America/Chicago", lugares:[
  {n:"Melancon Pet Grooming", cat:"refugio", lat:30.315131, lng:-92.049189, dir:"4140 North University Avenue, Carencro", tel:"+1-337-896-9375", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carlisle": {nombre:"Carlisle", centro:[34.783147, -91.746523], tz:"America/Chicago", lugares:[
  {n:"Prairie Bayou WMA", cat:"zoo", lat:34.704844, lng:-91.727124, dir:"5350–5994 Raborn Rd, Carlisle", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "carrollton-texas": {nombre:"Carrollton", centro:[32.951547, -96.903424], tz:"America/Chicago", lugares:[
  {n:"Waggin' Tails Park", cat:"parque", lat:32.961791, lng:-96.958912, dir:"400 South MacArthur Boulevard, Carrollton", horas:[7.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"K-9 Culture Dog Training", cat:"peluqueria", lat:32.947689, lng:-96.910284, dir:"1000 W. Crosby Road, Carrollton", tel:"+1 972-245-1587", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Carrollton Animal Services and Adoption Center", cat:"refugio", lat:32.966612, lng:-96.936767, dir:"2247 Sandy Lake Road, Carrollton", tel:"+1 972-466-3420", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jett Pets", cat:"tienda", lat:32.952723, lng:-96.908684, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.9912, lng:-96.889277, dir:"2722 North Josey Lane, Carrollton", tel:"+1 972-466-2822", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pupcakes", cat:"tienda", lat:32.950483, lng:-96.906865, dir:"1414 South Broadway Street, Carrollton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Josey Ranch Pet Hospital", cat:"vet", lat:32.984727, lng:-96.889274, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riverchase Animal Hospital", cat:"vet", lat:32.95178, lng:-96.951123, dir:"1709 East Belt Line Road, Carrollton", tel:"+1 972-462-7387", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Trinity Pet Hospital", cat:"vet", lat:32.98418, lng:-96.890527, dir:"2523 North Josey Lane, Carrollton", tel:"+1 972 245 3596", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Valley Ranch Pet Clinic", cat:"vet", lat:32.933432, lng:-96.95087, dir:"455 Cimarron Trail, Carrollton", tel:"+1-972-556-1966", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Walnut Plaza Veterinary Hospital", cat:"vet", lat:32.955751, lng:-96.889136, dir:"1910 Walnut Plaza, Carrollton", tel:"+1 972-418-8778", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carthage-texas": {nombre:"Carthage", centro:[32.157041, -94.338114], tz:"America/Chicago", lugares:[
  {n:"Animal Medical Center Of Panola County", cat:"vet", lat:32.145477, lng:-94.371034, dir:"1092 TX-315, Carthage", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carthage Veterinary Hospital", cat:"vet", lat:32.182908, lng:-94.336602, dir:"1024 US Highway 59 North, Carthage", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "casa": {nombre:"Casa", centro:[35.02356, -93.04723], tz:"America/Chicago", lugares:[
  {n:"Bev's Dog Grooming", cat:"peluqueria", lat:35.022702, lng:-93.118634, dir:"27615 East State Highway 10, Casa", tel:"+1-651-500-5207", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "castle-hills": {nombre:"Castle Hills", centro:[29.523285, -98.516407], tz:"America/Chicago", lugares:[
  {n:"Churchill Verterinary Hospital", cat:"vet", lat:29.546693, lng:-98.507781, dir:"11722 West Avenue, Castle Hills", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "castroville-texas": {nombre:"Castroville", centro:[29.3565, -98.878884], tz:"America/Chicago", lugares:[
  {n:"Alamo Area Veterinary Clinic", cat:"vet", lat:29.35474, lng:-98.852602, dir:"1704 US Highway 90 East, Castroville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Clinic", cat:"vet", lat:29.346973, lng:-98.842196, dir:"8225 FM 471 South, Castroville", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "catalpa": {nombre:"Catalpa", centro:[35.137745, -101.875874], tz:"America/Chicago", lugares:[
  {n:"Bark Avenue Pet Styling", cat:"peluqueria", lat:35.178004, lng:-101.883283, dir:"4165 Southwest 34th Avenue, Catalpa", tel:"+1-806-353-2275", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Fur the Love of Grooming", cat:"peluqueria", lat:35.157074, lng:-101.883501, dir:"4827 South Western Street, Catalpa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Le Pucci Bijou", cat:"peluqueria", lat:35.12956, lng:-101.90039, dir:"7639 Canyon Drive, Catalpa", tel:"+1-806-310-3459", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Unleashed", cat:"peluqueria", lat:35.17694, lng:-101.901066, dir:"3359 Bell Street, Catalpa", tel:"+1-806-355-1222", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Gracie's Project", cat:"refugio", lat:35.16209, lng:-101.864396, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Coronado Pet Shoppe", cat:"tienda", lat:35.179291, lng:-101.88348, dir:"3311 South Western Street, Catalpa", tel:"+18063531511", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:35.15989, lng:-101.900161, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Acoma Pine Animal-Bird Clinic", cat:"vet", lat:35.17873, lng:-101.882739, dir:"4010 Southwest 34th Avenue, Catalpa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canyon Road Animal Hospital", cat:"vet", lat:35.172272, lng:-101.861035, dir:"4201 Canyon Drive, Catalpa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Animal Emergency Clinic", cat:"vet", lat:35.156032, lng:-101.877655, dir:"5127 Canyon Drive, Catalpa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Swann Animal Clinic", cat:"vet", lat:35.147602, lng:-101.904589, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Swann Animal Clinic at 45th", cat:"vet", lat:35.164288, lng:-101.873868, dir:"3102 Southwest 45th Avenue, Catalpa", tel:"+1 806-355-9443", horas:[7.0, 20.5], nota:"Dato de OpenStreetMap"},
  {n:"Yarbrough Veterinary Clinic", cat:"vet", lat:35.12953, lng:-101.900185, dir:"7701 Canyon Drive, Catalpa", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "catoosa": {nombre:"Catoosa", centro:[36.188987, -95.745817], tz:"America/Chicago", lugares:[
  {n:"Catoosa Family Pharmacy", cat:"farma", lat:36.182182, lng:-95.747803, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Catoosa Small Animal Hospital", cat:"vet", lat:36.182673, lng:-95.745687, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cave-springs": {nombre:"Cave Springs", centro:[36.263411, -94.231873], tz:"America/Chicago", lugares:[
  {n:"Mt Hebron Large Dog Park", cat:"parque", lat:36.276444, lng:-94.198862, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mt Hebron Small Dog Park", cat:"parque", lat:36.276663, lng:-94.200026, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cedar-hill-texas": {nombre:"Cedar Hill", centro:[32.588807, -96.955367], tz:"America/Chicago", lugares:[
  {n:"Tri City Animal Shelter", cat:"refugio", lat:32.603763, lng:-96.917794, dir:"1150 East Pleasant Run Road, Cedar Hill", tel:"+1-972-291-5335", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.601483, lng:-96.936892, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.592575, lng:-96.935236, dir:"433 East FM 1382 Bld H, Cedar Hill", tel:"+1 972-293-1092", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Cedar Hill Veterinary Clinic", cat:"vet", lat:32.607946, lng:-96.926253, dir:"1026 North Highway 67, Cedar Hill", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vetco Total Care", cat:"vet", lat:32.592463, lng:-96.935163, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "cedar-park": {nombre:"Cedar Park", centro:[30.521712, -97.827833], tz:"America/Chicago", lugares:[
  {n:"Brew and Paws", cat:"parque", lat:30.473036, lng:-97.793688, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cedar Bark Park", cat:"parque", lat:30.519344, lng:-97.86945, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog House Drinkery & Dog Park", cat:"parque", lat:30.551822, lng:-97.765412, dir:"3800 Co Road, Cedar Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Elizabeth Dog Park", cat:"parque", lat:30.476854, lng:-97.788888, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"London Lane Pond", cat:"parque", lat:30.462708, lng:-97.841695, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mill Run DOLA", cat:"parque", lat:30.451933, lng:-97.803357, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Muir Lake Dog Park", cat:"parque", lat:30.483104, lng:-97.810636, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Judy's Grooming", cat:"peluqueria", lat:30.546874, lng:-97.841969, dir:"2405 South Highway 183, Cedar Park", tel:"+1-512-259-1444", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:30.472409, lng:-97.79697, dir:"13945 North Highway 183, Cedar Park", tel:"+1-512-333-1111", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Healthy Pet", cat:"tienda", lat:30.476134, lng:-97.8024, dir:"14028 183A Toll Road, Cedar Park", tel:"+1-512-215-2368", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.468243, lng:-97.802283, dir:"11066 Pecan Park Boulevard, Cedar Park", tel:"+1 512-996-8605", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.527989, lng:-97.815274, dir:"1335 East Whitestone Boulevard, Cedar Park", tel:"+1 512-528-1683", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.474015, lng:-97.801364, dir:"14040 183A Toll Road, Cedar Park", tel:"+1 512-331-5874", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.531734, lng:-97.819795, dir:"5001 183A Toll Road, Cedar Park", tel:"+1 512-690-9496", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:30.474516, lng:-97.80103, dir:"14040 Research Boulevard, Cedar Park", tel:"+1-512-335-1700", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming Cedar Park", cat:"tienda", lat:30.498409, lng:-97.777699, dir:"14900 Avery Ranch Boulevard, Cedar Park", tel:"+1-512-335-9663", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Avery Ranch Animal Hospital", cat:"vet", lat:30.485948, lng:-97.808021, dir:"12720 Avery Ranch Road, Cedar Park", tel:"+1-512-255-1388", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.467949, lng:-97.8022, dir:"11066 Pecan Park Boulevard, Cedar Park", tel:"+1-512-250-9700", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Block House Veterinary Hospital", cat:"vet", lat:30.536202, lng:-97.835869, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cat Hospital Austin'", cat:"vet", lat:30.446636, lng:-97.7807, dir:"13264 Pond Springs Road, Cedar Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Limits Vet Clinic", cat:"vet", lat:30.46943, lng:-97.76291, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crystal Falls Animal Hospital", cat:"vet", lat:30.538904, lng:-97.84745, dir:"2906 South Bagdad Road, Cedar Park", tel:"+1-512-456-8985", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Cypress Creek Pet Care", cat:"vet", lat:30.4754, lng:-97.842148, dir:"2105 Cypress Creek Road, Cedar Park", tel:"+1 512 331 8555", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Hill Country Veterinary Hospital", cat:"vet", lat:30.515356, lng:-97.849733, dir:"1409 West Whitestone Boulevard, Cedar Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lakeline Animal Care", cat:"vet", lat:30.460437, lng:-97.821589, dir:"12010 RM 620, Cedar Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"New Hope Animal Hospital", cat:"vet", lat:30.537126, lng:-97.81882, dir:"1210 East New Hope Drive, Cedar Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Parmer Lane Pet Hospital", cat:"vet", lat:30.520135, lng:-97.774745, dir:"11951 West Parmer Lane, Cedar Park", tel:"+1-512-260-5443", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Thrive", cat:"vet", lat:30.529803, lng:-97.818385, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet - Cedar Park", cat:"vet", lat:30.524037, lng:-97.814687, dir:"1310 East Whitestone Boulevard, Cedar Park", tel:"+1-737-587-8000", horas:[15.0, 23.0], nota:"Dato de OpenStreetMap"}
 ]},
 "celina-texas": {nombre:"Celina", centro:[33.324249, -96.784237], tz:"America/Chicago", lugares:[
  {n:"Amore Pet Care", cat:"refugio", lat:33.330366, lng:-96.773712, dir:"704 Preston Road, Celina", tel:"+1-469-328-9010", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Animal Hospital of Celina", cat:"vet", lat:33.327757, lng:-96.774816, dir:"400 North Preston Road, Celina", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "centerton": {nombre:"Centerton", centro:[36.365268, -94.288687], tz:"America/Chicago", lugares:[
  {n:"Large Dogs", cat:"parque", lat:36.351355, lng:-94.270996, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dogs", cat:"parque", lat:36.351362, lng:-94.271317, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "central": {nombre:"Central", centro:[30.554227, -91.036717], tz:"America/Chicago", lugares:[
  {n:"Lovett Dog Park", cat:"parque", lat:30.524027, lng:-91.037212, dir:"13443 Lovett Road, Central", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chappell-hill": {nombre:"Chappell Hill", centro:[30.141529, -96.256719], tz:"America/Chicago", lugares:[
  {n:"Philips Veterinary Hospital", cat:"vet", lat:30.139285, lng:-96.316688, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chelsea-oklahoma": {nombre:"Chelsea", centro:[36.535594, -95.432417], tz:"America/Chicago", lugares:[
  {n:"Dragon Magic Grooming", cat:"peluqueria", lat:36.535378, lng:-95.431445, dir:"213 West 6th Street, Chelsea", tel:"+1-918-530-6097", horas:[9.0, 15.0], nota:"Dato de OpenStreetMap"}
 ]},
 "china-spring": {nombre:"China Spring", centro:[31.652149, -97.307819], tz:"America/Chicago", lugares:[
  {n:"Cougar Paws Pet Parlor", cat:"peluqueria", lat:31.629042, lng:-97.244603, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "circle-d-kc-estates": {nombre:"Circle D-KC Estates", centro:[30.157525, -97.230909], tz:"America/Chicago", lugares:[
  {n:"Bastrop County Animal Services", cat:"refugio", lat:30.204694, lng:-97.301176, dir:"589 Cool Water Drive, Circle D-KC Estates", tel:"+1-512-549-5160", horas:[11.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "claiborne": {nombre:"Claiborne", centro:[32.515978, -92.191803], tz:"America/Chicago", lugares:[
  {n:"Cooper Veterinary Hospital", cat:"vet", lat:32.5167, lng:-92.188708, dir:"5234 Cypress Street, Claiborne", tel:"+1-318-396-8099", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "claude": {nombre:"Claude", centro:[35.10811, -101.362741], tz:"America/Chicago", lugares:[
  {n:"Claude Veterinary Hospital", cat:"vet", lat:35.115019, lng:-101.370876, dir:"400 North Wilson Street, Claude", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clear-lake-shores": {nombre:"Clear Lake Shores", centro:[29.547452, -95.032151], tz:"America/Chicago", lugares:[
  {n:"Clear Creek Animal Hospital", cat:"vet", lat:29.559545, lng:-95.036493, dir:"2729 East NASA Parkway, Clear Lake Shores", tel:"+1-281-326-5523", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cleburne": {nombre:"Cleburne", centro:[32.347446, -97.386549], tz:"America/Chicago", lugares:[
  {n:"Furever Clean", cat:"peluqueria", lat:32.339738, lng:-97.407294, dir:"1439 West Henderson Street, Cleburne", tel:"+1-817-556-1777", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Cleburne City Animal Service", cat:"refugio", lat:32.38717, lng:-97.404511, dir:"2375 Service Drive, Cleburne", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Sense", cat:"tienda", lat:32.340733, lng:-97.403326, dir:"1301 West Henderson Street, Cleburne", tel:"+1 682 317 1280", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Cleburne Veterinary Hospital", cat:"vet", lat:32.337169, lng:-97.384529, dir:"105 Country Club Road, Cleburne", tel:"+1-817-641-9858", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nolan River Animal Hospital", cat:"vet", lat:32.347539, lng:-97.427466, dir:"893 North Nolan River Road, Cleburne", tel:"+1-817-558-6724", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Northside Animal Clinic", cat:"vet", lat:32.388328, lng:-97.389784, dir:"2420 North Main Street, Cleburne", tel:"+1-817-641-7411", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clifton-texas": {nombre:"Clifton", centro:[31.780071, -97.57933], tz:"America/Chicago", lugares:[
  {n:"Bosque Animal Rescue Kennels (BARK)", cat:"refugio", lat:31.765093, lng:-97.564276, dir:"4340 TX 6, Clifton", tel:"+1-254-675-1954", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clifton Veterinary Clinic", cat:"vet", lat:31.757387, lng:-97.56173, dir:"4117 TX 6, Clifton", tel:"+1-254-675-8925", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "clyde-texas": {nombre:"Clyde", centro:[32.40596, -99.493691], tz:"America/Chicago", lugares:[
  {n:"Callahan County Veterinarian Clinic", cat:"vet", lat:32.411647, lng:-99.47966, dir:"2566 North Access Road, Clyde", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cockrell-hill": {nombre:"Cockrell Hill", centro:[32.736242, -96.886948], tz:"America/Chicago", lugares:[
  {n:"ElmWoof Dog Park", cat:"parque", lat:32.724681, lng:-96.844379, dir:"2105a South Edgefield Avenue, Cockrell Hill", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woody's Pet Grooming", cat:"peluqueria", lat:32.777006, lng:-96.908919, tel:"+1-214-238-3039", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dallas Animal Services", cat:"refugio", lat:32.768779, lng:-96.872819, dir:"1818 North Westmoreland Road, Cockrell Hill", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SPCA", cat:"refugio", lat:32.76811, lng:-96.860903, dir:"2400 Lone Star Drive, Cockrell Hill", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"DFW Reptile", cat:"tienda", lat:32.72208, lng:-96.837695, dir:"2410 South Tyler Street, Cockrell Hill", tel:"+1-717-521-8855", horas:[17.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Edgefield Animal Clinic", cat:"vet", lat:32.727178, lng:-96.84485, dir:"1827 South Edgefield Avenue, Cockrell Hill", tel:"+1 214 946 4146", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Love Freeway Animal Clinic", cat:"vet", lat:32.702088, lng:-96.835693, dir:"3435 Marvin D Love Freeway, Cockrell Hill", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SPCA of Texas' Mary Spencer Spay/Neuter & Wellness Clinic at Village Fair", cat:"vet", lat:32.689624, lng:-96.824802, dir:"4830 Village Fair Drive, Cockrell Hill", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "coldspring": {nombre:"Coldspring", centro:[30.592421, -95.129382], tz:"America/Chicago", lugares:[
  {n:"Coldspring Veterinary Clinic", cat:"vet", lat:30.571804, lng:-95.143241, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "college-park-texas": {nombre:"College Park", centro:[30.205952, -95.474593], tz:"America/Chicago", lugares:[
  {n:"Woof Gang Bakery and Grooming", cat:"peluqueria", lat:30.205408, lng:-95.462535, dir:"3091 College Park Drive", tel:"+1-346-220-9663", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "college-station": {nombre:"College Station", centro:[30.618394, -96.345599], tz:"America/Chicago", lugares:[
  {n:"Bark Park", cat:"parque", lat:30.642096, lng:-96.326352, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barracks Dog Park", cat:"parque", lat:30.569475, lng:-96.314104, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barracks Dog Park", cat:"parque", lat:30.571921, lng:-96.3159, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Morris \"Buzz\" Hamilton Park", cat:"parque", lat:30.658041, lng:-96.299095, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Park Hudson Place Dog Park", cat:"parque", lat:30.655248, lng:-96.297313, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"University Dog Park", cat:"parque", lat:30.641462, lng:-96.323665, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PAWfection Pet Salon", cat:"peluqueria", lat:30.582713, lng:-96.288061, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.640302, lng:-96.315391, dir:"1505 University Drive East, College Station", tel:"+1 979-260-4134", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Aggieland Animal Health Cetner & Pet Resort", cat:"vet", lat:30.566309, lng:-96.303835, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Pets Veterinary Medical Center", cat:"vet", lat:30.572336, lng:-96.310259, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Anderson Ridge Veterinary Hospital", cat:"vet", lat:30.608349, lng:-96.318866, dir:"1101 Anderson Street, College Station", tel:"+1-979-693-1234", horas:[7.75, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.640226, lng:-96.315496, horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Bryan Animal Clinic", cat:"vet", lat:30.644856, lng:-96.356518, dir:"2710 Maloney Avenue, College Station", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Highway 30 Veterinary Clinic", cat:"vet", lat:30.651302, lng:-96.268474, dir:"4275 Deerfield Drive, College Station", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South 40 Veterinary Hospital", cat:"vet", lat:30.562289, lng:-96.255152, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"TAMU Texas A&M Small Animal Teaching Hospital", cat:"vet", lat:30.6121, lng:-96.353253, dir:"408 Raymond Stotzer Parkway, College Station", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wellborn Road Veterinary Medical Clinic", cat:"vet", lat:30.570341, lng:-96.311177, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "colleyville": {nombre:"Colleyville", centro:[32.88096, -97.155012], tz:"America/Chicago", lugares:[
  {n:"Tipps Canine Hollow Dog Park", cat:"parque", lat:32.889954, lng:-97.201355, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jerry's Paw Spaw", cat:"peluqueria", lat:32.889879, lng:-97.202782, dir:"7800 Davis Boulevard, Colleyville", tel:"+1-817-427-8400", horas:[13.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Bark Avenue Market & Bakery", cat:"tienda", lat:32.891334, lng:-97.147775, dir:"5615 Colleyville Boulevard", tel:"+1 817-656-2275", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.878951, lng:-97.155857, dir:"4801 Colleyville Boulevard", tel:"+1 817-428-4215", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Wag N' Wash", cat:"tienda", lat:32.902191, lng:-97.190626, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:32.902202, lng:-97.190386, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Neighborhood Pet Health Center", cat:"vet", lat:32.897509, lng:-97.198677, dir:"8301 Davis Boulevard, Colleyville", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Tara Animal Hospital", cat:"vet", lat:32.867898, lng:-97.158526, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Thrive Pet Healthcare - Hurst", cat:"vet", lat:32.863234, lng:-97.177861, dir:"520 Grapevine Highway, Colleyville", tel:"+1 817-857-6979", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "colorado-city-texas": {nombre:"Colorado City", centro:[32.393034, -100.86351], tz:"America/Chicago", lugares:[
  {n:"Mitchell County Veterinary Clinic", cat:"vet", lat:32.388357, lng:-100.837962, dir:"2145 State Highway 208, Colorado City", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "comfort": {nombre:"Comfort", centro:[29.967715, -98.905034], tz:"America/Chicago", lugares:[
  {n:"Lindner Animal Hospital", cat:"vet", lat:29.961629, lng:-98.887735, dir:"52150 Interstate 10 West, Comfort", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "commerce-texas": {nombre:"Commerce", centro:[33.243649, -95.902693], tz:"America/Chicago", lugares:[
  {n:"City of Commerce Animal Shelter", cat:"refugio", lat:33.252763, lng:-95.899623, dir:"1203 Oneal Street, Commerce", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Commerce Veterinary Clinic", cat:"vet", lat:33.251672, lng:-95.913125, dir:"113 West State Highway 224, Commerce", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sulphur River Veterinary Clinic", cat:"vet", lat:33.274353, lng:-95.893979, dir:"6713 State Highway 24, Commerce", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "conroe": {nombre:"Conroe", centro:[30.311877, -95.456051], tz:"America/Chicago", lugares:[
  {n:"Frisky Biscuit Dog Park", cat:"parque", lat:30.278763, lng:-95.475408, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wiggens Village Park", cat:"parque", lat:30.340368, lng:-95.465806, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"petbar", cat:"peluqueria", lat:30.279017, lng:-95.467869, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:30.314424, lng:-95.474643, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.335651, lng:-95.481319, dir:"1410 North Loop 336 West, Conroe", tel:"+1 936-441-4700", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital & Emergency Veterinary of Conroe", cat:"vet", lat:30.313122, lng:-95.473325, dir:"505 Interstate 45 North, Conroe", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "converse-texas": {nombre:"Converse", centro:[29.518008, -98.316124], tz:"America/Chicago", lugares:[
  {n:"Arfordable Dog Training", cat:"tienda", lat:29.525287, lng:-98.310051, dir:"9010 Farm-to-Market Road 1976, Converse", tel:"+12104181440", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "conway": {nombre:"Conway", centro:[35.089193, -92.43984], tz:"America/Chicago", lugares:[
  {n:"Conway's PetSafe Dog Park", cat:"parque", lat:35.109105, lng:-92.424009, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lola Banks Dog Park", cat:"parque", lat:35.062473, lng:-92.435192, dir:"1205 Covington Way, Conway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:35.092616, lng:-92.471149, dir:"2850 Prince Street, Conway", tel:"+1-501-227-2736", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Pet Country", cat:"tienda", lat:35.112434, lng:-92.448665, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.087563, lng:-92.411261, dir:"650 Elsinger Boulevard, Conway", tel:"+1-501-548-6083", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.062692, lng:-92.412223, dir:"1290 South Amity Road, Conway", tel:"+1-501-205-7126", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Champion Chiropractic", cat:"vet", lat:35.09123, lng:-92.468392, dir:"965 Carson Cove, Conway", tel:"+1-501-472-7749", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "coppell": {nombre:"Coppell", centro:[32.95526, -97.01557], tz:"America/Chicago", lugares:[
  {n:"Bacon's Dog Park", cat:"parque", lat:32.935924, lng:-96.983208, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lee Park", cat:"parque", lat:32.903649, lng:-96.991041, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Hound Mound", cat:"parque", lat:33.002394, lng:-97.035504, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Splash and Dash", cat:"peluqueria", lat:32.967078, lng:-96.992731, tel:"+1-972-745-7387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:32.966943, lng:-96.992649, dir:"150 South Denton Tap Road, Coppell", tel:"+1-469-998-3888", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:32.967717, lng:-96.992802, horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.920061, lng:-96.964663, dir:"8100;8150 Walton Boulevard;Market Place Boulevard, Coppell", tel:"+1 972-506-7740", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"All Care Veterinary Hospital", cat:"vet", lat:32.977683, lng:-96.994179, dir:"353 North Denton Tap Road, Coppell", tel:"+1-972-393-7750", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"CityVet", cat:"vet", lat:32.969968, lng:-96.99191, dir:"East Sandy Lake Road, Coppell", tel:"+1 469-830-5200", horas:[7.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Riverwalk", cat:"vet", lat:32.983297, lng:-97.040121, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "copper-canyon": {nombre:"Copper Canyon", centro:[33.095955, -97.096678], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:33.075315, lng:-97.081172, dir:"3194 FM 407, Copper Canyon", tel:"+1 972-317-3268", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "copperas-cove": {nombre:"Copperas Cove", centro:[31.124062, -97.903079], tz:"America/Chicago", lugares:[
  {n:"Soggy Doggies, LLC", cat:"peluqueria", lat:31.110642, lng:-97.910662, dir:"301 West Highway 190, Copperas Cove", tel:"+1-254-547-9663", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "copperfield": {nombre:"Copperfield", centro:[29.892696, -95.651623], tz:"America/Chicago", lugares:[
  {n:"Bill Archer Dog Park", cat:"parque", lat:29.818529, lng:-95.647717, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Upper Horsepen Creek Dog Park", cat:"parque", lat:29.912863, lng:-95.680354, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Groomingdales Spaw", cat:"peluqueria", lat:29.878471, lng:-95.666354, dir:"17115 Farm To Market Rd 529, Copperfield", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.882086, lng:-95.643575, dir:"7050 North Highway 6, Copperfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.877071, lng:-95.646699, dir:"6883 Highway 6 North, Copperfield", tel:"+1 281-345-1215", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Barker Cypress Animal Clinic", cat:"vet", lat:29.919433, lng:-95.685477, dir:"9740 Barker Cypress Road, Copperfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clay Road Animal Clinic", cat:"vet", lat:29.830726, lng:-95.670284, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crossroads Animal Clinic", cat:"vet", lat:29.879526, lng:-95.65902, dir:"16500 Farm To Market Rd 529, Copperfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Easton Commons Animal Hospital", cat:"vet", lat:29.900874, lng:-95.628579, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hearthstone Animal Clinic", cat:"vet", lat:29.879835, lng:-95.627572, dir:"14606 Spencer Road, Copperfield", tel:"+1-281-859-9244", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"KAAWS", cat:"vet", lat:29.878429, lng:-95.67009, dir:"17259 Farm To Market Rd 529, Copperfield", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"VCare Animal Clinic", cat:"vet", lat:29.879247, lng:-95.724657, horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "corinth-texas": {nombre:"Corinth", centro:[33.154009, -97.064732], tz:"America/Chicago", lugares:[
  {n:"The Bark Park", cat:"parque", lat:33.151474, lng:-97.047771, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:33.147612, lng:-97.106775, dir:"4940 Teasley Lane, Corinth", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital On Teasley Lane", cat:"vet", lat:33.171197, lng:-97.111949, dir:"3537 Teasley Lane, Corinth", tel:"+19403826939", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Corinth Animal Hospital", cat:"vet", lat:33.130097, lng:-97.072695, dir:"2399 Swisher Road, Corinth", tel:"+1-940-498-7387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Denton County Animal ER", cat:"vet", lat:33.16857, lng:-97.08154, dir:"4145 South Interstate 35E, Corinth", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dove Creek Animal Hospital", cat:"vet", lat:33.172332, lng:-97.112641, dir:"1200 Bent Oaks Court, Corinth", tel:"+19403873313", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Guardian Pet Hospital and Lodge", cat:"vet", lat:33.177423, lng:-97.07667, dir:"5248 Edwards Road, Corinth", tel:"+1-940-566-5595", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "cornish-oklahoma": {nombre:"Cornish", centro:[34.158983, -97.596971], tz:"America/Chicago", lugares:[
  {n:"Southern Plains Animal Hospital", cat:"vet", lat:34.168082, lng:-97.599755, dir:"30869 US-70, Cornish", tel:"+15806623002", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "corpus-christi": {nombre:"Corpus Christi", centro:[27.76353, -97.403319], tz:"America/Chicago", lugares:[
  {n:"Bill Witt Dog Park", cat:"parque", lat:27.650535, lng:-97.375634, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lady Luck Pet Grooming", cat:"peluqueria", lat:27.798242, lng:-97.394118, dir:"711 North Chaparral Street, Corpus Christi", tel:"+1-361-437-2544", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Gulf Coast Humane Society", cat:"refugio", lat:27.704037, lng:-97.430539, dir:"3118 Cabaniss Parkway, Corpus Christi", tel:"+1-361-225-0845", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Texas State Aquarium Wildlife Rescue Center", cat:"refugio", lat:27.831588, lng:-97.389719, dir:"4230 Rincon Road, Corpus Christi", tel:"+1 361 881 1210", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Oso Creek Boarding & Grooming Center", cat:"refugio", lat:27.662982, lng:-97.398706, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:27.708923, lng:-97.378113, dir:"5214 Blanch, Corpus Christi", tel:"+1 361-993-8882", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:27.686621, lng:-97.382285, dir:"6418 South Staples Street, Corpus Christi", tel:"+1 361-986-9222", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Whole Pets Market", cat:"tienda", lat:27.705532, lng:-97.361921, dir:"1420 Airline Road, Corpus Christi", tel:"+1-361-929-5519", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K9 Conditioning and Rehab Services", cat:"vet", lat:27.817613, lng:-97.39307, dir:"2901 West Surfside Boulevard, Corpus Christi", tel:"+1-361-947-7297", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"People Assisting Animal Control", cat:"vet", lat:27.724549, lng:-97.432961, dir:"5804 Ayers Street, Corpus Christi", tel:"+1 361-248-2009", horas:[8.5, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Southside Animal Hospital", cat:"vet", lat:27.695898, lng:-97.343894, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Oso Creek Animal Hospital and Emergency Center", cat:"vet", lat:27.66262, lng:-97.39898, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "corsicana": {nombre:"Corsicana", centro:[32.093824, -96.464675], tz:"America/Chicago", lugares:[
  {n:"Paw Boss Grooming", cat:"peluqueria", lat:32.093014, lng:-96.464457, dir:"125 West Collin Street, Corsicana", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Clinic", cat:"vet", lat:32.12585, lng:-96.466609, dir:"3000 North Business 45, Corsicana", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "coulter-acres": {nombre:"Coulter Acres", centro:[35.127908, -101.929573], tz:"America/Chicago", lugares:[
  {n:"Amarillo Fetch", cat:"refugio", lat:35.11454, lng:-101.938672, dir:"9020 South Soncy Road, Coulter Acres", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.182178, lng:-101.940199, dir:"2800 South Soncy Road, Coulter Acres", tel:"+1 806-351-1171", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Yellow City Pet Supply", cat:"tienda", lat:35.147338, lng:-101.925608, dir:"7710 Hillside Road, Coulter Acres", tel:"+1-806-418-6890", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Amarillo SPCA", cat:"vet", lat:35.086303, lng:-101.919094, dir:"11901 South Coulter Street, Coulter Acres", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Coulter Animal Hospital", cat:"vet", lat:35.151493, lng:-101.920628, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lone Star Veterinary Services", cat:"vet", lat:35.118105, lng:-101.922018, dir:"7490 West Hollywood Road, Coulter Acres", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Noah's Ark Veterinarian", cat:"vet", lat:35.177771, lng:-101.921957, dir:"7306 Southwest 34th Avenue, Coulter Acres", tel:"+1-806-457-9922", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "coupland": {nombre:"Coupland", centro:[30.459482, -97.390874], tz:"America/Chicago", lugares:[
  {n:"Coupland Veterinary Hospital", cat:"vet", lat:30.460078, lng:-97.392492, dir:"302 Hoxie Street, Coupland", tel:"+1-512-856-0045", horas:[7.0, 11.0], nota:"Dato de OpenStreetMap"}
 ]},
 "covington-louisiana": {nombre:"Covington", centro:[30.475352, -90.101047], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:30.439868, lng:-90.079031, dir:"45 Park Place Drive, Covington", tel:"+1 985-875-0466", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.445954, lng:-90.127124, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Three Rivers Animal Hospital", cat:"vet", lat:30.458046, lng:-90.077822, dir:"19412 Harrison Avenue, Covington", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "coweta": {nombre:"Coweta", centro:[35.952477, -95.650864], tz:"America/Chicago", lugares:[
  {n:"Bubbles and Cuts", cat:"peluqueria", lat:35.950478, lng:-95.650307, dir:"117 South Broadway, Coweta", tel:"+1 918 871 0867", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Downtown Paw Spa", cat:"peluqueria", lat:35.952138, lng:-95.649967, dir:"113 East Chestnut Street, Coweta", tel:"+1-918-230-6590", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Broken Arrow Pet Resort & Spa", cat:"refugio", lat:36.00001, lng:-95.63814, tel:"+1 918 486 3494", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Royal Gauntlet Birds of Prey", cat:"refugio", lat:35.951617, lng:-95.654722, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oak Grove Veterinary Hospital", cat:"vet", lat:35.976489, lng:-95.662567, tel:"+1 918 486 8387", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crandall-texas": {nombre:"Crandall", centro:[32.627911, -96.45582], tz:"America/Chicago", lugares:[
  {n:"Wildcat Ranch Community Dog Park", cat:"parque", lat:32.647274, lng:-96.434414, dir:"Wildcat Trail, Crandall", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "creedmoor-texas": {nombre:"Creedmoor", centro:[30.089937, -97.733892], tz:"America/Chicago", lugares:[
  {n:"Remington Pet Ranch", cat:"refugio", lat:30.086883, lng:-97.780928, dir:"14025 Turnersville Road South, Creedmoor", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "creekside-park": {nombre:"Creekside Park", centro:[30.147904, -95.545053], tz:"America/Chicago", lugares:[
  {n:"Burroughs Dog Park", cat:"parque", lat:30.138216, lng:-95.579181, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSuites", cat:"refugio", lat:30.130924, lng:-95.555218, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cresson-texas": {nombre:"Cresson", centro:[32.530593, -97.617223], tz:"America/Chicago", lugares:[
  {n:"All Creatures Animal Hospital", cat:"vet", lat:32.478178, lng:-97.691478, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cross-timber": {nombre:"Cross Timber", centro:[32.484005, -97.325547], tz:"America/Chicago", lugares:[
  {n:"Burleson Animal Shelter", cat:"refugio", lat:32.505693, lng:-97.345051, dir:"775 Southeast John Jones Drive, Cross Timber", tel:"+1-817-426-9283", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crowley-texas": {nombre:"Crowley", centro:[32.578353, -97.358553], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.604045, lng:-97.410039, dir:"5541 Sierra Springs Lane, Crowley", tel:"+1 817 900 2753", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.564227, lng:-97.354023, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Burleson Animal Emergency Hospital", cat:"vet", lat:32.574545, lng:-97.321751, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crowley Road Animal Hospital", cat:"vet", lat:32.589086, lng:-97.35049, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shaffer Veterinary Services", cat:"vet", lat:32.576786, lng:-97.328155, dir:"449 West Rendon Crowley Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crozier": {nombre:"Crozier", centro:[29.538836, -90.718583], tz:"America/Chicago", lugares:[
  {n:"The Louisiana Coastal Birding Trail - Mandalay Nature Trail", cat:"zoo", lat:29.549182, lng:-90.793022, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cypress-texas": {nombre:"Cypress", centro:[29.969112, -95.697169], tz:"America/Chicago", lugares:[
  {n:"Celebration Park Dog Park", cat:"parque", lat:29.931302, lng:-95.730235, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.967755, lng:-95.693428, dir:"25829 Northwest Freeway, Cypress", tel:"+1 281-256-2760", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:29.96761, lng:-95.693543, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Telge Road Animal Hospital", cat:"vet", lat:29.944731, lng:-95.648162, dir:"11430 Telge Road, Cypress", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "daingerfield": {nombre:"Daingerfield", centro:[33.031803, -94.72199], tz:"America/Chicago", lugares:[
  {n:"Daingerfield Veterinary Hospital Dr, Dennis Seymore DVM", cat:"vet", lat:33.052191, lng:-94.73527, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dallas-texas": {nombre:"Dallas", centro:[32.776272, -96.796856], tz:"America/Chicago", lugares:[
  {n:"Barry Annino Bark Park", cat:"parque", lat:32.782137, lng:-96.78718, dir:"2445 Canton Street, Dallas", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carpenter Park Dog Park", cat:"parque", lat:32.784837, lng:-96.791821, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Main Street Garden Dog Park", cat:"parque", lat:32.780945, lng:-96.794722, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dirty Dog Depot", cat:"peluqueria", lat:32.778739, lng:-96.833763, dir:"601 Singleton Boulevard, Dallas", tel:"+1-469-233-2517", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Urban Paws", cat:"tienda", guarderia:true, lat:32.783676, lng:-96.787992, dir:"2526 Elm Street, Dallas", tel:"+1-214-748-8008", horas:[11.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Backyard", cat:"resto", lat:32.785602, lng:-96.789418, dir:"505 North Good-Latimer Expressway, Dallas", tel:"+1 469-250-0873", horas:[17.0, 24.0], nota:"Dato de OpenStreetMap"},
  {n:"BB & Co Dog Boutique", cat:"tienda", lat:32.777125, lng:-96.789151, dir:"1011 South Pearl Expressway, Dallas", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Green Pet", cat:"tienda", lat:32.747778, lng:-96.828491, dir:"315 North Bishop Avenue, Dallas", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Upper Paw", cat:"tienda", lat:32.783443, lng:-96.782939, dir:"2809 Commerce Street, Dallas", tel:"+1 214-760-9991", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"CityVet", cat:"vet", lat:32.798782, lng:-96.784642, dir:"3900 Ross Avenue, Dallas", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Metro Paws Animal Hospital", cat:"vet", lat:32.768858, lng:-96.838202, dir:"1021 Fort Worth Avenue, Dallas", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"ReadyVet", cat:"vet", lat:32.799178, lng:-96.805537, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dallas Zoo", cat:"zoo", lat:32.738915, lng:-96.815808, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rosine Smith Sammons Butterfly House and Insectarium", cat:"zoo", lat:32.775598, lng:-96.760481, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dalworthington-gardens": {nombre:"Dalworthington Gardens", centro:[32.70291, -97.155289], tz:"America/Chicago", lugares:[
  {n:"Tails 'N Trails Dog Park", cat:"parque", lat:32.65101, lng:-97.094903, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSuites Arlington", cat:"peluqueria", lat:32.656401, lng:-97.133018, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arlington Animal Shelter", cat:"refugio", lat:32.65222, lng:-97.094986, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.68385, lng:-97.132267, dir:"3801 South Cooper Street, Dalworthington Gardens", tel:"+1-817-583-8502", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.681728, lng:-97.110946, dir:"203 East Interstate 20 Highway, Dalworthington Gardens", tel:"+1 817-466-1437", horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.682745, lng:-97.194254, dir:"4001 West Green Oaks Boulevard, Dalworthington Gardens", tel:"+1 817-478-2741", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Gulley Animal Hospital", cat:"vet", lat:32.64359, lng:-97.134304, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Cooper Animal Hospital", cat:"vet", lat:32.638607, lng:-97.135245, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Corner Vet", cat:"vet", lat:32.66132, lng:-97.134898, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "damon": {nombre:"Damon", centro:[29.290523, -95.734671], tz:"America/Chicago", lugares:[
  {n:"Veterinarian", cat:"vet", lat:29.355218, lng:-95.663903, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dardanelle": {nombre:"Dardanelle", centro:[35.223141, -93.157953], tz:"America/Chicago", lugares:[
  {n:"Davis Vet Clinic", cat:"vet", lat:35.226242, lng:-93.167028, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Merritt Animal Clinic", cat:"vet", lat:35.202674, lng:-93.155346, tel:"+1 479-229-2600", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "davis-oklahoma": {nombre:"Davis", centro:[34.50348, -97.118892], tz:"America/Chicago", lugares:[
  {n:"Davis Animal Shelter", cat:"refugio", lat:34.495188, lng:-97.118673, tel:"+1-580-369-3333", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "de-soto-texas": {nombre:"De Soto", centro:[32.589783, -96.857018], tz:"America/Chicago", lugares:[
  {n:"Karla's Grooming", cat:"peluqueria", lat:32.592577, lng:-96.823127, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggie Day Care", cat:"refugio", lat:32.592508, lng:-96.823126, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gabby's Sanctuary Ark", cat:"refugio", lat:32.626119, lng:-96.873126, dir:"1916 North Westmoreland Road, De Soto", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Puppy Dreams", cat:"tienda", lat:32.593584, lng:-96.821244, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "decatur-texas": {nombre:"Decatur", centro:[33.234283, -97.586139], tz:"America/Chicago", lugares:[
  {n:"Pet Health Center", cat:"vet", lat:33.25769, lng:-97.611136, dir:"1879 North US Highway 287, Decatur", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "deer-park-texas": {nombre:"Deer Park", centro:[29.705228, -95.12382], tz:"America/Chicago", lugares:[
  {n:"Klippin Kritters", cat:"peluqueria", lat:29.664676, lng:-95.111289, dir:"8349 Spencer Highway, Deer Park", horas:[9.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Infinite Aquatics", cat:"tienda", lat:29.665317, lng:-95.125197, dir:"7407 Spencer Highway, Deer Park", tel:"+1-281-884-8431", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "del-city": {nombre:"Del City", centro:[35.442007, -97.440871], tz:"America/Chicago", lugares:[
  {n:"Oklahoma City Animal Shelter", cat:"refugio", lat:35.436193, lng:-97.461354, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"By His Hands Mini Farm", cat:"zoo", lat:35.4816, lng:-97.445577, tel:"+1 405-201-1962", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dell-city": {nombre:"Dell City", centro:[31.93895, -105.20114], tz:"America/Chicago", lugares:[
  {n:"Doggie do overs", cat:"vet", lat:31.934818, lng:-105.203596, dir:"308 Dodson Street, Dell City", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "denham-springs": {nombre:"Denham Springs", centro:[30.486856, -90.956213], tz:"America/Chicago", lugares:[
  {n:"PARDS Dog Park", cat:"parque", lat:30.442467, lng:-90.961404, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.444671, lng:-91.023259, dir:"1653 Millerville Road, Denham Springs", tel:"+1 225-275-4858", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.465792, lng:-90.920746, dir:"10129 Crossing Way, Denham Springs", tel:"+1-225-271-2295", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.458182, lng:-90.954748, dir:"2358 South Range Avenue, Denham Springs", tel:"+1-225-665-0507", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Denham Springs Animal Hospital", cat:"vet", lat:30.483942, lng:-90.928435, dir:"8073 Florida Boulevard, Denham Springs", tel:"+1-225-665-8271", horas:[7.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Dodge City Veterinary Hospital", cat:"vet", lat:30.485218, lng:-90.942912, tel:"+1-225-664-6441", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sherwood Forest Animal Hospital", cat:"vet", lat:30.458302, lng:-91.056446, dir:"11472 Florida Boulevard, Denham Springs", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "denison-texas": {nombre:"Denison", centro:[33.755659, -96.536658], tz:"America/Chicago", lugares:[
  {n:"Denison Animal Welfare Group", cat:"vet", lat:33.723195, lng:-96.553363, dir:"3307 South Eisenhower Parkway, Denison", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "denton-texas": {nombre:"Denton", centro:[33.215038, -97.133043], tz:"America/Chicago", lugares:[
  {n:"16Ten East Dog Park", cat:"parque", lat:33.213593, lng:-97.109452, dir:"1610 East McKinney Street, Denton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Longhorn Cove Dog Park", cat:"parque", lat:33.210774, lng:-97.097117, dir:"3317 Wagon Trail Drive, Denton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Lakes Dog Park", cat:"parque", lat:33.245996, lng:-97.145931, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Lakes Dog Park - Large Dogs", cat:"parque", lat:33.245269, lng:-97.145805, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Lakes Dog Park - Small Dogs", cat:"parque", lat:33.245846, lng:-97.145724, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Beau's Bath House & Doggie Spa", cat:"peluqueria", lat:33.190839, lng:-97.096229, dir:"1800 Brinker Road, Denton", tel:"+19403829274", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Linda McNatt Animal Care & Adoption Center", cat:"refugio", lat:33.2475, lng:-97.14765, dir:"3717 North Elm Street, Denton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fish n' Chirps Pet Center", cat:"tienda", lat:33.231881, lng:-97.14253, dir:"914 West University Drive, Denton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Groggy Dog", cat:"tienda", lat:33.231848, lng:-97.177207, dir:"4017 Mesa Drive, Denton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.232047, lng:-97.166234, dir:"2640 West University Drive, Denton", tel:"+1 940-382-7263", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Denton Animal Hospital", cat:"vet", lat:33.229159, lng:-97.150485, dir:"1725 West University Drive, Denton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southridge Animal Hospital", cat:"vet", lat:33.183095, lng:-97.105734, dir:"2436 South Interstate 35E, Denton", tel:"+19408910611", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Town and Country Animal Hospital", cat:"vet", lat:33.254772, lng:-97.112347, dir:"1220 Poinsettia Boulevard, Denton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westgate Veterinary Hospital", cat:"vet", lat:33.231343, lng:-97.177016, dir:"4501 Mesa Drive, Denton", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "destrehan": {nombre:"Destrehan", centro:[29.967266, -90.377073], tz:"America/Chicago", lugares:[
  {n:"Bayou Pets", cat:"tienda", lat:29.986682, lng:-90.365645, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "devine": {nombre:"Devine", centro:[29.139963, -98.905306], tz:"America/Chicago", lugares:[
  {n:"Devine Veterinary Clinic", cat:"vet", lat:29.153195, lng:-98.922592, dir:"1410 State Highway 173 North, Devine", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dewey": {nombre:"Dewey", centro:[36.795919, -95.935539], tz:"America/Chicago", lugares:[
  {n:"Bartlesville Animal Hospital", cat:"vet", lat:36.775422, lng:-95.936018, dir:"1055 Northeast Washington Boulevard, Dewey", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dickinson-texas": {nombre:"Dickinson", centro:[29.460788, -95.051317], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:29.46414, lng:-95.086825, dir:"1921 South Gulf Freeway, Dickinson", tel:"+1 281-534-4590", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.467305, lng:-95.094677, dir:"2895 South Gulf Freeway, Dickinson", tel:"+1 281-337-9030", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Dickinson Animal Hospital", cat:"vet", lat:29.438746, lng:-95.100884, dir:"1100 FM 517 West, Dickinson", tel:"+1 281-337-4535", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Vetco Total Care", cat:"vet", lat:29.467405, lng:-95.094782, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "double-oak": {nombre:"Double Oak", centro:[33.065122, -97.110567], tz:"America/Chicago", lugares:[
  {n:"Flower Mound Animal Adoption Center", cat:"refugio", lat:33.072795, lng:-97.090622, dir:"3950 Justin Road, Double Oak", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.068596, lng:-97.080393, dir:"6060 Long Prairie Rd, Double Oak", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "dripping-springs": {nombre:"Dripping Springs", centro:[30.190207, -98.086678], tz:"America/Chicago", lugares:[
  {n:"Contemporary Canine Dog Grooming", cat:"peluqueria", lat:30.19405, lng:-98.100447, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Hound pet salon", cat:"peluqueria", lat:30.195837, lng:-98.097637, dir:"Sportsplex Drive, Dripping Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Good Dog in the Making", cat:"tienda", lat:30.214488, lng:-98.117893, dir:"4955 Bell Springs Road, Dripping Springs", tel:"+1 512-829-4175", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Whole Pets Market", cat:"tienda", lat:30.193189, lng:-98.10039, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:30.192818, lng:-98.083717, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Founders Animal Hospital", cat:"vet", lat:30.210758, lng:-98.088739, dir:"161 Cortaro Drive, Dripping Springs", tel:"+1 512-881-9987", horas:[8.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Sunset Canyon Veterinary Clinic", cat:"vet", lat:30.195692, lng:-98.023762, dir:"3710 East US Highway 290, Dripping Springs", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dublin-texas": {nombre:"Dublin", centro:[32.086135, -98.342233], tz:"America/Chicago", lugares:[
  {n:"Green's Creek Veterinary Hospital", cat:"vet", lat:32.152198, lng:-98.294231, dir:"11860 South US Highway 377, Dublin", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dumas": {nombre:"Dumas", centro:[33.88753, -91.492013], tz:"America/Chicago", lugares:[
  {n:"Town & Country Veterinary Hospital", cat:"vet", lat:33.876233, lng:-91.481578, dir:"711 Highway 65 South, Dumas", tel:"+1-870-382-5866", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dumas-texas": {nombre:"Dumas", centro:[35.861478, -101.971373], tz:"America/Chicago", lugares:[
  {n:"City of Dumas Animal Shelter", cat:"refugio", lat:35.843147, lng:-101.964347, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Critter Country", cat:"refugio", lat:35.849705, lng:-101.986567, dir:"6889 FM 722, Dumas", tel:"+1 806-935-5114;+1 806-930-6128", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "duncan-oklahoma": {nombre:"Duncan", centro:[34.502303, -97.957813], tz:"America/Chicago", lugares:[
  {n:"VetIQ", cat:"vet", lat:34.528127, lng:-97.970103, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "duncanville": {nombre:"Duncanville", centro:[32.6518, -96.908337], tz:"America/Chicago", lugares:[
  {n:"Rudy's Pawsome Kingdom", cat:"peluqueria", lat:32.640713, lng:-96.908698, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Village", cat:"tienda", lat:32.652774, lng:-96.908034, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.649266, lng:-96.860602, dir:"2525 West Wheatland Road, Duncanville", tel:"+1 972-656-2352", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Professional Grooming Corner", cat:"tienda", lat:32.670375, lng:-96.908111, dir:"1214 Duncanville Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greenbriar Veterinary Hospital", cat:"vet", lat:32.631013, lng:-96.943754, dir:"9647 Clark Road, Duncanville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Medical Center of Duncanville", cat:"vet", lat:32.651374, lng:-96.924651, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Animal Care Center", cat:"vet", lat:32.647391, lng:-96.908778, dir:"511 South Main Street, Duncanville", tel:"+1-972-298-2898", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "durant-oklahoma": {nombre:"Durant", centro:[33.991976, -96.377676], tz:"America/Chicago", lugares:[
  {n:"PetSense", cat:"tienda", lat:33.998184, lng:-96.408952, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "east-bernard": {nombre:"East Bernard", centro:[29.5273, -96.064735], tz:"America/Chicago", lugares:[
  {n:"East Bernard Animal Hospital", cat:"vet", lat:29.53061, lng:-96.072922, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eastland": {nombre:"Eastland", centro:[32.40063, -98.819448], tz:"America/Chicago", lugares:[
  {n:"Dog Wash", cat:"peluqueria", lat:32.401588, lng:-98.826085, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eastland County Vet Clinic", cat:"vet", lat:32.399848, lng:-98.797457, dir:"200 Pogue Avenue, Eastland", tel:"+1-254-629-8766", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "edgecliff-village": {nombre:"Edgecliff Village", centro:[32.657634, -97.342794], tz:"America/Chicago", lugares:[
  {n:"Mundo de Mascotas", cat:"tienda", lat:32.689115, lng:-97.332007, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.684461, lng:-97.396678, dir:"4800 Southwest Loop 820, Edgecliff Village", tel:"+1 817-731-4353", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital Southwest", cat:"vet", lat:32.648875, lng:-97.39631, dir:"6716 South Hulen Street, Edgecliff Village", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southside Veterinary Clinic", cat:"vet", lat:32.704009, lng:-97.349587, dir:"3201 Cleburne Road, Edgecliff Village", tel:"+18179236719", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Summer Creek Animal Clinic", cat:"vet", lat:32.632556, lng:-97.406762, dir:"5228 Sycamore School Road, Edgecliff Village", tel:"+1-817-523-1139", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "edinburg-texas": {nombre:"Edinburg", centro:[26.301398, -98.16245], tz:"America/Chicago", lugares:[
  {n:"Palm Valley Animal Society", cat:"refugio", lat:26.326028, lng:-98.147925, dir:"2451 North Expressway 281, Edinburg", tel:"+1 956 720 4563", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:26.272312, lng:-98.215762, dir:"7600 North 10th Street, Edinburg", tel:"+1 956-686-9037", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "edmond": {nombre:"Edmond", centro:[35.657137, -97.464904], tz:"America/Chicago", lugares:[
  {n:"Edmond Dog Park", cat:"parque", lat:35.62312, lng:-97.475847, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"OnCue Dog Park", cat:"parque", lat:35.726216, lng:-97.413971, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"peluqueria", lat:35.628681, lng:-97.494398, dir:"801 Centennial Boulevard, Edmond", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Delmar Smith Kennels", cat:"refugio", lat:35.609521, lng:-97.453229, dir:"3509 East Memorial Road, Edmond", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:35.627524, lng:-97.485421, dir:"3409 South Broadway, Edmond", tel:"+1-405-345-7268", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Edmond Animal Shelter", cat:"refugio", lat:35.678585, lng:-97.415011, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aquariums", cat:"tienda", lat:35.636454, lng:-97.495355, dir:"1702 South Kelly Avenue, Edmond", tel:"+14053481070", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:35.681657, lng:-97.499833, dir:"West Covell Road, Edmond", horas:[9.0, 14.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.633137, lng:-97.485542, dir:"1921 South Broadway, Edmond", tel:"+1-405-330-4079", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.650831, lng:-97.457941, dir:"324 South Bryant Avenue, Edmond", tel:"+1-405-359-5671", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Okoboji Veterinary Hospital", cat:"vet", lat:35.667011, lng:-97.530928, dir:"1020 Northwest 192nd Street, Edmond", tel:"+1-405-531-5905", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Medical Center of Edmond", cat:"vet", lat:35.63856, lng:-97.497486, dir:"1001 West 15th Street, Edmond", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "el-dorado": {nombre:"El Dorado", centro:[33.211509, -92.665014], tz:"America/Chicago", lugares:[
  {n:"Union Kennel and Farm Supply", cat:"tienda", lat:33.208076, lng:-92.676675, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Goodwin Animal Clinic", cat:"vet", lat:33.207251, lng:-92.68447, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "el-lago": {nombre:"El Lago", centro:[29.571041, -95.044081], tz:"America/Chicago", lugares:[
  {n:"Seabrook Animal Shelter", cat:"refugio", lat:29.578868, lng:-95.030078, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "el-paso-texas": {nombre:"El Paso", centro:[31.7601, -106.487048], tz:"America/Chicago", lugares:[
  {n:"Fort Bliss Family Homes Bark Park", cat:"parque", lat:31.822654, lng:-106.43157, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"MUTTZ El Paso", cat:"parque", lat:31.810465, lng:-106.529039, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paul's Grooming Shop", cat:"peluqueria", lat:31.765144, lng:-106.361875, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet's Barn", cat:"tienda", lat:31.892464, lng:-106.413685, dir:"9807 Dyer Street, El Paso", tel:"+1-915-751-3553", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:31.769257, lng:-106.368111, dir:"8889 Gateway Boulevard West, El Paso", tel:"+1 915-255-4233", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:31.821772, lng:-106.541629, dir:"655 Sunland Park Drive, El Paso", tel:"+1 915-587-7898", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:31.783796, lng:-106.415958, dir:"5994 Montana Avenue, El Paso", tel:"+1 915-771-7400", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog, Cat, and Bird Hospital", cat:"vet", lat:31.782, lng:-106.50654, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East El Paso Animal Hospital", cat:"vet", lat:31.795078, lng:-106.348009, dir:"3370 Wedgewood Drive, El Paso", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"El Paso Zoo", cat:"zoo", lat:31.769048, lng:-106.443622, dir:"4001 East Paisano Drive, El Paso", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elbow": {nombre:"Elbow", centro:[32.160401, -101.512068], tz:"America/Chicago", lugares:[
  {n:"Chapter 2 Ranch & Horse Motel", cat:"refugio", lat:32.190775, lng:-101.485067, dir:"4917 Wasson Road, Elbow", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "elgin-texas": {nombre:"Elgin", centro:[30.349508, -97.371118], tz:"America/Chicago", lugares:[
  {n:"Elgin Veterinary Hospital", cat:"vet", lat:30.341741, lng:-97.378351, dir:"600 West US Highway 290, Elgin", tel:"+1 512-285-3395", horas:[8.5, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:30.353267, lng:-97.398487, dir:"1399 West US Highway 290, Elgin", tel:"+1 512-285-3375", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "elkins": {nombre:"Elkins", centro:[36.001468, -94.008255], tz:"America/Chicago", lugares:[
  {n:"Ernie Boudreaux's Doggie Dude Ranch", cat:"refugio", lat:35.997287, lng:-94.017278, dir:"290 Oneal Lane, Elkins", tel:"+1 479-283-6709", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "elm-mott": {nombre:"Elm Mott", centro:[31.671522, -97.100055], tz:"America/Chicago", lugares:[
  {n:"(12) Animal Pens. Petting Zoo Sheep Shearing", cat:"zoo", lat:31.665874, lng:-97.154479, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"(14) Animal Pens. Petting Zoo Sheep Shearing", cat:"zoo", lat:31.665669, lng:-97.154292, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"(16) Horse-Farming Demonstration", cat:"zoo", lat:31.665711, lng:-97.154015, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"(19) Sheepdog & Horse-Training", cat:"zoo", lat:31.666319, lng:-97.154246, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hayrides and Farm experience", cat:"zoo", lat:31.66712, lng:-97.155304, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petting Zoo", cat:"zoo", lat:31.665855, lng:-97.154465, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elm-springs": {nombre:"Elm Springs", centro:[36.206183, -94.234366], tz:"America/Chicago", lugares:[
  {n:"Large Dogs Park", cat:"parque", lat:36.216624, lng:-94.213691, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dogs Park", cat:"parque", lat:36.216283, lng:-94.213771, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elmwood-louisiana": {nombre:"Elmwood", centro:[29.956593, -90.189797], tz:"America/Chicago", lugares:[
  {n:"Camp Bow Wow", cat:"refugio", lat:29.974328, lng:-90.209072, dir:"2401 Hickory Avenue, Elmwood", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pampered Pets", cat:"refugio", lat:29.977449, lng:-90.201539, dir:"6213 Airline Drive, Elmwood", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jefferson Feed", cat:"tienda", lat:29.959949, lng:-90.172537, dir:"4421 Jefferson Highway, Elmwood", tel:"+1-504-733-8572", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.958622, lng:-90.185083, dir:"1000 South Clearview Parkway, Elmwood", tel:"+1 504-733-2016", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Ark Animal Hospital", cat:"vet", lat:29.960833, lng:-90.17045, dir:"4211 Jefferson Highway, Elmwood", tel:"+1-504-834-0906", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:29.976507, lng:-90.18768, dir:"5105 Airline Drive, Elmwood", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "emory": {nombre:"Emory", centro:[32.874566, -95.765518], tz:"America/Chicago", lugares:[
  {n:"Potts Puppy Love Grooming", cat:"peluqueria", lat:32.877379, lng:-95.771591, dir:"120 Tawakoni Drive, Emory", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "enid": {nombre:"Enid", centro:[36.396762, -97.879134], tz:"America/Chicago", lugares:[
  {n:"The Cat Resort", cat:"refugio", lat:36.393895, lng:-97.9267, horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.391923, lng:-97.924497, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Cat Clinic", cat:"vet", lat:36.39423, lng:-97.927224, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "euless": {nombre:"Euless", centro:[32.837073, -97.081954], tz:"America/Chicago", lugares:[
  {n:"City of Irving Dog Park", cat:"parque", lat:32.863153, lng:-97.017993, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dogs", cat:"parque", lat:32.862761, lng:-97.018292, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dogs", cat:"parque", lat:32.862707, lng:-97.017718, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Villages of Bear Creek Park - Off-leash Dog Area", cat:"parque", lat:32.864947, lng:-97.069214, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Autumn's Pampered Paws", cat:"peluqueria", lat:32.867727, lng:-97.069104, dir:"801 East Mid Cities Boulevard, Euless", tel:"+1-281-814-5352", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scenthound", cat:"peluqueria", lat:32.876942, lng:-97.097975, dir:"2720 State Hwy 121, Euless", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City of Irving Animal Shelter", cat:"refugio", lat:32.862049, lng:-97.018424, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.876626, lng:-97.096318, dir:"2800 State Hwy 121, Euless", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Airport Freeway Animal Emergency Hospital", cat:"vet", lat:32.836737, lng:-97.095802, dir:"833 Airport Freeway, Euless", tel:"+1-817-571-2088", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"CityVet", cat:"vet", lat:32.865604, lng:-97.104836, dir:"3748 Cheek Sparger Road, Euless", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Advanced Care Animal Hospital", cat:"vet", lat:32.853935, lng:-97.107966, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eureka-springs": {nombre:"Eureka Springs", centro:[36.40008, -93.739242], tz:"America/Chicago", lugares:[
  {n:"Dog Park", cat:"parque", lat:36.411123, lng:-93.740456, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bowsir", cat:"tienda", lat:36.399349, lng:-93.747363, dir:"208 West Van Buren, Eureka Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Turpentine Creek Wildlife Refuge", cat:"zoo", lat:36.311317, lng:-93.754172, dir:"239 Turpentine Creek Lane, Eureka Springs", tel:"+1 479-253-5841", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fair-oaks-ranch": {nombre:"Fair Oaks Ranch", centro:[29.745777, -98.643356], tz:"America/Chicago", lugares:[
  {n:"Primarily Primates", cat:"refugio", lat:29.688139, lng:-98.68022, dir:"26099 Dull Knife Trail, Fair Oaks Ranch", tel:"+1-830-755-4616", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Leon Springs Animal Hospital", cat:"vet", lat:29.665112, lng:-98.635634, dir:"24125 Boerne Stage Road, Fair Oaks Ranch", tel:"+1-210-698-1800", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fairfield-texas-2": {nombre:"Fairfield", centro:[30.005394, -95.751488], tz:"America/Chicago", lugares:[
  {n:"Happy Tails Dog Park", cat:"parque", lat:29.951276, lng:-95.784133, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fairmont-oklahoma": {nombre:"Fairmont", centro:[36.355337, -97.706432], tz:"America/Chicago", lugares:[
  {n:"Steinert Vetinary Clinic", cat:"vet", lat:36.434431, lng:-97.727481, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fairview-texas": {nombre:"Fairview", centro:[33.157832, -96.63183], tz:"America/Chicago", lugares:[
  {n:"Legacy Grooming", cat:"peluqueria", lat:33.158791, lng:-96.683581, dir:"5261 McKinney Ranch Pkwy, Fairview", tel:"+1-469-631-0929", horas:[7.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Eldorado Animal Hospital", cat:"vet", lat:33.168824, lng:-96.665951, dir:"3170 Eldorado Parkway, Fairview", tel:"+19725291367", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Legacy Humane Vet Clinic", cat:"vet", lat:33.149662, lng:-96.682923, dir:"5121 Collin McKinney Parkway, Fairview", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"McKinney Animal Hospital", cat:"vet", lat:33.173682, lng:-96.679011, dir:"4630 Eldorado Parkway, Fairview", tel:"+19725480749", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Perky Paws Pet Hospital", cat:"vet", lat:33.172782, lng:-96.698812, dir:"3100 Ridge Road, Fairview", tel:"+1 214-592-9939", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Stacy Road Pet Hospital", cat:"vet", lat:33.130182, lng:-96.642011, dir:"451 East Stacy Road, Fairview", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "falfurrias": {nombre:"Falfurrias", centro:[27.224733, -98.14624], tz:"America/Chicago", lugares:[
  {n:"Las Palmas Veterinary Hospital", cat:"vet", lat:27.24365, lng:-98.139293, dir:"1239 North US Highway 281, Falfurrias", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fannett": {nombre:"Fannett", centro:[29.92604, -94.250446], tz:"America/Chicago", lugares:[
  {n:"Gator Country Wildlife Adventure Park", cat:"zoo", lat:29.929639, lng:-94.274211, dir:"21159 Farm to Market Road 365, Fannett", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "farmers-branch": {nombre:"Farmers Branch", centro:[32.926567, -96.896092], tz:"America/Chicago", lugares:[
  {n:"Barney Wood Bark Park", cat:"parque", lat:32.938425, lng:-96.879104, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Bark", cat:"parque", lat:32.901202, lng:-96.936403, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jossi Lu House of Grooming", cat:"peluqueria", lat:32.924398, lng:-96.893574, dir:"2555 Valley View Lane, Farmers Branch", tel:"+1 972 241 1106", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Farmers Branch Animal Adoption Center", cat:"refugio", lat:32.925133, lng:-96.852759, dir:"3727 Valley View Lane, Farmers Branch", tel:"+1 972-919-8770", horas:[11.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Playful Pet Resort", cat:"refugio", lat:32.918436, lng:-96.926678, dir:"2460 Lacy Lane, Farmers Branch", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.910047, lng:-96.855472, dir:"3717 Forest Lane, Farmers Branch", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.913, lng:-96.959436, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet - Irving", cat:"vet", lat:32.896618, lng:-96.958095, dir:"6440 North MacArthur Boulevard, Farmers Branch", tel:"+14699429600", horas:[15.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"Valley View Pet Health Center", cat:"vet", lat:32.924343, lng:-96.893468, dir:"2561 Valley View Lane, Farmers Branch", tel:"+1 972-247-2242", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "farmersville-texas": {nombre:"Farmersville", centro:[33.163216, -96.360355], tz:"America/Chicago", lugares:[
  {n:"All Heart Veterinary Center", cat:"vet", lat:33.174022, lng:-96.368222, dir:"1022 North State Highway 78, Farmersville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Farmersville Veterinary Clinic", cat:"vet", lat:33.171852, lng:-96.367724, dir:"610 North State Highway 78, Farmersville", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "farmington": {nombre:"Farmington", centro:[36.042025, -94.247152], tz:"America/Chicago", lugares:[
  {n:"The Canine Connection", cat:"refugio", lat:36.079957, lng:-94.231717, tel:"+1 479 444 0300", horas:[7.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Waggers", cat:"refugio", lat:36.08009, lng:-94.230997, tel:"+1 501 428 6005", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wedington Animal Hospital", cat:"vet", lat:36.078306, lng:-94.222903, dir:"4363 West Wedington Drive, Farmington", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fate": {nombre:"Fate", centro:[32.941441, -96.381381], tz:"America/Chicago", lugares:[
  {n:"K9 Cove Dog Park", cat:"parque", lat:32.93215, lng:-96.333422, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K9 Grooming", cat:"peluqueria", lat:32.906303, lng:-96.408764, dir:"2754 State Highway 276, Fate", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Fate", cat:"refugio", lat:32.950705, lng:-96.381262, dir:"1001 North William E Crawford Avenue, Fate", tel:"+1 972-722-0066", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.930093, lng:-96.381469, dir:"5000 East Interstate 30, Fate", tel:"+1-469-338-5280", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Timbercreek Animal Hospital", cat:"vet", lat:32.906306, lng:-96.408966, dir:"2754 State Highway 276, Fate", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fayetteville-arkansas": {nombre:"Fayetteville", centro:[36.062584, -94.157433], tz:"America/Chicago", lugares:[
  {n:"Iams Dog Park", cat:"parque", lat:36.084028, lng:-94.211586, dir:"1595 North Dartmouth Ave, Fayetteville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clean Canine Grooming", cat:"peluqueria", lat:36.040198, lng:-94.166582, dir:"2235 South School Avenue, Fayetteville", tel:"+1 479 502 6776", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rover Oaks", cat:"peluqueria", lat:36.093672, lng:-94.104255, dir:"3986 East Mission Boulevard, Fayetteville", tel:"+1 479 444 0015", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fayetteville Animal Services", cat:"refugio", lat:36.046199, lng:-94.137021, dir:"1640 South Armstrong Avenue, Fayetteville", tel:"+1 479 444 3456", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Halbert's Pet Supply", cat:"tienda", lat:36.052701, lng:-94.197775, dir:"2675 West Martin Luther King Junior Boulevard, Fayetteville", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Noah's Pet And Wild Birds", cat:"tienda", lat:36.088425, lng:-94.120992, dir:"2000 North Crossover Road, Fayetteville", tel:"+1 479 582 5512", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Advanced Veterinary Surgery & Rehabilitation Center", cat:"vet", lat:36.093084, lng:-94.158732, dir:"71 West Colt Square Drive, Fayetteville", tel:"+1 479 966 4325", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Gulley Park Pets Clinic", cat:"vet", lat:36.095031, lng:-94.138046, dir:"2406 North Old Wire Road, Fayetteville", tel:"+1 479 966 4929", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Mount Comfort Veterinary Care", cat:"vet", lat:36.093099, lng:-94.209272, dir:"3488 West Mount Comfort Road, Fayetteville", tel:"+1 479 275 3530", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Stanton Animal Hospital", cat:"vet", lat:36.086709, lng:-94.155909, dir:"1817 North Green Acres Road, Fayetteville", tel:"+1 479 443 4544", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "flatonia": {nombre:"Flatonia", centro:[29.686805, -97.107104], tz:"America/Chicago", lugares:[
  {n:"Flatonia Veterinary Clinic", cat:"vet", lat:29.685757, lng:-97.091606, dir:"1334 E US Highway 90, Flatonia", tel:"+1-361-865-3541", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "floresville": {nombre:"Floresville", centro:[29.133578, -98.156119], tz:"America/Chicago", lugares:[
  {n:"Rosies City Dog Park", cat:"parque", lat:29.139145, lng:-98.156344, dir:"A Street, Floresville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pampered Pooch Parlor and Pet Resort", cat:"refugio", lat:29.135544, lng:-98.147593, dir:"1705 10th Street, Floresville", tel:"+1-830-393-6592", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Wilson County No Kill Animal Shelter", cat:"refugio", lat:29.164962, lng:-98.175428, dir:"1059 County Road 301, Floresville", tel:"+1-830-333-3888", horas:[10.0, 14.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.163017, lng:-98.177777, dir:"309 10th Street, Floresville", tel:"+1-830-321-6045", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Deason Animal Hospital", cat:"vet", lat:29.137902, lng:-98.150114, dir:"1712 D Street, Floresville", tel:"+1-830-393-4567", horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "flower-mound": {nombre:"Flower Mound", centro:[33.028385, -97.08672], tz:"America/Chicago", lugares:[
  {n:"Lakeside Village Dog Park", cat:"parque", lat:32.988547, lng:-97.066391, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blissful Bark Dog Wash", cat:"peluqueria", lat:33.034451, lng:-97.071182, tel:"+1-972-539-6047", horas:[12.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Earthwise Pet Supply", cat:"peluqueria", lat:33.033743, lng:-97.064738, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Love 1Your Pet", cat:"peluqueria", lat:33.010876, lng:-97.069854, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Grooming Place", cat:"peluqueria", lat:33.031474, lng:-97.071582, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"CityVet", cat:"tienda", lat:33.010593, lng:-97.047666, dir:"1221-2 Flower Mound Road", tel:"+1 972-355-2124", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Dallas Parrots", cat:"tienda", lat:33.020655, lng:-97.070118, tel:"+1-469-706-0972", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:33.036861, lng:-97.068242, horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Petbar", cat:"tienda", lat:33.047867, lng:-97.068767, dir:"4610 Long Prairie Rd, Flower Mound", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.034832, lng:-97.071304, tel:"+1 214-285-1974", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Flower Mound Veterinary Emergency & Specialty Center", cat:"vet", lat:33.038857, lng:-97.07015, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lone Star Veterinary Clinic", cat:"vet", lat:33.010713, lng:-97.036263, dir:"1900 Garden Ridge Boulevard, Flower Mound", tel:"+1 972-691-5663", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petfolk Veterinary & Urgent Care - Flower Mound", cat:"vet", lat:33.036127, lng:-97.068554, dir:"4453 Cross Timbers Road, Flower Mound", tel:"+1 817-435-9186", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:33.027371, lng:-97.071423, dir:"3041 Long Prairie Road, Flower Mound", tel:"+1 972-539-1800", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Emergency Group", cat:"vet", lat:33.034304, lng:-97.070092, dir:"3614 Long Prairie Road, Flower Mound", tel:"+1 469-942-6025", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "floydada": {nombre:"Floydada", centro:[33.983972, -101.33446], tz:"America/Chicago", lugares:[
  {n:"Floydada Animal Shelter", cat:"refugio", lat:33.987354, lng:-101.333782, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "folsom-louisiana": {nombre:"Folsom", centro:[30.630189, -90.187305], tz:"America/Chicago", lugares:[
  {n:"Global Wildlife Center", cat:"zoo", lat:30.628415, lng:-90.285738, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "forney": {nombre:"Forney", centro:[32.747893, -96.471929], tz:"America/Chicago", lugares:[
  {n:"Forney Pet Spa", cat:"peluqueria", lat:32.741842, lng:-96.433267, dir:"10308 West US Highway 80, Forney", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center of Forney", cat:"vet", lat:32.757968, lng:-96.436168, dir:"13799 FM 548, Forney", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stone Creek Veterinary Hospital", cat:"vet", lat:32.728466, lng:-96.458616, dir:"1300 College Avenue, Forney", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:32.75334, lng:-96.462423, dir:"202 East US Highway 80, Forney", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-gibson": {nombre:"Fort Gibson", centro:[35.797546, -95.250341], tz:"America/Chicago", lugares:[
  {n:"Dandy Dog Grooming Shop", cat:"peluqueria", lat:35.797136, lng:-95.250749, dir:"113 West Poplar Street, Fort Gibson", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-smith": {nombre:"Fort Smith", centro:[35.388034, -94.426501], tz:"America/Chicago", lugares:[
  {n:"Shaggy Chic", cat:"peluqueria", lat:35.381053, lng:-94.402969, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.364615, lng:-94.378768, dir:"4900 Rogers Avenue, Fort Smith", tel:"+1 479-221-9462", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Pet Clinic", cat:"vet", lat:35.367576, lng:-94.383469, dir:"4400 Rogers Avenue, Fort Smith", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Labahn Veterinary Hospital", cat:"vet", lat:35.403588, lng:-94.386016, dir:"4100 Kelley Highway, Fort Smith", tel:"+1 479 782 1234", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-worth": {nombre:"Fort Worth", centro:[32.753177, -97.332746], tz:"America/Chicago", lugares:[
  {n:"Calhound Dog Park", cat:"parque", lat:32.738774, lng:-97.322868, dir:"419 East Annie Street, Fort Worth", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Resident Dog Park", cat:"parque", lat:32.768561, lng:-97.327628, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Resident Dog Park", cat:"parque", lat:32.765625, lng:-97.326313, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Fort Worth Aquarium", cat:"tienda", lat:32.721981, lng:-97.343329, dir:"2003 8th Avenue, Fort Worth", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.754033, lng:-97.351656, dir:"569 Carroll Street, Fort Worth", tel:"+1 817-820-0630", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Arlington Heights Animal Hospital", cat:"vet", lat:32.742478, lng:-97.370372, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mellina Animal Hospital", cat:"vet", lat:32.75235, lng:-97.359653, dir:"2928 West 6th Street, Fort Worth", horas:[7.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Fort Worth Zoo", cat:"zoo", lat:32.720307, lng:-97.356198, dir:"1989 Colonial Parkway, Fort Worth", tel:"+1-817-759-7555", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fountain-lake-arkansas": {nombre:"Fountain Lake", centro:[34.61095, -92.919514], tz:"America/Chicago", lugares:[
  {n:"Doggone Fun", cat:"peluqueria", lat:34.66421, lng:-92.911401, dir:"104 Deposito Pass, Fountain Lake", tel:"+1-501-922-4605", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fredericksburg-texas": {nombre:"Fredericksburg", centro:[30.275201, -98.871984], tz:"America/Chicago", lugares:[
  {n:"Friendship Veterinary Center", cat:"vet", lat:30.242637, lng:-98.869584, dir:"2087 South US Highway 87, Fredericksburg", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fresno-texas": {nombre:"Fresno", centro:[29.538846, -95.447441], tz:"America/Chicago", lugares:[
  {n:"The Dog House Pet Salon - Pearland", cat:"peluqueria", lat:29.556892, lng:-95.392427, dir:"2810 Business Center Drive, Fresno", tel:"+1-713-820-6140", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Houston Humane Society", cat:"refugio", lat:29.591186, lng:-95.428764, dir:"14700 Almeda Road, Fresno", tel:"+1-713-433-6421", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.552467, lng:-95.384971, dir:"3119 Silverlake Village Drive, Fresno", tel:"+1 713-436-5481", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "friendswood": {nombre:"Friendswood", centro:[29.5294, -95.201045], tz:"America/Chicago", lugares:[
  {n:"Bark Park at Countryside Park", cat:"parque", lat:29.495146, lng:-95.156656, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park", cat:"parque", lat:29.516621, lng:-95.1964, dir:"330 Briarmeadow Avenue, Friendswood", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fife Dog Park", cat:"parque", lat:29.527896, lng:-95.160365, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Place", cat:"tienda", lat:29.5762, lng:-95.203546, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "frisco-texas": {nombre:"Frisco", centro:[33.1506, -96.823818], tz:"America/Chicago", lugares:[
  {n:"Gartner Bark Park", cat:"parque", lat:33.149028, lng:-96.747097, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Classy K9 Cuts", cat:"peluqueria", lat:33.103946, lng:-96.808433, dir:"2995 Preston Road, Frisco", tel:"+1 469-362-5303", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Legacy Grooming", cat:"peluqueria", lat:33.150589, lng:-96.862919, dir:"8756 Teel Pkwy, Frisco", tel:"+1-214-872-1018", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petbar", cat:"peluqueria", lat:33.172248, lng:-96.732178, dir:"3041 South Custer Road, Frisco", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dog House of Frisco", cat:"peluqueria", lat:33.150135, lng:-96.820873, dir:"7258 Main Street, Frisco", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:33.179791, lng:-96.867097, dir:"12205 Teel Parkway, Frisco", tel:"+1-469-803-5712", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.107006, lng:-96.813421, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.176171, lng:-96.84054, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.173124, lng:-96.842248, dir:"5177 Eldorado Parkway, Frisco", tel:"+1 214-705-9384", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.095706, lng:-96.801439, dir:"8700 Preston Road, Frisco", tel:"+1 972-377-6723", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.176071, lng:-96.735437, dir:"15942 Eldorado Parkway, Frisco", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"121 Animal Hospital", cat:"vet", lat:33.122261, lng:-96.750103, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Centre", cat:"vet", lat:33.13006, lng:-96.788898, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical & Surgery Hospital of Frisco", cat:"vet", lat:33.131219, lng:-96.805488, dir:"6451 Preston Road, Frisco", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Atlas Pet Vets", cat:"vet", lat:33.162807, lng:-96.848192, dir:"10150 Legacy Drive, Frisco", tel:"+1 469-389-3500", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"CityVet - Frisco", cat:"vet", lat:33.121426, lng:-96.807546, dir:"8837 Lebanon Road, Frisco", tel:"+1-214-619-4975", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Family Friends Veterinary Hospital", cat:"vet", lat:33.151681, lng:-96.86146, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Frisco Emergency Pet Care", cat:"vet", lat:33.170494, lng:-96.803962, dir:"11201 Preston Road, Frisco", tel:"+1 469-287-6767", horas:[12.0, 24.0], nota:"Dato de OpenStreetMap"},
  {n:"Frisco Vet Care", cat:"vet", lat:33.179714, lng:-96.868498, dir:"2440 Eldorado Parkway, Frisco", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Frisco West Animal Medical Center", cat:"vet", lat:33.15518, lng:-96.848626, dir:"9339 Legacy Drive, Frisco", tel:"+1 972-335-2600", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Dallas Veterinary Emergency Specialty Hospital", cat:"vet", lat:33.158285, lng:-96.84753, dir:"9560 Legacy Drive, Frisco", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Petfolk Veterinary & Urgent Care - Frisco", cat:"vet", lat:33.152158, lng:-96.849551, dir:"4453 Main Street, Frisco", tel:"+1 469-436-6177", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Plano Animal Hospital", cat:"vet", lat:33.108719, lng:-96.768803, dir:"9613 Coit Road, Frisco", tel:"+19729056664", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Plantation Pet Health Center", cat:"vet", lat:33.116476, lng:-96.770676, dir:"12560 Lebanon Road, Frisco", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Stonebrook Family Pet Clinic", cat:"vet", lat:33.166438, lng:-96.803759, dir:"10727 Preston Road, Frisco", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet - Frisco", cat:"vet", lat:33.152568, lng:-96.866292, dir:"2727 Main Street, Frisco", tel:"+1469-353-7200", horas:[15.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"easyvet", cat:"vet", lat:33.133438, lng:-96.866626, dir:"2772 Stonebrook Parkway, Frisco", tel:"+1 469-200-3938", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fulshear": {nombre:"Fulshear", centro:[29.692564, -95.900187], tz:"America/Chicago", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:29.698413, lng:-95.847298, dir:"6434 FM 1463, Fulshear", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:29.716785, lng:-95.845494, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.69821, lng:-95.844595, dir:"26960 FM 1093, Fulshear", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.700125, lng:-95.809285, dir:"24944 FM 1093, Fulshear", tel:"+1 281-347-4400", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Bella Terra Animal Hospital", cat:"vet", lat:29.684298, lng:-95.813611, dir:"8323 FM 723, Fulshear", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bingle Vet - Katy", cat:"vet", lat:29.716645, lng:-95.845496, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brixton Pet Health", cat:"vet", lat:29.72571, lng:-95.84556, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gainesville-texas": {nombre:"Gainesville", centro:[33.624848, -97.142753], tz:"America/Chicago", lugares:[
  {n:"Snoopy's Spa", cat:"peluqueria", lat:33.640497, lng:-97.136116, dir:"934 East US Highway 82, Gainesville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Frank Buck Zoo", cat:"zoo", lat:33.621079, lng:-97.154418, dir:"1000 West California Street, Gainesville", tel:"+1-940-668-4539", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "galveston-texas": {nombre:"Galveston", centro:[29.3057, -94.793325], tz:"America/Chicago", lugares:[
  {n:"BoneVoyage Pet Resort", cat:"tienda", lat:29.29555, lng:-94.852818, dir:"6928 Harborside Drive, Galveston", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.289455, lng:-94.839038, dir:"6102 Broadway Street, Galveston", tel:"+1 409-744-2598", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "garden-ridge": {nombre:"Garden Ridge", centro:[29.634671, -98.305291], tz:"America/Chicago", lugares:[
  {n:"TPC-Marquis Dog Park", cat:"parque", lat:29.648761, lng:-98.40071, dir:"5505 TPC Parkway, Garden Ridge", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Natural Bridge Wildlife Ranch", cat:"zoo", lat:29.701909, lng:-98.339735, dir:"26515 Natural Bridge Caverns Road, Garden Ridge", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "garland-texas": {nombre:"Garland", centro:[32.912624, -96.638883], tz:"America/Chicago", lugares:[
  {n:"Villas of Lake Highlands", cat:"parque", lat:32.86656, lng:-96.702621, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Garland Animal Shelter", cat:"refugio", lat:32.909625, lng:-96.603016, dir:"1902 Highway 66, Garland", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Griffin Rock Cat Retreat", cat:"refugio", lat:32.841579, lng:-96.692211, dir:"10310 Garland Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.835899, lng:-96.672942, dir:"2461 Gus Thomasson Road, Garland", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.862823, lng:-96.643631, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.86532, lng:-96.702087, dir:"10675 East Northwest Highway, Garland", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Roach Feed and Seed", cat:"tienda", lat:32.912887, lng:-96.635864, dir:"409 Main Street, Garland", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"White Rock Animal Hospital", cat:"vet", lat:32.863686, lng:-96.682407, dir:"11414 East Northwest Highway, Garland", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "garrett-texas": {nombre:"Garrett", centro:[32.363476, -96.654713], tz:"America/Chicago", lugares:[
  {n:"Ennis Veterinary Clinic", cat:"vet", lat:32.357328, lng:-96.633098, dir:"3101 North Kaufman Street, Garrett", tel:"+1 972-875-2647", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gatesville-texas": {nombre:"Gatesville", centro:[31.435164, -97.743911], tz:"America/Chicago", lugares:[
  {n:"Candy Pet Palace, LLC", cat:"peluqueria", lat:31.433438, lng:-97.774752, dir:"1412 West Main Street, Gatesville", tel:"+1-254-865-8400", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "gentry": {nombre:"Gentry", centro:[36.267579, -94.48466], tz:"America/Chicago", lugares:[
  {n:"Wild Wilderness Drive Thru Safari", cat:"zoo", lat:36.296838, lng:-94.496103, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "george-west": {nombre:"George West", centro:[28.331824, -98.117161], tz:"America/Chicago", lugares:[
  {n:"George West Animal Control", cat:"refugio", lat:28.314566, lng:-98.11427, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "georgetown-texas": {nombre:"Georgetown", centro:[30.637015, -97.677563], tz:"America/Chicago", lugares:[
  {n:"Bark Park", cat:"parque", lat:30.643864, lng:-97.66794, dir:"151 Holly Street, Georgetown", tel:"+1-512-930-3595", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sun City Dog park", cat:"parque", lat:30.736397, lng:-97.697025, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fur Buddies Dog Salon", cat:"peluqueria", lat:30.679796, lng:-97.709769, dir:"4219 Williams Drive, Georgetown", tel:"+1-512-868-1960", horas:[11.75, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Mutz & Kutz Grooming", cat:"peluqueria", lat:30.661327, lng:-97.690098, dir:"2803 Williams Drive, Georgetown", tel:"+1-512-943-8425", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pupology", cat:"peluqueria", lat:30.679118, lng:-97.711841, dir:"4236 Williams Drive, Georgetown", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Purr-fect Pets Pet Grooming", cat:"peluqueria", lat:30.658899, lng:-97.668677, dir:"1915 North Austin Avenue, Georgetown", tel:"+1-512-819-9154", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Lucky K9", cat:"peluqueria", lat:30.727318, lng:-97.684112, dir:"520 Three Feathers Court, Georgetown", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Action Pack Dog Center", cat:"refugio", lat:30.665392, lng:-97.698189, dir:"800 Bootys Crossing Rd, Georgetown", tel:"+1-512-346-7604", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"City of Georgetown Animal Shelter", cat:"refugio", lat:30.649755, lng:-97.664312, dir:"110 West L Walden Drive, Georgetown", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Trails Kennels & Grooming", cat:"refugio", lat:30.714615, lng:-97.767377, dir:"6915 Williams Drive, Georgetown", tel:"+1-512-863-8855", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Paradise", cat:"refugio", lat:30.643361, lng:-97.689385, dir:"716 South Interstate 35, Georgetown", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Whiskers Luxury Cat Boarding", cat:"refugio", lat:30.703613, lng:-97.744219, dir:"5411 Williams Drive, Georgetown", tel:"+1-512-863-2607", horas:[10.0, 14.0], nota:"Dato de OpenStreetMap"},
  {n:"Williamson County Regional Animal Shelter", cat:"refugio", lat:30.617299, lng:-97.655399, dir:"1855 Southeast Inner Loop, Georgetown", tel:"+1-512-943-3322", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.630852, lng:-97.694345, dir:"1013 West University Avenue, Georgetown", tel:"+1 512-868-2288", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.684614, lng:-97.722746, dir:"4610 Wildwood Drive, Georgetown", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tail Waggins Dog Bakery", cat:"tienda", lat:30.661425, lng:-97.668586, dir:"2102 North Austin Avenue, Georgetown", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wag Heaven Pet Supplies & Self Serve Dog Wash", cat:"tienda", lat:30.662681, lng:-97.692978, dir:"3010 Williams Drive, Georgetown", tel:"+1-512-838-3980", horas:[9.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Georgetown", cat:"vet", lat:30.619463, lng:-97.693091, dir:"108 Woodmont Drive, Georgetown", tel:"+1-512-863-0470", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Austin Avenue Animal Hospital", cat:"vet", lat:30.623451, lng:-97.679333, dir:"2201 South Austin Avenue, Georgetown", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Castlerock Pet Hospital", cat:"vet", lat:30.715508, lng:-97.766738, dir:"6930 RM 2338, Georgetown", tel:"+1-512-868-2280", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Georgetown Veterinary Hospital", cat:"vet", lat:30.619551, lng:-97.680076, dir:"2707 South Austin Avenue, Georgetown", tel:"+1-512-863-3563", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Good Water Animal Hospital", cat:"vet", lat:30.704337, lng:-97.743706, dir:"6950 Lakewood Drive South, Georgetown", tel:"+1 512 868 0175", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Koy Animal Clinic", cat:"vet", lat:30.66921, lng:-97.696512, dir:"3501 Williams Drive, Georgetown", tel:"+1 512 863 0327", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northwest Pet Hospital", cat:"vet", lat:30.6707, lng:-97.697542, dir:"3701 Williams Drive, Georgetown", tel:"+1 512 863 9200", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Old Town Veterinary Hospital", cat:"vet", lat:30.633551, lng:-97.670654, dir:"701 East University Avenue, Georgetown", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Patriot Animal Hospital", cat:"vet", lat:30.634117, lng:-97.773461, dir:"4910 TX 29 West, Georgetown", tel:"+1-512-882-9994", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"VetCheck Pet Urgent Care Center", cat:"vet", lat:30.704174, lng:-97.750661, dir:"5731 Williams Drive, Georgetown", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Animal Hospital", cat:"vet", lat:30.658495, lng:-97.66866, dir:"1911 North Austin Avenue, Georgetown", tel:"+1-512-863-7502", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Zoot Pet Hospital and Luxury Boarding", cat:"vet", lat:30.63129, lng:-97.755884, dir:"3981 TX 29, Georgetown", tel:"+1-512-864-9668", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "giddings": {nombre:"Giddings", centro:[30.18305, -96.936611], tz:"America/Chicago", lugares:[
  {n:"Texas Star Animal Hospital", cat:"vet", lat:30.184436, lng:-96.973448, dir:"1005 County Road 205, Giddings", tel:"+1-979-845-2351", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "gilmer": {nombre:"Gilmer", centro:[32.728803, -94.944557], tz:"America/Chicago", lugares:[
  {n:"Buddy’s Bath House + Groom Shop", cat:"peluqueria", lat:32.728895, lng:-94.943578, dir:"206 East Marshall Street, Gilmer", tel:"+1 903-235-2395", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spencer Veterinary Services", cat:"vet", lat:32.731042, lng:-94.986792, dir:"2559 State Highway 154, Gilmer", tel:"+1 903-725-6214", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"}
 ]},
 "glen-rose": {nombre:"Glen Rose", centro:[32.234077, -97.755], tz:"America/Chicago", lugares:[
  {n:"Glen Rose Veterinary Clinic", cat:"vet", lat:32.245779, lng:-97.740191, dir:"1404 Northeast Big Bend Trail, Glen Rose", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Squaw Valley Veterinary", cat:"vet", lat:32.260818, lng:-97.706467, tel:"+1-254-897-7141", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "glidden-texas": {nombre:"Glidden", centro:[29.70051, -96.587863], tz:"America/Chicago", lugares:[
  {n:"Columbus Zoo", cat:"zoo", lat:29.766642, lng:-96.624122, dir:"2105 State Highway 71, Glidden", tel:"+1-512-581-1820", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "godley-texas": {nombre:"Godley", centro:[32.449029, -97.526689], tz:"America/Chicago", lugares:[
  {n:"Puppy Patch Boutique", cat:"peluqueria", lat:32.447374, lng:-97.527577, dir:"113 East Godley Avenue", tel:"+1-817-866-6006", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"171 Food Row", cat:"resto", lat:32.44655, lng:-97.531398, dir:"209 West State Highway 171, Godley", tel:"+1-817-994-7523", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Godley Animal Clinic", cat:"vet", lat:32.448226, lng:-97.527852, dir:"101 West Graham Avenue, Godley", tel:"+1-817-389-3728", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "gosnell": {nombre:"Gosnell", centro:[35.959961, -89.971672], tz:"America/Chicago", lugares:[
  {n:"Humane Society of Blytheville", cat:"refugio", lat:35.952395, lng:-89.933407, dir:"2530 Arizona Street, Gosnell", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "granbury": {nombre:"Granbury", centro:[32.442676, -97.787053], tz:"America/Chicago", lugares:[
  {n:"Granbury Dog Park", cat:"parque", lat:32.447821, lng:-97.792795, dir:"600 West Moore Street, Granbury", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lauren Dog Park", cat:"parque", lat:32.429494, lng:-97.796252, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hood County Animal Control", cat:"refugio", lat:32.461959, lng:-97.791319, dir:"1550 Weatherford Highway, Granbury", horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Acton Animal Hospital", cat:"vet", lat:32.448727, lng:-97.689679, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Granbury Animal Clinic", cat:"vet", lat:32.4544, lng:-97.796209, dir:"1319 Lipan Highway, Granbury", horas:[7.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Peak Performance Equine Hospital", cat:"vet", lat:32.425021, lng:-97.845715, dir:"3658 West US Highway 377, Granbury", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grand-prairie": {nombre:"Grand Prairie", centro:[32.745964, -96.997785], tz:"America/Chicago", lugares:[
  {n:"Central Bark Dog Park", cat:"parque", lat:32.699814, lng:-97.035488, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Prairie Paws Adoption Center", cat:"refugio", lat:32.698866, lng:-97.035366, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:32.703719, lng:-97.023685, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carrier Animal Hospital", cat:"vet", lat:32.712993, lng:-97.01477, dir:"2405 South Carrier Parkway, Grand Prairie", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"VEG - Veterinary Emergency Group", cat:"vet", lat:32.695604, lng:-97.023236, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grand-saline": {nombre:"Grand Saline", centro:[32.676786, -95.711037], tz:"America/Chicago", lugares:[
  {n:"Canton Grand Safari Adventure", cat:"zoo", lat:32.590612, lng:-95.719241, dir:"9515 Farm to Market Road 1255, Grand Saline", tel:"+1-903-962-5630", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "grandview-texas": {nombre:"Grandview", centro:[32.266651, -97.178543], tz:"America/Chicago", lugares:[
  {n:"Grandview Dog Park", cat:"parque", lat:32.267931, lng:-97.186625, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Four-S Homestead Boarding", cat:"refugio", lat:32.332421, lng:-97.120476, dir:"11641 FM 2258, Grandview", tel:"+1-817-933-2422", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "granite-shoals": {nombre:"Granite Shoals", centro:[30.589077, -98.383915], tz:"America/Chicago", lugares:[
  {n:"Sheer Magic Pet Grooming", cat:"peluqueria", lat:30.605465, lng:-98.370169, dir:"8100 Ranch Road 1431, Granite Shoals", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grapevine": {nombre:"Grapevine", centro:[32.933738, -97.078875], tz:"America/Chicago", lugares:[
  {n:"Large Dog Paddock", cat:"parque", lat:32.895652, lng:-97.090678, horas:[5.5, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Shared Dog Paddock", cat:"parque", lat:32.897085, lng:-97.090144, horas:[5.5, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Paddock", cat:"parque", lat:32.896056, lng:-97.089501, horas:[5.5, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.927833, lng:-97.088044, dir:"1250 William D Tate Avenue, Grapevine", tel:"+1 817-424-8460", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Emergency Hospital of North Texas", cat:"vet", lat:32.94318, lng:-97.104607, dir:"2700 East State Highway 114, Grapevine", tel:"+1 817-410-2273", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Family Pet Clinic of Grapevine", cat:"vet", lat:32.940667, lng:-97.079948, dir:"303 East Northwest Highway, Grapevine", tel:"+1-817-488-4618", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "greenville-texas": {nombre:"Greenville", centro:[33.138449, -96.110807], tz:"America/Chicago", lugares:[
  {n:"Arnold Dog Park", cat:"parque", lat:33.133007, lng:-96.104948, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greenville Dog Park", cat:"parque", lat:33.152268, lng:-96.118335, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dawn's Paw Spa", cat:"peluqueria", lat:33.109431, lng:-96.110546, tel:"+1-903-456-5221", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Control Shelter", cat:"refugio", lat:33.109955, lng:-96.086698, dir:"5800 Joe Ramsey Boulevard, Greenville", tel:"+1-903-457-2990", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.100627, lng:-96.111441, dir:"6834 Wesley Street, Greenville", tel:"+1 903-455-8328", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Crossroads Veterinary Clinic", cat:"vet", lat:33.087069, lng:-96.109618, dir:"8414 Wesley Street, Greenville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Turtle Creek Veterinary Medical Center", cat:"vet", lat:33.110829, lng:-96.090593, dir:"5900 Jack Finney Boulevard, Greenville", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greenwood": {nombre:"Greenwood", centro:[35.216735, -94.256027], tz:"America/Chicago", lugares:[
  {n:"Greenwood Veterinary Clinic", cat:"vet", lat:35.216282, lng:-94.268451, dir:"806 West Center Street, Greenwood", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gretna-louisiana": {nombre:"Gretna", centro:[29.914649, -90.05396], tz:"America/Chicago", lugares:[
  {n:"Primary Veterinary Care", cat:"vet", lat:29.912092, lng:-90.051046, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grove-oklahoma": {nombre:"Grove", centro:[36.589862, -94.768508], tz:"America/Chicago", lugares:[
  {n:"Grove Dog Park", cat:"parque", lat:36.596209, lng:-94.772031, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggie-Do Grooming and Boarding", cat:"peluqueria", lat:36.563106, lng:-94.777891, dir:"31395 South 618 Road, Grove", tel:"+1-918-786-7034", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "gunter": {nombre:"Gunter", centro:[33.449899, -96.744632], tz:"America/Chicago", lugares:[
  {n:"AdvanceCare Veterinary Hospital", cat:"vet", lat:33.452772, lng:-96.740792, dir:"618 North 8th Street, Gunter", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "guymon": {nombre:"Guymon", centro:[36.681413, -101.481424], tz:"America/Chicago", lugares:[
  {n:"NASH Dog Park", cat:"parque", lat:36.675976, lng:-101.468276, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Panhandle Veterinary Clinic", cat:"vet", lat:36.691676, lng:-101.482394, dir:"115 Northwest 14th Street, Guymon", tel:"+1-580-338-6723", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "hackberry-texas": {nombre:"Hackberry", centro:[33.152342, -96.917782], tz:"America/Chicago", lugares:[
  {n:"Scenthound", cat:"peluqueria", lat:33.125931, lng:-96.887884, dir:"5570 FM 423, Hackberry", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Town of Little Elm Animal Shelter", cat:"refugio", lat:33.165497, lng:-96.909648, dir:"1605 Mark Tree Lane, Hackberry", tel:"+1-972-377-1898", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:33.154238, lng:-96.891377, dir:"1618 Farm-to-Market Road 423, Hackberry", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"CityVet", cat:"vet", lat:33.12668, lng:-96.889136, dir:"415 Lebanon Road, Hackberry", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Panther Creek Animal Hospital", cat:"vet", lat:33.193318, lng:-96.886361, dir:"11851 Farm-to-Market Road 423, Hackberry", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Phillips Creek Veterinary Hospital", cat:"vet", lat:33.146809, lng:-96.890224, dir:"8180FM 423, Hackberry", tel:"+1-214-618-8180", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"TruVet Pet Hospital", cat:"vet", lat:33.126461, lng:-96.89301, dir:"255 Lebanon Road, Hackberry", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hammond-louisiana": {nombre:"Hammond", centro:[30.504358, -90.4612], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:30.50137, lng:-90.488588, dir:"2440 West Thomas Street, Hammond", tel:"+1 985-520-6042", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Clinic", cat:"vet", lat:30.476322, lng:-90.497615, dir:"14101 West Club Deluxe Road, Hammond", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harahan": {nombre:"Harahan", centro:[29.940483, -90.203131], tz:"America/Chicago", lugares:[
  {n:"River Ridge Veterinary Clinic", cat:"vet", lat:29.947506, lng:-90.213266, dir:"9019 Jefferson Highway, Harahan", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harker-heights": {nombre:"Harker Heights", centro:[31.074635, -97.659047], tz:"America/Chicago", lugares:[
  {n:"Bonnie & Clyde Grooming", cat:"peluqueria", lat:31.082646, lng:-97.669328, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:31.073733, lng:-97.661329, dir:"201 East Central Texas Expressway, Harker Heights", tel:"+1 254-953-8231", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Aztec Pet Hospital", cat:"vet", lat:31.073419, lng:-97.675084, dir:"104 Farm-to-Market Road 2410, Harker Heights", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stagecoach Pet Hospital", cat:"vet", lat:31.053715, lng:-97.700376, dir:"4526 East Stagecoach Road, Harker Heights", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harlingen": {nombre:"Harlingen", centro:[26.190754, -97.69606], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:26.179643, lng:-97.720585, dir:"2317 West Lincoln, Harlingen", tel:"+1 956-423-1062", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"The Paw Pantry", cat:"tienda", lat:26.199243, lng:-97.681753, dir:"707 North 77 Sunshine Strip, Harlingen", tel:"+1-956-412-7297", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harrah": {nombre:"Harrah", centro:[35.489508, -97.163641], tz:"America/Chicago", lugares:[
  {n:"Buddy's Dog School, Inc.", cat:"refugio", lat:35.494446, lng:-97.205817, dir:"18351 Northeast 23rd Street, Harrah", tel:"+1-405-659-7759", horas:[16.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "harvey-louisiana": {nombre:"Harvey", centro:[29.903539, -90.077294], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:29.904311, lng:-90.068964, dir:"1629 Westbank Expressway, Harvey", tel:"+1 504-362-6711", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "haughton": {nombre:"Haughton", centro:[32.532563, -93.503923], tz:"America/Chicago", lugares:[
  {n:"Bellevue Road Animal Hospital", cat:"vet", lat:32.557676, lng:-93.612487, dir:"1055 Bellevue Road, Haughton", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Haughton Animal Hospital", cat:"vet", lat:32.559226, lng:-93.540141, dir:"5694 Highway 80, Haughton", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetCare Animal Hospital", cat:"vet", lat:32.556411, lng:-93.600118, dir:"2951 Highway 80, Haughton", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "hawkins": {nombre:"Hawkins", centro:[32.588473, -95.204114], tz:"America/Chicago", lugares:[
  {n:"Hawkins Pet & Exotic Animal Clinic", cat:"vet", lat:32.600493, lng:-95.2073, dir:"1129 Beaulah Street, Hawkins", tel:"+1 903 769 2331", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Tiger Creek Wildlife Refuge", cat:"zoo", lat:32.522834, lng:-95.264008, dir:"Werner Lane, Hawkins", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hayes": {nombre:"Hayes", centro:[30.109224, -92.921001], tz:"America/Chicago", lugares:[
  {n:"Grosse Savanne Eco-Tours", cat:"zoo", lat:29.997524, lng:-93.04252, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hays-texas": {nombre:"Hays", centro:[30.122712, -97.872228], tz:"America/Chicago", lugares:[
  {n:"Cornerstone Animal Hospital", cat:"vet", lat:30.097494, lng:-97.876428, dir:"3200 Ranch Road 967, Hays", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "heath-texas": {nombre:"Heath", centro:[32.836515, -96.474987], tz:"America/Chicago", lugares:[
  {n:"Animal Hospital of Heath", cat:"vet", lat:32.838118, lng:-96.473941, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "heber-springs": {nombre:"Heber Springs", centro:[35.497696, -92.032488], tz:"America/Chicago", lugares:[
  {n:"Sartin Animal Care Clinic", cat:"vet", lat:35.493942, lng:-92.076446, dir:"7200 State Hwy 110 W, Heber Springs", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hebron-texas": {nombre:"Hebron", centro:[33.025488, -96.856322], tz:"America/Chicago", lugares:[
  {n:"Large Dog Park", cat:"parque", lat:33.055865, lng:-96.806389, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large dog area 30+ pounds", cat:"parque", lat:33.011473, lng:-96.821028, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"NorthBark Dog Park", cat:"parque", lat:33.010994, lng:-96.820571, dir:"4899 Gramercy Oaks Drive, Hebron", tel:"+1-214-671-8001", horas:[5.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"Rosemeade Dog Park", cat:"parque", lat:33.011401, lng:-96.906827, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:33.056161, lng:-96.80745, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small dog area 0-30 pounds", cat:"parque", lat:33.010978, lng:-96.819447, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Shacks Dog Park", cat:"parque", lat:33.057306, lng:-96.861609, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Timberglen Apartment Dog Park", cat:"parque", lat:33.005196, lng:-96.825491, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wading pool", cat:"parque", lat:33.011567, lng:-96.820071, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog & Cat Grooming", cat:"peluqueria", lat:32.999658, lng:-96.825321, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heritage Pet Salon", cat:"peluqueria", lat:33.008422, lng:-96.796041, dir:"19129 Preston Road, Hebron", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lakeside Pet Spa", cat:"peluqueria", lat:33.051878, lng:-96.797093, dir:"4017 Preston Road, Hebron", tel:"+1 972-403-8801", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Wants", cat:"peluqueria", lat:33.018901, lng:-96.796372, dir:"1501 Preston Road, Hebron", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:33.019067, lng:-96.79623, dir:"1501 Preston Road, Hebron", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Top Paw Resort", cat:"refugio", lat:33.026702, lng:-96.859717, dir:"4272 Marsh Ridge Road, Hebron", tel:"+1-972-307-7648", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Cosmic Canine", cat:"tienda", lat:33.014339, lng:-96.787261, dir:"1101 Ohio Drive, Hebron", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kookaburra Bird Shop", cat:"tienda", lat:33.000704, lng:-96.887813, dir:"1845 East Frankford Road, Hebron", tel:"+1 972 492 0841", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:33.021981, lng:-96.917494, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.022252, lng:-96.797254, dir:"1601 Preston Road, Hebron", tel:"+1 469-847-5997", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.025326, lng:-96.791783, dir:"4836 West Park Boulevard, Hebron", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"After Hours Vet", cat:"vet", lat:33.009132, lng:-96.796145, dir:"19177 Preston Road, Hebron", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carrollton West Pet Hospital", cat:"vet", lat:33.013087, lng:-96.912833, dir:"3729 Old Denton Road, Hebron", tel:"+1-972-492-1828", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"City Vet", cat:"vet", lat:33.027393, lng:-96.788484, dir:"4701 West Park Boulevard, Hebron", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"CityVet", cat:"vet", lat:33.045989, lng:-96.83173, dir:"6009 West Parker Road, Hebron", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Carrollton Veterinary Hospital", cat:"vet", lat:33.000625, lng:-96.888079, dir:"1839 East Frankford Road, Hebron", tel:"+1 972 798 4534", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Tollway Pet Hospital", cat:"vet", lat:32.999663, lng:-96.825244, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ohio Drive Animal Hospital", cat:"vet", lat:33.014224, lng:-96.787262, dir:"1101 Ohio Drive, Hebron", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Thrive Pet Healthcare - Legacy/Plano", cat:"vet", lat:33.073884, lng:-96.770048, dir:"3941 Legacy Drive, Hebron", tel:"+1 469-666-8872", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet - West Plano", cat:"vet", lat:33.044612, lng:-96.82791, dir:"5960 West Parker Road, Hebron", tel:"+14696098400", horas:[15.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"Vetsavers Pet Hospital", cat:"vet", lat:33.019131, lng:-96.917133, dir:"1025 West Hebron Parkway", tel:"+1 972-939-0900", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "hedwig-village": {nombre:"Hedwig Village", centro:[29.779932, -95.51872], tz:"America/Chicago", lugares:[
  {n:"Peace Love Dogs", cat:"refugio", lat:29.799336, lng:-95.529908, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Fritz Kennel", cat:"refugio", lat:29.799689, lng:-95.527947, tel:"+1 713-464-9852", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.787635, lng:-95.534049, dir:"9718 Katy Freeway, Hedwig Village", tel:"+1 713-932-9909", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:29.787686, lng:-95.533979, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Memorial Village Animal Hospital", cat:"vet", lat:29.799552, lng:-95.529577, dir:"9615 Yupondale Drive, Hedwig Village", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "helena-west-helena": {nombre:"Helena-West Helena", centro:[34.539412, -90.615593], tz:"America/Chicago", lugares:[
  {n:"Delta Regional Animal Hospital", cat:"vet", lat:34.520256, lng:-90.637217, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "helotes": {nombre:"Helotes", centro:[29.563569, -98.688421], tz:"America/Chicago", lugares:[
  {n:"Lucky Paws Grooming & Board", cat:"peluqueria", lat:29.557733, lng:-98.679279, dir:"9708 Business Parkway, Helotes", tel:"+1-210-263-9906", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pampering Your Pets", cat:"peluqueria", lat:29.534385, lng:-98.729531, dir:"9818 Silver Mist Way, Helotes", tel:"+1-210-740-9105", horas:[8.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"Southern Spaw", cat:"peluqueria", lat:29.508275, lng:-98.69961, tel:"+1 210-541-4156", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.489269, lng:-98.709703, dir:"5435 West Loop 1604 North, Helotes", tel:"+1 210-520-4195", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.550794, lng:-98.661593, dir:"11398 Bandera Road, Helotes", tel:"+1 210-706-9245", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"The Palms Pet Resort & Spa", cat:"tienda", lat:29.559817, lng:-98.674358, dir:"12410 Bandera Road San Antonio, TX 78023, Helotes", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hill Country Animal Hospital", cat:"vet", lat:29.559511, lng:-98.674796, dir:"12410 Bandera Road, Helotes", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"MissionVet Specialty & Emergency", cat:"vet", lat:29.572523, lng:-98.647349, dir:"West Hausman Road, Helotes", tel:"+1 210-734-7343", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Town and Country Veterinary Hospital", cat:"vet", lat:29.539694, lng:-98.650836, dir:"10350 Bandera Road, Helotes", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet", cat:"vet", lat:29.503072, lng:-98.729797, dir:"12030 Culebra Road, Helotes", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "henderson-louisiana": {nombre:"Henderson", centro:[30.313253, -91.790392], tz:"America/Chicago", lugares:[
  {n:"Barkaritaville Large Dog Park", cat:"parque", lat:30.327011, lng:-91.818742, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barkaritaville Small Dog Park", cat:"parque", lat:30.327349, lng:-91.818699, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "henderson-texas": {nombre:"Henderson", centro:[32.153216, -94.79938], tz:"America/Chicago", lugares:[
  {n:"petsense", cat:"tienda", lat:32.131617, lng:-94.804215, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hewitt-texas": {nombre:"Hewitt", centro:[31.462307, -97.195702], tz:"America/Chicago", lugares:[
  {n:"Hewitt Veterinary Hospital", cat:"vet", lat:31.4767, lng:-97.203406, dir:"101 Panther Way, Hewitt", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hickory-creek": {nombre:"Hickory Creek", centro:[33.122343, -97.043065], tz:"America/Chicago", lugares:[
  {n:"Happy Dog Spa", cat:"peluqueria", lat:33.131358, lng:-97.042855, dir:"4451 Swisher Road, Hickory Creek", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Swisher Dog Care", cat:"refugio", lat:33.129051, lng:-97.051286, dir:"3592 Swisher Road, Hickory Creek", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Corinth Veterinary Clinic", cat:"vet", lat:33.129492, lng:-97.05086, dir:"3598 Swisher Road, Hickory Creek", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hideaway": {nombre:"Hideaway", centro:[32.49042, -95.457457], tz:"America/Chicago", lugares:[
  {n:"Hide-A-Way Small Animal Clinic", cat:"vet", lat:32.471668, lng:-95.44988, dir:"14114 FM 849, Hideaway", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "highfill": {nombre:"Highfill", centro:[36.261398, -94.357469], tz:"America/Chicago", lugares:[
  {n:"Woodward Hills Dog Park", cat:"parque", lat:36.305171, lng:-94.339661, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "highland-park-texas": {nombre:"Highland Park", centro:[32.833461, -96.791945], tz:"America/Chicago", lugares:[
  {n:"Central Commons Community Dog Park", cat:"parque", lat:32.829676, lng:-96.820686, dir:"4711 Westside Drive, Highland Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lakeland Hills Dog Park", cat:"parque", lat:32.803334, lng:-96.696485, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mutts dog park", cat:"parque", lat:32.8057, lng:-96.795308, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"petbar", cat:"peluqueria", lat:32.838041, lng:-96.75254, dir:"6465 East Mockingbird Lane, Highland Park", tel:"+1 214-730-0063", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog N Kitty City", cat:"refugio", lat:32.827844, lng:-96.839538, dir:"2719 Manor Way, Highland Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kinder Kritter", cat:"refugio", lat:32.826673, lng:-96.710234, dir:"8928 Garland Road, Highland Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.836233, lng:-96.762297, dir:"6060 East Mockingbird Lane, Highland Park", tel:"+1 214-827-1248", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.811465, lng:-96.769845, dir:"1704 Greenville Avenue, Highland Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.810575, lng:-96.819537, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.8128, lng:-96.730151, horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.834949, lng:-96.701471, dir:"1152 North Buckner Boulevard, Highland Park", tel:"+1 214-320-9116", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"A&B Animal Clinic", cat:"vet", lat:32.828149, lng:-96.709584, dir:"9027 Garland Road, Highland Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:32.812907, lng:-96.730105, dir:"7331 Gaston Avenue, Highland Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Vet", cat:"vet", lat:32.811731, lng:-96.731149, dir:"7324 Gaston Avenue, Highland Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East Dallas Veterinary Clinic", cat:"vet", lat:32.811473, lng:-96.70267, dir:"8541 Ferguson Road, Highland Park", tel:"+1 214-328-9935", horas:[7.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Hillside Veterinary Clinic", cat:"vet", lat:32.836181, lng:-96.759138, dir:"6150 East Mockingbird Lane, Highland Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Metro Paws Animal Hospital - White Rock", cat:"vet", lat:32.809437, lng:-96.730621, dir:"7446 East Grand Avenue, Highland Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Modern Animal", cat:"vet", lat:32.837788, lng:-96.752355, dir:"6465 East Mockingbird Lane, Highland Park", tel:"+1 866-505-8755", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petfolk Veterinary & Urgent Care", cat:"vet", lat:32.813567, lng:-96.752523, dir:"1904 Abrams Parkway, Highland Park", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petfolk Veterinary & Urgent Care - Lakewood", cat:"vet", lat:32.813567, lng:-96.752523, dir:"1904 Abrams Parkway, Highland Park", tel:"+1 682-339-7822", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet - Lakewood", cat:"vet", lat:32.837256, lng:-96.754603, dir:"6333 East Mockingbird Lane, Highland Park", tel:"+1 469-902-4600", horas:[15.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Lakewood Animal Hospital", cat:"vet", lat:32.816566, lng:-96.753459, dir:"6363 Richmond Avenue, Highland Park", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Vickery Place Animal Hospital", cat:"vet", lat:32.817918, lng:-96.781715, dir:"2720 North Henderson Avenue, Highland Park", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "highland-village": {nombre:"Highland Village", centro:[33.091788, -97.046676], tz:"America/Chicago", lugares:[
  {n:"Dogtopia", cat:"tienda", lat:33.072382, lng:-97.044943, horas:[6.5, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Highland Pointe Animal Hospital", cat:"vet", lat:33.068903, lng:-97.061183, dir:"6150 Morriss Road, Highland Village", tel:"+19723179310", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hill-country-village": {nombre:"Hill Country Village", centro:[29.58245, -98.490851], tz:"America/Chicago", lugares:[
  {n:"Bark Park", cat:"parque", lat:29.560289, lng:-98.50148, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"McAllister Dog Park", cat:"parque", lat:29.550563, lng:-98.445098, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vista Crossing Dog Park", cat:"parque", lat:29.558284, lng:-98.509093, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Elegant Reef - Tropical Fish Studio", cat:"tienda", lat:29.553239, lng:-98.497492, dir:"301 West Nakoma Drive, Hill Country Village", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.561441, lng:-98.485877, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Towne North Animal Hospital", cat:"vet", lat:29.563578, lng:-98.48401, dir:"13335 North US Highway 281, Hill Country Village", tel:"+1-210-343-1065", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hillsboro-texas": {nombre:"Hillsboro", centro:[32.010851, -97.130374], tz:"America/Chicago", lugares:[
  {n:"Hill County Paw Pals", cat:"vet", lat:31.988972, lng:-97.129183, tel:"+12545800679", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hilshire-village": {nombre:"Hilshire Village", centro:[29.790783, -95.489108], tz:"America/Chicago", lugares:[
  {n:"TC Jester Dog Park", cat:"parque", lat:29.825698, lng:-95.45505, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart Grooming", cat:"peluqueria", lat:29.827401, lng:-95.432092, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Houston SPCA", cat:"refugio", lat:29.780704, lng:-95.441773, dir:"7007 Old Katy Road, Hilshire Village", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Houston SPCA Medical Center", cat:"refugio", lat:29.779783, lng:-95.44157, dir:"900 Portway Drive, Hilshire Village", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K-9 Angles Rescue", cat:"refugio", lat:29.80628, lng:-95.42041, dir:"1220 West 23rd Street, Hilshire Village", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.827539, lng:-95.431996, dir:"1339 West 43rd Street, Hilshire Village", tel:"+1 713-346-9359", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petbar", cat:"tienda", lat:29.817008, lng:-95.429121, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.795572, lng:-95.485236, dir:"1417 Wirt Road, Hilshire Village", tel:"+1 713-465-1452", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.80983, lng:-95.453332, dir:"4512 Dacoma Street, Hilshire Village", tel:"+1 281-254-8395", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Gulf Coast Veterinary Specialists", cat:"vet", lat:29.785244, lng:-95.481456, dir:"8042 Katy Freeway, Hilshire Village", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Houston SPCA Wildlife Center", cat:"vet", lat:29.780577, lng:-95.441307, dir:"7007 Old Katy Road, Hilshire Village", tel:"+1-713-861-9453", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Jester Plaza Veterinary Clinic", cat:"vet", lat:29.802415, lng:-95.432819, dir:"1957 West T C Jester Boulevard, Hilshire Village", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Thrive Pet Healthcare", cat:"vet", lat:29.818251, lng:-95.429173, dir:"3422 Ella Boulevard, Hilshire Village", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hitchita": {nombre:"Hitchita", centro:[35.519825, -95.75138], tz:"America/Chicago", lugares:[
  {n:"Barnyard Zoo", cat:"zoo", lat:35.453468, lng:-95.728199, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hockley": {nombre:"Hockley", centro:[30.025824, -95.845205], tz:"America/Chicago", lugares:[
  {n:"Hendricks Kennels", cat:"refugio", lat:29.922069, lng:-95.834009, dir:"27008 Sharp Road, Hockley", tel:"+1 281-371-2344", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Hospital Of Waller", cat:"vet", lat:30.066577, lng:-95.861076, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waller Equine Hospital", cat:"vet", lat:30.066542, lng:-95.86147, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "holly-lake-ranch": {nombre:"Holly Lake Ranch", centro:[32.715117, -95.200081], tz:"America/Chicago", lugares:[
  {n:"Holly Lake Boarding & Grooming", cat:"refugio", lat:32.703236, lng:-95.226917, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Holly Lake Dog Shelter", cat:"refugio", lat:32.728408, lng:-95.177864, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hollywood-park": {nombre:"Hollywood Park", centro:[29.600505, -98.48724], tz:"America/Chicago", lugares:[
  {n:"For The Love Of Dogs", cat:"peluqueria", lat:29.604102, lng:-98.443868, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Healthy Paws & Co.", cat:"tienda", lat:29.605335, lng:-98.417892, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.64293, lng:-98.456014, dir:"21019 Highway 281, Hollywood Park", tel:"+1 210-481-3369", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.655202, lng:-98.446484, dir:"23014 US Highway 281 North, Hollywood Park", tel:"+1 210-481-9517", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Unleashed", cat:"tienda", lat:29.606378, lng:-98.467368, dir:"18138 San Pedro Avenue, Hollywood Park", tel:"+1-210-446-2280", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alamo Feline Health Center", cat:"vet", lat:29.589363, lng:-98.474946, dir:"16201 San Pedro Avenue, Hollywood Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Borgfeld Animal Hospital", cat:"vet", lat:29.673181, lng:-98.476612, dir:"24851 Canyon Golf Road, Hollywood Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cibolo Canyons Vetrinary Hospital", cat:"vet", lat:29.65717, lng:-98.439597, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Encino Park Veterinary and Clinic", cat:"vet", lat:29.636256, lng:-98.451108, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vanguard Veterinary Clinic", cat:"vet", lat:29.603774, lng:-98.444167, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hondo": {nombre:"Hondo", centro:[29.347412, -99.141203], tz:"America/Chicago", lugares:[
  {n:"Hondo Veterinary Hospital", cat:"vet", lat:29.344946, lng:-99.161567, dir:"2709 US Highway 90 West, Hondo", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hope-villa": {nombre:"Hope Villa", centro:[30.342971, -90.982601], tz:"America/Chicago", lugares:[
  {n:"Cinderella's Pet Palace", cat:"peluqueria", lat:30.325862, lng:-90.980512, dir:"Airline Highway, Hope Villa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:30.323106, lng:-90.977873, dir:"17545 Old Jefferson Highway, Hope Villa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aqua Hut", cat:"tienda", lat:30.327637, lng:-90.980926, dir:"17424 Airline Highway, Hope Villa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Marston Feed and Seed Inc", cat:"tienda", lat:30.340236, lng:-90.99204, dir:"17989 Airline Highway, Hope Villa", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "horizon-city": {nombre:"Horizon City", centro:[31.692612, -106.207479], tz:"America/Chicago", lugares:[
  {n:"The Yard", cat:"parque", lat:31.818161, lng:-106.185332, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fur Babies", cat:"peluqueria", lat:31.768341, lng:-106.29942, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Moo Moo’s Grooming", cat:"peluqueria", lat:31.760054, lng:-106.260582, dir:"12400 Montwood Drive, Horizon City", tel:"+1-915-990-7506", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Mutts Makeover", cat:"peluqueria", lat:31.782856, lng:-106.30166, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scrappy's Pet Salon", cat:"peluqueria", lat:31.761514, lng:-106.272174, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hornsby-bend": {nombre:"Hornsby Bend", centro:[30.247297, -97.582852], tz:"America/Chicago", lugares:[
  {n:"Bark & Zoom", cat:"refugio", lat:30.213378, lng:-97.657044, dir:"2601 Cardinal Loop, Hornsby Bend", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Prairie Creek Animal Hospital", cat:"vet", lat:30.252156, lng:-97.596122, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hot-springs": {nombre:"Hot Springs", centro:[34.503839, -93.055244], tz:"America/Chicago", lugares:[
  {n:"Bark Park", cat:"parque", lat:34.485705, lng:-93.046629, dir:"410 Hollywood Avenue, Hot Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:34.461603, lng:-93.05869, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Creatures Animal Hospital", cat:"vet", lat:34.444248, lng:-93.088818, dir:"2350 Higdon Ferry Road, Hot Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Temperance Hill Animal Hospital", cat:"vet", lat:34.452936, lng:-93.076149, dir:"111 Temperance Hill Road, Hot Springs", tel:"+1-501-525-5723", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hot-springs-village": {nombre:"Hot Springs Village", centro:[34.679572, -92.998388], tz:"America/Chicago", lugares:[
  {n:"Desoto Dog Park", cat:"parque", lat:34.680651, lng:-93.007397, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barkansas Pet Supply", cat:"tienda", lat:34.643261, lng:-93.05829, dir:"4055 AR 7, Hot Springs Village", tel:"+1-501-318-1800", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waggin Wheel Veterinary Clinic", cat:"vet", lat:34.634058, lng:-93.059869, dir:"3647 AR 7, Hot Springs Village", tel:"+1-501-622-3160", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "houma": {nombre:"Houma", centro:[29.59577, -90.719535], tz:"America/Chicago", lugares:[
  {n:"Pet Express", cat:"tienda", lat:29.603865, lng:-90.74693, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.609032, lng:-90.754153, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Macello's Veterinary Hospital", cat:"vet", lat:29.601883, lng:-90.753263, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "houston-texas": {nombre:"Houston", centro:[29.758938, -95.367697], tz:"America/Chicago", lugares:[
  {n:"Bagby Dog Park", cat:"parque", lat:29.751662, lng:-95.375803, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eadog Park", cat:"parque", lat:29.747691, lng:-95.355811, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Harriet and Joe Foster Small Dog Run", cat:"parque", lat:29.753418, lng:-95.360692, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hartman Dogpark", cat:"parque", lat:29.7678, lng:-95.398899, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Johnny Steele Dog Park", cat:"parque", lat:29.762163, lng:-95.393989, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kinder Large Dog Run", cat:"parque", lat:29.753306, lng:-95.360502, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heights Pet Grooming", cat:"peluqueria", lat:29.784237, lng:-95.387935, dir:"711 Studewood Street, Houston", tel:"+17138631042", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Mane & Minks Vet Spa", cat:"peluqueria", lat:29.702077, lng:-95.35661, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dog House Pet Salon - Memorial Park", cat:"peluqueria", lat:29.775812, lng:-95.426864, dir:"6434 Washington Avenue, Houston", tel:"+1-713-820-6140", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:29.767961, lng:-95.382289, dir:"2311 Washington Avenue, Houston", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Molly's Mutt House", cat:"refugio", lat:29.818032, lng:-95.409926, dir:"3410 North Shepherd Drive, Houston", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"The Best Little Dog House In Texas", cat:"refugio", lat:29.748257, lng:-95.39077, dir:"902 Fairview Street, Houston", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Green Bone", cat:"refugio", lat:29.748741, lng:-95.347162, dir:"2901 Rusk Street, Houston", horas:[7.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Agora", cat:"resto", lat:29.742947, lng:-95.402585, dir:"1712 Westheimer Road, Houston", tel:"+1-713-526-7212", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cafe Brussels", cat:"resto", lat:29.773563, lng:-95.372219, dir:"1718 Houston Avenue", tel:"+1-713-222-6996", horas:[11.0, 14.0], nota:"Dato de OpenStreetMap"},
  {n:"Caffvino", cat:"resto", lat:29.79011, lng:-95.397256, dir:"1030 Heights Boulevard, Houston", tel:"+1 7134856641", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Campesino Coffee House", cat:"resto", lat:29.745979, lng:-95.394217, dir:"2602 Waugh Drive, Houston", tel:"+1-832-831-6486", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Empire Cafe", cat:"resto", lat:29.742984, lng:-95.403532, dir:"1732 Westheimer Road, Houston", tel:"+1-713-528-5282", horas:[7.5, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Gypsy Poet", cat:"resto", lat:29.744173, lng:-95.370348, dir:"2404 Austin Street, Houston", tel:"+1-281-888-8663", horas:[17.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Kitty Bodega", cat:"tienda", lat:29.787196, lng:-95.372508, horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Natural Pawz", cat:"tienda", lat:29.769769, lng:-95.401663, dir:"4015 Washington Avenue, Houston", tel:"+1-346-980-1975", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:29.774528, lng:-95.387937, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.77404, lng:-95.383185, dir:"1907 Taylor Street, Houston", tel:"+1 713-863-0533", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.787205, lng:-95.410815, dir:"901 North Shepherd Drive, Houston", tel:"+1 713-426-1084", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"BARC", cat:"vet", lat:29.790755, lng:-95.343696, dir:"2700 Evella Street, Houston", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BARC Lost Pets & Registration", cat:"vet", lat:29.791529, lng:-95.343863, dir:"3200 Carr Street, Houston", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"BCP Veternary Pharmacy", cat:"vet", lat:29.744443, lng:-95.366513, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:29.774003, lng:-95.383144, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bayou City Veterinary Hospital", cat:"vet", lat:29.770822, lng:-95.408663, dir:"4720 Washington Avenue, Houston", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Garden Oaks Veterinary Clinic", cat:"vet", lat:29.817907, lng:-95.409876, dir:"3408 North Shepherd Drive, Houston", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Durham Animal Hospital", cat:"vet", lat:29.804392, lng:-95.412011, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SNAP", cat:"vet", lat:29.776499, lng:-95.411506, dir:"1801 Durham Drive, Houston", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Telephone Road Dog & Cat Hospital", cat:"vet", lat:29.725051, lng:-95.323854, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Corner Vet", cat:"vet", lat:29.802489, lng:-95.405242, dir:"440 West 19th Street, Houston", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Urban Vet", cat:"vet", lat:29.746436, lng:-95.376478, dir:"2625 Louisiana Street, Houston", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Emergency Group", cat:"vet", lat:29.776125, lng:-95.387875, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Washington Heights Veterinary Clinic", cat:"vet", lat:29.774796, lng:-95.382282, dir:"2324 Shearn Street, Houston", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "hudson-bend": {nombre:"Hudson Bend", centro:[30.416808, -97.929628], tz:"America/Chicago", lugares:[
  {n:"Animal Hospital", cat:"vet", lat:30.387917, lng:-97.885063, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake Travis Animal Hospital", cat:"vet", lat:30.397485, lng:-97.928711, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hudson-oaks": {nombre:"Hudson Oaks", centro:[32.757073, -97.706695], tz:"America/Chicago", lugares:[
  {n:"I-20 Animal Hospital", cat:"vet", lat:32.752843, lng:-97.685188, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hugo-oklahoma": {nombre:"Hugo", centro:[34.010621, -95.513122], tz:"America/Chicago", lugares:[
  {n:"Choctaw Veterinary Clinic", cat:"vet", lat:34.016892, lng:-95.533282, dir:"1808 Old Highway 70, Hugo", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "humble": {nombre:"Humble", centro:[30.000545, -95.267855], tz:"America/Chicago", lugares:[
  {n:"Pet Paradise", cat:"refugio", lat:29.98382, lng:-95.280389, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wet Nose Lodge & Spa", cat:"refugio", lat:30.00231, lng:-95.245432, dir:"19540 Ramblewood Drive, Humble", tel:"+1 281 446 9083", horas:[7.0, 10.0], nota:"Dato de OpenStreetMap"},
  {n:"ABC Birds", cat:"tienda", lat:29.999067, lng:-95.272008, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"ABC Birds", cat:"tienda", lat:30.000822, lng:-95.265384, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.014224, lng:-95.260546, dir:"20518 Eastex Freeway, Humble", tel:"+1 281-540-1274", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.04951, lng:-95.244101, dir:"810 Kingwood Drive, Humble", tel:"+1 281-358-0366", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.936796, lng:-95.248357, dir:"9603 North Sam Houston Parkway East, Humble", tel:"+1 281-319-4690", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.002833, lng:-95.272344, dir:"19615 Highway 59 North, Humble", tel:"+1 281-318-4004", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Humble", cat:"vet", lat:29.999782, lng:-95.218721, dir:"3645 FM 1960, Humble", tel:"+1-281-812-1960", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.014378, lng:-95.260723, dir:"20518 Eastex Freeway, Humble", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eastex Veterinary Clinic", cat:"vet", lat:29.998759, lng:-95.253008, dir:"1400 1st Street, Humble", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Texas Litter Control", cat:"vet", lat:29.998686, lng:-95.272538, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Old McDonald’s Farm", cat:"zoo", lat:30.000467, lng:-95.225267, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hunters-creek-village": {nombre:"Hunters Creek Village", centro:[29.770506, -95.495497], tz:"America/Chicago", lugares:[
  {n:"Natural Pawz", cat:"tienda", lat:29.75062, lng:-95.477344, dir:"5706 San Felipe Street, Hunters Creek Village", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Vet", cat:"vet", lat:29.747234, lng:-95.486508, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hurst-texas": {nombre:"Hurst", centro:[32.823462, -97.170568], tz:"America/Chicago", lugares:[
  {n:"Hurst Dog Park", cat:"parque", lat:32.850404, lng:-97.188533, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hurst Dog Park (Large Dogs)", cat:"parque", lat:32.850766, lng:-97.188618, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hurst Dog Park (Small Dogs)", cat:"parque", lat:32.851059, lng:-97.188419, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Grooming Boutique", cat:"peluqueria", lat:32.848483, lng:-97.178247, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waggamuffins Grooming and Doggy Daycare", cat:"peluqueria", lat:32.824165, lng:-97.190003, dir:"846 West Pipeline Road, Hurst", tel:"+1-817-616-3346", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Glass Aquatics", cat:"tienda", lat:32.848272, lng:-97.17881, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.843387, lng:-97.185636, dir:"1616 Precinct Line Road, Hurst", tel:"+1-682-325-5973", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.825323, lng:-97.200044, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hurst Animal Clinic", cat:"vet", lat:32.834391, lng:-97.180784, dir:"640 West Bedford Euless Road, Hurst", tel:"+1-817-282-1463", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "hutto": {nombre:"Hutto", centro:[30.542764, -97.54689], tz:"America/Chicago", lugares:[
  {n:"Brushy Creek Dog Park", cat:"parque", lat:30.508639, lng:-97.550057, dir:"200 County Road 197, Hutto", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Hounds Grooming", cat:"peluqueria", lat:30.542834, lng:-97.556571, dir:"560 US-79, Hutto", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Starmark Training & Behavior Solutions", cat:"refugio", lat:30.508249, lng:-97.553051, dir:"200 County Road 197, Hutto", tel:"+1 512-759-2275", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.504119, lng:-97.58187, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"FM 685 Animal Hospital", cat:"vet", lat:30.529245, lng:-97.564605, dir:"695 Chris Kelley Boulevard, Hutto", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"ZippiVet", cat:"vet", lat:30.497099, lng:-97.583893, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "indian-springs-texas": {nombre:"Indian Springs", centro:[30.172133, -95.527377], tz:"America/Chicago", lugares:[
  {n:"Natural Pawz", cat:"tienda", lat:30.182911, lng:-95.537299, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.175929, lng:-95.535821, dir:"10864 Kuykendahl Road, Indian Springs", tel:"+1 281-465-4771", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"The Village Vet Animal Medical & Surgical Center", cat:"vet", lat:30.182894, lng:-95.537437, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ingleside-on-the-bay": {nombre:"Ingleside on the Bay", centro:[27.8309, -97.22266], tz:"America/Chicago", lugares:[
  {n:"Texas Sealife Center", cat:"refugio", lat:27.625342, lng:-97.221495, dir:"14220 South Padre Island Drive, Ingleside on the Bay", tel:"+1-361-589-4023", horas:[10.0, 15.5], nota:"Dato de OpenStreetMap"}
 ]},
 "ingram-texas": {nombre:"Ingram", centro:[30.073889, -99.236562], tz:"America/Chicago", lugares:[
  {n:"Kathleen C. Cailloux Humane Society Shelter & Resale Shop", cat:"refugio", lat:30.073631, lng:-99.21552, dir:"2900 Junction Highway, Ingram", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kerrville Ranch & Pet Center", cat:"tienda", lat:30.071005, lng:-99.18641, dir:"1900 Junction Highway, Ingram", tel:"+1-830-895-5800", horas:[7.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Kerrville Veterinary Clinic", cat:"vet", lat:30.069134, lng:-99.186057, dir:"1869 Junction Highway, Ingram", tel:"+1-830-895-5533", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Town & Country Animal Hospital", cat:"vet", lat:30.073106, lng:-99.209653, dir:"2710 Junction Highway, Ingram", tel:"+1-830-367-5316", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "irving-texas": {nombre:"Irving", centro:[32.829518, -96.944218], tz:"America/Chicago", lugares:[
  {n:"Paws Colinas Dog Park", cat:"parque", lat:32.86839, lng:-96.928403, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Birds Paradise", cat:"tienda", lat:32.847951, lng:-96.991437, dir:"3329 North Belt Line Road, Irving", tel:"+1 945-394-9631", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.861049, lng:-96.958111, dir:"4030 North MacArthur Boulevard, Irving", tel:"+1 972-871-0525", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Popshelf", cat:"tienda", lat:32.838582, lng:-97.004306, dir:"4005 West Airport Freeway, Irving", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Saltwater Paradise", cat:"tienda", lat:32.837637, lng:-96.963304, dir:"1313 West Airport Freeway, Irving", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Low Cost Pet Vet", cat:"vet", lat:32.833848, lng:-96.989395, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"My Village Pet Clinic", cat:"vet", lat:32.801187, lng:-96.933164, dir:"East Shady Grove Road, Irving", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Story Road Animal Hospital", cat:"vet", lat:32.821176, lng:-96.975978, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jacinto-city": {nombre:"Jacinto City", centro:[29.767343, -95.233672], tz:"America/Chicago", lugares:[
  {n:"Maxey Bark & Run Dog Park", cat:"parque", lat:29.782138, lng:-95.217277, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jacksboro-texas": {nombre:"Jacksboro", centro:[33.218786, -98.158098], tz:"America/Chicago", lugares:[
  {n:"Live Oak Veterniary Clinic", cat:"vet", lat:33.182265, lng:-98.231228, dir:"3923 US 380 West, Jacksboro", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jacksonville-arkansas": {nombre:"Jacksonville", centro:[34.8662, -92.110146], tz:"America/Chicago", lugares:[
  {n:"Housing Dog Park", cat:"parque", lat:34.890489, lng:-92.163683, dir:"100 Iowa Circle, Jacksonville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jacksonville Dog Park", cat:"parque", lat:34.879541, lng:-92.126801, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jacksonville Animal Shelter", cat:"refugio", lat:34.862312, lng:-92.134736, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense by Tractor Supply", cat:"tienda", lat:34.885191, lng:-92.10487, dir:"North 1st Street, Jacksonville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eubanks Animal Clinic", cat:"vet", lat:34.862209, lng:-92.115231, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jacksonville Animal Hospital", cat:"vet", lat:34.878365, lng:-92.109884, dir:"1304 North 1st Street, Jacksonville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary", cat:"vet", lat:34.902216, lng:-92.141516, dir:"648 Dustin Peters Ave, Jacksonville", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jarrell": {nombre:"Jarrell", centro:[30.824909, -97.604454], tz:"America/Chicago", lugares:[
  {n:"Pampered Pets Grooming", cat:"peluqueria", lat:30.823832, lng:-97.606622, dir:"101 West Avenue J, Jarrell", tel:"+1-254-444-8283", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Compassion Vetinary Hospital", cat:"vet", lat:30.8131, lng:-97.610934, dir:"11720 North Interstate 35, Jarrell", tel:"+1-512-746-0111", horas:[7.5, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Jarrell Animal Hospital", cat:"vet", lat:30.819269, lng:-97.614766, dir:"104 Western Sky Trail, Jarrell", tel:"+1-737-773-3645", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "jenks": {nombre:"Jenks", centro:[36.022873, -95.968328], tz:"America/Chicago", lugares:[
  {n:"Biscuit Acres Dog Park", cat:"parque", lat:36.028179, lng:-95.91152, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southern Reserve Dog Park", cat:"parque", lat:36.013457, lng:-96.023352, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Muddy Paws Grooming", cat:"peluqueria", lat:36.081157, lng:-95.959096, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Tulsa Grooming Company", cat:"peluqueria", lat:36.046677, lng:-95.883861, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"U Dirty Dawg Dog Wash & Chow House", cat:"peluqueria", lat:36.022854, lng:-95.967948, dir:"205 East Main Street North, Jenks", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:36.044026, lng:-95.958252, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Muddy Paws Boarding", cat:"refugio", lat:36.081156, lng:-95.958985, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodland West Pet Resort", cat:"refugio", lat:36.027663, lng:-96.01249, dir:"9400 South Union Avenue West, Jenks", tel:"+1 918 299 5720", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Rescue Foundation Adoption Center", cat:"tienda", lat:36.087626, lng:-95.921604, horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Axolotls Tulsa", cat:"tienda", lat:36.028831, lng:-95.904811, dir:"9238 South Sheridan Road East, Jenks", tel:"+1-918-629-1853", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:36.03026, lng:-95.923381, dir:"9146 South Yale Avenue East, Jenks", tel:"+1 918 600 0660", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.057984, lng:-96.005051, dir:"7322 South Olympia Avenue West, Jenks", tel:"+1 918-445-8648", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.02437, lng:-95.948221, dir:"9645 Riverside Parkway, Jenks", tel:"+1 918-296-3312", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Southern Agriculture", cat:"tienda", lat:36.049468, lng:-96.005765, dir:"7836 South Olympia Avenue West, Jenks", tel:"+1 918 794 7387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:36.077418, lng:-95.923108, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical and Surgical Hospital", cat:"vet", lat:36.061278, lng:-95.889135, dir:"7811 East 71st Street South, Jenks", tel:"+1 918 492 2674", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Capron Veterinary Hospital", cat:"vet", lat:36.090326, lng:-95.902295, dir:"6705 East 51st Street South, Jenks", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Feline Specialties", cat:"vet", lat:36.022645, lng:-95.951059, dir:"9702 Riverside Parkway, Jenks", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Hammond Animal Hospital", cat:"vet", lat:36.061313, lng:-95.959934, dir:"2301 East 71st Street South, Jenks", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hunters Glen Veterinary Hospital", cat:"vet", lat:36.030186, lng:-95.920307, dir:"9150 South Braden Avenue East, Jenks", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oklahoma Veterinary Specialists", cat:"vet", lat:36.051805, lng:-96.007725, dir:"1501 West 78th Street South, Jenks", tel:"+1 918 299 4900", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southern Hills Veterinary Hospital", cat:"vet", lat:36.081164, lng:-95.958788, dir:"2242 East 56th Place South, Jenks", tel:"+1 918 747 1311", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Associates", cat:"vet", lat:36.061932, lng:-95.899491, dir:"6925 South 69th Avenue East, Jenks", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodland South Animal Hospital", cat:"vet", lat:36.027094, lng:-95.887376, dir:"9340 South Memorial Drive East, Jenks", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wynter Wheat Callison", cat:"vet", lat:36.046982, lng:-95.886954, dir:"8046 South Memorial Drive East, Jenks", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jersey-village": {nombre:"Jersey Village", centro:[29.888578, -95.569918], tz:"America/Chicago", lugares:[
  {n:"Jersey Village Dog Park", cat:"parque", lat:29.896246, lng:-95.573433, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodwind Lakes Dog Park", cat:"parque", lat:29.883098, lng:-95.526378, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Grooming", cat:"peluqueria", lat:29.920044, lng:-95.480464, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Inwood Aquarium FIsh and Supplies", cat:"tienda", lat:29.889493, lng:-95.475788, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.958065, lng:-95.547911, dir:"17723 Tomball Parkway, Jersey Village", tel:"+1 281-807-6197", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.85573, lng:-95.513608, dir:"13830 Northwest Freeway, Jersey Village", tel:"+1 713-690-0575", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.924522, lng:-95.602752, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:29.957851, lng:-95.547933, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cypress Veterinary Hospital", cat:"vet", lat:29.952535, lng:-95.602143, tel:"+1-281-469-8056", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "johnson": {nombre:"Johnson", centro:[36.132856, -94.165482], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:36.116979, lng:-94.152807, dir:"3585 North Shiloh Drive, Johnson", tel:"+1 479-571-4697", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.126134, lng:-94.142929, dir:"4132 North College Avenue, Johnson", tel:"+1 479-443-0504", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:36.122903, lng:-94.148651, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:36.122791, lng:-94.146902, dir:"745 East Joyce Boulevard, Johnson", tel:"+1 479 435 6366", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"All Cats Clinic", cat:"vet", lat:36.107625, lng:-94.143567, dir:"3100 North College Avenue, Johnson", tel:"+1 479 571 1228", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Clinic", cat:"vet", lat:36.106795, lng:-94.144303, dir:"3045 North Market Avenue, Johnson", tel:"+1 479 521 5220", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Crossover Veterinary Clinic", cat:"vet", lat:36.136008, lng:-94.117345, dir:"3033 East Hearthstone Drive, Johnson", tel:"+1 479 750 7474", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "johnson-city-texas": {nombre:"Johnson City", centro:[30.277382, -98.409022], tz:"America/Chicago", lugares:[
  {n:"Deer Creek Veterinary Clinic", cat:"vet", lat:30.265109, lng:-98.395696, dir:"101 Heritage Drive, Johnson City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Reptilandia", cat:"zoo", lat:30.308466, lng:-98.394189, dir:"1859 North US Highway 281, Johnson City", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"The Exotic Resort Zoo", cat:"zoo", lat:30.331716, lng:-98.379362, dir:"235 Zoo Trail, Johnson City", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jonesboro": {nombre:"Jonesboro", centro:[35.834809, -90.70453], tz:"America/Chicago", lugares:[
  {n:"Bark Park", cat:"parque", lat:35.820724, lng:-90.710481, dir:"408 Parkview Street, Jonesboro", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Midtown Dog Park", cat:"parque", lat:35.831896, lng:-90.702335, dir:"1115 Cobb Street, Jonesboro", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:35.82215, lng:-90.67932, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.8307, lng:-90.678896, dir:"1207 South Caraway Road, Jonesboro", tel:"+1 870-802-3296", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Allied Animal ER", cat:"vet", lat:35.828813, lng:-90.672888, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hilltop Veterinary Hospital", cat:"vet", lat:35.856133, lng:-90.658027, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodsprings Animal Clinic", cat:"vet", lat:35.816299, lng:-90.72951, dir:"2408 Alexander Drive, Jonesboro", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jonestown-texas": {nombre:"Jonestown", centro:[30.495475, -97.923347], tz:"America/Chicago", lugares:[
  {n:"Whitestone Animal Hospital", cat:"vet", lat:30.513562, lng:-97.878646, dir:"3300 Woodall Drive, Jonestown", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "joshua": {nombre:"Joshua", centro:[32.461242, -97.388258], tz:"America/Chicago", lugares:[
  {n:"Animal Services", cat:"refugio", lat:32.46089, lng:-97.389933, dir:"100 Santa Fe Street, Joshua", tel:"+1-817-774-9450", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pines Pet Pampering", cat:"refugio", lat:32.482931, lng:-97.378824, dir:"609 North Broadway Street, Joshua", tel:"+1-817-875-0087", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Joshua Animal Clinic", cat:"vet", lat:32.484943, lng:-97.377851, dir:"635 North Broadway Street, Joshua", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petinary Services", cat:"vet", lat:32.462281, lng:-97.388803, dir:"115 North Main Street, Joshua", tel:"+1-817-526-5378", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Texas Coalition for Animal Protection", cat:"vet", lat:32.460909, lng:-97.383192, tel:"+19405665551", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "junction-texas": {nombre:"Junction", centro:[30.489355, -99.772011], tz:"America/Chicago", lugares:[
  {n:"Junction Veterinary Clinic", cat:"vet", lat:30.515887, lng:-99.769145, dir:"552 North US Highway 83, Junction", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Running V Veterinary Clinic", cat:"vet", lat:30.490096, lng:-99.766113, dir:"515 Pecan Street, Junction", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "justin": {nombre:"Justin", centro:[33.084844, -97.296129], tz:"America/Chicago", lugares:[
  {n:"Timberbrook Dog Park", cat:"parque", lat:33.105627, lng:-97.301812, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "katy": {nombre:"Katy", centro:[29.785785, -95.824396], tz:"America/Chicago", lugares:[
  {n:"City of Katy Dog Park", cat:"parque", lat:29.803464, lng:-95.817933, dir:"5418 Franz Road, Katy", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:29.757658, lng:-95.778155, dir:"1510 West Grand Parkway South, Katy", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cat Haven Lounge", cat:"refugio", lat:29.79307, lng:-95.771011, dir:"23015 Colonial Parkway, Katy", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K9 Resorts - Katy", cat:"refugio", lat:29.760215, lng:-95.7783, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grooming and Boarding", cat:"tienda", lat:29.799994, lng:-95.75265, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws of Fury", cat:"tienda", lat:29.732989, lng:-95.847265, dir:"4020 FM 4020, Katy", tel:"+18324376249", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.782752, lng:-95.715523, dir:"19945 Katy Freeway", tel:"+1 281-599-1125", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.777839, lng:-95.750233, dir:"513 South Mason Road, Katy", tel:"+1 281-647-9779", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.814663, lng:-95.76953, dir:"2844 West Grand Parkway North, Katy", tel:"+1 346-307-8133", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic", cat:"vet", lat:29.799888, lng:-95.752618, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fry Road Animal Clinic", cat:"vet", lat:29.798956, lng:-95.71992, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"NHVS-Katy", cat:"vet", lat:29.786029, lng:-95.711246, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Medical Center", cat:"vet", lat:29.712781, lng:-95.769898, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Thrive Affordible Vet Care", cat:"vet", lat:29.735619, lng:-95.809169, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Emergency Group", cat:"vet", lat:29.760239, lng:-95.777178, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kay-bee-heights": {nombre:"Kay Bee Heights", centro:[31.11715, -97.828097], tz:"America/Chicago", lugares:[
  {n:"Comanche Dog Park", cat:"parque", lat:31.146912, lng:-97.805843, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Steffey Kennels", cat:"refugio", lat:31.129257, lng:-97.808677, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pet Stop", cat:"tienda", lat:31.097125, lng:-97.805065, dir:"4110 Clear Creek Rd, Kay Bee Heights", tel:"+1 254-345-9973", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Fort Hood Veterinary Center", cat:"vet", lat:31.125739, lng:-97.793235, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "keller": {nombre:"Keller", centro:[32.929966, -97.227125], tz:"America/Chicago", lugares:[
  {n:"K9 Pointe", cat:"parque", lat:32.927502, lng:-97.230036, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Natural Grooming", cat:"peluqueria", lat:32.902433, lng:-97.196073, dir:"8415 Davis Boulevard, Keller", tel:"+1-817-605-0423", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:32.936445, lng:-97.184711, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Regional Animal Adoption Center", cat:"refugio", lat:32.929352, lng:-97.232849, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aquatic Dreams", cat:"tienda", lat:32.939788, lng:-97.267577, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:32.903337, lng:-97.195206, dir:"8500 North Tarrant Parkway, Keller", tel:"+1-817-605-9604", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.914447, lng:-97.28842, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.932389, lng:-97.227401, dir:"1006 Keller Parkway", tel:"+1 817-753-6790", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Cornerstone Animal Hospital", cat:"vet", lat:32.906342, lng:-97.193185, dir:"8632 Davis Boulevard, Keller", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Creekside 24/7 Pet Care", cat:"vet", lat:32.922374, lng:-97.185876, dir:"8830 Davis Boulevard, Keller", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Fort Worth Spay/Neuter Center", cat:"vet", lat:32.932086, lng:-97.276115, dir:"4941 Golden Triangle Boulevard, Keller", tel:"+1-817-562-2024", horas:[7.5, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"North Keller Veteranian", cat:"vet", lat:32.956229, lng:-97.25333, dir:"1240 North Main Street, Keller", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetCare Plus", cat:"vet", lat:32.912067, lng:-97.272069, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetVet360", cat:"vet", lat:32.936625, lng:-97.184375, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kennedale": {nombre:"Kennedale", centro:[32.646801, -97.225847], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"peluqueria", lat:32.648041, lng:-97.189669, dir:"5335 West Sublett Road, Kennedale", tel:"+1-682-808-4956", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Richter Animal Hospital", cat:"vet", lat:32.648477, lng:-97.181274, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Royal Pet Resort and Spa", cat:"vet", lat:32.648092, lng:-97.181527, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kenner": {nombre:"Kenner", centro:[29.994226, -90.241781], tz:"America/Chicago", lugares:[
  {n:"Bark Park", cat:"parque", lat:30.001375, lng:-90.208628, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Angel's Pet Grooming", cat:"peluqueria", lat:29.979196, lng:-90.222699, dir:"7939 Airline Drive, Kenner", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Poochi's Dog Groomers", cat:"peluqueria", lat:29.996571, lng:-90.240814, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"R-Tails-R-Waggin Too", cat:"peluqueria", lat:30.000127, lng:-90.240187, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aquatic Sealife", cat:"tienda", lat:30.003046, lng:-90.21905, dir:"7008 Veterans Memorial Boulevard, Kenner", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.006282, lng:-90.217044, dir:"6851 Veterans Memorial Boulevard, Kenner", tel:"+1 504-455-2222", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.020038, lng:-90.237696, dir:"3500 Williams Boulevard, Kenner", tel:"+1 504-469-1880", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Reef Geeks", cat:"tienda", lat:29.982592, lng:-90.212132, dir:"651 David Drive, Kenner", tel:"+1-504-733-8560", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dog Stop", cat:"tienda", lat:30.022809, lng:-90.255019, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chateau Veterinary", cat:"vet", lat:30.022254, lng:-90.258704, dir:"704 West Esplanade Avenue, Kenner", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Levy Veterinary Hospital", cat:"vet", lat:30.018571, lng:-90.234272, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Low Cost Vaccinations", cat:"vet", lat:30.006842, lng:-90.219859, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Metairie Small Animal Hospital", cat:"vet", lat:30.029866, lng:-90.240149, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Care Center", cat:"vet", lat:29.996894, lng:-90.218224, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kensett": {nombre:"Kensett", centro:[35.231752, -91.667636], tz:"America/Chicago", lugares:[
  {n:"Pet Sense", cat:"tienda", lat:35.251606, lng:-91.686133, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kermit": {nombre:"Kermit", centro:[31.8579, -103.093215], tz:"America/Chicago", lugares:[
  {n:"Kermit Animal Shelter", cat:"refugio", lat:31.843706, lng:-103.101806, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kerrville": {nombre:"Kerrville", centro:[30.048469, -99.139946], tz:"America/Chicago", lugares:[
  {n:"Lehmann Monroe Dog Park", cat:"parque", lat:30.040304, lng:-99.140901, dir:"200 Park Lane, Kerrville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Avenue", cat:"peluqueria", lat:30.045592, lng:-99.14696, dir:"204 Cully Drive, Kerrville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Freeman Fritts Animal Shelter", cat:"refugio", lat:30.020404, lng:-99.104256, dir:"515 Spur 100, Kerrville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kerr County Animal Control & Shelter", cat:"refugio", lat:30.026999, lng:-99.113795, dir:"3600 Veterans Highway, Kerrville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:30.042184, lng:-99.143333, dir:"305 Sidney Baker Street South, Kerrville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ark Veterinary Hospital", cat:"vet", lat:30.055718, lng:-99.155852, dir:"512 Lois Street North, Kerrville", tel:"+1-830-257-6949", horas:[8.0, 12.5], nota:"Dato de OpenStreetMap"},
  {n:"Kerr County Veterinary Clinic", cat:"vet", lat:30.045481, lng:-99.14709, dir:"204 Cully Drive, Kerrville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Leifeste Animal Hospital", cat:"vet", lat:30.031614, lng:-99.142833, dir:"1294 Bandera Highway, Kerrville", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kiefer": {nombre:"Kiefer", centro:[35.944766, -96.063843], tz:"America/Chicago", lugares:[
  {n:"Noah's Bed & Biscuit", cat:"refugio", lat:35.917394, lng:-96.059013, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kilgore-texas": {nombre:"Kilgore", centro:[32.386678, -94.875461], tz:"America/Chicago", lugares:[
  {n:"Meadowbrook Dog Park", cat:"parque", lat:32.378599, lng:-94.852888, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "killeen": {nombre:"Killeen", centro:[31.117144, -97.727796], tz:"America/Chicago", lugares:[
  {n:"Mickey's Dog Park", cat:"parque", lat:31.110444, lng:-97.713996, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"CTX Savage Pet Supply", cat:"tienda", lat:31.118321, lng:-97.694345, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"After Hours Veterinary Services", cat:"vet", lat:31.089273, lng:-97.720763, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:31.087854, lng:-97.719376, dir:"2500 Central Texas Expressway Frontage Road, Killeen", tel:"+1-254-526-4118", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Killeen Veterinary Clinic", cat:"vet", lat:31.108719, lng:-97.750688, dir:"1321 Pershing Drive, Killeen", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Town And Country", cat:"vet", lat:31.08301, lng:-97.742863, dir:"505 East Elms Road, Killeen", tel:"+1-254-634-0391", horas:[9.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "kingsville-texas": {nombre:"Kingsville", centro:[27.515869, -97.856109], tz:"America/Chicago", lugares:[
  {n:"Hubert Veterinary Hospital", cat:"vet", lat:27.506627, lng:-97.84179, dir:"2103 East Caesar Avenue, Kingsville", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kirby-texas": {nombre:"Kirby", centro:[29.461345, -98.38579], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:29.482827, lng:-98.351203, dir:"6206 Wood Glen Drive, Kirby", tel:"+1-210-666-0530", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "klein": {nombre:"Klein", centro:[30.04772, -95.532441], tz:"America/Chicago", lugares:[
  {n:"Bark Park", cat:"parque", lat:30.0471, lng:-95.568817, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Meyer Dog Park <25 Pounds", cat:"parque", lat:30.011737, lng:-95.518798, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stone Loch Dog Park", cat:"parque", lat:30.053282, lng:-95.582884, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Suds", cat:"peluqueria", lat:30.022869, lng:-95.52688, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blush & Brush", cat:"peluqueria", lat:30.042133, lng:-95.488635, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grooming Tails", cat:"peluqueria", lat:30.074468, lng:-95.498474, dir:"5200 FM 2920, Klein", tel:"+1-281-353-2815", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet suites", cat:"refugio", lat:30.025871, lng:-95.513973, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aquarium Fish", cat:"tienda", lat:30.030623, lng:-95.533757, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:30.034314, lng:-95.556192, dir:"18550 Champion Forest Drive, Klein", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.089059, lng:-95.518872, dir:"6545 North Grand Parkway West, Klein", tel:"+1 832-823-2414", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.010187, lng:-95.590613, dir:"22511 Tomball Parkway, Klein", tel:"+1 281-257-8780", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.078577, lng:-95.516006, dir:"21348 Kuykendahl Road, Klein", tel:"+1 281-288-2483", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.987064, lng:-95.496533, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.089152, lng:-95.518809, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Champions Forest Animal Clinic", cat:"vet", lat:29.980657, lng:-95.508356, dir:"5211z Cypress Creek Parkway, Klein", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Gosling Road Veterinary Clinic", cat:"vet", lat:30.093601, lng:-95.507404, dir:"22707 Gosling Road, Klein", tel:"+1-281-350-8488", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Northwest Animal Hospital", cat:"vet", lat:30.000282, lng:-95.475454, dir:"3031 Cypress Creek Parkway, Klein", tel:"+1-281-444-1084", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "krebs": {nombre:"Krebs", centro:[34.927875, -95.715822], tz:"America/Chicago", lugares:[
  {n:"Petsense", cat:"tienda", lat:34.916956, lng:-95.743845, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kyle-texas": {nombre:"Kyle", centro:[29.989282, -97.877174], tz:"America/Chicago", lugares:[
  {n:"Woofgang Bakery and Grooming", cat:"peluqueria", lat:30.016332, lng:-97.864252, dir:"5401 South FM 1626, Kyle", tel:"+1-512-256-5038", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PAWS Shelter of Central Texas", cat:"refugio", lat:29.980976, lng:-97.870095, dir:"500 Ranch Road 150 East, Kyle", tel:"+1-512-268-1611", horas:[12.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.011998, lng:-97.865648, dir:"5100 Kyle Center Drive", tel:"+1 512-268-7428", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Shaggy Dog Market", cat:"tienda", lat:29.989823, lng:-97.873241, dir:"22510 South Interstate 35, Kyle", tel:"+1-512-256-5809", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Kindred Animal Hospital", cat:"vet", lat:29.990021, lng:-97.873203, dir:"22510 South Interstate 35, Kyle", tel:"+1-737-208-0778", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Republic Veterinary Hospital", cat:"vet", lat:29.999334, lng:-97.861379, dir:"154 Elmhurst Drive, Kyle", tel:"+1-512-269-0738", horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"ZippiVet", cat:"vet", lat:30.010143, lng:-97.857081, dir:"5896 Kyle Parkway", tel:"+1-512-548-4041", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "la-porte-texas": {nombre:"La Porte", centro:[29.665784, -95.019373], tz:"America/Chicago", lugares:[
  {n:"La Porte Animal Shelter", cat:"refugio", lat:29.665324, lng:-95.06289, dir:"10901 Spencer Highway, La Porte", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Frontier Feed & Apparel", cat:"tienda", lat:29.664235, lng:-95.058343, dir:"11032 Spencer Highway, La Porte", tel:"+1-281-941-4647", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Shoreline Veterinary Clinic", cat:"vet", lat:29.664297, lng:-95.062757, dir:"10906 Spencer Highway, La Porte", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lafayette-louisiana": {nombre:"Lafayette", centro:[30.226219, -92.01782], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:30.158254, lng:-92.044935, dir:"111 Meadow Farm Road, Lafayette", tel:"+1 337-347-5642", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.266527, lng:-91.993912, dir:"3215 Louisiana Avenue, Lafayette", tel:"+1 337-232-5385", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.158174, lng:-92.053208, dir:"609 Settlers Trace Boulevard, Lafayette", tel:"+1 337-406-1791", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lake-charles": {nombre:"Lake Charles", centro:[30.23051, -93.216981], tz:"America/Chicago", lugares:[
  {n:"Hobo Hotel for Cats & Kittens", cat:"refugio", lat:30.190666, lng:-93.212022, dir:"650 East School Street, Lake Charles", tel:"+1-337-439-2428", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Area 337", cat:"resto", lat:30.21539, lng:-93.231874, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.196856, lng:-93.172848, dir:"3130 East Prien Lake Road, Lake Charles", tel:"+1 337-478-6459", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Lake Area Animal Hospital", cat:"vet", lat:30.190684, lng:-93.212449, dir:"630 East School Street, Lake Charles", tel:"+1-337-479-1199", horas:[7.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Pet Emergency Clinic", cat:"vet", lat:30.17579, lng:-93.243699, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-dallas": {nombre:"Lake Dallas", centro:[33.119287, -97.025564], tz:"America/Chicago", lugares:[
  {n:"Lake Dallas Animal Services", cat:"refugio", lat:33.133756, lng:-97.019376, dir:"687 North Lakeview Drive, Lake Dallas", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-jackson": {nombre:"Lake Jackson", centro:[29.033857, -95.434386], tz:"America/Chicago", lugares:[
  {n:"BASF Dog Park", cat:"parque", lat:29.025319, lng:-95.458339, dir:"151 Canna Lane, Lake Jackson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SPCA of Brazoria County", cat:"refugio", lat:29.02549, lng:-95.455069, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.043816, lng:-95.456701, dir:"104 State Highway 332 East, Lake Jackson", tel:"+1 979-299-1266", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.045706, lng:-95.456903, dir:"117 State Highway 332 East, Lake Jackson", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lakehills": {nombre:"Lakehills", centro:[29.584395, -98.948919], tz:"America/Chicago", lugares:[
  {n:"Lakehills Animal Health", cat:"vet", lat:29.610201, lng:-98.931164, dir:"8997 FM 1283, Lakehills", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lakeside-city": {nombre:"Lakeside City", centro:[33.82871, -98.545333], tz:"America/Chicago", lugares:[
  {n:"Wichita Falls Dog Park", cat:"parque", lat:33.849609, lng:-98.560184, dir:"5205 Fairway Boulevard, Lakeside City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.864076, lng:-98.53359, dir:"4319 Kemp Boulevard, Lakeside City", tel:"+1 940-692-6244", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lakeview-louisiana": {nombre:"Lakeview", centro:[30.004647, -90.108128], tz:"America/Chicago", lugares:[
  {n:"City Bark Dog Park", cat:"parque", lat:29.995226, lng:-90.096559, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jefferson Feed Pet and Garden Center", cat:"tienda", lat:29.976786, lng:-90.099224, horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.976782, lng:-90.095843, dir:"550 North Carrollton Avenue, Lakeview", tel:"+1 504-226-2030", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Canal Street Veterinary Hospital", cat:"vet", lat:29.973886, lng:-90.100193, dir:"4022 Canal Street, Lakeview", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"MSAH", cat:"vet", lat:30.019152, lng:-90.105217, dir:"734 Allen Toussaint Boulevard, Lakeview", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southshore Animal Hospital", cat:"vet", lat:30.018287, lng:-90.124025, dir:"213 Live Oak Street, Lakeview", tel:"+1-504-831-7724", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lampasas": {nombre:"Lampasas", centro:[31.064404, -98.18368], tz:"America/Chicago", lugares:[
  {n:"Cattles Pharmacy", cat:"farma", lat:31.068242, lng:-98.184419, dir:"202 North Key Avenue, Lampasas", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lampasas Veterinary Clinic", cat:"vet", lat:31.064844, lng:-98.155574, dir:"1940 Central Texas Expressway, Lampasas", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lancaster-texas": {nombre:"Lancaster", centro:[32.59208, -96.756108], tz:"America/Chicago", lugares:[
  {n:"Lancaster Dog Park", cat:"parque", lat:32.586228, lng:-96.759032, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lancaster Animal Shelter", cat:"refugio", lat:32.591963, lng:-96.750879, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lane-city": {nombre:"Lane City", centro:[29.216084, -96.026346], tz:"America/Chicago", lugares:[
  {n:"XT Ranch & Stables", cat:"refugio", lat:29.271393, lng:-96.023217, dir:"6510 Farm-to-Market Road 3012, Lane City", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "laredo-texas": {nombre:"Laredo", centro:[27.502495, -99.50613], tz:"America/Chicago", lugares:[
  {n:"Dr. Sandra Leyendecker Dog Park", cat:"parque", lat:27.519663, lng:-99.473362, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Duko's Dog Park", cat:"parque", lat:27.597793, lng:-99.475635, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K9 Kimmie's Corner", cat:"parque", lat:27.540066, lng:-99.511782, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:27.615334, lng:-99.467579, dir:"10816 International Boulevard, Laredo", tel:"+1 956-615-9858", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:27.609703, lng:-99.471201, dir:"2450 Monarch Drive, Laredo", tel:"+1 956-723-0671", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:27.549463, lng:-99.506608, dir:"5410 San Bernardo Avenue, Laredo", tel:"+1 956-796-0510", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Lamar Bruni Vergara Environmental Science Center", cat:"zoo", lat:27.509014, lng:-99.523529, dir:"Taylor Road, Laredo", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "las-quintas-fronterizas": {nombre:"Las Quintas Fronterizas", centro:[28.690533, -100.468686], tz:"America/Chicago", lugares:[
  {n:"Maverick County Animal Shelter", cat:"refugio", lat:28.719275, lng:-100.460895, dir:"3600 U.S. Highway 57 N, Las Quintas Fronterizas", tel:"+1 830-752-0305", horas:[7.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lawton-oklahoma": {nombre:"Lawton", centro:[34.605198, -98.395228], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.627306, lng:-98.495118, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:34.611709, lng:-98.387913, dir:"223 Northwest 2nd Street, Lawton", tel:"+1 580-355-1362", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Freeman Veterinary Clinic", cat:"vet", lat:34.615673, lng:-98.413901, dir:"1702 Northwest Ferris Avenue, Lawton", tel:"+1-580-280-2400", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "leachville": {nombre:"Leachville", centro:[35.937371, -90.258048], tz:"America/Chicago", lugares:[
  {n:"Barks-N-Bubbles", cat:"peluqueria", lat:35.937731, lng:-90.257828, dir:"106 South Main Street, Leachville", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "league-city": {nombre:"League City", centro:[29.507454, -95.09493], tz:"America/Chicago", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:29.488173, lng:-95.114917, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:29.48604, lng:-95.112904, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "leander": {nombre:"Leander", centro:[30.573613, -97.856734], tz:"America/Chicago", lugares:[
  {n:"Dog Ranch", cat:"parque", lat:30.597237, lng:-97.797733, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Morning Star Dog Park", cat:"parque", lat:30.649055, lng:-97.817897, dir:"101 Ridgeview Court, Leander", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rancho Sienna Dog Park", cat:"parque", lat:30.621913, lng:-97.810932, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fur Oak Professional Pet Grooming", cat:"peluqueria", lat:30.550211, lng:-97.853469, dir:"1904 South Bagdad Road, Leander", tel:"+1-512-975-8066", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:30.570302, lng:-97.848212, dir:"607 Leander Drive", tel:"+1-512-893-2313", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Texas Humane Heroes", cat:"refugio", lat:30.566417, lng:-97.808346, dir:"10930 East Crystal Falls Parkway, Leander", tel:"+1-512-260-3602", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.560343, lng:-97.847267, dir:"1401 South Highway 183, Leander", tel:"+1 512-778-7114", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Tomlinson's", cat:"tienda", lat:30.542867, lng:-97.864211, dir:"3421 North Lakeline Boulevard, Leander", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Emergency Animal Hospital", cat:"vet", lat:30.564683, lng:-97.819329, dir:"1660 Raider Way, Leander", tel:"+1-512-817-3474", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Firehouse Animal Health Center", cat:"vet", lat:30.543507, lng:-97.865641, dir:"3501 North Lakeline Boulevard, Leander", tel:"+1-512-980-2080", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Guardian Paws Animal Hospital", cat:"vet", lat:30.638848, lng:-97.817951, dir:"2025 Kauffman Loop, Leander", tel:"+1 512-688-8661", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Leander Veterinary Clinic", cat:"vet", lat:30.557322, lng:-97.859069, dir:"1300 South Bagdad Road, Leander", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Mercy Veterinary Hospital", cat:"vet", lat:30.612802, lng:-97.820494, dir:"18109 Ronald W Reagan Boulevard, Leander", tel:"+1-512-890-2000", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pointe 183 Animal Hospital", cat:"vet", lat:30.599252, lng:-97.857832, dir:"10861 183A Toll Road, Leander", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South San Gabriel Animal Clinic", cat:"vet", lat:30.595625, lng:-97.861428, dir:"4181 North Highway 183, Leander", tel:"+1-512-259-5980", horas:[8.0, 13.0], nota:"Dato de OpenStreetMap"}
 ]},
 "leesville": {nombre:"Leesville", centro:[31.143126, -93.265113], tz:"America/Chicago", lugares:[
  {n:"\"Perfect Paws\" Doggie Day Care", cat:"refugio", lat:31.138556, lng:-93.260875, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dr. Brandon DVM", cat:"vet", lat:31.143643, lng:-93.270013, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "leon-valley": {nombre:"Leon Valley", centro:[29.495231, -98.618632], tz:"America/Chicago", lugares:[
  {n:"Nani Falcone dog park", cat:"parque", lat:29.525273, lng:-98.64297, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Cut Above", cat:"peluqueria", lat:29.436216, lng:-98.683561, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSuites", cat:"refugio", lat:29.44637, lng:-98.661381, dir:"1123 Richland Hills Drive, Leon Valley", tel:"+1-726-400-9079", horas:[6.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.437317, lng:-98.646809, dir:"119 Southwest Loop 410, Leon Valley", tel:"+1 210-680-7710", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.430063, lng:-98.713904, dir:"415 West Loop 1604 South, Leon Valley", tel:"+1 726-444-2904", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.487577, lng:-98.590576, dir:"6055 La Cima, Leon Valley", tel:"+1 210-523-7995", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.476598, lng:-98.611475, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets Barn", cat:"tienda", lat:29.437283, lng:-98.680659, dir:"9722 Potranco Road, Leon Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Westover Hills", cat:"vet", lat:29.437504, lng:-98.68702, dir:"9919 Westover Bluff, Leon Valley", tel:"+1-210-680-5243", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Babcock Hills Veterinary Hospital", cat:"vet", lat:29.544218, lng:-98.61629, dir:"6600 Prue Road, Leon Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Covenant Care Animal Hospital, A Thrive Pet Healthcare Partner", cat:"vet", lat:29.492213, lng:-98.621415, dir:"6315 Grissom Road, Leon Valley", tel:"+1-210-684-2273", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ellison Drive Animal Hospital", cat:"vet", lat:29.418737, lng:-98.67766, dir:"1424 South Ellison Drive, Leon Valley", tel:"+1-210-670-8400", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Great Northwest Animal Hospital", cat:"vet", lat:29.48064, lng:-98.658635, dir:"8843 Grissom Road, Leon Valley", tel:"+1-210-681-4278", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Leon Valley Veterinary Clinic", cat:"vet", lat:29.49582, lng:-98.618635, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Potranco Veterinary Clinic", cat:"vet", lat:29.436115, lng:-98.705768, dir:"10839 Potranco Road, Leon Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"St. Francis of Assisi Veterinary Medical Center", cat:"vet", lat:29.446715, lng:-98.655814, dir:"8615 Potranco Road, Leon Valley", tel:"+1 210 509 8500", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Vanguard Veterinary Clinic", cat:"vet", lat:29.433913, lng:-98.705174, dir:"Potranco Road, Leon Valley", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "leonard-texas": {nombre:"Leonard", centro:[33.383546, -96.244497], tz:"America/Chicago", lugares:[
  {n:"Leonard Animal Clinic", cat:"vet", lat:33.378016, lng:-96.237588, dir:"400 South US Highway 69, Leonard", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "levelland": {nombre:"Levelland", centro:[33.587131, -102.377698], tz:"America/Chicago", lugares:[
  {n:"Downtown Dog Parlor", cat:"peluqueria", lat:33.584007, lng:-102.376888, dir:"802 9th Street, Levelland", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"College Avenue Animal Clinic", cat:"vet", lat:33.591318, lng:-102.367955, dir:"200 College Avenue, Levelland", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lewisville-texas": {nombre:"Lewisville", centro:[33.046233, -96.994174], tz:"America/Chicago", lugares:[
  {n:"Bark Park", cat:"parque", lat:33.06354, lng:-97.016222, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:33.022911, lng:-97.011664, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lewisville Railroad Dog Park", cat:"parque", lat:33.030625, lng:-96.973134, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws Park", cat:"parque", lat:33.015008, lng:-96.967848, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Groome Grooming", cat:"peluqueria", lat:33.01275, lng:-96.99167, dir:"101 East Corporate Drive, Lewisville", tel:"+1-469-469-1324", horas:[9.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Happy Nina Grooming", cat:"peluqueria", lat:33.039742, lng:-97.028562, tel:"+1-945-217-9483", horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Old Town Dog Groomers", cat:"peluqueria", lat:33.044784, lng:-96.994472, dir:"252 South Mill Street, Lewisville", tel:"+1-214-585-5553", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Canine Courtyard", cat:"refugio", lat:33.005376, lng:-97.014168, tel:"+1-972-752-8301", horas:[7.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Lewisville Animal Services", cat:"refugio", lat:33.036699, lng:-96.969267, horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSuites", cat:"refugio", lat:33.009822, lng:-96.978083, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:33.004875, lng:-96.985748, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.007053, lng:-96.975447, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.002948, lng:-96.981667, dir:"420 East Round Grove Road, Lewisville", tel:"+1 469-390-6993", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"ABC Veterinary Clinic", cat:"vet", lat:33.048441, lng:-97.021329, tel:"+1-972-353-9500", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.007045, lng:-96.975199, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Community Pet Outreach", cat:"vet", lat:33.040805, lng:-97.023404, dir:"1150 West Main Street, Lewisville", tel:"+19723539672", horas:[8.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Emergency Blue Pearl Pet Hospital", cat:"vet", lat:32.995855, lng:-96.965766, dir:"2700 Lake Vista Drive, Lewisville", tel:"+1 972-820-7099", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Garden Ridge Animal Hospital", cat:"vet", lat:33.045331, lng:-97.035619, dir:"349 Glencairn Lane, Lewisville", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Hebron Cat Hospital", cat:"vet", lat:33.023212, lng:-96.937266, dir:"1617 West Hebron Parkway, Lewisville", tel:"+1 972 394 9228", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Lewisville Animal Hospital", cat:"vet", lat:33.027246, lng:-97.009917, dir:"890 Bellaire Boulevard, Lewisville", tel:"+1 972-436-6518", horas:[7.5, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Spay Neuter Society", cat:"vet", lat:33.008997, lng:-97.027058, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lexington-texas": {nombre:"Lexington", centro:[30.415222, -97.009792], tz:"America/Chicago", lugares:[
  {n:"Lexington Animal Clinic", cat:"vet", lat:30.423679, lng:-97.00726, dir:"9036 United States Highway 77, Lexington", tel:"+1-979-773-4411", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "liberty-hill": {nombre:"Liberty Hill", centro:[30.664912, -97.922516], tz:"America/Chicago", lugares:[
  {n:"Dog Ranch at Liberty Hill", cat:"refugio", lat:30.66574, lng:-97.901751, dir:"13150 TX 29, Liberty Hill", tel:"+1 512-515-0499", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Comanche Trail Veterinary Center", cat:"vet", lat:30.673625, lng:-97.921422, dir:"14370 TX 29, Liberty Hill", tel:"+1 512-548-5065", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Liberty Hill Animal Hospital", cat:"vet", lat:30.663847, lng:-97.901744, dir:"13100 West State Highway 29, Liberty Hill", tel:"+1 512-885-3446", horas:[6.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Liberty Hill Veterinary Wellness", cat:"vet", lat:30.665809, lng:-97.908162, dir:"13575 West State Highway 29, Liberty Hill", tel:"+1 512-548-6412", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lindale": {nombre:"Lindale", centro:[32.515697, -95.4094], tz:"America/Chicago", lugares:[
  {n:"Lindale Pet Hospital", cat:"vet", lat:32.470669, lng:-95.376146, dir:"12677 County Road 472, Lindale", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lindale Veterinary Clinic", cat:"vet", lat:32.51248, lng:-95.439143, dir:"16366 FM 16 West, Lindale", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "little-rock": {nombre:"Little Rock", centro:[34.746507, -92.289627], tz:"America/Chicago", lugares:[
  {n:"Bark Bar & Grill", cat:"parque", lat:34.737538, lng:-92.275871, dir:"1201 South Spring Street, Little Rock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"MacArthur Unleashed Dog Park", cat:"parque", lat:34.735072, lng:-92.264562, dir:"Pulaski County Lane, Little Rock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SoMa Animal Clinic", cat:"vet", lat:34.736324, lng:-92.271132, dir:"200 East 13th Street, Little Rock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Little Rock Zoo", cat:"zoo", lat:34.746602, lng:-92.331428, dir:"1 Zoo Drive, Little Rock", tel:"+15016617200", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "live-oak-texas": {nombre:"Live Oak", centro:[29.562898, -98.333441], tz:"America/Chicago", lugares:[
  {n:"Universal City Dog Park", cat:"parque", lat:29.561491, lng:-98.324094, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.568061, lng:-98.38711, dir:"13909 Nacogdoches Road, Live Oak", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Universal City Animal Care & Control", cat:"vet", lat:29.560573, lng:-98.323887, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lockhart-texas": {nombre:"Lockhart", centro:[29.883211, -97.673629], tz:"America/Chicago", lugares:[
  {n:"Chisholm Trail Veterinary Clinic", cat:"vet", lat:29.862338, lng:-97.667844, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lockhart Animal Clinic", cat:"vet", lat:29.883083, lng:-97.706792, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "longview-texas": {nombre:"Longview", centro:[32.500703, -94.74049], tz:"America/Chicago", lugares:[
  {n:"Large Dog Park", cat:"parque", lat:32.534782, lng:-94.764389, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park Entrance", cat:"parque", lat:32.535549, lng:-94.763377, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park Exit", cat:"parque", lat:32.533956, lng:-94.76382, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:32.532527, lng:-94.764698, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Can Rover Come Over?", cat:"refugio", lat:32.502042, lng:-94.736804, dir:"606 North Fredonia Street, Longview", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Creature Comforts", cat:"refugio", lat:32.497624, lng:-94.774325, dir:"1600 West Cotton Street, Longview", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggie Doos and Stay Here Too", cat:"refugio", lat:32.531357, lng:-94.702323, dir:"2556 Alpine Road, Longview", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gindy's Pet Resort", cat:"refugio", lat:32.52346, lng:-94.743205, dir:"1611 Judson Road, Longview", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Style Canine Supply Company", cat:"tienda", lat:32.533102, lng:-94.742416, dir:"2002 Judson Road, Longview", tel:"+1-430-558-0214", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.549369, lng:-94.724703, dir:"3096 North Eastman Road, Longview", tel:"+1 903-663-0705", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.541895, lng:-94.756098, dir:"405 West Loop 281, Longview", tel:"+1 903-663-9442", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogwood Animal Hospital", cat:"vet", lat:32.545845, lng:-94.751221, dir:"106 West Hawkins Parkway, Longview", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East Texas Pet Emergency Clinic", cat:"vet", lat:32.516134, lng:-94.768345, dir:"812 Gilmer Road, Longview", tel:"+19037598545", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kimbrough Animal Hospital", cat:"vet", lat:32.523714, lng:-94.743136, dir:"1613 Judson Road, Longview", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lonoke": {nombre:"Lonoke", centro:[34.782387, -91.90189], tz:"America/Chicago", lugares:[
  {n:"Lonoke Animal Hospital", cat:"vet", lat:34.793797, lng:-91.897067, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lopezville": {nombre:"Lopezville", centro:[26.238294, -98.159515], tz:"America/Chicago", lugares:[
  {n:"Well Groomed Pets", cat:"peluqueria", lat:26.261025, lng:-98.218721, dir:"6500 North 10th Street, Lopezville", tel:"+1-956-533-7400", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:26.263997, lng:-98.168924, dir:"317 East Trenton Road, Lopezville", tel:"+1 956-287-0539", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Doctor 911", cat:"vet", lat:26.266716, lng:-98.219767, dir:"7017 North 10th Street, Lopezville", tel:"+1-956-683-7387", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "lowell": {nombre:"Lowell", centro:[36.255354, -94.130759], tz:"America/Chicago", lugares:[
  {n:"K9 Resorts Luxury Pet Hotel", cat:"refugio", lat:36.284874, lng:-94.164779, dir:"3707 West Southern Hills Boulevard, Lowell", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:36.281739, lng:-94.15032, dir:"4331 Pleasant Crossing Boulevard, Lowell", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Pets Animal Hospital", cat:"vet", lat:36.287047, lng:-94.165082, dir:"5301 Southern Hills Court, Lowell", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lower-ninth-ward": {nombre:"Lower Ninth Ward", centro:[29.968637, -90.014062], tz:"America/Chicago", lugares:[
  {n:"Villalobos Rescue Center", cat:"vet", lat:29.969599, lng:-90.028381, dir:"4525 North Claiborne Avenue, Lower Ninth Ward", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lubbock": {nombre:"Lubbock", centro:[33.585568, -101.847021], tz:"America/Chicago", lugares:[
  {n:"Canyon Run Dog Park", cat:"parque", lat:33.5931, lng:-101.836576, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hub City Unleashed Dog Park", cat:"parque", lat:33.554462, lng:-101.863215, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawsitively Purrfect", cat:"peluqueria", lat:33.545118, lng:-101.923587, dir:"5155 Aberdeen Avenue, Lubbock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Merlin's Pet Shop", cat:"tienda", lat:33.570064, lng:-101.874968, dir:"2609 Boston Avenue, Lubbock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets Plus", cat:"tienda", lat:33.535015, lng:-101.869817, dir:"6419 University Avenue, Lubbock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Walter's World of Pets", cat:"tienda", lat:33.563665, lng:-101.88011, dir:"3020 34th Street, Lubbock", tel:"+18067410123", horas:[11.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"82nd Street Veterinary Clinic", cat:"vet", lat:33.520079, lng:-101.890758, dir:"3502 82nd Street, Lubbock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Acres North Veterinary Hospital", cat:"vet", lat:33.583826, lng:-101.92333, dir:"5205 13th Street, Lubbock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bozeman Animal Clinic", cat:"vet", lat:33.561722, lng:-101.925138, dir:"3602 Slide Road, Lubbock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Key Animal Clinic", cat:"vet", lat:33.591149, lng:-101.957646, dir:"412 Milwaukee Avenue, Lubbock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kingsgate Animal Hospital", cat:"vet", lat:33.516263, lng:-101.904582, dir:"8415 Quaker Avenue, Lubbock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Live Oak Animal Hospital South", cat:"vet", lat:33.491973, lng:-101.888257, dir:"11302 Indiana Avenue, Lubbock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lubbock Animal Emergency Clinic", cat:"vet", lat:33.562922, lng:-101.920636, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pampered Paws", cat:"vet", lat:33.583784, lng:-101.92274, dir:"5201 13th Street, Lubbock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Plains Wildlife Rehabilitation Center", cat:"vet", lat:33.508664, lng:-101.887212, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southwest Animal Clinic", cat:"vet", lat:33.549179, lng:-101.914764, dir:"4808 50th Street, Lubbock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vet Center", cat:"vet", lat:33.549161, lng:-101.882055, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lucas-texas": {nombre:"Lucas", centro:[33.084285, -96.576658], tz:"America/Chicago", lugares:[
  {n:"Lucas Veterinary Hospital", cat:"vet", lat:33.094857, lng:-96.593069, dir:"800 Country Club Road, Lucas", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lufkin": {nombre:"Lufkin", centro:[31.338624, -94.728856], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:31.310218, lng:-94.720794, dir:"1905 Tulane Drive, Lufkin", tel:"+1 936-634-1116", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"East Texas Veterinary Clinic", cat:"vet", lat:31.311034, lng:-94.682513, dir:"3441 East Denman Avenue, Lufkin", tel:"+1 936 632 2042", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "luling": {nombre:"Luling", centro:[29.93215, -90.366469], tz:"America/Chicago", lugares:[
  {n:"Bayou Animal Clinic", cat:"vet", lat:29.909982, lng:-90.355171, dir:"75 Wade Street, Luling", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "macdona": {nombre:"Macdona", centro:[29.325464, -98.695185], tz:"America/Chicago", lugares:[
  {n:"LMR Memorial Dog Park", cat:"parque", lat:29.411149, lng:-98.720394, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "malvern-arkansas": {nombre:"Malvern", centro:[34.362582, -92.809269], tz:"America/Chicago", lugares:[
  {n:"Chez Fur Fiber Farm", cat:"zoo", lat:34.333427, lng:-92.796884, dir:"15470 State Highway 9, Malvern", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "manchaca": {nombre:"Manchaca", centro:[30.140769, -97.833055], tz:"America/Chicago", lugares:[
  {n:"The Watering Bowl", cat:"parque", lat:30.141044, lng:-97.829121, dir:"820 West FM 1626, Manchaca", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Manchaca Village Veterinary Care", cat:"vet", lat:30.141427, lng:-97.832785, dir:"12117 Manchaca Road", tel:"+1-512-282-1326", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mandeville": {nombre:"Mandeville", centro:[30.358231, -90.065748], tz:"America/Chicago", lugares:[
  {n:"Pelican Bark Park", cat:"parque", lat:30.360769, lng:-90.016243, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Adventure Pets", cat:"tienda", lat:30.394384, lng:-90.084858, dir:"3547 Highway 190, Mandeville", tel:"+1 985-951-8251", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mangum": {nombre:"Mangum", centro:[34.876142, -99.504509], tz:"America/Chicago", lugares:[
  {n:"Mangum Animal Shelter", cat:"refugio", lat:34.856243, lng:-99.498108, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "manila": {nombre:"Manila", centro:[35.878962, -90.166365], tz:"America/Chicago", lugares:[
  {n:"Groomindales", cat:"peluqueria", lat:35.879701, lng:-90.166076, dir:"204 Baltimore Avenue, Manila", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "manor-texas": {nombre:"Manor", centro:[30.342088, -97.555905], tz:"America/Chicago", lugares:[
  {n:"Manor Veterinary Hospital", cat:"vet", lat:30.348269, lng:-97.553361, dir:"11311 US Highway 290, Manor", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mansfield-texas": {nombre:"Mansfield", centro:[32.563487, -97.142031], tz:"America/Chicago", lugares:[
  {n:"Mans Best Field Dog Park", cat:"parque", lat:32.565568, lng:-97.149116, dir:"610 West Broad Street, Mansfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.586089, lng:-97.140414, dir:"1551 North Highway 287, Mansfield", tel:"+1 817-453-8229", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.596531, lng:-97.150684, dir:"2041 Highway 287 North, Mansfield", tel:"+1 682-518-8878", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Emergency Hospital of Mansfield", cat:"vet", lat:32.570348, lng:-97.1202, dir:"301 US 287 (TX), Mansfield", tel:"+1-817-473-7838", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Happy Paws", cat:"vet", lat:32.588013, lng:-97.167175, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marble-falls": {nombre:"Marble Falls", centro:[30.577751, -98.27565], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:30.592436, lng:-98.272131, dir:"2201 North US Highway 281, Marble Falls", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marion-arkansas": {nombre:"Marion", centro:[35.212983, -90.19498], tz:"America/Chicago", lugares:[
  {n:"City of Marion Animal Shelter", cat:"refugio", lat:35.196519, lng:-90.202272, dir:"1001 L H Polk Drive, Marion", tel:"+18707395412", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marrero": {nombre:"Marrero", centro:[29.899372, -90.100351], tz:"America/Chicago", lugares:[
  {n:"Zeus' Place", cat:"refugio", lat:29.935179, lng:-90.105438, dir:"4601 Freret, Marrero", tel:"+1 504-304-4718", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.91602, lng:-90.115133, dir:"5300 Tchoupitoulas Street, Marrero", tel:"+1 504-899-6122", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Crescent City Veterinary Hospital", cat:"vet", lat:29.917085, lng:-90.116472, dir:"524 Jefferson Avenue, Marrero", tel:"+1 504-894-0752", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "maumelle": {nombre:"Maumelle", centro:[34.856613, -92.405686], tz:"America/Chicago", lugares:[
  {n:"Westrock Animal Hospital", cat:"vet", lat:34.799903, lng:-92.437194, dir:"14104 Taylor Loop Road, Maumelle", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "maurice-louisiana": {nombre:"Maurice", centro:[30.108537, -92.124569], tz:"America/Chicago", lugares:[
  {n:"Carson Animal Hospital", cat:"vet", lat:30.153904, lng:-92.089988, dir:"6701 Johnston Street, Maurice", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mcalester": {nombre:"McAlester", centro:[34.933498, -95.769793], tz:"America/Chicago", lugares:[
  {n:"Christy's Paws & Claws", cat:"peluqueria", lat:34.934221, lng:-95.772452, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mcallen": {nombre:"McAllen", centro:[26.204114, -98.23006], tz:"America/Chicago", lugares:[
  {n:"Best in Show Pet Salon & Retreat", cat:"peluqueria", lat:26.217336, lng:-98.222223, dir:"500 Pecan Boulevard, McAllen", tel:"+1-956-928-1147", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws Paradise", cat:"tienda", lat:26.18405, lng:-98.235776, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:26.18589, lng:-98.217876, dir:"420 East Expressway 83, McAllen", tel:"+1 956-618-2203", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"The PAWsh sWAG", cat:"tienda", lat:26.187924, lng:-98.23659, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mckinney": {nombre:"McKinney", centro:[33.19765, -96.615447], tz:"America/Chicago", lugares:[
  {n:"Dog Splash Pad", cat:"parque", lat:33.19741, lng:-96.662555, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Area", cat:"parque", lat:33.197411, lng:-96.662779, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.219232, lng:-96.65782, dir:"3550 West University Drive, McKinney", tel:"+1 214-250-5078", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"380 West Animal Hospital", cat:"vet", lat:33.21863, lng:-96.675108, dir:"4660 West University Drive, McKinney", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Shot Spot", cat:"vet", lat:33.197978, lng:-96.635474, dir:"1827 West Louisiana Street, McKinney", tel:"+1 844-738-7468", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet - McKinney", cat:"vet", lat:33.21597, lng:-96.634346, dir:"1717 West University Drive, McKinney", tel:"+1-469-678-8484", horas:[15.0, 23.0], nota:"Dato de OpenStreetMap"}
 ]},
 "meadowlakes": {nombre:"Meadowlakes", centro:[30.562412, -98.296412], tz:"America/Chicago", lugares:[
  {n:"VitalPet - Hope Animal Clinic", cat:"vet", lat:30.513175, lng:-98.291659, dir:"4015 South US Highway 281, Meadowlakes", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "meadows-place": {nombre:"Meadows Place", centro:[29.651344, -95.588001], tz:"America/Chicago", lugares:[
  {n:"Millie Bush Bark Park", cat:"parque", lat:29.726195, lng:-95.668781, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barking Pet Spa", cat:"peluqueria", lat:29.706604, lng:-95.554913, dir:"9968 Bellaire Boulevard, Meadows Place", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Power Groomers", cat:"peluqueria", lat:29.672521, lng:-95.644119, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Camp", cat:"refugio", lat:29.647749, lng:-95.618026, dir:"1822 Eldridge Road, Meadows Place", tel:"+18328157154", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.733597, lng:-95.625247, dir:"2610 Eldridge Parkway, Meadows Place", tel:"+1 281-596-0535", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.680207, lng:-95.641306, dir:"9151 Highway 6 South, Meadows Place", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alief Animal Hospital", cat:"vet", lat:29.698556, lng:-95.587403, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:29.733703, lng:-95.625033, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "melissa": {nombre:"Melissa", centro:[33.286245, -96.572241], tz:"America/Chicago", lugares:[
  {n:"Old Joe Dog Park", cat:"parque", lat:33.284343, lng:-96.614059, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Paradise Resort", cat:"refugio", lat:33.274063, lng:-96.543442, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "menard": {nombre:"Menard", centro:[30.920491, -99.783746], tz:"America/Chicago", lugares:[
  {n:"Menard Animal Clinic", cat:"vet", lat:30.938795, lng:-99.782122, dir:"1553 North US Highway 83, Menard", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "menifee": {nombre:"Menifee", centro:[35.148157, -92.55262], tz:"America/Chicago", lugares:[
  {n:"Conway Animal Services", cat:"refugio", lat:35.113445, lng:-92.507045, dir:"4560 Old Morrilton Highway, Menifee", tel:"+1-501-450-6160", horas:[12.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "merkel": {nombre:"Merkel", centro:[32.468588, -100.014347], tz:"America/Chicago", lugares:[
  {n:"Merkel Veterinary Clinic", cat:"vet", lat:32.481436, lng:-100.011156, dir:"1226 FM 126, Merkel", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mesquite-texas": {nombre:"Mesquite", centro:[32.76661, -96.599472], tz:"America/Chicago", lugares:[
  {n:"Copeland Dog Park", cat:"parque", lat:32.747359, lng:-96.56192, dir:"2757 Creek Crossing Road, Mesquite", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Leash Free Zone at Town East Park", cat:"parque", lat:32.807123, lng:-96.638749, dir:"2724 North Town East Boulevard, Mesquite", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Paws Spa", cat:"peluqueria", lat:32.765724, lng:-96.586964, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Polished Pooches", cat:"peluqueria", lat:32.787205, lng:-96.597041, dir:"1830 Range Drive, Mesquite", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"White Rock Pet Grooming", cat:"peluqueria", lat:32.820477, lng:-96.680062, dir:"9777 Ferguson Road, Mesquite", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mesquite Animal Shelter", cat:"refugio", lat:32.78639, lng:-96.629325, dir:"1650 Gross Road, Mesquite", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.794501, lng:-96.627955, dir:"19175 Lyndon B Johnson Freeway, Mesquite", tel:"+1 972-686-3990", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Creek Crossing Animal Clinic", cat:"vet", lat:32.743686, lng:-96.553775, dir:"1935 Faithon P Lucas Senior Boulevard, Mesquite", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rodeo Drive Veterinary Hospital", cat:"vet", lat:32.763267, lng:-96.626133, dir:"1919 Rodeo Drive, Mesquite", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Mesquite Veterinary Hospital", cat:"vet", lat:32.760798, lng:-96.597538, dir:"615 South Bryan - Belt Line Road, Mesquite", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Town East Animal Hospital", cat:"vet", lat:32.785524, lng:-96.628348, dir:"1600 Gross Road, Mesquite", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "metairie": {nombre:"Metairie", centro:[29.989993, -90.150543], tz:"America/Chicago", lugares:[
  {n:"Pontiff Dog Park", cat:"parque", lat:29.982955, lng:-90.136499, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A-1 Pet Grooming", cat:"peluqueria", lat:29.994979, lng:-90.191729, tel:"+1-504-454-0253", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:29.972486, lng:-90.124865, dir:"9501 Airline Drive, Metairie", tel:"+1-504-291-2777", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dog Stop", cat:"refugio", lat:30.004827, lng:-90.194339, dir:"3201 Transcontinental Drive, Metairie", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jefferson Feed", cat:"tienda", lat:30.004482, lng:-90.151908, dir:"2949 Veterans Memorial Boulevard, Metairie", tel:"+1-504-875-4810", horas:[8.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.002827, lng:-90.160937, dir:"3520 Veterans Memorial Boulevard, Metairie", tel:"+1 504-454-0468", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical & Surgical Hospital", cat:"vet", lat:30.005284, lng:-90.154682, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Avian & Exotic Animal Hospital", cat:"vet", lat:29.9984, lng:-90.164087, dir:"3635 I-10 Service Road, Metairie", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Causeway Animal Hospital", cat:"vet", lat:29.984733, lng:-90.155515, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"MedVet", cat:"vet", lat:29.995115, lng:-90.154225, dir:"2315 North Causeway Boulevard, Metairie", tel:"+1 504-835-8508", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "miami-oklahoma": {nombre:"Miami", centro:[36.874618, -94.877374], tz:"America/Chicago", lugares:[
  {n:"The Pet Sitters Professional Pet Sitting", cat:"refugio", lat:36.893579, lng:-94.862683, tel:"+1-918-544-6911", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "midland-texas": {nombre:"Midland", centro:[31.997366, -102.077948], tz:"America/Chicago", lugares:[
  {n:"Campgrounds Dog Park #1", cat:"parque", lat:31.961186, lng:-102.125843, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Campgrounds Dog Park #2", cat:"parque", lat:31.962193, lng:-102.124282, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hogan Large Dog Park", cat:"parque", lat:32.036764, lng:-102.073369, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hogan Small Dog Park", cat:"parque", lat:32.036297, lng:-102.073264, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waggin Tails Dog Park", cat:"parque", lat:31.966657, lng:-102.136984, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greenbelt Animal Hospital", cat:"vet", lat:32.04047, lng:-102.130449, dir:"5000 North Midkiff Road, Midland", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shannon Animal Hospital", cat:"vet", lat:32.030591, lng:-102.083393, dir:"3400 North Big Spring Street, Midland", tel:"+1-432-683-3001", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Town and Country Veterinary Hospital", cat:"vet", lat:32.033294, lng:-102.133445, dir:"3408 West Loop 250 North, Midland", tel:"+1-432-520-4427", horas:[8.5, 12.0], nota:"Dato de OpenStreetMap"}
 ]},
 "midlothian-texas": {nombre:"Midlothian", centro:[32.482361, -96.994449], tz:"America/Chicago", lugares:[
  {n:"City Of Midlothian Dog Park", cat:"parque", lat:32.469696, lng:-97.004493, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.460571, lng:-96.991602, dir:"2000 FM 663, Midlothian", tel:"+1 469-672-8039", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "midwest-city": {nombre:"Midwest City", centro:[35.44951, -97.396703], tz:"America/Chicago", lugares:[
  {n:"Fred Quinn Happy Tails Dog Park", cat:"parque", lat:35.463525, lng:-97.381769, dir:"East Reno Avenue, Midwest City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.437433, lng:-97.401422, dir:"7177 Southeast 29th Street, Midwest City", tel:"+1 405-732-7861", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"vet", lat:35.435689, lng:-97.375563, dir:"8701 Southeast 29th Street, Midwest City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Reno Animal Hospital", cat:"vet", lat:35.46362, lng:-97.41401, dir:"6400 East Reno Avenue, Midwest City", tel:"+1-405-733-3346", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "minden-louisiana": {nombre:"Minden", centro:[32.615428, -93.286835], tz:"America/Chicago", lugares:[
  {n:"Buffington Veterinary Hospital", cat:"vet", lat:32.622236, lng:-93.265844, dir:"805 Homer Road, Minden", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mineola-texas": {nombre:"Mineola", centro:[32.663339, -95.488031], tz:"America/Chicago", lugares:[
  {n:"Pet Dynasty", cat:"peluqueria", lat:32.660454, lng:-95.478455, dir:"814 East Broad Street, Mineola", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yee Haw Grooming", cat:"peluqueria", lat:32.664059, lng:-95.489992, dir:"130 West Broad Street, Mineola", tel:"+1 430-287-0292", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"APET SPCA of East Texas", cat:"refugio", lat:32.673187, lng:-95.528334, dir:"657 County Road 2840, Mineola", tel:"+1 903-638-6902", horas:[11.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Mineola Animal Shelter", cat:"refugio", lat:32.652956, lng:-95.481988, dir:"965 Baker Street, Mineola", tel:"+1-903-569-2252; +1 903-569-6294", horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Lake Country Animal Clinic", cat:"vet", lat:32.683213, lng:-95.501943, dir:"1124 West Loop 564, Mineola", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mineral-wells": {nombre:"Mineral Wells", centro:[32.809173, -98.112918], tz:"America/Chicago", lugares:[
  {n:"Mineral Wells Animal Shelter", cat:"refugio", lat:32.783521, lng:-98.109716, tel:"+1-940-328-7752", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mineral Wells Vet Clinic", cat:"vet", lat:32.833666, lng:-98.108082, dir:"3400 US-281, Mineral Wells", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Western Animal Hospital", cat:"vet", lat:32.811183, lng:-98.056994, dir:"6701 East US 180, Mineral Wells", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mission-texas": {nombre:"Mission", centro:[26.215907, -98.325293], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:26.197045, lng:-98.280931, dir:"2519 East Expressway 83, Mission", tel:"+1 956-682-9217", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "montgomery-texas": {nombre:"Montgomery", centro:[30.388261, -95.696336], tz:"America/Chicago", lugares:[
  {n:"K-9 Kuts", cat:"peluqueria", lat:30.389478, lng:-95.695917, tel:"+1-936-597-7442", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supply Plus", cat:"tienda", lat:30.387643, lng:-95.674982, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bridgeway Animal Care", cat:"vet", lat:30.437562, lng:-95.613862, dir:"17156 FM 1097, Montgomery", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "moore-oklahoma": {nombre:"Moore", centro:[35.338325, -97.486705], tz:"America/Chicago", lugares:[
  {n:"Happy Tails Dog Park", cat:"parque", lat:35.349625, lng:-97.462996, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City of Moore Animal Shelter and Adoption Center", cat:"refugio", lat:35.303881, lng:-97.488641, dir:"3500 I-35 E Service Rd, Moore", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A1 Pet Emporium", cat:"tienda", lat:35.350895, lng:-97.531401, dir:"11649 South Western Avenue, Moore", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"EarthWise Pet", cat:"tienda", lat:35.362765, lng:-97.568744, dir:"3000 Southwest 104th Street, Moore", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.318448, lng:-97.487233, dir:"2100 S I-35 Service Rd, Moore", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ranchwood Veterinary Hospital", cat:"vet", lat:35.363061, lng:-97.512529, dir:"10505 South Santa Fe Avenue, Moore", tel:"+1 405 794 5551", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spray Perts", cat:"vet", lat:35.334891, lng:-97.511706, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "morrilton": {nombre:"Morrilton", centro:[35.154026, -92.742927], tz:"America/Chicago", lugares:[
  {n:"Rohlman Animal Hospital", cat:"vet", lat:35.171585, lng:-92.719633, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mount-pleasant-texas": {nombre:"Mount Pleasant", centro:[33.157058, -94.969401], tz:"America/Chicago", lugares:[
  {n:"PetSense", cat:"tienda", lat:33.149149, lng:-94.970484, dir:"676 South Jefferson Avenue, Mount Pleasant", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mountain-city-texas": {nombre:"Mountain City", centro:[30.038116, -97.890915], tz:"America/Chicago", lugares:[
  {n:"Kyle Animal Hospital", cat:"vet", lat:30.014951, lng:-97.890751, dir:"100 Hall Professional Center, Mountain City", tel:"+1-512-268-5003", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "murphy-texas": {nombre:"Murphy", centro:[33.015121, -96.613048], tz:"America/Chicago", lugares:[
  {n:"Murphy Animal Shelter", cat:"refugio", lat:33.016411, lng:-96.614857, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.00893, lng:-96.591684, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Murphy Veterinary Hospital", cat:"vet", lat:33.010639, lng:-96.613419, tel:"+1-972-633-9999", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"}
 ]},
 "muskogee": {nombre:"Muskogee", centro:[35.747877, -95.369691], tz:"America/Chicago", lugares:[
  {n:"Coody Creek Bark Park", cat:"parque", lat:35.737644, lng:-95.377223, dir:"1121 South 2nd Street, Muskogee", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Town & Country Pup", cat:"peluqueria", lat:35.746919, lng:-95.340628, dir:"701 North York Street, Muskogee", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws Promoting Animal Welfare", cat:"refugio", lat:35.749884, lng:-95.308966, dir:"4321 East Hayes Street, Muskogee", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.770927, lng:-95.369835, dir:"936 West Shawnee Street, Muskogee", tel:"+1 918-686-6374", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Center", cat:"vet", lat:35.757784, lng:-95.340656, dir:"1301 North York Street, Muskogee", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Honor Heights Veterinary Clinic", cat:"vet", lat:35.754677, lng:-95.412604, dir:"4011 West Okmulgee Avenue, Muskogee", tel:"+1 918 682 6652", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Northside Veterinary Clinic", cat:"vet", lat:35.773549, lng:-95.357942, dir:"2320 North Main Street, Muskogee", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Papilion", cat:"zoo", lat:35.769772, lng:-95.418533, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nacogdoches": {nombre:"Nacogdoches", centro:[31.603732, -94.65597], tz:"America/Chicago", lugares:[
  {n:"Large Dogs", cat:"parque", lat:31.610102, lng:-94.656689, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nacogdoches Dog Park", cat:"parque", lat:31.610048, lng:-94.656802, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dogs", cat:"parque", lat:31.610051, lng:-94.657018, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSense", cat:"tienda", lat:31.650592, lng:-94.656253, dir:"4909 North Street, Nacogdoches", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nash-texas": {nombre:"Nash", centro:[33.442546, -94.130578], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.458244, lng:-94.090235, dir:"117 Richmond Ranch Road, Nash", tel:"+1 903-832-0244", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pleasant Grove Animal Hospital", cat:"vet", lat:33.464034, lng:-94.096324, dir:"4307 McKnight Road, Nash", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rankin Veterinary Clinic", cat:"vet", lat:33.452757, lng:-94.127029, dir:"6229 Mall Drive, Nash", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nassau-bay": {nombre:"Nassau Bay", centro:[29.544675, -95.091041], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:29.573172, lng:-95.107748, dir:"2410 Bay Area Boulevard, Nassau Bay", tel:"+1 281-480-3442", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Veterinarians.org", cat:"vet", lat:29.543488, lng:-95.06396, dir:"2600 South Shore Boulevard, Nassau Bay", tel:"+1-844-478-0303", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "natchitoches": {nombre:"Natchitoches", centro:[31.760673, -93.086021], tz:"America/Chicago", lugares:[
  {n:"PetStar", cat:"vet", lat:31.753213, lng:-93.068927, dir:"820 Keyser Ave, Natchitoches", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nederland-texas": {nombre:"Nederland", centro:[29.97438, -93.992396], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:29.945083, lng:-93.996524, dir:"8735 Memorial Boulevard, Nederland", tel:"+1 409-724-1853", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "new-braunfels": {nombre:"New Braunfels", centro:[29.702827, -98.125735], tz:"America/Chicago", lugares:[
  {n:"Puppy Playland Dog Park", cat:"parque", lat:29.696347, lng:-98.155491, dir:"1240 Landa Street, New Braunfels", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Comal Pet Hospital & Resort", cat:"refugio", lat:29.70161, lng:-98.091437, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.728009, lng:-98.069749, dir:"315 Creekside Way, New Braunfels", tel:"+1 830-620-7738", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.682513, lng:-98.133382, dir:"1671 Interstate 35 South, New Braunfels", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"County Line Veterinary Clinic", cat:"vet", lat:29.679102, lng:-98.121997, dir:"1445 South Walnut Avenue, New Braunfels", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-iberia": {nombre:"New Iberia", centro:[30.003536, -91.818729], tz:"America/Chicago", lugares:[
  {n:"Raising Cane's Dog Park", cat:"parque", lat:30.002917, lng:-91.807729, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.98453, lng:-91.821634, dir:"1102 East Admiral Doyle Drive, New Iberia", tel:"+1 337-606-4591", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "new-llano": {nombre:"New Llano", centro:[31.114083, -93.278047], tz:"America/Chicago", lugares:[
  {n:"Pet Sense", cat:"peluqueria", lat:31.117939, lng:-93.271712, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-orleans": {nombre:"New Orleans", centro:[29.957466, -90.062949], tz:"America/Chicago", lugares:[
  {n:"The Dog House", cat:"parque", lat:29.963251, lng:-90.090848, dir:"2736 Banks Street, New Orleans", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Market", cat:"peluqueria", lat:29.966706, lng:-90.045288, horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:29.972288, lng:-90.091081, dir:"3301 Conti Street, New Orleans", horas:[6.5, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Cresent City Cat Club", cat:"tienda", lat:29.968143, lng:-90.055365, dir:"1021 Marigny Street, New Orleans", tel:"+1 833-665-2228", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.940592, lng:-90.09525, dir:"2900 South Claiborne Avenue, New Orleans", tel:"+1 504-249-6305", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Southern Paws", cat:"tienda", lat:29.957157, lng:-90.065228, dir:"633 Toulouse Street, New Orleans", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"French Quarter Vet", cat:"vet", lat:29.960021, lng:-90.062846, dir:"922 Royal St, New Orleans", tel:"+1 504 3227030", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Care Center", cat:"vet", lat:29.965097, lng:-90.062641, dir:"938 Esplanade Avenue, New Orleans", tel:"+1 504-522-2997", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Audubon Insectarium", cat:"zoo", lat:29.951359, lng:-90.063318, dir:"403 Canal Street, New Orleans", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "new-roads": {nombre:"New Roads", centro:[30.693253, -91.434298], tz:"America/Chicago", lugares:[
  {n:"False River Veternary Clinic", cat:"vet", lat:30.687499, lng:-91.46709, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "newcastle-oklahoma": {nombre:"Newcastle", centro:[35.247287, -97.59976], tz:"America/Chicago", lugares:[
  {n:"Dirty Dogs Grooming", cat:"peluqueria", lat:35.259151, lng:-97.599956, dir:"1220 North Main Street, Newcastle", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Maness Veterinary Services", cat:"vet", lat:35.211044, lng:-97.606598, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Newcastle Animal Hospital", cat:"vet", lat:35.246057, lng:-97.600693, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Professional Animal Health Center", cat:"vet", lat:35.225269, lng:-97.601012, dir:"2005 South Main Street, Newcastle", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nichols-hills": {nombre:"Nichols Hills", centro:[35.550886, -97.548932], tz:"America/Chicago", lugares:[
  {n:"OK PAW Park", cat:"parque", lat:35.547218, lng:-97.575376, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Dynasty Grooming", cat:"peluqueria", lat:35.546759, lng:-97.566115, dir:"7515 North May Avenue, Nichols Hills", tel:"+1 405 602 3004", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Grooming Bark Avenue", cat:"peluqueria", lat:35.549848, lng:-97.56527, dir:"North May Avenue, Nichols Hills", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Soi's Pet Salon", cat:"peluqueria", lat:35.551748, lng:-97.565222, dir:"7912 North May Avenue, Nichols Hills", tel:"+1 405 607 2805", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"OK Humane Society Adoption Center", cat:"refugio", lat:35.547779, lng:-97.529291, dir:"7500 North Western Avenue, Nichols Hills", tel:"+1 405 286 1229", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Exotic Pets", cat:"tienda", lat:35.541231, lng:-97.566191, dir:"6907 North May Avenue, Nichols Hills", tel:"+1-405-849-6486", horas:[12.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:35.537572, lng:-97.531279, dir:"6413 Avondale Drive, Nichols Hills", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Petsmart", cat:"tienda", lat:35.535469, lng:-97.567139, dir:"2932 Northwest 63rd Street, Nichols Hills", tel:"+1 405-843-0763", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:35.54633, lng:-97.566173, dir:"7501 North May Avenue, Nichols Hills", tel:"+1 405 842 9910", horas:[9.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.535597, lng:-97.567304, dir:"2932 Northwest 63rd Street, Nichols Hills", tel:"+1 405 848 8387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"May Avenue Animal Hospital", cat:"vet", lat:35.544823, lng:-97.565217, dir:"7324 North May Avenue, Nichols Hills", tel:"+1 405 843 5572", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "nicoma-park": {nombre:"Nicoma Park", centro:[35.491178, -97.323094], tz:"America/Chicago", lugares:[
  {n:"Boulevard at Lakeside Dog Park", cat:"parque", lat:35.449497, lng:-97.330565, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "noble-oklahoma": {nombre:"Noble", centro:[35.14209, -97.393225], tz:"America/Chicago", lugares:[
  {n:"Varsity House Dog Park", cat:"parque", lat:35.178848, lng:-97.417552, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shaggy Chic", cat:"peluqueria", lat:35.146868, lng:-97.395496, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nolanville": {nombre:"Nolanville", centro:[31.078789, -97.605569], tz:"America/Chicago", lugares:[
  {n:"CEN-TEX Humane Society", cat:"vet", lat:31.087678, lng:-97.555568, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "norco-louisiana": {nombre:"Norco", centro:[29.999092, -90.412304], tz:"America/Chicago", lugares:[
  {n:"Bonnet Carré Kennels", cat:"refugio", lat:30.041491, lng:-90.443026, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "norman-oklahoma": {nombre:"Norman", centro:[35.222572, -97.439482], tz:"America/Chicago", lugares:[
  {n:"Anatole at Norman Dog Park", cat:"parque", lat:35.26128, lng:-97.496484, dir:"3700 West Tecumseh Road, Norman", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Norman Community Dog Park", cat:"parque", lat:35.238079, lng:-97.42726, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ruby Grant Dog Park", cat:"parque", lat:35.270393, lng:-97.4872, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Norman Animal Welfare Center", cat:"refugio", lat:35.178136, lng:-97.442028, dir:"3428 Jenkins Avenue, Norman", tel:"+1 405 292 9736", horas:[10.0, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Cat’s Critters", cat:"tienda", lat:35.217886, lng:-97.450538, dir:"526 West Main Street, Norman", tel:"+1-405-857-2586", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.210011, lng:-97.484986, dir:"660 Ed Noble Parkway, Norman", tel:"+1 405-329-9747", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.239184, lng:-97.483973, dir:"1670 24th Avenue Northwest, Norman", tel:"+1 405-579-0487", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:35.232336, lng:-97.496776, dir:"3770 West Robinson Street, Norman", tel:"+1 405-321-8686", horas:[9.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"McGee Animal Hospital", cat:"vet", lat:35.204663, lng:-97.468256, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Norman Vetinary Hospital", cat:"vet", lat:35.232619, lng:-97.441428, dir:"1130 North Porter Avenue, Norman", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"University Animal Hospital", cat:"vet", lat:35.202991, lng:-97.422355, dir:"1218 Lindsey Plaza Drive, Norman", tel:"+1-405-907-2161", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westwood Veterinary Hospital", cat:"vet", lat:35.219232, lng:-97.467959, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-enid": {nombre:"North Enid", centro:[36.435589, -97.868947], tz:"America/Chicago", lugares:[
  {n:"Sir Mortimer's and Jazzie's Dog Park", cat:"parque", lat:36.432672, lng:-97.893694, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-little-rock": {nombre:"North Little Rock", centro:[34.769536, -92.267094], tz:"America/Chicago", lugares:[
  {n:"Park Hill Pet Clinic", cat:"vet", lat:34.781534, lng:-92.265754, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oak-ridge-north": {nombre:"Oak Ridge North", centro:[30.160216, -95.444383], tz:"America/Chicago", lugares:[
  {n:"Best Friends Pet Resort & Spa", cat:"refugio", lat:30.153531, lng:-95.449503, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.128237, lng:-95.451206, dir:"522 Sawdust Road, Oak Ridge North", tel:"+1 281-292-7801", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Veterinary Hospital / Drive-thru Pet Pharmacy", cat:"vet", lat:30.154299, lng:-95.449607, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oak Ridge Animal Clinic", cat:"vet", lat:30.147607, lng:-95.446423, dir:"26446 Interstate 45 North Frontage Road, Oak Ridge North", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oak-ridge-texas": {nombre:"Oak Ridge", centro:[33.648163, -97.038342], tz:"America/Chicago", lugares:[
  {n:"Carol Dixon Cat Grooming", cat:"peluqueria", lat:33.611168, lng:-97.036323, dir:"46 County Road 219, Oak Ridge", tel:"+1-940-665-3343", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "odessa-texas": {nombre:"Odessa", centro:[31.845715, -102.367687], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:31.888444, lng:-102.352451, dir:"2022 East 42nd Street, Odessa", tel:"+1 432-362-1614", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Ark Animal Hospital", cat:"vet", lat:31.898932, lng:-102.316452, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"University Small Animal Clinic", cat:"vet", lat:31.88135, lng:-102.330654, dir:"2801 John Ben Shepperd Parkway Boulevard, Odessa", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oklahoma-city": {nombre:"Oklahoma City", centro:[35.472989, -97.517054], tz:"America/Chicago", lugares:[
  {n:"Bar K", cat:"parque", lat:35.460745, lng:-97.495886, dir:"901 Southeast 5th Street, Oklahoma City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cokesbury Dog Park", cat:"parque", lat:35.495021, lng:-97.545205, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Deep Deuce Dog Park", cat:"parque", lat:35.469212, lng:-97.510562, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Midtown Mutts", cat:"parque", lat:35.478523, lng:-97.518028, dir:"301 West Park Place, Oklahoma City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Myriad Gardens Dog Park", cat:"parque", lat:35.464664, lng:-97.517248, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"James G Graham DVM Classen View Veterinary", cat:"vet", lat:35.492468, lng:-97.531745, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nancy Worland DVM Oklahoma City Animal Hospital", cat:"vet", lat:35.492819, lng:-97.566487, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oklahoma City Zoo", cat:"zoo", lat:35.520798, lng:-97.472152, dir:"2101 Northeast 50th Street, Oklahoma City", tel:"+1-405-424-3344", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "old-town-spring": {nombre:"Old Town Spring", centro:[30.079502, -95.41942], tz:"America/Chicago", lugares:[
  {n:"Pawtown Pet Boarding", cat:"peluqueria", lat:30.069298, lng:-95.452982, dir:"2447 FM 2920, Old Town Spring", tel:"+1-281-288-7297", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Natural Pawz", cat:"tienda", lat:30.084154, lng:-95.449831, dir:"2174 Spring Stuebner Road, Old Town Spring", tel:"+1-832-458-0611", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.019812, lng:-95.427176, dir:"140 FM 1960 East, Old Town Spring", tel:"+1 281-821-4355", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.050276, lng:-95.436066, dir:"19507 North Freeway, Old Town Spring", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.084917, lng:-95.44983, dir:"2168 Spring Stuebner Road, Old Town Spring", tel:"+1-281-528-0245", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.019886, lng:-95.427294, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BluePearl", cat:"vet", lat:30.074526, lng:-95.439625, dir:"1646 Spring Cypress Road, Old Town Spring", tel:"+1-832-616-5000", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Four Seasons Animal Hospital", cat:"vet", lat:30.070963, lng:-95.474576, dir:"3730 FM 2920, Old Town Spring", tel:"+1-281-825-4994", horas:[7.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"NHVO", cat:"vet", lat:30.075328, lng:-95.43962, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Spring", cat:"vet", lat:30.072019, lng:-95.440915, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "olmito": {nombre:"Olmito", centro:[26.019443, -97.534709], tz:"America/Chicago", lugares:[
  {n:"Brownsville Animal Regulation and Care Center", cat:"refugio", lat:26.025178, lng:-97.526612, dir:"416 Old FM 511, Olmito", tel:"+1 956-544-7351", horas:[13.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "olmos-park": {nombre:"Olmos Park", centro:[29.478842, -98.487517], tz:"America/Chicago", lugares:[
  {n:"Paul Jolly Center for Pet Adoptions", cat:"refugio", lat:29.462258, lng:-98.474614, dir:"210 Tuleta Drive, Olmos Park", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Eagle Veterinary Hospital", cat:"vet", lat:29.475331, lng:-98.492069, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Shotz", cat:"vet", lat:29.462021, lng:-98.475676, dir:"210 Tuleta Drive, Olmos Park", tel:"+1-210-735-1004", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"San Antonio Zoo", cat:"zoo", lat:29.463736, lng:-98.473491, dir:"3903 North Saint Mary's Street, Olmos Park", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "onalaska": {nombre:"Onalaska", centro:[30.805746, -95.116326], tz:"America/Chicago", lugares:[
  {n:"Mary Ellen Yost Memorial Dog Park", cat:"parque", lat:30.83533, lng:-95.118253, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "opdyke-west": {nombre:"Opdyke West", centro:[33.592315, -102.3024], tz:"America/Chicago", lugares:[
  {n:"City of Levelland Animal Shelter", cat:"refugio", lat:33.58965, lng:-102.330352, dir:"109 Commerce Drive, Opdyke West", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Plains Veterinary Hospital", cat:"vet", lat:33.593779, lng:-102.279141, dir:"4931 East State Highway 114, Opdyke West", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "osage-oklahoma": {nombre:"Osage", centro:[36.29285, -96.415853], tz:"America/Chicago", lugares:[
  {n:"Cleveland Veterinary Clinic", cat:"vet", lat:36.252997, lng:-96.423195, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "owasso": {nombre:"Owasso", centro:[36.26597, -95.854856], tz:"America/Chicago", lugares:[
  {n:"Waggin' Trail Dog Park (large dogs)", cat:"parque", lat:36.272486, lng:-95.869828, dir:"8200 North 91st Avenue East, Owasso", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waggin' Trail Dog Park (small dogs)", cat:"parque", lat:36.27186, lng:-95.870101, dir:"8200 North 91st Avenue East, Owasso", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"DaisyBelle Paw Spa", cat:"peluqueria", lat:36.27789, lng:-95.833698, dir:"12500 East 86th Street North, Owasso", tel:"+1-918-800-4358", horas:[7.5, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Family Animal Medicine", cat:"vet", lat:36.304258, lng:-95.820838, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Animal Hospital of Owasso", cat:"vet", lat:36.279782, lng:-95.83396, dir:"12555 East 86th Street North, Owasso", tel:"+1-918-274-8387", horas:[7.0, 22.0], nota:"Dato de OpenStreetMap"}
 ]},
 "paden-oklahoma": {nombre:"Paden", centro:[35.509087, -96.568097], tz:"America/Chicago", lugares:[
  {n:"Logan's Perfect Puppies", cat:"tienda", lat:35.564095, lng:-96.570772, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "palmetto-texas": {nombre:"Palmetto", centro:[29.535791, -95.466331], tz:"America/Chicago", lugares:[
  {n:"Kitty Hollow Park", cat:"parque", lat:29.545838, lng:-95.528255, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:29.535855, lng:-95.533089, dir:"9018 Sienna Crossing Drive, Palmetto", tel:"+1 346-396-7387", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Local Vet Urgent Care", cat:"vet", lat:29.536379, lng:-95.528389, dir:"9402 Highway 6, Palmetto", tel:"+1-281-710-4230", horas:[13.0, 22.0], nota:"Dato de OpenStreetMap"}
 ]},
 "palmview-south": {nombre:"Palmview South", centro:[26.215629, -98.378628], tz:"America/Chicago", lugares:[
  {n:"National Butterfly Center", cat:"zoo", lat:26.174639, lng:-98.367236, dir:"3333 Butterfly Park Drive, Palmview South", tel:"+1 956-583-5400", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "pampa": {nombre:"Pampa", centro:[35.536297, -100.960155], tz:"America/Chicago", lugares:[
  {n:"Easley Animal Hospital", cat:"vet", lat:35.580389, lng:-100.953874, dir:"8741 Loop 171, Pampa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Every Living Thing Veterinary Services", cat:"vet", lat:35.547651, lng:-100.903473, dir:"12300 County Road E, Pampa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gray County Veterinary Clinic", cat:"vet", lat:35.557152, lng:-100.990536, dir:"1901 North Price Road, Pampa", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "panhandle": {nombre:"Panhandle", centro:[35.345464, -101.380657], tz:"America/Chicago", lugares:[
  {n:"Carson County Veterinary Clinic", cat:"vet", lat:35.332425, lng:-101.394408, dir:"1329 United States Highway 60, Panhandle", tel:"+1 806-537-3522", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "panorama-village": {nombre:"Panorama Village", centro:[30.38104, -95.493553], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:30.346294, lng:-95.480376, dir:"2900 Interstate 45 North, Panorama Village", tel:"+1 936-494-2500", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "pantego-texas": {nombre:"Pantego", centro:[32.714299, -97.1564], tz:"America/Chicago", lugares:[
  {n:"Rush Creek Dog North", cat:"parque", lat:32.71598, lng:-97.1716, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rush Creek Dog South", cat:"parque", lat:32.715126, lng:-97.171772, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark of the Town", cat:"peluqueria", lat:32.707185, lng:-97.188081, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.722164, lng:-97.151321, dir:"2701 West Park Row Drive, Pantego", tel:"+1 817-795-1873", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "panther-creek": {nombre:"Panther Creek", centro:[30.165852, -95.492371], tz:"America/Chicago", lugares:[
  {n:"Woodlands Doggie Village", cat:"refugio", lat:30.129952, lng:-95.488492, dir:"25120 Glen Loch Drive, Panther Creek", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "paragould": {nombre:"Paragould", centro:[36.058402, -90.497329], tz:"America/Chicago", lugares:[
  {n:"Something Pawsitive", cat:"refugio", lat:36.054736, lng:-90.486102, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.059473, lng:-90.522349, dir:"2708 West Kings Highway, Paragould", tel:"+1 870-573-3096", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Linwood Animal Hospital", cat:"vet", lat:36.051862, lng:-90.505638, dir:"504 Linwood Drive, Paragould", tel:"+18702367778", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "pearsall": {nombre:"Pearsall", centro:[28.892194, -99.095033], tz:"America/Chicago", lugares:[
  {n:"Pearsall Veterinary Hospital", cat:"vet", lat:28.893882, lng:-99.108807, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pecos-texas": {nombre:"Pecos", centro:[31.425414, -103.495289], tz:"America/Chicago", lugares:[
  {n:"Maxey Bark Park", cat:"parque", lat:31.394103, lng:-103.506879, dir:"Cothrun Street, Pecos", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "perry-oklahoma": {nombre:"Perry", centro:[36.290735, -97.288396], tz:"America/Chicago", lugares:[
  {n:"Perry Veterinary Hospital", cat:"vet", lat:36.274729, lng:-97.30185, tel:"+1-580-336-2234", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "perryton": {nombre:"Perryton", centro:[36.391023, -100.805903], tz:"America/Chicago", lugares:[
  {n:"Animal Clinic of Perryton", cat:"vet", lat:36.377516, lng:-100.804469, dir:"20 Southwest 24th Avenue, Perryton", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pflugerville": {nombre:"Pflugerville", centro:[30.43937, -97.620004], tz:"America/Chicago", lugares:[
  {n:"Ascent North Dog Park", cat:"parque", lat:30.377736, lng:-97.651852, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:30.472789, lng:-97.584683, dir:"19417 Murchison Ridge, Pflugerville", horas:[6.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Bark Park and Run", cat:"parque", lat:30.392766, lng:-97.652292, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"parque", lat:30.428171, lng:-97.67189, dir:"13900 North Interstate 35, Pflugerville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Off-leash area", cat:"parque", lat:30.400557, lng:-97.683254, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Off-leash area", cat:"parque", lat:30.403156, lng:-97.686406, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Off-leash area", cat:"parque", lat:30.400117, lng:-97.688383, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Off-leash area", cat:"parque", lat:30.398165, lng:-97.685153, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pioneer Hill Dog Park #1", cat:"parque", lat:30.358372, lng:-97.669653, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stone Hill Large Dog Park", cat:"parque", lat:30.468854, lng:-97.60544, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stone Hill Small Dog Park", cat:"parque", lat:30.468403, lng:-97.605606, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All God's Creatures Grooming", cat:"peluqueria", lat:30.439984, lng:-97.620433, dir:"106 East Pecan Street, Pflugerville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K&A Grooming", cat:"peluqueria", lat:30.442917, lng:-97.611248, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggy Day Out Kennel & Daycare", cat:"refugio", lat:30.467649, lng:-97.624526, dir:"17808 Wilke Ridge Lane, Pflugerville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"House Rabbit Resource Network", cat:"refugio", lat:30.465663, lng:-97.625977, dir:"110 West Pflugerville Parkway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pflugerville Animal Welfare Services", cat:"refugio", lat:30.430533, lng:-97.606583, dir:"1600 Waterbrook Drive, Pflugerville", tel:"+1-512-990-7387", horas:[11.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Taurus Academy", cat:"refugio", lat:30.411438, lng:-97.691648, dir:"12419 Metric Boulevard, Pflugerville", tel:"+1-737-242-2381; +1-855-955-5185", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Aquatek Tropical Fish", cat:"tienda", lat:30.382324, lng:-97.723119, horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:30.41707, lng:-97.703371, dir:"12407 North MoPac Expressway, Pflugerville", horas:[10.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.413375, lng:-97.670599, dir:"12901 North Interstate 35, Pflugerville", tel:"+1 512-990-0365", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.407394, lng:-97.747043, dir:"11150 Research Boulevard, Pflugerville", tel:"+1 512-527-9644", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.39551, lng:-97.747954, dir:"9828 Great Hills Trail, Pflugerville", tel:"+1 512-345-2355", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.472546, lng:-97.596816, dir:"19000 Limestone Commercial Drive, Pflugerville", tel:"+1 512-252-3677", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Arbor Animal Clinic", cat:"vet", lat:30.408242, lng:-97.747407, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Austin Vet Care @ Metric", cat:"vet", lat:30.411428, lng:-97.691613, dir:"12419 Metric Boulevard, Pflugerville", tel:"+1-512-832-1088", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.4133, lng:-97.670264, dir:"12901 North Interstate 35, Pflugerville", tel:"+1-512-252-7070", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.407398, lng:-97.747233, dir:"11150 Research Boulevard, Pflugerville", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Crestview Veterinary Clinic at Tech Ridge", cat:"vet", lat:30.404487, lng:-97.673344, dir:"500 West Canyon Ridge Drive, Pflugerville", tel:"+1-512-572-6777", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dessau Veterinary Clinic", cat:"vet", lat:30.388345, lng:-97.647274, dir:"12315 Dessau Road, Pflugerville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eye Care for Animals", cat:"vet", lat:30.411397, lng:-97.691598, dir:"12419 Metric Boulevard, Pflugerville", tel:"+1-512-522-6920", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pflugerville Animal Hospital", cat:"vet", lat:30.465087, lng:-97.625897, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sunbury Vet Clinic", cat:"vet", lat:30.417004, lng:-97.703611, dir:"12407 North MoPac Expressway, Pflugerville", tel:"+1-512-255-8387", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Arbor Animal Hospital", cat:"vet", lat:30.408206, lng:-97.747502, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Hometown Animal Hospital", cat:"vet", lat:30.443848, lng:-97.608658, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Surgical Solutions", cat:"vet", lat:30.376713, lng:-97.725119, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wells Branch Pet & Bird Clinic", cat:"vet", lat:30.414583, lng:-97.708183, dir:"12200 North MoPac Expressway, Pflugerville", tel:"+1-512-339-8472", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pine-bluff": {nombre:"Pine Bluff", centro:[34.222888, -92.004334], tz:"America/Chicago", lugares:[
  {n:"PetSense", cat:"tienda", lat:34.173913, lng:-92.007356, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "piney-point-village": {nombre:"Piney Point Village", centro:[29.759951, -95.517165], tz:"America/Chicago", lugares:[
  {n:"Sneed Dog Park", cat:"parque", lat:29.725162, lng:-95.542415, dir:"9855 Pagewood Lane, Piney Point Village", horas:[16.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:29.738073, lng:-95.494204, dir:"6240 Westheimer Road, Piney Point Village", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.739972, lng:-95.513558, dir:"8380 Westheimer Road, Piney Point Village", tel:"+1 713-914-0965", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.739749, lng:-95.501496, dir:"7510 Westheimer Road, Piney Point Village", tel:"+1 713-781-9010", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "pipe-creek": {nombre:"Pipe Creek", centro:[29.723557, -98.935864], tz:"America/Chicago", lugares:[
  {n:"Pipe Creek Animal Clinic", cat:"vet", lat:29.720954, lng:-98.916821, dir:"11113 State Highway 16 South, Pipe Creek", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pittsburg-texas": {nombre:"Pittsburg", centro:[32.995402, -94.965769], tz:"America/Chicago", lugares:[
  {n:"Piney Woods Animal Clinic", cat:"vet", lat:33.006091, lng:-94.992778, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pittsburg Veterinary Clinic", cat:"vet", lat:33.001857, lng:-94.959146, dir:"203 North Greer Boulevard, Pittsburg", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "plainview-texas": {nombre:"Plainview", centro:[34.184794, -101.706841], tz:"America/Chicago", lugares:[
  {n:"Dirty Dog Pet Spa and Boarding", cat:"peluqueria", lat:34.205239, lng:-101.742036, dir:"2401 North Interstate 27, Plainview", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pampered Pup", cat:"peluqueria", lat:34.187264, lng:-101.746411, dir:"3420 Olton Road, Plainview", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of Plainview", cat:"vet", lat:34.178778, lng:-101.75108, dir:"201 North Interstate 27, Plainview", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "plano-texas": {nombre:"Plano", centro:[33.013676, -96.69251], tz:"America/Chicago", lugares:[
  {n:"Bob Woodruff Dog Park", cat:"parque", lat:33.029722, lng:-96.663435, dir:"2300 Shiloh Road, Plano", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bush Central Barkway", cat:"parque", lat:33.003509, lng:-96.710219, dir:"3851 North Central Expressway, Plano", horas:[6.5, 22.5], nota:"Dato de OpenStreetMap"},
  {n:"Gateway Village Apartment Dog Park", cat:"parque", lat:33.000559, lng:-96.670703, dir:"380 Vista Court Drive, Plano", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jack Carter Dog Park", cat:"parque", lat:33.059814, lng:-96.739741, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"15th Street Pet Grooming", cat:"peluqueria", lat:33.020626, lng:-96.75121, dir:"2927 West 15th Street, Plano", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pat's Pet Grooming", cat:"peluqueria", lat:33.020038, lng:-96.746747, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:33.000901, lng:-96.682688, dir:"2121 Infocom Drive, Plano", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Paradise", cat:"refugio", lat:33.044032, lng:-96.706342, dir:"3365 Premier Drive, Plano", tel:"+1-972-424-7387", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Plano Animal Shelter & Services", cat:"refugio", lat:33.011452, lng:-96.772559, horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Birdiac", cat:"tienda", lat:33.020236, lng:-96.751474, dir:"2907 West 15th Street, Plano", tel:"+1-972-612-0923", horas:[12.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"DFW Reptarium", cat:"tienda", lat:33.02929, lng:-96.768469, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:32.998621, lng:-96.69824, dir:"1415 East Renner Road, Plano", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.038369, lng:-96.70132, dir:"3300 North Central Expressway, Plano", tel:"+1 972-422-8307", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.020616, lng:-96.714962, dir:"801 West 15th Street, Plano", tel:"+1 469-241-0509", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"14th Street Animal Hospital", cat:"vet", lat:33.018739, lng:-96.692373, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canyon CreekAnimal Clinic", cat:"vet", lat:32.992525, lng:-96.727593, dir:"2717 Custer Parkway, Plano", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East Plano Animal Hospital", cat:"vet", lat:33.015733, lng:-96.665306, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lancers Square Animal Clinic", cat:"vet", lat:33.03979, lng:-96.754106, dir:"3207 Independence Pkwy, Plano", tel:"+1 972 596 3413", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"MedVet", cat:"vet", lat:33.002971, lng:-96.722593, dir:"401 President George Bush Highway, Plano", tel:"+1-972-479-9110", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Parker Animal & Bird Clinic", cat:"vet", lat:33.041414, lng:-96.735406, dir:"2129 West Parker Road, Plano", tel:"+1 972 985 0036", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "pleasanton-texas": {nombre:"Pleasanton", centro:[28.967194, -98.478627], tz:"America/Chicago", lugares:[
  {n:"Bark Park Dog Park", cat:"parque", lat:28.964238, lng:-98.482084, dir:"215 East Adams Street, Pleasanton", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ponder": {nombre:"Ponder", centro:[33.182897, -97.28724], tz:"America/Chicago", lugares:[
  {n:"Ponder Veterinary Hospital", cat:"vet", lat:33.186055, lng:-97.288961, dir:"601 Shaffner Street, Ponder", tel:"+1 940-479-2782", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "port-allen-louisiana": {nombre:"Port Allen", centro:[30.45335, -91.210057], tz:"America/Chicago", lugares:[
  {n:"West Baton Rouge Dog Park", cat:"parque", lat:30.46603, lng:-91.207875, dir:"610 Rosedale Road, Port Allen", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "port-aransas": {nombre:"Port Aransas", centro:[27.833217, -97.061832], tz:"America/Chicago", lugares:[
  {n:"Island Animal Clinic", cat:"vet", lat:27.833822, lng:-97.059003, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "port-isabel": {nombre:"Port Isabel", centro:[26.073412, -97.208584], tz:"America/Chicago", lugares:[
  {n:"Pretty Little Paws", cat:"peluqueria", lat:26.073836, lng:-97.213948, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "port-lavaca": {nombre:"Port Lavaca", centro:[28.614997, -96.626089], tz:"America/Chicago", lugares:[
  {n:"Calhoun County Animal Hospital", cat:"vet", lat:28.633826, lng:-96.630194, dir:"1015 State Highway 35, Port Lavaca", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "porter-texas": {nombre:"Porter", centro:[30.10244, -95.229655], tz:"America/Chicago", lugares:[
  {n:"Animal Ark", cat:"tienda", lat:30.067618, lng:-95.19623, dir:"2370 Brookdale Drive, Porter", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fur Babies", cat:"tienda", lat:30.050713, lng:-95.23725, dir:"1303 Kingwood Drive, Porter", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.135215, lng:-95.230266, dir:"21436 Market Place Drive, Porter", tel:"+1 281-747-3110", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Kings Crossing Animal Hospital", cat:"vet", lat:30.057296, lng:-95.187399, dir:"3425 West Lake Houston Parkway, Porter", tel:"+1-281-360-5550", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Northpark Veterinary Hospital", cat:"vet", lat:30.067687, lng:-95.195955, dir:"3022 Northpark Drive, Porter", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Kingwood Animal Hospital", cat:"vet", lat:30.05068, lng:-95.232825, dir:"2526 Green Oak Drive, Porter", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "post": {nombre:"Post", centro:[33.190925, -101.380662], tz:"America/Chicago", lugares:[
  {n:"Garza County Animal Hospital", cat:"vet", lat:33.210139, lng:-101.405525, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "poteau": {nombre:"Poteau", centro:[35.056805, -94.619997], tz:"America/Chicago", lugares:[
  {n:"Poteau Valley Humane Society", cat:"refugio", lat:35.05449, lng:-94.611364, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pottsboro": {nombre:"Pottsboro", centro:[33.760873, -96.666853], tz:"America/Chicago", lugares:[
  {n:"Preston Point Animal Clinic", cat:"vet", lat:33.764393, lng:-96.674316, dir:"501 Spur 316, Pottsboro", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "powhatan": {nombre:"Powhatan", centro:[31.87294, -93.201279], tz:"America/Chicago", lugares:[
  {n:"Gator Country LA Alligator Park", cat:"zoo", lat:31.833268, lng:-93.166974, dir:"380 Old Bayou Pierre Road, Powhatan", tel:"+1 318 354-0106;+1 409 504-4177", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "prairieville": {nombre:"Prairieville", centro:[30.312253, -90.949733], tz:"America/Chicago", lugares:[
  {n:"The Bark of the Town", cat:"peluqueria", lat:30.320909, lng:-90.960235, dir:"38498 Highway 42, Prairieville", tel:"+1-225-362-1870", horas:[7.0, 11.5], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.281762, lng:-90.954488, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Galvez Veterinary Clinic", cat:"vet", lat:30.32264, lng:-90.933038, dir:"40195 Highway 42, Prairieville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Prairieville Animal Hospital", cat:"vet", lat:30.32095, lng:-90.97307, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "princeton-texas": {nombre:"Princeton", centro:[33.180116, -96.498042], tz:"America/Chicago", lugares:[
  {n:"Princeton Dog Park", cat:"parque", lat:33.184402, lng:-96.507694, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "prosper": {nombre:"Prosper", centro:[33.237158, -96.797705], tz:"America/Chicago", lugares:[
  {n:"Dog Launch", cat:"parque", lat:33.280912, lng:-96.802129, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Evolution", cat:"peluqueria", lat:33.218439, lng:-96.870983, dir:"2115 West University Drive, Prosper", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woofgang Bakery & Grooming", cat:"peluqueria", lat:33.226854, lng:-96.798456, dir:"900 South Preston Road, Prosper", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:33.203021, lng:-96.734928, dir:"9245 Virginia Parkway, Prosper", tel:"+1 972-347-5555", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:33.251015, lng:-96.783115, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:33.220729, lng:-96.875996, dir:"4580 West University Drive, Prosper", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.225001, lng:-96.794882, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chewy VetCare", cat:"vet", lat:33.217285, lng:-96.730689, dir:"8701 West University Drive, Prosper", tel:"+1 214-307-6390", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"CityVet", cat:"vet", lat:33.220091, lng:-96.879593, dir:"4780 West University Drive, Prosper", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cross Timbers Veterinary Center & Boarding Facility", cat:"vet", lat:33.213323, lng:-96.733568, dir:"1301 N Custer Rd, Prosper", tel:"+1 972-529-6999", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hometown Animal Hospital", cat:"vet", lat:33.217207, lng:-96.879459, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"McKinney Emergency Veterinary Clinkc", cat:"vet", lat:33.202787, lng:-96.734884, dir:"9245 Virginia Parkway, Prosper", tel:"+1 469-820-0233", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Neighborhood Vet Care", cat:"vet", lat:33.263505, lng:-96.79262, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Revive Veterinary Emergency and Specialty Hospital", cat:"vet", lat:33.23567, lng:-96.792419, dir:"150 South Preston Road, Prosper", tel:"+1 972-433-9990", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet - Prosper", cat:"vet", lat:33.227233, lng:-96.798277, dir:"900 South Preston Road, Prosper", tel:"+1469-842-8200", horas:[15.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Emergency Group", cat:"vet", lat:33.218442, lng:-96.869727, dir:"2215 West University Drive, Prosper", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "providence-village": {nombre:"Providence Village", centro:[33.236242, -96.965028], tz:"America/Chicago", lugares:[
  {n:"Village Veterinary Center", cat:"vet", lat:33.226266, lng:-96.982258, dir:"11930 Highway 380, Providence Village", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "quitman-texas": {nombre:"Quitman", centro:[32.795772, -95.451829], tz:"America/Chicago", lugares:[
  {n:"Paw Spa", cat:"peluqueria", lat:32.795122, lng:-95.450852, dir:"112 East Bermuda Street, Quitman", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Quitman Animal Clinic", cat:"vet", lat:32.795257, lng:-95.422332, dir:"1142 State Highway 154, Quitman", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ratliff-ranch-north": {nombre:"Ratliff Ranch North", centro:[31.950003, -102.371231], tz:"America/Chicago", lugares:[
  {n:"Melinda's Grooming", cat:"peluqueria", lat:31.900593, lng:-102.354265, dir:"3805 East 52nd Street, Ratliff Ranch North", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:31.900157, lng:-102.314612, dir:"6209 East Highway 191, Ratliff Ranch North", tel:"+1 432-276-6285", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Grandview Veterinary Clinic", cat:"vet", lat:31.900623, lng:-102.35406, dir:"3807 East 52nd Street, Ratliff Ranch North", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rayne": {nombre:"Rayne", centro:[30.234925, -92.268462], tz:"America/Chicago", lugares:[
  {n:"Rayne Animal Shelter", cat:"refugio", lat:30.250547, lng:-92.272601, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "red-oak-texas": {nombre:"Red Oak", centro:[32.51439, -96.806662], tz:"America/Chicago", lugares:[
  {n:"Red Oak Animal Shelter", cat:"refugio", lat:32.517944, lng:-96.807397, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "redland-texas": {nombre:"Redland", centro:[31.40435, -94.72132], tz:"America/Chicago", lugares:[
  {n:"Ellen Trout Zoo", cat:"zoo", lat:31.37271, lng:-94.726134, dir:"402 Zoo Circle, Redland", tel:"+1 936 633 0399", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "reno-texas-2": {nombre:"Reno", centro:[33.663162, -95.462455], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:33.660475, lng:-95.504835, dir:"3900 Lamar Avenue, Reno", tel:"+1 903-739-2738", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Health Center", cat:"vet", lat:33.645269, lng:-95.498416, dir:"4200 Clarksville Street, Reno", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "research-forest": {nombre:"Research Forest", centro:[30.181931, -95.481967], tz:"America/Chicago", lugares:[
  {n:"Bear Branch Dog Park", cat:"parque", lat:30.191871, lng:-95.491042, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:30.185725, lng:-95.490366, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic", cat:"vet", lat:30.186212, lng:-95.490459, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "richardson": {nombre:"Richardson", centro:[32.948179, -96.729721], tz:"America/Chicago", lugares:[
  {n:"Northside Dog Park", cat:"parque", lat:32.994019, lng:-96.750973, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PawsAbility Park", cat:"parque", lat:32.984103, lng:-96.754883, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Falls Dog Park", cat:"parque", lat:32.936934, lng:-96.747988, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fur Bébé", cat:"peluqueria", lat:32.894686, lng:-96.739042, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wag Hotel", cat:"refugio", lat:32.942241, lng:-96.741303, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"EarthWise Pet", cat:"tienda", lat:32.979464, lng:-96.765476, dir:"1310 West Campbell Road, Richardson", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.953451, lng:-96.768503, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.984136, lng:-96.769908, dir:"16821 Coit Road, Richardson", tel:"+1 972-381-1588", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.939379, lng:-96.699348, dir:"1401 East Spring Valley Road, Richardson", tel:"+1 972-238-5257", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"The Serpentarium", cat:"tienda", lat:32.944437, lng:-96.741049, dir:"630 South Central Expressway, Richardson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Abrams Royal Animal Clinic", cat:"vet", lat:32.892327, lng:-96.74073, dir:"8244 Abrams Road, Richardson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arapaho Road Animal Clinic", cat:"vet", lat:32.962707, lng:-96.747486, dir:"739 West Arapaho Road, Richardson", tel:"+1-972-235-5215", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Buckingham Plano Road", cat:"vet", lat:32.933471, lng:-96.700609, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cottonwood Animal Hospital", cat:"vet", lat:32.93896, lng:-96.764444, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northwood Veterinary Clinic", cat:"vet", lat:32.939356, lng:-96.771429, dir:"13949 Peyton Drive, Richardson", tel:"+1 972-233-8161", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pavillion Animal Hospital", cat:"vet", lat:32.977833, lng:-96.771294, dir:"7512 Campbell Road, Richardson", tel:"+1 972-248-8242", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Richardson Veterinary Clinic", cat:"vet", lat:32.943236, lng:-96.74355, dir:"733 South Floyd Road, Richardson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet - Richardson", cat:"vet", lat:32.97609, lng:-96.722876, dir:"338 West Campbell Road, Richardson", tel:"+1-214-347-7200", horas:[15.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Central Expressway Animal Hospital", cat:"vet", lat:32.905778, lng:-96.765062, dir:"11680 Forest Central Drive, Richardson", tel:"+1 214-341-3322", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"VGA Pet Doctor Animal Hospital", cat:"vet", lat:32.938916, lng:-96.69901, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinarians Dental", cat:"vet", lat:32.920568, lng:-96.768717, dir:"12600 Coit Road, Richardson", tel:"+1 972-385-8400", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "richland-hills": {nombre:"Richland Hills", centro:[32.815962, -97.22807], tz:"America/Chicago", lugares:[
  {n:"Family Pet Clinic of Richland Hills", cat:"vet", lat:32.817803, lng:-97.236277, dir:"6813 Boulevard 26, Richland Hills", tel:"+1 817-284-9285", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "richmond-texas": {nombre:"Richmond", centro:[29.582181, -95.760783], tz:"America/Chicago", lugares:[
  {n:"PetSuites", cat:"refugio", lat:29.561823, lng:-95.694062, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.548983, lng:-95.750242, dir:"23710 Commercial Drive, Richmond", tel:"+1 281-232-0796", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Richmond Animal Hospital", cat:"vet", lat:29.586223, lng:-95.751267, dir:"502 East US Highway 90 Alternate, Richmond", tel:"+1-281-342-3431", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "richwood": {nombre:"Richwood", centro:[32.448757, -92.084856], tz:"America/Chicago", lugares:[
  {n:"Louisiana Purchase Gardens & Zoo", cat:"zoo", lat:32.468423, lng:-92.094491, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "richwood-texas": {nombre:"Richwood", centro:[29.056079, -95.40994], tz:"America/Chicago", lugares:[
  {n:"Brazos Woods Veterinary Clinic", cat:"vet", lat:29.065278, lng:-95.423803, dir:"1406 FM 2004, Richwood", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "roanoke-texas": {nombre:"Roanoke", centro:[33.004013, -97.225848], tz:"America/Chicago", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:33.008309, lng:-97.221222, dir:"216 East State Highway 114 Frontage Road, Roanoke", tel:"+1 817-837-9915", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Wants Roanoke", cat:"tienda", lat:33.014368, lng:-97.2035, dir:"2550 Bobcat Boulevard, Roanoke", tel:"+1-972-898-0415", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.011494, lng:-97.217358, dir:"1208 North US Highway 377, Roanoke", tel:"+1-817-854-3111", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Canyon Falls Vet Hospital", cat:"vet", lat:33.065816, lng:-97.218423, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Roanoke Animal Hospital", cat:"vet", lat:33.002931, lng:-97.220938, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "robinson-texas": {nombre:"Robinson", centro:[31.467669, -97.114723], tz:"America/Chicago", lugares:[
  {n:"Cottonwood Creek Veterinary Hospital", cat:"vet", lat:31.508826, lng:-97.101582, dir:"2200 South Loop 340, Robinson", tel:"+12547570460", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "robstown": {nombre:"Robstown", centro:[27.790303, -97.668884], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:27.858697, lng:-97.631104, dir:"4101 Highway 77, Robstown", tel:"+1 361-241-2072", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Riverside Veterinary Clinic", cat:"vet", lat:27.857944, lng:-97.648671, dir:"14446 Northwest Boulevard, Robstown", tel:"+1 361-387-2427", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "rockwall": {nombre:"Rockwall", centro:[32.931234, -96.459709], tz:"America/Chicago", lugares:[
  {n:"Harry Myers Dog Park", cat:"parque", lat:32.931854, lng:-96.450289, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wags to Whiskers", cat:"peluqueria", lat:32.922072, lng:-96.46001, dir:"105 East Bourn Street, Rockwall", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rockwall Animal Services & Adoption Center", cat:"refugio", lat:32.926395, lng:-96.429605, dir:"1815 Airport Road, Rockwall", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:32.889849, lng:-96.47327, dir:"2930 Ridge Road, Rockwall", tel:"+1 469 868 2050", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.901033, lng:-96.454531, dir:"931 East Interstate 30, Rockwall", tel:"+1 972 722 5333", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.897303, lng:-96.464099, dir:"2689 Market Center Drive, Rockwall", tel:"+1 972-722-3224", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:32.90096, lng:-96.45472, dir:"931 East Interstate 30, Rockwall", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lakeside Veterinary Clinic", cat:"vet", lat:32.89907, lng:-96.460657, dir:"801 East Interstate 30, Rockwall", tel:"+1 972 771 0504", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Doctor", cat:"vet", lat:32.899528, lng:-96.457839, dir:"828 Rochell Court, Rockwall", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetDoctor", cat:"vet", lat:32.897164, lng:-96.463916, dir:"2703 Market Center Drive, Rockwall", tel:"+1 972 772 7777", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Rockwall Veterinary Hospital", cat:"vet", lat:32.912069, lng:-96.451423, dir:"2001 South Goliad Street, Rockwall", tel:"+1 972-771-9800", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:32.889331, lng:-96.473607, dir:"3010 Ridge Road, Rockwall", tel:"+1 972 771 1113", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "rogers": {nombre:"Rogers", centro:[36.334857, -94.119382], tz:"America/Chicago", lugares:[
  {n:"Pleasant Ridge Dog Park", cat:"parque", lat:36.3247, lng:-94.100442, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Railyard Dog Park", cat:"parque", lat:36.329984, lng:-94.114604, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:36.334381, lng:-94.116531, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.307882, lng:-94.173824, dir:"2203 Promenade Boulevard, Rogers", tel:"+1 479-631-4018", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Phenom-a-dog LLC", cat:"tienda", lat:36.335644, lng:-94.152392, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:36.310795, lng:-94.178524, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "roland-oklahoma": {nombre:"Roland", centro:[35.421202, -94.514662], tz:"America/Chicago", lugares:[
  {n:"Sparkman Animal Clinic", cat:"vet", lat:35.405695, lng:-94.549585, dir:"2905 East Shawntel Smith Boulevard, Roland", tel:"+1-918-427-7606", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rollingwood": {nombre:"Rollingwood", centro:[30.274243, -97.785581], tz:"America/Chicago", lugares:[
  {n:"Barkton Creek Dog Park (& Detention Pawnd)", cat:"parque", lat:30.254403, lng:-97.797994, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Austin Pets Alive! Tarrytown Cattery", cat:"refugio", lat:30.296484, lng:-97.767588, dir:"3106 Windsor Road, Rollingwood", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Austin Pets Alive! Tarrytown Dog Adoption Center Play Yard & Gift Shop", cat:"refugio", lat:30.296774, lng:-97.767934, dir:"3118 Windsor Road, Rollingwood", horas:[12.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Southpaws Playschool", cat:"refugio", lat:30.247005, lng:-97.774184, dir:"2235 South Lamar Boulevard, Rollingwood", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"EarthWise Pet", cat:"tienda", lat:30.247554, lng:-97.776336, dir:"2330 S Lamar Blvd, Rollingwood", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Just Food for Dogs", cat:"tienda", lat:30.271839, lng:-97.788217, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Purr-Fecto Cat Lounge", cat:"tienda", lat:30.247815, lng:-97.774682, dir:"2300 South Lamar Boulevard, Rollingwood", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tomlinson's Feed Store", cat:"tienda", lat:30.27575, lng:-97.799172, dir:"3300 Bee Caves Road, Rollingwood", tel:"+1-512-306-1121", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Parker Animal Care", cat:"vet", lat:30.247108, lng:-97.774442, dir:"2239 South Lamar Boulevard, Rollingwood", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "roscoe-texas": {nombre:"Roscoe", centro:[32.441615, -100.539297], tz:"America/Chicago", lugares:[
  {n:"Edu-Vet Pet Hospital", cat:"vet", lat:32.432083, lng:-100.550933, dir:"12822 North Interstate 20, Roscoe", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rose-hill-acres": {nombre:"Rose Hill Acres", centro:[30.198267, -94.194906], tz:"America/Chicago", lugares:[
  {n:"Barkwood Pet Resort", cat:"refugio", lat:30.145588, lng:-94.176599, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wet Pets", cat:"tienda", lat:30.229041, lng:-94.20066, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rosenberg": {nombre:"Rosenberg", centro:[29.558024, -95.80683], tz:"America/Chicago", lugares:[
  {n:"Southwest Veterinary Center", cat:"vet", lat:29.530211, lng:-95.809065, dir:"3514 Highway 36S, Rosenberg", tel:"+18325352387", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "round-rock-texas": {nombre:"Round Rock", centro:[30.508592, -97.678806], tz:"America/Chicago", lugares:[
  {n:"Colonial Village at Quarry Oaks Dog Park", cat:"parque", lat:30.440145, lng:-97.745554, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Depot Dog Park", cat:"parque", lat:30.510075, lng:-97.665932, dir:"800 Deerfoot Drive, Round Rock", tel:"+1-512-218-5540", horas:[6.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Willow Bend Dog Park", cat:"parque", lat:30.455528, lng:-97.681151, dir:"2801 Sauls Drive, Round Rock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kanine Koiffures Dog & Cat Grooming", cat:"peluqueria", lat:30.530065, lng:-97.688305, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:30.572461, lng:-97.653012, dir:"1900 University Boulevard, Round Rock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsuites", cat:"refugio", lat:30.48538, lng:-97.646738, dir:"1401 Louis Henna Boulevard, Round Rock", tel:"+1-737-444-2137", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Gallery of Pets", cat:"tienda", lat:30.418632, lng:-97.745503, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.48455, lng:-97.67043, dir:"2601 South Ih35, Round Rock", tel:"+1 512-218-1816", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.5571, lng:-97.686982, dir:"201 University Oaks Boulevard, Round Rock", tel:"+1 512-238-8859", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.483247, lng:-97.678862, dir:"2701 Parker Drive, Round Rock", tel:"+1 512-600-0115", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Tomlinson's Feed", cat:"tienda", lat:30.560408, lng:-97.690229, dir:"200 University Boulevard, Round Rock", tel:"+1-512-863-7100", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Clinic", cat:"vet", lat:30.527557, lng:-97.688826, dir:"2000 North Mays Street, Round Rock", tel:"+1-512-388-2222", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.48439, lng:-97.670591, dir:"2601 South Interstate 35, Round Rock", tel:"+1-512-238-7116", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Central Texas Veterinary Specialty & Emergency Hospital", cat:"vet", lat:30.509133, lng:-97.689191, dir:"301 Chisholm Trail, Round Rock", tel:"+1-512-892-9038", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Firehouse Animal Health Center", cat:"vet", lat:30.481744, lng:-97.661596, dir:"541 Louis Henna Boulevard, Round Rock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet & Bird Hospital", cat:"vet", lat:30.418, lng:-97.7459, dir:"11679 Research Boulevard, Round Rock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Round Rock Animal Hospital", cat:"vet", lat:30.492606, lng:-97.694353, dir:"1250 McNeil Road, Round Rock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SAGE Veterinary Imaging", cat:"vet", lat:30.492881, lng:-97.694797, dir:"1220 McNeil Road, Round Rock", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rowlett": {nombre:"Rowlett", centro:[32.902902, -96.56388], tz:"America/Chicago", lugares:[
  {n:"Scentral Large Dog Park", cat:"parque", lat:32.897827, lng:-96.559248, dir:"4601 Cheyenne Drive, Rowlett", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scentral Small Dog Park", cat:"parque", lat:32.897783, lng:-96.559957, dir:"4601 Centennial Drive, Rowlett", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.911525, lng:-96.557974, dir:"5709 President George Bush Highway, Rowlett", tel:"+1 972-412-1624", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Premier Vet Care", cat:"vet", lat:32.907382, lng:-96.55291, dir:"5100 Lakeview Parkway, Rowlett", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "royse-city": {nombre:"Royse City", centro:[32.976104, -96.331334], tz:"America/Chicago", lugares:[
  {n:"Royse City Animal Shelter", cat:"refugio", lat:32.983559, lng:-96.329235, dir:"1101 North Josephine Street, Royse City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Country Friends Veterinary Clinic", cat:"vet", lat:32.980282, lng:-96.28887, dir:"6961 East Interstate 30, Royse City", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "russellville-arkansas": {nombre:"Russellville", centro:[35.278417, -93.133786], tz:"America/Chicago", lugares:[
  {n:"Bark-N-Play", cat:"refugio", lat:35.268785, lng:-93.133293, dir:"1014 South Boston Avenue, Russellville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Russellville Animal Control", cat:"refugio", lat:35.246128, lng:-93.118619, dir:"3115 South Mobile Avenue, Russellville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Davis Pet Shop", cat:"tienda", lat:35.27958, lng:-93.115841, dir:"1509 East Main Street, Russellville", tel:"+1-479-968-6760", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.280418, lng:-93.094343, dir:"3093 East Main Street, Russellville", tel:"+1 479-498-2369", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Parkway Animal Hospital", cat:"vet", lat:35.283164, lng:-93.102221, dir:"407 North Elmira Avenue, Russellville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pearson Animal Clinic", cat:"vet", lat:35.253825, lng:-93.135056, dir:"2600 South Arkansas Avenue, Russellville", tel:"+1-479-968-3535", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Russellville Animal Clinic", cat:"vet", lat:35.26557, lng:-93.119128, dir:"1210 East 14th Street, Russellville", tel:"+1-479-967-7777", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Town and Country Veterinary Clinic", cat:"vet", lat:35.318495, lng:-93.136652, dir:"4461 Pleasant View Road, Russellville", tel:"+1-479-968-6700", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ruston": {nombre:"Ruston", centro:[32.52975, -92.63866], tz:"America/Chicago", lugares:[
  {n:"City of Ruston Animal Shelter", cat:"refugio", lat:32.516172, lng:-92.628136, dir:"1212 McAllister Street, Ruston", tel:"+1-318-251-8685", horas:[7.0, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSense", cat:"tienda", lat:32.543298, lng:-92.626219, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cypress Creek Animal Hospital", cat:"vet", lat:32.546846, lng:-92.612642, dir:"2005 Farmerville Highway, Ruston", tel:"+1-318-255-7081", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Lagniappe Animal Health", cat:"vet", lat:32.508137, lng:-92.636715, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sachse": {nombre:"Sachse", centro:[32.976233, -96.59527], tz:"America/Chicago", lugares:[
  {n:"Petbar Boutique", cat:"peluqueria", lat:32.992786, lng:-96.568674, dir:"8010 South State Highway 78, Sachse", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sachse Animal Shelter", cat:"refugio", lat:32.973921, lng:-96.560712, dir:"6424 Sachse Road", tel:"+1-214-675-9662", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.966549, lng:-96.64559, dir:"5401 North Garland Avenue, Sachse", tel:"+1 972-675-4900", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.944897, lng:-96.61239, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Murphy Road Animal Hospital", cat:"vet", lat:32.978867, lng:-96.612914, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sachse Veterinary Hospital", cat:"vet", lat:32.98871, lng:-96.577921, dir:"4730 Ranch Road, Sachse", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saddle-club-ranch-estates": {nombre:"Saddle Club Ranch Estates", centro:[32.020786, -102.205352], tz:"America/Chicago", lugares:[
  {n:"With Love Doggie Salon", cat:"peluqueria", lat:32.017417, lng:-102.142731, dir:"3323 North Midland Drive, Saddle Club Ranch Estates", tel:"+1-432-262-0454", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.031064, lng:-102.144481, dir:"4206 West Loop 250 North, Saddle Club Ranch Estates", tel:"+1 432-520-3134", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"A-Z Veterinary Clinic", cat:"vet", lat:32.013627, lng:-102.210722, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saginaw-texas": {nombre:"Saginaw", centro:[32.860127, -97.363907], tz:"America/Chicago", lugares:[
  {n:"PetMe", cat:"peluqueria", lat:32.958908, lng:-97.348853, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City of Saginaw Animal Services", cat:"refugio", lat:32.874468, lng:-97.373144, dir:"205 Brenda Lane, Saginaw", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:32.925792, lng:-97.355175, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.88127, lng:-97.394477, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-francisville": {nombre:"Saint Francisville", centro:[30.780724, -91.376335], tz:"America/Chicago", lugares:[
  {n:"Audubon Animal Hospital", cat:"vet", lat:30.805511, lng:-91.385946, dir:"9825 Street D, Saint Francisville", tel:"+1 225-635-6611", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "saint-gabriel": {nombre:"Saint Gabriel", centro:[30.257695, -91.099271], tz:"America/Chicago", lugares:[
  {n:"Sommerview Farm", cat:"refugio", lat:30.306586, lng:-91.091902, dir:"6905 Bayou Paul Road, Saint Gabriel", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Goula Paradise Farms", cat:"zoo", lat:30.239488, lng:-91.133894, dir:"28160 Highway 405, Saint Gabriel", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-george-louisiana": {nombre:"Saint George", centro:[30.365228, -91.026151], tz:"America/Chicago", lugares:[
  {n:"Coursey Pet Wash", cat:"peluqueria", lat:30.408635, lng:-91.018866, dir:"14335 Coursey Boulevard, Saint George", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"The Doghouse", cat:"peluqueria", lat:30.404651, lng:-91.015825, tel:"+1-225-755-8225", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSuites", cat:"refugio", lat:30.389634, lng:-91.106937, dir:"Perkins Road, Saint George", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Neighborhood Pet Market", cat:"tienda", lat:30.357726, lng:-91.006895, dir:"15168 Airline Highway, Saint George", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.386163, lng:-91.060077, dir:"6845 Siegen Lane, Saint George", tel:"+1-225-297-5997", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Bluebonnet Veterinary Hospital", cat:"vet", lat:30.398506, lng:-91.085504, dir:"5454 Bluebonnet Boulevard, Saint George", tel:"+1-225-296-0488", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Coursey Blvd. Animal Hospital", cat:"vet", lat:30.411979, lng:-91.044865, dir:"12137 Coursey Boulevard, Saint George", tel:"+1 225-292-4392", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Well Clinic", cat:"vet", lat:30.3476, lng:-91.022989, dir:"18303 Perkins Road East, Saint George", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shenandoah South Veterinary Hospital", cat:"vet", lat:30.389211, lng:-91.006914, dir:"16044 Tiger Bend Road, Saint George", tel:"+1 225-752-3979", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sherwood South Animal Hospital", cat:"vet", lat:30.418664, lng:-91.051056, dir:"3803 South Sherwood Forest Boulevard, Saint George", tel:"+1-225-293-6440", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"White Oak Animal Hospital", cat:"vet", lat:30.429285, lng:-91.00706, dir:"2721 O'Neal Lane, Saint George", tel:"+1 225-751-2345", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "salado": {nombre:"Salado", centro:[30.946879, -97.537163], tz:"America/Chicago", lugares:[
  {n:"Animal Medical of Salado", cat:"vet", lat:30.915657, lng:-97.546764, dir:"16231 FM 2115, Salado", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Salado Veterinary Hospital", cat:"vet", lat:30.963324, lng:-97.530453, dir:"1848 North Robertson Road, Salado", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "salem": {nombre:"Salem", centro:[34.629101, -92.558323], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:34.60576, lng:-92.530894, dir:"20825 I-30, Salem", tel:"+1 501-776-2136", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "san-angelo": {nombre:"San Angelo", centro:[31.464969, -100.440509], tz:"America/Chicago", lugares:[
  {n:"The Dog House", cat:"peluqueria", lat:31.448096, lng:-100.522779, dir:"6329 Arden Road, San Angelo", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pooch Pros", cat:"peluqueria", lat:31.456628, lng:-100.460346, dir:"124 North Van Buren Street, San Angelo", tel:"+1-325-249-5257", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"San Angelo Animal Services and Shelter", cat:"refugio", lat:31.489421, lng:-100.378081, dir:"3142 US Highway 67 North, San Angelo", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:31.435689, lng:-100.502925, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:31.429917, lng:-100.502602, dir:"4157 Sunset Drive, San Angelo", tel:"+1 325-223-8236", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Arden Road Animal Clinic", cat:"vet", lat:31.446608, lng:-100.482719, dir:"3402 Arden Road, San Angelo", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Knickerbocker Road Animal Hospital", cat:"vet", lat:31.422673, lng:-100.465949, dir:"Knickerbocker Road, San Angelo", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Main Street Animal Clinic", cat:"vet", lat:31.475987, lng:-100.431794, dir:"812 North Main Street, San Angelo", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Western Veterinary Hospital", cat:"vet", lat:31.528234, lng:-100.464842, dir:"2012 West FM 2105, San Angelo", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "san-antonio-texas": {nombre:"San Antonio", centro:[29.4246, -98.495141], tz:"America/Chicago", lugares:[
  {n:"Bryan Curry Community Dog Park", cat:"parque", lat:29.331387, lng:-98.495051, dir:"350 Felps Blvd, San Antonio", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hops and Hounds", cat:"parque", lat:29.436974, lng:-98.4806, dir:"1119 Avenue B, San Antonio", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Madison Square Dog Park", cat:"parque", lat:29.434612, lng:-98.490327, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw Park at Greenline", cat:"parque", lat:29.344335, lng:-98.453632, dir:"8020 Dave Erwin Drive, San Antonio", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodlawn Lake Dog Park", cat:"parque", lat:29.449427, lng:-98.528243, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wow Woof Dog Grooming", cat:"peluqueria", lat:29.446912, lng:-98.524502, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Künstler Brewing", cat:"resto", lat:29.404875, lng:-98.500092, dir:"302 East Lachapelle, San Antonio", tel:"+1 210-688-4519", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet's Barn", cat:"tienda", lat:29.357502, lng:-98.504278, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rudy's Feed Store", cat:"tienda", lat:29.3956, lng:-98.516217, dir:"1801 Nogalitos Street, San Antonio", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alamo Dog & Cat Hospital", cat:"vet", lat:29.366519, lng:-98.504707, dir:"1619 Pleasanton Road, San Antonio", tel:"+1-210-922-1231", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"San Antonio Wellness Spay and Neuter Clinic", cat:"vet", lat:29.376588, lng:-98.533482, dir:"4922 South Zarzamora Street, San Antonio", tel:"+1-210-864-3083", horas:[10.0, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Zarzamora Veterinary Clinic", cat:"vet", lat:29.339367, lng:-98.533696, dir:"8606 South Zarzamora Street, San Antonio", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "san-leanna": {nombre:"San Leanna", centro:[30.145767, -97.818061], tz:"America/Chicago", lugares:[
  {n:"Double Creek Bark Park", cat:"parque", lat:30.144926, lng:-97.799745, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Onion Creek Dog Park", cat:"parque", lat:30.172155, lng:-97.742542, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.163606, lng:-97.790961, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Prickly Pear Pet Vaccines, PLLC", cat:"vet", lat:30.155593, lng:-97.792722, dir:"9900 South Interstate 35, San Leanna", tel:"+1-737-202-4836", horas:[10.0, 14.0], nota:"Dato de OpenStreetMap"},
  {n:"South Austin Cat Hospital", cat:"vet", lat:30.137797, lng:-97.796043, dir:"11215 South Interstate 35, San Leanna", tel:"+1-512-910-2287", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "san-marcos-texas": {nombre:"San Marcos", centro:[29.882644, -97.940583], tz:"America/Chicago", lugares:[
  {n:"Flatz512 Dog Park", cat:"parque", lat:29.839676, lng:-97.940045, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nellie’s Dog Grooming", cat:"peluqueria", lat:29.891508, lng:-97.956386, dir:"1428 Old Ranch Road 12, San Marcos", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stinky Dawg", cat:"peluqueria", lat:29.881132, lng:-97.939555, dir:"151 South LBJ Drive, San Marcos", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.853246, lng:-97.953016, dir:"1050 McKinley Place Drive, San Marcos", tel:"+1 512-392-5959", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Springtown Veterinary Hospital", cat:"vet", lat:29.887451, lng:-97.920518, dir:"415 Springtown Way, San Marcos", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Texas Wildlife Petting Park", cat:"zoo", lat:29.878842, lng:-97.957882, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sand-springs-oklahoma": {nombre:"Sand Springs", centro:[36.139434, -96.110002], tz:"America/Chicago", lugares:[
  {n:"June Bug Pet Salon and Resort", cat:"peluqueria", lat:36.104321, lng:-96.120862, tel:"+1-918-352-5746", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sansom-park": {nombre:"Sansom Park", centro:[32.805962, -97.403074], tz:"America/Chicago", lugares:[
  {n:"Lake Worth Animal Clinic", cat:"vet", lat:32.811873, lng:-97.421289, dir:"3935 Boat Club Road, Sansom Park", tel:"+1-817-237-8189", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sapulpa": {nombre:"Sapulpa", centro:[36.000504, -96.104961], tz:"America/Chicago", lugares:[
  {n:"Wiggly Bark Dog Park - Big Dogs", cat:"parque", lat:35.98687, lng:-96.110762, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wiggly Bark Dog Park - Small Dogs", cat:"parque", lat:35.986691, lng:-96.110409, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Branscum Vet", cat:"vet", lat:35.991524, lng:-96.16279, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"vet", lat:35.988886, lng:-96.108891, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "schertz": {nombre:"Schertz", centro:[29.564162, -98.26957], tz:"America/Chicago", lugares:[
  {n:"Schertz Dog Park", cat:"parque", lat:29.566807, lng:-98.267928, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Schertz Animal Adoption Center", cat:"refugio", lat:29.567683, lng:-98.270476, dir:"800 Community Circle, Schertz", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "scott": {nombre:"Scott", centro:[30.235757, -92.094567], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:30.177693, lng:-92.079454, dir:"5700 Johnston Street, Scott", tel:"+1 337-984-5319", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "searcy": {nombre:"Searcy", centro:[35.250641, -91.736249], tz:"America/Chicago", lugares:[
  {n:"Searcy Dog Park", cat:"parque", lat:35.232866, lng:-91.727526, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Temporary Dog Park", cat:"parque", lat:35.241191, lng:-91.741198, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Arkansas Animal Hospital", cat:"vet", lat:35.223706, lng:-91.73587, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "seguin": {nombre:"Seguin", centro:[29.568841, -97.964727], tz:"America/Chicago", lugares:[
  {n:"Seguin Dog Park", cat:"parque", lat:29.554001, lng:-97.970314, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barking Lot Treats", cat:"tienda", lat:29.572923, lng:-97.964477, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:29.570793, lng:-97.938134, dir:"1500 East Court Street, Seguin", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Thunderpaws Canine Solutions", cat:"tienda", lat:29.567829, lng:-97.96484, dir:"206 South Austin Street, Seguin", tel:"+1-830-379-7000", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Seguin Veterinary Hospital", cat:"vet", lat:29.578242, lng:-97.985114, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "selma-texas": {nombre:"Selma", centro:[29.584892, -98.305779], tz:"America/Chicago", lugares:[
  {n:"Retema Equine Hospital", cat:"vet", lat:29.597437, lng:-98.313865, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "seminole-texas": {nombre:"Seminole", centro:[32.716735, -102.649097], tz:"America/Chicago", lugares:[
  {n:"Gaines County Pound", cat:"refugio", lat:32.745429, lng:-102.638188, tel:"+1 432-758-9871", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Seminole Veternary Clinic", cat:"vet", lat:32.711719, lng:-102.613422, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "seymour-texas": {nombre:"Seymour", centro:[33.594244, -99.260307], tz:"America/Chicago", lugares:[
  {n:"Salt Creek Veterinary Hospital", cat:"vet", lat:33.601618, lng:-99.26006, dir:"1404 North Main Street, Seymour", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shady-shores": {nombre:"Shady Shores", centro:[33.167856, -97.029868], tz:"America/Chicago", lugares:[
  {n:"Club Canine Boarding and Grooming", cat:"refugio", lat:33.194941, lng:-97.056834, dir:"7800 East McKinney Street, Shady Shores", tel:"+1-940-383-2766", horas:[8.0, 11.0], nota:"Dato de OpenStreetMap"}
 ]},
 "shattuck": {nombre:"Shattuck", centro:[36.273961, -99.87796], tz:"America/Chicago", lugares:[
  {n:"Ellis County Animal Hospital", cat:"vet", lat:36.281163, lng:-99.85688, dir:"9401 Highway 15 East, Shattuck", tel:"+1-580-938-2962", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "shavano-park": {nombre:"Shavano Park", centro:[29.58495, -98.552519], tz:"America/Chicago", lugares:[
  {n:"Coyote Dog Park", cat:"parque", lat:29.591936, lng:-98.603116, dir:"15915 Old Fredericksburg Road, Shavano Park", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Ventura Ridge Dog Park", cat:"parque", lat:29.583338, lng:-98.59108, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vineyard Springs Apartements", cat:"parque", lat:29.608045, lng:-98.531156, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Bath & Beyond - Spa & Resort", cat:"peluqueria", lat:29.559369, lng:-98.53524, dir:"12730 Northwest Military Drive, Shavano Park", tel:"+1-210-738-2284", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.566064, lng:-98.587595, dir:"5219 De Zavala Road, Shavano Park", tel:"+1 210-561-0644", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.610477, lng:-98.596778, dir:"17515 La Cantera Parkway, Shavano Park", tel:"+1 210-247-6020", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.562739, lng:-98.586436, dir:"12651 Vance Jackson Road, Shavano Park", tel:"+1 210-877-1426", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Castle Hills", cat:"vet", lat:29.562275, lng:-98.537778, dir:"13141 Northwest Military Highway, Shavano Park", tel:"+1-210-492-5519", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Leon Springs", cat:"vet", lat:29.622025, lng:-98.609898, dir:"19633 Interstate 10 West, Shavano Park", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shawnee-oklahoma": {nombre:"Shawnee", centro:[35.327293, -96.9253], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.381609, lng:-96.932327, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sheldon-texas": {nombre:"Sheldon", centro:[29.868001, -95.128264], tz:"America/Chicago", lugares:[
  {n:"Large Dog Park", cat:"parque", lat:29.821985, lng:-95.159764, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:29.820954, lng:-95.160723, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shenandoah-texas": {nombre:"Shenandoah", centro:[30.180215, -95.455773], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:30.186022, lng:-95.45035, dir:"19075 Interstate 45 South, Shenandoah", tel:"+1 936-273-9888", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petland Woodlands", cat:"tienda", lat:30.189393, lng:-95.451748, dir:"I-45, Shenandoah", tel:"+18322950892", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sherman-texas": {nombre:"Sherman", centro:[33.639861, -96.608915], tz:"America/Chicago", lugares:[
  {n:"Sherman Animal Shelter", cat:"refugio", lat:33.617629, lng:-96.579377, dir:"1800 East Ida Road, Sherman", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.678093, lng:-96.605005, dir:"3913 North Sam Rayburn Freeway, Sherman", tel:"+1 903-893-4812", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.680984, lng:-96.612498, dir:"4184 Town Center Drive, Sherman", tel:"+1 903-868-3044", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Texoma Veterinary Hospital", cat:"vet", lat:33.693134, lng:-96.648782, dir:"5005 North Heritage Parkway, Sherman", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sherwood": {nombre:"Sherwood", centro:[34.815091, -92.224315], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.786406, lng:-92.223293, dir:"4164 East McCain Boulevard, Sherwood", tel:"+1 501-725-3827", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:34.791275, lng:-92.221745, dir:"4221 East McCain Boulevard, Sherwood", tel:"+1 501-955-2561", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:34.786406, lng:-92.223293, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Interstate Animal Clinic", cat:"vet", lat:34.801484, lng:-92.215428, dir:"Warden Road, Sherwood", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kiehl Avenue Animal Clinic", cat:"vet", lat:34.832369, lng:-92.189712, dir:"3911 East Kiehl Avenue, Sherwood", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Care Veterinary Clinic", cat:"vet", lat:34.869402, lng:-92.197707, dir:"14521 Highway 107, Sherwood", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vets and Pets Veterinary Clinic", cat:"vet", lat:34.798011, lng:-92.237785, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shiner": {nombre:"Shiner", centro:[29.429978, -97.171798], tz:"America/Chicago", lugares:[
  {n:"Shiner Animal Hospital", cat:"vet", lat:29.444093, lng:-97.198223, dir:"2785 US Hwy 90A, Shiner", tel:"+1 361-594-2971", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "shreveport": {nombre:"Shreveport", centro:[32.513536, -93.747784], tz:"America/Chicago", lugares:[
  {n:"Barks & Bubbles Spa", cat:"peluqueria", lat:32.561517, lng:-93.785969, dir:"3147 North Market Street, Shreveport", tel:"+1 318-754-1703", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"North Shreveport Animal Hospital", cat:"vet", lat:32.55012, lng:-93.777115, dir:"850 Havens Road, Shreveport", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "siloam-springs": {nombre:"Siloam Springs", centro:[36.186629, -94.54137], tz:"America/Chicago", lugares:[
  {n:"Tails & Trails Dog Park", cat:"parque", lat:36.187405, lng:-94.550135, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw Place Grooming & Boarding", cat:"refugio", lat:36.179927, lng:-94.497858, tel:"+1 479 228 1235", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Professional Veterinary Services of Siloam Springs", cat:"vet", lat:36.180239, lng:-94.493021, dir:"4710 Highway 412 East, Siloam Springs", tel:"+1 479 373 1400", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Siloam Springs Veterinary Clinic", cat:"vet", lat:36.177706, lng:-94.546519, dir:"504 West Tulsa Street, Siloam Springs", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "silsbee": {nombre:"Silsbee", centro:[30.349098, -94.177963], tz:"America/Chicago", lugares:[
  {n:"Topline Pet Spa & Boutique", cat:"peluqueria", lat:30.347498, lng:-94.178082, dir:"220 East Avenue J, Silsbee", tel:"+1-409-499-7611", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"}
 ]},
 "simonton": {nombre:"Simonton", centro:[29.67923, -95.976855], tz:"America/Chicago", lugares:[
  {n:"Sittin Pretty Pet Salon", cat:"peluqueria", lat:29.676197, lng:-95.976928, dir:"9605 1/2 FM 1489, Simonton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Simonton Veterinary Clinic", cat:"vet", lat:29.679283, lng:-95.974836, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "slaton": {nombre:"Slaton", centro:[33.434368, -101.643524], tz:"America/Chicago", lugares:[
  {n:"South Plains Veterinary Clinic", cat:"vet", lat:33.455448, lng:-101.664786, dir:"1914 North Highway 84, Slaton", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "slidell": {nombre:"Slidell", centro:[30.275195, -89.781175], tz:"America/Chicago", lugares:[
  {n:"Camellia Bark Park", cat:"parque", lat:30.245958, lng:-89.776545, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Slidell Animal Shelter", cat:"refugio", lat:30.265666, lng:-89.770692, dir:"2700 Terrace Avenue, Slidell", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.266165, lng:-89.758427, dir:"290 Town Center Parkway, Slidell", tel:"+1 985-718-3254", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.287009, lng:-89.752874, dir:"280 Kensington Boulevard, Slidell", tel:"+1 985-646-6034", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "smithville-texas": {nombre:"Smithville", centro:[30.005627, -97.155908], tz:"America/Chicago", lugares:[
  {n:"Bark Park", cat:"parque", lat:30.007504, lng:-97.162652, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "snyder-texas": {nombre:"Snyder", centro:[32.71808, -100.918231], tz:"America/Chicago", lugares:[
  {n:"Clippin' K9", cat:"peluqueria", lat:32.701785, lng:-100.92021, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Texas Animal Clinic", cat:"vet", lat:32.726118, lng:-100.891155, dir:"389 County Road 122, Snyder", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "socorro-texas": {nombre:"Socorro", centro:[31.654557, -106.303315], tz:"America/Chicago", lugares:[
  {n:"Best Friends Grooming", cat:"peluqueria", lat:31.766806, lng:-106.317404, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:31.691084, lng:-106.267595, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets' Barn", cat:"tienda", lat:31.76931, lng:-106.318502, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sonora-texas": {nombre:"Sonora", centro:[30.566734, -100.642859], tz:"America/Chicago", lugares:[
  {n:"Sonora Animal Hospital", cat:"vet", lat:30.585309, lng:-100.661962, dir:"300 North Service Road, Sonora", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sour-lake": {nombre:"Sour Lake", centro:[30.140212, -94.411024], tz:"America/Chicago", lugares:[
  {n:"Southeast Texas Equine and Veternary Clinic", cat:"vet", lat:30.130342, lng:-94.404127, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-houston": {nombre:"South Houston", centro:[29.663008, -95.23549], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:29.628765, lng:-95.234515, dir:"10075 Almeda Genoa Road, South Houston", tel:"+1 713-910-0233", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Bay Area Veterinary Specialists", cat:"vet", lat:29.6142, lng:-95.211911, dir:"12855 Gulf Freeway, South Houston", tel:"+1-281-464-3554", horas:[7.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Gulfgate Animal Hospital", cat:"vet", lat:29.701269, lng:-95.29888, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "southlake": {nombre:"Southlake", centro:[32.941236, -97.134178], tz:"America/Chicago", lugares:[
  {n:"Southlake Classic Pet Retreat", cat:"refugio", lat:32.92531, lng:-97.127359, dir:"1211 Brumlow Avenue, Southlake", tel:"+1-817-481-4426", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Earthwise Pet", cat:"tienda", lat:32.94243, lng:-97.152468, dir:"100 West Southlake Boulevard", tel:"+1 817-912-1471", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.942257, lng:-97.124805, dir:"200 Village Center Drive, Southlake", tel:"+1 817-251-6848", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Healthcare Clinic", cat:"vet", lat:32.940483, lng:-97.126491, dir:"1615 East Southlake Boulevard", tel:"+18174811382", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Kitten to Cat Hospital", cat:"vet", lat:32.9399, lng:-97.125029, dir:"711 East Southlake Blvd", tel:"+1-817-488-2272", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Petfolk Veterinary & Urgent Care - Southlake", cat:"vet", lat:32.938896, lng:-97.111381, dir:"2645 East Southlake Boulevard", tel:"+1 682-253-6591", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "southside-place": {nombre:"Southside Place", centro:[29.706063, -95.436885], tz:"America/Chicago", lugares:[
  {n:"City of Bellaire Pound", cat:"refugio", lat:29.690581, lng:-95.447546, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.689432, lng:-95.413433, dir:"8230 Kirby Drive, Southside Place", tel:"+1 713-662-2553", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "splendora": {nombre:"Splendora", centro:[30.232991, -95.161044], tz:"America/Chicago", lugares:[
  {n:"Excel Feed & Pet Supply", cat:"tienda", lat:30.234296, lng:-95.161732, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spring-texas": {nombre:"Spring", centro:[30.079571, -95.418792], tz:"America/Chicago", lugares:[
  {n:"Bibi and Mini-Me Bush Dog Park", cat:"parque", lat:30.082919, lng:-95.378895, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barks and Recreation Pet Suites", cat:"refugio", lat:30.059203, lng:-95.415233, dir:"1103-A Spring Meadow Lane", tel:"+1-832-447-8302", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Suburbia North Animal Hospital", cat:"vet", lat:30.026308, lng:-95.396427, dir:"2005 FM 1960 East, Spring", tel:"+1-281-443-2362", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spring-valley-village": {nombre:"Spring Valley Village", centro:[29.789672, -95.503553], tz:"America/Chicago", lugares:[
  {n:"Spring Branch Pet Patrol Pet Sitting Srvc.", cat:"peluqueria", lat:29.80911, lng:-95.509953, dir:"2098 Laverne Street, Spring Valley Village", tel:"+1-713-461-2857", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "springdale": {nombre:"Springdale", centro:[36.186744, -94.128814], tz:"America/Chicago", lugares:[
  {n:"Large Dog Park", cat:"parque", lat:36.15081, lng:-94.080296, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:36.150786, lng:-94.079743, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spur": {nombre:"Spur", centro:[33.476477, -100.855685], tz:"America/Chicago", lugares:[
  {n:"Spur Veterinary Hospital", cat:"vet", lat:33.46647, lng:-100.836489, dir:"2531 State Highway 70, Spur", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stafford-texas": {nombre:"Stafford", centro:[29.616067, -95.557722], tz:"America/Chicago", lugares:[
  {n:"Lake Olympia Aminal hostpital", cat:"vet", lat:29.564423, lng:-95.569332, dir:"20413 S university Boulevard, Stafford", tel:"+1-281-499-7242", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Stafford Oaks Animal Hospital", cat:"vet", lat:29.613114, lng:-95.581725, dir:"927 Dulles Avenue, Stafford", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "star-city": {nombre:"Star City", centro:[33.942365, -91.844929], tz:"America/Chicago", lugares:[
  {n:"Star City Animal Hospital", cat:"vet", lat:33.929847, lng:-91.844102, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stephenville": {nombre:"Stephenville", centro:[32.220139, -98.204539], tz:"America/Chicago", lugares:[
  {n:"Groomer Has it", cat:"peluqueria", lat:32.199896, lng:-98.245117, dir:"2900 West Washington Street, Stephenville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.201236, lng:-98.242127, dir:"106 Christy Plaza, Stephenville", tel:"+12549657387", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sterling-ridge": {nombre:"Sterling Ridge", centro:[30.192714, -95.562837], tz:"America/Chicago", lugares:[
  {n:"The Grand Estates Dog Park", cat:"parque", lat:30.188325, lng:-95.588876, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.219323, lng:-95.565129, dir:"32962 FM 2978, Sterling Ridge", tel:"+1 281-259-5996", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.219306, lng:-95.564952, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bear Branch Animal Hospital", cat:"vet", lat:30.195301, lng:-95.587822, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lone Star Animal Hospital", cat:"vet", lat:30.22468, lng:-95.555252, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Clinic", cat:"vet", lat:30.221853, lng:-95.564458, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stillwater-oklahoma": {nombre:"Stillwater", centro:[36.115631, -97.058572], tz:"America/Chicago", lugares:[
  {n:"Stillwaggin Dog Park", cat:"parque", lat:36.109248, lng:-97.068757, dir:"801 West 11th Avenue, Stillwater", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Attaboy Boarding Kennels", cat:"refugio", lat:36.209456, lng:-97.053941, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.144021, lng:-97.053993, dir:"2170 North Perkins Road, Stillwater", tel:"+1 405-707-0590", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"All Pets", cat:"vet", lat:36.106195, lng:-97.086732, dir:"South Western Road, Stillwater", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Baker Animal Clinic", cat:"vet", lat:36.142051, lng:-97.068051, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"David L Boren Veterinary Medical Teaching Hospital", cat:"vet", lat:36.123956, lng:-97.084454, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary House Call Services", cat:"vet", lat:36.199786, lng:-97.102453, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Western Veterinary Hospital", cat:"vet", lat:36.115472, lng:-97.087805, dir:"2315 W 6TH AVE, Stillwater", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stonewall": {nombre:"Stonewall", centro:[32.281825, -93.82407], tz:"America/Chicago", lugares:[
  {n:"Chimp Haven", cat:"zoo", lat:32.254712, lng:-93.943897, dir:"13600 Chimpanzee Pl, Stonewall", tel:"+13189259575", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stratford-texas": {nombre:"Stratford", centro:[36.33614, -102.072119], tz:"America/Chicago", lugares:[
  {n:"Western Organics", cat:"tienda", lat:36.335766, lng:-102.063866, dir:"119 South Spruce Street, Stratford", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stuttgart": {nombre:"Stuttgart", centro:[34.500375, -91.552628], tz:"America/Chicago", lugares:[
  {n:"Wiggly Buttz", cat:"peluqueria", lat:34.500736, lng:-91.552179, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sugar-land": {nombre:"Sugar Land", centro:[29.619679, -95.634946], tz:"America/Chicago", lugares:[
  {n:"Splash and Dash", cat:"peluqueria", lat:29.583893, lng:-95.647009, dir:"13513 University Boulevard, Sugar Land", tel:"+1 346-521-4010", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Zoom Room Dog Training -Sugar land", cat:"peluqueria", lat:29.595692, lng:-95.626999, dir:"16322A Southwest Freeway, Sugar Land", tel:"+18329874524", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.593211, lng:-95.635664, dir:"16758 Southwest Freeway, Sugar Land", tel:"+1 281-494-8787", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.660496, lng:-95.710694, dir:"10181 West Grand Parkway South, Sugar Land", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.590539, lng:-95.603985, dir:"3326 State Highway 6 South, Sugar Land", tel:"+1 281-265-0700", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.654035, lng:-95.708522, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"ABC Animal & Bird Clinic", cat:"vet", lat:29.642219, lng:-95.652231, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aliana Animal Hospital", cat:"vet", lat:29.64835, lng:-95.678127, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Embrace Veterinary Care Animal Hospital", cat:"vet", lat:29.660624, lng:-95.68616, dir:"10510 FM 1464, Sugar Land", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Family Pet Care", cat:"vet", lat:29.59805, lng:-95.626247, dir:"16111 Kensington Drive, Sugar Land", tel:"+1 281-232-0628", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Houston Animal Hospital", cat:"vet", lat:29.646562, lng:-95.649948, dir:"11629 Highway 6 South, Sugar Land", tel:"+1 832-999-4151", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Neighborhood Pet Hospital", cat:"vet", lat:29.651883, lng:-95.703677, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Check", cat:"vet", lat:29.682619, lng:-95.716071, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sugar Land Pet Hospital", cat:"vet", lat:29.639378, lng:-95.618218, dir:"1216 Eldridge Road, Sugar Land", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sugar Land Veterinary Clinic", cat:"vet", lat:29.608856, lng:-95.647109, dir:"400 Promenade Way, Sugar Land", tel:"+1 281-800-9003", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"easyvet", cat:"vet", lat:29.653669, lng:-95.714159, dir:"11143 Harlem Road, Sugar Land", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sulphur": {nombre:"Sulphur", centro:[30.236594, -93.377378], tz:"America/Chicago", lugares:[
  {n:"Fideaux Field", cat:"parque", lat:30.224166, lng:-93.384436, dir:"900 West Parish Road, Sulphur", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pretty Paws Pet Spa & Boutique", cat:"peluqueria", lat:30.237137, lng:-93.37877, dir:"210 West Napoleon Street, Sulphur", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bright Animal Care", cat:"refugio", lat:30.227183, lng:-93.357399, dir:"1709 Maplewood Drive, Sulphur", tel:"+1-337-888-3028", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSense", cat:"tienda", lat:30.227637, lng:-93.361484, dir:"1585 Cypress Street, Sulphur", tel:"+1 337-527-9040", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Southwest Louisiana Veterinary Clinic", cat:"vet", lat:30.236821, lng:-93.37833, dir:"128 West Napoleon Street, Sulphur", tel:"+1 337-527-7143", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Sulphur Animal Clinic", cat:"vet", lat:30.195272, lng:-93.375722, dir:"3811 Louisiana Highway 27, Sulphur", tel:"+1 337-583-4801", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Almosta Ranch", cat:"zoo", lat:30.174561, lng:-93.433843, dir:"5290 Choupique Road, Sulphur", tel:"+1-337-383-3685", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "sulphur-oklahoma": {nombre:"Sulphur", centro:[34.509684, -96.974653], tz:"America/Chicago", lugares:[
  {n:"Arbuckle Veterinary Clinic", cat:"vet", lat:34.506834, lng:-97.007249, dir:"2800 West Broadway Avenue, Sulphur", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sulphur-springs-texas": {nombre:"Sulphur Springs", centro:[33.138489, -95.601014], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:33.109622, lng:-95.595909, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sulphur Springs Vet Clinic", cat:"vet", lat:33.118235, lng:-95.63075, dir:"1360 Shannon Road West, Sulphur Springs", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sunnyvale-texas": {nombre:"Sunnyvale", centro:[32.796517, -96.560824], tz:"America/Chicago", lugares:[
  {n:"P'etcetera Boarding and Grooming", cat:"peluqueria", lat:32.822761, lng:-96.620226, dir:"4320 North Galloway Avenue, Sunnyvale", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawtham City", cat:"refugio", lat:32.776632, lng:-96.567779, dir:"244 South Collins Road, Sunnyvale", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sunnyvale Animal Shelter", cat:"refugio", lat:32.772971, lng:-96.564799, dir:"371 Long Creek Road, Sunnyvale", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BluePearl", cat:"vet", lat:32.827867, lng:-96.596387, dir:"4651 North Belt Line Road, Sunnyvale", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petmobile Pet Hospital", cat:"vet", lat:32.837837, lng:-96.598564, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:32.800337, lng:-96.596535, dir:"2555 North Belt Line Road, Sunnyvale", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sunset-valley": {nombre:"Sunset Valley", centro:[30.225804, -97.814965], tz:"America/Chicago", lugares:[
  {n:"Neighbors", cat:"parque", lat:30.203677, lng:-97.774235, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Quest Dog Park", cat:"parque", lat:30.232591, lng:-97.788919, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Acre", cat:"parque", lat:30.19805, lng:-97.768683, dir:"6201 Crow Lane, Sunset Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Preserve at Travis Creek - Dog Park", cat:"parque", lat:30.247597, lng:-97.843684, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Windsor Oak Hill Dog Park", cat:"parque", lat:30.247826, lng:-97.860913, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Work & Woof", cat:"parque", lat:30.212757, lng:-97.771635, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Groovy Dog Bakery", cat:"tienda", lat:30.230728, lng:-97.799024, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.230339, lng:-97.816451, dir:"5207 Brodie Lane, Sunset Valley", tel:"+1 512-358-0127", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.235955, lng:-97.875744, dir:"7010 West Highway 71, Sunset Valley", tel:"+1 512-712-7121", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.227886, lng:-97.819141, dir:"5601 Brodie Lane, Sunset Valley", tel:"+1 512-892-3996", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Tomlinson's Feed", cat:"tienda", lat:30.234188, lng:-97.792709, dir:"4211 South Lamar Boulevard, Sunset Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Austin Pets Alive! Medical Clinic", cat:"vet", lat:30.234017, lng:-97.816271, dir:"4900 West US 290 Frontage Road, Sunset Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brodie Animal Hospital", cat:"vet", lat:30.21274, lng:-97.830074, dir:"3421 West William Cannon Drive, Sunset Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Capital Veterinary Clinic", cat:"vet", lat:30.213876, lng:-97.770034, dir:"4800 South Congress Avenue, Sunset Valley", tel:"+1-512-442-1496", horas:[9.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Clinic", cat:"vet", lat:30.235956, lng:-97.876834, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Manchaca Road Animal Hospital", cat:"vet", lat:30.214712, lng:-97.799724, dir:"5720 Manchaca Road, Sunset Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:30.232015, lng:-97.794355, dir:"2417 West Ben White Boulevard, Sunset Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westgate Pet & Bird Hospital", cat:"vet", lat:30.231303, lng:-97.801288, dir:"4534 West Gate Boulevard, Sunset Valley", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sweetwater-texas": {nombre:"Sweetwater", centro:[32.470952, -100.405938], tz:"America/Chicago", lugares:[
  {n:"Lindy's Dog Grooming", cat:"peluqueria", lat:32.482661, lng:-100.382493, dir:"2301 East Broadway Street, Sweetwater", tel:"+13252354634", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sweetwater Animal Control", cat:"refugio", lat:32.482448, lng:-100.379942, dir:"111 Tonkawa Street, Sweetwater", tel:"+13252366139", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East Ridge Veterinary Hospital", cat:"vet", lat:32.481712, lng:-100.384799, dir:"2110 East Broadway Street, Sweetwater", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sweetwater Veterinary Hospital", cat:"vet", lat:32.482743, lng:-100.382264, dir:"2303 East Broadway Street, Sweetwater", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "taft-texas": {nombre:"Taft", centro:[27.978974, -97.397976], tz:"America/Chicago", lugares:[
  {n:"Floerke Veterinary Clinic", cat:"vet", lat:27.946869, lng:-97.355149, dir:"5248 County Road 3567, Taft", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "talty": {nombre:"Talty", centro:[32.683187, -96.385539], tz:"America/Chicago", lugares:[
  {n:"Pet Country Spa", cat:"peluqueria", lat:32.741315, lng:-96.362405, dir:"6160 West US Highway 80, Talty", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "taylor-lake-village": {nombre:"Taylor Lake Village", centro:[29.576984, -95.055331], tz:"America/Chicago", lugares:[
  {n:"Apawllo 13", cat:"peluqueria", lat:29.594964, lng:-95.112725, dir:"16212 Hickory Knoll Drive, Taylor Lake Village", tel:"+1-833-272-9556", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.606296, lng:-95.123946, dir:"5440 El Dorado Boulevard, Taylor Lake Village", tel:"+1 281-667-9435", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:29.60602, lng:-95.123471, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "taylor-texas": {nombre:"Taylor", centro:[30.572885, -97.414105], tz:"America/Chicago", lugares:[
  {n:"Petsense", cat:"tienda", lat:30.594497, lng:-97.412399, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sweet Eats Adventure Farm & Petting Zoo", cat:"zoo", lat:30.637325, lng:-97.461996, dir:"14400 TX 29 East, Taylor", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "telferner": {nombre:"Telferner", centro:[28.847045, -96.88901], tz:"America/Chicago", lugares:[
  {n:"Adopt A Pet Victoria", cat:"tienda", lat:28.839646, lng:-96.912179, dir:"8215 Houston Highway, Telferner", tel:"+13615757387", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "temple-texas": {nombre:"Temple", centro:[31.098375, -97.342956], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:31.094858, lng:-97.384666, dir:"3550 South General Bruce Drive, Temple", tel:"+1 254-742-1816", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:31.078576, lng:-97.37751, dir:"2112 Southwest H K Dodgen Loop, Temple", tel:"+1 254-770-1333", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Emergency Center of Temple-Belton", cat:"vet", lat:31.088209, lng:-97.388144, dir:"3809 South General Bruce Drive, Temple", tel:"+1 254-231-3774", horas:[0.0, 24.0], nota:"Dato de OpenStreetMap"},
  {n:"Loop 363 Animal Hospital", cat:"vet", lat:31.070843, lng:-97.355222, dir:"106 Southwest H K Dodgen Loop, Temple", tel:"+1 254-742-1516", horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "terrell": {nombre:"Terrell", centro:[32.735963, -96.275257], tz:"America/Chicago", lugares:[
  {n:"Bones & Bows", cat:"peluqueria", lat:32.734743, lng:-96.275651, dir:"210B South Virginia Street, Terrell", horas:[8.0, 24.0], nota:"Dato de OpenStreetMap"}
 ]},
 "terrell-hills": {nombre:"Terrell Hills", centro:[29.477256, -98.446488], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:29.488634, lng:-98.448063, dir:"1211 Austin Highway, Terrell Hills", tel:"+1 210-824-0318", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Loop 410 Veterinary Hospital", cat:"vet", lat:29.525913, lng:-98.438712, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "terrytown": {nombre:"Terrytown", centro:[29.910205, -90.032571], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:29.923056, lng:-90.01189, dir:"3018 Holiday Drive, Terrytown", tel:"+1 504-392-0956", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "texarkana": {nombre:"Texarkana", centro:[33.425426, -94.043094], tz:"America/Chicago", lugares:[
  {n:"Kylee Sullivan Dog Park", cat:"parque", lat:33.467627, lng:-94.058225, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "the-colony": {nombre:"The Colony", centro:[33.089009, -96.886392], tz:"America/Chicago", lugares:[
  {n:"Pawsome Playground Dog Park", cat:"parque", lat:33.10203, lng:-96.890037, dir:"4800 e. lake highlands dr, The Colony", tel:"+1-972-625-1105", horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Ruff Range Dog Park", cat:"parque", lat:33.122302, lng:-96.861292, dir:"5335 4th Army Drive, The Colony", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pappy’s Pet Lodge", cat:"refugio", lat:33.073251, lng:-96.875723, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Colony Animal Services", cat:"refugio", lat:33.103334, lng:-96.890593, dir:"4720 East Lake Highlands Drive, The Colony", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.064811, lng:-96.883235, dir:"4854 Highway 121, The Colony", tel:"+1 469-362-2824", horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.106244, lng:-96.840529, dir:"5399 Warren Parkway, The Colony", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stonebriar Veterinary Centre", cat:"vet", lat:33.090383, lng:-96.837857, dir:"5720 Town & Country Boulevard, The Colony", tel:"+1-972-712-8387", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Colony Animal Clinic", cat:"vet", lat:33.087545, lng:-96.8761, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "the-falls-at-imperial-oaks": {nombre:"The Falls at Imperial Oaks", centro:[30.144574, -95.383039], tz:"America/Chicago", lugares:[
  {n:"True Animal Vet", cat:"vet", lat:30.126211, lng:-95.363418, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "the-hills": {nombre:"The Hills", centro:[30.346913, -97.986451], tz:"America/Chicago", lugares:[
  {n:"Sydnees Pet Groomin", cat:"peluqueria", lat:30.337683, lng:-97.970416, dir:"2300 Lohmans Spur, The Hills", tel:"+1-737-300-1001", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Tomlinson's", cat:"tienda", lat:30.340546, lng:-97.967201, dir:"2303 Ranch Road 620 South, The Hills", tel:"+1-512-344-9111", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Tomlinson's Pet Supply", cat:"tienda", lat:30.34618, lng:-97.966572, dir:"2009 Main Street, The Hills", tel:"+1-512-344-9111", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Lakeway Veterinary Clinic", cat:"vet", lat:30.353212, lng:-97.961301, dir:"1003 Ranch Road 620, The Hills", tel:"+1 512 263 2134", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Terrell Animal Hospital", cat:"vet", lat:30.346509, lng:-97.963188, dir:"2 Lakeway Centre Court, The Hills", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "the-village": {nombre:"The Village", centro:[35.565855, -97.549419], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:35.565279, lng:-97.568619, dir:"2950 West Britton Road, The Village", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.61433, lng:-97.548005, dir:"14120 North Pennsylvania Avenue, The Village", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pettito", cat:"tienda", lat:35.61305, lng:-97.559283, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blue Pearl Vet Surgery", cat:"vet", lat:35.607809, lng:-97.544792, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bluepearl Veterinary", cat:"vet", lat:35.610508, lng:-97.536938, dir:"West Memorial Road, The Village", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Britton Road Veterinary Clinic", cat:"vet", lat:35.565452, lng:-97.566386, dir:"2826 West Britton Road, The Village", tel:"+1 405 751 8007", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"The Village Animal Hospital", cat:"vet", lat:35.579881, lng:-97.566289, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Emergency", cat:"vet", lat:35.608199, lng:-97.544808, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Emergency Group", cat:"vet", lat:35.604155, lng:-97.533261, dir:"13230 Pawnee Drive, The Village", tel:"+1 405 256 4391", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "thibodaux": {nombre:"Thibodaux", centro:[29.795763, -90.822871], tz:"America/Chicago", lugares:[
  {n:"Acadia Villas Dog Park", cat:"parque", lat:29.779477, lng:-90.798665, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Norman Swanner", cat:"parque", lat:29.802705, lng:-90.820315, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"De La Houssaye Animal Hospital", cat:"vet", lat:29.805585, lng:-90.817956, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "thompsons": {nombre:"Thompsons", centro:[29.497738, -95.584946], tz:"America/Chicago", lugares:[
  {n:"Natural Pawz", cat:"tienda", lat:29.550824, lng:-95.585443, dir:"18841 University Boulevard, Thompsons", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tiki-island": {nombre:"Tiki Island", centro:[29.297044, -94.917453], tz:"America/Chicago", lugares:[
  {n:"Campeche Cove All Animal Hospital", cat:"vet", lat:29.252046, lng:-94.866988, dir:"10015 Stewart Road, Tiki Island", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tomball": {nombre:"Tomball", centro:[30.097162, -95.616055], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:30.091854, lng:-95.640985, dir:"14420 FM 2920, Tomball", tel:"+1 281-516-0834", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Spring Creek Animal Hospital", cat:"vet", lat:30.100849, lng:-95.615824, dir:"101 Epps Street, Tomball", tel:"+1-281-351-7184", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Texas Litter Control", cat:"vet", lat:30.087281, lng:-95.632963, dir:"28439 Tomball Parkway", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Tomball Animal Hospital", cat:"vet", lat:30.094561, lng:-95.623236, dir:"802 West Main Street, Tomball", tel:"+1-281-351-4300", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tontitown": {nombre:"Tontitown", centro:[36.177856, -94.23354], tz:"America/Chicago", lugares:[
  {n:"Dog Party USA", cat:"refugio", lat:36.163996, lng:-94.210982, dir:"912 South Maestri Road, Tontitown", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Whole Pet", cat:"tienda", lat:36.178244, lng:-94.190119, tel:"+1 479 419 4993", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Emrgency Clinic", cat:"vet", lat:36.179228, lng:-94.190196, tel:"+1 479 927 0007", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"LVCC Veterinary Care Center", cat:"vet", lat:36.176256, lng:-94.2854, dir:"222 Fiori Street, Tontitown", tel:"+1 479 361 9417", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "town-center": {nombre:"Town Center", centro:[30.16283, -95.460911], tz:"America/Chicago", lugares:[
  {n:"Natural Pawz", cat:"tienda", lat:30.169491, lng:-95.459412, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Fair", cat:"tienda", lat:30.164979, lng:-95.457152, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tulsa": {nombre:"Tulsa", centro:[36.156312, -95.992752], tz:"America/Chicago", lugares:[
  {n:"Tails and Ales", cat:"parque", lat:36.134769, lng:-95.985527, dir:"1903 South Boston Avenue East, Tulsa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sloppy Dog Wash", cat:"peluqueria", lat:36.090706, lng:-95.97498, dir:"4963 South Peoria Avenue East, Tulsa", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"D. O. G. On Harvard", cat:"refugio", lat:36.147162, lng:-95.940141, dir:"1113 South Harvard Avenue East, Tulsa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws On Peoria", cat:"refugio", lat:36.151737, lng:-95.975182, dir:"609 South Peoria Avenue East, Tulsa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spirit Ranch Personal Dog Training", cat:"refugio", lat:36.148079, lng:-95.968873, dir:"1621 East 11th Street South, Tulsa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Street Cats", cat:"refugio", lat:36.118364, lng:-95.923347, dir:"3105 South Winston Avenue East, Tulsa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Dish", cat:"tienda", lat:36.122134, lng:-95.939927, dir:"2803 South Harvard Avenue East, Tulsa", tel:"+1 539 430 1442", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.103647, lng:-95.914447, dir:"5418 East 41st Street South, Tulsa", tel:"+1 918-622-6900", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Southern Agriculture", cat:"tienda", lat:36.124835, lng:-95.941009, dir:"2610 South Harvard Avenue East, Tulsa", tel:"+1 918 747 6872", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Alta Vista Animal Hospital", cat:"vet", lat:36.133814, lng:-95.89029, dir:"7717 East 21st Street South, Tulsa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brookside Animal Hospital", cat:"vet", lat:36.095501, lng:-95.975292, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carbondale Veterinary Hospital", cat:"vet", lat:36.093716, lng:-96.012051, dir:"4750 South Union Avenue West, Tulsa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cedarwood Veterinary Clinic", cat:"vet", lat:36.141703, lng:-95.940662, dir:"1420 South Harvard Avenue East, Tulsa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Veteranary Hospital", cat:"vet", lat:36.111805, lng:-95.976109, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Elm Creek Animal Hospital", cat:"vet", lat:36.145238, lng:-95.975376, dir:"1219 South Peoria Avenue East, Tulsa", tel:"+1 918 508 7010", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jacox Animal Clinic", cat:"vet", lat:36.140245, lng:-95.950095, dir:"2732 East 15th Street South, Tulsa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawsitive Veterinary Care", cat:"vet", lat:36.15574, lng:-96.021004, dir:"104 North Gilcrease Museum Road, Tulsa", tel:"+1 918 585 9369", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ranch Acres Veterinary Hospital", cat:"vet", lat:36.115589, lng:-95.940006, dir:"3241 South Harvard Avenue East, Tulsa", tel:"+1 918 747 5970", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Riverbrook Animal Hospital", cat:"vet", lat:36.108071, lng:-95.975951, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"STATVet Animal Urgent Care", cat:"vet", lat:36.14025, lng:-95.951322, dir:"2702 East 15th Street South, Tulsa", tel:"+1 918 398 0838", horas:[12.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Sheridan Road Veterinary Clinic", cat:"vet", lat:36.168282, lng:-95.904995, dir:"1010 North Sheridan Road East, Tulsa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Skyline Animal Hospital", cat:"vet", lat:36.158241, lng:-95.988265, horas:[7.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Small Animal Clinic of Tulsa", cat:"vet", lat:36.115378, lng:-95.923042, dir:"4820 East 33rd Street South, Tulsa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tulsa Town Veterinary Hospital", cat:"vet", lat:36.103928, lng:-95.940807, dir:"3166 East 41st Street South, Tulsa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodland Central Animal Hospital", cat:"vet", lat:36.097489, lng:-95.916788, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "turley": {nombre:"Turley", centro:[36.242036, -95.975831], tz:"America/Chicago", lugares:[
  {n:"Tulsa Zoo", cat:"zoo", lat:36.211424, lng:-95.907452, dir:"6421 East 36th Street North, Turley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tulsa Zoo", cat:"zoo", lat:36.213458, lng:-95.905076, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tyler-texas": {nombre:"Tyler", centro:[32.35126, -95.301062], tz:"America/Chicago", lugares:[
  {n:"DogPark", cat:"parque", lat:32.305899, lng:-95.262657, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tyler Animal Control", cat:"refugio", lat:32.343596, lng:-95.347437, dir:"4218 Chandler Highway, Tyler", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.287157, lng:-95.301363, dir:"5610 South Broadway Avenue, Tyler", tel:"+1 903-534-5261", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Tyler Animal Emergency Hospital", cat:"vet", lat:32.303943, lng:-95.316149, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tyler Veterinary Center", cat:"vet", lat:32.300805, lng:-95.304745, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Caldwell Zoo", cat:"zoo", lat:32.371097, lng:-95.325401, dir:"2203 West Martin Luther King Jr Boulevard, Tyler", tel:"+1 903-593-0121", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "universal-city": {nombre:"Universal City", centro:[29.548007, -98.291123], tz:"America/Chicago", lugares:[
  {n:"Pat Booker Road Animal Hospital", cat:"vet", lat:29.553377, lng:-98.307018, dir:"1706 Pat Booker Rd, Universal City", tel:"+12106586218", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "university-park-texas": {nombre:"University Park", centro:[32.855127, -96.791945], tz:"America/Chicago", lugares:[
  {n:"The Village WAG", cat:"parque", lat:32.856985, lng:-96.758673, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"White Rock Lake Dog Park", cat:"parque", lat:32.851863, lng:-96.725396, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Adorable Grooms", cat:"peluqueria", lat:32.900528, lng:-96.7698, tel:"+1-972-629-9554", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wagmaster", cat:"peluqueria", lat:32.870313, lng:-96.767471, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Tails", cat:"refugio", lat:32.864686, lng:-96.71159, dir:"10121 East Northwest Highway, University Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ruffit", cat:"refugio", lat:32.907883, lng:-96.805935, horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"White Rock Stables", cat:"refugio", lat:32.862286, lng:-96.728679, dir:"8949 Lanshire Drive, University Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yardstick Dog Hotel", cat:"refugio", lat:32.857562, lng:-96.753271, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollyweed Feed", cat:"tienda", lat:32.876669, lng:-96.733578, dir:"7150 Skillman Street, University Park", tel:"+1 469-453-6247", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:32.893465, lng:-96.803243, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lucky Dog Barkery", cat:"tienda", lat:32.864035, lng:-96.80257, dir:"8320 Preston Center Plaza, University Park", tel:"+12143686000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.857438, lng:-96.752902, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.854578, lng:-96.768444, dir:"5500 Greenville Avenue, University Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.850871, lng:-96.80921, dir:"4325 Lovers Lane, University Park", tel:"+1 214-522-4893", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:32.909946, lng:-96.802734, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"CityVet + Urgent Care", cat:"vet", lat:32.907371, lng:-96.804564, dir:"11661 Preston Road, University Park", tel:"+1-214-361-0444", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"East Lake Cat Care Center", cat:"vet", lat:32.865491, lng:-96.713427, dir:"10040 Shoreview Road, University Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East Lake Veterinary Hospital", cat:"vet", lat:32.864571, lng:-96.71261, dir:"10101 East Northwest Highway, University Park", horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Meadow Central Veterinary Clinic", cat:"vet", lat:32.888582, lng:-96.771702, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Midway Hollow Veterinary Clinic", cat:"vet", lat:32.861265, lng:-96.852813, dir:"3780 West Northwest Highway, University Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Modern Animal - Park Cities", cat:"vet", lat:32.851448, lng:-96.820715, dir:"5301 West Lovers Lane, University Park", tel:"+1 469-373-9338", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Preston Royal Animal Clinic", cat:"vet", lat:32.893706, lng:-96.802315, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Skillman Animal Clinic", cat:"vet", lat:32.877271, lng:-96.718737, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "uvalde": {nombre:"Uvalde", centro:[29.209802, -99.785994], tz:"America/Chicago", lugares:[
  {n:"Petsense", cat:"tienda", lat:29.221928, lng:-99.766161, dir:"2270 East Main Street, Uvalde", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "victoria-texas": {nombre:"Victoria", centro:[28.799755, -97.006425], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:28.864822, lng:-97.000666, dir:"7812 Northeast Zac Lentz Parkway, Victoria", tel:"+1 361-576-0659", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Texas Zoo", cat:"zoo", lat:28.80926, lng:-97.018779, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vidor": {nombre:"Vidor", centro:[30.131328, -94.014802], tz:"America/Chicago", lugares:[
  {n:"McGowan Veterinary Hospital", cat:"vet", lat:30.13712, lng:-94.01585, dir:"1070 North Main Street, Vidor", tel:"+14097699664", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vienna-louisiana": {nombre:"Vienna", centro:[32.590982, -92.647927], tz:"America/Chicago", lugares:[
  {n:"Petite Paws Pet Hotel", cat:"refugio", lat:32.628186, lng:-92.617177, dir:"1487 Della Road, Vienna", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ruston Animal Clinic", cat:"vet", lat:32.57531, lng:-92.643859, dir:"5523 Highway 167, Vienna", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vilonia": {nombre:"Vilonia", centro:[35.083975, -92.207928], tz:"America/Chicago", lugares:[
  {n:"Vilonia Veterinary Clinic", cat:"vet", lat:35.084449, lng:-92.272051, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vinton-texas": {nombre:"Vinton", centro:[31.956262, -106.595383], tz:"America/Chicago", lugares:[
  {n:"Northeast Region Dog Park", cat:"parque", lat:31.934159, lng:-106.402979, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "volente": {nombre:"Volente", centro:[30.433811, -97.903623], tz:"America/Chicago", lugares:[
  {n:"A Fishie Anado", cat:"tienda", lat:30.388544, lng:-97.883586, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Natural Pawz", cat:"tienda", lat:30.38848, lng:-97.883529, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waco-texas": {nombre:"Waco", centro:[31.554515, -97.132562], tz:"America/Chicago", lugares:[
  {n:"Northside Animal Hospital", cat:"vet", lat:31.562493, lng:-97.181681, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bill & Eva Williams Bear Habitat", cat:"zoo", lat:31.547458, lng:-97.1215, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cameron Park Zoo", cat:"zoo", lat:31.571079, lng:-97.145784, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wagoner": {nombre:"Wagoner", centro:[35.959353, -95.375653], tz:"America/Chicago", lugares:[
  {n:"Pryor Vet South", cat:"vet", lat:35.936901, lng:-95.396528, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wake-village": {nombre:"Wake Village", centro:[33.425529, -94.112195], tz:"America/Chicago", lugares:[
  {n:"Ark La Tex Animal Clinic", cat:"vet", lat:33.43832, lng:-94.084195, dir:"3204 New Boston Road, Wake Village", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oubre Animal Clinic", cat:"vet", lat:33.424715, lng:-94.12625, dir:"423 West Greenfield Drive, Wake Village", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Richmond Road Animal Hospital", cat:"vet", lat:33.451181, lng:-94.077727, dir:"1708 Richmond Road, Wake Village", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westridge Animal Hospital", cat:"vet", lat:33.442881, lng:-94.099824, dir:"3909 New Boston Road, Wake Village", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "walker-louisiana": {nombre:"Walker", centro:[30.487968, -90.861488], tz:"America/Chicago", lugares:[
  {n:"Sidney Hutchinson Dog Park", cat:"parque", lat:30.498334, lng:-90.850684, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Walker Animal Control and Shelter", cat:"refugio", lat:30.498251, lng:-90.858015, dir:"13740 Ball Park Road, Walker", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hope Veterinary Clinic", cat:"vet", lat:30.486556, lng:-90.873529, dir:"9792 Florida Boulevard, Walker", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "walnut-hills": {nombre:"Walnut Hills", centro:[35.240968, -101.896276], tz:"America/Chicago", lugares:[
  {n:"Bark Avenue @ The Trails", cat:"peluqueria", lat:35.222644, lng:-101.879371, dir:"3730 West Amarillo Boulevard, Walnut Hills", tel:"+18063429962", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggie Stylin Spaw", cat:"peluqueria", lat:35.187919, lng:-101.903324, dir:"2300 Bell Street, Walnut Hills", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sidekicks Stay & Play", cat:"peluqueria", lat:35.213698, lng:-101.907612, dir:"8723 Plum Creek Drive, Walnut Hills", tel:"+1-806-395-3133", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"vet", lat:35.199723, lng:-101.908093, dir:"6201 West Amarillo Boulevard, Walnut Hills", tel:"+1-806-358-7831", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Swann Animal Clinic", cat:"vet", lat:35.213787, lng:-101.907782, dir:"8723 Plum Creek Drive, Walnut Hills", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "warfield-texas": {nombre:"Warfield", centro:[31.921642, -102.219196], tz:"America/Chicago", lugares:[
  {n:"Scrub A Dub Pet Salon", cat:"peluqueria", lat:31.916371, lng:-102.290564, dir:"4103 Faudree Road, Warfield", tel:"+1-432-235-7017", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "waring": {nombre:"Waring", centro:[29.951438, -98.804209], tz:"America/Chicago", lugares:[
  {n:"Kendall County Animal Shelter", cat:"refugio", lat:29.887789, lng:-98.812143, dir:"702 FM 289, Waring", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waters Veterinary Services", cat:"vet", lat:29.980488, lng:-98.720029, dir:"1233 Sisterdale Road, Waring", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "warr-acres": {nombre:"Warr Acres", centro:[35.522557, -97.618935], tz:"America/Chicago", lugares:[
  {n:"Alligator Alley", cat:"tienda", lat:35.478609, lng:-97.60515, dir:"4636 Northwest 10th Street, Warr Acres", tel:"+1-405-949-2553", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.559021, lng:-97.637651, dir:"7001 Northwest Expressway, Warr Acres", tel:"+1 405-720-2298", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Crestwood Animal Hospital", cat:"vet", lat:35.562689, lng:-97.620338, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hefner Road Animal Hospital", cat:"vet", lat:35.579786, lng:-97.639782, dir:"7124 West Hefner Road, Warr Acres", tel:"+1-405-773-5557", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rockwell Pet Clinic", cat:"vet", lat:35.565077, lng:-97.63788, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wedgewood Pet Clinic", cat:"vet", lat:35.539513, lng:-97.59458, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waskom": {nombre:"Waskom", centro:[32.478764, -94.05963], tz:"America/Chicago", lugares:[
  {n:"Tiller Veterinary Clinic", cat:"vet", lat:32.469632, lng:-94.054911, dir:"810 Spur 156, Waskom", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "watauga-texas": {nombre:"Watauga", centro:[32.857906, -97.254737], tz:"America/Chicago", lugares:[
  {n:"My Favorite Groomer", cat:"peluqueria", lat:32.846393, lng:-97.264484, dir:"5413 Denton Highway, Watauga", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.882242, lng:-97.258862, dir:"7616 Denton Highway, Watauga", tel:"+1 817-428-6241", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.8885, lng:-97.258632, dir:"8004 Denton Highway, Watauga", tel:"+1 817-485-9027", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:32.882258, lng:-97.258708, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Family Pet Clinic", cat:"vet", lat:32.859924, lng:-97.236631, dir:"6724 Mid Cities Boulevard, Watauga", tel:"+1 817-788-2525", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Fossil Creek Animal Hospital", cat:"vet", lat:32.859515, lng:-97.289482, dir:"6370 North Beach Street, Watauga", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Summerfields Animal Hospital", cat:"vet", lat:32.892932, lng:-97.288135, dir:"4536 North Tarrant Parkway, Watauga", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Watauga Animal Hospital", cat:"vet", lat:32.884907, lng:-97.259558, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "watson-louisiana": {nombre:"Watson", centro:[30.575743, -90.953157], tz:"America/Chicago", lugares:[
  {n:"Watson Pet Hospital", cat:"vet", lat:30.538735, lng:-90.956416, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "watts": {nombre:"Watts", centro:[36.109249, -94.57022], tz:"America/Chicago", lugares:[
  {n:"Joint Forces K9 Group", cat:"refugio", lat:36.115911, lng:-94.426618, dir:"17590 Highway 16, Watts", tel:"+1-479-802-0775", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "waxahachie": {nombre:"Waxahachie", centro:[32.394491, -96.843936], tz:"America/Chicago", lugares:[
  {n:"Lucky Love Dog Grooming", cat:"peluqueria", lat:32.41052, lng:-96.843268, dir:"507 North US Highway 77, Waxahachie", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.412172, lng:-96.843591, dir:"791 North US Highway 77, Waxahachie", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Waxahachie Veterinary Clinic", cat:"vet", lat:32.416047, lng:-96.823496, dir:"2300 Brown Street, Waxahachie", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "weatherford-texas": {nombre:"Weatherford", centro:[32.758965, -97.797075], tz:"America/Chicago", lugares:[
  {n:"Parker County Pooch Parlor", cat:"peluqueria", lat:32.762635, lng:-97.831089, dir:"Suite 305 1886 Mineral Wells Highway, Weatherford", tel:"+1 682-499-3725", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Weatherford Parker County Animal Shelter", cat:"refugio", lat:32.749667, lng:-97.770001, dir:"409 Hickory Lane, Weatherford", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.728262, lng:-97.797628, dir:"222 West Interstate 20, Weatherford", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.72738, lng:-97.782741, dir:"138 East Interstate 20 Frontage Road, Weatherford", tel:"+1 817-598-0702", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Foland Veterinary Services", cat:"vet", lat:32.758366, lng:-97.809065, dir:"803 Palo Pinto Street, Weatherford", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Texas Coalition for Animal Protection", cat:"vet", lat:32.743625, lng:-97.798163, dir:"1302 South Main Street, Weatherford", tel:"+1-940-566-5551", horas:[9.0, 12.0], nota:"Dato de OpenStreetMap"}
 ]},
 "webberville-texas": {nombre:"Webberville", centro:[30.231045, -97.516665], tz:"America/Chicago", lugares:[
  {n:"Barking Springs Dog Ranch", cat:"refugio", lat:30.212292, lng:-97.539699, dir:"2505 Caldwell Lane, Webberville", tel:"+1 512 444 9000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bird Cages", cat:"refugio", lat:30.24485, lng:-97.443428, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Deer Pens", cat:"refugio", lat:30.245012, lng:-97.444538, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Opossum Cages", cat:"refugio", lat:30.244881, lng:-97.443541, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Austin Wildlife Rescue Rehabilitation Center", cat:"vet", lat:30.245242, lng:-97.443652, dir:"111 Elbow Bend, Webberville", tel:"+1-512-472-9453", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "webster-texas": {nombre:"Webster", centro:[29.535172, -95.116156], tz:"America/Chicago", lugares:[
  {n:"Pawsh Dog House", cat:"tienda", lat:29.583615, lng:-95.131541, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:29.554053, lng:-95.117607, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.536658, lng:-95.149804, dir:"1549 West Bay Area Boulevard, Webster", tel:"+1 281-332-1583", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:29.536471, lng:-95.149845, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Feline Medical Center", cat:"vet", lat:29.584294, lng:-95.147259, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet - Clear Lake", cat:"vet", lat:29.54164, lng:-95.136895, dir:"931 West Bay Area Boulevard, Webster", tel:"+1 806-810-8100", horas:[15.0, 23.0], nota:"Dato de OpenStreetMap"}
 ]},
 "weir-texas": {nombre:"Weir", centro:[30.674988, -97.587759], tz:"America/Chicago", lugares:[
  {n:"Canine Headquarters", cat:"refugio", lat:30.623266, lng:-97.565036, dir:"1350 County Road 130, Weir", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Countryside Pet Resort", cat:"refugio", lat:30.649403, lng:-97.613413, dir:"455 County Road 103, Weir", tel:"+1-512-930-5365", horas:[16.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "weslaco": {nombre:"Weslaco", centro:[26.15943, -97.990736], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:26.175033, lng:-97.983206, dir:"821 East Expressway 83, Weslaco", tel:"+1 956-969-4959", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "west-lake-hills": {nombre:"West Lake Hills", centro:[30.287704, -97.806816], tz:"America/Chicago", lugares:[
  {n:"Ridge Dog Park", cat:"parque", lat:30.349979, lng:-97.75303, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:30.290978, lng:-97.825525, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crackerdog", cat:"refugio", lat:30.317327, lng:-97.86241, dir:"8907 Bee Caves Road, West Lake Hills", tel:"+1-512-263-1114", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Lofty Dog", cat:"tienda", lat:30.35918, lng:-97.734772, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Plush Pad Dog and Cat Grooming", cat:"tienda", lat:30.359003, lng:-97.739194, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:30.277217, lng:-97.805414, dir:"3535 Bee Caves Road, West Lake Hills", tel:"+1-512-328-9453", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barton Creek Animal Clinic", cat:"vet", lat:30.275582, lng:-97.816506, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hill Country Animal Hospital", cat:"vet", lat:30.301924, lng:-97.840158, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northwest Veterinary Hospital", cat:"vet", lat:30.342932, lng:-97.76427, dir:"3817 Dry Creek Drive, West Lake Hills", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spicewood Springs Animal Hospital", cat:"vet", lat:30.375513, lng:-97.760529, dir:"4606 Spicewood Springs Road, West Lake Hills", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westlake Animal Hospital", cat:"vet", lat:30.282461, lng:-97.809409, dir:"3930 Westlake Drive, West Lake Hills", tel:"+1-512-327-1703", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "west-monroe": {nombre:"West Monroe", centro:[32.518478, -92.147635], tz:"America/Chicago", lugares:[
  {n:"The Animal House", cat:"tienda", lat:32.5183, lng:-92.150965, dir:"2934 Cypress Street, West Monroe", tel:"+1-318-329-8284", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"All Creatures Animal Care", cat:"vet", lat:32.489098, lng:-92.156391, dir:"1406 Thomas Road, West Monroe", tel:"+1 318-362-7387", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-university-place": {nombre:"West University Place", centro:[29.718007, -95.433829], tz:"America/Chicago", lugares:[
  {n:"33ThirtyThree Dog Park", cat:"parque", lat:29.735589, lng:-95.440134, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"McWilliams Dog Park", cat:"parque", lat:29.708501, lng:-95.387037, horas:[6.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"Hobbit Cafe", cat:"resto", lat:29.733621, lng:-95.414639, dir:"2243 Richmond Avenue, West University Place", tel:"+1 713 526 5460", horas:[11.0, 21.5], nota:"Dato de OpenStreetMap"},
  {n:"Cat Boarding by Nourish", cat:"tienda", lat:29.716807, lng:-95.417657, dir:"2522 Times Boulevard, West University Place", tel:"+1-713-955-4334", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kriser's Natural Pet", cat:"tienda", lat:29.726892, lng:-95.429463, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.739609, lng:-95.411149, dir:"2902 South Shepherd Drive, West University Place", tel:"+1 713-520-7917", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.723641, lng:-95.44229, dir:"5450 Weslayan, West University Place", tel:"+1 713-665-4150", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.746267, lng:-95.411004, dir:"2100 South Shepherd Drive, West University Place", tel:"+1 713-521-1005", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Gulf Coast Veterinary Clinic", cat:"vet", lat:29.729875, lng:-95.437893, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rice Village Animal Hospital", cat:"vet", lat:29.717705, lng:-95.41289, tel:"+1-713-527-0489", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sunset Animal Hospital", cat:"vet", lat:29.729529, lng:-95.42546, dir:"2959 Southwest Freeway, West University Place", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Butterfly garden", cat:"zoo", lat:29.770036, lng:-95.429159, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Houston Zoo", cat:"zoo", lat:29.713373, lng:-95.391904, dir:"6200 Hermann Park Drive, West University Place", tel:"+1-713-533-6500", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "westlake-texas": {nombre:"Westlake", centro:[32.991226, -97.19437], tz:"America/Chicago", lugares:[
  {n:"Boo Boo's Buddies Dog Park at Bob Jones Park", cat:"parque", lat:32.989922, lng:-97.153246, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Freedom Dog Park | Large Dog Section", cat:"parque", lat:33.016505, lng:-97.181844, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Freedom Dog Park | Small Dog Section", cat:"parque", lat:33.015757, lng:-97.181143, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Freedom Dog Park | Training Section", cat:"parque", lat:33.015957, lng:-97.181929, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petbar", cat:"peluqueria", lat:32.993637, lng:-97.191114, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "westover-hills": {nombre:"Westover Hills", centro:[32.744852, -97.41363], tz:"America/Chicago", lugares:[
  {n:"Glamour Paws", cat:"peluqueria", lat:32.705152, lng:-97.390577, dir:"3000 South Hulen Street, Westover Hills", tel:"+1-817-923-9828", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Aquarums Tropical Fish", cat:"tienda", lat:32.744083, lng:-97.437846, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:32.705331, lng:-97.39023, dir:"3000 South Hulen Street, Westover Hills", tel:"+1-817-732-9650", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The PARC Vet ER", cat:"vet", lat:32.732185, lng:-97.392154, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VEG", cat:"vet", lat:32.72788, lng:-97.41669, horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "westwego": {nombre:"Westwego", centro:[29.906039, -90.142296], tz:"America/Chicago", lugares:[
  {n:"Jefferson Feed Uptown", cat:"tienda", lat:29.922764, lng:-90.122547, dir:"6047 Magazine Street, Westwego", tel:"+1-504-218-4220", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Maple Small Animal Clinic", cat:"vet", lat:29.941283, lng:-90.129117, dir:"7608 Maple Street, Westwego", tel:"+1 504 866 6316", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Audubon Zoo", cat:"zoo", lat:29.922231, lng:-90.1304, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "westworth-village": {nombre:"Westworth Village", centro:[32.759719, -97.421455], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:32.746369, lng:-97.433471, dir:"6800 Ridgmar Meadow Road, Westworth Village", tel:"+1 817-377-8668", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.752254, lng:-97.428628, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wharton-texas": {nombre:"Wharton", centro:[29.31248, -96.098238], tz:"America/Chicago", lugares:[
  {n:"Wharton Veterinary Clinic", cat:"vet", lat:29.306055, lng:-96.085312, dir:"1518 East Milam Street, Wharton", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "white-deer-texas": {nombre:"White Deer", centro:[35.430921, -101.174762], tz:"America/Chicago", lugares:[
  {n:"Vicki's Paw Parlor", cat:"peluqueria", lat:35.434076, lng:-101.172018, dir:"311 South Main Street, White Deer", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "white-oak-texas": {nombre:"White Oak", centro:[32.527158, -94.860968], tz:"America/Chicago", lugares:[
  {n:"C4 Veterinary Hospital", cat:"vet", lat:32.510414, lng:-94.816744, dir:"5607 West Marshall Avenue, White Oak", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Taylor Veterinary Clinic", cat:"vet", lat:32.545769, lng:-94.798525, dir:"3319 Gilmer Road, White Oak", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "white-settlement": {nombre:"White Settlement", centro:[32.759574, -97.458354], tz:"America/Chicago", lugares:[
  {n:"Buzz Fence Dog Park", cat:"parque", lat:32.761421, lng:-97.450509, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "whitney-texas": {nombre:"Whitney", centro:[31.951823, -97.321401], tz:"America/Chicago", lugares:[
  {n:"Bloomin' Groomin' Pet Spa and Resort", cat:"peluqueria", lat:31.952076, lng:-97.314065, tel:"+12546942099", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Whitney Veterinary Clinic", cat:"vet", lat:31.949564, lng:-97.314738, tel:"+12546942405", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "wichita-falls": {nombre:"Wichita Falls", centro:[33.900457, -98.502078], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.876147, lng:-98.538332, dir:"3201 Lawrence Road, Wichita Falls", tel:"+1 940-696-5814", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"A Caring Heart", cat:"vet", lat:33.953685, lng:-98.513719, dir:"3115 Sheppard Access Road, Wichita Falls", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Health International", cat:"vet", lat:33.953877, lng:-98.526175, dir:"2921 Central Freeway, Wichita Falls", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"P.E.T.S. Clinic", cat:"vet", lat:33.954855, lng:-98.526649, dir:"3001 Central Freeway, Wichita Falls", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Simmons and Harlan Veterinary Clinic", cat:"vet", lat:33.910478, lng:-98.534919, dir:"202 Loop 11, Wichita Falls", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wimberley": {nombre:"Wimberley", centro:[29.997681, -98.09879], tz:"America/Chicago", lugares:[
  {n:"Wimberley Feed & Pet Supply", cat:"tienda", lat:29.999081, lng:-98.101553, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Apollo Veterinary", cat:"vet", lat:30.000066, lng:-98.103273, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "windcrest": {nombre:"Windcrest", centro:[29.515508, -98.380292], tz:"America/Chicago", lugares:[
  {n:"O'Connor Road Animal Hospital", cat:"vet", lat:29.54994, lng:-98.373644, dir:"12014 Independence Avenue, Windcrest", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:29.540642, lng:-98.420041, dir:"11214 Iota Drive, Windcrest", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wolfforth": {nombre:"Wolfforth", centro:[33.505919, -102.009057], tz:"America/Chicago", lugares:[
  {n:"Big Dogs", cat:"parque", lat:33.566829, lng:-101.961829, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Little Dogs", cat:"parque", lat:33.566569, lng:-101.961707, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Un/leashing Area", cat:"parque", lat:33.56669, lng:-101.961536, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cimarron Pet Salon", cat:"tienda", lat:33.530785, lng:-101.918975, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Four Paws Pet Resort", cat:"tienda", lat:33.577315, lng:-101.95413, dir:"6319 19th Street, Wolfforth", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Live Oak Pet Hotel", cat:"tienda", lat:33.506143, lng:-101.923844, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:33.519295, lng:-101.937586, dir:"5715 82nd Street, Wolfforth", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.549949, lng:-101.950414, dir:"6046 Marsha Sharp Freeway, Wolfforth", tel:"+1 806-799-4637", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.532462, lng:-101.920774, dir:"6801 Slide Road, Wolfforth", tel:"+1 806-798-0717", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Three Dog Bakery", cat:"tienda", lat:33.506143, lng:-101.92403, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cooper Veterinary Clinic", cat:"vet", lat:33.484161, lng:-101.887094, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Frenship Vet Clinic", cat:"vet", lat:33.504272, lng:-102.006337, dir:"202 East Highway 62, Wolfforth", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hub City Veterinary Clinic", cat:"vet", lat:33.495618, lng:-101.956434, dir:"10717 Milwaukee Avenue, Wolfforth", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Live Oak Animal Hospital", cat:"vet", lat:33.506062, lng:-101.923681, dir:"5214 98th Street, Wolfforth", tel:"+1 806-794-9000", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "woodloch": {nombre:"Woodloch", centro:[30.217376, -95.41425], tz:"America/Chicago", lugares:[
  {n:"Fish R Us", cat:"tienda", lat:30.209176, lng:-95.416207, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "woodway": {nombre:"Woodway", centro:[31.50591, -97.205086], tz:"America/Chicago", lugares:[
  {n:"Woof Way Dog Park", cat:"parque", lat:31.507461, lng:-97.208682, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow Waco", cat:"refugio", lat:31.503195, lng:-97.199559, dir:"207 Colonnade Parkway, Woodway", tel:"+1-254-540-5582", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:31.53324, lng:-97.194689, dir:"5301 Bosque Boulevard, Woodway", tel:"+1-254-633-2875", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:31.535022, lng:-97.190356, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wooster": {nombre:"Wooster", centro:[35.202027, -92.45599], tz:"America/Chicago", lugares:[
  {n:"Companions Spay and Neuter Clinic", cat:"vet", lat:35.177764, lng:-92.394736, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wylie": {nombre:"Wylie", centro:[33.015156, -96.538804], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:33.009312, lng:-96.573672, dir:"807 Woodbridge Parkway, Wylie", tel:"+1-469-991-6200", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Lake Lavon Animal Hospital", cat:"vet", lat:33.019895, lng:-96.568139, dir:"456 North Country Club Road, Wylie", tel:"+1 972-429-7901", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Parker Road Veterinary Hospital", cat:"vet", lat:33.027305, lng:-96.545774, dir:"707 Parker Road, Wylie", tel:"+1-972-442-6523", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Thrive Pet Healthcare Wylie", cat:"vet", lat:33.010518, lng:-96.574011, dir:"2588 FM 544, Wylie", tel:"+1-469-654-7461", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "wynnewood": {nombre:"Wynnewood", centro:[34.643417, -97.164466], tz:"America/Chicago", lugares:[
  {n:"The Greater Wynnewood Animal Park", cat:"zoo", lat:34.625464, lng:-97.210203, dir:"25803 North County Road 3250, Wynnewood", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "youngsville": {nombre:"Youngsville", centro:[30.099647, -91.990121], tz:"America/Chicago", lugares:[
  {n:"Waterview Dog Park", cat:"parque", lat:30.100576, lng:-92.008996, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "yukon": {nombre:"Yukon", centro:[35.506726, -97.762539], tz:"America/Chicago", lugares:[
  {n:"Love it Ruff", cat:"peluqueria", lat:35.494186, lng:-97.7269, dir:"1207 Dorchester Court, Yukon", tel:"+1-405-339-6730", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.482133, lng:-97.7639, dir:"1648 Garth Brooks Boulevard, Yukon", tel:"+1 405-350-5043", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.477119, lng:-97.749217, dir:"12444 Northwest 10th Street, Yukon", tel:"+1 405-577-0154", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]}
};
