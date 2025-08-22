import React, { useState } from "react";
import Product from "./Product";
import ProductDetails from "./ProductDetails";

const Main = () => {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("Default");

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  let alldata = [
    {
      title: "Black Printed Coffee Mug",
      price: "$15.00",
      tag: "Mugs",
      sale: "true",
      oldPrice: "$100.0",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/028/829/771/small_2x/white-mug-mockup-generative-ai-free-photo.jpg",
    },
    {
      title: "Personlised Mug",
      price: "$5.00",
      tag: "Mugs",
      oldPrice: "",
      image:
        "https://th.bing.com/th/id/OIP.Egob8_-aUCeV8QHyRY_iFwHaFj?pid=ImgDetMain",
    },
    {
      title: "Father's Day Mug",
      price: "$55.00",
      tag: "Mugs",
      oldPrice: "",
      image:
        "https://files.cdn.printful.com/o/upload/bfl-image/b4/10622_l_52_MugIdeas_Developers_11zon.jpg",
    },
    {
      title: "Printed Pink T-shirt",
      price: "$15.00",
      tag: "Tshirt",
      sale: "true",
      oldPrice: "$100.0",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.cLW-sfo4ttnMxp-LQcsFWAHaGX?pid=ImgDetMain",
    },
    {
      title: "Printed T-shirt",
      price: "$18.00",
      tag: "Tshirt",
      oldPrice: "",
      image:
        "https://rlv.zcache.com/thankful_grateful_blessed_t_shirt-r21b378b8c3ad4664a2411c678b849d4a_k2g5b_540.jpg",
    },
    {
      title: "Teal Printed T-shirt",
      price: "$15.00",
      tag: "Tshirt",
      sale: "true",
      oldPrice: "$100.0",
      image:
        "https://www.creativefabrica.com/wp-content/uploads/2022/08/19/Thankful-T-shirt-design-Graphics-36562293-1.jpg",
    },
  ];

    let data = alldata.filter((item) => {
      const lowertitle = item.title.toLowerCase();
      const lowerquery = query.toLowerCase();

      return lowertitle.indexOf(lowerquery) !== -1;
    });

    if (sort === "ltoh") {
      data.sort((x, y) => {
        return (
          parseFloat(x.price.replace("$", "")) -
          parseFloat(y.price.replace("$", ""))
        );
      });
    } else if (sort === "htol") {
      data.sort((x, y) => {
        return (
          parseFloat(y.price.replace("$", "")) -
          parseFloat(x.price.replace("$", ""))
        );
      });
    } else if (sort === "name") {
      data.sort(function (x, y) {
        return x.title > y.title ? 1 : -1;
      });
    }

    const handleChange = (e) => {
       setQuery(e.target.value);
    }

    const handleSortchange = (e) => {
      setSort(e.target.value);
    };

  return (
    <main className="p-10 bg-gray-200">
      <div className="max-w-7xl mx-auto bg-white p-10 space-y-2">
        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-start mb-6  ">
            <input
              value={query}
              className="border rounded w-60 p-1"
              type="text"
              placeholder="Enter the Product Name"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-end mb-6">
            <select
             onChange={handleSortchange}
             className="border rounded"
                value={sort}
             >
              <option value="Default">Default Sort</option>
              <option value="name">Sort by title</option>
              <option value="ltoh">Sort by price: low to high</option>
              <option value="htol">Sort by price: high to low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((items) => {
            return (
              <Product
                key={items.title}
                title={items.title}
                price={items.price}
                tag={items.tag}
                sale={items.sale}
                oldPrice={items.oldPrice}
                image={items.image}
              />
            );
          })}
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
      </div>
    </main>
  );
};

export default Main;
