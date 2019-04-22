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

#kill node
stop-node()
{
    filename=$1
    result=$(kill -INT $$)
    echo $result
}

command=$1
$command $2

exit 0

