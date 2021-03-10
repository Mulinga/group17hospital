$(document).ready(function() {
            console.log("Content loaded");

            // User interface logic
            // Reset Function
            function resetValues() {
                $("#firstName").val("");
                $("#lastName").val("");
                $("#email").val("");
                $("#phoneNumber").val("");
                $("#emergencyphoneNumber").val("");
                $("#doctorName").val("");
                $("#doctorDepartment").val("");
                $("#visitDate").val("");
                $("#clientFirstName").val("");
                $("#clientLastName").val("");
                $("#clientEmail").val("");
                $("#clientPhoneNumber").val("");
                $("#clientEmergencyphoneNumber").val("");
                $("#specialistName").val("");
                $("#specialistDepartment").val("");
                $("#visitingDate").val("");
            };
            $("button.bookAppointment").click(function(event) {
                event.preventDefault();
                $("form#appointmentForm").show();
            });
            $("#bookAppointment").click(function() {
                event.preventDefault();
                let clientFirstname = $("#firstName").val();
                let clientLastname = $("#lastName").val();
                let clientEmail = $("#email").val();
                let clientPhoneNumber = $("#phoneNumber").val();
                let clientEmergencyphoneNumber = $("#emergencyphoneNumber").val();
                let specialistName = $("#doctorName").val();
                let specialistDepartment = $("#doctorDepartment").val();
                let visitingDate = $("visitDate").val();

                if (clientFirstname == '' || clientLastname == '' || clientEmail == '' ||
                    clientPhoneNumber == '' || clientEmergencyphoneNumber == '' || specialistName == '' ||
                    specialistDepartment == '' || visitingDate == '') {
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
                    tabledataEmPhone.innerHTML = clientEmergencyphoneNumber;

                    var tabledataSpecialist = document.createElement("td");
                    tabledataSpecialist.innerHTML = specialistName;

                    var tabledataSpecialistDepartment = document.createElement("td");
                    tabledataSpecialistDepartment.innerHTML = specialistDepartment;

                    var tabledatavisitDate = document.createElement("td");
                    tabledatavisitDate.innerHTML = visitingDate;


                    tableRow.appendChild(tabledataFName);
                    tableRow.appendChild(tabledataLName);
                    tableRow.appendChild(tabledataEmail);
                    tableRow.appendChild(tabledataPhone);
                    tableRow.appendChild(tabledataEmPhone);
                    tableRow.appendChild(tabledataSpecialist);
                    tableRow.appendChild(tabledataSpecialistDepartment);
                    tableRow.appendChild(tabledatavisitDate);

                    $("#bookAppointmentBody").append(tableRow);

                    resetValues();

                }
            })
        };