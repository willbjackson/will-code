#!/bin/bash


# Install ubuntu agreeing to all prompts and setting the default user to root with no password

sudo apt-get install build-essential curl file git

# Install Windows subsystem for linux

echo "Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux"

# Homebrew installation

echo sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"

echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.profile

# brew install hello

# Installing Git on Linux

sudo apt-get install git


# Installing Azure CLI with apt on Linux

sudo apt-get install curl apt-transport-https lsb-release gpg

sudo apt-get install azure-cli


# Install Node on Linux

sudo apt-get install nodejs
sudo apt-get install npm


