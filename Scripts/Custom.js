/// <reference path="jquery-1.6.4.min.js" />
/// <reference path="modernizr-2.6.2.js" />
/// <reference path="../jquery.mobile-1.0rc2/jquery.mobile-1.0rc2.js" />

//The below function tests whether an input element supports one of the new type features
//it does this by:
//1) create a "phantom" input element in memory
//2) setting the type attribute to the value you want to test
//3) seeing if after setting it if the type attribute is still set to "text" or if it got set correctly
//That is, a browser that does not support the type given will fallback to be just "text"
function inputSupportsType(test) {
    var input = document.createElement('input');
    input.setAttribute('type', test);
    if (input.type === 'text') {
        return false;
    } else {
        return true;
    }
}

//The below function tests whether an element supports a particular attribute...
//it does this by:
//1) creating a "phantom" element in memory
//2) checks for the existence of the attribute on that element
function elementSupportsAttribute(element, attribute) {
    var test = document.createElement(element);
    if (attribute in test) {
        return true;
    } else {
        return false;
    }
}

function updateChecks() {
    if (inputSupportsType('range'))
        $('#manualCheckForRange').text('yep');
    else
        $('#manualCheckForRange').text('nope');
    if (Modernizr.inputtypes.range)
        $('#modernizrCheckForRange').text('yep');
    else
        $('#modernizrCheckForRange').text('nope');

    if (inputSupportsType('number'))
        $('#manualCheckForNumber').text('yep');
    else
        $('#manualCheckForNumber').text('nope');
    if (Modernizr.inputtypes.number)
        $('#modernizrCheckForNumber').text('yep');
    else
        $('#modernizrCheckForNumber').text('nope');

    if (inputSupportsType('date'))
        $('#manualCheckForDate').text('yep');
    else
        $('#manualCheckForDate').text('nope');
    if (Modernizr.inputtypes.date)
        $('#modernizrCheckForDate').text('yep');
    else
        $('#modernizrCheckForDate').text('nope');

    //if (inputSupportsType('time'))
    //    $('#manualCheckForTime').text('yep');
    //else
    //    $('#manualCheckForTime').text('nope');
    //if (Modernizr.inputtypes.time)
    //    $('#modernizrCheckForTime').text('yep');
    //else
    //    $('#modernizrCheckForTime').text('nope');

    if (inputSupportsType('color'))
        $('#manualCheckForColor').text('yep');
    else
        $('#manualCheckForColor').text('nope');
    if (Modernizr.inputtypes.color)
        $('#modernizrCheckForColor').text('yep');
    else
        $('#modernizrCheckForColor').text('nope');

    if (Modernizr.input.placeholder)
        $('#modernizrCheckForPlaceholder').text('yep');
    else
        $('#modernizrCheckForPlaceholder').text('nope');
    if (elementSupportsAttribute('input', 'placeholder'))
        $('#manualCheckForPlaceholder').text('yep');
    else
        $('#manualCheckForPlaceholder').text('nope');

    if (Modernizr.inputtypes.url)
        $('#modernizrCheckForUrl').text('yep');
    else
        $('#modernizrCheckForUrl').text('nope');
    if (inputSupportsType('url'))
        $('#manualCheckForUrl').text('yep');
    else
        $('#manualCheckForUrl').text('nope');

    if (Modernizr.inputtypes.email)
        $('#modernizrCheckForEmail').text('yep');
    else
        $('#modernizrCheckForEmail').text('nope');
    if (inputSupportsType('email'))
        $('#manualCheckForEmail').text('yep');
    else
        $('#manualCheckForEmail').text('nope');

    if (Modernizr.input.pattern)
        $('#modernizrCheckForPattern').text('yep');
    else
        $('#modernizrCheckForPattern').text('nope');
    if (elementSupportsAttribute('input', 'pattern'))
        $('#manualCheckForPattern').text('yep');
    else
        $('#manualCheckForPattern').text('nope');

    if (Modernizr.inputtypes.search)
        $('#modernizrCheckForSearch').text('yep');
    else
        $('#modernizrCheckForSearch').text('nope');
    if (inputSupportsType('search'))
        $('#manualCheckForSearch').text('yep');
    else
        $('#manualCheckForSearch').text('nope');
}
