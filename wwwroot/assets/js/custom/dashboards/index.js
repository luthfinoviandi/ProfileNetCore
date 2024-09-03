function sendMessage(){
    var dialog = $('#sendMessageModal');
    dialog.modal('show');
}

function doSend(){
    var dialog = $('#sendMessageModal');
    dialog.modal('toggle');

    Swal.fire({
        text: "Your message has been sent successfully!",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Ok, got it!",
        customClass: {
            confirmButton: "btn btn-primary"
        }
    });


}