import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ProductType = 'electric' | 'manual';

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  type: ProductType;
  externalLink?: string;
}

export interface Feature {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface StoreState {
  hero: {
    headline: string;
    subheadline: string;
    backgroundImage: string;
    badge1Title: string;
    badge1Value: string;
    badge2Title: string;
    badge2Value: string;
  };
  products: Product[];
  features: Feature[];
  benefits: {
    headline: string;
    description: string;
    items: { id: string; title: string; description: string }[];
  };
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
  };
  settings: {
    whatsappNumber: string;
    showHero: boolean;
    showFeatures: boolean;
    showProducts: boolean;
    showHajjBenefits: boolean;
    showCTA: boolean;
  };

  // Actions
  updateHero: (hero: Partial<StoreState['hero']>) => void;
  updateFeature: (id: string, feature: Partial<Feature>) => void;
  updateBenefits: (benefits: Partial<StoreState['benefits']>) => void;
  updateBenefit: (id: string, benefit: Partial<{ title: string; description: string }>) => void;
  addProduct: (product: Product) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  removeProduct: (id: string) => void;
  reorderProducts: (products: Product[]) => void;
  updateCTA: (cta: Partial<StoreState['cta']>) => void;
  updateSettings: (settings: Partial<StoreState['settings']>) => void;
  
  // Sync Actions
  loadFromServer: () => Promise<void>;
  saveToServer: () => Promise<void>;
}

const defaultFeatures: Feature[] = [
  { id: '1', title: 'بطارية طويلة الأمد', description: 'تكفي لأداء مناسك الحج كاملة دون الحاجة للشحن المتكرر', iconName: 'Battery' },
  { id: '2', title: 'سهل الطي والنقل', description: 'تصميم خفيف الوزن يمكن طيه ووضعه في صندوق السيارة بسهولة', iconName: 'Move' },
  { id: '3', title: 'مناسب للسفر', description: 'معتمد من شركات الطيران ويمكن حمله في الطائرة', iconName: 'Plane' },
  { id: '4', title: 'تصميم مريح', description: 'مقاعد طبية مريحة لتخفيف الضغط أثناء الجلوس لفترات طويلة', iconName: 'Activity' },
];

