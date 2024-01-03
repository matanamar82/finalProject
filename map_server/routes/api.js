var express = require('express');
var router = express.Router();

router.get('/:point', async function(req, res) {
    const point = req.params.point
    console.log(point);
    try{
        const response = await fetch(`https://api.opentopodata.org/v1/aster30m?locations=${point}`);
        const data = await response.json();
        //console.log(`the data is: ${data.data}`)
        res.json({ data });
    }
    catch{
        res.json({data: "cant fetch in server, try again later"})
    }
});
// router.get('/', function(req, res) {
//     res.json({ message: "hello from server!" });
//     //res.sendFile('users.html', {root:'public'});
// });

module.exports = router;
