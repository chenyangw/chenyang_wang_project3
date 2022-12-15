import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function LoginPage({ providers }) {
  const { data, status } = useSession();
  console.log("data:", data, "status", status);

  const router = useRouter();
  if (status === "loading") {
    return "";
  }
  if (data) {
    router.push("/");
  }
  return (
    <Navbar>
      <div class="sticky top-0 px-4">
        <div class="flex justify-between">
          <div class="flex space-x-4">
            <h1 className="text-lg font-bold p-4">Hello! Please log in.</h1>
          </div>
          <div class="hidden md:flex items-center space-x-1">
            <a href="" className="py-5 px-3">
              Login
            </a>
            <a
              href=""
              className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >
              Signup
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-screen">
        {Object.values(providers).map((provider) => (
          <div key={provider.id}>
            <button
              onClick={async () => {
                await signIn(provider.id);
              }}
              className="bg-twitterWhite pl-3 pr-5 py-2 text-black rounded-full flex items-center"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </Navbar>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
