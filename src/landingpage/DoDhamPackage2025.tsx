import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronDown, Phone, Mail, MapPin, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeadPopup from '../components/common/LeadPopup';
import Logo from '../components/common/Logo';
import StickyContact from '../components/common/StickyContact';
import { logPageView, trackInteraction, trackFormSubmission } from '../utils/analytics';

interface ItineraryDay {
	day: number;
	title: string;
	details: string;
	activities: string[];
	icon: string;
	stays: string;
	meals: {
		breakfast: boolean;
		lunch: boolean;
		dinner: boolean;
	};
}

const highlights = [
	{
		title: 'Divine Journey',
		description: 'Visit the sacred Kedarnath & Badrinath temples with expert guides',
		icon: '🕉️',
	},
	{
		title: 'Comfortable Stay',
		description: 'Quality hotels and deluxe camps with modern amenities',
		icon: '🏨',
	},
	{
		title: 'Safe Travel',
		description: 'Experienced drivers and well-maintained vehicles',
		icon: '🚗',
	},
	{
		title: 'All-Inclusive',
		description: 'Accommodations, meals, and transfers included',
		icon: '✨',
	},
];

const itinerary: ItineraryDay[] = [	{
		day: 1,
		title: "Delhi to Haridwar - The Holy Gateway",
		details: "Begin your sacred journey from Delhi to Haridwar, the gateway to the divine Himalayas.",
		activities: [
			'Pick up from Delhi',
			'Drive to Haridwar (220 km/6 hrs)',
			'Evening Ganga Aarti at Har Ki Pauri',
			'Dinner and overnight stay in Haridwar',
		],
		icon: '�',
		stays: 'Hotel Godwin or similar',
		meals: { breakfast: false, lunch: true, dinner: true },
	},
	{
		day: 2,
		title: 'Haridwar to Guptkashi',
		details: 'Travel through scenic mountain roads to Guptkashi, the base for Kedarnath.',
		activities: [
			'Early morning departure for Guptkashi',
			'Visit Devprayag en route',
			'Evening aarti at Kashi Vishwanath Temple',
			'Prepare for Kedarnath trek',
		],
		icon: '⛰️',
		stays: 'Hotel Krishna or similar',
		meals: { breakfast: true, lunch: true, dinner: true },
	},
	{
		day: 3,
		title: 'Guptkashi to Kedarnath',
		details: 'Trek to the divine Kedarnath Temple, one of the holiest shrines of Lord Shiva.',
		activities: [
			'Drive to Sonprayag',
			'Trek to Kedarnath (16 km)',
			'Evening darshan at Kedarnath Temple',
			'Overnight stay in Kedarnath',
		],
		icon: '�️',
		stays: 'Tourist Rest House or similar',
		meals: { breakfast: true, lunch: true, dinner: true },
	},
	{
		day: 4,
		title: 'Kedarnath to Badrinath',
		details: 'Early morning darshan at Kedarnath, then journey to Badrinath via Joshimath.',
		activities: [
			'Morning aarti at Kedarnath Temple',
			'Trek down to Sonprayag',
			'Drive to Badrinath',
			'Evening rest and preparation',
		],
		icon: '⛰️',
		stays: 'Hotel in Badrinath',
		meals: { breakfast: true, lunch: true, dinner: true },
	},	{
		day: 5,
		title: 'Badrinath Temple Visit',
		details: 'Full day dedicated to Badrinath darshan and nearby holy sites.',
		activities: [
			'Early morning darshan at Badrinath Temple',
			'Visit Mana Village - Last Indian Village',
			'Visit Vyas Gufa and Ganesh Gufa',
			'Evening aarti at Badrinath Temple',
		],
		icon: '🛕',
		stays: 'Hotel Narayan Palace or similar',
		meals: { breakfast: true, lunch: true, dinner: true },
	},
	{
		day: 6,
		title: 'Badrinath to Delhi',
		details: 'Return journey to Delhi via Rishikesh, concluding your spiritual journey.',
		activities: [
			'Early morning departure',
			'Visit Rishikesh en route',
			'Evening arrival in Delhi',
			'Tour conclusion',
		],
		icon: '🏁',
		stays: 'None',
		meals: { breakfast: true, lunch: true, dinner: false },
	},
];

