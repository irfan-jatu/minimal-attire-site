import { Product } from "@/types/product";
import clothesImg from "@/assets/category-clothes.jpg";
import shoesImg from "@/assets/category-shoes.jpg";
import watchesImg from "@/assets/category-watches.jpg";
import bagsImg from "@/assets/category-bags.jpg";
import glassesImg from "@/assets/category-glasses.jpg";

export const products: Product[] = [
  // Clothes
  { id: "clothes-1", title: "Classic White Shirt", price: 79, category: "clothes", image: clothesImg, description: "Timeless elegance meets contemporary design. Crafted from premium Egyptian cotton with mother-of-pearl buttons and French seams for exceptional durability." },
  { id: "clothes-2", title: "Tailored Blazer", price: 249, category: "clothes", image: clothesImg, description: "A masterpiece of Italian tailoring. This blazer features a slim fit silhouette, notched lapels, and finest wool blend fabric that drapes beautifully." },
  { id: "clothes-3", title: "Cotton T-Shirt", price: 45, category: "clothes", image: clothesImg, description: "Understated luxury in everyday wear. Made from organic Pima cotton with a perfect weight and refined stitching details." },
  { id: "clothes-4", title: "Denim Jeans", price: 129, category: "clothes", image: clothesImg, description: "Premium selvedge denim with a modern slim fit. Features hand-finished details and brass hardware for lasting quality." },
  { id: "clothes-5", title: "Wool Sweater", price: 159, category: "clothes", image: clothesImg, description: "Luxuriously soft merino wool sweater with ribbed details. Perfect weight for layering or wearing alone." },
  { id: "clothes-6", title: "Linen Pants", price: 99, category: "clothes", image: clothesImg, description: "Breezy elegance in Italian linen. These pants offer comfort and sophistication with a tailored fit." },
  { id: "clothes-7", title: "Casual Polo", price: 69, category: "clothes", image: clothesImg, description: "Classic polo shirt reimagined. Features premium piqué cotton and contrast details." },
  { id: "clothes-8", title: "Evening Dress", price: 299, category: "clothes", image: clothesImg, description: "Exquisite evening wear in flowing silk. This dress combines timeless elegance with modern sophistication." },

  // Shoes
  { id: "shoes-1", title: "Leather Oxfords", price: 189, category: "shoes", image: shoesImg, description: "Handcrafted Italian leather oxfords with Goodyear welt construction. A timeless classic for the discerning gentleman." },
  { id: "shoes-2", title: "Classic Sneakers", price: 129, category: "shoes", image: shoesImg, description: "Minimalist luxury sneakers in premium leather. Comfort meets elegance with cushioned insoles and refined details." },
  { id: "shoes-3", title: "Chelsea Boots", price: 249, category: "shoes", image: shoesImg, description: "Sophisticated ankle boots in supple suede with elasticated sides. Perfect for any occasion." },
  { id: "shoes-4", title: "Loafers", price: 159, category: "shoes", image: shoesImg, description: "Classic penny loafers in buttery soft leather. Slip-on elegance with exceptional comfort." },
  { id: "shoes-5", title: "Running Shoes", price: 139, category: "shoes", image: shoesImg, description: "Performance meets style. Advanced cushioning technology wrapped in sleek, premium materials." },
  { id: "shoes-6", title: "Dress Shoes", price: 199, category: "shoes", image: shoesImg, description: "Formal footwear crafted to perfection. High-shine leather with leather sole and refined stitching." },
  { id: "shoes-7", title: "Sandals", price: 89, category: "shoes", image: shoesImg, description: "Summer sophistication in premium leather. Adjustable straps and cushioned footbed." },
  { id: "shoes-8", title: "High Heels", price: 169, category: "shoes", image: shoesImg, description: "Elegant heels that command attention. Expertly crafted with comfort padding and stunning design." },

  // Watches
  { id: "watches-1", title: "Chronograph Watch", price: 299, category: "watches", image: watchesImg, description: "Swiss-inspired chronograph with sapphire crystal and stainless steel case. Precision timekeeping meets refined aesthetics." },
  { id: "watches-2", title: "Minimalist Timepiece", price: 179, category: "watches", image: watchesImg, description: "Clean lines and understated elegance. Features a slim profile and premium leather strap." },
  { id: "watches-3", title: "Dive Watch", price: 349, category: "watches", image: watchesImg, description: "Professional diving watch with 200m water resistance. Unidirectional bezel and luminous hands." },
  { id: "watches-4", title: "Smart Watch", price: 399, category: "watches", image: watchesImg, description: "Technology meets luxury. Advanced features in a beautifully crafted titanium case." },
  { id: "watches-5", title: "Vintage Style", price: 259, category: "watches", image: watchesImg, description: "Timeless design inspired by classic watchmaking. Manual winding movement with exhibition caseback." },
  { id: "watches-6", title: "Sports Watch", price: 189, category: "watches", image: watchesImg, description: "Robust yet refined. Built for active lifestyles with premium materials and water resistance." },
  { id: "watches-7", title: "Dress Watch", price: 429, category: "watches", image: watchesImg, description: "Ultra-thin elegance for formal occasions. Precious metal case with crocodile leather strap." },
  { id: "watches-8", title: "Automatic Watch", price: 599, category: "watches", image: watchesImg, description: "Mechanical perfection with automatic movement. Exhibition caseback reveals intricate craftsmanship." },

  // Bags
  { id: "bags-1", title: "Leather Tote", price: 189, category: "bags", image: bagsImg, description: "Spacious tote in full-grain leather. Multiple compartments with signature hardware and refined details." },
  { id: "bags-2", title: "Messenger Bag", price: 149, category: "bags", image: bagsImg, description: "Professional sophistication for daily commutes. Premium leather with padded laptop compartment." },
  { id: "bags-3", title: "Backpack", price: 129, category: "bags", image: bagsImg, description: "Modern design meets timeless materials. Ergonomic straps and organizational pockets." },
  { id: "bags-4", title: "Crossbody Bag", price: 99, category: "bags", image: bagsImg, description: "Compact elegance for everyday essentials. Adjustable strap and secure closure." },
  { id: "bags-5", title: "Clutch", price: 79, category: "bags", image: bagsImg, description: "Evening sophistication in premium leather. Sleek profile with luxurious satin lining." },
  { id: "bags-6", title: "Duffle Bag", price: 199, category: "bags", image: bagsImg, description: "Travel in style with this spacious duffle. Water-resistant canvas with leather trim." },
  { id: "bags-7", title: "Laptop Bag", price: 159, category: "bags", image: bagsImg, description: "Professional protection for your technology. Padded compartments with refined exterior." },
  { id: "bags-8", title: "Evening Bag", price: 119, category: "bags", image: bagsImg, description: "Elegant accessory for special occasions. Delicate chain strap with structured silhouette." },

  // Glasses
  { id: "glasses-1", title: "Aviator Sunglasses", price: 149, category: "glasses", image: glassesImg, description: "Iconic aviator design with premium polarized lenses. Lightweight titanium frame for all-day comfort." },
  { id: "glasses-2", title: "Wayfarer Style", price: 129, category: "glasses", image: glassesImg, description: "Classic wayfarer reimagined. Handcrafted acetate frames with UV protection lenses." },
  { id: "glasses-3", title: "Round Frames", price: 139, category: "glasses", image: glassesImg, description: "Vintage-inspired circular frames in premium materials. Timeless sophistication for any face shape." },
  { id: "glasses-4", title: "Cat Eye", price: 159, category: "glasses", image: glassesImg, description: "Feminine elegance with retro appeal. Acetate frames with gradient lenses." },
  { id: "glasses-5", title: "Sport Sunglasses", price: 119, category: "glasses", image: glassesImg, description: "Performance eyewear with wraparound design. Impact-resistant lenses for active lifestyles." },
  { id: "glasses-6", title: "Vintage Frames", price: 169, category: "glasses", image: glassesImg, description: "Timeless design with modern materials. Hand-polished frames with premium optics." },
  { id: "glasses-7", title: "Blue Light Glasses", price: 89, category: "glasses", image: glassesImg, description: "Digital eye protection meets elegant design. Anti-reflective coating and comfortable fit." },
  { id: "glasses-8", title: "Oversized Frames", price: 179, category: "glasses", image: glassesImg, description: "Bold statement pieces in luxurious acetate. Maximum coverage with refined proportions." },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
