import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { CryptoCurrency, CryptoPrice, Pair } from "./types";
import { getCryptoData, getCryptos } from "./services/CryptoService";

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[];
  priceData: CryptoPrice;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptoCurrencies: [],
    priceData: {} as CryptoPrice,
    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos();
      set(() => ({ cryptoCurrencies }));
    },
    fetchData: async (pair) => {
      const res = await getCryptoData(pair);
      set(() => ({ priceData: res }));
    },
  }))
);
