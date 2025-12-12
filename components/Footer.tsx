export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 mt-20">
            <div className="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-bold tracking-tighter mb-2">
                        Lumina<span className="text-accent">.</span>
                    </h2>
                    <p className="text-muted-foreground text-sm">
                        Crafting the future of the web, one pixel at a time.
                    </p>
                </div>
                <div className="flex space-x-6 text-sm text-muted-foreground">
                    <a href="#" className="hover:text-foreground transition-colors">
                        Privacy
                    </a>
                    <a href="#" className="hover:text-foreground transition-colors">
                        Terms
                    </a>
                    <a href="#" className="hover:text-foreground transition-colors">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
}
