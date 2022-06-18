
case "$OSTYPE" in
    "darwin"*)
        for f in $LIB_SRC_ROOT/macos/bash/profiles/*.bash_profile; do
            if [[ "$f" ==  "$LIB_SRC_ROOT/macos/bash/profiles/*.bash_profile" ]]; then continue; fi
            source $f
        done
        ;;
    "linux-gnu"*)
        for f in $LIB_SRC_ROOT/linux/bash/profiles/*.bash_profile; do 
            if [[ "$f" ==  "$LIB_SRC_ROOT/linux/bash/profiles/*.bash_profile" ]]; then continue; fi
            source $f
        done
        ;;
    *)
        echo -e "\033[0;31mOS Type <$OSTYPE> not set up.\033[0m" 1>&2;
        ;;
esac
