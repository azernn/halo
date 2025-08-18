import axios from "axios";

async function getData() {
    const res = await axios.get('https://ecommerce.ibradev.me/categories/all ');
    return res.data;
}
async function getProd() {
    const res = await axios.get(`https://ecommerce.ibradev.me/products/all`);
    return res.data;
}
async function getItem(id) {
    const res = await axios.get(`https://ecommerce.ibradev.me/products/get/${id}`);
    return res.data;
}
async function getProdForCategory({ page, subCategoryId }) {
    const res = await axios.get(`https://ecommerce.ibradev.me/products/all?page=${page}&subcategoryId=${subCategoryId}`);
    return res.data;
}

async function getSubcategoriesById(id) {
    const res = await axios.get(`https://ecommerce.ibradev.me/categories/get/${id}`)
    return res.data
}

async function getProdBySubCatId(id) {
    const res = await axios.get(`https://ecommerce.ibradev.me/products/all?subcategoryId=${id}`)
    return res.data
}
export { getData, getProd, getProdForCategory, getItem, getProdBySubCatId, getSubcategoriesById }