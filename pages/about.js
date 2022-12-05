export default function About() {
  return (
    <>
      <div className="h-screen w-full bg-about bg-cover bg-center flex items-center justify-center">
        <h1 className="text-primary text-8xl 2xl:text-super">About Us</h1>
      </div>
      <div className="h-screen w-full bg-slate-300 flex items-center justify-center px-52">
        <h1 className="text-secondary text-center text-6xl 2xl:text-8xl">We bring you digital goods and services at your fingertips!</h1>
      </div>
      <div className="h-screen w-full bg-orange-300 flex items-center justify-center px-52">
        <h1 className="text-secondary text-center text-6xl 2xl:text-8xl">Our humble beginnings started in our small office at Pasig City.</h1>
      </div>
    </>
  );
}
