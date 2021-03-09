$(document).ready(function(){
    console.log("Content loaded");

    // User interface logic
    $("button.outPatient").click(function(event){
        event.preventDefault();
        $("form#outpatientForm").slideToggle();
    });
    $("button.inPatient").click(function(event){
        event.preventDefault();
        $("form#inpatientForm").slideToggle();
    });
});