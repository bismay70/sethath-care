import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

// Dummy data matching the screenshot
const fallbackNews = [
  {
    id: 1,
    title: "Nibo Community Hospital Health Fair 2025",
    theme: '"Your Health, Your Responsibility"',
    description: "This event is part of our commitment to promoting preventive healthcare and raising awareness about common health challenges in our community.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=500",
    link: "#"
  },
  {
    id: 2,
    title: "Free medical mission",
    theme: '"In honour of late Evang Elizabeth Obesiwe"',
    description: "A free medical outreach sponsored by Dr micheal Obesiwe supporting free eye check, pregnant women, children, elderly people and pediatrics cases.",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=500",
    link: "#"
  },
  {
    id: 3,
    title: "Health Screening & Diagnostics Day",
    theme: '"Know Your Health, Know Your Numbers"',
    description: "A full-day community health event offering in-depth medical screenings using advanced hospital equipment to help detect hidden health conditions early.",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=500",
    link: "#"
  },
  {
    id: 4,
    title: "Cancer Awareness & Screening Day",
    theme: '"Early Detection Saves Lives"',
    description: "A community outreach focused on raising awareness about common cancers and providing free or subsidized screenings to encourage early diagnosis and treatment.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=500",
    link: "#"
  }
];

export default function NewsSection() {
  const [news, setNews] = useState(fallbackNews);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // You can implement your news API fetch here.
    // For now, it uses the fallback data which exactly matches your screenshot layout.
    const fetchNews = async () => {
      try {
        setLoading(true);
        // Using NewsData.io API
        const response = await fetch("https://newsdata.io/api/1/news?apikey=pub_67eebcf8dd704d6c978144ec114053f5&category=health&language=en");
        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
          const fetchedNews = data.results
            .filter(item => item.title && item.description) // Ensure we have content
            .slice(0, 4)
            .map((item, idx) => ({
              id: idx,
              title: item.title.substring(0, 60) + (item.title.length > 60 ? "..." : ""),
              theme: item.source_id,
              description: item.description.substring(0, 120) + (item.description.length > 120 ? "..." : ""),
              img: item.image_url || fallbackNews[idx].img, // Fallback image if article has none
              link: item.link
            }));
            
          // If we got fewer than 4 items, pad with fallback
          if (fetchedNews.length < 4) {
            setNews([...fetchedNews, ...fallbackNews.slice(fetchedNews.length, 4)]);
          } else {
            setNews(fetchedNews);
          }
        }
      } catch (error) {
        console.error("Failed to fetch news, using fallback data", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchNews();
  }, []);

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            News and Events
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {news.map((item) => (
            <Card key={item.id} className="border-none shadow-md overflow-hidden flex flex-col h-full rounded-sm bg-[#125c48]">
              <div className="h-48 overflow-hidden bg-gray-200">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 text-white flex-grow flex flex-col">
                <h3 className="font-semibold text-[17px] mb-3 text-center leading-snug">
                  {item.title}
                </h3>
                {item.theme && (
                  <p className="text-sm text-center mb-4">
                    <span className="font-semibold">Theme:</span> {item.theme}
                  </p>
                )}
                <p className="text-sm text-center text-white/90 flex-grow mb-8 leading-relaxed">
                  {item.description}
                </p>
                <div className="text-center mt-auto">
                  <Button 
                    variant="outline" 
                    className="bg-transparent text-white border-white hover:bg-white hover:text-[#125c48] rounded-full px-8 py-1 h-8 text-xs font-medium transition-all"
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
