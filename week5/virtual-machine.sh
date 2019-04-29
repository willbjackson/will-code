#!/bin/bash


VM_RG=virtual-machine-group
location=$1
VM_NAME=$2


if [ -z $(which az) ]; then
    exit 1
fi

# verify resource group
if [ -z $(az group exists -n $VM_RG)]; then
    az group create -n $VM_RG -l $location -s $subscription
fi

# create vm
az vm create 

    -g $VM_RG \
    -n linux-${time} \ 
    --generate-ssh-keys \
    --image ubuntu-1804 \
    --size standardb1s \
    -u $username \
    --tags ubuntu \
    -ip $ip \
    --subnet $subnet
    
