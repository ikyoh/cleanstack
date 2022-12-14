FROM php:8.1-fpm

# Copy composer.lock and composer.json
COPY composer.json /.

# Set working directory
WORKDIR /srv/api

ARG APP_ENV
ENV APP_ENV=$APP_ENV

ARG APP_SECRET
ENV APP_SECRET=$APP_SECRET

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

ARG JWT_PASSPHRASE
ENV JWT_PASSPHRASE=$JWT_PASSPHRASE

ARG CORS_ALLOW_ORIGIN
ENV CORS_ALLOW_ORIGIN=$CORS_ALLOW_ORIGIN

# Get nodejs
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl
    

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install extensions
RUN docker-php-ext-install pdo pdo_mysql
#RUN npm install -g -y yarn

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer selfupdate

#RUN ln -s $PHP_INI_DIR/php.ini-production $PHP_INI_DIR/php.ini
#COPY docker/php/conf.d/api-platform.prod.ini $PHP_INI_DIR/conf.d/api-platform.ini

#COPY docker/php/php-fpm.d/zz-docker.conf /usr/local/etc/php-fpm.d/zz-docker.conf

# Add user for symfony application
#RUN groupadd -g 1000 www
#RUN useradd -u 1000 -ms /bin/bash -g www www

# Copy existing application directory contents
COPY ./ ./


#RUN composer dump-env prod

# Copy existing application directory permissions
#COPY --chown=www:www . /var/www

# Change current user to www
#USER www



# Expose port 9000 and start php server
EXPOSE 9000
CMD ["php-fpm"]
