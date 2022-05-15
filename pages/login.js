import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status !== "loading" && status === "authenticated") {
    router.push("/");
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <div className="flex justify-center">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="125.000000pt"
              height="177.000000pt"
              viewBox="0 0 125.000000 177.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,177.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M470 1747 c-66 -24 -325 -181 -366 -223 -24 -23 -51 -66 -65 -100
-22 -55 -24 -71 -23 -259 0 -172 3 -212 22 -289 25 -99 89 -243 149 -333 115
-175 348 -346 489 -360 51 -5 54 -8 54 -33 0 -15 8 -34 18 -42 21 -18 170 -98
183 -98 5 0 71 36 147 80 l137 81 5 307 c3 169 3 315 1 325 -2 10 -26 29 -53
43 -26 13 -62 33 -79 43 l-30 19 58 33 c32 19 67 39 78 44 27 14 31 76 11 158
-22 86 -116 269 -179 347 -157 193 -410 310 -557 257z m-18 -225 c175 -89 302
-216 386 -385 41 -83 72 -183 72 -231 l0 -27 -72 40 -73 40 -8 52 c-18 123
-115 237 -263 311 -143 70 -229 54 -278 -51 -19 -41 -21 -63 -20 -211 0 -121
5 -182 17 -227 35 -132 109 -242 214 -322 181 -137 286 -145 328 -26 18 54 9
66 -90 119 l-80 42 -3 87 c-1 48 1 87 5 87 4 0 80 -42 168 -93 l160 -93 3
-130 c2 -71 0 -202 -3 -291 l-7 -163 -72 40 c-65 36 -71 42 -76 76 l-5 37 -52
2 c-100 4 -298 125 -416 256 -114 125 -203 299 -233 457 -18 95 -18 367 0 443
33 143 118 212 253 206 50 -2 78 -11 145 -45z m119 -278 c69 -45 124 -119 149
-203 l21 -66 -25 -20 c-14 -11 -52 -35 -86 -53 l-60 -34 -22 49 c-11 26 -27
70 -34 98 -15 55 -19 265 -5 265 4 0 32 -16 62 -36z"
                />
              </g>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-center">Bienvenido a Gilda</h3>
          <div>
            <button
              className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              onClick={() => signIn("github")}
            >
              Ingresar con github
            </button>
            <button
              className="px-6 py-2 mt-4 ml-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              onClick={() => signIn("github")}
            >
              Ingresar con correo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
