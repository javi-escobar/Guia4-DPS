"use client";
import React, { useState } from "react";
import { data } from "../data";
import Modal from "./Modal";

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }
    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };
  return (
    <div className="container-item">
      {data.map((product) => (
        <div className="item" key={product.id}>
          <figure>
            <img src={product.urlImage} alt={product.title} />
          </figure>
          <div className="info-product">
            <h2 className="titulo-producto-carrito">{product.title}</h2>

            <p className="price">${product.price}</p>
            <Modal product={product}/>
            <button
              className="btn add-cart"
              onClick={() => onAddProduct(product)}
            >
              Añadir al Carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
