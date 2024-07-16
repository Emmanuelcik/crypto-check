import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { CryptoCurrency, CryptoPrice, Pair } from "./types";
import { getCryptoData, getCryptos } from "./services/CryptoService";

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[];
  priceData: CryptoPrice;
  loading: boolean;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptoCurrencies: [],
    loading: false,
    priceData: {} as CryptoPrice,
    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos();
      set(() => ({ cryptoCurrencies }));
    },
    fetchData: async (pair) => {
      set(() => ({ loading: true }));
      const res = await getCryptoData(pair);
      set(() => ({ priceData: res, loading: false }));
    },
  }))
);
