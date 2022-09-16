function Convert_3_FromCSJ() {
  console.log("function Convert_3_FromCSJ");
  async function updateEcho() {
      var csj = $.trim(document.getElementById("csj").value);
      document.getElementById("show_csj").innerHTML = csj;
      var mpm = $.trim(document.getElementById("mpm").value);
      document.getElementById("show_mpm").innerHTML = mpm;

      var gridpath = "https://grid-sys.us-e1.cloudhub.io/api/"
      var grid_elrs3 = gridpath + "elrs3?ControlSectionNumber=" + csj + "&MilePointMeasure=" + mpm
  }

    async function getELRS3() {
        var csj = $.trim(document.getElementById("csj").value);
        var mpm = $.trim(document.getElementById("mpm").value);
        var gridpath = "https://grid-sys.us-e1.cloudhub.io/api/"
        var grid_elrs3 = gridpath + "elrs3?ControlSectionNumber=" + csj + "&MilePointMeasure=" + mpm

        try {
            const response = await fetch(grid_elrs3, {method: 'GET'});
            if (!response.ok) {
                  throw new Error(`Error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log(result);
                document.getElementById("elrs3_url").innerHTML=grid_elrs3;
                console.log("updating URL");
                document.getElementById("elrs3_url").href=grid_elrs3;
                console.log("updating URL");
                document.getElementById("elrs_frame").src=grid_elrs3;
                console.log("updating iframe");
                return result;
              } catch (err) {
                console.log(err);
              }
        }

    async function renderELRS3() {
        //const response = await getELRS3();
        const result = await getELRS3();
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

    getELRS3();
    renderELRS3();
  }
