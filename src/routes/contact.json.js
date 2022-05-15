// export async function post(event) {
//     const data = await event.request.json();
//     console.log('formdata js log of request : ', data);
    
//     const firstName = event.body.get("firstName");
//     const lastName = event.body.get("lastName");
//     const email = event.body.get("email");
//     const country = event.body.get("region");
//     const address = event.body.get("address");
//     const postCode = event.body.get("postCode");
//     const contactMessage = event.body.get("Message");

//     const res = await fetch(`https://docs.google.com/forms/d/e/1FAIpQLSf7He-25rjauSvHRKwkh0oTIjD9VE0vxlO_HZwFSCE5-X35UQ/formResponse?usp=pp_url&entry.1965128459=${firstName}&entry.633930312=${lastName}&entry.1537981512=${email}&entry.1150499474=${country}&entry.517421071=${address}&entry.385687538=${postCode}&entry.1893980300=${contactMessage}&submit=Submit`);

//     if (res.status === 200) {
//         return {
//             status: 200,
//             body: {
//                 message: "success",
//             },
//         };
//     } else {
//         return {
//             status: 404,
//             body: {
//                 message: "failed",
//             },
//         };
//     }
// }

