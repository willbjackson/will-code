#!/bin/bash

#!/bin/bash

start_node()
{
    filename=$1

    # check to see if the file exist if it does, run node file
    if [ -e $filename ]; then
        node $filename
        echo "$filename started"
    else
        echo "no file"
    fi
}

stop-node()
{
    filename=$1
    result=$(ps | grep -E '\snode\s' | grep -E $filename)
    echo $result
}

command=$1
$command $2

