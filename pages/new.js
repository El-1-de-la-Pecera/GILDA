import axios from "axios";
import { ProductForm } from "../components/ProductForm";
import { Layout } from "../components/Layout";

import { getSession } from "next-auth/react";

function NewPage() {
  return (
    <Layout>
      <div className="h-5/6 grid place-items-center">
        <ProductForm />
      </div>
    </Layout>
  );
}
export default NewPage;

export const getServerSideProps = async (context) => {
  const res = await axios.get("http://localhost:3000/api/products");
  
  const { data: products } = await axios.get(
    "http://localhost:3000/api/products"
  );

  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

  return {
    props: {
      session,
      products: res.data,
    },
  };
};
