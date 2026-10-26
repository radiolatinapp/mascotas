// Lugares de animales en el Medio Oeste de Estados Unidos extraidos de OpenStreetMap (verificado 2026-10-25).
// cat: vet=Veterinarias, tienda=Tiendas de mascotas, refugio=Refugios y guarderias,
// zoo=Zoologicos, peluqueria=Peluquerias caninas, parque=Parques para perros,
// farma=Farmacias veterinarias, resto=Restaurantes/cafes dog-friendly.
// horas: null = sin dato publicado; [a,b] = abre/cierra en hora decimal; [0,24] = 24/7.
// Todo proviene de OpenStreetMap (ODbL) via Overpass; sin nombre o sin coordenadas el lugar se descarta.
// Pueblos cargados: 1906 (5447 lugares). Estados ok: 12/12.
const CIUDADES_USA_MEDIOESTE = {
 "aberdeen-south-dakota": {nombre:"Aberdeen", centro:[45.464981, -98.487813], tz:"America/Chicago", lugares:[
  {n:"The Pet Place", cat:"tienda", lat:45.45895, lng:-98.460486, dir:"1812 6th Avenue SE", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Health Clinic", cat:"vet", lat:45.457937, lng:-98.433991, dir:"704 South Melgaard Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aberdeen Area Humane Society", cat:"tienda", lat:45.437257, lng:-98.536039, dir:"13452 385th Avenue", horas:[11.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Run", cat:"parque", lat:45.468146, lng:-98.49296, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aberdeen Nature Area Dog Park", cat:"parque", lat:45.487781, lng:-98.501741, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "abilene": {nombre:"Abilene", centro:[38.917252, -97.21377], tz:"America/Chicago", lugares:[
  {n:"Paws-n-Claws", cat:"tienda", lat:38.917772, lng:-97.216749, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "acme": {nombre:"Acme", centro:[44.771946, -85.501461], tz:"America/New_York", lugares:[
  {n:"Acme Creek Kennels", cat:"refugio", lat:44.760779, lng:-85.468644, dir:"5311 Bunker Hill Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East Bay Pet Hospital", cat:"vet", lat:44.771767, lng:-85.50126, dir:"5872 US-31 North", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northern Michigan Veterinary Hospital", cat:"vet", lat:44.772551, lng:-85.492598, dir:"4180 East M 72", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "adrian-michigan": {nombre:"Adrian", centro:[41.897515, -84.037305], tz:"America/New_York", lugares:[
  {n:"Beekel Farms Kennels", cat:"refugio", lat:41.875525, lng:-84.122584, dir:"2890 Whig Hwy", tel:"+1-517-263-0308", horas:[11.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.874501, lng:-84.040894, dir:"1099 US 223", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lenawee county Humane society animal shelter", cat:"vet", lat:41.889071, lng:-84.046532, dir:"705 West Beecher Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Adrian Animal Clinic", cat:"vet", lat:41.905075, lng:-84.032964, dir:"709 North Main Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "advance": {nombre:"Advance", centro:[39.995876, -86.620004], tz:"America/Chicago", lugares:[
  {n:"Bark Barn Grooming", cat:"peluqueria", lat:39.967116, lng:-86.610388, dir:"7496 West 500 S", tel:"+1-317-410-4032", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "afton": {nombre:"Afton", centro:[41.028899, -94.197046], tz:"America/Chicago", lugares:[
  {n:"Afton Veterinary Clinic", cat:"vet", lat:41.024523, lng:-94.185116, dir:"2504 East Grand Street", tel:"+1-641-347-5524", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ainsworth": {nombre:"Ainsworth", centro:[41.288913, -91.552384], tz:"America/Chicago", lugares:[
  {n:"Buddy Paws", cat:"peluqueria", lat:41.288431, lng:-91.558824, dir:"620 Tam Street", tel:"+1-319-931-3101", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "airport-drive": {nombre:"Airport Drive", centro:[37.142559, -94.510782], tz:"America/Chicago", lugares:[
  {n:"Joplin Humane Society", cat:"refugio", lat:37.124164, lng:-94.51018, dir:"140 East Emperor Lane", tel:"+1-417-623-3642", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "akron-ohio": {nombre:"Akron", centro:[41.083064, -81.518485], tz:"America/New_York", lugares:[
  {n:"Akron Zoo", cat:"zoo", lat:41.079224, lng:-81.541493, dir:"500 Edgewood Avenue", tel:"+1-330-375-2550", horas:[11.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Highland Veterinary Clinic", cat:"vet", lat:41.093151, lng:-81.536256, dir:"578 West Market Street", tel:"+1-330-253-6868", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Akron Dog Park", cat:"parque", lat:41.105067, lng:-81.530271, dir:"499 Memorial Parkway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet People", cat:"tienda", lat:41.110619, lng:-81.569577, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"One of a Kind Pet Clinic", cat:"vet", lat:41.10785, lng:-81.567915, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aquatic Interiors Seacave", cat:"tienda", lat:41.082479, lng:-81.533009, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Summit County Animal Control", cat:"refugio", lat:41.072656, lng:-81.532939, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alanson": {nombre:"Alanson", centro:[45.444178, -84.786712], tz:"America/New_York", lugares:[
  {n:"The Grubby Pup Do-It-Yourself Pet Wash", cat:"peluqueria", lat:45.444325, lng:-84.78622, dir:"7339 South US-31 Highway", tel:"+1-231-203-4191", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Maple River Veterinary Associates", cat:"vet", lat:45.466621, lng:-84.780706, dir:"5843 North US-31 Highway", tel:"+1-231-529-6227", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "albert-lea": {nombre:"Albert Lea", centro:[43.648013, -93.368266], tz:"America/Chicago", lugares:[
  {n:"Brookside Dog Park", cat:"parque", lat:43.664155, lng:-93.373741, dir:"West Richway Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "albia": {nombre:"Albia", centro:[41.026456, -92.807522], tz:"America/Chicago", lugares:[
  {n:"Animal Health Center of Albia", cat:"vet", lat:41.018943, lng:-92.744605, dir:"1976 684 Avenue", tel:"+1-641-932-3455", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "albion-michigan": {nombre:"Albion", centro:[42.243097, -84.75303], tz:"America/New_York", lugares:[
  {n:"Five Points Animal Hospital", cat:"vet", lat:42.248141, lng:-84.733164, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alda": {nombre:"Alda", centro:[40.870191, -98.467422], tz:"America/Chicago", lugares:[
  {n:"7258", cat:"refugio", lat:40.844771, lng:-98.482477, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alden": {nombre:"Alden", centro:[42.458908, -88.517876], tz:"America/Chicago", lugares:[
  {n:"Petting Zoo", cat:"zoo", lat:42.484727, lng:-88.50758, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "aledo": {nombre:"Aledo", centro:[41.199857, -90.748635], tz:"America/Chicago", lugares:[
  {n:"All Animal Health Care", cat:"vet", lat:41.199539, lng:-90.740955, dir:"800 Southeast 3rd Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aledo Veterinary Clinic", cat:"vet", lat:41.200016, lng:-90.727566, dir:"1903 Southeast 3rd Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aledo Bark Park", cat:"parque", lat:41.201226, lng:-90.73586, dir:"102 SE 11th Ave", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alexandria": {nombre:"Alexandria", centro:[40.263547, -85.674481], tz:"America/New_York", lugares:[
  {n:"Keys K9 Kountry Klub", cat:"refugio", lat:40.220163, lng:-85.664219, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alexandria-minnesota": {nombre:"Alexandria", centro:[45.88351, -95.374501], tz:"America/Chicago", lugares:[
  {n:"Pro-Ag Country Store", cat:"tienda", lat:45.863313, lng:-95.366689, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "algonac": {nombre:"Algonac", centro:[42.620207, -82.534526], tz:"America/New_York", lugares:[
  {n:"Algonac Pet Center", cat:"tienda", lat:42.614199, lng:-82.538499, dir:"413 Michigan Street", tel:"+1-810-794-7031", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "algonquin": {nombre:"Algonquin", centro:[42.16558, -88.294249], tz:"America/Chicago", lugares:[
  {n:"Creme Do La Creme", cat:"refugio", lat:42.154889, lng:-88.295844, dir:"1329 South Main Street", tel:"+1-847-658-5200", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dog Waggin", cat:"refugio", lat:42.154491, lng:-88.296102, dir:"1400 South Main Street", tel:"+1-224-678-9461", horas:[6.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Algonquin Animal Clinic", cat:"vet", lat:42.178323, lng:-88.28601, dir:"10412 IL 31", tel:"+1 847-658-3626", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Paws Veterinary Clinic", cat:"vet", lat:42.160582, lng:-88.271735, dir:"1324 Ryan Parkway", tel:"+1-847-854-1526", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "allen-park": {nombre:"Allen Park", centro:[42.259507, -83.210767], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:42.279227, lng:-83.211065, dir:"23155 West Outer Drive", tel:"+1 313-565-4768", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Affiliated Veterinary", cat:"vet", lat:42.258669, lng:-83.203451, dir:"15220 Southfield Road", tel:"+1-313-389-1700", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Michigan House of Paws", cat:"tienda", lat:42.260222, lng:-83.208958, dir:"15672 Southfield Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Allen Park Pet Spa", cat:"peluqueria", lat:42.249924, lng:-83.217471, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Allen Park Animal Hospital", cat:"vet", lat:42.263245, lng:-83.202204, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Critter Pet Shop", cat:"tienda", lat:42.256129, lng:-83.230336, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alliance-ohio": {nombre:"Alliance", centro:[40.915336, -81.105931], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.901111, lng:-81.14973, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barks N Bubble", cat:"peluqueria", lat:40.914933, lng:-81.105414, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "allouez-wisconsin": {nombre:"Allouez", centro:[44.477427, -88.016356], tz:"America/Chicago", lugares:[
  {n:"Buddy's Vets -  East", cat:"vet", lat:44.45359, lng:-88.002196, dir:"1636 Hoffman Road", tel:"+1-920-337-2266", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alpena-michigan": {nombre:"Alpena", centro:[45.061679, -83.432753], tz:"America/New_York", lugares:[
  {n:"The Pampered Paw", cat:"peluqueria", lat:45.069624, lng:-83.441946, dir:"819 West Chisholm Street", tel:"+1-989-464-7075", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Muddy Paws", cat:"peluqueria", lat:45.063849, lng:-83.435019, dir:"217 West Chisholm Street", tel:"+1-989-356-2300", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Go Fetch Pet Supply", cat:"tienda", lat:45.041419, lng:-83.462825, dir:"2106 Werth Road", tel:"+1-989-590-4707", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Sunrise Veterinary Services", cat:"vet", lat:45.035118, lng:-83.464691, dir:"2640 US 23", tel:"+1-989-354-2241", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Second Chance Animal Shelter", cat:"refugio", lat:45.063271, lng:-83.483452, dir:"1110 Devere Road", tel:"+1-989-340-1700", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alpena Veterinary Clinic", cat:"vet", lat:45.120459, lng:-83.44655, dir:"5025 US 23 North", tel:"+1-989-354-2925", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"You Dirty Dog Wash", cat:"peluqueria", lat:45.047782, lng:-83.447922, dir:"1301 South State Avenue", tel:"+1-989-356-4324", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Switzer Veterinary Clinic", cat:"vet", lat:45.060823, lng:-83.520659, dir:"3463 M-32 West", tel:"+1-989-356-4880", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "alton": {nombre:"Alton", centro:[38.890858, -90.184309], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:38.918958, lng:-90.171366, dir:"313 Homer M Adams Parkway", tel:"+1 618-462-2950", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Shampooches Dog Grooming", cat:"peluqueria", lat:38.904229, lng:-90.147877, dir:"1735 Main Street", tel:"+1 618 419 3833", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Formea Animal Hospital", cat:"vet", lat:38.902681, lng:-90.147548, dir:"1639 Main Street", tel:"+1-618-462-8000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alton Dog Park", cat:"parque", lat:38.886122, lng:-90.170369, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alton-iowa": {nombre:"Alton", centro:[42.987215, -96.010529], tz:"America/Chicago", lugares:[
  {n:"Robert M. Dunlop Wildlife Area", cat:"zoo", lat:43.000377, lng:-96.00642, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "altoona-iowa": {nombre:"Altoona", centro:[41.643731, -93.469603], tz:"America/Chicago", lugares:[
  {n:"Bone a Petreat", cat:"tienda", lat:41.645945, lng:-93.507499, dir:"550 36th Avenue Southwest", tel:"+1-515-348-7088", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.643414, lng:-93.46349, dir:"120 8th Street Southeast", tel:"+1 515-967-0482", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Altoona Veterinary Clinic", cat:"vet", lat:41.643586, lng:-93.500415, dir:"3070 8th Street Southwest", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Altoona Dog Park", cat:"parque", lat:41.642861, lng:-93.482659, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "altoona-wisconsin": {nombre:"Altoona", centro:[44.806427, -91.433832], tz:"America/Chicago", lugares:[
  {n:"Healthy Pet Animal Hospital", cat:"vet", lat:44.792225, lng:-91.405981, dir:"1515 Mayer Road", tel:"+1-715-514-2323", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "amelia-ohio": {nombre:"Amelia", centro:[39.028397, -84.217714], tz:"America/New_York", lugares:[
  {n:"Main Street Animal Hospital", cat:"vet", lat:39.023268, lng:-84.211699, dir:"106 East Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Great Amelia Paw Park", cat:"parque", lat:39.01463, lng:-84.226549, dir:"70 Robin Way", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Off-Leash Dog Park", cat:"parque", lat:39.026788, lng:-84.27171, dir:"961 Locust Corner Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.035648, lng:-84.23202, dir:"260 West Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fish World Aquarium", cat:"tienda", lat:39.060402, lng:-84.270498, dir:"919 Ohio Pike", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bath & Bubbles Grooming Salon", cat:"peluqueria", lat:39.058189, lng:-84.264386, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "amery": {nombre:"Amery", centro:[45.312539, -92.362084], tz:"America/Chicago", lugares:[
  {n:"Violet's Pet Grooming", cat:"tienda", lat:45.31279, lng:-92.360181, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Painted Sky Veterinary Services", cat:"vet", lat:45.299368, lng:-92.366985, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arnell Memorial Humane Society", cat:"tienda", lat:45.296383, lng:-92.362796, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ames": {nombre:"Ames", centro:[42.026757, -93.617045], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:42.018257, lng:-93.608716, dir:"205 Southeast 5th Street", tel:"+1 515-233-3012", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pepper's Pawfection", cat:"peluqueria", lat:42.02351, lng:-93.611807, dir:"108 Sherman Avenue", tel:"+1-515-233-3017", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.009126, lng:-93.614003, dir:"301 South 16th Street", tel:"+1 515-735-3225", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.047266, lng:-93.622484, dir:"2525 Grand Avenue", tel:"+15156205034", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Serenity Pet Spa", cat:"peluqueria", lat:42.023313, lng:-93.61338, dir:"110 Kellogg Avenue", tel:"+15152329102", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ames Dog Park", cat:"parque", lat:42.003435, lng:-93.602061, dir:"605 Billy Sunday Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Treats on a Leash", cat:"tienda", lat:42.024917, lng:-93.612637, dir:"216 Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ames Animal Shelter", cat:"refugio", lat:42.003099, lng:-93.60659, dir:"325 Billy Sunday Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Pets Animal Hospital", cat:"vet", lat:42.023788, lng:-93.609983, dir:"107 East 2nd Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ames Animal Hospital", cat:"vet", lat:42.010374, lng:-93.682159, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Story County Veterinary Clinic", cat:"vet", lat:42.009964, lng:-93.541221, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Medical Center of Ames", cat:"vet", lat:42.009211, lng:-93.609703, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "amherst-junction": {nombre:"Amherst Junction", centro:[44.468863, -89.312614], tz:"America/Chicago", lugares:[
  {n:"Camp Bandy Pet Resort", cat:"refugio", lat:44.469688, lng:-89.316139, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Standing Rocks Dog Park", cat:"parque", lat:44.429415, lng:-89.406581, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "amherst-ohio": {nombre:"Amherst", centro:[41.397822, -82.222377], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.428145, lng:-82.205234, dir:"4326 North Leavitt Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "amherst-wisconsin": {nombre:"Amherst", centro:[44.450677, -89.28459], tz:"America/Chicago", lugares:[
  {n:"Amherst Veterinary Clinic", cat:"vet", lat:44.449261, lng:-89.294158, dir:"313 County Road KK", tel:"+1 715-824-2545", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "anderson-indiana": {nombre:"Anderson", centro:[40.10532, -85.680254], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:40.072671, lng:-85.651579, dir:"4216 South Scatterfield Road", tel:"+1 765-643-5799", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Care and Control", cat:"refugio", lat:40.109578, lng:-85.706702, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "andover-kansas": {nombre:"Andover", centro:[37.713904, -97.136429], tz:"America/Chicago", lugares:[
  {n:"Kutter Pet Care Center", cat:"vet", lat:37.693503, lng:-97.152502, dir:"1607 West Central Avenue", horas:[7.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Digs East Wichita", cat:"vet", lat:37.722038, lng:-97.18752, dir:"2118 North 127th Court East", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Andover Animal Hospital and Pet Resort", cat:"vet", lat:37.69364, lng:-97.140474, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "andover-minnesota": {nombre:"Andover", centro:[45.233298, -93.291341], tz:"America/Chicago", lugares:[
  {n:"Bunker Hills Dog Park", cat:"parque", lat:45.209378, lng:-93.294806, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ankeny": {nombre:"Ankeny", centro:[41.73208, -93.605092], tz:"America/Chicago", lugares:[
  {n:"Ankeny Animal Health Clinic", cat:"vet", lat:41.732154, lng:-93.629865, dir:"2202 East 1st Street", tel:"+1-515-965-0452", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PawsAbilities", cat:"peluqueria", lat:41.729956, lng:-93.60003, dir:"217 South Ankeny Boulevard", tel:"+1 515-782-6224", horas:[6.75, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Zoom Room Dog Training - Ankeny", cat:"peluqueria", lat:41.747349, lng:-93.599393, dir:"1875 N North Ankeny Boulevard", tel:"+15152079644", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ankeny Animal and Avian Clinic", cat:"vet", lat:41.722729, lng:-93.600975, dir:"742 South Ankeny Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ankeny Veterinary Clinic", cat:"vet", lat:41.746045, lng:-93.603249, dir:"301 Northwest 18th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wags Pet Resort", cat:"refugio", lat:41.716691, lng:-93.622459, dir:"1650 Southwest Magazine Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.712348, lng:-93.578088, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ann-arbor": {nombre:"Ann Arbor", centro:[42.281372, -83.748462], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:42.257194, lng:-83.68965, dir:"3537 Washtenaw Avenue", tel:"+1 734-677-6620", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Stadium Veterinary Services", cat:"vet", lat:42.27172, lng:-83.778032, dir:"2117 West Stadium Boulevard", tel:"+1-734-926-0114", horas:[9.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"City Pets Veterinary Clinic", cat:"vet", lat:42.298986, lng:-83.721378, dir:"1723 Plymouth Road", tel:"+1-734-929-4071", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Uptown Veterinary Clinic", cat:"vet", lat:42.298758, lng:-83.721079, dir:"1723 Plymouth Road", tel:"+1-734-929-4071", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Pet Emporium", cat:"tienda", lat:42.25869, lng:-83.71316, dir:"2394 East Stadium Boulevard", tel:"+1-734-929-6533", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"All Creatures Animal Clinic", cat:"vet", lat:42.255622, lng:-83.692431, dir:"3382 Washtenaw Avenue", tel:"+1-734-973-1884", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Arbor Dog", cat:"refugio", lat:42.25207, lng:-83.733862, dir:"2418 South Industrial Highway", tel:"+1-734-677-2332", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Breed Above", cat:"refugio", lat:42.272968, lng:-83.777964, dir:"2281 West Liberty Street", tel:"+1 734 214-3900", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ann Arbor Animal Hospital", cat:"vet", lat:42.274784, lng:-83.775275, dir:"2150 West Liberty Street", tel:"+1-734-662-4474", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Groom Room", cat:"peluqueria", lat:42.270417, lng:-83.774763, dir:"1906 Federal Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:42.245127, lng:-83.769116, dir:"2865 Oak Valley Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Karnik Pet Lodge", cat:"refugio", lat:42.28388, lng:-83.784683, dir:"405 North Maple Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Easthaven Animal Hospital", cat:"vet", lat:42.256, lng:-83.696436, dir:"2140 South Huron Parkway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Quality Pte Care", cat:"refugio", lat:42.283192, lng:-83.751271, dir:"303 Miller Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sudsy Pup Spa", cat:"peluqueria", lat:42.244751, lng:-83.758609, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Parkway Animal Clinic", cat:"vet", lat:42.245112, lng:-83.758998, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodbury Gardens Dog Park", cat:"parque", lat:42.258377, lng:-83.732271, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ann-arbor-charter-township": {nombre:"Ann Arbor Charter Township", centro:[42.330726, -83.710113], tz:"America/New_York", lugares:[
  {n:"The Petting Farm at Domino's Farms", cat:"zoo", lat:42.323516, lng:-83.680706, dir:"3001 Earhart Road", tel:"+1-734-998-0182", horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.303217, lng:-83.70918, dir:"2607 Plymouth Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:42.318452, lng:-83.704747, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "anoka": {nombre:"Anoka", centro:[45.197743, -93.387176], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:45.194668, lng:-93.352543, dir:"3380 124th Avenue Northwest", tel:"+1 763-576-9100", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Rum River Veterinary Clinic", cat:"vet", lat:45.199072, lng:-93.393541, dir:"100 West Main Street", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pucci Pet Grooming", cat:"peluqueria", lat:45.198123, lng:-93.389572, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "antigo": {nombre:"Antigo", centro:[45.140466, -89.152496], tz:"America/Chicago", lugares:[
  {n:"Antigo Veterinary Clinic LLC", cat:"vet", lat:45.166042, lng:-89.150152, dir:"610 Amron Avenue", tel:"+1-715-623-4116", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spring Brook Vet", cat:"vet", lat:45.162451, lng:-89.135095, dir:"334 State Highway 64", tel:"+1-715-623-6119", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Antigo Dog Park", cat:"parque", lat:45.161041, lng:-89.163651, dir:"2000 State HIghway 64", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "antioch-illinois": {nombre:"Antioch", centro:[42.476713, -88.095069], tz:"America/Chicago", lugares:[
  {n:"Antioch Animal Hospital", cat:"vet", lat:42.45884, lng:-88.091148, dir:"40949 IL 83", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Best Pets", cat:"tienda", lat:42.477306, lng:-88.095571, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "apple-valley-minnesota": {nombre:"Apple Valley", centro:[44.731909, -93.21772], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:44.73038, lng:-93.219575, dir:"7590 West 150th Street", tel:"+1 952-891-2262", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Fancy Paws", cat:"tienda", lat:44.716491, lng:-93.222566, dir:"7688 160th Street West", tel:"+1-952-236-9322", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:44.730898, lng:-93.215131, dir:"15050 Cedar Avenue", tel:"+1-952-997-4346", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Anytime Puppy Playground", cat:"refugio", lat:44.737021, lng:-93.205647, dir:"6950 146th Street West", tel:"+1-952-395-5012", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:44.732674, lng:-93.199082, dir:"14969 Florence Trail", tel:"+1-952-236-0962", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Apple-Lake Animal Hospital", cat:"vet", lat:44.716424, lng:-93.216015, dir:"16065 Glacier Avenue", tel:"+1-952-953-4100", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Cedar View Animal Hospital", cat:"vet", lat:44.735473, lng:-93.219181, dir:"7611 147th stree", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's", cat:"tienda", lat:44.693217, lng:-93.215197, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lakeville Family Pet Clinic", cat:"vet", lat:44.69506, lng:-93.215353, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Minnesota Zoo", cat:"zoo", lat:44.770182, lng:-93.197109, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "appleton-wisconsin": {nombre:"Appleton", centro:[44.261397, -88.406974], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:44.270081, lng:-88.46174, dir:"923 North Westhill Boulevard", tel:"+1 920-991-1263", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Fox River Animal Hospital", cat:"vet", lat:44.243569, lng:-88.374401, dir:"2021 East Calumet Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:44.288583, lng:-88.416969, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"DePawsitory", cat:"tienda", lat:44.261646, lng:-88.405683, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Just Pets", cat:"tienda", lat:44.2806, lng:-88.416128, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fetch, Play + Sip", cat:"refugio", lat:44.272465, lng:-88.446577, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dog House", cat:"refugio", lat:44.287177, lng:-88.442757, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Apple Valley Veterinary", cat:"vet", lat:44.287703, lng:-88.394911, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "aquilla": {nombre:"Aquilla", centro:[41.546749, -81.177994], tz:"America/New_York", lugares:[
  {n:"Geauga Animal Shelter", cat:"refugio", lat:41.503914, lng:-81.189209, dir:"12513 Merritt Road", tel:"+1-440-286-8135", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Trinity Veterinary Hospital", cat:"vet", lat:41.606959, lng:-81.071581, dir:"16025 Grand Army of the Republic Highway", tel:"+1-440-968-5141", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "archbold": {nombre:"Archbold", centro:[41.521133, -84.306547], tz:"America/New_York", lugares:[
  {n:"The Savvy Dog", cat:"tienda", lat:41.520001, lng:-84.305922, dir:"104 South Defiance Street", tel:"+1-419-445-2999", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "arcola": {nombre:"Arcola", centro:[39.684759, -88.306308], tz:"America/Chicago", lugares:[
  {n:"Aikman Wildlife Adventure", cat:"zoo", lat:39.671191, lng:-88.388912, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "arcola-indiana": {nombre:"Arcola", centro:[41.103664, -85.294142], tz:"America/New_York", lugares:[
  {n:"Indian Creek Veterinary Hospital", cat:"vet", lat:41.030064, lng:-85.284894, dir:"5902 Homestead Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "arden-hills": {nombre:"Arden Hills", centro:[45.076141, -93.166695], tz:"America/Chicago", lugares:[
  {n:"BluePearl", cat:"vet", lat:45.054248, lng:-93.15556, dir:"1285 Grey Fox Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arden Shoreview Animal Hospital", cat:"vet", lat:45.050578, lng:-93.15375, dir:"1261 County Road E West", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "argyle-wisconsin": {nombre:"Argyle", centro:[42.701222, -89.866985], tz:"America/Chicago", lugares:[
  {n:"Argyle Veterinary Service SC", cat:"vet", lat:42.699845, lng:-89.86689, dir:"201 South State Street", tel:"+1 608-543-3082", horas:[6.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "arkansas-city-kansas": {nombre:"Arkansas City", centro:[37.062256, -97.038834], tz:"America/Chicago", lugares:[
  {n:"Ark City Veterinary Clinic", cat:"vet", lat:37.091844, lng:-97.039835, dir:"2800 North Summit Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "arlington-heights": {nombre:"Arlington Heights", centro:[42.081156, -87.980216], tz:"America/Chicago", lugares:[
  {n:"March Animal Hospital", cat:"vet", lat:42.066757, lng:-87.970459, dir:"1000 East Central Road", tel:"+1-847-670-8470", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Arlington Heights Animal Hospital", cat:"vet", lat:42.047031, lng:-87.987454, dir:"412 West Algonquin Road", tel:"+1-847-593-1898", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.050344, lng:-87.984219, dir:"67 West Golf Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bentley's Pet Stuff", cat:"tienda", lat:42.08115, lng:-87.981949, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "arlington-minnesota": {nombre:"Arlington", centro:[44.608297, -94.080528], tz:"America/Chicago", lugares:[
  {n:"Arlington Animal Clinic", cat:"vet", lat:44.607942, lng:-94.081962, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "arlington-ohio": {nombre:"Arlington", centro:[40.893665, -83.650209], tz:"America/New_York", lugares:[
  {n:"Arlington Veterinary Clinic", cat:"vet", lat:40.886142, lng:-83.651792, dir:"500 South Main Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "armada": {nombre:"Armada", centro:[42.844196, -82.884372], tz:"America/New_York", lugares:[
  {n:"Krause Veterinary Clinic", cat:"vet", lat:42.829153, lng:-82.887197, dir:"72025 North Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "arnold-missouri": {nombre:"Arnold", centro:[38.422671, -90.375829], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.438477, lng:-90.382402, dir:"828 Arnold Commons Drive", tel:"+1 636-287-3448", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Yucky Puppy Pet Grooming", cat:"peluqueria", lat:38.453547, lng:-90.36189, dir:"463 Jeffco Boulevard", tel:"+16363332412", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arnold Animal Hospital", cat:"vet", lat:38.444527, lng:-90.402843, dir:"11 Municipal Drive", tel:"+1-636-296-7060", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Playful Paws", cat:"refugio", lat:38.447074, lng:-90.367166, dir:"2160 Tenbrook Road", tel:"+1 636-333-3880", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.440662, lng:-90.374376, dir:"1221 Water Tower Place", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw Park", cat:"parque", lat:38.432179, lng:-90.389634, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ozark Paw Park", cat:"parque", lat:38.427331, lng:-90.386632, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "asbury": {nombre:"Asbury", centro:[42.513619, -90.752695], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:42.5194, lng:-90.744203, dir:"2541 Northwest Arterial", tel:"+1 563-556-3507", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.495893, lng:-90.718587, dir:"1300 John F Kennedy Road", tel:"+1 563-557-8001", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Dubuque Regional Humane Society", cat:"refugio", lat:42.496712, lng:-90.742132, dir:"4242 Chavenelle Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vanderloo & White Animal Hospital", cat:"vet", lat:42.513085, lng:-90.721811, dir:"3350 Asbury Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Storybook Park & Zoo", cat:"zoo", lat:42.468518, lng:-90.728929, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Neumeister Animal Hospital", cat:"vet", lat:42.489914, lng:-90.730652, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ashland-nebraska": {nombre:"Ashland", centro:[41.039171, -96.368392], tz:"America/Chicago", lugares:[
  {n:"Central Bark Dog Park", cat:"parque", lat:41.038344, lng:-96.361693, dir:"191 South 8th Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ashland-ohio": {nombre:"Ashland", centro:[40.868615, -82.317594], tz:"America/New_York", lugares:[
  {n:"Daisy Hill Animal Hospital", cat:"vet", lat:40.846397, lng:-82.295982, dir:"2215 Center Street", tel:"+1-419-289-8387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brookside Dog Park", cat:"parque", lat:40.8797, lng:-82.348707, dir:"1258 North Baney Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brookside West Dog Park", cat:"parque", lat:40.87972, lng:-82.348713, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ashland Dog Park", cat:"parque", lat:40.87972, lng:-82.348635, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ashland-wisconsin": {nombre:"Ashland", centro:[46.592402, -90.883947], tz:"America/Chicago", lugares:[
  {n:"Bay Area Animal Hospital", cat:"vet", lat:46.609802, lng:-90.831776, dir:"3601 US Hwy 2", tel:"+1-715-682-8865", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ashland Area Veterinary Clinic", cat:"vet", lat:46.574074, lng:-90.90539, dir:"824 Sanborn Avenue", tel:"+1-715-200-5428", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Superior Grooming", cat:"peluqueria", lat:46.59241, lng:-90.881559, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blue Ribbon", cat:"refugio", lat:46.585, lng:-90.928207, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lakeview Veterinary Clinic", cat:"vet", lat:46.568116, lng:-90.868971, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ashland Area Vet Clinic", cat:"vet", lat:46.573982, lng:-90.905249, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ashtabula": {nombre:"Ashtabula", centro:[41.864787, -80.784128], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.883093, lng:-80.746782, dir:"2102 Metcalf Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pretty Puppies Pet Grooming", cat:"peluqueria", lat:41.874223, lng:-80.774157, dir:"1720 East Prospect Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Harbor Veterinary Clinic", cat:"vet", lat:41.888098, lng:-80.804282, dir:"1230 Lake Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Smith Field Dog Park", cat:"parque", lat:41.88207, lng:-80.803324, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ashwaubenon": {nombre:"Ashwaubenon", centro:[44.475261, -88.060735], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:44.481272, lng:-88.068879, dir:"825 Pilgrim Way", tel:"+1 920-497-1183", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:44.489175, lng:-88.063644, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Golrusk Pet Care Center", cat:"tienda", lat:44.491234, lng:-88.098176, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:44.479149, lng:-88.070003, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "askov": {nombre:"Askov", centro:[46.186614, -92.782571], tz:"America/Chicago", lugares:[
  {n:"The Wildcat Sanctuary", cat:"refugio", lat:46.101105, lng:-92.681114, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "atchison": {nombre:"Atchison", centro:[39.563239, -95.119945], tz:"America/Chicago", lugares:[
  {n:"Humane Society of Atchison", cat:"refugio", lat:39.562531, lng:-95.149287, dir:"100 North 21st Street", tel:"+1 913-367-3647", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "athens-illinois": {nombre:"Athens", centro:[39.960883, -89.723994], tz:"America/Chicago", lugares:[
  {n:"Main Street Animal Clinic", cat:"vet", lat:39.960822, lng:-89.724145, dir:"105 North Main Street", tel:"+1-217-636-7388", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "athens-michigan": {nombre:"Athens", centro:[42.088658, -85.234705], tz:"America/New_York", lugares:[
  {n:"Critchlow Alligator Sanctuary", cat:"zoo", lat:42.095143, lng:-85.235182, dir:"1698 Michigan 66", tel:"+1-269-729-4802", horas:[11.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "athens-ohio": {nombre:"Athens", centro:[39.328924, -82.101248], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.335894, lng:-82.071211, dir:"743 East State Street", tel:"+1 740-249-2209", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Friendly Paws Pet Supplies and Grooming", cat:"peluqueria", lat:39.336899, lng:-82.064729, dir:"East State Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West State Dog Park", cat:"parque", lat:39.333079, lng:-82.122014, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:39.335009, lng:-82.061325, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fish N Stuff", cat:"tienda", lat:39.328013, lng:-82.105834, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ohio Valley Animal Clinic", cat:"vet", lat:39.335349, lng:-82.038221, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "athens-wisconsin": {nombre:"Athens", centro:[45.034974, -90.073887], tz:"America/Chicago", lugares:[
  {n:"Athens Veterinary Service", cat:"vet", lat:45.028652, lng:-90.084535, dir:"625 West Limit Road", tel:"+1 715-257-7003", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "atlanta-michigan": {nombre:"Atlanta", centro:[45.004731, -84.143893], tz:"America/New_York", lugares:[
  {n:"Atlanta Veterinary Clinic", cat:"vet", lat:44.999745, lng:-84.142218, dir:"11979 County Road 487", tel:"+1-989-785-3521", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Elk Country Animal Shelter", cat:"refugio", lat:45.007081, lng:-84.173757, dir:"11484 Youngs Road", tel:"+1-989-785-3738", horas:[11.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "atwater-minnesota": {nombre:"Atwater", centro:[45.136334, -94.78102], tz:"America/Chicago", lugares:[
  {n:"Animal Health Services", cat:"vet", lat:45.138694, lng:-94.781279, dir:"301 Pleasant Avenue E", tel:"+1-320-974-8901", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "aubry": {nombre:"Aubry", centro:[38.770842, -94.671068], tz:"America/Chicago", lugares:[
  {n:"Overland Park Veterinary Emergency and Specialty", cat:"vet", lat:38.832988, lng:-94.684819, dir:"8301 West 163rd Street", tel:"+1-913-361-3800", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Three Dog Bakery Overland Park", cat:"tienda", lat:38.837988, lng:-94.683787, dir:"7951 West 160th Street", tel:"+1-913-897-8189", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lionsgate Pet Hospital", cat:"vet", lat:38.868523, lng:-94.666989, dir:"14327 Metcalf Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paradise Aquatics", cat:"tienda", lat:38.834861, lng:-94.675488, dir:"16064 Foster Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stilwell Animal Hospital", cat:"vet", lat:38.767724, lng:-94.674516, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aubry Animal Clinic", cat:"vet", lat:38.774404, lng:-94.668152, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blue Valley Ferrett Hospital", cat:"vet", lat:38.833542, lng:-94.6682, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:38.854137, lng:-94.680992, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "auburn-kansas": {nombre:"Auburn", centro:[38.906114, -95.816097], tz:"America/Chicago", lugares:[
  {n:"Taj MaDog", cat:"peluqueria", lat:38.958856, lng:-95.76326, dir:"6025 Southwest Wanamaker Road", tel:"+1 785-215-8900", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Auburn Animal Clinic", cat:"vet", lat:38.915001, lng:-95.816112, dir:"1571 North Washington Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "augusta-michigan": {nombre:"Augusta", centro:[42.336429, -85.352222], tz:"America/New_York", lugares:[
  {n:"Red Barn Cat Clinic", cat:"vet", lat:42.352056, lng:-85.402861, dir:"6291 North 37th Street", tel:"+1-269-457-0238", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "aurora-illinois": {nombre:"Aurora", centro:[41.75717, -88.314754], tz:"America/Chicago", lugares:[
  {n:"Oakhurst Animal Hospital", cat:"vet", lat:41.757901, lng:-88.251457, dir:"2681 East New York Street", tel:"+1 630-820-1201", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Phillips Park Zoo", cat:"zoo", lat:41.736232, lng:-88.294254, dir:"1000 Ray C. Moses Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Phillips Dog Park", cat:"parque", lat:41.736711, lng:-88.301865, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "aurora-ohio": {nombre:"Aurora", centro:[41.317555, -81.345386], tz:"America/New_York", lugares:[
  {n:"Aurora Veterinary Clinic", cat:"vet", lat:41.315708, lng:-81.354304, dir:"305 Aurora Commons Circle", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "austin-minnesota": {nombre:"Austin", centro:[43.667999, -92.97465], tz:"America/Chicago", lugares:[
  {n:"Austin Veterinary Clinic", cat:"vet", lat:43.667385, lng:-93.01778, dir:"3100 Oakland Avenue West", tel:"+1-507-433-5225", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Austin Humane Society", cat:"refugio", lat:43.666507, lng:-92.936893, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "austintown": {nombre:"Austintown", centro:[41.099615, -80.763851], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.102525, lng:-80.773756, dir:"6000 Mahoning Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "avon-indiana": {nombre:"Avon", centro:[39.762823, -86.399717], tz:"America/New_York", lugares:[
  {n:"Paw Park", cat:"parque", lat:39.76112, lng:-86.425519, dir:"115 S. County Road 575 E.", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw Park", cat:"parque", lat:39.760547, lng:-86.425087, dir:"115 S.County Road 575 E", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "avon-lake": {nombre:"Avon Lake", centro:[41.510033, -82.01859], tz:"America/New_York", lugares:[
  {n:"Avon Lake Dog Park", cat:"parque", lat:41.486083, lng:-82.040614, dir:"33401 Webber Road", tel:"+1-440-933-6141", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spoiled and Pampered Dawggy", cat:"peluqueria", lat:41.483012, lng:-82.019792, dir:"690 Avon Belden Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Love A Stray", cat:"refugio", lat:41.502309, lng:-82.050009, dir:"33501 Lake Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Landings Animal Hospital", cat:"vet", lat:41.491598, lng:-82.019897, dir:"516 Avon Belden Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "avon-ohio": {nombre:"Avon", centro:[41.451651, -82.03506], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:41.468248, lng:-82.017831, dir:"35860 Chester Road", tel:"+1 440-937-0680", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.462304, lng:-82.009644, dir:"35822 Detroit Road", tel:"+1 440-695-2047", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Canning Family K-9 Park", cat:"parque", lat:41.431824, lng:-82.05446, dir:"3701 Veterans Memorial Parkway", tel:"+1-440-937-6106", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:41.457586, lng:-82.01805, dir:"35901 Detroit Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Avon Pet Lodge", cat:"peluqueria", lat:41.472901, lng:-81.998734, dir:"1101 Jaycox Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bad-axe": {nombre:"Bad Axe", centro:[43.802063, -83.000474], tz:"America/New_York", lugares:[
  {n:"Bad Axe Animal Clinic", cat:"vet", lat:43.82579, lng:-83.000452, dir:"1054 North Van Dyke Road", tel:"+1 989 269 8564", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"At Your Bark-N-Call", cat:"peluqueria", lat:43.807253, lng:-82.998964, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "baldwin-minnesota": {nombre:"Baldwin", centro:[45.518466, -93.592478], tz:"America/Chicago", lugares:[
  {n:"Country Pup Kennel", cat:"refugio", lat:45.517911, lng:-93.55966, dir:"30209 116th Street Northwest", tel:"+1-763-220-5885", horas:[6.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Country Pup Kennel Dog Training", cat:"refugio", lat:45.518528, lng:-93.559274, dir:"30209 116th Street", tel:"+1-763-220-5885", horas:[6.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "ballwin": {nombre:"Ballwin", centro:[38.596169, -90.538732], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:38.593851, lng:-90.558438, dir:"15311 Manchester Road", tel:"+1-636-686-7181", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "baltimore-ohio": {nombre:"Baltimore", centro:[39.845342, -82.600718], tz:"America/New_York", lugares:[
  {n:"H&C Stables", cat:"refugio", lat:39.874127, lng:-82.606185, dir:"Lancaster-Kirkersville Road Northwest", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bangor-wisconsin": {nombre:"Bangor", centro:[43.891982, -90.989173], tz:"America/Chicago", lugares:[
  {n:"Bangor Veterinary Services", cat:"vet", lat:43.893063, lng:-90.991433, dir:"1714 Pearl Street", tel:"+1-608-486-2524", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bannockburn": {nombre:"Bannockburn", centro:[42.193358, -87.866458], tz:"America/Chicago", lugares:[
  {n:"Animal Hospital of West Lake Forest", cat:"vet", lat:42.225325, lng:-87.874945, dir:"1089 Conway Road", tel:"+1-847-234-2110", horas:[9.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Prairie Wolf Off-Leash Dog Area", cat:"parque", lat:42.207916, lng:-87.861793, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake Forest Kennel Club", cat:"refugio", lat:42.222132, lng:-87.866979, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "baraboo": {nombre:"Baraboo", centro:[43.470401, -89.743784], tz:"America/Chicago", lugares:[
  {n:"Baraboo Dog Park", cat:"parque", lat:43.459521, lng:-89.731449, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ochsner Park Zoo", cat:"zoo", lat:43.474007, lng:-89.753726, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Shore Picnic and Pet Area", cat:"parque", lat:43.426725, lng:-89.728462, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South shore picnic and dog area", cat:"parque", lat:43.408431, lng:-89.72931, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Swim Area", cat:"parque", lat:43.411815, lng:-89.737252, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "barrington": {nombre:"Barrington", centro:[42.153914, -88.136189], tz:"America/Chicago", lugares:[
  {n:"Barrington Animal Hospital", cat:"vet", lat:42.151667, lng:-88.12858, dir:"216 South Northwest Highway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bon Jour Pet Salon", cat:"peluqueria", lat:42.161164, lng:-88.13639, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "basehor": {nombre:"Basehor", centro:[39.141669, -94.938576], tz:"America/Chicago", lugares:[
  {n:"Basehor Veterinary Clinic", cat:"vet", lat:39.117288, lng:-94.939831, dir:"15510 State Avenue", tel:"+1-913-724-1711", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "batavia": {nombre:"Batavia", centro:[41.850028, -88.312574], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.867341, lng:-88.339756, dir:"1885 South Randall Road", tel:"+1 630-232-2494", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Batavia Animal Clinic", cat:"vet", lat:41.848976, lng:-88.309408, tel:"+1-630-879-8005", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Two Bostons", cat:"tienda", lat:41.867258, lng:-88.342941, dir:"1900 South Randall Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Batavia Bark Park", cat:"parque", lat:41.843501, lng:-88.39993, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Peck Farm dog park", cat:"parque", lat:41.868081, lng:-88.363285, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "batavia-ohio": {nombre:"Batavia", centro:[39.077007, -84.176879], tz:"America/New_York", lugares:[
  {n:"Shelter", cat:"refugio", lat:39.075974, lng:-84.21815, dir:"4193 Taylor Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clermont County Animal Shelter", cat:"refugio", lat:39.095801, lng:-84.18633, dir:"4025 Filager Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"League for Animal Wellfare", cat:"refugio", lat:39.076449, lng:-84.218675, dir:"4193 Taylor Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clermont Animal Hospital", cat:"vet", lat:39.084486, lng:-84.225517, dir:"1404 Old State Route 74", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sis & Dick Miller Wellness Clinic", cat:"vet", lat:39.076058, lng:-84.217688, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"David J. Stricker Dog Park", cat:"parque", lat:39.06142, lng:-84.214024, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bath-ohio": {nombre:"Bath", centro:[41.168748, -81.636458], tz:"America/New_York", lugares:[
  {n:"Bath Veterinary Clinic", cat:"vet", lat:41.18263, lng:-81.635899, dir:"1715 North Cleveland Massillon Road", tel:"+1-330-666-0018", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bath-south-dakota": {nombre:"Bath", centro:[45.467197, -98.323375], tz:"America/Chicago", lugares:[
  {n:"Cooper Animial Clinic", cat:"vet", lat:45.460285, lng:-98.388833, dir:"133rd Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "battle-creek-michigan": {nombre:"Battle Creek", centro:[42.319255, -85.182427], tz:"America/New_York", lugares:[
  {n:"Dog Zone", cat:"tienda", lat:42.296779, lng:-85.214659, dir:"544 Wa Wee Nork Drive", tel:"+1-269-965-7212", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K-9 Design Grooming Salon", cat:"peluqueria", lat:42.2971, lng:-85.199657, dir:"896 Capital Avenue Southwest", tel:"+1-269-962-9880", horas:[7.0, 15.5], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:42.264416, lng:-85.177962, dir:"12765 Harper Village Drive", tel:"+1 269-979-0230", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Dickman Road Veterinary Clinic", cat:"vet", lat:42.298833, lng:-85.212245, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "battlefield": {nombre:"Battlefield", centro:[37.115407, -93.36427], tz:"America/Chicago", lugares:[
  {n:"Hometown Veterinary Hospital", cat:"vet", lat:37.139345, lng:-93.324317, dir:"2215 West Republic Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wilson's Creek Animal Hospital", cat:"vet", lat:37.139145, lng:-93.339926, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Shuttle & Spa", cat:"tienda", lat:37.138749, lng:-93.344298, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Pets Supplies & Equine Center", cat:"tienda", lat:37.138832, lng:-93.31496, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "baxter-minnesota": {nombre:"Baxter", centro:[46.3433, -94.286666], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:46.346545, lng:-94.247944, dir:"13499 Elmwood Drive", tel:"+1 218-454-2040", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Safari North Wildlife Park", cat:"zoo", lat:46.278329, lng:-94.29944, horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bay-city": {nombre:"Bay City", centro:[43.596211, -83.888171], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:43.627439, lng:-83.891631, dir:"4101 Wilder Road", tel:"+1 989-391-3664", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bay-view-gardens": {nombre:"Bay View Gardens", centro:[40.808926, -89.520649], tz:"America/Chicago", lugares:[
  {n:"Waggin' Tails Resort", cat:"refugio", lat:40.78634, lng:-89.625723, dir:"2121 West Altorfer Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bay-village": {nombre:"Bay Village", centro:[41.484996, -81.920843], tz:"America/New_York", lugares:[
  {n:"Paws & Effect (Grooming & Self Dog Wash)", cat:"peluqueria", lat:41.471568, lng:-81.895768, tel:"+14403317297", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Paws & Effect (Dog Daycare)", cat:"refugio", lat:41.471473, lng:-81.89577, tel:"+14403317297", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bayside-wisconsin": {nombre:"Bayside", centro:[43.186087, -87.904897], tz:"America/Chicago", lugares:[
  {n:"Community Bark Dog Wash & Coffee Bar", cat:"tienda", lat:43.17707, lng:-87.911592, tel:"+1 414 364 9274", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:43.218688, lng:-87.922472, dir:"11004 North Port Washington Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Katherine Kearney Carpenter Park", cat:"parque", lat:43.19804, lng:-87.919017, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beach": {nombre:"Beach", centro:[46.918069, -104.004373], tz:"America/Denver", lugares:[
  {n:"Beach Veterinary Clinic", cat:"vet", lat:46.914367, lng:-103.996884, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beach-park": {nombre:"Beach Park", centro:[42.422244, -87.857296], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.408232, lng:-87.856623, dir:"3060 North Lewis Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Beach Park Animal Hospital", cat:"vet", lat:42.400219, lng:-87.827405, dir:"37063 North Sheridan Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beachwood-ohio": {nombre:"Beachwood", centro:[41.464498, -81.508732], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:41.4657, lng:-81.508961, dir:"24001 Chagrin Boulevard", tel:"+1 216-595-2869", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Beachwood Dog Park", cat:"parque", lat:41.47852, lng:-81.496731, dir:"25815 Shaker Boulevard", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beatrice-nebraska": {nombre:"Beatrice", centro:[40.266429, -96.747369], tz:"America/Chicago", lugares:[
  {n:"Big Blue Dog Park", cat:"parque", lat:40.257544, lng:-96.747823, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beaver-city": {nombre:"Beaver City", centro:[40.13537, -99.828487], tz:"America/Chicago", lugares:[
  {n:"Beaver Valley Animal Hospital", cat:"vet", lat:40.13301, lng:-99.834592, dir:"410 Floyd Street", tel:"+1 308 268 2405", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beaver-dam-wisconsin": {nombre:"Beaver Dam", centro:[43.457769, -88.837329], tz:"America/Chicago", lugares:[
  {n:"Park Plazza Pizza", cat:"resto", lat:43.455974, lng:-88.840874, dir:"233 Front Street", tel:"+1-920-887-8411", horas:[16.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wyllow Pet Hospital", cat:"vet", lat:43.473332, lng:-88.81416, dir:"126 Corporate Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beavercreek": {nombre:"Beavercreek", centro:[39.709226, -84.063269], tz:"America/New_York", lugares:[
  {n:"Doggie Styles", cat:"peluqueria", lat:39.727449, lng:-84.058305, dir:"1275 North Fairfield Road", tel:"+1-937-426-3010", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.763837, lng:-84.05039, dir:"2500 North Fairfield Road", tel:"+1 937-320-0421", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.727054, lng:-84.055723, dir:"3201 Dayton-Xenia Road", tel:"+1-937-429-2830", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Grooming Dales", cat:"peluqueria", lat:39.735677, lng:-84.076915, dir:"3821 Dayton-Xenia Road", tel:"+1-937-427-3777", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alpha Veterinary Clinic", cat:"vet", lat:39.717202, lng:-84.028639, dir:"2515 Dayton-Xenia Road", tel:"+1-937-426-9232", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:39.759798, lng:-84.051277, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Beavercreek Animal Hospital", cat:"vet", lat:39.733244, lng:-84.070082, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.720865, lng:-84.063585, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Indian Ripple Veterinary Clinic", cat:"vet", lat:39.698263, lng:-84.105054, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Preventative Care", cat:"vet", lat:39.724886, lng:-84.047676, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "becker": {nombre:"Becker", centro:[45.393182, -93.87689], tz:"America/Chicago", lugares:[
  {n:"Becker Veterinary Clinic", cat:"vet", lat:45.405454, lng:-93.895278, dir:"12904 1st Street", tel:"+1-763-261-5595", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bedford": {nombre:"Bedford", centro:[38.861162, -86.487215], tz:"America/Chicago", lugares:[
  {n:"Critter Corner Pet Grooming", cat:"peluqueria", lat:38.846602, lng:-86.497461, dir:"2832 Washington Avenue", tel:"+1 812-275-0679", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Bedford", cat:"vet", lat:38.860848, lng:-86.470938, dir:"138 E 16th Street", tel:"+1-812-275-4979", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Clinic", cat:"vet", lat:38.833138, lng:-86.500077, dir:"4213 Mitchell Road", tel:"+1-812-279-1516", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Critter Corner Doggy Daycare", cat:"refugio", lat:38.846657, lng:-86.49744, dir:"2830 Washington Avenue", horas:[6.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pick of the Litter", cat:"peluqueria", lat:38.861408, lng:-86.479409, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bedford-park": {nombre:"Bedford Park", centro:[41.769052, -87.77701], tz:"America/Chicago", lugares:[
  {n:"Woof Lawn Dog Park", cat:"parque", lat:41.774784, lng:-87.729202, dir:"4233 West 65th Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beech-grove": {nombre:"Beech Grove", centro:[39.722191, -86.089416], tz:"America/New_York", lugares:[
  {n:"IndyVet Emergency & Specialty Hospital", cat:"vet", lat:39.701468, lng:-86.074299, dir:"5425 Victory Drive", tel:"+13177824484", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Creatures Great & Groomed", cat:"peluqueria", lat:39.722946, lng:-86.147726, dir:"606 East Troy Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Midwest Exotic Fish", cat:"tienda", lat:39.721636, lng:-86.08418, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beechwood": {nombre:"Beechwood", centro:[42.796968, -86.125875], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:42.830732, lng:-86.091779, dir:"3424 West Shore Drive", tel:"+1 616-994-0911", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.82223, lng:-86.094265, dir:"12635 Felch Street", tel:"+1 616-820-0390", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Ottawa Animal Hopsital West", cat:"vet", lat:42.816039, lng:-86.125437, dir:"620 Butternut Drive", tel:"+1 616-399-2540", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Diamonds in the Ruff", cat:"peluqueria", lat:42.798203, lng:-86.137123, dir:"659 Douglas Avenue", tel:"+1-616-394-0040", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Park Township Dog Park", cat:"parque", lat:42.792673, lng:-86.160059, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bel-aire": {nombre:"Bel Aire", centro:[37.762512, -97.266988], tz:"America/Chicago", lugares:[
  {n:"The Fur Seasons Pet Resort", cat:"refugio", lat:37.74877, lng:-97.260796, dir:"3590 North Woodlawn Boulevard", tel:"+1-316-376-7722", horas:[6.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Puppy Dreams - East Wichita", cat:"tienda", lat:37.748974, lng:-97.245232, dir:"3605 North Rock Road", tel:"+1-316-260-2524", horas:[11.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Kansas Humane Society", cat:"refugio", lat:37.741924, lng:-97.300964, dir:"3313 North Hillside Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heartland Animal Hospital", cat:"vet", lat:37.757503, lng:-97.261954, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wichita Animal Shelter", cat:"refugio", lat:37.742019, lng:-97.300069, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "belknap-michigan": {nombre:"Belknap", centro:[45.331957, -83.84333], tz:"America/New_York", lugares:[
  {n:"Huron Veterinary Clinic", cat:"vet", lat:45.369178, lng:-83.780534, dir:"3189 US-23", tel:"+1-989-734-3731", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "bella-villa": {nombre:"Bella Villa", centro:[38.543631, -90.285449], tz:"America/Chicago", lugares:[
  {n:"Chippewa Animal Hospital", cat:"vet", lat:38.588873, lng:-90.251421, dir:"3850 Chippewa Street", tel:"+1-314-772-0292", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Aqua World", cat:"tienda", lat:38.590992, lng:-90.251936, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bellaire": {nombre:"Bellaire", centro:[44.975421, -85.209999], tz:"America/New_York", lugares:[
  {n:"Bellaire Animal Hospital", cat:"vet", lat:44.974696, lng:-85.198808, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bellbrook": {nombre:"Bellbrook", centro:[39.63584, -84.070177], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.658984, lng:-84.103445, dir:"4333 Feedwire Road", tel:"+1 937-312-1339", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Sugarcreek Bird Farm", cat:"tienda", lat:39.633384, lng:-84.071465, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Valu", cat:"tienda", lat:39.648724, lng:-84.107592, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bellbrook Sugarcreek Park District Headquarters", cat:"zoo", lat:39.644343, lng:-84.043497, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "belleville-illinois": {nombre:"Belleville", centro:[38.513581, -89.984163], tz:"America/Chicago", lugares:[
  {n:"Dog Park at Rotary Park", cat:"parque", lat:38.515454, lng:-89.991006, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bellevue-iowa": {nombre:"Bellevue", centro:[42.258715, -90.423082], tz:"America/Chicago", lugares:[
  {n:"Bellevue Veterinary Clinic", cat:"vet", lat:42.268559, lng:-90.428345, dir:"100 Motte North Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mississippi Ridge Kennels", cat:"refugio", lat:42.314713, lng:-90.465542, dir:"31821 Great River Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bellevue-nebraska": {nombre:"Bellevue", centro:[41.136512, -95.89374], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.156467, lng:-95.932324, dir:"10511 South 15th Street", tel:"+1 402-291-0429", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Christy's Pampered Pet Spa", cat:"tienda", lat:41.131862, lng:-95.948049, dir:"11812 South 25th Street", tel:"+1-402-614-3377", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Clinic", cat:"vet", lat:41.11012, lng:-95.912791, dir:"403 Butler Boulevard", tel:"+1 402-294-6141", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paddington Station Kennels", cat:"refugio", lat:41.105001, lng:-95.894711, dir:"206 Cunningham Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Raptor Recovery", cat:"zoo", lat:41.179375, lng:-95.917897, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dogs", cat:"parque", lat:41.153593, lng:-95.895816, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dogs", cat:"parque", lat:41.154171, lng:-95.895312, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Freedom Dog Park", cat:"parque", lat:41.16444, lng:-95.927377, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:41.153048, lng:-95.935417, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bellevue-ohio": {nombre:"Bellevue", centro:[41.274207, -82.840981], tz:"America/New_York", lugares:[
  {n:"noah's bark", cat:"peluqueria", lat:41.273731, lng:-82.840163, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Darling dog grooming", cat:"peluqueria", lat:41.273742, lng:-82.842955, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bellevue-wisconsin": {nombre:"Bellevue", centro:[44.463888, -87.954302], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:44.485748, lng:-87.962747, dir:"2390 East Mason Street", tel:"+1 920-465-1983", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Golrusk Pet Care Center", cat:"refugio", lat:44.466331, lng:-87.983954, dir:"1991 East Allouez Avenue", tel:"+1-920-306-1909", horas:[12.0, 14.0], nota:"Dato de OpenStreetMap"},
  {n:"Wet Nose Bistro", cat:"tienda", lat:44.465192, lng:-87.95807, dir:"2520 Main Street", tel:"+1-920-857-1486", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Animal House Pet Clinic", cat:"vet", lat:44.484688, lng:-87.923568, dir:"3171 Voyager Drive", tel:"+1-920-465-4629", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Country Care Animal Complex Inc", cat:"vet", lat:44.421777, lng:-87.916837, dir:"4235 Elm View Road", tel:"+1-920-863-3220", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bellville": {nombre:"Bellville", centro:[40.62018, -82.511248], tz:"America/New_York", lugares:[
  {n:"Bellville Dog Park Finnegan's Run", cat:"parque", lat:40.639305, lng:-82.542578, dir:"641 State Route 97", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bellville Dog Park Finnigans Run", cat:"parque", lat:40.639314, lng:-82.5425, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bellwood": {nombre:"Bellwood", centro:[41.881418, -87.88319], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.866892, lng:-87.885537, dir:"160 Mannheim Road", tel:"+1 708-493-2237", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "belmond": {nombre:"Belmond", centro:[42.845998, -93.614341], tz:"America/Chicago", lugares:[
  {n:"Petting Zoo", cat:"zoo", lat:42.88127, lng:-93.604227, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "belmont-michigan": {nombre:"Belmont", centro:[43.075582, -85.609199], tz:"America/New_York", lugares:[
  {n:"Great Lakes Hospital For Animals", cat:"vet", lat:43.064741, lng:-85.600806, dir:"6273 West River Drive Northeast", tel:"+1-616-361-0220", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VIPets (Jillians Exotics LLC)", cat:"tienda", lat:43.039505, lng:-85.610656, dir:"4191 Plainfield Avenue Northeast", tel:"+1-616-301-1483", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal emergency and Specialty Hospital", cat:"vet", lat:43.02224, lng:-85.632636, dir:"3260 Plainfield Avenue Northeast", tel:"+16163619911", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"The Pack Indoor Dog Park", cat:"refugio", lat:43.058154, lng:-85.643302, dir:"5205 West River Drive Northeast", tel:"+1-616-236-3254", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Reactive Referral Center", cat:"vet", lat:43.046846, lng:-85.606758, dir:"4609 Plainfield Avenue Northeast", tel:"+1 616-371-4169", horas:[9.0, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Chowhound Pet Supplies", cat:"tienda", lat:43.05818, lng:-85.581134, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cat Clinic North", cat:"vet", lat:43.043122, lng:-85.603377, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beloit-wisconsin": {nombre:"Beloit", centro:[42.508327, -89.031784], tz:"America/Chicago", lugares:[
  {n:"Zeeland Farm Services", cat:"vet", lat:42.517221, lng:-88.996845, dir:"1406 Willowbrook Road", tel:"+1-800-523-6760", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Power Paws Pet Salon and Daycare", cat:"peluqueria", lat:42.503726, lng:-89.062113, dir:"1917 St Lawrence Avenue", tel:"+1-608-299-8742", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Madison Road Veterinary Clinic", cat:"vet", lat:42.522194, lng:-89.071405, dir:"1800 South Madison Road", tel:"+1-608-362-1952", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"J & S Pet Store", cat:"tienda", lat:42.518889, lng:-89.064772, dir:"Sun Valley Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City of Beloit Dog Park", cat:"parque", lat:42.511349, lng:-88.996319, dir:"2422 Springbrook Court, Beloit, WI 53511", horas:[6.0, 22.0], nota:"Dato de OpenStreetMap"}
 ]},
 "belpre-ohio": {nombre:"Belpre", centro:[39.277263, -81.575793], tz:"America/New_York", lugares:[
  {n:"Belpre Aquarium", cat:"tienda", lat:39.277396, lng:-81.598046, dir:"1806 Washington Boulevard", tel:"+1-740-423-9509", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "belton": {nombre:"Belton", centro:[38.81081, -94.53135], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.812116, lng:-94.516083, dir:"1157 East North Avenue", tel:"+1 816-348-7956", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Lily’s Play-N-Stay", cat:"refugio", lat:38.810977, lng:-94.530862, dir:"511 Main Street", tel:"+1 816-388-3737", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.823141, lng:-94.526702, dir:"539 East Markey Parkway", tel:"+1 816-425-9241", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Belton Veterniary Center", cat:"vet", lat:38.81329, lng:-94.518295, dir:"1001 East North Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "belvidere": {nombre:"Belvidere", centro:[42.257999, -88.841734], tz:"America/Chicago", lugares:[
  {n:"Summerfield Zoo", cat:"zoo", lat:42.205307, lng:-88.844051, dir:"3088 Flora Road", tel:"+1 815-547-4852", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Boone County Animal Services", cat:"refugio", lat:42.29374, lng:-88.850351, dir:"4546 Squaw Prairie Road", tel:"+1 815-547-7774", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"State Street Animal Clinic", cat:"vet", lat:42.275568, lng:-88.874979, dir:"3336 US 20 Business", tel:"+1 815-544-0751", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bemidji": {nombre:"Bemidji", centro:[47.472315, -94.883279], tz:"America/Chicago", lugares:[
  {n:"Headwaters Veterinary", cat:"vet", lat:47.478014, lng:-94.927967, dir:"967 Adams Avenue Northwest", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northern Veterinary Clinic", cat:"vet", lat:47.557253, lng:-94.883589, dir:"9190 Irvine Avenue Northwest;Irvine Ave NW", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Canine Divine", cat:"peluqueria", lat:47.461094, lng:-94.842196, dir:"102 Lake Avenue Northeast", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Zone", cat:"tienda", lat:47.492723, lng:-94.906311, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Friendly Vet Clinic", cat:"vet", lat:47.502695, lng:-94.910077, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Great River Rescue", cat:"refugio", lat:47.438642, lng:-94.845031, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bemidji Veterinary Hospital", cat:"vet", lat:47.503228, lng:-94.931029, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets Plus", cat:"tienda", lat:47.504861, lng:-94.90986, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Ave Grooming", cat:"peluqueria", lat:47.50461, lng:-94.880393, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "benkelman": {nombre:"Benkelman", centro:[40.049244, -101.533011], tz:"America/Chicago", lugares:[
  {n:"Twin Forks Clinic", cat:"vet", lat:40.024245, lng:-101.544679, dir:"70342 Highway 61", tel:"+1 308 423 2895", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bennet": {nombre:"Bennet", centro:[40.679021, -96.5078], tz:"America/Chicago", lugares:[
  {n:"Kenl Inn", cat:"refugio", lat:40.754248, lng:-96.58068, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bennington-nebraska": {nombre:"Bennington", centro:[41.364719, -96.157797], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.294484, lng:-96.12682, dir:"13660 West Maple Road", tel:"+1 402-492-2729", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Woof & Whiskers", cat:"tienda", lat:41.290372, lng:-96.14486, dir:"3506 North 147th Street", tel:"+1-531-222-9100", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Gilbert Boarding Kennels", cat:"refugio", lat:41.32157, lng:-96.158827, dir:"6904 North 156th Street", tel:"+1-402-238-3065", horas:[7.0, 11.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.289235, lng:-96.181645, dir:"17035 Evans Plaza", tel:"+1 402-289-1592", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Recreation Ground", cat:"parque", lat:41.28702, lng:-96.090588, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Recreation Ground", cat:"parque", lat:41.287993, lng:-96.089748, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "benton-heights": {nombre:"Benton Heights", centro:[42.131151, -86.407245], tz:"America/New_York", lugares:[
  {n:"Berrien County Animal Services", cat:"refugio", lat:42.093883, lng:-86.403748, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "berea-ohio": {nombre:"Berea", centro:[41.366161, -81.854303], tz:"America/New_York", lugares:[
  {n:"Metropet Veterinary Clinic", cat:"vet", lat:41.374216, lng:-81.861643, dir:"298 North Rocky River Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beresford": {nombre:"Beresford", centro:[43.080613, -96.774234], tz:"America/Chicago", lugares:[
  {n:"Beresford Vet Clinic", cat:"vet", lat:43.082886, lng:-96.790724, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "berkley-michigan": {nombre:"Berkley", centro:[42.503091, -83.183539], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.496212, lng:-83.16448, dir:"27942 Woodward Avenue", tel:"+1 248-397-0264", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Midwest Ver Partners", cat:"vet", lat:42.517113, lng:-83.189123, dir:"30955 Woodward Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Puppygram", cat:"tienda", lat:42.498141, lng:-83.167659, dir:"28297 Woodward Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All American Pet Resort", cat:"refugio", lat:42.525819, lng:-83.177204, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "berkshire-ohio": {nombre:"Berkshire", centro:[40.26534, -82.908792], tz:"America/New_York", lugares:[
  {n:"Humane Society of Delaware County", cat:"refugio", lat:40.275393, lng:-82.97755, tel:"+1-740-369-7387", horas:[11.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Friends of Alum Creek Dog Park", cat:"parque", lat:40.213677, lng:-82.974262, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "berlin-ohio": {nombre:"Berlin", centro:[40.561178, -81.794335], tz:"America/New_York", lugares:[
  {n:"East Holmes Veterinary Clinic", cat:"vet", lat:40.560342, lng:-81.797683, dir:"5503 South Market Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bertram": {nombre:"Bertram", centro:[41.950097, -91.535186], tz:"America/Chicago", lugares:[
  {n:"Cedar Valley Humane Society", cat:"refugio", lat:41.975075, lng:-91.543826, dir:"7411 Mount Vernon Road Southeast", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "berwyn": {nombre:"Berwyn", centro:[41.850587, -87.793668], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.848755, lng:-87.801632, dir:"7133 West Cermak Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bethalto": {nombre:"Bethalto", centro:[38.909379, -90.040657], tz:"America/Chicago", lugares:[
  {n:"Bethalto Animal Clinic", cat:"vet", lat:38.900859, lng:-90.042265, dir:"132 West Bethalto Drive", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Safety Spay Clinic", cat:"vet", lat:38.910536, lng:-90.041851, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bethel-ohio": {nombre:"Bethel", centro:[38.963677, -84.080766], tz:"America/New_York", lugares:[
  {n:"Bethel Community Pet Hospital", cat:"vet", lat:38.96686, lng:-84.096155, dir:"680 West Plane Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bettendorf": {nombre:"Bettendorf", centro:[41.525379, -90.509864], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.573781, lng:-90.526203, dir:"5235 Elmore Avenue", tel:"+1 563-355-8050", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Abel-keppy Animal Hospital", cat:"vet", lat:41.528671, lng:-90.512745, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beverly-hills-michigan": {nombre:"Beverly Hills", centro:[42.522622, -83.241357], tz:"America/New_York", lugares:[
  {n:"Beverly Hills Veterinary Associates", cat:"vet", lat:42.531096, lng:-83.224558, dir:"32831 Southfield Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "big-lake-minnesota": {nombre:"Big Lake", centro:[45.332465, -93.74608], tz:"America/Chicago", lugares:[
  {n:"Big Lake Area Veterinary Hospital", cat:"vet", lat:45.331607, lng:-93.731232, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "big-rapids": {nombre:"Big Rapids", centro:[43.698078, -85.483656], tz:"America/New_York", lugares:[
  {n:"Brutus Dog Park", cat:"parque", lat:43.694832, lng:-85.472879, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bigfork": {nombre:"Bigfork", centro:[47.74453, -93.653995], tz:"America/Chicago", lugares:[
  {n:"Bigfork Veterinary Clinic", cat:"vet", lat:47.74638, lng:-93.653742, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bingham-farms": {nombre:"Bingham Farms", centro:[42.515868, -83.273264], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.497428, lng:-83.283141, dir:"28556 Telegraph Road", tel:"+1 248-799-9155", horas:[8.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Almost Home Animal Haven of Southfield", cat:"refugio", lat:42.491816, lng:-83.294041, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "birch-run": {nombre:"Birch Run", centro:[43.250859, -83.794131], tz:"America/New_York", lugares:[
  {n:"Doodle Doo Bakery (Dog Bakery)", cat:"tienda", lat:43.246268, lng:-83.774001, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wilderness Trails Zoo", cat:"zoo", lat:43.25194, lng:-83.730379, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "birchwood-village": {nombre:"Birchwood Village", centro:[45.060606, -92.977374], tz:"America/Chicago", lugares:[
  {n:"Haute Dog", cat:"peluqueria", lat:45.05052, lng:-92.984034, dir:"995 Wildwood Road", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's", cat:"tienda", lat:45.049709, lng:-92.9836, dir:"910 Wildwood Road", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's Grooming", cat:"peluqueria", lat:45.049866, lng:-92.983183, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "birmingham-michigan": {nombre:"Birmingham", centro:[42.546701, -83.211319], tz:"America/New_York", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:42.54006, lng:-83.192403, dir:"2300 Cole Street", tel:"+1-248-540-3344", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:42.5417, lng:-83.18971, dir:"1217 Coolidge Highway", tel:"+1 248-643-0694", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Teacups & Toys A Pet Boutique LLC", cat:"tienda", lat:42.545704, lng:-83.213736, dir:"271 East Merrill Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jagersbo Kennel", cat:"refugio", lat:42.568427, lng:-83.205645, dir:"3520 Adams Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Burrwood Veterinary", cat:"vet", lat:42.531873, lng:-83.198277, dir:"4245 West 14 Mile Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Academy", cat:"refugio", lat:42.540499, lng:-83.195281, dir:"955 South Eton Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetPeople", cat:"tienda", lat:42.537657, lng:-83.205888, dir:"33801 Woodward Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Teacups & Toys", cat:"tienda", lat:42.563049, lng:-83.185352, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "birnamwood": {nombre:"Birnamwood", centro:[44.931095, -89.208752], tz:"America/Chicago", lugares:[
  {n:"Birnamwood Veterinary Services", cat:"vet", lat:44.931424, lng:-89.204938, dir:"405 US 45", tel:"+1-715-449-2566", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "biron": {nombre:"Biron", centro:[44.423854, -89.780401], tz:"America/Chicago", lugares:[
  {n:"South Wood County Humane Society", cat:"refugio", lat:44.420859, lng:-89.7475, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bismarck-north-dakota": {nombre:"Bismarck", centro:[46.808327, -100.783739], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:46.831058, lng:-100.811385, dir:"1211 West Century Avenue", tel:"+1 701-250-8107", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Dakota Zoo", cat:"zoo", lat:46.798927, lng:-100.807139, dir:"602 Riverside Park Road", tel:"+1 701-223-7543", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Missouri Valley Vet", cat:"vet", lat:46.811873, lng:-100.834344, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lasalle Dog Park", cat:"parque", lat:46.863335, lng:-100.81146, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "black-creek-wisconsin": {nombre:"Black Creek", centro:[44.475557, -88.450812], tz:"America/Chicago", lugares:[
  {n:"Field of Dreams Kennels", cat:"refugio", lat:44.4232, lng:-88.432721, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "blackberry": {nombre:"Blackberry", centro:[47.180776, -93.39049], tz:"America/Chicago", lugares:[
  {n:"Itasca Dog Lodge", cat:"refugio", lat:47.194103, lng:-93.437134, dir:"27386 Jess Harry Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "blaine-minnesota": {nombre:"Blaine", centro:[45.160799, -93.234949], tz:"America/Chicago", lugares:[
  {n:"Keeper Collars", cat:"tienda", lat:45.168672, lng:-93.243964, dir:"1051 109th Avenue Northeast", tel:"+1 763-786-5144", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:45.159997, lng:-93.231398, dir:"10451 Baltimore Street Northeast", tel:"+1 763-614-3055", horas:[8.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Blaine Area Pet Hospital", cat:"vet", lat:45.185583, lng:-93.233752, dir:"11850 Aberdeen St. NE", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Evolution", cat:"tienda", lat:45.166872, lng:-93.232441, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:45.181365, lng:-93.236494, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "blair-township": {nombre:"Blair Township", centro:[44.64297, -85.635758], tz:"America/New_York", lugares:[
  {n:"Cherry Capital Pet Hospital", cat:"vet", lat:44.629316, lng:-85.665744, dir:"4470 Norton Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "blanchardville": {nombre:"Blanchardville", centro:[42.81032, -89.862215], tz:"America/Chicago", lugares:[
  {n:"Pecatonica Veterinary Service", cat:"vet", lat:42.811262, lng:-89.860777, dir:"103 Water Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bloomfield-charter-township": {nombre:"Bloomfield Charter Township", centro:[42.574601, -83.280231], tz:"America/New_York", lugares:[
  {n:"Bloomfield Township Animal Shelter", cat:"refugio", lat:42.577689, lng:-83.282177, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bloomfield-wisconsin": {nombre:"Bloomfield", centro:[42.545594, -88.35344], tz:"America/Chicago", lugares:[
  {n:"Safari Lake Geneva", cat:"zoo", lat:42.554502, lng:-88.380708, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bloomington-illinois": {nombre:"Bloomington", centro:[40.479783, -88.993915], tz:"America/Chicago", lugares:[
  {n:"Pet Central Helps", cat:"refugio", lat:40.497165, lng:-89.032525, dir:"360 Wylie Drive", tel:"+1-309-846-9534", horas:[13.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"McLean County Animal Services", cat:"refugio", lat:40.408596, lng:-89.016491, dir:"13060 East 850 North Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Miller Park Zoo", cat:"zoo", lat:40.469115, lng:-89.005627, dir:"1020 South Morris Avenue", horas:[9.5, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"The Barking Lot", cat:"refugio", lat:40.45252, lng:-88.968046, dir:"1811 Morrissey Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Highland Pet Hospital and Wellness Center", cat:"vet", lat:40.457831, lng:-89.001451, dir:"118 Greenwood Avenue", horas:[7.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Bortell Animal Hospital Inc.", cat:"vet", lat:40.466693, lng:-88.951793, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bloomington-indiana": {nombre:"Bloomington", centro:[39.16704, -86.534288], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.167747, lng:-86.574921, dir:"240 North Gates Drive", tel:"+1 812-334-9780", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.162682, lng:-86.501593, dir:"2520 East 3rd Street", tel:"+1 812-339-3452", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Bloomington Veterinary Hospital", cat:"vet", lat:39.16724, lng:-86.481843, dir:"115 North Smith Road", tel:"+1-812-339-6115", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"T&T Pet Food and Supply", cat:"tienda", lat:39.139481, lng:-86.530329, dir:"2375 South Walnut Street", tel:"+1-812-334-1012", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"College Mall Veterinary Hospital", cat:"vet", lat:39.165033, lng:-86.473352, dir:"4517 East Morningside Drive", tel:"+1-812-334-1400", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Furry Friends Veterinary Hospital", cat:"vet", lat:39.15598, lng:-86.495518, dir:"857 South College Mall Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ferguson Dog Park", cat:"parque", lat:39.209685, lng:-86.531382, dir:"4300 North Stone Mill Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bloomfield Veterinary Clini", cat:"vet", lat:39.166103, lng:-86.582149, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VetCheck Pet Urgent Care Center", cat:"vet", lat:39.162685, lng:-86.575994, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:39.142638, lng:-86.534922, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Anthony's Pets", cat:"tienda", lat:39.160635, lng:-86.494159, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:39.144266, lng:-86.535139, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bloomington-minnesota": {nombre:"Bloomington", centro:[44.83224, -93.320487], tz:"America/Chicago", lugares:[
  {n:"Bush Lake Pet Hospital", cat:"vet", lat:44.821518, lng:-93.39915, dir:"10140 Hennepin Town Road", tel:"+1-952-944-5320", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:44.852084, lng:-93.346651, dir:"5208 West 84th Street", tel:"+1-612-814-0616", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:44.812159, lng:-93.332213, dir:"10538 France Avenue South", tel:"+1-952-888-1586", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:44.810416, lng:-93.327579, dir:"3701 West Old Shakopee Road", tel:"+1-952-885-9725", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"France Avenue Pet Hospital", cat:"vet", lat:44.810457, lng:-93.327451, dir:"3701 West Old Shakopee Road", tel:"+1-952-746-9296", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Nova Veterinary Clinic", cat:"vet", lat:44.839323, lng:-93.309495, dir:"9056 Penn Avenue South", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "blue-ash": {nombre:"Blue Ash", centro:[39.232007, -84.378282], tz:"America/New_York", lugares:[
  {n:"Advanced Internal Medicine for Pets", cat:"vet", lat:39.225918, lng:-84.376919, dir:"9302 Towne Square Avenue", tel:"+1-513-906-8444", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Center", cat:"vet", lat:39.258036, lng:-84.379573, dir:"10607 Techwoods Circle", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.234028, lng:-84.377557, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "blue-mounds": {nombre:"Blue Mounds", centro:[43.01741, -89.832035], tz:"America/Chicago", lugares:[
  {n:"Starlight Veterinary Clinic", cat:"vet", lat:43.004448, lng:-89.825143, dir:"10902 Eckel Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "blue-springs-missouri": {nombre:"Blue Springs", centro:[39.017316, -94.282265], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:39.023578, lng:-94.249953, dir:"1020 Northeast Coronado Drive", tel:"+1 816-224-3941", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Brookside Barkery - Blue Springs", cat:"tienda", lat:39.00886, lng:-94.273909, dir:"800 SW US 40 Hwy", tel:"+1-816-683-4900", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:38.998818, lng:-94.273849, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cavanaugh Pet Hospital", cat:"vet", lat:39.03104, lng:-94.290645, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blue Springs Animal Hospital11", cat:"vet", lat:39.010353, lng:-94.279431, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"AniMed Animal Hospital", cat:"vet", lat:38.999336, lng:-94.273407, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bluffton": {nombre:"Bluffton", centro:[40.738658, -85.171637], tz:"America/New_York", lugares:[
  {n:"Bluffton Canine Commons", cat:"parque", lat:40.740164, lng:-85.180536, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bluffton-ohio": {nombre:"Bluffton", centro:[40.893446, -83.891785], tz:"America/New_York", lugares:[
  {n:"The Barn Barber", cat:"peluqueria", lat:40.862138, lng:-83.890194, dir:"11370 Hillville Road", tel:"+1 419-233-1334", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bluffton Veterinary", cat:"vet", lat:40.892811, lng:-83.878719, tel:"+1-419-358-2916", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bluffton Community Dog Park", cat:"parque", lat:40.896915, lng:-83.883187, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boardman-ohio": {nombre:"Boardman", centro:[41.024226, -80.662853], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.023647, lng:-80.675183, dir:"411 Boardman Canfield Road", tel:"+13306292266", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Harbor Pet Center", cat:"tienda", lat:41.023045, lng:-80.664502, dir:"7338 Market Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Every Dog Matters", cat:"refugio", lat:41.033938, lng:-80.662446, dir:"6329 Market Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Cuts", cat:"peluqueria", lat:41.049299, lng:-80.662112, dir:"4927 Market Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crago Veterinary Center", cat:"vet", lat:41.030394, lng:-80.663123, dir:"6712 Market Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Exotic Pet Birds", cat:"tienda", lat:41.045071, lng:-80.662395, dir:"5311 Market Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ebert Animal Hospital", cat:"vet", lat:41.024855, lng:-80.666595, dir:"102 Boardman Canfield Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Lodge USA of Boardman", cat:"refugio", lat:41.003892, lng:-80.661402, dir:"8063 Market Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dog Stop Boardman", cat:"tienda", lat:41.012243, lng:-80.663486, dir:"7690 Market Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dr. Donald K. Allen", cat:"vet", lat:41.052996, lng:-80.662421, dir:"4501 Market Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dan's Dirty Dogs", cat:"peluqueria", lat:41.062761, lng:-80.706327, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nancy's Dog Grooming", cat:"peluqueria", lat:41.046957, lng:-80.658149, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Adoptions", cat:"vet", lat:41.057388, lng:-80.663234, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Marge Hartman's Paws Town", cat:"parque", lat:41.018161, lng:-80.652908, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crago Veterinary Clinic", cat:"vet", lat:41.026008, lng:-80.681616, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nails to Tails", cat:"peluqueria", lat:40.987356, lng:-80.684698, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bolingbrook": {nombre:"Bolingbrook", centro:[41.70033, -88.071771], tz:"America/Chicago", lugares:[
  {n:"The-vet.net Animal Clinic", cat:"vet", lat:41.735416, lng:-88.099497, dir:"1827 Wehrli Road", tel:"+1-630-544-3333", horas:[14.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.699212, lng:-88.126853, dir:"159 North Weber Road", tel:"+1 630-771-9777", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"It's So Fluffy Pet Bakery", cat:"tienda", lat:41.720006, lng:-88.04122, dir:"643 East Boughton Road", tel:"+1 630 312 8583", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Boughton Square Animal Clinic", cat:"vet", lat:41.701528, lng:-88.066877, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.703878, lng:-88.067764, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Whalon Lake Dog Park", cat:"parque", lat:41.717025, lng:-88.100471, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bolivar": {nombre:"Bolivar", centro:[37.613692, -93.410797], tz:"America/Chicago", lugares:[
  {n:"Countryside Veterinary", cat:"vet", lat:37.647726, lng:-93.473938, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bondville": {nombre:"Bondville", centro:[40.113205, -88.369505], tz:"America/Chicago", lugares:[
  {n:"Champaign County Humane Society", cat:"refugio", lat:40.110067, lng:-88.31105, dir:"4003 Kearns Drive", tel:"+1-217-344-7297", horas:[14.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog House on the Prairie", cat:"refugio", lat:40.129033, lng:-88.315535, dir:"1211 North Staley Road", tel:"+1-217-766-3351", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Champaign Bark District", cat:"parque", lat:40.0833, lng:-88.329132, dir:"4409 Copper Ridge Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bonner-springs": {nombre:"Bonner Springs", centro:[39.059713, -94.88376], tz:"America/Chicago", lugares:[
  {n:"Bonner Animal Rescue", cat:"refugio", lat:39.054098, lng:-94.884066, dir:"104 Forest Avenue", tel:"+1 913-449-7328", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Clinic", cat:"vet", lat:39.027088, lng:-94.855039, dir:"5576 Hedge Lane Terrace", horas:[8.0, 15.5], nota:"Dato de OpenStreetMap"},
  {n:"K9 & Me Dog Park", cat:"parque", lat:39.061862, lng:-94.887769, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"KC Ren Faire Petting Zoo", cat:"zoo", lat:39.112797, lng:-94.875775, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boonville-indiana": {nombre:"Boonville", centro:[38.049329, -87.274657], tz:"America/Chicago", lugares:[
  {n:"Warrick Veterinary Clinic - Boonville", cat:"vet", lat:38.045738, lng:-87.310257, dir:"888 Aigner Drive", tel:"+1-812-897-4855", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"East Pines Animal Clinic", cat:"vet", lat:38.040799, lng:-87.254971, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boonville-missouri": {nombre:"Boonville", centro:[38.975155, -92.744028], tz:"America/Chicago", lugares:[
  {n:"Countryside Canine", cat:"peluqueria", lat:38.949182, lng:-92.742553, dir:"17961 Boonslick Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Boonville Animal Control & Shelter", cat:"refugio", lat:38.977785, lng:-92.723321, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boulder-hill": {nombre:"Boulder Hill", centro:[41.71253, -88.336182], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.706915, lng:-88.300796, dir:"305 5th Street", tel:"+1 630-554-1272", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Shala Farms", cat:"refugio", lat:41.695143, lng:-88.278613, dir:"909 Wolf's Crossing Road", tel:"+1-630-554-8114", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brothers Country Supply", cat:"tienda", lat:41.696749, lng:-88.311784, dir:"1682 Douglas Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oswego Animal Hospital", cat:"vet", lat:41.713964, lng:-88.288326, dir:"1280 Route 34", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws in Time Pet Resort", cat:"refugio", lat:41.705164, lng:-88.275, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.72219, lng:-88.321287, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bourbonnais": {nombre:"Bourbonnais", centro:[41.163931, -87.883969], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.171206, lng:-87.854134, dir:"1511 North State Route 50", tel:"+1 815-932-0025", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bowling-green-ohio": {nombre:"Bowling Green", centro:[41.374774, -83.651323], tz:"America/New_York", lugares:[
  {n:"Oliver & Max", cat:"peluqueria", lat:41.373302, lng:-83.650617, dir:"192 South Main Street", tel:"+1-419-806-9334", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.356356, lng:-83.648002, dir:"100 South Main Street", tel:"+1 419-352-8406", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Town & County Animal Health Care", cat:"vet", lat:41.373277, lng:-83.62237, dir:"East Wooster Street", horas:[8.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Jones Veterinary Hospital", cat:"vet", lat:41.405939, lng:-83.651124, dir:"17379 North Dixie Highway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wood County Humane Society", cat:"refugio", lat:41.396224, lng:-83.661566, dir:"801 Van Camp Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wood County Dog Shelter", cat:"refugio", lat:41.353217, lng:-83.614052, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Herpetology Lab", cat:"zoo", lat:41.37977, lng:-83.640481, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boyne-city": {nombre:"Boyne City", centro:[45.216675, -85.013942], tz:"America/New_York", lugares:[
  {n:"Lake Street Veterinary Clinic", cat:"vet", lat:45.221856, lng:-85.016053, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brainerd": {nombre:"Brainerd", centro:[46.358022, -94.200829], tz:"America/Chicago", lugares:[
  {n:"Buster Dog Park", cat:"parque", lat:46.344873, lng:-94.208947, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "branson": {nombre:"Branson", centro:[36.644077, -93.216926], tz:"America/Chicago", lugares:[
  {n:"Branson Veterinary Hospital", cat:"vet", lat:36.67043, lng:-93.224502, dir:"29 Wintergreen Road", tel:"+1 417-337-9777", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Branson's Wild World", cat:"zoo", lat:36.639097, lng:-93.258113, dir:"2020 W Country 76 Blvd", tel:"+1 417-239-0854", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.668143, lng:-93.225703, dir:"993 Branson Hills Parkway", tel:"+1 417-334-7143", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Naturals Grooming and Market", cat:"peluqueria", lat:36.664349, lng:-93.239833, dir:"1394 Shepherd of the Hills Expressway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Branson's Promised Land Zoo", cat:"zoo", lat:36.649756, lng:-93.276834, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brentwood-missouri": {nombre:"Brentwood", centro:[38.617552, -90.349283], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.627022, lng:-90.341219, dir:"62 Brentwood Promenade Court", tel:"+1 314-918-9123", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.628756, lng:-90.338834, dir:"8404 Eager Road", tel:"+1 314-962-0034", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Emergency Group", cat:"vet", lat:38.622387, lng:-90.348924, horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "bridgeton-missouri": {nombre:"Bridgeton", centro:[38.756605, -90.42352], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.747902, lng:-90.425264, tel:"+1 314-209-1661", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "brighton-michigan": {nombre:"Brighton", centro:[42.531692, -83.784646], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.543269, lng:-83.783609, dir:"8537 West Grand River Avenue", tel:"+1 810-229-8355", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.537833, lng:-83.783156, dir:"8703 West Grand River Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brighton-wisconsin": {nombre:"Brighton", centro:[42.629185, -88.099808], tz:"America/Chicago", lugares:[
  {n:"Diettrich Farm Horseback Riding School", cat:"zoo", lat:42.61383, lng:-88.129547, dir:"2903 Salem Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brimfield-ohio": {nombre:"Brimfield", centro:[41.100057, -81.346497], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:41.097954, lng:-81.388297, dir:"3975 Cascades Boulevard", tel:"+1 330-677-1134", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bristol-wisconsin": {nombre:"Bristol", centro:[42.558908, -88.04925], tz:"America/Chicago", lugares:[
  {n:"Bristol Dog Park", cat:"parque", lat:42.559668, lng:-88.044766, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "broadview": {nombre:"Broadview", centro:[41.863965, -87.853373], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.85221, lng:-87.84907, dir:"500 Broadview Village Square", tel:"+1 708-344-2951", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "brodhead-wisconsin": {nombre:"Brodhead", centro:[42.619743, -89.376795], tz:"America/Chicago", lugares:[
  {n:"Sugar River Veterinary Service", cat:"vet", lat:42.618895, lng:-89.37954, dir:"1101 West 3rd Avenue", tel:"+1-608-897-2438", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brook-park-ohio": {nombre:"Brook Park", centro:[41.398384, -81.804579], tz:"America/New_York", lugares:[
  {n:"RMS Aquaculture", cat:"tienda", lat:41.388292, lng:-81.82255, dir:"6629 Engle Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tri-City Bark Park", cat:"parque", lat:41.388902, lng:-81.834044, dir:"18825 Sheldon Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"vca Midpark animal hospital", cat:"vet", lat:41.388119, lng:-81.804355, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brookfield-illinois": {nombre:"Brookfield", centro:[41.822838, -87.848085], tz:"America/Chicago", lugares:[
  {n:"Merrick Animal Hospital", cat:"vet", lat:41.816706, lng:-87.849979, dir:"9115 Ogden Avenue", tel:"+1-708-485-6500", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Urban Mutt", cat:"tienda", lat:41.824557, lng:-87.834736, tel:"+1-708-484-8006", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brookfield Zoo Chicago", cat:"zoo", lat:41.834, lng:-87.836719, dir:"8400 31st Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Debbie's", cat:"peluqueria", lat:41.816561, lng:-87.849352, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"For the Birds", cat:"tienda", lat:41.827087, lng:-87.851783, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"CZS Vetranary Hospital", cat:"vet", lat:41.830756, lng:-87.837068, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brookfield-missouri": {nombre:"Brookfield", centro:[39.784469, -93.073535], tz:"America/Chicago", lugares:[
  {n:"Montgomery Veterinary Clinic", cat:"vet", lat:39.783992, lng:-93.071991, dir:"124 East Helm Street", tel:"+16602587452", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Harland's Veterinary Office", cat:"vet", lat:39.78234, lng:-93.072313, dir:"219 South Main Street", tel:"+16602684032", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brookfield-wisconsin": {nombre:"Brookfield", centro:[43.061558, -88.126068], tz:"America/Chicago", lugares:[
  {n:"Bluemound Animal Hospital", cat:"vet", lat:43.0386, lng:-88.118457, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bentley's Pet Stuff", cat:"tienda", lat:43.036925, lng:-88.128257, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brookings-south-dakota": {nombre:"Brookings", centro:[44.311461, -96.79844], tz:"America/Chicago", lugares:[
  {n:"Paws Corner", cat:"peluqueria", lat:44.305199, lng:-96.798515, dir:"127 Main Avenue South", tel:"+16056927296", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Sioux Veterinary Care South", cat:"vet", lat:44.302619, lng:-96.798993, dir:"312 Main Avenue South", tel:"+16056975111", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tail Wagg'n Cuts Canine Salon", cat:"peluqueria", lat:44.293567, lng:-96.769816, dir:"1080 22nd Avenue South", tel:"+16056927718", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East River Equine Veterinary Services", cat:"vet", lat:44.333716, lng:-96.747369, dir:"2606 34th Avenue", tel:"+16056519327", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hawk Stables LLC", cat:"refugio", lat:44.328063, lng:-96.771658, dir:"1913 20th Avenue", tel:"+16056955213", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sutton Veterinary Clinic, PC", cat:"vet", lat:44.326331, lng:-96.770718, dir:"2005 Highway 14 Bypass", tel:"+1605-6927101", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Sioux Veterinary Care", cat:"vet", lat:44.326334, lng:-96.772842, dir:"1907 Highway 14 Bypass", tel:"+1-605-697-5200", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VD Equine", cat:"refugio", lat:44.328099, lng:-96.759875, dir:"1830 25th Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brookings Animal Control", cat:"refugio", lat:44.309931, lng:-96.811721, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heartland Veterinary Clinic", cat:"vet", lat:44.325663, lng:-96.818528, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brookline-missouri": {nombre:"Brookline", centro:[37.163215, -93.420482], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:37.180404, lng:-93.355803, dir:"3840 West Washita", tel:"+1 417-370-6231", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "brooklyn-heights-ohio": {nombre:"Brooklyn Heights", centro:[41.421363, -81.677473], tz:"America/New_York", lugares:[
  {n:"Foxy Fur Grooming Salon", cat:"peluqueria", lat:41.429501, lng:-81.696706, dir:"2032 West Schaaf Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Able Animal Hospital", cat:"vet", lat:41.413596, lng:-81.710249, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Something Fishy", cat:"tienda", lat:41.424921, lng:-81.710116, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brooklyn-ohio": {nombre:"Brooklyn", centro:[41.439754, -81.740556], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.424381, lng:-81.735504, dir:"4808 Ridge Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Platinum Pooch Grooming", cat:"peluqueria", lat:41.441382, lng:-81.705344, dir:"4196 Pearl Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lakeshore Feed and Seed Pet Food and Supplies", cat:"tienda", lat:41.469812, lng:-81.72228, dir:"5116 Clark Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cleveland Metroparks Zoo", cat:"zoo", lat:41.447357, lng:-81.71228, dir:"3900 Wildlife Way", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Four Paws & Claws Grooming Salon", cat:"peluqueria", lat:41.437171, lng:-81.708621, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brooklyn-park-minnesota": {nombre:"Brooklyn Park", centro:[45.100481, -93.344358], tz:"America/Chicago", lugares:[
  {n:"Edinburgh Pet Health Center", cat:"vet", lat:45.109324, lng:-93.342111, tel:"+1-763-493-9080", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brookdale Off Leash Dog Park", cat:"parque", lat:45.09293, lng:-93.333348, dir:"7650 June Avenue North", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brookville-indiana": {nombre:"Brookville", centro:[39.423107, -85.012738], tz:"America/New_York", lugares:[
  {n:"Wolf Creek Habitat & Rescue", cat:"refugio", lat:39.388396, lng:-85.05624, dir:"14099 Wolf Creek Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grooming Girls Pet Salon", cat:"peluqueria", lat:39.414479, lng:-85.011617, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brownlee-park": {nombre:"Brownlee Park", centro:[42.31893, -85.14249], tz:"America/New_York", lugares:[
  {n:"Binder Park Zoo", cat:"zoo", lat:42.239398, lng:-85.157861, dir:"7400 Division Drive", tel:"+1-269-979-1351", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Home Run Dog Park", cat:"parque", lat:42.338142, lng:-85.15349, dir:"800 E Roosevelt Ave", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "browns-valley": {nombre:"Browns Valley", centro:[45.595239, -96.833407], tz:"America/Chicago", lugares:[
  {n:"Valley Veterinarian Clinic", cat:"vet", lat:45.595055, lng:-96.833397, dir:"321 Broadway", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brownsburg": {nombre:"Brownsburg", centro:[39.844441, -86.396896], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.855477, lng:-86.390221, dir:"931 North Green Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oinking Acres Farm Rescue and Sanctuary", cat:"refugio", lat:39.886831, lng:-86.412966, dir:"8420 North County Road 650 East", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brownstown-charter-township": {nombre:"Brownstown Charter Township", centro:[42.152923, -83.275325], tz:"America/New_York", lugares:[
  {n:"Willowood Acres Veterinary Clinic", cat:"vet", lat:42.166807, lng:-83.326295, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brunswick-ohio": {nombre:"Brunswick", centro:[41.245682, -81.82754], tz:"America/New_York", lugares:[
  {n:"Brunswick Dog Park", cat:"parque", lat:41.242894, lng:-81.828116, dir:"Cross Creek Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brussels": {nombre:"Brussels", centro:[38.949494, -90.588731], tz:"America/Chicago", lugares:[
  {n:"Two Rivers Wildlife Area", cat:"zoo", lat:38.924922, lng:-90.51884, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bryan": {nombre:"Bryan", centro:[41.474773, -84.552451], tz:"America/New_York", lugares:[
  {n:"Cornerstone Critters", cat:"tienda", lat:41.473423, lng:-84.550597, dir:"145 South Main Street", tel:"+1-419-636-3670", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "buffalo-grove": {nombre:"Buffalo Grove", centro:[42.154421, -87.958962], tz:"America/Chicago", lugares:[
  {n:"Country Court Animal Hospital", cat:"vet", lat:42.138155, lng:-87.961312, dir:"125 West Dundee Road", tel:"+1-847-520-4110", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Pet Hotel", cat:"refugio", lat:42.184261, lng:-87.950921, dir:"22096 North Pet Lane", tel:"+18476349444", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Kay's Animal Shelter", cat:"refugio", lat:42.124825, lng:-87.97983, dir:"2705 North Arlington Heights Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Center of Buffalo Grove", cat:"vet", lat:42.163331, lng:-87.965828, dir:"600 McHenry Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Buffalo Grove Animal Hospital", cat:"vet", lat:42.138737, lng:-87.982643, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "buffalo-minnesota": {nombre:"Buffalo", centro:[45.171908, -93.874694], tz:"America/Chicago", lugares:[
  {n:"Ruffin Inn", cat:"refugio", lat:45.189856, lng:-93.828609, dir:"2667 Dague Avenue Northeast", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Buffalo Equine", cat:"vet", lat:45.20562, lng:-93.888307, dir:"3810 County Road 12 North", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crossroads Animal Shelter", cat:"refugio", lat:45.138304, lng:-93.831602, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "buffalo-missouri": {nombre:"Buffalo", centro:[37.643529, -93.092], tz:"America/Chicago", lugares:[
  {n:"Moore", cat:"vet", lat:37.626228, lng:-93.105593, dir:"S Ash St", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "burbank-illinois": {nombre:"Burbank", centro:[41.741406, -87.768608], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.752744, lng:-87.743356, dir:"7730 South Cicero Avenue", tel:"+1 708-346-9500", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.733159, lng:-87.77897, dir:"8717 South Ridgeland Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "burke": {nombre:"Burke", centro:[43.1825, -99.292045], tz:"America/Chicago", lugares:[
  {n:"Burke Veterinary Clinic", cat:"vet", lat:43.180394, lng:-99.298089, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "burlington-illinois": {nombre:"Burlington", centro:[42.052804, -88.548141], tz:"America/Chicago", lugares:[
  {n:"Morning Light Stables", cat:"refugio", lat:42.021523, lng:-88.484458, dir:"10N680 Tower Road", tel:"+1-847-533-4058", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "burlington-ohio": {nombre:"Burlington", centro:[38.407504, -82.529842], tz:"America/New_York", lugares:[
  {n:"Petland", cat:"tienda", lat:38.412067, lng:-82.521714, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "burlington-wisconsin": {nombre:"Burlington", centro:[42.680105, -88.276413], tz:"America/Chicago", lugares:[
  {n:"Animal Wellness Center of Burlington", cat:"vet", lat:42.665079, lng:-88.28461, dir:"688 McHenry Street", tel:"+1-262-763-6055", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Molitor Pet and Bird Clinic", cat:"vet", lat:42.677028, lng:-88.274282, dir:"108 North Pine Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "burnham": {nombre:"Burnham", centro:[41.638924, -87.556711], tz:"America/Chicago", lugares:[
  {n:"Uncle Paws Grooming Salon", cat:"peluqueria", lat:41.702874, lng:-87.53436, dir:"3656 East 106th Street", tel:"+1 773-902-2020", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Seven Seas Pet Care Center", cat:"vet", lat:41.65325, lng:-87.54557, dir:"13311 South Brandon Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Calumet Bark", cat:"parque", lat:41.717838, lng:-87.528795, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "burnsville": {nombre:"Burnsville", centro:[44.767057, -93.277389], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:44.748629, lng:-93.285574, dir:"14051 Aldrich Avenue South", tel:"+1 952-898-4543", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Crossroads Animal Hospital", cat:"vet", lat:44.743663, lng:-93.280233, dir:"14321 Nicollet Court", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:44.745714, lng:-93.301182, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Palomino Pet Hospital", cat:"vet", lat:44.756676, lng:-93.246467, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:44.748809, lng:-93.296877, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:44.747221, lng:-93.281615, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "burr-ridge": {nombre:"Burr Ridge", centro:[41.750297, -87.916182], tz:"America/Chicago", lugares:[
  {n:"Two Bostons", cat:"tienda", lat:41.752329, lng:-87.912759, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "burton-ohio": {nombre:"Burton", centro:[41.471426, -81.145104], tz:"America/New_York", lugares:[
  {n:"Burton Veterinary Clinic", cat:"vet", lat:41.470453, lng:-81.152822, dir:"13625 West Center Street", tel:"+1-440-834-4444", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "butler-wisconsin": {nombre:"Butler", centro:[43.105844, -88.069534], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:43.086875, lng:-88.063648, dir:"3870 North 124th Street", tel:"+1 414-461-1996", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Motel", cat:"refugio", lat:43.118921, lng:-88.07542, dir:"13175 West Silver Spring Road", tel:"+1-262-781-5200", horas:[6.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Brook-Falls Veterinary Hospital & Exotic Care, Inc.", cat:"vet", lat:43.105201, lng:-88.09654, dir:"N48W14850 Lisbon Road", tel:"+1-262-781-5277", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Granville Dog Exercise Area", cat:"parque", lat:43.149451, lng:-88.057739, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "byron-minnesota": {nombre:"Byron", centro:[44.032592, -92.645439], tz:"America/Chicago", lugares:[
  {n:"Zollman Zoo", cat:"zoo", lat:44.083908, lng:-92.649331, dir:"5731 County Road 105 NW", tel:"+1-507-775-2451", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oxbow Park and Zollman Zoo", cat:"zoo", lat:44.083478, lng:-92.648741, dir:"5731 County Road 105 Northwest", horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Meadow View Veterinary Clinic", cat:"vet", lat:44.03487, lng:-92.563462, dir:"6214 14th Street Northwest", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Deer Pen", cat:"zoo", lat:44.081889, lng:-92.650076, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bison Pen", cat:"zoo", lat:44.081805, lng:-92.648218, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Elk Pen", cat:"zoo", lat:44.080704, lng:-92.649803, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cable": {nombre:"Cable", centro:[46.208008, -91.29213], tz:"America/Chicago", lugares:[
  {n:"Seeley Veterinary Clinic", cat:"vet", lat:46.118844, lng:-91.342205, dir:"12942 West County Road OO", tel:"+1-715-634-5996", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "cabool": {nombre:"Cabool", centro:[37.123941, -92.101268], tz:"America/Chicago", lugares:[
  {n:"Cabool Veterinary Clinic", cat:"vet", lat:37.128664, lng:-92.090244, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cadott": {nombre:"Cadott", centro:[44.948019, -91.150703], tz:"America/Chicago", lugares:[
  {n:"Northern Paws Pet Lodge", cat:"refugio", lat:45.009226, lng:-91.147396, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cairo-ohio": {nombre:"Cairo", centro:[40.831974, -84.081878], tz:"America/New_York", lugares:[
  {n:"All About Dogs", cat:"peluqueria", lat:40.832596, lng:-84.105035, dir:"275 1/2 East Lincoln Highway", tel:"+1 419-641-3647", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "caledonia-michigan": {nombre:"Caledonia", centro:[42.789119, -85.516339], tz:"America/New_York", lugares:[
  {n:"Southkent Veterinary Hospital", cat:"vet", lat:42.800388, lng:-85.507684, dir:"9030 North Rodgers Court Southeast", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "caledonia-wisconsin": {nombre:"Caledonia", centro:[42.787058, -87.804393], tz:"America/Chicago", lugares:[
  {n:"North Shore Animal Hospital", cat:"vet", lat:42.779457, lng:-87.807148, dir:"4630 Douglas Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Caledonia Veterinary Clinic", cat:"vet", lat:42.775724, lng:-87.872856, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "calumet-park": {nombre:"Calumet Park", centro:[41.663908, -87.657579], tz:"America/Chicago", lugares:[
  {n:"Kragness Animal Hospital", cat:"vet", lat:41.688173, lng:-87.601307, dir:"11332 South Doty Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "camanche": {nombre:"Camanche", centro:[41.788086, -90.25624], tz:"America/Chicago", lugares:[
  {n:"Exotic Pet Center", cat:"tienda", lat:41.816163, lng:-90.224624, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cambridge-minnesota": {nombre:"Cambridge", centro:[45.572741, -93.224392], tz:"America/Chicago", lugares:[
  {n:"VetCare Clinic", cat:"vet", lat:45.571593, lng:-93.201826, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Just For Paws Grooming", cat:"peluqueria", lat:45.574437, lng:-93.220635, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chasing Your Tails Dog Groom", cat:"peluqueria", lat:45.57252, lng:-93.223165, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East Central Veterinarians", cat:"vet", lat:45.580693, lng:-93.21857, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cameron-missouri": {nombre:"Cameron", centro:[39.74127, -94.238448], tz:"America/Chicago", lugares:[
  {n:"Cameron Veterinary Clinic", cat:"vet", lat:39.732542, lng:-94.232994, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "canal-fulton": {nombre:"Canal Fulton", centro:[40.889778, -81.597623], tz:"America/New_York", lugares:[
  {n:"Barkly and Meows", cat:"tienda", lat:40.890934, lng:-81.597051, dir:"207 East Market Street", tel:"+1-330-408-7050", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fulton Animal Hospital", cat:"vet", lat:40.894304, lng:-81.591272, dir:"812 Cherry Street East", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "canal-winchester": {nombre:"Canal Winchester", centro:[39.842821, -82.805646], tz:"America/New_York", lugares:[
  {n:"Lucky Bones, Inc.", cat:"refugio", lat:39.856369, lng:-82.782213, dir:"8200 Howe Industrial Parkway", tel:"+1-614-367-7297", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"MedVet Diley Hill Animal Emergency Center", cat:"vet", lat:39.842902, lng:-82.775665, dir:"Basil Western Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BrewDog Dog Park", cat:"parque", lat:39.846155, lng:-82.826081, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Winchester Veterinary Clinic", cat:"vet", lat:39.842693, lng:-82.823749, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.852242, lng:-82.826358, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:39.852487, lng:-82.826355, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Personal Touch", cat:"peluqueria", lat:39.87595, lng:-82.826851, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gigi's", cat:"refugio", lat:39.88789, lng:-82.823428, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "caney": {nombre:"Caney", centro:[37.011512, -95.935041], tz:"America/Chicago", lugares:[
  {n:"Safari Zoological Park", cat:"zoo", lat:37.014726, lng:-95.900668, dir:"1751 County Road 1425", tel:"+1-620-515-2885", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "canfield": {nombre:"Canfield", centro:[41.025059, -80.760912], tz:"America/New_York", lugares:[
  {n:"Eagle Cross Kennels", cat:"tienda", lat:40.982768, lng:-80.758987, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bow Wow's", cat:"peluqueria", lat:41.02708, lng:-80.761741, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Building 15 - Old MacDonald's Barn", cat:"zoo", lat:41.013797, lng:-80.75628, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wags 'n Wiggles Resort", cat:"refugio", lat:41.026198, lng:-80.798923, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "canton-charter-township": {nombre:"Canton Charter Township", centro:[42.307655, -83.486896], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:42.321376, lng:-83.469407, dir:"43465 Ford Road", tel:"+1 734-844-2653", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Canton Animal Hospital", cat:"vet", lat:42.275617, lng:-83.4668, dir:"43439 Michigan Avenue", tel:"+1-734-397-7779", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.321567, lng:-83.471522, dir:"43665 Ford Road", tel:"+1-734-981-9191", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Arbor Pointe Veterinary hospital", cat:"vet", lat:42.321465, lng:-83.456112, dir:"42043 Ford Road", tel:"+1-734-844-8844", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.270336, lng:-83.499464, dir:"47142 Michigan Avenue", tel:"+1 734-495-0715", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Canton Dog Park", cat:"parque", lat:42.309374, lng:-83.528896, dir:"Denton Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Premier Pet Supply", cat:"tienda", lat:42.31881, lng:-83.489948, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:42.323866, lng:-83.454198, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "canton-ohio": {nombre:"Canton", centro:[40.798546, -81.374951], tz:"America/New_York", lugares:[
  {n:"Willy's Dog Park", cat:"parque", lat:40.798254, lng:-81.390173, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camden Animal Clinic", cat:"vet", lat:40.795994, lng:-81.390826, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "capac": {nombre:"Capac", centro:[43.012527, -82.927988], tz:"America/New_York", lugares:[
  {n:"Boujee Poochie Cuts", cat:"peluqueria", lat:43.013445, lng:-82.928152, dir:"126 North Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rottwielers", cat:"tienda", lat:43.011935, lng:-82.927161, dir:"103 South Walker Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Holly's Doghouse", cat:"peluqueria", lat:43.025341, lng:-82.932244, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carbondale-illinois": {nombre:"Carbondale", centro:[37.727469, -89.216655], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:37.734449, lng:-89.191086, dir:"1310 East Main Street", tel:"+1 618-529-5249", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Striegel Animal Hospital", cat:"vet", lat:37.737553, lng:-89.252466, dir:"2701 West Striegel Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carlyle": {nombre:"Carlyle", centro:[38.610326, -89.37258], tz:"America/Chicago", lugares:[
  {n:"Furfetti Pet Salon", cat:"peluqueria", lat:38.610853, lng:-89.386336, dir:"Fairfax Street", tel:"+16184177186", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carmel": {nombre:"Carmel", centro:[39.978419, -86.128368], tz:"America/New_York", lugares:[
  {n:"VCA Village park animal hospital", cat:"vet", lat:40.005777, lng:-86.128736, dir:"15018 Greywood Court", tel:"+1-317-848-1898", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Carter Veterinary Medical Center", cat:"vet", lat:39.987615, lng:-86.138902, dir:"13694 North Meridian Street", tel:"+1-317-844-6868", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Moochie & Co", cat:"tienda", lat:39.996884, lng:-86.129316, dir:"Clay Terrace Boulevard", tel:"+1-614-526-3152", horas:[10.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:40.001099, lng:-86.069592, dir:"14753 Hazel Dell Crossing", tel:"+13175668222", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.9585, lng:-86.116662, dir:"2160 East 116th Street", tel:"+1 317-587-1820", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Noble West Animal Hospital", cat:"vet", lat:40.001748, lng:-86.069301, dir:"14765 Hazel Dell Crossing", tel:"+13172183731", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.002145, lng:-86.129266, dir:"14720 North Meridian Street", tel:"+1 317-815-9568", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"The Range Pet Lodge", cat:"refugio", lat:39.992115, lng:-86.126448, tel:"+1-317-571-7777", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hazel Dell Animal Hospital", cat:"vet", lat:39.979775, lng:-86.072106, dir:"13190 Hazel Dell Parkway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carmel Veterinary Hospital", cat:"vet", lat:39.9703, lng:-86.091204, dir:"12530 North Gray Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Izzy's Place - A Dog Bakery", cat:"tienda", lat:39.97862, lng:-86.141927, dir:"816 West Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Leo's Pet Care", cat:"vet", lat:39.978623, lng:-86.142187, dir:"828 West Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodland Animal Hospital and Pet Lodge", cat:"vet", lat:39.961669, lng:-86.131698, dir:"269 West Carmel Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetPeople", cat:"tienda", lat:40.001914, lng:-86.118775, dir:"2484 East 146th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Pet Care", cat:"refugio", lat:39.96721, lng:-86.134933, dir:"376 Gradle Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Companion Animal Medical Center", cat:"vet", lat:39.957653, lng:-86.126266, dir:"1455 South Range Line Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:39.964223, lng:-86.133436, dir:"489 Gradle Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cottage Animal Clinic of Carmel", cat:"vet", lat:39.982092, lng:-86.127293, dir:"420 North Range Line Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Noah's Animal Clinic at Carmel", cat:"vet", lat:40.000035, lng:-86.107484, dir:"3309 East 146th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Dog Hotel & Spa", cat:"refugio", lat:39.976359, lng:-86.129405, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VetCheck", cat:"vet", lat:39.95859, lng:-86.127633, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carmi": {nombre:"Carmi", centro:[38.09088, -88.158649], tz:"America/Chicago", lugares:[
  {n:"Carmi Veterinary Clinic", cat:"vet", lat:38.076329, lng:-88.19216, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "caro": {nombre:"Caro", centro:[43.491132, -83.396897], tz:"America/New_York", lugares:[
  {n:"Caro Veterinary Clinic", cat:"vet", lat:43.467133, lng:-83.424637, dir:"1990 Dixon Road", tel:"+1-989-673-4109", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Maple Grove Veterinary Clinic", cat:"vet", lat:43.472473, lng:-83.419535, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Caro Pet & Groom", cat:"peluqueria", lat:43.466822, lng:-83.425227, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carol-stream": {nombre:"Carol Stream", centro:[41.912529, -88.134793], tz:"America/Chicago", lugares:[
  {n:"Woof Gang Bakery and Groomery", cat:"peluqueria", lat:41.93871, lng:-88.146374, dir:"774 West Army Trail Road", tel:"+1-630-566-9945", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.938022, lng:-88.115955, dir:"412 West Army Trail Road", tel:"+16303071210", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carol Stream Animal Hospital", cat:"vet", lat:41.92432, lng:-88.123321, dir:"140 West Elk Trail", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:41.908267, lng:-88.144426, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carroll-ohio": {nombre:"Carroll", centro:[39.798953, -82.701002], tz:"America/New_York", lugares:[
  {n:"Creature Comforts Veterinary Center", cat:"vet", lat:39.776157, lng:-82.687714, dir:"4675 Old Columbus Road Northwest", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carrollton-missouri": {nombre:"Carrollton", centro:[39.358241, -93.496543], tz:"America/Chicago", lugares:[
  {n:"Carroll County Veterinary Services", cat:"vet", lat:39.373252, lng:-93.485365, tel:"+1-660-542-6149", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"bell veterinary", cat:"vet", lat:39.366147, lng:-93.48588, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carrollton-ohio": {nombre:"Carrollton", centro:[40.57284, -81.085653], tz:"America/New_York", lugares:[
  {n:"Carrollton Animal Hospital", cat:"vet", lat:40.589802, lng:-81.092521, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carterville": {nombre:"Carterville", centro:[37.761937, -89.077271], tz:"America/Chicago", lugares:[
  {n:"Cannon Park Dog Park", cat:"parque", lat:37.761259, lng:-89.093466, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carthage-missouri": {nombre:"Carthage", centro:[37.176514, -94.310341], tz:"America/Chicago", lugares:[
  {n:"Carthage Animal Hospital", cat:"vet", lat:37.150357, lng:-94.314424, dir:"2213 Fairlawn Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "caruthersville": {nombre:"Caruthersville", centro:[36.191663, -89.654845], tz:"America/Chicago", lugares:[
  {n:"Caruthersville Humane Society", cat:"refugio", lat:36.154314, lng:-89.659697, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cary": {nombre:"Cary", centro:[42.209116, -88.240021], tz:"America/Chicago", lugares:[
  {n:"The Animal Doctor", cat:"vet", lat:42.216934, lng:-88.252709, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "casco-wisconsin": {nombre:"Casco", centro:[44.557775, -87.618146], tz:"America/Chicago", lugares:[
  {n:"Dairyland Veterinary Service", cat:"vet", lat:44.557496, lng:-87.618776, dir:"310 Main Street", tel:"+1 920-837-7766", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Meade Manor Pet Clinic", cat:"vet", lat:44.573203, lng:-87.55289, dir:"N6785 State Highway 54", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "caseville": {nombre:"Caseville", centro:[43.938699, -83.272229], tz:"America/New_York", lugares:[
  {n:"Caseville Small Animal Clinic", cat:"vet", lat:43.93571, lng:-83.278014, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Caseville Dog Park", cat:"parque", lat:43.925673, lng:-83.283052, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "casselton": {nombre:"Casselton", centro:[46.900529, -97.2112], tz:"America/Chicago", lugares:[
  {n:"Casselton Veterinary Services, Inc.", cat:"vet", lat:46.890109, lng:-97.210163, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cassopolis": {nombre:"Cassopolis", centro:[41.911713, -86.010007], tz:"America/New_York", lugares:[
  {n:"Cass County Animal Control", cat:"refugio", lat:41.919472, lng:-86.020342, dir:"323 North M-62", tel:"+1 269-445-3701", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "cedar-falls": {nombre:"Cedar Falls", centro:[42.536181, -92.447758], tz:"America/Chicago", lugares:[
  {n:"Taylor Veterinary Hospital", cat:"vet", lat:42.535428, lng:-92.44465, dir:"315 State Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.486466, lng:-92.437802, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw Park", cat:"parque", lat:42.508243, lng:-92.444982, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cedar Heights Pet Clinic", cat:"vet", lat:42.509498, lng:-92.42142, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cedar-grove-wisconsin": {nombre:"Cedar Grove", centro:[43.57204, -87.820311], tz:"America/Chicago", lugares:[
  {n:"Cedar Grove Vet Services", cat:"vet", lat:43.557429, lng:-87.821722, dir:"23 County Road RR", tel:"+1-920-668-6212", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cedar-rapids": {nombre:"Cedar Rapids", centro:[41.975887, -91.670405], tz:"America/Chicago", lugares:[
  {n:"What The Pup Doggie Salon and Spa", cat:"peluqueria", lat:41.974064, lng:-91.65132, dir:"1132 9th Street Southeast", tel:"+1-319-804-9354", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Saint Cat Rescue and Adoption Center", cat:"refugio", lat:41.962233, lng:-91.686193, dir:"1200 16th Avenue Southwest", tel:"+1-319-551-7537", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Family Hospital", cat:"vet", lat:41.999454, lng:-91.665973, dir:"1101 J Avenue Northeast", tel:"+1-319-536-1007", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Last Hope Animal Rescue", cat:"refugio", lat:41.962009, lng:-91.697539, dir:"1823 16th Avenue Southwest", tel:"+1-319-200-4880", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cedar Rapids Animal Hospital", cat:"vet", lat:41.975614, lng:-91.627531, dir:"1000 Memorial Drive Southeast", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"vet", lat:41.97657, lng:-91.59989, dir:"4419 Mount Vernon Road Southeast", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petting Zoo", cat:"zoo", lat:41.988024, lng:-91.625903, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All-Pets Veterinary Clinic", cat:"vet", lat:41.950506, lng:-91.676455, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.949961, lng:-91.718281, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cedar-springs": {nombre:"Cedar Springs", centro:[43.22336, -85.551424], tz:"America/New_York", lugares:[
  {n:"Northland Animal Hospital", cat:"vet", lat:43.1731, lng:-85.551253, dir:"11450 Northland Drive Northeast", tel:"+1 616-866-1322", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Deer Tracks Junction Adventure Park", cat:"zoo", lat:43.173551, lng:-85.475677, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cedarburg": {nombre:"Cedarburg", centro:[43.296655, -87.987535], tz:"America/Chicago", lugares:[
  {n:"Cedarburg Veterinary Clinic", cat:"vet", lat:43.27898, lng:-87.98992, dir:"N143 W6475 Pioneer Road", tel:"+1-262-377-2460", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Flying Fur", cat:"refugio", lat:43.285631, lng:-87.983655, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "celina": {nombre:"Celina", centro:[40.548936, -84.570234], tz:"America/New_York", lugares:[
  {n:"Barks & Bubbles of Celina", cat:"peluqueria", lat:40.545885, lng:-84.591201, dir:"5485 State Route 29", tel:"+1-419-586-8873", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "center-point-indiana": {nombre:"Center Point", centro:[39.416986, -87.077236], tz:"America/Chicago", lugares:[
  {n:"Exotic Feline Rescue Center", cat:"refugio", lat:39.392733, lng:-87.065364, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "center-point-iowa": {nombre:"Center Point", centro:[42.190827, -91.785177], tz:"America/Chicago", lugares:[
  {n:"Graham Animal Hospital", cat:"vet", lat:42.177075, lng:-91.776532, horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "centerville-ohio": {nombre:"Centerville", centro:[39.628393, -84.159382], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.632998, lng:-84.208103, dir:"2028 Miamisburg Centerville Road", tel:"+1 937-291-3001", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wash Your Dog", cat:"peluqueria", lat:39.644456, lng:-84.15126, dir:"199 Alexandersville-Bellbrook Road East", tel:"+1-937-312-1200", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Jan's Grooming", cat:"peluqueria", lat:39.626526, lng:-84.159425, dir:"69 South Main Street", tel:"+1-937-436-5267", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SICSA Pet Adoption Center", cat:"refugio", lat:39.630024, lng:-84.205836, dir:"8172 Washington Church Road", tel:"+1-937-294-6505", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Alternatives", cat:"vet", lat:39.630329, lng:-84.158031, dir:"21 East Ridgeway Drive", tel:"+1-937-433-2202", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Scratching Post Cat Hospital and Retreat", cat:"vet", lat:39.628531, lng:-84.163917, dir:"133 West Franklin Street", tel:"+1-937-435-7228", horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:39.658117, lng:-84.159817, dir:"6067 Far Hills Avenue", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"MeowZa Cat Boutique", cat:"refugio", lat:39.645617, lng:-84.153634, dir:"101 Alexandersville-Bellbrook Road East", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Paws Inn", cat:"vet", lat:39.62971, lng:-84.221044, dir:"8926 Kingsridge Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet People", cat:"tienda", lat:39.656461, lng:-84.158145, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Far Hills Animal Clinic", cat:"vet", lat:39.654742, lng:-84.156513, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Evergreen Veterinary Hosptial", cat:"vet", lat:39.650211, lng:-84.135928, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "central-stickney": {nombre:"Central Stickney", centro:[41.803882, -87.757973], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.817054, lng:-87.725551, dir:"4146 South Pulaski Road", tel:"+1 773-299-9611", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "centralia": {nombre:"Centralia", centro:[38.525049, -89.133404], tz:"America/Chicago", lugares:[
  {n:"Centralia Bark Park", cat:"parque", lat:38.519157, lng:-89.122485, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "centreville-michigan": {nombre:"Centreville", centro:[41.923445, -85.528742], tz:"America/New_York", lugares:[
  {n:"St Joseph County Animal Control", cat:"refugio", lat:41.921457, lng:-85.514519, dir:"652 East Main Street", tel:"+1 269-467-6475", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chadron": {nombre:"Chadron", centro:[42.830981, -103.000373], tz:"America/Denver", lugares:[
  {n:"Petersen Drug", cat:"farma", lat:42.82916, lng:-103.000373, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Clinic", cat:"vet", lat:42.831164, lng:-103.012157, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chamberlain-south-dakota": {nombre:"Chamberlain", centro:[43.810931, -99.330243], tz:"America/Chicago", lugares:[
  {n:"Mid River Veterinary Clinic", cat:"vet", lat:43.774457, lng:-99.311823, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pharmco Animal Health", cat:"vet", lat:43.785883, lng:-99.312489, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "champaign": {nombre:"Champaign", centro:[40.116484, -88.243093], tz:"America/Chicago", lugares:[
  {n:"Cat Clinic of Central Illinois", cat:"vet", lat:40.112644, lng:-88.294959, dir:"2917 West Springfield Avenue", tel:"+1 217 3598400", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sailfin Pet Shop", cat:"tienda", lat:40.107587, lng:-88.243182, dir:"720 South Neil Street", tel:"+1-217-352-1121", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.096638, lng:-88.293781, dir:"2821 West Kirby Avenue", tel:"+1-217-366-9240", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.139902, lng:-88.26023, dir:"2017 North Prospect Avenue", tel:"+1-217-351-9244", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Crossroads Grooming and Boarding Inc.", cat:"refugio", lat:40.132086, lng:-88.226127, dir:"1906 North Federal Drive", tel:"+1-217-621-5992", horas:[7.5, 9.5], nota:"Dato de OpenStreetMap"},
  {n:"Country View Veterinary Clinic", cat:"vet", lat:40.112406, lng:-88.291069, dir:"2619 West Springfield Avenue", tel:"+1-217-953-8829", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Meadows Animal Hospital", cat:"vet", lat:40.148122, lng:-88.290351, dir:"2610 West Bloomington Road", tel:"+1-217-352-1446", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"The Dog Den", cat:"refugio", lat:40.133538, lng:-88.241921, dir:"31 East Kenyon Road", tel:"+1-217-552-1318", horas:[6.0, 9.0], nota:"Dato de OpenStreetMap"},
  {n:"The Pet Pro", cat:"vet", lat:40.097852, lng:-88.277906, dir:"1815 West Kirby Avenue", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Moore's Rescue Ranch", cat:"refugio", lat:40.15267, lng:-88.24035, dir:"3113 North Market Street", horas:[16.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "champlin": {nombre:"Champlin", centro:[45.188854, -93.397454], tz:"America/Chicago", lugares:[
  {n:"Elm Creek Dog Off-Leash Area", cat:"parque", lat:45.167569, lng:-93.419447, dir:"11750 Zachary Lane North", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chanhassen": {nombre:"Chanhassen", centro:[44.86184, -93.530721], tz:"America/Chicago", lugares:[
  {n:"Chanhassen Groomers", cat:"tienda", lat:44.86017, lng:-93.532007, dir:"450 West 79th Street", tel:"+1-952-934-5688", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chanhassen Vetrinary Clinic", cat:"tienda", lat:44.860171, lng:-93.531834, dir:"440 West 79th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's Pet Food & Supplies", cat:"tienda", lat:44.8619, lng:-93.538695, dir:"7818 Market Boulevard", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chardon": {nombre:"Chardon", centro:[41.582494, -81.203407], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.579423, lng:-81.211218, dir:"425 Water Street", tel:"+1-440-286-5442", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of Chardon", cat:"vet", lat:41.58134, lng:-81.227474, dir:"656 Water Street", tel:"+1-440-285-9191", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "charleston-illinois": {nombre:"Charleston", centro:[39.496146, -88.176152], tz:"America/Chicago", lugares:[
  {n:"Albin Animal Hospital", cat:"vet", lat:39.479402, lng:-88.162388, dir:"1915 18th Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "charlestown-ohio": {nombre:"Charlestown", centro:[41.163112, -81.147877], tz:"America/New_York", lugares:[
  {n:"Small Dog Park", cat:"parque", lat:41.150101, lng:-81.146513, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:41.15042, lng:-81.145955, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "charlevoix": {nombre:"Charlevoix", centro:[45.317649, -85.258348], tz:"America/New_York", lugares:[
  {n:"Hungry Ducks Farm", cat:"zoo", lat:45.272895, lng:-85.213377, dir:"04580 M 66 North", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "charlotte-michigan": {nombre:"Charlotte", centro:[42.563737, -84.835579], tz:"America/New_York", lugares:[
  {n:"Town & Country Animal Hospital", cat:"vet", lat:42.522569, lng:-84.836317, dir:"3110 South Cochran Road", tel:"+1-517-543-2330", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "chaska": {nombre:"Chaska", centro:[44.789407, -93.602179], tz:"America/Chicago", lugares:[
  {n:"Carver Scott Humane Society", cat:"refugio", lat:44.792093, lng:-93.599269, dir:"822 Yellow Brick Road", tel:"+19523683553", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Spa", cat:"tienda", lat:44.801069, lng:-93.57952, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chatham": {nombre:"Chatham", centro:[39.676163, -89.704544], tz:"America/Chicago", lugares:[
  {n:"Chatham Dog Park", cat:"parque", lat:39.673918, lng:-89.716159, dir:"Churchill Drive", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "chauncey": {nombre:"Chauncey", centro:[39.397849, -82.129312], tz:"America/New_York", lugares:[
  {n:"Athens County Dog Shelter", cat:"refugio", lat:39.394277, lng:-82.12198, dir:"13222 State Route 13", tel:"+1-740-593-5415", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "cheboygan": {nombre:"Cheboygan", centro:[45.646956, -84.47448], tz:"America/New_York", lugares:[
  {n:"Animal Medical Clinic", cat:"vet", lat:45.645486, lng:-84.472191, dir:"108 East State Street", tel:"+1-231-597-9372", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Elaine's Pretty Pets", cat:"peluqueria", lat:45.644088, lng:-84.478153, dir:"124 North Huron Street", tel:"+1-231-627-5643", horas:[10.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"North Straits Animal Clinic", cat:"vet", lat:45.619783, lng:-84.477797, dir:"11118 North Straits Highway", tel:"+1-231-597-9225", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Black River Animal Hotel LLC", cat:"refugio", lat:45.609187, lng:-84.433836, dir:"10555 North Black River Road", tel:"+1-231-597-8428", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chelsea-michigan": {nombre:"Chelsea", centro:[42.318016, -84.020224], tz:"America/New_York", lugares:[
  {n:"City of Chelsea Dog Park", cat:"parque", lat:42.32831, lng:-84.011229, dir:"680 McKinley", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Lane Animal Hospital", cat:"vet", lat:42.325025, lng:-84.021899, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chenoa": {nombre:"Chenoa", centro:[40.741701, -88.719786], tz:"America/Chicago", lugares:[
  {n:"Fetch & Stretch", cat:"parque", lat:40.746669, lng:-88.724918, dir:"205 North Morehead Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cherokee-iowa": {nombre:"Cherokee", centro:[42.74994, -95.554823], tz:"America/Chicago", lugares:[
  {n:"Ken & Jan Kistenmacher Dog Park", cat:"parque", lat:42.74306, lng:-95.548209, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cherry-valley-illinois": {nombre:"Cherry Valley", centro:[42.239296, -88.959711], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.270159, lng:-88.993436, dir:"6320 East State Street", tel:"+1 815-397-7880", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:42.265361, lng:-88.994024, dir:"6305 East State Street", tel:"+1 815-229-0184", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Bellwood Animal Hospital", cat:"vet", lat:42.290996, lng:-88.969439, dir:"1869 North Bell School Road", tel:"+1 815 398 6484", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PAWS Humane Society", cat:"refugio", lat:42.248133, lng:-88.974628, dir:"7282 Cherryvale North Boulevard", tel:"+1 815-299-7297", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:42.248103, lng:-88.972935, dir:"7358 Mid Mall Drive", tel:"+1 815-332-0707", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Corners Dog Park at Elliot Park", cat:"parque", lat:42.267973, lng:-88.959291, dir:"426 Lyford Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hammertime Dog Park", cat:"parque", lat:42.275141, lng:-88.921899, dir:"897 North State Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:42.265318, lng:-88.981105, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Corners Dog Park at Elliot Park", cat:"parque", lat:42.267174, lng:-88.958386, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chesterfield-charter-township": {nombre:"Chesterfield Charter Township", centro:[42.674968, -82.797325], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:42.673369, lng:-82.831693, dir:"50870 Gratiot Avenue", tel:"+1 586-598-1782", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "chesterfield-indiana": {nombre:"Chesterfield", centro:[40.112531, -85.59703], tz:"America/New_York", lugares:[
  {n:"Chesterfield Dog Park", cat:"parque", lat:40.115752, lng:-85.593441, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chesterfield-missouri": {nombre:"Chesterfield", centro:[38.658176, -90.568062], tz:"America/Chicago", lugares:[
  {n:"Sophia M. Sachs Butterfly House", cat:"zoo", lat:38.664744, lng:-90.542782, dir:"15050 Faust Park Drive", tel:"+1 314-577-0888", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Chesterfield Veterinary Center", cat:"vet", lat:38.679892, lng:-90.519357, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chesterland": {nombre:"Chesterland", centro:[41.522183, -81.337919], tz:"America/New_York", lugares:[
  {n:"Eastside Dog & Cat Hospital", cat:"vet", lat:41.521237, lng:-81.341895, dir:"8399 Mayfield Road", tel:"+1-440-729-0500", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"West Geauga Veterinary Hospital", cat:"vet", lat:41.529244, lng:-81.338374, dir:"12498 Chillicothe Road", tel:"+1-440-729-9584", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"A Dog's Life", cat:"peluqueria", lat:41.524677, lng:-81.34008, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chetek": {nombre:"Chetek", centro:[45.314441, -91.651305], tz:"America/Chicago", lugares:[
  {n:"Animal Hospital of Chetek", cat:"vet", lat:45.341796, lng:-91.653178, dir:"941 24 1/2 Street", tel:"+1-715-859-6650", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Auggie Land", cat:"parque", lat:45.332909, lng:-91.652488, dir:"871 24 1/2 Street", tel:"+1-602-653-6521", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cheviot": {nombre:"Cheviot", centro:[39.157003, -84.613279], tz:"America/New_York", lugares:[
  {n:"Fuzzy Butts", cat:"tienda", lat:39.148753, lng:-84.598214, dir:"3022 Harrison Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chicago": {nombre:"Chicago", centro:[41.875562, -87.624421], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.937635, lng:-87.649908, dir:"3046 North Halsted Street", tel:"+1 773-935-7547", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.86869, lng:-87.638514, dir:"1101 South Canal Street", tel:"+1 312-588-0138", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.890354, lng:-87.63724, dir:"440 North Orleans Street", tel:"+1 312-670-3747", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Bentley's Pet Stuff", cat:"tienda", lat:41.904004, lng:-87.634289, dir:"1201 North Wells Street", tel:"+1-312-255-1955", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Wicker Park Veterinary Clinic", cat:"vet", lat:41.902897, lng:-87.666013, dir:"1166 North Milwaukee Avenue", tel:"+1-773-227-9700", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:41.906514, lng:-87.650143, dir:"1415 North Kingsbury Street", tel:"+1-312-642-2194", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.90663, lng:-87.649959, dir:"1415 North Kingsbury Street", tel:"+1 312-279-2026", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Mau's House", cat:"peluqueria", lat:41.87031, lng:-87.628389, dir:"901 South Plymouth Court", tel:"+1-312-722-0057", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.950276, lng:-87.649776, dir:"3736 North Halsted Street", tel:"+1 773-289-5352", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.942001, lng:-87.66846, dir:"3319 North Ashland Avenue", tel:"+1 773-289-5494", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.86699, lng:-87.643036, dir:"611 West Roosevelt Road", tel:"+1 312-243-2620", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Liz's Pet Shop", cat:"tienda", lat:41.895603, lng:-87.687116, dir:"2403 West Chicago Avenue", tel:"+1 773-772-4011", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Hyde Bark Dog Walking and Pet Care", cat:"refugio", lat:41.794849, lng:-87.587823, dir:"5508 South Lake Park Avenue", tel:"+1-773-359-8158", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Paw Place", cat:"peluqueria", lat:41.799418, lng:-87.589593, dir:"1457 East 53rd Street", tel:"+1-773-643-8560", horas:[12.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Doggy Style Pet Shop", cat:"tienda", lat:41.903014, lng:-87.678261, dir:"2023 West Division Street", tel:"+1 773-235-9663", horas:[10.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Partners Animal Hopsital", cat:"vet", lat:41.874665, lng:-87.629394, dir:"550 South Dearborn Street", tel:"+1-312-319-8004", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Hospital River North", cat:"vet", lat:41.896265, lng:-87.631027, dir:"749 North Clark Street", tel:"+1 312-643-2901", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Wrigglyville Veterinary", cat:"vet", lat:41.948727, lng:-87.649394, dir:"3651 North Halsted Street", tel:"+1 773-698-7525", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.917399, lng:-87.659109, dir:"2000 North Clybourn Avenue", tel:"+1 773-665-1368", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Vetique", cat:"vet", lat:41.897842, lng:-87.631089, dir:"77 West Chestnut Street", tel:"+1 312-291-9656", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Near North Animal Hospital", cat:"vet", lat:41.904076, lng:-87.634298, dir:"1207 North Wells Street", tel:"+1-312-944-5350", horas:[8.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Pups Pet Club", cat:"tienda", lat:41.890901, lng:-87.636086, dir:"316 West Illinois Street", tel:"+1-312-883-2340", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Doggie Works", cat:"tienda", guarderia:true, lat:41.936992, lng:-87.687274, dir:"2340 West Nelson Street", tel:"+1 773-697-7339", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"BLVD Vet River North", cat:"vet", lat:41.89372, lng:-87.639025, dir:"375 West Erie Street", tel:"+1 312-888-3630", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Kriser's Natural Pet", cat:"tienda", lat:41.911745, lng:-87.680076, dir:"1658 North Milwaukee Avenue", tel:"+1 773-235-1790", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Aeslin Pup Hub Noble Square", cat:"refugio", lat:41.896276, lng:-87.664347, dir:"1448 West Chicago Avenue", tel:"+1-312-374-3957", horas:[6.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Ukrainian Village Veterinary Center", cat:"vet", lat:41.895813, lng:-87.674455, dir:"1859 West Chicago Avenue", tel:"+1-773-698-6904", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Delta Animal Hospital", cat:"vet", lat:41.895538, lng:-87.68031, dir:"2105 West Chicago Avenue", tel:"+1-773-278-6019", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Green Dog", cat:"refugio", lat:41.895542, lng:-87.68317, dir:"2231 West Chicago Avenue", tel:"+1-773-772-4877", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pups Pet Club", cat:"refugio", lat:41.903829, lng:-87.668519, dir:"1624 West Division Street", tel:"+1-312-724-7607", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Companion Wicker Park", cat:"vet", lat:41.903445, lng:-87.68114, dir:"2134 West Division Street", tel:"+1-312-283-7333", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Your Best Friend Pet Supply", cat:"tienda", lat:41.903388, lng:-87.680745, dir:"2124 West Division Street", tel:"+1-773-661-1054", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dashing Dog", cat:"peluqueria", lat:41.903192, lng:-87.678351, dir:"2036 West Division Street", tel:"+1-773-904-7093", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.930582, lng:-87.684589, dir:"2257-2291 West Logan Boulevard", tel:"+1 773-342-1300", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:41.903645, lng:-87.635644, dir:"225 West Division Street", tel:"+1-312-337-7387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kriser's", cat:"tienda", lat:41.869133, lng:-87.627257, dir:"1103 South State Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Zen Dogs Chicago Logan Square", cat:"refugio", lat:41.925224, lng:-87.687447, dir:"2409 North Western Avenue", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Kriser's", cat:"tienda", lat:41.892803, lng:-87.618516, dir:"356 East Ohio Street", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.83662, lng:-87.663862, dir:"3145 South Ashland Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oz Animal Hospital", cat:"vet", lat:41.922026, lng:-87.644571, dir:"620 West Webster Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Village West Veterinary", cat:"vet", lat:41.896795, lng:-87.687138, dir:"840 North Western Avenue", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:41.866984, lng:-87.643906, dir:"645 West Roosevelt Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VEG", cat:"vet", lat:41.910738, lng:-87.647716, dir:"755 West North Avenue", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Burnham Park Animal Hospital", cat:"vet", lat:41.869356, lng:-87.627281, dir:"1025 South State Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jules Pet Shop", cat:"tienda", lat:41.920903, lng:-87.69449, dir:"2214 North Milwaukee Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sprocket & Stone", cat:"tienda", lat:41.799281, lng:-87.600684, dir:"1013 East 53rd Street", horas:[10.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"GoodVets Streeterville", cat:"vet", lat:41.891637, lng:-87.621034, dir:"227 East Grand Avenue", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"GoodVets", cat:"vet", lat:41.877775, lng:-87.649947, dir:"901 West Jackson Boulevard", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Paw Naturals", cat:"tienda", lat:41.880583, lng:-87.651089, dir:"932 West Monroe Street", horas:[10.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Old Town Animal Care Center", cat:"vet", lat:41.910752, lng:-87.641753, dir:"511 West North Avenue", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Bronzeville Animal Clinic", cat:"vet", lat:41.83822, lng:-87.621739, dir:"203 East 31st Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sandy's Pet Spots", cat:"peluqueria", lat:41.880524, lng:-87.652521, dir:"1010 West Monroe Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Squeaky Bea's", cat:"peluqueria", lat:41.923652, lng:-87.697216, dir:"2327 North California Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Advocate Pet Hospital", cat:"vet", lat:41.877697, lng:-87.654397, dir:"1061 West Jackson Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sit Stay Wash", cat:"peluqueria", lat:41.880308, lng:-87.649288, dir:"847 West Monroe Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care", cat:"vet", lat:41.886974, lng:-87.647807, dir:"802 West Fulton Market", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Old Town Aquarium", cat:"tienda", lat:41.910268, lng:-87.634923, dir:"1538 North Wells Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Metropolitan Veterinary Clinic", cat:"vet", lat:41.860344, lng:-87.62438, dir:"1556 South Michigan Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wag Hotels", cat:"refugio", lat:41.88046, lng:-87.657869, dir:"1214 West Monroe Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barking Spot Bakery", cat:"tienda", lat:41.884116, lng:-87.640921, dir:"131 North Clinton Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pups Pet Club", cat:"refugio", lat:41.864804, lng:-87.624337, dir:"1332 South Michigan Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VEG", cat:"vet", lat:41.868355, lng:-87.641062, dir:"1114 South Clinton Street", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Kriser's Natural Pet", cat:"tienda", lat:41.896301, lng:-87.640606, dir:"453 West Chicago Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"JustFoodForDogs", cat:"tienda", lat:41.917523, lng:-87.658431, tel:"+1-312-971-5724", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Howlistic Grooming", cat:"peluqueria", lat:41.865483, lng:-87.647084, dir:"1258 South Halsted Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cosmicos Pet Bakery & Boutique", cat:"tienda", lat:41.903542, lng:-87.671562, dir:"1738 West Division Street", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Boulevard Veterinary Logan Square", cat:"vet", lat:41.917656, lng:-87.69638, dir:"2740 West Armitage Avenue", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Park No. 556", cat:"parque", lat:41.927576, lng:-87.688337, dir:"2529 West Logan Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wiggly Field Park", cat:"parque", lat:41.930528, lng:-87.65343, dir:"2645 North Sheffield Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"One Tail at a Time - Brian & Sheri Qualizza Isolation Center", cat:"refugio", lat:41.926459, lng:-87.68796, dir:"2450 North Western Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chicago's Harmony House for Cats", cat:"refugio", lat:41.934235, lng:-87.691262, dir:"2914 North Elston Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Pet Care", cat:"tienda", lat:41.911425, lng:-87.66312, dir:"1628 North Elston Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Lake Shore Animal Hospital", cat:"vet", lat:41.896567, lng:-87.652131, dir:"960 West Chicago Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Belmont Animal Hospital", cat:"vet", lat:41.940099, lng:-87.659599, dir:"1212 West Belmont Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Anti-Cruelty Society", cat:"vet", lat:41.891368, lng:-87.63305, dir:"153 West Grand Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ohio Place Dog Park", cat:"parque", lat:41.892325, lng:-87.638245, dir:"360 West Ohio Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Park No. 569", cat:"parque", lat:41.880615, lng:-87.661683, dir:"1358 West Monroe Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Park No. 591", cat:"parque", lat:41.82455, lng:-87.604, dir:"3900 South Lake Park Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Park No. 592", cat:"parque", lat:41.818695, lng:-87.613328, dir:"4149 South Vincennes Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.905344, lng:-87.669117, dir:"1289 North Milwaukee Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Loop Veterinary Care", cat:"vet", lat:41.884105, lng:-87.64823, dir:"815 West Randolph Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park at Park No. 598", cat:"parque", lat:41.910126, lng:-87.643814, dir:"1514 North Larrabee Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lincoln Park Zoo", cat:"zoo", lat:41.920376, lng:-87.633505, dir:"2001 North Clark Street", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Family Pet Animal Hospital", cat:"vet", lat:41.921444, lng:-87.663429, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pack Life", cat:"refugio", lat:41.888659, lng:-87.684525, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets First", cat:"vet", lat:41.943697, lng:-87.644897, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ellis Veterinary Clinic", cat:"vet", lat:41.893175, lng:-87.686543, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark N' Bites", cat:"tienda", lat:41.830888, lng:-87.643928, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paradise Pet Salon", cat:"peluqueria", lat:41.952868, lng:-87.650202, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Wiggles", cat:"refugio", lat:41.946246, lng:-87.649609, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bond Vet", cat:"vet", lat:41.881538, lng:-87.649129, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kriser's Natural Pet", cat:"tienda", lat:41.919066, lng:-87.660217, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wag Hotels", cat:"refugio", lat:41.922277, lng:-87.665656, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Lovers Pet Salon", cat:"peluqueria", lat:41.922338, lng:-87.665767, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dashing Dog", cat:"peluqueria", lat:41.935, lng:-87.646484, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barks N' Rec", cat:"tienda", lat:41.936734, lng:-87.664787, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Boulevard Veterinary", cat:"vet", lat:41.932996, lng:-87.641905, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sploot Pet Urgent Care", cat:"vet", lat:41.919188, lng:-87.661707, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arfid Physical Therapy & Rehab", cat:"vet", lat:41.919619, lng:-87.66223, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Belmont Harbor Dog Beach", cat:"parque", lat:41.945311, lng:-87.640325, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Churchill Dog Friendly Area", cat:"parque", lat:41.914242, lng:-87.676747, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Antelope & Zebra House", cat:"refugio", lat:41.919235, lng:-87.632413, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fred Anderson Park", cat:"parque", lat:41.859482, lng:-87.625171, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grant Bark Park", cat:"parque", lat:41.870379, lng:-87.621769, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Larrabee Dog Park", cat:"parque", lat:41.894296, lng:-87.643243, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jackson Bark", cat:"parque", lat:41.786336, lng:-87.578453, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"D'Angelo Dog Park", cat:"parque", lat:41.875944, lng:-87.635654, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Farm-in-the-Zoo", cat:"zoo", lat:41.917271, lng:-87.633631, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Walter Family Arctic Tundra", cat:"refugio", lat:41.923788, lng:-87.633525, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pritzker Family Children's Zoo", cat:"zoo", lat:41.921057, lng:-87.635143, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Wings in the Wetlands", cat:"refugio", lat:41.922837, lng:-87.633907, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rivers of the Rainforrest", cat:"refugio", lat:41.923091, lng:-87.633978, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dry Thorn Forrest", cat:"refugio", lat:41.923395, lng:-87.634208, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Life on the Rocks", cat:"refugio", lat:41.923274, lng:-87.634141, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Life in the Lakes", cat:"refugio", lat:41.923554, lng:-87.634196, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Prarie District Dog Park", cat:"parque", lat:41.854597, lng:-87.620083, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chillicothe-missouri": {nombre:"Chillicothe", centro:[39.794875, -93.553278], tz:"America/Chicago", lugares:[
  {n:"Young Veterinary Clinic", cat:"vet", lat:39.831406, lng:-93.542861, dir:"3145 North Washington Street", tel:"+1 660 646 7878", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chillicothe Animal Hospital", cat:"vet", lat:39.775729, lng:-93.548902, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chillicothe-ohio": {nombre:"Chillicothe", centro:[39.33312, -82.982402], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:39.362586, lng:-82.974718, dir:"1251 North Bridge Street", tel:"+1-740-779-0709", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chilton-wisconsin": {nombre:"Chilton", centro:[44.028944, -88.162815], tz:"America/Chicago", lugares:[
  {n:"Eastshore Humane Association", cat:"refugio", lat:44.020423, lng:-88.157153, dir:"1100 South Park Street", tel:"+1 920-849-2390", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Birds Choice", cat:"tienda", lat:44.027556, lng:-88.147643, dir:"477 Vogt Lane", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chippewa-falls": {nombre:"Chippewa Falls", centro:[44.937132, -91.393212], tz:"America/Chicago", lugares:[
  {n:"Chippewa Veterinary Clinic S.C.", cat:"vet", lat:44.960442, lng:-91.368915, dir:"14961 81st Avenue", tel:"+1-715-723-3655", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Irvine Zoo", cat:"zoo", lat:44.952635, lng:-91.400661, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Tails Dog Park", cat:"parque", lat:44.915645, lng:-91.373721, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chippewa-lake": {nombre:"Chippewa Lake", centro:[43.744076, -85.294135], tz:"America/New_York", lugares:[
  {n:"Petting Zoo", cat:"zoo", lat:43.717363, lng:-85.373599, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chippewa-lake-ohio": {nombre:"Chippewa Lake", centro:[41.069777, -81.900973], tz:"America/New_York", lugares:[
  {n:"Medina County Animal Shelter", cat:"refugio", lat:41.101087, lng:-81.912521, dir:"6334 Deerview Lane", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "churubusco": {nombre:"Churubusco", centro:[41.230604, -85.319429], tz:"America/New_York", lugares:[
  {n:"Grammie's House", cat:"refugio", lat:41.20922, lng:-85.348213, dir:"7501 East 300 North", tel:"+1-260-693-1738", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cicero": {nombre:"Cicero", centro:[41.84554, -87.75402], tz:"America/Chicago", lugares:[
  {n:"Brighton Park Animal Hospital", cat:"vet", lat:41.82459, lng:-87.686719, dir:"3779 South Archer Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chicago Animal Control", cat:"refugio", lat:41.84182, lng:-87.684251, dir:"2741 South Western Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cincinnati-ohio": {nombre:"Cincinnati", centro:[39.101281, -84.512741], tz:"America/New_York", lugares:[
  {n:"Pet Wants", cat:"tienda", lat:39.11087, lng:-84.515577, dir:"1409 Vine Street", tel:"+1 513-621-3647", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Jamiesons Urban Pet Spa", cat:"peluqueria", lat:39.111744, lng:-84.512432, dir:"1411 Main Street", tel:"+1-513-906-7387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtown - Downtown Cincinnati", cat:"refugio", lat:39.127675, lng:-84.50226, dir:"2519 Burnet Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Wants", cat:"tienda", lat:39.115656, lng:-84.519235, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wuf Pet Salon", cat:"peluqueria", lat:39.115872, lng:-84.518201, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fido Field", cat:"parque", lat:39.106139, lng:-84.504624, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "city-of-pewaukee": {nombre:"City of Pewaukee", centro:[43.084602, -88.213945], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:43.084915, lng:-88.234438, dir:"1275 Capitol Drive", tel:"+1 262-701-9073", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "clarendon-hills": {nombre:"Clarendon Hills", centro:[41.796124, -87.955143], tz:"America/Chicago", lugares:[
  {n:"Village Veterinary Practice", cat:"vet", lat:41.796355, lng:-87.956119, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clarinda": {nombre:"Clarinda", centro:[40.73898, -95.037103], tz:"America/Chicago", lugares:[
  {n:"Twin Oaks Vetrinary Clinic", cat:"vet", lat:40.729879, lng:-95.031832, dir:"920 South 12th Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clarkston-michigan": {nombre:"Clarkston", centro:[42.735863, -83.41883], tz:"America/New_York", lugares:[
  {n:"Clarkston Veterinary Clinic", cat:"vet", lat:42.718592, lng:-83.417171, dir:"6687 Dixie Highway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clarkston Animal Medical Center", cat:"vet", lat:42.724764, lng:-83.418084, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clarksville-indiana": {nombre:"Clarksville", centro:[38.296779, -85.760209], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:38.32676, lng:-85.74928, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Feeders Pet Supply", cat:"tienda", lat:38.309274, lng:-85.771772, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clawson": {nombre:"Clawson", centro:[42.533368, -83.146317], tz:"America/New_York", lugares:[
  {n:"Kimball Animal Hospital", cat:"vet", lat:42.532997, lng:-83.153066, dir:"421 West 14 Mile Road", tel:"+1 248-288-1100", horas:[8.0, 12.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.560911, lng:-83.132891, dir:"734 East Big Beaver Road", tel:"+1 248-743-0399", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Mark Twain Park", cat:"parque", lat:42.530334, lng:-83.123712, dir:"North Campbell Road", horas:[6.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"The Family Puppy", cat:"tienda", lat:42.537431, lng:-83.110428, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clay-center": {nombre:"Clay Center", centro:[39.376941, -97.124743], tz:"America/Chicago", lugares:[
  {n:"Clay Center Zoo", cat:"zoo", lat:39.374247, lng:-97.129504, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clayton-missouri": {nombre:"Clayton", centro:[38.650435, -90.336247], tz:"America/Chicago", lugares:[
  {n:"Metrovet", cat:"vet", lat:38.638711, lng:-90.345228, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clear-creek": {nombre:"Clear Creek", centro:[39.109214, -86.539997], tz:"America/Chicago", lugares:[
  {n:"City of Bloomington Animal Shelter", cat:"refugio", lat:39.122969, lng:-86.532016, dir:"3410 S Walnut", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arlington Heights Veterinary Hospital South", cat:"vet", lat:39.120761, lng:-86.529661, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Starbarks Park", cat:"parque", lat:39.129593, lng:-86.500176, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clermont-indiana": {nombre:"Clermont", centro:[39.809766, -86.322492], tz:"America/New_York", lugares:[
  {n:"Above and Beyond Animal Care", cat:"vet", lat:39.763986, lng:-86.330354, dir:"10828 Rockville Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.762217, lng:-86.33212, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cleveland-heights": {nombre:"Cleveland Heights", centro:[41.520052, -81.556235], tz:"America/New_York", lugares:[
  {n:"Oak Tree Veterinary Hospital", cat:"vet", lat:41.510524, lng:-81.556018, dir:"1808 South Taylor Road", tel:"+1-216-321-6040", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rainbow Veterinary Clinic", cat:"vet", lat:41.530238, lng:-81.542107, dir:"2636 Noble Road", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "cleveland-ohio": {nombre:"Cleveland", centro:[41.499657, -81.693677], tz:"America/New_York", lugares:[
  {n:"Luca's Barkery", cat:"tienda", lat:41.489479, lng:-81.71153, dir:"2929 Detroit Avenue", tel:"+12162790000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greater Cleveland Aquarium", cat:"zoo", lat:41.496747, lng:-81.703823, dir:"2000 Sycamore St", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cleveland Veterinary Clinic", cat:"vet", lat:41.504049, lng:-81.631974, dir:"8069 Euclid Avenue", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Taps & Tails", cat:"parque", lat:41.480362, lng:-81.697508, dir:"1901 Train Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tremont Animal Clinic", cat:"vet", lat:41.47295, lng:-81.699161, dir:"2885 West 25th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake Erie Pet Food", cat:"tienda", lat:41.480019, lng:-81.714737, horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"WTF Pet Grooming", cat:"peluqueria", lat:41.478397, lng:-81.718519, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cleveland Metrobark", cat:"refugio", lat:41.510518, lng:-81.660604, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cleveland Animal Protective League", cat:"refugio", lat:41.479459, lng:-81.69687, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gateway Animal Clinic", cat:"vet", lat:41.484024, lng:-81.697629, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K-9 Coastline", cat:"parque", lat:41.487797, lng:-81.744322, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rick Matzelle Dog Park", cat:"parque", lat:41.474758, lng:-81.685237, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clifford": {nombre:"Clifford", centro:[39.282273, -85.869156], tz:"America/New_York", lugares:[
  {n:"Columbus Animal Control Shelter", cat:"refugio", lat:39.254457, lng:-85.891402, dir:"2730 Arnold Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clinton-charter-township": {nombre:"Clinton Charter Township", centro:[42.586978, -82.920005], tz:"America/New_York", lugares:[
  {n:"Parkway Small Animal & Exotic Pet Hospital", cat:"vet", lat:42.585593, lng:-82.953267, dir:"39321 Garfield Road", horas:[8.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Clinton Township Dog Park", cat:"parque", lat:42.593591, lng:-82.928536, dir:"40700 Romeo Plank", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clinton-iowa": {nombre:"Clinton", centro:[41.850282, -90.187748], tz:"America/Chicago", lugares:[
  {n:"Bitzy's", cat:"tienda", lat:41.860105, lng:-90.184037, dir:"1401 North 2nd Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clinton-wisconsin": {nombre:"Clinton", centro:[42.554473, -88.862594], tz:"America/Chicago", lugares:[
  {n:"Paw's and Whisker's", cat:"peluqueria", lat:42.555017, lng:-88.86233, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clintonville-wisconsin": {nombre:"Clintonville", centro:[44.620535, -88.762323], tz:"America/Chicago", lugares:[
  {n:"We Care Animal Hospital", cat:"vet", lat:44.636223, lng:-88.743929, dir:"421 Industrial Avenue", tel:"+1 715-823-8387", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clio-michigan": {nombre:"Clio", centro:[43.177422, -83.73469], tz:"America/New_York", lugares:[
  {n:"Shaggy Chic Pet Boutique", cat:"peluqueria", lat:43.173076, lng:-83.73525, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dotty's Pet Supply", cat:"tienda", lat:43.177017, lng:-83.737548, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clio Animal Hospital", cat:"vet", lat:43.177945, lng:-83.752402, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Somethin's Fishy Pet Shop", cat:"tienda", lat:43.17719, lng:-83.744763, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clive": {nombre:"Clive", centro:[41.609656, -93.775464], tz:"America/Chicago", lugares:[
  {n:"Ashworth Road Animal Hospital", cat:"vet", lat:41.584007, lng:-93.788372, dir:"5902 Ashworth Road", tel:"+1-515-337-2643", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.60175, lng:-93.769598, dir:"11101 University Avenue", tel:"+1 515-221-2295", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Center", cat:"vet", lat:41.599956, lng:-93.744521, dir:"2900 University Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waukee-Clive Veterinary Clinic", cat:"vet", lat:41.615339, lng:-93.827611, dir:"15151 Hickman Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ashworth Road Animal Hospital", cat:"vet", lat:41.584076, lng:-93.783968, dir:"5508 Ashworth Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cloquet": {nombre:"Cloquet", centro:[46.721728, -92.461367], tz:"America/Chicago", lugares:[
  {n:"Gordy's Hi Hat Dog Park", cat:"parque", lat:46.73296, lng:-92.468335, dir:"411 sunnyside dr", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "coal-valley": {nombre:"Coal Valley", centro:[41.443096, -90.461363], tz:"America/Chicago", lugares:[
  {n:"Niabi Zoo", cat:"zoo", lat:41.442277, lng:-90.435393, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "coates": {nombre:"Coates", centro:[44.717189, -93.034658], tz:"America/Chicago", lugares:[
  {n:"Dakota Woods Dog Park", cat:"parque", lat:44.709405, lng:-93.053332, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cokato": {nombre:"Cokato", centro:[45.075043, -94.190367], tz:"America/Chicago", lugares:[
  {n:"Cokato Veterinary Services", cat:"vet", lat:45.076321, lng:-94.17687, dir:"14094 53rd Street Southwest", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "colby-wisconsin": {nombre:"Colby", centro:[44.909967, -90.315691], tz:"America/Chicago", lugares:[
  {n:"Medford Ventriany Clinic;Medford Veterinary Clinic", cat:"vet", lat:44.92577, lng:-90.314936, dir:"1010 N Division S;Division Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "coldstream-ohio": {nombre:"Coldstream", centro:[39.048562, -84.34939], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:39.07584, lng:-84.353186, dir:"7769 Five Mile Road", tel:"+1 513-624-9972", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.07259, lng:-84.317752, dir:"8544 Beechmont Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Boarding Cincinnati", cat:"refugio", lat:39.073162, lng:-84.326322, dir:"8240 Beechmont Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtown Anderson", cat:"refugio", lat:39.073331, lng:-84.328156, dir:"8190 Beechmont Avenue", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Center", cat:"vet", lat:39.073428, lng:-84.330507, dir:"8094 Beechmont Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Puppywood", cat:"refugio", lat:39.072425, lng:-84.338674, dir:"7863 Beechmont Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Ohio Pet Sanctuary", cat:"refugio", lat:39.073211, lng:-84.333289, dir:"8018 Beechmont Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Park Plaza Animal Hospital", cat:"vet", lat:39.063715, lng:-84.277505, dir:"839 Ohio Pike", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cherry Grove Animal Hospital", cat:"vet", lat:39.072082, lng:-84.321534, dir:"8407 Beechmont Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kellogg Park Dog Field", cat:"parque", lat:39.047936, lng:-84.397736, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "colfax-wisconsin": {nombre:"Colfax", centro:[44.998762, -91.727303], tz:"America/Chicago", lugares:[
  {n:"Colfax Animal Hospital", cat:"vet", lat:44.998729, lng:-91.726544, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "collinsville-illinois": {nombre:"Collinsville", centro:[38.670327, -89.984548], tz:"America/Chicago", lugares:[
  {n:"Northgate Animal Hospital", cat:"vet", lat:38.687885, lng:-89.974469, dir:"1497 Vandalia Street", tel:"+1-618-344-0083", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Emergency Center", cat:"vet", lat:38.673223, lng:-90.016741, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mutts on Main Dog Park", cat:"parque", lat:38.66846, lng:-89.991805, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "columbia-city": {nombre:"Columbia City", centro:[41.156928, -85.488462], tz:"America/New_York", lugares:[
  {n:"C.C. Veterinary Hospital", cat:"vet", lat:41.172562, lng:-85.482687, dir:"636 IN-9", tel:"+1-260-244-5822", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Eel River Veterinary Clinic", cat:"vet", lat:41.140495, lng:-85.446013, dir:"2391 East Business 30", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Whitley County", cat:"refugio", lat:41.147338, lng:-85.490804, dir:"951 South Line Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Line Street Veterinary Hospital", cat:"vet", lat:41.166109, lng:-85.490888, dir:"520 North Line Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "columbia-heights": {nombre:"Columbia Heights", centro:[45.046046, -93.25178], tz:"America/Chicago", lugares:[
  {n:"St. Anthony Parkway Off-Leash Recreation Area", cat:"parque", lat:45.024242, lng:-93.255647, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "columbia-illinois": {nombre:"Columbia", centro:[38.442808, -90.199795], tz:"America/Chicago", lugares:[
  {n:"Columbia Animal Hospital", cat:"vet", lat:38.437427, lng:-90.192249, dir:"201 McCrosky Professional Peak", tel:"+1-618-281-7161", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Bellson Animal Hospital", cat:"vet", lat:38.445697, lng:-90.220672, dir:"1400 Columbia Center", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "columbia-missouri": {nombre:"Columbia", centro:[38.951883, -92.333737], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.960925, lng:-92.374086, dir:"229 North Stadium Boulevard", tel:"+1 573-447-0145", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Tiger Town Veterinary Services", cat:"vet", lat:38.964954, lng:-92.363623, dir:"1700 I- 70 Drive Southwest", tel:"+1-573-445-4466", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Lizzy & Rocco's Natural Pet Market", cat:"tienda", lat:38.96476, lng:-92.363063, dir:"1610 I- 70 Drive Southwest", tel:"+1-573-445-8249", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.960365, lng:-92.37066, dir:"400 North Stadium Boulevard", tel:"+1 573-514-6404", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"The Pet Fair", cat:"refugio", lat:38.965101, lng:-92.364089, dir:"1706 I- 70 Drive Southwest", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hortons Animal Hospital Northeast", cat:"vet", lat:38.976633, lng:-92.29827, dir:"2608 Paris Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Missouri Humane Society", cat:"refugio", lat:38.976447, lng:-92.329056, dir:"616 Big Bear Boulevard", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Summer Large Dogs Area", cat:"parque", lat:38.926876, lng:-92.380454, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Summer Large Dogs Area", cat:"parque", lat:38.925966, lng:-92.378026, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Summer Small Dogs Area", cat:"parque", lat:38.926761, lng:-92.379617, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Winter All Dogs Area", cat:"parque", lat:38.927044, lng:-92.37849, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof's Play and Stay", cat:"peluqueria", lat:38.910974, lng:-92.336732, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Treats Unleased", cat:"tienda", lat:38.935987, lng:-92.359355, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Groomingdales+", cat:"peluqueria", lat:38.936408, lng:-92.358673, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vet Center", cat:"vet", lat:38.991162, lng:-92.323077, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Orthopedic Foundation for Animals", cat:"vet", lat:38.906955, lng:-92.305957, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Dogs -n- Cats", cat:"refugio", lat:38.910069, lng:-92.329455, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lizzi & Rocco's Natural Pet Market", cat:"tienda", lat:38.915599, lng:-92.331792, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Garth Dog Park", cat:"parque", lat:38.979802, lng:-92.339576, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rolling Hills Veterinary Hospital", cat:"vet", lat:38.91201, lng:-92.331064, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Creatures Animal Hospital", cat:"vet", lat:38.966755, lng:-92.357079, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Columbia Pet Center", cat:"tienda", lat:38.964761, lng:-92.331446, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "columbia-station": {nombre:"Columbia Station", centro:[41.313107, -81.946806], tz:"America/New_York", lugares:[
  {n:"Columbia Animal Clinic", cat:"vet", lat:41.312564, lng:-81.945393, dir:"26565 Royalton Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "columbiana-ohio": {nombre:"Columbiana", centro:[40.888636, -80.693592], tz:"America/New_York", lugares:[
  {n:"East Park Veterinary Clinic", cat:"vet", lat:40.888456, lng:-80.692612, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws On Main", cat:"tienda", lat:40.887132, lng:-80.693484, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bo's Pet Shoppe", cat:"tienda", lat:40.901879, lng:-80.695876, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "columbus-indiana": {nombre:"Columbus", centro:[39.20144, -85.92138], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:39.2137, lng:-85.8792, dir:"1337 North National Road", tel:"+1 812-375-0378", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Muddy Paws Pet Salon", cat:"peluqueria", lat:39.20208, lng:-85.901043, dir:"300 Hope Ave, Ste 2", tel:"+1 812-341-6680", horas:[9.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Barkefellers", cat:"refugio", lat:39.198951, lng:-85.954678, dir:"84 Linden Park Place", tel:"+18125522525", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mutt Tubs 'n' Stylin' Dogs", cat:"peluqueria", lat:39.213443, lng:-85.905195, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "columbus-ohio": {nombre:"Columbus", centro:[39.96226, -83.000707], tz:"America/New_York", lugares:[
  {n:"The Cakehound", cat:"tienda", lat:39.939273, lng:-82.990758, dir:"1147 Jaeger Street", tel:"+1 614 845 1445", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Doggie Daycare Center", cat:"refugio", lat:39.955743, lng:-82.98839, dir:"401 East Mound Street", tel:"+1-614-221-2251", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Emi Pet Salon & Boutique", cat:"peluqueria", lat:39.97754, lng:-83.003864, dir:"743 North High Street", tel:"+1-614-299-7387", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"German Village Veterinary Hospital", cat:"vet", lat:39.937569, lng:-82.995721, dir:"1200 South High Street", tel:"+1-614-444-9696", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Valu", cat:"tienda", lat:39.982907, lng:-83.004457, dir:"1004 North High Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All About the Dogs", cat:"peluqueria", lat:39.939531, lng:-82.990516, tel:"+1 614 444 9274", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chittenden Veterinary Clinic", cat:"vet", lat:39.995253, lng:-83.000643, dir:"239 Chittenden Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bumble's Back Yard", cat:"parque", lat:39.930538, lng:-83.037691, dir:"5550 Brown Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:39.95753, lng:-82.988717, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Paws Retreat", cat:"peluqueria", lat:39.955394, lng:-83.031016, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spring & Fourth Dog Park", cat:"parque", lat:39.966636, lng:-82.996632, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scioto Audubon Dog Park", cat:"parque", lat:39.945002, lng:-83.002102, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "commerce-charter-township": {nombre:"Commerce Charter Township", centro:[42.591143, -83.490772], tz:"America/New_York", lugares:[
  {n:"Commerce Village Veterinary Hospital", cat:"vet", lat:42.590825, lng:-83.487808, dir:"605 West Commerce Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Magoo's Pet Outlet", cat:"tienda", lat:42.590368, lng:-83.447571, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:42.589853, lng:-83.447541, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Commerce Animal Hospital", cat:"vet", lat:42.589732, lng:-83.447003, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lakeside Pets", cat:"peluqueria", lat:42.59702, lng:-83.445872, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lakeside Animal Hospital", cat:"vet", lat:42.596918, lng:-83.445679, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.615004, lng:-83.443269, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mickies Dog Park", cat:"parque", lat:42.596417, lng:-83.470696, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "concord-missouri": {nombre:"Concord", centro:[38.515624, -90.355459], tz:"America/Chicago", lugares:[
  {n:"Tesson Ferry Veterinary Hospital", cat:"vet", lat:38.496317, lng:-90.380716, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "concordia": {nombre:"Concordia", centro:[39.571543, -97.661141], tz:"America/Chicago", lugares:[
  {n:"Split Tongue Exotics", cat:"tienda", lat:39.571773, lng:-97.6595, tel:"+1-785-243-4653", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "conneaut": {nombre:"Conneaut", centro:[41.944098, -80.556101], tz:"America/New_York", lugares:[
  {n:"Conneaut Creek Veterinary Clinic", cat:"vet", lat:41.932124, lng:-80.604384, dir:"382 West Main Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "connersville": {nombre:"Connersville", centro:[39.641159, -85.141075], tz:"America/New_York", lugares:[
  {n:"Connersville Veterinarian Clinic", cat:"vet", lat:39.606492, lng:-85.123785, horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"}
 ]},
 "coon-rapids-minnesota": {nombre:"Coon Rapids", centro:[45.172892, -93.30239], tz:"America/Chicago", lugares:[
  {n:"Animal Humane Society", cat:"refugio", lat:45.198152, lng:-93.301828, tel:"+1-952-435-7738", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "cooperstown-north-dakota": {nombre:"Cooperstown", centro:[47.444438, -98.123984], tz:"America/Chicago", lugares:[
  {n:"Cooperstown Veterinary Clinic", cat:"vet", lat:47.439462, lng:-98.133598, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "coopersville": {nombre:"Coopersville", centro:[43.063911, -85.934767], tz:"America/New_York", lugares:[
  {n:"VCA Allendale Animal Hospital", cat:"vet", lat:42.972662, lng:-85.937502, dir:"6161 Lake Michigan Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "copley": {nombre:"Copley", centro:[41.098944, -81.644569], tz:"America/New_York", lugares:[
  {n:"Tidal Gardens", cat:"tienda", lat:41.098217, lng:-81.639666, dir:"3440 Copley Road", tel:"+1-330-212-2565", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Paws Pet Resort", cat:"refugio", lat:41.106587, lng:-81.649983, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "coralville": {nombre:"Coralville", centro:[41.675998, -91.580705], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.691618, lng:-91.605991, dir:"1451 Coral Ridge Avenue", tel:"+1 319-499-4879", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.696836, lng:-91.604524, dir:"2515 Corridor Way", tel:"+1 319-337-9973", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Goosetown Animal Hospital", cat:"vet", lat:41.670832, lng:-91.57016, dir:"311 2nd Street", tel:"+1-319-341-0386", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Woofables", cat:"tienda", lat:41.678212, lng:-91.591116, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "corcoran-minnesota": {nombre:"Corcoran", centro:[45.095107, -93.547565], tz:"America/Chicago", lugares:[
  {n:"Egan Park", cat:"parque", lat:45.060074, lng:-93.496673, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "corinth-michigan": {nombre:"Corinth", centro:[42.782808, -85.663636], tz:"America/New_York", lugares:[
  {n:"Hometown Veterinary Care", cat:"vet", lat:42.812636, lng:-85.727826, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "corsica-south-dakota": {nombre:"Corsica", centro:[43.425268, -98.407302], tz:"America/Chicago", lugares:[
  {n:"Corsica Animal Health", cat:"vet", lat:43.410976, lng:-98.410247, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cortland": {nombre:"Cortland", centro:[41.920029, -88.688696], tz:"America/Chicago", lugares:[
  {n:"Cortland Vet", cat:"vet", lat:41.913246, lng:-88.685683, dir:"West Lincoln Highway", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cortland-ohio": {nombre:"Cortland", centro:[41.330137, -80.725243], tz:"America/New_York", lugares:[
  {n:"Western Reserve Veterinary", cat:"vet", lat:41.318096, lng:-80.730788, horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Totally Dog", cat:"tienda", lat:41.330394, lng:-80.7299, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jo-Kar's Grooming", cat:"peluqueria", lat:41.32994, lng:-80.729586, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cottage-grove": {nombre:"Cottage Grove", centro:[44.827745, -92.943822], tz:"America/Chicago", lugares:[
  {n:"La Pooch Salon", cat:"peluqueria", lat:44.818342, lng:-92.941496, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's", cat:"tienda", lat:44.816271, lng:-92.929687, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cottage Grove Animal Hospital", cat:"vet", lat:44.82, lng:-92.940396, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hound Around", cat:"refugio", lat:44.817752, lng:-92.940897, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets Are Inn", cat:"refugio", lat:44.833945, lng:-92.951407, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Park Grove Pet Hospital", cat:"vet", lat:44.834808, lng:-92.951411, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wag Farms Dog Park", cat:"parque", lat:44.811352, lng:-92.9337, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cottage-grove-wisconsin": {nombre:"Cottage Grove", centro:[43.078554, -89.199828], tz:"America/Chicago", lugares:[
  {n:"Camp K9", cat:"refugio", lat:43.117212, lng:-89.275089, dir:"4934 Felland Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cottleville": {nombre:"Cottleville", centro:[38.748911, -90.653232], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:38.74241, lng:-90.636522, dir:"6137 Mid Rivers Mall Drive", tel:"+1 636-447-0600", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"St. Charles County Pet Adoption Center", cat:"refugio", lat:38.757261, lng:-90.635872, dir:"4850 Mid Rivers Mall Drive", tel:"+1-636-949-7387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:38.751651, lng:-90.651237, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "council-bluffs": {nombre:"Council Bluffs", centro:[41.258841, -95.851948], tz:"America/Chicago", lugares:[
  {n:"Club Meow Inc.", cat:"peluqueria", lat:41.261385, lng:-95.846566, dir:"752 West Broadway", tel:"+17122428689", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.228661, lng:-95.87579, dir:"3271 Marketplace Drive", tel:"+1 712-366-2913", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.219366, lng:-95.835666, dir:"815 McDermott Street", tel:"+1 712-366-8060", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Pet Palace", cat:"tienda", lat:41.261712, lng:-95.887164, dir:"2705 West Broadway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Midlands Humane Society", cat:"refugio", lat:41.271625, lng:-95.809891, dir:"1020 Railroad Ave", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Tropical Fish", cat:"tienda", lat:41.277971, lng:-95.809495, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bird Cage", cat:"tienda", lat:41.278009, lng:-95.809581, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "countryside": {nombre:"Countryside", centro:[41.782809, -87.878114], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.782189, lng:-87.872163, dir:"24 Countryside Plaza", tel:"+1 708-579-5948", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Monica's Superior K-9's", cat:"peluqueria", lat:41.794408, lng:-87.869182, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Countryside Veterinary Center", cat:"vet", lat:41.78985, lng:-87.865111, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cowgill": {nombre:"Cowgill", centro:[39.559178, -93.926882], tz:"America/Chicago", lugares:[
  {n:"Freedom Farm Exotics", cat:"zoo", lat:39.548465, lng:-93.927564, dir:"7359 State Highway B", tel:"+1 816 986 9610", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crainville": {nombre:"Crainville", centro:[37.751995, -89.067854], tz:"America/Chicago", lugares:[
  {n:"Sudzy Paws Pet Grooming", cat:"peluqueria", lat:37.745644, lng:-89.078844, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crawfordsville": {nombre:"Crawfordsville", centro:[40.040863, -86.899738], tz:"America/Chicago", lugares:[
  {n:"Crawfordsville Family Vet", cat:"vet", lat:40.011928, lng:-86.903214, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "credit-river": {nombre:"Credit River", centro:[44.674208, -93.379392], tz:"America/Chicago", lugares:[
  {n:"Cleary Lake Dog Park", cat:"parque", lat:44.676104, lng:-93.391691, dir:"6246 190th Street East", tel:"+1-763-694-7777", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cleary Lake Veterinary Hospital", cat:"vet", lat:44.680667, lng:-93.33749, dir:"18577 Natchez Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "creston-iowa": {nombre:"Creston", centro:[41.058588, -94.361397], tz:"America/Chicago", lugares:[
  {n:"Southern Hills Veterinary Services", cat:"vet", lat:41.049198, lng:-94.348281, dir:"1000 East Taylor Street", tel:"+1-641-782-7056", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Whiskers to Wags", cat:"peluqueria", lat:41.043224, lng:-94.38435, dir:"1701 Cromwell Road", tel:"+1 641-640-5928", horas:[7.5, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Creston Veterinary Clinic", cat:"vet", lat:41.07144, lng:-94.367859, dir:"509 West Townline Street", tel:"+1-641-782-2224", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "crestwood": {nombre:"Crestwood", centro:[41.661144, -87.752551], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.654268, lng:-87.744069, dir:"4975 Cal Sag Road", tel:"+1 708-396-2900", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:41.654115, lng:-87.74417, dir:"4975 Cal Sag Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crestwood-missouri": {nombre:"Crestwood", centro:[38.558777, -90.383541], tz:"America/Chicago", lugares:[
  {n:"Family Pet Hospital", cat:"vet", lat:38.555303, lng:-90.403196, dir:"10400 Watson Road", tel:"+1-314-720-1704", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Hometown Veterinary", cat:"vet", lat:38.558447, lng:-90.381808, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Zoom Room Dog Training - Crestwood", cat:"peluqueria", lat:38.558063, lng:-90.390248, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "creve-coeur": {nombre:"Creve Coeur", centro:[40.64726, -89.59121], tz:"America/Chicago", lugares:[
  {n:"Brady Bark Park", cat:"parque", lat:40.642292, lng:-89.568721, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "creve-coeur-missouri": {nombre:"Creve Coeur", centro:[38.661301, -90.442365], tz:"America/Chicago", lugares:[
  {n:"Heritage Veterinary Hospital", cat:"vet", lat:38.681924, lng:-90.479903, dir:"12952 Olive Boulevard", tel:"+1-314-878-8454", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"EarthWise Pet", cat:"tienda", lat:38.67744, lng:-90.472172, dir:"12730 Olive Boulevard", tel:"+1 314-576-7387", horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Treats Unleashed", cat:"tienda", lat:38.671378, lng:-90.439374, dir:"11617 Olive Boulevard", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Spoede Animal Hospital", cat:"vet", lat:38.672941, lng:-90.41725, dir:"10842 Olive Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Creve Coeur Animal Hospital", cat:"vet", lat:38.676005, lng:-90.465038, dir:"12550 Olive Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.677004, lng:-90.46108, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crivitz": {nombre:"Crivitz", centro:[45.232381, -88.00433], tz:"America/Chicago", lugares:[
  {n:"Countryside Veterinary Clinic", cat:"vet", lat:45.218462, lng:-87.94666, dir:"W6983 County Highway W", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crivitz Veterinary Hospital", cat:"vet", lat:45.235457, lng:-88.011534, dir:"811 F.J. Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crookston": {nombre:"Crookston", centro:[47.773999, -96.608117], tz:"America/Chicago", lugares:[
  {n:"Crookston Pet Clinic", cat:"vet", lat:47.773082, lng:-96.60945, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society Animal Shelter", cat:"refugio", lat:47.764774, lng:-96.597104, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crown-point": {nombre:"Crown Point", centro:[41.416981, -87.365314], tz:"America/Chicago", lugares:[
  {n:"Perry Ferrini Dog Park", cat:"parque", lat:41.45286, lng:-87.397484, dir:"West 91st Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crown Brewing", cat:"parque", lat:41.415842, lng:-87.363557, dir:"211 South East Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crystal-lake-illinois": {nombre:"Crystal Lake", centro:[42.241134, -88.316197], tz:"America/Chicago", lugares:[
  {n:"Birds and Beasts Pet Shop", cat:"tienda", lat:42.218009, lng:-88.318508, dir:"35 Berkshire Drive", tel:"+1- 815-477-7387", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Doggy Daycare Delight", cat:"refugio", lat:42.215988, lng:-88.315109, dir:"7808 Virginia Road", tel:"+1-312-497-1663", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.222321, lng:-88.285464, dir:"4464 Northwest Highway", tel:"+1 815-479-8059", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:42.228261, lng:-88.316998, dir:"6126 Northwest Highway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Charlie's Doghouse", cat:"refugio", lat:42.248588, lng:-88.325981, dir:"140 West Terra Cotta Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.225722, lng:-88.316546, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crystal-minnesota": {nombre:"Crystal", centro:[45.031823, -93.360607], tz:"America/Chicago", lugares:[
  {n:"Bassett Creek Dog Park", cat:"parque", lat:45.013996, lng:-93.352666, dir:"6001 32nd Avenue North", horas:[6.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Access Veterinary Care", cat:"vet", lat:45.032399, lng:-93.359659, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cudahy-wisconsin": {nombre:"Cudahy", centro:[42.959738, -87.861471], tz:"America/Chicago", lugares:[
  {n:"Airport Animal Hospital", cat:"vet", lat:42.95934, lng:-87.874945, dir:"2746 East Layton Avenue", tel:"+1 414-486-7700", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:42.960897, lng:-87.876711, dir:"4698 South Whitnall Avenue", tel:"+1 414-481-3178", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Casual Canine Pet Grooming", cat:"peluqueria", lat:42.960071, lng:-87.871666, dir:"3068 East Layton Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fancy Paws Dog Grooming", cat:"peluqueria", lat:42.959285, lng:-87.861789, dir:"3524 East Layton Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cumberland": {nombre:"Cumberland", centro:[39.776153, -85.957204], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.772965, lng:-85.99374, dir:"9749 East Washington Street", tel:"+1 317-898-3197", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Just 4 Paws", cat:"peluqueria", lat:39.777195, lng:-85.937826, dir:"7243 W US 40", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cumberland-ohio": {nombre:"Cumberland", centro:[39.852017, -81.657627], tz:"America/New_York", lugares:[
  {n:"The Wilds", cat:"zoo", lat:39.851404, lng:-81.728151, dir:"14000 International Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "curran": {nombre:"Curran", centro:[39.742274, -89.772048], tz:"America/Chicago", lugares:[
  {n:"Pampered Pet Center, Inc.", cat:"refugio", lat:39.75119, lng:-89.756437, dir:"3401 Gateway Drive", tel:"+1-217-483-9106", horas:[6.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Centennial Dog Park", cat:"parque", lat:39.761354, lng:-89.75516, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cuyahoga-falls": {nombre:"Cuyahoga Falls", centro:[41.136273, -81.482812], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.121131, lng:-81.480032, dir:"355 Howe Avenue", tel:"+1 330-922-4114", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Unique Boutique", cat:"peluqueria", lat:41.143213, lng:-81.497435, tel:"+1-234-718-2476", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:41.120797, lng:-81.475515, dir:"597 Howe Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:41.123255, lng:-81.483355, dir:"1403 Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cuyahoga Falls Veterinary Clinc", cat:"vet", lat:41.16119, lng:-81.508351, dir:"3305 State Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pay It Forward For Pets", cat:"tienda", lat:41.135443, lng:-81.548456, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Boggs Aquatics", cat:"tienda", lat:41.143163, lng:-81.497231, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cedarwood Village Dog Park", cat:"parque", lat:41.135854, lng:-81.552315, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Keyser Dog Park", cat:"parque", lat:41.168446, lng:-81.531623, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dakota-minnesota": {nombre:"Dakota", centro:[43.913886, -91.359848], tz:"America/Chicago", lugares:[
  {n:"Paws 24/7/365", cat:"refugio", lat:43.908647, lng:-91.360335, dir:"220 Golden Rule Road", tel:"+1-507-643-6030", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "daleville-indiana": {nombre:"Daleville", centro:[40.121155, -85.55803], tz:"America/New_York", lugares:[
  {n:"Pierce Point", cat:"refugio", lat:40.145227, lng:-85.558029, tel:"+1 317-750-6826", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dalton-michigan": {nombre:"Dalton", centro:[43.318624, -86.261729], tz:"America/New_York", lugares:[
  {n:"Dog Star Ranch", cat:"parque", lat:43.333058, lng:-86.269153, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dalton-minnesota": {nombre:"Dalton", centro:[46.173849, -95.915609], tz:"America/Chicago", lugares:[
  {n:"Horse Barn", cat:"zoo", lat:46.170218, lng:-95.911011, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "danbury-ohio": {nombre:"Danbury", centro:[41.499218, -82.830188], tz:"America/New_York", lugares:[
  {n:"African Safari Wildlife Park", cat:"zoo", lat:41.518823, lng:-82.846184, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Watering Hole Safari and Waterpark", cat:"zoo", lat:41.507503, lng:-82.830157, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "danville-illinois": {nombre:"Danville", centro:[40.125222, -87.630461], tz:"America/Chicago", lugares:[
  {n:"East Lake Hospital for Animals", cat:"vet", lat:40.174263, lng:-87.631066, dir:"3180 North Vermilion Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "danville-ohio": {nombre:"Danville", centro:[40.44567, -82.260298], tz:"America/New_York", lugares:[
  {n:"Danville Veterinary Clinic", cat:"vet", lat:40.451003, lng:-82.259754, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dardenne-prairie": {nombre:"Dardenne Prairie", centro:[38.769497, -90.729016], tz:"America/Chicago", lugares:[
  {n:"Gentle Doctor Animal Hospital", cat:"vet", lat:38.755536, lng:-90.702022, dir:"3079 State Hwy K", tel:"+1-636-272-5950", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "darien-illinois": {nombre:"Darien", centro:[41.750871, -87.973959], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.749203, lng:-87.997977, dir:"2153 75th Street", tel:"+1 630-271-1223", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"The Dog District", cat:"refugio", lat:41.734926, lng:-87.971058, dir:"1100 North Frontage Road", tel:"+1 630-541-6660", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oldfield Oaks Dog Park", cat:"parque", lat:41.723338, lng:-88.00563, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "darmstadt": {nombre:"Darmstadt", centro:[38.09921, -87.578907], tz:"America/Chicago", lugares:[
  {n:"Stone Ridge Animal Hospital", cat:"vet", lat:38.094929, lng:-87.562969, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "davenport-iowa": {nombre:"Davenport", centro:[41.522469, -90.57564], tz:"America/Chicago", lugares:[
  {n:"Davenport Dog Park", cat:"parque", lat:41.517677, lng:-90.591412, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kimberly Pines Veterinary Hospital", cat:"vet", lat:41.560532, lng:-90.611802, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Care Animal Center", cat:"vet", lat:41.560361, lng:-90.595704, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "davis-junction": {nombre:"Davis Junction", centro:[42.101692, -89.093157], tz:"America/Chicago", lugares:[
  {n:"Tyler Veterinary Clinic", cat:"vet", lat:42.103161, lng:-89.078982, dir:"5700 N Junction Way", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "davison": {nombre:"Davison", centro:[43.034687, -83.518016], tz:"America/New_York", lugares:[
  {n:"Doggie Delights", cat:"tienda", lat:43.050774, lng:-83.516905, dir:"3058 North State Road", tel:"+1-810-288-6051", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dirty Paws", cat:"peluqueria", lat:43.031341, lng:-83.516423, dir:"216 North Main Street", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Davison Dog Park", cat:"parque", lat:43.027613, lng:-83.538972, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Davison Veterinary Hospital", cat:"vet", lat:43.03449, lng:-83.487985, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pierson Pet Hospital", cat:"vet", lat:43.033864, lng:-83.535629, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dunckel Veterinary Hospital", cat:"vet", lat:43.003704, lng:-83.515452, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "de-pere": {nombre:"De Pere", centro:[44.449358, -88.059999], tz:"America/Chicago", lugares:[
  {n:"Animal Hospital of De Pere", cat:"vet", lat:44.455617, lng:-88.080351, dir:"703 North 9th Street", tel:"+1 920-336-5774", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "de-soto-iowa": {nombre:"De Soto", centro:[41.531859, -94.008521], tz:"America/Chicago", lugares:[
  {n:"AHeinz57 Pet Rescue and Shelter", cat:"refugio", lat:41.538542, lng:-94.008238, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "de-soto-kansas": {nombre:"De Soto", centro:[38.979171, -94.968578], tz:"America/Chicago", lugares:[
  {n:"De Soto Veterinary Clinic", cat:"vet", lat:38.969541, lng:-94.981508, dir:"8761 Lexington Avenue", tel:"+1-913-585-1115", horas:[7.75, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Kill Creek Streamway  Off Leash Area", cat:"parque", lat:38.958526, lng:-94.973562, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "de-soto-missouri": {nombre:"De Soto", centro:[38.138811, -90.553921], tz:"America/Chicago", lugares:[
  {n:"Tink’s Barkery & Pawtique", cat:"tienda", lat:38.136584, lng:-90.554987, dir:"318 South Main Street", tel:"+1 636-337-5109", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "dearborn": {nombre:"Dearborn", centro:[42.32226, -83.176315], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.330696, lng:-83.203127, dir:"5650 Mercury Drive", tel:"+1 313-441-3244", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "dearborn-heights": {nombre:"Dearborn Heights", centro:[42.336982, -83.273263], tz:"America/New_York", lugares:[
  {n:"Ford Road Animal Clinic", cat:"vet", lat:42.327361, lng:-83.266856, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Warren Veterinary Hospital", cat:"vet", lat:42.341896, lng:-83.260496, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "decatur-illinois": {nombre:"Decatur", centro:[39.845416, -88.952415], tz:"America/Chicago", lugares:[
  {n:"Fairview Hospital for Animals", cat:"vet", lat:39.824347, lng:-88.972195, dir:"1090 West South Side Drive", tel:"+1-217-428-7709", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nelson Dog park", cat:"parque", lat:39.835092, lng:-88.925174, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scovill Zoo", cat:"zoo", lat:39.824844, lng:-88.914313, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fido Fields", cat:"parque", lat:39.845986, lng:-88.993973, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "decatur-indiana": {nombre:"Decatur", centro:[40.830603, -84.929133], tz:"America/New_York", lugares:[
  {n:"Angela's Grooming & Doggie Spa", cat:"peluqueria", lat:40.820165, lng:-84.936522, dir:"111 South 13th Street", tel:"+1-260-728-4040", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "decorah": {nombre:"Decorah", centro:[43.304161, -91.78591], tz:"America/Chicago", lugares:[
  {n:"LuLu & BB's Pet Market", cat:"tienda", lat:43.304304, lng:-91.785293, dir:"118 East Water Street", tel:"+15633824431", horas:[11.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Decorah Veterinary Clinic", cat:"vet", lat:43.293475, lng:-91.794613, dir:"806 Short Street", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "deephaven": {nombre:"Deephaven", centro:[44.929685, -93.522455], tz:"America/Chicago", lugares:[
  {n:"Wild Bird", cat:"tienda", lat:44.91783, lng:-93.501221, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's pet food and supplies", cat:"tienda", lat:44.917996, lng:-93.502116, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:44.91743, lng:-93.501241, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Village Animal Hospital", cat:"vet", lat:44.913819, lng:-93.504437, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "deerfield": {nombre:"Deerfield", centro:[42.171137, -87.844512], tz:"America/Chicago", lugares:[
  {n:"The Dog Stop", cat:"peluqueria", lat:42.150741, lng:-87.83963, dir:"495 Lake Cook Road", tel:"+1-224-235-4646", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.153794, lng:-87.834701, dir:"9 North Waukegan Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dekalb": {nombre:"DeKalb", centro:[41.929864, -88.750192], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.948118, lng:-88.723222, dir:"2072 Sycamore Road", tel:"+1 815-787-6565", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.953297, lng:-88.720099, dir:"2512 Sycamore Road", tel:"+1 815-758-6193", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"A Groomery Pet Grooming", cat:"peluqueria", lat:41.929086, lng:-88.75049, dir:"129 South 4th Street", tel:"+1 815-754-0200", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tails Humane Society", cat:"vet", lat:41.949961, lng:-88.714446, dir:"Barber Greene Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Katz dog park", cat:"parque", lat:41.953266, lng:-88.750304, dir:"393 West Dresser Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "delafield": {nombre:"Delafield", centro:[43.059424, -88.404017], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:43.048973, lng:-88.372554, dir:"2780 Heritage Drive", tel:"+1 262-646-3750", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Barkin' Up Delafield", cat:"refugio", lat:43.048162, lng:-88.359832, dir:"402 Kettle Drive", tel:"+1 262 613 9104", horas:[6.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "delano-minnesota": {nombre:"Delano", centro:[45.041907, -93.789133], tz:"America/Chicago", lugares:[
  {n:"Small/ Elderly Dog Park", cat:"parque", lat:45.052725, lng:-93.78442, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:45.053885, lng:-93.78235, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "delavan-wisconsin": {nombre:"Delavan", centro:[42.633102, -88.646055], tz:"America/Chicago", lugares:[
  {n:"Pet Pals Pet Supply", cat:"tienda", lat:42.632804, lng:-88.646485, dir:"210 East Walworth Avenue", tel:"+1-262-728-8022", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "delaware-ohio": {nombre:"Delaware", centro:[40.298672, -83.067965], tz:"America/New_York", lugares:[
  {n:"Castleton Way Veterinary Hospital", cat:"vet", lat:40.309704, lng:-83.111766, dir:"Castleton Way", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Delaware City Dog Park", cat:"parque", lat:40.291334, lng:-83.039857, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "delhi-charter-township": {nombre:"Delhi Charter Township", centro:[42.640318, -84.54301], tz:"America/New_York", lugares:[
  {n:"Southside Animal Hospital", cat:"vet", lat:42.682032, lng:-84.569141, dir:"5134 South Martin Luther King Jr Boulevard", tel:"+1-517-882-6614", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.669618, lng:-84.538689, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pennsylvania Veterinary Care", cat:"vet", lat:42.678223, lng:-84.538633, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Feeder's Pet Supply", cat:"tienda", lat:42.683701, lng:-84.568935, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dell-rapids": {nombre:"Dell Rapids", centro:[43.82315, -96.71271], tz:"America/Chicago", lugares:[
  {n:"River's Edge Dog Park", cat:"parque", lat:43.818361, lng:-96.709069, dir:"501 Zero Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dells Veterinary Services", cat:"vet", lat:43.819857, lng:-96.776639, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dellwood-missouri": {nombre:"Dellwood", centro:[38.749495, -90.285669], tz:"America/Chicago", lugares:[
  {n:"Wayside Park Unleashed", cat:"parque", lat:38.748071, lng:-90.289828, dir:"1026 Chambers Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "delphi": {nombre:"Delphi", centro:[40.587537, -86.675006], tz:"America/Chicago", lugares:[
  {n:"Horizon Veterinary Clinic", cat:"vet", lat:40.593256, lng:-86.732079, dir:"11152 IN-18", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Horizon Veterinary Service", cat:"vet", lat:40.593283, lng:-86.732056, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "delton": {nombre:"Delton", centro:[42.499758, -85.408064], tz:"America/New_York", lugares:[
  {n:"Hickory Ridge Veterinary Service", cat:"vet", lat:42.44351, lng:-85.314798, dir:"1350 West Hickory Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "denmark-wisconsin": {nombre:"Denmark", centro:[44.347936, -87.826987], tz:"America/Chicago", lugares:[
  {n:"Willow Pond Farm", cat:"refugio", lat:44.365836, lng:-87.655751, dir:"E2274 County Road AB", tel:"+1-920-445-5677", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Denmark Animal Hospital", cat:"vet", lat:44.348814, lng:-87.827014, dir:"129 North Wall Street", tel:"+1 920-863-2184", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northeast Wisconsin Veterinary", cat:"vet", lat:44.348976, lng:-87.830329, dir:"135 Broadway Street", tel:"+1 920-863-8007", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Country Canine Clips", cat:"peluqueria", lat:44.346786, lng:-87.841848, dir:"658 Depere Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "derby-kansas": {nombre:"Derby", centro:[37.545574, -97.268933], tz:"America/Chicago", lugares:[
  {n:"El Paso Veterinary Hospital", cat:"vet", lat:37.551189, lng:-97.271909, dir:"841 North Buckner Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:37.566407, lng:-97.241435, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's", cat:"tienda", lat:37.54753, lng:-97.24242, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tanglewood Veterinary Clinic", cat:"vet", lat:37.548597, lng:-97.247457, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "des-moines": {nombre:"Des Moines", centro:[41.586865, -93.624949], tz:"America/Chicago", lugares:[
  {n:"Smitten Kitten", cat:"tienda", lat:41.586169, lng:-93.654336, dir:"549 28th Street", tel:"+1-515-333-4620", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Jett and Monkey's", cat:"tienda", lat:41.589927, lng:-93.614054, dir:"219 East Grand Avenue", tel:"+1-515-244-4211", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.525146, lng:-93.597717, dir:"1311 East Army Post Road", tel:"+1 515-287-9995", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pawz N Klawz", cat:"peluqueria", lat:41.586012, lng:-93.642931, dir:"1905 Ingersoll Avenue", tel:"+1-515-720-4874", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.546272, lng:-93.643534, dir:"4211 Fleur Drive", tel:"+1-515-285-9285", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.536839, lng:-93.598321, dir:"5050 Southeast 14th Street", tel:"+1 515-256-0691", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Ingersoll Animal Hospital", cat:"vet", lat:41.586336, lng:-93.658245, dir:"3009 Ingersoll Avenue", tel:"+15152743555", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Starch Pet Hospital", cat:"vet", lat:41.600184, lng:-93.647592, dir:"2222 University Avenue", tel:"+1 515 283 1576", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riverwalk Dog Park", cat:"parque", lat:41.59902, lng:-93.616154, dir:"1111 Illinois Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Downtown Doggy Daycare", cat:"refugio", lat:41.582443, lng:-93.604556, dir:"724 Scott Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Afford-a-Care Pet Hospital", cat:"vet", lat:41.55757, lng:-93.596288, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ewing Dog Park", cat:"parque", lat:41.543155, lng:-93.585889, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ingersoll Square Dog Park", cat:"parque", lat:41.586564, lng:-93.643534, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "des-plaines": {nombre:"Des Plaines", centro:[42.041582, -87.887392], tz:"America/Chicago", lugares:[
  {n:"Birdman's Parrots", cat:"tienda", lat:42.0405, lng:-87.888921, dir:"710 Lee Street", tel:"+1-773-317-3785", horas:[12.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Happy Dog Grooming Spa", cat:"peluqueria", lat:42.041411, lng:-87.890002, dir:"650 Graceland Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Community Bark West", cat:"parque", lat:42.071727, lng:-87.86332, dir:"1001 Zenith Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Beck Lake Dog Park", cat:"parque", lat:42.071269, lng:-87.868173, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rising Sun Veterinary Clinic", cat:"vet", lat:42.023118, lng:-87.908261, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "detroit-lakes": {nombre:"Detroit Lakes", centro:[46.817181, -95.845325], tz:"America/Chicago", lugares:[
  {n:"Deez Fish", cat:"tienda", lat:46.818445, lng:-95.848148, dir:"223 Front St W", tel:"+1-218-203-0932", horas:[12.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Marshmallow Animal Shelter", cat:"refugio", lat:46.844341, lng:-95.831285, dir:"1478 Mallard Street", horas:[7.0, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Best Pets", cat:"tienda", lat:46.816973, lng:-95.845016, dir:"905 Washington Avenue", horas:[10.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Detroit Lakes Animal Hospital", cat:"vet", lat:46.824907, lng:-95.827864, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:46.815864, lng:-95.831678, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:46.816637, lng:-95.831654, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "detroit-michigan": {nombre:"Detroit", centro:[42.331551, -83.04664], tz:"America/New_York", lugares:[
  {n:"3 Dogs 1 Cat", cat:"tienda", lat:42.348198, lng:-83.039552, dir:"2714 Riopelle Street", tel:"+1-313-888-9803", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Patterson Dog & Cat Hospital", cat:"vet", lat:42.343644, lng:-83.075688, dir:"3800 Grand River Avenue", tel:"+1 313-832-7282", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine to Five", cat:"refugio", lat:42.344916, lng:-83.060726, dir:"3443 Cass Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Premier Pet Supply", cat:"tienda", lat:42.33484, lng:-83.051449, dir:"1511 Washington Boulevard", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Detroit K-9 Pet Supplies", cat:"tienda", lat:42.344778, lng:-83.060466, dir:"3441 Cass Avenue", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Barkside Detroit", cat:"parque", lat:42.358065, lng:-83.000137, dir:"7968 Kercheval Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grand Circus Dog Park", cat:"parque", lat:42.337347, lng:-83.049747, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Midtown Dog Park", cat:"parque", lat:42.351475, lng:-83.06449, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Macomb Park", cat:"parque", lat:42.329759, lng:-83.079806, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riverside Park Dog Park", cat:"parque", lat:42.313511, lng:-83.080634, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "devola": {nombre:"Devola", centro:[39.472476, -81.474988], tz:"America/New_York", lugares:[
  {n:"Mercy Now", cat:"vet", lat:39.457419, lng:-81.450306, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dewitt": {nombre:"DeWitt", centro:[42.842478, -84.569796], tz:"America/New_York", lugares:[
  {n:"Pet Health Center", cat:"vet", lat:42.825103, lng:-84.540808, dir:"1120 Commerce Park Drive", tel:"+1-517-669-2641", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "dexter-missouri": {nombre:"Dexter", centro:[36.793723, -89.955981], tz:"America/Chicago", lugares:[
  {n:"Animal Health Center of Dexter", cat:"vet", lat:36.804995, lng:-89.991943, dir:"2030 North Outer Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K9 Biz", cat:"peluqueria", lat:36.792878, lng:-89.95666, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dickeyville": {nombre:"Dickeyville", centro:[42.627311, -90.59208], tz:"America/Chicago", lugares:[
  {n:"Dickeyville", cat:"vet", lat:42.624982, lng:-90.59117, dir:"164 South Main Street", tel:"+1-608-568-3566", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dickinson": {nombre:"Dickinson", centro:[46.879176, -102.789624], tz:"America/Denver", lugares:[
  {n:"Paw & Claw Pet Palace", cat:"tienda", lat:46.87893, lng:-102.786598, dir:"34 West Villard Street", tel:"+1 701-225-3178", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Betwixt the Paws Grooming", cat:"peluqueria", lat:46.877496, lng:-102.764866, dir:"1171 East Villard Street", tel:"+1 701-690-1572", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"City of Dickinson Animal Shelter", cat:"refugio", lat:46.881818, lng:-102.725879, dir:"3405 Public Works Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"State Ave Veterinarian Clinic", cat:"vet", lat:46.906538, lng:-102.813624, dir:"1920 21st Street West", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"The Grooming Gallery", cat:"peluqueria", lat:46.879497, lng:-102.783517, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dickinson Dog Parkww", cat:"parque", lat:46.870252, lng:-102.800708, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dimock": {nombre:"Dimock", centro:[43.474152, -97.985628], tz:"America/Chicago", lugares:[
  {n:"Sweetgrass Veterinary Services", cat:"vet", lat:43.474592, lng:-97.98539, tel:"+16059288387", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dixon-illinois": {nombre:"Dixon", centro:[41.84252, -89.481429], tz:"America/Chicago", lugares:[
  {n:"Granny Rose Animal Shelter", cat:"tienda", lat:41.843798, lng:-89.514981, dir:"598 River Lane", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.863886, lng:-89.497895, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Park 4 Paws Dog Park", cat:"parque", lat:41.865667, lng:-89.47636, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dodge-center": {nombre:"Dodge Center", centro:[44.02802, -92.854729], tz:"America/Chicago", lugares:[
  {n:"Dodge Veterinary Clinic", cat:"vet", lat:44.029174, lng:-92.839516, dir:"17 North Airport Drive", tel:"+1-507-374-2125", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "dodge-city-kansas": {nombre:"Dodge City", centro:[37.752798, -100.017079], tz:"America/Chicago", lugares:[
  {n:"Wright Park Zoo", cat:"zoo", lat:37.748471, lng:-100.023794, dir:"71 North 2nd Avenue", tel:"+1-620-225-8160", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dodgeville": {nombre:"Dodgeville", centro:[42.960006, -90.130446], tz:"America/Chicago", lugares:[
  {n:"Military Ridge Veterinary Service", cat:"vet", lat:42.981793, lng:-90.113644, dir:"4788 County Highway YZ", tel:"+1-608-935-1406", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Iowa County Humane Society", cat:"refugio", lat:42.977374, lng:-90.125996, dir:"305 County Highway YZ", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dollar-bay": {nombre:"Dollar Bay", centro:[47.119814, -88.502297], tz:"America/Chicago", lugares:[
  {n:"Copper Country Humane Society", cat:"refugio", lat:47.103597, lng:-88.519437, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dollarville": {nombre:"Dollarville", centro:[46.351386, -85.54206], tz:"America/Chicago", lugares:[
  {n:"Oswald's Bear Ranch", cat:"zoo", lat:46.430601, lng:-85.591646, dir:"13814 County Road 407", tel:"+1 906 293 3147", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dorr": {nombre:"Dorr", centro:[42.725308, -85.722526], tz:"America/New_York", lugares:[
  {n:"Dorr Veterinary Clinic", cat:"vet", lat:42.693146, lng:-85.722117, dir:"3572 18th Street", tel:"+1-269-793-7387", horas:[8.0, 19.5], nota:"Dato de OpenStreetMap"}
 ]},
 "douglas-michigan": {nombre:"Douglas", centro:[42.643358, -86.200593], tz:"America/New_York", lugares:[
  {n:"Lakeshore Pet Boutique", cat:"tienda", lat:42.643898, lng:-86.20087, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "douglas-minnesota": {nombre:"Douglas", centro:[44.108494, -92.572114], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:44.076423, lng:-92.514921, dir:"3430 55th Street Northwest", tel:"+1 507-288-1526", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "dousman": {nombre:"Dousman", centro:[43.014724, -88.472779], tz:"America/Chicago", lugares:[
  {n:"Bark River Animal Hospital", cat:"vet", lat:43.018118, lng:-88.473197, dir:"281 North Main Street", tel:"+1-262-965-4888", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wildlife in Need Center", cat:"refugio", lat:43.016575, lng:-88.440439, dir:"W349S1480 Waterville Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "downers-grove": {nombre:"Downers Grove", centro:[41.793682, -88.010228], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.835326, lng:-88.023998, dir:"1550 Butterfield Road", tel:"+1 630-627-0193", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Downers Grove Animal Hospital", cat:"vet", lat:41.80909, lng:-88.001595, dir:"635 Ogden Avenue", tel:"+1 630-968-2812", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Dog Barkery", cat:"tienda", lat:41.794333, lng:-88.010519, dir:"5118 Main Street", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"West Suburban Humane Society", cat:"refugio", lat:41.80743, lng:-88.031604, dir:"1901 W Ogden Ave", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dublin-ohio": {nombre:"Dublin", centro:[40.099601, -83.113556], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.067369, lng:-83.091639, dir:"4830 Sawmill Road", tel:"+1-614-659-7677", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.090561, lng:-83.089512, dir:"6010 Sawmill Road", tel:"+1 614-791-8200", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Dublin Veterinary Clinic", cat:"vet", lat:40.099652, lng:-83.114697, dir:"32 West Bridge Street", tel:"+1-614-889-2196", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet People", cat:"tienda", lat:40.104527, lng:-83.162086, dir:"6415 Perimeter Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Top Dog Daycare", cat:"refugio", lat:40.116624, lng:-83.068516, dir:"1965 Hard Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jen's Nose to Tail", cat:"peluqueria", lat:40.073431, lng:-83.122985, dir:"5907 Karric Square Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:40.089933, lng:-83.097046, dir:"6564 Millridge Circle", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Valu", cat:"tienda", lat:40.123675, lng:-83.090828, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dubuque": {nombre:"Dubuque", centro:[42.500624, -90.664799], tz:"America/Chicago", lugares:[
  {n:"PetMed Animal Health Center", cat:"vet", lat:42.457419, lng:-90.673263, dir:"2400 Gateway Drive", tel:"+1-563-583-8387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Key West Animal Clinic", cat:"vet", lat:42.458219, lng:-90.674768, dir:"2262 Flint Hill Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Paws Salon & Spaw", cat:"peluqueria", lat:42.504968, lng:-90.665585, dir:"1198 White Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Park", cat:"parque", lat:42.514131, lng:-90.693092, dir:"2501 North Grandview Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Union at Marina Dog Park", cat:"parque", lat:42.528501, lng:-90.644984, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "duluth-minnesota": {nombre:"Duluth", centro:[46.783829, -92.105268], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:46.806063, lng:-92.167528, dir:"1732 Mall Drive", tel:"+1 218-213-9465", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:46.80502, lng:-92.14997, dir:"903 West Central Entrance", tel:"+1 218-727-2888", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"BluePearl", cat:"vet", lat:46.764039, lng:-92.126574, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Observation Dog Park", cat:"parque", lat:46.77967, lng:-92.112382, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dundas": {nombre:"Dundas", centro:[44.429436, -93.202086], tz:"America/Chicago", lugares:[
  {n:"Countryside Animal Clinic", cat:"vet", lat:44.431533, lng:-93.195546, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Schilling Park", cat:"parque", lat:44.430414, lng:-93.197528, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dundee-michigan": {nombre:"Dundee", centro:[41.957268, -83.65966], tz:"America/New_York", lugares:[
  {n:"The Fur Factory", cat:"peluqueria", lat:41.955286, lng:-83.657162, dir:"293 West Monroe Street", tel:"+17345299000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heritage Animal Hospital", cat:"vet", lat:41.955439, lng:-83.675347, dir:"150 Waterstradt Commerce", tel:"+17345299177", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dunlap": {nombre:"Dunlap", centro:[40.861651, -89.677767], tz:"America/Chicago", lugares:[
  {n:"Peoria Area Veterinary Group", cat:"vet", lat:40.798387, lng:-89.636745, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dunreith": {nombre:"Dunreith", centro:[39.803379, -85.438583], tz:"America/New_York", lugares:[
  {n:"Buck Creek Veterinary Clinic", cat:"vet", lat:39.772032, lng:-85.444359, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dyer-indiana": {nombre:"Dyer", centro:[41.494202, -87.521707], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.491966, lng:-87.504998, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eagan": {nombre:"Eagan", centro:[44.818173, -93.165918], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:44.836279, lng:-93.157612, dir:"1297 Promenade Place", tel:"+1 651-452-1140", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:44.830148, lng:-93.162897, dir:"1278 Town Centre Drive", tel:"+1 651-688-3001", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:44.836793, lng:-93.17209, dir:"1505 Central Park Commons Drive", tel:"+1 651-286-4898", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Vet Eye Pros", cat:"vet", lat:44.826928, lng:-93.16518, dir:"1380 Duckwood Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cliff Lake Veterinary Clinic", cat:"vet", lat:44.794233, lng:-93.203965, dir:"1960 Cliff Lake Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawlished Pets Grooming Salon", cat:"peluqueria", lat:44.803798, lng:-93.13949, dir:"1016 Diffley Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck and Don's", cat:"tienda", lat:44.831809, lng:-93.157226, tel:"+1 651-454-3458", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Wagging Tails Pet Resort", cat:"refugio", lat:44.839062, lng:-93.193876, dir:"3275 Sun Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eagan Pet Clinic", cat:"vet", lat:44.794327, lng:-93.207421, dir:"4395 Rahn Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pilot Knob Animal Hospital", cat:"vet", lat:44.806931, lng:-93.168103, dir:"4145 Knob Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wet World", cat:"tienda", lat:44.833976, lng:-93.17931, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wag n' Wash", cat:"peluqueria", lat:44.793494, lng:-93.205305, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pet Spa", cat:"peluqueria", lat:44.791252, lng:-93.17864, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSuites", cat:"refugio", lat:44.84837, lng:-93.146221, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Thresher Fields Off-Leash Dog Park", cat:"parque", lat:44.836849, lng:-93.124308, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Thresher Fields Off-Leash Small Dog Park", cat:"parque", lat:44.837802, lng:-93.124649, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Hospital", cat:"vet", lat:44.827142, lng:-93.160341, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eagle-michigan": {nombre:"Eagle", centro:[42.807812, -84.788601], tz:"America/New_York", lugares:[
  {n:"Veterinary Hospital", cat:"vet", lat:42.81304, lng:-84.739925, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eagle-river-wisconsin": {nombre:"Eagle River", centro:[45.915399, -89.250797], tz:"America/Chicago", lugares:[
  {n:"Northwoods Animal Hospital", cat:"vet", lat:45.907478, lng:-89.286056, dir:"5239 State Highway 70", tel:"+1-715-479-6992", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dr John’s Dog and Car Repair", cat:"vet", lat:45.906812, lng:-89.223874, dir:"1100 US Highway 45", tel:"+1-715-337-2700", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eagle River Pet Company", cat:"tienda", lat:45.915525, lng:-89.251401, dir:"114 East Wall Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "east-bay-charter-township": {nombre:"East Bay Charter Township", centro:[44.70701, -85.522725], tz:"America/New_York", lugares:[
  {n:"Companion Animal Hospital", cat:"vet", lat:44.713619, lng:-85.544862, dir:"1885 Chartwell Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "east-cleveland": {nombre:"East Cleveland", centro:[41.533107, -81.579014], tz:"America/New_York", lugares:[
  {n:"Ralph Perkins II Wildlife Center and Woods Garden", cat:"zoo", lat:41.510723, lng:-81.613465, dir:"Wade Oval Drive", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "east-dubuque": {nombre:"East Dubuque", centro:[42.492225, -90.642905], tz:"America/Chicago", lugares:[
  {n:"Teasdale Veterinary Clinic", cat:"vet", lat:42.493284, lng:-90.644324, dir:"141 Sinsinawa Avenue", tel:"+1-815-747-7711", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "east-grand-forks": {nombre:"East Grand Forks", centro:[47.931701, -97.017579], tz:"America/Chicago", lugares:[
  {n:"Peterson Veterinary Clinic", cat:"vet", lat:47.945248, lng:-97.022115, dir:"229 20th Street Northwest", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "east-grand-rapids": {nombre:"East Grand Rapids", centro:[42.941202, -85.609731], tz:"America/New_York", lugares:[
  {n:"Chow Hound Pet Supplies", cat:"tienda", lat:42.925852, lng:-85.605489, dir:"2490 Burton Street Southeast", tel:"+1-616-808-3146", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.911114, lng:-85.569878, dir:"3950 28th Street Southeast", tel:"+1 616-957-1409", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Family Friends Veterinary Hospital & Pet Care Center", cat:"vet", lat:42.913666, lng:-85.506172, tel:"+1-616-575-6520", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Breton Village Animal Clinic", cat:"vet", lat:42.925852, lng:-85.605282, dir:"2496 Burton Street Southeast", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Chow Hound Pet Supplies", cat:"tienda", lat:43.001221, lng:-85.588298, dir:"2050 East Beltline Avenue Northeast", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Knapps Corner Animal hospital", cat:"vet", lat:43.001945, lng:-85.589221, dir:"2078 East Beltline Avenue Northeast", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Splash and Dash", cat:"peluqueria", lat:42.914907, lng:-85.507599, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.91837, lng:-85.582506, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VEG ER for Pets", cat:"vet", lat:42.912059, lng:-85.587584, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Ada Hospital for Animals", cat:"vet", lat:42.993779, lng:-85.544749, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cascade Hospital for Animals Dog Park", cat:"parque", lat:42.893497, lng:-85.506137, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "east-hazel-crest": {nombre:"East Hazel Crest", centro:[41.573646, -87.646435], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.563903, lng:-87.638388, dir:"17930 Halsted Street", tel:"+1 708-206-0639", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "east-lansing": {nombre:"East Lansing", centro:[42.732031, -84.472168], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:42.738906, lng:-84.505525, dir:"510 Frandor Avenue", tel:"+1 517-333-8544", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:42.759807, lng:-84.502986, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kelly's", cat:"peluqueria", lat:42.758774, lng:-84.476041, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northern Tail Dog Park", cat:"parque", lat:42.768315, lng:-84.478887, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "east-peoria": {nombre:"East Peoria", centro:[40.666149, -89.580098], tz:"America/Chicago", lugares:[
  {n:"Fon du Lac Farm Park & Petting Zoo", cat:"zoo", lat:40.662745, lng:-89.537483, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "east-troy": {nombre:"East Troy", centro:[42.785187, -88.405437], tz:"America/Chicago", lugares:[
  {n:"O'Neill Family Veterinary Clinic", cat:"vet", lat:42.784314, lng:-88.424315, dir:"3266 Main Street", tel:"+12627835000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Trinity Grooming Services LLC", cat:"peluqueria", lat:42.784531, lng:-88.404688, dir:"2114 Church Street", tel:"+12624411441", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East Troy Dog Park", cat:"parque", lat:42.788756, lng:-88.391196, dir:"2015 Energy Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eastborough": {nombre:"Eastborough", centro:[37.68807, -97.263655], tz:"America/Chicago", lugares:[
  {n:"Animal Clinic", cat:"vet", lat:37.665159, lng:-97.213101, dir:"10712 East Harry Street", tel:"+1-316-686-8516", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"College Hill Animal Hospital", cat:"vet", lat:37.689715, lng:-97.298753, dir:"244 North Hillside Street", tel:"+1 316-618-8881", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Cat Hospital of Wichita", cat:"vet", lat:37.695117, lng:-97.265562, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Claremont Dog Park", cat:"parque", lat:37.666093, lng:-97.228954, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fox Run Dog Park", cat:"parque", lat:37.667048, lng:-97.228764, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cedarbrooke Dog Park", cat:"parque", lat:37.66567, lng:-97.238413, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dapper Hound", cat:"peluqueria", lat:37.693998, lng:-97.272563, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East Central Veterinary Hospital", cat:"vet", lat:37.693512, lng:-97.274493, horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "eastlake-ohio": {nombre:"Eastlake", centro:[41.649034, -81.437899], tz:"America/New_York", lugares:[
  {n:"Pet Paradise", cat:"tienda", lat:41.626669, lng:-81.433699, dir:"35535 Euclid Avenue", tel:"+1 440 942 9016", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.626156, lng:-81.439065, dir:"34821 Euclid Avenue", tel:"+1 440 569 6060", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "eastpointe": {nombre:"Eastpointe", centro:[42.46837, -82.955475], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:42.464031, lng:-82.959494, dir:"22631 South Gratiot Avenue", tel:"+1 586-779-2590", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "eaton-ohio": {nombre:"Eaton", centro:[39.74394, -84.636489], tz:"America/New_York", lugares:[
  {n:"Valley Exotics Zoo", cat:"zoo", lat:39.704076, lng:-84.628803, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eaton Water Works Bark Park", cat:"parque", lat:39.753164, lng:-84.642661, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eau-claire-wisconsin": {nombre:"Eau Claire", centro:[44.811349, -91.498494], tz:"America/Chicago", lugares:[
  {n:"Southwest Dog Park", cat:"parque", lat:44.783211, lng:-91.537765, dir:"1000 Ferry St", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eden-prairie": {nombre:"Eden Prairie", centro:[44.854686, -93.470786], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:44.858541, lng:-93.428385, dir:"8020 Glen Lane", tel:"+1 952-829-8808", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"VEG ER for pets", cat:"vet", lat:44.863016, lng:-93.485923, dir:"16490 West 78th Street", tel:"+1-952-444-1034", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:44.855006, lng:-93.419149, dir:"11200 Prairie Lakes Drive", tel:"+1 952-941-4660", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Allied Veterinary Emergency & Referral", cat:"vet", lat:44.85372, lng:-93.430998, dir:"8300 Flying Cloud Drive", tel:"+1-952-452-0025", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's", cat:"tienda", lat:44.858273, lng:-93.42371, dir:"8022 Den Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Flying Cloud Animal Hospital", cat:"vet", lat:44.856418, lng:-93.434626, dir:"12365 Singletree Lane", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Flying Cloud Dog Park", cat:"parque", lat:44.873747, lng:-93.414337, dir:"7171 Flying Cloud Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Staring Lake Park Off-Leash Dog Exercise Area", cat:"parque", lat:44.831916, lng:-93.447289, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eden-wisconsin": {nombre:"Eden", centro:[43.692705, -88.362873], tz:"America/Chicago", lugares:[
  {n:"Country Hills Pet Hospital", cat:"vet", lat:43.700954, lng:-88.362534, dir:"N4415 US 45", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "edgemont-park": {nombre:"Edgemont Park", centro:[42.746702, -84.593592], tz:"America/New_York", lugares:[
  {n:"Soldan's Pet Supplies", cat:"tienda", lat:42.740563, lng:-84.639082, dir:"6201 West Saginaw Highway", tel:"+1-517-323-6920", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Waverly Animal Hospital", cat:"vet", lat:42.732007, lng:-84.602311, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Miller Animal Clinic", cat:"vet", lat:42.740268, lng:-84.644434, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "edina": {nombre:"Edina", centro:[44.889703, -93.350122], tz:"America/Chicago", lugares:[
  {n:"Chuck & Don's", cat:"tienda", lat:44.911222, lng:-93.3289, dir:"5045 France Avenue South", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Woodys Pet Food Deli", cat:"tienda", lat:44.912539, lng:-93.318125, dir:"3008 West 50th Street", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:44.911514, lng:-93.352865, dir:"5103 Gus Young Lane", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Vet Partners Edina", cat:"vet", lat:44.874663, lng:-93.326787, dir:"7101 France Avenue South", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Haute Dog Spa", cat:"peluqueria", lat:44.867407, lng:-93.326562, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "edwardsville-illinois": {nombre:"Edwardsville", centro:[38.811436, -89.953157], tz:"America/Chicago", lugares:[
  {n:"Wild Birds Unlimited", cat:"tienda", lat:38.786435, lng:-89.948979, dir:"2216 Troy Road", tel:"+1-618-307-9604", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.777286, lng:-89.952342, dir:"130 Junction Drive", tel:"+1-618-692-9930", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Edwardsville Pet Hospital", cat:"vet", lat:38.806775, lng:-89.951998, dir:"423 South Buchanan Street", tel:"+1 618 656 7656", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Ark Animal Hospital", cat:"vet", lat:38.780812, lng:-89.948527, dir:"6718 Goshen Road", tel:"+1-618-207-4000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.790393, lng:-89.955345, dir:"6631 Edwardsville Crossing Drive", tel:"+1 618-692-3961", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Best Pals", cat:"peluqueria", lat:38.792658, lng:-89.95158, dir:"1725 Troy Road", tel:"+1-618-696-1717", horas:[8.5, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Brent Leh Memorial Dog Park", cat:"parque", lat:38.807595, lng:-89.960599, dir:"Olive Street", horas:[6.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Metro East Humane Society", cat:"refugio", lat:38.795697, lng:-89.870188, dir:"8495 IL-143", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hawthorne Animal Hospital", cat:"vet", lat:38.779266, lng:-89.957388, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Joe Glik Dog Park", cat:"parque", lat:38.795569, lng:-89.923681, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "edwardsville-kansas": {nombre:"Edwardsville", centro:[39.061115, -94.819685], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.117486, lng:-94.759639, dir:"7738 State Avenue", tel:"+1 913 998 7741", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"The Groom Gallery", cat:"peluqueria", lat:39.115941, lng:-94.769087, dir:"8155 State Avenue", tel:"+1 913 261 9303", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Broadmore Kennels", cat:"refugio", lat:39.045057, lng:-94.824696, dir:"20614 West 47th Street", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "effingham": {nombre:"Effingham", centro:[39.120143, -88.54348], tz:"America/Chicago", lugares:[
  {n:"Noah's Ark Pet Shoppe", cat:"tienda", lat:39.121249, lng:-88.542723, dir:"117 West Jefferson Avenue", tel:"+1-217-347-6624", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Special Pet Foods", cat:"tienda", lat:39.124694, lng:-88.556859, dir:"312 North Keller Drive", tel:"+1-217-347-7622", horas:[11.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Effingham Veterinary Clinic", cat:"vet", lat:39.126019, lng:-88.557296, dir:"408 North Keller Drive", tel:"+1-217-342-9793", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Wellness Center of Southern Illinois", cat:"vet", lat:39.134604, lng:-88.573568, dir:"1911 West Evergreen Avenue", tel:"+1-217-342-7444", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Evergreen Bark Park", cat:"parque", lat:39.13865, lng:-88.548774, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "el-paso": {nombre:"El Paso", centro:[40.739202, -89.016463], tz:"America/Chicago", lugares:[
  {n:"El Paso Veterinary Service", cat:"vet", lat:40.734635, lng:-89.024553, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elbing": {nombre:"Elbing", centro:[38.052793, -97.12781], tz:"America/Chicago", lugares:[
  {n:"Dog Swimming Area", cat:"parque", lat:38.049258, lng:-97.20544, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elbow-lake": {nombre:"Elbow Lake", centro:[45.994127, -95.976721], tz:"America/Chicago", lugares:[
  {n:"Lake Region Veterinary Center", cat:"vet", lat:45.992931, lng:-95.960484, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eldorado": {nombre:"Eldorado", centro:[37.813658, -88.438103], tz:"America/Chicago", lugares:[
  {n:"Stiltmore Kennels", cat:"refugio", lat:37.805126, lng:-88.432574, dir:"906 Dillard Street", tel:"+1-618-273-9278", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elgin": {nombre:"Elgin", centro:[42.03726, -88.281099], tz:"America/Chicago", lugares:[
  {n:"Cobb & Co Veterinary Clinic", cat:"vet", lat:42.046801, lng:-88.260898, dir:"790 Summit Street", tel:"+18477416770", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Fox River Animal Wellness Center", cat:"vet", lat:42.041955, lng:-88.280881, dir:"251 Center Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lords Park Zoo", cat:"zoo", lat:42.040743, lng:-88.260479, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Farm Zoo", cat:"zoo", lat:42.041302, lng:-88.260903, horas:[11.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Elgin Animal Clinic", cat:"vet", lat:42.030776, lng:-88.23746, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elizabeth-indiana": {nombre:"Elizabeth", centro:[38.121182, -85.974132], tz:"America/New_York", lugares:[
  {n:"Pine Acres Miniature Farm", cat:"zoo", lat:38.083716, lng:-86.123041, dir:"6801 Union Chapel Road Southeast", tel:"+1-812-620-5449", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elk-grove-village": {nombre:"Elk Grove Village", centro:[42.003559, -88.003771], tz:"America/Chicago", lugares:[
  {n:"Elk Grove Pet Clinic", cat:"vet", lat:42.007376, lng:-88.044664, dir:"615 North Meacham Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Grooming by Teena", cat:"peluqueria", lat:42.005771, lng:-88.046449, dir:"672 North Meacham Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Elk Grove Veterinary Specialty & Emergency", cat:"vet", lat:41.994165, lng:-88.027081, dir:"1050 Bonaventure Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elk-rapids": {nombre:"Elk Rapids", centro:[44.898158, -85.413379], tz:"America/New_York", lugares:[
  {n:"Elk Rapids Animal Hospital", cat:"vet", lat:44.890574, lng:-85.411382, dir:"714 South US 31 Highway", tel:"+1-231-264-6700", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Bon Bons Pup Salon", cat:"peluqueria", lat:44.933734, lng:-85.373864, tel:"+12313420633", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elk-river-minnesota": {nombre:"Elk River", centro:[45.303854, -93.567183], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:45.298489, lng:-93.551326, dir:"18050 Zane Street Northwest", tel:"+1 763-567-7941", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Amvet Animal Hospital", cat:"vet", lat:45.281714, lng:-93.568214, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elkhart-indiana": {nombre:"Elkhart", centro:[41.681993, -85.976667], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.722842, lng:-85.974653, dir:"205 County Road 6 East", tel:"+1 574-584-7665", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "elkhart-lake": {nombre:"Elkhart Lake", centro:[43.833325, -88.017897], tz:"America/Chicago", lugares:[
  {n:"Compassionate Care Animal Clinic", cat:"vet", lat:43.834676, lng:-88.01219, dir:"150 Victory Lane", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elkhorn-wisconsin": {nombre:"Elkhorn", centro:[42.671921, -88.543494], tz:"America/Chicago", lugares:[
  {n:"Love's Dog Park", cat:"parque", lat:42.652493, lng:-88.541713, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ellettsville": {nombre:"Ellettsville", centro:[39.233935, -86.625001], tz:"America/Chicago", lugares:[
  {n:"Arlington Heights Veterinary Hospital", cat:"vet", lat:39.207292, lng:-86.573299, dir:"4515 Arlington Rd", tel:"+1-812-332-6955", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ellisville-missouri": {nombre:"Ellisville", centro:[38.594637, -90.584838], tz:"America/Chicago", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:38.591847, lng:-90.562047, dir:"15400 Manchester Road", tel:"+1-636-283-2444", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ark Pet Center", cat:"vet", lat:38.603647, lng:-90.588804, dir:"1360 Clarkson Clayton Center", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ellsworth-wisconsin": {nombre:"Ellsworth", centro:[44.732122, -92.483122], tz:"America/Chicago", lugares:[
  {n:"Pierce Veterinary Clinic", cat:"vet", lat:44.74326, lng:-92.48624, dir:"707 North Brown Street", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "elm-grove": {nombre:"Elm Grove", centro:[43.043068, -88.078978], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:43.037094, lng:-88.113274, dir:"585 Main Street", tel:"+1 262-641-3458", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Mayfair Animal Hospital", cat:"vet", lat:43.059642, lng:-88.058591, dir:"11637 West North Avenue", tel:"+1 414-897-8840", horas:[10.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Pampered Paws Ltd.", cat:"peluqueria", lat:43.054636, lng:-88.047098, dir:"1826 North Mayfair Road", tel:"+1-414-476-4323", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"EverVet", cat:"vet", lat:43.035839, lng:-88.052548, dir:"11120 West Bluemound Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Official Pet Boutique", cat:"tienda", lat:43.062072, lng:-88.068074, dir:"2355 North 124th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Styl’n Companions Pet Spa", cat:"peluqueria", lat:43.017347, lng:-88.085065, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elmhurst": {nombre:"Elmhurst", centro:[41.899474, -87.940342], tz:"America/Chicago", lugares:[
  {n:"DeVries Animal Hospital", cat:"vet", lat:41.884467, lng:-87.949749, dir:"528 Spring Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elmwood-park": {nombre:"Elmwood Park", centro:[41.920593, -87.816017], tz:"America/Chicago", lugares:[
  {n:"Park Animal Hospital", cat:"vet", lat:41.926927, lng:-87.806515, dir:"2540 North Harlem Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.911871, lng:-87.806364, dir:"1748 North Harlem Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elmwood-park-wisconsin": {nombre:"Elmwood Park", centro:[42.692242, -87.822298], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.696754, lng:-87.847861, dir:"5557 Durand Avenue", tel:"+1 262 554 9898", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Copy Cat Music", cat:"tienda", lat:42.718491, lng:-87.817607, dir:"3205 Washington Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wisconsin Humane Society", cat:"refugio", lat:42.682796, lng:-87.81205, dir:"2800 Chicory Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Prairie Side Veterinary Hospital", cat:"vet", lat:42.703836, lng:-87.825533, dir:"2111 Lathrop Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elsberry": {nombre:"Elsberry", centro:[39.166715, -90.78096], tz:"America/Chicago", lugares:[
  {n:"Elsberry Animal Hospital", cat:"vet", lat:39.165982, lng:-90.782674, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elwood-nebraska": {nombre:"Elwood", centro:[40.590386, -99.861212], tz:"America/Chicago", lugares:[
  {n:"B & B Veterinary Services", cat:"vet", lat:40.601968, lng:-99.858787, dir:"42651 Highway 283", tel:"+1-308-785-2722", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ely": {nombre:"Ely", centro:[41.872686, -91.585403], tz:"America/Chicago", lugares:[
  {n:"Cedar Rapids Animal Control", cat:"refugio", lat:41.906101, lng:-91.647221, dir:"7229 Washington View Parkway SW", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ely-minnesota": {nombre:"Ely", centro:[47.901571, -91.857248], tz:"America/Chicago", lugares:[
  {n:"Ely Veterinarian", cat:"vet", lat:47.906099, lng:-91.862674, dir:"318 Miners Drive East", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elyria-ohio": {nombre:"Elyria", centro:[41.367319, -82.107358], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:41.348051, lng:-82.067763, dir:"660 Chestnut Commons Drive", tel:"+1 440-406-5048", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Elyria Animal Hospital", cat:"vet", lat:41.377192, lng:-82.078468, dir:"600 Cleveland Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.388119, lng:-82.108598, dir:"220 Market Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "emerson-nebraska": {nombre:"Emerson", centro:[42.278537, -96.726741], tz:"America/Chicago", lugares:[
  {n:"Pender Veterinary Clinic - Emerson", cat:"vet", lat:42.277899, lng:-96.726357, dir:"South Main Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "empire-minnesota": {nombre:"Empire", centro:[44.663489, -93.131547], tz:"America/Chicago", lugares:[
  {n:"Akin Hills Pet Hospital", cat:"vet", lat:44.682778, lng:-93.17598, dir:"18400 Pilot Knob Road", tel:"+1-651-460-8985", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "emporia": {nombre:"Emporia", centro:[38.404005, -96.181623], tz:"America/Chicago", lugares:[
  {n:"L & L Pets", cat:"tienda", lat:38.405848, lng:-96.180458, tel:"+1-620-343-3398", horas:[9.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Emporia Animal Shelter", cat:"refugio", lat:38.413293, lng:-96.22188, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"David Traylor Zoo", cat:"zoo", lat:38.385357, lng:-96.17874, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Buck Fund Dog Park", cat:"parque", lat:38.4276, lng:-96.218891, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "energy": {nombre:"Energy", centro:[37.774006, -89.026627], tz:"America/Chicago", lugares:[
  {n:"Central Hospital for Animals", cat:"vet", lat:37.745903, lng:-89.025691, dir:"300 Rushing Drive", tel:"+1-800-455-6536", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Animal Inn", cat:"refugio", lat:37.745509, lng:-89.025286, dir:"224 Rushing Drive", tel:"+1-618-993-3205", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Quality Care Animal Hospital", cat:"vet", lat:37.747065, lng:-89.022204, dir:"100 Rushing Drive", tel:"+1-618-997-4272", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Williamson County Animal Control", cat:"refugio", lat:37.758653, lng:-88.983184, dir:"11266 North Skyline Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "englewood-ohio": {nombre:"Englewood", centro:[39.877555, -84.302167], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:39.861849, lng:-84.28185, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Englewood Animal Hospital", cat:"vet", lat:39.870015, lng:-84.295601, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eolia": {nombre:"Eolia", centro:[39.235879, -91.008192], tz:"America/Chicago", lugares:[
  {n:"Dog Park", cat:"parque", lat:39.232318, lng:-91.017264, horas:[0.0, 12.0], nota:"Dato de OpenStreetMap"}
 ]},
 "erie-township": {nombre:"Erie Township", centro:[41.776023, -83.490873], tz:"America/New_York", lugares:[
  {n:"Healthy Pet", cat:"tienda", lat:41.732497, lng:-83.480534, tel:"+1-419-726-4440", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "escanaba": {nombre:"Escanaba", centro:[45.745571, -87.064743], tz:"America/New_York", lugares:[
  {n:"Groomingdales", cat:"tienda", lat:45.757777, lng:-87.076479, dir:"1012 North Lincoln Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Escanaba Veterinary Clinic", cat:"vet", lat:45.752852, lng:-87.071406, dir:"618 Stephenson Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Place", cat:"tienda", lat:45.749083, lng:-87.073793, dir:"1815 3rd Avenue North", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"4-Paws Grooming", cat:"peluqueria", lat:45.742063, lng:-87.065481, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "estherville": {nombre:"Estherville", centro:[43.402664, -94.83636], tz:"America/Chicago", lugares:[
  {n:"Ringham Habitat Area", cat:"zoo", lat:43.453678, lng:-94.872085, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "euclid-ohio": {nombre:"Euclid", centro:[41.593105, -81.526787], tz:"America/New_York", lugares:[
  {n:"Aaron's Grooming Salon", cat:"peluqueria", lat:41.590138, lng:-81.550094, dir:"640 East 185th Street", tel:"+1-216-486-1396", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center of Euclid", cat:"vet", lat:41.615721, lng:-81.514599, dir:"24100 Lake Shore Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetFix Northeast Ohio", cat:"vet", lat:41.590064, lng:-81.526358, dir:"885 East 222nd Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Moore Pet Supply", cat:"tienda", lat:41.591878, lng:-81.549738, dir:"567 East 185th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"KeeKee Kutz", cat:"peluqueria", lat:41.589226, lng:-81.550072, dir:"676 East 185th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Euclid Animal Shelter", cat:"refugio", lat:41.598059, lng:-81.506557, dir:"25100 Lakeland Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Euclid Veterinary Clinic", cat:"vet", lat:41.599301, lng:-81.505131, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eureka-missouri": {nombre:"Eureka", centro:[38.502554, -90.627904], tz:"America/Chicago", lugares:[
  {n:"Eureka Veterinary Clinic", cat:"vet", lat:38.504474, lng:-90.651334, dir:"1415 West 5th Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eureka-south-dakota": {nombre:"Eureka", centro:[45.769426, -99.619563], tz:"America/Chicago", lugares:[
  {n:"Eureka Veterinary Services PC", cat:"vet", lat:45.76693, lng:-99.619388, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "evansdale": {nombre:"Evansdale", centro:[42.477184, -92.288411], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.458429, lng:-92.326908, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "evanston": {nombre:"Evanston", centro:[42.047004, -87.684605], tz:"America/Chicago", lugares:[
  {n:"Pottawattomie Dog Park", cat:"parque", lat:42.017061, lng:-87.676771, dir:"7340 North Rogers Avenue", tel:"+1-773-262-5835", horas:[6.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"Grooming by Galdy", cat:"tienda", lat:42.009592, lng:-87.661992, dir:"7011 North Sheridan Road", tel:"+1-773-764-2275", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rogers Bark Pet Salon", cat:"peluqueria", lat:42.01585, lng:-87.667946, dir:"1447 West Jarvis Avenue", tel:"+1-773-274-2275", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Broadway Animal Hospital", cat:"vet", lat:41.994794, lng:-87.660169, dir:"6211 North Broadway", tel:"+1-773-262-5445", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.027635, lng:-87.705134, dir:"2221 Oakton Street", tel:"+1 847-328-1814", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Paws & Claws Cat Rescue", cat:"refugio", lat:42.033194, lng:-87.679034, dir:"829 Chicago Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.038725, lng:-87.700815, dir:"1916 Dempster Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spotless Self-Serve Dog Wash", cat:"tienda", lat:42.052516, lng:-87.686996, dir:"1121 Emerson Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Place", cat:"tienda", lat:42.010048, lng:-87.675203, dir:"1775 West Greenleaf Avenue", horas:[6.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Royal Treatment", cat:"vet", lat:42.019626, lng:-87.683645, dir:"815 Howard Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bramer Animal Hospital", cat:"vet", lat:42.04739, lng:-87.686099, dir:"1021 Davis Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Evanston Animal Hospital", cat:"vet", lat:42.041026, lng:-87.679921, dir:"516 Dempster Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Howard Street Animal Hospital", cat:"vet", lat:42.019665, lng:-87.681208, dir:"715 Howard Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tree House Humane Society", cat:"refugio", lat:42.013101, lng:-87.689835, dir:"7225 North Western Avenue", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Evanston Animal Shelter", cat:"refugio", lat:42.026153, lng:-87.705163, dir:"2222 Oakton Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pooch Park", cat:"parque", lat:42.029056, lng:-87.709157, dir:"3220 Oakton Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Beach", cat:"parque", lat:42.047458, lng:-87.672741, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "evansville-indiana": {nombre:"Evansville", centro:[37.970495, -87.571564], tz:"America/Chicago", lugares:[
  {n:"Evansville Animal Care & Control", cat:"refugio", lat:37.995179, lng:-87.576061, dir:"815 Uhlhorn Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Daisy's Downtown Pet Playground", cat:"refugio", lat:37.975852, lng:-87.568823, dir:"216 Northwest 8th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mesker Park Zoo & Botanical Garden", cat:"zoo", lat:37.997744, lng:-87.603485, dir:"1545 Mesker Park Drive", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Earthborn Holistic Dog Park", cat:"parque", lat:37.97399, lng:-87.574868, dir:"324 Northwest 3rd Street", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"North Park Veterinarian", cat:"vet", lat:38.00309, lng:-87.57383, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Food Center", cat:"tienda", lat:37.980244, lng:-87.60007, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Bark Dog Park", cat:"parque", lat:37.997704, lng:-87.568656, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vanderburgh County Humane Society", cat:"refugio", lat:37.992572, lng:-87.570048, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "evansville-wisconsin": {nombre:"Evansville", centro:[42.780349, -89.299225], tz:"America/Chicago", lugares:[
  {n:"Chesterfield Kennels", cat:"refugio", lat:42.754052, lng:-89.319692, dir:"5641 North Old Highway 92", tel:"+1-608-882-6197", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yellow Dog Deli", cat:"tienda", lat:42.779966, lng:-89.280145, dir:"611 East Main Street", horas:[14.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Evansville Veterinary Services", cat:"vet", lat:42.779635, lng:-89.297686, dir:"18 Maple Street", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"The Grooming Room", cat:"peluqueria", lat:42.782573, lng:-89.295907, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Paws", cat:"tienda", lat:42.782484, lng:-89.295691, horas:[7.0, 18.5], nota:"Dato de OpenStreetMap"}
 ]},
 "eveleth": {nombre:"Eveleth", centro:[47.462761, -92.538824], tz:"America/Chicago", lugares:[
  {n:"Eveleth Dog Park", cat:"parque", lat:47.472915, lng:-92.534275, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "evergreen-park": {nombre:"Evergreen Park", centro:[41.720136, -87.701326], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.719703, lng:-87.68917, dir:"2603 West 95th Street", tel:"+1 708-459-9112", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.716733, lng:-87.684622, dir:"9670 South Western Avenue", tel:"+1 708-907-4297", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Hasan Park", cat:"parque", lat:41.771263, lng:-87.567114, dir:"6855 South Oglesby Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hyde Park Animal Hospital", cat:"vet", lat:41.768661, lng:-87.585624, dir:"6937 South Stony Island Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "excelsior": {nombre:"Excelsior", centro:[44.903296, -93.566345], tz:"America/Chicago", lugares:[
  {n:"Bentley's Pet Stuff", cat:"tienda", lat:44.901119, lng:-93.569203, dir:"400 Water Street", tel:"+1-952-855-4329", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "excelsior-springs": {nombre:"Excelsior Springs", centro:[39.341724, -94.222351], tz:"America/Chicago", lugares:[
  {n:"Vintage Plaza Veterinary Hospital", cat:"vet", lat:39.354971, lng:-94.234592, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"My Best Friends Barber", cat:"peluqueria", lat:39.340594, lng:-94.225002, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eyota": {nombre:"Eyota", centro:[43.988751, -92.22924], tz:"America/Chicago", lugares:[
  {n:"Eyota Veterinary Clinic", cat:"vet", lat:43.991273, lng:-92.229863, dir:"95 Center Avenue North", tel:"+1-507-545-2828", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fairborn": {nombre:"Fairborn", centro:[39.8209, -84.019386], tz:"America/New_York", lugares:[
  {n:"Huber Heights Animal Hospital", cat:"vet", lat:39.857503, lng:-84.106137, dir:"7200 Brandt Pike", tel:"+1-937-233-2612", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hobson Dog Park", cat:"parque", lat:39.772111, lng:-83.990585, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fairbury": {nombre:"Fairbury", centro:[40.747257, -88.514779], tz:"America/Chicago", lugares:[
  {n:"Fairbury Veterinary Hospital", cat:"vet", lat:40.744315, lng:-88.500895, dir:"808 East Oak Street", tel:"+1-815-692-3112", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fairfax-minnesota": {nombre:"Fairfax", centro:[44.529129, -94.720821], tz:"America/Chicago", lugares:[
  {n:"Fairfax Veterinary Clinic", cat:"vet", lat:44.529231, lng:-94.722507, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stables", cat:"refugio", lat:44.471572, lng:-94.734221, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fairfax-ohio": {nombre:"Fairfax", centro:[39.145372, -84.393183], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.161955, lng:-84.421721, dir:"3401 Alamo Avenue", tel:"+1 513-731-9400", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"The Animal Hospital on Mt. Lookout Square", cat:"vet", lat:39.129672, lng:-84.430608, dir:"3175 Linwood Avenue", tel:"+1-513-871-8866", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetVet365", cat:"vet", lat:39.146061, lng:-84.425797, dir:"3866 Paxton Ave", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Red Dog Pet Resort Cincinnati", cat:"refugio", lat:39.158473, lng:-84.408798, dir:"5081 Madison Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Save the Animals Foundation", cat:"refugio", lat:39.148171, lng:-84.405406, dir:"4011 Red Bank Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Red Bank Veterinary Hospital", cat:"vet", lat:39.144686, lng:-84.404722, dir:"3838 Red Bank Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"FurKids Dog Daycare", cat:"refugio", lat:39.138469, lng:-84.397036, dir:"5614 Wooster Pike", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ohio Alleycat Resource & Spay/Neuter Clinic", cat:"refugio", lat:39.157479, lng:-84.397521, dir:"5619 Orlando Place", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fairfield-illinois": {nombre:"Fairfield", centro:[38.378937, -88.359768], tz:"America/Chicago", lugares:[
  {n:"Tony Vore Vet. Clinic", cat:"vet", lat:38.378773, lng:-88.351621, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fairfield-ohio": {nombre:"Fairfield", centro:[39.345895, -84.560503], tz:"America/New_York", lugares:[
  {n:"Petland", cat:"tienda", lat:39.334865, lng:-84.523728, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jungle Pets", cat:"tienda", lat:39.336499, lng:-84.524331, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"FurField", cat:"parque", lat:39.322448, lng:-84.599048, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fairlawn": {nombre:"Fairlawn", centro:[41.132664, -81.626205], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.134626, lng:-81.635972, dir:"3750 West Market Street", tel:"+1 330-396-5135", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Kay 9 Pet Salon", cat:"peluqueria", lat:41.114595, lng:-81.577758, dir:"1947 West Market Street", tel:"+1-330-836-5299", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"One of a Kind Pet Rescue", cat:"refugio", lat:41.114091, lng:-81.57689, dir:"1929 West Market Street", tel:"+1-330-865-6200", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets Pajamas", cat:"tienda", lat:41.138413, lng:-81.640005, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.127713, lng:-81.604677, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Valley Animal Hospital", cat:"vet", lat:41.135366, lng:-81.555612, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riverwood Dog Park", cat:"parque", lat:41.142026, lng:-81.55887, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fairview-heights": {nombre:"Fairview Heights", centro:[38.588939, -89.990382], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:38.595368, lng:-89.987302, dir:"6595 North Illinois Street", tel:"+1 618-398-1430", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Bollmeir Vetrinary Clinic", cat:"vet", lat:38.593096, lng:-89.965234, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.594473, lng:-89.955922, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fairview-michigan": {nombre:"Fairview", centro:[44.725012, -84.051113], tz:"America/New_York", lugares:[
  {n:"Haley's Grooming", cat:"peluqueria", lat:44.720652, lng:-84.082807, dir:"1356 Lady Slipper Drive", tel:"+1-989-370-7981", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fairview-park-ohio": {nombre:"Fairview Park", centro:[41.446173, -81.852652], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:41.457949, lng:-81.852341, dir:"20980 Westgate Mall", tel:"+1 440-356-9570", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"West Park Animal Hospital", cat:"vet", lat:41.442919, lng:-81.818411, dir:"4117 Rocky River Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kamm’s Corner Pet Shop", cat:"tienda", lat:41.451833, lng:-81.818674, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.441267, lng:-81.864222, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "faith-south-dakota": {nombre:"Faith", centro:[45.022613, -102.039599], tz:"America/Denver", lugares:[
  {n:"Faith Veterinary Services", cat:"vet", lat:45.018367, lng:-102.045757, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "falcon-heights": {nombre:"Falcon Heights", centro:[44.989813, -93.176251], tz:"America/Chicago", lugares:[
  {n:"Oh My Dog", cat:"refugio", lat:44.967498, lng:-93.187974, dir:"880 Vandalia Street", tel:"+1-651-642-9663", horas:[7.0, 9.5], nota:"Dato de OpenStreetMap"},
  {n:"Twin Cities Reptiles", cat:"tienda", lat:44.963788, lng:-93.196578, dir:"2363 University Avenue West", tel:"+1-651-647-4479", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"St. Paws Dog Daycare & Boarding", cat:"refugio", lat:44.956919, lng:-93.18094, dir:"1920 University Avenue", tel:"+1-651-644-7297", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Purrniture Cat Furniture", cat:"tienda", lat:44.961753, lng:-93.192862, dir:"2242 University Avenue West", tel:"+1-651-642-1946", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Feline Rescue", cat:"refugio", lat:44.959106, lng:-93.177615, dir:"593 Fairview Avenue North", tel:"+1-651-642-5900", horas:[10.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Midway Animal Hospital", cat:"vet", lat:44.963204, lng:-93.167291, dir:"731 Snelling Avenue", tel:"+1 651 644 2100", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Grand Paws Pet Grooming", cat:"peluqueria", lat:44.959221, lng:-93.156672, dir:"600 Hamline Avenue North", tel:"+16512254022", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Saint Bark", cat:"parque", lat:44.975689, lng:-93.168188, dir:"1145 Snelling Avenue", tel:"+1 651-808-3773", horas:[15.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:44.964178, lng:-93.198775, dir:"2418 University Avenue West", tel:"+1 651-432-4040", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Como Park Zoo", cat:"zoo", lat:44.982478, lng:-93.153894, dir:"1225 Estabrook Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Coach", cat:"refugio", lat:44.969984, lng:-93.144396, dir:"1044 Front Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fargo-north-dakota": {nombre:"Fargo", centro:[46.877229, -96.789821], tz:"America/Chicago", lugares:[
  {n:"Shaggy's Dog Wash & Grooming", cat:"peluqueria", lat:46.91243, lng:-96.787904, dir:"2812 Broadway N", tel:"+1 701-356-4373", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hotdog! Pet Salon", cat:"peluqueria", lat:46.877056, lng:-96.789398, tel:"+1 701-478-8009", horas:[11.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Homeward Animal Shelter", cat:"refugio", lat:46.912569, lng:-96.796117, dir:"1201 28th Avenue North", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Natural Pet Center", cat:"tienda", lat:46.905321, lng:-96.795483, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Airport Animal Hospital", cat:"vet", lat:46.909254, lng:-96.797427, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cats Cradle", cat:"refugio", lat:46.874305, lng:-96.792909, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "faribault": {nombre:"Faribault", centro:[44.294964, -93.268827], tz:"America/Chicago", lugares:[
  {n:"White Sands Dog Park", cat:"parque", lat:44.300025, lng:-93.292181, dir:"900 Lyndale Avenue North", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "farmer-city": {nombre:"Farmer City", centro:[40.243368, -88.642567], tz:"America/Chicago", lugares:[
  {n:"R.U.F.F. Salon", cat:"peluqueria", lat:40.185182, lng:-88.593021, dir:"2704 North 800 East Road", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "farmington-hills": {nombre:"Farmington Hills", centro:[42.485312, -83.377155], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:42.512802, lng:-83.36007, dir:"29335 Orchard Lake Road", tel:"+1 248-553-2786", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "farmington-michigan": {nombre:"Farmington", centro:[42.46448, -83.376322], tz:"America/New_York", lugares:[
  {n:"AlfaVet Animal Hospital", cat:"vet", lat:42.456313, lng:-83.346158, dir:"30332 West 9 Mile Road", tel:"+1 248-888-8160", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Angel Animal Hospital", cat:"vet", lat:42.469512, lng:-83.416438, dir:"24307 Halsted Road", tel:"+1 248-615-6500", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Advanced Veterinary Medical Center", cat:"vet", lat:42.452921, lng:-83.34733, dir:"30470 Grand River Avenue", tel:"+12484785400", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:42.428221, lng:-83.341574, dir:"29560 7 Mile Road", tel:"+1 248-426-7123", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Tolonen Family Pet", cat:"tienda", lat:42.462658, lng:-83.374488, dir:"23320 Grand River Avenue", tel:"+1 248 893 7170", horas:[10.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Jeffrey Animal Hospital", cat:"vet", lat:42.442182, lng:-83.335967, dir:"20720 Middlebelt Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pristine Pets", cat:"tienda", lat:42.468346, lng:-83.388257, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Plaza Veterinary Hospital", cat:"vet", lat:42.458593, lng:-83.357433, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Village Animal Clinic", cat:"vet", lat:42.468414, lng:-83.386855, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Allen Animal Hospital", cat:"vet", lat:42.425156, lng:-83.374415, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Area", cat:"parque", lat:42.454261, lng:-83.33036, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fayette-missouri": {nombre:"Fayette", centro:[39.146301, -92.683359], tz:"America/Chicago", lugares:[
  {n:"Howard County Veterinary Service, P.C.", cat:"vet", lat:39.168208, lng:-92.695493, dir:"293 Hwy 5", tel:"+1 660-248-3382", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fayetteville-ohio": {nombre:"Fayetteville", centro:[39.18673, -83.932152], tz:"America/New_York", lugares:[
  {n:"Sophie’s Pet Parlor", cat:"peluqueria", lat:39.189471, lng:-83.931401, dir:"162 Anderson State Road", tel:"+1-937-515-5003", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fenton-michigan": {nombre:"Fenton", centro:[42.797806, -83.70495], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.804814, lng:-83.731681, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fenton-missouri": {nombre:"Fenton", centro:[38.513199, -90.440058], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:38.504238, lng:-90.44718, dir:"149 Gravois Bluffs Plaza Drive", tel:"+1 636-326-9631", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fergus-falls": {nombre:"Fergus Falls", centro:[46.283476, -96.077791], tz:"America/Chicago", lugares:[
  {n:"Companion Animal Hospital", cat:"vet", lat:46.286362, lng:-96.117199, dir:"405 Western Avenue", tel:"+12187393383", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fergus Falls Animal Clinic", cat:"vet", lat:46.283927, lng:-96.072171, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Higgins Dog Park", cat:"parque", lat:46.274604, lng:-96.061773, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ferguson": {nombre:"Ferguson", centro:[41.937018, -92.865668], tz:"America/Chicago", lugares:[
  {n:"Bison Corral", cat:"zoo", lat:41.925218, lng:-92.859227, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ferndale-michigan": {nombre:"Ferndale", centro:[42.460592, -83.134648], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:42.444668, lng:-83.122136, dir:"2005 8 Mile Road West", tel:"+1 313-366-2129", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Little Friends of Ferndale", cat:"vet", lat:42.460711, lng:-83.119317, dir:"1150 East 9 Mile Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Maestro's Dog Haus", cat:"tienda", lat:42.460712, lng:-83.138389, dir:"310 West 9 Mile Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Woodward Animal Clinic", cat:"vet", lat:42.460151, lng:-83.14628, dir:"915 West 9 Mile Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bubble & Bark", cat:"refugio", lat:42.451911, lng:-83.14228, dir:"686 Livernois Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.431041, lng:-83.141071, dir:"18956 Livernois Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Puppy Love Dog Socialization Center & Spa", cat:"refugio", lat:42.46466, lng:-83.123653, dir:"2221 Hilton Road", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Ferndale Dog Park", cat:"parque", lat:42.456517, lng:-83.123395, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ferrysburg": {nombre:"Ferrysburg", centro:[43.080764, -86.21818], tz:"America/New_York", lugares:[
  {n:"West Shore Veterinary Clinic", cat:"vet", lat:43.090081, lng:-86.222636, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fifield": {nombre:"Fifield", centro:[45.879677, -90.422105], tz:"America/Chicago", lugares:[
  {n:"Seed-N-Feed", cat:"tienda", lat:45.88128, lng:-90.42107, dir:"N14091 Flambeau Avenue", tel:"+1-715-762-2667", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"North Country Veternary Clinic", cat:"vet", lat:45.903785, lng:-90.435539, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fillmore-wisconsin": {nombre:"Fillmore", centro:[43.497749, -88.062423], tz:"America/Chicago", lugares:[
  {n:"Shalom Wildlife Zoo", cat:"zoo", lat:43.478013, lng:-88.130182, dir:"1901 Shalom", tel:"+1-262-440-3380", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "findlay-ohio": {nombre:"Findlay", centro:[41.041387, -83.650398], tz:"America/New_York", lugares:[
  {n:"4-Paws", cat:"tienda", lat:41.035388, lng:-83.641013, dir:"625 Mount Blanchard Road", tel:"+1-419-423-0848", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.057294, lng:-83.596459, dir:"2330 Tiffin Avenue", tel:"+1 419-423-6869", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Blanchard Valley Veterinary Clinic", cat:"vet", lat:41.06015, lng:-83.64925, dir:"1611 North Main Street", tel:"+1 419 422 3292", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Findlay Animal Hospital", cat:"vet", lat:41.065427, lng:-83.616628, dir:"2141 Bright Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.053938, lng:-83.60333, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Legacy Lwan & Pet", cat:"tienda", lat:41.066286, lng:-83.602875, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kirk Surgery Suite", cat:"vet", lat:41.066423, lng:-83.602999, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jacks Aquariums & Pets", cat:"tienda", lat:41.056212, lng:-83.670652, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mane Stream Saddlery", cat:"tienda", lat:41.056244, lng:-83.611167, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K-9 Field of Dreams Dog Park", cat:"parque", lat:41.033022, lng:-83.561644, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Sosiety and SPCA of Hancock County", cat:"refugio", lat:41.066337, lng:-83.603027, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Teddy's Rescue", cat:"refugio", lat:41.08612, lng:-83.641753, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Legacy Lawn and Pet", cat:"tienda", lat:41.071506, lng:-83.593661, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Wash", cat:"peluqueria", lat:41.08711, lng:-83.651679, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fishers": {nombre:"Fishers", centro:[39.955593, -86.013873], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.958111, lng:-86.042996, dir:"7236 Fishers Crossing Drive", tel:"+1-317-845-0325", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.994011, lng:-85.936926, dir:"14120 Brooks School Road", tel:"+1 317-703-1127", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:39.928854, lng:-86.018254, dir:"8628 East 96th Street", tel:"+1-463-207-9755", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bird Fever", cat:"tienda", lat:39.911554, lng:-86.06802, dir:"5921 East 86th Street", tel:"+1-317-845-7823", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Three Dog Bakery", cat:"tienda", lat:39.991265, lng:-85.931253, dir:"13904 Town Center Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society For Hamilton County", cat:"refugio", lat:39.940459, lng:-86.031992, dir:"10501 Hague Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Windermere Animal Hospital", cat:"vet", lat:39.929817, lng:-85.984051, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Parkside Animal Hospital", cat:"vet", lat:39.975891, lng:-86.003075, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Beverly's Pet Resort", cat:"tienda", lat:39.990838, lng:-85.969856, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fitchburg-wisconsin": {nombre:"Fitchburg", centro:[43.002092, -89.423817], tz:"America/Chicago", lugares:[
  {n:"Fitchburg Veterinary Hospital", cat:"vet", lat:43.009813, lng:-89.478318, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Dogz Daycare", cat:"refugio", lat:43.015823, lng:-89.464428, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tabby Jack's", cat:"tienda", lat:43.017334, lng:-89.42357, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sunnyside Park", cat:"parque", lat:42.987451, lng:-89.427668, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:43.013485, lng:-89.478032, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Odyssey Veterinary Care", cat:"vet", lat:43.01425, lng:-89.430977, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waggin' Tails", cat:"refugio", lat:43.009812, lng:-89.478077, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crescent Crossing Dog Park", cat:"parque", lat:43.004166, lng:-89.456149, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "flandreau": {nombre:"Flandreau", centro:[44.049416, -96.595324], tz:"America/Chicago", lugares:[
  {n:"Flandreau Veterinary Clinic", cat:"vet", lat:44.047061, lng:-96.608353, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "flint": {nombre:"Flint", centro:[43.016169, -83.690021], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.981242, lng:-83.753237, dir:"4061 Miller Road", tel:"+1 810-733-6311", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Magoo's", cat:"tienda", lat:43.025084, lng:-83.6339, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mapleridge Dog Park", cat:"parque", lat:42.95572, lng:-83.71616, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "florence-nebraska": {nombre:"Florence", centro:[41.336844, -95.960674], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.315161, lng:-96.027512, dir:"6220 North 73rd Plaza", tel:"+1 402-571-9769", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Nebraska Humane Society", cat:"vet", lat:41.305415, lng:-96.050921, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "florissant-missouri": {nombre:"Florissant", centro:[38.791968, -90.32278], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:38.805644, lng:-90.307955, dir:"2435 North US 67", tel:"+1 314-839-5136", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.805104, lng:-90.30046, dir:"13927 New Halls Ferry Road", tel:"+1 314-830-1215", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:38.805017, lng:-90.30042, dir:"13927 New Halls Ferry Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Florissant Dog Park", cat:"parque", lat:38.787326, lng:-90.340813, dir:"5 Brower Lane", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "flossmoor": {nombre:"Flossmoor", centro:[41.542812, -87.684768], tz:"America/Chicago", lugares:[
  {n:"Healthy Hounds", cat:"tienda", lat:41.543477, lng:-87.679401, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "flushing": {nombre:"Flushing", centro:[43.063083, -83.851073], tz:"America/New_York", lugares:[
  {n:"Flushing Animal Hospital", cat:"vet", lat:43.060837, lng:-83.803929, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ford-river": {nombre:"Ford River", centro:[45.679414, -87.140132], tz:"America/New_York", lugares:[
  {n:"Golden Acre Kennels", cat:"refugio", lat:45.665832, lng:-87.183484, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "forest-city-iowa": {nombre:"Forest City", centro:[43.262675, -93.637674], tz:"America/Chicago", lugares:[
  {n:"Luxe Fur Lounge", cat:"peluqueria", lat:43.273643, lng:-93.636279, dir:"1006 Pleasant Street", tel:"+16415855893", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "forest-lake": {nombre:"Forest Lake", centro:[45.279106, -92.985163], tz:"America/Chicago", lugares:[
  {n:"Forest Lake Pets", cat:"tienda", lat:45.280746, lng:-92.984987, dir:"120 Lake St N", tel:"+16514648982", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Parrots of Parrot Adoption Education Program", cat:"tienda", lat:45.280577, lng:-92.985038, dir:"108 Lake St N", tel:"+16122101752", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:45.276084, lng:-92.997036, dir:"299 12th Street Southwest", tel:"+1 651-234-1240", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's Pet Food Outlet", cat:"tienda", lat:45.278642, lng:-93.008489, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "forest-park-illinois": {nombre:"Forest Park", centro:[41.879499, -87.8137], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.887458, lng:-87.806881, dir:"7265 Lake Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"River Forest Animal Hospital", cat:"vet", lat:41.887338, lng:-87.812069, dir:"7515 Lake Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "forsyth-illinois": {nombre:"Forsyth", centro:[39.932537, -88.951191], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.915242, lng:-88.952912, dir:"1460 Koester Drive", tel:"+1 217-876-1392", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fort-atkinson-wisconsin": {nombre:"Fort Atkinson", centro:[42.928894, -88.837051], tz:"America/Chicago", lugares:[
  {n:"Humane Society of Jefferson County", cat:"refugio", lat:42.969832, lng:-88.837564, dir:"W6127 Kiesling Road", tel:"+1-920-674-2048", horas:[13.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of Fort Atkinson", cat:"vet", lat:42.941118, lng:-88.861612, dir:"1555 Madison Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-branch": {nombre:"Fort Branch", centro:[38.251153, -87.581119], tz:"America/Chicago", lugares:[
  {n:"Fort Branch Veterinary Clinic", cat:"vet", lat:38.267415, lng:-87.568244, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-dodge": {nombre:"Fort Dodge", centro:[42.504402, -94.191004], tz:"America/Chicago", lugares:[
  {n:"Olsen Park Zoo", cat:"zoo", lat:42.489934, lng:-94.172706, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-leavenworth": {nombre:"Fort Leavenworth", centro:[39.345184, -94.921703], tz:"America/Chicago", lugares:[
  {n:"Fort Leavenworth Veterinary Treatment Facility", cat:"vet", lat:39.359412, lng:-94.919732, dir:"831 McClellan Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stray Facility", cat:"refugio", lat:39.356547, lng:-94.922249, dir:"510 Organ Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-madison": {nombre:"Fort Madison", centro:[40.631141, -91.308401], tz:"America/Chicago", lugares:[
  {n:"Fort Madison Veterinary Clinic", cat:"vet", lat:40.625771, lng:-91.359292, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-scott": {nombre:"Fort Scott", centro:[37.839979, -94.708288], tz:"America/Chicago", lugares:[
  {n:"Animal Care Center", cat:"vet", lat:37.829932, lng:-94.700165, dir:"601 East 10th Street", tel:"+1-620-223-1770", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "fort-wayne": {nombre:"Fort Wayne", centro:[41.07999, -85.138601], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:41.119861, lng:-85.136774, dir:"315 East Coliseum Boulevard", tel:"+1 260-471-4350", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Rub A Dub Dub Dog Grooming and Spa", cat:"peluqueria", lat:41.075008, lng:-85.182189, dir:"3234 Illinois Road", tel:"+1-260-312-1649", horas:[8.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.069131, lng:-85.200085, dir:"1760 Apple Glen Boulevard", tel:"+1 260-436-7323", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Corner Vetrinary Clinic", cat:"vet", lat:41.089562, lng:-85.124872, dir:"1029 Tennessee Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"green DogGoods", cat:"tienda", lat:41.107724, lng:-85.116583, dir:"3421 North Anthony Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.058443, lng:-85.224191, dir:"6326 West Jefferson Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fort Wayne Animal Hospital", cat:"vet", lat:41.147892, lng:-85.165306, dir:"7505 Lima Road", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Camp Canine", cat:"parque", lat:41.112873, lng:-85.117662, dir:"1502 North Harry Baals Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Richlene Kennels", cat:"peluqueria", lat:41.090866, lng:-85.199512, dir:"4336 Bass Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fort Wayne Children's Zoo", cat:"zoo", lat:41.107677, lng:-85.151915, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawster Park", cat:"parque", lat:41.038706, lng:-85.16338, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Canine: Members Only", cat:"parque", lat:41.112873, lng:-85.117662, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fostoria-ohio": {nombre:"Fostoria", centro:[41.15743, -83.414106], tz:"America/New_York", lugares:[
  {n:"Back Road Reptiles and Exotics", cat:"tienda", lat:41.179763, lng:-83.424349, dir:"610 Plaza Drive", tel:"+1-419-701-7101", horas:[11.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"TriCounty Veterinary Clinic", cat:"vet", lat:41.178318, lng:-83.426367, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fostoria Dog Park", cat:"parque", lat:41.140326, lng:-83.41831, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fox-crossing": {nombre:"Fox Crossing", centro:[44.223475, -88.470062], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:44.267762, lng:-88.477067, dir:"711 North Casaloma Drive", tel:"+1 920-731-4867", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"BluePearl", cat:"vet", lat:44.247352, lng:-88.477175, dir:"4706 New Horizon Boulevard", tel:"+1 920 993 9193", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"vet", lat:44.265391, lng:-88.471724, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fox Valley Humane Association", cat:"refugio", lat:44.244867, lng:-88.507672, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jerry Finch Dog Park", cat:"parque", lat:44.210521, lng:-88.474114, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fox-lake": {nombre:"Fox Lake", centro:[42.396687, -88.183696], tz:"America/Chicago", lugares:[
  {n:"KK's Pretty Paws", cat:"tienda", lat:42.384975, lng:-88.154839, dir:"130 Washington Street", tel:"+1-847-587-0600", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Somethin' Fishy", cat:"tienda", lat:42.396096, lng:-88.178684, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fox Lake Animal Hospital", cat:"vet", lat:42.386921, lng:-88.176831, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "frankenmuth": {nombre:"Frankenmuth", centro:[43.332368, -83.739229], tz:"America/New_York", lugares:[
  {n:"HELLO CATS AND DOGS", cat:"tienda", lat:43.323417, lng:-83.739627, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hund Platz", cat:"parque", lat:43.331206, lng:-83.730913, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Frankenmuth Birch Run Veterinary Hospital", cat:"vet", lat:43.288256, lng:-83.73473, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "frankfort": {nombre:"Frankfort", centro:[41.497947, -87.849595], tz:"America/Chicago", lugares:[
  {n:"Simba and Nala’s Dog Park", cat:"parque", lat:41.531073, lng:-87.812049, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "frankfort-kansas": {nombre:"Frankfort", centro:[39.705555, -96.416956], tz:"America/Chicago", lugares:[
  {n:"Animal Clinic", cat:"vet", lat:39.710706, lng:-96.416646, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "franklin-michigan": {nombre:"Franklin", centro:[42.522257, -83.306043], tz:"America/New_York", lugares:[
  {n:"DePorre Veterinary Hospital", cat:"vet", lat:42.545195, lng:-83.283212, dir:"4066 West Maple Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetPeople", cat:"tienda", lat:42.544244, lng:-83.286609, horas:[9.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.526436, lng:-83.359476, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "franklin-park": {nombre:"Franklin Park", centro:[41.935308, -87.865618], tz:"America/Chicago", lugares:[
  {n:"VCA Animal Hospital", cat:"vet", lat:41.930125, lng:-87.872301, dir:"9846 West Grand Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "franklin-wisconsin": {nombre:"Franklin", centro:[42.888627, -88.038418], tz:"America/Chicago", lugares:[
  {n:"Brentwood Animal Campus", cat:"vet", lat:42.879522, lng:-88.050574, tel:"+1-414-427-2700", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Tails Pet Supplies", cat:"tienda", lat:42.905391, lng:-88.038104, dir:"7720 South Lovers Lane Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fraser-michigan": {nombre:"Fraser", centro:[42.539202, -82.949365], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:42.533223, lng:-82.910682, dir:"32074 Gratiot Avenue", tel:"+1 586-294-0519", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Sheppard Alternative Animal Care", cat:"vet", lat:42.562681, lng:-82.950146, dir:"36300 Garfield Road", tel:"+1-586-884-0882", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Aunt Debi's Pampered Paws", cat:"peluqueria", lat:42.564171, lng:-82.952018, dir:"36452 Moravian Drive", tel:"+1-586-741-8740", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"The Pet Beastro", cat:"tienda", lat:42.537117, lng:-82.986395, dir:"13828 East 14 Mile Road", tel:"+1-877-434-3436", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Serenity Animal Hospital & Pet Resort", cat:"vet", lat:42.551743, lng:-82.988514, dir:"13800 15 Mile Road", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "frazee": {nombre:"Frazee", centro:[46.727805, -95.700139], tz:"America/Chicago", lugares:[
  {n:"Acorn Lake Veterinary Service", cat:"vet", lat:46.730798, lng:-95.710744, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "freeman-south-dakota": {nombre:"Freeman", centro:[43.352487, -97.437286], tz:"America/Chicago", lugares:[
  {n:"Ralph's Feed", cat:"tienda", lat:43.356996, lng:-97.428616, dir:"713 278th Street", tel:"+16059257438", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sioux Nation", cat:"vet", lat:43.349508, lng:-97.42231, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "freeport-michigan": {nombre:"Freeport", centro:[42.766145, -85.313344], tz:"America/New_York", lugares:[
  {n:"Boulder Ridge Wild Animal Park", cat:"zoo", lat:42.816703, lng:-85.332793, dir:"8313 Pratt Lake Avenue Southeast", tel:"+1-616-868-6711", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "freeport-minnesota": {nombre:"Freeport", centro:[45.66241, -94.690231], tz:"America/Chicago", lugares:[
  {n:"Hemker Park & Zoo", cat:"zoo", lat:45.671179, lng:-94.667962, dir:"26715 County Road 39", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fremont-nebraska": {nombre:"Fremont", centro:[41.433836, -96.496045], tz:"America/Chicago", lugares:[
  {n:"Animal Clinic Downtown", cat:"vet", lat:41.434127, lng:-96.499533, dir:"230 West 5th Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fremont-ohio": {nombre:"Fremont", centro:[41.347341, -83.113497], tz:"America/New_York", lugares:[
  {n:"Fremont Animal Hospital", cat:"vet", lat:41.379196, lng:-83.117653, dir:"2357 Sean Street", tel:"+1-419-332-2659", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "french-island": {nombre:"French Island", centro:[43.858299, -91.260417], tz:"America/Chicago", lugares:[
  {n:"Diggity Dog Daycare", cat:"refugio", lat:43.869482, lng:-91.252988, dir:"600 Fishermans Road", tel:"+1-608-779-9997", horas:[6.5, 18.5], nota:"Dato de OpenStreetMap"}
 ]},
 "frenchtown-charter-township": {nombre:"Frenchtown Charter Township", centro:[41.962078, -83.357632], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.956781, lng:-83.399145, dir:"2347 North Telegraph Road", tel:"+1 734-457-9122", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fridley": {nombre:"Fridley", centro:[45.083829, -93.259039], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:45.070239, lng:-93.265565, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Locke County Dog Park", cat:"parque", lat:45.096492, lng:-93.25358, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fruitport": {nombre:"Fruitport", centro:[43.13067, -86.154682], tz:"America/New_York", lugares:[
  {n:"Lifetime Veterinary Care", cat:"vet", lat:43.074775, lng:-86.086017, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fulton-missouri": {nombre:"Fulton", centro:[38.846708, -91.947959], tz:"America/Chicago", lugares:[
  {n:"Fulton Dog Park", cat:"parque", lat:38.858579, lng:-91.96339, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fultonham": {nombre:"Fultonham", centro:[39.855624, -82.141532], tz:"America/New_York", lugares:[
  {n:"Wild At Hart Wildlife Rehabilitation Inc.", cat:"refugio", lat:39.894023, lng:-82.104979, dir:"2900 Stine Road", tel:"+1 740-217-7788", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "gahanna": {nombre:"Gahanna", centro:[40.019562, -82.879136], tz:"America/New_York", lugares:[
  {n:"Animal Medical Center", cat:"vet", lat:40.005189, lng:-82.862137, dir:"Officenter Place 555", tel:"+1-614-755-4900", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"The DogSpaw", cat:"peluqueria", lat:40.041881, lng:-82.863451, dir:"923 Johnstown Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gahanna Animal Hospital", cat:"vet", lat:40.018497, lng:-82.882949, dir:"144 Johnstown Road", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"vet", lat:40.002301, lng:-82.8591, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rivers to Reefs Aquariums", cat:"tienda", lat:40.054802, lng:-82.884732, horas:[12.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Easton Pointe Dog Park", cat:"parque", lat:40.025567, lng:-82.920735, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park", cat:"parque", lat:40.026176, lng:-82.915503, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pizzurro Dog Park", cat:"parque", lat:39.996364, lng:-82.859358, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog's Only Medical Center", cat:"vet", lat:40.054616, lng:-82.857561, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "galatia": {nombre:"Galatia", centro:[37.840604, -88.609222], tz:"America/Chicago", lugares:[
  {n:"Teal's Veterinarian Services", cat:"vet", lat:37.841367, lng:-88.612853, dir:"110 West Locust Street", tel:"+1-618-268-4159", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hot Doggie's", cat:"peluqueria", lat:37.842969, lng:-88.606184, dir:"409 East Walker Avenue", tel:"+1-618-268-4400", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "galena-illinois": {nombre:"Galena", centro:[42.41573, -90.429473], tz:"America/Chicago", lugares:[
  {n:"Galena Square Veterinary Clinic", cat:"vet", lat:42.423014, lng:-90.440662, dir:"984 James Street", tel:"+1 815 777 2592", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "galesburg": {nombre:"Galesburg", centro:[40.947565, -90.371217], tz:"America/Chicago", lugares:[
  {n:"All About Pets", cat:"peluqueria", lat:40.947344, lng:-90.382764, dir:"750 West Main Street", tel:"+1 309-368-7690", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.972184, lng:-90.380507, dir:"1995 North Henderson Street", tel:"+1 309-343-3185", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Knox County Humane Society No Kill Animal Shelter", cat:"refugio", lat:40.972269, lng:-90.357221, tel:"+1-309-342-1275", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Project Dog Park - Connie Nott Canine Area", cat:"parque", lat:40.97302, lng:-90.392709, dir:"1285 West Carl Sandburg Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "galesville-wisconsin": {nombre:"Galesville", centro:[44.08285, -91.348667], tz:"America/Chicago", lugares:[
  {n:"Best Friends Pet Clinic LLC", cat:"vet", lat:44.082828, lng:-91.349199, dir:"16875 South Main Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "galion": {nombre:"Galion", centro:[40.733795, -82.789647], tz:"America/New_York", lugares:[
  {n:"Galion Veterinary Hospital", cat:"vet", lat:40.750547, lng:-82.798155, dir:"1270 Portland Way North", tel:"+1-419-462-1133", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Adventure Mountain", cat:"refugio", lat:40.667867, lng:-82.852737, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gambier": {nombre:"Gambier", centro:[40.375643, -82.397099], tz:"America/New_York", lugares:[
  {n:"Gambier Dog Park", cat:"parque", lat:40.371302, lng:-82.389077, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wolf Run Dog Park", cat:"parque", lat:40.396971, lng:-82.429708, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "garden-city-kansas": {nombre:"Garden City", centro:[37.97169, -100.872662], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:37.978218, lng:-100.834663, dir:"1490 Larue Road", tel:"+1 620-276-3178", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Lee Richardson Zoo", cat:"zoo", lat:37.960476, lng:-100.872277, dir:"312 East Finnup Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Garden City Dog Park", cat:"parque", lat:37.96101, lng:-100.846332, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "garden-city-michigan": {nombre:"Garden City", centro:[42.325593, -83.331042], tz:"America/New_York", lugares:[
  {n:"House of Pets", cat:"tienda", lat:42.327265, lng:-83.330626, dir:"5736 Middlebelt Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Premier Pet Supply", cat:"tienda", lat:42.310067, lng:-83.351903, dir:"128 Merriman Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lucky Dog Tool", cat:"tienda", lat:42.331713, lng:-83.330904, dir:"6254 Middlebelt Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park (Wayne County Parks)", cat:"parque", lat:42.342766, lng:-83.355809, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gardner-kansas": {nombre:"Gardner", centro:[38.810925, -94.927296], tz:"America/Chicago", lugares:[
  {n:"Gardner Animal Hospital", cat:"vet", lat:38.810465, lng:-94.906757, dir:"945 East Santa Fe Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "garfield-charter-township": {nombre:"Garfield Charter Township", centro:[44.72271, -85.643542], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:44.72543, lng:-85.632361, dir:"2544 Crossing Circle", tel:"+1 231-947-4714", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Grand Traverse Veterinary Hospital", cat:"vet", lat:44.740642, lng:-85.632752, dir:"3805 Veterans Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:44.740101, lng:-85.644937, dir:"3675 North US-31 South", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"vet", lat:44.689906, lng:-85.656965, dir:"229 North US 31 South", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:44.723299, lng:-85.63727, dir:"3180 West South Airport Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cherryland Humane Society", cat:"refugio", lat:44.714164, lng:-85.612137, dir:"1750 Ahlberg Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:44.716202, lng:-85.632213, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Off Leash Dog Park", cat:"parque", lat:44.720882, lng:-85.609023, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "garnett": {nombre:"Garnett", centro:[38.280577, -95.241919], tz:"America/Chicago", lugares:[
  {n:"Countryside Veterinary Clinic", cat:"vet", lat:38.275451, lng:-95.252348, dir:"1002 South Heyes Street", tel:"+1 785 448 6454", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "garrettsville": {nombre:"Garrettsville", centro:[41.284222, -81.096486], tz:"America/New_York", lugares:[
  {n:"Garrettsville Animal Hospital", cat:"vet", lat:41.276726, lng:-81.089145, dir:"8331 Windham Street", tel:"+1-330-527-0722", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Groomer of G'Ville", cat:"peluqueria", lat:41.284517, lng:-81.097722, dir:"8116 Main Street", tel:"+1-440-834-1911", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Countryside Veterinary Service", cat:"vet", lat:41.273275, lng:-81.099168, dir:"10327 South Street", tel:"+1-330-527-4400", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Charles Abraham Dog Park", cat:"parque", lat:41.279376, lng:-81.094911, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gaylord-michigan": {nombre:"Gaylord", centro:[45.027513, -84.674752], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:45.029256, lng:-84.7218, dir:"2344 M-32 West", tel:"+1 989-217-3095", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Otsego County Animal Shelter", cat:"refugio", lat:45.042399, lng:-84.679074, dir:"256 Fairview Road", tel:"+1-989-705-7632", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Purr-fections", cat:"peluqueria", lat:45.011671, lng:-84.67685, dir:"1349 South Otsego Avenue", tel:"+1-989-448-8800", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "geneseo": {nombre:"Geneseo", centro:[41.452517, -90.154836], tz:"America/Chicago", lugares:[
  {n:"Geneseo Veterinary Service", cat:"vet", lat:41.436186, lng:-90.13708, dir:"1005 US 6", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Henry County Humane Society - Geneseo", cat:"refugio", lat:41.477947, lng:-90.150451, dir:"14606 Roos Hill Rd,", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "geneva-illinois": {nombre:"Geneva", centro:[41.887528, -88.305352], tz:"America/Chicago", lugares:[
  {n:"DePAW University Canine Campus", cat:"refugio", lat:41.88607, lng:-88.282838, dir:"100 South Glengarry Drive", tel:"+1-630-232-8663", horas:[6.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Wet Nose", cat:"tienda", lat:41.891098, lng:-88.343819, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.873324, lng:-88.342958, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "geneva-nebraska": {nombre:"Geneva", centro:[40.525754, -97.602767], tz:"America/Chicago", lugares:[
  {n:"Geneva Dog Park", cat:"parque", lat:40.53954, lng:-97.599849, horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "geneva-ohio": {nombre:"Geneva", centro:[41.805254, -80.947621], tz:"America/New_York", lugares:[
  {n:"Geneva Dog Park", cat:"parque", lat:41.802474, lng:-80.943089, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "genoa-charter-township": {nombre:"Genoa Charter Township", centro:[42.556751, -83.852892], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.58357, lng:-83.877673, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "genoa-illinois": {nombre:"Genoa", centro:[42.097248, -88.692869], tz:"America/Chicago", lugares:[
  {n:"Genoa Animal Hospital", cat:"vet", lat:42.089856, lng:-88.683209, dir:"703 Pearson Drive, Genoa, IL 60135", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "genoa-ohio": {nombre:"Genoa", centro:[41.518106, -83.359094], tz:"America/New_York", lugares:[
  {n:"Owen's Ark", cat:"vet", lat:41.537356, lng:-83.367264, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "georgetown-indiana": {nombre:"Georgetown", centro:[38.294549, -85.975447], tz:"America/New_York", lugares:[
  {n:"Hillside Animal Clinic", cat:"vet", lat:38.334285, lng:-85.896655, dir:"4745 Paoli Pike", tel:"+1 812-923-8825", horas:[8.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Edwardsville Animal Clinic", cat:"vet", lat:38.291, lng:-85.909836, dir:"1254 West Knable Road", tel:"+1-812-923-8479", horas:[8.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Pet Wants", cat:"tienda", lat:38.316878, lng:-85.899918, dir:"720 Highlander Point Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shear Puppy Love", cat:"peluqueria", lat:38.31689, lng:-85.899776, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "georgetown-ohio": {nombre:"Georgetown", centro:[38.864514, -83.904094], tz:"America/New_York", lugares:[
  {n:"Dr. Biehl Animal Hospital", cat:"vet", lat:38.865084, lng:-83.907956, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Georgetown Animal Hospital", cat:"vet", lat:38.888668, lng:-83.88864, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gering": {nombre:"Gering", centro:[41.822693, -103.66037], tz:"America/Denver", lugares:[
  {n:"The Pet Oasis", cat:"peluqueria", lat:41.822783, lng:-103.659113, dir:"902 N Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Monument Dog Park", cat:"parque", lat:41.829359, lng:-103.678478, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "germantown-ohio": {nombre:"Germantown", centro:[39.626168, -84.369388], tz:"America/New_York", lugares:[
  {n:"Germantown Animal Health Center", cat:"vet", lat:39.634854, lng:-84.35341, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gibraltar": {nombre:"Gibraltar", centro:[42.095043, -83.189648], tz:"America/New_York", lugares:[
  {n:"Gibraltar Veterinary Hospital", cat:"vet", lat:42.091504, lng:-83.203924, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gilberts": {nombre:"Gilberts", centro:[42.103437, -88.374515], tz:"America/Chicago", lugares:[
  {n:"Randall Oaks Barnyard Zoo", cat:"zoo", lat:42.115607, lng:-88.336566, dir:"1180 Randall Road", tel:"+1 847-551-4312", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "girard-ohio": {nombre:"Girard", centro:[41.154038, -80.700941], tz:"America/New_York", lugares:[
  {n:"MedVet Urgent Care (Animals)", cat:"vet", lat:41.142162, lng:-80.722699, horas:[12.0, 22.0], nota:"Dato de OpenStreetMap"}
 ]},
 "gladstone-missouri": {nombre:"Gladstone", centro:[39.221477, -94.571975], tz:"America/Chicago", lugares:[
  {n:"Gladstone Animal Shelter", cat:"refugio", lat:39.231719, lng:-94.532372, dir:"3960 Northeast 76th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies", cat:"tienda", lat:39.245898, lng:-94.583997, dir:"345 Northwest Barry Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gladstone Animal Clinic", cat:"vet", lat:39.238384, lng:-94.575296, dir:"7915 North Oak Trafficway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.25117, lng:-94.594941, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of Newmark", cat:"vet", lat:39.277844, lng:-94.572583, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gladwin": {nombre:"Gladwin", centro:[43.980855, -84.486401], tz:"America/New_York", lugares:[
  {n:"Gladwin Veterinary Clinic", cat:"vet", lat:43.981549, lng:-84.531881, dir:"4196 State Highway 61", tel:"+1-989-426-6566", horas:[8.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"North M-18 Veterinary Clinic", cat:"vet", lat:44.005807, lng:-84.485416, dir:"1110 North M 18", tel:"+1 989 426 8118", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Gladwin County Animal Shelter", cat:"refugio", lat:43.961744, lng:-84.475208, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "glen-carbon": {nombre:"Glen Carbon", centro:[38.748381, -89.983158], tz:"America/Chicago", lugares:[
  {n:"Miner Bark Park", cat:"parque", lat:38.751007, lng:-89.982375, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "glen-ellyn": {nombre:"Glen Ellyn", centro:[41.877529, -88.067012], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.858742, lng:-88.077675, dir:"299 Roosevelt Rd", tel:"+1-630-510-1111", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:41.847881, lng:-88.033651, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Willowbrook Wildlife Hospital", cat:"vet", lat:41.843072, lng:-88.06165, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spring Avenue Dog Park", cat:"parque", lat:41.866099, lng:-88.044782, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "glenaire": {nombre:"Glenaire", centro:[39.221392, -94.451341], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:39.241905, lng:-94.452637, dir:"233 South Steward Road", tel:"+1 816-439-4235", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.247898, lng:-94.459873, dir:"8500 North Evanston Avenue", tel:"+1 816-407-9195", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Liberty Animal Control & Shelter", cat:"refugio", lat:39.199441, lng:-94.437457, dir:"101 East Kansas Street", tel:"+1-816-439-4791", horas:[10.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Shoal Creek Animal Hospital", cat:"vet", lat:39.24903, lng:-94.465887, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "glenburn-north-dakota": {nombre:"Glenburn", centro:[48.513074, -101.220714], tz:"America/Chicago", lugares:[
  {n:"Minot AFB Veterinary Clinic", cat:"vet", lat:48.421461, lng:-101.328647, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "glencoe-minnesota": {nombre:"Glencoe", centro:[44.769189, -94.151567], tz:"America/Chicago", lugares:[
  {n:"Glencoe Veterinary Clinuc", cat:"vet", lat:44.772341, lng:-94.168462, dir:"605 13th Street West", tel:"+1-320-864-3414", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wildlife Sanctuary", cat:"zoo", lat:44.755452, lng:-94.163968, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "glendale-kansas": {nombre:"Glendale", centro:[38.898338, -97.875043], tz:"America/Chicago", lugares:[
  {n:"Rolling Hills Zoo", cat:"zoo", lat:38.852694, lng:-97.764207, dir:"625 North Hedville Road", tel:"+1 785 827 9488", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "glendale-wisconsin": {nombre:"Glendale", centro:[43.125024, -87.928592], tz:"America/Chicago", lugares:[
  {n:"BluePearl", cat:"vet", lat:43.119347, lng:-87.938537, dir:"2100 West Silver Spring Drive", tel:"+1-414-540-6710", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "glenview": {nombre:"Glenview", centro:[42.070066, -87.811404], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.082427, lng:-87.79707, dir:"1523 Waukegan Road", tel:"+1 847-904-1556", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.052293, lng:-87.834564, dir:"8287 West Golf Road", tel:"+1 847-996-0867", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Lakeshore K9", cat:"peluqueria", lat:42.072623, lng:-87.79957, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "glover-wisconsin": {nombre:"Glover", centro:[44.913023, -92.680478], tz:"America/Chicago", lugares:[
  {n:"Paws & Claws Pet Resort", cat:"refugio", lat:44.943734, lng:-92.691264, dir:"2300 Jack Breault Drive", tel:"+1-715-381-3033", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "goddard": {nombre:"Goddard", centro:[37.659736, -97.575326], tz:"America/Chicago", lugares:[
  {n:"Oakcrest Pet Hospital", cat:"vet", lat:37.693759, lng:-97.482576, tel:"+1 316-722-4828", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "godfrey": {nombre:"Godfrey", centro:[38.955603, -90.186776], tz:"America/Chicago", lugares:[
  {n:"Heinz Memorial Dog Park", cat:"parque", lat:38.945077, lng:-90.196718, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "goerke-s-corners": {nombre:"Goerke's Corners", centro:[43.0358, -88.167228], tz:"America/Chicago", lugares:[
  {n:"Westown Vet Clinic", cat:"vet", lat:43.029504, lng:-88.181595, dir:"21675 #200 Longview Drive", tel:"+1-262-798-2780", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waukesha Walk-in Vet Clinic", cat:"vet", lat:43.024982, lng:-88.199652, dir:"1710 Paramount Drive", tel:"+1-262-549-2000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:43.036994, lng:-88.143383, dir:"18610 West Bluemound Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet World", cat:"tienda", lat:43.03332, lng:-88.177026, dir:"2410 East Moreland Boulevard", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "golden-valley-minnesota": {nombre:"Golden Valley", centro:[44.986118, -93.378462], tz:"America/Chicago", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:44.984424, lng:-93.395224, dir:"9010 Olson Memorial Highway", tel:"+1-952-800-1300", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Humane Society Golden Valley", cat:"refugio", lat:44.98742, lng:-93.329369, dir:"845 Meadow Lane North", tel:"+19524357738", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "golf": {nombre:"Golf", centro:[42.057045, -87.789988], tz:"America/Chicago", lugares:[
  {n:"BondVet", cat:"vet", lat:42.055544, lng:-87.799046, dir:"5 Waukegan Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gonvick": {nombre:"Gonvick", centro:[47.737044, -95.513189], tz:"America/Chicago", lugares:[
  {n:"Cornerstone Veterinary Service", cat:"vet", lat:47.73526, lng:-95.513832, dir:"236 State Highway 92", tel:"+1-218-487-5360", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "good-hope-illinois": {nombre:"Good Hope", centro:[40.557818, -90.673465], tz:"America/Chicago", lugares:[
  {n:"Gossels Dog House", cat:"refugio", lat:40.592161, lng:-90.693839, horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "goodland-kansas": {nombre:"Goodland", centro:[39.350833, -101.710172], tz:"America/Chicago", lugares:[
  {n:"Prairie Dogs Dog Park", cat:"parque", lat:39.32675, lng:-101.726868, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "goodview": {nombre:"Goodview", centro:[44.061987, -91.69544], tz:"America/Chicago", lugares:[
  {n:"Winona Dog Park", cat:"parque", lat:44.077271, lng:-91.684057, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "goreville": {nombre:"Goreville", centro:[37.554495, -88.972293], tz:"America/Chicago", lugares:[
  {n:"Troop Veterinary Services", cat:"vet", lat:37.618016, lng:-88.977122, dir:"1500 IL 37", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "goshen-indiana": {nombre:"Goshen", centro:[41.585039, -85.834449], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:41.623989, lng:-85.906097, dir:"2823 County Home Road", tel:"+1 574-875-0696", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Maplecrest Animal Hospital", cat:"vet", lat:41.603319, lng:-85.831665, dir:"1214 North Main Street", tel:"+1-574-534-2441", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"White Veterinary Hospital", cat:"vet", lat:41.575227, lng:-85.813944, dir:"1014 Lincolnway East", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.621702, lng:-85.901152, dir:"4024 Elkhart Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greencroft Goshen Dog Park", cat:"parque", lat:41.563069, lng:-85.809778, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sprocket Dog Park", cat:"parque", lat:41.585562, lng:-85.827032, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "goshen-ohio": {nombre:"Goshen", centro:[40.443677, -81.409836], tz:"America/New_York", lugares:[
  {n:"Tuscarawas County Dog Warden", cat:"refugio", lat:40.476655, lng:-81.404853, dir:"1751 Tech Park Drive Northeast", tel:"+1-330-339-2616", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grafton-north-dakota": {nombre:"Grafton", centro:[48.412211, -97.410634], tz:"America/Chicago", lugares:[
  {n:"Happy Tails Bark Park", cat:"parque", lat:48.420969, lng:-97.425583, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grafton-wisconsin": {nombre:"Grafton", centro:[43.319522, -87.951784], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:43.322701, lng:-87.924381, dir:"1030 North Port Washington Road", tel:"+1 262-375-2853", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Muttland Meadows Dog Park", cat:"parque", lat:43.306267, lng:-87.957508, dir:"789 Green Bay Road", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "grain-valley": {nombre:"Grain Valley", centro:[39.018765, -94.197645], tz:"America/Chicago", lugares:[
  {n:"Exclusively Dogs KC", cat:"peluqueria", lat:39.023159, lng:-94.195909, dir:"1060 Northeast McQuerry Road", tel:"+1-816-721-5486", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Blue Springs Dog Park", cat:"parque", lat:39.028927, lng:-94.236054, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grand-blanc": {nombre:"Grand Blanc", centro:[42.927528, -83.629952], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.93731, lng:-83.64516, dir:"6260 Saginaw Road", tel:"+1 810-953-0019", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.927649, lng:-83.628658, dir:"11525 South Saginaw Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Briarwood Veterinary Hospital", cat:"vet", lat:42.912636, lng:-83.608357, dir:"8213 South Saginaw Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Magoo's Pet Outlet", cat:"tienda", lat:42.944582, lng:-83.693363, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grand Blanc Veterinary Hospital", cat:"vet", lat:42.942053, lng:-83.64698, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Creasey Park Dog Park", cat:"parque", lat:42.915921, lng:-83.672559, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grand-forks": {nombre:"Grand Forks", centro:[47.92521, -97.030632], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:47.895868, lng:-97.067663, dir:"2450 South Columbia Road", tel:"+1 701-765-3120", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:47.888965, lng:-97.070132, dir:"2901 32nd Avenue South", tel:"+1 701-746-1996", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Circle Of Friends Humaine Society", cat:"refugio", lat:47.96544, lng:-97.078915, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grand-island": {nombre:"Grand Island", centro:[40.924271, -98.338685], tz:"America/Chicago", lugares:[
  {n:"Mitchell's Anchor Serum Company", cat:"vet", lat:40.927909, lng:-98.344027, dir:"224 West 4th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Island", cat:"parque", lat:40.889744, lng:-98.352178, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grand-ledge": {nombre:"Grand Ledge", centro:[42.75244, -84.746357], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.736692, lng:-84.673305, dir:"305 Marketplace Boulevard", tel:"+1 517-622-1542", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "grand-marais-minnesota": {nombre:"Grand Marais", centro:[47.750467, -90.334675], tz:"America/Chicago", lugares:[
  {n:"Lake County Veterinary Clinic", cat:"vet", lat:47.749125, lng:-90.353764, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grand-rapids": {nombre:"Grand Rapids", centro:[42.963242, -85.667864], tz:"America/New_York", lugares:[
  {n:"Heaven at Home", cat:"vet", lat:42.990827, lng:-85.670401, dir:"Monroe Avenue Northwest", tel:"+1-616-498-1316", horas:[8.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"VCA Northeast Animal Hospital", cat:"vet", lat:42.970449, lng:-85.631409, dir:"1527 Michigan Street Northeast", tel:"+1 616-451-2694", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Eastown Veterinary Clinic", cat:"vet", lat:42.957479, lng:-85.635572, dir:"1350 Lake Drive Southeast", tel:"+1-616-451-1810", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Plymouth Road Animal Clinic", cat:"vet", lat:42.983617, lng:-85.623667, dir:"1180 Plymouth Avenue Northeast", tel:"+1 616-456-9212", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:43.021882, lng:-85.691774, dir:"3165 Alpine Avenue Northwest", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Downtown Westside Dog Park", cat:"parque", lat:42.968785, lng:-85.680325, dir:"307 Summer Avenue Northwest", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Feline Wellness Center PLLC", cat:"vet", lat:42.991097, lng:-85.645307, dir:"1545 Diamond Avenue Northeast", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovet", cat:"vet", lat:43.027016, lng:-85.688632, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"John Ball Zoo", cat:"zoo", lat:42.963725, lng:-85.70468, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Covell Dog Park", cat:"parque", lat:42.973059, lng:-85.715701, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hillcrest Dog Park", cat:"parque", lat:42.967489, lng:-85.637468, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kent County Animal Shelter", cat:"refugio", lat:42.975769, lng:-85.635431, horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Richmond Hills Dog Park", cat:"parque", lat:42.999119, lng:-85.703443, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grandview-heights": {nombre:"Grandview Heights", centro:[39.981855, -83.045036], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:39.992231, lng:-83.027396, dir:"1647 Olentangy River Road", tel:"+1 614-298-8014", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:39.988987, lng:-83.045694, dir:"1464 West Fifth Avenue", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"OSU Veterinary Medical Center", cat:"vet", lat:40.000896, lng:-83.027927, dir:"601 Vernon L Tharp Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Health & Harmony Animal Hospital", cat:"vet", lat:39.979526, lng:-83.034423, dir:"1117 West First Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Frank Stanton Veterinary Spectrum of Care Clinic", cat:"vet", lat:40.001057, lng:-83.026158, dir:"655 Vernon L Tharp Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wendy's Pampered Pets", cat:"peluqueria", lat:39.99137, lng:-83.043354, dir:"1361 King Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Medical Center", cat:"vet", lat:40.000917, lng:-83.027526, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Purrfect Care", cat:"vet", lat:39.991297, lng:-83.040849, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Our Grooming Spot", cat:"peluqueria", lat:39.993535, lng:-83.041557, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mona's Pet Salon", cat:"peluqueria", lat:39.98573, lng:-83.045219, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Purrfect Care Feline Medical Center", cat:"vet", lat:39.991173, lng:-83.040886, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grandview-missouri": {nombre:"Grandview", centro:[38.889848, -94.531382], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.970612, lng:-94.606098, dir:"8600 Ward Parkway", tel:"+1 816-363-3306", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.904894, lng:-94.526696, dir:"12124 15th Street", tel:"+1 816-423-4955", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Red Bridge Animal Clinic", cat:"vet", lat:38.926262, lng:-94.584843, tel:"+1-816-942-3201", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.882159, lng:-94.607107, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grandville": {nombre:"Grandville", centro:[42.909598, -85.763096], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.880851, lng:-85.77644, dir:"4245 Canal Avenue Southwest", tel:"+1 616-406-3344", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Puppy Dog Nursery", cat:"tienda", lat:42.882993, lng:-85.758041, dir:"3819 Rivertown Parkway Southwest", tel:"+1 616-755-3487", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"The Paw Place", cat:"refugio", lat:42.91105, lng:-85.757842, dir:"3782 Chicago Drive Southwest", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof & Wags", cat:"peluqueria", lat:42.885912, lng:-85.773389, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.875874, lng:-85.76128, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Veterinary Clinic", cat:"vet", lat:42.91395, lng:-85.755376, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "granger": {nombre:"Granger", centro:[41.753382, -86.110838], tz:"America/New_York", lugares:[
  {n:"Paw Mart", cat:"tienda", lat:41.751487, lng:-86.119211, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kryder & Harr Veterinary Clinic", cat:"vet", lat:41.749373, lng:-86.129392, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "granton": {nombre:"Granton", centro:[44.587252, -90.462464], tz:"America/Chicago", lugares:[
  {n:"Badger Animal Clinic", cat:"vet", lat:44.588027, lng:-90.462604, dir:"115 Maple Street", tel:"+1 7152387686", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "grantwood-village": {nombre:"Grantwood Village", centro:[38.553179, -90.347487], tz:"America/Chicago", lugares:[
  {n:"Grant's Farm", cat:"zoo", lat:38.549721, lng:-90.35697, dir:"10501 Gravois Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tropical World Pets", cat:"tienda", lat:38.565221, lng:-90.353078, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Goat Feeding", cat:"zoo", lat:38.549055, lng:-90.358562, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grawn": {nombre:"Grawn", centro:[44.662493, -85.693661], tz:"America/New_York", lugares:[
  {n:"Shaving Grace Grooming", cat:"peluqueria", lat:44.675842, lng:-85.655437, dir:"863 US 31 South", tel:"+12319432225", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rainbow Valley Family Farms", cat:"zoo", lat:44.695249, lng:-85.697759, dir:"6040 Culver Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gray-summit": {nombre:"Gray Summit", centro:[38.490178, -90.816179], tz:"America/Chicago", lugares:[
  {n:"All Critter Care", cat:"tienda", lat:38.488287, lng:-90.807972, dir:"2549 Hogan Road", tel:"+1 314-631-6738", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dirk's Fund", cat:"refugio", lat:38.485502, lng:-90.779211, dir:"526 Indian Warpath Drive", tel:"+1 314-966-3326", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grayslake": {nombre:"Grayslake", centro:[42.343352, -88.041219], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.337412, lng:-88.027508, dir:"804 East Belvidere Road", tel:"+18477093134", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Village Veterinary Clinic", cat:"vet", lat:42.337682, lng:-88.04656, dir:"320 Neville Drive", tel:"+18472235593", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "great-bend": {nombre:"Great Bend", centro:[38.362506, -98.780409], tz:"America/Chicago", lugares:[
  {n:"Animal Medical Center", cat:"vet", lat:38.357805, lng:-98.792533, dir:"622 McKinley Street", tel:"+1-620-792-1265", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Golden Belt Humane Society", cat:"refugio", lat:38.340268, lng:-98.765961, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Great Bend Zoo", cat:"zoo", lat:38.373086, lng:-98.766393, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Great Bend Dog Park", cat:"parque", lat:38.371467, lng:-98.798353, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "green-bay": {nombre:"Green Bay", centro:[44.512638, -88.012579], tz:"America/Chicago", lugares:[
  {n:"Safe Haven Pet Sanctuary", cat:"refugio", lat:44.517685, lng:-88.021314, dir:"151 North Broadway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Royalty Pet Foods", cat:"peluqueria", lat:44.495457, lng:-87.978778, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "green-lake-township": {nombre:"Green Lake Township", centro:[44.644035, -85.757054], tz:"America/New_York", lugares:[
  {n:"Northwood Animal Hospital", cat:"vet", lat:44.659133, lng:-85.736701, dir:"7966 US-31", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "green-ohio": {nombre:"Green", centro:[40.946808, -81.467063], tz:"America/New_York", lugares:[
  {n:"Pet Guards", cat:"vet", lat:40.948161, lng:-81.463633, dir:"4195 Massillon Road", tel:"+1-330-810-1971", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Green Animal Hospital", cat:"vet", lat:40.961081, lng:-81.469668, dir:"1620 Corporate Woods Circle", tel:"+1 330 896 4040", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dick Goddard Dog Park", cat:"parque", lat:40.943062, lng:-81.438532, dir:"2520 Wise Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Lovers", cat:"tienda", lat:40.9604, lng:-81.466356, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "green-park": {nombre:"Green Park", centro:[38.523664, -90.33845], tz:"America/Chicago", lugares:[
  {n:"St Johns Community Dog Park", cat:"parque", lat:38.514135, lng:-90.335844, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "green-valley-kansas": {nombre:"Green Valley", centro:[39.204825, -96.510277], tz:"America/Chicago", lugares:[
  {n:"Konza Vetinary Clinic", cat:"vet", lat:39.193812, lng:-96.527553, tel:"+1 785 776 9111", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tail Wagger Inn", cat:"peluqueria", lat:39.195715, lng:-96.515953, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greenbush-minnesota": {nombre:"Greenbush", centro:[48.700122, -96.181298], tz:"America/Chicago", lugares:[
  {n:"Greenbush Veterinary Clinic", cat:"vet", lat:48.69128, lng:-96.190231, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greencastle": {nombre:"Greencastle", centro:[39.64449, -86.864732], tz:"America/Chicago", lugares:[
  {n:"Greencastle Dog Park", cat:"parque", lat:39.639145, lng:-86.804358, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greendale": {nombre:"Greendale", centro:[39.112557, -84.864118], tz:"America/New_York", lugares:[
  {n:"South Paws", cat:"refugio", lat:39.127851, lng:-84.857531, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greendale-wisconsin": {nombre:"Greendale", centro:[42.940608, -87.995993], tz:"America/Chicago", lugares:[
  {n:"Greendale Village Vet", cat:"vet", lat:42.93152, lng:-87.99433, dir:"6210 Industrial Court", tel:"+14144211800", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Healty Paws", cat:"vet", lat:42.957268, lng:-88.006647, dir:"4805 South 74th Street", tel:"+1-414-323-7755", horas:[8.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:42.954808, lng:-88.006999, dir:"4950 South 76th Street", tel:"+1 414-325-6564", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:42.9535, lng:-88.008881, dir:"5005 South 76th Street", tel:"+1-414-246-4380", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.952499, lng:-88.007043, dir:"5005 South 74th Street", tel:"+1 414-282-7586", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Lulu's Dog Pawlour", cat:"peluqueria", lat:42.914884, lng:-88.010013, dir:"7129 South 76th Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greene": {nombre:"Greene", centro:[42.896221, -92.803019], tz:"America/Chicago", lugares:[
  {n:"Greene Veterinary Clinic", cat:"vet", lat:42.897154, lng:-92.814752, tel:"+1 641 823-5852", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greenfield-indiana": {nombre:"Greenfield", centro:[39.78551, -85.768198], tz:"America/New_York", lugares:[
  {n:"Dr. O. R. Ferris, DVM", cat:"vet", lat:39.827379, lng:-85.728234, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.817052, lng:-85.766136, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greenfield-ohio": {nombre:"Greenfield", centro:[39.352008, -83.382693], tz:"America/New_York", lugares:[
  {n:"Greenfield Veterinary Clinic", cat:"vet", lat:39.353771, lng:-83.379313, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paint Creek Veterinary Clinic", cat:"vet", lat:39.350572, lng:-83.382919, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greenfield-wisconsin": {nombre:"Greenfield", centro:[42.95969, -87.98132], tz:"America/Chicago", lugares:[
  {n:"Pretty Pooches", cat:"peluqueria", lat:42.97514, lng:-87.988676, dir:"6015 West Forest Home Avenue", tel:"+1-414-328-3647", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"It's a Dog's Life", cat:"refugio", lat:42.962465, lng:-88.009124, dir:"4501 South 76th Street", tel:"+1-414-321-2364", horas:[5.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.96234, lng:-88.009101, dir:"4505 South 76th Street", tel:"+1-414-545-9790", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Greenfield Veterinary Clinic", cat:"vet", lat:42.93607, lng:-87.949748, tel:"+1-414-282-5230", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Layton Animal Hospital", cat:"vet", lat:42.959809, lng:-87.928098, tel:"+1-414-281-8270", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alta View Veterinary Clinic", cat:"vet", lat:42.966292, lng:-88.005382, dir:"7330 West Forest Home Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet World Warehouse Outlet", cat:"tienda", lat:42.946151, lng:-87.9501, dir:"5415 South 27th Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greensburg": {nombre:"Greensburg", centro:[39.337272, -85.483581], tz:"America/New_York", lugares:[
  {n:"Tree City Bark Park (Large Dog)", cat:"parque", lat:39.337813, lng:-85.46532, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tree City Bark Park (Small Dog)", cat:"parque", lat:39.337758, lng:-85.464865, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greenville-wisconsin": {nombre:"Greenville", centro:[44.300761, -88.536979], tz:"America/Chicago", lugares:[
  {n:"Heritage Animal Hospital LTD", cat:"vet", lat:44.288407, lng:-88.512712, dir:"6415 West Greenville Drive", tel:"+1-920-757-0407", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greenville Zoo (Closed)", cat:"zoo", lat:44.299301, lng:-88.542221, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greenwood-indiana": {nombre:"Greenwood", centro:[39.613699, -86.109543], tz:"America/New_York", lugares:[
  {n:"The Pet stylist LLC", cat:"tienda", lat:39.640566, lng:-86.108211, dir:"8640 Pleasant Creek Court", tel:"+1-317-444-9403", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic Whiteland Greenwood", cat:"vet", lat:39.606073, lng:-86.106033, dir:"707 South Madison Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetPeople", cat:"tienda", lat:39.604431, lng:-86.157889, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Meridian Veterinary Clinic", cat:"vet", lat:39.62471, lng:-86.157929, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Smock Dog Park", cat:"parque", lat:39.637872, lng:-86.100905, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greilickville": {nombre:"Greilickville", centro:[44.783057, -85.638689], tz:"America/New_York", lugares:[
  {n:"VCA Cherry Bend Animal Hospital", cat:"vet", lat:44.793802, lng:-85.646244, dir:"10387 East Cherry Bend Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Omnivet", cat:"vet", lat:44.762646, lng:-85.652138, dir:"3960 West Royal Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aunt Tara's Creative Canine Solutions", cat:"refugio", lat:44.775816, lng:-85.696735, dir:"7945 East Traverse Highway", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gretna-nebraska": {nombre:"Gretna", centro:[41.146927, -96.239005], tz:"America/Chicago", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:41.189634, lng:-96.211533, dir:"18920 Edna Street", tel:"+1-402-205-0074", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Millard West Clinic", cat:"vet", lat:41.206557, lng:-96.195887, dir:"17935 Welch Plaza", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"tienda", lat:41.099131, lng:-96.251416, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw Spa", cat:"parque", lat:41.190231, lng:-96.179466, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park", cat:"parque", lat:41.121582, lng:-96.240308, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "griffith": {nombre:"Griffith", centro:[41.534507, -87.42553], tz:"America/Chicago", lugares:[
  {n:"Pawesome Pets", cat:"peluqueria", lat:41.537739, lng:-87.434464, dir:"3903 45th Street", tel:"+1-219-513-9891", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "grimes-iowa": {nombre:"Grimes", centro:[41.688321, -93.791057], tz:"America/Chicago", lugares:[
  {n:"Grimes Plaza Vet", cat:"vet", lat:41.687751, lng:-93.781323, dir:"200 Southeast Gateway Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogwoods Lodge", cat:"tienda", lat:41.664339, lng:-93.776355, dir:"2960 Southeast Grimes Boulevard", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grinnell": {nombre:"Grinnell", centro:[41.743024, -92.723964], tz:"America/Chicago", lugares:[
  {n:"Hair of the Dog", cat:"peluqueria", lat:41.743364, lng:-92.725425, dir:"805 4th Avenue", tel:"+1-641-260-6375", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"All Pets Veterinary Hospital", cat:"vet", lat:41.739449, lng:-92.727755, dir:"611 West Street", tel:"+1-641-236-6869", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Bailey's Funny Farm", cat:"peluqueria", lat:41.736246, lng:-92.727008, dir:"404 West Street", tel:"+1-641-260-8218", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grosse-ile-township": {nombre:"Grosse Ile Township", centro:[42.12875, -83.158602], tz:"America/New_York", lugares:[
  {n:"Grosse Ile Dog Park", cat:"parque", lat:42.121535, lng:-83.146823, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grosse-pointe-farms": {nombre:"Grosse Pointe Farms", centro:[42.409204, -82.891859], tz:"America/New_York", lugares:[
  {n:"Grosse Pointe Farms Dog Park", cat:"parque", lat:42.415081, lng:-82.909043, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grosse-pointe-park": {nombre:"Grosse Pointe Park", centro:[42.38169, -82.931365], tz:"America/New_York", lugares:[
  {n:"Belle Isle Nature Center", cat:"zoo", lat:42.346869, lng:-82.963737, dir:"176 Lakeside Drive", tel:"+1-313-852-4056", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "groton-south-dakota": {nombre:"Groton", centro:[45.447313, -98.098779], tz:"America/Chicago", lugares:[
  {n:"Groton Vet Clinic", cat:"vet", lat:45.460867, lng:-98.102649, dir:"1503 North Broadway", tel:"+1-605-397-8145", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grove-city-ohio": {nombre:"Grove City", centro:[39.881452, -83.092964], tz:"America/New_York", lugares:[
  {n:"Mutts & Co.", cat:"tienda", lat:39.877729, lng:-83.05968, dir:"4170 McDowell Rd", tel:"+1 614-512-5107", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.877257, lng:-83.044804, dir:"1743 Stringtown Road", tel:"+1 614-539-8773", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Concord Chapel Animal Hospital", cat:"vet", lat:39.838607, lng:-83.07336, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:39.877428, lng:-83.044807, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Total Veterinary Care", cat:"vet", lat:39.840126, lng:-83.080309, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:39.840024, lng:-83.079058, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "groveland-illinois": {nombre:"Groveland", centro:[40.592539, -89.534542], tz:"America/Chicago", lugares:[
  {n:"Rescued Heart Animal Hospital", cat:"vet", lat:40.568634, lng:-89.576818, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "groveport": {nombre:"Groveport", centro:[39.852245, -82.886864], tz:"America/New_York", lugares:[
  {n:"Groveport-Canal Animal Hospital", cat:"vet", lat:39.851129, lng:-82.882599, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park", cat:"parque", lat:39.844155, lng:-82.850512, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park", cat:"parque", lat:39.842954, lng:-82.850443, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Groveport Animal Clinic", cat:"vet", lat:39.855867, lng:-82.896423, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "guthrie": {nombre:"Guthrie", centro:[38.976716, -86.509161], tz:"America/Chicago", lugares:[
  {n:"Hair of the Dog", cat:"tienda", lat:38.966566, lng:-86.548394, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hales-corners": {nombre:"Hales Corners", centro:[42.937515, -88.048698], tz:"America/Chicago", lugares:[
  {n:"Aquatics Unlimited", cat:"tienda", lat:42.979686, lng:-88.046874, dir:"3550 South 108th Street", tel:"+1-414-543-2552", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crawford Animal Hospital", cat:"vet", lat:42.960946, lng:-88.048343, dir:"4607 South 108th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Tails Pet Supplies", cat:"tienda", lat:42.94189, lng:-88.047343, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hamel": {nombre:"Hamel", centro:[38.888936, -89.845375], tz:"America/Chicago", lugares:[
  {n:"Happy Hooves Equine Rescue", cat:"refugio", lat:38.895737, lng:-89.935705, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hamilton-missouri": {nombre:"Hamilton", centro:[39.743618, -93.998274], tz:"America/Chicago", lugares:[
  {n:"Allen Veterinary Services", cat:"vet", lat:39.736756, lng:-94.000314, tel:"+18335838387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hamilton Veterinary Clinic", cat:"vet", lat:39.75297, lng:-93.996351, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hamilton-ohio": {nombre:"Hamilton", centro:[39.399507, -84.561343], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.386847, lng:-84.499767, dir:"3439 Princeton Road", tel:"+1 513-863-6363", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Wants", cat:"tienda", lat:39.402908, lng:-84.568058, dir:"130 Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:39.386793, lng:-84.499985, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Holly's Dog Park", cat:"parque", lat:39.39363, lng:-84.515249, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.425049, lng:-84.593015, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hampshire": {nombre:"Hampshire", centro:[42.097803, -88.530364], tz:"America/Chicago", lugares:[
  {n:"Dr. Tom Getzelman Dog Park", cat:"parque", lat:42.095879, lng:-88.500035, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hamtramck": {nombre:"Hamtramck", centro:[42.392815, -83.049644], tz:"America/New_York", lugares:[
  {n:"Michigan Humane Society", cat:"refugio", lat:42.362637, lng:-83.08517, dir:"6175 Trumbull Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"New Center Dog Park", cat:"parque", lat:42.369632, lng:-83.080078, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hancock-michigan": {nombre:"Hancock", centro:[47.126871, -88.580956], tz:"America/Chicago", lugares:[
  {n:"Northland Veterinary Clinic", cat:"vet", lat:47.131622, lng:-88.609179, dir:"1111 Hecla Street", tel:"+1-906-482-3400", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hancock Dog Park", cat:"parque", lat:47.137507, lng:-88.609524, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hannibal": {nombre:"Hannibal", centro:[39.70825, -91.358741], tz:"America/Chicago", lugares:[
  {n:"Dempsey Dog Park", cat:"parque", lat:39.703069, lng:-91.358061, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hanover-park": {nombre:"Hanover Park", centro:[41.999472, -88.145073], tz:"America/Chicago", lugares:[
  {n:"Animal Hospital of Streamwood", cat:"vet", lat:42.009505, lng:-88.160465, dir:"904 East Irving Park Road", tel:"+1 630 837 4400", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hanover Park Animal Care Center", cat:"vet", lat:41.987753, lng:-88.150395, dir:"1920 Ontarioville Road", tel:"+1 630 830 6620", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"4 Paws Dog Park", cat:"parque", lat:41.988465, lng:-88.115507, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harbor-view": {nombre:"Harbor View", centro:[41.693381, -83.444377], tz:"America/New_York", lugares:[
  {n:"Shoreland Animal Hospital", cat:"vet", lat:41.708967, lng:-83.499064, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "haring-charter-township": {nombre:"Haring Charter Township", centro:[44.298696, -85.395227], tz:"America/New_York", lugares:[
  {n:"Fur Pup's Sake", cat:"peluqueria", lat:44.288686, lng:-85.406149, dir:"3495 South Mackinaw Trail", tel:"+1-231-878-1404", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:44.283113, lng:-85.408888, dir:"3860 South Mackinaw Trail", tel:"+1 231-253-0160", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "harmony-minnesota": {nombre:"Harmony", centro:[43.555214, -92.005307], tz:"America/Chicago", lugares:[
  {n:"Harmony Veterinary Clinic", cat:"vet", lat:43.565367, lng:-92.013252, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harmony-ohio": {nombre:"Harmony", centro:[39.922838, -83.697147], tz:"America/New_York", lugares:[
  {n:"Plattsburg Equine Center", cat:"refugio", lat:39.908472, lng:-83.667591, dir:"7372 Plattsburg Road", tel:"+1-937-926-3355", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Valu", cat:"tienda", lat:39.921381, lng:-83.748707, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harrisburg-illinois": {nombre:"Harrisburg", centro:[37.7385, -88.540521], tz:"America/Chicago", lugares:[
  {n:"Central Hospital for Animals", cat:"vet", lat:37.731373, lng:-88.538479, dir:"204 East Sloan Street", tel:"+1 618 253 6266", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Harrisburg Veterinary Clinic", cat:"vet", lat:37.747114, lng:-88.540667, dir:"1101 North Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Saline County Animal Control", cat:"refugio", lat:37.717446, lng:-88.551529, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pampered Paws", cat:"peluqueria", lat:37.739366, lng:-88.533539, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harrisburg-south-dakota": {nombre:"Harrisburg", centro:[43.431347, -96.698523], tz:"America/Chicago", lugares:[
  {n:"The Dapper Dog Pet Care Services", cat:"peluqueria", lat:43.431047, lng:-96.715122, dir:"659 West Willow Street", tel:"+1-605-214-5597", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Subaru Dog Park", cat:"parque", lat:43.47681, lng:-96.728722, dir:"7601 South Minnesota Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Splash Bark by SDK", cat:"parque", lat:43.438148, lng:-96.726279, dir:"27246 SD Highway 115", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dakota Large Animal Clinic", cat:"vet", lat:43.446466, lng:-96.708265, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harrison-illinois": {nombre:"Harrison", centro:[42.42704, -89.192711], tz:"America/Chicago", lugares:[
  {n:"Four Lakes Dog Training Area", cat:"parque", lat:42.353784, lng:-89.236414, dir:"10180 Trask Bridge Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harrison-michigan": {nombre:"Harrison", centro:[44.019219, -84.799787], tz:"America/New_York", lugares:[
  {n:"Bark N Bathe", cat:"peluqueria", lat:44.019421, lng:-84.800493, dir:"134 East Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clare County Animal Shelter", cat:"refugio", lat:44.046861, lng:-84.816812, dir:"4040 Hazel Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harrison-wisconsin-2": {nombre:"Harrison", centro:[44.233585, -88.328297], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:44.241298, lng:-88.347634, dir:"3829 East Calumet", tel:"+1 920-997-1543", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "harrisonville": {nombre:"Harrisonville", centro:[38.655124, -94.347107], tz:"America/Chicago", lugares:[
  {n:"Kling Veterinary", cat:"vet", lat:38.663188, lng:-94.359886, dir:"1304 Locust Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park (Large Dogs)", cat:"parque", lat:38.663051, lng:-94.339861, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park (Small Dogs)", cat:"parque", lat:38.662743, lng:-94.339783, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harrod": {nombre:"Harrod", centro:[40.707804, -83.921056], tz:"America/New_York", lugares:[
  {n:"Harrod Veterinary Clinic", cat:"vet", lat:40.715605, lng:-83.92454, dir:"1815 South Napoleon Road", tel:"+1 419-648-2901", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hartford-south-dakota": {nombre:"Hartford", centro:[43.622594, -96.945879], tz:"America/Chicago", lugares:[
  {n:"Hartford Veterinary Clinic", cat:"vet", lat:43.631534, lng:-96.94774, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hartford-wisconsin": {nombre:"Hartford", centro:[43.317744, -88.378851], tz:"America/Chicago", lugares:[
  {n:"Hartford Animal Clinic", cat:"vet", lat:43.300131, lng:-88.377445, dir:"1191 S Grand Ave", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dynamic Pet Palace", cat:"tienda", lat:43.309593, lng:-88.373359, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hartland-wisconsin": {nombre:"Hartland", centro:[43.105008, -88.34204], tz:"America/Chicago", lugares:[
  {n:"Silver Leash", cat:"peluqueria", lat:43.104726, lng:-88.346366, dir:"128 East Capitol Drive", tel:"+1 262 367 5955", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hartley": {nombre:"Hartley", centro:[43.180022, -95.476963], tz:"America/Chicago", lugares:[
  {n:"Animal Medical Centers PC", cat:"vet", lat:43.185152, lng:-95.492087, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hartsville": {nombre:"Hartsville", centro:[39.268105, -85.69844], tz:"America/New_York", lugares:[
  {n:"Utopia Wildlife Rehabilitators", cat:"refugio", lat:39.23515, lng:-85.724924, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harvard": {nombre:"Harvard", centro:[42.422244, -88.613713], tz:"America/Chicago", lugares:[
  {n:"Harvard Veterinary Clinic", cat:"vet", lat:42.414501, lng:-88.62492, dir:"712 West Brink Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harvey-michigan": {nombre:"Harvey", centro:[46.494657, -87.354307], tz:"America/Chicago", lugares:[
  {n:"Bayshore Veterinary Hospital", cat:"vet", lat:46.499614, lng:-87.360209, tel:"+1 906-249-5667", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harwood-heights": {nombre:"Harwood Heights", centro:[41.966961, -87.807673], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.956825, lng:-87.803517, dir:"4161 North Harlem Avenue", tel:"+1 708-457-8603", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pampered Paws Grooming", cat:"peluqueria", lat:41.993235, lng:-87.800246, dir:"6135 North Northwest Highway", tel:"+1 773 775 7297", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.955347, lng:-87.74416, dir:"4640 West Irving Park Road", tel:"+1 773-272-9119", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pink Poodle Dog Grooming", cat:"tienda", lat:41.967926, lng:-87.765499, dir:"5510 West Lawrence Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Re-tails", cat:"tienda", lat:41.967926, lng:-87.765613, dir:"5514 West Lawrence Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.975816, lng:-87.808138, dir:"7220 West Foster Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Out Loud", cat:"peluqueria", lat:41.953568, lng:-87.75853, dir:"5232 West Irving Park Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Avondale Animal Hospital", cat:"vet", lat:41.993212, lng:-87.800875, dir:"6146 North Northwest Highway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Hospital of Norridge", cat:"vet", lat:41.959393, lng:-87.806903, dir:"4321 North Harlem Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Norwood Park Dog Park", cat:"parque", lat:41.987906, lng:-87.793528, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "haskins": {nombre:"Haskins", centro:[41.464775, -83.706047], tz:"America/New_York", lugares:[
  {n:"Midway Animal Hospital", cat:"vet", lat:41.440897, lng:-83.65166, dir:"North Dixie Highway", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "haslett": {nombre:"Haslett", centro:[42.74682, -84.401136], tz:"America/New_York", lugares:[
  {n:"Haslett Animal Hospital", cat:"vet", lat:42.748287, lng:-84.407954, dir:"5686 Marsh Road", tel:"+1 517 339 9555", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "hastings-michigan": {nombre:"Hastings", centro:[42.648451, -85.289524], tz:"America/New_York", lugares:[
  {n:"Bull Creek Veterinary", cat:"vet", lat:42.644561, lng:-85.314571, dir:"1420 Green Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hastings Dog Park", cat:"parque", lat:42.650881, lng:-85.299131, dir:"West Apple Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barry Country Animal Shelter", cat:"refugio", lat:42.653451, lng:-85.303888, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Seidl Veterinary Hospital", cat:"vet", lat:42.645262, lng:-85.332949, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Broadway Veterinary Clinic", cat:"vet", lat:42.685148, lng:-85.291556, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hastings-minnesota": {nombre:"Hastings", centro:[44.742693, -92.85187], tz:"America/Chicago", lugares:[
  {n:"River Bend Pet Clinic", cat:"refugio", lat:44.738546, lng:-92.871893, dir:"1104 Frontage Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "haubstadt": {nombre:"Haubstadt", centro:[38.205044, -87.574188], tz:"America/Chicago", lugares:[
  {n:"Bed Bath & Biscuit Pet Resort", cat:"peluqueria", lat:38.204969, lng:-87.574102, dir:"5330 E 1250 S", tel:"+1 812-983-3900", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "hawley": {nombre:"Hawley", centro:[46.880793, -96.316731], tz:"America/Chicago", lugares:[
  {n:"Ebirdseed.Com", cat:"tienda", lat:46.880892, lng:-96.317448, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hawthorn-woods": {nombre:"Hawthorn Woods", centro:[42.216969, -88.049521], tz:"America/Chicago", lugares:[
  {n:"All Creatures Animal Hospital", cat:"vet", lat:42.197885, lng:-88.063799, dir:"1210 Main Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hays": {nombre:"Hays", centro:[38.870998, -99.331153], tz:"America/Chicago", lugares:[
  {n:"Hays Veterinary Hospital", cat:"vet", lat:38.864055, lng:-99.316749, dir:"1016 East 8th Street", tel:"+1-785-625-2719", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Puppy Loves Grooming", cat:"peluqueria", lat:38.868167, lng:-99.325323, dir:"429 East 8th Street", tel:"+1-785-628-1789", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barkley Suites Pet Hotel/Daycare", cat:"refugio", lat:38.879109, lng:-99.317341, dir:"2202 Vine Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Creek Veterinary Services", cat:"vet", lat:38.888585, lng:-99.35511, dir:"2807 Highway 183 Alternate", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSense", cat:"tienda", lat:38.882532, lng:-99.316845, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hays Dog Park", cat:"parque", lat:38.881435, lng:-99.357452, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hayward-wisconsin": {nombre:"Hayward", centro:[46.012968, -91.484873], tz:"America/Chicago", lugares:[
  {n:"Barking Bubbles Salon", cat:"peluqueria", lat:46.015468, lng:-91.486946, dir:"15881 West 4th Street", tel:"+1 715-504-1726", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dr Abby Veterinary Services", cat:"vet", lat:46.01402, lng:-91.46924, dir:"15535 State Highway 77", tel:"+1-715-415-7063", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Family and farm veterinary clinic", cat:"vet", lat:46.041362, lng:-91.310317, dir:"12370 West Twin Lake Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hayward Animal Hospital Inc", cat:"vet", lat:46.000664, lng:-91.45356, dir:"15226 County Road B", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Leading Edge Veterinarian Services", cat:"vet", lat:45.998334, lng:-91.623292, dir:"10120 County Highway M", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wilderness Walk", cat:"zoo", lat:45.979622, lng:-91.498975, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hazel-park": {nombre:"Hazel Park", centro:[42.462014, -83.103569], tz:"America/New_York", lugares:[
  {n:"Canine To Five Ferndale", cat:"refugio", lat:42.461313, lng:-83.118579, dir:"1221 East 9 Mile Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "heath-ohio": {nombre:"Heath", centro:[40.022842, -82.444599], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:40.036727, lng:-82.432663, dir:"597 Hebron Road", tel:"+1 740-522-1602", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "hebron-indiana": {nombre:"Hebron", centro:[41.318648, -87.200309], tz:"America/Chicago", lugares:[
  {n:"Animal Medical Center of Hebron", cat:"vet", lat:41.330061, lng:-87.201087, dir:"638 Front Street", tel:"+1-219-996-8387", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Hebron Animal Hospital", cat:"vet", lat:41.288853, lng:-87.287368, dir:"18111 Oklahoma Pl", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hendricks": {nombre:"Hendricks", centro:[44.507186, -96.424213], tz:"America/Chicago", lugares:[
  {n:"Hendricks Veterinary Clinic", cat:"vet", lat:44.507959, lng:-96.425241, dir:"115 North Main Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hermantown": {nombre:"Hermantown", centro:[46.806885, -92.238246], tz:"America/Chicago", lugares:[
  {n:"A World of Fish", cat:"tienda", lat:46.837072, lng:-92.22913, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hesston": {nombre:"Hesston", centro:[38.138531, -97.431486], tz:"America/Chicago", lugares:[
  {n:"Hesston Vetrenary Clinic", cat:"vet", lat:38.140771, lng:-97.435639, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hiawatha": {nombre:"Hiawatha", centro:[42.03853, -91.673759], tz:"America/Chicago", lugares:[
  {n:"Gwen's Pet Grooming", cat:"peluqueria", lat:42.019541, lng:-91.663874, dir:"3952 Center Point Road Northeast", tel:"+1-319-261-1367", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Food 4 Paws", cat:"tienda", lat:42.023591, lng:-91.667472, dir:"4330 Czech Lane Northeast", tel:"+1-319-213-2130", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blairs Ferry Pet Hospital", cat:"vet", lat:42.035359, lng:-91.663842, dir:"1818 Blairs Ferry Road Northeast", tel:"+1 319-393-3027", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Hospital", cat:"vet", lat:42.035538, lng:-91.6545, dir:"1146 Blairs Ferry Road Northeast", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Bark 'n Bubble Dog Spa", cat:"peluqueria", lat:42.023492, lng:-91.668065, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hiawatha-kansas": {nombre:"Hiawatha", centro:[39.852403, -95.536497], tz:"America/Chicago", lugares:[
  {n:"Brown County Animal Shelter", cat:"refugio", lat:39.855087, lng:-95.508746, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hickman-nebraska": {nombre:"Hickman", centro:[40.619971, -96.632378], tz:"America/Chicago", lugares:[
  {n:"Woodland Animal Hospital", cat:"vet", lat:40.631845, lng:-96.630963, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "high-forest": {nombre:"High Forest", centro:[43.846097, -92.548388], tz:"America/Chicago", lugares:[
  {n:"Pet Exercise Area", cat:"parque", lat:43.809464, lng:-92.580973, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "highland-charter-township": {nombre:"Highland Charter Township", centro:[42.652437, -83.625019], tz:"America/New_York", lugares:[
  {n:"Highland Pets", cat:"tienda", lat:42.643288, lng:-83.626943, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "highland-indiana": {nombre:"Highland", centro:[41.553653, -87.452048], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.528425, lng:-87.46891, dir:"10235 Indianapolis Boulevard", tel:"+1 219-924-9219", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"One Dog at a Time", cat:"peluqueria", lat:41.555611, lng:-87.4581, dir:"2925 Highway Avenue", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Reptile Emporium & Aquatic Center", cat:"tienda", lat:41.555667, lng:-87.460097, dir:"2835 Highway Avenue", horas:[12.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "highland-park": {nombre:"Highland Park", centro:[42.183672, -87.799324], tz:"America/Chicago", lugares:[
  {n:"Furry Finesse", cat:"peluqueria", lat:42.165782, lng:-87.787196, dir:"737 Broadview Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Debbie Gottlieb Beitler Dog Park", cat:"parque", lat:42.162074, lng:-87.801376, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "highland-park-michigan": {nombre:"Highland Park", centro:[42.405598, -83.096583], tz:"America/New_York", lugares:[
  {n:"Hurley Dog and Cat Hospital", cat:"vet", lat:42.400751, lng:-83.139815, dir:"15018 Livernois Avenue", tel:"+1-313-863-5350", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Holy Paws Dog Park", cat:"parque", lat:42.389598, lng:-83.082239, dir:"9840 John R Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "highwood": {nombre:"Highwood", centro:[42.199888, -87.809325], tz:"America/Chicago", lugares:[
  {n:"Moraine Beach (Dog park)", cat:"parque", lat:42.199342, lng:-87.794609, dir:"2501 Sheridan Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Cairo Animal Hospital", cat:"vet", lat:42.18849, lng:-87.818526, dir:"1170 Park Avenue West", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hilliard-ohio": {nombre:"Hilliard", centro:[40.033814, -83.159611], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.985084, lng:-83.147021, dir:"5336 Westpointe Plaza Drive", tel:"+1 614-876-2058", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Sassy Dogs Salon", cat:"peluqueria", lat:40.017945, lng:-83.136589, dir:"4529 Scioto Darby Road", tel:"+1-614-971-5177", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Healthy Pets of Hayden Run", cat:"vet", lat:40.059358, lng:-83.174959, dir:"6488 Hayden Run Road", tel:"+16143898608", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Mill Run Animal Hospital", cat:"vet", lat:40.028681, lng:-83.110951, dir:"3660 Ridge Mill Drive", tel:"+1-614-529-2222", horas:[7.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:39.984988, lng:-83.146785, dir:"5336 Westpointe Plaza Drive", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Spindler Dog Park", cat:"parque", lat:39.996854, lng:-83.167116, dir:"2121 Spindler Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Columbus Humane", cat:"refugio", lat:40.014594, lng:-83.114962, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mutts & Co.", cat:"tienda", lat:40.032857, lng:-83.132093, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aquarium Adventure", cat:"tienda", lat:40.029028, lng:-83.119058, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Valu", cat:"tienda", lat:40.030166, lng:-83.114449, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Healthy Pets of Hilliard-Rome", cat:"vet", lat:39.995367, lng:-83.151902, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hills-and-dales-ohio": {nombre:"Hills and Dales", centro:[40.82978, -81.444838], tz:"America/New_York", lugares:[
  {n:"Pawz", cat:"tienda", lat:40.853765, lng:-81.436623, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetPeople", cat:"tienda", lat:40.856645, lng:-81.436901, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stark County Veterinary Emergency Clinic", cat:"vet", lat:40.848525, lng:-81.424092, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:40.849147, lng:-81.425751, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hillsboro-ohio": {nombre:"Hillsboro", centro:[39.202287, -83.611587], tz:"America/New_York", lugares:[
  {n:"Colonial Animal Clinic", cat:"vet", lat:39.202808, lng:-83.617745, dir:"321 West Main Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hillsboro-wisconsin": {nombre:"Hillsboro", centro:[43.650862, -90.339908], tz:"America/Chicago", lugares:[
  {n:"Peterson Pharmacy", cat:"farma", lat:43.650674, lng:-90.340442, dir:"727 Water Avenue", tel:"+1-608-489-3141", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hillsdale-michigan": {nombre:"Hillsdale", centro:[41.920047, -84.63051], tz:"America/New_York", lugares:[
  {n:"Puppy Paradise", cat:"refugio", lat:41.942417, lng:-84.630758, dir:"3051 North Hillsdale Road", tel:"+1-517-825-0321", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Hillsdale Veterinary Hospital", cat:"vet", lat:41.909198, lng:-84.627807, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hobart": {nombre:"Hobart", centro:[41.532259, -87.255035], tz:"America/Chicago", lugares:[
  {n:"Hobart Animal Clinic", cat:"vet", lat:41.528377, lng:-87.22686, dir:"2650 State Road 130", tel:"+1-219-942-4442", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "hobart-wisconsin": {nombre:"Hobart", centro:[44.53129, -88.135643], tz:"America/Chicago", lugares:[
  {n:"Trout Creek Veterinary Center", cat:"vet", lat:44.567926, lng:-88.167241, dir:"560 Centennial Centre Boulevard", tel:"+1-920-865-1010", horas:[7.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "hoffman-estates": {nombre:"Hoffman Estates", centro:[42.042726, -88.079278], tz:"America/Chicago", lugares:[
  {n:"Aquarium Adventure", cat:"tienda", lat:42.048584, lng:-88.082507, dir:"11 Golf Center", tel:"+1-847-490-9334", horas:[10.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.052326, lng:-88.043612, dir:"1440 East Golf Road", tel:"+1 847-413-0982", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:42.050238, lng:-88.077728, dir:"60 East Golf Road", tel:"+1 847-884-8370", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Harper Animal Hospital", cat:"vet", lat:42.080215, lng:-88.07984, dir:"1460 West Algonquin Road", tel:"+1-847-358-6767", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Golf Rose Animal Hospital", cat:"vet", lat:42.052712, lng:-88.078166, dir:"51 Remington Road", tel:"+1 847 885 3344", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"VEG", cat:"vet", lat:42.037451, lng:-88.047425, dir:"1287 East Higgins Road", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Golf Rose Pet Lodge", cat:"refugio", lat:42.052604, lng:-88.078869, dir:"1355 North Roselle Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:42.048707, lng:-88.082476, horas:[10.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Beyond the Reef", cat:"tienda", lat:42.047895, lng:-88.084373, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Golf Rose Pet Store", cat:"tienda", lat:42.053027, lng:-88.07882, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Copley Dog Park", cat:"parque", lat:42.053906, lng:-88.07419, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hoisington": {nombre:"Hoisington", centro:[38.518067, -98.778139], tz:"America/Chicago", lugares:[
  {n:"Scentral Bark", cat:"parque", lat:38.520818, lng:-98.788097, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hoisington Veterinary Hospital", cat:"vet", lat:38.492233, lng:-98.775636, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "holden-missouri": {nombre:"Holden", centro:[38.714178, -93.99133], tz:"America/Chicago", lugares:[
  {n:"Paws and Memaws", cat:"tienda", lat:38.721372, lng:-93.99293, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Holden Animal Clinic", cat:"vet", lat:38.717785, lng:-93.999081, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "holdrege": {nombre:"Holdrege", centro:[40.437996, -99.3699], tz:"America/Chicago", lugares:[
  {n:"North Park Animal Hospital", cat:"vet", lat:40.451421, lng:-99.380038, dir:"1625 Burlington Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "holland-michigan": {nombre:"Holland", centro:[42.787602, -86.109083], tz:"America/New_York", lugares:[
  {n:"Paws in the City", cat:"peluqueria", lat:42.771504, lng:-86.114379, dir:"689 Maple Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chow Hound", cat:"tienda", lat:42.796505, lng:-86.078583, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park at Van Raalte Farm (Small Dog Side)", cat:"parque", lat:42.776331, lng:-86.066502, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park at Van Raalte Farm (Large Dog Side)", cat:"parque", lat:42.776805, lng:-86.066808, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "holland-ohio": {nombre:"Holland", centro:[41.621718, -83.711604], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.615095, lng:-83.699119, dir:"1450 Spring Meadows Drive", tel:"+1 419-865-3424", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Spring Meadows Animal Hospital", cat:"vet", lat:41.614652, lng:-83.712845, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hollister-missouri": {nombre:"Hollister", centro:[36.623331, -93.216318], tz:"America/Chicago", lugares:[
  {n:"Mochas and Meows", cat:"refugio", lat:36.626492, lng:-93.280712, dir:"3265 Falls Parkway", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "holly-michigan": {nombre:"Holly", centro:[42.791973, -83.627725], tz:"America/New_York", lugares:[
  {n:"Maher Feed & Pet Supply", cat:"tienda", lat:42.804317, lng:-83.627661, dir:"1112 North Saginaw Street", tel:"+12483698339", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawsitive Care Veterinary Surgical Center", cat:"vet", lat:42.801628, lng:-83.626949, dir:"912 North Saginaw Street", tel:"+1-248-587-7297", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pawsitive Care Veterinary Clinic", cat:"vet", lat:42.799059, lng:-83.628085, dir:"611 North Saginaw Street", tel:"+1-248-587-7297", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "holt-michigan": {nombre:"Holt", centro:[42.641481, -84.520172], tz:"America/New_York", lugares:[
  {n:"Caring Animal Hospital", cat:"vet", lat:42.645171, lng:-84.523263, dir:"2162 N Aurelius Rd", tel:"+1-517-694-6766", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Jolly Road Veterinary Hospital", cat:"vet", lat:42.682589, lng:-84.509184, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Towne Square Dog Park", cat:"parque", lat:42.685971, lng:-84.509421, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"College Towne Dog Park", cat:"parque", lat:42.683268, lng:-84.506501, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "homecroft": {nombre:"Homecroft", centro:[39.670045, -86.131375], tz:"America/New_York", lugares:[
  {n:"South Side Animal Hospital", cat:"vet", lat:39.689542, lng:-86.135874, dir:"5220 Madison Avenue", tel:"+1-317-783-3309", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "homer-glen": {nombre:"Homer Glen", centro:[41.600032, -87.938111], tz:"America/Chicago", lugares:[
  {n:"Animal Care Clinic of Homer Glen", cat:"vet", lat:41.628659, lng:-87.937968, dir:"13061 West 143rd Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"TLC Animal Shelter", cat:"refugio", lat:41.614941, lng:-87.935555, dir:"13016 West 151st Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.628483, lng:-87.932867, dir:"12845 West 143rd Street", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Colonial Manor Animal Hospital", cat:"vet", lat:41.600053, lng:-87.952769, dir:"13726 West 159th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Messenger Marsh Dog Park", cat:"parque", lat:41.59459, lng:-87.917833, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hometown": {nombre:"Hometown", centro:[41.731246, -87.730953], tz:"America/Chicago", lugares:[
  {n:"Oak Lawn Animal Hospital", cat:"vet", lat:41.724707, lng:-87.741486, dir:"9244 South Cicero Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hopkins-minnesota": {nombre:"Hopkins", centro:[44.924399, -93.411449], tz:"America/Chicago", lugares:[
  {n:"Veterinary Behavior Specialties of Minnesota", cat:"vet", lat:44.944313, lng:-93.406576, dir:"10029 Minnetonka Boulevard", tel:"+1-612-554-1182", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Red Pine Trails Animal Hospital", cat:"vet", lat:44.934149, lng:-93.420093, dir:"1541 Minnesota State Highway 7", tel:"+1-952-600-4636", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Bryant Lake Dog Off-leash Area", cat:"parque", lat:44.886077, lng:-93.432965, dir:"6402 Rowland Road", horas:[5.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Adogo Minnetonka", cat:"refugio", lat:44.892161, lng:-93.446473, dir:"6133 Baker Road", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Hopkins Pet Hospital", cat:"vet", lat:44.924959, lng:-93.391645, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:44.93398, lng:-93.425038, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Frail Dog Area", cat:"parque", lat:44.886445, lng:-93.43231, horas:[5.0, 22.0], nota:"Dato de OpenStreetMap"}
 ]},
 "horicon": {nombre:"Horicon", centro:[43.451382, -88.631214], tz:"America/Chicago", lugares:[
  {n:"Horicon Lions Dog Park", cat:"parque", lat:43.434543, lng:-88.635759, horas:[6.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "hortonville-wisconsin": {nombre:"Hortonville", centro:[44.335037, -88.639343], tz:"America/Chicago", lugares:[
  {n:"Fuzzy Paws Pet Grooming", cat:"peluqueria", lat:44.335117, lng:-88.640434, dir:"226 West Main Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "houston-minnesota": {nombre:"Houston", centro:[43.7633, -91.568476], tz:"America/Chicago", lugares:[
  {n:"International Owl Center", cat:"zoo", lat:43.763176, lng:-91.567976, dir:"126 East Cedar Street", tel:"+1-507-896-6957", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "howard-wisconsin-2": {nombre:"Howard", centro:[44.543385, -88.087965], tz:"America/Chicago", lugares:[
  {n:"Bark N Brew", cat:"parque", lat:44.564476, lng:-88.079926, dir:"2514 Glendale Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:44.523164, lng:-88.095616, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Family Pet Food Center", cat:"tienda", lat:44.516635, lng:-88.069797, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Parkside Animal Care Center", cat:"vet", lat:44.530923, lng:-88.059943, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Howard Dog Park", cat:"parque", lat:44.562229, lng:-88.056713, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "howell": {nombre:"Howell", centro:[42.607255, -83.929395], tz:"America/New_York", lugares:[
  {n:"Dog Town & Kitty City", cat:"peluqueria", lat:42.591419, lng:-83.884016, dir:"3557 East Grand River Avenue", tel:"+1-517-376-6243", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "howland-center": {nombre:"Howland Center", centro:[41.251079, -80.745379], tz:"America/New_York", lugares:[
  {n:"Howland Community Animal Hospital", cat:"vet", lat:41.265825, lng:-80.753086, dir:"4085 North River Road Northeast", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pups Path", cat:"tienda", lat:41.216099, lng:-80.750953, dir:"5555 Youngstown Warren Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.217813, lng:-80.746525, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hoyt": {nombre:"Hoyt", centro:[39.247775, -95.706371], tz:"America/Chicago", lugares:[
  {n:"Kester Animal Clinic", cat:"vet", lat:39.245931, lng:-95.714313, dir:"13826 KS-214", tel:"+1-785-231-8713", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "hoytville": {nombre:"Hoytville", centro:[41.190052, -83.784659], tz:"America/New_York", lugares:[
  {n:"Pine View Kennels", cat:"tienda", lat:41.203207, lng:-83.785118, tel:"+1 419-279-7145", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Robert D. Loveland D.V.M.", cat:"vet", lat:41.203162, lng:-83.785003, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hubbard-ohio": {nombre:"Hubbard", centro:[41.156463, -80.568949], tz:"America/New_York", lugares:[
  {n:"Animal Wellness & Healing Centre", cat:"vet", lat:41.155342, lng:-80.580741, dir:"47 Hall Avenue Southeast", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Sudsy Dog Grooming Parlor", cat:"peluqueria", lat:41.158635, lng:-80.568744, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Love's Dog Park", cat:"parque", lat:41.173389, lng:-80.568918, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Canine Campus - Dog School", cat:"tienda", lat:41.157614, lng:-80.600447, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hubbard Pet Resort & Spa", cat:"refugio", lat:41.156595, lng:-80.601529, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hubbard's Scentral Park Dog Park", cat:"parque", lat:41.157025, lng:-80.601667, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hudson-ohio": {nombre:"Hudson", centro:[41.240056, -81.440667], tz:"America/New_York", lugares:[
  {n:"Keystone Animal Hospital", cat:"vet", lat:41.200295, lng:-81.439631, dir:"4983 Darrow Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hudson Veterinary Hospital", cat:"vet", lat:41.227208, lng:-81.439698, dir:"5939 Darrow Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Center of Hudson", cat:"vet", lat:41.228039, lng:-81.441007, dir:"5980 Darrow Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetPeople", cat:"tienda", lat:41.238376, lng:-81.446676, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Jungle", cat:"tienda", lat:41.200627, lng:-81.44102, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hudson-wisconsin": {nombre:"Hudson", centro:[44.975095, -92.755467], tz:"America/Chicago", lugares:[
  {n:"Angel's Pet World", cat:"tienda", lat:44.971667, lng:-92.757335, dir:"105 Second Street", tel:"+1 715-386-6740", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"K-9 Playtime", cat:"refugio", lat:44.956098, lng:-92.724832, dir:"1400 Gateway Circle", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Dons", cat:"tienda", lat:44.959447, lng:-92.725235, dir:"2312 Crest View Drive", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Hillcrest Animal Hospital", cat:"vet", lat:44.978599, lng:-92.727244, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hudson Dog Park", cat:"parque", lat:44.979205, lng:-92.718902, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hudsonville": {nombre:"Hudsonville", centro:[42.870889, -85.865235], tz:"America/New_York", lugares:[
  {n:"Chicago Drive Veterinary Clinic", cat:"vet", lat:42.885685, lng:-85.835968, dir:"6418 Center Industrial Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heartworm Positive", cat:"vet", lat:42.89569, lng:-85.860627, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "huntertown": {nombre:"Huntertown", centro:[41.228382, -85.172474], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.174714, lng:-85.168712, dir:"10035 Lima Road Fort", tel:"+1 260-489-0870", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Happy Tails", cat:"refugio", lat:41.2183, lng:-85.131671, dir:"14616 Coldwater Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "huntingburg": {nombre:"Huntingburg", centro:[38.298942, -86.954997], tz:"America/Chicago", lugares:[
  {n:"Dubois County Animal Hospital", cat:"vet", lat:38.269138, lng:-86.963611, dir:"3140 West 750 South", tel:"+18126832388", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary & Poultry Supply", cat:"tienda", lat:38.315011, lng:-86.951234, dir:"1913 North Van Buren Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "huntington-indiana": {nombre:"Huntington", centro:[40.882353, -85.496473], tz:"America/New_York", lugares:[
  {n:"Healthier Pet", cat:"vet", lat:40.878226, lng:-85.530697, dir:"2996 West Park Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "huntington-woods": {nombre:"Huntington Woods", centro:[42.480591, -83.166871], tz:"America/New_York", lugares:[
  {n:"Detroit Zoo", cat:"zoo", lat:42.477764, lng:-83.155327, dir:"8450 West 10 Mile Road", tel:"+1-248-541-5717", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Natural Healing Pet Care", cat:"vet", lat:42.489281, lng:-83.173738, dir:"1722 11 Mile Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "huntleigh": {nombre:"Huntleigh", centro:[38.615886, -90.410674], tz:"America/Chicago", lugares:[
  {n:"Kirkwood Animal Hospital", cat:"vet", lat:38.598632, lng:-90.413949, dir:"11114 Manchester Road", tel:"+1 314 965 2660", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "huntley": {nombre:"Huntley", centro:[42.17225, -88.42692], tz:"America/Chicago", lugares:[
  {n:"Animal House Shelter", cat:"refugio", lat:42.19677, lng:-88.450846, dir:"13005 Ernesti Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shampooch and Kitty", cat:"peluqueria", lat:42.178065, lng:-88.42594, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Huntley Veterinary Hospital", cat:"vet", lat:42.180002, lng:-88.427702, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "huron-ohio": {nombre:"Huron", centro:[41.391759, -82.557661], tz:"America/New_York", lugares:[
  {n:"Off Leash Dog Park", cat:"parque", lat:41.411875, lng:-82.634414, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hutchinson": {nombre:"Hutchinson", centro:[38.060844, -97.929774], tz:"America/Chicago", lugares:[
  {n:"PAWfection Pet Salon", cat:"peluqueria", lat:38.057484, lng:-97.935173, dir:"128 West 4th Avenue", tel:"+1-620-899-9310", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hutchinson Small Animal Hospital", cat:"vet", lat:38.086178, lng:-97.907477, dir:"1201 East 30th Avenue", tel:"+1-620-665-8743", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.072735, lng:-97.891813, dir:"1912 East 17th Street", tel:"+1 620-669-0459", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Holly's Pet Shoppe", cat:"peluqueria", lat:38.071508, lng:-97.904236, tel:"+1-620-259-2460", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "hutchinson-minnesota": {nombre:"Hutchinson", centro:[44.88774, -94.369706], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:44.869833, lng:-94.378593, dir:"1320 State Highway 15", tel:"+1 320-587-4335", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Heart of MN Animal Shelter", cat:"refugio", lat:44.87394, lng:-94.383712, dir:"880 Century Avenue Southwest", tel:"+1-320-234-9699", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City of Hutchinson Dog Park", cat:"parque", lat:44.891697, lng:-94.362168, dir:"427 1st Avenue Southeast", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Sanctuary", cat:"zoo", lat:44.893343, lng:-94.382008, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "huxley": {nombre:"Huxley", centro:[41.894613, -93.60659], tz:"America/Chicago", lugares:[
  {n:"Ballard Veterinary Clinic", cat:"vet", lat:41.900502, lng:-93.605418, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hyannis-nebraska": {nombre:"Hyannis", centro:[42.000026, -101.761738], tz:"America/Chicago", lugares:[
  {n:"Hyannis Vet Clinic", cat:"vet", lat:42.000714, lng:-101.751081, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "imperial-missouri": {nombre:"Imperial", centro:[38.369776, -90.378452], tz:"America/Chicago", lugares:[
  {n:"A Howlin’ Good Time", cat:"refugio", lat:38.395323, lng:-90.385665, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "independence-charter-township": {nombre:"Independence Charter Township", centro:[42.747063, -83.39194], tz:"America/New_York", lugares:[
  {n:"Advanced Pet Care", cat:"vet", lat:42.731758, lng:-83.379009, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:42.731767, lng:-83.378706, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "independence-iowa": {nombre:"Independence", centro:[42.468566, -91.889119], tz:"America/Chicago", lugares:[
  {n:"Pipestone Veterinary Services", cat:"vet", lat:42.465733, lng:-91.920562, dir:"405 20th Avenue Southwest", tel:"+1-319-332-0260", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Independence Veterinary Clinic", cat:"vet", lat:42.454011, lng:-91.890662, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "independence-missouri": {nombre:"Independence", centro:[39.092479, -94.413792], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:39.043416, lng:-94.41347, dir:"4201 South Noland Road", tel:"+1 816-478-0313", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Hidden Valley Animal Hospital", cat:"vet", lat:39.06338, lng:-94.373185, dir:"17501 Hidden Valley Road", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Independence Animal Hospital", cat:"vet", lat:39.089429, lng:-94.413817, dir:"300 South Noland Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Xcel Pet Spa and Grooming", cat:"peluqueria", lat:39.08931, lng:-94.416009, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park at Santa Fe Park", cat:"parque", lat:39.065901, lng:-94.425921, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "indian-creek": {nombre:"Indian Creek", centro:[42.226968, -87.979797], tz:"America/Chicago", lugares:[
  {n:"VCA Animal Hospital", cat:"vet", lat:42.22204, lng:-87.969783, dir:"203 US 45", tel:"+1-847-362-0780", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "indian-river": {nombre:"Indian River", centro:[45.412512, -84.612536], tz:"America/New_York", lugares:[
  {n:"Indian River Veterinary Clinic", cat:"vet", lat:45.380724, lng:-84.629978, dir:"5668 South Straits Highway", tel:"+1-231-238-7022", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Indian River Pet Resort", cat:"refugio", lat:45.381091, lng:-84.629906, dir:"5578 South Straits Highway", tel:"+1-231-238-2278", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "indian-village": {nombre:"Indian Village", centro:[41.714382, -86.232397], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:41.719702, lng:-86.173898, dir:"415 East University Drive", tel:"+1 574-271-4967", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.700873, lng:-86.183353, dir:"4540 Grape Road", tel:"+1 574-243-5525", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:41.719523, lng:-86.174043, dir:"421 East University Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Emergency Veterinary Care Centers", cat:"vet", lat:41.713447, lng:-86.177935, dir:"5714 North Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gordon's Grooming", cat:"peluqueria", lat:41.724555, lng:-86.184556, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"University Park Veterinary Hospital", cat:"vet", lat:41.720864, lng:-86.175432, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "indianapolis": {nombre:"Indianapolis", centro:[39.768333, -86.15835], tz:"America/New_York", lugares:[
  {n:"City Way Animal Clinic Mass Ave", cat:"vet", lat:39.776163, lng:-86.148484, dir:"625 North East Street", tel:"+1-317-396-0056", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Indianapolis Animal Urgent Care", cat:"vet", lat:39.755635, lng:-86.149129, dir:"827 South East Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Three Dog Bakery", cat:"tienda", lat:39.77344, lng:-86.151545, dir:"444 Massachusetts Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Indianapolis Zoo", cat:"zoo", lat:39.767167, lng:-86.180113, dir:"1200 West Washington Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"FACE Low-Cost Animal Clinic", cat:"vet", lat:39.785088, lng:-86.132619, dir:"1505 Massachusetts Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Pets Go To Heaven", cat:"vet", lat:39.766146, lng:-86.2012, dir:"2330 West Washington Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Way Animal Clinics - Fountain Square", cat:"vet", lat:39.755227, lng:-86.142439, dir:"880 Virginia Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"My Pet Carnivore Food Inc", cat:"tienda", lat:39.748556, lng:-86.140199, dir:"1402 Shelby Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dog Park at Immanuel", cat:"parque", lat:39.75261, lng:-86.15135, dir:"382 Prospect Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Old School Dog Park", cat:"parque", lat:39.779724, lng:-86.147634, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bow Wow Meow Boutique", cat:"peluqueria", lat:39.749538, lng:-86.139661, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Way Animal Clinics - Fall Creek Place", cat:"vet", lat:39.802339, lng:-86.149901, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Dogs Grocery", cat:"tienda", lat:39.753425, lng:-86.141065, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Downtown Doggie", cat:"refugio", lat:39.771824, lng:-86.140908, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Henge", cat:"parque", lat:39.784779, lng:-86.137609, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "indianola-iowa": {nombre:"Indianola", centro:[41.360497, -93.561329], tz:"America/Chicago", lugares:[
  {n:"Indianola Veterinary Clinic", cat:"vet", lat:41.384335, lng:-93.559638, dir:"2201 North Jefferson Way", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kindness Pet Clinic", cat:"vet", lat:41.357759, lng:-93.549076, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ingalls": {nombre:"Ingalls", centro:[39.956985, -85.805256], tz:"America/New_York", lugares:[
  {n:"Pendleton Pens Pet Resort", cat:"refugio", lat:40.009376, lng:-85.823283, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "inkster": {nombre:"Inkster", centro:[42.294204, -83.30993], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.293213, lng:-83.270586, dir:"2621 Telegraph Road", tel:"+1-313-278-4799", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Suite", cat:"peluqueria", lat:42.295245, lng:-83.296293, dir:"26245 Michigan Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Clinic", cat:"vet", lat:42.292147, lng:-83.320421, tel:"+1-734-729-5860", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "inlet": {nombre:"Inlet", centro:[42.627237, -88.585101], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.630417, lng:-88.606048, dir:"2113 East Geneva Street", tel:"+1 262-740-0011", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "innsbrook": {nombre:"Innsbrook", centro:[38.769216, -91.052088], tz:"America/Chicago", lugares:[
  {n:"Big Joel's Safari", cat:"zoo", lat:38.789631, lng:-91.020922, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "interior": {nombre:"Interior", centro:[43.726938, -101.984042], tz:"America/Denver", lugares:[
  {n:"Prairie Dogs", cat:"zoo", lat:43.821869, lng:-101.90085, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kamp K9", cat:"parque", lat:43.692557, lng:-101.930482, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "interlochen": {nombre:"Interlochen", centro:[44.64977, -85.767847], tz:"America/New_York", lugares:[
  {n:"Barb's Backyard Birds", cat:"tienda", lat:44.657721, lng:-85.768756, dir:"2072 J Maddy Parkway", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "international-falls": {nombre:"International Falls", centro:[48.601033, -93.41059], tz:"America/Chicago", lugares:[
  {n:"Rainy River Veterinary Hospital, Inc.", cat:"vet", lat:48.596262, lng:-93.404218, dir:"900 3rd Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Borderland Humane Society Holding Facility", cat:"refugio", lat:48.584642, lng:-93.443098, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "inver-grove-heights": {nombre:"Inver Grove Heights", centro:[44.847904, -93.042812], tz:"America/Chicago", lugares:[
  {n:"Paws Abilities Dog Training", cat:"tienda", lat:44.855761, lng:-93.045539, dir:"6475 Cahill Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Inver Grove Heights Animal Hospital", cat:"vet", lat:44.846041, lng:-93.04291, dir:"7135 Cahill Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grateful Grooming", cat:"peluqueria", lat:44.854847, lng:-93.043561, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "inverness-illinois": {nombre:"Inverness", centro:[42.118082, -88.096187], tz:"America/Chicago", lugares:[
  {n:"Palatine Family Pet Care LLC", cat:"tienda", lat:42.125292, lng:-88.070313, dir:"1100 West Northwest Highway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bernel Foundation", cat:"refugio", lat:42.125269, lng:-88.070916, dir:"835 Sterling Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "iola-kansas": {nombre:"Iola", centro:[37.92448, -95.399981], tz:"America/Chicago", lugares:[
  {n:"Happy Tails Dog Park", cat:"parque", lat:37.915368, lng:-95.408507, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "iowa-city": {nombre:"Iowa City", centro:[41.661256, -91.529911], tz:"America/Chicago", lugares:[
  {n:"Bright Eyes Bushy Tails Vetrinary", cat:"vet", lat:41.689444, lng:-91.488385, dir:"3030 Northgate Drive", tel:"+1-319-351-4256", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"All Pets", cat:"vet", lat:41.649033, lng:-91.531678, dir:"301 Kirkwood Avenue", tel:"+1-319-351-7387", horas:[7.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Eastside Pet Clinic", cat:"vet", lat:41.651216, lng:-91.502471, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Boarding", cat:"refugio", lat:41.689616, lng:-91.488502, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cat Clinic of Iowa City", cat:"vet", lat:41.642954, lng:-91.504956, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Associates", cat:"vet", lat:41.646622, lng:-91.531066, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rita's Ranch", cat:"parque", lat:41.65207, lng:-91.480291, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brenneman's Grooming and Pet Supplies", cat:"peluqueria", lat:41.640382, lng:-91.527584, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "isanti": {nombre:"Isanti", centro:[45.490234, -93.247705], tz:"America/Chicago", lugares:[
  {n:"Isanti Pet Clinic", cat:"vet", lat:45.492562, lng:-93.242888, dir:"120 Heritage Boulevard Northeast", tel:"+1-763-444-0346", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "island-lake": {nombre:"Island Lake", centro:[42.276134, -88.192027], tz:"America/Chicago", lugares:[
  {n:"Paw Trax Canine Fitness", cat:"tienda", lat:42.271226, lng:-88.198717, dir:"4015 Roberts Road", tel:"+1-847-957-7297", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Oakview Pet Resort", cat:"refugio", lat:42.295607, lng:-88.17074, dir:"27645 West Case Road", tel:"+1-847-526-1388", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chicago Equine Medical Center", cat:"vet", lat:42.256777, lng:-88.183129, dir:"26996 North Darrell Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "itasca": {nombre:"Itasca", centro:[41.971298, -88.012916], tz:"America/Chicago", lugares:[
  {n:"Animal Medical Center of Itasca", cat:"vet", lat:41.972237, lng:-88.020099, dir:"220 Catalpa Avenue", tel:"+1 630-773-2040", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "ithaca": {nombre:"Ithaca", centro:[43.291698, -84.6075], tz:"America/New_York", lugares:[
  {n:"Ithaca Dog Park", cat:"parque", lat:43.295955, lng:-84.617224, dir:"530 West Center Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jackson-michigan": {nombre:"Jackson", centro:[42.246504, -84.401696], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.268051, lng:-84.433753, dir:"1511 Boardman Road", tel:"+1 517-960-2223", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Jackson Animal Hospital", cat:"vet", lat:42.254314, lng:-84.41145, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.261801, lng:-84.428738, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clinton Trail Animal Hospital", cat:"vet", lat:42.278484, lng:-84.429362, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jackson-ohio": {nombre:"Jackson", centro:[39.052017, -82.636554], tz:"America/New_York", lugares:[
  {n:"Animals Unlimited Veterinary Hospital", cat:"vet", lat:39.008048, lng:-82.67977, dir:"640 Mount Zion Road", tel:"+1-740-286-8035", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Walnut Hills Veterinary Hospital", cat:"vet", lat:39.036534, lng:-82.627565, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jackson-wisconsin": {nombre:"Jackson", centro:[43.323892, -88.16676], tz:"America/Chicago", lugares:[
  {n:"Jackson Pet Hospital Ltd", cat:"vet", lat:43.311064, lng:-88.161834, dir:"3370 Jackson Drive", tel:"+1-262-677-3112", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pleasant Valley Very Hospital", cat:"vet", lat:43.352364, lng:-88.144349, dir:"2151 Pleasant Valley Road", tel:"+1-262-677-3222", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jacksonville-illinois": {nombre:"Jacksonville", centro:[39.73437, -90.228782], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies", cat:"tienda", lat:39.723682, lng:-90.269598, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog park", cat:"parque", lat:39.731733, lng:-90.251522, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jane": {nombre:"Jane", centro:[36.547296, -94.305211], tz:"America/Chicago", lugares:[
  {n:"Hancock Veterinary Services of Bella Vista", cat:"vet", lat:36.508709, lng:-94.282994, dir:"155 Gordon Hollow Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "janesville-minnesota": {nombre:"Janesville", centro:[44.116078, -93.708004], tz:"America/Chicago", lugares:[
  {n:"Summers Ridge Veterinary Clinic", cat:"vet", lat:44.115951, lng:-93.70521, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "janesville-wisconsin": {nombre:"Janesville", centro:[42.682977, -89.022679], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.716011, lng:-88.988363, dir:"2700 Pontiac Place", tel:"+1 608-302-4814", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:42.71787, lng:-88.978518, dir:"2900 Deerfield Drive", tel:"+1 608-741-1534", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Paw Print Dog Park", cat:"parque", lat:42.640466, lng:-89.040569, dir:"2701 South Oakhill Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Furry Babies", cat:"refugio", lat:42.712132, lng:-88.999084, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Sweeties Grooming Center", cat:"peluqueria", lat:42.687083, lng:-89.051193, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Suites Pet Boarding", cat:"refugio", lat:42.714393, lng:-89.001566, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:42.722128, lng:-88.997924, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mounds Pet Food Warehouse", cat:"tienda", lat:42.717644, lng:-89.00044, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:42.718219, lng:-88.996004, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Creatures Small Animal Hospital", cat:"vet", lat:42.698984, lng:-88.976037, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:42.670398, lng:-88.971177, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jasper-indiana": {nombre:"Jasper", centro:[38.391423, -86.930872], tz:"America/Chicago", lugares:[
  {n:"Feeders Pet Supply", cat:"tienda", lat:38.427119, lng:-86.938643, dir:"220 Baden Strasse", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogwood Animal Clinic Inc", cat:"vet", lat:38.415576, lng:-86.936528, dir:"125 East 31st Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jasper Dog Park", cat:"parque", lat:38.402809, lng:-86.927424, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jefferson-city": {nombre:"Jefferson City", centro:[38.577359, -92.172427], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.579643, lng:-92.22214, dir:"731 Stoneridge Boulevard", tel:"+1 573-761-5231", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"North Jefferson Dog Park", cat:"parque", lat:38.595824, lng:-92.1759, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jefferson City Animal Shelter", cat:"refugio", lat:38.577674, lng:-92.212182, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jerome-ohio": {nombre:"Jerome", centro:[40.166451, -83.175747], tz:"America/New_York", lugares:[
  {n:"Jerome Grand Paws Park", cat:"parque", lat:40.120207, lng:-83.182776, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jersey": {nombre:"Jersey", centro:[40.053675, -82.723227], tz:"America/New_York", lugares:[
  {n:"Kennel Club USA", cat:"peluqueria", lat:40.093618, lng:-82.724119, dir:"12525 Jug Street", tel:"+1 740-967-8050", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "jerseyville": {nombre:"Jerseyville", centro:[39.120047, -90.328448], tz:"America/Chicago", lugares:[
  {n:"Jersey-Calhoun Veteraniary Hospital", cat:"vet", lat:39.107239, lng:-90.316467, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "johnsburg": {nombre:"Johnsburg", centro:[42.380021, -88.242031], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.366745, lng:-88.26328, dir:"3370 Shoppers Drive", tel:"+1 815-578-1530", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "johnson-creek": {nombre:"Johnson Creek", centro:[43.075916, -88.774837], tz:"America/Chicago", lugares:[
  {n:"Grandpa Glenn's Pet Treats", cat:"tienda", lat:43.089047, lng:-88.778457, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Area 3", cat:"parque", lat:43.056412, lng:-88.788781, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Area 2", cat:"parque", lat:43.055103, lng:-88.789311, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Area 4", cat:"parque", lat:43.057893, lng:-88.785989, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Area 1", cat:"parque", lat:43.053561, lng:-88.786338, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "johnston": {nombre:"Johnston", centro:[41.673152, -93.697339], tz:"America/Chicago", lugares:[
  {n:"Iowa Veterinary Referral Center", cat:"vet", lat:41.645263, lng:-93.696904, dir:"4631 Merle Hay Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Clinic", cat:"vet", lat:41.642982, lng:-93.698434, dir:"4520 Merle Hay Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Village Veterinary Hospital", cat:"vet", lat:41.65675, lng:-93.697023, dir:"5305 Merle Hay Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Prairie Point Dog Park", cat:"parque", lat:41.655788, lng:-93.688871, dir:"5320 Northwest Johnston Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Urbandale Dog Park", cat:"parque", lat:41.653849, lng:-93.707208, dir:"4905 68th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aqua Oasis", cat:"tienda", lat:41.660165, lng:-93.698383, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Klise Dog Grooming", cat:"tienda", lat:41.659478, lng:-93.698408, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "johnstown-ohio": {nombre:"Johnstown", centro:[40.153674, -82.68517], tz:"America/New_York", lugares:[
  {n:"Johnstown Animal Health Center", cat:"vet", lat:40.153924, lng:-82.684383, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogs by TJ", cat:"peluqueria", lat:40.154482, lng:-82.684518, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jonesboro-indiana": {nombre:"Jonesboro", centro:[40.479762, -85.627754], tz:"America/New_York", lugares:[
  {n:"Gas City Petting Zoo", cat:"zoo", lat:40.482867, lng:-85.623326, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jonesville-michigan": {nombre:"Jonesville", centro:[41.981518, -84.665528], tz:"America/New_York", lugares:[
  {n:"Puppy Paradise", cat:"refugio", lat:41.990178, lng:-84.650734, dir:"136 Concord Road", tel:"+1-517-995-5024", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "joplin": {nombre:"Joplin", centro:[37.084184, -94.513339], tz:"America/Chicago", lugares:[
  {n:"Parkview Animal Hospital", cat:"vet", lat:37.063471, lng:-94.532417, dir:"2508 South Maiden Lane", tel:"+1-417-781-0906", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Parr Hill Dog Park", cat:"parque", lat:37.072137, lng:-94.498137, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "junction-city-kansas": {nombre:"Junction City", centro:[39.028609, -96.831398], tz:"America/Chicago", lugares:[
  {n:"Pet Shoppe", cat:"tienda", lat:39.028498, lng:-96.833914, dir:"308 West 6th Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kalamazoo": {nombre:"Kalamazoo", centro:[42.291707, -85.587229], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.297809, lng:-85.652293, dir:"5200 West Main Street", tel:"+1 269-382-4171", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Chow Hound", cat:"tienda", lat:42.270086, lng:-85.649875, dir:"5097 Century Avenue", tel:"+1-269-459-9441", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"KL Cat Hospital", cat:"vet", lat:42.277738, lng:-85.65349, dir:"5263 West KL Avenue", tel:"+1-269-375-5402", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Charles and Lynn Zhang Animal Care & Resource Center", cat:"vet", lat:42.267957, lng:-85.523588, dir:"2272 River Street", tel:"+1-269-345-1181", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Veterinary Specialty & Emergency Center of Kalamazoo", cat:"vet", lat:42.260082, lng:-85.580414, dir:"104 West Cork Street", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Kalamazoo Animal Hospital", cat:"vet", lat:42.258998, lng:-85.579421, dir:"3301 South Burdick Street", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:42.261042, lng:-85.612079, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark's Fifth Avenue", cat:"tienda", lat:42.26098, lng:-85.612079, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Wiggle Butts Botique", cat:"tienda", lat:42.254088, lng:-85.589113, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carls", cat:"parque", lat:42.296931, lng:-85.594838, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cambridge Dog Sanctuary", cat:"parque", lat:42.262966, lng:-85.565903, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kansas-city": {nombre:"Kansas City", centro:[39.113456, -94.626497], tz:"America/Chicago", lugares:[
  {n:"Saint John's Dog Park", cat:"parque", lat:39.114098, lng:-94.618274, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Welborn Dog Park", cat:"parque", lat:39.134515, lng:-94.709084, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kansas-city-missouri": {nombre:"Kansas City", centro:[39.100105, -94.578142], tz:"America/Chicago", lugares:[
  {n:"Union Hill Animal Hospital", cat:"vet", lat:39.071779, lng:-94.585094, dir:"3025 Main Street", tel:"+1 816-931-4930", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Sea Life Aquarium Kansas City", cat:"zoo", lat:39.082158, lng:-94.5816, dir:"2475 Grand Boulevard", tel:"+1-816-471-4386", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Resource Center of Kansas City", cat:"vet", lat:39.020409, lng:-94.573829, dir:"1116 East 59th Street", tel:"+1-816-353-0940", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"City Pets and Ponds", cat:"tienda", lat:39.054038, lng:-94.593861, tel:"+1 816-561-7387", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Citydogs", cat:"peluqueria", lat:39.08866, lng:-94.58235, dir:"2001 Walnut Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Noah's Ark Animal Clinic", cat:"vet", lat:39.013559, lng:-94.588116, dir:"6305 Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Elegant Canine", cat:"peluqueria", lat:39.013439, lng:-94.588116, dir:"6309 Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Wiskrs Pet Supply", cat:"tienda", lat:39.105623, lng:-94.580204, dir:"641 Grand Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Penn Valley Off Leash Dog Park", cat:"parque", lat:39.073734, lng:-94.588749, tel:"+1-816-784-5030", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Terrace Park Dog Park", cat:"parque", lat:39.105548, lng:-94.591574, dir:"750 Pennsylvania Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggie Style Pet Salon", cat:"peluqueria", lat:39.05005, lng:-94.606071, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Pawz", cat:"refugio", lat:39.091127, lng:-94.587182, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tail Waggin' PetStop", cat:"tienda", lat:39.091128, lng:-94.586163, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Plaza Animal Clinic", cat:"vet", lat:39.036522, lng:-94.587426, horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Brookside Barkery and Bath", cat:"peluqueria", lat:39.014384, lng:-94.583544, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Capital", cat:"refugio", lat:39.048654, lng:-94.586811, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Full Time Grooming", cat:"peluqueria", lat:39.074459, lng:-94.584658, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rockhill Pet Clinic", cat:"vet", lat:39.01367, lng:-94.578065, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Picasso Dog Groomery", cat:"peluqueria", lat:39.046337, lng:-94.607158, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"River Market Dog Park", cat:"parque", lat:39.109943, lng:-94.577819, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Barking Lot", cat:"parque", lat:39.105295, lng:-94.582132, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Grooming Project", cat:"tienda", lat:39.020598, lng:-94.573687, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SoHo Loft Dog Park", cat:"parque", lat:39.105015, lng:-94.586445, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SoHo  Lofts Dog Park Area", cat:"parque", lat:39.104614, lng:-94.586605, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kanwaka": {nombre:"Kanwaka", centro:[38.971004, -95.367306], tz:"America/Chicago", lugares:[
  {n:"EarthWise Pet", cat:"tienda", lat:38.970506, lng:-95.309272, dir:"4931 West 6th Street", tel:"+1-785-842-1559", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pawsitive Pets", cat:"vet", lat:38.970995, lng:-95.310481, dir:"650 Congressional Drive", tel:"+1-785-856-7387", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pawsh Wash", cat:"peluqueria", lat:38.956043, lng:-95.30569, dir:"1520 Wakarusa Drive", tel:"+1-785-856-7297", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Wakarusa Veterinary Hospital", cat:"vet", lat:38.950871, lng:-95.307644, dir:"1825 Wakarusa Drive", tel:"+17858435577", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.973445, lng:-95.305075, dir:"4820 Bauer Farm Drive", tel:"+1 785-592-6400", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Home Sweet Home Dog Resort", cat:"refugio", lat:38.950244, lng:-95.307878, dir:"1837 Wakarusa Drive", tel:"+17858560903", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "kaukauna": {nombre:"Kaukauna", centro:[44.278043, -88.27205], tz:"America/Chicago", lugares:[
  {n:"Kaukauna Dog Park", cat:"parque", lat:44.303455, lng:-88.24333, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kearney": {nombre:"Kearney", centro:[39.373189, -94.362138], tz:"America/Chicago", lugares:[
  {n:"Fun Farm Pumpkin Patch", cat:"zoo", lat:39.379087, lng:-94.374668, dir:"650 North Jefferson St", tel:"+18166280028", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Animal Clinic of Kearney", cat:"vet", lat:39.369848, lng:-94.362736, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kearney-nebraska": {nombre:"Kearney", centro:[40.699478, -99.081858], tz:"America/Chicago", lugares:[
  {n:"Northgate Veterinary Clinic", cat:"vet", lat:40.728931, lng:-99.075643, dir:"404 East 56th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Villa Animal Hospital", cat:"vet", lat:40.698953, lng:-99.115719, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "keego-harbor": {nombre:"Keego Harbor", centro:[42.608088, -83.343825], tz:"America/New_York", lugares:[
  {n:"Animal Care Hospital of Waterford", cat:"vet", lat:42.638898, lng:-83.358982, dir:"3711 Elizabeth Lake Road", tel:"+1 248 738 7210", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K9 Designs Dog Groomer", cat:"peluqueria", lat:42.59972, lng:-83.348719, dir:"3369 Orchard Lake Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Union Lake Pet Services", cat:"refugio", lat:42.616371, lng:-83.414354, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Union Lake Veterinary Hospital", cat:"vet", lat:42.616791, lng:-83.414363, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kenilworth": {nombre:"Kenilworth", centro:[42.089473, -87.714929], tz:"America/Chicago", lugares:[
  {n:"Centennial Dog Beach", cat:"parque", lat:42.098264, lng:-87.714438, dir:"225 Sheridan Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kenosha": {nombre:"Kenosha", centro:[42.584677, -87.821226], tz:"America/Chicago", lugares:[
  {n:"Northside Animal Hospital", cat:"vet", lat:42.602371, lng:-87.846688, dir:"3021 Washington Road", tel:"+1-262-658-0910", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:42.572661, lng:-87.889198, dir:"6910 Green Bay Road", tel:"+1-262-697-8480", horas:[8.5, 21.5], nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Hospital", cat:"vet", lat:42.587926, lng:-87.862815, dir:"4415 52nd Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K9 Kibble", cat:"tienda", lat:42.581383, lng:-87.821276, dir:"5919 Sheridan Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kent-ohio": {nombre:"Kent", centro:[41.151311, -81.357805], tz:"America/New_York", lugares:[
  {n:"Memorial Animal Hospital", cat:"vet", lat:41.156207, lng:-81.313564, dir:"2222 State Route 59", tel:"+1-330-678-2770", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Hutch Pet Shop", cat:"tienda", lat:41.158765, lng:-81.357716, dir:"103 Lake Street", tel:"+1-330-673-4896", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sandy's Grooming", cat:"tienda", lat:41.15024, lng:-81.359986, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kentwood-michigan": {nombre:"Kentwood", centro:[42.869473, -85.644749], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.851525, lng:-85.626385, dir:"6159 Kalamazoo Avenue Southeast", tel:"+1-616-554-3600", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"V. I. Pets", cat:"tienda", lat:42.842362, lng:-85.664157, dir:"6701 Division Avenue South", tel:"+1 616-281-3900", horas:[11.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Red Barn Vetrinary Clinic", cat:"vet", lat:42.847374, lng:-85.664182, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "keokuk": {nombre:"Keokuk", centro:[40.397342, -91.385202], tz:"America/Chicago", lugares:[
  {n:"Two Rivers Veterinary Center", cat:"vet", lat:40.420412, lng:-91.408242, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Krichel Animal Hospital", cat:"vet", lat:40.406853, lng:-91.395472, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mac's Groom Room", cat:"peluqueria", lat:40.413057, lng:-91.400747, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kettering-ohio": {nombre:"Kettering", centro:[39.689504, -84.168827], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:39.688495, lng:-84.165918, dir:"300 East Stroop Road", tel:"+1 937-269-0092", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Poochie Bath & Boutique", cat:"peluqueria", lat:39.701309, lng:-84.121883, dir:"2308 East Dorothy Lane", tel:"+19372971500", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Hounds Town", cat:"refugio", lat:39.699473, lng:-84.122488, dir:"3076 Woodman Drive", tel:"+1-937-800-4322", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:39.688809, lng:-84.168991, dir:"4027 Far Hills Avenue", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dayton South Veterinary Clinic", cat:"vet", lat:39.699386, lng:-84.140911, dir:"Wilmington Pike", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.688334, lng:-84.162893, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "kewaskum": {nombre:"Kewaskum", centro:[43.52138, -88.227864], tz:"America/Chicago", lugares:[
  {n:"Kewaskum", cat:"vet", lat:43.515479, lng:-88.224138, dir:"1040 Fond du Lac Avenue", tel:"+1-262-626-2380", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kewaunee": {nombre:"Kewaunee", centro:[44.458402, -87.503152], tz:"America/Chicago", lugares:[
  {n:"Bruemmer Park Zoo", cat:"zoo", lat:44.459304, lng:-87.550658, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "keystone-south-dakota": {nombre:"Keystone", centro:[43.892875, -103.425723], tz:"America/Denver", lugares:[
  {n:"Old McDonald's Farm", cat:"zoo", lat:43.971925, lng:-103.327797, dir:"23691 Busted Five Lane", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kiel": {nombre:"Kiel", centro:[43.912493, -88.035652], tz:"America/Chicago", lugares:[
  {n:"Phoebe Products", cat:"tienda", lat:43.923093, lng:-88.02009, dir:"109 Persnickety Place", tel:"+1 920-894-3200", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kildeer": {nombre:"Kildeer", centro:[42.170581, -88.047853], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.161981, lng:-88.047822, dir:"20393 Rand Road", tel:"+1-847-719-8295", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "kimberly-wisconsin": {nombre:"Kimberly", centro:[44.271709, -88.340081], tz:"America/Chicago", lugares:[
  {n:"CountrySide Veterinary Health", cat:"vet", lat:44.301473, lng:-88.373328, dir:"2101 East Evergreen Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shiny Dog Dog Wash", cat:"peluqueria", lat:44.257506, lng:-88.348377, dir:"W3176 Van Roy Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wags and Whiskers Pet Resort", cat:"refugio", lat:44.262056, lng:-88.352308, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Birch Bark Veterinary", cat:"vet", lat:44.259175, lng:-88.352505, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Plamann Park Children's Farm", cat:"zoo", lat:44.323796, lng:-88.390252, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kingdom-city": {nombre:"Kingdom City", centro:[38.942722, -91.941715], tz:"America/Chicago", lugares:[
  {n:"FastLane Pup Park", cat:"parque", lat:38.941863, lng:-91.942839, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kingsbury": {nombre:"Kingsbury", centro:[41.527543, -86.70002], tz:"America/Chicago", lugares:[
  {n:"All Creature Features Animal Hospital", cat:"vet", lat:41.545275, lng:-86.701605, dir:"4034 South US 35", tel:"+1-219-393-3558", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"No-Leash Dog Exercise Area", cat:"parque", lat:41.555519, lng:-86.731887, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kingsley-michigan": {nombre:"Kingsley", centro:[44.584658, -85.536115], tz:"America/New_York", lugares:[
  {n:"Brookside Veterinary Hospital", cat:"vet", lat:44.584973, lng:-85.539045, dir:"111 Elm Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kirkland": {nombre:"Kirkland", centro:[42.092526, -88.851206], tz:"America/Chicago", lugares:[
  {n:"Off-Leash Dog Area (Except Ap1-July15)", cat:"parque", lat:42.101693, lng:-88.862817, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kirksville": {nombre:"Kirksville", centro:[40.194885, -92.583394], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:40.218069, lng:-92.585459, dir:"2309 North Baltimore Street", tel:"+1 660-234-3100", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Adair County Veterinary Clinic", cat:"vet", lat:40.249621, lng:-92.583694, tel:"+1-660-665-6696", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Grooming Corner", cat:"peluqueria", lat:40.199387, lng:-92.581892, tel:"+1-660-665-1700", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kirtland-hills": {nombre:"Kirtland Hills", centro:[41.623937, -81.307051], tz:"America/New_York", lugares:[
  {n:"Canine Meadows", cat:"parque", lat:41.578412, lng:-81.322361, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "knoxville-iowa": {nombre:"Knoxville", centro:[41.318389, -93.097136], tz:"America/Chicago", lugares:[
  {n:"Smoosh Pet Bakery & Spa", cat:"tienda", lat:41.319378, lng:-93.097814, dir:"112 North 2nd Street", horas:[11.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Hackett's Pet Grooming", cat:"peluqueria", lat:41.31838, lng:-93.082355, dir:"East Main Street", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "kokomo": {nombre:"Kokomo", centro:[40.486444, -86.133635], tz:"America/New_York", lugares:[
  {n:"A Pooch Palace", cat:"peluqueria", lat:40.440878, lng:-86.127834, dir:"3839 South Lafountain Street", tel:"+1-765-457-1405", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Care Clinic of Kokomo", cat:"vet", lat:40.446972, lng:-86.16459, dir:"3400 South Dixon Road", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Northeast Animal Clinic", cat:"vet", lat:40.498085, lng:-86.110167, dir:"1605 East North Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mehlig Dog Park", cat:"parque", lat:40.482384, lng:-86.15303, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mohr Dog Park", cat:"parque", lat:40.464391, lng:-86.102455, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "koshkonong": {nombre:"Koshkonong", centro:[36.595895, -91.645699], tz:"America/Chicago", lugares:[
  {n:"Mo Cat & Cow Vetinary Clinic", cat:"vet", lat:36.603504, lng:-91.663141, dir:"593 Co Rd 387", tel:"+1-417-867-3262", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "kulm": {nombre:"Kulm", centro:[46.301914, -98.948162], tz:"America/Chicago", lugares:[
  {n:"Four County Veterinary Clinic", cat:"vet", lat:46.30153, lng:-98.953409, dir:"102 State Highway 56", tel:"+1 701-647-2646", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "la-crescent": {nombre:"La Crescent", centro:[43.828022, -91.304027], tz:"America/Chicago", lugares:[
  {n:"La Crescent Dog Park", cat:"parque", lat:43.826307, lng:-91.301172, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "la-grange": {nombre:"La Grange", centro:[41.81483, -87.873566], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.816981, lng:-87.869354, dir:"15 North La Grange Road", tel:"+1-708-603-2139", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Purely Paws", cat:"peluqueria", lat:41.80194, lng:-87.868929, dir:"637 South La Grange Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Green Paws", cat:"vet", lat:41.802595, lng:-87.868954, dir:"617 South La Grange Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "la-grange-highlands": {nombre:"La Grange Highlands", centro:[41.781537, -87.891331], tz:"America/Chicago", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:41.790372, lng:-87.887529, dir:"1416 West 55th Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barker Shop", cat:"peluqueria", lat:41.790377, lng:-87.887154, dir:"1400 West 55th Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital", cat:"vet", lat:41.789439, lng:-87.898679, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Off-Leash Dog Area", cat:"parque", lat:41.784223, lng:-87.914452, horas:[6.0, 10.0], nota:"Dato de OpenStreetMap"}
 ]},
 "la-grange-park": {nombre:"La Grange Park", centro:[41.833365, -87.867732], tz:"America/Chicago", lugares:[
  {n:"CatNap From the Heart", cat:"refugio", lat:41.834858, lng:-87.863606, dir:"1101 Beach Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Adorable Pet Styling", cat:"peluqueria", lat:41.835842, lng:-87.852172, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arbor Animal Hospital", cat:"vet", lat:41.834077, lng:-87.873451, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "la-pointe": {nombre:"La Pointe", centro:[46.779104, -90.786579], tz:"America/Chicago", lugares:[
  {n:"La Pointe Dog Park", cat:"parque", lat:46.779454, lng:-90.783554, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "la-porte-indiana": {nombre:"La Porte", centro:[41.610598, -86.722523], tz:"America/Chicago", lugares:[
  {n:"The Gold Clipper", cat:"peluqueria", lat:41.606025, lng:-86.73054, dir:"112 J Street", tel:"+1 219 324 5000", horas:[8.0, 14.0], nota:"Dato de OpenStreetMap"},
  {n:"La Porte Animal Hospital", cat:"vet", lat:41.596698, lng:-86.744201, tel:"+1 219-362-2612", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pine Lake Animal Hospital", cat:"vet", lat:41.619918, lng:-86.737578, dir:"330 Pine Lake Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Jane Bernard Animal Adoption Center", cat:"refugio", lat:41.591998, lng:-86.752279, dir:"2855 IN-2", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.623195, lng:-86.691097, dir:"1406 East Lincolnway", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "la-salle-illinois": {nombre:"La Salle", centro:[41.333368, -89.09175], tz:"America/Chicago", lugares:[
  {n:"Jenny's Puppy Cuts", cat:"peluqueria", lat:41.328481, lng:-89.093467, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "la-vista": {nombre:"La Vista", centro:[41.183268, -96.032404], tz:"America/Chicago", lugares:[
  {n:"Pets Earth", cat:"tienda", lat:41.175853, lng:-96.026965, dir:"8410 South 75th Avenue", tel:"+14029642600", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Papillion Animal Hospital", cat:"vet", lat:41.175853, lng:-96.027319, dir:"8410 South 73rd Plaza", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Urgent Pet Care of Papillion", cat:"vet", lat:41.175005, lng:-96.025321, dir:"8455 South 73rd Plaza", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"La Vista Dog Park", cat:"parque", lat:41.179057, lng:-96.054759, dir:"7120 South 92nd Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ladysmith-wisconsin": {nombre:"Ladysmith", centro:[45.464252, -91.100864], tz:"America/Chicago", lugares:[
  {n:"Ladysmith Leash-Free Dog Park", cat:"parque", lat:45.453745, lng:-91.099008, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lafayette-indiana": {nombre:"Lafayette", centro:[40.419123, -86.891901], tz:"America/Chicago", lugares:[
  {n:"WEA Animal Hospital", cat:"vet", lat:40.368748, lng:-86.875273, dir:"3613 South 18th Street", tel:"+1-765-838-0954", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Aquarium World", cat:"tienda", lat:40.415418, lng:-86.861043, dir:"116 South Earl Avenue", tel:"+1-765-447-7371", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.400288, lng:-86.853113, dir:"3500 IN-38", tel:"+1 765-447-3306", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Simon & Halle's Pet Boutique", cat:"peluqueria", lat:40.366463, lng:-86.8737, dir:"1909 Veterans Memorial Parkway South", tel:"+1-765-838-1020", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Paw Prints Animal Hospital", cat:"vet", lat:40.385414, lng:-86.904111, dir:"2917 Old US Highway 231", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsburgh Pet Care", cat:"vet", lat:40.444531, lng:-86.868137, dir:"2506 Schuyler Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tricia's Dog House", cat:"tienda", lat:40.416965, lng:-86.878895, dir:"20 South 16th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Lafayette Animal Hospital", cat:"vet", lat:40.418061, lng:-86.850288, dir:"3532 South Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tippecanoe Animal Hospital", cat:"vet", lat:40.391398, lng:-86.841504, dir:"3818 State Road 38 East", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Columbian Park Zoo", cat:"zoo", lat:40.412953, lng:-86.870493, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.420609, lng:-86.855672, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shamrock Dog Park", cat:"parque", lat:40.408164, lng:-86.903119, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Overture Flats Dog Park", cat:"parque", lat:40.420698, lng:-86.817694, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Pets Animal Hospital", cat:"vet", lat:40.427017, lng:-86.877103, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"4 Precious Paws", cat:"vet", lat:40.403169, lng:-86.851909, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lafayette-ohio": {nombre:"Lafayette", centro:[40.759265, -83.948521], tz:"America/New_York", lugares:[
  {n:"Dawn's Pet Grooming", cat:"peluqueria", lat:40.759963, lng:-83.948718, dir:"115 North High Street", tel:"+1 419-649-6864", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lake-andes": {nombre:"Lake Andes", centro:[43.156382, -98.54147], tz:"America/Chicago", lugares:[
  {n:"Andes Veterinary Clinic", cat:"vet", lat:43.153986, lng:-98.544373, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-angelus": {nombre:"Lake Angelus", centro:[42.700669, -83.314282], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:42.710396, lng:-83.309196, dir:"4820 South Baldwin Road", tel:"+1 248-391-1599", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lake-ann": {nombre:"Lake Ann", centro:[44.723889, -85.843139], tz:"America/New_York", lugares:[
  {n:"Northwind Stables LLC", cat:"refugio", lat:44.731131, lng:-85.878664, dir:"17845 Almira Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Acorn Acres", cat:"zoo", lat:44.730672, lng:-85.871809, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-delton": {nombre:"Lake Delton", centro:[43.601091, -89.793736], tz:"America/Chicago", lugares:[
  {n:"International Crane Foundation", cat:"zoo", lat:43.55042, lng:-89.750822, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-elmo": {nombre:"Lake Elmo", centro:[45.002169, -92.880186], tz:"America/Chicago", lugares:[
  {n:"Elmo's Pup Park", cat:"parque", lat:45.009275, lng:-92.920842, dir:"4259 Jamaca Ave N", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-forest-illinois": {nombre:"Lake Forest", centro:[42.258646, -87.840705], tz:"America/Chicago", lugares:[
  {n:"Lake Forest Animal Clinic", cat:"vet", lat:42.264988, lng:-87.844327, dir:"1391 North Western Avenue", tel:"+1-847-234-4011", horas:[8.5, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Shaggy Dog Shop, Inc", cat:"peluqueria", lat:42.264042, lng:-87.844056, dir:"1339 North Western Avenue", tel:"+1-847-234-2383", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"PetPeople", cat:"tienda", lat:42.251248, lng:-87.841324, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-geneva": {nombre:"Lake Geneva", centro:[42.591804, -88.434537], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:42.591033, lng:-88.415057, dir:"200 Edwards Boulevard", tel:"+1 262-248-2572", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Lake Geneva Veterinary Clinic", cat:"vet", lat:42.533214, lng:-88.441922, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-in-the-hills": {nombre:"Lake in the Hills", centro:[42.181691, -88.330362], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:42.166079, lng:-88.339327, dir:"702 South Randall Road", tel:"+1 847-854-1501", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Randall Plaza", cat:"vet", lat:42.182473, lng:-88.336999, dir:"61 Polaris Drive", tel:"+1-815-444-8560", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Bentley's Pet Stuff", cat:"tienda", lat:42.154486, lng:-88.336495, dir:"1492 Randall Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.176672, lng:-88.336815, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-isabella-michigan": {nombre:"Lake Isabella", centro:[43.643139, -84.996212], tz:"America/New_York", lugares:[
  {n:"Pol Veterinary Services", cat:"vet", lat:43.654421, lng:-84.92702, dir:"3959 West Jordan Road", tel:"+1 989 644 5044", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lake-ozark": {nombre:"Lake Ozark", centro:[38.191533, -92.644115], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:38.159037, lng:-92.60168, dir:"3936 Jr Prewitt Parkway", tel:"+1 573-302-4982", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Osage Animal Hospital", cat:"vet", lat:38.150408, lng:-92.600976, dir:"835 State Highway 42", tel:"+1-573-348-1788", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-quivira": {nombre:"Lake Quivira", centro:[39.037516, -94.766736], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.010306, lng:-94.762654, dir:"15200 Shawnee Mission Parkway", tel:"+1 913-248-9300", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSuites", cat:"refugio", lat:39.010134, lng:-94.8147, dir:"19800 West 65th Terrace", tel:"+1-913-675-2378", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-shore-minnesota": {nombre:"Lake Shore", centro:[46.485523, -94.360557], tz:"America/Chicago", lugares:[
  {n:"The Babinski Foundation", cat:"refugio", lat:46.52788, lng:-94.43253, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-station": {nombre:"Lake Station", centro:[41.575037, -87.238925], tz:"America/Chicago", lugares:[
  {n:"Humane Society Northwest Indiana", cat:"refugio", lat:41.597034, lng:-87.26333, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-tapawingo": {nombre:"Lake Tapawingo", centro:[39.021395, -94.311616], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:39.045139, lng:-94.366842, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-waukomis": {nombre:"Lake Waukomis", centro:[39.232225, -94.638013], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.25684, lng:-94.653763, dir:"8970 Northwest Skyview Avenue", tel:"+1 816-746-5392", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:39.253432, lng:-94.653115, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barry Road Animal Hospital", cat:"vet", lat:39.245625, lng:-94.62589, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow Kansas City Northland", cat:"refugio", lat:39.249581, lng:-94.632552, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-zurich": {nombre:"Lake Zurich", centro:[42.196969, -88.093411], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:42.189335, lng:-88.110065, dir:"787 West Main Street", tel:"+1-847-550-6760", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Hospital", cat:"vet", lat:42.182122, lng:-88.0843, dir:"917 Rand Road", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Oakview Pet Resort", cat:"refugio", lat:42.189957, lng:-88.110095, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lakeland-minnesota": {nombre:"Lakeland", centro:[44.955056, -92.77091], tz:"America/Chicago", lugares:[
  {n:"Lakeland Veterinary Hospital", cat:"vet", lat:44.947725, lng:-92.771598, dir:"92 Saint Croix Trail South", tel:"+1 651 436 6146", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lakemore": {nombre:"Lakemore", centro:[41.02089, -81.435946], tz:"America/New_York", lugares:[
  {n:"The Groom Room", cat:"peluqueria", lat:40.99368, lng:-81.461568, dir:"2500 Mayfair Road", tel:"+1-330-819-5242", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lakeville-indiana": {nombre:"Lakeville", centro:[41.524492, -86.27334], tz:"America/New_York", lugares:[
  {n:"Club Purr", cat:"tienda", lat:41.540863, lng:-86.291057, dir:"65600 Maple Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lakeville-minnesota": {nombre:"Lakeville", centro:[44.650051, -93.243279], tz:"America/Chicago", lugares:[
  {n:"Southfork Animal Hopsital", cat:"vet", lat:44.696821, lng:-93.285461, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ritter Farm Dog Park", cat:"parque", lat:44.668379, lng:-93.295495, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lakewood-illinois": {nombre:"Lakewood", centro:[42.22919, -88.355086], tz:"America/Chicago", lugares:[
  {n:"Woodbine Hill Kennel", cat:"refugio", lat:42.226378, lng:-88.40281, dir:"10425 Woodbine Road", tel:"+1-815-455-3601", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Healthy Paws Animal Hospital", cat:"vet", lat:42.202112, lng:-88.382779, dir:"4581 Princeton Lane", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lakewood-minnesota": {nombre:"Lakewood", centro:[46.889091, -92.004141], tz:"America/Chicago", lugares:[
  {n:"North Shore Veterinary Hospital", cat:"vet", lat:46.838676, lng:-92.009053, dir:"6001 East Superior Street", tel:"+1-218-525-1937", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jean Duluth Dog Park", cat:"parque", lat:46.873551, lng:-92.057408, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dogs", cat:"parque", lat:46.87315, lng:-92.056646, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Grooming Shack", cat:"peluqueria", lat:46.829749, lng:-92.028469, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lakewood-ohio": {nombre:"Lakewood", centro:[41.481993, -81.798191], tz:"America/New_York", lugares:[
  {n:"VCA Lakewood Animal Hospital", cat:"vet", lat:41.476876, lng:-81.798924, dir:"14587 Madison Avenue", tel:"+1-216-226-0400", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.483923, lng:-81.800406, dir:"14839 Detroit Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Merry-Go-Hound", cat:"refugio", lat:41.484945, lng:-81.78193, dir:"13308 Detroit Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scales and Tales", cat:"tienda", lat:41.485421, lng:-81.78724, dir:"13618 Detroit Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Inn The DogHouse", cat:"refugio", lat:41.479385, lng:-81.769198, dir:"1548 West 117th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet's General Store", cat:"tienda", lat:41.477378, lng:-81.814736, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bubbles & Bows Dog Grooming", cat:"peluqueria", lat:41.484819, lng:-81.780364, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet-Tique", cat:"tienda", lat:41.486316, lng:-81.760682, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pretty Coat Junction", cat:"peluqueria", lat:41.477159, lng:-81.801607, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waggs n' Whiskers", cat:"peluqueria", lat:41.477019, lng:-81.793878, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lakewood-wisconsin": {nombre:"Lakewood", centro:[45.300694, -88.524174], tz:"America/Chicago", lugares:[
  {n:"Lakewood Zoo", cat:"zoo", lat:45.252875, lng:-88.516409, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lambs-grove": {nombre:"Lambs Grove", centro:[41.700531, -93.080202], tz:"America/Chicago", lugares:[
  {n:"Newton Dog Park", cat:"parque", lat:41.698574, lng:-93.093491, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lamoni": {nombre:"Lamoni", centro:[40.622808, -93.934252], tz:"America/Chicago", lugares:[
  {n:"Lamoni Veternary Clinic", cat:"vet", lat:40.623993, lng:-93.92405, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lancaster-ohio": {nombre:"Lancaster", centro:[39.713675, -82.599329], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.729633, lng:-82.616598, dir:"1731 North Memorial Drive", tel:"+1 740-205-2156", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Fairfield County Dog Adoption Center & Shelter", cat:"refugio", lat:39.742293, lng:-82.587569, dir:"1715 Granville Pike", tel:"+1-740-687-3647", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Morris Animal Hospital", cat:"vet", lat:39.739959, lng:-82.569216, dir:"1610 Sheridan Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.738277, lng:-82.638542, dir:"Ety Road Northwest", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Valuevet", cat:"vet", lat:39.725622, lng:-82.632948, dir:"1987 West Fair Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fairfield Area Humane Society", cat:"refugio", lat:39.742799, lng:-82.587871, dir:"1721 Granville Pike", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Fairfield Animal Hospital", cat:"vet", lat:39.715926, lng:-82.555731, dir:"1983 East Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shear Delight", cat:"peluqueria", lat:39.726502, lng:-82.609355, dir:"1112 North Memorial Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:39.730134, lng:-82.623677, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lancaster Animal Clinic", cat:"vet", lat:39.73205, lng:-82.620907, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Just A Cut Above The Rest", cat:"peluqueria", lat:39.717254, lng:-82.601486, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fair Ave Veterinary Clinic", cat:"vet", lat:39.725295, lng:-82.628691, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SUPER GROOMS", cat:"peluqueria", lat:39.719292, lng:-82.598658, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lancaster-wisconsin": {nombre:"Lancaster", centro:[42.847742, -90.71023], tz:"America/Chicago", lugares:[
  {n:"Grant CountyVveterinary Services", cat:"vet", lat:42.841015, lng:-90.720778, dir:"1105 Beetown Road", tel:"+1-608-723-2504", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lancaster Veterinary Clinic", cat:"vet", lat:42.845927, lng:-90.69149, dir:"222 Roosevelt Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "landen": {nombre:"Landen", centro:[39.31202, -84.283007], tz:"America/New_York", lugares:[
  {n:"TLC Pet Care Centers East Branch", cat:"vet", lat:39.290241, lng:-84.300792, dir:"Montgomery Road", tel:"+1-513-683-2300", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.320016, lng:-84.315689, dir:"8175 Arbor Square Drive", tel:"+1 513-336-0365", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Jack’s Aquarium and Pets", cat:"tienda", lat:39.295118, lng:-84.305785, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The K9 Company", cat:"refugio", lat:39.303357, lng:-84.284172, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Karen’s K-9 Korner", cat:"peluqueria", lat:39.305283, lng:-84.279658, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kings Veterinary Hospital", cat:"vet", lat:39.303437, lng:-84.282147, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Four Paws", cat:"refugio", lat:39.310645, lng:-84.272318, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Landen Veterinary Hospital", cat:"vet", lat:39.305582, lng:-84.280074, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Red Dog Pet Resort & Spa", cat:"refugio", lat:39.33317, lng:-84.280507, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "landfall": {nombre:"Landfall", centro:[44.950799, -92.976603], tz:"America/Chicago", lugares:[
  {n:"Homey Gnome Veterinary Clinic", cat:"vet", lat:44.962791, lng:-92.963719, dir:"7013 10th Street North", tel:"+1 651-202-3388", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Emergency & Referral Center of Minnesota - Emergency and Specialty", cat:"vet", lat:44.965402, lng:-92.954809, dir:"1160 Helmo Avenue North", tel:"+1-651-501-3766", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Century Animal Clinic", cat:"vet", lat:44.966632, lng:-92.985178, dir:"839 Century Avenue North", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Snake Discovery: A Reptile Experience", cat:"zoo", lat:44.966473, lng:-92.985581, dir:"931 Century Avenue North", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hudson Road Animal Hospital", cat:"vet", lat:44.947679, lng:-92.94118, dir:"8154 Hudson Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Battle Creek Dog Park", cat:"parque", lat:44.937086, lng:-93.002343, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scenic Hills Animal Hospital", cat:"vet", lat:44.94893, lng:-93.018185, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lanesville-indiana": {nombre:"Lanesville", centro:[38.236912, -85.986032], tz:"America/New_York", lugares:[
  {n:"Unleashed Veterinary Care", cat:"vet", lat:38.260172, lng:-85.935763, dir:"1849 State Road 11", tel:"+18129523643", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lannon": {nombre:"Lannon", centro:[43.149851, -88.163921], tz:"America/Chicago", lugares:[
  {n:"The Hounds and Tap", cat:"parque", lat:43.11968, lng:-88.129587, dir:"W175N5645 Technology Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lansing-kansas": {nombre:"Lansing", centro:[39.248716, -94.900071], tz:"America/Chicago", lugares:[
  {n:"Khaki Hound & Camo Kitty", cat:"peluqueria", lat:39.273957, lng:-94.897724, dir:"4501 Commercial Place", tel:"+1-913-704-5090", horas:[7.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Leavenworth County Humane Society", cat:"refugio", lat:39.230902, lng:-94.90084, dir:"100 West Gilman Road", tel:"+1 913-250-0506", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pioneer Animal Hospital", cat:"vet", lat:39.281807, lng:-94.900918, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lansing Veterinary Hospital", cat:"vet", lat:39.251818, lng:-94.901089, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lansing-michigan": {nombre:"Lansing", centro:[42.733825, -84.55463], tz:"America/New_York", lugares:[
  {n:"Wag 'N Tails", cat:"peluqueria", lat:42.703443, lng:-84.537138, dir:"2802 Alpha Access St", tel:"+1-517-482-7799", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Preuss Pets", cat:"tienda", lat:42.747079, lng:-84.547185, dir:"1127 North Cedar Street", tel:"+1 517 999 7387", horas:[12.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Lake Lansing Road Animal Clinic", cat:"vet", lat:42.76095, lng:-84.526392, dir:"1615 Lake Lansing Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"DogSpot", cat:"refugio", lat:42.733018, lng:-84.544035, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Potter Park Zoo", cat:"zoo", lat:42.717805, lng:-84.527648, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Soldan's Dog Park", cat:"parque", lat:42.700899, lng:-84.527497, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lansing-ohio": {nombre:"Lansing", centro:[40.075628, -80.790086], tz:"America/New_York", lugares:[
  {n:"New Horizon Animal Hospital", cat:"vet", lat:40.065403, lng:-80.836329, tel:"+1 740 695 8387", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lapeer": {nombre:"Lapeer", centro:[43.051416, -83.318834], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:43.03901, lng:-83.320189, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lapeer County Animal Control", cat:"refugio", lat:43.051485, lng:-83.332628, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lapeer Dog Park", cat:"parque", lat:43.056564, lng:-83.30744, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "larned": {nombre:"Larned", centro:[38.180569, -99.098713], tz:"America/Chicago", lugares:[
  {n:"Larned Veterinary Clinic, PA", cat:"vet", lat:38.195365, lng:-99.114692, dir:"1443 120th Ave", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "larwill": {nombre:"Larwill", centro:[41.180601, -85.625539], tz:"America/New_York", lugares:[
  {n:"Mud Creek Kennela", cat:"refugio", lat:41.17106, lng:-85.635543, dir:"685 North State Road 5", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "lathrup-village": {nombre:"Lathrup Village", centro:[42.496424, -83.222707], tz:"America/New_York", lugares:[
  {n:"Somerset Dog Grooming", cat:"peluqueria", lat:42.510708, lng:-83.222285, dir:"30110 Southfield Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lauderdale": {nombre:"Lauderdale", centro:[44.994328, -93.201874], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:45.004874, lng:-93.230445, dir:"1640 New Brighton Boulevard", tel:"+1 612-788-7045", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Minnepau Veterinary Clinic", cat:"vet", lat:44.968923, lng:-93.198012, dir:"918 Raymond Avenue", tel:"+1-612-314-3969", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"East Lake Animal Clinic", cat:"vet", lat:44.948581, lng:-93.213642, dir:"4108 East Lake Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:45.004883, lng:-93.230241, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lauderdale-wisconsin": {nombre:"Lauderdale", centro:[42.765291, -88.555656], tz:"America/Chicago", lugares:[
  {n:"Small Dog Park", cat:"parque", lat:42.725226, lng:-88.47092, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:42.725476, lng:-88.470346, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lawrence": {nombre:"Lawrence", centro:[39.838652, -86.025261], tz:"America/New_York", lugares:[
  {n:"30th Street Animal Hospital", cat:"vet", lat:39.811502, lng:-86.017623, dir:"8550 East 30th Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lawrence-kansas": {nombre:"Lawrence", centro:[38.971914, -95.23594], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.933204, lng:-95.262335, dir:"2720 Iowa Street", tel:"+1 785-312-3009", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:38.936926, lng:-95.260053, dir:"2540 Iowa Street", tel:"+1-785-856-0806", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Sunflower Natural Pet Supplies", cat:"tienda", lat:38.967186, lng:-95.261273, dir:"919 Iowa Street", tel:"+1-785-749-7387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet-Agrees", cat:"peluqueria", lat:38.937734, lng:-95.263084, dir:"2201 West 25th Street", tel:"+1-785-749-2275", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jarrett Small Animal Clinic", cat:"vet", lat:38.938454, lng:-95.26308, dir:"2201 West 25th Street", tel:"+1-785-749-2993", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Art of the Groom", cat:"peluqueria", lat:38.949748, lng:-95.235518, dir:"1906 Massachusetts Street", tel:"+1-785-423-2041", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet World", cat:"tienda", lat:38.941818, lng:-95.242218, dir:"711 West 23rd Street", tel:"+1-785-841-7476", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.927081, lng:-95.261142, dir:"3115 Iowa Street", tel:"+1 785-865-2300", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Cat Clinic of Lawrence", cat:"vet", lat:38.953428, lng:-95.236303, dir:"1701 Massachusetts Street", tel:"+1-785-856-6369", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Lawrence", cat:"vet", lat:38.971012, lng:-95.251006, dir:"701 Michigan Street", tel:"+1-785-842-0609", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Lewis Veterinary Clinic", cat:"vet", lat:38.97129, lng:-95.274106, dir:"3101 West 6th Street", tel:"+1-785-843-1901", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Lawrence Veterinary Hospital", cat:"vet", lat:38.942241, lng:-95.27736, dir:"3210 Clinton Parkway Court", tel:"+17858419956", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Clinton Parkway Animal Hospital", cat:"vet", lat:38.943403, lng:-95.2975, dir:"4340 Clinton Parkway", tel:"+1-785-841-3131", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Lawrence Humane Society", cat:"refugio", lat:38.95091, lng:-95.211852, dir:"1805 East 19th Street", tel:"+1-785-843-6835", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Gentle Care Animal Hospital", cat:"vet", lat:38.971018, lng:-95.283286, dir:"601 Kasold Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof's Play and Stay", cat:"refugio", lat:38.942255, lng:-95.253807, dir:"1519 West 23rd Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lucky Dog", cat:"tienda", lat:38.966264, lng:-95.236173, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lucky Dog", cat:"tienda", lat:38.964589, lng:-95.236143, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riverfront Park Off Leash Dog Area", cat:"parque", lat:38.997929, lng:-95.237789, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lawrenceburg": {nombre:"Lawrenceburg", centro:[39.090891, -84.84995], tz:"America/New_York", lugares:[
  {n:"Lawrenceburg Dog Park", cat:"parque", lat:39.095612, lng:-84.854297, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lawton": {nombre:"Lawton", centro:[42.478763, -96.184078], tz:"America/Chicago", lugares:[
  {n:"Pawsitive Pet Services", cat:"refugio", lat:42.4757, lng:-96.232069, dir:"1911 Highway 20", tel:"+1-712-944-5414", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "le-claire": {nombre:"Le Claire", centro:[41.598644, -90.343462], tz:"America/Chicago", lugares:[
  {n:"Snips & Nails & Puppy Dog Tails", cat:"peluqueria", lat:41.598425, lng:-90.345261, dir:"200 Jones Street", tel:"+15632711367", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "le-mars": {nombre:"Le Mars", centro:[42.792151, -96.166299], tz:"America/Chicago", lugares:[
  {n:"Gentle Paws Veterinary", cat:"vet", lat:42.774248, lng:-96.163755, dir:"1575 2nd Avenue Southeast", tel:"+1-712-501-5037", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "leadington": {nombre:"Leadington", centro:[37.840329, -90.491791], tz:"America/Chicago", lugares:[
  {n:"Park Hills Vet", cat:"vet", lat:37.842059, lng:-90.494483, dir:"107 Strauss Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "leavenworth-kansas": {nombre:"Leavenworth", centro:[39.311326, -94.922759], tz:"America/Chicago", lugares:[
  {n:"Water's Feed", cat:"tienda", lat:39.319829, lng:-94.926617, dir:"909 Miami Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog & Cat Clinic", cat:"vet", lat:39.327827, lng:-94.917685, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Broadway Veterinary Clinic", cat:"vet", lat:39.327699, lng:-94.923067, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waggin' Tails Dog Park", cat:"parque", lat:39.287535, lng:-94.895831, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "leawood": {nombre:"Leawood", centro:[38.966673, -94.616901], tz:"America/Chicago", lugares:[
  {n:"Treats Unleashed", cat:"tienda", lat:38.912342, lng:-94.635943, dir:"4209 West 119th Street", tel:"+1-913-451-2000", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.882408, lng:-94.660377, dir:"6401 West 135th Street", tel:"+1 913-563-3002", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:38.956178, lng:-94.628625, dir:"3703 West 95th Street", tel:"+19132585537", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Nall Hills Animal Hospital", cat:"vet", lat:38.954977, lng:-94.651095, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fox Hill Veterinary Clinic", cat:"vet", lat:38.9349, lng:-94.6367, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Leawood Plaza Animal Hospital", cat:"vet", lat:38.9072, lng:-94.6088, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camelot Court Animal Clinic", cat:"vet", lat:38.91389, lng:-94.637053, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:38.916141, lng:-94.638187, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Urgent Vet", cat:"vet", lat:38.880059, lng:-94.667287, horas:[15.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"Vetco", cat:"vet", lat:38.88241, lng:-94.660521, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Leawoof Dog Park", cat:"parque", lat:38.933382, lng:-94.611534, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lebanon-indiana": {nombre:"Lebanon", centro:[40.048374, -86.469168], tz:"America/Chicago", lugares:[
  {n:"The Lebanon Dog Park", cat:"parque", lat:40.037624, lng:-86.460196, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lebanon-ohio": {nombre:"Lebanon", centro:[39.435337, -84.202992], tz:"America/New_York", lugares:[
  {n:"Barkers Barbershop for Dogs", cat:"peluqueria", lat:39.434492, lng:-84.207508, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ida Juris Bennett Dog Park", cat:"parque", lat:39.418261, lng:-84.202416, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "leesburg-indiana": {nombre:"Leesburg", centro:[41.33199, -85.849992], tz:"America/New_York", lugares:[
  {n:"Community Animal Hospital", cat:"vet", lat:41.289048, lng:-85.856031, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lemont": {nombre:"Lemont", centro:[41.673715, -88.001626], tz:"America/Chicago", lugares:[
  {n:"Archer Veterinary Clinic", cat:"vet", lat:41.637382, lng:-88.007765, dir:"13731 Cokes Road", tel:"+1-630-257-5121", horas:[8.0, 14.0], nota:"Dato de OpenStreetMap"},
  {n:"Ludwig's Feed Store", cat:"tienda", lat:41.651166, lng:-87.943089, dir:"13205 West 131st Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawz & Klawz Pet Salon", cat:"tienda", lat:41.67569, lng:-87.997725, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Bark Dog Park", cat:"parque", lat:41.656998, lng:-88.015706, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lenexa": {nombre:"Lenexa", centro:[38.969746, -94.784584], tz:"America/Chicago", lugares:[
  {n:"Dog House Grooming", cat:"peluqueria", lat:38.960409, lng:-94.742595, dir:"13506 West 93rd Street", tel:"+19135994222", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Perimeter Veterinary Center", cat:"vet", lat:38.977454, lng:-94.861255, dir:"23734 West 83rd Terrace", tel:"+1 913 742 8387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Falcon Valley Animal Hospital", cat:"vet", lat:38.944519, lng:-94.814221, dir:"10111 Stevenson Street", tel:"+1-913-764-7387", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Canine Club at Falcon Valley", cat:"refugio", lat:38.94463, lng:-94.814158, dir:"10101 Stevenson Street", tel:"+1-913-764-7386", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Parkway Animal Hospital", cat:"vet", lat:38.969985, lng:-94.761579, dir:"8734 Lackman Road", tel:"+1-913-492-5300", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Country Hill Animal Clinic", cat:"vet", lat:38.970098, lng:-94.765965, dir:"15585 West 87th Street Parkway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawzen Pet Salon", cat:"peluqueria", lat:38.962414, lng:-94.739193, dir:"9139 Caenen Lake Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Store & Grooming", cat:"tienda", lat:38.972055, lng:-94.7356, dir:"12902 West 87th Street Parkway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Allcare Animal Hospital", cat:"vet", lat:38.997301, lng:-94.780526, dir:"7252 Renner Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cat Clinic of Johnson County", cat:"vet", lat:38.957751, lng:-94.74188, tel:"+1-913-541-0478", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stoll Memorial Dog Park", cat:"parque", lat:38.915093, lng:-94.731564, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"WaterCrest Dog Park", cat:"parque", lat:38.975059, lng:-94.777212, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shawnee Mission Park Off-Leash Dog Park", cat:"parque", lat:38.979269, lng:-94.803976, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shawnee Mission Park Dog Beach", cat:"parque", lat:38.981719, lng:-94.806088, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "leroy-michigan": {nombre:"LeRoy", centro:[44.038069, -85.45394], tz:"America/New_York", lugares:[
  {n:"Leroy Milling Co Farm & Garden", cat:"tienda", lat:44.037879, lng:-85.453078, dir:"107 North Kent Street", tel:"+1-231-768-4441", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "leslie-michigan": {nombre:"Leslie", centro:[42.451172, -84.431939], tz:"America/New_York", lugares:[
  {n:"Leslie Veterinary Clinic", cat:"vet", lat:42.450558, lng:-84.432345, dir:"130 South Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Two Paws Up Pet Salon", cat:"peluqueria", lat:42.451662, lng:-84.440833, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lewisburg-ohio": {nombre:"Lewisburg", centro:[39.846163, -84.539674], tz:"America/New_York", lugares:[
  {n:"Diamond Kennels", cat:"refugio", lat:39.875837, lng:-84.505582, dir:"7775 Swamp Creek Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lewisville-indiana": {nombre:"Lewisville", centro:[39.806713, -85.352747], tz:"America/New_York", lugares:[
  {n:"Barton's Pet Resort", cat:"refugio", lat:39.744259, lng:-85.3809, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lexington-minnesota": {nombre:"Lexington", centro:[45.138704, -93.168558], tz:"America/Chicago", lugares:[
  {n:"Stone Mountain Pet Lodge", cat:"tienda", lat:45.150658, lng:-93.191037, dir:"9935 Radisson Road Northeast", horas:[6.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Rice Creek North Regional Trail Off Leash Dog Area", cat:"parque", lat:45.116966, lng:-93.16583, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "liberty-missouri": {nombre:"Liberty", centro:[39.246479, -94.419079], tz:"America/Chicago", lugares:[
  {n:"Veterinary Center of Liberty", cat:"vet", lat:39.24386, lng:-94.439232, dir:"1127 West Kansas Street", tel:"+1-816-781-0778", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Fur Babies Salon", cat:"peluqueria", lat:39.268939, lng:-94.451833, dir:"9754 North Ash Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.236831, lng:-94.436277, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"EarthWise Pet", cat:"tienda", lat:39.268857, lng:-94.449834, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eagle Animal Hospital at Liberty", cat:"vet", lat:39.268214, lng:-94.446337, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ark Animal Hospital", cat:"vet", lat:39.236326, lng:-94.431123, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "libertyville": {nombre:"Libertyville", centro:[42.283079, -87.95313], tz:"America/Chicago", lugares:[
  {n:"Daybreak Farm", cat:"refugio", lat:42.326332, lng:-87.942668, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.261123, lng:-87.946594, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bentley's Pet Stuff", cat:"tienda", lat:42.288406, lng:-87.954796, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lambs Farm Petting Zoo and Amusement Park", cat:"zoo", lat:42.278204, lng:-87.911432, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Independence Grove Off-Leash Dog Area", cat:"parque", lat:42.316995, lng:-87.960061, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lilydale": {nombre:"Lilydale", centro:[44.916077, -93.126053], tz:"America/Chicago", lugares:[
  {n:"Woody's Pet Food Deli", cat:"tienda", lat:44.921898, lng:-93.167288, dir:"647 Snelling Avenue South", tel:"+1-651-493-7269", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bubbles & Ecouture", cat:"peluqueria", lat:44.919426, lng:-93.101921, dir:"883 Smith Avenue South", tel:"+1-651-457-1816", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grand Groomers", cat:"peluqueria", lat:44.939744, lng:-93.140485, dir:"956 Grand Avenue", tel:"+1 651 2271733", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grand Avenue Veterinary Center", cat:"vet", lat:44.939735, lng:-93.148283, dir:"1140 Grand Avenue", tel:"+1 651 2243038", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Feist Animal Hospital", cat:"vet", lat:44.948231, lng:-93.160829, dir:"1430 Marshall Avenue", tel:"+1-651-646-7257", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Days Daycare & Boarding", cat:"refugio", lat:44.939948, lng:-93.174874, tel:"+16516993905", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cat aMEWsment", cat:"tienda", lat:44.940073, lng:-93.126047, dir:"619 Grand Avenue", horas:[11.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Lilydale Off-Leash Dog Park", cat:"parque", lat:44.915448, lng:-93.129265, dir:"1700 Lilydale Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sandy's Dog and Cat Grooming and Boarding", cat:"peluqueria", lat:44.930406, lng:-93.134071, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fort Road Animal Clinic", cat:"vet", lat:44.921896, lng:-93.134968, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lima-ohio": {nombre:"Lima", centro:[40.739978, -84.105006], tz:"America/New_York", lugares:[
  {n:"West Central Ohio Veterinary Emergency Services", cat:"vet", lat:40.731571, lng:-84.048454, dir:"3077 Harding Highway", tel:"+1 419-221-0269", horas:[0.0, 8.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.750322, lng:-84.152314, dir:"2430 Allentown Road", tel:"+1 567-242-6314", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"That Place for Pets", cat:"peluqueria", lat:40.753893, lng:-84.087698, dir:"1299 Findlay Road", tel:"+1 419-339-3208", horas:[6.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.751852, lng:-84.149571, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lincoln-illinois": {nombre:"Lincoln", centro:[40.148135, -89.363657], tz:"America/Chicago", lugares:[
  {n:"Animal Hospital", cat:"vet", lat:40.157598, lng:-89.35047, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lincoln-nebraska": {nombre:"Lincoln", centro:[40.808886, -96.707775], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:40.738847, lng:-96.680313, dir:"2801 Pine Lake Road", tel:"+1 402-421-7012", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pitt’s Veterinary Hospital", cat:"vet", lat:40.769438, lng:-96.688516, dir:"2225 Nebraska Parkway", tel:"+1 402 423 4120", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Fit Canine", cat:"peluqueria", lat:40.82122, lng:-96.624672, dir:"820 North 70th Street", tel:"+1-402-467-3100", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Superior Veterinary Care", cat:"vet", lat:40.858173, lng:-96.67343, dir:"4640 Bair Avenue", tel:"+1-402-438-4500", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Optimum Veterinary Medical Group, PC", cat:"vet", lat:40.830999, lng:-96.603929, dir:"8531 Lexington Avenue", tel:"+1-402-466-1383", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Bird Habitat Store", cat:"tienda", lat:40.826498, lng:-96.652611, dir:"4900 Dudley Street", tel:"+1-402-464-4055", horas:[12.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Stransky Veterinary Center", cat:"vet", lat:40.81306, lng:-96.645555, dir:"5505 O Street", tel:"+1-402-473-5370", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Cotner Pet Care", cat:"vet", lat:40.801147, lng:-96.649996, dir:"1265 South Cotner Boulevard", tel:"+1-402-904-4492", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"The Groom Room", cat:"peluqueria", lat:40.800979, lng:-96.651011, dir:"1265 South Cotner Boulevard", tel:"+1-402-486-4486", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Highlands Animal Hospital", cat:"vet", lat:40.865822, lng:-96.723553, dir:"5521 Northwest 1st Street", tel:"+1-402-476-5800", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Nebraska Animal Medical Center", cat:"vet", lat:40.754518, lng:-96.643, dir:"5720 Old Cheney Road", tel:"+1 402 423 9100", horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Vintage Heights Veterinary Hospital", cat:"vet", lat:40.755613, lng:-96.605668, dir:"8400 Old Cheney Road", tel:"+1-402-489-0501", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wachal Pet Health Center", cat:"vet", lat:40.813322, lng:-96.742582, dir:"101 Southwest 14th Place", tel:"+1-402-477-7877", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Off Leash Dog Bar", cat:"parque", lat:40.811107, lng:-96.692869, dir:"1975 M Street", tel:"+1-531-500-1265", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.863683, lng:-96.679224, dir:"5200 North 27th Street", tel:"+1 402-438-1133", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Paws 4 Fun", cat:"parque", lat:40.81462, lng:-96.657729, dir:"222 North 44th Street", tel:"+1-402-802-1738", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Belmont Veterinary Center", cat:"vet", lat:40.843093, lng:-96.688628, dir:"2200 Cornhusker Highway", tel:"+1 402 435 4947", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.757578, lng:-96.640093, dir:"5450 South 56th Street", tel:"+1 402-420-1755", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.813004, lng:-96.654872, dir:"4701 O Street", tel:"+1-402-484-7511", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Capitol Animal Clinic", cat:"vet", lat:40.818831, lng:-96.630849, dir:"633 North 66th Street", tel:"+1-402-464-1382", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Clock Tower Animal Clinic", cat:"vet", lat:40.81765, lng:-96.630011, dir:"520 North 66th Street", tel:"+1-402-489-6228", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Jacobson Veterinary Clinic", cat:"vet", lat:40.813207, lng:-96.661066, dir:"4145 O Street", tel:"+1-402-327-0705", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Suds N' Scissors", cat:"peluqueria", lat:40.838755, lng:-96.653948, dir:"2621 North 48th Street", tel:"+1-402-466-7517", horas:[7.5, 15.5], nota:"Dato de OpenStreetMap"},
  {n:"Vondra Veterinary Clinic", cat:"vet", lat:40.785129, lng:-96.753784, dir:"2400 West Van Dorn Street", tel:"+1-402-477-1113", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Roper East Dog Run", cat:"parque", lat:40.841337, lng:-96.710299, dir:"2620-3098 North 7th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bailey’s Deluxe Pet Care", cat:"refugio", lat:40.769494, lng:-96.688297, tel:"+1 402 477 3327", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A-4 Animal Hospital", cat:"vet", lat:40.792016, lng:-96.680554, dir:"2780 South Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Ridge Animal Clinic", cat:"vet", lat:40.738938, lng:-96.677775, dir:"7140 South 29th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pieloch Pet Adoption Center", cat:"refugio", lat:40.744672, lng:-96.624405, dir:"6500 South 70th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Capital Humane Society of Nebraska", cat:"tienda", lat:40.789646, lng:-96.714847, dir:"2320 Park Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Urban Hound", cat:"parque", lat:40.784613, lng:-96.65298, dir:"4848 Van Dorn Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lincoln Chidren's Zoo", cat:"zoo", lat:40.799862, lng:-96.679406, dir:"1222 South 27th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Diagnostic Center", cat:"vet", lat:40.832291, lng:-96.660097, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Long Dog Fat Cat", cat:"tienda", lat:40.761934, lng:-96.607199, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mahoney Dog Run (Under 15\")", cat:"parque", lat:40.8472, lng:-96.607255, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mahoney Dog Run (Over 15\")", cat:"parque", lat:40.847843, lng:-96.607887, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tanglewood Dog Park", cat:"parque", lat:40.818379, lng:-96.660578, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lincoln-north-dakota": {nombre:"Lincoln", centro:[46.762494, -100.700403], tz:"America/Chicago", lugares:[
  {n:"Lincoln Dog Park", cat:"parque", lat:46.771772, lng:-100.682996, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lincoln-park-michigan": {nombre:"Lincoln Park", centro:[42.250594, -83.178536], tz:"America/New_York", lugares:[
  {n:"Lincoln Park Veterinary Hospital", cat:"vet", lat:42.227847, lng:-83.180425, dir:"3909 Fort Street", tel:"+1-313-389-2222", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Feed Rite Pet Supply", cat:"tienda", lat:42.242363, lng:-83.1798, dir:"2979 Fort Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Care Supplies inc.", cat:"tienda", lat:42.248841, lng:-83.17309, dir:"1065 Southfield Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Care Clinic p.c.", cat:"vet", lat:42.248852, lng:-83.173136, dir:"1065 Southfield Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eve's Poodle Salon", cat:"peluqueria", lat:42.227284, lng:-83.181585, tel:"+1-313-382-9326", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lincolnwood": {nombre:"Lincolnwood", centro:[42.005598, -87.735572], tz:"America/Chicago", lugares:[
  {n:"Ravenswood Animal Hospital LLC", cat:"vet", lat:41.961561, lng:-87.69803, dir:"2752 West Montrose Avenue", tel:"+1-773-539-7387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.99498, lng:-87.690172, dir:"6236 North Western Avenue", tel:"+1 773-274-1608", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Bentley's Pet Stuff", cat:"tienda", lat:41.948748, lng:-87.663875, dir:"3657 North Southport Avenue", tel:"+1-773-857-7600", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.941361, lng:-87.689053, dir:"3320 North Western Avenue", tel:"+1 773-472-6186", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.950183, lng:-87.675146, dir:"3757 North Lincoln Avenue", tel:"+17733277314", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Forest Glen Animal Hospital", cat:"vet", lat:41.977984, lng:-87.75659, dir:"5330 North Elston Avenue", tel:"+1-773-283-2443", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Chi-Town Dog House", cat:"tienda", lat:41.939377, lng:-87.684267, dir:"2231 West Belmont Avenue", tel:"+1-773-348-9663", horas:[7.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Bark Bark Club", cat:"tienda", lat:41.990375, lng:-87.660036, dir:"5943 North Broadway", tel:"+1- 773-989-8807", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal House of Chicago", cat:"vet", lat:41.968846, lng:-87.698061, dir:"2752 West Lawrence Avenue", tel:"+1-773-878-8002", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"GoodVets Andersonville", cat:"vet", lat:41.989931, lng:-87.670986, dir:"5964 North Ridge Avenue", tel:"+1-312-680-9064", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Barksville Dog Daycare and Boarding", cat:"peluqueria", lat:41.93907, lng:-87.710339, dir:"3301 West Belmont Avenue", tel:"+1 872-204-2275", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Roscoe Village Animal Hospital", cat:"vet", lat:41.938604, lng:-87.686372, dir:"3131 North Clybourn Avenue", tel:"+17735493131", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Cruisin Canines", cat:"peluqueria", lat:41.940571, lng:-87.686965, dir:"2332 West Melrose Street", tel:"+1-773-327-4419", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lincoln Square Animal Hospital", cat:"vet", lat:41.963439, lng:-87.684793, dir:"4501 North Lincoln Avenue", tel:"+1 773-271-5901", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.976647, lng:-87.660288, dir:"5210 North Broadway", tel:"+1 773-250-0201", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:41.953574, lng:-87.700306, dir:"2851 West Irving Park Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ruff Haus Pets", cat:"tienda", lat:41.968389, lng:-87.6886, dir:"4768 North Lincoln Avenue", horas:[11.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"MedVet Chicago", cat:"vet", lat:41.942344, lng:-87.696875, dir:"3305 North California Avenue", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Kriser's Natural Pet", cat:"tienda", lat:41.979579, lng:-87.668121, dir:"5353 North Clark Street", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Curious Creatures", cat:"tienda", lat:41.957836, lng:-87.652468, dir:"4133 North Broadway", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"VSx Veterinary Surgery", cat:"vet", lat:41.953967, lng:-87.67967, dir:"2015-2025 West Irving Park Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Precious Bond Animal Hospital", cat:"vet", lat:41.952516, lng:-87.677426, dir:"3901 North Lincoln Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Center Animal Hospital", cat:"vet", lat:41.947054, lng:-87.674363, dir:"1800-1808 West Addison Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovely Pets Chicago", cat:"peluqueria", lat:41.954364, lng:-87.675489, dir:"1832 West Irving Park Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Zulu", cat:"peluqueria", lat:41.95289, lng:-87.677716, dir:"3919 North Lincoln Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"My Pet Parlor", cat:"peluqueria", lat:41.997484, lng:-87.766098, dir:"5502 1/2 West Devon Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chicago Cat Clinic", cat:"vet", lat:41.997121, lng:-87.761135, dir:"5301 West Devon Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.947159, lng:-87.710107, dir:"3640 North Elston Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Puptown Dog Park", cat:"parque", lat:41.970001, lng:-87.649152, dir:"4900 North Marine Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Challenger Park", cat:"parque", lat:41.958404, lng:-87.657114, dir:"1100 West Irving Park Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.009135, lng:-87.735136, dir:"7031 Lincoln Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Wants", cat:"tienda", lat:41.997484, lng:-87.764629, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Montrose Dog Beach", cat:"parque", lat:41.96862, lng:-87.642521, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lawrence House Dog Park", cat:"parque", lat:41.969548, lng:-87.655616, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bryn Mawr Dog Friendly Area", cat:"parque", lat:41.984394, lng:-87.652217, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "linden-grove": {nombre:"Linden Grove", centro:[47.862977, -92.870454], tz:"America/Chicago", lugares:[
  {n:"Vince Shute Wildlife Sancuary", cat:"zoo", lat:48.09928, lng:-93.006874, tel:"+1-218-757-0172", horas:[17.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "linden-michigan": {nombre:"Linden", centro:[42.814675, -83.782156], tz:"America/New_York", lugares:[
  {n:"Companion Animal Hospital", cat:"vet", lat:42.825268, lng:-83.781798, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lindenhurst": {nombre:"Lindenhurst", centro:[42.410576, -88.026191], tz:"America/Chicago", lugares:[
  {n:"Duck Farm Dog Park", cat:"parque", lat:42.413125, lng:-88.049857, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lindsborg": {nombre:"Lindsborg", centro:[38.573618, -97.674484], tz:"America/Chicago", lugares:[
  {n:"Scentral Bark", cat:"parque", lat:38.56973, lng:-97.671222, dir:"401 East McPherson Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "linn-creek": {nombre:"Linn Creek", centro:[38.037605, -92.712097], tz:"America/Chicago", lugares:[
  {n:"R Veterinary at The Lake", cat:"vet", lat:38.036861, lng:-92.706492, dir:"76 Business Park Rd", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake of the Ozarks Animal Hospital", cat:"vet", lat:38.036856, lng:-92.70651, dir:"76 Business Park Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "linndale": {nombre:"Linndale", centro:[41.445067, -81.766815], tz:"America/New_York", lugares:[
  {n:"City Dogs Cleveland", cat:"refugio", lat:41.479814, lng:-81.747253, dir:"9203 Detroit Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Buckeye Animal Hospital", cat:"vet", lat:41.454988, lng:-81.789848, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "linton": {nombre:"Linton", centro:[39.034767, -87.165846], tz:"America/Chicago", lugares:[
  {n:"Linton Veterinary Clinic", cat:"vet", lat:39.037534, lng:-87.144714, dir:"1701 State Road 54 E", tel:"+1-812-847-2006", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lisbon-north-dakota": {nombre:"Lisbon", centro:[46.441634, -97.68121], tz:"America/Chicago", lugares:[
  {n:"Lisbon Veterinary Service", cat:"vet", lat:46.442186, lng:-97.691868, dir:"702 5th Avenue West", tel:"+17016834686", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lisle": {nombre:"Lisle", centro:[41.801159, -88.074769], tz:"America/Chicago", lugares:[
  {n:"VCA Arboretum View Animal Hospital", cat:"vet", lat:41.806699, lng:-88.045971, dir:"2551 Warrenville Road", tel:"+1 630 963 0424", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.83025, lng:-88.100331, dir:"63 Rice Lake Square", tel:"+1 630-462-7345", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "little-canada": {nombre:"Little Canada", centro:[45.02691, -93.08772], tz:"America/Chicago", lugares:[
  {n:"Blossom Pet Salon", cat:"tienda", lat:45.028556, lng:-93.103809, dir:"2900 Rice Street", tel:"+1 651-216-0542", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Bitty Kitty Brigade", cat:"refugio", lat:45.02856, lng:-93.103944, dir:"2900 Rice Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "little-chute": {nombre:"Little Chute", centro:[44.279987, -88.318439], tz:"America/Chicago", lugares:[
  {n:"Busters Buddies", cat:"refugio", lat:44.2864, lng:-88.31957, tel:"+1-920-788-5539", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "little-falls": {nombre:"Little Falls", centro:[45.976354, -94.362502], tz:"America/Chicago", lugares:[
  {n:"Community Animal Hospital", cat:"vet", lat:45.978261, lng:-94.343194, dir:"406 12th Street Northeast", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pine Grove Zoo", cat:"zoo", lat:45.979142, lng:-94.383608, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "livonia-michigan": {nombre:"Livonia", centro:[42.36837, -83.35271], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.379007, lng:-83.327801, dir:"13150 Middlebelt Road", tel:"+1 734-525-6504", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Premier Pet Supply", cat:"tienda", lat:42.398513, lng:-83.354799, dir:"15399 Merriman Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A-Quality Care Veterinary Hospital", cat:"vet", lat:42.368957, lng:-83.372817, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lockport": {nombre:"Lockport", centro:[41.589475, -88.057837], tz:"America/Chicago", lugares:[
  {n:"Trantina Dog Park", cat:"parque", lat:41.611658, lng:-88.001298, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lodi-township": {nombre:"Lodi Township", centro:[42.211431, -83.838751], tz:"America/New_York", lugares:[
  {n:"Animal Kingdom Veterinary Hospital", cat:"vet", lat:42.214416, lng:-83.797857, dir:"4920 Ann Arbor-Saline Road", tel:"+1-734-913-0003", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Creature Comforts Bed & Bath", cat:"peluqueria", lat:42.214406, lng:-83.798326, dir:"4930 Ann Arbor-Saline Road", tel:"+1-734-996-9010", horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "logan-ohio": {nombre:"Logan", centro:[39.539871, -82.408489], tz:"America/New_York", lugares:[
  {n:"Stevelt's Veterinary Clinic", cat:"vet", lat:39.563805, lng:-82.427152, dir:"11389 SR 664", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Logan Animal Clinic", cat:"vet", lat:39.542305, lng:-82.420151, dir:"161 Iron Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tails of the Wild", cat:"tienda", lat:39.539745, lng:-82.410557, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "logansport": {nombre:"Logansport", centro:[40.754238, -86.362519], tz:"America/New_York", lugares:[
  {n:"Shell Animal Clinic", cat:"vet", lat:40.758094, lng:-86.316542, dir:"500 Mall Road", tel:"+1-574-753-6774", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof and Whiskers Pet Salon", cat:"peluqueria", lat:40.754985, lng:-86.383326, dir:"1125 West Market Street", tel:"+1-574-727-2024", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cass County Animal Hospital", cat:"vet", lat:40.729508, lng:-86.379669, dir:"2452 Burlington Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wright Street Bark Park", cat:"parque", lat:40.752642, lng:-86.342756, dir:"1900 Wright Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lombard": {nombre:"Lombard", centro:[41.886469, -88.020154], tz:"America/Chicago", lugares:[
  {n:"The Groom Room", cat:"peluqueria", lat:41.884939, lng:-88.02817, dir:"419 West Crescent Boulevard", tel:"+1-630-495-7297", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lombard Animal Clinic", cat:"vet", lat:41.874542, lng:-88.017809, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"American Tails Pet Supply", cat:"tienda", lat:41.863391, lng:-88.018111, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "long-beach-indiana": {nombre:"Long Beach", centro:[41.738929, -86.856974], tz:"America/Chicago", lugares:[
  {n:"Michiana Humane Society", cat:"refugio", lat:41.721764, lng:-86.825011, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "long-lake-charter-township": {nombre:"Long Lake Charter Township", centro:[44.731536, -85.755353], tz:"America/New_York", lugares:[
  {n:"Long Lake Animal Hospital", cat:"vet", lat:44.734467, lng:-85.776052, dir:"9929 North Long Lake Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "long-prairie": {nombre:"Long Prairie", centro:[45.974113, -94.865264], tz:"America/Chicago", lugares:[
  {n:"Long Prairie Veterinary Clinic", cat:"vet", lat:45.965922, lng:-94.86605, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lonsdale-minnesota": {nombre:"Lonsdale", centro:[44.480241, -93.428559], tz:"America/Chicago", lugares:[
  {n:"Windmill Animal Rescue Shop", cat:"vet", lat:44.479828, lng:-93.428853, dir:"135 South Main Street", tel:"+1-507-210-0118", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Saveafox", cat:"refugio", lat:44.430005, lng:-93.341814, dir:"3955 Millersburg Boulevard", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "lorain": {nombre:"Lorain", centro:[41.467324, -82.17819], tz:"America/New_York", lugares:[
  {n:"Smitties Pampered Paws", cat:"peluqueria", lat:41.463396, lng:-82.174873, dir:"219 W 8th", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"ReFURbish Pet Spa", cat:"peluqueria", lat:41.464299, lng:-82.173683, dir:"Broadway", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "loudonville-ohio": {nombre:"Loudonville", centro:[40.635621, -82.233471], tz:"America/New_York", lugares:[
  {n:"Canine Designz", cat:"peluqueria", lat:40.635898, lng:-82.23691, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "louisville-ohio": {nombre:"Louisville", centro:[40.837531, -81.259573], tz:"America/New_York", lugares:[
  {n:"West Main Veterinary Clinic", cat:"vet", lat:40.837156, lng:-81.267454, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bubbles N' Bark", cat:"peluqueria", lat:40.84955, lng:-81.258353, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "loveland-ohio": {nombre:"Loveland", centro:[39.268948, -84.263826], tz:"America/New_York", lugares:[
  {n:"Loveland Regional Veterinary Hospital", cat:"vet", lat:39.268539, lng:-84.259405, dir:"300 West Loveland Avenue", tel:"+1-513-697-9796", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Loveland Animal Hospital", cat:"vet", lat:39.262909, lng:-84.268897, dir:"Loveland Madeira Road", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Nation Lodge", cat:"refugio", lat:39.255986, lng:-84.279275, dir:"1425 Loveland Madeira Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Top Dog Grooming Spa", cat:"peluqueria", lat:39.266146, lng:-84.265905, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetCare Animal Hospital", cat:"vet", lat:39.251192, lng:-84.297307, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Matt Haverkamp Foundation Dog Park", cat:"parque", lat:39.273813, lng:-84.260312, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "loves-park": {nombre:"Loves Park", centro:[42.313075, -89.061495], tz:"America/Chicago", lugares:[
  {n:"Brookside Veterinary Clinic", cat:"vet", lat:42.318707, lng:-89.026556, dir:"1740 East Riverside Boulevard, Loves Park, IL 61111", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pampered Pet Grooming", cat:"peluqueria", lat:42.316161, lng:-89.079099, dir:"370 West Riverside Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Loves Park", cat:"vet", lat:42.304716, lng:-89.058139, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lowell-indiana": {nombre:"Lowell", centro:[41.291424, -87.42059], tz:"America/Chicago", lugares:[
  {n:"Bardens Animal Clinic", cat:"vet", lat:41.289631, lng:-87.402429, dir:"1642 East Commercial Avenue", tel:"+1-219-696-0971", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lowell-michigan": {nombre:"Lowell", centro:[42.933601, -85.341855], tz:"America/New_York", lugares:[
  {n:"Animal Hospital of Lowell Dog Park", cat:"parque", lat:42.928784, lng:-85.356036, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ludington": {nombre:"Ludington", centro:[43.955541, -86.447742], tz:"America/New_York", lugares:[
  {n:"Love 4 Paws", cat:"peluqueria", lat:43.953291, lng:-86.447464, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies", cat:"tienda", lat:43.954878, lng:-86.39871, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "luverne-minnesota": {nombre:"Luverne", centro:[43.654234, -96.212781], tz:"America/Chicago", lugares:[
  {n:"Rock Veterinary Clinic PA", cat:"vet", lat:43.631418, lng:-96.214086, dir:"1295 101st Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rock Vet Clinic", cat:"vet", lat:43.631411, lng:-96.214086, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lyndhurst-ohio": {nombre:"Lyndhurst", centro:[41.520052, -81.488732], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.51936, lng:-81.496468, dir:"5092 Mayfield Road", tel:"+1-440-473-9998", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Lyndhurst Animal Clinic", cat:"vet", lat:41.520248, lng:-81.485411, dir:"5387 Mayfield Road", tel:"+1-440-449-6644", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Blue Fish Aquariums", cat:"tienda", lat:41.5202, lng:-81.485663, dir:"5379 Mayfield Road", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lyons-illinois": {nombre:"Lyons", centro:[41.811108, -87.823269], tz:"America/Chicago", lugares:[
  {n:"Greater Chicago Ferret Association", cat:"refugio", lat:41.819586, lng:-87.820199, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pom Pom Grooming Salon", cat:"peluqueria", lat:41.813588, lng:-87.820961, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lyons-wisconsin": {nombre:"Lyons", centro:[42.651128, -88.358428], tz:"America/Chicago", lugares:[
  {n:"Lyons Veterinary Service", cat:"vet", lat:42.652384, lng:-88.357044, dir:"1479 Creek Side Road", tel:"+1-262-661-2323", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "macedonia-ohio": {nombre:"Macedonia", centro:[41.313667, -81.50845], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:41.312533, lng:-81.519552, dir:"500 East Aurora Road", tel:"+1 330-467-0844", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.311259, lng:-81.519079, dir:"8210 Macedonia Commons Boulevard", tel:"+1 330-908-0531", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "machesney-park": {nombre:"Machesney Park", centro:[42.347241, -89.038996], tz:"America/Chicago", lugares:[
  {n:"Dogwood Hospital", cat:"vet", lat:42.32036, lng:-89.000419, dir:"4102 North Mulford Road, Rockford, IL 61114", tel:"+1 815-282-3371", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Frost Family Pet Care", cat:"vet", lat:42.31931, lng:-88.994928, dir:"6272 East Riverside Boulevard", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.367433, lng:-89.02571, dir:"West Lane Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mostly Cats", cat:"vet", lat:42.330972, lng:-88.9883, dir:"4901 North Perryville Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "macomb": {nombre:"Macomb", centro:[40.458893, -90.671394], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.45779, lng:-90.666901, dir:"103B South Dudley Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Pets Veterinary Clinic", cat:"vet", lat:40.459196, lng:-90.682155, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Connection", cat:"tienda", lat:40.459323, lng:-90.690271, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "macomb-township": {nombre:"Macomb Township", centro:[42.672604, -82.917949], tz:"America/New_York", lugares:[
  {n:"Saint Francis Animal Hospital", cat:"vet", lat:42.631417, lng:-82.955495, dir:"45505 Garfield Road", tel:"+1-586-228-8387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wag 'N' Tails Studio", cat:"peluqueria", lat:42.687258, lng:-82.976548, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "macy": {nombre:"Macy", centro:[40.959347, -86.127637], tz:"America/New_York", lugares:[
  {n:"Fouts Veterinary Care", cat:"vet", lat:40.905984, lng:-86.151629, dir:"9753 North Old Route 31", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "madison-heights": {nombre:"Madison Heights", centro:[42.485869, -83.105203], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:42.501559, lng:-83.083137, dir:"28400 Dequindre Road", tel:"+1 586-751-3392", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pinky's Pet Salon", cat:"peluqueria", lat:42.505154, lng:-83.068561, dir:"3850 East 12 Mile Road", tel:"+1 586-486-4288", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Oak Animal Hospital", cat:"vet", lat:42.491181, lng:-83.103455, dir:"241 East 11 Mile Road", tel:"+1-248-800-6996", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Run", cat:"parque", lat:42.523034, lng:-83.089378, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Run A", cat:"parque", lat:42.524104, lng:-83.08794, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Run C", cat:"parque", lat:42.522788, lng:-83.089383, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Run B", cat:"parque", lat:42.523145, lng:-83.089687, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "madison-wisconsin": {nombre:"Madison", centro:[43.07469, -89.384166], tz:"America/Chicago", lugares:[
  {n:"Rufus DuMonde Pet Salon", cat:"peluqueria", lat:43.076645, lng:-89.374999, dir:"600 Williamson Street", tel:"+1-608-257-8387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Haus University", cat:"refugio", lat:43.083726, lng:-89.377015, dir:"825 East Johnson Street", tel:"+1 608-515-8255", horas:[6.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Madison Veterinary Specialists", cat:"vet", lat:43.037103, lng:-89.386498, dir:"229 West Beltline Highway", tel:"+1-608-274-7772", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Petinary", cat:"vet", lat:43.081182, lng:-89.367474, tel:"+1 608 255 1239", horas:[7.5, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Henry Vilas Zoo", cat:"zoo", lat:43.059765, lng:-89.409797, dir:"702 South Randall Avenue", horas:[9.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Madcat", cat:"tienda", lat:43.087679, lng:-89.35826, dir:"1525 Williamson Street", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Haus University", cat:"refugio", lat:43.061906, lng:-89.401024, horas:[6.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Cat Care Clinic", cat:"vet", lat:43.083853, lng:-89.37167, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Dog Vet & Grooming", cat:"vet", lat:43.083917, lng:-89.371579, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Whole Pet Veterinary Clinic", cat:"vet", lat:43.053293, lng:-89.396285, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brittingham Park Dog Park", cat:"parque", lat:43.068109, lng:-89.385592, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wetland Koi", cat:"refugio", lat:43.05867, lng:-89.41063, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Quann Park Dog Park", cat:"parque", lat:43.050045, lng:-89.385149, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Health Center", cat:"vet", lat:43.058642, lng:-89.407796, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mahomet": {nombre:"Mahomet", centro:[40.195142, -88.405227], tz:"America/Chicago", lugares:[
  {n:"Mahomet Animal Hospital", cat:"vet", lat:40.196711, lng:-88.39694, dir:"804 Eastwood Drive", tel:"+1 447-210-2948", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mahtomedi": {nombre:"Mahtomedi", centro:[45.069689, -92.951604], tz:"America/Chicago", lugares:[
  {n:"Cat Care Clinic", cat:"vet", lat:45.064574, lng:-92.956523, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "maineville": {nombre:"Maineville", centro:[39.315134, -84.220942], tz:"America/New_York", lugares:[
  {n:"Shear Pawfection", cat:"peluqueria", lat:39.33688, lng:-84.219204, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "maize": {nombre:"Maize", centro:[37.779179, -97.467267], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:37.729012, lng:-97.466482, dir:"2441 North Maize Road", tel:"+1 316-773-2650", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "manchester-iowa": {nombre:"Manchester", centro:[42.484091, -91.455538], tz:"America/Chicago", lugares:[
  {n:"The Fish Shack", cat:"tienda", lat:42.48293, lng:-91.457579, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Manchester Dog Park", cat:"parque", lat:42.475686, lng:-91.452554, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "manchester-missouri": {nombre:"Manchester", centro:[38.592531, -90.510745], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.593865, lng:-90.506169, dir:"131 Highland Boulevard Drive", tel:"+1 636-527-3661", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mandan": {nombre:"Mandan", centro:[46.826415, -100.889704], tz:"America/Chicago", lugares:[
  {n:"Dog Town", cat:"parque", lat:46.816874, lng:-100.88086, dir:"810 8th Avenue South", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "manhattan-kansas": {nombre:"Manhattan", centro:[39.183608, -96.571669], tz:"America/Chicago", lugares:[
  {n:"Blue Hills Animal Hospital", cat:"vet", lat:39.208079, lng:-96.573203, dir:"2313 Tuttle Creek Boulevard", tel:"+1-785-537-8482", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Candlewood Veterinary Clinic", cat:"vet", lat:39.204334, lng:-96.619485, dir:"3262 Kimball Avenue", tel:"+1-785-537-0537", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Sunflower Natural Pet Supplies", cat:"tienda", lat:39.16982, lng:-96.595417, dir:"527 Richards Drive", tel:"+1-785-565-4044", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.184315, lng:-96.56068, dir:"517 North 3rd Place", tel:"+1 785-587-8638", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.172401, lng:-96.602108, dir:"805 South Seth Child Road", tel:"+1 785-560-3185", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Sunset Zoo", cat:"zoo", lat:39.177017, lng:-96.595722, dir:"2333 Oak Street", horas:[9.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"T. Russell Reitz Animal Shelter", cat:"refugio", lat:39.19506, lng:-96.546394, dir:"605 Levee Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wildcat Vet", cat:"vet", lat:39.205955, lng:-96.568533, dir:"2044 Tuttle Creek Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Little Apple Veterinary Clinic", cat:"vet", lat:39.171424, lng:-96.602645, dir:"909 South Seth Child Road", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Westside Veterinary Clinic", cat:"vet", lat:39.189457, lng:-96.616482, dir:"3130 Anderson Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dogs", cat:"parque", lat:39.180837, lng:-96.546608, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dogs", cat:"parque", lat:39.180219, lng:-96.545945, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stretch Dog Park", cat:"parque", lat:39.255029, lng:-96.579285, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"CiCo Dog Park", cat:"parque", lat:39.202077, lng:-96.620466, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "manitowoc": {nombre:"Manitowoc", centro:[44.088606, -87.657584], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:44.076562, lng:-87.702339, dir:"4144 Harbor Town Lane", tel:"+1 920-652-0367", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Colonial Pet Shoppe", cat:"tienda", lat:44.082773, lng:-87.691264, dir:"1310 South 35th Street", tel:"+1 920-682-0713", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lincoln Park Zoo", cat:"zoo", lat:44.11068, lng:-87.649084, tel:"+1-920-683-4685", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Port Cities Animal Hospital", cat:"vet", lat:44.07405, lng:-87.696951, dir:"3910 Dewey Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Manitowoc Lincoln Park Zoo", cat:"zoo", lat:44.111345, lng:-87.648866, dir:"1215 North 8th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Off-Leash Manners", cat:"refugio", lat:44.089862, lng:-87.683873, dir:"925 South 29th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grooming by Kassie", cat:"peluqueria", lat:44.093765, lng:-87.675083, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Buddy & Friends", cat:"refugio", lat:44.093725, lng:-87.675003, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Area", cat:"parque", lat:44.091202, lng:-87.687938, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Area", cat:"parque", lat:44.090671, lng:-87.687854, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mankato-minnesota": {nombre:"Mankato", centro:[44.165853, -94.002801], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:44.171727, lng:-93.949872, dir:"1890 Adams Street", tel:"+1 507-387-6278", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Minnesota Valley Pet Hospital", cat:"vet", lat:44.169435, lng:-93.965172, dir:"1541 Adams Street", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Expo", cat:"tienda", lat:44.170029, lng:-93.955838, dir:"1800 Adams Street", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mansfield-ohio": {nombre:"Mansfield", centro:[40.75839, -82.515447], tz:"America/New_York", lugares:[
  {n:"Phillips Animal Hospital", cat:"vet", lat:40.742566, lng:-82.515602, dir:"581 South Main Street", tel:"+1-419-526-4212", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Akers Veterinary Hospital", cat:"vet", lat:40.734958, lng:-82.512885, dir:"885 South Main Street", tel:"+1-419-756-4400", horas:[8.0, 11.0], nota:"Dato de OpenStreetMap"},
  {n:"Sunset Acres Pet Lodge", cat:"refugio", lat:40.806718, lng:-82.542719, dir:"808 Cairns Road", tel:"+1-419-631-3515", horas:[7.0, 11.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mantua": {nombre:"Mantua", centro:[41.283944, -81.223991], tz:"America/New_York", lugares:[
  {n:"Mantua Veterinary Clinic", cat:"vet", lat:41.2845, lng:-81.21955, dir:"4789 High Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "maple-bluff": {nombre:"Maple Bluff", centro:[43.11487, -89.372851], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:43.128562, lng:-89.296459, dir:"2216 East Springs Drive", tel:"+1 608-246-0813", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Northside Animal Hospital", cat:"vet", lat:43.12201, lng:-89.363292, dir:"2121 North Sherman Avenue", tel:"+1 608 204 2700", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Isthmus Veterinary Care - Marc Siegel, DVM", cat:"vet", lat:43.094716, lng:-89.364101, dir:"1730 Fordem Avenue", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"bad dog frida", cat:"tienda", lat:43.092796, lng:-89.352, dir:"2094 Atwood Avenue", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Healthy Pet Veterinary", cat:"vet", lat:43.101807, lng:-89.345639, tel:"+1-608-294-9494", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Tabby & Jack's Pet Supplies and Grooming", cat:"tienda", lat:43.092111, lng:-89.36012, dir:"1892 East Washington Avenue", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Sandhill Pet Clinic", cat:"vet", lat:43.109927, lng:-89.3339, tel:"+1-608-241-7600", horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Demetral Park Dog Off-Leash Park", cat:"parque", lat:43.106367, lng:-89.354329, dir:"2297 Commercial Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Community Care Veterinary Clinic", cat:"vet", lat:43.09359, lng:-89.343873, dir:"2733 Atwood Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Madison Boneyard", cat:"parque", lat:43.112796, lng:-89.310193, dir:"1018 Walsh Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animart", cat:"tienda", lat:43.1218, lng:-89.306678, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Royal Pets", cat:"peluqueria", lat:43.110124, lng:-89.333859, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:43.12877, lng:-89.296451, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart Pet Grooming", cat:"peluqueria", lat:43.128581, lng:-89.296368, horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Countryside Animal Clinic", cat:"vet", lat:43.14126, lng:-89.289615, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Warner Park Dog Park", cat:"parque", lat:43.126681, lng:-89.37387, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sycamore Dog Park", cat:"parque", lat:43.112372, lng:-89.303533, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "maple-city": {nombre:"Maple City", centro:[44.854309, -85.855625], tz:"America/New_York", lugares:[
  {n:"Cold Spring Farm", cat:"refugio", lat:44.857086, lng:-85.885917, dir:"8477 South Bohemian Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "maple-grove": {nombre:"Maple Grove", centro:[45.098498, -93.441922], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:45.092857, lng:-93.422951, dir:"11200 Fountains Drive", tel:"+1 763-424-3639", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Paws & Claws Pet Hospital", cat:"vet", lat:45.104717, lng:-93.453044, dir:"13640 Grove Drive North", tel:"+17634209711", horas:[8.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's", cat:"tienda", lat:45.102203, lng:-93.450474, dir:"8115 Wedgewood Lane", tel:"+17634164877", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:45.099174, lng:-93.446915, dir:"8010 Wedgewood Lane", tel:"+17634205230", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"WellHaven Pet Health", cat:"vet", lat:45.095469, lng:-93.429158, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"ADOGO", cat:"refugio", lat:45.089471, lng:-93.434293, horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "maple-heights": {nombre:"Maple Heights", centro:[41.415441, -81.56556], tz:"America/New_York", lugares:[
  {n:"Suburban Veterinary Clinic", cat:"vet", lat:41.413265, lng:-81.539035, dir:"5488B Warrensville Center Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Maple Heights Animal Hospital", cat:"vet", lat:41.41767, lng:-81.572357, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Suburban Animal Center", cat:"peluqueria", lat:41.420893, lng:-81.577879, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mapleton-minnesota": {nombre:"Mapleton", centro:[43.928851, -93.956064], tz:"America/Chicago", lugares:[
  {n:"All Pets", cat:"vet", lat:43.926888, lng:-93.947435, dir:"106 MN 22", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "maplewood": {nombre:"Maplewood", centro:[45.008222, -93.045699], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:45.012641, lng:-93.019597, dir:"2370 White Bear Avenue North", tel:"+1 651-777-9533", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "maplewood-missouri": {nombre:"Maplewood", centro:[38.612552, -90.32456], tz:"America/Chicago", lugares:[
  {n:"Love Unleashed", cat:"refugio", lat:38.600615, lng:-90.300134, dir:"3425 Watson Road", tel:"+13146968888", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jewell Animal Hospital", cat:"vet", lat:38.593572, lng:-90.298016, dir:"6400 Chippewa Street", tel:"+13143514700", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Watson Road Animal Hospital", cat:"vet", lat:38.595937, lng:-90.301217, dir:"3725 Watson Road", tel:"+13146441544", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Hampton Animal Hospital", cat:"vet", lat:38.607875, lng:-90.288348, dir:"2826 Hampton Avenue", tel:"+13146478818", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"No Leash Needed", cat:"refugio", lat:38.610965, lng:-90.28849, dir:"2649 Hampton Avenue", tel:"+13142705600", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.591742, lng:-90.270124, dir:"4621 Chippewa Street", tel:"+1 314-776-7608", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Airedale Antics", cat:"tienda", lat:38.612955, lng:-90.317766, dir:"Manchester Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"St Louis Cat Clinic", cat:"vet", lat:38.599078, lng:-90.292182, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:38.590912, lng:-90.270192, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Maplewood Dog Park", cat:"parque", lat:38.615987, lng:-90.330633, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "maquoketa": {nombre:"Maquoketa", centro:[42.069091, -90.665475], tz:"America/Chicago", lugares:[
  {n:"Doo Doo Baggie Club", cat:"tienda", lat:42.072987, lng:-90.681822, dir:"1206 German Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marble-hill": {nombre:"Marble Hill", centro:[37.305887, -89.970379], tz:"America/Chicago", lugares:[
  {n:"Bollinger County Vetrinary Services", cat:"vet", lat:37.306009, lng:-89.962291, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marengo": {nombre:"Marengo", centro:[42.250149, -88.60813], tz:"America/Chicago", lugares:[
  {n:"Marengo Animal Hospital", cat:"vet", lat:42.248269, lng:-88.610729, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marietta-ohio": {nombre:"Marietta", centro:[39.416774, -81.454839], tz:"America/New_York", lugares:[
  {n:"Ohio Valley Veterinary Hospital", cat:"vet", lat:39.418299, lng:-81.458108, dir:"423 2nd Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"We Love Pets", cat:"tienda", lat:39.410271, lng:-81.433886, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marinette": {nombre:"Marinette", centro:[45.099959, -87.630726], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:45.078783, lng:-87.658174, dir:"2704 Roosevelt Road", tel:"+1 715-504-3153", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Tina's Tangled Tails", cat:"peluqueria", lat:45.095791, lng:-87.629703, dir:"909 Pierce Avenue", tel:"+1-715-923-5484", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Town & Country Veterinary Clinic", cat:"vet", lat:45.083337, lng:-87.659962, dir:"1292 Marinette Avenue", tel:"+1-715-735-9511", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Waggin' Tails", cat:"peluqueria", lat:45.092363, lng:-87.629783, dir:"1305 Pierce Avenue", tel:"+1-715-732-8245", horas:[7.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "marion-illinois": {nombre:"Marion", centro:[37.730605, -88.933126], tz:"America/Chicago", lugares:[
  {n:"The Bark Park", cat:"parque", lat:37.736558, lng:-88.939107, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marion-indiana-2": {nombre:"Marion", centro:[39.588161, -85.758656], tz:"America/New_York", lugares:[
  {n:"Caesar's Entertainment Equine Specialty Hospital", cat:"vet", lat:39.56425, lng:-85.792485, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marion-iowa": {nombre:"Marion", centro:[42.032975, -91.598733], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.027189, lng:-91.621263, dir:"4810 1st Avenue East", tel:"+1 319-447-2509", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Kim's Animal House", cat:"peluqueria", lat:42.03219, lng:-91.60922, dir:"131 Marion Boulevard", tel:"+1-319-377-0061", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Home Grown Pets", cat:"tienda", lat:42.03532, lng:-91.562483, dir:"999 44th Street", tel:"+1-319-651-6526", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:42.028246, lng:-91.625014, dir:"1450 Twixt Town Road Northeast", tel:"+1 319-377-4376", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Heartland Animal Hospital", cat:"vet", lat:42.01152, lng:-91.635671, dir:"3318 1st Avenue East", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K9 Acres Off-Leash Area", cat:"parque", lat:42.013778, lng:-91.553438, dir:"5200 Golf Course Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marion-ohio": {nombre:"Marion", centro:[40.588626, -83.128735], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:40.582571, lng:-83.081458, dir:"200 McMahan Boulevard", tel:"+1 740-389-1047", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Zone", cat:"tienda", lat:40.582936, lng:-83.085985, dir:"1632 Marion-Mt Gilead Road", tel:"+1-740-389-6119", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"The Yancey Clinic of Veterinary Medicine", cat:"vet", lat:40.580169, lng:-83.100339, dir:"1097 Mt Vernon Avenue", tel:"+1-740-386-6633", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Kaufman Dog Park", cat:"parque", lat:40.601665, lng:-83.068104, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "markesan": {nombre:"Markesan", centro:[43.707319, -88.990069], tz:"America/Chicago", lugares:[
  {n:"Markesan Veterinary Clinic", cat:"vet", lat:43.727226, lng:-89.005254, dir:"W2455 County Road H", tel:"+1-920-398-2319", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "markleville": {nombre:"Markleville", centro:[39.977822, -85.614698], tz:"America/New_York", lugares:[
  {n:"Canine Clips", cat:"peluqueria", lat:39.977662, lng:-85.614301, dir:"5 Main Street", tel:"+17655333647", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marquette-michigan": {nombre:"Marquette", centro:[46.543491, -87.396433], tz:"America/Chicago", lugares:[
  {n:"Couth Grooming", cat:"peluqueria", lat:46.542116, lng:-87.392957, dir:"207 South Front Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Green Dog", cat:"tienda", lat:46.540864, lng:-87.393342, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marquisville": {nombre:"Marquisville", centro:[41.653331, -93.600835], tz:"America/Chicago", lugares:[
  {n:"4 Paws Unleashed", cat:"refugio", lat:41.656623, lng:-93.601457, dir:"5278 Northeast 14th Street", tel:"+1-515-289-0626", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Rescue League of Iowa", cat:"refugio", lat:41.659378, lng:-93.58257, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marshall-minnesota": {nombre:"Marshall", centro:[44.446964, -95.788658], tz:"America/Chicago", lugares:[
  {n:"The Dog House", cat:"refugio", lat:44.451237, lng:-95.765224, dir:"204 Mustang Trail", tel:"+1-507-337-9750", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Loyalty Dog Park", cat:"parque", lat:44.443236, lng:-95.785533, dir:"111 South A Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City of Marshall Animal Impoundment Center", cat:"refugio", lat:44.458501, lng:-95.786283, dir:"800 Kossuth Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Evans Family Pet Care", cat:"vet", lat:44.442893, lng:-95.764522, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marshall-missouri": {nombre:"Marshall", centro:[39.123078, -93.19687], tz:"America/Chicago", lugares:[
  {n:"Marshall Dog Park", cat:"parque", lat:39.134389, lng:-93.18184, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marshall-wisconsin": {nombre:"Marshall", centro:[43.167701, -89.064333], tz:"America/Chicago", lugares:[
  {n:"Marshall Dog Park", cat:"parque", lat:43.166515, lng:-89.055356, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marshalltown": {nombre:"Marshalltown", centro:[42.048881, -92.912267], tz:"America/Chicago", lugares:[
  {n:"Animal Clinic", cat:"vet", lat:42.03673, lng:-92.921472, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marshallville-ohio": {nombre:"Marshallville", centro:[40.902277, -81.734019], tz:"America/New_York", lugares:[
  {n:"Finney Veterinary Services", cat:"vet", lat:40.894787, lng:-81.731448, dir:"61 South Main Street", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "marshfield-wisconsin": {nombre:"Marshfield", centro:[44.666229, -90.174031], tz:"America/Chicago", lugares:[
  {n:"Wildwood Animal Hospital and Clinic", cat:"vet", lat:44.632907, lng:-90.183231, dir:"210 Air Park Road", tel:"+1 715-387-1225", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Castlerock Veterinary Clinic", cat:"vet", lat:44.656975, lng:-90.185733, dir:"1214 South Oak Avenue", tel:"+1 715-389-1011", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Marshfield Veterinary Service", cat:"vet", lat:44.700195, lng:-90.161131, dir:"112244 Mann Street", tel:"+1 715-387-1119", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws 'n Play Dog Park", cat:"parque", lat:44.649475, lng:-90.172223, dir:"2100 South Peach Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:44.685937, lng:-90.160517, dir:"1810 Central Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wildwood Zoo", cat:"zoo", lat:44.647207, lng:-90.19024, horas:[6.0, 22.5], nota:"Dato de OpenStreetMap"},
  {n:"Zoo Drive", cat:"zoo", lat:44.646374, lng:-90.190823, horas:[6.0, 22.5], nota:"Dato de OpenStreetMap"}
 ]},
 "martin-south-dakota": {nombre:"Martin", centro:[43.17265, -101.732526], tz:"America/Denver", lugares:[
  {n:"High Plains Animal Clinic", cat:"vet", lat:43.172564, lng:-101.709811, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "martins-ferry": {nombre:"Martins Ferry", centro:[40.095906, -80.724526], tz:"America/New_York", lugares:[
  {n:"Redwood Veterinary Hospital", cat:"vet", lat:40.096714, lng:-80.724931, dir:"13 South 5th Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "maryland-heights": {nombre:"Maryland Heights", centro:[38.715051, -90.435999], tz:"America/Chicago", lugares:[
  {n:"Karen's Grooming", cat:"peluqueria", lat:38.7141, lng:-90.441005, horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Family Animal Hospital", cat:"vet", lat:38.714041, lng:-90.438776, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marysville-kansas": {nombre:"Marysville", centro:[39.84173, -96.648064], tz:"America/Chicago", lugares:[
  {n:"Valley Pet Supply", cat:"tienda", lat:39.842458, lng:-96.616917, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Black Squirrel Bark Park", cat:"parque", lat:39.835544, lng:-96.647579, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marysville-ohio": {nombre:"Marysville", centro:[40.236449, -83.367143], tz:"America/New_York", lugares:[
  {n:"Union County Humane Society", cat:"refugio", lat:40.262897, lng:-83.360657, dir:"16540 County Home Road", tel:"+19376426716", horas:[13.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Marysville Animal Care Center", cat:"vet", lat:40.260258, lng:-83.373249, dir:"17800 OH-31", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:40.242999, lng:-83.374896, dir:"455 North Maple Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodside Veternary Hospital", cat:"vet", lat:40.261324, lng:-83.374727, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "maryville": {nombre:"Maryville", centro:[38.723659, -89.955935], tz:"America/Chicago", lugares:[
  {n:"Benny's Bed and Buscuits", cat:"refugio", lat:38.719977, lng:-89.956057, dir:"2330 South Center Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "maryville-missouri": {nombre:"Maryville", centro:[40.346047, -94.872386], tz:"America/Chicago", lugares:[
  {n:"Francis Kirk DVM", cat:"vet", lat:40.340919, lng:-94.873434, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nodaway Humane Society", cat:"refugio", lat:40.338554, lng:-94.856282, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Paws Veterinary Clinic", cat:"vet", lat:40.324459, lng:-94.873007, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nodaway Veterinary Clinic", cat:"vet", lat:40.3794, lng:-94.870825, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Maryville Veterinary Clinic", cat:"vet", lat:40.37492, lng:-94.873214, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mascoutah": {nombre:"Mascoutah", centro:[38.490327, -89.793154], tz:"America/Chicago", lugares:[
  {n:"Woof & Wag /Dog Boutique & Self Serve Dog Wash", cat:"peluqueria", lat:38.496414, lng:-89.79468, dir:"209 East Hartnett Street", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"All Breed Pet Grooming and Boarding", cat:"peluqueria", lat:38.48182, lng:-89.793206, dir:"750 South Jefferson Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mason-city-iowa": {nombre:"Mason City", centro:[43.152457, -93.201794], tz:"America/Chicago", lugares:[
  {n:"Humane Society of North Iowa", cat:"refugio", lat:43.140096, lng:-93.158991, dir:"2700 South Birch Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mason-ohio": {nombre:"Mason", centro:[39.360059, -84.309939], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.358637, lng:-84.362245, dir:"7574 Voice of America Drive", tel:"+1 513-779-3159", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pawmyra Dog Park", cat:"parque", lat:39.377496, lng:-84.272627, dir:"3400 Mason Morrow Milgrove Rd", tel:"+1-513-229-8500", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mandy’s Dog-o-Mat", cat:"peluqueria", lat:39.357876, lng:-84.39542, dir:"6896 Tylersville Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Your New Puppy", cat:"tienda", lat:39.37668, lng:-84.374489, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"EarthWise Pet", cat:"tienda", lat:39.376881, lng:-84.374887, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetPeople", cat:"tienda", lat:39.356024, lng:-84.378721, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:39.345471, lng:-84.401728, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barks N' Bubbles", cat:"peluqueria", lat:39.355913, lng:-84.395591, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wiggly Field Dog Park", cat:"parque", lat:39.358668, lng:-84.348529, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Liberty Veterinary Hospital", cat:"vet", lat:39.379375, lng:-84.385211, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "massillon": {nombre:"Massillon", centro:[40.796512, -81.52316], tz:"America/New_York", lugares:[
  {n:"One Fine Canine", cat:"peluqueria", lat:40.820669, lng:-81.499189, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Companion Pet Care Clinic", cat:"vet", lat:40.83213, lng:-81.502807, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "matteson": {nombre:"Matteson", centro:[41.509832, -87.739267], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.508206, lng:-87.734775, dir:"4824 Lincoln Highway", tel:"+1 708-300-3108", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mattoon": {nombre:"Mattoon", centro:[39.484282, -88.377328], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.482936, lng:-88.33362, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "maumee": {nombre:"Maumee", centro:[41.562829, -83.653824], tz:"America/New_York", lugares:[
  {n:"Toledo Area Human Society", cat:"refugio", lat:41.57112, lng:-83.677754, dir:"827 Illinois Avenue", tel:"+1-419-891-0705", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mauston": {nombre:"Mauston", centro:[43.796854, -90.075677], tz:"America/Chicago", lugares:[
  {n:"Mauston Dog Park", cat:"parque", lat:43.803102, lng:-90.055941, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mayfield-heights": {nombre:"Mayfield Heights", centro:[41.519219, -81.457896], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.518964, lng:-81.448761, dir:"1521 Golden Gate Plaza", tel:"+1 440-605-0251", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Mayfield Pet Hospital", cat:"vet", lat:41.520496, lng:-81.456155, dir:"6195 Mayfield Road", tel:"+1-440-442-6500", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mayfield-ohio": {nombre:"Mayfield", centro:[41.541872, -81.439452], tz:"America/New_York", lugares:[
  {n:"Camp Bow Wow", cat:"refugio", lat:41.547597, lng:-81.451829, dir:"31 Alpha Park Alpha Drive", tel:"+1 440-449-1364", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "maysville-iowa": {nombre:"Maysville", centro:[41.648521, -90.717197], tz:"America/Chicago", lugares:[
  {n:"Quad City Greyhound Adoption", cat:"refugio", lat:41.648398, lng:-90.713831, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mayville-wisconsin": {nombre:"Mayville", centro:[43.4942, -88.544824], tz:"America/Chicago", lugares:[
  {n:"WAG-N-TAG Dog Park", cat:"parque", lat:43.503117, lng:-88.563131, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mcarthur": {nombre:"McArthur", centro:[39.24646, -82.47849], tz:"America/New_York", lugares:[
  {n:"David Veterinary Services", cat:"vet", lat:39.243858, lng:-82.47678, dir:"East South Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doghouse Dog Grooming", cat:"peluqueria", lat:39.249692, lng:-82.479247, dir:"North Market Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mccook": {nombre:"McCook", centro:[41.797809, -87.84478], tz:"America/Chicago", lugares:[
  {n:"Cutest Dog", cat:"peluqueria", lat:41.805526, lng:-87.856852, dir:"9448 47th Street", tel:"+1-773-335-9499", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Frisky Dog", cat:"peluqueria", lat:41.805684, lng:-87.851829, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mccordsville": {nombre:"McCordsville", centro:[39.893965, -85.921942], tz:"America/New_York", lugares:[
  {n:"Noah's Caring Hands Animal Hospital at Geist", cat:"vet", lat:39.896509, lng:-85.975438, dir:"7815 Sunnyside Road", tel:"+1-317-823-6922", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Log Cabin Animal Hospital", cat:"vet", lat:39.934838, lng:-85.952125, dir:"11060 Fall Creek Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Speck's", cat:"tienda", lat:39.900961, lng:-85.959315, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Wellness Clinic", cat:"vet", lat:39.897632, lng:-85.994545, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mcfarland-wisconsin": {nombre:"McFarland", centro:[43.012349, -89.289765], tz:"America/Chicago", lugares:[
  {n:"Dane County Humane Society", cat:"refugio", lat:43.042531, lng:-89.292989, dir:"5132 Voges Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"McFarland Animal Hospital", cat:"vet", lat:43.016393, lng:-89.302135, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"McFarland Dog Park", cat:"parque", lat:43.005056, lng:-89.272939, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mcgregor-minnesota": {nombre:"McGregor", centro:[46.606615, -93.313842], tz:"America/Chicago", lugares:[
  {n:"McGregor Veterinary Clinic", cat:"vet", lat:46.609777, lng:-93.314407, tel:"+1 218-768-7601", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mchenry": {nombre:"McHenry", centro:[42.343143, -88.267488], tz:"America/Chicago", lugares:[
  {n:"Claws-N-Paws", cat:"peluqueria", lat:42.343874, lng:-88.275477, tel:"+1-815-363-7387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of McHenry", cat:"vet", lat:42.337504, lng:-88.275427, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"McHenry Pet Hospital", cat:"vet", lat:42.337492, lng:-88.229772, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Central", cat:"tienda", lat:42.344734, lng:-88.271372, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"V.I.P. Pet Salon", cat:"tienda", lat:42.348284, lng:-88.288163, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"McBark Dog Park", cat:"parque", lat:42.362334, lng:-88.265284, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mcpherson": {nombre:"McPherson", centro:[38.370841, -97.664209], tz:"America/Chicago", lugares:[
  {n:"McPherson County Humane Society", cat:"refugio", lat:38.368111, lng:-97.664055, dir:"201 South Elm Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bremyer Dog Park", cat:"parque", lat:38.357881, lng:-97.630756, dir:"1000 S Centennial Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "medary": {nombre:"Medary", centro:[43.855244, -91.209582], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:43.871079, lng:-91.211613, dir:"1231 Crossing Meadows Drive", tel:"+1 608-783-3910", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:43.867688, lng:-91.203482, dir:"9432 WI-16", tel:"+1-608-781-5510", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Coulee Region Humane Society", cat:"refugio", lat:43.872971, lng:-91.178621, dir:"911 Critter Court", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "medford-minnesota": {nombre:"Medford", centro:[44.17413, -93.246324], tz:"America/Chicago", lugares:[
  {n:"Dog Exercise Area (Leashed)", cat:"parque", lat:44.169981, lng:-93.264976, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "medicine-lake": {nombre:"Medicine Lake", centro:[44.995103, -93.416404], tz:"America/Chicago", lugares:[
  {n:"Wild Birds Unlimited", cat:"tienda", lat:44.973386, lng:-93.422074, dir:"11210 Wayzata Boulevard", tel:"+1-952-525-9365", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Gehrman Animal Hospital", cat:"vet", lat:44.971775, lng:-93.441511, dir:"12800 Wayzata Boulevard", tel:"+1-952-545-9161", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "medina-ohio": {nombre:"Medina", centro:[41.138388, -81.863747], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.164567, lng:-81.867016, dir:"5011 Grande Boulevard", tel:"+1 330-725-2277", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.157377, lng:-81.862046, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oneluckydog Bakery", cat:"tienda", lat:41.137937, lng:-81.863442, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Awesome Paws", cat:"peluqueria", lat:41.166328, lng:-81.861335, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tender Loving Care Animal Hospital", cat:"vet", lat:41.166798, lng:-81.86157, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "medora-indiana": {nombre:"Medora", centro:[38.825054, -86.169983], tz:"America/New_York", lugares:[
  {n:"Tiemeyer's Farm Market Petting Zoo", cat:"zoo", lat:38.832047, lng:-86.092978, dir:"3147 South County Road 300 West", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mehlville": {nombre:"Mehlville", centro:[38.508387, -90.322894], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.50088, lng:-90.335608, dir:"4451 Lemay Ferry Road", tel:"+1 314-416-4251", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "melody-hill": {nombre:"Melody Hill", centro:[38.019295, -87.511017], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:37.978261, lng:-87.468839, dir:"215 North Burkhardt Road", tel:"+1 812-476-6462", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Aquarium Concepts", cat:"tienda", lat:38.001674, lng:-87.474241, dir:"2750 North Burkhardt Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:37.963687, lng:-87.490749, dir:"912 South Green River Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Daisy's Pet Playground", cat:"refugio", lat:37.988275, lng:-87.491071, dir:"1309 North Green River Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greenbriar Vetrinary Clinic", cat:"vet", lat:38.0171, lng:-87.491285, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "memphis-missouri": {nombre:"Memphis", centro:[40.457812, -92.171292], tz:"America/Chicago", lugares:[
  {n:"Hometown Animal Health", cat:"vet", lat:40.456483, lng:-92.183981, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "menasha": {nombre:"Menasha", centro:[44.202229, -88.446536], tz:"America/Chicago", lugares:[
  {n:"Appanasha Pet Clinic", cat:"vet", lat:44.226889, lng:-88.419488, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mendota-illinois": {nombre:"Mendota", centro:[41.547255, -89.117585], tz:"America/Chicago", lugares:[
  {n:"Mendota Companion Animal Centre", cat:"vet", lat:41.559141, lng:-89.127582, dir:"1701 13th Ave.", tel:"+1-815-539-6601", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mendota-minnesota": {nombre:"Mendota", centro:[44.887188, -93.164387], tz:"America/Chicago", lugares:[
  {n:"Sunbean Coffee Co.", cat:"resto", lat:44.919997, lng:-93.222795, dir:"4553 34th Avenue South", tel:"+1 612 227 9118", horas:[7.0, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:44.918891, lng:-93.196611, dir:"2277 Ford Parkway", tel:"+1 651-696-1906", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:44.917606, lng:-93.186335, dir:"2032 Ford Parkway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"For The Love Of Dogs", cat:"tienda", lat:44.865941, lng:-93.16798, dir:"2415 Pilot Knob Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Minnehaha Off-Leash Dog Park", cat:"parque", lat:44.903731, lng:-93.194926, dir:"5399 South Minnehaha Park Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Coach", cat:"refugio", lat:44.905137, lng:-93.212359, dir:"5405 42nd Avenue South", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's Pet Food Outlet", cat:"tienda", lat:44.916896, lng:-93.189486, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:44.917255, lng:-93.215282, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Houndstooth Dog Groomer", cat:"peluqueria", lat:44.927208, lng:-93.187125, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "menoken": {nombre:"Menoken", centro:[39.088303, -95.747923], tz:"America/Chicago", lugares:[
  {n:"Woof's Play and Stay", cat:"refugio", lat:39.028556, lng:-95.755722, dir:"2100 Southwest Westport Drive", tel:"+1-785-836-8169", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.034811, lng:-95.759074, dir:"1740 Southwest Wanamaker Road", tel:"+1 785-379-8885", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.030836, lng:-95.756147, dir:"2020 Southwest Westport Drive", tel:"+1 785-272-3323", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Helping Hands Humane Society", cat:"refugio", lat:39.030173, lng:-95.751828, dir:"5720 Southwest 21st Street", tel:"+17852337325", horas:[11.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Topeka Zoo", cat:"zoo", lat:39.055809, lng:-95.725997, dir:"635 Southwest Gage Boulevard", tel:"+1 785-368-9180", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Day Afternoon", cat:"refugio", lat:39.049563, lng:-95.812934, dir:"8235 Southwest 10th Street", tel:"+17854789412", horas:[6.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"West Ridge Animal Health Center", cat:"vet", lat:39.027482, lng:-95.756757, dir:"2147 Southwest Westport Drive", tel:"+1-785-272-3333", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Topeka Veterinary Hospital", cat:"vet", lat:39.029146, lng:-95.794485, dir:"2025 Southwest Stutley Road", tel:"+1-785-272-7400", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Sherwood Animal Clinic", cat:"vet", lat:39.030063, lng:-95.781462, tel:"+1-785-273-4700", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pampered Pets Grooming", cat:"peluqueria", lat:39.014969, lng:-95.764817, dir:"6048 Southwest 29th Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "menominee-michigan": {nombre:"Menominee", centro:[45.107671, -87.614491], tz:"America/New_York", lugares:[
  {n:"Bayshore Veterinary Clinic", cat:"vet", lat:45.12126, lng:-87.612825, dir:"2414 10th Street", tel:"+1-906-863-2237", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kubers Feed Mill", cat:"tienda", lat:45.13697, lng:-87.611412, dir:"912 41st Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mighty Pet", cat:"tienda", lat:45.105463, lng:-87.618495, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "menomonee-falls": {nombre:"Menomonee Falls", centro:[43.179077, -88.117078], tz:"America/Chicago", lugares:[
  {n:"Friends of Nature", cat:"tienda", lat:43.177859, lng:-88.101707, dir:"N88W15483 Main Street", tel:"+1-262-253-9889", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Salty Dog Pet Spa", cat:"peluqueria", lat:43.175516, lng:-88.11343, dir:"N86W16392 Appleton Avenue", tel:"+1 262-735-7622", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Family Pet Clinic", cat:"vet", lat:43.150991, lng:-88.079281, dir:"N73W13583 Appleton Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "menomonie": {nombre:"Menomonie", centro:[44.876529, -91.927872], tz:"America/Chicago", lugares:[
  {n:"Pic-A-Pet Plus", cat:"tienda", lat:44.912876, lng:-91.934809, dir:"2421 State Highway 25", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brakken Veterinary Clinic", cat:"vet", lat:44.881203, lng:-91.901489, dir:"2215 Schneider Avenue Southeast", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hoof and Paw Veterinary Clinic", cat:"vet", lat:44.902673, lng:-91.927398, dir:"416 Oak Avenue", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Menomonie Dog Park", cat:"parque", lat:44.880946, lng:-91.939909, dir:"Brick Yard Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dunn County Humane Society", cat:"refugio", lat:44.879165, lng:-91.943034, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mentor-ohio": {nombre:"Mentor", centro:[41.666478, -81.339977], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.674572, lng:-81.313206, dir:"9122 Mentor Avenue", tel:"+1 440-974-1100", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Mentor Dog Park", cat:"parque", lat:41.690205, lng:-81.319907, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mentor-on-the-lake": {nombre:"Mentor-on-the-Lake", centro:[41.705045, -81.360386], tz:"America/New_York", lugares:[
  {n:"Mentor Animal Hospital", cat:"vet", lat:41.701785, lng:-81.377179, dir:"6231 Reynolds Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mequon": {nombre:"Mequon", centro:[43.221909, -87.982297], tz:"America/Chicago", lugares:[
  {n:"East Towne Veterinary Clinic", cat:"vet", lat:43.229764, lng:-87.923389, dir:"11622 North Port Washington Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "meridian-charter-township": {nombre:"Meridian Charter Township", centro:[42.727858, -84.414709], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.729435, lng:-84.41039, dir:"5135 Times Square Drive", tel:"+1 517-347-6656", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Okemos Animal Hospital", cat:"vet", lat:42.717338, lng:-84.410477, dir:"1716 Hamilton Road", tel:"+1 517 349 0110", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Soldan's Feed & Pet Supplies", cat:"tienda", lat:42.719824, lng:-84.414425, dir:"1802 West Grand River Avenue", tel:"+1 517 349 8435", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Doggy Daycare And Spa", cat:"peluqueria", lat:42.715392, lng:-84.394122, dir:"1284 West Grand River Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:42.735878, lng:-84.422356, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "meridian-hills": {nombre:"Meridian Hills", centro:[39.89004, -86.15721], tz:"America/New_York", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:39.868259, lng:-86.123985, dir:"2221 Broad Ripple Avenue", tel:"+1-463-777-9588", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Wellness Clinic", cat:"vet", lat:39.869038, lng:-86.134746, dir:"1430 Broad Ripple Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Broad Ripple Animal Clinic", cat:"vet", lat:39.868768, lng:-86.147226, dir:"6225 Broadway Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Indianapolis Humane Society", cat:"refugio", lat:39.899581, lng:-86.216359, dir:"7929 Michigan Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.869095, lng:-86.124202, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Broad Ripple Dog Park", cat:"parque", lat:39.86913, lng:-86.132041, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "merriam": {nombre:"Merriam", centro:[39.016806, -94.689947], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.023949, lng:-94.689252, dir:"5810 Antioch Road", tel:"+1 913-384-4445", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Great Plains SPCA Lost Pet and Admission Center", cat:"refugio", lat:39.029942, lng:-94.688647, dir:"5428 Antioch Drive", tel:"+19138083347", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Treats Unleashed", cat:"tienda", lat:39.014516, lng:-94.687675, dir:"8717 Shawnee Mission Parkway", tel:"+1-913-395-4440", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:39.024106, lng:-94.689249, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof's Stay & Play", cat:"refugio", lat:39.011715, lng:-94.692634, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "merrill-wisconsin": {nombre:"Merrill", centro:[45.180522, -89.683459], tz:"America/Chicago", lugares:[
  {n:"City of Merrill Dog Park", cat:"parque", lat:45.187085, lng:-89.729536, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "merrillville": {nombre:"Merrillville", centro:[41.482814, -87.332814], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.469884, lng:-87.299856, dir:"2881 East 81st Avenue", tel:"+1 219-942-5598", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:41.473852, lng:-87.313293, dir:"1736 East 80th Avenue", horas:[11.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "merrionette-park": {nombre:"Merrionette Park", centro:[41.681037, -87.700969], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.683143, lng:-87.701003, dir:"3205 West 115th Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "meyers-lake": {nombre:"Meyers Lake", centro:[40.812558, -81.416504], tz:"America/New_York", lugares:[
  {n:"Whiskers Wings and Wild Things", cat:"tienda", lat:40.831068, lng:-81.384118, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humble Creatures", cat:"vet", lat:40.833548, lng:-81.388855, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Healing Waters Canine Experience", cat:"tienda", lat:40.836398, lng:-81.388931, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "michigan-city": {nombre:"Michigan City", centro:[41.707539, -86.89503], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.678763, lng:-86.896041, dir:"122 Dunes Plaza", tel:"+1 219-221-4131", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Washington Park Zoo", cat:"zoo", lat:41.725179, lng:-86.899928, dir:"115 Lake Shore Drive", tel:"+1-219-873-1510", horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Brandt's Old Fashioned Pet Supplies", cat:"tienda", lat:41.718692, lng:-86.9071, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "middleburg-heights": {nombre:"Middleburg Heights", centro:[41.36144, -81.812912], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:41.376993, lng:-81.789947, dir:"6885 Southland Drive", tel:"+1 440-788-2625", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.359887, lng:-81.815945, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "middleton-wisconsin": {nombre:"Middleton", centro:[43.096292, -89.511956], tz:"America/Chicago", lugares:[
  {n:"A Breed Apart", cat:"vet", lat:43.06422, lng:-89.503633, dir:"202 South Gammon Road", tel:"+1-608-827-8555", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mounds Pet Food Warehouse", cat:"tienda", lat:43.063722, lng:-89.524519, dir:"231 Junction Road", tel:"+16088313000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:43.057172, lng:-89.524709, dir:"8210 Plaza Drive", tel:"+1 608-833-6446", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petcare Animal Hospital", cat:"vet", lat:43.06087, lng:-89.514206, dir:"7530 Mineral Point Road", tel:"+1-608-833-6585", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Passion for Paws", cat:"vet", lat:43.058124, lng:-89.527159, dir:"437 Junction Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"2313 Parmenter St, Middleton, WI 53562", cat:"peluqueria", lat:43.100522, lng:-89.511205, dir:"2313l Parmenter Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Middleton Veterinary Hospital", cat:"vet", lat:43.104725, lng:-89.510253, dir:"2705 Parmenter Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tabby & Jack's", cat:"tienda", lat:43.096574, lng:-89.501362, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Hospital", cat:"vet", lat:43.050385, lng:-89.503922, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"And Dogs Too", cat:"vet", lat:43.101458, lng:-89.48718, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mad Cat Pet Supplies", cat:"tienda", lat:43.061207, lng:-89.518205, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hotel Sisal Cat Boarding", cat:"refugio", lat:43.055905, lng:-89.498257, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Pets Veterinary Clinic", cat:"vet", lat:43.084145, lng:-89.501548, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sauk Point Veterinary Clinic", cat:"vet", lat:43.075803, lng:-89.5175, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:43.075316, lng:-89.528012, horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Emergency Group", cat:"vet", lat:43.061005, lng:-89.512064, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cat Care Clinic", cat:"vet", lat:43.056911, lng:-89.498494, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mounds Pet Food Warehouse", cat:"tienda", lat:43.096177, lng:-89.525851, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Towne Veterinary Center", cat:"vet", lat:43.060425, lng:-89.495664, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Walnut Grove Dog Park", cat:"parque", lat:43.069947, lng:-89.511847, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Penni Klein Dog Park", cat:"parque", lat:43.112451, lng:-89.538663, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "middletown-michigan": {nombre:"Middletown", centro:[42.985861, -84.144968], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.999678, lng:-84.144578, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "middletown-ohio": {nombre:"Middletown", centro:[39.516644, -84.404173], tz:"America/New_York", lugares:[
  {n:"Pet Valu", cat:"tienda", lat:39.504642, lng:-84.353634, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "middleville": {nombre:"Middleville", centro:[42.713089, -85.46196], tz:"America/New_York", lugares:[
  {n:"Middleville Bark Park", cat:"parque", lat:42.712232, lng:-85.477239, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "midland-michigan": {nombre:"Midland", centro:[43.615583, -84.247212], tz:"America/New_York", lugares:[
  {n:"Soldan's Feeds and Pet Supplies", cat:"tienda", lat:43.642538, lng:-84.251426, dir:"2032 North Saginaw Road", tel:"+1 989 839 0970", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pretty Puppies", cat:"tienda", lat:43.64388, lng:-84.247371, dir:"5027 Eastman Avenue", tel:"+1 989 941 0067", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"DogHaven Ranch", cat:"refugio", lat:43.667951, lng:-84.244285, dir:"1407 Commerce Drive", tel:"+1 989 631 7485", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:43.66051, lng:-84.24663, dir:"6910 Eastman Avenue", tel:"+1 989-832-6136", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"vet", lat:43.643057, lng:-84.227483, dir:"4925 Jefferson Avenue", tel:"+1 989 631 3350", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Eastman Animal Clinic", cat:"vet", lat:43.651335, lng:-84.246018, dir:"5910 Eastman Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barstow Woods", cat:"parque", lat:43.629045, lng:-84.232479, dir:"505 West Saint Andrews Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Midland Animal Clinic", cat:"vet", lat:43.612, lng:-84.210153, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northern Animal Clinic", cat:"vet", lat:43.641434, lng:-84.293029, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chippewassee Dog Park", cat:"parque", lat:43.611456, lng:-84.254362, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chicken coop", cat:"refugio", lat:43.604659, lng:-84.288621, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "midland-south-dakota": {nombre:"Midland", centro:[44.071654, -101.155418], tz:"America/Denver", lugares:[
  {n:"Belvidere East / Exit 170 KOA", cat:"parque", lat:43.891626, lng:-101.149681, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "milan-michigan": {nombre:"Milan", centro:[42.084862, -83.683028], tz:"America/New_York", lugares:[
  {n:"Pet Valu", cat:"tienda", lat:42.088954, lng:-83.697043, dir:"523 West Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Milan Area Animal Hospital", cat:"vet", lat:42.088954, lng:-83.696795, dir:"517 West Main Street", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "milbank": {nombre:"Milbank", centro:[45.219131, -96.635617], tz:"America/Chicago", lugares:[
  {n:"Homestead Animal Health", cat:"vet", lat:45.219461, lng:-96.649773, dir:"517 West 4th Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "milford-michigan": {nombre:"Milford", centro:[42.59178, -83.60007], tz:"America/New_York", lugares:[
  {n:"Milford Feed Co.", cat:"tienda", lat:42.585174, lng:-83.593818, dir:"648 East Huron Street", tel:"+1-248-685-3011", horas:[9.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Dr Clark", cat:"vet", lat:42.588116, lng:-83.599865, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Milford Dog Park", cat:"parque", lat:42.583104, lng:-83.612541, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.583179, lng:-83.611283, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "milford-ohio": {nombre:"Milford", centro:[39.174625, -84.295899], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.16051, lng:-84.273113, dir:"245 Rivers Edge Drive", tel:"+1 513-248-4954", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Mary Jo's Cinti K9", cat:"refugio", lat:39.174483, lng:-84.27495, dir:"1003 Lila Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Suite Paws", cat:"refugio", lat:39.169643, lng:-84.266655, dir:"768 US 50", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Milford Village Veterinary Clinic", cat:"vet", lat:39.175813, lng:-84.283899, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "miller-south-dakota": {nombre:"Miller", centro:[44.518315, -98.988434], tz:"America/Chicago", lugares:[
  {n:"Midwest Vet Service", cat:"vet", lat:44.516912, lng:-98.988275, dir:"132 North Broadway Avenue", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "millington-michigan": {nombre:"Millington", centro:[43.28134, -83.529814], tz:"America/New_York", lugares:[
  {n:"Care Veterinary Services", cat:"vet", lat:43.318788, lng:-83.550987, dir:"7119 State Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "milnor": {nombre:"Milnor", centro:[46.259128, -97.456202], tz:"America/Chicago", lugares:[
  {n:"Sheyenne Valley Veterinary Service", cat:"vet", lat:46.250171, lng:-97.450839, dir:"114 Ruby Road", tel:"+1-701-427-9358", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "milton-wisconsin": {nombre:"Milton", centro:[42.775357, -88.939002], tz:"America/Chicago", lugares:[
  {n:"Tails n Trails Dog Park", cat:"parque", lat:42.773397, lng:-88.965665, dir:"886 West High Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park", cat:"parque", lat:42.859398, lng:-88.90963, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "milwaukee": {nombre:"Milwaukee", centro:[43.038648, -87.909075], tz:"America/Chicago", lugares:[
  {n:"Downtown Veterinary Clinic", cat:"vet", lat:43.048005, lng:-87.899927, dir:"931 East Ogden Avenue", tel:"+1 414 323 7587", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Best Fish", cat:"tienda", lat:43.047915, lng:-87.914528, dir:"1335 North Doctor Martin Luther King Junior Drive", tel:"+1 414 224 0486", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Milwaukee Vet Clinic", cat:"vet", lat:43.030287, lng:-87.910235, dir:"107 E Seeboth St", tel:"+1-414-310-8997", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"While You Were Out Pet Sitting Services", cat:"refugio", lat:43.006105, lng:-87.903066, dir:"432 East Bay Street", tel:"+1-414-324-9380", horas:[6.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Central Bark Doggy Day Care", cat:"refugio", lat:43.034491, lng:-87.945506, dir:"333 North 25th Street", tel:"+1 414 933 4787", horas:[6.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Cat Care Clinic", cat:"vet", lat:43.033358, lng:-87.908991, tel:"+1 414 272 2287", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Small Animal Hospital", cat:"vet", lat:43.061009, lng:-87.890145, tel:"+1 414 276 0701", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Mac's Pet Depot Barkery", cat:"tienda", lat:43.004583, lng:-87.905762, dir:"2197 South Kinnickinnic Avenue", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"MKE Dog Park", cat:"parque", lat:43.035763, lng:-87.910709, dir:"103 West Clybourn Street", horas:[6.0, 22.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mineral-point-wisconsin": {nombre:"Mineral Point", centro:[42.860113, -90.179769], tz:"America/Chicago", lugares:[
  {n:"Country View Veterinary Clinic", cat:"vet", lat:42.860107, lng:-90.198547, dir:"960 Fountain Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "minerva-park": {nombre:"Minerva Park", centro:[40.076453, -82.943792], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:40.056239, lng:-82.906153, dir:"4216 Easton Gateway Drive", tel:"+1 614-934-6096", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.049894, lng:-82.923362, dir:"3713 Easton Market", tel:"+1 614-418-9389", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Canine Design", cat:"peluqueria", lat:40.085858, lng:-82.948804, dir:"5648 Columbus Square", tel:"+1-614-891-2955", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grooming Viar", cat:"peluqueria", lat:40.088089, lng:-82.947778, dir:"5803 Emporium Square", tel:"+1-614-899-8994", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Morse Road Veterinary Clinic", cat:"vet", lat:40.061145, lng:-82.981863, dir:"1388 Morse Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Franklin County Animal Shelter & Adoption Center", cat:"refugio", lat:40.055827, lng:-82.969791, dir:"4340 Tamarack Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:40.050025, lng:-82.923518, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Valu", cat:"tienda", lat:40.060032, lng:-82.91583, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "minford": {nombre:"Minford", centro:[38.860409, -82.85872], tz:"America/New_York", lugares:[
  {n:"Rose Valley Animal Park", cat:"zoo", lat:38.90557, lng:-82.786171, dir:"330 Marcum Road", tel:"+1-740-820-7878", horas:[11.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "minneapolis-minnesota": {nombre:"Minneapolis", centro:[44.9773, -93.265469], tz:"America/Chicago", lugares:[
  {n:"Pet Doctors", cat:"vet", lat:44.962514, lng:-93.276947, dir:"25 East Franklin Avenue", tel:"+1-612-607-0044", horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"MetroPet Animal Hospital", cat:"vet", lat:44.955329, lng:-93.296652, dir:"2603 Hennepin Avenue South", tel:"+1-612-374-4414", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Urban Tails Pet Supply", cat:"tienda", lat:44.961628, lng:-93.288253, dir:"2106 Lyndale Avenue South", tel:"+1-612-879-0709", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Downtown Dogs", cat:"refugio", lat:44.978671, lng:-93.290971, dir:"821 2nd Avenue North", tel:"+16123743647", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kenwood Pet Clinic", cat:"vet", lat:44.96152, lng:-93.308178, dir:"2107 Penn Avenue South", tel:"+16123775551", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vet Partners Pet Hospital", cat:"vet", lat:44.975713, lng:-93.253252, dir:"1030 Washington Avenue South", tel:"+1-612-746-0300", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Uptown Veterinarian", cat:"vet", lat:44.945543, lng:-93.298049, dir:"3131 Hennepin Avenue South", tel:"+1-612-825-6859", horas:[7.75, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Kitty Klinic", cat:"vet", lat:44.939693, lng:-93.287827, dir:"3447 Lyndale Avenue South", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Royal Pet Beauty Shop", cat:"peluqueria", lat:44.947709, lng:-93.287901, dir:"3019 Lyndale Avenue South", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Paws", cat:"refugio", lat:44.98091, lng:-93.262607, dir:"300 South 2nd Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mosaic", cat:"resto", lat:44.946884, lng:-93.298475, dir:"3040 Hennepin Avenue South", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Thesis Coffee Collective", cat:"resto", lat:44.94506, lng:-93.298508, dir:"3142 Hennepin Avenue South", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Livewell Animal Hospital", cat:"vet", lat:44.989399, lng:-93.256581, dir:"307 1st Avenue Northeast", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Minneapolis Pet Resource Center", cat:"tienda", lat:45.009321, lng:-93.280659, dir:"2825 North 2nd Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lyndale Animal Hospital", cat:"vet", lat:44.956006, lng:-93.288347, dir:"2544 Lyndale Avenue South", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Regal Pet Grooming", cat:"tienda", lat:44.934263, lng:-93.233163, dir:"2700 East 38th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nokomis Pet Clinic", cat:"vet", lat:44.926748, lng:-93.230109, dir:"2917 East 42nd Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Franklin Terrace Off-Leash Dog Park", cat:"parque", lat:44.964459, lng:-93.227587, dir:"925 Franklin Terrace", horas:[6.0, 24.0], nota:"Dato de OpenStreetMap"},
  {n:"North Loop Dog Park", cat:"parque", lat:44.988171, lng:-93.27935, dir:"790 North 3rd Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Unleashed Hounds & Hops", cat:"parque", lat:44.980023, lng:-93.286057, dir:"200 East Lyndale Avenue North", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K-9 & Kitty Kutters", cat:"peluqueria", lat:44.939684, lng:-93.252259, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's Pet Food & Supplies", cat:"tienda", lat:44.987701, lng:-93.254366, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Wellness Club", cat:"refugio", lat:44.980483, lng:-93.285597, horas:[7.5, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Gateway Play Area", cat:"parque", lat:44.970848, lng:-93.269711, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"RiverWest Dog Area", cat:"parque", lat:44.981263, lng:-93.261612, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nicollet Dog Park", cat:"parque", lat:44.942224, lng:-93.278289, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"205 Bark", cat:"parque", lat:44.978042, lng:-93.257558, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "minneha": {nombre:"Minneha", centro:[37.714458, -97.240043], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:37.739711, lng:-97.243934, dir:"3050 North Rock Road", tel:"+13166346196", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:37.676869, lng:-97.201523, dir:"11739 East Kellogg Drive", tel:"+1 316-361-5174", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:37.724753, lng:-97.24307, dir:"2250 North Rock Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet", cat:"vet", lat:37.738199, lng:-97.244093, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "minnesota-lake": {nombre:"Minnesota Lake", centro:[43.840993, -93.83274], tz:"America/Chicago", lugares:[
  {n:"Kasey's Country Cuts", cat:"peluqueria", lat:43.842508, lng:-93.832223, dir:"300 Main Street North", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "minnetonka": {nombre:"Minnetonka", centro:[44.940509, -93.463894], tz:"America/Chicago", lugares:[
  {n:"Glen Lake Animal Hospital", cat:"vet", lat:44.902993, lng:-93.467567, dir:"14805 Excelsior Boulevard", tel:"+19529351232", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Livewell Animal Urgent Care of Minnetonka", cat:"vet", lat:44.966453, lng:-93.441506, dir:"1809 Plymouth Road", tel:"+1-952-248-4434", horas:[12.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Stuff", cat:"tienda", lat:44.903333, lng:-93.467043, dir:"14731 Excelsior Boulevard", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "minocqua": {nombre:"Minocqua", centro:[45.871342, -89.710981], tz:"America/Chicago", lugares:[
  {n:"Northwoods Veterinary Hospital", cat:"vet", lat:45.885928, lng:-89.721042, dir:"8687 Blumenstein Road", tel:"+1 715 356 3269", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Wildwood Wildlife Park", cat:"zoo", lat:45.887055, lng:-89.740695, dir:"10094 State Highway 70", horas:[9.0, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Lakeland Area Dog Park", cat:"parque", lat:45.886944, lng:-89.725066, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "minooka": {nombre:"Minooka", centro:[41.455308, -88.26173], tz:"America/Chicago", lugares:[
  {n:"Rusty Ridge Animal Center", cat:"vet", lat:41.499116, lng:-88.271556, dir:"949 Bell Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Forepaws", cat:"tienda", lat:41.44176, lng:-88.272041, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "minot-north-dakota": {nombre:"Minot", centro:[48.23251, -101.296273], tz:"America/Chicago", lugares:[
  {n:"Pinkerton Animal Hospital", cat:"vet", lat:48.258694, lng:-101.296745, dir:"2105 North Broadway", tel:"+1 701-852-3055", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:48.202195, lng:-101.320112, dir:"3212 16th Street Southwest", tel:"+1 701-837-1064", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Roosevelt Park Zoo", cat:"zoo", lat:48.233816, lng:-101.27434, dir:"1219 Burdick Expressway East", tel:"+1 701-857-4166", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Parade", cat:"tienda", lat:48.203247, lng:-101.303794, dir:"700 7th Street Southwest", tel:"+1 701-852-9466", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Core Animal Clinic", cat:"vet", lat:48.2036, lng:-101.303849, dir:"2910 7th Street Southwest", tel:"+1 701 837 5600", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:48.260756, lng:-101.322206, tel:"+17018574070", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dakota Bark Park", cat:"parque", lat:48.231144, lng:-101.337887, dir:"505 505 25th Street Southwest", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"R And J’s World Of Pets", cat:"tienda", lat:48.202834, lng:-101.29708, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "minster": {nombre:"Minster", centro:[40.393103, -84.376061], tz:"America/New_York", lugares:[
  {n:"Lake Loramie Dog Park", cat:"parque", lat:40.379218, lng:-84.358163, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mishawaka": {nombre:"Mishawaka", centro:[41.661164, -86.180703], tz:"America/New_York", lugares:[
  {n:"Family Pet Health Center", cat:"vet", lat:41.665489, lng:-86.206384, dir:"2910 E Mishawaka Aven", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mishawaka Animal Care Center", cat:"vet", lat:41.694543, lng:-86.183188, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cat Care Clinic", cat:"vet", lat:41.688121, lng:-86.196094, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Magrane Pet Medical Center", cat:"vet", lat:41.695748, lng:-86.177411, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of St. Joseph County", cat:"refugio", lat:41.682469, lng:-86.185929, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mishicot": {nombre:"Mishicot", centro:[44.239162, -87.641195], tz:"America/Chicago", lugares:[
  {n:"Mishicot Veterinary Clinic", cat:"vet", lat:44.235822, lng:-87.644748, dir:"115 Park Lane", tel:"+1 920-755-2115", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mission": {nombre:"Mission", centro:[39.027783, -94.655791], tz:"America/Chicago", lugares:[
  {n:"Go Pet Go", cat:"tienda", lat:39.022396, lng:-94.657669, dir:"6200 Johnson Drive", tel:"+1-913-283-8363", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Mission Pet Mart, Inc.", cat:"tienda", lat:39.020813, lng:-94.666061, dir:"6900 Martway Street", tel:"+19132367387", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Mission Veterinary Emergency & Specialty", cat:"vet", lat:39.022625, lng:-94.654299, dir:"5914 Johnson Drive", tel:"+1 913-722-5566", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Unleashed Pet Rescue", cat:"refugio", lat:39.02155, lng:-94.666042, dir:"5918 Broadmoor Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mission Animal Clinic", cat:"vet", lat:39.021641, lng:-94.665304, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Empire Pets", cat:"peluqueria", lat:39.021028, lng:-94.660565, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mitchell-indiana": {nombre:"Mitchell", centro:[38.73283, -86.473602], tz:"America/Chicago", lugares:[
  {n:"Groomingdales Grooming & Boarding", cat:"peluqueria", lat:38.758116, lng:-86.509713, dir:"2414 Rariden Hill Road", tel:"+1-812-675-2145", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mitchell-nebraska": {nombre:"Mitchell", centro:[41.940166, -103.808664], tz:"America/Denver", lugares:[
  {n:"Carol A. Fuller Charity Foundation Dog Park", cat:"parque", lat:41.939597, lng:-103.816045, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mitchell Valley Animal Hospital", cat:"vet", lat:41.94124, lng:-103.797502, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mitchell-south-dakota": {nombre:"Mitchell", centro:[43.70953, -98.025379], tz:"America/Chicago", lugares:[
  {n:"Creekside Veterinary Clinic", cat:"vet", lat:43.686974, lng:-98.039871, dir:"1111 West Spruce Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lakeview Veterinary Clinic", cat:"vet", lat:43.702371, lng:-98.051767, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ed's Pet World", cat:"tienda", lat:43.710673, lng:-98.025131, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "moberly": {nombre:"Moberly", centro:[39.420114, -92.43643], tz:"America/Chicago", lugares:[
  {n:"Rothwell Park Large Dog Park", cat:"parque", lat:39.420324, lng:-92.460557, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rothwell Park Small Dog Park", cat:"parque", lat:39.420299, lng:-92.460233, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mogadore": {nombre:"Mogadore", centro:[41.050775, -81.393946], tz:"America/New_York", lugares:[
  {n:"Mogadore Veterinary Hospital", cat:"vet", lat:41.039167, lng:-81.392746, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mokena": {nombre:"Mokena", centro:[41.526144, -87.889219], tz:"America/Chicago", lugares:[
  {n:"Nighthawk Veterinary Clinic", cat:"vet", lat:41.527964, lng:-87.900704, dir:"11600 Francis Road", tel:"+1-708-478-6482", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.501548, lng:-87.889007, dir:"21430 Wolf Road", tel:"+1 815-464-4979", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"All American Pet Grooming", cat:"peluqueria", lat:41.541772, lng:-87.889257, dir:"19117 Wolf Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Moneka Animal Clinic", cat:"vet", lat:41.542614, lng:-87.847761, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "moline": {nombre:"Moline", centro:[41.506611, -90.514999], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.469828, lng:-90.523141, dir:"4160 10th Street Drive", tel:"+1 309-517-2308", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"City Line Veterinary Center", cat:"vet", lat:41.490016, lng:-90.536719, dir:"2141 1st Street A", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "monclova": {nombre:"Monclova", centro:[41.558663, -83.732993], tz:"America/New_York", lugares:[
  {n:"Rover Come Over", cat:"refugio", lat:41.569438, lng:-83.736875, dir:"3945 Albon Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mondovi": {nombre:"Mondovi", centro:[44.567872, -91.670695], tz:"America/Chicago", lugares:[
  {n:"Animal Wellness Center", cat:"vet", lat:44.577739, lng:-91.658253, dir:"201 Industrial Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Buffalo County Humaine Society", cat:"refugio", lat:44.579546, lng:-91.670031, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mondovi Veterinary Service", cat:"vet", lat:44.571267, lng:-91.650255, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "monona-wisconsin": {nombre:"Monona", centro:[43.062219, -89.334007], tz:"America/Chicago", lugares:[
  {n:"Beltline Animal Hospital Ltd", cat:"vet", lat:43.047882, lng:-89.316952, dir:"800 East Broadway", tel:"+16082221515", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Golden Guppy", cat:"tienda", lat:43.048286, lng:-89.323793, dir:"115 East Broadway", tel:"+1-608-405-5548", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Citywide Pet Clinic", cat:"vet", lat:43.053979, lng:-89.325921, dir:"6009 Monona Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Monona Dog Park", cat:"parque", lat:43.05098, lng:-89.316413, dir:"851 Femrite Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Monona Veterinary Clinic", cat:"vet", lat:43.062359, lng:-89.32652, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Area", cat:"parque", lat:43.023569, lng:-89.346146, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"EarthWise Pet Supply & Grooming", cat:"peluqueria", lat:43.084967, lng:-89.278558, horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Red Fish Blue Fish Aquatics", cat:"tienda", lat:43.085304, lng:-89.300688, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tabby and Jacks", cat:"tienda", lat:43.078871, lng:-89.323999, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Capital Springs Dog Park", cat:"parque", lat:43.023755, lng:-89.347827, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mounds Pet Food Warehouse", cat:"tienda", lat:43.067356, lng:-89.310582, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Star Park Dog Park", cat:"parque", lat:43.092437, lng:-89.277762, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "monroe-iowa": {nombre:"Monroe", centro:[41.522214, -93.101868], tz:"America/Chicago", lugares:[
  {n:"Monroe Animal Clinic", cat:"vet", lat:41.521815, lng:-93.103227, horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"}
 ]},
 "monroe-michigan": {nombre:"Monroe", centro:[41.914504, -83.396825], tz:"America/New_York", lugares:[
  {n:"River Raisin Veterinary Clinic", cat:"vet", lat:41.918402, lng:-83.395977, dir:"106 North Monroe Street", tel:"+1-734-243-4222", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "monroe-ohio": {nombre:"Monroe", centro:[39.443269, -84.363365], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:39.496292, lng:-84.328055, dir:"3464 Towne Boulevard", tel:"+1 513-422-7641", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Monroe Family Pet Hospital", cat:"vet", lat:39.443916, lng:-84.379161, dir:"3301 Heritage Green Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Treasure Barn Dog Park", cat:"parque", lat:39.445892, lng:-84.367468, dir:"230 Seminary Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"MonRover Dog Park", cat:"parque", lat:39.439008, lng:-84.362118, dir:"401 Old Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "monroe-wisconsin": {nombre:"Monroe", centro:[42.60183, -89.63924], tz:"America/Chicago", lugares:[
  {n:"Monroe Vet Service", cat:"vet", lat:42.598497, lng:-89.622635, dir:"1317 31st Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "monrovia-indiana": {nombre:"Monrovia", centro:[39.578936, -86.482219], tz:"America/Chicago", lugares:[
  {n:"Love’s Dog Park", cat:"parque", lat:39.616593, lng:-86.479237, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "montague-michigan": {nombre:"Montague", centro:[43.416677, -86.357013], tz:"America/New_York", lugares:[
  {n:"White Lake Animal Clinic", cat:"vet", lat:43.4271, lng:-86.346447, dir:"9300 Walsh Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "montello-wisconsin": {nombre:"Montello", centro:[43.791861, -89.328819], tz:"America/Chicago", lugares:[
  {n:"River Country Animal Wellness", cat:"vet", lat:43.782316, lng:-89.326305, dir:"431 Main St", tel:"+1-608-297-7995", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fox River Feed Mill", cat:"tienda", lat:43.785952, lng:-89.325516, dir:"15 Island Drive", tel:"+1-608-297-2868", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "montfort": {nombre:"Montfort", centro:[42.97256, -90.433426], tz:"America/Chicago", lugares:[
  {n:"Montfort", cat:"vet", lat:42.966181, lng:-90.434757, dir:"200 US -18", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "montgomery-ohio": {nombre:"Montgomery", centro:[39.228243, -84.353966], tz:"America/New_York", lugares:[
  {n:"Blue Ash Montgomery Pet Hospital", cat:"vet", lat:39.258566, lng:-84.33984, dir:"10770 Montgomery Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.271994, lng:-84.330949, dir:"11345 Montgomery Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Village Animal Hospital", cat:"vet", lat:39.22865, lng:-84.353511, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetPeople Montgomery", cat:"tienda", lat:39.235926, lng:-84.351518, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"EarthWise Pet", cat:"peluqueria", lat:39.269964, lng:-84.326833, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "monticello-illinois": {nombre:"Monticello", centro:[40.026295, -88.567956], tz:"America/Chicago", lugares:[
  {n:"Animal Hospital of Monticello", cat:"vet", lat:40.028472, lng:-88.578821, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "monticello-minnesota": {nombre:"Monticello", centro:[45.30539, -93.794], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:45.294855, lng:-93.775023, dir:"1425 7th Street East", tel:"+1 763-271-1001", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Laundromutt Dog Grooming", cat:"peluqueria", lat:45.30996, lng:-93.790482, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "morenci-michigan": {nombre:"Morenci", centro:[41.719511, -84.217396], tz:"America/New_York", lugares:[
  {n:"Morenci Vet", cat:"vet", lat:41.722358, lng:-84.19801, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "morris-illinois": {nombre:"Morris", centro:[41.357413, -88.421523], tz:"America/Chicago", lugares:[
  {n:"Tag-A-Long Dog Park", cat:"parque", lat:41.372812, lng:-88.432331, dir:"605 Michael Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "morrison-illinois": {nombre:"Morrison", centro:[41.809406, -89.96495], tz:"America/Chicago", lugares:[
  {n:"Morrison Veterinary Clinic", cat:"vet", lat:41.801127, lng:-89.921322, dir:"14993 Lyndon Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "morrow-ohio": {nombre:"Morrow", centro:[39.354505, -84.127157], tz:"America/New_York", lugares:[
  {n:"Buckley Bros", cat:"tienda", lat:39.35731, lng:-84.144035, dir:"653 West Pike Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "morton": {nombre:"Morton", centro:[40.612735, -89.459323], tz:"America/Chicago", lugares:[
  {n:"Heartland Veterinary Clinic", cat:"vet", lat:40.613863, lng:-89.472827, dir:"250 Detroit Avenue", tel:"+1-309-266-5306", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogwood Park", cat:"parque", lat:40.605842, lng:-89.459007, dir:"420 East Washington Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Morton Animal Hospital", cat:"vet", lat:40.627981, lng:-89.457395, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mosinee": {nombre:"Mosinee", centro:[44.792767, -89.703075], tz:"America/Chicago", lugares:[
  {n:"Tail - Wagging Trims, LLC", cat:"peluqueria", lat:44.797397, lng:-89.710238, dir:"1106 Main Street", tel:"+1-715-432-6680", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mosinee Veterinary Clinic", cat:"vet", lat:44.785995, lng:-89.687676, dir:"549 State Highway 153", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wisconsin Reptiles Unlimited", cat:"tienda", lat:44.788501, lng:-89.688448, dir:"559 Liberty Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mounds-view": {nombre:"Mounds View", centro:[45.106895, -93.207593], tz:"America/Chicago", lugares:[
  {n:"Brighton Veterinary Hospital", cat:"vet", lat:45.085816, lng:-93.221314, dir:"2615 Mississippi Street", tel:"+1-651-636-1063", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mount-clemens": {nombre:"Mount Clemens", centro:[42.597256, -82.877975], tz:"America/New_York", lugares:[
  {n:"Behnke Dog Park", cat:"parque", lat:42.609605, lng:-82.891575, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Macomb County Animal Shelter", cat:"refugio", lat:42.618802, lng:-82.897791, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mount-gilead-ohio": {nombre:"Mount Gilead", centro:[40.549227, -82.827401], tz:"America/New_York", lugares:[
  {n:"Groomingdales Pet Salon", cat:"tienda", lat:40.553751, lng:-82.827032, dir:"172 North Main Street", tel:"+1-419-751-7217", horas:[7.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Village Veterinary Clinic", cat:"vet", lat:40.545289, lng:-82.829696, dir:"147 South Main Street", tel:"+1-419-946-5136", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Whetstone Veterinary Hospital", cat:"vet", lat:40.554175, lng:-82.819404, dir:"5441 United States Highway 42", tel:"+1-419-946-5836", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Morrow County Dog Shelter", cat:"refugio", lat:40.559062, lng:-82.810021, dir:"115 Young Avenue", tel:"+1-419-946-1747", horas:[11.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Maple Run Veterinary Clinic", cat:"vet", lat:40.515473, lng:-82.817626, dir:"4400 State Route 61", tel:"+1-419-946-8456", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mount-healthy": {nombre:"Mount Healthy", centro:[39.233669, -84.545778], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.259266, lng:-84.600294, dir:"10164 Colerain Avenue", tel:"+1 513-245-9500", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Valu", cat:"tienda", lat:39.24394, lng:-84.593701, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mount-horeb-wisconsin": {nombre:"Mount Horeb", centro:[43.008618, -89.738456], tz:"America/Chicago", lugares:[
  {n:"Havens Petting Farm", cat:"zoo", lat:43.014228, lng:-89.784258, dir:"2894 Erbe Road", horas:[11.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mount-morris-michigan": {nombre:"Mount Morris", centro:[43.118637, -83.694958], tz:"America/New_York", lugares:[
  {n:"Mayfair Animal Hospital", cat:"vet", lat:43.119304, lng:-83.734837, dir:"8025 Clio Road", tel:"+1-810-785-0111", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:43.122733, lng:-83.692971, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mount-pleasant-michigan": {nombre:"Mount Pleasant", centro:[43.597646, -84.76685], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:43.574445, lng:-84.76369, dir:"4218 East Blue Grass Road", tel:"+1 989-546-2145", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Isabella Cat Clinic", cat:"vet", lat:43.583274, lng:-84.752592, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Feeders Pet Supply", cat:"tienda", lat:43.584602, lng:-84.765936, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hannah's Bark Park", cat:"parque", lat:43.620238, lng:-84.78698, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"1820 South Apartments Dog Run", cat:"parque", lat:43.584696, lng:-84.788996, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stone Crest Dog Park", cat:"parque", lat:43.599015, lng:-84.748947, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mount-pleasant-wisconsin": {nombre:"Mount Pleasant", centro:[42.719161, -87.854336], tz:"America/Chicago", lugares:[
  {n:"Angelcare Animal Hospital", cat:"vet", lat:42.718927, lng:-87.866396, dir:"6915 Washington Avenue", tel:"+1-262-886-3337", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:42.704043, lng:-87.854604, dir:"2310 South Green Bay Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Havahart Pets", cat:"tienda", lat:42.719982, lng:-87.860077, dir:"6500 Washington Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Avenue Pet Shoppe", cat:"tienda", lat:42.718876, lng:-87.818371, dir:"3222 Washington Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mount-prospect": {nombre:"Mount Prospect", centro:[42.066417, -87.937291], tz:"America/Chicago", lugares:[
  {n:"Tiffnie’s Dog Grooming", cat:"peluqueria", lat:42.066598, lng:-87.908485, dir:"620 East Central Road", tel:"+1-224-612-6050", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"The Pet Bodega", cat:"tienda", lat:42.061871, lng:-87.934607, dir:"109 East Prospect Avenue", tel:"+1-847-222-8005", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Randhurst Animal Hospital", cat:"vet", lat:42.078664, lng:-87.932386, dir:"212 East Rand Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Commons Dog Park", cat:"parque", lat:42.071283, lng:-87.95995, dir:"1500 W Central Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mount-vernon-illinois": {nombre:"Mount Vernon", centro:[38.317271, -88.90312], tz:"America/Chicago", lugares:[
  {n:"Jefferson County Animal Shelter", cat:"refugio", lat:38.306698, lng:-88.887354, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mount-vernon-indiana": {nombre:"Mount Vernon", centro:[37.931802, -87.894785], tz:"America/Chicago", lugares:[
  {n:"Hawthorne Animal Clinic", cat:"vet", lat:37.934726, lng:-87.886084, dir:"903 East 4th Street", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mount-vernon-ohio": {nombre:"Mount Vernon", centro:[40.393396, -82.485718], tz:"America/New_York", lugares:[
  {n:"We Luv Pets", cat:"tienda", lat:40.403292, lng:-82.447874, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mount-vernon-south-dakota": {nombre:"Mount Vernon", centro:[43.710542, -98.260359], tz:"America/Chicago", lugares:[
  {n:"SoDak Labradors & Gundog Kennels LLC", cat:"parque", lat:43.702418, lng:-98.150594, dir:"40276 254th Street", tel:"+1-605-999-5647", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mountain-plains": {nombre:"Mountain Plains", centro:[44.469216, -103.865914], tz:"America/Denver", lugares:[
  {n:"Spearfish Animal Hospital", cat:"vet", lat:44.471124, lng:-103.808865, dir:"3010 7th Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Off Leash Dog Park", cat:"parque", lat:44.462275, lng:-103.798542, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "moville": {nombre:"Moville", centro:[42.48884, -96.072453], tz:"America/Chicago", lugares:[
  {n:"Moville Veterinary Clinic", cat:"vet", lat:42.486952, lng:-96.072803, dir:"123 South 2nd Street", tel:"+1-712-873-3303", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mukwonago": {nombre:"Mukwonago", centro:[42.86668, -88.333427], tz:"America/Chicago", lugares:[
  {n:"Animal House Pets & Supplies", cat:"tienda", lat:42.86323, lng:-88.331863, dir:"100 Fox Street", tel:"+1-262-363-7387", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mulberry-ohio": {nombre:"Mulberry", centro:[39.193393, -84.242159], tz:"America/New_York", lugares:[
  {n:"Camp Bow Wow Milford", cat:"refugio", lat:39.192016, lng:-84.25629, dir:"892 State Route 28", tel:"+1-513-417-6399", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Day Heights Veterinary Clinic", cat:"vet", lat:39.174302, lng:-84.2359, dir:"5628 Wolfpen Pleasant Hill Road", tel:"+1-513-248-0904", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Seven Hills Pet Clinic", cat:"vet", lat:39.210711, lng:-84.208949, dir:"1376 State Route 28", tel:"+1-513-575-9696", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Medical Centre", cat:"vet", lat:39.191539, lng:-84.253084, dir:"Business State Route 28", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"KennelResorts", cat:"refugio", lat:39.188758, lng:-84.247, dir:"5825 Meadow View Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wags to Riches", cat:"peluqueria", lat:39.175685, lng:-84.22703, dir:"1245 State Route 131", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.19169, lng:-84.235204, dir:"1079 State Route 28", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Oncology & Referral Clinic", cat:"vet", lat:39.191111, lng:-84.251499, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:39.189633, lng:-84.198503, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:39.188074, lng:-84.25323, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "muncie-indiana": {nombre:"Muncie", centro:[40.193689, -85.386527], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:40.220692, lng:-85.440859, dir:"3450 North Morrison Road", tel:"+1 765-286-0878", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Emerson Dog Park", cat:"parque", lat:40.198845, lng:-85.39632, dir:"900 W Ashland Ave", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.220866, lng:-85.378128, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Downtown Dogs", cat:"peluqueria", lat:40.192708, lng:-85.390114, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westview Animal Clinic", cat:"vet", lat:40.193324, lng:-85.42981, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wags & Whiskers", cat:"peluqueria", lat:40.193989, lng:-85.427683, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riverview Animal Hospital", cat:"vet", lat:40.191938, lng:-85.330248, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Maplewood Animal Hospital", cat:"vet", lat:40.210281, lng:-85.381903, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Muncie Animal Care Services", cat:"refugio", lat:40.232887, lng:-85.396599, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waggle Bottoms", cat:"tienda", lat:40.221836, lng:-85.343386, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Roo's Holistic Pet Store", cat:"tienda", lat:40.220368, lng:-85.426631, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mundelein": {nombre:"Mundelein", centro:[42.263079, -88.003965], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.281941, lng:-88.042839, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "murdo": {nombre:"Murdo", centro:[43.888322, -100.712914], tz:"America/Chicago", lugares:[
  {n:"Murdo Veterinary Clinic", cat:"vet", lat:43.887259, lng:-100.704099, dir:"408 Cedar Avenue", tel:"+16056692531", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "murphy": {nombre:"Murphy", centro:[38.49013, -90.487218], tz:"America/Chicago", lugares:[
  {n:"R Veterinary at Romaine Creek", cat:"vet", lat:38.468034, lng:-90.446596, dir:"821 Romaine Creek Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stargate Kennel", cat:"refugio", lat:38.458152, lng:-90.444848, dir:"2643 Stonecrest Drive", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "murphysboro": {nombre:"Murphysboro", centro:[37.764495, -89.335089], tz:"America/Chicago", lugares:[
  {n:"St. Francis C.A.R.E.", cat:"refugio", lat:37.756027, lng:-89.280362, dir:"6228 Country Club Road", tel:"+1-618-687-2079", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "muscoda": {nombre:"Muscoda", centro:[43.18535, -90.443049], tz:"America/Chicago", lugares:[
  {n:"Wags & Wiggles", cat:"peluqueria", lat:43.185784, lng:-90.442833, dir:"112 North Wisconsin Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "muskegon": {nombre:"Muskegon", centro:[43.234181, -86.248392], tz:"America/New_York", lugares:[
  {n:"Lakeshore Animal Hospital", cat:"vet", lat:43.220137, lng:-86.26549, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "muskegon-heights": {nombre:"Muskegon Heights", centro:[43.201126, -86.238946], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:43.206926, lng:-86.20205, dir:"1720 East Sherman Boulevard", tel:"+1 231-737-1165", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "naperville": {nombre:"Naperville", centro:[41.77287, -88.147928], tz:"America/Chicago", lugares:[
  {n:"The Upscale Tail", cat:"peluqueria", lat:41.746193, lng:-88.168026, dir:"1419 Plainfield Naperville Road", tel:"+1-630-632-8245", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PurrFurred", cat:"peluqueria", lat:41.779767, lng:-88.159781, dir:"670 West 5th Avenue", tel:"+1 630 577 7652", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Beach for Dogs", cat:"peluqueria", lat:41.78403, lng:-88.162865, dir:"790 Royal Saint George Drive", tel:"+1 630 632 4979", horas:[7.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"EarthWise Pet", cat:"tienda", lat:41.784326, lng:-88.16224, dir:"790 Royal Saint George Drive", tel:"+1 630 470 9739", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blue Line Coral", cat:"tienda", lat:41.780691, lng:-88.177658, dir:"1238 West Ogden Avenue", tel:"+1 630 857 9166", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Kriser's Natural Pet", cat:"peluqueria", lat:41.755141, lng:-88.14215, dir:"8 West Gartner Road", tel:"+1-331-281-0509", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.786684, lng:-88.13515, dir:"720 East Ogden Avenue", tel:"+1 630 904 2100", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Central Bark Aurora-Fox Valley", cat:"peluqueria", lat:41.756146, lng:-88.207499, dir:"4389 Fox Valley Center Drive", tel:"+1-630-486-1277", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Two Bostons Pet Botique", cat:"tienda", lat:41.773133, lng:-88.149712, dir:"103 West Jefferson Avenue", tel:"+1 630 357 7621", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Naperville Animal Hospital", cat:"vet", lat:41.791468, lng:-88.130597, dir:"1023 East Ogden Avenue", tel:"+1 630 355 5300", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSuites", cat:"refugio", lat:41.785413, lng:-88.138764, dir:"540 East Ogden Avenue", tel:"+1 630 467 6826", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:41.766151, lng:-88.18575, dir:"1586 West Ogden Avenue", tel:"+1 630 420 9155", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.714727, lng:-88.205179, dir:"2747 Forgue Drive", tel:"+1 630 904 0500", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wag 'N Paddle", cat:"refugio", lat:41.769807, lng:-88.199748, dir:"1847 West Jefferson Avenue", tel:"+1 331 229 8660", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Springbrook Animal Care Center", cat:"vet", lat:41.714223, lng:-88.205273, dir:"2759 Forgue Drive", tel:"+1 630 428 0500", horas:[8.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Fancy Face Pet Salon", cat:"peluqueria", lat:41.725534, lng:-88.20524, dir:"2959 Artesian Road", tel:"+1 630 548 0949", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"County Line Animal Hospital", cat:"vet", lat:41.727503, lng:-88.130658, dir:"2200 South Washington Street", tel:"+1 630 983 5551", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Wants", cat:"tienda", lat:41.785487, lng:-88.137534, dir:"630 East Ogden Avenue", tel:"+1 630 352 6062", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Two Bostons", cat:"tienda", lat:41.748946, lng:-88.198345, dir:"2523 West 75th Street", tel:"+1 630 305 0150", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Hospital of Naperville", cat:"vet", lat:41.765855, lng:-88.20642, dir:"740 North Illinois Route 59", tel:"+1630 394 4445", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hounds Town", cat:"refugio", lat:41.753984, lng:-88.205474, dir:"988 South Illinois Route 59", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sudzy Puppy", cat:"peluqueria", lat:41.78602, lng:-88.140587, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Springbrook Dog Park", cat:"parque", lat:41.737494, lng:-88.191956, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nappanee": {nombre:"Nappanee", centro:[41.442786, -86.00137], tz:"America/New_York", lugares:[
  {n:"Nappanee Veterinary Clinic", cat:"vet", lat:41.441571, lng:-86.002171, dir:"151 West Lincoln Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nappanee Dog Park", cat:"parque", lat:41.453497, lng:-85.982843, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nashville-illinois": {nombre:"Nashville", centro:[38.343491, -89.380978], tz:"America/Chicago", lugares:[
  {n:"Nashville Animal Clinic", cat:"vet", lat:38.343803, lng:-89.396249, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Well's Get Well Clinic", cat:"vet", lat:38.347842, lng:-89.381136, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "naubinway": {nombre:"Naubinway", centro:[46.09459, -85.447042], tz:"America/Chicago", lugares:[
  {n:"Garlyn Zoo", cat:"zoo", lat:46.088049, lng:-85.314608, dir:"W9104 US 2", tel:"+1-906-477-1085", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "navarre-ohio": {nombre:"Navarre", centro:[40.724861, -81.521843], tz:"America/New_York", lugares:[
  {n:"Kelly's Scrub-a-dub Pets and More", cat:"peluqueria", lat:40.719554, lng:-81.522694, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Navarre Animal Clinic", cat:"vet", lat:40.719046, lng:-81.526147, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nebraska-city": {nombre:"Nebraska City", centro:[40.676526, -95.858694], tz:"America/Chicago", lugares:[
  {n:"Wildwood Dog Park", cat:"parque", lat:40.67427, lng:-95.878706, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "neenah": {nombre:"Neenah", centro:[44.185819, -88.462609], tz:"America/Chicago", lugares:[
  {n:"TailWaggers Doggy Daycare", cat:"refugio", lat:44.153989, lng:-88.493402, dir:"1077 Tullar Court", tel:"+1-920-486-5600; +1-844-486-1102", horas:[6.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Lucy's Closet Pet Boutique", cat:"tienda", lat:44.187106, lng:-88.462587, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Country View Animal Hospital", cat:"vet", lat:44.182444, lng:-88.496054, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "negaunee": {nombre:"Negaunee", centro:[46.499102, -87.611803], tz:"America/Chicago", lugares:[
  {n:"Negaunee Veterinary Clinic", cat:"vet", lat:46.521433, lng:-87.580451, dir:"30 US-41", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nelson-illinois": {nombre:"Nelson", centro:[41.796421, -89.601772], tz:"America/Chicago", lugares:[
  {n:"River Ridge Animal Hospital", cat:"vet", lat:41.82164, lng:-89.578476, dir:"273 IL Route 2", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nevada-iowa": {nombre:"Nevada", centro:[42.022765, -93.452434], tz:"America/Chicago", lugares:[
  {n:"Nevada Veterinary Clinic", cat:"vet", lat:42.016468, lng:-93.462492, dir:"533 West 3rd Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nevada-missouri": {nombre:"Nevada", centro:[37.838111, -94.359618], tz:"America/Chicago", lugares:[
  {n:"54 Veterinary Clinic", cat:"vet", lat:37.838579, lng:-94.389258, dir:"13615 East 54 Highway", tel:"+1-417-667-8381", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-albany": {nombre:"New Albany", centro:[38.285625, -85.824131], tz:"America/New_York", lugares:[
  {n:"Talk To The Tail Pet Salon", cat:"peluqueria", lat:38.322905, lng:-85.801202, dir:"2736 Charlestown Road", tel:"+1-812-725-0888", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Melissa's Pretty Paws", cat:"peluqueria", lat:38.29032, lng:-85.806699, dir:"1615 East Market Street", tel:"+1-812-944-6367", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pampered Pets Dog Daycare & Hotel", cat:"refugio", lat:38.315204, lng:-85.852123, dir:"2706 Paoli Pike", horas:[6.5, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"New Albany Dog Park", cat:"parque", lat:38.266283, lng:-85.84658, dir:"1935 Budd Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ridgeview Animal Clinic", cat:"vet", lat:38.315129, lng:-85.853052, dir:"2723 Paoli Pike", horas:[8.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Feeder's Supply", cat:"tienda", lat:38.306198, lng:-85.84213, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-albany-ohio": {nombre:"New Albany", centro:[40.081175, -82.808786], tz:"America/New_York", lugares:[
  {n:"Emi Pet", cat:"peluqueria", lat:40.065072, lng:-82.861135, dir:"5316 Hamilton Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vetcare", cat:"vet", lat:40.072771, lng:-82.863369, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mutts & Co.", cat:"tienda", lat:40.088215, lng:-82.82555, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rocky Fork Metro Park Dog Park", cat:"parque", lat:40.112767, lng:-82.798971, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-berlin-wisconsin": {nombre:"New Berlin", centro:[42.976218, -88.108497], tz:"America/Chicago", lugares:[
  {n:"Cappoochino's", cat:"peluqueria", lat:42.978324, lng:-88.106684, dir:"3640 South Moorland Road", tel:"+1 262 789 5210", horas:[9.5, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"New Berlin Animal Hospital", cat:"vet", lat:42.974322, lng:-88.107861, dir:"3840 South Moorland Road", tel:"+1-262-782-6910", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"What's In The Bowl", cat:"tienda", lat:42.976091, lng:-88.104804, dir:"15401 West National Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-brighton": {nombre:"New Brighton", centro:[45.0629, -93.206097], tz:"America/Chicago", lugares:[
  {n:"Ark Pet Hospital", cat:"vet", lat:45.050903, lng:-93.217417, dir:"151 Silver Lake Road Northwest", tel:"+1-651-633-0567", horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Paw Spa", cat:"peluqueria", lat:45.050903, lng:-93.217478, dir:"151 Silver Lake Road Northwest", tel:"+1-651-639-9177", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Perry Park Dog Park", cat:"parque", lat:45.053241, lng:-93.180482, horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Hazelnut Park Dog Park", cat:"parque", lat:45.041256, lng:-93.182188, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-castle-indiana": {nombre:"New Castle", centro:[39.928935, -85.370248], tz:"America/New_York", lugares:[
  {n:"Downtown Dog", cat:"tienda", lat:39.93061, lng:-85.368767, dir:"200 South 14th Street", tel:"+1 765-686-3005", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"New Castle Animal Hospital", cat:"vet", lat:39.893838, lng:-85.384518, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-england": {nombre:"New England", centro:[46.539175, -102.868223], tz:"America/Denver", lugares:[
  {n:"Neurotic Exotics", cat:"tienda", lat:46.539111, lng:-102.861853, tel:"+1 701 979 32 37", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-glarus": {nombre:"New Glarus", centro:[42.814468, -89.633936], tz:"America/Chicago", lugares:[
  {n:"Top Notch Feed & Pet Supply", cat:"tienda", lat:42.819535, lng:-89.630198, dir:"211 Hoesly Drive", tel:"+1-608-527-3333", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"New Glarus Veterinary Services", cat:"vet", lat:42.80956, lng:-89.630793, dir:"1106 State Highway 69", tel:"+1-608-527-2212", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-haven-indiana": {nombre:"New Haven", centro:[41.073306, -85.017313], tz:"America/New_York", lugares:[
  {n:"Kare Klipping", cat:"peluqueria", lat:41.122425, lng:-85.014187, dir:"10105 Stellhorn Road", tel:"+1-260-749-8659", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.126476, lng:-85.009394, dir:"10260 Maysville Road", tel:"+1 260-486-6151", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"North Indiana Veterinary Emergency Services", cat:"vet", lat:41.134185, lng:-85.061305, dir:"5818 Maplecrest Road", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Saint Joe Center Veterinary Hospitat", cat:"vet", lat:41.134541, lng:-85.061091, dir:"6358 Saint Joe Center Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.122158, lng:-85.065065, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stellhorn Vetrinary Hospital", cat:"vet", lat:41.121465, lng:-85.039772, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-haven-ohio-2": {nombre:"New Haven", centro:[39.275611, -84.740783], tz:"America/New_York", lugares:[
  {n:"Pet Crossings", cat:"vet", lat:39.282698, lng:-84.764604, tel:"+1-513-666-1533", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Simmonds Family Dog Park", cat:"parque", lat:39.227718, lng:-84.707527, dir:"8715 Hamilton Cleves Pike Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-hope-minnesota": {nombre:"New Hope", centro:[45.034718, -93.386104], tz:"America/Chicago", lugares:[
  {n:"Plymouth Heights Pet Suites", cat:"refugio", lat:45.044562, lng:-93.397482, dir:"9200 49th Avenue North", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Dermatology Clinic", cat:"vet", lat:45.07019, lng:-93.402932, tel:"+17632101177", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Plymouth Heights Pet Hospital", cat:"vet", lat:45.04458, lng:-93.397328, dir:"9200 49th Avenue North", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:45.054183, lng:-93.368858, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bass Lake Pet Hospital", cat:"vet", lat:45.056204, lng:-93.384185, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Total Dog Company", cat:"tienda", lat:45.023089, lng:-93.399816, horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Colitas Dog Grooming", cat:"peluqueria", lat:45.070062, lng:-93.40293, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shadow Hills Dog Park", cat:"parque", lat:45.037803, lng:-93.401688, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"New Hope Animal Hospital", cat:"vet", lat:45.02443, lng:-93.380802, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-lenox": {nombre:"New Lenox", centro:[41.511976, -87.96561], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.514323, lng:-87.954996, dir:"495 East Lincoln Highway", tel:"+1 815-462-0639", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Carey Animal Clinic", cat:"vet", lat:41.513324, lng:-87.965602, dir:"205 Church Street", tel:"+1 815-462-2731", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-london-wisconsin": {nombre:"New London", centro:[44.392758, -88.739825], tz:"America/Chicago", lugares:[
  {n:"Wolf River Veterinary Hospital", cat:"vet", lat:44.390651, lng:-88.742223, dir:"216 West Wolf River Avenue", tel:"+1 920-982-2733", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"New London Dog Park", cat:"parque", lat:44.400182, lng:-88.736989, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-melle": {nombre:"New Melle", centro:[38.709034, -90.881279], tz:"America/Chicago", lugares:[
  {n:"Broemmelsiek", cat:"parque", lat:38.716943, lng:-90.818579, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-miami": {nombre:"New Miami", centro:[39.434779, -84.536891], tz:"America/New_York", lugares:[
  {n:"PetSuites", cat:"refugio", lat:39.38948, lng:-84.455185, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-palestine": {nombre:"New Palestine", centro:[39.721988, -85.889147], tz:"America/New_York", lugares:[
  {n:"Sugar Creek Canine Ranch", cat:"refugio", lat:39.685388, lng:-85.884747, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"New Palestine Veterinary Clinic", cat:"vet", lat:39.722419, lng:-85.899782, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-richmond-ohio": {nombre:"New Richmond", centro:[38.948676, -84.279937], tz:"America/New_York", lugares:[
  {n:"Small Dog", cat:"parque", lat:38.957434, lng:-84.286673, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog", cat:"parque", lat:38.957568, lng:-84.286126, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-richmond-wisconsin": {nombre:"New Richmond", centro:[45.122729, -92.537502], tz:"America/Chicago", lugares:[
  {n:"New Richmond Veterinary Clinic", cat:"vet", lat:45.101282, lng:-92.535662, dir:"1656 Dorset Lane", tel:"+1-715-246-4800", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "newburgh": {nombre:"Newburgh", centro:[37.945682, -87.404657], tz:"America/Chicago", lugares:[
  {n:"Pet Food Center", cat:"tienda", lat:37.947701, lng:-87.41336, dir:"603 West Main Street", tel:"+1-812-858-9645", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"VIP Petcare", cat:"vet", lat:37.947658, lng:-87.413461, dir:"603 West Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Parkdale Animal Hospital", cat:"vet", lat:37.953179, lng:-87.43556, dir:"10188 West State Route 662", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"UVet Animal Clinic", cat:"vet", lat:37.979811, lng:-87.405447, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aqua Dog Grooming", cat:"peluqueria", lat:37.979812, lng:-87.405623, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Zozo's Doggie Spa", cat:"peluqueria", lat:37.945792, lng:-87.409874, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets 1st Grooming Salon", cat:"peluqueria", lat:37.975534, lng:-87.390349, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "newburgh-heights": {nombre:"Newburgh Heights", centro:[41.450249, -81.662641], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:41.460954, lng:-81.688303, dir:"3387 Steelyard Drive", tel:"+1 216-635-1485", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"CLE Dogs Spa & Social", cat:"peluqueria", lat:41.473552, lng:-81.657793, dir:"4703 Broadway Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "newbury-ohio": {nombre:"Newbury", centro:[41.463386, -81.24427], tz:"America/New_York", lugares:[
  {n:"Cricket Ridge Animal Hospital", cat:"vet", lat:41.462592, lng:-81.230561, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "newport-minnesota": {nombre:"Newport", centro:[44.873474, -93.000386], tz:"America/Chicago", lugares:[
  {n:"Dogs at Play!", cat:"refugio", lat:44.875982, lng:-93.00046, dir:"1716 Hastings Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "newton-falls-ohio": {nombre:"Newton Falls", centro:[41.18839, -80.978147], tz:"America/New_York", lugares:[
  {n:"Hometown Hound", cat:"tienda", lat:41.187874, lng:-80.976869, dir:"18 West Broad Street", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Neiss Recreation Park for Dogs", cat:"parque", lat:41.189072, lng:-80.978587, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "newton-iowa": {nombre:"Newton", centro:[41.699714, -93.053885], tz:"America/Chicago", lugares:[
  {n:"Pawsitive Images", cat:"peluqueria", lat:41.701138, lng:-93.043085, dir:"220 East 8th Street North", tel:"+1-641-791-2420", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Parkview Animal Hospital", cat:"vet", lat:41.699452, lng:-93.026508, dir:"2012 1st Avenue East", tel:"+1-641-792-0340", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "newton-kansas": {nombre:"Newton", centro:[38.046917, -97.344724], tz:"America/Chicago", lugares:[
  {n:"Passion for Pets", cat:"tienda", lat:38.014988, lng:-97.337193, dir:"2305 South Kansas Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Newton Animal Hospital", cat:"vet", lat:37.99763, lng:-97.33557, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Caring Hands Humane Society", cat:"refugio", lat:38.039702, lng:-97.321858, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nickerson": {nombre:"Nickerson", centro:[38.147233, -98.083668], tz:"America/Chicago", lugares:[
  {n:"Hedrick's Exotic Animal Farm", cat:"zoo", lat:38.140186, lng:-98.071266, dir:"7910 North Roy L Smith Road", tel:"+1-800-618-9577", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nicollet": {nombre:"Nicollet", centro:[44.276063, -94.187482], tz:"America/Chicago", lugares:[
  {n:"Nicollet Veterinary Clinic", cat:"vet", lat:44.276654, lng:-94.181832, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "niles": {nombre:"Niles", centro:[42.028932, -87.812235], tz:"America/Chicago", lugares:[
  {n:"Birdmans Parrots", cat:"tienda", lat:42.021996, lng:-87.810854, dir:"7752 North Milwaukee Avenue", tel:"+1-773-317-3785", horas:[12.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.042165, lng:-87.806869, dir:"7204 West Dempster Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Niels Animal Hospital", cat:"vet", lat:42.013712, lng:-87.803332, dir:"7278 North Milwaukee Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "niles-michigan": {nombre:"Niles", centro:[41.829769, -86.254177], tz:"America/New_York", lugares:[
  {n:"Ruff N Tumble Dog Park", cat:"parque", lat:41.818236, lng:-86.256826, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "niles-ohio": {nombre:"Niles", centro:[41.180835, -80.76538], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.20754, lng:-80.747176, dir:"5812 Youngstown Warren Road", tel:"+1 330-544-1499", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "nininger": {nombre:"Nininger", centro:[44.769134, -92.902152], tz:"America/Chicago", lugares:[
  {n:"Bison Prairie", cat:"zoo", lat:44.749401, lng:-92.970119, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nixa": {nombre:"Nixa", centro:[37.043386, -93.298664], tz:"America/Chicago", lugares:[
  {n:"Heartland Animal Clinic", cat:"vet", lat:37.041316, lng:-93.301726, dir:"213 Village Center Street", tel:"+14177250533", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "noblesville": {nombre:"Noblesville", centro:[40.046088, -86.013985], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:40.038539, lng:-85.991485, dir:"17180 Mercantile Boulevard", tel:"+1 317-770-0301", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Low Cost Spay Neuter Clinic", cat:"vet", lat:40.038445, lng:-86.001471, dir:"1721 Pleasant Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.0405, lng:-85.998003, dir:"521 Noble Creek Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "norfolk-nebraska": {nombre:"Norfolk", centro:[42.028338, -97.416996], tz:"America/Chicago", lugares:[
  {n:"Companion Animal Veterinary Clinic", cat:"vet", lat:42.044638, lng:-97.415554, dir:"1113 Riverside Blvd", tel:"+1-402-379-1200", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Off-Leash Dog Recreation Area", cat:"parque", lat:42.006846, lng:-97.42198, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "normal": {nombre:"Normal", centro:[40.509296, -88.984394], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:40.510798, lng:-88.951768, dir:"1700 East College Avenue", tel:"+1 309-268-9898", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Kruger Animal Hospital", cat:"vet", lat:40.490539, lng:-88.952113, dir:"1215 Holiday Drive", tel:"+1-309-452-5111", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Clover's Cat Club", cat:"refugio", lat:40.517363, lng:-88.956819, dir:"1531 Fort Jesse Road", tel:"+1-309-319-2838", horas:[13.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.490768, lng:-88.957309, dir:"1606 East Empire Street", tel:"+1 309-585-3961", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Eastland Companion Animal Hospital", cat:"vet", lat:40.488788, lng:-88.950643, dir:"1704 East Empire Street", tel:"+1-309-662-7387", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Premium Pet Supply", cat:"tienda", lat:40.489942, lng:-88.958894, dir:"1500 East Empire Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Town & Country Animal Hospital", cat:"vet", lat:40.517755, lng:-88.983061, dir:"901 North Linden Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Central Illinois", cat:"refugio", lat:40.521459, lng:-88.961578, dir:"423 Kays Drive", horas:[14.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Shepard Park - Dog Park", cat:"parque", lat:40.523361, lng:-88.942942, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Maxwell Dog Park", cat:"parque", lat:40.517718, lng:-89.026488, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SmartVet", cat:"vet", lat:40.517479, lng:-88.956281, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fairway Knolls Veterinary Hospital", cat:"vet", lat:40.493473, lng:-88.953948, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "norridge": {nombre:"Norridge", centro:[41.963364, -87.827284], tz:"America/Chicago", lugares:[
  {n:"Coral Reef Pet Center", cat:"tienda", lat:41.966621, lng:-87.8204, dir:"7723 West Lawrence Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "norris": {nombre:"Norris", centro:[40.625835, -90.032144], tz:"America/Chicago", lugares:[
  {n:"Spoon River Animal Clinic", cat:"vet", lat:40.59952, lng:-90.03367, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oakdale Veterinary Center", cat:"vet", lat:40.596263, lng:-90.033016, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-aurora": {nombre:"North Aurora", centro:[41.80614, -88.327295], tz:"America/Chicago", lugares:[
  {n:"Fox Valley Veterinary Clinic", cat:"vet", lat:41.80846, lng:-88.335869, dir:"405 Oak Street", tel:"+1-630-896-6664", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Fox Valley Animal Welfare League", cat:"vet", lat:41.804713, lng:-88.325689, dir:"11 John Street", tel:"+1 630-800-2254", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"It's so Fluffy", cat:"tienda", lat:41.799895, lng:-88.273985, dir:"1650 Premium Outlets Boulevard", tel:"+1 630 907 7800", horas:[11.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.797815, lng:-88.362428, dir:"1660 Orchard Gateway Boulevard", tel:"+1 630-907-9004", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.808945, lng:-88.350484, dir:"180 Randall Road", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Dental Center", cat:"vet", lat:41.789338, lng:-88.323392, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-baltimore": {nombre:"North Baltimore", centro:[41.18283, -83.678267], tz:"America/New_York", lugares:[
  {n:"Bubbles Pet Salon", cat:"peluqueria", lat:41.182126, lng:-83.678138, dir:"116 North Main Street", tel:"+1-419-257-2100", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-bay": {nombre:"North Bay", centro:[42.764742, -87.779797], tz:"America/Chicago", lugares:[
  {n:"Racine Zoological Gardens", cat:"zoo", lat:42.749861, lng:-87.783246, dir:"2131 North Main Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-branch-minnesota": {nombre:"North Branch", centro:[45.511352, -92.980218], tz:"America/Chicago", lugares:[
  {n:"Wapiti Labs Inc.", cat:"tienda", lat:45.524096, lng:-92.995904, dir:"39555 Flink Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-canton": {nombre:"North Canton", centro:[40.875891, -81.402336], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:40.860039, lng:-81.434969, dir:"5465 Dressler Road Northwest", tel:"+1 330-305-1549", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Veterans Park Dog Park", cat:"parque", lat:40.863493, lng:-81.351271, dir:"1714 Schneider Street Northeast", tel:"+1-330-492-4689", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.878045, lng:-81.440321, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Canton Veterinary Clinic", cat:"vet", lat:40.889016, lng:-81.40596, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-college-hill": {nombre:"North College Hill", centro:[39.218391, -84.550778], tz:"America/New_York", lugares:[
  {n:"Montfort Aquarium & Pets", cat:"tienda", lat:39.207314, lng:-84.582849, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Noah's Ark Animal Clinics", cat:"vet", lat:39.206112, lng:-84.582549, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-fond-du-lac": {nombre:"North Fond du Lac", centro:[43.811377, -88.483442], tz:"America/Chicago", lugares:[
  {n:"Lakeside Dog Park", cat:"parque", lat:43.801235, lng:-88.456669, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-kansas-city": {nombre:"North Kansas City", centro:[39.143206, -94.573399], tz:"America/Chicago", lugares:[
  {n:"Waggin' Trail Dog Park", cat:"parque", lat:39.1532, lng:-94.576527, dir:"432 Northeast 32nd Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-lake": {nombre:"North Lake", centro:[43.156237, -88.3708], tz:"America/Chicago", lugares:[
  {n:"North Lake Veterinary Clinic", cat:"vet", lat:43.156752, lng:-88.341426, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-liberty-iowa": {nombre:"North Liberty", centro:[41.74783, -91.60644], tz:"America/Chicago", lugares:[
  {n:"Iowa Raptor Project", cat:"zoo", lat:41.782682, lng:-91.571131, dir:"3673 Raptor Ridge Road Northeast", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Red Fern Dog Park", cat:"parque", lat:41.750891, lng:-91.575643, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-mankato": {nombre:"North Mankato", centro:[44.173292, -94.033805], tz:"America/Chicago", lugares:[
  {n:"Kiwanis Dog Park", cat:"parque", lat:44.200276, lng:-94.018961, dir:"2301 US-169", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blue Earth Nicollet County Humane Society", cat:"refugio", lat:44.187098, lng:-94.010453, dir:"1250 North River Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Elite Canine", cat:"refugio", lat:44.184501, lng:-94.01213, dir:"111 Butterworth Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-olmsted": {nombre:"North Olmsted", centro:[41.415602, -81.923473], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.416427, lng:-81.912023, dir:"26063 Great Northern Plaza", tel:"+1 440-777-8900", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Bretton Ridge Veterinary Hospital", cat:"vet", lat:41.405862, lng:-81.945344, dir:"29293 Lorain Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-platte": {nombre:"North Platte", centro:[41.136833, -100.761282], tz:"America/Chicago", lugares:[
  {n:"Happy Hound Retreat", cat:"parque", lat:41.153481, lng:-100.763717, dir:"301 W 18th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westfield Small Animal Clinic", cat:"vet", lat:41.134704, lng:-100.785229, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-prairie": {nombre:"North Prairie", centro:[42.934456, -88.405374], tz:"America/Chicago", lugares:[
  {n:"SKydance Pet Lodge", cat:"refugio", lat:42.944625, lng:-88.479328, dir:"W367 S519 State Highway 67", tel:"+12629652242", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-randall": {nombre:"North Randall", centro:[41.434424, -81.525492], tz:"America/New_York", lugares:[
  {n:"Guiding Eyes", cat:"refugio", lat:41.428632, lng:-81.527536, dir:"21639 Miles Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-ridgeville": {nombre:"North Ridgeville", centro:[41.389491, -82.019032], tz:"America/New_York", lugares:[
  {n:"Ridgeville Animal Hospital", cat:"vet", lat:41.383773, lng:-82.052965, dir:"38412 Center Ridge Road", horas:[8.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic Northview", cat:"vet", lat:41.389823, lng:-82.02532, dir:"36400 Center Ridge Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-riverside": {nombre:"North Riverside", centro:[41.84686, -87.815202], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.849234, lng:-87.806069, dir:"2204 South Harlem Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:41.839699, lng:-87.802852, dir:"2845 South Harlem Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Miller Meadow Dog Park", cat:"parque", lat:41.854594, lng:-87.830234, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-saint-paul": {nombre:"North Saint Paul", centro:[45.012257, -92.992251], tz:"America/Chicago", lugares:[
  {n:"Blue Ribbon Grooming", cat:"peluqueria", lat:45.030676, lng:-92.984096, dir:"5679 Geneva Avenue North", tel:"+1-651-748-8885", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Silver Lake Animal Hospital", cat:"vet", lat:45.031808, lng:-92.984106, dir:"5707 Hadley Avenue North", tel:"+1-651-748-1900", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Caring For Cats", cat:"refugio", lat:45.012342, lng:-92.991716, dir:"2550 7th Avenue East", tel:"+1 651-407-8485", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "northbrook": {nombre:"Northbrook", centro:[42.128704, -87.826509], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:42.104151, lng:-87.848087, dir:"2727 Pfingsten Road", tel:"+1 847-562-8653", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Barks & Bows Dog Spa", cat:"peluqueria", lat:42.146829, lng:-87.797878, dir:"300 Skokie Boulevard", tel:"+1-847-715-9240", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.147382, lng:-87.79622, dir:"291 Skokie Boulevard", tel:"+1 847-562-0922", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Northbrook Dog Park (small dog area) at Coast Guard Park", cat:"parque", lat:42.139197, lng:-87.840478, dir:"2490 Dundee Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northbrook Dog Park (all dog area) at Coast Guard Park", cat:"parque", lat:42.139508, lng:-87.840239, dir:"2490 Dundee Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "northfield-illinois": {nombre:"Northfield", centro:[42.09975, -87.780897], tz:"America/Chicago", lugares:[
  {n:"Kriser's Natural Pet", cat:"tienda", lat:42.082637, lng:-87.756622, dir:"3232 Lake Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "northfield-minnesota": {nombre:"Northfield", centro:[44.458204, -93.161159], tz:"America/Chicago", lugares:[
  {n:"In The Dog House", cat:"tienda", lat:44.454249, lng:-93.160421, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's", cat:"tienda", lat:44.444042, lng:-93.175923, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aquatic Pets", cat:"tienda", lat:44.455554, lng:-93.160374, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cannon Valley Veterinary Clinic", cat:"vet", lat:44.447529, lng:-93.174526, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "northfield-township": {nombre:"Northfield Township", centro:[42.386708, -83.721142], tz:"America/New_York", lugares:[
  {n:"Griffith Veterinary Hospital", cat:"vet", lat:42.417258, lng:-83.767241, dir:"240 Jennings Road", tel:"+1-734-449-7387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:42.420046, lng:-83.765163, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "northlake": {nombre:"Northlake", centro:[41.917253, -87.895618], tz:"America/Chicago", lugares:[
  {n:"Northlake Dog Park", cat:"parque", lat:41.914961, lng:-87.907017, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "northville-charter-township": {nombre:"Northville Charter Township", centro:[42.415, -83.492222], tz:"America/New_York", lugares:[
  {n:"Northville Animal Hospital", cat:"vet", lat:42.408546, lng:-83.469365, dir:"16795 Northville Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "northville-michigan": {nombre:"Northville", centro:[42.431082, -83.483234], tz:"America/New_York", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:42.437529, lng:-83.434001, dir:"20510 Haggerty Road", tel:"+1-248-289-3507", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VEG ER for Pets", cat:"vet", lat:42.423836, lng:-83.436492, dir:"39737 Traditions Drive", tel:"+1-248-218-9937", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.414632, lng:-83.435474, dir:"17677 Haggerty Road", tel:"+1 248-347-4337", horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Premier Pet Supply", cat:"tienda", lat:42.431683, lng:-83.432424, dir:"19784 Haggerty Road", tel:"+1-248-924-3494", horas:[8.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:42.423884, lng:-83.433765, dir:"18865 Traditions Drive", tel:"+1-248-942-9663", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pooches & Smooches", cat:"peluqueria", lat:42.425912, lng:-83.476297, dir:"547 7 Mile Road", tel:"+1-248-974-1500", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hidden Spring Veterinary Clinic", cat:"vet", lat:42.435359, lng:-83.523698, dir:"48525 West 8 Mile Road", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Cady Street Dog Park", cat:"parque", lat:42.429142, lng:-83.485619, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "norton-ohio": {nombre:"Norton", centro:[41.029222, -81.63818], tz:"America/New_York", lugares:[
  {n:"Critters 'N Crawlies", cat:"tienda", lat:41.051829, lng:-81.680434, dir:"4221 Erma Road", tel:"+1-605-380-1971", horas:[6.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.024836, lng:-81.640761, dir:"3200 Greenwich Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "norton-shores": {nombre:"Norton Shores", centro:[43.168904, -86.263946], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:43.157218, lng:-86.208757, dir:"5239 Harvey Street", tel:"+1 231-798-9621", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Shoreline Landing Dog Park", cat:"parque", lat:43.135055, lng:-86.223012, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "norwalk-iowa": {nombre:"Norwalk", centro:[41.475549, -93.678888], tz:"America/Chicago", lugares:[
  {n:"Norwalk Dog Park", cat:"parque", lat:41.477388, lng:-93.677063, dir:"907 North Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blank Park Zoo", cat:"zoo", lat:41.519631, lng:-93.620712, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kids Kingdom", cat:"zoo", lat:41.517942, lng:-93.624304, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Australia Adventure", cat:"zoo", lat:41.518836, lng:-93.624941, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jamaa Kwa Africa", cat:"zoo", lat:41.519134, lng:-93.621121, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "norwalk-ohio": {nombre:"Norwalk", centro:[41.242422, -82.615574], tz:"America/New_York", lugares:[
  {n:"Norwalk Veterinary Medical Center", cat:"vet", lat:41.249058, lng:-82.566118, dir:"705 United States Route 20 East", tel:"+1-419-668-6524", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scruba-Dub Pet Wash", cat:"peluqueria", lat:41.243638, lng:-82.616805, dir:"47 Whittlesey", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mapleview Animal Hospital", cat:"vet", lat:41.240249, lng:-82.613506, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "norwood-illinois": {nombre:"Norwood", centro:[40.705593, -89.698713], tz:"America/Chicago", lugares:[
  {n:"Prairie Animal Hospital", cat:"vet", lat:40.770313, lng:-89.658173, dir:"4123 West Partridge Way", tel:"+1 309-981-5112", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wildlife Prairie Park East Side", cat:"zoo", lat:40.735451, lng:-89.733705, dir:"3826 North Taylor Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wildlife Prairie Park", cat:"zoo", lat:40.734904, lng:-89.738036, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "norwood-ohio": {nombre:"Norwood", centro:[39.155615, -84.459664], tz:"America/New_York", lugares:[
  {n:"Argos", cat:"tienda", lat:39.12901, lng:-84.477222, dir:"2801 Woodburn Avenue", tel:"+1 513-221-4451", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lewis Animal Hospital", cat:"vet", lat:39.132997, lng:-84.460413, dir:"2116 Madison Road", tel:"+1 513 871 1114", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:39.144472, lng:-84.441455, dir:"3663 Michigan Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oakley Square Vet", cat:"vet", lat:39.150854, lng:-84.434356, dir:"3000 Madison Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Burwood Park", cat:"parque", lat:39.146727, lng:-84.455325, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "norwoodville": {nombre:"Norwoodville", centro:[41.643878, -93.561049], tz:"America/Chicago", lugares:[
  {n:"Reno Memorial Dog Park", cat:"parque", lat:41.628952, lng:-93.546835, dir:"3533 East Douglas Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "notre-dame": {nombre:"Notre Dame", centro:[41.6992, -86.237369], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.699262, lng:-86.21547, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "novi": {nombre:"Novi", centro:[42.48059, -83.475491], tz:"America/New_York", lugares:[
  {n:"Novi Veterinary Clinic", cat:"vet", lat:42.480556, lng:-83.475374, dir:"43381 Grand River Avenue", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Family Puppy", cat:"tienda", lat:42.491559, lng:-83.484369, dir:"44125 West 12 Mile Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Clinic", cat:"vet", lat:42.466473, lng:-83.513443, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Novi Dog Park", cat:"parque", lat:42.460277, lng:-83.467044, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:42.49231, lng:-83.471466, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oak-brook": {nombre:"Oak Brook", centro:[41.832713, -87.948413], tz:"America/Chicago", lugares:[
  {n:"Mayslake Forest Preserve Dog Park", cat:"parque", lat:41.830348, lng:-87.956358, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oak-creek-wisconsin": {nombre:"Oak Creek", centro:[42.898729, -87.917797], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.90076, lng:-87.915766, dir:"320 West Town Square Way", tel:"+1 414-216-0747", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"BluePearl", cat:"vet", lat:42.873347, lng:-87.950132, dir:"9472 South 27th Street", tel:"+1-414-761-6333", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oak Creek Veterinary Care", cat:"vet", lat:42.899004, lng:-87.911079, dir:"8000 South Howell Avenue", tel:"+1-414-301-9113", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:42.889286, lng:-87.913728, dir:"8551 South Howell Avenue", tel:"+1 414-764-2743", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"American Veterinary Hospital", cat:"vet", lat:42.915932, lng:-87.951088, dir:"2735C,2735A,2735B West Rawson Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brentwood Animal Hospital", cat:"vet", lat:42.872614, lng:-87.917428, dir:"318 West Ryan Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oak-grove-missouri": {nombre:"Oak Grove", centro:[39.00484, -94.129191], tz:"America/Chicago", lugares:[
  {n:"Oak Grove Animal Clinic", cat:"vet", lat:38.999207, lng:-94.130153, dir:"1604 South Broadway Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oak-grove-village": {nombre:"Oak Grove Village", centro:[38.225685, -91.151383], tz:"America/Chicago", lugares:[
  {n:"Sullivan Veterinary Hospital", cat:"vet", lat:38.228954, lng:-91.152237, dir:"N Service Road West", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oak-harbor": {nombre:"Oak Harbor", centro:[41.512773, -83.146578], tz:"America/New_York", lugares:[
  {n:"Oak Harbor Veterinanlane Hospital Inc.", cat:"vet", lat:41.49594, lng:-83.145754, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oak-lawn": {nombre:"Oak Lawn", centro:[41.710866, -87.758108], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.720203, lng:-87.776107, dir:"6220 West 95th Street", tel:"+1 708-430-4400", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Thrive Pet Healthcare", cat:"vet", lat:41.716339, lng:-87.740292, dir:"9701 South Cicero Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oak-park-heights": {nombre:"Oak Park Heights", centro:[45.031992, -92.820227], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:45.037052, lng:-92.841812, dir:"2080 Market Drive", tel:"+1 651-351-1485", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Under One Woof - Dog Boarding, Daycare & Grooming", cat:"peluqueria", lat:45.035209, lng:-92.809639, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PET PALACE", cat:"tienda", lat:45.035134, lng:-92.80933, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"River Dogs Grooming", cat:"peluqueria", lat:45.056078, lng:-92.862182, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oak-park-illinois": {nombre:"Oak Park", centro:[41.887814, -87.788762], tz:"America/Chicago", lugares:[
  {n:"Logan Square PetShoppe", cat:"tienda", lat:41.927798, lng:-87.706657, dir:"3145 West Logan Boulevard", tel:"+1 773-489-0712", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Vets Animal Hospital", cat:"vet", lat:41.872817, lng:-87.783561, dir:"342 Harrison Street", tel:"+1-708-445-9988", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.931142, lng:-87.728695, dir:"4039 West Diversey Avenue", tel:"+1 773-687-0488", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Sploot Veterinary Care - Logan Square", cat:"vet", lat:41.926837, lng:-87.704087, dir:"2510 North Milwaukee Avenue", tel:"+1 312-779-0720", horas:[10.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Logan Square Animal Hospital", cat:"vet", lat:41.927589, lng:-87.704711, dir:"2543 North Milwaukee Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"For Dogs Sake", cat:"tienda", lat:41.913236, lng:-87.711385, dir:"1757 North Kimball Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carlson Animal Hospital", cat:"vet", lat:41.888944, lng:-87.785371, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kosciuszko Dog Park", cat:"parque", lat:41.931632, lng:-87.725115, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oakbrook-terrace": {nombre:"Oakbrook Terrace", centro:[41.85003, -87.964508], tz:"America/Chicago", lugares:[
  {n:"It's So Fluffy Pet Backery", cat:"tienda", lat:41.839533, lng:-88.007313, dir:"225 Yorktown Shopping Center", tel:"+1 630 785 3400", horas:[10.0, 20.5], nota:"Dato de OpenStreetMap"},
  {n:"It's So Fluffy Pet Bakery", cat:"tienda", lat:41.839129, lng:-88.007795, dir:"203 Yorktown Shopping Center", tel:"+1-630-785-3400", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VEG", cat:"vet", lat:41.845322, lng:-87.960801, dir:"1735 West 22nd Street", tel:"+1 331 808 2720", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Furry Babies", cat:"tienda", lat:41.840473, lng:-88.006649, dir:"170 Yorktown Shopping Center Rd", tel:"+1 630 785 3064", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wet Nose", cat:"tienda", lat:41.840423, lng:-87.994115, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oakdale-minnesota": {nombre:"Oakdale", centro:[44.985624, -92.964579], tz:"America/Chicago", lugares:[
  {n:"Great River Pet Center", cat:"refugio", lat:44.98477, lng:-92.964107, dir:"2451 Hadley Avenue North", tel:"+1-651-777-1051", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Emergency & Referral Center of Minnesota - Urgent Care", cat:"vet", lat:44.966618, lng:-92.954846, dir:"11163 Helmo Avenue North", tel:"+1-651-350-3500", horas:[14.0, 22.0], nota:"Dato de OpenStreetMap"}
 ]},
 "oakley-kansas": {nombre:"Oakley", centro:[39.126385, -100.855611], tz:"America/Chicago", lugares:[
  {n:"Oakley Veterinary Service", cat:"vet", lat:39.121995, lng:-100.848744, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oaks": {nombre:"Oaks", centro:[39.196392, -94.569677], tz:"America/Chicago", lugares:[
  {n:"Pet-Topia", cat:"tienda", lat:39.188582, lng:-94.537286, dir:"3528 NE Vivion Road", tel:"+1-816-437-8613", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.181643, lng:-94.573708, dir:"600 Northeast Vivion Road", tel:"+1 816-459-7882", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.193748, lng:-94.578885, dir:"305 Northeast Englewood Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.188704, lng:-94.547318, dir:"2650 Northeast Vivion Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oakview": {nombre:"Oakview", centro:[39.208614, -94.568289], tz:"America/Chicago", lugares:[
  {n:"Animal Clinic of the Woodlands", cat:"vet", lat:39.2032, lng:-94.547274, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oakville-missouri": {nombre:"Oakville", centro:[38.470053, -90.30456], tz:"America/Chicago", lugares:[
  {n:"Treats Unleashed", cat:"tienda", lat:38.468342, lng:-90.304394, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oakwood-hills": {nombre:"Oakwood Hills", centro:[42.246412, -88.242862], tz:"America/Chicago", lugares:[
  {n:"Crystal Krest Kennel", cat:"refugio", lat:42.25857, lng:-88.264299, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oakwood-ohio-2": {nombre:"Oakwood", centro:[39.725337, -84.174106], tz:"America/New_York", lugares:[
  {n:"Oakwood Veterinary Clinic", cat:"vet", lat:39.724571, lng:-84.161048, dir:"701 Shroyer Road", tel:"+1-937-294-7387", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Wash Your Dog", cat:"peluqueria", lat:39.724447, lng:-84.161058, dir:"707 Shroyer Road", tel:"+1-937-416-5358", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Creager Field Dog Park", cat:"parque", lat:39.732236, lng:-84.167009, dir:"286 Shafor Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Castle", cat:"peluqueria", lat:39.723226, lng:-84.149819, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodman Drive Animal Hospital", cat:"vet", lat:39.732643, lng:-84.121222, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oakwood-park": {nombre:"Oakwood Park", centro:[39.203336, -94.573844], tz:"America/Chicago", lugares:[
  {n:"Petcetera", cat:"tienda", lat:39.197252, lng:-94.58764, dir:"520 NW Englewood Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oberlin-ohio": {nombre:"Oberlin", centro:[41.293939, -82.217379], tz:"America/New_York", lugares:[
  {n:"Douds Vetrinary Hospital", cat:"vet", lat:41.312122, lng:-82.215674, dir:"12115 Leavitt Road", tel:"+1-440-774-4542", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "obetz": {nombre:"Obetz", centro:[39.878953, -82.950736], tz:"America/New_York", lugares:[
  {n:"Berwick Animal Clinic", cat:"vet", lat:39.918009, lng:-82.91444, dir:"3272 Refugee Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Obetz Animal Hospital", cat:"vet", lat:39.887709, lng:-82.930757, tel:"+1-614-491-5676", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oceola-township": {nombre:"Oceola Township", centro:[42.645278, -83.856389], tz:"America/New_York", lugares:[
  {n:"EZ Dog Parkl", cat:"parque", lat:42.605944, lng:-83.797159, dir:"230 Norlyn Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oconomowoc": {nombre:"Oconomowoc", centro:[43.111673, -88.499266], tz:"America/Chicago", lugares:[
  {n:"Lisa’s Grooming Salon", cat:"peluqueria", lat:43.112253, lng:-88.499689, dir:"128 North Main Street", tel:"+1-262-567-5851", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake Country Dog", cat:"refugio", lat:43.108401, lng:-88.492385, dir:"535 East Wisconsin Avenue", tel:"+1-262-567-9663", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Doggy Bag", cat:"tienda", lat:43.111431, lng:-88.498422, dir:"124 East Wisconsin Avenue", tel:"+1-262-560-1717", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oconomowoc-lake": {nombre:"Oconomowoc Lake", centro:[43.104451, -88.459265], tz:"America/Chicago", lugares:[
  {n:"Hooves & Paws", cat:"tienda", lat:43.094407, lng:-88.48046, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oconto-falls": {nombre:"Oconto Falls", centro:[44.874778, -88.143268], tz:"America/Chicago", lugares:[
  {n:"Hometown Veterinary Clinic LLC", cat:"vet", lat:44.882301, lng:-88.142922, dir:"180 East Highland Drive", tel:"+1-920-848-4280", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oconto-wisconsin": {nombre:"Oconto", centro:[44.88802, -87.869618], tz:"America/Chicago", lugares:[
  {n:"Oconto Veterinary Clinic LLC", cat:"vet", lat:44.896889, lng:-87.895191, dir:"6220 Van Hecke Avenue", tel:"+1-920-834-5858", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ofallon": {nombre:"O’Fallon", centro:[38.79025, -90.703329], tz:"America/Chicago", lugares:[
  {n:"Bentley's Pet Stuff", cat:"tienda", lat:38.778196, lng:-90.700643, dir:"2285 Highway K", tel:"+1 636-240-0222", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Emergency Clinic", cat:"vet", lat:38.798674, lng:-90.708671, dir:"334 Fort Zumwalt Square", tel:"+1-636-339-4345", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.778072, lng:-90.696217, dir:"2242 Highway K", tel:"+1 636-281-3114", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA All Creatures Animal Hospital", cat:"vet", lat:38.778813, lng:-90.700585, dir:"2205 Highway K", tel:"+1 636-240-8387", horas:[7.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Fisher Animal Hospital", cat:"vet", lat:38.784741, lng:-90.662612, dir:"117 Birdie Hills Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yuppy Puppy", cat:"tienda", lat:38.798552, lng:-90.655765, dir:"299 Salt Lick Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "okemos": {nombre:"Okemos", centro:[42.722102, -84.427526], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.722733, lng:-84.428149, dir:"2100 West Grand River Avenue", tel:"+1 517 347 1508", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Evergreen Veterinary Clinic", cat:"vet", lat:42.719032, lng:-84.423036, dir:"4737 Marsh Road", tel:"+1 517 507 0053", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Riverside Cat Hospital", cat:"vet", lat:42.715597, lng:-84.429657, dir:"4632 Okemos Road", tel:"+1 517 347 2287", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Schultz Veterinary Clinic", cat:"vet", lat:42.698282, lng:-84.452574, dir:"2770 Bennett Road", tel:"+1 517 337 4800", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Elevation Dog Park", cat:"parque", lat:42.686946, lng:-84.438138, dir:"3595 Jolly Oak Rd.", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bennett Road Animal Clinic", cat:"vet", lat:42.697739, lng:-84.434373, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "olathe-kansas": {nombre:"Olathe", centro:[38.883886, -94.81887], tz:"America/Chicago", lugares:[
  {n:"Wild Birds Unlimited", cat:"tienda", lat:38.85585, lng:-94.762263, dir:"15056 South Black Bob Road", tel:"+1 913-839-3151", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:38.915021, lng:-94.761669, dir:"15270 West 119th Street", tel:"+1-913-318-6458", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.911929, lng:-94.764512, dir:"15255 West 119th Street", tel:"+1 913-393-4111", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.881417, lng:-94.764156, dir:"13620 South Blackbob Road", tel:"+1 913-254-7589", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Olathe Animal Shelter", cat:"refugio", lat:38.86564, lng:-94.813812, dir:"505 East Sunvale Drive", tel:"+1-913-971-6362", horas:[10.0, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"K9 Acres Pet Resort LLC", cat:"peluqueria", lat:38.835798, lng:-94.833656, dir:"16129 South Lone Elm Road", tel:"+1-913-361-5001", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Olathe Pet Shop", cat:"tienda", lat:38.853432, lng:-94.777425, dir:"16651 West 151st Street", tel:"+1-913-764-1904", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Tender Touch Pet Grooming", cat:"peluqueria", lat:38.854191, lng:-94.780192, dir:"2149 East 151st Street", tel:"+1-913-829-7297", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southwest Plaza Animal Clinic", cat:"vet", lat:38.869558, lng:-94.835489, dir:"1220 West Dennis Avenue", tel:"+1-913-829-1919", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"The Groom Gallery", cat:"peluqueria", lat:38.881172, lng:-94.835326, dir:"129 South Parker Street", tel:"+1-913-839-3522", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Zoom Room Dog Training - Overland Park", cat:"peluqueria", lat:38.886056, lng:-94.720388, dir:"11670 West 133rd Street", tel:"+19137323083", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"treats unleashed", cat:"tienda", lat:38.911219, lng:-94.760533, dir:"Olathe, KS", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Murlen Animal Clinic", cat:"vet", lat:38.856338, lng:-94.780458, tel:"+1-913-764-8574", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Divine K-Nine", cat:"peluqueria", lat:38.852859, lng:-94.798731, tel:"+1-913-829-4916", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Arbor Creek Animal Hospital", cat:"vet", lat:38.838737, lng:-94.77826, dir:"15971 South Bradley Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southside Pet Hospital", cat:"vet", lat:38.887707, lng:-94.837062, dir:"457 North K7 Hwy", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ridgeview Animal Hospital", cat:"vet", lat:38.893833, lng:-94.796927, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bradford Pet Hospital", cat:"vet", lat:38.8971, lng:-94.7425, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Knappenberger Veterinary Clinic", cat:"vet", lat:38.854, lng:-94.8114, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Quivira Crossing Veterinary Clinic", cat:"vet", lat:38.884172, lng:-94.721775, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sante Fe Pet Clinic", cat:"vet", lat:38.883192, lng:-94.776727, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Off Leash Dog Area", cat:"parque", lat:38.838225, lng:-94.75816, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stonepost at Lakeside Apartment Dog Park", cat:"parque", lat:38.878243, lng:-94.74416, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Area", cat:"parque", lat:38.836856, lng:-94.760269, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "old-mill-creek": {nombre:"Old Mill Creek", centro:[42.421965, -87.972578], tz:"America/Chicago", lugares:[
  {n:"The Animal Hospital Of Gurnee", cat:"vet", lat:42.415267, lng:-87.945982, dir:"38028 North Dilleys Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oliver-wisconsin": {nombre:"Oliver", centro:[46.657441, -92.195192], tz:"America/Chicago", lugares:[
  {n:"Bark Park", cat:"parque", lat:46.655363, lng:-92.28783, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "olmsted-falls": {nombre:"Olmsted Falls", centro:[41.375049, -81.908194], tz:"America/New_York", lugares:[
  {n:"Berea Animal Rescue Friends", cat:"refugio", lat:41.34877, lng:-81.901681, dir:"10015 East River Road", horas:[15.5, 18.5], nota:"Dato de OpenStreetMap"}
 ]},
 "omaha-nebraska": {nombre:"Omaha", centro:[41.258746, -95.938376], tz:"America/Chicago", lugares:[
  {n:"MazzyCo", cat:"tienda", lat:41.241701, lng:-95.980776, dir:"4502 Center Street", tel:"+1-402-672-5001", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Long Dog Fat Cat", cat:"tienda", lat:41.2575, lng:-95.960564, dir:"3201 Farnam Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Downtown Hound", cat:"refugio", lat:41.252184, lng:-95.936611, dir:"1513 Leavenworth Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"That Dog Wash", cat:"peluqueria", lat:41.254226, lng:-95.934876, dir:"1401 Jackson Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Henry Doorly Zoo and Aquarium", cat:"zoo", lat:41.225425, lng:-95.926517, dir:"3701 South 10th Street", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Hanscom Dog Park", cat:"parque", lat:41.244223, lng:-95.958269, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dewey Dog Park", cat:"parque", lat:41.256023, lng:-95.959571, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:41.25837, lng:-95.927418, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:41.258375, lng:-95.926864, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Omaha Dog Bar", cat:"parque", lat:41.247176, lng:-95.934271, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "onalaska-wisconsin": {nombre:"Onalaska", centro:[43.883061, -91.234354], tz:"America/Chicago", lugares:[
  {n:"Big River K9 Grooming Food and Supplies", cat:"peluqueria", lat:43.883012, lng:-91.233829, dir:"215 Main Street", tel:"+1-608-780-1593", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oneida": {nombre:"Oneida", centro:[41.07226, -90.2254], tz:"America/Chicago", lugares:[
  {n:"Lundeen Animal Hospital", cat:"vet", lat:41.072698, lng:-90.225392, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "onondaga": {nombre:"Onondaga", centro:[42.444204, -84.562196], tz:"America/New_York", lugares:[
  {n:"Stapleton Farms", cat:"refugio", lat:42.452849, lng:-84.498227, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ontario-ohio": {nombre:"Ontario", centro:[40.759542, -82.590166], tz:"America/New_York", lugares:[
  {n:"Animal Medical Center of Ontario", cat:"vet", lat:40.775045, lng:-82.593881, dir:"2211 Village Mall Drive", tel:"+1-419-529-5052", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.776647, lng:-82.590937, dir:"887 North Lexington-Springmill Road", tel:"+1-419-747-1930", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.785812, lng:-82.596765, dir:"2275 Walker Lake Road", tel:"+1-419-747-4544", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Maize Memorial Dog Park", cat:"parque", lat:40.763992, lng:-82.641587, dir:"3201-3311 Milligan Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "orange-city-iowa": {nombre:"Orange City", centro:[43.007242, -96.058314], tz:"America/Chicago", lugares:[
  {n:"Pipestone Veterinary Services", cat:"vet", lat:42.997977, lng:-96.036592, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "orchard-lake-village": {nombre:"Orchard Lake Village", centro:[42.581177, -83.358007], tz:"America/New_York", lugares:[
  {n:"Orchard Lake Animal Hospital", cat:"vet", lat:42.575057, lng:-83.363189, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ord": {nombre:"Ord", centro:[41.603338, -98.926213], tz:"America/Chicago", lugares:[
  {n:"Ord Veterinary Clinic", cat:"vet", lat:41.610982, lng:-98.944113, dir:"815 North 25th Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oregon": {nombre:"Oregon", centro:[42.014751, -89.332328], tz:"America/Chicago", lugares:[
  {n:"Village Way Dog Park", cat:"parque", lat:42.006672, lng:-89.343542, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oregon-wisconsin": {nombre:"Oregon", centro:[42.925966, -89.384278], tz:"America/Chicago", lugares:[
  {n:"Fisher Valley Felines", cat:"vet", lat:42.950757, lng:-89.434919, dir:"5644 County Highway M", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Anderson Farm Dog Park", cat:"parque", lat:42.89467, lng:-89.383741, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:42.897033, lng:-89.383509, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "orion-charter-township": {nombre:"Orion Charter Township", centro:[42.751651, -83.26423], tz:"America/New_York", lugares:[
  {n:"Orion Oaks Dog Park", cat:"parque", lat:42.763606, lng:-83.285539, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "orland-hills": {nombre:"Orland Hills", centro:[41.585311, -87.843108], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.598834, lng:-87.846629, dir:"9277 West 159th Street", tel:"+1 708-460-1116", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.604214, lng:-87.856852, dir:"15790 South La Grange Road", tel:"+1 708-364-7490", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Canine Campus Dog Park", cat:"parque", lat:41.56014, lng:-87.821409, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.601906, lng:-87.848881, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"vet", lat:41.594778, lng:-87.853399, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "orland-park": {nombre:"Orland Park", centro:[41.630663, -87.853629], tz:"America/Chicago", lugares:[
  {n:"Chicago Reptile House", cat:"tienda", lat:41.628682, lng:-87.850138, dir:"14410 John Humphrey Drive", tel:"+1-708-349-9055", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Kriser's Natural Pet", cat:"tienda", lat:41.614045, lng:-87.854359, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "orleans": {nombre:"Orleans", centro:[38.661721, -86.451656], tz:"America/Chicago", lugares:[
  {n:"Kirk Veterinary Service", cat:"vet", lat:38.661403, lng:-86.453345, dir:"145 West Washington Street", tel:"+1-812-865-2329", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Bark Above", cat:"peluqueria", lat:38.662796, lng:-86.453243, dir:"130 West Jefferson Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pawlor", cat:"peluqueria", lat:38.661745, lng:-86.452652, dir:"180 South Maple Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "orono-minnesota": {nombre:"Orono", centro:[44.971352, -93.604403], tz:"America/Chicago", lugares:[
  {n:"Susan E. Lurton Nature and Off-Leash Dog Park", cat:"parque", lat:44.991661, lng:-93.61227, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ortonville": {nombre:"Ortonville", centro:[42.852251, -83.443], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.856411, lng:-83.453869, dir:"260 North Ortonville Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "osage": {nombre:"Osage", centro:[43.284123, -92.811223], tz:"America/Chicago", lugares:[
  {n:"Osage Veterinary Clinic", cat:"vet", lat:43.28392, lng:-92.795069, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wes Carter Memorial Dog Park", cat:"parque", lat:43.278643, lng:-92.823095, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "osage-beach": {nombre:"Osage Beach", centro:[38.125992, -92.672325], tz:"America/Chicago", lugares:[
  {n:"Dogwood Animal Shelter", cat:"refugio", lat:38.089779, lng:-92.692503, dir:"1075 Runabout Drive", tel:"+15733484411", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake Hills Veterinary Clinic", cat:"vet", lat:38.126631, lng:-92.658852, dir:"5298 Osage Beach Parkway", tel:"+15733028100", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "osceola-indiana": {nombre:"Osceola", centro:[41.665049, -86.075836], tz:"America/New_York", lugares:[
  {n:"large dogs", cat:"parque", lat:41.672551, lng:-86.122853, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"small dogs", cat:"parque", lat:41.672029, lng:-86.123362, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "osceola-iowa": {nombre:"Osceola", centro:[41.034122, -93.766563], tz:"America/Chicago", lugares:[
  {n:"Clarke County Animal Shelter", cat:"refugio", lat:41.039084, lng:-93.763945, dir:"125 East Ayers Street", tel:"+1-641-342-1180", horas:[14.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Osceola Veterinary Clinic", cat:"vet", lat:41.046475, lng:-93.765887, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "osceola-nebraska": {nombre:"Osceola", centro:[41.179989, -97.547319], tz:"America/Chicago", lugares:[
  {n:"Osceola Vet Clinic", cat:"vet", lat:41.191453, lng:-97.537673, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "osceola-wisconsin": {nombre:"Osceola", centro:[45.321152, -92.70549], tz:"America/Chicago", lugares:[
  {n:"Osceola Veterinary Service S.C.", cat:"vet", lat:45.337796, lng:-92.681723, dir:"892 River Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oshkosh-wisconsin": {nombre:"Oshkosh", centro:[44.020692, -88.540857], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:43.997408, lng:-88.58145, dir:"1935 South Koeller Street", tel:"+1 920-232-9444", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Aquarium Pets", cat:"tienda", lat:44.011507, lng:-88.562247, dir:"702 Knapp Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Dentistry and Oral Surgery Specialists", cat:"vet", lat:44.032551, lng:-88.592823, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jack R. Facente Serpentarium (MToxins Venom Lab)", cat:"zoo", lat:44.011283, lng:-88.542807, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Menominee Park Zoo", cat:"zoo", lat:44.021409, lng:-88.51847, horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Dog Park", cat:"parque", lat:44.0816, lng:-88.531318, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nashville Pet Products", cat:"tienda", lat:44.011416, lng:-88.586472, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"N.E.W Pawsibilities", cat:"refugio", lat:44.045451, lng:-88.563438, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "osseo-minnesota": {nombre:"Osseo", centro:[45.119391, -93.402456], tz:"America/Chicago", lugares:[
  {n:"Douglas Animal Hospital", cat:"vet", lat:45.117673, lng:-93.401917, dir:"116 Central Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets Under Police Security (P.U.P.S.)", cat:"refugio", lat:45.116949, lng:-93.42517, dir:"11350 89th Avenue North", horas:[14.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Champlin Park Pet Hospital", cat:"vet", lat:45.152524, lng:-93.361422, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oswego": {nombre:"Oswego", centro:[41.683478, -88.352571], tz:"America/Chicago", lugares:[
  {n:"Bentley's Pet Stuff", cat:"tienda", lat:41.683291, lng:-88.352627, dir:"100 South Main Street", tel:"+1-630-551-3647", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bristol Veterinary Clinic", cat:"vet", lat:41.691505, lng:-88.381096, dir:"2271 Orchard Road", tel:"+1-630-554-1080", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "ottawa": {nombre:"Ottawa", centro:[41.351663, -88.845436], tz:"America/Chicago", lugares:[
  {n:"Ottawa Veterinary Hospital", cat:"vet", lat:41.34841, lng:-88.844599, dir:"817 Clinton Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ottawa-hills": {nombre:"Ottawa Hills", centro:[41.664217, -83.643269], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.701025, lng:-83.654516, dir:"5241 Monroe Street", tel:"+1 419-318-5441", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Graber's Animal Hospital", cat:"vet", lat:41.705954, lng:-83.624673, dir:"3311 West Laskey Road", tel:"+1-419-475-3456", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.697226, lng:-83.643932, dir:"5027 Monroe Street", tel:"+1-419-472-3810", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetPeople", cat:"tienda", lat:41.684022, lng:-83.621934, dir:"3504 Secor Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westside Veterinary Hospital", cat:"vet", lat:41.679024, lng:-83.682429, dir:"3240 North Holland Sylvania Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:41.701919, lng:-83.651668, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Three Dog Bakery", cat:"tienda", lat:41.701897, lng:-83.6516, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.693579, lng:-83.64555, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ottawa-kansas": {nombre:"Ottawa", centro:[38.615383, -95.267847], tz:"America/Chicago", lugares:[
  {n:"Bark Park", cat:"parque", lat:38.623776, lng:-95.276434, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ottawa-ohio": {nombre:"Ottawa", centro:[41.019219, -84.047167], tz:"America/New_York", lugares:[
  {n:"Putnam County Dog Shelter", cat:"refugio", lat:41.016889, lng:-84.030885, dir:"1490 East 2nd Street", tel:"+1-419-523-8617", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Office", cat:"vet", lat:41.015495, lng:-84.028283, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ottumwa": {nombre:"Ottumwa", centro:[41.019566, -92.411689], tz:"America/Chicago", lugares:[
  {n:"Heartland Humane Society", cat:"refugio", lat:41.06461, lng:-92.400073, dir:"314 Fox Sauk Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pipestone Veterinary Services of Ottumwa", cat:"vet", lat:41.06198, lng:-92.409212, dir:"2830 North Court Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "overland": {nombre:"Overland", centro:[38.701163, -90.362338], tz:"America/Chicago", lugares:[
  {n:"Puppy Love Pet Salon", cat:"peluqueria", lat:38.700952, lng:-90.371389, tel:"+1 314-801-8099", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Overland Animal Clinic", cat:"vet", lat:38.700508, lng:-90.366309, tel:"+1 314-427-1515", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggiestyle Boutique", cat:"peluqueria", lat:38.703042, lng:-90.361984, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodson Road Dog Park", cat:"parque", lat:38.68215, lng:-90.362172, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "overland-park": {nombre:"Overland Park", centro:[38.97425, -94.68517], tz:"America/Chicago", lugares:[
  {n:"College Boulevard Animal Hospital", cat:"vet", lat:38.926673, lng:-94.721786, dir:"11733 College Boulevard", tel:"+1-913-469-5869", horas:[7.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:38.936764, lng:-94.669026, dir:"10556 Metcalf Avenue", tel:"+1-913-346-2822", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Bird House", cat:"tienda", lat:38.992512, lng:-94.666137, dir:"6979 West 75th Street", tel:"+1-913-341-0700", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BluePearl", cat:"vet", lat:38.930688, lng:-94.72529, dir:"11950 West 110th Street", tel:"+1-913-642-9563", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.916805, lng:-94.666164, dir:"11501 Metcalf Avenue", tel:"+1 913-338-5544", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petworks Veterinary Hospital", cat:"vet", lat:38.96147, lng:-94.669151, tel:"+1-913-381-3131", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Oxford Animal Hospital", cat:"vet", lat:38.886072, lng:-94.69999, dir:"13433 Switzer Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Johnson County Animal Clinic", cat:"vet", lat:38.992344, lng:-94.696169, tel:"+1 913-642-2714", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Zoom Room Dog Training - Overland Park", cat:"peluqueria", lat:38.96178, lng:-94.668968, dir:"9238 Metcalf Avenue", horas:[12.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Overland Pet Clinic", cat:"vet", lat:38.9858, lng:-94.6665, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Hospital", cat:"vet", lat:38.973, lng:-94.6866, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.952899, lng:-94.725028, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Run & Play Park", cat:"parque", lat:38.879919, lng:-94.668503, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "owosso": {nombre:"Owosso", centro:[42.997597, -84.172054], tz:"America/New_York", lugares:[
  {n:"Magoo's Pet Outlet", cat:"tienda", lat:42.997947, lng:-84.175396, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oxford-iowa": {nombre:"Oxford", centro:[41.723358, -91.790736], tz:"America/Chicago", lugares:[
  {n:"Fur-iendly Grooming", cat:"peluqueria", lat:41.610115, lng:-91.758047, dir:"1780 Black Diamond Road Southwest", tel:"+13193250083", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oxford-michigan": {nombre:"Oxford", centro:[42.824752, -83.264662], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.811832, lng:-83.251964, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oxford-ohio": {nombre:"Oxford", centro:[39.510305, -84.742052], tz:"America/New_York", lugares:[
  {n:"Barkham Park", cat:"parque", lat:39.519743, lng:-84.728514, dir:"5211 Bonham Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Clinic", cat:"vet", lat:39.509344, lng:-84.750448, tel:"+1 513-523-5272", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northside Bark", cat:"parque", lat:39.516849, lng:-84.741151, dir:"5160 Morning Sun Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pacific": {nombre:"Pacific", centro:[38.481809, -90.741586], tz:"America/Chicago", lugares:[
  {n:"Pacific Animal Hospital", cat:"vet", lat:38.485285, lng:-90.77555, dir:"450 West Flier Drive", tel:"+1-636-257-2100", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "paddock-lake": {nombre:"Paddock Lake", centro:[42.577519, -88.105085], tz:"America/Chicago", lugares:[
  {n:"Petting Zoo", cat:"zoo", lat:42.59909, lng:-88.079151, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Off Leash Dog Park", cat:"parque", lat:42.568718, lng:-88.097489, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "painesville": {nombre:"Painesville", centro:[41.724488, -81.245657], tz:"America/New_York", lugares:[
  {n:"Crossroads Veterinary Hospital", cat:"vet", lat:41.708388, lng:-81.235344, dir:"1016 Bank Street", tel:"+1 440 853 8710", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.705202, lng:-81.267656, dir:"1213 Mentor Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "palatine": {nombre:"Palatine", centro:[42.11055, -88.04343], tz:"America/Chicago", lugares:[
  {n:"Biscuits & Bows", cat:"peluqueria", lat:42.08937, lng:-88.044779, dir:"1945 South Plum Grove Road", tel:"+1 847-202-7877", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet & Mac's Pet Resort", cat:"tienda", lat:42.119084, lng:-88.038055, dir:"East Northwest Highway", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "palmyra-indiana": {nombre:"Palmyra", centro:[38.40784, -86.109975], tz:"America/New_York", lugares:[
  {n:"Petting Zoo", cat:"zoo", lat:38.408833, lng:-86.102453, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pana": {nombre:"Pana", centro:[39.388931, -89.080081], tz:"America/Chicago", lugares:[
  {n:"JCC Dog Park", cat:"parque", lat:39.372932, lng:-89.082342, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "panorama-park": {nombre:"Panorama Park", centro:[41.555589, -90.453188], tz:"America/Chicago", lugares:[
  {n:"Crow Creek Dog Park", cat:"parque", lat:41.570859, lng:-90.480273, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "paola": {nombre:"Paola", centro:[38.572332, -94.878648], tz:"America/Chicago", lugares:[
  {n:"Paola Dog Park", cat:"parque", lat:38.584055, lng:-94.847289, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "paoli": {nombre:"Paoli", centro:[38.556166, -86.468321], tz:"America/Chicago", lugares:[
  {n:"Orange County Animal Clinic", cat:"vet", lat:38.598177, lng:-86.457374, dir:"2840 IN-37", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "papillion": {nombre:"Papillion", centro:[41.154443, -96.042238], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.136141, lng:-96.03067, dir:"7903 Towne Center Parkway", tel:"+1 402-537-0323", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Twin Creek Animal Hospital", cat:"vet", lat:41.141508, lng:-95.973422, dir:"4006 Twin Creek Drive", tel:"+14025059033", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Walnet Creek Veterinary Clinic", cat:"vet", lat:41.144899, lng:-96.065525, dir:"11336 South 96th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:41.134853, lng:-96.031194, dir:"7809 Towne Center Parkway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:41.172044, lng:-96.076123, dir:"10411 Portal Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Walnut Creek Dog Park - Large Breed Area", cat:"parque", lat:41.136863, lng:-96.073699, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Walnut Creek Dog Park - Small Breed Area", cat:"parque", lat:41.137199, lng:-96.075654, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "parchment": {nombre:"Parchment", centro:[42.328095, -85.56973], tz:"America/New_York", lugares:[
  {n:"Animal Clinic", cat:"vet", lat:42.317811, lng:-85.58843, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.321506, lng:-85.526938, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "park-rapids": {nombre:"Park Rapids", centro:[46.922181, -95.058632], tz:"America/Chicago", lugares:[
  {n:"Dogs Paw", cat:"refugio", lat:46.920444, lng:-95.130398, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "park-ridge": {nombre:"Park Ridge", centro:[42.011233, -87.840603], tz:"America/Chicago", lugares:[
  {n:"Touhy Animal Hospital", cat:"vet", lat:42.010104, lng:-87.856118, dir:"West Touhy Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "park-ridge-wisconsin": {nombre:"Park Ridge", centro:[44.522315, -89.547631], tz:"America/Chicago", lugares:[
  {n:"Stevens Point Veterinary Service", cat:"vet", lat:44.522652, lng:-89.520701, tel:"+1-715-341-8484", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stevens Point Animal Hospital", cat:"vet", lat:44.523846, lng:-89.513658, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "parkdale-michigan": {nombre:"Parkdale", centro:[44.267503, -86.302864], tz:"America/New_York", lugares:[
  {n:"Parkdale Veterinarian", cat:"vet", lat:44.268885, lng:-86.299826, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "parkersburg-iowa": {nombre:"Parkersburg", centro:[42.575559, -92.78704], tz:"America/Chicago", lugares:[
  {n:"Highview Animal Hospital", cat:"vet", lat:42.576527, lng:-92.823673, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "parkland-wisconsin": {nombre:"Parkland", centro:[46.647718, -91.99769], tz:"America/Chicago", lugares:[
  {n:"Superior Animal Shelter", cat:"refugio", lat:46.671718, lng:-92.001633, dir:"138 Moccasin Mike Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "parkston": {nombre:"Parkston", centro:[43.395007, -97.984421], tz:"America/Chicago", lugares:[
  {n:"Northwest Veterinary & Supply", cat:"vet", lat:43.383743, lng:-97.998736, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "parkville-missouri": {nombre:"Parkville", centro:[39.189627, -94.682689], tz:"America/Chicago", lugares:[
  {n:"Parkville Heights Animal Hospital", cat:"vet", lat:39.208956, lng:-94.683622, dir:"8830 Northwest 63rd Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Platte Landing Park Small Dog Off Leash Area", cat:"parque", lat:39.182527, lng:-94.695228, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Platte Landing Park Large Dog Off-Leash Area", cat:"parque", lat:39.183652, lng:-94.693179, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "parma-heights": {nombre:"Parma Heights", centro:[41.391413, -81.759826], tz:"America/New_York", lugares:[
  {n:"Parma Heights and Parma joint Dog Park", cat:"parque", lat:41.395509, lng:-81.747782, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "parma-ohio": {nombre:"Parma", centro:[41.38224, -81.735569], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.37759, lng:-81.739271, dir:"6870 Ridge Road", tel:"+1 440-845-9592", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:41.377455, lng:-81.739006, dir:"6870 Ridge Road", tel:"+1-440-845-5329", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:41.383272, lng:-81.737639, dir:"7651 West Ridgewood Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bartels Busack Pet Hospital", cat:"vet", lat:41.393071, lng:-81.710771, dir:"6270 State Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Parma Animal Shelter", cat:"refugio", lat:41.393578, lng:-81.711389, dir:"6260 State Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pampered Pets Grooming Salon", cat:"peluqueria", lat:41.405968, lng:-81.734324, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "parral": {nombre:"Parral", centro:[40.561174, -81.497062], tz:"America/New_York", lugares:[
  {n:"Valley View Animal Hospital", cat:"vet", lat:40.537773, lng:-81.497453, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "parsons": {nombre:"Parsons", centro:[37.340784, -95.25963], tz:"America/Chicago", lugares:[
  {n:"Trisha's Pampered Paws", cat:"peluqueria", lat:37.362391, lng:-95.27904, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pataskala": {nombre:"Pataskala", centro:[39.995573, -82.674237], tz:"America/New_York", lugares:[
  {n:"Animal Hospital of Pataskala", cat:"vet", lat:40.001779, lng:-82.675093, dir:"65 South Main Street", tel:"+1-740-927-0196", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Village Vetirinary Care", cat:"vet", lat:40.029685, lng:-82.670205, dir:"4159 Hazelton-Etna Road Southwest", tel:"+1-740-927-4159", horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "paulding": {nombre:"Paulding", centro:[41.138105, -84.580508], tz:"America/New_York", lugares:[
  {n:"Animal Clinic of Paulding", cat:"vet", lat:41.135679, lng:-84.60105, dir:"1030 West Wayne Street", tel:"+1 419 399 2871", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "paw-paw-michigan": {nombre:"Paw Paw", centro:[42.217817, -85.891125], tz:"America/New_York", lugares:[
  {n:"Paw Paw Veterinary Clinic", cat:"vet", lat:42.223163, lng:-85.86018, dir:"31690 Red Arrow Hwy", tel:"+1 269-657-3114", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw Paw Village Pharmacy", cat:"farma", lat:42.217249, lng:-85.887833, dir:"322 East Michigan Avenue", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "paxton": {nombre:"Paxton", centro:[40.460313, -88.09532], tz:"America/Chicago", lugares:[
  {n:"Animal Clinic of Paxton", cat:"vet", lat:40.45297, lng:-88.098732, dir:"725 South Railroad Avenue", tel:"+1-217-379-3800", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Paxton Veterinary Clinic PC", cat:"vet", lat:40.42931, lng:-88.087987, dir:"1953 East 200 North Road", tel:"+1 217-379-3232", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "peculiar": {nombre:"Peculiar", centro:[38.714548, -94.46112], tz:"America/Chicago", lugares:[
  {n:"Whiskers and Tails", cat:"refugio", lat:38.718208, lng:-94.461463, dir:"185 West Broadway Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wags", cat:"refugio", lat:38.71761, lng:-94.460115, dir:"117 South Main Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pekin": {nombre:"Pekin", centro:[40.568791, -89.650162], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:40.541451, lng:-89.600054, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.559849, lng:-89.615976, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pekin Animal Hospital", cat:"vet", lat:40.571682, lng:-89.649671, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fancy Paws Grooming", cat:"peluqueria", lat:40.571537, lng:-89.649671, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lange Animal Clinic", cat:"vet", lat:40.541596, lng:-89.631449, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pup Waggin' Quality Pet Grooming", cat:"peluqueria", lat:40.55673, lng:-89.64846, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pekin Veterinary Clinic", cat:"vet", lat:40.549443, lng:-89.604978, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"TAPS No-Kill Animal Shelter", cat:"refugio", lat:40.542787, lng:-89.66683, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bow-Wow Boutique", cat:"peluqueria", lat:40.573107, lng:-89.641147, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets2Bed.com", cat:"tienda", lat:40.572928, lng:-89.642448, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bear's Bites", cat:"tienda", lat:40.556233, lng:-89.65291, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ridgeside K9 Central Illinois", cat:"tienda", lat:40.549712, lng:-89.609485, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Tails Dog Park", cat:"parque", lat:40.561882, lng:-89.626306, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pender": {nombre:"Pender", centro:[42.114025, -96.707229], tz:"America/Chicago", lugares:[
  {n:"Pender Vet Clinic", cat:"vet", lat:42.109837, lng:-96.706694, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "peoria-illinois": {nombre:"Peoria", centro:[40.693861, -89.589101], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:40.681694, lng:-89.586711, dir:"208 River road", tel:"+1 309-698-5425", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Hounds & Company", cat:"peluqueria", lat:40.757819, lng:-89.591049, dir:"5805 North Humboldt Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawz & Effectz", cat:"peluqueria", lat:40.732172, lng:-89.580942, dir:"821 East War Memorial Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Fish Geek", cat:"tienda", lat:40.740928, lng:-89.603498, dir:"4325 North Sheridan Road", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Peoria County Animal Protection Services", cat:"refugio", lat:40.71516, lng:-89.569411, dir:"2600 Northeast Perry Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Peoria Zoo", cat:"zoo", lat:40.717481, lng:-89.573786, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Duryea Dog Park", cat:"parque", lat:40.744239, lng:-89.578161, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "peosta": {nombre:"Peosta", centro:[42.446953, -90.84338], tz:"America/Chicago", lugares:[
  {n:"Dubuque County Veterinary Services", cat:"vet", lat:42.44525, lng:-90.851062, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "peotone": {nombre:"Peotone", centro:[41.332808, -87.789758], tz:"America/Chicago", lugares:[
  {n:"Peotone Animal Hospital", cat:"vet", lat:41.328308, lng:-87.78578, dir:"431 South Governors Highway", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pequot-lakes": {nombre:"Pequot Lakes", centro:[46.60302, -94.30944], tz:"America/Chicago", lugares:[
  {n:"Pequot Lakes Dog Park", cat:"parque", lat:46.593082, lng:-94.314133, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "perry-heights": {nombre:"Perry Heights", centro:[40.795161, -81.465674], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.793918, lng:-81.442304, dir:"4965 Tuscarawas Street West", tel:"+1-330-477-6880", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "perrysburg": {nombre:"Perrysburg", centro:[41.557118, -83.627932], tz:"America/New_York", lugares:[
  {n:"South Suburban Animal Hospital", cat:"vet", lat:41.524389, lng:-83.638606, dir:"5100 Brockway Drive", tel:"+1-419-872-0920", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pet Spa", cat:"peluqueria", lat:41.560034, lng:-83.629436, dir:"113 Louisiana Avenue", tel:"+1-419-874-3836", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.54631, lng:-83.585712, dir:"27161 Crossroads Parkway", tel:"+1 419-873-1715", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Perrysburg Animal Hospital", cat:"vet", lat:41.558453, lng:-83.576096, dir:"9310 Bass Pro Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Community Petcare Clinic", cat:"vet", lat:41.585586, lng:-83.618104, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "peru-indiana": {nombre:"Peru", centro:[40.753725, -86.069033], tz:"America/New_York", lugares:[
  {n:"Peru Animal Hospital", cat:"vet", lat:40.760889, lng:-86.045694, tel:"+1 765-472-3979", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Scratching Post Cat Rescue", cat:"refugio", lat:40.768361, lng:-86.060339, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scratching Post Cat Rescue", cat:"refugio", lat:40.750969, lng:-86.069322, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "petoskey": {nombre:"Petoskey", centro:[45.373343, -84.95533], tz:"America/New_York", lugares:[
  {n:"Great Lakes Corals", cat:"tienda", lat:45.401838, lng:-84.877477, dir:"2230 North US-31 Highway", tel:"+1-231-321-1084", horas:[13.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Little Traverse Bay Humane Society", cat:"refugio", lat:45.426916, lng:-84.886996, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bay Pines Veterinary Clinic", cat:"vet", lat:45.424033, lng:-84.903704, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pettisville": {nombre:"Pettisville", centro:[41.531618, -84.225462], tz:"America/New_York", lugares:[
  {n:"Pondview Veterinary Clinic", cat:"vet", lat:41.544872, lng:-84.257932, dir:"20484 SR 2", tel:"+1-419-445-0207", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "pewaukee": {nombre:"Pewaukee", centro:[43.080565, -88.261205], tz:"America/Chicago", lugares:[
  {n:"Barkin' Up Hickory", cat:"refugio", lat:43.076399, lng:-88.237378, dir:"1271 Hickory Street", tel:"+1 262 691 20 10", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "phillips-wisconsin": {nombre:"Phillips", centro:[45.690082, -90.397102], tz:"America/Chicago", lugares:[
  {n:"North Country Veterinary Clinic", cat:"vet", lat:45.673961, lng:-90.390471, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"4Paws Pet Resort", cat:"refugio", lat:45.673932, lng:-90.390153, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pickerington": {nombre:"Pickerington", centro:[39.88423, -82.753505], tz:"America/New_York", lugares:[
  {n:"Compassionate Care Animal Hospital", cat:"vet", lat:39.903255, lng:-82.772779, dir:"809 Hill Road North", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:39.906318, lng:-82.778517, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:39.915309, lng:-82.783042, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Violet Township Dog Park", cat:"parque", lat:39.892201, lng:-82.745957, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pierre": {nombre:"Pierre", centro:[44.368364, -100.351136], tz:"America/Chicago", lugares:[
  {n:"All Creatures Animal Hospital", cat:"vet", lat:44.37615, lng:-100.321693, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of Pierre", cat:"vet", lat:44.364093, lng:-100.355392, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pierre Community Dog Park", cat:"parque", lat:44.356099, lng:-100.334327, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pigeon": {nombre:"Pigeon", centro:[43.830008, -83.270455], tz:"America/New_York", lugares:[
  {n:"Active Feed Co.", cat:"tienda", lat:43.830554, lng:-83.283136, dir:"7564 Pigeon Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pigeon-creek": {nombre:"Pigeon Creek", centro:[41.110888, -81.672904], tz:"America/New_York", lugares:[
  {n:"Endless Trails Animal Clinic", cat:"vet", lat:41.136656, lng:-81.745509, dir:"1621 Medina Road", tel:"+1-234-248-8032", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "pinckney": {nombre:"Pinckney", centro:[42.456701, -83.946336], tz:"America/New_York", lugares:[
  {n:"Mill Pond Animal Hospital", cat:"vet", lat:42.453603, lng:-83.946617, dir:"440 South Howell Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ed Bock Feeds & Stuff", cat:"tienda", lat:42.458968, lng:-83.926535, dir:"1360 West M 36", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Arise Dog Park", cat:"parque", lat:42.434939, lng:-83.931849, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pinconning": {nombre:"Pinconning", centro:[43.853633, -83.964987], tz:"America/New_York", lugares:[
  {n:"Cruisin Critter Care", cat:"vet", lat:43.9077, lng:-83.96568, dir:"5890 N Huron", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pittsburg-kansas": {nombre:"Pittsburg", centro:[37.410884, -94.70496], tz:"America/Chicago", lugares:[
  {n:"Claws and Paws", cat:"tienda", lat:37.410667, lng:-94.682506, dir:"1314 East 4th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ronald O. Thomas Dog Park", cat:"parque", lat:37.413135, lng:-94.692799, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Broadway Animal Hospital", cat:"vet", lat:37.406493, lng:-94.704461, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pittsfield-charter-township": {nombre:"Pittsfield Charter Township", centro:[42.210317, -83.724107], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.244506, lng:-83.682105, dir:"3120 Carpenter Road", tel:"+1 734-205-3192", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Ann Arbor Cat Clinic", cat:"vet", lat:42.244992, lng:-83.68638, dir:"3690 Packard Road", tel:"+1-734-973-9090", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"South Arbor Animal Hospital", cat:"vet", lat:42.229894, lng:-83.67934, dir:"4039 Carpenter Road", tel:"+1-734-973-7224", horas:[7.5, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Washtenaw Veterinary Hospital", cat:"vet", lat:42.245137, lng:-83.712716, dir:"2729 Packard Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Swift Run Dog Park", cat:"parque", lat:42.228995, lng:-83.701297, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "plain-city": {nombre:"Plain City", centro:[40.107882, -83.266968], tz:"America/New_York", lugares:[
  {n:"Small Dog Run", cat:"parque", lat:40.094835, lng:-83.195643, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "plainfield-illinois": {nombre:"Plainfield", centro:[41.608671, -88.205434], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.577995, lng:-88.155462, dir:"2775 Plainfield Road", tel:"+1 815-439-7100", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:41.682608, lng:-88.207858, dir:"3111 111th Street", tel:"+1 630 416 2200", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.682509, lng:-88.208401, dir:"3111 111th Street", tel:"+1 630-416-4864", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Welcome Waggin'", cat:"peluqueria", lat:41.591513, lng:-88.183757, dir:"16041 Joliet Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wheatland Animal Hospital", cat:"vet", lat:41.694903, lng:-88.207143, dir:"24041 West 103rd Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Center of Plainfield", cat:"vet", lat:41.619175, lng:-88.201976, dir:"14411 North Division Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Daisy Dog Park", cat:"parque", lat:41.63718, lng:-88.236122, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "plainfield-indiana": {nombre:"Plainfield", centro:[39.703872, -86.399477], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.716571, lng:-86.354466, dir:"2677 East Main Street", tel:"+1 317-837-9138", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Bed Bath & Biscuits", cat:"peluqueria", lat:39.703364, lng:-86.402202, dir:"110 North Vine Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:39.716463, lng:-86.354741, dir:"2677 East Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetAgree", cat:"peluqueria", lat:39.708995, lng:-86.379778, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mutty Paws", cat:"peluqueria", lat:39.702463, lng:-86.402679, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:39.707644, lng:-86.408722, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:39.707448, lng:-86.408476, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Run", cat:"parque", lat:39.731774, lng:-86.331014, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "plainwell": {nombre:"Plainwell", centro:[42.442614, -85.641764], tz:"America/New_York", lugares:[
  {n:"Dee-Tails Doggie Daycare and Boarding", cat:"refugio", lat:42.447798, lng:-85.651678, dir:"610 Allegan Street", tel:"+1-269-204-6435", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Vet Clinic", cat:"vet", lat:42.443022, lng:-85.640476, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "plano": {nombre:"Plano", centro:[41.662877, -88.536681], tz:"America/Chicago", lugares:[
  {n:"Brothers Country Supply", cat:"tienda", lat:41.661633, lng:-88.536321, dir:"117 South Center Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Hounds Pet Supplies", cat:"tienda", lat:41.662911, lng:-88.536965, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "platte-south-dakota": {nombre:"Platte", centro:[43.38694, -98.84453], tz:"America/Chicago", lugares:[
  {n:"Platte Veterinary Hospital", cat:"vet", lat:43.383517, lng:-98.852048, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "platte-woods": {nombre:"Platte Woods", centro:[39.228973, -94.649096], tz:"America/Chicago", lugares:[
  {n:"Backyard Bird Center", cat:"tienda", lat:39.249147, lng:-94.652703, dir:"6212 Northwest Barry Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Hospital", cat:"vet", lat:39.213666, lng:-94.645579, dir:"6519 North Cosby Avenue", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petcetera", cat:"tienda", lat:39.213764, lng:-94.645295, dir:"6527 North Cosby Avenue", horas:[7.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"KC Pet Project", cat:"refugio", lat:39.252312, lng:-94.664796, dir:"8721 North Stoddard Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "platteville-wisconsin": {nombre:"Platteville", centro:[42.734294, -90.478445], tz:"America/Chicago", lugares:[
  {n:"Family Pet Hospital LLC", cat:"vet", lat:42.731474, lng:-90.442174, dir:"1620 Means Drive", tel:"+1-608-348-9581", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park", cat:"parque", lat:42.732549, lng:-90.462602, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pleasant-hill-iowa": {nombre:"Pleasant Hill", centro:[41.596484, -93.514896], tz:"America/Chicago", lugares:[
  {n:"Cattle Tie-Outs", cat:"zoo", lat:41.591926, lng:-93.547323, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pleasant-hill-missouri": {nombre:"Pleasant Hill", centro:[38.786292, -94.274092], tz:"America/Chicago", lugares:[
  {n:"Best Friends Dog Park", cat:"parque", lat:38.826938, lng:-94.248718, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pleasant-prairie": {nombre:"Pleasant Prairie", centro:[42.526972, -87.854457], tz:"America/Chicago", lugares:[
  {n:"Safe Harbors Humane Society", cat:"vet", lat:42.561288, lng:-87.879787, dir:"7811 60th Avenue", tel:"+1 262 694 4047", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Willow Springs Veterinary Clinic", cat:"vet", lat:42.565343, lng:-87.933295, dir:"10372 77th Place", tel:"+1-262-694-3100", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bentley's Pet Stuff & Grooming", cat:"peluqueria", lat:42.565874, lng:-87.919549, dir:"9250 76th Street", tel:"+1 262 764 6461", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.564011, lng:-87.928874, dir:"9887 76th Street", tel:"+1 262-697-5716", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pleasant Prairie Animal Hospital", cat:"vet", lat:42.567312, lng:-87.916237, dir:"8989 74th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K9 Korner Dog Park", cat:"parque", lat:42.544787, lng:-87.835805, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pleasant-ridge": {nombre:"Pleasant Ridge", centro:[42.471147, -83.142148], tz:"America/New_York", lugares:[
  {n:"Fido Personal Dog Training", cat:"refugio", lat:42.466527, lng:-83.138111, dir:"23440 Woodward Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hilton Veterinary Clinic of Ferndale", cat:"vet", lat:42.473944, lng:-83.123382, dir:"3250 Hilton Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pleasant Ridge Dog Park", cat:"parque", lat:42.475133, lng:-83.137477, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pleasantville-ohio": {nombre:"Pleasantville", centro:[39.809786, -82.522103], tz:"America/New_York", lugares:[
  {n:"Shool Fly Stables", cat:"refugio", lat:39.799785, lng:-82.570682, dir:"Carroll Eastern Road Northeast", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "plover": {nombre:"Plover", centro:[44.456358, -89.544007], tz:"America/Chicago", lugares:[
  {n:"Portage County Humane Society", cat:"refugio", lat:44.451856, lng:-89.531846, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oakview Veterinary Medical Center", cat:"vet", lat:44.45457, lng:-89.530902, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodhaven Animal Health", cat:"vet", lat:44.443824, lng:-89.543417, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "plummer-minnesota": {nombre:"Plummer", centro:[47.911386, -96.041465], tz:"America/Chicago", lugares:[
  {n:"Hagen Veterinary Service", cat:"vet", lat:47.911527, lng:-96.036445, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "plymouth-charter-township": {nombre:"Plymouth Charter Township", centro:[42.373056, -83.492778], tz:"America/New_York", lugares:[
  {n:"Animal Cancer and Imaging Center", cat:"vet", lat:42.348379, lng:-83.487005, dir:"8560 North Canton Center Road", tel:"+1 734 459 6040", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "plymouth-indiana": {nombre:"Plymouth", centro:[41.343655, -86.309728], tz:"America/New_York", lugares:[
  {n:"Plymouth Veterinary Clinic", cat:"vet", lat:41.344501, lng:-86.29146, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "plymouth-michigan": {nombre:"Plymouth", centro:[42.3712, -83.467502], tz:"America/New_York", lugares:[
  {n:"Barkers Pet Salon", cat:"peluqueria", lat:42.379776, lng:-83.460547, dir:"746 North Mill Street", tel:"+1-734-254-9703", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:42.373602, lng:-83.464498, dir:"246 North Main Street", tel:"+1-734-887-9090", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Specialty Pet Supply", cat:"tienda", lat:42.358471, lng:-83.479004, dir:"1449 West Ann Arbor Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Roose Animal Hospital", cat:"vet", lat:42.369125, lng:-83.466331, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Polished Paw Boutique & Spa", cat:"peluqueria", lat:42.368909, lng:-83.471215, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Plymouth Veterinary Hospital", cat:"vet", lat:42.367317, lng:-83.468705, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "plymouth-minnesota": {nombre:"Plymouth", centro:[45.006515, -93.46651], tz:"America/Chicago", lugares:[
  {n:"Brew Park", cat:"parque", lat:45.008404, lng:-93.462718, dir:"2605 Fernbrook Ln N", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:45.029628, lng:-93.446918, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "plymouth-ohio": {nombre:"Plymouth", centro:[40.995286, -82.665429], tz:"America/New_York", lugares:[
  {n:"Gordon Aquatics", cat:"tienda", lat:40.995898, lng:-82.666127, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "poland-ohio": {nombre:"Poland", centro:[41.024226, -80.614795], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.027879, lng:-80.632445, dir:"1101 Doral Drive", tel:"+1 330-629-2479", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Extreme Tropical Pets", cat:"tienda", lat:41.037956, lng:-80.633156, dir:"6003 South Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Mill Pet Care Center", cat:"vet", lat:41.002029, lng:-80.633551, dir:"8105 South Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "polk-city-iowa": {nombre:"Polk City", centro:[41.771259, -93.713744], tz:"America/Chicago", lugares:[
  {n:"All Seasons Veterinary Care", cat:"vet", lat:41.764918, lng:-93.719584, dir:"755 West Bridge Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Polk City Veterinary Hospital", cat:"vet", lat:41.772468, lng:-93.712761, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pontiac": {nombre:"Pontiac", centro:[40.880867, -88.629784], tz:"America/Chicago", lugares:[
  {n:"Animal Wellness Center of Pontiac", cat:"vet", lat:40.880944, lng:-88.601449, dir:"1800 East Howard Street", tel:"+18158447180", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pontiac-michigan": {nombre:"Pontiac", centro:[42.638922, -83.291047], tz:"America/New_York", lugares:[
  {n:"Michigan Animal Rescue League", cat:"refugio", lat:42.647545, lng:-83.269782, dir:"790 Featherstone Street", tel:"+1-248-335-9290", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oakland County Animal Shelter", cat:"refugio", lat:42.660465, lng:-83.32977, dir:"1200 North Telegraph Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "poplar-bluff": {nombre:"Poplar Bluff", centro:[36.756317, -90.394487], tz:"America/Chicago", lugares:[
  {n:"Doggy Designs Grooming Salon", cat:"peluqueria", lat:36.778074, lng:-90.423624, dir:"2112 North Westwood Boulevard", tel:"+1-573-776-7733", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.763035, lng:-90.41464, dir:"757 North Westwood Bldv", tel:"+1 573-772-7255", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.790977, lng:-90.442767, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "port-huron": {nombre:"Port Huron", centro:[42.976085, -82.433374], tz:"America/New_York", lugares:[
  {n:"Countrytyme Smalltyme Dog And Cat Boarding Kennel", cat:"refugio", lat:43.071246, lng:-82.571608, dir:"5586 McIntyre Road", tel:"+1-810-385-2094", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:43.038984, lng:-82.459192, dir:"4485 24th Avenue", tel:"+1 810-385-4684", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Fort Gratiot Canine Commons", cat:"parque", lat:43.04686, lng:-82.475921, dir:"4788 Parker Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Classic Pet Supply", cat:"tienda", lat:42.912905, lng:-82.497, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Star Gazers Pet Salon", cat:"peluqueria", lat:42.916348, lng:-82.48419, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kamp K9", cat:"parque", lat:42.980922, lng:-82.530483, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Wash", cat:"peluqueria", lat:42.983444, lng:-82.527816, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "port-jefferson-ohio": {nombre:"Port Jefferson", centro:[40.328661, -84.094386], tz:"America/New_York", lugares:[
  {n:"Paws & Claws Retreat", cat:"peluqueria", lat:40.357799, lng:-84.114344, dir:"16900 Fort Loramie Swanders Road", tel:"+19375384791", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wags N Whiskers", cat:"peluqueria", lat:40.360443, lng:-84.105485, dir:"17400 Fort Loramie Swanders Road", tel:"+19377101301", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "port-washington-wisconsin": {nombre:"Port Washington", centro:[43.388554, -87.869285], tz:"America/Chicago", lugares:[
  {n:"Portage Veterinary Clinic", cat:"vet", lat:43.386973, lng:-87.875709, dir:"118 South Webster Street", tel:"+1-262-284-7103", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "port-william": {nombre:"Port William", centro:[39.552006, -83.786314], tz:"America/New_York", lugares:[
  {n:"D & G's Paws and Claws Snack Shack", cat:"tienda", lat:39.516027, lng:-83.844613, dir:"5356 US-68", tel:"+1-937-366-6558", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wilmington Area Humane Society", cat:"refugio", lat:39.51641, lng:-83.84577, dir:"5361 US 68", tel:"+1-877-802-1633", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "portage": {nombre:"Portage", centro:[41.575871, -87.176146], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.576261, lng:-87.181892, dir:"6030 Central Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.549979, lng:-87.185152, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "portage-lakes": {nombre:"Portage Lakes", centro:[40.995898, -81.535116], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.015466, lng:-81.553275, dir:"3100 Manchester Road", tel:"+1-330-644-9850", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Turkeyfoot Family Pet Center", cat:"vet", lat:40.975545, lng:-81.499294, dir:"687 East Turkeyfoot Lake Road", tel:"+1-330-896-1700", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Doggie Do's & Kittys Too", cat:"peluqueria", lat:41.031725, lng:-81.546341, dir:"2464 Manchester Road", tel:"+1-330-753-6001", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Camp Catnip Cat Boarding", cat:"refugio", lat:40.977474, lng:-81.493576, dir:"3430 South Arlington Road", tel:"+1-330-571-8479", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.983065, lng:-81.495481, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "portage-michigan": {nombre:"Portage", centro:[42.201154, -85.580002], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:42.226512, lng:-85.591374, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Good Pet Store", cat:"tienda", lat:42.229136, lng:-85.590101, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.240859, lng:-85.590173, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "portage-wisconsin": {nombre:"Portage", centro:[43.539494, -89.461334], tz:"America/Chicago", lugares:[
  {n:"Annie’s Gone to the Dogs", cat:"refugio", lat:43.612152, lng:-89.483451, dir:"W9688 Hogan Road", tel:"+1-920-382-1957", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"pets of Portage", cat:"tienda", lat:43.554961, lng:-89.48591, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "portsmouth-ohio": {nombre:"Portsmouth", centro:[38.734537, -82.996274], tz:"America/New_York", lugares:[
  {n:"The Kennelodge", cat:"refugio", lat:38.736055, lng:-83.002551, dir:"501 7th Street", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Spock Memorial Dog Park", cat:"parque", lat:38.731239, lng:-82.997147, dir:"740 2nd Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scioto Trail Animal Clinic", cat:"vet", lat:38.755853, lng:-82.990655, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "potterville": {nombre:"Potterville", centro:[42.629203, -84.738874], tz:"America/New_York", lugares:[
  {n:"Paws A Playin", cat:"refugio", lat:42.639555, lng:-84.757867, dir:"4038 East Gresham Highway", tel:"+1-517-896-7418", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "powell-ohio": {nombre:"Powell", centro:[40.15784, -83.075187], tz:"America/New_York", lugares:[
  {n:"Liberty Pet Hospital", cat:"vet", lat:40.173133, lng:-83.090007, dir:"8730 Moreland Street", tel:"+1-614-568-7297", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pup-A-Razzi", cat:"peluqueria", lat:40.159963, lng:-83.078598, dir:"47 Depot Street", tel:"+1 614 847 3647", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:40.163849, lng:-83.016324, dir:"86 Meadow Park Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cozy Cat Cottage Adoption Center", cat:"refugio", lat:40.147611, lng:-83.089466, dir:"10344 Sawmill Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.155894, lng:-83.094769, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Olentangy Premier Pet Care", cat:"vet", lat:40.196392, lng:-83.094405, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "poynette": {nombre:"Poynette", centro:[43.391203, -89.402862], tz:"America/Chicago", lugares:[
  {n:"Wildlife Exhibit", cat:"zoo", lat:43.401505, lng:-89.359466, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "prairie-du-chien": {nombre:"Prairie du Chien", centro:[43.05194, -91.140993], tz:"America/Chicago", lugares:[
  {n:"Tender Care Animal Hospital", cat:"vet", lat:43.030432, lng:-91.128488, dir:"1420 East Lessard Street", tel:"+1-608-326-7101", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rivers and Bluffs Animal Shelter", cat:"refugio", lat:43.076087, lng:-91.139806, dir:"460 Cliffwood Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "prairie-du-sac": {nombre:"Prairie du Sac", centro:[43.292025, -89.722209], tz:"America/Chicago", lugares:[
  {n:"Sauk Prairie Small Animal Hospital", cat:"vet", lat:43.293749, lng:-89.757235, dir:"E11340 County Highway PF", tel:"+1 608 643 2451", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "prairie-rose": {nombre:"Prairie Rose", centro:[46.817465, -96.835639], tz:"America/Chicago", lugares:[
  {n:"Shaggy's Dog Wash & Grooming", cat:"peluqueria", lat:46.833165, lng:-96.818464, dir:"3120 25th St S", tel:"+1 701-232-4367", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Red River Zoo", cat:"zoo", lat:46.845519, lng:-96.853772, dir:"4255 23rd Avenue South", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Red River Animal Emergency Hospital and Referral Center", cat:"vet", lat:46.845876, lng:-96.859333, dir:"4491 23rd Avenue South", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Diamond Q Animal Hospital", cat:"vet", lat:46.815809, lng:-96.86347, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Casselton Veterinary Clinic", cat:"vet", lat:46.805271, lng:-96.864351, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"NDSU Research Center", cat:"zoo", lat:46.844771, lng:-96.853356, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "prairie-village": {nombre:"Prairie Village", centro:[38.991411, -94.633277], tz:"America/Chicago", lugares:[
  {n:"Hollywood Feed", cat:"tienda", lat:39.001912, lng:-94.631059, dir:"15 On The Mall", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"On the Ball", cat:"peluqueria", lat:39.003462, lng:-94.630819, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "preston-minnesota": {nombre:"Preston", centro:[43.673761, -92.083666], tz:"America/Chicago", lugares:[
  {n:"Root River Veterinary Center", cat:"vet", lat:43.668922, lng:-92.081604, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "princeton-illinois": {nombre:"Princeton", centro:[41.368092, -89.464815], tz:"America/Chicago", lugares:[
  {n:"Animal Care Clinic", cat:"vet", lat:41.39064, lng:-89.466618, dir:"1616 North Main Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "princeton-minnesota": {nombre:"Princeton", centro:[45.569816, -93.580305], tz:"America/Chicago", lugares:[
  {n:"PawsUp4You LLC", cat:"tienda", lat:45.562756, lng:-93.579717, dir:"602 Rum River Dr", tel:"+1-763-389-0701", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "princeton-wisconsin": {nombre:"Princeton", centro:[43.850152, -89.130189], tz:"America/Chicago", lugares:[
  {n:"Shamba Safari", cat:"zoo", lat:43.891729, lng:-89.183819, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "prior-lake": {nombre:"Prior Lake", centro:[44.713327, -93.422687], tz:"America/Chicago", lugares:[
  {n:"River Valley Vetrinary Services", cat:"vet", lat:44.717927, lng:-93.418016, dir:"15900 Jordan Ave SE", tel:"+19524474118", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Prior Lake Pet Hospital", cat:"vet", lat:44.709569, lng:-93.424426, dir:"16680 Franklin Trail SE", tel:"+1-952-447-2855", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scott Lake Veterinary Center", cat:"vet", lat:44.740772, lng:-93.379934, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "proctor": {nombre:"Proctor", centro:[46.747164, -92.22547], tz:"America/Chicago", lugares:[
  {n:"Twin Ports Spay & Neuter", cat:"vet", lat:46.734121, lng:-92.175705, dir:"6128 Grand Avenue", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Lake Superior Zoo", cat:"zoo", lat:46.725554, lng:-92.191289, dir:"7210 Fremont Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Keene Creek Dog Park", cat:"parque", lat:46.736313, lng:-92.176081, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "proctorville-ohio": {nombre:"Proctorville", centro:[38.438232, -82.381127], tz:"America/New_York", lugares:[
  {n:"Proctorville Animal Clinic", cat:"vet", lat:38.439359, lng:-82.385695, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "prospect-heights": {nombre:"Prospect Heights", centro:[42.095305, -87.937569], tz:"America/Chicago", lugares:[
  {n:"Five Star Dog Grooming", cat:"peluqueria", lat:42.093424, lng:-87.907915, tel:"+1-847-372-2817", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Preiser Animal Hospital", cat:"vet", lat:42.099187, lng:-87.88105, dir:"2975 Milwaukee Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "put-in-bay": {nombre:"Put-in-Bay", centro:[41.651888, -82.818681], tz:"America/New_York", lugares:[
  {n:"Island Paws Dog Park", cat:"parque", lat:41.633394, lng:-82.832717, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "quincy-illinois": {nombre:"Quincy", centro:[39.935602, -91.409873], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:39.936004, lng:-91.365421, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "racine-wisconsin": {nombre:"Racine", centro:[42.731376, -87.783477], tz:"America/Chicago", lugares:[
  {n:"Karen A Nelson Memorial Dog Park", cat:"parque", lat:42.749203, lng:-87.821086, dir:"3800 Northwestern Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ralston": {nombre:"Ralston", centro:[41.201667, -96.03238], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.22939, lng:-96.130184, dir:"3103 Oak View Drive", tel:"+1 402-333-1048", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.253892, lng:-96.022523, dir:"715 South 72nd Street", tel:"+1 402-393-3225", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.260164, lng:-96.022906, dir:"7110 Dodge Street", tel:"+1 402-551-0885", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.214601, lng:-96.106533, dir:"12410 K Plaza", tel:"+1 402-330-9643", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"empire aquatics", cat:"tienda", lat:41.236403, lng:-96.006365, dir:"6102 Arbor Street", tel:"+1-877-727-7550", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Midwest", cat:"vet", lat:41.209361, lng:-96.065249, dir:"9706 Mockingbird Drive", tel:"+1-402-513-8741", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA 80 Dodge Animal Hospital", cat:"vet", lat:41.261431, lng:-96.041132, dir:"8022 West Dodge Street", tel:"+1-402-391-8800", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Jeanne's Petmine Grooming", cat:"peluqueria", lat:41.22498, lng:-96.016502, dir:"3707 South 67th Street", tel:"+1-402-556-9856", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sirius Veterinary Orthopedic Center", cat:"vet", lat:41.230215, lng:-96.006544, dir:"3125 South 61st Avenue", tel:"+1-402-934-1332", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Medical Center of Omaha", cat:"vet", lat:41.237163, lng:-96.011632, dir:"2323 South 64th Avenue", tel:"+1-402-558-1522", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Animal Hospital", cat:"vet", lat:41.22913, lng:-96.130165, dir:"3103 Oak View Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:41.232319, lng:-96.142023, dir:"14485 West Center Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Harvey Oaks Animal Hospital", cat:"vet", lat:41.233552, lng:-96.147988, dir:"2706 South 148th Avenue Circle", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Michele's Pet Spa", cat:"peluqueria", lat:41.248226, lng:-96.099554, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pucci's", cat:"peluqueria", lat:41.249859, lng:-96.047544, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Feline", cat:"peluqueria", lat:41.234635, lng:-96.16378, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Green Spot", cat:"peluqueria", lat:41.247943, lng:-96.022643, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Apple Creek Dog Park", cat:"parque", lat:41.237969, lng:-96.133916, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Goodrich Veterinary Clinic", cat:"vet", lat:41.204491, lng:-96.134602, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Millard Veterinay Clinic", cat:"vet", lat:41.201061, lng:-96.138117, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Park 120 Dog Park", cat:"parque", lat:41.20282, lng:-96.096987, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Omaha Animal Hospital", cat:"vet", lat:41.205787, lng:-95.965759, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggie Daycare", cat:"parque", lat:41.232014, lng:-96.083101, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ramsey-minnesota": {nombre:"Ramsey", centro:[45.232059, -93.460501], tz:"America/Chicago", lugares:[
  {n:"Fetched-Up", cat:"tienda", lat:45.218725, lng:-93.422276, dir:"6111 T.H 10 Service Road", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "randall-minnesota": {nombre:"Randall", centro:[46.091077, -94.50362], tz:"America/Chicago", lugares:[
  {n:"Harmony Run K9 - Dog Camp and Daycare", cat:"refugio", lat:46.103293, lng:-94.463515, dir:"23711 95th Avenue", tel:"+1-218-230-0457", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rantoul": {nombre:"Rantoul", centro:[40.308367, -88.155879], tz:"America/Chicago", lugares:[
  {n:"Rantoul Veterinary Clinic", cat:"vet", lat:40.308667, lng:-88.136054, dir:"401 South Maplewood Drive", tel:"+1-217-893-3216", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "rapid-city-south-dakota": {nombre:"Rapid City", centro:[44.080604, -103.228023], tz:"America/Denver", lugares:[
  {n:"Mt Rushmore Birds/Paws Pet Bakery", cat:"tienda", lat:44.10728, lng:-103.222762, dir:"2255 Haines Avenue", tel:"+16053883925", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:44.097266, lng:-103.184459, dir:"1713 Eglin Street", tel:"+1 605-341-2056", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Cornerstone Animal Clinic", cat:"vet", lat:44.033342, lng:-103.214051, dir:"36 East Stumer Road", tel:"+1-605-719-7355", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:44.106411, lng:-103.228658, dir:"925 Disk Drive", tel:"+1 605-341-4488", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Black Hills Animal Hospital", cat:"vet", lat:44.057023, lng:-103.192527, dir:"2909 Cambell Street", tel:"+1 605-343-6066", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Reptile Gardens", cat:"zoo", lat:43.990682, lng:-103.271519, dir:"8955 US-16", tel:"+18003350275", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Noah's Ark Animal Hospital", cat:"vet", lat:44.073094, lng:-103.232745, dir:"1315 Mount Rushmore Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"ShamPooch", cat:"peluqueria", lat:44.071084, lng:-103.27923, dir:"3606 Canyon Lake Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mountain View Animal Hospital", cat:"vet", lat:44.074998, lng:-103.251756, dir:"1130 Jackson Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"T & Bonnie's Grooming", cat:"tienda", lat:44.079141, lng:-103.216405, dir:"7 Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Autumn Hills Veterinary Hospital", cat:"vet", lat:44.020283, lng:-103.252779, dir:"2014 Hope Court", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bear Country USA", cat:"zoo", lat:43.978127, lng:-103.298561, dir:"13820 South Highway 16", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bar K-9", cat:"parque", lat:44.097884, lng:-103.160808, dir:"3306 Edwards Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yuppy Puppy Grooming", cat:"tienda", lat:44.081561, lng:-103.221808, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Pantry", cat:"tienda", lat:44.084106, lng:-103.236328, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wags to Whiskers Pet Grooming", cat:"tienda", lat:44.084041, lng:-103.236353, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dakota Hills Veterinary Clinic", cat:"vet", lat:44.078431, lng:-103.186123, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ravenna-ohio": {nombre:"Ravenna", centro:[41.157557, -81.242047], tz:"America/New_York", lugares:[
  {n:"Karen's K-9 Clips", cat:"peluqueria", lat:41.158924, lng:-81.267523, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "raymore": {nombre:"Raymore", centro:[38.810131, -94.46765], tz:"America/Chicago", lugares:[
  {n:"Animal Clinic", cat:"vet", lat:38.812615, lng:-94.498614, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "raytown": {nombre:"Raytown", centro:[39.008923, -94.46221], tz:"America/Chicago", lugares:[
  {n:"Countryside Animal Clinic", cat:"vet", lat:38.98012, lng:-94.581866, dir:"8131 Holmes Road", tel:"+1-816-333-5050", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Bannister Veterinary Clinic", cat:"vet", lat:38.966015, lng:-94.493008, dir:"8201 East 87th Street", tel:"+1-816-765-7979", horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Kansas City Zoo & Aquarium", cat:"zoo", lat:39.003195, lng:-94.525207, dir:"6800 Zoo Drive", tel:"+1-816-595-1234", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kansas City Campus for Animal Care", cat:"refugio", lat:38.998337, lng:-94.532723, dir:"7077 Elmwood Avenue", tel:"+1-816-683-1383", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"A Dog's Fun Playce", cat:"refugio", lat:38.985633, lng:-94.594337, dir:"7833 Wornall Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"vet", lat:38.992471, lng:-94.592214, dir:"204 West 75th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arrowhead Veterinary Services", cat:"vet", lat:39.034323, lng:-94.392376, dir:"16021 E US Highway 40", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"KC Cat Clinic", cat:"vet", lat:38.999147, lng:-94.588974, horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Champwork Pet Supplies", cat:"tienda", lat:38.996095, lng:-94.557249, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Country Kennels", cat:"refugio", lat:39.033913, lng:-94.392199, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "redford-charter-township": {nombre:"Redford Charter Township", centro:[42.394547, -83.295393], tz:"America/New_York", lugares:[
  {n:"Alpha K9", cat:"tienda", lat:42.401382, lng:-83.221457, dir:"18360 Fenkell Street", tel:"+1-313-653-4448", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tropical Fish", cat:"tienda", lat:42.396608, lng:-83.336449, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westcott Veterinary Care Center", cat:"vet", lat:42.425843, lng:-83.282053, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chap's Feeds", cat:"tienda", lat:42.398466, lng:-83.333723, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Strong Veterinary Hospital", cat:"vet", lat:42.398492, lng:-83.333494, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "redwood-falls": {nombre:"Redwood Falls", centro:[44.539372, -95.116448], tz:"America/Chicago", lugares:[
  {n:"Ramsey Park Zoo", cat:"zoo", lat:44.550371, lng:-95.123259, dir:"99 Oak Street", horas:[7.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"Goat Feeding", cat:"zoo", lat:44.550961, lng:-95.123971, horas:[7.0, 23.0], nota:"Dato de OpenStreetMap"}
 ]},
 "reedsville-wisconsin": {nombre:"Reedsville", centro:[44.153404, -87.957459], tz:"America/Chicago", lugares:[
  {n:"Veterinary Associates", cat:"vet", lat:44.158711, lng:-87.965542, dir:"19922 US Highway 10", tel:"+1 920-754-4307", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Equine Enterprises", cat:"refugio", lat:44.12541, lng:-87.910186, dir:"16706 Hilltop Road", tel:"+1 920-775-3818", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "reminderville": {nombre:"Reminderville", centro:[41.345888, -81.395111], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.349559, lng:-81.387529, dir:"7355 Market Place Drive", tel:"+1 330-995-2890", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "rensselaer": {nombre:"Rensselaer", centro:[40.936704, -87.150856], tz:"America/Chicago", lugares:[
  {n:"Jasper County Animal Shelter", cat:"refugio", lat:40.942041, lng:-87.18497, dir:"2430 West Clark Street", tel:"+1-219-866-5756", horas:[11.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Dawgs in Suds Grooming", cat:"peluqueria", lat:40.934708, lng:-87.154055, dir:"331 West Milroy Avenue", tel:"+1-219-964-2189", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "republic-missouri": {nombre:"Republic", centro:[37.119381, -93.480377], tz:"America/Chicago", lugares:[
  {n:"Animal House", cat:"vet", lat:37.117484, lng:-93.471181, dir:"564 US Hwy 60 East", tel:"+1-417-732-2282", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Mutt Hutt", cat:"peluqueria", lat:37.123573, lng:-93.464818, dir:"892 United States Highway 60", tel:"+14177325267", horas:[7.0, 14.0], nota:"Dato de OpenStreetMap"},
  {n:"Hugo Roy's Pet Boutique", cat:"tienda", lat:37.118915, lng:-93.471677, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "reynoldsburg": {nombre:"Reynoldsburg", centro:[39.954786, -82.812119], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.934924, lng:-82.793246, dir:"2389 Taylor Park Drive", tel:"+1 614-986-3094", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"A Dog's Best Friend Grooming", cat:"peluqueria", lat:39.956178, lng:-82.79573, dir:"7598 East Main Street", tel:"+1 614-866-9094", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.984026, lng:-82.786643, dir:"8095 East Broad Street", tel:"+1 614-490-3027", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.988158, lng:-82.782736, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cross Creeks Animal Hospital", cat:"vet", lat:39.920101, lng:-82.783126, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rosehill Veterinary Hospital", cat:"vet", lat:39.955501, lng:-82.817546, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vet Clinic East", cat:"vet", lat:39.915118, lng:-82.860077, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rhinelander": {nombre:"Rhinelander", centro:[45.636623, -89.412075], tz:"America/Chicago", lugares:[
  {n:"Animal Health Care Center", cat:"vet", lat:45.655278, lng:-89.390221, dir:"1848 North Stevens Street", tel:"+1-715-365-8387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northern Paws Animal Hospita", cat:"vet", lat:45.634944, lng:-89.393242, dir:"1175 Lincoln Street", tel:"+1-715-369-4900", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"T & M Kennels", cat:"peluqueria", lat:45.574958, lng:-89.447089, dir:"2350 State Highway 17", tel:"+1-715-362-7744", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Buck Lake Veterinary Service", cat:"vet", lat:45.593949, lng:-89.429526, dir:"Newman Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oneida County Humane Society", cat:"refugio", lat:45.655, lng:-89.3896, dir:"1852 North Stevens Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Drs. Foster and Smith", cat:"tienda", lat:45.627247, lng:-89.447798, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shepard Dog park", cat:"parque", lat:45.62986, lng:-89.42157, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rib-mountain": {nombre:"Rib Mountain", centro:[44.913355, -89.64936], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:44.91648, lng:-89.650619, dir:"4440 Rib Mountain Drive", tel:"+1 715-359-3930", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:44.924337, lng:-89.651512, dir:"3601 Rib Mountain Drive", tel:"+1 715-355-6159", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:44.919166, lng:-89.649775, dir:"4121 Rib Mountain Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Marathon County", cat:"refugio", lat:44.949819, lng:-89.722979, dir:"7001 Packer Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sandy's Bark Park", cat:"parque", lat:44.926446, lng:-89.663055, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rice-lake-wisconsin": {nombre:"Rice Lake", centro:[45.502793, -91.733423], tz:"America/Chicago", lugares:[
  {n:"Rice Lake Animal Hospital", cat:"vet", lat:45.472709, lng:-91.730741, dir:"110 Kern", tel:"+1-715-234-4709", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Bear Creek Animal Hospital", cat:"vet", lat:45.545397, lng:-91.751425, dir:"2352 County Highway SS", tel:"+1-715-234-3181", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "richfield-minnesota": {nombre:"Richfield", centro:[44.876643, -93.287788], tz:"America/Chicago", lugares:[
  {n:"Lake Harriet Veterinary", cat:"vet", lat:44.925248, lng:-93.290658, dir:"4249 Bryant Avenue South", tel:"+1-812-822-1545", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Minnehaha Animal Hospital", cat:"vet", lat:44.915711, lng:-93.262439, dir:"4809 Chicago Avenue", tel:"+1-612-825-4427", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:44.884332, lng:-93.287154, dir:"710 West 66th Street", tel:"+1 612-861-1335", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Foxy Dogs", cat:"peluqueria", lat:44.903568, lng:-93.277619, dir:"5457 Nicollet Avenue", tel:"+1 612-824-3699", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:44.863287, lng:-93.293658, dir:"1100 West 78th Street", tel:"+1 612-798-3665", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Rivershore Aquariums", cat:"tienda", lat:44.893901, lng:-93.287878, dir:"6015 Lyndale Avenue South", tel:"+1-612-315-3946", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"City Paws Pet Club", cat:"refugio", lat:44.906685, lng:-93.288727, dir:"5300 Lyndale Avenue South", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blue Cross Animal Hospital", cat:"vet", lat:44.905812, lng:-93.28863, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:44.862999, lng:-93.2935, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Adogo Pet Hotel", cat:"refugio", lat:44.889654, lng:-93.2482, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Animal Hospital", cat:"vet", lat:44.857345, lng:-93.3059, horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Airport Dog Park", cat:"parque", lat:44.892469, lng:-93.236299, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "richfield-wisconsin": {nombre:"Richfield", centro:[43.256116, -88.193982], tz:"America/Chicago", lugares:[
  {n:"Richfield Area Pet Clinic", cat:"vet", lat:43.235163, lng:-88.19096, dir:"1275 Morgan Drive", tel:"+1-262-628-7272", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "richmond-heights": {nombre:"Richmond Heights", centro:[38.628271, -90.319129], tz:"America/Chicago", lugares:[
  {n:"Animal Medical Center of Mid-America - St. Louis City", cat:"vet", lat:38.626669, lng:-90.276201, dir:"1201 Macklind Avenue", tel:"+1-314-951-1534", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Missouri", cat:"refugio", lat:38.626239, lng:-90.276019, dir:"1201 Macklind Avenue", tel:"+1-314-647-8800", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Saint Louis Zoo", cat:"zoo", lat:38.635182, lng:-90.29059, dir:"1 Government Drive", tel:"+1-314-781-0900", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Treats Unleashed", cat:"tienda", lat:38.624767, lng:-90.334472, dir:"1620 South Hanley Road", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Forest Park Southeast Dog Park", cat:"parque", lat:38.630189, lng:-90.257569, dir:"4359 Chouteau Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K9 Garden", cat:"parque", lat:38.621099, lng:-90.259481, dir:"4565 McRee Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bayer Insectarium", cat:"zoo", lat:38.634965, lng:-90.291829, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "richmond-indiana": {nombre:"Richmond", centro:[39.82869, -84.889852], tz:"America/New_York", lugares:[
  {n:"Pup Cuts", cat:"peluqueria", lat:39.828158, lng:-84.903155, dir:"98 Southwest 1st Street", tel:"+1-765-960-1052", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "richton-park": {nombre:"Richton Park", centro:[41.4846, -87.709054], tz:"America/Chicago", lugares:[
  {n:"Winnebago Dog Park", cat:"parque", lat:41.491836, lng:-87.697001, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "richville-ohio": {nombre:"Richville", centro:[40.75117, -81.477897], tz:"America/New_York", lugares:[
  {n:"Lake Sherman Park", cat:"parque", lat:40.709651, lng:-81.454645, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "riley-indiana": {nombre:"Riley", centro:[39.390039, -87.300018], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.44036, lng:-87.336447, dir:"2187 South State Road 46", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ringwood": {nombre:"Ringwood", centro:[42.392243, -88.297033], tz:"America/Chicago", lugares:[
  {n:"Lucky-E Kennel", cat:"refugio", lat:42.394236, lng:-88.297245, dir:"4915 Ringwood Road", tel:"+1-815-653-9016", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggie Style Grooming & Pet Wellness", cat:"peluqueria", lat:42.391884, lng:-88.296108, horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"}
 ]},
 "river-falls-wisconsin": {nombre:"River Falls", centro:[44.85965, -92.625505], tz:"America/Chicago", lugares:[
  {n:"Angel's Pet World Too", cat:"tienda", lat:44.873762, lng:-92.62243, dir:"1331 North Main Street", tel:"+1 715 629 7442", horas:[10.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"River Falls Dog Park", cat:"parque", lat:44.833218, lng:-92.645776, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "river-forest": {nombre:"River Forest", centro:[41.897809, -87.813948], tz:"America/Chicago", lugares:[
  {n:"Doggie Day Play", cat:"refugio", lat:41.893978, lng:-87.804477, dir:"1135 Chicago Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Trailside Museum of Natural History", cat:"zoo", lat:41.893024, lng:-87.826219, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "river-rouge": {nombre:"River Rouge", centro:[42.272926, -83.135289], tz:"America/New_York", lugares:[
  {n:"All About Animals", cat:"vet", lat:42.309995, lng:-83.125982, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "riverlea": {nombre:"Riverlea", centro:[40.082026, -83.025213], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:40.065301, lng:-83.018889, dir:"5030 North High Street", tel:"+1 614-436-7387", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.052704, lng:-83.06743, dir:"1825 West Henderson Road", tel:"+1-614-591-5333", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"North Kenny Veterinary Hospital", cat:"vet", lat:40.057679, lng:-83.048488, dir:"4590 Kenny Road", tel:"+1-614-515-6696", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Jack's Pets & Aquarium", cat:"tienda", lat:40.065076, lng:-83.0237, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cat Welfare Association", cat:"tienda", lat:40.057308, lng:-82.999813, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Beechwold Veterinary Hospital", cat:"vet", lat:40.058078, lng:-83.000151, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bethel Animal Hospital", cat:"vet", lat:40.064545, lng:-83.066013, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Godown Dog Park", cat:"parque", lat:40.083454, lng:-83.052237, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Vet Clinic", cat:"vet", lat:40.076867, lng:-83.019353, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ohio House Rabbit Rescue", cat:"tienda", lat:40.074574, lng:-83.019209, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Shaggy Shack", cat:"peluqueria", lat:40.073994, lng:-83.018316, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "riverside-illinois": {nombre:"Riverside", centro:[41.832347, -87.81532], tz:"America/Chicago", lugares:[
  {n:"Hamill Family Wild Encounters", cat:"zoo", lat:41.831587, lng:-87.830881, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hamill Family Play Zoo", cat:"zoo", lat:41.831592, lng:-87.832563, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "riverside-missouri": {nombre:"Riverside", centro:[39.177503, -94.613012], tz:"America/Chicago", lugares:[
  {n:"Eagle Animal Hospital and Resort", cat:"vet", lat:39.182514, lng:-94.612796, dir:"4825 Northwest Gateway Avenue", tel:"+1-816-239-1913", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"E. H. Young Riverfront Park Off-Leash Dog Park Small Dog Area", cat:"parque", lat:39.164598, lng:-94.616659, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"E. H. Young Riverfront Park Off-Leash Dog Park Large Dog Area", cat:"parque", lat:39.165204, lng:-94.616221, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "riverside-ohio": {nombre:"Riverside", centro:[39.779398, -84.124636], tz:"America/New_York", lugares:[
  {n:"Fetch Puppies", cat:"tienda", lat:39.768757, lng:-84.051545, dir:"2742 North Fairfield Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kitty Hawk/Menlo Dog Park", cat:"parque", lat:39.839172, lng:-84.126352, dir:"5210 Sabra Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.772049, lng:-84.053791, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Friend's Puppy Store", cat:"tienda", lat:39.766301, lng:-84.055531, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Laura's Pet Styles", cat:"tienda", lat:39.756748, lng:-84.108687, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "riverview-michigan": {nombre:"Riverview", centro:[42.174207, -83.17937], tz:"America/New_York", lugares:[
  {n:"The Golden Leash", cat:"refugio", lat:42.18801, lng:-83.169308, dir:"4450 13th Street", tel:"+1-313-401-9884", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogs 'N Divas", cat:"peluqueria", lat:42.185289, lng:-83.193793, dir:"14120 Pennsylvania Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clip-N-Critters LLC", cat:"peluqueria", lat:42.176135, lng:-83.188547, tel:"+1-734-675-9828", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riverview Animal Hospital", cat:"vet", lat:42.171254, lng:-83.188407, dir:"18761 Fort Street", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Premier Pet Supply", cat:"tienda", lat:42.183183, lng:-83.190377, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "riverview-missouri": {nombre:"Riverview", centro:[38.747828, -90.2115], tz:"America/Chicago", lugares:[
  {n:"Gina's Pet Grooming", cat:"tienda", lat:38.749092, lng:-90.217529, dir:"703 Chambers Road", tel:"+1 314-869-9366", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "riverwoods": {nombre:"Riverwoods", centro:[42.167607, -87.897099], tz:"America/Chicago", lugares:[
  {n:"Des Plaines Valley Animal Hospital", cat:"vet", lat:42.155177, lng:-87.915388, dir:"155 North Milwaukee Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "roanoke-indiana": {nombre:"Roanoke", centro:[40.962547, -85.373308], tz:"America/New_York", lugares:[
  {n:"posh puppy", cat:"peluqueria", lat:40.964698, lng:-85.375359, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "robbinsdale": {nombre:"Robbinsdale", centro:[45.031316, -93.339584], tz:"America/Chicago", lugares:[
  {n:"Broadway Robbinsdale Animal Hospital", cat:"vet", lat:45.009858, lng:-93.315701, dir:"2727 West Broadway Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Victory Prairie Off-Leash Dog Park", cat:"parque", lat:45.040707, lng:-93.314426, dir:"4701 North Russell Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark & Bathe", cat:"peluqueria", lat:45.025755, lng:-93.333313, dir:"3833 West Broadway Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "robinson": {nombre:"Robinson", centro:[39.00532, -87.739194], tz:"America/Chicago", lugares:[
  {n:"Robinson Hospital for Animals", cat:"vet", lat:39.007594, lng:-87.684234, dir:"10499 IL 1", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rochelle-illinois": {nombre:"Rochelle", centro:[41.923918, -89.068707], tz:"America/Chicago", lugares:[
  {n:"Rochelle Dog Park", cat:"parque", lat:41.911846, lng:-89.056317, horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "rochester": {nombre:"Rochester", centro:[39.749494, -89.53176], tz:"America/Chicago", lugares:[
  {n:"Henson Robinson Zoo", cat:"zoo", lat:39.72753, lng:-89.583198, dir:"1100 East Lake Shore Drive", tel:"+1-217-585-1821", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rochester-hills": {nombre:"Rochester Hills", centro:[42.658366, -83.149932], tz:"America/New_York", lugares:[
  {n:"Avon Animal Clinic", cat:"vet", lat:42.633834, lng:-83.208334, dir:"3915 West Auburn Road", tel:"+1-248-852-5580", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:42.663952, lng:-83.13457, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Premier Pet Supply", cat:"tienda", lat:42.635611, lng:-83.132921, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Auburn Animal Hospital", cat:"vet", lat:42.637634, lng:-83.09999, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rochester-michigan": {nombre:"Rochester", centro:[42.680588, -83.133821], tz:"America/New_York", lugares:[
  {n:"Woof Gang Bakery & Grooming", cat:"peluqueria", lat:42.679794, lng:-83.151544, dir:"121 South Livernois Road", tel:"+1-248-237-3672", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "rochester-minnesota": {nombre:"Rochester", centro:[44.023439, -92.463018], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:44.06299, lng:-92.505354, dir:"3845 Marketplace Drive Northwest", tel:"+1 507-535-7600", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:43.956263, lng:-92.465452, dir:"4603 Maine Avenue Southeast", tel:"+1 507-252-9589", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:43.982074, lng:-92.459654, dir:"80 25th Street Southeast", tel:"+1 507-513-6695", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"BluePearl", cat:"vet", lat:44.022514, lng:-92.499855, dir:"121 23rd Avenue SW", tel:"+1 507 424 3976", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Christine's Pampered Pooches", cat:"peluqueria", lat:43.991135, lng:-92.462013, dir:"2116 South Broadway Avenue", tel:"+1 507-405-6104", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Angel's Touch Pet Spa", cat:"peluqueria", lat:43.991134, lng:-92.461971, dir:"2116 South Broadway Avenue", tel:"+1 507-251-4123", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Med City Animal Hospital", cat:"vet", lat:44.03641, lng:-92.480148, dir:"1111 14th Street NW", tel:"+1 507 258 9011", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Quarry Hill Park Animal Hospital", cat:"vet", lat:44.049257, lng:-92.429642, dir:"2554 Clare Lane Northeast", tel:"+1 507-285-1059", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Cascade Animal medical Center and Inn", cat:"vet", lat:44.050182, lng:-92.523034, dir:"4020 26th St. NW", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Companion Acres", cat:"refugio", lat:43.965024, lng:-92.465062, dir:"3902 Commerce Court Southwest", horas:[6.25, 7.5], nota:"Dato de OpenStreetMap"},
  {n:"Heritage Pet Hospital", cat:"vet", lat:44.046173, lng:-92.490214, dir:"2117 West Frontage Road Northwest", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cascade Animal Medical Center", cat:"vet", lat:44.050196, lng:-92.523001, dir:"4020 26th Street Northwest", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Broadway Veterinary Hospital", cat:"vet", lat:43.993963, lng:-92.462402, dir:"1910 South Broadway Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Health Care", cat:"vet", lat:44.006813, lng:-92.4509, dir:"1206 9th Avenue Southeast", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:44.062697, lng:-92.505568, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's Pet Food & Supplies", cat:"tienda", lat:44.029576, lng:-92.479599, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northern Valley Animal Clinic", cat:"vet", lat:44.058054, lng:-92.444633, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"River Road Dog Park", cat:"parque", lat:44.089157, lng:-92.476879, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rochester-wisconsin": {nombre:"Rochester", centro:[42.741299, -88.225893], tz:"America/Chicago", lugares:[
  {n:"Creature Comfort Veterinary Service", cat:"vet", lat:42.71092, lng:-88.244196, dir:"2548 South Teut Road", tel:"+1-262-534-9392", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jean Jacobson Dog Park", cat:"parque", lat:42.736576, lng:-88.223558, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fox Valley Veterinary Service", cat:"vet", lat:42.738784, lng:-88.217667, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rockdale": {nombre:"Rockdale", centro:[41.506142, -88.114504], tz:"America/Chicago", lugares:[
  {n:"Snip Society", cat:"vet", lat:41.530292, lng:-88.124186, dir:"2201 Glenwood Avenue", tel:"+1-815-630-4411", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "rockford-illinois": {nombre:"Rockford", centro:[42.271394, -89.093966], tz:"America/Chicago", lugares:[
  {n:"Noah's Ark Animal Sanctuary", cat:"refugio", lat:42.268572, lng:-89.088359, dir:"111 North 1st Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Corners Dog Park", cat:"parque", lat:42.301195, lng:-89.120888, dir:"4950 Safford Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Corners Off -Leash Dog Park", cat:"parque", lat:42.302581, lng:-89.119305, dir:"4950 Safford Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rockford-minnesota": {nombre:"Rockford", centro:[45.088296, -93.73441], tz:"America/Chicago", lugares:[
  {n:"Rockford Veterinary Clinic", cat:"vet", lat:45.087854, lng:-93.738352, dir:"Ash Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake Sarah Dog Off-leash Area", cat:"parque", lat:45.073968, lng:-93.713049, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rockton": {nombre:"Rockton", centro:[42.452516, -89.072332], tz:"America/Chicago", lugares:[
  {n:"Barkwood Park at Thunder Rock Praire", cat:"parque", lat:42.424602, lng:-89.073874, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rocky-ripple": {nombre:"Rocky Ripple", centro:[39.848097, -86.172488], tz:"America/New_York", lugares:[
  {n:"Good Dog Hotel & Spa", cat:"refugio", lat:39.850301, lng:-86.141177, dir:"5345 Winthrop Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Uptown Pup", cat:"peluqueria", lat:39.85159, lng:-86.125724, dir:"2112 East 54th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Backyard Birds", cat:"tienda", lat:39.851718, lng:-86.123252, dir:"2376 East 54th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PurrSnips", cat:"peluqueria", lat:39.850354, lng:-86.12008, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rocky-river": {nombre:"Rocky River", centro:[41.475603, -81.839303], tz:"America/New_York", lugares:[
  {n:"Hollywood Feed", cat:"tienda", lat:41.479777, lng:-81.839411, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lakewood Dog Park", cat:"parque", lat:41.477951, lng:-81.827123, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "roeland-park": {nombre:"Roeland Park", centro:[39.035868, -94.638918], tz:"America/Chicago", lugares:[
  {n:"Roeland Park Veterinary Center", cat:"vet", lat:39.035303, lng:-94.640265, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rogers-city": {nombre:"Rogers City", centro:[45.421391, -83.818185], tz:"America/New_York", lugares:[
  {n:"AMYzing Pet Salon", cat:"peluqueria", lat:45.418971, lng:-83.814836, dir:"144 South Third Street", tel:"+1-989-734-9072", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "rogers-minnesota": {nombre:"Rogers", centro:[45.18886, -93.552456], tz:"America/Chicago", lugares:[
  {n:"Success Dog Training", cat:"refugio", lat:45.149545, lng:-93.533285, dir:"19508 Country Circle East", tel:"+1-763-493-0709", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Seasons Canine Country Club", cat:"refugio", lat:45.150845, lng:-93.582031, dir:"10800 Trail Haven Road", tel:"+1-763-420-1002", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Bubbles 2 Biscuits", cat:"tienda", lat:45.197911, lng:-93.557557, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rolla-missouri": {nombre:"Rolla", centro:[37.950932, -91.770808], tz:"America/Chicago", lugares:[
  {n:"Carol House Quick Fix", cat:"vet", lat:37.897918, lng:-91.784942, dir:"13651 S US Highway 63", tel:"+1-573-465-3099", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:37.94691, lng:-91.793809, dir:"1501 Westside Drive", tel:"+1 573-467-4023", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "rome-illinois": {nombre:"Rome", centro:[40.879231, -89.504487], tz:"America/Chicago", lugares:[
  {n:"Walnut Dog Park", cat:"parque", lat:40.862517, lng:-89.519948, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "romeo-michigan": {nombre:"Romeo", centro:[42.802808, -83.012987], tz:"America/New_York", lugares:[
  {n:"Best Fur Breeds Pet Grooming", cat:"peluqueria", lat:42.788534, lng:-83.012923, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wilson's Veterinary Hospital", cat:"vet", lat:42.793524, lng:-83.015329, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "romeoville": {nombre:"Romeoville", centro:[41.647531, -88.089506], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.611246, lng:-88.120975, dir:"369 South Weber Road", tel:"+1 815-838-2368", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of Romeoville", cat:"vet", lat:41.639624, lng:-88.08263, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "roosevelt-park": {nombre:"Roosevelt Park", centro:[43.196404, -86.272281], tz:"America/New_York", lugares:[
  {n:"Faith Animal Care", cat:"vet", lat:43.191057, lng:-86.264967, dir:"854 West Norton Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Glenside Animal Hospital", cat:"vet", lat:43.205859, lng:-86.282035, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pay It Forward Outreach", cat:"vet", lat:43.205228, lng:-86.289276, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rootstown": {nombre:"Rootstown", centro:[41.099079, -81.24249], tz:"America/New_York", lugares:[
  {n:"Rootstown Veterinary Hospital", cat:"vet", lat:41.110737, lng:-81.240099, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "roscoe": {nombre:"Roscoe", centro:[42.41335, -89.009274], tz:"America/Chicago", lugares:[
  {n:"Myers", cat:"peluqueria", lat:42.42014, lng:-89.00929, dir:"Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Center", cat:"tienda", lat:42.428988, lng:-89.009136, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"LOL Pet", cat:"peluqueria", lat:42.42894, lng:-89.008577, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Roscoe Veterinary Clinic", cat:"vet", lat:42.412639, lng:-89.011563, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "roseau": {nombre:"Roseau", centro:[48.8458, -95.761323], tz:"America/Chicago", lugares:[
  {n:"Roseau County Veterinary Clinic", cat:"vet", lat:48.847352, lng:-95.762468, dir:"200 Main Avenue North", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Pantry and Supply", cat:"tienda", lat:48.846876, lng:-95.762551, dir:"112 Main Avenue North", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "roseland-indiana": {nombre:"Roseland", centro:[41.716159, -86.252507], tz:"America/New_York", lugares:[
  {n:"Roseland Animal Hospital", cat:"vet", lat:41.727155, lng:-86.249777, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rosemont": {nombre:"Rosemont", centro:[41.994133, -87.875674], tz:"America/Chicago", lugares:[
  {n:"Animal Relief Area", cat:"tienda", lat:41.97559, lng:-87.903492, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Service Animal Relief Area", cat:"parque", lat:41.993556, lng:-87.882394, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rosemount": {nombre:"Rosemount", centro:[44.739187, -93.12611], tz:"America/Chicago", lugares:[
  {n:"Chuck and Don's", cat:"tienda", lat:44.73097, lng:-93.143572, dir:"3852 150th Street West", tel:"+1 651-423-3774", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shamrock Animal Hospital", cat:"vet", lat:44.740291, lng:-93.125598, dir:"14390 Robert Trail South", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rosemount-ohio": {nombre:"Rosemount", centro:[38.784125, -82.982096], tz:"America/New_York", lugares:[
  {n:"Shawnee Animal Clinic", cat:"vet", lat:38.802134, lng:-82.983463, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ohio County Dog Warden", cat:"refugio", lat:38.804871, lng:-82.988256, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "roseville-minnesota": {nombre:"Roseville", centro:[45.006077, -93.156611], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:45.016369, lng:-93.175903, dir:"2480 Fairview Avenue North", tel:"+1 651-639-3912", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's", cat:"tienda", lat:45.024271, lng:-93.170024, dir:"1661 West County Road C", tel:"+1 651-287-0986", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Dig It Dog Grooming", cat:"peluqueria", lat:44.994335, lng:-93.145682, dir:"1748 Lexington Avenue North", tel:"+1-651-775-9856", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Wildlife Rehabilitation Center of Minnesota", cat:"refugio", lat:45.016644, lng:-93.125495, dir:"2530 Dale Street North", tel:"+1 651 4869453", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:44.991665, lng:-93.148095, dir:"1136 Larpenteur Avenue West", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Como Park Animal Hospital", cat:"vet", lat:44.992093, lng:-93.127107, dir:"621 Larpenteur Avenue West", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:44.992605, lng:-93.148917, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodview Off-Leash Dog Park", cat:"parque", lat:44.992206, lng:-93.120319, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:45.018425, lng:-93.17855, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rosholt-wisconsin": {nombre:"Rosholt", centro:[44.628567, -89.308843], tz:"America/Chicago", lugares:[
  {n:"Puppy Cuts Dog Grooming", cat:"peluqueria", lat:44.627505, lng:-89.297489, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ross-indiana": {nombre:"Ross", centro:[41.526703, -87.37476], tz:"America/Chicago", lugares:[
  {n:"All Pet Supplies", cat:"tienda", lat:41.54622, lng:-87.336631, dir:"3982 Broadway", tel:"+1 219-885-9670", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rossford": {nombre:"Rossford", centro:[41.609773, -83.564378], tz:"America/New_York", lugares:[
  {n:"Glass City Dog Park", cat:"parque", lat:41.615169, lng:-83.590763, dir:"1171 Woodsdale", tel:"+1-567-307-0703", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Toledo Zoo", cat:"zoo", lat:41.622717, lng:-83.577279, tel:"+1-419-385-5721", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rothschild": {nombre:"Rothschild", centro:[44.887191, -89.620122], tz:"America/Chicago", lugares:[
  {n:"Bark Park", cat:"parque", lat:44.843595, lng:-89.595905, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "round-lake": {nombre:"Round Lake", centro:[42.353355, -88.093414], tz:"America/Chicago", lugares:[
  {n:"Round Lake Animal Hospital", cat:"vet", lat:42.362422, lng:-88.110341, dir:"24431 Long Lake Rd", tel:"+1-847-546-6700", horas:[8.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Companion Round Lake", cat:"vet", lat:42.355776, lng:-88.139063, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Spa", cat:"peluqueria", lat:42.355848, lng:-88.139063, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "round-lake-beach": {nombre:"Round Lake Beach", centro:[42.371688, -88.090081], tz:"America/Chicago", lugares:[
  {n:"Petland", cat:"tienda", lat:42.379288, lng:-88.061493, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "round-lake-park": {nombre:"Round Lake Park", centro:[42.356966, -88.076746], tz:"America/Chicago", lugares:[
  {n:"Shorewood Acres", cat:"refugio", lat:42.373237, lng:-88.055521, dir:"21650 W Shorewood Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "royal-oak": {nombre:"Royal Oak", centro:[42.48948, -83.144649], tz:"America/New_York", lugares:[
  {n:"Royal Tropical Fish and Bird Haven", cat:"tienda", lat:42.491037, lng:-83.159601, dir:"1324 Hartrick Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Main Animal Hospital", cat:"vet", lat:42.502803, lng:-83.145172, dir:"1611 North Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blue Cross Animal Hospital", cat:"vet", lat:42.490112, lng:-83.126287, dir:"1514 East 11 Mile Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rugby": {nombre:"Rugby", centro:[48.368888, -99.996246], tz:"America/Chicago", lugares:[
  {n:"Rugby Veterinary Services", cat:"vet", lat:48.372682, lng:-99.978943, dir:"107 Industrial Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sagamore-hills": {nombre:"Sagamore Hills", centro:[41.336506, -81.561779], tz:"America/New_York", lugares:[
  {n:"Sagamore Hills Animal Hospital", cat:"vet", lat:41.338849, lng:-81.571869, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saginaw": {nombre:"Saginaw", centro:[43.420039, -83.949037], tz:"America/New_York", lugares:[
  {n:"Children's Zoo at Celebration Square", cat:"zoo", lat:43.411308, lng:-83.952337, dir:"1730 South Washington Avenue", tel:"+1-989-759-1408", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Immerman Dog Park", cat:"parque", lat:43.459143, lng:-84.07858, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-anthony-minnesota": {nombre:"Saint Anthony", centro:[45.0283, -93.218737], tz:"America/Chicago", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:45.035286, lng:-93.19342, dir:"2216 County Road D West", tel:"+1-651-273-0880", horas:[7.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Central Animal Hospital", cat:"vet", lat:45.017133, lng:-93.247795, dir:"2700 Northeast Central Avenue", tel:"+1 612 781 6941", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Apache Animal Hospital", cat:"vet", lat:45.035982, lng:-93.224601, dir:"2503 37th Avenue Northeast", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tails Of Persia Pet Spa", cat:"vet", lat:45.035888, lng:-93.225095, dir:"2501 37th Avenue Northeast", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-bernard": {nombre:"Saint Bernard", centro:[39.167001, -84.498557], tz:"America/New_York", lugares:[
  {n:"Petey's Pet Shop", cat:"tienda", lat:39.142424, lng:-84.520036, dir:"311 Howell Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Howell Avenue Pet Hospital", cat:"vet", lat:39.142449, lng:-84.520269, dir:"317 Howell Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Growing Trade Pet and Plant", cat:"tienda", lat:39.15623, lng:-84.540677, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cincinnati Animal CARE Dane Campus - Hamilton County Animal Shelter", cat:"refugio", lat:39.163524, lng:-84.532199, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cincinnati Animal CARE Colerain Campus - Hamilton County Animal Shelter", cat:"refugio", lat:39.158433, lng:-84.545395, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cincinnati Zoo and Botanical Garden", cat:"zoo", lat:39.144431, lng:-84.508678, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-bonifacius": {nombre:"Saint Bonifacius", centro:[44.905518, -93.747464], tz:"America/Chicago", lugares:[
  {n:"St Boni Pet Hospital", cat:"vet", lat:44.897341, lng:-93.748039, dir:"8801 Partridge Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-charles-missouri": {nombre:"Saint Charles", centro:[38.783855, -90.481677], tz:"America/Chicago", lugares:[
  {n:"Elm Point Animal Hospital", cat:"vet", lat:38.817529, lng:-90.51503, dir:"3250 Elm Point Industrial Drive", tel:"+1 636 757 7350", horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.784407, lng:-90.535246, dir:"2109 Zumbehl Road", tel:"+1 636-724-6338", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"St. Charles Animal Hospital", cat:"vet", lat:38.791522, lng:-90.484446, dir:"980 Kingshighway", tel:"+1-636-723-2400", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.782783, lng:-90.523594, dir:"2861 Veterans Memorial Parkway", tel:"+1 636-925-1717", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "saint-clair-shores": {nombre:"Saint Clair Shores", centro:[42.496965, -82.889096], tz:"America/New_York", lugares:[
  {n:"Nucci Veterinary", cat:"vet", lat:42.527635, lng:-82.893603, dir:"31521 Harper Avenue", tel:"+1-586-293-3922", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.522903, lng:-82.910509, dir:"20530 East Thirteen Mile Road", tel:"+1 586-294-8292", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "saint-cloud-minnesota": {nombre:"Saint Cloud", centro:[45.561608, -94.1642], tz:"America/Chicago", lugares:[
  {n:"Tri-County Humane Society", cat:"refugio", lat:45.576983, lng:-94.150455, dir:"735 8th Street Northeast", tel:"+1-320-252-0896", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "saint-francis-wisconsin": {nombre:"Saint Francis", centro:[42.974408, -87.870931], tz:"America/Chicago", lugares:[
  {n:"St. Francis Animal Hospital", cat:"vet", lat:42.974247, lng:-87.909231, dir:"3860 South Howell Avenue", tel:"+1-414-744-2240", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Community Bark", cat:"peluqueria", lat:43.000545, lng:-87.902057, dir:"2440 South Kinnickinnic Avenue", tel:"+1-414-744-2275", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Bentley's Pet Stuff", cat:"tienda", lat:42.988276, lng:-87.877189, dir:"2532 East Oklahoma Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bay View Dog Park", cat:"parque", lat:43.003636, lng:-87.896563, horas:[5.0, 22.0], nota:"Dato de OpenStreetMap"}
 ]},
 "saint-helen": {nombre:"Saint Helen", centro:[44.36363, -84.410291], tz:"America/New_York", lugares:[
  {n:"Ogemaw Nature Park", cat:"zoo", lat:44.410446, lng:-84.354462, dir:"5626 West Rose City Road", tel:"+1-989-312-3468", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-ignace": {nombre:"Saint Ignace", centro:[45.868668, -84.727815], tz:"America/Chicago", lugares:[
  {n:"Mutts of Mackinac", cat:"peluqueria", lat:45.869123, lng:-84.729513, dir:"408 North State Street", tel:"+1-906-298-0004", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mackinac County Animal Shelter", cat:"refugio", lat:45.876459, lng:-84.734647, dir:"980 Cheeseman Road", tel:"+1-906-643-7646", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Deer Ranch", cat:"zoo", lat:45.87178, lng:-84.803699, dir:"1540 US-2 West", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-james-missouri": {nombre:"Saint James", centro:[37.997063, -91.613995], tz:"America/Chicago", lugares:[
  {n:"SJ Nature Shop", cat:"tienda", lat:37.997805, lng:-91.615091, dir:"111 North Jefferson Street", tel:"+1 573-261-3777", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Curler’s Country Feeds", cat:"tienda", lat:37.991803, lng:-91.650475, dir:"12550 County Road 2210", tel:"+1 573-265-0507", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Bouse Mercantile LLC", cat:"tienda", lat:37.996829, lng:-91.615304, dir:"125 West Washington Street", tel:"+1 573-265-0440", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "saint-joseph-michigan": {nombre:"Saint Joseph", centro:[42.109581, -86.479954], tz:"America/New_York", lugares:[
  {n:"St. Joseph Dog Park", cat:"parque", lat:42.102693, lng:-86.478372, dir:"1350 Pearl Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-joseph-minnesota": {nombre:"Saint Joseph", centro:[45.564523, -94.318052], tz:"America/Chicago", lugares:[
  {n:"St. Joseph Vet Clinic", cat:"vet", lat:45.564922, lng:-94.294034, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-joseph-missouri": {nombre:"Saint Joseph", centro:[39.768605, -94.846632], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:39.813387, lng:-94.811939, dir:"5201 North Belt Highway", tel:"+1 816-233-3082", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.808401, lng:-94.81681, dir:"4226 North Belt Highway", tel:"+1 816-385-5438", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"UPCO Pet Supplies", cat:"tienda", lat:39.734435, lng:-94.802642, dir:"3705 Pear Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Honey Combs Groomery", cat:"peluqueria", lat:39.738665, lng:-94.800665, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Corby Dog Park", cat:"parque", lat:39.785621, lng:-94.831051, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Puppy Love Dog Salon", cat:"peluqueria", lat:39.763835, lng:-94.797058, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Paw Spa", cat:"peluqueria", lat:39.788967, lng:-94.805942, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Green Hills Animal Hospital", cat:"vet", lat:39.797184, lng:-94.812879, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Corby Dog Park - Small Dog Area", cat:"parque", lat:39.785338, lng:-94.831875, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-louis-missouri": {nombre:"Saint Louis", centro:[38.625406, -90.190009], tz:"America/Chicago", lugares:[
  {n:"Murphy's Mutts", cat:"tienda", lat:38.59326, lng:-90.224477, dir:"2307 Cherokee Street", tel:"+1-314-771-3338", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"4 Muddy Paws", cat:"tienda", lat:38.616816, lng:-90.21049, dir:"1711 Park Avenue", tel:"+13147737297", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"St. Louis Veterinary Center", cat:"vet", lat:38.618641, lng:-90.239566, dir:"1611 South Grand Boulevard", tel:"+1-314-773-6400", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"CARE STL Adoption Center", cat:"refugio", lat:38.629717, lng:-90.217657, dir:"2700 Walnut Place", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stray Rescue of St Louis", cat:"refugio", lat:38.632028, lng:-90.213614, dir:"2320 Pine Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lucas Gardens Dog Park", cat:"parque", lat:38.631562, lng:-90.199195, dir:"Saint Charles Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carol House Quick Fix Pet Clinic", cat:"vet", lat:38.619556, lng:-90.219248, dir:"1218 South Jefferson Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Good Dog Enrichment & Training", cat:"refugio", lat:38.599747, lng:-90.246785, dir:"4001 Wyoming Street", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Laclede's Landing Dog Park", cat:"parque", lat:38.63143, lng:-90.183689, dir:"Laclede's Landing Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Flying Fur Grooming Salon", cat:"peluqueria", lat:38.608772, lng:-90.22944, dir:"2249 Nebraska Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tenth Life Cats", cat:"refugio", lat:38.594587, lng:-90.237088, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets in the City", cat:"tienda", lat:38.614601, lng:-90.240122, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jefferson Animal Hospital", cat:"vet", lat:38.610399, lng:-90.221602, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shaw Neighborhood Dog Park", cat:"parque", lat:38.611756, lng:-90.251559, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Soulard Dog Park", cat:"parque", lat:38.610139, lng:-90.205283, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Water Tower Dog Park", cat:"parque", lat:38.615335, lng:-90.235268, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fox Park Dog Park", cat:"parque", lat:38.60752, lng:-90.225939, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Renaissance Place Dog Park", cat:"parque", lat:38.641804, lng:-90.228549, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-louis-park": {nombre:"Saint Louis Park", centro:[44.947573, -93.356902], tz:"America/Chicago", lugares:[
  {n:"Shampooch", cat:"peluqueria", lat:44.949752, lng:-93.383351, dir:"8140 Minnetonka Boulevard", tel:"+16124522742", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:44.963929, lng:-93.350719, dir:"5640 Cedar Lake Road", tel:"+1 952-797-9798", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"All Paws Animal Hospital", cat:"vet", lat:44.930589, lng:-93.346953, dir:"5225, 5301 Excelsior Boulevard", tel:"+19528480913", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's", cat:"tienda", lat:44.948968, lng:-93.321601, dir:"3246 Lake Street West", tel:"+1-612-926-8161", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Bubbly Paws", cat:"peluqueria", lat:44.934229, lng:-93.340827, dir:"3730 Grand Way", tel:"+1-952-657-5300", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pampered Pooch Playground", cat:"tienda", lat:44.93923, lng:-93.366837, dir:"7020 Walker Street", tel:"+19529228183", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Cat Clinic & Condos", cat:"vet", lat:44.948238, lng:-93.340796, dir:"4813 Minnetonka Boulevard", tel:"+19529250035", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Underdog Rescue MN", cat:"tienda", lat:44.94307, lng:-93.36007, dir:"3345 Dakota Avenue South", tel:"+19529290777", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lulu & Luigi", cat:"peluqueria", lat:44.936152, lng:-93.333891, dir:"3699 Joppa Avenue South", tel:"+19529291200", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Premier Aquarium Service", cat:"tienda", lat:44.928815, lng:-93.353417, dir:"5801 Excelsior Boulevard", tel:"+16122431335", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westgate Pet Clinic", cat:"vet", lat:44.923214, lng:-93.328849, dir:"4345 France Avenue South", tel:"+1-612-925-1121", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Canine Coach - St Louis Park", cat:"peluqueria", lat:44.941294, lng:-93.361375, dir:"6500 Lake Street West", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petropawlis", cat:"tienda", lat:44.941376, lng:-93.36126, dir:"6500 Lake Street West", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Paws Pet Club - Dog Daycare, Boarding, Training & Grooming", cat:"refugio", lat:44.947175, lng:-93.321762, dir:"3054 Excelsior Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake of the Isles Off-Leash Dog Park", cat:"parque", lat:44.951091, lng:-93.309272, dir:"2845 West Lake of the Isles Parkway", horas:[6.0, 24.0], nota:"Dato de OpenStreetMap"},
  {n:"Lyndale Farmstead Off-Leash Dog Park", cat:"parque", lat:44.932477, lng:-93.292792, dir:"3845 King's Highway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oak Knoll Animal Hospital", cat:"refugio", lat:44.949356, lng:-93.360064, dir:"6317 Minnetonka Boulevard", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Copilot Dog Outfitters", cat:"tienda", lat:44.924848, lng:-93.314796, horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dakota Dog Park", cat:"parque", lat:44.955765, lng:-93.358412, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-marys-ohio": {nombre:"Saint Marys", centro:[40.54227, -84.389396], tz:"America/New_York", lugares:[
  {n:"dogs-R-us Styling Boutique", cat:"peluqueria", lat:40.538836, lng:-84.392113, dir:"510 Clinton Street", tel:"+1-419-300-3647", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K9to5 Doggy Daycare LLC", cat:"refugio", lat:40.553341, lng:-84.405913, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-michael": {nombre:"Saint Michael", centro:[45.210202, -93.664808], tz:"America/Chicago", lugares:[
  {n:"Crow Hassan Dog Park", cat:"parque", lat:45.207327, lng:-93.621497, dir:"27100 Territorial Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crow Hassan Dog Park", cat:"parque", lat:45.206918, lng:-93.618259, dir:"27100 Territorial Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-paul-minnesota": {nombre:"Saint Paul", centro:[44.949749, -93.093103], tz:"America/Chicago", lugares:[
  {n:"Chuck & Don's", cat:"tienda", lat:44.950345, lng:-93.086677, dir:"282 East 6th Street", tel:"+1-612-230-0279", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Days", cat:"refugio", lat:44.95736, lng:-93.089124, dir:"350 University Avenue E", tel:"+1 651-291-2667", horas:[7.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Cat Amewsement", cat:"tienda", lat:44.948162, lng:-93.087458, dir:"102 North Sibley Street", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Arcade Animal Hospital", cat:"vet", lat:44.975889, lng:-93.065777, dir:"1144 Arcade Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cocobear Pet Care", cat:"tienda", lat:44.950894, lng:-93.090248, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kellogg Mall Dog Park", cat:"parque", lat:44.945346, lng:-93.089275, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pomeroy's Animal Hospital", cat:"vet", lat:44.95091, lng:-93.091126, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"High Bridge Dog Park", cat:"parque", lat:44.936232, lng:-93.105638, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Betta World", cat:"tienda", lat:44.972839, lng:-93.066166, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saint-peter": {nombre:"Saint Peter", centro:[44.323838, -93.958529], tz:"America/Chicago", lugares:[
  {n:"Vet Rx Pharmacy", cat:"vet", lat:44.353888, lng:-93.971727, dir:"2008 North Sunrise Drive", tel:"+1-877-931-8707", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "saint-peters": {nombre:"Saint Peters", centro:[38.791612, -90.595847], tz:"America/Chicago", lugares:[
  {n:"Auto Spa Dog Wash", cat:"peluqueria", lat:38.774414, lng:-90.624373, dir:"3008 Mid Rivers Mall Drive", tel:"+1 866-678-9274", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Kennelwood Pet Hotel", cat:"peluqueria", lat:38.789412, lng:-90.629283, dir:"418 South Church Street", tel:"+1 314-429-2100", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Treats Unleashed", cat:"tienda", lat:38.794123, lng:-90.621635, dir:"306 Mid Rivers Center", tel:"+1 636-970-7730", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Pals Animal Hospital", cat:"vet", lat:38.789369, lng:-90.639254, dir:"7464 Mexico Road", tel:"+1 636-278-7257", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "saint-robert": {nombre:"Saint Robert", centro:[37.814074, -92.137508], tz:"America/Chicago", lugares:[
  {n:"Petsense", cat:"tienda", lat:37.816206, lng:-92.140017, dir:"332 Marshall Drive", tel:"+1-573-336-4381", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "salem-missouri": {nombre:"Salem", centro:[37.645599, -91.535981], tz:"America/Chicago", lugares:[
  {n:"Dent County Animal Shelter", cat:"refugio", lat:37.630988, lng:-91.516435, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "salem-south-dakota": {nombre:"Salem", centro:[43.724146, -97.388953], tz:"America/Chicago", lugares:[
  {n:"Salem Veterinary Service", cat:"vet", lat:43.717486, lng:-97.388309, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "salem-township": {nombre:"Salem Township", centro:[42.389408, -83.606188], tz:"America/New_York", lugares:[
  {n:"Remrock Farms Veterinary Services", cat:"vet", lat:42.367679, lng:-83.633192, dir:"6565 N Territorial Rd", tel:"+1-734-665-0731", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Salem Veterinary Services", cat:"vet", lat:42.406375, lng:-83.578093, dir:"9629 Six Mile Road", tel:"+12483485075", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "salina-kansas": {nombre:"Salina", centro:[38.84028, -97.611424], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:38.795238, lng:-97.615459, dir:"2450 South 9th Street", tel:"+1 785-493-0958", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "saline-michigan": {nombre:"Saline", centro:[42.166745, -83.781532], tz:"America/New_York", lugares:[
  {n:"Pets 'n' Things", cat:"tienda", lat:42.172918, lng:-83.771328, dir:"541 East Michigan Avenue", tel:"+1-734-429-5431", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Wags To Wiskers Pet Supplies", cat:"tienda", lat:42.17852, lng:-83.758196, dir:"1363 East Michigan Avenue", tel:"+17349444800", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mill Pond Dog Park", cat:"parque", lat:42.167525, lng:-83.79402, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sand-lake": {nombre:"Sand Lake", centro:[43.29238, -85.518073], tz:"America/New_York", lugares:[
  {n:"Sand Lake Veterinary Services", cat:"vet", lat:43.292201, lng:-85.516808, dir:"11 East Lake Street", tel:"+1-616-636-4100", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sandusky-ohio": {nombre:"Sandusky", centro:[41.4561, -82.711581], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:41.402924, lng:-82.662329, dir:"788 Crossings Road", tel:"+1 419-624-0173", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"K&K Grooming", cat:"peluqueria", lat:41.457265, lng:-82.708948, dir:"273 East Market Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Erie County Dog Warden", cat:"refugio", lat:41.42695, lng:-82.692494, dir:"2900 Columbus Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Wash", cat:"peluqueria", lat:41.416397, lng:-82.673435, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:41.414256, lng:-82.669643, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.422049, lng:-82.677144, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Chek", cat:"refugio", lat:41.477182, lng:-82.681011, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sandwich": {nombre:"Sandwich", centro:[41.645863, -88.621743], tz:"America/Chicago", lugares:[
  {n:"Sandwich Veterinary", cat:"vet", lat:41.646392, lng:-88.603358, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sanford-michigan": {nombre:"Sanford", centro:[43.672805, -84.380554], tz:"America/New_York", lugares:[
  {n:"TNT Dog Center", cat:"refugio", lat:43.655914, lng:-84.316087, dir:"7402 West Wackerly Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Side Dog Park", cat:"parque", lat:43.704905, lng:-84.395577, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sappington": {nombre:"Sappington", centro:[38.53026, -90.37098], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:38.526376, lng:-90.359619, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saugatuck-michigan": {nombre:"Saugatuck", centro:[42.654924, -86.204055], tz:"America/New_York", lugares:[
  {n:"Tails n' Trails Dog Park", cat:"parque", lat:42.666294, lng:-86.170638, dir:"6359 134th Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saukville": {nombre:"Saukville", centro:[43.381128, -87.940472], tz:"America/Chicago", lugares:[
  {n:"VCA Saukville Animal Hospital", cat:"vet", lat:43.382103, lng:-87.945871, dir:"303 West Dekora Street", tel:"+1-262-284-7000", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sault-sainte-marie": {nombre:"Sault Sainte Marie", centro:[46.497673, -84.347658], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:46.477511, lng:-84.355607, dir:"2510 Ashmun Street", tel:"+1-906-253-9560", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chippewa Animal Clinic", cat:"vet", lat:46.462347, lng:-84.331717, dir:"1554 East 3 Mile Road", tel:"+1-906-635-5814", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "savage-minnesota": {nombre:"Savage", centro:[44.777904, -93.33562], tz:"America/Chicago", lugares:[
  {n:"Camp Bow Wow", cat:"refugio", lat:44.744312, lng:-93.326683, dir:"14305 Ewing Avenue South", tel:"+1-952-736-9919", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Hyland Pet Hospital", cat:"vet", lat:44.808195, lng:-93.351594, dir:"5400 West Old Shakopee Road", tel:"+1-952-884-1868", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital", cat:"vet", lat:44.746228, lng:-93.35835, dir:"Egan Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's Pet Food & Supplies", cat:"tienda", lat:44.747748, lng:-93.377888, dir:"14109 Highway 13 South", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Gentle Doctor Veterinary Clinic", cat:"vet", lat:44.747209, lng:-93.331901, dir:"4134 County Road 42", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:44.7491, lng:-93.382353, dir:"14020 Highway 13 South", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petcrossinh", cat:"vet", lat:44.807045, lng:-93.383379, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "savannah-missouri": {nombre:"Savannah", centro:[39.941368, -94.829946], tz:"America/Chicago", lugares:[
  {n:"Wagging Tails", cat:"peluqueria", lat:39.941345, lng:-94.83041, dir:"104 South 5th Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "savoy": {nombre:"Savoy", centro:[40.054753, -88.251717], tz:"America/Chicago", lugares:[
  {n:"Animal Hospital at the Crossing", cat:"vet", lat:40.080542, lng:-88.295502, dir:"3001 Village Office Place", tel:"+1-217-356-6387", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital at the Crossing Grooming", cat:"peluqueria", lat:40.080544, lng:-88.29578, dir:"3005 Village Office Place", tel:"+1-217-356-6387", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"TailWaggers Pet Chateau", cat:"refugio", lat:40.054274, lng:-88.250029, dir:"113 East Church Street", tel:"+1-217-359-4212", horas:[7.0, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Southside Veterinary Clinic", cat:"vet", lat:40.05422, lng:-88.250595, dir:"107 East Church Street", tel:"+1-217-359-5623", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Prairieland Feeds", cat:"tienda", lat:40.05191, lng:-88.252652, dir:"303 South Dunlap Avenue", tel:"+1-217-352-2232", horas:[8.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Georgia's K-9 Komforts", cat:"refugio", lat:40.071032, lng:-88.249495, dir:"1323 North Dunlap Avenue", tel:"+1-217-355-4770", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Sports Vet Animal Medical Center", cat:"vet", lat:40.068038, lng:-88.250041, dir:"1105 North Dunlap Avenue", tel:"+1-217-355-1442", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Loving Paws Pet Clinic", cat:"vet", lat:40.048609, lng:-88.252978, dir:"507 South Dunlap Avenue", tel:"+1-217-318-3030", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "sawyerwood": {nombre:"Sawyerwood", centro:[41.037357, -81.441684], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.032018, lng:-81.424931, dir:"2855 East Waterloo Road", tel:"+1-330-628-3304", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saylorville": {nombre:"Saylorville", centro:[41.6786, -93.629663], tz:"America/Chicago", lugares:[
  {n:"Wild Paws", cat:"peluqueria", lat:41.689474, lng:-93.60111, dir:"7050 Northeast 14th Street", tel:"+1-515-200-2733", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Ankeny Dog Park", cat:"parque", lat:41.696228, lng:-93.611882, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "scandia-minnesota": {nombre:"Scandia", centro:[45.253366, -92.806296], tz:"America/Chicago", lugares:[
  {n:"Veterinarian", cat:"vet", lat:45.253424, lng:-92.805723, dir:"14762 Oakhill Road North", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "scanlon": {nombre:"Scanlon", centro:[46.707266, -92.427267], tz:"America/Chicago", lugares:[
  {n:"Crow Goebel Veterinary Clinic", cat:"vet", lat:46.706556, lng:-92.425623, dir:"1108 Scanlon Way", tel:"+1-218-879-5356", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "schaumburg": {nombre:"Schaumburg", centro:[42.033361, -88.083406], tz:"America/Chicago", lugares:[
  {n:"Spring Valley Veterinary Clinic", cat:"vet", lat:42.025047, lng:-88.079431, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "schererville": {nombre:"Schererville", centro:[41.49223, -87.449901], tz:"America/Chicago", lugares:[
  {n:"Deer Run Animal Hospital", cat:"vet", lat:41.484416, lng:-87.444613, dir:"803 West Lincoln Highway", tel:"+12198647180", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Happiness Is Pets", cat:"tienda", lat:41.493245, lng:-87.467804, dir:"1525 Indianapolis Boulevard", tel:"+1-219-865-3078", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:41.511227, lng:-87.468908, dir:"711 Indianapolis Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.511235, lng:-87.469103, dir:"711 Indianapolis Boulevard", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "schiller-park": {nombre:"Schiller Park", centro:[41.955864, -87.870897], tz:"America/Chicago", lugares:[
  {n:"Shiller Park Bark Park", cat:"parque", lat:41.963461, lng:-87.870746, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "schoolcraft": {nombre:"Schoolcraft", centro:[42.114211, -85.637778], tz:"America/New_York", lugares:[
  {n:"Schoolcraft Veterinary Clinic", cat:"vet", lat:42.143745, lng:-85.645507, dir:"4872 West U Avenue", tel:"+1-269-679-5248", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "scio-township": {nombre:"Scio Township", centro:[42.297653, -83.840476], tz:"America/New_York", lugares:[
  {n:"Emergency Veterinary Hospital", cat:"vet", lat:42.286945, lng:-83.833973, dir:"5245 Jackson Road", tel:"+1-734-369-6446", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Huron Pet Supply", cat:"tienda", lat:42.287846, lng:-83.828405, dir:"5060 Jackson Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "scotsdale": {nombre:"Scotsdale", centro:[38.399107, -90.587316], tz:"America/Chicago", lugares:[
  {n:"Ivan Animal Hospital", cat:"vet", lat:38.413448, lng:-90.579639, dir:"30 Walters Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "scott-city": {nombre:"Scott City", centro:[38.482519, -100.907094], tz:"America/Chicago", lugares:[
  {n:"Scott City Dog Park", cat:"parque", lat:38.47473, lng:-100.907818, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mahler Dog Park", cat:"parque", lat:38.47473, lng:-100.907818, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "scott-city-missouri": {nombre:"Scott City", centro:[37.21635, -89.526124], tz:"America/Chicago", lugares:[
  {n:"Scott City Animal Clinic", cat:"vet", lat:37.215655, lng:-89.531313, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "scottsbluff": {nombre:"Scottsbluff", centro:[41.862302, -103.662709], tz:"America/Denver", lugares:[
  {n:"Heads to Tails Grooming Salon", cat:"peluqueria", lat:41.859013, lng:-103.674613, dir:"808 West Overland Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bluffs Animal Hospital", cat:"vet", lat:41.867294, lng:-103.638112, tel:"+1-308-562-2215", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "scottsburg": {nombre:"Scottsburg", centro:[38.685614, -85.770245], tz:"America/New_York", lugares:[
  {n:"St. Clair Veterinary Clinic", cat:"vet", lat:38.679636, lng:-85.779095, dir:"706 South Gardner Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sedalia": {nombre:"Sedalia", centro:[38.709831, -93.229551], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.716027, lng:-93.283929, dir:"4311 Wisconsin Avenue", tel:"+1 660-460-4168", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Clover Dell Dog Park", cat:"parque", lat:38.682778, lng:-93.292067, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "seelyville": {nombre:"Seelyville", centro:[39.491983, -87.26724], tz:"America/Chicago", lugares:[
  {n:"Airport Veterinary Clinic", cat:"vet", lat:39.458743, lng:-87.332262, dir:"1274 SR 46", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "sergeant-bluff": {nombre:"Sergeant Bluff", centro:[42.40392, -96.35898], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.447203, lng:-96.339465, dir:"5001 Sergeant Road", tel:"+1 712-266-0965", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Elk Creek Animal Hospital", cat:"vet", lat:42.463705, lng:-96.330357, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "seven-hills": {nombre:"Seven Hills", centro:[41.39533, -81.676239], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.35996, lng:-81.687685, dir:"1301 West Pleasant Valley Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Broadview Animal & Bird Hospital", cat:"vet", lat:41.360282, lng:-81.684109, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "seville": {nombre:"Seville", centro:[41.010077, -81.862222], tz:"America/New_York", lugares:[
  {n:"Seville Animal Hospital", cat:"vet", lat:41.024022, lng:-81.863581, dir:"175 Center Street", tel:"+1 330 769 3838", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "seward-nebraska": {nombre:"Seward", centro:[40.907004, -97.098918], tz:"America/Chicago", lugares:[
  {n:"Seward Community Dog Park", cat:"parque", lat:40.907467, lng:-97.0838, dir:"East Seward Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "seymour-indiana": {nombre:"Seymour", centro:[38.95922, -85.890255], tz:"America/New_York", lugares:[
  {n:"Jackson County Animal Clinic", cat:"vet", lat:38.964778, lng:-85.835163, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Crossroads Dog Park", cat:"parque", lat:38.965414, lng:-85.868589, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "seymour-wisconsin-2": {nombre:"Seymour", centro:[44.511608, -88.330191], tz:"America/Chicago", lugares:[
  {n:"Seymour Veterinary Hospital LLC", cat:"vet", lat:44.501139, lng:-88.321439, dir:"725 Woodland Plaza", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shabbona": {nombre:"Shabbona", centro:[41.767967, -88.874276], tz:"America/Chicago", lugares:[
  {n:"Muddy Paws Pet Spa & Boutique", cat:"peluqueria", lat:41.768177, lng:-88.874106, tel:"+1 815-501-6627", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shakopee": {nombre:"Shakopee", centro:[44.798019, -93.526899], tz:"America/Chicago", lugares:[
  {n:"Marschall Road Animal Hospital", cat:"vet", lat:44.780698, lng:-93.509936, dir:"1176 Vierling Drive East", tel:"+1-952-445-7956", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's", cat:"tienda", lat:44.779562, lng:-93.506781, dir:"1270 Vierling Drive East", tel:"+1-952-445-2487", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Main Street Veterinary Service", cat:"vet", lat:44.799272, lng:-93.519783, dir:"536 1st Avenue East", tel:"+1-952-445-5222", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggie Doo's Spa and Retreat", cat:"peluqueria", lat:44.783985, lng:-93.557002, dir:"2555 Vierling Drive West", tel:"+1-952-445-5262", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shalersville": {nombre:"Shalersville", centro:[41.238945, -81.231213], tz:"America/New_York", lugares:[
  {n:"Portage Animal Protective League", cat:"refugio", lat:41.211029, lng:-81.2561, dir:"8122 Infirmary Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sharonville": {nombre:"Sharonville", centro:[39.268115, -84.413278], tz:"America/New_York", lugares:[
  {n:"SPCA", cat:"refugio", lat:39.286144, lng:-84.359084, dir:"11900 Conrey Road", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Cat Care Veterinary Hospital", cat:"vet", lat:39.316018, lng:-84.373334, tel:"+1-513-779-3300", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shawnee-hills": {nombre:"Shawnee Hills", centro:[40.161692, -83.134929], tz:"America/New_York", lugares:[
  {n:"Columbus Zoo and Aquarium", cat:"zoo", lat:40.157345, lng:-83.116594, dir:"4850 West Powell Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Shawnee Hills", cat:"vet", lat:40.161205, lng:-83.134718, dir:"9540 Dublin Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shawnee-kansas": {nombre:"Shawnee", centro:[39.022971, -94.714541], tz:"America/Chicago", lugares:[
  {n:"Wild Birds Unlimited", cat:"tienda", lat:39.015911, lng:-94.739754, dir:"13222 West 62nd Terrace", tel:"+1 913-962-0077", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mill Creek Animal Clinic", cat:"vet", lat:39.016099, lng:-94.742076, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sheffield-ohio": {nombre:"Sheffield", centro:[41.421155, -82.096259], tz:"America/New_York", lugares:[
  {n:"Bevan's Pet Center", cat:"tienda", lat:41.419294, lng:-82.132782, dir:"1921 N Ridge Rd E", tel:"+1-440-277-9872", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.400273, lng:-82.105968, dir:"263 Midway Boulevard", tel:"+1 440-324-4665", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "shelby-charter-township": {nombre:"Shelby Charter Township", centro:[42.669641, -83.033801], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:42.712229, lng:-83.038899, dir:"7554 26 Mile Road", tel:"+1 586-697-9039", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "shelby-wisconsin": {nombre:"Shelby", centro:[43.769135, -91.160967], tz:"America/Chicago", lugares:[
  {n:"Thompson Animal Medical Clinic", cat:"vet", lat:43.767735, lng:-91.212828, dir:"4540 Mormon Coulee Road", tel:"+1-608-788-8820", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shelbyville-indiana": {nombre:"Shelbyville", centro:[39.521437, -85.776924], tz:"America/New_York", lugares:[
  {n:"Paws and Shine", cat:"peluqueria", lat:39.52385, lng:-85.776765, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Premier Loving Care", cat:"peluqueria", lat:39.524688, lng:-85.775306, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sheldon-iowa": {nombre:"Sheldon", centro:[43.180134, -95.852519], tz:"America/Chicago", lugares:[
  {n:"Sheldon Veterinary Clinic", cat:"vet", lat:43.186575, lng:-95.835041, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog House etc.", cat:"tienda", lat:43.186714, lng:-95.818576, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shell-lake": {nombre:"Shell Lake", centro:[45.743103, -91.925268], tz:"America/Chicago", lugares:[
  {n:"Northern Lakes Veterinary", cat:"vet", lat:45.726454, lng:-91.932598, dir:"222 Industrial Boulevard", tel:"+1-715-822-3535", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sherman-illinois": {nombre:"Sherman", centro:[39.893661, -89.604823], tz:"America/Chicago", lugares:[
  {n:"Prairiehaven Animal Hospital", cat:"vet", lat:39.899183, lng:-89.60149, dir:"208 Village Center Road", tel:"+1-217-689-4960", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Health Center", cat:"vet", lat:39.895921, lng:-89.601236, dir:"2816 East Andrew Road", tel:"+1-217-496-2345", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sherwood-wisconsin": {nombre:"Sherwood", centro:[44.173698, -88.259762], tz:"America/Chicago", lugares:[
  {n:"Sherwood Animal Hospital", cat:"vet", lat:44.177908, lng:-88.266674, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shiloh-illinois": {nombre:"Shiloh", centro:[38.561438, -89.897323], tz:"America/Chicago", lugares:[
  {n:"Shiloh Dog Park", cat:"parque", lat:38.548813, lng:-89.914747, dir:"Lebanon Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shoreham": {nombre:"Shoreham", centro:[42.062568, -86.510231], tz:"America/New_York", lugares:[
  {n:"Martin's Paw Mart", cat:"tienda", lat:42.079142, lng:-86.494676, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shoreview": {nombre:"Shoreview", centro:[45.072206, -93.128288], tz:"America/Chicago", lugares:[
  {n:"Animal Hospital", cat:"vet", lat:45.080723, lng:-93.144538, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Evolution", cat:"tienda", lat:45.057056, lng:-93.148859, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shorewood": {nombre:"Shorewood", centro:[41.52003, -88.201729], tz:"America/Chicago", lugares:[
  {n:"Small Dog Park", cat:"parque", lat:41.534221, lng:-88.185639, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Main Dog Park", cat:"parque", lat:41.534966, lng:-88.184079, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shorewood-hills": {nombre:"Shorewood Hills", centro:[43.078095, -89.446324], tz:"America/Chicago", lugares:[
  {n:"Earthwise Pet Supply, Grooming, & Self Wash", cat:"peluqueria", lat:43.075827, lng:-89.443449, tel:"+1-608-284-9007", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Medicine South", cat:"vet", lat:43.07513, lng:-89.420272, dir:"2015 Linden Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lakeview Veterinary Clinic", cat:"vet", lat:43.052566, lng:-89.436104, dir:"3518 Monroe Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lakeview Veterinary Clinic Cat Annex", cat:"vet", lat:43.052727, lng:-89.435916, dir:"3506 Monroe Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nutzy Mutz & Crazy Catz", cat:"tienda", lat:43.054062, lng:-89.4508, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"MadCat Pet Supplies", cat:"tienda", lat:43.056613, lng:-89.429132, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital At Hillshore", cat:"vet", lat:43.074354, lng:-89.437821, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Precision Veterinary", cat:"vet", lat:43.052622, lng:-89.486271, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spring Harbor Animal Hospital", cat:"vet", lat:43.077078, lng:-89.470258, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Odana School Park Dog Park", cat:"parque", lat:43.051771, lng:-89.469379, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shorewood-minnesota": {nombre:"Shorewood", centro:[44.900796, -93.589124], tz:"America/Chicago", lugares:[
  {n:"Pet Clips", cat:"peluqueria", lat:44.890083, lng:-93.582146, dir:"2445 Minnesota State Highway 7", tel:"+1-952-470-7848", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fido's Pantry", cat:"tienda", lat:44.890211, lng:-93.582435, dir:"2473 Minnesota State Highway 7", tel:"+1-952-474-9383", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Lake Minnewashta Off-Leash Dog Area", cat:"parque", lat:44.88543, lng:-93.584337, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shorewood-wisconsin": {nombre:"Shorewood", centro:[43.088396, -87.88813], tz:"America/Chicago", lugares:[
  {n:"Central Bark", cat:"refugio", lat:43.088947, lng:-87.910548, dir:"3800 North 1st Street", tel:"+1 414-332-2270", horas:[7.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Shorewood Animal Hospital", cat:"vet", lat:43.089507, lng:-87.878582, dir:"2500 East Capitol Drive", tel:"+1-414-962-6662", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bayshore Veterinary Clinic", cat:"vet", lat:43.085617, lng:-87.887727, dir:"3723 North Oakland Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Skilos", cat:"peluqueria", lat:43.06066, lng:-87.884681, dir:"2330 North Farwell Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bentleys Petstuff", cat:"peluqueria", lat:43.093252, lng:-87.887717, dir:"4165 North Oakland Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Roverwest Dog Exercise Area", cat:"parque", lat:43.07763, lng:-87.899612, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Estabrook Dog Exercise Area", cat:"parque", lat:43.098805, lng:-87.905462, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shrewsbury-missouri": {nombre:"Shrewsbury", centro:[38.590097, -90.336625], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:38.583339, lng:-90.320586, dir:"7279 Watson Road", tel:"+1 314-352-1150", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "sidney-nebraska": {nombre:"Sidney", centro:[41.144868, -102.976738], tz:"America/Denver", lugares:[
  {n:"White Bluffs", cat:"vet", lat:41.115566, lng:-102.974588, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sidney-ohio": {nombre:"Sidney", centro:[40.284241, -84.155527], tz:"America/New_York", lugares:[
  {n:"Community Veterinary Clinic", cat:"vet", lat:40.302388, lng:-84.178439, dir:"1200 West Russell Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sikeston": {nombre:"Sikeston", centro:[36.876719, -89.587858], tz:"America/Chicago", lugares:[
  {n:"Sikeston PAWS", cat:"refugio", lat:36.875972, lng:-89.632469, dir:"1900 Compress Rd", tel:"+1-573-471-7387", horas:[12.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:36.895987, lng:-89.565685, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:36.895908, lng:-89.565449, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "silver-lake-indiana": {nombre:"Silver Lake", centro:[41.072266, -85.891657], tz:"America/New_York", lugares:[
  {n:"Sommers Veterinary Clinic", cat:"vet", lat:41.096206, lng:-85.893074, dir:"9347 State Road 15", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sioux-center": {nombre:"Sioux Center", centro:[43.079688, -96.17565], tz:"America/Chicago", lugares:[
  {n:"Avenue Veterinary Clinic", cat:"vet", lat:43.080708, lng:-96.176039, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sioux-city": {nombre:"Sioux City", centro:[42.496682, -96.405878], tz:"America/Chicago", lugares:[
  {n:"Perry Creek Animal Hospital", cat:"vet", lat:42.50998, lng:-96.420251, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sioux-falls": {nombre:"Sioux Falls", centro:[43.547601, -96.729363], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:43.516072, lng:-96.769509, dir:"3110 South Louise Avenue", tel:"+1 605-361-5095", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Best Care Pet Hospital", cat:"vet", lat:43.547078, lng:-96.712517, dir:"1102 East 10th Street", tel:"+1-605-334-2412", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Great Plains Zoo", cat:"zoo", lat:43.537336, lng:-96.764811, dir:"805 South Kiwanis Avenue", tel:"+1-605-367-7003", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All City Pet Care West", cat:"vet", lat:43.51458, lng:-96.800511, dir:"3400 South Holbrook Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heather Ridge Pet Hospital", cat:"vet", lat:43.490794, lng:-96.750123, dir:"5901 South Remington Place", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kirby Dog Park at Fort Sod", cat:"parque", lat:43.545727, lng:-96.724331, dir:"201 South 2nd Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spencer Dog Park", cat:"parque", lat:43.511208, lng:-96.714937, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sioux Falls Humane Society", cat:"refugio", lat:43.588165, lng:-96.679984, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "skokie": {nombre:"Skokie", centro:[42.026297, -87.752107], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:42.056671, lng:-87.744943, dir:"9645 Skokie Boulevard", tel:"+1 847-674-2192", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.01053, lng:-87.765591, dir:"5485 West Touhy Avenue", tel:"+1 847-674-4654", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal 911", cat:"vet", lat:42.040464, lng:-87.722038, dir:"Dempster Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Golly Gear", cat:"tienda", lat:42.025948, lng:-87.75345, dir:"7951 Babb Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Paws Grooming", cat:"peluqueria", lat:42.026146, lng:-87.751086, dir:"4925 Oakton Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chicago Exotics Animal Hospital", cat:"vet", lat:42.040434, lng:-87.722786, dir:"3757 Dempster Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:42.01043, lng:-87.76567, dir:"5485 West Touhy Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"vet", lat:42.032954, lng:-87.747007, dir:"8343 Skokie Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Skokie Animal Hospital", cat:"vet", lat:42.018265, lng:-87.748105, dir:"7550 Lincoln Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riser Animal Hospital", cat:"vet", lat:42.011619, lng:-87.760931, dir:"5335 West Touhy Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "slayton": {nombre:"Slayton", centro:[43.987742, -95.755846], tz:"America/Chicago", lugares:[
  {n:"Rural Legacy Veterinary Clinic", cat:"vet", lat:43.994136, lng:-95.753075, dir:"1909 Maple Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "slinger": {nombre:"Slinger", centro:[43.334324, -88.285096], tz:"America/Chicago", lugares:[
  {n:"Wholesale Pet Supplies", cat:"tienda", lat:43.329108, lng:-88.277584, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Friends of Nature Pet Foods & Supplies", cat:"tienda", lat:43.329538, lng:-88.277885, horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Central Bark Doggy Day Care", cat:"refugio", lat:43.323728, lng:-88.276917, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "smithville-missouri": {nombre:"Smithville", centro:[39.38684, -94.581594], tz:"America/Chicago", lugares:[
  {n:"Brisbane Veterinary Services", cat:"vet", lat:39.347558, lng:-94.582045, dir:"14105 Earthworks Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clay County Dog Park", cat:"parque", lat:39.40748, lng:-94.56393, dir:"17325 Old Jefferson Highway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Smithville Animal Hospital", cat:"vet", lat:39.362002, lng:-94.584401, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "solon": {nombre:"Solon", centro:[41.807234, -91.49406], tz:"America/Chicago", lugares:[
  {n:"Pet Health Center of Solon", cat:"vet", lat:41.797779, lng:-91.488123, dir:"200 Prairie Rose Lane", tel:"+1 319-624-2921", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Solon Vet Clinic", cat:"vet", lat:41.806599, lng:-91.494413, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "solon-ohio": {nombre:"Solon", centro:[41.389776, -81.441226], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.383909, lng:-81.435198, dir:"34370 Aurora Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "somers-wisconsin": {nombre:"Somers", centro:[42.640428, -87.914773], tz:"America/Chicago", lugares:[
  {n:"Feed & Seed Station", cat:"tienda", lat:42.60305, lng:-87.894454, dir:"7115 38th St", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carlisle Family Dog Park", cat:"parque", lat:42.645286, lng:-87.866336, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "somerset-wisconsin": {nombre:"Somerset", centro:[45.124894, -92.673043], tz:"America/Chicago", lugares:[
  {n:"Coco's Heart Dog Rescue", cat:"refugio", lat:45.115372, lng:-92.710239, dir:"449 County Road VV", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-barrington": {nombre:"South Barrington", centro:[42.093889, -88.134235], tz:"America/Chicago", lugares:[
  {n:"Pawparazzi Pet Salon", cat:"peluqueria", lat:42.05968, lng:-88.137038, dir:"2332 West Higgins Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Birds of prey", cat:"zoo", lat:42.115348, lng:-88.164241, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bo's Run Dog Park", cat:"parque", lat:42.088242, lng:-88.105795, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-bend": {nombre:"South Bend", centro:[41.683381, -86.250007], tz:"America/New_York", lugares:[
  {n:"Potawatomi Zoo", cat:"zoo", lat:41.670235, lng:-86.218355, dir:"500 South Greenlawn Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Zoo Hospital", cat:"vet", lat:41.670171, lng:-86.220532, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Bend Animal Clinic", cat:"vet", lat:41.691413, lng:-86.29511, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-bend-nebraska": {nombre:"South Bend", centro:[41.001665, -96.245291], tz:"America/Chicago", lugares:[
  {n:"Lee G. Simmons Conservation Park & Wildlife Safari", cat:"zoo", lat:41.013138, lng:-96.295257, dir:"16406 North 292nd Street", tel:"+1-402-944-9453", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "south-bloomfield": {nombre:"South Bloomfield", centro:[39.718396, -82.986849], tz:"America/New_York", lugares:[
  {n:"Bark Park", cat:"parque", lat:39.715531, lng:-82.99089, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-elgin": {nombre:"South Elgin", centro:[41.994194, -88.2923], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.986169, lng:-88.343451, dir:"364 Randall Road", tel:"+1 847-717-0201", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.984192, lng:-88.343977, dir:"428 Randall Road", tel:"+1 847-488-1732", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Cleveland Veterinary Clinic", cat:"vet", lat:41.997865, lng:-88.31764, dir:"400 McLean Boulevard", tel:"+18476974066", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Ivar & Ruth Anderson Humane Shelter", cat:"refugio", lat:41.982985, lng:-88.298244, dir:"1000 South La Fox Street", horas:[12.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet", cat:"vet", lat:42.002489, lng:-88.336825, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Elgin Dog Park", cat:"parque", lat:41.990855, lng:-88.29515, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-euclid": {nombre:"South Euclid", centro:[41.523108, -81.518455], tz:"America/New_York", lugares:[
  {n:"Belvoir Pet Hospital", cat:"vet", lat:41.520993, lng:-81.528261, dir:"4217 Mayfield Road", tel:"+1-216-354-0390", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heights Canine", cat:"refugio", lat:41.519298, lng:-81.536129, dir:"1495 Warrensville Center Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-haven-michigan": {nombre:"South Haven", centro:[42.403087, -86.273641], tz:"America/New_York", lugares:[
  {n:"Decadent Dogs", cat:"tienda", lat:42.403427, lng:-86.272986, dir:"523 Phoenix Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-hutchinson": {nombre:"South Hutchinson", centro:[38.028067, -97.94033], tz:"America/Chicago", lugares:[
  {n:"Hutchinson Zoo", cat:"zoo", lat:38.029757, lng:-97.916569, dir:"6 Emerson Loop E", tel:"+1 620 694 2672", horas:[10.0, 16.75], nota:"Dato de OpenStreetMap"},
  {n:"Hutchinson Animal Shelter", cat:"refugio", lat:38.034047, lng:-97.913735, dir:"1501 South Severance Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-jacksonville": {nombre:"South Jacksonville", centro:[39.708658, -90.228176], tz:"America/Chicago", lugares:[
  {n:"Lincoln Land Animal Clinic", cat:"vet", lat:39.720491, lng:-90.240576, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jacksonville PetSafe Bark Park", cat:"parque", lat:39.709032, lng:-90.209381, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-lebanon": {nombre:"South Lebanon", centro:[39.371036, -84.212806], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.379435, lng:-84.219275, dir:"476 Corwin Nixon Boulevard", tel:"+1 513-494-3125", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "south-lyon": {nombre:"South Lyon", centro:[42.460634, -83.651455], tz:"America/New_York", lugares:[
  {n:"South Lyon Animal Clinic", cat:"vet", lat:42.462519, lng:-83.652406, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-milwaukee": {nombre:"South Milwaukee", centro:[42.910572, -87.860637], tz:"America/Chicago", lugares:[
  {n:"Warnimont Dog Exercise Area", cat:"parque", lat:42.932011, lng:-87.848557, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-range": {nombre:"South Range", centro:[47.069928, -88.643181], tz:"America/Chicago", lugares:[
  {n:"Copper Country Veterinary Clinic", cat:"vet", lat:47.081748, lng:-88.636624, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-russell": {nombre:"South Russell", centro:[41.432192, -81.340233], tz:"America/New_York", lugares:[
  {n:"Rescue Village", cat:"refugio", lat:41.44706, lng:-81.337427, dir:"15463 Chillicothe Road", horas:[12.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"TLC Pet Hospital", cat:"vet", lat:41.413085, lng:-81.340287, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-sioux-city": {nombre:"South Sioux City", centro:[42.474296, -96.413591], tz:"America/Chicago", lugares:[
  {n:"South Sioux Animal Hospital", cat:"vet", lat:42.474803, lng:-96.433055, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-zanesville": {nombre:"South Zanesville", centro:[39.90501, -82.019746], tz:"America/New_York", lugares:[
  {n:"Animal Crackers Veterinary Hospital", cat:"vet", lat:39.884077, lng:-82.058578, dir:"3525 Maysville Pike", tel:"+1 740-455-2273", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Fetch Remedy Dogs", cat:"refugio", lat:39.892394, lng:-82.0461, dir:"2895 Maysville Pike", tel:"+1 740-297-6434", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Flying Fur Dog Grooming", cat:"peluqueria", lat:39.92719, lng:-82.085517, dir:"4835 Old Coopermill Road", tel:"+1 740-764-6922", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Maysville Animal Hospital", cat:"vet", lat:39.912522, lng:-82.01598, dir:"1897 Pine Street", tel:"+1 740-452-9660", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Ruff Ranch 740", cat:"refugio", lat:39.927082, lng:-82.085494, dir:"4835 Old Coopermill Road", tel:"+1 740-647-2801", horas:[9.0, 11.0], nota:"Dato de OpenStreetMap"}
 ]},
 "southern-view": {nombre:"Southern View", centro:[39.757321, -89.653693], tz:"America/Chicago", lugares:[
  {n:"Nature's Select", cat:"tienda", lat:39.765833, lng:-89.649676, dir:"2739 South 6th Street", tel:"+1-217-529-6250", horas:[13.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Cafe Moxo", cat:"resto", lat:39.769871, lng:-89.687802, dir:"2661 Chatham Road", tel:"+1-217-788-8084", horas:[6.5, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Coble Animal Hospital", cat:"vet", lat:39.767988, lng:-89.667809, dir:"2828 South MacArthur Boulevard", tel:"+1-217-789-4200", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.759997, lng:-89.70814, dir:"3183 South Veterans Parkway", tel:"+1 217-698-3091", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"All Cat Clinic, P.C.", cat:"vet", lat:39.751601, lng:-89.646192, dir:"700 Corporate Court", tel:"+1-217-241-2287", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.768702, lng:-89.708979, dir:"2721 South Veterans Parkway", tel:"+1 217-793-7387", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Capitol Illini Veterinary Services", cat:"vet", lat:39.764412, lng:-89.684231, dir:"1711 Wabash Avenue", tel:"+1-217-546-1541", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"West Lake Animal Hospital", cat:"vet", lat:39.767306, lng:-89.606023, dir:"3220 Horizon Drive", tel:"+1-217-529-4499", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:39.779528, lng:-89.667917, dir:"1930 South MacArthur Boulevard", tel:"+1-217-789-6468", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Tail Command", cat:"refugio", lat:39.764797, lng:-89.619216, dir:"2861 Stanton Street", tel:"+1-217-529-8245", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Laketown Animal Hospital", cat:"vet", lat:39.757995, lng:-89.638853, dir:"1115 East Stevenson Drive", tel:"+1-217-529-4211", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Bark Side of the Groom", cat:"peluqueria", lat:39.753692, lng:-89.644909, dir:"3351 South 6th Street Frontage Road", tel:"+1-217-971-3072", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "southgate-michigan": {nombre:"Southgate", centro:[42.20371, -83.206756], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.196489, lng:-83.258726, dir:"23271 Eureka Road", tel:"+1 734-374-8106", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Angel Animal Hospital", cat:"vet", lat:42.199907, lng:-83.208541, dir:"15250 Eureka Road", tel:"+1-734-281-6500", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.199589, lng:-83.206307, dir:"15060 Eureka Road", tel:"+1-734-720-9797", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southgate Animal Hospital", cat:"vet", lat:42.207198, lng:-83.200838, dir:"13697 Dix-Toledo Highway", tel:"+1-734-284-9122", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Canine", cat:"refugio", lat:42.185146, lng:-83.247081, dir:"16677 Racho Road", tel:"+1-734-283-0060", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blue River Animal Hospital", cat:"vet", lat:42.196485, lng:-83.213308, dir:"15351 Dix-Toledo Highway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petique Dog Grooming", cat:"peluqueria", lat:42.219768, lng:-83.194358, dir:"12136 Dix-Toledo Highway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All-Petz Grooming", cat:"peluqueria", lat:42.213989, lng:-83.189427, dir:"13506 Northline Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Downriver Central Animal Control", cat:"refugio", lat:42.205806, lng:-83.211067, dir:"14300 Reaume Parkway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tiny Paws Pet Grooming", cat:"peluqueria", lat:42.210892, lng:-83.196375, dir:"13275 Dix-Toledo Highway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Petz Grooming", cat:"peluqueria", lat:42.226904, lng:-83.194705, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "southport-indiana": {nombre:"Southport", centro:[39.665045, -86.127764], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.65316, lng:-86.136031, dir:"7801 Highway 31 South", tel:"+1 317-865-3509", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"VetCheck Pet Urgent Care Center", cat:"vet", lat:39.665576, lng:-86.076766, dir:"5335 East Southport Road", tel:"+1-317-934-9953", horas:[14.0, 23.0], nota:"Dato de OpenStreetMap"}
 ]},
 "spalding-nebraska": {nombre:"Spalding", centro:[41.688782, -98.364436], tz:"America/Chicago", lugares:[
  {n:"Spalding Animal Clinic", cat:"vet", lat:41.689502, lng:-98.364636, dir:"151 North Chestnut Street", tel:"+1-308-223-0036", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "spanish-lake": {nombre:"Spanish Lake", centro:[38.78774, -90.215051], tz:"America/Chicago", lugares:[
  {n:"Saint Louis Zoo WildCare Park", cat:"zoo", lat:38.802164, lng:-90.190335, dir:"12385 Larimore Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K-9 Training", cat:"parque", lat:38.826147, lng:-90.222007, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spearfish": {nombre:"Spearfish", centro:[44.48939, -103.860963], tz:"America/Denver", lugares:[
  {n:"Changing Spaces pet supply Store", cat:"tienda", lat:44.490987, lng:-103.863596, tel:"+1 605-717-2897", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Western Hills Humane Society", cat:"refugio", lat:44.482148, lng:-103.802933, dir:"324 Industrial Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"U-Dirty-Dog Pet Wash", cat:"peluqueria", lat:44.481795, lng:-103.845206, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "speedway": {nombre:"Speedway", centro:[39.788123, -86.240714], tz:"America/New_York", lugares:[
  {n:"Airport Animal Emergi-Center", cat:"refugio", lat:39.752701, lng:-86.249246, dir:"5235 West Washington Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Pet Health Care by Noah's", cat:"vet", lat:39.759899, lng:-86.226217, dir:"3825 West Washington Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Specialty & Emergency Care West", cat:"vet", lat:39.801371, lng:-86.267858, dir:"6136 Crawfordsville Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal House", cat:"tienda", lat:39.787707, lng:-86.250383, horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"IndyHumane Downtown Clinic", cat:"vet", lat:39.773906, lng:-86.205628, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spencer": {nombre:"Spencer", centro:[39.286712, -86.762506], tz:"America/Chicago", lugares:[
  {n:"Owen County Humane Society", cat:"refugio", lat:39.315827, lng:-86.73322, dir:"2014 West Ramona Road", tel:"+1-812-829-6247", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Town & Country Veterinary Clinic", cat:"vet", lat:39.289284, lng:-86.784611, dir:"29 Bob Babbs Drive", tel:"+1-812-829-4690", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fins & Fangs", cat:"tienda", lat:39.284971, lng:-86.762708, dir:"109 South Main Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spooner": {nombre:"Spooner", centro:[45.826773, -91.888238], tz:"America/Chicago", lugares:[
  {n:"Spooner Dog Park", cat:"parque", lat:45.833767, lng:-91.880192, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spring-green": {nombre:"Spring Green", centro:[43.176937, -90.068048], tz:"America/Chicago", lugares:[
  {n:"Spring Green Animal Hospital", cat:"vet", lat:43.179248, lng:-90.062315, dir:"506 Rainbow Road", tel:"+1-608-588-3535", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spring-grove": {nombre:"Spring Grove", centro:[42.443631, -88.236478], tz:"America/Chicago", lugares:[
  {n:"Nature's Feed", cat:"tienda", lat:42.438513, lng:-88.244776, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spring-hill-kansas": {nombre:"Spring Hill", centro:[38.743065, -94.825517], tz:"America/Chicago", lugares:[
  {n:"Spring Hill Veterinary Clinic", cat:"vet", lat:38.749127, lng:-94.825387, dir:"602 North Webster Street", tel:"+1-913-592-2770", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heritage Animal Hospital", cat:"vet", lat:38.797019, lng:-94.821458, dir:"20440 West 183rd Street", tel:"+1-913-592-0099", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Anderson Animal Clinic", cat:"vet", lat:38.803627, lng:-94.826077, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Melvin Murry Dog Park", cat:"parque", lat:38.762577, lng:-94.843163, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spring-lake-minnesota": {nombre:"Spring Lake", centro:[44.706352, -93.463284], tz:"America/Chicago", lugares:[
  {n:"Small/Frail Dog Area", cat:"parque", lat:44.715925, lng:-93.474662, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Off-leash Area", cat:"parque", lat:44.715415, lng:-93.473289, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spring-park": {nombre:"Spring Park", centro:[44.935326, -93.632293], tz:"America/Chicago", lugares:[
  {n:"Dog Haven and Spa", cat:"peluqueria", lat:44.93484, lng:-93.613575, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spring-valley-ohio": {nombre:"Spring Valley", centro:[39.609872, -84.008154], tz:"America/New_York", lugares:[
  {n:"Francis Kennels", cat:"refugio", lat:39.635655, lng:-84.017395, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spring-valley-wisconsin": {nombre:"Spring Valley", centro:[44.845248, -92.238417], tz:"America/Chicago", lugares:[
  {n:"Elm Valley Vet Clinic", cat:"vet", lat:44.846459, lng:-92.238647, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "springboro": {nombre:"Springboro", centro:[39.552281, -84.233272], tz:"America/New_York", lugares:[
  {n:"Petland", cat:"tienda", lat:39.597935, lng:-84.229735, dir:"10761 Innovation Drive", horas:[10.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"vet", lat:39.56314, lng:-84.264507, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "springdale-ohio": {nombre:"Springdale", centro:[39.287002, -84.485221], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.29108, lng:-84.468104, dir:"11741 Princeton Pike", tel:"+1 513-671-6560", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Gala Pet Styling", cat:"peluqueria", lat:39.284954, lng:-84.484575, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetPeople", cat:"tienda", lat:39.360054, lng:-84.458408, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "springfield-illinois": {nombre:"Springfield", centro:[39.799017, -89.643957], tz:"America/Chicago", lugares:[
  {n:"Animal Medical Clinic", cat:"vet", lat:39.807224, lng:-89.679874, dir:"1600 West Jefferson Street", tel:"+1-217-787-1084", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Head West", cat:"resto", lat:39.798119, lng:-89.648178, dir:"530 East Capitol Avenue", tel:"+1-217-789-9101", horas:[10.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Parkway Veterinary Clinic", cat:"vet", lat:39.796408, lng:-89.605119, dir:"506 South Dirksen Parkway", tel:"+1-217-670-1776", horas:[7.5, 12.5], nota:"Dato de OpenStreetMap"},
  {n:"Suds N' Pups", cat:"peluqueria", lat:39.804679, lng:-89.669895, dir:"235 North English Avenue", tel:"+1-217-546-3686", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Protective League", cat:"refugio", lat:39.842655, lng:-89.639842, dir:"1001 Taintor Road", tel:"+1-217-544-7387", horas:[12.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Obed & Isaac's", cat:"resto", lat:39.797006, lng:-89.647563, dir:"500 South 6th Street", tel:"+1-217-670-0627", horas:[11.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"Coble Animal Hospital", cat:"vet", lat:39.831648, lng:-89.618622, dir:"2525 East Sangamon Avenue", tel:"+1-217-789-0011", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Brewer Animal Hospital", cat:"vet", lat:39.790193, lng:-89.70542, dir:"971 Clocktower Drive", tel:"+1-217-787-9730", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.83269, lng:-89.630807, dir:"1895 East Sangamon Avenue", tel:"+1-217-528-7301", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Maldaner's Restaurant", cat:"resto", lat:39.799725, lng:-89.64772, dir:"222 South 6th Street", tel:"+1-217-522-4313", horas:[11.0, 14.5], nota:"Dato de OpenStreetMap"},
  {n:"La Piazza Cucina Italiana", cat:"resto", lat:39.799827, lng:-89.647723, dir:"220 South 6th Street", tel:"+1-217-572-1442", horas:[11.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Doggone Gorgeous", cat:"peluqueria", lat:39.805609, lng:-89.673821, dir:"1208 West Jefferson Street", tel:"+1-217-698-4091", horas:[8.5, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Pup.E.Tails", cat:"peluqueria", lat:39.797944, lng:-89.688078, dir:"315 Chatham Road", tel:"+1-217-679-6128", horas:[7.5, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Stuart Dog Park II", cat:"parque", lat:39.822846, lng:-89.705151, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stuart Dog Park I", cat:"parque", lat:39.822691, lng:-89.704874, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "springfield-michigan": {nombre:"Springfield", centro:[42.32643, -85.239161], tz:"America/New_York", lugares:[
  {n:"Springfield Dog Park", cat:"parque", lat:42.332587, lng:-85.238462, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "springfield-missouri": {nombre:"Springfield", centro:[37.208173, -93.292271], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:37.149099, lng:-93.256214, dir:"3500 South Glenstone Avenue", tel:"+1 417-887-7737", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Springfield Veterinary Center", cat:"vet", lat:37.159521, lng:-93.291634, dir:"330 East Battlefield Road", tel:"+1-417-887-8030", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dickerson Park Zoo", cat:"zoo", lat:37.254922, lng:-93.30715, dir:"1401 West Norton Road", tel:"+1-417-833-1570", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Deerfield Veterinary Hospital", cat:"vet", lat:37.160104, lng:-93.229211, dir:"2850 South Ingram Mill Road", tel:"+1 417-889-2727", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:37.166987, lng:-93.294372, dir:"2640 South Campbell Avenue", tel:"+1 417-520-1179", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"SAAF Spay Neuter Clinic", cat:"vet", lat:37.22758, lng:-93.285078, dir:"1600 North Washington Avenue", tel:"+14178317223", horas:[7.25, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"All Pets Supplies & Equine Center", cat:"tienda", lat:37.242033, lng:-93.333521, dir:"2845 West Kearney Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetsWay", cat:"tienda", lat:37.179439, lng:-93.236626, dir:"2920 East Sunshine Street", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Country Club Veterinary Hospital", cat:"vet", lat:37.189033, lng:-93.25779, dir:"1959 East Bennett Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Big Doghouse", cat:"refugio", lat:37.189213, lng:-93.258588, dir:"1927 East Bennett Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All About Dogs & Cats", cat:"tienda", lat:37.188141, lng:-93.262791, dir:"1429 South Glenstone Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsway", cat:"tienda", lat:37.161858, lng:-93.261943, dir:"2838 South Glenstone Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bradford Park Veterinary Hospital", cat:"vet", lat:37.144019, lng:-93.276036, dir:"1255 East Independence Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Tails", cat:"refugio", lat:37.183097, lng:-93.250446, dir:"1670 South Enterprise Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSway", cat:"tienda", lat:37.241814, lng:-93.313017, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sunshine Animal Hospital", cat:"vet", lat:37.18083, lng:-93.229604, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wonders of Wildlife", cat:"zoo", lat:37.181453, lng:-93.296407, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cruse Dog Park", cat:"parque", lat:37.194342, lng:-93.32078, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tender Care Grooming", cat:"tienda", lat:37.242666, lng:-93.297264, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Creatures Pet Hospital", cat:"vet", lat:37.240529, lng:-93.300889, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Grooming and Supply", cat:"tienda", lat:37.240448, lng:-93.301191, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "springfield-ohio": {nombre:"Springfield", centro:[39.923405, -83.810138], tz:"America/New_York", lugares:[
  {n:"Wiggley Field Dog Park", cat:"parque", lat:39.943489, lng:-83.759235, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "st-charles": {nombre:"St. Charles", centro:[41.913981, -88.312818], tz:"America/Chicago", lugares:[
  {n:"St. Charles Veterinary Clinic", cat:"vet", lat:41.922941, lng:-88.284543, dir:"530 Dunham Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Thrive", cat:"vet", lat:41.898055, lng:-88.339787, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggie Divine", cat:"peluqueria", lat:41.899147, lng:-88.336956, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal House", cat:"vet", lat:41.900568, lng:-88.338831, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "st-croix-falls": {nombre:"St. Croix Falls", centro:[45.410492, -92.644582], tz:"America/Chicago", lugares:[
  {n:"Fawn Doe Rosa Wildlife Educational Park", cat:"zoo", lat:45.398346, lng:-92.597456, dir:"2131 US Hwy 8", tel:"+1-715-483-3772", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fur-Get-Me-Nots", cat:"tienda", lat:45.409548, lng:-92.644564, dir:"116 South Washington Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northern Veterinary Services", cat:"vet", lat:45.40271, lng:-92.607043, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Valley View Vet", cat:"vet", lat:45.39946, lng:-92.623109, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"St. Croix Falls Dog Park", cat:"parque", lat:45.414923, lng:-92.625326, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "standish-michigan": {nombre:"Standish", centro:[43.983076, -83.95888], tz:"America/New_York", lugares:[
  {n:"Arenac County Animal Control", cat:"refugio", lat:43.975154, lng:-83.92753, dir:"3750 Foco Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stanley-wisconsin": {nombre:"Stanley", centro:[44.960129, -90.9375], tz:"America/Chicago", lugares:[
  {n:"Stanley Veterinary Services", cat:"vet", lat:44.960106, lng:-90.938596, dir:"108 West 1st Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stanton-kansas": {nombre:"Stanton", centro:[38.543347, -95.054413], tz:"America/Chicago", lugares:[
  {n:"Always & Furever Osawatomie Animal Shelter", cat:"refugio", lat:38.529801, lng:-95.0011, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "steele-north-dakota": {nombre:"Steele", centro:[46.854745, -99.915517], tz:"America/Chicago", lugares:[
  {n:"Steele Vet Clinic", cat:"vet", lat:46.855908, lng:-99.931567, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stephenson": {nombre:"Stephenson", centro:[45.415251, -87.607616], tz:"America/New_York", lugares:[
  {n:"DeYoung Family Zoo", cat:"zoo", lat:45.30691, lng:-87.643382, dir:"N5406 County Road 577", tel:"+1-906-788-4093", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sterling-heights": {nombre:"Sterling Heights", centro:[42.580312, -83.030203], tz:"America/New_York", lugares:[
  {n:"Metropolitan Veterinary Center", cat:"vet", lat:42.563598, lng:-83.049807, dir:"36759 Mound Road", tel:"+1-586-726-5200", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Hospital of Sterling Heights", cat:"vet", lat:42.546552, lng:-83.027381, dir:"34244 Van Dyke Avenue", tel:"+1-586-268-9888", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Suburban Veterinary Hospital", cat:"vet", lat:42.53588, lng:-83.066928, dir:"4105 East 14 Mile Road", tel:"+1-586-939-1990", horas:[9.0, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic Of Sterling Heights", cat:"vet", lat:42.587338, lng:-83.029868, dir:"39990 Van Dyke Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rescue Veterinary Services", cat:"vet", lat:42.588668, lng:-83.030052, dir:"40150 Van Dyke Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Haven", cat:"tienda", lat:42.56916, lng:-83.027251, dir:"37396 Van Dyke Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cat's Meow Pet Grooming", cat:"peluqueria", lat:42.533652, lng:-83.048591, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sterling-illinois": {nombre:"Sterling", centro:[41.788253, -89.695366], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.810416, lng:-89.658549, dir:"3210 East Lynn Boulevard", tel:"+1 815-564-0147", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "stevens-point": {nombre:"Stevens Point", centro:[44.523447, -89.584446], tz:"America/Chicago", lugares:[
  {n:"Companion Shop", cat:"tienda", lat:44.5232, lng:-89.585056, dir:"937 Main Street", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Stevens Point Dog Park", cat:"parque", lat:44.508829, lng:-89.581988, dir:"601 Mason Street", horas:[6.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"Stevens Point Dog Park - Small Dog Area", cat:"parque", lat:44.509411, lng:-89.580266, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mead Park Dog Beach", cat:"parque", lat:44.524437, lng:-89.59663, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawsitively Unleashed!", cat:"parque", lat:44.51449, lng:-89.569471, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stewartville-minnesota": {nombre:"Stewartville", centro:[43.855424, -92.488322], tz:"America/Chicago", lugares:[
  {n:"Stewartville Animal Clinic", cat:"vet", lat:43.854644, lng:-92.488767, dir:"205 South Main Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stickney": {nombre:"Stickney", centro:[41.819328, -87.77969], tz:"America/Chicago", lugares:[
  {n:"Clippin' Critters", cat:"peluqueria", lat:41.830782, lng:-87.783456, dir:"6407 34th Street", tel:"+1-708-795-7972", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "stillwater": {nombre:"Stillwater", centro:[45.055913, -92.807572], tz:"America/Chicago", lugares:[
  {n:"Rivertown Animal Hospital", cat:"vet", lat:45.056904, lng:-92.861424, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stillwater Dog Park", cat:"parque", lat:45.058412, lng:-92.832688, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stockton-illinois": {nombre:"Stockton", centro:[42.349736, -90.006792], tz:"America/Chicago", lugares:[
  {n:"Stockton Blackhawk Veterinary Clinic", cat:"vet", lat:42.358062, lng:-90.001044, dir:"635 North Simmons Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stow-ohio": {nombre:"Stow", centro:[41.159626, -81.440626], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.155072, lng:-81.406241, dir:"4332 Kent Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bow Wow Beach", cat:"parque", lat:41.194556, lng:-81.416206, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stratford-wisconsin": {nombre:"Stratford", centro:[44.801076, -90.079297], tz:"America/Chicago", lugares:[
  {n:"Blue Skies Large & Small Animal Clinic LLC", cat:"vet", lat:44.799954, lng:-90.078732, dir:"212805 State Highway 97", tel:"+1 715-687-3310", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stratford Veterinary Clinic", cat:"vet", lat:44.789066, lng:-90.079942, dir:"211602 Barkley Way", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "streamwood": {nombre:"Streamwood", centro:[42.025583, -88.178409], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.071244, lng:-88.193751, dir:"2590 North Sutton Road", tel:"+1 847-645-3366", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.01261, lng:-88.181036, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bentley's Pet Food", cat:"tienda", lat:42.045183, lng:-88.141934, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.027416, lng:-88.146505, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "streator": {nombre:"Streator", centro:[41.121023, -88.835736], tz:"America/Chicago", lugares:[
  {n:"Picture Perfect K-9's", cat:"peluqueria", lat:41.121164, lng:-88.831842, dir:"322 East Main Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "strongsville": {nombre:"Strongsville", centro:[41.314473, -81.83511], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:41.315222, lng:-81.817633, dir:"16710 Royalton Road", tel:"+1 440-238-0287", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetPeople", cat:"tienda", lat:41.315199, lng:-81.830128, dir:"18360 Royalton Road", horas:[9.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:41.308132, lng:-81.82138, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sturgeon-bay": {nombre:"Sturgeon Bay", centro:[44.834164, -87.377042], tz:"America/Chicago", lugares:[
  {n:"Bayside Veterinary Clinic", cat:"vet", lat:44.852044, lng:-87.354002, dir:"3773 Egg Harbor Road", tel:"+1-920-743-8890", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Idlewild Kennel", cat:"refugio", lat:44.858345, lng:-87.455542, dir:"3886 County Road M", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sturgis-south-dakota": {nombre:"Sturgis", centro:[44.414477, -103.509139], tz:"America/Denver", lugares:[
  {n:"Wareing Motors Off-Leash Dog Park", cat:"parque", lat:44.390197, lng:-103.505418, dir:"1 Ford Place", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sturtevant": {nombre:"Sturtevant", centro:[42.698075, -87.894523], tz:"America/Chicago", lugares:[
  {n:"Magnolia Springs Veterinary Center", cat:"vet", lat:42.718704, lng:-87.900225, dir:"9301 Washington Avenue", tel:"+1-262-770-3106", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:42.694684, lng:-87.868207, dir:"3059 Oakes Road", tel:"+1 262-598-1184", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Off Broadway Dog Park", cat:"parque", lat:42.691504, lng:-87.889647, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "suamico": {nombre:"Suamico", centro:[44.632044, -88.039342], tz:"America/Chicago", lugares:[
  {n:"Animal Clinic of Suamico LLC", cat:"vet", lat:44.668522, lng:-88.053234, dir:"14605 Velp Avenue", tel:"+1-920-662-1323", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"NEW Zoo", cat:"zoo", lat:44.661125, lng:-88.087896, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Children's Petting Zoo", cat:"zoo", lat:44.65974, lng:-88.088143, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sugar-creek-missouri": {nombre:"Sugar Creek", centro:[39.109727, -94.444674], tz:"America/Chicago", lugares:[
  {n:"Northeast Animal Hospital", cat:"vet", lat:39.104425, lng:-94.504617, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sugar-grove": {nombre:"Sugar Grove", centro:[41.76162, -88.443926], tz:"America/Chicago", lugares:[
  {n:"VCA Aurora Animal Hospital", cat:"vet", lat:41.76486, lng:-88.385508, dir:"2600 West Galena Boulevard", tel:"+1-630-301-6100", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Woof Run Dog Park", cat:"parque", lat:41.784161, lng:-88.485572, dir:"901 Wheeler Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sugar-grove-ohio": {nombre:"Sugar Grove", centro:[39.626454, -82.548493], tz:"America/New_York", lugares:[
  {n:"Quiet Area", cat:"zoo", lat:39.630552, lng:-82.567851, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sugarcreek": {nombre:"Sugarcreek", centro:[40.50312, -81.640958], tz:"America/New_York", lugares:[
  {n:"Sugarcreek Veterinary Clinic", cat:"vet", lat:40.500911, lng:-81.642996, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "summit-illinois": {nombre:"Summit", centro:[41.788088, -87.810334], tz:"America/Chicago", lugares:[
  {n:"Abbot Animal Hospital", cat:"vet", lat:41.791976, lng:-87.790061, dir:"6721 West Archer Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Summit Animal Hospital", cat:"vet", lat:41.78121, lng:-87.801493, dir:"6050 South Harlem Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "summit-wisconsin": {nombre:"Summit", centro:[43.062339, -88.470359], tz:"America/Chicago", lugares:[
  {n:"Summit Animal Clinic, LLC", cat:"vet", lat:43.075654, lng:-88.471777, dir:"1740 Summit Center Drive", tel:"+1-262-567-0307", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sun-prairie-wisconsin": {nombre:"Sun Prairie", centro:[43.183278, -89.21283], tz:"America/Chicago", lugares:[
  {n:"Animal Hospital-Sun Prairie", cat:"vet", lat:43.174393, lng:-89.249753, dir:"2125 McCoy Rd.", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mounds Pet Food Warehouse", cat:"tienda", lat:43.186667, lng:-89.259513, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Prairie Veterinary Associates", cat:"vet", lat:43.186688, lng:-89.258821, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Exercise Area", cat:"parque", lat:43.166727, lng:-89.225261, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sunfish-lake": {nombre:"Sunfish Lake", centro:[44.870799, -93.098551], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:44.886786, lng:-93.079485, dir:"1970 Robert Street South", tel:"+1 651-450-6204", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Southview Animal Hospital", cat:"vet", lat:44.883299, lng:-93.083351, dir:"32 Mendota Road East", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sunset-hills": {nombre:"Sunset Hills", centro:[38.538942, -90.407341], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.553346, lng:-90.412726, dir:"10900 Sunset Hills Plaza", tel:"+1 314-909-0068", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "superior-charter-township": {nombre:"Superior Charter Township", centro:[42.304993, -83.604118], tz:"America/New_York", lugares:[
  {n:"Dixboro Veterinary Dental Clinic", cat:"vet", lat:42.318215, lng:-83.646763, dir:"5740 Plymouth Road", tel:"+1-734-975-1623", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Huron Valley", cat:"refugio", lat:42.306075, lng:-83.654973, dir:"3100 Cherry Hill Road", tel:"+1-734-662-5585", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arbor Hills Animal Clinic", cat:"vet", lat:42.312647, lng:-83.653013, dir:"5347 Plymouth Road", tel:"+1-734-668-1466", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "superior-nebraska": {nombre:"Superior", centro:[40.020847, -98.070044], tz:"America/Chicago", lugares:[
  {n:"Superior Animal Hospital", cat:"vet", lat:40.017434, lng:-98.047173, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kyle Veterinary Clinic", cat:"vet", lat:40.018001, lng:-98.01885, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "superior-wisconsin": {nombre:"Superior", centro:[46.720774, -92.10408], tz:"America/Chicago", lugares:[
  {n:"Superior Animal Hospital", cat:"vet", lat:46.725757, lng:-92.074383, dir:"36 East 2nd Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Superior Dog Park", cat:"parque", lat:46.70477, lng:-92.123438, dir:"598–2500 N 29th St", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sussex-wisconsin": {nombre:"Sussex", centro:[43.1339, -88.222037], tz:"America/Chicago", lugares:[
  {n:"Animal Clinic of Sussex", cat:"vet", lat:43.134589, lng:-88.229367, dir:"N64W24280 Main Street", tel:"+1-262-246-5850", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Partners Animal Clinic", cat:"vet", lat:43.113333, lng:-88.24077, dir:"W248 N5250 Executive Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "swansea": {nombre:"Swansea", centro:[38.533939, -89.988994], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.527279, lng:-90.033555, dir:"5801 Belleville Crossing Street", tel:"+1 618-222-1634", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:38.542639, lng:-89.9853, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "swartz-creek": {nombre:"Swartz Creek", centro:[42.957251, -83.830514], tz:"America/New_York", lugares:[
  {n:"West Flint Animal Hospital", cat:"vet", lat:43.001716, lng:-83.812446, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Frontier Veterinary Clinic", cat:"vet", lat:42.914563, lng:-83.75016, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sycamore-illinois": {nombre:"Sycamore", centro:[41.988917, -88.686754], tz:"America/Chicago", lugares:[
  {n:"Aubrey's Pet Grooming", cat:"peluqueria", lat:41.988366, lng:-88.680843, dir:"331 East State Street", tel:"+1-815-762-7292", horas:[9.0, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Bethney Animal Hospital", cat:"vet", lat:41.96572, lng:-88.721336, dir:"2400 Bethany Road", tel:"+1 815-756-8925", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw Lickin Good", cat:"tienda", lat:41.959818, lng:-88.7187, dir:"2684 DeKalb Avenue", tel:"+1 815-758-8300", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Sycamore Park District Brian Bemis Family Dog Park", cat:"parque", lat:41.977737, lng:-88.658595, dir:"480 Airport Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sycamore-ohio": {nombre:"Sycamore", centro:[40.949692, -83.170081], tz:"America/New_York", lugares:[
  {n:"Mohawk Animal Hospital", cat:"vet", lat:40.948193, lng:-83.176411, dir:"414 West 7th Street", tel:"+1-419-927-4343", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "sylvan-lake": {nombre:"Sylvan Lake", centro:[42.611422, -83.328547], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.608076, lng:-83.294316, dir:"2197 South Telegraph Road", tel:"+1 248-209-0643", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.609761, lng:-83.300438, dir:"2057 South Telegraph Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sylvania-ohio": {nombre:"Sylvania", centro:[41.718896, -83.712773], tz:"America/New_York", lugares:[
  {n:"Sheri May Meyers Pet Styling Salon", cat:"peluqueria", lat:41.716986, lng:-83.701601, dir:"5646 Summit Street", tel:"+1-419-882-8888", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.676288, lng:-83.708344, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tallmadge": {nombre:"Tallmadge", centro:[41.101462, -81.441799], tz:"America/New_York", lugares:[
  {n:"Royal Union Pets Co.", cat:"tienda", lat:41.10214, lng:-81.434879, dir:"137 East Avenue", tel:"+13305527327", horas:[12.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Rub My Belly", cat:"peluqueria", lat:41.102192, lng:-81.435789, tel:"+1-234-334-5124", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bath & Biscuits", cat:"peluqueria", lat:41.083399, lng:-81.417128, tel:"+1-234-312-9934", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tama": {nombre:"Tama", centro:[41.962596, -92.57928], tz:"America/Chicago", lugares:[
  {n:"Dog Park", cat:"parque", lat:41.95864, lng:-92.581857, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "taylor-michigan": {nombre:"Taylor", centro:[42.240872, -83.269651], tz:"America/New_York", lugares:[
  {n:"The PAWS Clinic", cat:"vet", lat:42.227986, lng:-83.241617, dir:"21210 Goddard Road", tel:"+1-313-451-8200", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.256436, lng:-83.252315, dir:"22124 Ecorse Road", tel:"+1-313-295-6500", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Taylor Animal Shelter", cat:"refugio", lat:42.211, lng:-83.284619, dir:"25555 Northline Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Taylor Veterinary Clinic", cat:"vet", lat:42.226583, lng:-83.251623, dir:"22215 Goddard Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Taylor Petting Farm", cat:"zoo", lat:42.213884, lng:-83.253052, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wiggle Waggle Barkery", cat:"tienda", lat:42.211718, lng:-83.254997, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tea": {nombre:"Tea", centro:[43.44661, -96.836034], tz:"America/Chicago", lugares:[
  {n:"Lacy's Struttin' Mutts", cat:"peluqueria", lat:43.449953, lng:-96.82668, dir:"401 North Heritage Parkway", tel:"+1-605-368-5888", horas:[7.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Tea Veterinary Clinic", cat:"vet", lat:43.449054, lng:-96.827337, dir:"710 East Figzel Court", tel:"+1-605-368-2088", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SDK West", cat:"parque", lat:43.489357, lng:-96.891513, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tecumseh-michigan": {nombre:"Tecumseh", centro:[42.003933, -83.944942], tz:"America/New_York", lugares:[
  {n:"Tecumseh Veterinary Hospital", cat:"vet", lat:41.977449, lng:-83.966337, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tell-city": {nombre:"Tell City", centro:[37.950848, -86.769701], tz:"America/Chicago", lugares:[
  {n:"Tell City Dog Park", cat:"parque", lat:37.957448, lng:-86.76017, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "temperance": {nombre:"Temperance", centro:[41.779373, -83.568938], tz:"America/New_York", lugares:[
  {n:"Temperance Animal Hospital", cat:"vet", lat:41.750151, lng:-83.568125, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tenstrike": {nombre:"Tenstrike", centro:[47.656382, -94.676868], tz:"America/Chicago", lugares:[
  {n:"Turtle River Equine Veterinary", cat:"vet", lat:47.602265, lng:-94.757852, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "terrace-park": {nombre:"Terrace Park", centro:[39.159227, -84.30716], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.098008, lng:-84.278318, dir:"650 Eastgate South Drive", tel:"+1 513-752-8463", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Feeders Pet Supply", cat:"tienda", lat:39.093176, lng:-84.268181, dir:"4394 Eastgate Square Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:39.093718, lng:-84.274379, dir:"4450 Eastgate Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Wellness Hospital", cat:"vet", lat:39.100864, lng:-84.261949, dir:"962 Old State Route 74", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "terre-haute-indiana": {nombre:"Terre Haute", centro:[39.466702, -87.413912], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.421811, lng:-87.413738, dir:"3680 South Highway 41", tel:"+1 812-235-9010", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Valu", cat:"tienda", lat:39.472617, lng:-87.377929, dir:"2586 Wabash Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brown Veterinary Hospital", cat:"vet", lat:39.457034, lng:-87.379161, dir:"South 25th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SPOT Spay/Neuter Clinic", cat:"vet", lat:39.468333, lng:-87.392633, tel:"+1-812-242-7768", horas:[15.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dapper Dog Pet Park", cat:"parque", lat:39.427089, lng:-87.36048, dir:"3592 East Davis Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggy Day Care Grooming", cat:"peluqueria", lat:39.481163, lng:-87.413646, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Emergency Clinic", cat:"vet", lat:39.453784, lng:-87.413428, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vectren Bark Park", cat:"parque", lat:39.462876, lng:-87.418472, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"UV Bark Park", cat:"parque", lat:39.476129, lng:-87.407475, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "terrytown-nebraska": {nombre:"Terrytown", centro:[41.849253, -103.663471], tz:"America/Denver", lugares:[
  {n:"Midtown Animal Hospital", cat:"vet", lat:41.845317, lng:-103.660039, dir:"3390 10th Street", tel:"+1-308-632-6888", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Panhandle Humane Society", cat:"refugio", lat:41.852711, lng:-103.665232, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bow-Wow Dog Grooming LLC", cat:"peluqueria", lat:41.841388, lng:-103.660986, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riverside Discovery Center", cat:"zoo", lat:41.855084, lng:-103.684321, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pioneer Animal Clinic", cat:"vet", lat:41.850927, lng:-103.625079, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "the-plains": {nombre:"The Plains", centro:[39.370091, -82.132367], tz:"America/New_York", lugares:[
  {n:"Classy Canine", cat:"peluqueria", lat:39.373972, lng:-82.134097, dir:"South North Plains Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Buckley Brothers Animal Supply Feed Store", cat:"tienda", lat:39.380142, lng:-82.135357, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "thedford": {nombre:"Thedford", centro:[41.977543, -100.574197], tz:"America/Chicago", lugares:[
  {n:"Cow Country Animal Clinic", cat:"vet", lat:41.984065, lng:-100.574596, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "thiensville": {nombre:"Thiensville", centro:[43.235973, -87.984378], tz:"America/Chicago", lugares:[
  {n:"Thiensville-Mequon Small Animal Clinic", cat:"vet", lat:43.239633, lng:-87.985962, dir:"425 Main Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "third-lake": {nombre:"Third Lake", centro:[42.373911, -88.010912], tz:"America/Chicago", lugares:[
  {n:"The Paw Place", cat:"tienda", lat:42.358623, lng:-88.000772, dir:"34121 US-45", tel:"+1-224-357-7387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.383052, lng:-87.961897, dir:"6405 Grand Avenue", tel:"+1 847-855-7811", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.383578, lng:-87.971791, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "thorntown": {nombre:"Thorntown", centro:[40.129484, -86.606671], tz:"America/Chicago", lugares:[
  {n:"Thorntown Veterinary Clinic", cat:"vet", lat:40.126528, lng:-86.562937, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tiffin": {nombre:"Tiffin", centro:[41.705772, -91.665042], tz:"America/Chicago", lugares:[
  {n:"Just Dogs Play Care", cat:"refugio", lat:41.701956, lng:-91.638945, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Health Center of Tiffin", cat:"vet", lat:41.708084, lng:-91.680947, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tilton": {nombre:"Tilton", centro:[40.095314, -87.647521], tz:"America/Chicago", lugares:[
  {n:"Paw-A-Day Inn K9 Suites", cat:"refugio", lat:40.098288, lng:-87.629298, dir:"5 South Hodge Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "timberlake": {nombre:"Timberlake", centro:[41.665892, -81.442827], tz:"America/New_York", lugares:[
  {n:"Eastlake Doggie Park", cat:"parque", lat:41.663791, lng:-81.427393, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tinley-park": {nombre:"Tinley Park", centro:[41.573367, -87.784494], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.546807, lng:-87.797872, dir:"7340 West 191st Street", tel:"+1 815-464-3041", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Bremen Grove Dog Park", cat:"parque", lat:41.597994, lng:-87.782539, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tipp-city": {nombre:"Tipp City", centro:[39.961325, -84.170061], tz:"America/New_York", lugares:[
  {n:"Tipp City Veterinary Hospital", cat:"refugio", lat:39.967816, lng:-84.200023, dir:"4900 South County Road 5A", tel:"+1-937-719-5784", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "tipton-indiana": {nombre:"Tipton", centro:[40.28226, -86.041098], tz:"America/New_York", lugares:[
  {n:"Cicero Township Dog Park", cat:"parque", lat:40.291784, lng:-86.05073, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tipton-iowa": {nombre:"Tipton", centro:[41.769702, -91.128173], tz:"America/Chicago", lugares:[
  {n:"Tipton Veterinary Services", cat:"vet", lat:41.766117, lng:-91.128045, dir:"102 Cedar Street", tel:"+1 563-886-6312", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "tompkins": {nombre:"Tompkins", centro:[42.373092, -84.541636], tz:"America/New_York", lugares:[
  {n:"Shannon's Professional Pet Grooming", cat:"peluqueria", lat:42.333769, lng:-84.447585, dir:"6975 Murray Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "topeka-kansas": {nombre:"Topeka", centro:[39.049011, -95.677556], tz:"America/Chicago", lugares:[
  {n:"Petland", cat:"tienda", lat:39.027353, lng:-95.74672, dir:"2139 Southwest Fairlawn Plaza Drive", tel:"+1 785 272 8900", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carol's Pretty Pets Salon", cat:"peluqueria", lat:38.984311, lng:-95.688336, dir:"Southwest Topeka Boulevard", tel:"+1-785-271-2383", horas:[7.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Emergency Animal Clinic of Topeka", cat:"vet", lat:39.013898, lng:-95.748011, dir:"5501 Southwest 29th Street", tel:"+1-785-272-2926", horas:[5.5, 24.0], nota:"Dato de OpenStreetMap"},
  {n:"Topeka Best Pets", cat:"tienda", lat:39.093376, lng:-95.676136, dir:"910 Northwest 25th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hills Pet Nutrition Bark Park", cat:"parque", lat:39.052885, lng:-95.727245, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shawnee Lake Off-Leash Dog Area", cat:"parque", lat:38.995258, lng:-95.63529, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "toronto-ohio": {nombre:"Toronto", centro:[40.465415, -80.600939], tz:"America/New_York", lugares:[
  {n:"Toronto Veterinary Services", cat:"vet", lat:40.452367, lng:-80.607729, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "town-of-hudson": {nombre:"Town of Hudson", centro:[44.978506, -92.68059], tz:"America/Chicago", lugares:[
  {n:"Red Star Kennel", cat:"peluqueria", lat:45.003873, lng:-92.664169, dir:"977 Scott Road", tel:"+1-715-386-2197", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Center", cat:"vet", lat:44.969549, lng:-92.681236, dir:"591 Lenertz Road", tel:"+1 715-386-8878", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Dignity Dawg Grooming", cat:"peluqueria", lat:44.968686, lng:-92.679165, dir:"606 Brakke Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "town-of-lafayette": {nombre:"Town of Lafayette", centro:[44.925867, -91.274899], tz:"America/Chicago", lugares:[
  {n:"Lake Wissota Animal Hospital", cat:"vet", lat:44.920311, lng:-91.328933, dir:"16915 54th Avenue", tel:"+17157268811", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "town-of-lincoln-wisconsin": {nombre:"Town of Lincoln", centro:[45.304719, -92.336457], tz:"America/Chicago", lugares:[
  {n:"Amery Dog Park", cat:"parque", lat:45.296878, lng:-92.351309, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "town-of-oregon": {nombre:"Town of Oregon", centro:[42.902185, -89.432884], tz:"America/Chicago", lugares:[
  {n:"Country View Veterinary Service", cat:"vet", lat:42.92814, lng:-89.436932, dir:"1350 South Fish Hatchery Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "town-of-richmond": {nombre:"Town of Richmond", centro:[45.068406, -92.598212], tz:"America/Chicago", lugares:[
  {n:"Gregory's Gift of Hope", cat:"refugio", lat:45.060963, lng:-92.538122, dir:"1374 State Highway 65", tel:"+1-715-246-2467", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "town-of-springfield": {nombre:"Town of Springfield", centro:[43.198707, -89.565998], tz:"America/Chicago", lugares:[
  {n:"Indian Lake Dog Exercise Area", cat:"parque", lat:43.187223, lng:-89.636195, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "town-of-verona": {nombre:"Town of Verona", centro:[42.956779, -89.514861], tz:"America/Chicago", lugares:[
  {n:"Prairie Moraine Dog Park", cat:"parque", lat:42.960647, lng:-89.506838, dir:"6679 wesner ln", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"TailWaggers Doggy Daycare", cat:"refugio", lat:42.969936, lng:-89.508677, dir:"1060 American Way", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "town-of-washington": {nombre:"Town of Washington", centro:[44.763159, -91.423248], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:44.777477, lng:-91.429742, dir:"3731 Gateway", tel:"+1 715-832-0200", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Eau Claire Dog Park", cat:"parque", lat:44.770003, lng:-91.420776, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:44.771749, lng:-91.462526, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "town-of-westport": {nombre:"Town of Westport", centro:[43.149222, -89.428553], tz:"America/Chicago", lugares:[
  {n:"Hotel K Pet Sitting & Dog Walking", cat:"peluqueria", lat:43.153359, lng:-89.409168, dir:"5376 Farmco Drive", tel:"+1 608-286-1573", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Middleton Dog Exercise Area", cat:"parque", lat:43.142373, lng:-89.480141, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yahara Heights County Park Dog Park", cat:"parque", lat:43.153519, lng:-89.401137, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Area", cat:"parque", lat:43.139931, lng:-89.479976, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "trail-creek": {nombre:"Trail Creek", centro:[41.698373, -86.859195], tz:"America/Chicago", lugares:[
  {n:"Michigan City Animal Hospital", cat:"vet", lat:41.707895, lng:-86.867982, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fried's Cat Shelter", cat:"refugio", lat:41.701816, lng:-86.826639, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "traverse-city": {nombre:"Traverse City", centro:[44.760648, -85.616598], tz:"America/New_York", lugares:[
  {n:"DOG Bakery", cat:"tienda", lat:44.732784, lng:-85.597463, dir:"1117 West South Airport Road", tel:"+1-231-932-2045", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets Naturally", cat:"tienda", lat:44.73279, lng:-85.597666, dir:"1117 West South Airport Road", tel:"+1-231-944-1944", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aquallations", cat:"tienda", lat:44.734263, lng:-85.594801, dir:"1779 South Garfield Avenue", tel:"+1-231-943-2130", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Melissa's Best In Show", cat:"peluqueria", lat:44.731641, lng:-85.593968, dir:"931 Duell Road", tel:"+1-231-922-2213", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clipper Dog Grooming", cat:"peluqueria", lat:44.764286, lng:-85.614014, dir:"441 East Front Street", tel:"+1-231-947-6894", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clarke-Everett Dog & Cat Hospital", cat:"vet", lat:44.746565, lng:-85.619455, dir:"1525 South Cass Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Square Deal Country Store", cat:"tienda", lat:44.750051, lng:-85.607984, dir:"900 Woodmere Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bay Area Pet Hospital", cat:"vet", lat:44.763869, lng:-85.602496, dir:"844 East Front Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wags West Dog Park", cat:"parque", lat:44.768216, lng:-85.634951, dir:"701 Wayne Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oakwood Veterinary Hospital", cat:"vet", lat:44.74821, lng:-85.572523, dir:"2421 Aero-Park Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BayWest Animal Clinic", cat:"vet", lat:44.766652, lng:-85.630345, dir:"435 Bay Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tremont": {nombre:"Tremont", centro:[40.527539, -89.492598], tz:"America/Chicago", lugares:[
  {n:"The Dapper Dog Grooming Salon", cat:"peluqueria", lat:40.529899, lng:-89.503305, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "trenton-michigan": {nombre:"Trenton", centro:[42.140655, -83.180054], tz:"America/New_York", lugares:[
  {n:"Bubble Puppy", cat:"peluqueria", lat:42.144562, lng:-83.176699, dir:"2505 West Jefferson Avenue", tel:"+1-734-307-3773", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Midtown Animal Hospital", cat:"vet", lat:42.141571, lng:-83.191065, dir:"1860 West Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Trenton Veternarian Hospital", cat:"vet", lat:42.141511, lng:-83.177518, tel:"+1-734-676-6464", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fluffed Up Pets, Inc.", cat:"peluqueria", lat:42.142094, lng:-83.190597, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "trenton-missouri": {nombre:"Trenton", centro:[40.078902, -93.616607], tz:"America/Chicago", lugares:[
  {n:"Pet Central", cat:"tienda", lat:40.073754, lng:-93.597092, dir:"1850 East 9th Street", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Kingdom Veterinary Hospital", cat:"vet", lat:40.073988, lng:-93.595821, dir:"818 Kerfoot Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Affordable Veterinary Care", cat:"vet", lat:40.073098, lng:-93.595422, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Green Hills Animal Shelter", cat:"refugio", lat:40.076245, lng:-93.582634, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "trowbridge-park": {nombre:"Trowbridge Park", centro:[46.556599, -87.43736], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:46.550872, lng:-87.472745, dir:"3550 41 West", tel:"+1 906-226-4639", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center of Marquette", cat:"vet", lat:46.553898, lng:-87.458738, dir:"3052 Wright Street", tel:"+1 906-226-7400", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "troy-illinois": {nombre:"Troy", centro:[38.729215, -89.883154], tz:"America/Chicago", lugares:[
  {n:"Tri Township Animal Habitat", cat:"zoo", lat:38.728528, lng:-89.891679, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Troy Veterinary Clinic", cat:"vet", lat:38.731753, lng:-89.901707, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "troy-michigan-2": {nombre:"Troy", centro:[42.605589, -83.14993], tz:"America/New_York", lugares:[
  {n:"Animal Medical Center of Troy", cat:"vet", lat:42.622957, lng:-83.149993, dir:"994 West South Boulevard", tel:"+1-248-852-9800", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Advocates Veterinary Hospital", cat:"vet", lat:42.5925, lng:-83.128108, dir:"1047 East Long Lake Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Daisy Knight Dog Park", cat:"parque", lat:42.56961, lng:-83.146436, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Long Lake Animal Hospital", cat:"vet", lat:42.593314, lng:-83.108991, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tuscola": {nombre:"Tuscola", centro:[39.799858, -88.288455], tz:"America/Chicago", lugares:[
  {n:"Paw-sitive Vibes Dog Daycare", cat:"refugio", lat:39.79964, lng:-88.288126, dir:"107 West Sale Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "twin-lakes-wisconsin": {nombre:"Twin Lakes", centro:[42.531524, -88.247928], tz:"America/Chicago", lugares:[
  {n:"Warren Close Bark Park", cat:"parque", lat:42.547368, lng:-88.244306, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "twin-oaks": {nombre:"Twin Oaks", centro:[38.566873, -90.499235], tz:"America/Chicago", lugares:[
  {n:"Paw Wash Grooming Salon", cat:"peluqueria", lat:38.569127, lng:-90.522507, dir:"661 Big Bend Road", tel:"+1-314-239-2169", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sulphur Springs Veterinary Clinic", cat:"vet", lat:38.569145, lng:-90.523633, dir:"621 Big Bend Road", tel:"+1-636-394-3227", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arch Animal Hospital", cat:"vet", lat:38.569603, lng:-90.477208, dir:"2951 Dougherty Ferry Road", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "union-city-michigan": {nombre:"Union City", centro:[42.066713, -85.136088], tz:"America/New_York", lugares:[
  {n:"Lane Veterinary Services", cat:"vet", lat:42.065202, lng:-85.13401, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "union-grove-wisconsin": {nombre:"Union Grove", centro:[42.687654, -88.051838], tz:"America/Chicago", lugares:[
  {n:"Midwest Pet Feed", cat:"tienda", lat:42.681787, lng:-88.056217, dir:"1330 15th Avenue", tel:"+1-262-332-7468", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Top Paws Grooming", cat:"tienda", lat:42.686768, lng:-88.051652, dir:"1033 Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Union Grove Dog Park", cat:"parque", lat:42.691033, lng:-88.048951, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital Of Union Grove", cat:"vet", lat:42.682148, lng:-88.081646, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "union-missouri": {nombre:"Union", centro:[38.444387, -91.008231], tz:"America/Chicago", lugares:[
  {n:"East Central Animal Hospital", cat:"vet", lat:38.433381, lng:-90.975621, dir:"51 Silo Drive", tel:"+1-636-744-8387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Station, P.C.", cat:"vet", lat:38.446373, lng:-91.030016, dir:"1220 West Main Street", tel:"+1-636-583-2858", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Franklin County Human Society", cat:"refugio", lat:38.446035, lng:-91.030109, dir:"1222 West Main Street", tel:"+1-636-583-4300", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of Union", cat:"vet", lat:38.439017, lng:-91.015914, dir:"540 US 50 West", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dogs", cat:"parque", lat:38.448155, lng:-91.010616, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dogs", cat:"parque", lat:38.447912, lng:-91.010763, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "unity-village": {nombre:"Unity Village", centro:[38.951241, -94.401704], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:38.931178, lng:-94.408327, dir:"1860 Northwest Chipman Road", tel:"+1 816-246-0169", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Brookside Barkery & Bath", cat:"tienda", lat:38.982056, lng:-94.359619, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pete & Mac's", cat:"tienda", guarderia:true, lat:38.955354, lng:-94.364657, dir:"600 NE Pavestone Drive, Lee's Summit", tel:"+1-816-246-1116", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "university-city": {nombre:"University City", centro:[38.656908, -90.310344], tz:"America/Chicago", lugares:[
  {n:"Delmar Doggie Design", cat:"peluqueria", lat:38.654241, lng:-90.289301, dir:"5860 Delmar Boulevard", tel:"+13144549663", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "university-heights-ohio": {nombre:"University Heights", centro:[41.497831, -81.537346], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.502432, lng:-81.53885, dir:"13923 Cedar Road", tel:"+1 216-258-0643", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetPeople", cat:"tienda", lat:41.500966, lng:-81.538389, dir:"13932 Cedar Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "university-park": {nombre:"University Park", centro:[41.440034, -87.683377], tz:"America/Chicago", lugares:[
  {n:"VCA Animal Hospital", cat:"vet", lat:41.448391, lng:-87.670462, dir:"24341 South Western Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "upper-arlington": {nombre:"Upper Arlington", centro:[40.007389, -83.058165], tz:"America/New_York", lugares:[
  {n:"COVE Pet Care - Columbus", cat:"vet", lat:40.026049, lng:-83.014197, dir:"3134 North High Street", tel:"+1-740-481-2683", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Upper Arlington Veterinary Hospital", cat:"vet", lat:40.006747, lng:-83.050268, dir:"1515 West Lane Avenue", tel:"+1-614-481-8014", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Clintonville Animal Hospital", cat:"vet", lat:40.024223, lng:-83.014171, dir:"3045 North High Street", tel:"+1 614-263-6730", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetPeople", cat:"tienda", lat:40.020511, lng:-83.013216, dir:"2863 North High Street", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.007291, lng:-83.047294, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Mutts and Co", cat:"tienda", lat:40.006751, lng:-83.051621, horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:40.006888, lng:-83.051615, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Knapp Vererinary Hospital", cat:"vet", lat:40.033603, lng:-82.999652, horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pets Without Parents", cat:"refugio", lat:40.032696, lng:-82.998661, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:40.004553, lng:-83.090152, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:40.004767, lng:-83.089726, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "urbana": {nombre:"Urbana", centro:[40.111717, -88.207301], tz:"America/Chicago", lugares:[
  {n:"Caring Hands Animal Hospital", cat:"vet", lat:40.097776, lng:-88.190333, dir:"1704 Philo Road", tel:"+1-217-328-5350", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Good Friends Animal Hospital", cat:"vet", lat:40.113212, lng:-88.197234, dir:"908 East Main Street", tel:"+1-217-344-1017", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Beaumont Animal Clinic", cat:"vet", lat:40.125854, lng:-88.199678, dir:"1304 North Cunningham Avenue", tel:"+1-217-367-1187", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"A & E Animal Hospital", cat:"vet", lat:40.083497, lng:-88.166925, dir:"3003 East Windsor Road", tel:"+1-217-367-1137", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Little Red Dog House", cat:"peluqueria", lat:40.113255, lng:-88.193601, dir:"1208 East Main Street", tel:"+1-217-384-1991", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fox Hollow Farm", cat:"refugio", lat:40.104895, lng:-88.129157, dir:"1779 CR 1550N", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Medicine Basic Sciences Building", cat:"vet", lat:40.092964, lng:-88.220951, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Urbana Dog Park", cat:"parque", lat:40.126314, lng:-88.188823, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fairlawn Dog Park", cat:"parque", lat:40.10416, lng:-88.203686, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "urbancrest": {nombre:"Urbancrest", centro:[39.897563, -83.086853], tz:"America/New_York", lugares:[
  {n:"PetSuites", cat:"refugio", lat:39.877127, lng:-83.030841, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "urbandale": {nombre:"Urbandale", centro:[41.627451, -93.738024], tz:"America/Chicago", lugares:[
  {n:"The Barking Lot", cat:"tienda", lat:41.625571, lng:-93.753859, dir:"3235 99th Street", tel:"+1-515-331-4628", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Craze Performance Center", cat:"refugio", lat:41.624184, lng:-93.760109, dir:"3101 104th St", tel:"+1 515-222-1112", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Groomers Inc.", cat:"tienda", lat:41.608285, lng:-93.737474, dir:"1800 Northwest 86th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northwest Veterinary Hospital", cat:"vet", lat:41.628596, lng:-93.722033, dir:"7507 Dennis Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Urban Pet Hospital & Resort", cat:"vet", lat:41.628112, lng:-93.760197, dir:"3601 104th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westfield Veterinary Hospital", cat:"vet", lat:41.658822, lng:-93.739693, dir:"8789 Northwest 54th Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Value Vet", cat:"vet", lat:41.655265, lng:-93.739857, dir:"8851 Northpark Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Side Veterinary Clinic", cat:"vet", lat:41.622826, lng:-93.735922, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "utica": {nombre:"Utica", centro:[38.33368, -85.653573], tz:"America/New_York", lugares:[
  {n:"Access Veterinary Care", cat:"vet", lat:38.350696, lng:-85.703806, dir:"5012 1/2 State Road 62", tel:"+1-812-590-3081", horas:[9.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Dogwood Inn & Kennel", cat:"refugio", lat:38.350489, lng:-85.703932, dir:"5012 State Road 62", tel:"+1-812-283-6960", horas:[8.5, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"PetVet 365", cat:"vet", lat:38.336252, lng:-85.707082, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Feeder's Supply", cat:"tienda", lat:38.335784, lng:-85.708796, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Fur Fun", cat:"refugio", lat:38.358923, lng:-85.701877, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "utica-michigan": {nombre:"Utica", centro:[42.626145, -83.033538], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.627967, lng:-82.998759, dir:"45050 Northpointe Boulevard", tel:"+1 586-323-7030", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:42.625762, lng:-82.991453, dir:"13701 Lakeside CR", tel:"+1 586-532-8794", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Bark Avenue Play & Stay", cat:"refugio", lat:42.624485, lng:-83.04067, dir:"44900 Utica Road", tel:"+1-586-739-2275", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Cuts", cat:"peluqueria", lat:42.624421, lng:-83.040469, dir:"44860 Utica Road", tel:"+1-586-991-4240", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Spotted Nose Designs", cat:"tienda", lat:42.624324, lng:-83.040316, dir:"44840 Utica Road", tel:"+1-248-988-9773", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pioneer Park Dog Park", cat:"parque", lat:42.630826, lng:-83.038453, dir:"7505 Hahn Street", horas:[6.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Magoo's Pet Outlet Utica", cat:"tienda", lat:42.631845, lng:-82.993997, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "valders": {nombre:"Valders", centro:[44.066104, -87.884258], tz:"America/Chicago", lugares:[
  {n:"Valders Veterinary Clinic", cat:"vet", lat:44.063315, lng:-87.886032, dir:"421 Calumet Drive", tel:"+1 920-775-4200", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "valley-center-kansas": {nombre:"Valley Center", centro:[37.834734, -97.373376], tz:"America/Chicago", lugares:[
  {n:"Ark Valley Animal Hospital", cat:"vet", lat:37.833031, lng:-97.372999, dir:"122 North Park Avenue", tel:"+13162016690", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Valley Center Veterinary Clinic", cat:"vet", lat:37.832443, lng:-97.372896, dir:"122 West Main Street", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PawPrints Pet Supply", cat:"tienda", lat:37.832463, lng:-97.373068, dir:"126 West Main Street", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Backroads Grooming", cat:"peluqueria", lat:37.811791, lng:-97.414354, dir:"6106 West 69th Street North", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wag'en Tail Ranch", cat:"refugio", lat:37.811976, lng:-97.414673, dir:"6106 West 69th Street North", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "valley-city": {nombre:"Valley City", centro:[46.923313, -98.003155], tz:"America/Chicago", lugares:[
  {n:"VC Vet", cat:"vet", lat:46.920732, lng:-98.017774, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "valley-park": {nombre:"Valley Park", centro:[38.54936, -90.491272], tz:"America/Chicago", lugares:[
  {n:"World Bird Sanctuary", cat:"zoo", lat:38.535388, lng:-90.534935, dir:"125 Bald Eagle Ridge Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Missouri House Rabbit Society - St. Louis Chapter", cat:"refugio", lat:38.531796, lng:-90.498091, dir:"75 Elizabeth Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bentley Animal Hospital", cat:"vet", lat:38.530308, lng:-90.491416, dir:"1819 Smizer Station Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Treecourt Unleashed Dog Adventure Park", cat:"parque", lat:38.556901, lng:-90.460638, dir:"2499 Marshall Rd", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wolf Sanctuary", cat:"zoo", lat:38.529509, lng:-90.559421, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "valley-view": {nombre:"Valley View", centro:[41.387831, -81.604568], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.397881, lng:-81.59554, dir:"12662 Rockside Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "valleyview": {nombre:"Valleyview", centro:[39.965271, -83.070743], tz:"America/New_York", lugares:[
  {n:"Pet Valu", cat:"tienda", lat:39.956646, lng:-83.095142, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "valparaiso-indiana": {nombre:"Valparaiso", centro:[41.467255, -87.060449], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.467415, lng:-87.027648, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Smoochie Pooch", cat:"peluqueria", lat:41.483915, lng:-87.052536, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vale Park Animal Hospital", cat:"vet", lat:41.491815, lng:-87.017844, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "van-buren-charter-township": {nombre:"Van Buren Charter Township", centro:[42.220798, -83.484146], tz:"America/New_York", lugares:[
  {n:"Healthy Paws Veterinary Hospital", cat:"vet", lat:42.224336, lng:-83.483694, tel:"+1-734-697-1400", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Feed Rite's Pet Warehouse", cat:"tienda", lat:42.21545, lng:-83.48693, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Exotic Bird Shop", cat:"tienda", lat:42.217406, lng:-83.542489, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vandalia-ohio": {nombre:"Vandalia", centro:[39.890612, -84.198831], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.874606, lng:-84.14003, dir:"8281 Old Troy Pike", tel:"+1 937-236-1335", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petsmart grooming", cat:"peluqueria", lat:39.874933, lng:-84.137765, dir:"8281 Old Troy Pike", tel:"+1-937-236-1335", horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:39.891554, lng:-84.19309, dir:"361 East National Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park Offleash", cat:"parque", lat:39.841554, lng:-84.181583, dir:"6794 Webster Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Montgomery County Bark Park", cat:"parque", lat:39.84234, lng:-84.179672, dir:"6790 Webster Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vassar": {nombre:"Vassar", centro:[43.372064, -83.583449], tz:"America/New_York", lugares:[
  {n:"Vassar Veterinary", cat:"vet", lat:43.371778, lng:-83.583375, dir:"107 South Main Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tucker Farms Pet Meds", cat:"tienda", lat:43.368315, lng:-83.565573, dir:"957 East Huron Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "veedersburg": {nombre:"Veedersburg", centro:[40.113095, -87.26251], tz:"America/Chicago", lugares:[
  {n:"West Central Veterinary Services", cat:"vet", lat:40.11543, lng:-87.274383, dir:"212 US HWY 136", tel:"+17652942203", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vergas": {nombre:"Vergas", centro:[46.656626, -95.805326], tz:"America/Chicago", lugares:[
  {n:"Trowbridge Creek Zoo", cat:"zoo", lat:46.695283, lng:-95.854629, tel:"+1-218-731-8711", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Bro Stables", cat:"zoo", lat:46.600652, lng:-95.82505, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Horse Pasture", cat:"zoo", lat:46.601746, lng:-95.824607, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vermilion-ohio": {nombre:"Vermilion", centro:[41.421989, -82.364607], tz:"America/New_York", lugares:[
  {n:"Pet Depot", cat:"tienda", lat:41.425615, lng:-82.339988, dir:"4340 Liberty Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rocky & Lela's Boutique", cat:"tienda", lat:41.422153, lng:-82.365069, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tails of Vermillion", cat:"tienda", lat:41.421542, lng:-82.364773, horas:[11.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "vermillion-south-dakota": {nombre:"Vermillion", centro:[42.779527, -96.929101], tz:"America/Chicago", lugares:[
  {n:"Vermillion Veterinary Clinic", cat:"vet", lat:42.788843, lng:-96.909707, dir:"825 North Norbeck Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vermillion-south-dakota-2": {nombre:"Vermillion", centro:[42.778741, -96.929601], tz:"America/Chicago", lugares:[
  {n:"The Coyote Clipper", cat:"tienda", lat:42.779195, lng:-96.933313, dir:"14 West Main Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vernon-hills": {nombre:"Vernon Hills", centro:[42.237315, -87.964949], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.237598, lng:-87.945343, dir:"700 North Milwaukee Avenue", tel:"+1 847-816-6251", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Townline Animal Hospital", cat:"vet", lat:42.238752, lng:-87.952692, dir:"555 Townline Road", tel:"+18475493187", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Vernon Hills Animal Hospital", cat:"vet", lat:42.245095, lng:-87.979377, dir:"1260 South Butterfield Road", tel:"+1-847-367-4070", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "verona-wisconsin": {nombre:"Verona", centro:[42.990549, -89.533558], tz:"America/Chicago", lugares:[
  {n:"Verona Veterinary Medical Service S.C.", cat:"vet", lat:42.987231, lng:-89.547641, dir:"655 Half Mile Road", tel:"+1-608-845-6512", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tabby & Jack's", cat:"tienda", lat:42.98974, lng:-89.536447, dir:"301 West Verona Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Badger Prairie Dog Park", cat:"parque", lat:42.999922, lng:-89.511586, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small dog park", cat:"parque", lat:42.998032, lng:-89.513687, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "versailles-indiana": {nombre:"Versailles", centro:[39.072003, -85.251911], tz:"America/New_York", lugares:[
  {n:"Laughery Valley Veterinary Hospital", cat:"vet", lat:39.061085, lng:-85.189507, dir:"3908 East United States Highway 50", tel:"+1-812-689-6984", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "versailles-ohio": {nombre:"Versailles", centro:[40.222569, -84.484436], tz:"America/New_York", lugares:[
  {n:"Bruns Animal Clinic", cat:"vet", lat:40.225607, lng:-84.488304, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "victoria-kansas": {nombre:"Victoria", centro:[38.849833, -99.146296], tz:"America/Chicago", lugares:[
  {n:"Humane Society of the High Plains", cat:"refugio", lat:38.850004, lng:-99.235181, dir:"2050 Old Highway 40", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vienna-missouri": {nombre:"Vienna", centro:[38.186712, -91.947297], tz:"America/Chicago", lugares:[
  {n:"Vienna Ceterinary Clinic", cat:"vet", lat:38.184904, lng:-91.946726, dir:"302 South Main Street", tel:"+1-573-422-3437", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "villa-park-illinois": {nombre:"Villa Park", centro:[41.889312, -87.977837], tz:"America/Chicago", lugares:[
  {n:"Good Dog", cat:"refugio", lat:41.890115, lng:-87.99787, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "villa-ridge": {nombre:"Villa Ridge", centro:[38.472552, -90.886804], tz:"America/Chicago", lugares:[
  {n:"Homestead Veterinary Hospital", cat:"vet", lat:38.474686, lng:-90.867725, dir:"105 Whispering Hope Drive", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "virginia-minnesota": {nombre:"Virginia", centro:[47.52326, -92.536571], tz:"America/Chicago", lugares:[
  {n:"Grooming By Jane", cat:"tienda", lat:47.517961, lng:-92.559088, dir:"1517 8th Street South", tel:"+1-218-741-2117", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Critter Care Pet Clinic", cat:"vet", lat:47.511623, lng:-92.533063, dir:"1315 South 2nd Avenue West", tel:"+1-218-741-2128", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"GroomingDales", cat:"tienda", lat:47.512117, lng:-92.532401, dir:"130 12th Street South", tel:"+1-218-749-8110", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "viroqua": {nombre:"Viroqua", centro:[43.556917, -90.888741], tz:"America/Chicago", lugares:[
  {n:"Animal Tracks", cat:"vet", lat:43.574486, lng:-90.885727, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wabash": {nombre:"Wabash", centro:[40.797821, -85.820541], tz:"America/New_York", lugares:[
  {n:"J & K's Mega Pet!", cat:"tienda", lat:40.817013, lng:-85.837317, dir:"1425 North Cass Street", tel:"+1-260-563-0352", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dawg Park", cat:"parque", lat:40.792016, lng:-85.824513, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wadsworth": {nombre:"Wadsworth", centro:[42.428679, -87.906725], tz:"America/Chicago", lugares:[
  {n:"Waukegan Savanna Off-Leash Dog Area", cat:"parque", lat:42.415957, lng:-87.901445, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wadsworth-ohio": {nombre:"Wadsworth", centro:[41.02561, -81.729852], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:41.042855, lng:-81.694911, dir:"1052 Williams Reserve Boulevard", tel:"+1 330-336-9454", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "wahoo": {nombre:"Wahoo", centro:[41.211108, -96.619799], tz:"America/Chicago", lugares:[
  {n:"Saunders County Lost Pets - Pet Rescue", cat:"refugio", lat:41.210247, lng:-96.621816, dir:"226 West 5th Street", tel:"+1-402-432-2814", horas:[8.0, 9.0], nota:"Dato de OpenStreetMap"},
  {n:"Green Acre Animal Clinic", cat:"vet", lat:41.189252, lng:-96.621574, dir:"1276 County Road 17", tel:"+1-402-443-3289", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Doc Little Dog Park", cat:"parque", lat:41.219419, lng:-96.631829, dir:"1449 North Hackberry Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wahpeton-north-dakota": {nombre:"Wahpeton", centro:[46.265879, -96.608863], tz:"America/Chicago", lugares:[
  {n:"Chahinkapa Zoo", cat:"zoo", lat:46.275045, lng:-96.597499, dir:"1004 R J Hughes Drive", tel:"+1-701-642-8709", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "waite-park": {nombre:"Waite Park", centro:[45.553713, -94.233463], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:45.548697, lng:-94.221238, dir:"320 2nd Street South", tel:"+1 320-251-4459", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:45.549202, lng:-94.21727, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wakarusa": {nombre:"Wakarusa", centro:[41.536088, -86.021028], tz:"America/New_York", lugares:[
  {n:"Equine Veterinary Hospital", cat:"vet", lat:41.548884, lng:-86.132249, dir:"13752 Osborne Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dr. Weldys Associates", cat:"vet", lat:41.536575, lng:-86.020717, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Galaxy Grooming", cat:"peluqueria", lat:41.535543, lng:-86.020807, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wakeman": {nombre:"Wakeman", centro:[41.254587, -82.399659], tz:"America/New_York", lugares:[
  {n:"Vermilion River", cat:"vet", lat:41.255348, lng:-82.391489, dir:"79 East Main Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waldo-ohio": {nombre:"Waldo", centro:[40.45837, -83.076543], tz:"America/New_York", lugares:[
  {n:"Waldo Animal Clinic", cat:"vet", lat:40.457874, lng:-83.0771, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "walker-michigan": {nombre:"Walker", centro:[43.005597, -85.774191], tz:"America/New_York", lugares:[
  {n:"Chow Hound Pet Supplies", cat:"tienda", lat:42.97189, lng:-85.778796, dir:"4482 Lake Michigan Drive Northwest", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:43.028591, lng:-85.690031, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Standale Animal Hospital", cat:"vet", lat:42.973253, lng:-85.766067, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of West Michigan", cat:"refugio", lat:43.019455, lng:-85.784538, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "walker-minnesota": {nombre:"Walker", centro:[47.101553, -94.579844], tz:"America/Chicago", lugares:[
  {n:"Walker Animal Hospital", cat:"vet", lat:47.097834, lng:-94.587155, dir:"306 8th Street", tel:"+1-218-547-3222", horas:[8.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "walled-lake": {nombre:"Walled Lake", centro:[42.537811, -83.481048], tz:"America/New_York", lugares:[
  {n:"Country Ridge Animal Hospital", cat:"vet", lat:42.525695, lng:-83.436704, dir:"31178 Haggerty Road", tel:"+1 248 661-3480", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.532592, lng:-83.441643, dir:"385 Haggerty Highway", tel:"+1 248-624-4752", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Walled Lake Veterinary Hospital", cat:"vet", lat:42.539505, lng:-83.471285, dir:"1501 East West Maple Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VetSelect Animal Hospital of Novi", cat:"vet", lat:42.50927, lng:-83.477274, horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "walnut-creek-ohio": {nombre:"Walnut Creek", centro:[40.541452, -81.721796], tz:"America/New_York", lugares:[
  {n:"The Farm at Walnut Creek", cat:"zoo", lat:40.522778, lng:-81.737201, dir:"4147 CR 114", horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "walworth": {nombre:"Walworth", centro:[42.531099, -88.599538], tz:"America/Chicago", lugares:[
  {n:"Geneva Lakes Animal Hospital", cat:"vet", lat:42.530665, lng:-88.584165, dir:"100 Ridge Road", tel:"+12622753303", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pet Gourmet", cat:"tienda", lat:42.530634, lng:-88.589973, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spirit of Grooming", cat:"peluqueria", lat:42.531976, lng:-88.600414, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wamego": {nombre:"Wamego", centro:[39.201941, -96.304998], tz:"America/Chicago", lugares:[
  {n:"Green Valley Veterinary Service", cat:"vet", lat:39.225072, lng:-96.312701, dir:"5210 Highway 99", tel:"+1 785-456-7577", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Deer Creek Veterinary Hospital", cat:"vet", lat:39.210768, lng:-96.31007, dir:"1202 Lilac Lane", tel:"+1-785-456-3300", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Wamego Veterinary Clinic", cat:"vet", lat:39.210817, lng:-96.324194, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wapakoneta": {nombre:"Wapakoneta", centro:[40.567827, -84.193559], tz:"America/New_York", lugares:[
  {n:"Wapakoneta Dog Park", cat:"parque", lat:40.557851, lng:-84.193045, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "warren-michigan": {nombre:"Warren", centro:[42.493257, -83.006275], tz:"America/New_York", lugares:[
  {n:"Hoover Road Animal Hospital", cat:"vet", lat:42.522725, lng:-83.007201, dir:"31170 Hoover Road", tel:"+1-586-795-3500", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Warren Animal Clinic", cat:"vet", lat:42.5291, lng:-83.028755, dir:"31980 Van Dyke Avenue", tel:"+1-586-264-4621", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.486786, lng:-83.005629, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "warren-ohio": {nombre:"Warren", centro:[41.236795, -80.819042], tz:"America/New_York", lugares:[
  {n:"Countryside Veterinary Service", cat:"vet", lat:41.285861, lng:-80.845598, dir:"4680 Mahoning Avenue Northwest", tel:"+1-330-847-7205", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "warren-park": {nombre:"Warren Park", centro:[39.781987, -86.050262], tz:"America/New_York", lugares:[
  {n:"Brookville Road Animal Hospital", cat:"vet", lat:39.749207, lng:-86.024896, dir:"8049 Brookville Road", tel:"+1-317-353-6143", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Indy Paws Veterinary Hospital", cat:"vet", lat:39.788083, lng:-86.083618, dir:"1502 North Emerson Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Fuffy Puppy", cat:"peluqueria", lat:39.772115, lng:-86.050558, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Irvington Pet Clinic", cat:"vet", lat:39.772113, lng:-86.050736, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"F.I.D.O. Pet Food Pantry", cat:"peluqueria", lat:39.788569, lng:-86.101695, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Way Animal Clinic - Irvington", cat:"vet", lat:39.770521, lng:-86.072151, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "warrensburg-missouri": {nombre:"Warrensburg", centro:[38.762437, -93.74096], tz:"America/Chicago", lugares:[
  {n:"Country Pets and Ponds", cat:"tienda", lat:38.796392, lng:-93.742907, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Old Drum Dog Park", cat:"parque", lat:38.770972, lng:-93.761961, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "warrenville-illinois": {nombre:"Warrenville", centro:[41.81793, -88.174097], tz:"America/Chicago", lugares:[
  {n:"Spotted Paw Pet Supplies & Grooming", cat:"peluqueria", lat:41.802111, lng:-88.173704, dir:"28341 West Diehl Road", tel:"+1 630 225 9457", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"A.D.O.P.T. Pet Shelter", cat:"refugio", lat:41.778246, lng:-88.215574, dir:"420 Industrial Drive", tel:"+1 630 355 2299", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A.D.O.P.T. Clinic", cat:"vet", lat:41.778551, lng:-88.216543, dir:"425 Industrial Drive", tel:"+1-630-355-2299", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blackwell", cat:"parque", lat:41.840945, lng:-88.197449, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "warsaw-indiana": {nombre:"Warsaw", centro:[41.238102, -85.853054], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.279956, lng:-85.854957, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "warson-woods": {nombre:"Warson Woods", centro:[38.606282, -90.389974], tz:"America/Chicago", lugares:[
  {n:"The Little House of Dogs", cat:"tienda", lat:38.599885, lng:-90.406078, dir:"1050 North Kirkwood Road", tel:"+1 314 909 7833", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "washburn-wisconsin": {nombre:"Washburn", centro:[46.673277, -90.894905], tz:"America/Chicago", lugares:[
  {n:"Washburn Dogsenter", cat:"tienda", lat:46.673652, lng:-90.889882, dir:"30 East Bayfield Street", tel:"+1-715-812-1009", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Helping PAWS Pet Rescue", cat:"refugio", lat:46.671361, lng:-90.8934, dir:"126 West Bayfield Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "washington-charter-township": {nombre:"Washington Charter Township", centro:[42.757092, -83.037304], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.771839, lng:-83.016372, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stony Creek Dog Park", cat:"parque", lat:42.729782, lng:-83.0653, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shelby Vetinary Hospital", cat:"vet", lat:42.713344, lng:-83.037532, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "washington-court-house": {nombre:"Washington Court House", centro:[39.536451, -83.439084], tz:"America/New_York", lugares:[
  {n:"Fayette Veterinary Hospital", cat:"vet", lat:39.553193, lng:-83.421282, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "washington-illinois": {nombre:"Washington", centro:[40.703399, -89.406511], tz:"America/Chicago", lugares:[
  {n:"Washington \"Bark\" District", cat:"parque", lat:40.689083, lng:-89.462642, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "washington-missouri": {nombre:"Washington", centro:[38.558107, -91.012088], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.534665, lng:-90.980757, dir:"3152 Phoenix Center Drive", tel:"+1 636-392-5135", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.53757, lng:-91.003614, dir:"1080 Washington Square Center", tel:"+1 636-390-2411", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"York's Pet Grooming", cat:"peluqueria", lat:38.537426, lng:-91.002419, dir:"1145 Clock Tower Plaza", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Washington Veterinary Clinic", cat:"vet", lat:38.537207, lng:-90.979895, dir:"5585 MO-100", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Clinic", cat:"vet", lat:38.546811, lng:-90.990927, dir:"1750 East 5th Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "washingtonville-ohio": {nombre:"Washingtonville", centro:[40.900337, -80.763967], tz:"America/New_York", lugares:[
  {n:"Worlds Largest Cat Tree", cat:"refugio", lat:40.944481, lng:-80.739812, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waterford-charter-township": {nombre:"Waterford Charter Township", centro:[42.670639, -83.389624], tz:"America/New_York", lugares:[
  {n:"Family Pet Practice", cat:"vet", lat:42.639395, lng:-83.371178, horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pontiac Lake Dog Park", cat:"parque", lat:42.671792, lng:-83.444092, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.696791, lng:-83.394397, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canine Resolution", cat:"refugio", lat:42.690228, lng:-83.371461, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waterford-wisconsin": {nombre:"Waterford", centro:[42.763072, -88.214256], tz:"America/Chicago", lugares:[
  {n:"Midwest Pet Feed", cat:"tienda", lat:42.764868, lng:-88.209666, dir:"200 North Milwaukee Street", tel:"+12623327468", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waterloo": {nombre:"Waterloo", centro:[38.335886, -90.149834], tz:"America/Chicago", lugares:[
  {n:"Waterloo Animal Hospital", cat:"vet", lat:38.331946, lng:-90.157303, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waterloo-indiana-2": {nombre:"Waterloo", centro:[41.431836, -85.02139], tz:"America/New_York", lugares:[
  {n:"Waggin Tails Pet Salon", cat:"peluqueria", lat:41.432464, lng:-85.020246, dir:"325 North Wayne Street", tel:"+1-260-837-3090", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "waterloo-iowa": {nombre:"Waterloo", centro:[42.498275, -92.332874], tz:"America/Chicago", lugares:[
  {n:"Happy Dog Daycare", cat:"refugio", lat:42.492679, lng:-92.338562, dir:"800 Jefferson Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waterloo Dog Park", cat:"parque", lat:42.48449, lng:-92.379075, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waterloo-nebraska": {nombre:"Waterloo", centro:[41.286943, -96.28558], tz:"America/Chicago", lugares:[
  {n:"All About Pets Veterinary Center", cat:"vet", lat:41.247173, lng:-96.19481, dir:"17849 Pierce Plaza", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ridgeview Animal Hospital", cat:"vet", lat:41.233606, lng:-96.198176, dir:"18142 Wright Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Center of West Omaha", cat:"vet", lat:41.26203, lng:-96.161863, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waterman": {nombre:"Waterman", centro:[41.771696, -88.773694], tz:"America/Chicago", lugares:[
  {n:"Off-Leash Dog Area (Except Ap 1-July15)", cat:"parque", lat:41.818003, lng:-88.733462, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Off-Leash Dog Area (Except Ap1-July15)", cat:"parque", lat:41.818123, lng:-88.726573, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "watertown-south-dakota": {nombre:"Watertown", centro:[44.899211, -97.115289], tz:"America/Chicago", lugares:[
  {n:"Bramble Park Zoo", cat:"zoo", lat:44.909707, lng:-97.129272, dir:"800 10th Street NW", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Glacial Lakes Veterinary Clinic", cat:"vet", lat:44.889701, lng:-97.097284, dir:"1200 9th Avenue Southeast", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Critter Mart", cat:"tienda", lat:44.903299, lng:-97.131674, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Howard Veterinary Clinic", cat:"vet", lat:44.914404, lng:-97.135923, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barkin' Beauties", cat:"peluqueria", lat:44.905153, lng:-97.131122, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Midwest", cat:"vet", lat:44.909527, lng:-97.132693, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "watertown-wisconsin": {nombre:"Watertown", centro:[43.194335, -88.724182], tz:"America/Chicago", lugares:[
  {n:"Rock River Veterinary", cat:"vet", lat:43.197156, lng:-88.754137, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gental Healer", cat:"vet", lat:43.206287, lng:-88.732877, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waterville-ohio": {nombre:"Waterville", centro:[41.500886, -83.71827], tz:"America/New_York", lugares:[
  {n:"Woofgang Dog Daycare", cat:"refugio", lat:41.499748, lng:-83.642156, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waubeka": {nombre:"Waubeka", centro:[43.474999, -87.99037], tz:"America/Chicago", lugares:[
  {n:"Fredonia Veterinary Clinic", cat:"vet", lat:43.469524, lng:-87.981384, dir:"W3919 County Road A/H", tel:"+1-262-692-2439", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wauconda": {nombre:"Wauconda", centro:[42.258912, -88.139247], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.258922, lng:-88.151896, dir:"535 West Liberty Street", tel:"+1-847-865-5695", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pets & Things Grooming", cat:"peluqueria", lat:42.259108, lng:-88.140137, dir:"213 North Main Street", tel:"+1-847-526-5510", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wag n Wheel", cat:"peluqueria", lat:42.256867, lng:-88.144306, dir:"375 West Liberty Street", tel:"+1-847-487-4990", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Wauconda Animal Hospital", cat:"vet", lat:42.256363, lng:-88.14838, dir:"197 Thomas Court", tel:"+1-847-526-2727", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Lakewood Off-Leash Dog Area", cat:"parque", lat:42.264865, lng:-88.098326, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waukee": {nombre:"Waukee", centro:[41.611849, -93.884513], tz:"America/Chicago", lugares:[
  {n:"Dogtopia", cat:"refugio", lat:41.619171, lng:-93.902423, dir:"1500 Northwest Gettysburg Lane", tel:"+1-515-220-8181", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bone-A-Patreat", cat:"tienda", lat:41.599394, lng:-93.834195, dir:"9250 University Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"4 Paws Unleashed", cat:"tienda", lat:41.615555, lng:-93.830385, dir:"15303 Hickman Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kinship Brewing Company Dog Park", cat:"parque", lat:41.619092, lng:-93.897013, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Trailside Dog Park", cat:"parque", lat:41.607396, lng:-93.849771, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waukesha": {nombre:"Waukesha", centro:[43.01156, -88.231635], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:42.990795, lng:-88.259264, dir:"1240 West Sunset Drive", tel:"+1 262-521-1926", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Waukesha Animal Hospital", cat:"vet", lat:43.039096, lng:-88.219842, dir:"W237N660 Oakridge Drive", tel:"+1-262-542-2541", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"WVRC - Waukesha", cat:"vet", lat:43.04515, lng:-88.224273, dir:"W293 N1046 Pewaukee Road", tel:"+1-262-542-3241", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "waunakee": {nombre:"Waunakee", centro:[43.191962, -89.45484], tz:"America/Chicago", lugares:[
  {n:"Canine Corner", cat:"peluqueria", lat:43.169876, lng:-89.461075, tel:"+1-608-837-2626", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animart", cat:"tienda", lat:43.169891, lng:-89.461293, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Luna Pet Resort", cat:"vet", lat:43.18627, lng:-89.428838, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ripp Park Dog Park", cat:"parque", lat:43.19104, lng:-89.47601, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waunakee Veterinary Clinic", cat:"vet", lat:43.180059, lng:-89.430361, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waupaca": {nombre:"Waupaca", centro:[44.358035, -89.085946], tz:"America/Chicago", lugares:[
  {n:"Waypaca Small Animal Hospital In Llc", cat:"vet", lat:44.346189, lng:-89.100684, dir:"780 Bowling Lane", tel:"+1 715-268-3343", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Countryside Animal Hospital", cat:"vet", lat:44.373601, lng:-89.09342, dir:"E2691 Larson Road", tel:"+1 715-258-2200", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waupun": {nombre:"Waupun", centro:[43.633216, -88.729635], tz:"America/Chicago", lugares:[
  {n:"Waupan Dog Park", cat:"parque", lat:43.645899, lng:-88.727415, dir:"N2389 County Highway M", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wausau": {nombre:"Wausau", centro:[44.959786, -89.627279], tz:"America/Chicago", lugares:[
  {n:"Marathon Animal Hospital", cat:"vet", lat:44.948976, lng:-89.655037, dir:"1025 South 17th Avenue", tel:"+1-715-845-1919", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Wisconsin Valley Vet Services", cat:"vet", lat:44.988471, lng:-89.657696, dir:"1605 Bovine Lane", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Marathon Town & Country Store", cat:"tienda", lat:44.988774, lng:-89.651259, dir:"1300 West Campus Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Katzenbarker's Natural Pet Foods & Supplies", cat:"tienda", lat:44.959707, lng:-89.638518, dir:"406 South 2nd Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Two Hearts Dog Park", cat:"parque", lat:44.955448, lng:-89.628314, dir:"224 South 4th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wausau Animal Hospital", cat:"vet", lat:44.945273, lng:-89.613793, dir:"1006 Townline Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wauseon": {nombre:"Wauseon", centro:[41.546069, -84.136205], tz:"America/New_York", lugares:[
  {n:"Tony's Pet Shop", cat:"tienda", lat:41.569815, lng:-84.133745, dir:"1378 North Shoop Avenue", tel:"+1-419-335-0926", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wauwatosa": {nombre:"Wauwatosa", centro:[43.049412, -88.007927], tz:"America/Chicago", lugares:[
  {n:"Affordable Grooming Services Plus More", cat:"peluqueria", lat:43.092624, lng:-88.005932, dir:"7532 West Appleton Avenue", tel:"+1-262-458-8699", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fancy Pants Pet Salon", cat:"peluqueria", lat:43.060578, lng:-87.992882, dir:"6421 West North Avenue", tel:"+1 414-905-3647", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Beauty & The Barks", cat:"peluqueria", lat:43.060611, lng:-87.99904, dir:"6909 West North Avenue", tel:"+1 414-739-6295", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Chance's Express Doggie Spa", cat:"peluqueria", lat:43.090296, lng:-87.99919, dir:"6924 West Capitol Drive", tel:"+1 414-808-0020", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Bark n' Scratch Outpost", cat:"tienda", lat:43.036242, lng:-87.985544, dir:"5835 West Bluemound Road", tel:"+1-414-444-4110", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Surgery Specialists", cat:"vet", lat:43.0354, lng:-88.034345, dir:"9700 West Bluemound Road", tel:"+1-414-219-9990", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Center for Animal Health", cat:"vet", lat:43.04022, lng:-87.997631, dir:"827 North 68th Street", horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Wauwatosa Veterinary Clinic", cat:"vet", lat:43.06639, lng:-88.007159, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bentley's Pet Stuff", cat:"tienda", lat:43.048957, lng:-88.005345, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Paws", cat:"refugio", lat:43.043876, lng:-87.981214, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Health Center", cat:"vet", lat:43.034132, lng:-88.038026, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waverly-iowa": {nombre:"Waverly", centro:[42.725845, -92.474603], tz:"America/Chicago", lugares:[
  {n:"Lulu & BB's Pet Supply Co.", cat:"tienda", lat:42.725634, lng:-92.46962, horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Waverly Dog Park", cat:"parque", lat:42.710224, lng:-92.46258, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waverly-nebraska": {nombre:"Waverly", centro:[40.91742, -96.528167], tz:"America/Chicago", lugares:[
  {n:"Tomorrow's Veterinary Care", cat:"vet", lat:40.917682, lng:-96.529403, dir:"14110 Kenilworth Street", tel:"+1-402-786-2600", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Polaris Veterinary Clinic", cat:"vet", lat:40.834287, lng:-96.566616, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waverly-ohio": {nombre:"Waverly", centro:[39.126735, -82.985455], tz:"America/New_York", lugares:[
  {n:"Pike County Dog Pound", cat:"refugio", lat:39.163266, lng:-82.933297, dir:"2575 Alma Omega Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wayne": {nombre:"Wayne", centro:[41.951139, -88.270631], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.918683, lng:-88.266471, dir:"3853 East Main Street", tel:"+1 630-513-1170", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "wayne-nebraska": {nombre:"Wayne", centro:[42.230322, -97.017877], tz:"America/Chicago", lugares:[
  {n:"Wayne Bark Park", cat:"parque", lat:42.228142, lng:-97.005564, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "waynesville-missouri": {nombre:"Waynesville", centro:[37.814142, -92.226688], tz:"America/Chicago", lugares:[
  {n:"Kitten Division", cat:"vet", lat:37.808364, lng:-92.225589, dir:"320 Ichord Avenue", tel:"+1-573-336-3939", horas:[11.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"R Veterinary at Cross Creek", cat:"vet", lat:37.814406, lng:-92.220645, dir:"1135 US HIstoric Rt 66 West", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "wayzata": {nombre:"Wayzata", centro:[44.970759, -93.511947], tz:"America/Chicago", lugares:[
  {n:"Chuck and Don's", cat:"tienda", lat:44.972264, lng:-93.500984, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Golden Veterinary Care", cat:"vet", lat:44.972297, lng:-93.50144, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "weatherby-lake": {nombre:"Weatherby Lake", centro:[39.23778, -94.69607], tz:"America/Chicago", lugares:[
  {n:"Eagle Animal Hospital and Pet Resort", cat:"vet", lat:39.262344, lng:-94.669001, dir:"9300 North Congress Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Amity Woods Animal Hospital", cat:"vet", lat:39.252547, lng:-94.68866, dir:"9300 Northwest 87th Terrace", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "webb-city": {nombre:"Webb City", centro:[37.143574, -94.46347], tz:"America/Chicago", lugares:[
  {n:"Pet Clinic", cat:"vet", lat:37.127954, lng:-94.474805, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "webster-south-dakota": {nombre:"Webster", centro:[45.33218, -97.520089], tz:"America/Chicago", lugares:[
  {n:"Webster Paws Walk Dog Park", cat:"parque", lat:45.338578, lng:-97.518098, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "weldon-spring": {nombre:"Weldon Spring", centro:[38.716987, -90.650724], tz:"America/Chicago", lugares:[
  {n:"Wash ‘N Wag", cat:"tienda", lat:38.719464, lng:-90.703865, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wellington-ohio": {nombre:"Wellington", centro:[41.168587, -82.217568], tz:"America/New_York", lugares:[
  {n:"Happy Tails Dog Grooming", cat:"peluqueria", lat:41.168429, lng:-82.219127, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wells-michigan": {nombre:"Wells", centro:[45.777315, -87.079547], tz:"America/New_York", lugares:[
  {n:"Pooch Parlor", cat:"tienda", lat:45.763028, lng:-87.069381, dir:"1323 Sheridan Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wellston-missouri": {nombre:"Wellston", centro:[38.676188, -90.287516], tz:"America/Chicago", lugares:[
  {n:"Treats Unleashed", cat:"tienda", lat:38.640806, lng:-90.261888, dir:"22 North Euclid Avenue", tel:"+13148990966", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"City Cat Clinic", cat:"vet", lat:38.638708, lng:-90.258833, dir:"4491 Forest Park Avenue", tel:"+13146521919", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wellston-ohio": {nombre:"Wellston", centro:[39.123405, -82.532938], tz:"America/New_York", lugares:[
  {n:"Ohio Valley Animal Clinic", cat:"vet", lat:39.125136, lng:-82.533815, dir:"118 North Ohio Avenue", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "wentzville": {nombre:"Wentzville", centro:[38.824414, -90.868312], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:38.81857, lng:-90.874942, dir:"1846 Wentzville Parkway", tel:"+1 636-327-5125", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wentzville Animal Hospital", cat:"vet", lat:38.811288, lng:-90.872745, dir:"1120 West Pearce Boulevard", tel:"+1-636-332-4411", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Treats Unleashed", cat:"tienda", lat:38.822912, lng:-90.877396, dir:"1570 Wentzville Parkway", tel:"+16362789200", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bear Creek Animal Hospital", cat:"vet", lat:38.812365, lng:-90.8793, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-allis": {nombre:"West Allis", centro:[43.016681, -88.007031], tz:"America/Chicago", lugares:[
  {n:"Dog-Gone Lovely", cat:"tienda", lat:42.992226, lng:-88.050821, dir:"11076 West National Avenue", tel:"+1-414-327-0166", horas:[7.5, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Cutie Pups", cat:"peluqueria", lat:42.996168, lng:-88.008753, dir:"7645 West Beloit Road", tel:"+1-414-477-7173", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spirit of 76th Veterinary Clinic", cat:"vet", lat:43.003019, lng:-88.007723, dir:"7606 South 76th Street", tel:"+1-414-546-0750", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"The Fish Factory", cat:"tienda", lat:42.988443, lng:-88.028223, dir:"9218 West Oklahoma Avenue", tel:"+14145462201", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Pahle Animal Hospital", cat:"vet", lat:42.987632, lng:-88.048134, dir:"10827 West Oklahoma Avenue", tel:"+1-414-541-6440", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Milwaukee County Zoo", cat:"zoo", lat:43.031229, lng:-88.040304, dir:"10001 West Bluemound Road", tel:"+1-414-771-3040", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet World", cat:"tienda", lat:42.989477, lng:-88.045674, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Goat Yard", cat:"zoo", lat:43.030286, lng:-88.038139, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northwestern Mutual Family Farm", cat:"zoo", lat:43.030856, lng:-88.038803, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-baraboo": {nombre:"West Baraboo", centro:[43.474559, -89.769217], tz:"America/Chicago", lugares:[
  {n:"Sauk County Humane Society", cat:"vet", lat:43.475227, lng:-89.772588, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-bend-wisconsin": {nombre:"West Bend", centro:[43.425278, -88.183428], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:43.399611, lng:-88.186708, dir:"806 West Paradise Drive", tel:"+1 262-334-4785", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Decorah Animal Hospital LLC", cat:"vet", lat:43.411933, lng:-88.171882, dir:"555 East Decorah Road", tel:"+1-262-334-5551", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"peluqueria", lat:43.401096, lng:-88.180344, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heart & Soul Pet Clinic", cat:"vet", lat:43.427175, lng:-88.16463, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pooch Palace", cat:"peluqueria", lat:43.411453, lng:-88.180408, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Care Essentials Plus", cat:"tienda", lat:43.396878, lng:-88.193711, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-bloomfield-charter-township": {nombre:"West Bloomfield Charter Township", centro:[42.568407, -83.374033], tz:"America/New_York", lugares:[
  {n:"Premier Pet Supply", cat:"tienda", lat:42.545168, lng:-83.35976, horas:[8.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Valu", cat:"tienda", lat:42.528518, lng:-83.378419, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"TyVy Pet Hotel", cat:"refugio", lat:42.542391, lng:-83.362307, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-branch": {nombre:"West Branch", centro:[41.672074, -91.345973], tz:"America/Chicago", lugares:[
  {n:"The Family Pet", cat:"vet", lat:41.662033, lng:-91.345455, dir:"620 Division Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-branch-michigan": {nombre:"West Branch", centro:[44.276408, -84.238613], tz:"America/New_York", lugares:[
  {n:"Compassionate Veterinary Care", cat:"vet", lat:44.276105, lng:-84.255119, dir:"3197 West Houghton Avenue", tel:"+1-989-701-2929", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Unleashed Grooming & Spa", cat:"peluqueria", lat:44.276168, lng:-84.258831, dir:"3283 West M-55", tel:"+1-989-343-5063", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Branch Veterinary Services", cat:"vet", lat:44.279006, lng:-84.20654, dir:"1938 Dam Road", tel:"+1-989-345-5363", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-burlington": {nombre:"West Burlington", centro:[40.825083, -91.15655], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.816196, lng:-91.138967, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-carrollton": {nombre:"West Carrollton", centro:[39.672281, -84.252163], tz:"America/New_York", lugares:[
  {n:"Pets in Stitches", cat:"vet", lat:39.630734, lng:-84.228071, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawsitively Perfect Grooming", cat:"peluqueria", lat:39.641598, lng:-84.224049, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"MeowZa! Cat Boutique", cat:"tienda", lat:39.634703, lng:-84.220195, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"parque", lat:39.64356, lng:-84.236795, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-chicago": {nombre:"West Chicago", centro:[41.884751, -88.203961], tz:"America/Chicago", lugares:[
  {n:"Fermilab Dog Training Area", cat:"parque", lat:41.841061, lng:-88.233748, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-des-moines": {nombre:"West Des Moines", centro:[41.564448, -93.759406], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.563465, lng:-93.801092, dir:"6805 Mills Civic Parkway", tel:"+1 515-223-8580", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet", cat:"vet", lat:41.561186, lng:-93.771895, dir:"5045 Bentley Drive", tel:"+1-515-215-9696", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Three Dog Bakery", cat:"tienda", lat:41.560324, lng:-93.770403, dir:"650 South 50th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Doctors Veterinary Clinic", cat:"vet", lat:41.557898, lng:-93.769155, dir:"4800 Mills Civic Parkway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jordan Creek Animal Hospital", cat:"vet", lat:41.570579, lng:-93.750719, dir:"3401 E P True Parkway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Furry Friends Refuge", cat:"refugio", lat:41.568361, lng:-93.756929, dir:"3505 Mills Civic Parkway", horas:[15.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Paws & Pints", cat:"parque", lat:41.556545, lng:-93.70213, dir:"6218 Willowmere Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Raccoon River Dog Park", cat:"parque", lat:41.555975, lng:-93.72307, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park at the Cascades", cat:"parque", lat:41.553891, lng:-93.819338, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-dundee": {nombre:"West Dundee", centro:[42.098081, -88.282858], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:42.101637, lng:-88.287612, dir:"403 North 8th Street", tel:"+1 847-426-5616", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "west-fargo": {nombre:"West Fargo", centro:[46.874967, -96.900362], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:46.863518, lng:-96.852707, dir:"1126 43rd Street Southwest", tel:"+1 701-281-0010", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pets 'r Inn", cat:"tienda", lat:46.858756, lng:-96.845485, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:46.864128, lng:-96.874253, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-lafayette": {nombre:"West Lafayette", centro:[40.425869, -86.908066], tz:"America/Chicago", lugares:[
  {n:"Creekside Animal Hospital", cat:"vet", lat:40.453667, lng:-86.907581, dir:"180 Sagamore Parkway West", tel:"+1-765-742-0140", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pets & Vets as Partners", cat:"vet", lat:40.459058, lng:-86.926906, dir:"1220 Montgomery Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blair Animal Clinic", cat:"vet", lat:40.470295, lng:-86.953156, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Hollow Dog Park", cat:"parque", lat:40.436887, lng:-86.89985, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cumberland Dog Park", cat:"parque", lat:40.467858, lng:-86.9164, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cumberland Dog Park", cat:"parque", lat:40.467931, lng:-86.917605, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-middleton": {nombre:"West Middleton", centro:[43.060366, -89.587725], tz:"America/Chicago", lugares:[
  {n:"Grand Arbor Reserve Dog Park", cat:"parque", lat:43.059808, lng:-89.564997, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Timber Valley Apartments Dog Park", cat:"parque", lat:43.052765, lng:-89.55459, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-milwaukee": {nombre:"West Milwaukee", centro:[43.012514, -87.972586], tz:"America/Chicago", lugares:[
  {n:"Milwaukee Animal Hospital", cat:"vet", lat:42.988547, lng:-87.969326, dir:"4440 West Oklahoma Avenue", tel:"+1 414 545 5100", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"MADACC Milwaukee Area Domestic Animal Control Comission", cat:"refugio", lat:43.009739, lng:-87.961924, dir:"3839 West Burnham Street", tel:"+1-414-649-8640", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wisconsin Humane Society - Dalton Campus", cat:"refugio", lat:43.039273, lng:-87.969793, dir:"4500 West Wisconsin Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-peoria": {nombre:"West Peoria", centro:[40.692538, -89.627877], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:40.747999, lng:-89.635916, dir:"5001 Big Hollow Road", tel:"+1 309-691-9144", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.740141, lng:-89.634188, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vicary Bottoms Free Run Dog Exercise Area", cat:"parque", lat:40.709383, lng:-89.655636, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"upper dog park", cat:"parque", lat:40.708671, lng:-89.619914, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"lower dog park", cat:"parque", lat:40.70707, lng:-89.619494, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-plains": {nombre:"West Plains", centro:[36.728165, -91.852576], tz:"America/Chicago", lugares:[
  {n:"All Pet & Equine Supply", cat:"tienda", lat:36.738946, lng:-91.868409, dir:"1120 Porter Wagoner Boulevard", tel:"+1-417-257-7975", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Plains Veterinary Clinic", cat:"vet", lat:36.702054, lng:-91.879004, dir:"1716 US 160", tel:"+1 417-256-4515", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of West Plains", cat:"vet", lat:36.715795, lng:-91.851121, dir:"1101 MO-17", tel:"+1 417-256-6145", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Fishland", cat:"tienda", lat:36.728894, lng:-91.850626, dir:"205 Saint Louis Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Must Be Frenchies", cat:"refugio", lat:36.689769, lng:-91.889463, tel:"+1 417-257-7897", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tuk's Playground", cat:"parque", lat:36.722583, lng:-91.853933, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-point-indiana": {nombre:"West Point", centro:[40.344953, -87.042864], tz:"America/Chicago", lugares:[
  {n:"Town and County Veterinary", cat:"vet", lat:40.359927, lng:-86.999707, dir:"5000 State Road 25 South", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-point-nebraska": {nombre:"West Point", centro:[41.84027, -96.712073], tz:"America/Chicago", lugares:[
  {n:"Nebraska Veterinary Services", cat:"vet", lat:41.824078, lng:-96.707664, dir:"450 East Deere Street", tel:"+1 402 372 5114", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-saint-paul": {nombre:"West Saint Paul", centro:[44.910154, -93.080207], tz:"America/Chicago", lugares:[
  {n:"Skadron Animal Hospital", cat:"vet", lat:44.891596, lng:-93.077381, dir:"178 Marie Avenue East", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Just Paws", cat:"peluqueria", lat:44.909259, lng:-93.082305, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-union-ohio": {nombre:"West Union", centro:[38.795319, -83.546121], tz:"America/New_York", lugares:[
  {n:"Adams County Veterinary Services", cat:"vet", lat:38.793094, lng:-83.550995, dir:"125 Manchester Street", tel:"+1-937-779-3032", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Adams County", cat:"refugio", lat:38.786868, lng:-83.56375, dir:"11481 SR 41", tel:"+1 937-544-8585", horas:[11.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Mapogo K9", cat:"tienda", lat:38.809574, lng:-83.604883, dir:"9136 SR 136", tel:"+1 937-892-6379", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "western-springs": {nombre:"Western Springs", centro:[41.809613, -87.900671], tz:"America/Chicago", lugares:[
  {n:"Village Veterinary Practice", cat:"vet", lat:41.810838, lng:-87.89528, dir:"500 Hillgrove Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetPeople", cat:"tienda", lat:41.803349, lng:-87.890514, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hinsdale Humane Society", cat:"refugio", lat:41.822345, lng:-87.920638, horas:[12.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "westerville": {nombre:"Westerville", centro:[40.126139, -82.929529], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:40.111226, lng:-82.927239, dir:"565 South State Street", tel:"+1 614-891-7387", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Wags to Wiskers", cat:"peluqueria", lat:40.12596, lng:-82.932117, dir:"12 West College Avenue", tel:"+1-614-323-5860", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.144183, lng:-82.923203, dir:"690 North State Street", tel:"+1-614-794-9677", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.145182, lng:-82.987258, dir:"1184 Polaris Parkway", tel:"+1 614-785-0194", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"My Vet", cat:"vet", lat:40.149118, lng:-82.920189, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet People", cat:"tienda", lat:40.148429, lng:-82.919017, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Valu", cat:"tienda", lat:40.108451, lng:-82.928408, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Annehurst Veterinary Hospital", cat:"vet", lat:40.124789, lng:-82.944856, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Polaris", cat:"vet", lat:40.152182, lng:-82.997797, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"WestVets Westerville Veterinary Clinic", cat:"vet", lat:40.10414, lng:-82.92434, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "westfield-indiana": {nombre:"Westfield", centro:[40.042815, -86.127489], tz:"America/New_York", lugares:[
  {n:"The Integrative Veterinary Clinic", cat:"vet", lat:40.04314, lng:-86.150813, dir:"504 IN-32", tel:"+1-317-689-8582", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crate Escapes Dog Park + Bar", cat:"parque", lat:40.056474, lng:-86.142107, dir:"18595 Carousel Ln", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "westlake-ohio": {nombre:"Westlake", centro:[41.455323, -81.917917], tz:"America/New_York", lugares:[
  {n:"Paws & Effect (Dog Boarding)", cat:"refugio", lat:41.471372, lng:-81.895771, tel:"+14403317297", horas:[9.0, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.465804, lng:-81.951734, dir:"30008 Detroit Road", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "westland": {nombre:"Westland", centro:[42.323806, -83.400532], tz:"America/New_York", lugares:[
  {n:"Smooches For Pooches", cat:"peluqueria", lat:42.31581, lng:-83.407494, dir:"954 North Newburgh Road", tel:"+1-734-795-7363", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:42.337903, lng:-83.395686, dir:"35725 Warren Road", tel:"+1 734-641-8422", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"HomeTown Pet", cat:"tienda", lat:42.315998, lng:-83.407816, dir:"970 North Newburgh Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Medical Center", cat:"vet", lat:42.324342, lng:-83.415568, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "westmont": {nombre:"Westmont", centro:[41.795052, -87.975196], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.80967, lng:-87.972228, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "weston-missouri": {nombre:"Weston", centro:[39.414327, -94.900633], tz:"America/Chicago", lugares:[
  {n:"Goat Enclosure", cat:"zoo", lat:39.425533, lng:-94.898066, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pig Pen", cat:"zoo", lat:39.425447, lng:-94.898252, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "weston-wisconsin-2": {nombre:"Weston", centro:[44.905501, -89.572572], tz:"America/Chicago", lugares:[
  {n:"Weston Dog Park", cat:"parque", lat:44.907494, lng:-89.544831, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "westville-indiana": {nombre:"Westville", centro:[41.546323, -86.896924], tz:"America/Chicago", lugares:[
  {n:"Hero Pet Animal Hospital", cat:"vet", lat:41.546937, lng:-86.897682, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "weyauwega": {nombre:"Weyauwega", centro:[44.321458, -88.934036], tz:"America/Chicago", lugares:[
  {n:"Animal Haven Farm Zoo", cat:"zoo", lat:44.301611, lng:-88.961358, dir:"N1720 Bucholtz Road", tel:"+1-920-867-3707", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dairyland Animal Health Inc", cat:"vet", lat:44.313005, lng:-88.932493, dir:"N2041 County Road F", tel:"+1 920-867-3106", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wheaton": {nombre:"Wheaton", centro:[41.864696, -88.110171], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.831702, lng:-88.102541, dir:"23 Danada Square East", tel:"+1 630-653-7301", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"A.R.F.-Animal Rescue Foundation", cat:"refugio", lat:41.858903, lng:-88.114738, dir:"531 West Roosevelt Road", tel:"+1-630-200-3828", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"St Sophia's Forgotten Felines", cat:"refugio", lat:41.8589, lng:-88.114063, dir:"525 West Roosevelt Road", tel:"+1-847-773-7639", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Danada Veterinary Hospital", cat:"vet", lat:41.83243, lng:-88.105348, dir:"10 West Loop Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Natural Pet Market", cat:"tienda", lat:41.831629, lng:-88.097965, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wheaton Cat Clinic", cat:"vet", lat:41.868614, lng:-88.091397, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cosley Zoo", cat:"zoo", lat:41.877889, lng:-88.120276, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wheelersburg": {nombre:"Wheelersburg", centro:[38.730251, -82.85545], tz:"America/New_York", lugares:[
  {n:"Wheelersburg Animal Hospital", cat:"vet", lat:38.712316, lng:-82.857568, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "white-bear-lake": {nombre:"White Bear Lake", centro:[45.08381, -93.00693], tz:"America/Chicago", lugares:[
  {n:"HeartSpace Salon and Spa for Dogs", cat:"peluqueria", lat:45.094215, lng:-93.009811, dir:"5050 Division Avenue", tel:"+1-651-600-1563", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake Animal Hospital", cat:"vet", lat:45.119906, lng:-93.002382, dir:"5900 Highway 61", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "white-bear-township": {nombre:"White Bear Township", centro:[45.093565, -93.048058], tz:"America/Chicago", lugares:[
  {n:"Otter Lake Dog Park", cat:"parque", lat:45.114876, lng:-93.039053, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "white-lake-charter-township": {nombre:"White Lake Charter Township", centro:[42.655569, -83.500788], tz:"America/New_York", lugares:[
  {n:"VCA White Lake Animal Hospital", cat:"vet", lat:42.648945, lng:-83.513923, dir:"7404 Highland Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "white-river-wisconsin": {nombre:"White River", centro:[46.535779, -90.850744], tz:"America/Chicago", lugares:[
  {n:"Willow Animal Hospital", cat:"vet", lat:46.54772, lng:-90.906057, dir:"50172 State Highway 112", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "white-south-dakota": {nombre:"White", centro:[44.434688, -96.649774], tz:"America/Chicago", lugares:[
  {n:"White Veterinary Services", cat:"vet", lat:44.434508, lng:-96.649482, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "whitefish-bay-wisconsin": {nombre:"Whitefish Bay", centro:[43.118559, -87.906804], tz:"America/Chicago", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:43.113078, lng:-87.91592, dir:"5300 North Port Washington Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hounds Around Town", cat:"tienda", lat:43.118329, lng:-87.903826, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "whitehall-ohio": {nombre:"Whitehall", centro:[39.966731, -82.885456], tz:"America/New_York", lugares:[
  {n:"Buckeye Pets", cat:"tienda", lat:39.972201, lng:-82.907901, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hamilton Road Animal Hospital", cat:"vet", lat:39.952223, lng:-82.877859, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "whitestown": {nombre:"Whitestown", centro:[39.997263, -86.34583], tz:"America/New_York", lugares:[
  {n:"Petco", cat:"tienda", lat:39.951698, lng:-86.348688, dir:"6298 Mills Drive", tel:"+1 317-768-8000", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Wellness Clinic", cat:"vet", lat:39.949018, lng:-86.33398, dir:"7113 Whitestown Parkway", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.950487, lng:-86.344308, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Walker Farms dog park", cat:"parque", lat:39.975659, lng:-86.348973, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Community Pet Healthcare", cat:"vet", lat:39.947401, lng:-86.34415, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "whitewater-wisconsin": {nombre:"Whitewater", centro:[42.833956, -88.730652], tz:"America/Chicago", lugares:[
  {n:"Animal Medical Center", cat:"vet", lat:42.827267, lng:-88.797792, dir:"12524 County Highway N", tel:"+12624735800", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "whiting": {nombre:"Whiting", centro:[41.67976, -87.494465], tz:"America/Chicago", lugares:[
  {n:"Lynn's Doggie Spa", cat:"peluqueria", lat:41.679164, lng:-87.490061, dir:"1612 119th Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "whiting-wisconsin": {nombre:"Whiting", centro:[44.49358, -89.558729], tz:"America/Chicago", lugares:[
  {n:"BowWow Meow Boutique", cat:"tienda", lat:44.498513, lng:-89.561243, dir:"3449 Church Street", tel:"+1-715-883-2117", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:44.494415, lng:-89.514841, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Community Animal Hospital", cat:"vet", lat:44.507724, lng:-89.56385, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wichita": {nombre:"Wichita", centro:[37.692236, -97.337545], tz:"America/Chicago", lugares:[
  {n:"Sedgwick County Zoo", cat:"zoo", lat:37.714585, lng:-97.411325, dir:"5555 West Zoo Boulevard", tel:"+1 316-660-9453", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:37.675551, lng:-97.394615, dir:"533 South Tracy Street", tel:"+1 316-944-0470", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"The Hairy Sofa", cat:"peluqueria", lat:37.685261, lng:-97.330893, dir:"645 East Douglas Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Emergency & Specialty Hospital", cat:"vet", lat:37.724168, lng:-97.408838, dir:"5618 West 21st Street North", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Country Acres Dog Park", cat:"parque", lat:37.695952, lng:-97.428595, dir:"750 North Country Acres Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Millie's Dog Grooming", cat:"peluqueria", lat:37.692738, lng:-97.447102, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wickliffe-ohio": {nombre:"Wickliffe", centro:[41.605327, -81.453449], tz:"America/New_York", lugares:[
  {n:"Cuts N Suds", cat:"peluqueria", lat:41.60805, lng:-81.471897, dir:"29435 Euclid Avenue", tel:"+1 440 943 2887", horas:[9.5, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Midwest Veterinary Hospital", cat:"vet", lat:41.620048, lng:-81.453351, dir:"30550 Euclid Avenue", tel:"+1 440 516 0000", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Bailey's Bark Pet Care Service", cat:"peluqueria", lat:41.620015, lng:-81.453462, dir:"30544 Euclid Avenue", tel:"+1 440 473 6588", horas:[14.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:41.623987, lng:-81.441947, dir:"34500 Euclid Avenue", tel:"+1 440 918 1996", horas:[12.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Cleveland Veterinary Rehabilitation", cat:"vet", lat:41.584665, lng:-81.470325, dir:"28915 Chardon Road", tel:"+1 440 462 4600", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Lloyd Road Animal Hospital", cat:"vet", lat:41.606832, lng:-81.478658, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wilbur-park": {nombre:"Wilbur Park", centro:[38.553109, -90.309072], tz:"America/Chicago", lugares:[
  {n:"Xtreme Xotics", cat:"tienda", lat:38.554757, lng:-90.313504, dir:"5241 Weber Road", tel:"+1-314-922-1970", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Affton Veterinary Clinic", cat:"vet", lat:38.559921, lng:-90.300335, dir:"8100 Gravois Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Afton Veterinary Clinic", cat:"vet", lat:38.557803, lng:-90.3065, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wild-rose": {nombre:"Wild Rose", centro:[44.180017, -89.247526], tz:"America/Chicago", lugares:[
  {n:"Chippy's Dog Park", cat:"parque", lat:44.170089, lng:-89.155027, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wildwood-missouri": {nombre:"Wildwood", centro:[38.580695, -90.631437], tz:"America/Chicago", lugares:[
  {n:"Puppingham Palace", cat:"peluqueria", lat:38.580262, lng:-90.616221, dir:"16540 Manchester Road", tel:"+1-636-273-1115", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Bentleys Pet Stuff", cat:"tienda", lat:38.581224, lng:-90.62718, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wildwood Dog Park", cat:"parque", lat:38.586537, lng:-90.648308, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "williams-creek": {nombre:"Williams Creek", centro:[39.899762, -86.150266], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.904088, lng:-86.081491, dir:"5151 East 82nd Street", tel:"+1 317-579-0590", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Cat Care Clinic", cat:"vet", lat:39.925962, lng:-86.113913, dir:"9512 Haver Way", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hollywood Feed", cat:"tienda", lat:39.915366, lng:-86.137792, dir:"1300 East 86th Street", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.886243, lng:-86.120937, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happiness is Pets.", cat:"tienda", lat:39.904644, lng:-86.066858, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:39.909359, lng:-86.098541, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "williams-minnesota": {nombre:"Williams", centro:[48.768314, -94.95522], tz:"America/Chicago", lugares:[
  {n:"Up North Pyrenees", cat:"tienda", lat:48.801013, lng:-95.111723, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "williamsburg-iowa": {nombre:"Williamsburg", centro:[41.661239, -92.009508], tz:"America/Chicago", lugares:[
  {n:"Veterinary Medical Center", cat:"vet", lat:41.671061, lng:-92.006523, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "williamsburg-michigan": {nombre:"Williamsburg", centro:[44.773614, -85.403956], tz:"America/New_York", lugares:[
  {n:"Williamsburg Animal Hospital", cat:"vet", lat:44.770298, lng:-85.394094, dir:"8976 M-72", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"G.T. Butterfly House & Bug Zoo", cat:"zoo", lat:44.770649, lng:-85.397471, dir:"8840 M-72", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Classic Equine Veterinary Clinic", cat:"vet", lat:44.772192, lng:-85.424013, dir:"7542 East M 72", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "williamsburg-ohio": {nombre:"Williamsburg", centro:[39.054231, -84.052989], tz:"America/New_York", lugares:[
  {n:"Nurture Animal Clinic", cat:"vet", lat:39.051447, lng:-84.082871, dir:"3070 Old State Route 32", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "willmar": {nombre:"Willmar", centro:[45.121949, -95.043537], tz:"America/Chicago", lugares:[
  {n:"Hawk Creek Animal Shelter", cat:"refugio", lat:45.120818, lng:-95.078656, dir:"250 28th Street Southwest", tel:"+1 320-235-7612", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"South 71 Vet", cat:"vet", lat:45.082927, lng:-95.040795, dir:"4223 Abbott Drive", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Willmar Pet Hospital", cat:"vet", lat:45.115094, lng:-95.070883, dir:"705 Industrial Drive Southwest", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "willoughby-hills": {nombre:"Willoughby Hills", centro:[41.598382, -81.418447], tz:"America/New_York", lugares:[
  {n:"Animal Hospital Inc.", cat:"vet", lat:41.588369, lng:-81.438947, dir:"2735 Som Center Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "willoughby-ohio": {nombre:"Willoughby", centro:[41.63977, -81.406501], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.629383, lng:-81.428476, dir:"36395 Euclid Avenue", tel:"+1 440-918-9780", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Meadowlands Veterinary Center", cat:"vet", lat:41.628624, lng:-81.42407, dir:"36751 Euclid Avenue", tel:"+1 440 942 7297", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.652585, lng:-81.380807, dir:"7315 Mentor Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "willow-creek-wisconsin": {nombre:"Willow Creek", centro:[43.207229, -88.158425], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:43.193052, lng:-88.142635, dir:"N96W18838 County Line Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "willow-springs-illinois": {nombre:"Willow Springs", centro:[41.7366, -87.869315], tz:"America/Chicago", lugares:[
  {n:"Barkin Boutique", cat:"peluqueria", lat:41.732278, lng:-87.87535, dir:"8695 Archer Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Park", cat:"parque", lat:41.73764, lng:-87.869127, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:41.737788, lng:-87.86932, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "willowbrook": {nombre:"Willowbrook", centro:[41.769753, -87.935893], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.77237, lng:-87.949113, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "willowick": {nombre:"Willowick", centro:[41.633103, -81.468727], tz:"America/New_York", lugares:[
  {n:"305 Animal Hospital", cat:"vet", lat:41.620912, lng:-81.45691, dir:"1201 East 305th Street", tel:"+1 440 944 5200", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"The Doggie Spa", cat:"peluqueria", lat:41.620878, lng:-81.456889, dir:"1205 East 305th Street", tel:"+1 440 585 9850", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.637361, lng:-81.474396, dir:"30450 Lakeshore Boulevard", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wilmette": {nombre:"Wilmette", centro:[42.076066, -87.711556], tz:"America/Chicago", lugares:[
  {n:"Hollywood Feed", cat:"tienda", lat:42.066625, lng:-87.700934, dir:"2672 Green Bay Road", tel:"+1 847-905-0272", horas:[9.0, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"The Dog Wash", cat:"tienda", lat:42.073912, lng:-87.691482, dir:"340 Linden Avenue", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Fox Animal Hospital", cat:"vet", lat:42.055701, lng:-87.72705, dir:"2107 Crawford Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wilmette Pet Center", cat:"tienda", lat:42.076049, lng:-87.708905, dir:"625 Green Bay Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Village Dog", cat:"refugio", lat:42.074659, lng:-87.708691, dir:"1225 Wilmette Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Christensen Animal Hospital", cat:"vet", lat:42.076813, lng:-87.750495, dir:"730 Hibbard Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gillson Dog Beach", cat:"parque", lat:42.077702, lng:-87.680917, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wilmington-illinois": {nombre:"Wilmington", centro:[41.307899, -88.146834], tz:"America/Chicago", lugares:[
  {n:"Trinity Barkery", cat:"tienda", lat:41.305634, lng:-88.153222, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ballou Road Dog Park", cat:"parque", lat:41.271168, lng:-88.107865, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wilmington-ohio": {nombre:"Wilmington", centro:[39.445339, -83.828537], tz:"America/New_York", lugares:[
  {n:"Wilmington Dog Park", cat:"parque", lat:39.444613, lng:-83.805881, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wilson-minnesota": {nombre:"Wilson", centro:[43.960357, -91.684127], tz:"America/Chicago", lugares:[
  {n:"Bluff Country Equine Veterinary Center", cat:"vet", lat:43.950616, lng:-91.696534, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winchester-missouri": {nombre:"Winchester", centro:[38.590397, -90.5257], tz:"America/Chicago", lugares:[
  {n:"West County Animal Clinic", cat:"vet", lat:38.593326, lng:-90.526146, dir:"14571 Manchester Road", tel:"+1-636-227-3505", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winchester-wisconsin-2": {nombre:"Winchester", centro:[46.221893, -89.897939], tz:"America/Chicago", lugares:[
  {n:"Northwoods Animal Hospital", cat:"vet", lat:46.116765, lng:-89.84056, dir:"5582 US 51 South", tel:"+1-715-479-6992", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wind-lake": {nombre:"Wind Lake", centro:[42.82946, -88.1587], tz:"America/Chicago", lugares:[
  {n:"Wind Lake Animal Hospital", cat:"vet", lat:42.82675, lng:-88.15911, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "windsor-heights": {nombre:"Windsor Heights", centro:[41.600214, -93.708764], tz:"America/Chicago", lugares:[
  {n:"Bone-A-Patreat", cat:"tienda", lat:41.599701, lng:-93.673632, dir:"4110 University Avenue", tel:"+1-515-279-2544", horas:[9.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.598328, lng:-93.719711, dir:"7333 Buffalo Road", tel:"+1 515-223-7785", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Heartland Animal Hospital", cat:"vet", lat:41.600615, lng:-93.67349, tel:"+1-515-255-4464", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Iowa Pet Foods & Seascapes", cat:"tienda", lat:41.595455, lng:-93.738098, dir:"1500 22nd Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shear Pawfection", cat:"tienda", lat:41.571218, lng:-93.709752, dir:"517 Maple Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hickman Road Veterinary Clinic", cat:"vet", lat:41.615145, lng:-93.7039, dir:"6301 Hickman Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Breed Dog Grooming", cat:"tienda", lat:41.615239, lng:-93.707894, dir:"6503 Hickman Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"University West Pet Clinic", cat:"vet", lat:41.603934, lng:-93.73044, dir:"8145 University Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riordan Pet Hospital", cat:"vet", lat:41.629235, lng:-93.678988, dir:"4418 Douglas Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Iowa Veterinary Acupuncture Clinic", cat:"vet", lat:41.630776, lng:-93.678512, dir:"3836 Beaver Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Family Pet Veterinary Center", cat:"vet", lat:41.581214, lng:-93.720465, dir:"1215 Prospect Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Furry Friends Refuge", cat:"refugio", lat:41.581173, lng:-93.720124, dir:"1211 Grand Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Furry Friends Community Spay Clinic", cat:"refugio", lat:41.581215, lng:-93.719877, dir:"1209 Grand Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Windsor Heights Dog Park", cat:"parque", lat:41.592624, lng:-93.710492, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "windsor-wisconsin": {nombre:"Windsor", centro:[43.216587, -89.340205], tz:"America/Chicago", lugares:[
  {n:"Token Creek Dog Park", cat:"parque", lat:43.173787, lng:-89.308517, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:43.174451, lng:-89.309015, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Token Creek County Park Dog Park", cat:"parque", lat:43.173752, lng:-89.307513, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Token Creek Veterinary Clinic", cat:"vet", lat:43.194668, lng:-89.291113, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winfield-illinois": {nombre:"Winfield", centro:[41.861696, -88.160903], tz:"America/Chicago", lugares:[
  {n:"Kiki's Korner", cat:"tienda", lat:41.869504, lng:-88.157818, dir:"27W460 Beecher Avenue", tel:"+1-630-868-3160", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "winfield-indiana": {nombre:"Winfield", centro:[41.420483, -87.239178], tz:"America/Chicago", lugares:[
  {n:"Tammy's Pet Salon", cat:"peluqueria", lat:41.419478, lng:-87.225684, dir:"9121 East 109th Avenue", tel:"+1 219 776 3745", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Four Seasons Animal Hospital", cat:"vet", lat:41.425163, lng:-87.239506, dir:"10624 Randolph Street", tel:"+1 219 663 8387", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Paradise Pet Boutique", cat:"tienda", lat:41.425401, lng:-87.239584, dir:"10610 Randolph Street", tel:"+1 219 213 2607", horas:[12.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Kolodziej Dog Park", cat:"parque", lat:41.396088, lng:-87.208888, tel:"+1 219 988 2581", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winfield-kansas": {nombre:"Winfield", centro:[37.239749, -96.995592], tz:"America/Chicago", lugares:[
  {n:"Winfield Veterinary Clinic", cat:"vet", lat:37.242879, lng:-96.971744, dir:"1920 East 9th Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winnebago": {nombre:"Winnebago", centro:[42.266131, -89.24122], tz:"America/Chicago", lugares:[
  {n:"Winnebago Animal Clinic", cat:"vet", lat:42.283696, lng:-89.241368, dir:"2053 North Winnebago Road", tel:"+1-815-335-2314", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winneconne": {nombre:"Winneconne", centro:[44.110946, -88.713651], tz:"America/Chicago", lugares:[
  {n:"Go Fetch", cat:"tienda", lat:44.113383, lng:-88.694182, dir:"140 North 13th Avenue", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winona-minnesota": {nombre:"Winona", centro:[44.050005, -91.639229], tz:"America/Chicago", lugares:[
  {n:"Pet Medical Center", cat:"vet", lat:44.052064, lng:-91.636079, dir:"57 East 3rd Street", tel:"+1 507-454-2600", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Winona Feed Seed & More", cat:"tienda", lat:44.055225, lng:-91.647818, dir:"155 Grand Street", tel:"+1-507-454-5331", horas:[9.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Care Center", cat:"vet", lat:44.033743, lng:-91.60683, dir:"640 Innovation Drive", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "winterset": {nombre:"Winterset", centro:[41.334763, -94.013569], tz:"America/Chicago", lugares:[
  {n:"Suds & Pups", cat:"peluqueria", lat:41.335768, lng:-94.014402, dir:"207 North 1st Avenue", tel:"+1 515-462-1185", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wintersville": {nombre:"Wintersville", centro:[40.375417, -80.704027], tz:"America/New_York", lugares:[
  {n:"Crestview Veterinary Clinic", cat:"vet", lat:40.355965, lng:-80.756226, dir:"1248 County Highway 22 A", tel:"+1-740-264-2131", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.366884, lng:-80.67043, dir:"100 Mall Drive", tel:"+1-740-264-7760", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jefferson County Animal Shelter", cat:"refugio", lat:40.359898, lng:-80.708418, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winthrop-harbor": {nombre:"Winthrop Harbor", centro:[42.478934, -87.823848], tz:"America/Chicago", lugares:[
  {n:"Bark N Call Pet Shop & Grooming", cat:"tienda", lat:42.481758, lng:-87.822796, dir:"717 Sheridan Road", tel:"+1 847-731-7280", horas:[9.0, 12.0], nota:"Dato de OpenStreetMap"}
 ]},
 "wisconsin-dells": {nombre:"Wisconsin Dells", centro:[43.625617, -89.771565], tz:"America/Chicago", lugares:[
  {n:"Wisconsin Deer Park", cat:"zoo", lat:43.620436, lng:-89.786788, dir:"2183 Wisconsin Dells Parkway North", tel:"+1-608-253-2041", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Dells Animal Hospital", cat:"vet", lat:43.651419, lng:-89.768024, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petting Zoo", cat:"zoo", lat:43.62216, lng:-89.781937, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wisconsin-rapids": {nombre:"Wisconsin Rapids", centro:[44.391759, -89.822877], tz:"America/Chicago", lugares:[
  {n:"Progressive Veterinary Services", cat:"vet", lat:44.372308, lng:-89.811796, dir:"1211 Huntington Avenue", tel:"+1-715-424-4440", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"animal Medical and Surgical Clinic", cat:"vet", lat:44.37733, lng:-89.811466, dir:"1221 Parkwood Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wisconsin Rapids Municipal Zoo", cat:"zoo", lat:44.379632, lng:-89.84905, dir:"1911 Gaynor Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsmart", cat:"tienda", lat:44.378199, lng:-89.813351, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aquarium Pet Shop", cat:"tienda", lat:44.366587, lng:-89.816599, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodland Veterinary Clinic", cat:"vet", lat:44.369076, lng:-89.805139, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wixom": {nombre:"Wixom", centro:[42.524687, -83.536364], tz:"America/New_York", lugares:[
  {n:"Premier Pet Supply", cat:"tienda", lat:42.492955, lng:-83.519337, dir:"47810 Grand River Avenue", tel:"+1-248-773-8592", horas:[8.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"It's A Dogs Life Resort & Spa", cat:"refugio", lat:42.506913, lng:-83.512464, dir:"46926 Magellan Drive", tel:"+1 248-960-0800", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Lyon Oaks Dog Park", cat:"parque", lat:42.519311, lng:-83.558609, dir:"52221 Pontiac Trl", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"small dog area", cat:"parque", lat:42.520172, lng:-83.55855, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wonder-lake": {nombre:"Wonder Lake", centro:[42.385298, -88.347313], tz:"America/Chicago", lugares:[
  {n:"Woof City Pet Grooming & Lakefront Salon", cat:"peluqueria", lat:42.386288, lng:-88.347572, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wood-dale": {nombre:"Wood Dale", centro:[41.963363, -87.978956], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.967129, lng:-87.992046, dir:"391 West Irving Park Road", tel:"+1 630-766-7387", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "wood-river": {nombre:"Wood River", centro:[38.861159, -90.097607], tz:"America/Chicago", lugares:[
  {n:"Rosewood Pet Hospital", cat:"vet", lat:38.874726, lng:-90.081771, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "woodbury-minnesota": {nombre:"Woodbury", centro:[44.919896, -92.933945], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:44.939103, lng:-92.937196, dir:"8460 Tamarack Village", tel:"+1 651-702-9779", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:44.936898, lng:-92.9321, dir:"783 Radio Drive", tel:"+1 952-209-9600", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Dentistry Specialists", cat:"vet", lat:44.91406, lng:-92.93455, dir:"8480 Woodbury Crossing", tel:"+1-612-315-0520", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:44.926093, lng:-92.963762, dir:"7040 Valley Creek Plaza", tel:"+1 651-739-9122", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Evolution", cat:"tienda", lat:44.940839, lng:-92.906389, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSuites", cat:"refugio", lat:44.947711, lng:-92.916621, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:44.941272, lng:-92.938167, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Wants", cat:"tienda", lat:44.918603, lng:-92.901658, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"DogSpaw", cat:"peluqueria", lat:44.942574, lng:-92.901993, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "woodhaven": {nombre:"Woodhaven", centro:[42.137052, -83.245107], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:42.137231, lng:-83.229528, dir:"23470 Allen Road", tel:"+1 734-362-8568", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.14007, lng:-83.224701, dir:"19295 West Road", tel:"+1-734-671-6936", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Puppy Love Grooming", cat:"peluqueria", lat:42.156299, lng:-83.216488, dir:"16268 King Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:42.139694, lng:-83.22291, dir:"19093 West Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodhaven Animal Hospital", cat:"vet", lat:42.126192, lng:-83.230236, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "woodmere-ohio": {nombre:"Woodmere", centro:[41.462276, -81.480675], tz:"America/New_York", lugares:[
  {n:"Hollywood Feed", cat:"tienda", lat:41.463331, lng:-81.485721, dir:"27299 Chagrin Boulevard", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "woodridge": {nombre:"Woodridge", centro:[41.756334, -88.045559], tz:"America/Chicago", lugares:[
  {n:"Petco", cat:"tienda", lat:41.754037, lng:-88.017155, dir:"1400 75th Street", tel:"+1 630-960-1278", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Artistic Grooming", cat:"peluqueria", lat:41.771897, lng:-88.031216, dir:"6309 Woodward Avenue", tel:"+1 630 971 0143", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aquarium Adventure - Petland", cat:"tienda", lat:41.72573, lng:-88.038794, dir:"744 Boughton Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Finan Animal Hospital", cat:"vet", lat:41.743377, lng:-88.01256, dir:"Lemont Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Green Valley Preserve Dog Park", cat:"parque", lat:41.751906, lng:-88.072909, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "woodsfield": {nombre:"Woodsfield", centro:[39.762573, -81.115384], tz:"America/New_York", lugares:[
  {n:"Monroe Dog Pound", cat:"refugio", lat:39.780401, lng:-81.096714, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "woodstock-illinois": {nombre:"Woodstock", centro:[42.314753, -88.44743], tz:"America/Chicago", lugares:[
  {n:"Pawstock", cat:"tienda", lat:42.309365, lng:-88.431237, dir:"665 South Eastwood Drive", tel:"+1 224-457-3893", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Woodstock", cat:"vet", lat:42.294344, lng:-88.426863, dir:"11711 Catalpa Lane", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Woodstock Veterinary Clinic", cat:"vet", lat:42.306961, lng:-88.436555, dir:"691 Lake Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Still Farm Dog Park", cat:"parque", lat:42.314034, lng:-88.41383, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wooster-ohio": {nombre:"Wooster", centro:[40.798098, -81.939773], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:40.84602, lng:-81.940961, dir:"3749 Burbank Road", tel:"+1 330-234-5467", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wooster Dog Park", cat:"parque", lat:40.794398, lng:-81.934684, dir:"427 Maple Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "worthington-ohio": {nombre:"Worthington", centro:[40.093094, -83.017959], tz:"America/New_York", lugares:[
  {n:"MedVet Columbus", cat:"vet", lat:40.110036, lng:-83.006182, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lifetime Pet Wellness Center", cat:"vet", lat:40.136431, lng:-82.995073, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wrightstown-wisconsin": {nombre:"Wrightstown", centro:[44.326136, -88.162848], tz:"America/Chicago", lugares:[
  {n:"Wrightstown Veterinary Clinic", cat:"vet", lat:44.318301, lng:-88.153338, dir:"410 Meadow Lane", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wyandotte": {nombre:"Wyandotte", centro:[42.200409, -83.150644], tz:"America/New_York", lugares:[
  {n:"Downriver Grooming Company", cat:"peluqueria", lat:42.21418, lng:-83.168411, dir:"1240 Ford Avenue", tel:"+1-734-324-1145", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stevenson Styles", cat:"peluqueria", lat:42.214225, lng:-83.164874, dir:"974 Ford Avenue", tel:"+1-734-720-1644", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wyandotte Animal Hospital", cat:"vet", lat:42.18772, lng:-83.158471, dir:"4448 Biddle Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shelter To Home", cat:"refugio", lat:42.204413, lng:-83.152976, dir:"266 Oak Street", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wyoming-illinois": {nombre:"Wyoming", centro:[41.061704, -89.773158], tz:"America/Chicago", lugares:[
  {n:"Wyoming Veterinary Services PLLC", cat:"vet", lat:41.062091, lng:-89.774084, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wyoming-michigan": {nombre:"Wyoming", centro:[42.913258, -85.705703], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.914149, lng:-85.716417, dir:"2033 28th Street Southwest", tel:"+1-616-532-5171", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic, Inc. Grand Rapids", cat:"vet", lat:42.913294, lng:-85.663668, tel:"+1 616-241-3651", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center of Wyoming", cat:"vet", lat:42.884298, lng:-85.721895, tel:"+1-616-531-7387", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Chow Hound", cat:"tienda", lat:42.858681, lng:-85.723843, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wyoming-minnesota": {nombre:"Wyoming", centro:[45.336355, -92.997163], tz:"America/Chicago", lugares:[
  {n:"Blue Sky Animal Hospital", cat:"vet", lat:45.338063, lng:-93.006306, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "xenia-ohio": {nombre:"Xenia", centro:[39.684782, -83.929653], tz:"America/New_York", lugares:[
  {n:"The Tacky Horse", cat:"refugio", lat:39.71344, lng:-83.975896, dir:"1000 Hilltop Road", tel:"+1-937-427-0797", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Feeders Pet Supplies", cat:"tienda", lat:39.69091, lng:-83.959192, dir:"1872 West Park Square", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "yankton": {nombre:"Yankton", centro:[42.871294, -97.396701], tz:"America/Chicago", lugares:[
  {n:"Heartland Humane Society", cat:"refugio", lat:42.880395, lng:-97.334778, dir:"3400 East Highway 50", tel:"+1-605-664-4244", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Fish-N-Stuff", cat:"tienda", lat:42.869619, lng:-97.392964, dir:"111 West 3rd Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Countryside Bed & Biscuit", cat:"refugio", lat:42.873849, lng:-97.447232, dir:"3205 Premier Circle", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "yellow-springs": {nombre:"Yellow Springs", centro:[39.804543, -83.892523], tz:"America/New_York", lugares:[
  {n:"The Glen Helen Raptor Center", cat:"refugio", lat:39.804611, lng:-83.878064, dir:"1075 State Route 343", tel:"+1-937-767-6656", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yellow Springs Dog Park", cat:"parque", lat:39.796901, lng:-83.901571, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "york-charter-township": {nombre:"York Charter Township", centro:[42.127623, -83.716368], tz:"America/New_York", lugares:[
  {n:"Country Kennel Pet Care Provider", cat:"refugio", lat:42.132925, lng:-83.722905, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "yorktown": {nombre:"Yorktown", centro:[40.173655, -85.49414], tz:"America/New_York", lugares:[
  {n:"Animal Medical Centerr", cat:"vet", lat:40.180296, lng:-85.478518, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "yorkville-illinois": {nombre:"Yorkville", centro:[41.641141, -88.447295], tz:"America/Chicago", lugares:[
  {n:"PetSmart", cat:"tienda", lat:41.664924, lng:-88.466023, dir:"985 Erica Lane", tel:"+1 630-553-2117", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Yorkville Animal Hospital", cat:"vet", lat:41.628412, lng:-88.449834, dir:"102 Garden Street", tel:"+1-630-882-6060", horas:[9.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Zoomies", cat:"refugio", lat:41.660458, lng:-88.475488, dir:"1581 Sycamore Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Country Comfort Boarding & Grooming", cat:"refugio", lat:41.675234, lng:-88.449902, dir:"3215 Cannonball Trail", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:41.66352, lng:-88.441123, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "youngstown-ohio": {nombre:"Youngstown", centro:[41.103579, -80.652016], tz:"America/New_York", lugares:[
  {n:"West Side Cats", cat:"vet", lat:41.102501, lng:-80.693349, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ypsilanti": {nombre:"Ypsilanti", centro:[42.241051, -83.611765], tz:"America/New_York", lugares:[
  {n:"The Fish Doctors", cat:"tienda", lat:42.249259, lng:-83.6542, dir:"2703 Washtenaw Avenue", tel:"+1-734-434-1030", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Doctor Paws Veterinary Hospital", cat:"vet", lat:42.24933, lng:-83.655196, dir:"2789 Washtenaw Avenue", tel:"+1-734-802-5368", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Funhouse Pup Cuts", cat:"peluqueria", lat:42.24512, lng:-83.586015, dir:"1293 East Michigan Avenue", tel:"+1-734-460-0095", horas:[10.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"BluePearl", cat:"vet", lat:42.244974, lng:-83.67754, dir:"4126 Packard Road", tel:"+1-734-971-8774", horas:[11.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Fur Ball Society", cat:"tienda", lat:42.239686, lng:-83.61352, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ypsilanti-charter-township": {nombre:"Ypsilanti Charter Township", centro:[42.203305, -83.608886], tz:"America/New_York", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:42.211141, lng:-83.620747, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "zanesville": {nombre:"Zanesville", centro:[39.940143, -82.005019], tz:"America/New_York", lugares:[
  {n:"Wags & Whiskers Wonderland", cat:"peluqueria", lat:39.984498, lng:-82.023376, dir:"1212 Brandywine Boulevard", tel:"+1 740-319-8689", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shaggy Chic", cat:"peluqueria", lat:39.944465, lng:-81.980282, dir:"120 Sunrise Center Drive", tel:"+1 740-684-6010", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"We Lov Pets", cat:"tienda", lat:39.994669, lng:-82.030445, dir:"3853 Northpointe Drive", tel:"+1 740-453-2145", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Northpointe Veterinary Care", cat:"vet", lat:39.994854, lng:-82.030409, dir:"3852 Northpointe Drive", tel:"+1 740-487-0262", horas:[8.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Sherri's Grooming Cottage", cat:"peluqueria", lat:39.944469, lng:-81.980181, dir:"120 Sunrise Center Drive", tel:"+1 740-319-6866", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"It's Bath Time", cat:"peluqueria", lat:39.958298, lng:-82.010783, dir:"1535 Maple Avenue", tel:"+1 740-868-8086", horas:[9.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.99392, lng:-82.035257, dir:"3909 Gorsky Drive", tel:"+1 740-452-6145", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Brandywine Hospital For Pets", cat:"vet", lat:39.985241, lng:-82.028627, dir:"1384 Brandywine Boulevard", tel:"+1 740-453-0539", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Animal Shelter Society, Inc.", cat:"refugio", lat:39.958201, lng:-82.033669, dir:"1430 Newark Road", tel:"+1 740-452-1077", horas:[9.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Countryside Animal Clinic", cat:"vet", lat:39.978484, lng:-82.018265, dir:"1018 Beverly Avenue", tel:"+1 740-453-4726", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Muskingum County K-9 Adoption Center", cat:"refugio", lat:39.941756, lng:-81.977673, dir:"1854 East Pike", tel:"+1 740-453-0273", horas:[11.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Olde Falls Road Veterinary Clinic", cat:"vet", lat:39.983846, lng:-82.04905, dir:"2615 Olde Falls Road", tel:"+1 740-452-7934", horas:[8.5, 16.5], nota:"Dato de OpenStreetMap"}
 ]},
 "zeeland": {nombre:"Zeeland", centro:[42.812337, -86.016527], tz:"America/New_York", lugares:[
  {n:"Petcuts Grooming", cat:"tienda", lat:42.826601, lng:-86.00307, dir:"791 Case Karsten Drive", tel:"+1-616-405-9952", horas:[7.5, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "zilwaukee": {nombre:"Zilwaukee", centro:[43.476414, -83.920529], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:43.478789, lng:-83.98368, dir:"3431 Tittabawassee Road", tel:"+1 989-793-4266", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:43.478929, lng:-83.983671, dir:"3431 Tittabawassee Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Magoo's Pet Outlet", cat:"tienda", lat:43.482377, lng:-83.964142, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "zion": {nombre:"Zion", centro:[42.450117, -87.833775], tz:"America/Chicago", lugares:[
  {n:"All Tails", cat:"peluqueria", lat:42.44592, lng:-87.826025, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "zionsville": {nombre:"Zionsville", centro:[39.950724, -86.261697], tz:"America/New_York", lugares:[
  {n:"PetSmart", cat:"tienda", lat:39.913337, lng:-86.262225, dir:"5750 West 86th Street", tel:"+1 317-802-9025", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.934367, lng:-86.230441, dir:"10025 North Michigan Road", tel:"+1 317-337-9505", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Carmel Clay Animal Hospital", cat:"vet", lat:39.939698, lng:-86.234662, dir:"4335 West 106th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fetch Dog Resort", cat:"refugio", lat:39.92645, lng:-86.234531, dir:"4340 West 96th Street", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:39.929397, lng:-86.23169, dir:"9830 North Michigan Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Platinum Paws", cat:"tienda", lat:39.930655, lng:-86.232352, dir:"9860 North Michigan Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Boone Creek Farm", cat:"refugio", lat:39.974969, lng:-86.23276, dir:"13001 West Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"MedVet Medical & Cancer Centers for Pets", cat:"vet", lat:39.926853, lng:-86.238157, dir:"9650 Mayflower Park Drive", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Avian & Exotic Animal Clinic", cat:"vet", lat:39.9213, lng:-86.230026, dir:"9330 Waldemar Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]}
};
