# Используем официальный образ Node.js
FROM node:14-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json внутрь контейнера
COPY package.json package-lock.json ./

# Устанавливаем зависимости проекта
RUN npm install

# Копируем все файлы проекта внутрь контейнера
COPY . .

# Собираем приложение
RUN npm run build

# Указываем порт, на котором будет работать приложение
EXPOSE 3000

# Запускаем приложение
CMD [ "npm", "run", "serve" ]
