import BlogOverview from "@/components/blog-overview";

async function fetchListOfBlogs() {
  
  try {
<<<<<<< HEAD
    
    const apiResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-blogs`, {
    
=======
      const apiResponse = await fetch("http://localhost:3000/api/get-blogs", {
>>>>>>> 0b5072b25f67373c60a416aefd4681463f85cda1
      method: "GET",
      cache: "no-store",
    });

    const result = await apiResponse.json();

    return result?.data;
  } catch (error) {
    throw new Error(error);
  }
}

async function Blogs() {
  const blogList = await fetchListOfBlogs();

  console.log(blogList, "blogList");

  return <BlogOverview blogList={blogList} />;
}

export default Blogs;
