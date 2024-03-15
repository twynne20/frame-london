import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  let inputText: string | undefined = '';

  const body: FrameRequest = await req.json();
  
  // Add the allowFramegear option for local testing with Framegear
  const { isValid, message } = await getFrameMessage(body, { 
    allowFramegear: process.env.NODE_ENV !== 'production',
  });

  if (isValid && message?.input) {
    inputText = message.input;
  }

  const imageUrl = `${NEXT_PUBLIC_URL}/api/image?text=${encodeURIComponent(inputText || '')}`;

  return new NextResponse(
    getFrameHtmlResponse({
      image: {
        src: imageUrl,
        aspectRatio: '1:1',
      },
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';