const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'كرسي متحرك كهربائي خفيف الوزن',
    price: 3500,
    imageUrl: '/images/hajj_electric_wheelchair_1777924154589.png',
    type: 'electric',
    externalLink: 'https://wa.me/966500000000'
  },
  {
    id: '2',
    name: 'كرسي متحرك يدوي قابل للطي',
    price: 850,
    imageUrl: '/images/hajj_manual_wheelchair_1777924173772.png',
    type: 'manual',
    externalLink: 'https://wa.me/966500000000'
  },
  {
    id: '3',
    name: 'كرسي كهربائي للطرق الوعرة (مطور)',
    price: 4200,
    imageUrl: '/images/hajj_electric_wheelchair_1777924154589.png',
    type: 'electric',
    externalLink: 'https://wa.me/966500000000'
  }
];

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      hero: {
        headline: 'راحة الحاج تبدأ من هنا',
        subheadline: 'كراسي متحركة كهربائية ويدوية لتسهيل أداء مناسك الحج والعمرة',
        backgroundImage: '/images/hajj_hero_bg_1777924194804.png',
        badge1Title: 'دعم فني متواصل',
        badge1Value: '24/7',
        badge2Title: 'ضمان 3 سنوات',
        badge2Value: 'شامل المحرك والبطارية'
      },
      products: defaultProducts,
      features: defaultFeatures,
      benefits: {
        headline: 'مصممة خصيصاً لمناسك الحج',
        description: 'تقنيات متقدمة تجعل أداء المناسك أسهل وأكثر أماناً. كل خطوة وكل ركن من أركان الحج أصبح في متناول الجميع بفضل الهندسة الذكية.',
        items: [
          { id: '1', title: 'الطواف', description: 'كراسي مريحة تتحمل الازدحام وتوفر سهولة في الحركة داخل الحرم المكي، مزودة بحساسات أمان لتفادي الاصطدام.' },
          { id: '2', title: 'السعي', description: 'بطاريات ليثيوم تدوم طويلاً لضمان أداء السعي بين الصفا والمروة بدون انقطاع، مع مؤشر ذكي للشحن.' },
          { id: '3', title: 'منى', description: 'تصميم هندسي قابل للطي في 3 ثوانٍ يسهل نقله وتخزينه في الخيام والمساحات الضيقة جداً.' },
          { id: '4', title: 'عرفات', description: 'نظام تعليق هيدروليكي وعجلات قوية تتحمل مختلف التضاريس لضمان راحة فائقة الحاج يوم عرفة.' },
        ]
      },
      cta: {
        headline: 'جاهز لتجربة راحة لا مثيل لها؟',
        subheadline: 'فريقنا متواجد 24/7 لخدمتكم ومساعدتكم في اختيار الكرسي الأنسب.',
        buttonText: 'تواصل معنا عبر واتساب',
        secondaryButtonText: 'الدخول إلى موقعنا الكامل',
        secondaryButtonLink: 'https://mscostore.com',
      },
      settings: {
        whatsappNumber: '+966500000000',
        showHero: true,
        showProducts: true,
        showFeatures: true,
        showHajjBenefits: true,
        showCTA: true,
      },

      updateHero: (data) => {
        set((state) => ({ hero: { ...state.hero, ...data } }));
        get().saveToServer();
      },
      updateCTA: (data) => {
        set((state) => ({ cta: { ...state.cta, ...data } }));
        get().saveToServer();
      },
      updateSettings: (data) => {
        set((state) => ({ settings: { ...state.settings, ...data } }));
        get().saveToServer();
      },
      updateBenefits: (data) => {
        set((state) => ({ benefits: { ...state.benefits, ...data } }));
        get().saveToServer();
      },
      updateBenefit: (id, benefit) => {
        set((state) => ({
          benefits: {
            ...state.benefits,
            items: state.benefits.items.map(i => i.id === id ? { ...i, ...benefit } : i)
          }
        }));
        get().saveToServer();
      },

      addProduct: (product) => {
        set((state) => ({ products: [...state.products, product] }));
        get().saveToServer();
      },
      updateProduct: (id, product) => {
        set((state) => ({
          products: state.products.map(p => p.id === id ? { ...p, ...product } : p)
        }));
        get().saveToServer();
      },
      removeProduct: (id) => {
        set((state) => ({
          products: state.products.filter(p => p.id !== id)
        }));
        get().saveToServer();
      },
      reorderProducts: (products) => {
        set({ products });
        get().saveToServer();
      },

      updateFeature: (id, feature) => {
        set((state) => ({
          features: state.features.map(f => f.id === id ? { ...f, ...feature } : f)
        }));
        get().saveToServer();
      },

      loadFromServer: async () => {
        try {
          console.log('Fetching state from Supabase...');
          const res = await fetch('/api/store');
          const data = await res.json();
          
          if (data && !data.error && Object.keys(data).length > 0) {
            console.log('State received from server:', data);
            // Deep merge or complete override
            set((state) => ({
              ...state,
              ...data,
              // Ensure we don't accidentally overwrite actions
              hero: { ...state.hero, ...(data.hero || {}) },
              cta: { ...state.cta, ...(data.cta || {}) },
              settings: { ...state.settings, ...(data.settings || {}) },
              benefits: { ...state.benefits, ...(data.benefits || {}) },
              products: data.products || state.products,
              features: data.features || state.features,
            }));
            console.log('Store hydrated successfully from Supabase.');
          } else {
            console.log('No data found on server or empty response.');
          }
        } catch (error) {
          console.error('CRITICAL: Failed to load from Supabase:', error);
        }
      },

      saveToServer: async () => {
        try {
          const state = get();
          // Remove functions from the state before saving
          const dataToSave = Object.fromEntries(
            Object.entries(state).filter(([, v]) => typeof v !== 'function')
          );
          await fetch('/api/store', {
            method: 'POST',
            body: JSON.stringify(dataToSave),
          });
        } catch (error) {
          console.error('Failed to save to server:', error);
        }
      },
    }),
    {
      name: 'msco-storage-v4', // Incremented version to clear old local storage
    }
  )
);
