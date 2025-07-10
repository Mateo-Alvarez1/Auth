# 🔐 Sistema de Autenticación con JWT y Roles

Si llegaste desde TikTok . Gracias por bancarme <3

Este es un sistema de autenticación robusto, ideal como base para cualquier app moderna .Si te sirve, dejale una ⭐ al repo me ayuda muchísimo a seguir creando contenido 🙌

## Descripción

Este proyecto es una implementación completa de autenticación y autorización usando:

- JWT para manejo de sesiones seguras
- Roles para limitar acceso a rutas (admin, user, etc.)
- Hash de contraseñas con bcrypt
- Guardas y decoradores personalizados
- Validaciones con DTOs

> Ideal para cualquier backend en NestJS que necesite control de acceso seguro y escalable.

## 📦 Cómo usarlo

**1. Cloná el repositorio <br/>**

    git clone git@github.com:Mateo-Alvarez1/Auth.git
    cd Auth
    
**2. Configurá las variables de entorno <br/>**
     Crea un archivo `.env` con los siguientes datos:

    DB_PASSWORD=your_db_password
    DB_NAME=your_db_name
    DB_USERNAME=your_db_username
    DB_PORT=5432
    DB_HOST=localhost
    JWT_SECRET=your_jwt_secret

**3. Instalá dependencias y corré el proyecto<br/>**

    cd server
    npm install
    npm run start:dev
    

## ⭐ ¿Te sirvió?
Seguime en tiktok que subo contenido sobre desarrollo , automatizaciones y experiencias
👉 **@matualvarez_**
