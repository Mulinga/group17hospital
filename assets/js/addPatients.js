$(document).ready(function(){
    console.log("Content loaded");

    // User interface logic
    // Reset Function
    function resetValues(){
        $("#firstName").val("");
        $("#lastName").val("");
        $("#email").val("");
        $("#phoneNumber").val("");
        $("#emergencyphoneNumber").val("");
        $("#birthday").val("");
        $("#gender").val("");
    };
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

        // console.log("Outpatient firstname: ",inputtedFirstname);
        // console.log("Outpatient lastName: ",inputtedLastname);
        // console.log("Outpatient email: ",inputtedEmail);
        // console.log("Outpatient phoneNumber: ",inputtedPhoneNumber);
        // console.log("Outpatient emergencyphoneNumber: ",inputtedEmergencyphoneNumber);
        // console.log("Outpatient birthday: ",inputtedBirthday);
        // console.log("Outpatient gender: ",inputtedGender);

        if (inputtedFirstname == '' || inputtedLastname == '' || inputtedEmail == '' || inputtedPhoneNumber == '' || inputtedEmergencyphoneNumber == '' || inputtedBirthday == '' || inputtedGender == ''){
            alert("Please fill all the fields!")
        }else{
            $("#outpatientDetails").show();

            // Appending to the table
            var tableRow = document.createElement("tr");

            var tabledataFName = document.createElement("td");
            tabledataFName.innerHTML = inputtedFirstname;

            var tabledataLName = document.createElement("td");
            tabledataLName.innerHTML = inputtedLastname;

            var tabledataEmail = document.createElement("td");
            tabledataEmail.innerHTML = inputtedEmail;

            var tabledataPhone = document.createElement("td");
            tabledataPhone.innerHTML = inputtedPhoneNumber;

            var tabledataEmPhone = document.createElement("td");
            tabledataEmPhone.innerHTML = inputtedEmergencyphoneNumber;

            var tabledataDOB = document.createElement("td");
            tabledataDOB.innerHTML = inputtedBirthday;

            var tabledataSex = document.createElement("td");
            tabledataSex.innerHTML = inputtedGender;


            tableRow.appendChild(tabledataFName);
            tableRow.appendChild(tabledataLName);
            tableRow.appendChild(tabledataEmail);
            tableRow.appendChild(tabledataPhone);
            tableRow.appendChild(tabledataEmPhone);
            tableRow.appendChild(tabledataDOB);
            tableRow.appendChild(tabledataSex);

            $("#outpatientBody").append(tableRow);

            resetValues();
            
        }
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