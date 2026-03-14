# Restaurant Menu Website

A simple multi-page restaurant website with a lightweight Node.js backend.

## Project Structure

restaurant-menu-website
- index.html
- about.html
- menu.html
- contact.html
- style.css
- script.js
- server.js
- README.md

## Pages

- Home: Website introduction
- About: Information about the restaurant
- Menu: List of food items
- Contact: Contact form for customers

## Run Locally

1. Open a terminal in the project root.
2. Run:

```bash
node server.js
```

3. Visit:

```text
http://localhost:3000
```

## Notes

- The contact form sends data to `POST /api/contact`.
- Static website files are served by the server.
