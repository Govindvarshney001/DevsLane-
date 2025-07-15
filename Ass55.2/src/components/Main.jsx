import React, { useState } from "react";
import Product from "./Product";
import ProductDetails from "./ProductDetails";

const Main = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <main className="p-10 bg-gray-200">
      <div className="max-w-7xl mx-auto bg-white p-10 space-y-2">
        <div className="flex items-center justify-end mb-6">
          <select className="border rounded">
            <option value="">All Categories</option>
            <option value="">Mugs</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Product
            onClick={() =>
              handleProductClick({
                title: "Black Printed Coffee Mug",
                price: "$15.00",
                tag: "Mugs",
                sale: "true",
                oldPrice: "$100.0",
                image:
                  "https://static.vecteezy.com/system/resources/thumbnails/028/829/771/small_2x/white-mug-mockup-generative-ai-free-photo.jpg",
              })
            }
            title="Black Printed Coffee Mug"
            price="$15.00"
            tag="Mugs"
            sale="true"
            oldPrice="$100.0"
            image="https://static.vecteezy.com/system/resources/thumbnails/028/829/771/small_2x/white-mug-mockup-generative-ai-free-photo.jpg"
          />

          <Product
            onClick={() =>
              handleProductClick({
                title: "Personlised Mug",
                price: "$15.00",
                tag: "Mugs",
                oldPrice: "",
                image:
                  "https://th.bing.com/th/id/OIP.Egob8_-aUCeV8QHyRY_iFwHaFj?pid=ImgDetMain",
              })
            }
            title="Personlised Mug"
            price="$15.00"
            tag="Mugs"
            oldPrice=""
            image="https://th.bing.com/th/id/OIP.Egob8_-aUCeV8QHyRY_iFwHaFj?pid=ImgDetMain"
          />

          <Product
            onClick={() =>
              handleProductClick({
                title: "Father's Day Mug",
                price: "$15.00",
                tag: "Mugs",
                oldPrice: "",
                image:
                  "https://files.cdn.printful.com/o/upload/bfl-image/b4/10622_l_52_MugIdeas_Developers_11zon.jpg",
              })
            }
            title="Father's Day Mug"
            price="$15.00"
            tag="Mugs"
            oldPrice=""
            image="https://files.cdn.printful.com/o/upload/bfl-image/b4/10622_l_52_MugIdeas_Developers_11zon.jpg"
          />

          <Product
            onClick={() =>
              handleProductClick({
                title: "Printed Pink T-shirt",
                price: "$15.00",
                tag: "Tshirt",
                sale: "true",
                oldPrice: "$100.0",
                image:
                  "https://tse1.mm.bing.net/th/id/OIP.cLW-sfo4ttnMxp-LQcsFWAHaGX?pid=ImgDetMain",
              })
            }
            title="Printed Pink T-shirt"
            price="$15.00"
            tag="Tshirt"
            sale="true"
            oldPrice="$100.0"
            image="https://tse1.mm.bing.net/th/id/OIP.cLW-sfo4ttnMxp-LQcsFWAHaGX?pid=ImgDetMain"
          />

          <Product
            onClick={() =>
              handleProductClick({
                title: "Printed T-shirt",
                price: "$15.00",
                tag: "Tshirt",
                oldPrice: "",
                image:
                  "https://rlv.zcache.com/thankful_grateful_blessed_t_shirt-r21b378b8c3ad4664a2411c678b849d4a_k2g5b_540.jpg",
              })
            }
            title="Printed T-shirt"
            price="$15.00"
            tag="Tshirt"
            oldPrice=""
            image="https://rlv.zcache.com/thankful_grateful_blessed_t_shirt-r21b378b8c3ad4664a2411c678b849d4a_k2g5b_540.jpg"
          />

          <Product
            onClick={() =>
              handleProductClick({
                title: "Teal Printed T-shirt",
                price: "$15.00",
                tag: "Tshirt",
                sale: "true",
                oldPrice: "$100.0",
                image:
                  "https://www.creativefabrica.com/wp-content/uploads/2022/08/19/Thankful-T-shirt-design-Graphics-36562293-1.jpg",
              })
            }
            title="Teal Printed T-shirt"
            price="$15.00"
            tag="Tshirt"
            sale="true"
            oldPrice="$100.0"
            image="https://www.creativefabrica.com/wp-content/uploads/2022/08/19/Thankful-T-shirt-design-Graphics-36562293-1.jpg"
          />
        </div>

        <div className="flex items-center mt-10 space-x-2">
          <button className="border rounded px-5 py-2 bg-red-700 text-white">
            1
          </button>
          <button className="border rounded px-5 py-2 border-red-700 text-red-700">
            2
          </button>
          <button className="border rounded px-5 py-2 border-red-700 text-red-700">
            ....
          </button>
        </div>

        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </main>
  );
};

export default Main;
