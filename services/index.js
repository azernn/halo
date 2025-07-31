import axios from "axios";

async function getData() {
    const res = await axios.get('https://halodb.vercel.app/db.json');
    return res.data;
}
export{getData}