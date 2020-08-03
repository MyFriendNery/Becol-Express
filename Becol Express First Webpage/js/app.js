function validateFirstName()
{
    var fieldFN = document.getElementById("Fname").value;
    var reg = /^[A-Za-z\s\'\-']{2,15}$/;
    //it will accept upper and lower case but it must be 3 characters
    if(reg.test(fieldFN))
    {
        document.getElementById("responseFname").style.color="Green";
        document.getElementById("responseFname").innerHTML ="<strong>Valid</strong>";
        return true;
    }
    else
    {
        document.getElementById("responseFname").style.color="Red";
        document.getElementById("responseFname").innerHTML = "<strong>Invalid</strong>";
        return false;
    }
}

function validateLastName()
{
    var fieldLN = document.getElementById("Lname").value;
    var reg = /^[A-Za-z\s\'\-']{2,15}$/;
    //it will accept upper and lower case but it must be 3 characters
    if(reg.test(fieldLN))
    {
        document.getElementById("responseLname").style.color="Green";
        document.getElementById("responseLname").innerHTML = "<strong>Valid</strong>";
        return true;
    }
    else
    {
        document.getElementById("responseLname").style.color="Red";
        document.getElementById("responseLname").innerHTML = "<strong>Invalid</strong>";
        return false;
    }
}

function validatePhone()
{
    var phoneNumber = document.getElementById("Phone").value;
    var re3 = /^\d{4}-\d{3}-\d{4}$/;
    // /^d=digits{4}$/

        if(re3.test(phoneNumber)){
            document.getElementById("responsePhoneNumber").style.color="Green";
            document.getElementById("responsePhoneNumber").innerHTML = "<strong>Valid</strong>";
            return (true);
        }else{
            document.getElementById("responsePhoneNumber").style.color="Red";
            document.getElementById("responsePhoneNumber").innerHTML = "<strong>Invalid Format!</strong>";
            return (false);
        }
}

function validateEmail()
{
    var fieldLN = document.getElementById("Email").value;
    var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //it will accept upper and lower case but it must be 3 characters
    if(reg.test(fieldLN))
    {
        document.getElementById("responseEmail").style.color="Green";
        document.getElementById("responseEmail").innerHTML = "<strong>Valid</strong>";
        return true;
    }
    else
    {
        document.getElementById("responseEmail").style.color="Red";
        document.getElementById("responseEmail").innerHTML = "<strong>Invalid Format!</strong>";
        return false;
    }
}

function validateHomeAddress()
{
    var fieldLN = document.getElementById("Address").value;
    var reg = /^[A-Za-z\s\'\-']{2,15}$/;
    //it will accept upper and lower case but it must be 3 characters
    if(reg.test(fieldLN))
    {
        document.getElementById("responseHomeAdress").style.color="Green";
        document.getElementById("responseHomeAdress").innerHTML = "<strong>Valid</strong>";
        return true;
    }
    else
    {
        document.getElementById("responseHomeAdress").style.color="Red";
        document.getElementById("responseHomeAdress").innerHTML = "<strong>Invalid</strong>";
        return false;
    }
}

function validateForm(){
    if (confirm('Are you sure about your information regarding to the Reservation?')) {
        // Save it!
        console.log('Thing was saved to the database.');
      } else {
        // Do nothing!
        alert("Thank you!");
      }
}