const Navigation = ({ step }: { step: number }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-fit flex gap-3">
        <span
          className={`w-5 h-2 rounded-full bg-[#71c381] transition-all duration-300 ${
            step == 1 ? "w-[1.25rem]" : "w-[0.5rem]"
          }`}
        />
        <span
          className={`w-5 h-2 rounded-full bg-[#71c381] transition-all duration-300 ${
            step == 2 ? "w-[1.25rem]" : "w-[0.5rem]"
          }`}
        />
      </div>
    </div>
  );
};

export default Navigation;
