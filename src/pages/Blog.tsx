import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog | Pison Group</title>
        <meta name="description" content="Insights and ideas from The Pison Group - thought leadership, industry trends, and company updates." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        <div className="w-full h-[calc(100vh-80px)]">
          <iframe
            src="https://ideasatpisongroup.substack.com"
            className="w-full h-full border-0"
            title="Pison Group Blog"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </main>
    </div>
  );
};

export default Blog;
