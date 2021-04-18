import speedtest
import json
from datetime import datetime

# Função para escrever JSON
def writeToJSONFile(path, fileName, data):
    filePathNameWExt = './' + path + '/' + fileName + '.json'
    with open(filePathNameWExt, 'w') as fp:
        json.dump(data, fp, indent=2)
        
# Varíaveis de local e nome do arquivo
path = './'
fileName = 'VelocidadeNet'

# Função para verificar velocidade da internet, armazenar valores de download e upload e exportar em JSON
def internet():
    s = speedtest.Speedtest()
    data_atual = datetime.now().strftime('%d/%m/%Y')
    hora_atual = datetime.now().strftime('%H:%M')
    velocidade = s.download(threads=None)*(10**-6)
    upload = s.upload(threads=None)*(10**-6)
    velocidadeTestada = [data_atual, hora_atual, velocidade, upload]
    return velocidadeTestada
internet()
print(internet())
# Escrevendo resultados em JSON
writeToJSONFile(path, fileName, internet())
