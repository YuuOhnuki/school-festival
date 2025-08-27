'use client';

import { useState } from 'react';
import { Product, Shop } from '@/types';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BackButton } from '@/components/BackButton';
import ProductCard from './ProductCard';

interface ProductDetailProps {
    product: Product;
    shops: Shop[];
    products: Product[];
}

// Related Products Component
const RelatedProducts = ({
    currentProductId,
    shopId,
    products,
}: {
    currentProductId: number;
    shopId: number;
    products: Product[];
}) => {
    const relatedProducts = products
        .filter((product) => product.shopId === shopId && product.id !== currentProductId)
        .slice(0, 3);

    if (relatedProducts.length === 0) {
        return <div className="text-center py-8 text-neutral-500">同じお店の他の商品はありません</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

const ProductDetail = ({ product, shops, products }: ProductDetailProps) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [imageError, setImageError] = useState(false);
    const shop = shops.find((p) => p.id === product.shopId);

    // アレルギー情報の配列
    const allergens = [
        { key: 'hasEbi', label: 'えび', icon: '🦐' },
        { key: 'hasKani', label: 'かに', icon: '🦀' },
        { key: 'hasKurumi', label: 'くるみ', icon: '🥜' },
        { key: 'hasKomugi', label: '小麦', icon: '🌾' },
        { key: 'hasSoba', label: 'そば', icon: '🍜' },
        { key: 'hasTamago', label: '卵', icon: '🥚' },
        { key: 'hasMilk', label: '乳', icon: '🥛' },
        { key: 'hasRakkasei', label: '落花生', icon: '🥜' },
    ];

    const presentAllergens = allergens.filter((allergen) => product[allergen.key as keyof Product] === true);

    const images = product.images.length > 0 ? product.images : [product.thumbnail].filter(Boolean);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div>
            <BackButton />

            <div className="grid lg:grid-cols-2 gap-4">
                {product.isSoldOut && (
                    <Alert variant="destructive" className="lg:col-span-2 col-span-1 bg-red-50">
                        <AlertTitle className="font-bold text-xl">売り切れ中</AlertTitle>
                        <AlertDescription>この商品は現在売り切れ中です。</AlertDescription>
                    </Alert>
                )}
                {/* 商品画像 */}
                <div className="space-y-4">
                    <div className="aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-2xl overflow-hidden">
                        <Image
                            width="600"
                            height="600"
                            src={
                                imageError || !images[selectedImageIndex]
                                    ? '/images/placeholder.png'
                                    : images[selectedImageIndex]
                            }
                            alt={product.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            onError={handleImageError}
                        />
                    </div>

                    {/* サムネイル */}
                    {images.length > 1 && (
                        <div className="flex gap-2 overflow-x-auto">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImageIndex(index)}
                                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                                        selectedImageIndex === index
                                            ? 'border-blue-500'
                                            : 'border-neutral-200 dark:border-neutral-700'
                                    }`}
                                >
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={imageError || !image ? '/images/placeholder.png' : image}
                                        alt={`${product.name} ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        onError={handleImageError}
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* 商品情報 */}
                <div className="space-y-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                3{shop?.className}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                            {product.name}
                        </h1>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    {/* 価格と販売数 */}
                    <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-3xl font-bold text-blue-600">¥{product.price}</span>
                            <span className="text-neutral-500">売上: {product.sales}個</span>
                        </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                            {shop && (
                                <p>
                                    提供店舗: <span className="font-medium">{shop.name}</span>
                                </p>
                            )}
                        </div>
                    </div>

                    {/* 栄養成分表示 */}
                    {(product.calories !== null || product.protein !== null) && (
                        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-4 flex items-center gap-2">
                                <span>🍎</span>
                                栄養成分表示（1食あたり）
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {product.calories !== null && (
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-700 dark:text-green-400">
                                            {product.calories}
                                        </div>
                                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                            カロリー
                                            <br />
                                            (kcal)
                                        </div>
                                    </div>
                                )}
                                {product.protein !== null && (
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-700 dark:text-green-400">
                                            {product.protein}
                                        </div>
                                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                            たんぱく質
                                            <br />
                                            (g)
                                        </div>
                                    </div>
                                )}
                                {product.fat !== null && (
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-700 dark:text-green-400">
                                            {product.fat}
                                        </div>
                                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                            脂質
                                            <br />
                                            (g)
                                        </div>
                                    </div>
                                )}
                                {product.carbohydrate !== null && (
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-700 dark:text-green-400">
                                            {product.carbohydrate}
                                        </div>
                                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                            炭水化物
                                            <br />
                                            (g)
                                        </div>
                                    </div>
                                )}
                                {product.sodium !== null && (
                                    <div className="text-center col-span-2 md:col-span-4">
                                        <div className="text-2xl font-bold text-green-700 dark:text-green-400">
                                            {product.sodium}
                                        </div>
                                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                            食塩相当量 (mg)
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* アレルギー情報 */}
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-300 mb-4 flex items-center gap-2">
                            <span>⚠️</span>
                            アレルギー情報
                        </h3>
                        {presentAllergens.length > 0 ? (
                            <div>
                                <p className="text-sm text-yellow-700 dark:text-yellow-400 mb-3">
                                    この商品には以下のアレルゲンが含まれています：
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {presentAllergens.map((allergen) => (
                                        <div
                                            key={allergen.key}
                                            className="bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
                                        >
                                            <span>{allergen.icon}</span>
                                            {allergen.label}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-yellow-600 dark:text-yellow-500 mt-3">
                                    アレルギーをお持ちの方は十分ご注意ください。
                                </p>
                            </div>
                        ) : (
                            <div className="px-2 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <span>✅</span>
                                    <span className="font-bold">主要アレルゲン不使用</span>
                                </div>
                                <p className="text-sm mt-1">この商品には主要8品目のアレルゲンは含まれていません。</p>
                            </div>
                        )}
                    </div>

                    {/* 店舗情報 */}
                    {shop && (
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-4 flex items-center gap-2">
                                <span>🏪</span>
                                店舗情報
                            </h3>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-bold text-blue-700 dark:text-blue-400">{shop.name}</h4>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                                        {shop.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">
                                        3年{shop.className}組
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 注意事項 */}
                    <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-300 mb-3 flex items-center gap-2">
                            <span>📋</span>
                            ご注意事項
                        </h3>
                        <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                数量に限りがあります。売り切れの際はご了承ください。
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                アレルギー情報は調理時の混入も含めて表示しています。
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                栄養成分は計算値のため、実際の値と多少異なる場合があります。
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                商品の見た目は写真と異なる場合があります。
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 関連商品 */}
            <div className="mt-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-neutral-800 dark:text-neutral-200">
                    同じお店の他の商品
                </h2>
                <RelatedProducts currentProductId={product.id} shopId={product.shopId} products={products} />
            </div>
        </div>
    );
};

export default ProductDetail;
