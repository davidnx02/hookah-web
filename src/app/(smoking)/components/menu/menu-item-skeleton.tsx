export const MenuItemSkeleton = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2.5 sm:gap-3">
      <div className="w-full flex items-center justify-between">
        <div className="w-[65%] h-[28px] bg-neutral-600" />
        <div className="w-[77px] h-[38px] bg-neutral-600" />
      </div>
      <div className='w-full flex flex-col items-start justify-start gap-1'>
        <div className="w-[90%] bg-neutral-600 h-[16px]" />
        <div className="w-[42%] bg-neutral-600 h-[16px]" />
      </div>
    </div>
  );
};
