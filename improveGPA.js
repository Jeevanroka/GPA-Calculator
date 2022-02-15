function processForm()
{
    //declaring variables like name, email, agree, currentGPA etc.
    var name = document.getElementById("name");

    var email = document.getElementById("email");

    var agree = document.getElementById("agree");

    var currentGPA = document.getElementById("currentGPA");

    var currentCredits = document.getElementById("currentCredits");

    var newCredits = document.getElementById("newCredits");

    var GPAincrease = document.getElementById("GPAincrease");

    var amount = document.getElementById("amount");


    var nameErr = document.getElementById("nameErr");

    var emailErr = document.getElementById("emailErr");

    var agreeErr = document.getElementById("agreeErr");

    var currentGPAErr = document.getElementById("currentGPAErr");

    var currentCreditsErr = document.getElementById("currentCreditsErr");

    var newCreditsErr = document.getElementById("newCreditsErr");

    var GPAincreaseErr = document.getElementById("GPAincreaseErr");

    //condtions for user to entered name
    if (name.value == null || name.value.trim() == "")
    {
        document.getElementById("nameErr").innerHTML = "Name is required"; //if naming box is left empty
    }
    else
    {
        var regexExp = /^[a-zA-Z\s]*$/;
        if (!regexExp.test(name.value)) {
            console.log(regexExp.test(name.value))
            nameErr.innerHTML = "You name must consist of letters and whitespace only";
        } else {
            nameErr.innerHTML = "";
        }
    }
    if (email.value == null || email.value.trim() == "") //condition for user to entered email address
    {
        emailErr.innerHTML = "Email is required";
    }
    else
    {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email.value) === false)
        {
            emailErr.innerHTML = "Invalid Email Format"; //it displays if email format is wrong
        }
        else
        {
            emailErr.innerHTML = "";
        }
    }

    if (!agree.checked)  //users to check box
    {
        agreeErr.innerHTML = "You must agree to the terms and conditions"; //it displays if users didn't check the box
    }
    else
    {
        agreeErr.innerHTML = "";
    }

    //condition for GPA to entered
    if (currentGPA.value == null || currentGPA.value.trim() == "")
    {
        currentGPAErr.innerHTML = "GPA is required";
    }
    else if (checkIfInputIsNotNumber(currentGPA.value))
    {
        currentGPAErr.innerHTML = "Current GPA must be a number";
    }
    else if (!(currentGPA.value >= 0.0 && currentGPA.value <= 4.0))
    {
        currentGPAErr.innerHTML = "Your current GPA must be between 0.0 and 4.0";
    }
    else
    {
        currentGPAErr.innerHTML = "";
    }

    //condition to entered in current credit box
    if (currentCredits.value == null || currentCredits.value.trim() == "")
    {
        currentCreditsErr.innerHTML = "Current credit is required";
    }
    else if (checkIfInputIsNotNumber(currentCredits.value))
    {
        currentCreditsErr.innerHTML = "Current credits must be a number";
    }
    else if (currentCredits.value <= 0.0)
    {
        currentCreditsErr.innerHTML = "Current credit must be positive integer";
    }
    else
    {
        currentCreditsErr.innerHTML = "";
    }

    //condtion for users while entering the credit of the semester
    if (newCredits.value == null || newCredits.value.trim() == '')
    {
        newCreditsErr.innerHTML = "Credits of this semester cannot be blank";
    }
    else if (checkIfInputIsNotNumber(newCredits.value))
    {
        newCreditsErr.innerHTML = "Credits of this semester must be a number";
    }
    else if (newCredits.value < 0.0)
    {
        newCreditsErr.innerHTML = "(the number of credits this semester must be greater than 0)";
    }
    else
    {
        newCreditsErr.innerHTML = "";
    }


    if (GPAincrease.value == null || GPAincrease.value.trim() == '')
    {
        GPAincreaseErr.innerHTML = "(Desired GPA increment is required)";
    }
    else if (checkIfInputIsNotNumber(GPAincrease.value))
    {
        GPAincreaseErr.innerHTML = "Desired GPA must be a number";
    }
    else if (GPAincrease.value <= 0.0)
    {
        GPAincreaseErr.innerHTML = "(your desired GPA increase must be a positive value)";
    }
    else
    {
        GPAincreaseErr.innerHTML = "";
    }


    if (nameErr.innerHTML == "" && emailErr.innerHTML == "" && agreeErr.innerHTML == ""
        && currentGPAErr.innerHTML == "" && currentCreditsErr.innerHTML == ""
        && newCreditsErr.innerHTML == "" && GPAincreaseErr.innerHTML == "")
        {
          var currentGPAHours = parseFloat(currentGPA.value) * parseFloat(currentCredits.value);

          var desiredGPA = parseFloat(currentGPA.value) + parseFloat(GPAincrease.value);

          var desiredGPAHours = desiredGPA * (parseFloat(currentCredits.value) + parseFloat(newCredits.value));

          var GPAHoursIncrease = desiredGPAHours - currentGPAHours;

          var newGPA = GPAHoursIncrease / newCredits.value;

          amount.innerHTML = newGPA.toFixed(2);
    }

}

function checkIfInputIsNotNumber(data)
{
    return isNaN(parseFloat(data) || parseInt(data));
}
