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
          <div class="container mx-auto my-5 p-5">
            <div class="md:flex no-wrap md:-mx-2 ">
              <div class="w-full md:w-3/12 md:mx-2">
                <div class="bg-white p-3 ">
                  <div class="image overflow-hidden">                  
                    <img
                      class="h-auto w-full mx-auto"
                      src={session.user.image}
                      alt=""
                    />
                  </div>
                  <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                    {session.user.name}
                  </h1>
                </div>
              </div>
              <div class="w-full md:w-9/12 mx-2 h-64">
                <div class="bg-white p-3 shadow-sm rounded-sm">
                  <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span clas="text-green-500">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide">Perfil</span>
                  </div>
                  <div class="text-gray-700">
                    <div class="grid md:grid-cols-2 text-sm">
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Nombre</div>
                        <div class="px-4 py-2">{session.user.name}</div>
                      </div>
                      
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Correo</div>
                        <div class="px-4 py-2">{session.user.email}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
