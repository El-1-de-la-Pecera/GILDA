import axios from "axios";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { Layout } from "../../components/Layout";
import { getSession } from "next-auth/react";

function ProductPage({ product }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      await axios.delete("/api/products/" + id);
      toast.success("Task deleted");
      router.push("/");
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <Layout>
      <div className="p-6 bg-white text-xl dark:bg-gray-800">
        <p className="font-bold ">
          Nombre: <a className="font-normal">{product.name}</a>
        </p>
        <p className="font-bold">
          Marca: <a className="font-normal">{product.marca}</a>
        </p>
        <p className="font-bold">
          Descripcion: <a className="font-normal">{product.description}</a>
        </p>
        <p className="font-bold">
          Precio: <a className="font-normal">{product.price}</a>
        </p>
        <p className="font-bold">
          Sku: <a className="font-normal">{product.sku}</a>
        </p>
        <p className="font-bold">
          Stock: <a className="font-normal">{product.stock}</a>
        </p>
      </div>

      <div className="mt-7 flex justify-center">
        <button
          className="inline-flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 roundedvisu"
          onClick={() => handleDelete(product.id)}
        >
          Eliminar
          <svg
            class="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 ml-2 rounded"
          onClick={() => router.push("/products/edit/" + product.id)}
        >
          Editar
        </button>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { data: product } = await axios.get(
    "http://localhost:3000/api/products/" + query.id
  );

  console.log(product);

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
