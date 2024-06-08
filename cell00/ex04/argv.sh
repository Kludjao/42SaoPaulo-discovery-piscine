#!/bin/bash

echo "num de argumentos: $#"
if [ $# -eq 0 ]; then
   echo "No arguments supplied!"
else
   for ARG in ${@:1:3}; do
      echo $ARG
   done
fi
