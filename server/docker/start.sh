#!/bin/sh

# Exit on error
set -e

# Install node packages
echo "Installing Node packages..."
npm install

# Run database migrations
echo "Running database migrations..."
npm run db:migrate

# Seed the database
echo "Seeding the database..."
npm run db:seed

# Starts drizzle-kit studio
echo "Starting drizzle-kit studio, available at port https://local.drizzle.studio..."
npm run db:studio &

# Start server for development
echo "Starting server..."
npm run dev
