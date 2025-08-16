// ユーザーの役割を定義
export enum UserRole {
    ADMIN = 'ADMIN',
    AUTHORIZED = 'AUTHORIZED',
    USER = 'USER',
}

// ユーザーモデル
export type User = {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    passwordHash: string | null;
    tutorialStep: number;
    isTutorialCompleted: boolean;
    isWaitingApproval: boolean;
    role: UserRole;
    projectId: number | null;
};

// プロジェクトモデル
export type Project = {
    id: number;
    name: string;
    description: string | null;
    thumbnail: string | null;
    className: string | null;
    academicYear: number;
    createdById: string;
};

// 商品モデル
export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    thumbnail: string | null;
    images: string[];
    isSoldOut: boolean;
    sales: number;
    createdAt: Date;
    updatedAt: Date;
    academicYear: number;
    createdById: string;
    projectId: number;
    calories: number | null;
    protein: number | null;
    fat: number | null;
    carbohydrate: number | null;
    sodium: number | null;
    hasEbi: boolean;
    hasKani: boolean;
    hasKurumi: boolean;
    hasKomugi: boolean;
    hasSoba: boolean;
    hasTamago: boolean;
    hasMilk: boolean;
    hasRakkasei: boolean;
};

// 注文モデル
export type Order = {
    id: number;
    totalAmount: number;
    createdAt: Date;
};

// 注文品目モデル
export type OrderItem = {
    id: number;
    orderId: number;
    productId: number;
    quantity: number;
};

// 通知モデル
export type Notification = {
    id: number;
    title: string;
    message: string;
    type: string;
    meta: Record<string, unknown>; // JSON型はRecord<string, unknown>で定義
    isRead: boolean;
    createdAt: Date;
    recipientId: string | null;
    applicantUserId: string | null;
    targetProjectId: number | null;
};

// ProjectAdminsモデル (中間テーブル)
export type ProjectAdmins = {
    userId: string;
    projectId: number;
};
