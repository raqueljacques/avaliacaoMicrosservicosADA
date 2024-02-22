# Script pra rodar npm install em todas as pastas que contém package.json
# Para rodar é necessário dar permissão de execução com chmod +x install-all.sh
# E depois rodar com ./install-all.sh
dirs=$(find . -type f -name "package.json" -exec dirname {} \;)

for dir in $dirs; do
  echo "Instalando dependências em $dir"
  (cd "$dir" && npm install)
done
