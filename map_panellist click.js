
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var ytPlayers = new Array();




//"file:///Users/hanjeongho/Documents/GitHub/website/map.html"
/*
$.ajax({
    url:"https://api.twitch.tv/kraken/streams/?offset=0&limit=100&channel=149747285,197886470",
    type: "GET",
    dataType:"json",
    headers: {
        "Accept": "application/vnd.twitchtv.v5+json",
        "Client-ID": "wlamtfby1oxgzfzzemr02kpl32wj6c"
    },
})
    .done(function(channel){
        console.log(channel);
    })
    .fail(function(error){
        console.log(error);
    });
*/



var listCount = 0;
var myArray = new Array();
var ytCount = 0;

document.cookie = 'same-site-cookie=foo; SameSite=Lax';
document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';

var markerData = [
  {
    lat: 45.434038,
    lng: 12.346914,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/eE6VVJ3hvv8",
    title: "Tribute to Music Venice",
    nation: "Italy"
  },
  {
    lat: 45.430309,
    lng: 12.329755,
    icon: "http://labs.google.com/ridefinder/images/mm_20_blue.png",
    url: "https://www.youtube.com/embed/JqUREqYduHw",
    title: "Hotel American Dinesen",
    nation: "Italy"
  },
  {
    lat: 45.203078,
    lng: 12.299722,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/1pf1qjYpHlY",
    title: "Hotel Park Chioggia",
    nation: "Italy"
  },
  {
    lat: 45.4440906,
    lng: 12.3251189,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/HpZAez2oYsA",
    title: "Live View of Ponte delle Guglie Venice - View from Hotel Filù Venezia",
    nation: "Italy"
  },
  {
    lat: 45.440705,
    lng: 12.332468,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/cjCmsRjxVL0",
    title: "Hotel San Cassiano",
    nation: "Italy"
  }, {
    lat: 45.437783,
    lng: 12.340628,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/WjOGhNDX51M",
    title: "Ruzzini Palace Hotel",
    nation: "Italy"
  }, {
    lat: 45.437039,
    lng: 12.335081,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/BPXtn15_9qo",
    title: "Rialto Bridge",
    nation: "Italy"
  }, {
    lat: 42.792238,
    lng: 13.092661,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/C78daVqDpB8",
    title: "Piazza S. Benedetto",
    nation: "Italy"
  }, {
    lat: 67.289901,
    lng: 14.398237,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/5BHJBR3_dv8",
    title: "Bodo harbor KF",
    nation: "Norway"
  }, {
    lat: 67.289901,
    lng: 14.398237,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/yMSc-qqW3To",
    title: "Geirangerfjord cruise port, Geiranger",
    nation: "Norway",
    type: "port"
  }, {
    lat: 46.521178,
    lng: 6.636441,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/TyElel0QjCI",
    title: "Lausanne, pont Bessières",
    nation: "Swiss"
  }, {
    lat: 43.479394,
    lng: -110.762717,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/1EiC9bvVGnk",
    title: "Jackson Hole Wyoming USA Town Square",
    nation: "USA"
  },
  {
    lat: 37.551279,
    lng: 126.988227,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/am2Ivi346tQ",
    title: "N Seoul Tower",
    nation: "Korea"
  },
  {
    lat: 35.147920,
    lng: 129.130059,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/_YDqoaTAtww",
    title: "Gwangan Bridge",
    nation: "Korea"
  },
  {
    lat: 37.563188,
    lng: 126.987358,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/qFSdE5RTb_g",
    title: "Myeongdong Catholic Cathedral",
    nation: "Korea"
  },
  {
    lat: 35.168334,
    lng: 129.057178,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/Zlxa4-BTPAQ",
    title: "Busan Citizen Park",
    nation: "Korea"
  },
  {
    lat: 35.658182,
    lng: 139.758729,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/3mfWO1CwxpI",
    title: "Tokyo Shiodome Railway",
    nation: "Japan"
  },
  {
    lat: 35.071355,
    lng: 139.541443,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/CWNjN2bYzsA",
    title: "Mt. Hiroshige of Mt. Fuji",
    nation: "Japan"
  },
  {
    lat: 32.796601,
    lng: 130.703701,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/1_40EYOldbY",
    title: "Kumamoto City Shirakawa, RKK rooftop, Shirakawa-Changrokyo Bridge",
    nation: "Japan"
  },
  {
    lat: 35.503667,
    lng: 138.776795,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/Sv9hcJ3k5h4",
    title: "Mt.Fuji Panoramic Ropeway",
    nation: "Japan"
  },
  {
    lat: 34.733428,
    lng: 135.500188,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/DYk9RVhr9sc",
    title: "Shin-Osaka Station",
    nation: "Japan"
  },
  {
    lat: 36.139893,
    lng: 137.258576,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/PG8kZQ2EkSQ",
    title: "Takayama Jinya",
    nation: "Japan"
  },
  {
    lat: 34.245220,
    lng: 134.883358,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/ZOn7EVp9248",
    title: "Awaji Island Monkey Center",
    nation: "Japan"
  },
  {
    lat: 34.680655,
    lng: 135.202896,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/TsumMLWIsmM",
    title: "Kobe Port Terminal",
    nation: "Japan",
    type: "port"
  },
  {
    lat: 33.852062,
    lng: 132.786447,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/cqjaUAloHzQ",
    title: "Dogo Onsen Main Building",
    nation: "Japan"
  },
  {
    lat: 33.852062,
    lng: 132.786447,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/vM7_-e0gdsc",
    title: "Dogo Onsen Main Building front camera",
    nation: "Japan"
  },
  {
    lat: 32.214401,
    lng: 130.762849,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/dXZ3ns5v-e8",
    title: "Hitoyoshi City",
    nation: "Japan"
  },
  {
    lat: 35.141350,
    lng: 138.692828,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/jnuacQgCEEA",
    title: "Tagunoura Port",
    nation: "Japan",
    type: "port"
  },
  {
    lat: 36.566461,
    lng: 136.659937,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/TjyrhHdTJVY",
    title: "Kanazawa Castle Park",
    nation: "Japan"
  },
  {
    lat: 26.686426,
    lng: 127.876092,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/ZrJyATrrKVs",
    title: "Marine Expo Park Tropical Dream Center",
    nation: "Japan"
  },
  {
    lat: 37.049406,
    lng: 140.040905,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/M7htV04x6Z8",
    title: "HOTEL MORI NO KAZE NASU",
    nation: "Japan"
  },
  {
    lat: 37.754832,
    lng: 140.465908,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/iJgNyAuIdos",
    title: "Gurutto Fukushima",
    nation: "Japan"
  },
  {
    lat: 32.745784,
    lng: 129.868686,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/7rATmPOOXSo",
    title: "Nagasaki Port",
    nation: "Japan",
    type: "port"
  },
  {
    lat: 36.348395,
    lng: 138.597026,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/Pm_RPOVlbGQ",
    title: "Japan Nagano Prefecture Karuizawa Town",
    nation: "Japan"
  },
  {
    lat: 35.689683,
    lng: 139.700748,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/BQYKarjjWi0",
    title: "Tokyo Shinjuku JR",
    nation: "Japan"
  },
  {
    lat: 40.7589626,
    lng: -73.9893574,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/mRe-514tGMg",
    title: "Time Square 4K",
    nation: "USA"
  },
  {
    lat: 36.1020854,
    lng: -115.1778926,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/1ZNCtDLUKHw",
    title: "Las Vegas: AE View Live",
    nation: "USA"
  },
  {
    lat: 40.7590077,
    lng: -73.9872109,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/VYsHV7WPyFw",
    title: "Times Square: Duffy Square 4K View Live",
    nation: "USA"
  },
  {
    lat: 52.3729239,
    lng: 4.8910058,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/KGEekP1102g",
    title: "Amsterdam Dam.",
    nation: "Netherlands"
  },
  {
    lat: 43.3881971,
    lng: 5.9603455,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/1z2coTLH6rQ",
    title: "Nice South of France Côte d'Azur Nature Beach in 4k",
    nation: "France",
    type: "beach",
    video_type : "4k"
  },
  {
    lat: 35.7015318,
    lng: 139.6916908,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/RQA5RcIZlAM",
    title: "Tokyo Shinjuku Live Cam",
    nation: "Japan"
  },
  {
    lat: 35.6668733,
    lng: 139.6750912,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/OF0iDephya8",
    title: "Tokyo Shibuya Rainy Walks Before the storm 4K Binaural ASMR",
    nation: "Japan"
  },
  {
    lat: 35.7015318,
    lng: 139.6916908,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/vHr4qSQ-5XU",
    title: "【4K】Night walk in Shinjuku, Tokyo",
    nation: "Japan"
  },
  {
    lat: 35.669626,
    lng: 139.7611617,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/laPpth6x3P8",
    title: "【4K】Ginza Yukata festival",
    nation: "Japan"
  },
  {
    lat: 42.462847,
    lng: -76.4520337,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/laPpth6x3P8",
    title: "Live Birds In 4K! Cornell Lab FeederWatch Cam at Sapsucker Woods",
    nation: "USA"
  },
  {
    lat: 24.8851886,
    lng: 121.2853226,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/z_mlibCfgFI",
    title: "Daxi Old Street Live Cam ",
    nation: "Taiwan"
  },
  {
    lat: 37.6186966,
    lng: -122.4946038,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/8gkxC22E-sY",
    title: "Mori Point Pacifica, CA Live 4K Multi-camera",
    nation: "USA"
  },
  {
    lat: 33.5900848,
    lng: 130.4421086,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/AcBvgPTL9cg",
    title: "[LIVE] Airport live camera View of Fukuoka Airport",
    nation: "Japan",
    type : "airport"
  },
  {
    lat: 33.5897319,
    lng: 130.4185387,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/-l6-oIeoo1k",
    title: "【LIVE】 Railway live camera shinkansen",
    nation: "Japan"
  },
  {
    lat: 33.4580552,
    lng: 126.9337452,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/tllxxgL_hVc",
    title: "Jeju Seongsan Ilchulbong Live Cam",
    nation: "Korea"
  },
  {
    lat: 33.5451792,
    lng: 126.8259107,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/5I8z7ljAO98",
    title: "Jeju Incafe on the beach",
    nation: "Korea",
    type: "beach"
  },
  {
    lat: 37.575996,
    lng: 126.976820,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/AQBNcwAK93I",
    title: "Gwanghwamun, Seoul Here & Now 24h Live Cam",
    nation: "Korea"
  },
  ////////////////////twitch area/////////////////////////
  {
    lat: 37.473106,
    lng: 127.100274,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://player.twitch.tv/?channel=minjuni2848&parent=sunnyfive.net&muted=true",
    title: "Asea ICT Center, SunnyFive",
    nation: "Korea"
  },
  {
    lat: 22.283,
    lng: 114.126,
    lat2: 22.279,
    lng2: 114.225,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/qO-q5yICB98",
    title: "HONG KONG DOUBLE DECKER LIVE TRAM 24/7",
    nation: "Hongkong",
    type: "TRANSIT"
  },
  {
    lat: 63.436,
    lng: 10.398,
    lat2: 67.286,
    lng2: 14.391,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/ccbVvCcvPuw",
    title: "Nordland Line from Trondheim to Bodø",
    nation: "Norway",
    type: "TRANSIT"
  },
  {
    lat: 59.910,
    lng: 10.756,
    lat2: 69.390,
    lng2: 5.333,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/-imG6CNF9kI",
    title: "The Bergen Line from Oslo to Bergen",
    nation: "Norway",
    type: "TRANSIT"
  },
  {
    lat: 67.799,
    lng: 24.821,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/LwihxyJ4V20",
    title: "Zero Point Levi Finland",
    nation: "Finland"
  },
  {
    lat: 69.103,
    lng: 27.194,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/LdeavC75n6Y",
    title: "Aurora Borealis, Kaamanen in Lapland, Finland",
    nation: "Finland"
  },
  {
    lat: 66.543,
    lng: 25.847,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/Cp4RRAEgpeU",
    title: "SANTA CLAUS VILLAGE IN ROVANIEMI",
    nation: "Finland"
  },
  {
    lat: 50.733,
    lng: -1.159,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/34YMtblpGaE",
    title: "ROYAL ESPLANADE HOTEL, Ryde, Isle of Wight, UK",
    nation: "UnitedKingdom",
    type: "port"
  },
  {
    lat: 51.004,
    lng: -118.200,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/FEfNcfkfobA",
    title: "Revelstoke, British Columbia, Canada",
    nation: "Canada",
    type: "track"
  },
  {
    lat: 59.931,
    lng: 30.360,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/zFKwLSDcNzc",
    title: "Nevskiy avenue St. Petersburg Russia",
    nation: "Russia"
  },
  {
    lat: 59.941,
    lng: 30.308,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/mM8iOmF4MG8",
    title: "Dvortsovyy Most, St. Petersburg Russia",
    nation: "Russia"
  },
  {
    lat: 38.407,
    lng: -85.379,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/WsYtosQta5Y",
    title: "La Grange, Kentucky USA",
    nation: "USA",
    type: "track"
  },
  {
    lat: 41.206,
    lng: -83.902,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/KM1ivV-yfo0",
    title: "Crossroads of the B&O, Deshler, Ohio USA",
    nation: "USA",
    type: "track"
  },
  {
    lat: 33.501,
    lng: -117.663,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/zXqx56hlpd4",
    title: "San Juan Capistrano, California USA",
    nation: "USA",
    type: "track"
  },
  {
    lat: 37.75961,
    lng: -77.48121,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/NermPL_3Dc0",
    title: "Ashland, Virginia USA",
    nation: "USA",
    type: "track"
  },
  {
    lat: 37.75864,
    lng: -77.48118,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/TSazQn9xn4M",
    title: "Ashland North, Virginia USA",
    nation: "USA",
    type: "track"
  },
  {
    lat: 28.015,
    lng: -82.122,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/LkXhbMgz6ms",
    title: "Robert W. Willaford Railroad Museum, vPlant City, Florida, USA",
    nation: "USA",
    type: "track"
  },
  {
    lat: 40.945,
    lng: -90.362,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/et-3-BMSv38",
    title: "Discovery Depot Children’s Museum of Galesburg, Illinois, USA",
    nation: "USA",
    type: "track"
  },
  {
    lat: 40.530,
    lng: -91.310,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/cOHhA_XIZZw",
    title: "Kingsley Inn, Avenue H, Ft. Madison, Iowa USA",
    nation: "USA"
  },
  {
    lat: 41.68057,
    lng: -85.97015,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/H5vLt0xeKw0",
    title: "National NYC RR Museum, Elkhart, Indiana USA",
    nation: "USA",
    type: "track"
  },
  {
    lat: 39.08287,
    lng: -94.60698,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/hNvU59Ld8aA",
    title: "Santa Fe Junction cam 1, Kansas City, Missouri, USA",
    nation: "USA",
    type: "track"
  },
  {
    lat: 39.08254,
    lng: -94.60695,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/7aNc8iVY-r8",
    title: "Santa Fe Junction cam 2, Kansas City, Missouri, USA",
    nation: "USA",
    type: "track"
  },
  {
    lat: 39.10258,
    lng: -94.60168,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/S2xQmogxxHc",
    title: "Doc's Caboose, Inc, Kansas City West, Missouri, USA",
    nation: "USA",
    type: "track"
  },
  {
    lat: 39.10276,
    lng: -94.60126,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/UgT-hOjBDh8",
    title: "Doc's Caboose, Inc, Kansas City East, Missouri, USA",
    nation: "USA",
    type: "track"
  },
  {
    lat: 46.77984,
    lng: -92.09240,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/kLEEotv2Oaw",
    title: "Lake Superior Marine Museum, Duluth, USA",
    nation: "USA",
    type: "port"
  },
  {
    lat: 46.77974,
    lng: -92.09240,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/qjDfU7calsc",
    title: "Duluth Bridge Cam, USA",
    nation: "USA",
    type: "bridge"
  },
  {
    lat: 46.780414,
    lng: -92.111067,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/Gxvs1YwlAec",
    title: "Duluth Bayfront Cam, USA",
    nation: "USA",
    type: "bridge"
  },
  {
    lat: 46.776817,
    lng: -92.103334,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/18bBI2EwbbA",
    title: "rooftop of the Pier B Resort, USA",
    nation: "USA"
  },
  {
    lat: 60.004222,
    lng: 30.296116,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/7Z6VOV7JsW4",
    title: "Pionerskaya, Russia",
    nation: "Russia"
  },
  {
    lat: 58.554999,
    lng: -155.791542,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/IcWTPFnqOLo",
    title: "Brooks Falls - Katmai National Park, Alaska, USA",
    nation: "USA",
    type: "animal"
  },
  {
    lat: -24.733442,
    lng: 31.597302,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/gUZjDCZEMDA",
    title: "Nkorho Bush Lodge, South Africa",
    nation: "SouthAfrica",
    type: "animal"
  },
  {
    lat: -24.205067,
    lng: 30.888062,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/8UFA66bi-0g",
    title: "Naledi Cat-EYE, South Africa",
    nation: "SouthAfrica",
    type: "animal"
  },
  {
    lat: -26.940132,
    lng: 32.475526,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/48MFrf5ADp8",
    title: " Tembe Elephant Park, South Africa",
    nation: "SouthAfrica",
    type: "animal"
  },
  {
    lat: 21.659893,
    lng: -158.056623,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/DY5RYp4sxYc",
    title: "Banzai Pipeline, Hawaii USA",
    nation: "USA",
    type: "beach"
  },
  {
    lat: 30.733586,
    lng: 104.146464,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/4GsvgKu1060",
    title: " Chengdu Panda Museum, China",
    nation: "China",
    type: "animal"
  },
  {
    lat: -24.708367,
    lng: 26.205449,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/sqAdEAH2q_g",
    title: "tau, South Africa",
    nation: "SouthAfrica",
    type: "animal"
  },
  {
    lat: 34.010022,
    lng: -118.495991,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/OWbI6WtlI-k",
    title: "Santa Monica Pier, Santa Monica Beach USA",
    nation: "USA",
    type: "beach"
  },
  {
    lat: 26.029111,
    lng: -80.114502,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/cmkAbDUEoyA",
    title: "Hollywood Beach Broadwalk, Florida USA",
    nation: "USA",
    type: "beach"
  },
  {
    lat: 28.920006, 
    lng: -13.658221,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/mpd2CHIgJ9A",
    title: "Playa Grande, Carmen Beach Lanzarote,Canary Islands,Spain",
    nation: "Spain",
    type: "beach"
  },
  {
    lat: 27.758391,  
    lng: -15.576897,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/cvYNX6OONW4",
    title: "Yumbo Center, Mexico",
    nation: "Mexico"
  },  
  {
    lat: 24.559914, 
    lng: -81.807588,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/dPLIUht1aGE",
    title: "Mallory Square, Florida, USA",
    nation: "USA",
    type: "port"
  },
  {
    lat: 28.950628,
    lng: -13.605723,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/doqBgKIBBh8",
    title: "Lanzarote Airport, Spain",
    nation: "Spain",
    type: "airport"
  },
  {
    lat: 24.561235, 
    lng: -81.805857,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/YSRKsa4mTog",
    title: "Pier House Resort & Spa, Key West, Florida USA",
    nation: "USA",
    type: "beach"
  },
  {
    lat: 24.723979, 
    lng: -81.011935,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/_WfRT0aVllk",
    title: "Bonefish Towers in Marathon, Florida USA",
    nation: "USA",
    type: "beach"
  },
  {
    lat: 47.709540,
    lng: -121.358925,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/LZ5xUpWnmJ8",
    title: "Skykomish, Washington USA",
    nation: "USA",
    type: "track"
  },

  {
    lat: 40.6262179,
    lng: 14.3755998,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "www.youtube.com/embed/WPIuF0-evxo",
    title: "Sorrento, Italy Walking Tour - July 12, 2020",
    nation: "Italy",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 40.6333167,
    lng: 14.602816,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "www.youtube.com/embed/EJ5Ju8-t3jk",
    title: "Amalfi Walking Tour 4K - June 27th, 2020",
    nation: "Italy",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 40.6276385,
    lng: 14.487732,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "www.youtube.com/embed/lpo62RjldVA",
    title: "Beautiful Tour of Positano, Italy in 4K",
    nation: "Italy",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 30.0476561,
    lng: 31.2621408,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "www.youtube.com/embed/YVYDz_coSfY",
    title: "Cairo's Khan el-Khalili Walking Tour (4K/60fps)",
    nation: "Egypt",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 40.8033492,
    lng: 14.3486201,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "www.youtube.com/embed/eXkpFnF7ovY",
    title: "Herculaneum, Italy Walking Tour in 4K",
    nation: "Italy",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 44.1456172,
    lng: 9.6488237,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/L-CIQchiiv4",
    title: "Monterosso al Mare Walking Tour - Cinque Terre",
    nation: "Italy",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 44.120514,
    lng: 9.707885,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/sUFIQzXu7S8",
    title: "Corniglia, Italy Walking Tour - Cinque Terre - [Prowalk Tours]",
    nation: "Italy",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 44.107023,
    lng: 9.7277876,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/QNdkI8BRats",
    title: "Manarola, Italy Walking Tour - Cinque Terre",
    nation: "Italy",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 44.0989247,
    lng: 9.7376173,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/MIzp8Wrj44s",
    title: "Riomaggiore Walking Tour - Cinque Terre - Prowalk Tours",
    nation: "Italy",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 41.8980466,
    lng: 12.4624051,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/GXTW_mIC2po",
    title: "Biking along the Tiber River in Rome - 4K - June 2020",
    nation: "Rome",
    type: "biking",
    video_type: "video"
  },
  {
    lat: 41.9033863,
    lng: 12.4567101,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/bdjUv2ctBQ4",
    title: "Biking Tour of Rome, Italy in 4K",
    nation: "Rome",
    type: "biking",
    video_type: "video"
  },

  {
    lat: 40.6262179,
    lng: 14.3755998,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "www.youtube.com/embed/WPIuF0-evxo",
    title: "Sorrento, Italy Walking Tour - July 12, 2020",
    nation: "Italy",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 40.6333167,
    lng: 14.602816,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "www.youtube.com/embed/EJ5Ju8-t3jk",
    title: "Amalfi Walking Tour 4K - June 27th, 2020",
    nation: "Italy",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 40.6276385,
    lng: 14.487732,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "www.youtube.com/embed/lpo62RjldVA",
    title: "Beautiful Tour of Positano, Italy in 4K",
    nation: "Italy",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 30.0476561,
    lng: 31.2621408,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "www.youtube.com/embed/YVYDz_coSfY",
    title: "Cairo's Khan el-Khalili Walking Tour (4K/60fps)",
    nation: "Egypt",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 40.8033492,
    lng: 14.3486201,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "www.youtube.com/embed/eXkpFnF7ovY",
    title: "Herculaneum, Italy Walking Tour in 4K",
    nation: "Italy",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 44.1456172,
    lng: 9.6488237,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/L-CIQchiiv4",
    title: "Monterosso al Mare Walking Tour - Cinque Terre",
    nation: "Italy",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 44.120514,
    lng: 9.707885,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/sUFIQzXu7S8",
    title: "Corniglia, Italy Walking Tour - Cinque Terre - [Prowalk Tours]",
    nation: "Italy",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 44.107023,
    lng: 9.7277876,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/QNdkI8BRats",
    title: "Manarola, Italy Walking Tour - Cinque Terre",
    nation: "Italy",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 44.0989247,
    lng: 9.7376173,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/MIzp8Wrj44s",
    title: "Riomaggiore Walking Tour - Cinque Terre - Prowalk Tours",
    nation: "Italy",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 41.8980466,
    lng: 12.4624051,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/GXTW_mIC2po",
    title: "Biking along the Tiber River in Rome - 4K - June 2020",
    nation: "Rome",
    type: "biking",
    video_type: "video"
  },
  {
    lat: 41.9033863,
    lng: 12.4567101,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/bdjUv2ctBQ4",
    title: "Biking Tour of Rome, Italy in 4K",
    nation: "Rome",
    type: "biking",
    video_type: "video"
  },


  {
    lat: 40.6310049,
    lng: 14.582913,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/G4BrczBZAXY",
    title: "Amalfi, Italy 360 Walking Tour",
    nation: "Italy",
    type: "walking",
    video_type: "video",
    camera_type: "360"
  },
  {
    lat: 40.6295857,
    lng: 14.4813007,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/FZL0ynym3DI",
    title: "Positano, Italy 360 Walking Tour",
    nation: "Italy",
    type: "walking",
    video_type: "video",
    camera_type: "360"
  },
  {
    lat: 40.6333389,
    lng: 14.5985189,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/dDuBgKFyQEA",
    title: "360 Tour of the Entire Amalfi Coast! ",
    nation: "Italy",
    type: "walking",
    video_type: "video",
    camera_type: "360"
  },
  {
    lat: 40.8498537,
    lng: 14.2659313,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/RRPY-2AXHlI",
    title: "Naples 360° Virtual Walking Tour Tour - Porta Nolana Fish Market",
    nation: "Italy",
    type: "walking",
    video_type: "video",
    camera_type: "360"
  },
  {
    lat: 40.8537158,
    lng: 14.1729671,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/jJk5e2Gsyy4",
    title: "Naples 360 Historic Walking Tour",
    nation: "Italy",
    type: "walking",
    video_type: "video",
    camera_type: "360"
  },
  {
    lat: 40.8034003,
    lng: 14.3465594,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/_Y277FddmD4",
    title: "Herculaneum, Italy 360 Walking Tour",
    nation: "Italy",
    type: "walking",
    video_type: "video",
    camera_type: "360"
  },
  {
    lat: 40.7466508,
    lng: 14.4761726,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/d4flx14q5OE",
    title: "Pompeii 360 Virtual Walking Tour",
    nation: "Italy",
    type: "walking",
    video_type: "video",
    camera_type: "360"
  },
  {
    lat: 45.4853479,
    lng: 12.4150746,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/E6_JLRwoTqw",
    title: "Burano, Venice Walking Tour [4K|60fps]",
    nation: "Italy",
    type: "walking",
    video_type: "video"
  },

// 20201222 Brazil 추가

 {
    lat: -22.9844357,
    lng: -43.2063812,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/vpgd9UbCzpU",
    title: "Rio De Janeiro, BRAZIL — Walking Tour IPANEMA, RIO (Narrated)【4K】",
    nation: "Brazil",
    type: "walking",
    video_type: "video"
  },
 {
    lat: -22.9870353,
    lng: -43.2105018,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/qADo6lZTcDU",
    title: "Rio De Janeiro, BRAZIL — IPANEMA Beach, Walking Tour in RIO (Narrated) City Walks【4K】",
    nation: "Brazil",
    type: "walking",
    video_type: "video"
  },
 {
    lat: -22.908169,
    lng: -43.1806617,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/qMp39dBpsv0",
    title: "RIO DE JANEIRO Downtown, Walking Tour Rio City Center — BRAZIL Walk (Narrated)【4K】",
    nation: "Brazil",
    type: "walking",
    video_type: "video"
  },
 {
    lat: -22.9760378,
    lng: -43.1921367,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/qSY5_2tn3bc",
    title: "COPACABANA, Walking Tour Rio de Janeiro, BRAZIL — Rain Walk (Narrated)【4K】",
    nation: "Brazil",
    type: "walking",
    video_type: "video"
  },
 {
    lat: -22.9837389,
    lng: -43.2300513,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/ElNLiRGIm1o",
    title: "Rio De Janeiro, BRAZIL — Walking Tour São Cristóvão Fair, RIO (Narrated)【4K】",
    nation: "Brazil",
    type: "walking",
    video_type: "video"
  },
 {
    lat: -22.9851806,
    lng: -43.200007,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/rZwXrjFFWcw",
    title: "RIO DE JANEIRO, Brazil — Walking Tour IPANEMA to LEBLON, RIO (Narrated) City Walks【4K】",
    nation: "Brazil",
    type: "walking",
    video_type: "video"
  },
 {
    lat: -22.9867492,
    lng: -43.2063462,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/y28bAflJQTs",
    title: "Rio De Janeiro, BRAZIL — IPANEMA Beach, Walking Tour in RIO (Narrated)【4K】",
    nation: "Brazil",
    type: "walking",
    video_type: "video"
  },
 {
    lat: -22.9773922,
    lng: -43.1913565,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/gOIdeXa_o3M",
    title: "COPACABANA, Rio de Janeiro, Walking Tour BRAZIL — Rain Walk (Narrated)【4K】",
    nation: "Brazil",
    type: "walking",
    video_type: "video"
  },
{
    lat: -22.9861544,
    lng: -43.1887321,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/OvKOk3OD-bY",
    title: "Rio de Janeiro, BRAZIL — Walking Tour COPACABANA, RIO (Narrated)【4K】",
    nation: "Brazil",
    type: "walking",
    video_type: "video"
  },
{
    lat: -22.9874224,
    lng: -43.1969296,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/JUx7VOP4cjA",
    title: "IPANEMA to COPACABANA, Walking Tour ARPOADOR, Rio de Janeiro, BRAZIL — (Narrated)【4K】",
    nation: "Brazil",
    type: "walking",
    video_type: "video"
  },
{
    lat: -22.9835892,
    lng: -43.2092253,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/sZGVaGjhheQ",
    title: "Rio De Janeiro, BRAZIL -- Ipanema Walking Tour (Narrated)【4K】",
    nation: "Brazil",
    type: "walking",
    video_type: "video"
  },
{
    lat: -22.9806023,
    lng: -43.2136391,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/UrgQTIxVziI",
    title: "Rio De Janeiro, BRAZIL — Walking Tour IPANEMA (Narrated)【4K】",
    nation: "Brazil",
    type: "walking",
    video_type: "video"
  },
{
    lat: -22.9830762,
    lng: -43.1891481,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/KPrG8YQm5u8",
    title: "Rio De Janeiro, BRAZIL — Copacabana Beach, Walking Tour in RIO (Narrated)【4K】",
    nation: "Brazil",
    type: "walking",
    video_type: "video"
  },


//20201220 Africa Morocco

{
    lat: 31.6317074,
    lng: -8.00227,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/hlCNJ5Qt83s",
    title: "Walking Tour of Real MARRAKECH — Morocco Africa Video Walk【4K】",
    nation: "Morocco",
    type: "walking",
    video_type: "video"
  },
{
    lat: 31.6330126,
    lng: -7.9853206,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/KZLyc_Bc_N8",
    title: "Walking Tour of Marrakech Old Medina Souk — Morocco【4K】",
    nation: "Morocco",
    type: "walking",
    video_type: "video"
  },
{
    lat: 31.6275345,
    lng: -7.9865339,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/tzWlaGgqdFA",
    title: "Marrakech Walking Tour — Morocco Video Walk【4K】",
    nation: "Morocco",
    type: "walking",
    video_type: "video"
  },
{
    lat: 31.6375345,
    lng: -7.9965339,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/OsnRSr7LxII",
    title: "Walking Tour of Modern Marrakech — Morocco Africa Video Walk【4K】",
    nation: "Morocco",
    type: "walking",
    video_type: "video"
  },
{
    lat: 31.6175345,
    lng: -7.9765339,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/IGMYckugha4",
    title: "Walking Tour of Magic MARRAKECH — Africa Video Walk, Morocco【4K】",
    nation: "Morocco",
    type: "walking",
    video_type: "video"
  },
  {
    lat: 60.164834, 
    lng: 24.958250,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/CvOB-Is_yYU",
    title: "Port of Helsinki - South Harbour Live",
    nation: "Finland",
    type: "port"
  },
  {
    lat: 55.369054, 
    lng: 13.144966,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/GIxsG6j0Pjw",
    title: "Live Camera Port of Trelleborgs Hamn AB",
    nation: "Sweden",
    type: "port"
  },
  {
    lat: 42.975256, 
    lng: -82.423953,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/XA8tt9INXuo",
    title: "Port Huron Live Cam showing shipping traffic on the St. Clair River",
    nation: "USA",
    type: "port"
  },
  {
    lat: 62.736378, 
    lng: 7.182225,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/jyQgg71xh0A",
    title: "Molde Live - Triangel Security AS",
    nation: "Norway",
    type: "port"
  },
  {
    lat: 42.998299, 
    lng: -82.427202,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/Dnnf04x6pXY",
    title: "Port Huron, Michigan USA - Dossin Great Lakes Museum",
    nation: "USA",
    type: "port"
  },
  {
    lat: 42.334685,
    lng: -82.985561,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/vhmOMEDzLek",
    title: "Detroit River Live Cam from the Dossin Museum, Detroit, Michigan USA",
    nation: "USA",
    type: "river"
  },
  {
    lat: 42.720067, 
    lng: -82.492219,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/ggGtKXaZ7u4",
    title: "Marine City, Michigan USA",
    nation: "USA",
    type: "river"
  },
  {
    lat: 63.110634, 
    lng: 7.730641,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/g7Hc38fXxYw",
    title: "Livecam Kristiansund Sentrum",
    nation: "Norway",
    type: "river"
  },
  {
    lat: 59.799577, 
    lng: 30.633145,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/7tij79-vv1c",
    title: "Neva River - Zhk Nevskiye Panoramy",
    nation: "Russia",
    type: "river"
  },
  {
    lat: 56.780631, 
    lng: 105.745460,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/hO9Nkorupv4",
    title: "Усть-Кут Live - Пешеход ст.Лена",
    nation: "Russia",
    type: "train"
  },
  {
    lat: 55.787889, 
    lng: 49.120582,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/LVHOEGyKkrw",
    title: "Kazan, Bauman street",
    nation: "Russia"
  },
  {
    lat:  56.780756, 
    lng: 105.745924, 
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/YqUIBO6-S1k",
    title: "Усть-Кут, Иркутская обл. станция Лена, ЖД Вокзал",
    nation: "Russia",
    type: "train"
  },
  {
    lat: 59.701741, 
    lng: 56.724986, 
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/kkI58FsvNbM",
    title: "Ulitsa Severnaya, 84, Solikamsk Permskiy kray",
    nation: "Russia"
  },
  {
    lat: 57.998420, 
    lng: 56.218587, 
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/soL42BKsaZE",
    title: "Russia, Perm city, Dzerzhinsky District",
    nation: "Russia"
  },
  {
    lat: 56.779230, 
    lng: 105.746776, 
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/rrC9iQjPMNE",
    title: "Усть-Кут, сквер Кирова",
    nation: "Russia"
  },
  {
    lat: 46.488089, 
    lng: 30.741074,  
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/pFBsLTllFJo",
    title: "Prymorskyi Boulevard, Odesa",
    nation: "Ukraine"
  },
  {
    lat: 46.487119, 
    lng: 30.739141, 
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/xWAaC3MuaZQ",
    title: "Katerynyns'ka Square, Odesa",
    nation: "Ukraine"
  },
  {
    lat: 46.496522, 
    lng: 30.760029, 
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/LolxEeyJCKs",
    title: "Vorontsov Lighthouse, Prymors'ka Street, Odesa",
    nation: "Ukraine",
    type: "port"
  },
  {
    lat: 46.486043, 
    lng: 30.739110, 
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/IuQwcs_td7c",
    title: "Katerynyns'ka St, 7-3, Odesa",
    nation: "Ukraine"
  },
  {
    lat: 46.486043, 
    lng: 30.739110, 
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/IuQwcs_td7c",
    title: "Katerynyns'ka St, 7-3, Odesa",
    nation: "Ukraine"
  },
  {
    lat: 56.803184, 
    lng: 105.798173, 
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/VJ6aMwqIKzQ",
    title: "Усть-Кут, Пешеходный переход Школа",
    nation: "Russia"
  },
  {
    lat:  56.792019, 
    lng: 105.771719, 
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/qpBv5k2pG5Y",
    title: "Усть-Кут, Центральный перекресток",
    nation: "Russia"
  },
  {
    lat:  46.439624, 
    lng: 30.757247, 
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/Q7K23ARsBKo",
    title: "10-ho Kvitnya Square, Odesa",
    nation: "Ukraine"
  },
  {
    lat: 59.933620, 
    lng: 30.292304, 
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/4QZHSUnpuuA",
    title: "Griboedov Canal St. Petersburg Russia",
    nation: "Russia"
  },
  {
    lat: 63.118269, 
    lng: 7.736939,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/JJuaHGhd8g8",
    title: "Livecam Kristiansund N",
    nation: "Norway",
    type: "port"
  },
  {
    lat: 62.085439, 
    lng: 6.865016,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/ndhYKVzCIs8",
    title: "Hellesylt sentrum",
    nation: "Norway",
    type: "river"
  },
  {
    lat: 59.019015, 
    lng: 6.041252,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/SyKE9_Mtjv0",
    title: "Jørpeland",
    nation: "Norway",
    type: "port"
  },
  {
    lat: 46.096110, 
    lng: 7.228631,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/yDKJMdZTEXQ",
    title: "Place Centrale, 1936 Bagnes",
    nation: "Swiss"
  },
  {
    lat: 50.909717, 
    lng: -1.435745,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/PxY0LZlHKKI",
    title: "Port of Southampton",
    nation: "England",
    type: "port"
  },
  {
    lat: 35.693380, 
    lng: 139.699517,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/RQA5RcIZlAM",
    title: "1-chōme-2-1 Nishishinjuku, Shinjuku City, Tokyo",
    nation: "Japan",
  },

  {
    lat: 35.694969, 
    lng: 139.704311,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/EHkMjfMw7oU",
    title: "2-chōme-10 Kabukichō, Shinjuku City, Tokyo",
    nation: "Japan",
  },
  {
    lat: 68.438494, 
    lng: 17.427275,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/NqovjLkxkZI",
    title: "Narvik Kommune, Norway",
    nation: "Norway",
  },
  {
    lat: 35.659505, 
    lng: 139.700580,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/lkIJYc4UH60",
    title: "Shibuya Scramble",
    nation: "Japan",
  },
  {
    lat: 69.727754, 
    lng: 30.044117,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/bdEYa2oBtII",
    title: "Hans Kirkegaards gate, Norway",
    nation: "Norway",
  },
  {
    lat: 51.468813, 
    lng: 5.635651,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/lQSYn1utcdA",
    title: "Mierlo-Hout district of Helmond in Southeast Netherlands",
    nation: "Netherlands",
    type: "track"
  },
  {
    lat: 63.441302, 
    lng: 10.406515,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/q2p3KqjtFa8",
    title: "Trondheim Havn - Hurtigrutekaia",
    nation: "Norway",
    type: "port"
  },
  {
    lat: 18.443148, 
    lng: -64.763804,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/LXWVYoBluT4",
    title: "Soggy Dollar Bar Live Webcam - Jost Van Dyke, British Virgin Islands",
    nation: "England",
    type: "beach"
  },
  {
    lat: 62.096577, 
    lng: 7.210560,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/Nu15hl3Eu7U",
    title: "Hotel Union Geiranger AS",
    nation: "Norway",
    type: "river"
  },
  {
    lat: -22.307534, 
    lng: 166.442005,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/Fzo8jORoQMo",
    title: "Anse Vata Bay, Nouvelle-Calédonie",
    nation: "France",
    type: "port"
  },
  {
    lat: -22.309221, 
    lng: 166.449140,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/lplCO6ZIPtg",
    title: "Anse Vata, Hôtel Château Royal, Nouvelle-Calédonie",
    nation: "France",
    type: "beach"
  },
  {
    lat: 34.420862, 
    lng: 135.670851,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/UlF3ePfPsFk",
    title: "Kunimijo Castle Ruins, 金剛山, Takama, Gose, Nara",
    nation: "Japan",
  },
  {
    lat: 29.280343, 
    lng: -94.802741,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/GEZy1rcNQWE",
    title: "Galveston, Texas",
    nation: "USA",
    type : "beach"
  },
  {
    lat: 25.777315, 
    lng: -80.171774,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/d11qKztvBAM",
    title: "Port Miami, Florida",
    nation: "USA",
    type : "port"
  },
  {
    lat: 25.781683, 
    lng: -80.186785,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/xuoy96nMcUk",
    title: "Port Miami, Florida",
    nation: "USA",
    type : "port"
  },
  {
    lat: 28.367769, 
    lng: -80.602811,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/nKrm68n7I_8",
    title: "Westgate Cocoa Beach Pier, Florida",
    nation: "USA",
    type : "beach"
  },
  {
    lat: 25.183244, 
    lng: -80.388630,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/_LAw6D5CWHo",
    title: "Black Water Sound - Key Largo, Florida",
    nation: "USA",
    type : "beach"
  },
  {
    lat: 24.560481, 
    lng: -81.805626,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/eDeCOWw5XVU",
    title: "Key West - Front Street, Florida",
    nation: "USA"
  },  
  {
    lat: 25.0954586,  
    lng: -80.436687,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/_XSypYRMFNI",
    title: "Courtyard by Marriott Key Largo, Florida",
    nation: "USA",
    type : "port"
  },
  {
    lat: 24.903286, 
    lng: -80.649892,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/oXo6pgNsQlE",
    title: "Pines and Palms Resort, Florida",
    nation: "USA",
    type : "beach"
  },
  {
    lat: 17.916949, 
    lng: -87.963686,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/r_XFhbOQ-Jo",
    title: "Blue Water Grill - Beachfront, Barrier Reef Dr, San Pedro, Belize",
    nation: "Mexico",
    type : "beach"
  },  
  {
    lat: 17.921640, 
    lng: -87.959983,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/BKPNX0UO60Q",
    title: "Belize Live Beach - The Phoenix Resort, San Pedro, Ambergris Caye",
    nation: "Mexico",
    type : "beach"
  },
  {
    lat: 41.454410, 
    lng: -70.600268,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/Y0BRntF3178",
    title: "Black Dog Wharf, Martha's Vineyard Ocean",
    nation: "USA",
    type : "port"
  },
  {
    lat: 47.595761, 
    lng: -120.661281,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/TmtVbezZaqg",
    title: "Front Street Park, Leavenworth Washington",
    nation: "USA"
    },
    {
      lat: 43.657262, 
      lng: -70.259100,
      icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
      url: "https://www.youtube.com/embed/nxVe3-y96RQ",
      title: "Monument Square",
      nation: "USA"
      },
    {
      lat: 17.7620109, 
      lng: -64.7311565,
      icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
      url: "https://www.youtube.com/embed/9nmchjRTEtY",
      title: "Palms at Pelican Cove Beach Resort, St. Croix, USVI",
      nation: "USA",
      type : "beach"
    },
    {
    lat: 17.700901, 
    lng: -64.886255,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/jSWbJ_rZDyA",
    title: "Cottages By The Sea, St. Croix USVI",
    nation: "USA",
    type : "beach"
  },
  {
    lat: 18.343456, 
    lng: -64.772440,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/BNKeO3Pjo5c",
    title: "The Windmill Bar - Estate Susannaberg, St. John, US Virgin Islands",
    nation: "USA",
    type : "beach"
  }, 
  {
    lat: 18.330175, 
    lng: -64.797231,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/-dBYyZzpeUk",
    title: "Grande Bay Resort, Cruz Bay, St John, US Virgin Islands",
    nation: "USA",
    type : "beach"
  }, 
  {
    lat: 18.331320, 
    lng: -64.795486,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/x10kOY5zVhA",
    title: "Cruz Bay Ferry Dock, St John, US Virgin Islands",
    nation: "USA",
    type : "beach"
  },   
  {
    lat: 18.330429,  
    lng: -64.796092,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/5FqPmryS7_k",
    title: "Beach Bar Sunset, west over Cruz Bay from the bar",
    nation: "USA",
    type : "beach"
  },  
  {
    lat: 30.229873, 
    lng: -87.875715,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/l2em7gqBj00",
    title: "The Beach Club Resort & Spa",
    nation: "USA",
    type : "beach"
  }, 
  {
    lat: 43.695396, 
    lng: 7.271727,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/8AlvjQmJXuY",
    title: "Rooftops of Vieux Vieux in Nice South of France Côte d'Azur",
    nation: "France"
  }, 
  {
    lat: 43.691822, 
    lng: 7.249842,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/4raY1thzIsU",
    title: "Nice South of France Côte d'Azur Nature Beach",
    nation: "France",
    type : "beach"
  }, 
  {
    lat: 40.747942, 
    lng: -74.004762,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/gmF1bwfH0i4",
    title: "NYC High Line Park with Manhattan New York Skyline",
    nation: "USA"
  },  
  {
    lat: 40.758724, 
    lng: -73.985047,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/eJ7ZkQ5TC08",
    title: "Times Square in 4K",
    nation: "USA"
  },  
   {
    lat: 50.759167,
    lng: -1.290105,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/iLKEXxJKVrM",
    title: "Red Funnel Ferries, Cowes Isle of Wight England",
    nation: "England",
    type : "port"
  },   
  {
    lat: 41.773356, 
    lng: 140.727057,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/ugIz1wUdXVU",
    title: "Hakodate - Hokkaido",
    nation: "Japan",
    type : "port"
  }, 
  {
    lat: 36.063253, 
    lng: 136.214484,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/X0j-lU3Nv5M",
    title: "Katamachi Entrance",
    nation: "Japan"
  }, 
  {
    lat: 35.657854, 
    lng: 139.314941,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/H8lApROr-uA",
    title: "Tokyo Train Live Camera (Hachioji)",
    nation: "Japan",
    type : "track"
  }, 
  {
    lat: 35.695360, 
    lng: 139.780005,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/Q7Uui8vsdhQ",
    title: "Higashikanda Entrance",
    nation: "Japan"
  },  
  {
    lat: 51.041129, 
    lng: -114.070259,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/xsRDTfuksyI",
    title: "Central Memorial Park, Calgary, Alberta",
    nation: "Canada"
  },  
  {
    lat: 29.759825, 
    lng: -95.363309,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/ZuoL3P2dgmg",
    title: "downtown skyline of Houston, Texas.",
    nation: "USA"
  },  
  {
    lat: 29.725715, 
    lng: -95.428992,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/Xc6oY3AlWlg",
    title: "ABC13 tower, Texas.",
    nation: "USA"
  }, 
  {
    lat: -37.821257, 
    lng: 144.962285,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/EpvIAopAYbw",
    title: "Platinum Apartments at Freshwater Place, MELBOURNE.",
    nation: "Australia"
  },  
  {
    lat: 40.706160, 
    lng: -73.996923,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/KGuCGd726RA",
    title: "Brooklyn Bridge - St. George Tower, Brooklyn, NY",
    nation: "USA"
  }, 
  {
    lat: 40.7058923, 
    lng: -74.004825,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/Vj0XKu6AoOw",
    title: " Lower Manhattan & New York Harbor - St. George Tower, Brooklyn, NY",
    nation: "USA"
  }, 
  {
    lat: 40.7058923, 
    lng: -74.004825,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/Vj0XKu6AoOw",
    title: "Lower Manhattan & New York Harbor - St. George Tower, Brooklyn, NY",
    nation: "USA"
  }, 
  {
    lat: 51.089245, 
    lng: -115.360928,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/hORCPr-jWhk",
    title: "Main Street in Canmore, Alberta, Canada",
    nation: "Canada"
  }, 
  {
    lat: 51.089769, 
    lng: -115.354277,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/J4TaQqXX0aM",
    title: "Railway Avenue in Canmore, Alberta, Canada",
    nation: "Canada"
  }, 
  {
    lat: 41.453950, 
    lng: -70.601191,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/CHd0z44hTQc",
    title: "Vineyard Haven, MA, 5 Corners intersection",
    nation: "USA"
  },
  {
    lat: 44.189413, 
    lng: -72.823487,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/GTpd5LSRO-0",
    title: "Waitsfield Covered Bridge in Vermont's River Valley",
    nation: "USA"
  }, 
  {
    lat: 44.114527, 
    lng: -72.855758,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/WPXfnrYAzjA",
    title: "Warren Store, Vermont",
    nation: "USA"
  }, 
  {
    lat: 44.479292,
    lng: 73.212723,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/DcDZzEa5Yvw",
    title: "Church Street Market Place, Burlington, VT",
    nation: "USA"
  },
  {
    lat: 35.699648, 
    lng: 139.771370,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/_9qjJbxFTTc",
    title: "CAisan Denki, Chuo-dori, Akihabara, Tokyo",
    nation: "Japan"
  },  
  {
    lat: 35.698402, 
    lng: 139.771186,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/ukoYOfgzt9g",
    title: "ONODEN, Akihabara, Tokyo",
    nation: "Japan"
  },   
  {
    lat: 35.698402, 
    lng: 139.771186,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/ukoYOfgzt9g",
    title: "ONODEN, Akihabara, Tokyo",
    nation: "Japan"
  },   
  {
    lat: 35.730003, 
    lng: 139.791775,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/gZtY_TsjmTo",
    title: "大関横丁 entrance, Tokyo",
    nation: "Japan"
  }, 
  {
    lat: 33.588988, 
    lng: 130.418765,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/gGKhqxJu-wM",
    title: "博多駅前 Hakata Ekimae, Fukuoka",
    nation: "Japan"
  }, 
  {
    lat: 35.659218, 
    lng: 139.730425,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/oGShh37QT1M",
    title: "Keyaki Zaka, Grand Hyatt Tokyo",
    nation: "Japan"
  },  
  {
    lat: 35.713605, 
    lng: 139.796644,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/n9Fcb_6wHrY",
    title: "Daigyoin, AsakusaGrand Tokyo",
    nation: "Japan"
  },  
  {
    lat: 35.713946, 
    lng: 139.796632,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/nOk4cd0kkp8",
    title: "浅草寺, Sensō-ji Tokyo",
    nation: "Japan"
  },  
  {
    lat: 35.632448, 
    lng: 139.767333,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/n3B8fp-Henc",
    title: "Tokyo Odaiba",
    nation: "Japan",
    video_type : "4k"
  }, 
  {
    lat: 35.658632, 
    lng: 139.745465,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/_TpLXlw8jpc",
    title: "Tokyo Tower",
    nation: "Japan"
  }, 
  {
    lat: 57.998420,
    lng: 56.218587,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/fsUk-xR3o0k",
    title: "Russia, Perm city, Dzerzhinsky District",
    nation: "Russia"
  }, 
  {
    lat: 53.218771, 
    lng: 6.567944,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/ZjfFGJlkjmE",
    title: "Grote Markt - Groningen - Holland",
    nation: "Netherlands"
  }, 
  {
    lat: 43.974746, 
    lng: -75.910609, 
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/qP1y7Tdab7Y",
    title: "Public Square, Watertown NY",
    nation: "USA"
  },
  {
    lat: 43.952984, 
    lng: -76.112438,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/oW4OdgjYMwg",
    title: "Madison Barracks Marina, Sackets Harbor, NY",
    nation: "USA",
    type:"port"
  }, 
  {
    lat: 44.483618, 
    lng: -75.645065,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/RXY-glUdUr8",
    title: "McLear's Cottage Colony & Campground, Black Lake, NY",
    nation: "USA"
  }, 
  {
    lat: 43.962033, 
    lng: -75.889342,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/WWJTnJUEhmA",
    title: "Honor the Mountain Monument at Thompson Park, Watertown, NY",
    nation: "USA"
  },  
  {
    lat: 40.029096, 
    lng: -92.493809,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/AAQUGsUzWbE",
    title: "La Plata, Missouri, USA",
    nation: "USA",
    type : "track"
  },  
  {
    lat: 42.155880, 
    lng: -72.329259,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/8QjlZonvbsA",
    title: "Steaming Tender Restaurant at Palmer, Massachusetts, USA",
    nation: "USA",
    type : "track"
  }, 
  {
    lat: 43.102578, 
    lng: -77.439820,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/bOCo4-eeEjs",
    title: "Fairport, New York, USA",
    nation: "USA",
    type : "track"
  }, 
  {
    lat: 42.209795, 
    lng: -79.838520,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/2Nnm2tz7ynM",
    title: "Lake Shore Railway Museum, North East, Pennsylvania USA",
    nation: "USA",
    type : "track"
  }, 
  {
    lat: 42.280389, 
    lng: -72.978586,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/2dRxlKdibW4",
    title: "Chester Railway Station at Chester, Massachusetts",
    nation: "USA",
    type : "track"
  }, 
  {
    lat: 43.361661, 
    lng: -70.476876,
    icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    url: "https://www.youtube.com/embed/lKurYZUFPUI",
    title: "Dock Square, Kennebunkport, Maine USA",
    nation: "USA"
    }, 
    {
      lat: 45.183858, 
      lng: -69.229190,
      icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
      url: "https://www.youtube.com/embed/ZK7mBOndQbU",
      title: "Dover-Foxcroft, Maine Center Theatre",
      nation: "USA"
      }, 
      {
        lat: 45.250285, 
        lng: -69.239536,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/KCbPcSqHYts",
        title: "Sebec Lake, Maine From Merrill's Marina",
        nation: "USA",
        type : "port"
      }, 
      {
        lat: 43.075490, 
        lng: -70.753481,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/hBsq3GDqcuw",
        title: "Strawbery Banke, Portsmouth, New Hampshire USA",
        nation: "USA"
      },     
      {
        lat: 42.367436, 
        lng: -71.071227,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/SAWwQqVobRc",
        title: "Boston, Massachusetts, USA - from the Museum of Science",
        nation: "USA"
      },  
      {
        lat: 42.129672, 
        lng: -72.745396,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/ziggKk3-ob8",
        title: "Great River Bridge, Westfield, Massachusetts USA",
        nation: "USA",
        type : "track"
      },  
      {
        lat: 42.359311, 
        lng: -71.027346,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/q-ygAgH6ano",
        title: " Hyatt Regency Boston Harbor located at Logan Airport, Boston, Massachusetts USA",
        nation: "USA",
        type : "port"
      }, 
      {
        lat: 43.165302, 
        lng: -70.591168,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/ngCqUYZpyKM",
        title: "Nubble Lighthouse, York, Maine USA",
        nation: "USA"
      },  
      {
        lat: 43.078750, 
        lng: -70.757264,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/GTTpmbyyBn4",
        title: "Piscataqua River - Portsmouth, New Hampshire USA - Moran Tugboats",
        nation: "USA",
        type : "port"
      }, 
      {
        lat: 43.868061, 
        lng: -71.088914,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/cA9-WXWWMfI",
        title: "King Pine Ski Area at Madison, New Hampshire USA",
        nation: "USA"
      },  
      {
        lat: 42.119877, 
        lng: -72.749422,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/ovn3lz0iZYQ",
        title: "Westfield, Massachusetts Park Square",
        nation: "USA"
      },      
      {
        lat: 42.159567, 
        lng: -72.719683,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/K-7DsErt5y8",
        title: "Barnes Airport, Westfield, Massachusetts USA",
        nation: "airport"
      },  
      {
        lat: 43.377884, 
        lng: -71.794130,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/RAn_2DaQ6d4",
        title: "Bird and Squirrel Cam - LIVE from New Hampshire, USA",
        nation: "USA",
        type : "animal"
      },  
      {
        lat: 43.076861, 
        lng: -70.758050,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/METQvkCkUjg",
        title: "Popovers at Market Square",
        nation: "USA"
      },   
      {
        lat: 46.812354, 
        lng: -71.213861,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/0To_ooBv57Q",
        title: "Place d'Youville",
        nation: "Canada"
      },      
      {
        lat: 35.626011, 
        lng: 139.782339,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/cnHwi7OrwPM",
        title: "Palette town ODAIBA TOKYO",
        nation: "japan",
        type : "port"
      },   
      {
        lat: 37.262221, 
        lng: -107.906123,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/C0lJ82pW62Y",
        title: " Durango, Colorado from Smelter Mountain",
        nation: "USA"
      },
      {
        lat: 30.437097, 
        lng: -95.598598,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/rEJjNlsYgCk",
        title: "Lake Conroe, Texas",
        nation: "USA"
      },
      {
        lat: 24.812260, 
        lng: 121.245782,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/1OTZ9rjFv78",
        title: "Shihmen Dam",
        nation: "Taiwan"
      },
      {
        lat: 23.559634, 
        lng: 120.597780,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/k4MuIddrSuM",
        title: "Taiping Suspension Bridge",
        nation: "Taiwan"
      },
      {
        lat: 23.417590, 
        lng: 120.650841,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/m8OTE0_to1g",
        title: "Eryanping Trail, Alishan",
        nation: "Taiwan"
      },
      {
        lat: 23.431806, 
        lng: 120.664267,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/Fqcs_eq-dag",
        title: "Sheng-Li Farm, Alishan",
        nation: "Taiwan"
      },
      {
        lat: 23.44366, 
        lng: 120.59088,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/HUbQTGraucg",
        title: "Chukou Niubu Aberdeen Prairie (Ali Love Silk Road No. 18)",
        nation: "Taiwan"
      },
      {
        lat: 22.916476, 
        lng: 121.121587,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/KkDSzZcqQTQ",
        title: "Taitung Luye Highland",
        nation: "Taiwan"
      },
      {
        lat: 23.927916, 
        lng: 121.509869,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/YlxWDwTUtxg",
        title: "Hualien Liyu Lake",
        nation: "Taiwan"
      },
      {
        lat: 23.126180, 
        lng: 121.421698,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/jFJ59-9tTyM",
        title: "Sanxiantai",
        nation: "Taiwan",
        video_type : "4k"
      },
      {
        lat: 22.806789, 
        lng: 121.196942,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/ce4RYcnuXPA",
        title: "Jialulan",
        nation: "Taiwan",
        video_type : "4k"
      },
      {
        lat: 23.020352,
        lng: 121.324965,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/Hb7MeMTVGdM",
        title: "Torik Visitor Center",
        nation: "Taiwan",
        video_type : "4k"
      },
      {
        lat: 25.186128, 
        lng: 121.525346,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/kWQb-lqU8Eo",
        title: "二子坪停車場, Erziping Second Parking",
        nation: "Taiwan"
      },
      {
        lat: 25.167226,
        lng: 121.574209,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/Iot2IHfilic",
        title: "擎天崗草原, Qingtiangang Grassland",
        nation: "Taiwan"
      },
      {
        lat: 25.166077, 
        lng: 121.563973,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/lComd4NWXeE",
        title: "冷水坑停車場, Lengshuikeng parking lot #1",
        nation: "Taiwan"
      },
      {
        lat: 25.170832, 
        lng: 121.553333,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/5y6pzx1Sthk",
        title: "七星山實景, Shichisei Mountain",
        nation: "Taiwan"
      },
      {
        lat: 25.161640, 
        lng: 121.538932,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/h6_k8G5rMnI",
        title: "陽明書屋遠眺台北盆地, Yangming Shuwu",
        nation: "Taiwan"
      },
      {
        lat: 25.179316, 
        lng: 121.544638,
        icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
        url: "https://www.youtube.com/embed/9vm-Wn7xaTs",
        title: "小油坑停車場, Xiao You Keng Qiao Parking",
        nation: "Taiwan"
      },

      
      
];


