import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col  justify-center items-center bg-gradient-to-r from-blue-900 to-blue-300 p-6">
      <main>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-4xl text-white font-bold mb-4">
          Browse our blog collection
        </h2>
        <Link href={"/blogs"}>
          <Button>
          Explore Blogs
          </Button>
        </Link>
      </div>
      </main>
      <footer className="w-full text-white py-4">
        <p className="container mx-auto text-center">
          © 2024 Mourya's Blog. All rights reserved.
        </p>
        
      </footer>
    </div>
  );
}