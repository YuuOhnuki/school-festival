import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '404 - ページが見つかりません',
    description: 'お探しのページは存在しないか、削除された可能性があります。',
};

export default function NotFound() {
    return (
        <div className="h-svh">
            <div className="m-auto flex h-full w-full flex-col items-center justify-center">
                <h1 className="text-[7rem] leading-tight font-bold">404</h1>
                <span className="font-medium">ページが見つかりません</span>
                <p className="text-muted-foreground text-center">
                    お探しのページは存在しないか、削除された可能性があります。
                </p>
                <div className="mt-6 flex gap-4">
                    <Button variant="outline" asChild>
                        <Link href="/" className="px-8">
                            ホームに戻る
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
