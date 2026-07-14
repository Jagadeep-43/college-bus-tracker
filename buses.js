
const buses = [
{
    number: "01",
    route: "K R THOPPUR TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "KR THOPPUR",
        "STEEL PLANT",
        "MARAMANGALATHU PATTY",
        "MEDICAL COLLEGE",
        "PALL PANNAI",
        "SITHANOOR",
        "SOLAMPALAM",
        "KIOT"
    ]
},
{
    number: "02",
    route: "BHAVANI BUS STAND TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "BHAVANI BUS STAND",
        "ANTHIYUR PIRIVU",
        "BHAVANI OLD BUS STAND",
        "KALINGARAYANPALAYAM",
        "LAKSHMI NAGAR",
        "COLONY HOSPITAL",
        "KOMARAPALAYAM",
        "AANGUR ROAD",
        "RAJAM THEATER",
        "KATHARI PIRIVU",
        "VALAIYAKARANUR",
        "PALLAKKAPALAYAM",
        "PACHAMPALAYAM",
        "KAVANDANUR",
        "ICL",
        "VAIKUNDHAM",
        "THALAIYUR",
        "KIOT"
    ]
},
{
    number: "03",
    route: "SALEM PRABATH TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "PRABATH",
        "KIOT"
    ]
},
{
    number: "04",
    route: "THEVUR TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "KANNIYALAM PATTI",
        "THEVUR",
        "MAYLAMPATTI",
        "PALAKARAN KOTTAI",
        "KULLAMPATTI",
        "MOOLAPATHAI",
        "VELLARI VELLI",
        "HOUSING BOARD",
        "EDAPPADI",
        "VELLANDI VALASU",
        "SUNNAMBU SOOLAI",
        "RANGAMPALAYAM",
        "PERIVU ROAD",
        "VELLAIYAMPALAYAM",
        "KUTHADI PALAYAM",
        "KALIPATTI PERIVU ROAD",
        "R.K. THEATER & MILL",
        "KIOT"
    ]
},
{
    number: "05",
    route: "AALAMPALAYAM TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "AALAMPALAYAM",
        "SPB COLONY",
        "ANNA NAGAR",
        "K.S.R COLLEGE",
        "VARAPPALAYAM",
        "THOKKAVADI",
        "KOOTAPALLI",
        "RAJAGOUNDAMPALAYAM",
        "SANTHA PETTAI",
        "T.CODE NEW-OLD BUS STAND",
        "SETHARAMPALAYAM",
        "SANGAGIRI RS",
        "KOLIKAAL NATHAM",
        "VADUGAPATTI",
        "KANCHAM PUTHUR",
        "THALAIYUR",
        "R.K. THEATER & MILL",
        "KIOT"
    ]
},
{
    number: "06",
    route: "NAMAKKAL TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "NAMAKKAL BUS STAND",
        "SALEM ROAD",
        "CHELLAPPAMPATTI",
        "BUTHANSANTHAI",
        "KALANGANI",
        "PUTHU CHATHIRAM",
        "ANDALOOR GATE",
        "GURUSAMIPALAYAM",
        "VAIYAPPAM MALAI",
        "AATHUMEDU",
        "KOTTAPALAYAM",
        "M.METTUPALAYAM",
        "MALLAI SANTHAPAVADI",
        "MALLASAMUTHIRAM",
        "KALIPPATI",
        "ATTAYAMPATTY",
        "KIOT"
    ]
},
{
    number: "07",
    route: "SIVADHA PURAM TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "SIVADHA PURAM",
        "PANAKADU",
        "THIRUMALAIGIRI",
        "NALLAMPATTY",
        "MURUNGAPATTY",
        "CHITTAR KOVIL",
        "K.K NAGAR",
        "KADAIYAM PATTY",
        "ELAMPILLAI SANTHI STUDIO",
        "ELAMPILLAI BUS STAND",
        "PERUMAGOVUNDAMPATTI",
        "VEMBADITHALAM",
        "KIOT"
    ]
},
{
    number: "08",
    route: "PAKKANADU TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "AADAIYUR",
        "PAKKANADU",
        "VANNAKUTTAI",
        "SOWRIYUR",
        "ALAMARAM",
        "JALAGANDAPURAM",
        "KAPPRATHAMPATTI",
        "PANIKKANUR",
        "ETIKUTTAI MEDU",
        "AEGAPURAM",
        "KOOTHAMPALAYAM",
        "THAILAMPATTI",
        "THADIKARANUR",
        "THEPPAKUTTAI",
        "PERUMAGOVUNDAMPATTI",
        "VEMBADITHALAM",
        "KIOT"
    ]
},
{
    number: "09",
    route: "PANIKKANUR TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "PANIKKANUR",
        "SAMUTHIRAM",
        "PUDHUPALAYAM",
        "SADAIYAMPALAYAM",
        "KORANAMPATTY",
        "MOOLAPPATHAI",
        "PALLIPATTI",
        "KATCHIPALLI",
        "KONGANAPURAM",
        "ERUMAPATTY PRIVU",
        "MATTAMPATTY",
        "KANNANTHERI",
        "ONDIPANNAI",
        "SUNDA METTUR",
        "ALAGANUR",
        "MAGUDANCHAVADI",
        "KIOT"
    ]
},
{
    number: "10",
    route: "SALEM YERCAUD ADIVAARAM TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "SALEM YERCAUD ADIVAARAM",
        "LAW COLLEGE",
        "KOLLAPATTI",
        "GORIMADU",
        "HOUSING BOARD",
        "CENTRAL JAIL",
        "HASTHAMPATTY",
        "VINCENT",
        "KIOT"
    ]
},
  {
    number: "11",
    route: "KANNAKURICHI TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "KANNAKURICHI",
        "HOUSING UNIT",
        "IYENTHAR MAALIGAHI",
        "RAMANATHAPURAM",
        "CHINNA MUNIYAPPAN KOVIL",
        "CHINNATHIRUPATHI",
        "MANAKKADU",
        "KIOT"
    ]
},
{
    number: "12",
    route: "RASIPURAM TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "RASIPURAM OLD BUS STAND",
        "SRV SCHOOL",
        "ATTAYAMPATTY PRIVU",
        "ATHANOOR",
        "AARAMATHAMPALAYAM",
        "OOLAIPATTI",
        "NADUPATTI",
        "VELLAPILLAYAR KOVIL",
        "VENNANDUR",
        "ANNA SILAI",
        "KAMARAJAR SILAI",
        "SAPPAIYAPURAM",
        "RAMALINGAM HOSPITAL",
        "MARIYAMMAN KOVIL",
        "KIOT"
    ]
},
{
    number: "13",
    route: "SALEM VIJAYA HOSPITAL TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "VIJAYA HOSPITAL",
        "RAMAKRISHNA PARK",
        "RAMAKRISHNA ROAD",
        "SARADHA COLLEGE",
        "FAIR LANDS",
        "ALAGAPURAM",
        "KIOT"
    ]
},
{
    number: "14",
    route: "SALEM PILLIYAR NAGAR TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "SALEM PILLIYAR NAGAR",
        "T.M.S. SET",
        "PATTAKOVIL",
        "RAJAGANAPATHI KOVIL",
        "CSI SCHOOL & MUNICIPALITY OFFICE",
        "KIOT"
    ]
},
{
    number: "15",
    route: "SALEM AMMAPETTAI TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "JOTHI SCHOOL",
        "HOLY CROSS SCHOOL",
        "UDAYAPATTY BY-PASS",
        "KUMARAGIRI",
        "KIOT"
    ]
},
{
    number: "16",
    route: "AATHUR TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "AATHUR",
        "NARASINGAPURAM",
        "SELLIYAMPALAYAM",
        "KOTHAMBADI",
        "PETHANAYAKKANPALAYAM",
        "PUTHARAGOVUNDAMPALAYAM",
        "VALAPPADI",
        "MUTHAMPATTI",
        "SASHANCHAVADI",
        "METTUPATTI",
        "KIOT"
    ]
},
{
    number: "17",
    route: "SOWDESHWARI COLLEGE TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "KONDALAMPATTY BYE PASS",
        "KONDALAMPATTY",
        "SANDHAI PETTAI",
        "NEIKARAPATTI",
        "POOLAVARI PIRIVU",
        "ARIYANOOR",
        "VEERAPANDI",
        "PALAMPATTY",
        "BIROGY",
        "S-PALAM",
        "NAINAMPATTI",
        "KIOT"
    ]
},
{
    number: "18",
    route: "SALEM KUPPANUR TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "SALEM KUPPANUR",
        "VALASAIUR",
        "PALLIPATTI",
        "VEEMANUER",
        "VEERANAM",
        "MANARPALAYAM PRIVU",
        "VAIKALPATTARI",
        "KIOT"
    ]
},
{
    number: "19",
    route: "VANAVASI TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "VANAVASI",
        "SOORAPALLI",
        "JALAKANDAPURAM",
        "SELAVADI",
        "THARAMANGALAM",
        "THUTTAM PATTI",
        "CHINNA PILLAIYER, PANANCHARY",
        "MADATHUR",
        "EDANGANA SALAI, SHENGALSULAI",
        "KARIKADAI",
        "KIOT"
    ]
},
{
    number: "20",
    route: "CHEKKAPATTI TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "CHEKKAPATTI",
        "ELACHIPALAYAM",
        "KUMARAMANGALAM",
        "VALARAI GATE",
        "T.GODE BUS STAND",
        "KAILASAM PALAYAM",
        "CHINNATHAMBI PALAYAM",
        "VATTUR ROAD",
        "MORE PALAYAM",
        "SEMBAMPALAYAM",
        "KALLUKADAI",
        "TCMS",
        "SURIYAGOUNDAMPALAYAM",
        "MALASAMUTHARAM HIGH SCHOOL",
        "MARULAIYAMPALAYAM",
        "KIOT"
    ]
},
  {
    number: "21",
    route: "MALLUR TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "MALLUR",
        "EARIKARAI",
        "SANTHIUR",
        "NILAVARA PATTI",
        "ALAGU NAGAR",
        "KIOT"
    ]
},
{
    number: "22",
    route: "METTUR TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "METTUR",
        "MADHA KOVIL",
        "CHINNA PARK",
        "SAM PALLI",
        "RAMAN NAGAR",
        "KUNJANDIYER",
        "VERAKKAL",
        "NANGA VALLI",
        "PERIYA SORAKAI",
        "KULLANUR",
        "SERANGANUR",
        "CHINNAPANPATTI",
        "ELAMPILLAI",
        "KIOT"
    ]
},
{
    number: "23",
    route: "PERUMAL KOVIL MEDU TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "PERUMAL KOVIL MEDU",
        "MUTTHANAYACKEN PATTY",
        "PAAGAL PATTY",
        "REDDY PATTY",
        "JUNCTION",
        "T.P.T (SONA COLLEGE)",
        "STATE BANK COLONY",
        "KIOT"
    ]
},
{
    number: "24",
    route: "PILLUKADAI TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "PILLUKADAI",
        "DHADAGAPATTY GATE",
        "KIOT"
    ]
},
{
    number: "25",
    route: "MANGALAPURAM TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "MANGALAPURAM",
        "METTALA",
        "NAMAGIRIPATTAI",
        "KAKAVERI",
        "RASIPURAM TVS",
        "RASIPURAM OLD BUS STAND",
        "SRV SCHOOL",
        "MASAKALIPATTI PIRIVU",
        "KIOT"
    ]
},
{
    number: "26",
    route: "AMMAPATTAI TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "AMMAPATTAI",
        "AMMAPATTAI JOTHI",
        "SARADHAS",
        "EASAN",
        "KIOT"
    ]
},
{
    number: "27",
    route: "M A M PETROL BUNK TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "M A M PETROL BUNK",
        "MEACHARI",
        "SATHAPADI",
        "KAMANERI",
        "SINTHAMANIYUR",
        "PALIKADAI",
        "5 - MYIL",
        "THULASAMPATTI",
        "AMARAKUNTHI",
        "THARAMANGALAM",
        "POST OFFICE",
        "KIOT"
    ]
},
{
    number: "28",
    route: "SALEM PRABATH TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "PRABATH",
        "KIOT"
    ]
},
{
    number: "29",
    route: "VELLALAPATTI TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "VELLALAPPATTI",
        "KARUPPUR",
        "KARUMBAALAI",
        "DALMIYA",
        "MAMANGAM",
        "SANKAR THEATRE",
        "KURANGUCHAVATI",
        "SEERAGAPADY",
        "KIOT"
    ]
},
{
    number: "30",
    route: "ERODE BUS STAND TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "ERODE BUS STAND",
        "KARUNGALPALAYAM",
        "REGISTER OFFICE",
        "PALLIPALAYAM",
        "OTTA METHAI",
        "VEPPADAI",
        "SANNIYASI PATTI RAILWAY GATE",
        "BHAVANI PERIVU ROAD",
        "PACHA KADU",
        "SANGARI POLICE STATION",
        "SANGARI OLD BUS STAND",
        "SANGARI NEW BUS STAND",
        "KONGANAPURAM PIRIVU",
        "KIOT"
    ]
},
  {
    number: "31",
    route: "AMMAPETTAI TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "AMMAPETTAI (JOTHI STOP)",
        "GURUVAYUR KOVIL",
        "PALANIYANDI HOSPITAL",
        "KIOT"
    ]
},
{
    number: "32",
    route: "SALEM FOUR ROADS TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "SALEM FOUR ROADS",
        "SALEM NEW BUS STAND",
        "ANNAPOORNA HOSPITAL",
        "KIOT"
    ]
},
{
    number: "33",
    route: "KOOTATHUPATTI TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "KOOTATHUPATTI",
        "A N MANGALAM",
        "KULLAMPATTI",
        "A PATTINAM HR SCHOOL",
        "AYOTHIYAPATTINAM",
        "UDAYAPATTI",
        "SEELANAICKENPATTY BYE PASS",
        "KIOT"
    ]
},
{
    number: "34",
    route: "SALEM OLD BUS STAND TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "SALEM OLD BUS STAND",
        "JAVULIKKADAI",
        "ANNATHANAPATTI",
        "KALYANA MANDABAM",
        "POWER HOUSE",
        "KIOT"
    ]
},
{
    number: "35",
    route: "PONNAMAPETTAI GATE TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "CHENNAI CAKES",
        "PUTHU MARIYAMMAN KOVIL",
        "WATER TANK",
        "PONNAMAPETTAI GATE",
        "GURUVAYURAPPAN KOVIL",
        "KIOT"
    ]
},
{
    number: "36",
    route: "PILLUKADAI TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "PILLUKADAI",
        "DHADAGAPATTY GATE",
        "KIOT"
    ]
},
{
    number: "37",
    route: "PUDHU ROAD TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "PUDHU ROAD",
        "REDDIPATTI BYE PASS",
        "BPC GAS BUNK",
        "AVR ROUNDANA",
        "RTO BYE PASS",
        "NEIKARAPATTI",
        "SEERAPADI",
        "RAKIPATTI",
        "KIOT"
    ]
},
{
    number: "38",
    route: "VINCENT TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "VINCENT",
        "GANDHI ROAD",
        "SUNDAR LODGE",
        "7 ARTS",
        "APSARA DOWN",
        "NETHIMEDU",
        "KIOT"
    ]
},
{
    number: "39",
    route: "DHARMAPURI TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "DHARMAPURI",
        "NALLAMPALLI",
        "THOMPARAKKAMPATTI",
        "PALAYAMPUTHUR TOLL GATE",
        "THOPPUR",
        "JODU KULI",
        "THEVATIPATTI",
        "POOSARIPATTI",
        "PANNAPATTI",
        "KAMALAPURAM",
        "OMALUR BUS STAND",
        "PULIYAMPATTI",
        "TOLL GATE",
        "PERIYAR UNIVERSITY",
        "KARUPPUR ENGINEERING COLLEGE",
        "KIOT"
    ]
},
{
    number: "40",
    route: "PERIYAR UNIVERSITY TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "TOLL GATE",
        "GOVT ENGINEERING COLLEGE",
        "KARUMBALAI",
        "DALMIA BOARD",
        "FIVE ROADS",
        "ARRS THEATRE",
        "THREE ROADS",
        "JAWAHAR MILL",
        "THIRUVAGOUNDANUR BYE PASS",
        "KIOT"
    ]
},
{
    number: "41",
    route: "PANAMARATHUPATTI TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "PANAMARATHUPATTI",
        "PANAMARATHUPATTI PIRIVU",
        "SEELANAICKENPATTY BYE PASS",
        "NPR SCHOOL",
        "DIVYA THEATRE",
        "KONDALAMPATTI BYE PASS",
        "KIOT"
    ]
},
{
    number: "42",
    route: "METTUPATTI TOLL GATE TO KIOT",
    arrival: "8:40 AM",
    stops: [
        "METTUPATTI TOLL GATE",
        "KARIPATTI",
        "MINNAMPALLI",
        "MASINAICKENPATTI",
        "ERUMAPALAYAM",
        "SANNIYASIGUNDU",
        "KIOT"
    ]
}

];
