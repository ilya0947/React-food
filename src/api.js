import API_URL from "./config";

const getMealById = async (id) => {
    const res = await fetch(`${API_URL}lookup.php?i=${id}`);
    return await res.json();
};

const getAllCategories = async () => {
    const res = await fetch(`${API_URL}categories.php`);
    return await res.json();
};

const getFilterCategory = async (name) => {
    const res = await fetch(`${API_URL}filter.php?c=${name}`);
    return await res.json();
};

export{getMealById, getAllCategories, getFilterCategory};