const testimonials = [
	{
		name: 'Amit Patel',
		location: 'Gujarat, India',
		review: 'A spiritual journey beyond expectations. The arrangements were perfect, and the guides made sure we had a comfortable darshan.',
		rating: 5,
	},
	{
		name: 'Meera Sharma',
		location: 'Delhi, India',
		review: 'The Do Dham package was excellent value for money. Safe travel and comfortable stays throughout the journey.',
		rating: 5,
	},
	{
		name: 'David Wilson',
		location: 'Australia',
		review: 'An incredible spiritual experience with great organization. The trek support was particularly helpful.',
		rating: 5,
	},
];

// Navigation has been moved to the main component render

const Footer = () => (
	<footer className="bg-gray-900 text-white py-12">
		<div className="container mx-auto px-4">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
				<div>					<Logo color="light" />
					<p className="mt-4 text-gray-400">
						Your trusted partner for divine journeys since 2010.
					</p>
				</div>
				<div>
					<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
					<ul className="space-y-2">
						<li>
							<Link
								to="/"
								className="text-gray-400 hover:text-white"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/packages"
								className="text-gray-400 hover:text-white"
							>
								Packages
							</Link>
						</li>
						<li>
							<Link
								to="/about"
								className="text-gray-400 hover:text-white"
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								className="text-gray-400 hover:text-white"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-lg font-semibold mb-4">Contact Info</h3>
					<ul className="space-y-2">
						<li className="flex items-center gap-2">
							<Phone className="w-4 h-4" />
							<span className="text-gray-400">+91 8178 880 934</span>
						</li>
						<li className="flex items-center gap-2">
							<Mail className="w-4 h-4" />
							<span className="text-gray-400">info@fasttripgo.com</span>
						</li>
						<li className="flex items-center gap-2">
							<MapPin className="w-4 h-4" />
							<span className="text-gray-400">New Delhi, India</span>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-lg font-semibold mb-4">Newsletter</h3>
					<p className="text-gray-400 mb-4">
						Subscribe for travel updates and special offers.
					</p>
					<div className="flex gap-2">
						<input
							type="email"
							placeholder="Your email"
							className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-1"
						/>
						<button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	</footer>
);

