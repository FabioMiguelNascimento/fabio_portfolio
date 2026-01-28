import { headers } from 'next/headers';
import { createHash } from 'crypto';

export async function getVisitorId() {
    if (!process.env.IP_SALT) {
        throw new Error("IP_SALT not DEFINED in .env file")
    }

    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for');

    const currentVisitorId = createHash('sha256')
        .update(ip + process.env.IP_SALT)
        .digest('hex');

    return currentVisitorId;
}