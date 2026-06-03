    import Image from "next/image";

export default function Footer() {
    return (
<footer className="bg-slate-100 mt-20">
    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
          
     
        <div>
  <Image
    src="/logo.png"
    alt="Torido"
    width={180}
    height={60}
    className="mb-4"
  />

  <p className="text-slate-600">
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
            <p className="text-slate-600">WhatsApp: +94 781885192</p>
            <p className="text-slate-600 mt-2">Email: sales.torido@gmail.com</p>
          </div>
        </div>
      </footer>
    );
  }
