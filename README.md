# Moonshine – Sanity Backend (CMS)

This repository contains the **Sanity.io backend** for **Moonshine**, a platform that helps Shopify stores drive customer engagement with personalized postcard campaigns. The Sanity CMS handles content management for postcards, customer profiles, campaign tracking, and analytics, providing dynamic content to the frontend.

## 🏡 About Moonshine

Moonshine redefines text marketing by enabling Shopify store owners to send personalized, ROI-focused postcards to customers. With Moonshine, you can automate and track campaigns, while also providing a personal touch with handwritten cards.

## 🧰 Tech Stack

| **Layer**             | **Technologies / Tools**                      |
|-----------------------|-----------------------------------------------|
| **Frontend**          | Svelte, JavaScript, Sanity UI, Vite, Webpack  |
| **Backend**           | Sanity Content Lake, WebSockets, GROQ         |
| **CMS**               | Sanity.io (Structured Content Studio, Real-time Collaboration) |
| **Querying**          | GROQ, GraphQL                                 |
| **Hosting**           | Sanity Cloud (Studio & APIs), Custom Domains  |
| **Media & APIs**      | Sanity Image CDN, Asset Pipeline, Webhooks, API Tokens |
| **Customization**     | Custom Components, Structure Builder, Desk Tool |

## 🔗 Frontend Source Code

The frontend for Moonshine is built with **Svelte**. You can check out the full source code here:  
[GitHub Repo – Moonshine Frontend](https://github.com/prathushan/moonshine-sveltekit.git)

## ✨ Features of the CMS

- **Campaign Management**: Create, edit, and manage personalized postcard campaigns.
- **Customer Profiles**: Manage customer details for targeted marketing.
- **Postcard Templates**: Store and manage postcard templates for campaigns.
- **Analytics**: Track performance and ROI for all postcard campaigns.
- **Webhooks**: Integrate with other services for event-triggered campaigns.

## 📂 Content Models

- **campaign**: Details about the postcard campaign (title, message, target audience, etc.).
- **customer**: Customer profile with name, contact details, and preferences.
- **postcardTemplate**: Template for the postcards used in campaigns.
- **analytics**: Performance data for each campaign, including ROI and customer interactions.
- **testimonials**: Customer reviews and feedback.

## 🧪 Local Development

**Prerequisites**  
- Node.js (v16+ recommended)  
- Sanity CLI: `npm install -g @sanity/cli`

**Setup**  
1. Clone the repository:  
   `git clone https://github.com/prathushan/moonshine-sanity.git`

2. Navigate to the backend folder:  
   `cd moonshine-sanity`

3. Install dependencies:  
   `sanity install`

4. Start the development server:  
   `sanity start`
