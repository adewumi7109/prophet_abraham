import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, Users, Music, BookOpen, Heart, Phone, Sparkles } from 'lucide-react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Sunday Morning Service',
      time: '8:00 AM - 10:00 AM',
      day: 'Every Sunday',
      description: 'Start your week with powerful worship, anointed preaching, and prophetic ministry. Experience God\'s presence in a transformative atmosphere.',
      features: ['Praise & Worship', 'Children\'s Church', 'Biblical Teaching', 'Altar Call'],
      icon: Music,
      color: 'from-amber-400 to-amber-600'
    },
    {
      title: 'Sunday Second Service',
      time: '10:30 AM - 12:30 PM',
      day: 'Every Sunday',
      description: 'Join us for another powerful service filled with dynamic worship, life-changing messages, and personal ministry.',
      features: ['Contemporary Worship', 'Youth Participation', 'Prayer Ministry', 'Fellowship'],
      icon: Users,
      color: 'from-orange-400 to-orange-600'
    },
    {
      title: 'Wednesday Bible Study',
      time: '6:00 PM - 8:00 PM',
      day: 'Every Wednesday',
      description: 'Dive deeper into God\'s Word with our midweek Bible study. Interactive teaching that builds your faith and understanding.',
      features: ['In-depth Teaching', 'Q&A Session', 'Small Groups', 'Prayer Time'],
      icon: BookOpen,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Friday Prayer & Worship Night',
      time: '7:00 PM - 9:00 PM',
      day: 'Every Friday',
      description: 'End your week in God\'s presence with intense worship, prophetic intercession, and breakthrough prayer.',
      features: ['Worship & Praise', 'Corporate Prayer', 'Prophetic Ministry', 'Testimonies'],
      icon: Heart,
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const specialEvents = [
    {
      title: 'Monthly Prophetic Conference',
      frequency: 'First Friday of Every Month',
      description: 'Experience powerful prophetic ministry and receive personal prophetic words.',
      time: '7:00 PM'
    },
    {
      title: 'Quarterly Miracle Crusade',
      frequency: 'Every 3 Months',
      description: 'Witness the supernatural power of God through signs, wonders, and miracles.',
      time: 'Weekend Event'
    },
    {
      title: 'Annual Convention',
      frequency: 'Once a Year',
      description: 'Our biggest gathering featuring international guest speakers and intensive ministry.',
      time: '3-Day Event'
    },
    {
      title: 'Youth Empowerment Summit',
      frequency: 'Bi-Annually',
      description: 'Equipping and empowering the next generation with purpose and destiny.',
      time: '2-Day Event'
    }
  ];

  const whatToExpect = [
    {
      icon: Music,
      title: 'Powerful Worship',
      description: 'Soul-stirring music that ushers you into God\'s presence'
    },
    {
      icon: BookOpen,
      title: 'Anointed Teaching',
      description: 'Life-transforming messages from the Word of God'
    },
    {
      icon: Users,
      title: 'Warm Community',
      description: 'Welcoming atmosphere where everyone belongs'
    },
    {
      icon: Heart,
      title: 'Personal Ministry',
      description: 'Individual prayer and prophetic ministry available'
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
              Join Our Services
            </span>
          </div>
          <h1 className={`font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${isVisible ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
            Experience God's <span className="text-amber-400">Presence</span>
          </h1>
          <p className={`text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
            Join us for life-changing worship services, powerful biblical teaching, and a community 
            that feels like family. Everyone is welcome!
          </p>
          
          {/* Quick Info Cards */}
          <div className={`grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto ${isVisible ? 'animate-fadeInUp delay-300' : 'opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <MapPin className="text-amber-400 mx-auto mb-3" size={32} />
              <p className="text-sm text-slate-400">Location</p>
              <p className="font-semibold">123 Faith Avenue, Lagos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <Clock className="text-amber-400 mx-auto mb-3" size={32} />
              <p className="text-sm text-slate-400">Service Times</p>
              <p className="font-semibold">Sun: 8AM & 10:30AM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <Phone className="text-amber-400 mx-auto mb-3" size={32} />
              <p className="text-sm text-slate-400">Contact</p>
              <p className="font-semibold">+234 800 123 4567</p>
            </div>
          </div>
        </div>
      </section>

      {/* Regular Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm tracking-wider uppercase animate-fadeIn">Weekly Schedule</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4 animate-fadeInUp delay-100">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto animate-fadeInUp delay-200">
              Join us weekly for transformative worship and powerful teaching.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-50 to-amber-50/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover-lift border border-slate-200 animate-fadeInUp group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  <service.icon className="text-white group-hover:scale-125 transition-transform duration-300" size={28} />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-slate-800 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <div className="flex items-center space-x-4 mb-4 text-amber-700">
                  <div className="flex items-center space-x-2">
                    <Calendar size={18} />
                    <span className="text-sm font-semibold">{service.day}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={18} />
                    <span className="text-sm font-semibold">{service.time}</span>
                  </div>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-sm font-semibold text-slate-700 mb-3">What to Expect:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm tracking-wider uppercase animate-fadeIn">First Time?</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4 animate-fadeInUp delay-100">
              What to <span className="gradient-text">Expect</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto animate-fadeInUp delay-200">
              We can't wait to welcome you! Here's what you'll experience when you visit.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatToExpect.map((item, index) => (
              <div 
                key={index}
                className="text-center animate-fadeInUp hover-lift group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <item.icon className="text-white group-hover:scale-125 transition-transform duration-300" size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-800 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm tracking-wider uppercase animate-fadeIn">Mark Your Calendar</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4 animate-fadeInUp delay-100">
              Special <span className="gradient-text">Events</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto animate-fadeInUp delay-200">
              Join us for powerful special events throughout the year.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {specialEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift border border-amber-100 animate-fadeInUp group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start space-x-4">
                  <Sparkles className="text-amber-600 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300" size={28} />
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-800 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-amber-700 mb-3">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span className="text-sm font-semibold">{event.frequency}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span className="text-sm font-semibold">{event.time}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-600 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp">
            Ready to <span className="text-amber-400">Join Us?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed animate-fadeInUp delay-100">
            We'd love to see you this Sunday! Come as you are and experience the love of God.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-200">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Plan Your Visit
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
              Watch Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