/*
https://www.youtube.com/watch?v=w45Y-vzvWGI
https://www.youtube.com/watch?v=3DVTOIKvOTw
https://www.youtube.com/watch?v=f0cGgOv3l4c
나중에 밝을 때 찾을 리스트

https://www.youtube.com/watch?v=ZjfFGJlkjmE
https://www.youtube.com/watch?v=3OjxWIMEV-o
https://www.youtube.com/watch?v=0wG5bPNO4oY
https://www.youtube.com/watch?v=Kn4sf1nJXCU
https://www.youtube.com/watch?v=5Y07kM2RgKM
https://www.youtube.com/watch?v=Kk_k7wSYiHQ
https://www.youtube.com/watch?v=d66NPsy_MPg
https://www.youtube.com/watch?v=St7aTfoIdYQ
https://www.youtube.com/watch?v=oT4s0SlQ89E
https://www.youtube.com/watch?v=gM9OjGvig88
https://www.youtube.com/watch?v=ZP9PFQdFxh0
https://www.youtube.com/watch?v=aXClDkUunDk
https://www.youtube.com/watch?v=if91GyWP3zQ




https://www.youtube.com/watch?v=Y8farqtu4xc
https://www.youtube.com/watch?v=lKurYZUFPUI

https://www.youtube.com/watch?v=ziggKk3-ob8

https://www.youtube.com/watch?v=dOq_gNJ5zrw


즐겨찾기 사이트도 추가

https://www.youtube.com/channel/UCbn5eHDjwmPC2K9RG8P0i_A
https://www.youtube.com/channel/UCMaXtOvzgcCQt7MZwJmr7XA
https://www.youtube.com/channel/UC-iKt6xd8uD-8_kXRfPY7Jw

https://www.youtube.com/watch?v=WHX2yx1FD-w
https://www.youtube.com/watch?v=Cod_ggrs69U
https://www.youtube.com/channel/UCBcVQr-07MH-p9e2kRTdB3A
https://www.youtube.com/watch?v=iGxFLjqhkSA // 위치 찾기 불가

https://www.youtube.com/watch?v=ZuoL3P2dgmg
https://www.youtube.com/watch?v=d11qKztvBAM
https://www.youtube.com/watch?v=v5VOTx1YfAg
https://www.youtube.com/watch?v=xC2NuF-1oc8
https://www.youtube.com/watch?v=HM20tigbzpM
https://www.youtube.com/watch?v=bhsZoZ2bApc
https://www.youtube.com/watch?v=bm_-L6felME
https://www.youtube.com/watch?v=r_XFhbOQ-Jo
https://www.youtube.com/watch?v=rAVwlDS3eB4
https://www.youtube.com/watch?v=hWHGiIJqtrI
https://www.youtube.com/watch?v=fhGCYJuWv5I

https://www.youtube.com/watch?v=7CNRg2nHhRs
https://www.youtube.com/watch?v=bm_-L6felME
https://www.youtube.com/watch?v=Mwk2NDQiFhc
https://www.youtube.com/watch?v=EJDrwUY4EzU
https://www.youtube.com/watch?v=m7c12NY6xok
https://www.youtube.com/watch?v=GrZ8LL8yAqs
https://www.youtube.com/watch?v=RKSL9WI2fc4
https://www.youtube.com/watch?v=Vhh5eOR3FtM
https://www.youtube.com/watch?v=_9qjJbxFTTc
https://www.youtube.com/watch?v=9im50H35mco
https://www.youtube.com/watch?v=lQSYn1utcdA
https://www.youtube.com/watch?v=q2p3KqjtFa8
https://www.youtube.com/watch?v=c4kpeZHcke8
https://www.youtube.com/watch?v=BB4DYUt1Apg
https://www.youtube.com/watch?v=fhGCYJuWv5I
https://www.youtube.com/watch?v=fpWVAZRb0R0
https://www.youtube.com/watch?v=tGx-EMuruq8
https://www.youtube.com/watch?v=lQSYn1utcdA
https://www.youtube.com/watch?v=pQKhS4F9sSM
https://www.youtube.com/watch?v=34YMtblpGaE
https://www.youtube.com/watch?v=jpTWh9bKULw
https://www.youtube.com/watch?v=iITzynBE3OY
https://www.youtube.com/watch?v=n3wsET5AOm4
https://www.youtube.com/watch?v=nTQeFkm-8EI
https://www.youtube.com/watch?v=4FtrcTF4fN0
https://www.youtube.com/watch?v=QTV4B59VuNU
https://www.youtube.com/watch?v=TLASOp8vgoc

https://www.youtube.com/watch?v=my4RpvVntAY
https://www.youtube.com/watch?v=vhmOMEDzLek
https://www.youtube.com/watch?v=ADFndsSb3Sc
https://www.youtube.com/watch?v=FEfNcfkfobA
https://www.youtube.com/watch?v=XnotRrW1udI
https://www.youtube.com/watch?v=bfGaUembwA8
https://www.youtube.com/watch?v=nsMrJJaU6gk
https://www.youtube.com/watch?v=fvzYImIFEfs
https://www.youtube.com/watch?v=qNkC7fpPsS8
https://www.youtube.com/watch?v=T0_tcc8KIuw
https://www.youtube.com/watch?v=6Km4mSHsiWw
https://www.youtube.com/watch?v=sbxILofJToM
https://www.youtube.com/watch?v=aQM0YwJmF-4
https://www.youtube.com/watch?v=LZ5xUpWnmJ8
https://www.youtube.com/watch?v=aQM0YwJmF-4
https://www.youtube.com/watch?v=zxYribbndTM
*/
var checkNation;
var nationList = [];

