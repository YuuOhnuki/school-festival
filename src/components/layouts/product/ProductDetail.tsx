'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Product, Project } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

interface ProductDetailProps {
    product: Product;
    projects: Project[];
    products: Product[];
}

// Related Products Component
const RelatedProducts = ({
    currentProductId,
    projectId,
    products,
}: {
    currentProductId: number;
    projectId: number;
    products: Product[];
}) => {
    const relatedProducts = products
        .filter((product) => product.projectId === projectId && product.id !== currentProductId)
        .slice(0, 3);

    if (relatedProducts.length === 0) {
        return <div className="text-center py-8 text-neutral-500">同じお店の他の商品はありません</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product, index) => (
                <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105"
                >
                    <Link href={`/products/${product.id}`}>
                        <div className="relative">
                            <Image
                                width="600"
                                height="600"
                                src={product.thumbnail || ''}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            {product.isSoldOut && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <span className="text-white font-bold">売り切れ</span>
                                </div>
                            )}
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-2 text-neutral-800 dark:text-neutral-200">
                                {product.name}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3 line-clamp-2">
                                {product.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold text-blue-600">¥{product.price}</span>
                                <span className="text-sm text-neutral-500">売上: {product.sales}</span>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};

const ProductDetail = ({ product, projects, products }: ProductDetailProps) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const project = projects.find((p) => p.id === product.projectId);

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

    return (
        <div>
            <button className="mb-8 flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group">
                <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
                戻る
            </button>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* 商品画像 */}
                <div className="space-y-4">
                    <div className="aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-2xl overflow-hidden">
                        <Image
                            width="600"
                            height="600"
                            src={images[selectedImageIndex] || product.thumbnail || ''}
                            alt={product.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        {product.isSoldOut && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <span className="text-white font-bold text-2xl">売り切れ</span>
                            </div>
                        )}
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
                                        width="600"
                                        height="600"
                                        src={image || ''}
                                        alt={`${product.name} ${index + 1}`}
                                        className="w-full h-full object-cover"
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
                                3{project?.className}
                            </span>
                            {product.isSoldOut && (
                                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">
                                    売り切れ
                                </span>
                            )}
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
                            {project && (
                                <p>
                                    提供店舗: <span className="font-medium">{project.name}</span>
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
                            <div className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 px-4 py-3 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <span>✅</span>
                                    <span className="font-medium">主要アレルゲン不使用</span>
                                </div>
                                <p className="text-sm mt-1">この商品には主要8品目のアレルゲンは含まれていません。</p>
                            </div>
                        )}
                    </div>

                    {/* 店舗情報 */}
                    {project && (
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-4 flex items-center gap-2">
                                <span>🏪</span>
                                店舗情報
                            </h3>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-bold text-blue-700 dark:text-blue-400">{project.name}</h4>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">
                                        {project.className}
                                    </span>
                                    <span>年度: {project.academicYear}</span>
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
                <RelatedProducts currentProductId={product.id} projectId={product.projectId} products={products} />
            </div>
        </div>
    );
};

export default ProductDetail;
