#!/bin/bash

username=$1


create_user()
{
    userdisplayname=$1
    DOMAIN=mschw90gmail.onmicrosoft.com
    userprincipalname=$userdisplayname@$DOMAIN
    random=$(date)
    usersubscription=$2

    # creates a new user if the user doesnt already exist 
    result=$(az ad user list --query [].userPrincipalName | grep -E /$userdisplayname/)

    if [ -n $result ]; then
        az ad user create 
        --display-name $userdisplayname 
        --user-principal-name $userprincipalname 
        --force-change-password-next-login 
        --password $random 
        --subscription $usersubscription

        echo "user created"
    else 
        echo "been there done that"
    fi
}


