import React from "react";

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <p>this is product id: {id}</p>
    </div>
  );
}