$(document).ready(function () {
  if($(window).width() >1128) {
  createList(markerData);
  }
});


$(window).resize(function() { if($(window).width() >1128) { /* 창 길이가 작을때,(모바일일때) 영상을 많이 띄우는 버든을 없애기 위해 list를 만들지 않음 */ 
$(document).ready(function () {
  createList(markerData);
});
} });

$(document).ready(function(){ // 태그 등의 셋팅이 완료되었을 시점에 이벤트 발생 
 
  $('.mapDiv').click(function(){
    for (id in markerData) {
      var split_url = markerData[id].url.split("embed/");
      if(split_url[1]==$(this).attr("id")){
        var offset = $('#wrap').offset(); //선택한 태그의 위치를 반환

                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

	        $('html').animate({scrollTop : offset.top}, 400);

        moveToLocation(markerData[id].lat, markerData[id].lng);
        for(id in idList){
          if(idList[id] == split_url[1]){
            $("#"+ id).trigger("click");
          }
        }
      }
    }
  });

});


function onYouTubeIframeAPIReady() {
  console.log("api is ready");
  //$(document).ready(function() {
  $(document).ready(function () {
    //insertYoutube(markerData);
  });
  console.log("api is ready2");

  //google.maps.event.trigger(map, 'resize');

  //});
}


