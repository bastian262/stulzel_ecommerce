import React,{useState, useEffect} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import { getTarifa } from '../../api/tarifa';
import { useCart } from '../../hooks/useCart';

var jsonList =  [
    {
        "id": "1287",
        "nombre": "Achao"
    },
    {
        "id": "2424",
        "nombre": "Agua Buena"
    },
    {
        "id": "1531",
        "nombre": "Ahui"
    },
    {
        "id": "2435",
        "nombre": "Aiquina"
    },
    {
        "id": "1250",
        "nombre": "Alerce"
    },
    {
        "id": "2346",
        "nombre": "Algarrobal"
    },
    {
        "id": "1143",
        "nombre": "Algarrobito"
    },
    {
        "id": "588",
        "nombre": "Algarrobo"
    },
    {
        "id": "1331",
        "nombre": "Alhue"
    },
    {
        "id": "2359",
        "nombre": "Alicahue"
    },
    {
        "id": "1056",
        "nombre": "Alto Bio Bio"
    },
    {
        "id": "169",
        "nombre": "Alto Del Carmen"
    },
    {
        "id": "1507",
        "nombre": "Alto El Canelo"
    },
    {
        "id": "523",
        "nombre": "Alto Hospicio"
    },
    {
        "id": "2477",
        "nombre": "Alto Jahuel"
    },
    {
        "id": "1475",
        "nombre": "Altovalsol"
    },
    {
        "id": "2331",
        "nombre": "Ancuaque"
    },
    {
        "id": "389",
        "nombre": "Ancud"
    },
    {
        "id": "1024",
        "nombre": "Andacollo"
    },
    {
        "id": "88",
        "nombre": "Angol"
    },
    {
        "id": "2675",
        "nombre": "Antihuala"
    },
    {
        "id": "84",
        "nombre": "Antofagasta"
    },
    {
        "id": "1205",
        "nombre": "Antuco"
    },
    {
        "id": "89",
        "nombre": "Arauco"
    },
    {
        "id": "39",
        "nombre": "Arica"
    },
    {
        "id": "1011",
        "nombre": "Artificio"
    },
    {
        "id": "2515",
        "nombre": "Bahia Inglesa"
    },
    {
        "id": "2530",
        "nombre": "Bahia Murta"
    },
    {
        "id": "2398",
        "nombre": "Balmaceda"
    },
    {
        "id": "1108",
        "nombre": "Baquedano"
    },
    {
        "id": "2560",
        "nombre": "Barros Arana"
    },
    {
        "id": "1452",
        "nombre": "Batuco (rm)"
    },
    {
        "id": "1345",
        "nombre": "Batuco (talca)"
    },
    {
        "id": "2321",
        "nombre": "Belen"
    },
    {
        "id": "224",
        "nombre": "Belloto"
    },
    {
        "id": "2500",
        "nombre": "Bobadilla"
    },
    {
        "id": "2694",
        "nombre": "Boco De Quillota"
    },
    {
        "id": "2476",
        "nombre": "Bollenar"
    },
    {
        "id": "1162",
        "nombre": "Bucalemu"
    },
    {
        "id": "2369",
        "nombre": "Buchupureo"
    },
    {
        "id": "437",
        "nombre": "Buin"
    },
    {
        "id": "604",
        "nombre": "Bulnes"
    },
    {
        "id": "7",
        "nombre": "Cabildo"
    },
    {
        "id": "8",
        "nombre": "Cabrero"
    },
    {
        "id": "1372",
        "nombre": "Caburga"
    },
    {
        "id": "203",
        "nombre": "Cachagua"
    },
    {
        "id": "2490",
        "nombre": "Cachapoal"
    },
    {
        "id": "2428",
        "nombre": "Cahuil"
    },
    {
        "id": "2494",
        "nombre": "Caimanes"
    },
    {
        "id": "9",
        "nombre": "Cajon"
    },
    {
        "id": "439",
        "nombre": "Cajon Del Maipo"
    },
    {
        "id": "1465",
        "nombre": "Calafquen"
    },
    {
        "id": "10",
        "nombre": "Calama"
    },
    {
        "id": "11",
        "nombre": "Calbuco"
    },
    {
        "id": "12",
        "nombre": "Caldera"
    },
    {
        "id": "458",
        "nombre": "Calera De Tango"
    },
    {
        "id": "2531",
        "nombre": "Caleta Andrade"
    },
    {
        "id": "2334",
        "nombre": "Caleta Buena"
    },
    {
        "id": "2453",
        "nombre": "Caleta Gonzalo"
    },
    {
        "id": "1175",
        "nombre": "Caletones"
    },
    {
        "id": "572",
        "nombre": "Calle Larga"
    },
    {
        "id": "1145",
        "nombre": "Camarico"
    },
    {
        "id": "2325",
        "nombre": "Camarones"
    },
    {
        "id": "2414",
        "nombre": "Cameron"
    },
    {
        "id": "2336",
        "nombre": "Camina"
    },
    {
        "id": "1470",
        "nombre": "Campanario"
    },
    {
        "id": "2337",
        "nombre": "Cancosa"
    },
    {
        "id": "1026",
        "nombre": "Canela"
    },
    {
        "id": "14",
        "nombre": "Canete"
    },
    {
        "id": "2353",
        "nombre": "Canto De Agua"
    },
    {
        "id": "1237",
        "nombre": "Capitan Pastene"
    },
    {
        "id": "2327",
        "nombre": "Caquena"
    },
    {
        "id": "15",
        "nombre": "Carahue"
    },
    {
        "id": "16",
        "nombre": "Carampangue"
    },
    {
        "id": "1258",
        "nombre": "Carelmapu"
    },
    {
        "id": "1518",
        "nombre": "Caren"
    },
    {
        "id": "2338",
        "nombre": "Cariquima"
    },
    {
        "id": "2355",
        "nombre": "Carrizal Bajo"
    },
    {
        "id": "591",
        "nombre": "Cartagena"
    },
    {
        "id": "233",
        "nombre": "Casablanca"
    },
    {
        "id": "2774",
        "nombre": "Casma"
    },
    {
        "id": "2438",
        "nombre": "Caspana"
    },
    {
        "id": "388",
        "nombre": "Castro"
    },
    {
        "id": "200",
        "nombre": "Catapilco"
    },
    {
        "id": "110",
        "nombre": "Catemu"
    },
    {
        "id": "1536",
        "nombre": "Caulin"
    },
    {
        "id": "293",
        "nombre": "Cauquenes"
    },
    {
        "id": "2375",
        "nombre": "Cayucupil"
    },
    {
        "id": "1515",
        "nombre": "Cerrillos De Tamaya"
    },
    {
        "id": "2655",
        "nombre": "Cerro Alto"
    },
    {
        "id": "1315",
        "nombre": "Cerro Sombrero"
    },
    {
        "id": "1253",
        "nombre": "Chacao"
    },
    {
        "id": "2550",
        "nombre": "Chaica"
    },
    {
        "id": "1288",
        "nombre": "Chaiten"
    },
    {
        "id": "1333",
        "nombre": "Champa"
    },
    {
        "id": "17",
        "nombre": "Chanaral"
    },
    {
        "id": "193",
        "nombre": "Chanaral Alto"
    },
    {
        "id": "1519",
        "nombre": "Chanaral De Caren"
    },
    {
        "id": "1193",
        "nombre": "Chanco"
    },
    {
        "id": "1447",
        "nombre": "Charrua"
    },
    {
        "id": "1469",
        "nombre": "Chauquen"
    },
    {
        "id": "2570",
        "nombre": "Checura"
    },
    {
        "id": "271",
        "nombre": "Chepica"
    },
    {
        "id": "1540",
        "nombre": "Chepu"
    },
    {
        "id": "1473",
        "nombre": "Cherquenco"
    },
    {
        "id": "2474",
        "nombre": "Chicureo"
    },
    {
        "id": "18",
        "nombre": "Chiguayante"
    },
    {
        "id": "2594",
        "nombre": "Chilcas"
    },
    {
        "id": "1292",
        "nombre": "Chile Chico"
    },
    {
        "id": "19",
        "nombre": "Chillan"
    },
    {
        "id": "2536",
        "nombre": "Chillepin"
    },
    {
        "id": "268",
        "nombre": "Chimbarongo"
    },
    {
        "id": "2473",
        "nombre": "Chocalan"
    },
    {
        "id": "600",
        "nombre": "Cholchol"
    },
    {
        "id": "2373",
        "nombre": "Cholguan"
    },
    {
        "id": "1062",
        "nombre": "Chonchi"
    },
    {
        "id": "2554",
        "nombre": "Choroico"
    },
    {
        "id": "1254",
        "nombre": "Choshuenco"
    },
    {
        "id": "2368",
        "nombre": "Ciruelos"
    },
    {
        "id": "1497",
        "nombre": "Ciudad De Los Valles"
    },
    {
        "id": "2345",
        "nombre": "Cobija"
    },
    {
        "id": "1208",
        "nombre": "Cobquecura"
    },
    {
        "id": "1088",
        "nombre": "Cochamo"
    },
    {
        "id": "1381",
        "nombre": "Cochrane"
    },
    {
        "id": "241",
        "nombre": "Codegua"
    },
    {
        "id": "1346",
        "nombre": "Codigua"
    },
    {
        "id": "2329",
        "nombre": "Codpa"
    },
    {
        "id": "23",
        "nombre": "Coelemu"
    },
    {
        "id": "2423",
        "nombre": "Coihue"
    },
    {
        "id": "1046",
        "nombre": "Coihueco"
    },
    {
        "id": "245",
        "nombre": "Coinco"
    },
    {
        "id": "1043",
        "nombre": "Colbun"
    },
    {
        "id": "1096",
        "nombre": "Colchane"
    },
    {
        "id": "1207",
        "nombre": "Colcura"
    },
    {
        "id": "2555",
        "nombre": "Colico"
    },
    {
        "id": "440",
        "nombre": "Colina"
    },
    {
        "id": "2511",
        "nombre": "Coliumo"
    },
    {
        "id": "2339",
        "nombre": "Collacagua"
    },
    {
        "id": "2714",
        "nombre": "Colliguay"
    },
    {
        "id": "24",
        "nombre": "Collipulli"
    },
    {
        "id": "2561",
        "nombre": "Colonia Mendoza"
    },
    {
        "id": "1030",
        "nombre": "Coltauco"
    },
    {
        "id": "194",
        "nombre": "Combarbala"
    },
    {
        "id": "1092",
        "nombre": "Conaripe"
    },
    {
        "id": "2354",
        "nombre": "Conay"
    },
    {
        "id": "2",
        "nombre": "Concepcion"
    },
    {
        "id": "223",
        "nombre": "Concon"
    },
    {
        "id": "1038",
        "nombre": "Constitucion"
    },
    {
        "id": "1210",
        "nombre": "Contulmo"
    },
    {
        "id": "26",
        "nombre": "Copiapo"
    },
    {
        "id": "2566",
        "nombre": "Copiulemu"
    },
    {
        "id": "27",
        "nombre": "Coquimbo"
    },
    {
        "id": "28",
        "nombre": "Coronel"
    },
    {
        "id": "1086",
        "nombre": "Corral"
    },
    {
        "id": "2328",
        "nombre": "Cosapilla"
    },
    {
        "id": "1181",
        "nombre": "Coya"
    },
    {
        "id": "6",
        "nombre": "Coyhaique"
    },
    {
        "id": "1467",
        "nombre": "Coz Coz"
    },
    {
        "id": "2504",
        "nombre": "Culenar"
    },
    {
        "id": "2471",
        "nombre": "Culipran"
    },
    {
        "id": "1201",
        "nombre": "Cumpeo"
    },
    {
        "id": "269",
        "nombre": "Cunaco"
    },
    {
        "id": "1058",
        "nombre": "Cunco"
    },
    {
        "id": "2537",
        "nombre": "Cuncumen"
    },
    {
        "id": "2557",
        "nombre": "Curacalco"
    },
    {
        "id": "30",
        "nombre": "Curacautin"
    },
    {
        "id": "441",
        "nombre": "Curacavi"
    },
    {
        "id": "1068",
        "nombre": "Curaco De Velez"
    },
    {
        "id": "31",
        "nombre": "Curanilahue"
    },
    {
        "id": "1194",
        "nombre": "Curanipe"
    },
    {
        "id": "601",
        "nombre": "Curarrehue"
    },
    {
        "id": "219",
        "nombre": "Curauma"
    },
    {
        "id": "1039",
        "nombre": "Curepto"
    },
    {
        "id": "32",
        "nombre": "Curico"
    },
    {
        "id": "1334",
        "nombre": "Curimon"
    },
    {
        "id": "2383",
        "nombre": "Curinanco"
    },
    {
        "id": "1356",
        "nombre": "Cuya"
    },
    {
        "id": "385",
        "nombre": "Dalcahue"
    },
    {
        "id": "1541",
        "nombre": "Degan"
    },
    {
        "id": "1211",
        "nombre": "Dichato"
    },
    {
        "id": "166",
        "nombre": "Diego De Almagro"
    },
    {
        "id": "1132",
        "nombre": "Domeyko"
    },
    {
        "id": "237",
        "nombre": "Donihue"
    },
    {
        "id": "1204",
        "nombre": "Duao"
    },
    {
        "id": "2469",
        "nombre": "El Canelo"
    },
    {
        "id": "234",
        "nombre": "El Carmen Chillan"
    },
    {
        "id": "2506",
        "nombre": "El Carmen Rengo"
    },
    {
        "id": "1498",
        "nombre": "El Colorado"
    },
    {
        "id": "1476",
        "nombre": "El Hinojal"
    },
    {
        "id": "1505",
        "nombre": "El Ingenio"
    },
    {
        "id": "2614",
        "nombre": "El Manzanar"
    },
    {
        "id": "2366",
        "nombre": "El Manzano"
    },
    {
        "id": "1337",
        "nombre": "El Melocoton"
    },
    {
        "id": "109",
        "nombre": "El Melon"
    },
    {
        "id": "2467",
        "nombre": "El Membrillo"
    },
    {
        "id": "1480",
        "nombre": "El Molle"
    },
    {
        "id": "442",
        "nombre": "El Monte"
    },
    {
        "id": "189",
        "nombre": "El Palqui"
    },
    {
        "id": "1491",
        "nombre": "El Penon"
    },
    {
        "id": "589",
        "nombre": "El Quisco"
    },
    {
        "id": "165",
        "nombre": "El Salvador"
    },
    {
        "id": "2514",
        "nombre": "El Sauce"
    },
    {
        "id": "204",
        "nombre": "El Tabo"
    },
    {
        "id": "1481",
        "nombre": "El Tambo"
    },
    {
        "id": "1487",
        "nombre": "El Tangue"
    },
    {
        "id": "1195",
        "nombre": "Empedrado"
    },
    {
        "id": "1262",
        "nombre": "Ensenada"
    },
    {
        "id": "33",
        "nombre": "Ercilla"
    },
    {
        "id": "2324",
        "nombre": "Esquina"
    },
    {
        "id": "1328",
        "nombre": "Farellones"
    },
    {
        "id": "2572",
        "nombre": "Filomena"
    },
    {
        "id": "1052",
        "nombre": "Florida"
    },
    {
        "id": "34",
        "nombre": "Freire"
    },
    {
        "id": "1021",
        "nombre": "Freirina"
    },
    {
        "id": "35",
        "nombre": "Fresia"
    },
    {
        "id": "36",
        "nombre": "Frutillar"
    },
    {
        "id": "1264",
        "nombre": "Futaleufu"
    },
    {
        "id": "605",
        "nombre": "Futrono"
    },
    {
        "id": "1477",
        "nombre": "Gabriela Mistral"
    },
    {
        "id": "154",
        "nombre": "Galvarino"
    },
    {
        "id": "1352",
        "nombre": "General Lagos"
    },
    {
        "id": "38",
        "nombre": "Gorbea"
    },
    {
        "id": "235",
        "nombre": "Graneros"
    },
    {
        "id": "2523",
        "nombre": "Guadal"
    },
    {
        "id": "1296",
        "nombre": "Guaitecas"
    },
    {
        "id": "2501",
        "nombre": "Gualleco"
    },
    {
        "id": "183",
        "nombre": "Guanaqueros"
    },
    {
        "id": "1363",
        "nombre": "Guanguali"
    },
    {
        "id": "1528",
        "nombre": "Guapilacuy"
    },
    {
        "id": "2484",
        "nombre": "Guardia Vieja"
    },
    {
        "id": "2569",
        "nombre": "Guarilihue"
    },
    {
        "id": "2466",
        "nombre": "Guayacan"
    },
    {
        "id": "1359",
        "nombre": "Hacienda Los Andes"
    },
    {
        "id": "218",
        "nombre": "Hijuelas"
    },
    {
        "id": "1019",
        "nombre": "Horcon"
    },
    {
        "id": "1482",
        "nombre": "Horcon Iv"
    },
    {
        "id": "2344",
        "nombre": "Hornitos"
    },
    {
        "id": "1267",
        "nombre": "Hornopiren"
    },
    {
        "id": "1336",
        "nombre": "Hospital"
    },
    {
        "id": "1266",
        "nombre": "Hualaihue"
    },
    {
        "id": "1033",
        "nombre": "Hualane"
    },
    {
        "id": "20",
        "nombre": "Hualpencillo"
    },
    {
        "id": "1247",
        "nombre": "Hualpin"
    },
    {
        "id": "1213",
        "nombre": "Hualqui"
    },
    {
        "id": "1512",
        "nombre": "Huamalata"
    },
    {
        "id": "1023",
        "nombre": "Huara"
    },
    {
        "id": "171",
        "nombre": "Huasco"
    },
    {
        "id": "1539",
        "nombre": "Huelden"
    },
    {
        "id": "2543",
        "nombre": "Huellahue"
    },
    {
        "id": "1508",
        "nombre": "Huelquen"
    },
    {
        "id": "1364",
        "nombre": "Huentelauquen"
    },
    {
        "id": "1215",
        "nombre": "Huepil"
    },
    {
        "id": "1542",
        "nombre": "Huillinco"
    },
    {
        "id": "2496",
        "nombre": "Huintil"
    },
    {
        "id": "196",
        "nombre": "Illapel"
    },
    {
        "id": "1197",
        "nombre": "Iloca"
    },
    {
        "id": "5",
        "nombre": "Iquique"
    },
    {
        "id": "443",
        "nombre": "Isla De Maipo"
    },
    {
        "id": "1348",
        "nombre": "Isla De Pascua"
    },
    {
        "id": "1349",
        "nombre": "Isla Juan Fernandez"
    },
    {
        "id": "206",
        "nombre": "Isla Negra"
    },
    {
        "id": "2559",
        "nombre": "Isla Santa Maria"
    },
    {
        "id": "2335",
        "nombre": "Isluga"
    },
    {
        "id": "2465",
        "nombre": "Juncal"
    },
    {
        "id": "2656",
        "nombre": "La Araucana"
    },
    {
        "id": "2347",
        "nombre": "La Arena"
    },
    {
        "id": "2551",
        "nombre": "La Arena Pto Montt"
    },
    {
        "id": "40",
        "nombre": "La Calera"
    },
    {
        "id": "2364",
        "nombre": "La Cebada"
    },
    {
        "id": "188",
        "nombre": "La Chimba"
    },
    {
        "id": "215",
        "nombre": "La Cruz"
    },
    {
        "id": "1164",
        "nombre": "La Dormida"
    },
    {
        "id": "1177",
        "nombre": "La Estrella"
    },
    {
        "id": "1546",
        "nombre": "La Hauyca"
    },
    {
        "id": "1025",
        "nombre": "La Higuera"
    },
    {
        "id": "2539",
        "nombre": "La Jarilla"
    },
    {
        "id": "1298",
        "nombre": "La Junta"
    },
    {
        "id": "42",
        "nombre": "La Ligua"
    },
    {
        "id": "1479",
        "nombre": "La Marquesa"
    },
    {
        "id": "888",
        "nombre": "La Negra"
    },
    {
        "id": "2464",
        "nombre": "La Obra"
    },
    {
        "id": "2696",
        "nombre": "La Palma De Quillota"
    },
    {
        "id": "1496",
        "nombre": "La Parva"
    },
    {
        "id": "2350",
        "nombre": "La Placilla (punitaqui)"
    },
    {
        "id": "2715",
        "nombre": "La Retuca"
    },
    {
        "id": "2430",
        "nombre": "La Rufina"
    },
    {
        "id": "4",
        "nombre": "La Serena"
    },
    {
        "id": "2401",
        "nombre": "La Tapera"
    },
    {
        "id": "1100",
        "nombre": "La Tirana"
    },
    {
        "id": "43",
        "nombre": "La Union"
    },
    {
        "id": "1239",
        "nombre": "Labranza"
    },
    {
        "id": "606",
        "nombre": "Lago Ranco"
    },
    {
        "id": "1307",
        "nombre": "Lago Verde"
    },
    {
        "id": "1506",
        "nombre": "Laguna Aculeo"
    },
    {
        "id": "1317",
        "nombre": "Laguna Blanca"
    },
    {
        "id": "221",
        "nombre": "Laguna Verde"
    },
    {
        "id": "2488",
        "nombre": "Lagunillas"
    },
    {
        "id": "41",
        "nombre": "Laja"
    },
    {
        "id": "1544",
        "nombre": "Lajas Blancas"
    },
    {
        "id": "444",
        "nombre": "Lampa"
    },
    {
        "id": "44",
        "nombre": "Lanco"
    },
    {
        "id": "1217",
        "nombre": "Laraquete"
    },
    {
        "id": "2429",
        "nombre": "Larmahue"
    },
    {
        "id": "1524",
        "nombre": "Las Breas"
    },
    {
        "id": "253",
        "nombre": "Las Cabras"
    },
    {
        "id": "1493",
        "nombre": "Las Cardas"
    },
    {
        "id": "1525",
        "nombre": "Las Cardas Sur"
    },
    {
        "id": "202",
        "nombre": "Las Cruces"
    },
    {
        "id": "2495",
        "nombre": "Las Dichas"
    },
    {
        "id": "1485",
        "nombre": "Las Dunas"
    },
    {
        "id": "2558",
        "nombre": "Las Hortencias"
    },
    {
        "id": "2363",
        "nombre": "Las Nieves"
    },
    {
        "id": "1526",
        "nombre": "Las Ramadas De Tulahuen"
    },
    {
        "id": "1152",
        "nombre": "Las Tacas"
    },
    {
        "id": "2509",
        "nombre": "Las Trancas"
    },
    {
        "id": "1174",
        "nombre": "Las Ventanas"
    },
    {
        "id": "1501",
        "nombre": "Las Vertientes"
    },
    {
        "id": "2437",
        "nombre": "Lasana"
    },
    {
        "id": "45",
        "nombre": "Lautaro"
    },
    {
        "id": "46",
        "nombre": "Lebu"
    },
    {
        "id": "1534",
        "nombre": "Lechagua"
    },
    {
        "id": "2549",
        "nombre": "Lenca"
    },
    {
        "id": "2571",
        "nombre": "Leonera"
    },
    {
        "id": "2487",
        "nombre": "Leyda"
    },
    {
        "id": "1093",
        "nombre": "Licanray"
    },
    {
        "id": "1034",
        "nombre": "Licanten"
    },
    {
        "id": "216",
        "nombre": "Limache"
    },
    {
        "id": "1514",
        "nombre": "Limari"
    },
    {
        "id": "1538",
        "nombre": "Linao"
    },
    {
        "id": "508",
        "nombre": "Linares"
    },
    {
        "id": "575",
        "nombre": "Linderos"
    },
    {
        "id": "2377",
        "nombre": "Liquine"
    },
    {
        "id": "2333",
        "nombre": "Lirima"
    },
    {
        "id": "325",
        "nombre": "Lirquen"
    },
    {
        "id": "1178",
        "nombre": "Litueche"
    },
    {
        "id": "108",
        "nombre": "Llaillay"
    },
    {
        "id": "1361",
        "nombre": "Llanos De Guanta"
    },
    {
        "id": "1020",
        "nombre": "Llanquihue"
    },
    {
        "id": "2392",
        "nombre": "Llico"
    },
    {
        "id": "603",
        "nombre": "Llifen"
    },
    {
        "id": "592",
        "nombre": "Llolleo"
    },
    {
        "id": "2463",
        "nombre": "Lo Chacon"
    },
    {
        "id": "246",
        "nombre": "Lo Miranda"
    },
    {
        "id": "1503",
        "nombre": "Lo Valdes"
    },
    {
        "id": "1366",
        "nombre": "Lo Valdivia"
    },
    {
        "id": "2634",
        "nombre": "Logistica Reversa"
    },
    {
        "id": "1179",
        "nombre": "Lolol"
    },
    {
        "id": "1494",
        "nombre": "Lomas De Lo Aguirre"
    },
    {
        "id": "50",
        "nombre": "Loncoche"
    },
    {
        "id": "1198",
        "nombre": "Longavi"
    },
    {
        "id": "445",
        "nombre": "Lonquen"
    },
    {
        "id": "1060",
        "nombre": "Lonquimay"
    },
    {
        "id": "1199",
        "nombre": "Lontue"
    },
    {
        "id": "52",
        "nombre": "Los Alamos"
    },
    {
        "id": "214",
        "nombre": "Los Andes"
    },
    {
        "id": "53",
        "nombre": "Los Angeles"
    },
    {
        "id": "2562",
        "nombre": "Los Boldos"
    },
    {
        "id": "2508",
        "nombre": "Los Horcones"
    },
    {
        "id": "1483",
        "nombre": "Los Hornos"
    },
    {
        "id": "54",
        "nombre": "Los Lagos"
    },
    {
        "id": "1471",
        "nombre": "Los Laureles"
    },
    {
        "id": "2518",
        "nombre": "Los Lingues"
    },
    {
        "id": "2462",
        "nombre": "Los Maitenes"
    },
    {
        "id": "1165",
        "nombre": "Los Molles"
    },
    {
        "id": "594",
        "nombre": "Los Muermos"
    },
    {
        "id": "1365",
        "nombre": "Los Niches"
    },
    {
        "id": "1522",
        "nombre": "Los Olivos"
    },
    {
        "id": "55",
        "nombre": "Los Sauces"
    },
    {
        "id": "2574",
        "nombre": "Los Tilos"
    },
    {
        "id": "195",
        "nombre": "Los Vilos"
    },
    {
        "id": "56",
        "nombre": "Lota"
    },
    {
        "id": "1090",
        "nombre": "Lumaco"
    },
    {
        "id": "57",
        "nombre": "Machali"
    },
    {
        "id": "1085",
        "nombre": "Mafil"
    },
    {
        "id": "446",
        "nombre": "Maipo"
    },
    {
        "id": "205",
        "nombre": "Maitencillo"
    },
    {
        "id": "2520",
        "nombre": "Malalcahuello"
    },
    {
        "id": "250",
        "nombre": "Malloa"
    },
    {
        "id": "447",
        "nombre": "Malloco"
    },
    {
        "id": "1547",
        "nombre": "Mamina"
    },
    {
        "id": "1537",
        "nombre": "Manao"
    },
    {
        "id": "2483",
        "nombre": "Mandinga"
    },
    {
        "id": "49",
        "nombre": "Marbella"
    },
    {
        "id": "1463",
        "nombre": "Marchihue"
    },
    {
        "id": "58",
        "nombre": "Maria Elena"
    },
    {
        "id": "448",
        "nombre": "Maria Pinto"
    },
    {
        "id": "2486",
        "nombre": "Matanzas"
    },
    {
        "id": "276",
        "nombre": "Maule"
    },
    {
        "id": "1069",
        "nombre": "Maullin"
    },
    {
        "id": "1543",
        "nombre": "Mechaico"
    },
    {
        "id": "2545",
        "nombre": "Mechuque"
    },
    {
        "id": "1270",
        "nombre": "Mehuin"
    },
    {
        "id": "2567",
        "nombre": "Meipo"
    },
    {
        "id": "59",
        "nombre": "Mejillones"
    },
    {
        "id": "1302",
        "nombre": "Melinka"
    },
    {
        "id": "1241",
        "nombre": "Melipeuco"
    },
    {
        "id": "449",
        "nombre": "Melipilla"
    },
    {
        "id": "2548",
        "nombre": "Metri"
    },
    {
        "id": "2445",
        "nombre": "Minas Del Prado"
    },
    {
        "id": "2493",
        "nombre": "Mincha"
    },
    {
        "id": "1220",
        "nombre": "Mininco"
    },
    {
        "id": "2332",
        "nombre": "Mocha"
    },
    {
        "id": "294",
        "nombre": "Molina"
    },
    {
        "id": "2322",
        "nombre": "Molinos"
    },
    {
        "id": "1218",
        "nombre": "Monte Aguila"
    },
    {
        "id": "2412",
        "nombre": "Monte Aymond"
    },
    {
        "id": "2349",
        "nombre": "Monte Grande"
    },
    {
        "id": "190",
        "nombre": "Monte Patria"
    },
    {
        "id": "2482",
        "nombre": "Montenegro"
    },
    {
        "id": "1154",
        "nombre": "Morrillos"
    },
    {
        "id": "60",
        "nombre": "Mulchen"
    },
    {
        "id": "61",
        "nombre": "Nacimiento"
    },
    {
        "id": "2444",
        "nombre": "Nahueltoro"
    },
    {
        "id": "1530",
        "nombre": "Nal"
    },
    {
        "id": "272",
        "nombre": "Nancagua"
    },
    {
        "id": "1180",
        "nombre": "Navidad"
    },
    {
        "id": "1054",
        "nombre": "Negrete"
    },
    {
        "id": "1275",
        "nombre": "Neltume"
    },
    {
        "id": "368",
        "nombre": "Niebla"
    },
    {
        "id": "1222",
        "nombre": "Ninhue"
    },
    {
        "id": "1367",
        "nombre": "Nipas"
    },
    {
        "id": "1047",
        "nombre": "Niquen"
    },
    {
        "id": "2526",
        "nombre": "Nirehuao"
    },
    {
        "id": "2499",
        "nombre": "Nirivilo"
    },
    {
        "id": "518",
        "nombre": "Nogales"
    },
    {
        "id": "459",
        "nombre": "Nos"
    },
    {
        "id": "1495",
        "nombre": "Noviciado"
    },
    {
        "id": "1252",
        "nombre": "Nueva Braunau"
    },
    {
        "id": "62",
        "nombre": "Nueva Imperial"
    },
    {
        "id": "2615",
        "nombre": "Ocoa"
    },
    {
        "id": "238",
        "nombre": "Olivar Alto"
    },
    {
        "id": "2516",
        "nombre": "Olivar Bajo"
    },
    {
        "id": "217",
        "nombre": "Olmue"
    },
    {
        "id": "63",
        "nombre": "Osorno"
    },
    {
        "id": "64",
        "nombre": "Ovalle"
    },
    {
        "id": "2320",
        "nombre": "Pachama"
    },
    {
        "id": "450",
        "nombre": "Padre Hurtado"
    },
    {
        "id": "344",
        "nombre": "Padre Las Casas"
    },
    {
        "id": "1155",
        "nombre": "Paihuano"
    },
    {
        "id": "65",
        "nombre": "Paillaco"
    },
    {
        "id": "451",
        "nombre": "Paine"
    },
    {
        "id": "159",
        "nombre": "Paipote"
    },
    {
        "id": "1276",
        "nombre": "Palena"
    },
    {
        "id": "1015",
        "nombre": "Palmilla San Fernando"
    },
    {
        "id": "1545",
        "nombre": "Palomar"
    },
    {
        "id": "2538",
        "nombre": "Palquial"
    },
    {
        "id": "180",
        "nombre": "Pan De Azucar"
    },
    {
        "id": "2421",
        "nombre": "Pangal"
    },
    {
        "id": "66",
        "nombre": "Panguipulli"
    },
    {
        "id": "1202",
        "nombre": "Panimavida"
    },
    {
        "id": "1028",
        "nombre": "Panquehue"
    },
    {
        "id": "2342",
        "nombre": "Paposo"
    },
    {
        "id": "67",
        "nombre": "Papudo"
    },
    {
        "id": "2542",
        "nombre": "Parcela El Carmen"
    },
    {
        "id": "1184",
        "nombre": "Paredones"
    },
    {
        "id": "1289",
        "nombre": "Pargua"
    },
    {
        "id": "292",
        "nombre": "Parral"
    },
    {
        "id": "1535",
        "nombre": "Pauldeo"
    },
    {
        "id": "1520",
        "nombre": "Pedregal"
    },
    {
        "id": "1040",
        "nombre": "Pelarco"
    },
    {
        "id": "251",
        "nombre": "Pelequen"
    },
    {
        "id": "1200",
        "nombre": "Pelluhue"
    },
    {
        "id": "1048",
        "nombre": "Pemuco"
    },
    {
        "id": "514",
        "nombre": "Penablanca"
    },
    {
        "id": "452",
        "nombre": "Penaflor"
    },
    {
        "id": "1041",
        "nombre": "Pencahue"
    },
    {
        "id": "69",
        "nombre": "Penco"
    },
    {
        "id": "2568",
        "nombre": "Perales"
    },
    {
        "id": "502",
        "nombre": "Peralillo"
    },
    {
        "id": "1070",
        "nombre": "Perquenco"
    },
    {
        "id": "1170",
        "nombre": "Petorca"
    },
    {
        "id": "1277",
        "nombre": "Petrohue"
    },
    {
        "id": "2564",
        "nombre": "Peulla"
    },
    {
        "id": "255",
        "nombre": "Peumo"
    },
    {
        "id": "1022",
        "nombre": "Pica"
    },
    {
        "id": "1523",
        "nombre": "Pichasca"
    },
    {
        "id": "1384",
        "nombre": "Pichi Pelluco"
    },
    {
        "id": "2358",
        "nombre": "Pichicuy"
    },
    {
        "id": "1168",
        "nombre": "Pichidangui"
    },
    {
        "id": "254",
        "nombre": "Pichidegua"
    },
    {
        "id": "1031",
        "nombre": "Pichilemu"
    },
    {
        "id": "2546",
        "nombre": "Piedra Azul"
    },
    {
        "id": "1248",
        "nombre": "Pillanlelbun"
    },
    {
        "id": "2512",
        "nombre": "Pingueral"
    },
    {
        "id": "1049",
        "nombre": "Pinto"
    },
    {
        "id": "453",
        "nombre": "Pirque"
    },
    {
        "id": "2814",
        "nombre": "Pisagua"
    },
    {
        "id": "1147",
        "nombre": "Pisco Elqui"
    },
    {
        "id": "71",
        "nombre": "Pitrufquen"
    },
    {
        "id": "1016",
        "nombre": "Placilla (san Fernando)"
    },
    {
        "id": "1187",
        "nombre": "Placilla (vina Del Mar)"
    },
    {
        "id": "51",
        "nombre": "Playa Ancha"
    },
    {
        "id": "1353",
        "nombre": "Poconchile"
    },
    {
        "id": "2420",
        "nombre": "Polcura"
    },
    {
        "id": "1340",
        "nombre": "Polpaico"
    },
    {
        "id": "2460",
        "nombre": "Pomaire"
    },
    {
        "id": "2362",
        "nombre": "Popeta"
    },
    {
        "id": "2553",
        "nombre": "Porma"
    },
    {
        "id": "1224",
        "nombre": "Portezuelo"
    },
    {
        "id": "1329",
        "nombre": "Portillo"
    },
    {
        "id": "1325",
        "nombre": "Porvenir"
    },
    {
        "id": "72",
        "nombre": "Pozo Almonte"
    },
    {
        "id": "1320",
        "nombre": "Primavera"
    },
    {
        "id": "207",
        "nombre": "Puchuncavi"
    },
    {
        "id": "73",
        "nombre": "Pucon"
    },
    {
        "id": "2443",
        "nombre": "Pueblo Seco"
    },
    {
        "id": "2519",
        "nombre": "Puelo"
    },
    {
        "id": "2517",
        "nombre": "Puente Negro"
    },
    {
        "id": "1532",
        "nombre": "Puente Quilo"
    },
    {
        "id": "2427",
        "nombre": "Puertecillo"
    },
    {
        "id": "1290",
        "nombre": "Puerto Aguirre"
    },
    {
        "id": "1488",
        "nombre": "Puerto Aldea"
    },
    {
        "id": "593",
        "nombre": "Puerto Aysen"
    },
    {
        "id": "1310",
        "nombre": "Puerto Bertrand"
    },
    {
        "id": "2409",
        "nombre": "Puerto Bories"
    },
    {
        "id": "1306",
        "nombre": "Puerto Chacabuco"
    },
    {
        "id": "1305",
        "nombre": "Puerto Cisnes"
    },
    {
        "id": "2521",
        "nombre": "Puerto Dominguez"
    },
    {
        "id": "74",
        "nombre": "Puerto Montt"
    },
    {
        "id": "1319",
        "nombre": "Puerto Natales"
    },
    {
        "id": "345",
        "nombre": "Puerto Saavedra"
    },
    {
        "id": "2408",
        "nombre": "Puerto Toro"
    },
    {
        "id": "1376",
        "nombre": "Puerto Tranquilo"
    },
    {
        "id": "75",
        "nombre": "Puerto Varas"
    },
    {
        "id": "1486",
        "nombre": "Puerto Velero"
    },
    {
        "id": "1321",
        "nombre": "Puerto Williams"
    },
    {
        "id": "1188",
        "nombre": "Pumanque"
    },
    {
        "id": "1027",
        "nombre": "Punitaqui"
    },
    {
        "id": "121",
        "nombre": "Punta Arenas"
    },
    {
        "id": "1484",
        "nombre": "Punta Colorada"
    },
    {
        "id": "1527",
        "nombre": "Punta Corona"
    },
    {
        "id": "2510",
        "nombre": "Punta De Parra"
    },
    {
        "id": "2485",
        "nombre": "Punta De Tralca"
    },
    {
        "id": "2406",
        "nombre": "Punta Delgada"
    },
    {
        "id": "2535",
        "nombre": "Punta Lavapie"
    },
    {
        "id": "2381",
        "nombre": "Punucapa"
    },
    {
        "id": "1071",
        "nombre": "Puqueldon"
    },
    {
        "id": "1061",
        "nombre": "Puren"
    },
    {
        "id": "77",
        "nombre": "Purranque"
    },
    {
        "id": "1081",
        "nombre": "Putaendo"
    },
    {
        "id": "1354",
        "nombre": "Putre"
    },
    {
        "id": "1312",
        "nombre": "Puyuhuapi"
    },
    {
        "id": "2754",
        "nombre": "Quebrada De Alvarado"
    },
    {
        "id": "1478",
        "nombre": "Quebrada De Talca"
    },
    {
        "id": "1280",
        "nombre": "Queilen"
    },
    {
        "id": "1063",
        "nombre": "Quellon"
    },
    {
        "id": "2492",
        "nombre": "Quelon"
    },
    {
        "id": "1072",
        "nombre": "Quemchi"
    },
    {
        "id": "1245",
        "nombre": "Quepe"
    },
    {
        "id": "1533",
        "nombre": "Quetalmahue"
    },
    {
        "id": "1474",
        "nombre": "Queule"
    },
    {
        "id": "1225",
        "nombre": "Quilaco"
    },
    {
        "id": "2540",
        "nombre": "Quilche"
    },
    {
        "id": "1362",
        "nombre": "Quilimari"
    },
    {
        "id": "2547",
        "nombre": "Quillaipe"
    },
    {
        "id": "2654",
        "nombre": "Quillaitun"
    },
    {
        "id": "1055",
        "nombre": "Quilleco"
    },
    {
        "id": "48",
        "nombre": "Quillon"
    },
    {
        "id": "210",
        "nombre": "Quillota"
    },
    {
        "id": "78",
        "nombre": "Quilpue"
    },
    {
        "id": "2442",
        "nombre": "Quinchamali"
    },
    {
        "id": "1278",
        "nombre": "Quinchao"
    },
    {
        "id": "256",
        "nombre": "Quinta De Tilcoco"
    },
    {
        "id": "1171",
        "nombre": "Quintay"
    },
    {
        "id": "225",
        "nombre": "Quintero"
    },
    {
        "id": "79",
        "nombre": "Quirihue"
    },
    {
        "id": "1379",
        "nombre": "Quiriquina"
    },
    {
        "id": "2563",
        "nombre": "Radal"
    },
    {
        "id": "2372",
        "nombre": "Rafael"
    },
    {
        "id": "1472",
        "nombre": "Ramadillas"
    },
    {
        "id": "80",
        "nombre": "Rancagua"
    },
    {
        "id": "1212",
        "nombre": "Ranguelmo"
    },
    {
        "id": "1226",
        "nombre": "Ranquil"
    },
    {
        "id": "1190",
        "nombre": "Rapel"
    },
    {
        "id": "1035",
        "nombre": "Rauco"
    },
    {
        "id": "1378",
        "nombre": "Rauquen"
    },
    {
        "id": "2544",
        "nombre": "Rayencura"
    },
    {
        "id": "1516",
        "nombre": "Recoleta Iv"
    },
    {
        "id": "81",
        "nombre": "Renaca"
    },
    {
        "id": "1073",
        "nombre": "Renaico"
    },
    {
        "id": "82",
        "nombre": "Rengo"
    },
    {
        "id": "236",
        "nombre": "Requinoa"
    },
    {
        "id": "1044",
        "nombre": "Retiro"
    },
    {
        "id": "2419",
        "nombre": "Rihue"
    },
    {
        "id": "211",
        "nombre": "Rinconada"
    },
    {
        "id": "2481",
        "nombre": "Rinconada De Guzman"
    },
    {
        "id": "2480",
        "nombre": "Rinconada De Silva"
    },
    {
        "id": "1466",
        "nombre": "Rinihue"
    },
    {
        "id": "2384",
        "nombre": "Rininahue"
    },
    {
        "id": "83",
        "nombre": "Rio Bueno"
    },
    {
        "id": "1032",
        "nombre": "Rio Claro"
    },
    {
        "id": "1156",
        "nombre": "Rio Hurtado"
    },
    {
        "id": "1308",
        "nombre": "Rio Ibanez"
    },
    {
        "id": "1323",
        "nombre": "Rio Verde"
    },
    {
        "id": "1468",
        "nombre": "Roble Huacho"
    },
    {
        "id": "1007",
        "nombre": "Rocas De Santo Domingo"
    },
    {
        "id": "1036",
        "nombre": "Romeral"
    },
    {
        "id": "516",
        "nombre": "Rosario"
    },
    {
        "id": "2522",
        "nombre": "Ruca Raqui (saavedra)"
    },
    {
        "id": "2441",
        "nombre": "Rucapequen"
    },
    {
        "id": "1504",
        "nombre": "Rungue"
    },
    {
        "id": "299",
        "nombre": "Sagrada Familia"
    },
    {
        "id": "1330",
        "nombre": "Saladillo"
    },
    {
        "id": "198",
        "nombre": "Salamanca"
    },
    {
        "id": "1502",
        "nombre": "San Alfonso"
    },
    {
        "id": "227",
        "nombre": "San Antonio"
    },
    {
        "id": "3",
        "nombre": "San Carlos"
    },
    {
        "id": "282",
        "nombre": "San Clemente"
    },
    {
        "id": "192",
        "nombre": "San Esteban"
    },
    {
        "id": "2513",
        "nombre": "San Fabian De Alico"
    },
    {
        "id": "213",
        "nombre": "San Felipe"
    },
    {
        "id": "85",
        "nombre": "San Fernando"
    },
    {
        "id": "1018",
        "nombre": "San Francisco De Mostazal"
    },
    {
        "id": "1500",
        "nombre": "San Gabriel"
    },
    {
        "id": "309",
        "nombre": "San Gregorio"
    },
    {
        "id": "1050",
        "nombre": "San Ignacio"
    },
    {
        "id": "2695",
        "nombre": "San Isidro De Quillota"
    },
    {
        "id": "283",
        "nombre": "San Javier"
    },
    {
        "id": "86",
        "nombre": "San Jose De La Mariquina"
    },
    {
        "id": "454",
        "nombre": "San Jose De Maipo"
    },
    {
        "id": "1548",
        "nombre": "San Juan"
    },
    {
        "id": "1517",
        "nombre": "San Julian"
    },
    {
        "id": "2459",
        "nombre": "San Manuel"
    },
    {
        "id": "1157",
        "nombre": "San Marcos"
    },
    {
        "id": "1051",
        "nombre": "San Nicolas"
    },
    {
        "id": "2556",
        "nombre": "San Patricio"
    },
    {
        "id": "2497",
        "nombre": "San Pedro De Alcantara"
    },
    {
        "id": "150",
        "nombre": "San Pedro De Atacama"
    },
    {
        "id": "1343",
        "nombre": "San Pedro De Melipilla"
    },
    {
        "id": "2595",
        "nombre": "San Pedro De Quillota"
    },
    {
        "id": "1042",
        "nombre": "San Rafael"
    },
    {
        "id": "1083",
        "nombre": "San Rosendo"
    },
    {
        "id": "209",
        "nombre": "San Sebastian"
    },
    {
        "id": "266",
        "nombre": "San Vicente De Taguatagua"
    },
    {
        "id": "87",
        "nombre": "Santa Barbara"
    },
    {
        "id": "1219",
        "nombre": "Santa Clara"
    },
    {
        "id": "25",
        "nombre": "Santa Cruz"
    },
    {
        "id": "1053",
        "nombre": "Santa Juana"
    },
    {
        "id": "229",
        "nombre": "Santa Maria"
    },
    {
        "id": "461",
        "nombre": "Santa Rosa De Chena"
    },
    {
        "id": "1",
        "nombre": "Santiago"
    },
    {
        "id": "2541",
        "nombre": "Sector La Pena"
    },
    {
        "id": "2360",
        "nombre": "Sewell"
    },
    {
        "id": "118",
        "nombre": "Sierra Gorda"
    },
    {
        "id": "2434",
        "nombre": "Socaire"
    },
    {
        "id": "2319",
        "nombre": "Socoroma"
    },
    {
        "id": "1513",
        "nombre": "Socos"
    },
    {
        "id": "2318",
        "nombre": "Sora"
    },
    {
        "id": "187",
        "nombre": "Sotaqui"
    },
    {
        "id": "2330",
        "nombre": "Sotoca"
    },
    {
        "id": "2565",
        "nombre": "Tabolango"
    },
    {
        "id": "456",
        "nombre": "Talagante"
    },
    {
        "id": "91",
        "nombre": "Talca"
    },
    {
        "id": "92",
        "nombre": "Talcahuano"
    },
    {
        "id": "93",
        "nombre": "Taltal"
    },
    {
        "id": "1492",
        "nombre": "Tambillo"
    },
    {
        "id": "2440",
        "nombre": "Tanilvoro"
    },
    {
        "id": "94",
        "nombre": "Temuco"
    },
    {
        "id": "298",
        "nombre": "Teno"
    },
    {
        "id": "1059",
        "nombre": "Teodoro Schmidt"
    },
    {
        "id": "160",
        "nombre": "Tierra Amarilla"
    },
    {
        "id": "1158",
        "nombre": "Tierras Blancas"
    },
    {
        "id": "2317",
        "nombre": "Tignamar"
    },
    {
        "id": "1067",
        "nombre": "Tiltil"
    },
    {
        "id": "1130",
        "nombre": "Toconao"
    },
    {
        "id": "95",
        "nombre": "Tocopilla"
    },
    {
        "id": "1089",
        "nombre": "Tolten"
    },
    {
        "id": "96",
        "nombre": "Tome"
    },
    {
        "id": "185",
        "nombre": "Tongoy"
    },
    {
        "id": "2425",
        "nombre": "Topocalma"
    },
    {
        "id": "2573",
        "nombre": "Toroico"
    },
    {
        "id": "1324",
        "nombre": "Torres Del Paine"
    },
    {
        "id": "1311",
        "nombre": "Tortel"
    },
    {
        "id": "1173",
        "nombre": "Totoralillo"
    },
    {
        "id": "97",
        "nombre": "Traiguen"
    },
    {
        "id": "2439",
        "nombre": "Tregualemu"
    },
    {
        "id": "1368",
        "nombre": "Trehuaco"
    },
    {
        "id": "2674",
        "nombre": "Tres Pinos"
    },
    {
        "id": "2379",
        "nombre": "Trovolhue"
    },
    {
        "id": "2417",
        "nombre": "Trupan"
    },
    {
        "id": "2534",
        "nombre": "Tubul"
    },
    {
        "id": "1230",
        "nombre": "Tucapel"
    },
    {
        "id": "1521",
        "nombre": "Tulahuen"
    },
    {
        "id": "2734",
        "nombre": "Tunquen"
    },
    {
        "id": "1327",
        "nombre": "Timaukel"
    },
    {
        "id": "98",
        "nombre": "Valdivia"
    },
    {
        "id": "1347",
        "nombre": "Valdivia De Paine"
    },
    {
        "id": "1499",
        "nombre": "Valle Nevado"
    },
    {
        "id": "2528",
        "nombre": "Valle Simpson"
    },
    {
        "id": "99",
        "nombre": "Vallenar"
    },
    {
        "id": "100",
        "nombre": "Valparaiso"
    },
    {
        "id": "2370",
        "nombre": "Vegas De Itata"
    },
    {
        "id": "1037",
        "nombre": "Vichuquen"
    },
    {
        "id": "101",
        "nombre": "Victoria"
    },
    {
        "id": "177",
        "nombre": "Vicuna"
    },
    {
        "id": "122",
        "nombre": "Vilcun"
    },
    {
        "id": "284",
        "nombre": "Villa Alegre"
    },
    {
        "id": "208",
        "nombre": "Villa Alemana"
    },
    {
        "id": "2478",
        "nombre": "Villa Alhue"
    },
    {
        "id": "2525",
        "nombre": "Villa Amengual"
    },
    {
        "id": "2552",
        "nombre": "Villa Boldo"
    },
    {
        "id": "2393",
        "nombre": "Villa Cerro Castillo"
    },
    {
        "id": "2676",
        "nombre": "Villa Los Rios"
    },
    {
        "id": "1301",
        "nombre": "Villa Manihuales"
    },
    {
        "id": "2416",
        "nombre": "Villa Mercedes"
    },
    {
        "id": "1304",
        "nombre": "Villa Ohiggins"
    },
    {
        "id": "2524",
        "nombre": "Villa Ortega"
    },
    {
        "id": "2505",
        "nombre": "Villa Prat"
    },
    {
        "id": "2449",
        "nombre": "Villa Santa Lucia"
    },
    {
        "id": "103",
        "nombre": "Villarrica"
    },
    {
        "id": "1380",
        "nombre": "Villuco"
    },
    {
        "id": "104",
        "nombre": "Vina Del Mar"
    },
    {
        "id": "2315",
        "nombre": "Visviri"
    },
    {
        "id": "2794",
        "nombre": "Yape"
    },
    {
        "id": "1045",
        "nombre": "Yerbas Buenas"
    },
    {
        "id": "105",
        "nombre": "Yumbel"
    },
    {
        "id": "333",
        "nombre": "Yungay"
    },
    {
        "id": "1529",
        "nombre": "Yuste"
    },
    {
        "id": "106",
        "nombre": "Zapallar"
    },
    {
        "id": "2489",
        "nombre": "Zemita"
    }
]

