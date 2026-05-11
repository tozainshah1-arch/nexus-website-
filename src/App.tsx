import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  Code, 
  Palette, 
  Layout, 
  TrendingUp, 
  Instagram, 
  Search, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X,
  Github,
  Twitter,
  Linkedin,
  Star,
  Users
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-display font-bold text-xl">
            N
          </div>
          <span className="font-display font-bold text-xl tracking-tighter uppercase">Nexus</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 border border-white/20 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass-dark border-t border-white/10 p-6 flex flex-col gap-4 md:hidden backdrop-blur-3xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold mt-2">
            Start a Project
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: y1 }}
          className="atmosphere-blue top-[-10%] right-[-10%]" 
        />
        <motion.div 
          style={{ y: y1 }}
          className="atmosphere-purple bottom-[-10%] left-[-10%]" 
        />
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070" 
          alt="Nexus Creative Hero" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-8"
        >
          <span className="inline-block px-4 py-1.5 glass rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            Pioneering digital excellence
          </span>
          <h1 className="text-6xl md:text-[100px] font-display font-bold leading-[0.9] mb-10 tracking-tighter uppercase">
            We Build <br />
            <span className="text-gradient">Creative</span> <br />
            Experiences
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-12 leading-relaxed font-light">
            Transforming brands through futuristic design, cutting-edge code, and digital growth strategies.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="group px-10 py-5 bg-white text-black rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-2xl shadow-blue-500/10">
              View Portfolio
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex -space-x-4 items-center pl-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-dark-bg bg-gray-600 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="Client" />
                </div>
              ))}
              <span className="pl-6 text-xs text-gray-500 font-bold uppercase tracking-widest">+50 Happy Clients</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '150+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Awards Won', value: '12' },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-blue-500 font-bold uppercase tracking-wider text-sm">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Crafting Digital Products with <span className="italic text-blue-400">Soul</span> & Innovation
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              At Nexus, we believe that every digital touchpoint is an opportunity to tell a story. We blend technical mastery with untamed creativity to help brands stand out in an overcrowded digital landscape.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
               Founded on the principles of precision and innovation, we've helped dozens of startups and enterprises transform their vision into award-winning reality.
            </p>
            
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <h3 className={`text-4xl font-display font-bold ${i === 0 ? 'text-blue-400' : i === 1 ? 'text-purple-400' : 'text-white'}`}>{stat.value}</h3>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest font-extrabold">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-4">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
                 alt="Team working" 
                 className="w-full h-full object-cover rounded-2xl"
                 referrerPolicy="no-referrer"
               />
            </div>
            {/* Overlay card */}
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-2xl hidden md:block max-w-[280px] shadow-2xl backdrop-blur-3xl">
              <div className="flex gap-4 items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Star className="text-white fill-white" size={20} />
                </div>
                <span className="font-bold text-sm">5.0 Client Rating</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed italic">
                "Nexus transformed our platform into a world-class experience. Their attention to detail is unmatched."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { 
      icon: <Palette className="text-blue-400" size={32} />, 
      title: 'Web Design', 
      desc: 'Bespoke, responsive websites that convert and capture your brand essence.' 
    },
    { 
      icon: <Layout className="text-purple-400" size={32} />, 
      title: 'UI/UX Design', 
      desc: 'User-centric interfaces designed for seamless interaction and delight.' 
    },
    { 
      icon: <Code className="text-pink-400" size={32} />, 
      title: 'Development', 
      desc: 'Clean, efficient code using the latest frameworks and technologies.' 
    },
    { 
      icon: <TrendingUp className="text-green-400" size={32} />, 
      title: 'Digital Marketing', 
      desc: 'Growth-focused strategies to elevate your brand presence and reach.' 
    },
    { 
      icon: <Users className="text-orange-400" size={32} />, 
      title: 'Social Media', 
      desc: 'Compelling content and community management across all platforms.' 
    },
    { 
      icon: <Search className="text-red-400" size={32} />, 
      title: 'SEO Strategy', 
      desc: 'Data-driven optimization to ensure you rank where your customers are.' 
    },
  ];

  return (
    <section id="services" className="py-32 bg-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-blue-500 font-bold uppercase tracking-wider text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Comprehensive Solutions for Modern Brands</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 group cursor-pointer hover:bg-white/10 transition-all duration-500 rounded-2xl relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`p-3 rounded-lg bg-opacity-10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                  i === 0 || i === 3 ? 'bg-blue-500 text-blue-400' : 
                  i === 1 || i === 4 ? 'bg-purple-500 text-purple-400' : 
                  'bg-pink-500 text-pink-400'
                }`}>
                  {s.icon}
                </div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-gray-600">0{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light mb-6">{s.desc}</p>
              <button className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                Explore Service <ArrowRight size={12} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { title: 'Lumiere Boutique', category: 'Branding', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000' },
    { title: 'Zenith App', category: 'UI/UX Design', img: 'https://images.unsplash.com/photo-1541462608141-ad60344d5c95?auto=format&fit=crop&q=80&w=2070' },
    { title: 'Abstract Studio', category: 'Web Design', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015' },
    { title: 'Oceanic Campaign', category: 'Marketing', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070' },
    { title: 'Titan Watches', category: 'Branding', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=2070' },
    { title: 'Flow Platform', category: 'Web Design', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=2070' },
  ];

  return (
    <section id="portfolio" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-xl">
            <span className="text-blue-400 font-bold uppercase tracking-wider text-sm mb-4 block">Selected Works</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">Showcasing Our Creative Journey</h2>
          </div>
          <div className="flex gap-4 scroll-hide overflow-x-auto w-full md:w-auto pb-4 md:pb-0">
             {['All', 'Web', 'Branding', 'UI/UX'].map(cat => (
               <button key={cat} className="px-6 py-2 glass rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-all whitespace-nowrap">
                 {cat}
               </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl aspect-square"
            >
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 backdrop-blur-[2px]">
                <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[9px] mb-2">{p.category}</span>
                <h3 className="text-2xl font-display font-bold text-white mb-6 tracking-tighter uppercase">{p.title}</h3>
                <button className="flex items-center gap-2 text-white font-bold p-3 bg-white/20 backdrop-blur-md rounded-xl w-fit hover:bg-white hover:text-black transition-all text-[10px] uppercase tracking-widest">
                  View Project <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { name: 'Sarah Jenkins', role: 'CEO, Lumiere', text: 'The creative approach Nexus takes is truly unique. They didn\'t just build a website; they built a brand experience that our clients love.' },
    { name: 'Marcus Chen', role: 'Founder, Zenith', text: 'Working with the Nexus team was a breeze. They exceeded our expectations in every single metric, from design to execution.' },
    { name: 'Elena Rodriguez', role: 'Marketing Director, Flow', text: 'Innovative, professional, and visual stunning. Our conversion rate increased by 45% after the redesign and integration.' },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-transparent to-blue-600/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-display font-bold mb-20 italic">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass p-10 rounded-3xl relative backdrop-blur-3xl"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => <Star key={idx} size={14} className="text-blue-400 fill-blue-400" />)}
              </div>
              <p className="text-base italic text-gray-300 leading-relaxed mb-8 font-light">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                   <img src={`https://i.pravatar.cc/150?u=${i}`} alt={t.name} referrerPolicy="no-referrer" />
                </div>
                <div>
                   <h4 className="font-bold text-sm">{t.name}</h4>
                   <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const team = [
    { name: 'Ghazanfar Hussain', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2000' },
    { name: 'Sophia Miller', role: 'Lead UI/UX Designer', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=2000' },
    { name: 'Liam Wilson', role: 'Senior Developer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=2000' },
  ];

  return (
    <section id="team" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-purple-400 font-bold uppercase tracking-wider text-sm mb-4 block">The Creative Minds</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">Behind Every Digital Masterpiece</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-8 overflow-hidden rounded-[2rem] aspect-[3/4] glass">
                <img 
                  src={m.img} 
                  alt={m.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                   <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"><Twitter size={18}/></div>
                   <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"><Linkedin size={18}/></div>
                   <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"><Instagram size={18}/></div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1 tracking-tight">{m.name}</h3>
              <p className="text-gray-500 uppercase tracking-[0.3em] text-[9px] font-extrabold">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass p-10 md:p-20 rounded-[3rem] overflow-hidden relative border border-white/10 backdrop-blur-3xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] -z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 leading-[1.1] tracking-tighter">Ready to <br /><span className="text-gradient">Elevate</span> <br />Your Brand?</h2>
              <p className="text-gray-400 text-lg mb-12 font-light max-w-md">
                Have a project in mind or just want to chat about the latest digital trends? Get in touch with us today.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-blue-400 shadow-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-extrabold text-gray-500 mb-1">Email Us</p>
                    <a href="mailto:tozainshah1@gmail.com" className="text-lg md:text-xl font-bold hover:text-blue-400 transition-colors">tozainshah1@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-purple-400 shadow-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-extrabold text-gray-500 mb-1">Call Us</p>
                    <p className="text-lg md:text-xl font-bold">0317-1064669</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-pink-400 shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-extrabold text-gray-500 mb-1">Our Location</p>
                    <p className="text-lg md:text-xl font-bold italic">Global Creative Hub, Digital Avenue</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="glass p-8 md:p-12 rounded-[2.5rem] space-y-6 flex flex-col backdrop-blur-2xl border border-white/10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-extrabold text-blue-400 px-1">Name</label>
                  <input type="text" placeholder="Your full name" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-extrabold text-blue-400 px-1">Email</label>
                  <input type="email" placeholder="example@gmail.com" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10" />
                </div>
              </div>
              <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-extrabold text-blue-400 px-1">Subject</label>
                  <input type="text" placeholder="Project type, Inquiry, etc." className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10" />
              </div>
              <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-extrabold text-blue-400 px-1">Message</label>
                  <textarea rows={4} placeholder="Describe your project" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10 resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] active:scale-[0.98] transition-all text-white font-bold rounded-xl text-lg shadow-xl shadow-blue-600/30 font-display tracking-widest uppercase text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-8">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center font-display font-bold text-xl">N</div>
               <span className="font-display font-bold text-2xl tracking-tighter uppercase whitespace-nowrap">NEXUS</span>
             </div>
             <p className="text-gray-500 text-sm italic leading-relaxed">
               Creating high-end digital experiences for disruptive brands that want to dominate their markets.
             </p>
             <div className="flex gap-4">
                <div className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-all"><Twitter size={18} /></div>
                <div className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-all"><Linkedin size={18} /></div>
                <div className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-all"><Instagram size={18} /></div>
                <div className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-all"><Github size={18} /></div>
             </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-[10px] uppercase tracking-[0.3em] text-gray-400">Navigation</h4>
            <ul className="space-y-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
               <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
               <li><a href="#services" className="hover:text-blue-400 transition-colors">Our Services</a></li>
               <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
               <li><a href="#team" className="hover:text-blue-400 transition-colors">The Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-[10px] uppercase tracking-[0.3em] text-gray-400">Legal</h4>
            <ul className="space-y-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
               <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a></li>
               <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-bold mb-8 text-[10px] uppercase tracking-[0.3em] text-gray-400">Newsletter</h4>
            <p className="text-sm text-gray-500 font-bold tracking-tighter uppercase leading-tight">Stay updated with our latest thoughts and digital insights.</p>
            <div className="flex gap-2">
               <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-blue-500 w-full" />
               <button className="px-6 py-3 bg-white text-black font-bold rounded-lg text-xs hover:bg-blue-600 hover:text-white transition-all uppercase whitespace-nowrap tracking-wider">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
           <p>© 2026 Nexus Creative Agency. Designed with passion for perfection.</p>
           <div className="flex gap-8">
              <span className="hover:text-white cursor-help">Built for Excellence</span>
              <span className="hover:text-white cursor-help">Visual Index 01</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
