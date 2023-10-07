# nodejs-napi-ffi-alpine-linux
Node.js N-API FFI Alpine Linux

## GCC
`# gcc -c -fPIC my.c`

`# gcc -shared -o libMy.so my.o`

## Alpine Linux
https://wiki.alpinelinux.org/wiki/Bluetooth

`# setup-devd udev`

maybe

`# apk add musl-dev make cmake`

and

`# apk add bluez`

`# apk add bluez-deprecated`

or

`# apk add blueman`

or

`# apk add bluedevil`

or

`# apk add gnome-bluetooth`

then

`# modprobe btusb`

`# adduser $USER lp`

`# rc-service bluetooth start`

`# rc-update add bluetooth default`

for test

`# bluetoothctl`

then

https://wiki.alpinelinux.org/wiki/GCC

For a smaller install you may install just gcc but will also need at least musl-dev or libc-dev.

## Nodejs
https://github.com/node-ffi/node-ffi/wiki/Node-FFI-Tutorial

`# npm i ffi-napi`
