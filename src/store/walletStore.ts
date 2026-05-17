import { create } from 'zustand';

interface WalletState {
  balance: number;
  bonusBalance: number;
  totalDeposited: number;
  totalWithdrawn: number;
  setBalance: (amount: number) => void;
  setBonusBalance: (amount: number) => void;
  setTotalDeposited: (amount: number) => void;
  setTotalWithdrawn: (amount: number) => void;
  addBalance: (amount: number) => void;
  deductBalance: (amount: number) => void;
  addBonus: (amount: number) => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  balance: 0,
  bonusBalance: 3000,
  totalDeposited: 0,
  totalWithdrawn: 0,
  setBalance: (amount) => set({ balance: amount }),
  setBonusBalance: (amount) => set({ bonusBalance: amount }),
  setTotalDeposited: (amount) => set({ totalDeposited: amount }),
  setTotalWithdrawn: (amount) => set({ totalWithdrawn: amount }),
  addBalance: (amount) => set((state) => ({ balance: state.balance + amount })),
  deductBalance: (amount) => set((state) => ({ balance: state.balance - amount })),
  addBonus: (amount) => set((state) => ({ bonusBalance: state.bonusBalance + amount })),
}));
