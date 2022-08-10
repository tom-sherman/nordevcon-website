export default function Hero({ children }) {
  return (
    <div className="bg-[#422D54] h-screen relative">
      <div className="
        absolute inset-0
        mix-blend-multiply bg-no-repeat bg-cover bg-fixed

        bg-[url('/hero/Hero__800_portrait.jpg')]
        sm:bg-[url('/hero/Hero__1080.jpg')]
        md:bg-[url('/hero/Hero__1200.jpg')]
        xl:bg-[url('/hero/Hero.jpg')]
      ">
      </div>
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
}