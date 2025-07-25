import React, { useState, useEffect } from 'react';
import {ArrowLeft, Heart, ShoppingBag, Star, Plus, Minus, Share, Shield, Truck, RotateCcw} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import '.styles/ProductDescPage.css';

function ProductDescriptionPage() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/products/${productId}`);
      setProduct(response.data);
      setSelectedSize(response.data.sizes?.[0] || '');
      setSelectedColor(response.data.colors?.[0] || '');
    } catch (err) {
      setError('Failed to load product details. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

//   useEffect(() => {
//     fetchProduct();
//   }, [productId]);

  const handleAddToCart = () => {
    console.log('Added to cart', { productId, selectedSize, selectedColor, quantity });
    alert(`${product.name} added to cart!`);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`star ${i < Math.floor(rating) ? 'filled' : ''}`}
      />
    ));
  };

  const renderTabContent = () => {
    if (!product) return null;
    switch (activeTab) {
      case 'description':
        return (
          <div className="tab-description">
            <h3>Product Details</h3>
            <p>{product.description}</p>
            <h4>Features:</h4>
            <ul>
              <li>Premium Italian leather construction</li>
              <li>Tailored fit with modern silhouette</li>
              <li>High-quality hardware and zippers</li>
              <li>Luxurious inner lining</li>
              <li>Multiple interior and exterior pockets</li>
            </ul>
          </div>
        );
      case 'reviews':
        return (
          <div className="reviews-grid">
            {product.reviews?.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-name">{review.name}</div>
                    <div className="review-date">
                      {new Date(review.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="review-rating">{renderStars(review.rating)}</div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
        );
      case 'shipping':
        return (
          <div className="shipping-info">
            <h3>Shipping Information</h3>
            <p><strong>Free Standard Shipping</strong> on orders over $200</p>
            <p><strong>Express Shipping:</strong> 2-3 business days - $15.99</p>
            <p><strong>Overnight Shipping:</strong> Next business day - $29.99</p>
            <p><strong>Return Policy:</strong> 30-day returns with free return shipping</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return null;

  return (
    <div className="product-container">
      <Header currentPage="product" cartCount={3} wishlistCount={8} isLoggedIn={true} />

      <div className="main-content">
        <button className="back-button" onClick={() => navigate('/products')}>
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </button>

        <div className="product-grid">
          <div className="image-section">
            <img src={product.images[selectedImage]} alt={product.name} className="main-image" />
            <div className="thumbnail-grid">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.name} ${i + 1}`}
                  className={`thumbnail ${selectedImage === i ? 'active' : ''}`}
                  onClick={() => setSelectedImage(i)}
                />
              ))}
            </div>
          </div>

          <div className="product-info">
            <div className="product-header">
              <div>
                <h1 className="product-title">{product.name}</h1>
                <p className="product-brand">{product.brand}</p>
                <div className="rating-section">
                  <div className="stars">{renderStars(product.rating)}</div>
                  <span className="rating-text">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="price-section">
              <span className="current-price">${product.price}</span>
              <span className="original-price">${product.originalPrice}</span>
              <span className="discount">{product.discount}% OFF</span>
            </div>

            <p className="description">{product.description}</p>

            <div className="variant-section">
              <h3>Size</h3>
              <div className="variant-options">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`variant-btn ${selectedSize === size ? 'active' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="variant-section">
              <h3>Color</h3>
              <div className="variant-options">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`variant-btn ${selectedColor === color ? 'active' : ''}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="quantity-section">
              <span>Quantity</span>
              <div className="quantity-control">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus size={16} />
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="action-buttons">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                <ShoppingBag size={20} />
                Add to Cart
              </button>
              <button
                className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
                onClick={handleWishlist}
              >
                <Heart size={20} fill={isWishlisted ? '#facc15' : 'transparent'} />
              </button>
              <button className="share-btn">
                <Share size={20} />
              </button>
            </div>

            <div className="features">
              <div><Truck size={16} /> Free Shipping</div>
              <div><RotateCcw size={16} /> 30-Day Returns</div>
              <div><Shield size={16} /> 2-Year Warranty</div>
            </div>
          </div>
        </div>

        <div className="tab-section">
          <div className="tab-buttons">
            {['description', 'reviews', 'shipping'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="tab-content">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescriptionPage;
