@echo off
chcp 65001 >nul
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Nie znaleziono Node.js. Zainstaluj Node.js 20 lub nowszy.
  echo Wspolna mapa pasiek wymaga uruchomienia serwera.
  pause
  exit /b 1
)
node serwer.cjs
pause
