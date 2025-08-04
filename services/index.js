import axios from "axios";

async function getData() {
    const res = await axios.get('https://ecommerce.ibradev.me/categories/all ');
    return res.data;
}
async function getProd() {
    const res = await axios.get(`https://ecommerce.ibradev.me/products/all`);
    return res.data;
}
async function getProdForCategory({page, subCategoryId}) {
    const res = await axios.get(`https://ecommerce.ibradev.me/products/all?page=${page}&subcategoryId=${subCategoryId}`);
    return res.data;
}
export{getData,getProd, getProdForCategory}