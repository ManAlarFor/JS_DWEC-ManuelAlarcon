"use strict"

function eraseCookie(name) {

    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;

    window.location.replace("../index.html") ;

}