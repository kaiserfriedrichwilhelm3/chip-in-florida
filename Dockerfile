FROM nginx:alpine
COPY "demo (1).html" /usr/share/nginx/html/index.html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
