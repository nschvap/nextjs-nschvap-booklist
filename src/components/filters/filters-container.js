"use client";

import { useFrontEndStore } from "@/stores/animations";

import Descendent from "./descendent";
import FilterByGenre from "./genre";
import OrderBy from "./order-by";
import PagesNumber from "./pages";

const FiltersContainer = () => {
  const [filtersVisible, setFiltersVisible] = useFrontEndStore((store) => [
    store.filtersVisible,
    store.setFiltersVisible,
  ]);

  return (
    <div className="px-5 flex flex-col justify-center items-center gap-2 w-full">
      <div className="w-full h-[1px] bg-zinc-400 flex-shrink-0"></div>
      <h2 className="text-lg font-black">Filtros</h2>
      {filtersVisible && (
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
          <FilterByGenre />
          <OrderBy />
          <PagesNumber />
          <Descendent />
        </div>
      )}
      <div className="flex w-full items-center justify-center">
        <div className="w-full h-[1px] bg-zinc-400"></div>
        {filtersVisible ? (
          <button className="lg:hidden px-2 py-1 text-lg font-black border-[1px] border-zinc-400" onClick={() => setFiltersVisible(!filtersVisible)}>
            &uarr;
          </button>
        ) : (
          <button className=" lg:hidden px-2 py-1 text-lg font-black border-[1px] border-zinc-400" onClick={() => setFiltersVisible(!filtersVisible)}>
            &darr;
          </button>
        )}
        <div className="w-full h-[1px] bg-zinc-400"></div>
      </div>
    </div>
  );
};

export default FiltersContainer;
