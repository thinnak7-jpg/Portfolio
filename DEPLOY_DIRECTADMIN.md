# Deploy React (Vite) to DirectAdmin

โปรเจกต์นี้เป็น React + Vite และเหมาะกับการ deploy แบบ Static Website

## แบบที่แนะนำ

1. ติดตั้ง dependency ให้ครบ
2. สั่ง build
3. อัปโหลดไฟล์ในโฟลเดอร์ `dist` ไปที่ `public_html`
4. ทดสอบเปิดเว็บจริงและลองกด refresh หน้าภายใน

## คำสั่งที่ใช้

```bash
npm run build
```

เมื่อ build สำเร็จ ให้ใช้ไฟล์ทั้งหมดในโฟลเดอร์ `dist`

## ตำแหน่งอัปโหลดบน DirectAdmin

- ถ้าเป็นโดเมนหลัก: อัปโหลดเนื้อหาข้างใน `dist` ไปที่ `public_html`
- ถ้าเป็น subdomain/addon domain: อัปโหลดไปที่ document root ของโดเมนนั้น

สำคัญ: ให้คัดลอก "ไฟล์ข้างใน" `dist` ขึ้นไป ไม่ใช่อัปโหลดโฟลเดอร์ `dist` ทั้งก้อนแล้วให้เว็บวิ่งจาก `/dist`

## เรื่อง React Router

โปรเจกต์นี้ใช้ `BrowserRouter` ดังนั้นถ้าเปิดหน้าอย่าง `/projects` ตรงๆ หรือกด refresh อาจเจอ 404 บนโฮสต์จริงได้

ผมจึงเพิ่มไฟล์ `.htaccess` ไว้ใน `public/` แล้ว และจะถูกคัดลอกไปใน `dist/` ตอน build เพื่อให้ Apache redirect กลับไป `index.html`

## ถ้าจะลงในโฟลเดอร์ย่อย

ตัวอย่างเช่นเว็บจะอยู่ที่:

```text
https://example.com/portfolio/
```

ให้แก้ `vite.config.ts` เพิ่ม `base`

```ts
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
```

และแก้ `RewriteBase` ใน `.htaccess` เป็น:

```apache
RewriteBase /portfolio/
```

จากนั้น build ใหม่อีกครั้ง

## เช็กลิสต์ก่อนขึ้นโปรดักชัน

- โดเมนชี้มาที่โฮสติ้งแล้ว
- เปิด SSL แล้ว
- อัปโหลดไฟล์ใน `dist` ครบ
- มี `.htaccess` อยู่ในปลายทาง
- ลองเข้าหน้า `/`, `/about`, `/projects`, `/contact`
- ลอง refresh ในหน้าที่ไม่ใช่หน้าแรก

## ถ้าเว็บขาวหรือ asset ไม่โหลด

มักเกิดจาก 3 สาเหตุ:

1. อัปโหลดผิดที่
2. ตั้ง `base` ไม่ตรงกับ path จริง
3. เซิร์ฟเวอร์ไม่อ่าน `.htaccess` หรือไม่มี `mod_rewrite`

## ไฟล์ที่เกี่ยวข้องในโปรเจกต์นี้

- `package.json` มี script `build`
- `vite.config.ts` ใช้ตั้งค่า `base` ถ้าลงโฟลเดอร์ย่อย
- `public/.htaccess` ช่วยแก้ refresh แล้ว 404
