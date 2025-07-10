#!/bin/sh

# Exit on error
set -e

# Install node packages
echo "Installing Node packages..."
npm install

# Start server for development
echo "Starting server..."
npm run dev
