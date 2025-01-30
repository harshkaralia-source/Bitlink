# Bitlink - URL Shortener

Bitlink is a modern URL shortener built with Next.js. It allows users to convert long URLs into short, easily shareable links.

## Features
- **Fast & Simple** - Shorten URLs in seconds.
- **Custom Aliases** - Choose a custom short link.
- **Free & Open-Source** - Available for everyone.

## Tech Stack
- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: MongoDB Atlas
- **Deployment**: Vercel

## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/Bitlink.git
cd Bitlink
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file and add the required variables:
```
MONGODB_URI=<your-database-url>
NEXT_PUBLIC_HOST=http://localhost:3000
```

### 4. Run the Development Server
```sh
yarn dev  # or npm run dev
```
Visit `http://localhost:3000` to see the app.

## Deployment
- Deploy on Vercel: `vercel deploy`

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

