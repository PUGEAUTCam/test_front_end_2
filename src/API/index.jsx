import axios from "axios"

let API = `http://localhost:3000`

export const API_ROUTES = {
    sales: `${API}/sales/`,
    items: `${API}/items/`,
    sales_items: `${API}/sales/?_embed=items`,
}

//Recup all the sales with items
export const getAllSales = async () =>
    await axios.get(API_ROUTES.sales_items)
        .then((res) => res)
        .catch((error) => error.response)

//Post new sale and items 
export const createNewSale = async (sale) =>
    await axios.post(API_ROUTES.sales, sale)
        .then((res) => res)
        .catch((error) => error.response)

export const createNewItem = async (item, id) =>
    await axios.post(API_ROUTES.items, { saleId: id, description: item.description })
        .then((res) => res)
        .catch((error) => error.response)

//Search
export const searchSales = async (search) =>
    await axios.get(API_ROUTES.sales, { params: { q: search } })
        .then((res) => res)
        .catch((error) => error.response)

export const searchItem = async (search) =>
    await axios.get(API_ROUTES.items, { params: { q: search } })
        .then((res) => res)
        .catch((error) => error.response)