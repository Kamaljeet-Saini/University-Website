$(function(){
    var $queryForm = $("#basic-form");
    if($queryForm.length){
        $queryForm.validate({
            rules: {
                name: {
                    required: true,
                    minlength:5
                },
                email:{
                    required:true,
                    email:true
                },
                contact: {
                    required: true,
                    minlength:10
                },
                query: {
                    required: true,
                }
            },
            messages: {
                name: {
                    required: "Firstname is mandatory!",
                    minlength: "Name has to be minimium 5 characters long!"
                },
                email:{
                    required:"Email is mandatory!",
                    email:"Invalid email"
                },
                contact: {
                    required: "Contact is mandatory!",
                    minlength: "Name has to be minimium 10 characters long!"
                },
                query: {
                    required: "Subject is mandatory!"
                }
            }
        });
    }
});