##
# Shared Paths
##
PATH=$PATH:./project-bin
PATH=$PATH:./

PATH=${PATH}:$(find $LIB_SRC_ROOT/common -type d | sed '/\/\\./d' | tr '\n' ':' | sed 's/:$//')
