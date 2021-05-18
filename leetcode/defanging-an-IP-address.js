// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

/**
 * @param {string} address
 * @return {string}
 */

//FIRST SOLUTION

var defangIPaddr = function(address) {
    //split address at '.'
    //join address with '[.]' separator
    //return joined address
    return address.split('.').join('[.]')
};