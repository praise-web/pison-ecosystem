import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink } from "lucide-react";

interface BlogPost {
  title: string;
  description: string;
  link: string;
  image: string;
  pubDate: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://ideasatpisongroup.substack.com/feed"
        );
        const data = await response.json();

        if (data.status === "ok") {
          const blogPosts: BlogPost[] = data.items.map((item: any) => {
            // Extract image from enclosure or content
            let image = item.enclosure?.link || item.thumbnail || "";
            
            // If no image found, try to extract from content
            if (!image && item.content) {
              const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
              if (imgMatch) {
                image = imgMatch[1];
              }
            }

            // Clean description - remove HTML tags
            const cleanDescription = item.description
              ?.replace(/<[^>]*>/g, "")
              ?.substring(0, 200) + "...";

            return {
              title: item.title,
              description: cleanDescription || "",
              link: item.link,
              image: image,
              pubDate: new Date(item.pubDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
            };
          });

          setPosts(blogPosts);
        } else {
          setError("Failed to load blog posts");
        }
      } catch (err) {
        setError("Failed to fetch blog posts");
        console.error("Error fetching RSS feed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog | Pison Group</title>
        <meta
          name="description"
          content="Insights and ideas from The Pison Group - thought leadership, industry trends, and company updates."
        />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Ideas at Pison Group
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, thought leadership, and industry trends from our team.
            </p>
          </div>

          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-48 w-full rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-destructive">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <a
                  key={index}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {post.image && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      {post.pubDate}
                    </p>
                    <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      Read more
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
