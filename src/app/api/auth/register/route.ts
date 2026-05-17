import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

// Mock database for users
const users: Record<string, any> = {};

export async function POST(req: NextRequest) {
  try {
    const { phoneNumber, firstName, lastName, password } = await req.json();

    // Validation
    if (!phoneNumber || !firstName || !lastName || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user exists
    if (users[phoneNumber]) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      );
    }

    // Create user
    const userId = randomUUID();
    const referralCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    users[phoneNumber] = {
      id: userId,
      phoneNumber,
      firstName,
      lastName,
      password, // In production, hash this!
      email: null,
      walletBalance: 0,
      bonusBalance: 3000,
      totalDeposited: 0,
      totalWithdrawn: 0,
      vipLevel: 'bronze',
      referralCode,
      referralCount: 0,
      referralEarnings: 0,
      createdAt: new Date(),
      lastLogin: new Date(),
      kycVerified: false,
      fraudScore: 0,
    };

    const token = Buffer.from(`${phoneNumber}:${userId}`).toString('base64');

    return NextResponse.json({
      success: true,
      user: users[phoneNumber],
      token,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
