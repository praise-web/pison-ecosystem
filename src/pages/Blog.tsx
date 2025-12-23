import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, Sparkles, BookOpen } from "lucide-react";

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
    <>
      <Helmet>
        <title>Blog | Pison Group</title>
        <meta
          name="description"
          content="Insights and ideas from The Pison Group - thought leadership, industry trends, and company updates."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />

        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
              <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />
            </div>
            
            {/* Grid pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            
            <div className="container-wide relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-up">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-white/90 text-sm font-medium tracking-wide">Ideas & Insights</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 animate-fade-up stagger-1">
                  Ideas at{" "}
                  <span className="text-accent italic">Pison Group</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto animate-fade-up stagger-2">
                  Insights, thought leadership, and industry trends from our team.
                </p>
              </div>
            </div>
          </section>

          {/* Blog Posts Section */}
          <section className="section-padding bg-background relative">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent h-[300px]" />
            
            <div className="container-wide relative">
              {loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
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
                      className="group bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-up"
                      style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                    >
                      {post.image && (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                        <h2 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                          {post.description}
                        </p>
                        <div className="flex items-center text-primary text-sm font-medium">
                          Read more
                          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
