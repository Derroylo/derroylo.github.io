# Installation

::: info
Before installing WebDev make sure that you have installed all other requirements.
:::

Add the microsoft repository as the official ubuntu package manager doesn´t contain the dotnet runtime in version 9
```bash
wget https://packages.microsoft.com/config/ubuntu/22.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
sudo apt update
```

::: info
If you get an error, you might need to adjust it depending on your Operating System and it´s version. The command should work for Debian and Ubuntu.
:::

Install the dotnet runtime

```bash
sudo apt-get install -y dotnet-runtime-9.0
```

Download the latest release of this tool

```bash
curl -s https://api.github.com/repos/Derroylo/webdev-tool/releases/latest | grep "browser_download_url.*zip" | cut -d : -f 2,3 | tr -d \" | wget -qi -
```

Unzip the downloaded file, create a folder in your home directory and add a symlink to the bin folder

```bash
mkdir ~/webdev
unzip webdev-tool.zip -d ~/webdev/
rm webdev-tool.zip
chmod +x $HOME/webdev/webdev.sh
sudo ln -s $HOME/webdev/webdev.sh /usr/local/bin/webdev
```

On some system configurations the folder /usr/local/bin doesn´t exists, so we need to create it to follow linux best practices.

```bash
sudo mkdir -p /usr/local/bin
sudo chown root:root /usr/local/bin
sudo chmod 755 /usr/local/bin
```

If everything worked, then you should be able to use the webdev command in the terminal.