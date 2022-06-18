
function set-device {
    DEVICE=$1
    shift

    case "$DEVICE" in
        "carpenter")
            export ANDROID_SERIAL=0A241JEC218580 "$@"
            ;;
        *)
            >&2 echo "No device configured <$DEVICE>. Using directly."
            export ANDROID_SERIAL=$DEVICE "$@"
    esac
}

function connect-ip {
    local DEVICE=$1
    shift
    local PORT=$1
    shift

    case "$DEVICE" in
        "op8")
            local HOST=oneplus-8.rv.reneevandervelde.com
            ;;
        *)
            >&2 echo "No device configured <$DEVICE>. Using Directly"
            local HOST=$DEVICE
    esac

    echo "Connecting to device..."
    adb connect $HOST:$PORT || exit 2
    set-device $HOST:$PORT || exit 3
}
