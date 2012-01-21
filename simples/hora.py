#!/usr/bin/env python

from time import sleep, strftime

print 'Tecle ^C para encerrar'
while True:
    print strftime('%H:%M:%S')
    sleep(1)
