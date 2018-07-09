import axios from 'axios';

export function getProducts() {
  return axios.get('https://5b4017cbdf7b41001470ac37.mockapi.io/v1/products/');
}

export function getProduct(id) {
  return axios({
    method: 'get',
    url: 'https://5b4017cbdf7b41001470ac37.mockapi.io/v1/products/'+id,
    params: { id },
  })
}

export function getCarts() {
  return axios.get('https://5b4017cbdf7b41001470ac37.mockapi.io/v1/cart');
}

export function addItemCart(productDetail) {
  return axios({
    method: 'post',
    url: 'https://5b4017cbdf7b41001470ac37.mockapi.io/v1/cart',
    params: { productDetail },
  })
}