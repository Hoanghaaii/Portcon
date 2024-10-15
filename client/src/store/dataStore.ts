// store.ts
import {create} from 'zustand';

interface Quote {
  id: string;          // ID của sản phẩm
  date: Date | null;   // Ngày
  timerent: string;    // Thời gian thuê
  location: string;    // Vị trí
}

interface QuoteState {
  quotes: Quote[];     // Danh sách báo giá
  addQuote: (quote: Quote) => void; // Hàm để thêm báo giá
}

const useQuoteStore = create<QuoteState>((set) => ({
  quotes: [],
  addQuote: (quote) => set((state) => ({ quotes: [...state.quotes, quote] })),
}));

export default useQuoteStore;
