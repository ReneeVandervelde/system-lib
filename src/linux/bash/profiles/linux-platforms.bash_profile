
if [[ -f "/etc/redhat-release" ]]; then
    for f in $LIB_SRC_ROOT/rhel/bash/profiles/*.bash_profile; do 
        if [[ "$f" ==  "$LIB_SRC_ROOT/rhel/bash/profiles/*.bash_profile" ]]; then continue; fi
        source $f
    done
fi
