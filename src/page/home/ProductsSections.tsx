import { ProductCard } from "@/components/ui/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useGoogleSheetData } from "@/hooks/useGoogleSheet";
import type { Product } from "@/type/product";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

export const ProductsSection: React.FC = () => {
  const { data } = useGoogleSheetData<Product>("products");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  return (
    <section
      ref={sectionRef}
      id="works"
      className="bg-pink-50 py-16 px-3  md:px-6 mt-10 min-h-screen relative overflow-hidden "
    >
      {isInView &&
        Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, opacity: 1, rotate: 0 }}
            animate={{ y: "100vh", opacity: 0, rotate: 360 }}
            transition={{
              duration: 4 + Math.random() * 3,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            className="absolute pointer-events-none   z-100"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-40px",
              fontSize: `${20 + Math.random() * 20}px`,
            }}
          >
            🌸
          </motion.div>
        ))}

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col mb-6">
          <h2 className="text-3xl font-bold text-center text-pink-600 ">
            Support me
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {data.length > 0
            ? data.map((p) => <ProductCard key={p.id} {...p} />)
            : Array.from({ length: 6 }).map((_, index) => (
                <Skeleton className="w-full h-[200px]" key={index} />
              ))}
        </div>
      </div>
    </section>
  );
};
