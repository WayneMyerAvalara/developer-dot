// TODO: allow user to update genCert URL
function initScript() {
    console.warn('INIT SCRIPT')
    
    if ( $('#gencert-url').val() === "" ) {
        alert( 'Enter a GenCert URL.' );
        return;
    }

    if ( $('#cert-request').val() === "" ) {
        alert( 'Enter valid javascript in the script box.' );
        return;
    }

    // TODO: token validation, check if it is there
    // - ask if they really want to regenerate if token already created

    try {
        console.warn('EVAL');
        eval( $('#cert-request').val() );
    } 
    catch ( e ) {
        console.warn('ERROR', e);
        if ( e instanceof SyntaxError ) {
            alert( e.message );
        }
    }
    $('#gencert_test').css('display', 'none');
    $('#cert-demo-back').css('display', 'block');
}

function getToken() {
    if ($('#api-url' ).val() === "" ||  $('#api-user' ).val() === "" || 
        $('#api-password' ).val() === "" || $('#client-id' ).val() === "" || 
        $('#customer-number' ).val() === "" ) {
            alert( 'You must provide all values to retrieve a token.' );
            return;
    }

    const authorization = "Basic " + window.btoa($('#api-user').val() + ":" + $('#api-password').val());

    return $.ajax({
        url: $('#api-url').val() + '/v2/auth/get-token',
        type: 'POST',
        headers: {
            'Content-Type': 'text/plain',
            "x-customer-number": $('#customer-number').val(),
            "x-client-id": $('#client-id').val(),
            'Authorization': authorization, 
        },
        success: function(result, status, xhr) {            
            if (xhr.responseText !== "" && result.response.token) {
                alert( 'Token successfully generated.' );
                updateCertScript(result.response.token);
            } else {
                alert( 'Failed to generate a token. Please check your credentials and try again.' );
            }

            return status;
        },
        error: function(xhr, status, error) {
            if (xhr.responseJson.error) {
                alert( `Error: ${xhr.responseJson.error}` );
            } else {
                alert( `Error: ${error}` );
            }
            return status;
        }
    });
}

// BUG: when script box is cleared out, doesn't update
// BUG: clears token when updating exposure zone
function updateCertScript(tokenKey) {
    const exposureZone = $('#set-zone').val();    
    const token = tokenKey ? tokenKey : '';   
    const selectedOptions = $('.cert-demo-option:checked');
    let options = ``;
    
    if (selectedOptions.length > 0) {
        selectedOptions.each(function() {            
            options += `  ${this.id} : true, \n`;
        })
    } else {
        options = `  edit_purchaser: false, \n`;
    }
    
    const sampleScript = `GenCert.init(document.getElementById( 'form-container' ), { \n${options}  ship_zone: '${exposureZone}', \n  token: '${token}', \n}); \nGenCert.show();`;

    $('#cert-request').empty().text(sampleScript);
};

function backToDemo() {
    $('#gencert_test').css("display","block");
    $('#cert-demo-back').css("display","none");
    $('#form-container').css("display","none");
}