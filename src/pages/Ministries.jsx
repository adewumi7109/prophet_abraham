import React, { useEffect, useState } from 'react';
import { Users, Heart, Globe, BookOpen, Music, Baby, Briefcase, GraduationCap, Sparkles, Target, Star, Zap } from 'lucide-react';

export default function Ministries() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const ministries = [
    {
      title: 'Youth Ministry',
      subtitle: 'NextGen Impact',
      description: 'Empowering young people to discover their purpose and walk in their divine destiny. We provide mentorship, leadership training, and a vibrant community where youth can grow spiritually.',
      icon: Users,
      color: 'from-blue-400 to-blue-600',
      features: ['Weekly Youth Meetings', 'Leadership Development', 'Mentorship Programs', 'Annual Youth Conference'],
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop'
    },
    {
      title: 'Children Ministry',
      subtitle: 'Seeds of Faith',
      description: 'Building a strong foundation of faith in children through engaging Bible lessons, worship, and age-appropriate activities that make learning about God fun and memorable.',
      icon: Baby,
      color: 'from-pink-400 to-pink-600',
      features: ['Sunday School', 'Kids Worship', 'Bible Memory', 'Character Building'],
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop'
    },
    {
      title: 'Missions & Outreach',
      subtitle: 'Global Impact',
      description: 'Taking the Gospel beyond our walls to reach the unreached. We support missionaries worldwide and organize local outreach programs to share God\'s love in practical ways.',
      icon: Globe,
      color: 'from-green-400 to-green-600',
      features: ['International Missions', 'Local Evangelism', 'Humanitarian Aid', 'Mission Trips'],
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop'
    },
    {
      title: 'Prayer Network',
      subtitle: 'Power House',
      description: 'A dedicated team of intercessors committed to praying for the church, our nation, and personal prayer requests. Join us in moving mountains through prayer.',
      icon: Heart,
      color: 'from-purple-400 to-purple-600',
      features: ['24/7 Prayer Chain', 'Prayer Meetings', 'Fasting & Prayer', 'Prophetic Intercession'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
    },
    {
      title: 'Worship Ministry',
      subtitle: 'Sound of Heaven',
      description: 'Creating an atmosphere of worship that ushers people into God\'s presence. Our talented team of musicians and singers lead vibrant, Spirit-filled worship.',
      icon: Music,
      color: 'from-amber-400 to-amber-600',
      features: ['Choir & Musicians', 'Worship Training', 'Recording Studio', 'Special Events'],
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop'
    },
    {
      title: 'Community Care',
      subtitle: 'Love in Action',
      description: 'Demonstrating Christ\'s love through practical support for the less privileged. We provide food, clothing, education support, and other essential services.',
      icon: Heart,
      color: 'from-red-400 to-red-600',
      features: ['Food Bank', 'Clothing Drive', 'Educational Support', 'Medical Outreach'],
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop'
    },
    {
      title: 'Bible School',
      subtitle: 'Equipping Saints',
      description: 'Comprehensive biblical training and ministry preparation. Our curriculum covers theology, practical ministry skills, and spiritual formation.',
      icon: GraduationCap,
      color: 'from-indigo-400 to-indigo-600',
      features: ['Certificate Programs', 'Ministry Training', 'Online Courses', 'Guest Lecturers'],
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop'
    },
    {
      title: 'Marketplace Ministry',
      subtitle: 'Faith at Work',
      description: 'Empowering believers to integrate their faith in the workplace and business. We provide training, networking, and support for marketplace professionals.',
      icon: Briefcase,
      color: 'from-teal-400 to-teal-600',
      features: ['Business Network', 'Leadership Training', 'Marketplace Seminars', 'Entrepreneurship'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    }
  ];

  const impactStats = [
    { icon: Users, number: '5,000+', label: 'Active Members', color: 'text-blue-600' },
    { icon: Globe, number: '30+', label: 'Nations Reached', color: 'text-green-600' },
    { icon: Heart, number: '10,000+', label: 'Lives Impacted', color: 'text-red-600' },
    { icon: Star, number: '100+', label: 'Outreach Programs', color: 'text-amber-600' }
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
              Get Involved
            </span>
          </div>
          <h1 className={`font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${isVisible ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
            Our <span className="text-amber-400">Ministries</span>
          </h1>
          <p className={`text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
            Discover your place in the body of Christ. Whether you're called to serve, worship, teach, 
            or reach out, there's a ministry for you.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-fadeInUp hover-lift group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-slate-100 to-amber-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-2 border-amber-200`}>
                  <stat.icon className={`${stat.color} group-hover:scale-125 transition-transform duration-300`} size={28} />
                </div>
                <p className="font-serif text-3xl font-bold text-slate-800 animate-pulse">{stat.number}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-amber-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm tracking-wider uppercase animate-fadeIn">Find Your Calling</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4 animate-fadeInUp delay-100">
              Ministry <span className="gradient-text">Departments</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto animate-fadeInUp delay-200">
              Each ministry is a vital part of our mission to spread the Gospel and serve our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {ministries.map((ministry, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover-lift animate-fadeInUp group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={ministry.image} 
                    alt={ministry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${ministry.color} opacity-60 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <ministry.icon className="text-slate-800" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold mb-1 opacity-90">{ministry.subtitle}</p>
                    <h3 className="font-serif text-2xl font-bold">{ministry.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {ministry.description}
                  </p>
                  
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-sm font-semibold text-slate-700 mb-3">Key Activities:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {ministry.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Sparkles className="text-amber-600 flex-shrink-0" size={14} />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-slate-100 to-amber-50 text-slate-800 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 hover:text-white transition-all duration-300 group-hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-600 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-amber-400">Serve?</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                God has given you unique gifts and talents. Use them to make a difference in the 
                lives of others and experience the joy of serving.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Discover Your Gifts</h3>
                    <p className="text-slate-300 text-sm">Find out how God has uniquely equipped you to serve.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Get Training</h3>
                    <p className="text-slate-300 text-sm">Receive the support and training you need to excel.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Make an Impact</h3>
                    <p className="text-slate-300 text-sm">See lives transformed as you serve with passion and purpose.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 animate-slideInRight">
              <h3 className="font-serif text-2xl font-bold mb-6">Join a Ministry Today</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-amber-400 focus:bg-white/15 text-white placeholder-slate-400 transition-all duration-300"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-amber-400 focus:bg-white/15 text-white placeholder-slate-400 transition-all duration-300"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-amber-400 focus:bg-white/15 text-white placeholder-slate-400 transition-all duration-300"
                />
                <select 
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-amber-400 focus:bg-white/15 text-white transition-all duration-300"
                >
                  <option value="" className="text-slate-800">Select a Ministry</option>
                  {ministries.map((ministry, index) => (
                    <option key={index} value={ministry.title} className="text-slate-800">
                      {ministry.title}
                    </option>
                  ))}
                </select>
                <textarea 
                  rows="3" 
                  placeholder="Tell us about your interests and experience (optional)" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-amber-400 focus:bg-white/15 text-white placeholder-slate-400 resize-none transition-all duration-300"
                ></textarea>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-amber-700 hover:to-amber-800 transform hover:scale-105 transition-all duration-300">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
