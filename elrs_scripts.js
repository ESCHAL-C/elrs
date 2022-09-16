
function Convert_1_FromLatLon() {
  console.log("function Convert_1_FromLatLon");
  async function updateEcho() {
      var lat = $.trim(document.getElementById("lat").value);
      document.getElementById("show_lat").innerHTML = lat;
      var lon = $.trim(document.getElementById("lon").value);
      document.getElementById("show_lon").innerHTML = lon;

      var gridpath = "https://grid-sys.us-e1.cloudhub.io/api/"
      var grid_elrs1 = gridpath + "elrs1?Lat=" + lat + "&Lon=" + lon

      document.getElementById("elrs1_url").innerHTML=grid_elrs1;
      console.log("updating URL");
      document.getElementById("elrs1_url").href=grid_elrs1;
      console.log("updating URL");

  }

    async function getELRS1() {
        var lat = $.trim(document.getElementById("lat").value);
        var lon = $.trim(document.getElementById("lon").value);
        var gridpath = "https://grid-sys.us-e1.cloudhub.io/api/"
        var grid_elrs1 = gridpath + "elrs1?Lat=" + lat + "&Lon=" + lon

        try {
            const response = await fetch(grid_elrs1, {method: 'GET'});
            if (!response.ok) {
                  throw new Error(`Error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log(result);
                document.getElementById("elrs_frame").src=grid_elrs1;
                console.log("updating iframe");
                return result;
              } catch (err) {
                console.log(err);
              }
        }


    async function renderELRS1() {
        //const response = await getELRS1();
        const result = await getELRS1();
        //console.log(results);
        result.forEach(rte_coord => {
            let routeid_Segment = rte_coord.ROUTEID;
            console.log(rte_coord.ROUTEID);
            document.getElementById("p_returned_ROUTEID").innerHTML = routeid_Segment;
          })
    }

    getELRS1();
    renderELRS1();

  }





function myFunction1() {
    var lat = $.trim(document.getElementById("lat").value);
    document.getElementById("show_lat").innerHTML = lat;
    var lon = $.trim(document.getElementById("lon").value);
    document.getElementById("show_lon").innerHTML = lon;

    var basepath = "https://grid-sys.us-e1.cloudhub.io/api/"
    var elrs1 = basepath + "elrs1?Lat=" + lat + "&Lon=" + lon

    document.getElementById("elrs1_url").innerHTML=elrs1;
    document.getElementById("elrs1_url").href=elrs1;
    document.getElementById("elrs_frame").src=elrs1;
}

function myFunction2() {
    var routeid = $.trim(document.getElementById("routeid").value);
    document.getElementById("show_routeid").innerHTML = routeid;
    var refmarker = $.trim(document.getElementById("refmarker").value);
    document.getElementById("show_refmarker").innerHTML = refmarker;
    var displacement = $.trim(document.getElementById("displacement").value);
    document.getElementById("show_displacement").innerHTML = displacement;
    var dfo = $.trim(document.getElementById("dfo").value);
    document.getElementById("show_dfo").innerHTML = dfo;

    var basepath = "https://grid-sys.us-e1.cloudhub.io/api/"
    var elrs2 = basepath + "elrs2?RouteID=" + routeid + "&ReferenceMarker=" + refmarker + "&Displacement=" + displacement
    var elrs4 = basepath + "elrs4?RouteID=" + routeid + "&DistanceFromOrigin=" + dfo

    document.getElementById("elrs2_url").innerHTML=elrs2;
    document.getElementById("elrs2_url").href=elrs2;
    document.getElementById("elrs_frame").src=elrs2;
}

function myFunction3() {
    var csj = $.trim(document.getElementById("csj").value);
    document.getElementById("show_csj").innerHTML = csj;
    var mpm = $.trim(document.getElementById("mpm").value);
    document.getElementById("show_mpm").innerHTML = mpm;

    var basepath = "https://grid-sys.us-e1.cloudhub.io/api/"
    var elrs3 = basepath + "elrs3?ControlSectionNumber=" + csj + "&MilePointMeasure=" + mpm

    document.getElementById("elrs3_url").innerHTML=elrs3;
    document.getElementById("elrs3_url").href=elrs3;
    document.getElementById("elrs_frame").src=elrs3;
}















//https://stackoverflow.com/questions/4728520/get-innerhtml-from-external-page-with-javascript