function markerResizer(){
  google.maps.event.addListener(map, 'zoom_changed', function() {
    zoomLevel = map.getZoom();
    if (zoomLevel >= 4) {
  $(this).find('.popup-bubble').css('max-height', '42px')
    }
    else if(zoomLevel >= 6) {
      $(this).find('.popup-bubble').css('max-height', '32px')

    }

})
}



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = $(this).nextUntil('button')
    //var panel = this.nextElementSibling;
    for (Pid in panel) {
      if (Pid == "length") {
        break;
      }
      if (panel[Pid].style.display === "block") {
        panel[Pid].style.display = "none";
      } else {
        panel[Pid].style.display = "block";
      }
    }


  });
}
// Initialize and add the map




function moveToLocation(lat, lng) {

  var center = new google.maps.LatLng(lat, lng);
  map.panTo(center);

  //map.animateCamera(CameraUpdateFactory.newLatLngZoom(latLng, ZOOM_FACTOR));
}

var clickStar = function () {
  if ($(this).hasClass("checked")) {
    $(this).removeClass("checked");
  }
  else {
    $(this).addClass("checked");
  }
}

var clickPopup = function (event, data) {

  var starCheck = $(event.target).attr('class')
  //즐겨찾기 클릭시 사이트 이동 방지
  if ($(event.target).hasClass('fa')) { }
  else {
    window.open(data.url + "?autoplay=1", data.title, "width=640,height=480");
  }
}


var map;
var newNorthEast;
var newSouthWest;
var tester;
var popup2;
var popupData;
var panelCount;
var bestWatching = new Array(0, 0, 0);
var bestWatching_title = new Array("o", "o", "o");

