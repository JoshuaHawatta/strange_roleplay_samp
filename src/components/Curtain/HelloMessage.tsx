const HelloMessage = () => {
  const showCurrentHour = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Bom-dia!";
    else if (hour >= 12 && hour < 18) return "Boa-tarde!";

    return "Boa-noite!";
  };

  return (
    <div className='z-20 absolute w-full top-2/4 text-center'>
      <h4 className='text-5xl text-white font-black animate-curtain-message'>{showCurrentHour()}</h4>
    </div>
  );
};

export default HelloMessage;
