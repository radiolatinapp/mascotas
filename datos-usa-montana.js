// Lugares de animales en la region MONTANA de Estados Unidos (Montana, Wyoming, Colorado, New Mexico, Idaho, Utah, Arizona, Nevada) extraidos de OpenStreetMap (verificado 2026-10-25).
// cat: vet=Veterinarias, tienda=Tiendas de mascotas, refugio=Refugios y guarderias, zoo=Zoologicos, peluqueria=Peluquerias, parque=Parques para perros, farma=Farmacias veterinarias, resto=Restaurantes/cafes dog-friendly
// horas: null = sin dato publicado; [0, 24] = abierto 24/7.
// Todo proviene de OpenStreetMap (ODbL) via Overpass; sin nombre o sin coordenadas el lugar se descarta.
// Pueblos cargados: 532 (2836 lugares).
const CIUDADES_USA_MONTANA = {
 "absarokee": {nombre:"Absarokee", centro:[45.521062, -109.442559], tz:"America/Denver", lugares:[
  {n:"Stillwater Veterinary Clinic", cat:"vet", lat:45.531022, lng:-109.438758, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "aetna-estates": {nombre:"Aetna Estates", centro:[39.736874, -104.677179], tz:"America/Denver", lugares:[
  {n:"Discovery Park Dog Park", cat:"parque", lat:39.790764, lng:-104.707012, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Argonne Dog Park", cat:"parque", lat:39.798688, lng:-104.767116, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wag Hotels", cat:"refugio", lat:39.832086, lng:-104.698651, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Green Valley Ranch Pet Center", cat:"vet", lat:39.78504, lng:-104.768887, dir:"Green Valley Ranch Boulevard, Aetna Estates", tel:"+1-303-307-8888", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "afton-wyoming": {nombre:"Afton", centro:[42.725277, -110.933402], tz:"America/Denver", lugares:[
  {n:"Agri-Star Feed", cat:"tienda", lat:42.720974, lng:-110.932004, dir:"33 1/2 East 6th Avenue, Afton", tel:"+1-307-886-9332", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Johnson Grain Inc", cat:"tienda", lat:42.723065, lng:-110.932635, dir:"40 East 5th Avenue, Afton", tel:"+1-307-886-9332", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Creatures Great & Small", cat:"vet", lat:42.751173, lng:-110.932933, dir:"927 North Washington Street, Afton", tel:"+1-307-885-4362", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alamogordo": {nombre:"Alamogordo", centro:[32.899882, -105.960208], tz:"America/Denver", lugares:[
  {n:"Bark Park", cat:"parque", lat:32.926755, lng:-105.948049, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Pound", cat:"refugio", lat:32.926176, lng:-105.951987, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense by Tractor Supply", cat:"tienda", lat:32.898147, lng:-105.96096, dir:"805 North White Sands Boulevard, Alamogordo", tel:"+1-575-437-1552", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Leslie Animal Clinic", cat:"vet", lat:32.914778, lng:-105.937987, dir:"1930 Indian Wells Road, Alamogordo", tel:"+1-575-437-4190", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Martin Hayes DVM", cat:"vet", lat:32.938018, lng:-105.964675, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alameda Park Zoo", cat:"zoo", lat:32.902341, lng:-105.960992, dir:"1376 East 9th Street, Alamogordo", tel:"+1-575-439-4100", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "alamosa": {nombre:"Alamosa", centro:[37.468201, -105.867835], tz:"America/Denver", lugares:[
  {n:"Alamosa Small Animals", cat:"tienda", lat:37.468354, lng:-105.865074, dir:"529 State Avenue, Alamosa", tel:"+1-719-422-3393", horas:[16.5, 18.5], nota:"Dato de OpenStreetMap"}
 ]},
 "albuquerque": {nombre:"Albuquerque", centro:[35.084103, -106.650985], tz:"America/Denver", lugares:[
  {n:"Veterans Administration Cooperative Studies Program Clinical Research Pharmacy", cat:"farma", lat:35.060249, lng:-106.61936, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Coronado Dog Park", cat:"parque", lat:35.104095, lng:-106.646067, dir:"301 Mc Knight Avenue Northwest, Albuquerque", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Los Altos Dog Park", cat:"parque", lat:35.086304, lng:-106.53951, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Off Leash Pet Area", cat:"parque", lat:35.085175, lng:-106.618169, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ouray Off-leash Dog Park", cat:"parque", lat:35.11454, lng:-106.720604, dir:"7500 Bob McCannon Parkway Northwest, Albuquerque", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rio Grande Triangle", cat:"parque", lat:35.085986, lng:-106.67183, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Tom Bolack Memorial Dog Park", cat:"parque", lat:35.09905, lng:-106.573814, dir:"2000 Dakota Street Northeast, Albuquerque", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"USS Bullhead Dog Park", cat:"parque", lat:35.051696, lng:-106.580144, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Villas del Cielo Dog Park", cat:"parque", lat:35.119027, lng:-106.594257, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eloisa's Pup's Grooming Salon", cat:"peluqueria", lat:35.119649, lng:-106.701022, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsmart Grooming", cat:"peluqueria", lat:35.077973, lng:-106.530093, horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"City of Albuquerque Animal Welfare Department", cat:"refugio", lat:35.086266, lng:-106.544902, dir:"8920 Lomas Boulevard Northeast, Albuquerque", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:35.120563, lng:-106.703736, dir:"3301 Coors Boulevard Northwest, Albuquerque", tel:"+1-505-365-1512", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Lucky Paws", cat:"refugio", lat:35.106522, lng:-106.571527, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Raptor Roost", cat:"refugio", lat:35.076763, lng:-106.66254, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clark's Pet Emporium", cat:"tienda", lat:35.08685, lng:-106.589545, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.08659, lng:-106.529044, dir:"10700 Lomas Boulevard Northeast, Albuquerque", tel:"+1-505-296-0978", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.098355, lng:-106.565929, dir:"2100 Louisiana Boulevard Northeast, Albuquerque", tel:"+1-505-313-8089", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.078087, lng:-106.530112, horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Albuquerque Animal Welfare", cat:"vet", lat:35.078815, lng:-106.52793, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aztec Animal Clinic", cat:"vet", lat:35.074962, lng:-106.595994, dir:"4340 Coal Avenue Southeast, Albuquerque", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blue Cross Animal Clinic", cat:"vet", lat:35.100923, lng:-106.604642, dir:"1921 Carlisle Boulevard Northeast, Albuquerque", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eubank Animal Clinic", cat:"vet", lat:35.098351, lng:-106.533351, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Route 66 Veterinary Emergency & Critical Care Center", cat:"vet", lat:35.080008, lng:-106.604299, dir:"3601 Central Avenue Northeast, Albuquerque", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:35.112659, lng:-106.703448, dir:"2611 Coors Frontage Road Northwest, Albuquerque", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vet-Co", cat:"vet", lat:35.108581, lng:-106.553301, dir:"8200 Menaul Boulevard Northeast, Albuquerque", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Clinic", cat:"vet", lat:35.060798, lng:-106.559198, dir:"950 Pennsylvania Street Southeast, Albuquerque", tel:"+1-505-846-4276", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"ABQ BioPark (Tingley Beach)", cat:"zoo", lat:35.086161, lng:-106.67443, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"ABQ BioPark Zoo", cat:"zoo", lat:35.07881, lng:-106.664015, dir:"903 10th Street Southwest, Albuquerque", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"ABQ BioPark: Zoo, Aquarium, Botanic Garden", cat:"zoo", lat:35.09679, lng:-106.683754, dir:"2601 Central Avenue Northwest, Albuquerque", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "alma-colorado": {nombre:"Alma", centro:[39.283904, -106.062617], tz:"America/Denver", lugares:[
  {n:"Alma Animal Clinic", cat:"vet", lat:39.285159, lng:-106.063159, dir:"112 North Main Street, Alma", tel:"+1-719-836-3127", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "american-fork": {nombre:"American Fork", centro:[40.376806, -111.795915], tz:"America/Denver", lugares:[
  {n:"Sydney’s Pet Grooming", cat:"peluqueria", lat:40.378604, lng:-111.795476, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Synergy Pet Salon", cat:"peluqueria", lat:40.376578, lng:-111.800333, dir:"65 West Main Street, American Fork", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Ark", cat:"tienda", lat:40.373307, lng:-111.784914, dir:"175 South 500 East, American Fork", tel:"+1-801-763-8200", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Country View Veterinary Hospital", cat:"vet", lat:40.383819, lng:-111.813971, dir:"582 Pacific Drive, American Fork", tel:"+1-801-763-1900", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Utah Veterinary Hospital", cat:"vet", lat:40.377655, lng:-111.794144, dir:"161 East 30 North, American Fork", tel:"+1-801-692-1563", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "ammon": {nombre:"Ammon", centro:[43.476803, -111.964132], tz:"America/Denver", lugares:[
  {n:"A Cut Above, the Falls", cat:"peluqueria", lat:43.482551, lng:-111.998584, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K-9 Expressions", cat:"peluqueria", lat:43.470241, lng:-111.985067, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Central", cat:"peluqueria", lat:43.476721, lng:-111.990112, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Oasis", cat:"refugio", lat:43.48131, lng:-111.946961, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:43.465625, lng:-111.981107, dir:"3549 South 25th East, Ammon", tel:"+1-986-497-6347", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:43.476375, lng:-111.987112, dir:"2410 South 25th East, Ammon", tel:"+1-208-542-9636", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Ammon Veterinary Hospital", cat:"vet", lat:43.485477, lng:-111.964756, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Countryside Veterinary Hospital", cat:"vet", lat:43.469638, lng:-112.004603, dir:"3120 South Woodruff Avenue, Ammon", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Idaho Falls Veterinary Hospital", cat:"vet", lat:43.481847, lng:-111.981785, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "angel-fire": {nombre:"Angel Fire", centro:[36.393088, -105.285009], tz:"America/Denver", lugares:[
  {n:"Angel Fire Small Animal Hospital", cat:"vet", lat:36.393065, lng:-105.285315, dir:"3382 Mountain View BLVD, Angel Fire", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "anthem": {nombre:"Anthem", centro:[33.860071, -112.127663], tz:"America/Phoenix", lugares:[
  {n:"Anthem Dog Park", cat:"parque", lat:33.842831, lng:-112.118217, horas:[6.0, 21.75], nota:"Dato de OpenStreetMap"},
  {n:"Daisy Mountain Veterinary Hospital", cat:"vet", lat:33.844224, lng:-112.131943, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - Anthem", cat:"vet", lat:33.86407, lng:-112.139047, dir:"3655 W Anthem Way", tel:"+1-623-580-0100", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "apache-junction": {nombre:"Apache Junction", centro:[33.415048, -111.549577], tz:"America/Phoenix", lugares:[
  {n:"Dog Park", cat:"parque", lat:33.421154, lng:-111.630392, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dutchman Dog Park", cat:"parque", lat:33.421259, lng:-111.545351, dir:"247 East Superstition Boulevard, Apache Junction", horas:[13.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Viewpoint Dog Run / Pet Walk", cat:"parque", lat:33.422714, lng:-111.64496, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Touch of Class Pet Grooming", cat:"peluqueria", lat:33.415547, lng:-111.599963, dir:"10706 East Apache Trail, Apache Junction", tel:"+1-480-986-2767", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Apache Tails Pet Salon", cat:"peluqueria", lat:33.406021, lng:-111.545342, dir:"1075 South Idaho Road, Apache Junction", tel:"+1-480-671-7099", horas:[7.5, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"What-A-Mess", cat:"peluqueria", lat:33.415688, lng:-111.56763, dir:"1990 West Apache Trail, Apache Junction", tel:"+1-480-983-4090", horas:[9.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Apache Junction Animal Control", cat:"refugio", lat:33.378294, lng:-111.538497, dir:"725 East Baseline Avenue, Apache Junction", tel:"+1-480-983-4405", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Apache Junction Horse Rescue", cat:"refugio", lat:33.459394, lng:-111.527355, dir:"4896 North Vista Road, Apache Junction", tel:"+1-480-612-4068", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Good Shepherd Healing Ministries Horse Rescue", cat:"refugio", lat:33.43187, lng:-111.549045, dir:"288 West Smoketree Street, Apache Junction", tel:"+1-602-615-7075", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mountain View Kennel", cat:"refugio", lat:33.410723, lng:-111.540431, dir:"460 South Colt Road, Apache Junction", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Superstition Stables Equestrian Center", cat:"refugio", lat:33.435023, lng:-111.575291, dir:"2151 North Warner Drive, Apache Junction", tel:"+1-480-620-3253", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pet Nanny", cat:"refugio", lat:33.418579, lng:-111.644894, dir:"158 North 86th Place, Apache Junction", tel:"+1-480-600-6931", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Wild Heart Horsemanship", cat:"refugio", lat:33.429199, lng:-111.65645, dir:"732 North 82nd Street, Apache Junction", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hold Fast Reptiles and Exotics", cat:"tienda", lat:33.416134, lng:-111.557594, dir:"1000 West Apache Trail, Apache Junction", tel:"+1-480-677-6253", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Planet", cat:"tienda", lat:33.468536, lng:-111.685503, dir:"2910 North Power Road, Apache Junction", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Planet", cat:"tienda", lat:33.336296, lng:-111.602867, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.381141, lng:-111.602856, dir:"1858 South Signal Butte Road, Apache Junction", tel:"+1-480-358-0948", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.453562, lng:-111.687554, dir:"6632 East McKellips Road, Apache Junction", tel:"+1-480-325-4578", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Agape Animal Clinic PLLC", cat:"vet", lat:33.378163, lng:-111.621155, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alta Mesa Animal Hospital", cat:"vet", lat:33.437777, lng:-111.685653, dir:"6704 East Brown Road, Apache Junction", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Altered Tails Barnhart Clinic", cat:"vet", lat:33.416679, lng:-111.674746, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Apache Trail Veterinary Services", cat:"vet", lat:33.414614, lng:-111.62908, dir:"9333 East Main Street, Apache Junction", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Augusta Ranch Animal Hospital", cat:"vet", lat:33.365935, lng:-111.635083, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.453388, lng:-111.687437, dir:"6632 East McKellips Road, Apache Junction", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.381256, lng:-111.603132, dir:"1858 South Signal Butte Road, Apache Junction", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Caring Critters Animal Hospital", cat:"vet", lat:33.412534, lng:-111.549952, dir:"189 West Apache Trail, Apache Junction", tel:"+1-480-671-7387", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Comet Veterinary Hospital", cat:"vet", lat:33.466788, lng:-111.685485, dir:"2824 North Power Road, Apache Junction", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - Las Sendas", cat:"vet", lat:33.46473, lng:-111.68453, dir:"6747 East McDowell Road, Apache Junction", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - Signal Butte", cat:"vet", lat:33.365148, lng:-111.603651, dir:"2748 South Signal Butte Road, Apache Junction", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Apache Junction Animal Hospital", cat:"vet", lat:33.415894, lng:-111.588925, dir:"17 North Mountain Road, Apache Junction", tel:"+1-480-984-2114", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "artesia-new-mexico": {nombre:"Artesia", centro:[32.842334, -104.403296], tz:"America/Denver", lugares:[
  {n:"Big Dawg Park", cat:"parque", lat:32.825749, lng:-104.437449, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Park Park", cat:"parque", lat:32.825941, lng:-104.438295, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "arvada": {nombre:"Arvada", centro:[39.80055, -105.081157], tz:"America/Denver", lugares:[
  {n:"Bentley's Pet Stuff", cat:"tienda", lat:39.835594, lng:-105.082977, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws 'n' Play", cat:"tienda", lat:39.798052, lng:-105.081862, dir:"5545 Olde Wadsworth Boulevard, Arvada", tel:"+1-303-420-2525", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Wants", cat:"tienda", lat:39.798904, lng:-105.082434, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.794051, lng:-105.082983, dir:"5285 Wadsworth Bypass, Arvada", tel:"+1-303-456-1114", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Arvada Animal Hospital", cat:"vet", lat:39.801022, lng:-105.138418, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Care Animal Hospital", cat:"vet", lat:39.842583, lng:-105.109605, dir:"8044 Kipling St, Arvada", tel:"+1-303-421-8200", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Olde Town Vet Clinic", cat:"vet", lat:39.802235, lng:-105.083443, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Medical Transport", cat:"vet", lat:39.811256, lng:-105.140735, dir:"12650 West 64th Avenue, Arvada", tel:"+1-720-899-7114", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "aspen-park": {nombre:"Aspen Park", centro:[39.542358, -105.292776], tz:"America/Denver", lugares:[
  {n:"Aspen Park Vet Hospital", cat:"vet", lat:39.540628, lng:-105.295729, dir:"25871 Duran Avenue, Aspen Park", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "athol": {nombre:"Athol", centro:[47.94796, -116.707974], tz:"America/Los_Angeles", lugares:[
  {n:"Northwoods Veterinary Hospital", cat:"vet", lat:47.948199, lng:-116.714945, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "aurora": {nombre:"Aurora", centro:[39.740144, -104.873338], tz:"America/Denver", lugares:[
  {n:"21 Fitzsimmons Dog Park", cat:"parque", lat:39.749572, lng:-104.839067, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bicentennial Park Off Leash Dog Area (Trial)", cat:"parque", lat:39.714527, lng:-104.831993, dir:"13600 East Alameda Avenue, Aurora", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Run", cat:"parque", lat:39.695526, lng:-104.843608, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lowry Dog Park", cat:"parque", lat:39.718659, lng:-104.881663, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stapleton Off-Leash Dog Park", cat:"parque", lat:39.749689, lng:-104.897471, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"GLC Dog Grooming", cat:"peluqueria", lat:39.724884, lng:-104.82057, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tub Time Doggie Salon", cat:"peluqueria", lat:39.685085, lng:-104.808221, tel:"+1-303-369-3647", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aurora Animal Shelter", cat:"refugio", lat:39.761581, lng:-104.804217, dir:"15750 East 32nd Avenue, Aurora", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kenlyn Arabians", cat:"refugio", lat:39.73426, lng:-104.782999, dir:"1000 North Salida Street, Aurora", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tenaker Pet Care Center", cat:"refugio", lat:39.730608, lng:-104.801694, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bentley's Pet Stuff", cat:"tienda", lat:39.695285, lng:-104.867818, dir:"1155 South Havana Street, Aurora", tel:"+1-720-638-9245", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Bonez 4 Budz", cat:"tienda", lat:39.753309, lng:-104.877646, dir:"2501 Dallas Street, Aurora", tel:"+1-303-975-6168", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Ciji's Natural Pet Supplies", cat:"tienda", lat:39.750364, lng:-104.917294, dir:"2260 Kearney Street, Aurora", tel:"+1-303-322-8000", horas:[9.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Pet Clips", cat:"tienda", lat:39.685392, lng:-104.789393, tel:"+1-303-750-3330", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.76331, lng:-104.780216, dir:"3511 Salida Court, Aurora", tel:"+1-303-371-2941", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.692824, lng:-104.863035, dir:"1350 South Ironton Street, Aurora", tel:"+1-303-751-0934", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.766128, lng:-104.900407, dir:"7505 East 35th Avenue, Aurora", tel:"+1-303-393-9156", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.715579, lng:-104.82549, dir:"40 South Abilene Street, Aurora", tel:"+1-720-859-8122", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Scales N Tails Exotic Reptile Pet Shop", cat:"tienda", lat:39.697809, lng:-104.810699, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"29th Avenue Animal Hospital", cat:"vet", lat:39.758381, lng:-104.902598, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Altos Veterinary Clinic", cat:"vet", lat:39.713564, lng:-104.827605, dir:"176 South Potomac Street, Aurora", tel:"+1-303-343-8796", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:39.715617, lng:-104.825682, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"covetrus", cat:"vet", lat:39.76363, lng:-104.831469, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Park Hill Veterinary", cat:"vet", lat:39.75075, lng:-104.908628, dir:"2255 Oneida Street, Aurora", tel:"+1-303-388-2255", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets R Us", cat:"vet", lat:39.696999, lng:-104.863843, dir:"10695 East Mississippi Avenue, Aurora", tel:"+1-720-859-7788", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetVet 365", cat:"vet", lat:39.693657, lng:-104.789796, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rising Sun Animal Care", cat:"vet", lat:39.7234, lng:-104.895214, dir:"106 Spruce Street, Aurora", tel:"+1-303-577-0195", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sploot Veterinary Care - Central Park", cat:"vet", lat:39.747657, lng:-104.878235, dir:"2000 Chester Street, Aurora", tel:"+1-720-730-6559", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tenaker Animal Hospital", cat:"vet", lat:39.730411, lng:-104.800909, dir:"895 Laredo Street, Aurora", tel:"+1-303-344-0600", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Thrive", cat:"vet", lat:39.692631, lng:-104.863328, dir:"1350 South Ironton Street, Aurora", tel:"+1-720-279-8328", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "avondale": {nombre:"Avondale", centro:[33.443453, -112.304539], tz:"America/Phoenix", lugares:[
  {n:"PetSmart", cat:"tienda", lat:33.461899, lng:-112.339029, dir:"1561 North Dysart Road, Avondale", tel:"+1-623-547-0889", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.434389, lng:-112.305719, dir:"11455 West Buckeye Road, Avondale", tel:"+1-623-935-0044", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"BluePearl", cat:"vet", lat:33.461687, lng:-112.336407, dir:"13034 West Rancho Santa Fe Boulevard, Avondale", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Desert Ark Veterinary Care", cat:"vet", lat:33.492973, lng:-112.294256, dir:"10865 West Indian School Road, Avondale", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bailey": {nombre:"Bailey", centro:[39.406466, -105.471701], tz:"America/Denver", lugares:[
  {n:"Song of the Wolf healing Center", cat:"refugio", lat:39.407816, lng:-105.449645, dir:"1536 South Ridge Road, Bailey", tel:"+1-720-636-3896", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crow Hill Veterinary Hospital", cat:"vet", lat:39.439784, lng:-105.450395, dir:"12 Rosalie Road, Bailey", tel:"+1-303-838-4677", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "beaver-valley-estates": {nombre:"Beaver Valley Estates", centro:[34.336068, -111.297186], tz:"America/Phoenix", lugares:[
  {n:"trout", cat:"refugio", lat:34.382499, lng:-111.097643, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bedford-wyoming-2": {nombre:"Bedford", centro:[42.899658, -110.937722], tz:"America/Denver", lugares:[
  {n:"Animal Humane Association of Star Valley", cat:"refugio", lat:42.890242, lng:-110.973223, dir:"134 SLF County Road 126A, Bedford", tel:"+1-307-883-7387", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "belen": {nombre:"Belen", centro:[34.662749, -106.7762], tz:"America/Denver", lugares:[
  {n:"Yucca Vet", cat:"vet", lat:34.653337, lng:-106.792006, dir:"1837 Camino del Llano, Belen", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yucca Veterinary Medical Center, LLC", cat:"vet", lat:34.650202, lng:-106.779206, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "belgrade-montana": {nombre:"Belgrade", centro:[45.776288, -111.177168], tz:"America/Denver", lugares:[
  {n:"Heart of the Valley Animal Shelter", cat:"refugio", lat:45.752673, lng:-111.144722, dir:"1549 E Cameron Bridge rd, Belgrade", tel:"+1-406-388-9399", horas:[11.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Montana Murray Kennels", cat:"refugio", lat:45.757349, lng:-111.139821, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crystal Clear Aquariums", cat:"tienda", lat:45.762356, lng:-111.185828, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hardaway Veterinary Hospital", cat:"vet", lat:45.753771, lng:-111.183634, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Skyline Veterinary Hospital", cat:"vet", lat:45.791393, lng:-111.201677, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bennett": {nombre:"Bennett", centro:[39.757137, -104.427305], tz:"America/Denver", lugares:[
  {n:"Living Springs Veterinary Care & Pet Boarding", cat:"refugio", lat:39.757339, lng:-104.42327, dir:"810 Sharis Court, Bennett", tel:"+1-303-644-3337", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"The Musketeers Veterinary Practice", cat:"vet", lat:39.755643, lng:-104.426778, dir:"550 Colfax Avenue, Bennett", tel:"+1-303-644-4687", horas:[8.0, 14.0], nota:"Dato de OpenStreetMap"}
 ]},
 "benson": {nombre:"Benson", centro:[31.96799, -110.294331], tz:"America/Phoenix", lugares:[
  {n:"SKP Saguaro Members and Guests Dog Run", cat:"parque", lat:31.945248, lng:-110.294209, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bernalillo": {nombre:"Bernalillo", centro:[35.30093, -106.551425], tz:"America/Denver", lugares:[
  {n:"PetSmart", cat:"tienda", lat:35.321371, lng:-106.577759, dir:"7817 Enchanted Hills Boulevard, Bernalillo", tel:"+1-505-404-3356", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Coronado Pet Hospital", cat:"vet", lat:35.327852, lng:-106.57111, dir:"4192 Pat D'Arco Highway, Bernalillo", tel:"+1-505-771-3311", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "berthoud": {nombre:"Berthoud", centro:[40.308317, -105.081092], tz:"America/Denver", lugares:[
  {n:"Berthoud Dog Park", cat:"parque", lat:40.30306, lng:-105.088115, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"NoCo Spay & Neuter", cat:"vet", lat:40.306598, lng:-105.075793, dir:"602 N 2nd, Berthoud", tel:"+1-970-825-9604", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "beulah": {nombre:"Beulah", centro:[38.075006, -104.986655], tz:"America/Denver", lugares:[
  {n:"Mission:Wolf", cat:"refugio", lat:37.963281, lng:-105.214889, dir:"13388 County Road 634, Beulah", tel:"+1-719-859-2157", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "billings-montana": {nombre:"Billings", centro:[45.787496, -108.49607], tz:"America/Denver", lugares:[
  {n:"Heights Dog Park", cat:"parque", lat:45.82967, lng:-108.525827, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Paws Montana", cat:"peluqueria", lat:45.827825, lng:-108.507128, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Pets", cat:"peluqueria", lat:45.769552, lng:-108.546396, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Ave Pet Grooming", cat:"peluqueria", lat:45.818327, lng:-108.469916, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Groomingdale's Salon & Paw*tique", cat:"peluqueria", lat:45.769492, lng:-108.55252, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovable Pets", cat:"peluqueria", lat:45.784649, lng:-108.549951, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petlantis", cat:"peluqueria", lat:45.770039, lng:-108.595123, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Animal Shelter", cat:"refugio", lat:45.772247, lng:-108.519943, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Park", cat:"refugio", lat:45.762234, lng:-108.546229, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Sky Pet Resort", cat:"refugio", lat:45.749525, lng:-108.590484, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Intelligent Canine", cat:"refugio", lat:45.758797, lng:-108.553022, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yellowstone Valley Animal Shelter", cat:"refugio", lat:45.763115, lng:-108.560699, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rock Creek Coffee Roasters", cat:"resto", lat:45.782766, lng:-108.506662, dir:"124 North 28th Street, Billings", tel:"+1-406-201-9189", horas:[6.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Dee-O-Gee", cat:"tienda", lat:45.770229, lng:-108.617012, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Exotic Pets", cat:"tienda", lat:45.783825, lng:-108.575434, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovable Pets", cat:"tienda", lat:45.751106, lng:-108.618347, dir:"4010 Montana Sapphire Drive, Billings", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:45.753546, lng:-108.580514, dir:"2618 King Avenue West, Billings", tel:"+1-406-413-6906", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:45.826554, lng:-108.469139, dir:"1537 Main Street, Billings", tel:"+1-406-371-4890", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:45.753651, lng:-108.579408, dir:"2510 King Avenue, Billings", tel:"+1-406-656-2309", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Phillips Pet Food and Supplies", cat:"tienda", lat:45.728541, lng:-108.597662, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Treasure State Aquariums", cat:"tienda", lat:45.784395, lng:-108.539325, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:45.765908, lng:-108.575775, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of Billings", cat:"vet", lat:45.784678, lng:-108.541321, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Animal Hospital and Urgent Care Center", cat:"vet", lat:45.825819, lng:-108.466634, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Sky Pet Center", cat:"vet", lat:45.728339, lng:-108.606573, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clarity Animal Hospital", cat:"vet", lat:45.785459, lng:-108.620486, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Community Pet Hospital", cat:"vet", lat:45.770006, lng:-108.558609, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grand Avenue Animal Hospital", cat:"vet", lat:45.7839, lng:-108.591003, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Granite Peak Veterinary Hosptial", cat:"vet", lat:45.785062, lng:-108.61546, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lockwood Veterinary Service", cat:"vet", lat:45.815737, lng:-108.406982, dir:"3025 Old Hardin Road, Billings", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Moore Lane Veterinary Hospital", cat:"vet", lat:45.768652, lng:-108.543011, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shiloh Veterinary Hospital", cat:"vet", lat:45.773647, lng:-108.616996, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Skyview Veterinary Hospital", cat:"vet", lat:45.828333, lng:-108.50716, dir:"1632 Gleneagles Boulevard, Billings", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Animal Hospital of Billings", cat:"vet", lat:45.818716, lng:-108.471577, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vet-To-Go", cat:"vet", lat:45.751049, lng:-108.587049, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Zoo Montana", cat:"zoo", lat:45.731585, lng:-108.622702, dir:"2100 South Shiloh Road, Billings", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bisbee": {nombre:"Bisbee", centro:[31.441716, -109.915995], tz:"America/Phoenix", lugares:[
  {n:"Bisbee Dog Park", cat:"parque", lat:31.404601, lng:-109.916241, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bisbee Animal Shelter", cat:"refugio", lat:31.404913, lng:-109.902593, dir:"938 Toveraville Road, Bisbee", tel:"+1-520-432-6020", horas:[10.0, 14.0], nota:"Dato de OpenStreetMap"}
 ]},
 "black-eagle": {nombre:"Black Eagle", centro:[47.525903, -111.278036], tz:"America/Denver", lugares:[
  {n:"Bathe Your Own Dog", cat:"peluqueria", lat:47.524569, lng:-111.286428, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggone Cute Pet Grooming", cat:"peluqueria", lat:47.523968, lng:-111.301048, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riverview Pet Grooming", cat:"peluqueria", lat:47.525605, lng:-111.310179, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aprils Plush Puppies Grooming & Boarding", cat:"refugio", lat:47.525467, lng:-111.284711, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City of Great Falls Animal Shelter", cat:"refugio", lat:47.528493, lng:-111.289715, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Maclean-Cameron Animal Adoption Center", cat:"refugio", lat:47.527741, lng:-111.292651, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Associated Veterinary Services", cat:"vet", lat:47.507442, lng:-111.233397, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Best Friend Animal Hospital", cat:"vet", lat:47.525027, lng:-111.303634, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Great Falls Veterinary Services", cat:"vet", lat:47.506816, lng:-111.243035, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "black-forest": {nombre:"Black Forest", centro:[39.014002, -104.70114], tz:"America/Denver", lugares:[
  {n:"Furry Friends Inc", cat:"tienda", lat:38.939865, lng:-104.75909, dir:"3586 Hartsel Drive, Black Forest", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.973987, lng:-104.745683, dir:"9690 Prominent Point, Black Forest", tel:"+1-719-495-4337", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"City Vet", cat:"vet", lat:38.965195, lng:-104.754902, dir:"9235 North Union Boulevard, Black Forest", tel:"+1-719-888-6546", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"North Powers Animal Hospital", cat:"vet", lat:38.954427, lng:-104.727731, dir:"5495 Powers Center Point, Black Forest", tel:"+1-719-282-1222", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"North Powers Animal Hospital", cat:"vet", lat:38.954321, lng:-104.726512, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pine Creek Veterinary Hospital", cat:"vet", lat:38.973746, lng:-104.75239, dir:"4120 Royal Pine Drive, Black Forest", tel:"+1-719-955-0966", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "blende": {nombre:"Blende", centro:[38.245836, -104.568584], tz:"America/Denver", lugares:[
  {n:"Mesa Veterinary Clinic P.C.", cat:"vet", lat:38.244528, lng:-104.565563, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bluffdale": {nombre:"Bluffdale", centro:[40.489818, -111.939284], tz:"America/Denver", lugares:[
  {n:"Hidden Valley Dog Park", cat:"parque", lat:40.4697, lng:-111.927604, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mountain West Veterinary Specialists", cat:"vet", lat:40.499455, lng:-111.959638, dir:"13860 South 2700 West, Bluffdale", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boise": {nombre:"Boise", centro:[43.616616, -116.200886], tz:"America/Denver", lugares:[
  {n:"Encore Skyline Dog Park", cat:"parque", lat:43.584966, lng:-116.201295, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fort Boise Dog Park", cat:"parque", lat:43.616943, lng:-116.184224, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pampered Pets", cat:"peluqueria", lat:43.591218, lng:-116.193805, dir:"1773 South Broadway Avenue, Boise", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Zoom Room Dog Training", cat:"peluqueria", lat:43.585527, lng:-116.192655, dir:"2140 South Broadway Avenue, Boise", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:43.571322, lng:-116.191389, dir:"3430 South T K Avenue, Boise", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Downtown Hound Doggie Lounge", cat:"refugio", lat:43.608142, lng:-116.212261, dir:"1021 South Lusk Street, Boise", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark n' Purr", cat:"tienda", lat:43.595177, lng:-116.21307, dir:"1036 South Vista Avenue, Boise", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:43.569805, lng:-116.188064, dir:"3548 South Findley Avenue, Boise", tel:"+1-208-344-1651", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"All Valley Pet Clinic", cat:"vet", lat:43.540482, lng:-116.156378, dir:"6801 South Federal Way, Boise", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Boise Animal Health and Urgent Care", cat:"vet", lat:43.59862, lng:-116.194443, dir:"1050 West Beacon Street, Boise", tel:"+1-208-901-8360", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Broadway Vet", cat:"vet", lat:43.579107, lng:-116.179371, dir:"350 East Linden Street, Boise", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Habitat Veterinary Hospital", cat:"vet", lat:43.576373, lng:-116.147826, dir:"3103 East Barber Valley Drive, Boise", tel:"+1-208-429-1818", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Springs Pet Medical Care", cat:"vet", lat:43.568483, lng:-116.120476, dir:"4940 East Mill Station Drive, Boise", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Orthopedic & Surgical Care Center", cat:"vet", lat:43.585881, lng:-116.183732, dir:"201 West Boise Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vista Animal Hospital", cat:"vet", lat:43.585519, lng:-116.214121, dir:"1985 South Vista Avenue, Boise", tel:"+1-208-343-3711", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Zoo Boise", cat:"zoo", lat:43.607833, lng:-116.202574, dir:"355 West Julia Davis Drive, Boise", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "boles-acres": {nombre:"Boles Acres", centro:[32.807033, -105.986096], tz:"America/Denver", lugares:[
  {n:"Otero County Animal Shelter", cat:"refugio", lat:32.853356, lng:-105.974365, dir:"601 Wright Avenue, Boles Acres", tel:"+1-575-434-2959", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bonners-ferry": {nombre:"Bonners Ferry", centro:[48.697232, -116.311983], tz:"America/Los_Angeles", lugares:[
  {n:"Second Chance Animal Adoption", cat:"refugio", lat:48.684985, lng:-116.321721, dir:"6651 Lincoln Street, Bonners Ferry", horas:[12.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Dr. Burt Vetinary Care", cat:"vet", lat:48.756246, lng:-116.287059, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bosque-farms": {nombre:"Bosque Farms", centro:[34.854771, -106.705148], tz:"America/Denver", lugares:[
  {n:"Village Veterinary Hospital", cat:"vet", lat:34.869651, lng:-106.690686, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "boulder": {nombre:"Boulder", centro:[40.014986, -105.270545], tz:"America/Denver", lugares:[
  {n:"East Boulder Dog Park", cat:"parque", lat:39.991481, lng:-105.221919, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Foothills Community Dog Park", cat:"parque", lat:40.059588, lng:-105.290326, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Foothills Community Dog Park", cat:"parque", lat:40.058492, lng:-105.289437, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"HSBV Agility Yard", cat:"parque", lat:40.022549, lng:-105.226076, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"HSBV Play Yard", cat:"parque", lat:40.022317, lng:-105.226118, dir:"2323 55th Street, Boulder", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Valmont Dog Park", cat:"parque", lat:40.030453, lng:-105.22959, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawsitive Energy Dog Grooming", cat:"peluqueria", lat:40.032261, lng:-105.259683, dir:"2750 Glenwood Drive, Boulder", tel:"+1-720-290-2276", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"scenthound", cat:"peluqueria", lat:39.997909, lng:-105.233784, tel:"+1-720-600-0420", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"The Peaceful Puppy", cat:"peluqueria", lat:40.015746, lng:-105.261669, horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Boulder Valley", cat:"refugio", lat:40.022416, lng:-105.226469, dir:"2323 55th Street, Boulder", tel:"+1-303-442-4030", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aqua Imports", cat:"tienda", lat:40.027152, lng:-105.25767, dir:"2690 28th Street, Boulder", tel:"+1-303-444-6971", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Only Natural Pet", cat:"tienda", lat:40.02383, lng:-105.257706, horas:[8.0, 20.5], nota:"Dato de OpenStreetMap"},
  {n:"Only Natural Pet Store", cat:"tienda", lat:40.020564, lng:-105.223589, dir:"5541 Central Avenue, Boulder", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.013482, lng:-105.261864, dir:"2480 Arapahoe Avenue, Boulder", tel:"+1-303-544-1888", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.019098, lng:-105.251917, dir:"1850 30th Street, Boulder", tel:"+1-303-449-0201", horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Scales 'N Tails", cat:"tienda", lat:40.035515, lng:-105.25988, dir:"3325 28th Street, Boulder", tel:"+1-303-449-5982", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Whole Pets", cat:"tienda", lat:40.023267, lng:-105.257106, horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"tienda", lat:40.016259, lng:-105.252746, dir:"1674 30th Street, Boulder", tel:"+1-720-379-7394", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Arapahoe Animal Hospital", cat:"vet", lat:40.015947, lng:-105.223446, tel:"+1-303-442-7033", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Broadway Animal Hospital and Pet Center", cat:"vet", lat:39.973512, lng:-105.239509, dir:"1405 South Broadway, Boulder", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Colorado Animal Specialty & Emergency", cat:"vet", lat:40.035201, lng:-105.25507, dir:"2972;2982 Iris Avenue, Boulder", tel:"+1-303-545-2273", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"North Boulder Companion Animal Hospital", cat:"vet", lat:40.032061, lng:-105.259558, dir:"2750 Glenwood Drive, Boulder", tel:"+1-303-447-6444", horas:[12.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Menders Animal Hospital", cat:"vet", lat:39.998556, lng:-105.257991, dir:"2790 Moorhead Avenue, Boulder", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Rise Vet", cat:"vet", lat:40.024742, lng:-105.281158, dir:"2624 Broadway, Boulder", tel:"+1-303-945-5313", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Boulder Animal Hospital", cat:"vet", lat:39.9854, lng:-105.239923, dir:"4660 Table Mesa Drive, Boulder", tel:"+1-303-499-1800", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA All Pets Animal Hospital", cat:"vet", lat:39.984841, lng:-105.228626, dir:"5290 Manhattan Circle, Boulder", tel:"+1-303-499-5335", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"VEG", cat:"vet", lat:40.020346, lng:-105.256657, horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "boulder-city": {nombre:"Boulder City", centro:[35.978765, -114.833757], tz:"America/Los_Angeles", lugares:[
  {n:"See Spot Run", cat:"parque", lat:35.949386, lng:-114.846686, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bountiful": {nombre:"Bountiful", centro:[40.889461, -111.880482], tz:"America/Denver", lugares:[
  {n:"Brush, Bath and Beyond", cat:"peluqueria", lat:40.884778, lng:-111.882618, dir:"445 South 100 West, Bountiful", tel:"+1-801-682-6634", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Shower Love", cat:"peluqueria", lat:40.885002, lng:-111.880481, dir:"409 South Main Street, Bountiful", tel:"+1-801-898-1291", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery and Grooming", cat:"peluqueria", lat:40.882159, lng:-111.884444, dir:"555 South 200 West, Bountiful", tel:"+1-801-308-8064", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "bow-mar": {nombre:"Bow Mar", centro:[39.628321, -105.049984], tz:"America/Denver", lugares:[
  {n:"The Modern Apartments dog run", cat:"parque", lat:39.65479, lng:-105.065612, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Loving Paws", cat:"peluqueria", lat:39.622824, lng:-105.034597, dir:"5182 South Lowell Boulevard, Bow Mar", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:39.657961, lng:-105.080103, dir:"3214 S Wadsworth Blvd, Bow Mar", tel:"+1-720-303-5446", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Come Sit Stay Littleton", cat:"refugio", lat:39.577925, lng:-105.139147, dir:"12692 Ken Caryl Avenue, Bow Mar", tel:"+1-720-382-7659", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.617284, lng:-105.088304, dir:"8100 West Crestline Avenue, Bow Mar", tel:"+1-303-973-7057", horas:[10.5, 19.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.617117, lng:-105.093108, dir:"8500 West Crestline Avenue, Bow Mar", tel:"+1-303-948-6364", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Bouton Veterinary Hospital", cat:"vet", lat:39.622922, lng:-105.118016, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canyon View Animal Hospital", cat:"vet", lat:39.579056, lng:-105.135431, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Just For Paws Veterinary", cat:"vet", lat:39.595643, lng:-105.106285, dir:"9789 West Coal Mine Avenue, Bow Mar", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bozeman": {nombre:"Bozeman", centro:[45.679429, -111.044047], tz:"America/Denver", lugares:[
  {n:"Dog Park", cat:"parque", lat:45.674257, lng:-111.082919, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lewis & Bark Dog Park", cat:"parque", lat:45.6767, lng:-111.082241, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Snowfill Recreation Area", cat:"parque", lat:45.720648, lng:-111.032643, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shih Tzu's & Giggles Grooming", cat:"peluqueria", lat:45.700456, lng:-111.031206, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barkenhowell's", cat:"tienda", lat:45.67073, lng:-111.077245, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bridger Animal Nutrition", cat:"tienda", lat:45.697462, lng:-111.042565, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dee-O-Gee", cat:"tienda", lat:45.694038, lng:-111.064292, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:45.671572, lng:-111.079462, dir:"2911 West Main Street, Bozeman", tel:"+1-406-585-1780", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:45.709906, lng:-111.071139, dir:"2997 Max Avenue, Bozeman", tel:"+1-406-522-1515", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"360 Pet Medical", cat:"vet", lat:45.706693, lng:-111.04426, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Baxter Creek Veterinary Clinic", cat:"vet", lat:45.686924, lng:-111.062804, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bridger Veterinary Specialists", cat:"vet", lat:45.716994, lng:-111.0615, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Creekside Veterinary Hospital", cat:"vet", lat:45.681803, lng:-111.047052, dir:"216 North 8th Avenue, Bozeman", tel:"+1-406-587-2946", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Faithful Friends", cat:"vet", lat:45.677544, lng:-111.071339, dir:"205 Edelweiss Drive, Bozeman", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Foothills Veterinary Hospital", cat:"vet", lat:45.702863, lng:-111.026592, dir:"707 Bridger Drive, Bozeman", tel:"+1-406-556-0604", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Gallatin Veternary Hospital", cat:"vet", lat:45.716489, lng:-111.06021, dir:"1335 Reeves Road East, Bozeman", horas:[7.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Montana Veterinary Diagnostic Labratory", cat:"vet", lat:45.664697, lng:-111.064326, tel:"+1-406-994-4885", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Emergency Trauma Services", cat:"vet", lat:45.718907, lng:-111.064802, tel:"+1-406-587-3996", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Montana Grizzly Encounter", cat:"zoo", lat:45.663969, lng:-110.834041, dir:"18000 Bozeman Hill Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "breckenridge": {nombre:"Breckenridge", centro:[39.482912, -106.046549], tz:"America/Denver", lugares:[
  {n:"Bark'nridge Boutique", cat:"tienda", lat:39.482108, lng:-106.046597, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Downhill Dog", cat:"tienda", lat:39.476906, lng:-106.045126, dir:"505 South Main Street, Breckenridge", tel:"+1-970-771-3946", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Breckenridge Animal Clinic", cat:"vet", lat:39.495512, lng:-106.045097, dir:"11072 Highway 9, Breckenridge", tel:"+1-970-453-0821", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "brigham-city": {nombre:"Brigham City", centro:[41.511043, -112.015499], tz:"America/Denver", lugares:[
  {n:"The Barking Lot", cat:"parque", lat:41.508615, lng:-112.032099, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "brighton-colorado": {nombre:"Brighton", centro:[39.983721, -104.811077], tz:"America/Denver", lugares:[
  {n:"Erger's Dog Park", cat:"parque", lat:39.977722, lng:-104.833046, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brighton Animal Control", cat:"refugio", lat:39.993425, lng:-104.824885, dir:"325 Kuner Road, Brighton", tel:"+1-303-655-2300", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.951789, lng:-104.785413, dir:"2435 Prairie Center Parkway, Brighton", tel:"+1-303-637-9232", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Bridge Street Veterinary Clinic", cat:"vet", lat:39.987079, lng:-104.806408, dir:"1245 East Bridge Street, Brighton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brighton Animal Clinic", cat:"vet", lat:39.97177, lng:-104.821322, dir:"180 East Bromley Lane, Brighton", tel:"+1-303-659-2472", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Horizon Verterinary Clinic", cat:"vet", lat:39.986468, lng:-104.791039, dir:"2730 East Bridge Street, Brighton", tel:"+1-303-659-0385", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "broomfield": {nombre:"Broomfield", centro:[39.940399, -105.05208], tz:"America/Denver", lugares:[
  {n:"Broomfield County Commons Dog Park", cat:"parque", lat:39.939586, lng:-105.050288, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camden Flatirons Dog Park", cat:"parque", lat:39.917186, lng:-105.10076, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Uptown Dog Park", cat:"parque", lat:39.900441, lng:-105.086294, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dirty Dog Grooming & Pet Boutique", cat:"peluqueria", lat:39.931826, lng:-105.088837, dir:"1100 US Highway 287, Broomfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggy Style", cat:"peluqueria", lat:39.924616, lng:-105.092541, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck and Dons", cat:"tienda", lat:39.912409, lng:-105.045765, dir:"4550 Main Street, Broomfield", tel:"+1-720-772-3059", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Life", cat:"tienda", lat:39.924803, lng:-105.092291, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kriser's Natural Pet", cat:"tienda", lat:39.91245, lng:-105.05116, dir:"5160 West 120th Avenue, Broomfield", tel:"+1-303-404-9992", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Liquid Kingdom Saltwater Fish", cat:"tienda", lat:39.912882, lng:-105.067752, dir:"6470 West 120th Avenue, Broomfield", tel:"+1-303-460-8487", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.917027, lng:-105.054143, dir:"12163 Sheridan Boulevard, Broomfield", tel:"+1-303-635-1540", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.88957, lng:-105.075058, dir:"10460 Town Center Drive, Broomfield", tel:"+1-303-466-2834", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wag N' Wash Natural Pet Food & Grooming", cat:"tienda", lat:39.93203, lng:-105.088739, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Willow Run", cat:"tienda", lat:39.912812, lng:-105.059263, dir:"5700 West 120th Avenue, Broomfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arrowhead Animal Hospital PC", cat:"vet", lat:39.904915, lng:-105.052504, dir:"11490 Sheridan Boulevard, Broomfield", horas:[7.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Broadlands Veterinary Clinic", cat:"vet", lat:39.956779, lng:-105.037983, dir:"3800 West 144th Avenue, Broomfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Broomfield Meadows Animal Hospital", cat:"vet", lat:39.943622, lng:-105.04939, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Broomfield Veterinary Hospital", cat:"vet", lat:39.925966, lng:-105.034728, dir:"12621 Lowell Boulevard, Broomfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Company of Animals", cat:"vet", lat:39.943622, lng:-105.049064, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Animal Doctor", cat:"vet", lat:39.929168, lng:-105.089348, dir:"1705 West 10th Avenue, Broomfield", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "browning-montana": {nombre:"Browning", centro:[48.557743, -113.017258], tz:"America/Denver", lugares:[
  {n:"GRASS WINDS VETERINARY CLINIC", cat:"vet", lat:48.60803, lng:-112.750155, dir:"23564 US 2, Browning", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "buckeye": {nombre:"Buckeye", centro:[33.37032, -112.583776], tz:"America/Phoenix", lugares:[
  {n:"Puppy Love", cat:"parque", lat:33.295073, lng:-112.429373, dir:"17700 West Star Point Drive, Buckeye", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Groom Room", cat:"peluqueria", lat:33.37166, lng:-112.586298, dir:"202 North 4th Street, Buckeye", tel:"+1-623-229-5018", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.442809, lng:-112.558692, dir:"466 South Watson Road, Buckeye", tel:"+1-623-327-1444", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Buckeye Veterinary Services", cat:"vet", lat:33.37786, lng:-112.56826, dir:"24090 West MC 85, Buckeye", tel:"+1-623-386-2532", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - North Buckeye", cat:"vet", lat:33.433219, lng:-112.558424, dir:"1480 South Watson Road, Buckeye", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bullhead-city": {nombre:"Bullhead City", centro:[35.145, -114.56278], tz:"America/Phoenix", lugares:[
  {n:"Community Park Dog Park", cat:"parque", lat:35.141033, lng:-114.571202, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Off-leash Park", cat:"parque", lat:35.092969, lng:-114.62884, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rotary Dog Park", cat:"parque", lat:35.092986, lng:-114.628445, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Off-leash Park", cat:"parque", lat:35.092969, lng:-114.628098, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Amys Dog Grooming", cat:"peluqueria", lat:35.108107, lng:-114.603476, dir:"1305 Hancock Road, Bullhead City", tel:"+1-928-758-0110", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spirit Mountain Animal Hospital", cat:"vet", lat:35.110168, lng:-114.612549, dir:"1670 Lakeside Drive, Bullhead City", tel:"+1-928-758-3979", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "bunkerville": {nombre:"Bunkerville", centro:[36.771772, -114.126766], tz:"America/Los_Angeles", lugares:[
  {n:"BARK! Canine Club & Resort", cat:"refugio", lat:36.789965, lng:-114.129946, dir:"770 Cimmaron Court, Bunkerville", tel:"+1-702-306-6146", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "butte": {nombre:"Butte", centro:[46.013151, -112.536508], tz:"America/Denver", lugares:[
  {n:"Skyline Dog Park", cat:"parque", lat:45.98611, lng:-112.483474, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Butte Silver Bow Animal Shelter", cat:"refugio", lat:45.998216, lng:-112.551012, dir:"699 Centennial Avenue, Butte", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:45.971874, lng:-112.507429, dir:"3636 Harrison Avenue, Butte", tel:"+1-406-494-2256", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Clinic", cat:"vet", lat:45.977154, lng:-112.506384, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "caldwell-idaho": {nombre:"Caldwell", centro:[43.667874, -116.689415], tz:"America/Denver", lugares:[
  {n:"Glover's Grooming", cat:"peluqueria", lat:43.662933, lng:-116.685231, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canyon County Animal Shelter", cat:"refugio", lat:43.629874, lng:-116.633405, dir:"5801 Graye Lane, Caldwell", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blaney Veterinary Clinic", cat:"vet", lat:43.641994, lng:-116.656125, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canyon Small Animal Hospital", cat:"vet", lat:43.634482, lng:-116.692704, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cleveland Pet Hospital", cat:"vet", lat:43.651049, lng:-116.669616, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "camp-verde-matthi-wa-gambudih": {nombre:"Camp Verde / ʼMatthi:wa / Gambúdih", centro:[34.62125, -111.893242], tz:"America/Phoenix", lugares:[
  {n:"Out of Africa Wildlife Park", cat:"zoo", lat:34.612641, lng:-111.9207, dir:"3505 State Route 260, Camp Verde / ʼMatthi:wa / Gambúdih", horas:[9.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Out of Africa Wildlife Park", cat:"zoo", lat:34.612032, lng:-111.923321, dir:"3505 State Route 260, Camp Verde / ʼMatthi:wa / Gambúdih", horas:[9.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "canon-city": {nombre:"Cañon City", centro:[38.442251, -105.23488], tz:"America/Denver", lugares:[
  {n:"K & 9 Cuts & Grooming", cat:"peluqueria", lat:38.440098, lng:-105.24014, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Dogs CBD", cat:"tienda", lat:38.440693, lng:-105.241116, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eskridge Vet Clinic", cat:"vet", lat:38.461922, lng:-105.23912, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carbondale": {nombre:"Carbondale", centro:[39.400565, -107.211241], tz:"America/Denver", lugares:[
  {n:"Carbondale Nature Park", cat:"parque", lat:39.405743, lng:-107.212054, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carbondale Animal Hospital", cat:"vet", lat:39.400648, lng:-107.209753, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carefree": {nombre:"Carefree", centro:[33.822238, -111.918166], tz:"America/Phoenix", lugares:[
  {n:"The Pet Salon", cat:"peluqueria", lat:33.697069, lng:-111.915939, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Always Unleashed Pet Resort", cat:"refugio", lat:33.688224, lng:-111.924996, dir:"7230 East Adobe Drive, Carefree", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carefree Pet Resort", cat:"refugio", lat:33.822794, lng:-111.919673, dir:"7509 East Cave Creek Road, Carefree", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bosco's Biscuits", cat:"tienda", lat:33.821135, lng:-111.923479, dir:"36889 North Tom Darlington Drive, Carefree", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:33.769763, lng:-111.924572, dir:"31319 North Scottsdale Road, Carefree", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.781873, lng:-111.924775, dir:"32633 North Scottsdale Road, Carefree", tel:"+1-480-477-5222", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"See Spot Shop", cat:"tienda", lat:33.78046, lng:-111.9232, dir:"32531 North Scottsdale Road, Carefree", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Healthy Hound", cat:"tienda", lat:33.825244, lng:-111.922843, dir:"42 East Easy Street, Carefree", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital At Terravita", cat:"vet", lat:33.798234, lng:-111.930168, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Specialty Group of Scottsdale", cat:"vet", lat:33.699591, lng:-111.920755, dir:"7410 East Pinnacle Peak Road, Carefree", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arizona Animal Hospital", cat:"vet", lat:33.769927, lng:-111.924434, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arizona Veterinary Oncology", cat:"vet", lat:33.690992, lng:-111.924204, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BluePearl", cat:"vet", lat:33.69101, lng:-111.924374, dir:"22595 North Scottsdale Road, Carefree", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eye Care for Animals", cat:"vet", lat:33.690902, lng:-111.924383, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pinnacle Peak Animal Hospital", cat:"vet", lat:33.699209, lng:-111.922849, dir:"23425 North Scottsdale Road, Carefree", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southwest Veterinary Surgical Service", cat:"vet", lat:33.691129, lng:-111.924351, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vetcare Internal Medicine", cat:"vet", lat:33.691219, lng:-111.924636, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Specialty & Emergency Center", cat:"vet", lat:33.691012, lng:-111.92449, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carlsbad-new-mexico": {nombre:"Carlsbad", centro:[32.425746, -104.237612], tz:"America/Denver", lugares:[
  {n:"Carlsbad Dog Park", cat:"parque", lat:32.414769, lng:-104.224976, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Noah's Ark -- Carlsbad Animal Shelter", cat:"refugio", lat:32.351321, lng:-104.246783, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petsense", cat:"tienda", lat:32.436485, lng:-104.23696, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carlsbad Animal Clinic", cat:"vet", lat:32.431897, lng:-104.226022, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"La Cueva Pet Care Center", cat:"vet", lat:32.435408, lng:-104.234097, dir:"West Pierce Street, Carlsbad", tel:"+1-575-885-0021", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "carson-city-nevada": {nombre:"Carson City", centro:[39.166326, -119.767037], tz:"America/Los_Angeles", lugares:[
  {n:"Sonoma Park", cat:"parque", lat:39.139685, lng:-119.757696, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawsitive Image Grooming", cat:"peluqueria", lat:39.159956, lng:-119.750192, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BooBoo's Buddies Llc", cat:"refugio", lat:39.192584, lng:-119.749272, dir:"1749 Old Hot Springs Road, Carson City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.151625, lng:-119.765519, dir:"250 Fairview Drive, Carson City", tel:"+1-775-841-9200", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Carson Tahoe Veterinary Hospital", cat:"vet", lat:39.136668, lng:-119.768468, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sierra Veterinary Hospital", cat:"vet", lat:39.173575, lng:-119.750506, dir:"1477 North Saliman Road, Carson City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Timberline Animal Hospital", cat:"vet", lat:39.170243, lng:-119.76758, tel:"+1-775-882-1686", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "casa-grande": {nombre:"Casa Grande", centro:[32.877283, -111.753682], tz:"America/Phoenix", lugares:[
  {n:"A Leash on Life Dog Park", cat:"parque", lat:32.929782, lng:-111.757958, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.882552, lng:-111.677606, dir:"986 North Mission Parkway, Casa Grande", tel:"+1-520-426-1901", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"vet", lat:32.950446, lng:-111.757735, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Casa Grande Animal Hospital", cat:"vet", lat:32.895851, lng:-111.758173, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "casper": {nombre:"Casper", centro:[42.850119, -106.325138], tz:"America/Denver", lugares:[
  {n:"Casper Humane Society", cat:"refugio", lat:42.856206, lng:-106.313725, dir:"849 East E Street, Casper", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "castle-pines": {nombre:"Castle Pines", centro:[39.470285, -104.880438], tz:"America/Denver", lugares:[
  {n:"Glendale Open Space Dog Park", cat:"parque", lat:39.488822, lng:-104.8704, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Center of Castle Pines", cat:"vet", lat:39.470047, lng:-104.874492, dir:"562 East Castle Pines Parkway", tel:"+1-720-901-5635", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Rehabilation & Wellness Center", cat:"vet", lat:39.470117, lng:-104.874614, dir:"562 East Castle Pines Parkway", tel:"+1-720-901-5635", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Behavior Vets of CO", cat:"vet", lat:39.470046, lng:-104.874223, dir:"562 East Castle Pines Parkway", tel:"+1-720-484-5000", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Castle Pines Veterinary Hospital", cat:"vet", lat:39.470798, lng:-104.878837, dir:"363 Village Square Lane, Castle Pines", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "castle-pines-village": {nombre:"Castle Pines Village", centro:[39.432938, -104.895601], tz:"America/Denver", lugares:[
  {n:"Wiggly Field", cat:"parque", lat:39.399903, lng:-104.905011, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dumb Friends League Buddy Center", cat:"refugio", lat:39.407404, lng:-104.866142, dir:"4556 Castleton Court, Castle Pines Village", tel:"+1-303-751-5772", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's Pet Food & Supplies", cat:"tienda", lat:39.409217, lng:-104.864485, dir:"4765 Front Street, Castle Pines Village", tel:"+1-720-359-2430", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.422393, lng:-104.876351, dir:"6378 Promenande Parkway, Castle Pines Village", tel:"+1-303-537-9000", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Cherished Companions Animal Clinic", cat:"vet", lat:39.409642, lng:-104.859409, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "castle-rock": {nombre:"Castle Rock", centro:[39.372255, -104.858682], tz:"America/Denver", lugares:[
  {n:"Douglas County Off-leash Area", cat:"parque", lat:39.359827, lng:-104.849902, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Terrain Dog Bone Park", cat:"parque", lat:39.383324, lng:-104.821415, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"4 Paws Pet Grooming", cat:"peluqueria", lat:39.385561, lng:-104.868692, dir:"1647 Park Street, Castle Rock", tel:"+1-303-688-6607", horas:[7.5, 13.5], nota:"Dato de OpenStreetMap"},
  {n:"Dog Wash and Grooming", cat:"tienda", lat:39.366602, lng:-104.85989, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.408117, lng:-104.861453, dir:"4654 Milestone Lane, Castle Rock", tel:"+1-720-733-6282", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wags n Walks", cat:"tienda", lat:39.391028, lng:-104.74974, dir:"East State Highway 86, Castle Rock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brooklyn Veterinary Clinic", cat:"vet", lat:39.400203, lng:-104.876617, dir:"1320 Virtuoso Loop, Castle Rock", tel:"+1-303-688-9352", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Castle Rock Cat Hospital", cat:"vet", lat:39.376873, lng:-104.870662, dir:"612 Atchison Way, Castle Rock", tel:"+1-303-622-5419", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Castle Rock Veterinary Clinic", cat:"vet", lat:39.378498, lng:-104.862768, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Franktown Animal Clinic", cat:"vet", lat:39.390346, lng:-104.746288, dir:"7658 Burning Tree Drive, Castle Rock", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VetERinary Specialists of the Rockies", cat:"vet", lat:39.407021, lng:-104.85422, dir:"774 Maleta Lane, Castle Rock", tel:"+1-303-660-1027", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "catalina": {nombre:"Catalina", centro:[32.499615, -110.926146], tz:"America/Phoenix", lugares:[
  {n:"Dog Park @ SaddleBrooke Two", cat:"parque", lat:32.513084, lng:-110.904242, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cattle-creek": {nombre:"Cattle Creek", centro:[39.458316, -107.262553], tz:"America/Denver", lugares:[
  {n:"CARE Colorado Animal Rescue", cat:"refugio", lat:39.4732, lng:-107.235719, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cave-creek": {nombre:"Cave Creek", centro:[33.833333, -111.950833], tz:"America/Phoenix", lugares:[
  {n:"Lovet Pet Health Care - Dove Valley", cat:"vet", lat:33.797133, lng:-111.977611, dir:"4815 East Carefree Highway, Cave Creek", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cedar-city": {nombre:"Cedar City", centro:[37.677424, -113.061827], tz:"America/Denver", lugares:[
  {n:"PetSense", cat:"tienda", lat:37.667602, lng:-113.064108, dir:"582 S Main Street, Cedar City", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "cedar-crest": {nombre:"Cedar Crest", centro:[35.107553, -106.373426], tz:"America/Denver", lugares:[
  {n:"Dog", cat:"tienda", lat:35.130129, lng:-106.365277, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cedar-hills": {nombre:"Cedar Hills", centro:[40.414117, -111.758541], tz:"America/Denver", lugares:[
  {n:"Art Dye Dog Park", cat:"parque", lat:40.399652, lng:-111.782653, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "centennial": {nombre:"Centennial", centro:[39.579155, -104.876923], tz:"America/Denver", lugares:[
  {n:"Halee's Puppy Love", cat:"peluqueria", lat:39.595713, lng:-104.84752, dir:"12201 East Arapahoe Road, Centennial", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Paw Grooming", cat:"peluqueria", lat:39.59447, lng:-104.86016, dir:"11001 East Arapahoe Place, Centennial", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:39.589469, lng:-104.860326, dir:"7009 South Kenton Street, Centennial", tel:"+1-720-697-7491", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Bark", cat:"refugio", lat:39.592466, lng:-104.859264, dir:"6840 South Kenton Street, Centennial", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:39.565426, lng:-104.91432, dir:"6448 East County Line Road, Centennial", tel:"+1-303-835-4549", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hobnob", cat:"refugio", lat:39.595698, lng:-104.877448, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bentley's Pets", cat:"tienda", lat:39.595572, lng:-104.893021, dir:"8501 East Arapahoe Road, Centennial", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hale Pet Door", cat:"tienda", lat:39.592397, lng:-104.877382, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kriser's", cat:"tienda", lat:39.625635, lng:-104.883264, dir:"4930 South Yosemite Street, Centennial", tel:"+1-303-770-0765", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Outward Hound", cat:"tienda", lat:39.583487, lng:-104.841763, dir:"7337 South Revere Parkway, Centennial", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.567327, lng:-104.879617, dir:"9425 East County Line Road, Centennial", tel:"+1-303-708-0616", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.559842, lng:-104.879317, dir:"8695 South Park Meadows Center Drive, Centennial", tel:"+1-303-799-3575", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Companion Animal Veterinary", cat:"vet", lat:39.568171, lng:-104.924178, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Critter Care Animal Hospital", cat:"vet", lat:39.595566, lng:-104.84679, dir:"12201 East Arapahoe Road, Centennial", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gems Veterinary/Urgent Care", cat:"vet", lat:39.59551, lng:-104.8492, dir:"12073 East Arapahoe Road, Centennial", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Greenwood Village Veterinary Clinic", cat:"vet", lat:39.610701, lng:-104.886319, dir:"8775 East Orchard Road, Centennial", tel:"+1-303-771-6304", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"}
 ]},
 "centerville-utah": {nombre:"Centerville", centro:[40.918, -111.87216], tz:"America/Denver", lugares:[
  {n:"Syndee's Pet Grooming and Academy", cat:"peluqueria", lat:40.919208, lng:-111.889445, dir:"663 West Marketplace Drive, Centerville", tel:"+1-385-777-5683", horas:[8.0, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.916969, lng:-111.886569, dir:"100 North Marketplace Drive, Centerville", tel:"+1-801-294-3273", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Parrish Creek Veterinary Clinic", cat:"vet", lat:40.917901, lng:-111.879762, dir:"86 N 70 West, Centerville", tel:"+1-801-298-2014", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "central-heights-midland-city": {nombre:"Central Heights-Midland City", centro:[33.414126, -110.818133], tz:"America/Phoenix", lugares:[
  {n:"Animal Magnetism", cat:"peluqueria", lat:33.415787, lng:-110.80201, dir:"1800 North Broad Street, Central Heights-Midland City", tel:"+1-928-425-5997", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "challis": {nombre:"Challis", centro:[44.505132, -114.23137], tz:"America/Denver", lugares:[
  {n:"Lone Pine Animal Hospital", cat:"vet", lat:44.46672, lng:-114.196315, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chandler": {nombre:"Chandler", centro:[33.306203, -111.841185], tz:"America/Phoenix", lugares:[
  {n:"Express Veterinary Pharmacy", cat:"farma", lat:33.260911, lng:-111.860081, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aunt Donna's Grooming", cat:"peluqueria", lat:33.320052, lng:-111.822747, dir:"1025 East Ray Road, Chandler", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cuts For Pups", cat:"peluqueria", lat:33.334321, lng:-111.845971, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dippity Do Dog", cat:"peluqueria", lat:33.27507, lng:-111.860661, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Elite Paw Spa", cat:"peluqueria", lat:33.247751, lng:-111.792937, dir:"2801 2801 East Ocotillo Road;East Ocotillo Road, Chandler", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Jens' Pet Parlor", cat:"peluqueria", lat:33.305007, lng:-111.786844, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Wag Dog Salon", cat:"peluqueria", lat:33.264084, lng:-111.860677, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"American Service Animal Society", cat:"refugio", lat:33.291115, lng:-111.773344, dir:"3249 South Lindsay Road, Chandler", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arizona Canine Center", cat:"refugio", lat:33.330812, lng:-111.87551, dir:"1535 North Dobson Road, Chandler", tel:"+1-480-838-1517", horas:[6.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Happy Pets Palace & Playground", cat:"refugio", lat:33.292868, lng:-111.822181, dir:"1080 East Pecos Road, Chandler", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Artistic Aquariums, Inc", cat:"tienda", lat:33.31183, lng:-111.85996, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Clips", cat:"tienda", lat:33.261041, lng:-111.756869, dir:"4902 South Val Vista Drive, Chandler", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Market", cat:"tienda", lat:33.3183, lng:-111.892037, dir:"2915 West Ray Road, Chandler", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Planet", cat:"tienda", lat:33.247056, lng:-111.788235, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.307417, lng:-111.899608, dir:"3452 West Chandler Boulevard", tel:"+1-480-337-7171", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.281405, lng:-111.791491, dir:"2860 East Germann Road, Chandler", tel:"+1-480-722-1358", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.307923, lng:-111.890783, dir:"2840 West Chandler Boulevard", tel:"+1-480-782-7727", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSuites Chandler", cat:"tienda", lat:33.283542, lng:-111.842807, dir:"77 West Willis Road, Chandler", tel:"+1-480-480-2137", horas:[6.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Prestige Pet Salon", cat:"tienda", lat:33.260759, lng:-111.790577, dir:"3140 South Gilbert Road, Chandler", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Shoppers Supply", cat:"tienda", lat:33.263499, lng:-111.86212, dir:"2880 South Alma School Road, Chandler", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Three Dog Bakery", cat:"tienda", lat:33.261221, lng:-111.860626, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Your Mom Loves My Coral", cat:"tienda", lat:33.360717, lng:-111.859739, dir:"2950 South Alma School Road, Chandler", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"1st Pet Veterinary Centers", cat:"vet", lat:33.334671, lng:-111.861902, dir:"1233 West Warner Road, Chandler", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arizona Avenue Animal Clinic", cat:"vet", lat:33.327369, lng:-111.842702, dir:"7 West Knox Road, Chandler", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.308145, lng:-111.890696, dir:"2840 West Chandler Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.281559, lng:-111.791387, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chandler Gilbert Animal Hospital", cat:"vet", lat:33.262383, lng:-111.791489, dir:"3020 South Gilbert Road, Chandler", tel:"+1-480-413-1111", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Copper Mountain Animal Hospital", cat:"vet", lat:33.262516, lng:-111.860395, tel:"+1-480-590-6044", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Crossroads Veterinary Hospital", cat:"vet", lat:33.2796, lng:-111.788044, dir:"3871 South Gilbert Road, Chandler", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dairy Veterinary Services", cat:"vet", lat:33.321268, lng:-111.848882, dir:"500 West Ray Road, Chandler", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Homeward Bound Spay Neuter Hospital", cat:"vet", lat:33.293304, lng:-111.823608, dir:"1020 East Pecos Road, Chandler", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - Dobson Ranch", cat:"vet", lat:33.361735, lng:-111.876063, dir:"2917 South Dobson Road, Chandler", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oasis Animal Hospital", cat:"vet", lat:33.320056, lng:-111.822407, dir:"1025 East Ray Road, Chandler", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ocotillo Animal Clinic & Pet Resort", cat:"vet", lat:33.257627, lng:-111.839797, dir:"3333 South Arizona Avenue, Chandler", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Priority Pet Hospital", cat:"vet", lat:33.261057, lng:-111.756956, dir:"4902 South Val Vista Drive, Chandler", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spay Neuter Clinic: Chandler", cat:"vet", lat:33.274977, lng:-111.860891, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospitals Urgent Care", cat:"vet", lat:33.276694, lng:-111.791807, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cherry-hills-village": {nombre:"Cherry Hills Village", centro:[39.641654, -104.959425], tz:"America/Denver", lugares:[
  {n:"Kriser's All-Natural Pet Shop", cat:"peluqueria", lat:39.654348, lng:-104.96065, dir:"3475 South University Boulevard, Cherry Hills Village", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cheyenne-wyoming": {nombre:"Cheyenne", centro:[41.139981, -104.820246], tz:"America/Denver", lugares:[
  {n:"Black Dog Animal Rescue", cat:"refugio", lat:41.133556, lng:-104.788597, horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Cheyenne Dog Food Company", cat:"tienda", lat:41.145883, lng:-104.8305, dir:"801 West Pershing Boulevard, Cheyenne", tel:"+1-307-514-6555", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Frontier Pets", cat:"tienda", lat:41.162765, lng:-104.804713, dir:"1400 Dell Range Boulevard, Cheyenne", tel:"+1-307-638-4183", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.161841, lng:-104.797543, dir:"1782 Prairie Avenue, Cheyenne", tel:"+1-307-632-8692", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Broadmoor East Veterinary Clinic", cat:"vet", lat:41.145809, lng:-104.757991, dir:"4218 East Pershing Boulevard, Cheyenne", tel:"+1-307-634-2912", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cheyenne Pet Clinic", cat:"vet", lat:41.140952, lng:-104.764438, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "choteau": {nombre:"Choteau", centro:[47.812243, -112.183375], tz:"America/Denver", lugares:[
  {n:"Hair of the Dog", cat:"peluqueria", lat:47.807936, lng:-112.180211, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East Slope Veternary", cat:"vet", lat:47.807795, lng:-112.180303, dir:"302 Main Avenue South, Choteau", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "chubbuck": {nombre:"Chubbuck", centro:[42.920297, -112.46619], tz:"America/Denver", lugares:[
  {n:"McKee's", cat:"tienda", lat:42.916585, lng:-112.465232, horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"McKee's Garden and Pet Center", cat:"tienda", lat:42.920686, lng:-112.465477, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:42.911499, lng:-112.467707, dir:"4335 Yellowstone Avenue, Chubbuck", tel:"+1-208-238-0380", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Alpine Animal Hospital", cat:"vet", lat:42.917523, lng:-112.461691, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"McKee's Petting Zoo", cat:"zoo", lat:42.916922, lng:-112.464839, horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "circle": {nombre:"Circle", centro:[47.416675, -105.592222], tz:"America/Denver", lugares:[
  {n:"Circle Vet Clinic", cat:"vet", lat:47.433965, lng:-105.570505, dir:"77 State Highway 13, Circle", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cleveland-utah": {nombre:"Cleveland", centro:[39.348921, -110.851702], tz:"America/Denver", lugares:[
  {n:"Corral", cat:"refugio", lat:39.211342, lng:-110.599711, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clifton-colorado": {nombre:"Clifton", centro:[39.091926, -108.448978], tz:"America/Denver", lugares:[
  {n:"Agape Professional Pet Grooming", cat:"peluqueria", lat:39.088867, lng:-108.459997, dir:"571 32 Road, Clifton", tel:"+1-830-837-2297", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clifton Animal Hospital", cat:"vet", lat:39.092051, lng:-108.448942, dir:"3256 F Road, Clifton", tel:"+1-970-523-0954", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Grand Valley Veterinary Emergency Center", cat:"vet", lat:39.089227, lng:-108.460017, dir:"573 32 Road, Clifton", tel:"+1-970-255-1911", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clinton-utah": {nombre:"Clinton", centro:[41.147162, -112.054839], tz:"America/Denver", lugares:[
  {n:"Roy Dog Park", cat:"parque", lat:41.158473, lng:-112.058277, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.142795, lng:-112.062666, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "clovis-new-mexico": {nombre:"Clovis", centro:[34.405472, -103.205071], tz:"America/Denver", lugares:[
  {n:"Hillcrest Dog Park", cat:"parque", lat:34.407371, lng:-103.185394, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"My Dogs Groomer", cat:"peluqueria", lat:34.410131, lng:-103.214015, dir:"1201 North Thornton Street, Clovis", tel:"+1-970-889-8393", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Clovis Veterinary Supply", cat:"tienda", lat:34.404933, lng:-103.230459, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.436484, lng:-103.197536, dir:"601 Texas Street, Clovis", tel:"+1-575-219-3405", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"All Pets", cat:"vet", lat:34.437847, lng:-103.19681, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hillcrest Zoo", cat:"zoo", lat:34.409433, lng:-103.184834, dir:"1208 North Norris Street, Clovis", tel:"+1-575-769-7873", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cody-wyoming": {nombre:"Cody", centro:[44.526311, -109.056392], tz:"America/Denver", lugares:[
  {n:"Lifetime Small Animal Hospital", cat:"vet", lat:44.533813, lng:-109.039624, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yellowstone Veterinary Hospital", cat:"vet", lat:44.512327, lng:-109.108146, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "coeur-d-alene": {nombre:"Coeur d'Alene", centro:[47.674299, -116.781153], tz:"America/Los_Angeles", lugares:[
  {n:"Angelheart Pet Salon", cat:"peluqueria", lat:47.690964, lng:-116.785209, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Apryl's 3rd St Doghouse", cat:"peluqueria", lat:47.691724, lng:-116.782482, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dawn's Purple Poodle", cat:"peluqueria", lat:47.673187, lng:-116.763669, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Guardian Angel Grooming", cat:"peluqueria", lat:47.703322, lng:-116.792508, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Coeur D'Alene Pet Resort & Doggie Day Care", cat:"refugio", lat:47.690467, lng:-116.784977, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"StanCraft Marine Center", cat:"refugio", lat:47.691441, lng:-116.801735, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Duncan's Pet Shop", cat:"tienda", lat:47.687334, lng:-116.785775, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lake City Pet Hospital", cat:"vet", lat:47.680995, lng:-116.791431, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Midtown Animal Medical Center", cat:"vet", lat:47.685265, lng:-116.780311, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "college-ward": {nombre:"College Ward", centro:[41.676764, -111.879633], tz:"America/Denver", lugares:[
  {n:"Heritage Animal Hospital", cat:"vet", lat:41.689951, lng:-111.86667, dir:"2365 South Heritage Drive, College Ward", tel:"+1-435-535-3634", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "colorado-city-colorado": {nombre:"Colorado City", centro:[37.945286, -104.835263], tz:"America/Denver", lugares:[
  {n:"Stewart Thoroughbred Horse Ranch", cat:"refugio", lat:37.94799, lng:-104.823743, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Churan Thomas J DVM", cat:"vet", lat:37.953139, lng:-104.815942, dir:"6850 State Highway 165, Colorado City", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "colorado-springs": {nombre:"Colorado Springs", centro:[38.833958, -104.825348], tz:"America/Denver", lugares:[
  {n:"Agility Course", cat:"parque", lat:38.825865, lng:-104.860914, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Breed Rescue & Training", cat:"parque", lat:38.874887, lng:-104.814312, dir:"410 East Fillmore Street, Colorado Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Antlers Dog Park", cat:"parque", lat:38.834131, lng:-104.827122, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bear Creek Dog Park", cat:"parque", lat:38.826456, lng:-104.861653, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park", cat:"parque", lat:38.872198, lng:-104.763227, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Run Area", cat:"parque", lat:38.883739, lng:-104.776121, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pub Dog", cat:"parque", lat:38.840448, lng:-104.863358, dir:"2207 Bott Avenue, Colorado Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Area", cat:"parque", lat:38.825169, lng:-104.860823, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Furry Afffair Pet Salon", cat:"peluqueria", lat:38.89657, lng:-104.739469, dir:"4775 Barnes Road, Colorado Springs", tel:"+1-719-574-1458", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Critter Clips", cat:"peluqueria", lat:38.925524, lng:-104.773112, dir:"2873 Dublin Boulevard, Colorado Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eva's Grooming", cat:"peluqueria", lat:38.884873, lng:-104.739259, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fur & Feathers Pet Grooming", cat:"peluqueria", lat:38.894912, lng:-104.757672, dir:"4342 Montebello Drive, Colorado Springs", tel:"+1-719-591-0134", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Soggy Doggies Grooming", cat:"peluqueria", lat:38.846431, lng:-104.731507, dir:"5219 Galley Road, Colorado Springs", tel:"+1-719-597-2345", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Zoom Room Dog Training", cat:"peluqueria", lat:38.909472, lng:-104.783187, dir:"2360 Montebello Square Drive, Colorado Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of the Pikes Peak Region", cat:"refugio", lat:38.825308, lng:-104.836933, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Prime Time Pups", cat:"refugio", lat:38.846425, lng:-104.731439, dir:"5221 Galley Road, Colorado Springs", tel:"+1-719-375-2888", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Cute Clips Pet Salon", cat:"tienda", lat:38.864969, lng:-104.756151, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Exotic Bird Shop", cat:"tienda", lat:38.83726, lng:-104.808452, dir:"845 East Platte Avenue, Colorado Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Furry Friends, Inc.", cat:"tienda", lat:38.878047, lng:-104.848633, dir:"3270 Centennial Boulevard, Colorado Springs", tel:"+1-719-473-1272", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Healthy Pet Center", cat:"tienda", lat:38.847419, lng:-104.843953, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Natural Pet", cat:"tienda", lat:38.885976, lng:-104.759876, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Pantry", cat:"tienda", lat:38.904815, lng:-104.773197, dir:"5055 North Academy Boulevard, Colorado Springs", tel:"+1-719-629-9274", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Pantry & Dog Wash", cat:"tienda", lat:38.804211, lng:-104.839804, dir:"1791 South 8th Street, Colorado Springs", tel:"+1-719-629-9273", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:38.893075, lng:-104.760182, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.875166, lng:-104.722116, dir:"3050 North Powers Boulevard, Colorado Springs", tel:"+1-719-637-8777", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.849719, lng:-104.848446, dir:"West Uintah Street, Colorado Springs", tel:"+1-719-578-1123", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.903168, lng:-104.821549, dir:"5020 North Nevada Avenue, Colorado Springs", tel:"+1-719-266-1224", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.793309, lng:-104.802387, dir:"1650 East Cheyenne Mountain Boulevard, Colorado Springs", tel:"+1-719-540-8090", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.841566, lng:-104.755596, dir:"571 North Academy Boulevard, Colorado Springs", tel:"+1-719-570-1313", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.875311, lng:-104.717397, dir:"2965 New Center Point, Colorado Springs", tel:"+1-719-637-3308", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.801181, lng:-104.820431, dir:"2160 Southgate Road, Colorado Springs", tel:"+1-719-447-0622", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Reptiles Food & More", cat:"tienda", lat:38.843288, lng:-104.76366, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Republic of Paws", cat:"tienda", lat:38.846498, lng:-104.861831, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scales 'N Tails", cat:"tienda", lat:38.930886, lng:-104.795314, dir:"6902 North Academy Boulevard, Colorado Springs", tel:"+1-719-598-0526", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scales 'N Tails", cat:"tienda", lat:38.869529, lng:-104.719254, dir:"5829 Constitution Avenue, Colorado Springs", tel:"+1-719-375-1436", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Seascape Auqatics", cat:"tienda", lat:38.903454, lng:-104.775463, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stubby's Dog Wash & Grooming Salon", cat:"tienda", lat:38.929578, lng:-104.796246, dir:"1565 York Road, Colorado Springs", tel:"+1-719-434-8451", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Suzie's Pet Supplies", cat:"tienda", lat:38.827409, lng:-104.750245, dir:"4204 Shelley Avenue, Colorado Springs", tel:"+1-719-596-2129", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wag N' Wash", cat:"tienda", lat:38.933627, lng:-104.802874, dir:"1234 East Woodmen Road, Colorado Springs", tel:"+1-719-228-9274", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Wag N' Wash Pet Center", cat:"tienda", lat:38.84751, lng:-104.843951, dir:"West Uintah Street, Colorado Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:38.908389, lng:-104.78153, dir:"2450 Montebello Square Drive, Colorado Springs", tel:"+1-719-596-1819", horas:[9.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Animal Emergency Care Center", cat:"vet", lat:38.824931, lng:-104.758252, dir:"3775 Airport Road, Colorado Springs", tel:"+1-719-578-9300", horas:[6.0, 24.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:38.892858, lng:-104.757901, dir:"4276 North Academy Boulevard, Colorado Springs", tel:"+1-719-315-6092", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:38.841406, lng:-104.755511, dir:"571 North Academy Boulevard, Colorado Springs", tel:"+1-719-638-9631", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Bear Creek Veterinary Care", cat:"vet", lat:38.819374, lng:-104.841951, dir:"960 Pico Point, Colorado Springs", tel:"+1-719-685-1177", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Cheyenne Mountain Animal Hospital", cat:"vet", lat:38.807856, lng:-104.841431, dir:"1716 South 8th Street, Colorado Springs", tel:"+1-719-475-1314", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crossroads Animal Hospital", cat:"vet", lat:38.890225, lng:-104.755345, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Faithful Friends Animal Hospital", cat:"vet", lat:38.897248, lng:-104.740219, dir:"4720 Barnes Road, Colorado Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mountain Pets Veterinary Clinic", cat:"vet", lat:38.838316, lng:-104.859646, dir:"1030 South 21st Street, Colorado Springs", tel:"+1-719-418-7387", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Our Family vet", cat:"vet", lat:38.855604, lng:-104.775447, dir:"1607 North Circle Drive, Colorado Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pikes Peak Veterinary Clinic", cat:"vet", lat:38.858621, lng:-104.793608, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Uintah Pet Emergency", cat:"vet", lat:38.847077, lng:-104.844274, dir:"1635 West Uintah Street, Colorado Springs", tel:"+1-719-633-3214", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Northwest Animal Hospital", cat:"vet", lat:38.89778, lng:-104.83537, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VetIQ", cat:"vet", lat:38.824059, lng:-104.838357, horas:[12.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Westside Animal Hospital", cat:"vet", lat:38.839252, lng:-104.850157, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"York Road Pet Wellness", cat:"vet", lat:38.929578, lng:-104.796317, dir:"1565 York Road, Colorado Springs", tel:"+1-719-650-6991", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yorkshire Veterinary Clinic", cat:"vet", lat:38.924888, lng:-104.793205, dir:"1815 Dublin Boulevard, Colorado Springs", tel:"+1-719-598-3192", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "columbine-valley": {nombre:"Columbine Valley", centro:[39.601099, -105.032206], tz:"America/Denver", lugares:[
  {n:"Chatfield Park Dog Off-Leash Area", cat:"parque", lat:39.563187, lng:-105.053832, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wynetka Ponds Bark Park", cat:"parque", lat:39.610149, lng:-105.038805, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Dog's Life", cat:"tienda", lat:39.594617, lng:-105.089309, dir:"8250 West Coal Mine Avenue, Columbine Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Destiny's Paws Natural Pet Market", cat:"tienda", lat:39.608388, lng:-105.036551, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Garden Of The Paws Natural Pet Market", cat:"tienda", lat:39.608132, lng:-105.03806, dir:"South Platte Canyon Road, Columbine Valley", tel:"+1-303-794-7297", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.562812, lng:-105.107677, dir:"8440 South Kipling Parkway, Columbine Valley", tel:"+1-720-922-8335", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Coal Mine Animal Hospital", cat:"vet", lat:39.593687, lng:-105.071315, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Deer Creek Animal Hospital", cat:"vet", lat:39.568658, lng:-105.110952, horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "commerce-city": {nombre:"Commerce City", centro:[39.80832, -104.933868], tz:"America/Denver", lugares:[
  {n:"Willow Bark Park", cat:"parque", lat:39.794395, lng:-104.896917, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Dog Daycare", cat:"refugio", lat:39.771791, lng:-104.910022, dir:"3939 Newport Street, Commerce City", tel:"+1-303-331-1364", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws 'n' Play", cat:"tienda", lat:39.79934, lng:-104.882261, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Feline Fix", cat:"vet", lat:39.80768, lng:-104.929783, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "conifer": {nombre:"Conifer", centro:[39.523342, -105.305499], tz:"America/Denver", lugares:[
  {n:"Conifer Community Bark Park", cat:"parque", lat:39.505886, lng:-105.300711, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Buster's Natural Pet Suppy", cat:"tienda", lat:39.51877, lng:-105.306302, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Conifer Veterinarian Hospital", cat:"vet", lat:39.518543, lng:-105.3059, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "copperton": {nombre:"Copperton", centro:[40.564705, -112.097438], tz:"America/Denver", lugares:[
  {n:"West Jordan Off-Leash Dog Park", cat:"parque", lat:40.590713, lng:-112.031903, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Jordan Animal Shelter", cat:"refugio", lat:40.590663, lng:-112.032598, dir:"5982 West New Bingham Highway, Copperton", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "corrales": {nombre:"Corrales", centro:[35.238235, -106.606973], tz:"America/Denver", lugares:[
  {n:"Corrales Kennel", cat:"refugio", lat:35.23175, lng:-106.602327, dir:"490 East Valverde Road, Corrales", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:35.175124, lng:-106.545158, horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Corrales Veterinary Clinic", cat:"vet", lat:35.236834, lng:-106.60747, dir:"15 Marcos Lane, Corrales", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Cottonwood Animal Clinic", cat:"vet", lat:35.239324, lng:-106.657052, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Meddleton Equine Clinic", cat:"vet", lat:35.245162, lng:-106.601691, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospitals", cat:"vet", lat:35.175204, lng:-106.545606, horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "corvallis": {nombre:"Corvallis", centro:[46.313048, -114.113732], tz:"America/Denver", lugares:[
  {n:"Remedi Animal Solutions", cat:"refugio", lat:46.325804, lng:-114.152288, dir:"1112 US 93, Corvallis", tel:"+1-406-777-7375", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Tammany Veterinary Hospital", cat:"vet", lat:46.308331, lng:-114.113045, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Willow Mountain Veterinary Clinic", cat:"vet", lat:46.315586, lng:-114.115824, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cottonwood-heights": {nombre:"Cottonwood Heights", centro:[40.613474, -111.825646], tz:"America/Denver", lugares:[
  {n:"Happi Pup Spa", cat:"peluqueria", lat:40.61157, lng:-111.855091, dir:"7706 Union Park Avenue, Cottonwood Heights", tel:"+1-385-275-7973", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.622106, lng:-111.860945, dir:"1090 East Fort Union Boulevard, Cottonwood Heights", tel:"+1-801-352-1510", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Cottonwood Animal Hospital", cat:"vet", lat:40.635936, lng:-111.834902, dir:"6360 South Highland Drive, Cottonwood Heights", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SAGE Veterinary Imaging", cat:"vet", lat:40.595312, lng:-111.853753, dir:"8590 South 1300 East, Cottonwood Heights", tel:"+1-385-707-5361", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Union Park Veterinary Hospital", cat:"vet", lat:40.628501, lng:-111.854373, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VetMed Consultants", cat:"vet", lat:40.638037, lng:-111.83347, dir:"6221 South Highland Drive, Cottonwood Heights", tel:"+1-801-889-0919", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wasatch Pet Care", cat:"vet", lat:40.624186, lng:-111.837612, dir:"1892 East Fort Union Boulevard, Cottonwood Heights", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Willow Creek Pet Center", cat:"vet", lat:40.603229, lng:-111.832165, dir:"2055 East Creek Road, Cottonwood Heights", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "craig-colorado": {nombre:"Craig", centro:[40.515249, -107.546454], tz:"America/Denver", lugares:[
  {n:"Craig Dog Park", cat:"parque", lat:40.516719, lng:-107.52341, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "crested-butte": {nombre:"Crested Butte", centro:[38.86982, -106.984043], tz:"America/Denver", lugares:[
  {n:"Mountain Tails", cat:"vet", lat:38.869596, lng:-106.981953, dir:"Sixth Street, Crested Butte", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "cripple-creek": {nombre:"Cripple Creek", centro:[38.746656, -105.178315], tz:"America/Denver", lugares:[
  {n:"Mountain View Dog Park", cat:"parque", lat:38.737214, lng:-105.194436, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dalton-gardens": {nombre:"Dalton Gardens", centro:[47.729628, -116.77019], tz:"America/Los_Angeles", lugares:[
  {n:"Kenzie's K9 Salon", cat:"peluqueria", lat:47.727602, lng:-116.790534, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Laundramutt", cat:"peluqueria", lat:47.7036, lng:-116.78556, dir:"2886 North Government Way, Dalton Gardens", tel:"+1-208-676-8828", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog.N.It Hotel and Daycare", cat:"refugio", lat:47.703649, lng:-116.785645, dir:"2890 North Government Way, Dalton Gardens", tel:"+1-208-676-8868", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"CDA Pet Market", cat:"tienda", lat:47.730259, lng:-116.786289, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Faithful K9 Trainer", cat:"tienda", lat:47.719928, lng:-116.793457, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawsitive Difference", cat:"tienda", lat:47.714542, lng:-116.789419, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:47.705929, lng:-116.78693, dir:"3115 North Government Way, Dalton Gardens", tel:"+1-208-664-4364", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:47.736089, lng:-116.794175, dir:"420 West Wilbur Avenue, Dalton Gardens", tel:"+1-208-772-7588", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Emergency Vet Hospital of Coeur d'Alene", cat:"vet", lat:47.71524, lng:-116.803984, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lakewood Animal Hospital", cat:"vet", lat:47.729402, lng:-116.789828, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sunset Animal Hospital", cat:"vet", lat:47.710348, lng:-116.785986, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Red's Barn Indoor Petting Zoo", cat:"zoo", lat:47.739194, lng:-116.787478, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "darby": {nombre:"Darby", centro:[46.022659, -114.178093], tz:"America/Denver", lugares:[
  {n:"Saint Francis' Pet Hospital", cat:"vet", lat:46.032834, lng:-114.177422, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dayton-nevada": {nombre:"Dayton", centro:[39.236229, -119.590406], tz:"America/Los_Angeles", lugares:[
  {n:"Dayton Valley Veterinary Hospital", cat:"vet", lat:39.278948, lng:-119.559972, dir:"14 Enterprise Way, Dayton", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "deer-lodge": {nombre:"Deer Lodge", centro:[46.395761, -112.730038], tz:"America/Denver", lugares:[
  {n:"Clark Fork Kennels", cat:"refugio", lat:46.404238, lng:-112.730539, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "del-camino": {nombre:"Del Camino", centro:[40.157474, -104.983936], tz:"America/Denver", lugares:[
  {n:"Chuck & Don's", cat:"tienda", lat:40.159954, lng:-104.971526, dir:"4445 City Centre Road, Del Camino", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mac-n-Charlie's Pet Stop", cat:"tienda", lat:40.161879, lng:-104.944405, dir:"11052 Cimmarron Street, Del Camino", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Colorado Animal Health", cat:"vet", lat:40.159056, lng:-104.988407, dir:"3530 Stagecoach Road North, Del Camino", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawz Veterinary Clinic", cat:"vet", lat:40.158589, lng:-104.941034, dir:"6050 Firestone Boulevard, Del Camino", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "delta": {nombre:"Delta", centro:[38.745439, -108.071099], tz:"America/Denver", lugares:[
  {n:"Grand Mesa Veterinary Hospital", cat:"vet", lat:38.763181, lng:-108.077098, dir:"1535 US 50, Delta", tel:"+1-970-874-8041", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "deming": {nombre:"Deming", centro:[32.262742, -107.758198], tz:"America/Denver", lugares:[
  {n:"High Desert Vet", cat:"vet", lat:32.244305, lng:-107.728489, dir:"2900 J Street Southeast, Deming", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "denver": {nombre:"Denver", centro:[39.739236, -104.984862], tz:"America/Denver", lugares:[
  {n:"Benedict Park Place Dog Park", cat:"parque", lat:39.750193, lng:-104.978534, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Carla Madison Dog Park", cat:"parque", lat:39.741347, lng:-104.958788, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Denver Beer Co.", cat:"parque", lat:39.758207, lng:-105.007355, dir:"1695 Platte Street, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fuller Dog Park", cat:"parque", lat:39.757626, lng:-104.967733, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Skiptown", cat:"parque", lat:39.7697, lng:-104.955975, dir:"3833 N. Steele St, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scenthound", cat:"peluqueria", lat:39.754468, lng:-105.004556, dir:"2100 16th Street, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Put Together Pooch", cat:"peluqueria", lat:39.749337, lng:-104.969895, dir:"1438 East 22nd Avenue, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Daily Wag!", cat:"refugio", lat:39.734835, lng:-105.014321, dir:"1190 Yuma Street, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Denver Municipal Animal Shelter", cat:"refugio", lat:39.715566, lng:-105.003468, dir:"1241 West Bayaud Avenue, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hounds On The Hill", cat:"refugio", lat:39.73162, lng:-104.985963, dir:"960 Lincoln Street, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Maxfund Animal Shelter", cat:"refugio", lat:39.732393, lng:-104.996808, dir:"1025 Galapago Street, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Pet's Paradise", cat:"tienda", lat:39.730779, lng:-104.974304, dir:"913 Corona Street, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Denver Animal Shelter", cat:"tienda", lat:39.715605, lng:-105.003441, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Savvy", cat:"tienda", lat:39.747395, lng:-104.999522, dir:"1402 Larimer Street, Denver", tel:"+1-303-623-5200", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"JK Grooming", cat:"tienda", lat:39.725426, lng:-104.97219, dir:"1222 East 6th Avenue, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kriser's Natural Pet", cat:"tienda", lat:39.756898, lng:-104.999359, dir:"1910 Chestnut Place, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.746642, lng:-104.996888, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Quality Paws Natural Pet", cat:"tienda", lat:39.712398, lng:-104.987327, dir:"230 South Broadway, Denver", tel:"+1-303-778-7297", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Sherlock Hound", cat:"tienda", lat:39.749332, lng:-104.970229, dir:"1422 East 22nd Avenue, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Unleashed", cat:"tienda", lat:39.740387, lng:-104.943875, dir:"3705 East Colfax Avenue, Denver", tel:"+1-303-355-2012", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Center For Animal Wellness", cat:"vet", lat:39.73479, lng:-104.999017, dir:"1167 Santa Fe Drive, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Bark Doggie Day Care", cat:"vet", lat:39.767162, lng:-104.982519, dir:"3150 Brighton Boulevard, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Bark Doggie Day Care", cat:"vet", lat:39.729183, lng:-105.011379, dir:"2000 West 8th Avenue, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"CityVet", cat:"vet", lat:39.739873, lng:-104.980417, dir:"520 East Colfax Avenue, Denver", tel:"+1-720-262-4340", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Downtown Animal Care Center", cat:"vet", lat:39.732825, lng:-104.996842, dir:"1041 Galapago Street, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"GoodVets", cat:"vet", lat:39.731678, lng:-104.990075, dir:"180 West 10th Avenue, Denver", tel:"+1-303-348-9590", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"GoodVets", cat:"vet", lat:39.760884, lng:-104.982705, dir:"2819 Larimer Street, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Maxfund Cat Adoption Center", cat:"vet", lat:39.731908, lng:-104.99746, dir:"720 West 10th Avenue, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"MaxFund Wellness Center", cat:"vet", lat:39.732284, lng:-104.997459, dir:"1000 Inca Street, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sploot Veterinary Care - RiNo", cat:"vet", lat:39.769509, lng:-104.973702, dir:"3767 Downing Street, Denver", tel:"+1-720-730-8861", horas:[10.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Urban Dogg", cat:"vet", lat:39.746334, lng:-104.978902, dir:"695 East 19th Avenue, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Firehouse Animal Hospital", cat:"vet", lat:39.725305, lng:-104.974362, dir:"1038 East 6th Avenue, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Washington Park Veterinary Clinic", cat:"vet", lat:39.70942, lng:-104.980578, dir:"395 South Pearl Street, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"WellHaven Pet Health", cat:"vet", lat:39.765286, lng:-104.993394, dir:"3480 Park Avenue West, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woof In Boots", cat:"vet", lat:39.729036, lng:-104.996946, dir:"719 West 8th Avenue, Denver", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Denver Zoo", cat:"zoo", lat:39.749303, lng:-104.951137, dir:"2300 Steele Street, Denver", tel:"+1-720-337-1400", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "derby": {nombre:"Derby", centro:[39.83943, -104.918588], tz:"America/Denver", lugares:[
  {n:"First Creek Off-Leash Dog Park", cat:"parque", lat:39.87968, lng:-104.862923, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Adams County Animal Shelter", cat:"refugio", lat:39.891725, lng:-104.87187, dir:"10705 Fulton Street, Derby", tel:"+1-303-288-3294", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Broken Shovels Farm Sanctuary", cat:"refugio", lat:39.853572, lng:-104.930317, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dino's Natural Pet Food, Self-Wash & Grooming", cat:"tienda", lat:39.884627, lng:-104.810417, dir:"15209 East 103rd Place, Derby", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets R Us Commerce City", cat:"vet", lat:39.884212, lng:-104.805535, dir:"10290 Idalia Street, Derby", tel:"+1-303-288-2258", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "desert-hills": {nombre:"Desert Hills", centro:[34.546055, -114.366836], tz:"America/Phoenix", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.567878, lng:-114.365754, dir:"5601 Highway 95 North, Desert Hills", tel:"+1-928-764-2500", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "desert-hills-arizona": {nombre:"Desert Hills", centro:[33.813043, -112.128294], tz:"America/Phoenix", lugares:[
  {n:"Road Runner Animal Pharmacy", cat:"farma", lat:33.797916, lng:-112.063606, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Deem Hills Dog Park", cat:"parque", lat:33.727686, lng:-112.165614, dir:"26606 North Deem Hills Parkway, Desert Hills", tel:"+1-602-495-5458", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Union Bark Park", cat:"parque", lat:33.72219, lng:-112.105166, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All For Your Pooch", cat:"peluqueria", lat:33.701796, lng:-112.150561, dir:"4207 West Cielo Grande, Desert Hills", tel:"+1-602-694-7700", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Cookies N Clean", cat:"peluqueria", lat:33.799425, lng:-112.131066, dir:"34640 North North Valley Parkway, Desert Hills", tel:"+1-623-581-1018", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Planet", cat:"tienda", lat:33.78581, lng:-112.118502, dir:"2750 West Dove Valley Road, Desert Hills", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.711424, lng:-112.112239, dir:"2501 West Happy Valley Road, Desert Hills", tel:"+1-623-580-5018", horas:[9.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - Norterra", cat:"vet", lat:33.712242, lng:-112.102873, dir:"2005 West Happy Valley Road, Desert Hills", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Clinic", cat:"vet", lat:33.796507, lng:-112.118657, dir:"34406 North 27th Drive, Desert Hills", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SNiP Vet", cat:"vet", lat:33.715189, lng:-112.1126, dir:"2480 W Happy Valley Rd, Desert Hills", horas:[7.5, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"The Pet Wellness Center", cat:"vet", lat:33.786006, lng:-112.118359, dir:"2750 W Dove Valley Rd., Desert Hills", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "divide": {nombre:"Divide", centro:[38.941936, -105.157209], tz:"America/Denver", lugares:[
  {n:"Colorado Wolf and Wildlife Center", cat:"refugio", lat:38.932279, lng:-105.212562, dir:"4729 Lower Twin Rock Road, Divide", tel:"+1-719-687-9742", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Teller County Regional Animal Shelter", cat:"refugio", lat:38.943838, lng:-105.15004, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "doney-park": {nombre:"Doney Park", centro:[35.255231, -111.554892], tz:"America/Phoenix", lugares:[
  {n:"Petco", cat:"tienda", lat:35.223672, lng:-111.572504, dir:"5047 East Marketplace Drive, Doney Park", tel:"+1-928-526-4934", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "draper": {nombre:"Draper", centro:[40.524778, -111.862799], tz:"America/Denver", lugares:[
  {n:"Auburn Fields North Dog Park", cat:"parque", lat:40.539536, lng:-111.874749, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Deer Ridge Off-Leash Area", cat:"parque", lat:40.470148, lng:-111.854614, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Draper Dayland Dog Park", cat:"parque", lat:40.507412, lng:-111.883077, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kibbles & Cuts", cat:"peluqueria", lat:40.526385, lng:-111.883067, dir:"272 East 12300 South, Draper", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.528823, lng:-111.884947, dir:"195 East 12300 South, Draper", tel:"+1-801-495-4201", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"South Mountain Pet Care", cat:"vet", lat:40.500442, lng:-111.886873, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dubois-wyoming": {nombre:"Dubois", centro:[43.533637, -109.630965], tz:"America/Denver", lugares:[
  {n:"Painted Valley Mercantile - Pet Supply", cat:"tienda", lat:43.530416, lng:-109.628514, dir:"307 South 1st Street, Dubois", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "dulce": {nombre:"Dulce", centro:[36.934101, -106.987855], tz:"America/Denver", lugares:[
  {n:"Jicarilla Animal Control", cat:"refugio", lat:36.936578, lng:-107.006434, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "durango": {nombre:"Durango", centro:[37.276948, -107.8766], tz:"America/Denver", lugares:[
  {n:"La Plata County Humane Society", cat:"refugio", lat:37.233033, lng:-107.867436, dir:"1111 South Camino del Rio, Durango", tel:"+1-970-259-2847", horas:[12.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Fish Connection", cat:"tienda", lat:37.267788, lng:-107.872146, dir:"810 #C East College Drive, Durango", tel:"+1-970-259-3474", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Riverview Animal Hospital", cat:"vet", lat:37.245083, lng:-107.871997, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eagle-idaho": {nombre:"Eagle", centro:[43.695442, -116.354014], tz:"America/Denver", lugares:[
  {n:"Eagle Dog Park", cat:"parque", lat:43.710755, lng:-116.314562, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Escape the Crate", cat:"refugio", lat:43.663355, lng:-116.321922, dir:"11230 West Joplin Road, Eagle", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northwest Pets", cat:"tienda", lat:43.684309, lng:-116.316375, dir:"3060 East State Street, Eagle", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:43.685943, lng:-116.315887, dir:"3006 East State Street, Eagle", tel:"+1-208-513-2012", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Intermountain Pet Hospital", cat:"vet", lat:43.662143, lng:-116.381961, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eagle-mountain": {nombre:"Eagle Mountain", centro:[40.309349, -112.011983], tz:"America/Denver", lugares:[
  {n:"Eagle Mountain Dog Park", cat:"parque", lat:40.312734, lng:-112.031316, dir:"4447 North Major Street, Eagle Mountain", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eagle-nest": {nombre:"Eagle Nest", centro:[36.55456, -105.260854], tz:"America/Denver", lugares:[
  {n:"Burro Barn", cat:"refugio", lat:36.676154, lng:-105.088106, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "east-missoula": {nombre:"East Missoula", centro:[46.870592, -113.944209], tz:"America/Denver", lugares:[
  {n:"Creekside Dog Park", cat:"parque", lat:46.862566, lng:-113.962738, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eaton": {nombre:"Eaton", centro:[40.526048, -104.711307], tz:"America/Denver", lugares:[
  {n:"Eaton Animal Den", cat:"vet", lat:40.521584, lng:-104.711375, dir:"231 South Elm Avenue, Eaton", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "eden-utah": {nombre:"Eden", centro:[41.304474, -111.826295], tz:"America/Denver", lugares:[
  {n:"Powder Pups Pet Salon", cat:"peluqueria", lat:41.299613, lng:-111.816275, dir:"5460 East 2200 North, Eden", tel:"+1-385-481-5933", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "edgewater-colorado": {nombre:"Edgewater", centro:[39.745724, -105.062183], tz:"America/Denver", lugares:[
  {n:"Barnum Dog Park", cat:"parque", lat:39.723927, lng:-105.030327, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mountair Dog Park", cat:"parque", lat:39.737692, lng:-105.058747, dir:"5620 W 14th Ave, Edgewater", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K-9 Castle", cat:"refugio", lat:39.740089, lng:-105.06778, dir:"6400 West Colfax Avenue, Edgewater", tel:"+1-303-237-4901", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scales 'N Tails", cat:"tienda", lat:39.748702, lng:-105.081901, dir:"2099 Wadsworth Boulevard, Edgewater", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Emergency Group", cat:"vet", lat:39.747881, lng:-105.056377, dir:"5485 West 20th Avenue, Edgewater", tel:"+1-720-996-1200", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "edgewood-new-mexico": {nombre:"Edgewood", centro:[35.061302, -106.191106], tz:"America/Denver", lugares:[
  {n:"Hound And Haven", cat:"refugio", lat:35.086285, lng:-106.251175, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vista Larga Animal Hospital", cat:"vet", lat:35.066368, lng:-106.201458, dir:"4 Linnie Court, Edgewood", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Western Trails Veterinary Hospital PC", cat:"vet", lat:35.048184, lng:-106.160926, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wildlife West Nature Park", cat:"zoo", lat:35.073129, lng:-106.204489, dir:"87 N Forntage Rd, Edgewood", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "edwards": {nombre:"Edwards", centro:[39.644117, -106.593964], tz:"America/Denver", lugares:[
  {n:"Happy Dog", cat:"peluqueria", lat:39.641478, lng:-106.59092, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vail Valley Animal Hospital Edwards", cat:"vet", lat:39.645015, lng:-106.596669, dir:"105 Edwards Village Boulevard", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "el-jebel": {nombre:"El Jebel", centro:[39.395541, -107.089984], tz:"America/Denver", lugares:[
  {n:"Crown Mountain Park", cat:"parque", lat:39.392566, lng:-107.09742, dir:"501 Eagle Count Drive, El Jebel", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "el-mirage": {nombre:"El Mirage", centro:[33.613034, -112.324486], tz:"America/Phoenix", lugares:[
  {n:"Molly & Friends Pet Grooming", cat:"peluqueria", lat:33.63826, lng:-112.323446, dir:"12213 West Bell Road, El Mirage", tel:"+1-623-388-6921", horas:[8.5, 15.5], nota:"Dato de OpenStreetMap"},
  {n:"Pratt's Pets", cat:"tienda", lat:33.609198, lng:-112.313284, dir:"11717 West Grand Avenue, El Mirage", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetsVet Animal Hospital", cat:"vet", lat:33.627477, lng:-112.325186, dir:"15808 North El Mirage Road", tel:"+1-623-910-3242", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:33.637005, lng:-112.337602, dir:"12850 West Elm Street, El Mirage", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "elizabeth": {nombre:"Elizabeth", centro:[39.361587, -104.599024], tz:"America/Denver", lugares:[
  {n:"Elizabeth Dog Park", cat:"parque", lat:39.364634, lng:-104.586638, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dusty Plains Veterinary", cat:"vet", lat:39.361206, lng:-104.589931, dir:"131 County Road 17, Elizabeth", tel:"+1-303-646-0545", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Iron Horse Equine", cat:"vet", lat:39.361082, lng:-104.602005, dir:"330 West Kiowa Avenue, Elizabeth", tel:"+1-303-660-4600", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "elko": {nombre:"Elko", centro:[40.83269, -115.763094], tz:"America/Los_Angeles", lugares:[
  {n:"Elko Animal Shelter", cat:"refugio", lat:40.83505, lng:-115.727262, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.837489, lng:-115.794171, dir:"2747 Mountain City Highway, Elko", tel:"+1-775-777-3806", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "ely-nevada": {nombre:"Ely", centro:[39.248059, -114.891718], tz:"America/Los_Angeles", lugares:[
  {n:"Wild West Grooming", cat:"tienda", lat:39.253962, lng:-114.871663, dir:"822 Aultman Street, Ely", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "emmett": {nombre:"Emmett", centro:[43.873498, -116.499301], tz:"America/Denver", lugares:[
  {n:"Animal Medical Center", cat:"vet", lat:43.860594, lng:-116.497932, tel:"+1-208-365-5396", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"vet", lat:43.886695, lng:-116.459234, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "englewood": {nombre:"Englewood", centro:[39.648206, -104.987964], tz:"America/Denver", lugares:[
  {n:"Elsie Duncan Dog Park", cat:"parque", lat:39.629061, lng:-104.9815, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ferret Dreams Rescue & Adoption", cat:"refugio", lat:39.678371, lng:-104.977784, dir:"2102 South Clarkson Street, Englewood", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Woofhaus Dog Daycare", cat:"refugio", lat:39.688596, lng:-104.987298, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.654097, lng:-104.993891, dir:"551 West Hampden Avenue, Englewood", tel:"+1-303-761-0363", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Cherrelyn Animal Hospital", cat:"vet", lat:39.631715, lng:-104.987454, dir:"4690 South Broadway, Englewood", tel:"+1-303-781-7841", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hampden Family Pet Hospital", cat:"vet", lat:39.652376, lng:-104.982598, dir:"3540 South Logan Street, Englewood", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets on Broadway", cat:"vet", lat:39.675993, lng:-104.987362, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VRCC Veterinary Specialty & Emergency Hospital", cat:"vet", lat:39.652474, lng:-104.998739, dir:"3550 S Jason St, Englewood", tel:"+1-303-874-7387", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "enoch": {nombre:"Enoch", centro:[37.764508, -113.044352], tz:"America/Denver", lugares:[
  {n:"Enoch City Animal Shelter", cat:"refugio", lat:37.76695, lng:-113.050462, dir:"4916 Grimshaw Lane, Enoch", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "enterprise-nevada": {nombre:"Enterprise", centro:[36.040572, -115.190162], tz:"America/Los_Angeles", lugares:[
  {n:"Barx Parx Indoor Dog Park", cat:"parque", lat:36.028158, lng:-115.116851, dir:"8868 South Eastern Avenue, Enterprise", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mountains Edge Dog park", cat:"parque", lat:36.006967, lng:-115.285773, horas:[6.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"BanksyDog", cat:"peluqueria", lat:36.010142, lng:-115.136155, dir:"9890 South Maryland Parkway, Enterprise", tel:"+1-702-613-8259", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Barking Dogs", cat:"peluqueria", lat:36.018952, lng:-115.271311, dir:"9325 South Cimarron Road, Enterprise", tel:"+1-702-247-9274", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Come & Pet It!", cat:"peluqueria", lat:36.035711, lng:-115.099409, dir:"2562 Wigwam Parkway, Enterprise", tel:"+1-702-478-6878", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Desert Doggies Grooming & Day Care", cat:"peluqueria", lat:36.021635, lng:-115.277529, dir:"8544 Blue Diamond Road, Enterprise", tel:"+1-702-778-0411", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Family Paw", cat:"peluqueria", lat:36.042652, lng:-115.115711, dir:"2550 East Windmill Lane, Enterprise", tel:"+1-702-565-6800", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Las Vegas Pet Spa", cat:"peluqueria", lat:36.018534, lng:-115.118027, dir:"9400 South Eastern Avenue, Enterprise", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pretty Paws Pet Grooming", cat:"peluqueria", lat:36.040676, lng:-115.116776, dir:"8170 South Eastern Avenue, Enterprise", tel:"+1-702-720-7655", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hound House", cat:"refugio", lat:36.000206, lng:-115.205959, dir:"10430 South Decatur Boulevard, Enterprise", tel:"+1-702-952-1705", horas:[6.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Bogart's Bone Appetit", cat:"tienda", lat:35.997735, lng:-115.205653, dir:"10540 Southern Highlands Parkway, Enterprise", tel:"+1-702-435-3644", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Hounds Town - Las Vegas - Mountain's Edge", cat:"tienda", lat:36.000256, lng:-115.244099, dir:"10415 South Rainbow Boulevard, Enterprise", tel:"+1-702-916-2085", horas:[6.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:36.01955, lng:-115.266732, dir:"8045 Blue Diamond Road, Enterprise", tel:"+1-725-242-8800", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.042163, lng:-115.192132, dir:"3890 Blue Diamond Road, Enterprise", tel:"+1-702-616-7067", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.021838, lng:-115.120291, dir:"2340 East Serene Avenue, Enterprise", tel:"+1-702-914-0500", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Woof Gang Bakery & Grooming", cat:"tienda", lat:36.016292, lng:-115.11721, dir:"9500 South Eastern Avenue, Enterprise", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A-VIP Pet Resort", cat:"vet", lat:36.060347, lng:-115.178183, dir:"2675 West Arby Avenue, Enterprise", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blue Diamond Animal Hospital", cat:"vet", lat:36.020913, lng:-115.267955, dir:"8090 Blue Diamond Road, Enterprise", tel:"+1-702-944-8440", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Care Veterinary Clinic", cat:"vet", lat:36.019005, lng:-115.118195, dir:"9340 South Eastern Avenue, Enterprise", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Edge Pet Hospital", cat:"vet", lat:35.941881, lng:-115.13187, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Warm Springs Animal Hospital", cat:"vet", lat:36.057499, lng:-115.175877, dir:"2500 West Warm Springs Road, Enterprise", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lion Habitat Ranch", cat:"zoo", lat:35.969268, lng:-115.155849, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "erie": {nombre:"Erie", centro:[40.050262, -105.049981], tz:"America/Denver", lugares:[
  {n:"The Boneyard", cat:"parque", lat:40.056713, lng:-105.04822, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's Pet Food & Supplies", cat:"tienda", lat:40.002009, lng:-105.009034, dir:"1705 Highway 7, Erie", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.997722, lng:-104.979725, dir:"16575 Washington Street, Erie", tel:"+1-303-255-0644", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"CCAPM Veterinary Care Center", cat:"vet", lat:40.000832, lng:-105.005951, dir:"16818 Sheridan Parkway, Erie", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Erie Animal Hospital", cat:"vet", lat:40.032367, lng:-105.054931, dir:"720 Austin Avenue, Erie", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Foxtail Pines Veterinary Center", cat:"vet", lat:40.042476, lng:-105.047194, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "espanola": {nombre:"Española", centro:[36.002801, -106.057801], tz:"America/Denver", lugares:[
  {n:"Barbara's Gentle Grooming", cat:"peluqueria", lat:35.987605, lng:-106.065971, dir:"225 Riverside Drive, Española", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cottonwood Clinic", cat:"vet", lat:35.983676, lng:-106.038984, dir:"1 Shady Lane, Española", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "estancia": {nombre:"Estancia", centro:[34.758393, -106.05585], tz:"America/Denver", lugares:[
  {n:"Torrance County Animal Services", cat:"refugio", lat:34.871209, lng:-106.051516, dir:"751 Salt Mission Trail, Estancia", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "estes-park": {nombre:"Estes Park", centro:[40.377193, -105.523216], tz:"America/Denver", lugares:[
  {n:"Murphey's Mountain Park", cat:"parque", lat:40.33803, lng:-105.576615, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Estes Park Pet Supply Company", cat:"tienda", lat:40.380972, lng:-105.515666, horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital", cat:"vet", lat:40.371485, lng:-105.526405, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "etna-wyoming": {nombre:"Etna", centro:[43.033411, -111.012085], tz:"America/Denver", lugares:[
  {n:"Star Valley Feed & Tack", cat:"tienda", lat:43.035376, lng:-111.011598, dir:"108050 US Highway 89, Etna", tel:"+1-307-883-0055", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "eureka-montana": {nombre:"Eureka", centro:[48.879965, -115.0535], tz:"America/Denver", lugares:[
  {n:"Lincoln County Humane Society", cat:"refugio", lat:48.870654, lng:-115.039669, dir:"190 Riverside Drive, Eureka", tel:"+1-406-297-7515", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "evans": {nombre:"Evans", centro:[40.377217, -104.697763], tz:"America/Denver", lugares:[
  {n:"Freedom Park", cat:"parque", lat:40.370914, lng:-104.712782, dir:"2095 42nd Street, Evans", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.39032, lng:-104.758806, dir:"4751 29th Street, Evans", tel:"+1-970-330-5941", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.389258, lng:-104.737135, dir:"2833 35th Avenue, Evans", tel:"+1-970-330-3790", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "evansville-wyoming": {nombre:"Evansville", centro:[42.861429, -106.269533], tz:"America/Denver", lugares:[
  {n:"Sunridge Dog Park", cat:"parque", lat:42.840623, lng:-106.274385, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:42.850186, lng:-106.273538, dir:"4140 East 2nd Street, Evansville", tel:"+1-307-265-0155", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "evergreen-colorado": {nombre:"Evergreen", centro:[39.632845, -105.323299], tz:"America/Denver", lugares:[
  {n:"Mountain Pet Grooming", cat:"peluqueria", lat:39.632188, lng:-105.320182, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bergen Bark Inn", cat:"refugio", lat:39.660253, lng:-105.354215, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mountain Parks Adventure Camp & Pet Lodge", cat:"refugio", lat:39.609083, lng:-105.319695, dir:"5920 Hwy 73, Evergreen", tel:"+1-303-670-7118", horas:[7.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Kittredge Animal Clinic", cat:"vet", lat:39.655071, lng:-105.302494, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mountain Parks Veterinary Hospital", cat:"vet", lat:39.608904, lng:-105.319658, dir:"5920 Hwy 73, Evergreen", tel:"+1-303-674-3156", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Mountain Parks Veterinary Hospital, Adventure Camp & Pet Lodge", cat:"vet", lat:39.608959, lng:-105.319721, dir:"5920 Hwy 73, Evergreen", tel:"+1-303-674-3156", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "evergreen-montana": {nombre:"Evergreen", centro:[48.225879, -114.276251], tz:"America/Denver", lugares:[
  {n:"Petco", cat:"tienda", lat:48.238996, lng:-114.329191, dir:"2435 Highway 93N, Evergreen", tel:"+1-406-257-9574", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"All Creatures Veterinary Clinic", cat:"vet", lat:48.239745, lng:-114.309716, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Creatures Veterinary Clinic", cat:"vet", lat:48.251802, lng:-114.326162, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Flathead Pet Emergency", cat:"vet", lat:48.239426, lng:-114.276859, dir:"2564 US 2, Evergreen", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fairplay": {nombre:"Fairplay", centro:[39.225189, -106.001952], tz:"America/Denver", lugares:[
  {n:"High Paw Pet Supplies", cat:"tienda", lat:39.223328, lng:-105.991851, dir:"503 US 285, Fairplay", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "falcon": {nombre:"Falcon", centro:[38.933349, -104.608644], tz:"America/Denver", lugares:[
  {n:"Falcon Regional Dog Park", cat:"parque", lat:38.992088, lng:-104.565126, horas:[5.0, 20.5], nota:"Dato de OpenStreetMap"},
  {n:"Splash Bath", cat:"peluqueria", lat:38.970178, lng:-104.606752, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bentley's", cat:"tienda", lat:38.892593, lng:-104.722679, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Furr & Finns", cat:"tienda", lat:38.939914, lng:-104.601042, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Republic of Paws", cat:"tienda", lat:38.913768, lng:-104.716788, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wag n' Wash", cat:"tienda", lat:38.911415, lng:-104.718375, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Claremont Ranch Animal Hospital", cat:"vet", lat:38.867013, lng:-104.678607, dir:"7935 Constitution Avenue, Falcon", tel:"+1-719-574-1228", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Falcon Family Vet", cat:"vet", lat:38.940159, lng:-104.630501, dir:"10634 Maltese Point, Falcon", tel:"+1-719-828-7272", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"High Plains Veterinary Hospital", cat:"vet", lat:38.889739, lng:-104.71385, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets First Animal Hospital", cat:"vet", lat:38.902038, lng:-104.684504, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Polo Springs Veterinary Hospital", cat:"vet", lat:38.915792, lng:-104.732795, dir:"5557 Austin Bluffs Parkway, Falcon", tel:"+1-719-264-8384", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ponderosa Veterinary Clinic", cat:"vet", lat:38.940294, lng:-104.699315, dir:"7471 Black Forest Road, Falcon", tel:"+1-719-433-7671", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Powers Pet Emergency and Spcialty", cat:"vet", lat:38.91608, lng:-104.717939, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sploot Veterinary Care", cat:"vet", lat:38.891293, lng:-104.721708, dir:"5687 Barnes Road, Falcon", tel:"+1-719-782-7950", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fallon-nevada": {nombre:"Fallon", centro:[39.474517, -118.777895], tz:"America/Los_Angeles", lugares:[
  {n:"Oasis Paw Spa", cat:"peluqueria", lat:39.473823, lng:-118.790753, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "farmington-new-mexico": {nombre:"Farmington", centro:[36.729115, -108.205445], tz:"America/Denver", lugares:[
  {n:"Farmington Regional Animal Shelter", cat:"refugio", lat:36.733514, lng:-108.168146, dir:"133 North Browning Parkway, Farmington", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.75103, lng:-108.161435, dir:"3530 East Main Street, Farmington", tel:"+1-505-326-6376", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Haven Clinic", cat:"vet", lat:36.734907, lng:-108.191504, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"San Juan Veterinary Hospital", cat:"vet", lat:36.730254, lng:-108.165442, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "farmington-utah": {nombre:"Farmington", centro:[40.980442, -111.887469], tz:"America/Denver", lugares:[
  {n:"Petco", cat:"tienda", lat:40.982823, lng:-111.903672, dir:"120 Station Parkway, Farmington", tel:"+1-801-451-7123", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Bayview Animal Hospital", cat:"vet", lat:41.000307, lng:-111.90232, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet", cat:"vet", lat:40.985506, lng:-111.912312, tel:"+1-385-384-2200", horas:[15.0, 23.0], nota:"Dato de OpenStreetMap"}
 ]},
 "farr-west": {nombre:"Farr West", centro:[41.292182, -112.025002], tz:"America/Denver", lugares:[
  {n:"Far West Animal Hospital", cat:"vet", lat:41.282391, lng:-112.027395, dir:"1400 North 2000 West, Farr West", tel:"+1-801-731-0511", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "federal-heights": {nombre:"Federal Heights", centro:[39.859128, -105.015631], tz:"America/Denver", lugares:[
  {n:"Petco", cat:"tienda", lat:39.868504, lng:-105.051483, dir:"9440 Sheridan Boulevard, Federal Heights", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Urban Paw Westminster", cat:"vet", lat:39.887058, lng:-105.081313, dir:"10460 Wadsworth Boulevard, Federal Heights", tel:"+1-303-464-7501", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Butterfly Pavilion", cat:"zoo", lat:39.887087, lng:-105.066471, dir:"6252 West 104th Avenue, Federal Heights", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fernley": {nombre:"Fernley", centro:[39.607883, -119.250649], tz:"America/Los_Angeles", lugares:[
  {n:"Furr-Nley's Pet Spa", cat:"peluqueria", lat:39.607966, lng:-119.249037, dir:"140 East Main Street, Fernley", tel:"+1-775-302-3877", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Three Happy Hounds", cat:"tienda", lat:39.607597, lng:-119.242386, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Moffitt", cat:"vet", lat:39.603893, lng:-119.251699, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "flagstaff": {nombre:"Flagstaff", centro:[35.198752, -111.651822], tz:"America/Phoenix", lugares:[
  {n:"Thorpe Bark Park", cat:"parque", lat:35.206702, lng:-111.658169, dir:"191 North Thorpe Road, Flagstaff", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dog Wash", cat:"peluqueria", lat:35.182715, lng:-111.659826, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.190023, lng:-111.663166, dir:"1121 South Plaza Way, Flagstaff", tel:"+1-928-213-1737", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wags and Whiskers Animal Resort", cat:"tienda", lat:35.190326, lng:-111.675541, dir:"1802 West Kristy Lane, Flagstaff", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Alpine Animal Clinic", cat:"vet", lat:35.190929, lng:-111.664672, dir:"1066 West Historic Route 66, Flagstaff", tel:"+1-928-774-9441", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Flagstaff Veterinary Clinic", cat:"vet", lat:35.191617, lng:-111.662652, dir:"963 West Historic Route 66, Flagstaff", tel:"+1-928-361-0963", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Kaibab Veterinary Clinic", cat:"vet", lat:35.192932, lng:-111.645372, dir:"400 East Butler Avenue, Flagstaff", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "flora-vista": {nombre:"Flora Vista", centro:[36.793955, -108.079821], tz:"America/Denver", lugares:[
  {n:"Farmington Veterinary Clinic", cat:"vet", lat:36.777785, lng:-108.125525, dir:"6603 East Main Street, Flora Vista", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "forsyth-montana": {nombre:"Forsyth", centro:[46.266384, -106.677812], tz:"America/Denver", lugares:[
  {n:"Stables", cat:"refugio", lat:46.27283, lng:-106.674786, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-benton": {nombre:"Fort Benton", centro:[47.817648, -110.671637], tz:"America/Denver", lugares:[
  {n:"The Deadman Foundation", cat:"refugio", lat:47.829409, lng:-110.666775, dir:"1410 24th Street, Fort Benton", horas:[9.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Highwoods Veterinary Service", cat:"vet", lat:47.829384, lng:-110.66406, dir:"2410 Saint Charles Street, Fort Benton", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fort-bridger": {nombre:"Fort Bridger", centro:[41.316833, -110.384961], tz:"America/Denver", lugares:[
  {n:"Uinta Veterinary Clinic", cat:"vet", lat:41.315272, lng:-110.369493, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-carson": {nombre:"Fort Carson", centro:[38.74021, -104.782413], tz:"America/Denver", lugares:[
  {n:"Pet Pawlor", cat:"peluqueria", lat:38.775152, lng:-104.815922, dir:"3641 Star Ranch Road, Fort Carson", tel:"+1-719-635-8353", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Republic of Paws", cat:"peluqueria", lat:38.766995, lng:-104.816112, dir:"6558 South Academy Boulevard, Fort Carson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Republic of Paws", cat:"peluqueria", lat:38.767464, lng:-104.814258, horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"6190 Vet", cat:"vet", lat:38.735424, lng:-104.795787, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:38.776447, lng:-104.811365, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"CatTails Feline Health Center", cat:"vet", lat:38.775355, lng:-104.815433, dir:"3625 Star Ranch Road, Fort Carson", tel:"+1-719-575-0007", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cheyenne Mountain Zoo", cat:"zoo", lat:38.771365, lng:-104.854858, dir:"4250 Cheyenne Mountain Zoo Road Cheyenne Mountain Zoo Road, Fort Carson", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fort-collins": {nombre:"Fort Collins", centro:[40.587178, -105.077011], tz:"America/Denver", lugares:[
  {n:"Pet Spa / Bark Park", cat:"parque", lat:40.544324, lng:-105.06966, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Soft Gold Dog Park", cat:"parque", lat:40.606827, lng:-105.086409, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spring Creek Dog Park", cat:"parque", lat:40.538767, lng:-105.127605, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pups on the Poudre Grooming", cat:"peluqueria", lat:40.576945, lng:-105.059434, dir:"737 South Lemay Avenue, Fort Collins", tel:"+1-970-232-5976", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dog Pawlour", cat:"peluqueria", lat:40.561606, lng:-105.077347, dir:"2005 South College Avenue, Fort Collins", tel:"+1-970-484-3644", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:40.530441, lng:-105.0801, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Park Cat Condos", cat:"refugio", lat:40.582362, lng:-105.106927, tel:"+1-970-224-2929", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crystal Glen Kennel", cat:"refugio", lat:40.611797, lng:-105.088705, dir:"720 West Willox Lane, Fort Collins", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:40.56045, lng:-105.07741, dir:"2101 South College Avenue, Fort Collins", tel:"+1-970-305-5715", horas:[6.5, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Four Paws Pet Hotel", cat:"refugio", lat:40.521104, lng:-105.076284, dir:"4710 South College Avenue, Fort Collins", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oasis Equestrian", cat:"refugio", lat:40.615309, lng:-105.085558, dir:"2024 North Whitcomb Street, Fort Collins", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alpine Koi & Reef", cat:"tienda", lat:40.580762, lng:-105.026445, dir:"2715 East Mulberry Street, Fort Collins", tel:"+1-970-224-3663", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brothers Pet Nutrition", cat:"tienda", lat:40.560546, lng:-105.077606, dir:"2101 South College Avenue, Fort Collins", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's Pet Food & Supply", cat:"tienda", lat:40.526751, lng:-105.07521, dir:"4360 South College Avenue, Fort Collins", tel:"+1-970-480-9044", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Front Range Natural Pet Food", cat:"tienda", lat:40.552197, lng:-105.097534, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Front Range Reptiles", cat:"tienda", lat:40.552005, lng:-105.096541, horas:[12.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.558127, lng:-105.078423, dir:"2211 South College Avenue, Fort Collins", tel:"+1-970-484-4477", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.524916, lng:-105.0741, dir:"4432 South College Avenue, Fort Collins", tel:"+1-970-223-9020", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Poudre Pet and Feed Supply", cat:"tienda", lat:40.553207, lng:-105.115965, dir:"2100 West Drake Road, Fort Collins", tel:"+1-970-682-2585", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Ranch Way Feeds", cat:"tienda", lat:40.588702, lng:-105.070439, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scales 'N Tails", cat:"tienda", lat:40.536705, lng:-105.077522, dir:"3645 South College Avenue, Fort Collins", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:40.536993, lng:-105.07636, dir:"3636 South College Avenue, Fort Collins", tel:"+1-970-225-2557", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Advanced Animal Care of Colorado", cat:"vet", lat:40.572728, lng:-105.046735, dir:"1530 Riverside Avenue, Fort Collins", tel:"+1-970-493-3333", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Animalworks", cat:"vet", lat:40.553088, lng:-105.094806, dir:"1002 West Drake Road, Fort Collins", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aspen Grove Veterinary Clinic", cat:"vet", lat:40.551289, lng:-105.078091, dir:"2633 South College Avenue, Fort Collins", tel:"+1-970-416-0232", horas:[8.0, 22.5], nota:"Dato de OpenStreetMap"},
  {n:"City Park Animal Clinic", cat:"vet", lat:40.582387, lng:-105.107013, horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"CSU Veterinary Hospital and Education Complex", cat:"vet", lat:40.554374, lng:-105.083353, tel:"+1-970-297-5000", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Family and Friends Veterinary Care", cat:"vet", lat:40.574996, lng:-105.10047, dir:"1336 West Elizabeth Street, Fort Collins", tel:"+1-970-493-0204", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Fort Collins Veterinary Emergency and Rehabilitation Hospital", cat:"vet", lat:40.576392, lng:-105.057476, dir:"816 South Lemay Avenue, Fort Collins", tel:"+1-970-230-7317", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Front Range Veterinary Clinic", cat:"vet", lat:40.581833, lng:-105.018248, dir:"3200 East Mulberry Street, Fort Collins", tel:"+1-970-484-5667", horas:[7.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Harmony Hospital for Pets", cat:"vet", lat:40.5227, lng:-105.081667, dir:"309 West Harmony Road, Fort Collins", tel:"+1-970-226-1524", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Johnson Family Equine Hospital", cat:"vet", lat:40.55744, lng:-105.083102, dir:"2230 Gillette Drive, Fort Collins", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Midtown Veterinary Medical Center", cat:"vet", lat:40.552807, lng:-105.06671, dir:"2550 Stover Street, Fort Collins", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Moore Animal Hospital", cat:"vet", lat:40.563879, lng:-105.038686, tel:"+1-970-294-3399", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Mountain View Animal Hospital", cat:"vet", lat:40.549876, lng:-105.096519, dir:"2737 South Shields Street, Fort Collins", tel:"+1-970-226-1728", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Mulnix Animal Clinic", cat:"vet", lat:40.57298, lng:-105.115931, dir:"1015 South Taft Hill Road, Fort Collins", tel:"+1-970-484-1848", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Raintree Animal Hospital", cat:"vet", lat:40.556237, lng:-105.096458, dir:"2335 South Shields Street, Fort Collins", tel:"+1-970-482-1987", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"South Mesa Veterinary Hospital", cat:"vet", lat:40.53485, lng:-105.080137, dir:"3801 South Mason Street, Fort Collins", tel:"+1-970-226-6526", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:40.517742, lng:-105.076453, dir:"4900 South College Avenue, Fort Collins", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-lupton": {nombre:"Fort Lupton", centro:[40.084705, -104.813027], tz:"America/Denver", lugares:[
  {n:"Bubbles and Bows", cat:"peluqueria", lat:40.079071, lng:-104.803354, dir:"1200 Dexter Street, Fort Lupton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic", cat:"vet", lat:40.079919, lng:-104.815857, dir:"232 1st Street, Fort Lupton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fort Lupton Veterinary Hospital", cat:"vet", lat:40.080484, lng:-104.806777, dir:"1025 1st Street, Fort Lupton", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fort-mohave": {nombre:"Fort Mohave", centro:[35.017587, -114.597881], tz:"America/Phoenix", lugares:[
  {n:"Puppy Love Pet Salon", cat:"peluqueria", lat:34.993994, lng:-114.598613, dir:"5617 AZ-95, Fort Mohave", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.054478, lng:-114.591118, dir:"3699 AZ 95, Fort Mohave", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Advanced Animal Care", cat:"vet", lat:34.986997, lng:-114.597232, horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fortuna-foothills": {nombre:"Fortuna Foothills", centro:[32.657835, -114.41189], tz:"America/Phoenix", lugares:[
  {n:"Paws and Tails", cat:"tienda", lat:32.667971, lng:-114.494606, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Clinic", cat:"vet", lat:32.668382, lng:-114.495135, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fountain-hills": {nombre:"Fountain Hills", centro:[33.611711, -111.717361], tz:"America/Phoenix", lugares:[
  {n:"Zoom Room Dog Training", cat:"peluqueria", lat:33.585117, lng:-111.834193, dir:"10953 North Frank Lloyd Wright Boulevard, Fountain Hills", tel:"+1-480-779-9610", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pal's Inn Pet Resort", cat:"refugio", lat:33.593016, lng:-111.708636, dir:"11669 North Saguaro Boulevard, Fountain Hills", tel:"+1-480-837-0069", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.572578, lng:-111.716958, dir:"16835 East Shea Boulevard, Fountain Hills", tel:"+1-480-836-8919", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Ftiendship Pet Hospital", cat:"vet", lat:33.593395, lng:-111.709443, dir:"11679 North Saguaro Boulevard, Fountain Hills", tel:"+1-480-889-0881", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "four-corners-montana": {nombre:"Four Corners", centro:[45.671227, -111.18571], tz:"America/Denver", lugares:[
  {n:"Oasis Grooming", cat:"peluqueria", lat:45.673517, lng:-111.192577, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pampered Pets Petcare Company", cat:"peluqueria", lat:45.665412, lng:-111.189287, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark City Doggy Daycare", cat:"refugio", lat:45.67321, lng:-111.188927, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sit Means Sit Dog Training - Bozeman", cat:"refugio", lat:45.704956, lng:-111.188442, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bozeman Dog Co.", cat:"tienda", lat:45.67356, lng:-111.184962, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bridger Animal Nutrition West", cat:"tienda", lat:45.676868, lng:-111.186668, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fox-farmcollege": {nombre:"Fox Farm–College", centro:[41.103393, -104.789823], tz:"America/Denver", lugares:[
  {n:"Tail Waggers & Wash", cat:"tienda", lat:41.137278, lng:-104.765014, dir:"3543 East Lincolnway, Fox Farm–College", tel:"+1-307-514-5060", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "foxfield": {nombre:"Foxfield", centro:[39.588073, -104.785189], tz:"America/Denver", lugares:[
  {n:"Bark Park", cat:"parque", lat:39.634356, lng:-104.739064, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cherry Creek State Park Dog Park", cat:"parque", lat:39.614921, lng:-104.822284, dir:"4201 South Parker Road, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large Dog Area", cat:"parque", lat:39.63686, lng:-104.784914, dir:"17500 East Quincy Avenue, Foxfield", tel:"+1-303-739-7147", horas:[6.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Small/Timid Dog Area", cat:"parque", lat:39.637121, lng:-104.785037, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southshore Dog Park", cat:"parque", lat:39.590816, lng:-104.669845, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark N Wash", cat:"peluqueria", lat:39.609809, lng:-104.809543, dir:"15426 East Orchard Road, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gina's Puppy Love Salon", cat:"peluqueria", lat:39.637233, lng:-104.792754, dir:"4333 South Buckley Road, Foxfield", tel:"+1-303-400-0919", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart Grooming", cat:"peluqueria", lat:39.616549, lng:-104.815537, dir:"5520 South Parker Road, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pretty Paws Pet Grooming", cat:"peluqueria", lat:39.631431, lng:-104.809858, dir:"15300 East Smoky Hill Road, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scenthound", cat:"peluqueria", lat:39.611743, lng:-104.751616, dir:"20269 East Smoky Hill Road, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wag N' Wash", cat:"peluqueria", lat:39.593952, lng:-104.809027, dir:"15405 East Briarwood Circle, Foxfield", tel:"+1-303-693-9274", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Come Sit Stay Pet Resort", cat:"refugio", lat:39.552503, lng:-104.778286, dir:"9099 South Woodman Way, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dugans Dog House", cat:"refugio", lat:39.593389, lng:-104.743408, dir:"6830 South Liverpool Street, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's Pet Food Outlet", cat:"tienda", lat:39.600663, lng:-104.803497, dir:"6380 South Parker Road, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Essential Pet", cat:"tienda", lat:39.557708, lng:-104.780318, dir:"17920 Cottonwood Drive, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nature Box Pet Emporium", cat:"tienda", lat:39.637514, lng:-104.827411, dir:"13740 East Quincy Avenue, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Parker Exotic Pets", cat:"tienda", lat:39.5569, lng:-104.781697, dir:"17880 Cottonwood Drive, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Palace", cat:"tienda", lat:39.641424, lng:-104.827131, dir:"4094 South Parker Road, Foxfield", tel:"+1-303-699-4554", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.608678, lng:-104.706043, dir:"24101 East Orchard Road, Foxfield", tel:"+1-303-627-5710", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.636567, lng:-104.788963, dir:"16960 East Quincy Avenue, Foxfield", tel:"+1-303-699-5061", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.58229, lng:-104.720608, dir:"7350 South Gartrell Road, Foxfield", tel:"+1-303-400-4778", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.616695, lng:-104.815388, dir:"5520 South Parker Road, Foxfield", tel:"+1-303-690-4697", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Samantha's Katz N Dogz", cat:"tienda", lat:39.619784, lng:-104.771584, dir:"18525 East Smoky Hill Road, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VIP Pets", cat:"tienda", lat:39.59997, lng:-104.720749, dir:"22954 East Smoky Hill Road, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Center of Aurora", cat:"vet", lat:39.654941, lng:-104.771661, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Dental Clinic", cat:"vet", lat:39.639881, lng:-104.793178, dir:"4253 South Buckley Road, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Dental Clinic", cat:"vet", lat:39.652697, lng:-104.811107, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Emergency & Specialty Center", cat:"vet", lat:39.558293, lng:-104.782262, dir:"17701 Cottonwood Drive, Foxfield", tel:"+1-720-842-5050", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Aurora Animal Hospital", cat:"vet", lat:39.609727, lng:-104.751718, dir:"20250 East Smoky Hill Road, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aurora Cat Hospital & Hotel", cat:"vet", lat:39.614177, lng:-104.755896, dir:"5616 South Gibraltar Way, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:39.616543, lng:-104.81548, dir:"5520 South Parker Road, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dugan's Veterinary", cat:"vet", lat:39.575418, lng:-104.72575, dir:"22651 East Aurora Parkway, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Tails Veterinary Center", cat:"vet", lat:39.595464, lng:-104.702699, dir:"24500 East Smoky Hill Road, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Loving Family Animal Hospital", cat:"vet", lat:39.595625, lng:-104.81903, dir:"14605 East Arapahoe Road, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mile High Veterinary Hospital", cat:"vet", lat:39.594453, lng:-104.728571, dir:"22310 East Arapahoe Road, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Parkside Animal Health Center", cat:"vet", lat:39.625557, lng:-104.822933, dir:"5001 South Parker Road, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Palace Vet Clinic", cat:"vet", lat:39.64138, lng:-104.826721, dir:"4094 South Parker Road, Foxfield", tel:"+1-303-699-0477", horas:[13.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Pine Grove Animal Hospital", cat:"vet", lat:39.556968, lng:-104.777969, dir:"18320 Cottonwood Drive, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tallgrass Animal Hospital", cat:"vet", lat:39.639954, lng:-104.736276, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospitals Urgent Care - Centennial", cat:"vet", lat:39.597574, lng:-104.802945, dir:"6554 South Parker Road, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Smoky Hill Animal Hospital", cat:"vet", lat:39.631377, lng:-104.807452, dir:"15600 East Smoky Hill Road, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vetco Total Care", cat:"vet", lat:39.636572, lng:-104.789084, dir:"16960 East Quincy Avenue, Foxfield", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Clinic", cat:"vet", lat:39.672621, lng:-104.788349, dir:"17200 East Iliff Avenue, Foxfield", tel:"+1-303-752-1034", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Raptor Education", cat:"zoo", lat:39.656229, lng:-104.737365, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "francis-utah": {nombre:"Francis", centro:[40.610264, -111.280483], tz:"America/Denver", lugares:[
  {n:"Premier Pet Lodge", cat:"refugio", lat:40.62463, lng:-111.281241, dir:"33 Lambert Lane, Francis", tel:"+1-435-783-3912", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fraser": {nombre:"Fraser", centro:[39.947286, -105.815422], tz:"America/Denver", lugares:[
  {n:"Grand Animal Hospital", cat:"vet", lat:39.94292, lng:-105.812075, dir:"511 South Zerex Street, Fraser", tel:"+1-970-363-7271", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "frenchtown": {nombre:"Frenchtown", centro:[47.013771, -114.231858], tz:"America/Denver", lugares:[
  {n:"Woof Haven", cat:"refugio", lat:46.957824, lng:-114.184808, dir:"13695 Lacasse Lane, Frenchtown", tel:"+1-406-550-2931", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "frisco": {nombre:"Frisco", centro:[39.576858, -106.092828], tz:"America/Denver", lugares:[
  {n:"A&A Pet Supply & Feed", cat:"tienda", lat:39.577424, lng:-106.092282, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Frisco Animal Hospital", cat:"vet", lat:39.584745, lng:-106.094893, dir:"700 Summit Boulevard, Frisco", tel:"+1-970-668-5544", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fruit-heights": {nombre:"Fruit Heights", centro:[41.032166, -111.902162], tz:"America/Denver", lugares:[
  {n:"Animal Care of Davis County", cat:"refugio", lat:41.042794, lng:-111.905832, dir:"1422 East 600 North, Fruit Heights", tel:"+1-801-444-2200", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "fruita": {nombre:"Fruita", centro:[39.158883, -108.733641], tz:"America/Denver", lugares:[
  {n:"Chow Down Pet Supplies", cat:"tienda", lat:39.159005, lng:-108.73175, dir:"225 East Aspen Avenue, Fruita", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Kokopelli Animal Hospital", cat:"vet", lat:39.152744, lng:-108.734102, dir:"456 Kokopelli Boulevard, Fruita", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fruitland-idaho": {nombre:"Fruitland", centro:[44.008893, -116.916414], tz:"America/Denver", lugares:[
  {n:"No Bad Hair Days Grooming, Boarding & Daycare", cat:"peluqueria", lat:43.97658, lng:-116.91458, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "fruitvale": {nombre:"Fruitvale", centro:[39.081648, -108.496758], tz:"America/Denver", lugares:[
  {n:"Head to Tail Groomology", cat:"peluqueria", lat:39.078927, lng:-108.496895, dir:"507 30 Road, Fruitvale", tel:"+1-970-245-5686", horas:[10.0, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"Kirstie's K9 Creations", cat:"refugio", lat:39.077681, lng:-108.5131, dir:"2912 North Avenue, Fruitvale", tel:"+1-970-424-8559", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Ruff Around the Edges", cat:"refugio", lat:39.076941, lng:-108.526012, dir:"2841 North Avenue, Fruitvale", tel:"+1-970-424-8616", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"J&M Aquatics & Pet Center", cat:"tienda", lat:39.076951, lng:-108.524107, dir:"2851 North Avenue, Fruitvale", tel:"+1-970-245-2526", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Western Slope Aquatics", cat:"tienda", lat:39.090271, lng:-108.514495, dir:"2905 Patterson Rd, Fruitvale", tel:"+1-970-245-6987", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Birth Control", cat:"vet", lat:39.077979, lng:-108.524221, dir:"502 28 1/2 Road, Fruitvale", tel:"+1-970-523-5487", horas:[8.0, 8.83], nota:"Dato de OpenStreetMap"},
  {n:"Grand View Animal Hospital", cat:"vet", lat:39.079264, lng:-108.490045, dir:"504 Fruitvale Court", tel:"+1-970-523-2060", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "galisteo": {nombre:"Galisteo", centro:[35.395264, -105.947079], tz:"America/Denver", lugares:[
  {n:"Cerrillos Petting Zoo", cat:"zoo", lat:35.437427, lng:-106.128185, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "garden-city-colorado": {nombre:"Garden City", centro:[40.394607, -104.689311], tz:"America/Denver", lugares:[
  {n:"Rocky Mountain Paw Spa", cat:"tienda", lat:40.39454, lng:-104.696109, dir:"2624 11th Avenue, Garden City", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "garden-city-idaho": {nombre:"Garden City", centro:[43.622111, -116.238178], tz:"America/Denver", lugares:[
  {n:"Clubhound", cat:"parque", lat:43.649144, lng:-116.267231, dir:"415 East Remington Street, Garden City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"River Pointe Apartments Dog Park", cat:"parque", lat:43.661292, lng:-116.285212, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sterling Dog Park", cat:"parque", lat:43.615503, lng:-116.30536, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Boise Dog Barber Shop", cat:"peluqueria", lat:43.664989, lng:-116.277904, dir:"6732 North Glenwood Street, Garden City", tel:"+1-208-853-5158", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Poof Pets", cat:"peluqueria", lat:43.620115, lng:-116.313648, dir:"10542 West Fairview Avenue, Garden City", tel:"+1-208-810-3833", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Boise Kennels", cat:"refugio", lat:43.641358, lng:-116.233825, dir:"2303 North 36th Street, Garden City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Idaho Humane Society", cat:"refugio", lat:43.591822, lng:-116.288731, dir:"1300 South Bird Street, Garden City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Simply Cats", cat:"refugio", lat:43.577183, lng:-116.290741, dir:"2833 South Victory View Way, Garden City", tel:"+1-208-343-7177", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Do It Yourself Doggie Detail", cat:"tienda", lat:43.633603, lng:-116.264993, dir:"6703 West Ustick Road, Garden City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fish Aquariums & Stuff", cat:"tienda", lat:43.619346, lng:-116.257974, dir:"6112 West Fairview Avenue, Garden City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:43.606703, lng:-116.283281, dir:"179 North Milwaukee Street, Garden City", tel:"+1-208-375-7971", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:43.605916, lng:-116.280754, dir:"130 North Milwaukee Street, Garden City", tel:"+1-208-377-9748", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Critter Clinic", cat:"vet", lat:43.634378, lng:-116.3132, dir:"10534 West Ustick Road, Garden City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ewing Animal Hospital", cat:"vet", lat:43.641573, lng:-116.232493, dir:"2318 North 36th Street, Garden City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Idaho Humane Society Veterinary", cat:"vet", lat:43.591458, lng:-116.28865, dir:"1300 South Bird Street, Garden City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mountain View Animal Hospital", cat:"vet", lat:43.636297, lng:-116.274507, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pet Doctor", cat:"vet", lat:43.589404, lng:-116.29292, dir:"8904 West Ardene Street, Garden City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"WestVet", cat:"vet", lat:43.643228, lng:-116.266775, dir:"5024 West Chinden Boulevard, Garden City", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "gardnerville": {nombre:"Gardnerville", centro:[38.941506, -119.749351], tz:"America/Los_Angeles", lugares:[
  {n:"Pet Station", cat:"tienda", lat:38.937, lng:-119.741647, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Services", cat:"vet", lat:38.936496, lng:-119.751129, dir:"1355 Centerville Lane, Gardnerville", tel:"+1-775-782-2297", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "georgetown-colorado": {nombre:"Georgetown", centro:[39.706227, -105.697125], tz:"America/Denver", lugares:[
  {n:"Werlin Park", cat:"parque", lat:39.710424, lng:-105.694639, dir:"1014 Taos Street, Georgetown", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gilbert": {nombre:"Gilbert", centro:[33.352763, -111.789037], tz:"America/Phoenix", lugares:[
  {n:"Express Veterinary Pharmacy", cat:"farma", lat:33.365522, lng:-111.737932, dir:"2450 East Guadalupe Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Passion for Pets", cat:"peluqueria", lat:33.361926, lng:-111.788216, dir:"675 North Gilbert Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aardbark Grooming", cat:"peluqueria", lat:33.361266, lng:-111.790792, dir:"610 North Gilbert Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Broadway Grooming", cat:"peluqueria", lat:33.408974, lng:-111.710552, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cute Cuts for Mutts", cat:"peluqueria", lat:33.394817, lng:-111.755837, dir:"3460 East Southern Avenue, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Elite Paw Spa", cat:"peluqueria", lat:33.375404, lng:-111.687261, dir:"2235 South Power Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fluff Bar", cat:"peluqueria", lat:33.364333, lng:-111.706602, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Furry Beginnings Pet Spa", cat:"peluqueria", lat:33.304109, lng:-111.757455, dir:"2540 South Val Vista Drive, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fuzzy Paws Pet Salon", cat:"peluqueria", lat:33.379753, lng:-111.680029, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Groovy Pet Grooming", cat:"peluqueria", lat:33.407781, lng:-111.7385, dir:"4323 East Broadway Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jeannie's Grooming", cat:"peluqueria", lat:33.370085, lng:-111.789442, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Johnny's Doghouse", cat:"peluqueria", lat:33.378578, lng:-111.784149, dir:"2285 East Baseline Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lisa’s Doghouse", cat:"peluqueria", lat:33.4236, lng:-111.721641, dir:"5050 East University Drive, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawsattraction Pet Salon", cat:"peluqueria", lat:33.336856, lng:-111.770954, dir:"894 East Warner Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dog Spa", cat:"peluqueria", lat:33.356181, lng:-111.788937, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggie District Pet Resort & Training Center", cat:"refugio", lat:33.383055, lng:-111.752033, dir:"3660 East Inverness Avenue, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:33.36547, lng:-111.825197, dir:"876 North McQueen Road, Gilbert", tel:"+1-480-360-2300", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Friends for Life Animal Rescue", cat:"refugio", lat:33.37611, lng:-111.810142, dir:"952 West Melody Avenue, Gilbert", tel:"+1-480-497-8296", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Horses Space", cat:"refugio", lat:33.349382, lng:-111.669368, dir:"19241 East Elliot Road, Gilbert", tel:"+1-480-326-2008", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mesa Dogs 24/7", cat:"refugio", lat:33.380349, lng:-111.785859, dir:"2154 East Baseline Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw Commons Pet Resort", cat:"refugio", lat:33.360554, lng:-111.789319, dir:"601 North Gilbert Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Artistic Aquariums", cat:"tienda", lat:33.354658, lng:-111.842467, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Market Street Pet Depot", cat:"tienda", lat:33.296528, lng:-111.747105, dir:"2979 South Market Street, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Club", cat:"tienda", lat:33.304057, lng:-111.75617, dir:"2530 South Val Vista Drive, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.334588, lng:-111.759565, dir:"1415 East Warner Road, Gilbert", tel:"+1-480-558-4588", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.377703, lng:-111.690506, dir:"2090 South Power Road, Gilbert", tel:"+1-480-854-1550", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.326717, lng:-111.689861, dir:"4920 South Power Road, Gilbert", tel:"+1-480-279-3860", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.392229, lng:-111.681645, dir:"6932 East Hampton Avenue, Gilbert", tel:"+1-480-830-7282", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.365747, lng:-111.754479, dir:"857 North Val Vista Drive, Gilbert", tel:"+1-480-503-0934", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.381637, lng:-111.802971, dir:"1733 South Stapley Drive, Gilbert", tel:"+1-480-539-8552", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Puppie's N Love", cat:"tienda", lat:33.310971, lng:-111.743698, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pet Shop", cat:"tienda", lat:33.375583, lng:-111.687342, dir:"2235 South Power Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"TRUVU Aquariums", cat:"tienda", lat:33.353856, lng:-111.838004, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:33.380271, lng:-111.786144, dir:"2136 East Baseline Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"1st Pet Veterinary Centers", cat:"vet", lat:33.394191, lng:-111.714596, dir:"5404 East Southern Avenue, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Anasazi Animal Clinic", cat:"vet", lat:33.363679, lng:-111.799159, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arizona Equine Medical & Surgical Centre", cat:"vet", lat:33.319599, lng:-111.789375, dir:"1685 South Gilbert Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arizona Veterinary Emergency & Critical Care Center", cat:"vet", lat:33.360175, lng:-111.791786, dir:"86 West Juniper Avenue, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arizona Veterinary Oncology", cat:"vet", lat:33.360294, lng:-111.791506, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Avian & Exotic Animal Clinic", cat:"vet", lat:33.380771, lng:-111.770281, dir:"1911 South Lindsay Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.392337, lng:-111.681542, dir:"6932 East Hampton Avenue, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.36577, lng:-111.754325, dir:"857 North Val Vista Drive, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.381489, lng:-111.802746, dir:"1733 South Stapley Drive, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.378073, lng:-111.720534, dir:"1525 North Higley Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.326836, lng:-111.690128, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Caring Hearts Animal Clinic", cat:"vet", lat:33.378769, lng:-111.76632, dir:"3045 East Baseline Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cornerstone Animal Hospital", cat:"vet", lat:33.32083, lng:-111.754087, dir:"1663 East Ray Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Desert Sun Animal Hospital", cat:"vet", lat:33.407909, lng:-111.73742, dir:"4331 East Broadway Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Desert Veterinary Medical Specialists", cat:"vet", lat:33.360372, lng:-111.791975, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East Valley Animal Hospital", cat:"vet", lat:33.362998, lng:-111.79147, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Exceptional Pets", cat:"vet", lat:33.380015, lng:-111.788954, dir:"1928 South Gilbert Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Follow Your Heart Animal Hospital", cat:"vet", lat:33.423966, lng:-111.719676, dir:"446 North Higley Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gilbert Veterinary Hospital", cat:"vet", lat:33.320125, lng:-111.789288, dir:"1655 South Gilbert Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Herd Health", cat:"vet", lat:33.345332, lng:-111.831155, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Higley Groves Animal Hospital", cat:"vet", lat:33.389065, lng:-111.719016, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Higley Road Pet Clinic", cat:"vet", lat:33.365885, lng:-111.722639, dir:"866 North Higley Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Little Critters Veterinary Hospital", cat:"vet", lat:33.377216, lng:-111.787019, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Market Street Pet Hospital", cat:"vet", lat:33.296367, lng:-111.747218, dir:"2979 South Market Street, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Niki's Place", cat:"vet", lat:33.323967, lng:-111.720167, dir:"1459 South Higley Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Haven Animal Hospital", cat:"vet", lat:33.42126, lng:-111.683881, dir:"245 North Power Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Smiles General Veterinary Dentistry", cat:"vet", lat:33.366, lng:-111.788213, dir:"50 East Guadalupe Road, Gilbert", tel:"+1-480-659-9224", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Power Road Animal Hospital", cat:"vet", lat:33.373589, lng:-111.687205, dir:"2333 South Power Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Prestige Animal Clinic", cat:"vet", lat:33.321704, lng:-111.804851, dir:"700 West Ray Road, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Superstision Animal Hospital", cat:"vet", lat:33.394258, lng:-111.683341, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Val Vista Animal Hospital", cat:"vet", lat:33.363798, lng:-111.755544, dir:"747 North Val Vista Drive, Gilbert", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Warner Vista Animal Hospital", cat:"vet", lat:33.333939, lng:-111.755013, dir:"895 South Val Vista Drive, Gilbert", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gillette-wyoming": {nombre:"Gillette", centro:[44.290635, -105.501876], tz:"America/Denver", lugares:[
  {n:"The Oh-SO-Fun Dog Park", cat:"parque", lat:44.299848, lng:-105.50074, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Country Critter Cuts", cat:"peluqueria", lat:44.288816, lng:-105.479337, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hillcrest Pampered Pets", cat:"peluqueria", lat:44.288583, lng:-105.479365, dir:"610 Butler Spaeth Road, Gillette", tel:"+1-307-685-5009", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Knotty Salon", cat:"peluqueria", lat:44.290804, lng:-105.503705, dir:"407 South Gillette Avenue", tel:"+1-307-622-3477", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gillette Animal Shelter", cat:"refugio", lat:44.299138, lng:-105.51706, dir:"950 West Warlow Drive, Gillette", tel:"+1-307-686-5249", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Audrey's", cat:"tienda", lat:44.280226, lng:-105.508542, dir:"500 O-R Drive, Gillette", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:44.271304, lng:-105.498307, dir:"2610 South Douglas Highway, Gillette", tel:"+1-307-686-3057", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"vet", lat:44.268692, lng:-105.501498, dir:"200 East Lakeway Road, Gillette", tel:"+1-307-682-1507", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Community Veterinary Clinic", cat:"vet", lat:44.271015, lng:-105.492716, dir:"2701 South Douglas Highway, Gillette", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gillette Pet Vet Clinic", cat:"vet", lat:44.255506, lng:-105.510113, dir:"550 Running W Drive, Gillette", tel:"+1-307-696-8387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Red Hills Veterinary Hospital", cat:"vet", lat:44.254723, lng:-105.477742, dir:"4340 Butler Spaeth Road, Gillette", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Thunder Basin Veterinary Clinic", cat:"vet", lat:44.286582, lng:-105.464727, dir:"900 Axel's Avenue, Gillette", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "glendale": {nombre:"Glendale", centro:[33.538686, -112.185994], tz:"America/Phoenix", lugares:[
  {n:"Apartment Dog Park", cat:"parque", lat:33.560293, lng:-112.10065, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northern Horizon Dog Park", cat:"parque", lat:33.551386, lng:-112.196175, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PETsMART Dog Park", cat:"parque", lat:33.532181, lng:-112.104766, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rose Mofford Large Dog Park", cat:"parque", lat:33.572485, lng:-112.111053, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rose Mofford Small Dog Park", cat:"parque", lat:33.573135, lng:-112.111469, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cookies N Clean", cat:"peluqueria", lat:33.608375, lng:-112.066836, dir:"13418 North 7th Street, Glendale", tel:"+1-602-354-8986", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Groom Express", cat:"tienda", lat:33.53909, lng:-112.21791, dir:"7448 West Glendale Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.583242, lng:-112.121431, dir:"2784 West Peoria Avenue, Glendale", tel:"+1-602-504-1202", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.551367, lng:-112.182407, dir:"5707 West Northern Avenue, Glendale", tel:"+1-623-931-6743", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.522619, lng:-112.097464, dir:"1745 West Bethany Home Road, Glendale", tel:"+1-602-841-2507", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.642075, lng:-112.082263, dir:"17035 North 7th Avenue, Glendale", tel:"+1-602-375-7939", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.580619, lng:-112.12501, dir:"10405 North 31st Avenue, Glendale", tel:"+1-602-331-0131", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"43rd Avenue Animal Hospital", cat:"vet", lat:33.596621, lng:-112.153792, dir:"4426 West Cactus Road, Glendale", tel:"+1-602-843-5452", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.551367, lng:-112.1823, dir:"5707 West Northern Avenue, Glendale", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Catalina Animal Hospital", cat:"vet", lat:33.568329, lng:-112.133854, dir:"9023 North 35th Avenue, Glendale", tel:"+1-602-269-8969", horas:[8.0, 10.0], nota:"Dato de OpenStreetMap"},
  {n:"Harmony Veterinary Hospital", cat:"vet", lat:33.538209, lng:-112.097258, dir:"1745 West Glendale Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Larkspur Cat Clinic", cat:"vet", lat:33.596149, lng:-112.121687, dir:"2915 West Cactus Road, Glendale", tel:"+1-602-548-1899", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Western Animal Hospital", cat:"vet", lat:33.553345, lng:-112.169619, dir:"West Northern Avenue, Glendale", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Western Animal Hospital", cat:"vet", lat:33.552873, lng:-112.168018, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westridge Animal Hospital", cat:"vet", lat:33.507686, lng:-112.22016, dir:"4801 North 75th Avenue, Glendale", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "glendale-colorado": {nombre:"Glendale", centro:[39.704816, -104.933508], tz:"America/Denver", lugares:[
  {n:"Bark Park", cat:"parque", lat:39.714868, lng:-104.947791, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paragon Pet Salon", cat:"peluqueria", lat:39.70885, lng:-104.928395, tel:"+1-720-974-5064", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Wash Park", cat:"peluqueria", lat:39.702191, lng:-104.980666, dir:"799 South Pearl Street, Glendale", tel:"+1-303-777-7371", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chewy's Bonetique", cat:"tienda", lat:39.720513, lng:-104.902274, dir:"200 North Quebec Street, Glendale", tel:"+1-303-344-2663", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gidget's Grooming", cat:"tienda", lat:39.69684, lng:-104.980615, dir:"1083 South Pearl Street, Glendale", tel:"+1-303-698-0777", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heavenly Dog", cat:"tienda", lat:39.698293, lng:-104.961236, dir:"2224 East Tennessee Avenue, Glendale", tel:"+1-303-777-4665", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.684047, lng:-104.93929, dir:"4100 East Mexico Avenue, Glendale", tel:"+1-303-756-0892", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.710224, lng:-104.937131, dir:"4300 East Alameda Avenue, Glendale", tel:"+1-303-399-0880", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Belcaro Animal hospital", cat:"vet", lat:39.708489, lng:-104.928276, dir:"5023 East Leetsdale Drive, Glendale", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Park Animal Hospital & Wellness Center", cat:"vet", lat:39.692837, lng:-104.978975, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sploot Veterinary Care - Platt Park", cat:"vet", lat:39.695121, lng:-104.987744, dir:"1165 South Broadway, Glendale", tel:"+1-720-730-8818", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Aspenwood Animal Hospital", cat:"vet", lat:39.693168, lng:-104.940161, dir:"1290 South Colorado Boulevard, Glendale", tel:"+1-303-757-5646", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gleneagle": {nombre:"Gleneagle", centro:[39.04527, -104.824423], tz:"America/Denver", lugares:[
  {n:"Fox Run Dog Park", cat:"parque", lat:39.058145, lng:-104.786679, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fox Run Small Dog Park", cat:"parque", lat:39.057086, lng:-104.787669, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jasper Dog Park", cat:"parque", lat:38.98437, lng:-104.794727, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Springs Pet Playground", cat:"parque", lat:38.99608, lng:-104.800032, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jasper Pet Spa", cat:"peluqueria", lat:38.985292, lng:-104.792991, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"EarthWise Pet", cat:"tienda", lat:39.02048, lng:-104.814479, dir:"7 Spectrum Loop, Gleneagle", tel:"+1-719-937-6624", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.066312, lng:-104.850378, dir:"16086 Jackson Creek Parkway, Gleneagle", tel:"+1-719-484-0235", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.942167, lng:-104.801942, dir:"7680 North Academy Boulevard, Gleneagle", tel:"+1-719-531-7870", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Serenity Paws Pet Stylist", cat:"tienda", lat:39.010589, lng:-104.806202, dir:"12225 Voyager Parkway, Gleneagle", tel:"+1-719-487-9105", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Aspen Ridge Equine Hospital", cat:"vet", lat:39.077529, lng:-104.798392, dir:"1480 Higby Road, Gleneagle", tel:"+1-719-265-6677", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:38.942355, lng:-104.801837, dir:"7680 North Academy Boulevard, Gleneagle", tel:"+1-719-536-9594", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"North Springs Veterinary Emergency & Specialty Center", cat:"vet", lat:38.983772, lng:-104.795759, dir:"10520 White Diamond Point, Gleneagle", tel:"+1-719-920-4430", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Northgate Animal Hospital", cat:"vet", lat:39.010459, lng:-104.806114, dir:"12225 Voyager Parkway, Gleneagle", tel:"+1-719-481-3080", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Roller Coaster Veterinary Clinic", cat:"vet", lat:39.073986, lng:-104.783768, dir:"16755 Roller Coaster Road, Gleneagle", tel:"+1-719-488-3018", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tender Care Veterinary Center", cat:"vet", lat:39.023432, lng:-104.820186, dir:"13246 Touchstone View, Gleneagle", tel:"+1-719-413-8282", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Timberview Animal Hospital", cat:"vet", lat:39.00245, lng:-104.799339, dir:"11550 Ridgeline Drive, Gleneagle", tel:"+1-719-362-8880", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "glenwood-springs": {nombre:"Glenwood Springs", centro:[39.546638, -107.324694], tz:"America/Denver", lugares:[
  {n:"Petco", cat:"tienda", lat:39.554506, lng:-107.340813, dir:"105 East Meadows Drive, Glenwood Springs", tel:"+1-970-945-1527", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Birch Tree Animal Hospital", cat:"vet", lat:39.537297, lng:-107.324803, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "globe": {nombre:"Globe", centro:[33.395914, -110.787174], tz:"America/Phoenix", lugares:[
  {n:"K-9 Mine Bark Park", cat:"parque", lat:33.40697, lng:-110.786303, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "glorieta": {nombre:"Glorieta", centro:[35.583031, -105.770002], tz:"America/Denver", lugares:[
  {n:"Canine Cottage", cat:"refugio", lat:35.543738, lng:-105.840352, dir:"Old Las Vegas Highway, Glorieta", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "golden": {nombre:"Golden", centro:[39.754635, -105.22058], tz:"America/Denver", lugares:[
  {n:"Tony Grampsas Dog Park", cat:"parque", lat:39.779312, lng:-105.18733, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Green Paw & Spaw", cat:"peluqueria", lat:39.746215, lng:-105.20744, dir:"2600 East Street, Golden", tel:"+1-303-279-2550", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "golden-valley": {nombre:"Golden Valley", centro:[35.223333, -114.223013], tz:"America/Phoenix", lugares:[
  {n:"Pampered Pets Grooming", cat:"peluqueria", lat:35.222321, lng:-114.210442, dir:"5345 West Highway 68, Golden Valley", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "golden-valley-nevada": {nombre:"Golden Valley", centro:[39.607938, -119.825935], tz:"America/Los_Angeles", lugares:[
  {n:"Greens Feed", cat:"tienda", lat:39.570272, lng:-119.827237, dir:"75 Bailey Drive, Golden Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Station", cat:"tienda", lat:39.605272, lng:-119.840772, dir:"1075 North Hills Boulevard, Golden Valley", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Peavine Animal Hospital", cat:"vet", lat:39.611537, lng:-119.845487, dir:"1440 North Hills Boulevard, Golden Valley", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "goodyear": {nombre:"Goodyear", centro:[33.467228, -112.385349], tz:"America/Phoenix", lugares:[
  {n:"Barketside Dog Park at Verrado", cat:"parque", lat:33.471426, lng:-112.512633, dir:"20950 West Cypress Street, Goodyear", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Roscoe Dog Park", cat:"parque", lat:33.39996, lng:-112.394019, dir:"15600 West Roeser Road, Goodyear", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.468899, lng:-112.389667, dir:"1985 North Pebblecreek Parkway, Goodyear", tel:"+1-623-935-1027", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.441672, lng:-112.422889, dir:"555 South Cotton Lane, Goodyear", tel:"+1-623-882-1355", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petz Place", cat:"tienda", lat:33.456483, lng:-112.393142, dir:"890 North Estrella Parkway, Goodyear", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"CityVet", cat:"vet", lat:33.464793, lng:-112.502494, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dermatology for Animals", cat:"vet", lat:33.450324, lng:-112.359893, dir:"378 North Litchfield Road, Goodyear", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - Goodyear", cat:"vet", lat:33.450905, lng:-112.394709, dir:"380 North Estrella Parkway, Goodyear", tel:"+1-623-882-9000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - Sarival", cat:"vet", lat:33.437447, lng:-112.410099, dir:"960 South Sarival Avenue, Goodyear", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Marketside Animal Hospital at Verrado", cat:"vet", lat:33.466329, lng:-112.506848, dir:"20785 West McDowell Road, Goodyear", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Star Animal Hospital", cat:"vet", lat:33.357821, lng:-112.427673, dir:"9890 South Estrella Parkway, Goodyear", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "granby": {nombre:"Granby", centro:[40.086097, -105.939459], tz:"America/Denver", lugares:[
  {n:"Granby Bark Park", cat:"parque", lat:40.095777, lng:-105.96036, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grand-junction": {nombre:"Grand Junction", centro:[39.067257, -108.56448], tz:"America/Denver", lugares:[
  {n:"Canyon View Dog Park", cat:"parque", lat:39.113367, lng:-108.60423, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bell's Grooming", cat:"peluqueria", lat:39.085386, lng:-108.569996, dir:"1938 North 1st Street, Grand Junction", tel:"+1-970-241-1665", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"HBJ's Grooming", cat:"peluqueria", lat:39.07824, lng:-108.547867, dir:"1460 North Avenue, Grand Junction", tel:"+1-970-243-5220", horas:[9.0, 14.0], nota:"Dato de OpenStreetMap"},
  {n:"Jessica's Grooming", cat:"peluqueria", lat:39.077105, lng:-108.562328, dir:"609 North Avenue, Grand Junction", tel:"+1-970-201-1160", horas:[9.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Jurassic Bark", cat:"peluqueria", lat:39.065691, lng:-108.557979, dir:"225 South 9th Street, Grand Junction", tel:"+1-970-985-3503", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Casa de Pets", cat:"refugio", lat:39.086855, lng:-108.589943, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Dynasty", cat:"refugio", lat:39.066992, lng:-108.545611, dir:"1649 Main Street, Grand Junction", tel:"+1-970-464-2288", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Lizard Lounge", cat:"refugio", lat:39.08709, lng:-108.589946, dir:"575 25 Road, Grand Junction", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ruff'n It Resort & Daycare", cat:"refugio", lat:39.089526, lng:-108.585088, dir:"584 1/2 North Commercial Drive, Grand Junction", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wag Resort", cat:"refugio", lat:39.062579, lng:-108.540962, dir:"398 Indian Road, Grand Junction", tel:"+1-970-241-2949", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"WAG Resort", cat:"refugio", lat:39.090228, lng:-108.588648, dir:"2509 Industrial Court, Grand Junction", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chow Down Pet Supplies", cat:"tienda", lat:39.066011, lng:-108.588983, dir:"2500 Broadway, Grand Junction", tel:"+1-970-243-6200", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.086157, lng:-108.59159, dir:"2464 Highway 6 and 50, Grand Junction", tel:"+1-970-241-8340", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.095998, lng:-108.603018, dir:"2428 F Road, Grand Junction", tel:"+1-970-255-9305", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:39.087374, lng:-108.596781, dir:"2454 Highway 6 and 50, Grand Junction", tel:"+1-970-242-2843", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"All Pets Center", cat:"vet", lat:39.063806, lng:-108.564084, dir:"424 South 5th Street, Grand Junction", tel:"+1-970-241-1976", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Amigo Animal Clinic", cat:"vet", lat:39.090052, lng:-108.588987, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal ER of the Western Slope", cat:"vet", lat:39.077793, lng:-108.545695, dir:"1660 North Avenue, Grand Junction", tel:"+1-970-525-0911", horas:[6.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Rehabilitation Center of Western Colorado", cat:"vet", lat:39.074674, lng:-108.552851, dir:"1156 Hill Avenue, Grand Junction", tel:"+1-970-623-0176", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:39.092422, lng:-108.575306, dir:"2582 Patterson Road, Grand Junction", tel:"+1-970-241-3130", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:39.095837, lng:-108.602927, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Canyon Country Animal Hospital", cat:"vet", lat:39.066957, lng:-108.587511, dir:"2518 Broadway, Grand Junction", tel:"+1-970-812-5233", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Cottonwood Veterinary Hospital", cat:"vet", lat:39.08739, lng:-108.560656, dir:"2232 North 7th Street, Grand Junction", tel:"+1-970-245-0135", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"River Valley Gateway", cat:"vet", lat:39.086863, lng:-108.589804, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sky Canyon Veterinary Hospital", cat:"vet", lat:39.091974, lng:-108.611893, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "grangeville": {nombre:"Grangeville", centro:[45.926552, -116.122326], tz:"America/Denver", lugares:[
  {n:"Holiday Kennel", cat:"refugio", lat:45.926186, lng:-116.08434, tel:"+1-208-451-4407", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "great-falls": {nombre:"Great Falls", centro:[47.504885, -111.29189], tz:"America/Denver", lugares:[
  {n:"Pacific Steel & Recycling Trailside Dog Park", cat:"parque", lat:47.516268, lng:-111.294533, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gina's Puppy Luvin Pet Grooming", cat:"peluqueria", lat:47.49724, lng:-111.292463, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Tails Lodge", cat:"refugio", lat:47.516804, lng:-111.336586, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fetch Pet Boutique", cat:"tienda", lat:47.519573, lng:-111.311709, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:47.483772, lng:-111.343122, dir:"1601 Market Place Drive, Great Falls", tel:"+1-406-454-2444", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:47.493161, lng:-111.289662, dir:"1200 10th Avenue South, Great Falls", tel:"+1-406-770-4238", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Animal Hospital", cat:"vet", lat:47.488095, lng:-111.293192, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K-Heart Veterinary Clinic", cat:"vet", lat:47.507447, lng:-111.337207, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westside Animal Clinic", cat:"vet", lat:47.515598, lng:-111.312634, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "greeley": {nombre:"Greeley", centro:[40.423314, -104.709132], tz:"America/Denver", lugares:[
  {n:"Rover Run Dog Park", cat:"parque", lat:40.441527, lng:-104.758426, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Beauty-Fur Dog Grooming", cat:"peluqueria", lat:40.421642, lng:-104.742924, dir:"3810 West 10th Street, Greeley", tel:"+1-970-888-3173", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Feeders Unlimited", cat:"tienda", lat:40.424867, lng:-104.711091, dir:"2010 8th Street, Greeley", tel:"+1-970-702-2153", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"J&T Feeds", cat:"tienda", lat:40.421957, lng:-104.759075, dir:"4835 West 10th Street, Greeley", tel:"+1-970-378-0240", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Things Exotic Pets", cat:"tienda", lat:40.421009, lng:-104.735777, dir:"3510 West 10th Street, Greeley", tel:"+1-970-515-5685", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PETS Emergency Hospital", cat:"vet", lat:40.396629, lng:-104.745183, dir:"4144 24th Street Road, Greeley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sheep Draw Vet Hosptial", cat:"vet", lat:40.421819, lng:-104.781269, dir:"6297 West 10th Street, Greeley", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "green-river": {nombre:"Green River", centro:[38.995229, -110.161725], tz:"America/Denver", lugares:[
  {n:"Pet Exercise Area", cat:"parque", lat:38.951732, lng:-109.684769, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "green-river-wyoming": {nombre:"Green River", centro:[41.529093, -109.466473], tz:"America/Denver", lugares:[
  {n:"Green River Animal Shelter", cat:"refugio", lat:41.516702, lng:-109.462655, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Castle Rock Veterinary Hospital", cat:"vet", lat:41.50663, lng:-109.480027, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "green-valley": {nombre:"Green Valley", centro:[31.854251, -110.993701], tz:"America/Phoenix", lugares:[
  {n:"Quail Creek Dog Park", cat:"parque", lat:31.896348, lng:-110.964838, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Animal League of Green Valley", cat:"refugio", lat:31.898942, lng:-110.999335, dir:"1600 West Duval Mine Road, Green Valley", tel:"+1-520-625-3170", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Duval Animal Hospital", cat:"vet", lat:31.90302, lng:-110.987494, dir:"1060 West Beta Street, Green Valley", tel:"+1-520-393-6357", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Valley Verde Veterinarians", cat:"vet", lat:31.86989, lng:-110.99275, dir:"151 West Esperanza Boulevard, Green Valley", tel:"+1-520-393-7387", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "greenwood-village": {nombre:"Greenwood Village", centro:[39.61721, -104.950814], tz:"America/Denver", lugares:[
  {n:"Belleview Station Dog Park", cat:"parque", lat:39.626198, lng:-104.907186, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scenthound", cat:"peluqueria", lat:39.580119, lng:-104.961876, dir:"7529 South University Boulevard, Greenwood Village", tel:"+1-720-823-8180", horas:[11.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.60932, lng:-104.959412, dir:"5900 South University Boulevard, Greenwood Village", tel:"+1-303-357-3854", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Cherry Hills Animal Hospital", cat:"vet", lat:39.608396, lng:-104.957567, dir:"5910 South University Boulevard, Greenwood Village", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "guadalupe": {nombre:"Guadalupe", centro:[33.363125, -111.962533], tz:"America/Phoenix", lugares:[
  {n:"Petnet Pharmaceuticals", cat:"farma", lat:33.404372, lng:-111.993041, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"909 West", cat:"parque", lat:33.353083, lng:-111.952961, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Esteban Dog Park", cat:"parque", lat:33.397989, lng:-112.006621, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"RJ Dog Park", cat:"parque", lat:33.291778, lng:-111.974237, horas:[6.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"RJ Dog Park", cat:"parque", lat:33.292929, lng:-111.975225, horas:[6.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"Tempe Sports Complex Dog Park", cat:"parque", lat:33.340997, lng:-111.949036, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fluffy Tails Pet Salon", cat:"peluqueria", lat:33.303569, lng:-111.994537, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shampooch", cat:"peluqueria", lat:33.305841, lng:-111.991835, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shelly's Pet Grooming", cat:"peluqueria", lat:33.363385, lng:-111.912701, dir:"1711 East Guadalupe Road", tel:"+1-480-730-5133", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"The Paw Spa", cat:"peluqueria", lat:33.303373, lng:-111.997793, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:33.377953, lng:-111.891626, dir:"2647 West Baseline Road, Guadalupe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wiggles & Wags Pet Resort", cat:"refugio", lat:33.377367, lng:-111.906967, dir:"1811 East Baseline Road, Guadalupe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chandler Dogs 24 7 Boarding and Day Care", cat:"tienda", lat:33.303767, lng:-111.94859, horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Gordy's Goodies Pet Food & Supplies", cat:"tienda", lat:33.306875, lng:-111.979876, dir:"15425 South 48th Street, Guadalupe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Club Ahwatukee", cat:"tienda", lat:33.305527, lng:-111.992663, dir:"East Chandler Boulevard, Guadalupe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Planet", cat:"tienda", lat:33.304518, lng:-111.9946, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Planet", cat:"tienda", lat:33.379038, lng:-111.929268, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.318607, lng:-111.975732, dir:"5011 East Ray Road, Guadalupe", tel:"+1-480-893-3383", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.362964, lng:-111.912581, dir:"6426 South McClintock Drive, Guadalupe", tel:"+1-480-282-9016", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.318917, lng:-111.983693, dir:"4609 Ray Road, Guadalupe", tel:"+1-480-718-6882", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.350819, lng:-111.957058, dir:"1140 West Elliot Road, Guadalupe", tel:"+1-480-755-3324", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.376045, lng:-112.028227, dir:"2475 East Baseline Road, Guadalupe", tel:"+1-602-232-1090", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Ahwatukee Commons Veterinary Hospital", cat:"vet", lat:33.33204, lng:-111.97917, dir:"4902 East Warner Road, Guadalupe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.37597, lng:-112.028112, tel:"+1-602-232-6007", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.3508, lng:-111.95731, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Family VetCare of Chandler", cat:"vet", lat:33.303771, lng:-111.94521, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Family VetCare of Phoenix", cat:"vet", lat:33.306311, lng:-111.999717, dir:"3908 East Chandler Boulevard, Guadalupe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Good Doctor Veterinary Care", cat:"vet", lat:33.378605, lng:-111.935913, dir:"220 East Baseline Road, Guadalupe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Neighborhood Veterinary Clinic", cat:"vet", lat:33.362551, lng:-111.892586, dir:"2860 South Carriage Lane, Guadalupe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Phoenix Veterinary Center", cat:"vet", lat:33.378941, lng:-112.011119, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Primary Pet Care", cat:"vet", lat:33.378974, lng:-111.891958, dir:"2650 West Baseline Road, Guadalupe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Mountain Vet Clinic", cat:"vet", lat:33.317043, lng:-112.003998, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Point Animal Clinic", cat:"vet", lat:33.379651, lng:-111.977749, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tempe Pet Clinic", cat:"vet", lat:33.391965, lng:-111.962704, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tempe Veterinary Hospital", cat:"vet", lat:33.392507, lng:-111.945005, dir:"329 West Southern Avenue, Guadalupe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tree of Life Exotic Pet Medical Center", cat:"vet", lat:33.337605, lng:-111.993899, dir:"12020 suite 101 South Warner Elliot Loop, Guadalupe", tel:"+1-480-530-0370", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Elliot Park Animal Hospital", cat:"vet", lat:33.350631, lng:-111.913368, dir:"1700 East Elliot Road, Guadalupe", tel:"+1-480-838-8700", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "guernsey": {nombre:"Guernsey", centro:[42.269465, -104.741472], tz:"America/Denver", lugares:[
  {n:"Watch Dog Park", cat:"parque", lat:42.258328, lng:-104.741754, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gunbarrel": {nombre:"Gunbarrel", centro:[40.066939, -105.197152], tz:"America/Denver", lugares:[
  {n:"Gunbarrel Grooming", cat:"peluqueria", lat:40.058973, lng:-105.224996, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bowhaus Boulder", cat:"refugio", lat:40.073078, lng:-105.200843, tel:"+1-303-802-7790", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gunbarrel Veterinary Hospital", cat:"vet", lat:40.059485, lng:-105.22463, dir:"4636 55th Street, Gunbarrel", horas:[7.75, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "gunnison": {nombre:"Gunnison", centro:[38.544355, -106.926928], tz:"America/Denver", lugares:[
  {n:"Hair of the Dawg", cat:"peluqueria", lat:38.544056, lng:-106.935881, dir:"106 South 11th Street, Gunnison", tel:"+1-970-641-2227", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "gunnison-utah": {nombre:"Gunnison", centro:[39.155239, -111.818258], tz:"America/Denver", lugares:[
  {n:"Gunnison Valley Animal Clinic", cat:"vet", lat:39.140667, lng:-111.819352, dir:"630 S Main Street, Gunnison", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hailey": {nombre:"Hailey", centro:[43.519629, -114.315325], tz:"America/Denver", lugares:[
  {n:"Animal Shelter of the Wood River Valley", cat:"refugio", lat:43.509321, lng:-114.338163, dir:"100 Croy Creek Road, Hailey", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hamilton-montana": {nombre:"Hamilton", centro:[46.247205, -114.155546], tz:"America/Denver", lugares:[
  {n:"Hamilton Dog Park", cat:"parque", lat:46.254238, lng:-114.171126, dir:"843 New York Avenue, Hamilton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"4 Paws Grooming", cat:"peluqueria", lat:46.245808, lng:-114.15598, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wags And Woofs", cat:"peluqueria", lat:46.244145, lng:-114.155601, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Corral Kennel", cat:"refugio", lat:46.24635, lng:-114.141615, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bitterroot Humane Society", cat:"refugio", lat:46.255905, lng:-114.149853, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Daly Dog Care", cat:"refugio", lat:46.216261, lng:-114.154147, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild About Pets", cat:"tienda", lat:46.253028, lng:-114.155804, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"On Point Veterinary Services", cat:"vet", lat:46.269064, lng:-114.159158, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Skalkaho Creek Veterinary Clinic", cat:"vet", lat:46.20773, lng:-114.156072, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Valley Pet Clinic", cat:"vet", lat:46.222089, lng:-114.154634, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hardin-montana": {nombre:"Hardin", centro:[45.732478, -107.612031], tz:"America/Denver", lugares:[
  {n:"Animal Care Center", cat:"vet", lat:45.731745, lng:-107.634046, dir:"44493 Old Highway 87, Hardin", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sugar Factory Vet Clinic", cat:"vet", lat:45.752567, lng:-107.608201, dir:"174 Sugar Factory Road, Hardin", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "harrisville-utah": {nombre:"Harrisville", centro:[41.2812, -111.985184], tz:"America/Denver", lugares:[
  {n:"Marian's Pet Services", cat:"peluqueria", lat:41.273209, lng:-111.95637, dir:"836 North Quincy Avenue, Harrisville", tel:"+1-801-452-1235", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Little Dog House", cat:"peluqueria", lat:41.269026, lng:-111.975399, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Furever Friends Animal Oasis", cat:"refugio", lat:41.291095, lng:-111.998275, dir:"1755 N 750 West, Harrisville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Weber County Animal Shelter", cat:"refugio", lat:41.282614, lng:-111.997676, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.269254, lng:-111.969956, dir:"390 East 525 North, Harrisville", tel:"+1-801-528-5043", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Ben Lomond Animal Clinic", cat:"vet", lat:41.284008, lng:-111.986931, dir:"1380 N Highway 89, Harrisville", tel:"+1-801-782-9679", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Ogden Animal Hospital", cat:"vet", lat:41.286663, lng:-111.968591, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hauser": {nombre:"Hauser", centro:[47.772234, -117.028724], tz:"America/Los_Angeles", lugares:[
  {n:"Springwater Veterinary Services", cat:"vet", lat:47.752899, lng:-117.008715, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hayden-idaho": {nombre:"Hayden", centro:[47.759064, -116.786681], tz:"America/Los_Angeles", lugares:[
  {n:"Pawfoot Dog Park", cat:"parque", lat:47.785908, lng:-116.802823, dir:"1357 West Lancaster, Hayden", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Corey's Canine Grooming and Boarding", cat:"peluqueria", lat:47.759636, lng:-116.800281, dir:"1025 West Hayden Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pampered Pet Grooming", cat:"peluqueria", lat:47.76238, lng:-116.788451, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Companions Animal Center", cat:"refugio", lat:47.765139, lng:-116.831, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Idaho Petstop", cat:"tienda", lat:47.766885, lng:-116.78597, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Idaho School of Dog Obedience", cat:"tienda", lat:47.755953, lng:-116.839574, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nothern Pet Products", cat:"tienda", lat:47.769188, lng:-116.786099, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doc Holly Pet Vet", cat:"vet", lat:47.760543, lng:-116.791875, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hayden Pet Medical Center", cat:"vet", lat:47.759486, lng:-116.802815, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mountain View Veterinary Clinic", cat:"vet", lat:47.764359, lng:-116.790135, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Prairie Animal Hospital", cat:"vet", lat:47.74394, lng:-116.798277, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "heber-city": {nombre:"Heber City", centro:[40.506463, -111.413296], tz:"America/Denver", lugares:[
  {n:"BYOP Self Serve Dog Wash", cat:"peluqueria", lat:40.507363, lng:-111.424262, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Lounge", cat:"refugio", lat:40.513682, lng:-111.412429, dir:"464 North Main Street, Heber City", tel:"+1-385-312-0515", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.493853, lng:-111.416022, dir:"500 1268 US Hwy 189, Heber City", tel:"+1-435-654-6267", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "heberovergaard-arizona": {nombre:"Heber–Overgaard, Arizona", centro:[34.417385, -110.574877], tz:"America/Phoenix", lugares:[
  {n:"Pretty Pooch Grooming", cat:"peluqueria", lat:34.430613, lng:-110.59921, tel:"+1-928-535-6962", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "helena-flats": {nombre:"Helena Flats", centro:[48.254953, -114.254534], tz:"America/Denver", lugares:[
  {n:"Humane Society of Northwest Montana", cat:"refugio", lat:48.277678, lng:-114.329272, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Countryside Animal Clinic", cat:"vet", lat:48.274917, lng:-114.329354, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ponderosa Veterinary Hospital", cat:"vet", lat:48.266171, lng:-114.329658, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "helena-montana": {nombre:"Helena", centro:[46.592742, -112.036277], tz:"America/Denver", lugares:[
  {n:"Paws Park", cat:"parque", lat:46.60243, lng:-112.030648, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hart to Heart Groomer", cat:"peluqueria", lat:46.596551, lng:-112.025512, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Town & Country Grooming", cat:"peluqueria", lat:46.603166, lng:-112.055728, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SkyHi Kennel", cat:"refugio", lat:46.597451, lng:-112.018203, dir:"1308 Boulder Avenue, Helena", tel:"+1-406-502-2005", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lewis & Clark Humane Society", cat:"tienda", lat:46.617148, lng:-112.003275, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pad for Paws", cat:"tienda", lat:46.606385, lng:-112.067791, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:46.619477, lng:-112.022197, dir:"3215 Dredge Drive, Helena", tel:"+1-406-449-7461", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:46.622169, lng:-112.01896, dir:"3341 North Montana Avenue, Helena", tel:"+1-406-437-9040", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Alpine Animal Clinic", cat:"vet", lat:46.60634, lng:-112.009784, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Center", cat:"vet", lat:46.606364, lng:-112.01847, dir:"1301 Cedar Street, Helena", tel:"+1-406-442-3160", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Apex Animal Hospital", cat:"vet", lat:46.63402, lng:-112.020512, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bridger Veterinary Hospital", cat:"vet", lat:46.61686, lng:-112.047523, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Helena Veterinary Service", cat:"vet", lat:46.612781, lng:-112.021648, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spring Meadow Veterinary Clinic", cat:"vet", lat:46.60441, lng:-112.05972, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Valley Veterinary Hospital", cat:"vet", lat:46.642604, lng:-112.022912, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "henderson-nevada": {nombre:"Henderson", centro:[36.030139, -114.981549], tz:"America/Los_Angeles", lugares:[
  {n:"Amador Vista Dog Park", cat:"parque", lat:36.015909, lng:-115.054051, horas:[7.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Pulse Dog Park", cat:"parque", lat:36.060631, lng:-114.965734, dir:"475 Pulse Avenue, Henderson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Weston Hills Dog Park", cat:"parque", lat:36.074332, lng:-114.978574, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Kingdom Grooming", cat:"peluqueria", lat:36.022933, lng:-115.046661, dir:"180 South Stephanie Street, Henderson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Tails", cat:"peluqueria", lat:36.014298, lng:-114.964442, dir:"565 College Drive, Henderson", tel:"+1-702-522-8835", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Snooty La Rue Pet Spa & Play", cat:"peluqueria", lat:36.013967, lng:-114.993027, dir:"76 West Horizon Ridge Parkway, Henderson", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Spoiled Paws", cat:"peluqueria", lat:36.013272, lng:-114.960614, dir:"771 East Horizon Drive, Henderson", tel:"+1-702-834-7753", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Good Dog Spa", cat:"peluqueria", lat:36.025433, lng:-115.04663, dir:"90 South Stephanie Street, Henderson", tel:"+1-725-252-0883", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Positive Changes Dog Training", cat:"refugio", lat:36.012069, lng:-114.964495, dir:"644 East Horizon Drive, Henderson", tel:"+1-702-665-4256", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"At Your Service Pet Supplies", cat:"tienda", lat:36.024694, lng:-115.063897, dir:"55 South Valle Verde Drive, Henderson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Food 2 My Door.com", cat:"tienda", lat:36.018378, lng:-115.05444, dir:"1550 West Horizon Ridge Parkway, Henderson", horas:[16.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Doggy Lounge", cat:"tienda", lat:36.016895, lng:-115.056346, dir:"1590 West Horizon Ridge Parkway, Henderson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Henderson Pet Resort", cat:"tienda", lat:36.022472, lng:-115.050394, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Las Vegas Puppy Store", cat:"tienda", lat:36.017021, lng:-115.05619, tel:"+1-702-665-6369", horas:[11.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Las Vegas Puppy Store", cat:"tienda", lat:36.027442, lng:-115.049391, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.004029, lng:-115.084754, dir:"645 South Green Valley Parkway, Henderson", tel:"+1-702-566-0771", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.039117, lng:-114.991831, dir:"286 Lake Mead Parkway, Henderson", tel:"+1-702-558-9326", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Sloppy Kisses Pet Store", cat:"tienda", lat:36.010209, lng:-114.993199, dir:"25 East Horizon Ridge Parkway, Henderson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Soggy Dog", cat:"tienda", lat:36.023142, lng:-115.048828, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Black Mountain Animal Hospital", cat:"vet", lat:36.019685, lng:-114.962739, dir:"400 College Drive, Henderson", tel:"+1-702-565-6558", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cadence Animal Hospital", cat:"vet", lat:36.056553, lng:-114.968012, dir:"1190 East Sunset Road, Henderson", tel:"+1-702-485-5200", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Henderson Animal Hospital", cat:"vet", lat:36.035493, lng:-114.976366, dir:"360 South Boulder Highway, Henderson", tel:"+1-702-564-0900", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Stephanie Animal Hospital", cat:"vet", lat:36.019809, lng:-115.047807, dir:"217 South Stephanie Street, Henderson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Valley Ranch Animal Hospital", cat:"vet", lat:36.028389, lng:-115.062388, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "herriman": {nombre:"Herriman", centro:[40.513978, -112.032909], tz:"America/Denver", lugares:[
  {n:"Daybreak Dog Park", cat:"parque", lat:40.550501, lng:-112.013492, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K9 Memorial Dog Park", cat:"parque", lat:40.520343, lng:-112.011679, dir:"5075 West Herriman Main Street", tel:"+1-801-254-7667", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"peluqueria", lat:40.538957, lng:-112.022897, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"DogWash", cat:"peluqueria", lat:40.531192, lng:-112.017522, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Love N Scrub", cat:"peluqueria", lat:40.524406, lng:-112.024994, dir:"12488 South Rosecrest Road, Herriman", tel:"+1-385-481-7345", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scenthound", cat:"peluqueria", lat:40.538066, lng:-112.019846, horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSuites", cat:"refugio", lat:40.533018, lng:-112.013208, dir:"5116 West Denali Park Drive, Herriman", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.509671, lng:-112.002625, dir:"13296 South Kestrel Range Road, Herriman", tel:"+1-385-274-3928", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Daybreak", cat:"vet", lat:40.545621, lng:-112.00315, dir:"4696 West Daybreak Rim Way, Herriman", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Livewell Animal Hospital", cat:"vet", lat:40.528721, lng:-112.013198, dir:"5127 West Miller Crossing Drive, Herriman", tel:"+1-385-355-6756", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Monarch Veterinary Hospital", cat:"vet", lat:40.539036, lng:-112.022446, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Oquirrh Hills Animal Hospital", cat:"vet", lat:40.508196, lng:-112.027204, dir:"5714 West 13400 South, Herriman", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "highland-utah": {nombre:"Highland", centro:[40.427176, -111.789171], tz:"America/Denver", lugares:[
  {n:"Nibbles & Cuts", cat:"peluqueria", lat:40.431005, lng:-111.787434, dir:"5435 West 11000 North, Highland", tel:"+1-385-334-6485", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Olive Dog Salons", cat:"peluqueria", lat:40.432348, lng:-111.787981, dir:"5424 West Timpanogos Highway, Highland", tel:"+1-385-224-9076", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "highlands-ranch": {nombre:"Highlands Ranch", centro:[39.548359, -105.00045], tz:"America/Denver", lugares:[
  {n:"Digger's at Dad Clark Park", cat:"parque", lat:39.53658, lng:-104.952397, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rover's Run", cat:"parque", lat:39.547562, lng:-105.022117, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wag N Wash", cat:"peluqueria", lat:39.535822, lng:-105.015369, dir:"2229 West Wildcat Reserve Parkway, Highlands Ranch", tel:"+1-720-344-9274", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetClub", cat:"tienda", lat:39.572781, lng:-104.989232, dir:"7961 South Broadway, Highlands Ranch", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.550132, lng:-105.0043, dir:"1265 SGT Jon Stiles Drive, Highlands Ranch", tel:"+1-303-346-0471", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.568122, lng:-104.959002, dir:"8222 South University Boulevard, Highlands Ranch", tel:"+1-303-220-0215", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.54674, lng:-104.994097, dir:"9291 South Broadway, Highlands Ranch", tel:"+1-303-214-0866", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:39.56798, lng:-104.959165, dir:"8222 South University Boulevard, Highlands Ranch", tel:"+1-303-740-7387", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"CityVet", cat:"vet", lat:39.542434, lng:-104.943135, dir:"9567 South University Boulevard, Highlands Ranch", tel:"+1-303-529-2706", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Festival Animal Clinic", cat:"vet", lat:39.566977, lng:-104.959121, dir:"8262 South University Boulevard, Highlands Ranch", tel:"+1-303-850-9393", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"RedStone Veterinary", cat:"vet", lat:39.551657, lng:-105.037069, dir:"9111 Santa Fe Drive, Highlands Ranch", tel:"+1-303-683-1675", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southwest Veterinary Hospital", cat:"vet", lat:39.580165, lng:-104.985835, dir:"250 East Dry Creek Road, Highlands Ranch", tel:"+1-303-794-2697", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Thrive", cat:"vet", lat:39.550024, lng:-105.004085, dir:"1265 SGT Jon Stiles Drive, Highlands Ranch", tel:"+1-720-583-9018", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "hobbs": {nombre:"Hobbs", centro:[32.702702, -103.13553], tz:"America/Denver", lugares:[
  {n:"Hobbs Animal Shelter", cat:"refugio", lat:32.707734, lng:-103.144082, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Double J Animal Hospital", cat:"vet", lat:32.67096, lng:-103.126843, dir:"2804 South Eunice Highway, Hobbs", tel:"+1-575-738-0143", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Great Plains Veterinary Clinic & Hospital", cat:"vet", lat:32.730816, lng:-103.150773, dir:"2720 North Lovington Highway, Hobbs", tel:"+1-575-392-5513", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "holladay": {nombre:"Holladay", centro:[40.671076, -111.825028], tz:"America/Denver", lugares:[
  {n:"Smith's Pharmacy Drivethru", cat:"farma", lat:40.701686, lng:-111.799402, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Cut Above", cat:"peluqueria", lat:40.700349, lng:-111.807316, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All the Raige", cat:"peluqueria", lat:40.684877, lng:-111.815977, dir:"4000 South 2700 East, Holladay", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Stop Grooming", cat:"tienda", lat:40.666988, lng:-111.82314, dir:"4724 South Holladay Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.70116, lng:-111.802586, dir:"3191 East 3300 South, Holladay", tel:"+1-801-487-9290", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Holladay Veterinary Hospital", cat:"vet", lat:40.66702, lng:-111.840134, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Olympus Cove Veterinary Clinic", cat:"vet", lat:40.701291, lng:-111.802057, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sploot", cat:"vet", lat:40.664924, lng:-111.836938, horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "holloman": {nombre:"Holloman", centro:[32.842269, -106.080665], tz:"America/Denver", lugares:[
  {n:"Veterinary Treatment Facility", cat:"vet", lat:32.839846, lng:-106.074014, dir:"22 Yucca Street, Holloman", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "holly-hills": {nombre:"Holly Hills", centro:[39.667665, -104.919315], tz:"America/Denver", lugares:[
  {n:"Bark Park", cat:"parque", lat:39.670016, lng:-104.871098, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Deerfield Dog Park", cat:"parque", lat:39.685868, lng:-104.893858, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Edge DTC Bark Park", cat:"parque", lat:39.637463, lng:-104.901016, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kennedy Dog Park", cat:"parque", lat:39.649236, lng:-104.874754, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tangent Dog Park", cat:"parque", lat:39.63732, lng:-104.910885, dir:"4300 S Monaco St, Holly Hills", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Halee's Puppy Love", cat:"peluqueria", lat:39.654161, lng:-104.913406, dir:"6487 East Hampden Avenue, Holly Hills", tel:"+1-720-227-3787", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Lucky Dog Grooming", cat:"peluqueria", lat:39.681829, lng:-104.921882, dir:"1950 South Holly Street, Holly Hills", tel:"+1-303-568-9590", horas:[8.5, 20.5], nota:"Dato de OpenStreetMap"},
  {n:"Canine Fitness & Fun Center", cat:"refugio", lat:39.678144, lng:-104.92557, dir:"5390 East Evans Avenue, Holly Hills", tel:"+1-720-902-7294", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Doggie Pause", cat:"refugio", lat:39.676396, lng:-104.939819, dir:"4040 East Warren Avenue, Holly Hills", tel:"+1-303-761-8743", horas:[6.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"The Big Backyard", cat:"refugio", lat:39.678984, lng:-104.924821, dir:"5310 East Pacific Place, Holly Hills", tel:"+1-303-757-7905", horas:[7.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Aquatic Dogs", cat:"tienda", lat:39.677178, lng:-104.902091, dir:"7429 East Iliff Avenue, Holly Hills", tel:"+1-303-369-8812", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Busy Beaks Bird Shop", cat:"tienda", lat:39.675362, lng:-104.870132, dir:"10021 East Iliff Avenue, Holly Hills", tel:"+1-303-306-6000", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Station", cat:"tienda", lat:39.674596, lng:-104.940021, dir:"South Colorado Boulevard, Holly Hills", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.651589, lng:-104.902734, dir:"7400 East Hampden Avenue, Holly Hills", tel:"+1-303-770-0607", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.666036, lng:-104.938976, dir:"2780 South Colorado Boulevard, Holly Hills", tel:"+1-303-756-4199", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Bird Center", cat:"tienda", lat:39.652464, lng:-104.899878, dir:"7800 East Hampden Avenue, Holly Hills", tel:"+1-303-758-7575", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aspen Commons Animal Hospital", cat:"vet", lat:39.683472, lng:-104.88039, dir:"1842 South Parker Road, Holly Hills", tel:"+1-303-368-4171", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:39.690827, lng:-104.890898, dir:"1402 South Parker Road, Holly Hills", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Denver Cat Hospital", cat:"vet", lat:39.678726, lng:-104.924799, dir:"5353 East Evans Avenue, Holly Hills", tel:"+1-303-757-7892", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Evans East Animal Hospital", cat:"vet", lat:39.678251, lng:-104.924406, dir:"5470 East Evans Avenue, Holly Hills", tel:"+1-303-757-7881", horas:[8.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Gentle Touch Animal Hospital", cat:"vet", lat:39.653948, lng:-104.882707, dir:"8941 East Hampden Avenue, Holly Hills", tel:"+1-303-691-3720", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Southeast Area Animal Hospital", cat:"vet", lat:39.675036, lng:-104.873715, dir:"9801 East Iliff Avenue, Holly Hills", tel:"+1-303-751-4954", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Emergency Group", cat:"vet", lat:39.653517, lng:-104.917136, dir:"6305 East Hampden Avenue, Holly Hills", tel:"+1-720-739-6003", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Vida Veterinary Care", cat:"vet", lat:39.676864, lng:-104.938768, dir:"4175 East Warren Avenue, Holly Hills", tel:"+1-303-843-7222", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "huachuca-city": {nombre:"Huachuca City", centro:[31.62787, -110.333967], tz:"America/Phoenix", lugares:[
  {n:"Huachuca City Animal Shelter", cat:"refugio", lat:31.619616, lng:-110.333923, dir:"500 Howard Street, Huachuca City", tel:"+1-520-456-1337", horas:[13.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "hudson": {nombre:"Hudson", centro:[40.073443, -104.642986], tz:"America/Denver", lugares:[
  {n:"The Wild Animal Shelter", cat:"refugio", lat:40.034876, lng:-104.55635, dir:"2999 County Road 53, Hudson", tel:"+1-303-536-0118", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "huetter": {nombre:"Huetter", centro:[47.703961, -116.849219], tz:"America/Los_Angeles", lugares:[
  {n:"Atlas Waterfront Dog Park", cat:"parque", lat:47.695274, lng:-116.815598, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Bark Dog Park", cat:"parque", lat:47.716737, lng:-116.832076, dir:"3889 West Nez Perce Road, Huetter", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws and Brews", cat:"refugio", lat:47.708056, lng:-116.886706, dir:"4565 East Seltice Way, Huetter", tel:"+1-208-719-9777", horas:[6.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Idaho Puppy Co", cat:"tienda", lat:47.703734, lng:-116.807545, dir:"2824 North Ramsey Road, Huetter", tel:"+1-208-659-2803", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Mountain Paw Pet Supply", cat:"tienda", lat:47.714579, lng:-116.893677, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alpine Animal Hospital", cat:"vet", lat:47.715188, lng:-116.810102, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hurricane": {nombre:"Hurricane", centro:[37.175027, -113.289888], tz:"America/Denver", lugares:[
  {n:"Hurricane Dog Park", cat:"parque", lat:37.187518, lng:-113.295243, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Zion Veterinary Hospital", cat:"vet", lat:37.176345, lng:-113.285713, tel:"+1-435-635-4033", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "hysham": {nombre:"Hysham", centro:[46.293045, -107.233007], tz:"America/Denver", lugares:[
  {n:"Treasure Veterinary Services", cat:"vet", lat:46.291181, lng:-107.240557, dir:"24 Myers Road, Hysham", tel:"+1-406-342-5224", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "idaho-falls": {nombre:"Idaho Falls", centro:[43.490902, -112.039174], tz:"America/Denver", lugares:[
  {n:"Idaho Falls Animal Control", cat:"refugio", lat:43.518377, lng:-112.014092, dir:"2450 Hemmert Avenue, Idaho Falls", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Broadway Veterinary Clinic", cat:"vet", lat:43.497149, lng:-112.07851, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eastside Pet Clinic", cat:"vet", lat:43.495072, lng:-111.99862, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Idaho Falls Veterinary Emergency Clinic", cat:"vet", lat:43.469581, lng:-112.045382, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Skyline Animal Hospital", cat:"vet", lat:43.48583, lng:-112.073017, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sunnyside Veterinary Clinic", cat:"vet", lat:43.467757, lng:-112.045999, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Idaho Falls Zoo at Tautphaus Park", cat:"zoo", lat:43.472183, lng:-112.041958, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "idaho-springs": {nombre:"Idaho Springs", centro:[39.742597, -105.513637], tz:"America/Denver", lugares:[
  {n:"Cleer Creek Veterinary Clinic", cat:"vet", lat:39.741999, lng:-105.520143, dir:"1209 Miner Street, Idaho Springs", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "imlay": {nombre:"Imlay", centro:[40.659471, -118.149015], tz:"America/Los_Angeles", lugares:[
  {n:"Safe Haven Animal Shelter", cat:"refugio", lat:40.545744, lng:-118.062722, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "incline-village": {nombre:"Incline Village", centro:[39.250125, -119.951909], tz:"America/Los_Angeles", lugares:[
  {n:"Pet Station", cat:"tienda", lat:39.250721, lng:-119.951597, dir:"910 Tahoe Boulevard, Incline Village", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "indian-hills-nevada": {nombre:"Indian Hills", centro:[39.085961, -119.783849], tz:"America/Los_Angeles", lugares:[
  {n:"Dog Park", cat:"parque", lat:39.118412, lng:-119.774131, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.108945, lng:-119.778627, dir:"911 Topsy Lane, Indian Hills", tel:"+1-775-267-2826", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Quail Ridge Animal Hospital", cat:"vet", lat:39.092777, lng:-119.776003, dir:"937 Mica Drive, Indian Hills", tel:"+1-775-267-4888", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "isleta": {nombre:"Isleta", centro:[34.90783, -106.693018], tz:"America/Denver", lugares:[
  {n:"De Anza Small Animal Clinic", cat:"vet", lat:34.95251, lng:-106.695194, dir:"7601 Isleta Boulevard Southwest", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ivins": {nombre:"Ivins", centro:[37.168591, -113.679406], tz:"America/Denver", lugares:[
  {n:"Ivins Dog Park", cat:"parque", lat:37.181706, lng:-113.692444, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ivins City Animal Shelter", cat:"refugio", lat:37.176395, lng:-113.683897, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jackson-wyoming": {nombre:"Jackson", centro:[43.479965, -110.761815], tz:"America/Denver", lugares:[
  {n:"teton tails", cat:"tienda", lat:43.47853, lng:-110.770871, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "jerome-idaho": {nombre:"Jerome", centro:[42.723846, -114.518808], tz:"America/Denver", lugares:[
  {n:"The Spaw", cat:"peluqueria", lat:42.704161, lng:-114.517783, dir:"1950 South Lincoln Avenue, Jerome", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "johnstown": {nombre:"Johnstown", centro:[40.33503, -104.909284], tz:"America/Denver", lugares:[
  {n:"Full Circle Veterinary Clinic", cat:"vet", lat:40.335674, lng:-104.90732, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kalispell": {nombre:"Kalispell", centro:[48.202158, -114.315321], tz:"America/Denver", lugares:[
  {n:"Paws to Play Dog Park", cat:"parque", lat:48.178031, lng:-114.311393, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dog Club", cat:"parque", lat:48.201977, lng:-114.317269, horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Dog Gone Clean", cat:"peluqueria", lat:48.207035, lng:-114.330734, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Flathead County Animal Shelter", cat:"refugio", lat:48.164704, lng:-114.293894, tel:"+1-406-752-1310", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dee-O-Gee", cat:"tienda", lat:48.234314, lng:-114.340432, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogfood Express", cat:"tienda", lat:48.205454, lng:-114.298408, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:48.239366, lng:-114.33226, dir:"65 Treeline Road, Kalispell", tel:"+1-406-756-0534", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"The Aquarium Shop", cat:"tienda", lat:48.205565, lng:-114.298316, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ashley Creek Animal Clinic", cat:"vet", lat:48.150715, lng:-114.285244, dir:"3251 US 93, Kalispell", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Flathead Animal Clinic", cat:"vet", lat:48.194729, lng:-114.314385, tel:"+1-406-755-5046", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"}
 ]},
 "kanab": {nombre:"Kanab", centro:[37.048172, -112.528524], tz:"America/Denver", lugares:[
  {n:"Laurie and Carlee McGrath Adoption Hub", cat:"refugio", lat:37.144452, lng:-112.555881, dir:"Rhonda, Kanab", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Critter Corner", cat:"tienda", lat:37.042699, lng:-112.520438, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Animal Clinic", cat:"vet", lat:37.144617, lng:-112.558846, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kanab Veterinary Hospital", cat:"vet", lat:37.035008, lng:-112.378754, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "kearns": {nombre:"Kearns", centro:[40.65286, -112.004618], tz:"America/Denver", lugares:[
  {n:"Banfield Pet Hospital", cat:"vet", lat:40.611027, lng:-112.024721, dir:"7712 South 5600 West, Kearns", tel:"+1-801-280-6260", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"West Lake Animal Hospital", cat:"vet", lat:40.65388, lng:-111.98234, dir:"3800 West 5400 South, Kearns", tel:"+1-801-966-6348", horas:[7.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "kemmerer": {nombre:"Kemmerer", centro:[41.792461, -110.537711], tz:"America/Denver", lugares:[
  {n:"Riverside Vet", cat:"vet", lat:41.788742, lng:-110.539448, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "king-arthur-park": {nombre:"King Arthur Park", centro:[45.667671, -111.125431], tz:"America/Denver", lugares:[
  {n:"Tri-H Stables", cat:"refugio", lat:45.60761, lng:-111.109757, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All West Veterinary Hospital", cat:"vet", lat:45.672989, lng:-111.142968, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cottonwood Veterinary Hospital", cat:"vet", lat:45.67448, lng:-111.103436, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Double Daimond Veterinary Hospital", cat:"vet", lat:45.703529, lng:-111.0967, tel:"+1-406-522-9491", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Montana Veterinary Hospital & Boarding", cat:"vet", lat:45.669472, lng:-111.153819, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kingman": {nombre:"Kingman", centro:[35.189592, -114.0533], tz:"America/Phoenix", lugares:[
  {n:"Manzanita Animal Hospital", cat:"tienda", lat:35.214211, lng:-114.023787, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.220426, lng:-114.033609, dir:"3320 Stockton Hill Road, Kingman", tel:"+1-928-681-4101", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.220634, lng:-114.034939, dir:"3260 Stockton Hill Road, Kingman", tel:"+1-928-681-4815", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "kiowa": {nombre:"Kiowa", centro:[39.346721, -104.463611], tz:"America/Denver", lugares:[
  {n:"Prairy Wind Animal Refuge", cat:"zoo", lat:39.406558, lng:-104.254326, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "komatke-komadk": {nombre:"Komatke / Komaḍk", centro:[33.29118, -112.16933], tz:"America/Phoenix", lugares:[
  {n:"Southern Hills Dog Park", cat:"parque", lat:33.360726, lng:-112.114428, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "kuna": {nombre:"Kuna", centro:[43.491831, -116.420122], tz:"America/Denver", lugares:[
  {n:"Binx Community Dog Park", cat:"parque", lat:43.534541, lng:-116.300064, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggie Works", cat:"peluqueria", lat:43.491492, lng:-116.421079, dir:"373 North Avenue E, Kuna", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Valley Retrievers", cat:"refugio", lat:43.372228, lng:-116.532492, dir:"130 Base Line Road, Kuna", tel:"+1-208-837-2444", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Care Clinic-Kuna", cat:"vet", lat:43.488658, lng:-116.410357, dir:"366 East Avalon Street, Kuna", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Treasure Valley Veterinary Hospital", cat:"vet", lat:43.500785, lng:-116.393245, dir:"1378 North Meridian Road, Kuna", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "la-junta": {nombre:"La Junta", centro:[37.985009, -103.543832], tz:"America/Denver", lugares:[
  {n:"Krugman Small Aminal Clinic", cat:"vet", lat:37.987728, lng:-103.537033, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lafayette-colorado": {nombre:"Lafayette", centro:[39.993596, -105.089705], tz:"America/Denver", lugares:[
  {n:"The Great Bark Dog Park", cat:"parque", lat:40.004828, lng:-105.07608, dir:"597 North 119th Street, Lafayette", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Great Bark Dog Park", cat:"parque", lat:40.004461, lng:-105.075408, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:39.986588, lng:-105.093296, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Ave.", cat:"tienda", lat:39.987339, lng:-105.107048, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Avenue Pet Boutique", cat:"tienda", lat:39.998433, lng:-105.103462, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Natural Pet Food", cat:"tienda", lat:39.988211, lng:-105.095592, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Our Pet Spot", cat:"tienda", lat:40.016388, lng:-105.100394, dir:"3331 Arapahoe Road, Lafayette", tel:"+1-720-524-6842", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Kalita Grill Greek Cafe", cat:"vet", lat:39.991131, lng:-105.09084, dir:"801 South Public Road, Lafayette", horas:[11.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Lafayette Companion", cat:"vet", lat:39.988195, lng:-105.095444, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mountain Ridge Animal Hospital", cat:"vet", lat:39.998509, lng:-105.103511, dir:"287 US 287, Lafayette", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA All Pets Animal Hospital Lafayette", cat:"vet", lat:39.99077, lng:-105.090906, dir:"South Public Road, Lafayette", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vista Animal Hospital", cat:"vet", lat:40.000879, lng:-105.019417, dir:"3200 Vista Village Drive, Lafayette", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lake-havasu-city": {nombre:"Lake Havasu City", centro:[34.475554, -114.32859], tz:"America/Phoenix", lugares:[
  {n:"Big Dog Off-leash Park", cat:"parque", lat:34.450737, lng:-114.267256, dir:"7200 McCulloch Boulevard South, Lake Havasu City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lions' Dog Park", cat:"parque", lat:34.467515, lng:-114.348652, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Off-leash Park", cat:"parque", lat:34.450309, lng:-114.267187, dir:"7200 McCulloch Boulevard South, Lake Havasu City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"McGuire Veterinary Services", cat:"vet", lat:34.457972, lng:-114.282962, dir:"3181 Maricopa Avenue, Lake Havasu City", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lakeside-colorado": {nombre:"Lakeside", centro:[39.779395, -105.054869], tz:"America/Denver", lugares:[
  {n:"Berkeley Dog Park", cat:"parque", lat:39.782303, lng:-105.05251, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fish Den", cat:"tienda", lat:39.77687, lng:-105.051764, dir:"5055 West 44th Avenue, Lakeside", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mouthfuls Pet Store", cat:"tienda", lat:39.774424, lng:-105.043869, dir:"4224 Tennyson Street, Lakeside", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.778754, lng:-105.058517, dir:"5709 West 44th Avenue, Lakeside", tel:"+1-720-475-3517", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lakewood-colorado": {nombre:"Lakewood", centro:[39.708574, -105.084669], tz:"America/Denver", lugares:[
  {n:"Lakeview Towers/ Belmar Dog Park", cat:"parque", lat:39.704491, lng:-105.076897, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"DogPatch Grooming, Inc.", cat:"peluqueria", lat:39.691038, lng:-105.119419, dir:"1555 South Kipling Parkway, Lakewood", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:39.707873, lng:-105.136766, dir:"12057 West Alameda Parkway, Lakewood", tel:"+1-303-993-1669", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's", cat:"tienda", lat:39.708148, lng:-105.137264, dir:"12051 West Alameda Parkway, Lakewood", tel:"+1-720-719-7770", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.707587, lng:-105.083525, dir:"475 South Wadsworth, Lakewood", tel:"+1-303-985-0050", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pets 'N Stuff", cat:"tienda", lat:39.683758, lng:-105.083438, horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Front Range Veterinary Clinic", cat:"vet", lat:39.712638, lng:-105.102131, dir:"207 South Garland Street, Lakewood", tel:"+1-303-233-6322", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kipling Veterinary Hospital", cat:"vet", lat:39.679995, lng:-105.119522, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Red Rocks Animal Center", cat:"vet", lat:39.726475, lng:-105.114548, dir:"620 Miller Court, Lakewood", tel:"+1-303-987-2026", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Stockton Pet Hospital", cat:"vet", lat:39.694564, lng:-105.081195, dir:"1234 South Wadsworth Boulevard, Lakewood", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lamar-colorado": {nombre:"Lamar", centro:[38.087231, -102.620749], tz:"America/Denver", lugares:[
  {n:"Big Timbers Veterinary Clinic", cat:"vet", lat:38.116504, lng:-102.620071, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lamoille": {nombre:"Lamoille", centro:[40.727983, -115.478392], tz:"America/Los_Angeles", lugares:[
  {n:"Mustang Monument", cat:"refugio", lat:40.752465, lng:-115.03114, tel:"+1-888-979-1422", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lamy": {nombre:"Lamy", centro:[35.480665, -105.880191], tz:"America/Denver", lugares:[
  {n:"Cheeky Bubbles Pet Grooming", cat:"peluqueria", lat:35.53885, lng:-105.89185, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eldorado Country Pet & Wild Bird", cat:"tienda", lat:35.539052, lng:-105.891874, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cameron Veterinary Clinic", cat:"vet", lat:35.539155, lng:-105.891816, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "laporte": {nombre:"Laporte", centro:[40.627031, -105.137752], tz:"America/Denver", lugares:[
  {n:"Chappelle Small Animal Hospital", cat:"vet", lat:40.624937, lng:-105.104353, dir:"1601 North US Highway 287, Laporte", tel:"+1-970-482-7595", horas:[7.5, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "laramie": {nombre:"Laramie", centro:[41.311644, -105.591788], tz:"America/Denver", lugares:[
  {n:"The Feed Store", cat:"tienda", lat:41.308518, lng:-105.626842, dir:"2262 Snowy Range Road, Laramie", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Windy City Pet Store", cat:"tienda", lat:41.307125, lng:-105.594268, dir:"702 South 3rd Street, Laramie", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alpine Animal Hospital", cat:"vet", lat:41.291628, lng:-105.587288, dir:"830 Skyline Road, Laramie", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "larkspur-colorado": {nombre:"Larkspur", centro:[39.228848, -104.884495], tz:"America/Denver", lugares:[
  {n:"Devon's Dog Park", cat:"parque", lat:39.178813, lng:-104.852335, dir:"1532 Noe Road, Larkspur", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Larkspur Pet Hospital", cat:"vet", lat:39.233066, lng:-104.884294, dir:"8825 Spruce Mountain Road, Larkspur", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Children's Realm", cat:"zoo", lat:39.227441, lng:-104.897729, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "las-campanas": {nombre:"Las Campanas", centro:[35.716924, -106.057981], tz:"America/Denver", lugares:[
  {n:"Las Campanas Dog Park", cat:"parque", lat:35.709118, lng:-106.078435, dir:"Las Campanas Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"River Trail Dog Park", cat:"parque", lat:35.65899, lng:-106.024863, dir:"2100 Caja del Oro Grant Road, Las Campanas", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Santa Fe Animal Shelter and Dog Park", cat:"parque", lat:35.657913, lng:-106.061382, dir:"100 Caja del Rio Road, Las Campanas", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Santa Fe Animal Shelter", cat:"refugio", lat:35.658267, lng:-106.060012, dir:"100 Caja del Rio Road, Las Campanas", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clare Eddy Thaw Animal Hospital", cat:"vet", lat:35.657933, lng:-106.059846, dir:"100 Caja del Rio Road, Las Campanas", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Thaw Animal Hospital", cat:"vet", lat:35.657992, lng:-106.060134, dir:"100 Caja del Rio Road, Las Campanas", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "las-cruces": {nombre:"Las Cruces", centro:[32.314035, -106.779807], tz:"America/Denver", lugares:[
  {n:"Las Cruces Dog Park", cat:"parque", lat:32.316468, lng:-106.761654, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Bark/pet grooming", cat:"peluqueria", lat:32.302659, lng:-106.791814, tel:"+1-575-202-8597", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggy Shop Grooming", cat:"peluqueria", lat:32.298792, lng:-106.761613, dir:"1315 South Solano Drive, Las Cruces", tel:"+1-575-232-9968", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Las Cruces Animal Shelter", cat:"refugio", lat:32.365889, lng:-106.748833, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Awesome Reptiles", cat:"tienda", lat:32.29763, lng:-106.761331, dir:"1414 South Solano Drive, Las Cruces", tel:"+1-575-522-9757", horas:[12.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Mesilla Valley Feeds", cat:"tienda", lat:32.301524, lng:-106.801676, dir:"1800 West Amador Avenue, Las Cruces", tel:"+1-575-523-6154", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.315854, lng:-106.741198, dir:"3050 East Lohman Avenue, Las Cruces", tel:"+1-575-532-5200", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.31106, lng:-106.753536, dir:"2200 East Lohman Avenue, Las Cruces", tel:"+1-575-523-1154", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Argus Pet Center / Veterinary Clinic / 701 Valley", cat:"vet", lat:32.300392, lng:-106.790515, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arroyo Vetinary Clinic", cat:"vet", lat:32.309981, lng:-106.753239, dir:"825 South Walnut Street, Las Cruces", tel:"+1-575-524-0900", horas:[8.0, 12.0], nota:"Dato de OpenStreetMap"},
  {n:"Jornada Veterinary Clinic", cat:"vet", lat:32.357321, lng:-106.759459, dir:"2399 Saturn Circle, Las Cruces", tel:"+1-575-382-1710", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "las-vegas": {nombre:"Las Vegas", centro:[36.167426, -115.148413], tz:"America/Los_Angeles", lugares:[
  {n:"The Hydrant Club", cat:"parque", lat:36.167646, lng:-115.136325, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Path 4 Paws Dog Rescue", cat:"refugio", lat:36.17595, lng:-115.221285, dir:"232 North Jones Boulevard, Las Vegas", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.198052, lng:-115.238449, dir:"2140 North Rainbow Boulevard, Las Vegas", tel:"+1-702-631-8422", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.156029, lng:-115.205749, dir:"1261 South Decatur Boulevard, Las Vegas", tel:"+1-702-870-8200", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Lone Mountain Animal Hospital", cat:"vet", lat:36.218435, lng:-115.241836, dir:"6688 West Cheyenne Avenue, Las Vegas", tel:"+1-702-645-3116", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Sahara Animal Hospital", cat:"vet", lat:36.14413, lng:-115.199078, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Habitat", cat:"zoo", lat:36.17171, lng:-115.189993, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Butterfly Habitat", cat:"zoo", lat:36.168048, lng:-115.189255, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "las-vegas-new-mexico": {nombre:"Las Vegas", centro:[35.593848, -105.223759], tz:"America/Denver", lugares:[
  {n:"Pretty Ribbons Dog Grooming Salon", cat:"peluqueria", lat:35.572947, lng:-105.219888, dir:"698 South Grand Avenue, Las Vegas", tel:"+1-505-454-1816", horas:[10.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"LV SM Veterinary Hospital", cat:"vet", lat:35.640305, lng:-105.226397, dir:"84 NM 518, Las Vegas", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "laurel-montana": {nombre:"Laurel", centro:[45.669116, -108.771532], tz:"America/Denver", lugares:[
  {n:"Park City Dog Park", cat:"parque", lat:45.633393, lng:-108.917397, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Palace", cat:"peluqueria", lat:45.666858, lng:-108.762813, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"DD Kennels", cat:"refugio", lat:45.769381, lng:-108.71902, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Molly & Friends", cat:"refugio", lat:45.670539, lng:-108.76762, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Beartooth Veterinary Services", cat:"vet", lat:45.670877, lng:-108.766179, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Friendship Veterinary Center", cat:"vet", lat:45.668952, lng:-108.780837, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Laurel East Animal Hospital", cat:"vet", lat:45.684001, lng:-108.70016, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "layton-utah": {nombre:"Layton", centro:[41.075105, -111.974193], tz:"America/Denver", lugares:[
  {n:"Kay's Crossing Dog Park", cat:"parque", lat:41.058398, lng:-111.966219, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Bark Spot", cat:"refugio", lat:41.075306, lng:-111.982183, dir:"1045 North Main Street, Layton", tel:"+1-801-497-9663", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Pals Place L.L.C.", cat:"tienda", lat:41.101498, lng:-111.950898, dir:"2963 North Fairfield Road, Layton", tel:"+1-801-771-0330", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:41.090218, lng:-111.980192, dir:"2095 Harris Boulevard, Layton", tel:"+1-801-773-0875", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.072054, lng:-111.976584, dir:"750 North Main Street, Layton", tel:"+1-801-336-5265", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Bird Center", cat:"tienda", lat:41.087136, lng:-111.983603, dir:"1860 N Heritage Park Blvd, Layton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canyon View Cares", cat:"vet", lat:41.060725, lng:-111.985252, dir:"1014 West Gentile Street, Layton", tel:"+1-801-547-1111", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Fairfield Veterinary Hospital", cat:"vet", lat:41.063178, lng:-111.945892, dir:"230 North Fairfield Road, Layton", tel:"+1-801-544-8800", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Layton Veterinary Hospital", cat:"vet", lat:41.08226, lng:-111.991868, dir:"1538 N MAIN ST, Layton", tel:"+1-801-773-2570", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Mountain West Veterinary Specialists", cat:"vet", lat:41.073358, lng:-111.978832, dir:"908 North Main Street, Layton", tel:"+1-801-683-6201", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Layton Aquarium & Wildlife", cat:"zoo", lat:41.078897, lng:-111.977528, dir:"1201 North Hill Field Road, Layton", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "leadville": {nombre:"Leadville", centro:[39.250823, -106.292524], tz:"America/Denver", lugares:[
  {n:"Leadville Dog Park", cat:"parque", lat:39.245854, lng:-106.300817, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grateful Paws", cat:"tienda", lat:39.241927, lng:-106.29445, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lehi": {nombre:"Lehi", centro:[40.388111, -111.848602], tz:"America/Denver", lugares:[
  {n:"Scrubbin' Pup", cat:"peluqueria", lat:40.386396, lng:-111.836359, dir:"785 East 200 South, Lehi", tel:"+1-801-210-1181", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.387248, lng:-111.825508, dir:"990 West State Road, Lehi", tel:"+1-801-756-0192", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lemmon-valley": {nombre:"Lemmon Valley", centro:[39.636024, -119.843254], tz:"America/Los_Angeles", lugares:[
  {n:"All Fur Love Grooming", cat:"peluqueria", lat:39.638639, lng:-119.844212, dir:"9305 Lemmon Drive, Lemmon Valley", tel:"+1-775-409-3043", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Valley Veterinary Clinic", cat:"vet", lat:39.638278, lng:-119.843545, dir:"9255 Lemmon Drive, Lemmon Valley", tel:"+1-775-683-9255", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Valley Veterinary Clinic Surgury Center", cat:"vet", lat:39.63832, lng:-119.8433, dir:"9247 Lemmon Drive, Lemmon Valley", tel:"+1-775-683-9255", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sierra Nevada Zoological Park", cat:"zoo", lat:39.623499, lng:-119.909161, dir:"10200 North Virginia Street, Lemmon Valley", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lewiston-idaho": {nombre:"Lewiston", centro:[46.419591, -117.021614], tz:"America/Los_Angeles", lugares:[
  {n:"Bob's Pet and Pond", cat:"tienda", lat:46.410494, lng:-117.001084, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Orchards Pet Hospital", cat:"vet", lat:46.387437, lng:-116.985284, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "leyden": {nombre:"Leyden", centro:[39.844709, -105.184154], tz:"America/Denver", lugares:[
  {n:"Candelas Dog Park", cat:"parque", lat:39.867726, lng:-105.191948, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Arvada Dog Park", cat:"parque", lat:39.81744, lng:-105.205238, dir:"17975 West 64th Parkway, Leyden", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westminster Hills Dog Park", cat:"parque", lat:39.888035, lng:-105.129524, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westminster Hills Open Space", cat:"parque", lat:39.883692, lng:-105.138364, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's Pet Food & Supplies", cat:"tienda", lat:39.861306, lng:-105.166778, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "libby": {nombre:"Libby", centro:[48.388365, -115.555861], tz:"America/Denver", lugares:[
  {n:"Libby Animal Shelter", cat:"refugio", lat:48.404235, lng:-115.550357, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Treasure Valley Veterinary Clinic", cat:"vet", lat:48.396731, lng:-115.572136, dir:"31688 US 2, Libby", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westgate Animal Clinic", cat:"vet", lat:48.408702, lng:-115.59644, dir:"368 Westgate Avenue, Libby", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "limon": {nombre:"Limon", centro:[39.263165, -103.687774], tz:"America/Denver", lugares:[
  {n:"Eastern Colorado Veterinary Services", cat:"vet", lat:39.265279, lng:-103.676899, dir:"474 1st Avenue, Limon", tel:"+1-719-775-8166", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lincoln-park": {nombre:"Lincoln Park", centro:[38.429165, -105.21999], tz:"America/Denver", lugares:[
  {n:"Kenline Veterinary Clinic", cat:"vet", lat:38.426576, lng:-105.231149, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lindon": {nombre:"Lindon", centro:[40.343286, -111.72076], tz:"America/Denver", lugares:[
  {n:"A Caring Vet Animal Hospital", cat:"vet", lat:40.343851, lng:-111.721404, dir:"360 North State Street, Lindon", tel:"+1-801-785-6737", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "litchfield-park": {nombre:"Litchfield Park", centro:[33.49338, -112.358124], tz:"America/Phoenix", lugares:[
  {n:"Dreaming Summit Animal Hospital", cat:"vet", lat:33.509422, lng:-112.327281, dir:"5115 North Wigwam Creek Boulevard, Litchfield Park", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Complete Pet Animal Hospital", cat:"vet", lat:33.510542, lng:-112.34015, dir:"5135 North Dysart Road, Litchfield Park", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "littleton": {nombre:"Littleton", centro:[39.613321, -105.016649], tz:"America/Denver", lugares:[
  {n:"Englewood Unleashed Dog Park", cat:"parque", lat:39.62822, lng:-105.005091, dir:"4848 South Windermere Street, Littleton", tel:"+1-303-694-7485", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Urban Sophisticats", cat:"peluqueria", lat:39.61219, lng:-105.019817, dir:"588 South Rapp Street, Littleton", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of South Platte Valey", cat:"refugio", lat:39.627945, lng:-105.013251, dir:"2129 West Chenango Avenue, Littleton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Littleton Animal Hospital", cat:"vet", lat:39.6218, lng:-105.01836, horas:[7.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Belleview Children's Farm", cat:"zoo", lat:39.624935, lng:-105.000928, dir:"5001 South Inca Drive, Littleton", tel:"+1-303-798-6927", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "livingston-montana": {nombre:"Livingston", centro:[45.662387, -110.56159], tz:"America/Denver", lugares:[
  {n:"Moja Campbell Dog Park", cat:"parque", lat:45.667713, lng:-110.540602, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Colmey Veterinary Hospital", cat:"vet", lat:45.641177, lng:-110.573729, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lockwood-nevada": {nombre:"Lockwood", centro:[39.507101, -119.646469], tz:"America/Los_Angeles", lugares:[
  {n:"Link Piazzo Dog Park", cat:"parque", lat:39.48649, lng:-119.714109, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "logan-utah": {nombre:"Logan", centro:[41.731306, -111.834914], tz:"America/Denver", lugares:[
  {n:"The Bark Spot", cat:"peluqueria", lat:41.722678, lng:-111.834802, dir:"472 South Main Street, Logan", tel:"+1-435-787-0099", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cache Humane Society", cat:"refugio", lat:41.73579, lng:-111.891322, dir:"2370 West 200 North, Logan", tel:"+1-435-792-3920", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.750487, lng:-111.832737, dir:"1050 North Main Street, Logan", tel:"+1-435-755-0244", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Bridgerland-Cache Animal Hospital", cat:"vet", lat:41.748574, lng:-111.836638, dir:"95 West 900 North, Logan", tel:"+1-435-752-2151", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Zootah", cat:"zoo", lat:41.719834, lng:-111.846741, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lolo": {nombre:"Lolo", centro:[46.75686, -114.0823], tz:"America/Denver", lugares:[
  {n:"Humane Society of Western Montana", cat:"refugio", lat:46.814254, lng:-114.090405, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Blessings Pet Hospital", cat:"vet", lat:46.814923, lng:-114.090654, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lone-tree": {nombre:"Lone Tree", centro:[39.536303, -104.88558], tz:"America/Denver", lugares:[
  {n:"David Lorenz Dog Park", cat:"parque", lat:39.562692, lng:-104.928247, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hound Hill Dog Park", cat:"parque", lat:39.537623, lng:-104.9182, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Larry L. Levin Dog Park", cat:"parque", lat:39.519966, lng:-104.864418, dir:"10890 Rail Way, Lone Tree", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's Pet Food & Supplies", cat:"tienda", lat:39.524925, lng:-104.941268, dir:"4008 Red Cedar Drive, Lone Tree", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kriser's Natural Pet", cat:"tienda", lat:39.544424, lng:-104.942075, dir:"9362 South Colorado Boulevard, Lone Tree", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"MC Aquatics - Englewood", cat:"tienda", lat:39.537286, lng:-104.853469, dir:"11800 East Oswego Street, Lone Tree", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alpenview Veterinary Hospital", cat:"vet", lat:39.525963, lng:-104.939897, tel:"+1-303-346-8911", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Meridian Animal Hospital", cat:"vet", lat:39.535742, lng:-104.848004, dir:"12155 Lioness Way, Lone Tree", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"WellHaven Pet Health", cat:"vet", lat:39.534367, lng:-104.880229, dir:"10016 Commons Street, Lone Tree", tel:"+1-303-396-6136", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "longmont": {nombre:"Longmont", centro:[40.167212, -105.101928], tz:"America/Denver", lugares:[
  {n:"Dog Park #1", cat:"parque", lat:40.19515, lng:-105.115649, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Four Paws& CO Dog Wash & Pet Supplies", cat:"peluqueria", lat:40.151662, lng:-105.114125, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws & Claws", cat:"peluqueria", lat:40.176629, lng:-105.102693, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws2Groom", cat:"peluqueria", lat:40.15127, lng:-105.126863, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Cat's Meow", cat:"peluqueria", lat:40.174178, lng:-105.10176, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Paw Spa", cat:"peluqueria", lat:40.153727, lng:-105.104207, dir:"700 Ken Pratt Boulevard, Longmont", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:40.150611, lng:-105.116152, dir:"801 South Sherman Street, Longmont", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Longmont Humane Society", cat:"refugio", lat:40.153096, lng:-105.125698, dir:"Fairground, Longmont", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dee-O-Gee Longmont", cat:"tienda", lat:40.161003, lng:-105.099567, dir:"110 Emery Street, Longmont", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.150789, lng:-105.097246, dir:"205 Ken Pratt Boulevard, Longmont", tel:"+1-720-652-4642", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.145528, lng:-105.133481, dir:"1125 South Hover Road, Longmont", tel:"+1-303-702-9526", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Whispering", cat:"vet", lat:40.198285, lng:-105.147508, dir:"2226 Mariner Drive, Longmont", tel:"+1-303-682-0500", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:40.148905, lng:-105.129876, dir:"1216 South Hover Street, Longmont", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Family Pet Hospital", cat:"vet", lat:40.188027, lng:-105.076468, dir:"815 East 17th Avenue, Longmont", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Longmont Small Animal Hospital", cat:"vet", lat:40.158148, lng:-105.10197, dir:"104 South Main Street, Longmont", tel:"+1-303-651-3039", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Longs Peak Animal Hospital", cat:"vet", lat:40.203849, lng:-105.125417, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Dental Clinic", cat:"vet", lat:40.197263, lng:-105.10098, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Animal Hospital", cat:"vet", lat:40.180976, lng:-105.101897, dir:"1250 Main Street, Longmont", tel:"+1-303-776-3454", horas:[8.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Valley Veterinary Hospital", cat:"vet", lat:40.151855, lng:-105.111046, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lordsburg": {nombre:"Lordsburg", centro:[32.350414, -108.708434], tz:"America/Denver", lugares:[
  {n:"Pet Exercise Area", cat:"parque", lat:32.352855, lng:-108.743103, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lordsburg Animal Shelter", cat:"refugio", lat:32.330632, lng:-108.72328, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "los-alamos-new-mexico": {nombre:"Los Alamos", centro:[35.88137, -106.298959], tz:"America/Denver", lugares:[
  {n:"East Park Dog Park", cat:"parque", lat:35.882903, lng:-106.284221, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Manhattan Project National Historic Park Voice Control Area", cat:"parque", lat:35.883738, lng:-106.301427, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Mesa Dog Park", cat:"parque", lat:35.892419, lng:-106.28154, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Urban Park Voice Control Area", cat:"parque", lat:35.894534, lng:-106.322876, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Los Alamos County Animal Shelter", cat:"refugio", lat:35.882144, lng:-106.285411, dir:"226 East Road, Los Alamos", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Los Alamos Dog Obedience Club", cat:"tienda", lat:35.882106, lng:-106.285613, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ridgeview Veterinary", cat:"vet", lat:35.882095, lng:-106.286053, dir:"194 East Road, Los Alamos", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "los-lunas": {nombre:"Los Lunas", centro:[34.814209, -106.761307], tz:"America/Denver", lugares:[
  {n:"Serenity Pet Spa", cat:"peluqueria", lat:34.804295, lng:-106.734578, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Valencia County Animal Control", cat:"refugio", lat:34.794718, lng:-106.740307, dir:"1209 Highway 314, Los Lunas", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Sun Ranch Pet Hospital", cat:"vet", lat:34.811611, lng:-106.764863, dir:"2220 Sun Ranch Loop, Los Lunas", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "los-ranchos-de-albuquerque": {nombre:"Los Ranchos de Albuquerque", centro:[35.161988, -106.642804], tz:"America/Denver", lugares:[
  {n:"North Domingo Baca Dog Park", cat:"parque", lat:35.179606, lng:-106.564638, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Domingo Baca Small Dog Park", cat:"parque", lat:35.17961, lng:-106.565313, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Afrin' Annie's Pet Salon", cat:"peluqueria", lat:35.160934, lng:-106.559442, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bella Pet Wash And Boutique", cat:"peluqueria", lat:35.172341, lng:-106.576657, dir:"7900 San Pedro Drive Northeast, Los Ranchos de Albuquerque", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bewitched Dog Spa", cat:"peluqueria", lat:35.167635, lng:-106.568292, dir:"7634B Louisiana Boulevard Northeast, Los Ranchos de Albuquerque", tel:"+1-505-200-0624", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Dreyfus Jack Grooming Salon", cat:"peluqueria", lat:35.147213, lng:-106.525409, dir:"5809 Juan Tabo Boulevard Northeast, Los Ranchos de Albuquerque", horas:[8.5, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Poochini Pet Grooming", cat:"peluqueria", lat:35.117637, lng:-106.550464, horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Pretty Pets Grooming", cat:"peluqueria", lat:35.146944, lng:-106.526312, dir:"5850 Eubank Boulevard Northeast, Los Ranchos de Albuquerque", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Academy Kennels", cat:"refugio", lat:35.145221, lng:-106.588825, dir:"6000 Brentwood Place Northeast, Los Ranchos de Albuquerque", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northeast Animal Care and Resource Center", cat:"refugio", lat:35.131272, lng:-106.529556, dir:"9901 Montgomery Boulevard Northeast, Los Ranchos de Albuquerque", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Sense", cat:"tienda", lat:35.129809, lng:-106.567545, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.134945, lng:-106.610405, dir:"1424 Mercantile Avenue Northeast, Los Ranchos de Albuquerque", tel:"+1-505-341-2431", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.146933, lng:-106.686278, dir:"5600 Coors Boulevard Northwest, Los Ranchos de Albuquerque", tel:"+1-505-348-3997", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.146414, lng:-106.548694, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:35.2052, lng:-106.64747, dir:"10701 Corrales Road Northwest, Los Ranchos de Albuquerque", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:35.130366, lng:-106.564125, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eye Care for Animals", cat:"vet", lat:35.184491, lng:-106.605648, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"La Cuevo Animal Hospital", cat:"vet", lat:35.173136, lng:-106.559356, dir:"8000 Paseo del Norte Boulevard Northeast, Los Ranchos de Albuquerque", tel:"+1-505-856-2051", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Malaherd Veterinary Hospital", cat:"vet", lat:35.147518, lng:-106.688105, dir:"5600 Coors Boulevard Northwest, Los Ranchos de Albuquerque", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "louisville-colorado": {nombre:"Louisville", centro:[39.977763, -105.13193], tz:"America/Denver", lugares:[
  {n:"Louisville Dog Park", cat:"parque", lat:39.970933, lng:-105.13028, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Divine Canine", cat:"refugio", lat:39.991154, lng:-105.128528, tel:"+1-303-464-1380", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Little Groomer Pet Salon", cat:"tienda", lat:39.976776, lng:-105.128809, dir:"1130 Pine Street, Louisville", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"The Happy Beast", cat:"tienda", lat:39.988085, lng:-105.115216, dir:"1230 Etna Drive, Louisville", tel:"+1-303-604-1300", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"BluePearl Pet Hospital", cat:"vet", lat:39.987392, lng:-105.11676, dir:"2000 West South Boulder Road;W South Boulder Rd, Louisville", tel:"+1-720-669-7766", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Happy Paws Veterinary Hospital", cat:"vet", lat:39.987422, lng:-105.117784, dir:"1285 Cimarron Drive, Louisville", tel:"+1-720-520-2412", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Jasper Animal Hospital", cat:"vet", lat:40.013317, lng:-105.128855, dir:"2675 Northpark Drive, Louisville", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"My Nature Lab", cat:"zoo", lat:39.976701, lng:-105.129607, horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "loveland": {nombre:"Loveland", centro:[40.397761, -105.07498], tz:"America/Denver", lugares:[
  {n:"Classy Pup Grooming Salon", cat:"peluqueria", lat:40.40685, lng:-105.099586, tel:"+1-970-667-2766", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cosmic Wash Dogwash", cat:"peluqueria", lat:40.395382, lng:-105.077235, dir:"116 West 4th Street, Loveland", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Baths and Beyond", cat:"peluqueria", lat:40.407855, lng:-105.09594, dir:"1221 West Eisenhower Boulevard, Loveland", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogs' Own Grooming / Daycare / School", cat:"peluqueria", lat:40.420919, lng:-105.074175, dir:"224 East 29th Street, Loveland", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K-9 Island", cat:"refugio", lat:40.377761, lng:-105.079288, tel:"+1-970-663-0977", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Avalon Aviary", cat:"tienda", lat:40.42755, lng:-105.077169, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog & Cat Supply", cat:"tienda", lat:40.424894, lng:-105.07415, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hanks Pet Food Supply", cat:"tienda", lat:40.408688, lng:-105.108685, dir:"2287 West Eisenhower Boulevard, Loveland", tel:"+1-970-685-8621", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.424887, lng:-105.074515, dir:"261 East 29th Street, Loveland", tel:"+1-970-541-6097", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.409654, lng:-105.004851, dir:"1715 Rocky Mountain Avenue, Loveland", tel:"+1-970-278-9178", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Poudre Pet & Feed Supply", cat:"tienda", lat:40.417111, lng:-105.072583, dir:"2400 North Lincoln Avenue, Loveland", tel:"+1-970-800-3967", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Eye Center", cat:"vet", lat:40.461777, lng:-105.078508, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Haven Veterinary Clinic", cat:"vet", lat:40.479629, lng:-105.076271, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aspen Wing Bird & Animal Hospital", cat:"vet", lat:40.40701, lng:-105.131882, dir:"3900 West Eisenhower Boulevard, Loveland", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Thompson Animal Hospital", cat:"vet", lat:40.400247, lng:-105.097786, dir:"714 North Taft Avenue, Loveland", tel:"+1-970-667-9230", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Blue Sky Animal Clinic", cat:"vet", lat:40.407744, lng:-105.114843, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Family Member Animal Hospital", cat:"vet", lat:40.409786, lng:-105.158719, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Orchard Animal Clinic", cat:"vet", lat:40.426763, lng:-105.07794, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Cat Doctor", cat:"vet", lat:40.405689, lng:-104.985329, dir:"4855 Thompson Parkway, Loveland", tel:"+1-970-278-0000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:40.461687, lng:-105.078266, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Worthington Animal Clinic", cat:"vet", lat:40.436103, lng:-105.076631, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lusk": {nombre:"Lusk", centro:[42.762467, -104.452175], tz:"America/Denver", lugares:[
  {n:"Lusk Animal Shelter", cat:"refugio", lat:42.761161, lng:-104.443846, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "lyman-utah": {nombre:"Lyman", centro:[38.396924, -111.589627], tz:"America/Denver", lugares:[
  {n:"Fremont River Veterinary Clinic", cat:"vet", lat:38.397414, lng:-111.593857, tel:"+1-435-836-2211", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "lyons": {nombre:"Lyons", centro:[40.224432, -105.270532], tz:"America/Denver", lugares:[
  {n:"Lyons Dog Park", cat:"parque", lat:40.214207, lng:-105.268061, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lyons Veterinary Clinic", cat:"vet", lat:40.225547, lng:-105.270467, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "manitou-springs": {nombre:"Manitou Springs", centro:[38.858578, -104.917873], tz:"America/Denver", lugares:[
  {n:"Dargen of the Dogs", cat:"parque", lat:38.874161, lng:-104.869956, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Off Leash Dog Area", cat:"parque", lat:38.852006, lng:-104.881703, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Centennial Animal Hospital", cat:"vet", lat:38.930062, lng:-104.8655, dir:"6870 Centennial Boulevard, Manitou Springs", tel:"+1-719-344-2088", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marana": {nombre:"Marana", centro:[32.448374, -111.211475], tz:"America/Phoenix", lugares:[
  {n:"Marana Veterinary Center", cat:"vet", lat:32.458142, lng:-111.269558, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "maricopa": {nombre:"Maricopa", centro:[33.058129, -112.047755], tz:"America/Phoenix", lugares:[
  {n:"Copper Sky Dog Park", cat:"parque", lat:33.037433, lng:-112.046484, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.06562, lng:-112.045596, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "maricopa-village-pee-posh": {nombre:"Maricopa Village / Pee-posh", centro:[33.371433, -112.237652], tz:"America/Phoenix", lugares:[
  {n:"Cesar Chavez Dog Park", cat:"parque", lat:33.373579, lng:-112.142436, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"GGs Pet Salon", cat:"peluqueria", lat:33.390833, lng:-112.16902, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.378427, lng:-112.173929, dir:"5260 West Baseline Road, Maricopa Village / Pee-posh", tel:"+1-602-237-0610", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital of Laveen", cat:"vet", lat:33.390728, lng:-112.169218, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Laveen Veterinary Center", cat:"vet", lat:33.376614, lng:-112.15166, dir:"7700 South 43rd Avenue, Maricopa Village / Pee-posh", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "marriott-slaterville": {nombre:"Marriott-Slaterville", centro:[41.267926, -112.018179], tz:"America/Denver", lugares:[
  {n:"Borrett Animal Hospital", cat:"vet", lat:41.243089, lng:-112.006088, dir:"1095 West 12th Street, Marriott-Slaterville", tel:"+1-801-436-3868", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mccall": {nombre:"McCall", centro:[44.911046, -116.098281], tz:"America/Denver", lugares:[
  {n:"MCPAWS Regional Animal Shelter", cat:"refugio", lat:44.88494, lng:-116.089439, dir:"831 South 3rd Street, McCall", tel:"+1-208-634-3647", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Donnelly Veterinary Hospital", cat:"vet", lat:44.74943, lng:-116.079947, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mccammon": {nombre:"McCammon", centro:[42.650472, -112.193022], tz:"America/Denver", lugares:[
  {n:"Mystery Lake Kennels", cat:"refugio", lat:42.64368, lng:-112.205238, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "meadview": {nombre:"Meadview", centro:[36.002209, -114.068294], tz:"America/Phoenix", lugares:[
  {n:"Doggy Stylez", cat:"peluqueria", lat:36.001692, lng:-114.064761, dir:"210 East Meadview Boulevard", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "meeker": {nombre:"Meeker", centro:[40.037473, -107.913129], tz:"America/Denver", lugares:[
  {n:"Meeker Vet Clinic", cat:"vet", lat:40.036503, lng:-107.901929, dir:"338 East Market Street, Meeker", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "meridian": {nombre:"Meridian", centro:[43.608629, -116.392326], tz:"America/Denver", lugares:[
  {n:"Discovery Dog Park", cat:"parque", lat:43.545579, lng:-116.366496, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Idaho Pups and Ales", cat:"parque", lat:43.604319, lng:-116.430528, dir:"70 South Outpost Lane, Meridian", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Storey Bark Park", cat:"parque", lat:43.601183, lng:-116.387739, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fetching Furs Pretty Purs", cat:"peluqueria", lat:43.590718, lng:-116.369201, dir:"2020 East Overland Road, Meridian", tel:"+1-208-895-1143", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Loved Up Pup", cat:"peluqueria", lat:43.591545, lng:-116.314939, dir:"1513 South Five Mile Road, Meridian", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Shadow's Paw Wash", cat:"peluqueria", lat:43.600592, lng:-116.392779, dir:"450 South Meridian Road", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Splash and Dash", cat:"peluqueria", lat:43.661485, lng:-116.414465, dir:"6233 North Linder Road, Meridian", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Wags To Riches", cat:"peluqueria", lat:43.635045, lng:-116.403409, dir:"790 West Ustick Road, Meridian", tel:"+1-208-994-9619", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Birdhouse & Habitat", cat:"tienda", lat:43.61975, lng:-116.338779, dir:"12598 West Fairview Avenue, Meridian", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northwest Pets", cat:"tienda", lat:43.632714, lng:-116.351856, dir:"3036 North Eagle Road, Meridian", tel:"+1-208-392-1049", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Northwest Pets", cat:"tienda", lat:43.591644, lng:-116.311807, dir:"10436 West Overland Road, Meridian", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:43.624894, lng:-116.351778, dir:"2210 North Eagle Road, Meridian", tel:"+1-208-846-7883", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:43.616233, lng:-116.352548, dir:"1220 North Eagle Road, Meridian", tel:"+1-208-884-0611", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Positive Pets Dog Training", cat:"tienda", lat:43.591975, lng:-116.3661, dir:"2374 East Cinema Drive, Meridian", tel:"+1-208-925-1434", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:43.632489, lng:-116.352177, dir:"3036 North Eagle Road, Meridian", tel:"+1-208-375-8051", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:43.591719, lng:-116.312797, dir:"10480 West Overland Road, Meridian", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ada Veterinary Hospital", cat:"vet", lat:43.560452, lng:-116.346089, dir:"3889 East Amity Road, Meridian", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Valley Animal Care Center", cat:"vet", lat:43.592942, lng:-116.364872, dir:"2326 East Cinema Drive, Meridian", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center", cat:"vet", lat:43.592165, lng:-116.314749, dir:"1365 South Five Mile Road, Meridian", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Treasure Valley Veterinary Hospital", cat:"vet", lat:43.580897, lng:-116.393353, dir:"2600 South Meridian Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"WestVet", cat:"vet", lat:43.603071, lng:-116.431842, dir:"212 South Innovation Lane, Meridian", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"WestVet Urgent Care", cat:"vet", lat:43.577334, lng:-116.393258, dir:"3030 South Meridian Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mesa": {nombre:"Mesa", centro:[33.415101, -111.831455], tz:"America/Phoenix", lugares:[
  {n:"A Day In Paradise Dog Grooming", cat:"peluqueria", lat:33.415429, lng:-111.842052, dir:"444 West Main Street, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clipper", cat:"peluqueria", lat:33.43602, lng:-111.717305, dir:"5251 East Brown Road, Mesa", tel:"+1-480-830-2040", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Aunt Donna's Grooming", cat:"peluqueria", lat:33.378197, lng:-111.848342, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Elegant Pet Grooming", cat:"peluqueria", lat:33.422131, lng:-111.789322, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Green Bulldog Dog Wash", cat:"peluqueria", lat:33.378263, lng:-111.872007, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gucci Pooch", cat:"peluqueria", lat:33.450857, lng:-111.700876, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gucci Pooch Salon", cat:"peluqueria", lat:33.436706, lng:-111.706554, dir:"23 East Brown Road, Mesa", tel:"+1-480-335-4736", horas:[9.0, 14.0], nota:"Dato de OpenStreetMap"},
  {n:"Looking Sharp Dog Grooming", cat:"peluqueria", lat:33.407122, lng:-111.872512, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Trim Time Pet Grooming", cat:"peluqueria", lat:33.423699, lng:-111.733778, dir:"4446 East University Drive, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Pets Palace & Playground", cat:"refugio", lat:33.453153, lng:-111.789587, dir:"1918 East McKellips Road, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Maricopa County Animal Care & Control", cat:"refugio", lat:33.379923, lng:-111.82997, dir:"1920 South Lewis, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aquarium Arts", cat:"tienda", lat:33.379168, lng:-111.873451, dir:"1810 West Baseline Road, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arizona Reptile Center", cat:"tienda", lat:33.406204, lng:-111.875085, dir:"2025 West Broadway Road, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Avenue Pet Supply", cat:"tienda", lat:33.451159, lng:-111.764028, dir:"3109 East McKellips Road, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barking Dogs Mesa", cat:"tienda", lat:33.437869, lng:-111.788353, dir:"1224 North Gilbert Road, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Crosby Farm & Ranch Supply", cat:"tienda", lat:33.444947, lng:-111.840173, dir:"1626 North Country Club Drive, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mesa Feed Barn", cat:"tienda", lat:33.408132, lng:-111.825137, dir:"240 East Broadway Road, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.422263, lng:-111.786899, dir:"2027 East University Drive, Mesa", tel:"+1-480-827-1187", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.432867, lng:-111.86905, dir:"845 North Dobson Road, Mesa", tel:"+1-480-833-5892", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pratt’s Pets", cat:"tienda", lat:33.398802, lng:-111.857549, dir:"856 South Alma School Road, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Predators Reptile Center", cat:"tienda", lat:33.379616, lng:-111.874412, dir:"1824 West Baseline Road, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Premier Feed & Pet", cat:"tienda", lat:33.413369, lng:-111.839515, dir:"55 South Country Club Drive, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pitbull Store", cat:"tienda", lat:33.394363, lng:-111.821568, dir:"420 East Southern Avenue, Mesa", tel:"+1-480-590-5872", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Wildside Pets", cat:"tienda", lat:33.43457, lng:-111.719911, dir:"1042 North Higley Road, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alma School Animal Hospital", cat:"vet", lat:33.363234, lng:-111.861366, dir:"1305 West Guadalupe Road, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.449737, lng:-111.804237, dir:"1863 North Stapley Drive, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Avenue Animal Hospital", cat:"vet", lat:33.451351, lng:-111.763834, dir:"3109 East McKellips Road, Mesa", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Animal Hospital", cat:"vet", lat:33.378108, lng:-111.848542, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brown Road Animal Clinic", cat:"vet", lat:33.436988, lng:-111.721339, dir:"1140 North Higley Road, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Curem Veterinary Care", cat:"vet", lat:33.451377, lng:-111.709492, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East Mesa Animal Hospital", cat:"vet", lat:33.407113, lng:-111.788877, dir:"430 South Gilbert Road, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eastside Animal Hospital", cat:"vet", lat:33.423233, lng:-111.805692, dir:"430 North Stapley Drive, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Family VetCare of Mesa", cat:"vet", lat:33.393291, lng:-111.790512, dir:"1901 East Southern Avenue, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Homestead Animal Clinic", cat:"vet", lat:33.437542, lng:-111.787086, dir:"2020 East Brown Road, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Noe's Ark Animal Hospital", cat:"vet", lat:33.429246, lng:-111.770557, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Red Mountain Animal Hospital", cat:"vet", lat:33.451092, lng:-111.700558, dir:"6025 East McKellips Road, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spay Neuter Clinic", cat:"vet", lat:33.398229, lng:-111.787269, dir:"925 South Gilbert Road, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:33.44537, lng:-111.840567, dir:"1648 North Country Club Drive, Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:33.43131, lng:-111.84027, dir:"858 North Country Club Drive, Mesa", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mesilla": {nombre:"Mesilla", centro:[32.274117, -106.795206], tz:"America/Denver", lugares:[
  {n:"Pet's Barn", cat:"tienda", lat:32.290472, lng:-106.784518, dir:"1600 South Valley Drive, Mesilla", tel:"+1-575-541-8300", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mesquite": {nombre:"Mesquite", centro:[36.803564, -114.067141], tz:"America/Los_Angeles", lugares:[
  {n:"La de' Paws Grooming Salon", cat:"peluqueria", lat:36.80332, lng:-114.068429, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City of Mesquite Animal Shelter", cat:"refugio", lat:36.8207, lng:-114.09116, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "middleton": {nombre:"Middleton", centro:[43.706828, -116.620135], tz:"America/Denver", lugares:[
  {n:"Paw Spa Grooming Salon", cat:"peluqueria", lat:43.706682, lng:-116.620158, dir:"209 East Main Street, Middleton", tel:"+1-208-591-1028", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Top Dog Grooming", cat:"peluqueria", lat:43.706662, lng:-116.626632, dir:"4 North Viking Avenue, Middleton", tel:"+1-208-350-6265", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Autumn Hills Equestrian Center", cat:"refugio", lat:43.706238, lng:-116.589386, dir:"22994 Duff Lane, Middleton", tel:"+1-208-720-0263", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Intermountain Pet Hospital", cat:"vet", lat:43.70301, lng:-116.611775, dir:"800 East Main Street, Middleton", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Onpoint Veterinary Hospital", cat:"vet", lat:43.70299, lng:-116.617413, dir:"315 South Middleton Road", horas:[8.0, 13.0], nota:"Dato de OpenStreetMap"}
 ]},
 "midvale-utah": {nombre:"Midvale", centro:[40.614917, -111.910661], tz:"America/Denver", lugares:[
  {n:"Alexanders Pet Grooming", cat:"peluqueria", lat:40.6212, lng:-111.892353, dir:"42 West 7200 South, Midvale", tel:"+1-801-810-4744", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Kate's Cat House/Utah Cat Boarding", cat:"peluqueria", lat:40.624363, lng:-111.879959, dir:"376 East 6990 South, Midvale", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scenthound", cat:"peluqueria", lat:40.611614, lng:-111.871689, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rebel Paw", cat:"tienda", lat:40.61148, lng:-111.910077, dir:"7681 South Main Street, Midvale", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Fish Tank", cat:"tienda", lat:40.599967, lng:-111.909811, dir:"8371 South 700 West, Midvale", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BluePearl", cat:"vet", lat:40.62112, lng:-111.900315, dir:"308 West 7200 South, Midvale", horas:[8.0, 24.0], nota:"Dato de OpenStreetMap"},
  {n:"Little Buckaroo Petting Zoo", cat:"zoo", lat:40.609875, lng:-111.924578, tel:"+1-801-499-7642", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "miles-city": {nombre:"Miles City", centro:[46.407022, -105.847843], tz:"America/Denver", lugares:[
  {n:"Sage's Dog Wash", cat:"peluqueria", lat:46.397544, lng:-105.822919, dir:"1115 South Haynes Avenue, Miles City", tel:"+1-406-234-2424", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Wash n Wag Pet Grooming", cat:"peluqueria", lat:46.402354, lng:-105.852647, dir:"306 Park Street, Miles City", tel:"+1-406-234-9247", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"}
 ]},
 "millcreek": {nombre:"Millcreek", centro:[40.699292, -111.855583], tz:"America/Denver", lugares:[
  {n:"Central Off-Leash Dog Area", cat:"parque", lat:40.710935, lng:-111.808334, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"East Off-Leash Dog Area", cat:"parque", lat:40.710319, lng:-111.803491, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fairmont Dog Park", cat:"parque", lat:40.720176, lng:-111.861251, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Off-Leash Dog Area", cat:"parque", lat:40.712148, lng:-111.812391, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arnie's Dog Spa", cat:"peluqueria", lat:40.688577, lng:-111.872094, tel:"+1-385-308-8527", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggie Dearest Pet Spa", cat:"peluqueria", lat:40.71044, lng:-111.854205, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Natty Dogs", cat:"peluqueria", lat:40.699078, lng:-111.86506, dir:"3335 South 900 East, Millcreek", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw Paws", cat:"peluqueria", lat:40.741173, lng:-111.831078, dir:"1328 South 2100 East, Millcreek", horas:[10.0, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Pet Adoption Center", cat:"refugio", lat:40.726569, lng:-111.859047, dir:"2005 South 1100 East, Millcreek", tel:"+1-801-574-2454", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Fish 4 U", cat:"tienda", lat:40.684751, lng:-111.844653, horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Ma & Paws Bakery", cat:"tienda", lat:40.700351, lng:-111.856067, dir:"1127 East 3300 South, Millcreek", tel:"+1-801-487-3838", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.724041, lng:-111.857578, dir:"1165 East Wilmington Avenue, Millcreek", tel:"+1-801-474-2610", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"The Dog's Meow", cat:"tienda", lat:40.700301, lng:-111.832526, dir:"2047 East 3300 South, Millcreek", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Advanced Veterinary Care", cat:"vet", lat:40.700429, lng:-111.862052, dir:"1021 East 3300 South, Millcreek", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Brickyard Animal Hospital", cat:"vet", lat:40.700172, lng:-111.857099, dir:"1213 East 3300 South, Millcreek", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dermatology for Animals", cat:"vet", lat:40.70042, lng:-111.862168, dir:"1021 East 3300 South, Millcreek", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"East Valley Veterenary Clinic", cat:"vet", lat:40.71975, lng:-111.81516, dir:"2675 East Parleys Way, Millcreek", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Millcreek Veterinary Clinic", cat:"vet", lat:40.700084, lng:-111.823003, dir:"2361 East 3300 South, Millcreek", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Red Butte Veterinary Care", cat:"vet", lat:40.740905, lng:-111.831049, tel:"+1-801-583-1340", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sugar House Veterinary Hospital", cat:"vet", lat:40.723023, lng:-111.861681, dir:"2206 South McClelland Street, Millcreek", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "milliken": {nombre:"Milliken", centro:[40.329427, -104.85525], tz:"America/Denver", lugares:[
  {n:"Milliken Animal Clinic", cat:"vet", lat:40.329924, lng:-104.856192, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "minden-nevada": {nombre:"Minden", centro:[38.953301, -119.763662], tz:"America/Los_Angeles", lugares:[
  {n:"Stylin K9", cat:"peluqueria", lat:38.947137, lng:-119.757721, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "missoula": {nombre:"Missoula", centro:[46.870105, -113.995267], tz:"America/Denver", lugares:[
  {n:"Corso Pet Play Area", cat:"parque", lat:46.869818, lng:-114.020172, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jacob's Island Offleash Dog Park", cat:"parque", lat:46.865158, lng:-113.979554, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Playfair Park Pup Pen", cat:"parque", lat:46.844101, lng:-114.010884, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rail Link Dog Park B.C.", cat:"parque", lat:46.849592, lng:-114.027671, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sgt. Bozo Dog Park", cat:"parque", lat:46.844232, lng:-114.056492, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yay Puppy Grooming", cat:"peluqueria", lat:46.839481, lng:-114.001768, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic", cat:"refugio", lat:46.835802, lng:-114.012727, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"SIT Happens Dog Training Center", cat:"refugio", lat:46.853557, lng:-114.012023, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Go Fetch!", cat:"tienda", lat:46.894616, lng:-114.041129, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:46.835837, lng:-114.037899, dir:"3662 Brooks Avenue, Missoula", tel:"+1-406-251-1362", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:46.891066, lng:-114.036767, dir:"2850 North Reserve Street, Missoula", tel:"+1-406-549-9188", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Alpine Veterinary Care", cat:"vet", lat:46.865622, lng:-114.00393, dir:"601 South Orange Street, Missoula", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Sky Veterinary Clinic", cat:"vet", lat:46.846712, lng:-114.038357, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Blue Mountain Veterinary", cat:"vet", lat:46.828287, lng:-114.076131, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cats on Broadway Veterinary Hospital", cat:"vet", lat:46.878416, lng:-114.018178, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grant Creek Veterinary Services", cat:"vet", lat:46.900973, lng:-114.036413, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Missoula Vet Center", cat:"vet", lat:46.855515, lng:-114.007474, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Missoula Vet Clinic", cat:"vet", lat:46.836363, lng:-114.043289, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pruyn Veterinary Hospital", cat:"vet", lat:46.847711, lng:-114.018856, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southgate Animal Hospital", cat:"vet", lat:46.848205, lng:-114.019438, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Missoula Butterfly House and Insectarium", cat:"zoo", lat:46.84851, lng:-114.014296, dir:"1075 South Avenue West, Missoula", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "moab": {nombre:"Moab", centro:[38.57381, -109.546214], tz:"America/Denver", lugares:[
  {n:"Bark Park", cat:"parque", lat:38.568269, lng:-109.548151, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "montpelier": {nombre:"Montpelier", centro:[42.32215, -111.297704], tz:"America/Denver", lugares:[
  {n:"Crazy Acres Grooming", cat:"peluqueria", lat:42.31423, lng:-111.306603, dir:"262 South 8th Street, Montpelier", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bear Lake Animal Hospital", cat:"vet", lat:42.325217, lng:-111.297279, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "montrose-colorado": {nombre:"Montrose", centro:[38.478193, -107.876277], tz:"America/Denver", lugares:[
  {n:"The Paw Spa and Pet Hotel", cat:"peluqueria", lat:38.467804, lng:-107.863301, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Iron Will Dog Lodge", cat:"refugio", lat:38.420967, lng:-107.873003, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.446671, lng:-107.869411, dir:"3421 South Rio Grande Avenue, Montrose", tel:"+1-970-249-0556", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Black Canyon Veterinary Clinic", cat:"vet", lat:38.486961, lng:-107.866292, tel:"+1-970-787-2282", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Montrose Veterinary Clinic", cat:"vet", lat:38.461652, lng:-107.866874, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "monument": {nombre:"Monument", centro:[39.091659, -104.872758], tz:"America/Denver", lugares:[
  {n:"Palmer Lake Veterinary Hospital", cat:"vet", lat:39.097529, lng:-104.865198, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Front Range Animal Hospital", cat:"vet", lat:39.096091, lng:-104.866766, dir:"487 Highway 105, Monument", tel:"+1-719-481-3455", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "morrison": {nombre:"Morrison", centro:[39.653599, -105.191099], tz:"America/Denver", lugares:[
  {n:"Forsberg Dog Park", cat:"parque", lat:39.679182, lng:-105.166767, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Purrfect Paws", cat:"peluqueria", lat:39.635364, lng:-105.158009, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dakota Ridge Animal Hospital", cat:"vet", lat:39.610267, lng:-105.136042, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "moscow": {nombre:"Moscow", centro:[46.732388, -117.000165], tz:"America/Los_Angeles", lugares:[
  {n:"Petco", cat:"tienda", lat:46.733288, lng:-117.03239, dir:"2242 West Pullman Road, Moscow", tel:"+1-208-997-5057", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Pets Are People Too", cat:"tienda", lat:46.724356, lng:-116.995666, dir:"428 Troy Road, Moscow", tel:"+1-208-883-0690", horas:[9.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic & Hospital", cat:"vet", lat:46.723487, lng:-116.99292, dir:"1222 South Logan Street, Moscow", tel:"+1-208-882-4712", horas:[8.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Palouse Animal Welness & Surgery", cat:"vet", lat:46.738771, lng:-117.001074, dir:"504 North Main Street, Moscow", tel:"+1-208-883-9663", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mount-pleasant-utah": {nombre:"Mount Pleasant", centro:[39.546907, -111.455465], tz:"America/Denver", lugares:[
  {n:"Sanpete Veterinary Clinic", cat:"vet", lat:39.529357, lng:-111.469194, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mountain-home-idaho": {nombre:"Mountain Home", centro:[43.131894, -115.693983], tz:"America/Denver", lugares:[
  {n:"Mountain Home Animal Shelter", cat:"refugio", lat:43.129902, lng:-115.717878, dir:"295 Northwest Elmcrest Street, Mountain Home", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "mountain-view-colorado": {nombre:"Mountain View", centro:[39.774753, -105.056685], tz:"America/Denver", lugares:[
  {n:"The Sniff Shack", cat:"refugio", lat:39.776371, lng:-105.054728, dir:"5300 West 44th Avenue, Mountain View", horas:[6.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Simpawtico", cat:"tienda", lat:39.769097, lng:-105.045398, dir:"4500 West 38th Avenue, Mountain View", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Corrie's Pet Grooming", cat:"vet", lat:39.773636, lng:-105.043885, dir:"4162 Tennyson Street, Mountain View", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Highlands Animal Clinic", cat:"vet", lat:39.762332, lng:-105.03647, dir:"3727 West 32nd Avenue, Mountain View", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Urban Vet Care", cat:"vet", lat:39.75747, lng:-105.020915, dir:"2815 Clay Street, Mountain View", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "mountainair": {nombre:"Mountainair", centro:[34.520353, -106.240766], tz:"America/Denver", lugares:[
  {n:"Mountainair Animal Control Shelter", cat:"refugio", lat:34.518353, lng:-106.231294, dir:"609 East 3rd Street, Mountainair", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "murray-utah": {nombre:"Murray", centro:[40.666784, -111.888417], tz:"America/Denver", lugares:[
  {n:"Glamour Pawz", cat:"peluqueria", lat:40.665223, lng:-111.887776, dir:"4901 South State Street, Murray", tel:"+1-801-864-0049", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Piper & Chic Pet Grooming Salon", cat:"peluqueria", lat:40.6425, lng:-111.865299, tel:"+1-801-707-5415", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sydnee's Pet Grooming", cat:"peluqueria", lat:40.639317, lng:-111.889912, dir:"6052 South State Street, Murray", tel:"+1-385-388-4810", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Doggy's Big Day", cat:"refugio", lat:40.650704, lng:-111.891883, dir:"12 West Rose Circle, Murray", tel:"+1-385-202-3648", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Utah", cat:"refugio", lat:40.679468, lng:-111.900734, dir:"4242 South Commerce Drive, Murray", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Murray Animal Shelter", cat:"refugio", lat:40.648406, lng:-111.898609, dir:"5624 South 300 West, Murray", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Salt Lake County Animal Services", cat:"refugio", lat:40.686384, lng:-111.906139, dir:"511 West 3900 South, Murray", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Unleashed Dog Hotel", cat:"refugio", lat:40.6577, lng:-111.897997, dir:"5241 South Commerce Drive, Murray", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Operation Pawpulation", cat:"tienda", lat:40.675919, lng:-111.866039, dir:"4392 South 900 East, Murray", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Watetfront", cat:"tienda", lat:40.667848, lng:-111.902944, dir:"4782 South Plum Street, Murray", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Traci's Parrots 4U", cat:"tienda", lat:40.652611, lng:-111.909822, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nampa": {nombre:"Nampa", centro:[43.578038, -116.561689], tz:"America/Denver", lugares:[
  {n:"Nampa Dog Park", cat:"parque", lat:43.562507, lng:-116.536064, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Classic Cuts Pet Grooming", cat:"peluqueria", lat:43.550842, lng:-116.571022, dir:"178 East Maine Avenue, Nampa", tel:"+1-208-505-7442", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Drea's Pro Grooming", cat:"peluqueria", lat:43.55402, lng:-116.573666, dir:"1509 12th Avenue Road, Nampa", tel:"+1-208-461-0627", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lucky Dog Salon", cat:"peluqueria", lat:43.571374, lng:-116.568962, dir:"1016 12th Avenue South, Nampa", tel:"+1-208-466-3374", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:43.611341, lng:-116.58877, dir:"16434 No Market Place Boulevard, Nampa", tel:"+1-208-467-3249", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:43.615072, lng:-116.5973, dir:"16925 North Market Place Boulevard, Nampa", tel:"+1-208-546-3444", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Zamzows", cat:"tienda", lat:43.604335, lng:-116.599377, dir:"1518 Caldwell Boulevard, Nampa", tel:"+1-208-466-0282", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Idaho Equine Hospital", cat:"vet", lat:43.606229, lng:-116.505143, dir:"16080 Equine Drive, Nampa", tel:"+1-208-466-4613", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Idaho Veterinary Hospital", cat:"vet", lat:43.597436, lng:-116.592818, dir:"1420 North Midland Boulevard, Nampa", tel:"+1-208-466-4614", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Intermountain Pet Hospital", cat:"vet", lat:43.603735, lng:-116.607988, dir:"2121 North Cassia Street, Nampa", tel:"+1-208-795-3471", horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Kindness Small Animal Medical Center", cat:"vet", lat:43.550805, lng:-116.573288, dir:"1803 12th Avenue Road, Nampa", tel:"+1-208-467-1148", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nashua-montana": {nombre:"Nashua", centro:[48.132242, -106.35642], tz:"America/Denver", lugares:[
  {n:"Leo B Coleman Wildlife Pasture", cat:"zoo", lat:48.014257, lng:-106.458215, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nederland": {nombre:"Nederland", centro:[39.961376, -105.510831], tz:"America/Denver", lugares:[
  {n:"Peak to Peak Animal Hospital", cat:"vet", lat:39.962767, lng:-105.508888, dir:"75 East 2nd Street, Nederland", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nellis-air-force-base": {nombre:"Nellis Air Force Base", centro:[36.242412, -115.042969], tz:"America/Los_Angeles", lugares:[
  {n:"PetSmart", cat:"tienda", lat:36.287156, lng:-115.13386, dir:"6980 North 5th Street, Nellis Air Force Base", tel:"+1-702-399-0508", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "new-kingman-butler": {nombre:"New Kingman-Butler", centro:[35.253988, -114.01137], tz:"America/Phoenix", lugares:[
  {n:"Centennial Dog Park", cat:"parque", lat:35.221783, lng:-114.028653, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mohave County Animal Shelter", cat:"refugio", lat:35.22361, lng:-114.029603, dir:"3423 North Burbank Street, New Kingman-Butler", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Stockton Hill Animal Hospital", cat:"vet", lat:35.249467, lng:-114.040003, dir:"4335 Stockton Hill Road, New Kingman-Butler", tel:"+1-928-757-7979", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-plymouth": {nombre:"New Plymouth", centro:[43.970335, -116.819874], tz:"America/Denver", lugares:[
  {n:"The Groom Saloon", cat:"peluqueria", lat:43.925726, lng:-116.75213, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yappy Hour", cat:"peluqueria", lat:43.970664, lng:-116.820053, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veteran K9 Training and Services", cat:"refugio", lat:43.89077, lng:-116.754961, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Creatures Animal Hospital", cat:"vet", lat:43.952378, lng:-116.770675, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-river": {nombre:"New River", centro:[33.915869, -112.13599], tz:"America/Phoenix", lugares:[
  {n:"Foothills Veterinary Services", cat:"vet", lat:33.920515, lng:-112.141267, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "new-washoe-city": {nombre:"New Washoe City", centro:[39.291367, -119.770612], tz:"America/Los_Angeles", lugares:[
  {n:"Washoe Valley Vet", cat:"vet", lat:39.289665, lng:-119.768552, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "newton-utah": {nombre:"Newton", centro:[41.862705, -111.990783], tz:"America/Denver", lugares:[
  {n:"Arete Canine Purpose", cat:"refugio", lat:41.8878, lng:-111.991231, dir:"8585 North 6400 West, Newton", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nibley": {nombre:"Nibley", centro:[41.674559, -111.833119], tz:"America/Denver", lugares:[
  {n:"Pampered Paws Pet Wash", cat:"peluqueria", lat:41.677601, lng:-111.832631, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "niwot": {nombre:"Niwot", centro:[40.103874, -105.170819], tz:"America/Denver", lugares:[
  {n:"Chico's Grooming Spa", cat:"peluqueria", lat:40.100665, lng:-105.168078, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vetwerx", cat:"vet", lat:40.139783, lng:-105.193367, dir:"7171 Pike Road, Niwot", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "nogales": {nombre:"Nogales", centro:[31.340213, -110.936081], tz:"America/Phoenix", lugares:[
  {n:"PetSmart", cat:"tienda", lat:31.367701, lng:-110.933734, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-hobbs": {nombre:"North Hobbs", centro:[32.771931, -103.128836], tz:"America/Denver", lugares:[
  {n:"Del Norte Dog Park", cat:"parque", lat:32.750463, lng:-103.137289, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-las-vegas": {nombre:"North Las Vegas", centro:[36.200519, -115.121475], tz:"America/Los_Angeles", lugares:[
  {n:"Barking Dogs", cat:"peluqueria", lat:36.273663, lng:-115.251992, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clip-N-Tails", cat:"peluqueria", lat:36.275567, lng:-115.180458, dir:"6385 Ste 115 Simmons Street, North Las Vegas", tel:"+1-702-658-1983", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Wizard of Pawz Grooming", cat:"peluqueria", lat:36.25454, lng:-115.24287, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.272356, lng:-115.204955, dir:"6150 North Decatur Boulevard, North Las Vegas", tel:"+1-702-415-2687", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Aliante Animal Hospital", cat:"vet", lat:36.292128, lng:-115.185132, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Las Vegas Farm", cat:"zoo", lat:36.305994, lng:-115.252352, dir:"7222 Grand Teton Drive, North Las Vegas", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "north-logan": {nombre:"North Logan", centro:[41.769375, -111.804665], tz:"America/Denver", lugares:[
  {n:"Mountain View Veterinary Clinic", cat:"vet", lat:41.762406, lng:-111.812442, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-ogden": {nombre:"North Ogden", centro:[41.304882, -111.965026], tz:"America/Denver", lugares:[
  {n:"Coldwater Animal Hospital", cat:"vet", lat:41.307479, lng:-111.969042, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-rock-springs": {nombre:"North Rock Springs", centro:[41.643575, -109.265684], tz:"America/Denver", lugares:[
  {n:"Sweetwater Events Complex Dog Park (Lower)", cat:"parque", lat:41.635803, lng:-109.236959, dir:"3320 Yellowstone Road, North Rock Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sweetwater Events Complex Dog Park (Upper)", cat:"parque", lat:41.638705, lng:-109.248921, dir:"3320 Yellowstone Road, North Rock Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sweetwater Events Complex: Horse Stalls", cat:"refugio", lat:41.639597, lng:-109.239801, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "north-salt-lake": {nombre:"North Salt Lake", centro:[40.848556, -111.906882], tz:"America/Denver", lugares:[
  {n:"Flash Cairo Dog Park", cat:"parque", lat:40.863836, lng:-111.942396, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Backyard", cat:"refugio", lat:40.84168, lng:-111.950205, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Utah Animal Adoption Center", cat:"refugio", lat:40.809604, lng:-111.939566, dir:"1955 North Redwood Road, North Salt Lake", tel:"+1-801-355-7387", horas:[11.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "northglenn": {nombre:"Northglenn", centro:[39.910086, -104.987552], tz:"America/Denver", lugares:[
  {n:"Big Dry Creek Dog Park", cat:"parque", lat:39.927953, lng:-105.007902, dir:"1700 West 128th Avenue, Northglenn", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Groomingdale's", cat:"peluqueria", lat:39.899971, lng:-104.941326, dir:"3901 East 112th Avenue, Northglenn", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spawlash", cat:"peluqueria", lat:39.9019, lng:-104.980103, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City Bark", cat:"refugio", lat:39.929071, lng:-104.984, dir:"111 East 128th Avenue, Northglenn", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Outside Pet Kennel", cat:"refugio", lat:39.952311, lng:-104.985335, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riverdale Animal Shelter", cat:"refugio", lat:39.917715, lng:-104.886811, dir:"12155 Park Boulevard, Northglenn", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Muttz", cat:"tienda", lat:39.900143, lng:-105.023507, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Ranch", cat:"tienda", lat:39.915506, lng:-104.943573, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.912309, lng:-104.981855, dir:"450 East 120th Avenue, Northglenn", tel:"+1-303-255-4528", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.954759, lng:-104.995548, dir:"14265 Orchard Parkway, Northglenn", tel:"+1-303-242-3868", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Remington & Friends Neighborhood Bakery and Pet Spa", cat:"tienda", lat:39.916421, lng:-104.941243, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic-North", cat:"vet", lat:39.913492, lng:-104.976544, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"CityVet", cat:"vet", lat:39.928194, lng:-104.907128, dir:"6920 East 128th Avenue, Northglenn", tel:"+1-720-829-4442", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Community Pet Hospital - Riverdale", cat:"vet", lat:39.929631, lng:-104.921396, dir:"12840 Holly Street, Northglenn", tel:"+1-303-501-1555", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Eastlake Veterinary Clinic", cat:"vet", lat:39.924611, lng:-104.940898, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gillett Veterinary Clinic", cat:"vet", lat:39.914562, lng:-105.020673, dir:"2721 West 120th Avenue, Northglenn", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Orchard Veterinary Medical Center", cat:"vet", lat:39.945568, lng:-104.992392, dir:"13648 Orchard Parkway, Northglenn", tel:"+1-720-974-0040", horas:[7.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "ogden-utah": {nombre:"Ogden", centro:[41.223005, -111.973846], tz:"America/Denver", lugares:[
  {n:"Ogden Dog Park", cat:"parque", lat:41.221728, lng:-111.988972, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.242336, lng:-111.980424, dir:"175 West 12th Street, Ogden", tel:"+1-801-392-0024", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Brookside Animal Hospital", cat:"vet", lat:41.252136, lng:-111.977402, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wildlife Rehabilitation Center of Northern Utah", cat:"vet", lat:41.237702, lng:-111.939342, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oldtown": {nombre:"Oldtown", centro:[48.178794, -117.03798], tz:"America/Los_Angeles", lugares:[
  {n:"Mary's Feed & Farm", cat:"tienda", lat:48.183899, lng:-117.026931, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Doctor PC", cat:"vet", lat:48.182697, lng:-117.039119, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pend Oreille Veterinary Clinic", cat:"vet", lat:48.186384, lng:-117.020737, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "oracle": {nombre:"Oracle", centro:[32.60997, -110.765184], tz:"America/Phoenix", lugares:[
  {n:"Hot Dogs Cool Cats Pet Grooming Service", cat:"tienda", lat:32.610329, lng:-110.766366, dir:"690 East American Avenue, Oracle", tel:"+1-520-896-2405", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "orchard-mesa": {nombre:"Orchard Mesa", centro:[39.043344, -108.552571], tz:"America/Denver", lugares:[
  {n:"Las Colonias Dog Park", cat:"parque", lat:39.055212, lng:-108.551118, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Roice Hurst Humane Society", cat:"refugio", lat:39.057608, lng:-108.533301, dir:"362 28 Road, Orchard Mesa", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Your Best Friends Boarding Kennel", cat:"refugio", lat:39.042742, lng:-108.550624, dir:"2708 Highway 50, Orchard Mesa", tel:"+1-970-244-8865", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Orchard Mesa Veterinary Hospital", cat:"vet", lat:39.045681, lng:-108.55826, dir:"2668 Hwy 50, Orchard Mesa", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "orem": {nombre:"Orem", centro:[40.29816, -111.694431], tz:"America/Denver", lugares:[
  {n:"Orem City Dog Park", cat:"parque", lat:40.325507, lng:-111.645918, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggy Dreams", cat:"peluqueria", lat:40.304235, lng:-111.714606, dir:"785 West 400 North, Orem", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Ark", cat:"tienda", lat:40.296144, lng:-111.696851, dir:"33 West Center Street, Orem", tel:"+1-801-226-2162", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.274563, lng:-111.689291, dir:"305 East University Parkway, Orem", tel:"+1-801-607-9985", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.274692, lng:-111.695767, dir:"20 West University Parkway, Orem", tel:"+1-801-224-0026", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Services", cat:"vet", lat:40.296811, lng:-111.706868, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Best Friends Spay/Neuter Clinic", cat:"vet", lat:40.312697, lng:-111.69873, dir:"845 North 100 West, Orem", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Medical Services", cat:"vet", lat:40.287535, lng:-111.6903, dir:"525 South State Street, Orem", tel:"+1-385-375-2000", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "oro-valley": {nombre:"Oro Valley", centro:[32.400053, -110.955317], tz:"America/Phoenix", lugares:[
  {n:"Foothills Pet Salon", cat:"peluqueria", lat:32.322381, lng:-110.973265, dir:"6336 North Oracle Road, Oro Valley", tel:"+1-520-229-1310", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:32.345683, lng:-110.977782, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.423845, lng:-110.937796, dir:"11985 North Oracle Road, Oro Valley", tel:"+1-520-297-0019", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.335432, lng:-110.975622, dir:"7090 North Oracle Road, Oro Valley", tel:"+1-520-809-6008", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.400221, lng:-110.958603, dir:"10625 North Oracle Road, Oro Valley", tel:"+1-520-797-0008", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.321836, lng:-111.043402, dir:"3850 West River Road, Oro Valley", tel:"+1-520-742-1296", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Rosie's Barket", cat:"tienda", lat:32.35109, lng:-110.973228, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cañada Hills Animal Hospital", cat:"vet", lat:32.398448, lng:-110.995233, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dove Mountain Veterinary", cat:"vet", lat:32.42693, lng:-111.079803, dir:"12110 North Dove Mountain Boulevard, Oro Valley", horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Mt. View Vetrinary Clinic", cat:"vet", lat:32.38247, lng:-111.048261, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oro Valley Pet Clinic", cat:"vet", lat:32.44207, lng:-110.936047, dir:"12995 North Oracle Road, Oro Valley", tel:"+1-520-825-2700", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Saguaro Veterinary Surgery", cat:"vet", lat:32.381317, lng:-111.048663, dir:"3850 West Linda Vista Boulevard, Oro Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Suffolk Hills Pet Clinic", cat:"vet", lat:32.347642, lng:-110.974727, tel:"+1-520-742-1194", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Tucson Veterinary Specialists", cat:"vet", lat:32.336845, lng:-110.999634, dir:"1601 West Ina Road, Oro Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet", cat:"vet", lat:32.397203, lng:-110.957458, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Emergency Group", cat:"vet", lat:32.335343, lng:-110.976709, dir:"7080 North Oracle Road, Oro Valley", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ouray": {nombre:"Ouray", centro:[38.022772, -107.671448], tz:"America/Denver", lugares:[
  {n:"Kamp K9", cat:"parque", lat:38.080584, lng:-107.707931, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "page": {nombre:"Page", centro:[36.914831, -111.457294], tz:"America/Phoenix", lugares:[
  {n:"Page Animal Hospital", cat:"vet", lat:36.918311, lng:-111.457227, dir:"87 S 7th Ave, Page", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "palmyra-utah": {nombre:"Palmyra", centro:[40.140232, -111.698815], tz:"America/Denver", lugares:[
  {n:"South Utah Valley Animal Shelter", cat:"refugio", lat:40.148274, lng:-111.663747, dir:"582 West 3000 North, Palmyra", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "paradise-hills": {nombre:"Paradise Hills", centro:[35.200733, -106.704591], tz:"America/Denver", lugares:[
  {n:"Cottonwood Dog Park", cat:"parque", lat:35.200314, lng:-106.657948, dir:"10000 Coors Boulevard Bypass Northwest, Paradise Hills", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Santa Fe Village Dog Park", cat:"parque", lat:35.149545, lng:-106.715785, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Santa Fe Villiage Dog Park", cat:"parque", lat:35.149545, lng:-106.715851, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Trails Dog Park", cat:"parque", lat:35.180195, lng:-106.736597, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Boofy's", cat:"tienda", lat:35.177608, lng:-106.689053, dir:"8201 Golf Course Road Northwest, Paradise Hills", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.203825, lng:-106.653256, dir:"3601 Old Airport Road Northwest, Paradise Hills", tel:"+1-505-898-2450", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.202827, lng:-106.658748, dir:"10248 Coors Boulevard Bypass Northwest, Paradise Hills", tel:"+1-505-792-1772", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:35.202908, lng:-106.658674, dir:"10248 Coors Boulevard Bypass Northwest, Paradise Hills", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:35.214969, lng:-106.69863, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "paradise-nevada": {nombre:"Paradise", centro:[36.101029, -115.149905], tz:"America/Los_Angeles", lugares:[
  {n:"NYNY Dog Spot", cat:"parque", lat:36.101683, lng:-115.176087, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vdara Dog Park", cat:"parque", lat:36.108741, lng:-115.17849, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cutting Edge Pet Grooming", cat:"peluqueria", lat:36.100933, lng:-115.103233, dir:"3280 East Tropicana Avenue, Paradise", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawsh Palace", cat:"peluqueria", lat:36.109169, lng:-115.183021, dir:"3081 Business Lane, Paradise", tel:"+1-702-931-1778", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.081536, lng:-115.121938, dir:"5915 South Eastern Avenue, Paradise", tel:"+1-702-736-5003", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Scales 'N Tails", cat:"tienda", lat:36.087114, lng:-115.101253, dir:"3380 Russell Road, Paradise", tel:"+1-702-445-6460", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"The Wildlife Habitat", cat:"zoo", lat:36.116612, lng:-115.171146, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "paradise-valley": {nombre:"Paradise Valley", centro:[33.532429, -111.950512], tz:"America/Phoenix", lugares:[
  {n:"Grovers Basin Dog Park", cat:"parque", lat:33.648756, lng:-112.032918, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paradise Valley Park Large Dog Park", cat:"parque", lat:33.650346, lng:-111.999073, horas:[5.5, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"Paradise Valley Park Small Dog Park", cat:"parque", lat:33.649223, lng:-111.999702, horas:[5.5, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"Pinnacle Dog Park", cat:"parque", lat:33.675882, lng:-112.006742, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Thompson Peak Dog Park", cat:"parque", lat:33.669588, lng:-111.906984, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Dog Refined", cat:"peluqueria", lat:33.677166, lng:-112.029113, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BellyRubz Doggy Playclub & Spa", cat:"peluqueria", lat:33.568218, lng:-111.888932, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grooming at Grayhawk", cat:"peluqueria", lat:33.676021, lng:-111.923329, dir:"20801 North Scottsdale Road, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"See Spot Shop", cat:"peluqueria", lat:33.62232, lng:-111.873395, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Soul Doggy", cat:"peluqueria", lat:33.569713, lng:-111.889149, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sparkle Grooming Co.", cat:"peluqueria", lat:33.495686, lng:-112.000238, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Hairy Dog", cat:"peluqueria", lat:33.494091, lng:-112.012615, dir:"4019 North 32nd Street, Paradise Valley", tel:"+1-602-327-3847", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Uptown Pet Spa North", cat:"peluqueria", lat:33.568313, lng:-111.889832, dir:"8875 East Via Linda, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Applewood Pet Resort", cat:"refugio", lat:33.530656, lng:-111.931685, dir:"6909 East Lincoln Drive, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:33.656472, lng:-111.932212, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"D Pet Hotels", cat:"refugio", lat:33.623059, lng:-111.896873, dir:"15060 North Northsight Boulevard, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggie District Pet Resort & Training Center", cat:"refugio", lat:33.602899, lng:-111.987762, horas:[6.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:33.618977, lng:-111.896345, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"HALO Animal Rescue", cat:"refugio", lat:33.639139, lng:-112.012209, dir:"3227 East Bell Road, Paradise Valley", tel:"+1-602-971-9222", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Horizon Pet Hotel & Boarding", cat:"refugio", lat:33.614396, lng:-111.864683, dir:"14150 North 100th Street, Paradise Valley", tel:"+1-480-383-8454", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Partners Dog Training, Resort, & Daycare", cat:"refugio", lat:33.583762, lng:-111.894587, dir:"8642 East Shea Boulevard, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petite Pup", cat:"refugio", lat:33.6196, lng:-111.874533, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Animal's Kingdom Pet Sitting Service", cat:"refugio", lat:33.644696, lng:-111.901078, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Barking Dog", cat:"refugio", lat:33.555499, lng:-111.883387, dir:"8330 North Pima Center Parkway, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Choice Pet Market", cat:"tienda", lat:33.584335, lng:-111.979469, tel:"+1-602-652-9000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kona Reef", cat:"tienda", lat:33.581881, lng:-112.011711, dir:"3217 East Shea Boulevard, Paradise Valley", tel:"+1-480-451-5440", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"My Pet Market", cat:"tienda", lat:33.628381, lng:-111.893538, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Food Depot", cat:"tienda", lat:33.598325, lng:-111.984057, dir:"4619 East Cactus Road, Paradise Valley", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Food Depot", cat:"tienda", lat:33.647381, lng:-112.030221, dir:"17645 North Cave Creek Road, Paradise Valley", tel:"+1-602-493-7639", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Planet", cat:"tienda", lat:33.569152, lng:-111.888492, dir:"8912 East Via Linda, Paradise Valley", tel:"+1-480-292-8318", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.539, lng:-111.889253, dir:"8910 East Talking Stick Way, Paradise Valley", tel:"+1-480-368-8015", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.584857, lng:-111.975372, dir:"10825 North Tatum Boulevard, Paradise Valley", tel:"+1-480-367-9680", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.577299, lng:-111.888248, dir:"10030 North 90th Street, Paradise Valley", tel:"+1-480-391-1647", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.653733, lng:-111.92842, dir:"7077 East Mayo Boulevard, Paradise Valley", tel:"+1-480-419-1478", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.6349, lng:-111.920778, dir:"16257 North Scottsdale Road, Paradise Valley", tel:"+1-480-607-1038", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.674319, lng:-111.973313, dir:"21001 North Tatum Boulevard, Paradise Valley", tel:"+1-480-513-4262", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"The Fetching Dog", cat:"tienda", lat:33.584566, lng:-111.894418, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Pet Club", cat:"tienda", lat:33.610012, lng:-111.977399, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital at Grayhawk", cat:"vet", lat:33.675887, lng:-111.923345, dir:"20801 North Scottsdale Road, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical & Surgical Center", cat:"vet", lat:33.644695, lng:-111.901533, dir:"17477 North 82nd Street, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arizona Exotic Animal Hospital", cat:"vet", lat:33.670283, lng:-112.032174, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.577533, lng:-111.888061, dir:"10030 North 90th Street, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.635068, lng:-111.920621, dir:"16257 North Scottsdale Road, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.653652, lng:-111.928271, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.674115, lng:-111.973454, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.511206, lng:-112.013857, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BluePearl", cat:"vet", lat:33.495468, lng:-112.014898, dir:"East Indian School Road, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Deer Creek Animal Hospital", cat:"vet", lat:33.675872, lng:-112.017681, dir:"3025 East Rose Garden Lane, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Desert Ridge Animal Hospital", cat:"vet", lat:33.675342, lng:-111.965228, dir:"5415 East High Street, Paradise Valley", tel:"+1-480-618-5333", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Horizon Animal Hospital", cat:"vet", lat:33.614057, lng:-111.864648, dir:"14150 North 100th Street, Paradise Valley", tel:"+1-480-614-9500", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - Scottsdale Hills", cat:"vet", lat:33.610833, lng:-111.927069, dir:"7139 East Thunderbird Road, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Scottsdale Animal Hospital", cat:"vet", lat:33.621136, lng:-111.899264, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Palo Verde Animal Hospital", cat:"vet", lat:33.55273, lng:-112.05599, dir:"1215 East Northern Avenue, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PAWS - The Modern Spay Neuter Clinic", cat:"vet", lat:33.674662, lng:-112.030045, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Urgent Care", cat:"vet", lat:33.67509, lng:-112.030248, dir:"20811 North Cave Creek Road, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Phoenix Veterinary", cat:"vet", lat:33.596775, lng:-111.995406, dir:"4015 East Cactus Road, Paradise Valley", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Raintree Pet Resort & Medical Center", cat:"vet", lat:33.618738, lng:-111.9035, dir:"8215 East Raintree Drive, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Salt River Veterinary Specialists", cat:"vet", lat:33.577172, lng:-111.87577, dir:"9953 North 95th Street, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scottsdale Ranch Animal Hospital", cat:"vet", lat:33.577606, lng:-111.874518, dir:"9993 North 95th Way, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VetMED Emergency & Specialty Veterinary Hospital", cat:"vet", lat:33.67337, lng:-112.032425, dir:"20612 North Cave Creek Road, Paradise Valley", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "park-city-utah": {nombre:"Park City", centro:[40.646092, -111.497996], tz:"America/Denver", lugares:[
  {n:"Park City Dog Park", cat:"parque", lat:40.680191, lng:-111.467252, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "parker-colorado": {nombre:"Parker", centro:[39.518451, -104.761264], tz:"America/Denver", lugares:[
  {n:"Bayou Gulch Dog Park", cat:"parque", lat:39.430645, lng:-104.733223, dir:"4728 Fox Sparrow Road, Parker", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Inspiration Bark Park", cat:"parque", lat:39.562278, lng:-104.708352, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"USMC Cpl David M Sonka Dog Park", cat:"parque", lat:39.545388, lng:-104.78115, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"USMC CPL David M. Sonka Dog Park and Westcreek Disc Golf Course", cat:"parque", lat:39.544948, lng:-104.78153, dir:"17855 Pine Lane, Parker", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggy Styles Pet Salon", cat:"peluqueria", lat:39.526094, lng:-104.770531, tel:"+1-720-667-4195", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Lovely Pet Spa", cat:"peluqueria", lat:39.532277, lng:-104.795567, dir:"16526 Keystone Boulevard, Parker", tel:"+1-303-997-8987", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"City Bark", cat:"refugio", lat:39.5377, lng:-104.795034, dir:"9835 Mangano Lane, Parker", tel:"+1-720-862-3048", horas:[6.5, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:39.533752, lng:-104.770516, dir:"10140 Parkglenn Way, Parker", tel:"+1-303-276-7636", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"K-9 Salon And Daycare", cat:"refugio", lat:39.514507, lng:-104.792483, dir:"17002 East Mainstreet, Parker", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"tienda", lat:39.529077, lng:-104.769937, dir:"10325 Progress Way, Parker", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Colorado Dog", cat:"tienda", lat:39.528917, lng:-104.769734, dir:"10325 Progress Way, Parker", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Colorado Puppy Rescue", cat:"tienda", lat:39.540461, lng:-104.772116, dir:"18741 Ponderosa Drive, Parker", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"EarthWise Pet", cat:"tienda", lat:39.478931, lng:-104.759394, dir:"13097 South Parker Road", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Heritage Pet - Grooming, Boarding, Day Care & Training", cat:"tienda", lat:39.523732, lng:-104.772976, dir:"18648 Longs Way, Parker", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Parker Exotic Pets", cat:"tienda", lat:39.527359, lng:-104.767597, dir:"10449 South Parker Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.511712, lng:-104.764875, dir:"11183 South Parker Road", tel:"+1-720-851-7790", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Advanced Pet Care of Parker", cat:"vet", lat:39.5145, lng:-104.792404, dir:"17002 East Mainstreet, Parker", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of Parker", cat:"vet", lat:39.508952, lng:-104.76163, dir:"19557 East Parker Square Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heritage Animal Hospital", cat:"vet", lat:39.550684, lng:-104.754284, dir:"7076A Inspiration Drive, Parker", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hess Ridge Animal Hospital", cat:"vet", lat:39.493414, lng:-104.779832, dir:"12225 Pardee Street, Parker", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Inspire Animal Hospital", cat:"vet", lat:39.53734, lng:-104.770325, dir:"9855 South Parker Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Parker Animal Hospital", cat:"vet", lat:39.5317, lng:-104.76777, dir:"10225 South Parker Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Parker Center Animal Clinic", cat:"vet", lat:39.522676, lng:-104.764908, dir:"10702 South Parker Road", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pinery Veterinary Center", cat:"vet", lat:39.456318, lng:-104.761038, dir:"6716 Pinery Peak Point, Parker", tel:"+1-303-953-4000", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Stroh Ranch Pet Health", cat:"vet", lat:39.482032, lng:-104.758833, dir:"12840 Stroh Ranch Court, Parker", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Urgent Vet", cat:"vet", lat:39.49345, lng:-104.758505, dir:"12239 Pine Bluffs Way, Parker", tel:"+1-720-835-1500", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Center of Parker, Inc.", cat:"vet", lat:39.491661, lng:-104.756363, dir:"12373 Pine Bluffs Way, Parker", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pascua-pueblo": {nombre:"Pascua Pueblo", centro:[32.112966, -111.071054], tz:"America/Phoenix", lugares:[
  {n:"A Puppy Bath Pet Grooming Salon", cat:"tienda", lat:32.186913, lng:-111.09244, dir:"3059 South Kinney Road, Pascua Pueblo", tel:"+1-507-578-2201", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "paul": {nombre:"Paul", centro:[42.607965, -113.78335], tz:"America/Denver", lugares:[
  {n:"Little Rascal Ranch", cat:"parque", lat:42.61689, lng:-113.814412, dir:"19 South 750 West, Paul", tel:"+1-208-312-0550", horas:[7.0, 21.5], nota:"Dato de OpenStreetMap"}
 ]},
 "payson": {nombre:"Payson", centro:[34.240648, -111.323026], tz:"America/Phoenix", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.241896, lng:-111.318153, dir:"400 E Highway 260, Payson", tel:"+1-928-474-4015", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "payson-utah": {nombre:"Payson", centro:[40.044399, -111.732152], tz:"America/Denver", lugares:[
  {n:"Payson Family Pet Hospital", cat:"vet", lat:40.043973, lng:-111.716237, dir:"43 North 1000 East, Payson", tel:"+1-801-465-1800", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "pecos": {nombre:"Pecos", centro:[35.574527, -105.675262], tz:"America/Denver", lugares:[
  {n:"Pecos Valley Veterinary", cat:"vet", lat:35.575568, lng:-105.675419, dir:"10 NM 63, Pecos", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "peoria": {nombre:"Peoria", centro:[33.580612, -112.237294], tz:"America/Phoenix", lugares:[
  {n:"PetSmart Bark Park", cat:"parque", lat:33.663783, lng:-112.115189, dir:"19601 N 27th Ave, Peoria", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart Dog Park", cat:"parque", lat:33.664554, lng:-112.100644, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Phoenix Schutzhund Club", cat:"parque", lat:33.569687, lng:-112.255461, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chews 4 Paws", cat:"peluqueria", lat:33.655363, lng:-112.132738, dir:"3414 West Union Hills Drive, Peoria", tel:"+1-623-581-1454", horas:[9.0, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart Grooming", cat:"peluqueria", lat:33.666267, lng:-112.121047, dir:"2901 West Agua Fria Freeway, Peoria", horas:[7.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"4 Paws Rescue Inc", cat:"refugio", lat:33.583013, lng:-112.265041, dir:"10807 North 96th Avenue, Peoria", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paddock's Paws Pet Care & Training", cat:"refugio", lat:33.595886, lng:-112.255707, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arrowhead Pooper Scoopers", cat:"tienda", lat:33.612181, lng:-112.238136, tel:"+1-602-391-0160", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.553168, lng:-112.26269, dir:"9480 West Northern Avenue, Peoria", tel:"+1-623-877-2730", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.666122, lng:-112.121056, dir:"2901 West Agua Fria Freeway, Peoria", tel:"+1-623-492-9045", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.574896, lng:-112.256064, dir:"9960 North 91st Avenue, Peoria", tel:"+1-623-486-8700", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"All Pets Animal Hospital", cat:"vet", lat:33.608863, lng:-112.23697, dir:"13735 North 83rd Avenue, Peoria", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.665878, lng:-112.120859, dir:"2901 West Agua Fria Freeway, Peoria", tel:"+1-623-516-2516", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.574698, lng:-112.255925, dir:"9960 North 91st Avenue, Peoria", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BluePearl", cat:"vet", lat:33.579932, lng:-112.271642, dir:"9875 West Peoria Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dr. Kelly's Surgical Unit - Peoria", cat:"vet", lat:33.565231, lng:-112.255655, dir:"8914 North 91st Avenue, Peoria", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - Arrow", cat:"vet", lat:33.612123, lng:-112.169592, dir:"5130 West Thunderbird Road, Peoria", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - Roadrunner", cat:"vet", lat:33.596871, lng:-112.220865, dir:"12320 North 75th Avenue, Peoria", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Peoria Animal Hospital", cat:"vet", lat:33.580508, lng:-112.251586, dir:"8925 West Peoria Avenue", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Valet Vet Mobile Veterinary Services", cat:"vet", lat:33.665451, lng:-112.110593, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "peralta": {nombre:"Peralta", centro:[34.837038, -106.690859], tz:"America/Denver", lugares:[
  {n:"PetSmart", cat:"tienda", lat:34.806993, lng:-106.704182, dir:"2450 Main Street Northeast, Peralta", tel:"+1-505-807-3445", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"VET CO", cat:"vet", lat:34.807574, lng:-106.703378, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "perry-utah": {nombre:"Perry", centro:[41.464937, -112.032445], tz:"America/Denver", lugares:[
  {n:"Sweet Paws & Co. Dog Grooming", cat:"peluqueria", lat:41.467116, lng:-112.032372, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Canyon View Animal Health Center", cat:"vet", lat:41.475622, lng:-112.024016, dir:"1885 South Highway 89, Perry", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "phoenix": {nombre:"Phoenix", centro:[33.448437, -112.074141], tz:"America/Phoenix", lugares:[
  {n:"Foothills Canine Academy Brenda Dreyer", cat:"parque", lat:33.42207, lng:-112.032622, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hance Park Dog Park", cat:"parque", lat:33.462405, lng:-112.07844, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Hance Park Dog Park", cat:"parque", lat:33.462351, lng:-112.079627, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw Pup Park", cat:"parque", lat:33.44747, lng:-112.077312, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Steele Indian School Dog Park", cat:"parque", lat:33.501395, lng:-112.06785, horas:[6.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"Bark & Bark Dog Grooming Salon", cat:"peluqueria", lat:33.45876, lng:-112.092966, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doggy Daze", cat:"peluqueria", lat:33.518031, lng:-112.063419, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Canine Academy International", cat:"refugio", lat:33.426684, lng:-112.046288, dir:"1633 East Rairdan Lane, Phoenix", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Companion Pets Inc.", cat:"refugio", lat:33.470303, lng:-112.110995, dir:"2021 North Black Canyon Highway, Phoenix", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:33.527265, lng:-112.065424, dir:"6148 North 7th Street, Phoenix", tel:"+1-602-607-2777", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:33.466017, lng:-112.08063, dir:"520 West McDowell Road, Phoenix", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Liberty Wildlife", cat:"refugio", lat:33.414988, lng:-112.025704, dir:"2600 East Elwood Street, Phoenix", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Bark If You’re Dirty", cat:"tienda", lat:33.497756, lng:-112.083875, dir:"4230 North 7th Avenue, Phoenix", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fetch", cat:"tienda", lat:33.525413, lng:-112.047772, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"My Pet Market", cat:"tienda", lat:33.506924, lng:-112.037771, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ray's Feed Store", cat:"tienda", lat:33.377309, lng:-112.081746, dir:"643 West Baseline Road, Phoenix", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Reptile Empress Exotic Pets & Supplies", cat:"tienda", lat:33.470897, lng:-112.117559, dir:"2038 North 27th Avenue, Phoenix", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ryan's Pet Supplies", cat:"tienda", lat:33.465206, lng:-112.042934, dir:"1805 East McDowell Road, Phoenix", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Thompson's Veterinary Supplies", cat:"tienda", lat:33.463981, lng:-112.121906, dir:"1340 North 29th Avenue, Phoenix", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Care Hospital of Phoenix", cat:"vet", lat:33.480147, lng:-112.01391, dir:"3131 East Thomas Road, Phoenix", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Christown Animal Hospital and Boarding", cat:"vet", lat:33.511724, lng:-112.09949, dir:"5103 North 19th Avenue, Phoenix", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dobbins Village Veterinary Hospital", cat:"vet", lat:33.378954, lng:-112.134828, dir:"3536 West Baseline Road, Phoenix", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - Madison", cat:"vet", lat:33.537867, lng:-112.066052, dir:"531 East Glendale Avenue, Phoenix", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"North Kenilworth Veterinary Care", cat:"vet", lat:33.466032, lng:-112.080061, dir:"342 West McDowell Road, Phoenix", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Phoenix Dog/Cat/Bird Hospital", cat:"vet", lat:33.488339, lng:-112.083586, dir:"3418 North 7th Avenue, Phoenix", tel:"+1-602-274-0561", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Vida Vet Clinic", cat:"vet", lat:33.390678, lng:-112.072852, dir:"6045 South Central Avenue, Phoenix", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "picture-rocks": {nombre:"Picture Rocks", centro:[32.327896, -111.218256], tz:"America/Phoenix", lugares:[
  {n:"Big Dogs", cat:"parque", lat:32.346546, lng:-111.095894, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Little Dogs", cat:"parque", lat:32.346745, lng:-111.095562, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.353093, lng:-111.093801, dir:"8050 North Cortaro Road, Picture Rocks", tel:"+1-520-719-6110", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Continental Ranch Pet Clinic", cat:"vet", lat:32.349954, lng:-111.098625, dir:"108 North Silverbell Road, Picture Rocks", tel:"+1-520-744-3850", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Michael Robinson, DVM", cat:"vet", lat:32.279168, lng:-111.23729, dir:"12721 West Well Pump Drive, Picture Rocks", tel:"+1-520-682-7650", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Twin Peaks Veterinarian", cat:"vet", lat:32.37427, lng:-111.125652, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arizona-Sonora Desert Museum", cat:"zoo", lat:32.243686, lng:-111.167554, dir:"2021 North Kinney Road, Picture Rocks", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "pine-bluffs": {nombre:"Pine Bluffs", centro:[41.179678, -104.066779], tz:"America/Denver", lugares:[
  {n:"Bluffs Veterinary Clinic", cat:"vet", lat:41.177682, lng:-104.078175, dir:"722 West 7th Street, Pine Bluffs", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pinedale-wyoming": {nombre:"Pinedale", centro:[42.867132, -109.860981], tz:"America/Denver", lugares:[
  {n:"Happy Endings Animal Rescue", cat:"refugio", lat:42.866318, lng:-109.869594, dir:"West Pine Street, Pinedale", tel:"+1-307-360-6000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws in the Winds", cat:"refugio", lat:42.860958, lng:-109.850194, dir:"9886 US Highway 191, Pinedale", tel:"+1-307-367-3490", horas:[16.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of Pinedale", cat:"vet", lat:42.867156, lng:-109.8894, dir:"1805 West Pine Street, Pinedale", tel:"+1-307-367-4752", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "pleasant-grove-utah": {nombre:"Pleasant Grove", centro:[40.364035, -111.738688], tz:"America/Denver", lugares:[
  {n:"Doggie Doos", cat:"peluqueria", lat:40.366453, lng:-111.754988, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Perfect Grooming", cat:"peluqueria", lat:40.36376, lng:-111.740369, dir:"7 South Main Street, Pleasant Grove", tel:"+1-801-796-3776", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"North Utah Valley Animal Shelter", cat:"refugio", lat:40.340041, lng:-111.760541, dir:"193 North 2000 West, Pleasant Grove", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Livewell Animal Urgent Care", cat:"vet", lat:40.358913, lng:-111.768939, dir:"425 South North County Boulevard, Pleasant Grove", tel:"+1-385-290-4287", horas:[12.0, 22.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Timpanogos Animal Hospital", cat:"vet", lat:40.353758, lng:-111.74015, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pocatello": {nombre:"Pocatello", centro:[42.862029, -112.450627], tz:"America/Denver", lugares:[
  {n:"Hair of the Dog Grooming", cat:"peluqueria", lat:42.864429, lng:-112.452801, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tattle Tails Dog Grooming", cat:"peluqueria", lat:42.880285, lng:-112.453088, dir:"215 West Maple Street, Pocatello", tel:"+1-208-339-9834", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pocatello Animal Services", cat:"refugio", lat:42.843622, lng:-112.418238, dir:"3100 Avenue of the Chiefs, Pocatello", tel:"+1-208-234-6156; +1-208-234-61", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"McKee's Garden & Pet Center", cat:"tienda", lat:42.8795, lng:-112.451177, dir:"244 Yellowstone Avenue, Pocatello", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Zoo Idaho", cat:"zoo", lat:42.842493, lng:-112.419677, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "polson": {nombre:"Polson", centro:[47.690529, -114.163761], tz:"America/Denver", lugares:[
  {n:"Travis Dolphin Dog Park", cat:"parque", lat:47.688938, lng:-114.179842, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ponderay": {nombre:"Ponderay", centro:[48.305481, -116.533803], tz:"America/Los_Angeles", lugares:[
  {n:"Pend Oreille Veterinary", cat:"vet", lat:48.308993, lng:-116.53623, dir:"895 Kootenai Cutoff Road, Ponderay", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "post-falls": {nombre:"Post Falls", centro:[47.711011, -116.948088], tz:"America/Los_Angeles", lugares:[
  {n:"Just 4 Paws", cat:"peluqueria", lat:47.71106, lng:-116.915005, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paislee’s Paw Spaw", cat:"peluqueria", lat:47.71042, lng:-116.911992, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"River Mountain All Breed Grooming", cat:"peluqueria", lat:47.717683, lng:-116.947767, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Touch of Love Grooming", cat:"peluqueria", lat:47.708422, lng:-116.946319, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Select K9 Resort", cat:"refugio", lat:47.71021, lng:-116.945505, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Post Falls Co-Op", cat:"tienda", lat:47.716398, lng:-116.955875, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Emergency Pet Care", cat:"vet", lat:47.710625, lng:-116.907013, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Kootenai Animal Hospital", cat:"vet", lat:47.710101, lng:-116.919522, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "prescott": {nombre:"Prescott", centro:[34.539984, -112.468812], tz:"America/Phoenix", lugares:[
  {n:"Willow Creek Dog Park", cat:"parque", lat:34.604548, lng:-112.45406, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Olsen's Grain", cat:"tienda", lat:34.546979, lng:-112.478135, dir:"711 Elrod Rd, Prescott", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:34.549454, lng:-112.431245, dir:"1941 East Highway 69, Prescott", tel:"+1-928-708-0212", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.547539, lng:-112.399141, dir:"277 North Walker Road, Prescott", tel:"+1-928-776-9636", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Mile Hi Animal Hospital", cat:"vet", lat:34.530963, lng:-112.472956, dir:"334 White Spar Road, Prescott", tel:"+1-928-445-4581", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Thumbe Butte Animal Hospital", cat:"vet", lat:34.543434, lng:-112.490955, dir:"1441 West Gurley Street, Prescott", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heritage Park Zoo", cat:"zoo", lat:34.612888, lng:-112.445503, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "prescott-valley": {nombre:"Prescott Valley", centro:[34.595078, -112.333863], tz:"America/Phoenix", lugares:[
  {n:"Granville Dog Park", cat:"parque", lat:34.608206, lng:-112.357478, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"J Club Private Dog Park", cat:"parque", lat:34.612393, lng:-112.36926, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "priest-river": {nombre:"Priest River", centro:[48.180742, -116.909365], tz:"America/Los_Angeles", lugares:[
  {n:"Priest River Animal Rescue", cat:"refugio", lat:48.180229, lng:-116.922408, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pritchett": {nombre:"Pritchett", centro:[37.36855, -102.86004], tz:"America/Denver", lugares:[
  {n:"The Wild Animal Refuge", cat:"zoo", lat:37.567581, lng:-103.068236, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "provo": {nombre:"Provo", centro:[40.233729, -111.658709], tz:"America/Denver", lugares:[
  {n:"Goo Goo Dogs", cat:"peluqueria", lat:40.229559, lng:-111.661766, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ruff Pup", cat:"refugio", lat:40.217332, lng:-111.663149, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jay's Jungle pet store", cat:"tienda", lat:40.233958, lng:-111.66343, dir:"272 West Center Street, Provo", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:40.265621, lng:-111.66919, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pueblo": {nombre:"Pueblo", centro:[38.263995, -104.614187], tz:"America/Denver", lugares:[
  {n:"City Park Dog Park", cat:"parque", lat:38.260947, lng:-104.660669, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mudpuppy Grooming", cat:"peluqueria", lat:38.249893, lng:-104.601615, dir:"440 Santa Fe Drive, Pueblo", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws for Life", cat:"refugio", lat:38.272994, lng:-104.661776, dir:"800 North Pueblo Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pueblo Community Animal Shelter", cat:"refugio", lat:38.319167, lng:-104.620814, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Raptor Center", cat:"refugio", lat:38.271673, lng:-104.675229, dir:"5200 Nature Center Road, Pueblo", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Amazin' Amos Pet Food Pantry", cat:"tienda", lat:38.309503, lng:-104.635851, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Kingdom", cat:"tienda", lat:38.259587, lng:-104.607098, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Paradise", cat:"tienda", lat:38.24588, lng:-104.663685, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:38.333403, lng:-104.623199, dir:"5843 North Elizabeth Street, Pueblo", tel:"+1-719-543-6160", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:38.312999, lng:-104.612581, dir:"4230 North Freeway, Pueblo", tel:"+1-719-595-9000", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Timber Wolf pet products", cat:"tienda", lat:38.217766, lng:-104.645383, dir:"2840 Granada Boulevard, Pueblo", tel:"+1-719-565-0609", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pets & Friends Animal Hospital", cat:"vet", lat:38.309235, lng:-104.635811, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pueblo Zoo", cat:"zoo", lat:38.261764, lng:-104.657517, dir:"3455 Nuckolls Avenue, Pueblo", tel:"+1-719-561-1452", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pueblo-of-sandia-village": {nombre:"Pueblo of Sandia Village", centro:[35.255041, -106.573081], tz:"America/Denver", lugares:[
  {n:"The Academy of Canine Excellence", cat:"tienda", lat:35.163556, lng:-106.495388, dir:"12700 San Rafael Avenue Northeast, Pueblo of Sandia Village", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "pueblo-west": {nombre:"Pueblo West", centro:[38.322986, -104.741617], tz:"America/Denver", lugares:[
  {n:"Waggin' Tails Dog Park", cat:"parque", lat:38.321605, lng:-104.730076, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "quartzsite": {nombre:"Quartzsite", centro:[33.66699, -114.21681], tz:"America/Phoenix", lugares:[
  {n:"Quartzsite Dog Park", cat:"parque", lat:33.678523, lng:-114.209094, dir:"555 Plymouth Road, Quartzsite", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "queen-creek": {nombre:"Queen Creek", centro:[33.248386, -111.634158], tz:"America/Phoenix", lugares:[
  {n:"Pocket Park for Pups", cat:"parque", lat:33.243867, lng:-111.635155, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sky View Ranch Dog Park", cat:"parque", lat:33.279682, lng:-111.6886, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Good Dogs Sit", cat:"peluqueria", lat:33.212397, lng:-111.685286, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dapper Dog Salon", cat:"peluqueria", lat:33.249691, lng:-111.632746, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetsHotel", cat:"refugio", lat:33.25705, lng:-111.639519, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"See Ash Go Dog Training", cat:"refugio", lat:33.213381, lng:-111.676835, dir:"25817 South Mandarin Drive, Queen Creek", tel:"+1-623-352-1818", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"TLC Horse Boarding", cat:"refugio", lat:33.235602, lng:-111.686883, dir:"23426 South Power Road, Queen Creek", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Windmill Acres Equestrian Center", cat:"refugio", lat:33.236495, lng:-111.687769, dir:"23360 South Power Road, Queen Creek", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kona's K9 Shop", cat:"tienda", lat:33.282998, lng:-111.651217, dir:"7303 South Hawes Road, Queen Creek", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Planet", cat:"tienda", lat:33.304991, lng:-111.701374, dir:"4099 East Williams Field Road, Queen Creek", tel:"+1-480-350-7803", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Planet", cat:"tienda", lat:33.255907, lng:-111.636436, dir:"21227 South Ellsworth Loop Road, Queen Creek", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.250328, lng:-111.628271, dir:"21178 East Ocotillo Road, Queen Creek", tel:"+1-480-987-0575", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.257222, lng:-111.639276, dir:"21032 South Ellsworth Loop Road, Queen Creek", tel:"+1-480-888-1815", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal House Veterinary Clinic", cat:"vet", lat:33.280327, lng:-111.685756, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arizona Animal Wellness Center", cat:"vet", lat:33.291982, lng:-111.719279, dir:"3279 East Pecos Road, Queen Creek", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.257343, lng:-111.639053, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Desert Mountain Equine", cat:"vet", lat:33.223327, lng:-111.636173, dir:"24760 South Ellsworth Road, Queen Creek", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gilbert Queen Creek Emergency Veterinarian", cat:"vet", lat:33.28406, lng:-111.682597, dir:"18610 East Rittenhouse Road, Queen Creek", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Queen Creek Veterinary Clinic", cat:"vet", lat:33.248213, lng:-111.646949, dir:"20201 East Ocotillo Road, Queen Creek", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"San Tan Animal Hospital", cat:"vet", lat:33.247427, lng:-111.62289, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Seville Veterinary Hospital", cat:"vet", lat:33.235196, lng:-111.72265, dir:"6348 South Higley Road, Queen Creek", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Thrive Affordable Vet Care", cat:"vet", lat:33.26556, lng:-111.683592, dir:"18521 East Queen Creek Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rancho-viejo": {nombre:"Rancho Viejo", centro:[35.594425, -106.002565], tz:"America/Denver", lugares:[
  {n:"Park Plazas Dog Park", cat:"parque", lat:35.634358, lng:-105.987382, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Country Boarding Kennels", cat:"refugio", lat:35.603012, lng:-106.041898, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kindred Spirits Animal Sanctuary", cat:"refugio", lat:35.482914, lng:-106.06921, dir:"3749 Turquoise Trail, Rancho Viejo", tel:"+1-505-471-5366", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spay/Neuter & Wellness Clinic", cat:"refugio", lat:35.631612, lng:-106.024428, dir:"2570 Camino Entrada, Rancho Viejo", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:35.639232, lng:-106.010442, tel:"+1-505-471-5255", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Gruda Veterinary Hospital", cat:"vet", lat:35.596137, lng:-106.049269, dir:"9 Rumble Road, Rancho Viejo", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Thal Equine", cat:"vet", lat:35.49486, lng:-106.077262, dir:"69 Bonanza Creek Road, Rancho Viejo", tel:"+1-505-438-6590", horas:[9.0, 12.0], nota:"Dato de OpenStreetMap"}
 ]},
 "ranchos-de-taos": {nombre:"Ranchos de Taos", centro:[36.359429, -105.608523], tz:"America/Denver", lugares:[
  {n:"Stray Hearts Taos Animal Shelter", cat:"refugio", lat:36.38482, lng:-105.596936, dir:"1200 Saint Francis Lane, Ranchos de Taos", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Salazar Veterinary", cat:"vet", lat:36.383935, lng:-105.594744, dir:"Salazar Road, Ranchos de Taos", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rathdrum": {nombre:"Rathdrum", centro:[47.81115, -116.896931], tz:"America/Los_Angeles", lugares:[
  {n:"Rathdrum Dog Park", cat:"parque", lat:47.79177, lng:-116.864261, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Thayer Farms Dog Park", cat:"parque", lat:47.788756, lng:-116.906891, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Grooming", cat:"peluqueria", lat:47.818532, lng:-116.887304, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rathdrum Country Store", cat:"tienda", lat:47.811193, lng:-116.899256, dir:"14875 West Highway 53, Rathdrum", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rathdrum Animal Clinic", cat:"vet", lat:47.816829, lng:-116.873676, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "raton": {nombre:"Raton", centro:[36.897923, -104.435482], tz:"America/Denver", lugares:[
  {n:"Raton Veterinary Hospital", cat:"vet", lat:36.886401, lng:-104.42906, dir:"1101 Frontage Road, Raton", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "red-lodge": {nombre:"Red Lodge", centro:[45.185904, -109.247062], tz:"America/Denver", lugares:[
  {n:"Lewis and Bark's Outpost", cat:"tienda", lat:45.187136, lng:-109.247181, dir:"3 North Broadway Avenue, Red Lodge", tel:"+1-406-445-3132", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Grizzly Peak Animal Hospital", cat:"vet", lat:45.215541, lng:-109.242707, dir:"7165 Highway 212, Red Lodge", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yellowstone Wildlife Sanctuary", cat:"zoo", lat:45.198683, lng:-109.241675, dir:"615 East 2nd Street, Red Lodge", tel:"+1-406-446-1133", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "red-river": {nombre:"Red River", centro:[36.708589, -105.406328], tz:"America/Denver", lugares:[
  {n:"Bark Park", cat:"parque", lat:36.704724, lng:-105.399379, dir:"High Street, Red River", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "reno-nevada": {nombre:"Reno", centro:[39.526179, -119.812658], tz:"America/Los_Angeles", lugares:[
  {n:"Bark Park at 3rd Street Flats", cat:"parque", lat:39.528179, lng:-119.817578, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Biggest Little Dog Park", cat:"parque", lat:39.527942, lng:-119.815706, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park at Park Place Apartments", cat:"parque", lat:39.546865, lng:-119.821281, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park at Reno Experience District", cat:"parque", lat:39.502331, lng:-119.798291, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park at Vida Luxury Living Apartments", cat:"parque", lat:39.516722, lng:-119.898872, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rancho San Rafael Dog Park", cat:"parque", lat:39.54968, lng:-119.831702, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Virginia Lake Dog Park", cat:"parque", lat:39.497929, lng:-119.808694, dir:"102 Mountain View Drive, Reno", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Whitaker Park Dog Park", cat:"parque", lat:39.532499, lng:-119.823698, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Alice's Pet Parlor", cat:"peluqueria", lat:39.512693, lng:-119.80356, tel:"+1-775-851-3625", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Essential Pet Spa", cat:"peluqueria", lat:39.519836, lng:-119.803364, tel:"+1-775-313-3033", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Midtown Mutts", cat:"peluqueria", lat:39.509965, lng:-119.806572, dir:"1426 Tonopah Street, Reno", tel:"+1-775-444-9177", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spoiled Petz", cat:"peluqueria", lat:39.534151, lng:-119.869468, dir:"2005 Sierra Highlands Drive, Reno", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Stone Dog Salon", cat:"peluqueria", lat:39.50697, lng:-119.859112, dir:"3920 Mayberry Drive, Reno", tel:"+1-775-747-7300", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Healthy Tails", cat:"tienda", lat:39.43995, lng:-119.771894, dir:"55 Foothill Road, Reno", tel:"+1-775-851-2287", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Healthy Tails", cat:"tienda", lat:39.506559, lng:-119.85933, dir:"3892 Mayberry Drive, Reno", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Parrot Connection", cat:"tienda", lat:39.493114, lng:-119.806612, dir:"3382 Lakeside Court, Reno", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Station", cat:"tienda", lat:39.52863, lng:-119.879822, dir:"1654 Robb Drive, Reno", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Station", cat:"tienda", lat:39.506743, lng:-119.801572, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.475047, lng:-119.789943, dir:"5565 South Virginia Street, Reno", tel:"+1-775-829-9200", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.464982, lng:-119.78536, dir:"6675 South Virginia Street, Reno", tel:"+1-775-852-8490", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.529774, lng:-119.865774, dir:"5110 Mae Anne Avenue, Reno", tel:"+1-775-787-7833", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pettin' Place", cat:"tienda", lat:39.514598, lng:-119.803393, dir:"1121 South Wells Avenue, Reno", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Feline Medical Center", cat:"vet", lat:39.483318, lng:-119.852898, dir:"4792 Caughlin Parkway, Reno", horas:[7.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Kings Row Veterinary Hospital", cat:"vet", lat:39.542707, lng:-119.858182, dir:"3653 Kings Row, Reno", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Klaich Animal Hospital", cat:"vet", lat:39.504997, lng:-119.802508, dir:"1990 South Virginia Street, Reno", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Monte Vista Animal Hospital", cat:"vet", lat:39.516581, lng:-119.859713, dir:"9790 South Mccarran Boulevard, Reno", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Northwest Veterinary Hospital", cat:"vet", lat:39.530433, lng:-119.867177, dir:"5150 Mae Anne Avenue, Reno", tel:"+1-775-747-7478", horas:[7.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Peavine Family Practice", cat:"vet", lat:39.533733, lng:-119.869456, dir:"2005 Sierra Highlands Drive, Reno", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Vets", cat:"vet", lat:39.528217, lng:-119.834396, dir:"1350 Stardust Street, Reno", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sierra View Animal Hospital", cat:"vet", lat:39.46941, lng:-119.78522, dir:"6200 South Virginia Street, Reno", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southwest Veterinary Hospital", cat:"vet", lat:39.490849, lng:-119.806804, tel:"+1-775-825-7984", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"VCA Lakeside Animal Hospital", cat:"vet", lat:39.520948, lng:-119.860237, dir:"4871 Summit Ridge Drive, Reno", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rexburg": {nombre:"Rexburg", centro:[43.826079, -111.783728], tz:"America/Denver", lugares:[
  {n:"City of Rexburg Animal Shelter", cat:"refugio", lat:43.833511, lng:-111.797787, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Upper Valley Veterinary Clinic", cat:"vet", lat:43.842958, lng:-111.777775, dir:"840 North 2nd East, Rexburg", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "richfield-utah": {nombre:"Richfield", centro:[38.769428, -112.084706], tz:"America/Denver", lugares:[
  {n:"Wild World Pet Shop", cat:"tienda", lat:38.768941, lng:-112.084599, dir:"68 North Main Street, Richfield", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "richmond-utah": {nombre:"Richmond", centro:[41.922706, -111.813557], tz:"America/Denver", lugares:[
  {n:"North Cache Veterinary Service", cat:"vet", lat:41.924444, lng:-111.813899, dir:"191 West 100 North, Richmond", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "ridgway": {nombre:"Ridgway", centro:[38.152769, -107.761726], tz:"America/Denver", lugares:[
  {n:"Second Chance", cat:"refugio", lat:38.175612, lng:-107.739911, dir:"177 CR 10, Ridgway", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rifle": {nombre:"Rifle", centro:[39.534702, -107.78312], tz:"America/Denver", lugares:[
  {n:"Rifle Animal Shelter", cat:"refugio", lat:39.54045, lng:-107.795489, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rigby": {nombre:"Rigby", centro:[43.67224, -111.914863], tz:"America/Denver", lugares:[
  {n:"South Fork Aminal Clinic", cat:"vet", lat:43.6695, lng:-111.933496, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Yellowstone Bear World", cat:"zoo", lat:43.73728, lng:-111.866869, dir:"6010 South 4300 West, Rigby", tel:"+1-208-359-9688", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rio-communities": {nombre:"Rio Communities", centro:[34.650334, -106.733846], tz:"America/Denver", lugares:[
  {n:"Valencia Animal Clinic", cat:"vet", lat:34.652683, lng:-106.742744, dir:"1533 East River Road, Rio Communities", tel:"+1-505-864-4075", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rio-rancho": {nombre:"Rio Rancho", centro:[35.310823, -106.684745], tz:"America/Denver", lugares:[
  {n:"High Range Dog Park", cat:"parque", lat:35.289716, lng:-106.658627, horas:[6.0, 22.0], nota:"Dato de OpenStreetMap"}
 ]},
 "river-heights": {nombre:"River Heights", centro:[41.721885, -111.821417], tz:"America/Denver", lugares:[
  {n:"Mountain View Veterinary Health Center", cat:"vet", lat:41.713525, lng:-111.830791, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "riverdale-utah": {nombre:"Riverdale", centro:[41.178533, -111.992818], tz:"America/Denver", lugares:[
  {n:"Petco", cat:"tienda", lat:41.188185, lng:-111.984823, dir:"4153 Riverdale Road", tel:"+1-801-394-5400", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:41.174551, lng:-112.007416, dir:"1145 West Riverdale Road", tel:"+1-801-392-0119", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "riverton-utah": {nombre:"Riverton", centro:[40.517976, -111.93937], tz:"America/Denver", lugares:[
  {n:"Draper City Animal Shelter", cat:"refugio", lat:40.525381, lng:-111.906082, horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Planet", cat:"tienda", lat:40.534152, lng:-111.939478, dir:"11968 South Redwood Road, Riverton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dogfather", cat:"tienda", lat:40.522624, lng:-111.937549, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "riverton-wyoming": {nombre:"Riverton", centro:[43.024724, -108.380727], tz:"America/Denver", lugares:[
  {n:"Dacey's Place Dog Park", cat:"parque", lat:43.014142, lng:-108.389739, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rock-springs-wyoming": {nombre:"Rock Springs", centro:[41.586056, -109.219454], tz:"America/Denver", lugares:[
  {n:"Bitter Creek Bark Park", cat:"parque", lat:41.573899, lng:-109.237285, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rockville-utah": {nombre:"Rockville", centro:[37.161094, -113.038274], tz:"America/Denver", lugares:[
  {n:"Canyon Paws", cat:"refugio", lat:37.162576, lng:-113.023983, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "rodeo-new-mexico": {nombre:"Rodeo", centro:[31.836438, -109.030309], tz:"America/Denver", lugares:[
  {n:"Wolfsong Ranch Foundation", cat:"refugio", lat:31.90906, lng:-108.988855, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "roswell-new-mexico": {nombre:"Roswell", centro:[33.394328, -104.522952], tz:"America/Denver", lugares:[
  {n:"Woof Bowl Dog Park", cat:"parque", lat:33.410736, lng:-104.516932, dir:"1500 North Grand Avenue, Roswell", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paul's Veterinary Supply", cat:"tienda", lat:33.366808, lng:-104.513446, dir:"2005 Southeast Main Street, Roswell", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.447566, lng:-104.52203, dir:"4301 North Main Street, Roswell", tel:"+1-575-623-0122", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"College Garden Animal Hospital", cat:"vet", lat:33.408412, lng:-104.514701, dir:"502 East College Boulevard, Roswell", tel:"+1-575-578-3869", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Spring River Zoo", cat:"zoo", lat:33.407561, lng:-104.503906, dir:"1306 East College Boulevard, Roswell", tel:"+1-575-624-6760", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "roxborough-park": {nombre:"Roxborough Park", centro:[39.475437, -105.075047], tz:"America/Denver", lugares:[
  {n:"A Dogs World", cat:"peluqueria", lat:39.454267, lng:-105.071952, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "roy-utah": {nombre:"Roy", centro:[41.171536, -112.027374], tz:"America/Denver", lugares:[
  {n:"Pro Pet Care", cat:"vet", lat:41.160277, lng:-112.026529, dir:"5665 South 1900 West, Roy", tel:"+1-801-784-7676", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "ruidoso-downs": {nombre:"Ruidoso Downs", centro:[33.331213, -105.590836], tz:"America/Denver", lugares:[
  {n:"Ruidoso Animal Clinic", cat:"vet", lat:33.323655, lng:-105.629978, dir:"160 Sudderth Drive, Ruidoso Downs", tel:"+1-575-257-4027", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "safford": {nombre:"Safford", centro:[32.833225, -109.713182], tz:"America/Phoenix", lugares:[
  {n:"Roper Lake Dog Run", cat:"parque", lat:32.753603, lng:-109.707561, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Graham County Animal Control", cat:"refugio", lat:32.784681, lng:-109.707318, dir:"300 West Old Country Club Road, Safford", tel:"+1-928-428-7842", horas:[10.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "sagle": {nombre:"Sagle", centro:[48.203207, -116.565595], tz:"America/Los_Angeles", lugares:[
  {n:"Fry Creek Animal Clinic", cat:"vet", lat:48.228599, lng:-116.541915, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sahuarita": {nombre:"Sahuarita", centro:[31.957531, -110.955664], tz:"America/Phoenix", lugares:[
  {n:"Bark Park", cat:"parque", lat:31.968416, lng:-110.971842, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:31.909074, lng:-110.984343, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Valley Animal Hospital of Sahuarita", cat:"vet", lat:31.959597, lng:-110.985691, dir:"15990 South Rancho Sahuarita Boulevard", tel:"+1-520-308-3464", horas:[10.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "saint-regis": {nombre:"Saint Regis", centro:[47.301176, -115.098712], tz:"America/Denver", lugares:[
  {n:"St. Regis Dog Park", cat:"parque", lat:47.29812, lng:-115.098928, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "salem-utah": {nombre:"Salem", centro:[40.052906, -111.673659], tz:"America/Denver", lugares:[
  {n:"Pawsh", cat:"peluqueria", lat:40.061808, lng:-111.667572, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Salem Pet Wash", cat:"peluqueria", lat:40.062767, lng:-111.667263, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "salina-utah": {nombre:"Salina", centro:[38.957742, -111.859984], tz:"America/Denver", lugares:[
  {n:"Muddy Paws Salon", cat:"peluqueria", lat:38.957838, lng:-111.862938, dir:"156 W Main Street, Salina", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "salmon": {nombre:"Salmon", centro:[45.175921, -113.895773], tz:"America/Denver", lugares:[
  {n:"Island Park Off-Leash Area", cat:"parque", lat:45.17583, lng:-113.90141, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "salt-lake-city": {nombre:"Salt Lake City", centro:[40.75962, -111.886797], tz:"America/Denver", lugares:[
  {n:"600 Lofts Dog Park", cat:"parque", lat:40.755691, lng:-111.88983, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pup Club", cat:"parque", lat:40.742812, lng:-111.897236, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Zoomie Zone", cat:"parque", lat:40.747381, lng:-111.896469, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Posh Paws", cat:"peluqueria", lat:40.750069, lng:-111.862151, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Royal Tier", cat:"peluqueria", lat:40.763108, lng:-111.868674, dir:"777 East 300 South, Salt Lake City", tel:"+1-435-800-0850", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camp Barkalot", cat:"refugio", lat:40.738204, lng:-111.901447, dir:"360 West Whitney Avenue, Salt Lake City", tel:"+1-801-485-2030", horas:[6.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"City Pet Club", cat:"refugio", lat:40.75582, lng:-111.904975, dir:"601 South 500 West, Salt Lake City", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Utah Dog Park Airport", cat:"refugio", lat:40.77101, lng:-111.947789, dir:"1977 West North Temple, Salt Lake City", tel:"+1-801-683-3647", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Healthy Pets", cat:"tienda", lat:40.77268, lng:-111.868373, dir:"702 East 3rd Avenue, Salt Lake City", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Avenues Pet Clinic", cat:"vet", lat:40.766963, lng:-111.880724, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sentrx Animal Care", cat:"vet", lat:40.735746, lng:-111.907674, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sploot", cat:"vet", lat:40.759845, lng:-111.872795, horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"University Veterinary Hospital", cat:"vet", lat:40.749537, lng:-111.86367, dir:"952 East 900 South, Salt Lake City", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Hogle Zoo", cat:"zoo", lat:40.749511, lng:-111.815949, dir:"2600 East Sunnyside Avenue, Salt Lake City", tel:"+1-801-584-1700", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Tracy Aviary", cat:"zoo", lat:40.743041, lng:-111.875128, dir:"589 East 1300 South, Salt Lake City", horas:[9.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "san-felipe-pueblo": {nombre:"San Felipe Pueblo", centro:[35.43407, -106.446346], tz:"America/Denver", lugares:[
  {n:"Roadrunner Emergency Vet", cat:"vet", lat:35.38377, lng:-106.469975, dir:"5 Camino Karsten, San Felipe Pueblo", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "san-tan-valley": {nombre:"San Tan Valley", centro:[33.179814, -111.58493], tz:"America/Phoenix", lugares:[
  {n:"Puppy Land Dog Grooming", cat:"peluqueria", lat:33.138102, lng:-111.53967, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"ForTheBalls Exotic Reptiles & Supplies", cat:"tienda", lat:33.136903, lng:-111.539012, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ironwood Animal Hospital", cat:"vet", lat:33.217774, lng:-111.56439, dir:"85 West Combs Road, San Tan Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Johnson Ranch Animal Clinic", cat:"vet", lat:33.163325, lng:-111.563413, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sandy-utah": {nombre:"Sandy", centro:[40.571045, -111.895381], tz:"America/Denver", lugares:[
  {n:"Arnie's Dog Spa", cat:"peluqueria", lat:40.558025, lng:-111.892631, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.563458, lng:-111.888778, dir:"10329 South State Street, Sandy", tel:"+1-801-495-3700", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"VEG Veterinary Emergency Group", cat:"vet", lat:40.549834, lng:-111.891336, dir:"11084 S State Street, Sandy", tel:"+1-801-783-5010", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "santa-clara-utah": {nombre:"Santa Clara", centro:[37.133026, -113.65414], tz:"America/Denver", lugares:[
  {n:"Bed ‘n’ Biscuits Daycare", cat:"refugio", lat:37.124836, lng:-113.623607, dir:"960 North Dixie Downs Road, Santa Clara", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Animal Tender - Pet Resort", cat:"refugio", lat:37.118383, lng:-113.623231, dir:"588 North Dixie Drive, Santa Clara", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bone Appétit", cat:"tienda", lat:37.147068, lng:-113.660676, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"WOOF!  Wellness Center & Training Academy", cat:"tienda", lat:37.13265, lng:-113.657945, dir:"3199 Santa Clara Drive", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dixie Pet Clinic", cat:"vet", lat:37.120357, lng:-113.62326, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "santa-fe": {nombre:"Santa Fe", centro:[35.68761, -105.938456], tz:"America/Denver", lugares:[
  {n:"Dale Ball Dog Run", cat:"parque", lat:35.7108, lng:-105.900603, dir:"Sierra del Norte, Santa Fe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Frank Ortiz Dog Run", cat:"parque", lat:35.697332, lng:-105.963995, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Salvador Perez Dog Park", cat:"parque", lat:35.670736, lng:-105.951289, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Barkin Boutique", cat:"peluqueria", lat:35.695168, lng:-105.951873, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Grooming and Styling", cat:"peluqueria", lat:35.67776, lng:-105.951547, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws Plaza", cat:"refugio", lat:35.664144, lng:-105.970786, dir:"1416 4th Street, Santa Fe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Critters and Me", cat:"tienda", lat:35.680086, lng:-105.965731, dir:"1403 Agua Fria Street, Santa Fe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jurassic", cat:"tienda", lat:35.656958, lng:-105.985826, dir:"1214 Camino Carlos Rey, Santa Fe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Marty's Meals", cat:"tienda", lat:35.672713, lng:-105.951029, dir:"506 West Cordova Road, Santa Fe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:35.660575, lng:-105.977412, dir:"2006 Cerrillos Road, Santa Fe", tel:"+1-505-424-1667", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Teca Tu", cat:"tienda", lat:35.692245, lng:-105.950484, dir:"165 Paseo de Peralta, Santa Fe", tel:"+1-505-982-9374", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:35.672799, lng:-105.951828, dir:"518 West Cordova Road, Santa Fe", horas:[9.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic", cat:"vet", lat:35.668743, lng:-105.966826, dir:"1500 Cerrillos Road, Santa Fe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Wellness Center", cat:"vet", lat:35.665807, lng:-105.955807, dir:"1443 South Saint Francis Drive, Santa Fe", tel:"+1-505-988-2440", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Cedarwood Veterinary", cat:"vet", lat:35.659819, lng:-105.966963, dir:"2001 Saint Michaels Drive, Santa Fe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Montecito Memory Care", cat:"vet", lat:35.637726, lng:-105.95178, dir:"450 Rodeo Road, Santa Fe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mosaic Animal Emergency & Specialty Hospital", cat:"vet", lat:35.638053, lng:-105.960437, dir:"2001 Vivigen Way, Santa Fe", tel:"+1-505-984-0625", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Smith Veterinary Hospital", cat:"vet", lat:35.669935, lng:-105.951291, dir:"600 Alta Vista Street, Santa Fe", tel:"+1-505-982-4418", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital Santa Fe", cat:"vet", lat:35.65781, lng:-105.961881, dir:"1882 Plaza del Sur Drive, Santa Fe", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "saratoga-springs-utah": {nombre:"Saratoga Springs", centro:[40.386279, -111.913019], tz:"America/Denver", lugares:[
  {n:"Dock Park Dog Park", cat:"parque", lat:40.369124, lng:-111.889958, dir:"1041 Dogwatch Drive, Saratoga Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northshore Apartments Dog Park", cat:"parque", lat:40.365123, lng:-111.893947, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Willow Park Dog Park", cat:"parque", lat:40.393473, lng:-111.901019, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pooch Cuts and Bathing", cat:"peluqueria", lat:40.385165, lng:-111.914591, dir:"1292 North Redwood Road, Saratoga Springs", tel:"+1-385-352-7743", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.377863, lng:-111.919207, dir:"891 North Redwood Road, Saratoga Springs", tel:"+1-801-768-6050", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.384771, lng:-111.918677, dir:"1233 North Lake Drive, Saratoga Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Riverside Pet Care", cat:"vet", lat:40.381571, lng:-111.915158, dir:"1068 North Redwood Road, Saratoga Springs", tel:"+1-385-425-6444", horas:[8.5, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Saratoga Springs Animal Hospital", cat:"vet", lat:40.391021, lng:-111.920906, dir:"1527 North Exchange Drive, Saratoga Springs", horas:[8.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Vital Veterinary", cat:"vet", lat:40.361655, lng:-111.974935, dir:"3587 East Pony Express Parkway, Saratoga Springs", tel:"+1-385-567-7934", horas:[15.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Curiosity Farms", cat:"zoo", lat:40.423114, lng:-111.889569, dir:"2502 West Wildflower Lane, Saratoga Springs", tel:"+1-801-768-2300", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "saratoga-wyoming": {nombre:"Saratoga", centro:[41.454638, -106.805364], tz:"America/Denver", lugares:[
  {n:"Happy Tails Boarding & Grooming", cat:"vet", lat:41.469781, lng:-106.800814, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "scipio-utah": {nombre:"Scipio", centro:[39.245522, -112.104296], tz:"America/Denver", lugares:[
  {n:"Eagle's Landing Petting Zoo", cat:"zoo", lat:39.254848, lng:-112.117383, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "scottsdale": {nombre:"Scottsdale", centro:[33.494219, -111.926018], tz:"America/Phoenix", lugares:[
  {n:"Chaparral Dog Park", cat:"parque", lat:33.522905, lng:-111.907894, dir:"5777 North Hayden Road, Scottsdale", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Optima Scottsdale Dog Run", cat:"parque", lat:33.508024, lng:-111.926613, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oh My Dog!", cat:"peluqueria", lat:33.499507, lng:-111.927159, dir:"7137 East Stetson Drive, Scottsdale", tel:"+1-480-874-1200", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Dogs Etc.", cat:"tienda", lat:33.498516, lng:-111.926939, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.474978, lng:-111.984218, dir:"4535 East Thomas Road, Scottsdale", tel:"+1-602-840-9113", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.499986, lng:-111.919216, dir:"4380 North Miller Road, Scottsdale", tel:"+1-480-429-4519", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Adobe Animal Hospital", cat:"vet", lat:33.495288, lng:-111.914629, dir:"7712 East Indian School Road, Scottsdale", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Aztec Animal Hospital", cat:"vet", lat:33.466243, lng:-111.905086, dir:"8140 East McDowell Road, Scottsdale", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ingleside Animal Hospital", cat:"vet", lat:33.47939, lng:-111.976135, dir:"4855 East Thomas Road, Scottsdale", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scottsdale Cat Clinic", cat:"vet", lat:33.494145, lng:-111.917775, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "security": {nombre:"Security", centro:[38.758329, -104.743028], tz:"America/Denver", lugares:[
  {n:"Garden of the Dogs", cat:"parque", lat:38.824638, lng:-104.693853, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Just Wash Dog Grooming & Retail", cat:"peluqueria", lat:38.811988, lng:-104.746609, dir:"1457 South Murray Boulevard, Security", tel:"+1-719-205-5678", horas:[9.5, 14.5], nota:"Dato de OpenStreetMap"},
  {n:"Okey Doggy Wash and Groom", cat:"peluqueria", lat:38.78861, lng:-104.753321, dir:"3017 Jet Wing Drive, Security", tel:"+1-719-304-9513", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bradley Stables", cat:"refugio", lat:38.771038, lng:-104.751833, dir:"4070 Bradley Road, Security", horas:[6.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Ridgewood Animal Hospital", cat:"vet", lat:38.795241, lng:-104.760107, dir:"3730 Astrozon Boulevard, Security", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sedona": {nombre:"Sedona", centro:[34.868861, -111.761439], tz:"America/Phoenix", lugares:[
  {n:"Sedona Dog Park", cat:"parque", lat:34.870613, lng:-111.783333, dir:"950 Soldier Pass Road, Sedona", tel:"+1-928-203-5057", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:34.864731, lng:-111.801539, dir:"2356 West State Route 89A, Sedona", tel:"+1-928-282-8572", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Oak Creek Small Animal Clinic", cat:"vet", lat:34.859693, lng:-111.818202, dir:"5 Pinon Drive, Sedona", tel:"+1-928-282-1195", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "severance": {nombre:"Severance", centro:[40.523162, -104.850919], tz:"America/Denver", lugares:[
  {n:"Severance Dog Park", cat:"parque", lat:40.516899, lng:-104.851734, dir:"525 Vivian Street, Severance", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Platte Valley Veternary", cat:"vet", lat:40.522993, lng:-104.855581, dir:"231 West 4th Avenue, Severance", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "shelley": {nombre:"Shelley", centro:[43.37998, -112.126914], tz:"America/Denver", lugares:[
  {n:"The Hound Haus", cat:"peluqueria", lat:43.390872, lng:-112.122941, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sheridan-colorado": {nombre:"Sheridan", centro:[39.646929, -105.025058], tz:"America/Denver", lugares:[
  {n:"Northwest Greenbelt Off-Leash Dog Park", cat:"parque", lat:39.669469, lng:-105.013375, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Brentwood Animal Hospital", cat:"vet", lat:39.663906, lng:-105.024802, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Overland Animal Hospital", cat:"vet", lat:39.688922, lng:-105.019382, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sheridan-wyoming": {nombre:"Sheridan", centro:[44.797194, -106.956179], tz:"America/Denver", lugares:[
  {n:"Huntington Dog Park", cat:"parque", lat:44.786141, lng:-106.961861, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lions Dog Park", cat:"parque", lat:44.80346, lng:-106.948948, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West 16th Street Dog Park", cat:"parque", lat:44.819179, lng:-106.960616, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sheridan Cat and Dog Shelter", cat:"refugio", lat:44.794324, lng:-106.927994, dir:"84 E East Ridge Road, Sheridan", tel:"+1-307-674-7694", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:44.778179, lng:-106.939742, dir:"1820 Sugarland Drive, Sheridan", tel:"+1-307-672-1798", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "shoshone": {nombre:"Shoshone", centro:[42.936129, -114.406017], tz:"America/Denver", lugares:[
  {n:"Shoshone Veterinary Hospital", cat:"vet", lat:42.940359, lng:-114.404636, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "show-low": {nombre:"Show Low", centro:[34.254208, -110.029832], tz:"America/Phoenix", lugares:[
  {n:"Deuce of Dogs", cat:"parque", lat:34.242506, lng:-110.057998, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Perfect Paws", cat:"tienda", lat:34.252922, lng:-110.032734, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sierra-vista": {nombre:"Sierra Vista", centro:[31.564769, -110.274299], tz:"America/Phoenix", lugares:[
  {n:"Nancy J. Brua Animal Care Center", cat:"refugio", lat:31.555289, lng:-110.20553, dir:"6799 East Highway 90, Sierra Vista", tel:"+1-520-458-4151", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:31.557246, lng:-110.254182, dir:"4267 East Highway 90, Sierra Vista", tel:"+1-520-439-2820", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "silver-city-new-mexico": {nombre:"Silver City", centro:[32.771183, -108.276416], tz:"America/Denver", lugares:[
  {n:"High Desert Humane Society Animal Shelter", cat:"refugio", lat:32.755299, lng:-108.282887, dir:"3050 Cougar Way, Silver City", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "silver-cliff": {nombre:"Silver Cliff", centro:[38.135297, -105.446455], tz:"America/Denver", lugares:[
  {n:"Dundee Dog Park", cat:"parque", lat:38.134184, lng:-105.438803, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"High Peaks Animal Hospital", cat:"vet", lat:38.133215, lng:-105.437833, dir:"1200 Broadway Street, Silver Cliff", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Cliffes Veterinary Clinic", cat:"vet", lat:38.135407, lng:-105.45415, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "silver-springs": {nombre:"Silver Springs", centro:[39.415683, -119.223988], tz:"America/Los_Angeles", lugares:[
  {n:"Paws Spa", cat:"peluqueria", lat:39.407933, lng:-119.22599, dir:"1250 Nevada Ave, Silver Springs", tel:"+1-775-300-4139", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "smoot": {nombre:"Smoot", centro:[42.620446, -110.913979], tz:"America/Denver", lugares:[
  {n:"Cottonwood Creek Veterinary", cat:"vet", lat:42.623401, lng:-110.915207, dir:"77837 US 89, Smoot", tel:"+1-307-886-5517", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "snyderville": {nombre:"Snyderville", centro:[40.69444, -111.54379], tz:"America/Denver", lugares:[
  {n:"Trailside Dog Park", cat:"parque", lat:40.712536, lng:-111.504257, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Doginhaus Grooming", cat:"peluqueria", lat:40.74834, lng:-111.564152, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Nuzzles & Co", cat:"tienda", lat:40.727628, lng:-111.549977, dir:"6699 Landmark Drive, Snyderville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Powder Paws", cat:"vet", lat:40.748041, lng:-111.564488, dir:"2780 Rasmussen Road, Snyderville", tel:"+1-435-649-1221", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "socorro": {nombre:"Socorro", centro:[34.057286, -106.89308], tz:"America/Denver", lugares:[
  {n:"Socorro Animal Shelter and Adoption Center", cat:"refugio", lat:34.024268, lng:-106.895967, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southwest Feed", cat:"tienda", lat:34.061169, lng:-106.891508, dir:"408 California Street, Socorro", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Haven Veterinary Clinic", cat:"vet", lat:34.084302, lng:-106.896731, dir:"1433 Northwest Frontage Road, Socorro", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ark of Socorro Veterinary Clinic", cat:"vet", lat:34.033315, lng:-106.916941, dir:"1302 Enterprise, Socorro", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "somerton": {nombre:"Somerton", centro:[32.596586, -114.709733], tz:"America/Phoenix", lugares:[
  {n:"The Pet Clinic", cat:"vet", lat:32.596246, lng:-114.701687, dir:"725 East Main Street, Somerton", tel:"+1-928-315-6600", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "south-greeley": {nombre:"South Greeley", centro:[41.102272, -104.805097], tz:"America/Denver", lugares:[
  {n:"Nancy Mockler Community Dog Park", cat:"parque", lat:41.111794, lng:-104.845927, dir:"800 Southwest Drive, South Greeley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cheyenne Animal Shelter", cat:"refugio", lat:41.110638, lng:-104.845936, dir:"800 Southwest Drive, South Greeley", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "south-jordan": {nombre:"South Jordan", centro:[40.558488, -111.936711], tz:"America/Denver", lugares:[
  {n:"Awash and Groom", cat:"peluqueria", lat:40.573672, lng:-111.97836, dir:"3684 West Skye Drive, South Jordan", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Spawt", cat:"peluqueria", lat:40.543855, lng:-111.935098, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Jordan Animal Shelter", cat:"refugio", lat:40.553537, lng:-111.943215, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.53989, lng:-111.977721, dir:"11639 South Parkway Plaza Drive, South Jordan", tel:"+1-801-302-3341", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"A Gentle Vet", cat:"vet", lat:40.573783, lng:-111.978359, dir:"3694 West Skye Drive, South Jordan", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-ogden": {nombre:"South Ogden", centro:[41.191278, -111.967863], tz:"America/Denver", lugares:[
  {n:"South Ogden Dog Park", cat:"parque", lat:41.187134, lng:-111.97978, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tailored Tails", cat:"vet", lat:41.184914, lng:-111.950502, dir:"4277 Harrison Boulevard, South Ogden", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-salt-lake": {nombre:"South Salt Lake", centro:[40.707474, -111.88827], tz:"America/Denver", lugares:[
  {n:"Lions Dog Park", cat:"parque", lat:40.717846, lng:-111.880576, dir:"311 East Robert Avenue, South Salt Lake", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Meowser", cat:"peluqueria", lat:40.696211, lng:-111.894333, dir:"3458 South West Temple, South Salt Lake", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pups ‘R’ Us", cat:"peluqueria", lat:40.721356, lng:-111.890642, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sydnee's Pet Grooming", cat:"peluqueria", lat:40.722838, lng:-111.872415, dir:"660 East Wilmington Avenue, South Salt Lake", tel:"+1-385-229-4891", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Central Park", cat:"refugio", lat:40.702093, lng:-111.889907, tel:"+1-801-487-6228", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fluffs and Friends", cat:"refugio", lat:40.688335, lng:-111.887794, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Healthy Pets", cat:"tienda", lat:40.731365, lng:-111.859881, dir:"1790 South 1100 East, South Salt Lake", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Door Products", cat:"tienda", lat:40.704371, lng:-111.904624, dir:"3052 South Davis Drive, South Salt Lake", tel:"+1-801-973-8000", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.729436, lng:-111.902251, dir:"389 West 1830 South, South Salt Lake", tel:"+1-801-466-0313", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Highland Park Pet Hospital", cat:"vet", lat:40.724106, lng:-111.865647, dir:"2148 South 900 East, South Salt Lake", tel:"+1-385-243-2273", horas:[8.0, 13.0], nota:"Dato de OpenStreetMap"},
  {n:"MedVet", cat:"vet", lat:40.719176, lng:-111.900171, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "south-tucson": {nombre:"South Tucson", centro:[32.199495, -110.968343], tz:"America/Phoenix", lugares:[
  {n:"Miko's Corner Playground", cat:"parque", lat:32.210162, lng:-110.925766, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"And Toto Too", cat:"peluqueria", lat:32.220442, lng:-110.810867, dir:"8484 East Broadway Boulevard, South Tucson", tel:"+1-520-290-9923", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Avenue Dog Wash", cat:"peluqueria", lat:32.234758, lng:-110.824455, dir:"1011 North Pantano Road, South Tucson", tel:"+1-520-546-2275", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Posh Paws Grooming", cat:"peluqueria", lat:32.221999, lng:-110.787865, dir:"60 North Harrison Road, South Tucson", tel:"+1-520-546-5706", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Top Paw Grooming, LLC", cat:"peluqueria", lat:32.234521, lng:-110.841444, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Velvet Bow Pet Grooming", cat:"peluqueria", lat:32.193533, lng:-110.790225, dir:"2406 South Harrison Road, South Tucson", tel:"+1-520-999-2887", horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:32.220383, lng:-110.825846, dir:"7810 East Broadway Boulevard, South Tucson", tel:"+1-520-536-1361", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogs N Donuts", cat:"tienda", lat:32.222532, lng:-110.825853, dir:"7743 East Broadway Boulevard, South Tucson", tel:"+1-520-722-1640", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ever Evolving Exotics", cat:"tienda", lat:32.220683, lng:-110.835718, dir:"7320 East Broadway Boulevard, South Tucson", tel:"+1-520-326-0114", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.222651, lng:-110.876395, dir:"5405 East Broadway Boulevard, South Tucson", tel:"+1-520-571-1772", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.22257, lng:-110.826398, dir:"7727 East Broadway Boulevard, South Tucson", tel:"+1-520-290-0776", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.158173, lng:-110.987122, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camino Seco Pet Clinic", cat:"vet", lat:32.220418, lng:-110.803653, dir:"8860 East Broadway Boulevard, South Tucson", tel:"+1-520-296-6281", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cat Hospital of Tucson", cat:"vet", lat:32.220614, lng:-110.836797, dir:"7292 East Broadway Boulevard, South Tucson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cimarron Small Animal Hospital", cat:"vet", lat:32.222907, lng:-110.789293, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dr. Kelly's Surgical Unit", cat:"vet", lat:32.220317, lng:-110.803613, dir:"8860 East Broadway Boulevard, South Tucson", tel:"+1-520-654-3755", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"El Encanto Pet Clinic", cat:"vet", lat:32.221059, lng:-110.899574, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Monument East Veterinary Hospital", cat:"vet", lat:32.234714, lng:-110.790278, dir:"1051 North Harrison Road, South Tucson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sonoran Veterinary Center", cat:"vet", lat:32.23622, lng:-110.829419, dir:"7637 East Speedway Boulevard, South Tucson", tel:"+1-520-886-8888", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tucson Small Animal Hospital", cat:"vet", lat:32.2203, lng:-110.841492, dir:"22 South Kolb Road, South Tucson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet", cat:"vet", lat:32.222807, lng:-110.82445, dir:"105 North Pantano Road, South Tucson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:32.192449, lng:-110.790301, dir:"2560 South Harrison Road, South Tucson", tel:"+1-520-885-2364", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital and Emergency Room", cat:"vet", lat:32.206567, lng:-110.885422, dir:"4984 East 22nd Street, South Tucson", tel:"+1-520-748-0331", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Emergency Room", cat:"vet", lat:32.206562, lng:-110.885719, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Reid Park Zoo", cat:"zoo", lat:32.20864, lng:-110.920213, horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "south-valley": {nombre:"South Valley", centro:[35.02464, -106.677124], tz:"America/Denver", lugares:[
  {n:"Aperture Bark", cat:"parque", lat:34.986058, lng:-106.614058, dir:"5801 University Boulevard Southeast, South Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Westgate Dog Park", cat:"parque", lat:35.045844, lng:-106.74363, dir:"1901 Valley View Drive Southwest, South Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City of Albuquerque Animal Wellfare Department Westside Animal Service Center", cat:"refugio", lat:35.065107, lng:-106.760637, dir:"11800 Sunset Gardens Road Southwest, South Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rio Bravo Veterinary Hospital", cat:"vet", lat:35.026314, lng:-106.653446, dir:"240 Rio Bravo Boulevard Southeast, South Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"South Valley Animal Clinic", cat:"vet", lat:35.016881, lng:-106.684965, dir:"4021 Isleta Boulevard Southwest, South Valley", tel:"+1-505-807-9985", horas:[8.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "south-weber": {nombre:"South Weber", centro:[41.13444, -111.943354], tz:"America/Denver", lugares:[
  {n:"Uptown Bark", cat:"peluqueria", lat:41.10003, lng:-111.942442, dir:"1330 East Hwy 193, South Weber", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mountain View Animal Clinic", cat:"vet", lat:41.103172, lng:-111.951172, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "spanish-fork": {nombre:"Spanish Fork", centro:[40.115013, -111.654777], tz:"America/Denver", lugares:[
  {n:"Spanish Fork Dog Park", cat:"parque", lat:40.104003, lng:-111.64323, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Grooming Salon", cat:"peluqueria", lat:40.133026, lng:-111.65509, tel:"+1-385-310-3404", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scenthound", cat:"peluqueria", lat:40.123187, lng:-111.654167, dir:"31 East 1000 North, Spanish Fork", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.123599, lng:-111.640568, dir:"1118 North Canyon Creek Parkway, Spanish Fork", tel:"+1-801-504-0423", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "sparks-nevada": {nombre:"Sparks", centro:[39.534902, -119.754279], tz:"America/Los_Angeles", lugares:[
  {n:"Frontera Community Dog Park", cat:"parque", lat:39.578373, lng:-119.701597, dir:"Snow Canyon Dr, Sparks", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Just Dog Grooming", cat:"peluqueria", lat:39.536868, lng:-119.768222, dir:"1845 Prater Way, Sparks", tel:"+1-775-384-4566", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spoiled Petz", cat:"peluqueria", lat:39.477594, lng:-119.762989, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Station", cat:"tienda", lat:39.555306, lng:-119.72331, dir:"1219 Baring Boulevard, Sparks", tel:"+1-775-331-5500", horas:[10.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Station", cat:"tienda", lat:39.439636, lng:-119.760578, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.535396, lng:-119.719131, dir:"1320 East Lincoln Way, Sparks", tel:"+1-775-386-1025", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.558126, lng:-119.781141, dir:"2970 Northtowne Lane, Sparks", tel:"+1-775-673-9200", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Advanced PetCare", cat:"vet", lat:39.536335, lng:-119.770725, horas:[7.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "spring-valley-nevada": {nombre:"Spring Valley", centro:[36.106962, -115.243026], tz:"America/Los_Angeles", lugares:[
  {n:"Lt. Erik Lloyd Memorial Dog Park", cat:"parque", lat:36.076675, lng:-115.303418, dir:"9665 W Patrick Ln, Spring Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Big Foot Pet Grooming", cat:"peluqueria", lat:36.172151, lng:-115.243304, dir:"101B South Rainbow Boulevard, Spring Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:36.071794, lng:-115.298676, dir:"6415 South Fort Apache Road, Spring Valley", tel:"+1-702-659-5169", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Hearts Alive Village Cat Café", cat:"refugio", lat:36.153314, lng:-115.242613, dir:"1750 South Rainbow Boulevard, Spring Valley", horas:[11.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Hearts Alive Village Dog Den", cat:"refugio", lat:36.153101, lng:-115.242477, dir:"1750 South Rainbow Boulevard, Spring Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Diamond Pets", cat:"tienda", lat:36.172182, lng:-115.242894, dir:"101B South Rainbow Boulevard, Spring Valley", tel:"+1-702-462-4417", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.054165, lng:-115.276683, dir:"8495 West Warm Springs Road, Spring Valley", tel:"+1-702-791-7038", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.12397, lng:-115.243776, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.095014, lng:-115.294292, dir:"5160 South Fort Apache Road, Spring Valley", tel:"+1-702-253-1431", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.064808, lng:-115.245309, dir:"7050 Arroyo Crossing Parkway, Spring Valley", tel:"+1-702-407-0330", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Puppy Town", cat:"tienda", lat:36.126877, lng:-115.242127, dir:"6870 Spring Mountain Road, Spring Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Reptiles", cat:"tienda", lat:36.15956, lng:-115.245532, dir:"6836 West Charleston Boulevard, Spring Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dapper Dogs Salon", cat:"vet", lat:36.159718, lng:-115.25176, dir:"7020 West Charleston Boulevard, Spring Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Mauer Animal Clinic", cat:"vet", lat:36.158761, lng:-115.224553, dir:"6115 West Charleston Boulevard, Spring Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rainbow Animal Hospital", cat:"vet", lat:36.171106, lng:-115.244882, dir:"244 South Rainbow Boulevard, Spring Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Southern Hills Animal Hospital", cat:"vet", lat:36.06944, lng:-115.298718, dir:"6545 South Fort Apache Road, Spring Valley", tel:"+1-702-586-1300", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "st-george": {nombre:"St. George", centro:[37.109877, -113.583206], tz:"America/Denver", lugares:[
  {n:"Dog Wash", cat:"peluqueria", lat:37.098802, lng:-113.54107, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart Grooming", cat:"peluqueria", lat:37.108525, lng:-113.55333, dir:"15 S River Rd, St. George", tel:"+1-435-673-2848", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"P.A.W.S. Adoption Center", cat:"refugio", lat:37.127504, lng:-113.607715, dir:"1125 1130 N, St. George", tel:"+1-435-688-9748", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Red Rock Pet Resort", cat:"refugio", lat:37.110429, lng:-113.565737, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"St George Animal Shelter", cat:"refugio", lat:37.114101, lng:-113.570673, horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Antics", cat:"tienda", lat:37.120109, lng:-113.599319, dir:"695 North Bluff Street, St. George", tel:"+1-435-673-6617", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Cedar Pet Suppply", cat:"tienda", lat:37.11275, lng:-113.553375, tel:"+1-435-296-6466", horas:[11.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:37.092936, lng:-113.584952, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:37.10845, lng:-113.553334, dir:"15 S River Rd, St. George", tel:"+1-435-673-2848", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Whisker & Bone", cat:"tienda", lat:37.10777, lng:-113.561621, dir:"1028 #3 Tabernacle Street, St. George", tel:"+1-435-674-2157", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Clinic of St. George", cat:"vet", lat:37.108306, lng:-113.56525, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Hospital", cat:"vet", lat:37.107335, lng:-113.59261, dir:"55 South Bluff Street, St. George", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Desert Hills Animal Hospital", cat:"vet", lat:37.052557, lng:-113.565384, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Red Hills Animal Hospital", cat:"vet", lat:37.096927, lng:-113.560392, horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Southwest Animal Emergency Clinic", cat:"vet", lat:37.10848, lng:-113.560837, horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "stansbury-park": {nombre:"Stansbury Park", centro:[40.637721, -112.29606], tz:"America/Denver", lugares:[
  {n:"Kibbles and Cuts", cat:"peluqueria", lat:40.645123, lng:-112.289648, dir:"220 Millpond Drive, Stansbury Park", tel:"+1-435-843-8700", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Stansbury Animal Hospital", cat:"vet", lat:40.645621, lng:-112.290274, dir:"6422 North Gateway Drive, Stansbury Park", tel:"+1-435-843-0341", horas:[8.5, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "star": {nombre:"Star", centro:[43.692107, -116.493463], tz:"America/Denver", lugares:[
  {n:"Eagle Ridge Dog Park", cat:"parque", lat:43.709518, lng:-116.456692, dir:"8097 West Broken Arrow Street, Star", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Waggin' Tails Dog Park", cat:"parque", lat:43.702561, lng:-116.496185, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Dog's Day Out", cat:"peluqueria", lat:43.692302, lng:-116.475147, dir:"9738 West State Street, Star", tel:"+1-208-348-5477", horas:[7.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Star Veterinary Clinic", cat:"vet", lat:43.692211, lng:-116.482674, dir:"10334 West State Street, Star", tel:"+1-208-286-0440", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stateline": {nombre:"Stateline", centro:[47.704725, -117.037372], tz:"America/Los_Angeles", lugares:[
  {n:"One Love Animal Hospital", cat:"vet", lat:47.705661, lng:-117.028521, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "steamboat-springs": {nombre:"Steamboat Springs", centro:[40.4848, -106.831735], tz:"America/Denver", lugares:[
  {n:"Rita Valentine Park", cat:"parque", lat:40.470934, lng:-106.817353, dir:"1010 Anglers Drive, Steamboat Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spring creek dog park", cat:"parque", lat:40.488694, lng:-106.808539, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Red Rover Resort", cat:"refugio", lat:40.46849, lng:-107.010146, dir:"37700 County Road 49, Steamboat Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paws 'N Claws All Things Pets", cat:"tienda", lat:40.462595, lng:-106.820718, dir:"1835 Central Park Drive, Steamboat Springs", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Ski Town Vet Hospital", cat:"vet", lat:40.441899, lng:-106.816418, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sterling-ranch": {nombre:"Sterling Ranch", centro:[39.4926, -105.037213], tz:"America/Denver", lugares:[
  {n:"Savoy Stables", cat:"refugio", lat:39.509281, lng:-105.057998, dir:"9249 Rangeview Lane, Sterling Ranch", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "stevensville-montana": {nombre:"Stevensville", centro:[46.510407, -114.094385], tz:"America/Denver", lugares:[
  {n:"Bitterroot Pet Palace", cat:"peluqueria", lat:46.533981, lng:-114.108891, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "strasburg": {nombre:"Strasburg", centro:[39.738189, -104.323851], tz:"America/Denver", lugares:[
  {n:"Strasburg Veterinary Clinic", cat:"vet", lat:39.73889, lng:-104.330158, dir:"56151 East Colfax Avenue, Strasburg", tel:"+1-303-622-4415", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "sugar-city-idaho": {nombre:"Sugar City", centro:[43.87302, -111.747947], tz:"America/Denver", lugares:[
  {n:"Yellowstone Safari Park", cat:"zoo", lat:43.885403, lng:-111.823005, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "summerlin-south": {nombre:"Summerlin South", centro:[36.153257, -115.33112], tz:"America/Los_Angeles", lugares:[
  {n:"Barkin' Basin Dog Park", cat:"parque", lat:36.230659, lng:-115.253052, dir:"North Tenaya Way, Summerlin South", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lone Mountain Dog Park", cat:"parque", lat:36.240783, lng:-115.310013, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sunstone Aria Dog Park", cat:"parque", lat:36.325182, lng:-115.301128, dir:"9386 Aria Ridge Avenue, Summerlin South", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Winding Trails Dog Park", cat:"parque", lat:36.292495, lng:-115.296162, dir:"7250 North Fort Apache Road, Summerlin South", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bark Place Grooming", cat:"peluqueria", lat:36.278041, lng:-115.287431, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Groomer Has It", cat:"peluqueria", lat:36.291457, lng:-115.315814, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paw-Fect Pet Salon", cat:"peluqueria", lat:36.125384, lng:-115.297977, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petiamo Pet Salon", cat:"peluqueria", lat:36.159997, lng:-115.349983, dir:"11700 West Charleston Boulevard, Summerlin South", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Piggy Tails!", cat:"peluqueria", lat:36.296299, lng:-115.288518, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:36.207394, lng:-115.30272, dir:"9436 West Lake Mead Boulevard, Summerlin South", tel:"+1-702-505-9478", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.145956, lng:-115.314663, dir:"10000 West Sahara Avenue, Summerlin South", tel:"+1-702-341-0142", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:36.161608, lng:-115.288983, dir:"8800 West Charleston Boulevard, Summerlin South", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.28122, lng:-115.28404, dir:"6650 North Durango Drive, Summerlin South", tel:"+1-702-839-0479", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.157829, lng:-115.310895, dir:"9775 West Charleston Boulevard, Summerlin South", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tack U Feed", cat:"tienda", lat:36.300708, lng:-115.284139, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Wagging Tail Pet Grocery & Supplies", cat:"tienda", lat:36.101427, lng:-115.314077, dir:"10170 West Tropicana Avenue, Summerlin South", horas:[9.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital", cat:"vet", lat:36.161468, lng:-115.288982, dir:"8800 West Charleston Boulevard, Summerlin South", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Centennial Hills Animal Hospital", cat:"vet", lat:36.297778, lng:-115.270041, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cheyenne West Animal Hospital", cat:"vet", lat:36.226351, lng:-115.259959, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gateway Pet Hospital", cat:"vet", lat:36.263569, lng:-115.258385, dir:"5643 Centennial Center Boulevard, Summerlin South", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Las Vegas Vet Center", cat:"vet", lat:36.179146, lng:-115.255589, dir:"7455 West Washington Avenue, Summerlin South", tel:"+1-702-791-9170", horas:[8.0, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"Red Rock Animal Hospital", cat:"vet", lat:36.16042, lng:-115.350069, dir:"11700 West Charleston Boulevard, Summerlin South", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Gilcrease Nature Sanctuary", cat:"zoo", lat:36.309251, lng:-115.273079, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sun-city": {nombre:"Sun City", centro:[33.629011, -112.281933], tz:"America/Phoenix", lugares:[
  {n:"Bark Park", cat:"parque", lat:33.605067, lng:-112.260708, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Puff & Fluff Grooming", cat:"peluqueria", lat:33.666862, lng:-112.201649, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Twin Tails Cageless Grooming", cat:"peluqueria", lat:33.711309, lng:-112.200076, horas:[7.5, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"Every Doggie Has Its DayCare", cat:"refugio", lat:33.658333, lng:-112.236117, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Beasts of Prey Reptiles", cat:"tienda", lat:33.65412, lng:-112.234038, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"My Pet Market", cat:"tienda", lat:33.666101, lng:-112.20564, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.63996, lng:-112.215563, dir:"7290 West Bell Road, Sun City", tel:"+1-623-334-3600", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Puppies 'N Love", cat:"tienda", lat:33.641907, lng:-112.223765, dir:"7750 West Bell Road, Sun City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Apollo North Animal Hospital", cat:"vet", lat:33.666857, lng:-112.18772, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.640139, lng:-112.215671, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Beardsley Animal Hospital", cat:"vet", lat:33.669188, lng:-112.187394, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BluePearl", cat:"vet", lat:33.664907, lng:-112.201712, dir:"20165 North 67th Avenue, Sun City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - Arrowhead Ranch", cat:"vet", lat:33.68335, lng:-112.204718, dir:"6750 West Deer Valley Road, Sun City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - Fletcher Heights", cat:"vet", lat:33.680907, lng:-112.239683, dir:"8385 West Deer Valley Road, Sun City", tel:"+1-623-376-7125", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - Happy Valley", cat:"vet", lat:33.710794, lng:-112.200619, dir:"6615 West West Wind Drive, Sun City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - Westbrook", cat:"vet", lat:33.651402, lng:-112.25561, dir:"9163 West Union Hills Drive, Sun City", tel:"+1-623-825-9170", horas:[7.5, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Midwestern University Companion Animal Clinic", cat:"vet", lat:33.660941, lng:-112.181337, dir:"5715 West Utopia Road, Sun City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Midwestern University Large Animal Clinic", cat:"vet", lat:33.660077, lng:-112.181443, dir:"5725 West Utopia Road, Sun City", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sun-city-west": {nombre:"Sun City West", centro:[33.669187, -112.349807], tz:"America/Phoenix", lugares:[
  {n:"Large Dogs", cat:"parque", lat:33.66523, lng:-112.353968, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Paloma Dog Parks", cat:"parque", lat:33.747979, lng:-112.246151, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dogs", cat:"parque", lat:33.66543, lng:-112.354561, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Planet", cat:"tienda", lat:33.713676, lng:-112.267998, dir:"25355 North Lake Pleasant Parkway, Sun City West", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.714095, lng:-112.273831, dir:"25372 North Lake Pleasant Parkway, Sun City West", tel:"+1-623-362-8067", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Vistancia Animal Hospital", cat:"vet", lat:33.742428, lng:-112.323215, horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "sun-lakes": {nombre:"Sun Lakes", centro:[33.211162, -111.875416], tz:"America/Phoenix", lugares:[
  {n:"Paseo Vista Dog Park", cat:"parque", lat:33.24872, lng:-111.825531, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kellys Kritter Clips", cat:"peluqueria", lat:33.218519, lng:-111.873616, dir:"9670 East Riggs Road, Sun Lakes", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pampered Pet Spa", cat:"peluqueria", lat:33.219387, lng:-111.82454, dir:"990 East Riggs Road, Sun Lakes", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"HeartStrings Pet Resort", cat:"refugio", lat:33.219673, lng:-111.825948, dir:"930 East Riggs Road, Sun Lakes", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"More Than A Groomer", cat:"tienda", lat:33.234848, lng:-111.860932, dir:"4960 South Alma School Road, Sun Lakes", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.245179, lng:-111.844381, dir:"4220 South Arizona Avenue, Sun Lakes", tel:"+1-480-802-4504", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.249423, lng:-111.838049, dir:"3939 South Arizona Avenue, Sun Lakes", tel:"+1-480-281-5506", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Medical Center of Chandler", cat:"vet", lat:33.233461, lng:-111.844365, dir:"270 West Chandler Heights Road, Sun Lakes", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.21773, lng:-111.826567, dir:"975 East Riggs Road, Sun Lakes", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"DVS Veterinary Hospital", cat:"vet", lat:33.233061, lng:-111.860188, dir:"4980 South Alma School Road, Sun Lakes", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Great Hearts Animal Hospital of Chandler", cat:"vet", lat:33.247217, lng:-111.840428, dir:"4015 South Arizona Avenue, Sun Lakes", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Life Care Animal Hospital", cat:"vet", lat:33.235994, lng:-111.791618, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sun Lakes Chandler Animal Clinic", cat:"vet", lat:33.21852, lng:-111.873469, dir:"9670 East Riggs Road, Sun Lakes", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sun-valley-nevada": {nombre:"Sun Valley", centro:[39.592351, -119.780437], tz:"America/Los_Angeles", lugares:[
  {n:"SPCA of Northern Nevada", cat:"refugio", lat:39.577567, lng:-119.808261, dir:"4950 Spectrum Boulevard, Sun Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.582346, lng:-119.738395, dir:"255 Los Altos Parkway, Sun Valley", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Reigning Cats & Dogs", cat:"tienda", lat:39.577648, lng:-119.720247, dir:"1338 Disc Drive, Sun Valley", tel:"+1-775-626-3433", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sage Veterinary Care", cat:"vet", lat:39.579004, lng:-119.717564, dir:"4840 Vista Boulevard, Sun Valley", tel:"+1-775-409-3288", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "sunrise-manor": {nombre:"Sunrise Manor", centro:[36.197298, -115.045292], tz:"America/Los_Angeles", lugares:[
  {n:"PetSmart", cat:"tienda", lat:36.163209, lng:-115.063766, dir:"171 North Nellis Boulevard, Sunrise Manor", tel:"+1-702-438-5771", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:36.163334, lng:-115.063521, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northeast Animal Hospital", cat:"vet", lat:36.195701, lng:-115.068686, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:36.159584, lng:-115.061664, dir:"20 North Nellis Boulevard, Sunrise Manor", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "sunset-utah": {nombre:"Sunset", centro:[41.136301, -112.030937], tz:"America/Denver", lugares:[
  {n:"Penny's Pet Care", cat:"tienda", lat:41.150401, lng:-112.026761, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal ER", cat:"vet", lat:41.150192, lng:-112.026761, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "superior-colorado": {nombre:"Superior", centro:[39.952763, -105.168598], tz:"America/Denver", lugares:[
  {n:"Autrey Park Dog Park", cat:"parque", lat:39.937153, lng:-105.141613, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Davidson Mesa Dog Park", cat:"parque", lat:39.978358, lng:-105.168562, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Litterbox Dog Park", cat:"parque", lat:39.927287, lng:-105.142709, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Superior large dog park", cat:"parque", lat:39.95095, lng:-105.156605, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Superior small dog park", cat:"parque", lat:39.950711, lng:-105.15664, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Black Paw", cat:"peluqueria", lat:39.964885, lng:-105.163966, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.955572, lng:-105.171031, dir:"402 Center Drive, Superior", tel:"+1-303-543-6060", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Louisville Family Animal Hospital", cat:"vet", lat:39.965597, lng:-105.161568, dir:"332 McCaslin Boulevard, Superior", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rock Creek Veterinary Hospital", cat:"vet", lat:39.929321, lng:-105.126188, dir:"605 Flatiron Marketplace Drive, Superior", tel:"+1-720-669-4200", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "surprise": {nombre:"Surprise", centro:[33.629247, -112.368143], tz:"America/Phoenix", lugares:[
  {n:"Large Dogs Park", cat:"parque", lat:33.602566, lng:-112.369102, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large-Breed Dog Park", cat:"parque", lat:33.629689, lng:-112.37255, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Large-Breed Dog Park", cat:"parque", lat:33.629442, lng:-112.443215, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dogs Park", cat:"parque", lat:33.602591, lng:-112.36844, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small-Breed Dog Park", cat:"parque", lat:33.630425, lng:-112.372633, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small-Breed Dog Park", cat:"parque", lat:33.629549, lng:-112.443613, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.640889, lng:-112.356748, dir:"13764 West Bell Road, Surprise", tel:"+1-623-546-8500", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.606218, lng:-112.416645, dir:"13410 North Prasada Parkway, Surprise", tel:"+1-623-336-6060", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.640923, lng:-112.356619, dir:"13764 West Bell Road, Surprise", tel:"+1-623-223-8756", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - Surprise", cat:"vet", lat:33.610926, lng:-112.36029, dir:"13954 West Waddell Road, Surprise", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - White Tanks", cat:"vet", lat:33.625726, lng:-112.415094, dir:"16578 West Greenway Road, Surprise", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Urgent PetCare", cat:"vet", lat:33.640991, lng:-112.358973, dir:"17255 North Litchfield Road, Surprise", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "swink": {nombre:"Swink", centro:[38.014591, -103.628471], tz:"America/Denver", lugares:[
  {n:"Ark Valley Animal Hospital", cat:"vet", lat:37.999123, lng:-103.590016, dir:"3 Rogers Road, Swink", tel:"+1-719-383-2824", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "syracuse-utah": {nombre:"Syracuse", centro:[41.089594, -112.06389], tz:"America/Denver", lugares:[
  {n:"Antelope Animal Hospital", cat:"vet", lat:41.089421, lng:-112.053082, dir:"1412 West 1700 South, Syracuse", tel:"+1-801-779-7970", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "taos-new-mexico": {nombre:"Taos", centro:[36.407238, -105.573284], tz:"America/Denver", lugares:[
  {n:"Doggy Shop Grooming", cat:"peluqueria", lat:36.383526, lng:-105.58597, dir:"1033 Paseo del Pueblo Sur, Taos", tel:"+1-575-741-5352", horas:[9.0, 16.0], nota:"Dato de OpenStreetMap"},
  {n:"10000 Wags", cat:"refugio", lat:36.459699, lng:-105.636012, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Taos Tack and Pet Supply", cat:"tienda", lat:36.392508, lng:-105.582852, dir:"710 Paseo del Pueblo Sur, Taos", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "taylorsville-utah": {nombre:"Taylorsville", centro:[40.667635, -111.938803], tz:"America/Denver", lugares:[
  {n:"Millrace Dog Park", cat:"parque", lat:40.653852, lng:-111.924645, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All About Dogs", cat:"peluqueria", lat:40.668952, lng:-111.957163, dir:"2656 West 4700 South, Taylorsville", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Mark's Ark", cat:"tienda", lat:40.66339, lng:-111.938062, dir:"4875 South Redwood Road, Taylorsville", tel:"+1-801-261-0466", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.654454, lng:-111.940552, dir:"1786 West 5400 South, Taylorsville", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.647126, lng:-111.942583, dir:"5748 South Redwood Road, Taylorsville", tel:"+1-801-840-2236", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Redwood Veterinary Hospital", cat:"vet", lat:40.661444, lng:-111.939402, dir:"4958 South Redwood Road, Taylorsville", tel:"+1-801-966-3974", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"UrgentVet", cat:"vet", lat:40.651606, lng:-111.942076, dir:"5478 South Redwood Road, Taylorsville", tel:"+1-801-796-5050", horas:[15.0, 23.0], nota:"Dato de OpenStreetMap"},
  {n:"VCA All Pet Animal Hospital", cat:"vet", lat:40.66832, lng:-111.954804, dir:"2530 West 4700 South, Taylorsville", tel:"+1-801-966-4700", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "telluride": {nombre:"Telluride", centro:[37.937494, -107.812285], tz:"America/Denver", lugares:[
  {n:"Dirt Dawg Co", cat:"tienda", lat:37.936928, lng:-107.809266, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Telluride", cat:"tienda", lat:37.936538, lng:-107.808954, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tempe": {nombre:"Tempe", centro:[33.425512, -111.940016], tz:"America/Phoenix", lugares:[
  {n:"All 4 Paws Training", cat:"parque", lat:33.391972, lng:-111.893405, dir:"3330 South Price Road, Tempe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camden Tempe Dog Park", cat:"parque", lat:33.442377, lng:-111.930986, dir:"1235 N College Ave, Tempe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Culdesac Dog Park", cat:"parque", lat:33.413234, lng:-111.898276, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Culdesac Dog Park", cat:"parque", lat:33.413907, lng:-111.899085, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Papago Dog Park", cat:"parque", lat:33.438286, lng:-111.931254, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fancy Pets", cat:"peluqueria", lat:33.392152, lng:-111.910995, dir:"3310 South McClintock Drive, Tempe", tel:"+1-480-897-7734", horas:[7.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Green Bulldog Dog Wash", cat:"peluqueria", lat:33.4421, lng:-111.927742, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scooby Do's Pet Grooming", cat:"peluqueria", lat:33.40778, lng:-111.953656, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wagging Tails Pet Resort", cat:"peluqueria", lat:33.393327, lng:-111.89779, dir:"2066 East Southern Avenue, Tempe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"All Phase K9 Tactical", cat:"refugio", lat:33.412522, lng:-111.997154, dir:"3901 East Anne Street, Tempe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Arizona Humane Society Rob & Melani Walton Papago Park", cat:"refugio", lat:33.449795, lng:-111.962773, dir:"5501 East Van Buren Street, Tempe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dogtopia", cat:"refugio", lat:33.406548, lng:-111.911248, dir:"1721 East Broadway Road, Tempe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Heidi’s Village", cat:"refugio", lat:33.455437, lng:-111.996062, tel:"+1-602-241-4640", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Lost Our Home Pet Rescue", cat:"refugio", lat:33.403316, lng:-111.951713, dir:"2323 South Hardy Drive, Tempe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scottsdale Pet Hotel", cat:"refugio", lat:33.457708, lng:-111.926758, dir:"2700 North Scottsdale Road, Tempe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tempe Dogs 24/7", cat:"refugio", lat:33.406327, lng:-111.924447, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Discount Aquarium Fish & Reef", cat:"tienda", lat:33.406433, lng:-111.90978, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Oaty Bear Dog Boutique", cat:"tienda", lat:33.413681, lng:-111.898566, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:33.430147, lng:-111.901209, dir:"1900 East Rio Salado Parkway, Tempe", tel:"+1-480-303-7262", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Ruff Life Dog Bones", cat:"tienda", lat:33.465213, lng:-111.992542, dir:"4107 East McDowell Road, Tempe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tempe Feed", cat:"tienda", lat:33.421588, lng:-111.953712, dir:"1041 West University Drive, Tempe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Vet Worthy", cat:"tienda", lat:33.403167, lng:-111.947588, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Fire Coral", cat:"tienda", lat:33.392113, lng:-111.907269, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:33.430004, lng:-111.901069, dir:"1900 East Rio Salado Parkway, Tempe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Topaz Veterinary Clinic", cat:"vet", lat:33.393793, lng:-111.908391, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Tri City Animal Hospital", cat:"vet", lat:33.406997, lng:-111.907219, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA University Animal Hospital", cat:"vet", lat:33.401917, lng:-111.952854, dir:"2500 South Hardy Drive, Tempe", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Phoenix Zoo", cat:"zoo", lat:33.449721, lng:-111.946408, dir:"455 North Galvin Parkway, Tempe", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "thatcher": {nombre:"Thatcher", centro:[32.849232, -109.759247], tz:"America/Phoenix", lugares:[
  {n:"Desert Cross Veterinary Hospital", cat:"vet", lat:32.833198, lng:-109.753974, dir:"651 South Dusty Trail, Thatcher", tel:"+1-928-348-0026", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "thayne": {nombre:"Thayne", centro:[42.920814, -111.002469], tz:"America/Denver", lugares:[
  {n:"Bridger Animal Hospital", cat:"vet", lat:42.948037, lng:-111.011195, dir:"127 Jepperson Road, Thayne", tel:"+1-307-883-4758", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "thornton-colorado": {nombre:"Thornton", centro:[39.869552, -104.985181], tz:"America/Denver", lugares:[
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.884546, lng:-104.972479, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.888002, lng:-104.992652, dir:"10600 Melody Drive, Thornton", tel:"+1-720-929-9459", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Puppies N Stuff", cat:"tienda", lat:39.884347, lng:-105.003987, dir:"1400 West 104th Avenue, Thornton", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Thornton Animal Hospital", cat:"vet", lat:39.886141, lng:-104.944249, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tierra-amarilla": {nombre:"Tierra Amarilla", centro:[36.700137, -106.54974], tz:"America/Denver", lugares:[
  {n:"Rincon Blanco Vet", cat:"vet", lat:36.496344, lng:-106.491754, dir:"24003 US 84, Tierra Amarilla", tel:"+1-575-684-2242", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tijeras": {nombre:"Tijeras", centro:[35.079636, -106.387944], tz:"America/Denver", lugares:[
  {n:"K-9 Field", cat:"parque", lat:35.006392, lng:-106.506944, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pups-n-Suds Groominh", cat:"peluqueria", lat:35.13139, lng:-106.496404, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Happy Tails Kennel", cat:"refugio", lat:35.060659, lng:-106.462636, dir:"1 Silverhills Lane Southeast, Tijeras", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Clark's Pet Emporium", cat:"tienda", lat:35.108372, lng:-106.516684, dir:"11200 Menaul Boulevard Northeast, Tijeras", horas:[9.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Wild Bird Seed Trading Company", cat:"tienda", lat:35.131236, lng:-106.496392, horas:[10.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Canyon Crossroads Veterinary", cat:"vet", lat:35.077876, lng:-106.387251, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "timnath": {nombre:"Timnath", centro:[40.529439, -104.982086], tz:"America/Denver", lugares:[
  {n:"Twin Silo Dog Park", cat:"parque", lat:40.510359, lng:-105.013453, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dapper Dog Salon", cat:"peluqueria", lat:40.566217, lng:-104.99441, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Dog Pawlor", cat:"peluqueria", lat:40.522796, lng:-105.012606, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Larimer Humane Society", cat:"refugio", lat:40.462536, lng:-105.012713, dir:"3501 East 71st Street, Timnath", tel:"+1-970-226-3647", horas:[11.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Lazy Dog Ranch", cat:"refugio", lat:40.566218, lng:-104.994597, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Club", cat:"tienda", lat:40.524714, lng:-105.03591, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:40.52724, lng:-105.024318, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Fish Crew", cat:"tienda", lat:40.524977, lng:-105.053263, dir:"1414 East Harmony Road, Timnath", tel:"+1-970-286-2245", horas:[12.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Animal Hospital", cat:"vet", lat:40.525118, lng:-105.050029, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Friendship Hospital for Animals", cat:"vet", lat:40.520204, lng:-105.057709, dir:"1103 Oak Park Drive, Timnath", tel:"+1-970-286-0413", horas:[7.5, 18.5], nota:"Dato de OpenStreetMap"},
  {n:"Raintree Animal Hospital", cat:"vet", lat:40.52338, lng:-104.974193, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Royal Vista Veterinary Clinic", cat:"vet", lat:40.478402, lng:-104.990374, tel:"+1-970-825-5975", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Timberline Animal Hospital", cat:"vet", lat:40.551042, lng:-105.036946, dir:"2614 South Timberline Road, Timnath", tel:"+1-970-377-1900", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "tolleson": {nombre:"Tolleson", centro:[33.45005, -112.259309], tz:"America/Phoenix", lugares:[
  {n:"Dog's Paw Grooming", cat:"peluqueria", lat:33.495249, lng:-112.291576, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Weiss Guys Self Serve Dog Wash", cat:"peluqueria", lat:33.464577, lng:-112.239625, dir:"8365 West McDowell Road, Tolleson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:33.465245, lng:-112.279367, dir:"10190 West McDowell Road, Tolleson", tel:"+1-623-936-4034", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Puppyland", cat:"tienda", lat:33.464242, lng:-112.270433, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scales 'N Tails Phoenix West", cat:"tienda", lat:33.494154, lng:-112.29163, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Camelwest Animal Hospital", cat:"vet", lat:33.507539, lng:-112.277252, dir:"10045 West Camelback Road, Tolleson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Spay & Neuter Clinic", cat:"vet", lat:33.511171, lng:-112.267029, dir:"5156 North 95th Avenue, Tolleson", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tombstone": {nombre:"Tombstone", centro:[31.714229, -110.065203], tz:"America/Phoenix", lugares:[
  {n:"Tombstone Small Animal Shelter", cat:"refugio", lat:31.704413, lng:-110.054238, dir:"1040 South Landin Park Way, Tombstone", tel:"+1-520-457-2545", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tooele": {nombre:"Tooele", centro:[40.530778, -112.29828], tz:"America/Denver", lugares:[
  {n:"My Dog's Heaven", cat:"peluqueria", lat:40.534101, lng:-112.287703, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Countryside Animal Clinic", cat:"vet", lat:40.525602, lng:-112.299225, dir:"254 South Main Street, Tooele", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "torrey": {nombre:"Torrey", centro:[38.299737, -111.42047], tz:"America/Denver", lugares:[
  {n:"Color County Animal Welfare", cat:"refugio", lat:38.302276, lng:-111.448651, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "torrington-wyoming": {nombre:"Torrington", centro:[42.062465, -104.184394], tz:"America/Denver", lugares:[
  {n:"Waggin' Tails Shelter", cat:"refugio", lat:42.052126, lng:-104.17098, dir:"980 East 11th Avenue, Torrington", tel:"+1-307-532-5373", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Goshen Veterinary Clinic", cat:"vet", lat:42.077764, lng:-104.217793, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "trinidad-colorado": {nombre:"Trinidad", centro:[37.169397, -104.500541], tz:"America/Denver", lugares:[
  {n:"Trinidad Animal Clinic", cat:"vet", lat:37.176953, lng:-104.489157, dir:"1701 East Main Street, Trinidad", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "truth-or-consequences": {nombre:"Truth or Consequences", centro:[33.128349, -107.252906], tz:"America/Denver", lugares:[
  {n:"Carol Wheeler Dog Park", cat:"parque", lat:33.129019, lng:-107.250152, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sierra County Animal Shelter", cat:"refugio", lat:33.141281, lng:-107.248735, dir:"1101 Cedar Street, Truth or Consequences", tel:"+1-575-894-4556", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sierra Veterinary Services", cat:"vet", lat:33.146375, lng:-107.246398, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "tucson": {nombre:"Tucson", centro:[32.222876, -110.974847], tz:"America/Phoenix", lugares:[
  {n:"Christopher Columbus Dog Park", cat:"parque", lat:32.284247, lng:-111.033381, dir:"4300 Silverbell Road, Tucson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Smiling Dog Ranch Dog Park", cat:"parque", lat:32.276218, lng:-110.904763, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Southern Arizona", cat:"refugio", lat:32.277669, lng:-110.981902, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kennel Comfort Pet Motel", cat:"refugio", lat:32.290475, lng:-111.020869, dir:"2509 West Zinnia Avenue, Tucson", tel:"+1-520-887-7131", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Paw Commons Pet Resort & Training Center", cat:"refugio", lat:32.23658, lng:-110.859883, dir:"6211 East Speedway Boulevard, Tucson", tel:"+1-520-477-4300", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pawsitively Cats", cat:"refugio", lat:32.237, lng:-110.878013, dir:"1145 North Woodland Avenue, Tucson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"D'oggee's Place", cat:"tienda", lat:32.264403, lng:-110.926432, dir:"3102 East Fort Lowell Road, Tucson", tel:"+1-520-703-4669", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Ok Feed & Supply", cat:"tienda", lat:32.265367, lng:-110.914086, dir:"3701 East Fort Lowell Road, Tucson", tel:"+1-520-325-0122", horas:[8.5, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.285146, lng:-110.974706, dir:"4374 North Oracle Road, Tucson", tel:"+1-520-407-0146", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.249232, lng:-110.891508, dir:"4740 East Grant Road, Tucson", tel:"+1-520-322-5080", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Tropical Kingdom", cat:"tienda", lat:32.273596, lng:-110.945687, dir:"1761 East Prince Road, Tucson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Bird", cat:"tienda", lat:32.264767, lng:-110.925127, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Loyal Companion", cat:"vet", lat:32.249421, lng:-110.89082, dir:"4758 East Grant Road, Tucson", tel:"+1-520-448-3548", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Acacia Animal Hospital", cat:"vet", lat:32.283407, lng:-110.944383, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:32.237008, lng:-110.8945, dir:"4615 East Speedway Boulevard, Tucson", tel:"+1-520-324-0387", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Benarda Veterinary Hospital", cat:"vet", lat:32.261512, lng:-110.926397, dir:"3002 North Country Club Road, Tucson", tel:"+1-520-325-2997", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Buena Pet Clinic", cat:"vet", lat:32.233182, lng:-110.892234, dir:"900 North Swan Road, Tucson", tel:"+1-520-323-9487", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Central Animal Hospital", cat:"vet", lat:32.23585, lng:-110.906972, dir:"4020 East Speedway Boulevard, Tucson", tel:"+1-520-323-9912", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Desert Hills Pet Clinic", cat:"vet", lat:32.297998, lng:-110.977264, dir:"5016 North Oracle Road, Tucson", tel:"+1-520-293-8788", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Holistic Animal Care", cat:"vet", lat:32.23668, lng:-110.866543, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Miller Pet Hospital", cat:"vet", lat:32.237021, lng:-110.904619, dir:"4131 East Speedway Boulevard, Tucson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sabino Canyon Veterinary Care", cat:"vet", lat:32.29634, lng:-110.823585, dir:"4910 North Sabino Canyon Road, Tucson", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Speedway Veterinary Hospital", cat:"vet", lat:32.235833, lng:-110.912225, dir:"3736 East Speedway Boulevard, Tucson", tel:"+1-520-321-4235", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Strickland Veterinary Clinic", cat:"vet", lat:32.260993, lng:-110.935032, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Tucson Veterinary Urgent Care", cat:"vet", lat:32.235923, lng:-110.889534, dir:"4832 East Speedway Boulevard, Tucson", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "twin-falls": {nombre:"Twin Falls", centro:[42.555854, -114.470068], tz:"America/Denver", lugares:[
  {n:"Furry Friends Grooming", cat:"peluqueria", lat:42.56281, lng:-114.446107, tel:"+1-208-961-1656", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Saragold Kennels", cat:"refugio", lat:42.552605, lng:-114.465322, dir:"453 Main Avenue East, Twin Falls", tel:"+1-208-736-0917", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Exotic Guppy", cat:"tienda", lat:42.553269, lng:-114.466914, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Wants", cat:"tienda", lat:42.555638, lng:-114.469483, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:42.597583, lng:-114.457241, dir:"1957 Fillmore Street, Twin Falls", tel:"+1-208-734-3521", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:42.588851, lng:-114.463158, dir:"1505 Blue Lakes Boulevard North, Twin Falls", tel:"+1-208-732-6121", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Magic Valley Veterinarian Hospital", cat:"vet", lat:42.551574, lng:-114.46454, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vail": {nombre:"Vail", centro:[32.047742, -110.711909], tz:"America/Phoenix", lugares:[
  {n:"Purple Heart Dog Park", cat:"parque", lat:32.102452, lng:-110.782969, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:32.083818, lng:-110.77404, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"VCA Civano Animal Hospital and Emergency Center", cat:"vet", lat:32.149321, lng:-110.770948, dir:"10425 East Drexel Road, Vail", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vail-colorado": {nombre:"Vail", centro:[39.643803, -106.388823], tz:"America/Denver", lugares:[
  {n:"The Pet Boutique of Vail", cat:"tienda", lat:39.640594, lng:-106.374938, dir:"182 Gore Creek Drive, Vail", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "valle": {nombre:"Valle", centro:[35.653019, -112.138431], tz:"America/Phoenix", lugares:[
  {n:"Grand Canyon Raptor Encounters", cat:"zoo", lat:35.656062, lng:-112.141475, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "valle-vista": {nombre:"Valle Vista", centro:[35.403866, -113.860562], tz:"America/Phoenix", lugares:[
  {n:"Kennel", cat:"refugio", lat:35.475482, lng:-113.768557, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "verde-village": {nombre:"Verde Village", centro:[34.692748, -111.982756], tz:"America/Phoenix", lugares:[
  {n:"Petsense", cat:"tienda", lat:34.718416, lng:-112.004344, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "verdi-nevada": {nombre:"Verdi", centro:[39.518243, -119.988811], tz:"America/Los_Angeles", lugares:[
  {n:"Large Dog Park", cat:"parque", lat:39.538336, lng:-119.947219, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small Dog Park", cat:"parque", lat:39.537697, lng:-119.947279, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "vernal": {nombre:"Vernal", centro:[40.455683, -109.528474], tz:"America/Denver", lugares:[
  {n:"Give a Dog a Choice", cat:"tienda", lat:40.45517, lng:-109.528289, dir:"41 South Vernal Avenue", tel:"+1-435-789-7833", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.436636, lng:-109.564855, dir:"1997 West Highway 40, Vernal", tel:"+1-435-781-8013", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "vineyard": {nombre:"Vineyard", centro:[40.29831, -111.747841], tz:"America/Denver", lugares:[
  {n:"The Puppy Store", cat:"tienda", lat:40.307739, lng:-111.736859, tel:"+1-801-805-6502", horas:[11.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "waddell": {nombre:"Waddell", centro:[33.564302, -112.444766], tz:"America/Phoenix", lugares:[
  {n:"Large", cat:"parque", lat:33.508589, lng:-112.465726, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Small", cat:"parque", lat:33.508589, lng:-112.465859, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kahoots Feed & Pet", cat:"tienda", lat:33.492045, lng:-112.480205, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"AVECCC Buckeye", cat:"vet", lat:33.493175, lng:-112.477405, dir:"19425 West Indian School Road, Waddell", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lovet Pet Health Care - Verrado", cat:"vet", lat:33.495477, lng:-112.480435, dir:"19580 West Indian School Road, Waddell", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Children's Petting Zoo", cat:"zoo", lat:33.550193, lng:-112.412063, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"World Wildlife Zoo", cat:"zoo", lat:33.548055, lng:-112.413671, dir:"16501 West Northern Avenue, Waddell", tel:"+1-623-935-9453", horas:[9.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "warren-air-force-base": {nombre:"Warren Air Force Base", centro:[41.153557, -104.86081], tz:"America/Denver", lugares:[
  {n:"Avenues Pet Clinic", cat:"vet", lat:41.170109, lng:-104.829233, dir:"5520 Yellowstone Road, Warren Air Force Base", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"}
 ]},
 "washington-terrace": {nombre:"Washington Terrace", centro:[41.168269, -111.971059], tz:"America/Denver", lugares:[
  {n:"Idlewire Pet Care", cat:"peluqueria", lat:41.162993, lng:-111.941693, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Birch Creek Animal Hospital", cat:"vet", lat:41.175393, lng:-111.949891, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Erz Animal Hospital", cat:"vet", lat:41.162763, lng:-111.941609, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "washington-utah": {nombre:"Washington", centro:[37.130537, -113.508287], tz:"America/Denver", lugares:[
  {n:"Dog Town Park", cat:"parque", lat:37.124111, lng:-113.506603, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Washington City Animal Shelter", cat:"refugio", lat:37.114807, lng:-113.508398, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bone Appetit! Natural Pet Pantry", cat:"tienda", lat:37.130032, lng:-113.50713, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:37.126164, lng:-113.522054, dir:"765 West Telegraph Street, Washington", tel:"+1-435-986-9704", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Puppy House", cat:"tienda", lat:37.125847, lng:-113.523719, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Gray Dog", cat:"tienda", lat:37.124977, lng:-113.523327, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Washington Family Veterinary Clinic", cat:"vet", lat:37.12471, lng:-113.52316, tel:"+1-435-627-1300", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "watkins": {nombre:"Watkins", centro:[39.744341, -104.603199], tz:"America/Denver", lugares:[
  {n:"Shylo Country Club for Dogs", cat:"refugio", lat:39.686049, lng:-104.57015, dir:"1625 S Quail Run Road, Watkins", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "weiser": {nombre:"Weiser", centro:[44.245466, -116.970238], tz:"America/Denver", lugares:[
  {n:"Weiser Veterinary Clinic", cat:"vet", lat:44.247411, lng:-116.981939, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wellington": {nombre:"Wellington", centro:[40.703871, -105.008585], tz:"America/Denver", lugares:[
  {n:"Northern Colorado Veterinary Center", cat:"vet", lat:40.705162, lng:-105.013686, dir:"8305 Wellington Boulevard", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wellington Veterinary Hospital", cat:"vet", lat:40.69952, lng:-105.000916, dir:"7837 6th Street, Wellington", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-bountiful": {nombre:"West Bountiful", centro:[40.893815, -111.901786], tz:"America/Denver", lugares:[
  {n:"Petco", cat:"tienda", lat:40.891261, lng:-111.893907, dir:"181 North 545 West, West Bountiful", tel:"+1-801-397-5287", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"}
 ]},
 "west-haven-utah": {nombre:"West Haven", centro:[41.204958, -112.048898], tz:"America/Denver", lugares:[
  {n:"Wizard of Pawz", cat:"peluqueria", lat:41.205994, lng:-112.063827, dir:"3490 West 3300 South, West Haven", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bluegrass Veterinary Hospital", cat:"vet", lat:41.208918, lng:-112.025264, dir:"3084 South 1900 West, West Haven", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Northside Animal Hospital", cat:"vet", lat:41.197066, lng:-112.093887, dir:"4715 West Haven Road", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-jordan": {nombre:"West Jordan", centro:[40.606134, -111.939521], tz:"America/Denver", lugares:[
  {n:"Deia's", cat:"peluqueria", lat:40.60985, lng:-111.934918, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fang & Claw Grooming Salon", cat:"peluqueria", lat:40.586276, lng:-111.985868, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Dog's Life", cat:"refugio", lat:40.586059, lng:-111.936417, dir:"1605 West 9000 South, West Jordan", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.627101, lng:-111.940458, dir:"6842 South Redwood Road, West Jordan", tel:"+1-801-561-0055", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.612285, lng:-111.982273, dir:"7654 South Campus View Drive, West Jordan", tel:"+1-801-280-0099", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"The Puppy Store", cat:"tienda", lat:40.620382, lng:-111.978821, dir:"7211 South Plaza Center Drive, West Jordan", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Amor Animal Hospital", cat:"vet", lat:40.595494, lng:-111.939315, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Jordan River Animal Hospital", cat:"vet", lat:40.587404, lng:-111.934378, dir:"1519 West 9000 South, West Jordan", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "west-pleasant-view": {nombre:"West Pleasant View", centro:[39.734039, -105.178165], tz:"America/Denver", lugares:[
  {n:"Dog Run", cat:"parque", lat:39.720935, lng:-105.195568, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fox Hill Apartments Dog Park", cat:"parque", lat:39.742533, lng:-105.197853, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Homer’s Run", cat:"parque", lat:39.733715, lng:-105.197697, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Lakewood Pet Grooming", cat:"peluqueria", lat:39.72426, lng:-105.165128, dir:"14799 West 6th Avenue Frontage Road, West Pleasant View", tel:"+1-303-586-5202", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Foothills Animal Shelter", cat:"refugio", lat:39.724554, lng:-105.173553, dir:"580 Mc Intyre Street, West Pleasant View", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Rover Retreat", cat:"refugio", lat:39.720911, lng:-105.200504, dir:"17731 West Colfax Avenue, West Pleasant View", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kriser's", cat:"tienda", lat:39.730144, lng:-105.163856, dir:"14710 West Colfax Avenue, West Pleasant View", tel:"+1-303-278-3977", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.73963, lng:-105.193759, dir:"17205 South Golden Road, West Pleasant View", tel:"+1-303-216-3294", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.698807, lng:-105.145704, dir:"13079 West Alameda Parkway, West Pleasant View", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.722203, lng:-105.193466, dir:"17132 West Colfax Avenue, West Pleasant View", tel:"+1-303-384-0013", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:39.765145, lng:-105.140085, dir:"3540 Youngfield Street, West Pleasant View", tel:"+1-303-424-0123", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Foothills Animal Hospital", cat:"vet", lat:39.699502, lng:-105.144711, dir:"13015 West Alameda Parkway, West Pleasant View", tel:"+1-303-988-0403", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Golden Animal Hospital", cat:"vet", lat:39.741219, lng:-105.198493, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Green Mountain Animal Clinic", cat:"vet", lat:39.728324, lng:-105.208732, dir:"720 Golden Ridge Road, West Pleasant View", tel:"+1-303-985-8761", horas:[8.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"South Golden Pet Hospital", cat:"vet", lat:39.738273, lng:-105.194243, dir:"17207 South Golden Road, West Pleasant View", tel:"+1-720-604-1282", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "west-valley-city": {nombre:"West Valley City", centro:[40.696789, -111.986695], tz:"America/Denver", lugares:[
  {n:"Quibells & Bits", cat:"refugio", lat:40.732019, lng:-111.98954, dir:"1775 South 4130 West, West Valley City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Valley/Taylorsville Animal Shelter", cat:"refugio", lat:40.697089, lng:-111.998829, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:40.693342, lng:-111.957534, dir:"3637 South Constitution Boulevard, West Valley City", tel:"+1-801-968-7200", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:40.704183, lng:-112.022129, dir:"3081 South 5600 West, West Valley City", tel:"+1-801-840-2728", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"}
 ]},
 "west-yellowstone": {nombre:"West Yellowstone", centro:[44.663206, -111.101206], tz:"America/Denver", lugares:[
  {n:"Wolf and Grizzly Discovery Center", cat:"zoo", lat:44.655571, lng:-111.098327, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "western-hills": {nombre:"Western Hills", centro:[39.832208, -104.997203], tz:"America/Denver", lugares:[
  {n:"Midtown East Dog Park", cat:"parque", lat:39.819601, lng:-105.001559, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Vets Animal Hospital", cat:"vet", lat:39.848773, lng:-104.992815, dir:"8395 Elati Street, Western Hills", tel:"+1-303-429-6594", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "westminster-colorado": {nombre:"Westminster", centro:[39.836653, -105.037205], tz:"America/Denver", lugares:[
  {n:"Little Dry Creek Dog Park", cat:"parque", lat:39.823484, lng:-105.035193, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Perros Y Gatos", cat:"peluqueria", lat:39.842054, lng:-105.049792, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Almost Home Adoptions", cat:"refugio", lat:39.85612, lng:-105.062825, dir:"6010 West 88th Avenue, Westminster", tel:"+1-303-432-2299", horas:[11.0, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"DoggEdayz", cat:"refugio", lat:39.842323, lng:-105.052329, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Supplies Plus", cat:"tienda", lat:39.844764, lng:-105.054519, horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:39.844085, lng:-105.083437, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Birds Unlimited", cat:"tienda", lat:39.855841, lng:-105.079035, tel:"+1-303-467-2644", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Adams County Animal Hospital", cat:"vet", lat:39.842374, lng:-105.052843, dir:"8020 Sheridan Boulevard, Westminster", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Animal Central", cat:"vet", lat:39.880324, lng:-105.089249, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Banfield Pet Hospital", cat:"vet", lat:39.829314, lng:-105.026863, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cheshire Cat Hospital", cat:"vet", lat:39.865602, lng:-105.082114, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Monarch Animal Health Center", cat:"vet", lat:39.862179, lng:-105.051784, dir:"5044 West 92nd Avenue, Westminster", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wheat-ridge": {nombre:"Wheat Ridge", centro:[39.766098, -105.077206], tz:"America/Denver", lugares:[
  {n:"Zen Doggy Den", cat:"peluqueria", lat:39.779746, lng:-105.08181, dir:"4576 North Wadsworth Boulevard, Wheat Ridge", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Cosmo's Dog Bakery and Pet Supplies", cat:"tienda", lat:39.755081, lng:-105.111312, dir:"10111 West 26th Avenue, Wheat Ridge", tel:"+1-303-232-1477", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Duke's Dog Wash", cat:"tienda", lat:39.769923, lng:-105.083438, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"4 Paws Animal Clinic", cat:"vet", lat:39.741278, lng:-105.107049, dir:"9797 West Colfax Avenue, Wheat Ridge", tel:"+1-303-232-2023", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wheat Ridge Animal Hospital", cat:"vet", lat:39.777109, lng:-105.111089, dir:"10140 West 44th Avenue, Wheat Ridge", tel:"+1-303-424-3325", horas:[0, 24], nota:"Dato de OpenStreetMap"}
 ]},
 "white-city-utah": {nombre:"White City", centro:[40.565782, -111.864378], tz:"America/Denver", lugares:[
  {n:"Bark Park", cat:"parque", lat:40.590089, lng:-111.86992, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fur the Love", cat:"peluqueria", lat:40.558278, lng:-111.871225, tel:"+1-385-888-2447", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Kibbles & Cuts", cat:"peluqueria", lat:40.582024, lng:-111.83184, dir:"2063 East 9400 South, White City", tel:"+1-801-942-3647", horas:[8.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Camp Bow Wow", cat:"refugio", lat:40.578815, lng:-111.870794, dir:"9495 700 East, White City", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Mountain View Animal Hospital", cat:"vet", lat:40.580114, lng:-111.852858, dir:"9414 South 1335 East, White City", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sandy Animal Clinic", cat:"vet", lat:40.557476, lng:-111.85377, dir:"10670 1300 East, White City", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "whitefish": {nombre:"Whitefish", centro:[48.410802, -114.334624], tz:"America/Denver", lugares:[
  {n:"Hugh Rogers Wag Park", cat:"parque", lat:48.409853, lng:-114.310326, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Les Mason Off-Leash Area", cat:"parque", lat:48.457972, lng:-114.371925, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Whitefish Animal Hospital", cat:"vet", lat:48.39929, lng:-114.33373, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "whitney-nevada": {nombre:"Whitney", centro:[36.096891, -115.04603], tz:"America/Los_Angeles", lugares:[
  {n:"Doggie Park @ Tempo 3", cat:"parque", lat:36.088536, lng:-115.030444, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dos Escuelas Dog Park", cat:"parque", lat:36.02396, lng:-115.079048, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Union Village Dog Park", cat:"parque", lat:36.076569, lng:-115.033719, dir:"1060 Wellness Place, Whitney", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bogart's Bone Appétit", cat:"peluqueria", lat:36.045132, lng:-115.048048, dir:"245 North Stephanie Street, Whitney", tel:"+1-702-684-7000", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"BratPak Dog Kamp", cat:"refugio", lat:36.070545, lng:-115.073489, dir:"4601 East Sunset Road, Whitney", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"LLL Reptile and Supply Company Inc.", cat:"tienda", lat:36.066425, lng:-115.047889, dir:"629 North Stephanie Street, Whitney", tel:"+1-702-565-7333", horas:[11.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Lulu's Doggy Salon & Spaw", cat:"tienda", lat:36.026991, lng:-115.08402, dir:"1000 North Green Valley Parkway, Whitney", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Petco", cat:"tienda", lat:36.065439, lng:-115.038234, dir:"631 Marks Street, Whitney", tel:"+1-702-458-1435", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Petland", cat:"tienda", lat:36.060058, lng:-115.036126, dir:"510 Marks Street, Whitney", tel:"+1-702-935-1873", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:36.05839, lng:-115.048349, dir:"531 North Stephanie Street, Whitney", tel:"+1-702-898-0055", horas:[9.0, 21.0], nota:"Dato de OpenStreetMap"},
  {n:"The Puppy Store", cat:"tienda", lat:36.064252, lng:-115.034077, dir:"1000 West Sunset Road, Whitney", tel:"+1-702-344-0844", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wags 'N Whiskers", cat:"tienda", lat:36.028669, lng:-115.084362, dir:"1000 North Green Valley Parkway, Whitney", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Wild Things", cat:"tienda", lat:36.113652, lng:-115.090952, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"A Cat Hospital", cat:"vet", lat:36.070087, lng:-115.079998, dir:"2758 North Green Valley Parkway, Whitney", tel:"+1-702-454-4400", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Green Valley Animal Hospital", cat:"vet", lat:36.077045, lng:-115.072861, dir:"6150 North Mountain Vista Street, Whitney", horas:[7.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Henderson Vet Center", cat:"vet", lat:36.056732, lng:-115.045215, dir:"400 North Stephanie Street, Whitney", horas:[8.0, 16.5], nota:"Dato de OpenStreetMap"},
  {n:"VCA Animal Hospital", cat:"vet", lat:36.114625, lng:-115.072052, dir:"4675 East Flamingo Road, Whitney", horas:[7.0, 19.0], nota:"Dato de OpenStreetMap"},
  {n:"Veterinary Emergency Group", cat:"vet", lat:36.058382, lng:-115.045885, dir:"470 North Stephanie Street, Whitney", tel:"+1-702-529-4850", horas:[0, 24], nota:"Dato de OpenStreetMap"},
  {n:"Warm Hearts Pet Hospital", cat:"vet", lat:36.056501, lng:-115.055588, dir:"1606 West Warm Springs Road, Whitney", tel:"+1-702-434-4838", horas:[8.0, 18.0], nota:"Dato de OpenStreetMap"}
 ]},
 "wibaux": {nombre:"Wibaux", centro:[46.985014, -104.188269], tz:"America/Denver", lugares:[
  {n:"Wibaux Veterinary Clinic", cat:"vet", lat:46.962413, lng:-104.191068, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wickenburg": {nombre:"Wickenburg", centro:[33.968096, -112.730135], tz:"America/Phoenix", lugares:[
  {n:"Charlie’s Park", cat:"parque", lat:34.03156, lng:-112.807398, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Wickenburg", cat:"refugio", lat:33.966831, lng:-112.809491, dir:"4000 West Industrial Road, Wickenburg", tel:"+1-928-684-8801", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bar S Animal Clinic", cat:"vet", lat:33.966715, lng:-112.80839, dir:"3920 West Industrial Road, Wickenburg", tel:"+1-928-684-7846", horas:[8.5, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"Wickenburg Veterinary Clinic", cat:"vet", lat:33.964532, lng:-112.751469, dir:"1127 West Wickenburg Way", tel:"+1-928-684-7866", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"}
 ]},
 "widefield": {nombre:"Widefield", centro:[38.733329, -104.719972], tz:"America/Denver", lugares:[
  {n:"Boardmoor Pet Resort", cat:"peluqueria", lat:38.705701, lng:-104.721689, dir:"9419 Bandley Drive, Widefield", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "williams": {nombre:"Williams", centro:[35.25085, -112.187294], tz:"America/Phoenix", lugares:[
  {n:"Bearizona Wildlife Park", cat:"zoo", lat:35.253207, lng:-112.148421, dir:"1500 East Route 66, Williams", tel:"+1-928-635-2289", horas:[8.0, 16.0], nota:"Dato de OpenStreetMap"}
 ]},
 "williamsburg-new-mexico": {nombre:"Williamsburg", centro:[33.116257, -107.29336], tz:"America/Denver", lugares:[
  {n:"Desert Haven Animal Refuge", cat:"refugio", lat:33.081434, lng:-107.301069, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "wilson-wyoming": {nombre:"Wilson", centro:[43.498978, -110.874656], tz:"America/Denver", lugares:[
  {n:"Fish Creek Veterinary Clinic", cat:"vet", lat:43.512384, lng:-110.867259, dir:"5325 3 B Ranch Road, Wilson", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winchester-nevada": {nombre:"Winchester", centro:[36.137006, -115.136884], tz:"America/Los_Angeles", lugares:[
  {n:"Homeward Bound Cat Adoptions", cat:"refugio", lat:36.114139, lng:-115.11381, dir:"2675 East Flamingo Road, Winchester", horas:[12.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Flamingo Pet Clinic", cat:"vet", lat:36.114149, lng:-115.113591, dir:"2675 East Flamingo Road, Winchester", tel:"+1-702-734-9761", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "window-rock": {nombre:"Window Rock", centro:[35.676327, -109.058149], tz:"America/Phoenix", lugares:[
  {n:"Navajo Zoo", cat:"zoo", lat:35.666032, lng:-109.048962, dir:"Tuba City-Window Rock Highway", tel:"+1-928-871-6574", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "windsor-colorado": {nombre:"Windsor", centro:[40.477482, -104.901361], tz:"America/Denver", lugares:[
  {n:"Dolled Up Dogs, LLC", cat:"peluqueria", lat:40.480882, lng:-104.920285, dir:"1200 #C West Ash Street, Windsor", tel:"+1-970-829-6046", horas:[10.0, 18.0], nota:"Dato de OpenStreetMap"},
  {n:"Pampered Pets Parlor", cat:"refugio", lat:40.478553, lng:-104.921408, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Poudre Pet & Feed Supply", cat:"tienda", lat:40.480154, lng:-104.905149, dir:"516 Main Street, Windsor", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Poudre Pet & Feed Supply", cat:"tienda", lat:40.477183, lng:-104.888576, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"The Vets", cat:"vet", lat:40.478617, lng:-104.921176, dir:"1295 Main Street, Windsor", horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winnemucca": {nombre:"Winnemucca", centro:[40.972429, -117.734802], tz:"America/Los_Angeles", lugares:[
  {n:"New Frontier Dog Park", cat:"parque", lat:40.979752, lng:-117.699642, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Posh Pets", cat:"peluqueria", lat:40.958529, lng:-117.745371, dir:"3200 Traders Way, Winnemucca", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"City-County Animal Shelter", cat:"refugio", lat:40.991603, lng:-117.742478, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "winslow": {nombre:"Winslow", centro:[35.024198, -110.697346], tz:"America/Phoenix", lugares:[
  {n:"Pet Ramada", cat:"refugio", lat:35.033273, lng:-111.021471, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "woodland-park": {nombre:"Woodland Park", centro:[38.993802, -105.057045], tz:"America/Denver", lugares:[
  {n:"Compassion Animal Hospital", cat:"vet", lat:38.994325, lng:-105.056385, dir:"312 US 24, Woodland Park", tel:"+1-719-687-6000", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Rampart Range Veterinary Hospital", cat:"vet", lat:38.982125, lng:-105.046614, dir:"1111 US 24, Woodland Park", tel:"+1-719-297-9011", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"The Animal Clinic of Woodland Park", cat:"vet", lat:38.986906, lng:-105.046785, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Woodland Veterinary Clinic", cat:"vet", lat:38.991625, lng:-105.048556, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "woods-cross": {nombre:"Woods Cross", centro:[40.874574, -111.901726], tz:"America/Denver", lugares:[
  {n:"Brickyard Bark Park", cat:"parque", lat:40.877452, lng:-111.886953, dir:"1050 200 West, Woods Cross", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bonneville Pet", cat:"peluqueria", lat:40.8824, lng:-111.892791, dir:"640 South 500 West, Woods Cross", tel:"+1-385-244-0094", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Scenthound", cat:"peluqueria", lat:40.866486, lng:-111.879858, dir:"65 East 2200 South, Woods Cross", tel:"+1-801-623-6561", horas:[8.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"Self Dog Wash", cat:"peluqueria", lat:40.866275, lng:-111.878454, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Fawn's Family Cat Rescue & Lounge", cat:"refugio", lat:40.8672, lng:-111.878968, dir:"2130 Orchard Drive, Woods Cross", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Bountiful Animal Hospital", cat:"vet", lat:40.880826, lng:-111.892829, dir:"880 South 500 West, Woods Cross", tel:"+1-801-295-0733", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"},
  {n:"VCA Lakeview Animal Hospital", cat:"vet", lat:40.868556, lng:-111.877378, dir:"1975 Orchard Drive, Woods Cross", tel:"+1-801-298-2314", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "youngtown": {nombre:"Youngtown", centro:[33.59373, -112.303326], tz:"America/Phoenix", lugares:[
  {n:"El Mirage Dog Park", cat:"parque", lat:33.574136, lng:-112.325181, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Diamonds in the Ruff", cat:"peluqueria", lat:33.566683, lng:-112.281688, dir:"9022 North 103rd Avenue, Youngtown", tel:"+1-623-933-2200", horas:[8.0, 15.0], nota:"Dato de OpenStreetMap"},
  {n:"Sun Valley Animal Shelter", cat:"refugio", lat:33.539316, lng:-112.297556, dir:"7150 North 110th Avenue, Youngtown", tel:"+1-623-872-7941", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Sun City Animal Hospital", cat:"vet", lat:33.599456, lng:-112.274988, dir:"10026 West Santa Fe Drive, Youngtown", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"West Olive Animal Hospital", cat:"vet", lat:33.564092, lng:-112.289059, dir:"10651 West Olive Avenue, Youngtown", tel:"+1-623-334-4121", horas:[8.0, 17.5], nota:"Dato de OpenStreetMap"}
 ]},
 "yuma": {nombre:"Yuma", centro:[32.721031, -114.620322], tz:"America/Phoenix", lugares:[
  {n:"Bark Park", cat:"parque", lat:32.676451, lng:-114.602781, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Dog Park", cat:"parque", lat:32.645669, lng:-114.582882, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Humane Society of Yuma", cat:"refugio", lat:32.654441, lng:-114.555949, dir:"4050 East 40th Street, Yuma", horas:[10.0, 17.0], nota:"Dato de OpenStreetMap"},
  {n:"PetSmart", cat:"tienda", lat:32.700928, lng:-114.60502, horas:null, nota:"Dato de OpenStreetMap"}
 ]},
 "zuni": {nombre:"Zuni", centro:[39.80332, -105.021648], tz:"America/Denver", lugares:[
  {n:"Midtown Dog Park", cat:"parque", lat:39.817669, lng:-105.01607, horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Chuck & Don's Pet Food & Supplies", cat:"tienda", lat:39.811766, lng:-105.05181, dir:"6350 Sheridan Boulevard, Zuni", horas:[9.0, 20.0], nota:"Dato de OpenStreetMap"},
  {n:"Denver Holistic Center Pets 4 PPL", cat:"tienda", lat:39.780836, lng:-105.006113, dir:"4640 Pecos Street, Zuni", horas:null, nota:"Dato de OpenStreetMap"},
  {n:"Pet Vet Supply", cat:"tienda", lat:39.781669, lng:-104.999803, dir:"1000 West 47th Avenue, Zuni", horas:null, nota:"Dato de OpenStreetMap"}
 ]}
};
