# การเปลี่ยนจาก SQLite (Local) เป็น Supabase (Production)

โปรเจกต์นี้เริ่มต้นด้วย **SQLite** เพื่อความรวดเร็วในการพัฒนาบนเครื่อง Local แต่การนำขึ้น Production (ใช้งานจริง) เราจะเปลี่ยนไปใช้ **Supabase (PostgreSQL)**

## ขั้นตอนการเปลี่ยน (Migration Steps)

1.  **สมัคร Supabase**: สร้างโปรเจกต์ใหม่ที่ https://supabase.com
2.  **รับ Connection String**: ไปที่ Project Settings -> Database -> Connection String (URI)
3.  **อัปเดต Environment Variable**: แก้ไขไฟล์ `.env` ในเครื่อง (หรือ Environment Variables บน Vercel)
    ```env
    DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
    ```
4.  **อัปเดต Schema**: เปลี่ยน Provider ใน `prisma/schema.prisma`
    ```prisma
    datasource db {
      provider = "postgresql" // เปลี่ยนจาก sqlite เป็น postgresql
      url      = env("DATABASE_URL")
    }
    ```
5.  **Push Schema**: รันคำสั่งเพื่อสร้างตารางบน Supabase
    ```bash
    npx prisma db push
    ```

เพียงเท่านี้ ข้อมูลและโครงสร้างทั้งหมดก็จะไปอยู่บน Supabase พร้อมสำหรับใช้งานจริงทันที!
