// client/src/components/LandingPage.jsx
import React from "react";

const data = {
  imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nreuMk8-LLKcxd6NmXoMN9epoQkQc4i4ppl6wjeq5lykQBcPzB5Uc4as3jVSwxQbamyCFFrGahEYZXWG7DsHmubYWRDimvNP99WN9wnP7QN3EZFXhkyhxgasRvk23zh8BG6Px5k6g=w114-h114-n-k-no",
  name: "Fama Barber Shop and Beauty Salon",
  rating: 4.6,
  reviewCount: 116,
  category: "Barber shop",
  closingTime: "⋅ Closes 7 pm",
  status: "Open",
  location: "Denton, TX, United States",
  phone: "+19406129127",
  services: "Costly compared to other barbershops with better haircuts",
  directionsUrl: "https://maps.google.com/maps?um=1&fb=1&gl=in&sa=X&geocode=KYGA90KOyk2GMWKFIZoqT9uj&daddr=500+N+Bell+Ave+%23109,+Denton,+TX+76209,+United+States&ved=2ahUKEwjN076ZsoCNAxVX0oQAHdHkIAMQ48ADegUIABCiAQ",
  callUrl: "tel:+19406129127",
  address: "500 N Bell Ave #109, Denton, TX 76209, United States"
};

const LandingPage = () => {
  return (
    <div style={{ fontFamily: "Arial", padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <img src={data.imageUrl} alt="Shop" style={{ width: 100, borderRadius: 8 }} />
      <h1>{data.name}</h1>
      <p><strong>Rating:</strong> {data.rating} ⭐</p>
      <p><strong>Category:</strong> {data.category}</p>
      <p><strong>Status:</strong> {data.status} {data.closingTime}</p>
      <p><strong>Address:</strong> {data.address}</p>
      <p><strong>Phone:</strong> <a href={data.callUrl}>{data.phone}</a></p>
      <p><strong>Review:</strong> {data.services}</p>
      <div style={{ marginTop: "1rem" }}>
        <a href={data.callUrl} style={{ marginRight: "1rem", color: "blue" }}>📞 Call</a>
        <a href={data.directionsUrl} style={{ color: "green" }}>📍 Directions</a>
      </div>
    </div>
  );
};

export default LandingPage;
