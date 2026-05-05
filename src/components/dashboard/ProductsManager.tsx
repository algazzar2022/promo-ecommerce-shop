"use client";

import { useState } from "react";
import { useStore, Product, ProductType } from "@/store/useStore";
import { Plus, Edit2, Trash2, GripVertical, Image as ImageIcon, X } from "lucide-react";
import { 
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableProductItem({ product, onEdit, onDelete }: { product: Product, onEdit: (p: Product) => void, onDelete: (id: string) => void }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: product.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm mb-3 group">
      <div {...attributes} {...listeners} className="cursor-grab text-gray-400 hover:text-gray-900 touch-none">
        <GripVertical size={20} />
      </div>
      
      <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden shrink-0 border border-gray-200">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-gray-900 truncate">{product.name}</h4>
        <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
          <span>{product.price} ر.س</span>
          <span>•</span>
          <span className="capitalize">{product.type === 'electric' ? 'كهربائي' : 'يدوي'}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={() => onEdit(product)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
          <Edit2 size={18} />
        </button>
        <button onClick={() => onDelete(product.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default function ProductsManager() {
  const { products, addProduct, updateProduct, removeProduct, reorderProducts } = useStore();
  
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [priceInput, setPriceInput] = useState('');
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    price: 0,
    imageUrl: '',
    type: 'electric',
    externalLink: ''
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = products.findIndex((i) => i.id === active.id);
      const newIndex = products.findIndex((i) => i.id === over.id);
      reorderProducts(arrayMove(products, oldIndex, newIndex));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const priceValue = Number(priceInput);
    const finalData = { ...formData, price: priceValue };
    if (!finalData.name || !priceValue || !finalData.imageUrl) return alert('الرجاء تعبئة جميع الحقول');
    
    if (editingId) {
      updateProduct(editingId, finalData);
    } else {
      addProduct({
        ...finalData,
        id: Math.random().toString(36).substr(2, 9),
      } as Product);
    }
    
    setIsEditing(false);
    setEditingId(null);
    setPriceInput('');
    setFormData({ name: '', price: 0, imageUrl: '', type: 'electric', externalLink: '' });
  };

  const startEdit = (product: Product) => {
    setFormData(product);
    setPriceInput(product.price.toString());
    setEditingId(product.id);
    setIsEditing(true);
  };

  const startAdd = () => {
    setFormData({ name: '', price: 0, imageUrl: '', type: 'electric', externalLink: '' });
    setPriceInput('');
    setEditingId(null);
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{editingId ? 'تعديل المنتج' : 'إضافة منتج جديد'}</h2>
          <button onClick={() => setIsEditing(false)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
            <X size={20} />
          </button>
        </div>

        <div className="grid gap-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">اسم المنتج</label>
            <input 
              type="text" 
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">السعر (ر.س)</label>
              <input 
                type="text"
                inputMode="numeric"
                value={priceInput}
                onChange={e => {
                  const val = e.target.value.replace(/[^0-9]/g, '');
                  setPriceInput(val);
                }}
                placeholder="مثال: 3500"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">النوع</label>
              <select 
                value={formData.type}
                onChange={e => setFormData({...formData, type: e.target.value as ProductType})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white"
              >
                <option value="electric">كهربائي</option>
                <option value="manual">يدوي</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">رابط التفاصيل (اختياري)</label>
            <input 
              type="text" 
              value={formData.externalLink || ''}
              onChange={e => setFormData({...formData, externalLink: e.target.value})}
              placeholder="https://..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-left font-sans"
              dir="ltr"
            />
            <p className="text-xs text-gray-500 mt-1">الرابط الذي سيتم توجيه العميل إليه عند الضغط على استكشف التفاصيل</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">صورة المنتج</label>
            <div className="flex items-center gap-4">
              {formData.imageUrl ? (
                <div className="relative w-32 h-32 rounded-lg border border-gray-200 overflow-hidden group">
                  <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <button onClick={() => setFormData({...formData, imageUrl: ''})} className="text-white bg-red-600 p-2 rounded-full">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <label className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 hover:border-teal-500 hover:text-teal-500 cursor-pointer transition-colors bg-gray-50">
                  <ImageIcon size={24} className="mb-2" />
                  <span className="text-xs">رفع صورة</span>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              )}
              <div className="flex-1 text-sm text-gray-500">
                <p>يمكنك رفع صورة من جهازك (سيتم تحويلها لـ Data URL).</p>
                <div className="mt-2">
                  <span className="font-semibold block mb-1">أو استخدم رابط صورة:</span>
                  <input 
                    type="text" 
                    value={formData.imageUrl?.startsWith('data:') ? '' : formData.imageUrl}
                    onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                    placeholder="https://..."
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <button onClick={() => setIsEditing(false)} className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50">
              إلغاء
            </button>
            <button onClick={handleSave} className="px-6 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700">
              حفظ المنتج
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">المنتجات</h2>
          <p className="text-gray-500 text-sm mt-1">إدارة منتجات الكراسي المتحركة وترتيبها</p>
        </div>
        <button 
          onClick={startAdd}
          className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm"
        >
          <Plus size={18} />
          <span>إضافة منتج</span>
        </button>
      </div>

      <DndContext 
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext 
          items={products.map(p => p.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-1">
            {products.map(product => (
              <SortableProductItem 
                key={product.id} 
                product={product} 
                onEdit={startEdit}
                onDelete={removeProduct}
              />
            ))}
            {products.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 border-dashed text-gray-500">
                لا توجد منتجات حالياً. قم بإضافة منتج جديد.
              </div>
            )}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