function initMap() {

  // The location of Uluru

  var NStower = { lat: 37.522658, lng: 126.984316 };
  var Amsterdam = { lat: 52.3729239, lng: 4.8910058 };
  // The map, centered at Uluru

  map = new google.maps.Map(

    document.getElementById('map'), { zoom: 4, center: Amsterdam, gestureHandling: "greedy" });

  // The marker, positioned at Uluru

  class Popup2 extends google.maps.OverlayView {
    constructor(data) {
      super();
      var myLatLng = new google.maps.LatLng(data.lat, data.lng);
      var data2 = data;
      if (data.url.indexOf("youtube") != -1) {
        var split_url = data.url.split("embed/")
        var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/mqdefault.jpg"
        var localimg = "./img/youtube.png"
      }
      else {
        var split_url = data.url.split("=");
        split_url = split_url[1].split("&");
        var imgsrc = "https://static-cdn.jtvnw.net/previews-ttv/live_user_" + split_url[0] + "-480x272.jpg"
      }
      this.position = myLatLng;
      const imgs = document.createElement("img");
      imgs.src = imgsrc;
      imgs.classList.add("popup2-bubble");
      const popupContent = document.createElement("div");
      popupContent.innerHTML = data.title;
      popupContent.classList.add("popup-content")

      const popupStarBg = document.createElement("span");
      popupStarBg.classList.add("fa")
      popupStarBg.classList.add("fa-star")
      popupStarBg.classList.add("fa-bg")

      const popupStar = document.createElement("span");
      popupStar.classList.add("fa")
      popupStar.classList.add("fa-star")
      popupStar.addEventListener('click', clickStar);

      var viewerNumbers;
      var liveViewerNumbers;
      const popupViewers = document.createElement("div");
      popupViewers.classList.add("popup-viewers");
      /*
       $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id='+ split_url +'&fields=items%2FliveStreamingDetails%2FconcurrentViewers&key=AIzaSyDu6Sfm83Qr5-o_k3olARNCQTbq1BjX7WQ', function(data) {
         
           if(data.items[0].liveStreamingDetails.concurrentViewers==undefined){
             $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=' + split_url + '&key=AIzaSyDu6Sfm83Qr5-o_k3olARNCQTbq1BjX7WQ', function(data) {
         viewerNumbers = data.items[0].statistics.viewCount;
         popupViewers.innerHTML = viewerNumbers +" watched "
       });
           }
           else {
             liveViewerNumbers = data.items[0].liveStreamingDetails.concurrentViewers;
             popupViewers.innerHTML = liveViewerNumbers +" watching now "
 
             for (var index in bestWatching){
               if(liveViewerNumbers >= bestWatching[index]){
                 if(index==0){
                   bestWatching[2]=bestWatching[1];
                   bestWatching[1]=bestWatching[0];
                   bestWatching[0]=liveViewerNumbers;
                   bestWatching_title[2]=bestWatching_title[1];
                   bestWatching_title[1]=bestWatching_title[0];
                   bestWatching_title[0]=data2.title;
                   break;
                 }
                 else if(index==1){
                   bestWatching[2]=bestWatching[1];
                   bestWatching[1]=liveViewerNumbers;
                   bestWatching_title[2]=bestWatching_title[1];
                   bestWatching_title[1]=data2.title;
                   break;
                 }
                 else{
                   bestWatching[2]=liveViewerNumbers;
                   bestWatching_title[2]=data2.title;
                   break;
                 }
               }
             }
 
           }
       });   */

      const popupBroadcast = document.createElement("img");
      popupBroadcast.classList.add("popup-broadcast");
      popupBroadcast.src = localimg;

      const popupWrapper = document.createElement("div");
      popupWrapper.appendChild(popupBroadcast);

      const popupBroadcast2 = document.createElement("img");
      popupBroadcast2.classList.add("popup-broadcast");
      if (data.type == 'TRANSIT') {
        var localimg = "./img/train3.png"
        popupBroadcast2.src = localimg;

      }
      if (data.type == 'track') {
        var localimg = "./img/track5.png"
        popupBroadcast2.src = localimg;

      }
      if (data.type == 'animal') {
        var localimg = "./img/lion2.png"
        popupBroadcast2.src = localimg;

      }
      if (data.type == 'beach') {
        var localimg = "./img/beach.png"
        popupBroadcast2.src = localimg;

      }
      if (data.type == 'port') {
        var localimg = "./img/pin.png"
        popupBroadcast2.src = localimg;

      }
      if (data.type == 'airplane') {
        var localimg = "./img/airplane2.png"
        popupBroadcast2.src = localimg;

      }
      if (data.type == 'bridge') {
        var localimg = "./img/bridge.png"
        popupBroadcast2.src = localimg;

      }
      if (data.type == 'walking') {
        var localimg = "./img/walking2.png"
        popupBroadcast2.src = localimg;

      }

      //insertYoutube_1(data);

      //$(video).find("iframe")[0].src = data.url;
      //$(video).css("display", "block");

      popupWrapper.appendChild(popupBroadcast2);

      popupWrapper.appendChild(popupViewers);


      // This zero-height div is positioned at the bottom of the bubble.
      const bubbleAnchor = document.createElement("div");
      bubbleAnchor.classList.add("popup2-bubble-anchor");
      bubbleAnchor.appendChild(imgs);
      bubbleAnchor.appendChild(popupContent);
      bubbleAnchor.appendChild(popupStarBg);
      bubbleAnchor.appendChild(popupStar);
      bubbleAnchor.appendChild(popupWrapper);
      bubbleAnchor.addEventListener('click', function () { clickPopup(event, data) });
      //function 없이 바로 함수를 넣으면 리스너 등록 과정에서 한번 불리게 됨
      // This zero-height div is positioned at the bottom of the tip.
      this.containerDiv = document.createElement("div");
      this.containerDiv.classList.add("popup-container");
      this.containerDiv.appendChild(bubbleAnchor);
      this.containerDiv.id = popupCount;
      // Optionally stop clicks, etc., from bubbling up to the map.
      Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
      popupCount++;

    }
    /** Called when the popup is added to the map. */
    onAdd() {
      this.getPanes().floatPane.appendChild(this.containerDiv);


      // set this as locally scoped var so event does not get confused
      var me = this;
      tester = this;

      // Add a listener - we'll accept clicks anywhere on this div, but you may want
      // to validate the click i.e. verify it occurred in some portion of your overlay.
      /*google.maps.event.addDomListener(this.containerDiv, 'click', function() {
    
        google.maps.event.trigger(me, 'click');
      }); */

      // Position your overlay etc.


    }
    /** Called when the popup is removed from the map. */
    onRemove() {
      if (this.containerDiv.parentElement) {
        this.containerDiv.parentElement.removeChild(this.containerDiv);
      }
    }
    /** Called each frame when the popup needs to draw itself. */
    draw() {
      const divPosition = this.getProjection().fromLatLngToDivPixel(
        this.position
      );
      // Hide the popup when it is far out of view.
      const display =
        Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
          ? "block"
          : "none";

      if (display === "block") {
        this.containerDiv.style.left = divPosition.x + "px";
        this.containerDiv.style.top = divPosition.y + "px";
      }

      if (this.containerDiv.style.display !== display) {
        this.containerDiv.style.display = display;
      }
    }
  }




  class Popup extends google.maps.OverlayView {
    constructor(data) {
      super();
      
      var yt_url;
      if (data.type == 'TRANSIT') {

        var ori = new google.maps.LatLng(data.lat, data.lng);
        var des = new google.maps.LatLng(data.lat2, data.lng2);

        data.lat
        route3(map, ori, des);

      }
      var myLatLng = new google.maps.LatLng(data.lat, data.lng);
      if (data.url.indexOf("youtube") != -1) {
        var split_url = data.url.split("embed/")
        yt_url=split_url[1];
        var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/default.jpg"
        var localimg = "./img/youtube3.png"
      }
      else {
        var localimg = "./img/twitch5.png"
      }
      if (data.type == 'TRANSIT') {
        var localimg = "./img/train3.png"
      }
      if (data.type == 'track') {
        var localimg = "./img/track5.png"
      }
      if (data.type == 'animal') {
        var localimg = "./img/lion2.png"
      }
      if (data.type == 'beach') {
        var localimg = "./img/beach.png"
      }
      if (data.type == 'port') {
        var localimg = "./img/pin.png"
      }
      if (data.type == 'airplane') {
        var localimg = "./img/airplane2.png"
      }
      if (data.type == 'bridge') {
        var localimg = "./img/bridge.png"
      }
      if (data.type == 'walking') {
        var localimg = "./img/walking2.png"
      }

      this.position = myLatLng;
      const imgs = document.createElement("img");
      imgs.src = localimg;
      imgs.classList.add("popup-bubble");
      // This zero-height div is positioned at the bottom of the bubble.
      const bubbleAnchor = document.createElement("div");
      bubbleAnchor.classList.add("popup-bubble-anchor");
      bubbleAnchor.appendChild(imgs);
      // This zero-height div is positioned at the bottom of the tip.
      this.containerDiv = document.createElement("div");
      this.containerDiv.classList.add("popup-container");
      this.containerDiv.appendChild(bubbleAnchor);
      //this.containerDiv.id = split_url[1]+"_"+popupCount;
      this.containerDiv.id = popupCount;
      // Optionally stop clicks, etc., from bubbling up to the map.
      Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
      popupData = data;
      popup2 = new Popup2(data);
      popupList.push(popup2);
      idList.push(yt_url); // 최종 : popup 함수는 그대로 두고 panel 클릭하는 쪽에서 popupCount 찾아서 부를 것임
      // popup을 만들고 차례대로 popupList에 popup2를 넣는다. 그럼 popup2가 순서대로 list에 들어갈 것 이고
      // 그 순서는 popup객체의 id로 popupCount 변수로 저장된다.
      // popup 클릭 -> popup2 열림 연결고리를 만들기 위하여 리스트내 popup2의 순서와 일치하는 숫자가 id로 popup 객체로 들어가 있는 것이다.
    }
    /** Called when the popup is added to the map. */
    onAdd() {
      this.getPanes().floatPane.appendChild(this.containerDiv);

      // set this as locally scoped var so event does not get confused
      var me = this;
      tester = this;


      // Add a listener - we'll accept clicks anywhere on this div, but you may want
      // to validate the click i.e. verify it occurred in some portion of your overlay.
      google.maps.event.addDomListener(this.containerDiv, 'click', function () {
        
        console.log(this);
        if (activePopup) { activePopup.setMap(null); }
        //$('#keyword').val(data.title)
        
        //var split_id = this.id.split("_");
        
        //popupList[this.id].setMap(map);
        // activePopup = popupList[this.id]
        // panel list 클릭 시 popup을 띄울수 있게 연결고리를 만들기 위해 this.ContainerDiv의 아이디에 split_url이 추가 됨
        popupList[this.id].setMap(map);
        activePopup = popupList[this.id];

        


        $(video).find("iframe")[0].src = "https://www.youtube.com/embed/"+idList[this.id];



        // google.maps.event.trigger(me, 'click');
      });

      google.maps.event.addDomListener(this.containerDiv, 'mouseenter', function () {

        $(this).find('img').css('max-height', '42px')


        // google.maps.event.trigger(me, 'click');
      });

      google.maps.event.addDomListener(this.containerDiv, 'mouseleave', function () {

        $(this).find('img').css('max-height', '36px')


        // google.maps.event.trigger(me, 'click');
      });

      // Position your overlay etc.


    }
    /** Called when the popup is removed from the map. */
    onRemove() {
      if (this.containerDiv.parentElement) {
        this.containerDiv.parentElement.removeChild(this.containerDiv);
      }
    }
    /** Called each frame when the popup needs to draw itself. */
    draw() {
      const divPosition = this.getProjection().fromLatLngToDivPixel(
        this.position
      );
      // Hide the popup when it is far out of view.
      const display =
        Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
          ? "block"
          : "none";

      if (display === "block") {
        this.containerDiv.style.left = divPosition.x + "px";
        this.containerDiv.style.top = divPosition.y + "px";
      }

      if (this.containerDiv.style.display !== display) {
        this.containerDiv.style.display = display;
      }
    }
  }




  //var marker = new google.maps.Marker({position: uluru, map: map});
  for (markerId in markerData) {
    //markers[markerId] = createMarker(markerData[markerId]);
    popup = new Popup(markerData[markerId]);
    popup.setMap(map);
  }
  //markers['bing'].setTitle("new title");



  // idle 이벤트로 드래그랑 줌을 커버가능함
  /*  var dragevent = new google.maps.event.addListener(map, 'dragend',
     function() {
       var center = map.getCenter();
       //newlat = marker.getPosition().lat();
       newlat = center.lat();
       newlong = center.lng();

       $('#keyword').val(newlat + ', ' + newlong);

       newNorthEast = map.getBounds().getNorthEast();
       newSouthWest = map.getBounds().getSouthWest();

       for (markerId in markerData) {
        $(".panel_list").children('p').each( function() { 
          if($(this).text()==markerData[markerId].title){
            $(this).parent().css( "display", "none" );
          }
        
        })
        markers[markerId] = screen2(markerData[markerId]);
    }

       //alert(newNorthEast.lat() + " "+ newNorthEast.lng());
       //alert(newSouthWest.lat() + " "+ newSouthWest.lng());
     })  // screen2 함수를 드래그안에 구현해야 한다.


     map.addListener("zoom_changed", () => {
    //infowindow.setContent("Zoom: " + map.getZoom());
    
       var center = map.getCenter();
       //newlat = marker.getPosition().lat();
       newlat = center.lat();
       newlong = center.lng();

       $('#keyword').val(newlat + ', ' + newlong);

       newNorthEast = map.getBounds().getNorthEast();
       newSouthWest = map.getBounds().getSouthWest();

       for (markerId in markerData) {
        $(".panel_list").children('p').each( function() { 
          if($(this).text()==markerData[markerId].title){
            $(this).parent().css( "display", "none" );
          }
        
        })
        markers[markerId] = screen2(markerData[markerId]);
    }
  });*/
  map.addListener("idle", () => {
    //console.log("idle");
    //infowindow.setContent("Zoom: " + map.getZoom());
    panelCount = 0;

    var center = map.getCenter();
    //newlat = marker.getPosition().lat();
    newlat = center.lat();
    newlong = center.lng();

    //$('#keyword').val(newlat + ', ' + newlong);

    newNorthEast = map.getBounds().getNorthEast();
    newSouthWest = map.getBounds().getSouthWest();

    for (markerId in markerData) {
      $(".panel_list").children('p').each(function () { //수정필요 그냥 none할거면 루프돌지말고 다 none하면 되지 않나
        if ($(this).text() == markerData[markerId].title) {
          $(this).parent().css("display", "none");
        }

      })
      markers[panelCount] = screen2(markerData[markerId]);
    }

    //markerResizer();
  });

  map.addListener("click", () => {
    //infowindow.setContent("Zoom: " + map.getZoom());
    activePopup.setMap(null);
    activeInfoWindow.close();
  });




  var center = map.getCenter();
  // var checkscreen = screen(center);
  // alert(checkscreen); 

  /*  for (markerId in markerData) { // 나중에 위에 FOR문이랑 합쳐야 함
         if(markerData[markerId].lat < newNorthEast.lat() ){
           if(markerData[markerId].lat > newSouthWest.lat() )
           {
             $(".panel_list").children('p').each( function() { 
               if($(this).text()==markerData[markerId].title){
                 $(this).parent().display("block")
               }
             
             })
           }
        }
     } */



  function screen2(data) {
    $("#noList").css("display", "none");
    if (data.lat < newNorthEast.lat()) {
      if (data.lat > newSouthWest.lat()) {
        if (data.lng < newNorthEast.lng()) {
          if (data.lng > newSouthWest.lng()) {
            $(".panel_list").children('p').each(function () {
              if ($(this).text() == data.title) {
                //같은놈을 찾은 상태이기 때문에 data를 검색해도 되고 this를 검색해도 됨
                if ($("#train").hasClass('clicked')) {
                  if (data.type == "TRANSIT") {
                    return false;
                  }
                }
                if ($("#youtube").hasClass('clicked')) {
                  if (data.url.indexOf("youtube") != -1) {
                    return false;
                  }
                }
                if ($("#twitch").hasClass('clicked')) {
                  if (data.url.indexOf("twitch") != -1) {
                    return false;
                  }
                }
                if ($("#track").hasClass('clicked')) {
                  if (data.type == "track") {
                    return false;
                  }
                }
                if ($("#animal").hasClass('clicked')) {
                  if (data.type == "TRAanimalNSIT") {
                    return false;
                  }
                }
                if ($("#beach").hasClass('clicked')) {
                  if (data.type == "beach") {
                    return false;
                  }
                }
                if ($("#port").hasClass('clicked')) {
                  if (data.type == "port") {
                    return false;
                  }
                }
                if ($("#airplane").hasClass('clicked')) {
                  if (data.type == "airplane") {
                    return false;
                  }
                }
                if ($("#bridge").hasClass('clicked')) {
                  if (data.type == "bridge") {
                    return false;
                  }
                }
                if ($("#walking").hasClass('clicked')) {
                  if (data.type == "walking") {
                    return false;
                  }
                }

                $(this).parent().css("display", "block");
                panelCount++;
                selectedPanelList.push($(this).parent());
                return false;
              }

            })
          }
        }
      }
    }
    if (panelCount == 0) {
      $("#noList").css("display", "flex");
      //현재 지도에 보여줄 카메라가 없는 경우  
    }
    else {
      $("#noList").css("display", "none");

    }

  }

  /*
  fetch("https://www.youtube.com/watch?v=HpZAez2oYsA",{
    mode: "no-cors" // 'cors' by default
  })
  .then(function(response) {
    console.log(response);
    // Do something with response
  })
  .then(res => console.log(res));
  */


  function drawBlueLine(map, lineSymbol) {
    console.log();
    var startBlue = new google.maps.LatLng(2.852888, 101.651970);
    var endBlue = new google.maps.LatLng(2.941660, 101.594207);

    var blueLine = new google.maps.Polyline({
      path: [startBlue, endBlue],
      strokeColor: '#0000ff',
      strokeOpacity: 2.0,
      strokeWeight: 5,
      icons: [{
        icon: lineSymbol,
        offset: '100%'
      }],
      map: map
    });

    new google.maps.Marker({
      position: startBlue,
      map: map
    });

    new google.maps.Marker({
      position: endBlue,
      map: map
    });
  }
  var lineSymbol = {
    path: google.maps.SymbolPath.CIRCLE,
    scale: 6,
    strokeColor: '#393'
  };
  drawBlueLine(map, lineSymbol);

  function route(map) {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();

    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);

  }

  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    //const selectedMode = document.getElementById("mode").value;
    const selectedMode = 'TRANSIT'
    directionsService.route(
      {
        origin: { lat: 22.283, lng: 114.126 },
        destination: { lat: 22.279, lng: 114.225 },
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode[selectedMode],
      },
      (response, status) => {
        if (status == "OK") {
          directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }
  //route(map);
  //continue 함수에 위도 경도 받아서 그려준다.
  function route2(map) {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var haight = new google.maps.LatLng(37.7699298, -122.4469157);
    var oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205);

    directionsRenderer.setMap(map);

    var selectedMode = 'TRANSIT';
    var request = {
      origin: haight,
      destination: oceanBeach,
      // Note that JavaScript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode[selectedMode]
    };
    directionsService.route(request, function (response, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(response);
      }
    });
  }
  //route2(map);

  function route3(map, ori, des) {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var haight = new google.maps.LatLng(37.7699298, -122.4469157);
    var oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205);
    rendererList.push(directionsRenderer);
    directionsRenderer.setMap(map);

    var selectedMode = 'TRANSIT';
    var request = {
      origin: ori,
      destination: des,
      // Note that JavaScript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode[selectedMode],
      transitOptions: { modes: ['RAIL'] }
    };
    directionsService.route(request, function (response, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(response);
        marker = new google.maps.Marker({
          draggable: true,
          //animation: google.maps.Animation.DROP,
          icon: "http://labs.google.com/ridefinder/images/mm_20_blue.png",
        });
        directionsRenderer.setOptions({ preserveViewport: true, suppressMarkers: true, suppressInfoWindows: true, hideRouteList: true });
        //directionsRenderer.setOptions({markerOptions:marker, preserveViewport:true, suppressMarkers: false, suppressInfoWindows:true, hideRouteList:true});

      }
    });
  }
  //route2(map);






  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);
  //searchbox지도안으로 넣기
  //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });
  //let markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    // Clear out the old markers.
    //markers.forEach((marker) => {
    //  marker.setMap(null);
    //});
    //markers = [];
    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };
      // Create a marker for each place.
      /* markers.push(
         new google.maps.Marker({
           map,
           icon,
           title: place.name,
           position: place.geometry.location,
         })
       ); */

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });



  //moveToLocation(37.551279, 126.988227);

