$(document).ready(function () {
    console.log("Content loaded");

    // User interface logic
    // Reset Function
    function resetValues() {
        $("#firstName").val("");
        $("#lastName").val("");
        $("#email").val("");
        $("#phoneNumber").val("");
        $("#emergencyphoneNumber").val("");
        $("#birthday").val("");
        $("#gender").val("");
        $("input#inpatientFirstName").val("");
        $("#inpatientLastName").val("");
        $("#inpatientEmail").val("");
        $("#inpatientPhoneNumber").val("");
        $("#inpatientEmergencyphoneNumber").val("");
        $("#inpatientBirthday").val("");
        $("#inpatientGender").val("");
    };
    $("button.outPatient").click(function (event) {
        event.preventDefault();
        $("form#outpatientForm").show();
    });
    $("#outpatientRegister").click(function () {
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

        if (inputtedFirstname == '' || inputtedLastname == '' || inputtedEmail == '' || inputtedPhoneNumber == '' || inputtedEmergencyphoneNumber == '' || inputtedBirthday == '' || inputtedGender == '') {
            alert("Please fill all the fields!")
        } else {
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



    $("button.inPatient").click(function (event) {
        event.preventDefault();
        $("form#inpatientForm").show();

        $(".inpatientRegister").click(function (event) {
            event.preventDefault()

            let inputtedInpatientFirstName = $("input#inpatientFirstName").val();
            let inputtedInpatientLastname = $("#inpatientLastName").val();
            let inputtedInpatientEmail = $("#inpatientEmail").val();
            let inputtedInpatientPhoneNumber = $("#inpatientPhoneNumber").val();
            let inputtedInpatientEmergencyphoneNumber = $("#inpatientEmergencyphoneNumber").val();
            let inputtedInpatientBirthday = $("#inpatientBirthday").val();
            let inputteInpatientdGender = $("#inpatientGender").val();


            // console.log("Outpatient firstname: ", inputtedInpatientFirstName);
            // console.log("Outpatient lastName: ", inputtedInpatientLastname);
            // console.log("Outpatient email: ", inputtedInpatientEmail);
            // console.log("Outpatient phoneNumber: ", inputtedInpatientPhoneNumber);
            // console.log("Outpatient emergencyphoneNumber: ", inputtedInpatientEmergencyphoneNumber);
            // console.log("Outpatient birthday: ", inputtedInpatientBirthday);
            // console.log("Outpatient gender: ", inputteInpatientdGender);

            if (inputtedInpatientFirstName == '' || inputtedInpatientLastname == '' || inputtedInpatientEmail == '' || inputtedInpatientPhoneNumber == '' || inputtedInpatientEmergencyphoneNumber == '' || inputtedInpatientBirthday == '' || inputteInpatientdGender == '') {
                alert("Please fill all the fields!")
            }else{
                $("#inpatientDetails").show();

                // Appending to the table
            var tableRow = document.createElement("tr");

            var InpatientTabledataFName = document.createElement("td");
            InpatientTabledataFName.innerHTML = inputtedInpatientFirstName;

            var InpatientTabledataLName = document.createElement("td");
            InpatientTabledataLName.innerHTML = inputtedInpatientLastname;

            var InpatientTabledataEmail = document.createElement("td");
            InpatientTabledataEmail.innerHTML = inputtedInpatientEmail;

            var InpatientTabledataPhone = document.createElement("td");
            InpatientTabledataPhone.innerHTML = inputtedInpatientPhoneNumber;

            var InpatientTabledataEmPhone = document.createElement("td");
            InpatientTabledataEmPhone.innerHTML = inputtedInpatientEmergencyphoneNumber;

            var InpatientTabledataDOB = document.createElement("td");
            InpatientTabledataDOB.innerHTML = inputtedInpatientBirthday;

            var InpatientTabledataSex = document.createElement("td");
            InpatientTabledataSex.innerHTML = inputteInpatientdGender;


            tableRow.appendChild(InpatientTabledataFName);
            tableRow.appendChild(InpatientTabledataLName);
            tableRow.appendChild(InpatientTabledataEmail);
            tableRow.appendChild(InpatientTabledataPhone);
            tableRow.appendChild(InpatientTabledataEmPhone);
            tableRow.appendChild(InpatientTabledataDOB);
            tableRow.appendChild(InpatientTabledataSex);

            $(".inpatientTbody").append(tableRow);

            resetValues();

            };
        })
    });
});