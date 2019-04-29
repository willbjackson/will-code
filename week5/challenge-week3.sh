#!/bin/bash

if [ -z "$(which az)" ]; then
    echo "azure-cli not installed"
fi


createVM()
{
    adminUsername=VmAdminName
    VMname=$1
    groupName=$2
    typeOfImage=$3
    size=$4

    VMcheck=$(az vm list --query [].name | grep -E $VMname)

    if [ -n "$VMcheck" ]; then 
        echo "this vm name already exists"
    fi

    az vm create 
    -n $VMname \
    -g $groupName \
    --image $typeOfImage \
    --size $size \
    --generate-ssh-keys \
    -u $adminUsername
}

createDisk()
{
    diskName=$1 \
    groupName=$2 \
    size=$3

    diskCheck=$(az disk list --query [].n | grep -E $diskName)

    if [ -n "$diskCheck" ]; then 
        echo "this disk name already exists"
    fi

    az disk create
    -n $diskName
    -g $groupName
    -size-gb $size
}