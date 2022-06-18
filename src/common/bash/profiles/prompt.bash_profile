##
# Prompt
##
__prompt_command() {
    local EXIT="$?"
    PS1=""

    local ResetColor='\[\e[0m\]'
    local Red='\[\e[0;31m\]'
    local Green='\[\e[0;32m\]'

    if [ $EXIT == 50 ]; then 
        PS1+="${Red}⁉️-$EXIT";
    elif [ $EXIT == 40 ] || [ $EXIT == 41 ]; then
        PS1+="${Red}‼️-$EXIT";
    elif [ $EXIT != 0 ]; then
        PS1+="${Red}✘-$EXIT"
    else
        PS1+="${Green}✔"
    fi

    PS1+="${ResetColor} \$ "
}

PROMPT_COMMAND=__prompt_command
