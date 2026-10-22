import React, { Suspense } from "react";
import ProductDetailClient from "./ProductDetailClient";

export function generateStaticParams() {
  return [
    { id: "landing-page" },
    { id: "website" },
    { id: "webflow-web-app" },
  ];
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Suspense fallback={null}>
      <ProductDetailClient id={id} />
    </Suspense>
  );
}