// zoom에 따라서 마크의 크기를 바꾸는 코드
  google.maps.event.addListener(map, 'zoom_changed', function() {
    zoomLevel = map.getZoom();
    if (zoomLevel > 5) {
  $('.popup-bubble').css('max-height', '32px')
    }
    else if(zoomLevel < 5) {
      $('.popup-bubble').css('max-height', '32px')

    }

})

}





var markers = [];
var selectedPanelList = new Array();
var rendererList = new Array();
var boxList = [];
var url;
var count = 0;
var activeInfoWindow;
var activePopup;
var popupCount = 0;
var popupList = [];
var markerList = [];
var idList = [];
// inside function createMap(...)



function createList(markerData) {
  for (id in markerData) {

    for (Nid in nationList) {
      if (markerData[id].nation == nationList[Nid]) {
        checkNation = 1;
        break;
      }

    }


    var split_url = markerData[id].url.split("embed/")
    var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/mqdefault.jpg"

    var liveViewerNumbers;
    var viewerNumbers;
    var viewer = document.createElement("p");
    var viewerTag;
    var ddd = 0;

    /*
    if(markerData[id].url.indexOf("youtube")!=-1){
    $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id='+ split_url +'&fields=items%2FliveStreamingDetails%2FconcurrentViewers&key=AIzaSyDgv3l-tQ1LK-BTVhPzS0YBzREQNzlTXc4', function(data) {
            
              if(data.items[0].liveStreamingDetails.concurrentViewers==undefined){
                $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=' + split_url + '&key=AIzaSyC3qOSdg6zVIxN-8EErjczoj99K171N5lw', function(data) {
            viewerNumbers = data.items[0].statistics.viewCount;
            //popupViewers.innerHTML = viewerNumbers +" watched "
            viewer.innerText = viewerNumbers +" watched ";
            viewerTag = viewerNumbers +" watched ";
          });
              }
              else {
                liveViewerNumbers = data.items[0].liveStreamingDetails.concurrentViewers;
                //popupViewers.innerHTML = liveViewerNumbers +" watching now "
                viewer.innerText = liveViewerNumbers +" watching now "
                viewerTag = liveViewerNumbers +" watching now "
    
              }
            });
            }
            else{
              //twitch의 경우
              viewer.innerText =  "999 watching now "
              
            } */


    if (checkNation == 0) {
      nationList.push(markerData[id].nation);
      if (markerData[id].nation == "United Kingdom") {
        console.log("uk");
      }
      var bt = document.createElement("button");
      bt.className = "accordion";
      bt.title = markerData[id].nation;
      bt.id = markerData[id].nation;
      bt.innerText = markerData[id].nation;
      var p = document.createElement("p")
      p.title = markerData[id].title;
      p.innerText = markerData[id].title;
      list.appendChild(bt);

      if (markerData[id].url.indexOf("youtube") != -1) {


        var split_url = markerData[id].url.split("embed/")
        var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/mqdefault.jpg"
        var localimg = "./img/youtube.png"

        var src = '<div class="panel_list" ><img id = "img_panel" src =' + imgsrc + ' class = "thumbnail" /> <div id = "video_panel" style ="display:none"> <iframe id="yt_panel" width="100%" height="100%" src="' + markerData[id].url + '?enablejsapi=1&version=3" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div> <p title = "' + markerData[id].title + '">' + markerData[id].title + '</>'

        //var toAddClickListener=$('#'+ markerData[id].nation).after(src);


        ////////////////////////////
        var div = document.createElement("div");
        div.className = "panel_list";
        var img = document.createElement("img");
        img.id = "img_panel";
        img.className = "thumbnail"
        img.src = imgsrc;
        var video_panel = document.createElement("div");
        video_panel.id = "video_panel";
        var yt_panel = document.createElement("div");
        yt_panel.id = "yt_panel_" + split_url[1];

        div.appendChild(img)

        //패널에 live랑 train 이미지 넣기 // 함수 분기되어있어서 두군데 반영해야 함
        var imgDiv = document.createElement("div");

        if (markerData[id].video_type == 'video') {
          var imgVideo = document.createElement("img");
          imgVideo.src = "./img/video.png"
          imgDiv.appendChild(imgVideo);
        }
        else{
        var imgLive = document.createElement("img");
        imgLive.src = "./img/live.png"

        imgDiv.appendChild(imgLive);
        }


        if (markerData[id].type == 'TRANSIT') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/train.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);
        }
        if (markerData[id].type == 'track') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/track5.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);
        }
        if (markerData[id].type == 'animal') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/lion.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);

        }
        if (markerData[id].type == 'beach') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/beach.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);

        }
        if (markerData[id].type == 'port') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/pin.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);

        }
        if (markerData[id].type == 'airplane') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/airplane2.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);

        }
        if (markerData[id].type == 'bridge') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/bridge.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);
        }

        if (markerData[id].type == 'walking') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/walking.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);
        }

        var mapDiv = document.createElement("div");
        var mapImg = document.createElement("img");
        mapImg.src = "./img/map.png"    
        mapDiv.appendChild(mapImg);
        mapDiv.className = "mapDiv";
        mapDiv.id=split_url[1];



        var iframe = document.createElement("div"); //필요없나??
        iframe.setAttribute("id", "yt_panel_" + split_url[1]);
        //  iframe.setAttribute( "frameborder", "0" );
        //   iframe.setAttribute( "allowfullscreen", "" );
        //    iframe.setAttribute("allow","autoplay");
        //   iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ split_url[1] +"?rel=0&showinfo=0&autoplay=1&enbalejsapi=1&version=3" );
        iframe.setAttribute("class", "yt_class");
        video_panel.appendChild(iframe);

        div.appendChild(video_panel);
        div.appendChild(imgDiv);
        div.appendChild(p);
        div.appendChild(mapDiv);
        div.appendChild(viewer);
        $('#' + markerData[id].nation).after([div]);

        // var parent = document.getElementById(markerData[id].nation);
        //parent.parentNode.insertBefore(div,parent);
        //document.body.appendChild(video_panel);




        // var yt_panel_el = document.getElementById("yt_panel_" + split_url[1]);
        // yt_panel_el.appendChild(iframe);
        //video_panel.innerHTML = "";




        // eval("ytPlayer_" + split_url[1] + "= ytPlayer" );
        // ddd = ytPlayer;
        //  ytPlayers[ytCount] = ytPlayer;


        //////////continue
      }
      else {


        var div = document.createElement("div");
        div.className = "panel_list";
        var img = document.createElement("img");
        img.id = "img_panel";
        img.className = "thumbnail"
        var split_url = markerData[id].url.split("=");
        split_url = split_url[1].split("&");
        var imgsrc = "https://static-cdn.jtvnw.net/previews-ttv/live_user_" + split_url[0] + "-480x272.jpg"

        img.src = imgsrc;

        var video_panel = document.createElement("div");
        video_panel.id = "video_panel";

        var twitch_panel = document.createElement("div");
        twitch_panel.id = "twitch_panel_" + listCount;

        div.appendChild(img)
        video_panel.appendChild(twitch_panel);
        div.appendChild(video_panel);
        div.appendChild(p);
        div.appendChild(viewer);
        $('#' + markerData[id].nation).after([div]);

        var options = {
          width: "400",
          height: "272",
          channel: split_url[0],
          // only needed if your site is also embedded on embed.example.com and othersite.example.com
          parent: ["sunnyfive.net", "localhost"]
        };
        var player = new Twitch.Player("twitch_panel_" + listCount, options);
        //eval("var player" + listCount + "=" + player );
        myArray.push(player);
        player.setVolume(0.5);

      }

      //var div = document.createElement("div");
      //div.className="panel";
      //var p = document.createElement("p")
      //p.title = markerData[id].title;
      //=p.innerText = markerData[id].title;
      ////p.addEventListener("click",window.open(markerData[id].url));
      var split_url = markerData[id].url.split("embed/")
      //var img = document.createElement("img")
      //img.src = "https://img.youtube.com/vi/" + split_url[1] + "/mqdefault.jpg"
      ////img.style.position="relative"
      //img.className = "thumbnail"

      //img.onerror= "function(){$(this).parent().remove()}"





      //var src = '<div class="panel_list" ><img id = "img_panel" src =' + imgsrc + ' class = "thumbnail" onerror="function(){$(this).parent().remove()}"/> <div id = "video_panel" style ="display:none"> <iframe id="yt_panel" width="100%" height="100%" src="'+markerData[id].url+'?enablejsapi=1&version=3" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div> <p title = "' + markerData[id].title + '">' +markerData[id].title + '</>'



      //div.appendChild(img);
      //div.appendChild(p);


      //$('#'+ markerData[id].nation).after(div);
      //var toAddClickListener=$('#'+ markerData[id].nation).after(src);


    }

    else if (checkNation == 1) {
      var bt = document.getElementById(markerData[id].nation);
      //var div = document.createElement("div");
      //div.className="panel";
      //div.onclick
      var p = document.createElement("p")
      p.title = markerData[id].title;
      p.innerText = markerData[id].title;


      //p.addEventListener("click",window.open(markerData[id].url));

      //var split_url = markerData[id].url.split("embed/")
      //var img = document.createElement("img")
      //img.src = "https://img.youtube.com/vi/" + split_url[1] + "/mqdefault.jpg"

      //img.onerror="function(){$(this).parent().remove()}"
      //var imgCheck = ImageExist("https://img.youtube.com/vi/" + split_url[1] + "/mqdefault.jpg")

      //var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/mqdefault.jpg"

      if (markerData[id].url.indexOf("youtube") != -1) {
        var split_url = markerData[id].url.split("embed/")
        var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/hqdefault.jpg"
        var localimg = "./img/youtube.png"
        var src = '<div class="panel_list" ><img id = "img_panel" src =' + imgsrc + ' class = "thumbnail" onerror="function(){$(this).parent().remove()}"/> <div id = "video_panel" style ="display:none"> <iframe id="yt_panel" width="100%" height="100%" src="' + markerData[id].url + '?enablejsapi=1&version=3" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div> <p title = "' + markerData[id].title + '">' + markerData[id].title + '</>' + '<div>' + viewerTag + '</div>'

        // var toAddClickListener = $('#'+ markerData[id].nation).after(src);


        var div = document.createElement("div");
        div.className = "panel_list";
        var img = document.createElement("img");
        img.id = "img_panel";
        img.className = "thumbnail"
        img.src = imgsrc;
        var video_panel = document.createElement("div");
        video_panel.id = "video_panel";
        var yt_panel = document.createElement("div");
        yt_panel.id = "yt_panel_" + split_url[1];

        div.appendChild(img)
        //video_panel.appendChild(yt_panel);


        //패널에 live랑 train 이미지 넣기
        var imgDiv = document.createElement("div");

        if (markerData[id].video_type == 'video') {
          var imgVideo = document.createElement("img");
          imgVideo.src = "./img/video.png"
          imgDiv.appendChild(imgVideo);
        }
        else{
        var imgLive = document.createElement("img");
        imgLive.src = "./img/live.png"

        imgDiv.appendChild(imgLive);
        }
        if (markerData[id].type == 'TRANSIT') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/train.png"
          imgTransit.className = "list_img";
          imgDiv.appendChild(imgTransit);

        }
        if (markerData[id].type == 'track') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/track5.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);
        }
        if (markerData[id].type == 'animal') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/lion.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);

        }
        if (markerData[id].type == 'beach') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/beach.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);

        }
        if (markerData[id].type == 'port') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/pin.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);

        }
        if (markerData[id].type == 'airplane') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/airplane2.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);

        }
        if (markerData[id].type == 'bridge') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/bridge.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);
        }

        if (markerData[id].type == 'walking') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/walking.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);
        }

        var mapDiv = document.createElement("div");
       var mapImg = document.createElement("img");
       mapImg.src = "./img/map.png"  
       mapDiv.appendChild(mapImg);
       mapDiv.className = "mapDiv";
       mapDiv.id=split_url[1];

        var iframe = document.createElement("div");
        iframe.setAttribute("id", "yt_panel_" + split_url[1]);
        // iframe.setAttribute( "frameborder", "0" );
        // iframe.setAttribute( "allowfullscreen", "" );
        //   iframe.setAttribute("allow","autoplay");
        //  iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ split_url[1] +"?rel=0&showinfo=0&autoplay=1&enbalejsapi=1&version=3" );
        iframe.setAttribute("class", "yt_class");
        video_panel.appendChild(iframe);


        div.appendChild(video_panel);
        div.appendChild(imgDiv);
        div.appendChild(p);
        div.appendChild(mapDiv);
        div.appendChild(viewer);
        $('#' + markerData[id].nation).after([div]);

        // var parent = document.getElementById(markerData[id].nation);
        //parent.parentNode.insertBefore(div,parent);
        //document.body.appendChild(video_panel);





        // var yt_panel_el = document.getElementById("yt_panel_" + split_url[1]);
        // yt_panel_el.appendChild(iframe);
        //video_panel.innerHTML = "";




        // eval("ytPlayer_" + split_url[1] + "= ytPlayer" );
        //ddd = ytPlayer;
        //ytPlayers[ytCount] = ytPlayer;



      }
      else {
        var div = document.createElement("div");
        div.className = "panel_list";
        var img = document.createElement("img");
        img.id = "img_panel";
        img.className = "thumbnail"
        var split_url = markerData[id].url.split("=");
        split_url = split_url[1].split("&");
        var imgsrc = "https://static-cdn.jtvnw.net/previews-ttv/live_user_" + split_url[0] + "-480x272.jpg"

        img.src = imgsrc;

        var video_panel = document.createElement("div");
        video_panel.id = "video_panel";

        var twitch_panel = document.createElement("div");
        twitch_panel.id = "twitch_panel_" + split_url[0];

        div.appendChild(img)
        video_panel.appendChild(twitch_panel);
        div.appendChild(video_panel);
        div.appendChild(p);
        div.appendChild(viewer);
        $('#' + markerData[id].nation).after([div]);

        var options = {
          width: 480,
          height: 270,
          channel: split_url[0],
          autoplay: false,
          // only needed if your site is also embedded on embed.example.com and othersite.example.com
          parent: ["sunnyfive.net", "localhost"]
        };
        //var player = new Twitch.Player("twitch_panel_" + listCount, options);
        $(document).ready(function () {

          //var player = new Twitch.Player("twitch_panel_" + split_url[0], options);

          // twitch 동적으로 재생, 정지하는 방법 2가지, 
          // 1. eval로 동적변수할당 , 2. array 만들어서 push하면서 담기
          // 찾아서 컨트롤 하기 위해서는 변수나 array를 순회하면서 getChannel() 해도 되고
          // 변수이름에 listcount대신 채널이름을 붙여서 찾아도 될듯
          // 혹은 같은 순번의 array 를 하나 더 만들어서 채널이름을 담고, 나중에는 이 array
          // 를 순회하면서 채널을 찾으면 그 찾은 배열의 순서와 같은 변수나 myArray를 찍어서 컨트롤
          //   eval("player_" + split_url[0] + "= player" );
          // myArray.push(player);
          // player.setVolume(0.5);
        });
      }


      //var src = '<div class="panel_list" ><img id = "img_panel" src =' + imgsrc + ' class = "thumbnail" onerror="function(){$(this).parent().remove()}"/> <div id = "video_panel" style ="display:none"> <iframe id="yt_panel" width="100%" height="100%" src="'+markerData[id].url+'?enablejsapi=1&version=3" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div> <p title = "' + markerData[id].title + '">' +markerData[id].title + '</>'

      //img.style.position="relative"
      //img.style.borderRadius="10px"
      //img.className = "thumbnail"
      //div.appendChild(img);
      //div.appendChild(p);


      //$('#'+ markerData[id].nation).after(div); // 뒤에다 붙이던가 SRC로 접근

    }


    checkNation = 0;
  }
  listCount++;
}