const FormCheckout = ({onChange, values, setvalues, setTarifa}) => {
    const [checked, setChecked] = useState(true);
    const result = JSON.parse(localStorage.getItem("carrito"));
    const [value, setValue] = useState("boleta");

    const [,,,,total,] = useCart(result);
    const {firstName, lastName, rut, direccion, numero, comuna, ciudad, region, codigopostal, telefono, telefono2, correo,boletaFactura,same,nombreB,apellidoB,rutB,direccionB,telefonoB,correoB, giroB,nombreS,apellidoS,companyS,direccionS,localidadS,codigopostalS,detalle} = values;

    useEffect(async() => {
        var contadorTotal = 0;
        if(result != null){
            if(total > 50000 && region == 1){
                setTarifa(4990);
            }else{
                result.forEach(async(element) => {
                    const data = {
                        height :  element.dimension.height === "" ? 10 : element.dimension.height * element.cantidad,
                        width: element.dimension.width === "" ? 10 : parseFloat(element.dimension.width),
                        length: element.dimension.length === "" ? 10 : parseFloat(element.dimension.length),
                        weight: element.peso === "" ? 5 : element.peso * element.cantidad,
                        destination: parseInt(region),
                    }
                    const resultado = await getTarifa(data);
                    if(resultado.cost > 0){
                        contadorTotal = contadorTotal + Math.trunc(resultado.cost);
                        setTarifa(contadorTotal);
                    }else{
                        setTarifa(0);
                    }
                });
            }
        }
    }, [region]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleChange2 = (event) => {
        setChecked(event.target.checked);
    };

    const calcularTarifa = async (e) => {
        var {name, value} = e.target;
        e.preventDefault();
        setvalues({...values, [name]:value});
    }

    return ( 
        <>
            <h2>Detalles de facturación</h2>
            <div className="campo">
                <div className="mitad">
                    <label>Nombre <span className="span">*</span> </label>
                    <input 
                        type="text" 
                        placeholder="Nombre"
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        onChange={onChange}
                    />
                </div>
                <div className="mitad">
                    <label>Apellido <span className="span">*</span> </label>
                    <input 
                        type="text"
                        placeholder="Apellido"
                        name="lastName"
                        id="lastName"
                        value={lastName}
                        onChange={onChange}
                    />
                </div>
            </div>
            <div className="campo">
                <label>Rut <span className="span">*</span></label>
                <input 
                    type="text" 
                    placeholder="Rut"
                    name="rut"
                    id="rut"
                    value={rut}
                    onChange={onChange}
                />
            </div>
            <div className="campo">
                <label>Dirección de la calle <span className="span">*</span></label>
                <input 
                    type="text" 
                    placeholder="Direccion de la calle"
                    name="direccion"
                    id="direccion"
                    value={direccion}
                    onChange={onChange}
                />
            </div>
            <div className="campo">
                <label>Numero de Departamento / Local / Parcela / Sitio</label>
                <input 
                    type="text"
                    placeholder="Numero de Departamento / Local / Parcela / Sitio"
                    name="numero"
                    id="numero"
                    value={numero}
                    onChange={onChange}
                />
            </div>
            <div className="campo">
                <label>Comuna <span className="span">*</span></label>
                <input 
                    type="text" 
                    placeholder="Comuna"
                    name="comuna"
                    id="comuna"
                    value={comuna}
                    onChange={onChange}
                />
            </div>
            <div className="campo">
                <label>Ciudad <span className="span">*</span></label>
                <input 
                    type="text" 
                    placeholder="Ciudad"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={onChange}
                />
            </div>
            <div className="campo">
                <label>Región <span className="span">*</span></label>
                <select name="region" id="region" onChange={calcularTarifa}>
                    {
                        jsonList.map(element => <option value={element.id}>{element.nombre}</option>)
                    }
                </select>
            </div>
            <div className="campo">
                <label>Código Postal</label>
                <input 
                    type="text" 
                    placeholder="Código postal"
                    name="codigopostal"
                    id="codigopostal"
                    value={codigopostal}
                    onChange={onChange}
                />
            </div>
            <div className="campo">
                <label>Teléfono <span className="span">*</span></label>
                <input 
                    type="text" 
                    name="telefono"
                    placeholder="Teléfono"
                    id="telefono"
                    value={telefono}
                    onChange={onChange}
                />
            </div>
            <div className="campo">
                <label>Teléfono 2 <span className="span">*</span></label>
                <input 
                    type="text" 
                    placeholder="Telefono 2"
                    name="telefono2"
                    id="telefono2"
                    value={telefono2}
                    onChange={onChange}
                />
            </div>
            <div className="campo">
                <label>Correo electrónico <span className="span" >*</span></label>
                <input 
                    type="text" 
                    placeholder="Correl electrónico"
                    name="correo"
                    id="correo"
                    value={correo}
                    onChange={onChange}
                />
            </div>
            <div className="campo">
                <FormControl component="fieldset">
                    <label>¿Boleta o Factura?</label>
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="boleta" control={<Radio color="primary" />} label="Boleta" />
                        <FormControlLabel value="factura" control={<Radio color="primary" />} label="Factura" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="campo">
                <label>
                    <Checkbox
                        checked={checked}
                        onChange={handleChange2}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        color="primary"
                    />
                    ¿Usar los mismos datos de facturación ingresados anteriormente?
                </label>
            </div>
            {!checked? 
                <>
                    <div className="campo">
                        <div className="mitad">
                            <label>Nombre <span className="span">*</span> </label>
                            <input 
                                type="text" 
                                placeholder="Nombre"
                                name="nombreB"
                                id="nombreB"
                                value={nombreB}
                                onChange={onChange}
                            />
                        </div>
                        <div className="mitad">
                            <label>Apellido <span className="span">*</span> </label>
                            <input 
                                type="text" 
                                placeholder="Apellido"
                                name="apellidoB"
                                id="apellidoB"
                                value={apellidoB}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="campo">
                        <label>Rut <span className="span">*</span></label>
                        <input 
                            type="text" 
                            placeholder="Rut"
                            name="rutB"
                            id="rutB"
                            value={rutB}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo">
                        <label>Dirección <span className="span">*</span></label>
                        <input 
                            type="text" 
                            placeholder="Dirección"
                            name="direccionB"
                            id="direccionB"
                            value={direccionB}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo">
                        <label>Teléfono <span className="span">*</span></label>
                        <input 
                            type="text" 
                            placeholder="Teléfono"
                            name="telefonoB"
                            id="telefonoB"
                            value={telefonoB}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo">
                        <label>Correo electrónico <span className="span" >*</span></label>
                        <input 
                            type="text"
                            placeholder="correoB"
                            name="correoB"
                            id="correoB"
                            values={correoB}
                            onChange={onChange}
                        />
                    </div>
                </>
            :
            null
        }
        {value === "factura"? 
            <div className="campo">
                <label>Giro <span className="span" >*</span></label>
                <input 
                    type="text"
                    placeholder="Giro (Solo para facturas)"
                    name="giroB"
                    id="giroB"
                    value={giroB}
                    onChange={giroB}
                />
            </div>
        :
            null
        }
            <h2>Datos de envío</h2>
            <div className="campo">
                <div className="mitad">
                    <label>Nombre *</label>
                    <input 
                        type="text" 
                        placeholder="Nombre"
                        value={nombreS} 
                        name="nombreS"
                        id="nombreS"
                        onChange={onChange}
                    />
                </div>
                <div className="mitad">
                    <label>Apellido *</label>
                    <input 
                        type="text" 
                        placeholder="Apellido"
                        value={apellidoS} 
                        name="apellidoS"
                        id="apellidoS"
                        onChange={onChange}
                    />
                </div>
            </div>
            <div className="campo">
                <label>Nombre de la empresa *</label>
                <input 
                    type="text" 
                    placeholder="Nombre de la empresa"
                    value={companyS}
                    name="companyS"
                    id="companyS"
                    onChange={onChange}
                />
            </div>
            <div className="campo">
                <label>Dirección de la calle*</label>
                <input 
                    type="text" 
                    placeholder="Dirección"
                    value={direccionS}
                    name="direccionS"
                    id="direccionS"
                    onChange={onChange}
                />
            </div>
            <div className="campo">
                <label>Localidad / Ciudad*</label>
                <input 
                    placeholder="Ciudad"
                    type="text" 
                    value={localidadS}
                    name="localidadS"
                    id="localidadS"
                    onChange={onChange}
                />
            </div>
            <div className="campo">
                <label>Codigo Postal*</label>
                <input 
                    placeholder="Código Postal"
                    type="text" 
                    value={codigopostalS}
                    name="codigopostalS"
                    id="codigopostalS"
                    onChange={onChange}
                />
            </div>
            <div className="campo">
                <label>Detalles del pedido</label>
                <textarea 
                    rows="5"
                    type="text" 
                    value={detalle}
                    name="detalle"
                    id="detalle"
                    onChange={onChange}
                />
            </div>
        </>
    );
}
 
export default FormCheckout;