//==========================
// ユーザー役割
//==========================
export enum UserRole {
    ADMIN = 'ADMIN',
    TEACHER = 'TEACHER',
    CULTURAL_STAFF = 'CULTURAL_STAFF',
    STUDENT = 'STUDENT',
}
// ==========================
// アカウント情報
// ==========================
export type Account = {
    id: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
    user?: User; // AccountはUserに属する
};

// ==========================
// セッション情報
// ==========================
export type Session = {
    id: string;
    sessionToken: string;
    userId: string;
    expires: Date;
    user?: User; // SessionはUserに属する
};

// ==========================
// トークン情報
// ==========================
export type VerificationToken = {
    identifier: string;
    token: string;
    expires: Date;
};

// ==========================
// ユーザー情報
// ==========================
export type User = {
    id: string; // ユーザーID
    name: string | null; // ユーザー名
    email: string | null; // メールアドレス
    emailVerified: Date | null;
    image: string | null; // プロフィール画像URL
    role: UserRole; // 権限
    tutorialStep: number; // チュートリアル進捗
    isTutorialCompleted: boolean; // チュートリアル完了フラグ
    createdAt: Date;
    updatedAt: Date;
    shopId: number | null;
    isPendingShopApproval: boolean; // 参加申請が承認待ちかどうか
    shop?: Shop | null; // UserはShopに所属する（任意）
    shopAdmins?: ShopAdmins[]; // Userが管理するショップ（多対多）
    notifications?: Notification[]; // Userに関連する通知（1対多）
    createdProducts?: Product[]; // Userが作成した商品（1対多）
    createdShops?: Shop[]; // Userが作成したショップ（1対多）
    createdOrders?: Order[]; // Userが作成した注文（1対多）
    accounts?: Account[]; // Userに紐づくアカウント（1対多）
    sessions?: Session[]; // Userに紐づくセッション（1対多）
    setting?: UserSetting | null; // Userの設定（1対1）
};

// ==========================
// お店情報
// ==========================
export type Shop = {
    id: number; // ショップID
    name: string; // ショップ名
    description: string | null; // 説明
    thumbnail: string | null; // サムネイル
    className: string | null; // クラス名など（任意）
    academicYear: number; // 学年などの識別用
    createdAt: Date;
    updatedAt: Date;
    createdById: string;
    createdBy?: User; // ShopはUserによって作成される（1対1）
    products?: Product[]; // Shopは複数の商品を所有する（1対多）
    orders?: Order[]; // Shopは複数の注文を所有する（1対多）
    participants?: User[]; // Shopに所属する複数のUser（多対多）
    admins?: ShopAdmins[]; // Shopを管理するUser（多対多）
    settings?: ShopSetting | null; // Shopの設定（1対1）
};

// ==========================
// ショップ設定
// ==========================
export type ShopSetting = {
    id: number;
    shopId: number;
    waitTimeInMinutes: number | null; // 待ち時間（分単位）
    autoWaitTime: boolean; // 待ち時間を自動設定するかどうか
    createdAt: Date;
    updatedAt: Date;
    shop?: Shop; // ShopSettingはShopに紐づく（1対1）
};

// ==========================
// 商品
// ==========================
export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    thumbnail: string | null;
    images: string[];
    isSoldOut: boolean;
    sales: number;
    calories: number | null;
    protein: number | null;
    fat: number | null;
    carbohydrate: number | null;
    sodium: number | null;
    containsEgg: boolean;
    containsMilk: boolean;
    containsWheat: boolean;
    containsShrimp: boolean;
    containsCrab: boolean;
    containsBuckwheat: boolean;
    containsWalnut: boolean;
    containsPeanut: boolean;
    createdAt: Date;
    updatedAt: Date;
    academicYear: number;
    createdById: string;
    // shopId: number;
    projectId: number;
    createdBy?: User; // ProductはUserによって作成される（1対1）
    shop?: Shop; // ProductはShopに属する（1対1）
    orderItems?: OrderItem[]; // Productは複数のOrderItemに紐づく（1対多）
};

// ==========================
// 注文
// ==========================
export type Order = {
    id: number;
    totalAmount: number;
    isCompleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    createdById: string;
    shopId: number;
    createdBy?: User; // OrderはUserによって作成される（1対1）
    shop?: Shop; // OrderはShopに属する（1対1）
    orderItems?: OrderItem[]; // Orderは複数のOrderItemを所有する（1対多）
};

// ==========================
// 注文アイテム
// ==========================
export type OrderItem = {
    id: number;
    orderId: number;
    productId: number;
    quantity: number;
    order?: Order; // OrderItemはOrderに属する（1対1）
    product?: Product; // OrderItemはProductに属する（1対1）
};

// ==========================
// 管理者リレーション
// ==========================
export type ShopAdmins = {
    userId: string;
    shopId: number;
    user?: User; // ShopAdminsはUserに紐づく（1対1、多対多の中間モデル）
    shop?: Shop; // ShopAdminsはShopに紐づく（1対1、多対多の中間モデル）
};

// ==========================
// 通知
// ==========================
export type Notification = {
    id: number;
    title: string;
    message: string;
    type: string;
    meta: JsonValue;
    isRead: boolean;
    createdAt: Date;
    updatedAt: Date;
    recipientId: string | null;
    applicantUserId: string | null;
    targetShopId: number | null;
    recipient?: User | null; // NotificationはUserに送られる（1対1、任意）
};

type JsonPrimitive = string | number | boolean | null;
type JsonObject = { [key: string]: JsonValue };
type JsonArray = JsonValue[];

type JsonValue = JsonPrimitive | JsonObject | JsonArray;

// ==========================
// ユーザー設定
// ==========================
export type UserSetting = {
    id: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    user?: User; // UserSettingはUserに紐づく（1対1）
};
