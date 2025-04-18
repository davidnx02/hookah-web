export function PricesTable({
  offers,
}: {
  offers: { name: string; description?: string; price: number }[];
}) {
  return (
    <div className="max-w-[460px] w-full px-4 sm:px-6 lg:px-8 py-8 bg-[#111112] flex flex-col items-start justify-start gap-4 relative z-10">
      {offers.map((offer) => (
        <div
          key={offer.name}
          className="w-full flex flex-col items-start justify-start gap-2"
        >
          <div className="w-full flex items-end justify-between gap-0.5">
            <p className="text-lg sm:text-xl lg:text-2xl font-heading text-white font-normal whitespace-nowrap">
              {offer.name}
            </p>
            <div
              className="flex-grow -translate-y-2"
              style={{
                borderBottom: "1px dotted white",
                margin: "0 8px",
              }}
            />
            <p className="text-lg sm:text-xl lg:text-2xl font-heading text-white font-normal whitespace-nowrap">
              {offer.price}€
            </p>
          </div>
          {offer.description && (
            <p className="text-xs text-[#B9B9B9] font-normal">
              {offer.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
