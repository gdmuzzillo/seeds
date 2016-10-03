FROM nginx:latest

EXPOSE 80 443

RUN mkdir -p /var/www/<site_folder>

COPY dist /var/www/<site_folder> 
COPY nginx-conf/<site_name>.conf /etc/nginx/conf.d/default.conf
