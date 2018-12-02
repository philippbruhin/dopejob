'use strict';

function closeNotification () {
    var $closeIcon = $('.close-alert');
    var $notificationAlert = $('.alert-messages');

    $closeIcon.each(function(){
        $(this).on('click', function() {
            $notificationAlert.remove();
        });
    });
};

function displayUserAccountForm() {
    var profileTypeVal = $('#profileType').val();
    var $employeeForm = $('#employeeForm');
    var $studentForm = $('#studentForm');
    var $enterpriseForm = $('#enterpriseForm');

    if ( profileTypeVal == 'student') {
        $employeeForm.hide();
        $studentForm.show();
        $enterpriseForm.hide();
    } else if (profileTypeVal == 'employee') {
        $employeeForm.show();
        $studentForm.hide();
        $enterpriseForm.hide();
    } else {
        $enterpriseForm.show();
        $employeeForm.hide();
        $studentForm.hide();
    }
};

function exitEventPage() {
    $(document).on('mouseout', function(evt) {
        if (evt.toElement === null && evt.relatedTarget === null) {
            $(evt.currentTarget).off('mouseout');
        }
    })
}

$(function() {
    closeNotification();
    displayUserAccountForm();
    setTimeout(function() {
        exitEventPage();
    }, 5000);
    $("#profileType").change(displayUserAccountForm);
});
