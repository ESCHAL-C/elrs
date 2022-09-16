function Convert_2_FromRteRefMrkr() {
  console.log("function Convert_2_FromRteRefMrkr");
  async function updateEcho() {
      var routeid = $.trim(document.getElementById("routeid").value);
      document.getElementById("show_routeid").innerHTML = routeid;
      var refmarker = $.trim(document.getElementById("refmarker").value);
      document.getElementById("show_refmarker").innerHTML = refmarker;
      var displacement = $.trim(document.getElementById("displacement").value);
      document.getElementById("show_displacement").innerHTML = displacement;

      var gridpath = "https://grid-sys.us-e1.cloudhub.io/api/"
      var grid_elrs2 = gridpath + "elrs2?RouteID=" + routeid + "&ReferenceMarker=" + refmarker + "&Displacement=" + displacement
  }

    async function getELRS2() {
        var routeid = $.trim(document.getElementById("routeid").value);
        var refmarker = $.trim(document.getElementById("refmarker").value);
        var displacement = $.trim(document.getElementById("displacement").value);
        var gridpath = "https://grid-sys.us-e1.cloudhub.io/api/"
        var grid_elrs2 = gridpath + "elrs2?RouteID=" + routeid + "&ReferenceMarker=" + refmarker + "&Displacement=" + displacement

        try {
            const response = await fetch(grid_elrs2, {method: 'GET'});
            if (!response.ok) {
                  throw new Error(`Error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log(result);
                document.getElementById("elrs2_url").innerHTML=grid_elrs2;
                console.log("updating URL");
                document.getElementById("elrs2_url").href=grid_elrs2;
                console.log("updating URL");
                document.getElementById("elrs_frame").src=grid_elrs2;
                console.log("updating iframe");
                return result;
              } catch (err) {
                console.log(err);
              }
        }

    async function renderELRS2() {
        //const response = await getELRS2();
        const result = await getELRS2();
        //console.log(results);
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

    getELRS2();
    renderELRS2();
  }
