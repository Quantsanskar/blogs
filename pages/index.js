// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import FeaturedBlog from '../components/FeaturedBlog';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Blogs from '@/components/blogs';
import React from 'react';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog Website</title>
        <meta name="description" content="A modern blogging website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <FeaturedBlog />
      <Blogs />
      <Footer/>
    </div>
  );
}
