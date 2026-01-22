import React from "react";

const clientLogos = [
  "https://a.storyblok.com/f/231922/151x40/bbcc91c773/deloitte.svg",
  "https://a.storyblok.com/f/231922/204x40/2effd83370/bitdefender.svg",
  "https://a.storyblok.com/f/231922/199x40/3b277ccdc6/l-t.svg",
  "https://a.storyblok.com/f/231922/213x42/c7c79be89d/randstad-logo.png",
  "https://a.storyblok.com/f/231922/155x40/8d2951880a/pangea.svg",
  "https://a.storyblok.com/f/231922/206x40/a77c9f0375/geocaching.svg",
  "https://a.storyblok.com/f/231922/190x40/44120c4915/transmedics.svg",
  "https://a.storyblok.com/f/231922/117x40/54bac151ab/sploot.svg",
  "https://a.storyblok.com/f/231922/111x40/179db8c9f3/boatyard.svg",
  "https://a.storyblok.com/f/231922/134x40/25acebba5b/delivery.svg",
  "https://a.storyblok.com/f/231922/203x38/0e5b0f736b/no-broker.svg",
];

const ClientMarquee = () => {
  return (
    <section className="relative z-20 isolate overflow-visible group/clients">
      <div className="container mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10 xl:px-20 py-10">
        <div className="relative z-40 flex h-[136px] items-center justify-center">
          {/* Top & Bottom Gradient Lines */}
          <div
            className="absolute top-0 h-[2px] w-0 lg:w-[1312px] opacity-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(250, 250, 255, 0) 0%, rgb(250, 250, 255) 5%, rgb(250, 250, 255) 95%, rgba(250, 250, 255, 0) 100%)",
            }}
          />
          <div
            className="absolute bottom-0 h-[2px] w-0 lg:w-[1312px] opacity-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(250, 250, 255, 0) 0%, rgb(250, 250, 255) 5%, rgb(250, 250, 255) 95%, rgba(250, 250, 255, 0) 100%)",
            }}
          />

          {/* Client Logo Marquee */}
          <div className="relative flex h-full w-full items-center border border-b-0 border-l border-t-0 border-gray-500 bg-[#0A0914]">
            <div className="relative flex h-full max-w-[1100px] items-center justify-center overflow-hidden border-b border-t border-gray-500 lg:border-b-0 lg:border-t-0">
              {/* Left & Right Gradient Masks */}
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#0A0914]/100 to-transparent"></div>
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#0A0914]/100 to-transparent"></div>

              {/* Marquee Track */}
              <div className="flex animate-marquee items-center gap-8">
                {clientLogos.concat(clientLogos).map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className="h-10 object-contain px-3 grayscale"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
