##
# MacOS Paths
##
PATH=$PATH:~/Library/Android/sdk/platform-tools
PATH=$PATH:~/Library/Android/sdk/tools
PATH=$PATH:~/Library/Android/sdk/build-tools
PATH=$PATH:/usr/local/bin

PATH=${PATH}:$(find $LIB_SRC_ROOT/macos -type d | sed '/\/\\./d' | tr '\n' ':' | sed 's/:$//')
