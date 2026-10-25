// Lugares de animales en el sureste de EE. UU. extraídos de OpenStreetMap (verificado 2026-10-25).
// Estados: Virginia, West Virginia, North Carolina, South Carolina, Georgia, Florida, Kentucky, Tennessee, Alabama, Mississippi.
// cat: vet=Veterinarias, tienda=Tiendas de mascotas, refugio=Refugios y guarderías, zoo=Zoológicos, peluqueria=Peluquerías caninas, parque=Parques para perros, farma=Farmacias veterinarias, resto=Restaurantes/cafés que admiten perros
// horas: null = sin dato publicado; [a,b] = abre/cierra en horas decimales; [0,24] = 24/7. dir/tel: null = sin dato en OSM (aquí nunca se inventa).
// Todo proviene de OpenStreetMap (ODbL) vía Overpass; sin nombre o sin coordenadas el lugar se descarta; cada lugar se asigna al pueblo (pin de pins-usa.js) más cercano.
// Pueblos cargados: 1580 (5209 lugares). Estados ok: 10/10.
const CIUDADES_USA_SURESTE = {
 "abbeville": {nombre:"Abbeville", centro:[31.570209, -85.250332], tz:"America/New_York", lugares:[
  {n:"Safe Haven ARK", cat:"refugio", lat:31.551005, lng:-85.290346, dir:"205 County Road 45", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "aberdeen-north-carolina": {nombre:"Aberdeen", centro:[35.131547, -79.429479], tz:"America/New_York", lugares:[
  {n:"Sandhills Dog Walker / Pet Care & Boarding", cat:"tienda", lat:35.136528, lng:-79.413152, dir:"614 East L Ives Drive", tel:"+1-910-638-9416", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"One Paw At a Time", cat:"peluqueria", lat:35.150186, lng:-79.421445, dir:"1333 North Sandhills Boulevard", tel:"+1910-944-1161", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.155314, lng:-79.41945, dir:"11088 US 15-501", tel:"+1 910-246-1587", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Martin Dog Park", cat:"parque", lat:35.160568, lng:-79.426218, dir:"350 Commerce Avenue", tel:"+19106922463", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.155208, lng:-79.419429, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "abingdon-virginia": {nombre:"Abingdon", centro:[36.710402, -81.975249], tz:"America/New_York", lugares:[
  {n:"Keywood Animal Clinic", cat:"vet", lat:36.719594, lng:-82.009636, dir:"16067 Porterfield Highway", tel:"+1-276-676-3401", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Highlands Animal Hospital", cat:"vet", lat:36.713121, lng:-81.92835, dir:"25011 Lee Highway", tel:"+1-276-628-4115", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Farm Bureau of Abingdon", cat:"tienda", lat:36.673038, lng:-82.053318, dir:"17375 Lee Highway", tel:"+12766282619", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "accomac": {nombre:"Accomac", centro:[37.719373, -75.670889], tz:"America/New_York", lugares:[
  {n:"Atlantic Animal Hospital", cat:"vet", lat:37.723841, lng:-75.678008, dir:"23327 Lankford Highway", tel:"+1-757-302-0345", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "acworth": {nombre:"Acworth", centro:[34.065933, -84.67688], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:34.037915, lng:-84.683539, dir:"3372 Cobb Parkway Northwest", tel:"+1 678-574-6592", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Lake City Animal Hospital", cat:"vet", lat:34.04142, lng:-84.695285, dir:"3671 Cobb Parkway", tel:"+1-770-974-3536", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.033434, lng:-84.682726, dir:"3335 Cobb Parkway Northwest", tel:"+1 770-529-0748", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Mills Animal Hospital", cat:"vet", lat:34.065458, lng:-84.723549, dir:"4514 Cobb Parkway", tel:null, horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Dog House Pet Resort", cat:"refugio", lat:34.063475, lng:-84.65074, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shari & Marie's Heavenly Puppy & Cat Resort", cat:"vet", lat:34.033935, lng:-84.677188, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pitner Road Small Dog Park", cat:"parque", lat:34.016855, lng:-84.725135, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pitner Road Large Dog Park", cat:"parque", lat:34.016071, lng:-84.72521, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "adairsville": {nombre:"Adairsville", centro:[34.368327, -84.934906], tz:"America/New_York", lugares:[
  {n:"Adairsville Animal Hospital", cat:"vet", lat:34.376501, lng:-84.930447, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "aiken": {nombre:"Aiken", centro:[33.561617, -81.722458], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:33.520026, lng:-81.722687, dir:"251 Fabian Drive", tel:"+1 803-845-6010", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.505534, lng:-81.71271, dir:"2527 Whiskey Road", tel:"+1 803-643-8626", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Downtown Dog", cat:"tienda", lat:33.560093, lng:-81.72288, dir:"150 Laurens Street SW", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SPCA Albrecht Center for Animal Welfare", cat:"refugio", lat:33.563629, lng:-81.696158, dir:"199 Willow Run Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Services of Aiken", cat:"vet", lat:33.527177, lng:-81.722397, dir:"1721 Whiskey Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:33.49949, lng:-81.702184, dir:"2928 Whiskey Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Priority Pet", cat:"vet", lat:33.499348, lng:-81.702049, dir:"2934 Whiskey Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alabaster": {nombre:"Alabaster", centro:[33.244281, -86.816377], tz:"America/Chicago", lugares:[
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.226719, lng:-86.804975, dir:"100 South Colonial Drive", tel:"+1 205-663-5639", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.226715, lng:-86.804802, dir:"100 South Colonial Drive", tel:"+1 205-663-2389", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Kent Farms Animal Hospital", cat:"vet", lat:33.214673, lng:-86.824482, dir:"2259 Kent Dairy Road", tel:null, horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "alafaya": {nombre:"Alafaya", centro:[28.566796, -81.207641], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:28.555385, lng:-81.204066, dir:"731 North Alafaya Trail", tel:"+1 407-275-0799", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Waterford Lakes Animal Hospital", cat:"vet", lat:28.547283, lng:-81.213243, dir:"11951 Lake Underhill Road", tel:"+1-407-382-3818", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waterford Lakes dog park area", cat:"parque", lat:28.557083, lng:-81.201557, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Paws Pet Resort", cat:"parque", lat:28.565776, lng:-81.190117, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:28.564786, lng:-81.16505, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shey's Vetinary Hospital", cat:"vet", lat:28.548911, lng:-81.164766, dir:null, tel:null, horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "alamo-tennessee": {nombre:"Alamo", centro:[35.784796, -89.117255], tz:"America/Chicago", lugares:[
  {n:"Tennessee Safari Park", cat:"zoo", lat:35.767701, lng:-89.125774, dir:"618 Conley Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "albany-georgia": {nombre:"Albany", centro:[31.578206, -84.155681], tz:"America/New_York", lugares:[
  {n:"Bush Animal Clinic", cat:"vet", lat:31.610512, lng:-84.210864, dir:"2419 Dawson Road", tel:"+1-229-439-7073", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:31.610039, lng:-84.211984, dir:"2500 Dawson Road", tel:"+1-229-435-6328", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:31.620466, lng:-84.2219, dir:"2709-11 Dawson Road", tel:"+1 229-352-3209", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Albany Humane Society", cat:"refugio", lat:31.549313, lng:-84.204038, dir:"1705 West Oakridge Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "albemarle": {nombre:"Albemarle", centro:[35.350143, -80.200058], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.339492, lng:-80.178293, dir:"780 Leonard Avenue", tel:"+1-980-581-3974", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Badin Road Drive-In Theater", cat:"resto", lat:35.363109, lng:-80.157447, dir:null, tel:"+1 704 983 2900", horas:[16.0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "albertville": {nombre:"Albertville", centro:[34.267594, -86.208867], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.279168, lng:-86.205596, dir:"7360 Highway 431", tel:"+1 256-660-3817", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Park", cat:"parque", lat:34.275012, lng:-86.229969, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alcoa": {nombre:"Alcoa", centro:[35.784714, -83.986599], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.769308, lng:-83.985381, dir:"219 Hamilton Crossing Drive", tel:"+1 865-970-3489", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "aldie": {nombre:"Aldie", centro:[38.975878, -77.642886], tz:"America/New_York", lugares:[
  {n:"Friends of Homeless Animals", cat:"refugio", lat:38.948432, lng:-77.630986, dir:"39710 Goodpuppy Lane", tel:"+1-703-385-0224", horas:[12.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "alexander-city": {nombre:"Alexander City", centro:[32.944012, -85.953853], tz:"America/Chicago", lugares:[
  {n:"Alex City Vet Clinic", cat:"vet", lat:32.920909, lng:-85.954558, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake Martin Humane Society", cat:"refugio", lat:32.915422, lng:-85.957564, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alexandria-kentucky": {nombre:"Alexandria", centro:[38.959508, -84.387995], tz:"America/New_York", lugares:[
  {n:"Campbell County Animal Shelter", cat:"refugio", lat:38.98665, lng:-84.364032, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alexandria-virginia": {nombre:"Alexandria", centro:[38.80511, -77.047023], tz:"America/New_York", lugares:[
  {n:"The Dog Park", cat:"tienda", lat:38.805211, lng:-77.047309, dir:"705 King Street", tel:"+17038882818", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Del Ray Animal Hospital", cat:"vet", lat:38.826282, lng:-77.050975, dir:"524 East Mount Ida Avenue", tel:"+1 703-739-0000", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"From Head to Tail Spa", cat:"tienda", lat:38.831761, lng:-77.051369, dir:"430 Hume Avenue", tel:"+1-571-312-7989", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.835508, lng:-77.04976, dir:"3351 Richmond Highway", tel:"+1 703-739-4844", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Olde Towne School for Dogs", cat:"tienda", lat:38.8096, lng:-77.044635, dir:"529 Oronoco Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VIP Pet", cat:"peluqueria", lat:38.80554, lng:-77.05447, dir:"110 South West Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"E Monroe Ave Dog Park", cat:"parque", lat:38.820548, lng:-77.051516, dir:"521 East Monroe Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Simpson Stadium Dog Park", cat:"parque", lat:38.821367, lng:-77.052079, dir:"609 East Monroe Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Your Dog's Best Friend", cat:"vet", lat:38.824959, lng:-77.050644, dir:"2000 Richmond Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Your Dog's Best Friend \"The Store\"", cat:"tienda", lat:38.826265, lng:-77.058436, dir:"2301 Mount Vernon Avenue", tel:null, horas:[11.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Nature's Nibbles", cat:"tienda", lat:38.828563, lng:-77.058846, dir:"2601 Mount Vernon Avenue", tel:null, horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Founders Dog Park", cat:"parque", lat:38.808411, lng:-77.038976, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Windmill Hill Dog Park", cat:"parque", lat:38.798152, lng:-77.041245, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Montgomery Park Dog Park", cat:"parque", lat:38.814393, lng:-77.040658, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hooff's Run Dog Park", cat:"parque", lat:38.813066, lng:-77.061719, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Braddock Dog Park", cat:"parque", lat:38.816022, lng:-77.062065, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hairy Situations Dog Grooming", cat:"tienda", lat:38.8219, lng:-77.047318, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mount Jefferson Dog Park", cat:"parque", lat:38.830392, lng:-77.055492, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Del Ray Central Bark Park", cat:"parque", lat:38.833473, lng:-77.059424, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Monticello Dog Park", cat:"parque", lat:38.833358, lng:-77.069812, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Four Mile Run Dog Park", cat:"parque", lat:38.840553, lng:-77.060199, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Caring Hands Animal Hospital", cat:"vet", lat:38.845554, lng:-77.06758, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "algood": {nombre:"Algood", centro:[36.195895, -85.448585], tz:"America/New_York", lugares:[
  {n:"Copyright Pet Resort", cat:"peluqueria", lat:36.251738, lng:-85.456459, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alliance-north-carolina": {nombre:"Alliance", centro:[35.144888, -76.802156], tz:"America/New_York", lugares:[
  {n:"Coastal Pet Clinic", cat:"vet", lat:35.143395, lng:-76.786819, dir:"56 Ireland Road", tel:"+12527455161", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alpharetta": {nombre:"Alpharetta", centro:[34.075596, -84.294596], tz:"America/New_York", lugares:[
  {n:"North Roswell Veterinary Clinic", cat:"vet", lat:34.060189, lng:-84.325583, dir:"11490 Alpharetta Highway", tel:"+1-770-442-8733", horas:[7.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.044333, lng:-84.290866, dir:"6370 North Point Parkway", tel:"+1 770-343-8511", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Webb Bridge Animal Hospital", cat:"vet", lat:34.076498, lng:-84.246327, dir:"3593 Webb Bridge Road", tel:"+1 770-751-0524", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Off Leash Dog Club", cat:"parque", lat:34.071822, lng:-84.29532, dir:"142 South Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fetch Park Alpharetta", cat:"parque", lat:34.057825, lng:-84.303383, dir:"11440 Maxwell Road North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waggy World", cat:"parque", lat:34.071765, lng:-84.30257, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Avalon Dog Park", cat:"parque", lat:34.071549, lng:-84.279063, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:34.022835, lng:-84.27107, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:34.022849, lng:-84.270328, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Nesbit Ferry Crossing", cat:"vet", lat:34.01977, lng:-84.279213, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Newtown Dog Park", cat:"parque", lat:34.020776, lng:-84.266095, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "altamonte-springs": {nombre:"Altamonte Springs", centro:[28.661915, -81.38859], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:28.665006, lng:-81.380776, dir:"375 East Altamonte Drive", tel:"+1 407-551-2217", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Mr. Pet", cat:"tienda", lat:28.667135, lng:-81.377573, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "americus": {nombre:"Americus", centro:[32.072386, -84.232688], tz:"America/New_York", lugares:[
  {n:"Americus Veterinary Hospital", cat:"vet", lat:32.07199, lng:-84.219082, dir:"1037 Fetner Drive", tel:"+1-229-924-6146", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "amherst-virginia": {nombre:"Amherst", centro:[37.585141, -79.051413], tz:"America/New_York", lugares:[
  {n:"Laurel Stone Veterinary Hospital", cat:"vet", lat:37.590167, lng:-79.050827, dir:"150 Lexington Turnpike", tel:"+1 434-946-5059", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "anchorage-kentucky": {nombre:"Anchorage", centro:[38.266599, -85.533011], tz:"America/Chicago", lugares:[
  {n:"Eastpoint Veterinary Clinic", cat:"vet", lat:38.268774, lng:-85.506163, dir:"13401 Old Henry Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"KY Humane Society Eastpoint", cat:"refugio", lat:38.268895, lng:-85.505727, dir:"13310 Magisterial Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "anderson-south-carolina": {nombre:"Anderson", centro:[34.50686, -82.650626], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.550067, lng:-82.681191, dir:"3523 Clemson Boulevard", tel:"+1 864-224-0436", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Paws Unlimited LLC", cat:"refugio", lat:34.505227, lng:-82.721005, dir:"3731 Highway 24", tel:"+1 864-224-9502", horas:[8.5, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Walker Animal Hospital", cat:"vet", lat:34.600074, lng:-82.614081, dir:"3810 North Highway 81", tel:"+1-864-622-1117", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"TBA Dog Park", cat:"parque", lat:34.506792, lng:-82.646981, dir:"415 North Fant Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "angier": {nombre:"Angier", centro:[35.507104, -78.739181], tz:"America/New_York", lugares:[
  {n:"Just Four Paws", cat:"peluqueria", lat:35.515429, lng:-78.742084, dir:"559 North Raleigh Street", tel:"+19196397370", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crepe Myrtle Animal Hospital", cat:"vet", lat:35.530207, lng:-78.744908, dir:"1602 North Raleigh Street", tel:"+1-919-639-8387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stage Road Animal Hospital", cat:"vet", lat:35.514631, lng:-78.688695, dir:"7580 Old Stage Road North", tel:"+19196393337", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "anmoore": {nombre:"Anmoore", centro:[39.256757, -80.292311], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.26889, lng:-80.28388, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "annandale-virginia": {nombre:"Annandale", centro:[38.83031, -77.196497], tz:"America/New_York", lugares:[
  {n:"Pawtiques Grooming & Academy", cat:"peluqueria", lat:38.831677, lng:-77.191034, dir:"4207 Tom Davis Drive", tel:"+1-703-941-6812", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.832414, lng:-77.201792, dir:"7434 Little River Turnpike", tel:"+1 703-354-1546", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Annandale Animal Hospital", cat:"vet", lat:38.830876, lng:-77.200354, dir:"7405 Little River Turnpike", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Columbia Pike Animal Hospital", cat:"vet", lat:38.833563, lng:-77.186786, dir:"Evergreen Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Columbia", cat:"refugio", lat:38.833849, lng:-77.186774, dir:"Evergreen Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "anniston": {nombre:"Anniston", centro:[33.662482, -85.828322], tz:"America/Chicago", lugares:[
  {n:"Pipers Playhouse", cat:"refugio", lat:33.660573, lng:-85.829454, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "apex": {nombre:"Apex", centro:[35.732535, -78.850552], tz:"America/New_York", lugares:[
  {n:"Groomingdales", cat:"peluqueria", lat:35.723945, lng:-78.847986, dir:"536 East Williams Street", tel:"+1-919-363-2949", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.743466, lng:-78.872177, dir:"1031 Beaver Creek Commons Drive", tel:"+1 919-363-4056", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Apex Animal Hospital", cat:"vet", lat:35.705616, lng:-78.836181, dir:"1600 East Williams Street", tel:"+1 919 3628878", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital", cat:"vet", lat:35.759055, lng:-78.877411, dir:"1767 West Williams Street", tel:"+1 919 362 0515", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"All 4 Paws Animal Hospital", cat:"vet", lat:35.740426, lng:-78.866366, dir:"912 West Williams Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake Pine Animal Hospital", cat:"vet", lat:35.745725, lng:-78.821347, dir:"934 U. S. 64", tel:null, horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Scenthound Apex", cat:"peluqueria", lat:35.736103, lng:-78.895572, dir:"1489 Kelly Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Tails Veterinary Hospital", cat:"vet", lat:35.736267, lng:-78.896342, dir:"1460 Kelly Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dawg Dayz Retreat", cat:"refugio", lat:35.707313, lng:-78.797719, dir:"3400 Pond Village Lane", tel:null, horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Green Level Kennel", cat:"refugio", lat:35.759768, lng:-78.903823, dir:null, tel:"+1 919 362 7877", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gentle Care Animal Hospital", cat:"vet", lat:35.705632, lng:-78.793757, dir:"3435 Kildaire Farm Road", tel:null, horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Large/Medium Dog Area", cat:"parque", lat:35.7114, lng:-78.766718, dir:"9725 Penny Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Area", cat:"parque", lat:35.710908, lng:-78.766757, dir:"9725 Penny Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Apex Dog Park", cat:"parque", lat:35.737321, lng:-78.846903, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Harmony Animal Hospital", cat:"vet", lat:35.720301, lng:-78.81961, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodbury Dog Park", cat:"parque", lat:35.688094, lng:-78.934057, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "apollo-beach": {nombre:"Apollo Beach", centro:[27.774155, -82.40621], tz:"America/New_York", lugares:[
  {n:"Apollo Beach Dog Park", cat:"parque", lat:27.76506, lng:-82.4105, dir:"664 Golf and Sea Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "apopka": {nombre:"Apopka", centro:[28.673281, -81.511647], tz:"America/New_York", lugares:[
  {n:"VCA Sheeler Road Animal Hospital", cat:"vet", lat:28.671497, lng:-81.49218, dir:"547 Sheeler Avenue", tel:"+1 407-889-0513", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Doctors' Dog Park", cat:"parque", lat:28.679361, lng:-81.504739, dir:"21 North Highland Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Park Avenue Animal Hospital", cat:"vet", lat:28.696146, lng:-81.508945, dir:"847 North Park Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "appomattox": {nombre:"Appomattox", centro:[37.353546, -78.827269], tz:"America/New_York", lugares:[
  {n:"Appomattox Animal Hospital", cat:"vet", lat:37.359221, lng:-78.887419, dir:"5399 Richmond Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "aquia-harbour": {nombre:"Aquia Harbour", centro:[38.462624, -77.388871], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.470826, lng:-77.407188, dir:"1160 Stafford Market Place", tel:"+1 540-658-9272", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.477115, lng:-77.417717, dir:"309 Worth Avenue", tel:"+1 540-657-7491", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pets Plus", cat:"tienda", lat:38.448541, lng:-77.401419, dir:"2610 Richmond Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Krazy", cat:"tienda", lat:38.473718, lng:-77.420673, dir:"315 Garrisonville Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aquia-Garrisonville Animal Hospital", cat:"vet", lat:38.469813, lng:-77.458844, dir:"878 Garrisonville Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:38.449551, lng:-77.387523, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Barkershop", cat:"peluqueria", lat:38.477908, lng:-77.390589, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "arborwood": {nombre:"Arborwood", centro:[26.580837, -81.780961], tz:"America/New_York", lugares:[
  {n:"Best Friends Animal Hospital", cat:"vet", lat:26.565417, lng:-81.751156, dir:"12220 Towne Lake Drive", tel:"+1-239-673-3412", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Powerhouse Dog Supply", cat:"tienda", lat:26.571785, lng:-81.849306, dir:"11800 Lacy Ln", tel:"+1-239-834-2700", horas:[9.0, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Dog Park (Small Dogs)", cat:"parque", lat:26.597408, lng:-81.784405, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park (Large Dogs)", cat:"parque", lat:26.599496, lng:-81.785493, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gateway Dog Park", cat:"parque", lat:26.574579, lng:-81.733777, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "arcadia-lakes": {nombre:"Arcadia Lakes", centro:[34.053765, -80.961201], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:34.023637, lng:-80.94948, dir:"110 Percival Road", tel:"+1 803-223-0987", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Spring Valley Animal Hospital", cat:"vet", lat:34.089555, lng:-80.928388, dir:"8913 Two Notch Road", tel:"+1-803-788-8481", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Puppy Kingdom", cat:"tienda", lat:34.067798, lng:-80.962057, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Parklane Animal Hospital", cat:"vet", lat:34.072402, lng:-80.958667, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"CVETS - Columbia Veterinary Emergency Trauma and Specialty", cat:"vet", lat:34.077961, lng:-80.938206, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gregg Animal Hospital", cat:"vet", lat:34.085522, lng:-80.937115, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mill Creek Pet Food & Grooming Center", cat:"tienda", lat:34.086846, lng:-80.932232, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "arcadia-south-carolina": {nombre:"Arcadia", centro:[34.958176, -81.99066], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.932289, lng:-81.990514, dir:"150 East Blackstock Road", tel:"+1 864-576-8868", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:34.931854, lng:-81.988668, dir:"100 Dorman Commerce Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arcadia Station dog park", cat:"parque", lat:34.95586, lng:-81.991158, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "archdale": {nombre:"Archdale", centro:[35.914581, -79.971983], tz:"America/New_York", lugares:[
  {n:"Creekside Veterinary Hospital", cat:"vet", lat:35.896653, lng:-79.943261, dir:"10320 South Main Street", tel:"+1-336-434-2574", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "arcola-virginia": {nombre:"Arcola", centro:[38.951869, -77.533932], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.937932, lng:-77.520232, dir:"24570 Dulles Landing Drive", tel:"+1 571-367-3021", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "arlington-tennessee": {nombre:"Arlington", centro:[35.296451, -89.661782], tz:"America/Chicago", lugares:[
  {n:"Arlington Animal Clinic", cat:"vet", lat:35.290331, lng:-89.673236, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "arlington-virginia": {nombre:"Arlington", centro:[38.890396, -77.084159], tz:"America/New_York", lugares:[
  {n:"Bond Vet", cat:"vet", lat:38.888181, lng:-77.09289, dir:"2871 Clarendon Boulevard", tel:"+1 703-459-9383", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clarendon Animal Care", cat:"vet", lat:38.884276, lng:-77.094285, dir:"3000 Suite B 10th Street North", tel:"+1-703-997-9776", horas:[7.5, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Happy Grooming", cat:"peluqueria", lat:38.896748, lng:-77.101275, dir:"3301 Langston Boulevard", tel:"+1-703-528-7292", horas:[9.0, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Northside Veterinary Clinic", cat:"vet", lat:38.897285, lng:-77.107981, dir:"4003 Langston Boulevard", tel:"+1-703-525-7115", horas:[8.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Cherrydale Veterinary Clinic", cat:"vet", lat:38.896667, lng:-77.108856, dir:"4038 Cherry Hill Road", tel:"+1-703-528-9001", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:38.898043, lng:-77.119158, dir:"4550 Cherry Hill Road", tel:"+1-571-312-5630", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogma", cat:"tienda", lat:38.890781, lng:-77.08904, dir:null, tel:"+1-703-566-1937", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Caring Hands", cat:"vet", lat:38.890239, lng:-77.089883, dir:null, tel:"+1 703-535-3100", horas:[7.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"District Dogs", cat:"refugio", lat:38.888926, lng:-77.092137, dir:"2820 North Wilson Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"James Hunter Park", cat:"parque", lat:38.888335, lng:-77.096195, dir:"1299 North Herndon Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"District Dogs", cat:"refugio", lat:38.860485, lng:-77.054036, dir:"1450 South Eads Street", tel:null, horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"GoodVets", cat:"vet", lat:38.857316, lng:-77.049715, dir:"269 19th Court South", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Playful Pack", cat:"refugio", lat:38.893565, lng:-77.075257, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Towers Dog Park", cat:"parque", lat:38.867241, lng:-77.07703, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petfarm", cat:"tienda", lat:38.881369, lng:-77.112745, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arlington Animal Hospital", cat:"vet", lat:38.864144, lng:-77.082457, dir:null, tel:null, horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"The Point Bark Park", cat:"parque", lat:38.862763, lng:-77.052703, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Run", cat:"parque", lat:38.86073, lng:-77.054975, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Dog Run", cat:"parque", lat:38.86075, lng:-77.054846, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ashburn-virginia": {nombre:"Ashburn", centro:[39.043719, -77.48749], tz:"America/New_York", lugares:[
  {n:"Ashburn Veterinary Hospital", cat:"vet", lat:39.044827, lng:-77.488248, dir:"20893 Stubble Road", tel:"+1 703-729-9200", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"DogGone Natural", cat:"tienda", lat:39.044175, lng:-77.477229, dir:"44031 Ashburn Shopping Plaza", tel:"+1 703-858-1112", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Ashburn Village Animal Hospital", cat:"vet", lat:39.044132, lng:-77.473062, dir:"44110 Ashburn Shopping Plaza", tel:"+1 703-729-0700", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:39.044116, lng:-77.472976, dir:"44110 Ashburn Shopping Plaza", tel:"+1 703-687-4020", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Fancy Paws Cat Clinic", cat:"vet", lat:39.045779, lng:-77.487403, dir:"20608 Gordon Park Square", tel:null, horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Centers of Loudoun", cat:"vet", lat:39.036259, lng:-77.500804, dir:null, tel:"+1 703-726-8784", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Whole Pet Central", cat:"tienda", lat:39.036173, lng:-77.500789, dir:null, tel:"+1 703-724-4319", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Belly Rubs N Suds", cat:"peluqueria", lat:39.0361, lng:-77.500773, dir:null, tel:"+1 571-295-5516", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "asheboro": {nombre:"Asheboro", centro:[35.707915, -79.813645], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.693372, lng:-79.788026, dir:"1222 East Dixie Drive", tel:"+1 336-308-3652", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "asheville": {nombre:"Asheville", centro:[35.595363, -82.550841], tz:"America/New_York", lugares:[
  {n:"Patton Avenue Pet Company", cat:"tienda", lat:35.594275, lng:-82.556256, dir:"109 Patton Avenue", tel:"+18282557737", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.575011, lng:-82.512494, dir:"150 Bleachery Boulevard", tel:"+1 828-298-5670", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:35.585847, lng:-82.527494, dir:"244 Tunnel Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Asheville Family Vet", cat:"vet", lat:35.578803, lng:-82.585721, dir:"547 Haywood Road", tel:null, horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Patton Avenue Pet Company", cat:"tienda", lat:35.581964, lng:-82.606948, dir:"1388 Patton Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Great-horned owl habitat", cat:"zoo", lat:35.611266, lng:-82.563649, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brother Wolf", cat:"refugio", lat:35.572453, lng:-82.525239, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Western N.C. Nature Center", cat:"zoo", lat:35.577179, lng:-82.495779, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ashland-city": {nombre:"Ashland City", centro:[36.274221, -87.06417], tz:"America/Chicago", lugares:[
  {n:"Cheatham County Animal Clinic", cat:"vet", lat:36.298614, lng:-87.047412, dir:"358 Frey Street", tel:"+1-615-792-4829", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "ashland-kentucky": {nombre:"Ashland", centro:[38.478414, -82.637939], tz:"America/New_York", lugares:[
  {n:"Pawsh Pawz Pet Spa", cat:"peluqueria", lat:38.478831, lng:-82.639192, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ashland-virginia": {nombre:"Ashland", centro:[37.759401, -77.48066], tz:"America/New_York", lugares:[
  {n:"Fin and Feather Pet Center", cat:"tienda", lat:37.757312, lng:-77.481538, dir:"307 South Railroad Avenue", tel:"+1 804-798-2228", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:37.761254, lng:-77.469364, dir:"247 North Washington Highway", tel:"+1 804-752-4809", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Heavenly Clips Pet Grooming Salon", cat:"peluqueria", lat:37.759132, lng:-77.47965, dir:"202 England Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ashland Veterinary Hospital", cat:"vet", lat:37.747582, lng:-77.470821, dir:"513 South Washington Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chenault Veterinary Hospital", cat:"vet", lat:37.743433, lng:-77.465834, dir:"351 South Hill Carter Park", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hanover Humane Society", cat:"refugio", lat:37.737554, lng:-77.470314, dir:"12186 Washington Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pauley's Pups", cat:"tienda", lat:37.732933, lng:-77.470266, dir:"12100 Washington Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodside Equine Clinic", cat:"vet", lat:37.756075, lng:-77.53727, dir:"13011 Blanton Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "athens": {nombre:"Athens", centro:[34.804549, -86.97117], tz:"America/Chicago", lugares:[
  {n:"Town and County Animal Hospital PC", cat:"vet", lat:34.787891, lng:-86.972504, dir:"1642 Jefferson Street South", tel:"+1-256-232-0698", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Athens Animal Hospital", cat:"vet", lat:34.778291, lng:-86.956283, dir:"1119 US Highway 31", tel:"+1-256-232-1344", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Limestone Veterinary Clinic", cat:"vet", lat:34.782384, lng:-86.934352, dir:"1701 US Highway 72 East", tel:"+1-256-233-1515", horas:[7.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Depot", cat:"tienda", lat:34.78362, lng:-86.928633, dir:"22069 US Highway 72", tel:"+1-256-232-0960", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Eastside Animal Hospital", cat:"vet", lat:34.774495, lng:-86.913426, dir:"23098 US Highway 72", tel:"+1-256-232-0660", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Athens-Limestone Animal Shelter", cat:"refugio", lat:34.782777, lng:-86.93418, dir:"1701 US Highway 72 East", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "athens-georgia": {nombre:"Athens", centro:[33.959768, -83.376398], tz:"America/New_York", lugares:[
  {n:"Bear Hollow Zoo", cat:"zoo", lat:33.926246, lng:-83.387167, dir:"293 Gran Ellen Drive", tel:"+1 706 613 3616", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"South Athens Animal Clinic", cat:"vet", lat:33.92213, lng:-83.379757, dir:"2040 South Milledge Avenue", tel:"+1-706-353-8970", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"UGA Small Animal Hospital", cat:"vet", lat:33.919213, lng:-83.346755, dir:"2200 College Station Road", tel:"+1-706-542-3221", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"UGA Large Animal Hospital", cat:"vet", lat:33.918294, lng:-83.346995, dir:"2200 College Station Road", tel:"+1-706-542-3223", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Central Bark Athens", cat:"peluqueria", lat:33.940479, lng:-83.447417, dir:"3155A Atlanta Hwy", tel:"+1-706-363-4209", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Boulevard Animal Hospital", cat:"vet", lat:33.960629, lng:-83.383106, dir:"298 Prince Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Eye Care Clinic", cat:"vet", lat:33.936836, lng:-83.38751, dir:"1729 South Lumpkin Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fin-Alley", cat:"tienda", lat:33.945996, lng:-83.401971, dir:"1095 Baxter Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawtropolis", cat:"refugio", lat:33.965799, lng:-83.344753, dir:"670 Olympic Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:33.94705, lng:-83.406917, dir:"191 Alps Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Athens Veterinary Surgery Center", cat:"vet", lat:33.969498, lng:-83.409955, dir:"2315 Prince Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hawthorne Animal Hospital", cat:"vet", lat:33.959194, lng:-83.412506, dir:"530 Hawthorne Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dawg House", cat:"refugio", lat:33.921435, lng:-83.382511, dir:"380 Macon Highway", tel:null, horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Atypical Pets", cat:"tienda", lat:33.941629, lng:-83.330673, dir:"2826 Lexington Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gaines School Animal Hospital", cat:"vet", lat:33.93376, lng:-83.328683, dir:"513 Gaines School Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"UGA Veterinary Medical Center", cat:"vet", lat:33.918629, lng:-83.346195, dir:"2200 College Station Road", tel:null, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Wellness Center of Athens", cat:"vet", lat:33.943303, lng:-83.446816, dir:"112 Athens West Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hope Animal Medical Center", cat:"vet", lat:33.942405, lng:-83.452343, dir:"1150 Mitchell Bridge Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gameday Grooming", cat:"peluqueria", lat:33.922809, lng:-83.378052, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"2", cat:"parque", lat:34.02428, lng:-83.384645, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"P", cat:"parque", lat:34.024209, lng:-83.385339, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"1", cat:"parque", lat:34.024376, lng:-83.383792, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"3", cat:"parque", lat:34.02561, lng:-83.383606, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "athens-tennessee": {nombre:"Athens", centro:[35.442886, -84.593011], tz:"America/New_York", lugares:[
  {n:"Family & Friend Pet Clinic", cat:"vet", lat:35.431473, lng:-84.582965, dir:"111 New Englewood Road", tel:"+14237458107", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"McMinn Regional Humane Society", cat:"refugio", lat:35.425466, lng:-84.588618, dir:"219 Alford Street", tel:"+14237449548", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense by Tractor Supply", cat:"tienda", lat:35.449339, lng:-84.624103, dir:"1511 Congress Parkway Sotuh", tel:"+14237446256", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"MRHS Spay & Neuter Clinic", cat:"vet", lat:35.43568, lng:-84.586815, dir:null, tel:"+1-423-649-0370", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "atlanta": {nombre:"Atlanta", centro:[33.754466, -84.389815], tz:"America/New_York", lugares:[
  {n:"Bark & Blossom Vet Studio", cat:"vet", lat:33.75359, lng:-84.365528, dir:"670 DeKalb Avenue Northeast", tel:"+1-770-430-7787", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Inman Park Animal Hospital", cat:"vet", lat:33.755065, lng:-84.357085, dir:"926 Dekalb Avenue Northeast", tel:"+1 404 584 8761", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Inman Park Pet Works", cat:"tienda", lat:33.761956, lng:-84.35763, dir:"914 Austin Avenue Northeast", tel:"+1-404-522-4544", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Puppy United", cat:"peluqueria", lat:33.781266, lng:-84.380877, dir:"976 Piedmont Avenue Northeast", tel:"+1-404-401-6634", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.775887, lng:-84.366084, dir:"650 Ponce De Leon Avenue Northeast", tel:"+1 404-872-2363", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Intown Animal Hospital", cat:"vet", lat:33.779897, lng:-84.367694, dir:"931 Monroe Drive Northeast", tel:"+1-404-881-1805", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"The Whole Dog Market", cat:"tienda", lat:33.779899, lng:-84.367771, dir:"931 Monroe Drive Northeast", tel:"+1-404-549-2727", horas:[10.5, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Atlanta Humane Society Veterinary Clinic", cat:"vet", lat:33.78213, lng:-84.410023, dir:"981 Howell Mill Road Northwest", tel:"+1-404-875-6420", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"CityVet", cat:"vet", lat:33.788259, lng:-84.388017, dir:"1230 West Peachtree Street Northwest", tel:"+1 470-361-2043", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Piedmont Bark Doggie Daycare", cat:"refugio", lat:33.787957, lng:-84.370194, dir:"501 Amsterdam Avenue Northeast", tel:"+1-404-873-5400", horas:[7.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:33.790419, lng:-84.407432, dir:"1289 Northside Drive Northwest", tel:"+1-470-240-5849", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Ormewood Animal Hospital", cat:"vet", lat:33.733669, lng:-84.349751, dir:"749 Moreland Avenue Southeast", tel:"+1-404-963-5885", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Ansley Animal Clinic", cat:"vet", lat:33.791647, lng:-84.367696, dir:"593 Dutch Valley Road Northeast", tel:"+1-404-873-1786", horas:[8.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.803344, lng:-84.411414, dir:"1801 Howell Mill Road Northwest", tel:"+1 404-352-9746", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Coatly Bath & Groom", cat:"peluqueria", lat:33.808883, lng:-84.412688, dir:"1985 Howell Mill Road Northwest", tel:"+1 470-231-1465", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.810138, lng:-84.413621, dir:"2020 Howell Mill Road", tel:"+1 404-351-5591", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Happy Hearts Pet Care Services", cat:"peluqueria", lat:33.751664, lng:-84.398562, dir:"327 Nelson Street Southwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"AMG: Atlanta Meet The Groomers", cat:"peluqueria", lat:33.745557, lng:-84.405326, dir:"340 McDaniel Street Southwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fetch Park", cat:"parque", lat:33.751992, lng:-84.370803, dir:"520 Daniel Street Southeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Freedom Barkway", cat:"parque", lat:33.76062, lng:-84.370504, dir:"523 Highland Avenue Northeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"WAG-A-LOT Downtown", cat:"refugio", lat:33.745757, lng:-84.359793, dir:"840 Old Flat Shoals Road Southeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Common Companion Vet Co.", cat:"vet", lat:33.745459, lng:-84.357994, dir:"907 Memorial Drive Southeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetCo", cat:"tienda", lat:33.757536, lng:-84.346311, dir:"1267 Caroline Street Northeast", tel:null, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"East Atlanta Animal Clinic", cat:"vet", lat:33.741387, lng:-84.346894, dir:"461 Flat Shoals Avenue Southeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Park Pet Supply", cat:"tienda", lat:33.740937, lng:-84.346433, dir:"479A Flat Shoals Avenue Southeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fur Side Pet Grooming", cat:"tienda", lat:33.740915, lng:-84.34641, dir:"481A Flat Shoals Avenue Southeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Collier Animal Hospital", cat:"vet", lat:33.801014, lng:-84.417901, dir:"1669 Defoor Avenue Northwest", tel:null, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Uplift Veterinary Rehab", cat:"vet", lat:33.801001, lng:-84.419855, dir:"1683 Defoor Circle Northwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arthur M. Blank Family Animal Center", cat:"refugio", lat:33.78976, lng:-84.438374, dir:"1551 Perry Boulevard Northwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Smith & porter Apartments Dog Park", cat:"parque", lat:33.749511, lng:-84.399039, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Townhouse Atlanta Dog Park", cat:"parque", lat:33.765685, lng:-84.383921, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Renaissance Park Small Dog Park", cat:"parque", lat:33.768262, lng:-84.381564, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Renaissance Park Large Dog Park", cat:"parque", lat:33.768301, lng:-84.381004, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:33.75587, lng:-84.365458, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Axis Midtown Dog Park", cat:"parque", lat:33.77626, lng:-84.382554, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chewy Vet Care", cat:"vet", lat:33.777231, lng:-84.384086, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Zoo Atlanta", cat:"zoo", lat:33.732637, lng:-84.371145, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"MAA Midtown Bark Park", cat:"parque", lat:33.782708, lng:-84.386974, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spot for Dogs Atlanta", cat:"refugio", lat:33.774957, lng:-84.364396, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Peachtree Walk Dog Park", cat:"parque", lat:33.784419, lng:-84.385863, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West End Animal Wellness Center", cat:"vet", lat:33.738743, lng:-84.426991, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Amli Arts Center Private Dog Park", cat:"parque", lat:33.789233, lng:-84.388653, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Atlantic Station Dog Park", cat:"parque", lat:33.790336, lng:-84.399039, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Glamour Paws", cat:"tienda", lat:33.775973, lng:-84.352679, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ormewood Dog Yard", cat:"parque", lat:33.730938, lng:-84.352958, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fulton County Animal Services", cat:"refugio", lat:33.778893, lng:-84.427977, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fetch Park @ The Works", cat:"parque", lat:33.804394, lng:-84.427559, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fetch Park @ The Works", cat:"parque", lat:33.804395, lng:-84.428472, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "atlantic-beach": {nombre:"Atlantic Beach", centro:[30.334408, -81.398696], tz:"America/New_York", lugares:[
  {n:"Brew Hound", cat:"parque", lat:30.323656, lng:-81.418351, dir:"1848 Kings Circle South", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "atlantic-north-carolina": {nombre:"Atlantic", centro:[34.884886, -76.340471], tz:"America/New_York", lugares:[
  {n:"Dog Walk", cat:"parque", lat:35.017748, lng:-76.314627, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "atlantis": {nombre:"Atlantis", centro:[26.590902, -80.100876], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:26.529173, lng:-80.187392, dir:"9918 Lyons Road", tel:"+1 561-396-2157", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "atlee": {nombre:"Atlee", centro:[37.650968, -77.399413], tz:"America/New_York", lugares:[
  {n:"Rutland Animal Hospital", cat:"vet", lat:37.653043, lng:-77.401067, dir:"9375 Atlee Road", tel:"+1 804-559-6502", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hanover Animal Hospital", cat:"vet", lat:37.666192, lng:-77.381587, dir:"8251 Crown Colony Park", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "atoka-tennessee": {nombre:"Atoka", centro:[35.441195, -89.778138], tz:"America/Chicago", lugares:[
  {n:"Hollywood Feed", cat:"tienda", lat:35.44642, lng:-89.784914, dir:"11154 TN-3", tel:"+1 901-837-3333", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Munford Animal Hospital", cat:"vet", lat:35.439748, lng:-89.797679, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "auburn": {nombre:"Auburn", centro:[32.609857, -85.480783], tz:"America/New_York", lugares:[
  {n:"Auburn Veterinary Hospital", cat:"vet", lat:32.620892, lng:-85.462102, dir:"716 North Dean Road", tel:"+1 334-821-7810", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"CARE Humane Society", cat:"refugio", lat:32.619534, lng:-85.505369, dir:"1140 Ware Drive", tel:"+1 334-821-3222", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Village Veterinary Clinic", cat:"vet", lat:32.6394, lng:-85.480038, dir:"100 Pinnacle Dr", tel:"+1 334-821-7730", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Grove Bark Inn", cat:"peluqueria", lat:32.586788, lng:-85.457039, dir:"1290 Moores Mill Road", tel:"+1 334-209-1275", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.624804, lng:-85.443605, dir:"1716 Opelika Road", tel:"+1-334-457-4366", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Moores Mill Animal Hospital", cat:"vet", lat:32.584812, lng:-85.445814, dir:"2120 Moores Mill Road", tel:"+1 334-821-7739", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"North Gay Veterinary Clinic", cat:"vet", lat:32.613462, lng:-85.479604, dir:"438 North Gay Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Auburn University Veterinary Clinic", cat:"vet", lat:32.590069, lng:-85.510906, dir:"1180 Wire Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wilford and Kate Bailey Small Animal Teaching Hospital", cat:"vet", lat:32.589518, lng:-85.511651, dir:"1220 Wire Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"John Thomas Vaughan Large Animal Teaching Hospital", cat:"vet", lat:32.588502, lng:-85.513015, dir:"1500 Wire Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetVet Animal Health Center", cat:"vet", lat:32.573624, lng:-85.500501, dir:"130 West Longleaf Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"University Veterinary Hospital", cat:"vet", lat:32.611663, lng:-85.44845, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "auburndale": {nombre:"Auburndale", centro:[28.065342, -81.788864], tz:"America/New_York", lugares:[
  {n:"Auburndale Veterinary Clinic", cat:"vet", lat:28.064144, lng:-81.772781, dir:"555 East Bridgers Avenue", tel:"+1-863-967-5854", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Compassion Animal Hospital", cat:"vet", lat:28.03271, lng:-81.787736, dir:"5570 K-Ville Ave", tel:"+1-863-965-2548", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet World", cat:"tienda", lat:28.052215, lng:-81.771909, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "audubon-park": {nombre:"Audubon Park", centro:[38.203959, -85.725239], tz:"America/Chicago", lugares:[
  {n:"Derby City Animal Hospital", cat:"vet", lat:38.198312, lng:-85.708233, dir:"4210 Poplar Level Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Louisville Zoo", cat:"zoo", lat:38.205365, lng:-85.705681, dir:null, tel:"+1-502-459-2181", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Louisville zoo", cat:"zoo", lat:38.20499, lng:-85.705218, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petting Zoo Area", cat:"zoo", lat:38.205966, lng:-85.702877, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "augusta-georgia": {nombre:"Augusta", centro:[33.470971, -81.974843], tz:"America/New_York", lugares:[
  {n:"Barkery on Broad Dog Spa", cat:"peluqueria", lat:33.47792, lng:-81.972275, dir:"1159 Broad Street", tel:"+1-706-691-3242", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Urban K9", cat:"peluqueria", lat:33.473352, lng:-81.959039, dir:"501 Broad Street", tel:"+1-706-723-1909", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pendleton King Dog Park", cat:"parque", lat:33.461244, lng:-82.013607, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ave-maria": {nombre:"Ave Maria", centro:[26.336667, -81.438056], tz:"America/New_York", lugares:[
  {n:"Faithful Friends Animal Hospital", cat:"vet", lat:26.336564, lng:-81.434236, dir:"5052 Pope John Paul II Boulevard", tel:"+1-239-324-4999", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "aventura": {nombre:"Aventura", centro:[25.956481, -80.139212], tz:"America/New_York", lugares:[
  {n:"Amor Animal Hospital", cat:"vet", lat:25.963999, lng:-80.145725, dir:"20305 Biscayne Boulevard", tel:"+13059745510", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greenfield Animal Hospital", cat:"vet", lat:25.947794, lng:-80.147681, dir:"2655 Northeast 186th Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sky Lake Animal Hospital", cat:"vet", lat:25.947798, lng:-80.147963, dir:"2645 Northeast 186th Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Aventura Animal Hospital & Pet Resort", cat:"vet", lat:25.952399, lng:-80.145016, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "avon-park": {nombre:"Avon Park", centro:[27.595731, -81.502193], tz:"America/New_York", lugares:[
  {n:"Mugsy's Grooming Parlor, LLC", cat:"peluqueria", lat:27.595985, lng:-81.511521, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sun ‘N Lake Dog Park", cat:"parque", lat:27.530138, lng:-81.519761, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "avondale-estates": {nombre:"Avondale Estates", centro:[33.771494, -84.267144], tz:"America/New_York", lugares:[
  {n:"The Yankee Clipper", cat:"peluqueria", lat:33.775713, lng:-84.273132, dir:"2 Pine Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ayden": {nombre:"Ayden", centro:[35.471164, -77.417573], tz:"America/New_York", lugares:[
  {n:"Welcome Waggin' Animal Hospital", cat:"vet", lat:35.45803, lng:-77.469258, dir:"949 Old Snow Hill", tel:"+12527461503", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "aylett": {nombre:"Aylett", centro:[37.785974, -77.104973], tz:"America/New_York", lugares:[
  {n:"Aylett Animal Hospital", cat:"vet", lat:37.783356, lng:-77.107731, dir:"8065 Richmond Tappahannock Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "azalea-park": {nombre:"Azalea Park", centro:[28.551043, -81.294212], tz:"America/New_York", lugares:[
  {n:"Adele Place Bark Park", cat:"parque", lat:28.556509, lng:-81.288561, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "babcock-ranch": {nombre:"Babcock Ranch", centro:[26.78317, -81.748414], tz:"America/New_York", lugares:[
  {n:"Animal Hospital at Babcock", cat:"vet", lat:26.773605, lng:-81.758627, dir:"42041 Cypress Parkway", tel:"+1-941-220-6300", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:26.774962, lng:-81.757261, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Octagon Wildlife Sanctuary", cat:"zoo", lat:26.786414, lng:-81.767256, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bailey-s-crossroads": {nombre:"Bailey's Crossroads", centro:[38.85039, -77.129702], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:38.849951, lng:-77.132825, dir:"5825 Leesburg Pike", tel:"+1 703-845-2780", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Shirlington Animal Hospital", cat:"vet", lat:38.841279, lng:-77.088197, dir:"2770 South Arlington Mill Drive", tel:"+1 703-570-6600", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clarendon Animal Care", cat:"vet", lat:38.859524, lng:-77.102227, dir:"948 South George Mason Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fort Barnard Dog Park", cat:"parque", lat:38.850282, lng:-77.092948, dir:"2101 South Pollard Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shirlington Dog Park", cat:"parque", lat:38.844709, lng:-77.093105, dir:"2701 South Oakland Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Welfare League of Arlington", cat:"refugio", lat:38.843492, lng:-77.093159, dir:"2650 South Arlington Mill Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Cardio", cat:"parque", lat:38.843652, lng:-77.089697, dir:"2709 S OAKLAND ST.", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Utah Dog Park", cat:"parque", lat:38.838, lng:-77.085905, dir:"3191 South Utah Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chambliss Dog Park", cat:"parque", lat:38.83583, lng:-77.127741, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Glencarlyn Dog Park", cat:"parque", lat:38.861977, lng:-77.117058, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "baileyton": {nombre:"Baileyton", centro:[36.334266, -82.836825], tz:"America/New_York", lugares:[
  {n:"Davy's Dog Park", cat:"parque", lat:36.325255, lng:-82.834931, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bainbridge": {nombre:"Bainbridge", centro:[30.903825, -84.575477], tz:"America/New_York", lugares:[
  {n:"Port City Animal Hospital", cat:"refugio", lat:30.914078, lng:-84.535605, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bal-harbour-village": {nombre:"Bal Harbour Village", centro:[25.891761, -80.12699], tz:"America/New_York", lugares:[
  {n:"Bark Park", cat:"parque", lat:25.902034, lng:-80.123802, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Haulover Park Dog Beach", cat:"parque", lat:25.902614, lng:-80.121949, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "baldwin": {nombre:"Baldwin", centro:[30.302738, -81.975386], tz:"America/New_York", lugares:[
  {n:"Whitehouse Animal Hospital", cat:"vet", lat:30.315035, lng:-81.844787, dir:"11004 Beaver Street West", tel:"+1-904-781-0599", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Treeline Trails Dog Park", cat:"parque", lat:30.199066, lng:-81.96329, dir:"Woodbury Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ball-ground": {nombre:"Ball Ground", centro:[34.338226, -84.376571], tz:"America/New_York", lugares:[
  {n:"Georgia Animal Project", cat:"vet", lat:34.337919, lng:-84.375538, dir:"Gilmer Ferry Road", tel:"+1-770-704-7297", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ball Ground Hounds", cat:"tienda", lat:34.338656, lng:-84.377886, dir:"215 Gilmer Ferry Road", tel:"+1-770-735-1855", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Ball Ground Animal Hospital", cat:"vet", lat:34.33727, lng:-84.374002, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bamberg": {nombre:"Bamberg", centro:[33.297101, -81.03482], tz:"America/New_York", lugares:[
  {n:"Bamburg Vetetinary Clinic", cat:"vet", lat:33.324058, lng:-81.028238, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "banner-elk": {nombre:"Banner Elk", centro:[36.163334, -81.871901], tz:"America/New_York", lugares:[
  {n:"My Best Friends Barkery", cat:"tienda", lat:36.162207, lng:-81.871453, dir:"176 Shawneehaw Avenue South", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "barbourmeade": {nombre:"Barbourmeade", centro:[38.297292, -85.603294], tz:"America/Chicago", lugares:[
  {n:"Barbour Lane Animal Hospital", cat:"vet", lat:38.296411, lng:-85.602389, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "barboursville": {nombre:"Barboursville", centro:[38.170968, -78.281672], tz:"America/New_York", lugares:[
  {n:"Old Dominion Equine Associates", cat:"vet", lat:38.087939, lng:-78.277061, dir:"6539 Gordonsville Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "barboursville-west-virginia": {nombre:"Barboursville", centro:[38.40953, -82.294592], tz:"America/New_York", lugares:[
  {n:"Barboursville Veterinary Clinic", cat:"vet", lat:38.414557, lng:-82.299077, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.41944, lng:-82.285232, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:38.42336, lng:-82.263044, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riverside Companions", cat:"refugio", lat:38.411154, lng:-82.369498, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bardstown": {nombre:"Bardstown", centro:[37.809246, -85.466902], tz:"America/New_York", lugares:[
  {n:"Bardstown Animal Clinic", cat:"vet", lat:37.824474, lng:-85.454869, dir:"1299 Cardinal Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bardstown Vetrinary Clinic", cat:"vet", lat:37.833145, lng:-85.461288, dir:"1210 North 3rd Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shaggy Dog Pet Groomer", cat:"peluqueria", lat:37.826256, lng:-85.458479, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "barnwell": {nombre:"Barnwell", centro:[33.244873, -81.358718], tz:"America/New_York", lugares:[
  {n:"Glamour Grooming", cat:"peluqueria", lat:33.243787, lng:-81.36407, dir:"191 Main Street", tel:"+1 803 259 2547", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bartlett-tennessee": {nombre:"Bartlett", centro:[35.204533, -89.873975], tz:"America/Chicago", lugares:[
  {n:"Hollywood Feed", cat:"tienda", lat:35.201746, lng:-89.839033, dir:"6722 Summer Avenue", tel:"+19013828002", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Memphis & Shelby County", cat:"refugio", lat:35.151125, lng:-89.847887, dir:"935 Farm Road", tel:"+1 901-937-3900", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Shelby Center Hospital for Animals", cat:"vet", lat:35.204662, lng:-89.832555, dir:"6923 Stage Road", tel:null, horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"VetIQ", cat:"vet", lat:35.176377, lng:-89.839726, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bartow": {nombre:"Bartow", centro:[27.896438, -81.843323], tz:"America/New_York", lugares:[
  {n:"Highland Pet Hospital", cat:"vet", lat:27.962024, lng:-81.876198, dir:"5631 US-98", tel:"+1-863-644-6634", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"tienda", lat:27.969127, lng:-81.882186, dir:"5291 US Hwy 98 S", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "batesville-georgia": {nombre:"Batesville", centro:[34.74815, -83.611284], tz:"America/New_York", lugares:[
  {n:"Bleu Canoe", cat:"resto", lat:34.799174, lng:-83.565567, dir:"115 Sweetwater Circle", tel:"+1-706-947-1833", horas:[16.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "batesville-mississippi": {nombre:"Batesville", centro:[34.316488, -89.952711], tz:"America/Chicago", lugares:[
  {n:"Unruh Leigh T DVM", cat:"vet", lat:34.310872, lng:-89.887773, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "baxter-tennessee": {nombre:"Baxter", centro:[36.153773, -85.643399], tz:"America/Chicago", lugares:[
  {n:"Baxter's Dog House (Groomer)", cat:"tienda", lat:36.153737, lng:-85.642191, dir:"121 Broad Street", tel:"+1-931-858-5595", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "baxter-village": {nombre:"Baxter Village", centro:[35.027326, -80.968775], tz:"America/New_York", lugares:[
  {n:"Agility Park", cat:"parque", lat:35.028899, lng:-80.962663, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:35.040251, lng:-80.984485, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bay-harbor-islands": {nombre:"Bay Harbor Islands", centro:[25.887595, -80.131156], tz:"America/New_York", lugares:[
  {n:"98th Street Dog Park", cat:"parque", lat:25.888966, lng:-80.13175, dir:"98th Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:25.88252, lng:-80.129518, dir:"East Bay Harbor Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bay-hill": {nombre:"Bay Hill", centro:[28.457369, -81.510484], tz:"America/New_York", lugares:[
  {n:"Bark Park", cat:"parque", lat:28.399222, lng:-81.535027, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waggin' Tails Dog Park", cat:"parque", lat:28.40991, lng:-81.556696, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bealeton": {nombre:"Bealeton", centro:[38.582766, -77.767368], tz:"America/New_York", lugares:[
  {n:"Compassion Animal Hospital", cat:"vet", lat:38.578835, lng:-77.767333, dir:"11088 Marsh Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beaufort": {nombre:"Beaufort", centro:[34.716315, -76.66459], tz:"America/New_York", lugares:[
  {n:"Live Oak Veterinary Hospital", cat:"vet", lat:34.728, lng:-76.6399, dir:"210 Campen Road", tel:"+12525042097", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Austin Veterinary Animal Hospital", cat:"vet", lat:34.737732, lng:-76.634905, dir:"102 Professional Park Drive", tel:"+12528389028", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beaufort-south-carolina": {nombre:"Beaufort", centro:[32.431581, -80.669829], tz:"America/New_York", lugares:[
  {n:"Beaufort Dog", cat:"peluqueria", lat:32.439901, lng:-80.676866, dir:"1307 Boundary Street", tel:"+18438125394", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "beaver-dam-kentucky": {nombre:"Beaver Dam", centro:[37.402922, -86.875937], tz:"America/Chicago", lugares:[
  {n:"Kentucky Kitty Cats Cottage", cat:"refugio", lat:37.405117, lng:-86.730053, dir:"317 Wilderness Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bedford-virginia": {nombre:"Bedford", centro:[37.334456, -79.523508], tz:"America/New_York", lugares:[
  {n:"Blue Ridge Animal Hospital", cat:"vet", lat:37.311813, lng:-79.538156, dir:"1343 Moneta Road", tel:"+1-540-586-4290", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Bedford Animal Hospital", cat:"vet", lat:37.374436, lng:-79.498433, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beechwood-village": {nombre:"Beechwood Village", centro:[38.254793, -85.63135], tz:"America/Chicago", lugares:[
  {n:"Feeders Supply", cat:"tienda", lat:38.249899, lng:-85.629149, dir:"4600 Shelbyville Road", tel:"+1-502-893-5550", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bell-buckle": {nombre:"Bell Buckle", centro:[35.591738, -86.35416], tz:"America/Chicago", lugares:[
  {n:"Beechgrove Stable and Kennels - Building 1", cat:"refugio", lat:35.664128, lng:-86.239628, dir:"1187 Suttons Branch Road", tel:"+1-931-607-9001", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Cascade Veterinary Hospital", cat:"vet", lat:35.568126, lng:-86.367357, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "belle-haven": {nombre:"Belle Haven", centro:[38.775134, -77.062539], tz:"America/New_York", lugares:[
  {n:"EMMAVet", cat:"vet", lat:38.776274, lng:-77.061501, dir:"1628 Belle View Boulevard", tel:"+1 703-373-3774", horas:[15.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"Belle Haven Animal Medical Center", cat:"vet", lat:38.780084, lng:-77.055068, dir:"1221 Belle Haven Road", tel:"+1 703-721-0088", horas:[7.5, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Westgrove Dog Park", cat:"parque", lat:38.769508, lng:-77.058937, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "belle-meade": {nombre:"Belle Meade", centro:[36.095892, -86.856945], tz:"America/Chicago", lugares:[
  {n:"Love at First Sight! Puppy and Kitten Adoption Center", cat:"refugio", lat:36.140779, lng:-86.839915, dir:"4423 Murphy Road", tel:"+1-615-297-2464", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nashville Pet Products Center - Bellevue", cat:"tienda", lat:36.073281, lng:-86.923685, dir:"7085 Old Harding Pike", tel:"+1-615-662-2525", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Bellevue Animal Hospital", cat:"vet", lat:36.073172, lng:-86.926077, dir:"7098 Old Harding Pike", tel:"+16156464545", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VEG", cat:"vet", lat:36.141145, lng:-86.882419, dir:null, tel:null, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:36.101731, lng:-86.926858, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "belleair": {nombre:"Belleair", centro:[27.935854, -82.806214], tz:"America/New_York", lugares:[
  {n:"Fluffy Puppies", cat:"tienda", lat:27.944674, lng:-82.799674, dir:"S Ft Harrison Ave", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Safari", cat:"tienda", lat:27.939252, lng:-82.773967, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bellefonte-kentucky": {nombre:"Bellefonte", centro:[38.492581, -82.690163], tz:"America/New_York", lugares:[
  {n:"Bert's Pet Center", cat:"tienda", lat:38.499616, lng:-82.679103, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "belleview": {nombre:"Belleview", centro:[29.062578, -82.049511], tz:"America/New_York", lugares:[
  {n:"Mr. Mochas Marketplace", cat:"tienda", lat:29.045283, lng:-82.034494, dir:"12166 SE US HWY 441", tel:"+1-352-369-0311", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Fallen Oak Equine Rescue", cat:"refugio", lat:29.041492, lng:-82.072081, dir:"12418 Southeast 47th Avenue", tel:"+1 513 582 5783", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Marion County Animal Center", cat:"refugio", lat:29.121338, lng:-82.054373, dir:"5701 Southeast 66th Street", tel:"+1-352-671-8700", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Maricamp Animal Hospital", cat:"vet", lat:29.142634, lng:-82.060899, dir:"4485 Southeast Maricamp Road", tel:"+13526240300", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bellevue-kentucky": {nombre:"Bellevue", centro:[39.106708, -84.482648], tz:"America/New_York", lugares:[
  {n:"Acute Pet", cat:"vet", lat:39.106595, lng:-84.483168, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bellevue Animal Hospital", cat:"vet", lat:39.107107, lng:-84.48253, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riverview Animal Hospital", cat:"vet", lat:39.098155, lng:-84.481215, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bellewood": {nombre:"Bellewood", centro:[38.257571, -85.659684], tz:"America/Chicago", lugares:[
  {n:"Bowser's Bowtique", cat:"peluqueria", lat:38.252283, lng:-85.658434, dir:"3782 Lexington Road", tel:"+1-502-897-2177", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Chenoweth Animal Hospital", cat:"vet", lat:38.253282, lng:-85.662379, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "belmont-north-carolina": {nombre:"Belmont", centro:[35.243827, -81.037732], tz:"America/New_York", lugares:[
  {n:"South Point Pet Hospital", cat:"vet", lat:35.242665, lng:-81.038118, dir:"3 North Main Street", tel:"+1-704-825-7774", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Million Dollar Dog, Inc", cat:"peluqueria", lat:35.247379, lng:-81.018536, dir:"7202 Wilkinson Blvd", tel:"+1-704-266-4137", horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"River Run Animal Hospital", cat:"vet", lat:35.160536, lng:-80.974347, dir:"6250 Caden Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet Pet Clinic", cat:"vet", lat:35.252048, lng:-81.026448, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Vineyards on Lake Wylie Dog Park", cat:"parque", lat:35.228669, lng:-80.99608, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "belvedere-south-carolina": {nombre:"Belvedere", centro:[33.530969, -81.944837], tz:"America/New_York", lugares:[
  {n:"North Augusta Animal Hospital", cat:"vet", lat:33.518681, lng:-81.956031, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Healthcare Associates", cat:"vet", lat:33.548575, lng:-82.001114, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "belwood": {nombre:"Belwood", centro:[35.477076, -81.523424], tz:"America/New_York", lugares:[
  {n:"Vale Veterinary Hospital", cat:"vet", lat:35.572298, lng:-81.472315, dir:"9286 Old Shelby Road", tel:"+17044622901", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "benns-church": {nombre:"Benns Church", centro:[36.935493, -76.585422], tz:"America/New_York", lugares:[
  {n:"The Oaks Veterinary Clinic", cat:"vet", lat:36.945371, lng:-76.59315, dir:"14202 Benns Church Boulevard", tel:"+1-757-357-2324", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "benson-north-carolina": {nombre:"Benson", centro:[35.381437, -78.548056], tz:"America/New_York", lugares:[
  {n:"Hannah Creek Veterinary Clinic", cat:"vet", lat:35.385271, lng:-78.546787, dir:"375 North Wall Street", tel:"+1-919-207-2800", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Benson Animal Hospital", cat:"vet", lat:35.371095, lng:-78.530107, dir:"1625 NC-50 South", tel:"+19198941887", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bent-creek": {nombre:"Bent Creek", centro:[35.509001, -82.607903], tz:"America/New_York", lugares:[
  {n:"Buncombe County Animal Shelter", cat:"refugio", lat:35.547701, lng:-82.601387, dir:"16 Forever Friend Lane", tel:"+1 828 250 6430", horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Asheville Humane Society", cat:"tienda", lat:35.547685, lng:-82.600803, dir:"14 Forever Friend Lane", tel:"+1 828 761 2001", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "berea-south-carolina": {nombre:"Berea", centro:[34.885395, -82.455957], tz:"America/New_York", lugares:[
  {n:"Petey & Spice Canine Salon", cat:"peluqueria", lat:34.884876, lng:-82.456387, dir:"701 Sulphur Springs Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "berkeley-springs": {nombre:"Berkeley Springs", centro:[39.626798, -78.227951], tz:"America/New_York", lugares:[
  {n:"Humane Society - Morgan Co.", cat:"refugio", lat:39.556242, lng:-78.26849, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bermuda-run": {nombre:"Bermuda Run", centro:[36.003748, -80.422], tz:"America/New_York", lugares:[
  {n:"Petsense", cat:"tienda", lat:36.018902, lng:-80.408186, dir:"4186 Clemmons Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tanglewood Dog Park", cat:"parque", lat:36.016272, lng:-80.407429, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "berry-hill": {nombre:"Berry Hill", centro:[36.117002, -86.766388], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:36.108121, lng:-86.764082, dir:"719 Thompson Lane", tel:"+1 615-386-0105", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Grassmere Animal Hospital", cat:"vet", lat:36.085152, lng:-86.727828, dir:"3926 Nolensville Pike", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Belmont Animal Hospital", cat:"vet", lat:36.116538, lng:-86.797503, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gazebo dog park", cat:"parque", lat:36.104617, lng:-86.7236, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bethania": {nombre:"Bethania", centro:[36.18236, -80.338108], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:36.141871, lng:-80.300415, dir:"2812 Reynolda Road", tel:null, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bethel-manor": {nombre:"Bethel Manor", centro:[37.098427, -76.428417], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:37.109591, lng:-76.493712, dir:"12142 Jefferson Avenue", tel:"+1 757-249-2007", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Zone", cat:"tienda", lat:37.146833, lng:-76.457102, dir:"4324 George Washington Memorial Highway", tel:"+1-757-877-8084", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Care-A-Lot Pet Supply", cat:"tienda", lat:37.105348, lng:-76.51161, dir:"301 Oyster Point Road", tel:"+1-757-969-1004", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:37.130959, lng:-76.516546, dir:"12551 Jefferson Avenue", tel:"+1 757-833-0925", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Foxy Roxy Grooming Salon", cat:"peluqueria", lat:37.135291, lng:-76.515179, dir:"12638 Jefferson Avenue", tel:"+1-757-234-4551", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"GroomingKingdomINC", cat:"peluqueria", lat:37.120556, lng:-76.525164, dir:"13678 Warwick Boulevard", tel:"+1-757-375-8547", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Pawfectly Perfect Grooming Salon", cat:"peluqueria", lat:37.137087, lng:-76.521816, dir:"562 Denbigh Boulevard", tel:"+1-757-608-9500", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Denbigh Animal Hospital", cat:"vet", lat:37.134198, lng:-76.52977, dir:"475 Denbigh Boulevard", tel:"+1-757-877-8339", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Top Line Stables", cat:"refugio", lat:37.104465, lng:-76.454426, dir:"201 George Emerson Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Emergency Vet Clinic", cat:"vet", lat:37.101818, lng:-76.457212, dir:"1120 Geo Wash Mem Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pine Meadow Vet Hospital Pc", cat:"vet", lat:37.105754, lng:-76.460246, dir:"1403 Geo Wash Mem Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pet Lodge At Yorktown", cat:"refugio", lat:37.109423, lng:-76.458676, dir:"222 Apple Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Salty Paws Vet Hospital", cat:"vet", lat:37.122744, lng:-76.452926, dir:"329 Hampton Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"vet", lat:37.123728, lng:-76.457186, dir:"2816 Geo Wash Mem Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Peninsula SPCA", cat:"refugio", lat:37.07256, lng:-76.479243, dir:"523 J Clyde Morris Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:37.042476, lng:-76.427092, dir:"1309 Todds Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Springhouse BarkPark", cat:"parque", lat:37.131594, lng:-76.520039, dir:"Split Rail Circle", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Peninsula SPCA Petting Zoo", cat:"zoo", lat:37.072302, lng:-76.479647, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fido Field Dog Park", cat:"parque", lat:37.086182, lng:-76.532303, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bethlehem-georgia": {nombre:"Bethlehem", centro:[33.932884, -83.712996], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.941144, lng:-83.747905, dir:"916 Loganville Highway", tel:"+1 770-307-4856", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Happy Tails", cat:"vet", lat:33.942974, lng:-83.741232, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beulah-florida": {nombre:"Beulah", centro:[30.534362, -87.401645], tz:"America/Chicago", lugares:[
  {n:"Beulah Regional Dog Park", cat:"parque", lat:30.516625, lng:-87.373782, dir:"7820 Mobile Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beulaville": {nombre:"Beulaville", centro:[34.923776, -77.773867], tz:"America/New_York", lugares:[
  {n:"Animal Hospital of Beulaville", cat:"vet", lat:34.93023, lng:-77.765652, dir:"236 NC-41", tel:"+19102988188", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Posh 4 Paws - Boarding, Grooming, Daycare, & Boutique", cat:"peluqueria", lat:34.925442, lng:-77.789955, dir:"141 East Park Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "big-stone-gap": {nombre:"Big Stone Gap", centro:[36.867794, -82.774227], tz:"America/New_York", lugares:[
  {n:"Semlly's Pet Parlor", cat:"peluqueria", lat:36.870479, lng:-82.777218, dir:"324 East 5th Street North", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "biloxi": {nombre:"Biloxi", centro:[30.400763, -88.889382], tz:"America/Chicago", lugares:[
  {n:"Pixie's Memorial Dog Park", cat:"parque", lat:30.409654, lng:-88.95279, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "biltmore-forest": {nombre:"Biltmore Forest", centro:[35.533725, -82.528456], tz:"America/New_York", lugares:[
  {n:"Cedar Ridge Animal Hospital", cat:"vet", lat:35.552193, lng:-82.474885, dir:"184 Charlotte Highway", tel:"+18285752430", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ruff Life Dog Training Services", cat:"refugio", lat:35.550469, lng:-82.535897, dir:"803 Fairview Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Azalea Small Breed Dog Park", cat:"parque", lat:35.575472, lng:-82.484943, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Azalea Large Breed Dog Park", cat:"parque", lat:35.575542, lng:-82.484314, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "birmingham": {nombre:"Birmingham", centro:[33.520682, -86.802433], tz:"America/Chicago", lugares:[
  {n:"Good Dog Park & Bar", cat:"parque", lat:33.513645, lng:-86.799304, dir:"2307 1st Avenue South", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Barkery", cat:"parque", lat:33.525128, lng:-86.806076, dir:null, tel:null, horas:[12.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Days of Birmingham", cat:"refugio", lat:33.513513, lng:-86.809181, dir:null, tel:null, horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "biscayne-park": {nombre:"Biscayne Park", centro:[25.882595, -80.180603], tz:"America/New_York", lugares:[
  {n:"Biscayne Animal Hospital", cat:"vet", lat:25.889495, lng:-80.165556, dir:"1665 Northeast 123rd Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog's Best Friend", cat:"peluqueria", lat:25.889535, lng:-80.16483, dir:"1679 Northeast 123rd Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:25.891287, lng:-80.162781, dir:"12553 Biscayne Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oceanside Pet Spaw", cat:"peluqueria", lat:25.891948, lng:-80.162396, dir:"12577 Biscayne Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bishopville-south-carolina": {nombre:"Bishopville", centro:[34.218211, -80.248406], tz:"America/New_York", lugares:[
  {n:"Bishopville Animal Clinic", cat:"vet", lat:34.22171, lng:-80.243524, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bithlo": {nombre:"Bithlo", centro:[28.554628, -81.10671], tz:"America/New_York", lugares:[
  {n:"Farm and Pet Superstore", cat:"tienda", lat:28.547032, lng:-81.093723, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Groom Bar", cat:"peluqueria", lat:28.53762, lng:-81.149206, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "black-mountain": {nombre:"Black Mountain", centro:[35.617654, -82.320579], tz:"America/New_York", lugares:[
  {n:"Bone-A-Fide Pet Boutique", cat:"tienda", lat:35.616224, lng:-82.320824, dir:"118 Cherry Street", tel:"+18286690706", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blue Ridge Animal Hospital Inc", cat:"vet", lat:35.615352, lng:-82.322793, dir:"306 West State Street", tel:"+1-828-669-8719", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blue Ridge Pet Supplies", cat:"tienda", lat:35.609138, lng:-82.345388, dir:"103 WNC Shopping Center Drive", tel:"+1 828-669-0032", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "blacksburg": {nombre:"Blacksburg", centro:[35.121241, -81.515925], tz:"America/New_York", lugares:[
  {n:"The Dog Shop", cat:"peluqueria", lat:35.120891, lng:-81.517022, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "blacksburg-virginia": {nombre:"Blacksburg", centro:[37.229657, -80.413677], tz:"America/New_York", lugares:[
  {n:"Main Street Vetinary Clinic", cat:"vet", lat:37.249836, lng:-80.411281, dir:"1514 North Main Street", tel:"+1-540-951-1002", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Kibbles on Main", cat:"tienda", lat:37.250803, lng:-80.411429, dir:"1520 North Main Street", tel:"+1-540-961-5410", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Village Groomer", cat:"peluqueria", lat:37.251714, lng:-80.411635, dir:"1531 North Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "blairsville": {nombre:"Blairsville", centro:[34.875907, -83.958371], tz:"America/New_York", lugares:[
  {n:"Union County Dog Park", cat:"parque", lat:34.870645, lng:-83.979765, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "blakely": {nombre:"Blakely", centro:[31.377347, -84.934339], tz:"America/New_York", lugares:[
  {n:"Payton Veterinary Hospital", cat:"vet", lat:31.399397, lng:-84.93162, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bloomingdale": {nombre:"Bloomingdale", centro:[27.893843, -82.244126], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:27.895926, lng:-82.243814, dir:"3313 Lithia Pinecrest Road", tel:"+1-813-262-9912", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"EarthWise Pet", cat:"tienda", lat:27.89104, lng:-82.242609, dir:"3454 Lithia Pinecrest Road", tel:"+1-813-999-0858", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:27.892976, lng:-82.272394, dir:"845 East Bloomingdale Avenue", tel:"+1-813-661-8600", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Brandon Equine Medical Center", cat:"vet", lat:27.892037, lng:-82.27519, dir:"605 East Bloomingdale Avenue", tel:"+1-813-643-7177", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Care Animal Hospital", cat:"vet", lat:27.893198, lng:-82.275681, dir:"511 East Bloomingdale Avenue", tel:"+1-813-684-7387", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Alafia River Animal Hospital", cat:"vet", lat:27.85065, lng:-82.168916, dir:"7021 Lithia Pinecrest Road", tel:"+1-813-643-1002", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Kim`s Natural pet food", cat:"tienda", lat:27.897496, lng:-82.247764, dir:"3110 Lithia Pinecrest Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:27.893057, lng:-82.271302, dir:"973 East Bloomingdale Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Gone Holistic", cat:"tienda", lat:27.853866, lng:-82.20523, dir:null, tel:"+1-813-651-0842", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bloomingdale-georgia": {nombre:"Bloomingdale", centro:[32.132425, -81.299002], tz:"America/New_York", lugares:[
  {n:"Faulkville Animal Hospital", cat:"vet", lat:32.14516, lng:-81.338447, dir:"3036 US-80", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pooler Vet", cat:"vet", lat:32.130921, lng:-81.291097, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bloomingdale-tennessee": {nombre:"Bloomingdale", centro:[36.584546, -82.489316], tz:"America/New_York", lugares:[
  {n:"Cherry Point Animal Hospital", cat:"vet", lat:36.550477, lng:-82.442968, dir:"101 Island Road", tel:"+1-423-279-9996", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petworks Animal Services", cat:"refugio", lat:36.559922, lng:-82.470233, dir:"3101 East Stone Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "blowing-rock": {nombre:"Blowing Rock", centro:[36.135025, -81.677791], tz:"America/New_York", lugares:[
  {n:"Barks & Co", cat:"tienda", lat:36.132969, lng:-81.677757, dir:"110 Sunset Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Deer Park", cat:"zoo", lat:36.172732, lng:-81.651981, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "blue-ridge-georgia": {nombre:"Blue Ridge", centro:[34.863972, -84.324087], tz:"America/New_York", lugares:[
  {n:"Rebels", cat:"tienda", lat:34.876827, lng:-84.301328, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "blue-ridge-manor": {nombre:"Blue Ridge Manor", centro:[38.243126, -85.563016], tz:"America/Chicago", lugares:[
  {n:"Veterinary Associates Stonefield", cat:"vet", lat:38.244052, lng:-85.559261, dir:"203 Moser Road", tel:"+1-502-245-7863", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bluefield": {nombre:"Bluefield", centro:[37.252613, -81.271344], tz:"America/New_York", lugares:[
  {n:"Paws Grooming Styles", cat:"peluqueria", lat:37.253058, lng:-81.270952, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bluefield-west-virginia": {nombre:"Bluefield", centro:[37.26984, -81.222319], tz:"America/New_York", lugares:[
  {n:"Veterinary Associates", cat:"vet", lat:37.263409, lng:-81.186358, dir:"4019 East Cumberland Road", tel:"+1-304-327-8554", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "bluffton-south-carolina": {nombre:"Bluffton", centro:[32.237147, -80.860387], tz:"America/New_York", lugares:[
  {n:"Buckwalter Veterinary Clinic", cat:"vet", lat:32.270494, lng:-80.917267, dir:"103 Buckwalter Place Boulevard", tel:"+1-843-837-2733", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "blythewood": {nombre:"Blythewood", centro:[34.214316, -80.973977], tz:"America/New_York", lugares:[
  {n:"Pet Friends", cat:"vet", lat:34.138504, lng:-80.943522, dir:"610 East Killian Road", tel:"+1-803-699-6252", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:34.140806, lng:-80.915079, dir:"2108 Clemson Road", tel:"+1-803-851-0798", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Doko Animal Hospital", cat:"vet", lat:34.214771, lng:-80.975515, dir:"120 Blythewood Road", tel:null, horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Lake Carolina Dog Park", cat:"parque", lat:34.186413, lng:-80.887403, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boca-west": {nombre:"Boca West", centro:[26.38041, -80.159437], tz:"America/New_York", lugares:[
  {n:"Fur Crazy Pet Salon", cat:"peluqueria", lat:26.366963, lng:-80.189369, dir:"9220 Glades Road", tel:"+1-561-488-2242", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"West Boca Veterinary Center", cat:"vet", lat:26.393549, lng:-80.202424, dir:"9908 Yamato Road", tel:"+1 561-451-8838", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:26.364782, lng:-80.202528, dir:"9960 Glades Road", tel:"+1 561-852-2016", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:26.365013, lng:-80.20483, dir:"20861 State Road 7", tel:"+1 561-470-8085", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Mizner Bark Dog Park", cat:"parque", lat:26.379013, lng:-80.118279, dir:null, tel:"+1-561-393-7815", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mizner Court Resident Dog Park", cat:"parque", lat:26.405025, lng:-80.122799, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bogart": {nombre:"Bogart", centro:[33.949281, -83.534608], tz:"America/New_York", lugares:[
  {n:"Mutty Paws", cat:"refugio", lat:33.917331, lng:-83.553245, dir:"1050 Talas Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mars Hill Animal Hospital", cat:"vet", lat:33.919129, lng:-83.513266, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Oconee Animal Hospital", cat:"vet", lat:33.916879, lng:-83.551847, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boiling-springs-south-carolina": {nombre:"Boiling Springs", centro:[35.046508, -81.981773], tz:"America/New_York", lugares:[
  {n:"Heartland Animal Hospital", cat:"vet", lat:35.037495, lng:-81.972747, dir:"2880 Boiling Springs Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ark Animal Hospital", cat:"vet", lat:35.030698, lng:-81.967373, dir:"2528 Boiling Springs Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bolivar-tennessee": {nombre:"Bolivar", centro:[35.256194, -88.987839], tz:"America/Chicago", lugares:[
  {n:"Pleasant Run Creek Dog Park", cat:"parque", lat:35.278284, lng:-89.018316, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bolton-mississippi": {nombre:"Bolton", centro:[32.349312, -90.460096], tz:"America/Chicago", lugares:[
  {n:"Farr Animal Hospital", cat:"vet", lat:32.34973, lng:-90.459341, dir:"107 Madison Street", tel:"+1 601-866-7158", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bon-air-virginia": {nombre:"Bon Air", centro:[37.524869, -77.557766], tz:"America/New_York", lugares:[
  {n:"Bows and Bones Pet Grooming", cat:"peluqueria", lat:37.533487, lng:-77.561803, dir:"2600 Buford Road", tel:"+1-804-267-5685", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Crittertown Bathhouse", cat:"peluqueria", lat:37.538536, lng:-77.518451, dir:null, tel:"+1 804-320-1096", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:37.503048, lng:-77.574586, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fido Park Avenue", cat:"tienda", lat:37.550217, lng:-77.571551, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bon-secour": {nombre:"Bon Secour", centro:[30.315479, -87.729432], tz:"America/Chicago", lugares:[
  {n:"Alabama Gulf Coast Zoo", cat:"zoo", lat:30.316219, lng:-87.676417, dir:"20499 Oak Road East", tel:"+1 251-256-7008", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Magnolia by the Gulf Animal Clinic", cat:"vet", lat:30.311374, lng:-87.684345, dir:"19930 Oak Rd W", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bonita-springs": {nombre:"Bonita Springs", centro:[26.339806, -81.778697], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:26.270547, lng:-81.739227, dir:"2415 Tarpon Bay Boulevard", tel:"+1-239-249-5278", horas:[8.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:26.270627, lng:-81.719832, dir:"2220 Logan Boulevard North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Angel Animal Hospital & Boarding", cat:"vet", lat:26.312251, lng:-81.805421, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bonita Veterinary Hospital", cat:"vet", lat:26.330141, lng:-81.821039, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ruffgers", cat:"tienda", lat:26.322799, lng:-81.81952, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bubbles & Bows Pet Salon", cat:"peluqueria", lat:26.33027, lng:-81.822682, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Oasis Veterinary", cat:"vet", lat:26.271063, lng:-81.766674, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Collier Animal Clinic", cat:"vet", lat:26.270269, lng:-81.801943, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:26.269427, lng:-81.798745, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shandra's Pet Salon", cat:"peluqueria", lat:26.27004, lng:-81.80222, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Perfection Fur Studio", cat:"peluqueria", lat:26.268161, lng:-81.802099, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Love My Dog Resport & Spa", cat:"refugio", lat:26.268073, lng:-81.802365, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Dogs Hair Haven", cat:"peluqueria", lat:26.258648, lng:-81.801663, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Custom Grooming", cat:"peluqueria", lat:26.256287, lng:-81.801897, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Partner for Life Pet Hospital", cat:"vet", lat:26.246797, lng:-81.771445, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:26.284613, lng:-81.691778, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:26.284227, lng:-81.691862, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:26.245553, lng:-81.79984, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Goodness for Pets", cat:"tienda", lat:26.245294, lng:-81.799838, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:26.242206, lng:-81.76521, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Naples Veterinary Hospital", cat:"vet", lat:26.242054, lng:-81.765265, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Harmony Animal Hospital", cat:"vet", lat:26.244512, lng:-81.694448, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"AnimaLife Veterinary Center", cat:"vet", lat:26.245288, lng:-81.690445, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boone-north-carolina": {nombre:"Boone", centro:[36.218787, -81.684004], tz:"America/New_York", lugares:[
  {n:"Animal Emergency Clinic of the High Country", cat:"vet", lat:36.202159, lng:-81.682644, dir:"1710 NC Highway 105", tel:"+1-828-268-2833", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Pet Care Clinic of the High Country", cat:"vet", lat:36.201951, lng:-81.681567, dir:"1614 NC Highway 105", tel:"+1-828-268-1159", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:36.205306, lng:-81.696616, dir:"2575 NC Highway 105", tel:"+1 828-266-2100", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Ridge Runner Pet Lodging", cat:"refugio", lat:36.202003, lng:-81.681524, dir:"1614 NC Highway 105", tel:"+1-828-268-1419", horas:[7.0, 11.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Boone", cat:"vet", lat:36.206511, lng:-81.699761, dir:"2773 NC Highway 105", tel:"+1-828-264-7113", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pet Place", cat:"tienda", lat:36.202434, lng:-81.661528, dir:"240 Shadowline Drive", tel:"+1-828-268-1510", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Groomindales", cat:"peluqueria", lat:36.202454, lng:-81.661327, dir:"240 Shadowline Drive", tel:"+1-828-264-6440", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Watauga Veterinary Hospital", cat:"vet", lat:36.227127, lng:-81.715123, dir:"2531 US 421", tel:"+1 828-297-3300", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center of Boone", cat:"vet", lat:36.228031, lng:-81.615717, dir:"1582 Old US-421 South", tel:"+18282647007", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fetching Ridge Pet Hotel & Spa", cat:"refugio", lat:36.224783, lng:-81.596645, dir:"520 Moretz Road", tel:"+18282648766", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Watauga Humane Society", cat:"refugio", lat:36.221956, lng:-81.596223, dir:"312 Paws Way", tel:"+1 828-264-7865", horas:[12.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Arko Dog Park", cat:"parque", lat:36.223103, lng:-81.596172, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boonsboro-virginia": {nombre:"Boonsboro", centro:[37.449308, -79.261417], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:37.397938, lng:-79.22242, dir:"3901 Old Forest Road", tel:"+1 434-316-7072", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bowdon": {nombre:"Bowdon", centro:[33.537889, -85.253282], tz:"America/New_York", lugares:[
  {n:"Bowdon animal hospital", cat:"vet", lat:33.538217, lng:-85.250634, dir:"145 City Hall Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bowling-green-kentucky": {nombre:"Bowling Green", centro:[36.99292, -86.442868], tz:"America/Chicago", lugares:[
  {n:"Alpine Pet Care Center", cat:"vet", lat:36.964643, lng:-86.46671, dir:"2357 Nashville Road", tel:"+1-270-781-7818", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Bowling Green Emergency Veterinary Clinic", cat:"vet", lat:36.962295, lng:-86.464805, dir:"760 Campbell Lane", tel:"+1-270-715-5600", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.953457, lng:-86.428399, dir:"1865 Campbell Lane", tel:"+1 270-495-6617", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Bowling Green Veterinary Emergency Clinic", cat:"vet", lat:36.962316, lng:-86.464772, dir:"760 Campbell Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boyce-virginia": {nombre:"Boyce", centro:[39.091946, -78.058517], tz:"America/New_York", lugares:[
  {n:"Roseville Veterinary Clinic", cat:"vet", lat:39.0909, lng:-78.062801, dir:"26 South Greenway Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boyds-creek": {nombre:"Boyds Creek", centro:[35.923421, -83.659062], tz:"America/New_York", lugares:[
  {n:"Boyd Creek Animal Hospital", cat:"vet", lat:35.864564, lng:-83.748094, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Seymour Veterinary Hospital", cat:"vet", lat:35.875298, lng:-83.763793, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boydton": {nombre:"Boydton", centro:[36.667307, -78.3882], tz:"America/New_York", lugares:[
  {n:"Luan Store", cat:"tienda", lat:36.666686, lng:-78.389357, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boynton-beach": {nombre:"Boynton Beach", centro:[26.528914, -80.058141], tz:"America/New_York", lugares:[
  {n:"Chewy Vet Care", cat:"vet", lat:26.546159, lng:-80.087448, dir:"1500 Gateway Boulevard", tel:"+1-561-752-3232", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"INN the Dog House", cat:"refugio", lat:26.548754, lng:-80.088625, dir:"2252 North Congress Avenue", tel:"+1 561-877-4750", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VEG | ER for Pets", cat:"vet", lat:26.548718, lng:-80.08905, dir:"2246 North Congress Avenue", tel:"+1 561-757-7382", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:26.530302, lng:-80.089034, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:26.528988, lng:-80.091614, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:26.529011, lng:-80.091805, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scenthound", cat:"peluqueria", lat:26.538292, lng:-80.090225, dir:null, tel:null, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Best Vet", cat:"vet", lat:26.530693, lng:-80.094054, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "braddock-virginia": {nombre:"Braddock", centro:[38.830277, -77.359392], tz:"America/New_York", lugares:[
  {n:"Healthy Hound Playground", cat:"refugio", lat:38.826323, lng:-77.383007, dir:"12605 Braddock Road", tel:"+1-703-410-1000", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bradenton": {nombre:"Bradenton", centro:[27.498928, -82.574819], tz:"America/New_York", lugares:[
  {n:"Cat Town Adoption Center", cat:"refugio", lat:27.493171, lng:-82.560842, dir:"216 6th Avenue East", tel:"+1-941-742-5824", horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Pawsitively Healthy Pet Supply", cat:"tienda", lat:27.4944, lng:-82.496432, dir:"5222 State Road 64 E", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Guys", cat:"parque", lat:27.470252, lng:-82.425216, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Little Guys", cat:"parque", lat:27.47043, lng:-82.425048, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Lake", cat:"parque", lat:27.470711, lng:-82.424466, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brambleton": {nombre:"Brambleton", centro:[38.984292, -77.536862], tz:"America/New_York", lugares:[
  {n:"Animal Medical Centers of Loudoun", cat:"vet", lat:38.986062, lng:-77.537214, dir:"42385 Ryan Road", tel:"+1 703-327-8471", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Good Dog Rocky", cat:"tienda", lat:38.983392, lng:-77.53736, dir:"22895 Brambleton Plaza", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Creighton West Dog Park", cat:"parque", lat:38.980307, lng:-77.547815, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brandermill": {nombre:"Brandermill", centro:[37.444145, -77.654257], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:37.430965, lng:-77.623191, dir:"12264 Chattanooga Plaza", tel:"+1 804-763-6058", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Bows & Bones", cat:"peluqueria", lat:37.451872, lng:-77.648613, dir:"13570 Waterford Place", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:37.421392, lng:-77.634985, dir:"13001 Hull Street Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brandermill Veterinary Clinic", cat:"vet", lat:37.427647, lng:-77.624007, dir:"12501 Hull Street Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veternary Emergency & Specialty Center", cat:"vet", lat:37.458764, lng:-77.656529, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Swift Creek Animal Hospital", cat:"vet", lat:37.459933, lng:-77.655869, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sloppy Kisses Pet Grooming", cat:"peluqueria", lat:37.422294, lng:-77.636742, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Virginia Veterinary Center", cat:"vet", lat:37.430455, lng:-77.616788, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brandon": {nombre:"Brandon", centro:[27.937801, -82.285925], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:27.935872, lng:-82.300673, dir:"1051 Brandon Boulevard", tel:"+1 813-689-4814", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:27.941445, lng:-82.321708, dir:"2434 West Brandon Boulevard", tel:"+1 813-571-0120", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:27.921036, lng:-82.322154, dir:"11331 Causeway Boulevard", tel:"+1 813-689-3378", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"BluePearl", cat:"vet", lat:27.923554, lng:-82.292211, dir:"West Lumsden Road", tel:null, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Meadowrun Animal Hospital", cat:"vet", lat:27.925605, lng:-82.273076, dir:"804 Lithia Pinecrest Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Saladino Dog Park", cat:"parque", lat:27.916623, lng:-82.276649, dir:"1705 Bryan Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Palms at Palasades Dog Park", cat:"parque", lat:27.945961, lng:-82.285139, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:27.935871, lng:-82.300802, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lakewood Ridge Community Dog Park", cat:"parque", lat:27.945491, lng:-82.306389, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All About Puppies", cat:"tienda", lat:27.938419, lng:-82.319333, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brandon-mississippi": {nombre:"Brandon", centro:[32.273148, -89.986806], tz:"America/Chicago", lugares:[
  {n:"Brandon Animal Hospital", cat:"vet", lat:32.282443, lng:-90.024617, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Flowood Pet Hospital", cat:"vet", lat:32.349635, lng:-90.039756, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brantleyville": {nombre:"Brantleyville", centro:[33.215949, -86.87499], tz:"America/Chicago", lugares:[
  {n:"Benefield's Dog Park", cat:"parque", lat:33.185415, lng:-86.827805, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "braselton": {nombre:"Braselton", centro:[34.109274, -83.762673], tz:"America/New_York", lugares:[
  {n:"Our House", cat:"refugio", lat:34.119605, lng:-83.751359, dir:"11800 Lewis Braselton Boulevard", tel:"+1-770-995-9122", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Chateau Animal Hospital", cat:"vet", lat:34.121019, lng:-83.826262, dir:"2635 Old Winder Highway", tel:null, horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Emergency Care of Braselton", cat:"vet", lat:34.103541, lng:-83.812608, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brent-florida": {nombre:"Brent", centro:[30.468808, -87.236083], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:30.480817, lng:-87.206972, dir:"1670 Airport Boulevard", tel:"+1 850-477-0780", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Pensacola", cat:"vet", lat:30.471781, lng:-87.201465, dir:"5001 North 12th Avenue", tel:"+1-850-479-2900", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Your Dog's Business", cat:"tienda", lat:30.470948, lng:-87.209088, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westside Animal Hospital", cat:"vet", lat:30.419102, lng:-87.317871, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Store", cat:"tienda", lat:30.422359, lng:-87.327449, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brentwood-tennessee": {nombre:"Brentwood", centro:[36.032569, -86.782523], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:36.032365, lng:-86.787447, dir:null, tel:"+1-615-377-5360", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yardstick Dog Hotel", cat:"refugio", lat:36.02524, lng:-86.79069, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Landmark Bark Park", cat:"parque", lat:36.042988, lng:-86.724569, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Knolls Dog Park", cat:"parque", lat:36.0439, lng:-86.716346, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pitts Dog Park", cat:"parque", lat:36.058209, lng:-86.705635, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "briarcliffe-acres": {nombre:"Briarcliffe Acres", centro:[33.786696, -78.744532], tz:"America/New_York", lugares:[
  {n:"Faux Paws", cat:"tienda", lat:33.800578, lng:-78.745106, dir:null, tel:"+1-843-273-5258", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bridgeton-north-carolina": {nombre:"Bridgeton", centro:[35.121549, -77.02078], tz:"America/New_York", lugares:[
  {n:"Chasin Tails Doggie Spa", cat:"peluqueria", lat:35.120908, lng:-77.018833, dir:"505 North D Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kamp K9", cat:"parque", lat:35.135638, lng:-77.029224, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brighton-tennessee": {nombre:"Brighton", centro:[35.483971, -89.725081], tz:"America/Chicago", lugares:[
  {n:"Tipton County Animal Control", cat:"refugio", lat:35.474976, lng:-89.750174, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bristol-tennessee": {nombre:"Bristol", centro:[36.594503, -82.188521], tz:"America/New_York", lugares:[
  {n:"Animal Medical Clinic", cat:"vet", lat:36.595407, lng:-82.20624, dir:"2012 W State Street", tel:"+1 423-764-2428", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bristol-virginia": {nombre:"Bristol", centro:[36.595968, -82.188501], tz:"America/New_York", lugares:[
  {n:"Bristol Animal Clinic", cat:"vet", lat:36.607124, lng:-82.193519, dir:"1008 Commonwealth Ave", tel:"+1-276-466-4113", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.637695, lng:-82.106597, dir:"16760 Highlands Center Boulevard", tel:"+1 276-466-4897", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bristow-virginia": {nombre:"Bristow", centro:[38.731164, -77.548024], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.739434, lng:-77.534517, dir:"9970 Sowder Village Square", tel:"+1 703-396-8631", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogs Gone Wild", cat:"tienda", lat:38.732528, lng:-77.55094, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vet Care", cat:"vet", lat:38.732569, lng:-77.551095, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Valu", cat:"tienda", lat:38.733381, lng:-77.551481, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Anicira Veterinary Center", cat:"vet", lat:38.736862, lng:-77.52335, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Haus Juris", cat:"refugio", lat:38.699492, lng:-77.534818, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "broadlands-virginia": {nombre:"Broadlands", centro:[39.023252, -77.513323], tz:"America/New_York", lugares:[
  {n:"Canine Carousel", cat:"tienda", lat:39.026863, lng:-77.510418, dir:"43135 Broadlands Center Plaza", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stream Valley Vet", cat:"vet", lat:39.015615, lng:-77.519782, dir:"42902 Waxpool Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "broadway": {nombre:"Broadway", centro:[35.457933, -79.053077], tz:"America/New_York", lugares:[
  {n:"Carolina Veterinary Hospital of Sanford, PC", cat:"vet", lat:35.459951, lng:-79.108322, dir:"1521 Broadway Road", tel:"+19192583349", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brook-highland": {nombre:"Brook Highland", centro:[33.435663, -86.673875], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:33.421444, lng:-86.68561, dir:"5269 Highway 280 South", tel:"+1 205-995-1013", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "brookford": {nombre:"Brookford", centro:[35.703188, -81.347864], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:35.704253, lng:-81.294552, dir:"2239 US 70 Southeast", tel:"+1-828-322-4590", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "brookhaven": {nombre:"Brookhaven", centro:[33.858437, -84.340203], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.84109, lng:-84.372692, dir:"3221 Peachtree Road", tel:"+1 404-266-0402", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.858111, lng:-84.382524, dir:"3756 Roswell Road", tel:"+1 404-841-9733", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Lawrence Animal Hospital", cat:"vet", lat:33.834939, lng:-84.339385, dir:"2962 Buford Highway Northeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fetch Park Buckhead", cat:"parque", lat:33.837868, lng:-84.377375, dir:"309 Buckhead Avenue Northeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:33.833428, lng:-84.384269, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brookhaven-mississippi": {nombre:"Brookhaven", centro:[31.579067, -90.440712], tz:"America/Chicago", lugares:[
  {n:"PetSense", cat:"tienda", lat:31.577608, lng:-90.465822, dir:null, tel:null, horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "brookhaven-west-virginia": {nombre:"Brookhaven", centro:[39.611749, -79.904506], tz:"America/New_York", lugares:[
  {n:"Pet Works", cat:"tienda", lat:39.648619, lng:-79.891374, dir:"5011, Mid Atlantic Drive", tel:"+1 3047774999", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "brookneal": {nombre:"Brookneal", centro:[37.050142, -78.94418], tz:"America/New_York", lugares:[
  {n:"Pampered Paws", cat:"peluqueria", lat:37.047996, lng:-78.941973, dir:"102 Main Street", tel:"+1-434-376-7297", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brownsville-tennessee": {nombre:"Brownsville", centro:[35.593967, -89.262291], tz:"America/Chicago", lugares:[
  {n:"Brownsville Haywood County Animal Shelter", cat:"refugio", lat:35.590946, lng:-89.265412, dir:"217 South Russell Avenue", tel:null, horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "brunswick": {nombre:"Brunswick", centro:[31.149953, -81.491489], tz:"America/New_York", lugares:[
  {n:"Bark Park", cat:"parque", lat:31.135534, lng:-81.581013, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dog House Boarding & Grooming", cat:"refugio", lat:31.138316, lng:-81.606843, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bryant-station": {nombre:"Bryant Station", centro:[35.51174, -86.889447], tz:"America/Chicago", lugares:[
  {n:"Sunny Acres Pet Retreat", cat:"refugio", lat:35.576505, lng:-86.873536, dir:"3083 Sowell Mill Pike", tel:"+1-708-843-2069", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bryson-city": {nombre:"Bryson City", centro:[35.430929, -83.447381], tz:"America/New_York", lugares:[
  {n:"Bryson City Veterinary Hospital", cat:"vet", lat:35.42988, lng:-83.45081, dir:"200 Bryson Walk", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "buckhall": {nombre:"Buckhall", centro:[38.732475, -77.431257], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:38.741422, lng:-77.453306, dir:"10055 Wellington Road", tel:"+1 703-330-3743", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Valu", cat:"tienda", lat:38.739717, lng:-77.453845, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "buckhannon": {nombre:"Buckhannon", centro:[38.993943, -80.23227], tz:"America/New_York", lugares:[
  {n:"Pet Paradise", cat:"peluqueria", lat:39.020433, lng:-80.227006, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Virginia Wildlife Center", cat:"zoo", lat:38.85544, lng:-80.309549, dir:null, tel:null, horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "buford": {nombre:"Buford", centro:[34.120656, -84.004351], tz:"America/New_York", lugares:[
  {n:"Animal Hospital of North Gwinnett", cat:"vet", lat:34.109189, lng:-84.001071, dir:"2040 Buford Highway North East", tel:"+1-770-945-9555", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bull-run": {nombre:"Bull Run", centro:[38.783536, -77.518777], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.786737, lng:-77.518818, dir:"10834 Sudley Manor Drive", tel:"+1 703-335-1755", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Battlefield Animal Clinic", cat:"vet", lat:38.778275, lng:-77.508609, dir:"8138 Sudley Road", tel:"+1-703-361-0271", horas:[6.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:38.781482, lng:-77.509879, dir:"8079 Sudley Road", tel:null, horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bunn": {nombre:"Bunn", centro:[35.960662, -78.253642], tz:"America/New_York", lugares:[
  {n:"Bunn Animal Hospital", cat:"vet", lat:35.955219, lng:-78.244063, dir:"76 Crossings Place", tel:"+19194967401", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bunnell": {nombre:"Bunnell", centro:[29.465773, -81.257683], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:29.477588, lng:-81.214881, dir:"5270 Highway 100 East", tel:"+1 386-437-7131", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Happy Life Animal Hospital", cat:"vet", lat:29.472778, lng:-81.251762, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "burgaw": {nombre:"Burgaw", centro:[34.552111, -77.926098], tz:"America/New_York", lugares:[
  {n:"Pender County Animal Shelter", cat:"refugio", lat:34.547626, lng:-77.988186, dir:"3280 New Savannah Road", tel:"+19102591484", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "burgess-virginia": {nombre:"Burgess", centro:[37.883186, -76.347725], tz:"America/New_York", lugares:[
  {n:"The Salty Dog Spaw", cat:"peluqueria", lat:37.884385, lng:-76.350022, dir:"14824 Northumberland Highway", tel:"+1-804-220-2222", horas:[9.0, 15.0], nota:"Dato de OpenStreetMap"}
 ]},
 "burke-virginia": {nombre:"Burke", centro:[38.777132, -77.275469], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:38.776939, lng:-77.263134, dir:"9230 Old Keene Mill Road", tel:"+1 703-455-2007", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Village Veterinary Clinic", cat:"vet", lat:38.795258, lng:-77.271611, dir:"9544 Burke Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Burke Animal Clinic", cat:"vet", lat:38.780476, lng:-77.276549, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Burke Veterinary", cat:"vet", lat:38.777832, lng:-77.265255, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "burlington-kentucky": {nombre:"Burlington", centro:[39.02756, -84.724113], tz:"America/New_York", lugares:[
  {n:"Boone County Dog Park", cat:"parque", lat:39.039983, lng:-84.741539, dir:"5550 Idlewild Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "burnsville-mississippi": {nombre:"Burnsville", centro:[34.840645, -88.314767], tz:"America/Chicago", lugares:[
  {n:"Magnolia way Veterinary services", cat:"vet", lat:34.835587, lng:-88.323899, dir:"604 Highway 365", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "burnsville-north-carolina": {nombre:"Burnsville", centro:[35.917224, -82.299669], tz:"America/New_York", lugares:[
  {n:"Cane River Veterinary Wellness Clinic", cat:"vet", lat:35.914574, lng:-82.310311, dir:"660 West Main Street", tel:"+1-828-682-7710", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Yancey County Humane Society", cat:"refugio", lat:35.915321, lng:-82.375008, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "butler-kentucky": {nombre:"Butler", centro:[38.786457, -84.369659], tz:"America/New_York", lugares:[
  {n:"Pendleton County Animal Shelter", cat:"refugio", lat:38.732531, lng:-84.403794, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "butner": {nombre:"Butner", centro:[36.133425, -78.75791], tz:"America/New_York", lugares:[
  {n:"Bahama Road Veterinary Hospital", cat:"vet", lat:36.152172, lng:-78.904207, dir:"101 Bahama Road", tel:"+1-919-471-4103", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "buxton-north-carolina": {nombre:"Buxton", centro:[35.267678, -75.542375], tz:"America/New_York", lugares:[
  {n:"Coastal Animal Hospital of Hatteras Island", cat:"vet", lat:35.268323, lng:-75.540103, dir:"47959 North Carolina Highway 12", tel:"+12529953960", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "byron-georgia": {nombre:"Byron", centro:[32.653756, -83.759629], tz:"America/New_York", lugares:[
  {n:"Noah's Ark", cat:"tienda", lat:32.743603, lng:-83.713013, dir:"4319 Hartley Bridge Road", tel:"+1 478 788 9787", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "cahaba-heights": {nombre:"Cahaba Heights", centro:[33.463995, -86.731932], tz:"America/Chicago", lugares:[
  {n:"Altadena Valley Animal Clinic", cat:"vet", lat:33.43321, lng:-86.738702, dir:"2898 Acton Road", tel:"+1-205-967-7383", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Britt Animal Hospital", cat:"vet", lat:33.453531, lng:-86.730682, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Liberty Animal Hospital", cat:"vet", lat:33.481947, lng:-86.71108, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "calabash": {nombre:"Calabash", centro:[33.890728, -78.568345], tz:"America/New_York", lugares:[
  {n:"The Pet Stop", cat:"tienda", lat:33.899056, lng:-78.553414, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "calera": {nombre:"Calera", centro:[33.102971, -86.751028], tz:"America/Chicago", lugares:[
  {n:"Easterwood Equine Hospital", cat:"vet", lat:33.106412, lng:-86.733681, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Airport Veterinary Hospital", cat:"vet", lat:33.1659, lng:-86.775708, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "calhoun": {nombre:"Calhoun", centro:[34.502587, -84.951054], tz:"America/New_York", lugares:[
  {n:"Pets 'R' Us", cat:"tienda", lat:34.485003, lng:-84.942174, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Animal Care Veterinary Hospital", cat:"vet", lat:34.481291, lng:-84.944997, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "camden-south-carolina": {nombre:"Camden", centro:[34.246489, -80.607039], tz:"America/New_York", lugares:[
  {n:"Kershaw County Humane Society", cat:"refugio", lat:34.226869, lng:-80.591051, dir:"123 Black River Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "camden-tennessee": {nombre:"Camden", centro:[36.058949, -88.097815], tz:"America/Chicago", lugares:[
  {n:"Benton County Animal Shelter", cat:"refugio", lat:36.026606, lng:-88.122614, dir:"915 Divider and Natchez Trace Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cameron-north-carolina": {nombre:"Cameron", centro:[35.326823, -79.255303], tz:"America/New_York", lugares:[
  {n:"Aloha Safari Park", cat:"zoo", lat:35.316933, lng:-79.110431, dir:"159 Mini Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "campbell-florida": {nombre:"Campbell", centro:[28.258901, -81.456461], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:28.317659, lng:-81.470397, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "campobello": {nombre:"Campobello", centro:[35.115873, -82.149935], tz:"America/New_York", lugares:[
  {n:"Flip My Fur Pet Spa", cat:"peluqueria", lat:35.119307, lng:-82.152772, dir:"27 Pine Street", tel:"+1-864-468-4443", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "candler": {nombre:"Candler", centro:[35.544436, -82.683803], tz:"America/New_York", lugares:[
  {n:"Candler Veterinary Clinic, PA", cat:"vet", lat:35.546644, lng:-82.657635, dir:"911 Smokey Park Highway", tel:"+18286670247", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Buncombe County Dog Park", cat:"parque", lat:35.553633, lng:-82.637625, dir:"58 Apac Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "canton-georgia": {nombre:"Canton", centro:[34.236762, -84.490762], tz:"America/New_York", lugares:[
  {n:"Pet Play Place", cat:"refugio", lat:34.224162, lng:-84.502985, dir:"1750 Marietta Highway", tel:"+1 770-213-3829", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.236638, lng:-84.458912, dir:"1810 Cumming Highway", tel:"+1 770-704-7400", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:34.23935, lng:-84.455668, dir:"2243 Cumming Highway", tel:null, horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Mountain View Animal Hospital", cat:"vet", lat:34.238337, lng:-84.454669, dir:"2241 Cumming Highway", tel:null, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "cape-charles": {nombre:"Cape Charles", centro:[37.267167, -76.017699], tz:"America/New_York", lugares:[
  {n:"Dog Beach", cat:"parque", lat:37.292386, lng:-76.013036, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cape-coral": {nombre:"Cape Coral", centro:[26.562574, -81.94388], tz:"America/New_York", lugares:[
  {n:"Kindness Animal Hospital", cat:"vet", lat:26.563111, lng:-81.989494, dir:"715 Cape Coral Parkway West", tel:"+1 239-542-7387", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetWellClinic Fort Myers", cat:"vet", lat:26.51752, lng:-81.942519, dir:"11600 Gladiolus Drive", tel:"+1-239-215-2296", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:26.54154, lng:-81.8696, dir:"13741 South Tamiami Trail", tel:"+1 239-466-3737", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"The Groomers", cat:"peluqueria", lat:26.563918, lng:-81.945373, dir:null, tel:"+1-239-540-0351", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Days Delight", cat:"peluqueria", lat:26.561393, lng:-81.948022, dir:null, tel:"+1-239-471-0414", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Touch of Class Pet Grooming, Inc", cat:"peluqueria", lat:26.563002, lng:-81.949567, dir:null, tel:"+1-239-549-2211", horas:[9.0, 14.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Baywood Animal Hospital & Pet Resort", cat:"tienda", lat:26.56428, lng:-81.949788, dir:null, tel:"+1-239-549-2949", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Viscaya-Prado Veterinary Hospital", cat:"vet", lat:26.61436, lng:-81.940488, dir:"2015 Del Prado Boulevard South", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Downtowner Car Wash", cat:"peluqueria", lat:26.562922, lng:-81.941553, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Upscale Tail Pet Salon", cat:"peluqueria", lat:26.561868, lng:-81.947695, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barkley Park", cat:"parque", lat:26.610767, lng:-82.027692, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Paws Park", cat:"parque", lat:26.624736, lng:-82.031247, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carl": {nombre:"Carl", centro:[34.003617, -83.811015], tz:"America/New_York", lugares:[
  {n:"Premium Crickets", cat:"tienda", lat:33.989383, lng:-83.77217, dir:"749 West Winder Ind Parkway", tel:"+1-234-738-3663", horas:[9.0, 16.5], nota:"Dato de OpenStreetMap"}
 ]},
 "carlisle-kentucky": {nombre:"Carlisle", centro:[38.31202, -84.027427], tz:"America/New_York", lugares:[
  {n:"Wendt's Wildlife Adventure", cat:"zoo", lat:38.331916, lng:-84.065695, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carolina-bay": {nombre:"Carolina Bay", centro:[32.805501, -80.077536], tz:"America/New_York", lugares:[
  {n:"Dog Daze", cat:"refugio", lat:32.794173, lng:-80.025316, dir:"820 Dupont Road", tel:"+1 843-571-4433", horas:[7.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Charleston Pet Resort", cat:"refugio", lat:32.794522, lng:-80.019972, dir:"1839 Belgrade Avenue", tel:"+1-843-763-0985", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sit Means Sit Dog Training - Charleston", cat:"tienda", lat:32.795364, lng:-80.015608, dir:"1727 Pineview Rd", tel:"+1-843-484-7171", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lowcountry Pet Salon", cat:"peluqueria", lat:32.788943, lng:-80.02363, dir:"1918 Savannah Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carolina Bay Dog Park", cat:"parque", lat:32.80647, lng:-80.080365, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bluewater Appartments Dog Park", cat:"parque", lat:32.802752, lng:-80.098035, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bolton's Landing Appartments Dog Park", cat:"parque", lat:32.814397, lng:-80.096648, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grand Oaks Animal Hospital", cat:"vet", lat:32.825036, lng:-80.085215, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grand Oaks Dog Park", cat:"parque", lat:32.831317, lng:-80.087302, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Dog Park", cat:"parque", lat:32.833632, lng:-80.093751, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:32.833728, lng:-80.094009, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Re-Tail", cat:"tienda", lat:32.788571, lng:-80.025162, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Angel Oak Animal Hospital", cat:"vet", lat:32.733677, lng:-80.057831, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bohicket Veterinary Clinic", cat:"vet", lat:32.725325, lng:-80.073568, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carolina-forest": {nombre:"Carolina Forest", centro:[33.760298, -78.960391], tz:"America/New_York", lugares:[
  {n:"Carolina Forest Veterinary Hospital", cat:"vet", lat:33.763677, lng:-78.962694, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Palmetto Animal Hospital", cat:"vet", lat:33.760971, lng:-78.969054, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carolina-meadows": {nombre:"Carolina Meadows", centro:[35.859728, -79.022267], tz:"America/New_York", lugares:[
  {n:"Dogwood Veterinary Hospital and Pet Resort", cat:"vet", lat:35.820402, lng:-79.084036, dir:"51 Vickers Road", tel:"+1 919 942 6330", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.904042, lng:-78.953812, dir:"8200 Renaissance Parkway", tel:"+1 919-572-9638", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Specialty Hospital of the Carolinas", cat:"vet", lat:35.917749, lng:-78.960216, dir:"7015 NC Highway 751", tel:"+1-919-600-6600", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Unleashed, the Dog & Cat Store", cat:"tienda", lat:35.904986, lng:-78.940507, dir:"6910 Fayetteville Road", tel:"+1-919-491-5288", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Hair of the Dog Grooming Studio", cat:"peluqueria", lat:35.844142, lng:-79.089377, dir:"11312 US 15-501 North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"U Dirty Dog", cat:"peluqueria", lat:35.909458, lng:-78.938998, dir:null, tel:"+1-919-237-2444", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "carrboro": {nombre:"Carrboro", centro:[35.909987, -79.075288], tz:"America/New_York", lugares:[
  {n:"The Animal Hospital", cat:"vet", lat:35.910306, lng:-79.073989, dir:"112 West Main Street", tel:"+1-919-967-9261", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Love Overboard", cat:"refugio", lat:35.911267, lng:-79.067138, dir:"710 West Rosemary Street", tel:"+1 919 942 6870", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carrboro Plaza Veterinary Clinic", cat:"vet", lat:35.916544, lng:-79.096485, dir:null, tel:"+1 919 929 0031", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "carrollton": {nombre:"Carrollton", centro:[33.261787, -88.095026], tz:"America/Chicago", lugares:[
  {n:"West Alabama Animal Hospital", cat:"vet", lat:33.280184, lng:-88.089273, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carrollton-georgia": {nombre:"Carrollton", centro:[33.58011, -85.076611], tz:"America/New_York", lugares:[
  {n:"Longview Dog Park", cat:"parque", lat:33.571563, lng:-85.08852, dir:null, tel:null, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:33.556326, lng:-85.076289, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Georgia Exotic Pets & Supplies", cat:"tienda", lat:33.599887, lng:-85.102047, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carroll County Animal Hospital", cat:"vet", lat:33.60498, lng:-85.103374, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carroll County Animal Shelter", cat:"refugio", lat:33.618316, lng:-85.106165, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carrollton-virginia": {nombre:"Carrollton", centro:[36.952315, -76.531752], tz:"America/New_York", lugares:[
  {n:"North Suffolk Animal Hospital", cat:"vet", lat:36.865148, lng:-76.491972, dir:"5622 Bennetts Pasture Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bennetts Creek's Home Away From Home", cat:"refugio", lat:36.861311, lng:-76.470943, dir:"3509 Bridge Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bennetts Creek Veterinary Care", cat:"vet", lat:36.861235, lng:-76.470555, dir:"3511 Bridge Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Paradise", cat:"peluqueria", lat:36.953415, lng:-76.53263, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of Eagle Harbor", cat:"vet", lat:36.950354, lng:-76.531817, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carrollwood": {nombre:"Carrollwood", centro:[28.05115, -82.500809], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:28.052118, lng:-82.503105, dir:"11409 North Dale Mabry Highway Tampa FLORIDA 33618 US", tel:"+1-813-264-0473", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:28.066103, lng:-82.506139, dir:"13112 Dale Mabry Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carrollwood Village Park Dog Parks", cat:"parque", lat:28.070197, lng:-82.523067, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cartersville": {nombre:"Cartersville", centro:[34.16523, -84.799761], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.168585, lng:-84.786555, dir:"51 North Morningside Drive", tel:"+1 678-719-3021", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Westside Animal Hospital", cat:"vet", lat:34.149371, lng:-84.82469, dir:"201 Douthit Ferry Road", tel:"+1-770-607-3055", horas:[7.5, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Etowah Valley Humane Society", cat:"refugio", lat:34.152409, lng:-84.830333, dir:"36 Ladds Mountain Road", tel:"+1-770-383-3338", horas:[11.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Cartersville Animal Hospital", cat:"vet", lat:34.196562, lng:-84.795952, dir:"109 East Felton Road", tel:"+1-770-382-8570", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Pet Vet Clinic", cat:"vet", lat:34.16426, lng:-84.828783, dir:null, tel:"+1-770-386-5066", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bartow Animal Hospital", cat:"vet", lat:34.16386, lng:-84.787909, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:34.195122, lng:-84.791283, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cartersville-virginia": {nombre:"Cartersville", centro:[37.667368, -78.088333], tz:"America/New_York", lugares:[
  {n:"grandview dog pens", cat:"zoo", lat:37.68911, lng:-78.030476, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carthage-north-carolina": {nombre:"Carthage", centro:[35.345802, -79.417054], tz:"America/New_York", lugares:[
  {n:"Carthage Animal Hospital", cat:"vet", lat:35.298606, lng:-79.423637, dir:"5600 US 15, US 501", tel:"+19109475278", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carthage-tennessee": {nombre:"Carthage", centro:[36.252277, -85.951654], tz:"America/Chicago", lugares:[
  {n:"Smith County Animal Clinic", cat:"vet", lat:36.260518, lng:-85.950186, dir:"104 Ervin Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cary-north-carolina": {nombre:"Cary", centro:[35.787362, -78.781162], tz:"America/New_York", lugares:[
  {n:"Pupsi Inc.", cat:"refugio", lat:35.792342, lng:-78.775413, dir:"8260 Chapel Hill Road", tel:"+1 919-460-9909", horas:[7.5, 9.5], nota:"Dato de OpenStreetMap"},
  {n:"Walnut Street Animal Hospital", cat:"vet", lat:35.774871, lng:-78.766187, dir:"702 Cary Towne Boulevard", tel:"+1-919-948-6838", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:35.804964, lng:-78.780576, dir:"268 Grande Heights Drive", tel:"+1-919-481-1818", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Camp Canine, Inc.", cat:"refugio", lat:35.7954, lng:-78.807338, dir:"333 James Jackson Avenue", tel:"+1 919 468 8301", horas:[8.0, 11.5], nota:"Dato de OpenStreetMap"},
  {n:"Maynard Animal Hospital", cat:"vet", lat:35.784638, lng:-78.812581, dir:"1239 Northwest Maynard Road", tel:"+1-919-646-4100", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Serene Mobile Vertinary Care", cat:"vet", lat:35.769081, lng:-78.824636, dir:"110 Noritake Drive", tel:"+1-336-736-4121", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Feeders Pet Supply", cat:"tienda", lat:35.745495, lng:-78.762462, dir:"6464 Tryon Road", tel:"+19199777103", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.759235, lng:-78.736847, dir:"416 Crossroads Boulevard", tel:"+1 919-852-2259", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Second Chance Pet Adoptions", cat:"tienda", lat:35.78862, lng:-78.724687, dir:"6003 Chapel Hill Road", tel:"+19198518404", horas:[11.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Care First Animal Hospital at Tryon", cat:"vet", lat:35.744671, lng:-78.760298, dir:"6400 Tryon Road", tel:"+1 919 851 7475", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.752456, lng:-78.743277, dir:"2430 Walnut Street", tel:"+1 919-858-5442", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Specialty Hospital of the Carolinas", cat:"vet", lat:35.743851, lng:-78.759508, dir:"6405 Tryon Road", tel:"+1-919-233-4911", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"PetSound Animal Hospital", cat:"vet", lat:35.738441, lng:-78.785538, dir:"305 Ashville Avenue, Suite C", tel:"+1 919 851 4114", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PostalAnnex", cat:"tienda", lat:35.746806, lng:-78.743909, dir:"1105 Tryon Village Drive", tel:"+1-984-200-5797", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VEG", cat:"vet", lat:35.736667, lng:-78.779999, dir:"2030 Kildaire Farm Road", tel:"+1-984-345-3033", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Unleashed, the Dog & Cat Store", cat:"tienda", lat:35.735651, lng:-78.781298, dir:"2066 Kildaire Farm Road", tel:"+1-919-977-1329", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Dermatology and Allergy Clinic", cat:"vet", lat:35.783995, lng:-78.802428, dir:null, tel:"+1 919 403 9478", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Surgical Referral Practice", cat:"vet", lat:35.783992, lng:-78.802343, dir:null, tel:"+1 919 380 9494", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Animal Emergency Clinic of Cary", cat:"vet", lat:35.783996, lng:-78.802526, dir:null, tel:"+1 919 462 8989", horas:[0.0, 8.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:35.798647, lng:-78.811962, dir:null, tel:"+1 919 651 9581", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Barkyard: Smalls", cat:"parque", lat:35.784689, lng:-78.778783, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barkyard: Biggies", cat:"parque", lat:35.784291, lng:-78.778837, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chatham Animal Hospital", cat:"vet", lat:35.769943, lng:-78.808232, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kildaire Animal Medical Center", cat:"vet", lat:35.757065, lng:-78.782356, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cascades": {nombre:"Cascades", centro:[39.034165, -77.39774], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.027488, lng:-77.400934, dir:"46220 Potomac Run Plaza", tel:"+1 703-444-6500", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Cascades Pet Hospital", cat:"vet", lat:39.023422, lng:-77.395359, dir:"21435 Epicerie Plaza", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:39.027526, lng:-77.400658, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "casselberry": {nombre:"Casselberry", centro:[28.67147, -81.3382], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:28.67066, lng:-81.340508, dir:"4510 South Highway 17-92", tel:"+1 407-331-8991", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"CityVet", cat:"vet", lat:28.658909, lng:-81.336952, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "castle-hayne": {nombre:"Castle Hayne", centro:[34.355724, -77.899986], tz:"America/New_York", lugares:[
  {n:"Skywatch Bird Rescue", cat:"refugio", lat:34.356958, lng:-77.909748, dir:"3600 Lynn Avenue", tel:"+1-855-407-3728", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "catlett": {nombre:"Catlett", centro:[38.653731, -77.640546], tz:"America/New_York", lugares:[
  {n:"Homestead Horse Farm", cat:"refugio", lat:38.689208, lng:-77.644055, dir:"8382 Burwell Road", tel:"+1-703-801-5820", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Catlett Animal Hospital", cat:"vet", lat:38.654025, lng:-77.64061, dir:"3226 Old Catlett Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cave-spring-virginia": {nombre:"Cave Spring", centro:[37.230132, -80.008503], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:37.224221, lng:-79.966142, dir:"4210 Franklin Road Southwest", tel:"+1 540-283-5301", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Alien Aquatics", cat:"tienda", lat:37.227766, lng:-79.969917, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cedar-key": {nombre:"Cedar Key", centro:[29.137721, -83.035964], tz:"America/New_York", lugares:[
  {n:"Tails of Cedar Key", cat:"tienda", lat:29.137284, lng:-83.030968, dir:"357 2nd Street", tel:"+1-561-301-1864", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cedar-point-north-carolina": {nombre:"Cedar Point", centro:[34.68763, -77.073075], tz:"America/New_York", lugares:[
  {n:"Coastal Canines", cat:"peluqueria", lat:34.682444, lng:-77.084361, dir:"1042 Cedar Point Boulevard", tel:"+1-910-650-5778", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cedartown": {nombre:"Cedartown", centro:[34.012442, -85.25594], tz:"America/New_York", lugares:[
  {n:"Polk Veternary", cat:"vet", lat:34.025084, lng:-85.250537, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "celebration": {nombre:"Celebration", centro:[28.319057, -81.54087], tz:"America/New_York", lugares:[
  {n:"Woof Gang Bakery", cat:"tienda", lat:28.3181, lng:-81.539982, dir:"671 Front Street", tel:"+1-321-939-2253", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Celebration Dog Park", cat:"parque", lat:28.325781, lng:-81.544868, dir:null, tel:"+1 407-566-1200", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Hound", cat:"tienda", lat:28.372494, lng:-81.515001, dir:"1768 East Buena Vista Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Service Animal Relief Area", cat:"parque", lat:28.373557, lng:-81.548249, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "centerville": {nombre:"Centerville", centro:[32.630145, -83.689628], tz:"America/New_York", lugares:[
  {n:"Noah's Bark Pet Resort", cat:"refugio", lat:32.642969, lng:-83.70759, dir:"196 Giles Road", tel:"+1-478-953-6624", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "centreville": {nombre:"Centreville", centro:[32.944568, -87.138607], tz:"America/Chicago", lugares:[
  {n:"Veterinary Hospital Of Centreville", cat:"vet", lat:32.942044, lng:-87.112416, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cahaba Critters Animal Farm", cat:"zoo", lat:33.002656, lng:-87.024062, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "centreville-virginia": {nombre:"Centreville", centro:[38.838765, -77.431591], tz:"America/New_York", lugares:[
  {n:"The Dog Stop", cat:"refugio", lat:38.837173, lng:-77.43356, dir:"6001 Centreville Crest Lane", tel:"+1-703-719-8670", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"tienda", lat:38.834446, lng:-77.412927, dir:"5750 Union Mill Road", tel:"+1 571-655-2275", horas:[9.5, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Paws & Spa Grooming", cat:"peluqueria", lat:38.836576, lng:-77.43581, dir:"14011 Saint Germain Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Centreville Square Animal Hospital", cat:"vet", lat:38.83729, lng:-77.437039, dir:null, tel:"+1-703-222-9682", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:38.834074, lng:-77.414328, dir:"5734 Union Mill Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Centreville Aquarium", cat:"tienda", lat:38.839672, lng:-77.42622, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yeppi Pet Grooming", cat:"peluqueria", lat:38.838125, lng:-77.437652, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Centreville Animal Hospital", cat:"vet", lat:38.838044, lng:-77.420313, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:38.853308, lng:-77.449977, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ceredo": {nombre:"Ceredo", centro:[38.396482, -82.558698], tz:"America/New_York", lugares:[
  {n:"Austin's Pet Supplies", cat:"tienda", lat:38.396254, lng:-82.558678, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ceredo-Kenova Animal Clinic", cat:"vet", lat:38.396674, lng:-82.558034, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal ER", cat:"vet", lat:38.396906, lng:-82.560511, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cerro-gordo-north-carolina": {nombre:"Cerro Gordo", centro:[34.322112, -78.926416], tz:"America/New_York", lugares:[
  {n:"Columbus Veterinary Clinic", cat:"vet", lat:34.328168, lng:-78.927808, dir:"7495 Andrew Jackson Highway Southwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chamberlayne": {nombre:"Chamberlayne", centro:[37.626535, -77.428601], tz:"America/New_York", lugares:[
  {n:"Azalea Aquariums", cat:"tienda", lat:37.601957, lng:-77.424663, dir:"5112 Richmond Henrico Turnpike", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northside Dog Park", cat:"parque", lat:37.598221, lng:-77.441096, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chamblee": {nombre:"Chamblee", centro:[33.892176, -84.29883], tz:"America/New_York", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:33.892455, lng:-84.325267, dir:"2152 Johnson Ferry Road Northeast", tel:"+1-404-885-8655", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Briarlake Animal Hospital", cat:"vet", lat:33.86282, lng:-84.288544, dir:"2566 Shallowford Road Northeast", tel:"+1 404-963-9901", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:33.884365, lng:-84.314985, dir:"5001 Peachtree Boulevard", tel:null, horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"}
 ]},
 "chantilly": {nombre:"Chantilly", centro:[38.894154, -77.431151], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.893861, lng:-77.422997, dir:"13866 Metrotech Drive", tel:"+1 703-378-1295", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Chantilly Animal Hospital", cat:"vet", lat:38.890283, lng:-77.422392, dir:"13705 Lee Jackson Memorial Highway", tel:"+1-703-802-8387", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Weber's Pet Supermarket", cat:"tienda", lat:38.900069, lng:-77.447508, dir:"14508 Route 50", tel:"+1 703-631-2738", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"XO Pups", cat:"tienda", lat:38.897492, lng:-77.442907, dir:"14398 Chantilly Crossing Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pretty Paws Dog Grooming", cat:"peluqueria", lat:38.900335, lng:-77.449267, dir:"14511 Route 50", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sully Animal Hospital", cat:"vet", lat:38.867513, lng:-77.447082, dir:"5095 Westfields Boulevard", tel:null, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"My Next Puppy", cat:"tienda", lat:38.895403, lng:-77.428686, dir:null, tel:null, horas:[12.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Featherle Grooming", cat:"peluqueria", lat:38.89424, lng:-77.424994, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pender Veterinary Centre", cat:"vet", lat:38.891137, lng:-77.466016, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rock Hill District Dog Park", cat:"parque", lat:38.877904, lng:-77.473945, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chapel-hill": {nombre:"Chapel Hill", centro:[35.913154, -79.05578], tz:"America/New_York", lugares:[
  {n:"Phydeaux", cat:"tienda", lat:35.931492, lng:-79.026091, dir:"400 South Elliott Road", tel:"+1-919-960-3606", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.935885, lng:-79.026238, dir:"1800 East Franklin Street", tel:"+1 919-929-8891", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"K9 Perfection Grooming Salon", cat:"peluqueria", lat:35.962362, lng:-79.052901, dir:"1129 Weaver Dairy Road", tel:"+1-984-234-3328", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:35.96302, lng:-79.056005, dir:"110 Banks Drive", tel:"+1-919-968-3047", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.949436, lng:-78.987889, dir:"3615 Witherspoon Boulevard", tel:"+1 919-403-6902", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Noah's Ark Kennel and Cattery", cat:"refugio", lat:35.926484, lng:-79.036594, dir:"1217 East Franklin Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:35.967693, lng:-79.058454, dir:"1806 Martin Luther King Junior Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Orange County Animal Services", cat:"refugio", lat:35.968749, lng:-79.07587, dir:"1601 Eubanks Road", tel:null, horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Cat Hospital of Durham and Chapel Hill", cat:"vet", lat:35.954124, lng:-78.993784, dir:"5319 New Hope Commons Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Green Beagle Lodge", cat:"peluqueria", lat:35.980349, lng:-79.079283, dir:"6805 Millhouse Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Falconbridge Animal Hospital", cat:"vet", lat:35.918015, lng:-78.962715, dir:"1401 NC Highway 54", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oliver's Collar", cat:"tienda", lat:35.920659, lng:-78.956593, dir:"4711 Hope Valley Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carraway Village Bark Park", cat:"parque", lat:35.970003, lng:-79.066796, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chapin-south-carolina": {nombre:"Chapin", centro:[34.165979, -81.349821], tz:"America/New_York", lugares:[
  {n:"Chapin Veterinary Care Center", cat:"vet", lat:34.15304, lng:-81.336289, dir:"110 Snapdragon Ct", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang", cat:"tienda", lat:34.165957, lng:-81.351643, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chapin Veterinary Hospital", cat:"vet", lat:34.169964, lng:-81.331739, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dutch Fork Animal Hospital", cat:"vet", lat:34.133838, lng:-81.252517, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "charleston-south-carolina": {nombre:"Charleston", centro:[32.788436, -79.939931], tz:"America/New_York", lugares:[
  {n:"The Dog Wash", cat:"peluqueria", lat:32.789271, lng:-79.939518, dir:"138 St. Philip Street", tel:"+1-843-696-1651", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"tienda", lat:32.784623, lng:-79.935651, dir:"341 King Street", tel:"+1-843-952-7400", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Hampton Dog Park", cat:"parque", lat:32.802595, lng:-79.954927, dir:"129 Grove Street", tel:"+1-843-724-7327", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.780834, lng:-79.989262, dir:"975 Savannah Highway", tel:"+1 843-852-4129", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"All Creatures Veterinary Clinic", cat:"vet", lat:32.784305, lng:-79.942177, dir:"224 Calhoun Street", tel:null, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Mobile Veterinary Surgery LLC", cat:"vet", lat:32.777342, lng:-79.936609, dir:"145 Queen Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Adgers Wharf Dog Park", cat:"parque", lat:32.775095, lng:-79.926267, dir:"41 South Adgers Wharf", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:32.782706, lng:-79.988428, dir:"850 Savannah Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"GoodVets", cat:"vet", lat:32.783735, lng:-79.996402, dir:"1129 Savannah Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Charleston Harbor Veterinarians", cat:"vet", lat:32.792978, lng:-79.948388, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Playful Pack Dog Daycare & Boarding", cat:"refugio", lat:32.822898, lng:-79.952039, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Ashley Veterinary Clinic", cat:"vet", lat:32.791686, lng:-79.987405, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ackerman Dog Park", cat:"parque", lat:32.789481, lng:-79.989941, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Forest", cat:"zoo", lat:32.810019, lng:-79.984936, dir:null, tel:null, horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "charleston-tennessee-2": {nombre:"Charleston", centro:[35.285841, -84.757502], tz:"America/New_York", lugares:[
  {n:"Reef Chasers", cat:"tienda", lat:35.258304, lng:-84.788354, dir:"7665 North Lee Highway", tel:"+1-423-665-3447", horas:[14.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "charleston-west-virginia": {nombre:"Charleston", centro:[38.3506, -81.633281], tz:"America/New_York", lugares:[
  {n:"Kanawha Charleston Humane Association", cat:"refugio", lat:38.358443, lng:-81.591385, dir:"1248 Greenbrier Street", tel:"+1304-342-1576", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"North Gateway Animal Hospital", cat:"vet", lat:38.36708, lng:-81.580657, dir:"1510 Greenbrier Street", tel:"+13047211783", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Phillps Animal Hospital", cat:"vet", lat:38.354497, lng:-81.641992, dir:"100 Virginia Street East", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ruth Rafferty Peyton Dog Park", cat:"parque", lat:38.340962, lng:-81.617073, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kanawha Boulevard Animal Hospital", cat:"vet", lat:38.334142, lng:-81.595396, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Willa Nester Pet Center", cat:"refugio", lat:38.358857, lng:-81.590864, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "charlotte-court-house": {nombre:"Charlotte Court House", centro:[37.056536, -78.638334], tz:"America/New_York", lugares:[
  {n:"Corban Veterniary Services", cat:"vet", lat:37.052942, lng:-78.635588, dir:"315 Legrande Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "charlotte-harbor": {nombre:"Charlotte Harbor", centro:[26.959161, -82.067925], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:26.966576, lng:-82.080008, dir:"4265 Tamiami Trail", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "charlotte-north-carolina": {nombre:"Charlotte", centro:[35.227209, -80.843083], tz:"America/New_York", lugares:[
  {n:"Molly's Dog Care", cat:"refugio", lat:35.222105, lng:-80.855748, dir:"1115 South Mint Street", tel:"+1-704-595-3772", horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.214707, lng:-80.835094, dir:"900 Metropolitan Avenue", tel:"+1 704-916-4047", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Commonwealth Animal Hospital", cat:"vet", lat:35.21906, lng:-80.812826, dir:"1909 Commonwealth Avenue", tel:"+1 704 370 0767", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Bubbly Paws", cat:"peluqueria", lat:35.199421, lng:-80.868533, dir:"141 New Bern Street", tel:"+19802632999", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Parker Veterinary Hospital", cat:"vet", lat:35.2245, lng:-80.888354, dir:"2820 Wilkinson Boulevard", tel:"+1-704-399-8304", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nicks Veterinary Hospital", cat:"vet", lat:35.200217, lng:-80.874285, dir:"3100 South Tryon Street", tel:"+1-704-523-8015", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Cold Blooded and Bizarre", cat:"tienda", lat:35.217256, lng:-80.794054, dir:"3000 Central Avenue", tel:"+1-704-312-0320", horas:[11.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.176528, lng:-80.801671, dir:"206 South Sharon Amity Road", tel:"+1 704-366-3807", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.162691, lng:-80.875201, dir:"5401 South Boulevard", tel:"+1 704-523-0132", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.29599, lng:-80.763479, dir:"8150 Ikea Boulevard", tel:"+1 704-208-5264", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"9th Street Dog Park", cat:"parque", lat:35.233984, lng:-80.84134, dir:"417 West 9th Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"QC Canine Design", cat:"peluqueria", lat:35.235065, lng:-80.84056, dir:null, tel:"+1 704 451 5030", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Run", cat:"parque", lat:35.22211, lng:-80.857585, dir:"1200 South Mint Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Queen City Animal Hospital", cat:"vet", lat:35.227945, lng:-80.821511, dir:"920 Belmont Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Owner's Academy", cat:"refugio", lat:35.221604, lng:-80.818833, dir:null, tel:"+1-844-864-3647", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"NoDa Bark & Board", cat:"refugio", lat:35.238223, lng:-80.817839, dir:"2001 North Davidson Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:35.220916, lng:-80.81369, dir:"1311 Pecan Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lucky Dog Bark and Brew", cat:"parque", lat:35.233845, lng:-80.872574, dir:"2220 Thrift Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Skiptown", cat:"parque", lat:35.209209, lng:-80.864367, dir:"222 Rampart Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lucky Dog Bark - Charlotte", cat:"refugio", lat:35.234376, lng:-80.873035, dir:"2220 Thrift Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"GoodVets", cat:"vet", lat:35.220571, lng:-80.809824, dir:"1713 Central Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Partners Animal Hospital", cat:"vet", lat:35.242022, lng:-80.811335, dir:"2514 North Davidson Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Humane Society of Charlotte", cat:"refugio", lat:35.221071, lng:-80.87932, dir:"1348 Parker Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Long Animal Hospital", cat:"vet", lat:35.202404, lng:-80.864705, dir:"2523 South Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"GoodVets", cat:"vet", lat:35.194257, lng:-80.825529, dir:"1057 Providence Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Monroe Road Animal Hospital", cat:"vet", lat:35.199161, lng:-80.795744, dir:"3736 Monroe Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dogs Club CLT", cat:"peluqueria", lat:35.252322, lng:-80.792757, dir:"4090 Raleigh Street", tel:null, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Social Pet Charlotte", cat:"refugio", lat:35.198225, lng:-80.794853, dir:"3814 Monroe Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Hospital", cat:"vet", lat:35.197705, lng:-80.794278, dir:"3832 Monroe Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSuites", cat:"refugio", lat:35.197383, lng:-80.791467, dir:"1415 North Wendover Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Barker Lounge", cat:"refugio", lat:35.193984, lng:-80.787067, dir:"4336 Monroe Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Paradise", cat:"refugio", lat:35.229823, lng:-80.921793, dir:"2919 Boyer Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Uptown Veterinary Hospital", cat:"vet", lat:35.232283, lng:-80.838015, dir:null, tel:null, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"CityVet", cat:"vet", lat:35.218674, lng:-80.843531, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Wants", cat:"tienda", lat:35.233934, lng:-80.827474, dir:null, tel:null, horas:[10.5, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Livewell Animal Urgent Care", cat:"vet", lat:35.212796, lng:-80.857001, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Wants", cat:"tienda", lat:35.213511, lng:-80.858233, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Feline Fabulous", cat:"peluqueria", lat:35.221827, lng:-80.81961, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Preppy Pet", cat:"refugio", lat:35.212156, lng:-80.861278, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:35.212348, lng:-80.817284, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K9 Playland", cat:"refugio", lat:35.209551, lng:-80.866326, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:35.198617, lng:-80.852316, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal People", cat:"refugio", lat:35.252148, lng:-80.870675, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"CARE: Charlotte Animal Referral and Emergency", cat:"vet", lat:35.194486, lng:-80.797479, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogs All Day", cat:"refugio", lat:35.182483, lng:-80.879444, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "charlotte-park": {nombre:"Charlotte Park", centro:[26.910062, -82.053978], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:26.890027, lng:-82.025663, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "charlottesville-virginia": {nombre:"Charlottesville", centro:[38.029306, -78.476678], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.010902, lng:-78.498216, dir:"425 Merchant Walk Square", tel:"+1 434-422-4526", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Monticello Animal Hospital", cat:"vet", lat:38.011034, lng:-78.505892, dir:"1187+ 5th Street Southwest", tel:"+1-434-979-3644", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Connection", cat:"tienda", lat:38.024546, lng:-78.483133, dir:"933 2nd Street Southeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pampered Pets", cat:"tienda", lat:38.038157, lng:-78.482767, dir:"601 Concord Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Old Dominion Animal Hospital", cat:"vet", lat:38.037151, lng:-78.488103, dir:"811 Preston Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawprints", cat:"tienda", lat:38.030657, lng:-78.480322, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pet Motel and Salon", cat:"refugio", lat:38.010973, lng:-78.505766, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chatham-virginia": {nombre:"Chatham", centro:[36.826303, -79.398459], tz:"America/New_York", lugares:[
  {n:"Pittsylvania Pet Center", cat:"refugio", lat:36.765744, lng:-79.389003, dir:"11880 US 29", tel:"+1 434 432 1989", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chatham Animal Clinic", cat:"vet", lat:36.825581, lng:-79.396267, dir:"34 Pruden Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chatmoss": {nombre:"Chatmoss", centro:[36.681141, -79.810233], tz:"America/New_York", lugares:[
  {n:"Paw Park", cat:"parque", lat:36.635423, lng:-79.827133, dir:"1000 Irisburg Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chattahoochee-hills": {nombre:"Chattahoochee Hills", centro:[33.579087, -84.768673], tz:"America/New_York", lugares:[
  {n:"Amy's Pet Grooming", cat:"peluqueria", lat:33.619135, lng:-84.849362, dir:null, tel:"+1-404-453-9043", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "chattanooga-tennessee": {nombre:"Chattanooga", centro:[35.045722, -85.309488], tz:"America/New_York", lugares:[
  {n:"Cat Clinic Chattanooga", cat:"vet", lat:35.064702, lng:-85.312709, dir:"310 Cherokee Boulevard", tel:"+1-423-752-0737", horas:[7.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Play Wash Pint", cat:"parque", lat:35.035769, lng:-85.303804, dir:"113 Johnson Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nooga Paws", cat:"tienda", lat:35.062794, lng:-85.31449, dir:"313 Manufacturers Road", tel:null, horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Chattanooga Zoo", cat:"zoo", lat:35.043155, lng:-85.28334, dir:"301 North Holtzclaw Avenue", tel:null, horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Care and Specialty Group", cat:"vet", lat:35.01889, lng:-85.321916, dir:"3201 Broad Street", tel:null, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Pullen Cancer Center - VCSG", cat:"vet", lat:35.01899, lng:-85.322413, dir:"3201 Broad Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chattanooga Chew Chew Canine Park", cat:"parque", lat:35.03726, lng:-85.318705, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Groomingdale's", cat:"peluqueria", lat:35.062648, lng:-85.307629, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"River's Dog Park", cat:"parque", lat:35.060497, lng:-85.297695, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Highlandpark Dog Park", cat:"parque", lat:35.037452, lng:-85.282228, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cheat-lake": {nombre:"Cheat Lake", centro:[39.674487, -79.851662], tz:"America/New_York", lugares:[
  {n:"Cheat Lake Animal Hospital", cat:"vet", lat:39.676976, lng:-79.843661, dir:"286 Fairchance Road", tel:"+1 304-594-1124", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Avian Conservation Center of Appalachia", cat:"refugio", lat:39.676834, lng:-79.844119, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BarkBarn", cat:"refugio", lat:39.655269, lng:-79.871541, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cheriton": {nombre:"Cheriton", centro:[37.289583, -75.971321], tz:"America/New_York", lugares:[
  {n:"Cape Charles Animal Hospital", cat:"vet", lat:37.269297, lng:-75.973059, dir:"22491 Lankford Highway", tel:"+1-757-695-8378", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "cherokee-north-carolina": {nombre:"Cherokee;ᏣᎳᎩ", centro:[35.476638, -83.318978], tz:"America/New_York", lugares:[
  {n:"Cherokee Bear Zoo", cat:"zoo", lat:35.473129, lng:-83.314583, dir:"1204 Tsalagi Road", tel:"+18284974525", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cherokee Bear Zoo and Exotic Animals", cat:"zoo", lat:35.47347, lng:-83.314074, dir:"119 Whitewater Drive", tel:"+18284974525", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cherry-grove-beach": {nombre:"Cherry Grove Beach", centro:[33.827395, -78.642792], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.840343, lng:-78.65926, dir:"1530 US Highway 17 North", tel:"+1 843-281-4832", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "chesapeake-virginia": {nombre:"Chesapeake", centro:[36.716831, -76.249445], tz:"America/New_York", lugares:[
  {n:"Posh Pooch", cat:"peluqueria", lat:36.723049, lng:-76.240215, dir:"123 North Battlefield Boulevard", tel:"+1-757-549-1989", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chesapeake Humane Society Veterinary Clinic", cat:"vet", lat:36.7271, lng:-76.241802, dir:"312 North Battlefield Boulevard", tel:"+1-757-546-5355", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.685831, lng:-76.225873, dir:"237 Hanbury Road East", tel:"+1 757-550-6225", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.770635, lng:-76.231666, dir:"1236 Greenbrier Parkway", tel:"+1 757-436-7559", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:36.773004, lng:-76.232385, dir:"1328 Greenbrier Parkway", tel:"+1-757-436-4472", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Edinburgh Animal Hospital", cat:"vet", lat:36.656074, lng:-76.23478, dir:"233 Hillcrest Parkway", tel:"+1 757-432-0488", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.807653, lng:-76.131558, dir:"4540 Princess Anne Road", tel:"+1 757-474-1018", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Great Bridge Vetinary Hospital", cat:"vet", lat:36.712691, lng:-76.277819, dir:"1010 Cedar Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barker Animal Hospital", cat:"vet", lat:36.742564, lng:-76.223668, dir:"480 Kempsville Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greenbrier Veterinary Clinic", cat:"vet", lat:36.766763, lng:-76.24963, dir:"105 Coastal Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chesapeake Animal Hospital", cat:"vet", lat:36.718124, lng:-76.186297, dir:"300 Centerville Turnpike South", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Orchard Square Veterinary Clinic", cat:"vet", lat:36.762541, lng:-76.201631, dir:"1615 Volvo Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Referral Center", cat:"vet", lat:36.777918, lng:-76.223152, dir:"1100 River Birch Run North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sterling Meadows Kennel & Cattery", cat:"refugio", lat:36.748141, lng:-76.1178, dir:"3756 Indian River Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fish Safari", cat:"tienda", lat:36.792576, lng:-76.123227, dir:null, tel:"+1-757-416-1600", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:36.716936, lng:-76.238186, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:36.716538, lng:-76.237462, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mount Pleasant Veterinary Clinic", cat:"vet", lat:36.711137, lng:-76.233917, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Acredale Animal Hospital of Great Bridge", cat:"vet", lat:36.695538, lng:-76.232168, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dominion Veterinary Hospital", cat:"vet", lat:36.708133, lng:-76.315621, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chester-gap": {nombre:"Chester Gap", centro:[38.851062, -78.136106], tz:"America/New_York", lugares:[
  {n:"Willow Run Kennels", cat:"refugio", lat:38.862907, lng:-78.063074, dir:"4332 Fiery Run Road", tel:"+1 540-364-2121", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "chester-virginia": {nombre:"Chester", centro:[37.356223, -77.446058], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:37.353169, lng:-77.410732, dir:"12611 Route 1", tel:"+1 804-312-9047", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Centralia Animal Hospital", cat:"vet", lat:37.357524, lng:-77.444763, dir:"4125 Celebration Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Pet’s Tale", cat:"tienda", lat:37.357661, lng:-77.442621, dir:"4100 West Hundred Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chester Aquaria", cat:"tienda", lat:37.35391, lng:-77.452026, dir:"4613 Chester Square Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Chester Pet Resort", cat:"tienda", lat:37.353698, lng:-77.482046, dir:"12021 Iron Bridge Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"4 the Love of Dogs Grooming Salon", cat:"tienda", lat:37.381381, lng:-77.453857, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chesterfield-virginia": {nombre:"Chesterfield", centro:[37.377793, -77.50467], tz:"America/New_York", lugares:[
  {n:"Lucky Dog Pet Spa", cat:"peluqueria", lat:37.351481, lng:-77.484993, dir:"11950 Iron Bridge Plaza", tel:"+1 804-914-0493", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chesterfield County Animal Services", cat:"refugio", lat:37.385325, lng:-77.50179, dir:"9300 Public Works Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet World", cat:"tienda", lat:37.372244, lng:-77.500664, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chesterfield Meadows Veterinary", cat:"vet", lat:37.372299, lng:-77.500455, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Iron Bridge Animal Hospital", cat:"vet", lat:37.407107, lng:-77.506172, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cheval": {nombre:"Cheval", centro:[28.156976, -82.507126], tz:"America/New_York", lugares:[
  {n:"Cheval Animal Hospital", cat:"vet", lat:28.147809, lng:-82.494236, dir:"18821 North Dale Mabry Highway", tel:"+1-813-949-8000", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Long Lake Ranch Dog Park", cat:"parque", lat:28.180853, lng:-82.501474, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Promenade Paws Park", cat:"parque", lat:28.129513, lng:-82.500024, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Pasco Veterinary Clinic", cat:"vet", lat:28.19545, lng:-82.518494, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chiefland": {nombre:"Chiefland", centro:[29.474959, -82.8592], tz:"America/New_York", lugares:[
  {n:"Suwannee Valley Veterinary Clinic", cat:"vet", lat:29.509902, lng:-82.875698, dir:"2580 N Young Blvd", tel:"+1-352-493-0123", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chiefland Animal Hospital", cat:"vet", lat:29.511, lng:-82.876349, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "china-grove": {nombre:"China Grove", centro:[35.569306, -80.581732], tz:"America/New_York", lugares:[
  {n:"South Rowan Animal Hospital", cat:"vet", lat:35.572642, lng:-80.574971, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "christiansburg-virginia": {nombre:"Christiansburg", centro:[37.129852, -80.408939], tz:"America/New_York", lugares:[
  {n:"Town & Country Veterinary Hospital", cat:"vet", lat:37.15021, lng:-80.413786, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "christmas": {nombre:"Christmas", centro:[28.536389, -81.017561], tz:"America/New_York", lugares:[
  {n:"Jungle Adventures", cat:"zoo", lat:28.539194, lng:-80.977285, dir:null, tel:null, horas:[9.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "citrus-park": {nombre:"Citrus Park", centro:[28.07835, -82.569819], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:28.063823, lng:-82.573464, dir:"12835 Citrus Plaza Drive", tel:"+1 813-926-7488", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Big Cat Rescue", cat:"zoo", lat:28.060331, lng:-82.571518, dir:"12802 Easy Street", tel:"+1-813-920-4130", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsville Citrus Park", cat:"refugio", lat:28.079259, lng:-82.566245, dir:"7302 Altaloma Street", tel:null, horas:[7.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Big Cat Rescue Experience", cat:"zoo", lat:28.068568, lng:-82.578672, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Old Memorial Dog Park", cat:"parque", lat:28.084964, lng:-82.594257, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic", cat:"vet", lat:28.085397, lng:-82.538863, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "city-view": {nombre:"City View", centro:[34.861332, -82.427009], tz:"America/New_York", lugares:[
  {n:"Noble Dog Hotel", cat:"refugio", lat:34.866326, lng:-82.415263, dir:"1320 Hampton Avenue Extension", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The K9 Shop", cat:"tienda", lat:34.866373, lng:-82.415122, dir:"1320 Hampton Avenue Extension", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clarksburg-west-virginia": {nombre:"Clarksburg", centro:[39.280645, -80.344534], tz:"America/New_York", lugares:[
  {n:"Clarksburg Veterinary Hospital", cat:"tienda", lat:39.277826, lng:-80.355691, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clarksburg Dog Park", cat:"parque", lat:39.269674, lng:-80.360288, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clarkston": {nombre:"Clarkston", centro:[33.809549, -84.239643], tz:"America/New_York", lugares:[
  {n:"Northlake Veterinary Surgery", cat:"vet", lat:33.812594, lng:-84.242004, dir:"935 Montreal Road", tel:"+1-404-292-3281", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North DeKalb Veterinary Clinic", cat:"vet", lat:33.819231, lng:-84.264912, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clarksville-tennessee": {nombre:"Clarksville", centro:[36.527761, -87.35887], tz:"America/Chicago", lugares:[
  {n:"The Kennel Shop", cat:"tienda", lat:36.52791, lng:-87.361854, dir:"122 Public Square", tel:"+1 931-552-9272", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cats on Commerce", cat:"vet", lat:36.525534, lng:-87.361348, dir:"136 Commerce Street", tel:"+1 931-292-2829", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"M&M Dog Grooming", cat:"tienda", lat:36.565863, lng:-87.403857, dir:"1406 Fort Campbell Boulevard", tel:"+1 931-906-6555", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grrffiti Cuts", cat:"tienda", lat:36.585557, lng:-87.393252, dir:"267B Stonecrossing Drive", tel:"+1 931-919-5056", horas:[9.0, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Parkway Animal Clinic", cat:"vet", lat:36.586738, lng:-87.389947, dir:"909 McClardy Road", tel:"+1 931-551-9898", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.586291, lng:-87.296381, dir:"2784 Wilma Rudolph Boulevard", tel:"+1 931-906-8069", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.587846, lng:-87.291379, dir:"2807 Wilma Rudolph Boulevard", tel:"+1 931-221-0361", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Kathy's Pampered Paws", cat:"refugio", lat:36.595332, lng:-87.419967, dir:"127 Hadley Drive", tel:"+1 931-647-0586", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Clarksville Animal Clinic", cat:"vet", lat:36.631752, lng:-87.411521, dir:"1998 Sunset Meadows Way", tel:"+1 931-500-7297", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Anita's Dog Gone Salon", cat:"tienda", lat:36.528243, lng:-87.362687, dir:null, tel:"+1 931-906-1364", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"J&M Pet Land", cat:"tienda", lat:36.567883, lng:-87.404833, dir:null, tel:"+1 931-645-2130", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pet Studio", cat:"peluqueria", lat:36.512985, lng:-87.294782, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heritage Bark Park", cat:"parque", lat:36.581443, lng:-87.388396, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blake Veterinary Clinic", cat:"vet", lat:36.577679, lng:-87.312408, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:36.523272, lng:-87.233923, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Family Pet Hospital", cat:"vet", lat:36.522139, lng:-87.229496, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clarksville-virginia": {nombre:"Clarksville", centro:[36.624748, -78.556443], tz:"America/New_York", lugares:[
  {n:"Clarksville Veterinary Clinic", cat:"vet", lat:36.623515, lng:-78.55978, dir:"113 Seventh Street", tel:"+1 434-374-0166", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Betsy's Boarding Kennel & Grooming", cat:"refugio", lat:36.620895, lng:-78.575898, dir:"181 Buffalo Road", tel:"+1-434-374-2295", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "clayton": {nombre:"Clayton", centro:[31.878216, -85.449663], tz:"America/New_York", lugares:[
  {n:"Paradise Pumpkin Patch", cat:"zoo", lat:31.816072, lng:-85.324951, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clayton-north-carolina": {nombre:"Clayton", centro:[35.650711, -78.456391], tz:"America/New_York", lugares:[
  {n:"Roxie Daizy Pet Salon", cat:"peluqueria", lat:35.653373, lng:-78.459157, dir:"113 East 1st Street", tel:"+19193599289", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clayton Animal Hospital", cat:"vet", lat:35.647368, lng:-78.465337, dir:"11058 US 70 Business West", tel:"+1-919-553-4601", horas:[7.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Robinson Animal Hospital", cat:"vet", lat:35.642704, lng:-78.450789, dir:"1002 E Main St", tel:"+1-919-553-7173", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Stonewater Veterinary Hospital", cat:"vet", lat:35.626475, lng:-78.426937, dir:"8810 US 70 Business West", tel:"+1-919-589-8515", horas:[10.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Amelia Grace Animal Hospital", cat:"vet", lat:35.633593, lng:-78.494012, dir:"1621 NC-42 West", tel:"+1 919 243 8105", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"peluqueria", lat:35.663077, lng:-78.498831, dir:"821 Town Centre Boulevard", tel:"+1-919-243-8514", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Assisted Therapy Of The Triangle, PC", cat:"vet", lat:35.649123, lng:-78.396573, dir:"34-104 Oleander Drive", tel:"+1-919-243-1505", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Plantation Animal Hospital", cat:"vet", lat:35.650299, lng:-78.39505, dir:"18 Plantation Drive", tel:"+1-919-359-9977", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Riverwood Veterinary Clinic", cat:"vet", lat:35.694643, lng:-78.419069, dir:"200 Pritchard Road", tel:"+19193592750", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Adorybull Groom And Board", cat:"refugio", lat:35.675785, lng:-78.359366, dir:"12635 Buffalo Road", tel:"+1-919-359-1548", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cleveland School Animal Hospital", cat:"vet", lat:35.610018, lng:-78.564226, dir:"79 Oxholm Cir", tel:"+19196627387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cleveland Community Veterinary Hospital", cat:"vet", lat:35.586886, lng:-78.550972, dir:"3315 North Shiloh Road", tel:"+1-919-550-4000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Just Dog People", cat:"tienda", lat:35.607807, lng:-78.5679, dir:"91 Glen Road", tel:"+1-919-977-7822", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Family Pet Animal Hospital", cat:"vet", lat:35.607254, lng:-78.567867, dir:"73 Glen Road", tel:"+19196610391", horas:[7.75, 17.25], nota:"Dato de OpenStreetMap"},
  {n:"Aardvark Animal Hospital", cat:"vet", lat:35.581299, lng:-78.547414, dir:"10547 Cleveland Road", tel:"+1-919-359-3595", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bone Voyage Pet Resort", cat:"refugio", lat:35.591531, lng:-78.571378, dir:"339 Shipwash Drive", tel:"+19193299892", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East Clayton Dog Park", cat:"parque", lat:35.637805, lng:-78.420007, dir:"2027 Glen Laurel Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Maple Ridge Mobile Veterinary Services, PLLC", cat:"vet", lat:35.686712, lng:-78.43489, dir:"541 McCarthy Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carolina Ranch Animal Hospital & Resort", cat:"vet", lat:35.598013, lng:-78.579232, dir:"6129 NC 42 West", tel:null, horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "clearwater": {nombre:"Clearwater", centro:[27.965853, -82.800103], tz:"America/New_York", lugares:[
  {n:"Animal Health Care Clinic", cat:"vet", lat:27.968346, lng:-82.750009, dir:"2118 Drew Street", tel:"+1-727-446-5501", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Very Important Pet", cat:"peluqueria", lat:27.965875, lng:-82.785779, dir:null, tel:"+1-727-446-6700", horas:[6.5, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Crest Lake Dog Park", cat:"parque", lat:27.961561, lng:-82.773547, dir:"401 South Glenwood Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Grooming", cat:"peluqueria", lat:27.950684, lng:-82.775544, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets Unlimited", cat:"tienda", lat:27.968238, lng:-82.759166, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clemmons": {nombre:"Clemmons", centro:[36.021526, -80.381998], tz:"America/New_York", lugares:[
  {n:"Animal Ark", cat:"vet", lat:36.021613, lng:-80.374, dir:"3515 Lawrence Street", tel:"+1-336-778-2738", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:36.040586, lng:-80.388874, dir:"3142 Gammon Ln", tel:"+13367129963", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Bark of the Town Pet Salon", cat:"peluqueria", lat:36.024173, lng:-80.382944, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carolina Pet Place", cat:"refugio", lat:36.025471, lng:-80.383473, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Clemmons", cat:"vet", lat:36.025929, lng:-80.383477, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:36.068525, lng:-80.322598, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clemson": {nombre:"Clemson", centro:[34.685075, -82.836411], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:34.691312, lng:-82.857535, dir:"13390 Clemson Boulevard", tel:"+1 864-722-6120", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal House", cat:"vet", lat:34.692015, lng:-82.844611, dir:"976 Tiger Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pier Dog Park", cat:"parque", lat:34.648491, lng:-82.858949, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clermont": {nombre:"Clermont", centro:[28.555191, -81.766949], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:28.547424, lng:-81.737767, dir:"1070 East Highway 50", tel:"+1-352-241-4476", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "clermont-georgia": {nombre:"Clermont", centro:[34.477875, -83.773515], tz:"America/New_York", lugares:[
  {n:"White County Animal Shelter", cat:"refugio", lat:34.522675, lng:-83.743188, dir:"680 Industrial Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cleveland": {nombre:"Cleveland", centro:[33.990932, -86.57749], tz:"America/Chicago", lugares:[
  {n:"Animal Adoption Center of Blount County", cat:"refugio", lat:33.968444, lng:-86.566967, dir:"5554 County Highway 1", tel:"+1 205-625-6026", horas:[11.0, 16.5], nota:"Dato de OpenStreetMap"}
 ]},
 "cleveland-georgia": {nombre:"Cleveland", centro:[34.597245, -83.763306], tz:"America/New_York", lugares:[
  {n:"North Georgia Zoo & Petting Farm", cat:"zoo", lat:34.623329, lng:-83.865883, dir:"2912 Paradise Valley Road", tel:"+1-706-348-7279", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cleveland-mississippi": {nombre:"Cleveland", centro:[33.744002, -90.724819], tz:"America/Chicago", lugares:[
  {n:"Animal Medical Clinic", cat:"vet", lat:33.751468, lng:-90.716345, dir:"515 North Davis Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawprints Rescue Center", cat:"refugio", lat:33.751431, lng:-90.716814, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cleveland-tennessee": {nombre:"Cleveland", centro:[35.159518, -84.876611], tz:"America/New_York", lugares:[
  {n:"Ark of Cleveland, Inc.", cat:"refugio", lat:35.162147, lng:-84.877822, dir:"240 Oak Street Northwest", tel:"+1 423 472 2744", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.206334, lng:-84.852862, dir:"325 Paul Huff Parkway", tel:"+1 423-478-9103", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Creekside Veterinary Hospital", cat:"vet", lat:35.215655, lng:-84.883272, dir:"2987 Hunting Dr NW", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bradley Veterinary Hospital", cat:"vet", lat:35.235436, lng:-84.889075, dir:"5527 Georgetown Road Northwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Aquatic Den", cat:"tienda", lat:35.174776, lng:-84.878183, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tinsley Park Dog Park for Big Dogs", cat:"parque", lat:35.201255, lng:-84.856353, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tinsley Park Dog Park for Small Dogs", cat:"parque", lat:35.201498, lng:-84.857173, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clinton-georgia": {nombre:"Clinton", centro:[32.998747, -83.555449], tz:"America/New_York", lugares:[
  {n:"Ward's Dog Spa", cat:"peluqueria", lat:33.001666, lng:-83.548085, dir:"102 Bill Conn Pkwy", tel:"+1-478-986-4114", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clinton-mississippi": {nombre:"Clinton", centro:[32.341055, -90.321598], tz:"America/Chicago", lugares:[
  {n:"Animal Hospital of Clinton", cat:"vet", lat:32.322134, lng:-90.325324, dir:"497 Springridge Road", tel:"+1 601-924-4169", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "clinton-north-carolina": {nombre:"Clinton", centro:[34.997945, -78.323333], tz:"America/New_York", lugares:[
  {n:"Sampson County Animal Shelter", cat:"refugio", lat:34.944534, lng:-78.289174, dir:"168 Agriculture Place", tel:"+19105928493", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clinton-tennessee": {nombre:"Clinton", centro:[36.103413, -84.131863], tz:"America/New_York", lugares:[
  {n:"Clinton Animal Hospital", cat:"vet", lat:36.10968, lng:-84.126167, dir:"730 North Charles G Seivers Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carden Farm Dog Park", cat:"parque", lat:36.099724, lng:-84.128305, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clyde-north-carolina": {nombre:"Clyde", centro:[35.533438, -82.910691], tz:"America/New_York", lugares:[
  {n:"Country Lane Animal Hospital", cat:"vet", lat:35.52922, lng:-82.920674, dir:"9019 Carolina Boulevard", tel:"+1-828-627-9100", horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Haywood County Animal Shelter", cat:"refugio", lat:35.526988, lng:-82.938801, dir:"453 Jones Cove Road", tel:"+1-828-456-5338", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "coal-mountain": {nombre:"Coal Mountain", centro:[34.271486, -84.100746], tz:"America/New_York", lugares:[
  {n:"Forsyth County Animal Shelter", cat:"refugio", lat:34.269711, lng:-84.085185, dir:"4065 County Way", tel:"+1-678-965-7185", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Easy Vet", cat:"vet", lat:34.298769, lng:-84.151415, dir:"5290 Matt Highway", tel:"+1-678-783-6828", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.351264, lng:-84.044982, dir:"145 Forest Boulevard", tel:"+1 706-216-2625", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Coal Mountain Dog Park", cat:"parque", lat:34.269362, lng:-84.083821, dir:"4060 County Way", tel:null, horas:[6.0, 21.5], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:34.348115, lng:-84.047967, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "coal-run-village": {nombre:"Coal Run Village", centro:[37.513155, -82.558486], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:37.507168, lng:-82.542388, dir:"120 Justice Way", tel:"+1 606-432-2130", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "cocoa-beach": {nombre:"Cocoa Beach", centro:[28.318411, -80.609496], tz:"America/New_York", lugares:[
  {n:"Salty Sisters Bar and Grill", cat:"resto", lat:28.319441, lng:-80.611492, dir:"20 Brevard Avenue N", tel:"+1-321-613-2474", horas:[11.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Bow Meow", cat:"refugio", lat:28.324976, lng:-80.60961, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "coconut-creek": {nombre:"Coconut Creek", centro:[26.251748, -80.178935], tz:"America/New_York", lugares:[
  {n:"My Paleo Pet", cat:"tienda", lat:26.275946, lng:-80.153063, dir:"2201 West Sample Road", tel:"+1-954-971-2500", horas:[13.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Pompano Pet Lodge", cat:"refugio", lat:26.24015, lng:-80.164983, dir:"930 Northwest 31st Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:26.285539, lng:-80.201055, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "coldwater-mississippi": {nombre:"Coldwater", centro:[34.691768, -89.977312], tz:"America/Chicago", lugares:[
  {n:"Coldwater Animal Hospital", cat:"vet", lat:34.680477, lng:-89.977479, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "college-park": {nombre:"College Park", centro:[33.653443, -84.449372], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.657568, lng:-84.503312, dir:"3665 Marketplace Boulevard", tel:"+1 404-344-0773", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"LifeLine", cat:"vet", lat:33.625025, lng:-84.472151, dir:"2533 Sullivan Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hartsfield-Jackson Dog Park", cat:"parque", lat:33.640208, lng:-84.44678, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "collegedale": {nombre:"Collegedale", centro:[35.05313, -85.050228], tz:"America/New_York", lugares:[
  {n:"Collegedale Dog Park", cat:"parque", lat:35.05369, lng:-85.047086, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Applebrook Animal Hospital", cat:"vet", lat:35.080821, lng:-85.054106, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Highland Vet Clinic", cat:"vet", lat:34.998331, lng:-85.096549, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "collierville": {nombre:"Collierville", centro:[35.042036, -89.664527], tz:"America/Chicago", lugares:[
  {n:"Collierville Animal Shelter", cat:"refugio", lat:35.037326, lng:-89.651052, dir:"603 East South Street", tel:"+1 901-457-2670", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Suggs Dog Park", cat:"parque", lat:35.037268, lng:-89.664415, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pet Hospitals Collierville", cat:"vet", lat:35.043717, lng:-89.687946, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.048575, lng:-89.69622, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Claridge Spa Pet Resort", cat:"peluqueria", lat:35.091455, lng:-89.711386, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "colonial-heights-virginia": {nombre:"Colonial Heights", centro:[37.255572, -77.411202], tz:"America/New_York", lugares:[
  {n:"Banfield Pet Hospital", cat:"vet", lat:37.245647, lng:-77.391619, dir:"42 Southgate Square", tel:"+1-804-520-4433", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:37.245601, lng:-77.391417, dir:"42 Southgate Square", tel:"+1 804-520-0801", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Stephanie's Pet Grooming", cat:"peluqueria", lat:37.307573, lng:-77.409663, dir:"15800 Route 1", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "columbia-kentucky": {nombre:"Columbia", centro:[37.102827, -85.306043], tz:"America/New_York", lugares:[
  {n:"Green River Animal Shelter", cat:"refugio", lat:37.083397, lng:-85.305375, dir:"455 Appleby Drive", tel:"+1 270 385 9655", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Adair County Animal Hospital", cat:"vet", lat:37.127929, lng:-85.295356, dir:"2004 Camobellsvile rd", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "columbia-north-carolina": {nombre:"Columbia", centro:[35.917663, -76.252152], tz:"America/New_York", lugares:[
  {n:"Pampered Paws Pet Grooming", cat:"peluqueria", lat:35.918107, lng:-76.247706, dir:"807 Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "columbia-south-carolina": {nombre:"Columbia", centro:[34.000754, -81.035231], tz:"America/New_York", lugares:[
  {n:"Camp Bow Wow", cat:"refugio", lat:33.980538, lng:-81.014172, dir:"655 Superior Street", tel:"+18037484544", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Contented Canines", cat:"tienda", lat:34.000056, lng:-81.043097, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Griffin Animal Hospital", cat:"vet", lat:34.008866, lng:-81.025774, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:34.002801, lng:-81.01846, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Five Points Animal Clinic", cat:"vet", lat:34.00185, lng:-81.016801, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eastern States Serum Company", cat:"tienda", lat:34.012929, lng:-81.022523, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Emily Douglas Dog Park", cat:"parque", lat:33.996121, lng:-81.009025, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Trestle Pet Shop", cat:"tienda", lat:34.025803, lng:-81.04161, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"NOMA Bark Park", cat:"parque", lat:34.027974, lng:-81.043232, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greater Columbia Obedience Club", cat:"refugio", lat:33.970435, lng:-81.025707, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "columbiana": {nombre:"Columbiana", centro:[33.178172, -86.607205], tz:"America/Chicago", lugares:[
  {n:"Shelby County Humane Society", cat:"vet", lat:33.184521, lng:-86.627929, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "columbus": {nombre:"Columbus", centro:[32.461071, -84.988045], tz:"America/New_York", lugares:[
  {n:"Valley Rescue Mission", cat:"refugio", lat:32.49123, lng:-84.990801, dir:"2903 2nd Avenue", tel:"+1-706-322-8267", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws & Play", cat:"tienda", lat:32.527529, lng:-84.958389, dir:"Veterans Parkway", tel:"+1-706-322-0403", horas:[7.0, 11.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.534907, lng:-84.970682, dir:"1591 Bradley Park Drive", tel:"+1 706-323-6788", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.54337, lng:-84.944624, dir:"5550 Whittlesey Boulevard", tel:"+1 706-596-9320", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Southeastern Veterinary Surgery Center", cat:"vet", lat:32.565758, lng:-84.949025, dir:"8050 Fortson Road", tel:"+1-706-575-5479", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Northridge Veterinary Center", cat:"vet", lat:32.565587, lng:-84.943846, dir:"3081 Williams Road", tel:"+1-706-507-5101", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Double Churches Animal Clinic", cat:"vet", lat:32.571844, lng:-84.969729, dir:"8365 Whitesville Road", tel:"+1-706-322-3232", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Fetch Park", cat:"parque", lat:32.473795, lng:-84.9857, dir:"1432 5th Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northside Animal Hospital", cat:"vet", lat:32.519464, lng:-84.965993, dir:"5377 Veterans Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Macon Road Veterinay Clinic", cat:"vet", lat:32.492809, lng:-84.913123, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oxbow Meadows Environmental Learning Center", cat:"zoo", lat:32.386145, lng:-84.958711, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Milgen Village Dog Park", cat:"parque", lat:32.527121, lng:-84.885424, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "columbus-mississippi": {nombre:"Columbus", centro:[33.495674, -88.427263], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.514499, lng:-88.43174, dir:"1486 Old Aberdeen Road", tel:"+1 662-244-3397", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "columbus-north-carolina": {nombre:"Columbus", centro:[35.25317, -82.197058], tz:"America/New_York", lugares:[
  {n:"Bonnie Brae Veterinary Hospital", cat:"vet", lat:35.241233, lng:-82.207636, dir:"155 Shuford Road", tel:"+18288946064", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Foothills Humane Society", cat:"refugio", lat:35.229923, lng:-82.125775, dir:"989 Little Mountain Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tryon Equine Hospital", cat:"vet", lat:35.204918, lng:-82.124876, dir:"3689 Landrum Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Perribrook Doggie Salon", cat:"peluqueria", lat:35.251288, lng:-82.199166, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Purrfect Bark", cat:"tienda", lat:35.249409, lng:-82.20146, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "concord-north-carolina": {nombre:"Concord", centro:[35.409418, -80.580005], tz:"America/New_York", lugares:[
  {n:"Cabarrus Spay & Neuter Clinic", cat:"vet", lat:35.421954, lng:-80.59151, dir:"413 Church Street North", tel:"+1-704-784-6304", horas:[7.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Cabarrus County Animal Shelter", cat:"refugio", lat:35.372434, lng:-80.562568, dir:"244 Betsy Carpenter Southwest Place", tel:"+1-704-920-3288", horas:[12.0, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.419276, lng:-80.677265, dir:"6070 Bayfield Parkway", tel:"+1 704-788-9661", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "conestee": {nombre:"Conestee", centro:[34.768174, -82.349843], tz:"America/New_York", lugares:[
  {n:"Conestee Large Dog Park", cat:"parque", lat:34.781598, lng:-82.351306, dir:"840 Mauldin Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Conestee Small Dog Park", cat:"parque", lat:34.781686, lng:-82.351011, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "connerton": {nombre:"Connerton", centro:[28.302237, -82.462487], tz:"America/New_York", lugares:[
  {n:"Gardens Dog Park", cat:"parque", lat:28.277482, lng:-82.455882, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "conover": {nombre:"Conover", centro:[35.7065, -81.218438], tz:"America/New_York", lugares:[
  {n:"Conover Veterinary Hospital", cat:"vet", lat:35.701557, lng:-81.199588, dir:"103 Thornburg Drive Southeast", tel:"+1-828-465-5720", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "conway-florida": {nombre:"Conway", centro:[28.502406, -81.330892], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:28.464894, lng:-81.304731, dir:"6751 Eagle Watch Drive", tel:"+1 407-241-1646", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Cornerstone Dog Park", cat:"parque", lat:28.515124, lng:-81.328679, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:28.504037, lng:-81.312701, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "conway-south-carolina": {nombre:"Conway", centro:[33.836003, -79.047814], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:33.855233, lng:-79.077271, dir:"2300 Church Street", tel:"+1-843-772-0015", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.863257, lng:-79.093796, dir:"2918 Church Street", tel:"+1-843-772-6031", horas:[8.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.848012, lng:-79.062439, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Horry County Animal Care Center", cat:"refugio", lat:33.909603, lng:-79.053679, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "conyers": {nombre:"Conyers", centro:[33.66761, -84.01769], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.654524, lng:-83.998981, dir:"1370 Dogwood Drive Southeast", tel:"+1 770-922-1772", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Smith Farms Boarding Kennel", cat:"peluqueria", lat:33.678007, lng:-84.024873, dir:"3436 Irwin Bridge Road Northwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Conyers Animal Hospital", cat:"vet", lat:33.664901, lng:-84.034576, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rockdale County Animal Shelter", cat:"refugio", lat:33.6835, lng:-83.9997, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cookeville": {nombre:"Cookeville", centro:[36.162389, -85.499706], tz:"America/New_York", lugares:[
  {n:"Best Friends Veterinary Hospital", cat:"vet", lat:36.146903, lng:-85.500371, dir:"650 South Jefferson Avenue", tel:"+1-931-881-2037", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Copeland Veterinary Hospital", cat:"vet", lat:36.175253, lng:-85.487584, dir:"821 East 10th Street", tel:"+1-931-528-1111", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.157513, lng:-85.520563, dir:"377 West Jackson Street", tel:"+1 931-526-8991", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.139986, lng:-85.507737, dir:"1265 Interstate Drive", tel:"+1 931-559-7387", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Exotic Tropicals", cat:"tienda", lat:36.164843, lng:-85.505363, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:36.146058, lng:-85.497298, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Gables Dog Park", cat:"parque", lat:36.142626, lng:-85.508317, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Flatt Veterinary Clinic", cat:"vet", lat:36.145701, lng:-85.521613, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Boyd Veterinary Clinic", cat:"vet", lat:36.142409, lng:-85.455443, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cookeville-Putnam County Animal Shelter", cat:"refugio", lat:36.200712, lng:-85.535889, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cooper-city": {nombre:"Cooper City", centro:[26.057783, -80.269511], tz:"America/New_York", lugares:[
  {n:"VCA Animal Hospital", cat:"vet", lat:26.032166, lng:-80.267117, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "coral-gables": {nombre:"Coral Gables", centro:[25.73311, -80.258511], tz:"America/New_York", lugares:[
  {n:"Dogtown", cat:"refugio", lat:25.727539, lng:-80.253276, dir:"3686 Grand Avenue", tel:"+1-305-448-5225", horas:[7.5, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:25.73911, lng:-80.239015, dir:"2720 South Dixie Highway", tel:"+1-305-529-1800", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:25.75041, lng:-80.250006, dir:"3301 Southwest 22nd Street", tel:"+1 305-448-4403", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Parajon Animal Clinic", cat:"vet", lat:25.765342, lng:-80.239949, dir:"2751 Southwest 8th Street", tel:"+1-305-856-2885", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Park (small dogs)", cat:"parque", lat:25.734381, lng:-80.227364, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog park (large dogs)", cat:"parque", lat:25.734492, lng:-80.227086, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "coral-springs": {nombre:"Coral Springs", centro:[26.271192, -80.270604], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:26.260777, lng:-80.250709, dir:"2446 North University Drive", tel:"+1 954-345-2694", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Pet Medical Center and Boarding", cat:"vet", lat:26.273448, lng:-80.281422, dir:null, tel:"+1-954-341-4123", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sawgrass Nature Center", cat:"zoo", lat:26.269016, lng:-80.294034, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "corbin": {nombre:"Corbin", centro:[36.948699, -84.096876], tz:"America/New_York", lugares:[
  {n:"Corbin Animal Clinic", cat:"vet", lat:36.928778, lng:-84.108436, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cordova-tennessee": {nombre:"Cordova", centro:[35.155645, -89.776196], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.201683, lng:-89.796997, dir:"2805 Wolfcreek Parkway", tel:"+1 901-384-9823", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Shelby Farms Dog Park", cat:"parque", lat:35.140753, lng:-89.809866, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Outback Off-Leash Dog Park", cat:"parque", lat:35.141025, lng:-89.810018, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cornelius": {nombre:"Cornelius", centro:[35.481705, -80.859001], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.476159, lng:-80.890209, dir:"8301 Magnolia Estates Drive", tel:"+1 704-765-3048", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Tazzy & Boo", cat:"tienda", lat:35.480948, lng:-80.856991, dir:"19921 Zion Avenue", tel:null, horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "cornersville": {nombre:"Cornersville", centro:[35.361465, -86.839724], tz:"America/Chicago", lugares:[
  {n:"Doggy Parton", cat:"parque", lat:35.310396, lng:-86.879594, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "country-club-estates": {nombre:"Country Club Estates", centro:[31.21273, -81.464267], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:31.19992, lng:-81.480037, dir:"200 Golden Isles Parkway", tel:"+1 912-262-0198", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "county-center": {nombre:"County Center", centro:[38.678482, -77.352299], tz:"America/New_York", lugares:[
  {n:"Mapleshade Animal Hospital", cat:"vet", lat:38.661531, lng:-77.365786, dir:"5597 Mapledale Avenue", tel:"+1 703-670-7668", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Hillendale Animal Hospital", cat:"vet", lat:38.666857, lng:-77.333756, dir:"13183 Centerpointe Way", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "covington": {nombre:"Covington", centro:[33.596601, -83.859874], tz:"America/New_York", lugares:[
  {n:"East Metro Animal Emergency Clinic", cat:"vet", lat:33.603061, lng:-83.875582, dir:"6225 Highway 278", tel:"+1-678-212-0300", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"tienda", lat:33.604296, lng:-83.859726, dir:"3119 Highway 278 Northeast", tel:null, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Sigman Veterinary Clinic", cat:"vet", lat:33.608593, lng:-83.828257, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "covington-kentucky": {nombre:"Covington", centro:[39.083171, -84.510755], tz:"America/New_York", lugares:[
  {n:"Strasse Dog", cat:"tienda", lat:39.083894, lng:-84.517721, dir:"605 Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "covington-virginia": {nombre:"Covington", centro:[37.793453, -79.993948], tz:"America/New_York", lugares:[
  {n:"Highland Pet Center & Dog Patch", cat:"tienda", lat:37.791651, lng:-79.997038, dir:"386 West Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cowarts": {nombre:"Cowarts", centro:[31.200332, -85.304751], tz:"America/New_York", lugares:[
  {n:"Briar Creek Vet", cat:"vet", lat:31.134349, lng:-85.333298, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crawfordville": {nombre:"Crawfordville", centro:[30.176036, -84.375178], tz:"America/New_York", lugares:[
  {n:"Wakulla Animal Services", cat:"refugio", lat:30.195854, lng:-84.378578, dir:"1 Oak Street", tel:"+1 850 926 0902", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mike's Feed Store", cat:"tienda", lat:30.210354, lng:-84.363479, dir:"28 McCallister Road", tel:"+1-850-926-4677", horas:[8.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Pet Stop", cat:"tienda", lat:30.177215, lng:-84.375268, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "creedmoor": {nombre:"Creedmoor", centro:[36.122741, -78.686227], tz:"America/New_York", lugares:[
  {n:"South Granville Animal Hospital", cat:"vet", lat:36.12168, lng:-78.684802, dir:"608 North Main Street", tel:"+19195283591", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mule Town Veterinary Hospital", cat:"vet", lat:36.120033, lng:-78.686689, dir:"413 North Main Street", tel:"+1-919-529-2066", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Saving Grace Animals for Adoption", cat:"refugio", lat:35.992106, lng:-78.693899, dir:"13400 Old Creedmoor Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Currier Veterinary Services", cat:"vet", lat:35.990347, lng:-78.694731, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "creekside": {nombre:"Creekside", centro:[38.291459, -85.569405], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.292446, lng:-85.559567, dir:"10308 Westport Road", tel:"+1 502-326-0271", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "crescent-springs": {nombre:"Crescent Springs", centro:[39.051449, -84.581611], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:39.050924, lng:-84.574257, dir:"575 Clock Tower Way", tel:"+1 859-486-2094", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "crestview": {nombre:"Crestview", centro:[30.762133, -86.570508], tz:"America/Chicago", lugares:[
  {n:"All Doggy Diva's & Rockstars", cat:"peluqueria", lat:30.758384, lng:-86.570798, dir:"158 Woodruff Avenue West", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawsitively Scrumptious Bark Bakery & Boutique", cat:"tienda", lat:30.762218, lng:-86.57658, dir:"307 West James Lee Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Four Paws Pet Salon", cat:"peluqueria", lat:30.755962, lng:-86.566631, dir:"310 South Ferdon Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Four Paws Pet Salon", cat:"peluqueria", lat:30.748822, lng:-86.563442, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riverwood Dog Park", cat:"parque", lat:30.715549, lng:-86.572176, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crestwood-kentucky": {nombre:"Crestwood", centro:[38.323544, -85.472622], tz:"America/New_York", lugares:[
  {n:"Crestwood Animal Hospital", cat:"vet", lat:38.334382, lng:-85.466331, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crooked-creek": {nombre:"Crooked Creek", centro:[33.260473, -83.261395], tz:"America/New_York", lugares:[
  {n:"Petite Paradise Pet Resort", cat:"refugio", lat:33.183868, lng:-83.289721, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cross-lanes": {nombre:"Cross Lanes", centro:[38.420371, -81.790685], tz:"America/New_York", lugares:[
  {n:"Inland Reef Pet Store", cat:"tienda", lat:38.421332, lng:-81.795671, dir:"817 Cross Lanes Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crossgate": {nombre:"Crossgate", centro:[38.279237, -85.629961], tz:"America/Chicago", lugares:[
  {n:"Feeder's Supply", cat:"tienda", lat:38.28242, lng:-85.63131, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crosspointe": {nombre:"Crosspointe", centro:[38.728008, -77.259055], tz:"America/New_York", lugares:[
  {n:"Crosspointe Animal Hospital", cat:"vet", lat:38.728505, lng:-77.254977, dir:"8975 Village Shops Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Classics", cat:"peluqueria", lat:38.729073, lng:-77.252863, dir:"8904 Village Shops Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pack Animal Care", cat:"vet", lat:38.715562, lng:-77.263248, dir:"8921 Ox Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Playful Pack", cat:"peluqueria", lat:38.727619, lng:-77.25829, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crossville-tennessee": {nombre:"Crossville", centro:[35.949684, -85.027484], tz:"America/New_York", lugares:[
  {n:"Petaholics Hotel", cat:"refugio", lat:35.918853, lng:-85.051055, dir:"2522 Lantana Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crystal-river": {nombre:"Crystal River", centro:[28.902479, -82.592601], tz:"America/New_York", lugares:[
  {n:"Three Sisters Springs", cat:"zoo", lat:28.889995, lng:-82.589213, dir:"601 Three Sisters Springs Trail", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Three Sisters Springs Trolley", cat:"zoo", lat:28.900251, lng:-82.59482, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cullman": {nombre:"Cullman", centro:[34.174841, -86.84358], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.184349, lng:-86.851656, dir:"1244 Cullman Shopping Center North", tel:"+1 256-841-3536", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "culpeper": {nombre:"Culpeper", centro:[38.473382, -77.996128], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.482669, lng:-77.968328, dir:"15331 Montanus Drive", tel:"+1 540-825-8793", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Reigning Cats & Dogs", cat:"tienda", lat:38.473143, lng:-77.995842, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tropi-Canna", cat:"tienda", lat:38.472378, lng:-77.994684, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggy Clipps", cat:"peluqueria", lat:38.474922, lng:-77.954692, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cumberland-virginia": {nombre:"Cumberland", centro:[37.496637, -78.244606], tz:"America/New_York", lugares:[
  {n:"Cumberland Animal Hospital", cat:"vet", lat:37.475885, lng:-78.280194, dir:"24 Hillcrest Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cumming": {nombre:"Cumming", centro:[34.20732, -84.140193], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:34.195026, lng:-84.128573, dir:"2345 Market Place Boulevard", tel:"+1 678-947-9280", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.180684, lng:-84.129379, dir:"1020 Market Place Boulevard", tel:"+1 678-513-1689", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center of Cumming", cat:"vet", lat:34.16699, lng:-84.122304, dir:"1438 Buford Highway", tel:"+1-770-886-8555", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:34.198838, lng:-84.195731, dir:"4335 Bethelview Road", tel:"+1-770-888-3130", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Barkfield", cat:"vet", lat:34.199217, lng:-84.132179, dir:"108 Mary Alice Park Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sawnee Animal Clinic", cat:"vet", lat:34.240938, lng:-84.180858, dir:"1826 Canton Highway", tel:null, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Point", cat:"peluqueria", lat:34.207079, lng:-84.136095, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Endless Scales", cat:"tienda", lat:34.215405, lng:-84.1504, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fido Vet", cat:"vet", lat:34.187925, lng:-84.132045, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Forsyth Animal Hospital", cat:"vet", lat:34.20213, lng:-84.197793, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Express Vets", cat:"vet", lat:34.17469, lng:-84.185824, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Dogs Play and Stay", cat:"refugio", lat:34.166796, lng:-84.184402, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawsh Purrfect Grooming", cat:"peluqueria", lat:34.237954, lng:-84.195233, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming Collection", cat:"peluqueria", lat:34.154637, lng:-84.176255, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Atlanta Animal Hospital", cat:"vet", lat:34.142896, lng:-84.17207, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "currituck": {nombre:"Currituck", centro:[36.449877, -76.015482], tz:"America/New_York", lugares:[
  {n:"Currituck Animal Shelter", cat:"refugio", lat:36.391533, lng:-76.009772, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cutler-bay": {nombre:"Cutler Bay", centro:[25.5783, -80.3377], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:25.589919, lng:-80.359398, dir:"18970 South Dixie Highway", tel:"+1 305-251-8442", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Cutler Bay Animal Clinic", cat:"vet", lat:25.590041, lng:-80.359573, dir:"18966 South Dixie Highway", tel:"+1-305-251-4244", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:25.596805, lng:-80.353554, dir:"18579 South Dixie Highway", tel:"+1 305-252-4065", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "cynthiana-kentucky": {nombre:"Cynthiana", centro:[38.390353, -84.294101], tz:"America/New_York", lugares:[
  {n:"Animal House", cat:"peluqueria", lat:38.38728, lng:-84.295788, dir:"105 Railroad Avenue", tel:"+1-859-234-4549", horas:[8.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "d-iberville": {nombre:"D'Iberville", centro:[30.426309, -88.890864], tz:"America/Chicago", lugares:[
  {n:"D'Iberville Veterinary Hospital", cat:"vet", lat:30.434827, lng:-88.891898, dir:null, tel:"+1-228-392-3295", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dacula": {nombre:"Dacula", centro:[33.988717, -83.897957], tz:"America/New_York", lugares:[
  {n:"Apalachee River Animal Hospital", cat:"vet", lat:34.006918, lng:-83.914871, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dade-city": {nombre:"Dade City", centro:[28.364725, -82.195918], tz:"America/New_York", lugares:[
  {n:"Dade City Animal Clinic", cat:"vet", lat:28.348523, lng:-82.189123, dir:"13117 US 301", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dahlgren-virginia": {nombre:"Dahlgren", centro:[38.33615, -77.051513], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:38.352261, lng:-77.055919, dir:"16417 Merchants Lane", tel:"+1 540-663-3876", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "dahlonega": {nombre:"Dahlonega", centro:[34.532848, -83.984572], tz:"America/New_York", lugares:[
  {n:"VCA Dahlonega Animal Hospital", cat:"vet", lat:34.527829, lng:-84.026324, dir:"1284 Dawsonville Highway", tel:"+1-706-864-7191", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Chestatee Animal Hospital", cat:"vet", lat:34.524697, lng:-83.920281, dir:"16 Westbrook", tel:"+1-706-864-1005", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Murrayville Veterinary Clinic", cat:"vet", lat:34.426018, lng:-83.913939, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dale-city": {nombre:"Dale City", centro:[38.645601, -77.336497], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:38.645938, lng:-77.333131, dir:"4167 Cheshire Station Plaza", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Minnieville Animal Hospital", cat:"vet", lat:38.649003, lng:-77.328249, dir:"14005 Minnieville Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "daleville-virginia": {nombre:"Daleville", centro:[37.415498, -79.913333], tz:"America/New_York", lugares:[
  {n:"Crest Hill Animal Inn", cat:"refugio", lat:37.395164, lng:-79.893992, dir:"205 Humbert Road", tel:"+1-540-992-3950", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Botetourt Honey Bee Sanctuary", cat:"zoo", lat:37.438869, lng:-79.906619, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dalton": {nombre:"Dalton", centro:[34.771103, -84.967472], tz:"America/New_York", lugares:[
  {n:"Doggie Do's", cat:"peluqueria", lat:34.781014, lng:-84.966739, dir:"601 North Hamilton Street", tel:"+1-762-231-9243", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.760957, lng:-84.993372, dir:"1310 West Walnut Avenue", tel:"+1 706-459-3687", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:34.788204, lng:-84.997293, dir:"841 Shugart Road", tel:"+1 706-259-6244", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Whitfield County Animal Shelter", cat:"refugio", lat:34.749064, lng:-84.924598, dir:"156 Gillespie Drive", tel:"+1-706-278-2018", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:34.75828, lng:-84.994058, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dalzell": {nombre:"Dalzell", centro:[34.016821, -80.430082], tz:"America/New_York", lugares:[
  {n:"Patriot Paws Animal Hospital", cat:"vet", lat:33.96188, lng:-80.422065, dir:"3372 Yampa Street", tel:"+1-803-239-5455", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dandridge": {nombre:"Dandridge", centro:[36.015369, -83.41489], tz:"America/New_York", lugares:[
  {n:"Town & Country Animal Hospital", cat:"vet", lat:36.025019, lng:-83.428648, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dania-beach": {nombre:"Dania Beach", centro:[26.052422, -80.143929], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:26.047255, lng:-80.159055, dir:"4101 Oakwood Boulevard", tel:"+1 954-920-7658", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "danielsville": {nombre:"Danielsville", centro:[34.124277, -83.221263], tz:"America/New_York", lugares:[
  {n:"Madison Animal Hospital", cat:"vet", lat:34.122525, lng:-83.223156, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "danville-virginia": {nombre:"Danville", centro:[36.587988, -79.391671], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:36.597609, lng:-79.422902, dir:"135 Collins Drive", tel:"+1 434-792-7612", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Danville Family Vet", cat:"vet", lat:36.599849, lng:-79.412349, dir:"280 Piney Forest Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Pets", cat:"peluqueria", lat:36.597835, lng:-79.414468, dir:"274 Hairston Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "daphne": {nombre:"Daphne", centro:[30.603525, -87.903605], tz:"America/Chicago", lugares:[
  {n:"Unleashed", cat:"peluqueria", lat:30.596127, lng:-87.853167, dir:"25491 AL 181", tel:"+1-251-375-1600", horas:[6.5, 8.5], nota:"Dato de OpenStreetMap"},
  {n:"Daphne Animal Shelter", cat:"refugio", lat:30.589646, lng:-87.899994, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Wash", cat:"tienda", lat:30.585726, lng:-87.896828, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:30.630948, lng:-87.912016, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dasher": {nombre:"Dasher", centro:[30.747428, -83.220704], tz:"America/New_York", lugares:[
  {n:"Pine Creek Kennel", cat:"tienda", lat:30.669445, lng:-83.315766, dir:"5815 Madison Highway", tel:"+1-229-460-1868", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Safari Petting Zoo", cat:"zoo", lat:30.720797, lng:-83.32148, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "davie": {nombre:"Davie", centro:[26.062866, -80.233104], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:26.095112, lng:-80.247461, dir:"1978 South University Drive", tel:"+1 954-308-5350", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Davie Animal Hospital", cat:"vet", lat:26.068344, lng:-80.251886, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dawsonville": {nombre:"Dawsonville", centro:[34.421205, -84.11908], tz:"America/New_York", lugares:[
  {n:"Dawsonville Veterinary Hospital", cat:"vet", lat:34.396147, lng:-84.090434, dir:"2399 GA 53", tel:"+1-706-265-8381", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:34.35319, lng:-84.051356, dir:"136 Marketplace Parkway", tel:"+1 706-525-6044", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Foothills Veterinary Clinic", cat:"vet", lat:34.403491, lng:-84.008039, dir:"375 Auraria Road", tel:"+1-706-216-1356", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"All Animals Veterinary Hospital", cat:"vet", lat:34.405361, lng:-84.004178, dir:"639 Auraria Road", tel:"+1-706-216-8387", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Turner and Hooch Grooming", cat:"peluqueria", lat:34.422125, lng:-84.123152, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dayton-tennessee": {nombre:"Dayton", centro:[35.493959, -85.012454], tz:"America/New_York", lugares:[
  {n:"Rhea Pet Medical Center", cat:"vet", lat:35.456277, lng:-85.011469, dir:"2040 Hiwassee Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "daytona-beach": {nombre:"Daytona Beach", centro:[29.210815, -81.022833], tz:"America/New_York", lugares:[
  {n:"Driftwood Animal Hospital", cat:"vet", lat:29.220584, lng:-81.046123, dir:"932 Mason Avenue", tel:"+1 386 255 1407", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.19218, lng:-81.074619, dir:"1900 International Speedway Boulevard", tel:"+1 386-254-7555", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Brownie's Dog Park", cat:"parque", lat:29.221476, lng:-81.021382, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "daytona-beach-shores": {nombre:"Daytona Beach Shores", centro:[29.176093, -80.982832], tz:"America/New_York", lugares:[
  {n:"Sky's the Limit Grooming Salon & Spa", cat:"peluqueria", lat:29.160336, lng:-80.974755, dir:"South Atlantic Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "debary": {nombre:"DeBary", centro:[28.88306, -81.308838], tz:"America/New_York", lugares:[
  {n:"Newman Veterinary Centers", cat:"vet", lat:28.895575, lng:-81.272867, dir:"1200 Deltona Boulevard, #10", tel:"+1-386-860-5335", horas:[9.0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "decatur": {nombre:"Decatur", centro:[34.60602, -86.983817], tz:"America/Chicago", lugares:[
  {n:"Beltline Animal Clinic", cat:"vet", lat:34.5853, lng:-87.024274, dir:"2218 Beltline Road Southwest", tel:"+1-256-350-6222", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.558708, lng:-86.969307, dir:"1241 Point Malard Parkway", tel:"+1 256-301-4519", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Decatur Banfield Pet Hospital", cat:"vet", lat:34.558572, lng:-86.969323, dir:"1241 Point Mallard Parkway", tel:"+1 256-301-6899", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Wolverine Small Dog Park", cat:"parque", lat:34.586018, lng:-86.942284, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wolverine Large Dog Park", cat:"parque", lat:34.586066, lng:-86.941512, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "decatur-georgia": {nombre:"Decatur", centro:[33.773758, -84.296069], tz:"America/New_York", lugares:[
  {n:"Adair Dog Park", cat:"parque", lat:33.771902, lng:-84.304908, dir:"716 West Trinity Place", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Village Vets", cat:"vet", lat:33.775755, lng:-84.299774, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Church Street Animal Hospital", cat:"vet", lat:33.778931, lng:-84.294643, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rex & Roxy's", cat:"tienda", lat:33.771958, lng:-84.284285, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oakhurst Dog Park", cat:"parque", lat:33.760252, lng:-84.309983, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Skiptown - Atlanta", cat:"parque", lat:33.759133, lng:-84.33217, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kirkwood Dog Park", cat:"parque", lat:33.755655, lng:-84.331199, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "decherd": {nombre:"Decherd", centro:[35.209805, -86.079429], tz:"America/Chicago", lugares:[
  {n:"Town & Country Veterinary Hospital", cat:"vet", lat:35.217875, lng:-86.099477, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "deep-creek": {nombre:"Deep Creek", centro:[27.016849, -82.017813], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:27.003661, lng:-82.053058, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:27.01699, lng:-82.056815, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "deerfield-beach": {nombre:"Deerfield Beach", centro:[26.318342, -80.099631], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:26.320004, lng:-80.149297, dir:"3551 West Hillsboro Boulevard", tel:"+1 954-570-8913", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Woofing Waters Dog Park", cat:"parque", lat:26.31636, lng:-80.166799, dir:"401 S POWERLINE RD.", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:26.316708, lng:-80.091455, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Deerfield Beach Animal Hospital - Vetco Total Care", cat:"vet", lat:26.320001, lng:-80.149297, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "deland": {nombre:"DeLand", centro:[29.028105, -81.303418], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:29.055881, lng:-81.303846, dir:"1511 North Woodland Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw Paw Dog Park", cat:"parque", lat:29.0181, lng:-81.299531, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"DeLand Animal Hospital", cat:"refugio", lat:29.06335, lng:-81.261951, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "delray-beach": {nombre:"Delray Beach", centro:[26.461462, -80.07282], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:26.438342, lng:-80.077703, dir:"510 Linton Boulevard", tel:"+1 561-330-3760", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Barkingham Palace", cat:"refugio", lat:26.480646, lng:-80.06586, dir:"1551 Federal Highway", tel:null, horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Salty Dog Saloon", cat:"peluqueria", lat:26.468287, lng:-80.07007, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:26.439076, lng:-80.070247, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake Ida Dog Park", cat:"parque", lat:26.482055, lng:-80.083975, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:26.439184, lng:-80.08188, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Ave Animal Hospital", cat:"vet", lat:26.458931, lng:-80.121287, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shampoodles Pet Grooming", cat:"peluqueria", lat:26.458998, lng:-80.125653, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grooming is a Dream", cat:"peluqueria", lat:26.438536, lng:-80.120327, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "deltaville": {nombre:"Deltaville", centro:[37.554857, -76.336888], tz:"America/New_York", lugares:[
  {n:"Hartfield Animal Hospital", cat:"vet", lat:37.551531, lng:-76.448458, dir:"10948 General Puller Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "deltona": {nombre:"Deltona", centro:[28.904843, -81.227312], tz:"America/New_York", lugares:[
  {n:"Cohen Veterinary Cetner", cat:"vet", lat:28.92978, lng:-81.185411, dir:"2879 Elkcam Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pine Ridge Pet Clinic", cat:"vet", lat:28.890222, lng:-81.164634, dir:"940 Howland Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:28.88241, lng:-81.239959, dir:null, tel:null, horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Island Walk Dog Park", cat:"parque", lat:28.935886, lng:-81.202786, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "demopolis": {nombre:"Demopolis", centro:[32.517828, -87.83682], tz:"America/Chicago", lugares:[
  {n:"Demopolis Animal Clinic", cat:"vet", lat:32.490389, lng:-87.860792, dir:"1624 US-80 W", tel:"+1-334-289-1839", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"}
 ]},
 "denton-north-carolina": {nombre:"Denton", centro:[35.633471, -80.115881], tz:"America/New_York", lugares:[
  {n:"Denton Animal Hospital", cat:"vet", lat:35.636316, lng:-80.107252, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "destin": {nombre:"Destin", centro:[30.393534, -86.495783], tz:"America/Chicago", lugares:[
  {n:"Destin Dog Park", cat:"parque", lat:30.390084, lng:-86.458988, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dickson-tennessee": {nombre:"Dickson", centro:[36.076653, -87.38701], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:36.064321, lng:-87.381922, dir:"226 Thornton Drive", tel:"+1 615-326-0330", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "dillsboro-north-carolina": {nombre:"Dillsboro", centro:[35.370061, -83.250664], tz:"America/New_York", lugares:[
  {n:"Jackson County Animal Shelter", cat:"refugio", lat:35.37064, lng:-83.261432, dir:"84 Green Energy Park Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Smokey Mountain Pet Services", cat:"peluqueria", lat:35.371134, lng:-83.243411, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jackson County Dog Park", cat:"parque", lat:35.371584, lng:-83.263085, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dobson": {nombre:"Dobson", centro:[36.395689, -80.722567], tz:"America/New_York", lugares:[
  {n:"Happy Tails Grooming and Boarding", cat:"peluqueria", lat:36.395823, lng:-80.724254, dir:"115 N Crutchfield St", tel:"+1 336-386-3861", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dobson Veterinary Hospital", cat:"vet", lat:36.398097, lng:-80.722425, dir:"304 North White Street", tel:"+13363568282", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Surry County Animal Shelter", cat:"refugio", lat:36.420236, lng:-80.7147, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "doctor-phillips": {nombre:"Doctor Phillips", centro:[28.46086, -81.49148], tz:"America/New_York", lugares:[
  {n:"Runway Pet Grooming", cat:"peluqueria", lat:28.45279, lng:-81.476055, dir:"7717 Turkey Lake Road", tel:"+1-407-351-9181", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "doral": {nombre:"Doral", centro:[25.819542, -80.35533], tz:"America/New_York", lugares:[
  {n:"Bark Square", cat:"tienda", lat:25.823762, lng:-80.336683, dir:"8600 Northwest 56th Street", tel:"+1-786-401-7748", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:25.790091, lng:-80.367789, dir:"10610 Northwest 19th Street", tel:"+1 305-513-8464", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Grooming Sr. Dog Services", cat:"peluqueria", lat:25.764578, lng:-80.373241, dir:"10922 Southwest 4th Street", tel:"+1-786-362-1824", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Peluqueria Canina Sr Dog Services", cat:"peluqueria", lat:25.76525, lng:-80.373077, dir:null, tel:"+1 786-362-1824", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "doraville": {nombre:"Doraville", centro:[33.898158, -84.283256], tz:"America/New_York", lugares:[
  {n:"North Hills Animal Hospital", cat:"vet", lat:33.887008, lng:-84.255095, dir:"3362 Chamblee Tucker Road", tel:"+1-770-451-6740", horas:[11.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"LifeLine Animal Project Community Animal Center", cat:"vet", lat:33.887093, lng:-84.259045, dir:null, tel:"+1-404-292-8800", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "doswell": {nombre:"Doswell", centro:[37.86014, -77.464149], tz:"America/New_York", lugares:[
  {n:"Kennel", cat:"refugio", lat:37.842041, lng:-77.442731, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dothan": {nombre:"Dothan", centro:[31.223728, -85.393438], tz:"America/New_York", lugares:[
  {n:"Dothan Animal Hospital", cat:"vet", lat:31.199886, lng:-85.398039, dir:"1846 South Oates Street", tel:"+1 334-793-9779", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"For Pet's Sake", cat:"tienda", lat:31.227993, lng:-85.429433, dir:"2701 West Main Street", tel:"+1 334 699 2072", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:31.246046, lng:-85.423486, dir:"3500 Ross Clark Circle", tel:"+1 334-678-1288", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Southern Regional Veterinary Specialists", cat:"vet", lat:31.232771, lng:-85.43524, dir:"301 Westgate Parkway", tel:"+1 334 699 7787", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wags & Whiskers", cat:"peluqueria", lat:31.181584, lng:-85.402522, dir:"3134 South Oates Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "douglasville": {nombre:"Douglasville", centro:[33.751497, -84.747714], tz:"America/New_York", lugares:[
  {n:"Rover Makeover Grooming", cat:"peluqueria", lat:33.761689, lng:-84.725678, dir:"11955 Veterans Memorial Hwy", tel:"+1-770-947-0001", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.726309, lng:-84.734097, dir:"2940 Chapel Hill Road", tel:"+1 770-942-3326", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"L & R Alpaca Haven Farm", cat:"refugio", lat:33.769748, lng:-84.784161, dir:"1320 Dorris Road", tel:"+1-404-408-4635", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:33.722738, lng:-84.763214, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hwy 5 Animal Hospital", cat:"vet", lat:33.715056, lng:-84.767216, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "drayton-south-carolina": {nombre:"Drayton", centro:[34.970611, -81.905514], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:34.96788, lng:-81.888692, dir:"1931 East Main Street", tel:"+1 864-542-2350", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Eastside Animal Hospital", cat:"vet", lat:34.963957, lng:-81.900239, dir:"1496 East Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Drayton Mills Lofts dog park", cat:"parque", lat:34.971883, lng:-81.910736, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dry-ridge": {nombre:"Dry Ridge", centro:[38.682012, -84.589943], tz:"America/New_York", lugares:[
  {n:"Summer Hill Training Center", cat:"refugio", lat:38.709232, lng:-84.601916, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dublin-virginia": {nombre:"Dublin", centro:[37.104641, -80.685056], tz:"America/New_York", lugares:[
  {n:"Community Animal Hospital", cat:"vet", lat:37.104004, lng:-80.687236, dir:"190 Broad Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "duluth": {nombre:"Duluth", centro:[34.002857, -84.144105], tz:"America/New_York", lugares:[
  {n:"Planned PEThood", cat:"vet", lat:34.006203, lng:-84.134714, dir:"2860 Buford Highway", tel:"+1-678-561-3491", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.952778, lng:-84.137161, dir:"3803 Venture Drive Northwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pleasant Hill Animal Hospital", cat:"vet", lat:33.979409, lng:-84.154605, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dumbarton": {nombre:"Dumbarton", centro:[37.61385, -77.497859], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:37.587878, lng:-77.502723, dir:"5515 West Broad Street", tel:"+1 804-282-6455", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"River City Veterinary Hospital", cat:"vet", lat:37.586155, lng:-77.49955, dir:"5305 West Broad Street", tel:"+1 804-716-4700", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Libbie Mill Dog Park", cat:"parque", lat:37.588797, lng:-77.496122, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dumfries": {nombre:"Dumfries", centro:[38.56741, -77.326765], tz:"America/New_York", lugares:[
  {n:"Pooch Purrfect Pet Spa", cat:"peluqueria", lat:38.567497, lng:-77.327052, dir:"17742 Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Northern Virginia", cat:"refugio", lat:38.562119, lng:-77.327588, dir:"17983 Dumfries Shopping Plaza", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dunbar-west-virginia": {nombre:"Dunbar", centro:[38.360651, -81.737348], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.334243, lng:-81.711881, dir:"73 RHL Boulevard South", tel:"+1 304-746-6275", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.319141, lng:-81.71528, dir:"2714 Mountaineer Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "duncan-south-carolina": {nombre:"Duncan", centro:[34.937896, -82.14511], tz:"America/New_York", lugares:[
  {n:"Peyton's Place", cat:"peluqueria", lat:34.927916, lng:-82.123662, dir:"700 East Main Street", tel:"+1-864-485-2422", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Spartan Animal Hospital", cat:"vet", lat:34.953839, lng:-82.180319, dir:"13220 East Wade Hampton Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Ultimate Pet Lodge", cat:"refugio", lat:34.986347, lng:-82.175187, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dunean": {nombre:"Dunean", centro:[34.82484, -82.41929], tz:"America/New_York", lugares:[
  {n:"Royal Hedgehogs", cat:"tienda", lat:34.810625, lng:-82.425961, dir:"10 Kathryan Circle", tel:"+1-864-300-2249", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Barkery Bistro", cat:"tienda", lat:34.824654, lng:-82.393047, dir:"2123 Augusta Street", tel:"+1-864-236-1503", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Augusta Road Animal Hospital", cat:"vet", lat:34.827533, lng:-82.399441, dir:"10 West Lewis Plaza", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:34.825476, lng:-82.396825, dir:"1922 Augusta Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dunedin": {nombre:"Dunedin", centro:[28.011663, -82.789379], tz:"America/New_York", lugares:[
  {n:"Dunedin Pet Supply", cat:"tienda", lat:28.018548, lng:-82.774825, dir:"1045 Main Street", tel:"+1-727-601-4661", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Achieva Paw Park", cat:"parque", lat:28.016315, lng:-82.758521, dir:"1659 Achieva Way", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital Of Dunedin", cat:"vet", lat:28.02259, lng:-82.771318, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dunn": {nombre:"Dunn", centro:[35.30769, -78.609326], tz:"America/New_York", lugares:[
  {n:"Vets For Pets Animal Hospital", cat:"vet", lat:35.30038, lng:-78.595232, dir:"17 J & J Lane", tel:"+19108923540", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.322581, lng:-78.640434, dir:"2450 West Cumberland Street", tel:"+1-910-591-5265", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "dunn-loring": {nombre:"Dunn Loring", centro:[38.893445, -77.221648], tz:"America/New_York", lugares:[
  {n:"Horners Pet Salon", cat:"tienda", lat:38.887965, lng:-77.243719, dir:"Cedar Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dunnellon": {nombre:"Dunnellon", centro:[29.049143, -82.460933], tz:"America/New_York", lugares:[
  {n:"Pair Of The Dogs Grooming", cat:"peluqueria", lat:29.052055, lng:-82.437621, dir:null, tel:"+1 352-322-8370", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dunwoody": {nombre:"Dunwoody", centro:[33.946379, -84.334269], tz:"America/New_York", lugares:[
  {n:"Dunwoody Animal Hospital", cat:"vet", lat:33.946451, lng:-84.335028, dir:"5450 Chamblee Dunwoody Road", tel:"+1-770-394-4030", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.926789, lng:-84.346805, dir:"128 Perimeter Center West", tel:"+1 770-481-0043", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Dunwoody Village", cat:"vet", lat:33.950586, lng:-84.333177, dir:null, tel:"+1-770-393-8936", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:33.933227, lng:-84.334794, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Country Dog Market & Groomer", cat:"peluqueria", lat:33.921704, lng:-84.314746, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "durbin": {nombre:"Durbin", centro:[30.087465, -81.461194], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:30.095232, lng:-81.52004, dir:"675 Durbin Pavilion Drive", tel:"+1-904-417-9033", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Forever Vets Animal Hospital", cat:"vet", lat:30.107695, lng:-81.414642, dir:"80 Pine Lake Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nocatee Trails for Tails Park", cat:"parque", lat:30.098532, lng:-81.413636, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:30.109647, lng:-81.418521, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crosswater Animal Hospital", cat:"vet", lat:30.111086, lng:-81.419489, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Forever Vets Animal Hospital", cat:"vet", lat:30.102059, lng:-81.522104, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hopsital Grooming", cat:"vet", lat:30.058003, lng:-81.53216, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ark Animal Hospital", cat:"vet", lat:30.142328, lng:-81.516309, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "durham-north-carolina": {nombre:"Durham", centro:[35.996653, -78.901805], tz:"America/New_York", lugares:[
  {n:"Bull City Veterinary Hospital", cat:"vet", lat:35.999623, lng:-78.90458, dir:"605 Fernway Avenue", tel:"+1-919-589-4952", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Unleashed, the Dog & Cat Store", cat:"tienda", lat:36.000796, lng:-78.910227, dir:"1000 West Main Street", tel:"+1-919-908-1887", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Urban Tails Veterinary Hospital", cat:"vet", lat:35.991411, lng:-78.889572, dir:"800 Taylor Street", tel:"+19842192579", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Willow Oak Veterinary Hospital", cat:"vet", lat:36.01457, lng:-78.919067, dir:"1012 Broad Street", tel:"+1-919-908-6744", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Quality Pet Grooming", cat:"peluqueria", lat:36.022551, lng:-78.918544, dir:"1424 Broad Street", tel:"+1-919-598-7882", horas:[12.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.029787, lng:-78.919738, dir:"1720 North Pointe Drive", tel:"+1 919-471-6474", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.96682, lng:-78.957354, dir:"4011 Durham Chapel Hill Boulevard", tel:"+1 919-401-2464", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Unleashed, the Dog & Cat Store", cat:"tienda", lat:35.962997, lng:-78.957978, dir:"4215 University Drive", tel:"+1-919-294-4608", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Cornwallis Road Animal Hospital", cat:"vet", lat:35.967711, lng:-78.92234, dir:"206 West Cornwallis Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Duke Lemur Center", cat:"zoo", lat:35.994195, lng:-78.962474, dir:null, tel:"+1 919 401 7240", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Downtown Durham Dog Park", cat:"parque", lat:35.99677, lng:-78.895553, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Farmyard", cat:"zoo", lat:36.030185, lng:-78.898221, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Campus Walk Dog Park", cat:"parque", lat:36.011217, lng:-78.950998, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies", cat:"tienda", lat:36.018832, lng:-78.948036, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Copper Run Dog Park", cat:"parque", lat:35.943354, lng:-78.829127, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eno Animal Hospital", cat:"vet", lat:36.093232, lng:-78.909292, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carolina Arbors Small Dog Park", cat:"parque", lat:35.935268, lng:-78.788579, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dyersburg": {nombre:"Dyersburg", centro:[36.032522, -89.386638], tz:"America/Chicago", lugares:[
  {n:"The Ocean Floor", cat:"tienda", lat:36.03276, lng:-89.384135, dir:"210 East Court Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dyersburg Dog Park", cat:"parque", lat:36.03018, lng:-89.38784, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws & Furs", cat:"peluqueria", lat:36.032122, lng:-89.39164, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dyer County Animal Hospital", cat:"vet", lat:36.057886, lng:-89.386379, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"petsense", cat:"tienda", lat:36.058152, lng:-89.381838, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pet Stop", cat:"tienda", lat:36.064064, lng:-89.388496, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "earlysville": {nombre:"Earlysville", centro:[38.157634, -78.48279], tz:"America/New_York", lugares:[
  {n:"Earlysville Animal Hospital", cat:"vet", lat:38.156207, lng:-78.483243, dir:"505 Saint Francis Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "earthaven-ecovillage": {nombre:"Earthaven Ecovillage", centro:[35.519623, -82.202783], tz:"America/New_York", lugares:[
  {n:"Cedar Creek Stables", cat:"refugio", lat:35.486772, lng:-82.133336, dir:"542 Cedar Creek Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "easley": {nombre:"Easley", centro:[34.826928, -82.581705], tz:"America/New_York", lugares:[
  {n:"Zac's Reef", cat:"tienda", lat:34.817544, lng:-82.605145, dir:"200 Ross Avenue", tel:"+18643079369", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.828526, lng:-82.547584, dir:"139 Rolling Hills Circle", tel:"+1 864-442-4012", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Langston Venerinary Clinic", cat:"vet", lat:34.831228, lng:-82.60241, dir:"103 North A Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "east-ellijay": {nombre:"East Ellijay", centro:[34.683975, -84.472705], tz:"America/New_York", lugares:[
  {n:"VCA Appalachian Animal Hospital", cat:"vet", lat:34.686119, lng:-84.471553, dir:"125 Mulberry Street", tel:"+1-706-635-7357", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Ellijay Animal Hospital", cat:"vet", lat:34.684731, lng:-84.483477, dir:"89 Gudger Street", tel:"+1-706-698-7387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gilmer County Animal Shelter", cat:"refugio", lat:34.656713, lng:-84.442212, dir:"4152 GA 52", tel:"+1-706-635-2166", horas:[13.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "east-lake-florida": {nombre:"East Lake", centro:[27.988067, -82.393339], tz:"America/New_York", lugares:[
  {n:"Banfield Pet Hospital", cat:"vet", lat:27.99646, lng:-82.442164, dir:"1510 East Hillsborough Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "east-naples": {nombre:"East Naples", centro:[26.133441, -81.763021], tz:"America/New_York", lugares:[
  {n:"Shy Wolf Sanctuary", cat:"zoo", lat:26.207887, lng:-81.661723, dir:"1161 27th Street Southwest", tel:"+1-855-749-9653", horas:[9.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:26.137276, lng:-81.747872, dir:"4880 Davis Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society Naples", cat:"vet", lat:26.156353, lng:-81.767973, dir:null, tel:"+1-239-643-2143", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Magnolia Paw Spa", cat:"peluqueria", lat:26.138848, lng:-81.772036, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetCare Hospital", cat:"vet", lat:26.118664, lng:-81.756747, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lucky Dog Company", cat:"refugio", lat:26.162123, lng:-81.766331, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Naples Cat Alliance", cat:"vet", lat:26.17559, lng:-81.71742, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Love Pets Grooming & More", cat:"peluqueria", lat:26.182356, lng:-81.708855, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw-Paw Patch Pet Grooming", cat:"peluqueria", lat:26.209466, lng:-81.750632, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Barrier Reef", cat:"tienda", lat:26.210297, lng:-81.750126, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Marquesa Veterinary Clinic", cat:"vet", lat:26.210407, lng:-81.750129, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sutherland General Store", cat:"tienda", lat:26.187677, lng:-81.688742, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pine Gate Veterinary Center", cat:"vet", lat:26.212848, lng:-81.688666, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "east-ridge": {nombre:"East Ridge", centro:[35.014241, -85.2519], tz:"America/New_York", lugares:[
  {n:"Chattaneuter", cat:"vet", lat:35.016369, lng:-85.207398, dir:"5950 Brainerd Road", tel:"+1-423-531-7729", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic East", cat:"vet", lat:35.016525, lng:-85.162419, dir:"1414 Gunbarrel Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Four Paws & Tail Pet Bakery", cat:"tienda", lat:35.003443, lng:-85.149225, dir:"8126 E Brainerd Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fish Mania", cat:"tienda", lat:34.995789, lng:-85.239112, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:35.017654, lng:-85.204474, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ratznstakes", cat:"tienda", lat:35.018109, lng:-85.194108, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "east-spencer": {nombre:"East Spencer", centro:[35.681806, -80.43228], tz:"America/New_York", lugares:[
  {n:"T.M Stanback Barnyard", cat:"zoo", lat:35.635693, lng:-80.349164, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "east-stone-gap": {nombre:"East Stone Gap", centro:[36.86702, -82.742253], tz:"America/New_York", lugares:[
  {n:"Powell Valley Animal Hospital", cat:"vet", lat:36.85873, lng:-82.753379, dir:"4501 Aerial Way", tel:"+1-276-524-1214", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "eden-north-carolina": {nombre:"Eden", centro:[36.488472, -79.766703], tz:"America/New_York", lugares:[
  {n:"Silver Paw Pet Resort", cat:"refugio", lat:36.528352, lng:-79.765252, dir:"7741 NC-14", tel:"+13366232257", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rockingham County Humanine Society", cat:"vet", lat:36.501934, lng:-79.758967, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eden Vet", cat:"vet", lat:36.47587, lng:-79.7385, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "edgewater-florida": {nombre:"Edgewater", centro:[28.988875, -80.902276], tz:"America/New_York", lugares:[
  {n:"All Pet Grooming", cat:"peluqueria", lat:28.992112, lng:-80.907729, dir:"105 North Ridgewood Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "edinburg-virginia": {nombre:"Edinburg", centro:[38.820947, -78.565845], tz:"America/New_York", lugares:[
  {n:"Shenandoah County Animal Shelter", cat:"refugio", lat:38.83927, lng:-78.545551, dir:"268 Landfill Road", tel:"+1-540-984-8955", horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Heavenly Heart Farm & Mini Petting Zoo", cat:"zoo", lat:38.840265, lng:-78.658874, dir:"3795 Swover Creek Road", tel:"+1 540 984 3925", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "egypt-lake": {nombre:"Egypt Lake", centro:[28.007109, -82.500904], tz:"America/New_York", lugares:[
  {n:"Wellswood Midtown Animal Hospital", cat:"vet", lat:27.978073, lng:-82.484448, dir:"4145 North Armenia Avenue", tel:"+1-813-877-1979", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Health Mutt", cat:"tienda", lat:27.992329, lng:-82.459153, dir:"5023 North Florida Avenue", tel:"+1-813-231-3137", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Two Shepherds Taproom", cat:"parque", lat:27.990379, lng:-82.508607, dir:"4813 North Grady Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"ZooTampa at Lowry Park", cat:"zoo", lat:28.013977, lng:-82.469928, dir:"1101 West Sligh Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Henry and Ola Park Dog Park", cat:"parque", lat:27.999324, lng:-82.465482, dir:"502 West Henry Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"James Urbanski Dog Park", cat:"parque", lat:27.988317, lng:-82.504291, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tampa's Lowry Park Zoo", cat:"zoo", lat:28.014267, lng:-82.47003, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petting zoo", cat:"zoo", lat:28.014712, lng:-82.469867, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Coastal Animal Clinic", cat:"vet", lat:27.965441, lng:-82.503807, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elberton": {nombre:"Elberton", centro:[34.111223, -82.867084], tz:"America/New_York", lugares:[
  {n:"Elbert County Animal Control", cat:"refugio", lat:34.135136, lng:-82.785762, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elgin-south-carolina": {nombre:"Elgin", centro:[34.170983, -80.794252], tz:"America/New_York", lugares:[
  {n:"Wild Birds Unlimited", cat:"tienda", lat:34.133896, lng:-80.881779, dir:"110 Forum Drive", tel:"+1-803-736-4810", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Northeast Animal Clinic", cat:"vet", lat:34.119154, lng:-80.879734, dir:"10171 Two Notch Road", tel:"+1-803-736-4703", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.116367, lng:-80.878641, dir:"10136 Two Notch Road", tel:"+1 803-419-1342", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Spears Creek Veterinary Clinic", cat:"vet", lat:34.105091, lng:-80.833206, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Palmetto Regional Emergency Hospital For Animals", cat:"vet", lat:34.124119, lng:-80.872557, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Muddy Paws", cat:"peluqueria", lat:34.142835, lng:-80.884828, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:34.123468, lng:-80.872605, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lucky Dog Barbershop", cat:"peluqueria", lat:34.120103, lng:-80.878514, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elizabeth-city": {nombre:"Elizabeth City", centro:[36.301019, -76.22037], tz:"America/New_York", lugares:[
  {n:"Lannon's Animal Hospital", cat:"vet", lat:36.288332, lng:-76.243783, dir:"100 Lannon's Ln", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K9 Klipz", cat:"peluqueria", lat:36.300317, lng:-76.220466, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bee's Beauty Pets", cat:"tienda", lat:36.28794, lng:-76.253435, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elizabeth-west-virginia": {nombre:"Elizabeth", centro:[39.063375, -81.395273], tz:"America/New_York", lugares:[
  {n:"Sherri’s Waggin’ Tails", cat:"tienda", lat:39.062755, lng:-81.395096, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elizabethton": {nombre:"Elizabethton", centro:[36.348776, -82.210762], tz:"America/New_York", lugares:[
  {n:"Auntie A's Barkery and Boutique", cat:"tienda", lat:36.347737, lng:-82.215519, dir:"520 East Elk Avenue", tel:"+1-423-512-0317", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Elizabethton Veterinary Clinic", cat:"vet", lat:36.338499, lng:-82.20704, dir:"1261 Veterans Memorial Parkway", tel:"+1-423-543-1271", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Petsense by Tractor Supply", cat:"tienda", lat:36.348313, lng:-82.238186, dir:"776 West Elk Avenue", tel:"+1-423-518-1055", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Elizabethton-Carter County Animal Shelter", cat:"refugio", lat:36.356561, lng:-82.244295, dir:"135 Sycamore Shoals Drive", tel:"+14235476359", horas:[10.0, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Gina's Scissor Works", cat:"peluqueria", lat:36.352541, lng:-82.210824, dir:"829 Broad Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elizabethtown-kentucky": {nombre:"Elizabethtown", centro:[37.693952, -85.859128], tz:"America/Chicago", lugares:[
  {n:"Helmwood Veterinary Clinic", cat:"vet", lat:37.70838, lng:-85.873105, dir:"804 North Dixie Highway", tel:"+1-270-737-1818", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Feeders Pet Supply", cat:"tienda", lat:37.729538, lng:-85.881373, dir:"1610 Ring Road", tel:"+1-270-769-2357", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:37.733465, lng:-85.891203, dir:"209 Towne Drive", tel:"+1-270-506-3570", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:37.736498, lng:-85.889042, dir:"1820 North Dixie Avenue", tel:"+1-270-370-3756", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"To the Dogs Grooming Salon", cat:"peluqueria", lat:37.717353, lng:-85.876272, dir:"1111 North Dixie Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Elizabethtown Animal Hospital", cat:"vet", lat:37.707475, lng:-85.90694, dir:"831 Ring Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heartland Veterinary Hospital", cat:"vet", lat:37.724107, lng:-85.879705, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arlington Park Apartments Dog Park", cat:"parque", lat:37.73098, lng:-85.902217, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elkin": {nombre:"Elkin", centro:[36.24405, -80.850797], tz:"America/New_York", lugares:[
  {n:"Animal Ark of Elkin", cat:"vet", lat:36.267844, lng:-80.843202, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elkton-virginia": {nombre:"Elkton", centro:[38.407908, -78.623633], tz:"America/New_York", lugares:[
  {n:"Green Meadows Veterinary Services", cat:"vet", lat:38.399155, lng:-78.667059, dir:"13800 Rockingham Pike", tel:"+15402981008", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ellijay": {nombre:"Ellijay", centro:[34.695028, -84.482739], tz:"America/New_York", lugares:[
  {n:"South Paw Natural Pets", cat:"tienda", lat:34.727073, lng:-84.431408, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elmont-virginia": {nombre:"Elmont", centro:[37.711255, -77.492485], tz:"America/New_York", lugares:[
  {n:"Ashcake Veterinary Clinic", cat:"vet", lat:37.692481, lng:-77.437571, dir:null, tel:null, horas:[8.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Pups 'N Sudz", cat:"peluqueria", lat:37.690727, lng:-77.436632, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elon": {nombre:"Elon", centro:[36.102913, -79.506689], tz:"America/New_York", lugares:[
  {n:"K-9 Corner at Schmidt Park", cat:"parque", lat:36.091411, lng:-79.523179, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:36.082075, lng:-79.484805, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elsmere-kentucky": {nombre:"Elsmere", centro:[39.012561, -84.604666], tz:"America/New_York", lugares:[
  {n:"Heusing Veterinary Clinic", cat:"vet", lat:39.014893, lng:-84.604329, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eno": {nombre:"Eno", centro:[36.041157, -79.014273], tz:"America/New_York", lugares:[
  {n:"Sunny Acres Pet Resort", cat:"refugio", lat:36.034399, lng:-78.995519, dir:"5908 US 70", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Paw Animal Hospital", cat:"vet", lat:36.083673, lng:-78.931344, dir:null, tel:null, horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "enon-virginia": {nombre:"Enon", centro:[37.3307, -77.32276], tz:"America/New_York", lugares:[
  {n:"Bermuda Hundred Veterinary Hospital", cat:"vet", lat:37.348744, lng:-77.354415, dir:"354 East Hundred Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ensley": {nombre:"Ensley", centro:[30.518807, -87.272751], tz:"America/Chicago", lugares:[
  {n:"Barbara's Small Breed Pet Grooming", cat:"peluqueria", lat:30.543151, lng:-87.261689, dir:"10120 Chemstrand Road", tel:"+1-850-477-7129", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Clinic", cat:"vet", lat:30.598818, lng:-87.312752, dir:"450 US-29", tel:"+1-850-968-0226", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "erlanger": {nombre:"Erlanger", centro:[39.016728, -84.600777], tz:"America/New_York", lugares:[
  {n:"Erlanger Pet Hospital", cat:"vet", lat:39.017239, lng:-84.599685, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Erlanger Pet Resort and Day Spa", cat:"refugio", lat:39.01734, lng:-84.599573, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Edgewood Animal Clinic", cat:"vet", lat:39.020854, lng:-84.594608, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "erwin-tennessee": {nombre:"Erwin", centro:[36.145108, -82.416805], tz:"America/New_York", lugares:[
  {n:"Unicoi County Animal Shelter", cat:"refugio", lat:36.143778, lng:-82.425779, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Town of Erwin Animal Shelter", cat:"refugio", lat:36.143286, lng:-82.426111, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "estero": {nombre:"Estero", centro:[26.438147, -81.806754], tz:"America/New_York", lugares:[
  {n:"Animal Eye Doctors", cat:"vet", lat:26.430739, lng:-81.802385, dir:"9180 Estero Park Commons Blvd., Ste 4", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Florida Veterinary Referral Center & 24-Hour Emergency and Critical Care", cat:"vet", lat:26.429828, lng:-81.801409, dir:"9220 Estero Park Commons Blvd. Suite 7", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Estero Animal Hospital", cat:"vet", lat:26.430926, lng:-81.795878, dir:"9550 Corkscrew Rd.", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K-9 Corral (small)", cat:"parque", lat:26.426656, lng:-81.799298, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K-9 Corral (large)", cat:"parque", lat:26.426547, lng:-81.799179, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"HealthyPooch Boutique & Bakery", cat:"tienda", lat:26.434723, lng:-81.775553, dir:null, tel:null, horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "etowah": {nombre:"Etowah", centro:[35.323646, -84.524828], tz:"America/New_York", lugares:[
  {n:"Zen Spa for Dogs", cat:"peluqueria", lat:35.324375, lng:-84.525037, dir:"708 Tennessee Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eufaula": {nombre:"Eufaula", centro:[31.891272, -85.145488], tz:"America/New_York", lugares:[
  {n:"Kline Veterinary Clinic", cat:"vet", lat:31.797681, lng:-85.166391, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eustis": {nombre:"Eustis", centro:[28.852767, -81.685353], tz:"America/New_York", lugares:[
  {n:"Animal Medical Center", cat:"vet", lat:28.846808, lng:-81.690091, dir:"400 West Woodward Ave", tel:"+1 352-589-1108", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Carla Gnann-Thompson Memorial Dog Park", cat:"parque", lat:28.846041, lng:-81.669588, dir:"721 Hill Street", tel:null, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:28.820685, lng:-81.677811, dir:null, tel:null, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "evans-georgia": {nombre:"Evans", centro:[33.543736, -82.128362], tz:"America/New_York", lugares:[
  {n:"Evans Animal Hospital", cat:"vet", lat:33.540296, lng:-82.121123, dir:"4317 Evans to Locks Road", tel:"+1-706-868-0479", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.524188, lng:-82.11752, dir:"4209 Washington Road", tel:"+1 706-869-0737", horas:[8.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Caremore Animal Hospital", cat:"vet", lat:33.552101, lng:-82.088941, dir:"211 Blackstone Camp Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Evans Towne Center Dog Park", cat:"parque", lat:33.541942, lng:-82.129587, dir:null, tel:null, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery And Grooming", cat:"peluqueria", lat:33.541185, lng:-82.131699, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Plus Dog Grooming", cat:"tienda", lat:33.5424, lng:-82.107119, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogma", cat:"tienda", lat:33.542541, lng:-82.106831, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Walden Glen Dog Park", cat:"parque", lat:33.526027, lng:-82.140768, dir:null, tel:null, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Hall's Balls & Exotics Pet Emporium", cat:"tienda", lat:33.508792, lng:-82.141422, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grooming & Boarding", cat:"peluqueria", lat:33.506554, lng:-82.139505, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heartsong Spay-Neuter Clinic", cat:"vet", lat:33.506548, lng:-82.139568, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "exmore": {nombre:"Exmore", centro:[37.531807, -75.822991], tz:"America/New_York", lugares:[
  {n:"Dave's Pets", cat:"tienda", lat:37.525456, lng:-75.825256, dir:"3515 Main Street", tel:"+1-757-442-7442", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "experiment": {nombre:"Experiment", centro:[33.265392, -84.28159], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.275562, lng:-84.293714, dir:"1625 North Expressway", tel:"+1 770-229-7122", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"North Griffin Animal Hospital", cat:"vet", lat:33.28242, lng:-84.29247, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fair-lakes": {nombre:"Fair Lakes", centro:[38.863323, -77.382627], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.858568, lng:-77.389134, dir:"12971 Fair Lakes Shopping Center", tel:"+1 703-802-1027", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Fairfax County Animal Shelter", cat:"refugio", lat:38.856309, lng:-77.372623, dir:"4500 West Ox Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fair-oaks": {nombre:"Fair Oaks", centro:[33.916492, -84.544655], tz:"America/New_York", lugares:[
  {n:"Cobb County Animal Services", cat:"refugio", lat:33.904064, lng:-84.585758, dir:"1060 Al Bishop Drive Southeast", tel:"+1-770-499-4136", horas:[10.5, 16.5], nota:"Dato de OpenStreetMap"}
 ]},
 "fair-oaks-virginia": {nombre:"Fair Oaks", centro:[38.865574, -77.359307], tz:"America/New_York", lugares:[
  {n:"Pender Veterinary Centre", cat:"vet", lat:38.867051, lng:-77.364133, dir:"4001 Legato Road", tel:null, horas:[6.5, 21.5], nota:"Dato de OpenStreetMap"}
 ]},
 "fairburn": {nombre:"Fairburn", centro:[33.567056, -84.581042], tz:"America/New_York", lugares:[
  {n:"Animal Medical Clinic of Fairburn", cat:"vet", lat:33.524001, lng:-84.575817, dir:"8520 Senoia Road", tel:"+1-770-692-6034", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fairfax-station": {nombre:"Fairfax Station", centro:[38.800859, -77.32568], tz:"America/New_York", lugares:[
  {n:"Wild Bird Center", cat:"tienda", lat:38.799657, lng:-77.318751, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fairfax-virginia": {nombre:"Fairfax", centro:[38.846224, -77.306373], tz:"America/New_York", lugares:[
  {n:"Pup City", cat:"peluqueria", lat:38.848613, lng:-77.305052, dir:"3910 #100 University Drive", tel:"+1 703 383 3010", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Fairfax Veterinary Hospital", cat:"vet", lat:38.848847, lng:-77.303755, dir:"10396 Willard Way", tel:"+17035910222", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Lovers Vet", cat:"vet", lat:38.856495, lng:-77.314134, dir:"10696 Fairfax Boulevard", tel:"+1-703-691-2873", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.856291, lng:-77.314858, dir:"10708 Fairfax Boulevard", tel:"+1 703-352-3300", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Stahl Exotic Animal Veterinary Services", cat:"vet", lat:38.850713, lng:-77.330799, dir:"4105 Rust Road", tel:"+1-703-281-3750", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Commonwealth Animal Hospital", cat:"vet", lat:38.851349, lng:-77.319765, dir:"10860 Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:38.851875, lng:-77.326052, dir:"11039 Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westmore Dog Park", cat:"parque", lat:38.848364, lng:-77.327732, dir:"11000 Berry Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Superstar Puppies", cat:"tienda", lat:38.850299, lng:-77.334004, dir:"11213 Route 29", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tango Animal Hospital", cat:"vet", lat:38.850232, lng:-77.334598, dir:"11213 Route 29", tel:null, horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fairforest": {nombre:"Fairforest", centro:[34.956509, -82.010105], tz:"America/New_York", lugares:[
  {n:"Pet Vac Animal Hospital", cat:"vet", lat:34.916328, lng:-82.006975, dir:"2920 Reidville Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Classy Canines Pet Salon", cat:"peluqueria", lat:34.915489, lng:-82.005493, dir:"2811 Reidville Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westside Veterinary Clinic", cat:"vet", lat:34.915284, lng:-82.006929, dir:"2917 Reidville Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fairmont-west-virginia": {nombre:"Fairmont", centro:[39.484898, -80.142654], tz:"America/New_York", lugares:[
  {n:"Fido Dog Park", cat:"parque", lat:39.472458, lng:-80.125774, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fairmount": {nombre:"Fairmount", centro:[34.436201, -84.699935], tz:"America/New_York", lugares:[
  {n:"Shiloh Hill K-9 Inn", cat:"refugio", lat:34.415998, lng:-84.695364, dir:"30 Rascal Lane", tel:"+1-706-337-2799", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Iron Gait Percherons Draft Horse Rescue & Sanctuary", cat:"refugio", lat:34.401584, lng:-84.6225, dir:"114 Hancock Mountain Trail", tel:"+1-770-796-2598", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Hinton Milling Animal Feed Store", cat:"tienda", lat:34.481101, lng:-84.584769, dir:"9272 GA-53", tel:"+1-706-692-3626", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fairview-tennessee": {nombre:"Fairview", centro:[35.982007, -87.121395], tz:"America/Chicago", lugares:[
  {n:"PetSense", cat:"tienda", lat:35.974315, lng:-87.130466, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"White Oak Animal Hospital", cat:"vet", lat:35.999326, lng:-87.068983, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "falling-waters": {nombre:"Falling Waters", centro:[39.559264, -77.89083], tz:"America/New_York", lugares:[
  {n:"Classy Bitches Doggie Spaw", cat:"peluqueria", lat:39.547759, lng:-77.914057, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "falls-church": {nombre:"Falls Church", centro:[38.882334, -77.171091], tz:"America/New_York", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:38.88661, lng:-77.165239, dir:"108 West Jefferson Street", tel:"+1-571-356-9223", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petz Charm", cat:"peluqueria", lat:38.888421, lng:-77.180419, dir:"800 West Broad Street", tel:"+1-571-835-5530", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Livewell Animal Hospital", cat:"vet", lat:38.891125, lng:-77.185233, dir:"1025 West Broad Street", tel:"+1-571-544-9388", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Value Vet", cat:"vet", lat:38.891349, lng:-77.185974, dir:"1053 West Broad Street", tel:"+1-703-982-7400", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"InStyle Pet Grooming", cat:"peluqueria", lat:38.899679, lng:-77.15727, dir:"6504 Williamsburg Boulevard", tel:"+1-703-300-9738", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Avalon Chuch Dog Park", cat:"parque", lat:38.873692, lng:-77.169579, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "falmouth": {nombre:"Falmouth", centro:[38.676737, -84.330459], tz:"America/New_York", lugares:[
  {n:"Pendleton County Veterinary Hospital", cat:"vet", lat:38.678849, lng:-84.333342, dir:"204 Park Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "falmouth-virginia": {nombre:"Falmouth", centro:[38.324017, -77.468318], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.300699, lng:-77.506106, dir:"1421 Carl D Silver Parkway", tel:"+1 540-785-9851", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Loving Touch Animal Hospital", cat:"vet", lat:38.35227, lng:-77.457315, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:38.300552, lng:-77.506328, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fredericksburg Veterinary", cat:"vet", lat:38.301087, lng:-77.51256, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fantasy-harbour": {nombre:"Fantasy Harbour", centro:[33.718447, -78.932115], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.704911, lng:-78.919141, dir:"1301 Oak Forest Lane", tel:"+1 843-626-2164", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"River Oaks Animal Hospital", cat:"vet", lat:33.771569, lng:-78.868362, dir:"974 International Drive", tel:"+1 843-236-6080", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "farmville-virginia": {nombre:"Farmville", centro:[37.302471, -78.392381], tz:"America/New_York", lugares:[
  {n:"Three Oaks Pet Resort", cat:"refugio", lat:37.316729, lng:-78.435055, dir:"2740 Layne Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ridge Animal Hospital", cat:"vet", lat:37.285569, lng:-78.370387, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "farragut-tennessee": {nombre:"Farragut", centro:[35.884524, -84.153526], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:35.880955, lng:-84.157295, dir:"169 Brooklawn Street", tel:"+1 865-671-1864", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.900108, lng:-84.153669, dir:"11134 Parkside Drive", tel:"+1 865-675-1191", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Fabulous Fido", cat:"peluqueria", lat:35.896271, lng:-84.17382, dir:"620 North Campbell Station Road", tel:"+1-865-675-1100", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Emergency & Specialty Center of Knoxville", cat:"vet", lat:35.902517, lng:-84.12405, dir:"10213 Kingston Pike", tel:"+1-865-693-4440", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Pellissippi Veterinary Hospital", cat:"vet", lat:35.938883, lng:-84.148522, dir:"1727 Schaeffer Rd", tel:"+18656918387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland Knoxville", cat:"tienda", lat:35.913219, lng:-84.094587, dir:"9339 Kingston Pike", tel:"+1-865-766-2828", horas:[10.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Foxy Locks", cat:"peluqueria", lat:35.912929, lng:-84.092635, dir:"9309 Kingston Pike", tel:"+1-865-247-7712", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:35.910399, lng:-84.088519, dir:"9294 Kingston Pike", tel:"+1-865-690-2951", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Admiral Veterinary Hospital", cat:"vet", lat:35.86489, lng:-84.222899, dir:"204 Watt Road", tel:"+1-865-675-1833", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"JKS Aquatics", cat:"tienda", lat:35.912128, lng:-84.080595, dir:"146 South Peters Road", tel:"+1 865 3570580", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:35.915454, lng:-84.081145, dir:"138 North Peters Road", tel:"+1 865 6900220", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"West Bearden Veterinary Hospital", cat:"vet", lat:35.919875, lng:-84.074502, dir:"8706 Unicorn Drive", tel:"+1-865-690-4141", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Ricki's Pet Depot", cat:"tienda", lat:35.882144, lng:-84.163546, dir:"11505 Kingston Pike", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.900274, lng:-84.153574, dir:"11134 Parkside Drive", tel:null, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Concord Veterinary Hospital", cat:"vet", lat:35.872492, lng:-84.179179, dir:"11904 Kingston Pike", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Concord PetSafe Dog Park", cat:"parque", lat:35.864652, lng:-84.126982, dir:"10901 South Northshore Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Embassy Veterinary Center", cat:"vet", lat:35.874173, lng:-84.094993, dir:"9708 Westland Drive", tel:null, horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogs R Us", cat:"peluqueria", lat:35.912177, lng:-84.080621, dir:"120 South Peters Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hardin Valley Animal Hospital", cat:"vet", lat:35.95765, lng:-84.131958, dir:"10017 Hardin Valley Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Village Veterinary Medical Center", cat:"vet", lat:35.882984, lng:-84.158655, dir:null, tel:null, horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Heartstrings Pet Hospice", cat:"vet", lat:35.899581, lng:-84.128028, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dogs Only Area", cat:"parque", lat:35.864292, lng:-84.126624, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSafe Village Dog Park", cat:"parque", lat:35.913528, lng:-84.134753, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSafe Village", cat:"refugio", lat:35.913702, lng:-84.133854, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSafe Plumb Creek Dog Park", cat:"parque", lat:35.941741, lng:-84.128352, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark of the Town", cat:"tienda", lat:35.946186, lng:-84.104168, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fayetteville-north-carolina": {nombre:"Fayetteville", centro:[35.052576, -78.878292], tz:"America/New_York", lugares:[
  {n:"Naturally Unleashed", cat:"tienda", lat:35.029149, lng:-78.925287, dir:"3035-C Boone Trail Extension", tel:"+1 910 4864636", horas:[10.0, 20.25], nota:"Dato de OpenStreetMap"},
  {n:"LifeTime Pets", cat:"tienda", lat:35.081184, lng:-78.962129, dir:"4768 Yadkin Road", tel:"+1 910 8643457", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.057986, lng:-78.968867, dir:"2800 Freedom Parkway Road", tel:"+1 910-708-5001", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.053545, lng:-78.970784, dir:"2061 Skibo Road", tel:"+1 910-867-2300", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Riverbark Animal Hospital at Northgate", cat:"vet", lat:35.098874, lng:-78.878062, dir:"2921 Ramsey Street", tel:null, horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Naturally Unleashed", cat:"tienda", lat:35.063983, lng:-78.963645, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ferguson-kentucky": {nombre:"Ferguson", centro:[37.066744, -84.599941], tz:"America/New_York", lugares:[
  {n:"Feeders Pet Supply", cat:"tienda", lat:37.076196, lng:-84.616881, dir:"1250 S Highway 27", tel:null, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Midway Veterinary Hospital", cat:"vet", lat:37.048272, lng:-84.624801, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fern-park": {nombre:"Fern Park", centro:[28.649165, -81.35118], tz:"America/New_York", lugares:[
  {n:"Whisker Park", cat:"peluqueria", lat:28.623867, lng:-81.323339, dir:"5542 Lake Howell Road", tel:"+1-407-505-6801", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Dermatology Center", cat:"vet", lat:28.640391, lng:-81.355423, dir:"9901 Orlando Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Bazaar", cat:"tienda", lat:28.654029, lng:-81.330934, dir:"490 Semoran Blvd", tel:null, horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:28.649858, lng:-81.324445, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ferry-pass": {nombre:"Ferry Pass", centro:[30.510196, -87.212471], tz:"America/Chicago", lugares:[
  {n:"Davis Animal Hospital", cat:"vet", lat:30.527655, lng:-87.211758, dir:"9051 North Davis Highway", tel:"+18504799484", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Ferry Pass Animal Hospital", cat:"vet", lat:30.510341, lng:-87.185347, dir:"8065 North 9th Avenue", tel:"+1 850-478-0287", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Regency Park Dog Park", cat:"parque", lat:30.51108, lng:-87.176144, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fincastle": {nombre:"Fincastle", centro:[38.307847, -85.542182], tz:"America/Chicago", lugares:[
  {n:"Silver Brooks Stable", cat:"refugio", lat:38.315431, lng:-85.538038, dir:"11300 Ballardsville Road", tel:"+1-502-241-9185", horas:[6.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Springhurst Animal Hospital", cat:"vet", lat:38.314744, lng:-85.56419, dir:"9909 Brownsboro Road", tel:"+1-502-326-2995", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Pet Station Salon & Boutique", cat:"peluqueria", lat:38.324295, lng:-85.566906, dir:"9410 Norton Commons Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fishersville": {nombre:"Fishersville", centro:[38.10273, -78.975751], tz:"America/New_York", lugares:[
  {n:"Fluff and Fetch Dog Grooming", cat:"peluqueria", lat:38.099731, lng:-78.969913, dir:"1744 Jefferson Highway", tel:"+1-540-688-8057", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"TenderCare Veterinary Center", cat:"vet", lat:38.099495, lng:-78.969591, dir:"1750 Jefferson Highway", tel:"+1-540-943-9080", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Commonwealth Veterinary Clinic", cat:"vet", lat:38.089251, lng:-78.945195, dir:"2356 Jefferson Highway", tel:"+1-540-942-9777", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Puppy Palace By Kumiko", cat:"peluqueria", lat:38.085786, lng:-78.938666, dir:"2533 Jefferson Highway", tel:"+1-540-910-1480", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "five-forks": {nombre:"Five Forks", centro:[34.804842, -82.229559], tz:"America/New_York", lugares:[
  {n:"River Oak Vet", cat:"vet", lat:34.808876, lng:-82.235498, dir:"2521 Woodruff Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Five Forks Animal Hospital", cat:"vet", lat:34.811133, lng:-82.233227, dir:"221 Batesville Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Astro Kennels", cat:"refugio", lat:34.798656, lng:-82.22247, dir:"418 Scuffletown Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:34.818874, lng:-82.254871, dir:"2200 Woodruff Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rocky Creek Veternary Hospital", cat:"vet", lat:34.849957, lng:-82.230879, dir:"111 Ebenezer Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:34.858665, lng:-82.267965, dir:"3620 Pelham Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rocky Creek Resort", cat:"refugio", lat:34.850226, lng:-82.230657, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:34.858838, lng:-82.227227, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:34.859081, lng:-82.227414, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "flagler-beach": {nombre:"Flagler Beach", centro:[29.474993, -81.126998], tz:"America/New_York", lugares:[
  {n:"Flagler Animal Hospital", cat:"vet", lat:29.474021, lng:-81.178278, dir:"130 Old Kings Road South", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "flat-rock-north-carolina": {nombre:"Flat Rock", centro:[35.271228, -82.441508], tz:"America/New_York", lugares:[
  {n:"Kitty Kare", cat:"tienda", lat:35.279848, lng:-82.430593, dir:"74 Avonlea Lane", tel:"+1-828-489-8009", horas:[9.0, 18.5], nota:"Dato de OpenStreetMap"}
 ]},
 "flemingsburg": {nombre:"Flemingsburg", centro:[38.4223, -83.733808], tz:"America/New_York", lugares:[
  {n:"Fleming County Animal Hospital", cat:"vet", lat:38.428393, lng:-83.739264, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "flemington": {nombre:"Flemington", centro:[31.859655, -81.564001], tz:"America/New_York", lugares:[
  {n:"Liberty Veternarian Clinic", cat:"vet", lat:31.854413, lng:-81.576723, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fletcher": {nombre:"Fletcher", centro:[35.430934, -82.501124], tz:"America/New_York", lugares:[
  {n:"Airport Kennel Company", cat:"refugio", lat:35.443735, lng:-82.52983, dir:"21 Redmond Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "floral-city": {nombre:"Floral City", centro:[28.750034, -82.296874], tz:"America/New_York", lugares:[
  {n:"Floral City Veterinary Hospital", cat:"vet", lat:28.750296, lng:-82.296544, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "florence": {nombre:"Florence", centro:[34.79981, -87.677251], tz:"America/Chicago", lugares:[
  {n:"Helton Plaza Veterinary Hospital", cat:"vet", lat:34.83204, lng:-87.666872, dir:"2130 Helton Drive", tel:"+1-256-767-0150", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Woof Community Dog Park", cat:"parque", lat:34.816751, lng:-87.682967, dir:"Sherrod Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "florence-kentucky": {nombre:"Florence", centro:[38.99895, -84.626611], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.020175, lng:-84.631973, dir:"1060 Hansel Avenue", tel:"+1 859-525-9215", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Middendorf Animal Hospital", cat:"vet", lat:38.958536, lng:-84.625029, dir:"9930 Berberich Drive", tel:"+1 859 647 2007", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Animal Eye Institute", cat:"vet", lat:39.005311, lng:-84.618539, dir:"6620 Dixie Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park & Patio", cat:"parque", lat:39.001334, lng:-84.639181, dir:"7455 Burlington Pike", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shelby Street Veterinary Hospital", cat:"vet", lat:39.003477, lng:-84.631349, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Noah's Ark Animal Clinic", cat:"vet", lat:39.006725, lng:-84.629937, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"World of Pets", cat:"tienda", lat:39.00812, lng:-84.624075, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet 2 Vet", cat:"vet", lat:39.009726, lng:-84.629063, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"My Pet's Vet Animal Hospital", cat:"vet", lat:39.000294, lng:-84.652126, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:39.020167, lng:-84.631759, dir:null, tel:null, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "florence-south-carolina": {nombre:"Florence", centro:[34.198444, -79.767166], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:34.18931, lng:-79.809504, dir:"1945 West Palmetto Street", tel:"+1 843-676-0683", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.192814, lng:-79.839997, dir:"2887 David H. McLeod Boulevard", tel:"+1 843-665-1190", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Companion Veterinary Care Center", cat:"vet", lat:34.155771, lng:-79.767642, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jayne H. Boswell Animal Shelter", cat:"refugio", lat:34.174082, lng:-79.721341, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "flowery-branch": {nombre:"Flowery Branch", centro:[34.185102, -83.925181], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.180823, lng:-83.907452, dir:"5873 Spout Springs Road", tel:"+1 770-967-6664", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "flowood": {nombre:"Flowood", centro:[32.309286, -90.138681], tz:"America/Chicago", lugares:[
  {n:"Animal Emergency & Referral Center", cat:"vet", lat:32.325567, lng:-90.11952, dir:"1009 Treetop Boulevard", tel:"+1 601-939-8999", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.344064, lng:-90.059416, dir:"198 Promenade Boulevard", tel:"+1 601-992-7076", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Luckney Animal Hospital", cat:"vet", lat:32.346491, lng:-90.05186, dir:"Belle Meade Pointe", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Luckney Bed & Biscuit", cat:"refugio", lat:32.34663, lng:-90.05171, dir:"Belle Meade Pointe", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.357602, lng:-90.150567, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:32.360735, lng:-90.148837, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:32.341057, lng:-90.066116, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "folkston": {nombre:"Folkston", centro:[30.830582, -82.009785], tz:"America/New_York", lugares:[
  {n:"Submerged Aquatics", cat:"tienda", lat:30.831214, lng:-82.009065, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "forest-acres": {nombre:"Forest Acres", centro:[34.019322, -80.989813], tz:"America/New_York", lugares:[
  {n:"4 Paws Animal Clinic", cat:"vet", lat:34.015621, lng:-80.966067, dir:"4 Monckton Boulevard", tel:"+1 802-790-7297", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Happy Tails Resort And Spa", cat:"peluqueria", lat:33.987455, lng:-80.985486, dir:"3922 Rosewood Drive", tel:"+1-803-638-4222", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.990632, lng:-80.972496, dir:"4400 Fort Jackson Boulevard", tel:"+1 803-740-2032", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Forest Acres Animal Hospital", cat:"vet", lat:34.018661, lng:-80.992514, dir:"3327 Forest Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"River City Animal Clinic", cat:"refugio", lat:34.002672, lng:-80.999411, dir:"Millwood Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shandon-Wood Animal Clinic", cat:"vet", lat:34.000121, lng:-80.995807, dir:"912 Daly Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sarah's Grooming", cat:"tienda", lat:34.01882, lng:-80.968322, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Garners Ferry Animal Hospital", cat:"vet", lat:33.97053, lng:-80.947366, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"dog wash", cat:"peluqueria", lat:33.968105, lng:-80.948535, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"peluqueria", lat:33.970177, lng:-80.944873, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "forest-city": {nombre:"Forest City", centro:[28.669486, -81.450166], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:28.671896, lng:-81.451237, dir:"534 S Hunt Club Boulevard", tel:"+1-407-682-2020", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:28.669663, lng:-81.466381, dir:"2320 East Semoran Boulevard", tel:"+1-407-995-6337", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:28.675079, lng:-81.469521, dir:"2227 East Semoran Boulevard", tel:"+1 407-880-0250", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:28.656859, lng:-81.421698, dir:"380 South State Road 434", tel:"+1 407-682-7220", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Soapy's Dog Wash", cat:"peluqueria", lat:28.669096, lng:-81.451827, dir:null, tel:"+1-407-774-1042", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bear Lake Veterinary Clinic", cat:"vet", lat:28.669403, lng:-81.452389, dir:null, tel:"+1-407-801-2727", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Piedmont Animal Hospital", cat:"vet", lat:28.668609, lng:-81.467383, dir:"783 Piedmont Wekiwa Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:28.668612, lng:-81.467387, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "forest-city-north-carolina": {nombre:"Forest City", centro:[35.333728, -81.864925], tz:"America/New_York", lugares:[
  {n:"Trails to Tails Dog Park", cat:"parque", lat:35.331686, lng:-81.86738, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "forest-hills": {nombre:"Forest Hills", centro:[38.215348, -85.585793], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:38.217035, lng:-85.585589, dir:"1969 South Hurstbourne Parkway", tel:"+1 502-715-4180", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Hai Max Pet Grooming", cat:"peluqueria", lat:38.212287, lng:-85.590758, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "forest-virginia": {nombre:"Forest", centro:[37.363774, -79.290118], tz:"America/New_York", lugares:[
  {n:"Pawfection", cat:"peluqueria", lat:37.368681, lng:-79.300211, dir:"14595 Forest Road", tel:"+1 434 385 4363", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pampered Pet", cat:"peluqueria", lat:37.383041, lng:-79.246428, dir:"18396 Forest Road", tel:"+1 434 385 0257", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws n' Play", cat:"refugio", lat:37.383294, lng:-79.246141, dir:"18426 Forest Road", tel:"+1 434 385 9663", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake Forest Animal Hospital", cat:"vet", lat:37.384449, lng:-79.245191, dir:"18510 Forest Road", tel:"+1 434 385 6468", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Craze", cat:"tienda", lat:37.376548, lng:-79.24737, dir:"18013 Forest Road", tel:null, horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Cabana", cat:"refugio", lat:37.383398, lng:-79.244872, dir:"18479 Forest Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake Forest Boarding & Grooming", cat:"refugio", lat:37.38466, lng:-79.245716, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Do It Yourself Dog Wash", cat:"peluqueria", lat:37.384529, lng:-79.245445, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-belvoir": {nombre:"Fort Belvoir", centro:[38.710476, -77.147149], tz:"America/New_York", lugares:[
  {n:"Fort Belvoir Veterinary Center", cat:"vet", lat:38.686024, lng:-77.144416, dir:"10015 Theote Road", tel:null, horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fort-gaines": {nombre:"Fort Gaines", centro:[31.604604, -85.049732], tz:"America/New_York", lugares:[
  {n:"Dog Exercise Area", cat:"parque", lat:31.678273, lng:-85.053739, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-hunt": {nombre:"Fort Hunt", centro:[38.733268, -77.05596], tz:"America/New_York", lugares:[
  {n:"Hollin Hall Animal Hospital", cat:"vet", lat:38.741825, lng:-77.056409, dir:"7930 Fort Hunt Road", tel:"+1 703-660-0044", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Fort Hunt Animal Hospital", cat:"vet", lat:38.722633, lng:-77.06324, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-lauderdale": {nombre:"Fort Lauderdale", centro:[26.122308, -80.143379], tz:"America/New_York", lugares:[
  {n:"Victoria Park Animal Hospital", cat:"vet", lat:26.13026, lng:-80.136865, dir:"626 North Federal Highway", tel:"+19546178724", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Barkyard N Brews", cat:"parque", lat:26.12329, lng:-80.152927, dir:"817 NW 1st St", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Urban Pets", cat:"peluqueria", lat:26.134379, lng:-80.137895, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Foxy Paws Pet Grooming", cat:"peluqueria", lat:26.134711, lng:-80.1379, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-mill": {nombre:"Fort Mill", centro:[35.00737, -80.945076], tz:"America/New_York", lugares:[
  {n:"Zoom Room Dog Training - Fort Mill", cat:"peluqueria", lat:34.983417, lng:-80.940052, dir:"5525 Arden Mill Drive", tel:"+18033392359", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fort Mill Animal Clinic", cat:"vet", lat:35.007966, lng:-80.943074, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Indian Land Animal Hospital", cat:"vet", lat:35.002068, lng:-80.856808, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carolina Country Store", cat:"tienda", lat:34.992657, lng:-80.8532, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-myers": {nombre:"Fort Myers", centro:[26.640628, -81.872308], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:26.62677, lng:-81.941339, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-myers-shores": {nombre:"Fort Myers Shores", centro:[26.709236, -81.745916], tz:"America/New_York", lugares:[
  {n:"Verandah Dog Park", cat:"parque", lat:26.692952, lng:-81.741415, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-oglethorpe": {nombre:"Fort Oglethorpe", centro:[34.949995, -85.245661], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:34.938353, lng:-85.220283, dir:"245 Parkway Drive", tel:"+1 706-858-8762", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Fort Oglethorpe Pet Wellness Center", cat:"vet", lat:34.941458, lng:-85.217314, dir:"85 Crye Leike Dr", tel:"+1-706-419-8420", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Schaffeld Walter B DVM", cat:"vet", lat:34.949908, lng:-85.236848, dir:"1673 Battlefield Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark City Dog Park", cat:"parque", lat:34.951602, lng:-85.246395, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-payne": {nombre:"Fort Payne", centro:[34.444255, -85.719689], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:34.432399, lng:-85.735495, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dekalb Animal Hospital", cat:"vet", lat:34.463923, lng:-85.703653, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-thomas": {nombre:"Fort Thomas", centro:[39.078624, -84.448343], tz:"America/New_York", lugares:[
  {n:"Mr. Lawrence's Dog Grooming", cat:"peluqueria", lat:39.085378, lng:-84.449458, dir:null, tel:"+1-859-512-7926", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fort Thomas Animal Hospital", cat:"vet", lat:39.063517, lng:-84.44839, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-valley-georgia": {nombre:"Fort Valley", centro:[32.553759, -83.887408], tz:"America/New_York", lugares:[
  {n:"Ashland Kennel", cat:"refugio", lat:32.553626, lng:-83.887465, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-walton-beach": {nombre:"Fort Walton Beach", centro:[30.405755, -86.618842], tz:"America/Chicago", lugares:[
  {n:"Gulfarium Marine Adventure Park", cat:"zoo", lat:30.394442, lng:-86.594053, dir:"101 Miracle Strip Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "four-corners": {nombre:"Four Corners", centro:[28.355048, -81.677055], tz:"America/New_York", lugares:[
  {n:"Don't 4 Gett About Me Pet Treats amd Gofts", cat:"tienda", lat:28.344548, lng:-81.608637, dir:"3232 Margaritaville Boulevard", tel:null, horas:[12.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Encore at Ovation Dog Park", cat:"parque", lat:28.377235, lng:-81.654352, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northeast Regional Dog Park", cat:"parque", lat:28.325475, lng:-81.662335, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "four-oaks": {nombre:"Four Oaks", centro:[35.445557, -78.429465], tz:"America/New_York", lugares:[
  {n:"Quality Care Animal Hospital", cat:"vet", lat:35.447207, lng:-78.420144, dir:"5941 US 301 Highway South", tel:"+19199633044", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carolina Crossing Veterinary Clinic", cat:"vet", lat:35.515577, lng:-78.550536, dir:"1170 NC-210", tel:"+19199347729", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carolina Crossing Veterinary Clinic", cat:"vet", lat:35.517784, lng:-78.552838, dir:"11760 NC 210 Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "franconia-virginia": {nombre:"Franconia", centro:[38.782182, -77.145989], tz:"America/New_York", lugares:[
  {n:"Starbarks Dog Park", cat:"parque", lat:38.791537, lng:-77.139013, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "frankfort-kentucky": {nombre:"Frankfort", centro:[38.200905, -84.873284], tz:"America/New_York", lugares:[
  {n:"Tin Woof Inn", cat:"refugio", lat:38.213375, lng:-84.852226, dir:"110 Northgate Drive", tel:"+1-502-699-2720", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Frankfort Animal Clinic", cat:"vet", lat:38.177838, lng:-84.894215, dir:"1045 Old US 127 Road", tel:"+1-502-227-9611", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Franklin County Humane Society", cat:"refugio", lat:38.185683, lng:-84.842366, dir:"100 Companion Place", tel:null, horas:[12.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Frankfort Veterinary Clinic", cat:"vet", lat:38.203524, lng:-84.844981, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Pets Veterinary Clinic", cat:"vet", lat:38.160649, lng:-84.896278, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"LIFE House for Animals", cat:"refugio", lat:38.161813, lng:-84.916104, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Town & Country Vet", cat:"vet", lat:38.160942, lng:-84.916163, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "franklin-farm": {nombre:"Franklin Farm", centro:[38.915692, -77.391757], tz:"America/New_York", lugares:[
  {n:"Franklin Farm Veterinary Clinic", cat:"vet", lat:38.908068, lng:-77.405969, dir:"13320 Franklin Farm Road", tel:"+1 703-435-3335", horas:[7.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:38.92655, lng:-77.375445, dir:"2553 John Milton Drive", tel:"+1 703-390-9150", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Reston Animal Hospital", cat:"vet", lat:38.932574, lng:-77.368153, dir:"2403 Reston Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "franklin-georgia": {nombre:"Franklin", centro:[33.277618, -85.097997], tz:"America/New_York", lugares:[
  {n:"Heard County Animal Shelter", cat:"refugio", lat:33.291173, lng:-85.116723, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "franklin-kentucky": {nombre:"Franklin", centro:[36.722263, -86.577218], tz:"America/Chicago", lugares:[
  {n:"Crocker Animal Hospital Large Anml", cat:"vet", lat:36.706968, lng:-86.571389, dir:"215 Commerce Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crocker Animal Hospital", cat:"vet", lat:36.703642, lng:-86.574716, dir:"1010 South Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Simpson County Animal Hospital", cat:"vet", lat:36.728125, lng:-86.577213, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"tienda", lat:36.698398, lng:-86.569643, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "franklin-north-carolina": {nombre:"Franklin", centro:[35.182317, -83.381543], tz:"America/New_York", lugares:[
  {n:"The Pet Stop", cat:"tienda", lat:35.178661, lng:-83.367651, dir:"667 Highlands Road", tel:"+18283691155", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "franklin-tennessee": {nombre:"Franklin", centro:[35.925206, -86.868942], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.963641, lng:-86.802833, dir:"8105 Moores Lane", tel:"+1 615-371-8890", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Williamson County Animal Shelter", cat:"refugio", lat:35.944393, lng:-86.87798, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Maggie's Bark Park", cat:"parque", lat:35.94439, lng:-86.879012, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alara Dog Park", cat:"parque", lat:35.90683, lng:-86.847738, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Viera Cool Springs", cat:"parque", lat:35.925777, lng:-86.822485, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.937148, lng:-86.819794, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carothers Parkway Vet Clinic", cat:"vet", lat:35.96113, lng:-86.801051, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.963834, lng:-86.802993, dir:null, tel:null, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "franklinton-north-carolina": {nombre:"Franklinton", centro:[36.101816, -78.458054], tz:"America/New_York", lugares:[
  {n:"Franklinton Animal Hospital", cat:"vet", lat:36.104501, lng:-78.4641, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fredericksburg-virginia": {nombre:"Fredericksburg", centro:[38.300116, -77.457147], tz:"America/New_York", lugares:[
  {n:"Dog Crazy", cat:"tienda", lat:38.30416, lng:-77.459581, dir:"1011 Caroline Street", tel:"+1 540-373-4168", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Wag Shack, LLC", cat:"peluqueria", lat:38.251121, lng:-77.495022, dir:"10702 Stoner Drive", tel:"+1-540-690-1138", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spot On Pet Salon", cat:"peluqueria", lat:38.295828, lng:-77.437112, dir:"101 Randolph Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ferry Farm Animal Clinic", cat:"vet", lat:38.288053, lng:-77.440271, dir:"386 Kings Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"White Oak Animal Hospital", cat:"vet", lat:38.310487, lng:-77.430705, dir:"1 Walsh Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Confederate Ridge Animal Hosptal", cat:"vet", lat:38.281067, lng:-77.490608, dir:"1050 Kind St", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spotsylvania County Animal Shelter", cat:"refugio", lat:38.273617, lng:-77.497221, dir:"450 Tv Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"St Francis Animal Hospital", cat:"vet", lat:38.263649, lng:-77.494976, dir:"4624 Harrison Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Beauty in the Beast", cat:"peluqueria", lat:38.310956, lng:-77.426129, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "freeport": {nombre:"Freeport", centro:[30.498252, -86.136052], tz:"America/Chicago", lugares:[
  {n:"Freeport Pet Clinic", cat:"vet", lat:30.492005, lng:-86.122031, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "frisco-north-carolina": {nombre:"Frisco", centro:[35.233947, -75.625054], tz:"America/New_York", lugares:[
  {n:"Dog Park Area", cat:"parque", lat:35.240572, lng:-75.620742, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "front-royal": {nombre:"Front Royal", centro:[38.917907, -78.191808], tz:"America/New_York", lugares:[
  {n:"Small Dog Off-leash Area", cat:"parque", lat:38.909439, lng:-78.209656, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Off-leash Area", cat:"parque", lat:38.907865, lng:-78.210736, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Warren County Veterinary Clinic", cat:"vet", lat:38.903268, lng:-78.212862, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "frostproof": {nombre:"Frostproof", centro:[27.745863, -81.530631], tz:"America/New_York", lugares:[
  {n:"River Ranch Petting Zoo", cat:"zoo", lat:27.769008, lng:-81.195937, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fruit-cove": {nombre:"Fruit Cove", centro:[30.101248, -81.61842], tz:"America/New_York", lugares:[
  {n:"Earth Pets Natural Pet Market", cat:"tienda", lat:30.158683, lng:-81.633486, dir:"11740 San Jose Boulevard", tel:"+1-904-677-4429", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.199912, lng:-81.550231, dir:"8801 Southside Boulevard", tel:"+1 904-519-8878", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Crosswinds Veterinary Hospital", cat:"vet", lat:30.109984, lng:-81.56568, dir:"71 Doctors Village Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Baywood Animal Hospital", cat:"vet", lat:30.173347, lng:-81.545728, dir:"10843 Philips Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:30.119797, lng:-81.626754, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Saint Bernards Animal Hospital", cat:"vet", lat:30.158738, lng:-81.633647, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mount Ruffmore", cat:"tienda", lat:30.15883, lng:-81.633691, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bartram Animal Hospital", cat:"vet", lat:30.140992, lng:-81.551417, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scenthound", cat:"peluqueria", lat:30.140763, lng:-81.550203, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:30.192947, lng:-81.548637, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fulton-kentucky": {nombre:"Fulton", centro:[36.505605, -88.875216], tz:"America/Chicago", lugares:[
  {n:"Ward Animal Clinic", cat:"vet", lat:36.514837, lng:-88.890782, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fultondale": {nombre:"Fultondale", centro:[33.605463, -86.802449], tz:"America/Chicago", lugares:[
  {n:"Black Creek Bark Park", cat:"parque", lat:33.618662, lng:-86.803516, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fuquay-varina": {nombre:"Fuquay-Varina", centro:[35.584385, -78.799869], tz:"America/New_York", lugares:[
  {n:"Doggy Day Grooming", cat:"peluqueria", lat:35.591654, lng:-78.791312, dir:"719 North Main Street", tel:"+19195677460", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.59416, lng:-78.782559, dir:"991 East Broad Street", tel:"+1 919-762-3211", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Broad Street Animal Hospital", cat:"vet", lat:35.615322, lng:-78.809249, dir:"2200 North Grassland Drive", tel:"+19195573206", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wags To Riches", cat:"peluqueria", lat:35.616693, lng:-78.733809, dir:"2916 North Main Street", tel:"+1 919 285 6867", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hilltop Animal Hospital", cat:"vet", lat:35.624352, lng:-78.725275, dir:"3301 North Main Street", tel:"+19195679700", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Fuquay-Varina Dog Park", cat:"parque", lat:35.582123, lng:-78.806363, dir:"110 Woodland Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pooch Pad", cat:"peluqueria", lat:35.588789, lng:-78.800604, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fuquay Veterinary Hospital", cat:"vet", lat:35.592484, lng:-78.7772, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Serenity Dog Park", cat:"parque", lat:35.546553, lng:-78.828347, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"HillTop Animal Hospital", cat:"vet", lat:35.625507, lng:-78.725794, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gadsden": {nombre:"Gadsden", centro:[34.012832, -86.003025], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:34.012615, lng:-85.990433, dir:"308 East Meighan Boulevard", tel:"+1-256-547-6696", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:33.997244, lng:-86.010004, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Noccalula Falls Petting Zoo", cat:"zoo", lat:34.03835, lng:-86.026919, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gainesville": {nombre:"Gainesville", centro:[29.651968, -82.324985], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:29.675646, lng:-82.338787, dir:"2339 Northwest 13th Street", tel:"+1352-336-8006", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"EarthWise Pet", cat:"tienda", lat:29.674247, lng:-82.38667, dir:"4106 Northwest 16th Boulevard", tel:"+1-352-373-4738", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Downtown Tabby", cat:"tienda", lat:29.66133, lng:-82.329106, dir:"404 Northwest 10th Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.672148, lng:-82.387866, dir:"4119 Northwest 16th Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gainesville Animal Hospital", cat:"vet", lat:29.678467, lng:-82.331108, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Possum Creek Dog Park", cat:"parque", lat:29.70261, lng:-82.384854, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gainesville-georgia": {nombre:"Gainesville", centro:[34.297879, -83.824066], tz:"America/New_York", lugares:[
  {n:"Humane Society of Northeast Georgia", cat:"refugio", lat:34.290213, lng:-83.80904, dir:"845 West Ridge Road", tel:"+1-770-532-6617", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Browns Bridge Animal Hospital", cat:"vet", lat:34.279071, lng:-83.853804, dir:"2305 Browns Bridge Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Midland Dog Park", cat:"parque", lat:34.291071, lng:-83.825004, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gainesville-virginia": {nombre:"Gainesville", centro:[38.796088, -77.612596], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.79468, lng:-77.605193, dir:"13241 Gateway Center Drive", tel:"+1 571-248-4300", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Clinic", cat:"vet", lat:38.792319, lng:-77.628102, dir:"14760 Lee Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Star Salon", cat:"peluqueria", lat:38.79348, lng:-77.629086, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Glenkirk Animal Hospital", cat:"vet", lat:38.767423, lng:-77.60479, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "galax": {nombre:"Galax", centro:[36.661239, -80.923967], tz:"America/New_York", lugares:[
  {n:"Galax Carroll Grayson Animal Shelter", cat:"refugio", lat:36.653706, lng:-80.917374, dir:"200 Fair Street", tel:"+1 276 236 8501", horas:[13.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Galaxy Pet Shop", cat:"tienda", lat:36.679032, lng:-80.897938, dir:"948 East Stuart Drive", tel:"+1-276-236-6022", horas:[13.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Galax Veterinary Clinic", cat:"vet", lat:36.668718, lng:-80.924443, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gallatin-tennessee": {nombre:"Gallatin", centro:[36.388303, -86.44759], tz:"America/Chicago", lugares:[
  {n:"South Water Animal Hospital", cat:"vet", lat:36.386365, lng:-86.44537, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Critter Clinic", cat:"vet", lat:36.384692, lng:-86.458251, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Paws Retreat", cat:"refugio", lat:36.382492, lng:-86.465436, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "garden-city-beach": {nombre:"Garden City Beach", centro:[33.586391, -79.012063], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:33.578538, lng:-79.029392, dir:"12150 US Highway 17 Bypass South", tel:null, horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Bark Pet Resort", cat:"tienda", lat:33.594262, lng:-79.025506, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gardendale": {nombre:"Gardendale", centro:[33.660103, -86.81277], tz:"America/Chicago", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:33.651596, lng:-86.824619, dir:"1001 Odum Road", tel:"+1-205-694-7913", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "garner-north-carolina": {nombre:"Garner", centro:[35.711264, -78.614171], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.712912, lng:-78.637439, dir:"2550 Timber Drive", tel:"+1 919-661-0690", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.690646, lng:-78.578657, dir:"265 Shenstone Boulevard", tel:"+1 919-773-0376", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Ansede Animal Hospital", cat:"vet", lat:35.731999, lng:-78.649889, dir:"3535 South Wilmington Street", tel:"+19196611515", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Saving Lives Spay/Neuter Clinic", cat:"vet", lat:35.727771, lng:-78.661508, dir:"300 Petfinder Lane", tel:"+19197720211", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SPCA of Wake County", cat:"refugio", lat:35.727844, lng:-78.661968, dir:"200 Petfinder Lane", tel:"+1-919-772-2326", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"North Garner Dog Park", cat:"parque", lat:35.706722, lng:-78.602531, dir:"221 East Garner Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The K9 Kabana", cat:"refugio", lat:35.71976, lng:-78.632124, dir:"1465 Mechanical Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Garner Animal Hospital Inc", cat:"vet", lat:35.719071, lng:-78.63729, dir:"1138 US 70", tel:null, horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield", cat:"vet", lat:35.687147, lng:-78.616558, dir:"1725 Aversboro Road", tel:null, horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"SPCA of Wake County - Resource Center", cat:"refugio", lat:35.727747, lng:-78.661401, dir:"300 Petfinder Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"tienda", lat:35.663061, lng:-78.700206, dir:"8105 Fayetteville Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gassaway": {nombre:"Gassaway", centro:[38.673228, -80.774662], tz:"America/New_York", lugares:[
  {n:"Central West Virginia Animal Hospital", cat:"vet", lat:38.660614, lng:-80.767884, dir:"State Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gastonia": {nombre:"Gastonia", centro:[35.262265, -81.183819], tz:"America/New_York", lugares:[
  {n:"Bradley Station Dog Park", cat:"parque", lat:35.264719, lng:-81.180463, dir:"181 North Oakland Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gate-city": {nombre:"Gate City", centro:[36.637877, -82.580988], tz:"America/New_York", lugares:[
  {n:"Broadwater Veterinary Hospital", cat:"vet", lat:36.638653, lng:-82.57718, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gatlinburg": {nombre:"Gatlinburg", centro:[35.714259, -83.510164], tz:"America/New_York", lugares:[
  {n:"Wildlife Encounter", cat:"zoo", lat:35.702957, lng:-83.557029, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gay": {nombre:"Gay", centro:[33.093906, -84.574359], tz:"America/New_York", lugares:[
  {n:"Tao K9 Unleashed", cat:"refugio", lat:33.143616, lng:-84.589687, dir:"22599 HWY 85", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Coco's Cupboard", cat:"refugio", lat:33.143414, lng:-84.589481, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "georgetown-georgia-2": {nombre:"Georgetown", centro:[31.983264, -81.227333], tz:"America/New_York", lugares:[
  {n:"Mohawk Lake Dogpark", cat:"parque", lat:31.99268, lng:-81.168757, dir:"1134 Mohawk Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "georgetown-kentucky": {nombre:"Georgetown", centro:[38.209984, -84.559713], tz:"America/New_York", lugares:[
  {n:"Central Kentucky Veterinary Center", cat:"vet", lat:38.182949, lng:-84.559639, dir:"111 Southgate Drive", tel:"+15028630868", horas:[7.5, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"tienda", lat:38.184425, lng:-84.565342, dir:"112 Marketplace Circle", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scott County Animal Shelter", cat:"refugio", lat:38.23804, lng:-84.574463, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Kentucky Pet Resort", cat:"refugio", lat:38.178691, lng:-84.557178, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Roberts Stables", cat:"refugio", lat:38.140427, lng:-84.520185, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "germantown-tennessee": {nombre:"Germantown", centro:[35.086758, -89.810086], tz:"America/Chicago", lugares:[
  {n:"Southwind Animal Hospital", cat:"vet", lat:35.049346, lng:-89.799802, dir:"7910 Winchester Road", tel:"+1-901-362-8321", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.046142, lng:-89.799098, dir:"7941 Winchester Road", tel:"+1 901-756-2676", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:35.114483, lng:-89.899777, dir:"4864 Poplar Avenue", tel:"+19017485514", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Pet Hospitals", cat:"vet", lat:35.101898, lng:-89.852799, dir:null, tel:"+1 901-457-2995", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:35.086997, lng:-89.85962, dir:"6108 Quince Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.100896, lng:-89.865611, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pet Hospitals", cat:"vet", lat:35.094416, lng:-89.731447, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bluff City Veterinary Specialist", cat:"vet", lat:35.028502, lng:-89.758761, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "glasgow-kentucky": {nombre:"Glasgow", centro:[36.995906, -85.912484], tz:"America/Chicago", lugares:[
  {n:"Beverly's Pet Grooming", cat:"peluqueria", lat:36.99449, lng:-85.91161, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of Glasgow", cat:"refugio", lat:37.000087, lng:-85.922325, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "glen-allen-virginia": {nombre:"Glen Allen", centro:[37.665978, -77.506374], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:37.668558, lng:-77.463113, dir:"9870 Brook Road", tel:"+1 804-266-1476", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Holiday Barn Pet Resort", cat:"refugio", lat:37.67574, lng:-77.524289, dir:"3786 Mountain Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:37.668776, lng:-77.463088, dir:"9870 Brook Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Glen Allen Animal Hospital", cat:"vet", lat:37.658184, lng:-77.525245, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Belmont at River Mill Dog Park", cat:"parque", lat:37.676179, lng:-77.465343, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gloucester-point": {nombre:"Gloucester Point", centro:[37.254035, -76.496899], tz:"America/New_York", lugares:[
  {n:"Abingdon Animal Clinic", cat:"vet", lat:37.286909, lng:-76.508574, dir:"2882 George Washington Memorial Highway", tel:"+1-804-642-2181", horas:[13.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Care of Gloucester", cat:"vet", lat:37.333073, lng:-76.515563, dir:"4614 George Washington Memorial Highway", tel:"+1-804-642-5740", horas:[8.0, 13.0], nota:"Dato de OpenStreetMap"}
 ]},
 "gloucester-virginia": {nombre:"Gloucester", centro:[37.41484, -76.529435], tz:"America/New_York", lugares:[
  {n:"Fixin' to Save Spay & Neuter Clinic", cat:"vet", lat:37.339811, lng:-76.52006, dir:"4926 George Washington Memorial Highway", tel:"+1-804-694-0349", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Gentle Clipper Pet Grooming", cat:"peluqueria", lat:37.338284, lng:-76.518695, dir:"4850 George Washington Memorial Highway", tel:"+1-804-699-3550", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Gloucester Animal Hospital", cat:"vet", lat:37.38381, lng:-76.535102, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "goldenrod": {nombre:"Goldenrod", centro:[28.610227, -81.284895], tz:"America/New_York", lugares:[
  {n:"Banfield Pet Hospital", cat:"vet", lat:28.648826, lng:-81.267399, dir:"5864 Red Bug Lake Road", tel:"+1-407-388-0529", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"D'Tails", cat:"tienda", lat:28.648853, lng:-81.266767, dir:"5904 Red Bug Lake Road", tel:"+1-407-332-4400", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"McAbee Veterinary Hospital", cat:"vet", lat:28.606858, lng:-81.288925, dir:null, tel:"+14076715858", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "goldsboro-north-carolina": {nombre:"Goldsboro", centro:[35.384884, -77.992765], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:35.374804, lng:-77.948654, dir:"319 North Berkeley Boulevard", tel:"+19197512595", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.377327, lng:-77.946027, dir:"507 North Eastgate Drive", tel:"+1 919-288-3332", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Goldsboro Veterinary Hospital", cat:"vet", lat:35.416773, lng:-78.046436, dir:"2343 US-70", tel:"+19197352271", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fluff & Scissor", cat:"tienda", lat:35.414762, lng:-78.069889, dir:"504 NC-581 South", tel:"+1-919-734-7387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wayne County Animal Services", cat:"refugio", lat:35.396795, lng:-77.978335, dir:"1600 Clingman Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cats", cat:"tienda", lat:35.370002, lng:-77.948715, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:35.366726, lng:-77.949681, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "goochland": {nombre:"Goochland", centro:[37.682444, -77.884925], tz:"America/New_York", lugares:[
  {n:"Canine Clips", cat:"tienda", lat:37.684726, lng:-77.885106, dir:"2976 River Road West", tel:"+1-804-556-2284", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "goodlettsville": {nombre:"Goodlettsville", centro:[36.323107, -86.71333], tz:"America/Chicago", lugares:[
  {n:"Banfield Pet Hospital", cat:"vet", lat:36.307202, lng:-86.686401, dir:"Gallatin Pike North", tel:"+1-615-859-1468", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fenway's Park", cat:"parque", lat:36.322058, lng:-86.680166, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "goose-creek-south-carolina": {nombre:"Goose Creek", centro:[32.996104, -80.038729], tz:"America/New_York", lugares:[
  {n:"Animal Medical Clinic of Goose Creek", cat:"vet", lat:33.007875, lng:-80.041623, dir:"102 Central Avenue", tel:"+1-843-569-3647", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Broken Leash Dog Bar", cat:"parque", lat:32.969794, lng:-80.046937, dir:"8811 Old University Blvd", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery& Grooming", cat:"peluqueria", lat:33.091201, lng:-80.02949, dir:"2822 US 52", tel:null, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"SPCA Spay & Neuter Clinic", cat:"vet", lat:32.996673, lng:-80.039725, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mt Holly Veterinary Clinic", cat:"vet", lat:32.997557, lng:-80.039914, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:33.007409, lng:-80.043372, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Grooming Room Pet Resort", cat:"peluqueria", lat:33.008547, lng:-80.041664, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Goose Creek Veterinary Clinic", cat:"vet", lat:32.98274, lng:-80.03093, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Creekside Veterinary Clinic", cat:"vet", lat:33.024141, lng:-80.056429, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Zippy's Lizards Of The Coast", cat:"tienda", lat:32.970511, lng:-80.014284, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mount Holly Veterinary Clinic", cat:"vet", lat:33.030294, lng:-80.058051, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northwoods Veterinary Clinic", cat:"vet", lat:32.958231, lng:-80.042588, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Primp Your Pup", cat:"peluqueria", lat:33.001592, lng:-80.08559, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SpecialPets", cat:"peluqueria", lat:33.008583, lng:-80.088741, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "goose-creek-village": {nombre:"Goose Creek Village", centro:[39.041974, -77.521921], tz:"America/New_York", lugares:[
  {n:"Loudoun County Animal Services", cat:"refugio", lat:39.078429, lng:-77.540982, dir:"42225 Adoption Drive", tel:"+1 703-777-0406", horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Valu", cat:"tienda", lat:39.043244, lng:-77.522299, dir:"42780 Creek View Plaza", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gordonsville": {nombre:"Gordonsville", centro:[36.172903, -85.929997], tz:"America/Chicago", lugares:[
  {n:"Gordonsville Vetinary Clinic", cat:"vet", lat:36.176941, lng:-85.946926, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gotha": {nombre:"Gotha", centro:[28.52775, -81.522715], tz:"America/New_York", lugares:[
  {n:"Animal Clinic of Windermere", cat:"vet", lat:28.518578, lng:-81.541077, dir:"1909 maguire road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Paradise Winter Garden", cat:"refugio", lat:28.533169, lng:-81.556571, dir:"765 Windermere Road", tel:null, horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "goulds": {nombre:"Goulds", centro:[25.562884, -80.382192], tz:"America/New_York", lugares:[
  {n:"Miami-Dade Community Spay Neuter Clinic", cat:"refugio", lat:25.569307, lng:-80.365376, dir:null, tel:"+1-305-696-0800", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wings of Asia", cat:"zoo", lat:25.61055, lng:-80.400232, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wacky Barn Petting Zoo", cat:"zoo", lat:25.612048, lng:-80.401192, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Miami-Dade Zoological Park and Gardens", cat:"zoo", lat:25.61332, lng:-80.3994, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Atlantico at Kendall Dog Park", cat:"parque", lat:25.611157, lng:-80.41612, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"WEST KENDALL DISTRICT DOG PARK", cat:"parque", lat:25.660766, lng:-80.449399, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "granite-falls-north-carolina": {nombre:"Granite Falls", centro:[35.79652, -81.430646], tz:"America/New_York", lugares:[
  {n:"Lake Hickory Veterinary Hospital", cat:"vet", lat:35.783852, lng:-81.404445, dir:"4607 Hickory Boulevard", tel:"+18283967002", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "graniteville": {nombre:"Graniteville", centro:[33.563748, -81.807889], tz:"America/New_York", lugares:[
  {n:"Bark Mart", cat:"tienda", lat:33.573864, lng:-81.836195, dir:"115 Bettis Academy Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "granville-west-virginia": {nombre:"Granville", centro:[39.645915, -79.987287], tz:"America/New_York", lugares:[
  {n:"Bark Park", cat:"parque", lat:39.652063, lng:-79.998647, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Works", cat:"peluqueria", lat:39.628518, lng:-79.994291, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pinnacle Pet Health", cat:"vet", lat:39.628593, lng:-79.994794, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grayson": {nombre:"Grayson", centro:[33.894273, -83.95574], tz:"America/New_York", lugares:[
  {n:"Eastside Animal Medical Center", cat:"vet", lat:33.899767, lng:-83.96313, dir:"1835 Grayson Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogwood Animal Hospital", cat:"vet", lat:33.918624, lng:-83.973863, dir:"2050 Sugarloaf Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:33.899827, lng:-84.004549, dir:null, tel:null, horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"}
 ]},
 "grayson-kentucky": {nombre:"Grayson", centro:[38.332581, -82.948502], tz:"America/New_York", lugares:[
  {n:"Bluegrass Animal Clinic", cat:"vet", lat:38.329586, lng:-82.932712, dir:"703 East Main Street", tel:"+16064745872", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Doggie Styles Pet Grooming", cat:"peluqueria", lat:38.329606, lng:-82.932407, dir:"707 East Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Creatures Veterinary Care", cat:"vet", lat:38.331523, lng:-82.942381, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grayson-valley": {nombre:"Grayson Valley", centro:[33.648158, -86.639432], tz:"America/Chicago", lugares:[
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.645692, lng:-86.627882, dir:"5890 Trussville Crossings Boulevard", tel:"+1 205-655-3885", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.645449, lng:-86.627908, dir:"5890 Trussville Crossings Boulevard", tel:"+1 205-661-3181", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Clay-Chalkville Animal Clinic", cat:"vet", lat:33.690064, lng:-86.619822, dir:"6415 Old Springville Road", tel:"+1-205-681-1700", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grayson Vally Pet Clinic", cat:"vet", lat:33.649896, lng:-86.634566, dir:"5632 Chalkville Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "graysville-tennessee": {nombre:"Graysville", centro:[35.447014, -85.0844], tz:"America/New_York", lugares:[
  {n:"Sale Creek Veterinary Services", cat:"vet", lat:35.356989, lng:-85.08209, dir:"14801 May Road", tel:"+1-423-280-1436", horas:[7.0, 18.5], nota:"Dato de OpenStreetMap"}
 ]},
 "great-falls-crossing": {nombre:"Great Falls Crossing", centro:[38.977541, -77.315808], tz:"America/New_York", lugares:[
  {n:"NOVA Wild", cat:"zoo", lat:38.972786, lng:-77.314825, dir:"1228 Hunter Mill Road", tel:"+1-703-757-9453", horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Baron Cameron Dog Park", cat:"parque", lat:38.976877, lng:-77.335194, dir:"11300 Baron Cameron Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "great-falls-virginia": {nombre:"Great Falls", centro:[38.998165, -77.288316], tz:"America/New_York", lugares:[
  {n:"Great Paws Veterinary Hospital", cat:"vet", lat:38.996767, lng:-77.287225, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greenacres": {nombre:"Greenacres", centro:[26.623679, -80.125321], tz:"America/New_York", lugares:[
  {n:"Pet Park", cat:"parque", lat:26.634813, lng:-80.174758, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pooch Pines", cat:"parque", lat:26.661184, lng:-80.164278, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large dogs", cat:"parque", lat:26.661179, lng:-80.164446, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small dogs", cat:"parque", lat:26.661438, lng:-80.164072, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greenback": {nombre:"Greenback", centro:[35.66119, -84.172136], tz:"America/New_York", lugares:[
  {n:"Paws & Applause", cat:"refugio", lat:35.599009, lng:-84.14677, dir:"7337 Tomotley Road", tel:"+1 865 300 5988", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "greensboro": {nombre:"Greensboro", centro:[32.704575, -87.59584], tz:"America/Chicago", lugares:[
  {n:"Payne Animal Clinic", cat:"vet", lat:32.699953, lng:-87.599937, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greensboro Veterinary Services", cat:"vet", lat:32.700968, lng:-87.606365, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greensboro-north-carolina": {nombre:"Greensboro", centro:[36.072635, -79.791975], tz:"America/New_York", lugares:[
  {n:"Downtown Greensboro Animal Hospital", cat:"vet", lat:36.078862, lng:-79.790602, dir:"120 West Smith Street", tel:"+1-336-338-1840", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Dog Days", cat:"refugio", lat:36.079672, lng:-79.796246, dir:"705 Battleground Avenue", tel:"+1 336-272-1620", horas:[7.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"University Animal Hospital", cat:"vet", lat:36.074555, lng:-79.814054, dir:"1607 West Friendly Avenue", tel:"+1 336-279-1003", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ruff Housing", cat:"refugio", lat:36.088372, lng:-79.808552, dir:"15 Battleground Court", tel:"+1 336-332-2482", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Purr Life", cat:"refugio", lat:36.090126, lng:-79.8101, dir:"1604 Battleground Avenue", tel:"+1 336-907-4747", horas:[8.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Waggles Puppies", cat:"tienda", lat:36.091441, lng:-79.814245, dir:"1420 Westover Terrace", tel:"+1-336-283-6884", horas:[11.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pets-U-Love Inc.", cat:"peluqueria", lat:36.062734, lng:-79.823627, dir:"933 South Chapman Street", tel:"+1-336-379-7377", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"truss vet", cat:"vet", lat:36.09324, lng:-79.814499, dir:"1800 Battleground Avenue", tel:"+1-336-660-0300", horas:[10.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Proformance Pet Supply", cat:"tienda", lat:36.086338, lng:-79.757155, dir:"701 North English Street", tel:"+1-336-790-2718", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Reef Architects", cat:"tienda", lat:36.103375, lng:-79.782444, dir:"2222 Golden Gate Drive", tel:"+1-336-808-5924", horas:[12.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Friendly Pets", cat:"tienda", lat:36.084984, lng:-79.831621, dir:"625 Friendly Center Road", tel:"+1-336-294-8101", horas:[12.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of Friendly Center", cat:"vet", lat:36.087201, lng:-79.831142, dir:"704 Pembroke Road", tel:"+1-336-852-2863", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.103937, lng:-79.821218, dir:"2641 Lawndale Drive", tel:"+1 336-545-6225", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:36.104023, lng:-79.821209, dir:"2641 Lawndale Drive", tel:"+1-336-545-8333", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"arcBarks Dog Treats", cat:"tienda", lat:36.063409, lng:-79.839529, dir:"2823 Spring Garden Street", tel:"+1-336-285-9067", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Natural Dog", cat:"tienda", lat:36.104076, lng:-79.825688, dir:"2431 Battleground Avenue", tel:"+1 336-763-2015", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Battleground Vetenary Hospital", cat:"vet", lat:36.104734, lng:-79.825076, dir:"2450 Battleground Avenue", tel:"+1-336-545-5569", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Cat Care Hospital", cat:"vet", lat:36.104304, lng:-79.826722, dir:"2449 Battleground Avenue", tel:"+1-336-291-8854", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"All Pets Considered", cat:"tienda", lat:36.10804, lng:-79.827059, dir:"2614 Battleground Avenue", tel:"+1-336-540-1400", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogterra Grooming", cat:"peluqueria", lat:36.0607, lng:-79.850627, dir:"3410-B Spring Garden Street", tel:"+1-336-292-8848", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"NH Farm", cat:"zoo", lat:36.059193, lng:-79.732798, dir:"3214 McConnell Road", tel:"+1-336-740-1998", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Market Veterinary Hospital", cat:"vet", lat:36.069166, lng:-79.857434, dir:"4501 West Market Street", tel:"+1-336-221-3936", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"A Becoming Pet", cat:"peluqueria", lat:36.070061, lng:-79.863043, dir:"4609 West Market Street", tel:"+1-336-834-3332", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Southwoods Animal Hospital", cat:"vet", lat:36.01448, lng:-79.804003, dir:"3005 Randleman Road", tel:"+1-336-275-7266", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Gate City Animal Hospital", cat:"vet", lat:36.133016, lng:-79.79329, dir:"202 Pisgah Church Road", tel:"+1-336-286-9500", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Centre of Greensboro", cat:"vet", lat:36.067053, lng:-79.867827, dir:"4131 Spring Garden Street", tel:"+1 336-855-5821", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Cobb Animal Clinic", cat:"vet", lat:36.12039, lng:-79.841865, dir:"3224 Battleground Avenue", tel:"+1 336-288-8550", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"North Elm Animal Hospital", cat:"vet", lat:36.135698, lng:-79.797084, dir:"3626 North Elm Street", tel:"+1 336-545-3400", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:36.123496, lng:-79.84519, dir:"3316 Battleground Avenue", tel:"+1-336-553-9550", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Lawndale Veterinary Hospital", cat:"vet", lat:36.131342, lng:-79.83198, dir:"4314 Lawndale Drive", tel:"+1 336-288-3233", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Vickie's Pampered Pet", cat:"peluqueria", lat:36.087189, lng:-79.878433, dir:"708 Muirs Chapel Road", tel:"+1-336-299-2644", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Happy Tails Veterinary Emergency Clinic", cat:"vet", lat:36.136413, lng:-79.832742, dir:"4525 Lawndale Drive", tel:"+1-336-288-2688", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"After Hours Veterinary Emergency Clinic", cat:"vet", lat:36.088749, lng:-79.883145, dir:"5505 West Friendly Avenue", tel:"+1-336-851-1990", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:36.129331, lng:-79.855232, dir:"2130 New Garden Road", tel:"+1-336-282-4458", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Friendly Animal Clinic", cat:"vet", lat:36.088946, lng:-79.887803, dir:"712 College Road", tel:"+1-336-299-6011", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:36.131639, lng:-79.857673, dir:"3725 Battleground Avenue", tel:"+1-336-907-3571", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:36.111777, lng:-79.878232, dir:"1566 Highwoods Boulevard", tel:"+1 336-323-7811", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Garden Creek Pet Clinic", cat:"vet", lat:36.118621, lng:-79.87521, dir:"1609 New Garden Road", tel:"+1 336-856-0093", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"All Creatures Veterinary Hospital", cat:"vet", lat:36.132219, lng:-79.86185, dir:"3205 Brassfield Road", tel:"+1 336-282-1800", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:36.087662, lng:-79.836837, dir:"3328 West Friendly Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greensboro Veterinary Hospital", cat:"vet", lat:36.038095, lng:-79.854641, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greenville-north-carolina": {nombre:"Greenville", centro:[35.613224, -77.372459], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.583325, lng:-77.371132, dir:"600 Greenville Boulevard Southeast", tel:"+1 252-756-7706", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Veterinary Hospital", cat:"vet", lat:35.659058, lng:-77.409263, dir:"502 McMillan Lane", tel:"+1-252-758-9971", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Little Dog Park", cat:"parque", lat:35.613124, lng:-77.354864, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greenville-south-carolina": {nombre:"Greenville", centro:[34.851354, -82.398488], tz:"America/New_York", lugares:[
  {n:"Greenville Zoo", cat:"zoo", lat:34.846807, lng:-82.387531, dir:"150 Cleveland Park Drive", tel:"+1 864 4674300", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dapper Dog", cat:"tienda", lat:34.85253, lng:-82.397903, dir:"200 North Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Svveet Pup", cat:"tienda", lat:34.847665, lng:-82.402927, dir:"250 Riverplace", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Culture", cat:"refugio", lat:34.854228, lng:-82.40875, dir:"627 West Washington Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw Paws USA", cat:"tienda", lat:34.844078, lng:-82.406417, dir:"816 South Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stone Ave Vet", cat:"vet", lat:34.862225, lng:-82.405085, dir:"413 West Stone Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cleveland Park Animal Hospital", cat:"vet", lat:34.840469, lng:-82.386729, dir:"146 Woodland Way", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ambassador Animal Hospital", cat:"vet", lat:34.866943, lng:-82.378404, dir:"620 Wade Hampton Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ambassador Animal Hospital", cat:"vet", lat:34.868584, lng:-82.37739, dir:"715 Wade Hampton Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wag Dog Spa", cat:"tienda", lat:34.843294, lng:-82.363863, dir:"13 Shoppers Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"House of Paws Pet Salon", cat:"peluqueria", lat:34.88388, lng:-82.376828, dir:"1162 Rutherford Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greenville Humane Society", cat:"refugio", lat:34.844639, lng:-82.354005, dir:"305 Airport Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Upstate Vet Emergency + Specialty Care", cat:"vet", lat:34.854509, lng:-82.34264, dir:"393 Woods Lake Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:34.846973, lng:-82.341525, dir:"547 Haywood Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Frazier Animal Hospital", cat:"vet", lat:34.845886, lng:-82.393772, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Richland Creek Animal Clinic", cat:"vet", lat:34.857188, lng:-82.385024, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pleasantburg Veterinary Clinic", cat:"vet", lat:34.824209, lng:-82.370073, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Haywood Road Animal Hospital", cat:"vet", lat:34.845681, lng:-82.340658, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Unleashed Dog Bar and Salon", cat:"parque", lat:34.838571, lng:-82.334472, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greenwood-mississippi": {nombre:"Greenwood", centro:[33.516232, -90.179528], tz:"America/Chicago", lugares:[
  {n:"Four Paws Animal Center", cat:"vet", lat:33.515864, lng:-90.204375, dir:"1909 Leflore Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greenwood Animal Hospital", cat:"vet", lat:33.512704, lng:-90.204381, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greenwood-south-carolina": {nombre:"Greenwood", centro:[34.1954, -82.161788], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.204066, lng:-82.190925, dir:"201 Bypass 72 Northwest", tel:"+1 864-396-4099", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Grace Street Dog Park", cat:"parque", lat:34.212078, lng:-82.169326, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kinard Animal Hospital", cat:"vet", lat:34.209208, lng:-82.146177, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greenwood Humane Society", cat:"refugio", lat:34.209457, lng:-82.133984, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greer": {nombre:"Greer", centro:[34.938136, -82.227212], tz:"America/New_York", lugares:[
  {n:"Sweet Paws Inn", cat:"refugio", lat:34.952312, lng:-82.211888, dir:"634 Arlington Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Upstate Dog Training and Pet Resort", cat:"refugio", lat:35.005156, lng:-82.256861, dir:"3669 Highway 14 North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:34.931143, lng:-82.217041, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:34.930987, lng:-82.217191, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Blue Ridge Animal Hospital", cat:"vet", lat:34.94991, lng:-82.231725, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:34.944234, lng:-82.24714, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cleveland Park Animal Hospital", cat:"vet", lat:34.945557, lng:-82.247354, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Goldenrod Veterinary Hospital", cat:"vet", lat:34.920628, lng:-82.235319, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Gone Beautiful", cat:"peluqueria", lat:34.942267, lng:-82.250956, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gretna-virginia": {nombre:"Gretna", centro:[36.95214, -79.360899], tz:"America/New_York", lugares:[
  {n:"Sit Stay & Play", cat:"peluqueria", lat:36.95338, lng:-79.360899, dir:"106 Center Street", tel:"+1 434-359-1779", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grimesland": {nombre:"Grimesland", centro:[35.563496, -77.192181], tz:"America/New_York", lugares:[
  {n:"Lux K9 Boarding & Grooming", cat:"peluqueria", lat:35.571116, lng:-77.125731, dir:"6038 Clarks Neck Road", tel:"+1-252-975-5800", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "grove-city": {nombre:"Grove City", centro:[26.911353, -82.325988], tz:"America/New_York", lugares:[
  {n:"Suncoast Humane Society", cat:"refugio", lat:26.918006, lng:-82.311789, dir:"2620 Worth Avenue", tel:"+1 941-474-7884", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Suncoast Humane Society", cat:"refugio", lat:26.923639, lng:-82.314454, dir:"6781 San Casa Drive", tel:"+1-941-474-7884", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "groveton-virginia": {nombre:"Groveton", centro:[38.769629, -77.081926], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:38.775104, lng:-77.081902, dir:"6612 Richmond Highway", tel:"+1 703-660-1300", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:38.775168, lng:-77.081282, dir:"6610 Richmond Highway", tel:"+1 703-765-2287", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grovetown": {nombre:"Grovetown", centro:[33.450416, -82.198176], tz:"America/New_York", lugares:[
  {n:"Euchee Creek Veterinary Clinic", cat:"vet", lat:33.479951, lng:-82.202453, dir:"770 Gateway Center Boulevard", tel:null, horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Columbia County Animal Services", cat:"refugio", lat:33.493817, lng:-82.22789, dir:null, tel:"+1-706-541-4077", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"All About Dogs... and Cats", cat:"refugio", lat:33.515552, lng:-82.236076, dir:null, tel:"+1-706-284-6838", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"tienda", lat:33.481808, lng:-82.194211, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grundy": {nombre:"Grundy", centro:[37.278376, -82.099811], tz:"America/New_York", lugares:[
  {n:"Southern Suds", cat:"peluqueria", lat:37.275024, lng:-82.10421, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gulf-shores": {nombre:"Gulf Shores", centro:[30.271122, -87.689383], tz:"America/Chicago", lugares:[
  {n:"Paws in the Sand", cat:"refugio", lat:30.309611, lng:-87.684095, dir:"3947 Gulf Shores Pkwy", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canal Road Animal Hospital", cat:"vet", lat:30.287765, lng:-87.639146, dir:"22640 Canal Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Walk Area", cat:"parque", lat:30.254788, lng:-87.683994, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park at Lake Shelby", cat:"parque", lat:30.253869, lng:-87.667163, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gulfport": {nombre:"Gulfport", centro:[27.748361, -82.703433], tz:"America/New_York", lugares:[
  {n:"Animal House Pet Center", cat:"tienda", lat:27.781631, lng:-82.679829, dir:"950 34th Street North", tel:"+1-727-328-0503", horas:[10.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Bow Wow Barber", cat:"peluqueria", lat:27.770789, lng:-82.674464, dir:"3020 Central Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"small dog park", cat:"parque", lat:27.742785, lng:-82.706203, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large dog park", cat:"parque", lat:27.742471, lng:-82.706197, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:27.722061, lng:-82.680637, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Park", cat:"parque", lat:27.711622, lng:-82.685309, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gulfport-mississippi": {nombre:"Gulfport", centro:[30.36742, -89.092816], tz:"America/Chicago", lugares:[
  {n:"Henry's Pet Grooming Plus", cat:"peluqueria", lat:30.384912, lng:-89.073644, dir:"1220 Pass Road", tel:"+1-228-224-9716", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.437064, lng:-89.089743, dir:"15134 Crossroads Parkway", tel:"+1 228-539-9722", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "gumbranch": {nombre:"Gumbranch", centro:[31.830587, -81.682895], tz:"America/New_York", lugares:[
  {n:"Independence Dog Park", cat:"parque", lat:31.835318, lng:-81.650305, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "guntersville": {nombre:"Guntersville", centro:[34.358706, -86.293532], tz:"America/Chicago", lugares:[
  {n:"Guntersville Dog Park", cat:"parque", lat:34.355463, lng:-86.316681, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "guyton": {nombre:"Guyton", centro:[32.336304, -81.391499], tz:"America/New_York", lugares:[
  {n:"Guyton's Wizard of Paws", cat:"peluqueria", lat:32.33107, lng:-81.392263, dir:"101 Springfield Avenue", tel:"+1-912-308-3634", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Wildlife Critters Circle of Life Rehabilitation Center", cat:"refugio", lat:32.232735, lng:-81.450276, dir:"339 Martin Road", tel:"+1 912 658 9226", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hahira": {nombre:"Hahira", centro:[30.991306, -83.372658], tz:"America/New_York", lugares:[
  {n:"Happy Tailz Grooming", cat:"peluqueria", lat:30.9899, lng:-83.372369, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hahira Veterinary Clinic", cat:"vet", lat:30.99086, lng:-83.380829, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "haile-plantation": {nombre:"Haile Plantation", centro:[29.609731, -82.438191], tz:"America/New_York", lugares:[
  {n:"St Francis Vet Care", cat:"vet", lat:29.633821, lng:-82.421824, dir:"2025 SW 75th St", tel:"+13522346564", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"St Fransis Vet Care (Suite 20)", cat:"vet", lat:29.633872, lng:-82.421866, dir:"2025 Southwest 75th Street", tel:"+1-352-234-6564", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.657162, lng:-82.415567, dir:"6869 West Newberry Road", tel:"+1 352-331-2504", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.623019, lng:-82.380452, dir:"3736 Southwest 35 Boulevard", tel:"+1 352-380-0112", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Must Love Dogs", cat:"parque", lat:29.607937, lng:-82.401716, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spyglass Dog Park", cat:"parque", lat:29.646491, lng:-82.400325, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Santa Fe Teaching Zoo", cat:"zoo", lat:29.681842, lng:-82.438227, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "haines-city": {nombre:"Haines City", centro:[28.106731, -81.628742], tz:"America/New_York", lugares:[
  {n:"Ember Dog Park", cat:"parque", lat:28.111272, lng:-81.625443, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ember Dog Park", cat:"parque", lat:28.111635, lng:-81.625026, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "half-moon": {nombre:"Half Moon", centro:[34.825996, -77.459409], tz:"America/New_York", lugares:[
  {n:"Adoption First Animal Rescue", cat:"vet", lat:34.800598, lng:-77.502852, dir:"100 Fall Creek Drive", tel:"+1-970-235-0647", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carolina Plantations Dog Park", cat:"parque", lat:34.816544, lng:-77.411497, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "halifax-north-carolina": {nombre:"Halifax", centro:[36.328633, -77.589739], tz:"America/New_York", lugares:[
  {n:"Rainbow Animal Rescue", cat:"vet", lat:36.348729, lng:-77.623942, dir:"54 Dog Pound Road", tel:"+12528836413", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hallandale-beach": {nombre:"Hallandale Beach", centro:[25.981202, -80.148379], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:25.970931, lng:-80.141185, dir:"21095 Biscayne Boulevard", tel:"+1 305-682-8858", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:25.984865, lng:-80.132577, dir:"1470 East Hallandale Beach Boulevard", tel:"+1 954-457-2060", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Neighborhood Veterinary Center", cat:"vet", lat:25.984877, lng:-80.152497, dir:"26 Southwest 4th Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Hallandale", cat:"vet", lat:25.985434, lng:-80.160744, dir:"904 West Hallandale Beach Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "halls-tennessee": {nombre:"Halls", centro:[36.082262, -83.928143], tz:"America/New_York", lugares:[
  {n:"The Gentle Doctor of East Tennessee", cat:"vet", lat:36.069264, lng:-83.937505, dir:"3524 Neal Drive", tel:"+1-865-377-3236", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:36.027552, lng:-83.926583, dir:"4856 Harvest Mill Way", tel:"+1-865-689-9331", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Barkingdale's", cat:"peluqueria", lat:36.070887, lng:-83.925482, dir:"Maynardville Pike", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fountain City Dog Park", cat:"parque", lat:36.031087, lng:-83.930875, dir:"108 Knox Road Northeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Halls Animal Hospital", cat:"vet", lat:36.08028, lng:-83.924393, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hammock-beach": {nombre:"Hammock Beach", centro:[29.605373, -81.187933], tz:"America/New_York", lugares:[
  {n:"Georgia Aquarium Conservation Field Station", cat:"vet", lat:29.669299, lng:-81.213861, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hampton-south-carolina": {nombre:"Hampton", centro:[32.87015, -81.113945], tz:"America/New_York", lugares:[
  {n:"Hampton Animal Hospital", cat:"vet", lat:32.878684, lng:-81.122328, dir:"1147 Elm Street West", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hampton-virginia": {nombre:"Hampton", centro:[37.026441, -76.344285], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:37.043374, lng:-76.394389, dir:"3670 Von Schilling Drive", tel:"+1 757-637-4828", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:37.048073, lng:-76.393387, dir:"26 Coliseum Crossing", tel:"+1 757-262-0444", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "hanahan": {nombre:"Hanahan", centro:[32.903163, -80.008369], tz:"America/New_York", lugares:[
  {n:"Tideline Aquatics", cat:"tienda", lat:32.902614, lng:-80.008546, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hanahan Veterinary Clinic", cat:"vet", lat:32.901494, lng:-80.009675, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Charleston Dog House", cat:"peluqueria", lat:32.894163, lng:-80.019325, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mixson Avenue Dog Park", cat:"parque", lat:32.883502, lng:-79.993363, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Animal Clinic", cat:"vet", lat:32.934315, lng:-79.99956, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.939518, lng:-80.038473, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.942753, lng:-80.039081, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lowcountry Pet Wellness Clinic", cat:"vet", lat:32.946223, lng:-80.038308, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Charleston Animal Hospital", cat:"vet", lat:32.862894, lng:-80.049685, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wildlife Center", cat:"zoo", lat:32.875014, lng:-80.0839, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pet Mahal", cat:"peluqueria", lat:32.908329, lng:-80.095468, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hannahs-mill": {nombre:"Hannahs Mill", centro:[32.932908, -84.349364], tz:"America/New_York", lugares:[
  {n:"Pet Sense", cat:"tienda", lat:32.913377, lng:-84.333814, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hapeville": {nombre:"Hapeville", centro:[33.660109, -84.410205], tz:"America/New_York", lugares:[
  {n:"South Bend Dog Park", cat:"parque", lat:33.700154, lng:-84.3891, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harmony-north-carolina": {nombre:"Harmony", centro:[35.955691, -80.771735], tz:"America/New_York", lugares:[
  {n:"Lowry Livestock Feeds Inc.", cat:"tienda", lat:35.954079, lng:-80.77222, dir:"3300 Harmony Highway", tel:"+1-704-546-2410", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harrisburg-north-carolina": {nombre:"Harrisburg", centro:[35.325829, -80.645498], tz:"America/New_York", lugares:[
  {n:"University Animal Medical, & Dental Clinic", cat:"vet", lat:35.322021, lng:-80.654316, dir:"4650 NC Highway 49", tel:"+1-704-455-5907", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Story University North Dog Park", cat:"parque", lat:35.349803, lng:-80.700905, dir:"3800 Morehead Road", tel:"+1-980-340-9300", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.372714, lng:-80.714791, dir:"8070 Concord Mills Boulevard", tel:"+1 704-979-1952", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Brookdale Animal Hospital", cat:"vet", lat:35.283492, lng:-80.670372, dir:"13521 Plaza Road Extension", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Weddington Road Bark Park", cat:"parque", lat:35.372324, lng:-80.704153, dir:"8955 Weddington Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hight Veterinary Hospital", cat:"vet", lat:35.315677, lng:-80.739417, dir:"9528 N Tryon St", tel:null, horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.336933, lng:-80.755074, dir:"1824 East Arbors Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.316409, lng:-80.674072, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heather Ridge Dog Park", cat:"parque", lat:35.293098, lng:-80.734103, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.310504, lng:-80.747798, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harrison-tennessee": {nombre:"Harrison", centro:[35.113684, -85.138009], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:35.037119, lng:-85.14971, dir:"2288 Gunbarrel Road", tel:"+1 423-499-1011", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.034377, lng:-85.151593, dir:"2130 Gunbarrel Road", tel:"+1 423-899-9223", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"The Inn at Wolftever Harrison Pet Boarding and Grooming", cat:"refugio", lat:35.122587, lng:-85.125517, dir:"6225 Highway 58", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hamilton Family Medicine", cat:"refugio", lat:35.040987, lng:-85.150818, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"easyvetclinic Veterinarian Chattanooga", cat:"vet", lat:35.038753, lng:-85.15168, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harrisonburg-virginia": {nombre:"Harrisonburg", centro:[38.449331, -78.868883], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:38.43289, lng:-78.853406, dir:"253 Burgess Road", tel:"+1 540-432-3830", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.433012, lng:-78.847188, dir:"1671 East Market Street", tel:"+1 540-432-6460", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Valley Veterinary Hospital", cat:"vet", lat:38.428477, lng:-78.855038, dir:"498 University Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sylvia's Pets", cat:"tienda", lat:38.429132, lng:-78.849677, dir:"226 University Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Harrison Dog Park", cat:"parque", lat:38.424871, lng:-78.870003, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hartselle": {nombre:"Hartselle", centro:[34.443428, -86.935284], tz:"America/Chicago", lugares:[
  {n:"Hartselle Dog Park", cat:"parque", lat:34.452488, lng:-86.938711, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hartsville-south-carolina": {nombre:"Hartsville", centro:[34.374043, -80.073401], tz:"America/New_York", lugares:[
  {n:"Purrs McBarkin', LLC", cat:"tienda", lat:34.374909, lng:-80.072351, dir:"126 East Carolina Avenue", tel:"+1 843-917-0089", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Sandy Memorial Animal Hospital", cat:"vet", lat:34.371264, lng:-80.072043, dir:"318 South 5th Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hartwell": {nombre:"Hartwell", centro:[34.352882, -82.932087], tz:"America/New_York", lugares:[
  {n:"Pet Villa", cat:"tienda", lat:34.343356, lng:-82.861783, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake Hartwell Wildlife Safari", cat:"zoo", lat:34.450656, lng:-82.939854, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harvest": {nombre:"Harvest", centro:[34.855644, -86.750832], tz:"America/Chicago", lugares:[
  {n:"Rocket City Veterinary Hospital Pine Grove", cat:"vet", lat:34.794213, lng:-86.748384, dir:"309 Pine Grove Road", tel:"+1-256-333-2345", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Countryside Veterinary Hospital", cat:"vet", lat:34.884592, lng:-86.738314, dir:"5267 Old Railroad Bed Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hattiesburg": {nombre:"Hattiesburg", centro:[31.327119, -89.290339], tz:"America/Chicago", lugares:[
  {n:"Hattiesburg Zoo", cat:"zoo", lat:31.323236, lng:-89.31556, dir:"107 South 17th Avenue", tel:"+1-601-545-4576", horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"vet", lat:31.324509, lng:-89.341599, dir:"3422 Hardy Street", tel:"+1 601-264-5785", horas:[7.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Southern Pines Animal Shelter", cat:"refugio", lat:31.352358, lng:-89.334668, dir:"1901 North 31st Avenue", tel:"+1-601-544-6632", horas:[12.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:31.322404, lng:-89.357841, dir:"4600 Hardy Street", tel:"+1 601-264-0682", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pine Belt Veterinary Hospital and Kennel", cat:"vet", lat:31.398931, lng:-89.386089, dir:"7436 US 49", tel:"+1-601-268-2696", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Central Bark at Keg and Barrel Park", cat:"parque", lat:31.321335, lng:-89.297115, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:31.344885, lng:-89.400675, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:31.344724, lng:-89.401099, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "havana-florida": {nombre:"Havana", centro:[30.625562, -84.415377], tz:"America/New_York", lugares:[
  {n:"Bannerman Pet Care", cat:"vet", lat:30.586613, lng:-84.250555, dir:"1580 Bannerman Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Divine Dog Hotel", cat:"refugio", lat:30.546079, lng:-84.369764, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "haverhill": {nombre:"Haverhill", centro:[26.693172, -80.113026], tz:"America/New_York", lugares:[
  {n:"Peggy Adams Animal Rescue League", cat:"refugio", lat:26.722962, lng:-80.108918, dir:"3200 North Military Trail", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Royal Sain3t George Dog Park", cat:"parque", lat:26.725311, lng:-80.094855, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "haw-river": {nombre:"Haw River", centro:[36.091526, -79.364186], tz:"America/New_York", lugares:[
  {n:"Alamance Veterinary Hospital", cat:"vet", lat:36.09208, lng:-79.389555, dir:"2416 North Church Street", tel:"+1-336-228-1773", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hayfield-virginia": {nombre:"Hayfield", centro:[38.7521, -77.139674], tz:"America/New_York", lugares:[
  {n:"Steadfast K9, LLC", cat:"peluqueria", lat:38.751188, lng:-77.133062, dir:"5702 Broadmoor Street", tel:"+1 703-415-6255", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kingsview Animal Hospital", cat:"vet", lat:38.765515, lng:-77.154438, dir:"7025 Manchester Boulevard", tel:"+1 703-971-9292", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hayfield Animal Hospital", cat:"vet", lat:38.747589, lng:-77.145033, dir:"7724 Telegraph Road", tel:null, horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:38.74183, lng:-77.16319, dir:null, tel:"+1 703-313-7973", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "haymarket": {nombre:"Haymarket", centro:[38.81214, -77.636804], tz:"America/New_York", lugares:[
  {n:"VCA Healthy PAWS Medical Center", cat:"vet", lat:38.810876, lng:-77.632956, dir:"14840 Washington Street", tel:"+1-703-754-4146", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Valu", cat:"tienda", lat:38.784511, lng:-77.649185, dir:"8061 Stonewall Shops Square", tel:"+1 571-261-3015", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Dominion Valley Animal Hospital", cat:"vet", lat:38.844696, lng:-77.640699, dir:"5371 Merchants View Square", tel:"+1-703-753-4444", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:38.784715, lng:-77.664107, dir:"7998 Crescent Park Drive", tel:"+1-703-753-7333", horas:[9.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"A Pup's Valley", cat:"refugio", lat:38.813621, lng:-77.637486, dir:"6680 Fayette Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hayneville": {nombre:"Hayneville", centro:[32.184032, -86.580253], tz:"America/Chicago", lugares:[
  {n:"Alabama Safari Park", cat:"zoo", lat:32.21221, lng:-86.396201, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hazel-green": {nombre:"Hazel Green", centro:[34.93231, -86.571939], tz:"America/Chicago", lugares:[
  {n:"Hazel Green Animal Hospital & Pet Resort", cat:"vet", lat:34.924728, lng:-86.571432, dir:"103 Salem Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "heathrow": {nombre:"Heathrow", centro:[28.778378, -81.37465], tz:"America/New_York", lugares:[
  {n:"Woof Gang Bakery", cat:"tienda", lat:28.755769, lng:-81.370094, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hebron-kentucky": {nombre:"Hebron", centro:[39.065813, -84.702758], tz:"America/New_York", lugares:[
  {n:"Creation Zoo", cat:"zoo", lat:39.085385, lng:-84.781398, dir:"2800 Bullittsburg Church Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kelly's Klips", cat:"peluqueria", lat:39.065751, lng:-84.698797, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Cat Vet of Hebron", cat:"vet", lat:39.083813, lng:-84.711445, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "henderson-kentucky": {nombre:"Henderson", centro:[37.84076, -87.591632], tz:"America/Chicago", lugares:[
  {n:"New Hope Animal Rescue Center", cat:"refugio", lat:37.823129, lng:-87.578262, dir:"526 Atkinson Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "henderson-north-carolina": {nombre:"Henderson", centro:[36.327365, -78.402726], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:36.337714, lng:-78.443837, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hendersonville": {nombre:"Hendersonville", centro:[35.318728, -82.460953], tz:"America/New_York", lugares:[
  {n:"All Saints Animal Hospital", cat:"vet", lat:35.320428, lng:-82.45865, dir:"720 North Grove Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wag! A Unique Pet Boutique", cat:"tienda", lat:35.315507, lng:-82.460223, dir:null, tel:"+1 828-697-7799", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Stacey's Grooming", cat:"peluqueria", lat:35.322902, lng:-82.455578, dir:"655 7th Avenue East", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.30793, lng:-82.460186, dir:"213 Greenville Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets Own Place", cat:"parque", lat:35.325521, lng:-82.452216, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:35.308005, lng:-82.454873, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hendersonville-tennessee": {nombre:"Hendersonville", centro:[36.304918, -86.621443], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:36.320616, lng:-86.60211, dir:"217 Indian Lake Boulevard", tel:"+1-615-826-1424", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"New Shackle Island Veterinary Hospital", cat:"vet", lat:36.335346, lng:-86.61674, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hernando-mississippi": {nombre:"Hernando", centro:[34.823952, -89.993702], tz:"America/Chicago", lugares:[
  {n:"Lizzys Luxury Lodge and Daycare", cat:"refugio", lat:34.810618, lng:-89.992767, dir:"191 Renasent Bank Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hernando Dog and Skate Park", cat:"parque", lat:34.810512, lng:-89.994455, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "herndon-virginia": {nombre:"Herndon", centro:[38.969532, -77.385948], tz:"America/New_York", lugares:[
  {n:"Dominion Animal Hospital", cat:"vet", lat:38.971086, lng:-77.385281, dir:"795 Station Street", tel:null, horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:38.969763, lng:-77.381226, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hialeah-gardens": {nombre:"Hialeah Gardens", centro:[25.865096, -80.324496], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:25.867005, lng:-80.310432, dir:"1375 West 49th Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hickory-hill": {nombre:"Hickory Hill", centro:[38.28757, -85.568294], tz:"America/Chicago", lugares:[
  {n:"Sawyer Dog Park", cat:"parque", lat:38.289959, lng:-85.55375, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hickory-north-carolina": {nombre:"Hickory", centro:[35.733331, -81.344291], tz:"America/New_York", lugares:[
  {n:"Paw Tales Lodge & Day Spa", cat:"refugio", lat:35.76335, lng:-81.306163, dir:"1575 25th Avenue Northeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fairbrook Optimist Park", cat:"parque", lat:35.72686, lng:-81.312717, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "high-point": {nombre:"High Point", centro:[35.955692, -80.005318], tz:"America/New_York", lugares:[
  {n:"Emerywood Grooming", cat:"peluqueria", lat:35.979342, lng:-80.019869, dir:"1800 North Main Street", tel:"+1-336-862-0331", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Center Veterinary Hospital", cat:"vet", lat:35.930885, lng:-80.017324, dir:"1203 West Market Center Drive", tel:"+1-336-886-8611", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Northwood Animal Hospital", cat:"vet", lat:35.984263, lng:-80.009833, dir:"507 Eastchester Drive", tel:"+1-336-887-2606", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.98458, lng:-80.018392, dir:"265 Eastchester Drive", tel:"+1 336-887-0525", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Emerywood Veterinary Hospital", cat:"vet", lat:35.974759, lng:-80.035783, dir:"812 West Lexington Avenue", tel:"+1-336-885-7575", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Westchester Veterinary Hospital", cat:"vet", lat:35.931779, lng:-80.03572, dir:"2816 Westchester Drive", tel:"+1-336-885-0067", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "high-shoals": {nombre:"High Shoals", centro:[35.402635, -81.202302], tz:"America/New_York", lugares:[
  {n:"Zoomies Adventure Pet Resort", cat:"refugio", lat:35.389887, lng:-81.207961, dir:"645 South Lincoln Street", tel:null, horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "high-springs": {nombre:"High Springs", centro:[29.826832, -82.596858], tz:"America/New_York", lugares:[
  {n:"Horse Barn", cat:"refugio", lat:29.848551, lng:-82.590316, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "highland-beach": {nombre:"Highland Beach", centro:[26.39952, -80.065598], tz:"America/New_York", lugares:[
  {n:"Bark Park Dog Beach", cat:"parque", lat:26.384708, lng:-80.066648, dir:"3001 North Ocean Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "highland-heights": {nombre:"Highland Heights", centro:[39.03309, -84.452151], tz:"America/New_York", lugares:[
  {n:"PetWow", cat:"vet", lat:39.03393, lng:-84.452086, dir:"2717 Alexandria Way", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "highland-springs": {nombre:"Highland Springs", centro:[37.546012, -77.327844], tz:"America/New_York", lugares:[
  {n:"11 North Dog Park", cat:"parque", lat:37.55305, lng:-77.370591, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "highlands-north-carolina": {nombre:"Highlands", centro:[35.052591, -83.196817], tz:"America/New_York", lugares:[
  {n:"Highlands Mountain Paws", cat:"tienda", lat:35.05287, lng:-83.1974, dir:"390 Main Street", tel:"+1 828-526-7297", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Highlands Dog Park", cat:"parque", lat:35.057329, lng:-83.198934, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cashiers Dog Park", cat:"parque", lat:35.110814, lng:-83.105877, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hildebran": {nombre:"Hildebran", centro:[35.714021, -81.422033], tz:"America/New_York", lugares:[
  {n:"Burns Pet Food", cat:"tienda", lat:35.714829, lng:-81.430368, dir:"305 3rd Street Southwest", tel:"+18283975380", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hillsboro-west-virginia": {nombre:"Hillsboro", centro:[38.135438, -80.21313], tz:"America/New_York", lugares:[
  {n:"point of view farm", cat:"refugio", lat:38.068981, lng:-80.225231, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"point of view farm", cat:"refugio", lat:38.068265, lng:-80.223936, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"point of view farm", cat:"refugio", lat:38.066582, lng:-80.223918, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hillsborough-north-carolina": {nombre:"Hillsborough", centro:[36.075382, -79.099396], tz:"America/New_York", lugares:[
  {n:"North Churton Animal Hospital", cat:"vet", lat:36.085008, lng:-79.099952, dir:"636 North Churton Street", tel:"+1 919 644 7387", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Paws at the Corner", cat:"tienda", lat:36.072019, lng:-79.111099, dir:"246 South Nash Street", tel:"+1-919-644-0729", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Ooh-Lala Pet Spa", cat:"peluqueria", lat:36.083872, lng:-79.080673, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hilltop-south-carolina": {nombre:"Hilltop", centro:[34.982065, -81.963716], tz:"America/New_York", lugares:[
  {n:"Wigglebutts Groom'n", cat:"peluqueria", lat:35.007226, lng:-81.95143, dir:"1480 Boiling Springs Road", tel:"+1-325-513-7387", horas:[7.5, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Spartanburg Humane Society", cat:"refugio", lat:34.974944, lng:-81.963346, dir:"150 Dexter Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hinesville": {nombre:"Hinesville", centro:[31.847735, -81.59607], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:31.823707, lng:-81.601458, dir:"863 Suite 106 West Oglethorpe Highway", tel:"+1 912-255-6012", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Fish World & Pet Shop", cat:"tienda", lat:31.826752, lng:-81.62183, dir:"903 Elma G Miles Parkway", tel:"+1-912-876-8423", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cisco's Dog Park At Bryant Commons Park", cat:"parque", lat:31.837869, lng:-81.59231, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hiram": {nombre:"Hiram", centro:[33.87566, -84.762159], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.886148, lng:-84.746353, dir:"4794 Jimmy Lee Smith Parkway", tel:"+1 678-567-0583", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Hiram Animal Hospital", cat:"vet", lat:33.877286, lng:-84.760982, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Ark Animal Hospital", cat:"vet", lat:33.900838, lng:-84.771526, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Gone Clean", cat:"peluqueria", lat:33.818778, lng:-84.813549, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "holiday": {nombre:"Holiday", centro:[28.187927, -82.740074], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:28.196884, lng:-82.740801, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "holly-hill": {nombre:"Holly Hill", centro:[29.243592, -81.037555], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:29.261987, lng:-81.028203, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "holly-ridge": {nombre:"Holly Ridge", centro:[34.495445, -77.55497], tz:"America/New_York", lugares:[
  {n:"Holly Ridge Veterinary Hospital", cat:"vet", lat:34.497988, lng:-77.550257, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "holly-springs": {nombre:"Holly Springs", centro:[34.173986, -84.501319], tz:"America/New_York", lugares:[
  {n:"Hickory Flat Animal Hospital", cat:"vet", lat:34.174818, lng:-84.421557, dir:"2939 East Cherokee Drive", tel:"+1-770-345-2816", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"BridgemillAnimalHospital", cat:"vet", lat:34.183792, lng:-84.544427, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "holly-springs-north-carolina": {nombre:"Holly Springs", centro:[35.651266, -78.833622], tz:"America/New_York", lugares:[
  {n:"Holly Springs Veterinary Hospital", cat:"vet", lat:35.665743, lng:-78.834972, dir:"1050 N Main St", tel:"+19195671775", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arbor Creek Animal Hospital", cat:"vet", lat:35.678839, lng:-78.823671, dir:"4240 Sunset Lake Road", tel:"+1 919 3037880", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dazzling Dogz Grooming LLC", cat:"peluqueria", lat:35.665934, lng:-78.796481, dir:"5293 Sunset Lake Road", tel:"+1-919-363-0901", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sugg Farm Dog Park", cat:"parque", lat:35.639348, lng:-78.814952, dir:"2401 Grigsby Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Mania", cat:"tienda", lat:35.665983, lng:-78.796523, dir:"5289 Sunset Lake Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hope Veterinary Hospital of Holly Springs", cat:"vet", lat:35.639522, lng:-78.838153, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hemlock Bluffs Animal Hospital", cat:"vet", lat:35.660046, lng:-78.7929, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hollymead": {nombre:"Hollymead", centro:[38.12578, -78.442499], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.126866, lng:-78.442028, dir:"101 Community Street", tel:"+1 434-964-9213", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Natural Pet Essentials", cat:"tienda", lat:38.131105, lng:-78.437415, dir:"3440 Seminole Trail", tel:"+1-434-979-9779", horas:[12.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Forest Lakes Veterinary Clinic", cat:"vet", lat:38.130957, lng:-78.437738, dir:"3440 Seminole Trail", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VETSS", cat:"vet", lat:38.136407, lng:-78.446435, dir:"1540 Airport Road", tel:null, horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "hollyvilla": {nombre:"Hollyvilla", centro:[38.09368, -85.745516], tz:"America/Chicago", lugares:[
  {n:"Bannon Woods Veterinary Hospital", cat:"vet", lat:38.089971, lng:-85.746438, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hollywood-florida": {nombre:"Hollywood", centro:[26.011201, -80.14949], tz:"America/New_York", lugares:[
  {n:"Animal Medical Center & Bird Clinic Of Hollywood", cat:"vet", lat:26.016, lng:-80.142931, dir:"521 Federal Highway", tel:"+19549202400", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hollywood-south-carolina": {nombre:"Hollywood", centro:[32.734344, -80.241765], tz:"America/New_York", lugares:[
  {n:"Hollywood Veterinary Clinic", cat:"vet", lat:32.735857, lng:-80.233843, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "holt": {nombre:"Holt", centro:[33.229771, -87.484149], tz:"America/Chicago", lugares:[
  {n:"McLendon Veterinary Clinic", cat:"vet", lat:33.205686, lng:-87.51668, dir:"1525 University Boulevard East", tel:"+1 205-553-8306", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"tienda", lat:33.263395, lng:-87.514258, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "homestead": {nombre:"Homestead", centro:[25.471895, -80.47599], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:25.477954, lng:-80.463613, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "homewood": {nombre:"Homewood", centro:[33.47371, -86.808451], tz:"America/Chicago", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:33.481638, lng:-86.792611, dir:"1722 27th Court South", tel:"+1-205-440-3888", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:33.464866, lng:-86.819513, dir:"421 Green Springs Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rub a Dub Dog Bathhouse and Spa", cat:"peluqueria", lat:33.478196, lng:-86.788252, dir:"1917 Oxmoor Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "homosassa": {nombre:"Homosassa", centro:[28.781372, -82.6151], tz:"America/New_York", lugares:[
  {n:"Monkey Island", cat:"zoo", lat:28.785839, lng:-82.616906, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "homosassa-springs": {nombre:"Homosassa Springs", centro:[28.803594, -82.575933], tz:"America/New_York", lugares:[
  {n:"Citrus County Dog Park", cat:"parque", lat:28.788322, lng:-82.579648, dir:"8950 Bluebird Springs Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "honea-path": {nombre:"Honea Path", centro:[34.446502, -82.391512], tz:"America/New_York", lugares:[
  {n:"Honea Path Animal Hospital", cat:"vet", lat:34.448698, lng:-82.394649, dir:"135 North Main Street", tel:"+1-864-369-2660", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tammy's Pet Shack", cat:"tienda", lat:34.450079, lng:-82.395815, dir:"400 North Shirley Avenue", tel:"+1-864-369-1992", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hoover": {nombre:"Hoover", centro:[33.384893, -86.807048], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.377633, lng:-86.800616, dir:"3780 Riverchase Village", tel:"+1 205-682-9556", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.377604, lng:-86.800404, dir:"3780 Riverchase Village", tel:"+1 205-682-9893", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.374359, lng:-86.810269, dir:"3232 Galleria Circle", tel:"+1 205-682-9893", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:33.415522, lng:-86.844412, dir:"2153 Clearview Road", tel:"+1 205-846-9630", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.359922, lng:-86.854949, dir:"5631 Grove Boulevard", tel:"+1 205-987-9623", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Loch Haven Dog Park", cat:"parque", lat:33.405662, lng:-86.776874, dir:"3469 Loch Haven Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart Mini Dog Park", cat:"parque", lat:33.377872, lng:-86.800518, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Patton Chapel Animal Clinic", cat:"vet", lat:33.393873, lng:-86.805707, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Classic Pup", cat:"peluqueria", lat:33.396033, lng:-86.799359, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barkberry Place Dog Park", cat:"parque", lat:33.411291, lng:-86.810229, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vestavia Animal Clinic", cat:"vet", lat:33.41707, lng:-86.80201, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hopewell-virginia": {nombre:"Hopewell", centro:[37.304315, -77.2872], tz:"America/New_York", lugares:[
  {n:"Downtown Pups", cat:"peluqueria", lat:37.304407, lng:-77.285585, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hopkinsville": {nombre:"Hopkinsville", centro:[36.865785, -87.489412], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:36.814712, lng:-87.474303, dir:"4813 Fort Campbell Boulevard", tel:"+1 270-987-3480", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"The Paw House", cat:"peluqueria", lat:36.861338, lng:-87.51512, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hopkinsville Animal Clinic", cat:"vet", lat:36.835145, lng:-87.471888, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "horizon-west": {nombre:"Horizon West", centro:[28.474433, -81.626521], tz:"America/New_York", lugares:[
  {n:"Orchard Park Dog Park", cat:"parque", lat:28.501089, lng:-81.609383, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"EasyVet", cat:"vet", lat:28.428872, lng:-81.617768, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Watermark Dog Park", cat:"parque", lat:28.426504, lng:-81.617229, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Buena Vista Place Dog Park", cat:"parque", lat:28.433318, lng:-81.57631, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "horse-cave": {nombre:"Horse Cave", centro:[37.179496, -85.906918], tz:"America/Chicago", lugares:[
  {n:"Dutch Country Safari Park", cat:"zoo", lat:37.227296, lng:-85.925182, dir:"2125 L and N Turnpike Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kentucky Down Under Adventure Zoo", cat:"zoo", lat:37.204931, lng:-85.931264, dir:null, tel:null, horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "hoschton": {nombre:"Hoschton", centro:[34.096496, -83.761284], tz:"America/New_York", lugares:[
  {n:"Dog Gone Cute", cat:"peluqueria", lat:34.091115, lng:-83.759743, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hoschton Animal Hospital", cat:"vet", lat:34.088645, lng:-83.753833, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hot-springs-virginia": {nombre:"Hot Springs", centro:[37.99957, -79.831719], tz:"America/New_York", lugares:[
  {n:"Bath Animal Welfare Foundation", cat:"refugio", lat:38.013051, lng:-79.811896, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "houston-acres": {nombre:"Houston Acres", centro:[38.214237, -85.613849], tz:"America/Chicago", lugares:[
  {n:"Breckenridge Animal Hospital", cat:"vet", lat:38.198197, lng:-85.624212, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hudson-north-carolina": {nombre:"Hudson", centro:[35.848464, -81.495927], tz:"America/New_York", lugares:[
  {n:"Hudson Dog Park", cat:"parque", lat:35.84988, lng:-81.489428, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hull": {nombre:"Hull", centro:[34.014835, -83.293766], tz:"America/New_York", lugares:[
  {n:"Petsense", cat:"tienda", lat:33.995307, lng:-83.335374, dir:"660 US 29 North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Hospital", cat:"vet", lat:33.997391, lng:-83.336546, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hunters-creek": {nombre:"Hunters Creek", centro:[28.364329, -81.423999], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:28.346985, lng:-81.421928, dir:"3246 North John Young Parkway", tel:"+1 407-933-0819", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:28.346045, lng:-81.482172, dir:"3201 Vineland Road", tel:"+1 407-606-0037", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "huntersville-north-carolina": {nombre:"Huntersville", centro:[35.410828, -80.84293], tz:"America/New_York", lugares:[
  {n:"Zoom Room Huntersville-Lake Norman", cat:"peluqueria", lat:35.412376, lng:-80.854674, dir:"Statesville Road", tel:"+17042370358", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.443508, lng:-80.85907, dir:"10017 Biddick Lane", tel:"+1 704-895-7643", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.347135, lng:-80.85437, dir:"10235 Perimeter Parkway", tel:"+1 704-599-0475", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Carolina Raptor Center", cat:"zoo", lat:35.350349, lng:-80.918371, dir:"6000 Sample Road", tel:"+1 704-875-6521", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Huntersville Vet Clinic & Surgical Center", cat:"vet", lat:35.448329, lng:-80.80912, dir:"15035 Black Farms Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetPeople", cat:"tienda", lat:35.374028, lng:-80.788076, dir:"10018 Benfield Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.370349, lng:-80.784143, dir:"5815 Highland Shoppes Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rosedale Dog park", cat:"parque", lat:35.409949, lng:-80.865851, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dogs Park", cat:"parque", lat:35.351687, lng:-80.811924, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dogs Park", cat:"parque", lat:35.350641, lng:-80.812473, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "huntington-virginia": {nombre:"Huntington", centro:[38.79401, -77.070571], tz:"America/New_York", lugares:[
  {n:"Happy Cat Hotel & Spa", cat:"tienda", lat:38.805169, lng:-77.070583, dir:"2391 South Dove Street", tel:"+1-703-570-4105", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:38.80632, lng:-77.075776, dir:"2660 Duke Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:38.807178, lng:-77.084583, dir:"3121 Colvin Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Backyard Bird Feeder", cat:"tienda", lat:38.808675, lng:-77.086673, dir:"3225 Duke Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carlyle Dog Park", cat:"parque", lat:38.804139, lng:-77.06783, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fort Williams Dog Park", cat:"parque", lat:38.814031, lng:-77.094296, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Timberbranch Dog Park", cat:"parque", lat:38.821354, lng:-77.076007, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chinquapin Dog Park", cat:"parque", lat:38.822328, lng:-77.081832, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"For Pets Sake", cat:"tienda", lat:38.829481, lng:-77.08548, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "huntington-west-virginia": {nombre:"Huntington", centro:[38.41925, -82.445154], tz:"America/New_York", lugares:[
  {n:"Huntington Dog and Cat Hospital", cat:"vet", lat:38.418661, lng:-82.464688, dir:"200 West 5th Street", tel:null, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Petsafe Dog Park", cat:"parque", lat:38.404491, lng:-82.435858, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stonecrest Animal Medical Center", cat:"vet", lat:38.396025, lng:-82.451489, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ayers Animal Hospital", cat:"vet", lat:38.411935, lng:-82.414423, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Huntington Cabell Wayne Animal Control Shelter", cat:"refugio", lat:38.402489, lng:-82.483957, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "huntsville": {nombre:"Huntsville", centro:[34.729847, -86.585901], tz:"America/Chicago", lugares:[
  {n:"Wild Birds Unlimited", cat:"tienda", lat:34.6928, lng:-86.57014, dir:"4800 Whitesburg Drive South", tel:"+1-256-536-9128", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:34.672658, lng:-86.541097, dir:"2750 Carl T Jones Drive Southeast", tel:"+1 256-880-3332", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.672747, lng:-86.541008, dir:"2750 Carl T Jones Drive Southeast", tel:"+1 256-213-9773", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"The Dapper Dog Spaw", cat:"peluqueria", lat:34.661585, lng:-86.571951, dir:"7914 Memorial Parkway Southwest", tel:"+1-256-385-8581", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Linderman Animal Hospital", cat:"vet", lat:34.692908, lng:-86.509653, dir:"4850 Cove Creek Drive", tel:"+1 256-534-7387", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:34.746161, lng:-86.677335, dir:"6140 University Drive Northwest", tel:"+1 256-837-7800", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Microwave Dave Dog Spot", cat:"parque", lat:34.738377, lng:-86.587325, dir:"Cleveland Avenue Northwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Emergency Clinic", cat:"vet", lat:34.718016, lng:-86.593234, dir:"2112 Memorial Parkway Southwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rocket City Dog Bar", cat:"parque", lat:34.722768, lng:-86.603675, dir:"2404 West Clinton Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Huntsville Animal Clinic", cat:"vet", lat:34.712008, lng:-86.59125, dir:"2506 Memorial Parkway Southwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pennington Animal Hospital", cat:"vet", lat:34.693033, lng:-86.58127, dir:"Memorial Parkway Southwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Area", cat:"parque", lat:34.7379, lng:-86.587644, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Notorious D.O.G. Dog Rescue", cat:"refugio", lat:34.724477, lng:-86.604374, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greater Huntsville Humane Society", cat:"vet", lat:34.691459, lng:-86.600573, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Huntsville K9 Training Field", cat:"parque", lat:34.680668, lng:-86.591401, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Huntsville Animal Shelter", cat:"refugio", lat:34.680092, lng:-86.60939, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A New Leash on Life", cat:"refugio", lat:34.688931, lng:-86.505888, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hurtsboro": {nombre:"Hurtsboro", centro:[32.241815, -85.416333], tz:"America/New_York", lugares:[
  {n:"Hurtsboro Veterinary Clinic", cat:"vet", lat:32.240388, lng:-85.415114, dir:"534 Main Street", tel:"+1-334-667-6800", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "hutchison": {nombre:"Hutchison", centro:[38.965029, -77.408251], tz:"America/New_York", lugares:[
  {n:"Chandon Park Dog Park", cat:"parque", lat:38.959473, lng:-77.39886, dir:"900 Palmer Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hybla-valley": {nombre:"Hybla Valley", centro:[38.74761, -77.082696], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.749828, lng:-77.08791, dir:"7690 Richmond Highway", tel:"+1 703-721-0650", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "idylwood": {nombre:"Idylwood", centro:[38.895111, -77.211648], tz:"America/New_York", lugares:[
  {n:"Falls Church Animal Hospital", cat:"vet", lat:38.894176, lng:-77.19023, dir:"1249 West Broad Street", tel:"+1-703-532-6121", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "independence-kentucky": {nombre:"Independence", centro:[38.943118, -84.544109], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:38.929755, lng:-84.548444, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "independent-hill": {nombre:"Independent Hill", centro:[38.635763, -77.437845], tz:"America/New_York", lugares:[
  {n:"Independent Hill Veterinary Clinic", cat:"vet", lat:38.660895, lng:-77.441386, dir:"13444 Dumfries Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Prince William County Animal Shelter", cat:"refugio", lat:38.634304, lng:-77.430153, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "indian-harbour-beach": {nombre:"Indian Harbour Beach", centro:[28.148937, -80.58688], tz:"America/New_York", lugares:[
  {n:"Aloha Bird & Pet", cat:"vet", lat:28.139011, lng:-80.583735, dir:null, tel:"+1-321-777-5444", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canova Beach Park", cat:"parque", lat:28.138261, lng:-80.579668, dir:"3299 Highway A1A", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aloha Pet Hospital", cat:"vet", lat:28.139047, lng:-80.58378, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"HOPE for Brevard", cat:"refugio", lat:28.1308, lng:-80.631743, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "indian-rocks-beach": {nombre:"Indian Rocks Beach", centro:[27.875301, -82.851215], tz:"America/New_York", lugares:[
  {n:"Dirty Dog Self Serve Dog Wash", cat:"peluqueria", lat:27.879924, lng:-82.834531, dir:"14100 Walsingham Road", tel:"+1-727-309-1751", horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Boutique of Largo", cat:"tienda", lat:27.880123, lng:-82.831161, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "indian-shores": {nombre:"Indian Shores", centro:[27.862801, -82.848437], tz:"America/New_York", lugares:[
  {n:"The Dog & Parrot", cat:"peluqueria", lat:27.857473, lng:-82.846318, dir:"19703 Gulf Boulevard", tel:"+1 727-593-3208", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "indian-springs-village": {nombre:"Indian Springs Village", centro:[33.355388, -86.754432], tz:"America/Chicago", lugares:[
  {n:"Metro Cat Clinic", cat:"vet", lat:33.350519, lng:-86.786809, dir:"2880 Valleydale Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Birmingham Veterinary Internal Medicine", cat:"vet", lat:33.363082, lng:-86.767415, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Indian Springs Animal Clinic", cat:"vet", lat:33.34508, lng:-86.770078, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Caldwell Mill Animal Clinic", cat:"vet", lat:33.384876, lng:-86.739935, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "indian-trail": {nombre:"Indian Trail", centro:[35.076814, -80.669235], tz:"America/New_York", lugares:[
  {n:"Carolina Veterinary Specialists - Matthews, NC", cat:"vet", lat:35.089297, lng:-80.695632, dir:"4099 Campus Ridge Road", tel:"+1-704-815-3939", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "indianola-mississippi": {nombre:"Indianola", centro:[33.450951, -90.655092], tz:"America/Chicago", lugares:[
  {n:"Hough-Dement Animal Shelter", cat:"refugio", lat:33.467248, lng:-90.621651, dir:"342 North Martin Luther King Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "inman-south-carolina": {nombre:"Inman", centro:[35.047841, -82.090608], tz:"America/New_York", lugares:[
  {n:"Creature Comfort", cat:"vet", lat:35.083551, lng:-82.058387, dir:"2045 Highway 292", tel:null, horas:[7.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Hollywild Animal Park", cat:"zoo", lat:35.024063, lng:-82.145047, dir:"2325 Hampton Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "innovation": {nombre:"Innovation", centro:[38.757723, -77.52698], tz:"America/New_York", lugares:[
  {n:"Prince William Animal Hospital", cat:"vet", lat:38.746581, lng:-77.505127, dir:"10227 Nokesville Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "innsbrook-virginia": {nombre:"Innsbrook", centro:[37.647297, -77.582942], tz:"America/New_York", lugares:[
  {n:"Scenthound", cat:"peluqueria", lat:37.646372, lng:-77.585435, dir:"10921 West Broad Street", tel:"+1-804-924-4331", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:37.642792, lng:-77.584074, dir:"3601 Cox Road", tel:"+1-804-625-4444", horas:[6.5, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"The Dog Stop", cat:"refugio", lat:37.638307, lng:-77.55194, dir:"9132 West Broad Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Locke A. Taylor DVM and Associates", cat:"vet", lat:37.625822, lng:-77.549864, dir:"2801 North Parham Road", tel:null, horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Springfield Veterinary Center", cat:"vet", lat:37.649563, lng:-77.561384, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "isle-of-hope": {nombre:"Isle of Hope", centro:[31.98188, -81.060945], tz:"America/New_York", lugares:[
  {n:"The Hipster Hound", cat:"peluqueria", lat:32.007324, lng:-81.113758, dir:null, tel:"+1-912-436-6560", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:32.001894, lng:-81.122508, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "isle-of-palms": {nombre:"Isle of Palms", centro:[32.78677, -79.788036], tz:"America/New_York", lugares:[
  {n:"Isle Of Palms Recreational Center Dog Park", cat:"parque", lat:32.795793, lng:-79.775889, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Park West Veterinary", cat:"vet", lat:32.881583, lng:-79.773596, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "isle-of-wight": {nombre:"Isle of Wight", centro:[36.907649, -76.707735], tz:"America/New_York", lugares:[
  {n:"Isle of Wight County Animal Services", cat:"refugio", lat:36.909261, lng:-76.703779, dir:"13044 Poor House Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ivor": {nombre:"Ivor", centro:[36.904039, -76.899682], tz:"America/New_York", lugares:[
  {n:"Main Street Dogs Training & Boarding", cat:"refugio", lat:36.906144, lng:-76.896792, dir:"8294 Main Street", tel:"+1-757-859-5044", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Ivor Veterinary Clinic", cat:"vet", lat:36.904447, lng:-76.890766, dir:"36038 General Mahone Boulevard", tel:"+1-757-859-6415", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "ivy": {nombre:"Ivy", centro:[38.056527, -78.596682], tz:"America/New_York", lugares:[
  {n:"Wag Veterinary", cat:"vet", lat:38.056404, lng:-78.595727, dir:"4290 Ivy Road", tel:"+1 434-235-5015", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "jacksboro": {nombre:"Jacksboro", centro:[36.330079, -84.183816], tz:"America/New_York", lugares:[
  {n:"Animal Hospital of Campbell County", cat:"vet", lat:36.345077, lng:-84.161978, dir:null, tel:"+1-423-566-8387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Groom's and Rooms Pet Salon", cat:"tienda", lat:36.345007, lng:-84.161888, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jackson-georgia": {nombre:"Jackson", centro:[33.294565, -83.966021], tz:"America/New_York", lugares:[
  {n:"Butts County Animal Control", cat:"refugio", lat:33.284673, lng:-83.926445, dir:"158 Bibb Station Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jackson Verterinary Clinic", cat:"vet", lat:33.295593, lng:-83.963643, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Groomer Girl Pet Studio", cat:"peluqueria", lat:33.305403, lng:-83.959522, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jackson-kentucky": {nombre:"Jackson", centro:[37.553474, -83.38226], tz:"America/New_York", lugares:[
  {n:"West Liberty Veterinary Clinic", cat:"vet", lat:37.558783, lng:-83.393632, dir:"665 KY-15", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jackson-mississippi": {nombre:"Jackson", centro:[32.299869, -90.183041], tz:"America/Chicago", lugares:[
  {n:"Sullivan Animal Hospital", cat:"vet", lat:32.278129, lng:-90.260544, dir:"5407 Robinson Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"tienda", lat:32.274667, lng:-90.197225, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jackson Zoological Park", cat:"zoo", lat:32.320114, lng:-90.219265, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jackson-tennessee": {nombre:"Jackson", centro:[35.614445, -88.817742], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.668478, lng:-88.846553, dir:"635 Vann Drive", tel:"+1 731-661-0049", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.683468, lng:-88.858005, dir:"187 Stonebrook Place", tel:"+1 731-660-0211", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Parkway Animal Hospital", cat:"vet", lat:35.650987, lng:-88.834272, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jacksonville": {nombre:"Jacksonville", centro:[33.813792, -85.761287], tz:"America/Chicago", lugares:[
  {n:"Clanton Animal Hospital", cat:"vet", lat:33.794189, lng:-85.761958, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jacksonville-beach": {nombre:"Jacksonville Beach", centro:[30.294686, -81.39314], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:30.271156, lng:-81.389965, dir:"1956 3rd Street South", tel:"+1 904-853-2135", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Doctors of America", cat:"vet", lat:30.288534, lng:-81.434617, dir:"14471 Beach Boulevard", tel:"+1-904-223-5700", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:30.285994, lng:-81.455053, dir:"13740 Beach Boulevard", tel:"+1-904-330-1555", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.261854, lng:-81.52804, dir:"10261 River Marsh Drive", tel:"+1 904-997-1335", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:30.288613, lng:-81.395666, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.28682, lng:-81.48629, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jacksonville-florida": {nombre:"Jacksonville", centro:[30.326225, -81.657918], tz:"America/New_York", lugares:[
  {n:"Kanine Social", cat:"parque", lat:30.321038, lng:-81.680437, dir:"580 College Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BARK", cat:"tienda", lat:30.31474, lng:-81.680544, dir:null, tel:"+1 904-356-4530", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Riverside Animal Hospital", cat:"vet", lat:30.311167, lng:-81.69308, dir:"2641 Park Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jacksonville Zoo and Gardens", cat:"zoo", lat:30.402395, lng:-81.643242, dir:"370 Zoo Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Park ur paws", cat:"peluqueria", lat:30.295331, lng:-81.749692, dir:null, tel:"+1-904-693-0877", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"San Marco Animal Hospital", cat:"vet", lat:30.309438, lng:-81.660709, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Forever Vets", cat:"vet", lat:30.320869, lng:-81.680423, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"John Gorrie Dog Park", cat:"parque", lat:30.318047, lng:-81.681091, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care and Protective Services", cat:"refugio", lat:30.323618, lng:-81.683163, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pro-Vet Supply Store", cat:"tienda", lat:30.31771, lng:-81.682746, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Luba's Pet Studio", cat:"peluqueria", lat:30.309052, lng:-81.69562, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Barking Lot", cat:"refugio", lat:30.325197, lng:-81.70533, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:30.287322, lng:-81.721496, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vanity Furs Pet Salon & Hotel", cat:"peluqueria", lat:30.288807, lng:-81.722679, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gopal Animal Hospital", cat:"vet", lat:30.308819, lng:-81.738741, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jacksonville-north-carolina": {nombre:"Jacksonville", centro:[34.750996, -77.430983], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.754395, lng:-77.462575, dir:"570 Yopp Road", tel:"+1 910-238-3128", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Onslow Animal Hospital", cat:"vet", lat:34.778954, lng:-77.417215, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "james-island": {nombre:"James Island", centro:[32.734346, -79.968845], tz:"America/New_York", lugares:[
  {n:"Riverland Woods Pet Park", cat:"parque", lat:32.717193, lng:-79.969565, dir:"River Haven Circle", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"James Island County Dog Park", cat:"parque", lat:32.733244, lng:-79.988542, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Helpers", cat:"refugio", lat:32.712795, lng:-79.965281, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.761615, lng:-79.976638, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riverbank Veterinary Clinic", cat:"vet", lat:32.743211, lng:-80.039879, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jamestown-kentucky": {nombre:"Jamestown", centro:[36.984392, -85.062818], tz:"America/New_York", lugares:[
  {n:"Prissy Paws", cat:"tienda", lat:36.987875, lng:-85.06547, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jamestown-north-carolina": {nombre:"Jamestown", centro:[35.994004, -79.935757], tz:"America/New_York", lugares:[
  {n:"Adams Farm Animal Hospital, P.A.", cat:"vet", lat:36.01929, lng:-79.906066, dir:"5502 Adams Farm Lane", tel:"+1-336-854-5980", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:36.016772, lng:-79.896301, dir:"5710 West Gate City Boulevard", tel:"+1-336-323-7925", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Deep River Veterinary Hospital", cat:"vet", lat:36.031226, lng:-79.960632, dir:"5231 West Wendover Avenue", tel:"+1-336-884-8848", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Skeet Club Veterinary Hospital", cat:"vet", lat:36.032124, lng:-79.971636, dir:"1578 Skeet Club Road", tel:"+1-336-886-2315", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"James Landing Veterinary Hospital", cat:"vet", lat:36.045322, lng:-79.925696, dir:"4849 West Wendover Avenue", tel:"+1-336-852-9800", horas:[7.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"All Pets Considered", cat:"tienda", lat:36.025238, lng:-79.877308, dir:"5004 High Point Road", tel:"+1 336-540-1400", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Cat Care Hospital", cat:"vet", lat:36.024909, lng:-79.87692, dir:"5002 High Point Road", tel:"+1 336-235-0770", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Guilford County Animal Resource Center", cat:"refugio", lat:36.052928, lng:-79.920735, dir:"980 Guilford College Road", tel:"+1-336-641-3400", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sheets Pet Clinic", cat:"vet", lat:36.061656, lng:-79.923225, dir:"809 Chimney Rock Road", tel:"+1-336-852-8488", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.058634, lng:-79.903917, dir:"1206 Bridford Parkway", tel:"+1 336-218-8188", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Carolina Veterinary Specialists", cat:"vet", lat:36.061912, lng:-79.909481, dir:"501 Nicholas Road", tel:"+1-336-632-0605", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSuites Greensboro", cat:"refugio", lat:36.051075, lng:-79.881636, dir:"4832 Koger Boulevard", tel:"+1-336-790-1462", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.056435, lng:-79.886413, dir:"4217 West Wendover Avenue", tel:"+1 336-294-2681", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Triad Reef Critters", cat:"tienda", lat:36.084281, lng:-79.950437, dir:"7209 Cessna Drive", tel:"+1-336-643-6457", horas:[12.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"tienda", lat:36.000883, lng:-79.905596, dir:null, tel:"+1-336-763-2508", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Guilford County Animal Shelter", cat:"refugio", lat:36.053013, lng:-79.907203, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VetIQ", cat:"vet", lat:36.057895, lng:-79.900585, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jamestown-tennessee": {nombre:"Jamestown", centro:[36.42757, -84.931892], tz:"America/New_York", lugares:[
  {n:"Odd Man Inn Animal Refuge", cat:"refugio", lat:36.464218, lng:-84.911932, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jasmine-estates": {nombre:"Jasmine Estates", centro:[28.293063, -82.6901], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:28.290647, lng:-82.677296, dir:"9143 Little Road", tel:"+1-727-868-4900", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:28.297104, lng:-82.703798, dir:null, tel:null, horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "jasper-georgia": {nombre:"Jasper", centro:[34.467869, -84.429092], tz:"America/New_York", lugares:[
  {n:"Wayside Animal Hospital", cat:"vet", lat:34.47253, lng:-84.420862, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pickens County Animal Shelter", cat:"refugio", lat:34.458251, lng:-84.457018, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jefferson-north-carolina": {nombre:"Jefferson", centro:[36.420403, -81.473438], tz:"America/New_York", lugares:[
  {n:"Ashe Animal Clinic", cat:"vet", lat:36.421356, lng:-81.464277, dir:"605 East Main Street", tel:"+13362462341", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Above and Beyond Standards, Inc.", cat:"peluqueria", lat:36.34433, lng:-81.380766, dir:"7471 NC-16", tel:"+1-336-500-3186", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jemison": {nombre:"Jemison", centro:[32.959642, -86.74521], tz:"America/Chicago", lugares:[
  {n:"Blue Bonnet Animal Clinic", cat:"vet", lat:32.95906, lng:-86.728496, dir:"9711 County Road 42", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark & Stay", cat:"refugio", lat:32.959239, lng:-86.747995, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark and Bath Grooming", cat:"peluqueria", lat:32.982061, lng:-86.75289, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "joanna": {nombre:"Joanna", centro:[34.414853, -81.811217], tz:"America/New_York", lugares:[
  {n:"House Of Dog", cat:"peluqueria", lat:34.45538, lng:-81.820789, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "johns-creek": {nombre:"Johns Creek", centro:[34.018156, -84.190196], tz:"America/New_York", lugares:[
  {n:"Fancy Paws Grooming", cat:"peluqueria", lat:34.030189, lng:-84.187897, dir:"6000 Medlock Bridge Road", tel:"+1-678-336-9140", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:34.048873, lng:-84.225572, dir:"10980 State Bridge Road", tel:"+1-678-297-0673", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Mill Creek Animal Hospital", cat:"vet", lat:34.028143, lng:-84.250896, dir:"10100 Jones Bridge Road", tel:"+1-770-740-0330", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Bubba's Pet Emporium", cat:"tienda", lat:34.069135, lng:-84.207856, dir:"11877 Douglas Road", tel:"+1-678-393-8333", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Windward Animal Hospital", cat:"vet", lat:34.070297, lng:-84.203561, dir:"11895 Jones Bridge Road", tel:"+1-770-569-7298", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.069545, lng:-84.171014, dir:"3630 Peachtree Parkway", tel:"+1 770-814-8723", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Atlanta Vetinary Specialists", cat:"vet", lat:34.0614, lng:-84.156026, dir:"7350 McGinnis Ferry Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Four Paws Animal Hospital", cat:"vet", lat:34.074218, lng:-84.164552, dir:"3571 Peachtree Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:34.084784, lng:-84.159547, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "johnson-city-tennessee": {nombre:"Johnson City", centro:[36.316767, -82.352903], tz:"America/New_York", lugares:[
  {n:"Youngs Animal Hospital", cat:"vet", lat:36.312351, lng:-82.386187, dir:"1802 West Market Street", tel:"+1-423-926-3878", horas:[7.5, 12.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.34536, lng:-82.400445, dir:"3211 Peoples Street", tel:"+1-423-854-8833", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:36.343401, lng:-82.377061, dir:"2219 North Roan Street", tel:null, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "johnston-south-carolina": {nombre:"Johnston", centro:[33.832091, -81.800798], tz:"America/New_York", lugares:[
  {n:"Johnston Animal Hospital", cat:"vet", lat:33.838728, lng:-81.808738, dir:"626 Lee Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jonesboro-georgia": {nombre:"Jonesboro", centro:[33.521501, -84.353813], tz:"America/New_York", lugares:[
  {n:"Clayton County Animal Shelter", cat:"refugio", lat:33.538044, lng:-84.345392, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jonesborough": {nombre:"Jonesborough", centro:[36.294493, -82.473409], tz:"America/New_York", lugares:[
  {n:"Jonesborough Animal Hospital", cat:"vet", lat:36.293913, lng:-82.495964, dir:"1398 West Jackson Boulevard", tel:"+1-423-753-5868", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "jonesville": {nombre:"Jonesville", centro:[29.654421, -82.523034], tz:"America/New_York", lugares:[
  {n:"Jonesville Animal Hospital", cat:"vet", lat:29.653527, lng:-82.494638, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "june-park": {nombre:"June Park", centro:[28.072239, -80.680055], tz:"America/New_York", lugares:[
  {n:"Brandywine Stables", cat:"refugio", lat:28.069828, lng:-80.706204, dir:"2400 Brandywine Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:28.037482, lng:-80.668344, dir:"Palm Bay Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East Coast Canine Motel", cat:"refugio", lat:28.060355, lng:-80.674485, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fred Poppe Regional Dog Park", cat:"parque", lat:28.011866, lng:-80.731926, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "juno-beach": {nombre:"Juno Beach", centro:[26.881547, -80.053925], tz:"America/New_York", lugares:[
  {n:"Jupiter Dog Beach", cat:"parque", lat:26.89625, lng:-80.057834, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jupiter": {nombre:"Jupiter", centro:[26.934225, -80.094209], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:26.933713, lng:-80.131657, dir:"6370 West Indiantown Road", tel:"+1 561-972-5920", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "kendall": {nombre:"Kendall", centro:[25.67927, -80.317274], tz:"America/New_York", lugares:[
  {n:"Puppies by Z", cat:"tienda", lat:25.701007, lng:-80.335137, dir:"8730 Southwest 72nd Street", tel:"+1 786-881-7665", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Sunset Animal Clinic", cat:"vet", lat:25.701412, lng:-80.335575, dir:"8780 Southwest 72nd Street", tel:"+1 305-271-4011", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:25.671221, lng:-80.385972, dir:"11784 Southwest 104th Street", tel:"+1 305-279-4118", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:25.691254, lng:-80.387107, dir:"8236 Mills Drive", tel:"+1 786-780-2870", horas:[12.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:25.684942, lng:-80.39181, dir:"12014 Southwest 88th Street", tel:"+1 305-412-0244", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Neighborhood Fish Farm", cat:"tienda", lat:25.725657, lng:-80.390607, dir:"12150 Southwest 45th Street", tel:"+1-305-221-8013", horas:[11.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Hachi Dog Grooming and Boutique", cat:"peluqueria", lat:25.662451, lng:-80.416718, dir:"11278 Southwest 137th Place", tel:"+1 305-603-8494", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:25.687082, lng:-80.42048, dir:"14025 Southwest 88th Street", tel:"+1 305-382-9911", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"West Kendall Dog Grooming", cat:"peluqueria", lat:25.685923, lng:-80.445189, dir:"15669 Southwest 88th Street", tel:"+1-786-534-8869", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:25.682778, lng:-80.459992, dir:"16514 Southwest 88th Street", tel:"+1 305-388-7800", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Dadeland Animal Hospital", cat:"vet", lat:25.682361, lng:-80.315951, dir:"9495 Old Dixie Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:25.684551, lng:-80.365079, dir:"9003 Southwest 107th Avenue", tel:null, horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:25.683876, lng:-80.41547, dir:"13644 Southwest 88th Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nessy's Puppies", cat:"tienda", lat:25.68656, lng:-80.417287, dir:"8690 Southwest 137th Court", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kendall Drive Animal Hospital", cat:"vet", lat:25.684282, lng:-80.420489, dir:"13882 Southwest 88th Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:25.687495, lng:-80.31138, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Miami Veterinary Specialists", cat:"vet", lat:25.702671, lng:-80.333329, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kendal Animal Clinic", cat:"vet", lat:25.687632, lng:-80.363401, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Altis Doggy Park", cat:"parque", lat:25.680831, lng:-80.468759, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kenly": {nombre:"Kenly", centro:[35.595936, -78.124003], tz:"America/New_York", lugares:[
  {n:"Sundown Stables Horse Boarding and Riding", cat:"refugio", lat:35.68038, lng:-78.196078, dir:"12198 NC-42", tel:"+1-919-580-8524", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kennesaw": {nombre:"Kennesaw", centro:[34.023434, -84.61549], tz:"America/New_York", lugares:[
  {n:"North Cobb Animal Hospital", cat:"vet", lat:34.019017, lng:-84.618679, dir:"2680 Cobb Parkway", tel:"+1-770-422-0112", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Kennesaw Mountain Veterinary Services", cat:"vet", lat:34.015303, lng:-84.613968, dir:"2500 Cobb Parkway", tel:"+1-770-447-3927", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Georgia House Rabbit Society", cat:"tienda", lat:34.029578, lng:-84.608678, dir:"3114 Cherokee Street Northwest", tel:"+1-678-653-7175", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Furrever Fluffy Grooming", cat:"peluqueria", lat:34.021729, lng:-84.626514, dir:"2851 Cobb Parkway", tel:"+1-706-879-0888", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Mostly Mutts Animal Rescue", cat:"refugio", lat:34.032221, lng:-84.606951, dir:"3238 Cherokee Street Northwest", tel:"+1 770-272-6888", horas:[10.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Kennesaw Pet Center", cat:"refugio", lat:34.005814, lng:-84.605111, dir:"2139 Cobb Parkway", tel:"+1-770-428-5454", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Shiloh Veterinary Hospital", cat:"vet", lat:34.044843, lng:-84.601529, dir:"3725 Cherokee Street Northwest", tel:"+1 770-426-6900", horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.998976, lng:-84.591851, dir:"1570 Crater Lake Drive", tel:"+1 770-615-4147", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petland Puppies", cat:"tienda", lat:34.009294, lng:-84.576398, dir:"840 Ernest W. Barrett Parkway Northwest", tel:"+1 678-498-5113", horas:[11.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petfolk Veterinary & Urgent Care", cat:"vet", lat:34.000313, lng:-84.583025, dir:"1155 Ernest W. Barrett Parkway Northwest", tel:"+1 770-404-8937", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"My Pet's Vet", cat:"vet", lat:34.005756, lng:-84.577252, dir:"840 Ernest W. Barrett Parkway Northwest", tel:"+1-770-869-2255", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Optimum Aquarium", cat:"tienda", lat:34.009565, lng:-84.5747, dir:"840 Ernest W. Barrett Parkway Northwest", tel:"+1-678-594-2272", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet", cat:"vet", lat:34.035636, lng:-84.573059, dir:"777 Townpark Lane Northwest", tel:"+1 470-523-0200", horas:[15.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.010421, lng:-84.570562, dir:"860 Cobb Place Boulevard Northwest", tel:"+1 770-424-5226", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"The Good Dog Shoppe", cat:"tienda", lat:34.058566, lng:-84.590921, dir:"4200 Wade Green Road Northwest", tel:"+1 770-919-0333", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Top Dogs Pet Boutique", cat:"tienda", lat:34.013105, lng:-84.567125, dir:"2625 George Busbee Parkway", tel:"+1 770-218-0602", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:34.013884, lng:-84.562873, dir:"440 Ernest W. Barrett Parkway Northwest", tel:"+1 770-499-0908", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:34.01608, lng:-84.551305, dir:"50 Ernest Barrett Parkway", tel:"+1 770-218-6201", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Marietta Vet Clinic", cat:"vet", lat:33.955303, lng:-84.660248, dir:"3696 Largent Way NW", tel:"+1-404-919-5150", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Scenthound", cat:"peluqueria", lat:34.048967, lng:-84.601381, dir:"3895 Cherokee Street Northwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Play Plaxe", cat:"refugio", lat:34.015687, lng:-84.577286, dir:"2685 Barrett Lakes Boulevard Northwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Express Vets", cat:"vet", lat:34.058534, lng:-84.591246, dir:"4200 Wade Green Road Northwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Frank Boone Dog Park", cat:"parque", lat:34.033401, lng:-84.633442, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Total Veterinary Care", cat:"vet", lat:33.991996, lng:-84.599463, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kenneth-city": {nombre:"Kenneth City", centro:[27.815581, -82.7201], tz:"America/New_York", lugares:[
  {n:"Love My Dog", cat:"tienda", lat:27.821256, lng:-82.725504, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:27.803371, lng:-82.6992, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kernersville": {nombre:"Kernersville", centro:[36.119859, -80.073653], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:36.110022, lng:-80.09865, dir:"1080 South Main Street", tel:"+1 336-993-4892", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Lucky's Pet Resort", cat:"refugio", lat:36.0871, lng:-79.97664, dir:"7846 McCloud Road", tel:"+1 336 6687381", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kernersville Veterinary Hospital", cat:"vet", lat:36.108702, lng:-80.09282, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "key-largo": {nombre:"Key Largo", centro:[25.087035, -80.447239], tz:"America/New_York", lugares:[
  {n:"Florida Keys Wild Bird Rehabilitation Center", cat:"vet", lat:25.011817, lng:-80.515305, dir:"92080 Overseas Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "key-west": {nombre:"Key West", centro:[24.554826, -81.802072], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:24.560463, lng:-81.779251, dir:"North Roosevelt Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Muncipal Aquarium", cat:"zoo", lat:24.559116, lng:-81.807095, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Key West Butterfly & Nature Conservatory", cat:"zoo", lat:24.547537, lng:-81.79693, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Higgs Beach Dog Park", cat:"parque", lat:24.548031, lng:-81.785729, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "keystone-heights": {nombre:"Keystone Heights", centro:[29.786077, -82.031489], tz:"America/New_York", lugares:[
  {n:"Single Vision", cat:"zoo", lat:29.759393, lng:-81.968181, dir:"8185 Forest Hills Road", tel:"+1-904-377-7993", horas:[10.0, 14.0], nota:"Dato de OpenStreetMap"},
  {n:"The Clipping Corner", cat:"peluqueria", lat:29.754932, lng:-82.057369, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Melrose Animal Hospital", cat:"vet", lat:29.754772, lng:-82.057401, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kiawah-island": {nombre:"Kiawah Island", centro:[32.608237, -80.084817], tz:"America/New_York", lugares:[
  {n:"Heron Park Nature Center", cat:"zoo", lat:32.600391, lng:-80.100544, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kill-devil-hills": {nombre:"Kill Devil Hills", centro:[36.032119, -75.677615], tz:"America/New_York", lugares:[
  {n:"Outer Banks Brewing Station", cat:"parque", lat:36.009549, lng:-75.659207, dir:"600 South Croatan Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aviation Dog Park", cat:"parque", lat:36.009923, lng:-75.664367, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kilmarnock": {nombre:"Kilmarnock", centro:[37.710481, -76.3797], tz:"America/New_York", lugares:[
  {n:"Animal Welfare League", cat:"refugio", lat:37.709483, lng:-76.38012, dir:"75 South Main Street", tel:null, horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "kimberly": {nombre:"Kimberly", centro:[33.773435, -86.813883], tz:"America/Chicago", lugares:[
  {n:"Stewart Animal Clinic", cat:"vet", lat:33.791694, lng:-86.82329, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "king": {nombre:"King", centro:[36.280557, -80.359379], tz:"America/New_York", lugares:[
  {n:"King Dog Park", cat:"parque", lat:36.281123, lng:-80.370494, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "king-george": {nombre:"King George", centro:[38.266384, -77.18051], tz:"America/New_York", lugares:[
  {n:"Eagle's Nest Animal Hospital", cat:"vet", lat:38.279223, lng:-77.21009, dir:"9687 Barbara's Way", tel:"+1-540-775-6800", horas:[7.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"King George County Animal Control", cat:"refugio", lat:38.252885, lng:-77.159254, dir:"11377 Citizens Way", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kings-bay-base": {nombre:"Kings Bay Base", centro:[30.786585, -81.568508], tz:"America/New_York", lugares:[
  {n:"Camden Veterinary Clinic", cat:"vet", lat:30.782785, lng:-81.593916, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mugu's Pet Resort", cat:"peluqueria", lat:30.782216, lng:-81.593769, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSense", cat:"tienda", lat:30.749744, lng:-81.577619, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Clinic", cat:"vet", lat:30.761959, lng:-81.60785, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:30.776518, lng:-81.620647, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kingsland-georgia": {nombre:"Kingsland", centro:[30.799956, -81.689826], tz:"America/New_York", lugares:[
  {n:"Betz Vetz", cat:"vet", lat:30.800341, lng:-81.685598, dir:"400 East King Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kingsley-kentucky": {nombre:"Kingsley", centro:[38.221729, -85.672827], tz:"America/Chicago", lugares:[
  {n:"Seneca Animal Hospital", cat:"vet", lat:38.222705, lng:-85.669401, dir:"2706 Taylorsville Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kingsport": {nombre:"Kingsport", centro:[36.550238, -82.559429], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:36.542911, lng:-82.517051, dir:"2003 North Eastman Road", tel:"+1 423-343-0107", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "kingstowne": {nombre:"Kingstowne", centro:[38.773333, -77.133537], tz:"America/New_York", lugares:[
  {n:"Kingstowne Cat Clinic", cat:"vet", lat:38.773965, lng:-77.135551, dir:"5830 Kingstowne Center", tel:"+1 703-922-8228", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Felix & Oscar", cat:"tienda", lat:38.773633, lng:-77.136919, dir:"5840 Kingstowne Center", tel:"+1 703-866-0222", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:38.765891, lng:-77.152882, dir:"7007 Manchester Boulevard", tel:"+1 703-924-7246", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Harmony Animal Hospital", cat:"vet", lat:38.768362, lng:-77.119137, dir:null, tel:"+1 703-643-9797", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "kingwood": {nombre:"Kingwood", centro:[39.471756, -79.683388], tz:"America/New_York", lugares:[
  {n:"Preston County Animal Shelter", cat:"refugio", lat:39.458645, lng:-79.683616, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kinston-north-carolina": {nombre:"Kinston", centro:[35.262664, -77.581635], tz:"America/New_York", lugares:[
  {n:"Kinston Rotary Dog Park", cat:"parque", lat:35.254775, lng:-77.599105, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "knightdale": {nombre:"Knightdale", centro:[35.787897, -78.482294], tz:"America/New_York", lugares:[
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.797809, lng:-78.498891, dir:"6000 Village Park Drive", tel:"+1-919-266-1747", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.797841, lng:-78.51279, dir:"1014 Shoppes at Midway Drive", tel:"+1 919-373-1052", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Suite Paws", cat:"refugio", lat:35.773544, lng:-78.550342, dir:"110 S Rogers Ln", tel:"+1 919-231-1112", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.799071, lng:-78.50642, dir:"1014 Shoppes At Midway Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ashley Wilder Dog Park", cat:"parque", lat:35.793063, lng:-78.475476, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Buffaloe Road Dog Park", cat:"parque", lat:35.83692, lng:-78.536312, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"5401 North Dog Park", cat:"parque", lat:35.858928, lng:-78.531622, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "knoxville-tennessee": {nombre:"Knoxville", centro:[35.960395, -83.921026], tz:"America/New_York", lugares:[
  {n:"Central Veterinary Hospital", cat:"vet", lat:35.960351, lng:-83.926846, dir:"1212 Clinch Avenue", tel:"+1-865-525-1167", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"John and Ann Tickle Small Animal Hospital", cat:"vet", lat:35.945944, lng:-83.940951, dir:"2407 River Drive", tel:"+1-865-974-8387", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"The Dog Stop", cat:"tienda", lat:35.942506, lng:-83.979053, dir:"4589 Kingston Pike", tel:"+1-865-226-9363", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogwood Animal Hospital", cat:"vet", lat:35.922023, lng:-83.879995, dir:"5900 Chapman Highway", tel:"+1-865-577-0344", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Natural Pet Supply of Knoxville", cat:"tienda", lat:35.941967, lng:-83.981389, dir:"120 North Forest Park Boulevard", tel:"+1-865-330-7737", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"River Dog Bakery", cat:"tienda", lat:35.938366, lng:-83.989685, dir:"5201 Kingston Pike", tel:"+1-865-588-8100", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Young-Williams Animal Village", cat:"refugio", lat:35.931482, lng:-84.008133, dir:"6400 Kingston Pike", tel:"+1-865-433-9922", horas:[10.0, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of the Tennessee Valley", cat:"refugio", lat:35.932536, lng:-84.014198, dir:"6717 Kingston Pike", tel:"+1-865-573-9675", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.926989, lng:-84.033324, dir:"214 Morrell Road", tel:"+1 865-691-2194", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"The Bark Knoxville", cat:"parque", lat:35.975178, lng:-83.921941, dir:"601 Lamar Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Animal Hospital", cat:"vet", lat:35.945067, lng:-83.939813, dir:null, tel:"+1-865-974-8387", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Zoo Knoxville", cat:"zoo", lat:35.997972, lng:-83.889487, dir:"3500 Knoxville Zoo Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Puppy Store", cat:"tienda", lat:35.934162, lng:-83.999735, dir:null, tel:"+1-865-337-7963", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"citifido", cat:"tienda", lat:35.964456, lng:-83.920123, dir:null, tel:null, horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Riverside Veterinary Clinic", cat:"vet", lat:35.959566, lng:-83.904402, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"university walk and society 865 dog park", cat:"parque", lat:35.957127, lng:-83.9432, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Young-Williams Animal Center", cat:"refugio", lat:35.955548, lng:-83.956714, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Food Plus", cat:"tienda", lat:35.953652, lng:-84.008616, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aquarium", cat:"tienda", lat:35.935377, lng:-84.009786, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kure-beach": {nombre:"Kure Beach", centro:[33.99684, -77.907208], tz:"America/New_York", lugares:[
  {n:"Gurney Hood Barking Lot", cat:"parque", lat:33.998734, lng:-77.911807, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Carolina Aquarium at Fort Fisher", cat:"zoo", lat:33.963316, lng:-77.926649, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "la-vergne": {nombre:"La Vergne", centro:[36.020198, -86.57792], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:36.052696, lng:-86.614361, dir:"3536 Murfreesboro Pike", tel:"+1 615-641-2112", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA PetMed Animal Hospital", cat:"vet", lat:36.044321, lng:-86.663672, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brighton Valley Dog Park", cat:"parque", lat:36.085422, lng:-86.644374, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heron Pointe Dog Park", cat:"parque", lat:36.11625, lng:-86.626326, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heron Pointe Pet Care", cat:"peluqueria", lat:36.11815, lng:-86.62991, dir:null, tel:null, horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "ladonia": {nombre:"Ladonia", centro:[32.468198, -85.079102], tz:"America/New_York", lugares:[
  {n:"Companion Animal Hospital", cat:"vet", lat:32.499705, lng:-85.04454, dir:null, tel:"+1-334-297-2316", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lady-lake": {nombre:"Lady Lake", centro:[28.917486, -81.92286], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:28.932901, lng:-81.937475, dir:"630 US-441", tel:"+13524301514", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ladysmith": {nombre:"Ladysmith", centro:[38.017636, -77.515261], tz:"America/New_York", lugares:[
  {n:"E.M. Dodgers Pet Supply", cat:"tienda", lat:38.01963, lng:-77.514135, dir:"17477 Jefferson Davis Highway", tel:null, horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lafayette-georgia": {nombre:"LaFayette", centro:[34.704802, -85.2819], tz:"America/New_York", lugares:[
  {n:"LaFeyette Dog Park", cat:"parque", lat:34.709628, lng:-85.284328, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-alfred": {nombre:"Lake Alfred", centro:[28.091963, -81.723411], tz:"America/New_York", lugares:[
  {n:"Paw Haven Animal Hospital Winter Haven", cat:"vet", lat:28.061803, lng:-81.732968, dir:"3691 Lake Alfred Rd", tel:"+1-863-293-1428", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lake-barcroft": {nombre:"Lake Barcroft", centro:[38.84789, -77.155813], tz:"America/New_York", lugares:[
  {n:"Pet Depot", cat:"tienda", lat:38.836135, lng:-77.155244, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-butler-florida": {nombre:"Lake Butler", centro:[28.500705, -81.574227], tz:"America/New_York", lugares:[
  {n:"Chain of Lakes Animal Clinic", cat:"vet", lat:28.487081, lng:-81.599441, dir:"14387 Bridgewater Crossings Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woofgang bakery", cat:"tienda", lat:28.476743, lng:-81.584494, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-city-florida": {nombre:"Lake City", centro:[30.189425, -82.63948], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:30.181319, lng:-82.663446, dir:"225 Northwest Commons Loop", tel:"+1 386-752-3064", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Caring Hands Animal Hospital", cat:"vet", lat:30.182484, lng:-82.658221, dir:"1541 West US Highway 90", tel:null, horas:[7.75, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:30.180503, lng:-82.667076, dir:"189 Northwest Hutton Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-clarke-shores": {nombre:"Lake Clarke Shores", centro:[26.645345, -80.075875], tz:"America/New_York", lugares:[
  {n:"Palm Beach Canine", cat:"peluqueria", lat:26.668143, lng:-80.055472, dir:"5001 South Dixie Highway", tel:"+1-561-899-8909", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Paws 2 Help", cat:"vet", lat:26.65114, lng:-80.083627, dir:"2693 Forest Hill Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Palm Beach Zoo & Conservation Society", cat:"zoo", lat:26.667751, lng:-80.068707, dir:"1301 Summit Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:26.674742, lng:-80.062446, dir:"846 Southern Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mary Brandon Dog Park", cat:"parque", lat:26.653419, lng:-80.059498, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-hart": {nombre:"Lake Hart", centro:[28.387788, -81.227881], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:28.391671, lng:-81.247548, dir:"11926 Narcoossee Road", tel:"+1 407-362-9765", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Back to Nature Wildlife Refuge", cat:"vet", lat:28.360246, lng:-81.211654, dir:"10525 Clapp Simms Duda Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nona Paws Pet Sitting", cat:"refugio", lat:28.418324, lng:-81.275922, dir:"10274 Hartford Maroon Road", tel:null, horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Lake Nona Animal Clinic", cat:"vet", lat:28.387663, lng:-81.245695, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barknona Dog Hotel", cat:"refugio", lat:28.387863, lng:-81.245853, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:28.377539, lng:-81.245607, dir:null, tel:null, horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery and Grooming", cat:"tienda", lat:28.365192, lng:-81.246139, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Laureate Dog Park", cat:"parque", lat:28.377266, lng:-81.260318, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Laureate Park Dog Park", cat:"parque", lat:28.364854, lng:-81.266176, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barxi Park", cat:"parque", lat:28.373102, lng:-81.277911, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-mary": {nombre:"Lake Mary", centro:[28.756275, -81.322093], tz:"America/New_York", lugares:[
  {n:"Seminole County Animal Services", cat:"refugio", lat:28.747063, lng:-81.300394, dir:"232 Eslinger Way", tel:"+1-407-665-5201", horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Alliance of Greater Orlando", cat:"refugio", lat:28.74239, lng:-81.297457, dir:"2800 County Home Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Orlando Veterinary Dentistry", cat:"vet", lat:28.754538, lng:-81.339054, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:28.759125, lng:-81.284248, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-monticello": {nombre:"Lake Monticello", centro:[37.923197, -78.334729], tz:"America/New_York", lugares:[
  {n:"Fluvanna County SPCA", cat:"refugio", lat:37.933479, lng:-78.27275, dir:"5239 Union Mills Road", tel:"+14345910123", horas:[12.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Happy Tails", cat:"tienda", lat:37.905294, lng:-78.341322, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-norman-of-catawba": {nombre:"Lake Norman of Catawba", centro:[35.586801, -80.95952], tz:"America/New_York", lugares:[
  {n:"Barks & Rec Boarding", cat:"refugio", lat:35.580325, lng:-80.885626, dir:"115 Thompson Farm Drive", tel:"+1-704-662-3477", horas:[7.5, 12.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lake-oconee": {nombre:"Lake Oconee", centro:[33.458296, -83.243963], tz:"America/New_York", lugares:[
  {n:"Pet Wants", cat:"tienda", lat:33.439723, lng:-83.263829, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Harmony Pet Boarding", cat:"refugio", lat:33.425222, lng:-83.266624, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Harmony Pet Supplies", cat:"tienda", lat:33.425282, lng:-83.267511, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-of-the-woods-virginia": {nombre:"Lake of the Woods", centro:[38.347432, -77.747944], tz:"America/New_York", lugares:[
  {n:"Paradoc's Animal Hospital", cat:"vet", lat:38.366451, lng:-77.76496, dir:"35070 Germanna Heights Drive", tel:"+1-540-812-2120", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lake-park-georgia": {nombre:"Lake Park", centro:[30.682865, -83.179864], tz:"America/New_York", lugares:[
  {n:"Lake Park Veterinary", cat:"vet", lat:30.69136, lng:-83.207611, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-park-north-carolina": {nombre:"Lake Park", centro:[35.085969, -80.635554], tz:"America/New_York", lugares:[
  {n:"Carolina Waterfowl Rescue", cat:"refugio", lat:35.09002, lng:-80.594814, dir:"5403 Poplin Road", tel:"+17042866330", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:35.065237, lng:-80.618978, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:35.065195, lng:-80.61842, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-ridge": {nombre:"Lake Ridge", centro:[38.68495, -77.313039], tz:"America/New_York", lugares:[
  {n:"Banfield Pet Hospital", cat:"vet", lat:38.68536, lng:-77.311916, dir:"12449 Hedges Run Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Nutrition Center", cat:"tienda", lat:38.684006, lng:-77.318832, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Bird Center", cat:"tienda", lat:38.682805, lng:-77.319333, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-view": {nombre:"Lake View", centro:[33.28067, -87.137496], tz:"America/Chicago", lugares:[
  {n:"Puppy Pals Pet Spa", cat:"peluqueria", lat:33.245435, lng:-87.13808, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-wales": {nombre:"Lake Wales", centro:[27.901413, -81.58591], tz:"America/New_York", lugares:[
  {n:"Lake Wales Dog Park", cat:"parque", lat:27.890001, lng:-81.573997, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-worth-beach": {nombre:"Lake Worth Beach", centro:[26.61597, -80.056993], tz:"America/New_York", lugares:[
  {n:"Paws on the Ave", cat:"tienda", lat:26.615584, lng:-80.054267, dir:"525 Lake Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws on the Avenue", cat:"tienda", lat:26.615724, lng:-80.054294, dir:"525 Lake ave", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws in paradise", cat:"peluqueria", lat:26.615561, lng:-80.053044, dir:"411 Lake Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake Woof Dog Park", cat:"parque", lat:26.61034, lng:-80.079083, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lakeland": {nombre:"Lakeland", centro:[28.039465, -81.949804], tz:"America/New_York", lugares:[
  {n:"Four Paws Only", cat:"peluqueria", lat:28.012732, lng:-81.916836, dir:"2215 East Edgewood Drive", tel:"+1-863-667-3113", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:28.090289, lng:-81.967887, dir:"919 Lakeland Park Center Drive", tel:"+1 863-279-3923", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:28.094264, lng:-81.971568, dir:"4139 Highway 98 North", tel:"+1 863-816-8296", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Bob Irelan Veterinary Services", cat:"vet", lat:28.127876, lng:-81.951411, dir:"6804 North Socrum Loop Road", tel:"+1-863-859-9485", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Dog Leg Woods", cat:"parque", lat:28.001428, lng:-81.948078, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lucky Puppy Nail Specialists", cat:"peluqueria", lat:28.012723, lng:-81.917399, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cleveland Heights Animal Clinic", cat:"vet", lat:27.996506, lng:-81.948234, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Creatures Anim al Clinic", cat:"vet", lat:27.975197, lng:-81.973801, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lakeland-tennessee": {nombre:"Lakeland", centro:[35.230603, -89.740403], tz:"America/Chicago", lugares:[
  {n:"PetSuites", cat:"refugio", lat:35.203023, lng:-89.742738, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tennessee Equine Hospital West", cat:"vet", lat:35.210516, lng:-89.65188, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lakeside-park": {nombre:"Lakeside Park", centro:[39.035616, -84.56911], tz:"America/New_York", lugares:[
  {n:"Fort Mitchell Veterinary Center", cat:"vet", lat:39.036642, lng:-84.560143, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lakeside-virginia": {nombre:"Lakeside", centro:[37.616446, -77.471808], tz:"America/New_York", lugares:[
  {n:"Ruff Canine Club", cat:"parque", lat:37.574861, lng:-77.468687, dir:"1924 Ellen Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Diamond Dog House", cat:"refugio", lat:37.574554, lng:-77.465113, dir:"1712 Ellen Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fin & Feather Pet Center", cat:"tienda", lat:37.601335, lng:-77.467439, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lakeside Animal Hospital", cat:"vet", lat:37.601074, lng:-77.467358, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lakesite": {nombre:"Lakesite", centro:[35.208682, -85.126899], tz:"America/New_York", lugares:[
  {n:"Labby Lane Kennel", cat:"refugio", lat:35.291808, lng:-85.059573, dir:"12800 Thatch Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lakewood-park": {nombre:"Lakewood Park", centro:[27.549739, -80.399668], tz:"America/New_York", lugares:[
  {n:"Southside Veterinary Hospital", cat:"vet", lat:27.586868, lng:-80.424375, dir:"935 36th Ct SW", tel:"+1-772-562-7845", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lakewood-tennessee": {nombre:"Lakewood", centro:[36.243109, -86.635552], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:36.217312, lng:-86.595326, dir:"4642 Lebanon Pike", tel:"+1 615-883-2726", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Zoom Room Dog Training - Madison", cat:"peluqueria", lat:36.238399, lng:-86.72666, dir:"1504 Gallatin Pike", tel:"+16158527477", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Two Rivers Dog Park", cat:"parque", lat:36.19131, lng:-86.677079, dir:"3150 McGavock Pike", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mobley Veterinary Clinic", cat:"vet", lat:36.230928, lng:-86.725419, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stewarts Ferry Dog Park", cat:"parque", lat:36.161477, lng:-86.630517, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Percy Priest Dam Dog Park", cat:"parque", lat:36.159159, lng:-86.621655, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lamar-south-carolina": {nombre:"Lamar", centro:[34.169022, -80.062515], tz:"America/New_York", lugares:[
  {n:"Lake Swamp Bullies", cat:"peluqueria", lat:34.174007, lng:-80.056447, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lancaster-south-carolina": {nombre:"Lancaster", centro:[34.720426, -80.770901], tz:"America/New_York", lugares:[
  {n:"Petsense", cat:"tienda", lat:34.734785, lng:-80.799528, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lancaster-virginia": {nombre:"Lancaster", centro:[37.76986, -76.466339], tz:"America/New_York", lugares:[
  {n:"Lancaster County Animal Shelter", cat:"refugio", lat:37.771163, lng:-76.444823, dir:null, tel:null, horas:[11.0, 13.0], nota:"Dato de OpenStreetMap"}
 ]},
 "langdon-place": {nombre:"Langdon Place", centro:[38.285778, -85.582606], tz:"America/Chicago", lugares:[
  {n:"Goose Creek Animal Clinic (Dr. Watson)", cat:"vet", lat:38.288213, lng:-85.578149, dir:"9406 Blossom Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "langley": {nombre:"Langley", centro:[37.531765, -82.790716], tz:"America/New_York", lugares:[
  {n:"Beaver Creek Veterinary Hospital", cat:"vet", lat:37.528786, lng:-82.786462, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lansdowne-virginia": {nombre:"Lansdowne", centro:[39.082526, -77.482732], tz:"America/New_York", lugares:[
  {n:"Happy Hound", cat:"tienda", lat:39.081826, lng:-77.494889, dir:"19352 Promenade Drive", tel:"+1 571-333-2171", horas:[10.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Lansdowne Animal Hospital", cat:"vet", lat:39.080976, lng:-77.494751, dir:"19393 Promenade Drive", tel:"+1 571-341-7177", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:39.087102, lng:-77.52202, dir:null, tel:"+1 703-777-4125", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Krazy", cat:"tienda", lat:39.089759, lng:-77.525199, dir:null, tel:"+1 703-777-3518", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lansdowne Dog Park (new)", cat:"parque", lat:39.079968, lng:-77.496756, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "largo": {nombre:"Largo", centro:[27.909467, -82.787324], tz:"America/New_York", lugares:[
  {n:"Petland", cat:"tienda", lat:27.895076, lng:-82.781595, dir:"10289 Ulmerton Road", tel:"+1-813-586-0081", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:27.890807, lng:-82.785214, dir:"10500 Ulmerton Rd", tel:"+1 727-518-2600", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"All About Puppies", cat:"tienda", lat:27.893477, lng:-82.737417, dir:"7190 Ulmerton Road", tel:"+1-727-536-4900", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:27.917961, lng:-82.733419, dir:"5120 East Bay Drive", tel:"+1 727-373-2601", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Seminole Boulevard Animal Hospital", cat:"vet", lat:27.882676, lng:-82.787949, dir:"Seminole Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw Place", cat:"parque", lat:27.918752, lng:-82.738981, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "laurel-florida": {nombre:"Laurel", centro:[27.130332, -82.453152], tz:"America/New_York", lugares:[
  {n:"Brandt Veterinary Clinic", cat:"vet", lat:27.13367, lng:-82.454536, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "laurel-virginia": {nombre:"Laurel", centro:[37.632973, -77.508021], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:37.640569, lng:-77.512448, dir:"9051 Staples Mill Road", tel:"+1 804-672-2180", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Pets First Animal Hospital", cat:"tienda", lat:37.641946, lng:-77.515429, dir:"9201 Staples Mill Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "laurens-south-carolina": {nombre:"Laurens", centro:[34.498925, -82.015636], tz:"America/New_York", lugares:[
  {n:"Family Pet Medicine", cat:"vet", lat:34.482407, lng:-81.952494, dir:"22044 Highway 76 East", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lawndale-north-carolina": {nombre:"Lawndale", centro:[35.414019, -81.563147], tz:"America/New_York", lugares:[
  {n:"Shear Bliss Pet Grooming", cat:"peluqueria", lat:35.41769, lng:-81.558856, dir:"220 Cline Street", tel:"+17043126238", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lawrenceburg-kentucky": {nombre:"Lawrenceburg", centro:[38.037138, -84.896255], tz:"America/New_York", lugares:[
  {n:"Anderson Animal Hospital", cat:"vet", lat:37.97597, lng:-84.8776, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lawrenceville": {nombre:"Lawrenceville", centro:[33.956639, -83.989007], tz:"America/New_York", lugares:[
  {n:"Gwinnett County Bill Atkinson Animal Welfare Center", cat:"refugio", lat:33.970717, lng:-83.953793, dir:"884 Winder Highway", tel:"+1-770-339-3200", horas:[8.5, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Russel Ridge Animal Hospital", cat:"vet", lat:34.007345, lng:-83.986212, dir:"738 Ridge Road", tel:"+1-678-940-3087", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Paradise", cat:"refugio", lat:34.020758, lng:-83.984493, dir:"1867 Azalea Drive", tel:"+1-678-394-0380", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.968317, lng:-84.017718, dir:"875 Lawrenceville Suwanee Road Northwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gwinnett Animal Clinic", cat:"vet", lat:33.960867, lng:-83.986466, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center of Lawrenceville", cat:"vet", lat:33.973109, lng:-83.987018, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:33.961485, lng:-84.009291, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lawrenceville-Suwanee Animal Hospital", cat:"vet", lat:33.970881, lng:-84.017379, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggie-Do's", cat:"peluqueria", lat:33.921368, lng:-84.008645, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sugarloaf Animal Hospital", cat:"vet", lat:33.919086, lng:-84.005348, dir:null, tel:null, horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Lawrenceville Animal Care Center", cat:"vet", lat:33.933307, lng:-84.037584, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lazy-lake": {nombre:"Lazy Lake", centro:[26.156196, -80.144768], tz:"America/New_York", lugares:[
  {n:"Animal Hospital", cat:"vet", lat:26.142554, lng:-80.136981, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oakland Bark", cat:"parque", lat:26.174068, lng:-80.157695, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lebanon-kentucky": {nombre:"Lebanon", centro:[37.569787, -85.252738], tz:"America/New_York", lugares:[
  {n:"All Paws Veterinary Services", cat:"vet", lat:37.567828, lng:-85.262078, dir:"445 West Walnut Street", tel:"+1-270-692-1729", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Preferred Veterinary Care", cat:"vet", lat:37.597006, lng:-85.248586, dir:"1955 Springfield Road", tel:"+1-270-692-6787", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rhonda Brady DVM - Ridgeview Animal Clinic PLLC", cat:"vet", lat:37.559877, lng:-85.284386, dir:"100 Scenic Hill Drive", tel:null, horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Wilson's Grooming", cat:"peluqueria", lat:37.559257, lng:-85.284803, dir:"105 Scenic Hill Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lebanon-tennessee": {nombre:"Lebanon", centro:[36.207978, -86.291094], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:36.2155, lng:-86.331627, dir:"1418 West Main Street", tel:"+1 615-547-1533", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Lebanon Animal Hospital", cat:"refugio", lat:36.219947, lng:-86.339581, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lebanon-virginia": {nombre:"Lebanon", centro:[36.900908, -82.080126], tz:"America/New_York", lugares:[
  {n:"Jill's Professioal Pet Groomer", cat:"peluqueria", lat:36.88024, lng:-82.109543, dir:"1090 Pioneer Drive", tel:"+1-276-701-7462", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Jill's Professional Pet Grooming", cat:"peluqueria", lat:36.880243, lng:-82.109544, dir:"1090 Pioneer Drive", tel:"+1-276-701-7462", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Southwest Virginia Veterinary Services", cat:"vet", lat:36.899591, lng:-82.062824, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "leeds": {nombre:"Leeds", centro:[33.543921, -86.542755], tz:"America/Chicago", lugares:[
  {n:"Dog Park Leash-Free Dog Area", cat:"parque", lat:33.550529, lng:-86.596748, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "leesburg": {nombre:"Leesburg", centro:[34.179818, -85.761355], tz:"America/Chicago", lugares:[
  {n:"Lakeside Pawfection", cat:"peluqueria", lat:34.176545, lng:-85.757613, dir:"5880 Weiss Lake Boulevard", tel:"+1 256 526 8900", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "leesburg-georgia": {nombre:"Leesburg", centro:[31.732456, -84.171197], tz:"America/New_York", lugares:[
  {n:"Leesburg Animal Hospital", cat:"refugio", lat:31.722228, lng:-84.172864, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "leesburg-virginia": {nombre:"Leesburg", centro:[39.115451, -77.564561], tz:"America/New_York", lugares:[
  {n:"Dog Day Afternoon", cat:"tienda", lat:39.112468, lng:-77.559863, dir:"305 East Market Street", tel:"+1 703-779-1333", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Twins Pet Grooming", cat:"peluqueria", lat:39.108601, lng:-77.562257, dir:"217 Crescent Station Terrace Southeast", tel:"+1-703-995-2590", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vienna Aquarium & Pets", cat:"tienda", lat:39.107583, lng:-77.560027, dir:"301 Industrial Court Southeast", tel:"+1-703-777-6196", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"DogGone Natural", cat:"tienda", lat:39.111103, lng:-77.55429, dir:"21 Catoctin Circle Northeast", tel:"+1-571-291-3970", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.110748, lng:-77.551874, dir:"510 East Market Street", tel:"+1 703-669-5056", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Bark 'N Bubbles", cat:"peluqueria", lat:39.107733, lng:-77.551823, dir:"545 East Market Street", tel:"+1-703-777-6269", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.111688, lng:-77.534774, dir:"1031 Edwards Ferry Road Northeast", tel:"+1-703-661-9823", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Loudoun Urgent Vet", cat:"vet", lat:39.0958, lng:-77.531934, dir:"135 Robinson Mill Plaza", tel:"+1-703-740-1087", horas:[15.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Leesburg Animal Park", cat:"zoo", lat:39.083197, lng:-77.592211, dir:"19246 James Monroe Highway", tel:"+1 703-433-0002", horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Catoctin Veterinary Clinic", cat:"vet", lat:39.115002, lng:-77.571384, dir:"112 Dry Mill Road Southwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Virginia Tech Marion DuPont Scott Equine Medical Center", cat:"vet", lat:39.131132, lng:-77.568682, dir:"17696 Old Waterford Road Northwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Click Above", cat:"peluqueria", lat:39.085707, lng:-77.572951, dir:"19277 Evergreen Mills Road Southeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Oatlands Animal Hospital", cat:"vet", lat:39.085385, lng:-77.594498, dir:"19275 James Monroe Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Leesburg Veterinary Hospital", cat:"vet", lat:39.07999, lng:-77.605088, dir:"19463 James Monroe Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Market Street Animal Clinic", cat:"vet", lat:39.113714, lng:-77.56078, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Towne Animal Clinic", cat:"vet", lat:39.110208, lng:-77.547886, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "leesylvania": {nombre:"Leesylvania", centro:[38.60891, -77.291039], tz:"America/New_York", lugares:[
  {n:"River Oaks Veterinary Clinic", cat:"vet", lat:38.614525, lng:-77.291412, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lehigh-acres": {nombre:"Lehigh Acres", centro:[26.609151, -81.652407], tz:"America/New_York", lugares:[
  {n:"Large Dogs", cat:"parque", lat:26.598275, lng:-81.637491, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dogs", cat:"parque", lat:26.598028, lng:-81.637089, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "leisure-city": {nombre:"Leisure City", centro:[25.495388, -80.429222], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:25.480473, lng:-80.440467, dir:"2565 Northeast 10th Court", tel:"+1 305-248-8228", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lenoir": {nombre:"Lenoir", centro:[35.91402, -81.538985], tz:"America/New_York", lugares:[
  {n:"Caldwell Animal Hospital, PA", cat:"vet", lat:35.937181, lng:-81.528887, dir:"230 Nuway Circle Northeast", tel:"+1-828-754-4545", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lewisville-north-carolina": {nombre:"Lewisville", centro:[36.097082, -80.419222], tz:"America/New_York", lugares:[
  {n:"Purr Life", cat:"refugio", lat:36.083681, lng:-80.345067, dir:"101 Vinegar Hill Road", tel:"+1 336-293-8199", horas:[8.5, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Lewisville", cat:"vet", lat:36.100888, lng:-80.412319, dir:"128 Lowes Foods Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oakes Animal Hospital", cat:"vet", lat:36.083453, lng:-80.345107, dir:null, tel:"+1 336-986-9388", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Jamison Dog Park", cat:"parque", lat:36.097181, lng:-80.364285, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lexington-kentucky": {nombre:"Lexington", centro:[38.046407, -84.497039], tz:"America/New_York", lugares:[
  {n:"Masterson Animal Clinic", cat:"vet", lat:38.064835, lng:-84.522813, dir:"1490 Leestown Road", tel:"+1 859 389 8387", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Southland Veterinary Hospital", cat:"vet", lat:38.015698, lng:-84.524219, dir:"300 Southland Drive", tel:"+1-859-278-2386", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Incredipet", cat:"tienda", lat:38.015616, lng:-84.525054, dir:"306 Southland Drive", tel:"+1-859-277-9736", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ann's Pet Grooming", cat:"peluqueria", lat:37.994968, lng:-84.546644, dir:"3344 Partner Place", tel:"+1-859-277-7402", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.022165, lng:-84.418001, dir:"1945 Pavilion Way", tel:"+1 859-543-1188", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Wants", cat:"tienda", lat:38.030672, lng:-84.491154, dir:"321 South Ashland Avenue", tel:null, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"UK Veterinary Diagnostic Laboratory (UKVDL)", cat:"vet", lat:38.085041, lng:-84.492045, dir:"1490 Bull Lea Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Feeders Pet Supply", cat:"tienda", lat:38.025013, lng:-84.539281, dir:"2181 Harrodsburg Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:38.006057, lng:-84.521757, dir:"150 West Lowry Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"LexPets", cat:"refugio", lat:38.091788, lng:-84.51563, dir:"2111 Capstone Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:38.022223, lng:-84.418163, dir:"1945 Pavilion Way", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Phoenix Park Dog Park", cat:"parque", lat:38.045687, lng:-84.497432, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Service Dog Park", cat:"parque", lat:38.034763, lng:-84.506147, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Police Dogs", cat:"refugio", lat:38.071825, lng:-84.553177, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wellington Dog Park", cat:"parque", lat:38.001004, lng:-84.538962, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VetIQ", cat:"vet", lat:38.037141, lng:-84.422219, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSuites", cat:"refugio", lat:38.01707, lng:-84.408763, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vet", cat:"vet", lat:37.982372, lng:-84.592298, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lexington-north-carolina": {nombre:"Lexington", centro:[35.824027, -80.253384], tz:"America/New_York", lugares:[
  {n:"Jordan Veterinary Clinic", cat:"vet", lat:35.83091, lng:-80.235155, dir:"300 US 64", tel:"+1-336-249-3991", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Davidson Animal Hospital", cat:"vet", lat:35.803989, lng:-80.282832, dir:"114 Anna Lewis Drive", tel:"+1-336-249-7078", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.791177, lng:-80.26007, dir:"155 Lowes Boulevard", tel:"+1 336-249-4253", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Sky To Sea Pet Shop", cat:"tienda", lat:35.816134, lng:-80.205906, dir:"2110 US-64 East", tel:"+1-336-243-7387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Davidson County Animal Shelter", cat:"refugio", lat:35.77087, lng:-80.244611, dir:"490 Glendale Road", tel:"+1-336-357-0805", horas:[11.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Posh Paws Pet Salon and Spa", cat:"refugio", lat:35.822762, lng:-80.252909, dir:null, tel:"+1-336-300-4884", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tails of the City", cat:"peluqueria", lat:35.812267, lng:-80.261333, dir:"110-F Cotton Grove Road", tel:null, horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Jessie's Pet Grooming", cat:"peluqueria", lat:35.821979, lng:-80.25029, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Uptown Pet", cat:"tienda", lat:35.81658, lng:-80.261121, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lexington-south-carolina": {nombre:"Lexington", centro:[33.980449, -81.237417], tz:"America/New_York", lugares:[
  {n:"Wild Birds Unlimited", cat:"tienda", lat:33.988982, lng:-81.240723, dir:"435 Columbia Avenue", tel:"+1 803 951 2370", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:34.001021, lng:-81.216008, dir:"5438 Sunset Boulevard", tel:"+1 803-821-7006", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.005533, lng:-81.195713, dir:"5135 Sunset Boulevard", tel:"+1 803-356-1917", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.06936, lng:-81.159448, dir:"246 Harbison Boulevard", tel:"+1 803-781-6339", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Paws for Applause", cat:"peluqueria", lat:33.986862, lng:-81.249345, dir:null, tel:"+1-803-356-5911", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grace Animal Hospital and Pet Lodge", cat:"vet", lat:33.982822, lng:-81.305069, dir:"147 Charter Oak Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Litte Barks Grooming & Boutique", cat:"peluqueria", lat:34.053919, lng:-81.15937, dir:null, tel:"+1 803 307 9939", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:34.087039, lng:-81.186389, dir:"7467 Saint Andrews Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:34.091712, lng:-81.169151, dir:"700 Columbiana Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:33.985965, lng:-81.245782, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lexington Animal Clinic", cat:"vet", lat:33.985907, lng:-81.247685, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Millcreek Animal Hospital", cat:"vet", lat:33.976189, lng:-81.226148, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Town of Lexington Paw Park", cat:"parque", lat:33.979176, lng:-81.259852, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Birchwood Veterinary Hospital", cat:"vet", lat:34.00503, lng:-81.233025, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cherokee Pond Dog Park", cat:"parque", lat:34.005565, lng:-81.231648, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cherokee Trail Veterinary Hospital", cat:"vet", lat:34.002528, lng:-81.206925, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Midlands Pet Care & Pet Rest", cat:"vet", lat:34.010034, lng:-81.188628, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banks Animal Hospital", cat:"vet", lat:34.054274, lng:-81.159465, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Supply House", cat:"tienda", lat:34.0815, lng:-81.196263, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Irmo Pet Retreat", cat:"refugio", lat:34.094437, lng:-81.217682, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Well Pets Veterinary Clinic", cat:"vet", lat:34.08621, lng:-81.181719, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lexington-virginia": {nombre:"Lexington", centro:[37.784021, -79.442816], tz:"America/New_York", lugares:[
  {n:"Lexington Pet Place", cat:"tienda", lat:37.785001, lng:-79.443971, dir:"111 West Nelson Street", tel:"+1 540-461-8314", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The PetWellness Group", cat:"vet", lat:37.79539, lng:-79.419509, dir:"766 North Lee Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of Rockbridge", cat:"vet", lat:37.811299, lng:-79.400024, dir:"1541 North Lee Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Farrier Vet", cat:"vet", lat:37.808721, lng:-79.426677, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lightfoot": {nombre:"Lightfoot", centro:[37.340773, -76.754914], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:37.338325, lng:-76.756925, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lighthouse-point": {nombre:"Lighthouse Point", centro:[26.275636, -80.087265], tz:"America/New_York", lugares:[
  {n:"Stevens Animal Hospital", cat:"vet", lat:26.269949, lng:-80.097459, dir:"3138 Federal Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lilburn": {nombre:"Lilburn", centro:[33.890104, -84.142972], tz:"America/New_York", lugares:[
  {n:"Funnybones", cat:"refugio", lat:33.89116, lng:-84.126621, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lillington": {nombre:"Lillington", centro:[35.399121, -78.8156], tz:"America/New_York", lugares:[
  {n:"Lillington Veterinary Hospital", cat:"vet", lat:35.428635, lng:-78.795709, dir:"2366 NC-210", tel:"+1-910-893-2081", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lily": {nombre:"Lily", centro:[37.02459, -84.074892], tz:"America/New_York", lugares:[
  {n:"Puppy Paws Dog Grooming Salon", cat:"peluqueria", lat:37.032556, lng:-83.978836, dir:"34 Greenlawn Subdivision", tel:"+1-606-389-3210", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lincolnia": {nombre:"Lincolnia", centro:[38.818446, -77.143313], tz:"America/New_York", lugares:[
  {n:"Unleashed", cat:"tienda", lat:38.810619, lng:-77.133548, dir:"283 South Van Dorn Street", tel:"+1 703-212-9123", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"VEG", cat:"vet", lat:38.81288, lng:-77.110411, dir:"4525 Duke Street", tel:"+1 571-899-4360", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Caring Hands Animal Hospital", cat:"vet", lat:38.810317, lng:-77.133527, dir:"295 South Van Dorn Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Toebeans & Tails Veterinary Hospital", cat:"vet", lat:38.807466, lng:-77.128073, dir:"5561 Cardinal Place", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wiggly Field", cat:"parque", lat:38.810914, lng:-77.129342, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Elpaw", cat:"vet", lat:38.808086, lng:-77.12392, dir:null, tel:null, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Duke Street Dog Park", cat:"parque", lat:38.81224, lng:-77.115088, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lincolnshire-kentucky": {nombre:"Lincolnshire", centro:[38.223126, -85.621349], tz:"America/Chicago", lugares:[
  {n:"Feeders Supply", cat:"tienda", lat:38.216212, lng:-85.62548, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lincolnton-north-carolina": {nombre:"Lincolnton", centro:[35.473745, -81.254525], tz:"America/New_York", lugares:[
  {n:"Lincolnton Animal Hospital", cat:"vet", lat:35.477669, lng:-81.239219, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lincolnville-south-carolina": {nombre:"Lincolnville", centro:[33.010583, -80.156508], tz:"America/New_York", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:33.046529, lng:-80.105081, dir:"619 Myers Road", tel:"+1-843-949-4333", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:32.935432, lng:-80.139582, dir:"9500 Dorchester Road", tel:"+1-843-873-7611", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sitting Pretty Pet Salon", cat:"peluqueria", lat:33.031443, lng:-80.140139, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dolittle's", cat:"tienda", lat:33.040889, lng:-80.14079, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:33.041638, lng:-80.14071, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brighton Animal Hospital", cat:"vet", lat:33.041722, lng:-80.14064, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"GoDog - Nexton", cat:"parque", lat:33.04837, lng:-80.145444, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:32.957567, lng:-80.199005, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:32.95701, lng:-80.198731, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "linden-tennessee": {nombre:"Linden", centro:[35.617292, -87.839471], tz:"America/Chicago", lugares:[
  {n:"Linden Animal Clinic", cat:"vet", lat:35.617292, lng:-87.845986, dir:"240 West Main Street", tel:"+1-931-589-5116", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"}
 ]},
 "linton-hall": {nombre:"Linton Hall", centro:[38.753304, -77.571036], tz:"America/New_York", lugares:[
  {n:"Caring Hands Animal Hospital", cat:"vet", lat:38.750746, lng:-77.570844, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "linville-virginia": {nombre:"Linville", centro:[38.520406, -78.837534], tz:"America/New_York", lugares:[
  {n:"Snapps Creek Stables", cat:"refugio", lat:38.534303, lng:-78.924173, dir:"5679 Snapps Creek Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lipscomb": {nombre:"Lipscomb", centro:[33.425665, -86.926659], tz:"America/Chicago", lugares:[
  {n:"Ross Bridge Animal Hospital", cat:"vet", lat:33.398884, lng:-86.883686, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lithia-springs": {nombre:"Lithia Springs", centro:[33.793995, -84.66049], tz:"America/New_York", lugares:[
  {n:"Low Cost Animal Hospital", cat:"vet", lat:33.793057, lng:-84.669905, dir:"10781 Veterans Memorial Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bankhead Animal Hospital", cat:"vet", lat:33.780869, lng:-84.702982, dir:"11417 Veterans Memorial Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lithonia": {nombre:"Lithonia", centro:[33.712331, -84.105194], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:33.692759, lng:-84.090917, dir:"8164 Mall Parkway", tel:"+1 770-482-1565", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "little-river-south-carolina": {nombre:"Little River", centro:[33.872701, -78.623258], tz:"America/New_York", lugares:[
  {n:"Saint Francis Animal Hospital", cat:"vet", lat:33.873473, lng:-78.620557, dir:"1384 US Highway 17", tel:null, horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "livingston": {nombre:"Livingston", centro:[32.584159, -88.187283], tz:"America/Chicago", lugares:[
  {n:"Livingston Animal Care", cat:"vet", lat:32.612128, lng:-88.181505, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "livingston-tennessee": {nombre:"Livingston", centro:[36.383396, -85.323022], tz:"America/New_York", lugares:[
  {n:"VCA Animal Hospital", cat:"vet", lat:36.296224, lng:-85.369354, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "locust-fork": {nombre:"Locust Fork", centro:[33.907599, -86.615268], tz:"America/Chicago", lugares:[
  {n:"Locust Fork Animal Clinic", cat:"vet", lat:33.907614, lng:-86.616032, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "locust-grove": {nombre:"Locust Grove", centro:[33.34595, -84.109083], tz:"America/New_York", lugares:[
  {n:"Noah's Ark Animal Sanctuary", cat:"zoo", lat:33.306489, lng:-84.127569, dir:"712 L G Griffin Rd", tel:null, horas:[10.0, 15.5], nota:"Dato de OpenStreetMap"},
  {n:"Kritter Kutz Pet Salon", cat:"tienda", lat:33.321367, lng:-84.05915, dir:"6965 Hwy 42 South", tel:null, horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Station 75 Dog Park", cat:"parque", lat:33.386761, lng:-84.14873, dir:"1301 Academic Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chase Maddox Park Large Dog Park", cat:"parque", lat:33.343954, lng:-84.120563, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chase Maddox Park Small Dog Park", cat:"parque", lat:33.34464, lng:-84.120794, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Noah's Ark Animal Santuary", cat:"zoo", lat:33.306016, lng:-84.127584, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eagle's Brooke Dog Park", cat:"parque", lat:33.38763, lng:-84.145167, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "locust-grove-virginia": {nombre:"Locust Grove", centro:[38.305182, -77.810259], tz:"America/New_York", lugares:[
  {n:"Savage Selections", cat:"tienda", lat:38.306699, lng:-77.806756, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "loganville": {nombre:"Loganville", centro:[33.838998, -83.900738], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.847165, lng:-83.910266, dir:"4056 Atlanta Highway", tel:"+1 678-639-1960", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Walton Gwinnett Animal Clinic", cat:"vet", lat:33.833285, lng:-83.887524, dir:"4695 Highway 78", tel:"+1-770-466-9535", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "london-kentucky": {nombre:"London", centro:[37.128334, -84.083558], tz:"America/New_York", lugares:[
  {n:"Whitley Branch Bark Park", cat:"parque", lat:37.119654, lng:-84.08327, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSense", cat:"tienda", lat:37.107995, lng:-84.086525, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lone-oak": {nombre:"Lone Oak", centro:[37.036167, -88.664772], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:37.075729, lng:-88.686027, dir:"2929 James Sanders Boulevard", tel:"+1 270-575-9300", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Lone Oak Animal Clinic", cat:"vet", lat:37.036933, lng:-88.662011, dir:"125 Augusta Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ceglinski Animal Clinic", cat:"vet", lat:37.052008, lng:-88.674635, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "long-branch-virginia": {nombre:"Long Branch", centro:[38.82687, -77.267572], tz:"America/New_York", lugares:[
  {n:"Potomac Valley Veterinary Hospital", cat:"vet", lat:38.817148, lng:-77.276287, dir:"9555 Braddock Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "long-view": {nombre:"Long View", centro:[35.729744, -81.379256], tz:"America/New_York", lugares:[
  {n:"Carolina Animal Specialty & Emergency", cat:"vet", lat:35.746148, lng:-81.365412, dir:null, tel:"+1-828-328-6697", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "lookout-mountain-tennessee": {nombre:"Lookout Mountain", centro:[34.994242, -85.349403], tz:"America/New_York", lugares:[
  {n:"Mountain Hospital for Animals", cat:"vet", lat:34.992309, lng:-85.354446, dir:"128 North Watauga Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lookout Valley Pet Hospital", cat:"vet", lat:35.031092, lng:-85.361642, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lorton": {nombre:"Lorton", centro:[38.70434, -77.220343], tz:"America/New_York", lugares:[
  {n:"Pet Value", cat:"tienda", lat:38.702262, lng:-77.220291, dir:"9427 Lorton Market Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gunston Animal Hospital", cat:"vet", lat:38.702796, lng:-77.209426, dir:"7685 Armistead Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "loudon-tennessee": {nombre:"Loudon", centro:[35.741012, -84.336174], tz:"America/New_York", lugares:[
  {n:"Clippin' Easy Pet Grooming", cat:"peluqueria", lat:35.721885, lng:-84.3672, dir:"1267 Carding Machine Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Loudon Dog Park", cat:"parque", lat:35.726031, lng:-84.378088, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "loudoun-valley-estates": {nombre:"Loudoun Valley Estates", centro:[38.987503, -77.504001], tz:"America/New_York", lugares:[
  {n:"Animal Hospital", cat:"vet", lat:38.992924, lng:-77.504256, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "loughman": {nombre:"Loughman", centro:[28.241958, -81.56674], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:28.228933, lng:-81.645529, dir:"2500 Posner Boulevard", tel:"+1 863-420-4285", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Paw Spa / Dog Wash Room", cat:"peluqueria", lat:28.256366, lng:-81.605908, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "louisburg-north-carolina": {nombre:"Louisburg", centro:[36.099039, -78.301106], tz:"America/New_York", lugares:[
  {n:"Louisburg Veterinary Hospital", cat:"vet", lat:36.10085, lng:-78.301935, dir:"115 North Church Street", tel:"+1 919-496-2638", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "louisville-kentucky": {nombre:"Louisville", centro:[38.254238, -85.759407], tz:"America/Chicago", lugares:[
  {n:"Louisville Cat Clinic", cat:"vet", lat:38.245407, lng:-85.728122, dir:"627 Baxter Avenue", tel:"+1-502-584-7055", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PG&J's Dog Park Bar", cat:"parque", lat:38.242968, lng:-85.726971, dir:"800 Baxter Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Wants on the Avenue", cat:"tienda", lat:38.257362, lng:-85.718756, dir:null, tel:"+1-502-627-0026", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Dog Shop", cat:"tienda", lat:38.253289, lng:-85.737238, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Old Louisville Dog Run", cat:"parque", lat:38.233152, lng:-85.75291, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "louisville-tennessee": {nombre:"Louisville", centro:[35.821748, -84.047964], tz:"America/New_York", lugares:[
  {n:"My Pets Animal Hospital", cat:"refugio", lat:35.861752, lng:-84.067055, dir:"9450 South Northshore Drive", tel:"+1-865-560-0480", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Northshore Animal Hospital", cat:"vet", lat:35.865369, lng:-84.06266, dir:"9315 South Northshore Drive", tel:"+1-865-769-8800", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Rocky Hill Animal Hospital", cat:"vet", lat:35.903786, lng:-84.020166, dir:"7656 South Northshore Drive", tel:"+1-865-691-8826", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lovejoy": {nombre:"Lovejoy", centro:[33.436225, -84.314368], tz:"America/New_York", lugares:[
  {n:"Jazzy Paw", cat:"vet", lat:33.446581, lng:-84.322637, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lovettsville": {nombre:"Lovettsville", centro:[39.274772, -77.639309], tz:"America/New_York", lugares:[
  {n:"Muddy Boot Farm", cat:"refugio", lat:39.249653, lng:-77.637662, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lovingston": {nombre:"Lovingston", centro:[37.759808, -78.870752], tz:"America/New_York", lugares:[
  {n:"Nelson SPCA", cat:"refugio", lat:37.797027, lng:-78.860981, dir:"29 Stagebridge Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lowes-island": {nombre:"Lowes Island", centro:[39.044936, -77.354699], tz:"America/New_York", lugares:[
  {n:"Animal Medical Center of Cascades", cat:"vet", lat:39.040446, lng:-77.358252, dir:"20789 Great Falls Plaza", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "loxahatchee-groves": {nombre:"Loxahatchee Groves", centro:[26.683122, -80.259369], tz:"America/New_York", lugares:[
  {n:"Dr. Ursla", cat:"vet", lat:26.671963, lng:-80.249121, dir:"12785 Forest Hill Boulevard", tel:"+1-561-484-7672", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Clinic at Wellington", cat:"vet", lat:26.673545, lng:-80.245855, dir:"12798 Forest Hill Boulevard", tel:"+1-561-798-2900", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Palms West Animal Hospital", cat:"vet", lat:26.686436, lng:-80.247198, dir:"556 Folsom Road", tel:null, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Miller & Associates - Wellington", cat:"vet", lat:26.67118, lng:-80.248476, dir:"12777 Forest Hill Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Dog Ranch Rescue", cat:"refugio", lat:26.70587, lng:-80.27294, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lucama": {nombre:"Lucama", centro:[35.645437, -78.00971], tz:"America/New_York", lugares:[
  {n:"For the Love of Dogs", cat:"refugio", lat:35.69207, lng:-77.991933, dir:"4749 Radford Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lucedale": {nombre:"Lucedale", centro:[30.924888, -88.587942], tz:"America/Chicago", lugares:[
  {n:"Singing River Vet", cat:"vet", lat:30.90866, lng:-88.601436, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lumberton-north-carolina": {nombre:"Lumberton", centro:[34.61833, -79.008205], tz:"America/New_York", lugares:[
  {n:"Carroll's Pets", cat:"tienda", lat:34.642388, lng:-78.999048, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northend Veterinary Clinic", cat:"vet", lat:34.690762, lng:-79.015576, dir:null, tel:null, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "luray-virginia": {nombre:"Luray", centro:[38.665465, -78.46002], tz:"America/New_York", lugares:[
  {n:"Blue Mountain Animal Clinic", cat:"vet", lat:38.670468, lng:-78.447925, dir:"307 Collins Avenue", tel:"+1-540-743-7387", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Luray Zoo: A Rescue Zoo", cat:"zoo", lat:38.659733, lng:-78.492105, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lutz": {nombre:"Lutz", centro:[28.151124, -82.461483], tz:"America/New_York", lugares:[
  {n:"Sit Stay Splash!", cat:"peluqueria", lat:28.183713, lng:-82.437368, dir:"Collier Parkway", tel:"+1-813-406-4293", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"All Creatures Animal Hospital", cat:"vet", lat:28.141928, lng:-82.461804, dir:"Sunset Ln", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lyman-south-carolina": {nombre:"Lyman", centro:[34.950176, -82.123354], tz:"America/New_York", lugares:[
  {n:"The Bark Park", cat:"parque", lat:34.949191, lng:-82.124446, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lynchburg-tennessee": {nombre:"Lynchburg", centro:[35.28261, -86.373548], tz:"America/Chicago", lugares:[
  {n:"Wild Bird Viewing", cat:"zoo", lat:35.220295, lng:-86.255582, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lynchburg-virginia": {nombre:"Lynchburg", centro:[37.413754, -79.142246], tz:"America/New_York", lugares:[
  {n:"The Animal Hospital of Lynchburg", cat:"vet", lat:37.409825, lng:-79.160489, dir:"1705 Memorial Avenue", tel:"+1-434-845-7021", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Diamond Hill Animal Hospital", cat:"vet", lat:37.410235, lng:-79.137912, dir:"1400 Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rhonda's K-9 Barber Shop", cat:"peluqueria", lat:37.397807, lng:-79.169345, dir:"806 Oakley Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fur Kitz Grooming & Pet Boutique", cat:"peluqueria", lat:37.435155, lng:-79.170789, dir:"2486 Rivermont Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Emergency & Critical Care", cat:"vet", lat:37.38464, lng:-79.165947, dir:"3432 Odd Fellows Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petz Animal Boarding and Doggie Daycare", cat:"refugio", lat:37.399589, lng:-79.209112, dir:"2222 Lakeside Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shaggy to Chic", cat:"peluqueria", lat:37.398861, lng:-79.209189, dir:"2225 Lakeside Drive", tel:null, horas:[9.0, 14.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet & Aquatic Warehouse", cat:"tienda", lat:37.36813, lng:-79.182475, dir:"2408 Wards Road", tel:null, horas:[10.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Blue Ridge Animal League", cat:"vet", lat:37.401416, lng:-79.174743, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:37.405794, lng:-79.184873, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:37.405371, lng:-79.184913, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lyndhurst-virginia": {nombre:"Lyndhurst", centro:[38.029304, -78.945024], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.054975, lng:-78.943301, dir:"821 Town Center Drive", tel:"+1 540-949-0096", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wildlife Center of Virginia", cat:"refugio", lat:38.039281, lng:-78.913776, dir:"1800 South Delphine Avenue", tel:"+1-540-942-9453", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lynn-haven": {nombre:"Lynn Haven", centro:[30.245478, -85.648261], tz:"America/Chicago", lugares:[
  {n:"Panama City Animal Hospital", cat:"vet", lat:30.22614, lng:-85.590108, dir:"4307 US 231", tel:"+1-850-784-6914", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Laura's Grooming", cat:"peluqueria", lat:30.271015, lng:-85.526464, dir:"7327 US 231", tel:"+1-850-541-8912", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dagny and Dexter's Doggie Daycare", cat:"refugio", lat:30.21039, lng:-85.661482, dir:"127 W 34th Court W", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Williams Pet Parlor", cat:"peluqueria", lat:30.245445, lng:-85.649978, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Bay Animal Hospital Inc", cat:"vet", lat:30.241283, lng:-85.649119, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lynn Haven Animal Control", cat:"refugio", lat:30.225766, lng:-85.61399, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lynnview": {nombre:"Lynnview", centro:[38.178403, -85.709683], tz:"America/Chicago", lugares:[
  {n:"Audubon Animal Medical Center", cat:"vet", lat:38.190491, lng:-85.717936, dir:"1311 Durrett Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mableton": {nombre:"Mableton", centro:[33.818833, -84.582263], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.851354, lng:-84.603475, dir:"4155 Austell Road", tel:"+1 678-945-1081", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Leland Veterinary Clinic", cat:"vet", lat:33.812835, lng:-84.546121, dir:"290 Veterans Memorial Highway SE", tel:null, horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"The Dog House", cat:"refugio", lat:33.855494, lng:-84.601065, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "macon": {nombre:"Macon", centro:[32.840695, -83.632402], tz:"America/New_York", lugares:[
  {n:"Wagsworth Hotel", cat:"tienda", lat:32.835531, lng:-83.63184, dir:"538 1st Street", tel:"+1-478-270-2227", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:32.896692, lng:-83.689577, dir:"265 Tom Hill Senior Boulevard", tel:"+1-478-475-4194", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Macon-Bibb Animal Welfare", cat:"refugio", lat:32.787423, lng:-83.756177, dir:"4214 Fulton Mill Road", tel:"+1-478-621-6791", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "madeira-beach": {nombre:"Madeira Beach", centro:[27.798081, -82.797325], tz:"America/New_York", lugares:[
  {n:"Madeira Beach Dog Park", cat:"parque", lat:27.804754, lng:-82.800737, dir:"Municipal Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "madison": {nombre:"Madison", centro:[34.692873, -86.751143], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:34.707052, lng:-86.748755, dir:"4577 Wall Triana Highway", tel:"+1-256-325-0125", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Southpaw Animal Clinic of Madison", cat:"vet", lat:34.710959, lng:-86.744823, dir:"136 Plaza Boulevard", tel:"+1-256-273-5594", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Mill Creek Veterinary Care Center", cat:"vet", lat:34.721934, lng:-86.749898, dir:"4991 Wall Triana Highway", tel:"+1-256-489-8800", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.743688, lng:-86.680617, dir:"6275 University Drive Northwest", tel:"+1 256-922-0218", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:34.743742, lng:-86.680502, dir:"6275 University Drive Northwest", tel:"+1 256-922-1920", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Dog Stop", cat:"refugio", lat:34.744106, lng:-86.679922, dir:"6243 University Drive Northwest", tel:"+1-256-585-2623", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Paradise Pet Resort & Spa", cat:"vet", lat:34.670434, lng:-86.75719, dir:"128 Cleghorn Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Alabama Equine Hospital, Veterinarians", cat:"vet", lat:34.772808, lng:-86.803033, dir:null, tel:"+1-256-771-1590", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:34.702708, lng:-86.741545, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Animal Hospital", cat:"vet", lat:34.689331, lng:-86.736107, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Palmer Dog Park", cat:"parque", lat:34.691777, lng:-86.771342, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mill Creek Dog Park", cat:"parque", lat:34.704906, lng:-86.76884, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Puptown", cat:"parque", lat:34.693365, lng:-86.727527, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Health Care Center", cat:"vet", lat:34.697487, lng:-86.786044, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Hospital of Madison", cat:"vet", lat:34.735898, lng:-86.785627, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A New Leash on Life Adoption Center", cat:"refugio", lat:34.734503, lng:-86.709937, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:34.74916, lng:-86.757463, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Madison Veterinary Hospital and Pet Resort", cat:"vet", lat:34.749465, lng:-86.769939, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Creekwood Park Dog Spot", cat:"parque", lat:34.736848, lng:-86.701948, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:34.752325, lng:-86.761969, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Alabama Veterinary Emergency & Specialty", cat:"vet", lat:34.752622, lng:-86.761173, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "madison-heights-virginia": {nombre:"Madison Heights", centro:[37.431706, -79.123739], tz:"America/New_York", lugares:[
  {n:"PetSense", cat:"tienda", lat:37.4615, lng:-79.118643, dir:"4225 South Amherst Highway", tel:"+1 434-849-8256", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "madison-mississippi": {nombre:"Madison", centro:[32.461809, -90.115364], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:32.464808, lng:-90.135344, dir:"175 Grand View Boulevard", tel:"+1 601-605-9844", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "madisonville": {nombre:"Madisonville", centro:[37.328004, -87.498699], tz:"America/Chicago", lugares:[
  {n:"E & L Pets", cat:"tienda", lat:37.322543, lng:-87.479477, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "magnolia-springs": {nombre:"Magnolia Springs", centro:[30.399642, -87.7761], tz:"America/Chicago", lugares:[
  {n:"Baldwin County Animal Shelter", cat:"refugio", lat:30.446683, lng:-87.775524, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "manakin-sabot": {nombre:"Manakin-Sabot", centro:[37.601585, -77.715087], tz:"America/New_York", lugares:[
  {n:"Animal Eye Care of Richmond", cat:"vet", lat:37.561284, lng:-77.699378, dir:"2861 Huguenot Springs Road", tel:"+1-804-355-5594", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "manasota-key": {nombre:"Manasota Key", centro:[26.924124, -82.360027], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:26.936925, lng:-82.336521, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "manassas": {nombre:"Manassas", centro:[38.750949, -77.475267], tz:"America/New_York", lugares:[
  {n:"Pawsitive Care Animal Hospital", cat:"vet", lat:38.738811, lng:-77.474125, dir:"10068 Dumfries Road", tel:"+1 571-208-1011", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Poodle Doodle Pet Grooming Salon", cat:"peluqueria", lat:38.738734, lng:-77.474322, dir:"10074 Dumfries Road", tel:"+1 703-505-7775", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Yappie Cuttery", cat:"peluqueria", lat:38.753877, lng:-77.489262, dir:"9750 Center Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Shelter/Adoption Center", cat:"refugio", lat:38.74577, lng:-77.499479, dir:"10039 Dean Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southside Animal Hospital", cat:"vet", lat:38.728784, lng:-77.472987, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws-N-Play Dog Daycare", cat:"refugio", lat:38.728735, lng:-77.47296, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "manassas-park": {nombre:"Manassas Park", centro:[38.766802, -77.442008], tz:"America/New_York", lugares:[
  {n:"Signal Hill Animal Clinic", cat:"vet", lat:38.749524, lng:-77.450559, dir:"9554 Liberia Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSuites", cat:"refugio", lat:38.760654, lng:-77.442129, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pender Veterinary Centre", cat:"vet", lat:38.760559, lng:-77.442033, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "manchester-tennessee": {nombre:"Manchester", centro:[35.4832, -86.08873], tz:"America/Chicago", lugares:[
  {n:"All Creatures Veterinary Clinic", cat:"vet", lat:35.498763, lng:-86.065619, dir:"1793 McMinnville Highway", tel:"+1 931-723-0551", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "manchester-virginia": {nombre:"Manchester", centro:[37.499182, -77.537289], tz:"America/New_York", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:37.502515, lng:-77.52225, dir:"11004 Midlothian Turnpike", tel:"+1-804-313-9492", horas:[6.5, 19.5], nota:"Dato de OpenStreetMap"}
 ]},
 "mango": {nombre:"Mango", centro:[27.981425, -82.306433], tz:"America/New_York", lugares:[
  {n:"Mango Dog Park", cat:"parque", lat:27.98799, lng:-82.301139, dir:"11717 Clay Pit Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mantua-virginia": {nombre:"Mantua", centro:[38.853723, -77.259427], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.843036, lng:-77.273092, dir:"9528 Main Street", tel:"+1 571-328-7770", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Bond Vet", cat:"vet", lat:38.865269, lng:-77.272349, dir:"9428 Fairfax Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scenthound", cat:"peluqueria", lat:38.842438, lng:-77.270182, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "maplesville": {nombre:"Maplesville", centro:[32.788461, -86.871655], tz:"America/Chicago", lugares:[
  {n:"The Pampered Pet", cat:"refugio", lat:32.807402, lng:-86.925239, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marco-island": {nombre:"Marco Island", centro:[25.937251, -81.71573], tz:"America/New_York", lugares:[
  {n:"Canine Cove - Big Dog Park", cat:"parque", lat:25.927588, lng:-81.713629, dir:null, tel:null, horas:[8.0, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Canine Cove - Small Dog Park", cat:"parque", lat:25.927513, lng:-81.713438, dir:null, tel:null, horas:[8.0, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Just Paws Grooming Salon", cat:"peluqueria", lat:25.948065, lng:-81.720201, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"tienda", lat:25.93325, lng:-81.698874, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Marco Veterinary Hospital", cat:"vet", lat:25.935173, lng:-81.697879, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marianna-florida": {nombre:"Marianna", centro:[30.77436, -85.226873], tz:"America/New_York", lugares:[
  {n:"Ark Animal Hospital", cat:"vet", lat:30.778347, lng:-85.237939, dir:"4297 Lafayette Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Love's Dog Park", cat:"parque", lat:30.749091, lng:-85.383132, dir:null, tel:null, horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "marietta": {nombre:"Marietta", centro:[33.952845, -84.549605], tz:"America/New_York", lugares:[
  {n:"Santa Marietta Animal Hospital", cat:"vet", lat:33.943756, lng:-84.545781, dir:"463 Atlanta Street Southeast", tel:"+1-678-581-4055", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"The Veterinary Clinic", cat:"vet", lat:33.950776, lng:-84.536837, dir:"530 Roswell Street Southeast", tel:"+1-770-428-3381", horas:[7.5, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Little's Playhouse", cat:"refugio", lat:33.961032, lng:-84.536649, dir:"392 North Fairground Street Northeast", tel:"+1-678-383-6481", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Cobb Emergency Veterinary Clinic", cat:"vet", lat:33.967252, lng:-84.534991, dir:"630 Cobb Parkway North", tel:"+1-770-424-9157", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Mom and Pups", cat:"peluqueria", lat:33.953006, lng:-84.577761, dir:"800 Whitlock Avenue Southwest", tel:"+1-770-590-5100", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Veterinary Clinic - West", cat:"vet", lat:33.95139, lng:-84.581078, dir:"1100 Old Dallas Road Southwest", tel:"+1-770-424-5484", horas:[8.5, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Beyond Pets Animal Hospital", cat:"vet", lat:33.95908, lng:-84.513318, dir:"1343 Gresham Road Northeast", tel:"+1-770-971-1556", horas:[7.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"East Marietta Animal Hospital", cat:"vet", lat:33.95829, lng:-84.500293, dir:"1799 Roswell Road", tel:"+1-770-973-4830", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Marietta Doggie Daycare", cat:"refugio", lat:33.996065, lng:-84.528449, dir:"700 Sandy Plains Road Northeast", tel:"+1-678-390-2524", horas:[6.5, 11.5], nota:"Dato de OpenStreetMap"},
  {n:"Greater Atlanta Veterinary Medical Group", cat:"vet", lat:33.995081, lng:-84.519145, dir:"1093 Sandy Plains Road Northeast", tel:"+1-770-424-6303", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:33.96718, lng:-84.488643, dir:"2100 Roswell Road", tel:"+1-678-931-7352", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Miller Mobile Veterinary Services & Animal Hospital", cat:"vet", lat:33.968986, lng:-84.488279, dir:"2100 Roswell Road", tel:"+1-404-538-5448", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Sandy Paws Veterinary Clinic", cat:"vet", lat:34.011481, lng:-84.49294, dir:"2550 Sandy Plains Road Northeast", tel:"+1 404-455-1189", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"The Dirty Paw Dog Spa", cat:"peluqueria", lat:34.011812, lng:-84.492072, dir:"2550 Sandy Plains Road Northeast", tel:"+1 770-977-7199", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Montgomery Park HOA Dog Park", cat:"parque", lat:33.960847, lng:-84.546715, dir:"202 Avery Street Northeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Cobb County", cat:"refugio", lat:33.948298, lng:-84.536226, dir:"148 South Fairground Street Southeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Drafty Dane", cat:"parque", lat:33.950277, lng:-84.52495, dir:"942 Roswell Street Southeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Before & After Pet Grooming & Spa", cat:"peluqueria", lat:34.018509, lng:-84.524826, dir:"2800 Canton Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cat and Dog Clinic of Cobb", cat:"vet", lat:34.009746, lng:-84.49658, dir:"2440 Sandy Plains Road Northeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barking Hound Village Marietta", cat:"refugio", lat:34.013357, lng:-84.494215, dir:"2566 East Piedmont Road Northeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:33.975626, lng:-84.478599, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marion": {nombre:"Marion", centro:[32.632354, -87.319165], tz:"America/Chicago", lugares:[
  {n:"Marion Veterinary", cat:"vet", lat:32.606544, lng:-87.318298, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marion-north-carolina": {nombre:"Marion", centro:[35.684102, -82.009103], tz:"America/New_York", lugares:[
  {n:"Crestview Veterinary Hospital, Inc.", cat:"vet", lat:35.6973, lng:-82.0256, dir:"1341 North Main Street", tel:"+1-828-659-2060", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Golden View Grooming", cat:"peluqueria", lat:35.697023, lng:-82.0478, dir:"1111 US-70", tel:"+1-828-620-2975", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Marion Inc.", cat:"vet", lat:35.697349, lng:-82.048539, dir:"1086 US-70", tel:"+1-828-724-4774", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"McDowell County Animal Shelter", cat:"refugio", lat:35.654652, lng:-81.958017, dir:"3751 NC-226", tel:"+18286526643", horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Foothills Large Animal Hospital", cat:"vet", lat:35.636359, lng:-81.890078, dir:"8786 NC-226 South", tel:"+18287383883", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Dawn Campbell’s Grooming", cat:"peluqueria", lat:35.711908, lng:-82.035984, dir:"2551 US 221 Business Extension", tel:null, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "marion-virginia": {nombre:"Marion", centro:[36.833128, -81.519515], tz:"America/New_York", lugares:[
  {n:"Blue Iguana Reptiles", cat:"tienda", lat:36.832992, lng:-81.518448, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "market-common-district": {nombre:"Market Common District", centro:[33.668979, -78.93951], tz:"America/New_York", lugares:[
  {n:"The Spoiled Pet", cat:"tienda", lat:33.655809, lng:-78.934855, dir:"3840 South Kings Highway", tel:"+1-843-653-0799", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"The Pet Doctor", cat:"vet", lat:33.646345, lng:-78.975234, dir:"2321 Dick Pond Road", tel:"+1-843-650-1555", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Coastline Pet Supply", cat:"tienda", lat:33.685561, lng:-78.961855, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marlinton": {nombre:"Marlinton", centro:[38.223453, -80.09451], tz:"America/New_York", lugares:[
  {n:"Greenbrier Veterinary Hospital", cat:"vet", lat:38.223845, lng:-80.095189, dir:"104 8th Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marshall-north-carolina": {nombre:"Marshall", centro:[35.797481, -82.683931], tz:"America/New_York", lugares:[
  {n:"Friends of Madison Co.", cat:"refugio", lat:35.796927, lng:-82.682192, dir:"107 South Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Madison County Animal Shelter", cat:"refugio", lat:35.800942, lng:-82.649244, dir:"389 Long Branch Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marshall-virginia": {nombre:"Marshall", centro:[38.864697, -77.858021], tz:"America/New_York", lugares:[
  {n:"Middleburg Humane Foundation", cat:"refugio", lat:38.863948, lng:-77.865167, dir:"5000 Cunningham Farm Drive", tel:null, horas:[10.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Animal Clinic", cat:"vet", lat:38.863672, lng:-77.849521, dir:"4197 Winchester Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "martin-tennessee": {nombre:"Martin", centro:[36.343278, -88.850351], tz:"America/Chicago", lugares:[
  {n:"Weakley County Animal Clinic", cat:"vet", lat:36.36483, lng:-88.850548, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Servall Pest Control", cat:"tienda", lat:36.349667, lng:-88.879314, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City of Martin Dog Park", cat:"parque", lat:36.309788, lng:-88.848806, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "martinez-georgia": {nombre:"Martinez", centro:[33.517358, -82.075673], tz:"America/New_York", lugares:[
  {n:"Grateful Paws Dog Grooming", cat:"peluqueria", lat:33.512976, lng:-82.093706, dir:"3837 Martinez Boulevard", tel:"+1-706-836-1437", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.491257, lng:-82.081262, dir:"225 Robert C Daniel Jr Parkway", tel:"+1 706-738-0414", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Westside Animal Hospital", cat:"vet", lat:33.506768, lng:-82.042534, dir:"244 Boy Scout Road", tel:"+1-706-738-4589", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:33.496832, lng:-82.078813, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All God's Creatures", cat:"vet", lat:33.512844, lng:-82.038654, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"St. Francis Animal Hospital", cat:"vet", lat:33.485155, lng:-82.084728, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BluePearl Pet Hospital", cat:"vet", lat:33.523109, lng:-82.01587, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "martinsburg-west-virginia": {nombre:"Martinsburg", centro:[39.456253, -77.96396], tz:"America/New_York", lugares:[
  {n:"Mountaineer Mutts", cat:"peluqueria", lat:39.478361, lng:-77.954456, dir:"93 Pleasant Ct", tel:"+1 304-267-6201", horas:[10.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.441364, lng:-77.991902, dir:"144 Retail Commons Parkway", tel:"+1 304-262-6458", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wurzburg Dog Park", cat:"parque", lat:39.4528, lng:-77.980387, dir:"400 Mall Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mary-esther": {nombre:"Mary Esther", centro:[30.409921, -86.66301], tz:"America/Chicago", lugares:[
  {n:"Panhandle Animal Welfare Society", cat:"refugio", lat:30.42424, lng:-86.67223, dir:"752 Lovejoy Road Northwest", tel:"+1 850 243 1525", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"SOCKS - Save Our Cats and Kittens", cat:"refugio", lat:30.442208, lng:-86.655379, dir:"498 Carmel Drive", tel:"+1 850 863 5756", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of the Emerald Coast", cat:"vet", lat:30.409853, lng:-86.656089, dir:"350 East Miracle Strip Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Discovery Center", cat:"peluqueria", lat:30.410156, lng:-86.656032, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Soundview Dog Park", cat:"parque", lat:30.408928, lng:-86.762943, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marydia": {nombre:"Marydia", centro:[28.33491, -81.397932], tz:"America/New_York", lugares:[
  {n:"Allendale Animal Health", cat:"vet", lat:28.338131, lng:-81.395601, dir:"940 East Osceola Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"San Mateo Crossings Dog Park", cat:"parque", lat:28.342924, lng:-81.396602, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:28.341442, lng:-81.40766, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "maryville-tennessee": {nombre:"Maryville", centro:[35.756472, -83.970459], tz:"America/New_York", lugares:[
  {n:"Bicentennial Greenbelt Dog Park", cat:"parque", lat:35.758135, lng:-83.975739, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:35.740346, lng:-83.992049, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mascot": {nombre:"Mascot", centro:[36.063736, -83.742903], tz:"America/New_York", lugares:[
  {n:"Crossings Animal Hospital", cat:"vet", lat:36.026741, lng:-83.733619, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "massaponax": {nombre:"Massaponax", centro:[38.193464, -77.508874], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.222235, lng:-77.502032, dir:"9751 Patriot Highway", tel:"+1 540-834-4336", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Krazy", cat:"peluqueria", lat:38.222207, lng:-77.506216, dir:"10007 Patriot Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Four Paws Animal Hospital", cat:"vet", lat:38.226585, lng:-77.507066, dir:"10088 Patriot Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dirty Paws Dog Wash", cat:"tienda", lat:38.241087, lng:-77.507482, dir:"10217 Southpoint Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Leavells Animal Hospital", cat:"vet", lat:38.243091, lng:-77.528451, dir:"10355 Courthouse Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fredericksburg Area SPCA", cat:"refugio", lat:38.251461, lng:-77.502282, dir:"1 Amanda Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mathews": {nombre:"Mathews", centro:[37.43374, -76.32107], tz:"America/New_York", lugares:[
  {n:"Animal Care Society", cat:"vet", lat:37.433555, lng:-76.320763, dir:"241 Main Street", tel:"+1-804-725-5242", horas:[11.0, 15.0], nota:"Dato de OpenStreetMap"}
 ]},
 "matthews-north-carolina": {nombre:"Matthews", centro:[35.115953, -80.722439], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:35.095759, lng:-80.785844, dir:"3401 Pineville-Matthews Road", tel:"+1 704-541-2473", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Plantation Animal Clinic", cat:"vet", lat:35.116448, lng:-80.723594, dir:"135 West John Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wags to Whiskers", cat:"tienda", lat:35.125921, lng:-80.708734, dir:"Matthews Township Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.133077, lng:-80.709924, dir:"9905 East Independence Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.135719, lng:-80.709194, dir:"1815 Windsor Square Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:35.083195, lng:-80.732996, dir:"3022 Weddington Road", tel:null, horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"McAlpine Creek Dog Park", cat:"parque", lat:35.152519, lng:-80.744996, dir:"8617 Monroe Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogs Day Out", cat:"tienda", lat:35.132866, lng:-80.708539, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Eye Clinic", cat:"vet", lat:35.086383, lng:-80.732424, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BluePearl Pet Hospital", cat:"vet", lat:35.085825, lng:-80.733284, dir:null, tel:null, horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Grateful Pets", cat:"peluqueria", lat:35.147577, lng:-80.745774, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East Side Animal Hospital", cat:"vet", lat:35.177665, lng:-80.756203, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Splash and Dash", cat:"peluqueria", lat:35.177743, lng:-80.756169, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petfolk", cat:"vet", lat:35.15535, lng:-80.795108, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Whiskers Dog Spa", cat:"peluqueria", lat:35.146855, lng:-80.808541, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mauldin": {nombre:"Mauldin", centro:[34.77873, -82.310119], tz:"America/New_York", lugares:[
  {n:"Fetch Specialty & Emergency Veterinary Centers (Greenville, SC)", cat:"vet", lat:34.824361, lng:-82.299345, dir:"5 Market Point Drive", tel:"+1-864-900-5888", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:34.826425, lng:-82.30163, dir:"1140 Woodruff Road", tel:"+1 864-289-9833", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.830823, lng:-82.298118, dir:"1125 Woodruff Road", tel:"+1 864-284-6398", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Mauldin Station Vet", cat:"vet", lat:34.779865, lng:-82.309968, dir:"110 North Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"mcPhail Animal Hospital", cat:"vet", lat:34.782634, lng:-82.310994, dir:null, tel:"+1-864-288-7618", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fancy Paws", cat:"peluqueria", lat:34.779338, lng:-82.302654, dir:"110 East Butler Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"DogGone Classy", cat:"peluqueria", lat:34.790064, lng:-82.314082, dir:"615 North Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oasis Animal Hospital & Emergency Center", cat:"vet", lat:34.776007, lng:-82.327276, dir:"900 West Butler Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Wants", cat:"tienda", lat:34.825983, lng:-82.294127, dir:"1143 Woodruff Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crosswinds Animal Hospital", cat:"vet", lat:34.825373, lng:-82.328725, dir:"545 Verdae Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VEG", cat:"vet", lat:34.833157, lng:-82.305809, dir:"1025 Woodruff Road", tel:null, horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "mayfield-kentucky": {nombre:"Mayfield", centro:[36.741342, -88.63555], tz:"America/Chicago", lugares:[
  {n:"Mayfield Veterinary Clinic, PSC", cat:"vet", lat:36.755352, lng:-88.63502, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mayo": {nombre:"Mayo", centro:[30.053001, -83.174858], tz:"America/New_York", lugares:[
  {n:"Mayo Town & Country Animal Hospital", cat:"vet", lat:30.05279, lng:-83.16064, dir:"974 E Main Street", tel:"+1-386-294-5000", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mccalla": {nombre:"McCalla", centro:[33.348723, -87.01416], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.335582, lng:-86.992055, dir:"4925 Promenade Parkway", tel:"+1 205-428-3437", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"McAdory Veterinary Clinic", cat:"vet", lat:33.33348, lng:-87.002791, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mcconnells": {nombre:"McConnells", centro:[34.868748, -81.227582], tz:"America/New_York", lugares:[
  {n:"Palmetto Veterinary Medicine & Surgery", cat:"vet", lat:34.86706, lng:-81.216672, dir:"6000 McConnells Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mcdonald-north-carolina": {nombre:"McDonald", centro:[34.554155, -79.175405], tz:"America/New_York", lugares:[
  {n:"Saving Grace Dog Rescue Robeson County", cat:"vet", lat:34.603974, lng:-79.102036, dir:"273 Kenric Drive", tel:"+1-910-827-7132", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mcdonough": {nombre:"McDonough", centro:[33.447336, -84.146862], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.466308, lng:-84.220499, dir:"1950 Jonesboro Road", tel:"+1 678-583-0287", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Henry County Animal Shelter", cat:"refugio", lat:33.434666, lng:-84.162804, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mckenzie-tennessee": {nombre:"McKenzie", centro:[36.131768, -88.517919], tz:"America/Chicago", lugares:[
  {n:"Carroll County Humane Society", cat:"refugio", lat:36.11961, lng:-88.491128, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mclean-virginia": {nombre:"McLean", centro:[38.934289, -77.177633], tz:"America/New_York", lugares:[
  {n:"Value Vet", cat:"vet", lat:38.936912, lng:-77.176422, dir:"1364 Chain Bridge Road", tel:"+17039827400", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Door Veterinary", cat:"vet", lat:38.91975, lng:-77.149895, dir:"6224 Old Dominion Drive", tel:"+1-703-957-0947", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Custom Canines Ltd", cat:"tienda", lat:38.937508, lng:-77.176134, dir:"1352 Old Chain Bridge Road", tel:null, horas:[7.5, 14.0], nota:"Dato de OpenStreetMap"},
  {n:"McLean Animal Hospital", cat:"vet", lat:38.938369, lng:-77.176397, dir:"1330 Old Chain Bridge Road", tel:null, horas:[7.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Your Dogs Best Friend", cat:"tienda", lat:38.939229, lng:-77.174466, dir:"1323 Chain Bridge Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Madison Community Canine Area", cat:"parque", lat:38.923008, lng:-77.122876, dir:"3829 North Stafford Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"For The Wild Birds", cat:"tienda", lat:38.936941, lng:-77.175317, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mcminnville-tennessee": {nombre:"McMinnville", centro:[35.683404, -85.769982], tz:"America/Chicago", lugares:[
  {n:"Town & Country Animal Hospital", cat:"vet", lat:35.653414, lng:-85.795706, dir:"2331 South Chancery Street", tel:"+1 931-668-5151", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Sparta Road Veterinary Clinic", cat:"vet", lat:35.715899, lng:-85.722162, dir:"4021 Sparta Highway", tel:"+1 931-668-2393", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Mountains View Veterinary", cat:"vet", lat:35.656605, lng:-85.707728, dir:"2577 Harrison Ferry Road", tel:"+1 931-668-0278", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"McMinnville Dog Park", cat:"parque", lat:35.672543, lng:-85.778436, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mcnair": {nombre:"McNair", centro:[38.952295, -77.414295], tz:"America/New_York", lugares:[
  {n:"Lee Farnum Johnson Jr. Memorial Dog Park", cat:"parque", lat:38.955209, lng:-77.41073, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clocktower Animal Hospital", cat:"vet", lat:38.949948, lng:-77.409555, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "meadow-woods": {nombre:"Meadow Woods", centro:[28.361473, -81.364919], tz:"America/New_York", lugares:[
  {n:"Family K9 Training", cat:"tienda", lat:28.361144, lng:-81.359584, dir:"1616 Brook Hollow Dr", tel:"+1-407-710-2952", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Paradise", cat:"refugio", lat:28.363603, lng:-81.311025, dir:"14200 Lake Nona Boulevard", tel:null, horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "meadowbrook": {nombre:"Meadowbrook", centro:[33.402053, -86.696653], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.421567, lng:-86.691695, dir:"5025 Highway 280", tel:"+1 205-437-0254", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Riverview Animal Clinic", cat:"vet", lat:33.427103, lng:-86.70689, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "meadowbrook-farm": {nombre:"Meadowbrook Farm", centro:[38.278404, -85.575238], tz:"America/Chicago", lugares:[
  {n:"Animal Ridders", cat:"refugio", lat:38.27696, lng:-85.56617, dir:"2111 Ben Ali Road", tel:"+1-502-423-0461", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mechanicsville-virginia": {nombre:"Mechanicsville", centro:[37.603969, -77.371732], tz:"America/New_York", lugares:[
  {n:"Skoolz of Fish", cat:"tienda", lat:37.601613, lng:-77.3742, dir:"8073 Mechanicsville Turnpike", tel:"+1 804-522-1676", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:37.599822, lng:-77.349381, dir:"7225 Bell Creek Road", tel:"+1 804-730-7545", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Riverbound Veterinary Clinic", cat:"vet", lat:37.624786, lng:-77.304516, dir:"6049 Mechanicsville Turnpike", tel:"+1-804-746-5902", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mechanicsville Animal Hospital", cat:"vet", lat:37.616214, lng:-77.339319, dir:"7041 Lee Park Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bell Creek Veterinary Hospital", cat:"vet", lat:37.635665, lng:-77.356012, dir:"8310 Bell Creek Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Farmers Veterinary Hospital", cat:"vet", lat:37.571611, lng:-77.398784, dir:"3311 Mechanicsville Turnpike", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BetterPet Veterinary", cat:"vet", lat:37.611899, lng:-77.345391, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Smokey's", cat:"vet", lat:37.611821, lng:-77.342052, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pups N Suds", cat:"peluqueria", lat:37.615947, lng:-77.318946, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pole Green Dog Park", cat:"parque", lat:37.644079, lng:-77.304931, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "medley": {nombre:"Medley", centro:[25.840653, -80.32644], tz:"America/New_York", lugares:[
  {n:"Pooch Perks", cat:"tienda", lat:25.824075, lng:-80.322991, dir:"7760 Northwest 56th Street", tel:"+1 786-534-7057", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "melbourne-florida": {nombre:"Melbourne", centro:[28.078503, -80.607791], tz:"America/New_York", lugares:[
  {n:"Nahacky’s Aquarium", cat:"tienda", lat:28.082663, lng:-80.604878, dir:"1613 South Harbor City Boulevard", tel:"+1-321-723-5340", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Melbourne Pieloch Dog Park", cat:"parque", lat:28.056325, lng:-80.625944, dir:"400 West Florida Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Clinic", cat:"vet", lat:28.04877, lng:-80.622167, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "melbourne-village": {nombre:"Melbourne Village", centro:[28.086617, -80.664622], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:28.080936, lng:-80.654954, dir:"1800 Evans Road", tel:"+1 321-722-3190", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Incredible Pets", cat:"tienda", lat:28.136936, lng:-80.672878, dir:"1894 North Wickham Road", tel:"+1-321-255-9091", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Emergency and Critical Care Center of Brevard", cat:"vet", lat:28.128409, lng:-80.655477, dir:null, tel:"+1 321-725-5365", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Maybeck Animal Hospital", cat:"vet", lat:28.07911, lng:-80.663348, dir:null, tel:null, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Puppies Plus", cat:"tienda", lat:28.081929, lng:-80.651279, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wickham Animal Hospital & Boarding", cat:"vet", lat:28.102116, lng:-80.672085, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heavenly Touch", cat:"peluqueria", lat:28.122105, lng:-80.658406, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Melbourne Animal Hospital", cat:"vet", lat:28.123793, lng:-80.671095, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cindy's Pampered Pets", cat:"peluqueria", lat:28.126112, lng:-80.67305, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pieloch", cat:"parque", lat:28.132019, lng:-80.642484, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brevard County Animal Shelter", cat:"refugio", lat:28.121341, lng:-80.712429, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "memphis": {nombre:"Memphis", centro:[27.535871, -82.561208], tz:"America/New_York", lugares:[
  {n:"Pets Plus", cat:"tienda", lat:27.543263, lng:-82.474037, dir:"8943 US Hwy 301", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wellness Animal Hospital", cat:"vet", lat:27.482909, lng:-82.410767, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "memphis-tennessee": {nombre:"Memphis", centro:[35.146026, -90.051779], tz:"America/Chicago", lugares:[
  {n:"Berclair Downtown Animal Hospital", cat:"vet", lat:35.129072, lng:-90.058738, dir:"668 South Main Street", tel:"+1-901-685-8205", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dawg Team Apparel USA", cat:"tienda", lat:35.150188, lng:-90.013999, dir:"420 North Cleveland Street", tel:"+1-901-310-4773", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:35.134296, lng:-89.994674, dir:"2015 Union Avenue", tel:"+1 888-770-4720", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:35.146814, lng:-89.971821, dir:"434 Collins Street", tel:"+19014522474", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.12843, lng:-89.946257, dir:"3468 Poplar Avenue", tel:"+1 901-323-5535", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"The Barking Lot Dog Park", cat:"parque", lat:35.147205, lng:-90.051577, dir:"76 North Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Puppy Paw Kennels", cat:"peluqueria", lat:35.155607, lng:-90.048249, dir:"400 North Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Memphis Zoo", cat:"zoo", lat:35.150383, lng:-89.99262, dir:"2000 Prentiss Place", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fourth Ruff Park", cat:"parque", lat:35.14827, lng:-90.053205, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"River Dog Inn", cat:"peluqueria", lat:35.145021, lng:-90.04757, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Bank Dog Park", cat:"parque", lat:35.132687, lng:-90.061081, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Overton Bark", cat:"parque", lat:35.146171, lng:-89.99146, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Walnut Grove Animal Clinic", cat:"vet", lat:35.135397, lng:-89.962924, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "meridian-mississippi": {nombre:"Meridian", centro:[32.36431, -88.703656], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:32.36396, lng:-88.672401, dir:"131 South Frontage Road", tel:"+1 601-693-8688", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "merrifield": {nombre:"Merrifield", centro:[38.87414, -77.227488], tz:"America/New_York", lugares:[
  {n:"VCA SouthPaws Veterinary Specialists & Emergency Center", cat:"vet", lat:38.866294, lng:-77.236717, dir:"8500 Executive Park Avenue", tel:"+1 703-752-9100", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Merrifield Animal Hospital", cat:"vet", lat:38.873193, lng:-77.237467, dir:"8429 Route 29", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Caring Hands", cat:"vet", lat:38.86622, lng:-77.225858, dir:"8100 Arlington Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mosaic Dog Park", cat:"parque", lat:38.869512, lng:-77.231877, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Grand Hotel — Dog Resort & Daycare", cat:"refugio", lat:38.875571, lng:-77.212624, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "merrimac-virginia": {nombre:"Merrimac", centro:[37.189604, -80.4198], tz:"America/New_York", lugares:[
  {n:"All For Paws Animal Clinic", cat:"vet", lat:37.16838, lng:-80.426349, dir:"175 Shoppers Way", tel:"+1 540-382-0300", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:37.168277, lng:-80.426142, dir:"165 Shoppers Way", tel:"+1 540-382-7290", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Clinic", cat:"vet", lat:37.207276, lng:-80.400502, dir:"201 South Hill Drive", tel:"+1-540-930-3880", horas:[7.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:37.158589, lng:-80.424994, dir:"180 Conston Avenue", tel:"+1 540-251-8171", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "merritt-island": {nombre:"Merritt Island", centro:[28.358119, -80.696838], tz:"America/New_York", lugares:[
  {n:"Island Animal Hospital", cat:"vet", lat:28.358461, lng:-80.701548, dir:"105 McLeod Street", tel:"+1-321-453-2430", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "miami-beach": {nombre:"Miami Beach", centro:[25.79292, -80.135301], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:25.774872, lng:-80.140155, dir:"1121 5th Street", tel:"+1 305-531-1678", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"BONEFLY", cat:"tienda", lat:25.79077, lng:-80.134372, dir:"601B Lincoln Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alton Road Animal Hospital", cat:"vet", lat:25.794184, lng:-80.141722, dir:"1828 Alton Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eco Deco Pet Hospital", cat:"vet", lat:25.788521, lng:-80.140791, dir:"1539 Alton Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Beach Animal Hospital", cat:"vet", lat:25.794411, lng:-80.142712, dir:"1874 West Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Le Vie Pet Salon · Daycare", cat:"tienda", lat:25.787964, lng:-80.141615, dir:"1538 Alton Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"DogBar", cat:"tienda", lat:25.791373, lng:-80.137853, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Day and Night Care", cat:"refugio", lat:25.794186, lng:-80.142422, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "miami-florida": {nombre:"Miami", centro:[25.774157, -80.193597], tz:"America/New_York", lugares:[
  {n:"Dogtown Brickell", cat:"peluqueria", lat:25.763307, lng:-80.190443, dir:"1100 Brickell Bay Drive", tel:"+1-305-448-5225", horas:[7.5, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Barky Lounge", cat:"peluqueria", lat:25.794029, lng:-80.18934, dir:"275 Northeast 18th Street", tel:"+1-786-409-2885", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:25.805994, lng:-80.194942, dir:"3101 North Miami Avenue", tel:"+1 305-573-8026", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Riverfront Dog Park", cat:"parque", lat:25.76928, lng:-80.195834, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bayfront Park Dog Park", cat:"parque", lat:25.773158, lng:-80.185344, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kanu", cat:"tienda", lat:25.764682, lng:-80.193932, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Maurice A Ferre Dog Park", cat:"parque", lat:25.783602, lng:-80.187445, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Serpentarium", cat:"zoo", lat:25.787073, lng:-80.175961, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "miami-lakes": {nombre:"Miami Lakes", centro:[25.908706, -80.308662], tz:"America/New_York", lugares:[
  {n:"Zen Canine Club", cat:"refugio", lat:25.915127, lng:-80.326251, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "miccosukee-indian-village": {nombre:"Miccosukee Indian Village", centro:[25.759712, -80.774786], tz:"America/New_York", lugares:[
  {n:"Gator Park", cat:"zoo", lat:25.760687, lng:-80.581199, dir:null, tel:"+1 800 559 2205", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Everglades Safari Park", cat:"zoo", lat:25.756199, lng:-80.628362, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "middle-valley": {nombre:"Middle Valley", centro:[35.195904, -85.184679], tz:"America/New_York", lugares:[
  {n:"Middle Valley Animal Hospital", cat:"vet", lat:35.154667, lng:-85.197849, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "middleburg": {nombre:"Middleburg", centro:[30.068851, -81.860378], tz:"America/New_York", lugares:[
  {n:"Poochies", cat:"peluqueria", lat:30.126483, lng:-81.798741, dir:"21 Fountain Drive", tel:"+1-904-272-4545", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Poochie's Park", cat:"parque", lat:30.126388, lng:-81.798713, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "middletown-kentucky": {nombre:"Middletown", centro:[38.245267, -85.539559], tz:"America/Chicago", lugares:[
  {n:"Veterinary Specialist Partners & Urgent Care. (VSP)", cat:"vet", lat:38.244612, lng:-85.541258, dir:"11600 Main Street", tel:null, horas:[9.0, 22.0], nota:"Dato de OpenStreetMap"}
 ]},
 "midfield": {nombre:"Midfield", centro:[33.461583, -86.908609], tz:"America/Chicago", lugares:[
  {n:"Remy's Dog Park (Special Needs)", cat:"parque", lat:33.447361, lng:-86.86108, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Remy's Dog Park (Small)", cat:"parque", lat:33.447214, lng:-86.860214, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Remy's Dog Park (Large)", cat:"parque", lat:33.447554, lng:-86.859744, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "midlothian-virginia": {nombre:"Midlothian", centro:[37.506267, -77.649268], tz:"America/New_York", lugares:[
  {n:"Wild Birds Unlimited", cat:"tienda", lat:37.501832, lng:-77.627201, dir:"12631 Stone Village Way", tel:"+1-804-464-4242", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:37.50166, lng:-77.62685, dir:"12619 Stone Village Way", tel:"+1-804-464-9187", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:37.512967, lng:-77.690128, dir:"349 Perimeter Drive", tel:"+1 804-379-6822", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Huguenot Animal Hospital", cat:"vet", lat:37.520895, lng:-77.60964, dir:"11523 Robious Road", tel:"+1-804-562-2028", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:37.508786, lng:-77.604077, dir:"1276 Carmia Way", tel:"+1 804-897-9490", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet", cat:"vet", lat:37.507287, lng:-77.665689, dir:"14300 Winterview Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Broughton's Kennel", cat:"refugio", lat:37.490584, lng:-77.682363, dir:"929 Otterdale Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blue Ribbon Pet Styling", cat:"tienda", lat:37.504718, lng:-77.665875, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Richmond Animal League", cat:"refugio", lat:37.502333, lng:-77.606586, dir:null, tel:null, horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Center West Dog Park", cat:"parque", lat:37.505655, lng:-77.693723, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:37.524877, lng:-77.610056, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"County Line Kennel", cat:"tienda", lat:37.510083, lng:-77.7683, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "midtown": {nombre:"Midtown", centro:[35.879519, -84.564102], tz:"America/New_York", lugares:[
  {n:"Animal Medical Center", cat:"vet", lat:35.893245, lng:-84.620116, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "midway-florida-2": {nombre:"Midway", centro:[30.495476, -84.454351], tz:"America/New_York", lugares:[
  {n:"Central Bark", cat:"parque", lat:30.519593, lng:-84.353507, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "midway-north-carolina": {nombre:"Midway", centro:[35.953471, -80.218104], tz:"America/New_York", lugares:[
  {n:"Hickory Tree Veterinary Hospital", cat:"vet", lat:35.989149, lng:-80.272759, dir:"118 South Village Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arcadia Veterinary Hospital", cat:"vet", lat:35.994744, lng:-80.269059, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "midway-tennessee": {nombre:"Midway", centro:[36.300106, -82.423754], tz:"America/New_York", lugares:[
  {n:"Blue Ridge Animal Hospital", cat:"vet", lat:36.310788, lng:-82.433425, dir:"3741 West Market Street", tel:"+1-423-753-7387", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Park Your Paws", cat:"refugio", lat:36.31073, lng:-82.433582, dir:"3741 West Market Street", tel:"+1-423-753-7297", horas:[8.0, 12.5], nota:"Dato de OpenStreetMap"},
  {n:"Off Leash Social", cat:"parque", lat:36.347067, lng:-82.404512, dir:"234 Denny Mill Road", tel:"+1-423-467-5566", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mignon": {nombre:"Mignon", centro:[33.183449, -86.261085], tz:"America/Chicago", lugares:[
  {n:"PetSense", cat:"tienda", lat:33.17349, lng:-86.282279, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "milford-virginia": {nombre:"Milford", centro:[38.023191, -77.373314], tz:"America/New_York", lugares:[
  {n:"Caroline Animal Hospital", cat:"vet", lat:38.018342, lng:-77.33747, dir:"17435 Richmond Turnpike", tel:"+18046335958", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "millbrook": {nombre:"Millbrook", centro:[32.479858, -86.361916], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:32.457369, lng:-86.398422, dir:"2718 Legends Parkway", tel:"+1 334-285-1505", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Cobbs Ford Pet Health Center", cat:"vet", lat:32.459339, lng:-86.4092, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "milledgeville": {nombre:"Milledgeville", centro:[33.080143, -83.232099], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.10637, lng:-83.254829, dir:"1850 North Columbia Street", tel:"+1 478-387-7402", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Old Capitol Pet Care", cat:"vet", lat:33.113197, lng:-83.241484, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nigerian Dwarf Goats", cat:"zoo", lat:33.063103, lng:-83.28663, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital", cat:"vet", lat:33.131041, lng:-83.267776, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "millington-tennessee": {nombre:"Millington", centro:[35.341474, -89.897308], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:35.359293, lng:-89.890193, dir:"8540 Highway 51N", tel:"+1 901-873-0754", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"NSA Mid-South Dog Park", cat:"parque", lat:35.330647, lng:-89.866893, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mills-river": {nombre:"Mills River", centro:[35.388448, -82.566789], tz:"America/New_York", lugares:[
  {n:"Mills River Dog Camp", cat:"refugio", lat:35.408872, lng:-82.554442, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "milton-florida": {nombre:"Milton", centro:[30.632415, -87.039688], tz:"America/Chicago", lugares:[
  {n:"Optimist Dog Park", cat:"parque", lat:30.603378, lng:-87.061779, dir:"6244 Old Bagdad Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Whiting Pines Dog Park", cat:"parque", lat:30.624574, lng:-87.060584, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "milton-georgia": {nombre:"Milton", centro:[34.1134, -84.269374], tz:"America/New_York", lugares:[
  {n:"Midway Animal Hospital", cat:"vet", lat:34.126812, lng:-84.258572, dir:"6785 Atlanta Highway", tel:"+1-770-475-2003", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"All Pets Emergency & Referral Center", cat:"vet", lat:34.128171, lng:-84.256546, dir:"6460 Atlanta Highway", tel:"+1-678-366-2500", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Countryside Pet Estates", cat:"refugio", lat:34.136551, lng:-84.284799, dir:"2540 Hopewell Road", tel:"+1-770-864-1020", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:34.109576, lng:-84.222086, dir:"6275 Cortland Walk", tel:"+17706762283", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chewy Vet Care Halcyon", cat:"vet", lat:34.109462, lng:-84.218997, dir:"6135 Ollie Walk", tel:"+16782643006", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hamby Road Animal Hospital", cat:"vet", lat:34.154831, lng:-84.253714, dir:"3785 Hamby Road", tel:"+1-770-521-1314", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Little River Animal Hospital", cat:"vet", lat:34.163859, lng:-84.334015, dir:"15710 Birmingham Highway", tel:"+1-770-619-1616", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Loving Hands Animal Clinic", cat:"vet", lat:34.115218, lng:-84.268726, dir:"13775 Alpharetta Highway", tel:null, horas:[7.5, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Caney Creek Preserve Dog Park", cat:"parque", lat:34.099435, lng:-84.186568, dir:"2755 Caney Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fowler Park Dog Park", cat:"parque", lat:34.146359, lng:-84.209887, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "milton-west-virginia": {nombre:"Milton", centro:[38.434532, -82.132364], tz:"America/New_York", lugares:[
  {n:"City of Milton Dog Park", cat:"parque", lat:38.436858, lng:-82.132082, dir:"804 Mason Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mineral-virginia": {nombre:"Mineral", centro:[38.009841, -77.907663], tz:"America/New_York", lugares:[
  {n:"Lake Anna Veterinary Hospital", cat:"vet", lat:38.081669, lng:-77.849573, dir:"1835 New Bridge Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "minneola": {nombre:"Minneola", centro:[28.575664, -81.748291], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:28.545149, lng:-81.709004, dir:"2565 East Highway 50", tel:"+1-352-227-5334", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Eastside Veterinary Hospital", cat:"vet", lat:28.537858, lng:-81.706408, dir:"15016 Pine Valley Boulevard", tel:"+1-352-394-6624", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clermont Animal Hospital", cat:"vet", lat:28.565843, lng:-81.744834, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mint-hill": {nombre:"Mint Hill", centro:[35.173539, -80.657038], tz:"America/New_York", lugares:[
  {n:"Tiffany's Pet Salon", cat:"peluqueria", lat:35.172819, lng:-80.656749, dir:"11300 Lawyers Road", tel:"+17045455195", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Woof 'n Hoof", cat:"tienda", lat:35.177499, lng:-80.650731, dir:"7710 Matthews-Mint Hill Road", tel:"+17045457387", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Mint Hill Animal Hospital", cat:"vet", lat:35.179705, lng:-80.645363, dir:"8101 Fairview Road", tel:"+1-704-545-3422", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Clear Creek Animal Hospital", cat:"vet", lat:35.212376, lng:-80.685569, dir:"9336 Parkton Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ark Veterinary Services PLLC", cat:"vet", lat:35.201484, lng:-80.735284, dir:"6444 Albemarle Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawz", cat:"tienda", lat:35.171495, lng:-80.657463, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "miramar-beach": {nombre:"Miramar Beach", centro:[30.377985, -86.361698], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:30.390608, lng:-86.427462, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "miromar-lakes": {nombre:"Miromar Lakes", centro:[26.476827, -81.773695], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:26.483749, lng:-81.790283, dir:"10020 Gulf Center Drive", tel:"+1 239-432-2869", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mobile": {nombre:"Mobile", centro:[30.691346, -88.043751], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:30.653522, lng:-88.116239, dir:"1310 Tingle Circle East", tel:"+1 251-509-0273", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"MedVet Emergency Vet & Specialty Care", cat:"vet", lat:30.669298, lng:-88.102263, dir:"2573 Government Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"HopHounds Dog Park", cat:"parque", lat:30.684925, lng:-88.051422, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Loop Veterinary Hospital", cat:"vet", lat:30.68265, lng:-88.066996, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City of Mobile Animal Services", cat:"refugio", lat:30.669971, lng:-88.062559, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cottage Hill Animal Clinic", cat:"vet", lat:30.652282, lng:-88.142555, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"B&B Pet Stop", cat:"tienda", lat:30.647932, lng:-88.158652, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Village Animal Clinic", cat:"vet", lat:30.646186, lng:-88.168927, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mockingbird-valley": {nombre:"Mockingbird Valley", centro:[38.27257, -85.682184], tz:"America/Chicago", lugares:[
  {n:"Urban Village Veterinary Care", cat:"vet", lat:38.254048, lng:-85.696591, dir:"2530 Frankfort Avenue", tel:"+1-502-290-9440", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Crescent Hill Animal Hospital", cat:"vet", lat:38.253592, lng:-85.703528, dir:"2265 Frankfort Avenue", tel:"+1-502-893-0063", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Champions Dog Run", cat:"parque", lat:38.273596, lng:-85.702546, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mocksville": {nombre:"Mocksville", centro:[35.894024, -80.561785], tz:"America/New_York", lugares:[
  {n:"Valley Animal Clinic", cat:"vet", lat:35.915456, lng:-80.583092, dir:"1243 Yadkinville Road", tel:"+13367516201", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Main Street Canines", cat:"tienda", lat:35.894697, lng:-80.562004, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "moneta": {nombre:"Moneta", centro:[37.18058, -79.61994], tz:"America/New_York", lugares:[
  {n:"Smith Mountain Lake Animal Hospital", cat:"vet", lat:37.163289, lng:-79.641898, dir:"15029 Moneta Road", tel:"+1-540-297-9188", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "monroe-georgia": {nombre:"Monroe", centro:[33.794836, -83.713229], tz:"America/New_York", lugares:[
  {n:"Monroe Animal Care Hospital", cat:"vet", lat:33.794662, lng:-83.715759, dir:"210 W Spring Street", tel:"+1-770-267-3006", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pleasant Paws in Monroe", cat:"refugio", lat:33.803262, lng:-83.719013, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "monroe-north-carolina": {nombre:"Monroe", centro:[34.985428, -80.549511], tz:"America/New_York", lugares:[
  {n:"Why Not An American Ark", cat:"zoo", lat:34.916567, lng:-80.5049, dir:"1126 Charlie Williams Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "montclair-virginia": {nombre:"Montclair", centro:[38.609775, -77.357515], tz:"America/New_York", lugares:[
  {n:"Staples Mill Animal Hospital", cat:"vet", lat:38.633158, lng:-77.372968, dir:"5548 Staples Mill Plaza", tel:"+1 703-897-0100", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Montclair Animal Hospital", cat:"vet", lat:38.603006, lng:-77.34139, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "monterey-virginia": {nombre:"Monterey", centro:[38.411985, -79.579467], tz:"America/New_York", lugares:[
  {n:"Highland County Landfill and Animal Control", cat:"refugio", lat:38.40028, lng:-79.60176, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "montgomery": {nombre:"Montgomery", centro:[32.377711, -86.309078], tz:"America/Chicago", lugares:[
  {n:"The Animal Clinic, P.C.", cat:"vet", lat:32.330578, lng:-86.243719, dir:"3505 McGehee Rd", tel:"+1 334-281-6100", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Montgomery Zoo", cat:"zoo", lat:32.420453, lng:-86.277415, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hannah Daye Ridling Bark Park", cat:"parque", lat:32.342169, lng:-86.208425, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "montgomery-georgia": {nombre:"Montgomery", centro:[31.940491, -81.122054], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:31.982087, lng:-81.142511, dir:"11132 Abercorn Street", tel:"+1 912-925-1116", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Urgent Pet Care", cat:"vet", lat:31.980024, lng:-81.14152, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southside Vetenarian Clinic", cat:"vet", lat:31.985087, lng:-81.132849, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "monticello-florida": {nombre:"Monticello", centro:[30.545202, -83.870164], tz:"America/New_York", lugares:[
  {n:"Delightful Pets", cat:"refugio", lat:30.544758, lng:-83.881164, dir:"West Washington Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Redemptive Love Farm", cat:"zoo", lat:30.595161, lng:-84.04424, dir:"9036 Magenta Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "monticello-mississippi": {nombre:"Monticello", centro:[31.553668, -90.107287], tz:"America/Chicago", lugares:[
  {n:"Paws Of Love", cat:"refugio", lat:31.536911, lng:-90.105993, dir:"1507 Reid Road", tel:"+1 769-281-8202", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Health Center of Lawrence County", cat:"vet", lat:31.531538, lng:-90.109682, dir:null, tel:"+1 601 587 4680", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "montpelier-virginia": {nombre:"Montpelier", centro:[37.821254, -77.684434], tz:"America/New_York", lugares:[
  {n:"PawsCienda Pet Resort", cat:"refugio", lat:37.815393, lng:-77.669639, dir:"16726 Mountain Road", tel:"+18048837245", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Hospital", cat:"vet", lat:37.816107, lng:-77.671293, dir:"16752 Mountain Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "montrose-virginia": {nombre:"Montrose", centro:[37.518208, -77.377706], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:37.531225, lng:-77.353923, dir:"4531 South Laburnum Avenue", tel:"+1 804-236-3245", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Fairfield Veterinary Hospital", cat:"vet", lat:37.544975, lng:-77.369447, dir:"4804 Nine Mile Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Varina Veterinary Clinic", cat:"vet", lat:37.483786, lng:-77.394821, dir:"1320 New Market Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Puppy Luv", cat:"tienda", lat:37.515254, lng:-77.349187, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "montura": {nombre:"Montura", centro:[26.642159, -81.111423], tz:"America/New_York", lugares:[
  {n:"Puppy Park", cat:"parque", lat:26.517852, lng:-80.969373, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "moody": {nombre:"Moody", centro:[33.590936, -86.490817], tz:"America/Chicago", lugares:[
  {n:"Crossroads Animal Hospital", cat:"vet", lat:33.567809, lng:-86.514908, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "moon-lake": {nombre:"Moon Lake", centro:[28.298535, -82.604234], tz:"America/New_York", lugares:[
  {n:"Country Oaks Animal Hospital", cat:"vet", lat:28.332453, lng:-82.604176, dir:"12030 Moon Lake Road", tel:"+1-727-857-9977", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Hospital", cat:"vet", lat:28.332479, lng:-82.633694, dir:"State Road 52", tel:"+1-727-856-5988", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "moores-mill": {nombre:"Moores Mill", centro:[34.843978, -86.518325], tz:"America/Chicago", lugares:[
  {n:"Flint River Animal Hospital", cat:"vet", lat:34.815129, lng:-86.490726, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bed 'N Biscuit", cat:"refugio", lat:34.814964, lng:-86.490725, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mooresville-north-carolina": {nombre:"Mooresville", centro:[35.58486, -80.810072], tz:"America/New_York", lugares:[
  {n:"Stand For Animals - Lake Norman", cat:"vet", lat:35.585608, lng:-80.839651, dir:"2714 Charlotte Highway", tel:"+1-704-970-2711", horas:[7.33, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Piedmont Animal Rescue", cat:"refugio", lat:35.555915, lng:-80.843814, dir:"228 East Waterlynn Road", tel:"+1-704-228-1934", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Paradise", cat:"refugio", lat:35.598851, lng:-80.864652, dir:"109 Morlake Drive", tel:"+1 704-360-3852", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.598123, lng:-80.868256, dir:"590 River Highway", tel:"+1 704-660-0444", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:35.587473, lng:-80.871825, dir:"137 Center Square Drive", tel:"+1-980-444-6331", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Lakewood Veterinary Hospital", cat:"vet", lat:35.557582, lng:-80.862002, dir:"813 Williamson Road", tel:"+1-704-662-6077", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brawley Animal Hospital", cat:"vet", lat:35.588727, lng:-80.87386, dir:"111 Raceway Drive", tel:"+1 704-663-5122", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Lake Norman Animal Hospital", cat:"vet", lat:35.594449, lng:-80.867556, dir:"529 River Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:35.58094, lng:-80.877134, dir:"655 Brawley School Road", tel:null, horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Jordon H Shelton Memorial Dog Park (Small Dog)", cat:"parque", lat:35.612699, lng:-80.843744, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jordan H Shelton Memorial Dog Park (Large Dog)", cat:"parque", lat:35.61326, lng:-80.843281, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lazy 5 Ranch", cat:"zoo", lat:35.622932, lng:-80.720774, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "morganton": {nombre:"Morganton", centro:[34.87558, -84.244111], tz:"America/New_York", lugares:[
  {n:"Briar Cove Kennels", cat:"refugio", lat:34.877938, lng:-84.145366, dir:"469 Briar Cove Road", tel:null, horas:[8.0, 13.0], nota:"Dato de OpenStreetMap"}
 ]},
 "morganton-north-carolina": {nombre:"Morganton", centro:[35.745429, -81.687084], tz:"America/New_York", lugares:[
  {n:"Puppy Tails", cat:"peluqueria", lat:35.735104, lng:-81.684566, dir:"402 West Fleming Drive", tel:"+1-828-437-4004", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.725036, lng:-81.703789, dir:"E142 Morganton Heights Boulevard", tel:"+1 828-219-3061", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "morrison-tennessee": {nombre:"Morrison", centro:[35.602851, -85.919707], tz:"America/Chicago", lugares:[
  {n:"All Creatures Veterinary Clinic", cat:"vet", lat:35.614636, lng:-85.887611, dir:"244 Finger Bluff Road", tel:"+1 931-409-3178", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "morristown-tennessee": {nombre:"Morristown", centro:[36.213981, -83.294892], tz:"America/New_York", lugares:[
  {n:"PetSense", cat:"tienda", lat:36.212512, lng:-83.291798, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Morristown Dog Park", cat:"parque", lat:36.243081, lng:-83.261526, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "morrisville-north-carolina": {nombre:"Morrisville", centro:[35.824341, -78.830032], tz:"America/New_York", lugares:[
  {n:"Grace Park Animal Hospital", cat:"vet", lat:35.82317, lng:-78.847056, dir:"11010 Lake Grove Boulevard", tel:"+1-919-462-1212", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Preston Animal Hospital", cat:"refugio", lat:35.808289, lng:-78.81358, dir:"9638 Chapel Hill Road", tel:"+1 919 678 1410", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.804441, lng:-78.817941, dir:"3101 Market Center Drive", tel:"+1-919-462-3433", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Noah's Ark Veterinary Hospital", cat:"vet", lat:35.790949, lng:-78.827225, dir:"4222 Northwest Cary Parkway", tel:"+1 919 469 0029", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Cornerstone Animal Hospital", cat:"vet", lat:35.789287, lng:-78.852532, dir:"2111 High House Road", tel:"+1 919 319 1555", horas:[7.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"West Cary Animal Hospital", cat:"vet", lat:35.786053, lng:-78.873251, dir:"2777 NC Highway 55", tel:"+1 919 303 1611", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Holywood Feed", cat:"tienda", lat:35.826741, lng:-78.849881, dir:null, tel:"+1-919-234-6698", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"CAT Clinic", cat:"vet", lat:35.835718, lng:-78.858303, dir:null, tel:"+1-919-380-2737", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"MeowInn", cat:"refugio", lat:35.856273, lng:-78.840519, dir:null, tel:"+1-919-665-6369", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:35.791014, lng:-78.852622, dir:"82 Cornerstone Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetPeople", cat:"tienda", lat:35.833495, lng:-78.881651, dir:"5042 Arco Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:35.807752, lng:-78.897463, dir:"637 Mills Park Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Amberly Village Veterinary Hospital", cat:"vet", lat:35.823523, lng:-78.90373, dir:"329 Sembler Lane", tel:null, horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Oriana Stables", cat:"refugio", lat:35.792599, lng:-78.905939, dir:null, tel:"+1 919 363 4981", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Providence Dog Park", cat:"parque", lat:35.897013, lng:-78.796421, dir:"9951 Ponder Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tyson Animal Hospital", cat:"vet", lat:35.889746, lng:-78.895398, dir:"5415 Apex Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.909179, lng:-78.781592, dir:"8111 Brier Creek Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Quartet Veterinary Specialty Hospital", cat:"vet", lat:35.824572, lng:-78.877061, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Homestead Veterinary Hospital", cat:"vet", lat:35.832614, lng:-78.78032, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carpenter Animal Hospital", cat:"vet", lat:35.822318, lng:-78.895926, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:35.878547, lng:-78.865635, dir:null, tel:null, horas:[10.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Diggity Daycare", cat:"tienda", lat:35.882002, lng:-78.742392, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Leesville Animal Hospital", cat:"vet", lat:35.900475, lng:-78.726186, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:35.905906, lng:-78.727663, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.908828, lng:-78.725303, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "morrow": {nombre:"Morrow", centro:[33.583166, -84.339368], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.565358, lng:-84.323425, dir:"1986 Mount Zion Road", tel:"+1 770-478-0860", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "moultrie": {nombre:"Moultrie", centro:[31.179344, -83.788579], tz:"America/New_York", lugares:[
  {n:"Petsense", cat:"tienda", lat:31.186098, lng:-83.759561, dir:"370 Veterans Parkway", tel:"+1 229-873-3290", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Moultrie", cat:"refugio", lat:31.197971, lng:-83.786449, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Matthews Veterinary Hospital", cat:"vet", lat:31.120847, lng:-83.783885, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "moundsville": {nombre:"Moundsville", centro:[39.920425, -80.743212], tz:"America/New_York", lugares:[
  {n:"Marshall County Animal Shelter", cat:"refugio", lat:39.90952, lng:-80.727862, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "moundville": {nombre:"Moundville", centro:[32.997624, -87.630008], tz:"America/Chicago", lugares:[
  {n:"Fosters Vetrinary Clinic", cat:"vet", lat:33.093717, lng:-87.685873, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mount-airy-north-carolina": {nombre:"Mount Airy", centro:[36.499388, -80.607214], tz:"America/New_York", lugares:[
  {n:"Petsense", cat:"tienda", lat:36.485796, lng:-80.61723, dir:"692 South Andy Griffith Parkway", tel:"+13367834897", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Surry Animal Hospital", cat:"vet", lat:36.481787, lng:-80.613339, dir:"926 Reeves Drive", tel:"+13367899054", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mount-dora": {nombre:"Mount Dora", centro:[28.800496, -81.644696], tz:"America/New_York", lugares:[
  {n:"Mount Dora Vertinary Hospital", cat:"vet", lat:28.784185, lng:-81.634171, dir:"6877 Old Highway 441", tel:null, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Piglet's Pantry", cat:"tienda", lat:28.799728, lng:-81.644588, dir:null, tel:null, horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Hobscott Pet Supplies", cat:"tienda", lat:28.800328, lng:-81.642138, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Le Pup Pet Nutrition", cat:"tienda", lat:28.797368, lng:-81.636533, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mt Dora Dog Park", cat:"parque", lat:28.805582, lng:-81.629418, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mount-holly-north-carolina": {nombre:"Mount Holly", centro:[35.29763, -81.016169], tz:"America/New_York", lugares:[
  {n:"PetPeople", cat:"tienda", lat:35.326935, lng:-80.941881, dir:"9516 Riverbend Village Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riverbend Veterinary PetCare Hospital", cat:"vet", lat:35.326277, lng:-80.941519, dir:"9511 Riverbend Village Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mount-juliet": {nombre:"Mount Juliet", centro:[36.200055, -86.518605], tz:"America/Chicago", lugares:[
  {n:"Sandi's Grooming", cat:"peluqueria", lat:36.234193, lng:-86.441019, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Diane's Dog House", cat:"peluqueria", lat:36.235891, lng:-86.429629, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Emerald Bay Fish & Reptile", cat:"tienda", lat:36.235708, lng:-86.429559, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mount-pleasant-north-carolina": {nombre:"Mount Pleasant", centro:[35.399308, -80.435896], tz:"America/New_York", lugares:[
  {n:"Mt. Pleasant Animal Hospital", cat:"vet", lat:35.400276, lng:-80.43687, dir:"8315 West Franklin Street", tel:"+17044369715", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mount-pleasant-south-carolina": {nombre:"Mount Pleasant", centro:[32.792796, -79.867832], tz:"America/New_York", lugares:[
  {n:"My Three Dogs Coleman", cat:"refugio", lat:32.796955, lng:-79.886652, dir:"350 West Coleman Boulevard", tel:"+1-843-881-7245", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:32.802477, lng:-79.888223, dir:"911 Houston Northcutt Boulevard", tel:"+1-843-971-7460", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:32.802552, lng:-79.888656, dir:"921 Houston Northcutt Boulevard", tel:"+1-843-654-9462", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center of Mt. Pleasant", cat:"vet", lat:32.800048, lng:-79.891172, dir:"958 Houston Northcutt Boulevard", tel:"+1-843-881-5858", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"K9 Resorts", cat:"refugio", lat:32.802387, lng:-79.891801, dir:"918 Houston Northcutt Boulevard", tel:"+1-843-806-0178", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.81657, lng:-79.843673, dir:"1501 Graddick Road", tel:"+1 843-388-2843", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.839994, lng:-79.853595, dir:"676 Long Point Road", tel:"+1 843-884-1419", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"BluePearl", cat:"vet", lat:32.810315, lng:-79.868783, dir:"985 Johnnie Dodds Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East Cooper Animal Hospital", cat:"vet", lat:32.810484, lng:-79.86829, dir:"993 Johnnie Dodds Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"AcutePet Urgent Care", cat:"vet", lat:32.798903, lng:-79.890669, dir:"966 Houston Northcutt Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Palmetto Islands County Big Dog Park", cat:"parque", lat:32.860778, lng:-79.831902, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Palmetto Islands County Small Dog Park", cat:"parque", lat:32.861179, lng:-79.831918, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mount-vernon-virginia": {nombre:"Mount Vernon", centro:[38.711277, -77.086181], tz:"America/New_York", lugares:[
  {n:"Grist Mill Dog Park", cat:"parque", lat:38.708716, lng:-77.112334, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mountain-brook": {nombre:"Mountain Brook", centro:[33.501946, -86.755683], tz:"America/Chicago", lugares:[
  {n:"Birmingham Zoo", cat:"zoo", lat:33.487303, lng:-86.779003, dir:"2630 Cahaba Road", tel:"+1-205-879-0409", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mountain-park": {nombre:"Mountain Park", centro:[34.080932, -84.411316], tz:"America/New_York", lugares:[
  {n:"Nicole's Dog Gone Cute Grooming", cat:"peluqueria", lat:34.066195, lng:-84.423287, dir:"4750 Alabama Road", tel:"+1-770-674-5608", horas:[9.0, 14.0], nota:"Dato de OpenStreetMap"},
  {n:"Mountain Park Plaza Animal Hospital", cat:"vet", lat:34.064513, lng:-84.422561, dir:"4708 Woodstock Road", tel:"+1-770-587-4800", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Mabry Animal Hospital", cat:"vet", lat:34.060525, lng:-84.420428, dir:"4540 Mabry Road Northeast", tel:"+1 770-558-4216", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.059473, lng:-84.38018, dir:"625 West Crossville Road", tel:"+1 678-352-8138", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:34.033832, lng:-84.463199, dir:"3460 Sandy Plains Road", tel:"+1 770-693-8361", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Thrive Pet Healthcare Marietta", cat:"vet", lat:34.033724, lng:-84.463285, dir:"3460 Sandy Plains Road", tel:"+1 470-632-8316", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:34.034712, lng:-84.465997, dir:"2960 Shallowford Road", tel:"+1 770-973-3551", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Sweat Mountain Dog Park", cat:"parque", lat:34.056546, lng:-84.473581, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mountain-park-georgia": {nombre:"Mountain Park", centro:[33.844217, -84.129361], tz:"America/New_York", lugares:[
  {n:"The Village Vets", cat:"vet", lat:33.839795, lng:-84.132072, dir:"5460 Five Forks Trickum Road", tel:"+1-770-717-1650", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Yellow River Game Ranch", cat:"zoo", lat:33.833501, lng:-84.087955, dir:"4525 US 78", tel:"+1-770-972-6643", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.836839, lng:-84.075512, dir:"2150 Paxton Drive Southwest", tel:"+1 770-985-0469", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Killian Hill Animal Hospital", cat:"vet", lat:33.866952, lng:-84.091818, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Laundry", cat:"peluqueria", lat:33.86888, lng:-84.091366, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "moyock": {nombre:"Moyock", centro:[36.524597, -76.178268], tz:"America/New_York", lugares:[
  {n:"Care-A-Lot Pet Supply", cat:"tienda", lat:36.518307, lng:-76.172928, dir:"102 Lark Drive", tel:"+1-252-232-9596", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mulberry-florida": {nombre:"Mulberry", centro:[27.895304, -81.973417], tz:"America/New_York", lugares:[
  {n:"SPCA Florida", cat:"refugio", lat:27.958968, lng:-81.957775, dir:"5850 Brannen Road South", tel:"+1-863-646-7722", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Reva McClurg Animal Medical Center", cat:"vet", lat:27.958936, lng:-81.957716, dir:"5850 Brannen Road South", tel:null, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mulberry-georgia": {nombre:"Mulberry", centro:[34.069146, -83.90605], tz:"America/New_York", lugares:[
  {n:"Friendship Springs Veterinary Care", cat:"vet", lat:34.108359, lng:-83.875758, dir:"7380 Spout Springs Road", tel:"+1 770 967 8387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Mountain", cat:"refugio", lat:34.074327, lng:-83.866873, dir:"4604 Braselton Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hamilton Mill Animal Hospital", cat:"vet", lat:34.070967, lng:-83.900504, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Apallachee Ridge Animal Hospital", cat:"vet", lat:34.034948, lng:-83.90905, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mullis-city": {nombre:"Mullis City", centro:[28.039827, -82.50909], tz:"America/New_York", lugares:[
  {n:"Barsch Animal Clinic", cat:"vet", lat:28.041596, lng:-82.526454, dir:"9999 Plantation Boulevard", tel:"+1-813-962-7117", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"BluePearl Veternary Partners", cat:"vet", lat:28.03545, lng:-82.492051, dir:"3000 Busch Lake Boulevard", tel:"+1-813-933-8944", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Lofton Place Dog Park", cat:"parque", lat:28.061148, lng:-82.535962, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "munford": {nombre:"Munford", centro:[33.529828, -85.950801], tz:"America/Chicago", lugares:[
  {n:"Mike Bosarge Memorial Dog Park", cat:"parque", lat:33.484589, lng:-85.808742, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "munford-tennessee": {nombre:"Munford", centro:[35.44925, -89.815083], tz:"America/Chicago", lugares:[
  {n:"Emily's Bark Park", cat:"parque", lat:35.464469, lng:-89.797944, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"English Veterinary Care", cat:"vet", lat:35.412005, lng:-89.827582, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "murdock": {nombre:"Murdock", centro:[27.012866, -82.146164], tz:"America/New_York", lugares:[
  {n:"Veterinary Emergency Clinic", cat:"vet", lat:27.007426, lng:-82.15139, dir:"17829 Murdock Circle", tel:"+1 941-255-5222", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:27.012788, lng:-82.135471, dir:"19530 Cochran Boulevard", tel:"+1 941-613-0100", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:27.008081, lng:-82.132005, dir:"1808 Tamiami Trail", tel:"+1 941-255-2164", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:27.012906, lng:-82.135486, dir:"19530 Cochran Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Class Act Grooming", cat:"peluqueria", lat:26.996053, lng:-82.118971, dir:null, tel:"+1-941-255-3647", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "murfreesboro-tennessee": {nombre:"Murfreesboro", centro:[35.84604, -86.39211], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.847848, lng:-86.421819, dir:"1734 Old Fort Parkway", tel:"+1 615-890-4344", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.861848, lng:-86.447823, dir:"2615 Medical Center Parkway", tel:"+1 615-890-0082", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal City", cat:"tienda", lat:35.856563, lng:-86.404633, dir:"919 Northwest Broad Street", tel:null, horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Williams Animal Hospital", cat:"vet", lat:35.842821, lng:-86.429175, dir:"198 Chaffin Place", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Family Pet Health", cat:"vet", lat:35.777716, lng:-86.359653, dir:"3907 Richard Reeves Drive", tel:null, horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Value Vet", cat:"vet", lat:35.852157, lng:-86.397732, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Murfreesboro Bark Park", cat:"parque", lat:35.867584, lng:-86.417243, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Custom Kare Kennel, Inc", cat:"refugio", lat:35.851321, lng:-86.429404, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:35.854373, lng:-86.431105, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"tienda", lat:35.880004, lng:-86.3867, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Indian Hills Animal Hospital", cat:"vet", lat:35.793679, lng:-86.400286, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park", cat:"parque", lat:35.825042, lng:-86.46469, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barfield Animal Hospital", cat:"vet", lat:35.782978, lng:-86.400293, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Vetinary Hospital", cat:"vet", lat:35.810914, lng:-86.461308, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"CreekWood Veterinary Hospital", cat:"vet", lat:35.846764, lng:-86.492651, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "murphy-north-carolina": {nombre:"Murphy", centro:[35.087851, -84.034224], tz:"America/New_York", lugares:[
  {n:"Marble Veterinary Hospital", cat:"vet", lat:35.153036, lng:-83.958778, dir:"6548 US-19", tel:"+18285169100", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Valley River Humane Society", cat:"refugio", lat:35.156793, lng:-83.947473, dir:"7450 US-19", tel:"+18288372304", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mountain Pets", cat:"tienda", lat:35.08616, lng:-84.035807, dir:"15 Pet Shop Way", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovin Care Boarding and Grooming", cat:"peluqueria", lat:35.097906, lng:-84.022347, dir:"599 Hill Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tri State Spay Neuter and Veterinary Clinic", cat:"vet", lat:35.056512, lng:-84.067674, dir:"3090 West US 64", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "murray-kentucky": {nombre:"Murray", centro:[36.610612, -88.302109], tz:"America/Chicago", lugares:[
  {n:"Murray-Calloway Co. Animal Shelter", cat:"refugio", lat:36.600732, lng:-88.298213, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Murray Animal Hospital & Pet Hotel", cat:"vet", lat:36.616495, lng:-88.325115, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westside Veterinary Service, LLP", cat:"vet", lat:36.586756, lng:-88.352283, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "murrells-inlet": {nombre:"Murrells Inlet", centro:[33.549918, -79.043033], tz:"America/New_York", lugares:[
  {n:"Pet Gallery", cat:"tienda", lat:33.550118, lng:-79.043079, dir:"4494 Highway 17", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Murrells Inlet Veterinary Hospital", cat:"vet", lat:33.564139, lng:-79.038027, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "myrtle-beach": {nombre:"Myrtle Beach", centro:[33.695646, -78.890041], tz:"America/New_York", lugares:[
  {n:"Precious Paws", cat:"peluqueria", lat:33.719297, lng:-78.852684, dir:"4377 North Kings Highway", tel:"+1-843-685-8204", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Myrtle Beach Animal Hospital", cat:"vet", lat:33.705658, lng:-78.891727, dir:null, tel:"+1-843-839-7387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bayside Veterinary Clinic", cat:"vet", lat:33.754084, lng:-78.866178, dir:"4016 River Oaks Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"EarthWise Pet", cat:"tienda", lat:33.758921, lng:-78.854772, dir:"244 Fresh Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Area", cat:"parque", lat:33.696456, lng:-78.914446, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bill Wingard GSHS Dog Walking Park", cat:"parque", lat:33.718349, lng:-78.900991, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nags-head": {nombre:"Nags Head", centro:[35.957392, -75.624062], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.98973, lng:-75.649178, dir:"2210 South Croatan Highway Mile", tel:"+1 252-564-3061", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Sound Veterinary Hospital", cat:"vet", lat:35.944991, lng:-75.618732, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "naples": {nombre:"Naples", centro:[26.142198, -81.794294], tz:"America/New_York", lugares:[
  {n:"Naples Coastal Animal Hospital", cat:"vet", lat:26.149473, lng:-81.795357, dir:"956 2nd Avenue North", tel:"+1-239-500-0105", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wholesome Hound Natural Pet Food Market", cat:"tienda", lat:26.149444, lng:-81.795584, dir:"298 9th Street North", tel:"+1-239-228-5282", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:26.171042, lng:-81.800724, dir:"2001 Tamiami Trail North", tel:"+1-239-580-6004", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:26.213051, lng:-81.771718, dir:"2255 Pine Ridge Road", tel:"+1-239-598-9889", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:26.218348, lng:-81.770152, dir:"6424 Naples Boulevard", tel:"+1-239-254-0263", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Naples Bay Pet Shop", cat:"tienda", lat:26.14166, lng:-81.790577, dir:"1200 5th Avenue South", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Naples Dog Park", cat:"parque", lat:26.14834, lng:-81.790055, dir:null, tel:"+1-239-213-7120", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"ScentHound", cat:"peluqueria", lat:26.20996, lng:-81.771466, dir:null, tel:"+1-239-799-7700", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Topcoat 'N Tails", cat:"peluqueria", lat:26.150949, lng:-81.795018, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws Pet Boutique", cat:"peluqueria", lat:26.13286, lng:-81.795125, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Naples Dog Center & Salon", cat:"peluqueria", lat:26.154703, lng:-81.79632, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Olde Naples Animal Wellness Center", cat:"vet", lat:26.130072, lng:-81.801099, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Von Arx Wildlife Hospital", cat:"vet", lat:26.166334, lng:-81.787425, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Naples Zoo at Caribbean Gardens", cat:"zoo", lat:26.169313, lng:-81.788583, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Glass Animal Hospital", cat:"vet", lat:26.170718, lng:-81.790801, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shear Luxury Pet Styling", cat:"peluqueria", lat:26.171424, lng:-81.790156, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paradise Pet Salon", cat:"peluqueria", lat:26.182293, lng:-81.799304, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gulfshore Animal Hospital", cat:"vet", lat:26.188577, lng:-81.799489, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Posh Paws", cat:"peluqueria", lat:26.196214, lng:-81.800871, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gulf Groomers", cat:"peluqueria", lat:26.198228, lng:-81.799074, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Smilin' Dog Bakery", cat:"tienda", lat:26.206752, lng:-81.800752, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aquariums", cat:"tienda", lat:26.21196, lng:-81.786723, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Paradise", cat:"refugio", lat:26.211809, lng:-81.77798, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Animalife Veterinary Center", cat:"vet", lat:26.21206, lng:-81.775029, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "naranja": {nombre:"Naranja", centro:[25.518165, -80.422833], tz:"America/New_York", lugares:[
  {n:"Redland Animal Hospital", cat:"vet", lat:25.535101, lng:-80.478842, dir:"24826 Southwest 177th Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nashville-north-carolina": {nombre:"Nashville", centro:[35.974598, -77.965541], tz:"America/New_York", lugares:[
  {n:"Nash County Animal Hospital", cat:"vet", lat:35.970351, lng:-77.948902, dir:"926 Eastern Avenue", tel:"+12524594001", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nashville Bark Park", cat:"parque", lat:35.977135, lng:-77.973625, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nashville-tennessee": {nombre:"Nashville", centro:[36.162277, -86.774298], tz:"America/Chicago", lugares:[
  {n:"City Pets Animal Care", cat:"vet", lat:36.172391, lng:-86.795703, dir:"1016 Jefferson Street", tel:"+1-615-678-8013", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Urban Dog Bar", cat:"parque", lat:36.16648, lng:-86.857081, dir:"5700 Ohio Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riverfront Dog Park", cat:"parque", lat:36.161042, lng:-86.772788, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:36.158558, lng:-86.785818, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BarkPark", cat:"parque", lat:36.18405, lng:-86.768839, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shelby Dog Park", cat:"parque", lat:36.170763, lng:-86.733689, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:36.170505, lng:-86.684489, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nassauville": {nombre:"Nassauville", centro:[30.569405, -81.519537], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:30.476157, lng:-81.642697, dir:"13141 City Station Drive", tel:"+1 904-696-0289", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Catty Shack Ranch Wildlife Sanctuary", cat:"zoo", lat:30.493106, lng:-81.586311, dir:"1860 Starratt Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gator Pond", cat:"zoo", lat:30.516561, lng:-81.637916, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "natural-bridge-station": {nombre:"Natural Bridge Station", centro:[37.621698, -79.499065], tz:"America/New_York", lugares:[
  {n:"Natural Bridge Animal Hospital", cat:"vet", lat:37.634208, lng:-79.527336, dir:"466 Buck Hill Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Natural Bridge Zoo", cat:"zoo", lat:37.645619, lng:-79.531961, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Virginia Safari Park", cat:"zoo", lat:37.67391, lng:-79.516547, dir:null, tel:null, horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "navarre": {nombre:"Navarre", centro:[30.401979, -86.870082], tz:"America/Chicago", lugares:[
  {n:"Gulf Breeze Zoo", cat:"zoo", lat:30.400021, lng:-86.983301, dir:"5701 Gulf Breeze Parkway", tel:"+1 850-932-2229", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park", cat:"parque", lat:30.421419, lng:-86.853678, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nelson": {nombre:"Nelson", centro:[34.382037, -84.371035], tz:"America/New_York", lugares:[
  {n:"McDaniel Meadows Dog Park", cat:"parque", lat:34.463532, lng:-84.269727, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Diamond Dog Park", cat:"parque", lat:34.463577, lng:-84.26464, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-baltimore-virginia": {nombre:"New Baltimore", centro:[38.767339, -77.728326], tz:"America/New_York", lugares:[
  {n:"Vint Hill Dog Park", cat:"parque", lat:38.745069, lng:-77.68442, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-bern": {nombre:"New Bern", centro:[35.106843, -77.039876], tz:"America/New_York", lugares:[
  {n:"Neuse Veterinary Clinic", cat:"vet", lat:35.122718, lng:-77.084437, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-hope-georgia": {nombre:"New Hope", centro:[33.958358, -84.789219], tz:"America/New_York", lugares:[
  {n:"The Regal Beagle", cat:"peluqueria", lat:33.932498, lng:-84.729401, dir:"27 Eastside Trail", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"New Hope Animal Hospital", cat:"vet", lat:33.95595, lng:-84.786361, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paulding County Animal Shelter", cat:"refugio", lat:33.944819, lng:-84.817564, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:34.010967, lng:-84.75538, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-hope-west-virginia": {nombre:"New Hope", centro:[37.339173, -81.166409], tz:"America/New_York", lugares:[
  {n:"Personal Touch The Fish Superstore", cat:"tienda", lat:37.344085, lng:-81.144517, dir:"118 Needham Pl", tel:"+1-304-487-0742", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "new-kent": {nombre:"New Kent", centro:[37.517865, -76.978363], tz:"America/New_York", lugares:[
  {n:"Village Veterinary Hospital", cat:"vet", lat:37.523986, lng:-77.007798, dir:"10500 New Kent Highway", tel:"+1 804-966-5999", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shaggy Paws Spa", cat:"tienda", lat:37.491411, lng:-77.026543, dir:"6215 Chesapeake Circle", tel:"+1 804-557-2227", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-london-north-carolina": {nombre:"New London", centro:[35.443196, -80.219223], tz:"America/New_York", lugares:[
  {n:"North Stanly Animal Clinic", cat:"vet", lat:35.442364, lng:-80.218334, dir:"229 South Main Street", tel:"+1-704-463-7356", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-market-tennessee": {nombre:"New Market", centro:[36.103977, -83.552675], tz:"America/New_York", lugares:[
  {n:"Town & Country Animal Hospital", cat:"vet", lat:36.105564, lng:-83.532625, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-market-virginia": {nombre:"New Market", centro:[38.647902, -78.671414], tz:"America/New_York", lugares:[
  {n:"Raptor Hill Falconry", cat:"zoo", lat:38.606596, lng:-78.592227, dir:"1810 Panorama View Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-smyrna-beach": {nombre:"New Smyrna Beach", centro:[29.025813, -80.927127], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:29.011959, lng:-80.946006, dir:"1938 State Road 44", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Silly Willie's Dog and Cat Boutique", cat:"tienda", lat:29.038665, lng:-80.901296, dir:"218 Flagler Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-tazewell": {nombre:"New Tazewell", centro:[36.442583, -83.599631], tz:"America/New_York", lugares:[
  {n:"Claiborne County Animal Shelter", cat:"refugio", lat:36.438794, lng:-83.591297, dir:"674 Ritchie & Lewis Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rowland Veterinary Services", cat:"vet", lat:36.425696, lng:-83.63151, dir:"1210 Highway 33 South", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "newberry": {nombre:"Newberry", centro:[29.646354, -82.606502], tz:"America/New_York", lugares:[
  {n:"Newberry Animal Hospital", cat:"vet", lat:29.644071, lng:-82.606969, dir:"280 Southwest 250th Street", tel:"+1 352 472 7035", horas:[7.5, 18.5], nota:"Dato de OpenStreetMap"}
 ]},
 "newberry-south-carolina": {nombre:"Newberry", centro:[34.275325, -81.618863], tz:"America/New_York", lugares:[
  {n:"Pet Styles on Main", cat:"tienda", lat:34.273876, lng:-81.620611, dir:"1010 Main Street", tel:"+1 803-405-9573", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"}
 ]},
 "newington-virginia": {nombre:"Newington", centro:[38.740432, -77.192533], tz:"America/New_York", lugares:[
  {n:"Olde Towne Pet Resort", cat:"refugio", lat:38.736235, lng:-77.193986, dir:"8101 Alban Road", tel:"+1 703-455-9000", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Medical Center", cat:"vet", lat:38.740342, lng:-77.21262, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:38.739961, lng:-77.165008, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "newland": {nombre:"Newland", centro:[36.087348, -81.927336], tz:"America/New_York", lugares:[
  {n:"Avery Humane Society", cat:"vet", lat:36.101715, lng:-81.93323, dir:"279 New Vale Road", tel:"+1-828-733-2333", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "newnan": {nombre:"Newnan", centro:[33.380672, -84.799657], tz:"America/New_York", lugares:[
  {n:"Dogwood Veterinary Hospital & Laser Center", cat:"vet", lat:33.388001, lng:-84.818066, dir:"24 Hospital Road", tel:null, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "newport-kentucky": {nombre:"Newport", centro:[39.088947, -84.491952], tz:"America/New_York", lugares:[
  {n:"Newport Dog Park", cat:"parque", lat:39.097341, lng:-84.487774, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "newport-news": {nombre:"Newport News", centro:[36.977502, -76.42977], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:36.879131, lng:-76.426814, dir:"6243 College Drive", tel:"+1 757-686-4539", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.872893, lng:-76.420401, dir:"1011 University Boulevard", tel:"+1 757-215-7663", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:36.871912, lng:-76.440477, dir:"2051 Sun Harbour Avenue", tel:"+1-757-977-1293", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet World", cat:"tienda", lat:37.027883, lng:-76.424804, dir:"4033 West Mercury Boulevard", tel:null, horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"James River Animal Hospital", cat:"vet", lat:37.026865, lng:-76.455569, dir:"9804 Warwick Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "newport-tennessee": {nombre:"Newport", centro:[35.967041, -83.187658], tz:"America/New_York", lugares:[
  {n:"Smokey Mountain Grooming", cat:"peluqueria", lat:35.951307, lng:-83.198752, dir:"779 Hiwassee Street", tel:"+1-423-465-2409", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pickle Puss", cat:"peluqueria", lat:35.969692, lng:-83.205102, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "newton-north-carolina": {nombre:"Newton", centro:[35.663089, -81.221936], tz:"America/New_York", lugares:[
  {n:"Pretty Paws", cat:"peluqueria", lat:35.660139, lng:-81.221989, dir:"102 East D Street", tel:"+18286403035", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Catawba County Animal Control", cat:"refugio", lat:35.661684, lng:-81.235767, dir:"201 Government Services Drive", tel:"+1-828-466-6814", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Human Society of Catawba County", cat:"refugio", lat:35.661896, lng:-81.235851, dir:"201 Government Services Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Startown Veterinary Hospital", cat:"vet", lat:35.645045, lng:-81.268185, dir:"2421 NC-10", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "niceville": {nombre:"Niceville", centro:[30.516864, -86.482172], tz:"America/Chicago", lugares:[
  {n:"Pet Sense", cat:"tienda", lat:30.517303, lng:-86.46687, dir:"1118 John Sims Parkway", tel:"+1-850-842-2689", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Laura's Pet & Horse Supply", cat:"tienda", lat:30.516696, lng:-86.470758, dir:"1051 John Sims Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Parkway Veterinary Hospital", cat:"vet", lat:30.5153, lng:-86.465297, dir:"1101 John Sims Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nicholasville": {nombre:"Nicholasville", centro:[37.880634, -84.572996], tz:"America/New_York", lugares:[
  {n:"MediVet Biologics, LLC", cat:"vet", lat:37.902693, lng:-84.5816, dir:"220 Bellaire Drive", tel:"+18003659168", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:37.953895, lng:-84.53361, dir:"310 East Brannon Road", tel:"+1 859-271-8170", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "ninety-six": {nombre:"Ninety Six", centro:[34.175127, -82.024007], tz:"America/New_York", lugares:[
  {n:"96 Veterinary Care", cat:"vet", lat:34.175628, lng:-82.024169, dir:"108 Main Street Northwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nokesville": {nombre:"Nokesville", centro:[38.69884, -77.580755], tz:"America/New_York", lugares:[
  {n:"Dog Heaven", cat:"peluqueria", lat:38.699522, lng:-77.583681, dir:"13055 Fitzwater Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nokesville Veterinary Clinic", cat:"vet", lat:38.69715, lng:-77.577646, dir:"12831 Fitzwater Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nokomis": {nombre:"Nokomis", centro:[27.119221, -82.444263], tz:"America/New_York", lugares:[
  {n:"Milano Dog Park", cat:"parque", lat:27.135083, lng:-82.377347, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "norfolk-virginia": {nombre:"Norfolk", centro:[36.84937, -76.289954], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:36.868271, lng:-76.213819, dir:"1275 North Military Highway", tel:"+1 757-459-6712", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Care-A-Lot Pet Supply", cat:"tienda", lat:36.901586, lng:-76.179104, dir:"1924 Diamond Springs Road", tel:"+1-757-457-9431", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Care Veterinary Hospital", cat:"vet", lat:36.847199, lng:-76.161281, dir:"5201 Virginia Beach Boulevard", tel:"+1-757-473-0111", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"The Ruff House Stay & Play at Bayside", cat:"refugio", lat:36.847156, lng:-76.161177, dir:"5201 Virginia Beach Boulevard", tel:"+1-757-499-7697", horas:[7.0, 11.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:36.841162, lng:-76.133496, dir:"4546 Columbus Street", tel:"+1-757-517-8010", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Virginia Zoological Park", cat:"zoo", lat:36.878128, lng:-76.276142, dir:"3500 Granby Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carpenter-Pope Veterinary Hospital", cat:"vet", lat:36.914842, lng:-76.247265, dir:"879 East Little Creek Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Maple Avenue Dog Park", cat:"parque", lat:36.948532, lng:-76.259135, dir:"176 Maple Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ocean View Dog Park", cat:"parque", lat:36.948513, lng:-76.259275, dir:"176 Maple Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hampton Roads Veterinary Hospice", cat:"vet", lat:36.829637, lng:-76.140655, dir:"4740 Baxter Road", tel:null, horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Muddy Paws", cat:"peluqueria", lat:36.851416, lng:-76.28956, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bea Arthur Dog Park", cat:"parque", lat:36.853389, lng:-76.299891, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stockley Gardens Dog Park", cat:"parque", lat:36.865204, lng:-76.294671, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Muddy Paws", cat:"tienda", lat:36.879157, lng:-76.30182, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Colonial Place Dog Park", cat:"parque", lat:36.883366, lng:-76.28471, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tropical Fish by Jungle Aquatics", cat:"tienda", lat:36.812416, lng:-76.168599, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gangsta Dog", cat:"tienda", lat:36.927416, lng:-76.191633, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "norlina": {nombre:"Norlina", centro:[36.445636, -78.197884], tz:"America/New_York", lugares:[
  {n:"Pet Exercise Area", cat:"parque", lat:36.515787, lng:-78.2073, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-augusta": {nombre:"North Augusta", centro:[33.494349, -81.970591], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.497416, lng:-81.962421, dir:"310 East Martintown Road", tel:"+1 803-426-5025", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"North Augusta Bark Park", cat:"parque", lat:33.489099, lng:-81.970348, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-bay-village": {nombre:"North Bay Village", centro:[25.846207, -80.153935], tz:"America/New_York", lugares:[
  {n:"Pets and Vets Animal Clinic", cat:"vet", lat:25.854891, lng:-80.131218, dir:"1181 71st Street", tel:"+13058611113", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "north-charleston": {nombre:"North Charleston", centro:[32.85462, -79.97481], tz:"America/New_York", lugares:[
  {n:"In The Dog House", cat:"refugio", lat:32.894707, lng:-79.929196, dir:"1032 Legrand Boulevard", tel:"+1-843-884-5434", horas:[7.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Talison Row Dog Park", cat:"parque", lat:32.855624, lng:-79.925238, dir:"500 Talison Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Daniel Island Animal Hospital", cat:"vet", lat:32.858694, lng:-79.910957, dir:"291 Seven Farms Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Charleston Heights Vetinary Clinic", cat:"vet", lat:32.855702, lng:-79.979449, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alendry Whole Pet", cat:"tienda", lat:32.881409, lng:-79.974801, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carolina Veterinary", cat:"vet", lat:32.863627, lng:-80.015525, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Michael's Barkery", cat:"peluqueria", lat:32.863807, lng:-79.905068, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Governor's Park Dog Park", cat:"parque", lat:32.863518, lng:-79.901096, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Peggy’s Park", cat:"parque", lat:32.917997, lng:-79.876411, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cainhoy Veterinary Hospital", cat:"vet", lat:32.921355, lng:-79.869396, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-decatur": {nombre:"North Decatur", centro:[33.790392, -84.306261], tz:"America/New_York", lugares:[
  {n:"Clairmont Animal Hospital", cat:"vet", lat:33.788785, lng:-84.307289, dir:"1226 Clairmont Road", tel:"+1 404-633-6163", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:33.790792, lng:-84.306732, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.789456, lng:-84.305352, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:33.793985, lng:-84.290737, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-druid-hills": {nombre:"North Druid Hills", centro:[33.816771, -84.313257], tz:"America/New_York", lugares:[
  {n:"LaVista Animal Hospital", cat:"vet", lat:33.825191, lng:-84.292134, dir:"2804 Lavista Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine House of Style", cat:"tienda", lat:33.815269, lng:-84.353376, dir:"2206 Cheshire Bridge Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barking Hound Village", cat:"refugio", lat:33.810413, lng:-84.360255, dir:"1918 Cheshire Bridge Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pet Set", cat:"refugio", lat:33.826372, lng:-84.333303, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Soft Paws Urgent Care Animal Clinic", cat:"vet", lat:33.807627, lng:-84.366505, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-fort-myers": {nombre:"North Fort Myers", centro:[26.672867, -81.884085], tz:"America/New_York", lugares:[
  {n:"Pooch Park", cat:"parque", lat:26.673422, lng:-81.899803, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pooch Park", cat:"parque", lat:26.672837, lng:-81.899897, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-lauderdale": {nombre:"North Lauderdale", centro:[26.217305, -80.225881], tz:"America/New_York", lugares:[
  {n:"Banfield Pet Hospital", cat:"vet", lat:26.234031, lng:-80.223128, dir:"7250 West Atlantic Boulevard", tel:"+1-954-978-6380", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-litchfield-beach": {nombre:"North Litchfield Beach", centro:[33.489057, -79.08254], tz:"America/New_York", lugares:[
  {n:"Young Veterinary Hospital", cat:"vet", lat:33.492243, lng:-79.088787, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lowcountry Zoo", cat:"zoo", lat:33.522098, lng:-79.08894, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-miami": {nombre:"North Miami", centro:[25.890095, -80.186714], tz:"America/New_York", lugares:[
  {n:"Rio's Pet Spa & Boarding", cat:"refugio", lat:25.892279, lng:-80.185995, dir:"609 Northeast 127th Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-miami-beach": {nombre:"North Miami Beach", centro:[25.933149, -80.162546], tz:"America/New_York", lugares:[
  {n:"Humane Society of Greater Miami", cat:"refugio", lat:25.924713, lng:-80.155356, dir:"16101 West Dixie Highway", tel:"+1-305-696-0800", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:25.910898, lng:-80.155897, dir:"14601 Biscayne Boulevard", tel:"+1 305-940-2840", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Arch Creek Animal Clinic", cat:"vet", lat:25.914797, lng:-80.157324, dir:"15090 Biscayne Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bayshore Veterinary Clinic", cat:"vet", lat:25.905847, lng:-80.157725, dir:"2043 Northeast 140th Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-myrtle-beach": {nombre:"North Myrtle Beach", centro:[33.827841, -78.680032], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:33.831512, lng:-78.669371, dir:"596 US Highway 17 North", tel:"+1 843-663-0869", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.840765, lng:-78.663323, dir:"1370 US Highway 17 North", tel:null, horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "north-palm-beach": {nombre:"North Palm Beach", centro:[26.817518, -80.082111], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:26.841027, lng:-80.090776, dir:"11262 Legacy Avenue", tel:"+1 561-514-5219", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "north-port": {nombre:"North Port", centro:[27.044224, -82.235925], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:27.070375, lng:-82.208059, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-river-shores": {nombre:"North River Shores", centro:[27.217538, -80.269738], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:27.234962, lng:-80.266568, dir:"2435 Northwest Federal Highway", tel:"+1 772-692-8609", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "north-springfield": {nombre:"North Springfield", centro:[38.80428, -77.204704], tz:"America/New_York", lugares:[
  {n:"Banfield Pet Hospital", cat:"vet", lat:38.813288, lng:-77.184487, dir:"6960 Braddock Road", tel:"+1-703-256-3172", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "north-wilkesboro": {nombre:"North Wilkesboro", centro:[36.158465, -81.147584], tz:"America/New_York", lugares:[
  {n:"Wilkes Veterinary Hospital", cat:"vet", lat:36.170858, lng:-81.141758, dir:"1007 2nd Street", tel:"+13366671109", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Riverview Animal Hospital", cat:"vet", lat:36.165734, lng:-81.125153, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "northdale": {nombre:"Northdale", centro:[28.094516, -82.507641], tz:"America/New_York", lugares:[
  {n:"Seven Lakes Bark Park", cat:"parque", lat:28.103387, lng:-82.498918, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "northport": {nombre:"Northport", centro:[33.229298, -87.577129], tz:"America/Chicago", lugares:[
  {n:"Tidmore Veterinary Clinic", cat:"vet", lat:33.237451, lng:-87.577155, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:33.238033, lng:-87.575273, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"May Veterinary", cat:"vet", lat:33.239727, lng:-87.580595, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Averette Veterinary", cat:"vet", lat:33.233522, lng:-87.563945, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Self Care Horse Boarding", cat:"refugio", lat:33.245721, lng:-87.609157, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Indian Hills Veterinary", cat:"vet", lat:33.233247, lng:-87.536979, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pampered Pets Grooming Salon", cat:"peluqueria", lat:33.266766, lng:-87.543836, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"May's Veterinary", cat:"vet", lat:33.267325, lng:-87.54138, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hot Diggity Dog Camp", cat:"refugio", lat:33.271132, lng:-87.544603, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Grooming Barn", cat:"peluqueria", lat:33.289149, lng:-87.565806, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nutter-fort": {nombre:"Nutter Fort", centro:[39.263421, -80.319728], tz:"America/New_York", lugares:[
  {n:"Prim & Trim Pet Grooming", cat:"tienda", lat:39.261123, lng:-80.324625, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Pets Animal Clinic", cat:"vet", lat:39.262903, lng:-80.327104, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oak-grove-kentucky": {nombre:"Oak Grove", centro:[36.665047, -87.442788], tz:"America/Chicago", lugares:[
  {n:"Oak Grove Animal Hospital", cat:"vet", lat:36.664062, lng:-87.443388, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oak-grove-virginia": {nombre:"Oak Grove", centro:[38.980733, -77.408918], tz:"America/New_York", lugares:[
  {n:"Healthy Hound Dog Boarding", cat:"tienda", lat:38.974766, lng:-77.411504, dir:"45910 Transamerica Plaza", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oak-hill-tennessee": {nombre:"Oak Hill", centro:[36.087837, -86.783055], tz:"America/Chicago", lugares:[
  {n:"WashPaw", cat:"peluqueria", lat:36.076805, lng:-86.7594, dir:"4811 Trousdale Drive", tel:"+1 615 781 9544", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nashville Zoo at Grassmere", cat:"zoo", lat:36.088116, lng:-86.739388, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Apache Trail Animal Hospital", cat:"vet", lat:36.068124, lng:-86.693975, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oak-island": {nombre:"Oak Island", centro:[33.912251, -78.111628], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus Bolivia", cat:"tienda", lat:33.975524, lng:-78.132393, dir:"2823 Midway Road Southeast", tel:"+1-910-253-7087", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oak-park-georgia": {nombre:"Oak Park", centro:[32.358233, -82.314569], tz:"America/New_York", lugares:[
  {n:"Dixie Livestock Market", cat:"tienda", lat:32.393615, lng:-82.299607, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oak-ridge": {nombre:"Oak Ridge", centro:[28.472337, -81.417477], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:28.496116, lng:-81.429808, dir:"4616 Millenia Plaza Way", tel:"+1 407-370-9119", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Orange County Animal Services", cat:"vet", lat:28.489816, lng:-81.427045, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oak-ridge-north-carolina": {nombre:"Oak Ridge", centro:[36.173621, -79.989217], tz:"America/New_York", lugares:[
  {n:"Cozy Bubbles", cat:"peluqueria", lat:36.142031, lng:-79.961756, dir:"4702 Golden Acres Road", tel:"+1-336-457-2005", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"All American Pet Resorts", cat:"refugio", lat:36.13454, lng:-79.967023, dir:"1680 Greenbourne Drive", tel:"+1-336-814-9758", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Cardinal Animal Hospital", cat:"vet", lat:36.125807, lng:-79.907163, dir:"2301 Fleming Road", tel:"+1-336-668-9475", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "oak-ridge-tennessee": {nombre:"Oak Ridge", centro:[36.010356, -84.269645], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:36.010477, lng:-84.253675, dir:"203 East Main Street", tel:"+1 865-294-0596", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Suite Life Pet Resort", cat:"refugio", lat:36.004241, lng:-84.289486, dir:"100 North Lincoln Circle", tel:"+1 865-253-1130", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grace Veterinary Center", cat:"vet", lat:36.022491, lng:-84.245582, dir:"1030 Oak Ridge Turnpike", tel:"+1 865-328-0102", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"McArthur Animal Hospital", cat:"vet", lat:35.999767, lng:-84.303345, dir:"2190 Oak Ridge Highway", tel:"+1 865-482-1797", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oak Ridge Veterinary Hospital", cat:"vet", lat:36.033803, lng:-84.224456, dir:"513 Oak Ridge Turnpike", tel:"+1 865 483 6614", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Oak Ridge Feed", cat:"tienda", lat:36.034001, lng:-84.22374, dir:"100 Dresden Road", tel:"+1 865 482 3229", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Oak Ridge Animal Shelter", cat:"refugio", lat:36.035142, lng:-84.221171, dir:"395 Belgrade Road", tel:"+1-865-425-3423", horas:[11.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"White Termite & Pest Control", cat:"refugio", lat:36.013131, lng:-84.239838, dir:"181 Lafayette Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ideal Veterinary Hospital", cat:"vet", lat:36.041266, lng:-84.215159, dir:"244 Brisbane Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:36.005544, lng:-84.258397, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Turtle Dog Park", cat:"parque", lat:35.99156, lng:-84.316656, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oakland-florida": {nombre:"Oakland", centro:[28.55519, -81.628034], tz:"America/New_York", lugares:[
  {n:"Oakland Park Dog Park", cat:"parque", lat:28.560366, lng:-81.61655, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oakland-park": {nombre:"Oakland Park", centro:[26.172307, -80.131989], tz:"America/New_York", lugares:[
  {n:"Dog Spot", cat:"peluqueria", lat:26.170598, lng:-80.132139, dir:"1109 Northeast 34th Court", tel:"+1 954 261-0016", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:26.177003, lng:-80.119996, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oakland-tennessee": {nombre:"Oakland", centro:[35.228976, -89.515076], tz:"America/Chicago", lugares:[
  {n:"Hollywood Feed", cat:"tienda", lat:35.230859, lng:-89.514801, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Main Street Animal Clinic", cat:"vet", lat:35.228776, lng:-89.502898, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Peebles Pet Services", cat:"refugio", lat:35.230701, lng:-89.454065, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ocala": {nombre:"Ocala", centro:[29.187199, -82.140092], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:29.143496, lng:-82.187837, dir:"4475 Southwest 40th Avenue", tel:"+1 352-291-9130", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Doggy Bubbles Dog and Pet Grooming", cat:"peluqueria", lat:29.146804, lng:-82.187904, dir:"3912 Southwest College Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paddock Park Animal Care Center", cat:"vet", lat:29.146563, lng:-82.188074, dir:"3931 Southwest 42nd Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Deerwood Village Dog Park", cat:"parque", lat:29.166138, lng:-82.118004, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park", cat:"parque", lat:29.164804, lng:-82.091724, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brookhaven Dog Parks", cat:"parque", lat:29.103846, lng:-82.216788, dir:null, tel:null, horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "ocala-estates": {nombre:"Ocala Estates", centro:[29.202197, -82.309543], tz:"America/New_York", lugares:[
  {n:"Fox Creek Animal Hospital", cat:"vet", lat:29.090642, lng:-82.2465, dir:"7651 Southwest State Road 200", tel:"+1-352-414-4321", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "occoquan": {nombre:"Occoquan", centro:[38.683727, -77.260261], tz:"America/New_York", lugares:[
  {n:"Lake Ridge Animal Hospital", cat:"vet", lat:38.673847, lng:-77.25866, dir:"1400 Old Bridge Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tacketts Mill Veterinary Hospital", cat:"vet", lat:38.674459, lng:-77.279105, dir:"12793 Harbor Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ocean-drive-beach": {nombre:"Ocean Drive Beach", centro:[33.818506, -78.673349], tz:"America/New_York", lugares:[
  {n:"Jen's Ocean Drive Pet Grooming", cat:"peluqueria", lat:33.820713, lng:-78.673651, dir:"301 Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ocean-springs": {nombre:"Ocean Springs", centro:[30.41129, -88.827917], tz:"America/Chicago", lugares:[
  {n:"Bienville Animal Hospital", cat:"vet", lat:30.415736, lng:-88.816763, dir:"1524 Bienville Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Laundromut", cat:"tienda", lat:30.413779, lng:-88.812796, dir:"2201 Government Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Two Dogs Dancing", cat:"tienda", lat:30.412116, lng:-88.827953, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ocoee": {nombre:"Ocoee", centro:[28.569447, -81.544194], tz:"America/New_York", lugares:[
  {n:"UrgentVet", cat:"vet", lat:28.551274, lng:-81.542761, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "odessa-florida": {nombre:"Odessa", centro:[28.189972, -82.575579], tz:"America/New_York", lugares:[
  {n:"The Ranch Animal Hospital", cat:"vet", lat:28.197101, lng:-82.591687, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Odessa Equine Clinic", cat:"vet", lat:28.174604, lng:-82.589082, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Paradise Odessa", cat:"peluqueria", lat:28.185146, lng:-82.550742, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Embassy Veterinary Center & Pet Retreat", cat:"vet", lat:28.206913, lng:-82.539596, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BarkYard", cat:"parque", lat:28.218685, lng:-82.524805, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "old-town-villages": {nombre:"Old Town Villages", centro:[29.910352, -81.399669], tz:"America/New_York", lugares:[
  {n:"Saint Augustine Aquarium", cat:"zoo", lat:29.913368, lng:-81.397945, dir:"2045 FL 16", tel:null, horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Mura Bella Animal Hospital", cat:"vet", lat:29.945851, lng:-81.500785, dir:"3625 Pacetti Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Forever Vets Pet Resort", cat:"refugio", lat:29.946092, lng:-81.500817, dir:"3629 Pacetti Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Saint Augustine Wild Reserve", cat:"zoo", lat:29.950976, lng:-81.512653, dir:"5190 Farm Creek Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Forever Vets Animal Hospital", cat:"vet", lat:29.962251, lng:-81.487294, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:29.960265, lng:-81.489661, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:29.962501, lng:-81.489, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oldsmar": {nombre:"Oldsmar", centro:[28.034185, -82.665099], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:28.051141, lng:-82.700919, dir:"3130 Tampa Road", tel:"+1 727-431-1991", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Woodlands Animal Hospital", cat:"vet", lat:28.040749, lng:-82.670948, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Everything Birds", cat:"tienda", lat:28.038198, lng:-82.649853, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:28.028937, lng:-82.63849, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "olive-branch": {nombre:"Olive Branch", centro:[34.96176, -89.829532], tz:"America/Chicago", lugares:[
  {n:"PetSuites", cat:"refugio", lat:34.962662, lng:-89.843265, dir:"8228 Goodman Road", tel:"+1-662-782-2112", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Equine Vetinetary Associates", cat:"vet", lat:34.958979, lng:-89.741468, dir:"6740 Center Hill Road", tel:"+1 662 893 2546", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Braided Oak Stables", cat:"refugio", lat:34.978781, lng:-89.73879, dir:"8100 Center Hill Road", tel:"+1 901 487 4170", horas:[6.0, 21.5], nota:"Dato de OpenStreetMap"},
  {n:"Olive Bark", cat:"parque", lat:34.96052, lng:-89.841687, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oliver-springs": {nombre:"Oliver Springs", centro:[36.046258, -84.343297], tz:"America/New_York", lugares:[
  {n:"Tri-County Small Animal Hospital", cat:"vet", lat:36.024583, lng:-84.314542, dir:"1054 East Tri County Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "one-loudoun": {nombre:"One Loudoun", centro:[39.052103, -77.454152], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.061802, lng:-77.469343, dir:"20020 Ashbrook Commons Plaza", tel:"+1 703-858-7108", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "oneonta": {nombre:"Oneonta", centro:[33.948154, -86.472764], tz:"America/Chicago", lugares:[
  {n:"Klassy K-9 & Sassy Kat Resort & Spa", cat:"peluqueria", lat:33.945413, lng:-86.473301, dir:"306 Railroad Avenue", tel:"+1 205-625-5857", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital, P.C", cat:"vet", lat:33.953648, lng:-86.467491, dir:"904 2nd Avenue East", tel:"+1 205-625-3291", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Woodland Bark", cat:"parque", lat:33.949052, lng:-86.467955, dir:null, tel:"+1 205-274-2150", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "onley": {nombre:"Onley", centro:[37.690851, -75.71617], tz:"America/New_York", lugares:[
  {n:"Eastern Shore Pets", cat:"tienda", lat:37.698006, lng:-75.719192, dir:"25244 Lankford Highway", tel:"+1-757-787-1462", horas:[11.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "opelika": {nombre:"Opelika", centro:[32.645412, -85.37828], tz:"America/New_York", lugares:[
  {n:"Thornton Animal Hospital", cat:"vet", lat:32.6432, lng:-85.369033, dir:"229 Columbus Parkway", tel:"+1-334-745-2541", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Animal Health Center", cat:"vet", lat:32.642518, lng:-85.391727, dir:"1520 2nd Avenue", tel:"+1-334-745-0060", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Opelika Animal Hospital", cat:"vet", lat:32.639562, lng:-85.394409, dir:"1615 2nd Avenue", tel:"+1-334-749-2025", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.6205, lng:-85.408653, dir:"2495 Enterprise Drive", tel:"+1 334-363-3161", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.617329, lng:-85.407423, dir:"2285 Tiger Town Parkway", tel:"+1-334-705-7012", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Tigertown Veterinary Hospital", cat:"vet", lat:32.619702, lng:-85.417973, dir:"2711 Frederick Road", tel:"+1 334-741-8884", horas:[7.5, 12.5], nota:"Dato de OpenStreetMap"}
 ]},
 "orange-beach": {nombre:"Orange Beach", centro:[30.294368, -87.573594], tz:"America/Chicago", lugares:[
  {n:"Gulf Coast Veterinary Hospital", cat:"vet", lat:30.2909, lng:-87.614816, dir:"24001 Canal Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Unleashed Dog Park", cat:"parque", lat:30.29535, lng:-87.548672, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "orange-park": {nombre:"Orange Park", centro:[30.165471, -81.701635], tz:"America/New_York", lugares:[
  {n:"Allied Veterinary Specialists (AVS)", cat:"vet", lat:30.188726, lng:-81.712422, dir:"275 Corporate Way", tel:"+1-904-385-3581", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.188786, lng:-81.735381, dir:"1919 Wells Road", tel:"+1 904-579-2362", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.159614, lng:-81.633992, dir:"11700 San Jose Boulevard", tel:"+1 904-831-3466", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.172098, lng:-81.626704, dir:"11111 San Jose Boulevard", tel:"+1 904-260-3225", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.199529, lng:-81.823137, dir:"9515 Crosshill Boulevard", tel:"+1 904-777-8688", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Clay Humane", cat:"vet", lat:30.145917, lng:-81.753456, dir:"2230 Filmore Street", tel:null, horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:30.142147, lng:-81.765695, dir:"835 Blanding Blvd", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.203848, lng:-81.756439, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:30.187561, lng:-81.627015, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jax Vets", cat:"vet", lat:30.195118, lng:-81.621898, dir:null, tel:null, horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Cat Clinic", cat:"vet", lat:30.195327, lng:-81.621025, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Argyle Animal Hospital", cat:"vet", lat:30.194923, lng:-81.796251, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Hospital at Oakleaf Plantation", cat:"vet", lat:30.19312, lng:-81.829756, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Forever Vets", cat:"vet", lat:30.221142, lng:-81.581763, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:30.22161, lng:-81.581694, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "orange-virginia": {nombre:"Orange", centro:[38.245411, -78.110834], tz:"America/New_York", lugares:[
  {n:"Orange County Animal Shelter", cat:"refugio", lat:38.244866, lng:-78.039849, dir:"11362 Porter Road", tel:"+1-540-672-1124", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "orangeburg-south-carolina": {nombre:"Orangeburg", centro:[33.49182, -80.855648], tz:"America/New_York", lugares:[
  {n:"Dog Food Supply", cat:"tienda", lat:33.481244, lng:-80.89424, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"tienda", lat:33.521118, lng:-80.881823, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carolina Veterinary Practice", cat:"vet", lat:33.525866, lng:-80.887265, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.529829, lng:-80.894739, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oriental": {nombre:"Oriental", centro:[35.025068, -76.695882], tz:"America/New_York", lugares:[
  {n:"Oriental Village Veterinary Hospital", cat:"vet", lat:35.026961, lng:-76.697564, dir:"407 Broad Street", tel:"+12522492149", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oriental Pet Clinic", cat:"vet", lat:35.028248, lng:-76.695643, dir:"510 Broad Street", tel:"+12522492775", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oriental Dog Park", cat:"parque", lat:35.047515, lng:-76.688176, dir:"130 Straight Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "orlando": {nombre:"Orlando", centro:[28.542122, -81.379045], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:28.551797, lng:-81.351632, dir:"2410 East Colonial Drive", tel:"+1 407-228-4340", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pups Pub", cat:"parque", lat:28.54612, lng:-81.378951, dir:"317 North Orange Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BarkHaven", cat:"parque", lat:28.556476, lng:-81.364124, dir:"1211 Illinois Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Constitution Green Dog Run", cat:"parque", lat:28.53894, lng:-81.368764, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BarkHaven", cat:"parque", lat:28.562912, lng:-81.367295, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ormond-beach": {nombre:"Ormond Beach", centro:[29.285413, -81.055792], tz:"America/New_York", lugares:[
  {n:"Diane's Pet Grooming", cat:"peluqueria", lat:29.273486, lng:-81.082948, dir:"200 South Nova Road", tel:"+1-386-281-3057", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.26332, lng:-81.105439, dir:"1298 West Granada Boulevard", tel:"+1 386-281-6660", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Salty Dog", cat:"tienda", lat:29.292044, lng:-81.041467, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "osprey": {nombre:"Osprey", centro:[27.196163, -82.490375], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:27.230246, lng:-82.496703, dir:"8356 South Tamiami Trail", tel:"+1 941-966-1840", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "oviedo": {nombre:"Oviedo", centro:[28.670253, -81.208494], tz:"America/New_York", lugares:[
  {n:"Oviedo Pet Resort", cat:"refugio", lat:28.66765, lng:-81.225611, dir:"2079 Winter Springs Boulevard", tel:"+1-407-542-3887", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scenthound Oviedo", cat:"peluqueria", lat:28.654589, lng:-81.210029, dir:"1121 Alafaya Trail", tel:"+1-863-204-1248", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park at Shane Kelly Park", cat:"parque", lat:28.677606, lng:-81.179031, dir:"499 Waggin Trail", tel:"+1 407 971 5561", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:28.65415, lng:-81.238692, dir:"1115 Vidina Place", tel:"+1 407 365 1029", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:28.654602, lng:-81.207534, dir:"1080 Alafaya Trail", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:28.654666, lng:-81.207578, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "owens-cross-roads": {nombre:"Owens Cross Roads", centro:[34.588146, -86.458877], tz:"America/Chicago", lugares:[
  {n:"Mann Veterinary Clinic", cat:"vet", lat:34.654474, lng:-86.481616, dir:"6762 US 431", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cove Dog Park", cat:"parque", lat:34.653959, lng:-86.47812, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Astro Dog Spot", cat:"parque", lat:34.601164, lng:-86.545786, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"tienda", lat:34.660708, lng:-86.485268, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "owensboro": {nombre:"Owensboro", centro:[37.774215, -87.11333], tz:"America/Chicago", lugares:[
  {n:"Audubon Animal Hospital", cat:"vet", lat:37.757751, lng:-87.142661, dir:"2450 West Parrish Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:37.763618, lng:-87.066478, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pet Manny", cat:"refugio", lat:37.731938, lng:-87.122984, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oxford": {nombre:"Oxford", centro:[33.614921, -85.833939], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.606697, lng:-85.78373, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oxford-georgia": {nombre:"Oxford", centro:[33.619003, -83.867405], tz:"America/New_York", lugares:[
  {n:"Ross Animal Hospital & Rehabilitation Center", cat:"vet", lat:33.604968, lng:-83.877809, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oxford-mississippi": {nombre:"Oxford", centro:[34.366377, -89.518766], tz:"America/Chicago", lugares:[
  {n:"Oxford Lafayette Humane Society", cat:"refugio", lat:34.381507, lng:-89.538083, dir:"413 McElroy Drive", tel:"+1 662-236-7631", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oxford Veterinary Clinic", cat:"vet", lat:34.386056, lng:-89.500896, dir:"1623 Highway 30 East", tel:"+1-662-234-3930", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:34.362073, lng:-89.562392, dir:"2210 Jackson Avenue West", tel:"+1 662-638-0435", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.363461, lng:-89.563036, dir:"2303 Jackson Avenue West", tel:"+1 662-234-7063", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Center", cat:"vet", lat:34.361244, lng:-89.503939, dir:"2008 University Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of Oxford", cat:"vet", lat:34.361784, lng:-89.558368, dir:"2008 Harris Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pampered Paws Animal Hospital", cat:"vet", lat:34.371314, lng:-89.589582, dir:"226 County Road 162", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bottletree Animal Hospital", cat:"vet", lat:34.30542, lng:-89.518072, dir:"201 Commerce Cove", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oxford Dog Park", cat:"parque", lat:34.381638, lng:-89.537452, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crossroads Animal Hospital", cat:"vet", lat:34.360974, lng:-89.588802, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ozona": {nombre:"Ozona", centro:[28.069461, -82.775657], tz:"America/New_York", lugares:[
  {n:"Curlew Animal Hosptial", cat:"vet", lat:28.050305, lng:-82.758988, dir:"1100 Omaha Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Honeymoon Island Dog Beach", cat:"parque", lat:28.054965, lng:-82.818605, dir:"Causeway Blvd", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pace": {nombre:"Pace", centro:[30.59936, -87.161081], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:30.60112, lng:-87.125113, dir:"4735 Highway 90", tel:"+1 850-994-4363", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "painter": {nombre:"Painter", centro:[37.585411, -75.78493], tz:"America/New_York", lugares:[
  {n:"Eastern Shore Animal Hospital", cat:"vet", lat:37.56986, lng:-75.796317, dir:"34424 Lankford Highway", tel:"+1-757-442-3150", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "palatka": {nombre:"Palatka", centro:[29.648788, -81.637211], tz:"America/New_York", lugares:[
  {n:"Love Your Pet Grooming", cat:"tienda", lat:29.646717, lng:-81.630606, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"tienda", lat:29.647561, lng:-81.671828, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "palm-bay": {nombre:"Palm Bay", centro:[27.994697, -80.636614], tz:"America/New_York", lugares:[
  {n:"Ark and Bark Animal Hospital", cat:"vet", lat:27.999267, lng:-80.626634, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Trident Pets", cat:"tienda", lat:28.029412, lng:-80.622477, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Playcare", cat:"refugio", lat:28.00773, lng:-80.676195, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paradise Luxury Dog Resort", cat:"refugio", lat:28.006815, lng:-80.677182, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "palm-coast": {nombre:"Palm Coast", centro:[29.554143, -81.220767], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:29.554138, lng:-81.229581, dir:"1040 Palm Coast Parkway NorthWest", tel:"+1 386 447 4357", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:29.558, lng:-81.211741, dir:"250 Palm Coast Parkway Northeast", tel:"+1 386-627-7136", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pines Lake Animal Hospital", cat:"vet", lat:29.553685, lng:-81.255794, dir:"5006 Palm Coast Parkway Northwest", tel:"+1 386 447 7381", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Spa", cat:"peluqueria", lat:29.548086, lng:-81.213253, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Safe Haven Veterinary Hospital", cat:"vet", lat:29.554991, lng:-81.233221, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:29.561037, lng:-81.210298, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:29.561768, lng:-81.21031, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital", cat:"vet", lat:29.553607, lng:-81.255316, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "palm-harbor": {nombre:"Palm Harbor", centro:[28.078072, -82.763713], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket, Inc.", cat:"tienda", lat:28.068842, lng:-82.739691, dir:"32560 US 19", tel:"+1-727-784-9306", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Country Oaks Animal Hospital & Boarding Kennel", cat:"vet", lat:28.081305, lng:-82.747098, dir:"1412 Belcher Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Hospital", cat:"vet", lat:28.098636, lng:-82.773019, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "palm-shores": {nombre:"Palm Shores", centro:[28.190529, -80.656859], tz:"America/New_York", lugares:[
  {n:"Doggy D'Tails", cat:"peluqueria", lat:28.180675, lng:-80.671073, dir:"4301 North Wickham Road", tel:"+1 321-622-6930", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Pros", cat:"tienda", lat:28.145597, lng:-80.669596, dir:"2447 North Wickham Road", tel:"+1 321-241-4632", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:28.174111, lng:-80.673819, dir:"4100 North Wickham Road", tel:null, horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Parent", cat:"vet", lat:28.148371, lng:-80.672979, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "palm-valley": {nombre:"Palm Valley", centro:[30.177465, -81.387582], tz:"America/New_York", lugares:[
  {n:"Hounds Hair", cat:"peluqueria", lat:30.184288, lng:-81.37848, dir:"931 A1A North", tel:"+1-904-280-9696", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "palmetto": {nombre:"Palmetto", centro:[27.521427, -82.572319], tz:"America/New_York", lugares:[
  {n:"Blackstone Large Dog Park", cat:"parque", lat:27.534556, lng:-82.580421, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "palmetto-bay": {nombre:"Palmetto Bay", centro:[25.621772, -80.324775], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:25.641778, lng:-80.332882, dir:"13621 South Dixie Highway", tel:"+1 305-253-5943", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Perrine Wayside Park", cat:"parque", lat:25.618157, lng:-80.345318, dir:"16425 South Dixie Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pamplin": {nombre:"Pamplin", centro:[37.263482, -78.682505], tz:"America/New_York", lugares:[
  {n:"Noah's Last Stop", cat:"tienda", lat:37.298733, lng:-78.578148, dir:"5865 Prince Edward Highway", tel:"+1 434-574-5545", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "panama-city": {nombre:"Panama City", centro:[30.158652, -85.660294], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:30.190834, lng:-85.646206, dir:"849 East 23rd Street", tel:"+1 850-522-4122", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:30.188071, lng:-85.670497, dir:"607 West 23rd Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bayview Veterinary Hospital", cat:"vet", lat:30.190609, lng:-85.699213, dir:"2333 Saint Andrews Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bayview Grooming", cat:"peluqueria", lat:30.190501, lng:-85.699502, dir:"2812 West 23rd Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bau Haus Grooming", cat:"peluqueria", lat:30.162655, lng:-85.66043, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Al Helms Dog Park", cat:"parque", lat:30.166419, lng:-85.674213, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:30.192746, lng:-85.651051, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Forest Park Animal Hospital", cat:"vet", lat:30.196828, lng:-85.662072, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "panama-city-beach": {nombre:"Panama City Beach", centro:[30.176591, -85.805386], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:30.221659, lng:-85.864303, dir:"15500 Panama City Beach Parkway", tel:"+1 850-238-3245", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Center Panama City Beach", cat:"vet", lat:30.183142, lng:-85.779969, dir:"8501 Front Beach Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"ZooWorld Zoological and Botanical Conservatory", cat:"zoo", lat:30.182557, lng:-85.787591, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pantops": {nombre:"Pantops", centro:[38.030225, -78.443822], tz:"America/New_York", lugares:[
  {n:"Darden-Towe Dog Park", cat:"parque", lat:38.044241, lng:-78.449187, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "paris-tennessee": {nombre:"Paris", centro:[36.301946, -88.325858], tz:"America/Chicago", lugares:[
  {n:"Mineral Wells Animal Clinic", cat:"vet", lat:36.285025, lng:-88.303958, dir:"1116 Volunteer Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "park-city-tennessee": {nombre:"Park City", centro:[35.082029, -86.571106], tz:"America/Chicago", lugares:[
  {n:"Farrar Animal Clinic", cat:"vet", lat:35.103911, lng:-86.565877, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "park-hills": {nombre:"Park Hills", centro:[39.071449, -84.532165], tz:"America/New_York", lugares:[
  {n:"Park Hills Animal Hospital", cat:"vet", lat:39.066079, lng:-84.530043, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "park-lake": {nombre:"Park Lake", centro:[38.345068, -85.473293], tz:"America/New_York", lugares:[
  {n:"Buckner Animal Clinic", cat:"vet", lat:38.384966, lng:-85.438483, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "parker-florida": {nombre:"Parker", centro:[30.131035, -85.603259], tz:"America/Chicago", lugares:[
  {n:"Parkway Animal Hospital", cat:"vet", lat:30.133167, lng:-85.590766, dir:"739 South Tyndall Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Agape Animal Center", cat:"vet", lat:30.138579, lng:-85.591661, dir:"438 South Tyndall Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woffie's", cat:"parque", lat:30.098963, lng:-85.642317, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "parkersburg-west-virginia": {nombre:"Parkersburg", centro:[39.266731, -81.562076], tz:"America/New_York", lugares:[
  {n:"Peek-a-boo pet styling salon", cat:"peluqueria", lat:39.28539, lng:-81.535562, dir:null, tel:"+1-304-428-3690", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BV Aquarium", cat:"tienda", lat:39.254859, lng:-81.553154, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital", cat:"vet", lat:39.241415, lng:-81.54882, dir:null, tel:null, horas:[9.0, 10.5], nota:"Dato de OpenStreetMap"},
  {n:"Mineral Wells Veterinary Clinic", cat:"vet", lat:39.179776, lng:-81.514259, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "parkland": {nombre:"Parkland", centro:[26.310079, -80.23727], tz:"America/New_York", lugares:[
  {n:"Companion Animal Hospital", cat:"vet", lat:26.349557, lng:-80.228456, dir:"11401-C West Palmetto Park Road", tel:"+1-561-488-7555", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Barkland Dog Park", cat:"parque", lat:26.310124, lng:-80.24969, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Cove Dog Park", cat:"parque", lat:26.369408, lng:-80.236664, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "parkton-north-carolina": {nombre:"Parkton", centro:[34.902664, -79.011697], tz:"America/New_York", lugares:[
  {n:"Parkton Animal Oasis", cat:"zoo", lat:34.925021, lng:-79.020116, dir:"1585 Armory Road", tel:"+1 910-635-6621", horas:[10.0, 19.75], nota:"Dato de OpenStreetMap"}
 ]},
 "parkway-village": {nombre:"Parkway Village", centro:[38.21257, -85.74024], tz:"America/Chicago", lugares:[
  {n:"Bourbon City Barkery", cat:"tienda", lat:38.235776, lng:-85.739117, dir:"1001 Logan Street", tel:"+1-502-919-1022", horas:[10.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Fairleigh Animal Hospital", cat:"vet", lat:38.236494, lng:-85.718128, dir:"1212 Bardstown Road", tel:"+1-502-451-6655", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "pawleys-island": {nombre:"Pawleys Island", centro:[33.429349, -79.121591], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:33.438043, lng:-79.132537, dir:"10225 Ocean Highway 501", tel:"+1 843-314-6001", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "peachtree-city": {nombre:"Peachtree City", centro:[33.397547, -84.589826], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.398663, lng:-84.597043, dir:"2701 West Highway 54", tel:"+1 770-631-5729", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Peachtree City Dog Park", cat:"parque", lat:33.382477, lng:-84.566209, dir:"193 McIntosh Trail", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Paradise Peachtree City", cat:"refugio", lat:33.408854, lng:-84.67557, dir:"35 Bailey Station Circle", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical", cat:"vet", lat:33.412865, lng:-84.601856, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "peachtree-corners": {nombre:"Peachtree Corners", centro:[33.970101, -84.221587], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.953516, lng:-84.231825, dir:"6050 Peachtree Parkway", tel:"+1 770-300-0926", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Lux Dog Grooming", cat:"peluqueria", lat:33.968822, lng:-84.257106, dir:"6365 Spalding Drive", tel:"+1-470-770-1843", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"The Fuzzy Dawg Pet Salon", cat:"peluqueria", lat:33.987625, lng:-84.269779, dir:"8465 Holcomb Bridge Road", tel:"+1-770-993-3294", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Puppy Haven", cat:"refugio", lat:33.990848, lng:-84.277914, dir:"2854 Holcomb Bridge Road", tel:"+1-404-885-8788;+1-770-609-7483", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Medlock Bridge Veterinary Hospital", cat:"vet", lat:33.969681, lng:-84.206512, dir:"5155 South Old Peachtree Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Furkids Pet Adoption and Community Resource Center", cat:"refugio", lat:33.965945, lng:-84.256764, dir:"4015 Holcomb Bridge Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet MedPlus", cat:"vet", lat:33.990605, lng:-84.279088, dir:"2848 Holcomb Bridge Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:33.980094, lng:-84.214016, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Peachtree Corners Animal Clinic", cat:"vet", lat:33.967214, lng:-84.255676, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:33.98708, lng:-84.275788, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:33.986088, lng:-84.276614, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pebble-creek": {nombre:"Pebble Creek", centro:[28.151488, -82.352135], tz:"America/New_York", lugares:[
  {n:"Pebble Creek Animal Hospital", cat:"vet", lat:28.151088, lng:-82.354068, dir:"19440 Bruce B Downs Boulevard", tel:"+1-813-579-6876", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:28.17458, lng:-82.355551, dir:"1231 Bruce B Downs Boulevard", tel:"+1 813-973-9067", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:28.117924, lng:-82.375119, dir:"6248 Commerce Palms Drive", tel:"+1-813-558-8160", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"New Tampa Dog Park", cat:"parque", lat:28.140755, lng:-82.354471, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:28.140086, lng:-82.357351, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fallen Oak Dog Park", cat:"parque", lat:28.168819, lng:-82.300012, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pell-city": {nombre:"Pell City", centro:[33.586215, -86.286089], tz:"America/Chicago", lugares:[
  {n:"Cropwell Small Animal Hospital", cat:"vet", lat:33.556971, lng:-86.268404, dir:"2308 Mays Drive", tel:"+1 205-338-3556", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "pembroke-pines": {nombre:"Pembroke Pines", centro:[26.006194, -80.287209], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:26.005999, lng:-80.310411, dir:"11950 Pines Boulevard", tel:"+1 954-441-7005", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Angie's Pet Spa & Supplies", cat:"peluqueria", lat:26.023905, lng:-80.265603, dir:"9003 Taft Street", tel:"+1 954-367-6325", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Craig Rupp K-9 Dog Park", cat:"parque", lat:26.016772, lng:-80.275179, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal House Veterinary Hospital", cat:"vet", lat:25.995405, lng:-80.31095, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:25.981204, lng:-80.357434, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pendleton-south-carolina": {nombre:"Pendleton", centro:[34.650809, -82.782066], tz:"America/New_York", lugares:[
  {n:"Mountain View Veterinary Services", cat:"vet", lat:34.641611, lng:-82.782335, dir:"706 South Mechanic Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pensacola": {nombre:"Pensacola", centro:[30.421309, -87.216915], tz:"America/Chicago", lugares:[
  {n:"Navy Boulevard Animal Hospital", cat:"vet", lat:30.409312, lng:-87.266183, dir:"3835 West Navy Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pensacola Pet Resort", cat:"tienda", lat:30.421479, lng:-87.213066, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bayview Park Dog Park", cat:"parque", lat:30.430979, lng:-87.191173, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park", cat:"parque", lat:30.361082, lng:-87.336486, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "perry-south-carolina": {nombre:"Perry", centro:[33.626816, -81.311492], tz:"America/New_York", lugares:[
  {n:"Eudora Wildlife Safari Park", cat:"zoo", lat:33.653795, lng:-81.252575, dir:"219 Salem Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "petal": {nombre:"Petal", centro:[31.346563, -89.26006], tz:"America/Chicago", lugares:[
  {n:"City of Petal Dog Park", cat:"parque", lat:31.328731, lng:-89.26226, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "phenix-city": {nombre:"Phenix City", centro:[32.470976, -85.000765], tz:"America/New_York", lugares:[
  {n:"Phenix Animal Hospital", cat:"vet", lat:32.473382, lng:-85.015749, dir:"1700 Crawford Road", tel:"+1-334-298-3841", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "picayune": {nombre:"Picayune", centro:[30.525469, -89.679508], tz:"America/Chicago", lugares:[
  {n:"Picayune Animal Shelter", cat:"refugio", lat:30.527433, lng:-89.699241, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"barking lot", cat:"parque", lat:30.542842, lng:-89.663442, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pickens-south-carolina": {nombre:"Pickens", centro:[34.883798, -82.706974], tz:"America/New_York", lugares:[
  {n:"Petsense", cat:"tienda", lat:34.893924, lng:-82.70909, dir:"502 Ann Street", tel:"+1-864-898-2962", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Creekside Pet Grooming", cat:"peluqueria", lat:34.891866, lng:-82.710115, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "piedmont-south-carolina": {nombre:"Piedmont", centro:[34.702339, -82.464571], tz:"America/New_York", lugares:[
  {n:"My Pet's Best Friend", cat:"refugio", lat:34.692247, lng:-82.398755, dir:"8100 Augusta Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Foothills Veterinary Hospital", cat:"vet", lat:34.684471, lng:-82.400323, dir:"8318 Augusta Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pigeon-forge": {nombre:"Pigeon Forge", centro:[35.788424, -83.554333], tz:"America/New_York", lugares:[
  {n:"GroomNglitz, LLC", cat:"tienda", lat:35.807758, lng:-83.574718, dir:"171-SWT 19 East Wears Valley Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Live Bears at Three Bears", cat:"zoo", lat:35.799334, lng:-83.567459, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pike-road": {nombre:"Pike Road", centro:[32.284308, -86.103017], tz:"America/Chicago", lugares:[
  {n:"Banfield Pet Hospital", cat:"vet", lat:32.358258, lng:-86.16064, dir:"2510 Berryhill Road", tel:"+1 334-270-1885", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Medical Exam Board", cat:"vet", lat:32.337456, lng:-86.172624, dir:"8100 Seaton Place", tel:null, horas:[7.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "pikeville": {nombre:"Pikeville", centro:[37.479267, -82.518763], tz:"America/New_York", lugares:[
  {n:"Valley Veterinary Clinic", cat:"vet", lat:37.391951, lng:-82.53435, dir:"65 Compton Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pikeville-north-carolina": {nombre:"Pikeville", centro:[35.497105, -77.981931], tz:"America/New_York", lugares:[
  {n:"Northern Wayne Animal Hospital", cat:"vet", lat:35.507124, lng:-77.982042, dir:"5393 US Hwy 117 N", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pikeville-tennessee": {nombre:"Pikeville", centro:[35.605492, -85.189228], tz:"America/New_York", lugares:[
  {n:"Pikeville Pampered Paws Pet Salon", cat:"tienda", lat:35.59742, lng:-85.190815, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pilot-mountain": {nombre:"Pilot Mountain", centro:[36.385135, -80.467121], tz:"America/New_York", lugares:[
  {n:"Kritter Kutts Pet Grooming", cat:"peluqueria", lat:36.386289, lng:-80.458788, dir:"421 East 52 Bypass", tel:"+13364444403", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pimmit-hills": {nombre:"Pimmit Hills", centro:[38.912889, -77.200814], tz:"America/New_York", lugares:[
  {n:"Veterinary Emergency Group", cat:"vet", lat:38.903735, lng:-77.203473, dir:"7500 Leesburg Pike", tel:"+1 571-730-6880", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "pine-mountain": {nombre:"Pine Mountain", centro:[32.864852, -84.854098], tz:"America/New_York", lugares:[
  {n:"Wild Animal Safari", cat:"zoo", lat:32.899943, lng:-84.923783, dir:"1300 Oak Grove Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pinecrest": {nombre:"Pinecrest", centro:[25.667048, -80.308107], tz:"America/New_York", lugares:[
  {n:"Scenthound", cat:"peluqueria", lat:25.662915, lng:-80.324365, dir:"8183 South Dixie Highway", tel:"+1-786-706-5408", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Veg", cat:"vet", lat:25.659638, lng:-80.32575, dir:"11921 South Dixie Highway", tel:"+1-305-615-1665", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Large Dogs Park", cat:"parque", lat:25.640708, lng:-80.274167, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dogs Park", cat:"parque", lat:25.640612, lng:-80.27366, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pinehurst": {nombre:"Pinehurst", centro:[32.195997, -83.762953], tz:"America/New_York", lugares:[
  {n:"Spike's Dog Park", cat:"parque", lat:32.191098, lng:-83.749309, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pinellas-park": {nombre:"Pinellas Park", centro:[27.842803, -82.699544], tz:"America/New_York", lugares:[
  {n:"Pinellas Animal Hospital", cat:"vet", lat:27.842668, lng:-82.703723, dir:"7791 52nd Street North", tel:"+1-727-546-0005", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:27.836021, lng:-82.683398, dir:"7050 US Highway 19 North", tel:"+1 727-527-8460", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"JD Smith Exterminators", cat:"tienda", lat:27.838527, lng:-82.682042, dir:"3565 Cypress Terrace", tel:"+1-813-239-2112", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:27.843902, lng:-82.644167, dir:"7777 Doctor Martin Luther King Junior Street North", tel:"+1 727-577-9935", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Partridge Animal Hospital", cat:"vet", lat:27.831364, lng:-82.63904, dir:"6400 4th Street North", tel:"+1-727-526-8700", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Park Feed", cat:"tienda", lat:27.839442, lng:-82.712456, dir:"Park Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bonsai Koi Ponds", cat:"tienda", lat:27.839425, lng:-82.72226, dir:"Park Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Park Animal Hospital", cat:"vet", lat:27.845166, lng:-82.728139, dir:"66th Street North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:27.827941, lng:-82.661148, dir:"62nd Avenue North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Food Warehouse", cat:"tienda", lat:27.828049, lng:-82.658224, dir:"62nd Avenue North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cat Hospital", cat:"vet", lat:27.867539, lng:-82.622259, dir:"Gandy Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Whitney's Grooming & Pet Supplies", cat:"tienda", lat:27.836983, lng:-82.700293, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Freedom Lake Park's Dog Park", cat:"parque", lat:27.863317, lng:-82.697954, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Piccadilly Pet Salon", cat:"tienda", lat:27.830116, lng:-82.64591, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pinetops": {nombre:"Pinetops", centro:[35.791175, -77.637515], tz:"America/New_York", lugares:[
  {n:"It's A Zoo Life", cat:"zoo", lat:35.786787, lng:-77.67449, dir:"4313 NC-42", tel:"+1-252-266-7974", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "pineville-north-carolina": {nombre:"Pineville", centro:[35.085541, -80.887125], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.106131, lng:-80.879944, dir:"9515 South Boulevard", tel:"+1 704-405-6967", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Four Paws Dog Retreat", cat:"peluqueria", lat:35.114068, lng:-80.911888, dir:"10901 Downs Road", tel:"+1-704-583-2438", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Archdale Animal Hospital", cat:"vet", lat:35.153064, lng:-80.876984, dir:"1319 Archdale Drive", tel:"+1-704-552-2333", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.102921, lng:-80.983, dir:"14137 Rivergate Parkway", tel:"+1 704-587-1198", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Stand For Animals Veterinary Clinic", cat:"vet", lat:35.09417, lng:-80.883247, dir:"10833 Pineville Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Commons Dog Park", cat:"parque", lat:35.076184, lng:-80.892893, dir:"181 Lake Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Steele Creek Animal Hospital", cat:"vet", lat:35.126257, lng:-80.94256, dir:"9729 South Tryon Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lucky Dog Bark and Brew", cat:"refugio", lat:35.106659, lng:-80.959138, dir:"13835 South Lakes Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSuites Charlotte Airport", cat:"refugio", lat:35.148981, lng:-80.894246, dir:"219 Archdale Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Laurel Oak Farm Dog Kennel", cat:"refugio", lat:35.072436, lng:-81.019256, dir:"16219 Youngblood Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Gone Beautiful", cat:"tienda", lat:35.089977, lng:-80.858603, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:35.086629, lng:-80.847603, dir:null, tel:null, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet Pet Clinic", cat:"vet", lat:35.068705, lng:-80.842583, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Ballantyne Animal Hospital", cat:"vet", lat:35.041159, lng:-80.861707, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Broadstone Ayrsley Dog Park", cat:"parque", lat:35.132205, lng:-80.932918, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Station Dog Park", cat:"parque", lat:35.143431, lng:-80.864321, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ballantyne Vet Hospital", cat:"vet", lat:35.02778, lng:-80.85074, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:35.148082, lng:-80.833216, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.103085, lng:-80.982738, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pringle Towns Dog Park", cat:"parque", lat:35.156283, lng:-80.963969, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "piney-flats": {nombre:"Piney Flats", centro:[36.419549, -82.304026], tz:"America/New_York", lugares:[
  {n:"Glamour Fur", cat:"peluqueria", lat:36.434315, lng:-82.306079, dir:"5653 Highway 11E", tel:"+1-423-530-3393", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Appalachian Animal Hospital", cat:"vet", lat:36.43921, lng:-82.302891, dir:"5462 US 11E", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "piney-green": {nombre:"Piney Green", centro:[34.715996, -77.320236], tz:"America/New_York", lugares:[
  {n:"Midway Dog Park #1", cat:"parque", lat:34.72869, lng:-77.337777, dir:"Butler Drive North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Liberty Pointe Dog Park", cat:"parque", lat:34.719346, lng:-77.317309, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Midway Dog Park #2", cat:"parque", lat:34.726129, lng:-77.334062, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pinson": {nombre:"Pinson", centro:[33.688991, -86.683323], tz:"America/Chicago", lugares:[
  {n:"Cherry Palmer Memorial Dog Park", cat:"parque", lat:33.669719, lng:-86.684237, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pittsboro-north-carolina": {nombre:"Pittsboro", centro:[35.720123, -79.177154], tz:"America/New_York", lugares:[
  {n:"Hill Creek Veterinary Hospital", cat:"vet", lat:35.720952, lng:-79.181186, dir:"23 Rectory Street", tel:"+1-919-542-1141", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chatham Pet Styling Salon", cat:"refugio", lat:35.720587, lng:-79.160393, dir:"984 Thompson Street", tel:"+1-919-542-6062", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carolina Tiger Rescue", cat:"zoo", lat:35.710947, lng:-79.114316, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "plains": {nombre:"Plains", centro:[32.034087, -84.392663], tz:"America/New_York", lugares:[
  {n:"Veterinary Services - Doctor Frank E. Pierce", cat:"vet", lat:32.033132, lng:-84.394141, dir:"105 West Main Street", tel:"+1 229 824 5796", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "plant-city": {nombre:"Plant City", centro:[28.01633, -82.12348], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:27.987134, lng:-82.124098, dir:"211 West Alexander Street", tel:"+1 813-703-6961", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Turkey Creek Animal Hospital", cat:"vet", lat:28.019955, lng:-82.174113, dir:"4645 US 92", tel:"+1-813-752-1010", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Classy Canines Pet Resort", cat:"tienda", lat:27.993875, lng:-82.041057, dir:"3927 Progress Drive", tel:"+1-863-417-2876", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All in One Pet Parlor", cat:"tienda", lat:28.013047, lng:-82.122827, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "plantation": {nombre:"Plantation", centro:[26.127586, -80.233104], tz:"America/New_York", lugares:[
  {n:"Petland", cat:"tienda", lat:26.109751, lng:-80.252764, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Medium Dog Area", cat:"parque", lat:26.102202, lng:-80.234053, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Dog Area", cat:"parque", lat:26.101952, lng:-80.23458, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Area", cat:"parque", lat:26.101909, lng:-80.234048, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:26.097826, lng:-80.252691, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "plantation-florida": {nombre:"Plantation", centro:[27.063726, -82.365163], tz:"America/New_York", lugares:[
  {n:"Fetch Dog Park at Wellen Park", cat:"parque", lat:27.044774, lng:-82.326085, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "plantation-kentucky": {nombre:"Plantation", centro:[38.283403, -85.591072], tz:"America/Chicago", lugares:[
  {n:"Plantation Animal Clinic", cat:"vet", lat:38.281285, lng:-85.591921, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "plum-creek": {nombre:"Plum Creek", centro:[37.128692, -80.506079], tz:"America/New_York", lugares:[
  {n:"Riverside Veterinary Clinic", cat:"vet", lat:37.134592, lng:-80.538238, dir:"210 East Main Street", tel:"+1-540-633-3900", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "poinciana": {nombre:"Poinciana", centro:[28.143131, -81.470074], tz:"America/New_York", lugares:[
  {n:"Furry Tails Pet Grooming", cat:"tienda", lat:28.14835, lng:-81.450538, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"WildFlorida Safaris", cat:"zoo", lat:28.080204, lng:-81.297303, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "polk-city": {nombre:"Polk City", centro:[28.182515, -81.823968], tz:"America/New_York", lugares:[
  {n:"Outback Animal Clinic", cat:"vet", lat:28.184602, lng:-81.822246, dir:"224 Commonwealth Avenue North", tel:"+1-863-984-4123", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ponce-inlet": {nombre:"Ponce Inlet", centro:[29.096373, -80.936998], tz:"America/New_York", lugares:[
  {n:"Dog Beach", cat:"parque", lat:29.065998, lng:-80.917222, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ponte-vedra-beach": {nombre:"Ponte Vedra Beach", centro:[30.227464, -81.380082], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:30.255374, lng:-81.395392, dir:"950 Marsh Landing Parkway", tel:"+1 904-273-0964", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "pooler": {nombre:"Pooler", centro:[32.115898, -81.249513], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:32.141698, lng:-81.251417, dir:"262 Pooler Parkway", tel:"+1 912-988-4072", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Hospital", cat:"vet", lat:32.064935, lng:-81.205426, dir:"1452 Dean Forest Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woofgang Bakery & Grooming", cat:"tienda", lat:32.080727, lng:-81.284994, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "poquoson": {nombre:"Poquoson", centro:[37.124186, -76.392146], tz:"America/New_York", lugares:[
  {n:"Veterinarian", cat:"vet", lat:37.097933, lng:-76.356358, dir:"504 North Roma Road", tel:"+1-757-764-5678", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "port-charlotte": {nombre:"Port Charlotte", centro:[26.976171, -82.090645], tz:"America/New_York", lugares:[
  {n:"D & D Dog Grooming", cat:"peluqueria", lat:26.97326, lng:-82.087878, dir:"3805 Tamiami Trail", tel:"+1-941-629-5786", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yes 4 Paws", cat:"peluqueria", lat:26.992334, lng:-82.114395, dir:"2605 Tamiami Trail", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"My Buddies", cat:"tienda", lat:26.975414, lng:-82.090829, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "port-orange": {nombre:"Port Orange", centro:[29.138687, -80.996829], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:29.126423, lng:-81.00216, dir:"3829 South Nova Road", tel:"+1 386 756 4469", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Cat-A-Holic Cats", cat:"peluqueria", lat:29.115492, lng:-80.974124, dir:"5608 S Ridgewood Ave", tel:"+1-386-212-5523", horas:[8.5, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic", cat:"vet", lat:29.125543, lng:-81.002163, dir:"South Nova Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "port-royal-south-carolina": {nombre:"Port Royal", centro:[32.220759, -80.67233], tz:"America/New_York", lugares:[
  {n:"Evergreen Pet Lodge", cat:"refugio", lat:32.224752, lng:-80.689648, dir:"105 Dillon Road", tel:"+1 843-681-8354", horas:[8.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Plantation Animal Hospital", cat:"vet", lat:32.22435, lng:-80.689765, dir:"105 Dillon Road", tel:"+1 843-681-4586", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "port-royal-south-carolina-2": {nombre:"Port Royal", centro:[32.379084, -80.692607], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:32.421324, lng:-80.733464, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Habersham Dog Park", cat:"parque", lat:32.428008, lng:-80.781392, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "port-saint-joe": {nombre:"Port Saint Joe", centro:[29.811876, -85.302974], tz:"America/New_York", lugares:[
  {n:"Animal Hospital of Port St. Joe", cat:"vet", lat:29.814439, lng:-85.301966, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "port-saint-lucie": {nombre:"Port Saint Lucie", centro:[27.293933, -80.350328], tz:"America/New_York", lugares:[
  {n:"Pets Place Grooming", cat:"peluqueria", lat:27.277401, lng:-80.386448, dir:"1272 Southwest California Boulevard", tel:"+1-772-621-7005", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:27.271651, lng:-80.428331, dir:"10540 Southwest Village Parkway", tel:"+1 772-345-2370", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Lyngate Dog Park", cat:"parque", lat:27.286004, lng:-80.310316, dir:"1301 Southeast Lyngate Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal General", cat:"vet", lat:27.271238, lng:-80.363108, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "port-wentworth": {nombre:"Port Wentworth", centro:[32.149092, -81.163168], tz:"America/New_York", lugares:[
  {n:"Animal Hospital at Rice Hope", cat:"vet", lat:32.209601, lng:-81.200069, dir:"7512 Augusta Road", tel:"+1-912-965-0330", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "porterdale": {nombre:"Porterdale", centro:[33.575115, -83.893795], tz:"America/New_York", lugares:[
  {n:"Wellspring Animal Hospital", cat:"vet", lat:33.584707, lng:-83.911909, dir:"11340 Brown Bridge Road", tel:"+1-770-385-8181", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "portland-tennessee": {nombre:"Portland", centro:[36.581709, -86.516383], tz:"America/Chicago", lugares:[
  {n:"MeadowBark Park", cat:"parque", lat:36.568672, lng:-86.515059, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "portsmouth-virginia": {nombre:"Portsmouth", centro:[36.832008, -76.297699], tz:"America/New_York", lugares:[
  {n:"Midway Veterinary Hospital", cat:"vet", lat:36.823128, lng:-76.234057, dir:"3710 Indian River Road", tel:"+1-757-366-4050", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Emergency & Specialty of Tidewater", cat:"vet", lat:36.811613, lng:-76.205448, dir:"6095 Indian River Road", tel:"+1-757-841-8378", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.824693, lng:-76.419423, dir:"4300 Portsmouth Boulevard", tel:"+1 757-405-3143", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Care-A-Lot Pet Supply", cat:"tienda", lat:36.799663, lng:-76.180877, dir:"5457 Indian River Road", tel:"+1-757-395-4800", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:36.800157, lng:-76.17947, dir:"5394 Kempsriver Drive", tel:"+1-757-424-8448", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Park Avenue Pups", cat:"tienda", lat:36.8119, lng:-76.277676, dir:"1401 Bainbridge Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brentwood Veterinary Clinic", cat:"vet", lat:36.787186, lng:-76.333116, dir:"1236 George Washington Highway North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:36.81186, lng:-76.360635, dir:"2607 Airline Boulevard", tel:null, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog House Grooming Shop", cat:"peluqueria", lat:36.815894, lng:-76.362806, dir:"103 Mohawk Drive", tel:null, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Center", cat:"vet", lat:36.792237, lng:-76.240178, dir:"1813 Greenbrier Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Deep Creek Veterinary Hospital", cat:"vet", lat:36.763145, lng:-76.34506, dir:"618 Happy Acres Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Churchland Animal Clinic", cat:"vet", lat:36.861368, lng:-76.397589, dir:"6000 High Street West", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital at Chesapeake Square", cat:"vet", lat:36.825018, lng:-76.407802, dir:"4020 Portsmouth Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Western Branch Veterinary Hospital", cat:"vet", lat:36.84494, lng:-76.426671, dir:"3308 Taylor Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Outdoor Pet Recreation Area", cat:"parque", lat:36.803055, lng:-76.189376, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Western Branch Park - Dog Park", cat:"parque", lat:36.818874, lng:-76.424339, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "potomac-mills": {nombre:"Potomac Mills", centro:[38.639271, -77.294072], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.649234, lng:-77.293668, dir:"13337 Worth Avenue", tel:"+1 703-490-8676", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Eaze Inn", cat:"refugio", lat:38.649539, lng:-77.28893, dir:"13907 Telegraph Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dale City Animal Hospital", cat:"vet", lat:38.628142, lng:-77.302222, dir:"2980 Dale Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodbridge Animal Hospital", cat:"vet", lat:38.65747, lng:-77.296082, dir:"2703 Caton Hill Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Occoquan Animal Hospital", cat:"vet", lat:38.642587, lng:-77.266377, dir:"14234 Richmond Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dale City Animal Hospital", cat:"vet", lat:38.636304, lng:-77.294886, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "powder-springs": {nombre:"Powder Springs", centro:[33.859549, -84.683824], tz:"America/New_York", lugares:[
  {n:"Spa Wags", cat:"peluqueria", lat:33.858416, lng:-84.677414, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "powdersville": {nombre:"Powdersville", centro:[34.78978, -82.486981], tz:"America/New_York", lugares:[
  {n:"Powdersville Animal Hospital", cat:"vet", lat:34.783529, lng:-82.4843, dir:"10920 Anderson Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "powell": {nombre:"Powell", centro:[34.286482, -85.749411], tz:"America/Chicago", lugares:[
  {n:"Nelson Kennel Pet Boarding", cat:"refugio", lat:34.309627, lng:-85.801059, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "powell-tennessee": {nombre:"Powell", centro:[36.031747, -84.027968], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:36.045111, lng:-84.002362, dir:"250 East Emory Road", tel:"+1 865-947-7125", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"North Knox Veterinary Clinic", cat:"vet", lat:36.007936, lng:-83.965803, dir:"4700 Central Avenue Pike", tel:"+1-865-687-2515", horas:[7.5, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Scruffy City Animal Hospital", cat:"vet", lat:35.976976, lng:-84.009452, dir:"5401 Western Avenue", tel:"+1-865-584-4141", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Gone Rite, LLC", cat:"peluqueria", lat:35.957937, lng:-84.059872, dir:"2405 Bakertown Road", tel:"+1-865-539-0778", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Norwood Veterinary Hospital", cat:"vet", lat:35.990794, lng:-83.999143, dir:"2828 Merchant Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cumberland Springs Ranch", cat:"refugio", lat:35.984676, lng:-84.006403, dir:"4102 Sullivan Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Butler Animal Clinic", cat:"vet", lat:35.979765, lng:-84.099328, dir:"7545 Oak Ridge Hwy", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Karns Animal Clinic", cat:"vet", lat:35.980229, lng:-84.11265, dir:"7752 Oak Ridge Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Quarters", cat:"tienda", lat:35.978809, lng:-84.116006, dir:"7811 Oak Ridge Hwy", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Victor Ashe Dog Park", cat:"parque", lat:35.982632, lng:-83.992515, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "powhatan-virginia": {nombre:"Powhatan", centro:[37.542024, -77.919062], tz:"America/New_York", lugares:[
  {n:"Powhatan Animal Control", cat:"refugio", lat:37.539962, lng:-77.932881, dir:"4000 Old Plantation Road", tel:"+1-804-598-5672", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "prattville": {nombre:"Prattville", centro:[32.460014, -86.475317], tz:"America/Chicago", lugares:[
  {n:"Animal Medical Clinic of Prattville LLC", cat:"vet", lat:32.459576, lng:-86.464258, dir:"407 East Main Street", tel:"+1-334-365-7543", horas:[7.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Climic", cat:"vet", lat:32.460976, lng:-86.426506, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "prichard": {nombre:"Prichard", centro:[30.7388, -88.078889], tz:"America/Chicago", lugares:[
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.675301, lng:-88.13463, dir:"3691 Airport Boulevard", tel:"+1 251-343-1827", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.677152, lng:-88.151824, dir:"3980 Airport Boulevard", tel:"+1 251-343-2227", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Ark Animal Clinic", cat:"vet", lat:30.679764, lng:-88.129388, dir:"3625 Springhill Memorial Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rehm Animal Clinic", cat:"vet", lat:30.670424, lng:-88.190101, dir:"951 Hillcrest Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Prichard Animal Shelter", cat:"refugio", lat:30.746825, lng:-88.095861, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "prince-george": {nombre:"Prince George", centro:[37.220624, -77.287883], tz:"America/New_York", lugares:[
  {n:"Disputanta Animal Hospital", cat:"vet", lat:37.14198, lng:-77.254672, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "princeton-florida": {nombre:"Princeton", centro:[25.538499, -80.408997], tz:"America/New_York", lugares:[
  {n:"Zoological Wildlife Foundation", cat:"zoo", lat:25.614343, lng:-80.470734, dir:"16225 SW 172nd Ave", tel:"+1-305-969-3696", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "princeton-kentucky": {nombre:"Princeton", centro:[37.109216, -87.881959], tz:"America/Chicago", lugares:[
  {n:"Waggy Tails Pet Salon", cat:"peluqueria", lat:37.10936, lng:-87.882388, dir:"111 West Court Square", tel:"+1-270-963-5590", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Grooming & Boarding by David Rogers", cat:"peluqueria", lat:37.107503, lng:-87.88261, dir:"205 South Jefferson Street", tel:"+1 270-619-0899", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Luna Veterinary Services", cat:"vet", lat:37.115802, lng:-87.900385, dir:"51 Old Fredonia Road", tel:"+1-270-365-9822", horas:[7.5, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Caldwell County KY Animal Shelter", cat:"refugio", lat:37.123916, lng:-87.862334, dir:"489 Baker Hill Road", tel:"+1-270-365-1000", horas:[10.0, 14.0], nota:"Dato de OpenStreetMap"},
  {n:"Grooming Excellence", cat:"peluqueria", lat:37.116936, lng:-87.898678, dir:null, tel:"+1-270-601-0792", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "progress-village": {nombre:"Progress Village", centro:[27.899185, -82.364725], tz:"America/New_York", lugares:[
  {n:"Palms at Magnolia Park Dog Park", cat:"parque", lat:27.895828, lng:-82.353737, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "prosperity": {nombre:"Prosperity", centro:[34.209867, -81.533858], tz:"America/New_York", lugares:[
  {n:"Mid-Carolina Animal Hospital", cat:"vet", lat:34.225218, lng:-81.544495, dir:"11635 C R Koon Highway", tel:"+1-803-364-3550", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "prosperity-west-virginia": {nombre:"Prosperity", centro:[37.836502, -81.201768], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:37.846605, lng:-81.197434, dir:"115 Crossroads Mall", tel:"+1 304-253-2475", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "providence-forge": {nombre:"Providence Forge", centro:[37.442426, -77.043958], tz:"America/New_York", lugares:[
  {n:"New Kent County Animal Control", cat:"refugio", lat:37.490935, lng:-77.06009, dir:"6301 Olivet Church Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chickahominy Animal Hospital", cat:"vet", lat:37.44643, lng:-77.05931, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pulaski-virginia": {nombre:"Pulaski", centro:[37.047898, -80.779793], tz:"America/New_York", lugares:[
  {n:"Tipton Ridge Veterinary Center", cat:"vet", lat:37.058517, lng:-80.744131, dir:"1858 Bob White Boulevard", tel:"+1-540-980-0186", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "pumpkin-center": {nombre:"Pumpkin Center", centro:[34.791551, -77.372461], tz:"America/New_York", lugares:[
  {n:"Animal Hospital", cat:"vet", lat:34.762107, lng:-77.378456, dir:"296 Doctors Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Coastal Veterinary Emergency", cat:"vet", lat:34.76393, lng:-77.375658, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "punta-gorda": {nombre:"Punta Gorda", centro:[26.935153, -82.051206], tz:"America/New_York", lugares:[
  {n:"Hounds on Henry", cat:"parque", lat:26.924896, lng:-82.057827, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "purcellville": {nombre:"Purcellville", centro:[39.136704, -77.714845], tz:"America/New_York", lugares:[
  {n:"Blue Ridge Pet Resort", cat:"refugio", lat:39.147492, lng:-77.720104, dir:"260 Shephardstown Court", tel:"+1 540-370-9966", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hoof & Paw Veterinary Services", cat:"vet", lat:39.134944, lng:-77.714221, dir:"211 South 20th Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blue Ridge Veterinary Associates", cat:"vet", lat:39.140941, lng:-77.715199, dir:"120 East Cornwell Lane", tel:null, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Pet Valu", cat:"tienda", lat:39.13607, lng:-77.693141, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "putney": {nombre:"Putney", centro:[31.469791, -84.117271], tz:"America/New_York", lugares:[
  {n:"The Bark Park", cat:"parque", lat:31.546985, lng:-84.021914, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "quinby": {nombre:"Quinby", centro:[34.236543, -79.734505], tz:"America/New_York", lugares:[
  {n:"Animal Emergency Hospital of the Pee Dee", cat:"vet", lat:34.230909, lng:-79.753443, dir:"1926 North Irby Street", tel:"+1-843-713-1926", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "quinton-virginia": {nombre:"Quinton", centro:[37.532789, -77.115445], tz:"America/New_York", lugares:[
  {n:"Sarah's Canine Cuttery", cat:"peluqueria", lat:37.526981, lng:-77.167662, dir:"3000 New Kent Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:37.499206, lng:-77.175219, dir:"2955 Pocahontas Trail", tel:null, horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "quitman-georgia": {nombre:"Quitman", centro:[30.785271, -83.559691], tz:"America/New_York", lugares:[
  {n:"Quitman Animal Shelter", cat:"refugio", lat:30.792788, lng:-83.545678, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bassham Veterinary Hospital", cat:"vet", lat:30.796439, lng:-83.573745, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "radcliff": {nombre:"Radcliff", centro:[37.840346, -85.94913], tz:"America/Chicago", lugares:[
  {n:"Blessed Little Grooming Company", cat:"peluqueria", lat:37.848242, lng:-85.946708, dir:"837 North Dixie Boulevard", tel:"+1-270-670-2367", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:37.841205, lng:-85.936647, dir:"129 East Lincoln Trail Boulevard", tel:"+1-270-390-6021", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Clippity Doo Dog Grooming Salon", cat:"peluqueria", lat:37.836189, lng:-85.936535, dir:"105 Lott Way", tel:"+1-270-272-3059", horas:[8.0, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Bluegrass Animal Care Center – Radcliff", cat:"vet", lat:37.830828, lng:-85.930904, dir:"849 South Dixie Boulevard", tel:"+1-270-351-1121", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Best Furiends Pet Resort", cat:"refugio", lat:37.813888, lng:-85.920181, dir:"129 Shelby Avenue", tel:"+1-270-801-5224", horas:[6.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pawsitively Stylin", cat:"peluqueria", lat:37.851886, lng:-85.944032, dir:null, tel:"+1-270-351-9297", horas:[7.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Playful Paws", cat:"refugio", lat:37.852139, lng:-85.944073, dir:null, tel:"+1-270-351-9290", horas:[6.5, 9.0], nota:"Dato de OpenStreetMap"},
  {n:"North Hardin Veterinary Clinic", cat:"vet", lat:37.831624, lng:-85.930039, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "radford": {nombre:"Radford", centro:[37.134315, -80.574917], tz:"America/New_York", lugares:[
  {n:"Radford Police-Animal Shelter", cat:"refugio", lat:37.141449, lng:-80.544229, dir:"110 Pulaski Street", tel:"+1-540-731-3688", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kibbles on Main", cat:"tienda", lat:37.133747, lng:-80.57625, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sparky's Run Dog Park", cat:"parque", lat:37.141039, lng:-80.542429, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "raleigh-north-carolina": {nombre:"Raleigh", centro:[35.780398, -78.639099], tz:"America/New_York", lugares:[
  {n:"Unleashed, the Dog & Cat Store", cat:"tienda", lat:35.775982, lng:-78.635708, dir:"329 Blake Street", tel:"+1-919-977-6529", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Oak Heart Veterinary Hospital", cat:"vet", lat:35.788728, lng:-78.634705, dir:"916 North Person Street", tel:"+1-919-307-8843", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Oak Heart Veterinary Hospital", cat:"vet", lat:35.75958, lng:-78.649603, dir:"1600 South Saunders Street", tel:"+19842220039", horas:[7.5, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Care First Animal Hospital at Oberlin", cat:"vet", lat:35.800113, lng:-78.659689, dir:"1216 Oberlin Road", tel:"+19198323107", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetPeople", cat:"tienda", lat:35.821763, lng:-78.621315, dir:"2920 Sherman Oak Place", tel:"+19198036157", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Unleashed, the Dog & Cat Store", cat:"tienda", lat:35.817426, lng:-78.692522, dir:"2460 Wycliff Road", tel:"+1-919-858-6460", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Unleashed, the Dog & Cat Store", cat:"tienda", lat:35.840716, lng:-78.679862, dir:"4325 Glenwood Avenue", tel:"+1 984-222-0042", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Magnolia Animal Hospital", cat:"vet", lat:35.837365, lng:-78.57987, dir:"4200 Capital Boulevard", tel:"+1-919-873-9190", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.848861, lng:-78.585498, dir:"2800 Millbrook Road", tel:"+1 919-873-0544", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Care First Animal Hospital", cat:"vet", lat:35.851588, lng:-78.697377, dir:"5725 Glenwood Avenue", tel:"+1-919-783-7387", horas:[7.5, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.871205, lng:-78.679319, dir:"6300 Creedmoor Road", tel:"+1 919 847 3548", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Capital Blvd Animal Hospital & Pet Inn", cat:"vet", lat:35.873141, lng:-78.57998, dir:"6471 Triangle Plantation Drive", tel:"+1-919-948-6666", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Unleashed, the Dog & Cat Store", cat:"tienda", lat:35.887881, lng:-78.677851, dir:"7408 Creedmoor Road", tel:"+1-919-521-4963", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.89979, lng:-78.653375, dir:"8825 Six Forks Road", tel:"+1 919-326-7979", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Park at Dix Park", cat:"parque", lat:35.770844, lng:-78.662486, dir:"1800 Umstead Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carolina Pines Dog Park", cat:"parque", lat:35.74891, lng:-78.664153, dir:"1700 Sierra Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Phydeaux", cat:"tienda", lat:35.816873, lng:-78.617193, dir:"2535 Atlantic Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Boulevard Animal Hospital", cat:"vet", lat:35.784969, lng:-78.689823, dir:"3900 Western Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oak Heart Veterinary Hospital", cat:"vet", lat:35.809956, lng:-78.676502, dir:"3044 Medlin Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:35.823846, lng:-78.620775, dir:"3074 Wake Forest Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Hills Animal Hospital & Resort", cat:"vet", lat:35.851683, lng:-78.643572, dir:"5121 Six Forks Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Quail Corners Animal Hospital", cat:"vet", lat:35.850562, lng:-78.608103, dir:"1613 East Millbrook Road", tel:null, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:35.849963, lng:-78.590229, dir:"4708 Hargrove Rd", tel:null, horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Waggles", cat:"tienda", lat:35.871217, lng:-78.678376, dir:"6300 Creedmoor Road", tel:null, horas:[11.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Six Forks Animal Hospital", cat:"vet", lat:35.877614, lng:-78.645063, dir:"7130 Six Forks Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hidden Valley Animal Hospital & Boarding", cat:"vet", lat:35.872713, lng:-78.680999, dir:"2315 Lynn Road", tel:null, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Planet Poochie", cat:"peluqueria", lat:35.87983, lng:-78.646932, dir:"7311 Six Forks Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bowman Animal Hospital", cat:"vet", lat:35.900662, lng:-78.680125, dir:"8308 Creedmoor Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pop-Pup Dog Park", cat:"parque", lat:35.779318, lng:-78.643081, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oakwood Dog Park", cat:"parque", lat:35.790289, lng:-78.623593, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oak Heart Veterinary Hospital", cat:"vet", lat:35.778669, lng:-78.604354, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Raleigh Grooming", cat:"peluqueria", lat:35.842086, lng:-78.577846, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Bend Dog Park", cat:"parque", lat:35.860166, lng:-78.624188, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tribute Resident Dog Park", cat:"parque", lat:35.850543, lng:-78.69067, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.865319, lng:-78.618757, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:35.8698, lng:-78.622897, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.860453, lng:-78.582675, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Fish Room", cat:"tienda", lat:35.869553, lng:-78.582741, dir:null, tel:null, horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Greystone Animal Hospital", cat:"vet", lat:35.885519, lng:-78.660725, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ranlo": {nombre:"Ranlo", centro:[35.286249, -81.130355], tz:"America/New_York", lugares:[
  {n:"George Poston Dog Park", cat:"parque", lat:35.285064, lng:-81.111685, dir:"1101 Lowell Spencer Mountain Rd", tel:null, horas:[7.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.262649, lng:-81.138703, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ravensworth": {nombre:"Ravensworth", centro:[38.804258, -77.220465], tz:"America/New_York", lugares:[
  {n:"A Dog's Day Out", cat:"refugio", lat:38.803403, lng:-77.213696, dir:"5425 Port Royal Road", tel:"+1-703-321-3647", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "red-bank-south-carolina": {nombre:"Red Bank", centro:[33.934459, -81.237783], tz:"America/New_York", lugares:[
  {n:"Pet Space", cat:"vet", lat:33.922477, lng:-81.290248, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "red-bank-tennessee": {nombre:"Red Bank", centro:[35.119713, -85.289486], tz:"America/New_York", lugares:[
  {n:"Red Bank Animal Hospital", cat:"vet", lat:35.128056, lng:-85.283351, dir:"4416 Dayton Boulevard", tel:"+1-423-877-8174", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:35.113989, lng:-85.263212, dir:"3901 Hixson Pike", tel:"+1-423-226-1016", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Sudsy Mutts", cat:"peluqueria", lat:35.140549, lng:-85.245272, dir:"5450 TN 153", tel:"+1 423 654 8400", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.147922, lng:-85.251443, dir:"5591 TN 153", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wags to Riches Grooming", cat:"peluqueria", lat:35.097263, lng:-85.305002, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital", cat:"vet", lat:35.118068, lng:-85.248558, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Area", cat:"parque", lat:35.08628, lng:-85.304063, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"White Oak Dog Park", cat:"parque", lat:35.08621, lng:-85.304286, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large dog area", cat:"parque", lat:35.085965, lng:-85.304292, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greenway Farms Dog Park", cat:"parque", lat:35.126289, lng:-85.215246, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "reedsville-west-virginia": {nombre:"Reedsville", centro:[39.510641, -79.798392], tz:"America/New_York", lugares:[
  {n:"Animal Friends of North Central West Virginia", cat:"refugio", lat:39.491179, lng:-79.910382, dir:"252 Brewer Road", tel:"+1-304-290-4738", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "reidsville-north-carolina": {nombre:"Reidsville", centro:[36.354859, -79.664475], tz:"America/New_York", lugares:[
  {n:"Reidsville Veterinary Hospital, Inc.", cat:"vet", lat:36.322625, lng:-79.637457, dir:"3202 Barnes Street", tel:"+13363493194", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Raynay Alpaca Farm", cat:"zoo", lat:36.362766, lng:-79.503121, dir:"1897 Ashland Road", tel:"+13369393645", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "reidville": {nombre:"Reidville", centro:[34.862899, -82.114275], tz:"America/New_York", lugares:[
  {n:"Tyger Run Dog Park", cat:"parque", lat:34.874426, lng:-82.102855, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollycrest Bed & Biscuit", cat:"refugio", lat:34.871457, lng:-82.191333, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "remerton": {nombre:"Remerton", centro:[30.844131, -83.310409], tz:"America/New_York", lugares:[
  {n:"Bark of the Town", cat:"peluqueria", lat:30.845058, lng:-83.310123, dir:"1821 Plum Street", tel:"+1-229-230-3851", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Grooming Shop", cat:"peluqueria", lat:30.871916, lng:-83.282126, dir:"408 Northside Drive", tel:"+1-229-245-8001", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Exotic Fish", cat:"tienda", lat:30.871935, lng:-83.282069, dir:"408 Northside Drive", tel:"+1-229-244-5910", horas:[10.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"McKinney's Pet Lovers Food & Supply Company", cat:"tienda", lat:30.877013, lng:-83.290277, dir:"3141 North Ashley Street", tel:"+1-229-247-8414", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Lowndes County", cat:"refugio", lat:30.841881, lng:-83.307515, dir:"1740 West Gordon Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.842842, lng:-83.319517, dir:"1700 Norman Drive", tel:null, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Park", cat:"parque", lat:30.874779, lng:-83.288791, dir:"100 Garden Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Baytree Animal Hospital", cat:"vet", lat:30.846563, lng:-83.325372, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Playcare", cat:"parque", lat:30.846402, lng:-83.325469, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw Park", cat:"parque", lat:30.816957, lng:-83.321048, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Valdosta Animal Hospital Surgery Center", cat:"vet", lat:30.869467, lng:-83.291196, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Valdosta Animal Hospital", cat:"vet", lat:30.869018, lng:-83.288644, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northside Animal Hospital & Urgent Care", cat:"vet", lat:30.879728, lng:-83.299611, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southern Hound Club", cat:"refugio", lat:30.853344, lng:-83.358165, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "resaca": {nombre:"Resaca", centro:[34.580363, -84.943276], tz:"America/New_York", lugares:[
  {n:"Kennels in the Country", cat:"refugio", lat:34.592498, lng:-85.026082, dir:"2992 Resaca Lafayette Road Northwest", tel:"+1-706-602-1050", horas:[7.0, 10.0], nota:"Dato de OpenStreetMap"}
 ]},
 "reston": {nombre:"Reston", centro:[38.958751, -77.358596], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.963899, lng:-77.355583, dir:"11860 Spectrum Center", tel:"+1 703-796-0656", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Weber's Pet Supermarket", cat:"tienda", lat:38.936857, lng:-77.363162, dir:"2280 Hunters Woods Plaza", tel:"+1 703-476-3536", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Canis Major Dog Park", cat:"parque", lat:38.948402, lng:-77.362622, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "richland-mississippi": {nombre:"Richland", centro:[32.239037, -90.158421], tz:"America/Chicago", lugares:[
  {n:"Mississippi Spay and Neuter", cat:"vet", lat:32.233575, lng:-90.163483, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Fix Clinic", cat:"vet", lat:32.233548, lng:-90.163629, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "richlawn": {nombre:"Richlawn", centro:[38.254793, -85.639406], tz:"America/Chicago", lugares:[
  {n:"Poe's Pet Depot", cat:"tienda", lat:38.259604, lng:-85.637224, dir:"291 North Hubbards Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "richmond-hill": {nombre:"Richmond Hill", centro:[31.938238, -81.303551], tz:"America/New_York", lugares:[
  {n:"Toni's Grooming Station", cat:"peluqueria", lat:31.933185, lng:-81.325548, dir:"3754 US Highway 17", tel:"+1-912-756-5989", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "richmond-kentucky": {nombre:"Richmond", centro:[37.747857, -84.294654], tz:"America/New_York", lugares:[
  {n:"Hoof n Paw Pet Supplies", cat:"tienda", lat:37.733702, lng:-84.280485, dir:"841 Eastern Bypass", tel:"+1-859-353-5655", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:37.739798, lng:-84.327295, dir:"2175 Lantern Ridge Drive", tel:"+1 859-623-3124", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"All Creatures Small Animal Hospital", cat:"vet", lat:37.735843, lng:-84.315232, dir:"352 Eastern Bypass", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"W & W Veterinary Services, PLLC", cat:"vet", lat:37.738631, lng:-84.20316, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "richmond-virginia": {nombre:"Richmond", centro:[37.538509, -77.43428], tz:"America/New_York", lugares:[
  {n:"Fan Veterinary Clinic", cat:"vet", lat:37.555833, lng:-77.470908, dir:"307 North Robinson Street", tel:"+1 804-358-3779", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"C.C. Pet Spa", cat:"peluqueria", lat:37.567405, lng:-77.400559, dir:"3071 Mechanicsville Turnpike", tel:"+1-804-644-8000", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"The Barking Lot", cat:"tienda", lat:37.561064, lng:-77.475667, dir:"606 North Belmont Avenue", tel:"+1 804-358-4038", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Krazy", cat:"tienda", lat:37.55454, lng:-77.484204, dir:"3310 West Cary Street", tel:"+1 804-447-4391", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Virginia Veterinary Centers", cat:"vet", lat:37.554579, lng:-77.484326, dir:"3312 West Cary Street", tel:"+1 804-353-9000", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Prevent a Litter Veterinary Hospital", cat:"vet", lat:37.554617, lng:-77.485351, dir:"3421 West Cary Street", tel:"+1 804-359-6369", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Broad Street Veterinary Hospital", cat:"vet", lat:37.567702, lng:-77.476291, dir:"3320 West Broad Street", tel:"+1 804-353-4491", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogma Grooming & Pet Needs", cat:"tienda", lat:37.555079, lng:-77.486986, dir:"3501 West Cary Street", tel:"+1-804-358-9267", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:37.556971, lng:-77.486205, dir:"10 North Nansemond Street", tel:"+1-804-342-7405", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Urgent Vet", cat:"vet", lat:37.556678, lng:-77.487297, dir:"3531 Ellwood Avenue", tel:"+1 804-362-0202", horas:[15.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"Helping Hands Veterinary", cat:"vet", lat:37.566522, lng:-77.457959, dir:null, tel:"+1 804-355-3500", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Susan M. Markle Veterinary Hospital at Richmond SPCA", cat:"vet", lat:37.566521, lng:-77.459239, dir:null, tel:"+1-804-521-1330", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Cary Street Veterinary Hospital", cat:"vet", lat:37.554355, lng:-77.483089, dir:null, tel:"+1 804-355-9144", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Scott's Addition Animal Hospital", cat:"vet", lat:37.565599, lng:-77.474681, dir:null, tel:"+1 804-551-0519", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Church Hill Dog Park", cat:"parque", lat:37.523881, lng:-77.410386, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Richmond SPCA", cat:"refugio", lat:37.566502, lng:-77.46019, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Maymont Farm", cat:"zoo", lat:37.537572, lng:-77.480028, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barker Field", cat:"parque", lat:37.539108, lng:-77.482066, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Phideaux Field", cat:"parque", lat:37.519899, lng:-77.481147, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ridge-manor": {nombre:"Ridge Manor", centro:[28.507497, -82.170363], tz:"America/New_York", lugares:[
  {n:"River Ridge Animal Clinic", cat:"vet", lat:28.521705, lng:-82.22848, dir:"31174 Cortez Blvd", tel:"+1-352-631-5252", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "ridgeland": {nombre:"Ridgeland", centro:[32.428476, -90.132309], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:32.425242, lng:-90.147055, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ridgeside": {nombre:"Ridgeside", centro:[35.032574, -85.252456], tz:"America/New_York", lugares:[
  {n:"Animal Emergency & Specialty Center of Chattanooga", cat:"vet", lat:35.033824, lng:-85.181203, dir:"6393 Lee Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Boarding Daycare", cat:"tienda", lat:35.031413, lng:-85.185232, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "riner": {nombre:"Riner", centro:[37.066518, -80.440607], tz:"America/New_York", lugares:[
  {n:"Village Dog Days", cat:"peluqueria", lat:37.06596, lng:-80.440923, dir:"4010 Riner Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rineyville": {nombre:"Rineyville", centro:[37.751036, -85.973018], tz:"America/Chicago", lugares:[
  {n:"Shaggy Dog Pet Grooming", cat:"peluqueria", lat:37.786001, lng:-85.91039, dir:"7024 North Dixie Highway", tel:"+1-270-763-6830", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawsh Pet Salon & Spa", cat:"peluqueria", lat:37.750899, lng:-85.895679, dir:"4511 North Dixie Highway", tel:"+1-270-737-2974", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"}
 ]},
 "ringgold": {nombre:"Ringgold", centro:[34.91591, -85.109117], tz:"America/New_York", lugares:[
  {n:"Ringgold Animal Hospital", cat:"vet", lat:34.918741, lng:-85.122004, dir:"6999 Nashville Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K9 Tub Time", cat:"tienda", lat:34.916498, lng:-85.110839, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Catoosa Animal Hospital", cat:"vet", lat:34.926273, lng:-85.173351, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Old Mill Pet Inn", cat:"vet", lat:34.926582, lng:-85.173752, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rio-virginia": {nombre:"Rio", centro:[38.081423, -78.473635], tz:"America/New_York", lugares:[
  {n:"Wild Birds Unlimited", cat:"tienda", lat:38.078319, lng:-78.477831, dir:"1510 Seminole Trail", tel:"+1-434-973-5850", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dogg House", cat:"peluqueria", lat:38.078767, lng:-78.478152, dir:"2101 Berkmar Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greenbrier Emergency Animal Hospital", cat:"vet", lat:38.071985, lng:-78.485718, dir:"370 Greenbrier Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Virginia Veterinary Specialists", cat:"vet", lat:38.071944, lng:-78.485623, dir:"370 Greenbrier Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:38.07076, lng:-78.484625, dir:"1240 Seminole Trail", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Autumn Trails Veterinary Center", cat:"vet", lat:38.065631, lng:-78.496354, dir:"2407 Hydraulic Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:38.090859, lng:-78.469448, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dabney Dog Park", cat:"parque", lat:38.073134, lng:-78.455667, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "river-bend": {nombre:"River Bend", centro:[35.069048, -77.146896], tz:"America/New_York", lugares:[
  {n:"Animal Care Center Veterinary Hospital", cat:"vet", lat:35.093467, lng:-77.130569, dir:"4385 US Hwy 17 South", tel:"+12526365040", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "river-park": {nombre:"River Park", centro:[27.31421, -80.347273], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:27.313759, lng:-80.406015, dir:"1753 Northwest Saint Lucie West Boulevard", tel:"+1 772-873-2575", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "riverview-florida": {nombre:"Riverview", centro:[27.871197, -82.326988], tz:"America/New_York", lugares:[
  {n:"Boyette Animal Hospital", cat:"vet", lat:27.856015, lng:-82.321081, dir:"10931 Boyette Road", tel:"+1-813-671-3400", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Boyette Animal Hospital Well Pet Center", cat:"vet", lat:27.855891, lng:-82.321905, dir:"Boyette Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "riverview-south-carolina": {nombre:"Riverview", centro:[35.007754, -80.98063], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.977926, lng:-80.982532, dir:"1110 Hospitality Drive", tel:"+1 803-817-6610", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Healthy Pets Spay, Neuter, and Wellness Clinic", cat:"vet", lat:34.969108, lng:-80.986124, dir:"858 Riverview Road", tel:"+1-803-327-7387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lesslie Animal Hospital", cat:"vet", lat:34.966857, lng:-80.984825, dir:"770 Riverview Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "roan-mountain": {nombre:"Roan Mountain", centro:[36.19623, -82.0704], tz:"America/New_York", lugares:[
  {n:"Roan Mountain Animal Hospital", cat:"vet", lat:36.191763, lng:-82.048878, dir:"8651 US 19E", tel:"+1-423-772-4124", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "roanoke-rapids": {nombre:"Roanoke Rapids", centro:[36.455802, -77.657351], tz:"America/New_York", lugares:[
  {n:"Ronoake Animal Hospital", cat:"vet", lat:36.440132, lng:-77.648666, dir:"824 Julian R Allsbrook Highway", tel:"+12525353117", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Petsense by Tractor Supply", cat:"tienda", lat:36.434369, lng:-77.641466, dir:"1251 Julian R Allsbrook Highway", tel:"+12525413000", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "roanoke-virginia": {nombre:"Roanoke", centro:[37.270973, -79.941431], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:37.300784, lng:-79.958, dir:"4749 Valley View Boulevard Northwest", tel:"+1 540-362-2994", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Angels of Assisi", cat:"vet", lat:37.271448, lng:-79.949464, dir:"415 Campbell Avenue Southwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggie Stylez Grooming Salon", cat:"peluqueria", lat:37.226543, lng:-79.930758, dir:"3758 Garden City Boulevard Southeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mill Mountain Zoo", cat:"zoo", lat:37.247432, lng:-79.936789, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:37.300898, lng:-79.957882, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rock-hill-south-carolina": {nombre:"Rock Hill", centro:[34.924867, -81.025078], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:34.943571, lng:-81.029069, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rockfish": {nombre:"Rockfish", centro:[34.992664, -79.066142], tz:"America/New_York", lugares:[
  {n:"Bark Avenue", cat:"peluqueria", lat:35.029497, lng:-79.061793, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rockmart": {nombre:"Rockmart", centro:[34.0026, -85.041613], tz:"America/New_York", lugares:[
  {n:"Rockmart Animal Hospital", cat:"vet", lat:33.98178, lng:-85.037715, dir:"748 Atlanta Highway", tel:"+1-770-684-7162", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "rockville-south-carolina": {nombre:"Rockville", centro:[32.600738, -80.194819], tz:"America/New_York", lugares:[
  {n:"Edisto Island Serpentarium", cat:"zoo", lat:32.557517, lng:-80.279256, dir:"1374 Highway 174", tel:"+1-843-869-1171", horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "rockville-virginia": {nombre:"Rockville", centro:[37.725978, -77.678324], tz:"America/New_York", lugares:[
  {n:"Furr Kingdom", cat:"refugio", lat:37.671892, lng:-77.680426, dir:"32 Briggs Drive", tel:"+1-804-708-0443", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Manakin-Sabot Veterinary Clinic", cat:"vet", lat:37.671466, lng:-77.679541, dir:"29 Briggs Drive", tel:"+1-804-784-0040", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "rockwood-tennessee": {nombre:"Rockwood", centro:[35.865628, -84.68494], tz:"America/New_York", lugares:[
  {n:"Roane County Animal Shelter", cat:"refugio", lat:35.892283, lng:-84.63167, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rockwood-virginia": {nombre:"Rockwood", centro:[37.473575, -77.563688], tz:"America/New_York", lugares:[
  {n:"Lucks Lane Vet", cat:"vet", lat:37.473591, lng:-77.598928, dir:"1108 Courthouse Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ruff House Dog Park", cat:"parque", lat:37.447844, lng:-77.580377, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Frazzles to Dazzles", cat:"peluqueria", lat:37.440167, lng:-77.590561, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rocky-mount": {nombre:"Rocky Mount", centro:[35.942383, -77.795695], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.974764, lng:-77.812412, dir:"1462 Jeffreys Road", tel:"+1 252-451-5200", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "rocky-mount-virginia": {nombre:"Rocky Mount", centro:[36.996201, -79.890947], tz:"America/New_York", lugares:[
  {n:"Barkley's Pet Market", cat:"tienda", lat:37.012212, lng:-79.86512, dir:"400 Old Franklin Turnpike", tel:"+1-540-346-2277", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "roebuck": {nombre:"Roebuck", centro:[34.879568, -81.966214], tz:"America/New_York", lugares:[
  {n:"Addison dog park", cat:"parque", lat:34.911788, lng:-82.003957, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rogersville-tennessee": {nombre:"Rogersville", centro:[36.407317, -83.005442], tz:"America/New_York", lugares:[
  {n:"Dog and Cat Depot", cat:"vet", lat:36.394083, lng:-83.036779, dir:"318 Farside Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rolesville": {nombre:"Rolesville", centro:[35.923286, -78.457391], tz:"America/New_York", lugares:[
  {n:"Rolesville Veterinary Hospital", cat:"vet", lat:35.915113, lng:-78.472521, dir:"300 Batten Road", tel:"+19195620100", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Finally Farm", cat:"refugio", lat:35.907457, lng:-78.393774, dir:"8140 Mitchell Mill Road", tel:"+19192808087", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mitchell Mill Animal Hospital", cat:"vet", lat:35.88211, lng:-78.508219, dir:"4010 Mitchell Mill Road", tel:"+1-919-266-8177", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Specialty Hospital of the Carolinas", cat:"vet", lat:35.888294, lng:-78.560924, dir:"4640 Paragon Park Road", tel:"+1-919-861-0109", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "rome": {nombre:"Rome", centro:[34.257038, -85.164673], tz:"America/New_York", lugares:[
  {n:"Petland", cat:"tienda", lat:34.245467, lng:-85.161607, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "romney": {nombre:"Romney", centro:[39.34197, -78.756452], tz:"America/New_York", lugares:[
  {n:"Augusta Animal Hospital", cat:"vet", lat:39.341452, lng:-78.757351, dir:"51 West Gravel Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rose-hill-virginia-2": {nombre:"Rose Hill", centro:[38.786185, -77.121254], tz:"America/New_York", lugares:[
  {n:"A Dog's Day Out", cat:"peluqueria", lat:38.804083, lng:-77.111199, dir:"4536 Eisenhower Avenue", tel:"+1-571-312-7723", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Poochie Playhouse", cat:"tienda", lat:38.784784, lng:-77.122327, dir:"6118 Rose Hill Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Value", cat:"tienda", lat:38.784733, lng:-77.122317, dir:"6120 Rose Hill Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vola Lawson Animal Shelter", cat:"refugio", lat:38.805248, lng:-77.105042, dir:"4101 Eisenhower Avenue", tel:null, horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Ben Brenman Dog Park", cat:"parque", lat:38.806877, lng:-77.113214, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tarleton Dog Park", cat:"parque", lat:38.808564, lng:-77.109416, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rosedale-mississippi": {nombre:"Rosedale", centro:[33.8551, -91.026611], tz:"America/Chicago", lugares:[
  {n:"Charlie Capps WMA", cat:"zoo", lat:33.864275, lng:-90.957958, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "roseland": {nombre:"Roseland", centro:[27.835859, -80.493108], tz:"America/New_York", lugares:[
  {n:"Roseland Animal Hospital", cat:"vet", lat:27.839477, lng:-80.487878, dir:"13539 US Highway 1", tel:"+1-772-571-5021", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "rosemary-beach": {nombre:"Rosemary Beach", centro:[30.280292, -86.015565], tz:"America/Chicago", lugares:[
  {n:"Kindness Pet Hospital (East)", cat:"vet", lat:30.281102, lng:-86.018224, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dr. Norm's Vet Hospital", cat:"vet", lat:30.263381, lng:-85.964658, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rosman": {nombre:"Rosman", centro:[35.14369, -82.822019], tz:"America/New_York", lugares:[
  {n:"Animals Of Eden Veterinary Hospital PLLC", cat:"vet", lat:35.164691, lng:-82.812487, dir:"68 Cassell Road", tel:"+18288843647", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "roswell": {nombre:"Roswell", centro:[34.02332, -84.360022], tz:"America/New_York", lugares:[
  {n:"VCA Roswell Animal Hospital", cat:"vet", lat:34.028806, lng:-84.35741, dir:"1112 Alpharetta Street", tel:"+1 770 993 9031", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Rose Animal Hospital", cat:"vet", lat:34.008476, lng:-84.360564, dir:"362 South Atlanta Street", tel:"+1-770-594-9731", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Atlanta Humane Society - Mansell Campus", cat:"refugio", lat:34.038261, lng:-84.321219, dir:"1565 Mansell Road", tel:"+1-404-875-5331", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tsuru Pet Spa", cat:"peluqueria", lat:34.021223, lng:-84.315607, dir:"1575 Old Alabama Road", tel:"+1-770-880-0008", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:34.028475, lng:-84.42207, dir:"4401 Shallowford Road Northeast", tel:"+1 770-642-2084", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Scenthound Routine Care & Grooming", cat:"peluqueria", lat:34.025321, lng:-84.422389, dir:"3162 Johnson Ferry Road", tel:"+1 470-250-1316", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Kent Veterinary Clinic", cat:"vet", lat:34.024544, lng:-84.424364, dir:"3140 Johnson Ferry Road Northeast", tel:"+1 770-576-1775", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Tritt Animal Hospital", cat:"vet", lat:34.027776, lng:-84.424438, dir:"4349 Shallowford Road Northeast", tel:"+1 770-992-8787", horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Lassiter Animal Hospital", cat:"vet", lat:34.02212, lng:-84.425917, dir:"2960 Johnson Ferry Road Northeast", tel:"+1 770-998-5100", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Boutique Grooming", cat:"peluqueria", lat:34.022016, lng:-84.427977, dir:"2995 Johnson Ferry Road", tel:"+1 770-998-5525", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:34.005156, lng:-84.293174, dir:"2340 Holcomb Bridge Road", tel:"+1 770-649-6360", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petfolk Veterinary Clinic", cat:"vet", lat:33.988252, lng:-84.420405, dir:"4475 Roswell Road", tel:"+1 678-539-8841", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet", cat:"vet", lat:33.986485, lng:-84.423929, dir:"4363 Roswell Road", tel:"+1 770-790-1700", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog City Bakery", cat:"tienda", lat:33.986364, lng:-84.423867, dir:"4369 Roswell Road", tel:"+1-770-971-5200", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"East Cobb Stables", cat:"refugio", lat:33.989765, lng:-84.428712, dir:"1649 Johnson Ferry Road Northeast", tel:"+1-678-560-9154", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Emergency Group", cat:"vet", lat:33.980997, lng:-84.424499, dir:"1290 Johnson Ferry Road Northeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cage Free Doggy Boarding, Roswell Atlanta", cat:"refugio", lat:34.034208, lng:-84.349559, dir:null, tel:null, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Holcomb Bridge Animal Hospital", cat:"vet", lat:34.019237, lng:-84.316027, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Roswell Dog Park", cat:"parque", lat:34.001135, lng:-84.295895, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "round-hill": {nombre:"Round Hill", centro:[39.132723, -77.768627], tz:"America/New_York", lugares:[
  {n:"Olivia's Dog Care", cat:"refugio", lat:39.062126, lng:-77.781404, dir:"20075 Woodtrail Road", tel:"+1-540-905-9316", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"House Paws Animal Hospital", cat:"vet", lat:39.133034, lng:-77.767919, dir:"6 East Loudoun Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "roxboro": {nombre:"Roxboro", centro:[36.393752, -78.982788], tz:"America/New_York", lugares:[
  {n:"Person County Animal Services", cat:"refugio", lat:36.422555, lng:-79.001851, dir:"2103 Club Lake Road", tel:"+1-336-597-1741", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Roxboro Animal Hospital", cat:"vet", lat:36.353195, lng:-78.993004, dir:"585 Patterson Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "royal-pines": {nombre:"Royal Pines", centro:[35.474711, -82.516341], tz:"America/New_York", lugares:[
  {n:"WNC Veterinary Hospital", cat:"vet", lat:35.483745, lng:-82.523521, dir:"2 Pond Street", tel:"+1 828 684 3531", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.449058, lng:-82.533194, dir:"3 McKenna Road", tel:"+1 828-681-5343", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "rural-hall": {nombre:"Rural Hall", centro:[36.240416, -80.293384], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:36.190027, lng:-80.270439, dir:"438 East Hanes Mill Road", tel:"+1 336-377-2399", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"MUDDY PAWS DOG GROOMING", cat:"peluqueria", lat:36.264283, lng:-80.223338, dir:"1083 Red Bank Road", tel:"+13364080005", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Horizons Happy Hounds Off Leash Dog Area", cat:"parque", lat:36.228203, lng:-80.23206, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ruskin": {nombre:"Ruskin", centro:[27.720645, -82.434037], tz:"America/New_York", lugares:[
  {n:"Southshore Pet Grooming", cat:"peluqueria", lat:27.716175, lng:-82.434447, dir:"315 Tamiami Trail", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ruskin Animal Hospital", cat:"vet", lat:27.712362, lng:-82.43459, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "russellville-kentucky": {nombre:"Russellville", centro:[36.84532, -86.887219], tz:"America/Chicago", lugares:[
  {n:"The Ruff Life Resort", cat:"refugio", lat:36.842377, lng:-86.897817, dir:"707 Hopkinsville Street", tel:"+1-270-725-9281", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Nashville Road Animal Clinic", cat:"vet", lat:36.824477, lng:-86.886566, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rustburg": {nombre:"Rustburg", centro:[37.276811, -79.100854], tz:"America/New_York", lugares:[
  {n:"Campbell County Animal Care and Control Facility", cat:"refugio", lat:37.250503, lng:-79.183561, dir:"322 Dennis Riddle Drive", tel:"+1-434-821-4416", horas:[12.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Lynchburg Humane Spay Neuter Clinic", cat:"vet", lat:37.24694, lng:-79.202631, dir:"29 Mortimer Drive", tel:"+1 434 207 2612", horas:[7.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Simply Grooming", cat:"peluqueria", lat:37.277247, lng:-79.100461, dir:"832 Village Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ruth-north-carolina": {nombre:"Ruth", centro:[35.382066, -81.947049], tz:"America/New_York", lugares:[
  {n:"Rutherford Veterinary Hospital", cat:"vet", lat:35.387953, lng:-81.97193, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rutherford-college": {nombre:"Rutherford College", centro:[35.75014, -81.524786], tz:"America/New_York", lugares:[
  {n:"Shadow Ridge Veterinary Hospital", cat:"vet", lat:35.753187, lng:-81.526829, dir:"965 Malcolm Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ryland": {nombre:"Ryland", centro:[34.769813, -86.480823], tz:"America/Chicago", lugares:[
  {n:"Chase Animal Hospital", cat:"vet", lat:34.772506, lng:-86.529342, dir:"1760 Highway 72 East", tel:"+1 256 851 7297", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "safety-harbor": {nombre:"Safety Harbor", centro:[27.990853, -82.693155], tz:"America/New_York", lugares:[
  {n:"Sunshine Animal Hospital", cat:"vet", lat:27.960213, lng:-82.721244, dir:"2807 Gulf to Bay Boulevard", tel:"+1 727 791 7242", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:28.011461, lng:-82.731669, dir:"26277 US-19", tel:"+1 727-799-3311", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:27.958027, lng:-82.728689, dir:"2625 US 19", tel:"+1 727-725-3755", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Neighborhood Dog Bar", cat:"parque", lat:27.990208, lng:-82.694019, dir:"660 2nd St S", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Tampa Bay", cat:"refugio", lat:27.983218, lng:-82.711131, dir:null, tel:"+1-727-797-7722", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:27.980021, lng:-82.709876, dir:"1500 McMullen Booth Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Ave Dog Grooming", cat:"tienda", lat:28.011325, lng:-82.71143, dir:"2475 N McMullen Booth Rd", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal & Bird Hospital of Clearwater", cat:"vet", lat:27.990562, lng:-82.726797, dir:"2651 Sunset Point Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Enterprise Dog Park", cat:"parque", lat:28.009571, lng:-82.726294, dir:"2655 Enterprise Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Resort & Grooming Salon", cat:"peluqueria", lat:27.990151, lng:-82.726739, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sailfish-point": {nombre:"Sailfish Point", centro:[27.17668, -80.160113], tz:"America/New_York", lugares:[
  {n:"Pet Groomalicious", cat:"tienda", lat:27.10375, lng:-80.154928, dir:"8245 Southeast Wren Avenue", tel:"+1-561-598-4863", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-augustine": {nombre:"Saint Augustine", centro:[29.894695, -81.314539], tz:"America/New_York", lugares:[
  {n:"Pomar Dog Park", cat:"parque", lat:29.912716, lng:-81.330422, dir:"Big Joe Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Saint Augustine Alligator Farm Zoological Park", cat:"zoo", lat:29.88205, lng:-81.288922, dir:"999 Anastasia Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Antigua Veterinary Practice", cat:"vet", lat:29.911631, lng:-81.320761, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:29.879518, lng:-81.326114, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Saint Johns Veterinary Hospital & Cat Clinic", cat:"vet", lat:29.877924, lng:-81.323925, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Robert's Feed", cat:"tienda", lat:29.911576, lng:-81.33337, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-augustine-beach": {nombre:"Saint Augustine Beach", centro:[29.850861, -81.271663], tz:"America/New_York", lugares:[
  {n:"Jackson Veterinary Hospital", cat:"vet", lat:29.859999, lng:-81.281932, dir:"1925 A1A South", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Moses Creek Veterinary Hospital", cat:"vet", lat:29.757372, lng:-81.28389, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-cloud": {nombre:"Saint Cloud", centro:[28.249853, -81.283904], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:28.247007, lng:-81.302793, dir:"2924 13th Street", tel:"+1-407-498-0929", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:28.267225, lng:-81.331547, dir:"2755 Bronson Highway", tel:"+1 407-452-5938", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Doggie Details", cat:"peluqueria", lat:28.246548, lng:-81.2793, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Saint Cloud Veterinary Center", cat:"vet", lat:28.246478, lng:-81.267736, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-florian": {nombre:"Saint Florian", centro:[34.872776, -87.626071], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:34.842386, lng:-87.637705, dir:"394 Cox Creek Parkway", tel:"+1 256-767-4201", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:34.83379, lng:-87.627672, dir:"244 Seville Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.829364, lng:-87.626201, dir:"107 South Cox Creek Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-james-city": {nombre:"Saint James City", centro:[26.497579, -82.078426], tz:"America/New_York", lugares:[
  {n:"Pine Island Animal Clinic", cat:"vet", lat:26.610181, lng:-82.11622, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-marys": {nombre:"Saint Marys", centro:[30.720376, -81.548571], tz:"America/New_York", lugares:[
  {n:"Madi's Mutts", cat:"peluqueria", lat:30.743481, lng:-81.555765, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Michelle’s PAWsome Puppy Spa", cat:"peluqueria", lat:30.745985, lng:-81.562255, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-pete-beach": {nombre:"Saint Pete Beach", centro:[27.725306, -82.741212], tz:"America/New_York", lugares:[
  {n:"Saint Pete Beach Veterinary Clinic", cat:"vet", lat:27.73663, lng:-82.747471, dir:"6605 Gulf Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pass A Grille Dog Beach", cat:"parque", lat:27.683589, lng:-82.736266, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PAWS Playground", cat:"parque", lat:27.616508, lng:-82.728342, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-petersburg": {nombre:"Saint Petersburg", centro:[27.771226, -82.634026], tz:"America/New_York", lugares:[
  {n:"Downtown Saint Pete Vet Clinic", cat:"peluqueria", lat:27.773959, lng:-82.6334, dir:"111 2nd Avenue Northeast", tel:"+1-727-274-9112", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northeast Animal Hospital", cat:"vet", lat:27.786073, lng:-82.638125, dir:"1401 4th Street North", tel:"+1 727 822 8501", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Sunken Gardens", cat:"zoo", lat:27.790043, lng:-82.637204, dir:"1825 4th Street North", tel:"+1 727-551-3102", horas:[10.0, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Love My Dog Resort & Playground-Downtown", cat:"tienda", lat:27.781698, lng:-82.658253, dir:"928 18th Street North", tel:"+1-727-826-0102", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Pal Animal Shelter", cat:"refugio", lat:27.76718, lng:-82.663285, dir:"405 22nd Street South", tel:"+1-727-328-7738", horas:[11.0, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Crescent Lake Dog Park", cat:"parque", lat:27.785458, lng:-82.641939, dir:"12th Avenue North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crescent Lake Small Dog Park", cat:"parque", lat:27.785516, lng:-82.642163, dir:"12th Avenue North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kenwood Dog Park", cat:"parque", lat:27.776516, lng:-82.659444, dir:"401 20th Street North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pinellas Ale Works Brewery & Tap Room", cat:"parque", lat:27.769937, lng:-82.660107, dir:"1962 1st Avenue South", tel:null, horas:[15.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Wag-a-Lot Pet Shop", cat:"tienda", lat:27.795409, lng:-82.638244, dir:"4th Street North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dandy's Pet Grooming", cat:"peluqueria", lat:27.770021, lng:-82.662828, dir:"2150 1st Avenue South", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mutts and Martinis", cat:"parque", lat:27.770731, lng:-82.671728, dir:"2900 Central Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Two Poodles and a Mutt", cat:"tienda", lat:27.770765, lng:-82.673063, dir:"2920 Central Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Furry Friends Grooming", cat:"tienda", lat:27.811608, lng:-82.638912, dir:"4th Street North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Animal Hospital", cat:"vet", lat:27.816091, lng:-82.638157, dir:"4th Street North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"One Lucky Dog", cat:"tienda", lat:27.820786, lng:-82.638923, dir:"5230 4th Street North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Shore Dog Park", cat:"parque", lat:27.779933, lng:-82.627434, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Riviera Bay", cat:"vet", lat:27.792701, lng:-82.647001, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dog Bar", cat:"parque", lat:27.770786, lng:-82.664669, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"4th Street Pet Hospital", cat:"tienda", lat:27.80056, lng:-82.637727, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Coquina Key Dog Park", cat:"parque", lat:27.738393, lng:-82.631904, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal House Naturals", cat:"tienda", lat:27.805659, lng:-82.636525, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alphonse Grooming", cat:"tienda", lat:27.823129, lng:-82.639087, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Picnic Island Dog Beach", cat:"parque", lat:27.856598, lng:-82.551786, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "salem-virginia": {nombre:"Salem", centro:[37.293198, -80.055677], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:37.290827, lng:-80.081406, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Center of Salem", cat:"vet", lat:37.277808, lng:-80.036539, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "salisbury-north-carolina": {nombre:"Salisbury", centro:[35.670973, -80.474226], tz:"America/New_York", lugares:[
  {n:"West Innes Animal Hospital", cat:"vet", lat:35.684997, lng:-80.483388, dir:"1725 West Innes Street", tel:"+1-704-754-4539", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"The Animal Care Center of Salisbury", cat:"vet", lat:35.653591, lng:-80.455763, dir:"1500 East Innes Street", tel:"+1-704-637-0227", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.650728, lng:-80.460746, dir:"345 Faith Road", tel:"+1 704-633-4334", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pitner Dog Park", cat:"parque", lat:35.658804, lng:-80.465694, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saltillo-mississippi": {nombre:"Saltillo", centro:[34.37659, -88.684461], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.318958, lng:-88.698384, dir:"1040 Cross Creek Drive", tel:"+1 662-842-6783", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "saltville": {nombre:"Saltville", centro:[36.880342, -81.764365], tz:"America/New_York", lugares:[
  {n:"Saltville Animal Clinic", cat:"vet", lat:36.879874, lng:-81.76545, dir:"151 West Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saluda-north-carolina": {nombre:"Saluda", centro:[35.236226, -82.349284], tz:"America/New_York", lugares:[
  {n:"Saluda Veterinary Hospital", cat:"vet", lat:35.24689, lng:-82.328101, dir:"1499 Ozone Drive", tel:"+18287492340", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Saluda Dog Park", cat:"parque", lat:35.233136, lng:-82.353638, dir:"199 Chestnut Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saluda-virginia": {nombre:"Saluda", centro:[37.606128, -76.595065], tz:"America/New_York", lugares:[
  {n:"CiCi’s Dog Salon", cat:"peluqueria", lat:37.610213, lng:-76.608027, dir:"126 General Puller Highway", tel:"+1-757-936-1021", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sandersville": {nombre:"Sandersville", centro:[32.983281, -82.811603], tz:"America/New_York", lugares:[
  {n:"Sandersville Veterinary Clinic", cat:"vet", lat:32.966237, lng:-82.800521, dir:"507 Industrial Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sandy-springs": {nombre:"Sandy Springs", centro:[33.924269, -84.378538], tz:"America/New_York", lugares:[
  {n:"Animal Emergency Center of Sandy Springs", cat:"vet", lat:33.920349, lng:-84.379618, dir:"228 Sandy Springs Place Northeast", tel:"+1 404 252 7881", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.917873, lng:-84.381207, dir:"5938 Roswell Road Northeast", tel:"+1 404-255-6544", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"BluePearl", cat:"vet", lat:33.936146, lng:-84.373169, dir:"455 Abernathy Road Northeast", tel:"+1-404-459-0903", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Perk n Pooch", cat:"peluqueria", lat:33.937997, lng:-84.381047, dir:"6690 Roswell Road", tel:"+1-678-500-9237", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Hot Dogs and Cool Cats Dog Grooming Spa", cat:"peluqueria", lat:33.951355, lng:-84.413202, dir:"255 Village Parkway Northeast", tel:"+1-770-858-1000", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Powers Ferry Animal Hospital", cat:"vet", lat:33.907425, lng:-84.429, dir:"5565 New Northside Drive Northwest", tel:"+1-770-955-1291", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Haven The Dog Spot", cat:"peluqueria", lat:33.966051, lng:-84.414922, dir:"4719 Lower Roswell Road Northeast", tel:"+1-770-672-7343", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Paws Whiskers & Claws", cat:"vet", lat:33.96606, lng:-84.415798, dir:"4719 Lower Roswell Road Northeast", tel:"+1 770-579-6001", horas:[9.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Pet Hotel", cat:"refugio", lat:33.974181, lng:-84.414724, dir:"1087 Johnson Ferry Road Northeast", tel:"+1-678-560-0880", horas:[11.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of East Cobb", cat:"vet", lat:33.953631, lng:-84.440833, dir:"3770 Lower Roswell Road Southeast", tel:"+1-770-578-8522", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.977894, lng:-84.415326, dir:"1100 Johnson Ferry Road Northeast", tel:"+1-770-321-3449", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Bird Watcher Supply", cat:"tienda", lat:33.979072, lng:-84.42291, dir:"1255 Johnson Ferry Road Northeast", tel:"+1-770-973-7712", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.978905, lng:-84.424966, dir:"1285 Johnson Ferry Road Northeast", tel:"+1 770-971-3010", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Town & Country East Veterinary Clinic", cat:"vet", lat:33.97735, lng:-84.4396, dir:"1100 Mount Bethel Drive Northeast", tel:"+1-770-565-7175", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Good Mews", cat:"refugio", lat:33.977531, lng:-84.441842, dir:"3805 Robinson Road Northeast", tel:"+1-770-499-2287", horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:33.924482, lng:-84.354413, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetVet 365", cat:"vet", lat:33.965551, lng:-84.408739, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sanford-florida": {nombre:"Sanford", centro:[28.811735, -81.268022], tz:"America/New_York", lugares:[
  {n:"Paws Care Vet Clinic", cat:"vet", lat:28.779799, lng:-81.274481, dir:"2620 S Orlando Drive", tel:"+14073234707", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Paw Park", cat:"parque", lat:28.808518, lng:-81.272608, dir:"427 French Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Florida Zoo & Botanical Gardens", cat:"zoo", lat:28.825462, lng:-81.314867, dir:"3755 W Seminole Blvd", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Rescue by Judy", cat:"tienda", lat:28.808662, lng:-81.272029, dir:null, tel:null, horas:[13.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Central Florida Zoo & Botanical Garden", cat:"zoo", lat:28.826506, lng:-81.314701, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pampered Paws", cat:"tienda", lat:28.811035, lng:-81.321993, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sanford-north-carolina": {nombre:"Sanford", centro:[35.479876, -79.180299], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.488797, lng:-79.195797, dir:"868 Spring Lane", tel:"+1 919-895-3195", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Lee County Animal Control", cat:"refugio", lat:35.502752, lng:-79.203993, dir:"1450 North Horner Boulevard", tel:"+19197767446", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carolina Town & Country", cat:"tienda", lat:35.460656, lng:-79.141321, dir:"710 East Main Street", tel:"+19197762790", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.450904, lng:-79.136425, dir:"3070 South Horner Boulevard", tel:"+1 919-718-0688", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"RAE-ZOR GBD", cat:"peluqueria", lat:35.523765, lng:-79.224496, dir:"100 Animal Ave", tel:"+19197760076", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Animals Veterinary Hospital", cat:"vet", lat:35.524247, lng:-79.225298, dir:"101 Animal Ave", tel:"+19197754944", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sans-souci": {nombre:"Sans Souci", centro:[34.877895, -82.424011], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:34.891292, lng:-82.401704, dir:"3270 North Pleasantburg Drive", tel:"+1 864-232-7340", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Upstate Grooming", cat:"peluqueria", lat:34.883198, lng:-82.421018, dir:"3206 Old Buncombe Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greenville Humane Society", cat:"refugio", lat:34.884402, lng:-82.400918, dir:"328 Furman Hall Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Poinsett Animal Hospital", cat:"vet", lat:34.900389, lng:-82.414714, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sarasota": {nombre:"Sarasota", centro:[27.336581, -82.530855], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:27.300144, lng:-82.530828, dir:"3800 South Tamiami Trail", tel:"+1 941-366-6784", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:27.383578, lng:-82.457958, dir:"1;131 North Cattlemen Road", tel:"+1 941-351-2871", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Boo's Ice House & Dog Bar", cat:"parque", lat:27.344678, lng:-82.54347, dir:"1314 10th Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Lockwood Ridge Animal Hospital", cat:"vet", lat:27.367657, lng:-82.505105, dir:"3802 North Lockwood Ridge Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fruitvile Veterinary Clinic", cat:"vet", lat:27.329349, lng:-82.463499, dir:"719 Honore Ave", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Surgery Center of Sarasota", cat:"vet", lat:27.397928, lng:-82.454043, dir:"8033 Cooper Creek Blvd # 101", tel:null, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:27.390054, lng:-82.508271, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:27.29753, lng:-82.482993, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bayside Pet Resort", cat:"refugio", lat:27.395568, lng:-82.563749, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Perfect - Lakewood Ranch", cat:"tienda", lat:27.434331, lng:-82.426283, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw Park - Small Dog Area", cat:"parque", lat:27.423679, lng:-82.414344, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw Park - Large Dog Area", cat:"parque", lat:27.422938, lng:-82.413381, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw Park - Agility Area", cat:"parque", lat:27.422401, lng:-82.412406, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Country Club East Small Dog Park", cat:"parque", lat:27.401866, lng:-82.391395, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Country Club East Dog Park", cat:"parque", lat:27.401092, lng:-82.388632, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Pets Clinic", cat:"vet", lat:27.4326, lng:-82.396242, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saucier": {nombre:"Saucier", centro:[30.636362, -89.134826], tz:"America/Chicago", lugares:[
  {n:"Saucier Veterinary Hospital", cat:"vet", lat:30.607761, lng:-89.127728, dir:"22146 Highway 49", tel:"+1 228 831 4660", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "savannah": {nombre:"Savannah", centro:[32.079007, -81.092134], tz:"America/New_York", lugares:[
  {n:"Oliver Bentleys Barking Bakery", cat:"tienda", lat:32.07771, lng:-81.092905, dir:"9-11 West York Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Grateful Hound", cat:"tienda", lat:32.080027, lng:-81.093837, dir:"32 Barnard Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"E. Shaver, Bookseller", cat:"zoo", lat:32.073645, lng:-81.093367, dir:"326 Bull Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery", cat:"tienda", lat:32.080777, lng:-81.094292, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "savannah-tennessee": {nombre:"Savannah", centro:[35.224803, -88.249204], tz:"America/Chicago", lugares:[
  {n:"Hardin County Animal Services", cat:"refugio", lat:35.229992, lng:-88.216405, dir:"140 Legion Drive", tel:"+1-731-925-3303", horas:[12.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Sassy Styles Pet Salon", cat:"peluqueria", lat:35.226128, lng:-88.231092, dir:"922 Wayne Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic", cat:"vet", lat:35.199481, lng:-88.244243, dir:"1945 Pickwick Street South", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saxon": {nombre:"Saxon", centro:[34.961233, -81.967327], tz:"America/New_York", lugares:[
  {n:"Smith Animal Hospital", cat:"vet", lat:34.96942, lng:-81.952548, dir:"1080 Asheville Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "scottdale": {nombre:"Scottdale", centro:[33.789827, -84.264089], tz:"America/New_York", lugares:[
  {n:"Wag-A-Lot Decatur", cat:"vet", lat:33.782573, lng:-84.274677, dir:"255 Dekalb Industrial Way", tel:"+1-404-292-3377", horas:[6.5, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Barking Hound Village Decatur", cat:"refugio", lat:33.78141, lng:-84.270492, dir:"251 Rio Circle", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:33.793514, lng:-84.28372, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rockbridge Dog Park", cat:"parque", lat:33.783271, lng:-84.244659, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"For Pet's Sake", cat:"vet", lat:33.809998, lng:-84.27623, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "scottsboro": {nombre:"Scottsboro", centro:[34.673132, -86.033877], tz:"America/Chicago", lugares:[
  {n:"Petsense", cat:"tienda", lat:34.647755, lng:-86.029674, dir:"22991 John T Reid Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scottsboro Dog Park", cat:"parque", lat:34.65808, lng:-86.039676, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Williams Animal Clinic", cat:"vet", lat:34.654574, lng:-86.022257, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "scottsville-virginia": {nombre:"Scottsville", centro:[37.798757, -78.495566], tz:"America/New_York", lugares:[
  {n:"Piedmont Veterinary Service", cat:"vet", lat:37.865175, lng:-78.555841, dir:"1418 Plank Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "seaford-virginia": {nombre:"Seaford", centro:[37.198199, -76.433003], tz:"America/New_York", lugares:[
  {n:"Seaford Veterinary Clinic", cat:"vet", lat:37.173733, lng:-76.476212, dir:"6627 George Washington Memorial Highway", tel:"+1-757-833-6440", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Grafton Animal Hospital", cat:"vet", lat:37.167436, lng:-76.470762, dir:"449 Grafton Drive", tel:"+1-757-384-9399", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"York Veterinary Hospital", cat:"vet", lat:37.150182, lng:-76.459219, dir:"4628 George Washington Memorial Highway", tel:"+1-757-898-3700", horas:[7.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Yorktown Animal Hospital", cat:"vet", lat:37.188442, lng:-76.490415, dir:"2400 Fort Eustis Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "seagrove": {nombre:"Seagrove", centro:[35.540842, -79.777886], tz:"America/New_York", lugares:[
  {n:"North Carolina Zoo", cat:"zoo", lat:35.59199, lng:-79.848029, dir:"4401 Zoo Parkway", tel:"+1-800-488-0444", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sebastian": {nombre:"Sebastian", centro:[27.817357, -80.469404], tz:"America/New_York", lugares:[
  {n:"Dapper Dog", cat:"peluqueria", lat:27.815582, lng:-80.468216, dir:"1122 US Highway 1", tel:"+1-772-581-6392", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Cat's Meow Cat Clinic", cat:"vet", lat:27.81524, lng:-80.468906, dir:"1105 US Highway 1", tel:"+1-772-388-5550", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"The Harmony Pet Spa", cat:"peluqueria", lat:27.805867, lng:-80.472977, dir:"250 Sebastian Boulevard", tel:"+1-772-589-0406", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Highlands Animal Hospital", cat:"vet", lat:27.802152, lng:-80.475987, dir:"433 Sebastian Boulevard", tel:"+1-772-388-1883", horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Bark Avenue Healthy Pets", cat:"tienda", lat:27.801797, lng:-80.476306, dir:"435 Sebastian Boulevard", tel:"+1-772-388-3066", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Canine Design", cat:"peluqueria", lat:27.800984, lng:-80.477101, dir:"457 Sebastian Boulevard", tel:"+1-772-581-8585", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Hometown Pet Care Center", cat:"vet", lat:27.787728, lng:-80.48886, dir:"827 Sebastian Boulevard", tel:"+1-772-589-4010", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"H.A.L.O Shelter", cat:"refugio", lat:27.828282, lng:-80.477545, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sebring": {nombre:"Sebring", centro:[27.495745, -81.441042], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:27.49763, lng:-81.485531, dir:"1704 27 North", tel:"+1 863-382-2206", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pawper’s Choice", cat:"peluqueria", lat:27.493911, lng:-81.49424, dir:"230 Swallow Avenue", tel:"+1-863-449-4444", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Groomer on the Circle", cat:"peluqueria", lat:27.495282, lng:-81.441841, dir:"125 West Center Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spring Lake Dog Park", cat:"parque", lat:27.4475, lng:-81.309116, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pretty Paws Pet Grooming Salon", cat:"peluqueria", lat:27.437494, lng:-81.312234, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sedalia-north-carolina": {nombre:"Sedalia", centro:[36.067358, -79.620581], tz:"America/New_York", lugares:[
  {n:"Stoney Creek Veterinary Hospital", cat:"vet", lat:36.065804, lng:-79.59553, dir:"6460 Burlington Road", tel:"+1-336-446-8071", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stoney Creek Pet Lodge", cat:"refugio", lat:36.065908, lng:-79.59458, dir:"6464 Burlington Road", tel:"+1-336-603-6930", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "selma": {nombre:"Selma", centro:[32.407863, -87.020747], tz:"America/Chicago", lugares:[
  {n:"Selma Animal Control & Adoption", cat:"vet", lat:32.42331, lng:-87.048363, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "selma-north-carolina": {nombre:"Selma", centro:[35.536549, -78.284443], tz:"America/New_York", lugares:[
  {n:"For Pets Sake Animal Hospital", cat:"vet", lat:35.535553, lng:-78.283867, dir:"108 South Raiford Street", tel:"+19192025656", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"TagWorks", cat:"tienda", lat:35.522889, lng:-78.310526, dir:"1285 North Brightleaf Boulevard", tel:"+18774739314", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.522869, lng:-78.310858, dir:"1285 North Brightleaf Boulevard", tel:"+1 919-300-4243", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Johnston Animal Hospital", cat:"vet", lat:35.51936, lng:-78.311786, dir:"1266 North Brightleaf Boulevard", tel:"+19199343511", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "seminole-florida": {nombre:"Seminole", centro:[27.840092, -82.791125], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:27.841903, lng:-82.793137, dir:"11147 Park Boulevard North", tel:"+1 727-954-2450", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Seminole", cat:"vet", lat:27.843066, lng:-82.79651, dir:"11375 Park Boulevard North", tel:"+1-727-393-3102", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Life", cat:"tienda", lat:27.838697, lng:-82.78788, dir:"10720 Park Boulevard North", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:27.843076, lng:-82.793538, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake Seminole Animal Hospital", cat:"vet", lat:27.838887, lng:-82.757607, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "semmes": {nombre:"Semmes", centro:[30.778688, -88.258843], tz:"America/Chicago", lugares:[
  {n:"Wesson Animal Clinic", cat:"vet", lat:30.637792, lng:-88.222567, dir:"7705 Cottage Hill Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mobile County Animal Shelter", cat:"refugio", lat:30.715632, lng:-88.22181, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.680091, lng:-88.223831, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "senatobia": {nombre:"Senatobia", centro:[34.618781, -89.964628], tz:"America/Chicago", lugares:[
  {n:"Senatobia Animal Hospital", cat:"vet", lat:34.615951, lng:-89.93491, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "seneca-gardens": {nombre:"Seneca Gardens", centro:[38.22896, -85.677461], tz:"America/Chicago", lugares:[
  {n:"Cochran Hill Dog Run", cat:"parque", lat:38.243986, lng:-85.695392, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "seneca-south-carolina": {nombre:"Seneca", centro:[34.686532, -82.952729], tz:"America/New_York", lugares:[
  {n:"Seneca Animal Hospital", cat:"vet", lat:34.669834, lng:-82.982992, dir:"104 Return Church Road", tel:"+1 864-882-8747", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.689859, lng:-82.990175, dir:"253 Applewood Center Place", tel:"+1 864-324-5043", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "senoia": {nombre:"Senoia", centro:[33.301166, -84.554005], tz:"America/New_York", lugares:[
  {n:"Fayette County Animal Shelter", cat:"refugio", lat:33.340409, lng:-84.541387, dir:"1127 GA-74", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "seven-corners": {nombre:"Seven Corners", centro:[38.871793, -77.155256], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.868709, lng:-77.143021, dir:"6100 Arlington Boulevard", tel:"+1 703-536-2708", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:38.868563, lng:-77.143007, dir:"6100 Arlington Boulevard", tel:"+1-703-536-2708", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Gigi's Pet Salon", cat:"peluqueria", lat:38.873948, lng:-77.140298, dir:"6029 Wilson Boulevard", tel:"+1-703-532-7888", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ballston Animal Hospital", cat:"vet", lat:38.876956, lng:-77.124832, dir:"5232 Wilson Boulevard", tel:"+1 703-528-2776", horas:[7.5, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Unleashed", cat:"tienda", lat:38.895949, lng:-77.138351, dir:"5400 Langston Boulevard", tel:"+1 703-237-2055", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:38.897192, lng:-77.137988, dir:"2437 North Harrison Street", tel:"+1-703-241-3988", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Wag N' Wash", cat:"peluqueria", lat:38.897498, lng:-77.13849, dir:"2501 North Harrison Street", tel:"+1-571-454-6066", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Lost Dog and Cat Rescue Foundation", cat:"refugio", lat:38.872741, lng:-77.155368, dir:"6801 Arlington Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banneker Dog Park", cat:"parque", lat:38.882169, lng:-77.155984, dir:"1680 North Sycamore Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "seven-devils": {nombre:"Seven Devils", centro:[36.155972, -81.79966], tz:"America/New_York", lugares:[
  {n:"Brown House Bird Supply", cat:"tienda", lat:36.156228, lng:-81.783427, dir:"9649 NC Highway 105 South", tel:"+1-828-963-4503", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blue Ridge Veterinary Clinic", cat:"vet", lat:36.156481, lng:-81.780951, dir:"106 Clubhouse Drive", tel:"+1-828-963-6641", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "seven-oaks": {nombre:"Seven Oaks", centro:[28.20121, -82.364635], tz:"America/New_York", lugares:[
  {n:"Gorgeous Growlers Grooming", cat:"peluqueria", lat:28.194845, lng:-82.39976, dir:"25227 Wesley Chapel Boulevard", tel:"+1-813-693-1227", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Cypress Creek Animal Hospital", cat:"vet", lat:28.194967, lng:-82.399846, dir:"25227 Wesley Chapel Boulevard", tel:"+1-813-949-3045", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Wellness Centre of Wesley Chapel", cat:"vet", lat:28.196063, lng:-82.355014, dir:"2710 Windguard Circle", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cypress Creek Community Dog Park", cat:"parque", lat:28.189809, lng:-82.400953, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Point", cat:"vet", lat:28.185083, lng:-82.412763, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "seven-springs": {nombre:"Seven Springs", centro:[28.212233, -82.665933], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:28.201733, lng:-82.664042, dir:"2920 Little Road", tel:"+1 727-375-9973", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Center", cat:"vet", lat:28.218291, lng:-82.666771, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Pets Hospital", cat:"vet", lat:28.216752, lng:-82.6973, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet First Veterinary Hospital", cat:"vet", lat:28.189698, lng:-82.698269, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sevierville": {nombre:"Sevierville", centro:[35.867293, -83.565717], tz:"America/New_York", lugares:[
  {n:"Petsense", cat:"tienda", lat:35.859151, lng:-83.567557, dir:"699 Parkway", tel:"+1-865-635-9884", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.882068, lng:-83.570732, dir:"713 Winfield Dunn Parkway", tel:"+1 865-868-3420", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Rainforest Discovery Zoo", cat:"zoo", lat:35.840224, lng:-83.566731, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shadow-wood": {nombre:"Shadow Wood", centro:[26.409934, -81.794956], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:26.408933, lng:-81.809005, dir:"8006 Mediterranean Drive", tel:"+1 239-948-3581", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:26.408763, lng:-81.808968, dir:"8006 Mediterranean Dr", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shady-hills": {nombre:"Shady Hills", centro:[28.410001, -82.542875], tz:"America/New_York", lugares:[
  {n:"Animal rescue of West Pasco", cat:"refugio", lat:28.364091, lng:-82.567783, dir:"14949 Harmon Drive", tel:"+1-727-856-6762", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Pasco County", cat:"refugio", lat:28.363977, lng:-82.568139, dir:"14949 Harmon Drive", tel:"+1-727-856-6762", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA San Francis Animal Hospital", cat:"vet", lat:28.403414, lng:-82.551672, dir:null, tel:"+1-352-848-0940", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shallotte": {nombre:"Shallotte", centro:[33.973228, -78.385837], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.982977, lng:-78.377552, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sharpsburg": {nombre:"Sharpsburg", centro:[33.339284, -84.648542], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:33.407064, lng:-84.67983, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shelbyville-kentucky": {nombre:"Shelbyville", centro:[38.21107, -85.217294], tz:"America/New_York", lugares:[
  {n:"Give A Chance Boutique`", cat:"tienda", lat:38.211396, lng:-85.219359, dir:"711 Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shelby Veterinary Clinic PLLC", cat:"vet", lat:38.224705, lng:-85.253973, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shell-point-retirement-community": {nombre:"Shell Point Retirement Community", centro:[26.518045, -81.997155], tz:"America/New_York", lugares:[
  {n:"Tails-A-Waggin", cat:"vet", lat:26.509199, lng:-81.951161, dir:"11960 Kelly Road", tel:"+1-239-482-6897", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:26.509411, lng:-81.944264, dir:"15880-190 San Carlos Boulevard", tel:"+1-239-208-3151", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wagging Tails Dog Park", cat:"parque", lat:26.548083, lng:-81.981985, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park", cat:"parque", lat:26.50466, lng:-81.941402, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shenandoah-shores": {nombre:"Shenandoah Shores", centro:[38.960388, -78.143055], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:38.965017, lng:-78.192685, dir:"135 Crooked Run Plaza", tel:"+1 540-635-7606", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Warren County", cat:"refugio", lat:38.937171, lng:-78.156505, dir:"1245 Progress Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "short-pump": {nombre:"Short Pump", centro:[37.650609, -77.611946], tz:"America/New_York", lugares:[
  {n:"Urgent Vet", cat:"vet", lat:37.651192, lng:-77.613294, dir:"11521 West Broad Street", tel:"+1-804-533-7733", horas:[15.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Krazy", cat:"tienda", lat:37.649654, lng:-77.615121, dir:"3520 Pump Road", tel:"+1-804-510-1600", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:37.648905, lng:-77.606812, dir:"11331 West Broad Street", tel:"+1 804-360-7446", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"COTA Veterinary", cat:"vet", lat:37.651901, lng:-77.617527, dir:"11629 West Broad Street", tel:"+1-804-964-2682", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"VetXpress", cat:"vet", lat:37.647364, lng:-77.616563, dir:"3412 Pump Road", tel:"+1-804-360-0111", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:37.647112, lng:-77.616759, dir:"3404 Pump Road", tel:"+1-804-934-9200", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:37.656858, lng:-77.614393, dir:"11740 West Broad Street", tel:"+1 804-364-2570", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Velvet Paws", cat:"tienda", lat:37.64838, lng:-77.603456, dir:"2436 Old Brick Road", tel:"+1-804-716-8214", horas:[12.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:37.652877, lng:-77.622017, dir:"11825 West Broad Street", tel:"+1-804-364-0224", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Virginia Veterinary Centers - Short Pump", cat:"vet", lat:37.661275, lng:-77.644455, dir:"4300 Greybull Drive", tel:"+1-804-353-9000", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Partner Veterinary Emergency and Specialty Center", cat:"vet", lat:37.665552, lng:-77.654355, dir:"1616 Three Chopt Road", tel:"+1-804-206-9122", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Referral & Critical Care (VRCC)", cat:"vet", lat:37.667277, lng:-77.679672, dir:"1596 Hockett Road", tel:"+1-804-784-8722", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Wellesley Animal Hospital", cat:"vet", lat:37.643916, lng:-77.629022, dir:"3430 Lauderdale Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"John Rolfe Veterinary", cat:"vet", lat:37.623626, lng:-77.622363, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Red Ridge K-9", cat:"tienda", lat:37.622924, lng:-77.623232, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Countryside Vet", cat:"vet", lat:37.620995, lng:-77.611155, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws & Claws", cat:"tienda", lat:37.621046, lng:-77.610915, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "siesta-key": {nombre:"Siesta Key", centro:[27.276201, -82.564299], tz:"America/New_York", lugares:[
  {n:"KindVet of Sarasota Urgent Care", cat:"vet", lat:27.268544, lng:-82.490842, dir:"3900 Clark Road", tel:"+1-941-922-0880", horas:[11.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:27.259719, lng:-82.51972, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "signal-mountain": {nombre:"Signal Mountain", centro:[35.122348, -85.343697], tz:"America/New_York", lugares:[
  {n:"Signal Mountain Veterinary Clinic", cat:"vet", lat:35.122206, lng:-85.341977, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"tienda", lat:35.095908, lng:-85.330269, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "siler-city": {nombre:"Siler City", centro:[35.723473, -79.462243], tz:"America/New_York", lugares:[
  {n:"Third Street Veterinary Clinic", cat:"vet", lat:35.725967, lng:-79.461119, dir:"312 East 3rd Street", tel:"+1-919-742-4909", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "silerton": {nombre:"Silerton", centro:[35.340358, -88.806167], tz:"America/Chicago", lugares:[
  {n:"Bird Shelter", cat:"refugio", lat:35.392825, lng:-88.771689, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "silver-lake": {nombre:"Silver Lake", centro:[28.836578, -81.792389], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:28.821531, lng:-81.783142, dir:"10401 US Highway 441", tel:"+1 352-314-2537", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "simpson-north-carolina": {nombre:"Simpson", centro:[35.575162, -77.278573], tz:"America/New_York", lugares:[
  {n:"Invisible Fence", cat:"tienda", lat:35.589825, lng:-77.262821, dir:"5652 US-33", tel:"+12523551604", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "simpsonville": {nombre:"Simpsonville", centro:[38.22257, -85.355235], tz:"America/New_York", lugares:[
  {n:"Johnson Veterinary Clinic", cat:"vet", lat:38.221391, lng:-85.345066, dir:"89 Buckcreek Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "simpsonville-south-carolina": {nombre:"Simpsonville", centro:[34.737305, -82.255371], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.715184, lng:-82.252612, dir:"621 Fairview Road", tel:"+1 864-757-3140", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Anita's Cat Spa", cat:"peluqueria", lat:34.737848, lng:-82.254887, dir:"107 East Curtis Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Verdin Veterinary Services", cat:"vet", lat:34.73749, lng:-82.257071, dir:"101 North Maple Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Puppy Nanny", cat:"tienda", lat:34.739679, lng:-82.255137, dir:"113 East College Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cleveland Park East Animal Hospital", cat:"vet", lat:34.751767, lng:-82.265832, dir:"815 Northeast Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Simpsonville Animal Hospital", cat:"vet", lat:34.724252, lng:-82.292052, dir:"1233 West Georgia Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:34.70343, lng:-82.256786, dir:"353 Harrison Bridge Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:34.741751, lng:-82.250471, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:34.74169, lng:-82.250189, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stillwater at Grandview Cove Dog Park", cat:"parque", lat:34.721675, lng:-82.259544, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sims-north-carolina": {nombre:"Sims", centro:[35.76074, -78.059412], tz:"America/New_York", lugares:[
  {n:"Points East Veterinary Specialty Hospital", cat:"vet", lat:35.762183, lng:-77.99981, dir:"4935 Raleigh Road Parkway", tel:"+12529916560", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "six-mile": {nombre:"Six Mile", centro:[34.807384, -82.820051], tz:"America/New_York", lugares:[
  {n:"Keowee Animal Hospital", cat:"vet", lat:34.806326, lng:-82.90869, dir:"8223 Rochester Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Keowee Key Dog Park", cat:"parque", lat:34.809033, lng:-82.911332, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "skye-ranch": {nombre:"Skye Ranch", centro:[27.240555, -82.398924], tz:"America/New_York", lugares:[
  {n:"Clark Road Animal Clinic", cat:"vet", lat:27.268077, lng:-82.4557, dir:"5728 Clark Road", tel:"+1 941-922-5007", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Sarasota County Sheriff's Office Animal Services", cat:"refugio", lat:27.300239, lng:-82.390717, dir:"8451 Bee Ridge Road", tel:"+1-941-861-9500", horas:[9.0, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Lakeview Dog Park.", cat:"parque", lat:27.290276, lng:-82.428943, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "smithfield-north-carolina": {nombre:"Smithfield", centro:[35.5112, -78.346102], tz:"America/New_York", lugares:[
  {n:"Willowrun Veterinary Hospital", cat:"vet", lat:35.49228, lng:-78.357199, dir:"1417 South Brightleaf Boulevard", tel:"+19192891934", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Connection", cat:"peluqueria", lat:35.482604, lng:-78.377974, dir:"375 Galilee Road", tel:"+1-919-934-7129", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Smithfield Dog Park", cat:"parque", lat:35.494992, lng:-78.357244, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "smithfield-virginia": {nombre:"Smithfield", centro:[36.982331, -76.631024], tz:"America/New_York", lugares:[
  {n:"Smithfield Animal Hospital", cat:"vet", lat:36.981881, lng:-76.614456, dir:"805 South Church Street", tel:"+1-757-357-9308", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Cypress Creek Veterinary Hospital", cat:"vet", lat:36.969291, lng:-76.608894, dir:"1500 South Church Street", tel:"+1-757-357-3251", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"D.O.G.'s Daycare & Spa", cat:"refugio", lat:36.968015, lng:-76.657736, dir:"12647 Courthouse Highway", tel:"+1-757-356-9909", horas:[6.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Eclipse Pets", cat:"tienda", lat:36.970254, lng:-76.609295, dir:"1402 South Church Street", tel:null, horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:36.976098, lng:-76.628168, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "smiths-station": {nombre:"Smiths Station", centro:[32.540139, -85.098547], tz:"America/New_York", lugares:[
  {n:"Paws Kountry", cat:"peluqueria", lat:32.509073, lng:-85.074516, dir:"9160 Lee Road 246, Ste C, Smiths Station, AL 36877, USA", tel:"+1-334-291-1411", horas:[8.0, 16.5], nota:"Dato de OpenStreetMap"}
 ]},
 "smithville-tennessee": {nombre:"Smithville", centro:[35.960619, -85.814152], tz:"America/Chicago", lugares:[
  {n:"Molly's Pampered Paws", cat:"peluqueria", lat:35.957295, lng:-85.808871, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of Smithville", cat:"vet", lat:35.957898, lng:-85.806436, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"DeKalb Animal Clinic", cat:"vet", lat:35.965536, lng:-85.847616, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "smyrna-georgia": {nombre:"Smyrna", centro:[33.883887, -84.514745], tz:"America/New_York", lugares:[
  {n:"Lickers & Whines", cat:"tienda", lat:33.8838, lng:-84.515893, dir:"2874 King Street Southeast", tel:"+1-470-857-0117", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Good Dog Veterinary Care", cat:"vet", lat:33.880026, lng:-84.516015, dir:"1302 Concord Road Southeast", tel:"+1 770-863-8712", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Care At Belmont", cat:"vet", lat:33.892601, lng:-84.519988, dir:"2450 Atlanta Road Southeast", tel:"+1 678-581-4055", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arkle Veterinary Care", cat:"vet", lat:33.875763, lng:-84.524113, dir:"1020 Concord Road Southeast", tel:"+1-770-435-6700", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Cumberland Animal Clinic", cat:"vet", lat:33.883182, lng:-84.499141, dir:"1860 Spring Road Southeast", tel:"+1-770-433-1414", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Bosley's Place", cat:"refugio", lat:33.868812, lng:-84.525465, dir:"3485 South Cobb Drive", tel:"+1 404-565-4025", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:33.875895, lng:-84.533807, dir:"3240 South Cobb Drive", tel:"+1 770-431-0029", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Sleepy Hollow Kennels", cat:"refugio", lat:33.900023, lng:-84.490157, dir:"2170 Windy Hill Road Southeast", tel:"+1-770-435-5781", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Windy Hill Veterinary Hospital", cat:"vet", lat:33.900182, lng:-84.490269, dir:"2170 Windy Hill Road Southeast", tel:"+1-770-333-9030", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Terrell Mill Animal Hospital", cat:"vet", lat:33.919797, lng:-84.466694, dir:"1315 Powers Ferry Road Southeast", tel:"+1-770-952-9300", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Taxi Doggy Pet Grooming", cat:"peluqueria", lat:33.92334, lng:-84.470647, dir:"2856 Delk Road Southeast", tel:"+1-678-324-8329", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogwood Veterinary Specialty & Emergency", cat:"vet", lat:33.922236, lng:-84.469162, dir:"1234 Powers Ferry Commons Southeast", tel:"+1-404-609-1234", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.923028, lng:-84.466113, dir:"2900 Delk Road Southeast", tel:"+1-770-612-9423", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"GB's Stables", cat:"refugio", lat:33.868284, lng:-84.567273, dir:"448 Hurt Road Southwest", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dee's Grooming Gallery", cat:"peluqueria", lat:33.883238, lng:-84.498983, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:33.859896, lng:-84.516599, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Apex Animal Hospital", cat:"vet", lat:33.859209, lng:-84.515839, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Center", cat:"vet", lat:33.852066, lng:-84.510273, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "smyrna-tennessee": {nombre:"Smyrna", centro:[35.98246, -86.519949], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.979556, lng:-86.569649, dir:"807 Industrial Boulevard", tel:"+1 615-220-8487", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Premier Vetcare", cat:"vet", lat:35.975955, lng:-86.53853, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lilah Belle Pet Spa & Boutique", cat:"peluqueria", lat:35.960556, lng:-86.519902, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetsR Us Veterinary", cat:"vet", lat:35.934115, lng:-86.533433, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sneads-ferry": {nombre:"Sneads Ferry", centro:[34.552666, -77.397184], tz:"America/New_York", lugares:[
  {n:"Petmart", cat:"tienda", lat:34.543229, lng:-77.433336, dir:"1056 Hwy 210", tel:"+1-910-327-2342", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Gilligans Dog Spa", cat:"refugio", lat:34.553711, lng:-77.442406, dir:"99 Village Drive", tel:"+1-910-327-2146", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"All Pets Animal Hospital", cat:"vet", lat:34.549736, lng:-77.429387, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "snellville": {nombre:"Snellville", centro:[33.857328, -84.019911], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.873422, lng:-84.014816, dir:"1929 Scenic Highway", tel:"+1 770-225-0382", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.862093, lng:-84.017452, dir:"2160 Scenic Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Snellville Animal Hospital", cat:"vet", lat:33.856172, lng:-84.012552, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"peluqueria", lat:33.884063, lng:-84.008917, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brookwood Animal Hospital", cat:"vet", lat:33.888567, lng:-84.056933, dir:null, tel:null, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "socastee": {nombre:"Socastee", centro:[33.683001, -78.998649], tz:"America/New_York", lugares:[
  {n:"K9 Cabana", cat:"tienda", lat:33.661457, lng:-78.995369, dir:"3951 Dick Pond Road", tel:"+1-854-854-5959", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Myrtle Beach Safari Wild Encounters Tour", cat:"zoo", lat:33.695724, lng:-78.970684, dir:"Folly Ranch Lane", tel:"+1 843-361-4552", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.65454, lng:-78.981155, dir:"160 Sayebrook Parkway", tel:"+1 843-293-3550", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.649631, lng:-78.985324, dir:"1391 South Commons Drive", tel:"+1 843-650-6640", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Boarding of Myrtle Beach", cat:"refugio", lat:33.722408, lng:-79.02343, dir:"8496 Hwy 544", tel:"+1-843-492-7438", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "social-circle": {nombre:"Social Circle", centro:[33.656387, -83.718639], tz:"America/New_York", lugares:[
  {n:"Liberty Stables", cat:"refugio", lat:33.645791, lng:-83.675784, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "soddy-daisy": {nombre:"Soddy-Daisy", centro:[35.235903, -85.19079], tz:"America/New_York", lugares:[
  {n:"If It's Tails", cat:"peluqueria", lat:35.228554, lng:-85.212064, dir:"8995 Dayton Pike", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "somerset": {nombre:"Somerset", centro:[37.092022, -84.604108], tz:"America/New_York", lugares:[
  {n:"Pulaski County Animal Shelter", cat:"refugio", lat:37.103328, lng:-84.582374, dir:"235 Adoptme Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Prefurred Dog Grooming & Boarding", cat:"peluqueria", lat:37.08863, lng:-84.655041, dir:"2086 W Hwy 80", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-bradenton": {nombre:"South Bradenton", centro:[27.463096, -82.581764], tz:"America/New_York", lugares:[
  {n:"Bayshore Animal Hospital", cat:"vet", lat:27.42297, lng:-82.576614, dir:"1511 Florida Boulevard", tel:"+1-941-756-5544", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Coral Zoo", cat:"tienda", lat:27.453046, lng:-82.457029, dir:"4914 Lena Road", tel:"+1-941-600-8244", horas:[12.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:27.462888, lng:-82.586873, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:27.475455, lng:-82.612878, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:27.475244, lng:-82.61358, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Park Small Dog Park", cat:"parque", lat:27.454355, lng:-82.425354, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Park Big Dog Park", cat:"parque", lat:27.45427, lng:-82.424973, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-daytona": {nombre:"South Daytona", centro:[29.165816, -81.004499], tz:"America/New_York", lugares:[
  {n:"Allied Veterinary Specialists", cat:"vet", lat:29.167048, lng:-80.999912, dir:"2300 South Ridgewood Avenue", tel:"+1-386-287-6500", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Mr. Pet Man", cat:"tienda", lat:29.164693, lng:-80.999432, dir:"48 South Ridgewood Avenue", tel:"+1 386 322 2490", horas:[10.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"All Creatures Veterinary Clinic", cat:"vet", lat:29.156884, lng:-80.993971, dir:"Ridgewood Avenue", tel:"+1 386 788 1990", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PawZazz Pet Salon", cat:"peluqueria", lat:29.168193, lng:-81.025174, dir:"1780 South Nova Road", tel:"+1 386 492 5967", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets Ahoy Grooming", cat:"peluqueria", lat:29.173623, lng:-81.002503, dir:"South Ridgewood Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Newman Veterinary Centers", cat:"vet", lat:29.174715, lng:-81.031107, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-miami": {nombre:"South Miami", centro:[25.707602, -80.293385], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:25.693199, lng:-80.304672, dir:"8302 South Dixie Highway", tel:"+1 305-714-8948", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "south-pasadena-florida": {nombre:"South Pasadena", centro:[27.755028, -82.737601], tz:"America/New_York", lugares:[
  {n:"Pasadena Veterinary Hospital", cat:"vet", lat:27.770574, lng:-82.735537, dir:"7000 Central Avenue", tel:"+1-727-381-3739", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:27.758314, lng:-82.735826, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Peacock's Pet Shop", cat:"tienda", lat:27.770471, lng:-82.740033, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-riding": {nombre:"South Riding", centro:[38.916117, -77.510859], tz:"America/New_York", lugares:[
  {n:"Aldie Veterinary Hospital", cat:"vet", lat:38.92384, lng:-77.509266, dir:"25067 Elk Lick Road", tel:"+1 703-327-0909", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dulles South Animal Emergency and Referral Hospital", cat:"vet", lat:38.923863, lng:-77.509209, dir:"25067 Elk Lick Road", tel:"+1 703-327-0871", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Little Jenna's Grooming", cat:"peluqueria", lat:38.915814, lng:-77.511617, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets + Vets Animal Hopsital", cat:"vet", lat:38.915865, lng:-77.511607, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Riding Dog Park", cat:"parque", lat:38.921006, lng:-77.509659, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:38.9145, lng:-77.489515, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-run": {nombre:"South Run", centro:[38.748201, -77.274634], tz:"America/New_York", lugares:[
  {n:"South Run Dog Park", cat:"parque", lat:38.752908, lng:-77.275406, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-venice": {nombre:"South Venice", centro:[27.062023, -82.416417], tz:"America/New_York", lugares:[
  {n:"Grooming Tails of Venice", cat:"peluqueria", lat:27.060633, lng:-82.414645, dir:"1945 South Tamiami Trail", tel:"+1-941-497-4957", horas:[8.5, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Brohard Paw Park", cat:"parque", lat:27.069114, lng:-82.448498, dir:"1850 Harbor Drive South", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodmere Paw Park", cat:"parque", lat:27.056698, lng:-82.395178, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-weldon": {nombre:"South Weldon", centro:[36.416379, -77.603944], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:36.425762, lng:-77.634843, dir:"311 Premier Boulevard", tel:null, horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "southaven": {nombre:"Southaven", centro:[34.987382, -90.003486], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:34.95995, lng:-89.99282, dir:"205 Goodman Road West", tel:"+1 662-349-7460", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "southern-gateway": {nombre:"Southern Gateway", centro:[38.34368, -77.496328], tz:"America/New_York", lugares:[
  {n:"PetVet Wellness Center", cat:"vet", lat:38.290817, lng:-77.535115, dir:"4179 Plank Road", tel:"+1-540-228-1203", horas:[12.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.293499, lng:-77.567899, dir:"5717 Plank Road", tel:"+1 540-785-0137", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.345174, lng:-77.493166, dir:"27 South Gateway Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:38.309799, lng:-77.511161, dir:"1937 Carl D Silver Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hope for Horses", cat:"refugio", lat:38.408881, lng:-77.567894, dir:"129 Hartwood Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"England Run Veterinary Clinic", cat:"vet", lat:38.353861, lng:-77.504659, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "southern-pines": {nombre:"Southern Pines", centro:[35.174047, -79.392254], tz:"America/New_York", lugares:[
  {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:35.169608, lng:-79.415976, dir:"207 Carolina Green Parkway", tel:"+19106310299", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:35.17394, lng:-79.417836, dir:"1700 Old Morganton Road", tel:"+1910-365-9852", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:35.172398, lng:-79.422386, dir:"124 Brucewood Road", tel:"+19102460002", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Splash and Dash Groomerie & Boutique", cat:"peluqueria", lat:35.172367, lng:-79.422552, dir:"120 Brucewood Road", tel:"+19102463274", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Urgent Vets for Pets", cat:"vet", lat:35.161569, lng:-79.421298, dir:"110 Commerce Avenue", tel:"+19106217297", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Southern Pawz Spa and Boutique", cat:"peluqueria", lat:35.161238, lng:-79.422615, dir:"208 Commerce Avenue", tel:"+19106385638", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.161289, lng:-79.424639, dir:"305 Commerce Avenue", tel:"+19106928542", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "southgate": {nombre:"Southgate", centro:[39.072005, -84.472719], tz:"America/New_York", lugares:[
  {n:"Alexandria Pike Animal Hospital", cat:"vet", lat:39.075184, lng:-84.477236, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "southport-north-carolina": {nombre:"Southport", centro:[33.921563, -78.020268], tz:"America/New_York", lugares:[
  {n:"Unleashed, the Dog & Cat Store", cat:"tienda", lat:33.942318, lng:-78.030771, dir:"1671 North Howe Street", tel:"+1-910-477-6254", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"All About Pets", cat:"peluqueria", lat:33.941087, lng:-78.028158, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "southwest-ranches": {nombre:"Southwest Ranches", centro:[26.058654, -80.338153], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:26.010674, lng:-80.358441, dir:"15895 Pines Boulevard", tel:"+1 754-260-6243", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:26.064412, lng:-80.36449, dir:"4555 Weston Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Balasky Animal Hospital", cat:"vet", lat:26.064743, lng:-80.304727, dir:"1701 Orange Dr", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spanish-fort": {nombre:"Spanish Fort", centro:[30.67545, -87.904027], tz:"America/Chicago", lugares:[
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.664223, lng:-87.849187, dir:"10200 Eastern Shore Boulevard", tel:"+1 251-625-3846", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "sparta-north-carolina": {nombre:"Sparta", centro:[36.505472, -81.120763], tz:"America/New_York", lugares:[
  {n:"Twin Oaks Veterinary Hospital", cat:"vet", lat:36.528242, lng:-81.162043, dir:"2970 US 21", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Glade Creek Animal Hospital", cat:"vet", lat:36.507013, lng:-81.121993, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alleghany Animal Shelter", cat:"refugio", lat:36.528167, lng:-81.162323, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spartanburg": {nombre:"Spartanburg", centro:[34.949801, -81.932016], tz:"America/New_York", lugares:[
  {n:"Paisley Paw", cat:"tienda", lat:34.949186, lng:-81.929257, dir:"155 East Broad Street", tel:"+1-864-327-9323", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SpartanBark Grooming", cat:"peluqueria", lat:34.937535, lng:-81.904021, dir:"200 Forest Avenue", tel:"+1-864-310-8289", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet's Favorite Play Place", cat:"refugio", lat:34.947325, lng:-81.920192, dir:"351 East Henry Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pine Street Animal Hospital", cat:"vet", lat:34.936102, lng:-81.899283, dir:"980 South Pine Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spartanburg County Pet Resource Center", cat:"refugio", lat:34.913476, lng:-81.909467, dir:"1591 Southport Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rail Tail Dog Park", cat:"parque", lat:34.940136, lng:-81.907625, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sperryville": {nombre:"Sperryville", centro:[38.657503, -78.226681], tz:"America/New_York", lugares:[
  {n:"K9OLOGY", cat:"tienda", lat:38.666859, lng:-78.21674, dir:"12167 Lee Highway", tel:"+1-540-987-6327", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spindale": {nombre:"Spindale", centro:[35.357486, -81.931207], tz:"America/New_York", lugares:[
  {n:"Dapper Dogs on Main", cat:"peluqueria", lat:35.355485, lng:-81.92467, dir:"303 East Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hinkle's Pet Hospital", cat:"vet", lat:35.36815, lng:-81.939216, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spotsylvania-courthouse": {nombre:"Spotsylvania Courthouse", centro:[38.201006, -77.589162], tz:"America/New_York", lugares:[
  {n:"Spotsylvania Animal Hospital", cat:"vet", lat:38.20324, lng:-77.585578, dir:"9133 Courthouse Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:38.261216, lng:-77.58218, dir:"11101 Gordon Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sprague-west-virginia": {nombre:"Sprague", centro:[37.79317, -81.183989], tz:"America/New_York", lugares:[
  {n:"Raleigh County Animal Hospital", cat:"vet", lat:37.806391, lng:-81.180481, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spring-hill": {nombre:"Spring Hill", centro:[28.463527, -82.536356], tz:"America/New_York", lugares:[
  {n:"Legacy Vet Care", cat:"vet", lat:28.451088, lng:-82.451339, dir:"17014 Ayers Road", tel:"+1 352 900 2673", horas:[9.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Care Center", cat:"vet", lat:28.528916, lng:-82.567677, dir:"7068 Commercial Way", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"HavestMoon Fun Farm", cat:"zoo", lat:28.437407, lng:-82.469063, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spring-hill-tennessee": {nombre:"Spring Hill", centro:[35.751179, -86.930002], tz:"America/Chicago", lugares:[
  {n:"Veterinary Wellness Clinic of Spring Hill", cat:"vet", lat:35.744462, lng:-86.892659, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Healthy Petz Veterinary Clinic", cat:"vet", lat:35.72758, lng:-86.893341, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spring-lake-north-carolina": {nombre:"Spring Lake", centro:[35.16794, -78.972806], tz:"America/New_York", lugares:[
  {n:"Points East Veterinary Emergency Hospital", cat:"vet", lat:35.111757, lng:-78.962631, dir:"1731 Convoy Lane", tel:"+19108642844", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lakeside Animal Hospital", cat:"vet", lat:35.256533, lng:-79.040043, dir:"1458 NC 24-87", tel:"+1-910-495-7387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fort Wagg Pet Store", cat:"tienda", lat:35.262795, lng:-79.045619, dir:"169 Mittie Haddock Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Discount Pet Shop", cat:"tienda", lat:35.170998, lng:-78.975464, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogwood Animal Hospital", cat:"vet", lat:35.091131, lng:-78.985601, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Starz", cat:"refugio", lat:35.14041, lng:-78.873537, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spring-mill": {nombre:"Spring Mill", centro:[38.143401, -85.630792], tz:"America/Chicago", lugares:[
  {n:"Decker's Paw Spa", cat:"peluqueria", lat:38.144343, lng:-85.626892, dir:"7202 Fegenbush Lane", tel:"+1-502-231-4142", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.139672, lng:-85.677349, dir:"4601 Outer Loop Road", tel:"+1 502-969-8206", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Royalton Kennels", cat:"refugio", lat:38.119594, lng:-85.574621, dir:"8620 Old Bardstown Road", tel:"+1-502-239-0827", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Noah's Ark Pets", cat:"tienda", lat:38.138524, lng:-85.619603, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "springdale-south-carolina": {nombre:"Springdale", centro:[33.959319, -81.108984], tz:"America/New_York", lugares:[
  {n:"Central Bark", cat:"tienda", lat:33.978186, lng:-81.116839, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "springfield-florida": {nombre:"Springfield", centro:[30.153257, -85.611315], tz:"America/Chicago", lugares:[
  {n:"Callaway Animal Hospital", cat:"vet", lat:30.151383, lng:-85.59983, dir:"247 North Highway 22A", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bay Animal Hospital", cat:"vet", lat:30.157061, lng:-85.634262, dir:"2003 East 5th Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Operation Spay Bay", cat:"vet", lat:30.174453, lng:-85.606374, dir:"3520 East 15th Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "springfield-tennessee": {nombre:"Springfield", centro:[36.509212, -86.884998], tz:"America/Chicago", lugares:[
  {n:"Central Bark", cat:"parque", lat:36.515721, lng:-86.890602, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "springfield-virginia": {nombre:"Springfield", centro:[38.779123, -77.18612], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.775019, lng:-77.169608, dir:"6535 Frontier Drive", tel:"+1 703-922-4990", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Regional Veterinary Referral Center", cat:"vet", lat:38.774336, lng:-77.182918, dir:"6651 Backlick Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Felix & Oscar", cat:"tienda", lat:38.774057, lng:-77.183148, dir:"6671 Backlick Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spices of Asia", cat:"vet", lat:38.771383, lng:-77.183533, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:38.774851, lng:-77.169735, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "springville": {nombre:"Springville", centro:[33.7751, -86.471651], tz:"America/Chicago", lugares:[
  {n:"Heritage Animal Care", cat:"vet", lat:33.769917, lng:-86.470072, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"tienda", lat:33.779056, lng:-86.434232, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spruce-pine-north-carolina": {nombre:"Spruce Pine", centro:[35.914779, -82.066411], tz:"America/New_York", lugares:[
  {n:"Mitchell Veterinary Hospital", cat:"vet", lat:35.901236, lng:-82.074601, dir:"11172 NC-226", tel:"+18287656039", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mitchell County Animal Rescue", cat:"refugio", lat:35.904391, lng:-82.102911, dir:"2492 NC-19 East", tel:"+18287656952", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stewart's Mountain View Animal Hospital", cat:"vet", lat:35.905184, lng:-82.108086, dir:"2235 Highway 19 East", tel:"+18287657059", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "st-augustine-south": {nombre:"St. Augustine South", centro:[29.849404, -81.31704], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:29.865635, lng:-81.33259, dir:"430 Cbl Drive", tel:"+1 904-824-8520", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:29.869529, lng:-81.325273, dir:"1779 Highway 1 South", tel:"+1 904-495-0785", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "st-simons": {nombre:"St. Simons", centro:[31.13538, -81.389519], tz:"America/New_York", lugares:[
  {n:"Pet Exchange", cat:"peluqueria", lat:31.160645, lng:-81.393986, dir:"2465 Demere Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Island Animal Hospital", cat:"vet", lat:31.161055, lng:-81.396517, dir:"2603 Demere Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Island Dog", cat:"tienda", lat:31.137438, lng:-81.394985, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stafford-virginia": {nombre:"Stafford", centro:[38.422268, -77.408407], tz:"America/New_York", lugares:[
  {n:"Stafford County Animal Control", cat:"refugio", lat:38.409877, lng:-77.420479, dir:"26 Frosty Lane", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stafford SPCA", cat:"refugio", lat:38.393908, lng:-77.382905, dir:"140 Andrew Chapel Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Embrey Mill Dogwood Dog Park", cat:"parque", lat:38.43721, lng:-77.426134, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stanardsville": {nombre:"Stanardsville", centro:[38.297352, -78.44001], tz:"America/New_York", lugares:[
  {n:"Madison-Greene Humane Society", cat:"refugio", lat:38.277783, lng:-78.421864, dir:"37B Jerri Allen Way", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stanton-kentucky": {nombre:"Stanton", centro:[37.845637, -83.858253], tz:"America/New_York", lugares:[
  {n:"Kentucky Reptile Zoo", cat:"zoo", lat:37.793243, lng:-83.70393, dir:"200 L&E Railroad Place", tel:null, horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "starke": {nombre:"Starke", centro:[29.944355, -82.110111], tz:"America/New_York", lugares:[
  {n:"Town & Country Vet Clinic", cat:"vet", lat:29.933732, lng:-82.104895, dir:"1051 South Water Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bradford Pet Care Hospital", cat:"vet", lat:29.943109, lng:-82.105202, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "starkey-ranch": {nombre:"Starkey Ranch", centro:[28.204417, -82.614138], tz:"America/New_York", lugares:[
  {n:"Bay Paws Pet Resort - Trinity", cat:"refugio", lat:28.188547, lng:-82.626219, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "starkville-mississippi": {nombre:"Starkville", centro:[33.463875, -88.815207], tz:"America/Chicago", lugares:[
  {n:"Animal Medical Center", cat:"vet", lat:33.454127, lng:-88.814892, dir:"113 MS 12", tel:"+16623232547", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"tienda", lat:33.453281, lng:-88.806636, dir:"624 MS 12", tel:"+1-662-324-4691", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Village Animal Hospital", cat:"vet", lat:33.477668, lng:-88.746538, dir:"13473 Old Highway 82 East", tel:"+16623240404", horas:[7.75, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Starkville Dog Park", cat:"parque", lat:33.470206, lng:-88.811666, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "startex": {nombre:"Startex", centro:[34.928453, -82.098997], tz:"America/New_York", lugares:[
  {n:"Healthpointe Veterinary Clinic", cat:"vet", lat:34.896834, lng:-82.086482, dir:"740 Shoals Road", tel:"+1-864-486-8177", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "statesboro": {nombre:"Statesboro", centro:[32.449014, -81.783291], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:32.429522, lng:-81.761004, dir:"359 Henry Boulevard", tel:"+1 912-764-1936", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "statesville": {nombre:"Statesville", centro:[35.782768, -80.887357], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.813924, lng:-80.875266, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "staunton-virginia": {nombre:"Staunton", centro:[38.149595, -79.072557], tz:"America/New_York", lugares:[
  {n:"The Well Balanced Paw", cat:"tienda", lat:38.147427, lng:-79.073637, dir:"29 Byers Street", tel:"+1 540 466 5183", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Parlor", cat:"peluqueria", lat:38.154796, lng:-79.073649, dir:"315 North Central Avenue", tel:"+1-540-885-5702", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.140067, lng:-79.067064, dir:"850 Statler Boulevard", tel:"+1 540-885-8083", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Westwood Animal Hospital PLC", cat:"vet", lat:38.153113, lng:-79.148259, dir:"15 Miss Phillips Road", tel:"+1 540 337 6200", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Staunton Veterinary Clinic", cat:"vet", lat:38.152192, lng:-79.057006, dir:"401 Commerce Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gypsy Hill Dog Park", cat:"parque", lat:38.158915, lng:-79.08256, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets N Pals", cat:"tienda", lat:38.13223, lng:-79.063539, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Augusta Valley Animal Hospital", cat:"vet", lat:38.132607, lng:-79.061781, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stephens-city": {nombre:"Stephens City", centro:[39.083222, -78.218285], tz:"America/New_York", lugares:[
  {n:"Stephens City Animal Hospital", cat:"vet", lat:39.080295, lng:-78.208388, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stephenson-virginia": {nombre:"Stephenson", centro:[39.238835, -78.108463], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.220602, lng:-78.136709, dir:"161 Market Street", tel:"+1 540-431-3401", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "sterling-virginia": {nombre:"Sterling", centro:[39.001745, -77.403335], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:39.007158, lng:-77.436344, dir:"22000 Dulles Retail Plaza", tel:"+1 571-434-6562", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Sterling Park Animal Hospital", cat:"vet", lat:39.007484, lng:-77.414484, dir:"800 West Church Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stilesboro": {nombre:"Stilesboro", centro:[34.10482, -84.915776], tz:"America/New_York", lugares:[
  {n:"Equine Veterinary Service", cat:"vet", lat:34.114765, lng:-84.939452, dir:"1484 Old Alabama Road", tel:"+1-770-382-7475", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stock-island": {nombre:"Stock Island", centro:[24.56727, -81.738977], tz:"America/New_York", lugares:[
  {n:"Lower Keys Vetrinary Clinic", cat:"vet", lat:24.561639, lng:-81.766333, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stokesdale": {nombre:"Stokesdale", centro:[36.237205, -79.979353], tz:"America/New_York", lugares:[
  {n:"Stokesdale Veterinary Hospital", cat:"vet", lat:36.234137, lng:-79.962373, dir:"7823 US-158", tel:"+1-336-643-8515", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stone-mountain": {nombre:"Stone Mountain", centro:[33.808092, -84.170627], tz:"America/New_York", lugares:[
  {n:"AARF Pet Central", cat:"tienda", lat:33.807557, lng:-84.170401, dir:"951 Main Street", tel:"+1-678-534-3483", horas:[10.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Main Street Veterinarians of Stone Mountain", cat:"vet", lat:33.80419, lng:-84.170161, dir:"868 Main Street", tel:"+1 770 498 4620", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws in Paradise", cat:"vet", lat:33.811049, lng:-84.171527, dir:"1054 E Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"AARF Pet Central", cat:"tienda", lat:33.810921, lng:-84.173679, dir:"6570 James B Rivers Memorial Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws in Paradise Pet Salon", cat:"vet", lat:33.810857, lng:-84.171316, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stone-ridge-virginia": {nombre:"Stone Ridge", centro:[38.927567, -77.549789], tz:"America/New_York", lugares:[
  {n:"Lenah Mill Dog Park", cat:"parque", lat:38.94041, lng:-77.57038, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "strasburg-virginia": {nombre:"Strasburg", centro:[38.988725, -78.36228], tz:"America/New_York", lugares:[
  {n:"Strasburg Dog Park", cat:"parque", lat:38.976202, lng:-78.350246, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stuart": {nombre:"Stuart", centro:[27.197983, -80.251918], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:27.177329, lng:-80.233633, dir:"2353 Southeast Federal Highway", tel:"+1-772-781-7438", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:27.173168, lng:-80.230763, dir:"2595 Southeast Federal Highway", tel:"+1-772-781-1201", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of the Treasure Coast", cat:"refugio", lat:27.15524, lng:-80.303826, dir:"4100 Southwest Leighton Farm Avenue", tel:"+1-772-223-8822", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aquatic N Exotic", cat:"tienda", lat:27.169425, lng:-80.23145, dir:"1525 Southeast Luckhardt Street", tel:null, horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Roman Animal Hospital", cat:"vet", lat:27.170695, lng:-80.296646, dir:"3188 Southwest Martin Downs Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Bark Park", cat:"parque", lat:27.192182, lng:-80.257521, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Claunch Animal Hospital", cat:"vet", lat:27.192068, lng:-80.257739, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greenridge Stables", cat:"refugio", lat:27.115695, lng:-80.336287, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stuarts-draft": {nombre:"Stuarts Draft", centro:[38.024817, -79.033346], tz:"America/New_York", lugares:[
  {n:"Dog Park", cat:"parque", lat:38.047721, lng:-79.097803, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sudley": {nombre:"Sudley", centro:[38.789084, -77.493416], tz:"America/New_York", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:38.802479, lng:-77.507057, dir:"10352 Balls Ford Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "suffolk": {nombre:"Suffolk", centro:[36.728134, -76.583468], tz:"America/New_York", lugares:[
  {n:"Feather N Finn", cat:"tienda", lat:36.724527, lng:-76.572052, dir:"713 Washington Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Suffolk Animal Hospital", cat:"vet", lat:36.730305, lng:-76.613555, dir:"1232 Holland Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nansemond Veternary Hospital", cat:"vet", lat:36.774937, lng:-76.585027, dir:"110 Kensington Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Academy Animal Care", cat:"vet", lat:36.776582, lng:-76.618235, dir:"3372 Pruden Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Suffolk Animal Control Bureau", cat:"refugio", lat:36.715662, lng:-76.655184, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sugar-hill": {nombre:"Sugar Hill", centro:[34.10649, -84.03352], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.060511, lng:-83.994473, dir:"1705 Mall of Georgia Boulevard", tel:"+1 678-482-7449", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Paw Spa Resort", cat:"refugio", lat:34.142776, lng:-84.104482, dir:"2771 Buford Hwy", tel:"+1-770-886-9936", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lanier Animal Hospital", cat:"vet", lat:34.113028, lng:-84.073712, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "summerfield-north-carolina": {nombre:"Summerfield", centro:[36.208747, -79.904758], tz:"America/New_York", lugares:[
  {n:"Rainbow Magic Alpaca Farm", cat:"zoo", lat:36.135355, lng:-79.894973, dir:"3628 Lewiston Road", tel:"+1-336-338-9006", horas:[13.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Bed and Biscuit", cat:"refugio", lat:36.200484, lng:-79.798564, dir:"6980 Spencer-Dixon Road", tel:"+1-336-551-5515", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "summersville": {nombre:"Summersville", centro:[38.28122, -80.852598], tz:"America/New_York", lugares:[
  {n:"Nicholas Co Animal Shelter", cat:"refugio", lat:38.313155, lng:-80.832019, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "summerville-south-carolina": {nombre:"Summerville", centro:[33.01867, -80.17627], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:33.03168, lng:-80.163114, dir:"1101 North Main Street", tel:"+1 843-879-5136", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.0407, lng:-80.155816, dir:"470 Azalea Square Boulevard", tel:"+1 843-821-7043", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Brighton Dog Park", cat:"parque", lat:33.060574, lng:-80.143959, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Bark Dog Park", cat:"parque", lat:33.068779, lng:-80.162723, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Bark Dog Park", cat:"parque", lat:33.06872, lng:-80.162612, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Knightsville Veterinary Clinic", cat:"vet", lat:33.023139, lng:-80.239896, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "summit-point": {nombre:"Summit Point", centro:[39.249547, -77.958608], tz:"America/New_York", lugares:[
  {n:"Animal Shelter/ Vet", cat:"refugio", lat:39.241222, lng:-77.89901, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "summit-south-carolina": {nombre:"Summit", centro:[33.924867, -81.422047], tz:"America/New_York", lugares:[
  {n:"Lake Murray Gromming Parlor", cat:"peluqueria", lat:34.017019, lng:-81.423443, dir:"2883 Highway 378", tel:"+1-803-892-3660", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake Murray Animal Hospital", cat:"vet", lat:34.016839, lng:-81.425289, dir:"Highway 378", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sumter-south-carolina": {nombre:"Sumter", centro:[33.920435, -80.341469], tz:"America/New_York", lugares:[
  {n:"Animal Medical Clinic", cat:"vet", lat:33.913598, lng:-80.382755, dir:"21 Pinewood Road", tel:"+1-803-773-1616", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.957788, lng:-80.386811, dir:"1265 Broad Street", tel:"+1 803-905-3211", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Hudson Veterinary Hospital", cat:"vet", lat:33.960422, lng:-80.397166, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sumterville": {nombre:"Sumterville", centro:[28.74499, -82.063418], tz:"America/New_York", lugares:[
  {n:"Lake Harlow Canine Park", cat:"parque", lat:28.750762, lng:-82.022016, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sunbury-north-carolina": {nombre:"Sunbury", centro:[36.441285, -76.61054], tz:"America/New_York", lugares:[
  {n:"Timber Shore Dog Supply", cat:"tienda", lat:36.448277, lng:-76.604642, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sunny-isles-beach": {nombre:"Sunny Isles Beach", centro:[25.942691, -80.121849], tz:"America/New_York", lugares:[
  {n:"Woof Gang Balery & Grooming", cat:"peluqueria", lat:25.934569, lng:-80.122621, dir:"17100 Collins Avenue", tel:"+1-305-974-2059", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mr & Mrs Pets Spa & Grooming", cat:"peluqueria", lat:25.931506, lng:-80.1341, dir:"3785 Northeast 163rd Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bone Zone", cat:"parque", lat:25.940946, lng:-80.124644, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sunrise": {nombre:"Sunrise", centro:[26.166689, -80.278757], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:26.147164, lng:-80.309144, dir:"12051 West Sunrise Boulevard", tel:"+1 954-916-8771", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Welleby Vet Hospital", cat:"vet", lat:26.169352, lng:-80.28559, dir:"10008 West Oakland Park Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sunset Animal Hospital", cat:"vet", lat:26.154481, lng:-80.283188, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawgrass at Welleby Park", cat:"parque", lat:26.178369, lng:-80.296953, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:26.158769, lng:-80.256834, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "suntree": {nombre:"Suntree", centro:[28.220684, -80.689513], tz:"America/New_York", lugares:[
  {n:"Woof Gang Bakery & Grooming", cat:"tienda", lat:28.230337, lng:-80.696314, dir:"7777 North Wickham Road", tel:"+1-321-428-5565", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Picture Perfect Pet Grooming", cat:"peluqueria", lat:28.215109, lng:-80.674624, dir:"6300 North Wickham Road", tel:"+1-321-610-8768", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Harbor City Animal Hospital", cat:"vet", lat:28.231099, lng:-80.696034, dir:"7670 North Wickham Road", tel:null, horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Specialty Center", cat:"vet", lat:28.232338, lng:-80.697281, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Suntree Animal Clinic Boarding Kennel", cat:"vet", lat:28.227947, lng:-80.675984, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Suntree Animal Clinic", cat:"vet", lat:28.228198, lng:-80.675988, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws On Petting Zoo", cat:"zoo", lat:28.225695, lng:-80.713968, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "surf-city-north-carolina": {nombre:"Surf City", centro:[34.427112, -77.546081], tz:"America/New_York", lugares:[
  {n:"Karen Beasley Sea Turtle Rescue and Rehabilitation Center", cat:"vet", lat:34.442104, lng:-77.567033, dir:"302 Torguga Lane", tel:"+1-910-329-0222", horas:[12.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "surfside": {nombre:"Surfside", centro:[25.878428, -80.125601], tz:"America/New_York", lugares:[
  {n:"Pets & Vets", cat:"vet", lat:25.855847, lng:-80.125123, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet House Animal Clinic", cat:"vet", lat:25.852193, lng:-80.120713, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "surfside-beach": {nombre:"Surfside Beach", centro:[33.606003, -78.973089], tz:"America/New_York", lugares:[
  {n:"Ark Animal Hospital", cat:"vet", lat:33.617108, lng:-78.978028, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Angel Pets", cat:"tienda", lat:33.601447, lng:-78.991884, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"On Point Animal Hospital", cat:"vet", lat:33.632247, lng:-78.996467, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Emergency", cat:"vet", lat:33.644846, lng:-78.980602, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sutton-west-virginia": {nombre:"Sutton", centro:[38.664111, -80.708272], tz:"America/New_York", lugares:[
  {n:"Braxton County Animal Shelter", cat:"refugio", lat:38.674948, lng:-80.719614, dir:"Otter Run Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "suwanee": {nombre:"Suwanee", centro:[34.05149, -84.0713], tz:"America/New_York", lugares:[
  {n:"Paws N Tails", cat:"peluqueria", lat:34.113201, lng:-84.155016, dir:"3020 Old Atlanta Road", tel:"+1-770-292-9100", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Suwanee Animal Hospital", cat:"vet", lat:34.061364, lng:-84.060496, dir:"85 Buford Highway North West", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSuites", cat:"refugio", lat:34.052982, lng:-84.122339, dir:"8030 McGinnis Ferry Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Laurel Springs Animal Hospital", cat:"vet", lat:34.101673, lng:-84.139555, dir:"3592 Old Atlanta Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heart of Suwanee Animal Hospital", cat:"vet", lat:34.057338, lng:-84.080463, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:34.05359, lng:-84.088274, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dogs Park", cat:"parque", lat:34.038675, lng:-84.023321, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dogs Park", cat:"parque", lat:34.038629, lng:-84.022276, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "swannanoa": {nombre:"Swannanoa", centro:[35.599829, -82.403393], tz:"America/New_York", lugares:[
  {n:"Beacon Veterinary Hospital", cat:"vet", lat:35.601824, lng:-82.397399, dir:"101 Whitson Avenue", tel:"+18286863828", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Swannanoa Valley Animal Hospital", cat:"vet", lat:35.601577, lng:-82.384037, dir:"2580 US-70", tel:"+18282991433", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Top Dog Kennel", cat:"peluqueria", lat:35.604101, lng:-82.382666, dir:"12 Cavalier Ln", tel:"+1-828-686-3175", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital East", cat:"vet", lat:35.584694, lng:-82.473651, dir:"1275 Tunnel Road", tel:"+18282986585", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Fairview Animal Hospital", cat:"vet", lat:35.541838, lng:-82.441141, dir:"867 Charlotte Highway", tel:"+18286283557", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Evolved Fish", cat:"tienda", lat:35.524899, lng:-82.413793, dir:"1334 Charlotte Highway", tel:"+18287824254", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "swepsonville": {nombre:"Swepsonville", centro:[36.021249, -79.361408], tz:"America/New_York", lugares:[
  {n:"Tri-County Veterinary Service", cat:"vet", lat:35.904928, lng:-79.30602, dir:"7716 State Highway 87", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sylva": {nombre:"Sylva", centro:[35.373729, -83.225922], tz:"America/New_York", lugares:[
  {n:"The Pet Stop of Sylva", cat:"tienda", lat:35.378729, lng:-83.212146, dir:"158 East Sylva Shopping Court", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cope Creek Animal Hospital", cat:"vet", lat:35.363664, lng:-83.202775, dir:"8 Connor Road", tel:null, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Sylva Dog Park", cat:"parque", lat:35.373843, lng:-83.231425, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fish and More Pet Store", cat:"tienda", lat:35.371654, lng:-83.208739, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "talahi-island": {nombre:"Talahi Island", centro:[32.032435, -80.974278], tz:"America/New_York", lugares:[
  {n:"Wilmington Island Animal Hospital", cat:"vet", lat:32.032044, lng:-80.966809, dir:"7802 US-80", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Charles C. Brooks Dog Park", cat:"parque", lat:32.021201, lng:-80.969066, dir:"7001 Johnny Mercer Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tallahassee": {nombre:"Tallahassee", centro:[30.438083, -84.280933], tz:"America/New_York", lugares:[
  {n:"Novey Animal Hospital", cat:"vet", lat:30.447059, lng:-84.262956, dir:"1157 East Tennessee Street", tel:"+1-850-878-8800", horas:[7.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.440791, lng:-84.254721, dir:"1624 Governors Square Boulevard", tel:"+1 850-656-0395", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.430981, lng:-84.250829, dir:"1759 Apalachee Parkway", tel:"+1 850-688-1002", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:30.441985, lng:-84.320138, dir:"2020 West Pensacola Street", tel:"+1-850-757-4997", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Clinic", cat:"vet", lat:30.456913, lng:-84.232491, dir:"2701 Waldo Palmer Lane", tel:"+1-850-878-8288", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Tallahassee Veterinary Hospital", cat:"vet", lat:30.476409, lng:-84.239332, dir:"2323 Centerville Road", tel:"+1 850 386 5151", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Allied Veterinary", cat:"vet", lat:30.47733, lng:-84.239244, dir:"2324 Centerville Road", tel:"+1-850-222-0123", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Tallahassee - Leon Animal Service Center", cat:"refugio", lat:30.449659, lng:-84.219204, dir:"1125 Easterwood Drive", tel:"+1 850-891-2950", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:30.495663, lng:-84.247489, dir:"3220 Capital Circle Northeast", tel:"+1 850-297-1500", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:30.511449, lng:-84.250222, dir:"1380 Village Square Boulevard", tel:"+1 850-668-0048", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Ox Bottom Animal Hospital", cat:"vet", lat:30.537699, lng:-84.232546, dir:"2728 Ox Bottom Road", tel:"+1-850-329-7340", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Northampton Animal Clinic", cat:"vet", lat:30.54275, lng:-84.225159, dir:"2910 Kerry Forest Parkway", tel:"+1-850-668-8031", horas:[8.0, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Top Tier K3", cat:"tienda", lat:30.43467, lng:-84.259798, dir:"1355 East Lafayette Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Los Robles Animas Hospital", cat:"vet", lat:30.456908, lng:-84.277553, dir:"1314 Thomasville Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mod Dog Boutique", cat:"peluqueria", lat:30.418747, lng:-84.280289, dir:"2245 South Monroe Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:30.436875, lng:-84.25826, dir:"1482 Apalachee Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Monroe Animal Hospital", cat:"vet", lat:30.41852, lng:-84.280404, dir:"2255 South Monroe Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nails to Tails", cat:"peluqueria", lat:30.4488, lng:-84.261001, dir:"1350 Mahan Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northwood Animal Hospital", cat:"vet", lat:30.465349, lng:-84.284647, dir:"1881 North Martin Luther King Junior Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Naturally Healthy Pet", cat:"tienda", lat:30.464625, lng:-84.271605, dir:"1850 Thomasville Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Aid Society Spay and Neuter Center", cat:"vet", lat:30.470235, lng:-84.291556, dir:"2270 Boone Boulevard", tel:null, horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Westwood Animal Hospital", cat:"vet", lat:30.439949, lng:-84.319886, dir:"216 Ausley Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bevis Vet", cat:"vet", lat:30.459286, lng:-84.24931, dir:"1919 Miccosukee Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mahan Animal Clinic", cat:"vet", lat:30.463365, lng:-84.221079, dir:"3348 Mahan Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Buck Lake Animal Hospital", cat:"vet", lat:30.464425, lng:-84.21778, dir:"3514 Mahan Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:30.463826, lng:-84.21643, dir:"4036 Lagniappe Way", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tally Spay", cat:"vet", lat:30.457889, lng:-84.36266, dir:"5021 West Tennessee Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wagland Kennel", cat:"refugio", lat:30.493578, lng:-84.11617, dir:"9572 Mahan Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:30.464541, lng:-84.269756, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"San Luis Mission Dog Park", cat:"parque", lat:30.458286, lng:-84.321597, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Capital Veterinary Specialists", cat:"vet", lat:30.458193, lng:-84.234801, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Panhandle Pet Supply", cat:"tienda", lat:30.44052, lng:-84.228067, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggie Days", cat:"refugio", lat:30.438789, lng:-84.227169, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tamarac": {nombre:"Tamarac", centro:[26.212861, -80.249771], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:26.193301, lng:-80.255699, dir:"7850 West Commercial Boulevard", tel:"+1 954-749-1555", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Woodville Dog Park", cat:"parque", lat:26.207764, lng:-80.239136, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gary B. Jones Park for People and Pups", cat:"parque", lat:26.229333, lng:-80.256071, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tampa": {nombre:"Tampa", centro:[27.94951, -82.457707], tz:"America/New_York", lugares:[
  {n:"Pawtology Grooming & Pet Market", cat:"peluqueria", lat:27.939663, lng:-82.451903, dir:"711 Harbour Post Dr", tel:"+1-813-363-7806", horas:[8.5, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Hyde Park Veterinary Clinic", cat:"vet", lat:27.937479, lng:-82.471517, dir:"1111 W Swann Ave", tel:"+1-813-259-9698", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Downtown Dogs", cat:"tienda", lat:27.936044, lng:-82.476472, dir:"1631 West Snow Circle", tel:"+1-813-250-3647", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Davis Island Animal Clinic", cat:"vet", lat:27.926809, lng:-82.453236, dir:"225 East Davis Boulevard", tel:"+1-813-251-4384", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Wag", cat:"tienda", lat:27.925568, lng:-82.453049, dir:"304 East Davis Boulevard", tel:"+1-813-258-9181", horas:[10.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Humane Society Tampa Bay", cat:"refugio", lat:27.971487, lng:-82.484227, dir:"3607 North Armenia Avenue", tel:"+1-813-876-7138", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society Tampa Bay Animal Health Center", cat:"vet", lat:27.972986, lng:-82.484486, dir:"3809 North Armenia Avenue", tel:"+1-813-870-3304", horas:[12.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:27.956244, lng:-82.508376, dir:"1540 North Dale Mabry Highway", tel:"+1-813-875-9721", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Meridian Dog Run", cat:"parque", lat:27.944638, lng:-82.449034, dir:"1045 East Cumberland Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Deputy Kotfila Memorial Dog Park", cat:"parque", lat:27.953947, lng:-82.448253, dir:"626 North Raymond Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"4th and Angel Dog Park", cat:"parque", lat:27.958328, lng:-82.43906, dir:"1802 East 4th Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pups Pub", cat:"parque", lat:27.944519, lng:-82.482158, dir:"2202 Kennedy Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:27.962475, lng:-82.505955, dir:"2320 North Dale Mabry Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Beach Park Animal Clinic", cat:"vet", lat:27.945175, lng:-82.517697, dir:"4347 West Kennedy Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gandy Animal Hospital", cat:"vet", lat:27.893113, lng:-82.525606, dir:"4714 Gandy Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Julian B. Lane Riverfront Park - Dog Park", cat:"parque", lat:27.954934, lng:-82.465593, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Water Works Dog Park", cat:"parque", lat:27.958565, lng:-82.462803, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Onyva Dog Spa", cat:"peluqueria", lat:27.936877, lng:-82.482834, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bay Paws Ybor", cat:"parque", lat:27.956292, lng:-82.423245, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Palma Ceia Dog Park", cat:"parque", lat:27.924826, lng:-82.490074, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Davis Islands Dog Beach", cat:"parque", lat:27.912506, lng:-82.446023, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Royal Pets", cat:"peluqueria", lat:27.952921, lng:-82.501753, dir:null, tel:null, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Davis Islands Dog Park", cat:"parque", lat:27.909703, lng:-82.446244, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Tails", cat:"tienda", lat:27.945172, lng:-82.517556, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:27.907962, lng:-82.505598, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bayshore Animal Clinic", cat:"tienda", lat:27.893237, lng:-82.489395, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pupp Tent", cat:"tienda", lat:27.893434, lng:-82.497209, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"M South Dog Park", cat:"parque", lat:27.890305, lng:-82.516889, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bowery Bayside Dog Park", cat:"parque", lat:27.873902, lng:-82.527548, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tangelo-park": {nombre:"Tangelo Park", centro:[28.455767, -81.44629], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:28.445975, lng:-81.425446, dir:"8231 John Young Parkway", tel:"+1 407-351-2336", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Cool Zoo Wildlife Center", cat:"zoo", lat:28.459187, lng:-81.468515, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tangerine": {nombre:"Tangerine", centro:[28.763252, -81.630639], tz:"America/New_York", lugares:[
  {n:"Scenthound", cat:"peluqueria", lat:28.779143, lng:-81.622861, dir:null, tel:null, horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Sullivan Ranch Dog Park", cat:"parque", lat:28.786822, lng:-81.608366, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tappahannock": {nombre:"Tappahannock", centro:[37.928318, -76.860038], tz:"America/New_York", lugares:[
  {n:"Essex County Animal Shelter", cat:"refugio", lat:37.933221, lng:-76.870341, dir:"540 Airport Road", tel:"+1-804-443-0726", horas:[11.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "tarpon-springs": {nombre:"Tarpon Springs", centro:[28.147096, -82.756367], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:28.144846, lng:-82.742652, dir:"40962 Highway 19 North", tel:"+1 727-939-2937", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Tarpon Springs Dog Park", cat:"parque", lat:28.154234, lng:-82.753238, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Foster's Exotic Pets", cat:"tienda", lat:28.13692, lng:-82.740833, dir:null, tel:null, horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Lovers Of Tarpon", cat:"tienda", lat:28.135215, lng:-82.74143, dir:null, tel:null, horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Anderson Park", cat:"parque", lat:28.135679, lng:-82.740027, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tarrant": {nombre:"Tarrant", centro:[33.583437, -86.772768], tz:"America/Chicago", lugares:[
  {n:"Dog Relief Area", cat:"parque", lat:33.560092, lng:-86.751905, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "taylor-mill": {nombre:"Taylor Mill", centro:[38.997562, -84.496331], tz:"America/New_York", lugares:[
  {n:"Kenton County Animal Services", cat:"refugio", lat:39.002628, lng:-84.533581, dir:"1020 Mary Laidley Road", tel:"+1-859-356-7400", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "taylors": {nombre:"Taylors", centro:[34.920395, -82.296227], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.937524, lng:-82.279979, dir:"6019 Wade Hampton Boulevard", tel:"+1 864-968-2024", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"FurWell Veterinary Hospital", cat:"vet", lat:34.898977, lng:-82.288298, dir:"1901 Brushy Creek Road", tel:"+1-864-292-6433", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sunnyside Grooming Salon", cat:"peluqueria", lat:34.923671, lng:-82.307686, dir:"10 Reid School Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Angies Grooming Salon", cat:"peluqueria", lat:34.931646, lng:-82.286617, dir:"5040 Wade Hampton Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sunrise Animal Hospital", cat:"vet", lat:34.91814, lng:-82.31676, dir:"8 Edwards Mill Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ready Vets", cat:"vet", lat:34.933867, lng:-82.281021, dir:"5314 Wade Hampton Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Valley Walk Animal Hospital", cat:"vet", lat:34.966948, lng:-82.321587, dir:"3075 Locust Hill Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pup in a Tub Grooming", cat:"tienda", lat:34.872268, lng:-82.25618, dir:"435 The Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Hospital", cat:"vet", lat:34.872148, lng:-82.25624, dir:"429 The Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hudson Road Veterinary Clinic", cat:"vet", lat:34.893263, lng:-82.290316, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lucy’s Dog Park", cat:"parque", lat:34.967672, lng:-82.281995, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Double Springs Veterinary Hospital", cat:"vet", lat:34.977828, lng:-82.296256, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "taylorsville-kentucky": {nombre:"Taylorsville", centro:[38.03173, -85.342535], tz:"America/New_York", lugares:[
  {n:"Spencer County Animal Control", cat:"refugio", lat:38.043838, lng:-85.342919, dir:"22 Spears Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Elk Creek Animal Hospital", cat:"vet", lat:38.104709, lng:-85.372426, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "taylorsville-north-carolina": {nombre:"Taylorsville", centro:[35.92194, -81.176342], tz:"America/New_York", lugares:[
  {n:"Stony Point Animal Clinic", cat:"vet", lat:35.866097, lng:-81.051045, dir:"11 Ruritan Park Road", tel:"+17045852410", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "taylortown": {nombre:"Taylortown", centro:[35.207656, -79.485865], tz:"America/New_York", lugares:[
  {n:"Grooming Room", cat:"peluqueria", lat:35.204556, lng:-79.482976, dir:"111 Central Park Avenue", tel:"+19109867692", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vanguard Veterinary Hospital", cat:"vet", lat:35.214053, lng:-79.509769, dir:"1995 Juniper Lake Road", tel:"+19104202902", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "teays-valley": {nombre:"Teays Valley", centro:[38.449426, -81.940537], tz:"America/New_York", lugares:[
  {n:"Belly Scrubs", cat:"peluqueria", lat:38.449383, lng:-81.941333, dir:"119 WV-34", tel:"+1-304-760-8989", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.458766, lng:-81.932377, dir:"102 Liberty Square", tel:"+1-681-235-8060", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "tega-cay": {nombre:"Tega Cay", centro:[35.051645, -81.009435], tz:"America/New_York", lugares:[
  {n:"Pet Kennel", cat:"refugio", lat:35.102478, lng:-80.937894, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "temple-terrace": {nombre:"Temple Terrace", centro:[28.035296, -82.38926], tz:"America/New_York", lugares:[
  {n:"Safari Animal Clinic", cat:"vet", lat:28.054801, lng:-82.37912, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Kennel", cat:"refugio", lat:28.034811, lng:-82.415854, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ten-broeck": {nombre:"Ten Broeck", centro:[38.297014, -85.581072], tz:"America/Chicago", lugares:[
  {n:"Feeders Pet Supply", cat:"tienda", lat:38.306472, lng:-85.573654, dir:"9486 Brownsboro Road", tel:null, horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dr. John's Veterinary", cat:"vet", lat:38.306287, lng:-85.573895, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tequesta": {nombre:"Tequesta", centro:[26.968112, -80.128654], tz:"America/New_York", lugares:[
  {n:"Blue Pointe Bar And Grill", cat:"resto", lat:26.976742, lng:-80.086594, dir:"18701 Southeast Federal Highway", tel:"+1-561-406-6270", horas:[11.0, 24.0], nota:"Dato de OpenStreetMap"},
  {n:"Lush Puppy Pet Resort", cat:"peluqueria", lat:26.928584, lng:-80.142139, dir:"400 Capital Street", tel:"+1 561-745-1719", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming Jupiter Farms", cat:"peluqueria", lat:26.939248, lng:-80.193402, dir:"10164 Indiantown Road", tel:"+1-561-320-9784", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "terry": {nombre:"Terry", centro:[32.096263, -90.294257], tz:"America/Chicago", lugares:[
  {n:"O'Keefe Corral", cat:"refugio", lat:32.16738, lng:-90.317832, dir:"Kimbell Road", tel:"+1-601-308-0516", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Diana's Sassy Scissors", cat:"peluqueria", lat:32.189616, lng:-90.26459, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "the-acreage": {nombre:"The Acreage", centro:[26.780163, -80.264698], tz:"America/New_York", lugares:[
  {n:"Scoop De Doo Inc", cat:"refugio", lat:26.786245, lng:-80.263351, dir:"14155 74th St N", tel:"+1 561-793-9191", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital", cat:"vet", lat:26.781551, lng:-80.292528, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "the-forum": {nombre:"The Forum", centro:[26.623425, -81.798485], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:26.614361, lng:-81.801527, dir:"9380 Dynasty Drive", tel:"+1 239-938-0201", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Gulf Coast Humane Society", cat:"refugio", lat:26.640384, lng:-81.826486, dir:"2010 Arcadia Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vive Dog Park", cat:"parque", lat:26.621857, lng:-81.804826, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "the-villages": {nombre:"The Villages", centro:[28.926998, -82.004176], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:28.930156, lng:-82.019783, dir:"3667 Wedgewood Lane", tel:"+1 352-561-3125", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "thomasville-georgia": {nombre:"Thomasville", centro:[30.836582, -83.978781], tz:"America/New_York", lugares:[
  {n:"Petsense", cat:"tienda", lat:30.855705, lng:-83.947715, dir:"15149 US-19 South", tel:"+1 229-226-8787", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Thomasville Animal Hospital", cat:"vet", lat:30.835844, lng:-83.956852, dir:"1103 Smith Avenue", tel:null, horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Faith And Love Grooming & Boarding Shop", cat:"peluqueria", lat:30.827934, lng:-83.986929, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Salon Grooming & Boarding", cat:"peluqueria", lat:30.832881, lng:-83.947438, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Stop", cat:"tienda", lat:30.856781, lng:-83.953582, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Thomasville Humane Society", cat:"refugio", lat:30.855554, lng:-83.943651, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Hospital", cat:"vet", lat:30.780567, lng:-84.065185, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kennels", cat:"refugio", lat:30.782245, lng:-84.067067, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "thomasville-north-carolina": {nombre:"Thomasville", centro:[35.883179, -80.081817], tz:"America/New_York", lugares:[
  {n:"PawPal Place", cat:"peluqueria", lat:35.883719, lng:-80.080832, dir:"32 West Main Street", tel:"+1-336-689-6491", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Charmin's Pet Store", cat:"tienda", lat:35.876248, lng:-80.078354, dir:"400 Randolph Street", tel:"+1-336-313-8793", horas:[10.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Thomasville Veterinary Hospital", cat:"vet", lat:35.900388, lng:-80.067343, dir:"724 National Highway", tel:"+1-336-715-5209", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Southgate Veterinary Clinic", cat:"vet", lat:35.865006, lng:-80.068315, dir:"102 Cloninger Drive", tel:"+1-336-475-3050", horas:[9.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Woofworx", cat:"peluqueria", lat:35.841504, lng:-80.090909, dir:"304 Cedar Lodge Road", tel:"+1-336-225-8486", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawsitively Divine", cat:"peluqueria", lat:35.868799, lng:-80.074333, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "thompson-s-station": {nombre:"Thompson's Station", centro:[35.802011, -86.911391], tz:"America/Chicago", lugares:[
  {n:"Nutro Dog Park", cat:"parque", lat:35.820796, lng:-86.895146, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "thomson": {nombre:"Thomson", centro:[33.466325, -82.502609], tz:"America/New_York", lugares:[
  {n:"Reese Veterinary Hospital", cat:"vet", lat:33.482043, lng:-82.504904, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "thunderbolt": {nombre:"Thunderbolt", centro:[32.033544, -81.049834], tz:"America/New_York", lugares:[
  {n:"Daffin Dog Park", cat:"parque", lat:32.043365, lng:-81.078188, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tice": {nombre:"Tice", centro:[26.674735, -81.814999], tz:"America/New_York", lugares:[
  {n:"Lake Ariza", cat:"zoo", lat:26.672874, lng:-81.798329, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tildenville": {nombre:"Tildenville", centro:[28.540012, -81.604007], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:28.525017, lng:-81.581901, dir:"3077 Daniels Road", tel:"+1 407-905-9955", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"West Orange Veterinary", cat:"vet", lat:28.518839, lng:-81.618352, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "timberlake-virginia": {nombre:"Timberlake", centro:[37.33022, -79.245423], tz:"America/New_York", lugares:[
  {n:"Timberlake Animal Hospital", cat:"vet", lat:37.33914, lng:-79.237336, dir:"20608 Timberlake Road", tel:"+1 434-239-4475", horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:37.346953, lng:-79.191254, dir:"4026 Wards Road", tel:"+1 434-237-0036", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Bark All About It", cat:"peluqueria", lat:37.331243, lng:-79.245201, dir:"21289 Timberlake Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Cabana", cat:"peluqueria", lat:37.327035, lng:-79.248722, dir:"21664 Timberlake Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tiptonville": {nombre:"Tiptonville", centro:[36.377703, -89.485327], tz:"America/Chicago", lugares:[
  {n:"Sunkist Dog Park", cat:"parque", lat:36.350844, lng:-89.451199, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "titusville": {nombre:"Titusville", centro:[28.612624, -80.807954], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:28.551593, lng:-80.843265, dir:"3055 Columbia Boulevard 117", tel:"+1 321-383-3335", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Young's Animal Hospital", cat:"vet", lat:28.557299, lng:-80.821963, dir:"1795 Cheney Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Garden Street Animal Hospital", cat:"vet", lat:28.615687, lng:-80.831018, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:28.585665, lng:-80.80284, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A-1 Exotic Pets", cat:"tienda", lat:28.556877, lng:-80.807425, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "toast": {nombre:"Toast", centro:[36.499234, -80.634218], tz:"America/New_York", lugares:[
  {n:"Oasis Pet Spa", cat:"peluqueria", lat:36.500945, lng:-80.63237, dir:"1107 West Pine Street", tel:"+1-336-415-5848", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Foothills Pet Healthcare Clinic", cat:"vet", lat:36.503073, lng:-80.664946, dir:"111 Healthy Trail", tel:"+13367890009", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Services", cat:"vet", lat:36.526587, lng:-80.625704, dir:"West Lebanon Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "toccoa": {nombre:"Toccoa", centro:[34.577437, -83.332881], tz:"America/New_York", lugares:[
  {n:"Toccoa-Stephens County Humane Shelter", cat:"refugio", lat:34.598008, lng:-83.31659, dir:"1747 Scenic Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tomoka-farms-village": {nombre:"Tomoka Farms Village", centro:[29.119822, -81.068841], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:29.112327, lng:-81.034283, dir:"5513 South Williamson Boulevard", tel:"+1 386-756-2923", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "town-n-country": {nombre:"Town 'n' Country", centro:[27.996727, -82.581932], tz:"America/New_York", lugares:[
  {n:"Baycrest Animal Clinic", cat:"vet", lat:27.983771, lng:-82.567992, dir:"5819 Memorial Highway", tel:"+1-813-886-9866", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:28.017148, lng:-82.614374, dir:"11665 West Hillsborough Avenue", tel:"+1 813-891-6371", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"North Bay Animal Hospital", cat:"vet", lat:28.002814, lng:-82.595363, dir:"9801 West Hillsborough Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Purple Pawz Pet Resort, LLC", cat:"refugio", lat:28.004639, lng:-82.596941, dir:"10037 West Hillsborough Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:28.017044, lng:-82.61458, dir:"11665 West Hillsborough Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:28.004975, lng:-82.597558, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:28.00965, lng:-82.609679, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mainsail Dog Park", cat:"parque", lat:27.993478, lng:-82.549985, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northwest Dog Park", cat:"parque", lat:28.027712, lng:-82.586386, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northwest Dog Park", cat:"parque", lat:28.028437, lng:-82.583756, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "travelers-rest": {nombre:"Travelers Rest", centro:[34.967495, -82.443695], tz:"America/New_York", lugares:[
  {n:"Travelers Rest Animal Hospital", cat:"vet", lat:34.965845, lng:-82.436545, dir:"6704 State Park Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Doggie Parlor", cat:"tienda", lat:34.972165, lng:-82.434023, dir:"212 North Poinsett Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All About Pets", cat:"vet", lat:34.959493, lng:-82.441276, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "trent-woods": {nombre:"Trent Woods", centro:[35.082104, -77.086338], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.102102, lng:-77.084542, dir:"3007 Drive Martin Luther King Jr Boulevard", tel:"+1 252-637-2170", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:35.100346, lng:-77.098061, dir:"2029 South Glenburnie Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"tienda", lat:35.100584, lng:-77.098104, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bill's Pet Shop", cat:"tienda", lat:35.106667, lng:-77.082925, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "trenton": {nombre:"Trenton", centro:[29.613294, -82.81762], tz:"America/New_York", lugares:[
  {n:"Trenton Animal Hospital", cat:"vet", lat:29.616955, lng:-82.818671, dir:"603 N Main St", tel:"+1-352-463-7100", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "triadelphia": {nombre:"Triadelphia", centro:[40.052573, -80.62841], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:40.053865, lng:-80.599934, dir:"525 Cabela Drive", tel:"+1 304-547-0807", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "triangle-virginia": {nombre:"Triangle", centro:[38.545149, -77.332742], tz:"America/New_York", lugares:[
  {n:"Pearl Veterinary Hospital", cat:"vet", lat:38.549395, lng:-77.333624, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "trinity-florida": {nombre:"Trinity", centro:[28.180163, -82.654212], tz:"America/New_York", lugares:[
  {n:"Noah's Ark Farm", cat:"zoo", lat:28.152311, lng:-82.642505, dir:"12971 Tyler Run Avenue", tel:"+1-727-455-4985", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "troutman": {nombre:"Troutman", centro:[35.700583, -80.888231], tz:"America/New_York", lugares:[
  {n:"Zootastic Park", cat:"zoo", lat:35.696548, lng:-80.848035, dir:"448 Pilch Road", tel:"+1 704-245-6446", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Troutman Animal Hospital", cat:"vet", lat:35.728631, lng:-80.862157, dir:"700 Murdock Road", tel:"+1-704-878-9904", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"}
 ]},
 "troy": {nombre:"Troy", centro:[31.808768, -85.969951], tz:"America/Chicago", lugares:[
  {n:"PetSense", cat:"tienda", lat:31.780751, lng:-85.955318, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "trussville": {nombre:"Trussville", centro:[33.619627, -86.608434], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:33.609491, lng:-86.624971, dir:"5451 Patrick Way", tel:"+1 205-517-6989", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "tuckahoe-virginia": {nombre:"Tuckahoe", centro:[37.590146, -77.556376], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:37.604804, lng:-77.565884, dir:"1520 North Parham Road", tel:"+1 804-591-4049", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"for the love of pete!", cat:"tienda", lat:37.574183, lng:-77.518234, dir:"322 Libbie Avenue", tel:"+1-804-288-3674", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tuckahoe Veterinary Hospital", cat:"vet", lat:37.604395, lng:-77.569545, dir:"9001 Quioccasin Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Click & Fish Aquariums", cat:"tienda", lat:37.601176, lng:-77.566549, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pooches & Smootches", cat:"tienda", lat:37.595661, lng:-77.575246, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:37.605283, lng:-77.591828, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tucker-georgia": {nombre:"Tucker", centro:[33.85327, -84.220073], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.842927, lng:-84.253075, dir:"4023 Lavista Road", tel:"+1 770-414-5126", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"DeKalb Animal Hospital", cat:"vet", lat:33.850865, lng:-84.215565, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Henderson Park Dog Park", cat:"parque", lat:33.868261, lng:-84.228543, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tullahoma": {nombre:"Tullahoma", centro:[35.362491, -86.209977], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.379483, lng:-86.225939, dir:"1600 North Jackson Street", tel:"+1 931-588-3168", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "tupelo-mississippi": {nombre:"Tupelo", centro:[34.257607, -88.703386], tz:"America/Chicago", lugares:[
  {n:"Ward Veterinary Services", cat:"vet", lat:34.269466, lng:-88.773798, dir:"845 North Coley Road", tel:"+1-662-891-2737", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Tupelo Buffalo Park", cat:"zoo", lat:34.289647, lng:-88.771354, dir:"2272 Coley Road", tel:"+1-662-844-8709", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tuscaloosa": {nombre:"Tuscaloosa", centro:[33.209561, -87.567526], tz:"America/Chicago", lugares:[
  {n:"Tuscaloosa Metro Animal Shelter", cat:"refugio", lat:33.179044, lng:-87.575774, dir:"3140 35th Street", tel:null, horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.199381, lng:-87.52642, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:33.186746, lng:-87.529286, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital", cat:"vet", lat:33.149722, lng:-87.546623, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"69 South Veterinary Clinic", cat:"vet", lat:33.100697, lng:-87.554707, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tuscumbia": {nombre:"Tuscumbia", centro:[34.731881, -87.702863], tz:"America/Chicago", lugares:[
  {n:"JustFurPets Grooming", cat:"peluqueria", lat:34.712981, lng:-87.71717, dir:"1206 Highway 72 West", tel:"+1-256-320-7834", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "tyrone": {nombre:"Tyrone", centro:[33.471325, -84.5972], tz:"America/New_York", lugares:[
  {n:"Royal Animal Refuge", cat:"refugio", lat:33.493874, lng:-84.57697, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tysons": {nombre:"Tysons", centro:[38.918592, -77.231472], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.917481, lng:-77.227701, dir:"8204 Leesburg Pike", tel:"+1 703-556-8715", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:38.930026, lng:-77.236634, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:38.931283, lng:-77.233714, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Dog Park", cat:"parque", lat:38.931336, lng:-77.233352, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetMedic", cat:"vet", lat:38.930311, lng:-77.243818, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "union-city-tennessee": {nombre:"Union City", centro:[36.42423, -89.05701], tz:"America/Chicago", lugares:[
  {n:"Reelfoot Animal Hospital", cat:"vet", lat:36.41388, lng:-89.062239, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Union City Animal Services", cat:"refugio", lat:36.438321, lng:-89.058633, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "union-kentucky": {nombre:"Union", centro:[38.945895, -84.680501], tz:"America/New_York", lugares:[
  {n:"PetWow", cat:"vet", lat:38.973296, lng:-84.659802, dir:null, tel:null, horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "union-mill": {nombre:"Union Mill", centro:[38.806631, -77.398219], tz:"America/New_York", lugares:[
  {n:"Arafa Arabians of the Nile", cat:"refugio", lat:38.809987, lng:-77.41541, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "union-park": {nombre:"Union Park", centro:[28.569626, -81.232256], tz:"America/New_York", lugares:[
  {n:"Veternary Emergency Clinic of Central Florida", cat:"vet", lat:28.54275, lng:-81.225362, dir:"11011 Lake Underhill Road", tel:"+1-407-644-4449", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "university": {nombre:"University", centro:[28.597661, -81.215825], tz:"America/New_York", lugares:[
  {n:"Alafaya Trail Animal Hospital", cat:"vet", lat:28.627716, lng:-81.20737, dir:"2985 Alafaya Trail", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "university-florida": {nombre:"University", centro:[28.069205, -82.434585], tz:"America/New_York", lugares:[
  {n:"Tampa Paws Pet Salon", cat:"peluqueria", lat:28.088801, lng:-82.405244, dir:"15305 Amberly Drive", tel:"+1-813-866-7297", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fancy That Dog Grooming", cat:"peluqueria", lat:28.069664, lng:-82.443873, dir:"1402 E Fletcher Ave", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:28.056255, lng:-82.429026, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "university-of-virginia": {nombre:"University of Virginia", centro:[38.045089, -78.516056], tz:"America/New_York", lugares:[
  {n:"Posh Pets Supply Co", cat:"tienda", lat:38.051234, lng:-78.50536, dir:"1055 Millmont Street", tel:"+1-434-984-5941", horas:[9.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.059067, lng:-78.496443, dir:"1621 Emmet Street North", tel:"+1 434-244-6338", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Georgetown Equine Hospital", cat:"vet", lat:38.063486, lng:-78.507266, dir:"210 Georgetown Way", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Georgetown Veterinary Hospital", cat:"vet", lat:38.063398, lng:-78.506679, dir:"200 Georgetown Way", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "upper-grand-lagoon": {nombre:"Upper Grand Lagoon", centro:[30.160902, -85.744208], tz:"America/Chicago", lugares:[
  {n:"Magnolia Bay Animal Hospital", cat:"vet", lat:30.16551, lng:-85.756734, dir:"2016 Thomas Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"UrgentCareVet Panama City", cat:"vet", lat:30.180298, lng:-85.713731, dir:"4121 US 98", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "valdosta": {nombre:"Valdosta", centro:[30.832702, -83.278485], tz:"America/New_York", lugares:[
  {n:"There's Something Fishy", cat:"tienda", lat:30.847191, lng:-83.280939, dir:"1306 North Ashley Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Town & Country Grooming", cat:"peluqueria", lat:30.837102, lng:-83.280231, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lowndes County Animal Shelter", cat:"refugio", lat:30.806822, lng:-83.264597, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Azalea City Animal Hospital", cat:"vet", lat:30.873972, lng:-83.275925, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Care Center of Valdosta", cat:"vet", lat:30.800277, lng:-83.245571, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Health Center", cat:"vet", lat:30.880739, lng:-83.273704, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Run", cat:"parque", lat:30.912062, lng:-83.25297, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Area", cat:"parque", lat:30.911878, lng:-83.252316, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Freedom Park Dog Park", cat:"parque", lat:30.912048, lng:-83.251869, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Dog Area", cat:"parque", lat:30.912229, lng:-83.252313, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "valparaiso": {nombre:"Valparaiso", centro:[30.508531, -86.502728], tz:"America/Chicago", lugares:[
  {n:"Emergency Veterinary Clinic Niceville", cat:"vet", lat:30.517964, lng:-86.502864, dir:"203 Government Avenue", tel:"+1-850-729-3335", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "van-wyck": {nombre:"Van Wyck", centro:[34.85848, -80.845905], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:34.938224, lng:-80.834647, dir:"7790 Charlotte Highway", tel:"+1 803-650-4005", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Southern Paws", cat:"vet", lat:34.937623, lng:-80.838499, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "varina": {nombre:"Varina", centro:[37.44434, -77.351485], tz:"America/New_York", lugares:[
  {n:"New Market Veterinary Clinic", cat:"vet", lat:37.447385, lng:-77.357082, dir:"2458 New Market Road", tel:"+1-804-795-4350", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dorey Dog Park", cat:"parque", lat:37.460741, lng:-77.339432, dir:"7399 Dorey Park Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vass": {nombre:"Vass", centro:[35.256285, -79.282193], tz:"America/New_York", lugares:[
  {n:"Five Points Pet Resort at Vass", cat:"refugio", lat:35.225463, lng:-79.319827, dir:"5071 US 1", tel:"+1910-692-2275", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sandhills Spay Neuter Veterinary Clinic", cat:"vet", lat:35.225456, lng:-79.320158, dir:"5071 US 1", tel:"+1910-725-8188", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Animal Emergency Services", cat:"vet", lat:35.225195, lng:-79.32031, dir:"5091 US 1", tel:"+1910-246-0405", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "venice": {nombre:"Venice", centro:[27.099832, -82.444283], tz:"America/New_York", lugares:[
  {n:"Father Fish Aquarium", cat:"tienda", lat:27.099495, lng:-82.43584, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Stars", cat:"refugio", lat:27.099539, lng:-82.432952, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:27.107893, lng:-82.437531, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "venice-gardens": {nombre:"Venice Gardens", centro:[27.073523, -82.409651], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:27.076142, lng:-82.424181, dir:"1651 US 41 By-Pass", tel:"+1-941-497-6254", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "vero-beach": {nombre:"Vero Beach", centro:[27.638716, -80.39754], tz:"America/New_York", lugares:[
  {n:"Treasure Coast Corals", cat:"tienda", lat:27.641644, lng:-80.399483, dir:"2239 14th Avenue", tel:"+1-772-770-2782", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dr. Dan's Animal Hospital", cat:"vet", lat:27.631961, lng:-80.398753, dir:"1624 14th Avenue", tel:"+1-772-567-8468", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Florida Veterinary League", cat:"vet", lat:27.626172, lng:-80.388733, dir:"1360 US 1", tel:"+1-772-567-3070", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Village Pet Inn", cat:"refugio", lat:27.623756, lng:-80.393111, dir:"968 12th Street", tel:"+1-772-569-4899", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Village Pet Shop", cat:"tienda", lat:27.623753, lng:-80.39297, dir:"964 12th Street", tel:"+1-772-569-4825", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Village Pet Clinic", cat:"vet", lat:27.623749, lng:-80.392851, dir:"960 12th Street", tel:"+1-772-569-4553", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Mermaid Vet Hospital", cat:"vet", lat:27.636803, lng:-80.430498, dir:"1905 43rd Avenue", tel:"+1 772-925-1625", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Vero Beach Veterinary Hospital", cat:"vet", lat:27.636774, lng:-80.430548, dir:"1905 43rd Avenue", tel:"+1-772-562-0200", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Cat Hospital", cat:"vet", lat:27.635948, lng:-80.445878, dir:"1820 58th Avenue", tel:"+1-772-778-7705", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Precision Kuts Pet Grooming", cat:"peluqueria", lat:27.596388, lng:-80.383575, dir:"465 3rd Lane Southwest", tel:"+1-772-794-9224", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vero Beach Dog Park", cat:"parque", lat:27.655551, lng:-80.369234, dir:"3449 Indian River Drive East", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waterford Lakes Dog Park (Residents)", cat:"parque", lat:27.618126, lng:-80.399669, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vero-lake-estates": {nombre:"Vero Lake Estates", centro:[27.745587, -80.528292], tz:"America/New_York", lugares:[
  {n:"Treasure Coast Animal Emergency and Specialty Hospital", cat:"vet", lat:27.719982, lng:-80.461943, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Vero Beach & Indian River County", cat:"refugio", lat:27.735008, lng:-80.455028, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "verona-virginia": {nombre:"Verona", centro:[38.202077, -79.008365], tz:"America/New_York", lugares:[
  {n:"Middle River Veterinary Hospital", cat:"vet", lat:38.208303, lng:-79.004194, dir:"252 Rolla Mill Road", tel:"+1-540-248-7203", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Valley Herd Health", cat:"vet", lat:38.200128, lng:-79.011638, dir:"350 Lee Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Emergency Services", cat:"vet", lat:38.20276, lng:-79.006867, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "verona-walk": {nombre:"Verona Walk", centro:[26.087259, -81.678731], tz:"America/New_York", lugares:[
  {n:"Sabal Palm Animal Hospital", cat:"vet", lat:26.11101, lng:-81.688581, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "versailles-kentucky": {nombre:"Versailles", centro:[38.052576, -84.729946], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:38.052882, lng:-84.712712, dir:"366 Kroger Way", tel:"+1 859-214-5005", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Bluegrass Equine Surgery", cat:"vet", lat:38.048252, lng:-84.665554, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vestavia-hills": {nombre:"Vestavia Hills", centro:[33.448799, -86.787949], tz:"America/Chicago", lugares:[
  {n:"Rocky Ridge Animal Clinic & Pet Hotel", cat:"vet", lat:33.423116, lng:-86.772809, dir:"2488 Rocky Ridge Road", tel:"+1-205-267-1300", horas:[7.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Alford Avenue Veterinary Hospital", cat:"vet", lat:33.432078, lng:-86.821973, dir:"2107 Marlboro Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vestridge Animal Clinic", cat:"vet", lat:33.419906, lng:-86.800846, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"JR's Pet Grooming", cat:"peluqueria", lat:33.432219, lng:-86.821895, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Avenues of Lakeshore Bark Park", cat:"parque", lat:33.4324, lng:-86.845334, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vienna-virginia": {nombre:"Vienna", centro:[38.901373, -77.265176], tz:"America/New_York", lugares:[
  {n:"Wag N Wash", cat:"tienda", lat:38.900039, lng:-77.26632, dir:"144 Maple Avenue West", tel:"+1-571-569-0008", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Hope Advanced Veterinary Center", cat:"vet", lat:38.902481, lng:-77.261118, dir:"140 Park Street Southeast", tel:"+1 703-281-5121", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.903677, lng:-77.261003, dir:"225 Maple Avenue East", tel:"+1 703-242-1492", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Oakton-Vienna Veterinary Hospital", cat:"vet", lat:38.9058, lng:-77.261086, dir:"320A Maple Avenue East", tel:"+1-703-938-2800", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vienna Dog Park", cat:"parque", lat:38.888754, lng:-77.272979, dir:"700 700 Courthouse Road SW", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Comforts", cat:"refugio", lat:38.879831, lng:-77.26422, dir:"9220 Brian Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vienna Animal Hospital", cat:"vet", lat:38.894261, lng:-77.274841, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vienna-west-virginia": {nombre:"Vienna", centro:[39.320887, -81.551264], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.3039, lng:-81.552671, dir:"100 Grand Central Mall", tel:"+1 304-699-3739", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.304356, lng:-81.551316, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Hills Dog Park", cat:"parque", lat:39.316104, lng:-81.507592, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "viera": {nombre:"Viera", centro:[28.243006, -80.730152], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:28.236632, lng:-80.725852, dir:"7161 Lake Andrew Drive", tel:"+1 321-482-5913", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:28.233778, lng:-80.721921, dir:"7201 Shoppes Drive", tel:"+1 321-637-0282", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Scenthound", cat:"peluqueria", lat:28.265864, lng:-80.727084, dir:"2105 Viera Boulevard", tel:"+1 321-341-1238", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:28.267647, lng:-80.719552, dir:"5410 Murrell Road", tel:"+1-321-294-4102", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brevard Zoo", cat:"zoo", lat:28.225313, lng:-80.714874, dir:"8225 North Wickham Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veg", cat:"vet", lat:28.265505, lng:-80.727481, dir:"2115 Viera Boulevard", tel:null, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:28.199063, lng:-80.748567, dir:"3339 Del Webb Circle", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Viera Petworks", cat:"tienda", lat:28.2449, lng:-80.729268, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Viera Dog Park", cat:"parque", lat:28.220023, lng:-80.722231, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Viera Dog Park", cat:"parque", lat:28.219413, lng:-80.722109, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Bark Dog Park", cat:"parque", lat:28.216793, lng:-80.747603, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "villa-rica": {nombre:"Villa Rica", centro:[33.732052, -84.919108], tz:"America/New_York", lugares:[
  {n:"Petsense", cat:"tienda", lat:33.719332, lng:-84.934838, dir:"606 GA-61", tel:"+1-678-941-3665", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Villa Rica Animal Hospital", cat:"vet", lat:33.762002, lng:-84.94775, dir:"1700 Rockmart Road", tel:"+1-770-459-1145", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "vinings": {nombre:"Vinings", centro:[33.864826, -84.464374], tz:"America/New_York", lugares:[
  {n:"Wild Birds Unlimited", cat:"tienda", lat:33.879937, lng:-84.462272, dir:"2980 Cobb Parkway South", tel:"+1-770-433-2676", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.882446, lng:-84.459864, dir:"2955 Cobb Parkway South", tel:"+1 770-952-9701", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.888333, lng:-84.476659, dir:"2540 Cumberland Boulevard", tel:"+1 770-432-8250", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"K-9 Coach", cat:"refugio", lat:33.835776, lng:-84.472609, dir:"4870 South Atlanta Road", tel:"+1-404-603-9744", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Red Bandanna Pet Food", cat:"tienda", lat:33.85106, lng:-84.429168, dir:"3524 Northside Parkway Northwest", tel:"+1-404-231-1333", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.842562, lng:-84.504869, dir:"4480 South Cobb Drive", tel:"+1 770-803-9481", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Wants Westside Village", cat:"tienda", lat:33.816926, lng:-84.448044, dir:"2246 Marietta Boulevard Northwest", tel:"+1-404-600-4996", horas:[10.5, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Uptown Pups", cat:"tienda", lat:33.85949, lng:-84.480721, dir:"2355 Cumberland Parkway Southeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park", cat:"parque", lat:33.874129, lng:-84.486182, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dandy Dogs", cat:"peluqueria", lat:33.856538, lng:-84.49262, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ballpark Dog Park", cat:"parque", lat:33.893096, lng:-84.470227, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Village Vets", cat:"vet", lat:33.848364, lng:-84.430299, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vape Ape", cat:"zoo", lat:33.82844, lng:-84.491395, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vinton-virginia": {nombre:"Vinton", centro:[37.280022, -79.897567], tz:"America/New_York", lugares:[
  {n:"Pawsh Salon for Dogs", cat:"peluqueria", lat:37.279736, lng:-79.896903, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "virginia-beach": {nombre:"Virginia Beach", centro:[36.849658, -75.976075], tz:"America/New_York", lugares:[
  {n:"Virginia Beach Animal Care and Adoption Center", cat:"refugio", lat:36.830289, lng:-75.998368, dir:"341 Birdneck Road", tel:"+17573854444", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.848835, lng:-76.024201, dir:"501 Hilltop Plaza", tel:"+1 757-425-0286", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Town & Country Pet Grooming", cat:"peluqueria", lat:36.842322, lng:-76.046899, dir:"2232 Virginia Beach Boulevard", tel:"+1-757-496-0293", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Beach Pet Hospital", cat:"vet", lat:36.84254, lng:-76.047635, dir:"316 Great Neck Road", tel:"+1-757-428-3251", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Preppie Pooch", cat:"tienda", lat:36.842663, lng:-76.064596, dir:"2684 Virginia Beach Boulevard", tel:"+1-757-631-5900", horas:[8.0, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Acredale Animal Hospital", cat:"vet", lat:36.842976, lng:-76.065328, dir:"2706 Virginia Beach Boulevard", tel:"+1-757-837-0577", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Eye Center", cat:"vet", lat:36.833749, lng:-76.068132, dir:"2800 Lynnhaven Road", tel:"+1-757-368-9060", horas:[8.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Canine Cloud 9", cat:"peluqueria", lat:36.843459, lng:-76.073991, dir:"2953 Virginia Beach Boulevard", tel:"+1-757-319-4800", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Hospital of Virginia Beach", cat:"vet", lat:36.84396, lng:-76.076445, dir:"3002 Virginia Beach Boulevard", tel:"+1-757-340-6996", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:36.842137, lng:-76.083129, dir:"3217 Virginia Beach Boulevard", tel:"+1-757-340-8002", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.839979, lng:-76.091188, dir:"3413 Virginia Beach Boulevard", tel:"+1-757-486-1233", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.759659, lng:-76.006385, dir:"2277 Upton Drive", tel:"+1 757-716-6128", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Bark VB", cat:"refugio", lat:36.841572, lng:-76.097055, dir:"3636 Virginia Beach Boulevard", tel:"+1-757-904-1450", horas:[6.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Coastal Vet Red Mill", cat:"vet", lat:36.748552, lng:-76.010624, dir:"2017 Fisher Arch", tel:"+17577345575", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.777042, lng:-76.086848, dir:"3364 Princess Anne Road", tel:"+1 757-368-3606", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Fear Not Tarantulas", cat:"tienda", lat:36.820385, lng:-76.123328, dir:"4291 Holland Road", tel:"+1-757-657-8113", horas:[11.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.842316, lng:-76.128254, dir:"4421 Virginia Beach Boulevard", tel:"+1 757-497-1279", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Atlantic Veterinary Center", cat:"vet", lat:36.724487, lng:-76.01705, dir:"1804 Princess Anne Road", tel:"+1-757-689-5001", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"vet", lat:36.879272, lng:-76.041182, dir:"1556 Mill Dam Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pups and Pints", cat:"parque", lat:36.771092, lng:-76.022281, dir:"2413 London Bridge Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bay Beach Veterinary Hospital", cat:"vet", lat:36.843906, lng:-76.12369, dir:"4340 Virginia Beach Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Zoom Room Dog Training", cat:"tienda", lat:36.772357, lng:-76.088935, dir:"1925 Landstown Centre Way", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bay Beach Veterinary Emergency Hospital", cat:"vet", lat:36.753983, lng:-76.065823, dir:"2476 Nimmo Parkway", tel:null, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:36.85216, lng:-76.020177, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Valu", cat:"tienda", lat:36.851583, lng:-76.024826, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hilltop Veterinary Clinic", cat:"vet", lat:36.849348, lng:-76.0272, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fur Frenzy", cat:"tienda", lat:36.848745, lng:-76.036433, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Health Care Clinic", cat:"vet", lat:36.787284, lng:-76.000509, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets-Go-Round", cat:"tienda", lat:36.814829, lng:-76.070047, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Healing with Heart Veterinary Care", cat:"vet", lat:36.752054, lng:-76.012161, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aquarium Store", cat:"tienda", lat:36.811425, lng:-76.098857, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Abbey Animal Hospital", cat:"vet", lat:36.794522, lng:-76.119963, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wade-hampton": {nombre:"Wade Hampton", centro:[34.903728, -82.333173], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:34.901335, lng:-82.337969, dir:"2801 Wade Hampton Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:34.845074, lng:-82.323971, dir:"626 Congaree Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Roper Mountain Animal Hospital", cat:"vet", lat:34.846561, lng:-82.308918, dir:"14 Roper Corners Circle", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSuites Greenville", cat:"peluqueria", lat:34.843321, lng:-82.316088, dir:"1002 Keys Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alison's Pet Parlor", cat:"peluqueria", lat:34.899572, lng:-82.337119, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East Greenville Animal Hospital", cat:"vet", lat:34.88683, lng:-82.29999, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Edgewood Bark Park", cat:"parque", lat:34.865359, lng:-82.294052, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wake-forest": {nombre:"Wake Forest", centro:[35.97757, -78.509847], tz:"America/New_York", lugares:[
  {n:"Complete Pet Care Animal Hospital at Heritage", cat:"vet", lat:35.968904, lng:-78.492344, dir:"941 Gateway Commons Circle", tel:"+19192639778", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.987695, lng:-78.529595, dir:"12638 Capital Boulevard", tel:"+1 919-263-6137", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Cold Blooded & Bizarre", cat:"tienda", lat:35.98036, lng:-78.541453, dir:"12247 Capital Boulevard", tel:"+1-704-312-0320", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.969815, lng:-78.543057, dir:"11835 Retail Drive", tel:"+1 919-554-6938", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wake Forest Animal Hospital", cat:"vet", lat:35.977087, lng:-78.547343, dir:"992 Durham Road", tel:"+19195561000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital and Pet Resort Durant Road", cat:"vet", lat:35.904277, lng:-78.585019, dir:"10220 Durant Road", tel:"+1-919-847-5533", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:36.006255, lng:-78.518777, dir:"13654 Capital Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dirty Dogs Spa", cat:"peluqueria", lat:35.946836, lng:-78.503701, dir:"929 Heritage Lake Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bayleaf Veterinary Hospital", cat:"vet", lat:35.916133, lng:-78.650308, dir:"10009 Six Forks Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Hospital", cat:"vet", lat:35.944292, lng:-78.546549, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery and Grooming", cat:"peluqueria", lat:35.94314, lng:-78.557801, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.905121, lng:-78.601912, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "walden-tennessee": {nombre:"Walden", centro:[35.164793, -85.301348], tz:"America/New_York", lugares:[
  {n:"Animal Hospital of Signal Mountain", cat:"vet", lat:35.149697, lng:-85.321572, dir:"1801 Taft Highway", tel:"+1-423-509-8718", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.156877, lng:-85.247679, dir:"5756 TN 153", tel:"+1 423-875-3174", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Aquatic Aesthetics", cat:"tienda", lat:35.150595, lng:-85.248447, dir:"5622 TN 153", tel:null, horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"The Puppy Patch", cat:"parque", lat:35.144175, lng:-85.322517, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waleska": {nombre:"Waleska", centro:[34.316483, -84.552152], tz:"America/New_York", lugares:[
  {n:"Waleska Animal Hospital", cat:"vet", lat:34.313647, lng:-84.549316, dir:"6787 Reinhardt College Parkway", tel:"+1-770-345-1611", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "walkertown": {nombre:"Walkertown", centro:[36.174827, -80.152159], tz:"America/New_York", lugares:[
  {n:"Walkertown Veterinary Hospital", cat:"vet", lat:36.170294, lng:-80.157964, dir:"2707 Old Hollow Road", tel:"+13365953090", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Carolina Pet Services", cat:"vet", lat:36.11573, lng:-80.16049, dir:"West Mountain Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Spay Neuter Clinic", cat:"vet", lat:36.112645, lng:-80.163304, dir:"2780 West Mountain Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wallburg": {nombre:"Wallburg", centro:[36.010137, -80.139212], tz:"America/New_York", lugares:[
  {n:"Wallburg Animal Hospital", cat:"vet", lat:36.007603, lng:-80.135128, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "walnut-cove": {nombre:"Walnut Cove", centro:[36.295415, -80.141712], tz:"America/New_York", lugares:[
  {n:"Animal Hospital of Walnut Cove", cat:"vet", lat:36.31979, lng:-80.14306, dir:"1020 Alamo Drive", tel:"+1-336-591-8250", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "walnut-creek-north-carolina": {nombre:"Walnut Creek", centro:[35.30593, -77.8718], tz:"America/New_York", lugares:[
  {n:"Spring Creek Animal Hospital", cat:"vet", lat:35.288515, lng:-77.910526, dir:"101 St Johns Church Road", tel:"+1-919-778-4260", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "walterhill": {nombre:"Walterhill", centro:[35.950064, -86.37777], tz:"America/Chicago", lugares:[
  {n:"Stones River Vetinary Hospital", cat:"vet", lat:35.900351, lng:-86.382949, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lascassas Feed Store", cat:"tienda", lat:35.939498, lng:-86.284662, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "warden-west-virginia": {nombre:"Warden", centro:[37.807892, -81.160933], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:37.80443, lng:-81.176045, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "warm-springs-virginia": {nombre:"Warm Springs", centro:[38.046237, -79.790607], tz:"America/New_York", lugares:[
  {n:"Valley Animal Hospital", cat:"vet", lat:38.056236, lng:-79.778379, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "warrenton-north-carolina": {nombre:"Warrenton", centro:[36.39848, -78.155271], tz:"America/New_York", lugares:[
  {n:"Warrenton Animal Clinic", cat:"vet", lat:36.397265, lng:-78.150384, dir:"327 East Macon Street", tel:"+1-252-257-0737", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "warrenton-virginia": {nombre:"Warrenton", centro:[38.71355, -77.795367], tz:"America/New_York", lugares:[
  {n:"Horse Country", cat:"tienda", lat:38.715171, lng:-77.794874, dir:"60 Alexandria Pike", tel:"+1 540-347-3141", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Hungry Like the Woof", cat:"tienda", lat:38.717126, lng:-77.792541, dir:"147 Alexandria Pike", tel:"+1 540-349-9663", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.729513, lng:-77.799694, dir:"271 West Lee Highway", tel:"+1 540-341-1869", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Georjean's Dog Grooming", cat:"peluqueria", lat:38.715893, lng:-77.806811, dir:"367 West Shirley Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dog Spa", cat:"peluqueria", lat:38.717501, lng:-77.811703, dir:"585 Frost Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tail of Joy Grooming", cat:"peluqueria", lat:38.724724, lng:-77.805305, dir:"274 Broadview Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clevenger's Corner Veterinary Care", cat:"vet", lat:38.678426, lng:-77.918515, dir:"18157 Lee Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "warsaw-north-carolina": {nombre:"Warsaw", centro:[34.999716, -78.093965], tz:"America/New_York", lugares:[
  {n:"Warsaw Animal Hospital", cat:"vet", lat:34.992458, lng:-78.055625, dir:"1472 NC-24", tel:"+1-910-293-3348", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "washington-park-north-carolina": {nombre:"Washington Park", centro:[35.532663, -77.032451], tz:"America/New_York", lugares:[
  {n:"Pamlico Animal Hospital", cat:"vet", lat:35.541283, lng:-77.005677, dir:"3005 John Small Avenue", tel:"+12529462834", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Beaufort County Animal Control", cat:"refugio", lat:35.540145, lng:-76.990684, dir:"3931 US 264", tel:"+12529464517", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "watertown-tennessee": {nombre:"Watertown", centro:[36.100336, -86.131934], tz:"America/Chicago", lugares:[
  {n:"Moses Animal Clinic", cat:"vet", lat:36.096256, lng:-86.141392, dir:"8500 Sparta Pike", tel:"+1 615-697-2207", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "watkinsville": {nombre:"Watkinsville", centro:[33.862896, -83.408771], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.915594, lng:-83.453421, dir:"1791 Oconee Connector", tel:"+1 706-395-0670", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Mutty Paws", cat:"refugio", lat:33.859287, lng:-83.405149, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Thomas Farm Preserve Dog Park", cat:"parque", lat:33.868068, lng:-83.402475, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Dog Spa", cat:"peluqueria", lat:33.915008, lng:-83.443737, dir:null, tel:null, horas:[7.5, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Good Hands Veterinary Hospital", cat:"vet", lat:33.909584, lng:-83.455593, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:33.881003, lng:-83.482548, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "watterson-park": {nombre:"Watterson Park", centro:[38.192292, -85.683294], tz:"America/Chicago", lugares:[
  {n:"Alley Cat Advocates", cat:"refugio", lat:38.190666, lng:-85.674661, dir:"3516 Newburg Road", tel:"+1-502-634-8777", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Louisvillle Metro Animal Services Harshaw Family Foundation Animal Shelter:", cat:"refugio", lat:38.190381, lng:-85.675359, dir:"3528 Newburg Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waveland-mississippi": {nombre:"Waveland", centro:[30.285364, -89.372068], tz:"America/Chicago", lugares:[
  {n:"Sterling's Pet Salon", cat:"peluqueria", lat:30.305798, lng:-89.376861, dir:"315 Highway 90", tel:"+1-228-304-0854", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "waverly": {nombre:"Waverly", centro:[27.978911, -81.613966], tz:"America/New_York", lugares:[
  {n:"Pet Smart", cat:"tienda", lat:27.958985, lng:-81.621144, dir:"24005 Hwy 27", tel:null, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "waves": {nombre:"Waves", centro:[35.56164, -75.469042], tz:"America/New_York", lugares:[
  {n:"Bark Park", cat:"parque", lat:35.577093, lng:-75.466822, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waycross": {nombre:"Waycross", centro:[31.213551, -82.354018], tz:"America/New_York", lugares:[
  {n:"Petsense", cat:"tienda", lat:31.19593, lng:-82.319284, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wayne-west-virginia": {nombre:"Wayne", centro:[38.221475, -82.442375], tz:"America/New_York", lugares:[
  {n:"Brown Veterinary Service", cat:"vet", lat:38.257012, lng:-82.431678, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brown Veterinary Service Boarding, Grooming, K-9 Agility and Training Center", cat:"vet", lat:38.25711, lng:-82.431545, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waynesboro-virginia": {nombre:"Waynesboro", centro:[38.068667, -78.8894], tz:"America/New_York", lugares:[
  {n:"Paws & Claws Pet Salon", cat:"peluqueria", lat:38.078919, lng:-78.922067, dir:"2520 West Main Street", tel:"+1-540-946-8777", horas:[8.0, 15.5], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Waynesboro", cat:"vet", lat:38.080616, lng:-78.923756, dir:"2637 West Main Street", tel:"+1-540-943-3081", horas:[7.5, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Health Clinic", cat:"vet", lat:38.064881, lng:-78.934635, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waynesville-north-carolina": {nombre:"Waynesville", centro:[35.488748, -82.988872], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.469071, lng:-83.008613, dir:"321 Town Center Loop", tel:"+1 828-558-3002", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Smoky Mountain Dog Bakery", cat:"tienda", lat:35.491027, lng:-82.987223, dir:null, tel:"+1 828-246-9600", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Waynesville", cat:"vet", lat:35.492462, lng:-82.988344, dir:"91 Depot Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waynesville Dog Park", cat:"parque", lat:35.505987, lng:-82.97932, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "weaverville-north-carolina": {nombre:"Weaverville", centro:[35.696724, -82.560362], tz:"America/New_York", lugares:[
  {n:"Weaverville Pet Pantry", cat:"tienda", lat:35.696356, lng:-82.561155, dir:"1 Merrimon Avenue", tel:"+18284849247", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Appalachian Animal Hospital", cat:"vet", lat:35.712182, lng:-82.564395, dir:"29 Monticello Road", tel:"+18286588989", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Allen Animal Hospital", cat:"vet", lat:35.708667, lng:-82.5584, dir:"24 Critter Trail", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Animal Hospital at Reems Creek", cat:"vet", lat:35.681868, lng:-82.569213, dir:"32 Reems Creek Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wagbar", cat:"parque", lat:35.677881, lng:-82.574629, dir:"320 Merrimon Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "weddington": {nombre:"Weddington", centro:[35.022371, -80.760903], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.034204, lng:-80.803404, dir:"9911 Rea Road", tel:"+1 704-846-4565", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.054069, lng:-80.771957, dir:"1115 Golf Links Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Weddington Animal Hospital", cat:"vet", lat:35.02321, lng:-80.760639, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Modern Pet Salon", cat:"peluqueria", lat:35.02357, lng:-80.760879, dir:null, tel:null, horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "wedgefield": {nombre:"Wedgefield", centro:[28.510367, -81.078611], tz:"America/New_York", lugares:[
  {n:"Exotic Animal Experience in Orlando", cat:"zoo", lat:28.470871, lng:-81.084087, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "weems": {nombre:"Weems", centro:[37.65486, -76.443837], tz:"America/New_York", lugares:[
  {n:"Dog Run", cat:"parque", lat:37.610353, lng:-76.438007, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Walk", cat:"parque", lat:37.607431, lng:-76.439618, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wekiwa-springs": {nombre:"Wekiwa Springs", centro:[28.689689, -81.407076], tz:"America/New_York", lugares:[
  {n:"Animal Clinic of Wekiva", cat:"vet", lat:28.706439, lng:-81.443548, dir:"3851 Wekiva Springs Road", tel:"+1 407-862-4466", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"River Oaks Animal Hospital & Resort", cat:"vet", lat:28.709736, lng:-81.445853, dir:"800 Miami Springs Drive", tel:"+1-407-774-1515", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "welcome-north-carolina": {nombre:"Welcome", centro:[35.902915, -80.256995], tz:"America/New_York", lugares:[
  {n:"Midnight Kennel Supply", cat:"tienda", lat:35.920714, lng:-80.334417, dir:"5386 NC-150", tel:"+13368423283", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Davidson Veterinary Hospital", cat:"vet", lat:35.894012, lng:-80.253797, dir:null, tel:"+1-336-731-6978", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Village Vet Animal Hospital", cat:"vet", lat:35.951627, lng:-80.30357, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wellborn": {nombre:"Wellborn", centro:[30.231061, -82.819572], tz:"America/New_York", lugares:[
  {n:"SunStop Paw Park", cat:"parque", lat:30.31918, lng:-82.804126, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wellington-florida": {nombre:"Wellington", centro:[26.654955, -80.237528], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:26.664689, lng:-80.200923, dir:"920 South State Road 7", tel:"+1 561-333-5714", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:26.651571, lng:-80.234922, dir:"11924 Forest Hill Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wellington Dog Park", cat:"parque", lat:26.639351, lng:-80.290375, dir:"2965 Greenbriar Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wendell-north-carolina": {nombre:"Wendell", centro:[35.780987, -78.369721], tz:"America/New_York", lugares:[
  {n:"K9 Perfection Grooming Salon", cat:"peluqueria", lat:35.780946, lng:-78.370259, dir:"7 West 3rd Street", tel:"+1-919-703-5403", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Groomer Ruth Pet Salon", cat:"peluqueria", lat:35.781116, lng:-78.368944, dir:"15 East 3rd Street", tel:"+1-919-366-2663", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Neuse River Veterinary Hospital", cat:"vet", lat:35.791018, lng:-78.377202, dir:"2961 Wendell Boulevard", tel:"+1-919-365-9001", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grooming Barn", cat:"peluqueria", lat:35.754319, lng:-78.392037, dir:"2208 Eagle Rock Road", tel:"+19196260046", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Neuse River Veterinary Hospital", cat:"vet", lat:35.769655, lng:-78.417377, dir:"1932 Wendell Falls Parkway", tel:"+19193659001", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Corinth Holders Animal Pen", cat:"refugio", lat:35.723814, lng:-78.341337, dir:"6875 Applewhite Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wesley-chapel": {nombre:"Wesley Chapel", centro:[28.23973, -82.327866], tz:"America/New_York", lugares:[
  {n:"Banfield Pet Hospital", cat:"vet", lat:28.236277, lng:-82.346981, dir:"5424 Bruce B Downs Blvd", tel:"+1-813-991-9408", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:28.244571, lng:-82.352345, dir:"6001 Wesley Grove Boulevard", tel:"+1 813-994-7010", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Dear Madison Pet Services", cat:"refugio", lat:28.261737, lng:-82.347808, dir:"7180 Frances Drive", tel:"+1 727-248-7874", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wesley-chapel-north-carolina": {nombre:"Wesley Chapel", centro:[35.007094, -80.674513], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.998889, lng:-80.694137, dir:"6420 Weddington Road", tel:"+1 704-821-2526", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "west-columbia": {nombre:"West Columbia", centro:[33.991869, -81.064034], tz:"America/New_York", lugares:[
  {n:"Riverbanks Zoo", cat:"zoo", lat:34.008721, lng:-81.072546, dir:"500 Wildlife Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Specialty Center of South Carolina", cat:"vet", lat:34.066065, lng:-81.13854, dir:"3912 Fernandina Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Carolina Veterinary Specialists and Emergency Care", cat:"vet", lat:34.066638, lng:-81.138082, dir:"3924 Fernandina Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet-Vac Animal Hospital", cat:"vet", lat:33.985912, lng:-81.073255, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Van Crest Animal Hospital", cat:"vet", lat:33.985292, lng:-81.084574, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bird Conservation Center", cat:"vet", lat:34.009853, lng:-81.07223, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"St Andrews Animal Clinic", cat:"vet", lat:34.033644, lng:-81.086973, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Seven Oaks Animal Hospital", cat:"vet", lat:34.045464, lng:-81.126117, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:34.070612, lng:-81.157117, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-liberty-west-virginia": {nombre:"West Liberty", centro:[40.169794, -80.593685], tz:"America/New_York", lugares:[
  {n:"Campus Woods Trailhead", cat:"zoo", lat:40.164809, lng:-80.59608, dir:"209 Residence Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-melbourne": {nombre:"West Melbourne", centro:[28.073626, -80.671839], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:28.038683, lng:-80.664453, dir:"205 Palm Bay Road Northeast", tel:"+1 321-952-8268", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "west-miami": {nombre:"West Miami", centro:[25.756018, -80.295685], tz:"America/New_York", lugares:[
  {n:"VCA Animal Hospital", cat:"vet", lat:25.762915, lng:-80.299547, dir:"6390 Southwest 8th Street", tel:"+1-305-261-2374", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Trail Animal Hospital", cat:"vet", lat:25.762939, lng:-80.30111, dir:"6464 Southwest 8th Street", tel:"+1-305-261-0793", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:25.771408, lng:-80.329134, dir:"8241 West Flagler Street", tel:"+1 786-275-8300", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of Miami-Dade", cat:"vet", lat:25.750574, lng:-80.30383, dir:"2134 Southwest 67th Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Red Bird Animal Clinic", cat:"vet", lat:25.73481, lng:-80.287935, dir:"5753 Southwest 40th Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Poochie on your Block", cat:"peluqueria", lat:25.733648, lng:-80.305193, dir:"6803 Southwest 40th Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westchester Animal Hospital", cat:"vet", lat:25.744779, lng:-80.336018, dir:"2730 Southwest 87th Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:25.73306, lng:-80.366626, dir:null, tel:null, horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "west-palm-beach": {nombre:"West Palm Beach", centro:[26.715364, -80.053294], tz:"America/New_York", lugares:[
  {n:"BRK Republic", cat:"parque", lat:26.713601, lng:-80.056356, dir:"521 Clematis Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Paws Dog Park", cat:"parque", lat:26.70089, lng:-80.060411, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-park": {nombre:"West Park", centro:[25.984536, -80.198936], tz:"America/New_York", lugares:[
  {n:"Pet Supermarket", cat:"tienda", lat:26.009012, lng:-80.204244, dir:"5824 Hollywood Boulevard", tel:"+1-954-602-9488", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "west-point-virginia": {nombre:"West Point", centro:[37.53153, -76.796357], tz:"America/New_York", lugares:[
  {n:"4 Paws Thrift", cat:"tienda", lat:37.531673, lng:-76.79628, dir:null, tel:null, horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "west-springfield-virginia": {nombre:"West Springfield", centro:[38.779193, -77.233263], tz:"America/New_York", lugares:[
  {n:"Burke Forest Veterinary Clinic", cat:"vet", lat:38.781238, lng:-77.236857, dir:"6220 Rolling Road", tel:"+1 703-569-8181", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "west-van-lear": {nombre:"West Van Lear", centro:[37.784807, -82.779882], tz:"America/New_York", lugares:[
  {n:"Highland Veterinary Clinic", cat:"vet", lat:37.808294, lng:-82.776744, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-vero-corridor": {nombre:"West Vero Corridor", centro:[27.640256, -80.494283], tz:"America/New_York", lugares:[
  {n:"Saint Francis Animal Hospital", cat:"vet", lat:27.638513, lng:-80.502832, dir:"8535 20th Street", tel:"+1-772-299-0313", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawprints of Vero Beach", cat:"refugio", lat:27.626342, lng:-80.490377, dir:"7900 12th Street", tel:"+1-772-567-2121", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"BG Equestrian Vero Beach", cat:"refugio", lat:27.618085, lng:-80.485764, dir:"7700 8th Street", tel:"+1-561-859-2605", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:27.640374, lng:-80.462362, dir:"6590 20th Street", tel:"+1 772-562-2234", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:27.636259, lng:-80.450354, dir:"5975 20th Street", tel:"+1 772-770-4180", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "westminster-south-carolina": {nombre:"Westminster", centro:[34.66482, -83.096542], tz:"America/New_York", lugares:[
  {n:"Magley Animal Hospital", cat:"vet", lat:34.667792, lng:-83.097918, dir:"200 West North Avenue", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "weston-florida": {nombre:"Weston", centro:[26.100339, -80.399513], tz:"America/New_York", lugares:[
  {n:"Woof Gang Bakery", cat:"tienda", lat:26.097579, lng:-80.380874, dir:"1720 Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "westover-west-virginia": {nombre:"Westover", centro:[39.634526, -79.969786], tz:"America/New_York", lugares:[
  {n:"Animal Control (Monongalia County Dog Pound)", cat:"refugio", lat:39.624687, lng:-79.972275, dir:"106 Morgantown Lock Road", tel:"+1-304-291-7257", horas:[10.0, 16.5], nota:"Dato de OpenStreetMap"}
 ]},
 "wheeling-west-virginia": {nombre:"Wheeling", centro:[40.063962, -80.720915], tz:"America/New_York", lugares:[
  {n:"Zeb's Barky Bites", cat:"tienda", lat:40.059516, lng:-80.724215, dir:"2200 Market Street", tel:"+1-304-771-4590", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fitzsimmons Family Dog Park", cat:"parque", lat:40.069929, lng:-80.709846, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "white-city": {nombre:"White City", centro:[27.373692, -80.333518], tz:"America/New_York", lugares:[
  {n:"Winterlakes Dog Park", cat:"parque", lat:27.368749, lng:-80.382889, dir:"5241 Northwest Jannebo Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Save the Chimps Inc", cat:"refugio", lat:27.407359, lng:-80.493213, dir:null, tel:"+1 772 4290 403", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Savanah Dog Park", cat:"parque", lat:27.392821, lng:-80.312567, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "white-plains-north-carolina": {nombre:"White Plains", centro:[36.44569, -80.633398], tz:"America/New_York", lugares:[
  {n:"Surry Spay/Neuter Clinic", cat:"vet", lat:36.347967, lng:-80.593627, dir:"134 Paw Print Trail", tel:"+1-336-374-2262", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "white-stone": {nombre:"White Stone", centro:[37.648475, -76.389119], tz:"America/New_York", lugares:[
  {n:"Bayside Pet Emporium", cat:"peluqueria", lat:37.665305, lng:-76.3813, dir:"78 Whisk Drive", tel:"+1-804-435-3548", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "whitsett": {nombre:"Whitsett", centro:[36.071247, -79.564469], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:36.06558, lng:-79.523063, dir:"1459 University Drive", tel:"+1 336-524-0229", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "wiggins-mississippi": {nombre:"Wiggins", centro:[30.858244, -89.135328], tz:"America/Chicago", lugares:[
  {n:"Dog Cuts by Bonnie", cat:"peluqueria", lat:30.857435, lng:-89.13821, dir:"227 South Magnolia Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wilkesboro": {nombre:"Wilkesboro", centro:[36.148392, -81.151764], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:36.149666, lng:-81.191737, dir:"1514 Winkler Mill Road", tel:"+1 336-838-2370", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Hidden Oaks Dog Park", cat:"parque", lat:36.145247, lng:-81.153163, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "williamsburg-florida": {nombre:"Williamsburg", centro:[28.408586, -81.446454], tz:"America/New_York", lugares:[
  {n:"Doggy Park", cat:"parque", lat:28.406439, lng:-81.487904, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"dog wash area", cat:"parque", lat:28.406664, lng:-81.488164, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Paradise", cat:"peluqueria", lat:28.40117, lng:-81.487884, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "williamsburg-virginia": {nombre:"Williamsburg", centro:[37.27097, -76.705884], tz:"America/New_York", lugares:[
  {n:"Backyard Birder", cat:"tienda", lat:37.248896, lng:-76.684788, dir:"1490 Quarterpath Road", tel:"+1-757-378-2788", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"St. Francis Pet Resort", cat:"refugio", lat:37.287183, lng:-76.734852, dir:"102 Tewning Road", tel:"+1-757-253-8199", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Godspeed Animal Care", cat:"vet", lat:37.286895, lng:-76.735244, dir:"102 Tewning Road", tel:"+1-757-253-0656", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Williamsburg Veterinary Clinic", cat:"vet", lat:37.253227, lng:-76.733897, dir:"1303 Jamestown Road", tel:"+1-757-253-7387", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Muddy Marley's Dog Wash", cat:"peluqueria", lat:37.257597, lng:-76.739142, dir:"5251 John Tyler Highway", tel:"+1-757-808-7161", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:37.277326, lng:-76.748658, dir:"4625 Casey Boulevard", tel:"+1-757-253-0873", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:37.277603, lng:-76.749525, dir:"4600 Casey Boulevard", tel:"+1 757-259-1980", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:37.273327, lng:-76.755977, dir:"4900 Monticello Avenue", tel:"+1 757-259-1630", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Five Forks Animal Clinic", cat:"vet", lat:37.252019, lng:-76.76365, dir:"4511 John Tyler Highway", tel:"+1-757-378-9028", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Clip-It-Up", cat:"peluqueria", lat:37.253042, lng:-76.764588, dir:"4514 John Tyler Highway", tel:"+1-757-220-0066", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic Of Williamsburg", cat:"vet", lat:37.266075, lng:-76.677796, dir:"628 Penniman Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heritage Humane Society", cat:"refugio", lat:37.294488, lng:-76.707566, dir:"430 Waller Mill Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Nautical Dog", cat:"tienda", lat:37.278334, lng:-76.740987, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Care Center", cat:"refugio", lat:37.23751, lng:-76.647277, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "williamston-north-carolina": {nombre:"Williamston", centro:[35.854604, -77.055511], tz:"America/New_York", lugares:[
  {n:"Williamston Veterinary Hospital", cat:"vet", lat:35.831149, lng:-77.06726, dir:"1720 US-17", tel:"+12527923000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shelton's Veterinary Hospital", cat:"vet", lat:35.830715, lng:-77.0358, dir:"19168 US-64", tel:"+12527922808", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "williamston-south-carolina": {nombre:"Williamston", centro:[34.618447, -82.477905], tz:"America/New_York", lugares:[
  {n:"The Groom Room", cat:"tienda", lat:34.619576, lng:-82.475552, dir:"109 East Main Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "williamstown": {nombre:"Williamstown", centro:[38.638125, -84.560498], tz:"America/New_York", lugares:[
  {n:"Aviary", cat:"zoo", lat:38.622236, lng:-84.591364, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aviary", cat:"zoo", lat:38.621584, lng:-84.590908, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kangaroo Walkabout", cat:"zoo", lat:38.6226, lng:-84.593635, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ararat Ridge Zoo", cat:"zoo", lat:38.623126, lng:-84.594584, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "williamstown-west-virginia": {nombre:"Williamstown", centro:[39.400005, -81.448854], tz:"America/New_York", lugares:[
  {n:"Williamstown Animal Hospital", cat:"vet", lat:39.404327, lng:-81.449292, dir:"105 West 3rd Street", tel:"+1-304-375-2676", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wilmington-island": {nombre:"Wilmington Island", centro:[32.003548, -80.973723], tz:"America/New_York", lugares:[
  {n:"Island Veterinary Clinic", cat:"vet", lat:32.016804, lng:-80.979103, dir:"416 Johnny Mercer Boulevard", tel:"+19128971121", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Bark & Bubbles Pet Salon", cat:"peluqueria", lat:32.015469, lng:-80.984462, dir:"216 Johnny Mercer Boulevard", tel:"+19122396659", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "wilmington-north-carolina": {nombre:"Wilmington", centro:[34.235285, -77.948728], tz:"America/New_York", lugares:[
  {n:"Unleashed, the Dog & Cat Store", cat:"tienda", lat:34.235126, lng:-77.948834, dir:"2 South Front Street", tel:"+1-910-769-5511", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.246369, lng:-77.878898, dir:"4715 New Centre Drive", tel:"+1 910-452-4422", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Cape Fear Serpentarium", cat:"zoo", lat:34.232768, lng:-77.948832, dir:"Orange Street 20", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Long Leaf Dog Park", cat:"parque", lat:34.205859, lng:-77.884733, dir:"1701 College Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Forest Hills Veterinary Hospital", cat:"vet", lat:34.239197, lng:-77.913161, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wilson-north-carolina": {nombre:"Wilson", centro:[35.724172, -77.911524], tz:"America/New_York", lugares:[
  {n:"Countryside Animal Hospital", cat:"vet", lat:35.701847, lng:-77.928357, dir:"2003 US-301", tel:"+1-252-243-6952", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.743856, lng:-77.965639, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wilson-s-mills": {nombre:"Wilson's Mills", centro:[35.582991, -78.355475], tz:"America/New_York", lugares:[
  {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:35.651627, lng:-78.352093, dir:"20-7 Publix Drive", tel:"+1-919-205-1182", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.655066, lng:-78.346234, dir:"95 Flowers Commerce Drive", tel:"+1 919-243-6262", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Blue Skies Stables", cat:"refugio", lat:35.666069, lng:-78.286043, dir:"305 Jordan Narron Road", tel:"+1-512-222-7892", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wilton-manors": {nombre:"Wilton Manors", centro:[26.160363, -80.138934], tz:"America/New_York", lugares:[
  {n:"Wilton Manors Animal Hospital", cat:"vet", lat:26.156934, lng:-80.132234, dir:"2201 North Dixie Highway", tel:"+1-954-541-2550", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:26.149642, lng:-80.118683, dir:"1700 North Federal Highway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Healthy Smiles", cat:"vet", lat:26.141147, lng:-80.121061, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winchester-kentucky": {nombre:"Winchester", centro:[37.990079, -84.17965], tz:"America/New_York", lugares:[
  {n:"Boonesboro Veterinary Hospital", cat:"vet", lat:37.976011, lng:-84.197132, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winchester-tennessee": {nombre:"Winchester", centro:[35.18599, -86.111836], tz:"America/Chicago", lugares:[
  {n:"Winchester Dog Park", cat:"parque", lat:35.203981, lng:-86.134063, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winchester-virginia": {nombre:"Winchester", centro:[39.185218, -78.16524], tz:"America/New_York", lugares:[
  {n:"Posh Pets Boutique", cat:"tienda", lat:39.185748, lng:-78.164911, dir:"156 North Loudoun Street", tel:"+1-540-722-7213", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.154978, lng:-78.166719, dir:"2310 Legge Boulevard", tel:"+1 540-662-5544", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.152838, lng:-78.173648, dir:"2580 Legge Boulevard", tel:"+1 540-773-6003", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Linden Heights Animal Hospital", cat:"vet", lat:39.194697, lng:-78.188085, dir:"274 Linden Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Apple Valley Animal Hospital", cat:"vet", lat:39.161025, lng:-78.196264, dir:"1027 Cedar Creek Grade", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Berryville Ave Veterinary Clinic", cat:"vet", lat:39.185645, lng:-78.151898, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Winchester Animal Hospital", cat:"vet", lat:39.20071, lng:-78.15615, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Valu", cat:"tienda", lat:39.167896, lng:-78.164207, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Esther L. Boyd Animal Shelter", cat:"refugio", lat:39.197011, lng:-78.143061, dir:null, tel:null, horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"SPCA Animal Shelter", cat:"refugio", lat:39.164048, lng:-78.168845, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Winchester Aquarium & Pet Center", cat:"tienda", lat:39.155824, lng:-78.156216, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:39.154952, lng:-78.166919, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Surgical Centers", cat:"vet", lat:39.15561, lng:-78.155443, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winder": {nombre:"Winder", centro:[33.991909, -83.718437], tz:"America/New_York", lugares:[
  {n:"Barrow County Animal Shelter", cat:"refugio", lat:33.998371, lng:-83.760319, dir:"616 Barrow Park Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winding-cypress": {nombre:"Winding Cypress", centro:[26.069621, -81.683265], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:26.060389, lng:-81.696247, dir:"13100 Tamiami Trail East", tel:"+1-239-207-3639", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"The Animalife Veterinary Center at Eagle Creek", cat:"vet", lat:26.063349, lng:-81.703033, dir:"12660 Tamiami Trail East", tel:"+1-239-778-9777", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:26.06697, lng:-81.700923, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "windsor-virginia": {nombre:"Windsor", centro:[36.808483, -76.744125], tz:"America/New_York", lugares:[
  {n:"Windsor Pet Hospital", cat:"vet", lat:36.804023, lng:-76.724544, dir:"11483 Windsor Boulevard", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "windy-hill-beach": {nombre:"Windy Hill Beach", centro:[33.793616, -78.730111], tz:"America/New_York", lugares:[
  {n:"Alligator Adventure", cat:"zoo", lat:33.800072, lng:-78.739531, dir:"4604 Highway 17 S", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "windy-hills": {nombre:"Windy Hills", centro:[38.273959, -85.634406], tz:"America/Chicago", lugares:[
  {n:"Brownsboro Animal Clinic", cat:"vet", lat:38.278372, lng:-85.637168, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winfield-west-virginia": {nombre:"Winfield", centro:[38.533145, -81.893468], tz:"America/New_York", lugares:[
  {n:"Putnam County Animal Shelter", cat:"refugio", lat:38.539202, lng:-81.89804, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wingate-north-carolina": {nombre:"Wingate", centro:[34.984318, -80.449232], tz:"America/New_York", lugares:[
  {n:"Union County Animal Shelter", cat:"refugio", lat:34.980275, lng:-80.466211, dir:"3340 Presson Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winston-salem": {nombre:"Winston-Salem", centro:[36.099813, -80.244052], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:36.06603, lng:-80.313933, dir:"950 Hanes Mall Boulevard", tel:"+1 336-659-1995", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Tuckers Tap Yard", cat:"parque", lat:36.107819, lng:-80.237925, dir:"1010 North Liberty Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fairytale Farm Sanctuary", cat:"refugio", lat:36.080164, lng:-80.16073, dir:"480 Wayside Drive", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gallery Lofts Bark Park", cat:"parque", lat:36.101351, lng:-80.242726, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dixon Animal Hospital", cat:"vet", lat:36.056694, lng:-80.239497, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southside Animal Hospital", cat:"vet", lat:36.047349, lng:-80.238904, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:36.064024, lng:-80.302772, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winter-garden": {nombre:"Winter Garden", centro:[28.565665, -81.585674], tz:"America/New_York", lugares:[
  {n:"Woof Gang Bakery and Grooming", cat:"tienda", lat:28.565527, lng:-81.585256, dir:"18 East Plant Street", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winter-haven": {nombre:"Winter Haven", centro:[28.022243, -81.732857], tz:"America/New_York", lugares:[
  {n:"Cypress Animal Hospital", cat:"vet", lat:28.004832, lng:-81.726402, dir:"1616 1st Street South", tel:"+1-863-294-7531", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:28.004514, lng:-81.720159, dir:"501 Cypress Gardens Boulevard", tel:"+1-863-293-7387", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Dunham Animal Hospital", cat:"vet", lat:28.019164, lng:-81.7638, dir:"3201 Recker Highway", tel:"+1-863-293-0850", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Healthcare Associates", cat:"vet", lat:28.023751, lng:-81.680933, dir:"3025 Dundee Road", tel:"+1-863-324-3340", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Polk County", cat:"refugio", lat:28.022916, lng:-81.680137, dir:"3195 Dundee Road", tel:"+1-863-324-5227", horas:[10.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Orchid Springs Animal Hospital", cat:"vet", lat:28.009879, lng:-81.681222, dir:"615 Overlook Drive", tel:"+1-863-324-6964", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Transfurmed Paws Pet Grooming", cat:"peluqueria", lat:27.997126, lng:-81.68578, dir:"3023 Cypress Gardens Road", tel:"+1-863-280-6302", horas:[8.0, 14.5], nota:"Dato de OpenStreetMap"},
  {n:"Garden Grove Animal Hospital", cat:"vet", lat:27.997079, lng:-81.685108, dir:"3033 Cypress Gardens Road", tel:"+1-863-324-0623", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Magic Pet Parlor", cat:"peluqueria", lat:27.99637, lng:-81.684123, dir:"3070 Cypress Gardens Road", tel:"+1-863-325-8500", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Paw Printz", cat:"peluqueria", lat:28.014823, lng:-81.73374, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winter-park-florida": {nombre:"Winter Park", centro:[28.597771, -81.351026], tz:"America/New_York", lugares:[
  {n:"Corrine Drive Animal Hospital", cat:"vet", lat:28.568131, lng:-81.34725, dir:"2905 Corrine Drive", tel:"+1-407-895-3774", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "winter-springs": {nombre:"Winter Springs", centro:[28.698732, -81.305519], tz:"America/New_York", lugares:[
  {n:"Lake Jesup Animal Hospital", cat:"vet", lat:28.695394, lng:-81.263158, dir:"190 Tuskawilla Rd", tel:"+1-407-366-7316", horas:[7.0, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Cornerstone Veterinary Center", cat:"vet", lat:28.70335, lng:-81.285349, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hound Ground", cat:"parque", lat:28.706391, lng:-81.274775, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winterville": {nombre:"Winterville", centro:[33.967059, -83.27821], tz:"America/New_York", lugares:[
  {n:"Winterville Animal Clinic", cat:"vet", lat:33.972832, lng:-83.291428, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wiggley Field Dog Park", cat:"parque", lat:33.925267, lng:-83.310052, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winterville-north-carolina": {nombre:"Winterville", centro:[35.528227, -77.402245], tz:"America/New_York", lugares:[
  {n:"Firetower Animal Clinic", cat:"vet", lat:35.553717, lng:-77.373511, dir:"4110 Bayswater Road", tel:null, horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:35.566668, lng:-77.406056, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winton-north-carolina": {nombre:"Winton", centro:[36.39571, -76.931904], tz:"America/New_York", lugares:[
  {n:"Gates County Animal Clinic", cat:"vet", lat:36.450443, lng:-76.873734, dir:"66 Tinkham Road", tel:"+12523572557", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wise": {nombre:"Wise", centro:[36.977268, -82.579459], tz:"America/New_York", lugares:[
  {n:"Wise County Animal Hospital", cat:"vet", lat:36.977572, lng:-82.569743, dir:"404 Hurricane Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wolftown": {nombre:"Wolftown;ᏩᏲᎯ", centro:[35.470505, -83.250411], tz:"America/New_York", lugares:[
  {n:"Wooftown Groomers", cat:"peluqueria", lat:35.46684, lng:-83.265915, dir:"514 Wolfetown Road", tel:"+18282465854", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Santa'sLand Fun Park & Zoo", cat:"zoo", lat:35.468154, lng:-83.263554, dir:null, tel:"+1 8284979191", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "woodbridge-virginia": {nombre:"Woodbridge", centro:[38.662656, -77.253073], tz:"America/New_York", lugares:[
  {n:"Junction Pet Supplies", cat:"tienda", lat:38.660998, lng:-77.257089, dir:"1338 Horner Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets Ltd.", cat:"vet", lat:38.662032, lng:-77.252848, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "woodfin": {nombre:"Woodfin", centro:[35.633444, -82.582072], tz:"America/New_York", lugares:[
  {n:"Asheville Pet Supply", cat:"tienda", lat:35.637254, lng:-82.572687, dir:"1451 Merrimon Avenue", tel:"+18282522054", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Pets Animal Hospital & Rehabilitation Center", cat:"vet", lat:35.645698, lng:-82.578519, dir:"7 Reynolds Mountain Boulevard", tel:"+18286455252", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.63115, lng:-82.554371, dir:"964 Merrimon Avenue", tel:"+1 828-412-6073", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Shear & Shine", cat:"peluqueria", lat:35.641352, lng:-82.578744, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of North Asheville", cat:"vet", lat:35.629275, lng:-82.552182, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "woodlake-virginia": {nombre:"Woodlake", centro:[37.419681, -77.678141], tz:"America/New_York", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:37.408505, lng:-77.653329, dir:"13615 Hull Street Road", tel:"+1 804-482-8099", horas:[6.5, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:37.413984, lng:-77.640802, dir:"13329 Rittenhouse Drive", tel:"+1 804-744-4687", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Metro Richmond Zoo", cat:"zoo", lat:37.38169, lng:-77.767137, dir:"8300 Beaver Bridge Road", tel:"+1 804-739-5666", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodlake Veterinary Clinic", cat:"vet", lat:37.407722, lng:-77.682842, dir:"6511 Woodlake Village Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark and Sparkle", cat:"peluqueria", lat:37.405717, lng:-77.666681, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:37.409792, lng:-77.650753, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Otterdale Pet Wellness Center", cat:"vet", lat:37.401002, lng:-77.709919, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "woodland-hills": {nombre:"Woodland Hills", centro:[38.240349, -85.524126], tz:"America/Chicago", lugares:[
  {n:"Mona-Lisa Pet Salon", cat:"peluqueria", lat:38.245622, lng:-85.527547, dir:"12322 Shelbyville Road", tel:"+15022454243", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.245153, lng:-85.518962, dir:"12695 Shelbyville Road", tel:"+1 502-715-4183", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"The Barklands - Beckley Creek Park", cat:"parque", lat:38.220785, lng:-85.477437, dir:"1330 Beckley Creek Parkway", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barklands", cat:"parque", lat:38.220694, lng:-85.47763, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "woodlawn-kentucky": {nombre:"Woodlawn", centro:[39.091479, -84.473949], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.089149, lng:-84.47773, dir:"156 Pavillion Parkway", tel:"+1 859-814-0052", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "woodstock-georgia": {nombre:"Woodstock", centro:[34.101411, -84.519219], tz:"America/New_York", lugares:[
  {n:"Crossroads Veterinary Hospital", cat:"vet", lat:34.087716, lng:-84.519934, dir:"9500 Main Street", tel:"+1-770-591-5474", horas:[7.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Our Pal's Place", cat:"refugio", lat:34.087144, lng:-84.518652, dir:"9533 Main Street", tel:"+1 678-402-8351", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:34.105846, lng:-84.539394, dir:"1428 Towne Lake Parkway", tel:"+1-770-517-3798", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:34.086098, lng:-84.546068, dir:"142 Woodstock Square Avenue", tel:"+1-770-592-0424", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.086208, lng:-84.54607, dir:"142 Woodstock Square Avenue", tel:"+1 678-445-2741", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Etowah Veterinary Hospital", cat:"vet", lat:34.07232, lng:-84.522425, dir:"4953 Canton Road Northeast", tel:"+1-770-926-8888", horas:[7.5, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Trickum Ridge Animal Hospital", cat:"vet", lat:34.08731, lng:-84.487144, dir:"11990 GA-92", tel:"+1-770-516-1111", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cherokee Emergency Veterinary Clinic", cat:"vet", lat:34.084223, lng:-84.558832, dir:"7800 Highway 92", tel:"+1-678-238-0700", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Our Pal's Place", cat:"refugio", lat:34.061155, lng:-84.52128, dir:"4508 Canton Road Northeast", tel:"+1-678-361-7623", horas:[13.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Papayago Rescue House", cat:"refugio", lat:34.043945, lng:-84.529132, dir:"3778 Canton Road Northeast", tel:"+1 470-308-2011", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jennifer L. Buck Stables", cat:"refugio", lat:34.03985, lng:-84.512594, dir:"1323 Blackwell Road Northeast", tel:"+1-302-750-3309", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"JP's Top Dog Professional Grooming", cat:"peluqueria", lat:34.042558, lng:-84.48358, dir:"2300 Shallowford Road Northeast", tel:"+1 770-516-6558", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Shallowford Animal Hospital", cat:"vet", lat:34.042728, lng:-84.482713, dir:"2323 Shallowford Road Northeast", tel:"+1 770-926-0926", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Furs Gonna Fly", cat:"peluqueria", lat:34.042746, lng:-84.482422, dir:"2323 Shallowford Road Northeast", tel:"+1 770-928-4433", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"The Pup Hub Doggy Daycare And Training", cat:"refugio", lat:34.034271, lng:-84.526348, dir:"3372 Canton Road Northeast", tel:"+1 770-910-9311", horas:[7.0, 11.5], nota:"Dato de OpenStreetMap"},
  {n:"Bark Avenue Pet Botique", cat:"tienda", lat:34.100295, lng:-84.519987, dir:"8646 Main Street", tel:null, horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supermarket", cat:"tienda", lat:34.088156, lng:-84.482444, dir:"12185 GA-92", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Towne Lake", cat:"vet", lat:34.110923, lng:-84.559115, dir:"3105 Parkbrooke Circle", tel:null, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Suburban Veterinary Clinic", cat:"vet", lat:34.055715, lng:-84.554282, dir:"4290 Bells Ferry Road Northwest", tel:null, horas:[8.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Furkids Adoption Center - East Cobb", cat:"refugio", lat:34.047118, lng:-84.529297, dir:"4001 Canton Road Northeast", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dirty Doggy Self-Serve Grooming", cat:"peluqueria", lat:34.03823, lng:-84.530711, dir:"3595 Canton Road", tel:null, horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Express Vets - Primary Care For Pets", cat:"vet", lat:34.038174, lng:-84.531101, dir:"3595 Canton Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South on Main Dog Park", cat:"parque", lat:34.093582, lng:-84.528344, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Angela's Grooming", cat:"peluqueria", lat:34.086802, lng:-84.501216, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:34.090265, lng:-84.586001, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawtriots Large Dog Park", cat:"parque", lat:34.11793, lng:-84.588772, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawtriots Small Dog Park", cat:"parque", lat:34.118524, lng:-84.589155, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "woodville-north-carolina": {nombre:"Woodville", centro:[36.234324, -76.326326], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:36.2936, lng:-76.29911, dir:"117 Tanglewood Parkway", tel:"+1 252-621-6116", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "worthington-hills": {nombre:"Worthington Hills", centro:[38.308958, -85.526904], tz:"America/Chicago", lugares:[
  {n:"Feeder's Supply", cat:"tienda", lat:38.289041, lng:-85.509145, dir:"12406 La Grange Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Society", cat:"vet", lat:38.304991, lng:-85.52365, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Society (No Kill Shelter)", cat:"refugio", lat:38.305005, lng:-85.52367, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society", cat:"refugio", lat:38.305046, lng:-85.523693, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Livewell Animal Hospital of Anchorage", cat:"vet", lat:38.288491, lng:-85.514358, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "worthville": {nombre:"Worthville", centro:[38.609786, -85.067452], tz:"America/New_York", lugares:[
  {n:"Carroll County Animal Shelter", cat:"refugio", lat:38.654607, lng:-85.096964, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wrightsville-beach": {nombre:"Wrightsville Beach", centro:[34.207992, -77.795591], tz:"America/New_York", lugares:[
  {n:"Unleashed, the Dog & Cat Store", cat:"tienda", lat:34.230032, lng:-77.827705, dir:"1319 Military Cutoff Road", tel:"+1-910-256-2128", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Wilmington Animal Healthcare", cat:"vet", lat:34.263814, lng:-77.830795, dir:"6801 Gordon Road", tel:"+1 910 791 7101", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"LaCroix Veterinary Hospital", cat:"vet", lat:34.19885, lng:-77.871423, dir:"908 Pine Grove Drive", tel:"+1-910-799-3100", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Porters Neck Veterinary Hospital", cat:"vet", lat:34.298238, lng:-77.795756, dir:"8129 Market Street", tel:"+1 910 686 6297", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:34.296705, lng:-77.796837, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wyndham": {nombre:"Wyndham", centro:[37.691991, -77.610278], tz:"America/New_York", lugares:[
  {n:"Pouncey Tract Veterinary Hospital", cat:"vet", lat:37.684751, lng:-77.624527, dir:"5450 Pouncey Tract Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shady Grove Animal Clinic", cat:"vet", lat:37.683401, lng:-77.591108, dir:"11399 Nuckols Road", tel:null, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Addison at Wyndham", cat:"parque", lat:37.684798, lng:-77.592824, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wytheville": {nombre:"Wytheville", centro:[36.947997, -81.086975], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:36.95708, lng:-81.097228, dir:"235 Commonwealth Drive", tel:"+1 276-227-0007", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "yadkinville": {nombre:"Yadkinville", centro:[36.134581, -80.659508], tz:"America/New_York", lugares:[
  {n:"Harmony Heights Animal Hospital", cat:"vet", lat:36.114763, lng:-80.652659, dir:"220 Pollywood Lane", tel:"+13366798818", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:36.113918, lng:-80.635784, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:36.113725, lng:-80.636167, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "yanceyville": {nombre:"Yanceyville", centro:[36.404027, -79.336131], tz:"America/New_York", lugares:[
  {n:"Carolina-Virginia Animal Hospital", cat:"vet", lat:36.533971, lng:-79.400602, dir:"46 Shady Grove Road", tel:"+13363882021", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Protection Society of Caswell", cat:"refugio", lat:36.420607, lng:-79.334917, dir:"836 County Home Road", tel:null, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "yonah": {nombre:"Yonah", centro:[34.641207, -83.753513], tz:"America/New_York", lugares:[
  {n:"Charles Smithgall Humane Society & Adoption Center", cat:"refugio", lat:34.660547, lng:-83.725069, dir:"4823 Georgia 75", tel:"+1-706-865-4135", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "york-south-carolina": {nombre:"York", centro:[34.994065, -81.24214], tz:"America/New_York", lugares:[
  {n:"Dogma & Fetch", cat:"tienda", lat:34.994889, lng:-81.241155, dir:"24 North Congress Street", tel:"+1 803-628-1414", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "young-harris": {nombre:"Young Harris", centro:[34.933145, -83.847122], tz:"America/New_York", lugares:[
  {n:"Lake Chatuge Animal Hospital", cat:"vet", lat:34.973184, lng:-83.826443, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "youngsville-north-carolina": {nombre:"Youngsville", centro:[36.024777, -78.476703], tz:"America/New_York", lugares:[
  {n:"Youngsville Animal Hospital", cat:"vet", lat:36.025087, lng:-78.474931, dir:"141 East Main Street", tel:"+19194945511", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "yulee": {nombre:"Yulee", centro:[30.632059, -81.601281], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:30.629834, lng:-81.555371, dir:"463713 State Road", tel:"+1 904-225-0014", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Paradise Resort and Day Spa", cat:"refugio", lat:30.495696, lng:-81.67023, dir:"14272 Pecan Park Road", tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "zebulon-north-carolina": {nombre:"Zebulon", centro:[35.821201, -78.31268], tz:"America/New_York", lugares:[
  {n:"East Wake Animal Hospital", cat:"vet", lat:35.840076, lng:-78.329853, dir:"103 Green Pace Road", tel:"+19193754180", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "zion-crossroads": {nombre:"Zion Crossroads", centro:[37.970974, -78.219726], tz:"America/New_York", lugares:[
  {n:"Crossroads Animal Hospital", cat:"vet", lat:37.982068, lng:-78.213212, dir:null, tel:null, horas:null, nota:"Dato de OpenStreetMap"}
 ]}
};
