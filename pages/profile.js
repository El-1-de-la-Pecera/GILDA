import Navbar from "../components/Navbar";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";



function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/login");
  }

  return (
    <>
    <Navbar></Navbar>
    <div>
      {session ? (
        <div>
          <h1>{session.user.email}</h1>
          <p>{session.user.name}</p>
          <img src={session.user.image} alt="" />
        </div>
      ) : (
        <p>skeleton</p>
      )}
    </div>
    </>
  );    
}

export const getServerSideProps = async (context) => {
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
    },
  };
};

export default HomePage;
