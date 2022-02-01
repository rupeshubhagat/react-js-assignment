import axios from "axios";
import { EMPLOYEE_URL, PRODUCT_URL } from "./Url";

// get all products
export function getEmployee(){
    return axios.get(EMPLOYEE_URL);
}

// get single product by using id
export function getEmpById(id){
    return axios.get(`${EMPLOYEE_URL}${id}`);
}

// delete product
export function deleteEmp(id){
    return axios.delete(`${EMPLOYEE_URL}${id}`);
}

// Add product
export function addEmp(data){
    return axios.post(EMPLOYEE_URL,data);
}

// update
export function updateEmpData(id,data){
    return axios.put(`${EMPLOYEE_URL}${id}`,data);
}

// *********************** For Product ***********
// get all products
export function getProducts(){
    return axios.get(`${PRODUCT_URL}?_page=1&_limit=6`);
}

export function fetchProductByPageId(currentPage){
    return axios.get(`${PRODUCT_URL}?_page=${currentPage}&_limit=6`);
}