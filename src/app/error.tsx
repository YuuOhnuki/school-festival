'use client'; // Error boundaries must be Client Components

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="h-svh">
            <div className="m-auto flex h-full w-full flex-col items-center justify-center">
                <h1 className="text-[7rem] leading-tight font-bold">500</h1>
                <span className="font-medium">エラーが発生しました</span>
                <div className="mt-6 flex gap-4">
                    <Button variant="outline" asChild onClick={() => reset()}>
                        <Link href="/" className="px-8">
                            再度実行
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
