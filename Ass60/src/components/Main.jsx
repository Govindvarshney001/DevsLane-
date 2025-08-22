import React, { useState, useEffect } from "react";
import Product from "./Product";
import { getProductList } from "../api"; 
import Loading from "./Loading";
import NotFound from "./NotFound";

const Main = () => {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("Default");
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    const fetchProducts = getProductList();
    fetchProducts
      .then((response) => {
        setProductList(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product list:", error);
        setLoading(false);
      });
  }, []);

  let data = productList.filter((item) => {
    const lowertitle = item.title.toLowerCase();
    const lowerquery = query.toLowerCase();

    return lowertitle.indexOf(lowerquery) !== -1;
  });

  if (sort === "ltoh") {
    data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (sort === "htol") {
    data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (sort === "name") {
    data.sort(function (x, y) {
      return x.title > y.title ? 1 : -1;
    });
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSortchange = (e) => {
    setSort(e.target.value);
  };

  if (loading) {
    return <Loading />;
  }

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

        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {data.map((items) => {
              return (
                <Product
                  id={items.id}
                  key={items.id}
                  title={items.title}
                  price={items.price}
                  tag={items.tag}
                  sale={items.sale}
                  oldPrice={items.oldPrice}
                  thumbnail={items.thumbnail}
                />
              );
            })}
          </div>
        ) : (
          <NotFound />
        )}

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
