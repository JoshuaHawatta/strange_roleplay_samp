import HelloMessage from "./HelloMessage";

const Curtain = () => (
  <>
    <HelloMessage />
    <div className='fixed z-10 left-0 bg-cyan-700 opacity-70 h-screen w-2/4 animate-open-curtain md:block' />
    <div className='fixed z-10 right-0 bg-cyan-700 opacity-70 h-screen w-2/4 animate-open-curtain md:block' />
  </>
);

export default Curtain;
