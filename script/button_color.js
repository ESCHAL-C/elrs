$( document ).ready(function() {
  $( "#resetFormView" ).click(function() {
    $( "#resetFormView" ).css('background-color', 'DimGrey');
    $( "#returnResultsLatLon" ).css('background-color', 'OrangeRed');
    $( "#returnResultsRefMrkr" ).css('background-color', 'OrangeRed');
    $( "#returnResultsDFO" ).css('background-color', 'OrangeRed');
    $( "#returnResultsCS" ).css('background-color', 'OrangeRed');
    $( "#addPointtoMiniMap_btn" ).css('background-color', 'PaleVioletRed');
  });
});

$( document ).ready(function() {
  $( "#returnResultsLatLon" ).click(function() {
    $( "#returnResultsLatLon" ).css('background-color', 'green');
    $( "#addPointtoMiniMap_btn" ).css('background-color', 'OrangeRed');
    $( "#resetFormView" ).css('background-color', 'PaleVioletRed');
  });
});



$( document ).ready(function() {
  $( "#returnResultsRefMrkr" ).click(function() {
    $( "#returnResultsRefMrkr" ).css('background-color', 'green');
    $( "#addPointtoMiniMap_btn" ).css('background-color', 'OrangeRed');
    $( "#resetFormView" ).css('background-color', 'PaleVioletRed');
  });
});

$( document ).ready(function() {
  $( "#returnResultsDFO" ).click(function() {
    $( "#returnResultsDFO" ).css('background-color', 'green');
    $( "#addPointtoMiniMap_btn" ).css('background-color', 'OrangeRed');
    $( "#resetFormView" ).css('background-color', 'PaleVioletRed');
  });
});

$( document ).ready(function() {
  $( "#returnResultsCS" ).click(function() {
    $( "#returnResultsCS" ).css('background-color', 'green');
    $( "#addPointtoMiniMap_btn" ).css('background-color', 'OrangeRed');
    $( "#resetFormView" ).css('background-color', 'PaleVioletRed');
  });
});

$( document ).ready(function() {
  $( "#addPointtoMiniMap_btn" ).click(function() {
    $( "#addPointtoMiniMap_btn" ).css('background-color', 'green');
    $( "#resetFormView" ).css('background-color', 'OrangeRed');
  });
});

// rte view

$( document ).ready(function() {
  $( "#returnBDFO" ).click(function() {
    $( "#returnBDFO" ).css('background-color', 'green');
    $( "#returnEDFO" ).css('background-color', 'OrangeRed');
  });
});

$( document ).ready(function() {
  $( "#returnEDFO" ).click(function() {
    $( "#returnEDFO" ).css('background-color', 'green');
    $( "#addOrAssembleQueryStr_btn" ).css('background-color', 'OrangeRed');
  });
});

$( document ).ready(function() {
  $( "#addOrAssembleQueryStr_btn" ).click(function() {
    $( "#addOrAssembleQueryStr_btn" ).css('background-color', 'green');
    $( "#mapProjects_btn" ).css('background-color', 'OrangeRed');
  });
});

$( document ).ready(function() {
  $( "#mapProjects_btn" ).click(function() {
    $( "#mapProjects_btn" ).css('background-color', 'green');
  });
});
