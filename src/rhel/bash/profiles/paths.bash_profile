##
# RHEL Specific Paths
##

PATH=${PATH}:$(find $LIB_SRC_ROOT/rhel -type d | sed '/\/\\./d' | tr '\n' ':' | sed 's/:$//')
