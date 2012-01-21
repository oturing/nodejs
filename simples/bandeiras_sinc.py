#!/usr/bin/env python

from time import time
from urllib2 import urlopen

BASE_URL = ('https://www.cia.gov/library/publications/the-world-factbook'
            '/graphics/flags/large/')

DESTINO = './bandeiras/'

QT_BAIXAR = 10

t0 = time()

with open('bandeiras.txt') as nomes:
    for index, nome in enumerate(list(nomes)[:QT_BAIXAR]):
        nome = nome.strip()
        print index+1, nome
        img_orig = urlopen(BASE_URL+nome)
        with open(DESTINO+nome, 'wb') as img_local:
            img = img_orig.read()
            img_local.write(img)
        img_orig.close()
        print '\t%s' % (index+1), nome, 'salvo'

print 'tempo transcorrido: %sms' % int((time()-t0)*1000)
