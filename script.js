/* Get current location */
var current = document.getElementById("current");
function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        current.innerHTML = "Geolocation is not supported by this browser.";
      }
}

function showPosition(position) {
    console.log(position);
    curlt = Number(position.coords.latitude).toFixed(6);
    curln = Number(position.coords.longitude).toFixed(6);
    document.getElementById("curlat").value=curlt;
    document.getElementById("curlon").value=curln;
    //current.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}
/* end get current location */






var mymap = L.map('latlongmap');
var mmr = L.marker([0,0]);
mmr.bindPopup('0,0');
mmr.addTo(mymap);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: 'fb@Mr.Safwan.Nj'}, {foo: 'bar'}).addTo(mymap);
sm(47.809490, 13.055010,8);
mymap.on('click', onMapClick);

function isll(num) {
var val = parseFloat(num);
if (!isNaN(val) && val <= 90 && val >= -90)
    return true;
else
    return false;
}

function onMapClick(e) {
mmr.setLatLng(e.latlng);
setui(e.latlng.lat,e.latlng.lng,mymap.getZoom());
}

function dec2dms(e,t) {
document.getElementById("dms-lat").innerHTML = getdms(e, !0), document.getElementById("dms-lng").innerHTML = getdms(t, !1)
}
function getdms(e, t) {
var n = 0, m = 0, l = 0, a = "X";
return a = t && 0 > e ? "S" : !t && 0 > e ? "W" : t ? "N" : "E", d = Math.abs(e), n = Math.floor(d), l = 3600 * (d - n), m = Math.floor(l / 60), l = Math.round(1e4 * (l - 60 * m)) / 1e4, n + "&deg; " + m + "' " + l + "'' " + a
}

function sm(lt,ln,zm) {
    setui(lt,ln,zm);
    mmr.setLatLng(L.latLng(lt,ln));
    mymap.setView([lt,ln], zm);
}

function setui(lt,ln,zm) {
    lt = Number(lt).toFixed(6);
    ln = Number(ln).toFixed(6);
mmr.setPopupContent(lt + ',' + ln).openPopup();
document.getElementById("lat").value=lt;
document.getElementById("lng").value=ln;
document.getElementById("latlngspan").innerHTML ="[" + ln + ", " + lt + "]"; 
dec2dms(lt,ln);
}