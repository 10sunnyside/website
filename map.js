
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
var ytCount =0;



      document.cookie = 'same-site-cookie=foo; SameSite=Lax';
document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';

var markerData = [
        {
            lat: 45.434038,
            lng: 12.346914,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/eE6VVJ3hvv8",
            title: "Tribute to Music Venice",
            nation:"Italy"
        },
        {
            lat: 45.430309,
            lng: 12.329755,
            icon: "http://labs.google.com/ridefinder/images/mm_20_blue.png",
            url: "https://www.youtube.com/embed/JqUREqYduHw",
            title: "Hotel American Dinesen",
            nation:"Italy"
        },
        {
            lat: 45.203078,
            lng: 12.299722,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/1pf1qjYpHlY",
            title: "Hotel Park Chioggia",
            nation:"Italy"
        },        
        {
            lat: 45.4440906,
            lng: 12.3251189,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/HpZAez2oYsA",
            title: "Live View of Ponte delle Guglie Venice - View from Hotel Filù Venezia",
            nation:"Italy"
        },
        {
            lat: 45.440705,
            lng: 12.332468,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/cjCmsRjxVL0",
            title: "Hotel San Cassiano",
            nation:"Italy"
        },        {
            lat: 45.437783,
            lng: 12.340628,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/WjOGhNDX51M",
            title: "Ruzzini Palace Hotel",
            nation:"Italy"
        },        {
            lat: 45.437039,
            lng: 12.335081,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/BPXtn15_9qo",
            title: "Rialto Bridge",
            nation:"Italy"
        }, {
            lat: 42.792238,
            lng: 13.092661,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/C78daVqDpB8",
            title: "Piazza S. Benedetto",
            nation:"Italy"
        }, {
            lat: 67.289901,
            lng: 14.398237,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/5BHJBR3_dv8",
            title: "Bodo harbor KF",
            nation:"Norway"
        }, {
            lat: 67.289901,
            lng: 14.398237,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/yMSc-qqW3To",
            title: "Geirangerfjord cruise port, Geiranger",
            nation:"Norway"
        }, {
            lat: 46.521178,
            lng: 6.636441,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/TyElel0QjCI",
            title: "Lausanne, pont Bessières",
            nation:"Swiss"
        }, {
            lat: 43.479394,
            lng: -110.762717,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/1EiC9bvVGnk",
            title: "Jackson Hole Wyoming USA Town Square",
            nation:"USA"
        },        
        {
            lat: 37.551279,
            lng: 126.988227,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/am2Ivi346tQ",
            title: "N Seoul Tower",
            nation:"Korea"
        },
        {
            lat: 35.147920,
            lng: 129.130059,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/_YDqoaTAtww",
            title: "Gwangan Bridge",
            nation:"Korea"
        },
        {
            lat: 37.563188,
            lng: 126.987358,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/qFSdE5RTb_g",
            title: "Myeongdong Catholic Cathedral",
            nation:"Korea"
        },
        {
            lat: 35.168334,
            lng: 129.057178,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/Zlxa4-BTPAQ",
            title: "Busan Citizen Park",
            nation:"Korea"
        },
        {
            lat: 35.658182,
            lng: 139.758729,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/3mfWO1CwxpI",
            title: "Tokyo Shiodome Railway",
            nation:"Japan"
        },
        {
            lat: 35.071355,
            lng: 139.541443,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/CWNjN2bYzsA",
            title: "Mt. Hiroshige of Mt. Fuji",
            nation:"Japan"
        },
        {
            lat: 32.796601,
            lng: 130.703701,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/1_40EYOldbY",
            title: "Kumamoto City Shirakawa, RKK rooftop, Shirakawa-Changrokyo Bridge",
            nation:"Japan"
        },
        {
            lat: 35.503667,
            lng: 138.776795,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/yOKn755TA3U",
            title: "Mt.Fuji Panoramic Ropeway",
            nation:"Japan"
        },
        {
            lat: 34.733428,
            lng: 135.500188,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/DYk9RVhr9sc",
            title: "Shin-Osaka Station",
            nation:"Japan"
        },
        {
            lat: 36.139893,
            lng: 137.258576,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/PG8kZQ2EkSQ",
            title: "Takayama Jinya",
            nation:"Japan"
        },
        {
            lat: 34.245220,
            lng: 134.883358,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/ZOn7EVp9248",
            title: "Awaji Island Monkey Center",
            nation:"Japan"
        },
        {
            lat: 34.680655,
            lng: 135.202896,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/TsumMLWIsmM",
            title: "Kobe Port Terminal",
            nation:"Japan"
        },
        {
            lat: 33.852062,
            lng: 132.786447,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/cqjaUAloHzQ",
            title: "Dogo Onsen Main Building",
            nation:"Japan"
        },
        {
            lat: 33.852062,
            lng: 132.786447,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/vM7_-e0gdsc",
            title: "Dogo Onsen Main Building front camera",
            nation:"Japan"
        },
        {
            lat: 32.214401,
            lng: 130.762849,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/dXZ3ns5v-e8",
            title: "Hitoyoshi City",
            nation:"Japan"
        },
        {
            lat: 35.141350,
            lng: 138.692828,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/jnuacQgCEEA",
            title: "Tagunoura Port",
            nation:"Japan"
        },
        {
            lat: 36.566461,
            lng: 136.659937,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/TjyrhHdTJVY",
            title: "Kanazawa Castle Park",
            nation:"Japan"
        },
        {
            lat: 26.686426,
            lng: 127.876092,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/ZrJyATrrKVs",
            title: "Marine Expo Park Tropical Dream Center",
            nation:"Japan"
        },
        {
            lat: 37.049406,
            lng: 140.040905,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/M7htV04x6Z8",
            title: "HOTEL MORI NO KAZE NASU",
            nation:"Japan"
        },
        {
            lat: 37.754832,
            lng: 140.465908,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/iJgNyAuIdos",
            title: "Gurutto Fukushima",
            nation:"Japan"
        },
        {
            lat: 32.745784,
            lng: 129.868686,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/7rATmPOOXSo",
            title: "Nagasaki Port",
            nation:"Japan"
        },
        {
            lat: 36.348395,
            lng: 138.597026,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/Pm_RPOVlbGQ",
            title: "Japan Nagano Prefecture Karuizawa Town",
            nation:"Japan"
        },
        {
            lat: 35.689683,
            lng: 139.700748,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/BQYKarjjWi0",
            title: "Tokyo Shinjuku JR",
            nation:"Japan"
        },
        {
            lat: 40.7589626,
            lng: -73.9893574,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/mRe-514tGMg",
            title: "Time Square 4K",
            nation:"USA"
        },
        {
            lat: 36.1020854,
            lng: -115.1778926,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/1ZNCtDLUKHw",
            title: "Las Vegas: AE View Live",
            nation:"USA"
        },
        {
            lat: 40.7590077,
            lng: -73.9872109,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/VYsHV7WPyFw",
            title: "Times Square: Duffy Square 4K View Live",
            nation:"USA"
        },        
        {
            lat: 52.3729239,
            lng: 4.8910058,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/KGEekP1102g",
            title: "Amsterdam Dam.",
            nation:"Netherlands"
        },    
        {
            lat: 43.3881971,
            lng: 5.9603455,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/1z2coTLH6rQ",
            title: "Nice South of France Côte d'Azur Nature Beach in 4k",
            nation:"France"
        },
        {
            lat: 35.7015318,
            lng: 139.6916908,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/RQA5RcIZlAM",
            title: "Tokyo Shinjuku Live Cam",
            nation:"Japan"
        },
        {
            lat: 35.6668733,
            lng: 139.6750912,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/OF0iDephya8",
            title: "Tokyo Shibuya Rainy Walks Before the storm 4K Binaural ASMR",
            nation:"Japan"
        },
        {
            lat: 35.7015318,
            lng: 139.6916908,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/vHr4qSQ-5XU",
            title: "【4K】Night walk in Shinjuku, Tokyo",
            nation:"Japan"
        },
        {
            lat: 35.669626,
            lng: 139.7611617,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/laPpth6x3P8",
            title: "【4K】Ginza Yukata festival",
            nation:"Japan"
        },
        {
            lat: 42.462847,
            lng: -76.4520337,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/laPpth6x3P8",
            title: "Live Birds In 4K! Cornell Lab FeederWatch Cam at Sapsucker Woods",
            nation:"USA"
        },
        {
            lat: 24.8851886,
            lng: 121.2853226,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/z_mlibCfgFI",
            title: "Daxi Old Street Live Cam ",
            nation:"Taiwan"
        },
        {
            lat: 37.6186966,
            lng: -122.4946038,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/8gkxC22E-sY",
            title: "Mori Point Pacifica, CA Live 4K Multi-camera",
            nation:"USA"
        },
        {
            lat: 33.5900848,
            lng: 130.4421086,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/AcBvgPTL9cg",
            title: "[LIVE] Airport live camera View of Fukuoka Airport",
            nation:"Japan"
        },
        {
            lat: 33.5897319,
            lng: 130.4185387,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/-l6-oIeoo1k",
            title: "【LIVE】 Railway live camera shinkansen",
            nation:"Japan"
        },
        {
            lat: 33.4580552,
            lng: 126.9337452,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/tllxxgL_hVc",
            title: "Jeju Seongsan Ilchulbong Live Cam",
            nation:"Korea"
        },
        {
            lat: 33.5451792,
            lng: 126.8259107,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/5I8z7ljAO98",
            title: "Jeju Incafe on the beach",
            nation:"Korea"
        },      
        {
            lat: 37.575996,
            lng: 126.976820,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/AQBNcwAK93I",
            title: "Gwanghwamun, Seoul Here & Now 24h Live Cam",
            nation:"Korea"
        },
        ////////////////////twitch area/////////////////////////
        {
            lat: 37.473106,
            lng: 127.100274,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://player.twitch.tv/?channel=minjuni2848&parent=sunnyfive.net&muted=true",
            title: "Asea ICT Center, SunnyFive",
            nation:"Korea"
        },
        {
            lat: 22.283,
            lng: 114.126,
            lat2: 22.279,
            lng2: 114.225,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/qO-q5yICB98",
            title: "HONG KONG DOUBLE DECKER LIVE TRAM 24/7",
            nation:"Hongkong",
            type:"TRANSIT"
        },
        {
            lat: 63.436,
            lng: 10.398,
            lat2: 67.286,
            lng2: 14.391,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "https://www.youtube.com/embed/ccbVvCcvPuw",
            title: "Nordland Line from Trondheim to Bodø",
            nation:"Norway",
            type:"TRANSIT"
        },


     ];
    var checkNation;
