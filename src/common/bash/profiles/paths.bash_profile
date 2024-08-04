##
# Shared Paths
##
PATH=$PATH:./project-bin
PATH=$PATH:./bin
PATH=$PATH:./
PATH=$PATH:$BIN_HOME

PATH=${PATH}:$(find $LIB_SRC_ROOT/common/bash -type d | sed '/\/\\./d' | tr '\n' ':' | sed 's/:$//')
