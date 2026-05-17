export interface User {
  id: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  email?: string;
  walletBalance: number;
  bonusBalance: number;
  totalDeposited: number;
  totalWithdrawn: number;
  vipLevel: 'bronze' | 'silver' | 'gold' | 'platinum';
  referralCode: string;
  referralCount: number;
  referralEarnings: number;
  createdAt: Date;
  lastLogin: Date;
  kycVerified: boolean;
  fraudScore: number;
}

export interface Investment {
  id: string;
  userId: string;
  type: 'regular' | 'gold';
  amount: number;
  dailyProfit: number;
  totalProfit: number;
  duration: number;
  startDate: Date;
  endDate: Date;
  status: 'active' | 'completed' | 'pending';
  returns: number;
}

export interface Deposit {
  id: string;
  userId: string;
  amount: number;
  method: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  approvedAt?: Date;
  reference: string;
}

export interface Withdrawal {
  id: string;
  userId: string;
  amount: number;
  method: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  approvedAt?: Date;
  reference: string;
}

export interface Transaction {
  id: string;
  userId: string;
  type: 'deposit' | 'withdrawal' | 'investment' | 'referral' | 'profit';
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  description: string;
  createdAt: Date;
}

export interface VIPBenefit {
  level: string;
  minDeposit: number;
  dailyProfitBonus: number;
  withdrawalFeeDiscount: number;
  dedicatedSupport: boolean;
  earlyAccessProducts: boolean;
}
