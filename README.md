# Ordaz-Cloud-Solutions
Portfolio Website using AWS S3, AWS Route53 and AWS CloudFront 

# Portfolio Website

## Overview
A modern, responsive portfolio website built with React and Tailwind CSS, deployed using AWS cloud infrastructure. The project leverages AWS S3, Route 53, and CloudFront for optimal performance and reliability.

## Architecture
The website architecture consists of:
- **AWS S3**: Hosts the static website content
- **AWS CloudFront**: Content delivery network (CDN) for fast global content distribution
- **AWS Route 53**: DNS management and routing

## Features
- Responsive design using Tailwind CSS
- Modern UI built with React components
- Fast content delivery through CloudFront's global CDN
- Secure HTTPS connection
- Highly available and scalable infrastructure
- Custom domain name configuration


## Technical Stack

### Frontend Framework
- **React 18**
  - Leverages latest features including automatic batching and concurrent rendering
  - Client-side routing with React Router v7
  - Modern component architecture

### UI/Styling
- **Tailwind CSS**
  - Utility-first CSS framework
  - Responsive design system
  - Custom component styling
- **HeadlessUI**
  - Unstyled, accessible UI components
  - Seamless integration with Tailwind CSS
- **Heroicons**
  - Professional SVG icon set
  - Optimized for React and Tailwind CSS

### Backend Integration
- **AWS Services**
  - S3 for static hosting
  - CloudFront for content delivery
  - Route 53 for DNS management

### API Communication
- **Axios**
  - Promise-based HTTP client
  - Request/response interceptors
  - Robust error handling

### Development Tools
- **Vite**
  - Next-generation frontend tooling
  - Lightning-fast HMR (Hot Module Replacement)
  - Optimized build process

## Prerequisites
- AWS Account
- Domain name (Route53)
- GitHub Actions (for deployment)

## Setup and Deployment
1. **S3 Configuration**
   - Create an S3 bucket
   - Enable static website hosting
   - Configure bucket policies

2. **CloudFront Setup**
   - Create a CloudFront distribution
   - Link to S3 bucket
   - Configure SSL/TLS certificate

3. **Route 53 Configuration**
   - Set up hosted zone
   - Configure DNS records
   - Link to CloudFront distribution


