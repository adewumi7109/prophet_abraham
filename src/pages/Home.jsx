import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Mail, MapPin, Phone, Play, Quote, ChevronRight, Users, Heart, Sparkles, Star } from 'lucide-react';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { day: 'Sunday', time: '8:00 AM & 10:30 AM', type: 'Main Service' },
    { day: 'Wednesday', time: '6:00 PM', type: 'Bible Study' },
    { day: 'Friday', time: '7:00 PM', type: 'Prayer & Worship Night' }
  ];

  const testimonials = [
    {
      text: "Prophet Femi's ministry has transformed my life. His words carry divine wisdom and have brought healing to my family.",
      author: "Sister Grace Oluwole",
      location: "Lagos, Nigeria"
    },
    {
      text: "The prophetic insight and powerful teachings have strengthened my faith journey immeasurably.",
      author: "Brother Michael Adeyemi",
      location: "Abuja, Nigeria"
    },
    {
      text: "I've witnessed miracles and breakthrough in my life through the prayers and ministry of Prophet Femi Abraham.",
      author: "Sister Blessing Okonkwo",
      location: "Port Harcourt, Nigeria"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-amber-50/30 to-slate-100"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <Sparkles className="absolute top-20 left-20 text-amber-400/20 animate-pulse" size={24} />
          <Star className="absolute top-40 right-40 text-amber-500/20 animate-spin" size={20} style={{animationDuration: '10s'}} />
          <Sparkles className="absolute bottom-32 left-1/3 text-amber-400/20 animate-bounce" size={18} />
          <Star className="absolute bottom-40 right-1/4 text-amber-500/20 animate-pulse" size={22} />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            {/* Badge with animation */}
            <div className={`mb-6 inline-block ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
              <span className="px-6 py-2 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 rounded-full text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Welcome to Our Ministry
              </span>
            </div>
            
            {/* Main Heading with staggered animation */}
            <h1 className={`font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-slate-800 mb-6 leading-tight ${isVisible ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
              Prophet <span className="gradient-text animate-pulse">Femi Abraham</span>
            </h1>
            
            {/* Subtitle with decorative line */}
            <div className={`inline-block mb-8 relative ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
              <p className="font-serif text-2xl md:text-3xl text-slate-600 italic font-light">
                A Voice of Faith, Hope, and Divine Revelation
              </p>
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-20 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent animate-pulse"></div>
            </div>
            
            {/* Description */}
            <p className={`text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed ${isVisible ? 'animate-fadeInUp delay-300' : 'opacity-0'}`}>
              Experience transformative worship, powerful biblical teaching, and prophetic ministry 
              that impacts lives and communities across the nations.
            </p>
            
            {/* CTA Buttons with animations */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isVisible ? 'animate-fadeInUp delay-400' : 'opacity-0'}`}>
              <Link to="/services" className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 hover:from-amber-700 hover:to-amber-800 animate-pulse-glow">
                <span>Join Us This Sunday</span>
                <ChevronRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </Link>
              <button className="group px-8 py-4 bg-white text-amber-700 border-2 border-amber-600 rounded-full font-semibold shadow-lg hover:bg-amber-50 hover:border-amber-700 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <Play size={20} className="group-hover:scale-125 transition-transform duration-300" />
                <span>Watch Live</span>
              </button>
            </div>
            
            {/* Scroll Indicator */}
            <div className={`mt-16 ${isVisible ? 'animate-bounce' : 'opacity-0'}`}>
              <div className="w-6 h-10 border-2 border-amber-600 rounded-full mx-auto flex justify-center">
                <div className="w-1 h-3 bg-amber-600 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '50K+', label: 'Lives Touched' },
              { icon: MapPin, number: '30+', label: 'Nations Visited' },
              { icon: Heart, number: '100+', label: 'Outreaches' },
              { icon: Calendar, number: '25+', label: 'Years of Ministry' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fadeInUp hover-lift group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <stat.icon className="text-amber-700 group-hover:scale-125 transition-transform duration-300" size={28} />
                </div>
                <p className="font-serif text-3xl font-bold text-slate-800 animate-pulse">{stat.number}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Schedule */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-400 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-semibold text-sm tracking-wider uppercase animate-fadeIn">Join Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-4 animate-fadeInUp delay-100">Service Schedule</h2>
            <p className="text-slate-300 max-w-2xl mx-auto animate-fadeInUp delay-200">
              Experience the presence of God through worship, teaching, and fellowship
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="hover-lift bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center group cursor-pointer animate-fadeInUp hover:bg-white/20 hover:border-amber-400/50 transition-all duration-500"
                style={{animationDelay: `${(index + 3) * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-amber-500/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-pulse-glow">
                  <Calendar className="text-white group-hover:scale-125 transition-transform duration-300" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-amber-300 transition-colors duration-300">{service.day}</h3>
                <p className="text-amber-300 font-semibold mb-2 group-hover:text-amber-200 transition-colors duration-300">{service.time}</p>
                <p className="text-slate-300 text-sm group-hover:text-white transition-colors duration-300">{service.type}</p>
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-slate-50 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm tracking-wider uppercase animate-fadeIn">Testimonies</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mt-3 animate-fadeInUp delay-100">
              Lives <span className="gradient-text">Transformed</span>
            </h2>
          </div>
          <div className="relative">
            <div 
              key={activeTestimonial} 
              className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 animate-scaleIn hover:shadow-amber-500/10 transition-all duration-500 border border-amber-100/50"
            >
              <Quote className="text-amber-400 mb-6 animate-pulse" size={48} />
              <p className="font-serif text-2xl text-slate-700 mb-8 leading-relaxed italic animate-fadeInUp delay-100">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div className="flex items-center animate-fadeInUp delay-200">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mr-4 animate-pulse"></div>
                <div>
                  <p className="font-bold text-slate-800">{testimonials[activeTestimonial].author}</p>
                  <p className="text-sm text-slate-500">{testimonials[activeTestimonial].location}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-3 rounded-full transition-all duration-500 hover:scale-125 ${
                    index === activeTestimonial 
                      ? 'bg-amber-600 w-8 shadow-lg shadow-amber-600/50' 
                      : 'bg-slate-300 w-3 hover:bg-amber-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-600 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp">
            Get in <span className="text-amber-400">Touch</span>
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto animate-fadeInUp delay-100">
            We would love to hear from you. Whether you need prayer, want to join our ministry, 
            or have questions, feel free to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp delay-200">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-400">Call Us</p>
                <p className="font-semibold">+234 800 123 4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-400">Email Us</p>
                <p className="font-semibold">info@prophetfemi.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
