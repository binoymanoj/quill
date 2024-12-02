"use client"
import Lottie from "lottie-react";
import React from "react";
import NotFound from "../../public/lottie/404-not-found.json";
import Link from "next/link";

function NotFoundPage() {
  return (
    <Link href="/" className="flex justify-center items-center h-screen overflow-hidden">
      <Lottie animationData={NotFound} loop />
    </Link>
  );
}

export default NotFoundPage;
