$(document).ready(function () {
    console.log("Content loaded");

    // User interface logic
    // Reset Function
    function resetValues() {
        $("#firstName").val("");
        $("#secondName").val("");
        $("#email").val("");
        $("#yourNumber").val("");
        $("#emergencyContact").val("");
        $("#appointmentDate").val("");
        $("#appointmentTime").val("");
    };


    $("#bookNow").click(function (event) {
        event.preventDefault();
        // console.log("Submitted");

        let clientFirstname = $("#firstName").val();
        let clientLastname = $("#secondName").val();
        let clientEmail = $("#email").val();
        let clientPhoneNumber = $("#yourNumber").val();
        let emergencyNumber = $("#emergencyContact").val();
        let specialistDepartment = $("#department").val();
        let specialistName = $("#doctor").val();
        let visitingDate = $("#appointmentDate").val();
        let visitingTime = $("#appointmentTime").val();

        if (clientFirstname == '' || clientLastname == '' || clientEmail == '' ||
            clientPhoneNumber == '' || emergencyNumber == '' || specialistName == '' ||
            specialistDepartment == '' || visitingDate == '' || visitingTime == '') {
            alert("Please fill all the fields!")
        } else {

        $("#bookAppointment").show();

        // Appending to the table
        var tableRow = document.createElement("tr");

        var tabledataFName = document.createElement("td");
        tabledataFName.innerHTML = clientFirstname;

        var tabledataLName = document.createElement("td");
        tabledataLName.innerHTML = clientLastname;

        var tabledataEmail = document.createElement("td");
        tabledataEmail.innerHTML = clientEmail;

        var tabledataPhone = document.createElement("td");
        tabledataPhone.innerHTML = clientPhoneNumber;

        var tabledataEmPhone = document.createElement("td");
        tabledataEmPhone.innerHTML = emergencyNumber;
        
        var tabledataSpecialist = document.createElement("td");
        tabledataSpecialist.innerHTML = specialistName;

        var tabledataSpecialistDepartment = document.createElement("td");
        tabledataSpecialistDepartment.innerHTML = specialistDepartment;

        var tabledatavisitDate = document.createElement("td");
        tabledatavisitDate.innerHTML = visitingDate;

        var tabledatavisitTime = document.createElement("td");
        tabledatavisitTime.innerHTML = visitingTime;


        tableRow.appendChild(tabledataFName);
        tableRow.appendChild(tabledataLName);
        tableRow.appendChild(tabledataEmail);
        tableRow.appendChild(tabledataPhone);
        tableRow.appendChild(tabledataEmPhone);
        tableRow.appendChild(tabledataSpecialist);
        tableRow.appendChild(tabledataSpecialistDepartment);
        tableRow.appendChild(tabledatavisitDate);
        tableRow.appendChild(tabledatavisitTime);

        $("#bookAppointmentBody").append(tableRow);

        resetValues();

        }
    });
});
