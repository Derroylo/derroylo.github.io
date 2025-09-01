# Shopware extension examples

## Introduction
On this page you can find some examples for shopware extensions.

::: info
If you have a good extension idea which should be implemented, create a new issue [here](https://github.com/Derroylo/derroylo.github.io/issues).
:::

## Install Shopware with some demo data
```shell:line-numbers {1}
#!/usr/bin/env bash

# Infos for WebDev
#
# webdevBranch: shopware
# webdevBranchDescription: Commands for shopware
# webdevCommand: install_demo
# webdevDescription: Download the shopware installer, unpack it and install shopware

result=false
for dir in \
    "$PWD/bin" \
    "$PWD/public" \
    "$PWD/src" \
    "$PWD/vendor" 
do
    if [ -d "$dir" ]; then
        result=true
        break
    fi
done

if ( $result ); then
    echo "There seems to be something installed already, aborting..."
    
    exit 1
fi

# Download and unzip the shopware installer
wget https://releases.shopware.com/sw6/install_v6.4.20.1_1d0e1a2bb4c4e0395c390b0911efd19748b1d9d0.zip
unzip -o install_v6.4.20.1_1d0e1a2bb4c4e0395c390b0911efd19748b1d9d0.zip
rm install_v6.4.20.1_1d0e1a2bb4c4e0395c390b0911efd19748b1d9d0.zip

# Add the trusted proxies to the environment, otherwise shopware will link files like images, css etc. only via http which will not work since the page is called via https
echo "TRUSTED_PROXIES=127.0.0.1,REMOTE_ADDR" > .env

# Add the database dsn
echo 'DATABASE_URL="mysql://root:webdev@mysql:3306/shopware?serverVersion=8&charset=utf8mb4"' >> .env

# Write the app secret
echo 'APP_SECRET=23456' >> .env

# Execute the setup
./bin/console system:install --basic-setup --create-database --shop-name demo --shop-email demo@demo.de --shop-locale en-GB --shop-currency eur

# Set the memory limit to 512M
gpt php ini set memory_limit 512M

# Update the sales channel domain
export APP_URL="https://shopware.dev.localhost";
echo "UPDATE shopware.sales_channel_domain SET url = '$APP_URL' WHERE url LIKE 'http%';" | mysql -uroot -pwebdev --protocol tcp;

# Install demo data
./bin/console framework:demodata --products 150 -e prod
./bin/console dal:refresh:index -e prod
```

## Update the domain for a sales channel
```bash:line-numbers {1}
#!/usr/bin/env bash

# Infos for WebDev
#
# webdevBranch: shopware
# webdevBranchDescription: Commands for shopware
# webdevCommand: update_domain
# webdevDescription: Updates the domain of the sales channel to the actual domain of gitpod as these might change after a restart

export APP_URL="https://shopware.dev.localhost";
echo "UPDATE shopware.sales_channel_domain SET url = '$APP_URL' WHERE url LIKE 'http%';" | mysql -uroot -pwebdev --protocol tcp;
```