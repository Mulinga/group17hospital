$(document).ready(function(){
    console.log("Content loaded");

    // User interface logic
    $("button.outPatient").click(function(event){
        event.preventDefault();
        $("form#outpatientForm").show();
    });
    $("#outpatientRegister").click(function(){
        event.preventDefault();
        let inputtedFirstname = $("#firstName").val();
        let inputtedLastname = $("#lastName").val();
        let inputtedEmail = $("#email").val();
        let inputtedPhoneNumber = $("#phoneNumber").val();
        let inputtedEmergencyphoneNumber = $("#emergencyphoneNumber").val();
        let inputtedBirthday = $("#birthday").val();
        let inputtedGender = $("#gender").val();

        console.log("Outpatient firstname: ",inputtedFirstname);
        console.log("Outpatient lastName: ",inputtedLastname);
        console.log("Outpatient email: ",inputtedEmail);
        console.log("Outpatient phoneNumber: ",inputtedPhoneNumber);
        console.log("Outpatient emergencyphoneNumber: ",inputtedEmergencyphoneNumber);
        console.log("Outpatient birthday: ",inputtedBirthday);
        console.log("Outpatient gender: ",inputtedGender);
    })



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