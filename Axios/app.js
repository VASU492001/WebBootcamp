// axios.get("https://swapi.dev/api/people/1/").then((res) => {
//     console.log("RESPONSE: ", res);
// })
//     .catch((e) => {
//         console.log("error", e);
//     })


const getStarWarsPerson = async () => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
    } catch (e) {
        console.log("erroe", e);
    }
};

getStarWarsPerson();

