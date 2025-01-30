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
git clone https://github.com/yourusername/bitlink.git
cd bitlink
```

### 2. Install Dependencies
```sh
yarn install  # or npm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file and add the required variables:
```
DATABASE_URL=<your-database-url>
NEXTAUTH_SECRET=<your-secret-key>
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Run the Development Server
```sh
yarn dev  # or npm run dev
```
Visit `http://localhost:3000` to see the app.

## Deployment
- Deploy on Vercel: `vercel deploy`
- Deploy on DigitalOcean / AWS using Docker or PM2

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

