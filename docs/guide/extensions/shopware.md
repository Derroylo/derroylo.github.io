::: warning
This Documentation is currently being rewritten for WebDev, which is the successor of GPT (for which this docs have been written), as Gitpod Classic will be shutdown in the next few weeks.

The Release of WebDev is currently planned within the first two weeks of september.
:::

# Shopware extension examples

## Introduction
On this page you can find some examples for shopware extensions. These might not be up to date, so make sure to check my current [sample workspace for shopware](https://github.com/Derroylo/shopware-workspace-sample/tree/main/.devEnv/gitpod/scripts/shopware)

::: info
If you have a good extension idea which should be implemented, create a new issue [here](https://github.com/Derroylo/shopware-workspace-sample/issues) or head over to the [Gitpod discord server](https://discord.com/invite/gitpod) to contact me directly.
:::

## Install Shopware with some demo data
```shell:line-numbers {1}
#!/usr/bin/env bash

# Infos for GitpodTool
#
# gptBranch: shopware
# gptBranchDescription: Commands for shopware
# gptCommand: install_demo
# gptDescription: Download the shopware installer, unpack it and install shopware

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
echo 'DATABASE_URL="mysql://root:gitpod@127.0.0.1:3306/shopware?serverVersion=8&charset=utf8mb4"' >> .env

# Write the app secret
echo 'APP_SECRET=23456' >> .env

# Execute the setup
./bin/console system:install --basic-setup --create-database --shop-name demo --shop-email demo@demo.de --shop-locale en-GB --shop-currency eur

# Set the memory limit to 512M
gpt php ini set memory_limit 512M

# Update the sales channel domain
export APP_URL=$(gp url 8080);
echo "UPDATE shopware.sales_channel_domain SET url = '$APP_URL' WHERE url LIKE 'http%';" | mysql -uroot -pgitpod --protocol tcp;

# Install demo data
./bin/console framework:demodata --products 150 -e prod
./bin/console dal:refresh:index -e prod
```

## Update the domain for a sales channel
```shell:line-numbers {1}
#!/usr/bin/env bash

# Infos for GitpodTool
#
# gptBranch: shopware
# gptBranchDescription: Commands for shopware
# gptCommand: update_domain
# gptDescription: Updates the domain of the sales channel to the actual domain of gitpod as these might change after a restart
# The following shopware command will not work as it detects the access via http which is a problem specific with gitpod and how it forwards ports
#./bin/console sales-channel:update:domain $(gp url 8080 | awk -F[/:] '{print $4}')

export APP_URL=$(gp url 8080);
echo "UPDATE shopware.sales_channel_domain SET url = '$APP_URL' WHERE url LIKE 'http%';" | mysql -uroot -pgitpod --protocol tcp;
```