function createImgList(markerData) {
  for (id in markerData) {

    for (Nid in nationList) {
      if (markerData[id].nation == nationList[Nid]) {
        checkNation = 1;
        break;
      }

    }


    var split_url = markerData[id].url.split("embed/")
    var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/mqdefault.jpg"

    var liveViewerNumbers;
    var viewerNumbers;
    var viewer = document.createElement("p");
    var viewerTag;
    var ddd = 0;

    /*
    if(markerData[id].url.indexOf("youtube")!=-1){
    $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id='+ split_url +'&fields=items%2FliveStreamingDetails%2FconcurrentViewers&key=AIzaSyDgv3l-tQ1LK-BTVhPzS0YBzREQNzlTXc4', function(data) {
            
              if(data.items[0].liveStreamingDetails.concurrentViewers==undefined){
                $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=' + split_url + '&key=AIzaSyC3qOSdg6zVIxN-8EErjczoj99K171N5lw', function(data) {
            viewerNumbers = data.items[0].statistics.viewCount;
            //popupViewers.innerHTML = viewerNumbers +" watched "
            viewer.innerText = viewerNumbers +" watched ";
            viewerTag = viewerNumbers +" watched ";
          });
              }
              else {
                liveViewerNumbers = data.items[0].liveStreamingDetails.concurrentViewers;
                //popupViewers.innerHTML = liveViewerNumbers +" watching now "
                viewer.innerText = liveViewerNumbers +" watching now "
                viewerTag = liveViewerNumbers +" watching now "
    
              }
            });
            }
            else{
              //twitch의 경우
              viewer.innerText =  "999 watching now "
              
            } */


    if (checkNation == 0) {
      nationList.push(markerData[id].nation);
      if (markerData[id].nation == "United Kingdom") {
        console.log("uk");
      }
      var bt = document.createElement("button");
      bt.className = "accordion";
      bt.title = markerData[id].nation;
      bt.id = markerData[id].nation;
      bt.innerText = markerData[id].nation;
      var p = document.createElement("p")
      p.title = markerData[id].title;
      p.innerText = markerData[id].title;
      list.appendChild(bt);

      if (markerData[id].url.indexOf("youtube") != -1) {


        var split_url = markerData[id].url.split("embed/")
        var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/mqdefault.jpg"
        var localimg = "./img/youtube.png"

        var src = '<div class="panel_list" ><img id = "img_panel" src =' + imgsrc + ' class = "thumbnail" /> <div id = "video_panel" style ="display:none"> <iframe id="yt_panel" width="100%" height="100%" src="' + markerData[id].url + '?enablejsapi=1&version=3" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div> <p title = "' + markerData[id].title + '">' + markerData[id].title + '</>'

        //var toAddClickListener=$('#'+ markerData[id].nation).after(src);


        ////////////////////////////
        var div = document.createElement("div");
        div.className = "panel_list";
        var img = document.createElement("img");
        img.id = "img_panel";
        img.className = "thumbnail"
        img.src = imgsrc;
        var video_panel = document.createElement("div");
        video_panel.id = "video_panel";
        var yt_panel = document.createElement("div");
        yt_panel.id = "yt_panel_" + split_url[1];

        div.appendChild(img)

        //패널에 live랑 train 이미지 넣기 // 함수 분기되어있어서 두군데 반영해야 함
        var imgDiv = document.createElement("div");

        if (markerData[id].video_type == 'video') {
          var imgVideo = document.createElement("img");
          imgVideo.src = "./img/video.png"
          imgDiv.appendChild(imgVideo);
        }
        else{
        var imgLive = document.createElement("img");
        imgLive.src = "./img/live.png"

        imgDiv.appendChild(imgLive);
        }


        if (markerData[id].type == 'TRANSIT') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/train.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);
        }
        if (markerData[id].type == 'track') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/track5.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);
        }
        if (markerData[id].type == 'animal') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/lion.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);

        }
        if (markerData[id].type == 'beach') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/beach.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);

        }
        if (markerData[id].type == 'port') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/pin.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);

        }
        if (markerData[id].type == 'airplane') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/airplane2.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);

        }
        if (markerData[id].type == 'bridge') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/bridge.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);
        }

        if (markerData[id].type == 'walking') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/walking.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);
        }

        var mapDiv = document.createElement("div");
        var mapImg = document.createElement("img");
        mapImg.src = "./img/map.png"    
        mapDiv.appendChild(mapImg);
        mapDiv.className = "mapDiv";
        mapDiv.id=split_url[1];



        var iframe = document.createElement("div"); //필요없나??
        iframe.setAttribute("id", "yt_panel_" + split_url[1]);
        //  iframe.setAttribute( "frameborder", "0" );
        //   iframe.setAttribute( "allowfullscreen", "" );
        //    iframe.setAttribute("allow","autoplay");
        //   iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ split_url[1] +"?rel=0&showinfo=0&autoplay=1&enbalejsapi=1&version=3" );
        iframe.setAttribute("class", "yt_class");
        video_panel.appendChild(iframe);

        div.appendChild(video_panel);
        div.appendChild(imgDiv);
        div.appendChild(p);
        div.appendChild(mapDiv);
        div.appendChild(viewer);
        $('#' + markerData[id].nation).after([div]);

        // var parent = document.getElementById(markerData[id].nation);
        //parent.parentNode.insertBefore(div,parent);
        //document.body.appendChild(video_panel);




        // var yt_panel_el = document.getElementById("yt_panel_" + split_url[1]);
        // yt_panel_el.appendChild(iframe);
        //video_panel.innerHTML = "";




        // eval("ytPlayer_" + split_url[1] + "= ytPlayer" );
        // ddd = ytPlayer;
        //  ytPlayers[ytCount] = ytPlayer;


        //////////continue
      }
      else {


        var div = document.createElement("div");
        div.className = "panel_list";
        var img = document.createElement("img");
        img.id = "img_panel";
        img.className = "thumbnail"
        var split_url = markerData[id].url.split("=");
        split_url = split_url[1].split("&");
        var imgsrc = "https://static-cdn.jtvnw.net/previews-ttv/live_user_" + split_url[0] + "-480x272.jpg"

        img.src = imgsrc;

        var video_panel = document.createElement("div");
        video_panel.id = "video_panel";

        var twitch_panel = document.createElement("div");
        twitch_panel.id = "twitch_panel_" + listCount;

        div.appendChild(img)
        video_panel.appendChild(twitch_panel);
        div.appendChild(video_panel);
        div.appendChild(p);
        div.appendChild(viewer);
        $('#' + markerData[id].nation).after([div]);

        var options = {
          width: "400",
          height: "272",
          channel: split_url[0],
          // only needed if your site is also embedded on embed.example.com and othersite.example.com
          parent: ["sunnyfive.net", "localhost"]
        };
        var player = new Twitch.Player("twitch_panel_" + listCount, options);
        //eval("var player" + listCount + "=" + player );
        myArray.push(player);
        player.setVolume(0.5);

      }

      //var div = document.createElement("div");
      //div.className="panel";
      //var p = document.createElement("p")
      //p.title = markerData[id].title;
      //=p.innerText = markerData[id].title;
      ////p.addEventListener("click",window.open(markerData[id].url));
      var split_url = markerData[id].url.split("embed/")
      //var img = document.createElement("img")
      //img.src = "https://img.youtube.com/vi/" + split_url[1] + "/mqdefault.jpg"
      ////img.style.position="relative"
      //img.className = "thumbnail"

      //img.onerror= "function(){$(this).parent().remove()}"





      //var src = '<div class="panel_list" ><img id = "img_panel" src =' + imgsrc + ' class = "thumbnail" onerror="function(){$(this).parent().remove()}"/> <div id = "video_panel" style ="display:none"> <iframe id="yt_panel" width="100%" height="100%" src="'+markerData[id].url+'?enablejsapi=1&version=3" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div> <p title = "' + markerData[id].title + '">' +markerData[id].title + '</>'



      //div.appendChild(img);
      //div.appendChild(p);


      //$('#'+ markerData[id].nation).after(div);
      //var toAddClickListener=$('#'+ markerData[id].nation).after(src);


    }

    else if (checkNation == 1) {
      var bt = document.getElementById(markerData[id].nation);
      //var div = document.createElement("div");
      //div.className="panel";
      //div.onclick
      var p = document.createElement("p")
      p.title = markerData[id].title;
      p.innerText = markerData[id].title;


      //p.addEventListener("click",window.open(markerData[id].url));

      //var split_url = markerData[id].url.split("embed/")
      //var img = document.createElement("img")
      //img.src = "https://img.youtube.com/vi/" + split_url[1] + "/mqdefault.jpg"

      //img.onerror="function(){$(this).parent().remove()}"
      //var imgCheck = ImageExist("https://img.youtube.com/vi/" + split_url[1] + "/mqdefault.jpg")

      //var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/mqdefault.jpg"

      if (markerData[id].url.indexOf("youtube") != -1) {
        var split_url = markerData[id].url.split("embed/")
        var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/hqdefault.jpg"
        var localimg = "./img/youtube.png"
        var src = '<div class="panel_list" ><img id = "img_panel" src =' + imgsrc + ' class = "thumbnail" onerror="function(){$(this).parent().remove()}"/> <div id = "video_panel" style ="display:none"> <iframe id="yt_panel" width="100%" height="100%" src="' + markerData[id].url + '?enablejsapi=1&version=3" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div> <p title = "' + markerData[id].title + '">' + markerData[id].title + '</>' + '<div>' + viewerTag + '</div>'

        // var toAddClickListener = $('#'+ markerData[id].nation).after(src);


        var div = document.createElement("div");
        div.className = "panel_list";
        var img = document.createElement("img");
        img.id = "img_panel";
        img.className = "thumbnail"
        img.src = imgsrc;
        var video_panel = document.createElement("div");
        video_panel.id = "video_panel";
        var yt_panel = document.createElement("div");
        yt_panel.id = "yt_panel_" + split_url[1];

        div.appendChild(img)
        //video_panel.appendChild(yt_panel);


        //패널에 live랑 train 이미지 넣기
        var imgDiv = document.createElement("div");

        if (markerData[id].video_type == 'video') {
          var imgVideo = document.createElement("img");
          imgVideo.src = "./img/video.png"
          imgDiv.appendChild(imgVideo);
        }
        else{
        var imgLive = document.createElement("img");
        imgLive.src = "./img/live.png"

        imgDiv.appendChild(imgLive);
        }
        if (markerData[id].type == 'TRANSIT') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/train.png"
          imgTransit.className = "list_img";
          imgDiv.appendChild(imgTransit);

        }
        if (markerData[id].type == 'track') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/track5.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);
        }
        if (markerData[id].type == 'animal') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/lion.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);

        }
        if (markerData[id].type == 'beach') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/beach.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);

        }
        if (markerData[id].type == 'port') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/pin.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);

        }
        if (markerData[id].type == 'airplane') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/airplane2.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);

        }
        if (markerData[id].type == 'bridge') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/bridge.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);
        }

        if (markerData[id].type == 'walking') {
          var imgTransit = document.createElement("img");
          imgTransit.src = "./img/walking.png"
          imgTransit.className = "list_img";

          imgDiv.appendChild(imgTransit);
        }

        var mapDiv = document.createElement("div");
       var mapImg = document.createElement("img");
       mapImg.src = "./img/map.png"  
       mapDiv.appendChild(mapImg);
       mapDiv.className = "mapDiv";
       mapDiv.id=split_url[1];

        var iframe = document.createElement("div");
        iframe.setAttribute("id", "yt_panel_" + split_url[1]);
        // iframe.setAttribute( "frameborder", "0" );
        // iframe.setAttribute( "allowfullscreen", "" );
        //   iframe.setAttribute("allow","autoplay");
        //  iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ split_url[1] +"?rel=0&showinfo=0&autoplay=1&enbalejsapi=1&version=3" );
        iframe.setAttribute("class", "yt_class");
        video_panel.appendChild(iframe);


        div.appendChild(video_panel);
        div.appendChild(imgDiv);
        div.appendChild(p);
        div.appendChild(mapDiv);
        div.appendChild(viewer);
        $('#' + markerData[id].nation).after([div]);

        // var parent = document.getElementById(markerData[id].nation);
        //parent.parentNode.insertBefore(div,parent);
        //document.body.appendChild(video_panel);





        // var yt_panel_el = document.getElementById("yt_panel_" + split_url[1]);
        // yt_panel_el.appendChild(iframe);
        //video_panel.innerHTML = "";




        // eval("ytPlayer_" + split_url[1] + "= ytPlayer" );
        //ddd = ytPlayer;
        //ytPlayers[ytCount] = ytPlayer;



      }
      else {
        var div = document.createElement("div");
        div.className = "panel_list";
        var img = document.createElement("img");
        img.id = "img_panel";
        img.className = "thumbnail"
        var split_url = markerData[id].url.split("=");
        split_url = split_url[1].split("&");
        var imgsrc = "https://static-cdn.jtvnw.net/previews-ttv/live_user_" + split_url[0] + "-480x272.jpg"

        img.src = imgsrc;

        var video_panel = document.createElement("div");
        video_panel.id = "video_panel";

        var twitch_panel = document.createElement("div");
        twitch_panel.id = "twitch_panel_" + split_url[0];

        div.appendChild(img)
        video_panel.appendChild(twitch_panel);
        div.appendChild(video_panel);
        div.appendChild(p);
        div.appendChild(viewer);
        $('#' + markerData[id].nation).after([div]);

        var options = {
          width: 480,
          height: 270,
          channel: split_url[0],
          autoplay: false,
          // only needed if your site is also embedded on embed.example.com and othersite.example.com
          parent: ["sunnyfive.net", "localhost"]
        };
        //var player = new Twitch.Player("twitch_panel_" + listCount, options);
        $(document).ready(function () {

          //var player = new Twitch.Player("twitch_panel_" + split_url[0], options);

          // twitch 동적으로 재생, 정지하는 방법 2가지, 
          // 1. eval로 동적변수할당 , 2. array 만들어서 push하면서 담기
          // 찾아서 컨트롤 하기 위해서는 변수나 array를 순회하면서 getChannel() 해도 되고
          // 변수이름에 listcount대신 채널이름을 붙여서 찾아도 될듯
          // 혹은 같은 순번의 array 를 하나 더 만들어서 채널이름을 담고, 나중에는 이 array
          // 를 순회하면서 채널을 찾으면 그 찾은 배열의 순서와 같은 변수나 myArray를 찍어서 컨트롤
          //   eval("player_" + split_url[0] + "= player" );
          // myArray.push(player);
          // player.setVolume(0.5);
        });
      }


      //var src = '<div class="panel_list" ><img id = "img_panel" src =' + imgsrc + ' class = "thumbnail" onerror="function(){$(this).parent().remove()}"/> <div id = "video_panel" style ="display:none"> <iframe id="yt_panel" width="100%" height="100%" src="'+markerData[id].url+'?enablejsapi=1&version=3" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div> <p title = "' + markerData[id].title + '">' +markerData[id].title + '</>'

      //img.style.position="relative"
      //img.style.borderRadius="10px"
      //img.className = "thumbnail"
      //div.appendChild(img);
      //div.appendChild(p);


      //$('#'+ markerData[id].nation).after(div); // 뒤에다 붙이던가 SRC로 접근

    }


    checkNation = 0;
  }
  listCount++;
}













function insertYoutube(markerData) {
  for (id in markerData) {



    if (markerData[id].url.indexOf("youtube") != -1) {
      var split_url = markerData[id].url.split("embed/")


      var ytPlayer = new YT.Player("yt_panel_" + split_url[1], {
        height: '272',
        width: '480',
        videoId: split_url[1],
        playersVar : { autoplay:1},
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });

      // console.log(ytPlayer);


      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        //event.target.playVideo();
       ////// console.log(event.target);
        // console.log(event);
        ytPlayers[ytCount] = event.target;
        ytCount++;

      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        //player.stopVideo();
      }


      // eval("ytPlayer_" + split_url[1] + "= ytPlayer" );



    }
    else {

    }


  }

}




