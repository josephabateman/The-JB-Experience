import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Debug endpoint to check environment variables (REMOVE IN PRODUCTION!)
  return NextResponse.json({
    cms_username_set: !!process.env.CMS_ADMIN_USERNAME,
    cms_password_set: !!process.env.CMS_ADMIN_PASSWORD,
    cms_username_value: process.env.CMS_ADMIN_USERNAME || 'NOT_SET',
    node_env: process.env.NODE_ENV,
  });
}