const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });

module.exports = function validate(fileUrl) {
    nightmare
        .goto(`https://view.officeapps.live.com/op/view.aspx?src=${fileUrl}`)
        // .wait("body /deep/ #WACDialogText")
        .wait(200000)
        // .evaluate(() => document.querySelector("iframe").href)
        .evaluate(() => document.querySelector("body /deep/ #WACDialogText").textContent)
        .wait(200000)
        .end()
        .then(console.log)
        .catch((error) => {
            console.error("Search failed:", error);
        });
};

// const fs = require('fs');
// const request = require('request-promise');

// module.exports = function validate(filePath, cb) {
//     request
//         .post({
//             url: "http://mirror1.convertonlinefree.com",
//             encoding: null,
//             headers: {
//                 "User-Agent":
//                     "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 Safari/537.36",
//             },
//             formData: {
//                 __EVENTTARGET: "",
//                 __EVENTARGUMENT: "",
//                 __VIEWSTATE: "",
//                 ctl00$MainContent$fu: {
//                     value: fs.readFileSync(filePath),
//                     options: {
//                         filename: "output.docx",
//                         contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//                     },
//                 },
//                 ctl00$MainContent$btnConvert: "Convert",
//                 ctl00$MainContent$fuZip: "",
//             },
//         })
//         .then((body) => {
//             console.log('body');
//             console.log(body);
//             // cb(null, { valid: body });
//         })
//         .catch((err) => {
//             console.log('err');
//             console.log(err);
//             // cb(null, { valid: false });
//         });
// };
