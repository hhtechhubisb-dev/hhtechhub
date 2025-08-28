import { MapPin, Building2, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import { Listbox } from "@headlessui/react";
import React, { useState } from "react";
import { supabase } from "../config/supabaseClient";

const ContactPage = () => {
    const contactItems = [
        {
            icon: MapPin,
            label: "Address",
            value: "HH Tech Hub B-Block Block B Satellite Town, Rawalpindi, Pakistan",
            link: "https://www.google.com/maps/place/B-Block+Block+B+Satellite+Town,+Rawalpindi/@33.6306,73.0701,17z/data=!4m6!3m5!1s0x38df94df24193991:0x3021e0b2e8695afd!8m2!3d33.6362146!4d73.0685665!16s%2Fg%2F1tj2g7ww?hl=en&entry=ttu"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+92-3350757780",
            link: "tel:+15551234567"
        },
        {
            icon: Mail,
            label: "Email",
            value: "Huzaifaejaz@hhtech.com",
            link: "https://mail.google.com/mail/?view=cm&fs=1&to=Huzaifaejaz@hhtech.com"
        },
        {
            icon: Clock,
            label: "Business Hours",
            value: "Mon - Sat: 11:00 AM - 8:30 PM\nSun: Closed",
            link: null
        }
    ];

    const countries = [
        { name: "Pakistan", code: "+92", flag: "https://flagcdn.com/pk.svg" },
        { name: "United States", code: "+1", flag: "https://flagcdn.com/us.svg" },
        { name: "United Kingdom", code: "+44", flag: "https://flagcdn.com/gb.svg" },
        { name: "UAE", code: "+971", flag: "https://flagcdn.com/ae.svg" }
    ];

    const [selected, setSelected] = useState(countries[0]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase.from("contact_messages").insert({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            country_code: selected.code,
            subject: formData.subject,
            message: formData.message
        });

        setLoading(false);

        if (error) {
            console.error("Error inserting message:", error.message);
            alert("Something went wrong. Please try again.");
        } else {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-2">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-orange-500 to-amber-600 text-white py-20 px-6 rounded-3xl mb-16 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48 animate-[float_8s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-[scale-in_0.5s_ease-out]">
                        <Building2 className="h-4 w-4" />
                        <span className="text-sm font-medium">HHT Tech Hub</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-[fade-in_1s_ease-out]">Contact Us</h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-[slide-up_1s_ease-out]">Let's build something amazing together. Get in touch with our team of experts.</p>
                    <div className="inline-flex items-center space-x-2 text-white/80 animate-[slide-up_1s_ease-out]">
                        <MapPin className="h-5 w-5" />
                        <span className="text-lg">Rawalpindi, Pakistan</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a message</h2>
                        <p className="text-gray-600">Fill out the form and our team will get back to you within 24 hours.</p>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all bg-white/50 backdrop-blur-sm" 
                                    placeholder="Your name" 
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all bg-white/50 backdrop-blur-sm" 
                                    placeholder="your.email@example.com" 
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <Listbox value={selected} onChange={setSelected}>
                                <div className="relative flex items-center">
                                    <Listbox.Button className="flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-l-lg bg-white/50 backdrop-blur-sm hover:bg-white transition-all">
                                        <img src={selected.flag} alt="" className="w-5 h-5 rounded-sm" />
                                        <span className="text-gray-700">{selected.code}</span>
                                        <ChevronDown className="h-4 w-4 text-gray-400" />
                                    </Listbox.Button>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 rounded-r-lg border-t border-r border-b border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white/50 backdrop-blur-sm"
                                        placeholder="3123456789"
                                        required
                                    />
                                    <Listbox.Options className="absolute z-10 mt-1 w-full max-h-60 overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                                        {countries.map((country) => (
                                            <Listbox.Option
                                                key={country.code}
                                                value={country}
                                                className={({ active }) => `flex items-center gap-2 px-4 py-2 cursor-pointer ${active ? 'bg-orange-100 text-orange-700' : 'text-gray-900'}`}
                                            >
                                                <img src={country.flag} alt="" className="w-5 h-5 rounded-sm" />
                                                <span className="block truncate">{country.name} ({country.code})</span>
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </div>
                            </Listbox>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                value={formData.subject} 
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })} 
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all bg-white/50 backdrop-blur-sm" 
                                placeholder="How can we help?" 
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                value={formData.message} 
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                                rows={5} 
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all bg-white/50 backdrop-blur-sm" 
                                placeholder="Tell us about your project..."
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white font-medium py-3 px-6 rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-6 animate-[fade-in_1s_ease-out]">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in touch</h2>
                        <p className="text-gray-600">Ready to start your next project? Our team is here to help you bring your vision to life.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        {contactItems.map((item, index) => (
                            <div 
                                key={index} 
                                className="p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100 rounded-xl group"
                            >
                                <a 
                                    href={item.link || undefined} 
                                    target={item.link?.startsWith('http') ? '_blank' : undefined} 
                                    rel={item.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="flex items-start space-x-4"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
                                            <item.icon className="h-5 w-5 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.label}</h3>
                                        <p className="text-gray-600 whitespace-pre-line">{item.value}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="p-8 bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-3">Need immediate assistance?</h3>
                            <p className="text-white/90 mb-6">Call us directly for urgent inquiries or technical support.</p>
                            <a 
                                href="tel:+15551234567" 
                                className="inline-flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02]"
                            >
                                <Phone className="h-5 w-5" />
                                <span className="font-medium"> (051) 0516-123024</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;