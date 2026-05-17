export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+1${cleaned}`;
  }
  return phone;
};

export const generateReferralCode = (): string => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};

export const calculateVIPLevel = (totalDeposited: number): string => {
  if (totalDeposited >= 50000) return 'platinum';
  if (totalDeposited >= 20000) return 'gold';
  if (totalDeposited >= 5000) return 'silver';
  return 'bronze';
};

export const calculateDailyProfit = (amount: number, rate: number): number => {
  return (amount * rate) / 100;
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
};
