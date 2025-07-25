import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, Truck, CheckCircle, Clock, Eye, RotateCcw } from 'lucide-react';
import Header from './Header';
import '.styles/ordersPage.css';

function ordersPage() {
  const [activefilter, setactivefilter] = useState('all');
  const [orders, setorders] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchorders() {
      try {
        setloading(true);
        const response = await axios.get('/api/orders', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });

        const { orders: batchedorders } = response.data;
        const formattedorders = [];

        batchedorders.forEach((batch, batchIndex) => {
          batch.forEach(order => {
            formattedorders.push({
              id: order._id,
              product: order.product,
              quantity: order.quantity,
              status: order.status,
              size: order.size,
              time: order.createdAt,
              batchNumber: batchIndex + 1
            });
          });
        });

        setorders(formattedorders);
      } catch (err) {
        console.error(err);
        seterror('Failed to load orders. Please try again later.');
      } finally {
        setloading(false);
      }
    }
    fetchorders();
  }, [activefilter]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered': return <CheckCircle size={16} />;
      case 'shipped': return <Truck size={16} />;
      case 'pending': return <Clock size={16} />;
      case 'schedule_return': return <RotateCcw size={16} />;
      case 'cancelled': return <RotateCcw size={16} />;
      default: return <Package size={16} />;
    }
  };

  const filteredorders = activefilter === 'all'
    ? orders
    : orders.filter(order => order.status === activefilter);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric' });};

  return (
    <div className="orders-container">
      <Header />

      <div className="main-content">
        <button className="backb" onClick={() => navigate('/profile')}>
          <ArrowLeft size={20} />
          <span>Back to Profile</span>
        </button>

        <h1 className="pagetitle">My orders</h1>

        <div className="filtertabs">
          {['all', 'pending', 'shipped', 'delivered', 'schedule_return', 'returned', 'approve_return', 'cancelled'].map((filter) => (
            <button
              key={filter}
              className={`filtertab ${activefilter === filter ? 'a' : ''}`}
              onClick={() => setactivefilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1).replace('_', ' ')}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="loading">loading orders...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : filteredorders.length === 0 ? (
          <div className="emptystate">
            <Package className="emptyicon" />
            <h3 className="emptytitle">No orders found</h3>
            <p className="emptytext">
              {activefilter === 'all'
                ? "You haven't placed any orders yet"
                : `No ${activefilter} orders found`}
            </p>
          </div>
        ) : (
          <div className="ordersgrid">
            {filteredorders.map((order) => (
              <div key={order.id} className="ordercard">
                <div className="orderheader">
                  <div className="orderinfo">
                    <div className="orderno">order {order.id}</div>
                    <div className="orderdate">Placed on {formatDate(order.time)}</div>
                    <div className="orderbatch">Batch #{order.batchNumber}</div>
                  </div>
                  <div className={`orderstatus ${order.status}`}>
                    {getStatusIcon(order.status)}
                    <span>{order.status.charAt(0).toUpperCase() + order.status.slice(1).replace('_', ' ')}</span>
                  </div>
                </div>

                <div className="orderitems">
                  <div className="orderitem">
                    <div className="itemdetails">
                      <div className="itemname">{order.product.name}</div>
                      <div className="itemmeta">
                        Size: {order.size} • Qty: {order.quantity}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="orderfooter">
                  <div className="orderactions">
                    <button className="actionb sec">
                      <Eye size={14} /> View Details
                    </button>
                    {order.status === 'delivered' && (
                      <button className="actionb prim">
                        <RotateCcw size={14} /> Reorder
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ordersPage;
