function Reset_InputForm() {
    //document.getElementById("calculator_form").reset();
    document.getElementById("calculator_form_latlon").reset();
    //document.getElementById("calculator_form_rte").reset();
    document.getElementById("calculator_form_refmrkr").reset();
    document.getElementById("calculator_form_dfo").reset();
    document.getElementById("calculator_form_csj").reset();

    document.getElementById("calculator_report").reset();

    document.getElementById("show_lat").innerHTML = '';
    document.getElementById("show_lon").innerHTML = '';
    document.getElementById("show_routeid_2").innerHTML = '';
    document.getElementById("show_routeid_4").innerHTML = '';
    document.getElementById("show_refmarker").innerHTML = '';
    document.getElementById("show_displacement").innerHTML = '';
    document.getElementById("show_dfo").innerHTML = '';
    document.getElementById("show_csj").innerHTML = '';
    document.getElementById("show_mpm").innerHTML = '';


    document.getElementById("elrs_url").innerHTML = '';
    document.getElementById("elrs_url").href = '';;
    document.getElementById("elrs_frame").src = '';

    document.getElementById("p_returned_RouteCount").innerHTML = '';
    document.getElementById("p_returned_LAT").innerHTML = '';
    document.getElementById("p_returned_LON").innerHTML = '';
    document.getElementById("p_returned_ROUTEID").innerHTML = '';
    document.getElementById("p_returned_ROUTENUMBER").innerHTML = '';
    document.getElementById("p_returned_RTE_DEFN_LN_NM").innerHTML = '';
    document.getElementById("p_returned_RTE_DFO").innerHTML = '';
    document.getElementById("p_returned_RTE_PRFX_TYPE_DSCR").innerHTML = '';
    document.getElementById("p_returned_RDBD_TYPE_DSCR").innerHTML = '';
    document.getElementById("p_returned_RMRKR_PNT_NBR").innerHTML = '';
    document.getElementById("p_returned_RMRKR_DISPLACEMENT").innerHTML = '';
    document.getElementById("p_returned_CTRL_SECT_LN_NBR").innerHTML = '';
    document.getElementById("p_returned_CTRL_SECT_MPT").innerHTML = '';

}
