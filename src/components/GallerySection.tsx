import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category?: string;
}

interface GallerySectionProps {
  items?: GalleryItem[];
}

const GallerySection = ({
  items = defaultGalleryItems,
}: GallerySectionProps) => {
  return (
    <section
      id="gallery"
      className="min-h-screen w-full bg-black py-16 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Ambient gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gallery
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my visual work showcasing various projects and
            creative explorations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="relative aspect-square overflow-hidden group">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h3 className="text-white font-medium text-lg">
                        {item.title}
                      </h3>
                      {item.category && (
                        <p className="text-gray-300 text-sm">{item.category}</p>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultGalleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Abstract Composition",
    imageUrl:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
    category: "Digital Art",
  },
  {
    id: "2",
    title: "Urban Exploration",
    imageUrl:
      "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=800&q=80",
    category: "Photography",
  },
  {
    id: "3",
    title: "Neon Dreams",
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    category: "Digital Art",
  },
  {
    id: "4",
    title: "Minimalist Design",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    category: "Graphic Design",
  },
  {
    id: "5",
    title: "Architectural Study",
    imageUrl:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80",
    category: "Photography",
  },
  {
    id: "6",
    title: "Color Theory",
    imageUrl:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80",
    category: "Digital Art",
  },
];

export default GallerySection;
