import * as https from "https";

// REPLACE THIS
const token = "redacted";

https.get("https://api.loyverse.com/v1.0/items", {
    headers: {
        'authorization': "Bearer " + token
    }
}, r => {
    var c = '';
    r.on("data", d => c+=d);
    r.on("end", () => console.log(JSON.stringify(JSON.parse(c), null, '\t')));
})