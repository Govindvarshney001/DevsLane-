// components/Main.jsx
import React ,{useState} from "react";
import Product from "./Product"; 

const Main = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  return (
    <main className="p-10 bg-gray-200 ">
      <div className="max-w-7xl mx-auto bg-white p-10 space-y-2">
        <div className="flex items-center justify-end mb-6">
          <select className="border rounded" name="" id="">
            <option value="">All Categories</option>
            <option value="">Mugs</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Product
            onClick={() => handleProductClick(product)}
            title="Black Printed Coffee Mug"
            price="$15.00"
            tag="Mugs"
            sale="true"
            oldPrice="$100.0"
            image="https://static.vecteezy.com/system/resources/thumbnails/028/829/771/small_2x/white-mug-mockup-generative-ai-free-photo.jpg"
          />
          <Product
            title="Personlised Mug"
            price="$15.00"
            tag="Mugs"
            oldPrice=""
            image="https://th.bing.com/th/id/OIP.Egob8_-aUCeV8QHyRY_iFwHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
          />
          <Product
            title="father's day mug"
            price="$15.00"
            tag="Mugs"
            oldPrice=""
            image="https://files.cdn.printful.com/o/upload/bfl-image/b4/10622_l_52_MugIdeas_Developers_11zon.jpg"
          />
          <Product
            title="Printed pink tshirt"
            price="$15.00"
            tag="Tshirt"
            sale="true"
            oldPrice="$100.0"
            image="https://tse1.mm.bing.net/th/id/OIP.cLW-sfo4ttnMxp-LQcsFWAHaGX?rs=1&pid=ImgDetMain&o=7&rm=3"
          />
          <Product
            title="Printed Tshirt"
            price="$15.00"
            tag="Tshirt"
            oldPrice=""
            image="https://rlv.zcache.com/thankful_grateful_blessed_t_shirt-r21b378b8c3ad4664a2411c678b849d4a_k2g5b_540.jpg"
          />
          <Product
            title="Teal Printed Tshirt"
            price="$15.00"
            tag="Tshirt"
            sale="true"
            oldPrice="$100.0"
            image="https://www.creativefabrica.com/wp-content/uploads/2022/08/19/Thankful-T-shirt-design-Graphics-36562293-1.jpg"
          />
        </div>
        <div className="flex items-center  mt-10 space-x-2">
          <button className="border rounded px-5 py-2 bg-red-700 text-white ">
            1
          </button>
          <button className="border rounded px-5 py-2 border-red-700 text-red-700">
            2
          </button>
          <buttonm className="border rounded px-5 py-2  border-red-700 text-red-700">
            ....
          </buttonm>
        </div>
      </div>
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
};

export default Main;
