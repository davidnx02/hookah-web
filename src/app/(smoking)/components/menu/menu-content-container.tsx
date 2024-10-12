export const MenuContentContainer = ({ children }: { children: React.ReactNode; }) => {
  return (
    <div className="w-full mt-0 max-w-[605px] p-6 sm:p-8 bg-[#0a0a0a] shadow-2xl flex flex-col items-center justify-center gap-6 relative z-20">
      {children}
    </div>
  );
};