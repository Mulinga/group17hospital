function validate() {
    let myForm = $("#myForm")
    let names = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    if(names == '' || email == '' || message == '') {
        alert("Please fill in all the fields");
        return false;
    }else{
        let link="https://gmail.us1.list-manage.com/subscribe/post?u=70d5d821ac16afadc7dce3223&amp;id=6eb95e58bc"
        myForm.attr('action',link)
        myForm.attr('method' ,'post')
        let response = `${names} ,we have received your message. Thank you for reaching out to us!`
        alert(response)
    }
}
