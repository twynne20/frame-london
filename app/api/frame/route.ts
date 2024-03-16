// api/frame/route.ts
import { getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config'
import { generateImage } from '../../../lib/generateImage';

export async function POST(req: NextRequest): Promise<Response> {
  const frameRequest = await req.json();
  const { message } = await getFrameMessage(frameRequest);

  if (!message) {
    return new NextResponse('Invalid frame message', { status: 400 });
  }

  let imageUrl = `https://frame-london.vercel.app/park-3.png`;

  if (message.input) {
    const text = message.input;
    imageUrl = await generateImage(text);
  }

  return new NextResponse(
    getFrameHtmlResponse({
      image: {
        src: imageUrl,
        aspectRatio: '1:1',
      },
      postUrl: `https://frame-london.vercel.app/api/frame`,
    }),
  );
}