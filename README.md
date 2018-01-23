Projekt na Zaawansowane Technologie Bazodanowe

![alt text](https://i.imgur.com/lxWH0lr.png)

Wymagania:
```
postgres
angular4+
```

Instalacja postigsa:
```
sudo apt-get install postgresql-9.6-postgis-2.3
```

Konfiguracja bazy:
```
CREATE EXTENSION postgis;
CREATE TABLE krakow_oprawy(label TEXT NOT NULL, position GEOMETRY NOT NULL, height REAL NOT NULL, arm_length REAL NOT NULL);
ALTER USER osboxes PASSWORD 'osboxes';
```

W pliku *server.js* znajduje się zmienna *config*, którą należy odpowiednio zdefiniować by móc połączyć się z bazą danych.

Plik sql został wygenerowany po przez zastąpienie przecinków kropkami, średników przecinkami i wykonaniem funkcji find and replace:
```
^"([\d\w\s/]+)",([\d.]+),([\d.]+),([\d.]+),([\d.]+)$
INSERT INTO krakow_oprawy VALUES('$1', ST_Point($2, $3), $4, $5);
```
