window.onload = () => {
  fetch('https://barber-backend-gj4r.onrender.com/api/barbershop')
    .then(res => res.json())
    .then(data => {
      document.getElementById('shopImage').src = data.imageUrl || data.random1;
      document.getElementById('name').innerText = data.name;
      document.getElementById('category').innerText = `Category: ${data.category}`;
      document.getElementById('location').innerText = `Location: ${data.location}`;
      document.getElementById('services').innerText = `💬 Services: ${data.services.replace(/"/g, '')}`;
      document.getElementById('rating').innerText = `⭐ Rating: ${data.rating}`;
      document.getElementById('reviewCount').innerText = `📝 Reviews: ${Math.abs(data.reviewCount)}`;
      document.getElementById('status').innerText = `🟢 Status: ${data.status}`;
      document.getElementById('closingTime').innerText = `⏰ ${data.closingTime}`;
      document.getElementById('address').innerText = `📍 ${data.address}`;
      document.getElementById('phone').innerHTML = `📞 <a href="tel:${data.phone}">${data.phone}</a>`;
      document.getElementById('callButton').href = `tel:${data.phone}`;
      document.getElementById('directionsButton').href = data.directionsUrl;

      if (data.facebookUrl) {
        document.getElementById('facebookLink').href = data.facebookUrl;
      }
      if (data.instagramUrl) {
        document.getElementById('instagramLink').href = data.instagramUrl;
      }

      // Show card and hide loader
      document.querySelector('.card').style.display = 'block';
      document.getElementById('loader').style.display = 'none';

      // Last updated
      const now = new Date();
      document.getElementById('lastUpdated').innerText =
        "Last updated: " + now.toLocaleString();
    })
    .catch(err => {
      console.error("Error fetching:", err);
      document.getElementById('loader').innerText = "Failed to load data.";
    });
};
