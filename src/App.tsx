import { motion } from 'motion/react';
import { Star, ShieldCheck, Droplets, Clock, ArrowRight, ShoppingBag, Menu } from 'lucide-react';
import heroImage from './assets/images/hero_model_1779535335394.png';
import productImage from './assets/images/product_tube_1779535351699.png';
import benefitsImage from './assets/images/model_closeup_1779535372421.png';
import lifestyleImage from './assets/images/lifestyle_flatlay_1779535387423.png';
import swatchesImage from './assets/images/makeup_swatches_1779535402884.png';

function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 bg-sanaa-cream/80 backdrop-blur-md border-b border-sanaa-pink-200"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button className="lg:hidden text-sanaa-charcoal">
          <Menu size={24} />
        </button>
        <div className="hidden lg:flex gap-8 text-sm font-medium tracking-wide">
          <a href="#products" className="hover:text-sanaa-gold transition-colors">SHOP ALL</a>
          <a href="#about" className="hover:text-sanaa-gold transition-colors">OUR STORY</a>
        </div>
        <div className="text-3xl font-serif tracking-tight font-medium text-sanaa-charcoal">
          Sanaa
        </div>
        <div className="flex gap-6 items-center">
          <button className="text-sm font-medium hidden md:block hover:text-sanaa-gold transition-colors">ACCOUNT</button>
          <button className="flex items-center gap-2 hover:opacity-75 transition-opacity">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="text-sm bg-sanaa-pink-300 text-sanaa-charcoal w-5 h-5 flex items-center justify-center rounded-full">0</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-sanaa-pink-50">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Model with glowing skin" 
          className="w-full h-full object-cover object-[70%_30%] opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sanaa-pink-50 via-sanaa-pink-50/80 to-transparent lg:w-2/3"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-xl"
        >
          <span className="uppercase tracking-[0.2em] text-sanaa-gold text-sm font-medium mb-4 block">
            The New Standard
          </span>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6 text-sanaa-charcoal">
            Flawless <br/> Radiant Finish.
          </h1>
          <p className="text-lg md:text-xl text-sanaa-charcoal/80 mb-10 font-light max-w-md">
            Weightless coverage that blurs imperfections and illuminates your natural beauty instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-sanaa-charcoal text-white px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-sanaa-gold transition-colors flex items-center justify-center gap-2">
              Shop Foundation <ArrowRight size={16} />
            </button>
            <button className="border border-sanaa-charcoal text-sanaa-charcoal px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-sanaa-pink-100 transition-colors">
              Find Your Shade
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureProduct() {
  return (
    <section className="py-24 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-[4/5] bg-sanaa-pink-50 overflow-hidden relative group">
              <img 
                src={productImage} 
                alt="Sanaa Liquid Foundation" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-xl w-48 hidden lg:block">
              <div className="flex items-center gap-1 text-sanaa-gold mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm font-serif italic text-sanaa-charcoal/80">
                "The most natural finish I've ever experienced."
              </p>
            </div>
          </motion.div>
          
          <div className="w-full md:w-1/2 xs:px-4">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-sanaa-charcoal">
              Luminous Silk Foundation
            </h2>
            <p className="text-lg text-sanaa-charcoal/70 font-light mb-10 leading-relaxed">
              Infused with hydrating skincare ingredients, this lightweight formula provides buildable, seamless coverage that lasts 16 hours without caking or creasing.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-sanaa-pink-100 p-3 rounded-full text-sanaa-pink-600">
                  <ShieldCheck size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Cruelty-Free</h4>
                  <p className="text-sm text-sanaa-charcoal/60">Never tested on animals, strictly vegan formula.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-sanaa-pink-100 p-3 rounded-full text-sanaa-pink-600">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">16H Wear</h4>
                  <p className="text-sm text-sanaa-charcoal/60">Long-lasting coverage that stays fresh all day.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-sanaa-pink-100 p-3 rounded-full text-sanaa-pink-600">
                  <Droplets size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Hydrating</h4>
                  <p className="text-sm text-sanaa-charcoal/60">Enriched with Hyaluronic Acid for all-day moisture.</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between border-t border-b border-sanaa-pink-200 py-6 mb-8">
              <div className="text-2xl font-serif">$48.00</div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#e8cbb8] border border-gray-300 cursor-pointer ring-2 ring-transparent hover:ring-sanaa-charcoal ring-offset-2 transition-all"></div>
                <div className="w-8 h-8 rounded-full bg-[#d2ab8f] border border-gray-300 cursor-pointer ring-2 ring-transparent hover:ring-sanaa-charcoal ring-offset-2 transition-all"></div>
                <div className="w-8 h-8 rounded-full bg-[#a87a5a] border border-gray-300 cursor-pointer ring-2 ring-sanaa-charcoal ring-offset-2 transition-all"></div>
                <div className="w-8 h-8 rounded-full bg-[#7a4f3b] border border-gray-300 cursor-pointer ring-2 ring-transparent hover:ring-sanaa-charcoal ring-offset-2 transition-all"></div>
                <span className="text-sm underline underline-offset-4 ml-2 cursor-pointer">40 Shades</span>
              </div>
            </div>
            
            <button className="w-full bg-sanaa-charcoal text-white py-4 uppercase tracking-widest text-sm font-semibold hover:bg-sanaa-gold transition-colors">
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-24 bg-sanaa-pink-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-sanaa-charcoal mb-4">Precision Engineered Beauty</h2>
          <p className="text-lg text-sanaa-charcoal/70 max-w-2xl mx-auto font-light">
            Every drop is designed to blend effortlessly with your natural skin tone.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl"
          >
            <img 
              src={benefitsImage} 
              alt="Model Face Close Up" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Benefit Annotations */}
          <div className="hidden md:block absolute top-[20%] left-[-10%] w-48 bg-white/90 backdrop-blur-sm p-4 shadow-lg border-l-2 border-sanaa-gold">
            <h4 className="font-semibold text-sm mb-1 uppercase tracking-wider">Seamless Blending</h4>
            <p className="text-xs text-sanaa-charcoal/70">Micro-pearls adapt to light for zero harsh lines.</p>
          </div>
          
          <div className="hidden md:block absolute bottom-[20%] left-10 w-48 bg-white/90 backdrop-blur-sm p-4 shadow-lg border-l-2 border-sanaa-gold">
            <h4 className="font-semibold text-sm mb-1 uppercase tracking-wider">Pore-Blurring</h4>
            <p className="text-xs text-sanaa-charcoal/70">Optical diffusers instantly smooth skin texture.</p>
          </div>
          
          <div className="hidden md:block absolute top-[40%] right-[-10%] w-48 bg-white/90 backdrop-blur-sm p-4 shadow-lg border-r-2 border-sanaa-gold text-right">
            <h4 className="font-semibold text-sm mb-1 uppercase tracking-wider">Luminous Glow</h4>
            <p className="text-xs text-sanaa-charcoal/70">A radiant finish that mimics healthy, hydrated skin.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LifestyleAndTutorial() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="uppercase tracking-[0.2em] text-sanaa-gold text-xs font-medium mb-4 block">
              The Routine
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-sanaa-charcoal mb-8">
              Effortless Application
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-6">
                <div className="text-4xl font-serif text-sanaa-pink-300 italic">01</div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Prep</h4>
                  <p className="text-sanaa-charcoal/70 font-light leading-relaxed">Ensure skin is clean and moisturized. Apply a small amount of primer focusing on the T-zone.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-serif text-sanaa-pink-300 italic">02</div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Apply</h4>
                  <p className="text-sanaa-charcoal/70 font-light leading-relaxed">Press 1-2 pumps onto the back of your hand. Use a damp sponge or dense brush to dot onto face.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-serif text-sanaa-pink-300 italic">03</div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Blend</h4>
                  <p className="text-sanaa-charcoal/70 font-light leading-relaxed">Blend outward from the center of the face. Build coverage where needed by tapping, not rubbing.</p>
                </div>
              </div>
            </div>
            <img 
              src={swatchesImage} 
              alt="Foundation Swatches" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[3/4]"
          >
            <img 
              src={lifestyleImage} 
              alt="Aesthetic lifestyle flat lay" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    {
      name: "Chloe M.",
      verified: true,
      rating: 5,
      title: "My new holy grail",
      text: "I've tried dozens of foundations and nothing compares to this. It literally looks like my skin but perfect. Doesn't break me out either."
    },
    {
      name: "Sarah T.",
      verified: true,
      rating: 5,
      title: "Worth every penny",
      text: "The glow this gives is unbelievable. I get compliments on my skin every single time I wear it. Blends like an absolute dream."
    },
    {
      name: "Elena R.",
      verified: true,
      rating: 5,
      title: "Perfect match",
      text: "Finally a brand that understands undertones! Shade 240 is my exact match. It stays put through my 12 hour nursing shifts."
    }
  ];

  return (
    <section className="py-24 bg-sanaa-pink-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-serif text-sanaa-charcoal mb-4">Loved by our community</h2>
            <div className="flex items-center gap-4">
              <div className="flex text-sanaa-gold">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="text-sm font-medium">4.9 / 5.0 (2,450 Reviews)</span>
            </div>
          </div>
          <button className="text-sm font-medium border-b border-sanaa-charcoal pb-1 hover:text-sanaa-gold hover:border-sanaa-gold transition-colors">
            Read all reviews
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 border border-sanaa-pink-200">
              <div className="flex text-sanaa-gold mb-4">
                {[...Array(review.rating)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
              </div>
              <h4 className="font-semibold mb-3">"{review.title}"</h4>
              <p className="text-sanaa-charcoal/70 text-sm leading-relaxed mb-6 italic">
                {review.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sanaa-pink-200 flex items-center justify-center text-xs font-medium font-serif">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-semibold">{review.name}</p>
                  <p className="text-[10px] text-sanaa-charcoal/50 uppercase tracking-wider">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-sanaa-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-3xl font-serif font-medium mb-6">Sanaa</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Elevating everyday beauty with consciously crafted, high-performance essentials.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Shop</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Face</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Eyes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sets</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">About</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ingredients</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Stay Connected</h4>
            <p className="text-white/70 text-sm mb-4">Join our newsletter for exclusive offers and launches.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-b border-white/30 py-2 w-full text-sm outline-none focus:border-white transition-colors text-white"
              />
              <button className="border-b border-white/30 py-2 px-2 hover:border-white transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>&copy; 2026 Sanaa Makeup. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-sanaa-cream font-sans text-sanaa-charcoal selection:bg-sanaa-pink-200">
      <Header />
      <main>
        <HeroSection />
        <FeatureProduct />
        <BenefitsSection />
        <LifestyleAndTutorial />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}