var nationList = [];

$(document).ready(function() {
createList(markerData); 
});

function onYouTubeIframeAPIReady() {
  console.log("api is ready");
  //$(document).ready(function() {
    $(document).ready(function() {
  insertYoutube(markerData);
});
  console.log("api is ready2");

  //google.maps.event.trigger(map, 'resize');

//});
}






var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
        var panel = $(this).nextUntil('button')
      //var panel = this.nextElementSibling;
      for(Pid in panel){
        if(Pid=="length"){
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




function moveToLocation(lat, lng){

var center = new google.maps.LatLng(lat, lng);
map.panTo(center);

//map.animateCamera(CameraUpdateFactory.newLatLngZoom(latLng, ZOOM_FACTOR));
}

var clickStar = function(){
  if($(this).hasClass("checked")){
    $(this).removeClass("checked");
  }
  else {
    $(this).addClass("checked");
  }
}

var clickPopup = function(event,data){
   
   var starCheck = $(event.target).attr('class')
   //즐겨찾기 클릭시 사이트 이동 방지
if($(event.target).hasClass('fa')){ }
else{
   window.open(data.url + "?autoplay=1",data.title,"width=640,height=480");
}
}


var map;
var newNorthEast;
var newSouthWest;
var tester;
var popup2;
var popupData;
var panelCount;
var bestWatching = new Array(0,0,0);
var bestWatching_title = new Array("o","o","o");

function initMap() {

  // The location of Uluru

  var NStower = {lat: 37.522658, lng: 126.984316};
  var Amsterdam = {lat: 52.3729239, lng: 4.8910058};
  // The map, centered at Uluru

 map = new google.maps.Map(

      document.getElementById('map'), {zoom: 4, center: Amsterdam,gestureHandling: "greedy"});

  // The marker, positioned at Uluru

  class Popup2 extends google.maps.OverlayView {
    constructor(data) {
      super();
      var myLatLng = new google.maps.LatLng(data.lat, data.lng);
      var data2=data;
      if(data.url.indexOf("youtube")!=-1){
    var split_url = data.url.split("embed/")
    var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/mqdefault.jpg"
    var localimg = "./img/youtube.png"
      }
      else{
        var split_url = data.url.split("=");
        split_url = split_url[1].split("&");
    var imgsrc = "https://static-cdn.jtvnw.net/previews-ttv/live_user_"+ split_url[0]+ "-480x272.jpg"
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
      popupWrapper.appendChild(popupViewers);


      // This zero-height div is positioned at the bottom of the bubble.
      const bubbleAnchor = document.createElement("div");
      bubbleAnchor.classList.add("popup2-bubble-anchor");
      bubbleAnchor.appendChild(imgs);
      bubbleAnchor.appendChild(popupContent);
      bubbleAnchor.appendChild(popupStarBg);
      bubbleAnchor.appendChild(popupStar);
      bubbleAnchor.appendChild(popupWrapper);
      bubbleAnchor.addEventListener('click', function(){clickPopup(event,data)});
      //function 없이 바로 함수를 넣으면 리스너 등록 과정에서 한번 불리게 됨
      // This zero-height div is positioned at the bottom of the tip.
      this.containerDiv = document.createElement("div");
      this.containerDiv.classList.add("popup-container");
      this.containerDiv.appendChild(bubbleAnchor);
      this.containerDiv.id=popupCount;
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

      if(data.type=='TRANSIT'){
        var ori = new google.maps.LatLng(data.lat,data.lng);
        var des = new google.maps.LatLng(data.lat2,data.lng2);
        
        data.lat
        route3(map, ori, des);
      }
      var myLatLng = new google.maps.LatLng(data.lat, data.lng);
      if(data.url.indexOf("youtube")!=-1){
    var split_url = data.url.split("embed/")
    var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/default.jpg"
    var localimg = "./img/youtube48.png"
      }
      else{
        var localimg = "./img/twitch5.png"
      }
      if(data.type=='TRANSIT'){
        var localimg = "./img/train2.png"
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
      this.containerDiv.id=popupCount;
      // Optionally stop clicks, etc., from bubbling up to the map.
      Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
      popupData=data;
      popup2 = new Popup2(data);
      popupList.push(popup2);
      
    }
    /** Called when the popup is added to the map. */
    onAdd() {
      this.getPanes().floatPane.appendChild(this.containerDiv);

  // set this as locally scoped var so event does not get confused
  var me = this;
  tester = this;
  

  // Add a listener - we'll accept clicks anywhere on this div, but you may want
  // to validate the click i.e. verify it occurred in some portion of your overlay.
  google.maps.event.addDomListener(this.containerDiv, 'click', function() {
    
    if (activePopup) { activePopup.setMap(null);}
                    //$('#keyword').val(data.title)
                    popupList[this.id].setMap(map);
                    activePopup = popupList[this.id]
    
    
    


   // google.maps.event.trigger(me, 'click');
  });

  google.maps.event.addDomListener(this.containerDiv, 'mouseenter', function() {
    
    $(this).find('img').css('max-height','38px')


   // google.maps.event.trigger(me, 'click');
  });

  google.maps.event.addDomListener(this.containerDiv, 'mouseleave', function() {
    
    $(this).find('img').css('max-height','32px')


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
        $(".panel_list").children('p').each( function() { //수정필요 그냥 none할거면 루프돌지말고 다 none하면 되지 않나
          if($(this).text()==markerData[markerId].title){
            $(this).parent().css( "display", "none" );
          }
        
        })
        markers[panelCount] = screen2(markerData[markerId]);
    }
    
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



    function screen2(data){
      $("#noList").css("display","none");
if(data.lat < newNorthEast.lat() ){
      if(data.lat > newSouthWest.lat() )
      {
        if(data.lng < newNorthEast.lng() ){
          if(data.lng > newSouthWest.lng() )
         {
        $(".panel_list").children('p').each( function() { 
          if($(this).text()==data.title){
              //같은놈을 찾은 상태이기 때문에 data를 검색해도 되고 this를 검색해도 됨
              if($("#train").hasClass('clicked')){
                  if(data.type=="TRANSIT"){
                    return false;
                  }
              }
              if($("#youtube").hasClass('clicked')){
                if(data.url.indexOf("youtube")!=-1){
                  return false;
                }
            }
            if($("#twitch").hasClass('clicked')){
                if(data.url.indexOf("twitch")!=-1){
                  return false;
                }
            }
            $(this).parent().css( "display", "block" );
            panelCount++;
            selectedPanelList.push($(this).parent());
            return false;
          }
    
        })
      }
      }
      }
   }
   if(panelCount==0){
     $("#noList").css("display","flex");
     //현재 지도에 보여줄 카메라가 없는 경우  
   }
   else{
    $("#noList").css("display","none");

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
function route2(map){
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
  directionsService.route(request, function(response, status) {
    if (status == 'OK') {
      directionsRenderer.setDirections(response);
    }
  });
}
//route2(map);

function route3(map, ori, des){
var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
  var haight = new google.maps.LatLng(37.7699298, -122.4469157);
  var oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205);

  directionsRenderer.setMap(map);

  var selectedMode = 'TRANSIT';
  var request = {
      origin: ori,
      destination: des,
      // Note that JavaScript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode[selectedMode],
      transitOptions: {modes:['RAIL']}
  };
  directionsService.route(request, function(response, status) {
    if (status == 'OK') {
      directionsRenderer.setDirections(response);
      marker = new google.maps.Marker({
    draggable: true,
    animation: google.maps.Animation.DROP,
    icon : "http://labs.google.com/ridefinder/images/mm_20_blue.png",
  });
      directionsRenderer.setOptions({markerOptions:marker, preserveViewport:true, suppressInfoWindows:true, hideRouteList:true});

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
}





 var markers = [];
 var selectedPanelList = new Array();
 var boxList =[];
 var url;
 var count=0;
 var activeInfoWindow;
 var activePopup;
 var popupCount = 0;
 var popupList=[];
 var markerList = [];
    // inside function createMap(...)
  


function createList(markerData){
  for(id in markerData){

for(Nid in nationList){
if(markerData[id].nation==nationList[Nid])
{
  checkNation=1;
  break;
}

}


var split_url = markerData[id].url.split("embed/")
var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/mqdefault.jpg"

var liveViewerNumbers;
var viewerNumbers;
var viewer = document.createElement("p");
var viewerTag;
var ddd=0;

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


if(checkNation==0){
  nationList.push(markerData[id].nation);
  
var bt = document.createElement("button");
bt.className="accordion";
bt.title = markerData[id].nation;
bt.id = markerData[id].nation;
bt.innerText=markerData[id].nation;
var p = document.createElement("p")
p.title = markerData[id].title;
p.innerText = markerData[id].title;
list.appendChild(bt);

if(markerData[id].url.indexOf("youtube")!=-1){


  var split_url = markerData[id].url.split("embed/")
    var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/mqdefault.jpg"
    var localimg = "./img/youtube.png"

    var src = '<div class="panel_list" ><img id = "img_panel" src =' + imgsrc + ' class = "thumbnail" /> <div id = "video_panel" style ="display:none"> <iframe id="yt_panel" width="100%" height="100%" src="'+markerData[id].url+'?enablejsapi=1&version=3" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div> <p title = "' + markerData[id].title + '">' +markerData[id].title + '</>'

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

    //패널에 live랑 train 이미지 넣기
    var imgDiv = document.createElement("div");
      var imgLive = document.createElement("img");
      imgLive.src="./img/live.png"

      imgDiv.appendChild(imgLive);
    if(markerData[id].type=='TRANSIT'){
      var imgTransit = document.createElement("img");
      imgTransit.src="./img/train2.png"
      imgDiv.appendChild(imgTransit);
    }



    var iframe = document.createElement( "div" ); //필요없나??
    iframe.setAttribute( "id", "yt_panel_" + split_url[1]);
    //  iframe.setAttribute( "frameborder", "0" );
   //   iframe.setAttribute( "allowfullscreen", "" );
    //    iframe.setAttribute("allow","autoplay");
   //   iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ split_url[1] +"?rel=0&showinfo=0&autoplay=1&enbalejsapi=1&version=3" );
      iframe.setAttribute("class", "yt_class");
      video_panel.appendChild(iframe);

    div.appendChild(video_panel);
    div.appendChild(imgDiv);
    div.appendChild(p);
    div.appendChild(viewer);
    $('#'+ markerData[id].nation).after([div]); 

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
      else{


    var div = document.createElement("div");
    div.className = "panel_list";
    var img = document.createElement("img");
        img.id = "img_panel";
        img.className = "thumbnail"
    var split_url = markerData[id].url.split("=");
        split_url = split_url[1].split("&");
    var imgsrc = "https://static-cdn.jtvnw.net/previews-ttv/live_user_"+ split_url[0]+ "-480x272.jpg"

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
    $('#'+ markerData[id].nation).after([div]); 

    var options = {
    width: "400",
    height: "272",
    channel: split_url[0],
    // only needed if your site is also embedded on embed.example.com and othersite.example.com
    parent: ["sunnyfive.net","localhost"]
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

else if(checkNation==1){
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

if(markerData[id].url.indexOf("youtube")!=-1){
    var split_url = markerData[id].url.split("embed/")
    var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/hqdefault.jpg"
    var localimg = "./img/youtube.png"
    var src = '<div class="panel_list" ><img id = "img_panel" src =' + imgsrc + ' class = "thumbnail" onerror="function(){$(this).parent().remove()}"/> <div id = "video_panel" style ="display:none"> <iframe id="yt_panel" width="100%" height="100%" src="'+markerData[id].url+'?enablejsapi=1&version=3" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div> <p title = "' + markerData[id].title + '">' +markerData[id].title + '</>'+'<div>'+viewerTag+'</div>'

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
      var imgLive = document.createElement("img");
      imgLive.src="./img/live.png"

      imgDiv.appendChild(imgLive);
    if(markerData[id].type=='TRANSIT'){
      var imgTransit = document.createElement("img");
      imgTransit.src="./img/train2.png"
      imgDiv.appendChild(imgTransit);



    }



    var iframe = document.createElement( "div" );
    iframe.setAttribute( "id", "yt_panel_" + split_url[1]);
     // iframe.setAttribute( "frameborder", "0" );
     // iframe.setAttribute( "allowfullscreen", "" );
     //   iframe.setAttribute("allow","autoplay");
    //  iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ split_url[1] +"?rel=0&showinfo=0&autoplay=1&enbalejsapi=1&version=3" );
      iframe.setAttribute("class", "yt_class");
      video_panel.appendChild(iframe);


    div.appendChild(video_panel);
    div.appendChild(imgDiv);
    div.appendChild(p);
    div.appendChild(viewer);
    $('#'+ markerData[id].nation).after([div]); 

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
      else{
        var div = document.createElement("div");
    div.className = "panel_list";
    var img = document.createElement("img");
        img.id = "img_panel";
        img.className = "thumbnail"
    var split_url = markerData[id].url.split("=");
        split_url = split_url[1].split("&");
    var imgsrc = "https://static-cdn.jtvnw.net/previews-ttv/live_user_"+ split_url[0]+ "-480x272.jpg"

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
    $('#'+ markerData[id].nation).after([div]); 

    var options = {
    width: 480,
    height: 270,
    channel: split_url[0],
    autoplay: false,
    // only needed if your site is also embedded on embed.example.com and othersite.example.com
    parent: ["sunnyfive.net","localhost"]
  };
  //var player = new Twitch.Player("twitch_panel_" + listCount, options);
    $(document).ready(function() {

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


checkNation=0;
}
listCount++;
}






function insertYoutube(markerData){
  for(id in markerData){



if(markerData[id].url.indexOf("youtube")!=-1){
    var split_url = markerData[id].url.split("embed/")
      

      var ytPlayer = new YT.Player("yt_panel_" + split_url[1], {
          height: '272',
          width: '480',
          videoId: split_url[1],
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });

       // console.log(ytPlayer);
      

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        //event.target.playVideo();
        console.log(event.target);
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
      else{

      }


}

}






function ImageExist(url) 
{
   var img = new Image();
   img.src = url;
   return img.height != 0;
}

function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}





function createMarker(data) {
    var myLatLng = new google.maps.LatLng(data.lat, data.lng);
    var split_url = data.url.split("embed/")
    var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/default.jpg"

    var marker = new google.maps.Marker({
        id : count,
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
           img.style.float="left";


            var boxText = document.createElement("div");
            var boxUrl = document.createElement("a");
            boxUrl.setAttribute('href',markerData[count].url);
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
          ,isHidden:false
          ,pixelOffset: new google.maps.Size(-10, -10)
          ,closeBoxURL: ""
          ,pane: "mapPane"
          ,enableEventPropagation: true
        });
        


        google.maps.event.addListener(marker, 'mouseover', function() {
    marker.setIcon();
});
google.maps.event.addListener(marker, 'mouseout', function() {
    marker.setIcon();
});


google.maps.event.addListener(marker, "click", (function(marker) {
      return function(evt) {
        url=data.url;
        /*var content = '<div id="infoWindow">'
                    +'<div id="bodyContent">'
                    +'<p>'
                   // + "This location is:<br>"
                    + marker.getTitle()
                    +'</p>'
                    +'</div>'
                    + '</div>';*/

        

        var content = boxList[this.id];
        if (activeInfoWindow) { activeInfoWindow.close();}
                    $('#keyword').val(data.title)
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                    activeInfoWindow = infowindow
                
      }
    })(marker));


    markerList[count]=marker;


    count++;
  }


  function createYtPlayer(id){
    
    var player;
    window.onYouTubeIframeAPIReady = function() {
      player = new YT.Player("yt_panel_" + id,  {
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
        eval("ytPlayer_" + id + "= player" );

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


  function screen(latlng){
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

  $(document).ready(function() {
  $('.panel_list').click(function(){
    var title =$(this).find("p")[0].title;
    var url;
    var lat;
    var lng;
    for(tt in markerData){
      if(markerData[tt].title==title){
        url=markerData[tt].url;
        lat=markerData[tt].lat;
        lng=markerData[tt].lng;
        break;
      }
    }
    //var split_url = markerData[id].url.split("embed/")
    var id=$(this).find("iframe[id*='yt_panel']").attr("id")
    //리스트 클릭시 상단 비디오에 클릭된 비디오 유투브를 띄운다.
    
    $(video).find("iframe")[0].src=url;
    $(video).css("display","block");
    
    
  	//$("iframe[id*='yt_panel']").each(function() { $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');} );
    $("div[id='video_panel']").hide();
    $("img[id='img_panel']").show();
    var playYt;
    $(ytPlayers).each(function (i) {
            //console.log(this);
            this.stopVideo();
           // if(id==this.getVideoData().video_id){
            if(id==this.getIframe().id){
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


$('.panel_list').mouseenter(function(){
    var title =$(this).find("p")[0].title;
    var url;
    var lat;
    var lng;
    for(tt in markerData){
      if(markerData[tt].title==title){
        url=markerData[tt].url;
        lat=markerData[tt].lat;
        lng=markerData[tt].lng;
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
    for(tt in markerList){
      if(markerList[tt].title==title){
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







  $('.panel_list').mouseleave(function(){
    var title =$(this).find("p")[0].title;
    var url;
    var lat;
    var lng;
    for(tt in markerData){
      if(markerData[tt].title==title){
        url=markerData[tt].url;
        lat=markerData[tt].lat;
        lng=markerData[tt].lng;
        break;
      }
    }
    var split_url = url.split("embed/")
    var imgsrc = "https://img.youtube.com/vi/" + split_url[1] + "/default.jpg"

    for(tt in markerList){
      if(markerList[tt].title==title){
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

  
  function openYT(url){
    alert(url);
    var YT = window.open(url);
  }
  
  $.extend($.expr[":"], { "containsIN": function(elem, i, match, array) { return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0; } });




  $(document).ready(function() {
            $("#keyword").keyup(function() {
                var k = $(this).val();
                //$("#user-table > tbody > tr").hide();
                $('.panel_list').hide();
                if (k==""){
                  k=null;
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


             $(document).ready(function() {
             $('#transitSelector').draggable();
             
             
             $('#train').click(function(){
                $(this).toggleClass("clicked");
                $('#map').find("img[src*='train']").toggleClass("none");
                map.setZoom(map.getZoom());
               });
            $('#youtube').click(function(){
                $(this).toggleClass("clicked");
                $('#map').find("img[src*='youtube']").toggleClass("none");
                map.setZoom(map.getZoom());

               });
           $('#twitch').click(function(){
                $(this).toggleClass("clicked");
                $('#map').find("img[src*='twitch']").toggleClass("none");
                map.setZoom(map.getZoom());

               });

             });
             
       