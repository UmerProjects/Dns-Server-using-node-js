const dns = require("dns")

let website = "www.amazon.com"

dns.lookup(website, function onLookUp(err, address, family) {
    console.log("Address: " + address + " with the family of IPv" + family);
    dns.reverse(address, function(err, hostnames){
        console.log("reverse for: " + address + JSON.stringify(hostnames) );
    })
})