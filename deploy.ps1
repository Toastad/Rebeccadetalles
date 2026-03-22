param(
	[string]$Message = "update"
)

git add .

$changes = git diff --cached --name-only
if (-not $changes) {
	Write-Host "No hay cambios para publicar." -ForegroundColor Yellow
	exit 0
}

git commit -m $Message
git push origin master

Write-Host "Sitio actualizado. Espera 1-2 minutos y recarga la pagina." -ForegroundColor Green
