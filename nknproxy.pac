#This is simple pac file written in Java Script
#Coder- Priyanshu Dwivedi, Btech 2nd year, IIITDMJ
#This can be used as a proxy configuration in the campus of IIITDMJ
#Some basic Exception added
var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+IIITDMJ", {
    "+IIITDMJ": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host) || /\.iiitdmj\.ac\.in$/.test(host) || /^172\.27\./.test(host) || /\.local$/.test(host) || /^192\.168\./.test(host) || /^msftconnecttest\.com$/.test(host) || /\.msftconnecttest\.com$/.test(host) || /^tplinkrepeater\.net$/.test(host) || /\.tplinkrepeater\.net$/.test(host) || /^connectivitycheck\.gstatic\.com$/.test(host) || /^detectportal\.firefox\.com$/.test(host)) return "DIRECT";
        return "PROXY nknproxy.iiitdmj.ac.in:3128";
    }
});
