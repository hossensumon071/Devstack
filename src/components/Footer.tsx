const groups = {
  Product: ["Home", "Technologies", "Projects"],
  Company: ["About", "Contact", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

const Footer = () => {
  return (
    <footer id="footer" className="border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <span className="bg-brand text-white text-xs font-bold w-8 h-8 rounded-lg flex items-center justify-center">DS</span>
            <span className="font-bold text-lg">Dev <span className="text-brand">Stack</span></span>
          </div>
          <p className="mt-3 text-sm text-gray-500 max-w-sm mx-auto md:mx-0">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="mt-4 flex gap-4 text-sm font-medium justify-center md:justify-start">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        {Object.entries(groups).map(([title, items]) => (
          <div key={title} className="text-center md:text-left">
            <h4 className="text-xs font-bold tracking-wider uppercase">{title}</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              {items.map((i) => <li key={i}><a href="#" className="hover:text-pink-600">{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-4"><a href="#">Privacy</a><a href="#">Terms</a></div>
      </div>
    </footer>
  );
};

export default Footer;