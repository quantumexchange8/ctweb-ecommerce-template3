import { useEffect } from 'react';
import Head from 'next/head';
import Layout from 'containers/layout/layout';
import HeroBlock from 'containers/hero-block';
import HowItWorks from 'containers/how-it-works';
import Products from 'containers/products';
import InstagramReview from 'containers/instagram-review';
import { useRefScroll } from 'helpers/use-ref-scroll';
import { useSearch } from 'contexts/search/use-search';
import { getProducts } from 'helpers/get-products';

export default function Home({  }) {
  const { elRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -100,
  });
  const { searchTerm } = useSearch();
  useEffect(() => {
    if (searchTerm) {
      scroll();
    }
  }, [scroll, searchTerm]);

  const products = [
    {
      id: 1,
      name: "Trueplus Fibre Food Supplement 90 Tablets",
      image: "/images/products/product1.jpg",
      description: " ",
      price: "2.5",
      manufacturer: "Trividia",
      type: "Tablet",
      quantity: "90 ",
      dosage: "as per doctor advice",
      substance: "Anti-caking agent (Sorbitol), Gum Acacia, Resistant Maltodextrin, "
    },
    {
      id: 2,
      name: "The Tone Capsules",
      image: "/images/products/product2.jpg",
      description: " ",
      price: "25",
      manufacturer: "Innermost",
      type: "Capsule",
      quantity: "120",
      dosage: "ake 2 capsules each morning and 2 capsules each afternoon with water.",
      substance: "Matcha Green Tea, Yerba Mate, Alpha Lipoic Acid"
    },
    {
      id: 3,
      name: "Sergical Mask",
      image: "/images/products/product3.jpg",
      description: " ",
      price: "1.5",
      manufacturer: "China",
      type: "Mask",
      quantity: "1",
      dosage: "As per need",
      substance: "cloth"
    },
    {
      id: 4,
      name: "Syringe",
      image: "/images/products/product4.jpg",
      description: "A syringe is a simple reciprocating pump consisting of a plunger (though in modern syringes, it is actually a piston) that fits tightly within a cylindrical tube called a barrel.",
      price: "0.99",
      manufacturer: "Scott",
      type: "Glass",
      quantity: "1",
      dosage: "as per need",
      substance: "glass or plastic"
    },
    {
      id: 5,
      name: "The Relax Capsules",
      image: "/images/products/product5.jpg",
      description: "Life can be stressful, and stress can cause all sorts of issues. These nootropic capsules contain research-backed ingredients that help reduce stress, promote relaxation and help you get a great night's sleep. Get some more chill in your life.",
      price: "25",
      manufacturer: "Innermost",
      type: "Capsule",
      quantity: "120",
      dosage: "ake 2 capsules each morning and 2 capsules each afternoon with water.",
      substance: "L-Tyrosine, 5-HTP"
    },
    {
      id: 6,
      name: "PerioBiotic Toothpaste",
      image: "/images/products/product6.jpg",
      description: "Flouride-free, great tasting toothpaste with probiotics for optimal oral health, starting with teeth and gums.",
      price: "3",
      manufacturer: "Periobiotic",
      type: "Paste",
      quantity: "1",
      dosage: "At least twice",
      substance: "Water, Calcium glycerophosphate, Xylitol"
    }
  ];
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="Put your description here." />
        <title>e-Commerce Templete</title>
      </Head>

      <HeroBlock />
      <HowItWorks />
      <Products items={products} ref={elRef} />
      <InstagramReview />
    </Layout>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
}
