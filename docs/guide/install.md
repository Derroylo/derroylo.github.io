::: danger
This Documentation is currently being rewritten for WebDev, which is the successor of GPT (for which this docs have been written), as Gitpod Classic will be shutdown in the next few weeks.

The Release of WebDev is currently planned within the first two weeks of september.
:::

# Install GPT

## Overview
GPT is written in C# and uses the .NET Framework in Version 7. The best way to install it is using a custom Dockerfile. As an example for that, take a look at my [Gitpod Shopware Workspace sample](https://github.com/Derroylo/shopware-workspace-sample).

## Install .NET 7
First you need to install the .NET Framework in Version 7

::: code-group

```docker:line-numbers {1} [.gitpod.dockerfile]
# Add the microsoft package repo (is needed for .net 7.0 as the official ubuntu repo only contains .net 6.0 so far)
# Source https://learn.microsoft.com/en-us/dotnet/core/install/linux-ubuntu#register-the-microsoft-package-repository
RUN wget https://packages.microsoft.com/config/ubuntu/22.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb \
    && sudo dpkg -i packages-microsoft-prod.deb \
    && rm packages-microsoft-prod.deb \
    && apt update \
    && apt-get install -y dotnet-runtime-7.0
```

```shell:line-numbers {1} [Shell]
# Add the microsoft package repo (is needed for .net 7.0 as the official ubuntu repo only contains .net 6.0 so far)
# Source https://learn.microsoft.com/en-us/dotnet/core/install/linux-ubuntu#register-the-microsoft-package-repository
wget https://packages.microsoft.com/config/ubuntu/22.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
apt update
apt-get install -y dotnet-runtime-7.0
```

:::

## Install GPT

::: code-group

```docker:line-numbers {1} [.gitpod.dockerfile]
# Download and unzip the gitpod tool (Make sure the user is gitpod, otherwise you will get permission denied)
RUN curl -s https://api.github.com/repos/Derroylo/gitpod-tool/releases/latest | grep "browser_download_url.*zip" | cut -d : -f 2,3 | tr -d \" | wget -qi - \
    && mkdir /home/gitpod/.gpt \
    && unzip gitpod-tool.zip -d /home/gitpod/.gpt/ \
    && rm gitpod-tool.zip \
    && chmod +x /home/gitpod/.gpt/gpt.sh \
    && echo "alias gpt='$HOME/.gpt/gpt.sh'" > .bashrc.d/gitpod-tool
```

```shell:line-numbers {1} [Shell]
# Download and unzip the gitpod tool (Make sure the user is gitpod, otherwise you will get permission denied)
curl -s https://api.github.com/repos/Derroylo/gitpod-tool/releases/latest | grep "browser_download_url.*zip" | cut -d : -f 2,3 | tr -d \" | wget -qi -
mkdir /home/gitpod/.gpt
unzip gitpod-tool.zip -d /home/gitpod/.gpt/
rm gitpod-tool.zip
chmod +x /home/gitpod/.gpt/gpt.sh
echo "alias gpt='$HOME/.gpt/gpt.sh'" > .bashrc.d/gitpod-tool
```

:::

## Usage
After you have installed GPT, following the infos above, you should be able to type `gpt` in your terminal and get a response.

## What is the purpose of the gpt.sh script?
You might wonder why GPT isn´t executed directly but instead is started via a shell script. There are multiple reasons for that. One is that GPT can´t be updated while it is running and also we want to see sometimes the output of commands like `docker-compose up` which is not that easy with C# and will not work reliable, at least to my knowledge.

## Common Problems
### Access denied
If you execute `gpt` in your terminal and get the Access denied error, this mostly means that you installed it with the wrong user. GPT creates some files, for example it checks for new versions and caches them, so it needs to have access to the folder where it is installed to. So make sure that you install it for the gitpod user. (See the shopware example workspace on how to change the current user in the dockerfile)