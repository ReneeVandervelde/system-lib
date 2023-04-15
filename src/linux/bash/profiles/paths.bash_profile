##
# Linux Specific Paths
##
PATH=$PATH:~/.android/sdk/platform-tools
PATH=$PATH:~/.android/sdk/tools
PATH=$PATH:~/.android/sdk/build-tools

PATH=${PATH}:$(find $LIB_SRC_ROOT/linux/bash -type d | sed '/\/\\./d' | tr '\n' ':' | sed 's/:$//')
