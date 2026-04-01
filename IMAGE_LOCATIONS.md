# 📁 Ubicaciones de Imágenes de Productos

## Estructura Centralizada de Almacenamiento de Imágenes

Cada producto ahora tiene un campo `imageFolder` que especifica dónde se guardan sus imágenes. Esto facilita el mantenimiento y escalabilidad del catálogo.

---

## 📦 Categorías y Carpetas

### **Desayunos** (IDs: 1-9)
- **Carpeta Base:** `img/desayunos/`
- **Directorio Raíz:** `/img/rebecca-deluxe-*.jpg`
- **Productos:**
  - ID 1: Desayuno Rebecca Deluxe → `img/`
  - ID 2: Frutas y Delicias → `img/desayunos/`
  - ID 3: Desayuno con Globos → `img/desayunos/`
  - ID 4: Bandeja Premium → `img/desayunos/`
  - ID 5: Desayuno Sorpresa Deluxe → `img/desayunos/`
  - ID 6: Mesa Ejecutiva → `img/desayunos/`
  - ID 7: Combo Romántico → `img/desayunos/`
  - ID 8: Combo Cumpleaños → `img/desayunos/`
  - ID 9: Combo Empresarial → `img/desayunos/`

### **Floristería** (IDs: 201-210)
- **Carpeta Principal:** `img/floristeria/`
- **Productos:**
  - ID 201: Ramo Flores Amarillas → `img/floristeria/`
  - ID 202: Ramo Cisne Rosas → `img/floristeria/`
  - ID 203: Ramo Cisne (con opciones combo) → `img/floristeria/`
  - ID 204: Ramo Cisne Girasoles → `img/floristeria/`
  - ID 205: Ramo Cisne en Combo → `img/floristeria/`
  - ID 206: Ramo Cisne más Corazón de Chocolate → `img/floristeria/`
  - ID 207: Ramillete Solitario → `img/floristeria/`
  - ID 208: Ramo Buchón 22 Rosas → `img/floristeria/`
  - ID 209: Ramo Buchón 36 Rosas → `img/floristeria/`
  - ID 210: Ramo Rosas Eternas → `img/floristeria/`

### **Fresas / Cajas** (IDs: 301-310)
- **Carpeta Principal:** `img/fresas/`
- **Productos:**
  - ID 301: Corazón Mini Dulce → `img/fresas/`
  - ID 302: Caja Corazón Sorpresa → `img/fresas/`
  - ID 303: Corazón Becca → `img/fresas/`
  - ID 304: Dear Box → `img/fresas/`
  - ID 305: Mary Box → `img/fresas/`
  - ID 306: Luz Box → `img/fresas/`
  - ID 307: Lovable Box → `img/fresas/`
  - ID 308: Love Box Deluxe → `img/fresas/`
  - ID 309: Corazón Deluxe → `img/fresas/`
  - ID 310: Love Box → `img/fresas/`

### **Anchetas** (IDs: 101-109)
- **Carpeta Principal:** `img/anchetas/`
- **Productos:**
  - ID 101: Caja de Sueños → `img/anchetas/`
  - ID 102: Desayuno Aurora → `img/anchetas/`
  - ID 103: Desayuno Buzón de Amor → `img/anchetas/`
  - ID 104: M de Amor → `img/anchetas/`
  - ID 105: M de Devoción → `img/anchetas/`
  - ID 106: Dear Box Adore → `img/anchetas/`
  - ID 107: Combo Querida → `img/anchetas/`
  - ID 108: Lovable Combo con Peluche → `img/anchetas/`
  - ID 109: Love Box Deluxe Ancheta → `img/anchetas/`

---

## 🗂️ Estructura de Carpetas en el Servidor

```
Catalogo/
├── img/
│   ├── rebecca-deluxe-1.jpg      (Desayunos)
│   ├── rebecca-deluxe-2.jpg
│   ├── rebecca-deluxe-3.jpg
│   ├── rebecca-deluxe-4.jpg
│   │
│   ├── desayunos/
│   │   └── [Imágenes de productos de desayunos]
│   │
│   ├── floristeria/
│   │   ├── WhatsApp Image 2026-03-22 at 2.44.51 PM.jpeg
│   │   ├── WhatsApp Image 2026-03-22 at 2.44.51 PM (1).jpeg
│   │   ├── [Otras imágenes]
│   │   └── ...
│   │
│   ├── fresas/
│   │   └── [Imágenes de cajas y productos con fresas]
│   │
│   ├── anchetas/
│   │   └── [Imágenes de anchetas y combos]
│   │
│   └── canva/
│       └── [Recursos de diseño]
│
└── [Otros archivos raíz]
```

---

## 📝 Cómo Usar Esta Estructura

### En el Código (producto.html, tienda.html, etc.)
Cada producto tiene definido su `imageFolder`:

```javascript
{
  id: 203,
  name: 'Ramo Cisne',
  imageFolder: 'img/floristeria/',  // ← Ubicación centralizada
  img: 'Floristeria.jpg',
  images: ['Floristeria.jpg', 'IMG_0612.JPG'],
  category: 'Rosas',
  // ... otros campos
}
```

### Para Agregar Nuevos Productos
1. Crear subcarpeta en `img/` si es una nueva categoría
2. Agregar field `imageFolder: 'tu/ruta/'` al objeto del producto
3. Referenciar imágenes desde la carpeta especificada
4. Desplegar cambios con `deploy.ps1`

### Para Referenciar Imágenes
Las rutas completas se construyen combinando:
- `imageFolder` del producto
- Nombre del archivo de imagen

**Ejemplo:**
```
Carpeta: img/floristeria/
Imagen: IMG_0612.JPG
Ruta Completa: img/floristeria/IMG_0612.JPG
```

---

## ✅ Beneficios del Sistema

✨ **Organización Centralizada:** Todas las imágenes categorizadas por tipo de producto  
📊 **Mantenimiento Fácil:** Saber exactamente dónde están las imágenes de cada producto  
🚀 **Escalabilidad:** Agregar nuevas categorías es simple y estructurado  
🔍 **Trazabilidad:** Campo `imageFolder` documenta la ubicación en el código  
💾 **Backup & Migración:** Fácil de respaldar por categoría  

---

## 🔗 Archivos Relacionados
- `producto.html` - Definición de productos y sus carpetas
- `tienda.html` - Lista de todos los productos
- `floristeria.html` - Categoría de flores
- `desayunos.html` - Categoría de desayunos
- `fresas.html` - Categoría de cajas con fresas
- `anchetas.html` - Categoría de anchetas

**Última Actualización:** 1 de abril, 2026
