function Convert_1_FromLatLon() {
  console.log("function Convert_1_FromLatLon");
  async function updateEcho() {
      console.log("validating inputs");
      var lat = $.trim(document.getElementById("lat").value);
      document.getElementById("show_lat").innerHTML = lat;
      var lon = $.trim(document.getElementById("lon").value);
      document.getElementById("show_lon").innerHTML = lon;
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
                document.getElementById("elrs1_url").innerHTML=grid_elrs1;
                console.log("updating URL");
                document.getElementById("elrs1_url").href=grid_elrs1;
                console.log("updating URL");
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
        var route_count = Object.keys(result).length;
        document.getElementById("p_returned_RouteCount").innerHTML = route_count;
        //var route_count = result.length();
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

    updateEcho();
    getELRS1();
    renderELRS1();
  }