function insertYoutube_1(data) {



    if (data.url.indexOf("youtube") != -1) {
      var split_url = data.url.split("embed/")


      var ytPlayer = new YT.Player("video", {
        height: '272',
        width: '480',
        videoId: split_url[1],
        playersVar : { autoplay:1},
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });

      // console.log(ytPlayer);


      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        //event.target.playVideo();
       ////// console.log(event.target);
        // console.log(event);
        ytPlayers[ytCount] = event.target;
        ytCount++;

      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        //player.stopVideo();
      }


      // eval("ytPlayer_" + split_url[1] + "= ytPlayer" );



    }
    else {

    }
}




function insertYoutube3(markerData) {
  for (id in markerData) {



    if (markerData[id].url.indexOf("youtube") != -1) {
      var split_url = markerData[id].url.split("embed/")


      var ytPlayer = new YT.Player("yt_panel_" + split_url[1], {
        height: '272',
        width: '480',
        videoId: split_url[1],
        playersVar : { autoplay:1},
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });

      // console.log(ytPlayer);


      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        //event.target.playVideo();
       ////// console.log(event.target);
        // console.log(event);
        ytPlayers[ytCount] = event.target;
        ytCount++;

      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        //player.stopVideo();
      }


      // eval("ytPlayer_" + split_url[1] + "= ytPlayer" );



    }
    else {

    }


  }

}






function ImageExist(url) {
  var img = new Image();
  img.src = url;
  return img.height != 0;
}

function UrlExists(url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  return http.status != 404;
}





function createMarker(data) {
  var myLatLng = new google.maps.LatLng(data.lat, data.lng);
  var split_url = data.url.split("embed/")
  var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/default.jpg"

  var marker = new google.maps.Marker({
    id: count,
    position: myLatLng,
    //icon: imgsrc,
    map: map,
    title: data.title
    //animation:google.maps.Animation.BOUNCE


  });


  //var content = "Loan Number: " + data.title + '</h3>' + "Address: " + data.url

  /* var boxText = document.createElement("div");
           boxText.id = markerId;
           boxText.style.cssText = "border: 1px solid black; margin-top: 8px; background: yellow; padding: 5px;";
           boxText.innerHTML = "InfoBox for " + "hello";

   var ib = new InfoBox(myOptions);
           boxList.push(ib); */


  var img = document.createElement("img");
  img.src = "https://img.youtube.com/vi/" + split_url[1] + "/default.jpg";
  img.style.float = "left";


  var boxText = document.createElement("div");
  var boxUrl = document.createElement("a");
  boxUrl.setAttribute('href', markerData[count].url);
  boxUrl.innerText = markerData[count].title;
  boxText.id = count;
  boxUrl.innerHTML = markerData[count].title;

  boxText.appendChild(img);
  boxText.appendChild(boxUrl);
  boxList.push(boxText);

  /*var myOptions = {
      content: boxText
      ,disableAutoPan: false
      ,maxWidth: 0
      ,pixelOffset: new google.maps.Size(-140, 0)
      ,zIndex: null
      ,boxStyle: {
          background: "url('tipbox.gif') no-repeat"
          ,opacity: 0.75
          ,width: "280px"
      }
      ,closeBoxMargin: "10px 2px 2px 2px"
      ,closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif"
      ,infoBoxClearance: new google.maps.Size(1, 1)
      ,isHidden: false
      ,pane: "floatPane"
      ,enableEventPropagation: false
  };*/
  //var ib = new InfoBox(myOptions);


  //var infowindow = new google.maps.InfoWindow()

  var infowindow = new google.maps.InfoWindow({
    disableAutoPan: true
    , isHidden: false
    , pixelOffset: new google.maps.Size(-10, -10)
    , closeBoxURL: ""
    , pane: "mapPane"
    , enableEventPropagation: true
  });



  google.maps.event.addListener(marker, 'mouseover', function () {
    marker.setIcon();
  });
  google.maps.event.addListener(marker, 'mouseout', function () {
    marker.setIcon();
  });


  google.maps.event.addListener(marker, "click", (function (marker) {
    return function (evt) {
      url = data.url;
      /*var content = '<div id="infoWindow">'
                  +'<div id="bodyContent">'
                  +'<p>'
                 // + "This location is:<br>"
                  + marker.getTitle()
                  +'</p>'
                  +'</div>'
                  + '</div>';*/



      var content = boxList[this.id];
      if (activeInfoWindow) { activeInfoWindow.close(); }
      $('#keyword').val(data.title)
      infowindow.setContent(content);
      infowindow.open(map, marker);
      activeInfoWindow = infowindow

    }
  })(marker));


  markerList[count] = marker;


  count++;
}


function createYtPlayer(id) {

  var player;
  window.onYouTubeIframeAPIReady = function () {
    player = new YT.Player("yt_panel_" + id, {
      height: '360',
      width: '640',
      videoId: id,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }// continue 함수를 바깥으로 빼보자

  function onPlayerReady(event) {
    eval("ytPlayer_" + id + "= player");

    event.target.playVideo();
  }
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }

}


function screen(latlng) {
  var numTiles = 1 << map.getZoom();
  var projection = map.getProjection();
  var worldCoordinate = projection.fromLatLngToPoint(latlng);
  var pixelCoordinate = new google.maps.Point(
    worldCoordinate.x * numTiles,
    worldCoordinate.y * numTiles);

  var topLeft = new google.maps.LatLng(
    map.getBounds().getNorthEast().lat(),
    map.getBounds().getSouthWest().lng()
  );

  var topLeftWorldCoordinate = projection.fromLatLngToPoint(topLeft);
  var topLeftPixelCoordinate = new google.maps.Point(
    topLeftWorldCoordinate.x * numTiles,
    topLeftWorldCoordinate.y * numTiles);

  return new google.maps.Point(
    pixelCoordinate.x - topLeftPixelCoordinate.x,
    pixelCoordinate.y - topLeftPixelCoordinate.y
  )
}

$(document).ready(function () {
  $('.panel_list').click(function () {
    var title = $(this).find("p")[0].title;
    var url;
    var lat;
    var lng;
    for (tt in markerData) {
      if (markerData[tt].title == title) {
        url = markerData[tt].url;
        lat = markerData[tt].lat;
        lng = markerData[tt].lng;
        break;
      }
    }
    //var split_url = markerData[id].url.split("embed/")
    var id = $(this).find("iframe[id*='yt_panel']").attr("id")
    //리스트 클릭시 상단 비디오에 클릭된 비디오 유투브를 띄운다.

    $(video).find("iframe")[0].src = url;
    $(video).css("display", "block");


    $( '#iframeyt' ).remove();

    var iframe = document.createElement( "iframe" );

    iframe.setAttribute("id","iframeyt")
    iframe.setAttribute( "frameborder", "0" );
    iframe.setAttribute( "allowfullscreen", "" );
    iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

    this.innerHTML = "";
    this.appendChild( iframe );




    //$("iframe[id*='yt_panel']").each(function() { $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');} );
    $("div[id='video_panel']").hide();
    $("img[id='img_panel']").show();
    var playYt;
    $(ytPlayers).each(function (i) {
      //console.log(this);
      this.stopVideo();
      // if(id==this.getVideoData().video_id){
      if (id == this.getIframe().id) {
        this.playVideo();
        //playYt=this;
      }
    });
    //playYt.playVideo();

    // 아래는 리스트에 직접 비디오를 보여주는 식으로 바꾼 것
    $(this).find("img[id='img_panel']").hide();
    $(this).find("div[id='video_panel']").show();
    //$(this).find("iframe[id*='yt_panel']")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    //리스트 클릭시 해당 위치를 중점으로 이동 //이동하게되면 또 리스트를 새로 읽어와서 혼란이 있어서 주석처리함
    //moveToLocation(lat,lng); 


    $(this).find()


  });
});


$('.panel_list').mouseenter(function () {
  var title = $(this).find("p")[0].title;
  var url;
  var lat;
  var lng;
  for (tt in markerData) {
    if (markerData[tt].title == title) {
      url = markerData[tt].url;
      lat = markerData[tt].lat;
      lng = markerData[tt].lng;
      break;
    }
  }
  var split_url = url.split("embed/")
  var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/default.jpg"

  var imgtest = {
    url: "https://img.youtube.com/vi/" + split_url[1] + "/default.jpg",
    scale: 8.5,
    size: new google.maps.Size(200, 80),
    borderRadius: 10,
    fillColor: "#F00",
    fillOpacity: 0.4,
    strokeWeight: 0.4
  }
  for (tt in markerList) {
    if (markerList[tt].title == title) {
      markerList[tt].setIcon(imgtest);
      break;
    }
  }

  //markerList에서 찾아서 seticon imgsrc로 
  //리스트 클릭시 상단 비디오에 클릭된 비디오 유투브를 띄운다.
  /*
      $(video).find("iframe")[0].src=url;
      $(video).css("display","block");
      
      
      $("iframe[id='yt_panel']").each(function() { $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');} );
      $("div[id='video_panel']").hide();
      $("img[id='img_panel']").show();
  
      
  
      // 아래는 리스트에 직접 비디오를 보여주는 식으로 바꾼 것
  $(this).find("img").hide();
  $(this).find("div[id='video_panel']").show();
  
  */


  //리스트 클릭시 해당 위치를 중점으로 이동 //이동하게되면 또 리스트를 새로 읽어와서 혼란이 있어서 주석처리함 
  //moveToLocation(lat,lng);



});



//indexed db







$('.panel_list').mouseleave(function () {
  var title = $(this).find("p")[0].title;
  var url;
  var lat;
  var lng;
  for (tt in markerData) {
    if (markerData[tt].title == title) {
      url = markerData[tt].url;
      lat = markerData[tt].lat;
      lng = markerData[tt].lng;
      break;
    }
  }
  var split_url = url.split("embed/")
  var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/default.jpg"

  for (tt in markerList) {
    if (markerList[tt].title == title) {
      markerList[tt].setIcon("");
      break;
    }
  }

  //markerList에서 찾아서 seticon imgsrc로 
  //리스트 클릭시 상단 비디오에 클릭된 비디오 유투브를 띄운다.





  // 아래는 리스트에 직접 비디오를 보여주는 식으로 바꾼 것


  //리스트 클릭시 해당 위치를 중점으로 이동 //이동하게되면 또 리스트를 새로 읽어와서 혼란이 있어서 주석처리함 
  //moveToLocation(lat,lng);



});


function openYT(url) {
  alert(url);
  var YT = window.open(url);
}

$.extend($.expr[":"], { "containsIN": function (elem, i, match, array) { return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0; } });




$(document).ready(function () {
  $("#keyword").keyup(function () {
    var k = $(this).val();
    //$("#user-table > tbody > tr").hide();
    $('.panel_list').hide();
    if (k == "") {
      k = null;
    }
    //var temp = $("#user-table > tbody > tr > td:nth-child(5n+2):contains('" + k + "')");
    var temp = $("p:containsIN('" + k + "')");
    //$(temp).css("display","block");
    $(temp).parent().show();
  })
});




/*
        $(window).resize(function() { 
          if($(window).width() >768 && $(window).width() < 1128) {
             $('.panel_list').show();

             } 
             }); */


$(document).ready(function () {
  $('#transitSelector').draggable();


  $('#train').click(function () {
    $(this).toggleClass("clicked");
    $('#map').find("img[src*='train']").toggleClass("none");
    if ($('#train').hasClass("clicked")) {
      rendererList.forEach(function (i) {
        i.setMap(null);
      });
    }
    else {
      rendererList.forEach(function (i) {
        i.setMap(map);
      });
    }
    // const directionsRenderer = new google.maps.DirectionsRenderer();
    // directionsRenderer.setMap(null);
    map.setZoom(map.getZoom());
  });
  $('#youtube').click(function () {
    $(this).toggleClass("clicked");
    $('#map').find("img[src*='youtube']").toggleClass("none");
    map.setZoom(map.getZoom());

  });
  $('#twitch').click(function () {
    $(this).toggleClass("clicked");
    $('#map').find("img[src*='twitch']").toggleClass("none");
    map.setZoom(map.getZoom());

  });


  $(document).ready(function () {
  
    if($(window).width() > 1128) {
  
      $('#add').click(function () {
        $(this).css("display", "none");
        $('#minus').css("display", "block");
        $('#animal').css("display", "block");
        $('#beach').css("display", "block");
        $('#port').css("display", "block");
        $('#airplane').css("display", "block");
        $('#bridge').css("display", "block");
        $('#walking').css("display", "block");
        map.setZoom(map.getZoom());
    
      });
      $('#minus').click(function () {
        $(this).css("display", "none");
        $('#add').css("display", "block");
        $('#animal').css("display", "none");
        $('#beach').css("display", "none");
        $('#port').css("display", "none");
        $('#airplane').css("display", "none");
        $('#bridge').css("display", "none");
        $('#walking').css("display", "none");
        map.setZoom(map.getZoom());
    
      });

    }
  });





  $(window).resize(function() { if($(window).width() >1128) { /* do something */ 

    $('#twitch').css("display", "block");
    $('#youtube').css("display", "block");
    $('#track').css("display", "block");
    $('#train').css("display", "block");


  $('#add').click(function () {
    $(this).css("display", "none");
    $('#minus').css("display", "block");
    $('#animal').css("display", "block");
    $('#beach').css("display", "block");
    $('#port').css("display", "block");
    $('#airplane').css("display", "block");
    $('#bridge').css("display", "block");
    $('#walking').css("display", "block");
    map.setZoom(map.getZoom());

  });
  $('#minus').click(function () {
    $(this).css("display", "none");
    $('#add').css("display", "block");
    $('#animal').css("display", "none");
    $('#beach').css("display", "none");
    $('#port').css("display", "none");
    $('#airplane').css("display", "none");
    $('#bridge').css("display", "none");
    $('#walking').css("display", "none");
    map.setZoom(map.getZoom());

  });

} });
$(document).ready(function () {
  
  if($(window).width() <= 1128) {

    $('#twitch').css("display", "none");
    $('#youtube').css("display", "none");
    $('#track').css("display", "none");
    $('#train').css("display", "none");

    $('#add').click(function () {
      $(this).css("display", "none");
      $('#minus').css("display", "block");
      $('#youtube').css("display", "block");
      $('#track').css("display", "block");
      $('#train').css("display", "block");
      $('#animal').css("display", "block");
      $('#beach').css("display", "block");
      $('#port').css("display", "block");
      $('#airplane').css("display", "block");
      $('#bridge').css("display", "block");
      $('#walking').css("display", "block");
      map.setZoom(map.getZoom());
  
    });
    $('#minus').click(function () {
      $(this).css("display", "none");
      $('#add').css("display", "block");
      $('#twitch').css("display", "none");
      $('#youtube').css("display", "none");
      $('#track').css("display", "none");
      $('#train').css("display", "none");
      $('#animal').css("display", "none");
      $('#beach').css("display", "none");
      $('#port').css("display", "none");
      $('#airplane').css("display", "none");
      $('#bridge').css("display", "none");
      $('#walking').css("display", "none");
      map.setZoom(map.getZoom());
    });


  }
});

$(window).resize(function() { if($(window).width() <= 1128) { /* do something */ 

  $('#add').click(function () {
    $(this).css("display", "none");
    $('#minus').css("display", "block");
    $('#youtube').css("display", "block");
    $('#track').css("display", "block");
    $('#train').css("display", "block");
    $('#animal').css("display", "block");
    $('#beach').css("display", "block");
    $('#port').css("display", "block");
    $('#airplane').css("display", "block");
    $('#bridge').css("display", "block");
    $('#walking').css("display", "block");
    map.setZoom(map.getZoom());

  });
  $('#minus').click(function () {
    $(this).css("display", "none");
    $('#add').css("display", "block");
    $('#twitch').css("display", "none");
    $('#youtube').css("display", "none");
    $('#track').css("display", "none");
    $('#train').css("display", "none");
    $('#animal').css("display", "none");
    $('#beach').css("display", "none");
    $('#port').css("display", "none");
    $('#airplane').css("display", "none");
    $('#bridge').css("display", "none");
    $('#walking').css("display", "none");
    map.setZoom(map.getZoom());

  });



} });




  $('#beach').click(function () {
    $(this).toggleClass("clicked");
    $('#map').find("img[src*='beach']").toggleClass("none");
    map.setZoom(map.getZoom());

  });
  $('#animal').click(function () {
    $(this).toggleClass("clicked");
    $('#map').find("img[src*='animal']").toggleClass("none");
    map.setZoom(map.getZoom());

  });
  $('#port').click(function () {
    $(this).toggleClass("clicked");
    $('#map').find("img[src*='port']").toggleClass("none");
    map.setZoom(map.getZoom());

  });
  $('#airplane').click(function () {
    $(this).toggleClass("clicked");
    $('#map').find("img[src*='airplane']").toggleClass("none");
    map.setZoom(map.getZoom());

  });
  $('#bridge').click(function () {
    $(this).toggleClass("clicked");
    $('#map').find("img[src*='bridge']").toggleClass("none");
    map.setZoom(map.getZoom());

  });

  $('#walking').click(function () {
    $(this).toggleClass("clicked");
    $('#map').find("img[src*='walking']").toggleClass("none");
    map.setZoom(map.getZoom());

  });

  $('#track').click(function () {
    $(this).toggleClass("clicked");
    $('#map').find("img[src*='track']").toggleClass("none");
    map.setZoom(map.getZoom());

  });
});

