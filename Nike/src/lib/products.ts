import { Product } from '@/types/product';

export const products: Record<string, Product[]> = {
  men: [
    {
      id: 1,
      name: "Nike Air Max 90",
      price: 120,
      description: "The Nike Air Max 90 remains true to its running heritage with the iconic Waffle sole, stitched overlays and classic TPU details. Classic Nike Air cushioning adds comfort to your journey while the padded collar feels soft and comfortable.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
      ],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
      colors: ["Black/White", "White/Red", "Blue/Grey"],
      category: "men",
      subcategory: "Running",
      featured: true
    },
    {
      id: 2,
      name: "Nike Dri-FIT Element",
      price: 65,
      description: "The Nike Dri-FIT Element Men's Running Top combines sweat-wicking power with lightweight comfort. Made with at least 75% recycled polyester fibers.",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c",
      images: [
        "https://images.unsplash.com/photo-1556906781-9a412961c28c"
      ],
      sizes: ["S", "M", "L", "XL", "2XL"],
      colors: ["Black", "Grey", "Navy"],
      category: "men",
      subcategory: "Clothing"
    },
    {
      id: 3,
      name: "Nike Metcon 8",
      price: 130,
      description: "The Nike Metcon 8 is the most tested shoe in Nike's history, taking insights from elite athletes. The wide, flat heel gets even more stable with an inner plate that distributes weight from edge to edge.",
      image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
      images: [
        "https://images.unsplash.com/photo-1605348532760-6753d2c43329"
      ],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
      colors: ["Black/White", "Grey/Volt", "Red/Black"],
      category: "men",
      subcategory: "Training"
    },
    {
      id: 4,
      name: "Nike ZoomX Vaporfly NEXT% 2",
      price: 250,
      description: "The Nike ZoomX Vaporfly NEXT% 2 continues the legacy of the original by providing improved comfort and breathability with a redesigned upper.",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      images: [
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
      ],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
      colors: ["Bright Crimson/Black", "Volt/Black"],
      category: "men",
      subcategory: "Running",
      featured: true
    },
    {
      id: 5,
      name: "Nike Tech Fleece Hoodie",
      price: 110,
      description: "The Nike Tech Fleece Hoodie updates a classic silhouette with innovative thermal technology. Nike Tech Fleece fabric offers lightweight warmth.",
      image: "https://images.unsplash.com/photo-1584539696499-bff0b4768e4e",
      images: [
        "https://images.unsplash.com/photo-1584539696499-bff0b4768e4e"
      ],
      sizes: ["S", "M", "L", "XL", "2XL"],
      colors: ["Dark Grey", "Black", "Navy"],
      category: "men",
      subcategory: "Clothing"
    },
    {
      id: 6,
      name: "Nike Air Jordan 1 High",
      price: 180,
      description: "The Air Jordan 1 High is a legendary basketball shoe that transcends the court. Premium leather and the iconic Wings logo maintain the classic look you love.",
      image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634",
      images: [
        "https://images.unsplash.com/photo-1597045566677-8cf032ed6634"
      ],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
      colors: ["Black/Red", "White/University Blue", "Bred Toe"],
      category: "men",
      subcategory: "Basketball",
      featured: true
    },
    {
      id: 7,
      name: "Nike Dri-FIT Basketball Shorts",
      price: 35,
      description: "Nike Dri-FIT Basketball Shorts are made with sweat-wicking technology to help keep you dry and comfortable on the court.",
      image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b",
      images: [
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b"
      ],
      sizes: ["S", "M", "L", "XL", "2XL"],
      colors: ["Black", "Navy", "Red"],
      category: "men",
      subcategory: "Basketball"
    },
    {
      id: 8,
      name: "Nike Air Zoom Pegasus 39",
      price: 120,
      description: "The Nike Air Zoom Pegasus 39 continues to put a spring in your step with the same responsive foam as its predecessor.",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      images: [
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa"
      ],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
      colors: ["Black/White", "Grey/Volt", "Blue/Orange"],
      category: "men",
      subcategory: "Running"
    }
  ],
  women: [
    {
      id: 101,
      name: "Nike Air Zoom Pegasus 39",
      price: 120,
      description: "The Nike Air Zoom Pegasus 39 delivers a responsive running experience with a wider forefoot area and plenty of cushioning.",
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
      images: [
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2"
      ],
      sizes: ["US 5", "US 6", "US 7", "US 8", "US 9", "US 10"],
      colors: ["Pink/White", "Black/Gold", "Blue/Silver"],
      category: "women",
      subcategory: "Running",
      featured: true
    },
    {
      id: 102,
      name: "Nike Pro Training Tights",
      price: 55,
      description: "The Nike Pro Training Tights are made with sweat-wicking technology and stretchy fabric to help keep you dry and moving freely during your workout.",
      image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb",
      images: [
        "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb"
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Grey"],
      category: "women",
      subcategory: "Clothing"
    },
    {
      id: 103,
      name: "Nike Air Max 270",
      price: 150,
      description: "The Nike Air Max 270 combines the exaggerated tongue and heritage details with an all-new, super-soft Max Air unit for an experience like never before.",
      image: "https://images.unsplash.com/photo-1585232004423-244e0e6904e3",
      images: [
        "https://images.unsplash.com/photo-1585232004423-244e0e6904e3"
      ],
      sizes: ["US 5", "US 6", "US 7", "US 8", "US 9", "US 10"],
      colors: ["White/Pink", "Black/Gold", "Grey/Volt"],
      category: "women",
      subcategory: "Lifestyle",
      featured: true
    },
    {
      id: 104,
      name: "Nike Yoga Luxe Crop Top",
      price: 45,
      description: "The Nike Yoga Luxe Crop Top is made with Nike's buttery-soft Infinalon fabric that feels like a gentle hug.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      images: [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Desert Berry", "Black", "Light Grey"],
      category: "women",
      subcategory: "Yoga"
    },
    {
      id: 105,
      name: "Nike Dri-FIT One Tank",
      price: 30,
      description: "The Nike Dri-FIT One Tank features sweat-wicking technology and a slim fit that layers well without riding up.",
      image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb",
      images: [
        "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb"
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "White", "Pink"],
      category: "women",
      subcategory: "Training"
    },
    {
      id: 106,
      name: "Nike Free Run 5.0",
      price: 100,
      description: "The Nike Free Run 5.0 returns to its roots with a low-profile midsole that delivers the flexible cushioning you love.",
      image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      images: [
        "https://images.unsplash.com/photo-1579338559194-a162d19bf842"
      ],
      sizes: ["US 5", "US 6", "US 7", "US 8", "US 9", "US 10"],
      colors: ["White/Grey", "Black/White", "Pink/Grey"],
      category: "women",
      subcategory: "Running"
    },
    {
      id: 107,
      name: "Nike Sportswear Windrunner",
      price: 100,
      description: "The Nike Sportswear Windrunner Jacket updates our first running jacket with lightweight fabric and classic chevron design.",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
      images: [
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990"
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black/White", "Blue/Navy", "Pink/Grey"],
      category: "women",
      subcategory: "Jackets"
    }
  ],
  kids: [
    {
      id: 201,
      name: "Nike Air Max 270 Kids",
      price: 100,
      description: "The Nike Air Max 270 Kids' Shoe is inspired by two icons of Air: the Air Max 180 and Air Max 93.",
      image: "https://images.unsplash.com/photo-1555274175-75f4056dfd05",
      images: [
        "https://images.unsplash.com/photo-1555274175-75f4056dfd05"
      ],
      sizes: ["US 3Y", "US 4Y", "US 5Y", "US 6Y", "US 7Y"],
      colors: ["Blue/White", "Black/Red", "Grey/Volt"],
      category: "kids",
      subcategory: "Running",
      featured: true
    },
    {
      id: 202,
      name: "Nike Dri-FIT Kids T-Shirt",
      price: 25,
      description: "The Nike Dri-FIT Kids' T-Shirt helps keep young athletes dry and comfortable with sweat-wicking fabric.",
      image: "https://images.unsplash.com/photo-1555274175-6cbf6f3b137d",
      images: [
        "https://images.unsplash.com/photo-1555274175-6cbf6f3b137d"
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
      category: "kids",
      subcategory: "Clothing"
    },
    {
      id: 203,
      name: "Nike Team Hustle D 10",
      price: 65,
      description: "The Nike Team Hustle D 10 brings classic basketball style to the playground.",
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      images: [
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
      ],
      sizes: ["US 3Y", "US 4Y", "US 5Y", "US 6Y", "US 7Y"],
      colors: ["White/Black", "Black/Red", "Blue/White"],
      category: "kids",
      subcategory: "Basketball"
    },
    {
      id: 204,
      name: "Nike Revolution 6 Kids",
      price: 55,
      description: "The Nike Revolution 6 provides cushioned comfort for young runners with a lightweight design perfect for everyday wear.",
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2",
      images: [
        "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2"
      ],
      sizes: ["US 3Y", "US 4Y", "US 5Y", "US 6Y", "US 7Y"],
      colors: ["Pink/White", "Blue/Black", "Grey/Volt"],
      category: "kids",
      subcategory: "Running"
    },
    {
      id: 205,
      name: "Nike Flex Runner Kids",
      price: 45,
      description: "The Nike Flex Runner makes it easy for kids to get their shoes on and off while providing flexible comfort for everyday play.",
      image: "https://images.unsplash.com/photo-1555274175-6cbf6f3b137d",
      images: [
        "https://images.unsplash.com/photo-1555274175-6cbf6f3b137d"
      ],
      sizes: ["US 3Y", "US 4Y", "US 5Y", "US 6Y", "US 7Y"],
      colors: ["Black/White", "Blue/Grey", "Pink/Purple"],
      category: "kids",
      subcategory: "Running"
    }
  ],
  sale: [
    {
      id: 301,
      name: "Nike Free RN 5.0",
      price: 79.99,
      originalPrice: 120,
      description: "The Nike Free RN 5.0 returns to its roots with a low-profile midsole that delivers the flexible cushioning you love.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
      ],
      sizes: ["US 8", "US 9", "US 10", "US 11"],
      colors: ["Grey/White", "Black/Red"],
      category: "sale",
      subcategory: "Running"
    },
    {
      id: 302,
      name: "Nike Metcon 7",
      price: 89.99,
      originalPrice: 130,
      description: "The Nike Metcon 7 is the gold standard for weight training, even tougher and more stable than previous versions.",
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
      images: [
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2"
      ],
      sizes: ["US 8", "US 9", "US 10", "US 11"],
      colors: ["Black/White", "Blue/Grey"],
      category: "sale",
      subcategory: "Training"
    },
    {
      id: 303,
      name: "Nike Air Zoom Structure 24",
      price: 89.99,
      originalPrice: 140,
      description: "The Nike Air Zoom Structure 24 continues to deliver the stability you love with a smooth, guided feel.",
      image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de",
      images: [
        "https://images.unsplash.com/photo-1595341888016-a392ef81b7de"
      ],
      sizes: ["US 8", "US 9", "US 10", "US 11"],
      colors: ["Black/White", "Grey/Blue"],
      category: "sale",
      subcategory: "Running"
    },
    {
      id: 304,
      name: "Nike Pro Warm Tights",
      price: 45.99,
      originalPrice: 70,
      description: "The Nike Pro Warm Tights help keep you warm and moving naturally during cold-weather workouts.",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c",
      images: [
        "https://images.unsplash.com/photo-1556906781-9a412961c28c"
      ],
      sizes: ["XS", "S", "M", "L"],
      colors: ["Black", "Dark Grey"],
      category: "sale",
      subcategory: "Clothing"
    },
    {
      id: 305,
      name: "Nike React Infinity Run 3",
      price: 109.99,
      originalPrice: 160,
      description: "The Nike React Infinity Run 3 continues to help keep you running with outstanding cushioning and a smooth ride.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      images: [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
      ],
      sizes: ["US 8", "US 9", "US 10", "US 11"],
      colors: ["White/Crimson", "Black/Volt"],
      category: "sale",
      subcategory: "Running"
    },
    {
      id: 306,
      name: "Nike Dri-FIT Academy",
      price: 29.99,
      originalPrice: 45,
      description: "The Nike Dri-FIT Academy Top delivers sweat-wicking comfort in a classic soccer design.",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c",
      images: [
        "https://images.unsplash.com/photo-1556906781-9a412961c28c"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black/White", "Blue/Navy"],
      category: "sale",
      subcategory: "Soccer"
    },
    {
      id: 307,
      name: "Nike Air Zoom Tempo NEXT%",
      price: 149.99,
      originalPrice: 200,
      description: "The Nike Air Zoom Tempo NEXT% is designed for training days and race day, featuring responsive foam and Zoom Air units.",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      images: [
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
      ],
      sizes: ["US 8", "US 9", "US 10", "US 11"],
      colors: ["Bright Crimson", "Electric Green"],
      category: "sale",
      subcategory: "Running"
    }
  ]
};

export const getProductById = (id: number): Product | undefined => {
  for (const category of Object.values(products)) {
    const product = category.find(p => p.id === id);
    if (product) return product;
  }
  return undefined;
};

export const getProductsByCategory = (category: string): Product[] => {
  return products[category] || [];
};

export const getFeaturedProducts = (): Product[] => {
  return Object.values(products)
    .flat()
    .filter(product => product.featured);
};