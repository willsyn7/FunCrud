import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from 'dotenv';
import { checkDatabaseConnection } from './memory/db.js'; // Import the database connection check function

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));

// Verify database connection
checkDatabaseConnection()
  .then(() => {
    app.get('/', (req, res, next) => {
        return res.sendFile(path.resolve(__dirname, '../client/index.html'));
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to PostgreSQL database', err);
  });