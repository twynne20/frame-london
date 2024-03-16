// app/page.tsx
import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    { label: 'Generate Image' },
  ],
  image: {
    src: `https://frame-london.vercel.app/park-3.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Enter text for image',
  },
  postUrl: `https://frame-london.vercel.app/api/frame`,
});

export const metadata: Metadata = {
  manifest: '/manifest.json',
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return <div>Enter text and click Generate Image</div>;
}