const CharDhamPackage2025: React.FC = () => {
	const [showForm, setShowForm] = useState(false);
	const [formType, setFormType] = useState<'itinerary' | 'booking'>('booking');

	useEffect(() => {
		// Track page view
		logPageView('/do-dham-yatra-2025', 'Do Dham Yatra 2025 Package');
	}, []);

	const handleShowForm = (type: 'itinerary' | 'booking') => {
		setFormType(type);
		setShowForm(true);
		
		// Track form open event
		trackInteraction(
			'Forms',
			'open_form',
			type === 'booking' ? 'Booking Form' : 'Itinerary Download'
		);
	};

	const handleFormSuccess = () => {
		// Track form submission success
		trackFormSubmission(
			formType === 'booking' ? 'Booking Form' : 'Itinerary Download',
			true
		);

		if (formType === 'itinerary') {
			const baseUrl = import.meta.env.BASE_URL || '/';
			window.open(`${baseUrl}api/download_itinerary.php`, '_blank');
		}
		setShowForm(false);
	};
	// Contact tracking is now handled by the StickyContact component

	return (
		<>
			<Helmet>				<title>
					Do Dham Yatra 2025 | Kedarnath & Badrinath Package
				</title>
				<meta
					name="description"
					content="Book your Do Dham Yatra 2025 package for Kedarnath & Badrinath with premium accommodations, expert guides, and all-inclusive services. Starting from ₹12,999 only!"
				/>

				{/* Additional SEO meta tags */}
				<meta property="og:title" content="Do Dham Yatra Package 2025 | Kedarnath & Badrinath" />
				<meta property="og:description" content="Book your Do Dham Yatra 2025 package for Kedarnath & Badrinath. Helicopter services, premium accommodations, and expert guidance available." />
				<meta property="og:image" content="/images/banners/do-dham-image-landingpage.jpg" />
				<meta name="twitter:card" content="summary_large_image" />
				
				{/* Schema markup for tour package */}
				<script type="application/ld+json">
					{`
						{
							"@context": "https://schema.org",
							"@type": "TravelAgency",
							"name": "FastTripGo",
							"offers": {
								"@type": "Offer",
								"name": "Do Dham Yatra Package 2025",
								"description": "Complete Do Dham pilgrimage package for Kedarnath and Badrinath temples",
								"price": "12999",
								"priceCurrency": "INR",
								"availability": "https://schema.org/InStock"
							}
						}
					`}
				</script>
			</Helmet>

			{/* Landing Page Header */}
			<header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
				<div className="container mx-auto px-4">
					<nav className="flex items-center justify-between h-16">
						<div className="flex items-center">
							<Logo color="dark" />
						</div>
						<div className="hidden md:flex items-center space-x-8">
							<a href="#highlights" className="text-gray-700 hover:text-primary-600">
								Highlights
							</a>
							<a href="#itinerary" className="text-gray-700 hover:text-primary-600">
								Itinerary
							</a>
							<a href="#reviews" className="text-gray-700 hover:text-primary-600">
								Reviews
							</a>
							<button
								onClick={() => handleShowForm('booking')}
								className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-600 transition-all transform hover:scale-105 shadow-lg"
							>
								Contact Us
							</button>
						</div>
					</nav>
				</div>
			</header>

			{/* Main Content */}
			<main className="min-h-screen bg-white pt-16">				{/* Hero Section */}
				<div className="relative h-[90vh] md:h-[85vh] min-h-[500px] md:min-h-[600px] overflow-hidden">
					{/* Background Image Container */}
					<div className="absolute inset-0">						{/* Responsive Background Image */}
						<div 
							className="absolute inset-0 bg-cover bg-[65%_center] md:bg-center scale-[1.2] md:scale-105 transition-transform duration-700"
							style={{
								backgroundImage: 'url(/images/banners/do-dham-image-landingpage.jpg)',
								willChange: 'transform',
								transformOrigin: 'center',
							}}
						></div>

						{/* Enhanced Gradient Overlays with better mobile optimization */}
						<div className="absolute inset-0">
							{/* Vertical gradient - Darker on mobile for better text contrast */}
							<div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90 md:from-black/70 md:via-black/30 md:to-black/70"></div>
							
							{/* Horizontal gradient - Helps with text readability on the sides */}
							<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 md:from-black/40 md:via-transparent md:to-black/40"></div>
						</div>
					</div>					{/* Content Container */}
					<div className="relative z-10 h-full flex items-center justify-center">
						<div className="container mx-auto px-4 py-8 md:py-12">
							<div className="max-w-4xl mx-auto text-center text-white space-y-6 md:space-y-8">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8 }}									className="inline-block mb-8 px-6 py-2 bg-white/10 backdrop-blur-sm border-2 border-primary-400 rounded-full"
								>
									<span className="text-primary-400 font-semibold tracking-wider">STARTING FROM </span>
									<span className="text-2xl font-bold text-white ml-2">₹12,999/-</span>
									<span className="text-primary-400 font-semibold tracking-wider ml-2">PER PERSON</span>
								</motion.div>
								<motion.h1
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8 }}
									className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/95 to-primary-200"
								>
									Do Dham Yatra 2025
								</motion.h1>
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.2 }}
									className="text-xl md:text-2xl mb-8 text-gray-200"
								>
									A divine journey to Kedarnath & Badrinath in 6 days
								</motion.p>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.4 }}
									className="flex flex-col md:flex-row gap-4 justify-center items-center"
								>
									<button
										onClick={() => handleShowForm('booking')}
										className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-600 transition-all transform hover:scale-105 shadow-lg"
									>
										Book Your Journey
									</button>
									<button
										onClick={() => handleShowForm('itinerary')}
										className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all transform hover:scale-105"
									>
										Download Detailed Itinerary
									</button>
								</motion.div>
							</div>
						</div>
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.2 }}
						className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
					>
						<ChevronDown className="w-10 h-10 text-white/70 animate-bounce" />
					</motion.div>
				</div>

				{/* Highlights Section */}
				<div className="py-20 bg-gray-50" id="highlights">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Package Highlights
							</h2>
							<p className="text-gray-600 text-lg">
								Experience a journey of comfort and divine blessing
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{highlights.map((highlight, index) => (
								<motion.div
									key={highlight.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="bg-white p-6 rounded-xl shadow-lg text-center"
								>
									<div className="text-4xl mb-4">{highlight.icon}</div>
									<h3 className="text-xl font-semibold mb-2">
										{highlight.title}
									</h3>
									<p className="text-gray-600">{highlight.description}</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>

				{/* Enhanced Itinerary Section */}
				<div id="itinerary" className="py-20">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
								Your Sacred Journey Itinerary
							</h2>
							<p className="text-gray-600 text-lg max-w-2xl mx-auto">
								A carefully crafted 12-day spiritual expedition to the four sacred dhams,
								with comfortable stays and expert guidance
							</p>
						</div>						<div className="max-w-5xl mx-auto relative">
							{itinerary.map((day, index) => (
								<motion.div
									key={day.day}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
								>
									<div className="flex gap-6">
										<div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-full flex items-center justify-center text-3xl border-2 border-primary-500/20 shadow-inner">
											{day.icon}
										</div>
										<div className="flex-1">
											<div className="flex items-center gap-3 mb-3">
												<span className="text-primary-600 font-medium px-3 py-1 bg-primary-50 rounded-full">
													Day {day.day}
												</span>
												<span className="h-1.5 w-1.5 bg-gray-300 rounded-full"></span>
												<h3 className="text-xl font-bold text-gray-900">
													{day.title}
												</h3>
											</div>
											<p className="text-gray-600 mb-6 leading-relaxed">
												{day.details}
											</p>

											<div className="grid md:grid-cols-2 gap-8">
												<div className="space-y-4">
													<h4 className="font-semibold flex items-center gap-2 text-primary-700">
														<Calendar className="w-5 h-5 text-primary-500" />
														Today's Activities
													</h4>
													<ul className="space-y-3">
														{day.activities.map((activity, i) => (
															<li key={i} className="flex items-start gap-3">
																<span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center text-primary-500">•</span>
																<span className="text-gray-600">{activity}</span>
															</li>
														))}
													</ul>
												</div>
												<div className="space-y-6">
													<div>
														<h4 className="font-semibold mb-3 flex items-center gap-2 text-primary-700">
															<MapPin className="w-5 h-5 text-primary-500" />
															Night Stay
														</h4>
														<p className="text-gray-600 bg-gray-50 p-3 rounded-lg">
															{day.stays}
														</p>
													</div>
													<div>
														<h4 className="font-semibold mb-3 flex items-center gap-2 text-primary-700">
															<Clock className="w-5 h-5 text-primary-500" />
															Included Meals
														</h4>
														<div className="flex gap-4">															{(['breakfast', 'dinner'] as const).map((meal) => (
																<div
																	key={meal}
																	className={`flex items-center gap-2 ${
																		day.meals[meal]
																			? 'text-green-600'
																			: 'text-gray-400'
																	}`}
																>
																	<span className={`w-4 h-4 rounded-full flex items-center justify-center ${
																		day.meals[meal] ? 'bg-green-100' : 'bg-gray-100'
																	}`}>
																		{day.meals[meal] ? '✓' : '×'}
																	</span>
																	<span className="capitalize">{meal}</span>
																</div>
															))}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>

				{/* Testimonials Section */}
				<div className="py-20 bg-gray-50" id="reviews">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Pilgrim Reviews
							</h2>
							<p className="text-gray-600 text-lg">
								What our blessed travelers say
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{testimonials.map((testimonial, index) => (
								<motion.div
									key={testimonial.name}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="bg-white p-6 rounded-xl shadow-lg"
								>
									<div className="flex gap-1 mb-4">
										{[...Array(testimonial.rating)].map((_, i) => (
											<span key={i} className="text-yellow-400">
												⭐
											</span>
										))}
									</div>
									<p className="text-gray-600 mb-4">
										"{testimonial.review}"
									</p>
									<div className="flex items-center gap-3">
										<div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-600">
											{testimonial.name[0]}
										</div>
										<div>
											<p className="font-semibold">{testimonial.name}</p>
											<p className="text-sm text-gray-500">
												{testimonial.location}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>

				{/* Quick Price Calculator */}
				<div className="py-16 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<div className="text-center mb-10">
								<h2 className="text-3xl md:text-4xl font-bold mb-4">
									Package Price
								</h2>
								<p className="text-gray-600 text-lg">
									All-inclusive premium package with comfortable stays and travel
								</p>
							</div>
							<div className="grid md:grid-cols-3 gap-6">
								<div className="bg-white p-6 rounded-xl shadow-lg border-2 border-primary-100 hover:border-primary-500 transition-all">
									<h3 className="text-xl font-semibold mb-2">Basic Package</h3>
									<div className="text-3xl font-bold text-primary-600 mb-4">
										₹12,999
										<span className="text-base font-normal text-gray-600">/person</span>
									</div>
									<ul className="space-y-2 text-gray-600">
										<li className="flex items-center gap-2">
											<span className="text-green-500">✓</span> Shared Room
										</li>
										<li className="flex items-center gap-2">
											<span className="text-green-500">✓</span> Local Transport
										</li>
										<li className="flex items-center gap-2">
											<span className="text-green-500">✓</span> Daily Breakfast & Dinner
										</li>
									</ul>
								</div>
								<div className="bg-gradient-to-br from-primary-500 to-primary-600 p-6 rounded-xl shadow-lg relative transform hover:scale-105 transition-all">
									<div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-primary-900 text-sm font-semibold px-4 py-1 rounded-full">
										Most Popular
									</div>
									<h3 className="text-xl font-semibold mb-2 text-white">Standard Package</h3>
									<div className="text-3xl font-bold text-white mb-4">
										₹17,999
										<span className="text-base font-normal text-primary-100">/person</span>
									</div>
									<ul className="space-y-2 text-primary-100">
										<li className="flex items-center gap-2">
											<span className="text-white">✓</span> Twin-sharing Room
										</li>
										<li className="flex items-center gap-2">
											<span className="text-white">✓</span> All Transport
										</li>
										<li className="flex items-center gap-2">
											<span className="text-white">✓</span> All Meals Included
										</li>
										<li className="flex items-center gap-2">
											<span className="text-white">✓</span> Guide Services
										</li>
									</ul>
								</div>
								<div className="bg-white p-6 rounded-xl shadow-lg border-2 border-primary-100 hover:border-primary-500 transition-all">
									<h3 className="text-xl font-semibold mb-2">Premium Package</h3>
									<div className="text-3xl font-bold text-primary-600 mb-4">
										₹22,999
										<span className="text-base font-normal text-gray-600">/person</span>
									</div>
									<ul className="space-y-2 text-gray-600">
										<li className="flex items-center gap-2">
											<span className="text-green-500">✓</span> Private Room
										</li>
										<li className="flex items-center gap-2">
											<span className="text-green-500">✓</span> Private Transport
										</li>
										<li className="flex items-center gap-2">
											<span className="text-green-500">✓</span> All Meals + Snacks
										</li>
										<li className="flex items-center gap-2">
											<span className="text-green-500">✓</span> Personal Guide
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Enhanced CTA Section */}
				<div className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white relative overflow-hidden">
					<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6bTAgMmMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6IiBmaWxsPSJjdXJyZW50Q29sb3IiIG9wYWNpdHk9Ii4zIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
					<div className="container mx-auto px-4 text-center relative z-10">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Begin Your Sacred Journey Today
						</h2>
						<p className="text-xl mb-8 text-primary-100">
							Secure your spot for the 2025 Do Dham Yatra to Kedarnath & Badrinath. Limited seats available.
						</p>
						<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
							<button
								onClick={() => handleShowForm('booking')}
								className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
							>
								Book Your Journey Now
							</button>
							<button
								onClick={() => handleShowForm('itinerary')}
								className="bg-primary-700/50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700/70 transition-all border border-white/20 backdrop-blur-sm"
							>
								Get Detailed Itinerary
							</button>
						</div>
						<div className="mt-8 text-primary-100 flex items-center justify-center gap-6">
							<div className="flex items-center gap-2">
								<Calendar className="w-5 h-5" />
								6 Days
							</div>
							<div className="flex items-center gap-2">
								<MapPin className="w-5 h-5" />
								2 Sacred Dhams
							</div>
							<div className="flex items-center gap-2">
								<Clock className="w-5 h-5" />
								Multiple Batches
							</div>
						</div>
					</div>
				</div>
			</main>			<Footer />			{/* Sticky Contact Buttons */}
			<StickyContact />

			{/* Lead Form Popup */}
			{showForm && (
				<LeadPopup
					onClose={() => setShowForm(false)}
					onSuccess={handleFormSuccess}
					formType={formType}
				/>
			)}
		</>
	);
};

export default CharDhamPackage2025;