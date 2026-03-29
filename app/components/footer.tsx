export default function Footer() {
    return (
      <footer className="bg-slate-100 border-t mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
          
          <div>
            <h3 className="font-semibold text-lg">Torido</h3>
            <p className="mt-3 text-slate-600">
              Premium cotton kidswear designed for comfort and play.
            </p>
          </div>
  
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-slate-600">
              <li>Delivery Info</li>
              <li>Returns</li>
              <li>Size Guide</li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-slate-600">WhatsApp: +94 76 973 7089</p>
            <p className="text-slate-600 mt-2">Email: senayabandara@gmail.com</p>
          </div>
        </div>
      </footer>
    );
  }