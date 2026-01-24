import Image from 'next/image';

const complianceLogos = [
  { src: '/logos/iso.png', alt: 'ISO 27001' },
  { src: '/logos/gdpr.png', alt: 'GDPR Compliant' },
  { src: '/logos/soc2.png', alt: 'SOC 2 Type II' },
  { src: '/logos/aicpa.png', alt: 'AICPA' },
  { src: '/logos/pipeda.png', alt: 'PIPEDA' },
  { src: '/logos/coppa.png', alt: 'COPPA' },
];

export default function ComplianceSection() {
  return (
    <section className="bg-[#0a0a0b] text-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        
        {/* Left Side: Heading */}
        <div className="md:w-1/3">
          <h2 className="text-3xl font-semibold leading-tight">
            Safety & <br /> Compliance
          </h2>
        </div>

        {/* Right Side: Logos Grid */}
        <div className="md:w-2/3 flex flex-wrap gap-8 items-center">
          {complianceLogos.map((logo, index) => (
            <div 
              key={index} 
              className="relative w-24 h-24 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}