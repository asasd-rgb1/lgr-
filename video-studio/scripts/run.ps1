param(
    [ValidateSet('dev', 'lint', 'typecheck', 'build', 'compositions', 'still', 'render:preview', 'render:final', 'render:60fps', 'ffmpeg', 'ffprobe', 'verify:preview')]
    [string]$Task = 'dev',
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$TaskArgs
)
$ErrorActionPreference = 'Stop'
# Refresh newly installed user tools in terminals that were already open.
$taskUserPath = [Environment]::GetEnvironmentVariable('Path', 'User')
if ($taskUserPath) { $env:Path = "$taskUserPath;$env:Path" }
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { throw 'Node.js is missing; install Node.js 24 LTS.' }
$taskNpm = Get-Command npm.cmd -ErrorAction SilentlyContinue
if (-not $taskNpm) { throw 'npm is missing; open a new terminal after installing Node.js/npm.' }
Push-Location (Split-Path $PSScriptRoot -Parent)
try {
    & $taskNpm.Source run $Task -- @TaskArgs
    if ($LASTEXITCODE -ne 0) { throw "npm task failed: $Task (exit $LASTEXITCODE)" }
} finally { Pop-Location }
