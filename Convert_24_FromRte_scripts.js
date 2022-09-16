function Convert_24_FromRte() {
  console.log("function Convert_24_FromRte");
  async function updateEcho() {
      console.log("validating inputs");
      var routeid = $.trim(document.getElementById("routeid").value);
      document.getElementById("show_routeid").innerHTML = routeid;
      var refmarker = $.trim(document.getElementById("refmarker").value);
      document.getElementById("show_refmarker").innerHTML = refmarker;
      var displacement = $.trim(document.getElementById("displacement").value);
      document.getElementById("show_displacement").innerHTML = displacement;
      var dfo = $.trim(document.getElementById("dfo").value);
      document.getElementById("show_dfo").innerHTML = dfo;
  }

    async function getELRS24() {
        var routeid = $.trim(document.getElementById("routeid").value);
        var refmarker = $.trim(document.getElementById("refmarker").value);
        var displacement = $.trim(document.getElementById("displacement").value);
        var dfo = $.trim(document.getElementById("dfo").value);
        var gridpath = "https://grid-sys.us-e1.cloudhub.io/api/"
        var grid_elrs2 = gridpath + "elrs2?RouteID=" + routeid + "&ReferenceMarker=" + refmarker + "&Displacement=" + displacement
        var grid_elrs4 = gridpath + "elrs4?RouteID=" + routeid + "&DistanceFromOrigin=" + dfo

        if (routeid && refmarker && displacement) {
          var grid_elrs24 = grid_elrs2;
        } else if (routeid && dfo) {
          var grid_elrs24 = grid_elrs4;
        } else {
          console.log("no URL");
        }

        try {
            const response = await fetch(grid_elrs24, {method: 'GET'});
            if (!response.ok) {
                  throw new Error(`Error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log(result);
                document.getElementById("elrs2_url").innerHTML=grid_elrs24;
                console.log("updating URL");
                document.getElementById("elrs2_url").href=grid_elrs24;
                console.log("updating URL");
                document.getElementById("elrs_frame").src=grid_elrs24;
                console.log("updating iframe");
                return result;
              } catch (err) {
                console.log(err);
              }
        }

    async function renderELRS24() {
        //const response = await getELRS2();
        const result = await getELRS24();
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
    getELRS24();
    renderELRS24();
  }
