const form=document.getElementById("form");
//checking if all the validations are true
function validateForm(event){
    if(validateFullname() && validateEmail() && validatephonenumber()&& validateaddress()&& validatepinnumber()&& validateCountry()&& validateState() && validateGender() &&validateDate() &&validateExperienceyear() &&validateJobrole() &&validateaddress2() && validateCity()=== true)
    {  //if all the validations are successful
        console.log("submitted");
        form.submit();
    }
    else
    {   
        //if any error occurs 
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
}
//validation check for the name
function validateFullname(event){
    var fullname=document.getElementById("fullname").value.trim();


if(fullname===""){
    document.getElementById("validFirstName").innerHTML="Name field cannot be empty ";
    return false;
}
if((fullname.length<3)||(fullname.length>25)){
    document.getElementById("validFirstName").innerHTML="No of letters must be between 3 and 25";
    return false;
}
else
{
    document.getElementById("validFirstName").innerHTML="";
    return true;
}
}
//validation check for the email
function validateEmail(event){
   var email=document.getElementById("email").value.trim();
   const regexemail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if(email===""){
    document.getElementById("validemail").innerHTML="Email cannot be empty";
    return false;
}
if(!regexemail.test(email)){
    document.getElementById("validemail").innerHTML="Invalid format";
    return false;
}
else
{
    document.getElementById("validemail").innerHTML="";
    return true;
}
}
//validation check for the phonenumber
function validatephonenumber(event){
    var phonenumber=document.getElementById("phonenumber").value.trim();
    const regexphone=/^\d{10}$/;
    if(phonenumber===""){
        document.getElementById("validphone").innerHTML="Phonenumber field cannot be empty";
        return false;
    }
    if(!regexphone.test(phonenumber)){
        document.getElementById("validphone").innerHTML="Invalid format";
        return false;
    }
    else
    {
        document.getElementById("validphone").innerHTML="";
        return true;
    }
}
//validation check for the address line one
function validateaddress(event){
    var address=document.getElementById("address").value.trim();
    
    if(address===""){
        document.getElementById("validaddress").innerHTML="Address field cannot be empty";
        return false;
    }

    else
    {
        document.getElementById("validaddress").innerHTML="";
        return true;
    }
}
//validation checck for the address line two
function validateaddress2(event){
    var address2=document.getElementById("address2").value.trim();
    
    if(address2===""){
        document.getElementById("validaddress2").innerHTML="Address field cannot be empty";
        return false;
    }

    else
    {
        document.getElementById("validaddress2").innerHTML="";
        return true;
    }
}
//validation check for the pin number
function validatepinnumber(event){
    var pincode=document.getElementById("pincode").value.trim();
    const regexpin=/^\d{6}$/;
    
    if(pincode===""){
        document.getElementById("pinvalid").innerHTML="Pin number cannot be empty";
        return false;
    }
    if(!regexpin.test(pincode))
    {
        document.getElementById("pinvalid").innerHTML="Pls give the valid format";
        return false;
    }

    else
    {
        document.getElementById("pinvalid").innerHTML="";
        return true;
    }
}
//validation check for the country
function validateCountry(event){
    var country=document.getElementById("country").value.trim();
    
    
    if(country===""){
        document.getElementById("countryvalid").innerHTML="Country field cannot be empty";
        return false;
    }
    else
    {
        document.getElementById("countryvalid").innerHTML="";
        return true;
    }
}
//validation check for the city
function validateCity(event){
    var city=document.getElementById("city").value.trim();
    
    
    if(city===""){
        document.getElementById("cityvalid").innerHTML="City field cannot be empty";
        return false;
    }
    else
    {
        document.getElementById("cityvalid").innerHTML="";
        return true;
    }
}
//validation check for the state
function validateState(event){
    var country=document.getElementById("state").value.trim();
    
    
    if(country===""){
        document.getElementById("statevalid").innerHTML="State field cannot be empty";
        return false;
    }
    else
    {
        document.getElementById("statevalid").innerHTML="";
        return true;
    }
}
//validation check for the gender
function validateGender(){
    var gender = document.getElementsByName("gender");
    var genderFlag = false;
    for(var i=0;i<gender.length;i++){
        if(gender[i].checked){
            genderFlag = true;
            break;
        }
    }
    if(genderFlag==false){
        document.getElementById("validGender").innerHTML = "Select an option";
        return false;
    }   
    
    return genderFlag;
}
//validation check for the date
function validateDate(event){
    const currentDate = new Date();
    console.log(currentDate);
    const year = currentDate.getFullYear();
    console.log(year);
    const month = currentDate.getMonth() + 1;
    console.log(month);
    const day = currentDate.getDate()
    console.log(day);
    const today = `${year}-${month}-${day}`;
    console.log(today);
    const givenDate = document.getElementById("dob").value ;
    const date1 = new Date(today);
    const date2 = new Date(givenDate)
    const timeDiff = (date1-date2)/(1000*60*60*24*365.25);
    console.log(timeDiff);


    if(timeDiff >= 18){
        document.getElementById("validDate").innerHTML ="";
        return true;
    }else{
        document.getElementById("validDate").innerHTML ="You are not eligible";
        return false;
    }
}
//validation for the jobrole
function validateJobrole(){
    var selectjobrole = document.getElementById("job_type").value;
    if(selectjobrole === "" || selectjobrole === null)
    {
        document.getElementById("validatejob").innerHTML = "Select an option"
        return false;
    }else{
        document.getElementById("validatejob").innerHTML = "";
        return true;
    }

}
//validation for the years of experience
function validateExperienceyear(){
    var selectexperienceyear = document.getElementById("experience_type").value;
    if(selectexperienceyear === "" || selectexperienceyear === null)
    {
        document.getElementById("validateExp").innerHTML = "Select an option"
        return false;
    }else{
        document.getElementById("validateExp").innerHTML = "";
        return true;
    }

}