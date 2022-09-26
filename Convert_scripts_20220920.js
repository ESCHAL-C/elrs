function Convert_Coords(elrs_method) {
  console.log("Convert_Coords function");
  var elrs_method = elrs_method;

  function updateEcho(elrs_method) {
    console.log("update echo function");

    if (elrs_method == 1) {
      var lat = $.trim(document.getElementById("lat").value);
      document.getElementById("show_lat").innerHTML = lat;
      var lon = $.trim(document.getElementById("lon").value);
      document.getElementById("show_lon").innerHTML = lon;
    } else if (elrs_method == 2) {
      var routeid = $.trim(document.getElementById("routeid_2").value);
      document.getElementById("show_routeid_2").innerHTML = routeid;
      var refmarker = $.trim(document.getElementById("refmarker").value);
      document.getElementById("show_refmarker").innerHTML = refmarker;
      var displacement = $.trim(document.getElementById("displacement").value);
      document.getElementById("show_displacement").innerHTML = displacement;
    } else if (elrs_method == 3) {
      var csj = $.trim(document.getElementById("csj").value);
      document.getElementById("show_csj").innerHTML = csj;
      var mpm = $.trim(document.getElementById("mpm").value);
      document.getElementById("show_mpm").innerHTML = mpm;
    } else if (elrs_method == 4) {
      var routeid = $.trim(document.getElementById("routeid_4").value);
      document.getElementById("show_routeid_4").innerHTML = routeid;
      var dfo = $.trim(document.getElementById("dfo").value);
      document.getElementById("show_dfo").innerHTML = dfo;
    }
  }


  async function getELRS(elrs_method) {
    console.log("get elrs function");

    console.log("make url");
    var lat = $.trim(document.getElementById("lat").value);
    var lon = $.trim(document.getElementById("lon").value);
    var routeid_2 = $.trim(document.getElementById("routeid_2").value);
    var routeid_4 = $.trim(document.getElementById("routeid_4").value);
    var refmarker = $.trim(document.getElementById("refmarker").value);
    var displacement = $.trim(document.getElementById("displacement").value);
    var dfo = $.trim(document.getElementById("dfo").value);
    var csj = $.trim(document.getElementById("csj").value);
    var mpm = $.trim(document.getElementById("mpm").value);

    var gridpath = "https://grid-sys.us-e1.cloudhub.io/api/"
    var grid_elrs1 = gridpath + "elrs1?Lat=" + lat + "&Lon=" + lon;
    var grid_elrs2 = gridpath + "elrs2?RouteID=" + routeid_2 + "&ReferenceMarker=" + refmarker + "&Displacement=" + displacement
    var grid_elrs3 = gridpath + "elrs3?ControlSectionNumber=" + csj + "&MilePointMeasure=" + mpm;
    var grid_elrs4 = gridpath + "elrs4?RouteID=" + routeid_4 + "&DistanceFromOrigin=" + dfo

    if (lat && lon) {
      var url = grid_elrs1;
    } else if (routeid_2 && refmarker && displacement) {
      var url = grid_elrs2;
    } else if (csj && mpm) {
      var url = grid_elrs3;
    } else if (routeid_4 && dfo) {
      var url = grid_elrs4;
    } else {
      console.log("no URL");
    }

    document.getElementById("elrs_url").innerHTML=url;
    document.getElementById("elrs_url").href=url;
    document.getElementById("elrs_frame").src=url;
    console.log("updating URL & iframe");

    const response = await fetch(url, {method: 'GET'});
    if (!response.ok) {throw new Error(`Error! status: ${response.status}`);}
      const result = await response.json();
      return result;
  }


  async function renderELRS() {
    console.log("render elrs function");
    const result = await getELRS();
    var route_count = Object.keys(result).length;
    document.getElementById("p_returned_RouteCount").innerHTML = route_count;
    console.log(route_count);
    result.forEach(rte_coord => {
        console.log(rte_coord.ROUTEID);
        document.getElementById("p_returned_LAT").innerHTML = rte_coord.LAT;
        document.getElementById("p_returned_LON").innerHTML = rte_coord.LON;
        document.getElementById("p_returned_ROUTEID").innerHTML = rte_coord.ROUTEID;
        document.getElementById("p_returned_ROUTENUMBER").innerHTML = rte_coord.ROUTENUMBER;
        document.getElementById("p_returned_RTE_DEFN_LN_NM").innerHTML = rte_coord.RTE_DEFN_LN_NM;
        document.getElementById("p_returned_RTE_DFO").innerHTML = rte_coord.RTE_DFO;
        document.getElementById("p_returned_RTE_PRFX_TYPE_DSCR").innerHTML = rte_coord.RTE_PRFX_TYPE_DSCR;
        document.getElementById("p_returned_RDBD_TYPE_DSCR").innerHTML = rte_coord.RDBD_TYPE_DSCR;
        document.getElementById("p_returned_RMRKR_PNT_NBR").innerHTML = rte_coord.RMRKR_PNT_NBR;
        document.getElementById("p_returned_RMRKR_DISPLACEMENT").innerHTML = rte_coord.RMRKR_DISPLACEMENT;
        document.getElementById("p_returned_CTRL_SECT_LN_NBR").innerHTML = rte_coord.CTRL_SECT_LN_NBR;
        document.getElementById("p_returned_CTRL_SECT_MPT").innerHTML = rte_coord.CTRL_SECT_MPT;
      })
  }

  updateEcho(elrs_method);
  getELRS(elrs_method);
  renderELRS();
  }
