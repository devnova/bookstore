/**
 * Created by Nikolay Teplyakov on 05.04.2015.
 */

var loginPattern = /^([a-zA-Z]{1})+[a-zA-Z0-9_]+$/;
var passwordPattern = /[a-zA-Z0-9]+$/;

var emptyLogin = 0; // пустой логин
var errorLogin = 1; // неверный формат
var emptyPassword = 2;
var errorPassword = 3;
var errorRepeatPassword = 4;
var errorArray = [];

$(document).ready(function() {
    $("#login").focus(function() {
        setErrorInput(this, false);
        defa(emptyLogin, errorArray);
        defa(errorLogin, errorArray);
    });

    $("#password").focus(function() {
        setErrorInput(this, false);
        defa(emptyPassword, errorArray);
        defa(errorPassword, errorArray);
    });

    $("#repeatPassword").focus(function() {
        setErrorInput(this, false);
        defa(errorRepeatPassword, errorArray);
    });

    $("#login").blur(function () {
        if ($(this).val() == "" && $.inArray(emptyLogin, errorArray) == -1) {
            setErrorInput(this, true);
        } else if (!validate(loginPattern, $(this))) {
            setErrorInput(this, true);
        }
    });

    $("#password").blur(function () {
        if ($(this).val() == "" && $.inArray(emptyPassword, errorArray) == -1) {
            setErrorInput(this, true);
        } else if (!validate(passwordPattern, $(this)) && $.inArray(errorPassword, errorArray) == -1) {
            setErrorInput(this, true);
        }
    });

    $("#createAdmin").click(function () {
        validateInputWithError("#login", emptyLogin, errorLogin, loginPattern);
        validateInputWithError("#password", emptyPassword, errorPassword, passwordPattern);

        if(!inArray(emptyPassword, errorArray) && !inArray(errorPassword, errorArray)) {
            if ($("password").val() != $("repeatPassword").val()) {
                errorArray.push(errorRepeatPassword);
            }
        } else {
            errorArray.push(errorRepeatPassword);
        }

        if(errorArray.length > 0) {
            showNullWnd("Ошибка при регистрации администрации", getErrorMssg(errorArray));
        }
    });
});

function validateInputWithError(input, error1, error2, validatePattern) {
    if ($(input).val() == "" && $.inArray(error1, errorArray) == -1) {
        errorArray.push(error1);
    } else if (error2 != null && !validate(validatePattern, $("#login")) && $.inArray(errorLogin, errorArray) == -1) {
        errorArray.push(error2);
        defa(error1, errorArray);
    }
}

function inArray(elem, array) {
    if($.inArray(elem, array) != -1)
        return true;
    else
        return false;
}

//Delete Element From Array
function defa(elem, array){
    array.splice($.inArray(elem,array), 1);
}

function validate(pattern, input) {
    if (pattern.test($(input).val()))
        return true;
    else
        return false
}

function setErrorInput(input, show) {
    if(show)
    {
        $(input).css({
            "border-color": "#38110f"
        });
    }
    else
    {
        $(input).css({
            "border-color": "#2e2e2e"
        });
    }
}
