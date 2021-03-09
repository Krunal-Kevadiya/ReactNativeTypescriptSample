#!/usr/bin/env bash
    
echo "PreBuild script"
if [ "$APP_CENTER_CURRENT_PLATFORM" == "android" ]
then
#ANDROID
    echo "jetify will run"
    npx jetify
fi