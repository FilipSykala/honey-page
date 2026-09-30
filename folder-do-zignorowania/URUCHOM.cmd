@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0"
set "PORT=8765"
set "HOST=127.0.0.1"
set "NO_OPEN=0"
where node >nul 2>nul
if errorlevel 1 (
  echo Nie znaleziono Node.js. Zainstaluj Node.js 20 lub nowszy.
  echo Wspolna mapa pasiek wymaga uruchomienia serwera.
  pause
  exit /b 1
)
node "%~dp0serwer.cjs"
pause
