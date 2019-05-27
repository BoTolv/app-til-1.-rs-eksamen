function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("ESP8266").innerHTML =
      xhttp.responseText;
    }
  };
  xhttp.open("GET", "http://api.thingspeak.com/channels/786918/fields/field1/last?key=CSU7B02VN40FJK8G", true);
  xhttp.send();
}