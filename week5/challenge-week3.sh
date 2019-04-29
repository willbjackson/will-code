#!/bin/bash

if [ -z "$(which az)" ]; then
    echo "azure-cli not installed"
fi

VMname=$1
groupName=$2
typeOfImage=$3
size=$4
groupName=$5
size=$6
adminUsername=$7
diskName=${VMname}disk

createRG()
{
    if [ "$(az group exists --name $groupNAme)" = "false" ]; then
    az group create 
    -n $groupName \
    -l $location
    fi
}

createVM()
{
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

#figure out the publicIp
public_ip=$(az vm show -g $groupName -n $VMname... )
#ssh into new vm

# create disk
createDisk()
{
    diskCheck=$(az disk list --query [].n | grep -E $diskName)

    if [ -n "$diskCheck" ]; then 
        echo "this disk name already exists"
    fi

    az disk create
    -n $diskName \
    -g $groupName \
    -size-gb $size \
    -os-type Linux \
    --vm-name $VMname
}



while read text
do
  node index.js "$text"
done

