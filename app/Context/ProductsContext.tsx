"use client";

import axios from "axios";
import React, { useState, createContext, useContext, useEffect } from "react";

interface IProductsProps {
  children: React.ReactNode;
}
export interface IProduct {
  id: number;
  url: string;
  title: string;
  price: number;
  price_with_delivery: number;
  quantity: number;
  buyers: number;
  mainThumbnail: string;
  mainImage: string;
}
const ProductsContext = createContext({
  products: [],
  setProducts: (products: any) => {},
  loading: false,
  setLoading: (loading: boolean) => {},
});

const ProductsProvider = ({ children }: IProductsProps) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        console.log(res);
        setProduct(res.data.result);
      })
      .catch((err) => {});
  }, []);
  return (
    <ProductsContext.Provider
      value={{ products, setProducts: setProduct, loading, setLoading }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => useContext(ProductsContext);
export default ProductsProvider;
