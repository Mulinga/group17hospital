$(document).ready(function(){
    console.log("Content loaded");

    // User interface logic
    $("button.outPatient").click(function(event){
        event.preventDefault();
        $("form#outpatientForm").slideToggle();
        
        let inputtedFirstname = $("#firstname").val();
        let inputtedLastname = $("#lastName").val();
        let inputtedEmail = $("#email").val();
        let inputtedPhoneNumber = $("#phoneNumber").val();
        let inputtedEmergencyphoneNumber = $("#emergencyphoneNumber").val();
        let inputtedBirthday = $("#birthday").val();
        let inputtedGender = $("#gender").val();

        $("#registerOutpatient").click(function(){
            $("#outpatientDetails").show();     
        })
    });
    $("button.inPatient").click(function(event){
        event.preventDefault();
        $("form#inpatientForm").slideToggle();

        let inputtedFirstname = $("#firstname").val();
        let inputtedLastname = $("#lastName").val();
        let inputtedEmail = $("#email").val();
        let inputtedPhoneNumber = $("#phoneNumber").val();
        let inputtedEmergencyphoneNumber = $("#emergencyphoneNumber").val();
        let inputtedBirthday = $("#birthday").val();
        let inputtedGender = $("#gender").val();
    });
});