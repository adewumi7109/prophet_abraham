import React, { useEffect, useState } from 'react';
import { BookOpen, Heart, Globe, Award, Users, Target, Zap, Shield } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      icon: Heart,
      title: 'Faith',
      description: 'Unwavering trust in God\'s word and His promises for His people.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building strong, supportive relationships within the body of Christ.'
    },
    {
      icon: Globe,
      title: 'Mission',
      description: 'Taking the Gospel to all nations, fulfilling the Great Commission.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Walking in truth, transparency, and righteousness at all times.'
    },
    {
      icon: Zap,
      title: 'Power',
      description: 'Operating in the supernatural power and gifts of the Holy Spirit.'
    },
    {
      icon: Target,
      title: 'Purpose',
      description: 'Helping individuals discover and fulfill their divine destiny.'
    }
  ];

  const timeline = [
    {
      year: '1999',
      title: 'The Beginning',
      description: 'Prophet Femi Abraham received his divine calling and began his ministry journey.'
    },
    {
      year: '2005',
      title: 'Ministry Establishment',
      description: 'Officially established Prophet Femi Abraham Ministries International with a small congregation.'
    },
    {
      year: '2012',
      title: 'International Expansion',
      description: 'Ministry expanded to multiple nations across Africa, Europe, and North America.'
    },
    {
      year: '2018',
      title: 'Media Ministry Launch',
      description: 'Launched television and online broadcast reaching millions globally.'
    },
    {
      year: '2024',
      title: 'Present Day',
      description: 'Continuing to impact lives worldwide through powerful prophetic ministry and teaching.'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-600 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className={`mb-6 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            <span className="px-6 py-2 bg-amber-600/20 backdrop-blur-sm text-amber-400 rounded-full text-sm font-semibold tracking-wide border border-amber-500/30">
              About Our Ministry
            </span>
          </div>
          <h1 className={`font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${isVisible ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
            Called to <span className="text-amber-400">Transform</span> Nations
          </h1>
          <p className={`text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
            A ministry founded on faith, powered by the Holy Spirit, and dedicated to bringing 
            God's love, healing, and transformation to people across the globe.
          </p>
        </div>
      </section>

      {/* Prophet's Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative bg-slate-800 rounded-2xl p-1 transform -rotate-1 group-hover:rotate-0 shadow-2xl transition-all duration-500 hover:shadow-amber-500/20">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop" 
                    alt="Prophet Femi Abraham"
                    className="rounded-2xl w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-xl group-hover:bg-white transition-all duration-300">
                    <p className="font-serif text-2xl font-bold text-amber-700 animate-pulse">25+ Years</p>
                    <p className="text-sm text-slate-600">Ministry Experience</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-400/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            <div className="animate-slideInRight">
              <div className="mb-4">
                <span className="text-amber-600 font-semibold text-sm tracking-wider uppercase">The Man of God</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Prophet Femi Abraham
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Prophet Femi Abraham is a man deeply rooted in the Word of God and passionate about 
                  seeing lives transformed through the power of the Gospel. Born and raised in Nigeria, 
                  he received his divine calling at a young age and has since dedicated his life to 
                  serving God and His people.
                </p>
                <p>
                  With over 25 years of ministry experience, Prophet Femi carries a powerful prophetic 
                  anointing that has brought healing, deliverance, and breakthrough to countless individuals. 
                  His ministry is characterized by accurate prophetic words, dynamic teaching, and a deep 
                  compassion for souls.
                </p>
                <p>
                  He holds multiple degrees in Theology and has been recognized internationally for his 
                  contribution to the body of Christ. Beyond the pulpit, he is a devoted husband, father, 
                  and mentor to many emerging ministers.
                </p>
                <p className="font-semibold text-amber-700 italic">
                  "My heart's desire is to see every believer walking in the fullness of their divine 
                  purpose and experiencing God's supernatural power in their daily lives."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm tracking-wider uppercase animate-fadeIn">What We Stand For</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4 animate-fadeInUp delay-100">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto animate-fadeInUp delay-200">
              These foundational principles guide everything we do as we serve God and His people.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover-lift group border border-slate-100 animate-fadeInUp"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <value.icon className="text-white group-hover:scale-125 transition-transform duration-300" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-800 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm tracking-wider uppercase animate-fadeIn">Our Journey</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4 animate-fadeInUp delay-100">
              Ministry <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto animate-fadeInUp delay-200">
              From humble beginnings to global impact - see how God has faithfully led us.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div 
                  key={index}
                  className={`relative animate-fadeInUp delay-${index * 100}`}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift border border-amber-100">
                        <div className="font-serif text-3xl font-bold text-amber-600 mb-2">{event.year}</div>
                        <h3 className="font-serif text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
                        <p className="text-slate-600">{event.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-600 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                    
                    <div className="w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-600 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slideInLeft">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 animate-pulse-glow">
                  <Target size={32} />
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4 text-amber-400">Our Mission</h3>
                <p className="text-slate-300 leading-relaxed">
                  To preach the uncompromising Word of God, demonstrate His power through signs and wonders, 
                  and raise a generation of believers who walk in divine purpose and authority. We are 
                  committed to equipping saints for the work of ministry and expanding God's kingdom on earth.
                </p>
              </div>
            </div>
            
            <div className="animate-slideInRight">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 animate-pulse-glow">
                  <Award size={32} />
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4 text-amber-400">Our Vision</h3>
                <p className="text-slate-300 leading-relaxed">
                  To see a world where every believer operates in their prophetic destiny, experiencing 
                  daily miracles, and advancing God's kingdom with boldness. We envision thriving 
                  communities of faith across all nations, united in purpose and demonstrating God's love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
