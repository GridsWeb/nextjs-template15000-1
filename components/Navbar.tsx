"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
            <div className="max-w-7xl mx-auto">
                <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold tracking-tighter">
                        Lumina<span className="text-[#2dd4bf]">.</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/#showcase" className="text-sm font-medium hover:text-[#2dd4bf] transition-colors">
                            Showcase
                        </Link>
                        <Link href="/#features" className="text-sm font-medium hover:text-[#2dd4bf] transition-colors">
                            Features
                        </Link>
                        <Link href="/#pricing" className="text-sm font-medium hover:text-[#2dd4bf] transition-colors">
                            Pricing
                        </Link>
                        <button className="bg-[#8b5cf6] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#7c4df5] transition-all hover:shadow-lg hover:shadow-[#8b5cf6]/25">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-20 left-6 right-6 md:hidden"
                >
                    <div className="glass rounded-2xl p-6 flex flex-col space-y-4">
                        <Link
                            href="/#showcase"
                            className="text-lg font-medium hover:text-[#2dd4bf] transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Showcase
                        </Link>
                        <Link
                            href="/#features"
                            className="text-lg font-medium hover:text-[#2dd4bf] transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="/#pricing"
                            className="text-lg font-medium hover:text-[#2dd4bf] transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Pricing
                        </Link>
                        <button className="bg-[#8b5cf6] text-white w-full py-3 rounded-xl font-bold mt-4 hover:bg-[#7c4df5] transition-colors">
                            Get Started
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}