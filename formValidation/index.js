let fieldInfo = [
    {
        emptyError : "Name is Mandatory",
        patternError : "Name should not include numbers or special characters",
        value:null,
        exp:"^[a-zA-Z\\s]*$",
        displayID:"name_err",
        isValidated:false
    },
    {
        emptyError : "Email is Mandatory",
        patternError : 'Characters followed by an @ sign, followed by more characters, and then a "."',
        value:null,
        exp:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$",
        displayID:"email_err",
        isValidated:false
    },
    {
        emptyError : "Password is Mandatory",
        patternError : "Password that must contain 8 or more characters that are of at least one number, and one uppercase and lowercase letter",
        value:null,
        exp:"(?=.*\d)(?=.*[a-z])(?=.*[A-Z])",
        displayID:"password_err",
        isValidated:false
    }
]



function setupField(event,field)
{
    let value = event.target.value;

    if(field === 'name'){
        fieldInfo[0].value = value;
        checkStatus(fieldInfo[0])
    }
   
    if(field === 'email')
    {
        fieldInfo[1].value = value;
        checkStatus(fieldInfo[1])
    }
    if(field === 'password')
    {
        fieldInfo[2].value = value;
        checkStatus(fieldInfo[2])
    }

    let filteredFields = fieldInfo.filter(function(obj,index){
        return obj.isValidated === true;
    })
    
    if(filteredFields.length === fieldInfo.length)
    {
        document.getElementById("btn").disabled = false;
        document.getElementById("btn").style.cursor = "pointer";
    }
    else
    {
        document.getElementById("btn").disabled = true;
        document.getElementById("btn").style.cursor = "not-allowed";
    }
}

function checkStatus(fieldData)
{
    let status = validateField(fieldData.value,fieldData.exp);
    if(status!==true)
    {
        let message = null;
        if(status === 1)
        {
            message = fieldData.emptyError;
        }
        else if(status === 2)
        {
        message= fieldData.patternError;
        }
        document.getElementById(fieldData.displayID).innerText=message;
        document.getElementById(fieldData.displayID).style.display="flex";
        fieldData.isValidated=false;
    }
    else
    {
        document.getElementById(fieldData.displayID).style.display="none";
        fieldData.isValidated=true;
    }
}

function validateField(value,exp)
{
    let pattern = new RegExp(exp);

    if(value ==="")
    {
        return 1;
    }
    else
    {
        if(pattern.test(value)===false)
        {
            return 2;
        }
    }

    return true;
}

function newTab(){
    // location="https://www.google.co.in/";
    window.open("https://www.google.co.in/","_blank")
}