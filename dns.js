const dns = require("dns");

const website = "google.com";

dns.lookup(website, (err, address, family) => {
  console.log("address of %s is %j family: ipv%s", website, address, family);
});
