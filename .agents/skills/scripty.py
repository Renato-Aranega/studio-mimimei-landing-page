import os
import zipfile

def zipar_pastas_skills(pasta_origem, pasta_destino):
    """
    Percorre uma pasta origem, encontra todas as subpastas e cria um .zip
    para cada uma delas na pasta destino, garantindo que os arquivos fiquem
    na raiz do .zip.
    """
    # Cria a pasta de destino caso ela não exista
    if not os.path.exists(pasta_destino):
        os.makedirs(pasta_destino)
        print(f"📁 Pasta de destino criada: {pasta_destino}")

    # Lista todos os itens na pasta de origem
    itens = os.listdir(pasta_origem)
    pastas_encontradas = 0

    for item in itens:
        caminho_item = os.path.join(pasta_origem, item)

        # Processa apenas se for um diretório (pasta)
        if os.path.isdir(caminho_item):
            pastas_encontradas += 1
            nome_zip = f"{item}.zip"
            caminho_zip = os.path.join(pasta_destino, nome_zip)

            print(f"⚙️ Compactando: {item} -> {nome_zip}...")

            # Cria o arquivo ZIP
            with zipfile.ZipFile(caminho_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
                # Caminha por todos os arquivos e subpastas dentro da skill
                for raiz, _, arquivos in os.walk(caminho_item):
                    for arquivo in arquivos:
                        caminho_completo_arquivo = os.path.join(raiz, arquivo)
                        
                        # Calcula o caminho relativo para que o arquivo fique na raiz do ZIP
                        # Ex: C:\skils\revops\SKILL.md vira apenas SKILL.md dentro do zip
                        caminho_relativo_no_zip = os.path.relpath(caminho_completo_arquivo, caminho_item)
                        
                        # Adiciona ao zip
                        zipf.write(caminho_completo_arquivo, arcname=caminho_relativo_no_zip)

    if pastas_encontradas == 0:
        print(f"⚠️ Nenhuma pasta encontrada em {pasta_origem}.")
    else:
        print(f"\n✅ Concluído! {pastas_encontradas} skills foram compactadas com sucesso.")
        print(f"📂 Você pode encontrar os arquivos em: {pasta_destino}")

# --- Configuração dos caminhos ---
# Usamos o 'r' antes da string para o Python ler as barras invertidas do Windows corretamente
PASTA_SKILLS = r"C:\skills"
PASTA_DESTINO = r"C:\skills_zipadas"

if __name__ == "__main__":
    if os.path.exists(PASTA_SKILLS):
        zipar_pastas_skills(PASTA_SKILLS, PASTA_DESTINO)
    else:
        print(f"❌ Erro: A pasta de origem '{PASTA_SKILLS}' não foi encontrada.")