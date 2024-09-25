# ECommerce Landing Page

A simple eCommerce landing page built with the MERN (MongoDB, Express, React, Node.js) stack, featuring product search, category filtering, and product details in a modal.

## App link

https://ecommerce-landing-page-using-mern.netlify.app/

## Demo video

https://github.com/user-attachments/assets/96875d65-4f25-4579-a2bb-030b9dcd28cc

## Features

- Display a list of products with image, title, and price.
- Search for products by title.
- Filter products by category.
- View detailed product information in a modal, including description, price, and available quantity.
- Responsive design with React-Bootstrap.

## Technologies Used

- **Frontend:** React, Axios, React-Bootstrap
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Other:** Bootstrap for responsive design, Axios for API requests

## Backend API

**GET /api/products**

Fetches the list of products from the database.

**Query Parameters:**

- **search:** Filters products by the title, case-insensitive (e.g., ?search=phone).
- **category:** Filters products by category (e.g., ?category=electronics).

**Response:**

Array of product objects

```json
[
  {
    "_id": "product_id",
    "title": "Product Title",
    "description": "Product description",
    "price": 100,
    "category": "electronics",
    "image": "product_image_url",
    "quantity": 50
  },
  ...etc
]
```
