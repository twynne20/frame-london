import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Test Submit Message',
    },
  ],
  image: {
    src: `https://frame-london.vercel.app/public/park-1.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Enter your message',
  },
  postUrl: `https://frame-london.vercel.app/api/frame`,
});

export const metadata: Metadata = {
  title: 'tyson.xyz',
  description: 'LFG',
  openGraph: {
    title: 'tyson.xyz',
    description: 'LFG',
    images: [`https://frame-london.vercel.app/api/image`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>tyson.xyz</h1>
    </>
  );
}