import Container from "@/components/container/Container";
import Product from "@/components/product/Product";
import { products } from "@/data";
import React from "react";

const ProductList = () => {
  return (
    <main className="">
      <section className="">
        <Container>
          <div className="pt-32 pb-5">
            <h1 className=" text-3xl my-5 capitalize">All products</h1>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {products.map((item) => (
                <Product key={item.id} item={item} showButton />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ProductList;
