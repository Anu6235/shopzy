import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Form } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom';
import { productcontext } from '../../Routing';

const Product = () => {
  const {
    product,
    setproduct,
    selectedproduct,
    setselectedproduct,
    searchdata,
    allProducts,
    setallProducts,
  } = useContext(productcontext);

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        if (res.status === 200) {
          setproduct(res.data.products);
          setallProducts(res.data.products);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleCategoryFilter = (category) => {
    setSearchParams({ category });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Filter products
  let filteredProducts = product.filter((item) => {
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    const matchesSearch = (searchdata || '').trim()
      ? item.title.toLowerCase().includes(searchdata.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  // Sort products
  if (sortBy === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "ratingHigh") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="container mt-4">
        <div className='row'>
            <div className='col-8'>
                   {/* Category Filter Buttons */}
      <h4 className="mb-3">Filter by Category</h4>
      <div className="mb-4 d-flex flex-wrap gap-2">
        {["all", "smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration"].map((cat) => (
          <Button
            key={cat}
            variant={cat === selectedCategory || (cat === "all" && !selectedCategory) ? "primary" : "outline-primary"}
            onClick={() => handleCategoryFilter(cat === "all" ? "" : cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Button>
        ))}
      </div>
            </div>
            <div className='col-4'>
                 {/* Sort Dropdown */}
      <div className="mb-4 d-flex justify-content-end">
        <Form.Select value={sortBy} onChange={handleSortChange} style={{ width: "200px" }}>
          <option value="">Sort by</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="ratingHigh">Rating: High to Low</option>
        </Form.Select>
      </div>
            </div>
        </div>
   

     

      {/* Product Cards */}
      <div className="row">
        {filteredProducts.map((ele) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={ele.id}>
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src={ele.thumbnail}
                alt={ele.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{ele.title}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> ₹{ele.price}
                  <br />
                  <strong>Rating:</strong> ⭐ {ele.rating}
                </Card.Text>
                <Link to="/detail" onClick={() => setselectedproduct(ele)}>
                  <Button variant="primary" className="w-100">
                    View Details
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
