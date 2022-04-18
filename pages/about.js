import Navbar from "../components/Navbar";

export default function Profile({}) {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-100 dark:bg-slate-900 dark:text-white">
        <div className="grid place-items-center h-screen">
          <h1 className="text-xl font-black leading-normal text-pink-800">
            Gestor
          </h1>
          <h1 className="text-xl font-black leading-normal text-pink-800">
            Inventario
          </h1>
          <h1 className="text-xl font-black leading-normal text-pink-800">
            Local
          </h1>
          <h1 className="text-xl font-black leading-normal text-pink-800">
            Definitivo
          </h1>
          <h1 className="text-xl font-black leading-normal text-pink-800">
            Almacenes
          </h1>
        </div>
      </div>
    </>
  );
}
