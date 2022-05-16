import Link from "next/link";

export function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <a
        className="w-full overflow-hidden p-6  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-3"
        key={product.id}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-200">
          SB: {product.stock_bodega}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-200">
          SS: {product.stock_sala}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-200">
          {product.description}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-200">
          SKU: {product.sku}
        </p>

        <p className="font-bold text-gray-800 dark:text-gray-100 text-2xl">
          ${product.price}
        </p>
      </a>
    </Link>
  );
}
